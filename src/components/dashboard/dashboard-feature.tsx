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
    "3eZVurbkiECGKnxVTRmHsYXbsZXVgimPbhMNz5NEsWn9ipQb7xfeWAWjKmhyyAEHmHC8UfjqFmtuPuXhBaZDggWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wi7bKapoi7FC28HuLciG7TVsebKiQdFQDrW3z9UcBW6DTh2XSHTxuQ6MBmfKmWLyCEJLYG9UnyWHhL1bAZN74pV",
  "key1": "2n5R6nzsdq64h6osGSiD6rVZFkATromLM3AZCZYLhzkEN8eumXkWNP4pHjixQxcBiFw9GiNsi915MKQrAnztAYn8",
  "key2": "3AngRRE42T5RzVsZkYBsSpHgaztHKSMSkqRa5cjY9bqTwzgv1hUFcqmk4x23kJVwQ6raaakhh9JYCNsYpc5TgumW",
  "key3": "5423UKeEB36ycK9Dx26svSUtmKSWF74xxSekyeTgbQQcXGM8V88TkG1bu1sPztedS73zeFh2PXT8DQ5ueLsiZxUv",
  "key4": "5C3dwGABhcGeY3sUyGYynUa5RaKjsdsBY2Epgd7Ey4Z7NPZ2zpuRMP5NVXh2fBXU6HHSXiLgebfYXuu5Fn8KCxox",
  "key5": "4Pz63TCbU7bWBWX9diGMt1PWPgw2Cdhs5RXH9a61yGJHcoFrRxQkPM9y6ycwjRobw67FvhLKcofEw6pk7F8mcvM5",
  "key6": "63araCQ9FLRfVLHvhCX6VF7q6da1dwkhuBin9tbJhCG8qqqYyhuG5c2SwYbiP8ywSkgdmfpGiVAPuL5j41tvy6QC",
  "key7": "JzMcVWgHZYPxvXbzaMX9EAPhMm3ovhDa6po3qyTYwhg9oAPdvW2s7Rv9Y7ATDWryQ3YxULvsnrkMFhs1oYzLeGN",
  "key8": "4XH7CRBU8doj9RZoWAPbdJ3bhy7ecHKQWvhUtYvFnX75FSEi2A7b6GYTmxJKPJjNkUDKKg1uvrtknQm4VMgdz57w",
  "key9": "3Kggkzn3m28NGdKfep1utLEC7aDz3R82JwfX9t1doRXyrYESUPi3329ZGeHnQiv1FQFWNke5JR1phJDEiYeC45Bw",
  "key10": "2Avgy2u6HGpgzXsryF68HU84daM55LecNUEndcVSvufbSmStnJmZYqCjgfkCTC8tcSrB72Y7Ek3HToKUNLiLtY53",
  "key11": "3SLcUssjnqLnou1m1iHoAZEt2PD2nwv4VAFzZgQm48XREwyNC1NnNTERLVpeyst9zFAf911yVGR5BRgRVJRHQduH",
  "key12": "2oxE99UmwuwDHkrvnbFmco29V7PGZ4dnwPk8ph69p9V5wxSbpMDKhz9F7ytKc4aeMeCJsE3KWLWMrsZCfmkYT9ag",
  "key13": "45tMejqSNV65jHgJGQ5RzwiY73G6mxdZeoHamYSZd3bdJY9pN7J71arFJGeRidnPiqMGxyiENEYE1UwMrTnxY2MK",
  "key14": "qG3pP3r2jq7v2kiL9zZoje5hLCn596x8o2tCUNuRYUA2DSgVGLQ3W6Sw5eTrFriGet8K48U26sWoM4QbssGVQDg",
  "key15": "4wQkTQ7gqGByLnydHoywgHUV5wvjErSdupw96owLQk6bdLL7jRywMiNiB4ccsUJpP9xpGpEHQKfCdiZcANwu6npv",
  "key16": "2nMvDiA8dPEgqt2XnwFmpDG595wZs7BRFbikYFhU1v5NVQHoC9z2YoRicrQBkP4ttkRnrhw5z7acb2GyJ2RLL7Vg",
  "key17": "3QokyWeZCA7A4rMXCDoV5KiMkTAmNTptc1t3J4LDxL1ihyAVuftA7YMVyTGMXUnB1aKTNxU8gjhnRa3CWoKQ7vDP",
  "key18": "4nhVdP6m3X8qQKUexeGiiXzzcQKXUErFYZvyTTcZ9frxTr8YpsTRWYLKDxRD1TCbzPq6e3BuPWuS9w6vw3YB94WY",
  "key19": "36aXTfFiX3YES8Bpn9LcM1aRMmYLBGkurbKBG4ketpha8C16neAXmsRor6abZMqoCgcKADRe5qdFMFo7EsKAAoUN",
  "key20": "2vhtrH2miMH7d9aeUK2ENpgXKdpUMLZC1Qs2nzDpbHAbeQT3BXsUKzTJtSm8NFukGoRrc4XC8cFK6P36MXfzhayV",
  "key21": "2Cvfya1JGUPGB2k93BpV6gtGbTEaNTptJQWjTctK8qBf1tL6RBtNeHkAyc4e5HxHaV3rv7oeoY49Jo8MXJca9eZ5",
  "key22": "4jrwA5f62zGAmJiGgaYfAhkMxpFFXNKTBywBFoM5bXJCfcW5z5kxFKHtVZTVKTNngSUKDstdTzT933hW6c53JdaF",
  "key23": "3PVzVDQ6tjyjdenJwZAGrdjqY96nniQo7p7Nb31VUt7U6QTyWWL4ksHXm6YRN3TZQFaw6duYEv2EUYwPStmEkZJh",
  "key24": "AWXqdDRNbNk42W6PYk6VzhQDJeDKpfo2NueYwHkUFitM6RLEashQbJAxdkpCGyC6pSkzPAgj4uwQ6DVzMw24Crx",
  "key25": "5g3Cjhj6kBQYt3cLXkmt31jD5hL2ZMmXYKMjmJVG8gCKz4D9qkMQ96YWvc7WjNPMCSCDa2WuFuA7EKqEWfgYPC2U",
  "key26": "63pksRkya65m3YDFcpzjfagSgddMopoi1Fbf4UYNyRYpwLRkwiRU6z9szzFU9LUy4p4Vtxx2QQ6WGb7p1X3Z3Szf",
  "key27": "5rtccbFQdybkDCDNUeiNwFaUWPraqH3FoYw8WoDv3kHkHYbiTYrY6C8kFDMvzA3rDPyvEZKrN9sWYpqYD8mG7Nz2",
  "key28": "3KxWSXUQmKsoWT9ruVhrFLbPCSvXUzbPxAV1rQUx6XohXgTbG6PpcgH3iegENnL24LTBeWG1ARWrRBdD7E1zsTZA",
  "key29": "xhfbZ3KtxfgpdDtdSYdyTq5547vzQy4nSrcPKDBdj82VCmtr8z2MzQdjv9vYDKSaF9oqj1fqCEDTQikEaxbbsbH",
  "key30": "3yQ8JYp6Wt9tNPtLP8LsNtQHYzmjc7Wi9KvJuCG5CBGHSggyM8yhTJfXokSP3RNKfvPe1x9CVi18CjUr3WxeofAc",
  "key31": "2FRVpKPmTyMXZVqQyCgkzkXukn9okR1wL1v53U2Um8YduEKLad732shVgTwsFe5L55Vkvy8pp1zfvdBa46wTk6ZK",
  "key32": "4LrJYKsed61HYfDqcc1F1H5yE797HX8gdQnMmERNUZMTiQkZTvNcpE6H4bzhNUQm2BLQFNh6xan21CGwvg3JovF8",
  "key33": "KWn3mqkngBAqsYTG56TsbVwAXgA4Duyd1oiXZ53ekQdELVt8WkG85toT6q5yZXeNK7MzTAXDKvTaCKQx5uYZqwG",
  "key34": "HT9UJGxwtcGBs6oEn9MeAXQLrLWKMci2Pv2LofndqMPTYFLHhH8qPnZ7X7XwPnxGSYtVQzYCv4ag795XrtapQ6f",
  "key35": "2jbCxvrr3NrCuJL4p3UeYCwc9eyNsDqQWoVHestwM5pMZpFDzGnmegJ83GNdLWgUAiXJEsvoqvLh442DjjE8cudE",
  "key36": "ytPr5tix8N7NEFzNKuDvU2vcLLHnp6fLG4Wmq8bR2bsdHJ7QYKwHdMqzS5nhdViRtZpdrxVJQNDxyPSzKBTHW5L",
  "key37": "JPh78aSkYce2gHPeDe7Cvo55gxFhwEF6i1SPNtTzb5gZXRRUTcBKHuy4zkJuvjLB982FHMQzFCvLsS5pcJJhHKC",
  "key38": "2u6qb3p5gdvaDQjmZRCJc6afvfkqCTmfgQQyQeFfRxt9NiFZh6HvqP3J2hjvLsSzkcpiTyoLMntjtxUcRJgrEJkV",
  "key39": "3LCK73gSQwfC23o64zeGHs6GmKuLFLSWL2Fq8XGcQNDQb5HpeAPrxcB3iiDHddWV5WwfuXHpphC7goVCPKHn7XTw",
  "key40": "2kCYv6Rq6R5BGAUQ7Sg1kHf8jazB4WnQgP9C3XYfNLgQDZNny21ASeDfhQ3G7sDUB9Vq8Au9G1Pjd1CUNo79AWRJ",
  "key41": "on1ducmSPtRbPXPVm7Tr9pynVxE8uuty5nXMHwhFvQKc9fDpaaGZ45D3pKe7FkRu2Xok9JDtTjeVzDhiRY27xiU",
  "key42": "2kedL3WEZ1QtE6gALVzzGPjE2CH7GcV9T364M4vHvroa3uoLgbfPpNaHGPqFuWmKsxn6i21iFgMhKamN6FwBHY2i",
  "key43": "2735pwUQhdKNUMnMz2ejMSww8kxv38W4Padf8HtQjQ3RxuqsutBWwLweBRoN6i8xAZuHV4mwV6yY8xTkrKgMg72q"
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
