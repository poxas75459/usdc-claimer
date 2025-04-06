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
    "4J5HvdMAVRwmJ1BDxSympMzAAwpYQGE7hm7C9fU7vw68YUE3NG8ir7WY4BDbnKkVP5eGqnSvZdb9qZJHrgi1PChW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "msYghBxAJEr1wBQ9Wx14b9TgGSNZVDEfJvsFWHr1awYARNneUDBRNiFzkKSKCE8jFeztCcf4e1rmiwz9FsoDDVS",
  "key1": "3WcxNzVM3g2pSXtGNS5H8krrkKCxKXw9Wqq4zLrncUJDGfpoH6mr2aM5CBqmQR43Tt9ZE6wBL49yhQpi9XWfDsu6",
  "key2": "5TryTLknVp57hHJLKE2WLy78AWtJ1KumocoFvv9MWa4VxDmkpPgmyV19QzoyVat5gtT3URY52nqgXizzNmqdbkib",
  "key3": "4rxTkiuvomDUwAoteLefZCEQUV7A635r7z4u26Nm5PLuqPv8exbkJrs2njqtfUhf7WCmKf6hKQ69LhbANLKeMzi7",
  "key4": "2KU7mPgRHfuxkoitpSdEqrDXZq1TAq6t7vi3LdoZK9pW7S7JYqgSMppSLWtoyQvTwi2FVsjdD3mHhquAKAzMPnVH",
  "key5": "4KqTGUPzFEYErzpngxV2PdYBVNX4n8sP27yWcxo2LWsd54g6wvSnf5iat9LXyzCdVy4XmGzJWe4b1UcePgjFfY4v",
  "key6": "2qXeYp4xxfSwju6Knye6K88YyaUsSZRawBmWm79qNHuTbhUjGdN1y6nUxjUVc2TBqbncdb1EnUSE3a9X7w5LPk6B",
  "key7": "2fNi3KGiVzTjkp5wzsQVhCe47DcS7AMBfJh8DmTT5m6bDLcnXJEjBVWZCfza42jL9t6DSExJzdy76AydV1uErPAx",
  "key8": "3ZxtQ5eVyN6Jw3z5hD16G3VfT7hpvddVmcwzwKJdch6Hi8BEdxziBUGcqFezMQwiwesQeYNmUeCNfzrucEZvWcZk",
  "key9": "4ArbaFouwceduKRcFyJBz1LPkpqB16GHTZu2Whw7dQQXD9W1GYG9rTyh5RAiXtvfQqT9RmLAsNDCswxSiRnnHRnA",
  "key10": "5ZFbjZT4b1Spoob1KUriu1AZE67zeCrvsEqTn4XggwQVJfECCxQ1bq87RVWqvdiHw7XR183oXL5JQJMUNjubNFyM",
  "key11": "4vmjqgaukCs34DkzSNRbW4kzHsLNibwEpq4hV6vh6CkFhEqgf5YzKsbzNQZzr4TU7DAp2jVEDXZczuTNYaUTZn5k",
  "key12": "jvDgAcg31WA8o4uzB16hVALWdP7zHcVL4WzfuZJSBfK7PqnynrJDwZERtKNXDYHiaNp5LUmUaNxdT1GeDMLzU3u",
  "key13": "5CLAAXijkJsBbFbNwK7grKNimCCEppNCqZJDq86QysRnFzgkisZTAoK4UCzqW3Cr8H9WytA1z6K12kWhTej2tS3K",
  "key14": "pBwsYMUxSnVuAxcvaWaFogwEGBFA8zQv8PVGej4BKYzCzLS9nyYy8MnaVybRnwQ83CkiPoJBpoSfUgU1EYYFjzf",
  "key15": "4DzR1ucXTLHDR3HNKtStMVBG4U4D4ZvRmcaSBhweHwRh5U5sw1eynZGK295QLjW7RahuH8A4hnebW95zKFKgpQ2Y",
  "key16": "56ZSTPStngkkQu89PL1rb2m3d9YfaHxGCheRZxABZJy38ixfajX8Du9D3puFbRxp6qe6182ymfBF8Ngzv3stozce",
  "key17": "2D6CWYzq4TWD8trdWXsZEh2BfcDG32sHf4jRV2vwGqiR5j2TaYUqyTbrLhvvLkAqVHJcpLHYkS5X1F8cZqvS4evx",
  "key18": "2s139nAJcUDo8Af6SEPEL9BETchysSD8caZrqwdZyKXBevdRKy4MHKbxJBUeHcWYevAu3khY7vqui9iXPDjdEQhM",
  "key19": "3VgjTD6L4BeVFtoEZc34TQeGmrv2eFjguT6L2Lb9xfAQgmTGueR2VQhoFcyXuoharwNbJWoAdwv2HHE1NZuvD4i5",
  "key20": "5imNCxMyU4iHBoFRUh7bsPntsYAnmBZMbwRF5uWn3mFqaSR3mMR2x4LshgxfHgVsAUWwqNc2YzCr2UyWLcfV42aL",
  "key21": "f6Qf2UTGaAWcysBMXy3XXYPijSgT2KFeYD65C5AcoBcxMSkVtp5vG7HrExbp9G7jKBXzMdAXcVALxWTSuvRQCfR",
  "key22": "4dn8SGjeLi9k5VKyupQRTLQmbcK68w2ACBXVxXSv5wjkwePqrYqNzfzrXKA758zsFEdweG4EbKvLd6H56erGyF3S",
  "key23": "5UUSS9YLUiv2ghUPwVCYMndP82UZz7tkBeGKYXkpgF88soW4y1WxFDQ2cSougwnTEDqCwQyyQoYR67CcKuQVgUDw",
  "key24": "259tgifgCLuifewdH4ixiKokqmKC5bSrMppEtcvi1A4N2y5XFhDDSgN16HbmvzsdmpXKUWGAyYmckDKCH1E81Uem",
  "key25": "2VmG9rdURCPqg6RuSbB7N25qPpD95sZ4d58MJTJJ1jkGR3XQUWKjWGYybgQskDYjwvMnTpLcphB7mgB4rBECaSDf",
  "key26": "26dBkC8hF4od47a5c34AKFRhNfRb3KyZttAtnApcwtzNsPZeKHkw6gDCS2SfzmPeYwgFCtrRipwWZbbMouvxv5fS",
  "key27": "3wQRRFmcCzYtouxqSH48w94b25WZVNK2j98epKc7ZBjgdm6yYNfYiQhaq73L2WaZ2g8AztGk9CKTJBkWxNJfyqa",
  "key28": "2jbGi3D64YkdwepVpeb1wQveJKCunTmyJbCCgqd8XtmBaYHDxVEXKD8HhiK66oR2xJd176UU9yyYcLcF6wM64Srq",
  "key29": "2UDoLBheVLRHhXdSaK7QvDt9BJcaiUv5T69vjjQ74FG45aXZc8Y4Y3M5dL3o1XBgg6pJh8oxMY3MN3CDzHqLwM73",
  "key30": "4LiZw26q47En8XqBidfchJSJTcPzbGLxb772qxgtKz2FtwFxiEmSDfNQRud7kGZ8WHx2hFxFZPiyj1VAaF8UbzfW",
  "key31": "3MZfc78VdTZs8hmaECVFtLz4a7eE5o7k3JTBqsJfW39xchAsvDWHaq5uu6qpLgwTAvwHQocfSuQUz75BqxHvRvm5",
  "key32": "3kNy5djdungPCxS25nNY6W2qjcLPUAGM6M1TbSmeJehViKFnkT5G7oPfMBTDW6APA8BP5m4v3QNf6PfY7sWNi2Jy"
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
