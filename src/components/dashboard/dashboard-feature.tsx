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
    "4BVPt9ZtpFbYDRCDiMPEqL4nQJ1LpuaJZjVrRn5xTPFc4YetJUtktDVdkG3wVWPiNvEfP55nPHMAAghf6YsYNfg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cmCMfA4m8AbP1VrrXAHD4xmnpcALosTyU5Q5sRBdy78q9mDTVr1anhtMbSXDCP2yrR4WehztEmb1w2Ti8zCRiSX",
  "key1": "3kGieFkXXrirRcmCbza2VUWhYyoE2T5ar1HFr9ehrcEP9htPGGW1GmEPiG4EjHPkaGQeJWyPTJwU7wLidG4Ftn6e",
  "key2": "wqp7hsQMwAvWxkuhpJc1iZxoNHHvCoBonfoxrxcSjcTPBhYtMr6ySVggwHEDRtBQGNKq1TJ3br2aLZiUrS9EKJK",
  "key3": "23go2k7z4gTX2QZLiCgNMs3yUdBkTK3oVrDu9nUoDXvGtd4uWBWbzmW4XQ33jeiqEKtTyrhgeqobctqnYZBKupS7",
  "key4": "43SB6UELgR9dX4Vojra6g8BnnxrpYfeoEfZaMSwFpa7TxihHUtQmnait5yDkWwfbhAsnvTx9tLZz5yybpXhMiWJa",
  "key5": "5PkV627arbmpoqoZ3NSZNBnTVTuf7Kktt7Vbg4xR2YT9STmEiE32C7KnH2FmKoE5RKAqFXfhTDpPCQbNcC4cYKeX",
  "key6": "2XTKwLXoUpYokqewjK8aNv5QXXiVWTDwLJgY9yFDAhnQ8d3Bi6JtNpnA2oBU1R6ZiVVNPfMeYpa4LMvSPQzDLR6c",
  "key7": "4CePY7PcUtW8toZzma1heXqRLVQKPbUb3YdR7utVd8nsQP3FzDNpk5KHVtmpJMNZ3uW5cRXkLX7yw6VBWqJpmBnz",
  "key8": "5EvLLg6Se26qySEWkS6EbWYqLmzufvR5iM1P9MoVqPC9e3BX5yXGAjyJXZ8koxvGBvNyX86Lr9zNsSgmFt1tnLWr",
  "key9": "remY5hMpGpEt5KRJ8C9x12S9ypUfQLKjTdTstKr877cjNftLT22HmXQnsHtkjF6LNcPk6rqoM5FTns7NgY7X31w",
  "key10": "RcWGgVNmwSybcCmdPi98kbUN8Ddsf6Y7NU4CeSW9scqQWAeYZnWS99PFhWbMcNv9jz8d9epepmTdCugP2fw6mfZ",
  "key11": "5WFuCvmCwG4XKWGc92Z7dmvMZa2MbZw2ccwMGSeZxak4Lzd9V5vZP4x1avMNHNGSE97SjsscqiRNgn7YwhswsoUa",
  "key12": "4dTjbb4WwdvZTrXeC5LqovnQGv8iMq7DtxdyAnuSLtQ3mnKyfU4D3iDmFfdjse7Cqe7y31Dd8EaWP67P1TBUU1BG",
  "key13": "3FiwE4KczSQJqmtSLYoKPer7a1T1sKanCDHe6kevsizS1JaPLFfg3UgkmakaZ6UFHPwTmD5uSqWjjXRB1vYmC3yw",
  "key14": "4wFSwAZBkKGszBzEJ8PxVitqr5cWx9rDgV17xtMVwKRNrXw862kdQ1GGNMo6knjUYXFVnhxMSvu34ndDfYE2dLL8",
  "key15": "5euYNdXWBBgBGqs77tD3HLXTCqRzynXMfPfU6X2mjFLnuDauczU9oZtpg8CiKnFXVaLJfsHYXeCRP1axuC1FCib4",
  "key16": "4ng6eQazfKeZmtAoqfjpo255Nz18m4Rt9TdGZxDFBwyX8FjuBgYdgBtFhhsM6jdDrEtDcdJyecXPZtXK2PeamvFE",
  "key17": "3nvfVL4qRsWGFBbhbswn9Rj6xsDWCJydxZU3oWgcSiAY8bSt5vNwjTSBArgpsvA9h9j14qE7wNP2YFcpp6CgExgp",
  "key18": "BtCaacA4KMAcXzeG4s1jSVzRkxUK19JrhShmiZfXFHbvgmRTtFUQHTULCg59fzJerTeefDpV58s9g2La6ma6ynp",
  "key19": "4EyT5WSX8gKus4aYkU4oWnEG2pyrRXWCXngN2zSfWHLHSPocVcUDat2Dh46GpDRXnY8s2pMtZWp74XvFpQZhwrTj",
  "key20": "62Rw13oScwYjvvv4c7raJyo5XyYSWXZKQa2L4J3N76mNYpg8z5wRk9KFiRThKeQKpUqR1BABhzv8w2ThQXi94GAH",
  "key21": "3xLgtUyBTiGsNuf2uUsJMYGpEoTjYqMzHnjC6fbF8j4Yix6b32s7uMS1vCS1JYR2J8ix2X6pMJHvLBYYxjf2Adtz",
  "key22": "4Y1WT3REGUw8v3xy5ZJacYRQjNtbKUTeq4yxyKFRYW4X5tqNNBrQdDTLaccedE4F5ATAwHoDabpecCqmec6qVf5Y",
  "key23": "5aMqhKrKwmSfDr9ijXTXt4Wk6eyZ9AXGsnM2eX6T7qkFjsTaoVU1AfKeAFh5nHRsBj3PSEKxG6ry2p4JjwgtXFuf",
  "key24": "5c2m9s7mPciudhb9md7YyrYWT3GGb7t8x8AC7cdqfcKg1wYApZbHvmbZFJQ7hMt8Mig7xeTwDxQSR3coWFKjApv9",
  "key25": "3LWvEuYxZ4y4Z7dbRZXtLpNDFfMdSkDEG3yhc9nwSfRe8Ur5fohGoCsxNtZqdWQj6acyXu4gmv6YPwsJinP61vdd",
  "key26": "4LCD9jWErh4ZXU6KXUBnEVKQGwSW6zDXMN82c5mAwjL4yJCEuVQvZGtsYXLgF48jDwKBcXAPFiKi3CBaeJQTbbvr",
  "key27": "jTFUZwi2poAapj1djJUSkrGdGTmMjDFpVrNa8PDxd6aCnz9UVXAi2PRQuBQFTfE18ssgQpjFNXz9zF6KebEssqn",
  "key28": "5a3RRzgWVrNegmtDxrCNdJDEwgSzrB64i1LEebty1ZnZjedupMTuKD12M4dwh2Wr4k25nqeWkWj2EGXexGxTsqg2",
  "key29": "XZ59r7WAmvsM3hCkL5zfzLCiwomo7hc43wVADKz65C9c49Gvu3YkLmX2QA1yGGe9f5XFtixC71jiThu2KHJCFLW",
  "key30": "5o3xincmUm35ftSyxup3mcxwSoj5VDYFqH4BKJvA2JWf2RSs6iXkhPY2J3iXvQjizYBUbGxtW2to19KGTKAetDJC",
  "key31": "3KZtEWEZcY4tj9aoBTmzGxWTa3ftAczABMY6iUbZhZny9XRwHm3X6XkuE4uX5cfQaAyiC1VWeHJ3tEt9Py9wChg8",
  "key32": "SXhiuHpxz7zj7FFSJ6NwWXn2ned1RyRDq6j5oFQHTxfbFfPCN4CmeVZKf4ksGZTPJEcrZaannBw4b3npNZYeWyf",
  "key33": "23TAhKZhwnkPieCxrU6BuBZtSLecZnzerUAkJxTzdnExAdQLvaKBxGjtucLgqSr1bYrcDgkDG6BWZBNLEAcTWydL",
  "key34": "3iLVPFLrapNGtZXpFbcn8QiNpbbiXogyrU2V6CsArXVeMYPwx1D5i9CVxTA2dY8dp9yqagHVMSfay32eg5AutaM3",
  "key35": "XcbeZuDdyU6gcGuv7XAq5ov62UsQm7x3zdFfGQ9tSj1niiomRKnKe6tySzgdyobwEBQZQX5cbEuZJZjy7RhwZH3"
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
