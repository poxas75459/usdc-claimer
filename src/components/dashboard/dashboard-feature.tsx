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
    "3913R8iDHhKBpsTbAEeJk1TvUNjuCcfNmY1UDqUsGJUauuLXjMyWWBAc6vy6Lj3bXJvxqUYHSrosvXSa9gEN6MV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65iV8qkrTvuEEt8tUAYmDJhQ2unQcDyosKdzHfmXR9ACqw3jm4qrRnqMj2EBBhBU865vAwENLiYLgNyuDYqxCKLv",
  "key1": "2sJcG1FWcLR3hrruDFcGArwW4zG2PJB6YrkWN2U27AGiiXjuGAUbyqvubjtQwNivmBV927LKtKbvVPNPEuoRhWb5",
  "key2": "4Fbwa9p2kAt4hbLXSNugyj4ATjjHKnPQxyCPF8YHM13FGDVTBrNztXwkKtfKNY6KVUkiWAUSDNfWiEb73MLtazxj",
  "key3": "3QtWdfUxDg4uZyXmXNYed9iRyz5dmHjV2L1j8UwFRcSzwvTcLkEyn7ySRuocjtWnsPB6rRChgFJmRUyjTg2yNJK7",
  "key4": "59AQLjwqknYXhZ3FU7zWGTPBURATvLF6TB7Q2JPPHRWsUbk1FqCm8ovQHEpAiME3r8Lhu7LaTARe7wqizLdauttu",
  "key5": "2yvvzwSG3iifpAZPg4Dc35TioikzUQuAYWa87zNNnoXy9kiYU4m8ZuKkM67Z28GsWbx6iwfsetUFxEQKJPTEGnJo",
  "key6": "5xAJPff6FEPpDQwTiMqYHkJw5BEQRVi59Xc2kRYV47uuegHTywasASrPXDjZQxFjZo5hqVXgYH47zW25wQJKLKwb",
  "key7": "48QQu48iQwVykmek13sqVMqh8MXrtDnjNPkgeokmQWDJeMXhrW2HdxYvdaFWZuKaRGh33Xk6QgxY6CFErquEvkaw",
  "key8": "5p5jgCjQb5wN1pbteW6g5jyrDwqzjiGcNpCPaiHKhPZYGSLCXSPFPUx6H6cFFXdaQqsFprL2cTmbbzFQHYU8f5pc",
  "key9": "8SAfEVj3YZjmaHgbxpCPRvmhgCXtPgEsgoCMoSVtGZ4xJm1yEtk2LWWEWCLhnXdLitkn7FN9HCVa6kLJRRMA1QA",
  "key10": "4ZJhdH6XCTUe7ULfz8vFQHUck1G2k4rQseKF6VhfRczmb6eGEWKgLFaSwHdYKabHMRdJZ3gR1Xw9j58AbmuihCv9",
  "key11": "8qxbSeXPoLNEv4K27VvDSomgXXkLtoEUJZYz12XzxKYnVdbaXmcA5hRgWmARte6ZyBh6WGiSi4reJrCRo9W29GK",
  "key12": "2eJN4QmK5rEAsbSVsvNUxV1SvYCaw6jovEURH4HGfVhbAKFHZN6T8cQhWJbTwz6CjgqytLDHN6DXJJDBkMpvKrEt",
  "key13": "4DDn2C1VWuRrM9in9aCY6y92cA6oY1fkQ7fdu4dP5jwr7WNRG54QHnT1aMf2uQ4dtKgSBSrcLSDDcwBgoUPfFizY",
  "key14": "5n7zfANqbjdNNxTcd5HptkfLCkoaJfhJiavqjdTXWgLoLoYxMdwtzwnccSRwqqaYWiTHhhdX5HZLrAZft9K5Vg77",
  "key15": "5tzTpWBu2Uwmi1vVtQ6LYkfu56ict2mF6SRgiqkEPRTMqEmEMWA77FpmeCeULEP6tQVhTyLhjVbv5cj1MXFTq3yi",
  "key16": "5HV2XeHZWLyoAMHPcx2hZ9McoSqrLy7FdhBSRJqTqSjejgNUTzHgNoVweQMSGKceSSWrZ4NuBYpxuMRpj6uH2kdv",
  "key17": "37dj6UXv2g6bFrMD4cBUCcfP8r9TmNP9movzDUBrtPM5xhoYKzLHKn3QKUXehcyL6a6gz1J2Db8WfAEauBX1rD2r",
  "key18": "4WP6iYs3UmLoUUQ47u1psw9jJBaAbjCtPnTnNS3uxursWnxo6uwoJHsUQcfKmfrUoR928YYfoye9ipoBwg7xdWrk",
  "key19": "5QXwBgNVcwttmsi8rWDpvidtJdUicfwv4PcVNT64945ntrakgHFpZTmsFLGi4TbjtsjjbDRp89mUWQaQs3bhThWL",
  "key20": "wbiiqNWGNhCW7BBSHtKg7hFN727itcHKp8qgbrQ8zUGzWxsfJrx4oNsuFKUvuxV61AcBRY5AKrzL2H1pQ7sGdg9",
  "key21": "x31r2AK9H5hNRnUR1V9M7qDj93xRB3rLjcXFrztUSsyEqPH5QjniLU1wKUL1bwNf8bEamUJcYC9KXARQiPC9Pnd",
  "key22": "E1niDiP8vNSW12WPTVazvNZohLTk3DTnwPCScZAhmiyXGGMLnp2TWCpUSQTSEURtEC3wk88s8znWEgGeiZcj7Hs",
  "key23": "bb8utdQ63pnjnBeRkeo3ye8Rr8oXBjNSVmc3t5E9dv9AjkHXF9GDX67YcQpwBfyDEobhvJvzzShj7htjgi9oh7p",
  "key24": "3AxLARvnXXxbWZktmyC5D4SxCaZUA4Gy4WbshZ8dqU4GmpGUqhH6NS3bKBLqxRXGuwtKkarCnm6R1gt4zhZUt1cW",
  "key25": "hG2FssYxGpZfjqjNpQ4Xd4NrTztYJsWKQaeb1FLkRgY4RTT1v9j3EK5HWXP14DZxduqZkFGZKD44YebxyLKXYH1",
  "key26": "5Wm6Js6UxMV46tBVngfRnM876JDwhqpB6EoDYvuVVmSG8nwcunAgiA3C2BzgKkQjVPL6eTm3zb9JPAzkQGRVi6QC",
  "key27": "5wccUufsmXzuhCmxCEeEUF2EdfGPmkqGGhsSX5EQX5TYcRLADCsswoLESnekvAnTc3C8WPiwCoJvoZTrpezUNqz",
  "key28": "5L6Di3rHPGAUjv6zPxookhhsQmHPvsYSB1n1hqCHGAzsLyCetnqrELR3Dwag66z4S44k9GgbmCCRB9uvNHmZe19c",
  "key29": "2CaC9fbdD26ZF3Xq39834BE8c7VLgxZwLh2RuYP8SQ7dZhPXNTZnkZQc72P3sFA5aUGtxUywhfZrY6SNBkQ6HHk1",
  "key30": "4QVg2tNmtYTj7RudufRr1GWJMcbKgZMAGgyXTrXnda8VrfnnjYLygydvTmk1xMtjQcjhEYu1wPmw5nptv8ZaMVTj",
  "key31": "4QbAJ6Wq9Yw2CzrKk6iWNgLHxFqMPjHXtze75LEHysLvjqswCpBgr9r5DcEfRmugSHqcqnsfQvAmrx9L7rnAYTM",
  "key32": "uLPmPXCddPxGAgsffThQPu6ARxfcjn9gT9i7mrjFgF78q86GDp7zGBCVvQTYeTWgtNuZtawKtygso5NTd47qsSd",
  "key33": "73zsERb58hdgTbYoiPJt8pCcDHqBTRyVzw99peynpVRmHn7MJ3tLbF2yFnCihuYH87SLWmFkmeWKqgbyXUqbfTW",
  "key34": "44kjq3u7zdtVByuQQjBZdv9Fhwz1XgVmMGLurz9vf4t9ruoX4iAwjDZY7Wkc1oHHqLfPgVSCcDYuZtzM3ygtccDG",
  "key35": "5ugS3BAPQSgcji7N621ZEVP6Buf9u8RwZicWAzCn2MArZiVrWPXHeisvdAkVX6rdR8JiY2MhVmzyGeqkR42EJcwd",
  "key36": "2yyFSTzZigqdX4GxRCtnNByo6yQ9BodRVsxxKtA1ovv9dESJc4zTCJ1t5RtGPTJwu6hasQ5AzLUWEBpR8CprRKyE",
  "key37": "5rjHAR5K2QyqeW9kFppZX7j73sUq9dnbzNBbpJsq2gDRoiB11rW729o85S8UxBEYTMRTZnAzKEzZjmN7EtYGpisU",
  "key38": "66iUKSVx6giUiWKrVMGGCrfXjXuKAezKgcnuCQDg7P7RL3EuCKC68Q1LE911RRZ14RRLPnBTeCmMxUNbQoLiGjWs",
  "key39": "2QnDLAK9iXJc68ggkFZQsxP3N3PJYJieCWRD7fbBsn7BwNQ6xB8Y8qZPZg7WQZHDK3bCv9NWzQinuDW271i1FX2H",
  "key40": "3cYQHPDRDWLkBhBqSNiSJZzp3BYQYDRHjaxzLBVi4VpFw9U3iRRFWDkw1WnLeztwxbA6XW1uwxVEAJRo6gQHr7uT",
  "key41": "gn1kNH37r9Wqgdnx6FgMrsoAByq41WmdZVEWWBYdwqTyPtcTyLa4Ha9YyhBEoribXpJagPrLYm4FiVVY3pb6VHV",
  "key42": "3W3LmZDVPKsARjxcwBCxQ8Q9RN8xeo8JwbwDP2VzeffbfruTaxWSKJUqHmp2Xq6K7WMYtWXvbtBBuVKPhYR6NzRj",
  "key43": "5c2VBmkcoQBVG9pTc4eezNf8Hubp8grPF2QHK4PFnypzBRpxMzCnTyZiF42pajeqUJdvn5dSJEyGEdTXfM2R3dVq",
  "key44": "4Et49RqNwwd4TY5oiEdCw81q8cZUwpTTJ9hsK4JWX87majz97YVUCeKpBYob6gMFAfviB2pE4icaFjaqymACb5V8",
  "key45": "5foVP6tQr3aQ15VCGQ9fcCw39Z78A6WdPNirvjQACffcMrAKFsodQhcRsM9YJBS4vMceeaQLmJzwmD1WQmntP4hW",
  "key46": "3SnK9Y7BEv52qCULekRXrw8uYQ6U2RJmoFyTS48Auq6FVNya7Fow6pwd9yejaxKjs1GKyEznkN2bXk2r8y6GuqNu",
  "key47": "aC7Rgrvb1agXqitXag2ivRd5F6eic9BKdAq5XxK7zRbvMBjxfPVky7ryxWDJzm2qiEx7phX2ZuTaQdfwaxBnanD",
  "key48": "5abdVVT6X3wKdG4fPfLj6hdEbzjsYaeEJGYtqeuryvckzNtDmhcFwiKv665t3A4N5w9dDS31FGpkDRdwtCPVdRFv",
  "key49": "2KoTWTBuBbKB1qeW8GDpeVVzBgupHcHuue4b9vQB95BqfvNfPqreTFFXPtXcuK45FNerYo6sy3xg379stFkhPkp6"
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
