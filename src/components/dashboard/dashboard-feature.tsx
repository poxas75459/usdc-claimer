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
    "QAJaxbs7BPVE6UxCYmS21C9Xwf1dxSNMUso4fzbHpctK9kYJqy8E3CLKAPtLLmberrWKT1Vc34SNwc4XDmVnfuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TagqREyz5wzfNfECMsDi5UYWFYkqi3EesyLy4yuGkwbFpsCsMJXe1tLLMap7g1dCmr5863fh2q3fPWf1cQPJbMM",
  "key1": "4s1hsKqLEHQYYvVSaP3GpcM3CGxqt1Dmt6DRtZpYGYejYdmNVgnyEPt8xkNxhQ8Wq9v4hJd5B7Eq68WbBXmiApZV",
  "key2": "3ZEJuhBEzLAwQZNKosQxyTH7v3dLAghU7a5rYepoYseETE2DzfD1obEp8tqzK3vzD58DQrwEfvr7EM5GFrSAMp6W",
  "key3": "2mLQmeRob3H1WeNEwSZYCD6RqZJp6tmzvEZgZC2ZeQWBrGEvwhP5n9NU1a7FLeEGtrvzLz3YSXYtLVoPZSaPcGB4",
  "key4": "3yLR8zaWmsyBUgFCZ3fmb4QXm8ft8SvVo9YuLaXf1jZjF1wpGR9MtNfRbr1fswwi3rk3kPCtY1VNY2B8qzf3vJ4e",
  "key5": "XD8P7vopDsgoz8vT3jwcrM7zVmky3dc3dQGX8u2ExxZLjJGAWyQ8P4Uszxepj9JbqFBGEoRsFEL3tkjS8T4mVap",
  "key6": "5Sokx4bFWV2xQ9VsP2jGGEyKwSuxUtvGPhi6m7HxSeJeuP8Pz1qf764vPPw9ShxBL5xWi17ZFPEybC8NrfT5PRUK",
  "key7": "5YHwPmEEbpZ1QwYm4zuThPdTxhGWrc584hTA1Qm7dKdoi7eNCZavLFDeduf8GY4EXX6SjpCChHMQVJ4dcLnJ8xmL",
  "key8": "zGJnsVcdWdAN3uCDpcZWzGXgmeH9A5hD6ZA6wa1jWaiyMJxjDA3YJzdGsLpord93jGCEshGHpLLvZ1maqzzkowu",
  "key9": "4TwbMJX5fpfRfkVmBWv2MffPwyRUQDXQkHSvYCM1BM8nhp2y6piGfHpgVri6cwgtvWEH9dMDSDLKJYinhFg7b5rU",
  "key10": "a6fjZk3TbmX44AZpKjiBR2CfWByggrNpoy9kUQGCXwsySrjwcSa2ntwqU8AAN6heYmwfi4AeiskqT238RazZepy",
  "key11": "3DKdiC5YVK1dLVZhGcwkKtwUnsXwTHZhphDxDaGyRtwPgHnCc1Ma9EpiTah5uZbiJrPdh7eCx2JNUtqVzFBgwSDG",
  "key12": "Qfz3e1wPRkkcfzuAEfEVpBGYRoWyiNW891QXxMAc39wmSkvHSx17GmpmBswMEBSPwxwWe4D3iYjWp92iBJ8wjNq",
  "key13": "2tXhptuKGPqYAxgRTdtkoZw1MafG9hQQTzuZ9JW9pE8QFLoLhxQUJ89VZbkyvawTJwdA5P3ceh9KW1CwVN33ouVU",
  "key14": "5ufhottXJ3Dfu41n81B4Sk8Grw4EQ9as61ZxwgdLdTPP4uMNLYxXYb67FmAqKufKPHDQVP1px9g4oDKPxAbyiuvo",
  "key15": "4KCmyWRQxSJBbsJwbk95UUR5ffoGxKD7Vjv7C9HSLp2fmUY2XLgiG52sWuurb2sH8WbeZXS6N9NhxjrbxneVXseL",
  "key16": "5kYx6xuF2e17tyTucmYoKZLZqyNmhEAsswEPK36GEuJHy2a8aq6oTC8vDeNbJgF1RkgZVSVUvEoZ2iujzAV6Lkx8",
  "key17": "rGPPmJPtzXvUrsZCJE7Hgz3815CGMuVmrrW38hcFXJBjRnHLoDkGBuEgZrCqKvsNgMs9yr7b4qs3xSMVD4GyyDA",
  "key18": "4HajPhgJLHXWUnQ6j8VAJnKDoxNrWGsXBZ5fvbWonPTkxka5KyGJGp5MDWaE887dEjFJ15DyUJkN5rGPkPMstUmz",
  "key19": "5b2BVAPBkd81VGU79UB8jxonA2NMoTa25FGepayybVuV52AT6rUNFiRqC1xwTLvuyre5EHXqCCiP9DkxMBu8iKQv",
  "key20": "4ncuL2rr18uTQ4wX33Bg1rhaJtEGvVmjEQG1gnZzeh5g11QnpRJN4DQ4aH2d6w3z92vviDwjXNLS6EYWe9ZhwzR",
  "key21": "5T9JhUPGad8S1J9SF77thhC6rXLcnAuKkg9CfZ1qmD6VFpo4hca6ofKZYwziDLU4r3YsNahmfjmuZxfu7w25Uy7d",
  "key22": "4dSXTfMb7FBkDApBFhb4RE7UCAEX2EQRx9eL7JAFsVGPaf9puEpqK8jty4JJZaLikKBBA5ygfofgyTwfcxP9zcoE",
  "key23": "4UsfKqfEqTSKdMxS7nBSeaEHB97eFG2VHTwPi8jmMMpVbcPBAMvBZsWubfw83owaJnnNpEYBcpXwg6iWFcm17bEg",
  "key24": "2yq7v495D7oB2vygb6JhS8mTXsDgUKNkcQjtoWiGN2sYzxs3y47AsNyexW3bhLATCkY3qTkhsiWckenCHW6j2kQD",
  "key25": "2iJnnphB22gxCgjyUweCpuPjgMv2kjwm2xSQJRDZpJKVQCFXgc4UpH697mdYoJapiB64Tmaz7h78Ug9MRKivBvPd",
  "key26": "5JuegakyEiffvL8bZfiQ3KsCBuYB5SmNiesiFnDDv4CRgN4K8JBDGF6EAeH1achffcX4DRrMvUd8LCQ7WEfcBX9r",
  "key27": "4RS8s5QLbVXDBo6a1HZ1pL7LpFkVEK8HxJMtUsaP57rJCVbtT9MFxkgCjk1tr6AkpHsKuXLrM7iKj35SSQ7ma4N5",
  "key28": "3r76rzTZK6NGXmoxtycA5xohfV8kmfUkUhC1ARGSvW9jDv59WXG6t7TZvLmPonybSQFG2vyqqQh1LY8vFtkEYMZK",
  "key29": "3DQmLGdL8eQ99UFFUavZhMJabLNbtwLq5hsK6tTUU7koPPH72xhEjhPnonN4Y4zTv9rE2wMVXv5r3j5V6LMTE8e7",
  "key30": "2pjYUbzGSzceRQCrRQwFMuL7Qw7KCmXqMFoYWxTDQXMVwAm9bwXP6diKBcAMWDwjRKAR9PoAvoAq1JjnC94WKjyT",
  "key31": "4DcaiM1iXwPoLh9p621ng5RvLxL6xQGPrajdoovn7JDJQD5ef64A5HqYfiiTXnrtQJmN5WsmwswSR9y3hLekfCtx",
  "key32": "4JhCBdw6moy8beKXfcYwsJ9kaczNY3jQTxofpwP5ab2n4Vci1BovdinUYna9uKCrtA3zADMWhfF41mQZgzKvWoyM",
  "key33": "4u7PXWf68duXwZAYzimxx6LAYdJb6YM7pFG8AVfs8KjH7HwXKzS5Q5qFVmCjxuyZ2i3M2Hijh2UMMghrL4beinJy",
  "key34": "2AtzR3RpJRutx28e5APQBpHV8XoLByhCUuacCLkHmPeT8RykSQpFuoXqcUVkaDZkHxThaFfdjAND18h2o2D8o8k2",
  "key35": "XnddwWZKTgMdX9qVNeJ5iA3SuyyBSMrZGdVpZxH4JGny3BXBqg8GiXEsgQg17SegUZuNmDcydoFd7aMmTUtHM9r",
  "key36": "5sPj9Sx5Kkcoby5pxuezFGa8bk4TLxtyKbh491YPTZvZJjWKwiNBZadcs5oGahxd1Nn3iTUA3gAh4byPpdeXMM21",
  "key37": "4pZMoLt4yuQkKLVsZ16Mvi94pfnmihHsmTP5tBdwidku8arqupL2CrUWAfP2XAjk6Cf9fti4zxPBuzKR9hKebjqM",
  "key38": "sh4JXBmuZy1joUkQR9anUQRRP8QDMLWnibKxZXACAyZifDNiprPfZGKDs75eZi2mpHAKjLY8HqL7EiMDkTKesBb"
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
