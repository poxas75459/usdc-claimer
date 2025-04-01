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
    "yhLfrarws862i54Lp6QY8w91kFuEAE7KxgBC9AB2DTA1MNNzcFMXTB2A2KWEKxHFP4G46MKoPRsudQ21Q2KEgCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sB47XrVXuamQMJq7d1okafD618s4UHRLUC7NVJyDqUmKznGwENyVE39fsmhAWkhr4D2nCzqynMK6kLbTSdVTjY2",
  "key1": "5jjvXmN3cnbkzccupa5yMs3rMAjygPurvSWDTfDPzRwQN7ppPkedMxfQ4fnrdWti16Vjv4t8pLL4x1mn5GtkidKQ",
  "key2": "4J1mpD3M8aR3Ao2Qx4WJo6YGvcTT8XGHy7Ky2YPJGVRfnBDPLmu77GiVQ2T64eW1yUXWFvyaAAbBm66o3QtgLrmA",
  "key3": "5q4uoXqVnv6d1UmEkbCurDZvbMMXMHnSDF8f16mGVGxDfRuZYg5fnW5yAJ6SJkQZLvfwwJhjEPktom6HDTXcJrKY",
  "key4": "4WDh6JdpvHFZ1VVzsfyfS7Q1qedCzWubSyabmRSboWgMvSW4iLFW9y6XR4Ly2dham4AwunfsDcfuz9V1oTQYJPhf",
  "key5": "24341J7knao7XL9L1MkaADCcBjyX8UeNuzJGFMBES8TMZDWqVY246iqeP83XYszBTwJAB86eAq43VgR4zg2rMXLR",
  "key6": "4oNLTAKRXMPJ4Fwr93JSyrd8j7uj9aBxJrjCETkYsdd89AaBzenHTPUi8kvHpXfEPP4ppbPurfeRPEfce4oNrrSb",
  "key7": "3Va8Dz3TgWFKeLXYYe5KbGooZ2j13ej2TNeuXLTbThQsr3jofCyztR53EyzkKhw8dXiLUGoJppi4v6xRnnbzTBUN",
  "key8": "4cwRjDLdEVTJkwQAiua7g9UowhFzxWuoVGmEPwhRcBDoHTddd2wed4WBCt6XgeaCDRxWCxBgU7qiRwtTmhxMpurp",
  "key9": "5eWCtg6e62qK5wwfgTvCbqEauf7QxBkgKccFUduRS3nkiEU8u6o8LJRAVcYF4fVUjWpB63qmodnHpGpTeQkvjaJv",
  "key10": "3mdV4wpUQCiSU7z4vxNTmyrqEjT4Ds9HoytJBiKHVsnVPbbm3Dq4Y1tZJ1zkQmc4wJSNTq6GWT4HJ7GF66ABeCbp",
  "key11": "3aWy8Ufcxh3hvByG6K3to7TbvddVNE8kaTsXibPShkyukwAq6V15uQRYMqW9bMbiqXwuRTKymxTi8UzQfGtDKyxg",
  "key12": "62dknCW24NhML2TbCpWWPSvpbtac11sJDLDK9NDmLgpRqZgo527e452b8Jew4bJ2SpduLuJv1XnS1ExGmGRQWTNK",
  "key13": "4pLNYfLdfKDUVZEcV7QoUVt8ctLPjKC2FC6MHKw7QMf3v6huCx5PkQsLFYJo2vhdD4gExUmbhnKtxq6Tw3ax38n6",
  "key14": "2nz9vuWQ9jPy2NUth8eXUcu7Xo5ZuxWzYEHt4bJiuyJZHWwQwTwnBq5PgSsEzCVuxz5sRB7bE1EfYxzhbdxABscF",
  "key15": "5jzrRtJWBwWV1wU3DKNE27wg6F7MQVErY8FnnFQTAK6wncoDT9J94dJhNtgzDywQ6iGW9VMvP8KT59Svg5az7ewm",
  "key16": "mwig7svwnifaBq52Dnqx1doNZMjmjd2akRFnGEoqVWDSMxPcUAfh9iXCP9ZrXpZa1wWxzCvTo9W1hPRmT1TZrdD",
  "key17": "389NKQC7jAR4321HVt2kQt38rrobY4d81MdSb9kPXQ8YbVZeqD2fR4rjdyspywPD1cJgk7E74Y6kZniuJBTkrUzU",
  "key18": "3hp8NEPBjq7uGNpE2RpkBHR4J52Bdtv3BtXsHnBp2groqS6ygPCANbkuHrVdL9aABtnh3Nag9W9nbeNNuScSP2br",
  "key19": "5gd6ENvK3un1AmXUkNEYvPwnr5CNSKCg8DbYvynG1ZCthJEMZXxCZq4KGGwRmnnYwQn1Q1bJbSgUdpCe35x6kB3W",
  "key20": "51rEFUTQqnTpTyceEcwaugUXhbSp69Lp1vmr83s8BDHSVmFYVjZCMf1jo7ubd99rF28jKjWdUE2AjixMb5uFDsdZ",
  "key21": "ycffPNcr7fA3diG6CUdEBgZ8BL9NTmrKSoEQXMs98HYrnnk9GbBnv9FyBBwwHHNNtHC4QiCQhRtEL9QVkrZ2Dxi",
  "key22": "2ixE2R1ek6DNs1i25nQT5vfWRVWzYTmkrUrf6zstNsCkCBhJ3Sxv1GCk4CRmNk1ENg2jbMvgUi3rJKiwA4Gm8Qt4",
  "key23": "3QdVBxcEiSUm6aRLRmxhvgNLJRcBUddgbXruh43oXdLdDvnuwUcXumMYwEptiFJAnkiLuQPedgdE7nubdYRXrewW",
  "key24": "2xrhX71b6siaEA6yGxK4wUT7YoZ7Cbpyt7c4M2VdsVB5PrczqNTgAp2ZyhugDvtHvSuMWFb8Mur7sbqD5EbWW7F8",
  "key25": "2JSuSnM5hRnjonPzRQH7AuBF57qvMZv1KTYs3JWqsfXKJbKrZQApfjcnwmtwN5cBdvy9yeNayFLHpQ2CYZNocw7f",
  "key26": "4FaMkrHotV8qFMtbtg5KiEzoXxNCdbtJcYwSCKf9NqpdXKFHaaxBxXz8tCYn54LPPTBzZkjdeJYCwi7sW2ttcEkn",
  "key27": "SryEritmZ4FgzPep4DVo5w93TwSj9v6f1DUwzCVwKNN3vGZJv89MbM3EcgtyPXCaehaJCD74ug4LB3Mhnur8nHA",
  "key28": "2wo9D54zZW5JzcfbmSmtbYKtdYoBgiUW5R6SNCLKJh4zQqiEouikor42eKDBuPtYXbkF4ZwoAd86JystdbWW9xiq",
  "key29": "2aRWPMr7zKevpAxnhaXLzdkXGVhqUAJUAi7ovAxQBJtxzSfTZfmstYNPTEYQJ25WLKiarVMrJAyLB8PvyuUHcUCh",
  "key30": "4VvEChdHKYvYXaoTagRQVTrtooTHwChVcU617FQbL1SKHM7QmijpyZguvsNb18rssH5qGN4pEzRx7tTLNvp6PciB",
  "key31": "2gGM6jKVSWsoCxBED65DG3Nux9zZnUERA7QqwAfjej1aiPLULbUKAqmVPVRUiVsSFjpbg4y2nhTRqL1JCa9ZpJDH",
  "key32": "vDcaoWXN1BpbLgvJj1zjC8bKUaUghrbnt4Dn1Udhf8NiwGVyh2ruUxwkbiYVdpztwpuCJfLY4B4Eq1owxM67U5m",
  "key33": "3SWRyY5UekfpieNCUU267sNLXTs32oTH2zCTGbzw29etSa3MRomNp2ZivX9S2MmYn4RY6HhwXrnmMxWWBq9ZWy6o",
  "key34": "3NVAy8j2ptqe1ZV22WZDWVSRHjJPEKiBynLSaJeoGUX8QTGFP3mdPSTnNmoeLL8hFzdMRX5kwdTQzZscfW4BPAGS",
  "key35": "3NVzjPVYDCMFP7yBmaL3A2K4XR1hruChm22KtsQN9r2XnNxp1LbhsgPST6Us51fPwhvdC8uUhQs1NiqR69ydbVjs",
  "key36": "5EbroQTeqhczUkt4zq54F4Ee8xLP47ZTh1PNZ4fCc471NpjY7r2cBG573mibUoCnZUhksKfaowwWPWWL8ekFCSNR",
  "key37": "4vGjngtfuzF7sfwvsngG1SwTWQbsyw8YSju5R4ot3F6Nyu5xovu3wySiTYHs12mhkDBYygFMpPrSUah6VhiQ43Ft",
  "key38": "4cY1sSRggrA7iM9GdFWd2wxcqMxfHCPf4cXmp61GG5JNXvy2w1vBPxic3dkiEBZJVjQw4AFeYYcT4cw335a6MgRx",
  "key39": "5e9vkimGSN4kbZSowK94boiSgZsWRAfimb4TFrsaWeqYK4JkweKG6qRPBcs2VUxmJngxFi84xnb4evdXx4quSPSz",
  "key40": "2q3shjz5E5PNyjaCyHWZhPgNMbvxALSjC5UkCrcpYK8cSE7M9P1mNeo1Vmff2sAHWGRKj4TLkTPzPhtbdPF6aoKk",
  "key41": "eXiW1ktJ4UmFnkAAJvPE9Hzh8vS1UTDJ2DX4eSncbPP8UssxBmucMxkkHYaJGj5wPftEfYs4J2Eim7TSvgpLYP5"
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
