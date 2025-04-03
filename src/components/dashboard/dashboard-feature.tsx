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
    "2925m3fiAfee8Re3jtRhCdMJj6CivtXphijj3cbN9MVqRoX5c2FkLSrnGWPb8jVkHeiuKG6NbLSaGQTSdCKb91JF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tUiQehF7CFcqvLbpBBtfeVa5Bm1KpBF7XvvPfx1z2fvV3V7vXGwV4JWNgVVeKc8ZzZL9n78WaANC7U3MzZ7Gr1r",
  "key1": "hsgvh4gwF21KiYXVPp1ZY5Tkyr9mdt1qJGJyo6uHY3gnFk9k7eQA5y9vpxo8MBi8HibFyfcFhtxDnCduhb7jyZ2",
  "key2": "12y3dEZhjubJA53v4qcbkXvFWAybNje9dZPxU58qMxPwr6ihUXLU6aDiTsbSNe9gJBPAVGLzroyGyCMeczTHjGm",
  "key3": "4AGpoD2cE43aWvmayBJ2Frbhn9D1BLRFJVGrV3dfmiseXjuMFKvXu6y93sBsnBWuydptmPqhgNYxT3hwGGZWgSKB",
  "key4": "2TvhYNh9fyjNvaGv2SG2J5QH1CaUmNQ7kt3UTLAC3XAd8UbKB2zNhpxLaLXTNudZm7byzDdFEPMFJSUeorAZFSKA",
  "key5": "6HByyUVxZUoNYqsh1mkYnw9N2ir3Vx6TFyaepG2awNHtpfmnAvcUB6jQ4Qdigc5QqmUEigcTrzw7kQjFG399ki6",
  "key6": "AJQaYk1rhBxkPoVjwFzFgs1iYBsqngAuYcWX7aCC29nF4VwzwfBBjKyqTzg4JaDoDpk2gW6HpL7EoT2xh9U3GXS",
  "key7": "2tWPeaMkfBFJ43XFMBDvTLvzU6isXRg2roJBvKJoxW8RxYwTY5chT1qgLx1aRSohJ5wvaTJyiEzfiGi3emfBtBF8",
  "key8": "3qQAtLh5jtHjhC7zhEN1uqRE4Xd3eCWrMDYFpb9rW7bSNLWprLAn3hhgMhjBX1Gwp5AX54JZTb9osKcsvHuDrnsa",
  "key9": "51CVJk73k1CepfCMqFHKKSduueETywTkty9hPJR6EmfUFB5amzS7222cGnQXXaQKFB71v7x9BMdVpbHA6EmnpPse",
  "key10": "4mfPaeP1cjnvpotzngmHPMexq4cN8nJsUdxBupk9pMa1dGrMHPkcqfKBqMtTfrzZ57GjbyXBgRUFZ3mhhRdRwatj",
  "key11": "HyqvPddx1oxcX87h9cvH5zTs471fEYyHPd4vYB8rcCDhrh2XJj2NYXEfStsMWiDVP3JJFw2aGNuLv9FJAPzwnE1",
  "key12": "3K5b6WvFnYWpBKLGJz43ngQzWzoij5R29YQkYZMvowLhMb7z1ukPTgSDSKDR4SMZLHMxftR4E7ShkbVN374geu4D",
  "key13": "67RZrnqJQWqB9QmkftGNqmW5Gx5CtZh3eKKaQUzZYbXYM9f8DnuBNnydivUZRUvLgnC2dvD4wz6c9FinSgfWY5gE",
  "key14": "5K1ReFwZjNVewS6ZG6zwUsy4XWefdfYdCCsDCNfdSAF1hJYgFz5W65wkSdYYacMAucJT1as5UU5caysmQizyJCKA",
  "key15": "3zvbRKHUZke2uedrFxmiVc9TS4LyrcTqu3ghVmUfMp5BVTyEbhUkKRewXvFLVW6GrtCG2hYtq5NPbcdamGCRV95U",
  "key16": "WKTwNN1vsbuZf8pdjL1F6MN26PMHpMUxt5vVurrFvHwVTLre81JDeRE9rWFdXdP4as72rJmpGGNvbbp59aBAryj",
  "key17": "2ttXfJaekSReRkDQGFH2SZZDBQkcKBY6qEWJXqZgqKAVsEqPTyvQ7dAWcuv8eiaba5dc64FHXm37tb6f5toAa9f3",
  "key18": "S43J2RKmq2x3LSALzTqsCjmj5VYwXZGXBzFfrZK7qjCeMFeb17DwcE8oS986Eyf9gCGMQw5BiQCykMpUmGZjRs7",
  "key19": "dreERYKaehnGi7ouTuxCw1m6A3VesaCd5zpHtycUZRhQuYp4fcHb42gTN2UGbnQeKSgrCd4Y12NWNcJN426hktH",
  "key20": "5kJYfWReSQaQBxXY6ZQFRWwtyXguZEHFEceQcZWXaX2ZREF7Bx7cmLMrbKGNfoLaPiYTxGdp1SWapY6UGj2PSt7T",
  "key21": "5rqhup12joikhSomM56gfUXFdZAa13mgwQwhRzFgDfVWbeKU8MPhaZubKNc2HyHcatZGbZ2CpogJ5arw8n8rJrmP",
  "key22": "5p7qmq1sYmcvzJjToQWLtY1NETHTvKASy1BvRd8mc72iTC8CC1vbTYsFSpK5Wiq24A4kvXhByhRw4qdAxvwrfxbh",
  "key23": "4zTjjQWrK4RLEbQor8fzNqDFKPYXfn87HNqVrcRMcKmNirwKFBuRVLHoWAmGomuEjk5TfYzEDwvcnVc9cGYXwBc2",
  "key24": "aQEuMR2qfyyDL4jjU2X5tJhLWqSUNEKbq7S9QzrbsC3APR1us3ert8C8xaoc5FYeWZuz4bEfhKcDLHFYeP718GH",
  "key25": "6uWwokeFJefEcoHwt4hXH4HScZAvMz6WnoxaMZresNvV6GfdZ4uTeMeqBweRzQhWi8Shb1MA8L5YBsDjnjfV5nG",
  "key26": "5LdRo8Cz7Ysmx4DnEcibwTR9yGuBWxd3PaNPExHwXfWVZz7iuVQZ9s1QKgkeZfm73fm3HEkaqPRzkiHWiCcuGSvx",
  "key27": "3htxhsihuoraL1AE7rqDix6CRmDDKRiEJ8uKp9WiRXadELhEVeEUULJWHfP76qqG4pKadVnXKPuQvz2xzqo8tVdy",
  "key28": "3DchkrDi7GCPN8XJweRZ2rvXuBpABaAHLYUSS7iDnTBjuLmukSk7Kc4wsRp7LyqpjSjmryG3ABn8ea6eCf4zDcxH",
  "key29": "2L5a6q6oQjP83jbVPFdUnmsKnSq1e5q7ZgXmuvvokJXGBjqDGhvEEuP5sJN6uLUYWVJD3B6exwF5Xsz2v43hJbJj",
  "key30": "2Bb4y7i3D2GKWZtr7eDn9QsAVjGNQbA1X2H8PWFHXTj1KzdUfMAhxsUnKTxs3rVJVuagQCjCAjaPaAuivQu8LKZ2",
  "key31": "2wuuUwp1YdCLaohhRVaYfeLNGuMSF9uURtZEwDLiBMqjirHBVGByt4UkkydFUocm64C79pskwcDCvqiMEDJfBUVQ",
  "key32": "2Ca7KQeJsaLAKkBjYdFiBjXRgcjKL3HD7K8ToipgS8UR8YG6cviYetocvFzhuN1RzvXR4AqrUmLhEzF8umjRhAZR",
  "key33": "25dpUv7bExviw51HV6xZ7iAnYDhY9y7NgyRofwTg9hafkExu86AQFN6g6jvqjawnGbnfSWkhTJUb3Yjbd3xYYQU6",
  "key34": "2QsQm9X6Dsz9yjAuPqs8etEM2MYexnXZg18tG3o6XZifYj2svSEFgZEz4c62YhgjNTuzmbbbFMyfurDPAJVEkvFp"
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
