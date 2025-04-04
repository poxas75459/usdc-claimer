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
    "TtkSgN5ffgMyjZTZXf9dvUirTuZFpa6j7i8xAmyT5BEmjEGjXihpmqMFPsVHL5GiWXqvKqdzMbtt1JVNTwzDgZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ARpuBqzHh9zJdm7aBzK6g8zJAvRfv57j9tZ5AZZhfTsUE94NwHuMDkf3bSAUpt8y5tmH6dCvso7FpasguK2FZu",
  "key1": "4SAAha8AA4qLZhvNEMn2o852BcCSzGiGeQCx6RS6duCLgxWPhzUQguJamHUKC4FoXwkpt7Q23mjB12L4x35ek3Q7",
  "key2": "4ExotW5F1E7CjQhrJkNeQCxdwS9FuscCdLeFHPn1eHqsgGWmzqzpo3qy73tTCuYPEUyAgCod94nDC2opBifWggE7",
  "key3": "5wqUYBQoF1BVcLdunmZ1d34pWp4cyZpeTwyWJ1nWDYraKzfaAsZy4m6W4x8oT3ntPcUxwVyxf3nffSU7XjGbXs6w",
  "key4": "4ycQuYt24BkB5Dts4epsWNc5uz2HC6CM5NxRrSbg4XmETwP14rTay1MxXvVViH85TMn4hPiywC7uTp9KVZFLxy2E",
  "key5": "2xTQAkQtGe3vPWGiRaNNqmRddcgUc2Jd85DNYGXWjFpYqNxTUjedjP3VSVshFNUEe8yJNeCRaqB5KrFZdnbmYFrS",
  "key6": "3UBpCLy6odVjqECnPm9UWm48qPwBzrob2YEgc3uRWaf1snwMFqzhb6DcafHBfMnc5GfH9yKMVdL3277NGFpbuSSp",
  "key7": "ixzQVBQA7tMZXBt5dYCXyZPNLVGdJQFFfKvM38BzSdSrpCYi775fDn72Yybn7F1qysWbyuzPr1KdECrAHoyQeMM",
  "key8": "2Lv6SH3HRuRcr42MWcXbYU6uCRM32P6GVbHTPLN8xVGFovpbhYExRbR8u1xntGLXeufZ5gvZWBbAQwFhyG4otJKw",
  "key9": "3xTbwwKg1MHts8cyMm48BJ8B21V5R4zstmshA3JTsLqkgjksBeoNBBHvCFqta26xFYiornth8DzGadXiRTVikZBE",
  "key10": "5pUoBZqYVc1EE36VcnU48maXYTHfL5o9WvMVgemLD2yW33jWuKY8JYhUcFyQRQ7isfKDqiWnBAiJmdso5nVkk7Js",
  "key11": "eFnrhmr2VNnAYwhDpFL8C31GdN27ZH6D3sTDWuPCzhTQewGVitDc6eQZoNAv3y26kK8UpfGpK9n1ALwjukbkSeq",
  "key12": "2Z73qezy1WbsAobUo2gvrhoD42ZQNi7u5UgikEQAu3vhhBfGHn6jGueWjNYmuNfdyvrBRc1Kfmtn4qsQBetd9ved",
  "key13": "qEbsWRvhopT4GziJeMibuRs6By5eKDoWtjyreZ9H19EHagHf8UKUbmeMMDrirQFct8hEkKh2rLQgLbhDJqd7UR3",
  "key14": "3M4MhBg8EYHARSMaVDa2vWLLpqC4Chg2xxRYHKsGtQjZWM4DDjyBVccYphmdd4aprgnrot85Y8ugiZBp1jEgsgDp",
  "key15": "5wPxXFavoGWE5njs9f36xbNjN5EemGR4JfJ4tbCYgqMEwS1T5iWic5n5VrEeWEjf9gtViwExUX3uFdLWKak5X7XK",
  "key16": "4DTig7Rr6PmZUUtcp3n9NV2ghDU5rvMCBB1dhNqpL7TU668hXWUFxUnpPVFeZpxZmhLp2TcUze7Nr5KRm9BP4BZy",
  "key17": "4s76z4LsWhFAY6qTWfciGk9brsD3vGXZa5K6Qo43tUWBJAds2RRnFizveTPxbdr8SM3cKb5WtgJvLxWg74wVBZwp",
  "key18": "2wixJMBbXbYVAueT3VBLAGUWoKQFbUqLrzTa9murYv8GPW6pC8y6QeQSFaBnpLdDs9keFGMAVsoxbgbVtfuDUpT",
  "key19": "4ymNY1gxJZCwARq8mJgqEXWki1oEV95La9oF7m91CMawpYt4UFjDtmoyV6e8987zdURrGU52C8Te1idSNAVeAoUs",
  "key20": "4x2kEghoUGmRZK6DKweSKPeF2xpbfqsikb4q5PGUz46ZgFrPhGNNFL2HU6qUjNma5gHpzsyPByfFUu9DrRwvSuoJ",
  "key21": "23STXBrv9KKdjPvFmr4VuGhpEffy8ohkLRxUyVMo6AFs2s5nrpkjYtGJTzyp3Y2iTrHVMTnaVPKgEfv2bFCbe75P",
  "key22": "25cGCgFp44i6mDdd8TFDcX9YdF8ucAFbBDtxZzQRUUzemHHEey5W7fpDrNZyEKhdtvvk6r3oyfkSHcBrbRSVaBKM",
  "key23": "3nShQT1i5p6YLvz3kDAjAh22BAackgnZgxkwh6UV8Rrck3pbEE4X743AdFundPvf5vkDriTUqpPcxSqBSEUwoThS",
  "key24": "R4TVCd8RSHfVxZEyCJs3wjYTPobw54qVuMJSCv6k2HYt624BzxVUjKc21ye3rg5Zx4scY5g2hx4S5Jx1TNQ2MvN",
  "key25": "4wKuQ5iGaYpuFEGHnxWpvi8hzFotfvgD6uDtjgbtHdYsNRf43FP7cfpCGSZmgDSGTkjMSPW4B4wcaTcHta7F3SKa",
  "key26": "3n1hGfk2NTBGhJaqYZvguzJXy3kPeF1AupbSUAJ2BXRvnNoTzkffJEPHCHH6sB7hURiz88VsK2C292RH12aGzYPP",
  "key27": "4S4iX3onKDdotgdyDTjvDmGDyN34otszUAAXmJtz9qbgJhHWX2AjUB2CRHDTq26KFdYFLrBSn8KaPVkvRf4YmSBC",
  "key28": "53BAMQFXn7Nq4rAwX8oQ3xQpZrd9DVc3X5GQ82LgZ5dzbjPhU2npdtrGYV8ma4Sg2M155NyXCxaUiEByKU7EZR8x",
  "key29": "j52kTmenGTG5oMpibTLMCJoFPw6M6vAep9no16p7aycktvi7tBKEgeN1RgHziTEjrUijP4US87wWzJtA7YoyFcF",
  "key30": "CsSgMG1zjzStvGQMksAQzfkPJP5wdySuGyvEMNENLSmWVXMMVL4drubKbA8538YzF766dMQqDJdC1JdACqU523q",
  "key31": "4d9U7bFESNge9ajwqgFvcLfNGuUhun783pUrDAX1A5EsFxVzY2KekTY2MCud95Zib3hPzUpKhhcou1c2WrMcHvGi",
  "key32": "64Teun4MZC9nKQFz4DemXwSTmS6vGMweBY3pqZ4g3M5AFsmacqt4MB7soQPn8GhLQTfxHV4NqTzmyoUAc3KvYK9V",
  "key33": "2zzaGFVAAoP3CwgPc6gEmwCEM7MDC2LY7X7WVqQnpM1q7cyvHs97h12HtEfdiVcRiGhdJx6UHxpSVeNSctpEXz9i",
  "key34": "46SVnim9oMRXbvDS7iSTiMC22qsGMDutakgBRBfMfZQ3AHfU7hEcCi6tnj8s7YBM3JYbbCMaV9SWoZFonpJ4cAFc",
  "key35": "3LJNqQYCEPuRF2agNTaCvAQP51txSSsowYuv3fUCCXYnzH4CCEShfC7fpFeD8mwBNdw5GdraB4ZjjYYHxgr3hSD1",
  "key36": "28sxyy1ZxiZVsra9vxWFJhfbvcgBEW6zxgzjGnbRkb8Ljv5KaMC6rB943SBo1yCWimq9du4mQvgYFmpSJs1zjYwe",
  "key37": "3VfSqLoRQwaj2BYqg8c339fw87Z4hbMQgoAExtyCkdvg9pNcpB6R3Dw4W6GS6sV8n61zLkAszC5HKz5sUadULHpN",
  "key38": "5CC3j2up4sEZhsqpt6vQF8EqhWwRz8EaYy4PctZFgfRqAoGrKBPx7ShmsY8AFCd6fxx63tDRmyMqWk9sWxgU7xby",
  "key39": "2cmg7RHVw2yeqmMM28WnWZQdxs48xsgC7XWc73RwVAZ9uV7CDsMbTfoCU7fidgRC2e1ijpdnD2DQWnj4KRts1qjw",
  "key40": "5BndaWojSq8MeUcqWiejwEAFCtXNCbThc91J9h58r7jtc1oykfDA5ob7Xz7p8SDFLgzUt4iSNkPYkEUCXKNh3kMA",
  "key41": "55yVQQf4WQYhroFp1ie8DPhGv3ibvjnNQQopQSVWiPsAoidypaHS4TjBPzhVS3CaLgp3js7oqP9BKbhnRnxqwrdh",
  "key42": "4HBoFWtvy9F7vuBdDymxiPn9DQzD8G8yPDdRxxcaAu5MocMvy1PX49uQZiv97RxcU5oUP9gUaSMrz7FYvc9G76pf"
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
