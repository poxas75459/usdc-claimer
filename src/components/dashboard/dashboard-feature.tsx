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
    "1d6oCSioS1wzzYHjx1K1ZyiKjKWCREZfcMTu5CRHehiWSq6x29sTk5dNDzdQPmZ3Pw7stkfGci5ez49jwBAZg9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yagt5XVzp5MC4HonKLEkQ1U6gzNq4s6PCMbar3c6j9DWwnMCG7LLD3N2Z9fcroJ57PoRKfanCg57RUWUJLhePDQ",
  "key1": "24hSt3J3haQexbttRt7SSd5eQzZC4XNZj9Ecs6wmkRSythEwBwb4oQjyBPQpUPiS7Vo2v8rAaj9VCgBPQbgpu2j6",
  "key2": "3BatQJJ1QTEvPNonEv49w1qcRPSEvMW4CLKZqJJGbsUvidvQvULk4DiH8itg5n82twiCMdgYeE88B4DepgTKk5HB",
  "key3": "3WLHPd6srfQrztVGMHDS8GAMKdkJFbmqB6EZpX7hieauye5s15cB587bzxZ2GeicPmScmumNMTFdBnFSvczwydR",
  "key4": "4GpiFQvRdwEEN6W3twaMfrQBCP3kuk7zPAuvrcF7cNX6pMxnEwEcPLgcyJoc8MQFLtEzbG2iBGtUo1K8pDVitJN8",
  "key5": "3q1zpaZHHzAxh3DGi3mALG5vL4SuKBoBBNqpudCoqSydzzMbGHRcjSMTCPKGncVht1QF4Vit79XFybkkJhQakbYJ",
  "key6": "3baBCzahkk8cAwUqdEKEALRRHtpzY1qWYZfqfY4QXjwkv2LJ5vUU6X38U2GbiEqyFFLG9XCmgbojrdG85uUJMPPT",
  "key7": "3fkAxEUraciJv28teqE6d8BoD5E3FJeXqeWgtUDasvrrWM5y1uisgJtA5mxchzxEyx1VPsWptcQGSWV4kb5HuyoC",
  "key8": "23z2dsy2SrT3YtXin7Ebvm2YQGAxEL8XZFCAuJHejBUBafmwEB2xsK6DksCbQVDemWT49WcjFeUTwtAbxAFfguwe",
  "key9": "42HD7NFRB9miRq8oM9fJoTNMwfoVn1J5YofoYof1df5Cymoc3MdMUrRpiSEAf6YJGNV8W7VZvkTNURWiZq9HH1Dy",
  "key10": "5MJupRANgXJ2AzDaeyuaT4pHbxmWwtsL4ce3AXSgV1X9JNftcfpcCd5WpJyCJDkQ1uChQPcU8ynfvhdwT57Kuhjv",
  "key11": "5DpPoCyS3oxLWachVshLGXfpmvCSuqm9ugBQr2edq1y2qPnUDeSxnBvNerjity4gSySpReX6JMuvBq9bFn7ZviKp",
  "key12": "38o5iEYntz1umVa5WUEFqVBbY89Xbq9JeN1qdXWAVqAzXFKmvEmRTYewvk1F8H236jB28FkTA9HZ6j4bThHEzXCM",
  "key13": "4drApqotxiuhtA2XXsgstBs5KGMJqpZL7LRXQewaFVCosYFyxAGk3KSS1RE7w7yZx9pNskBatHqYY26fNoYyDkWP",
  "key14": "4XA2X73Lb7pNqohyui3T1XVkdVNrhVC8pwTRfdjbHDUt12nLr6ySjWZXV2D8a58bTgKgumFRnbzeVv9bRMPdnWyg",
  "key15": "5tuFXJmZ9ydqqMmDpq7FqSJsGrVtP2kki1veZ1Fn9DRL8GKHnCJQqqw492945cHD1Ni8KVPNkZjHBcnL8iPqUjkr",
  "key16": "xgv6Y3JfP45XRqPZwkZEhSKzD52prYcVWmqRJho2XiPean6p8QXgAQNyJY8WNfHeAs4VMFxqjz4YhMZMQoirPR9",
  "key17": "5X2HcH1KUqdFEwaQJZoGPEduDUrkLDzHd1Nh8wBH9Hzvy6NPDvNvLFr1fQzeonPuxLQ7UUq4vVvyggT7kKgfUWeG",
  "key18": "rgJft657d7w7iGMmTNXjaCohMCzy4WdVniaSaibU862FfrWionrnEdFzqfLg9W1x2dEEMfwmNhWaThTLDqDLYsN",
  "key19": "3VfVC2MQeWP2JTTRWeRYxzoBT2qUmV7ZPVcbbnd7Jv615Dpjh7x8foVSXQqgkxfB35vVtSb8RkQ2yWYkAxJe7xtd",
  "key20": "4m8n1h5CZ48s4XipbjHxdQnyejcSJhwdfTGwrkX6HwnhPtQaAQdDMpxPmK9GPkcW36GhZbMBjNx1BP5MrkFeJxRx",
  "key21": "3KgV3LSiABYpBa9t8giLnt1WfMrYpBfrHpzvb6CSv8VXFoaQDZLHSQk6B8BcY2orRtufHopDStAp3o37U3GAnDGn",
  "key22": "5YFacpQYfjN5H45CnkGsuMdfZjgH27ke8Fnhzj4hDeUScr8Q7eUQA8xzT9qKyK7dENcrip37agqVN6nnCpCyxZ6o",
  "key23": "4UVyUFVqgdJs55td4gbnGTF5dfKJsAw6Ez6dJYvH4JbjiQPfqvraoZztsPfzb6sBfsYQqdHsaQunxuZPyvofyMSP",
  "key24": "ePzZyZ8HmcxBLx5iXUNApAaR23WznRc5ETLaBRsrKrBBqoNMyxQ4SSA4yHSEb81wpnhvWD6czwZUYrsfGvgnhuM",
  "key25": "rk7X6G373rtJcpZfzw6cbec1TCC1JYV4U2qjbDiXNe6fS6R6w3TxtNeUzD9K1WuArumKRRsVi6SU8cMiMqbymyg",
  "key26": "4LxBQdcFABa53cZ1pv4FTYqRFr8KPMkDX8ZWyJMxifBLE6Q4iiSxRkb5K9k5NyerWvQk3Q7JGGMvExiuH23x5Vg8",
  "key27": "5GkXDDdRms36fhGmLvkDbVHgMg2nwty5oNFRoT3Ys4G284TNQoQiRWHA6kBy28gHXUwsyt6uHySkVsYFRtekQtXy",
  "key28": "GKsY6MR4iYDhUUdDpaTRW7AnV7xf5Yib8iFfexAa7QSr2Vf9Tw6zUVXmdrZ2MGStEmw9YGpLtcFzKxnV7Rjq1hB",
  "key29": "3sV3iZnwU5kCnZjg7mUwb8YX9qVgoRAwLMgdSvhpJNjykEbhVtUoT2YeEW4LMvmiF2PDFTjB1LCdqSPaMWeKXvQK",
  "key30": "5PPJJ78GYt1muB19KEdLauVnoAQQrFbR5u2uHXDFkrmyGnorHh7uqy4vsa7EqDrVYWtChSSF72VwEz4o5eLPhRLX",
  "key31": "4W2ZEUPg1GkrzCaFtYdu6FSDC2Lj5KCxLRkkEZmzGvWia82HfWPKnvFMQsJhy2tU8zYHH29L4ogKVKFQ2UcMYwL8",
  "key32": "4aEzwyrqL3kFeWB2VUwaFkb4heSUtRDiaw96o77LrjVkNdXHPPa8tHncwhnx89ab8MGAPt265RJL376xRgQy2EVT",
  "key33": "s9sftDvQCGFKcUN2qCuJdsqptn9dktcjbeV4DhkDPpz1JUapWoBZDd5GFvU64vo3HrkJYosLknBNJ44as8PeUvC",
  "key34": "3QeA4hKXEPRXnC5KJpjHMrj8ebJAv6GLuCySLwd4FcqExzxEGKv9hk3P52tdAFsptoPEG7kdtH4nqh5KspxJZgqc",
  "key35": "2WosEsw3hzy2owUVsNg5pzBnJiLo8mGWP2RbdkJ31ZyRTwaLtYPrxYNWgPZGGNiNhb4jUA16eRuBeLxA9nvDkXX9",
  "key36": "45cGW7aB5x1LzpNK1cTusxdm6sXMj3X5ZJJfLGA7BQXwy5yZw9g3EtHDQvqK2Q9uHs9zj8iz4xy63Xkmp39fLz9h",
  "key37": "4n9Wg6ww9qXmkS2f7NR8rwhWxSnAj5qttzr9eLwvFvLAtqCAkQS4so5Nev6kEoUPXKk5E3QUdtC2vyWYyMpbPX9c",
  "key38": "5n1ZSLVN4SgZ2Y2WAHVnwmHyf2nZ9MXXjhZQiYqvn9rWysuv66NSvEjoEwhTgHbJEfcMynQgwkd3MQV9JyrHDjNe",
  "key39": "2e47FedYGNHXUq8C3J5uiJkTR7YrDWdc3sUqWmfouv1hUnkxRgWCWyKM3D91ATsGgzywh6io8FeisNcL4bxuhikW",
  "key40": "49BCxQYhY7cMKBEGN527DiGh91h8JxPwFqK5WLVBr5QDadddGciHqd42wsxvh5N4WNe9LUjsx6mi9agzyAtcWsZR",
  "key41": "FnXNsM3jMwgwTTMCaPT4BpBV4dnbL9WaqXn2Yh5jtBEj6cS82SKBhoaQhXrxaau45h4y6EJsa54dssdG7E27WvJ",
  "key42": "63Qw3U9sdRDEUrTWRLhi5bC6fMjqzGRrcd8nu79vMr6Y7TZ7py3zVmWDrJuJcbpbnziijr2fF263kS53Y3rpBVCz",
  "key43": "uWZgkXjdAfzVgPPFTzs2Uy5d77w5g7emMxVFsdkfqQRmXkCdhtEY2jxK73NZAsMuwE5Vp4CobjV8t69PJYwkNsJ",
  "key44": "3Wvi1dMbZQwxNVhfDHUtq2HmdrCewDZCHoUqFKYb5S4gGTrHoA25YDnGUQ1HTTELANKokVibPaHK21CwMBBz6mzf",
  "key45": "3oD28jbrRtdEBg9Z1kFeBUijcZWJ3ZMq5KFVGgTgQMmaK8MVUvHvKTniRH9As5pmb86r71MpDTJ4yoDWiGXv3Pzj",
  "key46": "4v1ERj2pn9MHZVLvPFpYpkiaYj1nqqVU1PB1cWFkch32bTNtyyyModJrApCFhcRhxsB1WkHSLkrKHMZTSLoPRqwq",
  "key47": "41WHc18jmP2wgzUHKvSPFXN4REHiUmm1qen7MeDG1nB8FABkwgKNiyivd32jhaQCssFEwG6uHSWw9ar1vbxj1Ubc",
  "key48": "4i5dgwkYhY5mGmCzMhVpkacWtjAbJXymn4bbsYaz4tG7TydPMHoeVDqaMztsZbXRht65T3ZBTp5YLDmWpbcmaPKz",
  "key49": "2swCv7VNN85Vc5bktfJvch8pKwFimWuhp1ZoLbdf8JHcH5U4tbQkyjskCbd2dny528obqTTutuWDFm1kweVTdTwY"
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
