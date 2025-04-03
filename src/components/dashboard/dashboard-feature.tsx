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
    "5aGJ4TfbBYy7AvtzZJBgPr1B9kARCU2tHoSGsjKg1qXyAtgGQWFoeuF8DVtHLxVT5DL1xEQvevLJBcZnmMRCdQwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gJHPer4xBbRFqj7aKiVKTRvG5ApZwWcMsSeJEGszV3BcEy4JeZSJAnKnfhwX9oPthMRBA3bMYjZiRCPrvYHhKVA",
  "key1": "2n96D5QSQBKsu3jxH8HnvGEvbt2gJ2vTrYm5C8FvRhNdswDPQUzDjBqRwCjv9J4gvqMCpvLs73fqLG1z34VNWoW",
  "key2": "THjpJfXmia1kqL2JdYjgKfa5unb9wkkEMSbMJK1bEZ7J1cwb7dEavVN4Qfw3dJGciKbVoWQcf6MT9QZVzjgosdZ",
  "key3": "4WxdhEqviRQvSviwEHyqZd3u4Yeyj8zk35jcFvDE82YpaqxECP4ztyVZFed5By6FuGpoyDpU2MFiidQB97abpEn3",
  "key4": "5VW6AZGF6JQk132gN44xciJn2UoUeoYKAUUkg8cnbFEKtTmfhDmNEvufcSgZfXhzBpTZTVpP9JXRTd6aNyqapU2B",
  "key5": "2BTYGDS19gPHLrFV9QbqH32z8WdrAbpVytcMznE1FsXxgrxMX2767ypgR7pTU4KKY4mfGPpA98MBDMFjyQ2Ft5Qj",
  "key6": "33GUmvaYZ3bEAaM6oBS6ZymhDtZEQe9zt6PFvZMBmbnnPBkSiFPaD7tUyZbYFb9VaGgBSPJnHJuS2oAbDNhyExNh",
  "key7": "4AbhJqLNtNm5yMnnthjqGqdLqF88dm2cFPeAY1ekFtBS64j2B4Sq6Q8X4L8NsTue7yzGHxYcViZ4dYuX1jHWYwcG",
  "key8": "2T2V2zir5LaC6wrcNcNYPCX6CRGfCDdXgraCQzPEZr5WZcwxgSqyhRGCTREhjZTz9pxZnMpy83c45uw2NxcgbiXT",
  "key9": "5CFnuWASaXKnCMQUfwtFYBJdStQWupTrqA5DzH7E9ceKoN1oEJP15EuVxA9t4VQjh2RQigHzDrqHeS3ti86tBXZo",
  "key10": "3Rs9KiDtzjAeD3V29C2NQnP2jwTzm5sT2NttRnkoiEh5diQBYw8cWgbza52KEctrPhyjPKBibBYjSm1Z8wRtFrjq",
  "key11": "4XVT9Du1xEXuSmWFhbpXEkGSw2ZYgXLM9Q2GBUcEgBgJnDufYNj9RDbegy8U1c31RoKnDsAf9FeK6VGNgZ1Ua6Wv",
  "key12": "facDKc87zFEdcG13AUaLRG2G8p5wko6nw1bsgqEupQRm1uZKMYfda8BuztCMqZ928nxv8Z4TupMDMPQcqYjDJYK",
  "key13": "2nP6Xvq4PTmATi8Xqz4XQhxHuhHscDpAcDahWgsgHoJ9YvoprLMmVEvGM89QucxGQSiHwoxsgHxcMh7QNPkwLb2L",
  "key14": "RWmMSzN4382Btg8zHpSTtbDCEf1aynj896ckcLxNDSS5AJkCe8qdJkRo7iUfG6Wog3AXPcN2xH1mjBzS3nae6S9",
  "key15": "4dWjBF2yw4iPD676YHLJAUe1F4ntEwtMaq9NNTX3RQJ6i4U62Hv91feRekcZ7uuVbysUaJwULa2VAZ8DkPVrV27f",
  "key16": "37xv5WsbZSBN9F8GZyaizoxhUGussFywQW8DXginX9XaT1ZG8WMjE2RjSMoq9PQfRdY9tFdgdvcHW6ekkNt1sMq8",
  "key17": "jxiQT9eusej3hNKUy4ZWBdmSDuxqmBwmKeCELhoDH7JwzhFpNEHzrv9H555jg7C7SP6fo8kLPw3tPTMhVMmUqgu",
  "key18": "2NzQES4suZkAU7bZpB7Exmj5n6nwMeoWxPmZhyCXhVKGS3E1toD2771ibaytoGrFa7pBKLTuSVhmWZBGqTibbcyb",
  "key19": "51VkwYaXvDbARr2UH2nWmxRfCWDSAC462iPZrzdmf6bZzMjD9GnfJeAX38fzf7JVXj8bYpJaKjM3CmsdXdNxags2",
  "key20": "4iuwtZhAq5T8BLRVA8HUkbJ5wpxYrfAG8EDNEaqJhxRd2PoavUPzz4m5dcaBJNgbi8SxUwREcf4eX8a2RtoZ5pVZ",
  "key21": "5DUPZWwCKYWR2ok5H8QHZnDzUw9ouCnG2Qqgc7PKytNEwGhTn88x8FiuuCj4wCLRGrjvpp5rpeMQY8hGKAmoVBk2",
  "key22": "4vyyuhF1egroKYq4VZjgERe1yhx4wDSVYNHP7Z731hVSRE2ihMopuhmkv2ySKmqz9U5eVX2u7r95NgYRFjjhcTSh",
  "key23": "5ZcsnmYgoAvDE8Fh36pUxxXkDWg6TuZH5p8qL7zyUgsoFngSNWLMv9zWd3kSiQRenwBuhNmC6TpWnFWqEfbFqnv",
  "key24": "51XiUY4kEWKzEZdj58Eo9PgdyEjTNvJgS1od68xAicVddU9DGs1Grd7zfnjdSYopAZcfR1Bh9R1zYFqUwZztkt72",
  "key25": "4v8au4DoH2r5icDEdqj2g9fEBJH7kLDWdQtAXfK7fQxPTCFu99wiECY1ouwLMUjd9tozXzWqFu6JavyyjWgdaezt"
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
