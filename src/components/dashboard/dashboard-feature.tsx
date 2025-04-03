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
    "3mjr1z5xqYHXjUKnHLiKVHBzXzoAyCQKVFRXBiwbCkdMtkzohwV9nnudfni8LYZtw4fz9wQ6oWqsbsHPbphqgfim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xU3wYAaXKHYA93mo7jDBHoPAPjm8JNFyYCWadpVpSSNuY6kw9NdV89c3Xg5yb9buXSumuzjWCgX79n72z5a2V8A",
  "key1": "66KrVx5ezE1mDFfZaAhWt2eUxysaEZ98cW1S3HA851tcKXKMREsbzWsgVny9ss5UZ4KN6Pwv9HN9EyQ5Krh8sDX1",
  "key2": "3FvgdyirA1goEpsnYWQtjPodiku4F21jfh8YNs9ydUCY6oRm71i77TAu8VXE7YmqrhA4itSjzPWdoy3xZeoLpgvK",
  "key3": "Y2fYn5V18y3WXL6VvRLxmzFwfaHcLgPX1UopTP5RaP8TRodTHFuQCHVMk5pjKnpafGW4D3HRyAWZMHqajEZH2NQ",
  "key4": "65twdHsgSkBU7SBW8EiC77vNmMaGJdbJSigGBwxBUNKoiWyXPgUe6P75TiErsYzZNpBh38zbtGEY1nqvYtR7nSDa",
  "key5": "2KUEkadk5dLnxwRriuGjQ1z8rVaNqdELUggBXtr6CsL9vEPiYNRXH8miJp6Tr2NYVT2nuwkEBk4BDEzCwRzRjD55",
  "key6": "3RffvixTzzQDs6vLwdVfmNQ48aoFyPQNTVJah2AoqK54mhrGoZaqsHQAx83fhfETqkh97A4WAFcjeYZ7XwHY5zW9",
  "key7": "4Ua2trq6BM5iHjCn8EMEYnq9Ge3mFofQT9Y3V6YfbAjEizDjB4oociuewvuzJHNZ2pge5d7FXRjJhi6QBQnxc2ti",
  "key8": "3udQrfUBox37Bo8q4LnXRbCfDxsLZs53pYuf1zMza698AdhC4PHhfgYkGgNC6Y5cxqo53zJkTLWSiYbZE8cfdWSu",
  "key9": "3A6TeF6H9XKFqhPeKbVSpuyZVKUz9jB8V36VSMmLh8WA1XeQJcBPxPWNyugVWkKm7DeeMPuviwDHUxMP16GkGKJF",
  "key10": "4p79wsXUzg4KNU1E7qqoVSLXDd35zLpKj3aiDeeqwm5smtxKGTm1fenYcAmgtRCvCFuhntKA1wYQ9uRoeH8x24ej",
  "key11": "3B5uSLGDomPQLATL5AXHm1KeDuCqtZvQ97FeBEFmszWfDedEVhZ87fPr13bibYaW4t9B1xZR5mYAjWH4daBLVKUs",
  "key12": "H73dV7CYmbybiW5txdhwh1E9vsmXA7RFX1jYuE1gHrBCK96q4jaZMKEeXBZUErjvRnmGXmdZsENMhBCvcNht6pc",
  "key13": "262Bze2oJSZo68CvHcphMSNRxDdMJF8mvXUfuVCkSht7ZeTHyo9KCQJBKU58X2jNysozdRdiwpZhxCDGL2t2oeu5",
  "key14": "4krhBG4Wcu6eR1KdfFaztYAhA6znDYDn7rE7FWiC9fH4kAHPeKHkpQywSreQevFy6oZJbK7RUuzoAbiGGatzB5ps",
  "key15": "ugSfSnYjZaJWKSG9rS2TztCuwHwBjHJXsocgu7pvpWJYPgxzToVc8cr4weFCaTiBtKzgBx7torFTZq5JwB9b6jw",
  "key16": "nYVuv1odDCHRHemZ4bh4xj8boruowB7UtiX3Bgp51x5Fe1cXMhKDVSZ6tE1yTtTy4HbYmZh1hojsFG4Q5tFZt5H",
  "key17": "3npoGPh34AXKpCG37YKKKyTQrRvqs8w1RJDJzRcubDj9Jva1Hb5kHgk1sNdrvEMnoVU59JmE1VPs8yY67dT9RaSA",
  "key18": "51EZUDXkKWaEqwQHXeUuvMpRsV6ukvmvS6zqCbJA5khZ7EGiqnmajWqYstLg8kXJaDd5rxVRaZPubNM5W5cXfLaC",
  "key19": "4gpLj9WdZGSg4Unrtuk1hsFpgMneaGfvVgiaFmcMWNeNGoEEAvF7Jp19bbQsDW1qUfuxPzu6N8CPAqMDe6GYsUMd",
  "key20": "67FTZLRnGXJFcKA2fxDmHmWz9LaPQ2DyN9A1Rid2W7LKY31ZXcy5DbKoLBaDa4MUcVbBrdtnmJJaDKTNcdpqN4BB",
  "key21": "5VgZA4RYjNm65F2e5Zo2QFmEFWibgox8EfQ3ZAiS9y4qeFdxjLuNKE2981hSdRZFXiUvcGBZpSDaLvrCLSc9EnRG",
  "key22": "3ioSaTavSu41nv4B3yuTow5omv36dqvpWgTXrTBqA1LC4eWdmQeWUVSfzvf8uGdC42NeLkTN6aP1RTQXHhjvhjvM",
  "key23": "o5iay2FRoQF5Aw6hcfpAy9bvgoKpVsRb2wZzLNLv2z4JjgGngotqJi8zbPRSyPbuT4jjJDZuSsr7YuqVSji66Yj",
  "key24": "3zYFhpwCjw85gmAgEzDFSwDznm7nJhnhb1FuqPpM3kJ4a9niU8mFNPAHr1htr2G9KMbmtmritS3B1ALPkndpmVsn",
  "key25": "25KXMA69eWEAhPoqThRTQfNXM3bSAtUAw2L2WiKr2bvRWQkDJTC9xveKvGHw8ZbYUUpGoco3CFz9ZEJHktAgJEVH"
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
