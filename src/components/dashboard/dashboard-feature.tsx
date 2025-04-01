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
    "2VbLTooxD6KjVXRwBdKvK2qeacqQXL4LEgnq5Rm74GhjrRa4b2FXxNnVczewGFjvyKxR48f6ZYdgoYNtP47Sfsv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e2mc524CLeEp4SS5VTAUrjYqPa5CDevZXf4hYA9s2T4hwy3Fien1BfLNFJJeaW25uo3gxfQDzaGzaeB9JEu6Psn",
  "key1": "4aU4icayNPdYL1FHyAnwMiGqCnzyTaYzV3W9LLzmcZ7UNQEagLuSnjVf58dkngWVTtupBndEFi8ZY8ghoGPAbGzc",
  "key2": "3ETBnL8SciHHpS8efhbiUvgsuwyBd2zck1BBtY7B6C7GKkRPyxFvVvmfSgLGSkmUNK1Lq7Gpg7npA1917efbpbMo",
  "key3": "2khptUWffTCDBz9h4HYD313zLinuzX6ngafuiUAzcoqiyuwE8mKPQ4r4VxWvHsXYhf8CHf6iuorfwwGCUnQEAhrH",
  "key4": "5FNpk2X6oWc3WaBZv6cWou4EJcMjZtkCMkCY3yRbLStEzHr3K3SsUBA3p6EttZFYx4frJy5wnQjLkFUpam9qhYqP",
  "key5": "24WDc86fKknrA1P7HaAbaxBd4ZmUeP2HtQth5VtEy9gncho9T5qZihNAwcqA8GiAvg3CHGMAtriUwfgs7kSaL87V",
  "key6": "5CQM1j9z6RNPnEHmLxxYeyi2HD2pmvDxWBUgvRA9MEE5zW9Fyq6HbQnem7DGbSXSiMcD4E25LB888MDZ5q5aQZMg",
  "key7": "4C4Zhoyji6hsuFiwkbj8FfFm6xJCnf5udhMCN3XtefCtC82f5WUmDabfBJG16mzEubtep4uJAmahGTfdCjp9uHJ9",
  "key8": "2sMgcfJbH9WgFtpfyAZZr5unmdZK45N5g1szCtYSdpWPSGpVxKGb5C6jWEEV1uFVaL6ZrJ4ENdpP2CtCALurb15F",
  "key9": "2hRobMoEq2WFzDNkVApFuUxsWnU9bgoxA4845CURT1uWsNPUYEYupYSt6VPufvtLfWaD9fxzve9aUtWLzvJAoTtg",
  "key10": "3em9DsF5TXTNyonyefarn21MQRxyEmktBk8HnmQN3Coj9atFLDNDNJb5g1cLf8Lzw4MCMNbXw7ijCerRRcfjfjsS",
  "key11": "5L44wjRWvCwt5cCN1cZoHyGSUHTVJr91zZb3Tz2oDw51BcBoS46sx2WoAiLfjnUJTHqgVM8TZbqr3CMCPWfvxrvG",
  "key12": "EbRkGSU1WZTePVb2ssT6Fa1cQdSLmU4Ah5RXY9HWeEQzdWvnLJTR3PFCkg31bBwnY7LdYjiWhoWR17qMQgA15rc",
  "key13": "4CxD6nHhRR9PHCvgn6zhAoDsz7yhJ3zBiqWUdeDgdbJWbmiosfmB6XKv7RTQqoQ1yFSdTTzsLxfM5pDsPESH8Gwu",
  "key14": "38nVq4eYB3jKTPqgYDw2zwPMSgsjvX28qa5CfftruuBeJSrWHnrPiTmLJinYtGHLz8RSfvQecBavGNQkAhUBgGDX",
  "key15": "3QswCFNpu8Nq4omeJnYRfQio8q4HBeta6BTTUtZBtcroVSfcaNN6QHUZQHcVH8XiocLUZAMTkZrrqM7g9VCDJt7x",
  "key16": "2CfqfoT5CvHViUiigwzE74qunKoXE1z8kQCkyBid7vGVR6GRYCLcyqoNGdPRModqnbsZqzxDB57jPyd3XZ627Ut2",
  "key17": "6acpa6vVsaNDgXhp6MzRXhP4XZujGRDKS1W9M6Sasn3e4KHneNHVSFuK4boFH8XEjnc91WY1vbMigt8as9T2mJd",
  "key18": "51Qa6MHtcsBkPQab2sgR7tbUAv8aAPBKBSWNVtxrhYnAaVbcdJvBpG6B6KNQ4msAcskpzhF8a7c3HNzwNmjUXv3k",
  "key19": "5r6qK296k714S36RtsvHJaY1rstZazueVvv3PfFAkL4Fzsm3ucvGS525uoQeqq13GDD3Bv6fKUpoZdx4nytscBR8",
  "key20": "39FX4NHBzEkWQpfXgJ7sWsnoSQQH1uhLtXzh11yR9JNrDAWbuc5dGJY7NBQQyYxhW4CXEECu22NXkLscqDKwFPCu",
  "key21": "21n1aPJkzMxYQwRdoYECH4XpkcK6FJSHsHVjbjHHk7oqvHaVaz3wYhgYjWQmR7S3devkSEck9U29uPfCQwcMjCvB",
  "key22": "2uaheghZUTD7Lm2UD9j2ocYNyLbZP6qikGkj2H6tPmW4SY4wcNuCJ5ap6mvq9pGgmXXyU8si1dwt8r9Zm5QqnLFm",
  "key23": "5qUxZmDqJaF1MpYw33HJJCPhKKkp74assX5fi71uuQdBKQEuaNKUQYHEefbntgzp7mqS9utaimwXHyTtyYA1EswB",
  "key24": "3BXhGeJKzfja9APGuVPc2XnJoswGNa5LCH2ZbJgCzJLF6Edv6LCiDWgYpezNXa9oR3rmppWqhW4Y8g4WzbAs2qNf",
  "key25": "srcFaVm4VArhtzhJg1oELxmGphVmE6JKufP6jCKAwk5WxPU521S46mVyFCiM2o4efwDNrmHSB8E84bEkiheNac2",
  "key26": "3cQuCh5HBYfGRSeeZq9uwHL4CZUwubPHQhrVkeS9pddnqx7mRMF2qc8pQFgsumjgfmELq7TuqF3BbNqdJQsDRM4o",
  "key27": "3gLBzxwvic7eS9uFMitUCzWoqb5XCm9B84BshceAZbG8kTrgt36pzQ5aERDKMpg6LVTqn8thL9E2znNU5bkW8i2q",
  "key28": "3y6rz1ZNQbVYYCLGFu1ruBw9T5KqVvFu7ptxoPFH14QTnnHDxQ41sYhjau1pvcCHLvnFbF658e94WcZodNX9JrfK",
  "key29": "2Mf6t93kj1Nb48ja55PDiiA4JceShvokzAEPbBddzQBiLoadCeNRPWaMMSVdUmgyynTyZ2mQQChjTKYzTvdMxyTR",
  "key30": "4JYFFArVRWcqiKx3efR7ZsT6ikjovGybuEXW1Zxy2MyzNyxJJS7nA6ejjBNBAAMDdMjbJ7Fq9DbKpGfDpwPDCzrB",
  "key31": "4Pw3ezRpDSuLkG79Znd6gccK9Zi8DhU1JHZWKQrum9w2p6NBEQztaDjRWMLxmVvLf6EJrtGjfRV5aBEF1Uf3SaZr",
  "key32": "2mBC2ZdgGzddzzu8swszQetDuEcJRknTj4wqFjZAv1KyLtJYBb6Wao7hzXiHieH9r9FdEzoFVmCb8fmYGBwcezcC",
  "key33": "4W5QY1FYrccL26U7NUbvon92NV4xT3eG2L8964mbS9Ay19XBM2hs4XnKqSH6txTWDLMEkuSbzYofSiaThEd8BWa",
  "key34": "5fcNrgUjBzXotyCa46wvcCnZxt7qaGTdRP7wXuDhVbqzzXQeUiFZi4NtZgejPogDYeQreriTP8RjD9hLq57pGX66",
  "key35": "64Sg9yvY4kvntoaAqLGoMWuEUvAB9TY6hErQyK2w9nycbDJQNK4aFbuJRoyQFCEqiVidSzZCEyA3KJdYwaXN56Ah",
  "key36": "KT7J7oTwo5G1aVKVQQAhbom2qTvkaeFML83ctP3cdY9XX4YdpU2PCRfLyM5rsLknVcQv2zc6NwhfmVZ26fVYF5e",
  "key37": "3RarmAd57oPFUgqG6TtMckiAw9KKRgZnQXo4xzg8hKGHzBtDDLTVPAuWKZy2JaDi5QRq2ne4cbT5NdRZYDptJDVb",
  "key38": "jeyaPyZN6zo5DQQmkRynBXu6dg9pddVddqUCNF9EMYpGuPHBQzPAyDYAgK4WwnodKigSpJeEufzPMxt1LrvL5cR",
  "key39": "4QkvBfdZupJba9SoQxywDtm7n4EGLX28LWNbioHRFTekj9ar7mtmTZpxy792m1qPiAFZesjtq93jmim57kqWUThj",
  "key40": "offYAV3eEFktCzb4RrbbfN9XBBS56Yc7iGKCkFPmZCR38o3Ry2jnK7S9H6Rh3V4CqnsgpGHgYE7NNk8ADc24qVb",
  "key41": "39DiJQHfD2ko2UbGGPeKSMJnYKqpS3ishHidoSjJK9P29fFXqVc97KExc7jx8WqHXQ9r5VunahCzTk5vCpydxs3w",
  "key42": "Z5mwQjd8HY1mvBnqxzGRw8qZjx89PLD3mpNW5rsXeKoQokUAkw2ceQSX4NhiXWgK3iUGGf5iE6KRyxhFAvWKLaK",
  "key43": "7NQuVdyKwyDCja6ntAPuMPLG4eqA6ud23VWYkHmeyUK1SpkUjpqXoREXN3fttHUpbbchhTTmGog9BYDsU3hTpyW",
  "key44": "UMYx5qouzCPvdwZwa7yLVb47iGf74tynuJg3nCN122HBuMuRes2zAT1dKUK8kXfC4Ucf17Ggu8cLd9d7F6DBGQU",
  "key45": "TNexGd3RNEgYeASUxCMjBdaNJrZHHJacXFznMmaotD7PcZkiEoDrw8vqz2W8rwb7JECuwuHz6bXZqhZY6LMB2q1",
  "key46": "51m5aUsCZrZFvKgfR6aoLjwZgZEYMcrigyNHThMc91hUhtuiL3NJqVBRxnf4DtpVHSq5nvLkmzxdxy2f253WXWav",
  "key47": "F6MRhRnhCwm4mCbdtxKzxDydW8UYMPSqtW88WyPL2WnpxQhTyMSNqunFXQcpb5KaYL9ay8T8k8pzSWnbx2teb7h",
  "key48": "2MHSy1bvvbRVGD7NgsWHA2S8BfWG7BVw11pNAbvDXMWSKccjQUy7WWhoMaFKutZbieax8nesFJH2KFkTEN7saTn7"
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
