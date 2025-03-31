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
    "5Youf1ukkNhWcHJQtAn3UnxB7jQxeysirkg8n8wYjZHHnrY6LggneGgiXyQRkQdhSQWX5zXEGtyik1cnoFrv5cL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ziQagLbN9dYt69sptFdEXX85ff38ajuiB5djGUWd6J4aL3XYWDDJusg8HetWXERFeNB4GS9kZyZyS5FeKtuQYf",
  "key1": "31Yw5ixy1u6Zt6HiVBTiFN9pC3a2ZcTshMNZQXymbRGiXZhvnJgH6nXQUrJYVckg9MLWpqC1WsDnBfR7YcEYg9X4",
  "key2": "44j2hfmkTJ4yKi45iSM8hCQefQyfEBRji3YQnfzdDySbtamBstYGwQCqpwiW7qvZ7FBZd4FDSCrsCu6L1bgTBhxj",
  "key3": "mcsWHpaV3B1DFJNybJ4JeC4NP6Yur1bnnWgBSjGCPAeRpV3Fbn1own8HpE7eWictKXPLtfCS7kjmeuX8cqisC87",
  "key4": "3BL9khf8b2wFXDBbXwGBmo74vtje1BNDjNBbcCoyTCK9HFPy2AQ6QsUs7Z9JN3HoG9pABjNCJESmUBnfcw35AZ2F",
  "key5": "5coujXb7k3jSfqGtujCHcgDwCim1Rrto44mqWmJ8DNms2Z4i8HTjr3bZhvRzMhnXE8whLLUu3kDmgdnofuUbbsGH",
  "key6": "5tGfeu3P2aezoqj92pRpG91MLsEdyLLAZpq3XAB4X4Af152U5HzkY1ZDARe3g5jMYcAswgQ3R7Jx5cX9cuCjJzb",
  "key7": "5Ab6JbXtuaPajmHRXr8sJXTNa7ZTxu4QgwNgiFokd8No7CDnqwHqGyYwC4b77VBrMT1ytHNDdAGpRgqfFLpJrKXE",
  "key8": "4EpFjTeamqZHCMfioEaXtxr9BwFN3V998xC1PjcxpMr196RsdKQWdCpzyxnmzbb7275KpwE91asuzeTUa3EZ2PVZ",
  "key9": "5bKHyUGxszVMqnMczygLba4Erqaznkyz3dCZXr87pyRYBY1nRCoDMAfhVsEFmepoREyfVhvsMbEo3Yt9YqbYay9",
  "key10": "5M9db2fo1CYLmLXbqo8D9wgMpVKhPZmy6s4jaRE64Yd1Fny9UKTPEgPKArbxnyTcXKbm6G4pZDZcH62Afgygr1EW",
  "key11": "2pkYHwwbyF86rX3ZSphCiYQN9Yd7GXPhbwLsTxbCdRxPkEPjkT91oUWk6fskhzz7GDKhhfgQwnSHdFpU2a8kVhZG",
  "key12": "cBF8ZMxmzbLCgWjUKwY6SiCcU78fskdMCh369M1zDB5AZMgj13CtJsAHKtnoWxebCDYfFJcF55b5SNjugVkfbrc",
  "key13": "5PdDDxQASkTnhvUpEQ7AvuLXD4xwYVhBscGLVemaLgtXr9ZHEZPDtFLRu84YWyU8GrW7NgQKuyBUuvcWJCkwFFcq",
  "key14": "PyW8ytm6jHJn47GccofdF84uZMHkDAZ482iT6qLovupYYRSMoXvPhZyykHEMSNtFxZqmVLYr6tTuw5BiLUjB25V",
  "key15": "58WwYrQUrJea4u79JcwfoXyiy4G7tnPzJaEfu3tTPw1W4PRwhaDpirwgCjMFHQSLzSmmjQg78CfLoEDkS2eF88iY",
  "key16": "3Hvbr9wPj2ZLHtG2B5FWE1N2427kz1paWwcFuS2ZhXSpAqxe8reJVYL5X9m5gA63ByduxqAnDkEMCMBGMvKKk4yp",
  "key17": "34hnaZxtdnC1vf7YS6LwVoxXmmH1cfda6DzV12y4ZTFL4wLDDLqco5H5LGxUtcBaVADQRpVZoFzM8UvF2fRdnBrq",
  "key18": "9SUDfSFFfsfkWPX92AWjojTLSHkDc84PDgRiHi3LFDyxjWdnRGcYXjASRdu2qS3xtSJniju4j6Jz9pegvMBzyhT",
  "key19": "5TZ5Ez9deKNmYAdt26hz2BeRfj4RGKTvnoYrwCd2xh5qnA5Lfqwpx2AKcAf77bunzwXqENYeXAtJ3dCKBrZ9dRPf",
  "key20": "581CSNdBWJnNrjkctTqFALpviTNciPHBZ29wvwmYdiUakJ5kinWfA11RNNzpGs2gT7Tfg6keSzPo4y19gFi4H8kG",
  "key21": "3t7J44AUpaimf7KJkHFiivfohepwGtjy7dK23LLaNWPp4tPDwvEwZpeMZVt55g2dn6RmDPGmnzbsNpzAm6ftpTm7",
  "key22": "qwgN8rYsVkiDRHUDjXzaB4A6ZuNXyxWc56Xa4nhjP5EorXpCT6Hqq9L3Hc6zzM7awcBHo2VbzUpa2JTHW2qWSEH",
  "key23": "zm1QLDvRrqHboM8MH2tCEmVMuuan7Zu7AMCz8RfoZf1BN1vgJdYrZeocGjbDxcbixGCMwVkJaZeqkPd9Y86xhbW",
  "key24": "5dbrxxeKZSxiYShroL7XTcNZ6DMrWjBXpp2kMnyo2rDU2jf7wQ8c32F7sVy2gsLuTxFnTvuU3hvTQtdXrqAwX7jt",
  "key25": "3i1MzGMaATQc8s1zEyQiPxUQuKYhBnut7uJ3q1JksJDQ6tXppatCEevwQu8qNSES89AXG5UbsPv2U8SCjXKo6TS2",
  "key26": "31G7SyprzgNrEVHg9mVH7TpiLwCtwVybBAm1u6TeAyk4xGF8g5Gk8fWxy6Z2FnhAW4QLMPhx2BvcivzhVwc84MX9",
  "key27": "mBCMaxhj9LDtgG2bMkG81Tk3HPmwGodchFikriwWPMRLKH2DvVgAQ8GheQLgbNkZiEQ3ftVyuqqYyBRow23tbVJ",
  "key28": "3FCFCiBRT1iiXte1iwPnLwpTV4xJG1Xcj5GhTibDbCsSxw19ZNoKxCWjwbkoPCaW9PtjdAq3oXWTJxoKzcusYHcM",
  "key29": "7zkUhZJF7a3YGFLyigEgUF6oTti7CsoQiRsJXR8XwBtLJ5U9RYygHZ1hToQiGadLpvaF43484yXPU2f4YtF8bgC",
  "key30": "4hKqidbitYtbnsom179SQnd6Lsvj2XPXnKNf8YdyCjtMc6Ks6wU7fTkyPcTJ7VMMnmaMHx8pocctDkdW3WaJUCKd",
  "key31": "5ntt9DjxwiJQ1kAe9juUswohV8dJuCjGhAnyX6Qe3w6xZuvsCJ9ZaicY3y8UMKXvirPEfsX9QNaiEX9eN6rYTkXc",
  "key32": "4Ux54GQsU5h6EBxwig9fCyUbY7b6gfMHtFFHsEHMyqhmdDrt5J4E1BQkTwxz6csiA6UJpuuUg7q3EWKzTjVnU5XF",
  "key33": "291Mfa79FKPtw5UV5KUii1SQ8Cfpzv9JR1xtad67tCvrXjT8dvM7oXSzDzPF4ZBuYfVX2sCVPamYrPvjWWZHuu8S",
  "key34": "5kyR3HwD26rM5CbvMYyCCCao2idatrpjd7NympYo2dRF5JUA1gVThoRzzRM8kpZsAtyU8zRQug54y3auHw17daCx",
  "key35": "rQ8MQpt188ua71xQbGcKppyJf7usfNLRyFYe8aqq6ChYfHR3n1jvqwxzNNFHUB6i8qFX7AngXehDQcJNWajhoP8",
  "key36": "5nXjymeZx1qey8mkAAicDz35kNhtNoPbwC9uhoo9bqq6Xetz3DYkPwi6HHdTWvXs2dmVoUpSofGJkdzaJ9NrMBLY",
  "key37": "ZiHupjCB9omEkQxmxPAkx2F195YL5kCyav9vLmbNafVW7vaoRwPawBG5tGFh47G7ogYp4BVXSRydzws8TfDN5aL",
  "key38": "LDiGHGsxdDULD9YuFBW5x3hcxQkAGGPrdowgAf83VTFt5UpFmwJjq1khxxGGYWQmQQoS5kNJTyNJDmAqPxj5Exh",
  "key39": "24Fw55w4eJHhLD2TggspNPxpGWdAhjgD5MtpQHXhA8RrwVuX1VqFsWT22MAKamncz7pdDgH9kVeD7dcTUQXpnoMc",
  "key40": "4irV5FSP2Jb7ZBfX1WZEgpyGW3FUj2NDD1JeSJ8F4LxqzSYw8EPsrb71aRAmjzdcDzCaQMiRjHCgNVGixE1Bothu",
  "key41": "3ky9mm2M6CZxKurdUMDUZ85sySuYbtaKDYrdLbzHcDxh9GH6WN2bbskVEt7tEkQNxzLoT9kysgo7oNpyKPHCpQD8",
  "key42": "7rTPe133KNT4zjQ5pSN8RGpXkESxJNkLnbBPi5sRScYryAQHUxzP4pue9F99i4qMQDWKEBgLZu7upPsYmDjeF48",
  "key43": "4fCZJ4oc5YoEGtWsip379pLPd2U8LzyhR2bYtDY3Y5xCuzWvpZJaHGdrZnVhse5EDjavMA4Wt9Vnov3XNCD5qNH9",
  "key44": "3UDdxun8XYME3hsWnc3eRYoe9QoXs3SJMTDc8w3hvhhGKCSWqutDwVvuHvqNPBGgP2k4ekf9r7tZJAcJLeJ639Mh",
  "key45": "2hrpkukkpwp787spWskBBkHXDq7ZYN5Xyg4SSr7Nw4itJsaQwK4HKqcWrYY5ga54y4s6U54baaoHpbqqiunMSuiG",
  "key46": "5DD5t97ifodDeVW5Z5Cgt4J2jwR6Goja8RD6EH4X2M1ZuVxirWkTJ7V41ErxZAFHPV2ZEJrA8y1W6taSfg4P3XSh",
  "key47": "2WVHwq8EMt8jVVvL6vuL2hDi38Zvq6wErU3cpKRkN134RBgX7SbJxEcuRj9UX8ppr4qDvahtDYVrbe2LpXHKqLjr",
  "key48": "5wKeEC3H5u5VopcTV9tHBkThoeYc5dH2Zvr6xRYFjH3Yq6iZo67EuJd5bqR9Kg5AGDJGEFuXsLiUoFMva1H3CfEi",
  "key49": "4zV4ByMLaAU3TXmn6Jwp2YEEsAxdAAiRBgFQbPaVUR2mGtbDwNtDAp3X12iqcfFPMHhg9hAYJiWDhV6cAZuyzwbL"
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
