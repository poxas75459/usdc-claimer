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
    "3BVeGJ3we5evrC1JRZR7sG9VMbXhAuv7TEQjq5hrciAa41qPSq35sP3FWUPRvbt13iXK4ZXhKvcu8yUb9uyzYy3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27QZsFXQu2n3QKgDi4HPnDgCQAbGMQ92E1pTC9dA3BuT7DktFgxRcAgKeBQzrbiuTRgZM49jcUAhmcjSnQNn3qCt",
  "key1": "3qkQgAYmF3ztQC2heKHjTQRnftS5zKcXx67ze7yCshYSZtAjRUHtXVNpJgr1Bg5kdkHYFGzpx12DqFirk7FofDDs",
  "key2": "549H7D3xLimiFV2mRdx9A95HdDLPFtXovM2TsTomQehL7wWFeMXqWs8DGqJ9mGYKtFjJTuUMJPZpRtBpT39vP5tz",
  "key3": "Kp355mvturBE4UzXAnBxQmEhQiHasjaPKfT3R7YZo77dzhszw58mUzEv3XzrdMgCTSDteewAZrNFMcucwRJicbG",
  "key4": "35PkLFiVBPzShNpNDjHhmwZaj2d9gmWgGS1rDR8gNd9RHSDHTSToZYf6ytiHsVt5gp12Yef3i5V735EweAoZY5Pp",
  "key5": "Ux611AFdiKrpLavkhe5aVjcixWAn7oWCYS4DFxYKbe92tsSg3zaChoVUbGMf6gFM4LHY4yx3Gef7dqhyWbzvmYB",
  "key6": "3RMU9YYHBGSrX23QJ6vLdndTe3fPBN9ST39kiMzeXe2KzYhA8sYbgMWSJemjzBwGJ7XqH7MVB6nAHPHdTX7XJ2D7",
  "key7": "4y5jpV6tEcxa71ksJHrMoH9UUT1AJoRTwWAHSjgS1H7wdKHeawfeXKAJoZmaqdnUy2DLaAYunTnKb6Dd4DRxNh3C",
  "key8": "bF2YSk7hx45YENExoXJS1NTf6mCZQ6ZzMdqBg64odAJfQvNzkshaHcM4vqoJXxwq6cmbFuxeuSeexmywn2CCj59",
  "key9": "1MftaUvZJ18CqarM7A5Yd6hvpbDkt5q4NwBeURxM3MzBX1BzDJx4QGrHX7iUudHaH53NYGYXx3hxBNDWBCv7BbE",
  "key10": "53quoxTrkxn2RTpsi7ED5j57YsG12MUewSkYoPseEnUBLEUk7b4THmcDmFcCctyyktZLxFifjzkhsnuRpdvCVEU9",
  "key11": "DLwMXsCkvn8uyUYvcZHCJwksQxy18UcPpjgHER7VRvaCyAb5TCqKykbv3QQ26WLGp3FfLqKbb6DL3HStLTYdUuV",
  "key12": "3gLERMyKeVsFHAc6mYU8vN9d8BTR6vHvt4etxLASSaTVLguJpMWpq2aEcLKdyYMRD4vcbn3xWYuq2ioFPYVxPnZK",
  "key13": "66AMP1oSmMK5jetU7pXzdPe7Pb5eBg1j9dWYXoGjcY3TUW2WhyXKcPRazn46Et74ugv49yGATTSRUNqsRGpPYPYM",
  "key14": "55sWMcyKdQfjCQYGtyWuHkHGhh6ZaEtXRdy25xqJJeygubGgAMAGdJSh87rMTCW72Ua3aD93Y1auZKFQDCNLRpFC",
  "key15": "4uACr8d4xiRGg9bKWASCvGEq8kmtkNtgkVxyx9ow5ZYgwyHZmt9qH1AcVCbEpcsuaVxJEVTwKnv2xhBcEhXfUf62",
  "key16": "66sA9Af3tfVezjzNm38R5VzuVoKG9WTSmdhy9JN7xmivLuGGWaPo7SU1wiiCTBUavXvsTeQUQuLzuuWADjSdX56e",
  "key17": "5j9x1nkuU8veK3CdfyDqMdpUF7zsgpdwY2uBbrjJHDMRxDUu53sRhUgaxcLMaQ2XtaL5qoCsUyka1yM2vp5tCr5g",
  "key18": "3BSW3fHmVsCv8cB7wa1mrV6rG5gwdzBC3uuZ6cMEFipHfc1HYb8RC5cNTvVYJYxsjSRuDjWtcGzDyNLa6NnV9Lc4",
  "key19": "2kB3cMFCzQTEMdmg3h1kssEwYSxaMrgoio2S5kCu6PVUmgUphvUA4uTzyW9FnZAU5ExbGty9jrUNgJRVK6MQfBHE",
  "key20": "YAufM8fAtpnmDL7BbD95RwiL4hwkGeWsoNfDNdGZowBKwGNmTJQnT7NS2P68vPAMtXUKNLbBEHfC9BCnTbM4bUd",
  "key21": "4D5GRiTC2kLYT2ZWkRn7C8ddGdHQ1ocCQhkpsDFfgDgLLrK53bth9X2ATfre8W9UHDvtqY9EpRQ6p9xNpd2kN5v",
  "key22": "SDaMRzfj8FNWz5HmhHuMJ8JkMdW2X3SEuWiQQt4oBZT46Xn1BVkNhvgFPmznPo5v8htLeg1PNtiUeybNiCGodA7",
  "key23": "3vNbPXbb8qQESeWNq9KjFxScsYHsLxcwbvFSaDnbHsWXmLAzbePkCpGsdLmYQxtpzqyCSGJQThKwBxKe1ms685x1",
  "key24": "64ihTFTUgaN3JVugUQaGfHrM5iZuwvHS34D6yAu3cWsuRMRcrF8zqzfSGoh5mJfdsdYL4bvbqicSPhG1rP992fJ7",
  "key25": "NVuxSRLj6F4MyhXbP37WK6LU82XUmQqVk38k4XHyme8jRXBHLMGaEFU2KjtCM1jJmrC2tzymfTRpzwYAhyVwBxY",
  "key26": "JLbGtXcLDp2aHdFiGfipRXAagjFFRaRQiQFBUYAYmFTXrPaPPUdYTmZ3sEq3tXYttqEZYjJLBLAxEUpi2vhgVL8",
  "key27": "4kaPnF3ZdBMHJ7HMG9g21evdk48bNJ4S4iAJCP2yuuEDdmH2XVwetNHxyjj3BkeHnUqWYNenqypjt2LawWpQYpKN",
  "key28": "4K5zrr4tM1JrFZAeKfhDKkBod1aYeE28A6JbTDX7d1UG6QaAb3BDNLaNk38tLg45a8nvyzNcdcVC5TKZs37YZ37r",
  "key29": "5CiNHoGwPNcL8AkwyzC6rmTMzHhLSWaB6WYysGEjUirsVa6y3froLda2oGTLLqepc95NdTNSzyp83rEyXCKT7ZBL",
  "key30": "67JhyaQoi4RZFwJdpHX7Td7AMjVEt8xr4Uyq5AE5TbWKi8dHwwHNoWZaWqBkWYyBc5KWiFiTgMXTv4M2QFBL3R8c",
  "key31": "3qrdNrtAZJnwT3BTBkwt6HwS5wBEHkLETtW2p1JzbxrU4PJ6YnrJCWQ4UUqCnX18C48LP9n8FrN43iFas1Ha8CD",
  "key32": "5yVfxEDWKcKaRAPiJeLKnHnnppX17Da3fB6D1ZE2BSgJF3kJq8mb15qMutT3J2Aft8VSJorT9FL5SEJLW4vwNPXQ"
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
