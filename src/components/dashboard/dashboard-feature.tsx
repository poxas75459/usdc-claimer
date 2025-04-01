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
    "5VJpYydYD7L7BNK2gJawpWyXwbsrRkaPNSHYmSP5PExQYkR8g3ajd5azddED1MD49pKJWJanAESXQW8Sza4LxFHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tAapvzvZiPPX19EsLRYyNmDSyGpy5swMkb4SY4YyH6cBgnwypsQuSk34ULG5tABvcejK6TkMtedxRHcUvhUtSaQ",
  "key1": "5eS8Z5wfimomRLFAbf4Q6qNNWVqEnJTBZP8jYJLTLa2NUYga3XaLteiHQmPYsXxQouFA2dcW3aC3D16uVerquDq6",
  "key2": "2s4GYwjegHxYfTsZ7XrqvGVEBdTfpJGmF8hRPbEK7pfwELZWPZw2Mtb3cixRY5bmW13zfasymQ79YfQhzMzgB9s8",
  "key3": "3WuSE1DKPq8kbe2wZcGamwmoQfWrWmUDnr8BL3PHykuwEgTt9kPUToVf6nL6DrRag63gypwqji1FKenbUnjQGJom",
  "key4": "3Zxp3dU3uNA2Rvc7efn245LxsnXbNM1zXSNNe6HZAuEX5W4WRvyms93LJjhkJwPssB4g6CDkHqWW4BwzyfDD6K1j",
  "key5": "3h3CqkCSkvG4W68GPxtxVZxKbFoPwP1RQVtfSjiCf9vHHjHjxihacX5N18m4crrCJVrxYbf2ReTiyQ1W7jkZ94W",
  "key6": "5SVYTwsWFyrE1qYEXytSVURGUbpomaimzhNHMZnXvrGmHhzMDgq5Yw55Yq8Uv7XWfq6BkwVYJUyXu7REn8BvLfs4",
  "key7": "5sDe7ZnXCJUcstGTsfcjop8ZPLbPgG9Cc4ABeytCvv8cQdJn8mxCTRPJNNDoWrLQaG5F5jGbifzvQa5Tis2xJfch",
  "key8": "3B9LD9sDfqSe6Gk1gJhAfm8S1AHP4Avmfqj7z9G5ukSTLdc8RzzN6mta4pDATjcyY15ytEGRRHw9UAt6qTrDsxPo",
  "key9": "2yNQYnpdhaaa3xUkvo36t4ydrk2AAJkJSoN54V4h4eunbG4zSC59AFMZEjwZvDV7pKeredfZyUEbhKKGcNt615UX",
  "key10": "48gEmTRk5uqtDqpq6cC6R7kjZnK1V4x5nUL4xT8SreJckg24GDwnRgDqS45oupaPhDSZiBK4wpJ3v1VgsuRCYHZf",
  "key11": "4CKf8YtpSRDZJSFcRMkzUQbrnxz5eRQxRpfgLVi5tsgeUYn7XVdm2pK3jETheuoTE3GA29Z3rxWp3ApzfXnspVCH",
  "key12": "2118FBY6rqR7zJy9kLTFrg8CzQpJoh97EKKPxX5hE6751CAZ3GdqYtDtLkKinG8PJLPw2665JcDRCmTMyT7Fprnp",
  "key13": "4AY1d9t4HXJ4D4nzjRLMhHvhKLTBJ2fvHdNSSEdaz4c2UjNQS7Bgrzy69wjgn7BvHkHVzQDz1M4u5zmk2VQaagDe",
  "key14": "5Bwqpxxr9Scb5KEM9FcLx3V4CLVXEWws1wsAqVvf6yv33jCfoV4ScnaK5Gq97MWkB1DrCVozzda9JzWpd7bPTUJW",
  "key15": "5P2raU1EaDsPeYKW1zNcpqkzkuK5YQJke3ToS3659DcnWpsA9JhHg4MkH8X9ZU8adtja1RMeKKuCwpU9owiSQ4i9",
  "key16": "5FkHcxWhkst6srmHEQCAktbzE8j9gjvcVx1gfxpnm9CfCLgip3pP9VKzBMJazHS1VWjttnhmf4oSatfTrZNkWadj",
  "key17": "4FyeoPGAMSQ6J1uhJAWpChJEF4bLCBkWGKA5jCsM82ksJiA4RmFBpKwiTCFRMoGL2wMVkE1VEantE6cpwX7RTAVT",
  "key18": "5tQ6dMJfgYWp87WTsxHSEZHA42SjGKXjgAvyQMPqwcqrire1h2shw81tNdjK3cBAWtb2UiQxVZ7jeFS5qgaWT1ts",
  "key19": "2Mh97PAQb6USzXWt8bhgLenwjc6gVW7AX8SZC2QfK1HhX9U2Q7hL4hdyFjn4ZVPTJCc2Dh7ZPpngVZ3vzFVu6F7U",
  "key20": "2Mj9xmxEDJboYJPLqDmBQdFJsZVzBKDsUzbfMSg9pzEToNX1zECqPu4M8utjGdEoqUHb3YnXbHhxqwVD3buCVrCm",
  "key21": "6tPStdZ8PbLnXS8xWBjxRuSawJh23uE2SRZ2aUmvisb6ekg3Tpg4L44XaqoVTfEJCMpoXCaGr2PLK9j9gemEfcH",
  "key22": "2puDPms6XBd232tVCxsedSzgb55BQmJkpAn9VgGoWEdXiBbnnRnLThQ188PfyRrJi9bjrxsmJpcLrzpshywxZuLC",
  "key23": "3kEVoP2pBCSzY2D6S4k2XZ3zRquCHgQN8qXN7fhP5XX3N1xVQNga1TsUYZaTUjbMqfhLx3MUaCEFNRr8B1KejZuz",
  "key24": "2y6kob3BaSFqMu1QVrkwmRpHoxnRZKxir7nmFpQ5Gd3qxQhDDtBXQTW8x34S9VfisA9NKJYz9r2RaDGYhEhQb3rv",
  "key25": "22UTTeSXd6UWtpN4eo9wa1hkHhy2tMG6Hk7B9vcktdF5KVfqjNNYFvxGYvm3M4oMV86zpt114QCQRhT8cNV8UTBj",
  "key26": "25mbhpbMkwEF96tN9omg7GTrPShBZxp3CyQYtPciCR6cBiTQ7S3e64o71ekEzFed35C6aBp78Pfky1r5U5tftu87",
  "key27": "2wb1JkCXKkmfQquCBNK3sTR4HQFCpBFjbm15t2QSfi5dX6Wi3THEJKfsktG5rDmLBpybBXtxmdwnUPgdD5JhiWTh",
  "key28": "3x5nXgatQyPpENi8chQgxpqnz6thUCA4WGqQe7xjZRHRQhspDYHMQb3m5RS4kMnhUhCJRp2r18h5eHzCx5W4eCyQ",
  "key29": "2aCReeoD4a2R1wwNptdQSeJtpSMeGx6chr1Nen9ixWf9hzWBK2NKYxgC4FP5p3BVYRUjGcEErS6nTW6ZvhkdJGPH",
  "key30": "4xpZMnZifwQfxymRpo59jUsJGJoJT2a2wAZdEoqTAaoYfE4JxtxcdoYoE2y8RgHjVyvWrJyxBVwjHPFUTQcfm7Ne",
  "key31": "34BjxxvEorrAb3KgsYBAPYSk7oTcKH9F3VyM56REzD33oF5szForFXxoWozspzxpKioswhGJuVnmXLiwWF6uMNCF",
  "key32": "5Ja2MFjesT7X6q4xk8H62hrCZv8EB8QDT77Ae4N4ZFLssvncCZgzR5xg8MkVLptKCoNwibK6nqujZVS8KrXeA7uk",
  "key33": "4d29Na5u7CtV4hgk1XndoELEXpAfGAaaeyCYW3hr7BebmkVj4EYjrC2CybSUVY5fwm9NdM1ZmhUtzLXpx6zPS6Jt",
  "key34": "5umo3kTPwfCJa5UXS76Bhhe5cawf1CCz8gPt6P3miRDhLK3zVMpQp6nLGzRpmXjxNTV6R9RbxFH6Wzur9Stqu7iK",
  "key35": "2cLGRCmzgi65ZjGsU7Zg5A46iFt7HnZ5ciZ8WsKyR7Xd4vcbwJnNR4ibczZi1dv343FZRGhdhmjArYQqEDfMFFW4",
  "key36": "4Rpt5wK3pY4tN6HmiTnCXkSF5mocQtnLFeepc9117nxtKcPDZMjiizTxUFyA3b59LZnkPBxpfohdALfV9Me6Yw5t",
  "key37": "3kh5JoircwqkTffqKH2CDc3cUFE8egD4D7TeCmxYEh9rFqc66h3nM2obt52hd72oHUNss6FTDfmZBP14aWn4453b"
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
