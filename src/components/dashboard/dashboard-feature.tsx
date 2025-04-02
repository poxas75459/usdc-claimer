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
    "5FyTkVceVtJwfSVussKAumEE2DV2iUV7VjhXzLmoJxKSCNKmfsq1wwCxAK4CuP2DnsYmgiSskzLNN9QdxwC4S11g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EVKsT7ggFB3QoV6iKhcyjGpXpk3jsio8bE7fywdv9wiS2vRZy5eVv5ij6NbBkr7Uft1PuVzeuPhFKV9K3XLQqE7",
  "key1": "4W53GKNQv2jHRerzkaNu7kG4KLjzxbniWoWaniADaiCe9Q7qFCESwRN6H4oVAS7UTBY7B7caPPpVn5mWpnNz5imb",
  "key2": "1fJV1icihLJLTXmZGSBZHsgLnUhBTZ1bNS1ZeAJAtmBiXvw6UkKQYFvui5Km8Lk6JphURhCTj2f1XwYRyehjUDb",
  "key3": "4qPLoSAyrC2ffEboM5KGjPRgdFC1toSJjo4FgtWpJgcbJBd5SJUQ2z7k6unP4rHMAWFt4KF16cSpUpMdXEbLS9Lk",
  "key4": "5Sji9fMKZx5aGzBwiJK5NLzFRWgWqqcynNBiSWPeiNipKFnoZTraUYJtML4bKHq6sNffH8ttfbKQty1gHnY77WfK",
  "key5": "3mm1Hr5f1XBGkrerDR8YRuE1MT39Q9X9nKh9aPA1Xg2pjHYDMyMWU3htquK98pkDzLxofKAS2Ad78SvRMAFVxUPJ",
  "key6": "44QBzeb3DrRBS7QdnHEFXEPtpc1fJ6oS3jE6epf7PHXgSAix5vAR8U4GCU9R9XHMYAierjw4fhaBmkwgFbajiQin",
  "key7": "2FD2F89yzZquke2rz2fYDtfa3A6YqnVh6JkAiNvZ4TWNQMjeiQa8W5YLtFpQgQR5QVtzS4k6U7qYPnSPf2wZeuhp",
  "key8": "3HXcNF5oZM76QpCtFhDNvX9z63r4iq7bG4meaV2zhyD35xR3a23GYfd3jUwjN52b37ezm8d78NEgoxhYMYLDhwMq",
  "key9": "WfGpG9aUNjB1gQW2CNVfzGwjqLG6RzFz7NeXmjNiAmLQRwjhsQkK8oWWjfrCPHcZyixak939DcRx5KBLyjeDxuA",
  "key10": "Anne7VWouKKkEqVhGBhGRdvQPR7hPT5idQ8p5ZVQJvJ2CEKamXHEVpCuHAp4vvVR1qFAegu1XKvBuDhpXtDDm8v",
  "key11": "DGvkXhUsDqQcxTzuttxHqqDgHxNFvFyvKp3uS34Suk3KL2vfB1WA2pGeWVsL9D8LEjhscTPGwJHSSiK2kJxmDdS",
  "key12": "4V8MyqPLAKwzD2xT7517uRTyHBD5ZzaxuxeuVCM6gjotZXx3Pvuhs7229Un9GjS4egv4s7obTtPVxK5UaxM7dWa9",
  "key13": "uEF1dPnzfVtj3G1spMkYQJcMmQmryV66eBMTT2zcy7rofyfuSgDhCCFBvgSM5d1cEnJ68nd2ob99ec2H8ZuUyUG",
  "key14": "2E3C3xW2HMUVMASGvgYZsnREpY7PbCB3pqkRy9uBwPt2Yc83kp5erWQTKNRrHsRrwnmEFCnqC2qZokgtykx7r54X",
  "key15": "3fx9THiYEpo1LR23bdJA3WdfqwAyJKoGEEdMbdqcWNJwV6trygYbY6riAFH8hHJR6JfuhdA5ptCC9Coxq24ujtK8",
  "key16": "5S2GRJ8ckAVMPnp9qjKf6mtN464qUCj99mtKCMhtX1ujxnP17nAxn4vz4KZ9XUDQcXHJpEfUZEN6ymyCpa69bDdd",
  "key17": "2nggTHF4EaDF4oZBqxBh9SCKBm4mVuwAK32CKa8qc84Z7f4ZzFX2u4ymafBV2UGAfwRNQA6YDDj6UEi9wPufERUx",
  "key18": "51Vvzi1g88HqoDeYdynFBrmfonffgS3KZc2ZgwhVbT44oH8zWFAPt9Cvm4WFA6QUERa9HsHEm4DWPmZmzRnALpuw",
  "key19": "3YVXet4aAL2obLAgJu5LtKFdLnu2ssBSZ2uqW9okERcZcTMvSbPNNp68Vg1t3TqKuUWvE8xJ17CpsUTY1BX63LDG",
  "key20": "2CekEK9MmuzNCL88VJ2ne7c6VcBn2uthH1Wer4kfvzYaqfGmXzakj6M9UEtDQrV5rbqiPzBR91xU6g71gXcpHRPV",
  "key21": "2SZVgUy2VNet6zJ5xUNVPHikf1oqgz3kxnqTRhAYDRNaVFBt7ZSCqxpbMxpYEARBQwweBHXopKUY8nACW8TGbui3",
  "key22": "5YM73eJtCKTF7ujpKkK7n83jHm28VAryHBKevhecc3scbVosSrC7kAUShVQwaDKVex1nqRbbuFKH8YmnAy6C1WF9",
  "key23": "662iiE1PwoGrJGpYZF9QHgy1PoKmURenzgTEd7K5pm9TNBGvUPqE5WeuYGBTwCgMSL6rmoNoPD4uubWXUacm4kuQ",
  "key24": "3sybEyb7rxaAs66gVgpVC7BQ2QbaAJJCwwnN8ae4BTrtyfBFrx3p9bHiUgrUvEy53ycLXoxn2dHiQuKhWHWrGFdX",
  "key25": "aPUAAtmaPEYUgnW8f4ZxDXdNXw1HThS3KASLwWw6Q1kHAGCvRbLNdKAscFLCrLWuZNkyysNFzqbZhypHqLSKauE",
  "key26": "5WkcMr4qX797e1JJfgXdTK9oncLTmQ2xfpTvUDUAGaz1ow8wWPGcz3AZMS4HMTfs12ziQAznbAPTjcgCbnDtpUoW",
  "key27": "29yULKRNrntjAgHAgpLY5iwuZREZ8FiqUrP9tvqfdEdDYSGQoX8tJgVwau6AVyPBUB2rxDvGSRz5fHKTGBmGEFaG",
  "key28": "3hE1kWBHpDTP2N1FgotvfWYgwEFe4cTvTg6GbFFJTdzfXaretww9QRnHDDT5PS2USxukDoFbUDkf533VJpYHy54j",
  "key29": "3gPRVkfq7pZ5scv2WWBfu9PjiFNF1rby5SK6t7QhaoMiidp7W5LVfV1WvNU4gj3XzC9wuGRjcaFR5Uua3j5kwbFD",
  "key30": "vKRhhnFYz2Csbwpg5JHT2xf3AcdCsfiX7DZKRARiygHTtRuobNKAijTs6LCmPLjzRnjKT93sK24d85UQ1wF8JaK",
  "key31": "5httJvFR9uKEcC8AKpqFrcTzUnfu6wsUeqEg1mHuTQbPKeAGPUHCwj1Popb4vzk4yUJN9M7bmaExPWHPmQ6rJR4k",
  "key32": "2fU3RomRjSg1rEaBfvWAjqvFqW4AFGtyLZAmQAun6DvMZMHVkgwR8ockCZvCN45Ltupeici3toy1tkYyM6g1j26e",
  "key33": "5m4vVsgiKwcZFSoGsNvcdfbwzgNDsWjVapiyLqUKyAeJcR6URQChGDg2VNoLEDNZrnKsDPyhKoeqiDJsdYrySWSm",
  "key34": "Za7hRg2aBdPuRKnPJGesT4P1kdcKc1DX4ku6mtzSQQ7izEjpY4R5F6ctwkRMPNz4j1NHbTDwMgHpdauWUCMAnPy",
  "key35": "23ZLjK5TJos2Yd1w3xLgw3YVr45H2Ewoy9CgJZPuQ8SZjZxf5jqw3LPsRT9DEH89xVN56eG6xoKXTFNgtEnVVEcx",
  "key36": "4Np5hfvzxsggud1HNQcXKfnn2wByewRjkEpWab623RBPjBqRHrDmu7V2xNDGvfrQMwVdU9oTwmrLG3WtEJgPKurV",
  "key37": "2x9q3ELtcbD7pNmBqLEPgppnM92WXfiZKFrRcK7jjAZNbSL5net7uvUYSx4hvY3MJUteW4tWWwvmawCYRenz5RdN",
  "key38": "2SPv1sJB4VTQh8fXvX1s8BzrrF4nsPZButVT6HUiEAp8gKxzaMyPD6L5U49RNU2VgtPH2UfQisjpZua6LTy4WeXj",
  "key39": "3ks5UKDNTotPWZt8J2qnhvoWb3GynkUPq1UHye38hnJozVTM8jXBfNUbPrgWEA4J5xkAuj3JELrNjxb1fByWfSu5",
  "key40": "LGrBV6XEijaWBZEfsU4YbLCbR71CxoLBTkBL7YpSdPKLZgsciKA9pqXWedsfBCiGPx8dndmNoYzBDU8rgbmdjqT",
  "key41": "3yM1s5TPq348y9xqEqJnB2hF1Yjf6MZoikGo1wiyDzZ9bVvgsosrSSZoDiuLGAecRzey4Ta3bLgwHToMtAjeNTtW"
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
