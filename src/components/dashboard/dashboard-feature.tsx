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
    "3BX6JqyHLEBqaQpyZBSeBFP9zSKmpboy4ZZLKyE3menzSPkXUpQs3h1S7LwWFqRffZjWQHftZfVNrsg4Dhv9qnDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QHRwJMNmXo87D1vAfxHXeMrGqmQVk8NNbWVMU821BjSx3VgT8St1Los7SXL4DzgVKEMCKyKq3G19hHi5WrmSTg2",
  "key1": "5jRhqKVpwk1v4SLJ5VBqmZpnjefjTFvDn9f9HzS49Nu3Ru3HMAvxvA9H2749r7R1VTApmeNTZ59iPjpyw7fvEfHR",
  "key2": "59QtXjDejPAaaEDeWrhDxGxDAN4HmEr9RhbpZEu8kiwmdAumdrTA18SN3tEDq8XPSUT6eeuFZeFAEnfKjV7m5ehB",
  "key3": "2ZYnELKz7Y51BEShAvWUd341uxMdYQn8d9KHTNSLJZGhsoT1EBGzeqiAbcQWsRgGpdauoTh5iXnWUfBhzywC73J1",
  "key4": "2yisdWcKAM8FYNXnwgPqNjy31Fo3KgDGXUA6VE5qYXtZdbPuxStxuBVAdZ85iHUihhsjkysGd7X6WozvYMybAuZa",
  "key5": "4ev6hjAvksBfammkWG4j5cnV4mAeKawnAHkKJyvp6J5hcdW4N3xWvM9J9RNdnAAD1dEfQPWWFuLGbB9hA7n67x22",
  "key6": "4cDq2ADZPz9PJEJ9gzf43NbkZVGUauPwXSKrEnmwsaxG7Qxe7353KBsTS6SAcWpCBmD1pfYygguMGFW1M4utrHMx",
  "key7": "4FhQqYpvzyhFhPWpKCxQmp2N8teryNhDn7jPhSex4XDecGFvFWptuivGs6TKtso8ZWXGz1kMiG3aUxP1ppk7pFYH",
  "key8": "5GxThn8ihu6sgkjV9kZacDq38KSWmdqzWNPQWHaMmXEkGcjEksMZUqmaB1a38cNrYEPCT3e1HbHektnBDyy1EcEu",
  "key9": "3eLZsDTGTyczWX671sTVVZHD8SWap1jmyiywBFWV6KSTPWVig2tVmv5rhEUiGvBYSpNTkLJm1KYiwmVXNYC3xfNM",
  "key10": "4QQVPMmFbEHzjhySCBoYoT8pdjh2aRQozJXHP94A8GjuEvczLLFiBaxBqPVvT9he8jHvpnKvmmjv3biNdxHc81X6",
  "key11": "jHAc53C2qrNkbsE3gXVkopyAb3AfcsHpkQsF7BLjpnb4DWtNdSjuyi4FMoJeqRdt81V6AcFjo3xEyzercod7Y9R",
  "key12": "4dGx5ZuKwwX1Ukn8GAiYGJuv4QwZwCezxQDbUYf3CNyydQR3PSeZnyd77B2s3Q2qdX5uLtbhg81BSfHJq5SMZrU5",
  "key13": "3EpqR28Xsock2ofKMRuNkyJ6Xna5K86ZgyvL5xcNYwWjBroz7QpHpvz5PC4jM2wjT3wYNUaHPfurT4RnD4s5KYRd",
  "key14": "52WK4n7PeQxwPWbDxbVhCLzk3APDxhECrv9qDA13TpivqQVxNJzXbTffz5U82C8D61bzYPPennR7MqC9VCcyfFPq",
  "key15": "654XKtZJWTTxBm78WaWr7aJETjPqDYFTHDmzrqLPARqEJpTQu26geJ2nQhWV8hUoUujPBSAoS8N1wxMe5VwhKYu9",
  "key16": "4eTLhTf3GxPoGuVMxnkSxF5w4mriMM6cxZj6Eg6gGCk2djBaDQoYX4sWQK6w8DnoGWencCynLFLi9AxytcAvSB5B",
  "key17": "35QDwRSieVy851EZ7nxZgNuoJviiaH79EmZRoCungYUcsWGBktxcwzcLbh9B6Bm7Kv83h2kKZMPtSBrS3cY5bScx",
  "key18": "5LQbHH8LJEeM9E2tcijykaxjQ1kQJQ4yeU3qnhtYp4w1eUKYuKBqYcKDBYnNhoZxXCuYA65Q9TiTXURwR2xbBJq4",
  "key19": "2yKhYuGvBGZArJmdgaVVrNcJ8AnMHrRJAL6rENFNjpibaoafBJvqeS7aJHZN4ajaFDHeFi3TwQ8qJGGx39MBZvLe",
  "key20": "yFwFhyH7Umz5qYnxrqg9p3ixfYvtQwQQQNncZFg8rY7pxK5DzoUQXqzrcnxGcZkn1ALLH1YjC4YW58Uo29Zk3ww",
  "key21": "5XbqVhJtt7n1wtEfGofXZUBcAUF3FbmqNYzWxWqgQWqWzScKRSzUgbKYY9zemRnE946eMbfESNqp76vZqXFbVNXe",
  "key22": "MqV8aSVCvEQPzFoDyYh8AQTJJhvstKBc2mNX9BJfsRaned3BsXUzDJWS4hsrmFftMxfFCqv26eYEtzG5PzMq6hz",
  "key23": "5YVq3DvQpT9E7g7X4RX8pwpPtfs4TiKoHdAZhYWajBqdMHeu7UQzukyWYV4c1uUdLkAXARG79wZdCi8PH21RzvQv",
  "key24": "i3ef6ZLW352AxUTBHQ17i6Xpig4qGF5xvNhFH1XtUKYeH97ikhWX4booqmg7pPXfxvySpVTXAcZMHUnAWZknH68",
  "key25": "4AajSMctpWvpknnWqKAtXuQwvQR5tG7gAdZ42utEjRG2D28o7B51FjwLu585zDVZsZhFsiFp4zgtmePAJtYnJGmC",
  "key26": "Ha4Y3ov1XFTkpzJVPsAkcW2HbLrAU5Vy9agHRnB3Qy1ENRh29p3VR4Zn2HfFBtwL8QNgRHpV2BFPNDziPY3gCK4"
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
