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
    "4qXVSRWEWA5LYz3JhDRckt84vDyMjjd9SFF2TgGuKZ2eCBA3SKWUfM73JG7n8syF2WVaSRigbzo4rj9evzmchzVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iRxWJmSb2ucPwzbGri1V6YNRmS6bbsuAYRNd6JktQDpmaEPGDHHc6w5FQfZHfLwCid9AfyByvikwaBfybWDptYr",
  "key1": "62WFVWgnxja7TpE2e16qYLAjYZuk8xkCpwg3d4czv6d6UNhDfgi3DiLoKkLEVYroZcRRUViurVoNJ6bNKBRUGRzz",
  "key2": "3qb8suji1b1a9qfhEeemmrUG2Pr1eq7yupcaRDcVVsCNNN9zxLAKJq7cRnQ4GhPfXGuxkX4FP7PZdSPLc2gJnsER",
  "key3": "4aHeP9ko9eyMFKKFDx9j4PNJXZ58RgVar7AtMqACESr2tgcASxwNCfbB1CzvZ72P3yLznVTKremyWMxoE5uhjPv",
  "key4": "4bmiun1ewMbhvb1TrKk3vai3Jy1bjrqyjW5sLaTdruVW7EQXhxiqUVEotjPwyNijpuJd5gibr9N8H2MucCEEhzki",
  "key5": "2bGX9ZByUgpdFDpUFc3n5W8UpfCkLt1M4CRh9eYJoeTbbyKaRNKKxtwcwn18k4cHk8DpRCTb8mkC7yAXf4CyL8Pd",
  "key6": "5D8cg4fgvWw5yah2PQqbvHKPcnYLbogkLQtjM1f19XaB7fcfjGHC1mxq4ywr33TfcXfztQ6JBcCQXDcW7tdK9E1L",
  "key7": "4RuDG9rmRHgKzUxXahsjQTaQwxtDxS48nLZBUiuGuMa1UCT1rgAB61PyyVnA9zPQKrgWtqaBJnWwvL3nqAmjhVpT",
  "key8": "3Y8SFE8CnRx8YE2tR1VTWJ4DkrHTfgPExSosPisYo7967NySkFuUJkZyZb3iACyywFiSvoahmEkJwnrd6aDSAAQc",
  "key9": "422y5usDDDw75c3HtQcP5ZAdZwhAPR5TqrGQjSfBfVYo28Bdyg4Ynpt42AEcCDb9BAoVRQzYTqQJFyFzqz94z9WB",
  "key10": "4jCoqJ8hT9nfdVE1t5bo7ugPc2M4jV8hwCZVtV4REy6xxf49f87Wio7n65ipr3iEDHbEs1NRPEkjYKag12tBWfyn",
  "key11": "4KGeQGudhpxVvNHz9MBCVHfHzW61vGNFqtiy5zfeu5ttYzsaBjoucwGK5YKmTUbyq9zfUtXPHdSkPS6MqUmoVAjM",
  "key12": "3VoVQbNuF2Cqg9WSq5eHcfZfJzXNBZyFZcBPmwLNtXFUDUtc8aHjshcpsw3dshuS41g35d6MKVdcgPfCctTGjA3k",
  "key13": "4XdA2hYptM6Df1vJJ8DtaPCNcSmyyH25aFzdMy8AVjztDNuS12tm9SHM9Tyk5vvpfQ1EtaxcE5QUhs1bejvYYLjk",
  "key14": "3FhBLn16Mnn5MqqZnrwjZhYh1ZapiSBDEbxpciYQjFwFc3RnDe9DQwY6dPzPxpnqbAcSrNKC9X2rqFV1hsHYX9Ac",
  "key15": "2XfDreHb3LRapfDHNL571VvcKTDuYD9LFhfmbtFdX2NXsXusA35K4zcZr9ttdxVPtMmftVp63MoRjZd6aQNe52qZ",
  "key16": "26YJ2k6prRYQ9ntAx468miUVpkQVivtEzEStaWUV7fpxn1DHEres8Qu5DgJu9ZF4KXB6Pd5UvKi2hn3737wNixjR",
  "key17": "36shfvBH8f1nNwBPzGhMkEXLUGsMKoWKK27y76u1CsCvX58UqFJTqQRkK8XgS8NAv3iZm5P5yVC7vprds7hPWiLn",
  "key18": "yJPgvcPZn9nP6PPhJiXpUo9NLa8zZYfYaBjKuqUuqCKJKoc4gyVkp1VCUBPH4JdvzLQcRby95NdFg53ucLwjk9w",
  "key19": "x5VgyZBsHzniQC6RkpSzecvCFthp5AmomjmW6MrPGgSBSe9v5q7c1gdx4uJavsKPSabVt8s5U2EBfNP1d91ocvP",
  "key20": "2u1p9u54FuEGhvtheQDw3nCDSzs3dHvYcpB5Q9B9MrMXvFpZcpNhJFpouFasXJrCX2ezxZkYz53Ef9eNAiUeHR8R",
  "key21": "5HLXeYMmGgENbZDmSuiGLysyc3pdLYWZFtdGwFrrv5vV4KhG57jHhqUWf2gG31vy4SJ4ysEd6iPZUstoVZaqXsNo",
  "key22": "3C6VSPFXvpdkFuep2JeTHVJB13Zh6YWGZzHccKrdGLiZfv6wiMbmEv2JtDqrvxPZBG8DVBHPFvmraiE5B5hakReB",
  "key23": "5S4Z5g5rmdcmWecVsjT6BLKbK5QkVbX2LkFYQhHozkmMFW6AMBrYFYptaT1Q38jfLGty9yJFPzf44WNwBSovxK6d",
  "key24": "3GrQeK1uvCHCYhGk8Xa7zVzo9h5d5XaL4ELA1AGduTqFWWtq8RMm68UrmDENmsiXUvhKA6CrvNcJw8TBT92LsuvS",
  "key25": "547ptof5xTyEqfxNAhRtAWVrKoMJzipD8jbKXE574eAjM6zJNP79e7PNW2u6kytdYhRSgNa87jFtsXfxGuHVEWKx",
  "key26": "4av92Bgffz9zAtvBoWCXLtp9rZZ7f6xsKuyTqEnW1ynr3gguBT3CL1iPtHbdAWxHTNxif8psJLyUDobaoL3Wiw5X",
  "key27": "4X7R88yChXZYCLyb6Z8QT9htnq2QCmqg4qMoqEyAaqLkDDWgTc7wwy3vq4tP1jNJpc5syrxsbiAb531TCTMjjvb3",
  "key28": "UzjmFMwEQduNek87XH1KK3t3wUEDvkjfuZP5gzGcFZbHLcCKagkokZycknWye6jBucdSQ2AmoDFqc7zGeUaHYny",
  "key29": "37wEhwcWnuHKQHKrmo7RKrNzcXbEtZUzSEWEjkZm5Q41XqqqFJqDpeaVNYmEaJreTVVMe1YpwMW63sPEyQMsoYXH",
  "key30": "4WVHLiaCnruur974SnNN2UMH6K6uUgwSgNw7pAgyyvPN6Epx2bfaCpfSPWy5H2DXsPYvEHivvgEP4z3TjxoL8ode",
  "key31": "NCA5nc6wpowEaUZL3KvhWy6AivCoXmFyipntffVZccBDCP13hKjrcgCUcw1exVRMvGm78ZUUEQ9RYxRSL9ugvFz",
  "key32": "5xj1FavxgibpCTBoefCXo7YmufLdcAtjRk8C5w3GMB6iLvgTZ5DXaZuLBnR6gYaMEZguS7VPbdWejSb5ZEvZF6FV",
  "key33": "2Q8jUS88QJdbM1ET2N9vsJmCNvgR6wzVQUTNWZW7sQMHGGGiEdZefPAocjSvwYdsnpHMunx11Asvz9U1TW7CkJLz",
  "key34": "2FCScRfTQTQuLRikqMtgBpVmNsjxh2kfZsLPgduMCa1xELhHYzM2Cyu7NuVjk39BdE4EjKaCTqWnVdEdAr9W1enx",
  "key35": "2Fu84PnzWyErKzCD2ZSFzhJaRm2875qmazPofUaLY89zKMibfV3ikRxDGZ19dLRzJFib7rNxNTVxSs3o8wN9faX4",
  "key36": "21Lrdzm3tuVzsM8v5Mfu7BzkexQ5uQptEPiQL5htcgthMEEu9RxtvH5EANPm56cWzesPVUtVwny9jXpmqrVmQNiS",
  "key37": "5PQgSHP4dRoxV8ZWoZ4ZpSsoKKjF7XW59hUY1TAu4wFizrNoYRjuyQNyaGaC4DR1rUj3TKdYJvU4G1aJYriLL7At",
  "key38": "2WWwM12nkWdF7WGpaSRuMTvpJ5dSC4RU8xxVkEnxzdKTjjHWqQNoWmNYV7baCob2PqzvVYAWVDSZVmoiiFeYyYjC",
  "key39": "rQ28WkJdW3kcKWytTrKCgC7Xqmgrp4Xu6zADJ8nqaGkWqqhQWVVUpoPCY9zkNEGay3uXu4U8RYBKMmMtpgkRT4D",
  "key40": "3Tm921BZz13tKEJL2fjbz8sVCEwgqVge4373CErv7tf1sRhNjYr2sBgAsoVfBwfXTc3iRvh9zikTvUuQEAk4xLn3",
  "key41": "4M5CXqaX7V8K3Nu4GMYotmfQFacjQqF6FCmHnRU2tWbMdGUa7fWms6jaiCSbLcL6w5VAfZWcYKVPuv4Kp1vGUDuL",
  "key42": "36Cb61Ws65TWGHWrgASNz8zD9GzLfso6tR72bQvcvwYTzwBHyKwBNyEM7ckQBxHT2s2t6XP8qMhBZUmEf88qLtzV",
  "key43": "5NGYoQtaYL1bRcyiEoXfdnCqHNkAkYaa9gDAnRqxiiqWsHGCYoXbkZXivVGrezn64NQWDpiuRBj6vBHuiyxtJnsJ"
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
