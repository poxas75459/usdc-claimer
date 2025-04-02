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
    "bfLShH16y47izoEiRpRUqQfrXHvrpenx8te4jxfngXkoxdMBoFMtZhWCNESCZnSTkKt843vmESY8fuRUW9qaQWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qkPRXWiEAEDfjRufy24TWgE1oNJeME4cnF6KKTp5vTwKm2CS51j8pgfTXZqAZ8fNfq2ucbhZxKq9tDJ8tgWWR2",
  "key1": "5vNDCGkxK7cHx83PRCutaHBtm8JB6kbM3En5geCEhguHu1HWJ2kdBKQ9gooyfpQDfRx7LjxXy6oyt2EAgQrbqt7c",
  "key2": "4xVpxWY1mtLPSXfZZRD6Vd3Dtnnma39kY9n244kH3vjnga7NrPh7RvZtnzG7g6VHYSxZrDMgcDukdmVDjwV41b36",
  "key3": "2qHUDbzYsXbBriM2nzTkYanqrVnWU8eeApwKswzujb29ZTHaPzGDC4GfwDt55ez6JXoQPpw4GmG9V7AuXKYLzJJW",
  "key4": "LmKEfSB8TtF1XGKnshzLkDnbdq6B2TJePiupLrSRqC3aSur7g535g1QU6m1E7jRU23MbuWz2NHKx2kS5Ljcttmy",
  "key5": "4epjLfu4mjMEaAoAaGsPvjHbKspdEaW3b1QLGStsHYgBFc4P1qSqRqU1m4ZuKv2YzSsvzDNxQuQivoVWuiZkbybu",
  "key6": "pzcMv1AxTBweSnmXy71DfTYqS4NG3gma8tmGtj9sH454ZeNMaMABJmepLEZXBDVoJeuPxpUXnVAPiKzXrFtdSPh",
  "key7": "4Z3HKF4o9z9kDNMuLX8j6jXzGQPhcnpoB9XDkJcLcXZicoAyWPBqC8m3eNhv7UoRYtVCRLLfCTFpMnzzUhFJUpLY",
  "key8": "3wVjAR7W6F1T3KyJL9q2Ld7w5qKGZfJNyqiSAkfadjkspZaprprjDoqK2axyLUtwD4SggEtRKKyxZKeFEvBEvh9K",
  "key9": "XrKC52GiESyBPsV83PdbmeFXyoPBSiNRgTW4D4A9yGKBuMJSt4rzmqKoSnGeJn57AUfKmso8sTSUxw8W8rV3jmC",
  "key10": "2qtdkEYZmsububF8Z9jESm4L6g7nk7xDMTsz6mEYwnZva8K8zE9AjF6c4844f2VbjpnxGTzwKW1zgTN9aY98vhvn",
  "key11": "4G2UizGBuZx28nNanV6LQ3MQPAQE25SVoNpu14cRWTA4PLoVXnR7yWB8VYmzVt1pan8FH6VjqwxhDkmKMbm82n1x",
  "key12": "3K3Jy9wVeDrZFuoavYHZnHP5ayqhZr9bmMT3j4abK6CLAQct2BmJXxPPqrzBF632vaUcTuhFDBg9a2RZ8yqz7k4L",
  "key13": "ZpVsbr5BTWBVLz9PnUodr8pmZwtra4CyqKsGZtEWHMgNpbsDKZGS729ye5H7okE9DSvsysoaZLqETJENJc7Rs4y",
  "key14": "4vnnkRtsZcCPZ9HUYRMLtiXPC9mrptmNXdHejBNvtrqrpgQANamXcdQGvAfYBLyqms21WoJdGYHkbQYDgPwugS4V",
  "key15": "2A4eScEqYPGBoL25GcdqXHyr4W2E25xudaCktW4LRK8qoHm8ueks1BbA3vmfKFLjQdrWyhsE8LnFeyFxGrf46Pbr",
  "key16": "25Z8kqXMVKBd982R7a9KXTFUuZkMjfL6aWwuFXo4yoc9WK3j8hBF3f4j19jWY3j9LrhdjeLF1gcRMzZTTycueFH1",
  "key17": "4ctX29B6vNxHmJ1yudBKWg81J6UZfvPQm78EetsArTxtN2NDBgEuhMi284A9WFwKK49Fn3PbzfHaHoEtA9frwnyE",
  "key18": "3nc3s1TJMhe4PqHyFJ1R39Ma6WZnDY3Nsm78k9FkmJSREVaDo7MtacBboWjJN8vH5oFn4JJrot8v1hJ2WgKuXcjR",
  "key19": "2okJW2H1eV85hfTXvY4CEZvPbkJYVQxmtMGn9XXT787QWFMvVfHVaH5o2EggnR3zrTCtsZ37Jh6s8PZbEcSEFKHy",
  "key20": "2ocnfhu5QAPao5YkUUjs1dPwHpboFTBRZU6scAsesaCeKDS8renmbwyPWf9bdSY7HG5vdKp2kzgcWnoQiRLo74iv",
  "key21": "442zSkpUg4k84GZha4yuiDzu4tucJT4gEWvZECAVicdr1wHDP7QyAEDG3DgdToxX5cJoJsEXvJHnqiEwxXVKp4Sk",
  "key22": "3bkQDn4hQxuAb3htvgakqwUtbxxUy8W8oD6yZFhLehEaPd124j43ux76Jn65VYmDdEqErCtAaQTCXiL8ugdVidNM",
  "key23": "4QDwSLvsUzzW5iYxyGgie7qFFReeUbv89hhxXPeeG7rY4br5f31GuR5qyizWSsc9wNr3Bya5exaCJa6hjRV1iQEH",
  "key24": "5jazVNu62RpnxLvrssCqTdZc4BrSziETNmCM2wZ12AgSmF5oxWnYQRNAf9eqAXaRz9AGKvqKEB4Txb2UeTqzhLsr",
  "key25": "2K6bwjMWSiPvqb3JKPFrDzDcD6EJkqYgeQdzVt2ug9nHhVM4V94oupXoSyCLqn1AZ1Kd64A5Vu6ZMQNcyB8QQbEU",
  "key26": "5zyALsoQgpHDTKb5YPS1Z3CN9hdz4N1m6kQkHm8xWFfTKKXuMqytq4fwiXCVMHcpnS9CK4WHyDQbpZVqbWGdMxDH",
  "key27": "2F8gYeJ4sdN53j5Udf5J4GMnubuvRqdSgokcFyCn3fz5MwWLn8EgS8qYeXu7s5ZLbhfHggyFDiQp6nFXp3mrHUi",
  "key28": "5jXdfzy96Vvwi2h5eTh52GwKs8J7fK1M9syqZHh5J37HpMtZCCPVCWhJzzFhQzXQmKeGzN7sjbYJC42CtoG5PUDv",
  "key29": "izykKLTZYRMgTtMwUbUboUAr4y2jh8Lnhe2RDj9zsyDJDqtLmEtYSwUEKrTgU3LdLvCzCCFgChdzGzUiThyv6VX",
  "key30": "3xgp4i5wEFBWTenbyvh9vY1jFysVi3Xckk1T6e3SBPs2BsfhsjmMXUvf8H4mtrGYTqjAKCE1AbD5eFLNEgR9Vok9",
  "key31": "43NkS1GXdMW9NcR4qamufXE5jnycMqQ2DmMdqnkKjdt88nKnSSduQBsqvX1xqygNBVXz1idp4tuExwNGgU4AGwE1",
  "key32": "2cBifFYNMrUTRqvDnjGGaXtVe8wZxoY71BY7C8JgwMfqeMLPgwkdk7njW5XS7jH9kY8zg7DNNPtmFJvepREAPPC7",
  "key33": "47DFRRvWCnw85FN3sxcho5uLrnqzToW9pKSNNcVccQAXnuEtzZPQzsNtYSsiCqaoFYiXqdt5SU6XrSTaZEerifjF",
  "key34": "bLvDsJTM4YoRLe3rai8oxzs8Ts2p1PtN6B4K2fPj4zfJGjdafcdcSrAx2C4Av6EJfH1zpjdJeeWD92U6Ecw4ipk"
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
