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
    "5Qf59vSTUkwE27EeUgUGrP8Vdyw4Q6Sps48oSFSoqkYjsntcVXs9YYVbcxtXs9ZijzTyB5dR3eYVhnc21cSpjfc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PxUN3Z37bhBFS1KX5G65sUcmHRt5MDVyRybZNGLNVyhC6SrdhoCMPNMiN2uTvdC4QYrJu9NMpZoceWaecJ7BwTK",
  "key1": "5ZGKvypzCrDcVusTBCbWEHuL5DZYYC8uTZs7jGcdEtbiz8PAaZmEkVVbaBS4EQChs7dKZqv9cUMou2gurDkL9J6c",
  "key2": "4NbSwZL1A2xfdxcfUMtdnwhNjGTUge84LMPrNkg9pJ4HFSkzSjedxZef7NgrQBD6reQ7FYgiJyTRPyRNMZx9dew4",
  "key3": "2MzUe6zuJFZfPqfkGbPpdhhfPTsdHUcbxTeFabkXKtJTgFGVVi2BrYT5AzyB8Arh6RyKoeJvVwhFZ972Rpd2rWd9",
  "key4": "3pphnYsKDrDM1CGtza7zvetSwVjUG1vAE2VL16ste4NdXPX897r6VXie26La4eASMKSLzfHH3rNiQyNi6VczXzZg",
  "key5": "3DYMGEbWAHmTuYXzVF1SbbboPa7uJFmTyEmiBLSrPbA7daYkJX3viv944h8Btg9od7Lkws5ZCcoabjjFxSTjAZFq",
  "key6": "3goFDk5EL9GESQL5rYuYYxRsK7Y4YWnsxxZdepUhJRGXq8dywUG5BJgATK1rKXpqXRe2dGCW2fNQbF9cGvvDfEPm",
  "key7": "5NyTTcPf1zF4J2yMn8w1M811rAFtcDYY2988JyTj9n6GdfmSUJVt52jH5noPZun7xn6hVvS8pRhuFpXaae6xmFxC",
  "key8": "4KePip5g9teKK47qYPmMVyko6wJG6Aze4HfKCB5mmbmy3pGUd4syV5R4WXBWTWuGRd7EkHicRAA5pBZDk5kx5vz2",
  "key9": "3G6ezNzyG7qWjaxdMpY4DQdJ8FK2PhK2dtjwimv1SGaCe6x32CuRCjoZKBMj6Ujd2zmSv8JZykuDNfPPKiuHBN8s",
  "key10": "5kG44YeFMetunf2bvh4FVu4GCsshaj5fBe9Wpr2RQAqmwRpKzsKWUtR3Gnd91fuawMnZZqB8an6vkgUVp1WWuuM",
  "key11": "oSNfHwtqGHNPhZYRQg8UrVtngs6VZXBVZoZH4JAcZWn3rbYAXjngAU4Qnhw2WPkGztDsLEnSGQWTCA5KvxQND2A",
  "key12": "2aBB8JXMLJZZX6zCHTb5evoLV1r5pXvX7P7GQi9hLNfzxdEaxESTni6UzQZafpGFYsQ6mBvHU5PAToJRUKc1Kyc5",
  "key13": "5wrqtNVHGf1rW7Q6oWGt7EbMGCiFfaeDhVrcbQKCTVqtfpMr93osmp3DUP5aFzC5isSZ8pxDgBYFjimE1sVk6s3S",
  "key14": "5qoJTFbAnGzo6ebQ16Zj7mbuTu6caLbNGsaRgrqDgA765BoetcfkSBhsZmdf22Nzcka5edGUhs1y6J7LCtWzgrZi",
  "key15": "2HubGc4sSii92bDqJw1T8m5UKhppMYhkj6JjqmJvekxoATNHRGXj5aHGZhdaMBvFBeEnuWAqgxrCQuorpG7iutP7",
  "key16": "2idvp7Bi6CMxmDRHWZHETPp2fe4fQYEQny6XFX7Kp95mWqkLqkCvfQzedqBcg4CWjpX5xXXBHBUkkYH95urXnqF9",
  "key17": "2Mxg6mEFk2uq8Sn5dmmLEfwDFJtsxPJVztiGZs1mfMbET5MszXUixtjhEbvtnBbgvJqyKdHUZp39sLNC79GXLtc2",
  "key18": "YQP4sMXeNLc45n3dxp8bm9pZWjefeiJuN4M5onKrJxQ6AtN8BQeJadLgUsw4b6rdYWq1B3W5t7KLSgwk64Wz4vs",
  "key19": "4Lj97RfdixMyAR8E2Xm2NSDXd6EBCa5J7CMWD1ouraPpyhfhhxW3iuWWpf8A5A37ZrQmKFoyGDsXkzSRoNwZxNxj",
  "key20": "564r5RZ4LZ7gmsRuFt5BFSD9ARi1PrqWJD11f1bhFiW45jdAg9xePu3KBZ5BVgkMNspexCRvQLkaUfpPja68e9nw",
  "key21": "4nkFRpN7PmB3pR8A5g3dMJgykVAnLVHCXA5MHb7W7dWpePMtsJiikd968tnuhWpBugj4PD1adYr8xnkqxGbAmArm",
  "key22": "RZAo6obLgg1h1uR5JQP3EH8Pq6SVnVLq7ZscQWiG56pzkFNo3FEoZqnHz5JgAvdcLZ54yGgNMKtG1rwEHvQ45kj",
  "key23": "42utLDvLKQ699TJ4FLzuPQwxfyMDA4R4hXAywVESKMmbgMie8x6eTzLDGuajnwHqLiSBzPQp96QRY6bfjU4GtXFD",
  "key24": "5btyakWR3FQxH3bCGWBtzpvd2i6NHgjyr65FwEupPmPXqgNwC8yMsTRV1iioXE2YesFfd4q3AXroKMDiZnFm55Co",
  "key25": "3KWB8nPWNLwiyWb9Dv5aX2x5aVnZ8KBcXxtczfQZkRczhTakt8JUhdAUyNd3hHxyozqZGW7CKWvYbUmK4Ce6GdrU",
  "key26": "3ruwJMd9FzFwYJ7QsNf6gVuXDg5xjWsA4QbVCtTnjRodDHkmHvoFdBPVRNYDBoZAP7TXQY1chmnbYGJwALVZdneL",
  "key27": "5yNQNUiBbNbdRC563oQzf3oSVwt5BCQTVNNxgRXP9hCryV2HCygQBkPeeX5HMtZ8QHxKyiSMFCNPUFPGbkL1peZU"
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
