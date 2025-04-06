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
    "424Qj3SANVtYM1fBk4ZfeRB6DDBr63nPJa1RG51B4AynzLQhYYSYvz3J91sTcrEciU4BkwJyjXwdLo9BHK4rqBU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w5FYRitdijYoLH2hvZiwaCGeggZpxWn3SLDikN4oJ64Mqq9Z9Hzy7zGw2mDva76uHBm2FehfEvxdDUieYXLwJ7q",
  "key1": "hjbETG16nATeuWzntqpsWThTUfV9sGHRdifwTGg2tsywMNQHCUy9XAJ2CnDU583svMmMujouE4wpCYdMuizDMEX",
  "key2": "4hwhXUnWb7cKRd8prtqErnyBqT7bfR4LxkpzksYpFJbjNYi1sjciG5AyrbcZ79n1kmxmHEXs2s9vk2AceTsLyMS4",
  "key3": "tpCPqia84tfXSg54FCXg8VBX1nHPR4A7iY3GWfxj6XarXedhFHt8zsgLLTm1UpbVsH4MSPuFsiGMWcDyRBY9vE1",
  "key4": "2rsZXfQgBGXmrjNAaaFc8HXA1jXzYNVfetZzkFHqT8WFLfnwGS61ooeg75a3ir4w6zgWGGNWYJr5KNsptp8HDVoV",
  "key5": "5ruSjzWVA9ypa9TgEmJL8U4EpgeJcSSwmeaSZTvRHw9a5wfencTb3byywLwdLKqVx6wY7aNCWkRskNJrt3aFEqRe",
  "key6": "dJEPFDfMVgisix2fVmxzVxG7HsVb1XskDuJi7hTaGg2BMmEX7v4Ny1YMsAPgcewSCat1Q44KV3zfgRxw51ht88Y",
  "key7": "5MxvnkKTFfQPT3s7yawXytfEBiJPafn7bWMS2iRaHTyxT52zTSNW12iwtuSDzXxr2wZvjFAzoBPqY2dXwLGYMeGS",
  "key8": "5qcR2EA3gBLQo43toSMh3k2CTuf6nUTAt7eeeu156jJWwYoERHreKQ2nxMi4m5vGingvYWPV4dtG4GPH4u8ty9QC",
  "key9": "21QRagwHH9HQiroUpaDWim9AEFn2NUxUBqkojGALopW6v399Yj37GVthjCRyVsMMDZHvhHJcznCWe9pRUhNEUERH",
  "key10": "4e49mNECeqyCDtVDLT67BTSyEjQYXWfjGC87bd2J5cUF2qUwUXaFHKsX6zeniZP51n94a7mFhyQpxYGJ3Whzk6To",
  "key11": "2qTEzbPUvXxNC6vqkZPE2doSoYe39FSh7P8bmNdW8KMopiu3DDG9tH8ih2f8t4kxsRsrXFe1EjJ62z1nb4cVTKZf",
  "key12": "518vRsUiBp9bSk1MnFTy79nGJBwU2h286vfwThvZnSzrzT5UumB5dy1YCfp3VRv1Ympb6gWS6cQDqydAYK8VdT8r",
  "key13": "2TjLK6yoPn4cSZLoTAjb65J5rQKvHkhCLvG4ATryxKwb1D5JFhFwMKn2sx4Hw8W89uC2SgJVaRjuZP7QwtdG1SHG",
  "key14": "r8RtPHfcSzAE3wU797P3XEqVrS3zW6Jz2uoMJZPhNXNqkpJEw75HyZCCnMLPj79rjoFKRcNQgEtchkpt1Gynm6z",
  "key15": "5bRHEK6Zn9pd63okog9z35TVjEVY1vaxDTvtURzn38YHJZMXrtJZqQTUNhSVKh6nHrwszR4Dsxyj4ctMCcmKiq81",
  "key16": "5Jh29hkynWECQmZc7vtdbdLJiCkR56SzYySn9bGu5fRmuPAu2NABqg3Bb92WBwp4penJ37S3twjRc8S1fsTFQLRw",
  "key17": "vxMzQvBSspGAmTrQR5jUPzghiSosLYDMZojLWtVRTJv4BDEzDqHLtFBHm9bakoVdwVp3WCovvzECr3qSZ9dxJkr",
  "key18": "3S1fFQ2LK66JG14te36pcD3rxcZQESLzTfZggkreaWWxobT6HjdBSDDmbqq2VsHDKWS7wwJs45vcosRHKrfFehLD",
  "key19": "3HuFroaQ2UAhuTUoy2BR7Lnj73dKXr31PjwzU1dbahYFEVhaWYNVX17g3ymY9jxtHkHkBFcTAFHw4MEVhi4QqLVD",
  "key20": "5ifWmA2Ceifz7Kn8cubWTs76JDJLi5Z4cYEsGNnKPfJzJT2pS7o7ADLAXfLWjYZXTeJ4QmquQxSoeu1BPuRNogBr",
  "key21": "3XQFrvxomY2Agz5x99r4dUFgTC3Agf3J5s6tYgoasJSwK1iURqYN8FiKbxPx4wWMghevqe3JZ5fsjyiQuZHm8ENo",
  "key22": "3cuSyANAsDTQbhQXpSAMaQgyubbdHVZDto13gfDMZ2sDc2gaaQmDSXBGWpfCUN5VP2LAW2c4nfsrYmSMJm3ShRHv",
  "key23": "2vGWXeTxb3DsrUgteqXHunedF3i6AUaTNP8iaCSG3HANwV6hZAdkHtPc3SdfNAkvvzcAt8EeUpyWrDBKGGs82PQY",
  "key24": "5j3FZMAkxVQRPEGSp74waNuKvCFrE68SK1tNQjELs5xZtTZD2rqShgmeEoFy9ANAy1owVEJuL9UhERjXNwespibB",
  "key25": "51337rmeFsv88MNNNbnuShczRBjWBeQ4Bs4JaUJ59GEbUJgCKAjUHE6KuNFbZk3q3TLdDGbRm3oLS3UTW3e1AGgP",
  "key26": "r66T1QY8bGA1DrnswicMXQork3d2Zh58UXsgtvr37evz4osMPuME4QgyHqPj65E6wXQfVEfrgeTdfMknp4qQsf6",
  "key27": "4wcJYd681YiYEoPdGNtXopUtBRAT899ag6LgzsGWqBV3T2zDZ77A1Bn3TEQLJLdrQ1d27SXQxnKSDMw99Wm4PRK7",
  "key28": "5fzJ6uqE5xmMTxZSDm1NbjMKG5JBYPrtP5tHxQXRUTn2CWEjNyKGLG7rK5A3kqarFZFWKyCR1aEQ2QhXgznAqFFp",
  "key29": "4JcABoZ8pUq2jbXDyJwx9CoWLkvuTomFcShewMR6o55avL3U7b2YQ9P5QjNRRBitsGazzGFmULmmwzJjKW3FUrtv",
  "key30": "4cXH2B6ZUZkhFioa5osYuRikWGfd9sHGAh2GXdxznPzLwmJfQvSU6Kkf2kUXZACN9TVd34Bph6AYuzptGGbiUJ7Z"
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
