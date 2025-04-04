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
    "5dnG8Yi2wby9WbfMqWepnxyQxU8REq4c6q5vJjbKRop59ojdv4CBQVb7LVU2Moqth1FQzJxkUMQ1LR5dd4bGNzCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2obitcNUxYucCWnnjwEDdEHQ7Cz7BXZa7523SVQe5RzkbSZhH7BRExZqqaRCKGzBUCW2rg6eLbLDSHt5HTxYLo4a",
  "key1": "3K1v6R8FLHLMXKRpbhe28ZzgMqsNKP2awdjPL2auCPT2xBQ3sH6aPQ36THV369hAu89aMcxhtBGb2TBpHmjQ2WtG",
  "key2": "4uDDZ8R3eLgBWnR3SaCu9UAUiz5PnsUU7Y28Kb329XVUK5EtytEYQ6pA4p6MrTSqeJsh4ErUVzo1wu8ejhYiKAyR",
  "key3": "5V17uYCfeKxAPbMcmzahNAJWD7n5D5pDoeXpRVPk3beY5exys3nkUeZhno2frXirSEmnoZajm7T1jJcywVTHV1Gy",
  "key4": "5z18xVV1fbSUACjPMLVhrx27uXX3ArNKHqg5R3cnYHnJfxqjYRCbt7CQMnusJ7srvq4sDstfG96BoDfTxVEGsD2R",
  "key5": "23nPHJh7kVQnzFTE4eCCpCLkcywn1Jwuxn1hinU1sGHruRfffEma4FMhiv5pLuJPr3GZ5S9TK3PLTzkqdrqq9KtB",
  "key6": "3F77V9UPc1UoZrVhXWUpRKAH3s9SA3kXkqdxrw36RqA451dMa1qEb4P9TEYvLT2uuRGtBc3u7zhL62E2XUtphPLj",
  "key7": "5JC3HMvub1YPUVgjQNnBAwxspJovPnvgsvZvWpNFeHFpvzRjQEBWWgP2vf9ZQfvakhnuAc3Q87fKtE1hQjYiZzux",
  "key8": "2zsAygrTbaBrteSiBk5YzVmVjEnYThFx1Jqj3KcYfb63qZdjGZpPv8VYa9QqKvtASpwkgEm9Fn2Xu6B5E7fhG91n",
  "key9": "2ofP33Hw2zxaEfV8ZUnp5WpiC6dMRNRP6FvucjEC7KXoQuVEx6rqwnVerkMsPuF9kKfvh3coDJ8nYtU14xqhrHjE",
  "key10": "tssnsYE4d87XtCmZhDuP3MrRn9e6o8ZRVPMHgmVJd9H8QewkwtKG8wGDnLxtWva4pQqP7Zd8LemJmGFzywczkYb",
  "key11": "4LWhVCS1KV9w8vrhu6SxkgY5ksCUEhoKaqmnUSWYdjLMrnKL4tvRn7p6GPgN7bAaS9673ciDJSc2farG7X4htFan",
  "key12": "4tR67sn46aFLU9uotuZAvmj4qmNGLrkU7vEp64pV7ciGLai3D4ExLbuM5snBba52SvuGGwB1uJXeXHmepF8cRd56",
  "key13": "5wuAxrnUV8F5dwzL5Ee9ekddJxjjbPv7YfGsmR9HocdzGY3Cb6GMKvjL18oY6pFEkq35suke2g2ohz2cqexkpCYY",
  "key14": "2s8U1dnfeF2Zex8VgDRRsDBgTaQLAcP2EEagFGpDgBFxPjUMRCJTbBeihqG9Y8vGYLe6XXcQcZCnQgwPCRatGPvi",
  "key15": "3VqaDki7uVqXJWKijqWVDhhX3cieofXY2fJjp9CJ1zjREwFeJkbnbjzyLp3mUvyjS8ggQwooNVpoxDLYwcXNFHQA",
  "key16": "dkfyTBuC8MiniNR2KohWefnLdCJr2BAdpdUy8uqKLwJoddw8eEPsi75NL9Hd1DLvyBvTK4tr971BePp4pJJqnDQ",
  "key17": "4e7jAfEXiSLUBU1Q19Moj2p6X2FPUABnm83av37jfWWkAS94KWCnNn3Z771C7HQAZsBj62zrxXgpE8fvMcs4W6CY",
  "key18": "3oLdZiFKWr7mYPgVwoVfJ5qoCGCsJwcfusmX5NV4cSkiYJN48RWGwiNcFWYKf7668uzuuzoryfVuzyNFw3fD82eZ",
  "key19": "2pwFDaVphw55yHuwJu61D9KATMQaSts52njh5KoMSsExus2SXT6tTGHuddKFmqZL5MgZZ2Loewc1TkkfLV92xvXS",
  "key20": "52mrbu2sqo5HNZnKz9PLivTDPtjhzaMSZBzDCAmctShBvKY8S1FBAGBEq9V5pHDEo6KrT7tAcWRD2W2wfkMYYPud",
  "key21": "2KZ3Xhds6dixJQxPkCkMcZjsCDZzeTGtg2iuMxncS5JDSNLQsffmD8Ykgd7i6StTsCmtmFSAPP2MM7yL9A6P1Czd",
  "key22": "25z6seTZ7gCHiCJYGw1CSoYGmj1SzWkQ7h4kq2aMp6xWadpsYtauB6VAUvbf2r77NVa38MwUYBMdxayGLcNbsGds",
  "key23": "51Xjj8XYcVL6bC7ma7UHpXCBuHSdxv5vvcXkhibm45389pjfK18gedTvwY3NLiZBdabT3yfCARtcwHNWaPxxnrnR",
  "key24": "2D3nQoRhWEYHwT4gRRBWJKRncyq1AVWgFDjzG94BxbSCizSJnDAw2kLgjWUopqgPWuLE8eLApnEVx9U3HNRFhFd2",
  "key25": "33HaXfXG1QGPyediFSZF8i7poZ6DdPesUCy1rjr97Td9wBSjVdFssBG5Mt7Kr2TtL3EerKFSdME7LC5qUaogdyk8",
  "key26": "3fsLRRWUufDTQ6991CviFmNihVXuVDqMz9mPRjN71p4h5HW992kLTr8szjU8dZwCLPhqiBES7DPq5UvLkMhnUQ7R",
  "key27": "3JrbnmdpwKgLcR994Fv3G4a2WWCK9H6HYSJ4X4ofYYxr4ms3PBTuLTduPsanqc7Fg8Y5Yn337u5nfVBPvds5HppJ",
  "key28": "214VPMt1pqiRfvGbX8q2oW1ki4FPoxjZs54EhDwXfqUnaYvRucASKQqcZf9J8iWT6iWpex9oJd7UGfvtmz9sTE1v",
  "key29": "3VPztsnufibY644kkeSuD718mtPzHArP7M8DCdJSe7CiVhYwr5JQVueZUA6aLrVum4Y6b8he2vPVc8vd38ptvJzo",
  "key30": "585wPyQ27ENm3BJvhUGw8fAQrJd4RZ8Qm9GpHJN4ojEE7cizfm2uer7d5BRXgpfemiCvo21CAc33F1rEJeTGGAzf",
  "key31": "2nt7n3NTbGkgKMvGfW5ZdNEeL11QWhaY59Nf1GpZd6nESzRsSd5ebBz7gtvhP5vuD1kLage2TNkVtTejsDzD8b41",
  "key32": "4U9Fkmx98xyZvqVdc7aF5uqaYS6CvyUHeJqWzZNfxL8Gyhj6fc2tLmLQB3DYBNv9yWUxUE9GxJpdyH6uaW7LJL4f",
  "key33": "43mnogbPjv6WDHhkvPaeMjChV91rhYx1BWvDpV9yW2FT7fjttiDRr7HUFM8A53WS4NEw1HJkPHnmW22aeVZ1Qeew",
  "key34": "5qyw9TVN7VyZNrNfwfBBGvCDQdTNfUY5sh31WR46dDyTMN17Vnz7un8NivC51Ft8EmDvcZHLXg7XpyGayoxAUwBR",
  "key35": "3BXUR6vEH59uMZVGBWosRyBvpQWqYd5jtssAaKswZ26gwUmb5xYjFRniSRXD4vV8fR1RP28uEF5K6bZn1FiZbfE9",
  "key36": "4u4Kp2qbXb4AvXqoQGPnYJYCZqYqYtvt8o1UtDs6YvUbTMbpCGCLHpmXp2S2HSoLs7rcv4kWpoBQ7wkZEckzpQ8y",
  "key37": "5xinavkErTomuuPf2KPybk3nAc7hMoUJzQ4RrpDZ5N6yyCqxBUH5hp4Cn3bWrHCwsbigcuiP7jQURDC5ZpDnHBvr",
  "key38": "55KznM5FmfLx2HfcbimvNfCCG7QTUeQN6hhuRzrUaM114KRPbE3x8SSdSzEjgSk5MSSinAn25vGLR4W14vc1GChB",
  "key39": "yoTxigZmKZChHnRBTrSm8p3GXWwP9GCqp8bJJvj9uTcoapT8yNTh887ha4H18jWsdY3LE3C361Y2nHNCytFgYYM",
  "key40": "2eFEQNMA34f3fwmgHoUbomLQGmEFDE4wvQevy8kwuC6q1ajaLaguNvgt9wdLZzThRLEwbMb81WyahpZKYFSQnrf9",
  "key41": "3DAtrCoHUWXKXn8MAdY1pX9x3rPpV5gUwKKcFFVVSbzWsodnkViLbdtgdshZZnrYtVw9QxeWHSi3GiMwQ3A2cpFP",
  "key42": "5DJpbGqwrs2CLayPTznjXhAEE5RJ1uzDnCbZ5VGMYCHE3aEiV3FGV3TamQLbqf7yTGwxgkjij4y33LAmDt2auppz",
  "key43": "3Q15Cj8oSpof6yeEHXrMhYVzFWqGugj8YksqJoEkuJt8uagBo1crhKizYSLCQv6ZSVfAJfziVtPwmaHBeKG9zHwt"
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
