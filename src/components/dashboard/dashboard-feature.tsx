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
    "2UAnrW6h3eCDpWNeoSGPzeX23ksuVbtwQikrMhujhn1YEfCPvuozn5GPyRA34STBj4fJBnDiJiKwDqfJjuN7xMvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ANMV4udQDXpFP6n5JDaszqptsV12odVpfaCXGJt2em3wLAQbDQ1RSrPLXNy3sosBcYTekvxaRx8Z5SjfsPfi6Lh",
  "key1": "3Z33az8xQHMmT5x8hmecB4crG9Jc8QGy9V2z5AwgYx3VTn3z4n3S3546SvrcGts3WfjSK8htdgBmB4xci3Lgx48K",
  "key2": "5Uxo1k4hRLudziuMwPZiuevV2uCWvjS1afaz16W9PxrxwKwkhsxPHbAbN9Sk1e1pePxRiJNqQYDnC3ruYzDzWyVL",
  "key3": "9o5rQm4uGNYKYNGYzdBGjpVPmh3F6bXdvvvTieuefTMeZs5jSzgpcP3zyPqc1xaTNGk7vnKEsEY89LRe1L4ZsTs",
  "key4": "497T2vVPyQduRpUgbe9NzyagykF9Lwwt44rcJg8xxWYoDesyTxCscHow1nZ7x8HuSGbdKGZ6pbepZR8ApcTTjukb",
  "key5": "3kbDunirP22EncrTYj41u7g1zCHTLKRbQFxsoFSjs8mkDPwd1tDYvfhzr6VoDEGPZC5WoGEDJq5VzXYXmGvYTZtP",
  "key6": "hjbwwT3bDti7ysc4mQqy815H8iKjfU4rmefYZ1bWAxmzpPPsbt2AzMNk3nuKTwXopDeCD9hG42gTYfp1NC3KsT7",
  "key7": "2ioG6xmGHvs5ZKo9EMH7erV2Zo9sahzCPhnhKbChBtmzzQEWhvJzbGpd1uQoPPCbzoGs1qhob4o299HHpPPLN5bZ",
  "key8": "4joXz4ZQs6VkpfXFGnJt896ZdSoDNf5B55538pxhk6Z3tnYNFcC4LqbTstcjDZhgPAUcdLiWrBHw6X2adw3Ajewm",
  "key9": "3sPMifYiEbPzvgxY4jSjXSJfbwR78q4s6X9eh1z18G5brPcgvz6W23NLEofkrPGq8YE2wvJzRENfCFue5YfdnwT9",
  "key10": "3n8F3wiRm424fEHZakVK9kH2NuJEZha7egTMwWteSXuf8Bka2AAAtoFWEM5NJcTAYrN2jpgH2YDaB4N23tFjTDV1",
  "key11": "4KFbvcG3nThgv18wiPAVXUhvkrudu5zD1j8vCzvvnAXk68p56Qa7yBmkJYA3W2vwYqjrGGJoUmyGjt3MbcRs2tm2",
  "key12": "3Y6vNGkeiWbBdQYj4b4QDojUJYeqBJgFDHn5qzWgDjrysvmi2SM7ScZ4y74VJ8NFkBipskrPe6nTmugahckNcv4A",
  "key13": "2DfJVrD2YQxU5t9k93gbmcKNyBmudpz6gXBwsRsV3HAJfi75e1Cy6X65cV9MsyieTSoEn1FgLjdB4W4mEqpuvpk8",
  "key14": "SpNs51BkwkfdcBbXL98PtWpFJ914KJFvtV367MN23ubeTJGbpuBegc1S81T5Z7wt66DsTnGPt3ZcfHzghHU5nkN",
  "key15": "37YpAJUCB2fMMFTWabJcBHbtgFmb4LabAUZ8eNS9SbsH237bePie42NPqHH2Yf5hwL1KYei6sFWWBtrUg4S5uzZc",
  "key16": "3GJfsrHAGFDT1PdXAaHmbdUR3rFC3JRMmNqyqK1XGxJgUfaEjWDArubxGTwpRwruCSezfx3cRw9fD3PCoHwudmBX",
  "key17": "2x2L7wjsLFF83SPRDS8z8vQoxaC8yorMVaEWrZPWtu6iswXvMWSAAzzrtfaJyVeihssj9x3o8wFJT3hno1MEMVdC",
  "key18": "5USdQenj3R5X5H8aXFyszdskoCGxNzdKSvDemDVaCwyXjNxMCMoNZf7Fng1NiiJw2y1tjVAhMLRFYWmAwwkYgyjd",
  "key19": "4o3LTh4RHorDshBfLeM4Utu8qcgKzkNZgT8mGtKgBCV5cte2paM3r1Ct6ncoV4F5o17FSLPQvSENVd6U4FMxTU3E",
  "key20": "4vNzAH2BSX943xQbrK2WqbqA4kArUCCk9WZGzQ9AgSkRwVoctJb2sSmMFxRkP1gwMb8kPzadHLdq177TEJGnjddT",
  "key21": "4x9W9cauSr3mAg4hQvDhZC8H5bCoGfDn9SHrbKAyT55P75Pc7DjdpaeY7zrZkKPPWEo4gn3gLF1aBHkoU3PbDGFo",
  "key22": "4cRrSun1trLJF99bGjcxUVrX5oJFmb1kjgyQj22GE1hSxR5zNVJxNiSeCDdBV6WQ2RVBWWSi6aqaD56hAiZjLEQ2",
  "key23": "53JV35pVionAcW7VaZMAdU3zc4iqWXzeAeQSBgdR4R9KsufJTXTBTRrvYGdVoejEuQsb59Ynw3tiybPXb1y34Ncm",
  "key24": "3UgyCHGDVkGotMVVqdNRSC6M1qLHLHbGeUdXoY1TYMEP2UwdbegpK9TUX9C4j99TewRmPuSzuWeKyLtUUQ1aVvJR",
  "key25": "3giAy8JJUCsQuU88oJBSBzHizXf5JZYZ6UXpV78CQ3SmS32GvRSdWJttn17zu8ib8EHZYbBDiUv8Y1q55zDHfJoD",
  "key26": "m4PeXPzoQ5rMEfKD44At7yyCs8WaSPtCgxTy8XmppH6jqNoSsxFkU4EwDxoeRu3NKHD2BV2W79pd2WCCrbxZP6v",
  "key27": "51HaRvPE67vMD9p2YJxKpV2v4Tqa4U3JjLYkexcYBG6YAFKUjZWGJc6gpqU6McMACwRT7pWrFMLfqZpxgpFHin1p",
  "key28": "5LYqyvSmnU1TBxYkRTMrBd4sUE386Yq7xCTVTBYutq964pYYTNVrUzkPwU7php8psg7HaYaXko7JPZj7yNFMbnpT",
  "key29": "2SPaa4txPsx69boMae3kaJgPyex2mBwSN7f9qsnnSZztJpb1nKBWyc3qifkmY2atiVWLuNC5K8dx7gjT2LsL1m4S",
  "key30": "2KVGcNiQhHt8ZEgiTaWGxk1tQNCk9qLWoUBvz6hskCimMGxXRpqysZdwc2SbJM7XNn9m2bQvb9UES2DsjorPTnjd",
  "key31": "4nsyWGETN58C2UGHEY2nUnM5YrHALj9oqkCHdPsP5RChwJorazR3NokUUgRWZh3v2DSiFpyUUGemKxhXmHtSTgc3",
  "key32": "2KEmPi8DF4Kd7Fib374F5oUQoJphGsvHKV9VENYWMezvmmxFaB3wqzt1csYrGa7sCxBV1nP9mxgv9zXrkE5o5G5W",
  "key33": "4PJSs11BQopeogwDuZQCcAjvCJa5mykR9rHigRA8NjaKX7nnhGdqvDubcvYZv5N9MfGUM85V8gyLyXJSsZCn9AMM",
  "key34": "4wWJ6BvWi65K8zvjkR7LKDTKBsKPkLtCtavNgWfoLaftT4DeydYjbpyXT9KBfxV5s4vSvWxPoNMyh3qF9FCJ7g88",
  "key35": "r6DUpc1evry9ymcGLPYgpof5SkFn2jTaiLir5FkLYda6F3qrZTV6QwfBgJryGMQhWVzQPcQeH8chs1KwefYM3dy",
  "key36": "isdbpTj22NWB2hxAJNoCbzUPjQD3bmPakCtaGtKikmpnLPqjrL1uc25ZGTCdALs7a6VMARJYgDTCH4qujTebwKP",
  "key37": "Tv6AKzf8Z8xPjFg1u7BvdYkoXb7xtkmb9gWcLwJVBP9tSDQUG86hpfYdxuxwAgqfKdhPvBubiNxy8TGKmq17deP",
  "key38": "5czpuChZgwn4pWGo56uHu5h4q8rV6YimW4rwUDXGusEdbuh8pCs2eE4cr7nsjcFdm55ZgAWk9FTt8RkJP7oos597",
  "key39": "55aNiAjqDffpYCJUiTxSRNkixTuP4wqQpzoqZi3P587ySF9sDLomcn9tLKBo8LsRNBrPixpiXzQofJXqaGKTdTjN",
  "key40": "XvB5EGgBeQ5VeWbLp5fqtiyRN19NYdcTL1u1UGaKF38TVRigKbFVfGCCFUoeSS7LZd1puTSToNLXreqZaSehq3p",
  "key41": "4kF6bAFSSuY1ZAdp5jSsC97WvG9G5y5LxRaJuYPsX8zCUpBvfnAHNvDVbs1YKBEgJNd44nWccRZmBBormUn2CHkn",
  "key42": "4v4cLRPBAQFeH5mY1E4Gq2HmHgVuxo2oSh2STUbxirSwqbwCGYrQhU3kbZj4bmfR7GFeYZcqdbGbXni6TsfkzABu",
  "key43": "8mcX7cpMHpTvCoZfHMKh8iD7xpZt1n2oWfweMhKtvLrUd3CTvfpJCZqZiwfFn5Dgu26HYgjgCH1Dcx63eUFQAhv"
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
