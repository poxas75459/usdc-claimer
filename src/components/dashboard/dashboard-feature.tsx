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
    "3a7xfoQLzKiw4qacPE8AuKZ28jVxeWrFYga4N8mrd92neKq1o7gzh4v3KZ917z8igVHAVrYRK6hh5W3LcR6K1wET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31k5TST5aPtEcz9QhC4hvYkmX5X2CuQqcc5SpbFknHFJDVcoUAejnp3WrEgGUPanFnEvJQZSngJa8cRKQd2fLQuF",
  "key1": "3PcWnVu6dSmyoFGVWQKE8eFtix1yVTujGaG5oArv18KLyyXUhMZJeMZttkeLte41xYRR8FKhyiU7gPLppHUTAJwS",
  "key2": "3kL3s4zEFQk7uXN2mj8ndBtgWQL1TpaeVttCcPhEKb35FNA1Uo7NjFknvemX8iuU3GMUjdGXzMnWPgbN6rmA2rDT",
  "key3": "5t2KQfCU2TuuBaH2mkU3F4NPFMGc4S8NQ1xeRK6XqL8dpJKbMHt7PGiVbzM72G7HYDTmYYg7bdGSXE3JSBgJ9sUF",
  "key4": "5iY7Dra9qfLLKVqX25VcvVAxZmQU2nX9PMU8uCdHSpcruaXzcNyMsg7y4ytewc1EUqukxUrziJCKV4VYfGfChoXv",
  "key5": "2W2aBo9AoPSYDK89CWvQ63oPUZrM1ZeMwBt9Us3FtLnN827C4Ge3ZBzAmCK8CWTDctdTXSHK5R1wkhbnjQJ3x9LZ",
  "key6": "41q5s5Y4rhUEv6y2FMozbfSFSKy62ya3A3C2Q5Xcvi8U54cfR4qGvtymQZi5iaY8BVyASCRpSnnsEZCxwC8wC2ih",
  "key7": "3XKeHhs7uDRRninLipDh8pYcFnoo3bFHXg7Jg7JmeCadc4Jy9eSk6Bo3pMDGhrggY9zXxPtQrVdpbjL1kt5fcKb9",
  "key8": "3kemLaQuL8y8AyeNYX48BiqsZ6QJe7Hp7BGytDwzY6oXWW9uNh4wb1YCPaxUFShMEPeKhUyPiox5bR92QqxCuJT8",
  "key9": "3hREhJajbofagBiH56t176qc6s1SjZi3sKuYMWLmA4AyGve9MZ62THp6VKMoi23ud9pr2X6jsBS5aNzotXiMUAVb",
  "key10": "5k8DwfKFiiZ4r1NFC3F1BFV7JayU95mJfrmW2XRecUVpACDfFC7bAshMfomebQQEsfqpRAHruJHSSkZ2Pj1uJi6A",
  "key11": "vGsgTeX33HPKprNbx2AshVVR1xhsj1U4FdzXgKwBtaXJLcFgwC7K5mzpLGpc1Pyod4M4AakGMPQ3k6J9VwU63Dw",
  "key12": "4cerko2RyTWu13cyLGsp1rZLfq6TJCgmLDDtsMrg2yixg6MnEgo3thX6tK665GB6XRkYzuUkAYi3ac1v18QXpus",
  "key13": "3Vnd2BpnWmXpxBmNBqEkCkoY7TnBWqqgNochXFFTVafH4ZXzs4wTXxnxJL1QdrumF2tsM7qeWdJNtzeAGMpzfLbf",
  "key14": "5guAAoXDn6ZcesGwPdtouokJtJMBWZbhXDtvnVKMttWL4zyeNgCs9KQdBt67TkiUjKjtdKTwFdmegnkbSqGfJ9dz",
  "key15": "3KyPL9tKManCSoVcZoDKMWFPiFWyY3mr1iJqfKignPySJ3rsxrsMiohowRsZezpJ5cNcoBBNEZqD4vozYzzWoj7v",
  "key16": "aWNuH79hzkQcNfSrwnY8iEtq9NT55sqD6euGJABYCBnbRMnDWnDqEGP2FU96bvJUskjyyNHphH5dujVe63GJcYj",
  "key17": "ikXrDmpxtM2ftKhskWBpK3eUKRRwaGmA1DuMKGwhRVBofneEzLTyfgMPfMtmHKXam9Uuq42p6kq5RPnwEyfHn8o",
  "key18": "2sCkSKSNgE1dcACHojWRyxCe6wkHpTQ8fqWD3ydKMpWvdXs2YY8KmmAnkn48KcKG1wsyKvMAtgEamEQVkj7ZqszQ",
  "key19": "32RG2CtjMg9QR6RsJ2EiFKBhVUWvfpejHjaja65yJi1wyKRPN7c4GooEwR4yB4J5f1WZWotfRiHfdE4kD5zh8RBH",
  "key20": "3A7iZrWyw1njUFT2euCycgUbuqLagM8kWbEAsyMr8EnRAz5LTFE2AbG1jd4APLZQ99cCTv9sHaoEVkcRLuPpvKRU",
  "key21": "4GPthpjy2mpKdgREYF4thd6EdUDR1xWqdU6PKg9tGrDA7DXGVVSkk7rGgtUCfBUwXt2ZFE3zWgu4P5PLVWBkqsWX",
  "key22": "2Kj673Y8gFGhGJKPfNUYFcDZbkWvS4k4f97z7MXYA93N7mAfGTiwoQcMBQjrT4KXQicWKTjYaUJHemxKaqWoA4Pt",
  "key23": "35Tw1XpXjTKBrFNZAFrR7j4wDzAd8uNJ6GJC62RVALwA9uaWhx9aPkgpHpUGursPAgcaC8cVehBVuyC7zqnMLUG8",
  "key24": "bicL5zQ3waHEAeyr3ocazhpiuDhRRDb9efu6FQwWhbcGKraSwFKWdA3q2EMo4LmxV8KKh3bS3BWijhubzNvTknM",
  "key25": "3og1WTsju7kHaePToV1FuxfeiWY1XoKE9ixvoC36ePREa3XQnk1HRu4RxdH58ueuTTi2ns5LUSieyeRmsiu5dtiX",
  "key26": "38fSoag45LzaWLRhT8n42ELEk7CdcSEEfGpzBkAzCNPznzmwkrLbdbefctsPPxK75fau5dXCijd45h7maVeQhpJo",
  "key27": "4q9ReLaRgCSanwYg5phQzbtzzK4xgKs22JjYamyzExibkfqX8B3b1pek8YntS1rei2jbQg9yxNHLEMBsKLVsAMZk",
  "key28": "2cfas14xu3DLNqQ9YnqUGiN1jHCkbrxz3X6emyBZzRxbaM8BUvNzyWxy4F2o13WFY8t5b5LysYcDs162m6DCYAjU",
  "key29": "5t8Tsq9huzQkm2hgZKZ3VhUCgNDvqR9u8syKn1tj83fbefoT21BmhjT9ouAQot4ysTVYEHqjQRm9nn6cQDKWXv4s",
  "key30": "5TaqW1RmwsNRFV1sWgr2x2aeMZgy58td6Wo2xmZCmbDj9tCekXD1dgCJSkmC8vrZLve6CtsgmwDFQ4QKnLUAwqhE",
  "key31": "39myQVu9RDbFGtykaKSPEYtpgn1JiqPefCKyVGjJ2u574xvuWQKAZjMKtukiVG87P2A3fSw2XHbW6znRZjheed4X",
  "key32": "51BCgWqdEqweyqxjSqqY63KKojHM2fXFKowYCFSx8YhjKMnnjyTBBNwuxVLsMMyXVkSKpj9K79vanmyTF16K1gya",
  "key33": "2k74WrCiWYAktqjgrjh1uCoX3qg3z46fDXXJWvWRrLs2JYva7c7ss2DFmABAXUXYktSxdMoEejMqwGd1cFVHGkym",
  "key34": "4PJNmmhWEbrikcirQaJXsQqrEjMDXub2PRHRdU4vdry2pmaQLMAMqd26RqvqpAHD53AmrY5a6aD6V1gWJNPciVjh",
  "key35": "3W1rffxezukqbw6KCcckvS6Ypw2kTcg7iE4oWy2c7FXBT9k4YbQKEBVwc6LExriwoAGSRXbq6Z9WkJS8eCmVY2oo"
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
