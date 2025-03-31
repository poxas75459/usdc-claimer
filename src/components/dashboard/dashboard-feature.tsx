/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5A9HDc2wxqU8GaSWoKChANMDxdfm7Qi1KfA63YnL3HFY2zdvSu46pUfmPMGdXPTMoLvyjoFcRqUQy8vBjEfAgBPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q52Ug38W9mgoFJqqVRBTevhNXXw3j8as7expvJ55CpUZ7tJ69CS1MknsfWQgJ4dC9xHjTDXSeZNzNQWf2HpgWH9",
  "key1": "5YuJnk7FULbzJrDcbKoHmm318cxMYdoNAMiHYAJWKjU9e6KvWvL1tyf9dyDLp3jo6V5C5acZvcxtgPTtFSBJHHsW",
  "key2": "4w1yzCWgvUE6KLqy8sDHh2xoXmGBL87gNvjeXRdPxn4teEZnkL7Tce28iY1eTaXkT5zDBRcBCtRyswwW2A7kpF1c",
  "key3": "HiEYjt4pWTsS8R2RRKAFUquRhfp49RYrf7WhZ9ET9s2YDMD1vJ3jYLuYNAWYKnXuvRMzUhc51EtWfn7KbY5pvR8",
  "key4": "sz2n58B9hWsw3TfydfYGA8MfDRTjKSj7scdFS1SpzBdQ86qFRSmxS9q1ux82dN9o3EYnYnuZcKHPHRa5iPpKdXU",
  "key5": "21jTsuE4DT2i2KHDriHen9XCQv23oGm6N2jSFU5WJch29Pm1P8NRHnjomk86uXjPsLRjXzGwz3wsRjbPh6FfMeVr",
  "key6": "4YeSQNKR7HZAmJ2xSsVGnKP5H9UYCkyAhRYAb2nEc3df8DSXFFoK8rGSnak2xRC3jmMzdyR6LKsxyXJwVtDgFjn5",
  "key7": "3MvzZuT7dru6KdSHL2ZXu87c52kiq9CBmvMv9urF9cgeKwyco23MMzbE3W4GJgA6kw5UdMakxGkd6SPagMjpeVCo",
  "key8": "EDZDB9msweGbZzR1Tk8GgnS6YMcDB81rz52vmesXgPSokLSgkZnkUNcEhjbbbTKJ9U6ki6gFVv2b6qgbQ1xPxW1",
  "key9": "5UjCaJZQxec5z43tKEqiti1E8T7fqNkeekrLA5rTzUXFiGV9PQEwq3SD6RLQVxVVGkFhAxnsR3PN6kSwL1apU1CK",
  "key10": "2Vvs64L3JHEkQ9BRcYrkVxLyrGHnZWo5R6EszGBjkj1uUoNWuZD7JfXLrMTuZMLbTNp2LptnYuRQAoPve8nfMDr1",
  "key11": "2XuUZn11Kw4LYiYDBVk2NmGK2J1z5Y9gqS32n2HPs9a5rgegnKTPRTbnSLrPNMgPzyGDdzRfBtsUh1AoUTfSfJst",
  "key12": "4KsH7PrQ9W8wwqFHXePFrtjKw4fV77CL21o6mm7WTxqr6AbqR8RKMJs4rDEyGTGivnrCkLCqKTtdAbUpHTMSoNZB",
  "key13": "BDquWJS4gpGQhP6YjgxzwQUrTEbue7P5N7GxV7yqr63fxWZqcPijX11cfm3ETJjtB81MHCPx9ikxL1nzZiAVDSd",
  "key14": "4ZKNBqE7RgW9BPxGG91G7AAmp1imHvTC8eUiiChexaYmXaGLHdUpLA62VMH7cYARMpmn1Gu7HM6VhdX4uDvjCHcc",
  "key15": "2XLQx6PpXdJPnsUBW1u6HfiquHDwsLkzg1GtH9qCS1GSHVF7M9FL2XzYX8i4CW62FPJLdfCg3cFUQL4Rx8DcXXQk",
  "key16": "4C7nq7E6wuHBvQv4QNFRkFVSiZsxohooZDf6XbR7pL5NfLePJN8bGynmjDAbxKGyEd1RmuYk4ti4NmgDg2WEdsRx",
  "key17": "5AgaGqHf2x44z9s4qJZU9p73eEJPKsEkMQCtxH3Y5NeQ3M2L4a6mvFTXUyBFLQZQN8pHLLWr3nAPLCKJfTKGwR1g",
  "key18": "5zrh1E4LEvTJqGGfZvF7Bqc3GriED7A1aSs19RDmYYChBpL4Sx1YP99wEtC9sQp6TNxPCk2yGjTGgWh4HbNzCMKj",
  "key19": "1ZL19SLbdNtUCSfXFfPunPiXcU3kziPM6aSxfdrihPwKvNMP3fZ7ZLfSAZENM2RX1XitvXRuHhd2NZDRdrHWRQP",
  "key20": "3LaYRrJ1aa3asoyVCa7DKXvud1zTbLVKni9GcGA4XsMf236ZCxGxHoBiYhBGT4xR9x7pikJsSjjok7hRv7dk7hUY",
  "key21": "2HQtVCQpgJuvkpJvr8wyLSnN6bFaAWjGNRCG7WF9a5iLzZdNzWvTHqkYMoUPY2rcCWtHrXtyVSXu54zBbGVgxkjk",
  "key22": "3k8BLqC6szTcyejohccseiB5KqaQ5ZVur376a8MUAyf5QGKxRT5EaJpnB3JjUZAejyNLuidtDVbPw9P8unAB5HTW",
  "key23": "3DrKjBE1vEjnMSdXzWDfuyC7LEDNYEduo2jJVvxMLVyPYmi5Vyx4eYr2BpXB3aHWVqwqaXRkzQgbrs2jR2CRg3P4",
  "key24": "2CXJBtgWE1TTd4zhwZisjTQYAfERM3SexW4KmEgW3uwsyHBwSxwtBHwE85yUHW5fvf3hDpH4bpLy9UyYHJtUtifp"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
