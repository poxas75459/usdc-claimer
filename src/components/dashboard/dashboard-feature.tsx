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
    "2RTjpRbRLYKAj8JatBpUKFoWcNoCWgBVRSCuxptsyGK1LB4YL4x5QPWHbYzt5ErJEnE9mwF4Joj5tuaTB7UH2ETJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WDanS5a3TQQBvj5te9KTSiKWuCPANo9hfm7PksR7w2PfgPUoHJuFi471rTjU8vuaXsAnZ6hRmGbFBuhCF3hjNs4",
  "key1": "oVuCRm9YzTNf8ZJyovFx8pYmRxvFohhqai7eg56HP9YEQmSoCCKvdnaLse6DTXTrYeRnpEPZHzrHjv6aUuKh8m2",
  "key2": "57JtYn5EaQzRSCGrTzU1bYLdimjpWCFNxsHSJHXFtRtxGG1CTDshaSNQZy9BCHao7S16j8x92zGM4ke51MQXBat3",
  "key3": "ykAgzWCgAH7Ug9BLxLS8MaZZc1mJzY963btBYKXqcJ1fMHaSTkNGc1En8XMei6FL1tWmPSE8LhEVEd3NvyWta54",
  "key4": "2yr83wbvANsMKNHixTAHu4LuPRNgbkmnLyGgtbEqRWiVVytu7KLwSTuTc1qLUTRfPHnWyT3UbUYv3C31opok85UB",
  "key5": "5k89yJqLnyBzgDeKn5tcnSY6NMzze97L5Y5yNbh8SJpKeHbVWkP1kW1K6VLQVWwz9UMH2Ghw6nuGNEXX2e1H6v8V",
  "key6": "3KA9kzqNYt1U2H3TkujYtsb16bfbrARXF5fzDbyyLSxHJ5AwuA5mwFYL4e8zL1kyHSdsRqK9G4g8pGk5eUBAxWCm",
  "key7": "5A58igLtQ4Ggopm5NDANgfjSswN2wW3WohrWZJb2Zs2gKWoTimqVKbfw5mopBosEQmHdD2t36WnDP17XkmcR7FCM",
  "key8": "4uazn9YN5JYrZUnTGUdvytFwUEUWAkro4XVE5Y6K29V5vs53bovDzxp567Qwge21UqbbqUvEGtg5sGnjya3Jef3M",
  "key9": "43DsHgtuzjn7qdX6mDWypwVnDVwN8u9FoFJ27LEoutBNE1YwFzZaNsX2Pc1GbMvcTEttJhoacy3VXFyKHiFAvSBy",
  "key10": "3asYv943Y62SNMUE7UbzL9zXdRjvQqqXE2x34SobCcTGCAypv7Qmr62qtB9CcTxBz3TiEmVGY1aQUsy315XbgFq",
  "key11": "5DrKv9WtFEF6ifT3k2kafPeLnxoHswRJtunvFTd6KHJXfoPFv6k5GFnfLJvqTvXnocm99JGEJzA227MCtBMYZda3",
  "key12": "33idKDdDFihYdmbfLfLCfJnNEzsVqA4pkiQYMkyvHno5aEL4EGShUWWTTFJFRHxkqypLKHNk7s7BsD5Lcpuybg4G",
  "key13": "4yvdjwBtSXnFyaEnyZnEMT4H7ZpN1JWopuYBjU6Yz3hZe9VqzzHTf1FDQQuaosJbUL4SZwkfFM8nUFS1NeQWAfGV",
  "key14": "5n4a1KwbeNyrj1HgGwYVqnazMdzqtmTTH2aRD5pBiqFxy6if1YggsowokDx4KKqUgtcNwVWPnmeussFTDw1z3G7B",
  "key15": "4TZ3wxr96LkoNgucKUY3mFBCXMDQz7e1zC115q6nDuqKA4XGDu5c4QMEk5Qh5cbMZgSKeuXVREshgjd54GuD7P8g",
  "key16": "2BtiAVG4o2piYKaZAs9aZT1hQPVJaJD9uUfaGnPCTXMDaahBmaF33FVg2yUWuF1PxxGJRiazPzsCN4K5Wp9Cp4Y1",
  "key17": "2iYsNxqzT6ggC1qy5zW9BJVBw21HKipLZyjgqh3ev8XqApQ3fPxDx3iH3afYZqKaJzbW5Qih5iqqgweZxcz3FZUz",
  "key18": "5q3aC3LKcq8hgkMdURpRGCnZLrygDq5zZHjA1awx7vHDUrXrnz2nbNBkMTo1vXRs2smGG2skXJdjFaFfW92sGrF8",
  "key19": "5NwSZChfx6bYJPSwd61UwN3nMReec2UMUJbbuCx9EKKTKkaD3ym8BL7gBnyBkgY3dT2tezXMCgrW75BEJx1XQ8EJ",
  "key20": "3mxE9qKPytqrsyes4fHP4nUCs6AFzr7QR4mv2PT6Ln6gu3qtmd1i3sLo8BfTUGEQaAYECzEVYv9xnqcYUFciq9Zt",
  "key21": "2gzJxu8cKAMNCYdFUEhC7PtMrtTqqqP9NxR8as8SHXLxyKHJYqEMTtsVE3GPJMoFByiEeB5hVwb6YW5q6ya7JZxf",
  "key22": "2MJ8ontCWSm43cNa6xMeMAbHfmgL8hvg5BHY5PZGYHvoTMFgpJoA7K76P6GQ4CkavrMuwqzrPhnK6K5ZFu8UWB1a",
  "key23": "4BBVtoYwcaGE4JyyVoazMS3vbJqawV9S5cseTpStFiB7Uki9oaHBuVdetSC18QqHEhm3x8HNhCubh1XR7MQZxkHN",
  "key24": "JLspz1jSWwpu78VGuStzC625D5DFAUs9M1qVRbPHQGwB14J6rdMKjekvNsho2wuXYL6DqRdJbskQZhLQjek3yUN",
  "key25": "3qYDeN5cFggoWNWRGrev9gx22fQkWGbGVk8kZkjy4F9CYSajfUsRdGu4RViZuFptVRtmMgNqR21Fk1YdQUmQ8fKV",
  "key26": "2uVuwoKLXpzTp5tQrPmj6FzavToEgMzwWLQVmDP5DHBAAK6EYU4hzA9VuVJGhkq3Vp7U8PtRypKFN3P85SHFsh3d",
  "key27": "P97MrJ9AMfK3a2EtRT2Dw5soXfc4LQBwM3LNqWLmoqXyicLCH8DZmXFdYs5HPQ5p74awaxwCqH2pDgobbsB6cCs",
  "key28": "3XkjKkZCGUChnM2sU6VNswD4wxMVqGSuQA5hRbPJgsg4hwJL6eWpXMPW1Ws1An35NQVD8LxFiftDKdSkTnnp47zg",
  "key29": "4URGmFndZsL9wPFFwQ9HSFPL9dwyNUCxLE8Nv7X8u62VTX7Pwy2yzGrUUFGW5GSNHpmK7Y9SQz2W9xTDuaH39Led"
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
