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
    "67Bemj5E1JuVabncFfwLwvh99zkETH7uVsFbzeoRhEGQDbaDbQuW6U4SkVUdu9cxdKTiVrWtvBUA7V78VV3ArNGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mKkYGG2iee3DT3KGfM2a9dFdiD8sFL5QDNjfs4yq9niP9VdRHehBEdbWArw6PDGG5xxaJ7cvWt5TiFwbgY6CQeR",
  "key1": "5DVgXZ2Awy2PeiHuWHDPdrpnRdHvoQPvgEcBt991WBYB8X7CKJK5E3Kkx9ofSEy8TbwyoTfqpQe3CKJcpv1abRE5",
  "key2": "2y3GcJN4hR8iFBRxdv8KcYhRTrAVL9fLgkDjXgoc6ehR8oaR2sp4LxMUumm14mpNqnXc6sbBRe1xCety4R95AUTa",
  "key3": "39G6abaLNZSSg6Xzh9XEszHbqFoGW5ubxdCHJDg3ZaH3QjxskcKB1jRoqGApVEAXcDhiTfEB5Xxz2PMLn7BzyoD3",
  "key4": "3XUzNpKs54CSzsRsrSiPDKVgxbh5g5hmUKsyBMP3GUPsDTm5euwnqAdxaTQXARUW8KX1ndPtjdXBb3df6Uxg4XCs",
  "key5": "49DoBWtgydwHbkQvccWGKN3RDbPTBe5oq1tjMid6MapXdwG1UD9G4uYedr8snKytKJ7M2aGDgKabGxi9TEv5SMfg",
  "key6": "5oiL8EmFRc8Uw5PHa7WLj3h2ZAJDJZw6y3LeRx63VYD64rcc6fBnhwPiH83wLJEbsE7abTxDkoSZpfoUBsXD386N",
  "key7": "5Rh1aQbCsSz1eG7YGF8DskMpKLBHq8MrfuShcTNkW1RjYECYzBvH3CMiK7Gcgw9vernagFCgPHptYddptiRoWkW8",
  "key8": "MJh4DgpYCfQwuLJ9qSiip8fWRkNe99PUzHPyDAhFtDsUAbLWHCerMDbVqexguXDedcJeDt6XKJ4yuMqNVkYEFg5",
  "key9": "5b3tzfs9q34j1MX65ox1SvVtpLmnG4xXkgW4KTtMfAXsspj8arNyimdCFfR5gzekFAgQ1YDk9fvGD7tES4JAu3qG",
  "key10": "hEkhxyf31gQvPdTQaszmuibiscmhLhj6od2ZHeBxtoB4mwMPoPs6bAujR1FGkEw6xPNfuU1cADN6XQ3vg17LUmt",
  "key11": "3hCmfuEKPPvV2oP4cSZm9i6aGpcT79dPgQjBuc4LXjFYHaFUXLCbvLg2Bk1KgDZjnFKFgfjEJGUWWkZuSxyPQqSG",
  "key12": "4487HGeCtzXvAAUxMejjs6kzrchoWkC58C4QSQPgyWHErPkM21SE7M2VP6VJUKCvhv7iKyqTLUHggksJv7VHySE",
  "key13": "3XotdvAZwPgxa3z9EQmnhZ2d2tHQVo9BYHqEPGibRq9X1QczD6t3RVi2RoLZgcsDkerdTcDkVX68jcQfaAuwmb39",
  "key14": "3WGZzWxPQXEJ1aaBQeRqUhkQDYdrV9j5PKhtWHyfdZfnGNQo5MLuFo21DDMikkgSkhw8DcRjvwSdNHQMWC5pkfho",
  "key15": "4PVJMUR5KdjAKM7FhZZ3gsgdu3cdCt3azqbasza4kT4YJZczoaerazDbujN8VUYtp1DjtpGNnyncdEZYXHwRad29",
  "key16": "25qwpdgdjo6XtU6wUr6vT7CBFkVwsGnAHsVBq28oE5GKtdEDxz9dcAnjFLLE9DYdUNvT1XPRyaouwGVMbNEcFWbt",
  "key17": "4NbJgQZbKB4cfo83ZFJgAvRNDNeWB3CZ71W9m2hsgsdJMgBDs7sNwcP4Fhf46VuUNNjxcgJeHs7WkjrZiXCSTspd",
  "key18": "2GBNT32x9pMv7xykiTwENKMbSZ2aNFCBv3qeSRuE1SyvG53q9AgY6EWdYdQkDR2sUczEyGZhaedbmjn9YMoSiPmP",
  "key19": "2MHowwnhDLgP7hiktcv5Lvt5GbVyfT1HmhkRrG6986aPjqjwCxueWJUr2XAQyUR5DK1wtyH4pFy3kXCm2zdCANc7",
  "key20": "d4j8oU6rszJ2yhpRDD9435NqbjbHCoWcWC8NVnDj7pTmjArpAiTyAh71emb9sbtFm9ppsT2fWEKbDHXatAmxdHJ",
  "key21": "5BLovLGqhHYPAwh58CGGuRWRJhXmm8Tpsr8xHCNASL5XoyESMmoHUpM8co6qXdTyneQDkMUkVTd3LE9F9CewVooi",
  "key22": "5S55iP1G56hFM6VzLQzLTeCE1PS5tAZC32EkehqHriqxSZZpqVDsgkmwfPysZBisdMLUP7hdHHKEh5QV66qELsFi",
  "key23": "41fNDGZwJSE742Q7fMfwR2VtwD8fMFKkDSNS9s1rzwcfqBBgEcxPzkZhx4bzhbrwBwTDrkPRuwQFaKMEoAHmFwAk",
  "key24": "65jyaGPg2gaVLEMbdPJH8vvpYyyZskyN32RGRZfmpsELyt6NkF1ndd8aiq5w8Kv9uTEzwFJYP76TFoDMEQQjfPZd",
  "key25": "4uHUKmriG8tEGDB68ypNh8QJ7niawvXS7ugZMwVauRyTvAJpwzMBu2frVw6xP7NQsqzcxnBLFizHydVQKxu7gVrY",
  "key26": "2RncFLNPbMjZ5su9UXYeKcdiyc5ZUZTYWLLMDa81VtDPKSjyBTZ2u9tQrN1vzi9eYYRtgaX7QqYSJJ9Ru5zchRhK",
  "key27": "56Q7pj8XJ3MdtH4BH4HbHMQtBDynpRLGYNUxxf9nigPSpzyChrRDbQkKMdNgBfByuFUiPUHc1TMzzuXjqyoHGznB",
  "key28": "4bRBp9AARxttjxNhdmisxyTwrNnAqfmgannfAXs5x4ZNn19XGu4LLVDqEH84dp5UGuqCXXSEpxypSodkwvAwVMrQ",
  "key29": "5VdUj77Uv4m6DsMMkCLjjpCf5Rv7CRvccFQ2qeTyWN8Wsv4ttw8FGfmzSwuTGHcqkNacvguB8gqXVjyR99XQKYpK",
  "key30": "2PTJsxAotQAt6njh3T4D4kge1R9xLMNHmcL3bFJchEM7okPLLsQfsTSXFdNaNUFcDewKVMkRnpyATfECnVnkppUT",
  "key31": "38UmmSU7VjLe73mvnEvW2Tuub71wMb55cgsDZt1fBAc1BioKRq4L1aLzJXg7d1b4a1SySMfksPaE6pjezLKyFZs1",
  "key32": "jKycZzfYfBfoMKvyXYGKwqQDbXBwNKxDYkFKxqC8iDGSHTM28Bru8odn1SK6nwdFQJwf7eiRn1CUjESBpXv5Mhq",
  "key33": "5NrYAfsdt7JumvFFbL7cw1FgswLRrhuAkACS8HrN58pUD2TwVyFrThTw4H2Zndz7tEPfmFZx4BLceH3bhVYBa2Cu",
  "key34": "52saAK3WhGqkSN1MG6XuWGyYyfdPczLpLroJfJyPo2tLKoUWo7nqsWDiLgn9EVZ9H7YnBmM3xUT8cjLcj1YED71k",
  "key35": "4a6oXU3boCV3Ng4dBUwfiywVss78iwW5NzkzgEybkwbigLhpprQPFXtpUcdVzQUu1cphoHaEFrWpAsqUrg4FEKcG",
  "key36": "4FM8kK263uTzrj1db7yHtfpEqJagVtb1XWVcZexS75QghkaHwUuAQf4CnfDtjxppDapT2FJ6DVCD14HtppckZKLz",
  "key37": "64AuqBPF6s3CgGeSwNzKJZvnJMu36oBGVTSoZN6fjF7ypxv1qRCQiptcsiSrgsUFu82oDmBwKgujSqs7keZ6muQv",
  "key38": "GkoVLFRdoxEALvimPQfCv5hAk3N8HG7L5kxVHFoYBAKDZAqKniKKGe4DoC9VGnWFUw1kNkoUqUGCz9NZuByhnxh",
  "key39": "62WPbV84MLdMh495vCX3QMFntssjuLk9UBrZoaSkZBggWZA18cyHJEouoLcH2ytfAeYs7TsdXgpKABwxNM3BiWQP",
  "key40": "5Vy2RYooFrqfsjfqsheeicjcNtM1B3MGK9zVLYeDBxFuPaM9WzpA5cmD9SYjYHVgEpQq83KexzNkNyNK7BBmMS2U",
  "key41": "3P7NiQ51pXb2bLVKGyn7hfABeuzSMQiTyhdc5nvysPw228c38HZKwv6mjWveq1CHMg5eUYSTePDCmCpnuMTgGhbe",
  "key42": "3Z7dq1f6gcgS7QkG8yeBa1inyjkNKHd2Fjd6rS8UQtpKoxJZPgJEYFp33ep7ZpNg2kSPKk4iprZStkJGqsyWK2hS"
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
