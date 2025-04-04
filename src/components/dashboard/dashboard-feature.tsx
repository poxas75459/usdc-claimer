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
    "mM5JomvNi7r38rJ7FzPf8ytALKGHMLUG2utDu7TyN57v86DoysQczbCo94HUx6uU8BqjzyW7HXza1W1MnkwFbn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HShWKSAm15n2EnbBNHRgrbikdZSH1os6djL6aciQLYJib54S1BMyfQDxaD7u7gs8Mmg6eQ3aLvttmot1xsET9qB",
  "key1": "2NXvrWHYgKXNPMPb3RQyiU2kvEHqWgppXioMzMGYu7YAyVpBQbUyCfSLzwmad3z7GDvvHGY4vBWZhPhTujBcmbiN",
  "key2": "5WuoYrQCZcvh1PeNCbhn79HmY5dBtfbJDchprSJzpqDVqAWNcPmvW5hp3PJuzv9bLVK645rimBZxJsqKejLLhxHm",
  "key3": "2VuzUzoH6bCPREW24rwvTShiPAnNTCqfYhJtWqXd6PaU3Q9KCnnmkk9FokmhtwPxNmCtAGGDHVovBEmCxnyGDLU2",
  "key4": "Fjibr4ByqazMBDf3TKsvaU3urkTb5DycFTf3hFApRYukRWeD5ainP4f8gRTvbFAaNsBee9JagBDkWQ5FuFvk7Lk",
  "key5": "3D4WAezdL34fryVj2JQH3wuoS7dReJFRvh35apK6bEkeZyR2kgJZrSikMoq6GXi3aWu7jPN6rhVUEaqWVSoWyAgG",
  "key6": "4r88YKigbG8fh2dtChzX27q4tK82Lmb9pbAarAB74DA3gHf9ASXsZQjmUZ7o6zwcAUSLqp2nvs8dvm9pgJdMHU36",
  "key7": "5qQrJEPjPeyEEAmHn2ifaRPZL3svCPP2ShBDBNFcJGYffYENGPZiiLypgK4gDwkHmrArxGon7tAuYNb718zT4cCZ",
  "key8": "3ztgDVpn764th5E2QpVX3RzFLDMuBWooZjSnW15cjv3AMFvJawCLz1Gy2bA2pLzT1GimZcXGEqFkXhAhSix28SPh",
  "key9": "5kXNKttGQzSe5BkjUhi4fuKY1XEUyJwvVSHqGcyyCPqkt8eCzPEVFRVXbZzKw6nE4LCcALxjncfPSV5YAJ5pfdEw",
  "key10": "3wkqEsZi5m7C3BNeyDYLGv5pyf4rExJHSxmu71EqZcqAbUEgJD99H3J8g6YcR1pChNb1DCeBR8cBmcJJ5qU89Mts",
  "key11": "56JPpJX7BMPGijGuwfcRjf8WrAJU5dxfZbkL43k7HYmTbMdZLDinP6QSgE4KTf4bkJvttLYw6EFpAwFepNpMqVNF",
  "key12": "5DQiFq9pCD7ii5JW5cuwHgHYRnTwhX73AvSNjaL9TmBYRBNaBvRBfrBsUUP2eqFbc3eucfEbzsGMaC3NfkYay8We",
  "key13": "2bf8LQKknb1rH8BQQKhHKFNCd2A6b6upXdDXzZNn8ciFXVi6LFQoKnXG8QGmebZ11Z8ABYJ3H4hqVXrUWSBAVApU",
  "key14": "35yRjciSNG17upWCFsEe7QSqqkDxtKpprhFuV7BynjpojCt9w15Xr72DXKWE8t9UV2RupxFGsiL5VUHMcYRzpHHQ",
  "key15": "3gKD18mndAAdNdiGg9vg1Jq4YfbWxswMTSrKngfothGxs8xotAi7MUDXZjrqyZRZFhsjD8egSusZi2Pzc6AKrueP",
  "key16": "3eFbDYknfs9kh2ANt8usGf2UGT5wzKha8x5ZZvDxxqNk36a1xn4L2BTToaKN6PzNoAvyoyzrRJz8anPHromAXcrc",
  "key17": "5NnbM4hQezvZr6mpMPGHcUMJn55AXqdeZYVEa6JcEJ5nYZ77oywVvDsYDki7zHYSw9d3wsZQVmXCLtmYYyWPRHo3",
  "key18": "7bnwvYQnqZSVooCjBCrXLfBGGDgF5PbjB6NZT9LZ2NYramzut7XXc37tuMvD7RQK5dG4y52AUMxgHobLaSQ48HG",
  "key19": "ECzyrVBB7UJyRkwCBY8tq6qciYQTjYeNQuJkenfoxkvpNt3Cob8MVGuQ9CXEwhPz1ztmeWQLVFmN9mAunBUsJtA",
  "key20": "4wBC3DDq3jTDnddCvEQHXuFFTFLX3e7cJg1xK87rwXSZPWi5TtVTUDyBgJMNhACRAzHZknn3HHzzXkNoJcdDFN2h",
  "key21": "3g1fJFqedjexJ3ybuMb7oZdZnTeXfnwPqujVvvZazExkfosFCkRkZjtoYFBWLriPJwTKVHWaECfqiu2w42HKNwyk",
  "key22": "4y5KCrZqjzXZuDdk1MuagddXbNjvN8kYDKSfhHFKk78wLzqTCHtf94ShmSFd99NE7jvcAdyzWHZQLDsuuc5BugQn",
  "key23": "4do1rmmwDx6c7Ne3S9oc5SbKghyF1Sgt1xop6TigY6JNJJWMqhz4eRbCKxQ6JcMqZQ4kKXTM5L3qidapwKZtgius",
  "key24": "31BXwqc59ibZsTUFq636RAW5W9BLtdcRJH3XctEAz2zBAp4VPCUn33pmih2creUH4qcHKW97pt2xkLAXiMni7eCN",
  "key25": "vNUXypTjnT7mX7WisyJbUvZR1iXkHtbFJKqQDQMQZYiy6Y3admYJCdq95qYtJw151ew8KQESKkSwcr6hUgq2HzK",
  "key26": "5SKZFAKk9PgMCXrJjLbhZsa7nuW4wB7Nh8kaN9xF7LkK6s2vGB61N3ykHzGHYynT7HhSP3LqdUfk33ume95oijW6",
  "key27": "oiCYKTD9gpAMYChzArCnZ2topcWu8fmmMUtP4PuJLGBFN2uv1PC99i4DyeMNpBaNAP7zT7C7KLjG7x3qi7TCnGA",
  "key28": "4HxDwxoeWctoebkErKZtj7LxEC82MnEDNSKY6PBu2gfUc6tN5BF3RUHGebdNc7ZmiH8hZaAzF812uSXUoSFJu6Eo",
  "key29": "5eKBAFMGM9zb9RJUuQJvgbsHvTsMf8rHTafWaPedZUQvYNvid8VsKqXFDZpdyhQhdkc2BV72Cx4neH6mmqAroiFL",
  "key30": "5CwD9kXmon9cpgYq2Pn9iKqhDeN1upXGo8bEsn3idUiXFeSve65yYiPnFuYnTfgvnxE6cD9CHJnJuqvofqWFQcLi",
  "key31": "4BQTeTxKtM5HDtJZckn6WkyVeYUjpTWUPnadx3PwxVCBdQHMKtfHEfNJDxc23E2FXmoRaKnXQdFX9RMeXRJmpuhM",
  "key32": "5EP9rxP5gtyxEfn5nqjyVCiqBiTUMxMtucrKSHffRocuSCMt5FK3ZzeEcAQts2ssFqHVnHzztiSoJeBAzjwBZpvD",
  "key33": "poXysnyaeyCqYoeHRukgPekupMfEs27hwDabuapP62qZxyRKMiojNWpEE7xt5yAtSRLYBy5xktD1CikYvro4ndA",
  "key34": "5F9Zg3ZsbF8tAK4Akfgi3hXiordAWCUYRwyPNbYe996Cg4UC6YRefDaYGBiFvCEVsLUmZBH1NMiZK1QJu1XFcRpt",
  "key35": "2KbTENpkaPrNaTtK5LcrZN3SMx48U52HUtXtfVmVH77hdESz6iT1WFZSpN4BSnKZG8eRgZetC8hdVnVrquaJLEQ1",
  "key36": "Nk47cJhKVJRisUB3iYuwbNqmoey5LT7NV2hCbFPKLM2QHKRn49GwDiiXJLWkANTfWMsnSA8Yvu4QmFBULqdK4Tn",
  "key37": "3z6sW8Xbwx3nVxktuEFLHekwHDqvEomRuKjjKBumJtk5sRU41uvJfVDB8YduyGoLtstJDeQqRWguhvuvxgBrE8J",
  "key38": "trmZqohnCTx7XVrXR8jpTP7MXDqXNx2nvdXTSi5FpDroJ1QKbSNFC6cD1yVue9enCC4pmRjmoJhRTeJztSrDYiv",
  "key39": "2iuurXuXuKZxQamXJg6dat7Aaw6eCVK3abUoFpJHJWajeFZLknj5ibSeLroda4z4nvzaKuCrQfeYMH9xTXzCFpcP",
  "key40": "2nXW7WJiZkMKhNGuFZ5B6zhw91XD4Ng4AADJP2wkgwi5E8fgWsJ5MEytKiM4Uhoxuk2hmePLCvq5TE385LQkgB4A",
  "key41": "21g4uPRY3izhNJGFyUciyrv34zpQJjGYmbFxAKkk1dsjcrfRPJNST2D8QmZkAVdACmjdaw9JbKZbQ95p6a7XmrVf",
  "key42": "5P7QKSGDx61xygDjzZuZKhQ5eGoczyEvpSyxXDKdz6Xyj1ycpzQn6JYrSLUBQaQPGoSNLjH6BEK7dHeSY8eexKJu",
  "key43": "5oSqx9xDJyYF7EM5tAgY2ocYjQFntQNihyV3Qky9DUZEPxtZn9pTtAxnwG9h8hZwB7kaN8vWbj8dBTQpMuMkRJ1r",
  "key44": "5X8V3fHV3pxB3pWKhAvDNw4ibzM3DXhS6EFSnz8gkHQ3Un1LMo6qREvB1CgW1o6VRTP92mzzCfJeypVhpQd6KRMk",
  "key45": "5U5mrDRBdXo36cA8nMFtKQ5qvdHRLExMQywz1XbA6QLJ78Sn2YQZqRRnSyo1uSQgSvjXzNU4nbF21wMDx2reMN6D",
  "key46": "9HTNLAViLDzCBzRhXwZz3BwQCj7p6PbN2QbuGDXrFBMuBBMrvvrAvur9qUGuW5aDPKfPU1xjTKQHKcrFHksbiCs",
  "key47": "5rinvWUtJJPDqeYZWKdkJc5FedngVP89xhEJtuRdf99GFPeStTYiLQ8KEuAtsH1Sbq9U82KLSmifZCdhdYLfaLZv"
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
