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
    "58vyLw7iRJUHRkHy3YNmzUn8ZF1ZVA3LXRNCGbRu3eZFkKZv6Kn2DFbCF2UEMFRNpVLkzoMEVdADEhLaHRdSNZK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nAioCxNxBPWTR4rb4p4jTjvhFaTWUDmCLWRyx8msamhG9zbwpe7KVmx1n4SnNWSAEsQhsLRSaxx3JbR6yQV8d2g",
  "key1": "3M9JB55bChqviMMpmYqVcCYTEJXaXxNFWr7vFJ5Mhg4H24ozJ8JRhstEHRZLgft3WeEHMLMG5Ri5o4922cFRu7NV",
  "key2": "3i1KxeWVQwzDFw4wkmfgGp2JPywktdBBqZ4z1uyR6rModHtgcM4xn2L8rm9nAt4JjE8J5qJwyvpbApxWAT79LvP9",
  "key3": "5F3WTQdizZX6AierWAsrrJnxxF1FYdpFDXRq7tDLcFXYHz2FHv5KFBYBQhMN81ZMaE7He6xs3beCvkmQ56WXGRyR",
  "key4": "2NdR62ruwjMVUHYtxKV5GktHpng6xfV4iVZz6beQr1KPgGXenwdJkhbCQpxbZCkGxhpnuUStPeE5obpdTWNVRu7S",
  "key5": "3dATghPxS2mMkc9fnrNeKAshYkcW2bPn42akUGBVNdrMWgw7q1CoheA9xNFXCESF8dzkUknv3jtmSxu87XHo4rTs",
  "key6": "3hTxPGWfpXPg48CKj7eAQLjxxFBWxXX717cPgoeGgqKR58PYurj3bU8SZjV2AMpBJ2FWLBkCimRGHmasPuWzFRND",
  "key7": "sLfCtgvqGSPredWJMDHWvSzWW8qpQoDXKF652BqmhVQt3sjvB45sgJFFWg17ZuNFb8y9HiFmVxRHYNr1SsVKgeC",
  "key8": "4vvF8URm8MYcvZhzkNThUotJMXdjzYsCejK9zptzrN1htwmKosg34E1hKwBH13G5d4K9krvgfphgMiRG3YM1ufVV",
  "key9": "5rbtopJxb1Lf1d1kp4PToc51pGshU5j2KkUmkmmXQ2KQUFWa7tUPXXvAvP5tSeFhBSEwL8kfLosuLAeaKo4AFDTZ",
  "key10": "2wYuHgFZacrK5wEK7c6vx2oRdGviN3qpw792iUYb6TbWBPKy24vTqqwQii4c3zX5JvqUA2nFPY8d7GqmabofSwdn",
  "key11": "LjW6eE8ngmwugYACz5s8S2Tyc3weZXV9q2Ytrz2DzQw22WfPX8aZWBZxxrihoNrR9d4ZWkqWNk9s4ZAJhZ14A5v",
  "key12": "2LFH6Vca7mCg9KmGUqffW5Gdo3E9hFw3EEUeFjNPnZtHkeP9Z49UJ77HqLrQjaoaCrPKQikCLstaqWzJZzxYTvSu",
  "key13": "4WMWGFLuP9v6Z9jEVjdmafcdmZ3ZhbrXMJnW9qh4N7wGgMCuBbNG9rHwwJK9BV7uRqMLtCH5FgtVGv5SDTFp84uv",
  "key14": "4pTpo3yM9yV7ud61nytv1HtpdruPz7NNHMdgRtPVZAP8orMPda85fhZZLoHwjLwoqEVAWZd86aJRPWdRtvv3uMLX",
  "key15": "mGv8garcxsgqczkrgUWhGZkubGodWsjoAC3mjBEENpVH2zv6oCjUN6AnbciuUanZ1Vgie6Jxd3vkFsruu1PDKSW",
  "key16": "64qFdCx1GofzP491BhPFnmbsZx77Z2aMRvAscHasGdyuAwuWY5x4ereb3gXMFUk7HXgCBRq5hbcrA32Gvh2sWsXF",
  "key17": "4u1tSchRf1N7qSoQsk2xAS7jY4Rs2xMkbhbSTP27iLYRFMTbpDrJKYfbmfUnVEkHS7GaAuVV9hjSX1fwULcSVfDg",
  "key18": "3mJ2qmK4nz7yx3ik9HSbEP6sGWHx5NL1vKAHB1CtWp3P9aseCP1ipmgjHjcjBaPGp4dH1Bvgfy8HgF4yrH6ULVBr",
  "key19": "R3ZCNjrtc3GpcUvwimUNneqF7GBcFWC9XGNqt52v1cUtu1dvDXuN2qD2ozRYaFt5g8thd38RVUsSTMziCyWyePZ",
  "key20": "5CZfTP6UX1zsuB3M2gTScH8v8WgY7tNqa9nsyPUTArWTZTB4Q4TfjyyDtn4gx5EBYM4urNyDnxXPu4cKBDUbPJCb",
  "key21": "PnGf515P7oN1VVGTWXA4jkm7qx3iP1XsuF7Smi74DiqCtQijoZasyk69YP2NceeFp5s3JzS63yB3wCcDgZP6njo",
  "key22": "4FF6jT9aoGnnjoaAAbFiNrfcnrFLH3JSYhb8g686ynEMrs12guXYt4u1fAwjqBaoCmraWy8LLJieTHR6CnpJJgUU",
  "key23": "5dfhPHjMGFSPZQFbcPZ9sJpJCCBoxSyzfLFYncy6p8FPhHqRdpcJefLd1f14e178TbCNdZtuacvTK9X8uGVJSCbg",
  "key24": "3TQnG1Mh6qwFrSEyrAN5ChYu9RA9MUqChNkoPvkHGTorJ7HP4tQfghaseYyB8Mjjz2xTV5aBHEAgkb84xfxeLLCS",
  "key25": "4GPAJM543nDhJrPUE5tADtsfdXvhrycSoYzZWkwXZP8hfCrQP5pVBxp7P1XQzkd2HwKE7dENYmyxvrX1zpfyhfeP",
  "key26": "2y2Rp4iynjRSA7vvS6z5YSKu3CEzYaT5zNtAu9PUtTrqxQNuiyhy9sFvfApX8592HYUf7XeA6MZzAfQiBirXU6cQ",
  "key27": "4bmYmzieC3EY5gbX8dysxSEs1p914t4KVMEfieMcNBmRXanGL5gWEdaCCb8gTe6QZrTg9CxsFiLnU9tsYe6mJFj6",
  "key28": "3Qt8taa1XiSJCUVpVmP5WSSa9XujECwYniGGzbicF147UR498PtZwNNvj3BHSpqV2tN2jGyH85pLGg26izfcVz6W",
  "key29": "giKn9Gs5DoMrYUXFAnLS96Esv9Fc2o9srzWPtkph8qowq8oFq7KtGFguoGwp2zwUHX3B4anASCKqvCtc184z4XK",
  "key30": "DEH8YgaYSBKJ4iLwGpXcYEWqbFey5NaVycQEwSUur8ZwWD9DX6Va2AodV4AtyzQEWYxBbDeaPcuFHsug4kKCWuf",
  "key31": "5q4M6MPv5Puz2mcaFVVRuYy49hB4WtPnX52YBgRSiH2MRRRyiZUvKdVgmRELgdGjxv22V7paKXXdTPsyejZms1Wt",
  "key32": "Sw7D2WAd38w1KLLqSJSxnz46Goqh2nRpRR8KZpg7Yrfu3rdMxkK5tQd3kQn1ntGmkiGQeGnPZkHpNY7qcRKWKzW",
  "key33": "3Hji6NeWtbF9nQHexZvtEYDEGFxMWz67DKSUHPZbY1XYEDt96Pa3sdFZX36UPp26jaAWJQEtMA9QgfXewevtqKLf",
  "key34": "4x8HNZKGH3BNfFruAU9N8JqdynqeQTnM4PxSiUBerjT6jChq9jbu9uarsuZcHXnch3cJ37WP9FFTyDW66m2PGd1s",
  "key35": "3VbdesJCfPzKhzpPEx4qERMehg5kYqkrz9a5ZwDbbm9X7mGi2jCSrBq5e9T2KMLixNShyw3NFgZi3iyVJauA6Ds7",
  "key36": "5YVxwshTQK57iLssm644tQCimDXNvWHtmWaaAtkew4FtgxDhM5eRfDMk1YaycjhJuUtVLTKY6inchcXcaUq3FDRJ",
  "key37": "2S8dFKf9cvAoS4zbxVJZ8No8Vb3skVoPNrWBiQhP24xe6QkkPbjisfwNLgmiJUj3h3uTyNwvmPF63QqDvA4wYRik",
  "key38": "LBUsZocXNkW7yJBNuCADKPsuk2X6nC7L3YfsqEucV1ygJ5jscFL2rJpGP8u1YPdYp7tFY98rRzNzkKGnncZeveW",
  "key39": "xyZSKMtNae8ztUo3GyMD4u3WZWRuXWs5ttnMFuSvF6MzqzYzB46js32JMWt7qkXYEY1heYkxmEqFiZpJh7Zs9L2",
  "key40": "EWmcAZMG7PZHUNd5rM4sxQUX2p7YMtWWHaVHiMFRaTeq7N1eBX3L7pvuP6hV9j8wDuiPKaP6Yjfw7aDejsAx6df"
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
