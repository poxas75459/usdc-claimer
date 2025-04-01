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
    "PqPWAhPms8UBpHPxLGsbsg9UTp4itbFAhmfm4mHVU56pu5JtAgaP23RH8JACiD8UxmJ4ShR9A8Lb9Qb7C4XPXTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s3XrhpRjzXMu4adWRyEQ53yibraes67apQuWDBD7PNz9ZSWAA3LHxy16UDzUtV3BbQLRCS6j6cQdiWxoPrm6trJ",
  "key1": "4q6k28reiqxpt8GrCnSCnMyjNDu1tmWWAHkTP3YRtRwYC6hDYbLt8EiBfsuE84WKgjSXgF2kQddtGNUGpGQwswUS",
  "key2": "4jCcX5Zraj5hVtLbZoE9dNvmJ3cdZ6GVV4VKxyr9CjmM7YHwuuDW4TKK42ew1xeLtyQQShtrrtRJEqHEkP8L2hSZ",
  "key3": "5yBu5QzT4c7y1Z89k7bUasdDs6oXEAwsZuWxfCSagGDxYDSd49hZG6BkjZW5zFvZ8yspJUeW4qBU817WYoeUKy4C",
  "key4": "3AdYph48cmPTaT5GdquZQnve1DtUKjyqYLk33jYLMM2XQN57j14KWXtidP1LV5vMj2ngyid1LiwUDvftsggpgNn2",
  "key5": "5rFevKAj2UiYoThbPWPL8NzPVg44svAQaLCjecBnr6W5cUWKbokrE8iMBXsvo4jpy3utc5M3ydYrQZ3axDKM3nNd",
  "key6": "tkASeGXwvRXZnLKk2eiTSkRLHi62e95JeAenofqvnk8qSHjhcvbt3XFHnvWknWwehgmQRQDaGW3fjBjUPBDikDb",
  "key7": "4TSJDERdnJLNmJ73T3iPuyTCVCLUqkovsou8QW1FyVPNsjzYHrVGoLQYexhwYKVLsTuN8YTDmyxbrHLLnjbjdEC5",
  "key8": "2UQYc3DvVxjZaVSQ11J768WubQ4Y3iMWBvhfRahvFZVqCtccYgo2w4YuerA2xpj4wNPkhEuyVu6wv4yyhmVHg1Dq",
  "key9": "4y2ZrMhcSQJK47tZT1Y3HwNXTJNzALQ7KpeNJrjBT4eQwe6zkLP3vKzseqnNDyH5RJAq8RgVbNvTN2DaZww9Uq3u",
  "key10": "43p62u66rrWdBGWn8Fx7abPGQwS21QcmtmxyAyhNpJu3DQLezz5t337ydwqbTBbba9sUeaQdHxKynuRAz61NaDKd",
  "key11": "s8SJZEWZWc3gsPXB9tFn4XhDQ6mSSJ4nD5u2ma5ezpmvhPE7hfExFuL8QK9WQPwSJQx5L7ZLG87sDHX89NHa9EG",
  "key12": "23FCHi6o3CRbZkFsTdQ4i1Yua1XpjMeA3cfXwASYatsqnQWfw1PB468QaaqF5mpAfQbn878F7v1v9rKGSgHvTgEa",
  "key13": "2EvH3vVnQhbDmkdMvd81a45VDmpdop9RgMCNdtH7RtSptczze4KZoGwa3Auqhne9XxgaKNEv38ZsnHUYZekdDrhc",
  "key14": "Ka6Yk6wQUKhtd3ysrKKnsUaGigoneAdJNPDNYpLG7M1yVGf2GTwVj2jxEwJYXNfUD979R13sTNj71B3ot7uENPD",
  "key15": "4JUs1ahQeiXDK7M2RQPUQrCLNxzeo25YWG1cWx65Gf2gpfTgi6BvntMRbBhe8EtQmx6Pui2F3kqoKd4ztoxQe1W5",
  "key16": "5HxhP9nC3665B59SVMByHoGP3H65sUmFEjBbyc6yXgj9ieM8hFJgAYrSsuYtdnyY8F6k74WxFjfqM1FvhTaBAgHn",
  "key17": "5K5wfeWHJebGZHKwhZfGtNGFnNh5vgaEi1NmPqhhVXWcKruynoKfQuQ1YV16gjkP9A5XmGfXRro1c6h6BsQE7Efp",
  "key18": "63DcvtQrkTpvUW94fN9hkEsiQ2ZWgd6bMzSsyFd6FS39gJiHRmzBFEJRjhccYwfGEi8uPho3V2h4ErY8QM27LQ7X",
  "key19": "3SGmyWNrmiwr2MkeRJxNed2zta162WT2WPkm8zTgeBJcMwPkp1Cbii87ubRqaVSiH8wQdFCE8aCeXJeWFbNGvxiQ",
  "key20": "4N77mqdV4aW9koKEjApNgtiwekPHxQCxWBS51gCXxutyJUjeTK2wFW7Hr1GXgvygqFA7ERfpC4BVfViKtZZmT1LN",
  "key21": "2et527NtKVSqPLmuNtTRadG1rusDuCNdendrK4j93GASRSpLXA2Bn1LNtyoEUskG1NpFnKr4NULZGjjAQcVhRoCd",
  "key22": "4BSaHzEfqjUioJb8Qp9v5GY5e1vCxUFts12fmXvDzUmS8eA49fwgJBe1jAHgDdu26CfsqzbqwKJ6zmRAXej8rrtY",
  "key23": "2sUd69DoQYNGSL2Nh34HqYnMb6AZmzXYkDXXmHDPyFyUBiimkJSPrso9FpvVLHWjWu34Z86kcddJMZsask8NYXWX",
  "key24": "2WuEviY3JtKcDAWFqUNHRGso8McjcGXto2ykfwNS9ucvuhvhq4XL5FkQFXa3dM655bJ99XJGzwFa4uje1DuMTkvS",
  "key25": "V8NxPECU3qSUCQYKU6PR1jBdGGTJ7oq7E7YsxW9BiaJAYTMtcSfXUX9HoesXtbRLgZo6zFNftsx3yXty7FrQrTe",
  "key26": "2HR5b3XtwQu2HjikhNRY5LTF73dFZ4i1523qRg87ZzWGpCuEhrFJe2mi4oHbAcGEvekHVTCtzTex3x1NAvkNFkCS",
  "key27": "Hme86F58QDkSd4L58WHC4bjeQJ1ToSVRbC2KpzmEovHChrocnM1FoCRsLag4kfcSABS1DckUmCrGuuSc6MaSfhK",
  "key28": "33VucpyFunRD2YHZwGFNc4vHDEzEmB5wG4jSAx5533CQAyW8DmTht4qHc7Maq1fUpuvRcZNDtoDLDGgwXXSek5Ey",
  "key29": "YM47Qa4qHgDhrFVimijCSWB34vWf5RTUTW99FgB3eyQRYPdx2m8FyRiHbjhWU2oHSAikEahHn4Ktqpnxqik9o15",
  "key30": "27zu89qdB8yGJvrjUDXjacHnTMXYyWxDBDGkxtPVmaafurYY8m3rFCFHNtwAkRWh6CrMpfheagzVPfhaY8UyHvk2",
  "key31": "8yz53chdubzfi69GKWjfxcvu14Rj9LrqNXuCpg3HpTTsqRfh3eMdTgDVJ8Up9cg7KeZzmacRLnDDTTUHMiSpG4N",
  "key32": "3Fn5cGMGBKBc9B5yeQ2F9r6SDMNiud9DZ8D97GfgrQPFNCshJaStvRYTK1CXtSX9Ebh7MPeWrSpz547anJQdRw4",
  "key33": "3HgJrugobx8mC3yrxLfyWxHK5zJ1VV3hA6dPDxHzNDVPjoHdGvt5T2et4suifuVvPeH9Uh24n44gNvgDDiYH4kmw",
  "key34": "2ABe7bcC3ZUm4w59TVxiQSniDZ5Wgo3rcCqXQMPL1fgKKwrXRDKdJu2gWxhY6MQy6H68ty3tw2NRMPCEgMiNfz6m",
  "key35": "2MC7TgYsj59KKasXxLkyqf9c1M9fdZEmVA31MaB9vksMtXEXc9boH6fSYtdsjGrfTSTcVRye8bkVZpEEv1wCdEZh",
  "key36": "2mc7oD21DScwjGLPAAVh2cQCvELSJ7ZbKnQZpREEK4R3KKSc2YCtuJcjzjLWGCvwbY4bziNhd6LhLndyDoQyJREW",
  "key37": "2YwFnd2YnH51arDUf3FdEc9zteXZKrp1Qki5wdWNdcKeMgeT9w1LdFZq4obodpjivUhKX2qsmRmC7VsVfwd6DwWQ",
  "key38": "5PdPQiJJCzoyR1jGat4AN7kvTfR6gNCxkr9iz3cxS91L4xrKNyEnamm2iRUb4PBqqn2peYhGK7aREukwi5gikDd2",
  "key39": "4uetZM3F2TfCVWMqtAaDp3u8sy7o2onzoDKJZ8uETnYpubu1YQ78wXFEwB8po1CMRMBnMezsosoTzNpjYZnHiwTT",
  "key40": "7A6BNdWyhjR3rVCTJm8jFfZUw8Jd54YchbCYPyg3orNcGaoAaCJobgwVmcG3TuJhWdNNbf4geY6hWEynomAvtfk",
  "key41": "5PsDbshJwNF6xF9Qc5UYwLqhLEngTMHsy8o1HnW96pRftstewJbigBmNHVTkFiXtYdQzR3UrQFZuriEhQhn2G8gk",
  "key42": "29niJz2m26PGRnndG5WaVe4odKzqev6oxxCyeqWh29fGyt3eeE2FUCeVDkDL8DUQ9hw3PRKvBaUBFnrgMp1EHXpD",
  "key43": "4jRhovG5BtWMCNnxXRpHfApjY8LuZeZZmtBZZXwgHMExoRN2vbwbUNv7iB8fTRzZP7ZLXoim7trwtkRGPfYCqFjH",
  "key44": "5moRGsHSfo412x1LTyUgbmyWVKWZYBTVnFxQCobGVwWm76VJBQduwKPP1FSsskEEgeJ1udZ1LDf95Bd67s29Jg14",
  "key45": "4RpgP4EDzUgngY9NiXbe4DMcGL5dgvAG82zbPutUQ8YSmxS6nqZBZah2FFxJEWBRw6NRk6u3DpHmDdkvCMJJ323J",
  "key46": "2PhrLvnncF4AQ9QTbqfoWLTffUHmRJ6w36uJhVQyftoQ9QWbcJ9VaS6WtYYEx7TYFFFns1A4nntCYgrEX9jspUdr",
  "key47": "5JhQffkZrygr54ResR1zZegjVZrW2aZdArd9gu2QRZJxZCgky8Ts7RrfGM415utGGQXK4scVM5n5AL6p2CtYV1hM"
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
