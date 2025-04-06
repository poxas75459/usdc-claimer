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
    "36U2tPwP8F7VS6eDP7QSg3GVboRdwfgK1RReUp21VgfQBKhsQs68JsLE9xE3VAVZsHyNAiaKjCytNACyVQeNkmCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37vKQqycRezYjLk7GRZeirwwquLPvtVqfNrrF344kjgqbuDcFUvn1bNY66V24g5hCnoTouL6SipiR38rogBcqYGB",
  "key1": "2pRqhF5Qcm1bGc89HtzLZWTnHxJVyScRjvHxzkA416TJLcKq3gYKHivMrixJMi1zCoBEn4jxsh5LSjuMMCPynXZU",
  "key2": "2mhdcL4xVXm9ivvCJXfbe8eRJJARwpj9HcvDEkUsbk6q9U9tL9M59wrXbTYU3LaEEPniSMTqubh55tHrjWa2DS9V",
  "key3": "yQ7ATXPaTgTgYN6yeTfEoJ8xUATwMbJyryyAJaihAaazm4x6s9kRCahEunqnE1vtz1QJeZCfd8i1YytMTDxpczX",
  "key4": "46JnehqCzJwHLueVojee4Ng4gwMe6iDVsn8Cprczt6MQn9HNqt7Qbemg5RqP5nD1P9KJWaDUSa8h116PAS6QUN2d",
  "key5": "18gUmTaLSAFHjHN6boGCBDCARnXuXgUReHbDCLmCbYcnuhkNBxkTDW8N9H3EKvEHyVjz9iHMDmGVXBQsZH3BuS9",
  "key6": "4wD49FUTgcNr3eyS6HqMRFsqLy7Az1tpAiFJ6xVaXUJCV8nuszP9foTEHoR7mr1JcgLj4QQ1DrJZDE2MPhkEuWUH",
  "key7": "3w8WVJ6B9a4ZRm1KpFeKHhZvDB8zhJKcXy9zvD58JSvWiF3sLKZdALaYpQdPX7nJSpVdmFGFJEHJ8PzCkoZmnL3t",
  "key8": "3XzLaBMQBQ86nYWQg8Xn4vqRmJAvH2tCyEQ1FmnJ4hcuDE7HnT3fHdrgH3JE4MvofWtB4UtkuE1n45hjQV97xcjN",
  "key9": "YTtPmzaUuT7qVAwEwvLzTdNYb32B8zd6bNRvnNuV4pnP8e42QvbQFiTtEpLTEh7ZVjqMf2j3Ym5WQdo6cVU4ZvV",
  "key10": "3XkEDfo2wbwAokxsCQtjQVSDA43QEdCAqLb9rXhBLjJKLEJZYyPiDE8d1Urp1g7e1LW5SVNZEuPs5T8r42dx8U2o",
  "key11": "3dXw1e3cFmYn8o4BtkdNTtcwMJBdGCvAE92sn3rCwjHFG74cePDojeiecw74HPcWFW9v4AhzGS3Rfdot7AMa6frX",
  "key12": "2UKzMCjJUk2RvtyVLcxSBRCHqih7nsYT5Phtvo7cFEZPb1WUeDS4zTJMFrxiGL5Z4weLssiVktzHbXpr8kHAV4Qt",
  "key13": "2wyyRvH53Qm6UWCGAo5wQ4niRsrMZ8T2eNis7KaTa4DyCt4vyY8xGaS7W7tMtLV6SXttGwQvghhpDCC5iPee83SE",
  "key14": "jCjRJbmvD5WpjNmv8TVTAm58DdgAyNzBx4xquW2p8mY8e2oR5Cgi918jPK6xdhh5L931EATL6FfxSVtWFvRYwAT",
  "key15": "2QtZwxEEYHB7RUzskH5eRTkRdLqt6aXRaRG1ESZM3METPiim5NBYZaY9HJucWAkCEbrz9wR9v1shmTe292zMJtQ6",
  "key16": "y3vqrJG43voUcV6Y8Fc9xKLWLYj4yvTCV7uZKS3MzP14VUbgmGDHQzgYy5Xc832XW4euoDeu9TKaGDy2LeDYigS",
  "key17": "3gtyhXf6B1bmzswyYdLEnSA7ScmM1zacY2UXv5wJkniBMcosfGsW2JLAEapJpyQdaZqZL7gFBLhAUekwvEshudns",
  "key18": "4Kohg3BhYF1tcRzC31ByRxZN2zATtTSgRp7qtqBkXuw967WBqjExyyry94NMXkrLKMsnPJLKHwjEMuRx4UFv7hEx",
  "key19": "E1uUoauE53GPJd2y34RgpCgxzU1EcSGo6HC7Cydoh9tCMdMvxiXFygoSZgK18fn7eMUswwXhW24intx1LCtaEYd",
  "key20": "fMYyY8RRrHK88C9H4cPAGQfc1C8FVQ2J2NbZBXGjVcDBsKkzWWh1RH7ZCVDqiDoPsssU86tgyhEDaJ8Z2HEynu6",
  "key21": "3RHAe5wrwAVJ5iacG3ksdsmPXrc9kjSk5u1hAkWErR3hBH6JLxkZw9cb2QgJju9dXvdcBLcR2QmWcamhBMe2sSR9",
  "key22": "4XWpS38YJjzejfaXbrTfdf9GkA2SRsKBD1WaRMtm3Vk4TkW4mjxRqK1CEaDMxJpExtHSUjYHfeskMwztgc91hHis",
  "key23": "hK8Xw9X1JNyqUaysCDcfoSCofJ49uidwS41Ej2PzFfyAsnyhWTa7C95csXyvCQDsLQLGWWUDq7dRYBrL16VbsAN",
  "key24": "w4zoWiHLkGwrSMcboSyZGMy7ExmQbCtYGdaLgtjuKRNhgUruFwmG2ueED7yUgZhzTNRJHQKuT74n3qFWoAg5tu3",
  "key25": "3rmaEAavy9QSayJkt7E6sKuYc9YEMEDGeSsWkpainon3ChcwTNBwicEKZjCVjNxJLg2Sja2LXFx7B3Ma4wbvw4Vu",
  "key26": "4Y4gEkXRu28PC8d6Ay16AJ6LNdKfLowyYStvTsHYCBY4aobukriicKaZs8pbwB1kZXuvpFWCoDX6RxAKr74zLuse",
  "key27": "2v8Whip6DG2hJVeZEw5D5nvgJn9groDWZMJWFjctDNcSsaAwwqj1CqCfSis5TKwFm6CUs8DuZSGxcEk7gfpyUA7f",
  "key28": "3VAyRWyjH1Zzbk8nDKqcBWsFFVVrEbU1bLkABKgXfJjdkXsnK8KUK16CWaPfJd2Yf277UYCS3T8dzNdK2iVeMny2",
  "key29": "534uKc6kDgK1ycmjKx1KxZoD4wF5aSZddcyRqsYc68CJ3SbptS1ya2nzM7Axw9mCH3iPgiGZ2po4fPbESPL4DYed",
  "key30": "2sB4cQYne3MEyY2PneMdoPwMo9W7cgNgmfjzgLa522vLqp5J2B4dGSBJLNv1j3eB5SVdSZcdtWxFZx5vtbuVMGMg",
  "key31": "3qWfWKy1P2YUWKt9TpsYWpryjdKfNWdZZyuV2Kv3m4ph9EtQcQZZgiCoodGTun2oAG492dAgM67hhTRhZixhStfE",
  "key32": "66KCF9msKgia2TbHVYyUFTEowQUhwR44qqbCaQaPeP7rfH3Lox9mYJjX33WAYmod2pu3tBWKcqgtFjzJmbRRyKbw",
  "key33": "35UgtCH9t5sb3phFqZdAoyyWnXALubcdmgdeMkoVkDCM52XAjiq6TjdYPzQFDTBBF7YhS9dQEaL42jvxeddWbMqc",
  "key34": "2yfTfDK2BUgQPXehoLFiBjqximK7KXDoth9yVWndXWntvTbETMxf22w9ZA73WL3Ts8F7XzM1xe5o8NMTHV6iFzXp"
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
