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
    "2H8mgVPc2C3nRxN9foK9hfGg7zTryELMdLuVFNx7o2JtZXioL3xZsJF6rGkMDBQ8LpLiRkEXHKeXwCUttaiiHY2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nXndNu3SMEVVedZGDfKEhKTBYrVfbmc6ETAzu71DvQXkqoNis44dKwPkjwLapSk4nUAnC5Qt8F8SJ163aPBK9Rb",
  "key1": "5t96a71oRks8Kan9duboEjJMNekZ7e3YKhqctNoJagSJ34u7LYrirRRZhG1BnGWQe141dwmiSjd2JQHCqv5M3LhT",
  "key2": "4r51CNCDEcGKhJKGzxdrHCJZ1T6Y4sMpNmD9ESqjE8HJ8fGjpSZ2hnYeCE5fi9bgzoZWF7TQw3SxPPjmVqvMJDLu",
  "key3": "siFqRyxSaRj3LibArBLwhWTzWc1FaSsvGs9XrYT9qMPY8U6HEzhZpBdRJNYZ2FTcRoZcsf7QY9LSKjnqWz8znZz",
  "key4": "5xy5wgzRBLuk6raYgWzWhT7foF8yzYfeotnHyhbJGtazh6EF4aGtx9rpV1TBpmWFLFFbbYU1da394pqCdNgvv3wj",
  "key5": "4jeWLZzcHoSUVQkverbngR7ryiVXgW7zc8U8a6rgbX9Atvwe8oR1NVs9GPpDywSdMcHJu6fng48hJSXLx4p3eMZi",
  "key6": "4XTCFqPxnb96wV9bzTSrrZehRbHrnvckL5CDNixJv6a2iUiPzc3ds3w6pGCKV43nTLaXLgoxUi4dtFMTTJnQ6bfs",
  "key7": "43uJFYdF4z788i4C2zhm62CCRCBPp6h7N4ddYJU2YFV2EmJKZd7zQzkwEKUN3pp6YgBuhBR8Ps3MmT7ib4epM9xH",
  "key8": "Yk1VU2pYt44wALin12ttmeP4gRRpsdW98JWVsutvF9iZnznDXo2R2YvuZTkzLF1n2eZiPjSuGW54jaVXYPmEnPk",
  "key9": "5pZUazuy1XTn4AGZE8QwodJs2M7ZfLn9iuVgJCqxhN7pkJLKF6WsoaL8JR2ETXP7XMYKMaPtUA8AHp5fJ3Ztu6ST",
  "key10": "SCcKSznRS39p2MpWGiZA4i57TBUroTfbNknGALzCHVyVbJ44t37cqrbERN7yPXs2BBA3UomNouwocAeQk2oAqGp",
  "key11": "31H4Ha7RF2tKYW8mhEm5Kfw3WkhuptKd8xPR6oXLBDzzqmzf16Tkc7yaJX6jBNepkwAWQTycqSvWnipiSPHFL1b9",
  "key12": "5dDdbJyEH4wDGiogvFuxHGtsnWyAZmNaa9KPVZsQaA7szqVqsetFv1mtpDxC68BVoUKgwgRDryGfwbXkTCUADL6o",
  "key13": "5MzfUR8vxXWfzY5uT9gSiQFFekrUKSCoCaBSv27ons7oUx1aWXVuDLp9CrDVj11ZP5SWUDWnf27omRD7mEdLbVzA",
  "key14": "5P44Ut4vbJQJCDDi8hFL1ZymtvE4fdpdenzMJjqvtPQwDRRFLBeAj2vgM3SuUApNtDfmD3Z66ABdqEscyjTUhPAz",
  "key15": "5oru3eNoPhhccrQCD5xJEB7Sy1tMPGJArqHuxU3tLo9heSVgwnb3KzEef6Us3WLAw6oBCjZADmynk2En3PvWKS86",
  "key16": "3WUC1DkU698DqybZBgjmhoaYN687uDQBMENvjctvK5PavG6VXyaMAr2cypb5h7kWec3sovTw6z7uKQ1jDcbWceiS",
  "key17": "29GsWZZvVfjtxw2Dj7EhYCNKLNj5SnuQm7CAmE6rHfSoLahomCbPE8aiKCBkgnLH2kjFR1LLLoruYkkXfi4mh9fE",
  "key18": "4fmPvXv4SMkL4TmHYqhjfu54mnoMka2ur69kZpiC2RbX2HqvVE7z1q7eyQSAuNpsB6tpPu1jfeQ2EQPHK2dWh9nV",
  "key19": "3MoiY6PibyZDZ32Zb6cRKwRfN6WLgdrGnotSELzQ8MwhKPtYKG5xmkyFrSmHVJuc2bzg4KdVqp76jx5Wase9dBmM",
  "key20": "3Ja4UhQWPCa2TBPYgLd3qKwjf5eGbVPVoEegZsMqqAwpodGnE1PCeoF6jABuDE2U9PxaUiQy8e1Aj1LjWJ38DuJE",
  "key21": "Ppt7kCsXDKpuhbYe8Z7cLPY2znZZuNKa6TFC7ykCoau8DwYHbVLiC1CT6dCcqpf1AbmDaJbre9ram3yPjFLX3aV",
  "key22": "4bbfP7v3uHEXrx9cwcXq4ingKXThufGR8MmFBcfNWaAr6FvuyRuzqfnU2fDMvzZjdM2sBS6MtQYy87TiNe6tVaga",
  "key23": "66Gt51pcUv2Zr7d8K2xkKEy4x7c547zngcofC2GDVMZNdLtbYXod15K77Cc8rPYasdr19ujcLsqRL9UBnKs7GC1S",
  "key24": "3ErQxcbbDJGNfVo5GkJKUVrUXshphzZZDtYcTLMSSLJP9ToSHMHz9YaEYpdNTDzsAG8x7X7yJRnfRrVzSdwuB3gL",
  "key25": "2EcZEaerCyUgn28toFM8mPibBUzZfPwz28mUkdKmhVGJx92y4zm6p3RQ9iZZFjy5CvG59WrMA7Z1FMdbPtc9atmg",
  "key26": "35Epqn2Z2UYYd5vbEgycKHsNNFt6qV68Hwic7duJvf3chkxBKHcvWEMkRAh6PDAKW5VviGfuuHA4XaRuQph1QX6R",
  "key27": "4WVtXdb6UGq24abqNFXzKZMqc76zfHmiGZuyvN144VFNbYdDhxQSgeN3yQ3FnPH9BKkAA7NNni31YwGNg5dDSNaB",
  "key28": "ELSoJv7eGXsM87TqwgrdTggbpZhstBTQAencHNj8PgNfZsY6srnWPW4ttDFJkMgogpY6FzHwC1RBYunuzVStSAn",
  "key29": "2siYkPArWpnHJrT5rinSJj5uzWjRqgV4qz8UWHU4SjwBoc2ZJWdU7xFiMQxyX8DhQFYhznFEn6bLepCASFu7ejbJ",
  "key30": "3t3Bn7yHv2McjyLJYWcQB6khN1u2ZhfDTrcbk2F7ffiVzY8j8BSdW8UJUmJZHTeXxvJDiSoBGa5wpKBNk9q5vWzB",
  "key31": "2wYY1o8gVmnsCBAtxir4Pa1WzfiP2Vp2V67D6v1SFDm7gZS6DFyrgigkPJhDkS8cBjPeB9ScBXJUvTs1noKcX8Ds",
  "key32": "4tJxPSAy1hA61ygFJ6LJafAZuzdwS1MwFFAwpwgj6zinAVZz5tTEsqEXvwiJnZ3fVkZ2WSz5yuweYh3gdKeJe4ER",
  "key33": "522MpGoWyBPPWJCnkFTzcurfAsMZbW4RmvaDPN39E23o6pRk5EVE39YnDY3q26MzfAemRHxw27gvFUurNopevoFP",
  "key34": "2oAFaBPSSZHAwWckPnyBJCDMcc8GnnqkL5y7VbYpKrQ3m3LVtSirm5HVx4tU8AeATGgx64cEGY27KrxHLz2PPJ9x",
  "key35": "4yRypsk9V9kq9Ye2pMsemJYxXUnQ8XZ8AwNy9nvPZqNGXGKwkYh2a1hJVARdsMqTVLw6kKam2EwKcdqSSaRcsNDN",
  "key36": "39DRxzgEZJQfkXrFAN5sHm34zgKJuAhig2RnEKdhvwDefFZ39cLTSZZcGRkpEDYByMPTTWy344wFZts47jLbCrLm",
  "key37": "3PBeKkZTGzvQS7MYZ1sosNcJuBY7RQVXSMRL453B4NVTEaamN5Q5d6byH6VayBVW2Zr1M8Uowe89KVfJ5epmmfgV",
  "key38": "5h564XqW61XGfa4BuErjrsdFtaj19mBfcvBLeCXRSq9azw3qatwpTbgHAw5gMcSuDaS6KJB6z2hjJdQ2iYCFZVtz",
  "key39": "3Udsh4MYsbAUSCmheVrtqfDxmfdNeSYrC8qBQGhiBiqvhP8CbPjPYgHAiwH6pWX5DRJb7CiHhPLP9RJLK13XZQpE",
  "key40": "3CFU9e6S6FC5S8Af4UCqgEWsfyCSJgbupgfX8cgpwYkeK6RSTGACDGSafukMvWaN64mo1WhwfJwKy1i5XRWi9snq"
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
