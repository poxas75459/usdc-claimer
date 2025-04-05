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
    "2zDAXV6a3YQV8PR9yBmZ5t9Y6sT37u5TBunhdPpgMf6tEurQfhN3Hkwzfkd3UFVhWa5yzcQAuy3N7ZrLxqb4F95z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47oXurazrDkhikAnrThaFpnBQEbRgQ8bvKERQLo8ndN27paVUqbVkzw4aRQeuSPxFmFJ7BvR7JDWoXStzJMEYVVg",
  "key1": "3ymbr51sirSuf6Kd1b9rHB2jgTCusoeiXgtwLz9bQWRRNURgyvahoN1Nmdv6rHrZjb8LwEatsdjkqbbsdxv6Ccg3",
  "key2": "57cd5zMd1a4gYhZCLosbXx3AbuKWZraQ3ZQ1dBVw538g3dsJbTS3DrGjwou2xhbUyxXyiGEnUkDqPu7iCxGzBghF",
  "key3": "3heLaQRJTGiqFbF4Whjxo784ctpYzWWNGZ62v5GeWBq9k6CpC2eHafmsdE1cwme3aChfRASz4bNDzaVpwJGHUuMY",
  "key4": "5DXP3My1R5ecCQNwYYh1ydrrhNagRswTmr4QmN8BDiDkwNQUZADK7NAzdHRyxDdH9wwi1fPKcKHnqgrdNMdBr5bh",
  "key5": "4XbLDEZRUW8geQRWtGHbNB75yFcWS6ZXgRVoM5hFDa46k5JXKJAQPWXrBSoLhcqYnJH2fyY4FzhqtFbDUDp8T5Q7",
  "key6": "4oRHPKy7iVHcrE2Zb7MFaFrSQqqsxW7RTqBYjuLZYgrx4xTMoPXSrEjZu3WxpFAf2ebMdB6ZKHt7viRdSRSq4fYq",
  "key7": "4X1GKFRFWQ7BV8Vmx2BhQFWJ7JYfW3isix3C5JMn6cQVP26BNH4YW2Mbnjf1BUGNsmj2fYrqv4LnqWsuxYira2QG",
  "key8": "26QP6TkDdGYSrmfCt1hyUyVWrup8A8ciZ5XE31V7jvaWYhFRaXQdp2TS69qiJ3YizxYoH4Ci69RGHwz3C5NDctXy",
  "key9": "3jbeKzLCsHhxZYr6gMp6iYkKedow5NWcrxLaLzA9VBFB33k3Sj9kUza5bVriSNo4r5A3udsQJWoWZs97tnoxcRfo",
  "key10": "4644oJRThAk1y1AkukPKcBcxogGLLUgPysvcDAJ3awfLQJeZMSrgG1NhtkQ3u8a5qqnApoLS3WjKx2tEogKPVVLx",
  "key11": "jCooDjWY7B73DCLWLfcocsDFDShSt1KdYTq8QbVVh9HEHAEzu7YsZfiZWirD1ZNUDxDkr95cTzShxtDF8LpH6ur",
  "key12": "2YwqhZcB8VwmESscAaHcbRNpWGVoi9CDpEo3YVEdRwYoof36RuF2ZS5jxNrsHMCKoBV6q3fPmVcDmYDo48K6bFCw",
  "key13": "4tF8LARsV2JGdX66Y73MJ5XZY6pcZpkDSN1oNM8QX3pE3NRJXSsVDDferBsxhyYgyQJJ7gJD4Dj8J4PYCHp9YRwW",
  "key14": "39dHzZf91Sy9e7RBn3NnHXmFDwuPGLuDDYUrD58KuJRbcCME2KTiZjMhBdd8LTobVJe1LcBFZ8S7EyfvnJD4pNdA",
  "key15": "UGj4op9kwwxo2W1LeX71rfomQFwhp51VtS8F3Ynj3h4CFQUhSHui91qp2VyDXBY7g9DT9QPu7JsB5EAeqTTHfEf",
  "key16": "2aJd1g2Kt5xt44jWrrZqxVWJrew9ZJujsnNKTduAWnTzLBaEyLaFLwdEYiDu1fuVgojmxqMa53m4CMfSpb8NUYFV",
  "key17": "66u3F8zyRpSQBNp9kZHPU3ZDKKcaZn41ZiuRauN9umStw9zW3E7zfDgYyT8LNz7kqTDY1iVaBiGiAjpzrgG8jTGh",
  "key18": "o2DYzmZFrx89oimzbPUU21iufDR4erGC4DNFPWGRanmRrdwzQjtWyHsYUkuBNn6Y8R73FEV9St1qwXUfX9G37DE",
  "key19": "5Zp3h4NGazrPYppoofXprMLTRER5hucq1a39z4jNqSy8qPHGsp7z9atxnb3AkX8nHKy7HTrQz8epkK9DjtpziQcj",
  "key20": "teX9wGgdCnSiLKEUz31i9XoyNoU5EZ5doAi4AWkqApQ8sCzDnTowVpVRaYfVcbReKZankaVGS7y5YS93ZwiycmW",
  "key21": "2DCnVUfRtDCFC3X2M2U41HfX4bS9ESfDZxX71T3XEr2Voc1c87nPYXG7nAUHor2Z7CrD6GwfRBkgjTy3fzv5fSTH",
  "key22": "3abFgNLrvQj6HeswLWX7UEPwu7ZyRaVQ47aEmcVRGmuk3qspMjBkmPuB3fH7BBDjYukMWvX7dHjdedcqYhjUUBGY",
  "key23": "4GYbqQpQBB3Zrs9EkAkMqAMXZXj47aEQrUNnPiLGeH6bghfk5FjLYjENrH8J2z6h8m5M5NVhzYhMsyRFSzoDwhB8",
  "key24": "5DsNLFzPo1KvcDN9UW9Xbk15TYwt48LdspVCyQz8WMB6JbN5uGZftuERRfkjDqAV74zyem4ED9T5X4Cqcffn3t6H",
  "key25": "3MwVTFPRGzBV3BZV3RghGuEaUY31b8xrGvnh9NuVdhJoJrEWRrENubXibzoX3GQC48KsQfTEkUX4Qr9QhHbXCZ2f"
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
