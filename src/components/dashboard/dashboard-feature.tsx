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
    "2fJvMYetiGcVJgHrT2Ycx6Vgdmg4VitW49iJwx8wX2aza8iK9Q2XvE294koe3BCUBqLQ1iKfGBdu4HmjTyLBovvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iwzFNp3ijU2Ni3Tjcy3p3jWE9byZAPwGNkf3Ru4a4wMY1Vd7VxxwodST61AQVKumNE75GkhecQcXc595rPS3P3X",
  "key1": "5vShvS2k9CKfvxndJjSAVVyAD37qhxovSPHBzYrEyhGBzqZe5gJSHhYkmFs9cJhmPARErLLu11JvAzT7wAw1kaXg",
  "key2": "4wRCcx6siEGmuxpfex9i6uKjPa8Gix6223o9gXySQmUWXSsfJUkjzbgtRhLrf3EUJuaZM2YfVn1KZpgoJ2jykrPG",
  "key3": "5TqxuSUHnuG5tNJshGiU6ViqRbeurXkWgBivVyR2KwnPJbMU3ALh7XU9ifMRucFToVsyh2cVjuuk6UzMS4MHczZf",
  "key4": "53aDjW2H1osRxT2fqV3XVCDm3vTusXK7ioyHvaaHWvt1qd8RH5QSWRSQv7eFuCUtep3ZAcUtf5QUEsS92Hfj7G6F",
  "key5": "5GkNgAru4dmHfTXkJPAeWCzhdYqNNyZ59UDX47hiEsiYnjbdeiHSfRweCWaMT42jWV8thQbvJXKwqYUFNqJiFhcA",
  "key6": "5vJJ9Mna9cdQvqsyzsjkicfqcXo5Lk91N2Rw2RPKK2asVnQr9zeJ82xD7Cz5gzmCieZ2X6vNwrCHk72k7Ngqq2q",
  "key7": "4soTLkC8jjRenQhPBe5DJwj1QABYRoGog25q9j2borajijexxYFFFVhNQFCqAEYd8o76wjHy7hZBErFrFMfGpWMA",
  "key8": "5usE1bhW7LRTCqyUWRQq5nBiuR6WFi3bZVJpse8VKfWb8wuHMKnwp3SnYHRpKrcyGqnurMWNJBTqLooSXFavjxz6",
  "key9": "4MzuSEyneoWYfs3MjCtqCBfxsnNouwkUd4GqXooDSSwQxZzkBkjaXi22NpSGsoPV6QAGrCYJCfww2nWUq3e8RRQP",
  "key10": "2YQty2EfVkecQEso9HmBwcwe2CaQ9kP1Xvp8FJt1PjLr7NEEdXV2uwUQzswLQGwcVUEooKkFD8aHaRSME7BDb3ua",
  "key11": "4StWjsc8zZ7sN2j9RE3kEyaWKxBhvmGgQ2XLBSM2Ua2JzZ7gTde2qgYGByhqMA2KBxzWGUEyBv5FEhX6k5bqVzvA",
  "key12": "2UxWcTyqA9nLruimScxa1YcCd7dmXo1n9yC6G9V5JUcgg2eu4SixPdiFS5RRnnBrk4mDkMBkzLBenMR4CTLb84Af",
  "key13": "2RfxKtQAvQ3mQVSk2apNKqdih8PDqzaPZq4T22jHxjHLun5GpRJ7MB5KgyqsJBKGXXLQdNvGazCqmbWEMhMJH61c",
  "key14": "3AF4LKFgtAoHWKsBti8EBgcdt3WZ6e4DRb9CJQiqmLfkph3pweMvVqKPudd45cUnYHJKam5pKyEnE46eVL72ZThn",
  "key15": "5MYymzK9xbgzAPoT8jHSkSxyZ8ACD2EH92tPhhi2BoowbMeXTxSMJZaVMpS8xMBMQU8E9h6951FtGwv2ZwEi2wUQ",
  "key16": "yBrNQyLLyVHWE5BSKPPU2KxExVQgqxb8HqJ2mst6wBRo7SpxDCxQWCP7KMqvSpa1RoTfRoBLtscZaXP4Y9yrwq9",
  "key17": "yyv25WqSYpPVPvy8Qr5FTzQaXRM1NPY9wyH6DmMn1ezEL1iCYyJCqD3jyaXm851uSBGMJT2NfWsvoH3f8xU3Stc",
  "key18": "5o5Jb5FGMgEMKZpNACH863fQby1GzAXUFazm5sHTA1FLPAuiWBsSgrKchPGeM5ytCjDyVY5AbKM3hm8n2rgc5jcB",
  "key19": "4uHerXAKbHxD8xNMrSUDL8zfsfcwWrBY6EHhMyoEeWkjrwGgWiLYQViBsfc4cSeArUeaAkNayoZGa3t26AncFgmZ",
  "key20": "8urWAGgYHLDKqA2Dvi9FpbDdhJ7VxtQqcrmwhwmGTMPinUTS1uQ2Z1jWtrNo7WxETMJGxDgUJYssLmCtBD84DaN",
  "key21": "34ETYSgGm9yZswaFaBpF7MXPDsC8DHmmJBccmqok7F9Y5vZaWJ9Kx7d9qesBuvZtVXHZrZsXyUGwFgvKvQhJDvwp",
  "key22": "4SLRbokpefqzyMCqhfXQYpewev8LMbVt9D5dFJyNGwqLuCDw8tXS3885xrByszqLHHT9vg7gJimDMKKHSz3b6Nyn",
  "key23": "3BYaKXanH8DKL2nHehc2zqwZwpumwktKpHebrJa35rdQU1RQ7WvZF5Hz9NEaeVg9MT5MBzq1CaTLAmyg6kMMPgFn",
  "key24": "5VRexCSTTskvdyQWLJd4qQEUwYsjuDCsUeuFB3MkTGMKH4PejX3P2afszAujBzyPHTJVBMFpmSM1n1B3hWCyo99u"
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
