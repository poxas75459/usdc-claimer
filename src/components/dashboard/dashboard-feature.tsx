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
    "5nUp23CTCG7f9ZpSPumin6CUGDUR8QaSoPHJRxTGEXvQQbo8nBNDHjbxSUQRek7LW2HK7eKG14oFDxNcjaSpFChz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PE7cGEZBUavzSH2ASuoLT1cx6j6kBstgzHq5yDPmvL7mpbbHhxWTBes4GNsEiRvMt7hKhvQpz7PmvyXJvmevDrY",
  "key1": "4n2twiWPgV3Goxk5oG3biqGqusKj81QEjJJLJB6Haa6MLidP9dbDnLuxNBjFtbWfPuJyXvXZr81Ra8cq7T1KTnd2",
  "key2": "4cQTThkbLrmHtgayaNtRS6FgwuTF8YrGCrPhJoCxe536jNQxUK6bscUm1seigD1kT3RXgDZ8QQ317gY1DK4E2EK4",
  "key3": "3T4V7sYx5V1gcnibFo4vcLVozCCNWrUjsrnhzL3C4MJdV4rY8P93x39rJ8HPARFb6mUwXJu1MTeJiLFDf3izEjES",
  "key4": "4N4N16eRmuoDQLrZFrY4GrRCMvrTMV8ULLMuLWGwKX6CJM1aNWk4iP9HxxFXu5mr8MNAk3EQQNxQgUwLiyyji9ZZ",
  "key5": "4S1Yrnkm4AxMfXwDTDRfRjci7XjZ9vT59KLha6fosFtz3APegPm1i2m8r7EKA3CCJqKVmuyQWCiUAh5j1E9KCVci",
  "key6": "5Evnb2X6nrGFusuX42vDbG7hURrmR7vaSknGwL9ve6UUcad7esdjPCcJ3jEyD8npWpxv9VJ54AyPNEuTaZSa3Av2",
  "key7": "5krnjxUQDyZJBVKGSyxaBeZAn3ArMgHzHJ7t9YYN5AKNxoSKdgjxtWodHWR7b9aR2rPJuQmgXVNfLrwp1Gh5oB5N",
  "key8": "5FJMHwJmDiaAzZe6ssF7tLp8boHDYF8EdujhJKdSK9Pv75EFofPYdiET5xoq98nMCBrzE2HfCjvyyu8fmak6tTx5",
  "key9": "5U9ZM9qFSSuxFqj8JAmQ1k4PbcJBHqF6WH2NE9WFUuuR78o1o4HwsXxCVDbLtjh36PQtyeyiHfAXDZfqqJVm9QEk",
  "key10": "5W4CRH4PNoFqRzX4x3mN5jS2WeaRTviwEkonPZwWDDLbFNno3RLAp7veYVJgVzgwJ27PhFGh4ZUzkdN1t2n3YJry",
  "key11": "3cYBxm3tBgEirpick1Dr92WqPdrnMCo4RUsFTXg4JEg4LsSYbMoAiBUTbkU53sG8XTYQeiRMTCb5kCfy3JV9Yrz5",
  "key12": "5h3Zi7DpWJVjrtcRkmx94ibkVu9mFed1YRAk5FVeAYBQvwFwpdsemtnBvHUDGwUx8wzk3gcdKFmBjntH3TwskLdv",
  "key13": "5tpCapdtZqm42gz19LeTUZk4Lt5hxH5iPp6DEDbQ4AxcGMWLi2ic8vXpPaA49qPw1Mtys9ZGuCWgjtL7Anm27bC",
  "key14": "4zGeaQcVMw13UfWD71nW7t1Mtzmr3wfPPHK3TUNLAgbhtPbiZkdhq4KCv3oqV7GmD29gddCFuTsQRf3aqq4mVFaH",
  "key15": "3JoryQbw1UVg1F1bdkykvtL22CffFUsbuvcarCTsXQTgzd6LpF5UTe8MEm6RsFNWwb1GsbneKNEwgGmHmVxxwuUD",
  "key16": "32VuEJEcV88tq2zdAkPP9jANPcm2FpJGw2fUVuF8jNirogyssD8hyy8PXKTnkCuBtv1pTvFxpsfzBB3ZYdVUFLXZ",
  "key17": "2N8hrFLXV85h7ZZURs2c1pUdjfASi3K3g51U1Q8shQJqZ1gEU4KjhP5gFZBcKdkmF5AKAqYzATdjSQoKwvLfrm8k",
  "key18": "28xNt3cNRUDRgUUU4YxczFskiPjSMtEQ4pMtrZg7dSNagryC6NUpExVstVz8rmUgC2e81keMHsKD7xNDRLC5QiPp",
  "key19": "FLzeBksqKrR52UNb5PHAppAXMRVsCFaEqqnXmR6EQCh1v1SEMtjLY75A3xPdYWbahdCTPzUsvG2GuehwfeQu3s5",
  "key20": "36ohT3PzxV2qZwsrdcqJobQJu7mv6CWaNS3834673DGZeUZkapyZTSqQKFCr5gjPRwrukogf6aRvBHHSvHpsJKxY",
  "key21": "4Q5zRenbr7znCWhZDuJFJ7eCqn3vjNf6QiiVaCnAjNpHZWATpcKJHjpPk1egDuovTSsYaTCMxiYa2KppH4cDy1X3",
  "key22": "23zfcTWaxWTxuaGFtM5kS5XFwVDKtbEdF11iRK7HURPbVpb3sc3f1iz6UMjfhkZeg5T9mEeBeRCxjLv4PdLrZ9Q3",
  "key23": "5mGGLLPQ4cJtRgv87nBpAQG8sFZQZREUCco62dR4VtttDAnTFkBN89mPeHZtbSCbCmyNfPqN75BJH9hNnSPvSJMa",
  "key24": "3MpbeU5ADNXztVJ4WvgBLs2MLGBepKvCytA71nJFNrcNdw3ndRFnodBQGtSWhySpJZ7ozGFiwJmYtvLimc9x6Ct5",
  "key25": "5BkhmWb6KtSwa9nXNSR5cBEszLFpfHSJiLBsWQ2g4fvT16DAXkqDMdZ8B5JRWA1Vmpapd5oenmBoHC51yVYA7Lv9",
  "key26": "3N6ACKzMtP3nUSUP9jFrTak9rCg9yxpFmvAf1Nb3N9zgih7fVukNGTNPoHAWiynwwiDpCM7pXo1a5eqSF12X9NxF",
  "key27": "hfP5UdTCZz4xTMi1bf92gKtJoBFKc1d3w7xygojWSUw4t6BrqPpqeDVNwueweSzTGvUQDwj6wcfkV4WHEQtNBKq",
  "key28": "3wo2ztAvctDhnfMseYJGZGrvqeyYwPPDrivZhMTXKdax1Hw356NzhufnypZZjzPfSEy5Cvo8vV1SxgaY5Nc8wpB9",
  "key29": "5roSvShx8UhD4yrRDKFejQFtqnCXPnFFF5YqL3U3pRM7bLt2nb4YySYPj9Q5Qd18mYA7PhpK7schCEGMG6aCfckp",
  "key30": "2jgDg4gfSSbutfomdsGrVEp7fHW6dAcZ1X3VaY6hAH2pfJiiSovjzaCurzLUsNYn2w6JU8rszPrfKTWrXXH2dnrV",
  "key31": "5B2v75un9XH25SMqAojdcLV42F9iAsWhAKWgfwq3wJ1N6czLf3jvijFhBqzsToGzafg2gVSLEugF4DjGUYJd8g7V",
  "key32": "4DFu1mxWqn194E8Y1vtkTBToJ8TeAcWMx3d5sw6qJqQLAMQgLUpdeWhvbkBewTHmqN2npAp4geLPBGLF2TH1DZSR",
  "key33": "2jtvuPe8Y17hyghrqeNqzVL5LYPK5LnedvuFMFUcpJNs7pi1cYGEjG3MTYVNPhSLoVGcWZ55EB8B8PZZ3tw1PzL1",
  "key34": "4Exsh3AnXMxjRsybqb1Fcme3EPfu7a4efDn94m9C1jADn3QvfLoW8f7TjjFwQN5Zd7giKQzZrovGqs9RibT3p4ax",
  "key35": "3urHo8V8TD7JrAeMU9LuBZ9B4PPREQM51uoeJz98RxWfJGJ2B8tmGWUSjR7EHftTewKZDTKTsQ7VT3SwpMhVh62B",
  "key36": "3o3w7dFxhXahVsiFHar4sUiXMbqhUhvoD1nWFusW3hrXrgZY4pspwUFEUfTwxigzZ8W7RHpju5sVE4pNo7AGVSAg",
  "key37": "QYSDeMuy3kj4Es8YFfMwHPtmjsfbAPfn7GZYAAzhYA2JRA2E2XENb6inT1u1ENiCPwmF7bb3u7DB7FKFGiqETin",
  "key38": "4jxRF5Nxv72bL2Kx4Mx1KqhCThHS45YahEsvibwv6oSaFa8sTeX6UgMVU8ebAuSYkiyDeppCgMtAKft3hLc2tYwJ",
  "key39": "4JJmQAaLrPtdWGEZV8c2Fy8DxUammosxgPXeEqQEW5KSkthWfLXE5ZMt5zPmHrvKxX28db1URb4HYb4HWhS6YijR",
  "key40": "5PaR6vup8wGCx46z1fE4miWbyRW3KEtJpV5sxP8jkzBCTounTesVXVdJWE8nA7ojsdHK9PEjEUNQweJRC13LQ3ms",
  "key41": "31Agd2dntAWs1DK2rrweXSJgKJMuTxfA7cnYMdYdktYNjHRsz7PwV5woNUZJ44auqqgciZGzNJHxuwq4yKCF3WkU",
  "key42": "3CPzDpHbSxmtLAe44gsoC3qQyEgiVph6gZeyCnVFtRwpKRmDz8ob3JM2AsfWWzMpTQ3Gn1xA9nb6Uhx7zkYuEgs6",
  "key43": "5fVuaSBgTB5qnPt64zR1uFYZfX7nyVvbfY8o4j8KgVnMdhwXDR8xSCt96J6dLLbFBvqnkx5ihvoUrZM78tgGTT18",
  "key44": "3ZdDfTgzDzyyFXQ7r9WPWD93qhJCbicvEsjEbvJDDsmzit7okjsa6gf2ZKvTjgD73s8Ff8H8KR2hPhWoSoQpVkFq",
  "key45": "2kpUgA499xiDdoVUQr5BP7ZGDJFWew9pthFeqPkp7EwQP9Tx3k85QqSU4R3JGn62B7J9kzPZYsqLW59WRj9fofGz",
  "key46": "2rt6JATDYfrk3rwqLiYK7JReq6Sys3N4Shq8mR4LQgMw1tN3X3KCYpJK4nE8i8xLC2kyW2m1yFNp9jqtJXPzvWDB",
  "key47": "3wX2jRabU6djMJEp5rDgBt29UsaV5vMix2x7Wz1KCkF862hFh49SqvNPL9rF6GLn6gyAAoTvEh2ycmUxZiW4yBmm",
  "key48": "3t94fFVjURHeEgvCBeo2hHc4RGhtrx9dCiWQ3nEV2VZ2nM8SxtwA2PBrxcYxU4dqecv2BnWpuxG3ByVEuqud8rrk",
  "key49": "1BTj26yC7qqoLi2qmTYuSPX5sZYvA5kvJ9MnNmsoHTKREhX3MAWHpufYq44RRUcmrcbfiTnKpwR1Mhp1Cichgqz"
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
