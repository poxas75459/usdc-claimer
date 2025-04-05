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
    "rZq3iBW3CxAsxJfjQ8z3CBYKEjAKLDj1GRzgPoQXUUbgPm8YYePjxmGDjsQAJ4W6bfeYZo6Evr66K8PcYECkxyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CK1SXgSBWbCC9EwMNQQackRVyqW6nudw133WbbVVv4PD2qfk2967jb8VgVWE7ca58KDRSjjHFenHTgvmfb1U4Zt",
  "key1": "579vi43cRrKGqLJ38dCsGc5diBLmoB2q9XtD6oZV4DcgMDaHmbvkN54bmQZSCET8iFua8R7WG986G6mLrK3F5EUB",
  "key2": "6378uFukmqPPALmqcSJK98ykcuGpU97qvysKWZFaAMcRmGzGE2SeVhzpqajrYcVFVptsU4ux2TeMW5PnERjtwdP7",
  "key3": "3qnbEAGbhktfiY2htKPdVAbsdqoXZVaYXVQNerb6QJS3TDbA2YibUo7pCq9tCfKm5L97Aay9eJFbgZvuXqrtcQDR",
  "key4": "kCmdCUPUEw5QbD38yy16bA23zosUAonKb2TeVhj3AjyvMy1A1rbRKceJCaszvABdm6FbUnLkJU9Fg1Rg4q8tow3",
  "key5": "5UFeAEcDzLNBtHTKrqMovaUVu6K5MBvNeqwtoDxBSFQeTt7PG7rZEwoXwhTZiQE5WDQWMrdTxaNGwURQ8r2BpDJG",
  "key6": "25WFJJGHuxwhAHx6kq6g4mnRCHcU1SeyJqFamBLz29m9nNEHMVEKmCNogtkUtKU7pE3BNJATTD968w81vEEjPtoZ",
  "key7": "3HWyeZx4NwgWpHww3B8s9Cfpx9jEuTMf2jVfJJPUkjA2Ey2cxHrWAotUoKqTw3KF4tmwWsbLx2KSPSVMur3CWrGy",
  "key8": "3EkNgoUQXNN6A7V6WNEM9p1NuzbsKyXg4wth1MeUhcgUWYWnbc6eJ3xCTJvXJ6WL5F1J4XkVjqPuKYnSmCGPd8Hh",
  "key9": "3mYHbn7LnGasCym9CF38gt8hyceYt4TvS3fTEFTgSCSNQmoRUAWHKeYeeDiEC8gtUUhK4QCph4Ti5TmcqhEJkFAu",
  "key10": "62fiMQUKma2AQLjz877Qthz4pATxGFykafHx9MT1FrAR92aZSpXeadSVyCncvBeRUG8igcD9sKyympSg7SgxX3Qq",
  "key11": "4Vy4kq2c16Qot7A9xhJxpsgaYc8zKaCiYH6fxvcBJLXgMqyuMGbcVwTLtnQTend2BY7G4eGU7d93P7pcEsGgNtCc",
  "key12": "4euxg9u6icwmyE6SQ2S5bzFJ1Jpu4xMuNbbHSjc5iERCWTRDdKHFeKSpjghzN9WBu4N8dehvBRixavZPUJsmLK4e",
  "key13": "3ECYbuZWQafBHEoF9LH4awrfX3YUQk6vpGjraY6VTn1tCuatek88pAd6nUQB13a3zDKUysGynZMpnMyreswWE5GL",
  "key14": "582s5efn1e5fMa6gtxc96rFDScKwEc6pWqrzNM17vsNqRN3AsvT54dSyEZ1cKBPGuxM7miGmWshCj7uWjkmbtd7a",
  "key15": "34EGgKimMK6AHPshoDrJPDMDoesEysb8cfoTQoVQ9sy6otFAfqpEe28R4r99LcKRwNE6AUh12oJrYgRUBSyGid41",
  "key16": "3VKERe9qGBtFD5bqdeNv3RCKopKaZdNvaNSbKBtNY4tBUuKw9Wm465pP7DmTtBvTkQW2G2NkwrxKYZb3muad9d9L",
  "key17": "65QsUjo1zu5o6ocUfP6afuGicNrJp1NFb8q23RPnwyooBgZBwYjKKB9fivfDDmwvZ4anonmqfv7nREwMZaumXg7W",
  "key18": "3gfYJsJrdek6NsmMWwCdgYq6jVt7n91JP7rFqZD2ANDmGMHHmeYv9S3T3BLtGF9PFZv5bjfcvuq53DKbX3Dqy81",
  "key19": "3zEBSEzbVe4opSGgg9ycv2PTqfy3D8fdM3pmUDN3MmFcoebuNfiD9JnLFsWykwdkDk3Bh6feitjaXB2sMnDt8GUW",
  "key20": "574Acx29FNBdCJHusWTtvmEkuVLPpnY21mW8zF5TLhTTWJ6Z6tPBZmgosJQ2cHg4YtvTEaZUhM9ij13sek5ENqps",
  "key21": "3vLieeL2eDUfBLb7kHKXyrN5de4YHCjJptWTfB3JJGemADGfaWFeYfhTK8pie7nSavAjFrcTkE6inNhZexUteffi",
  "key22": "2hK7sQw8Z563Fg1c79xE64CfA21vaucMNpAidMaUYoDHgXQEJbHRjsi6G5cyu1ezesy6zXWb2pwsMMwyMGxKucXi",
  "key23": "22zScqsfPgaoNspQ8BWiYE5B6CwUTKNb5vbSvoUXxTmKb7jyLDf1nB9yyAyj1diJjGBfLYkNqY5DJ7E9kQ3jZT9Q",
  "key24": "4VsZfntdjmCtbSeg2p2XMgmxkvo59sHwKrvLCSn346igj58QEawd51ubhetyELXJ75JcHJJBGjnB6ik5aidtzw6M",
  "key25": "A1mTfXhxjLN8X9rwhwmomzVWDWkxT5Z5ZtHm9qhPinFjimBHMS7uju57CXrrzw6WHWMM9aETHkPcKsDWsaD31h4",
  "key26": "sRjd51BFQZEVabirU8Do6XyrnSmPWvtv4gKCAnEBB3DWUBV1TeuybbL6VtHBAH1tFLbTRXgzKMBBx73AtSW3XwU",
  "key27": "3bNDyc9pop9m1Y2jPqVVET1i4QH7EZUSEqzJ6RCC2RhbJMt7Ap24BcX82vQcjVBFm54H7YfpKh5Kv8sL2zzYbMxA",
  "key28": "21WXo6ShDmqcXhSSSjck5ZwDBLob8ZBXWT7FQZ2JNqGXod5cmeThH5HEHUscFdQ1DasE9v4UpnC6apsFRcdR7i7q",
  "key29": "ZiWhEyMrvowBjkPFA5h3H6Wowgj6KNgg2E3bsGUHgRT7tgfDZmgvCcGUHYSAwEctet54FTtXbqhTZ93f7sYAMVZ",
  "key30": "3FCjjC8mp9vANsunfATQ1WsZ9CwCrMxV35kWAJzGnh8igjNcCA6MxD6aA89Ykwuorc9yCxj7D4418eq7kgb2p5o7",
  "key31": "5QErj41uVhxHCHwgs8k6mbeWN1WvKicZ8LPK4rTozQKQMoN413AAb9G7fbJwpW38iahQge5Kj3hME7PYVSwsqW4R"
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
