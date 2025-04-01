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
    "5JvMwuY914bFH6cvgtwaYbQvARb9W9umqtg3xccBDdBmDkDXdrh74jx3UG3FrxExYCi14RYPGArdzcTDzCDqsyfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TcugcA3RBAwJRUqJ6r8CYtRgY83n1zeLy9SL16s8z2ryVo9efmLtsRfbNSw3GnwqUHY8A8fVGu1CW11LM1qgrS6",
  "key1": "3brJMvj7q2tZrMz5v9y1XmyJEtHmRM53CGV85Te4MvPFZVGDwbSAedCLX7dmtGi5GgEyZPHZEcf4vHQhLBfZosLQ",
  "key2": "XYgd2d5Szfr9Ksqw3qsBCKCPSBShQb6eDJ3cJkSj2kXtms5EkwdqMP9gwRcCMG2tWou4JUrf1TjQ9oEbb7EB8yz",
  "key3": "eZQ2i2Q6zVyRyFsW5kH3GauCAbQ3pTPxGfyrCnqjYFWykNp14ZCdbHvbyYYcagy1NYwZfrpt4PP97VMP65iieTq",
  "key4": "2h19HkAvTTRcQXoS8JPPPEUjfhXPUh1XZ2UrFcEZ8KRq1a9zvE4MLkGGJvW3jpHgW8mTPdZpxwCay9xxmG8EP2MR",
  "key5": "JWmS7HzZayTyrNjBwv6t43KypcPMpmmGLPC9EVGkY13DwxKF81UV26xZqTws35SGvwbW873hiKtKBeSpLZSLkrL",
  "key6": "umc3VZ1K9VsAp6SgkUKNtfJJECoVffz11kBb9vsE5DCnQws888EcED8uvb2eA4rjzbRkQswWk9vfzm1ECamd2fs",
  "key7": "4iu2mhKppmYhitcRLHErQw974RC6vHN32XXEatmBz5p4TPGxKgP16WymUASXk5UyHoVRaERpKbR6Yt3HpDJ1oaNq",
  "key8": "5Ha1mtVLrf3fpi7S5aZAhhPDMoZXTWtCvdfscG8UonoPidLXM8sZaBkRRDTL9MG9AZVSC6HVfWCSoBPQVczTwwZi",
  "key9": "3NxV75bMms568ZSKc2R994Yaah1AKzDp7BTAFPaQASBrUTa7RjDV5Mm5PEw5GciTyLffn6yxAcD34y8XL4WCQ8Zx",
  "key10": "SUqBNTsfU2jtHHg7aU7xbeZwLAH8StreS3vS7t17scqHfNM3xVMhFfoGiLUwb3a9NeytEygMdfrg3gjp2bzik72",
  "key11": "3xTGfuN6zbWQG5qvQc9ZPtCLW56aqB7xGp9w7VBvxmHzXmaQUTsQMUUUgsSDtLtouMvKnM1fd6Lr1RSKn1qsLvJZ",
  "key12": "4cquDmFUa5X9zBt6kk5wLSBSkHyYzTL7n1zkmPgV9TwUKKLHKFvprLhCYFn2wgbZD5nvqAKMmPn61AwDpxizjTdA",
  "key13": "idaH6v8NPJfoYfqWTnWTbTxhr4JHRQbehsEzQp5kF9JYjz3DjcyECfgMsqsdkKusiaHKekxrdH9AuoscWKWF8oN",
  "key14": "mGBarFP1unfKNp2JYgCLXCaUmrGKpDs7JxNgTpyFs1a7mdzy3jwGHJLHzd5CjQNfADwAzQb8Fh85McKeHAtrDEp",
  "key15": "4zHjv1RjSsrK98nu89fPQuMNQXcV1KNME971Mxx6ofGX9ifwp1SGZCoqDmgc7f2CP3cdHp9q9YuYfZNRuM29srw",
  "key16": "9x9MdSEdu3Hw5qZMkogiZdS3uG7MKHJmuY7ZL5yYGaku2aDsAHPnbXwzXV86LDjtaEW1R5yrethwQjudZJ2Zmut",
  "key17": "2pamrdSTLbtfpecVKYrhLKyPrPKp5mAUD5d1ox9SbcVkboysyP8TMtZniJzBeeCvc7WfqKdKJc32rpXT5HYVST3h",
  "key18": "39mkzk7JP8RN47waysHDCbKLFf3pcjhkCVv8heeLsDQcDE2wfvcuQix8QUFWYLMnTszV66ocoA2TSvA8fNAifxWg",
  "key19": "1LVPPhfNoAkd2vFa2M4pZe2xoVcLF4cFkPtdPw4fgh6Jyd1NeDVRgZ4kppSCQaYCBYx41CdGwqE5SqX25CDizYg",
  "key20": "uovkx1kiiietx3Q8fxotKLCjGL6GuPpSJF8De21xSuCNx4C5bFJ83rUpR3xzM2pN2hM6LpArrmFp9W3kfJLC1mf",
  "key21": "2FbvLwKDRLp7XuHbiBnN826EzejywGVJEWXF2wESoYdsi2mx741B3wxFJqT13mcMXegnjHSawpGAtSCyYfsHwMxW",
  "key22": "3F7ju4pwqBUuzHtzoeWesMiRCWBkUCmFYdpimRoHhkkRbHWMN527NVa52U8gtimJZcEY5S7bm1HN4Vfnh8pcfV8s",
  "key23": "9oNajDF2zdN3V8VThUzQTQYgJroADeo8HhZeY6rpV5LTtbsznd9UZ8f6jLzbzAad3hU8JnL2cKyx71Wms86uXex",
  "key24": "4PAbfS1z3L42wqu9jysgpzPTjuprw4cAXn2UW98qWMqyiwgaUhzyigG7Buj1pscWNGzBbQVJqzi5MHeyb3YPdFGM",
  "key25": "5yNC5suBwiSWZUZoWHKvi91am4cx48a17nzUteoJhCCH7nMgCiMcFmKiJvhpNjnZmUAwH3rSQbbSQRcBhu7gK8VT",
  "key26": "4HHsGLk9fTeoYFxhaqkYPRCkxT3mpfezbU8fnhZbjJvmX3jiHYAPEfDqFs5HmgBQTwRiSdRJAP7iii3dL5WbirKw",
  "key27": "4VC45FuAEjJaDYNYJbThZsNcRViPdVnBApkhgiMrLW6NW9HPJWZFK1pzhohs2g7yfjayyt4RZVxBSP47iRCVLjFV",
  "key28": "5mPLPra3D3kWMaBei9waVuHC2J4AScZmdzCvfy1hMUZhnTCgPioURATSA3hWLLYuChdqLadQNbbHFLzYVYGGTmqm",
  "key29": "3k1zuPk3f7ANMjNyf8rtvyHNAsYvWvowY1kQDVQA5KjLHE7Hyrdd4vRB9f6waGnmLrSDZhLoNEfdjysFCBTBp8qK",
  "key30": "3NM1E3p8C9sdQmca8dwP9dRTJdXCFU5jevuj5Jiz1ppPJA7hBdzHhGS69qYB7MxpmPoqy7QAMonxJCf4SeVyU4yP",
  "key31": "28s7q9ZHqRrCAa1UWp7HhwwmKY8S1WocZeTJDvQmxkUjtcSvGhFxS28gjmxAoa9rkdRA7yjgZvSstZvZgQKq1Bxs",
  "key32": "3pZR22qXU3EVK3qZ81QLKcsRe5NjJjVda2PuXoiXhU1SHgPaqC4eyGxrWad4HbHonWp5funqei2j1424q7w9AU4Z",
  "key33": "5wTfvMvDzUCfu63tePLMWeZ6fzNzW4HCocqMjmh8JGkekGcPUFxZMBqZa8cnVsr82SWAbtP6xgupKAui9HHEmcye",
  "key34": "3ipi2orrVf94aR26fonxaP3xVyMGNwg9WnVpVoX2QRUF72VaU1SDCYN124Kmqjsm34dFXQp3g8Wri1yvvB8Jj7mb",
  "key35": "2nJmkVVJjNkpHFHKJ2hgk5j3uJqQXHPMa59Fzztp57qRxCGrVqf6YE4Qwi9ZpuhdBDUsNVMDXM69xxfgECWNrsxR",
  "key36": "5oSAoNSozuPNVZWr1NrfGTB7XXFTbFjM295KvvTErr4UK3WLzjfCdxovkKQif7R72hvhCAe2UuRBGYea3NEzZK66",
  "key37": "2bA4PNNLnCWM7xJ8k4GRLBNfmPeysDZhDK6vb7YtaMV18KhTFRAXeCRKi5H1ceBJWLDiBsvXRm9KswBAsSM19yvU",
  "key38": "3UktcaG1QQkuWUk7jZizeFRoEZfSZomaSZCtt9zEm76eV82tDY9Fz1J3PhU7AZXUoQGauvaXj5UkaHXZdf1gnVDs",
  "key39": "2N4ehFBVeBooZhgcUURYU4M7PVyfcfpgHmYxutrGYuVTJpVP8y9GYjnVGk3LToUp9Jf8ogniJ7GBELN7DNQGzEsA",
  "key40": "FLFVtsmSjDEURhvbPAxSxh9c5oqK6CxnG4Zs8Tf9eVudYfdrtD9iRNn5SkXf3gp6RmLLdkwWBJwskvts68Y9bgM",
  "key41": "3G43ZNno46uVNksKPR1tS8EgVaLiLuEZn34VDMAaWo8xBfz3J2ZA8t9jGCC6M2nTCqVJjHEEaLUPLV31Ztao8hgp",
  "key42": "481bBBrwvAEYoNHJU6jyjGX8kb7vi4DB4HLDBJi52VedxYNUTz5B9bAgYJNR6ePvNDcX6qz61BVrSGpVtvQojnyp",
  "key43": "2Ns7DgHfEV52wDGu6ypK1YvuuSNr4JHDXgun21AwbU18u5YYL5XsHRHvubTyv9dfHAWwKMmSuCpEhkE8n7kz8Fg8",
  "key44": "483jURu6tea8kcBfrvApKS3ihDd9UHS9TuH8bSBFHXXepPjrhPJK65kDupCWYgqG3bqtuF23SbdaGFpiyy7WGU68",
  "key45": "ZrkbtVe7UcdMBFnPvFttcfz31Rn5vZAbtb7kszaeL6s5iP1x9rQ9ihLjP6cM6arB8zpcbWww8Ts3EEPGiqfpwJm",
  "key46": "2jVztezngwTVWmZpZPygi2WX76Fed8Jd7Gr4q96JxnfFFrjsnE7ip4vwnvpwvjpyyNRHeGFNLdqiW4pTYCHo73wb"
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
