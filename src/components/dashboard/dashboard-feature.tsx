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
    "2o21oszM9G7EHTruBVk2t4JN4MKMKJmpKZCyu7DDu3Le7PL6YYrjiVPcfg1wq9nNWjtgkFfviqc4uiGKceYHK5wX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4osxhqMU5btHye95WYHzJyYYDfrRx8j2SSs2d61SgcoX3k2yYatNZwr3KbzvEkZChcBDuPxLLPQuNtQ6TN9t2hQc",
  "key1": "3VPaSrK2sSegdLesfXnMeRwD6gB6RoYsBDZ5EdFZs8LRJxpsraK5uF45LvSrN49wykD2wKnEfe26tfS3Lr3HTE2Q",
  "key2": "xxwU1h2i2ieuWMXbX6MgfVwb934fhE2yW6mzDyRJqQY8uRUGTcNEKVhd2e9BmFBCvHuZu1PNy96dAeLMLTUYs3n",
  "key3": "2fLRvFu4ts6ybC8akXiA9ku7R5hmDdxie9Bewd54Wckaz1cyz8sjMsnK6J7Mem1RnVPxBG4QB3DH9tkaWjRMyaoA",
  "key4": "3zgBhfKDX8MV9wNxgPmmipG8mQscfbJLbxd9qcPVat9S3fJkdiVb265XD9RvVx84Tde3ra7zdowS4UR4g5RKoYQ7",
  "key5": "5b8atxjattp4pgiHTnrmg8kgvnsKRdXav3jEKh93ByKLn4vaZgsptb7eWfaQ9t8t46qdQTvDn1DJiFodTftjf5f3",
  "key6": "VG6BkLU9JARbCUxoPyggT2dLqtLxR5XMGJXqS2jBe6eRqKmoQ3Ds8dHMiDxr2ugwTaB3nG2x4x1tuH4XWZZ99yV",
  "key7": "4EYhUfWyiDbyfpiPMTAsiMnFJMoyR8d4Qp7krEVF49u7CDiKPbkWMdD6HuFGkH1THzLDCYoqsyPcp6oK3QNhRqsd",
  "key8": "5pP8aTD8ARcNzif7UASHaLbRTSSwzWfCRTMcQ7NXY6gmkqgNbTrCxV8tSmhHsvu7bByH3iBF1GoCmGV585CbkCkY",
  "key9": "2d2qeDZyTfDJ3m5MXt2y5QnhW6u452kn7J6ft1ewxAVuek5RzAThiifPW1LFGzk6uptV6Yrk2nvEAHh3ZzgQFSPp",
  "key10": "25r2Hup44yCk948VWvqQF2EjHuiJn6QpEVAQxFUnPpkeryEioaFc9e5iGRhq9ekSLA6Yp59LyYduUVUgDRh8H6sd",
  "key11": "61cqJCPhYawKYBURgJopcKUiaA5dopfscLqxEuN9ENs29SZrxn6E3VJDYjPNEiGsVTHx18unhkJVGE2abCjZX9Bs",
  "key12": "3Au1sV9fbet6eCgN5q1ZQFLWJQo8HzocDRnCAq3iEMByzN9NQWcL2B642uLx8kobTspcf1atqVcxeERnHWmzTUa5",
  "key13": "5i7J8XZbDpZzaTeGH2TVHpeka7f7GVt8q2MSL2Sg62xo8nyT4RTRkEWJSva2Fqagi4apeUXPGJNX9XpTR1p5ZF4Z",
  "key14": "26w5hyqqFxq7n5CrtgqNDt2HVQygMYsGocjqYhN1CBJ2obdjstzucK6bTEsJ2wTMAjnHcwRNPWqeXK6idSvmG9tD",
  "key15": "2ZT4SfkYUQUjVVjsHVvrbQZ6Y1wE6JBBEd2eL1JZWQeva6MejejabJXmMbFMHWujhSs4eTGzZ49B1EDfHKu1ReG4",
  "key16": "4eyeSU7XJQrqYSq2WSHbmGzQQUhBGtqtYCj5NycuqDczL86fZUauhVPQNPRnYWJJxMhzo3baP1gPBKK8qSRGkfpG",
  "key17": "w8ekP7brKhHpmPxbZu9nEowoALG3hLqt7qLNcG465xEVnqV6B7CyF6C2BSgSDLESatiWWs2hoSX3ECk6gzc4YQe",
  "key18": "48sbEgnKQ7V6rNFRoTzYQFxsRQtM5M1hdadHoX9F1JXWdPrFCa4iqv6yNYhYAUvcCfNGparLdAXtroWmojW2rocX",
  "key19": "5skmZiciu6Yv54phsP1eVFyY6sBmMYrs23GucBiE9o4zJecywASHan7VbTNanURibxCRAgEB3czRX56YSXrh9hEa",
  "key20": "3iWRpvNf2EVuER9PqhLU8qewDupaCMyGFzN592bAS786jQpCDGxyZZCRBzyxsbV4Hykqg5trK3APU52hif6jDNPh",
  "key21": "2DMv6XgAyNPELEWUqjHcZRpirDDsd6JL4tESNixyn93n1ceyQbpjkSAtuNfmdV41bygy3ypTqrkETJaMnjbv63Kw",
  "key22": "2UQ1WMWYDaKsuPaqLnQahzwugxWEDSLmwSDktjFUfVQxguzC2TgJKhPudTbEj1iXMrPTGz4Wp7kgKhhJyPMyMEYe",
  "key23": "cYNNGZ1pVMNm1PUczpXFM65jJVnRYLJQNTFnQnp381MX8AY66hNKypWA7VgvVFgxKYahMU2Dgben3MMnPnmMm5M",
  "key24": "4KoVCvJDywPyeTquKvFk3L9pUzPgA1wC2AVNsNXfAUwk9oW5T1agjkbTnA278aDBYD7aiUqmTiQ2SNzTEfeswWoJ",
  "key25": "55uKxahN8Zw334BRH4xjWGzBCrCcYzYxCrN8kWaQQh9NtSJ9kES9UneTq789AxuimV985D1BjsrwwS6TZJMi4MED",
  "key26": "44BD7yJrMYKWfaVVofWhkfi1CAtcd6tztbZxKJHJ7Xm1Gf7a6hRqTpwvDLT31QszXeYvFd4qVmDoE2cCFhTPxTQ5",
  "key27": "PVw77Exp8WsfoYem5RonsmhsCybLDXUk5yyQnNKtNFR9nmjngAHVy1fNevVYJdv27mz9i8bkfiFYjTenaLzFNux",
  "key28": "UUBfWuv59byWXmf2crCoaa2E89ovsDFZ7rWcp5TQjCBiiArwVHWZSxYZgab9FUJYAwC8LnfLbv1oehwK2yYiiUs",
  "key29": "2oyNinnpGS1nNiHC8zUUK2yHXZKDn2rehJ4FpJmi8WrthiXAVJwfRLUgXqRywA7fh7YdxKMyrfEtKqwwFtQiCBWX",
  "key30": "2TfrF6aHyqB6tY6WytVW4FR12gFP7r1jrpt4FQ6RxReFnkVA448tD9h9ZTxknhk5SmXU1EfSWwb7VaxgJu74ZN2v",
  "key31": "zF8fEUzQx2utj3WaTUmBFbViocist49eRacgSNS5oLyTZzJFpBuJNS9JgbyuoVr8dNL8J9NpE1TYpTajuyttB4X",
  "key32": "5dkA7KLJ2shjW9FV9MrdGA2i1nPfaZmY8JDqhVHoVhjvUaRMFBp2wdNbZpAVDKNhGsHkNCGBrsFTMd2qmcH5m627",
  "key33": "4gpZnWaEVH5UUPPmuLd2uxwMcYnBm6bzYWoGrBhbbLSz9Surnp9WRYerQ95A2c36pseBAtuFHnG5XTbkud7BWE19",
  "key34": "5DoHZLyAnrsnPU7euZ4sgSVmsBt7HjMUUggjKCQETamrGujqYgHCx5qcxeLcrAUvramZAUXyLxhcf6VCst1m5yeN",
  "key35": "tZjB5vRbS8aMCPXH4cTpGxYkkKzRJ3eLxjW5fPp8SgmADNjtGGtBi98sFfcAiye3jSV26AscwURNfYbWRqVtz3z",
  "key36": "E9a2TeRdEei3B96G6TubqpgtZBTkZtETDvRf18QN8ri26QSBen5tQFUsZTCJ2jYu2onW9q1Kv56xdcjsErSpFhv",
  "key37": "CyRqpe9ikZeG7YW5N1GF81NZBFGioaU5dCxskAGn2MZdx5ShUDMk6csZDi9UY8hh6pYTKtTc4K3kpeeQ9umTGqH",
  "key38": "xfkPYmRFz3KPcntieELHP5jRdCwwCaVUYJRpFVKDP2JG4e6Au6UrzhFaVfiNKEXcfr9jgJLLBhdXKx9ztyJeGfy",
  "key39": "3p3ScbpKAUKRPTgP3dQ7mh9RfYRK8Yw1DCXcrSSSDGHgQt8XPd3AkXvPyjZ2X7L3S1xGsckGAFnYe1nFK9kJjx9k",
  "key40": "4qMsJVQumnvC1czPm9suQ2MdLNRrQpXNJABMwnVZXMxWQSrKtT9YpXkKqdexFtRjkDVD47Z6VSjNindkU9fdy1mo",
  "key41": "47HR78mW9sh6TiTWPkpB4mb5i2ecVedDjnLR6VVJF1jvZUVZvuAGdQBwiqPaCXMvKqhs3WXHF9DbXgPRodsjKpvD",
  "key42": "37XTCiJWmY6hC79VzsbUnGFWA63pHHeHjCxDu6jnFjokeeaSLZZNwdg7RmACJizzk1PHtk2pfpENsFQ8883SfSUL",
  "key43": "vUFqRrPesNUsXZcmp2syWvAp6pmu2taRw72zrZDkVifgZgJB6xMZf95cqhxKe7ZEoDiaYsofbhACfS3osfHe1YC",
  "key44": "5fa1gTC4hTASybKUWmEe7KtkmHqkqysS9xDgZywvXkzEqfNg4r1WykpL78UJ5pAYzv4bLeGX4rWiHqRpXHyQkwJS",
  "key45": "3UvhhrvtV9n2e3toqiPhKtcooPrLEej1YGR43JrontnwHaNiQYx9DGMRfAtj8bLapnUbKhc31bGCzvzNfMwLBzT8",
  "key46": "47fkhThmoHCsffAxJj1SXirkwSzqnd8TTQHjZjzmhnjFx7Mcju92hTmoTYTahnn7cq74s34xd3d75Gh4aoEvWEhq",
  "key47": "5qTGqtmEu23uzzAqHh6QX8rkUQR6KzKZ6EnMFsQkmuhjoTQ4PQW7R7Abwq7d7xvozHf4UgftyPLHbg7QLDFzHTyX"
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
