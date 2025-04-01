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
    "4Y3eJM92YkJdeP4CdSB2sQSnu5MTdnhVTZAZgEmPzGkPGk89CpmsgPjdSK4T1RoiER1SSbSwvMqSgna5WzNuz9Jo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmVvCLNvgdJ3jKRsnrTHbBoAxF9i4muRJDfNhpzXxvAMs3TUDBimA2BdE4QXjBwubfGfS7R6vgAubD2YpM3iknf",
  "key1": "4mjNVLzdbpwkEZN7seWJaiGAhAXLAdFWmSezVQ7dbv4jdmpn1yqZWfqWgWQTrPkciUFhoMPP8fKfVV4CvEfJJ2Fc",
  "key2": "4kmfacVM2yx7tExzYYCpNJruNTvCyw9iPYpWfu771SgbgGqzeJMXdhwvDfdFxfbxoCDvRfqXA6frdGsFxEogkwQx",
  "key3": "9s1bxoFZYzofS2kRGsjZ4uaBm8RNWigPbV4Cn6CYCDg4GNurchGoEMh9h7HuVaZvUXwZhbCcAwgvo5S78bkieBj",
  "key4": "3CkNoGvi4J46fKu2gVdaenk8KbULg5xkgLw8JqvN4isK1Y6qmk4ZfehtQK6PSSm3GXmmx3oPkBRqNiQMnNxbhk56",
  "key5": "3xKSFTgyAshrKchsfk7NdLiY63ABTc7XMcDmqZ9FNWCMC7yKmV8YLF3iaKovvXTmZinaf4zfsSKbRCpRKz8NzF14",
  "key6": "5JwCvDuFRrCEuKk2Zo3A7422YCzoomR1kN6Dhbh9txDtCRH4bujdyGB6moggKhbnC9LDjDnC4UKGWUfb9CYqemw1",
  "key7": "2dZr8s4vxFkAQ7EhVU4p9Q1oJ3LPgdu9rNzj2K96VzEYeGkMzm4aM6dJrADnDRqXJKQbXhbd6jfK5TRpfN9kJN61",
  "key8": "5K78cED7KSo7aTS2UJHrAPsr4bfJzTxJmzLkWzREUcpiECZKEjkxy5fe4vxWJrx3e36fBmp2Roy7m4y2Zd7ruBDn",
  "key9": "uf4eFCmn7EEnGf9Zw9TMyujaBgwhtqxpg1kjUZMgEFxP7VK8Q251RADKDvsuwVJNEuEhUGootLgik1Lo99fGW3w",
  "key10": "3TQiizme8Wi8Unf2w4rAs4DpbEeXKvVuAAimsPHTXKbvqsMzN3wGi4NFGzCwvczr4qUqHEpnbaNrhMuK46o23azE",
  "key11": "39i2rKGNXLzpQBesVACWnLXnQFk8KbbZg4rTd345d5LbrRvpoJxXaEM9ootTxySMz4vrLwqdJ2QBK4u2qvaWRF8p",
  "key12": "Nf9xCHE6rj44deEh88tKykLqt4y68yDYVcw5NoebHi2G5yTttzrdfbT1XX8qRq1QQnYmon7Yu1eoDiXo5TeJpKS",
  "key13": "wqXZc6D81HSYzxCSuEVqHrrhkVDn3DJcKQ8N8upcmQ3CswaQkEWfRjFrRo5z7vHURrxLMMx5FS6Gy8yEAwpqbcr",
  "key14": "27VgtBxf7JHaHB52byWG84zobBw1aySSGzg2DxanMbVubi9hophEZyxhq82LGjCDoZkGuMya3KCNsURTTT9rWzTs",
  "key15": "QABB7mZoWeLyVULrnJFh4M3QiSCRMTgEWthWPUNuLvwXsbbFacW2gqywHYqHkD8RwhHfSayaBRkcnZk55GSFJBz",
  "key16": "5GWEFdfZCnP2ezzvwxafuhKSqfiCzc4Zsaqj23aR1QVkSXquLV8kAoqAGWpbqTS1WXBmoQPDaQXNtXCBLhcPDzip",
  "key17": "61zh3tfDFHre8wxMFKMppufbvm6R5G6wq2F5TKLWThEbgDe2LEDzdYYGJ7SASgxgiK9J1WZ82SFkzYtKeqsbnaZs",
  "key18": "3QX61T7f64WDTVWAyiKXcJuP65nNfF16WkUcRavfcFhpSotKBBSU3xJ2e6XJxTXAa7NNeJtaQC118ydU54Qa17gn",
  "key19": "3DuJiWD68LNgK1pSLxMLtyFUGNaztv3wY78fCHeCHCxUbGwunBDsFgAVPKpiPokWxcPQr8HSFF2CisE74pb28725",
  "key20": "3vc1A4q4YL437Du5WwDjm9LJijKTu3BCPB5yv24gjcJaU6dkdvfo6JSkyUyHGh75KRYKYDw5tKyYL7dfpdkf3AT",
  "key21": "bV3vDRm5CjZgr7GmtcnwrPxqQce4eqBShtd5R53sLyuF5Q6ehHbRgXmPLdfKphUj3NpnfAePXU71CnT6juX18BV",
  "key22": "5JBb4sm9idmAhfA4rYxcikGHV4gasBm1gRLCBXKV6j3rXri8mFZSbhT1LidoBdiYhup1Dw9pbFGpyf1kVAeZSwXM",
  "key23": "Dj2fvaJHKNjJ9rKGkFwG1TYHQKripbbyKbjizQ5aSDJoEbhPn6SgxbwnqaFYnS2yEtxRTaFYL2ks2z9jBjXtNpT",
  "key24": "3QobtW95DbwFFFvtXUcKBizDYJ1PWu4wLrGV9cRhcvfGgy2FPy3KbFiwMEvrrWsqrkRPrk53AW3Y5oYWijgPNwsq",
  "key25": "4voFxqXzLNrLVHkn5ToMetqBq4AnEVdTtoRXwU9NDnmFMrkXa2Jb6bzVCDK8AYwAC8Jkpg4UiwGtRA7kJ7hXD8Zr",
  "key26": "SboUruiEd7yWjmA78fP4vpqwn89n34rqr5rMJxojovBF2Ak6dLH2eFxyXPLxvA5nBTecwYJAzSJTJ3J4EdjDrq2",
  "key27": "4hQ2RQqMt5n7S8ZY2S7zKbmWq7U4FMNzqKZXzW7CGMPWtrSpw4h1Y1SbxqEYCUw5Gpji6uTRJAZ4LjhDCEmNUbrp",
  "key28": "HuZL5Bxoh24JULS5ZxXBF2CHKXwLCxopmiTx6tV2rahFAWryEVTrZRnDVQGbTDgekH7kZmopdSX8p6WzVeKGDNC",
  "key29": "4pxkHKfcs9RNixV56J16kUP2rPaSMPNkaYvASkR7aQXK1omXzmYggUFT1B8jKp3SZxQvghgFvjey3VnVk1JfsD5y",
  "key30": "a7mSZ6PSvg9RVkKP6ATG6H8VoWk9oEvghGh5HacnZF9SarxbjfL3bWNZ8255Yks3yAz3Dmtk85WDYeL61bPPoES",
  "key31": "2kxcURqV2E8doLGYWehbSiK24kJiw2GhH4LChDjZBhzGZbCfrJikKEawbxUrV2ojJPgVCkNDRLSKpuooThQtuduB",
  "key32": "344Fr9UrcAMjz6VaDZVaupizundxYHfHLNEHUEhi1VfFt6qY7kpnGaS4e2wWEiaHSEo96rNofSo9zRLAGZ6C9sAw",
  "key33": "4cWu8hAZuzSHojAsZvuZKywS6h5BCXgwThNfR883Daecfxcfc4rdg2aV5V8CLLrUV4abwFnYv6sPRnEhv9Nh9uyM",
  "key34": "EzCvvTq3k83TNpw4unuCEVhuTFhUS27wUyHrNpCbppEwEsg4VqJ8AQYNQm1UWVCMaT2wkqVAkHgf6w1AkRbvpBY",
  "key35": "2gLXrUaNuxK65TxP4jjMLGEXeU7fSqsXy8CFZkX3BVKKP3mPJubbmGC7Xy1JN931R782TdEyDQm5TAsgf9WMhmmB",
  "key36": "2hzq78SgrUmd6564Jn9CyowEGFDmR73gCmC9JyczN4FPRh6u4srryvyZEuqbMgCL9mAWUBLozAKm3MQPAJ3wSo1A"
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
