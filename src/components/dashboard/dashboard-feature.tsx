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
    "5h1YDjqrE2UmLdFwJkZ5VecxDz7qHKxszuypU2YDRoMqQaH1Hg9uqa7FCRi91ENHkX23dqJ1iVpPJrzffEhcFcxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pZcvgpktxyxCykzHnaL7VWQ1L19T7k2jZHqcqBB45bSkSG8u7Pn1zG32uFs9Ztyr8yu7AuxZuSchdKhpe8sEe18",
  "key1": "3Sk6ZueRSbEdGHBDwBMX7JWtB6UTvGBZQjZ5GF9w5rvoJQ4hXdLQ8PrCoFWG4vYzX9nTiyUGwgFmJdtcRDEH2oFR",
  "key2": "4SpQE6RbfoRxVQzMJBj49KvPYxiMz9EojSFZiewTMzpFsUufsN1N1VBqRcjEN14z7cqxvebSJaqWF5ysYHi1ny5p",
  "key3": "4DmqEWRrbmkgFsfu98G9BkEd4BvVbZp2BGEiDeBeqvGUGgKRUv4v4Y63gJizDdtnXvMbQ3ZjmVuo1ofKSCU4T1Tz",
  "key4": "2GuomJPcSzc53is3exGp3VwJNiew8jT7kX2aaQ4FWcrzdLSfHBXooUFyKeFPLnAGJteyQ96M8tndx6GNkXHxkwuU",
  "key5": "4paFVq9ZXz66jd2TyU4YjvL2KVqNaDtFfreMiadyu8s2RYCe6nfEqYRmAZweaGpKhsHCzAd1SeNk9ovzpjEir6rU",
  "key6": "gkgchJjmTWphECarrq5Wp2z7zaEyDcUCFJzP9z7RCYX4C4Xuo1Krs9HDmjuW386Yyy7r9SncbMtPAUqKzdrCETc",
  "key7": "4j69aH3VoHicWA6gZ9Z87QAhoZVkW5WNDVWs2ubNAzWXFbtEDecGV3pbKNp9NZrvmEphzXGYVT4sprZqPMLn23xQ",
  "key8": "4eqNa8QXFVyDYzPjkTdxVZkqcjAjHtsh7K7joy7H25V28Ta3HeyL43z3TKA422gchacnay3RVDAxFviFwCy68H1j",
  "key9": "21X7u38fFyqUmjkohvZb5QmYeaQ4veYVTkkrKtbWJo8RUa37mH48qJ8WDGGp7w7NdvzZHiz3yzZGdVaSBKBEb3Ti",
  "key10": "2vjz3Yp4zwXqX5Jt6zr4h6NoetZ3aXh1uHfV5DFHdWak1uawmPXYhwQzvvhZQSqP7umN2CoguydpjWgEhVv46Abb",
  "key11": "2bcvdUAwnduRSdPmw2XxoWs7Qcqa6g7GWnd3atQPxeTSfmzpJwdH1REswbkqg3N2GyaFwECcb5vt3qjm24JMFR9i",
  "key12": "2yw7PmVbVs7z9cxpPLAP2BXQPAdKuWQNTjttz6hkpqKXYWkSuQcQafvLR4KH4B2CrPyFRMPwo1dVXQE96DnGyvE4",
  "key13": "4eqUKUSS5AhbsLRXFxMi2JZGD2XNDEbb2VKkEZ7GS2fXFJsKxVfqEfc1G8NQyRfKbTYNhw8Xppz5kDerz1dyCM7d",
  "key14": "5FH9jXL3z7d99X6m2DizksJF26TWTf1GD4oPFu3NdDwDv1BtJV9XRCpBGbZSGSfpnN84AoMQqRcRAwJpGfkFDzAz",
  "key15": "2y8HFyVXpHwVCgGxH5Re5yqZJ715EhVysCCzd8o7Zh69VNEbzsn6SE98av7RdQesWFSWBYYGQRstaoM8AjkvucWU",
  "key16": "56o5iHa5k2RPRPyh29rhUvK8BxzWt3aNbh1zLv9i6xgmCyL8AJJS4SKAyZAuJ9MM1gBJn6AJs8EaMDBE2ZveDKxQ",
  "key17": "3w329eW9wpow6WXuaJu41FWtH4dW8etQksD1CguuKrbsp2NteG8uu5nPsdpR62DkynTvhfLEU4VFDtscyRMEYQMA",
  "key18": "3tdWWY5eKELqHfJPgwCa8FG6PB2xYL1c4B4DQmcX7GoMtd4fuL9uEHoPbp2z8PdNcfFaeEYo1yKQuKDxafRd3K45",
  "key19": "2zLWDcGu9UruoTGbxDG28qkzSDnWBea1fUZabKDtu1mJmGbpfE9TNuc92LSwroRxPD7DzGfRGVXA3gR1qirEFSXk",
  "key20": "ceCkKgpWwJrgwsNxepUdDU2dTd9u8A37wo1N7GH2JcDgi615YtwBFXmBnMAPhTVMg7H2f5HeppAWWjuULWStbog",
  "key21": "2kTqcwytrW1Trenu4zTCnUz54WQh3rCGNRk9SRpBa2qbDBqibpxYKxEy6SDc7txs8TkmtJmgjGPn8L1nTwkTUitP",
  "key22": "5ZLWXmfV54RRnwwbLnABtM6HLuVNvP2p23R8pSCBVvHru5mgWu48HScPARsc8AjUTDouJHxcidWe3pKBih7p7qj8",
  "key23": "2cB5xsJdSLxGsyjzEugJNgCL5TMrSD5gwrEcQxoLmMefFDkPDakS85qBYmJZNEbwuzETm54QRuz9YWqEBzFZtSeo",
  "key24": "4mSKcoAExe74AGRyNyV8tUxY5NWCBVha2srYKChGKtSyizyvW1dywTQBf7REfguNxSSCVqQSiWhKrQSYsuofp7YE"
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
