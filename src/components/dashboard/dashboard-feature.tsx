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
    "55LcZqfCgCXaAHU8WvYwj1udCq4GA3WorjqYeAihvVCiUEEKHMDy2arHC1XsW89Zt6y8XAGpdJH1Wncn9goLV8AW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34f3fobNZHUqRU32dNmwhQxPJF7quDgkBtiodTC8WJc29mq1HC7k8DXzi3zdUC4SAGDQNitEmkhk9AgfHnTxpQwA",
  "key1": "4uqJQi7eEoYJnk8Rm3bBucwHrRRzeL49ePxY24xtpqpujcogPCVfzKx25LiCs124WAZWkwDbWL5tm64wcicwPxPj",
  "key2": "63qgPSrZzAUZqhj3SiQRyDDLAo63UhTqQB6sW86D3xeMiAu5QyPfjpumGiPgnXGjjUCShcz3A3ZCuNEkyyGiWzSu",
  "key3": "4J6MdxybtjMGE8yaNwXZxiXYkCprPtFcB9yr5eK4T6meHMeZxqs16bUwXEwTZFREhKePifaYLpcYnbEqLN8fFzmB",
  "key4": "58rQraUVMo2i7avsXCrhtuyoh8Uz5gtassLX73BLzsdaRwt8iAMzJHjzh1AiGufV2nMqLTuUAsvRtLSt21fbRHvD",
  "key5": "WL9Zvg4cxnNZyai4BAxE3ntXh9T6dyuHohotnBXoWLrotrvheZfWmFYLnfPAL2mSosD73UnhVz5WpTabjDq148t",
  "key6": "3YkEbTi4fyjacbNf7vcVwKbgm4FpWJVWh4cKeLyT4PWarbvbZmSK9KYroRE4721rUuX8xFRKUMENJ1oCBBpd8xiZ",
  "key7": "2GMmoGksLqdMMQGfqfahuQA7D8QcD7sa5uDZTrPnGWDwdhdSFyNCirPsQE4PjJfgFdUpco27mxMdLvAch29srrMT",
  "key8": "4ccq18NrF7F8dMe4tVJcge1Cia2yW3qKyf9KtiTgWag32yfG8GJo51AkzAT8b4r3dBKgoFpffo3eRKhf4Bnd6WfR",
  "key9": "2ZsBgmuevBbgCGHuXiZgGEUPhse7SvgSaKB4ThtaReeMEbEtXaBTFv8BTd95WCaufddLpRFFUXX64GCg3a2DNQx6",
  "key10": "4VycJwJt3rYE8dXiKbLfYqfBuZ1uDsoouYL3DcrSS3YMxsSB1otd24PEoQUs7gdey2GrC6ProZZmbUDqRfo7cs23",
  "key11": "MinvnUMWxuEdpA3JyjrWePTwdZfpEmuZNz9PWuGZzjJan7n9nKWkk5fp4jvUdJqdhdo8tK7vt2odiPJbPpVrWqq",
  "key12": "5eCvr2YVfF3TL5jAZR51k8QbXjqrTkexvZTzfXJdgk4dkjts6eG9azwHrB8TvEbcGHPocC8gWbG9Gro9LTDL6peV",
  "key13": "JSg5G1oZ94oaCR6rjGctPANajzREg2Ge7xevw5m6WNAXQJ8WZ4d2iHR7VRnsAnE421KpRKSECWz7Z4YebpBCFAb",
  "key14": "5EHxZCVkePYkNS9yrKbhx5hzFHGy2kTT5zNKVH2NEiXJXRL8HYpUMpWam6rG1Fp96wNZhXt2obNhYocH3w2MEhbr",
  "key15": "4cEr8KGE6bkHxFDEDG8YtwSXKojB9QZCmZHJ7DgqZrHmLQfMGxJ479X22dQyk742wVWvHpgZv682PVVRPHztu9Yn",
  "key16": "df59yPexnsTm7Y4vdurKRDb72drhYxCza8ZusE7h46D9ofd2J2WZVwJ8pop1QgduSR1KVZQEJXM4y7UB1ZHrEsE",
  "key17": "44uAU3yWain9B3ShvwnKGAg4LAtPVm3YrcmBNk6DVYt8DdXu8xRyRHpTJZjx49oW3XrPrnWqubZqygBqkMZcjKGA",
  "key18": "3D8B7MPLdmPeJtQ7gmuAwGgU5VKGziuQbdcvQRFdj433SYoeJVWXEa7h1eQ1qqtUwLcbqT1iQGv24CkhmJBRasQn",
  "key19": "4YLigoKxJer5ovXnJeRYGfTrDfMAxgmw3rndsxHkHyVcP5G6xvNk5hhWK8ZsiCHsQfFZhWb9bFE42qUvS8ctKCK2",
  "key20": "xwsJuWHAMSbgogPhjb4G2uBCU8XwLtLU7xFDKNWJdmBWSL2JqAa8csmnENKY9QEMCmEtj8AN9cKJjk3neXHC75e",
  "key21": "5DRb37wLtrjVu5UuXfffzSSaU4tHbLGzhAJsJx7H2tFYk4hdYY1iq4XWUahWDr7hjgJjbEN7ZotNHXhcqeBd1BHR",
  "key22": "5NfY33UMLsMkiFcX8jnCGLfxbH52MoAt3vszJmHSr9grejAkF5d85G9HRpyr24HZfnQcRK2hPbgKbgPBf8y7pjpR",
  "key23": "4xL223PC9mcVn4XuCGQZbPUmQVVXP1Vnje3YsL2ABNTEi33v19oMLq3K27kZeHTC7ixGkyuiDeTjdSa5ohYPYQKm",
  "key24": "2rjzjZoGHgKGSLmnPLqaBCiMJtXfBtqGQcig2u5up722q3rqtW3rk4mkdm9eaouPZtdifUeQVNgFgYbi1vzMovsK",
  "key25": "3RF62EJGM3JFwYPrL2ogU7FAw7xwrtN76XNZJhjWqx27TokbDAaKWxWk6qFHWxEqXSfwqeM2i8kEvUZxDuNPHt3u",
  "key26": "4GGHbchBWCJ3how6tzUuqPMYePH3A4XzDGNE9NK1za7AAqGcWDDRKJ9K4pCjCNnTyyWzpNsUqjJozwXES1CCzaxF",
  "key27": "5Q74TVgBWG5cAQQXE8oBVeBpJJgxfMfPGFnTCsJwAcSXAt2NkUjEXzL7DA6FDeMk8F4weX8tJvwsKX2VprHHVFDt",
  "key28": "2syJCH7KMTrnxPFFPV4C35gWcgvZHKdBtVg5DRSuRXfv8aa7ET3hPf33ZiydqnUAhzEeKvcuo5rQNRbRokYJa4ki",
  "key29": "2yz61a7XeHREwjov3t4NsGPC4XXtHH29Mf9YUFR4vcSnWZbSuxRPKa44hdSVfwQGzvsmFf7JDgUbxipn6syf5Qyi",
  "key30": "4erZBL4zGLiXULcMK5SBfbEdKnKRgH8YEgqe7DeoG9NZDafvQeSae85suiaKfDQGAVNtDpYQsGaHHAaDpkvzE4tU",
  "key31": "3EKmRztNZimGTGdGRSFLwgjiqrS6cywcQW7E5wTpUMq2ZqXJdkbYnUT3LYCXRxvvexygTLcXRGaiUtj36MBT4mvB",
  "key32": "ejBvvbXhFcuirCGBQHnRBJmjCV4v6tz2skxkyPetiS5bNkz7TNHF4afhbeqBqK8z583FTmfT5cwQ3SCXjd3nvhY",
  "key33": "618QEg7mrUZcxhGYxfMvW6dBs5nVAX6SBn14WTzYtL5qevUisU3y3WBDSfPgwCtJAZt5cyFRVJv2fDa4Z3ZkdkBb",
  "key34": "UdF9Erzrj5bb8QWjoYyaqkZ2di1jnYE3teNFJDGNR41EVgNk43oG9ef471k6KqwwrPyAaRy4XiQE7eEYA4BoxwQ",
  "key35": "28BMm4AU2DMCHR1LYT7NsK171Eogq1R1Kz2ZR1qqrUaekD6Zot3iZYf3S2iGmVhKJUiqteqNXXzB5o7CBuTxpjQN",
  "key36": "3rZmajTLVA8qNi1jcKAEQuUAEZWmyeiUxxwfsATyUeDrz8FQtTyvpHtdW2Ydiq1jKXhVGYTRCCzUkb3eWesAW1Bs",
  "key37": "7eP7gg2VsmtLeSVo4jV8bdccvkVVJeN8rLnGDGg8vARCGE64fprZedrRdmeTiT4GzKGk86xkNAC4uyo4TMUcCfj",
  "key38": "Zb1enEuNDmmE5uoVPA9FfA1fFCMPA5N2UUdCWJfV1WjGGURMuvH2dEz5HznsGo3mXpvTXruw2Z5VvVYwifBKSqF",
  "key39": "54oN4YP5UNzFi3KEG2x511oaq6Hdao1v7vmyZRFrRB2JXa7pyjP3ribSHGfLUmV2sswVbw9foVSLqD89MbUDnT4U",
  "key40": "4vC3ZDmXxFVcvdhSozKR8UhgQS85vbbLUKv9PiET4uYsReay2ftSmYfvWNBFMwuJSKtNrQNmm2zEdDiDdotiYnpn",
  "key41": "dePkGMiR5Vk7N945C89F1RWcDcjddYmnQbfVM39bVXSyf94PneQMfZk8tYefiQ7QGw3dh5b8XoP9WyeoFnuAJiU",
  "key42": "4KWzAgtVtWnuY92i9gtfjAkv4yXPvwnc78Rj7SFd6Cy3LLtMhwUVTiZbRQGbfSaSm1sFwaRdtCYkc4maWEbMYK48",
  "key43": "61fCN4QeDu69T6SSiwyWJWgUgazQ1MJjz1gg4BfdicNWbQRwS7EkannD8DV7JHXtas4p59F6danDUYiFfDZKWSpj",
  "key44": "2HHD4o5cPnAC1tMhrUXCmrMrq9sNGMaXKHQy9Sjg8yuk2Zq58oCcQBJ4CMf8SVKFYQJad788uLjB54WYEo38PTTk",
  "key45": "2pjtXC78sMb1GaT7d6fJR5Z9pPVuPok6tdbr2CCdyoWqaTzqq7idecmuU5MkvTthvAeDPbTfjwVjcucA1PqQ1e81"
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
