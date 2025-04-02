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
    "65ZPQ9uScbKWtYVaqRfG8aCr2uPqPjvEc6vK6ZZUFjqd4FQ1nH2uusHs7271bFmeXaW65YQ2B8oU97GKBXKfyFEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tPsjUjn2j5Aucw2SrBPtgJjYEQh8GJk29Zn8fdGkPZeE3AP2TRTrVAeHmeDuNp7vFTV9PQtmeGuEEv6QahFA6Yt",
  "key1": "3KyrdExEuVKm8sEcf7anfsqvJdUs7GBjqLbnAag7LLe5H6XtLoR7C2z31pvPxT1WRoKuLQC44oUnKbowpNjngju",
  "key2": "jnGZp7Dietcr5mAPhZUMiTmQkoCF6HEVXGeT1pi5yyvMkjzUKe1J5SRR8Hdu9f1VJntQvzdPHDjLTkgu466sjRQ",
  "key3": "EXKb6MoNo8BKYGRzkLcde8xswEBt22vgygLYhSdhXpBZ3BhC9c5DVWS8Lk9gS6RUUnW4XQvPcg4CREwYweTpYLk",
  "key4": "3GNyLMFec4h6VTVc4nZm95nutPNgGcqX4BjFeYFeHCdiRLVpBZ6KcyF3wByTLfekJbHdeU2PxaKebq8hMSPNdX17",
  "key5": "5QAnWHXmSzjVU5Hp3YdCxqs9dJPo6X36uQeMPihAenPhoZSPC4kbQAhwh6wzVSVHCx5KH5rMPRXCPeHNwumBGFS6",
  "key6": "3pNHSsCtBM2qURQUDSJGxiV91wHMdzcxwoWA5wrFpXEcqwhCsaZRMBQHWoxof32MpE73QyjG6KKnvdVqC3rTMVSR",
  "key7": "2952eKQvPaugSPAnacmKoMiCyaMrE5g5EbBsUytPuSegpFbgWnpb7EiDhGj1P71Ec93HFQhsey73YHV3sV7CjhWK",
  "key8": "58MuFBKKatULvXQDcPGyaw33H93SuZssksRKhvJW3vU93uc6h1dMeVFV6sAEwSqi44TR1Hf1nELu9ogquHAdi9Ei",
  "key9": "44tkjArNuQwcq6hTpW1eicWuRxdjDkTGFsyXxbifJUHamUHTCSEshGDiwnS9Nt8uDjuVSaUodzqSEEJrboqWwoUY",
  "key10": "3VmAcqsGVBLphvvY9sFgcYshZALWfE9uC6TXg1yvEP8NpCuhP7sN3DusP2FG1xkEMhEUs9ebD2XsuMYfWcFBPLHS",
  "key11": "2nKE1W5zmmjQpfHt6amxiEbTnaTgi67kn3TrWhQDGYGt82PdxuXxkv7nxC9927DmkSUS7xKrD1Q4VExn7mNu9dh8",
  "key12": "4LtoawHYaWhdub6PM9KYVFFWFkbemyPH2TJaL5ppQDZFaSAhPPsY4MheETjDhZW1m28sjJzFG7mfReLkGd5ax4zY",
  "key13": "5hYE6EXTXZiqKttKLWnyQE1CjpGr1T9UuevMvXmkFt6DyRTcdZnJ2qKGSBSFDAabXCLxupYiV2244Fnq1wuksdkP",
  "key14": "3vR7K7EfDVySaAXJHknEUgUgYLqwDzYpKuaSzvDnFQEtiZjFfLxvvui86SNNGQ9DH1mc9dEmzH6TW9F9MiXQof7Y",
  "key15": "5KoCmqUcqypQcshHLy1G9t7ttrgEh5u1oCBsDA2gwW4C2hYkkmLfm5pu9bE7tozBzVVBM8B9uYy5nLi5fFFyi6jK",
  "key16": "5KbmxnoGDcMUsTuDCVtMS8VfBGsa6HfDNHktuPZ3joF2Z7tHtmwiJjgf93v8SSvv2xdghqiCoB38AH8PNNcmk3uB",
  "key17": "2HQyoFgPCbQmCKAo7eunHTbyBfcJ6ALcj21cjksWx8vLcf5Ahazg6neMuGhR8PqwzrBgDm7vFB4Sdnac7J2tb78U",
  "key18": "4E7Zg6JpvNzL8sAq3BM5pWpUh3F2sKRqFfapjeKPfijZE2AGN5P6yiihQVRZmvZ7QWGL8TfzWTAhYn7BpXtXkk1S",
  "key19": "5aARCJZ8j1HzfN3QdKSVSnvakjyfxtREgBdTk7FHEQfd1tooqcCpx5AFkVfijNXpDKmSpF1NfwtWnygbBksjDoHZ",
  "key20": "3VBb4WfQQiDtYWetfBtRDGhQBjZGQgwn4FLX1JidcMwjxHdYbX8w6mbF61d8GR5eD9dsJ7fyW8iL3NBTTGdbKRxD",
  "key21": "2fRKGEWHGjTmNWUY7iMmTPHtoyziQAG8X7EJDsaZLmqMrxo9oLhArkcSrUabw3T6jz7mMiqKAZRV7koCtVhEQe4d",
  "key22": "5z5bCx2VqfVqvbvoHDTLpw2nNLECuujAsfeJ8L2SR6TC7tkGKKL4GB7xXN3feGdkUAS2iD4G7UPFyFswSFfXPzF3",
  "key23": "Gdn7Bh94yfSYJYdH14tAykVG4mvSYU5TKesohptbkXo4LCPBEbcuYKZsLghyVn8eej9dAMwvFfT6J6HuZqc4Abz",
  "key24": "3jypbQmbnhtQnhhE9jv1H4fEq6XNakQq9pqvM8dmUEZFFQGjL3WDpifSqfUF9qSuZMA5jvE1wxzuvL7pLcA4jmLc",
  "key25": "5myywUswFk825XhxE4144wUN6jTiVHNg6S62asppxYpTPZDXQGu1u8XQaDWnZt6RvPghSodWXWh4rTrotBhVY1NR"
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
