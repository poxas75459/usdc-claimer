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
    "3VyHzAqhMWvZiXL7z7YFSWdbvgPi6x8QtoGJ3D1xU72rru4PXMj7Tc9LcfMSob15dKUh8M7yUwHu4pdQuVNteKDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sgcJKMkm1MgyDhex6hA1sQfUXLhnEtXo56os2zb1g2NLiF92e6SUDmzGvSDRzdWdX2MT8M3TFmrQQc6gnoDXiX1",
  "key1": "fEdtwrSSp1CAX3kshTuiSKDSSJ1GxMs4x7AdQgh3vwj29YcDobzv6bXaSr7G3pFnW66VLKYky278BkKsAWxezAL",
  "key2": "3FfxA8Jv4nJ793HstgYe1yvfpdXyGvGamSvt9nxFthazxQxT9ZV65wfshFDnNxAbDtQ4qSEPjj4B4tE1YGeozfUq",
  "key3": "5QaKiNQxqShriWaobdQDTqQiV3MuiwFSw3qVkSnYRZwEPmuTqJGpKSXzUwG8Lna7tfmEDbZtocDNshXo3T8TVfiR",
  "key4": "45uGABAj9zKpu7qDpvvimuo121HgLpLWxdfNurT21Sc7n9Zps6mAFGak6q8M7ww9CPUgzacFr8i6avpZ1Vv4MLo6",
  "key5": "4TAbhLGsvMxjJ36z1KbeXGF3yrTDNzBiuJctjNMmxkNWc63JmzZdrxHmLS4XjhAm2VyiqNi9amJBKnEY7sJRKovC",
  "key6": "5Z2QpPftQ7uPXzsfWQ9HYBgKj59eGXrZ6p3kLLWjvZcNopsk51R3Kn3CdaQqmWxWk2jKdiEArCLFHXHVbqbG5U6R",
  "key7": "5WiwYvrFPUkPAfZfDsB87CWn9oUwdgcK817weX5WvpunVqSm6Cb5WGKnHZpCwGuC6mcEphPEiKbqoVcycQePDAvg",
  "key8": "d53QKgqRQSoLURaS8yQStAuu2mkAMVyhhLg49j6Ap37AByTtCh84J5Bg24HNFMdCR9uX4PaRckQndf7NFUwLqBi",
  "key9": "39nNRuNrm8zLV87rmjXQHNqeBnitSgdfjFA4YAjFWekfdYYKMBvCJJ8F5hVgFimWf7KPJ6KtyYzkceFBSdWMuMJ5",
  "key10": "3qkf99ejpNWwQt5amhmoCg4BCr8ncAeyGCeD7VXKQXnreRXtSNNtLAByVnzY7EYAeV8MM85F7VFPHhsnZawWucnu",
  "key11": "ZVVS3Uo4iuFkdAyBekXoPYwpYWSRxZkxURSJRWRpaMLxhNbK3vmZGDAvWnvzVfmU6Xy5FbUZf6p4D4YGV5beNGb",
  "key12": "56LkQPKYoky3pevBbG1b2zysE9xF1Co4j9MwnJbma7P1uUrbXet8cFhSPc5DNjc9mUGJwkRM9VwPAaAp1Z48aNBJ",
  "key13": "LCbqYagGavkzmaLwLWQiRCLiUb4Xkt76rTTkaxJAfVw1Jdu4dDxQ4CmF5tSDCbiL3sLMTwKCM3GQ3DE8HU6dMmJ",
  "key14": "4jcGrNQPpKTmAB4uQ19EBPaz5cUbqrS5LjtCd6hGT5ADTGPcQkb74ke8umcYTg1HaLnxh6SLK4cVU8kCXq8J5ijW",
  "key15": "3yKiBjttKKuUm4VzdhBd5X42Mb6TUiRZQcv3euYzPpQvTZ3UV7npGwv2Z85xrWdqCpcnMF39oep8tovkvoyRPDgr",
  "key16": "5tZ9yCqVcm95UWmentPE4P33oyc9GgkG3ywpa3xTTYuhfmGzQn3unjMXmXKmXiFZgBUYVPNkMsiasTMrtiEaA1ry",
  "key17": "65bNcSXbqwckdKfWuGGCeHUx9ESsF6WMpwEZNEYUUDkhgxUXEL4iTBNR9VUwJCJ8vLtd8YPHt1gXZ7hPakNkPQVF",
  "key18": "41MAUUSHz8iSeBsVmiXQ3zktCx2W8DqdrJU7oKE4bjUZPqiiFwFcwf5wQtUby17FAff781hY9C2HgHEkybiP74GM",
  "key19": "3V4a2jvPgZ1rKXPfk8paeHyYxfjepcASVdoXDCmNM3XWnwjGDUx6PcC2LgTFv5E2HDq3Cs2EdZh9XRoAGzhhdVi",
  "key20": "2H4AX1T5XnDtJtpZLHoWWALHmy7mizS1bmZ8b4hnVUVgSBiU6DGBcMVmFyKYjetTWe8g77LH3sL93BAN65GgPr4b",
  "key21": "26iaR1shBrBcc5Kyy2BGTGgp93SYZDojSYxFe2RcQa1r5e7s33FUzRunKfAYT6LckRwJsWG92cUYuF1Td1whY36G",
  "key22": "2RgkLTtK5op1oit2ZtBJwJYbon9AsVL5Z2JsazZEfm9Xay7ayMb2RjKQvDZmKCHwCmMfAJNfvKwANZBFTtuNuNfL",
  "key23": "3u4jvxUF5jo2PnDPxJjEw4pSeKTAKbuhKFYUSno3fwSkEZqH7JcT5yHDBB9cA8An2wmqdyfzVLarpdzoDvpAaJH",
  "key24": "4mGAawzsGBNZbf5jBcTnsFKTjTzKLEoMdJKjGfBxH81upE234EvXrhUyqAasx9b8E12VMJXq7zdtKWp8xcR6mCKs",
  "key25": "3JH9Vc283KignedAhNJz7wZmuRhifcUEFes7yHvNwbZA1Yty5i8tNAagrNFdmPhhRQhhHRwdW2WPNt1xAcDPceaH",
  "key26": "2ASdMfR5jqKp4JqzmCQg6GZDzpZ6odxfSRa5CtMM3FUUReUdeo93xnip3aJSgF9BNwNDD3BHbTrBH8zS23hVFnBq",
  "key27": "3jUevnVujr2jVG4Zaarx45Q5XLGEmax1rAH4BQ3jPLGtpyCaWXEzQj4234JAgtnJe3BhVf8VYGciJupecaiaYq2f",
  "key28": "4vhDfuKFjNgQdtbSeurVeuj824GSKZUNBb5yeJfGmh9Uij2Mevm53qbVA9zUQ8MA3Mz6zwuC4b7UVpWNGGufxSTN",
  "key29": "34MehYcuwBuPTZdUPA7AL3xJBnNev7xM7SPPgSnFgbF2cgy9bQCYDnS11fZorJqtniqiDPbXgeKd1FHtFLQpJBnd",
  "key30": "3cSfAeNfDhR8f3J3VgtSoCAcQgLUHkwyKJhoXu8d6bAzmdmBD9AQzfEwdtmxzefZ9tRGwE8QHEsUu87ZcEDVvYNy",
  "key31": "3F4U3FyayryAXhyHx5z6cJm8dCDqQG8ycaWjHaqVkjwmEV14FdzwQW8RYzY1oewHw9ofSczLCHZqm9DRrpC9vveK",
  "key32": "3fcnhv96DmCgGM9suDzYW1pucFRjBwRfRkFRxSEGNT1BaZixgoYuQdB4xRGoUDGnbPmFejZqgjAneLNbbhMBPAX",
  "key33": "kjsvbaEFpbnkdp5H3SUPWjJujXoJmWahCwFKgE8LW2gKqWYiuM8zYXw373jTBfp84bZ89iKY3x8oazfwWjtQJPe",
  "key34": "4igKtZqG5jgzDKvwQDBNJ68qohQxrvdcwRX9pDc3cezW4oQ1eSJCaSJdzTbpvBcAKrmVZuGXNGL1zbRrGqNJSzJd",
  "key35": "4v98Dbsjryr4TBMGDNyJMECEeMAHknyv4CdARBaXogE3SaZ2QtbZQktfy9pMj61cFxKqc7SGwZw1dK75kNqJ3pfv",
  "key36": "5pJfnG2Q6WU121gj7VUooJCVgV3ZzGc2ofFFNBJo1PuKPCqwgJ6Bj8T84LYeb7NDBtWXABb4Cbqc98RUvkpQWzYb",
  "key37": "5v5PCjC266odeCae5b3zvwP2Wp8prbKEe5FkfwTBUQiByx3GWaFG5w9oPsgJB4wuaLFRW2VFm7aCj6SMxUQR1Rci",
  "key38": "9EQ1Sm3pWzNpRvMUDiddFtzKD2QmsYQ9o3pddvSVF139esxis1a3ig7maKVHompRXo35voZikL5nqh9ja5p53Xr",
  "key39": "63XUkoKm2mrBaCp7pxNn7Ca6s7hfybpdNzExjb1tr59Q919cmWSVD5Uzr91BVXuqaZKZDXabZbz3DBk4R7q9G3Bu",
  "key40": "3Pci1KNfHijRqr2gZPnefe1mvPwanLSu5y3CmAPrBGFDqWCkPSqkDNvgazUC36ivhKGHYtDCXZ4ZipYANshr3JUt",
  "key41": "3dH6FzyqMWKZcKy4CmXxTLxHRQrwqtPVTX5euTJygcQEyzsiBwDg1PZicoifmam7v34btBk13XqC8WF1NC7xoazv",
  "key42": "3tyj2nVLofpMbgXdRuDd8T421LqmvdpY7SeeSAbc9hVVHWWpFMZCzVws6o9rnjCpK25xtd2pN1E3Yn13EL47nWpx",
  "key43": "3i2GF9VhaDQRs9xYoyefa64vxgWLZpWLY1biyEND7V7Gtwfh2DSFJ1XUNnskmn15FXJqJsoBWUT5xh9pnu9qeCnv",
  "key44": "23c4SsWHipVNBhmJrHtfbNqFLd1Qx2HTA4ECwn8t1SNhezqdv7a13N4X644kXCcma2zj1vFyq5QG6Y8SmCk2oKUn",
  "key45": "2rB2VX1n73od6d6rh96bBJ8QPnJLUf9dg8BWmGgHZEYwhPD6AwjYpz87f7xAaQS1c5Zw9wP6jPUPLTHskBLADTDg"
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
