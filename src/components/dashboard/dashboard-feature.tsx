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
    "3s44BsQaympmqCbBYLniB6iiAKAcKmBBX2vsjAe1qLsHdH8DxcP8DMqtDciWYHtTP2KeDNoEhKtn8NeYbEpWUBuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5biZuq5SuJYbFYZ894urUmRowJwsxcJs1rBHjCN9zoC6aBJWSahEL7PeYpE16khZNgXcrbFP7K2piVcnAbJzVJNn",
  "key1": "5bHPpEA8KV9fpUF4Dqt5fykZCXk7LsNKueCgb4s7s8Asridma2wbGMabFpBaAC6iuafYhPm9fMQxVdo6GxDrCYW3",
  "key2": "VWS3WE52LZHwmPLxhMD2mNdN1xVPtrzBmWJ9hznX5ZVKb9YpA8zvMnvCLQWBWEm2oNRviT3aZrPR1C1kRoT1LHZ",
  "key3": "2NgmkiYS7jtJXmcarx5KgDJoBvbNbXttGjgsEmWEvP8Rs2nzahNC14pVf8x91sSZLM91fRquqZV5m3PZ6bQDanMV",
  "key4": "58YoWccLEjiqzfn29bYVj2uGgoL6enF6V3b386SoBR2SfY37epcax9iuHP1QCH4eDu4enKtMhWBgChZErkdrpBBx",
  "key5": "38GTEQasAfbQX22iNeijpDwKnhwWxpAZsjMjdTda9QDXwz57fjGSZQmE5drw7XBHsDxbGCunBg3aJeLYwwUfzJaS",
  "key6": "yDQ2A4yjVTz8JiPL6pNYB4xzotM4KG9rf43iu1GDDt8MTx53R9Mv2i3ZZgdJxpBzpWdtYhUtLGZjN2GmenyHdc5",
  "key7": "24iNA1aFasfwi168qRrukm6o61HiF4CyQLAuxWoEKnouDWB56BW9jEzQytJsM1M6DBYoEqiL3t6j9jhFBEPXUYSP",
  "key8": "2mwwvt2jv1nSf2mazoEnnARAAphMDPMRYqRsKMjqUmuE38xLjvjBYycGiESicZtpjTz2hEcspxmg41jJo2CUe7WU",
  "key9": "LjxMQ18UrBc2i3aD9xxqM4iUw136EzPnLc87uJU9P4AeUVj75oWnA4emVhWsdNurhDaDeTqizPnWKRGPzgmcncd",
  "key10": "5vTfENnqAjemztocswjuTfM6i4WFyqgNqAXmuSZJiuvBzikMW63dX5hd3aKLGvVpMgKyCzFNtY1gfPzNRZoe7UyB",
  "key11": "5uq7iCM4XdzV51EMPRLEyUCgoLD1Qzz8pNQ29fBPJMqgaLuyYEPFpJe3yLyYbRs7cnQNAuRLjFUtHEN1xgogh2Sp",
  "key12": "5S7tLZvBB1Q8ecAup3xxBBDN9sAKLyoRixExEHtZQQ5sn5QC4bXUfg85Hb1YUAANRzfCKSAxVmyX9TKUwEon6bmG",
  "key13": "miEqTWminqBD2NwjG6uqVS8KzxywKtBzpbbYbLwRB7PQcdcjF9VmqwJTbPRS4Rp8Q3Y8VVzfdTHFYTtdqR2XB1i",
  "key14": "4Dvh6dRdhBGGh8MeCqMPq76csDLibUjUaz656FEjSeEVLEprA74Cg5iSr9rfz2ewvdpTqp58C5hiNAWbeEzwShGy",
  "key15": "5XRC2xXHpG6GaiXqWa3rFRpWfpetcSyu5APHj7ierxhJsj7Dcyr2zAVFDyxNYTAayoXytrgLiiwNERRT7iPcMQow",
  "key16": "M7Kn8zz4UdJiQYoe9a8nYsRQc8gsBEEzhdSP5h5nTDf1sNgMJPLXCQRT2venfq4W9x4VWJ8wN8kgLq2EiA8JEu7",
  "key17": "jWFPMHddheuGBM1ES7RJpTf3ehaZCQAwcZCVePo5tn88sVa2uNWXxLwMtpgHpcCLM36RJdQzaLD6EyjNJ7T1NsG",
  "key18": "5psDsv3WWTNowapmeXGjXTydVD5tbtcwFaaKDugvse8Pvo1ocnvoe7mg8HAQr8makXxgzrkRa66pZZoPM3urS9Q5",
  "key19": "55SVpkR8b6NjsjhsrPqae9WSaSnkNkS1RdWsghoVuBue8BrPY9wYovNAUsUbqytGpCwyFa5wAbfP9uAYTHf3KacJ",
  "key20": "48kCupviyc4awq7NMtU3os8Bpo6JpJCWhPuv792mh4hAbbZ781uHmNKYq31SEUzGyKws4B1oXP8Bizut48nbAc5W",
  "key21": "Yy4p4GU5Ys47BUNLusgJfjJHb8YfWUqbycAajG8XS8fSfwtrtzJgjw1WvD9rGhEYfuUBt1Ro1x4tMbGBTxzXMCb",
  "key22": "28cEtJdELKSTSfN6cEAEV9XQNGJmGyidwMg96RBoViHpFK5pNdb6soZhyunum3YiyCzYe3isxbfowFkkw2WEJwBM",
  "key23": "3UASf2wQUNVfXQpcmPecbamP26HY6mYVhZKqQU5UJ24anpjnKCAJMrM2MVmagk6F1kE7Nsp8s2po3Yfw675FvzYy",
  "key24": "25T3TieEYuESngFzDKyVuHRYP8ZGP79Q68SMwxpFdjQbT5npUM3Pt5w7FdjG1iotpSbrrARY7RdYi9Y4oevAmp4V",
  "key25": "64zD4CSvEqUfEsXHsMgejP8fLxn5dWnVm2FWNi1swH2BCgisstyD7JdeExjSEQxgRvqGafPCbbAsDMQrwZ1S11tx",
  "key26": "3krYALP85PQyj3XUmSGosXGbwukyEwpkidYswduGexiSD7foPrMVRzJNyFSt3dbcfNrSmeW9XqDog7WNvk6MdMhS",
  "key27": "2vwFqmznd5vsJuHs9FGohD3JqSico4bjr19TTZ39iEZrkD6w3uaMWoWEpGm3dqcop44Ek1YVVw35sK4f621UckiP",
  "key28": "3D1nVEQFGjCYmSYubVUQLd2a9Wd1sAnho9SuUBub2ygnkBmywDM3c2pN6xL8vTTMcM75mXywFa6w7MvhXwyzVck4",
  "key29": "5zPT2CmqeP56zDKadogWfghNoHsuEUYtX8F3Rd1LLo1HQuUhc9GfTWRX97NsutPdUxZZZowyfurmUpvUTsR5U8ZZ",
  "key30": "38gSWTPuYikbD6h6XUaugZELrmB3fWpBsSwryJNL2WNHpUt5PmX6Cdun44P4TxjL48hYbvCnhHLwaQBs2eSixrAV",
  "key31": "2VVahMEe5TwZJmyPRZGSCNW7yTQhnu8v95i7a7GmdXUmvsT5RCYNqYWcAVWPE6mZ1pmsmhHQU44DKhiBQMyXAsBD",
  "key32": "5HauAffWiCzdXmEEYRi2TkgetdNTCPZDwbro4drKoEB9cnEUpsUjPkLwRwAe7pTABYgPPiZth6dt2gadmjsrKAzs",
  "key33": "46dfYnhVraGDMthh9HC2C3C7ofJjiJ1E7sHwy6cXzPCkER7Umsi7KWQEnz8f5ReTiRbBT1XJD1ymikBeKABrz9gU",
  "key34": "3xPjP3rufu4p1naZzKJyVtUzjWPfuN3DopsaKjakscwxcbCgDjA9uySx8QczE7BzbxPv6B3g4JrPRu23JjfJXbJS",
  "key35": "5GQYR7MbTEGSWcrjxC2EPMxFAaxkEwMP3FDJR3eAmW3vGuHtLCEQuFxAznH6fPVppB9MGNG6dMZ7irhPD7n5TJKs",
  "key36": "8sFxv7nRmPJ4XSDphzKS2oJ2FpsbFERo6xAcXLwojRMLAhRgC2TcSsNQwZQUjXnw3JmLAi9AAxyU2ewRTRpuTo3",
  "key37": "5p9SsTr3CWKnXzohMkURuXx6JMijJavVmsy8QRdYsehnWvkDVyKU1mFA3a2jH6DLV2QZfEHNWFS3ehr9Dn9wdpQq",
  "key38": "3zpWhwHCC2Z8RqXZ7HwF4Kw3uWyHYAteQ4UYzwparSTJ7GQ8xc29FcuE5ySw1LcjUtBd9RcNmVy8cM5hCAWMmQ58",
  "key39": "5XHFCTdSy3oLmuz8iLejzGPZNCTuouRm7vfRWRj8wFpv9EMo3hDiQTv2VkaiGcpZiyvj9o8TBUfz93TVw3iZxWPZ",
  "key40": "3Z67vMs38g1NYPTAHLXACgWY9zXXA39BnZcqy9Bidg25vd4k6pWxh2NhTiWfQ5DN9myDtFMQ2niGZeWuUnqqVkf7",
  "key41": "67WahqaCgTmk3nbty1paVbxaLuH5wVVf3EUEK5Xdxh9QpQaxqy6ed3h7erpT9TdgFX1cdoTugFZUVjYHNneKTGqQ",
  "key42": "4GCbVPcs6QAbJ6BKaVrH8fhrgKbAVFvEjCBmmJsoUxu2v8dK4NiVoHQ9wveP1J8hshnSRVQNihojewwyhurhXbpv",
  "key43": "5GhQV7kG8ugBmxGCTceJJcmLWTLXoKFA5WuurAkq1Fqp8bmLrDd63kTnMDEp7Sh9ZuKKwTWr5ZsWCchhwGEsWEqX",
  "key44": "2FW771PJLDyU4JsEZ3uXtEkx87wkLidRqSkLaJjpLRvY2bxFDTPQbjTCYFmS5Y4JxFvBTvXJVkGSm9vrst5iB4hT"
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
