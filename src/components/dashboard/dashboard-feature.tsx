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
    "3U6Af2RDim9Xgcy7XyFuUgJMUrNMT6vgJU8zB2EgcuV6ZbRfr9jur6GxHfweBQSaVRARhr5uiXgWP5arKgvvFG1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xsf7wpBKEcdumNV2LijsnnuZ8u4TkzCNG8oi5CR5RL9updH5nU1UFzyqfH1AQQGwNCxKvgv2ogfNJwRq1BqxT61",
  "key1": "2ocJNngcgv5YAihA8BToboQ8eX3VoM2dwWRYZm7kZpAq9KwqxKzkWnVGi9JLVmYKsvBqhfP5WLkd5eVHvmxSg8SE",
  "key2": "28eSFaqLsZ9hQSw6cpfox7XhLgwRb3XgFUdBvAxztgRHLoxHhwLJLiDdXo8TPwiW5VzUwNbXJQRtudnAcjonkNcH",
  "key3": "3oQ35Fxz6hA13tUeTemRu8x8RexLFBqm5wcrkaFA4Ta1dBYu5aB3fjhXL7VNtJnybaaPvF96HmQ3asiLgkG6YPSK",
  "key4": "4zboFh5fs9oGThSY2w1CNTRkwNF7b52ucH4Ru4EVMFPCEAkjAjm4MRqeaJLFed3mpVr16qPkX3fvobihsLvhYFfz",
  "key5": "hM7eZGXbuVB48EhwYxJzwDqCXtLMkNimwaGyUAgrB8wj73zaJnX9FAmsTBLdXC8grMv7z2mTA4ivxQEn4cF8qEx",
  "key6": "bWRie231sZmsH4A3FYouoKBQkxW1jhqiX6N8de7w3a1LjAHZa9Wf35N9DRyzn2hDR9M3SAxB7RSwRPQhXp9FFkF",
  "key7": "27PTd8AYP9w3PhKuR2NbKTCvyGzLgF8h8m7vgAqJyS2beNKD9iDSDV4gAd2B6DkabFNqByMxJDZrejBAChsUe69Q",
  "key8": "x84bFpguZ3qu3y3xz9P21G6DUSYxqAFGnHSbm5AfX6EFpbYSRBcGmzpJYH3FT3WsVunQ4d5QuDqRChsjozYPuLu",
  "key9": "QWnmeefA3GZQipu9An9GhDjFK8amj3VS3bmiLxd51jeNYmNgx8NneEph9ATxBvTVUxZq8hHqEFHUSXDx8DwJMqY",
  "key10": "475Bs635TviqQyeTX94PdnVdDbMaVPeEBJsrmm8Q7tbhsATkso1g3gS2Rw5bV7dSf9NhHEtUtXJHjNDWtQfshrG2",
  "key11": "5YD7pKchkFZMav5FyaescrJV2V5HxGgKMVttfsVaibkfi2Awxa3qgqFsvmJ9JiXgVocgooyJy45vfynXHFTB3azk",
  "key12": "4jiJ4x57DGqCvE7oGJrHXc5ZMNBR6C5qRrM7jGVLxoprGeHD4JYADad3ANhzqUw9wpAVBjNtqUqT86mVsqdHLmvY",
  "key13": "5oSdxkxy8HSzzPNFDeEyHQHunYeViBofQVMYszT6sSsbFi3hvkfizQef95VBtzXUp8FFzd2NBqcRxMi7rApxAsst",
  "key14": "4eQUGsGH6752vNahVPYFG8ajYzAhUXCyGtCuDPK4oWogM8Hkw6JPrMGEbKMj7yz9ZLvrMyFR6krsgoVGDcB8uXD2",
  "key15": "3F3YSJXX2sVZAravkMvQh6gqwaiP6ZDXNugDt8YHQWRHstd3q9grqJnEqfzU9mQdWHKZNKqYepyseyYNZ6uqRSad",
  "key16": "2MDupmmBf79pSZUm3ySWm8ognkciGXpeXvLWKd378LkxYZi4fRaNW6VJv61mYgCKQ6wJitot4fDJojT3fKq4r4Z6",
  "key17": "5A6xcgV5PhMvzgtNqMfkPAuriXmayKCcMMbvWyQQTEKcTfT36daKvpy7EpSELSo9z3ybVXuUuQYFuaQoFQBJVdsG",
  "key18": "hVZr5wYxeBg3789Yaa8UJtedrgAfq3ucKtDHpkagT3dUiQ11qGdaFGTVJg2vBFPPBvPTYVkCy56dDMEXJexWjzS",
  "key19": "mgNDLftCS5anbRR4b1mswF83NiGn4mv6zGU2sRsd4xqLyqUguXKyaurcYHJakuv65WpvFWqKP3veAh2HdhmpqJh",
  "key20": "iXvt7xN1R6XofsNsUSsJ6WDmzcVdKoqMScpHwqXvrunwPrXQD5nFZfdmi4aCcKQSnES72RZxpv61NmWxeU85FJQ",
  "key21": "48N9Xx971aW8A1ZdgnC27ToTEefAHYnFxhVaps3AStBoyboAGR6W13SA2Ux61h1HKXrMysGt3AZKKP1WP5RdsKfi",
  "key22": "X4spPJuDt9Chs35iTjimWuULVDqc2WHGb4Fp54dpvSGLnRfSWhZaBL6viJy7dcSaxyY6eh5qbggUDzWoZsQUvi1",
  "key23": "2Tx6MCXWjUVVbk14cc4z6BMPcbNmhxg7iuofhh23v8czvgizX8UPo4zwKLWxCUmFDqFw9rGMDVaHCBEuKrwgQGNa",
  "key24": "5ABjfnPsVqvJ1y5v94phKazdYSV9AXUnt1NnNLb1ib1dRXYBdxXVJAymY2MnisVHWFRSEkY5a3quLMTdcp2hX9aA",
  "key25": "58BQbbaKfgSG7cN878SL1x178UdAr3p4yXby9SHLWrBbrATdEipNvRcXZ2HmvRWEMiwr98BFP2ssN8xJyNetgSh9",
  "key26": "59ZV1jfg9Dq9aen6TJfmGLUYKvab7KJjfgqzWqA6uEn2t4cQk4XQ1FZXGG7xiECbbcUYVtsaxazEssxxDiYXeXrW",
  "key27": "2JdWTp7JHgwryLs9y7m25XqwmFVQiRuUbEZiJsTWofpu1Vg3jRZQ7UkB85uGZoxUni4bfAQ2ookYceF4wHxqq3rx",
  "key28": "9XNCs2B9uxQxABZFjFAeQJHSqg4K7xAgcKPh6qarYfzYtcyvePH52Xa5VeCBmybHYdkG6arQKWbpK9M3ahrNh6w",
  "key29": "3DcSCZizUEcwEpKPRyNaZPa9LNtqsBpqsY7YweZcp72Zb1eyqtUFn6yibXLRZnzHjAQRFdK147JdSEEzJSRyn3Y3",
  "key30": "5ZvZzWRXVCuwdDx2G76JStMgtVsSgDZqw2k7Q7NBU1XNLnuhuQPr4rxCdMiFg3B5Hej5jCnk8dLdjEFV2Lz5X8LT",
  "key31": "4PeoZouUubmkZ6xQmb9Hsxrj2SGjEuAZjQsAdzZJWrBNqFR54MXn6pZTeTvcS5rZPECLwW838ZLv1SyVKaef46mz",
  "key32": "bBKMRJ16WnXcEd6g724rA1g9ixjgVQgDAouNUEchjFWRZeABuNzQ8MLiDdRUEQaoMhEgXQ3U96eNRiMXpJQSFMA",
  "key33": "R82HH1zKWCLv7EYQmhmcaiytKGuPcf3rio4D8bLWiZvyAgqdLx1XHKRVzp7wpuhEDyUpobXHovFkErHkmS3Bx9v",
  "key34": "3qFrN9sq29WMBserHVu5T3ikrdp74xRzcBmJkiBYxT1S7UprwZbZRV1q9fbpcSmRCCojjrWwDYiwQpoKru1thnGM",
  "key35": "XTM2xpSD4SQuVBWWxDHPArc568wBeCa2pUcYLt5x73yHtd8hh8PvK6rS4LbcsyECHLfUGrfzXFZSyKeZV3JKho3",
  "key36": "5QnLmVgYbanCF7mddqbDBPUwmje37SEswEKDodiuEcqD6WYpwApi8HN4CDdGoHfimC42Z8unBNoLaMU8fVmZJcc1",
  "key37": "5ovTsMAigV3pZPdDhZbigBMikhBsXCGsjj6iB6YTNBV9P7QuujiwW6wjBskUn2MfuQFM8eGeyNBKBwfDYaRjBCkj",
  "key38": "zG176DximxkWrekPYv9HAMAieAMGEtHqdu1c4wJgN9o7GKtkbPYHqRK2wRjsu6JN7BfU7A5eLrkuEcP39qd8qaU",
  "key39": "43QyDxqX24R6QX8p8JHKt4nXjN1kwJuHdeSoD9BmJzeunYmJJAF4UHNJoGZEZ3hFUY95gCG1SrAeygfM4LDJFhGD",
  "key40": "5bvxW4DGGtJ4dPvavYZUbMUvurnDao7iv2MdY2TCDGPsbBLBhmmq33BcWDpu1zfVTRyYHBYmGMtijwpVEuHuhpdQ",
  "key41": "5HDqBx7VgYH3mAVUZcnCmzxeK1EoiHAC5TacQpMeGFENWSYhs589weM2Mz5K3S4QFPMUKrTnD8jLWjzuaRYNGrVq",
  "key42": "4mocUwbiCfZPhQ6DpUogZKeGBkQR3RS2h85hhD2zTm1fHnpAJEBg2XePk3QCajqgrDmEe7X3qdQq4Dm6ZFanJiZ3",
  "key43": "vzrr1oVfh94gzdHDr5XoQZDuALWa14CDcWHXxdwN5WUueCptqnu2rYwzSG58sTiygPkPYvmdboyJhc1uc2TgHVm",
  "key44": "3jPNC4YZtcPNauHXSEDo2uFCJVJg63xdN4crK9DVNRR28WBFtfhfthXyMnY45EuLrTJ8PJRtrPWrdbLLWNbWSXjH",
  "key45": "3wMu2kTf37sxnk63bFest1w1GQaiKXMMKkw3pEQuToVwHJFjDDiVEMZb5pk8gBPdYb8ArnUtLRYwBD42nZv8Quat"
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
