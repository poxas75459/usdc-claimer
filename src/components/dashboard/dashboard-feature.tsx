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
    "4c7p2YMnDTQCnT1CDmSw3ZitFhKVxV4RxkE8Lz3c4bb8n86tG9NVbkdhN3yTsYQNNqsi4g4i7iKV7yHH644aE8jM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mifv3LcgHttTBw1c9vWfo9M5XNijYa8gC2spC1gMDu4jLfs7qVSrVccrSZyJD51RpVNSzKQoqPt7xV3ahBums7Q",
  "key1": "316nVRL2zVfriVipX9ivSDMFCtASXc45BZb9XyxGhw6d65RdzgZG81NH6oF9Shts5u4kKWrTkCnkwzuxrGWuZW87",
  "key2": "dzMJYb2kTKdXgyF5rVKLfEwDgV8icupwfkDNJq4g9GhYfRB4bEQJHjgRdnL46NH84Nj3rt76Zc44SjW63kFohvV",
  "key3": "59uw4Y5fnQExVx1HQed75ZeMHYWsziJMvnbuQXu3LRE7zWppn2RLV3ZU7jAR84hs9aiosAsB2NDnaHeU9G55LVX",
  "key4": "bmN7itH7MZr9sKe9aYk3uRtSxYFyKa5tqKiMjcNTbseetA6JbkXVyhtaQeu49xLUde3ivGfH9JdGzxcSuQGmYCv",
  "key5": "3BznU91AgMqnMZf6Nq8QYVodLAnz6KppwCamRBXSZ5PNMzT6aU41YYXq9GnQUuri8HQiBE4zphJinFWHzngvwbYM",
  "key6": "KYMk4qg1fn5nha4x3P2sD7tRfzyTq4ccQGzDBaMMQbWbZ5wvCbjM7kss9q1yTHHnrJjB3r8jRDw8THbFTgGHUDL",
  "key7": "2xXjD6NcxT7aqQJo1tfeCWkmvskC7cfNqCjWb1B1jyuU4RSQiWy324buSSDone2RzdGvJLeZggZTggiBeRUuLCfD",
  "key8": "5mv31CKpURgYTVsQZjmDL6oEsNu3zkwy73ct1Vq2WsonKG9zQ4aVZwsh3PjJnTv8AiVHzSXS1D27AFWZD13CWQRv",
  "key9": "5W84NWW8TeuYj6Gba9yutLz3E6JJV9GnSBNJCne4JXoPfYk8HsYqRkHVVcKzdxSBoP7J6pos3deRvE2pz5yeUgJr",
  "key10": "5tZEg3PEwdkxTh9j6AUcPsLpYuSz6psWK5dWuZ195KiAB7XiyJvJHnMW5GSa2GFAuBnA2FaDrLmQcPd5K6LV2P5E",
  "key11": "2eHHe36PPzHJeRjymFqitomWms6md8j7fKXGBuFKjqE5JQyn5oMjA6beusGoaAhCPuCBmo6shKRzj2NzXKMPZeBG",
  "key12": "4awaMrqodYbvL8CUWnjmvxkF8fkwnQxqnRNtJvUuqQx5vo8oNpQyu6tJCeS2CcH7uRtvWsvxt8kp3tPuRbVyFsAB",
  "key13": "2EradwPdtXyqq8PbuzUMobnMfvcohjdyRX2Sc2FR8yWd5BrAfQbFEGSDpSGPDeR33WhchCLjYXREfQfpDn1n1PHy",
  "key14": "Hua7ZRg1K5YAUciqXsCgNQyHBwaoUvkta4tM5BMZQaKbfRtCVMZ3updY7yuYTCTM3HoV29QVFTNxoXmhyN4LavC",
  "key15": "66RpzEFDB2pPhuqo3m7tCroUy872oKoaS3sJe9NhoyHA643myzzHVsNo4yacaHJPaf8n2ZPshEA8imST5uaVDZ6N",
  "key16": "Xgs9S4tu65jFKcbXNgy8DMnidKVC5MvJiE33tLVC2bgiEtV6UfHH5AaoSub8V1JQG75WefnZEEsTu7y7pz3y5PR",
  "key17": "QVn1dfafGrCq1yNN5P31GAeJNWaQprH1x2g4Q7LgiBvsgAJM84vqoaeZJYG9p3YwfkUg6yPjNKVNAQDoStVseMU",
  "key18": "23Yyv5xvoeD3KaxqxwWwJGSTmrHZCRSckk2aAre7DTUKEKJW8hXeSMmPdCVmUH8wafEoRkYP7m68DgoUvjka3dMz",
  "key19": "5RKbnLtJXzFp6TrVXKNvjGRQUFRzDhZkQnfUqB5d5QzCD1f3cMDwpEzDDLPpAG1jiSkFxEs4wYs9yM2PzNLtJuUW",
  "key20": "4CrWv3jZp7HcWMXiKwkEa4XB5Tab4zbu9dKwAPtckBszTDD15ozAoTXybGup4MECaUmeXJLpYC2tyupRpNFBMqM6",
  "key21": "4eM9cEVczDcLQjXVP1P9CtnheFncvTMUv287G37biaJY4joawSnx4a6YKfSf2evTJEz16kXLdarwxpn2vS268n18",
  "key22": "3zUuz7hFerjZhccLgTAbsnGY5Fc8UV8QLQWwgb3XkCjFt63S5MRRuLyCEVw2FRe4TYZfapSrs9tWwnC8vsyYPc8E",
  "key23": "4d2LjNdZSXU7Cs7zriiCuRibK2XgYwXo54e5zwJ1YGFeTN9RACdqoh5D8CDgL7XxEfbsW3KwWEZJbWsGonjhSrDc",
  "key24": "jgnWeJExqs9SRtT1uELbHopjQNM1QnHmzMhM9ybU25qeacrVparP4G5mANN8QM4Et9qSyG5Gqh47hR4GYVsz7Ty",
  "key25": "2fw2WUMVidzxPcnL1A8uFCLM5gDCDkFLK5zaJwaQNtRuZvEehqehG81fAQ7HT7C5NBC9zxXTb6E2UR5KZBQPsgg9",
  "key26": "2xsxkhn2LxQ6PzwzeVpb9GLMTCqUTiDiPCvHwsGqbY54KjK5KBuKPt7wgBZHxSTgvspt1TbJcj8nVUTcU2TKbmDw",
  "key27": "2hov1BquwPe2XRXdHnQzx3rFTubuzNiDu5HfXQew5JvVgjJDu4913VbNcjknwwysH7JW7iGo4qtGYQiu6hh293kk",
  "key28": "iVpFx7yCguzZcsaEx8vapFDVhCJ7KVuAWmctgkaoFpFuv8fb6fvTm4mFMz8JkgiDkwSLKoX3AYs18ifvqM7VHUB",
  "key29": "3Nddt4N4jsT9m6ZHrjznxiJ8JBuZfToRdL7Kboy6px6EY3FBBnL91t2pZB8DeKgfNBHidDextuNFovpekZmf7j9N",
  "key30": "5TYgDxs4VnQRkP1opYznrLQ9CGX1YoHgLReaPSszzHRNqV4apMFx6u3QU5WgPQcnJvLYiNpgZ8cbFA4RGrHkDLQo",
  "key31": "c8UcMCq3dZu4mJjQxMkP1dcmhuHjDLS1N6A2HebD2aifJy1rHb8PmVVQzh4GXPmTKKRWaCwtX7BpPTZeTMXwXbJ"
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
