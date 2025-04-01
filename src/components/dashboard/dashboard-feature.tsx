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
    "5PwdXXwaFu8rTfjxEgbSRXhG9ey3TEzKhyV8wvbv7RadPgFckxFtC3FFBEcp6njRYTLsR7HSmPL2FfQSVhLS2GGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LvYdtz1iqgQZma5jnmhR2mV13tm7W6afhABUekXAxTWWbcxXe8ir2ETGKmYPRbaEb23QdQJBam7NQzgx48AMnp5",
  "key1": "63RbctPYWWxHmY9exMLS4REum1bjzH4zS8um2UJnj744dnanFbYw1c6sTQKtk1TqGcCpwHArwUgsdMtoqDQsXCUE",
  "key2": "4U1jrToyV95mK5tduGtzFEUEqraoZUMDJCChqQNGNbkser8fnU6EWg5wfTPaoWzoLo4RxVCkL7VRTZAwxfzscZBQ",
  "key3": "48QUwEUYTk3bAHiEJ1zp6wD2eBrQs3FypZDep67eozcGJDthF3npfQqcHEhtDtoh7wK49y8voscQK4JYDh8xzMfx",
  "key4": "2cw4gm5DYFbLBWT9y5VbN4d7pwmnNrck47F1cPMSx9QBRMzkoLx1mwX2EnzwyQsoxoaFzuWtfUuKPJhSY24YpGkK",
  "key5": "3WqtvDJybezpMMovTuDnxHMLBkN4fWrHqsrrbKTLVsFUYxvisWZAx3giVguc62MUHRQfcWSaeKttPm8etaue3Lmv",
  "key6": "5kvH3ah2TXU7ZNGnhr14aoWuHhi1o82jjz8jQUBGLLKcB5MY3KfFkaJ2QsctYUYiH9CCigodx56rK4Y9C3PaBMoe",
  "key7": "2QiRbuvrBNh84tVhqkhVWNvRrmNFc2P94NXjsjrayq3SN35QWrYh8ceyoTYG4bKirTHxtDJrbxMxRZZytnbhj8Jk",
  "key8": "6CMwV9nqNaSTMRvvwh36ZcFDmaoSxVrY1wVCuSju9GPv7xQSTVAvzCify4b6rvjQN9g9SvTAsRZUdrNk2nvwcNs",
  "key9": "pkBQRsU41jXTdHDzPKgH8s3nsWdgyXrZPHZReGaaaVMpsWEEq3CXsdBDseDBZugp4cDz9ZZaXhYkZqF43bytCJ8",
  "key10": "5Gm7Pf9mAHuXqPDL8b15B3fS4XgGJ18dLaeRNbax55wypcrGZy9AohQfyBk13xe55jp3q9w3hEB9fmwVCtY9SH1c",
  "key11": "3zwZZNA6erb87iRvz12p1Qk7brYSXhmCdzxbys6m7hhPHW2Hdo5btxutsR8VVEAy3PsHQGMZYHfNy5CqUFA8Mv2i",
  "key12": "65ELaAqpn4qmkduua4X6JdoGCK6x4LtpYBHgBdaJa45Sd6nbD2XgpX6RgL79E4j2usSZpJrJAqD8yR6vdfd3YfBz",
  "key13": "5PRb15E9TtmsdopuFMqb3HoZrywGdAcseMn3ED2GkfMMh4dk4KB9LoQAcj1s4ARPii81gMxstPaeokfQ479CFFXq",
  "key14": "4GdFva9BasxrQVFfK9EsKXUkEt45V64d21j75BeGRcnVv7B277uP468StuYjefLf8XG1VNdKuah8AVcKWvYn8sT1",
  "key15": "4gVKnU95LByjTbHaJiK2k2xrgKW3BqvSTTw1oXCfx4iNXr379dyAxYtxcQgSEPdxfTKiqdiAmb2h3hm65LoanjpA",
  "key16": "2uGbiS1db9ybEQA3NM9pANxKzv2iKkrcw7rBUQ6vsXusejiekcvmwigWz8K1ySHRKRxNyStuXfmtrQwDyhX2C2Xw",
  "key17": "G8ubqaTs3zcUXHhJKGsMbhCVX38YvpAki45RoXaXUMvaemj9MGKMSzc8oX35WG4pUQL5NBSUPKvyFP4VS8KUqZA",
  "key18": "4D4QVULRSwJF7gVH4MPK9r3Q6VWcmhU3VNvFn8WBNribo1PzuRpy1WtbrvjcZPY8JMgfnviHeRBG48LbkNtKkAYr",
  "key19": "5uPADmpD2EVGRZCJEnCL38ctfVvtaEGcnGAgqQ5rakXzM3pExpYXwpL3BZ4QVA96KsLDmGCLT2SW2qVppVBXUQGk",
  "key20": "3o5aZiBQWQkzpmrsugVmoe5FJPxM5k3aYXLqwA2SsSPAf5zDhXCKnFHZpYJDrJV87iHRD3Ay2NVbCy9BJG2pJv1k",
  "key21": "Tepa8n1hTZLiCQ4rgx8zozN87GLC966TnNGJhY7rikAiHSSu1n7N35DV3fYSSGciiJecNx7wQUYaPrRkVsza7Cm",
  "key22": "nkSRPW8ph1dPAguXNVsFi6uje2x12geuGSRBXxfEmKK7f1pHgeaRnyn3MmPx6959xEg5npME7YA6xBjzY5rHKWF",
  "key23": "3XuCfuvxsfbRENze9BxnAX5jCFpMs2i5PYoryXXYD11Qe6GXYM3jwg186w3giYFcDn7nBjJhkvBBktZePChP5z2H",
  "key24": "2FwxVSyaTA5x23d86NW78PrcV8RUBBLx63dA3ZpwdX8Z4rsSgYazrLi1GvhMtX7qGtgFeYpcv5Xn7GTQ3XTLLnTt",
  "key25": "3aHoXBYWvGowFm4hxFZDoQsvmj3eQSZVh9LaUtcx6qKR1BpL4yUEJwpznFAkqE3w1JkBXstiQt59VpsrhsJijeN8",
  "key26": "3kxoFpFMjjkD4mYxLH45dqNjQA9Z5ick43TNjEvYxrw5MAkYZ2wteRgJ48rjMyrqa58g4HD2cu34cnR3M9S8v1ha",
  "key27": "3TmRfWBQAWfcXK9UXExwb2cDFb7UDyYGmASng4yD7nfrfgTh8p94YvuvnEPwQmVNapbECLN1AFit4eMCifFYpqbn",
  "key28": "5KnXarcgxPzknFH67vX5Nb7LSbaQmjAAhSpRRkYVv3H7aJGhwkjSFrEquuCLmjRs7Vrgs4S9z8ZWN4DsUK8U1giA",
  "key29": "58K7PJVFkkKUSfMcgfRz9JLQhni6aDfubLmdBWKkouJiedKfRkMLPot9vCbS6aPmLMYk8EQbM7WkN4BfarJEYLt5",
  "key30": "G1k5LT1ojjgTGCRRn4Wb2Z9cHVrchyF1dyzepEPSXBjg1HcVnCDkYMtrndCvsBCRgL1PiVC3HYps1V2qX3MtpsT",
  "key31": "CwXqCvg75Dmtx4mAHrYBdSWCK7YQK96fMXHoPKwjQ9sHaCgpVMDXTGrjnyxrocqdbk4CQ5DL2QDe7UGMUc89jbE",
  "key32": "4c5sWPbRt52bJ4ByRdzDAx5vQpu3S3LaaLTCdtzVQyTuaKFkNsfGi48GRKcMrMW91Y3iDjVyh29fWCSAc5E2Yvyn",
  "key33": "2pP6BbuMmLngYT1Zv9CuWbBQhDjs1dsQgUirNHzqfmUyqZS9dRukMx6ttN3NeqokT36YSmKdFecwKrxXQXrdEJq9",
  "key34": "5pRPXnRtvo5AgciRW2TqA7Pjdfge5N9kiV5Bv4sEaPuu45Nrrb4wewx1jWsnrRw1LYdRGCXsf7ANsFDfzJ8fpa96",
  "key35": "37VdDBb2hgYhzN8t6tSAQijLKvSiMNEF72iYZiWckNjdBReXWh2M7HDLwdkwx2ebxYPXQNYKbmM2zLTtdCQJVjAr",
  "key36": "4NkfYW1DviGQusXURMVeGicgwqf5mm2mCVJc3qN9YXN1TeW2C6BtBgbTQMWCgBy9bYaxPYWcu7nPhHbwq8cnG6fw",
  "key37": "4z6np1RH3rwscRDVpKNCqxuJTYF15hgqGgqyFcqzD9mGcs7zRVQJbZ1U1ApkdTC38vx93CS2tk8ykopsKRAbusfq",
  "key38": "5ZJCE9dZJztyL2SPfacKR5kZQ3hufLsym55VaVEyLtNKSUrJUyRt3eraYntXr7KoDNcSLMbi8XkP6YtjsRkLgLKz",
  "key39": "igmPA3EXWCuVmhZfGaayEFakeAqz6m6i1486fyptpiCPtpPM6SvAB7ZPKjrahKKMmxp6KTcpV3jevC9QsW32uZp"
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
