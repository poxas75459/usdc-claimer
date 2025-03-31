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
    "2jY8AoFaUsnisGUGzjswu9dBsmwKLdANHep3yFoCZTAtYR9xgFwMJ9wSxUXwyDVKdsB56ito1pUYzsqpLiaqn2Du"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QLwpKkXLGD3Rg1VmrDCeJNuSaSaY66T5Gb3xcciMS7p1HvksM4BBDxNXd6VY6kxN5HcKvBkAtv4rRHByDmkVwPh",
  "key1": "FciGJWjKJQ6h1wPmbQL5Fn14sk98nzMsqPArov5PuTKGX3StEFXhuYh1h4pKCicT7aCVKNZDMvExUjWpHfADgGU",
  "key2": "6o52oNsoSLNyKK9ykRMmWrpXr4zvkfQKZHEhYTFP9C2knymZ72M687q1wj9jzMBGsPLGcda88P1yF3NWGL8YUF3",
  "key3": "3PhmDQ7SPboMdKF8bUMJPYJNuVEJFaGcAVfmmYdxZKwhTVqr73mNZ2fwdaCwi6GKcJwRMaLCogzsBA7dVbpZpFPm",
  "key4": "3z7NwTigTJyrPtFXKbGH4o9eA7hUYSjUjKpjCxFVc8mMCWpmX9PdX2RUiS63vne71PqmqATHfYLqj3YDNwebPS7Z",
  "key5": "4HRqEgF9xNnVXmGK99sM5HKkLYJVhFpB2F2ZHQgVY6sgE25aijX8m84PvjcHD8uSm48mZkhfjrb4g43FVdVnuhBK",
  "key6": "5pSLyguh2Y4jsqLaijLxFhtghRj4ubVPnjdvCVpfrRNJF4dA5KBnw33wcXQ2asDSGhaAQWHhSau4zUmE4J3Ns7Vq",
  "key7": "5pjb3NYoRScqjb7XQqbTsyoCAPgCdNKPKHMrzHJDFCFifUALH5iDhnZrCfybbkGo6CwiqNR4Gq2hhguDcopEXWPC",
  "key8": "4oKkiEX8awYfxxHAQUoszDrzf1q2DNM8SXb4cjMrjzXkvkahzp4gGdPqM2TE9KmpYs7ijcWDVRiFHFfMc1B58aPf",
  "key9": "3n1kSTtH4GojyU6f8jTerjrCofMTawFxg3SQMpYAVmgDht9fdBixZHNzn4WoSBJ1rMnjSPvc8ErzFkeURWDMAFcb",
  "key10": "56yjDaop7vACnyUZWd7chyaKeb99QSyxYcgrTRfeWehJHZj61HRn4sRkuNcLijTXyxswBYtTvuTRX7szAJAcMogv",
  "key11": "2vUZogS5aUZRhsAZKWjNRbPB5UYYBbGmQD41kqXT81GqesmgGhfGMk3GcJvJs4RMTT8dGwN64o3dGYg7aWABUegD",
  "key12": "2tLFNoV57ZzqAdDeoQWNmFW1V2Ho6MbobYABcXgmV9XVWs3ZK9CEwLiDCXMAuCmaX47SLtANJWhPK8ZjxyCnLPyn",
  "key13": "dGzLPGgMhNN4ADaibgK4wVLH2a3BrBVn7nQWLVsC4ZzqDAAy5cnbhCqmgWrcfZQyhEmeH4pDWLH4DWBaenrMLL6",
  "key14": "2fAxzZxMKW6ZGwGeb42W5gMGxSpQZRRjxBamndZjh3jWWKJ9fPkJbuRmxV7MtuJ1p9Y6NNekqNiqckcSaMQrfEST",
  "key15": "2YFRZPmPnDYPqM9wjmB8YVGAzLv5sLML1tMvmuwcW3hob6NJ5o9eG6XiV6mxVLRG2o299ijz1DS2kQ4bMiLCQw13",
  "key16": "3xtsCmMDGPetQUn7w2YY92yPw18hbrWjepEsJfxQ1AAWNnmYPeMhsts8o5mZz5LRaF773daNtDWB3kXjEDRTh3C2",
  "key17": "4uYaPG5iUsAp6sLg5i19mcTH4RVNxvGS5DyF1zbqWRXh2rJH7vDnMzNcd7YRyFZv67aM9kK5RhrdjqhG93V88HxN",
  "key18": "mondESHUk4SiwbTMPrXB3cpXQAyxCuT7SwKg81hhTe33ruGvteQtgFc87RvvXvcF8pojSUWe5ZJp9CbJ2GTcPCw",
  "key19": "4pjVJMtNuL9tG1LDpFq11sk9E6dFwdRbf2tZfDBQTGo1DdVpatGz2PtdiQUTtuwTUFJHqqPkCiS92PuqycpymzEJ",
  "key20": "57FSpyQEobFPfm1sDVBGnZufmsxWK1LYmri8eug6YpXL6JYRYWtXUg4FshAT6pBP94Kv2kRucRdZc1oBSGvUFKY6",
  "key21": "44mQcpoKdDY6h3JKKi7rgnBekdafJRofEPZkU2Ju7CgEHnhYQ39GTGVGHn5CagWfgVCPkhPGnAb9ZmGGhi8ohbVc",
  "key22": "5UGgaAzoiPqiCNgS2eXYCaxP3tnvZrPVCUoXrmZ47EFSkEpBS7BFRJXT1EqMKwG9WhGmVuhUCB2kd35CoaEP3t2W",
  "key23": "3RZU56DYqPBo8oGsMThPkSs5hQQomDj66knH6XYe5Dzk1SARjPUJ3MnFeAFyrV6L9aFmrejtu5Bv7761Jv6HjYBw",
  "key24": "2ay7gb8QTfDVL9Fs5mujXyWnKYHH64wK4eEZnudNEGqCC5zndTwg1Vc5PYGq8TaR5r7cnKspwwKp4pvKJfZw9ppG",
  "key25": "3xAFkvf7yxLR9LyAhddTiyPXRHEYHB1bsA4six2yT8mwhvHHcCxyuacdhigNTYVjy163JzjPx6K8CcAV2WfDH5xX",
  "key26": "m5GWsfQsHyufwyxBRfFNa3Z3eXyCvqSjmFG9r2P2oZ1w8KzimBHML7SpB8wdhxSpqMQL4Yr77JdtGyLevcNGMw2",
  "key27": "4BFmiHdFtzmQ258nNHMtXxRbPfdckPYKAxH52SLYYm2UaFqWouM78kAf7ggBVZ5jEc6ohFx8RitXocag4CeBRqa7",
  "key28": "5NrSafTSMpAnAXq3UgSxRxtkWHC8XGUKkp8pJhdtKQ3TmTEsybzpRw9cafuY1FykkBfMwPFfpRv5r7Bu2bNGsybp",
  "key29": "26P9JEkmJrrBD9QbQPAK3QQZCaqqxiVApBwELdpj734VfFNPDveADBBEo8f8pyo5BTpMXXnc3UkPVreA9UCgXrhJ",
  "key30": "2gzaMLk4hCY3UpjZEmLVhHxkJGuWqXhpAV53tbGrSKPtTeQHT48EZmpYqVWnUrUZQjmm9XHDPnbTUpa3TShzp88n",
  "key31": "35jSMcAtgJ6tmzAjGvk4PcFknYpM5Yn9VjbRtemW4XEzL8bmATvt6YS8miMrCZwWmBF7a6aSUjdthp8rmxUvyT6d",
  "key32": "gskGuf8L3dQt49XjMXTx4Vr41XiQgvdE44VeR8mGgAvHLuBZFX1qmkEz6xyHLsWWPQPq5o1AFnkbjvdGmPLT8yF",
  "key33": "21nxYZikFmUkbjgnDLGNVsXa3YFKVfWwRnrc61TXz7YktwFjU5Rx1qMhydDuaFKxk43n6XjXnKm6u3dGx1SgufKd",
  "key34": "5HW86Ky8JHuWyDMtMbB5XTvmcz1BUofdSR69Vv5LFVzHLG4EY7MRFgiDCGc8mSgrsW743Hr3j7XZNbweXKZr4VqG",
  "key35": "4Mf2mdJZYF1HUrW4mM7wVH4YpU1qVgkcYoYfHNnUVdBMLu7HFjEt3YfsHNWxikzRPjmXPUdLMt37q2pnpCqYDJ2m",
  "key36": "3SbsuKfLxTqSnrdWdXpXpQVrKiyzm2PUGFoeC6GgfCca4NWccAcqgN21XYLLQMyWVkfyRerEHk3iP5YrJq3UVQ6J",
  "key37": "5115yzQG65EnkspWosBUXe4e5AwjJzLT6rpqsHW21exY22jRPvqgCrBBK5H6py3HmcwKAELQg8Wh5ywmwUqZgfmC",
  "key38": "2ecBxbZuiwQYRb4Ng415fSyGutjL5WSPo4WXsthQ8sYh16JJKFwcNswNYujvrnt5MzgHSngEbHstadD9jZ3dJFeU",
  "key39": "32TXDTB9nohi96wHeYE7U6vyHAwFRVja5PQZjoAxoFKVUxzNCEyKa6q8Te2R9JGsQ1LfrC9ZcoPPph7gtXqP92EK",
  "key40": "67BCQTjBtVtETXXnx1turhSuRXBpCwCKoVtqrTPUHNxrwpwGHd2eQSA9bwrzF4TCpzsdWaFwNaUC7ZKbdkV2ZS8k",
  "key41": "4c3t3AENMyww9Rzvv4p1aTFqC7heZDeL1omNQD91a7DkFQePiebEm2AkofrE6Gx3qpaE3Am4fgsozkSBFoA9HjdC",
  "key42": "QCzdWib23CRCJMo24FL27Wu3JY3CXDdGJNAVJyV3whfzyRGeYho9P2drRDCQ6VSKfXEyavjszVuhCgNuU6YmRmZ",
  "key43": "2wtJQ6Hnidq2yVtAMszMyS2JsyfrvLzWvsr2EjrU9DfcLTUP5Nit6ijKv667F9LJ6sni8iiTtGNbPPNaEzi8jrnj",
  "key44": "3BN9Fz1RM18pLCwqJ7qAtpNG4jP4pmJEY5eQC8zyjxY9HSfnoRGPhdpz26AmhDVCJqF5kKC3NjU824WyZ1yoiof8",
  "key45": "mPsXo5ws5DNqq5E8X1AfsmwsiPQTWBirTDd3muTvk1ZAGwHwVgb1YA1gtxf7juuZRxDk5ruzxxqUS5Lk8Br3xNy",
  "key46": "2AJG9vJQJayxUmn5kd7mcLP8RvKBeAHK71CEepEudDhkXTz4PKbUofeA8aTRq3YGoxtBAEL3h6mxssJXFVMCG1f2",
  "key47": "5kNivqKd9v9vbfDaZHJqQNjVabwVdgWJoRbzQQrze9TAoA4JqxY4dfzGYFdULr2VWYZaLHRapqfqDwNjv1Ys4vXe",
  "key48": "3dEr88bwFVMHW6vCvX8yzmyuDbBLxs2UqFKNHrtboYRqUPgUmqQWZxqxM9S7yPMxRTSK1Qsdionv4qbcFUUXAhiD",
  "key49": "2XyChcJxMY3GbJqnaJq3bsN5MYXTY2aWLQNvb3bWVJJq8N9seCMZW2y2pSBGccrTepDYNpcHmqvxYkebmFMwieb"
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
