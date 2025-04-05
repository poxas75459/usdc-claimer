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
    "2494s5ouWp9ybdwBHtWqQ9xnzMvsWHY5U3PJLhQLveXGjYVW4T7i3gfdLRzbxk1BxMnKe5EXGdX3KtX4M9whExqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VeTQ5YEr5neNNyDmVYVXkJR2Uz1ZAWJnp46zyxeHaz9cTL6tQUgwGDeort1h62m8QUjXp9rKyqfRQSZbNNT5eMJ",
  "key1": "2NT2df69RKa3ArAFZJ2nzQuTGr22Ecr9sPMnx7MJzTAz4EXR7Me3cFK2Rjtrhp2jHcbjGfp9gogjj2zohJHKjM5V",
  "key2": "ZyZGmwqXpSaCBqNnZx8SVkiGaNQpVcbLXTNwejJfZBZddWi2s8DxeH2s9A78rRTPvMrEZ73CzM1pKYbBAvkqRz1",
  "key3": "sPQeadSjFy2N4gw4mHbVNQ6h3Y2kWvpnoqDnVnjrj619QGyUW8qb63zdFdc54YXEBSr89nZCQVyvcs6XqBGnMzp",
  "key4": "59XqxN3TqKK9JeEQXZnmEV51BWhnxex345YDjHYomb6LtqMCR1iqcPwc2Nj5ZMEpBX6irxaCGtgvqZRqwb9D2xQv",
  "key5": "5UMjx8sGmb8H6qRKdDgeyHT6GEH1NYMuzGQm5LQUBfiuv9s4bD3xyy6jig2mMEAFD7kWAdJhjnPrKmBvtypBRh86",
  "key6": "4QMKehrRwmzVwQRbN5hv1qDfzkvh4DeEVXt1eoZBDT7LUdus8H5NGDTbC75zPefKCLYBdptGXH2rgksSAT7BEL4g",
  "key7": "JK7nRghK6s9G6kac1iUiSmV5a8Sr1STk3PUrfw214nPNcD45ZdpbGFSDujzZH1cYFMnyktfrv3sVTqpvBF7aS4y",
  "key8": "3Cb3pafvvcbX2CEvDFraJNR9qe1M3Kd9JGuhBp3tsjS65Bc71WvfNmbArVCUV8RLfqD5FC3N56RBGmoNgGxUTGKX",
  "key9": "yNRsrQEidV7KznSvEeEzfXtU1XBBratPkRLaUGFSr8F7z4xFtKd4tmxE6LxFWpx942u9SFy4jHsjiB5wkx7r8ve",
  "key10": "2oJTfcBWHfoKPuraiW6PUUSB5gsovNxwfg3Qs6v1BJBSEbJWT6ERujiPG26tCFAxeEaqTFMwg1cEYt1Jp5q5YSoB",
  "key11": "gQFQ9CPsgBqSwTfV3GaD2MXjoXhYC99gz9hxraanUGTfg9CPvcp6y2zTWoT6efCRBs2gXmC9CQo4WarBzf9JRFy",
  "key12": "v1gwknkQoeaCvXZQUmZW22TocVLSTrV8NXjWTdFHtocjTELGAdp2d6TXZ5bRi7JUVHRU9ye6EVRrDKK8eYp4Ufw",
  "key13": "2PKKKLZfge8v2KkhdSnzYhGuxTzpdhexa1oZpPLFrVS91JTA6fesyhPi9p1hxWQUW2vqBtqidHJBphSqkL8ap3jv",
  "key14": "2bU77nmxECyeacaeUcUdK1GroHiB62TG2EZdJ9SWart4eXvLfAN4DWftekVT8CWsUyNUxxBZmtg7HP8kEu3bVVL8",
  "key15": "5GBCvULBpMoZCfLJEeimaHuoqgAztx2Qzn9jo7dz5cJe8LB7zm7Ug7cjRAPoL1BZ4m4vQVR7A55x9fpzafpGbAKr",
  "key16": "4TJTFmuRiJNHC5epCMAGEPHP6YRkyP1FBou8cZrXJNEzkENQiAf8g1xTikivXFBkTUcL63NmR6Gium8sSi6nc6aE",
  "key17": "4ZYLb2bYZJRAbsRgiqTqAiRuDFJW8KxSWW9uruKTjGdj2uypQSPcTvM5Xpqpcf9uxu9rBvfYoMDcmWB8PrwHuSfu",
  "key18": "38VQ9w7bqkeR4Yy7oa62eRmzuJdZPgwYv2cQ382TqVBjDpLyLzPppdPiYqTNnT4aa3BVT7onk2rK8MLn2Qerb1hP",
  "key19": "1vPPgGVD6sc3tgfQqPBSWdTPddDkMvYWvgpeU22vNM5rAHja1SEpSpjXegABVPAyy7WpEnGW8usZwPRYEWgYEAt",
  "key20": "2zdUVeuCorWiv8bbNracKRfL1p3rxnDJuiTm2XZocPXrhMisGegdGsVU19gdmtQ9HeBVMz5vZZLUCmbKzLPHYFvQ",
  "key21": "UduBxvpgyu6Kqy9kQxgqr72WTJ7ibEv4NWzBA2Wd3NtcBaAqznnDraWfeKJkJrS4eZHYEq1xVAKHyHPLd97hKKS",
  "key22": "jnyKCnM2EpNQGNKTiUPFBZyVXpTaiu4csspjkh9oQrKLNiUgtZr37sy38wgcbCU3GLvYAyoPh5d9mW127ZRjubv",
  "key23": "2bZB4nFixfLzXeamzeYuu3xeF4XJoSBNbE2Bvxnbd9JproE57875knP1FAvs674B7NNWA6K2NKqjgaZmqzBYvFDY",
  "key24": "2zcYRNiEpzHBqapVM8yYnhodKDCvKeZtFyuBVXxbFTQUXEQNyHUAkp9TH6CNX4g9mqRFDDRdzAqJeMJzkNq6SfQK",
  "key25": "PwpV6NnouuhKrrZzjGESMA3oDNYd6o1DBHjJSyGRgcDNcTHKgaajGGVq74fvniMMN1MWR5UesAkc6gJkpzm1jjU",
  "key26": "C4YVDgU7qxR9fSxmP3Bq8YufHGfoHBRuBX86TPBqxa1Cy9bnFPxyK4AfGUj6o6gE3R5Uk3vYY2KN1x6AA1NyZgN",
  "key27": "2MMQF1KK3bMyEXwz5YdQ3TBH97mkgBLceDDyrJnyvUmohYiiJoFFPyFa1C83QmY59eKYHMQ7oSUTCdt45Eb54EF5",
  "key28": "2fAbBQZak1GPHYVTUAoMYE5RpUUR56kw27PaTYdS8qpE5MUvhr16SnS9ySErqjk1zKabWWwU3CUvh8Mgcd1hE2FW",
  "key29": "V4dqQ9XK4iNggWBdetgSJPXHAhy6w98LzuhReYuqrv5EtWrVZ4jZHkdq6Yq3s2yL9ZiKocd4t5332w3j7q8h37W",
  "key30": "3R9XS1bgMRKicDrPVXQSVuS2yFcjYNgmrzoSfs8ChUJHbf3SJ8qi7f4Y5kNtU15WmpRL9jN6RNgJke7io9fBZkL5",
  "key31": "QZx1pgXes7DjDa85sjLjmBPAESWT16ohQ64mp8TjLkGCjL4trMVcYMMmu3a11DnJhSJUA5Mwhf5V1GWmhGTH47Y",
  "key32": "7iBgttWe2gAsafGh3WcsUZ5t8r4CNi2bEtNXrKC7LWP1UoJtnSB9NCs2WHhSk7UZpUdMqaEMzTMhQCtr4SvM2sP",
  "key33": "5vQ8hCBwiSyYiV8dtmvpp1JBzahWJyGRCLRKYkLnyQAtJd4zoZ3PwDXtkmnmTBSQEgRfEfv4QE97GgHohsBjZyQV",
  "key34": "2hgiGyqw8DigiQbtZfv1EiqPriV1eUhhJYcVeYFURS4GHCPwecH2jcYAFBXcQ4jwxWzcbar4pGbX9jEQTBFBRMyL",
  "key35": "xFYYBPNBiMXX8P5MveCpykVxCsJfmhnPnCaMQvSQavURzudV1ieXEinEfuAG37PAbgTFURuEGcUcNw9uDBETjJV"
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
