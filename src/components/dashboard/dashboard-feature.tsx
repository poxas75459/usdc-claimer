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
    "QnzmQ4AoksUFJmMZQzxPYoCAaMmbmfaLkiiX8jdwxoTm9VTUuEhW4EXCdUpQ9oJLvDwnL4JMHrpbwQDBKZzGNAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ZqiT7kzgxHzU2XasAzEr2e2MSz5tbg6r2ei2ZU68bzFAXYzMUjpj7LY6Lr5jRR56N5KUQ36pjJRUPZSzwoXJYe",
  "key1": "3V4csK7vvKZV4rPxpHKSMZg965amq2mbLKD8KfH6HF7dWuvTQo7iJ4bwaPUARFn4hvmP4VHHRUmPWPk7pKLeadfo",
  "key2": "3RtnfqCSgBuZ83CE6zAksh9HhrgabV1jjZVf72oHy1UspjaDDdfhFVo2gPJwJqAhME2RinFRQKgqWGwEcriGrNZW",
  "key3": "2sU5nSN4KVgaQZBt1d5ufPMjsuLKPru69SqMDJ5dgiUoaff2KwGTrnfVAPFWGWWknevGsCQ2Dx9ayqMbbAX2riym",
  "key4": "4CVkV3dKk1U4j1DWJJ7v8LxEg2kpGjk7jcenUKZvtZLdr4EGRu2Pi6gu68JM9aefPkbdYRLbhaNdoLx5yi7Ze8Sy",
  "key5": "5UrvonMJJhBmNxjQicvZSrEgfn9ARHGZdnSf9UAUCdD4ZzTV6shaay4Q8JiAmugdwDtTevMg3aq52b2J5Epau1nh",
  "key6": "4ZBSdHwZhM3L4Tthc5zjZ25JJSitfUS7vVxs3AT1qSAJ5n1dbXLfzd6rjhz93GmHByKRyEPmpBNMRqFh51YDErbX",
  "key7": "2XRRKJXPUfbCvbs8mpqSpBY9vFJqdhnxCYMihQFHgHcidGYm9hc3j41GL7ZcAtDwaega9EyNat3Ngudhgrfc77Sk",
  "key8": "2St1BMHsQhKnwwpVW64oBhiEdt3wzuXeWWPxmx1qM8CBEfG7ADQGH5oR7kdgdzkvHK3e9BH2pGfZ7SCjescJ7HHL",
  "key9": "3oCHAJZ2PCMCDRVUgvbgCt2xepazHSU2rCjyTb6dAqHG2yNB6DjsKG1CuPh8prdMY8UoUhFczRkVxgSjGozh9wZR",
  "key10": "jpWuExwpXADSLLXAQETpQZoRFVmhx2kRQ5n3o2iontN6aNaYgoZ99ZSnhAhszXVmUxYnUhYyy3Cx1Kydjs4So71",
  "key11": "4jgSzfM1wjwZyvGMqAymEj3W9Tu7mS5RREBUoWwTZFMpCS8x7zmwegU9tZfcKBHmxcpsp7dH2d6PcjCR8arLxFDW",
  "key12": "GZi3euY4d7qg66mD4eJDJ3wYc2Ta8jtPYRTooPkvoqr3o5kGvuDfuhcJ4BTSHLsqL9V6XU61gWtZGUb6QUu7ftb",
  "key13": "4cwQNzNmsJrgqVYgfdfe4CHdaBsKNZSHey7AWoapfGnAPYvHJSJeyn4kMNGp7SMqGTW7A9Tjtp8kXfK6VNGMTKeb",
  "key14": "5NmqhJLrJYWYCcia7UMwGPfiixfd5smuV5rKRrN6jxnd2H7BbawYAx1q8UJPyWEtx4aZcoaPhhSUx5xP733VyExX",
  "key15": "hkvyGCCBzNhxC1kkcWbTiAvy29fBXZCVoow96WCsJAS5VBKF1MsCkBUMxLLRFo1Q71htmukr8Y3zuE4a6XiAzE6",
  "key16": "2jRgs82u4wwTVuLeEjtDB9xgCQNPuR7RdhtJNduRKHhWpdMo9YugpzC9rRCqXCquFgQZEBPNh5uWWTKSkLTPJwEh",
  "key17": "5vBNTwPkaW4yvr3YKSLJ5iHueRLaqsixDnuXQwVyWHwELFgZyf5ojF8WnZPJJvx4Lychp9QvGqwxe51axD1bMNYu",
  "key18": "3qwSvLoGpA5bYQBctLHDvh9Lpu6AxEUuBCFfUk5pb9jkv8Di39DnnTHivVTF69Z5eGwLYGtmgYHY8sFwB2c738KZ",
  "key19": "25nw9vcswTw6SfBEaxeXTW9k2sxeA3gQuTvFnmeinWm4eB398L2LdrWS5ZSk9dE2pD5PQPjQPcviAJ5H5b2beA5Y",
  "key20": "64YiAgNdarQVMb1L16V8c3wrVfc9mGJZSovJw3VaSPc7EdYYxQee5hCMpSaQizFnFtAbHJ8QLVcr1ZgAix9FQChL",
  "key21": "4NP1HxW6rrdNWCph44dcB5vSep2Yi12FoMkoEQLGw2o8j5PRH6tr2UAw7iQPmFPRxX1xsus8juXHnuzLGfH1vCox",
  "key22": "5zUBZG7zw8yaUfoPeoBqABmHrnA1BTJnZ41arLzzGRoXckD7oj3FQZg4modf7CYDHkRKmG8gg82k2qU1AWSd25fj",
  "key23": "4dmbSRTHWL7PKbXLcMbHsig16Jv9TQYDutPVoBmDtKhx5WWtdcrSAUch11tsqnXALMMHAYs3BH87HESscZfuHPfM",
  "key24": "41UJxjC5ZmCE8D9vrnZXvaW9FBYw9FQwNoCU1rBxY9A9pjgi1bUmCT62ZGWL1cE9agRHEvSUU3CrqsiVD7twkXJh",
  "key25": "3XUpd97M5SwAr4z3ygCud41vLMyhELM7MuXS2MnzhE1B6Eknqxptgqo5c92HncyJaSERUnJK5wxYcoZmAgo6STyW",
  "key26": "2FGJnW4CxXXLN9hU5sdEs5yX4JKuPxNamizLj4MN4zkruc68xJz7SAPTKoYZLGe7A1TkTj8y2BGsaHMqFDZDyyX2",
  "key27": "2h7sHi9ejkUQev72GBtX8LnkYgSe8W5n1hfL6NYZBJfQvwqdVXh46bgu79aQKCYM6jTeJiLQcRSRU7uXYxPD7ybm",
  "key28": "5zg4biXhnhHhiPeCynAZ7ZPX7vP1Kfi5X7kfimvvaJAgPmdS3nqaeHhGzbiuPNfpSf2aRKDMoBXV2FdNBu7ZrzkJ",
  "key29": "YMmrXbRGW47gRCxixh83CAYoCU5WtY9TLYs1WUuw1VfJjoZEEzLmmJZjuEXFpvGSCon62uk9y1mPzhYby5apX8b",
  "key30": "3uotHuSYzCxBzsPFiGKotzQFXBKcsM5x8FvwazBStxBbS1brAauJQ8k1MTRuoeNDDUPRGVY1C2unw4LdCUwZ7pxr",
  "key31": "3325FWMaGLBjuPbzKHATJ4atZvtxvA11vUT962ycvsueqSnapuxU1xgMdbXu321eWcbTbvnSbFD8nj3Fn1n6AEL1",
  "key32": "3SBtm2VuZzVr4CeNUxtbxoTHB7WQa5xd3FzdXjZjcAhofrM6KMRag8t5gLgf2J9WwYVSGFgYjzfgCG2GzHz5tNqa",
  "key33": "4tvjXX72PKHAXmoLZ8DYg9pGdZVp9ALpexDGQtYWT9nMuUBi4srVTQzk4w3JWBBfSt5MF4hXRogKWmbtHVVDLSAZ",
  "key34": "QV94hFBHJ4NejnmJXnYna1FZwKCLULHRbjXhZvsZXzjhfwriVosGTv6eRjqa7dVuANGBG7dwTbmRWCNHArE7Xy6",
  "key35": "3DimAeCq6CtPW1R68P4Vnw64rxGzb9Qa8NZLNfrQTv7NmpWFSdG3UkLEu5eSnw65Pa6qy4f3TAYX7QywZRm9Er5F",
  "key36": "3CYgJ5h6uptS2ysbqiCnvS3zQPC7P55ym9SdhnEvxiKUP7fBMTaH8Bymdr6XrPAUEaH7BSvu3oMMw8hgXarPzcp7",
  "key37": "5rKDWzFtGN1cydXdwiWkYhkqpycwuyf3R3NAW3MEPu2ZMATVFwem3Mbmg4XEAUdqdQweQDbnd3tpeaxHcpRAH3oz",
  "key38": "5kJzGAWkUf3UcWyWrJGVi5k7MLGC6EiL3ZM8y7c1iYNJE3oeKfkbPFEftaj1ydKtDsdEo9iJjT1PXWnaqF1twS7Q",
  "key39": "27jSsi7wf2ijp8my8iY6A7Q9fGsHdMkhrKSoBtR1VEa1oJ2HJtWqE9yTmpuiieDcFuSoCuT2GHG5m5V99ysAqcnn",
  "key40": "RJiuA4jRPZdFBK9Un2sdJafPDHfMkrHjESm4grRYZRhJFkjKb1uakz5cyQykCXHv1SGdmQyVRnTbYeQNSjgg6kE",
  "key41": "41iXFiXE7VPBugpvV8tVCUMm8mxbeLMvoybdRZQvbE4yTD48XdZJypcxGk1UWzUruornrVDbkofTEPy1kUxzzxZE",
  "key42": "2v93m8acLXBFCi3bqMbVsKVRwK5CqtSpAf5EL74KG83STtJr8Z6ULJ4HbyAQc648hAcGUDBqvJuPD3HjNHMURZF5",
  "key43": "ktvMfn4cvpeWxtcsrNRqS1dhVKNY5Bb4FEGReAYhUJRKHEAvsQ9XfGn5eJa7BTwxhAZENFZdfKBNkFvwoxeqVNY",
  "key44": "3LVFqw56dYoMyxgYnM43ZyNdusi5NUM9TYUV1PTEnEVjUgUzbrhKLtN5K7jR4PBD4DkTfUkksFSZ3RcV3fWx6H7x",
  "key45": "2knRafCYNWpF8Z1EXUZFerc5ezAS24rVJC4Zh2WJaDK57CVkyQYPc8nZ11pt9KBhT8LqUqfZV5CW6LzB6BGAutuS",
  "key46": "2U3XsEA52khjsbu4hwf4aSdEx776tWRkwNmPq6EtA6yzVoSQrpSVuZpUZMuXZ9BA3fEH7Kw1qebinHd4V62983Es",
  "key47": "3ts6m3bZ6dqCzkLe6qhMbfukYJ34QyorARiPnWM41UAMLtDy3YQNoA5Z6a8hAQBfGHK8RojKzWc6hVvhqWe8R5qY",
  "key48": "3TxVM2NHZTYT1yHWZx1AMP8obE7qM5QETvvjuya3sNUypz4DZ9iF3RLzNEFzFSG32usyDJPtkGqHgir5JZMstSVZ",
  "key49": "4Z96rSXiooVyBf9UXoBVXGXHkY6WMYdKv1WTvK3LJ2yqCq42dw2z1EuLUCstDpfjm1A7XtZeoMGCJ1zZ879G6Ygk"
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
