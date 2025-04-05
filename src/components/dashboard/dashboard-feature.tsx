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
    "GWvXtmWBJqJAEX1zCWw8kYmKZ9dtmsk1fjSyBt14cgr2736QTYx7AGoEtxPjyZoHFKGtQMuUNZmDFbzyAFHP6XF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VsMcoY4vMo718QUJyYDf1GikUTDcwP16exuQzKUyH5RePhpAaxpADZWRTt1vGfG7nZhcqyoMDms4fzZw9BW8CsA",
  "key1": "2qSdAKfsYbgpejYP54eU5Sx39SYcZme6mnR7iEuUAhLKPYkpXrxNx5ceodqmrMPqQ35mCVfynBWEdMEbPgsZdZ3C",
  "key2": "66UzsNi2PGLm8M6hJNToy4wj7YF1gZJZEW2ZdcCYvt1goUfkmvnN3xxqnZ8CXmgwZAuDumzKjfGq44g2cfyUfjKP",
  "key3": "3CrTorfwM5bGMmM2xE1saZvw3dbdEy2rWXUYhnf9kduyVspPuXo5dWxZtqCJiJrhxtBqWfRaTy7YL3uMHfnFQEuh",
  "key4": "ndSntx8EdgucpgkcchyWQ2RXZWCk8LVfYfSVzRBuf2ym7JG1ZMKyaRCo8VbC5Yz774B2QTBhf3MJ75Z6re9dTPu",
  "key5": "5JpTeYew6XyZZC9x2MoaLChTQVydexFK2Re2wHMQPy46x7HqZojhakNiKU9Nn84A7YPHDMP71JudXPJVi2BxB6pd",
  "key6": "NLpWdUK2g9oEo8Gq4jsPMY7Ras3d672wuEXRrSV1GTDmX8Be2ja1d5tfL3LgdkJPSeoz15nXLrqBFKZcwvWie9w",
  "key7": "2sFviuQvESfJpFhTN5ABEFssvCPgm93vSsDqYJ3yfQdhoENwQP8akEHwMgeXEbgNQ7w1PKS6p8B1PMyMc494wtfg",
  "key8": "4RjhX6gJkzMbeLsjDUcNPBU3nA7BHo97eYac37bmG9esoKtrDMFBbiVur2b8G89rqppk2RMvN15EUcBksHVzmNGv",
  "key9": "CgjLb4ruMbAq7bM1zSjfmBLxT65NbcZxzPLVcuYXbjYNcGqnRDtgUkz3Yh9F9eCMMk5dYC7xAkxAozVnur7wRaR",
  "key10": "61HA6WjNg1ar2uWRz3mWMewTv2pjnuG1kUuz3Aj2JYcfH6ZL6gfemfcVEsSPVCkotQWgycwEWxs2w2p1f3w55FXC",
  "key11": "kWo624KaDKu9Z9XgZt6X2YveqmkbheUPAndxejchZCsU5zDyw8dGyPzKuaQYswRnFwjtFapATyB8wd1x1a1JEyL",
  "key12": "5dTacjnufib33bn8pi6u2XyapzY5utDFmoVJG5R1kg6zGvWQ1qzpvCagnMtf7GRVpxwSF7NLJNdp92hWoV4VH14x",
  "key13": "2ADvAaMHdwaS4NU4qLSpyigg3guvjPuZQ6XF9MS97hz6rQqYQaq7fv5kD7rmaV5VBHrs8vvKrbQgSLtT4NpWJZ8x",
  "key14": "2xfgJ4X8jHPut2uupquNpj85qfqU92xtL4ESwupzStGpgsvHiAmAd9WFTTMRccSXAXxJFvs8suGri9u5FmH3e3N5",
  "key15": "QiAQLWvUMDXu4Hm2kWogu7qPFAfC5UmHrp4zMWSxtKho7cv39MveZPAD4GXSNqS7G2oLUq5HS4vChQ7KHp2Yk54",
  "key16": "5x8ybvHRTVH8WuBtTz6dWiZFZu8EEGyPqWrEkb5duCCWMVHdZhmn2TywyvWyTeJxC5jYX8evkhvA1TM7LDEMXVqv",
  "key17": "37Ku7YTntUdcQkzG6M49n6T1fLQVuEdS5udTvbG3fnUwb2u1KWDR65FoxsL5KGJTyip6cCBnmENSQWoecYu8Q3JA",
  "key18": "42sKmk1W6d7WAGV78j8PTQwkuDYMpwZM2JgCxiBVzBoi8hSJL1HGviFpNZafcNFzJyguNXCcmh6wzu95ZiMbadEk",
  "key19": "4ujm5SAowkHH1s4J7ZQ2ePmtWQFsBkxwqPJh6N83xysSofYadnxuwZcehoYKsRvi64hWirE8QYKMPHq3KQN7JUB2",
  "key20": "25Dy1Wgc5JFXKUHT2ryYVih7atVRHBYytg7DJxvwnEGu6PMRG3uqFe3JeA6yFpf1SAGchrk3CQYhHaXtvWgaH6gE",
  "key21": "5FnXYqXxmJXqrjasQaGM64ZzWB1z1aN8L3y1T3oHNEVqQB5LieCGKjpbS1pBSUQMK7pUhZyfr6UyQnxEUY5mzjQe",
  "key22": "29RXgiw77qeNVHeL7sTP6jpPnVK12wNyMV2drE7dVkRVkphvwAWH8pUQHDpDctXpfoM597ED2prhMLjA4TugWktk",
  "key23": "3PvKTNsAmvA1sVEm9nQ7vaDK2Cm9mZgrGy9pY5ZJXvGYnsufKdhJv9Yn75aciQcgS6Z7tqrME5X8pERxGVNGFfTn",
  "key24": "4DAhFhCsMq6wA7tyjYYwLkbVnhL94iXCQs7FZ8V5Qoj5Di6GfmuJrDozVrvWDxxtW9obfQpjxiiVhQQGTxBr2mkx",
  "key25": "2qELVNYXiFaGjaZ3sw3BSzfefXzQy6JwFuArYNnxeu6aSFdvrqR8Mp7xSipCqzs2t6XywrT1YgS8g7hqLJLsXG8w",
  "key26": "xy5cm1jkwfTe4hf2Pju8XabR1jEAXaPeUbTk3SgaYjVCEUgXYNZ3eaYUn3KACxMYD1eG92umtgmaYnyVnmhaDVx",
  "key27": "5SxwgsEUBe6SHEfgxKtcc4obxBRSXhbteJTkyxGuPSU3nAiSGmrYkymtq7UFrjt2pXddNnasQFi9B2mv4AxvdfKw",
  "key28": "rArFsf2VXbCS4nhe6Hs1Vz45LQg3z91jSqp624KqyuHwCZusZSrqyqwMuZeSVGeLscdGVmPaXVEDfZgYTgYvmW7",
  "key29": "5MgBn4gJp5HG9ToQVDCmz2R2wFwitSN3s3xBnWYL8E1HyQe8u5YDwBa7jhK5Q775krgjyHRNKMBkc9F3F73X7kmy",
  "key30": "4bUpujXstLLebBUc4tVsj6JkaDyPPXi9yCDvbKAr14qHGVcb6xoFGnDmu7GwnFiK3GZskBG84BzwvHyKhgUfsMgq",
  "key31": "3V541obD2TFAFqJ2UuQ7saifh6MQR35rqc38Xuwu9LeYAhgvGXpPFTc4JBJAvfDeyndPFW3bfWbYTCWgyouvdLN8",
  "key32": "5KoVXkb2w4JU3HHaaFYhF7BtDsnGsbQqftuXfZcdFpGeQ8FC3RoaKQ14ANZpknzeADG4na5DuZjbaC37L9E1SQc4",
  "key33": "4GsZBv19S8mu6v3bHyw8CtJFxQ4oLSPKsqH51rsWc1BmYgRn31oDbTd7G1rFpFFeCLpNHGWPj2pvPLFKCnFHdTa8",
  "key34": "3TmDbCqDxyRa2ieydgay3BhMBPsis7dHkKEyEjpg4fYEHmEN7nFkecAm29B6sKW4ybAp1NGrCxFhfT3CqqE9w1c3",
  "key35": "56x1HahPK69fCpXMp8Vwkkpfxt2KVRU45b2M9rErAxdbdnrAxi1dAFX3o7oKsatY8ATNaXW29vtTcCifXhSvHN6g",
  "key36": "3g45kmp7HFLYUgx6dV7yizux8Dy5ckEey3c7KuVmyvEk62DcooHbbHQdZ2B7uDu2JvvKU27kSso62qFB2gHhDUFE",
  "key37": "56jzEn7CH98hjR5xe8fTfdtYyz26popPaZjDFSLontmRao8JZEdagwL6LyeHcTTdaKFNE3unFL5Cc82EGKbnLwB3",
  "key38": "om1rEDYqsUc9n6AVo8c8DcgmrqsgAtwr3DX6adL8eshJErWGBg7hx4z2aDn9XBtFuMGQ1x2F4AWpWvcFcHYEuA6",
  "key39": "hfpJtbJ49UWreEqWb4jwpN93GFKVDXFekdTfVj1J4NzCSJ7bspkUHc9Q7uwEpRYQYpdEWgHUAGcGLjKcSS3MPSe",
  "key40": "23EytM2S6WydVVKWDebJ1yF3Cdw3dkcA4ApgtGu79VDZHMA3D3wDZ3TXg6C8zQvaZUthCS5HGoUpbJRwwsqwibQQ",
  "key41": "21sBDUn1TT8K8Qz8f9nxwuqoNQs4XWFx1RuGgALzo5A1GShuxTzg6YJp6Exa6bQ9dk7irtjnZcw65AyqDaFuxeJ6",
  "key42": "47QSgr1AVGA3U7CyPgrQRthHGpnaLhWrsy4RujggxTZ4wwCcYsCo95BDs6QfuyuLjR1UHwFKtko4xRGSS2JjBcWq",
  "key43": "5qXoziMNPNwYzgAxbmycY7YNgdrKdwa6FkdR3umTioUC2v6T7am3juAgFW1nrjjEoqxLt3aDvFSyBwCnA2YSJqMW",
  "key44": "5cgoZShnR1RNvEuBVJkiBuPQGM4i7E5rATodfhMYKgq8z41ja8nRu1zPiSz6SDVscpRagHwh8g8quP14yHcqq6Rs",
  "key45": "5Dz6qvQw4pjW2bpbfr2W7AMCNYPCTgptpm5Dzr51Ukb3RGY8ZzrW5urD6i8TAUrhFBvNgPVwxo9Kdc9gW9exTdsC",
  "key46": "58qcESEFRYGjXycSnCq3UMgY6sMAft5pfoJXFCJ2n3tXjcTQ2QBQRWSd76eRHAE4fABtz8ncNJtZK2xXWafbUtax",
  "key47": "6HcuWhHuT6z5czg4fA1dLKDHfHsHiAzk9pjcqMh6gdg3UVSxVnvTsNoza2sSKRMcF2JCNp3jKhgWEopvESreuAn",
  "key48": "3cAfErhJVQH4Cvx8JEkAkPUJY7XroTddYQXSV2edvp7cvSoBTzi1WHSAPqF7c9Dx75TH2U1GpUhSxr2tLLme6Rdb"
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
