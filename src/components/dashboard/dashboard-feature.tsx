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
    "5A8Jqfyng7kZaAGrxp69nafAQsJsp44vuLkQ17RwihSMoWKjo8XvcWtwtNBbzs4MMwbGNQZjt3KHLZQEgCVgmLuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SnU69u6xA8Dm9bANbksbYkvNSqjEg4wSwDyYKGQtDz92swD1VqLNRsvUvXz684aRBYy3qxSqLmm3Ty6FntpTntJ",
  "key1": "A5varoUJ3nHKyTD28agGGUKo6dCmjJD3tVRfs8QVBEbvt2NuTHksGrYSGUuxrgPJ1UGKhhpDS2FTdrh8ViYgeuF",
  "key2": "2sz1dnMitrCJo5UfZebjhgftsq5bAkEygySKhhHPELRapJHqVi9xCtqi4PyBDb2bL8Dcyov8eJAbLHQmNgouS7rR",
  "key3": "4LyGe2vnPEub1GFDpFP9McVw5gnLdWjUpEd1WQmKgAmAZ8bxGmrNUoS4FXjStfjwq2AuKL5Y4sBQtipvXTNpgW8C",
  "key4": "Cr7zEVauUFmJ3cAqk9Qdfm6351LrQ3YUSd3von7aDeTGLnNfMCwHVzL2NayebKAXuS9r6dgfZ4b9UX9iMuPdr8a",
  "key5": "4M46Jamd5UEZZhiXAjmZ97NqYbVHtxpoEQs91QXPb5FUqYTmwKHE8RLTNfwUs1R7L6VdPtAsKNHipDabz8qhCSjQ",
  "key6": "2QBbkDuFR66rXBp7kusVUQYhu2LzZVgLbw4wVQaWzGEKiUBWKkvHuHJZzoZ3QufpaxqndvFQ5pXjJLqkAKFDRtzV",
  "key7": "3WqK11qeiCbNGC3Qq7aeZZGtw9hior1MQtzkvu4o2Buei7J3UhShbYimAp1jsFEKftWjaawXHKdrBszihujL6nCa",
  "key8": "4d6jDmrpvFp7LNQwRtsMFDxh2PFtAQmnuoEvRL4ecLCToL7Ua1ej3b427V47Vot3BYHeUdPUig2XomB8MBx3tm6U",
  "key9": "2N7Xv9Q2mcVEzaTEptYrHUMESk3GGejKoXpJAs5oRGePtrEebtLVyutMsbZ7HJCphsGXm1AnBLbcTnqrzWAhQfrq",
  "key10": "5XFgajn52A6opREKYK7bffmfXPNJnXqBb89F1gkQ7DNTyAE9CUkwR7g5XMJ62vY4sYasPisNpYU3ZmSh3wVTd4y3",
  "key11": "oNxeuS8ha3qXUHKubqaRAvSgKNx9rDJ3pi32yhESGwCfDd9W2FRu5kX2VzsYujTF9ggF2ZqNMeBCNibha6pQE7Q",
  "key12": "56FUqwFKDi33UfDUUnVrpm8FFMApzsganzgv4orvFyFx94ZQsa6m4zPVcUjJbBgN4gkZufDQYv9GsNAbc9C462PX",
  "key13": "3BzTdqU1isp1vowJ52CaxnzVVjUci3AQErTBenjx5mjoidcEVTSaCiU7u45omc6ZzacH4RzYQGzVN185obUrbhHE",
  "key14": "5e7aoWEht7uGFZMQ728swa43rc9LayxnF24agwSib19UNFgMCXKkpLgBhocVFVuqoGLDkFruQ7q57GTCupKo2BMW",
  "key15": "42RowKDqo3RLPMsDtnn9iRea97NHGno5cce2BJphDWTMdCjTA3ViuM4PP3PDUc88XBKMuML4UUBWBvr3WtnwRR62",
  "key16": "2dfEuZAVGh1w2JjjUFsKL9bYrJxrqvsC9kJL2aCaKrF5TuMCKtTBFKf7b9XYwfWhwJ1whLHoMnxfPgzbNQ78qrhc",
  "key17": "34te7qgfpnqC9G5oCQLbukqm7zigQp6wpy1iL7H4NttEMXqXg8WYhQKrTUrFGE5eJz4ArysFPoNh4HuHDNujRPNr",
  "key18": "5Q9APoUKMXZM6nbpinFdCaot4vqACQq8HzNgtqTCdZg7Z32KrRbL1R3uVhDfDbZF7Ho7XMy9SG4nDYseuW6tS33K",
  "key19": "5WKs2c2KicBLrUtwijNS9HzhzC6xiHLNBXyJVAXyxjcU41q9EKiCxejFgtPy1BpcfwDKbLLKD9V1J5Gw6ztK6reA",
  "key20": "4g2V9uhEwhX4vQme56uk8W9y3JWx132qXwQMpnfu5k24LWDGscgP6niWMUYfhJuiUZT8tJYok3vuopX7nrhCf4F",
  "key21": "3MfouM1qZarfB9XrNtJPPgUh5y6HEMFAnr9DdneugM3fFeH3EFU5XRJ7xRB5fSH4wzQ3sD9Hb1ZpCCMhM7sX3f3Y",
  "key22": "4V1m5YSduuitDsdv8pQNNcSA7BSrew7LdyiqD8Z7GmCgAFCdybDu4iumoeX41Sw8tnDDEMpNEJ1EVREuvExhMykc",
  "key23": "24zZoYde6CwGTcr3ZFcNg72nXGvu2chJfCo6Ay4hgqSLQ5mugaDXXReojwKY7zbjZYzN9NBmojorF7PmGXzZyUit",
  "key24": "5pQs3H1gk5zimrDrum1wj3hJcXuddUA1cmXwZjKJxfeFu2uV4s158KmzE1RWAayRpjLKMbR61zLTKWXFWLQMM1BQ",
  "key25": "5YsrymXJSY2rEuxZWnFYytacHX6oAH5mD9NM17zzt7YquRzUk2UTZPGd4MsxjgFPdLvDNCibqT2GyZhe4iEfsSNc",
  "key26": "2RVAgu8FJA6YNRpbHzJGbWV1vbYqF82LZdLueEPnYRnRQz9o1ds74zCdvyKNR9ksi4vTLwgCrgxipDvwZBsJtfdG",
  "key27": "xu4Ljkr879yGjsAe6BWxKbGPqTi92pgQ4LfySd27yfsUPcW7FGwQKQjah9dqp8h77pntUnJ5FFZJnpvoewPGAQh",
  "key28": "3dwopikvthjP7kpoVkGZ9g52twyWG7vLEc63nAYtqEsH6ZYRxpHYFq9wvdseVQtg2Am8ptBZvo1fLpmkeBBjzXyi",
  "key29": "5mnqgnXcpXummv4JK7ULRF3s3EK3wyFEKVqEnbs1PAoCgxJU2VoHwQaySpPtSvNXaP5q52jtW7a2Ja5HobdmPXJ6",
  "key30": "5LCCeQg9rnNWiviZDrKwrUW5qtKZV44c9sGVtQ5j421winKWcjc4oRKzXkHLSdS9T9rit1yexgecJWMgBkn3b5XJ",
  "key31": "3V67FiAeCNf8uLKSCN1cDPrM7jqTTHTQxC4yCgUudHW3FMe3TXfEMsmqxWBtzN26MsgDb8Bz1bh1YFCrvWiPbSnP",
  "key32": "21H2bmx3NAbsRxuWRgvANosjLPBJhB8RUk41rnz9v3aawFpyPUfRQ71UCL3wr1cMpaEnCWTdFNMHuvGaCgCuFqb2",
  "key33": "38ujMk1Kqn95CsCJAdB1hrT169cggTgrRCrLtiHwnvMD1gbXQZQc4YhnF17dSsbao6ja149dAVxs3mcV31LYUGTi",
  "key34": "3evLZYpM6i9fMuee56EFfmY4vo2FKvvzHoV8iLbLED33d2ejcgNXezt622ZczqhSuUNWPwA6ZPCVN2FTwrYdNJ9h",
  "key35": "25N1DPDLTduGTM18V5Hkgiye31XLtjrxsWECXx1oFpinkddV36XPuvWQcitPjZWKkvaSP1Zd3GpsKwQKFZsxBy2x",
  "key36": "3N8pf92QrbvNo3LdQZRTfdUcjrhor1vfXFWTf3JijAfBtF28NhdpZR4x5ktiomPQXGj1xsNwskR4bYtdygiGDgR7",
  "key37": "5Pi1fPxqeRCYA6joftGbkvGTDBLmKw1wnLSNZYq6RM1rvD931CXWkbEE9oYsTSQE8FN2xmbutU5jYfTDuez2t1Bh",
  "key38": "29zvEzCJXHvRu2B3ja9n9UT8sTCcvZsncdhyubJtKmWh1zsL4iEsFqPCB341qGcQocUf5C4pQkuLxXEpqxYypsMq",
  "key39": "3dwT61D4U7cLJj9uJr41oJombJ6Mhq2zQVtgU2xymTvDUH3mB55UGuoV6KgsW43NhzyVfttSJPthw2BoGhpfag8T",
  "key40": "3mid3d1vYK54CowDG26U3963zY7ApPp94YLXQKR8kRkK89kfYXpZy91uBNAgrsqxdXUW5w6KNWLvAabf8QdedjvE",
  "key41": "2PRe9taPJhNmsPeFFtVuoju9AMDHngYnbz7zJnCy67hqh2Gxvzo4wfHRLhbCCqpMj8xQj3Bj3Rb2T1UvGbeXc9Nu",
  "key42": "2WQbFjy5ep8Z9VYWDr1JaGe8jhKyNUUiUUfZpXdiJGYAUiQD3KNWPy3UoBumHaYQ8ojDTy3wQPXbeKJpFtmckAMj",
  "key43": "5dqUeTTkABeGxu5uF7pqxUiTHuLM2buiQZscbRKVuFcqqMEfNDes9G3EjzswXHYsKRfaNY8iTAk4CWMtC977ZzAN",
  "key44": "mpQaT5rnqmUEmFHm95einELTTmW9yhdKaoUbuv9qLdGu4s1HqZ9LNMRyn7vAyGg8P1oGH9T1UuiYMZZne4omvFx",
  "key45": "2zy8PKHBD3Vm9JHMeqkjQHruWn5sT14vtjU9FvuireE4nBfJ9ewothPJs1P3Mj58ZfG5mR5JxeD5c1DeNtfKv2g2",
  "key46": "2hScWtDH8XwoXvki8Yne7SZDM56FeSkvW1WfWVAP5P82LV5X1S5uhZSH1Qv5vaq73PJDTyWpwPr53pyGoPEZPEVC"
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
