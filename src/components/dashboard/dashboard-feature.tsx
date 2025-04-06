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
    "2GFRfmxmpwmNhTfEvqMqkFnpT5xkKamNq7wYkPRbKw4Ev4FoKJytj6EoFDg3BwiZ5mgxBX2fwybw2GUsyZ8UPZSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jfjo1YbrDdjuCADvc8S8z2G6R5hEbtoLQB8TzkQCFnRRNTYPRo3hLuofQdmndYy4ryF9f3HQWqp85TvtpBSrDqt",
  "key1": "r6YGmR9nMY5sGPToh21a1r6Ng4gi3uVfpfGWW7FDu7yR11q36q14tbPv3mBUGwzTGXArH4ZqXVHEg94p7TG4Jzd",
  "key2": "2NJLztLxkXGbripaPhQv1UvRgyQ13u5xLhs4wo29NTPkhEJMtpX1pDdYJThAu7w2o93hrvadzPwQN6LLxNE3stLw",
  "key3": "31kn2GTBeimgcDRD3XHrNehLgoMiGjZrZPhcbqwPVGPwMGGpaW2nZwbQVhEm5z6hcsUiivAT1ohKgcALvB99QZ1m",
  "key4": "HS94cJM1f9SDkZppAN2rmu3ZH45dfPGLyoDaqiJNKn673aJRBZG83SaSkSvLKkWVoSyLgJsJvRryYQ2mTdh9US6",
  "key5": "57UDYcAm7bKZamNXYiZA2RMuzU11HUAqetEQqfqVyLkJ5mzqmZqNYqGrs3yxuiqpuoUupwW2Tw389gzWwJyFypGT",
  "key6": "9XWxxVE7f32iVwqFyUjXN2d4RHR53ZsvCju5Zx7rFGaGFtkFeShe7NhDgWEXZpfMXdwG9PjfMZgKu3Q3dU2kdLr",
  "key7": "5stW1kx4P5PzYyy1tHcUtAG2MvWQZcyM2ySXDCnwqVb8ngKceW1fRfQAhA3QneeJWUYpcYUKN3Y3Qn4VJKbL3Lze",
  "key8": "2Rbybfzzk4NC6LcJaD7J2or7mPCx3k9UkcZN3orq3o1gL8BRe9Vs2bAPk4JkooRfBrjJAayG38bfvebgtgL11b2T",
  "key9": "38RMmAfxBkzfvtgDmjkes98YZ14rGHj2LM5ihQ3ouVKq3CYtTuUqSQ79SvyFkgKYLh3xj4r9HmN8WEXdthoqdJgn",
  "key10": "3733UJcCB4eSvqKZ1cD2vURLh4bQbeZ6RXKpxiFYb3Hn6oxo3nB3hiciPMAViGrqk2mZr8chdrHot4vJcUmZGf6z",
  "key11": "4LdUydsTtv6gu7nX6cPs3MQAH6sBwvSzuoXP9PLRt6MjyJjycQDo8gMEscNeF5wCUfAiEuc8poZ4ddzknsNZt6rX",
  "key12": "4t1DwHJ5aNhrePSidAvyAMSyYahixiE9dUxTfxq7XWomezQVBEYXn2mCANtramfCdXzNnikT3qHkRjpZbbB3qWsR",
  "key13": "z2W2X7AYywteNGRYUnwLaNsDZLwh1i9EVvGP3TBKSM7tNs8YALz4rKA15xWgGND3z4Uh73HbFQZv4ewhYtcdMUT",
  "key14": "3arTx7QZeqdUrA61u7yQM64RdeqbDrXCCZtW4fxNhsDbEjCHpprXTQE7o2i97kg8JrC86oQtRZ1qzpAvQnn1WV3y",
  "key15": "2kYwCxeZ7QhYW4UubD26HbaiCKzyxVhTP9HYNc6SpwsxDi1PgkA3uAxaVBLhTZN5jL4kr2cumi86WGEfNbDBXJ5J",
  "key16": "64HuFmSmDNYgFuULEpSU7Q3tU6zHCEjSQBkUpNHqZvjDcLxQ39zRB9RK6XkxQB3kyHvjdJE7prbd9yxoF6Y9NStH",
  "key17": "3BcthvbNMdM2ZMCWkmAEYYG5G8gjX2TSv2stHfGviiqMTUbPD6EbjvWTTQqXQqrFwVhYSYDuaWEoKTwf7teptbq4",
  "key18": "3GXAtabTEgdu99t6JwLvv7auozfXcdEPckCJgMkuBUtEB4uEYpdWG9A9oAFVLUwHDdDvXuYLqiSJaR66ync7j3D4",
  "key19": "3AhGnAtJHTCJHoDT7Zh48zZQNL3T33K1HakYqzMerhgx1XzcYKBk1sYddtc3ZCDQe4Ye9jihnBzmJFwUSQXYA3no",
  "key20": "sHtfiMuwkVRm4D1PCrgBjNNaVJhsHe6P81wfY62qSKqhXCrZuahyBh4jdQc4TobWSGNEAXjddkdqaXm9qJXhBye",
  "key21": "4ZQ2fFBQpHxB7DHtXJfDs9Ji9MohsqBvw2btUZLcdqBDRKLg3z9Cap71zDhVB1hFfxgvYjoD9zJCAheXTQoXJYCm",
  "key22": "3jsfKmJ2t4v3V9hJQQapic6CXQUiAy7zjisRKiiUbtD7RUjwKxxrAgkqXnmx2zNktDjaLdRbCcyq7nJDW6aBh9Wj",
  "key23": "387qodizfdrbTNuYz5ppeNfGG89YQBbfUFUgnjzByokVgqHLfgWETraJFiciVDNYWeAjRAwHQzBANamyoKfkojo4",
  "key24": "2qEhvkTZAs1FWBzFeKSE4iU98MUASSAoWUbCpK361TjBMUFigDMngbWfU5gmJ14pm5XVkxnikdXqkytNyoC7P5up",
  "key25": "3e8vJiq3xpQzVjFrL9QHyzehwoXMGCXDzPWQCWrVQzeR5TRQccUi39MNGnS16asebVZdprjpKPFGsvVDQaAhwA4g",
  "key26": "4KYtNh6z5BEeMhwZK8AF6ZvcooMAZEvzFhWP7G9sLhxCYPMowDZGdgHXbyXESotNrknyZrSCywgJ3U9YZnFrpzMV",
  "key27": "33LpNUy8LMPt9faGKWyJ1vXzfttwrch2d4BhZ7vcaEQLyZNryKPyVzFGGgpf8eDb4VhhuY9wviecNPK2mXwFJFqT",
  "key28": "4CiwpHcHrYC5YHQhzpF3VGtRrMNNxFGvLxJ11JFNKLyk3oJhJbsoLLPU6qwv8AryZcXGtxoABEdMgUKa1yNucDxk",
  "key29": "4pRFCPw2aLTUPQ6E51ZvkVZ7pd46saKFaFGrFjXyiaYRENJEzQtmiJfMJNTo8cxnVjUBn1VHtg9fUnLm127GAkex",
  "key30": "3zxAe71Y58SdZgrzn3gacvi4PjonXUdgHbJE5d2T478uxRyaiFr2dQePG81yGstZ17yfykHuq7N3NRp7kkJ5L74u",
  "key31": "5tD7tordUBgqQCJ27HpmdreNHZcaFiKjNSyuB3CEVYTQr5PdTu1wdaJaXXFYuYhTb9EHVZmmFsBXTuAn3VrJxdi9",
  "key32": "4Z8VyoA2cXMYeSeRYoy9MvAzKRFjJgPtyqzj76ergrbyrU4hMSSTVv8Sy7bonJxgWh4bnCJh7FLUwMRaBE4SLnGm",
  "key33": "ka29h4crxXvH4yH5NL3pY6LwceCeDci1TKmNV67SXjq66EJkpezV5nZifDqtD8eDSH65a8bfHsyps3ucTWsuN1e",
  "key34": "4cMCwKruaZQmXtGzo93mbchf3nsAjTueu4ccaTt4cC6zLYRrpkMQvBV6NXr2TzfHMrUa6MuBfRqyaY8Z162XEMjX",
  "key35": "4mxZokpBPXcXfZTUeiLYMmQyVTHxy6hPkahs7AtEpg9keLwbh3jsR4CZJgXP4YnyAjhMvGLSpfjXC9w1e1odULG5",
  "key36": "4dbtG15Nx2ieGy5PHTAcvCLVPuXq4e83NooU9nVxA8XRzckuir3oFyx2W5Ko1i1VTn89BsHmvkTfCGfkkHm7oy5Y"
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
