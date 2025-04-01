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
    "2WcF7bppW5M91aERY6tjXh27oeQoUPwus2shi2yurPjgquKDc5d5DsJoj5GZWMsdW7A4LUaK9FjyYd5tevyH7xEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45bhA1GagzmqJ7wJEPKPpNuk2gV4wFv841qNkZmdhAuvLUEqNJhgZRgLbbZu9qjvSCCrsXSEAhCV9T4qX76P5eHq",
  "key1": "3dCscsueAk6PtHT3NYirazHhBDo4KLND7sAcVyGAaz2baGxYqXN2gYDXeXuQpf4AATBZ6BB4NZLnRamJvB7ptSKE",
  "key2": "24EXfQMgFg5WhK5Xsak5HGjb71optqC5ZZf75eVsCGWPAcZ8k4NjVeoSRq1eY6F1fytERXZFUZasPD5u5F2SL1h3",
  "key3": "4dxPzufUFsFYADkTWPEuMBja2kBKb9ccf2BpTKgqa1QR1Pzgo8diGXRitU5v2nJyskK4ep1ZfYSVrpjmJhA2sFFH",
  "key4": "5DeLQoauQzknMofSDWjqgaC2Yk98QLkrWSGYZQXZAJMqRrT7MfWW8BG5SCyMwZ3G7rE1vWcjzKUM4WMLJcYn2t7E",
  "key5": "4HMsCBKBe59QX97C5fSmeobLFtUX94sNAjKTgdUasCxQy35AbQvzY9gNvRtP6KB8KYwdYoaU6VKwusZdPSB6HmZt",
  "key6": "PnauCBPHmHt3wWevqY52tTGixGUZf5grRHmveVGg5zPim9e8mj8WvjJK2m27i1Zv3TT5SfHK2N5hDPZPybzwW5h",
  "key7": "48EnrfiWeXN16BhXgLNVJ56EEzNgZMPzEa5ebU13mdNsyaY42aWD8n3zQtyvaQ96MXSmkwLkvYvfoBeQrUMhigwr",
  "key8": "9LxaJ16aMCQamw4GYemnvjqD1XsPG2A22DcMssF2yugM8bDTVd4C3GvRVJnZH6nvEbAUp3KDdDxpELzT8ss1vks",
  "key9": "j5HZN6Kx8zFdaTDPTdBXWno3nUK4dwJPpU3HzeYbin4AVFwxyBvAjp6EmS7fTkeHRQied8Py5v9M9EcB9gw745o",
  "key10": "64Zp3BxxPS4sr2QUfkvgRGy5kXB1D4KycF13RbCESLBi6yyq7eZC2X2GA5X8YFqRoa5kX1Uq6iK9t7gpD4Q12tyQ",
  "key11": "5WKQtNaJ7oQABDzM3TutNPgNe2xHqFQina6XxtTdczTHpnJLc3kL8CkBCMEKgKMhWUy5nzaMtFbhrZfR4Byzk7jV",
  "key12": "2zU8DEgaTHMQRke6vjxXjBQVnebBGKqCmYXBbLN2DgCxtPLhobgDwTVSGqWAhgxAWVxsrsBSTuyDFUREpkg2wrEQ",
  "key13": "3rKwkbKAadVQkpC5RADxAkgx8q8EZfVQ1wV7aLd2MKmauH1askucB1ksae5QuDZq8w4Qeo84YqG9374grRs78g9b",
  "key14": "LiofT18ySc5hoTAhU7Jfsddsbw5bUrzk8sPqWAavCsCPtdX1WnAKuCau5TyiSXmLBjxkNS4r7yEVKrGss2Wbimm",
  "key15": "2Y3KneVe3HoTXPHdyEJzou8VMCViw9VxYqN2ZVWdzpajv34zobQ294EmqwvfqNTeTCaaipZzdGiNX1ycHhbKyW25",
  "key16": "251QHMdvVjWSQzX1ZrKR614Dqi5iZN75EknikdGgz38Y3wBhNeCx8noFNXdLHQtPFhM23xtcbdTND5UWSibn7zSo",
  "key17": "2Krywhf6QjF9KqMTHvoYubfinXiwdbLPZ4TzaaVajx8e1gpzsUogRcHMDHtZvV4XfvaBTLva2iUu5avV4aLDqsmG",
  "key18": "3mJ2oKY9SUTPib26CxXaZXfsEJd8XLE5vwzHbbhESnQGC6Qct7sMRjAnimWRQQMdxE79BQcr4zr8gK5okc52QH1r",
  "key19": "4qj4MBwHht683M4BUbJU5dT7rLSpeivdV3nQNxVjRY4PSn4uWt1wbEjoqNDe32ooqjwWTUGBuCyYRnG2Fw1zMPY3",
  "key20": "37R8KsVBY8NN5Fktjadm1MZvgAbudb99XmVyEqmbkxA4qVeTQ2VQi7qbF314R726f1D2kmSNC79QNb6uj5bmFPZo",
  "key21": "3bQZbpspjWzJkRfswFddDSTgEYT6dGhZwmPh37tmijLqoh4ogCR7fuM3dRwQyoUwuP1m2j39cpYobjPbpKiQkuvm",
  "key22": "4tzLsFezdNa4YyXP4Hg7pazsXEwVSmVUzwLLNXTPLMx6oghe6RrPat354c7jhLnME2kCNKYr45GdXiCjRwufVbZu",
  "key23": "51hzFDHXQujy4E2PYopCRAmby144sx5xb3nDMXXEt5EpxeeSL7HtpdDSeuAmYnoVpMbeYZE4n8X5xPcumEcobPdR",
  "key24": "5f1mLZ5mGg2XwBL5gz7mkSwJ6At6YMFbxpADtaiuc7KzpoR6Cw3mWPj8JLAWsrUMZwsVnAsbRUynm2BWTVjChQGq",
  "key25": "23fqgbknEamjXgnUtUS3euiXgjByUkn4v2ZaA5VKSSq9okgFFktC2HCvyU4wcy2iL584uEzfc81tvK7jSPGAJisM",
  "key26": "3HmnbLSAJexG5ZGTUp5o32FKgDgde437jvpLkLy5eJY7yXq23hwWqnAKqkctvNyFMx5W7Yx3d5CQsuGNavfE5kiW",
  "key27": "3pdDPso7tTiQ7KBCakam8nEe8sR3pttcxn3Jn6SaPy4WLiJp6suBfeFWg4v7hYcJHwzon2b4Knjc3ZtSq8jSZPLp",
  "key28": "3wz5byJBpexu8RVKxcxKW6MbA4Y1f4WwkDzUE4pG74p9MZS3BkWRLJGEiSg8L48xG3DYuCxeAEBD9c9mWZZtvjny",
  "key29": "ompKN3vtAyHqeU59VgxCJ5jjq28dmeyBXMFDpaafQQooiWpefmXmTgmeVRtyABQu5FnvmTgjPeLbthHHVwxfAC3",
  "key30": "3LLVuAtF4gQCQurqWCGYeNmgA3SWKF7hFrJiXgcigPg2xYDgApEzVpJHiKB273fuUmW2DAJvFdyb7dHCr6jecGVL",
  "key31": "5S913TaLZNa5rbR74k4uZH6Pa6dU3753KSgQ4nzjL2EwowdX7kFGV6NmxV26YzsBXKtndodHSB83KNnuBVbBuYmT",
  "key32": "3jmsWmyYqUHdmG5jNbXfhU3LGnxABjAKMim6XTX4SLk1hHuz8J4Svh8kJ5QwJFUegsNdxiWsCdPwT4YYZKc3kwNb",
  "key33": "4EJZ74SX9S653e7MKAgw9Rf9Wbmy4FyMR7JTJi2ytxxHWCK2PmiLWpCzWxTCnnzZDGYvcQbRyKqqXQpyVGp7dQfd",
  "key34": "uaPe15s3ZLvmS6FT6N82UZfnwkBCGBu8QdGTHfQPrKEeCP5vZwh27KNop2T9ba7QnkteCViZAvFkzuLLptpa8sj",
  "key35": "4YaoPixzg9Y9yTxuTkxVxyRVYMc1Lmu2ZV8FGeTCZK21YbhA78KWbzutDpEbYHPcDCRs5u8WE4ncvArg5sqZ53kW",
  "key36": "PQnAUQKsEyhnRi7MsjB1N58v4Fjsy6XZiCX4b4WQnP3cr63fxoCR3QUcJW7f8hGJWZPFd9Yp9P4vGyaNzqPomTb",
  "key37": "2jF5BxZvobe74VBmyxeZiuTxPR4T2R8LmN3uP2otGdEK9iDvE8XRjQpsdJurL22D5FLDZAjEvE7yjUMg2LCw4vjY",
  "key38": "jhAYKP3WvBkLhZ1yBpnZo6FrAJYMazjJHS8nakfTiUXTFJAzsRnj7z4cZpS9xsP1hn7RofoDBgknQVnZscaMghm",
  "key39": "3YPEgTTy2DuSWZq6Z6jy6zfZWtXVXQiiDyTBdqaHty5vB4L5rtEdhv7DNtLUZYaa1w7GfAHuVDbYM4JvdiFrmZzJ",
  "key40": "5rwYXWc7fZ1GvA7rcg72xWsz7bEnuvEZUGupD6rBq5S48LvB42sYNtWYMAveUUWN2RPhEF6Mn6MzmEWBgBqx6jBp",
  "key41": "2jSWm4hD1hr8LJBXxCHECc5ezB741hdXknBZsEWN99aK3A8MDBPkUwwTpqubcWteiVAei7MwA1AEru53XVCQLAcG",
  "key42": "3SZ9zCYKP7tFQx6GRMmBksCji8vEarKfdnCXNFFCebfFU3MAQLQoizPu5o6gUbBcLQgReRQhtdJQqJ2Wfge4XYWG",
  "key43": "3XcaPF7C6qqmrAkyEf77g4e3XjESmFqwZaJPzySYvsMUkDxgE9YZTtkFXakm5PSS35MA1Z4jxWGmS6KuXZPsMqTG",
  "key44": "3s8qwLARcdnNrSLedt6s7DsyHf1p8tqjiy6dPVod2NghUGGtpAWkk71UULrWutr1wpRLi62hciHZV3tygW1ympst"
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
