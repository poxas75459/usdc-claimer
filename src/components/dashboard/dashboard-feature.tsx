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
    "xwo1pUVcB1ZtcfEn8GQ2cYzGRmRjgtcoEWbq9Ub169mjTKSfKrQ86aQHub3ZRPmLjiwQm7F1STyDn4kdorRHq4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RyCbmr2VvekdXRz73MxqduyawzRLLt1oG25eUgsP8yaktSrmi8QARrXiK6RrbWDN6j1wytswcGh9vrGUGpLtiAa",
  "key1": "8mbfi44tixCCpPLA5sB2hpTAKv74an9ujGfpVALg3H9V64MnzECevfG57h1spBZgE1FSrLHafmBiTYmrxQe74y5",
  "key2": "5iXZfmrVDoZSdrdyxDgbdWnef2HLqmu5V6qfDiqqgPUS9yhaMtFe5RReYRa5Yz8uGFaouJSfjAgz4PnBPmQteVeu",
  "key3": "4MNRXK1CpkkfSFFtNYWMAMTHGcQaATV9anmXW9w5mE4qWJDdTJWhP37aqF6ffTty5WxB8vChbvRh9y5QCCHmXdTE",
  "key4": "5EkM4HfvVqLXuGwe9pLnSs8sPHEUWANb7UYyfov3WBwVCxVgS86d2HrwU3dviMHMgzWeExaKq3s6FeJhgYJXdqoF",
  "key5": "Ebo7kDN1U8pzVNCqWMAwvNjSvWDtKYn7sDGr8t4ZgUtbCk3eSbfA6tD7eFh3vEz5mLQti65Hixk6BsWbBs4YYey",
  "key6": "63s4kYHhbx3o4Nm1cGs2gi3bEyf4cVSGsNV5cXzpTZviRPdv5JKS31J4z3ysNDuvGNLvcpDKJfTCVvzMW7cRJJCC",
  "key7": "4tiTryJRm8BQcaLMWFKR39XZZRdbBkD8doFnsepQqF6wJbUDD46DVk2zkY6ZK1AwnQXuke6SfubWwCLkrQyB5JS2",
  "key8": "4ftAZY4dztxdncDFw61FdvCRQgiziw3j1b2xoj2USo3Q6yx8MMLSHmxu7h1cS1rdd6q5NPfPH1pyDK3vXFauAAMw",
  "key9": "24LgXS3seWi1z9LYTGbEo9h2PnHSDoLRBGuA3KyyCF2PeXKkgXikYrcWTExhnuQQT6Htj7qGntifn9xGa5VRhyoL",
  "key10": "4hVVAAdxiBmJDVQ2NtaLK1cKVRHkdKX3hRhPmuU2ChdTV4E3kbq47h6L18jBqB2PcXnXYKY6AsKWtcbrGh6v3wRd",
  "key11": "4m5gkEHoPdsaiJAi57YKVLhnGKZ4DbSiirVSR9a7KwiM3hKuTTWmJQLZKkXviugRKnY34QyLc1MxwpR3kNEXbQ9W",
  "key12": "23k9Y395HoQv7NbSdschjMYA6vXD9QtfeBptrcdS3M6P8gJTVpndk8N4m9CrKYuprkzjaNxjFoBLgUNJMPMy8Jbk",
  "key13": "zBjhH33fy67UozypLR9az1NgRsS4yVLXzpxqtPsCMgeW6ZZnr6ajacReE3kg4HEeiKcHDhqC5ad9EpuHGWxbuUC",
  "key14": "bxVq9jVFp9BXnQAEKft69Svx38ycGvJwcZnfHCzSgma1CtdcERiETPn3YHzDYAPZeP3bG5opg4AbxHLwyquXVvW",
  "key15": "3vVf1ckcmLTkrXRTiMo9twiQ9SHMUtB7dos1VMoRzYzrXNMqJJXe9wcujqJQRFZuWacfmZmhZUHb1mNuyt6GQN2N",
  "key16": "29SXozvdL4cA6J52ExjTQhsGDLUQ7PTp3pS6axUU9XiW6mLbXZuE3aQz8jDL7ySaBk2qMTVsABdsoe8fJcSuPYwV",
  "key17": "3skhZUGvjeatFdkd13P6AAKXeHDRyFtqwQeAJ9zHkpndaPZtm847DohtyRS1HbPT4R9QnXAmV4rva9pKprnqVuCw",
  "key18": "qNgsYHAGqg9aeez9VWonnhTY28wM8Cmq5gauRKxmCAVq2BXZ9quu32iGWxkwjZ3rkZfR4yefPoaTohMFy3tnync",
  "key19": "2SV7aYrQtYooDJ7tZZQJPohuqbwMjPf3TgMRexo5uBQb4H6xcDsfTPstiTE88DTvJU7k2Jj3MXSs1tuEgxczNZge",
  "key20": "4sS222BUiPbtXuUZp6sLrHwbh5epUqxZMJefMXpuZNDk76cXe8jfvvhx5F6hELPhzvanJS8nfn7MiySHovqE38JQ",
  "key21": "2m2JKWsgFVGD1tkPrRycEXEstqDjDR8cak3YYQ2iExrVTDcJ3AYkwa86tzbMEsTnqL5hWtBvPL57yK4jNPa1pnmY",
  "key22": "5SF6Z4a3VuuLQwXHnfquRsQhByLTknFxP9juoD6vrTHY2e3AGTHQofB8kTse2mw2nHcuqdyRSgHXK5X3uY336rss",
  "key23": "3arUoc1cwuTG11ar4JvvE6voAgvgudLhvYKyTZY89sT8KUfVGcsS4PijJejEu1KGw4v5fkMRqyfaJpNEbf94xvdr",
  "key24": "4LE4uK3mc8g2Zgp6ZnzJLwBa3DHM6d2nog6JxKtSBeJMn8Y4xP5VFqKjfg7HMcUxMBJ2E34uWTCXAUfUC6azg8SQ",
  "key25": "3N3Mq1e1Bf3cVVFdHKG6znHRCZutSFiuqQ343BEBeSYEdNxx5C2w5e5JoVgUeMjvvLN1SWat5RBn8wZV9YRgTJ8t",
  "key26": "5GjFbgADqJxGidRHtuYyPMJJYjVFxuezuBTo79DByaY1iyAqhMDr4EzGN8DPTp8282sWnauVpVSm9rDM2XNWfx1k",
  "key27": "5Hbd8o48eRWKDfjo6z1Tf15eHzbuZ5zady11stKkJZ6Kf6G61JWbec8VwKGNSwB3XELSezvKFLE1TwmHoAPDLtpk",
  "key28": "4BjzKqjLL4iZKxZHvkw8dUMBhr4oXnEZmGq1e5bn45aKcJEVdGk4LDGZeQfmFAMx1DEhz3kksgLVeMSrBNqLouwt",
  "key29": "3TJXbTgzZwz9n9hd28dTiHiXgm3gNh5aFUHtaNz9HtmvcteQApEDNGNeUqvoRJYeXyZobkW32TRGjGyyTpbT5Qo5",
  "key30": "3JL2B1LM8zsvXEzjQknd8mKyVxmwxU5ZhYJoPH5snZE8pSC127KYPbZPmS57X3AinuqWdZPmM5TtzAD22LuALFoe"
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
