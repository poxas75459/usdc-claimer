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
    "4fwgTL5XEtpqzejHgNeBPoYh9Y6UGR6Ke6v5wYg3EqV99aKbTeFLMPoCurAQd26Y1MkpdkaKJXZVtvcyDzeQLTQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h1vtuK2AhemmjKrHqL6YXf6hugHNNsnz4n5uzgQ57awCpGmm2yXzGhP8mpvxYFjcui45t2BKfzqLrwy1jNrkTR8",
  "key1": "DKRAPQiM6M7PXZKMwBFcW7DH1B9aRDFAT6XZy4eKr2Fz9GxrwQwpD79jqndZMD1kYNrVbHBqHzaRcZ3yQsta5TG",
  "key2": "3cfYkxtyii6Vaf81nS3e2xntbXaoyZZR5E91wJQrXh1R3XeczeaHmE7VjuhT7HJHnJNrX5pCqGHNjqCubQHQgzx",
  "key3": "4AfpjyYhKgp25X1ph6nQPT8K9a8jS8KLkcs2xabxY9amodwVazTLLx9sCzW6KxE66qBhJTpatepBUckTKNgGeyB4",
  "key4": "5pbHwVwpGMtp8QDSs5xfLY7UYeYWNa5ZafVdJgKRUGT6xp4F19prjzuDLpYBtopWKkXtDUoLPa6A517VY4vJj9mU",
  "key5": "56t8ZxxUnz3zbs2L6ck5yG4E1bNtXc8oL8rkaQMu15Api1WfGTaXAKojzzz134pCxcoVydqiPFgSZx1Z9uu7PHtf",
  "key6": "2eoyYHigT88oSvxSMHfx7tsRnFQeKacyVVbVedWqFzDMpCq2Nzct3G7PEskR1Srmed5jGeQjKDqrctzFN1ejvPrj",
  "key7": "2ZD8nWVvJKa1gocwtfoweDtjZdDjNxycss6a6ghBCQdXeS5GiWocEmsy4wieRWBPsxzu5hmhCzi61Wv6oy8rvYbL",
  "key8": "ZENsw56w1kzG2meuEnq3oQwNcFjX9nAVh5Uh7K17uZFcBbPd5ikAwsfQ3kJu2p1yrrDy5p1wTY3qr7cHabkpbqY",
  "key9": "2bv9sUugxoMmARwupMk3LSczUEL9ex4VHmw3K2CmftQKqefzV9CEheZc3Z3A1nUfWWGUuqb5dNMAUMLA2iPg6TEb",
  "key10": "3bbzQ4Xbg5zZZxYMn6XQXUoBsit5kidhjmCRP7PpLpXLWeUxyF6vkUdhywVx44X4WcKmHFFHiZAnfEMCcYKeqPbo",
  "key11": "3KzLi5Mm6P71S6oR3qqAv4kWk2o2Rk31jv8GsvBvbZYVuFMWhNnBUuZsD65rsjDnsn7m3LUKWKDyqA33XJSgcGqW",
  "key12": "4tdWuQy17H5cZ7B5S1992PevM62pp3o47JJ7xy2p8oJwradFjLmQZgjB1fTJacryCFxTsZx1g9FfWy3ayRT8AqwK",
  "key13": "4cWJHLRSkXBA9xafLAsDkSHNdMefbQH7cEhhPKNDSoGXwsBqXiv7rSci4wdFFVaksSYSsVmRonGqmYRQ1ihr1Jio",
  "key14": "5noiwNid9piWhM6CHmX4DXH8ZZZpRyBrtz64mWscXtKiFUMCZZc7jTXs6jFHVv9dHTvKG4gzMJBVTFPm2meArv9F",
  "key15": "4MwMH3fEMxMTos93TJjasbvBe7WCziMG9B7bDX2fNwfS6tLKNFWShJJqEDgTT8TrSejhEfCBekwQsZb6ZHBUS25g",
  "key16": "3vZWS8dqRFN1UvFP6i8hFQSrT1o3ghnVYKNe6rLTasUipPZmffGxLyAjZoiq5nstaEM2RUcBywfWLXpATYfM8uAu",
  "key17": "62vkgiPRDKCJx6FpDEHLqcpgvpRe7k7Kc6xxQmRjWBJxfRr7QTAE9E5TxwsaYhDzt2PBHnMP7QRur58T6dVcG6yk",
  "key18": "3jFNdQZQnwmLTDWLEf5if47feHzUkR4NVi91oUBWcDFMGdRWUUz7GeowzxhosZ3aw6XKtwd2s5CT3mZvK7oWj1br",
  "key19": "21rs7ho1Ap9TrvCmKMFsjRvinKyLJqKp49dTXo34uQNsW4yXty5NrXzSH3c8gzstRN6PMpPAXhQQtq8AUPwgH1u9",
  "key20": "5ypeYynjZeq5FAow92yZDANMiLRy1cuX2UZMHKwEGT82ETyZFfaFzY1HkyRUiutvYQK7E5cN87uUwJSrLKvoSRsM",
  "key21": "3frUmAiX3vYPPhPw9oEDRuUF8EkzFU17JxCXyErzFebEWGEyBifZLarrFcNi9JG2PLpsRBbLbo7gRuicCs6aUsyV",
  "key22": "5nK5fJD2cNFKjsHYGyvmr91Xe7Yj7BFBhtG48J3sbGnEBV6ZEoBixDjBxrCinaA1NaaJtBTGubroPBGNznTidavX",
  "key23": "2H9xm4RxURjbhKS3wwK6azhvNzHar7WGRzKFZsQdicFvdFtHWFRsyTsg6pNBTJvt5QChixVktU3NWoVwY4KviCmK",
  "key24": "24p1pdjfd5iMq3LA5hhvAXC39m1ohSoC3gnziHmFFr2BRoJQxJQF4Wgcw1e2HVuocPbuymTH9ZLLb3Y5ybXoG3xb",
  "key25": "5ZCLPF9zHKk74V5RitG5wDEk89qAPb9ToAjxoPB1ZSf4qvBSF2s8LXBJRGr9TpbrXkvEAYRhuMxtrQEpUpqGaqa8",
  "key26": "2kvHJfPSkuLrBTSKk4BgL7bcXaZ878Ttp2MU84FZAc6pgB2zvgAaVYJMaDRiZzpajFRWCdb2GmvKz5bgkGnVsPN5",
  "key27": "5cBVgU1BiQWQ28sRB2Ft8nyuamJKcLPwkDxunYgVXZEQoW9C6dig41w5yU2BhE1sLbmSZg6MzrZisQuvoQV5p97R",
  "key28": "3xvQtjCQNdSNZJTc92tehRBKMjtoc16hog8wjjZpBWJZNJnvU1xnGgPkNXT79KyqUX3gPtNBDkLnmn33eQrayXzd",
  "key29": "4454VS9qmZPeZs3UdLVYS3gvVrxDToTwW2FduHipGMR2NL3UJmyaTCimgUm4YMjWXzm2dzi2cUcrtte8rErywkBS",
  "key30": "oh3xUEfgj78pdUhnGsAFgp1UJEidH2oVma7TwCdYgAGXyDgPfsprESCVAE8tV9e82Mtaeuyqm9GVzdwWYaQTgVs",
  "key31": "hK1vji4tLrjALPmf3NHKe4BxbPXekRHTtDigidKjoGyq7TpqYVKDEP7iSXyZ3yFq9QA4yTro8a9qaNHnCPNC6LD",
  "key32": "4ezPkxDKQLA4vMhNxdPM2fF8VEX4KccbgUUvRVetHPAMA6BLgLU8sRyTKr8BvcNcpVSyamg4qxDQDRBxqhySFYLW",
  "key33": "3Q6WqTdu2GyVvm2DNqbodP3EXCGXE2J2VdDnTg9oa7QqjY2PLEoRjqiosET1MpN8YTVoTQ1U9dg4XWQR3Q1vgLuN",
  "key34": "2c5Wix2MNFZR4WhLGQGsKhyDWvd9vJsJjhxWZfHUmnCvPXW2TjpvqR29ooDSDJZHo5vuN948F1XaAYf93WU4YZou",
  "key35": "5B71Qp2G3phbzXANoQDecGnjzXRzz7rrDhyc3WqHeiAaD1i4yBPATMZwhCc2FpKudx4jHuXTjZKGWeMDNgkxPVYV",
  "key36": "56dz6WAFc3jxcfaoo8zCNpaX5s7yZmu2WFdyiRLBLDusfZFiQc9anqBGCJUewsr81fzPfRB2ZFeFeshCJLpQpqUe",
  "key37": "2ddNbmoNwshivvpyS44BLhntJ482dPN4HPYWok9JBMjgU6HpTGWxCJDmECwWwXWGzkw19dVhmiVwLpSNg9bNSiCk",
  "key38": "4ReJ7V3M6xHUDKCxpssYEinc1aWJwiwMpHM8zPd5ZyWQ4486PzSVFDq8hp9sYC1ZDBsv8QPu4Qc3F7NxrtndEcn1",
  "key39": "3T352VEF9yPi39LjsMbxVA2MGv9Sym9AdcspZQRSjGEKP7fDF1FkvToj5jKwE1nyVgYNA4nDXCLdPdejDAXobrU4",
  "key40": "47HRUKnMZqYczaYtr7CtSU6giYeWiAEiUttaNG8ZTKUFyTfcc1vyunxUEJ7uMkyLk3PRSJELYmDz8kFyfhs8x8LV",
  "key41": "3XDwEtyGa8Rm4wNZWm4VCHBWYrR9SMJFUt7cvq8PE2SVFkPoG4k12XW5idTRX9zGwq6ERH9SL7kM3k8izm8odARt",
  "key42": "4YqeqTVQaAmxc38HkamynwpnY1UFcumPk5jiUDED94qR8k6gxywQzTLJDMTMmL8yB8BjdPaSxs23yq58qpXamFx4"
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
