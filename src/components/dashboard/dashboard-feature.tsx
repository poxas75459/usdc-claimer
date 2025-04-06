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
    "66LaUtuXUkAsMLyMgHaQqjUkh75pCo38WDUse7zEDVjvyxGDTcd1zPi9KcY5AgGVESSdEtVXHf5E4wDvFdmXbQZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iWt7XjJoeax7kYh5jngowKEwUbxaNvfsdD3fBxHCQ6u4VRs7UKt5nMQrxtbBTNWQ61Y35pWSA3d6V1DDajoW47q",
  "key1": "2jtY8deWRqWGQCAyy8aWqzeWyRrkThZDevCpX3GctcdEGKRjjGdj4uRmc1ZE2hHTrdUb5K3mYw5bxJSEWbTNuJRX",
  "key2": "apY7sQC1jeRWLEoTVQCzFmjKBz9JQhsag7Y8kJhEDFKJcH1eFv8VTfzXFWooSANXfeGtGJrYGMFMyJfuqDPNUqk",
  "key3": "4SHMruC8xCUmswsipDBY3wYuLi45joU4TEYDHGJuABZQjHthpe5xyfXbxyXR8D7prwtQrV7EqfkLEfqCbfiP7ZYw",
  "key4": "3poqH2fabMBJqLdr6xnBasvynHZJqGw4LJJyVkRcSuXzh2sd8BiLKJdg9mcmJkzgjMBG4E78wxDxm5t5D9vbzA6D",
  "key5": "5dZBGoyFBF9H5Swg5Y1s8QaCaRCDgjViNeTFhNVrUge5SaGPH6nP5tkZAcvsaEp26aGyUBfref1jAy9rzmBj3tVk",
  "key6": "62A8gu9huAT3xigNXFnAovRE71kDpAQKtS6LTKdcAtsSSe9YHz8NeiykGokP5vf5yTmyzAFgjfuygwHCW5Jn91G7",
  "key7": "2HVd3NQigk3FJW6ZaYqjXHQf9QrEU3cvYy1n5BArjXsCmSHBbCUepfLZ3nSFmvvXpHuu9NNVjp2LjzBpgU8ERNDt",
  "key8": "5y72ch9MjVt5MM1hyzCHR5ZegfKYZnj4D8K78xeEdDJyX6QQ2Vxko3oivs6xZjcrcZJXt7cHJv8VSdkz84Na2jv1",
  "key9": "2yXMGLNnqo967zn5XcrLVqrWXt5rCpEYzcg1KCAUiUTVyAJ5ib3ARMj8JQyezBemkZXZoc1yLo1Vbcdw578h7Umz",
  "key10": "5cNgQrxarXSt9V7h5BEBk7KgbtnFc3TsTQJyeW1VGeaMbRuhe4kmCcietXe67Gnb8B8nZNN6HzijM6ZVidK7C1KS",
  "key11": "4fnnAEUV65xd2CC1dCetChVQSmDaGJj3C3gGmLRjCRR5CMb3q6tT8HrgsesB8A6sWroj3d4bT1hQKFGQzjLg92XS",
  "key12": "61b8U8DVUeXUyzNjvmPCCZwphve3DhwaYiCrmvdF2XhBGzX1dKvZ2KMwxPJqdxVNSJSKmeFhscKE8iE54jfbmwQ9",
  "key13": "2GkZhX15M5gQJ6n1xyWP1cL7ZqRM2BKgtJcoMN1YKsetRqurH7UUTmQYkGuMiQAXHZYuWrcHbS667jAHqgiwJuK6",
  "key14": "hwbMVKxoxAkkRV7L1xd5oFUeyEXV2cBfosdZajBvfsEUHKoeiyRU95npN2e2BAuVMBTj1CEBK2Ubx7N92eihuLP",
  "key15": "Czdkuv1y6Nc4WLTvHJj95MZRQ5Zgz9wvsufySe3K3mUJY9KSfaRWUxrrVqjR8p38Yc2sXQQWqWFRzm5zcAjCQ8v",
  "key16": "5Kdx1Yd2C3Jw2aDZjPDYuM3rya85KNybUyw5MHNApNihD9QU7oeYSCFxyMyA81oLkRCNbdHojBRTPh88j4TvptPp",
  "key17": "7wAY68F1kU25MSPv1JBnMquqBLDtJ8xGJzDJ1ScfDQgofHEgdVi6BjgVDzo6UvR7Vvvc1S2Hv6Z9zjRtZU9xVLi",
  "key18": "5WbAdQsaxfzW9MPGCNEqxp8QmX8b1XuYyVyzjr7LvvNxoKkvxQkqEe9StLK6vLYrQkFdmNwzygmSU1tofpH3Bspa",
  "key19": "2t3pwAXkVDbpPo8ddYX1V7GdGczaeKWb2U3PJeqm9h5hv8QAtgqfm5ZTUwf1nbnGqdSvfqCCaR2ev8SF7WBn3t43",
  "key20": "5em7sjZHS356EgcEkmBcpdEfWY8eeW8FCpDENMgZTowzEjJx9aiG4uQGF1LRUXeu7q6k2TWQv44jSXmN8PN667q9",
  "key21": "vKYEXEYL9wepkyKhMuKwCEjbwQPohinYs4oYDo7B1YiQLHzCwh2vdQQhMtcFWRcxwQJPD3ptgviDx5trGrrjTjL",
  "key22": "3rvN1ZWrTSEJdxerxCdF1D5U2KncJhaCsGWSxALr3xhetSxjoB9tytigAEqLSp6DPLnjNiA7B8nTABUEDMHmhHgK",
  "key23": "2YdSjco36b56tihcpmgq9MnRq517iWWwq6MaXY34JtCT6QRgeBvU7PXfCftfhTpK4bnv4BH2XdGcjCM23TCdwjL2",
  "key24": "36RpvtwGL9sHy4hWHF4jo7abWbf7tVHkPKA7fWGtrBrZxyn3mLeQnFyJ444fSVBc4o8HiU6DJxvQcktMsqv2Bn8d",
  "key25": "QdoBdKMbAWFcyjqet3qSRM2dgzkoVGVV3WKC3deiHnHkVxvD4x899ML3RLtz71D6ntq5owkUDrtFwGPf3aN2BHM",
  "key26": "TcLbXksWs28QtvmjstDsDvj8GQJfCsxBTWMFHZpGtwGVutuoEhbUo29LjweBrnUcBkqNDDZYcFDw1rzdxvViEt3",
  "key27": "4Tn4dnXsAjScLrDhysMQuKTBNZuUYUm7iK17s6vSVugsxV1955K7ZMguJ7wFj1ozTHerQ3Zj7uxT78yuTouSzKH1",
  "key28": "5St6dVMQ1DRBjLjFE73SGjrgxJN6xpfPthHvcZcPdCeBVysMwuMFGuU2ydzqtLAHNLWu9psJJbnnEiNkxCu93yqf"
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
