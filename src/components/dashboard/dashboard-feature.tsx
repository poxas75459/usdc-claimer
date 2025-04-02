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
    "54R5kh4oWMh9iYyPb6kNdHkFqH4MfDupcNjZjX5C8dw7qtqZ2hdpvNUXVjipfD8xAzQPsk7xyMdrbepAw2BYfCEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vGUwhdAcBcjuFa1tursH52edPnNRPa1w5bPEq4QSAEoY6asZFFbjD1kQwWAbD51wNqH4PXiMBxuN2gtXadzLWh5",
  "key1": "nAonXsb9Hp4FeX6XfsydmuCjj4B9wknRFFbU9i6E4j9zwqsA7PE9DvRR1uLn6zMWri1SP2reWSRJBrgn8L3rRP9",
  "key2": "3PqMwpNbGwVzumGoHZNmaoCpWWbrEWWnhxx4JxGjbULts59u1G9gV6yiTkCGX9sZDbgoiMxQx1EF53PWiYpSutog",
  "key3": "4iGpRUaUHxsAVrkAUFoGPNWFzqDZhK7cb1TzkktfUtq2puyDP7RkUWDnB7vyt792qq9cvRPMb2vu6QQmUUzJ6uRi",
  "key4": "66HUeEUGDXymmhAWjQuXnezGs1aD2BfM25LvLBDYzdgtSUmHXLjcM1ab5NJhHQZmFpdVZMPbK29gPP4rVgH9BDcn",
  "key5": "3u7MqZKL3f7pun5Dydac9AdkLoN2skKBHhgEHEia7JtZ2MyzeDpVd248wHL5Qc4tnaR3R4V7QK6aAEXRfCAf44Fc",
  "key6": "5PZ1ZY6izLnd1GcSDxGRRzbzy1E5S2s9UiVvNgyxxwctWPk3CWgaZazk5EViXihnFEVDngyzma1o6j9guk7uZqdK",
  "key7": "xudgsVfMY5fS2i8nWGaE29zMcVPRCuHQisoBoNWmYky4K5kwAUCPEDoMRr9P6gy1ifEdSW3suQ7LnQEuiwfeq9k",
  "key8": "EVZFfpKmK2N6YSm4z6f4twiikA7J5AyjDTF3dSTs4Rgr528A3VUo6dRz4RuXkPHvaJVDdDm8xPTv6WNahXsJHd1",
  "key9": "Es1m68tmWttLgVFXEJ4MAYNJYpLh82AUAQdqogZfW86SRHAyQE1FHBYKwMQhrFuApGzU9ezE1B5whZ1TV17yoVf",
  "key10": "5KMBn883fPSYEWedrhVuQ23TJkE5wEHuSfK9PkZ4Ag58SVntpU7R5aQqBdeTUzhUH286kb8ZxSDooF9YBZF5ch63",
  "key11": "3BseFLVVbHsDkx7tWqQEpiU7MkNDWS93r2azuymsP3Yz3VW5yHbYaC4KHJYLBSeQjnaRJPgMn5hCvDrNa6wPvG5Q",
  "key12": "LkyKzgoDgmofdBJerDa3FvpcVBeTGETybGxBTkqFhvQU47GM7Xk1eqCkfamFPcQQdt1RiytF58mYZATv5C7uHTS",
  "key13": "262naPyG9uJJm5frBaG8MRcgfBj9w8413JNSD7mcKGVQocyrhttJRNWFiNHiJhGy8RrYDdH9qG3j1yxTVTLbrxCH",
  "key14": "5YB48VcETgiFUTqJGc2dCpiCTUiMGdQBLHEDPWyAZDQ65NxTGxJnDVDyk8DZbFzGFuL11qj7L2MJ6dzLq99reHT5",
  "key15": "2aDALPJAEtRsGtvGRPPMDZaZSjs7q8ecA5hrnvPJpfsThH2qmz7n8eML2ermpS1ivn28mC2ichgZ1HapbKz8JzTJ",
  "key16": "2j6iboHxJAt8vpEtyh5cnqKuUjniyVPAxyVmpuPGbszNdF9yTuJApB21rJ531aJKJyznHABbNg8ipD3nXehSTiHC",
  "key17": "3WJNLRnTgVwfgi2FDjhQnfJJCias7vyZHrStLiNqQHgDGwDPf9m5GwmBZ71pSy9nZWD6UrwrPCoZEENxG74iwNor",
  "key18": "3mxhtYJ4ncCQVB1yi1f58kh35f2XUYWaH47r2sSvH2qYyHzvThtS2P2WFKbRzaPZLB5er46jxuhZQQUAHgnJwLUz",
  "key19": "4GAy3rkBpyUGM3nPA65TZN8xzq9K3ZHLPeJ9qkWeG97ZZZT1aVtBvoeMncyNuBbu84zV7fC7VKTp2kqJa33eqreM",
  "key20": "312SuZDWWWRxuBzGD4zJfhWxWwju8gawgU3fr1aycrcJ1Nqp5Lm7jNT91NLHXxvUchWAQiGpZYSUXHar5MxJR5v5",
  "key21": "SJdKdQBY9rGjF3VEK5u2mCxCoWr1oYjSitDsqnrPViGMCtKrUXfYiyxgRUnGq2wG6vqce7xZxrTaWyvtahWgcAB",
  "key22": "bDcm31U2m9cvLgmvDNw4kf3RHEq6GaVbXueaFxjmLYCBy8A2Fgc1K4Yj8NGLDik4yZuT1YLGev3XsS59Zrm3FhG",
  "key23": "aFCXedETNbdfWdSkbJBmwtcF93o4QYdSms2PUsqFHqMcogvMQNqZiVCp2XmqfoSUsiMcGXP1bhLyEQKd9omDL1H",
  "key24": "bRHSofhU5K7Hq4efQarT68J5mhkQ8GM7H33tcYeeSWmNtGSfxaNCueUHiMPU163kkqTRpYGfoXJLjXqZsNcXvsM",
  "key25": "n2YKRecZ79TYJ5FL4wzW4hcVhsxeqgz7QayXeKdWrEmkEUBfvm3W9uyMmShcausZrbZThEpVkHDrGPQwHHpkc25",
  "key26": "679YmMzRguuoxwjbB2KnD898zaB2QHnkwGRnDygQrgtapPJDW4JryhkNqyiCrAJMeStJmtAtvfvtSPebTLFhyNZH",
  "key27": "ZiBECCRYNtCxpQ6z3sqmbD9rrmCA7DH8BTW6QUTiud4Lg18TjAESUXSVfuVmYWAmbqi713JWsq4ibd9snqBCc4X",
  "key28": "3VfwrgBdA4pcmMe42fUAPE4syE41HpzoEES6PuCaSaPZjjvSdBMkja7QFqRCCe3qPEb5o3QLJkDSysi2EH7gkkvL",
  "key29": "3c9g8AwiaLEbu8wUJKUF2oUyXHM75moMhcrNHLfKLVAJzhQ6HUVHq2t3xJzEWWsC8arhUi7MiQz3xmzNBLsz7o57",
  "key30": "55yBozbZef2xCWJznFtTxxGLYXk8bqyXy5YzkEjZjQo2Rtot5beWCHoKbsiKH9ozJDt2i6gjxtxNoXyNvJDkfBhA",
  "key31": "2X43Nie3x3bGTB2jHYhwAG3uvHT7gCsXiXpmjsYfAncW81MkH3bKZcrfRmV3hDqxkFfLaq62JmokBEKnBqLk6eoJ",
  "key32": "fWRgLvZHzUZyCfo1QzReSWZ1yb3aU24JQoTT4a4rpjN5rVbKf2FB2iUgSUS9q2Z5e6RNCYDvksbeuxTtqjqrcQm",
  "key33": "595Lz24ubJa1RQ1MVCvPNQxo6ixmKa6EUdtWQDCWxj54nEpww7oKy5RHDEFUPqgUGkpSuSK1aVnn8cuFkhUbRLZq",
  "key34": "2HTdNb2uY3dW1DZcD7f2tvmwuEL8ZbEViHqNLLQ8eb5y1sSXEzr9Nvhj9a8NDiaiCd9WfR77ZgPe6a4gyPhJma4e",
  "key35": "2q6LUXF1Eo8Xsw4LoP19QyEHqDN46q61XfXGuAB7Bz9J79Xg2PifBVzGdLXkZnvJBP45wBJowWAfY6wEKaBYLLgG",
  "key36": "2sYJt183rurF7q4h8maPwm9do2MNSJ19JZ4Hd9zt4krckGrLD2ky7785rUDEnZyMxY3jcocJwVRz4qt4xHXuzS6v",
  "key37": "4HcSSiVzdAgixMJTbPk5Cu8PkvLeMFdykEbPVr1u2tMCCxK94cwhRLBHd3nogEk11CiXcppqKZNYiGnCAUR9LvwK",
  "key38": "5PJNVPgubB3Q3Xp2cGws5UKZkmPrfeF2QkjT7cSYYqvNA4zZhWjhNDogE5xJt1ecbyNqTNBvPzcAuJscNwFbKKeS",
  "key39": "2f3Gf3JEgiDu5M6ZCt4fDUTZHMRnM5w44TDE71AHoKNm8jYMnA6iSDd5hEpQ5Gb8A9Dp6QBb1EGJUfUfYHbykbJH",
  "key40": "gbtQzeAdPaSzarL5TacHqKsrShpusKJu7NmsGLxXfpGE2nsgeMPceZ8GNH2YpL4Saqtyx5PrEjYousxbVtRRM3L",
  "key41": "3NU2JssaddS5MrPNE1U8fVxUsoPSC7cv6yBn7UqhbyedquNH8881xmYk44kNzjrFj9YZCZ2BEja5zLp5QuuZ7vLv",
  "key42": "5fjSrxE4AFTSrDVfEpqDXtsjqiQaXq456aqodCBcN71NWajNofFbF6tA3zb2KgaHyNVt5KosRcbH9FJreNELUBkv",
  "key43": "R2pSQsgdGNNymW8ZuWizCG7NeiY1cXRKmBuNzSuPGpehfweVVH6HBVMbLw32dQZzpD6m2SZFkx2QhoGv4zBxW57",
  "key44": "4JDpjxqr7dqrNZkr2xizsUfLLFzoAyP44mD7ARRpT498eY8CXtzMwgPhq37YE9rLd38iJyVQNuERygqRtpov2isE"
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
