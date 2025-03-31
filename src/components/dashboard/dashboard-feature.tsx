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
    "3BHzX6t7cB9HvwaxeQtMQzk7DjoDTATNbe95bCQvGpLAceRoMuUt4eH7N6ujGAem1sjtZ5EhjKTff3RbEaptHdqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22vmWE4c92zzXd7LaNLWhtV7xFq6ErKpj5neT2dvUqCWnkfCLeLQKvyXExai5J5rYY6qaK2sKURdc2kD4z9KUVC5",
  "key1": "2g7YUZLWs3EAAAAwUVFsDwsqmiMj73sNtsnnFtj3pgV1Dv1kaTMYNyzxnM9DegZr4xHAEUowmhodJdXRtcdJSuEC",
  "key2": "BzcBfgkhwuBWDquTBGcC5ShWa21Mza7thZmBz3MWjuMU3gT196yPxB9BQbosvFj1Ysa9g3npzS9A9f2SJGmw5tn",
  "key3": "4DWZTMwmfmad6ggYTDccjPGoY5t3qsnzDakWK9Qhzg2EXjtTa7Qi6YJJoxnXn4eySAEb9nKrtwdqkDirJYTH4SF9",
  "key4": "2R75f98GnC6CH4QGnFQtodTHTNjKUkDbePecZti8NLe4uoTh4Jzuw2SkkNzUfpgo1Xjvee1V3XLLJuzn6YxUKFEi",
  "key5": "dmvkuemCqLMhzRSvBg1sQaDtCezG4n4RM1WU7QhVEDCT8E6M6wuVgrXxto4TBH7W3j69nmHJRjr1CEX23n8JtZX",
  "key6": "Nt4AVjwqXRWhHiRcgjteHjxohvEwo1Wcdi4wL5Y9Rg9iAkj3RPD74ZUkw12hDbqdAgNyEumV45HFGVGyJpjoCNp",
  "key7": "5WpPjn96ask3sR785qM1p4ZtksTUPBqVzA2UAY7rhT2sByZHjPXRL1ZEssQa9pJ8XqgpG1A1QR4Nug7nv5shzcRz",
  "key8": "31vSVvWGwRsMFriQ2o9rcuYnztt77NhwwYtoGG3uk6LyPiRwfZeGWdPszCNtg4QXML9JimdRsaUgmpZz8MJ7oU7v",
  "key9": "5w1TsWP7sU6YbAitrefRGQ3K4icasBdNSzCLBJ34oFPKQTTdp5WBJgeYyMh7FdVE9qj5zhpuAP9iMJS22U2suV8T",
  "key10": "pUZx7pzr8jd6q41ApgTJtKUdJ8cddZrLALQjXoDED9c3M19589fssRJdW26LkAMDK2N4xx5TExtcpfeF9gEzonC",
  "key11": "5M4U7UcWcEu7oPEepNnt54AYjYScn5gv3oJFMHCd7Epd8hnCoebHRUowLCN8V69CbJ81gebVtHiVgpHNrXPSbDi7",
  "key12": "51ZJiTequytVhRwUw83LbRZgP59zNuVWhuCiJwDaAjtnw7rbjT76ePrYsPprzLGX4ENKDTCsuUAJe5fBNK7mXedL",
  "key13": "2xYRcLHEDMJte8aq42XJZmujsvenfqzYBJAE4AecWfqWPDjg7NnJhUUTZVx7XYYStUg9jrEPRjuYqtwW6WosbSQu",
  "key14": "44p3cfxrbR83E3eVdLttiFpFzHjPon1Suz8XfnoyUsNCCwkLUT4Z3kerPFarhEVdm18QS14yqg8BXoW6mHsVjAS7",
  "key15": "4pX24P5dXJNL221Qys7GnpL3fwbqRQuqUqKGwktcDegQLDXTiVYTnBPTCW9fd6DGJwxJupzVpGhrta98neFQZt78",
  "key16": "3wDDsgXVN43HcAjZfLtJPtdQV86SfkTRFVUrtLB7A3xGaTSpVB1vpFPgRa7XoNMWGASwveTYgD4J4hkT7gGBkJLT",
  "key17": "hSouMWLcwNcTUixPX25N2uQZzonwEL6FMMYQBTj1Mz2YCaL6sgvEVuHtw52NRSHxCC9rPQpTarDJGqktyfmGTty",
  "key18": "4fvqPrnDXvqQPRU8R191VcENZXB1h8mCbbi2pVmZffnrk6DYhLstBR96MZsMAT8LukRnRjgzTHz46PQdxRFvaw7K",
  "key19": "5vVZEsoVxQo7sJ7gUBQC3fXFPbVLM4cy9x7AV9xJ97oBBUaAzW2k1X5t5KrGq1dhXxnX4tgGxwybM5krWALeuNxf",
  "key20": "9a8QahZow1RoGU5SAxUrzoCv29TZAtkgN1cQ3YBwAmmwFWuKSkbcPmQCJQxRhtMRpheDt5j3VL3SxUdD8ZgVDzW",
  "key21": "ivZCZmno1zSQA5FVFFxhkdatGA7KroWD54feJvKRqND9HE4Kcb59h4hjDpB6vfcD8MRpj5u1M48hDcBM2bzAtny",
  "key22": "4NJXugePMSBo5vPxXUuy4gE7CB38iwETNy7jL6VY1hT3SPmAZghqzcUQGTDgQwc53iq3i8UrLkUcRr645ru4U1Uz",
  "key23": "KVTKBThfyWrEJpvJPMfkJumCw1LbLpZctHjWdmhNEJ1yNqan6fpCvwaZaocAvC38cjusJ3g7KKqTXoLyFvp8TtV",
  "key24": "34JKnrm9UYkJBDBmdxvh8L943erznE8bk2NJMbPsRG3NNG4C7YfQuavmgPZgyqm78upBvikcUE7WPQB6ocdXbmjv",
  "key25": "42AesSghsdqmmRyh6847cg3EGVoVVm9oqGU9EczbVEjaLzYP8hJLwDivv2vApta2fRmGKbvS5SCQqrCsnMTGf5aJ",
  "key26": "4Ptre9RXvkhcK1uGRo1QWvQL7PPBqiXkrdwdQ32MHTv3iREN12dHkzpQRsJQXLdVt6pPzcCi9PPAws1rPaC8bqDF",
  "key27": "3nckTacQiaSwsfaXxU1tPb1xAUpb9JjdxkY8srMTPdHwnWrrYJ8eFS6D9enDFchaVPBWabFbSjWVabMWKhMSVdZ2",
  "key28": "6rTQXQ1eeA6yfS4YiD64zrGKt3HECRP3zotPB4LCUvBMBYSTwtpahT4xPsmhTvibaAvyxjJroDSjpu9MJEtMHXL",
  "key29": "faatb2HkSTr3gAPh2kw6nwNimYBfXeJJoeeVfSqs6NgicCM5hAe5XW96txwm1Jcnam6f2HHQXWQ1F3TYE5wZo22",
  "key30": "56N7nUE7tvkCKVEpTxAAh9zPHmGY7JBxWvCKMo6yX5a3N4fZudtwjnPihVMbfyPPywuKfakmD84uyZBMnQLFbJTQ",
  "key31": "3uTSK1RhY6sVAn8MKCfn6qPX1hd6ndZr9dCjNubJoiZ9RygTAURmmbivmwtmPZ6Up3RGjq8oZ8UfJx5voRWwqfH2",
  "key32": "2Kuz6d6zmXHoszjQP3z7VmHyCKZ87QHTBzxZhdc29s83LQyzDKY4CqqwRB2fDNSw6Pat2nuNVhrmyPrN6wWGNNqo",
  "key33": "5Kaj79Z4CNjemvuQtUSDzTPRn6c18xQQpFR9JR47CPz4ZAtCQpdg8yJQgfJyk8aZnYk3xwkZdtW8NskaYKziMyKX"
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
