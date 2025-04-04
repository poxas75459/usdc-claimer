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
    "5XmB7s771zjhF4FPqkPULPnnGqUYYDRMh8NbUytJxfzN7iepPgYYdTzSE1WSqQMwVKTSGzX43rHhhGWTz8aYCCG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aA1xPfqy4onsXF7MBDLCE5SSrRiFBasJetbTfDt8nAcYZjAjBkardEHyxxgCGNpUCYqFX87osGLrJnN29gVSuB",
  "key1": "Pi3uctzDVFTAdy1uWib5WTWWTq1iHSbNycfX4gk8ioE1TfhqPezptrGBzydvgaMPFY2Xd8HfuZ24XMKUQJaSt4M",
  "key2": "2BW2FkFgA81jCYnYS6oiMo3jAQwxNm1GobHdaWhpcftUU4vEwAx69FnnbzSN8DGoZcUnVYLupTBwvPgFRN62ZY9H",
  "key3": "5REdcu8a1XgPAhS4m9MY9EPqyajaBLmjNnboMXahL73ktyy5ubXztuHofepmLJb29zZt2MPs7xbubrTPq6s9VUTM",
  "key4": "53SicPgqYyjFMwbyu4VRrhf7izmTrL9CpcvDoT9d2P5GGVzip4GH73NnHcDbFFpyXw7U4BHXEcJbpJxDbJZHseYZ",
  "key5": "2ua4z1GpF16S3B8kWibrdLKV3mh4JYsShcZRtWtLtQcgMzs9KWSVZihKXJ5j3qPVkFsScNK7WMi8KLha4E52A3jz",
  "key6": "4Cjgv6mqVC9io5mdk9bM3dWcKPymUanVkSgkMjXDNDLRh73b5vAh6zudcq8LietmzUzQBm9T7Pa4JEg1v62YP9L5",
  "key7": "DS5pexd3XE73qjvnoBngKooN6qqdUhHFAP73qCTKjLN6ZqqV2pAHDFhcDih15fQDavTiAX5ucJpSv6vafsKPmyo",
  "key8": "jVdKLcRrXRw5AkuMSooSbXkQfjez7nCxkZvNVHQNoYsd2Gktf39CDMx3tr2CxLjef63KJvdnWsgXQAjVLZZJfxN",
  "key9": "29B2vt6xAuy4RfwCmUa7UJtaNvhupQbvE3GiSuzhEbPeuAqUhxVoiVTWAYeEECZRpbzbaqgQkK5EZMfukPrhUxGV",
  "key10": "2T2534SFnhtZsrbk7TufSr68dNMh8QxLjHhDpqdNxZAa66N9dApDXPCYPpbVfnD5BSk12AHCM8ySJk1wKZJMz9F5",
  "key11": "2ftRac9VePXouK1fih49BZq117i3w46EhDnh8a9ddBYA5givLN6dya7Sd8Rhp4Ps3PjeY6HH6ZvL8N5E4DPdwS1f",
  "key12": "5rNnERiMvxjCPtbtRaJVYbyAFPuYHqbzDX2KWdA5FjEjoTMFbR1gK61bqEuYaJ1ivT6U14te4Q7fPzY2k3H7zi5H",
  "key13": "593ufzkP8Pk2QRMbTvBEa9KbTNKePJ2vuZE77dYC6G4W33wFLUFmWkBMj49KkdcuVrbMDJTWUh9pLuww8HG2ufuo",
  "key14": "2pfHeY1dVsjSUvmTzXNkUR78vTW2i8P5ng1yi26NL5f9oLCGuhFLWg4xKH5Xbz6qoDG6TM93f6daVuQbiSQp8BwG",
  "key15": "sb2cfZM7YguLwXvXsfALqdHUf2gmUU9g3PVKoAkrbd1nHtEhykbLdVZrjgj3MftbkaXT27YzMGYw17wxV6uMF9S",
  "key16": "2XHA5BJFK6ns5EJVffAC892WwnCfcwkQ8W17gAjBipezGvM22SwSWEKtcJFTBNoQQNUyDSSfwakNwoNvEEuFCp83",
  "key17": "63wkSAVeDEEQZbnwgSM3nByWsd3ubLTyexgEifz2WNcnbX2MofRb9FnrYTGguBGuYdtbdSLi1P7Bj5NYqUhJ51V9",
  "key18": "9QnMWVwoAmWx78Bbctz7uNxHRLbHDm3oiwCiaZyE9zKT1ZZ9j7uwGxd8dXJd3bd7sgyXkH4H7vCyrnEg8wDDVFW",
  "key19": "65U9G81bem9Mm2xYFShNJqnCgoenVYBwJG7z5ndo724BgR1yjDAqddYasyxU296vEJU22JRS8K8cvkdBxCzJCMtc",
  "key20": "5VeFmzt71c4Rr5FZZa4o753Rs3KAQgvXJCcAVsDWzq2fZYhoNgRu7p7ptzsg4MwUEvMT7sAnmpTCqhWN2jifsHpf",
  "key21": "5YLprMqkeGpdZewF46uHjPVYqCGUnXF7F8mLhSVctnbqiVera9jDr8ADKVpLn8rb88YmEE1nkfKADb6cTR3kJCDt",
  "key22": "UCvMrMDDimgGf9NC3VsoE4i9zjcFAShpEuYjBVFsUSsgktq2GBJyJdKRVjkMTeHgHM3QxhKKqNY8NFmvi51K4i4",
  "key23": "3EpaPmEVELavUbTBvvhovuvVVXhV3L8SY15K8k1cY6ht2AstZhsBYkejhYJfTK4mR4dVfBL1C1uu2jrzHtVDTA8Z",
  "key24": "5giy4Ujgq4fZvgVz7KhHvSjK7uAK3eUeejgSoQ1QS4nm9qN3PfD3oeAimTZNSkXzUZoRoCm1jJsrP2Q2uWHm9C8c",
  "key25": "5kUxdq6gxnje85daezNe7QUjBA9PBhkzjCUMWC8cZz1NSfnMQTu1M3uoFioZNy6PkLbP5uiruKxfkjUJsqCR3HNm",
  "key26": "3x8qM3EoGo6Vp1Yn6bA3kz95WrPJ8cY8dVQ5yrB8dgAur4HuK8dRkVpJX93MPLffSTKcra8DsRm1tsSgTjpRCVCy",
  "key27": "4nK8FyvT3ViXM5n4BhXceCpQbM5BNMapca4oSQCRTZjqGDmspMDxx6tHG6oXvZJf8K8iuMUFCpgedxp8ELH9qcHe",
  "key28": "5uPXHYBrcPhRUcCim9vpgevEErYxmx3LDh9RB9a6Di9WiKSP5zLmQX8EF7kSvnkLdoJtE1tAAq5zVE3RH5ynMdJh",
  "key29": "5ThFRmG3Z1wj7ydFdAcPLehLtrmXqhLqMQRC3wmnTTib1mE6sgk74yQpkjJzHFWYLfRpoKV4LyDce1frWMFQd5VC",
  "key30": "37fSCqh3jYVJxKLVYe2z8kyY473KKa2GKD28RKrvFZNWHK158gYNyeuguzghUp8NMxLW8umPLorKxLEkbN4merVW",
  "key31": "vV47hKeM49xrDJixRVFMgGbCW91QeFNvbHJuF4yCTYQkfuuUmmZju5knCKwHvKd6WYivs7EM5ehharH9oaiYqdh",
  "key32": "4R5pNbkBHP4Fw2EkJqj2qHj2zfwjycE8jTdTiGhdAkqmQNeKZTWxhNzyAhp8Axtck4vBcJHUmsyN189HA1QizyQN",
  "key33": "3RDYLcG434og2g2nKsFR2KYjaJBGYUkoZBom5Vr1dB4G5B9axD4SJFAiXGKg4NuMSUm8s2xFRhLTv8WxuyzYPhf9",
  "key34": "5HGfYEeC7runBzXp5PoJVzj4z6tth6X7YHbBK6ZLqGRZt3bMvGx2yP4KhBbF9BbmTujZEDR5uso7r2gabSqCiLFZ",
  "key35": "3z5Vt55SHUXyHeSY2JqeAAAtB8C9e1b1Kc2saHhRbHQs9L4GwuQGHCgEpQV1yq9SkKndWW9R99WyiKPmKajRmaRq",
  "key36": "5NWs4g3UddEMWyrdH2bz2Q1dyG9ACYgdasdzrgSz1hWhUkDoMdfwDXKZcZND6BargPvu6v1U5GRwVmGLN7RitMWg",
  "key37": "36Y5E1XcBewi8wrnBZuiGrZhkM7QAup7Xbf6DrzWtobJTt4qhZqvJJnapXiXqc6RJUaezurFc7X2z4TRRa1JB7Gr",
  "key38": "54vVvk3ThyJjjGysugfEqaWLFFmzJKCy5nGpywKMToZFDzPg1iFZp3SvAKUuJn19f3KLTwixA44udRXiRzcPh21m",
  "key39": "25HhSNdz35UYbfYi3yytdQCSkbGGEFabwthS1vWv2oTAXEZVyVG5osQYqrRuyea4oqzKAB8MD5AT1Pd1ZghQ5cgw",
  "key40": "ihyxCYzQeHPqmg66qRebeuqTy2Z9MXK845vKpg6pynZ9hnv1T7pPY7bXyboUSs8y6yi97JPBwPQ8cN8TvcNkSb3",
  "key41": "2GHTV99agYGJZqK9pEtuGYEeUmyMFuTPHSZW5UeDfjQJcnMsscYNNhFTpsXNxWMZ4zf5AqqjmqPMM8qC1wKz2bPc",
  "key42": "5qWhX7DtLznDH8stxG72xxWKk5xE5DF9RimEw1gk3RFx7R1f4F9GmJtY65UJ85aUSG6fWRoYQ7x91KXPmMJsTxks",
  "key43": "5rdQTNKiKNu59eLCVqPXacWkq7L6ZXpSE11oCBE7MUxZkJ2u9Tod416gc7JiY2U844pdV2jFeBnbKra5nL3i2Rae",
  "key44": "55CMykqqxJd3LsBTUwTiNVvjo8cMWNJKM2Ve5z5bZXTevEAqLQz8dyVg9NuYjDX2sx9LWTasu5aPhLRhqjtzzfB8",
  "key45": "3KqK6RMY5utV2kdwpZ5TYPdMirR54oouEThNoREsjaVomJVBb1BeUVL2BjxjRfmBg2QcFADbAFYtkdytSMJcoV6s",
  "key46": "5Sag12DeAxMKNdPmzpFWr7fSMCWwNrjX6kSjZGPHBf6x8Mfkc7teHANn1RKgnmu54FptDM5TcTuYNJ9Z1JSoJESV",
  "key47": "3ey3XtRz1TAy8GBU4dt7oDN3ksyMxuFVT4SQuzf8JZAL3RVDrzFmBzWmcb6xy5UmdQj4RWUbBFWjVDcyL67HCUSt"
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
