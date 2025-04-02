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
    "46MyeD3zLpzvurAeGin68xuhskMsQmTkWv1QPCuLNz7LAHyJTtd8gna1c7uPSBFW5Ax9U5s7NkvwiGeWN1SeWgA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iNjyLdbfo8BKYQX8s55smwmcWS5MKth7VNNKqRfCvXrYKL75U51awsULZUTCgwK5nYpCKBdprw4mogxSyNZoef6",
  "key1": "2Jq5EUkifbucRJwN3TBrrAQPCAkpffmAgSorTUyCws1QmSk5hwTB5KvF5enXWV5rDePpWjxxtbxiNvjPopE3h82W",
  "key2": "QnPVE4HKN35foz8Bk9gRRzbEFqcMYDfvksDDpXZLaqkpy2xKEoDtmZ3CuTmiLmJWNXdZPvxEnve38C4XmvedANa",
  "key3": "5dvnotTWnJuAnsXDpVuyb42rp53oshu6gqzfe9BTy2QgTw2xL5LrE67Xnefbic7URyXWnVLBdur3BAnsSY42uzdG",
  "key4": "63mh8cB3utD9b6RnBKvsUWvtdoZHYe6bozaxFX1HetTJXCtG8xXioqFGgtobsXJJX6mSxjcwpZ9ek2HJbQgnm7Sc",
  "key5": "3h31RLUv8QDqjsogJWHKAFJFZCL1DE641E9ueoULWwJmTJiAYnCNsMT3nnvWZa7uBivXyY6BB8fwB9CtayMc2edG",
  "key6": "2w68GbESYQhzMV4XeZwi6PLTLEwsaqqBRRhuHpAZbF942ALvg6wrRbz1BFaAW3seD2uDyPCP1WjssGsgR96NVFEx",
  "key7": "2NDLkS78Ja1wU5CHoTNBDDSseVEbPgyizHg4Tg2e3rfDnzjRoTmP2UFCuWuY3xk7FzkddreZXS56HPbs8etcd8Yh",
  "key8": "42JJrqtWrxhuQKQiQiVFzJRrsucCrobQPgCevoXKCFDRPSBvaCa3hUeerMMZ76hPCCyxUrkBwNWaByELhuuDhpyC",
  "key9": "3ZykQuu8UGw94cATA6hhCMDfZt4uNG2KDSn61QFKiVEFT4xW1uYnwPQna5ygdjuLNJeQUVBLQAKTZWtt4jzzcqZS",
  "key10": "4eF8Z4PVuiA17p8xUJzH64pbfyzJcujVz3JaS5uHaGQdz8mZXEYngbN8QR35YijaEhfDubmGbMm9e9QafFMrN2yG",
  "key11": "4nEUZxacHF3wKL7Wuz3y93Ygu9oR1P21SrY9ERtaB8LzQ1hohW78yGeubWxzqeQ1ZBYHq2g8vpAZFuSAoBq7V1DM",
  "key12": "4oVFV1pz8qic6djnWgjd1LMykEm13W6X13eStbZT5sctVx6S93BjumAk9zyAZfWg6swTUGaLfmZhSBQ4i1kEoy6c",
  "key13": "2vGENord4DgHWjxfiE6XUxYsRrtjSYusiPtkwXUR4p185j97rJzp8FNLBhWGBD77X3KWv2KNiL3ZiXTCiMRoRs5e",
  "key14": "4iLsMfMb2CkoMSign4PZf1kS7jBGSFHyvsYcbz8aVEWzAvi5maKirwwBRafWMXQDRjq6VNaKvJuL7b31uMT6DSZG",
  "key15": "PnY4Qq38P84oNBXiAgVMms7sAGrvW1gNQ1XJp3wEq9kopnWkTEMoMt1vDfk3PASg8xvJo1d6btXxuvUsbRwCHW8",
  "key16": "5nDQVoBdqYNj7TPxQrNvkWG4cyW5z2TcfezbMnWvpdxotRJBnwKjQHgTJ8gd1PB5ogisvZagWGmyF5m3JbZ7raeT",
  "key17": "2Dr9Kdsj2n1LBbBCAGowdsuinuZCvUPqSMn4b1pFU6M1hjaoQiLyD1ZXSS15FmK8eg2H9QqCyivASZehEPwvtEUM",
  "key18": "9s1vqDw4PknPHo2Akurt7LicP3DrYfRXUVCDdGAt1CQ8bMhPUCdxwGwbURed1Vhe7uL8m1zoTXSaFNwL6WZTKgC",
  "key19": "53tUyPnHd7EeQGLWHNeEatnYq3aoGTNFpe1sU1c1k4t3J8WD88D2EgrqsD7qApTrofwEd161hvAKMo3vQd81gQgt",
  "key20": "3hdwj9SaX555DdENNrv6uQufBnTNxXZfasJ6ZPARm651aXvPDesf5uFCRXnykPQ6zB15PSTS1yf3apR9HZyrJ6Ti",
  "key21": "23sQq11Qxf3rRhg7zy7bBdu69kjKZ1x8BmirNFQziVT7xiorcNuKBedZJTDzVEjDLLqHuPZPFBqpCA8MsY2GaC7Z",
  "key22": "52QfA9vETUcPFLjLnLW7MTSfk6NtRrU2oe5Uxrbadx4YAzPZjiWZNeySfj1u3fQ7wagA1iDf3YvfxBopNWk3mAxH",
  "key23": "5Zh4eEpSR2T4pb1PAaYQb519fpHUWKBvQztfzAJt78gaq88T2RBbSRQqfCdBqj4AjXhVn5RfUvA36eiWj4zXSoUB",
  "key24": "4NFnt7EaBmGid5ATsXYV4Jh4Z6N5JHAMjDaNSykE1tJXX9ZgpbuqFJ3WVBY2Wg71Xgyd7nLrJLSn3UJbRndGVQvB",
  "key25": "EuELGNYoiRMqbspSLA6iPoUd8UFabQHgx9ZnqhoKqpixYELjXUSve4N8qydEUUhnkHA3j41FuBf25U5Apz2ExHB",
  "key26": "4bdbSMBT4QYSgmAVb4WxtkB1iFUdMjkR7st4pXTPpzYvPUi6W3XKroFGJv6uxNcU8QcRrajFzJjXFfKsB6rGRR9U"
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
