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
    "5LSfKrVRyTMnqZJtvTFKAYi1zCofkCq1KLu2RZqa4bsB71easdtpRzj7sgix8TFg1ZfCopojxaRne11c1En1z2ne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pDGSFN8GsGWFJLmqaogE1uVRVkrqUa723GCBd12J9czKXTr31gVXWpysN4entvmJKHLmyPgbENL6Q9dYYQ39TUG",
  "key1": "3NaBBf6bNggJ9iw7ftv4vXMThobLMRZQXQiBLbxupFpSBzDBWPd5yxuNxQDiYn3Czg44B4ZJGoB7JJzChhYspKfL",
  "key2": "4ymYwP6stkDZxsSYwzRQBEkXBuvomNF8nYc8HjMvtTRf6F1SMpqpuMaTUrHo3zCNYAjGjj6JV15qg9xcMSK4Rf54",
  "key3": "3ceUS5z6xn8byuk25fDWzTqpNarus6xMUfAYiqTJEFrqZ6hV332n18bfDYEi8bBk2DsDQvxpNGJwHNXAtcpX5i3R",
  "key4": "5py6XT8uSdqZ3KU14mJX8UJnLhPYBuLziNwip4X7D9DUk4hXtu9Aiz8bhjchnUs38LdBcXUTMAW1Cs2L7xYhtvtZ",
  "key5": "3irhJvvyJqtAe6n631K7mGRsEoDuJB2DCzcp9QPEFtVgog5xNV9zV2DPWmJFKv8ZGheV8LJNKLZYoPBJzmzpPTav",
  "key6": "4JFzzsr2wW5ffty5EJaoDA7T13HSpFQDuZ6ZGEbJHq1YXedJuqEYsGWiU82ZNvWY3aST65W67rDjs9TeMedPbHqm",
  "key7": "fjDXBsHxQY5JJjUyEBZcYet3fSdeCNdiWBptdRm5w96Xss1jneSMHAAdrufVSKpXSe6JGnnF4MiZjMxi3diVT8W",
  "key8": "2qtJEkQiBE3JJpzbQ1oH7VBj7tCFh7K8K21dRcuxinn7CAGqV4XM8EAJ3dZabEuhemrEWqDfGvfK651QAmbhKDza",
  "key9": "5GAazPQCEYApq9FpKsvpDez2RXW7jhfdsyg44WTpV6TicigAzE4BU8APo1cBadBtSghLdExcTpzkFhU8rkxXrRPs",
  "key10": "29ZEhF4MUDGM2qAtZuyrM7x6KrJz7reSZf7EZT9EMEXWDtVMmvXismKVdf1FCimi8iQJ6S7XZanif3KoxT2o8dWG",
  "key11": "KhLxXNYaQRUfasF6YMAu32VPmpZ7LoPF44Jr9Wj932aiaVtja68X5cWeuuhbeXMFbK68dbWbM2NLrWimxVLYZ5R",
  "key12": "kZUP6qKuByMpDbBGbPugiwvdhJ4fSiKXg4VqrHxF3jyVgWYKqzFbhPL3S1d6QyBQ9ogMtb6e6Czfykmovct5487",
  "key13": "4zH1YHgYco7GuxoCQ63vwnWpEMqL827Svk9iHgz18PBVVyqGYLQYjQMTDsLaQ3EbC3TMMActSoR1yT6c2Y83pRPw",
  "key14": "4F7AcBqteRLFWdsJnKP5RcLWiyYNM3SFdvE67c5eCofu7mtUeF5AS8ieMsKrq1VWFLkgp6ys28SKpC5NqwSCUNTh",
  "key15": "4GUASGASqTTC6biQdC2VDMwh3WcD7UCsStC67VmsFgXs2yxcK4w4bj3Ey37GFRDsomnrwEye7dQWZ2sREHtJvUHj",
  "key16": "5CRBqChdMy5DJfs4fFvCjWNcFpZ1MrgJVSmkt9F65tLHbtQesbuCvE3ZBDkyPdgrL2ar3NM1JVrGUBv6QxMdbQAF",
  "key17": "61EPeWAMSzdzwyc96YwQvBfdqzPnaYhKwqhfpJ1SH4F8UyHqBi14b26qUyxus4EAcTgj8ZucjrvTAFD7UbujjRne",
  "key18": "3fW6nhNbifk31bdCasPJ2HFxtKwsFP3Nzf9fg1VavZbZcNEiAwmtAvqPSQuybjiJW7ScdjsrJyjU9CCzBHEUJJA3",
  "key19": "2a4Y2iaHKLDvW1hh5NfnNkk3d2BgBpm2XisgrQgN5hMFPP8Vai3a9swJ4iLtNkTxtmJG6VKBsdPT82MejR4ukkgu",
  "key20": "2LJFs6ww54c4HvCo9jVcJgPFYz87pXBJU2LvagtJ9PdfwdMUV8RAV7GpH458dfkRxEvmukNHcFpDgRe6jtyTz6bx",
  "key21": "4h8V1riVMHYxsAgL7e4zpTLMcA2qgrGbPmn4QJYHdHH7jx7vzrHe8Y61182HgXUPScC3Lg6Zri8eUTUtJR8gjo1G",
  "key22": "2HEzJnwm6yPcQ2JXDYBFrvyPMVJ7WAMKwmTtoqyd5ARKHRGCck1yfzxQyTyapzL5X7AFQNYTfw2d3KLqPpfCL4xE",
  "key23": "2Npi18SmzSwCh5RUk1L5pLdak3Y1ccs6mKSBnB85cEKBZhVsyzEkYCtX98vjDBMxezF55H3nWvE5HAasmWycN6ue",
  "key24": "3MhKvzfRX3xxdpjnGvu11Fou8MjyWCgnjAtmzSLssfCVqiBm62pUUWUhxx3upLnr6WUxLSk7SQMnbQTk989taj3Y",
  "key25": "2vbh7oAEn1wewtHAYgWX7ZkrqPbQgiztsDQozEnMzPp45wEJp7czF1E7K2reNCiLeGDnJK5rsJpNhLQFppxkM85S",
  "key26": "2KL9HRkcoH2QRA1rbKxCTYZtPoHL3Npjws5MhUmpQNvoEZjBF79qonzjesLUaXynSmJxKeidtoEFicqxuPXt7pg6",
  "key27": "58vk5MXEBH4BKmYy4aKfiBFvja9w1gPKNomKB56ZsazJqDMvaLuDrS8JJvRkYGPQvk76DC7Y5C99brBMeMhDqLbC",
  "key28": "NTYJToPsaY4WZWK43YYfq1kz53kiVFLzp4dV2xeENb1gpmZwb5jXh3JMWHAqGKsFpCAeJaqcxgwzU6NM9MAokTg",
  "key29": "4r6buC7qFQd5VWbogCW9JshPdBEERpeUxwrVcH5QHVvw6ufyzDM86b5Boa5AcMFoLgpA6PN92xPV4rm9HLSvdkm8",
  "key30": "29L7eCTJZJFj5pRDL9h8N9sjo8G73YuvmQTpUTfnBkdWLj9rR39PAVLnQMB2v1aQmwUDji5pGG6bihehqfXPgwNQ",
  "key31": "4NYB8SkTfhNheW2PdrJueGDWGYkHwKNKWyNDWoUxhsRxf78dDzgDjrQFoEhmsnkozqwzt9LSbDEBnMQDWC4qpnod",
  "key32": "3NrvPgKx6sg3RreZmkdXtQTp2UfEqc3jyEurWmTApS1bJEvAYD8DYrakYq1vRgkqEUiWQhyj7dv65dv59Gf8WK5f",
  "key33": "5RbBT3f3B68e2GLrp7a6cCsxfaSARJCRTJ7D9EMJFgZiKXjNnyrnDww8yEUGgiTiAcYQQKMxawJ4t9QPcMKZCo6f",
  "key34": "5abJUNJtbPPNqF5FyGwTdyzthyWJkBL6dNw7b8ebveA3BsWiavyWHDV9DLEhx7Bz7AhM3joJZApXXETagX6xbVNE",
  "key35": "3jQSy4xKcbG7ixoV3Cm22yb8udyeXwX3up1g4njj14r6FPsZvg4wcSgckwTJ2vf4qNYEPWZBjC9N54hs1bJddkxQ",
  "key36": "HafXfWvsGiGExGN6HJo6Ab6FXy7ZXsR5U5khfdDKBJCzWBrnUQJ4Dvjy3CiqxysNWYPHaaYReQfuLa2VfY6hWie",
  "key37": "5rR89jC2Cq8734ZDA2cmD8HZrmV8gEtrh44GcruF4zfXAQCpGosyd6wzkNrvAv3eYCpnmjySwBoxWfGw1zJwrwVB",
  "key38": "2dzQ6LCYE7Rcz1E142UvzPDL1FVjmykxcNR6M8UDJ2T56RB2by9R2YVedD4rJALbAD1a4CiYNvSwXEhuLZUx9eCp",
  "key39": "3Cf2vQKJVHKYTCXGQ8AVHc5K8m9hrU9pmUHQrRYrP387xYMsn6FRrTGEqReU2RCNGRUeVWbckQBQ5Vh2papj979M",
  "key40": "DFFneqyCu13cvfJiKXf6aEaYmXgdx7obGeoKVxzjUwSxTrvywWsWvWsZ2F8eSb6TpXnibrDFrSyz75wc6jdat3E",
  "key41": "258maWpwhu4ckhnigLbM88MYumJz3kYENujatwnfjdT75foV5uJzDmabWLDmzXRBkqobdfo8Tz4hCWtTKi5HPikC",
  "key42": "mgx3DptuoRDKpSpszhNsaPoUoJUF11UnyFfZWsW7sEYMEozR26VB1CQWNpTneUJQ17VJpgRXQBFuKsrUPRpLxT5"
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
