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
    "2cvnYYbT3K61eQ7GK6w5QJ6Y3YBzHEF68dVHCvD7Ku84hVHBiJDafaLVoc5tvhAo5qVjTtM5xAraRGzD1C4xn1uA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ndoWpseU4MiN8vA55c5TBY7zGSraq1sHKEx91NgVE9JezuZFwSedAPmaMvBZhpDkWJYP7SYgqVTw6gUqiE64KCg",
  "key1": "3MWCmwJqcFg4zoTjBJ4zQ9qYUfgZGQnSi9dxJxnFyrUWPcKMzaJM1BVHfnxWdGp9ioxhEBiAa58UDXyhKu6GxzT9",
  "key2": "jyAxVEWH9Z5SAkSRUXRnGLb5gWwQWRJizRcskUhcnreKfn1QUScWdASU3kpUr3D24z5jyjXmBvLbp9grbvCsR2Y",
  "key3": "2cy58t7ecpyVGqjEX6WKq1NTp142Jcnuq342rYPjh2d6BVRnwDNWJt4pmzwpYKwAQfhgvevrhjunFP27mY4zea1F",
  "key4": "3UDkJQxjLp9W7d1uUnowE9fXv3t6bUDXd6r76ZTm8jwk3oPBCCYDJ24UyxTXnixu87WjbNvQLrbGrfHVWytU5FD3",
  "key5": "2pwhjrdhzcjB3sTXJE2ujTjRtGkw6fS4vXL4MKGvNYrCY2mMA3kX5JactsvY6rvaVM3takhGt8qTt9uZ5VDvnFK6",
  "key6": "39vLpnyzVTauTJhU3dboxDZHUL45HXWnzMNeft3C1FecxaLSU7kcvrWHW9GXJVquJ2THcyvUKe6XpfZymGHV7ggH",
  "key7": "UG3cse6jw9aEd4veEtwTi1fKan5MsFLzQPy366M9sjBr7uvyJ6NWU6sTKUoL7sqHYW5HHwq4MrFjb7gMm2LFAuy",
  "key8": "47fSZc8WEKzDQwq7bwa4VMQfypYUwVyx2YLXv62tAyQjJdmmwSt4R9FL6mVSa4LyaCVit1pptKP97ZVU7C1K84mX",
  "key9": "2TpDeJjjofN5sU9ziqHDkPUptNLYMiowcE38rHzpD17Ba9mwK9p9ixdvMXWCf7gLREDHPoVHxXpCZvRH8HigiELu",
  "key10": "3gkmDVvTpz9GKaiVFZ885CyaHvxm87fCuf4U2HSRHnZyGtdBEPidPbneYM21THLwvr2BDg5yRC1WKZ5rvVMrXZ8Y",
  "key11": "3r3T1QcTXUvMHRh5C4e5eWpNHMqy9wQ97qJMMBTWeUyB7FUHZnNNpxjann7McSi8KTC7zijUeazUhFvmA2vM8Xno",
  "key12": "4atnmaf6yM7JDgLZj7c9sSR7vGkyscyXiSqTPJDR4CKnurkMR6gciwHQDWBv5QCFjwhv654Y6vjtqRG769qHWmiY",
  "key13": "4zPXFpMJhivEjc66rPVSRe1mom9hp1FxzyqLHXCy2JXpzFdb7rqJtupNSaz1JhyT97ZMeUSdhe1q3YGAt6YwXgLR",
  "key14": "4P4Vi9Bk2b7YKmpQgXZbecmyGrxWiWnFzfaQKcmfCJahdzoix7DPn6a2sfTZnpSANGLJnJEupxL4ab4NtRkQhgwV",
  "key15": "4sj3dReVyRNkeLDfwUk8uF6R73KZqbkcupkTN5CLqNiamRFkKd8PHzSd7d3o8HiHdQRe1B5p2ie9fzvnRy6PAAMG",
  "key16": "35KiYixUkosrqiD8gdyBaWBoq3UwbJen32Ba6EU2cs3dDPdS1H2fKAiodiUo7pkBa9ff1859KzWDKWA2NHzsLhED",
  "key17": "5NJ6vLJAF7Q3zC3eAJtWk9xiFKbzXaV2iWUszjmYzztVjYpmnTzBx2xw9ig7zsE5M5m1vBaBAoUkFxP5qTzrN7X9",
  "key18": "2Jo4ZAKJu4VyebiJBsFtcCDFvGxSxNGLs3wubVp4teeHQWcnoowdKH7h5ogUkXkpgcbxAZqKzqgszoLiPQ9yFvuF",
  "key19": "3NphKwAJwYpMN1FuT1KAZ9DCJVgcmKNRzMs6W77d91qhryTBos6PxRaLsRrgPWwCxBu8FtWA4RVEiAvaQY7SrHsK",
  "key20": "3cAiqVMRzXE9KR14QKuLecsvdTze5dNPyo1JJ2Tu9KtSsu8PXrXYDbBYSaAHAUahjQaj19eGq2onNFmX7GBUXUwg",
  "key21": "wxqkC5F9NaAE67QutfsBm6spErYNreviP1cShNri9jSqLLDYTkLavyuRf9KvPqHHKxnFsttRRpMseot39eULtLA",
  "key22": "5oqtd4Utyt8vtCkNie392gnauo4orzVaSaCJw7WzjNGWzRBGAeyxETcch7mMi5yJMwy9KmYpmtMDDxb67iNZP1Wm",
  "key23": "4qXAbXT3LLZuktq7H8UdKDjnKLp9N7uA1CFyMYDqdZUBoP5bXkWA6e7HZmdkCyFeC8SGVMamUzh5aH1CKWHQQSNf",
  "key24": "3QhkXeeEmTh6hBSbmWU6eW8GVnVUD3NaTLJb9JM4aAp2zDYSUbDHVAJ1mgNu2HRgVLQL9Az3SHUUqEjHdFCLK4wZ",
  "key25": "NqTpHkWCWiwn9JxJDD2yRKTB6PVygc3N2uD7WYAK53WhBvKAfcrid2xLSFvnesW2WC2Tscs5vcaGvTH4T4qZrr5",
  "key26": "3FZHfj8vtG3sSVGdgA82KocBm9opqHQP3NMZeVWHidTMN54agZ2YUAd46GxBS8bwUfj2LbwDEGNRfiGjhv6PNwhk"
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
