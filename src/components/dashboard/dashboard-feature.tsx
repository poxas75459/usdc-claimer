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
    "5pjbW4FbgQFTnHaMoJw7SddoWm9iks9sckkCbQfSu19BQLaxqbn6acvuHmSW68vKumUgziKXQ6pfCYCUQnmjKeQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L7vp4FjQvX5TdMaV8mCAeN4bsBfbEBDAwLP1SbSDiXmG7Jo3h9gKw1xjpHo7x3VQ2wF6At9onKpa4MZ4xFpFk7u",
  "key1": "5JNfMsM1eCLgNg7SW2Lnv8C4YQxMUsb8DqFpPnCW1d2YneYoEeYYA5FJxupFSXhJy95gZrxYkbogpiw42GKGxX3",
  "key2": "3BUVqmFvLr97ax85JwiGoq243QUb1Hwk8QMDmKYpRE6E2r8dgpU9nPu28nmwVmHQQtRXwcEKdmBmNWBs3JDLgSUJ",
  "key3": "4fCYC78WWe8aZt6nHhgnTJYFFGfNbYEp7oUKoVD26w4z5XikHVBeRwr2FoHXWY5AC8S1LejaWb646tyN2vCc1eiZ",
  "key4": "3tRbTVAj9NLYEkzvpvNFaGemKPAiVjSruddDpwVokZr84E6Ryhy8meQmgzj8wq9fDx7FSfbnR2SDTRz7v3xr3tzx",
  "key5": "4s61NZv6t5okYt7Xqi8QmRJFJywjQTkVARvu99cmNRK3b2RipmNxcgxuKSGXqrHDKNuBf23wzDFoshYYK7xXzoZ3",
  "key6": "3hNE85pQNJ93DKxxf1JxGVTrnsrfuvkyNTXqW29F8nm2NcaqKjUzauKvbqtViCKVfEAX58d7hfvzkSWKM53i93uD",
  "key7": "WRZ2TvBHixQxGnUJ4huxPjyczFWy7D7rQ4DWd5nY8F9KwqXk81ATWR5fBc7Ez4wPmtGfkxPaoYCtJ6XCdFRSvuY",
  "key8": "U7aNAEz572fRbZwCQWhVaxhM6Qdq9jr4rg3sZ4mDQu7LPmhfQTZWHya1ajm6BKTNqes1wVZTVAdBjaXweqauSGL",
  "key9": "5V95fFWWNEYFCGte71LpkWw7oaXFR2T8owrUbQxQMJjndNxVZdx3CEbKMmihs2orKatS2prA3sxtE8gKbpkLg7zz",
  "key10": "9rNxPy9f4cgzEZxG83iTmF3EH8quuc5UhNc7Ehd5R1ZReBo58jiaq4FD8posrpf6m3kRW9Zavn2s3WhCst2tUmg",
  "key11": "xVfbu4U3X4veq7xX7ZNbG5uR5VkvqscEBvndgifztSwjZH3Fd2WbsmXM21GyTQXnNhbqkUBYE4t3qdc2AnTg9qK",
  "key12": "58uYUh5xKBXzYoFn8sZVMVWpY66hX7yc6LQTaiaWz8hFs4NQHMgGcEHRUXvaXNubVFq5awPBRu5F6pFNtxTgAB7M",
  "key13": "54PiPkykSbm29FWZbJgRLa1rwTrB7AcoWyJgAcagsH2acK5d8UCwb6st21c3ZaNRyAcHz8HAXNZFY57vracb2SVm",
  "key14": "2iGNwBAxW5tKbbDYxbRGNWWZBwuSpjJCTazyFwgxMxgawe3JD2P8YupVDBYsDaRkDWCWwMoPjpNkgGGHcqdRfCYE",
  "key15": "5xBDrn8Rm2LbUqXSzCpiAHLaJkKuMv9ZHQJZN88AFu7WaJDWEox5Avtu6iAvqxoGjjdDt3tzSJtboCsPHpXeLq4D",
  "key16": "28q3sA2g2kpiEXButUtKiVznjGufE6ZJQooAt6L4AdZrtUGiqRQh6ahoe1gGj5kGWdJstixJsQiN6SH3pRwL1JoF",
  "key17": "4NgiL3V5DfQ9SPQCaojdDR3wLY95iW9QtwAn2ot6iVQu3yv16ThYTzxioKwaco3FhgfQtStmJXa7sezMRuJEhYpr",
  "key18": "4GsTPndxR4SS8v2XeaMMt2JkoKWmFPaLYYrweuT9KheP7JPcrXBAhMFcrMRSVv8khP9CEcUmgyCM4PZtR8Xs43kK",
  "key19": "T7dM2fQbJqk5cqLUFGJGjTv69RPpPjn6ubCUh8Se1ecqTQ1mh5URQtHHW97xHt5P4fjtx4hnQkB9h1yqEMe53K4",
  "key20": "2voZsRktv2ZdPsdhJAh16V2ocTHCHWkCz36VnoDGZ3TPJhESWf2c7VujEYbq2dhjZ2jYDg91VsPFB12xuTtkmuhk",
  "key21": "2iFz1TWymyFgMjRyDf6WvyGmSWKY9efxrQ4m1pkbsDqk6tr1fH87TBrLB78vZacHBUNJXELj2TwiRw8UppjQRakn",
  "key22": "SGVgHg9WAT3xufsn4gGHtzwrRistwPF9L23hn6ivuSAX9Zx4A6PED45Sr5WrTaF5EWq7ZEswrwN3scVqt4UoCcP",
  "key23": "4i2Rbse1XDmywXi1s4xTSQzZEb8wq382qYoC8QBh29Cdyc6AfzarywJMiScdcuGBB1tQnqP8pKdhHjWpAsScnNvt",
  "key24": "5qkUG9tLnYvc5thxk1t8rmotnGfopTXqZ7KBpXBUELj9aSTJC37AkaoaDr6ZdAiWCPWfnCAXhbSm5fSczLQPsws4",
  "key25": "5zi8ARMz5UtsQJtyqzJiAentH4peA2CcrPb7BqkvXh4Cnayrd42ZGyYSMYa3ejpJwjMrmsz9xqxNdeQhKuRUA89o",
  "key26": "kWvnqw9FzcZAs7kbrQTvNq9NcGp9WSJLvKmdSjBsbseuXvYfJvv2NYXFTMRUd6Vwd5jcBCGAx2hWG7V16uVCmod",
  "key27": "3VwFCoWGW9rar5UFtgEDw1fv7ejuWnuDC2jeZGjDKMdbNhWRSFxuvCYbj96yZNm3Ye36EvX5PiMHyewfT5RW5Z8Q",
  "key28": "37GTRdgiPgzMRLesfs4mZSAn5frAYG3daCPCJTgwaMkLNcjyrdC31A4meV1CeEmUUXNnesfEzUP4qVnNxxxmLNJq",
  "key29": "46ishiDDF3SXUttZBSxU8mQBk88NLckJwAEQEu6wauA4kxMXoQs98FquTMSvYNu8X1ti2Vyhvi8EjLuc96sS2Sds",
  "key30": "2etgCNyJ2ryFLeCgP5oCK5PWQc5VSGstbdXXWhqfbNdt4a4gGLkYviHFb64SQMXTurELhozkrXvc617TZdN8Hvsv",
  "key31": "45CLvq8pPQDtD5nJFzsQLtif5kisPVTgdm5nsu4Qgdds3nUUusWkiWZL8X7LgE3dcDbwdFumfJfuRBRHJ3mK5PZa",
  "key32": "bqcXUTYFPm5yKHqgpD4LoLY8B6RTgBoaN2fxeeHVJU4yt7vWkzBfGkZ294UEhqMqqSFmewgSPdAgLaFyQYydMue",
  "key33": "4vX5HjouM6jDssCrQHME1vSb7KWdgBwpdUuDfQA7hpWNWTSsdQwbRvTMBGw9zTBq4oHnD981CLjxzjJ4RPW3k7AZ",
  "key34": "3rNaQpgeC5bPcgf9FCXfh5hWyxKoKegjJhLR4rLUV5MeEzddqvuHnLEtD5CHqYJ5C8YBbv8dYE5Z3hs9721VEE8A",
  "key35": "2JdfZYnL16WkRotpFjQrbegbfc1Ri4eJobabKU8U92XfJG3z5tNAQu1c4YasmzmMubiFuxR1Z12q7RwxaB6fQtbB",
  "key36": "vweVMkCgj4NDxLTErt8BBFmsTR6Nxm5QoK7upqEhsp2pAVzXk3JREa995dLk1envdtxSytRMSTg87FWUiEMHZor",
  "key37": "WjvHwdvJQ8WM59mFd3ECvHprRtZYvvxZDB1tUNZTq41tso5uho5vwKxF5ufogt271RPPCdfVpqRdagAsQJ2HPGb",
  "key38": "QcveAZHonK3RatvYhhD29Ypysc32QD1fP2kWoEuZLFCrSazHtV6YqhmG4RY5B73GnD89eekdDwcpvhSzQJcmvx8",
  "key39": "5VvFRMUXwSBRdYs6sty8NqiZ8aSybAtv6bcjTEznmLFTrv6tz4db5Lxwqxt4BpoJvhWFH8oup44kgsHP8ugxanJT",
  "key40": "5GYujv3bSZHiQb2STNwRp9JvA4BX52o8ksrP8QErvKHoq6sfn8sWTVg7kkH4hWy1gVfj8GZhEwmMj4dH43QXprmz",
  "key41": "YY2YaCnngktAGWAuyL427wNxLmKEGPjoBQNhr2NTzPSHJniRkA8cSdq1pSEbSeUJ2hFTbH8mVL9Sr4aL225N1dn",
  "key42": "3ALZE21oepig8ykZy2NsyTo17U5ykpR2HkBiscPqT8Gp6g1HuvnxL8dU1vpSFkRshf38dhHL9e3VP3LNZdE22Nm1",
  "key43": "2AJXy1tDuuT8MNUXkewqiqLgFqK7hyV5dpbY6JrQt73w5mGRCLa8dj8uNbikqyRv1L2M7zovpB2Fb5c1pnSbSPW9",
  "key44": "5w7nbDsXirMaMbnqw9thgdv39qzR6yHKQWSgPGFnTb2TYrRujBVkRYa46YnVzyN97rc6RVVMFE87RGnS2xPHXUXo",
  "key45": "4VHXjACmeTxXuupqpXESVfcvsocu2NYJemteTdqWkGwhZXkbebt4LZV5TFPHWjUDToLPkQTSu8LkcpWxQCLkJEY4",
  "key46": "3zPLEgQwZryLA1NLy6GBANJBq4mnq16tGTm9zP4HgXiPS8LbTaNiTRwXaddjXeffennXDt51t13iiPvgCVa6NCzd",
  "key47": "ufxUtGadYS32hzPFFHKYRGXKHo1e9noMkmNAZchFRvf5eTfm3c19fHTiKjRYEQ31Q7Cbsw9yrqC76Q5pHnxxdUy"
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
