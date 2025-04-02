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
    "5WRMPEx2264Q5ZW8YF312A2Sh9qZjh7KjijLtFQReT9wUSkLmMdnh967HBY41Phqaj51HmS9sa6M9ZtEVnBR2wNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HUqcjiXdecydTgznNNgopVmQ9LNodkCwDmH2pX27NRV15GKmpaf6VWHCDkvtgL6uJNk3merVc1XS3HRPvrVPPJs",
  "key1": "Z7SFZVE78Duktwhpt8rSfiEsSmmkfg6Xey4vnDdK3HE9ksQT7MJ9fBU5QNiZU9EKNKfJQ9QTJjwGzooaYvMP6gT",
  "key2": "5Sy2itNw5D5mDYAjRmCBAx3U1Dm37k8HzA476KUQvWUYEs4zPTj3LAd5ob5hjV5yd3vq39keaFYsmmBCsU1KLiW9",
  "key3": "5gq6bLFeko9aQMzDSGAbg1EcfaqtbjczixA8h1iuQJL8Hq8s5hubR4GzDTVCq2deiiH4WThysvbkAETphXzGEGeA",
  "key4": "2bZCSLAo4nziQkknqfDiJFT7B5YfCWk1gVTi9W5t41kMqEKr3C9tjC5jzMfFtv5Aoha2QqmTYTUZtwTqg79baX14",
  "key5": "EG8LdjLUpGoPa52rLu9LXATzYDTLEeSDskobnSVxqdKzcj88UkkE4eZL5FDxw9LNg5okd4nKe5gye9nWM9WWUty",
  "key6": "3SmU82jqsu5G7zVGj5m8qvTHHmVpBkmKn9xYF2RbeEd7Zmb4aAHHLSNc5tuntyN4XZnPYm9hB83vdRSW5NaRTw9J",
  "key7": "2wPhLxtwSfKNQA3z9wSpYUH6YykcKG3VE5sMsnHeWbkJFJBZfXT63Bu9hAqYAV5x8hDqxXyopiTK3rBcQqwSsi4c",
  "key8": "5jQ1hFmL7uukapa6R6WUpTLiUXDM6YFVwZx8KKQvntyPsac83tWg9upGCD6SH1R3mmALRBaEKxA2m7Dxz5KfLXgF",
  "key9": "tiJmn97WioxWNrjCaoftWGZg2hHTtymVsxGvmEUri1ytQB8zxxUw64fFNudPAMCqCXgudRdij8AuMUkWXZ1zgay",
  "key10": "61iB4UYQZXdee9Ewo2A1Tdyr4j11Vj9FAzpRj6Ls3JYBWvj2L1JZS2NAfQuYE2dad493tbdfQ5LdDgqpxrDPAT1a",
  "key11": "5ybaoVx3RgRgV8X5itZerTz3S3C9yumnRE8UiAnYJSPoex26gBLTnqdasBVzjRWq7EKPFTMY9FE1RWBEhLp4Mij6",
  "key12": "1qE7Cj55htCAFPFPnwN85XCmEoAx2LS9GGxerZEJJChsJuiYf2cBNM3pXFJoBNg9H7uuV4gdNJSa7u42Tjtyy3Q",
  "key13": "4aRTv7Rgf1YWpCeXtZ2UbSeM4e4KUNQASjzcqw7aDwEC1nBEkTJjarEZpEX2PFcUGqag3VtzczcmwryovkqxXK3V",
  "key14": "4yuhQhEv4J1D4Lb3NuPnRXYt29Ji8NAPmt88V47NTnpqnQtgTio5YdiKDyJxjFnMDPs1XtuA77hyRAUERUay21bY",
  "key15": "5bfM2hvq2Kz2kKuat97BXo7P5dwQGv7PkyDe79SzidpQvsfZUgvzhnRjDvnWNyMs9Utk5C2UHQUSsT63HAFTDwey",
  "key16": "5HNcD9DaKUApwvkvNKV2g5TeEghUdM49ayQWXxBMTLLS47fjt4AekvGyg2eUmTSGQogrY7Gp9SS96edarHNSyj9n",
  "key17": "3s1WDR3YxzkEsmyUW72Jkj9F3PzHmt62cVfLUeseZM7unszgK7PzjytwT4wnZSTDXLi3xGVDBjRi6P5q4tyFx9Tv",
  "key18": "AzvKq2UqCbMCLNzPhjfrE4tn8FaJCr8xKBR7axsG5e4e8xR8AGywe2pFskgRK86unZg4asXTXqttYcMJmuc9Mse",
  "key19": "4jYwg25gvSiRxefHPU9izAXVrrkc6UBF33mwaAeZHkTQs6fZjqBNfsja6UvuPmBAQnpvtcTr7CLdWeK3Rwhns9HP",
  "key20": "9HuXnXurVXXr1fsQAC3o9qDYbFHQ1sPNnZUgdTFBqPFwbtUsdMXecvfdKPewUmjJmn9EaznanC5w9KdmbD4VGNF",
  "key21": "23FqLaiHPmeNkAbXwBedB2aeoeEgmuriz6ChM6YUmARRdHW9hn267DENG1mmnDFDdrn1DgvySRmVR8dhuDTpT8zj",
  "key22": "3RcRDYEJvr46b9TmXHHZ6SQVEAvmEozfkPDCR6EPn4FUURLVVFwPgm162XkiN3zUGJrYQoMPwqNDgeX3orLud22o",
  "key23": "3RVX4yiPp8DwHWh19KEL79mtfpaeQvJEUqhqGssYQxAs73EidSDQDMWDxuJAJp7tdYZrmqWXR94xLGt9uaseqmGR",
  "key24": "53BxYR7Y2ScS3cjLdGVBmtKtCzAH8NNA45KVcY3L3fJsSRU9C8o8xCY1tifU1mNHEyMqJZmcPpxtNWejiTrrZXNe",
  "key25": "2WD9bvpjazT9wKdxjPnanhUMiQj26JXc6ezgHTFdFnuvpBgokRduFgTJaXmqAu3H3XSgN2V7xCRC5dBA7i9SWLdA",
  "key26": "3y67iGvR7bz9G2uKVVuQVQQBfbcaWQqABMto2hFmShoiy5Yb8a4Hv9D5GytyubojyBJKtRo4jRCJ7UnBSQKLiqoT",
  "key27": "4hhq1fsdYrDLYcZp3dobKF7P2xeRLBNXzY4Tw6nVd9eAFgL6tP5DwPYiuo2kUx7yB4AZArZUZBxHrCTw6nkkgfTT",
  "key28": "2rNhBdWbijXoVwBjqh9qmF8U1h648eK31GDG8A3Couo8rH9Vy6BDMXUpj35VN5DYm89KG7bYjPFUv8Bwj2QoA4KC"
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
