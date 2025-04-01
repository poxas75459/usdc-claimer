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
    "64Rv823sJyzkZh5Hx1v3qmcxxA53bsF9C2ea72AkQbp56XDbpTfMSDnW2RKYCjK1gK1VvwDFpYd7Y6U4cMW3rDd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wLATPjstR6QkUyKPKyEay189JVPnTmaauBWcwd2b5pyodTkhioakMjkttMbaiaAqwCJoiHZQ1vL8G7s7Rfka3s6",
  "key1": "5uRLxCuQHaGvaakmJuD88194SGLvdULVJWQUth9WFignnEh6V3RxaPX1L7VcsfTaEJGHN2gH5bVjPtcc5roopE4B",
  "key2": "47GvkHjQ8PgSEpoyhtXgUNxT9Gme6FVjL6ovSb3guG2W2UngrEAtpAitsU2KceVV2AY8XDzcHpXnH4mpUFDkitSh",
  "key3": "P9bf1kFyHAvEh5ayBcYzgd8WespMVj51PmQr1p5yJF9BPykNe15fKdFLqxcVbsSV8A4h7DfQpqPEoNPc6yPPcSs",
  "key4": "bNzK1FCVj5BgtcCcrN9fxe6q5i42Wmr1X2pbURoYnZwsT72KUMnQEHoCA5QJW3Jt8B2WndeY4Y8f8MMvfTB9Vez",
  "key5": "2gWGAnDgwCgeu3PNHcA8XKe5HXTUN6h94PtQZJADGNnR7BWGuGGjoHxp39z1bGp6WTu41soCZGhUrf826333qrmB",
  "key6": "YBxfTVd8btW1UiqvGDRar6FX92BFrCuABPCSZnrijKweVxjdeV3hQGJ7boSULA8KcBVFqUPCfK6KJKadQzz7UDE",
  "key7": "2MzBdgQLvPphu8DbXNs9QxsgRd9iKsRoWfV1s3QFK8Ki7usfPPxbC3QGMmwiQ834Enim6wENxLC3pBxHkyY5aBtL",
  "key8": "4YRRU9tnqWEDSiXYG3aqbCcYrHYEbn3qsQcfRo3Vf5Z9tqUtAWqCq2D1jDiX7GVhja7D25NxYFgPtfGLoeojSC3v",
  "key9": "2RUgspQai6H7fNapZYTaqLjCx8NtmJsHP4Hyh2LfvmK5f6FdeVQP3mjYPA2ewSvhHmEs5HswWzsryTmJfZft2yiW",
  "key10": "3tqUFnL2CPTsfNrCHg3fS75UZv9ShWNaMHTB289jfvyh3hCkASSRw7LkJ6yuXwyadRKGNtEcssw53E6jtwWiHitM",
  "key11": "5tSG5gsEFDn6kpkKHU7N191QivpfFNcxyeMmw6aJgiDvGxDXFX5BAAAZdfB6qGDSsCc6hYDyaJ7F6qJnHmfRmsap",
  "key12": "gfKB7fUpamiKypAYK9Y54JabGfCVSqeV5t1HrqveTaSwfi55s9PVtyS58cNzYZFVAYmHXnWnbfJg8DwDuy65L6G",
  "key13": "5Fykxto72YL8yjazz44zieTwnuANdXi7JLZvk7zehS5unQSvkw7WtnstQ1kz2fizj6gqni6wXR2AgzLB8QhpyovC",
  "key14": "2vj3KGYxQ7sdyt9iTBuFBdyfqmFarHT5W9h5SPPE5iz1MiFovrwFYQKG2kyyxBhcYRUQaDzfDNpGZ9twZJ48dH7R",
  "key15": "2kCqNaf57CmGNFbJAB3QVobve95b5gDvCChQNz2fi5u9VZ9uGdy5pfmxeA4RzDjiJJyaa86yd2Degfc49t8PsPGP",
  "key16": "Hcf1tqBUxmp8NKLuRK2Da6mH26W7hBaGcdZCtPgEBsGwQx5TcLJ9tDaufxTAjzUsnctr5DZy32owi72jwbBngFi",
  "key17": "2EDUtRzbBSeANnfN24mSMLCcdfahyT8rzBqsobbDdZw9xo2jRGNAQUz3vB1MxJwcRHVXcQqKgU3R5mFn6gnWZQGp",
  "key18": "MvbQVYiNV2b56G2Sf6wGiU1Ps91c5LzwPWi7CBVgZ5nunZRsoGTrmQ8WVKcSYR2BatfxkjkwBsu35tMfbrYY9Mv",
  "key19": "FqeJw8hydsFyVtExjDKwS7zbT39pfLSnNYaakPMrKxSGLXj8vdTbGagSqj2YTNVBFZ2UR3qYvgK9HeqZeatdP9o",
  "key20": "5ePFtWRKyoCsQMu8aagqiuwrUzEyYEzbJe7zGHh4Lsj6UXYD4amyLKwsDmJbcSFoEZaV1StVdCQqpujshPVsXQeC",
  "key21": "2DQaa6tJ4G76AFKbdRJMc2in5zy4ievBJcwG9ofPuKpoodYAgg3WQirMzZiZuzKpyL4HWraX45mxyyXMv2ikFAjZ",
  "key22": "3k54tEYpUPvz6caTPiNQRZanh6gSSLLpz89E7cLFAcCPyCPwTecqKzjK18YsvPj2NbD4rmpuJUuewDqrUaGDyfLx",
  "key23": "35geswRmDjx9oAgSL4rXskPoQ6ERxYzijmamGhVkRNWyMSuuVkdThexgFCBoxVrvXHawpBYaNUWSHUWyDz3DtaRr",
  "key24": "4NYsc5f2iJcvoxyaCx8LRHA7p7s11N8C5Ksnd33HTSYSNin76RnNiukJ9ULZCnfBPLdtWpdchjU9Sg1hM1mJJraj",
  "key25": "AyeUGviA7SzsW1XJpQpNq8TzM9VHFk7X8wKmog29FpeRSVwWHMJ2isxJStwshYNSqoq1RfVqgs2H3H5QTMvdWz1",
  "key26": "VjDUpGT2E5yjgdVBs2HmmBhftr5TZ7ehMdu1fuXwCeEi2KeGApqM393NAF3gvvHACVSqCd1qT2szx8SRojcq8te",
  "key27": "5Scr7qNSHcEDFSDh7Yox2iU6Jq9QRaR6sRVFrV6DQCyDN5oRLbEkYeG4BSYoApt6z6Lk1M2EXGL4jxY9gsFoT4Xr",
  "key28": "XEMRZevtuPChaKmuv2ekVAW1mdehkgSYpGvB2nvvamg12CHhRPgD2JJ2BbUpAqmgFmGLak1DksutpZkS9f81qM1",
  "key29": "28bBFEeoghdGzzkbzsrPfer7QwqxqKCsyQkJcTtGgV2fsGKTwYSronHpXc7gJiG5CF9ZZ5fMLvUe5C6xJJzuxrRP",
  "key30": "5kQWbYBrKqxG98tgYgeQVrFCcUe8JNCsb4kPr9QxWBdU5o7NhkiPkebfrsn6XisPcyKnxx6NBRPXumvS6BxheYGJ",
  "key31": "WSjpBHVS93mpMkFe29u89WH6kzfs3u61bQKVhGXGzGuq2yJMZpsHgZAL3yYpHSmw77PSmKKedWVnvKQ5oQn4vL4",
  "key32": "4WuYvBT7w5VgvXegPJ9E8gN3rngnsYopmdf9ye9Jy11u2eEVirm7YXD725jhmiXY82FWgWVxnqni7YQLoJxn4Kp1",
  "key33": "32J3dfgVuXbkQD5KxXD6agxnTKeVexiHfG591mx5BRz6AfgTXt5ULnfeyYLz5pLs2hDaep4WravkLVd8GRyrcXL5",
  "key34": "2vAqpgis5D15GBtoBC3yhCVsX64HTJW1DMGai8eDQVzbVYXHVwWSze9e7fWtNoWRaAzJnPQUc4RERbnUwSRVZ8jn",
  "key35": "KhnJiFmgVVoEPePngM1M1JvXYEDeb1fRUYCmMNJKRK4YddD4NcEgniHceumaeMHxs83UNVsscgjgk5StDRAAxhv",
  "key36": "JkumKd1VfnXH7QrWRug3gfMLcjSZjCPWsDvniGkMoN3FPgnCxdhw1CDsicGvJpp12vvekLpnjFfhBfuhjpSdRzo",
  "key37": "3Vy9wjvoKFNXHxAaCgP27vGGANqkPS7gjH3VUNstf68SdAjRwiLzK135QcnXerVSMuSjL74w6CAFbVP4UY65KxTs",
  "key38": "3bhaAR8EqXsvdqu6MUUFj8oWZvKFxZUMaj85CGvma1sEiLKnw1wKfnT6ZPDe86WGBpfCgMNSSugVUFNfe146Cm23",
  "key39": "4iT3fEkpje9DAeCex5a2Ruk2Lc7ikhJoEstWgtUcpPDzLvuF5M8KDVe5Asi3UE3NViRuRiYhBPSRrM1cBUtrNNuJ",
  "key40": "4zH9kFrZRJeunLEvMb2bTPw2d35xTqZNEVHnQ1o3YTVfvD7tet6CaGvSis1rGhhRPGRURMy67qTPTcYYDn6G2y6i",
  "key41": "U83hbefKrgzHryfKeMmSdFkkSbRoVmbCEoZAN7pFunVrTQNiZp7uXkXCA35qWTBRkVFPoYbLZPFpS7V8owJoT4e",
  "key42": "2XqxS8LvbCCbhFJyrMrHrHG9e1XzAWPtqsoZPmt96R3wujLDmmhF4kiVR6K2evs62uUzcxe19Gp2nY5GqMZxWbnK",
  "key43": "44AzAHT23bK8gf44DjBGQHsj7pvSH936aGKsxE1FMZjPE7tPwqRKPbBQD613Ss3bZMktoYaNP8N776edwqE3RUfV",
  "key44": "3fr4MDAL8uZUpmjVH8VZ1PYMiotwTddkoFhFM8icWWUmgRoQV6gCYJQkTAwymWenJz1ALMhLwquitPz7eZeMTgBL",
  "key45": "3aZarREyChgkb927PtiXCdD1vJg5eYMRvJtaZqhZHnJo1QSeDVznZyeMT1LAW2r4UxQwpjtTRx2DtZ9zkpKQoVge",
  "key46": "52irBjpWSn2nSc3n1buC9cpRYtnC6NmexKzuayNgtRCQHw9zieY4K5dZWfjTvoobZdgangjBfXmdUrZk9NgAheoM"
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
