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
    "2kDps8mEm3jWk9edSgoxpgj2A5f12wRqsU8FxteGiHNSTGKSPJ4hAu4jeFCWjw8w6mey6igsJ3DgCmq2S8GQ6Qzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iMUtmPeMXNHFimVeZ44ePreKRN9ECeKvMg75GdVswJ12gaZGqBicQSo5BaZfQgCrjVZPfZ63ZhBpMFFvyEwzNPV",
  "key1": "29F6tfEi1JRfaFJvEYUbNJPrvKXJemu6PZ9gG13H4feZSxU7CfDjZA6czcnavKKCutSDioEQDd3xucZu1pgNjSN6",
  "key2": "3jnoh7u8c6BKTgffSiXmxctk5y4VKrMC8tPFddnie6S3LZqtSx1kdiaLQ5Lkhvx7FRQsiq7ZDoizToN8HxMfFWHg",
  "key3": "2ebpeCLH2cVWoGDobWmP1jf9GUbQD2V6En5wZQDSRSpkeLnKphnrUF6ZRdoCcshMtYTwqqC1KUxtWYvsA1cGwmE4",
  "key4": "3FKUiXFH61Xk75zsa4kVatW8qUtc68a3jZfvXqjAbqdnt2fBAim6oGGFRLK9o1XDVcHEqqh49ezpHk8qMv5mY5dw",
  "key5": "5iBPqndR9zDVeeiD2hpWF9nzKLgXBL5Bk64mh7g3qkQb5Tj5fcWDpmMkSdJJZSbg8RZBgtxfAdVL4FDSGeAHDEzF",
  "key6": "2ysmVouVitSPbKPYuAX1HnX2cq83qE6K9SdDvTaxp9oNnxp6XUa12oRgiTdqxvJsRg1U1zDVokP3aFuWgNkSpVZ",
  "key7": "2KSkq5imsnt6LPXW6VdN6WZNU5q3syuL2yCFSbXSHjJs2RHZDfqStjHiuqnB36eFWWDKQE6UJpC2GX7rcWQtp15G",
  "key8": "3sT3Ds4YxynEthpq6EoGwprBehDrq7WUL5mPXdJJjY8YmemfT9vwUNuDsKC8VTv9HKaJaVbcMqWZ9Y8bcbJPmAfG",
  "key9": "3YHeP3uX21Xv1wotuA7KpKB9HY1JZm4comoCEUpFUFXzKEpsmt8oEFJ6mUkiHaQySPzSJDcGRETzD2ovcCxK5iZw",
  "key10": "3RUg5igohrXTKhMUfoa7g48fidmFBUeq6qPcoXE1xpgmQoVK8nEDBCFiUuH9JTj61ACZbzhSea1xtkKEz4y4Ps8i",
  "key11": "3EzbiUKgdPZWt4R1qxAMMS6tV5RTwKej16nhNjMtQ14frmwLMonB2yqfUzMhuzqbtnu3AWMYTC7GCZDtgM9ttdXj",
  "key12": "4aeNFbDuyQxLkwzUvVHgUnxJAR7gjRYpbEjMuTqeaWJiki6dcr3avENHPERtjWYxoHa3h5gebK43zyafc5Nd92jm",
  "key13": "2D2FH1MdRdgDtek9AoX3W5bP18qCgWHkiTziHLStxEsMyaDCAU3opmzgqp1NvkkkRDDuCfiP6HRRoAWEhJk5o8LF",
  "key14": "2sctPiTidpt4gPGP73hXisxGfRNBqsRckyzPExrKwQa8YEwpnn5f4feTWc25WyzaeYcayQ7TYvus6vFYjm8xxPB9",
  "key15": "5ptHN3KH4qXGbEYqwZePvvBpwWy4fYS2838uygseXLVKSZ4nv9iNEjQkigxY2o2PtMLQPqhSuFY8B4U4CTYFvZkL",
  "key16": "45KRrhv85ZA4EasB8sXSypKwQuPXkiFMKsiMA1qkiDbtWrg7if9hufFADi1J14r62if5tF7hvKigQY7Fbjdpe36M",
  "key17": "3zJTSwxLfnpao8XBbe6wPz4yHbMpiAbBzMLHSCSD8QxHk1RMJ7aStjycUjWLutX9aunwseFBeX4LbyqbUmgQCF27",
  "key18": "4TaxLm1xCMoyDkHLhT485ddX6yfTX1LowgBPzq3BzznEXJGQb3qvsP65y9LfeSoXiZ8sxcmH5cPF2PJks6twyCEr",
  "key19": "7Y1mwjSdNbHWGSz3EG6sGL5s713dTd55ruLnk1eVF2USnZFwFuEx3XUfyyg5EEX2QnrB2swrTuq8ciRKU8D3vqc",
  "key20": "5BbF1q8BqtexJGfKVu1AR7sX3TYSvAjr26HNWCEH4XCJPKaMa49vLSxAiEQVKtEDM2cezcodpAFTPbh2x8NASFyC",
  "key21": "5Rv5tTcS7YGk268HCYfabbwzenpSuR2xmm8aPUzJddYNCWcc5HQP1sPPKmKg9ygmYJALrfXWcozwb6ontZ3nAhXq",
  "key22": "ZrHcYywg5VipQ4nt1GPGK293jrNwt32vdG3L3RHswQtPrRY8ZdrqaG6LZZCM6myJjmnqaSUHFtpmPDS9Kg85oUz",
  "key23": "3cTLB6QjN2A3g9B4JbzCU2DfaJQKS9s9UhmVvsDoHAS71C4RS1bEupKgLgyw76kQgzA1BuTfnTtBigvYM5CxWZJH",
  "key24": "62nQt1tdbsxrNatrDN39GczKbBEYf6vWafZpVvne5uv7oMYAFjCraVRi8gXhU2UsbTqaL1fR47evSMH4Vnm7ij45",
  "key25": "4C97M4qefCeGDXB3KZVZ7ac9fFujGKugQi1624M1DxRDzVHUagJbTL7eRTd4fUMkiWiTxT7WyEYrpNEHhqz4aeMM",
  "key26": "325XLru7D9MCzoFLfg9vQKZsMwF8CNWGHkDWARF3SUiV868TvEqZgBniiyqmHdiSXS1v3w3QDP8Ebinq9hukPN8u",
  "key27": "oWJqhe1DVsL7cz83oMuBKaGKJznVJmTLWqyCnrGgZtkoubsemgNW1JjVv1BUiJGVoGzSDT5P4SP1q1PkbL2oVAn",
  "key28": "2pqKjso7DG7wcouqdNh2TzSau4NiEWSyuXHrxjVhwQ6oRXqNHsbhLxzH3kFoA66DRDWeAWN8o7MDYpAACvqRehQc",
  "key29": "dhQiuWzEep7RCEt9aN5gMZgda24ZeaRY3XGKJHwrCugQtdz3Q9nhjqhnR9iZ2WWUY4Wv6dZaHoh9db1b65pGBBp",
  "key30": "5Y57qXiQBGgLxR9ss4eESMRHzQvivpHf7S4X9H537wghr1BkRxLvf9yRyYNTEMPecJoReGmxGU85b9dFVvnHnWxD",
  "key31": "5nKfAnKTaEudgHL6hE6AWXBX2e8t7tiC2WVxoSMuvyERitiiN7pYQy369DZaNjXckB78GgPhhQnCpo1AFXngGnYY",
  "key32": "3o1Jv9RZmR4dzAA8amy4eT86M5c3AiQmw3pUDqzDyuUMwpozM2AzCWJb2fjdw7KN8ANstSEhueYtB4djFSFUPpZr",
  "key33": "4ButKZA2nevG1tHTwvxe4gozUFk9mS6v8GsUBEczLN9jBHSA4m3Rz244dewLVrw9sRLMC5Sd57KX19HWFzaaCA1q",
  "key34": "QeQUtKyQby5pgyUQkfWSDZxRNv7XuE3BxKMDsyFvmajAsp9pUcZg2spE5T7TjF9BGcdT5z6hfe2GDLbEzZB1RHs",
  "key35": "5UikwUtQpzBStNmQamGjPBhY3FX6yd7Jkgwe5hYtqt36a8k55oFfayipbsNK596GT1ABd7WFpB7hyzoxeN29Vk6x",
  "key36": "5FxC6HzmfdbwnGU8ZhJyANe9zqfZQtnvUkkRTc653xvwQpQNqnoBkK6Gz8Gefz2itV4mavVWqMTMTPou9G1JJbgV",
  "key37": "51Jg2dpMGU64Qc6xJ6Y5M6AWWctDM112y9goFpDrY5pG7nLT6C8QvWNPQReuUXV625yjA1kUwqXN2fEC4KiG25km",
  "key38": "2YHfMkTSBEF9ncY3WGF2dg986rQ1mimzcPy55z43eLrkYZ5oxUe4zhmWPBUzScZHbuJEAQtD1djJm8KdB9q8ozax",
  "key39": "YpCvQRxdLtKLVjUsJpgfyU3mJKHhiM7Y6XWXECUfsepqyfVzK9sPrPqderFY48ANXUFDDynXE8k52UZ8BbTAbJu",
  "key40": "5MgeGGmWposUEma78ixfkBqStcfbAzGm8K3zrVvrVPoLbwCWXp4UZABquke572E165BwXmv3PEUCy4C5NGkeETuv",
  "key41": "64A36Kb9ERmWYmN7TUoqFd9uD3LA6649PVBUHzW7auHRmGqQ2S8wXd5dGd5EqwtqAjvT69DuChcgNrXc7eMemwth",
  "key42": "2jNUXvoQVbpJCKWKgH14rvuRhbShFBPY2S2ece8aSQ9iTZiPbVqjv2KBu1XjLmWQbGR65MndaAetsCMUhqTdqwXF",
  "key43": "5uJhXpG5V3fQTwKEfEPRzTCmNPYUqJ1YWCouKd2Q5vJCRJD3q69RZGTifCpaNTDMANPrqaYunpGerVJhH2CEBZe5",
  "key44": "3psc8NVASircni1Fpjj5aKfSKztdU9zGKszLfvUWCnV4aihu8f5Q6KbbNFAMsCSgFvo12bJJj6HMZBGqbFC9EUpZ",
  "key45": "5ZprBrizL1ECKnoKG92dGEjh7d7hbCJhFzb9zkMGvtPibEdWMra5UbA2n8ABL5q1UAdRk27eQwcBMLRQqJfa6rqc",
  "key46": "2UBvj42s1xd3MubfkNLmvUTJg8oX5gACJCGnnBntGtHZeXmQ8tVzQR1SUG1xjReUtpqvfLWMLUTGAiqSVGi9PMWU",
  "key47": "4EMDJ9AU4Dkhm9NyNf4kPhQUzR1m9KvSoos1EJ2b3gPvdjfZKyRuioZFfMpuPmtcS1mBEpGnMjkZtG5xpcWbWyoJ"
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
