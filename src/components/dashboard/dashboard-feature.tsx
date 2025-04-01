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
    "4n1QfydfbMe5kMaJSxgdTGjmy9JMDPr2re9tQhD7g9EJZZNiMGH9BUTUWum8xzzisFzUApSaCpPw31ARtB2Yf3Sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AERDn2ewyL76EJ9hZnwMcNJNn76xXE6SNC97NwZBHztkYe3jYCdawT9dscTNoduiXN6JeS6b5suCxUJYaREMSov",
  "key1": "4gAdNNvagghV2qVBxDy3PvaxxBgj31QEj9CkbH7eN9dVJSM5uC1CiGwFPe5gNZHSqPfE7qe5uhPTbMhexF73Xkmp",
  "key2": "SB1AsNm43tSLbCad7uNxYyf4o43qZ8jfcVGTT4GERRo4bdDXCuZWgGCBYgqcccLrKotr31MkkrtGLb74H7TiVwG",
  "key3": "3DFZ7u9VQrMGaA9VSNUNyERb3QKud7WGjvUpFHoi5kd7kRHCoggtVSA2YPd7DUyHKBn3ZyB4KKjRNMcDTiRpaqy4",
  "key4": "QX6tX5jP187qkBJ3sm2Nmu9UQhjy5X8gTUuRUpw4PcCANCKftAdcm7VLp4vNdYks7CGoHupi4mZdUmQerT25PW3",
  "key5": "UobBUmukbjy2Cifdkxe5DayQw1oM1B4B1FEWFzX6L7ZYyzi6h4UH8Khah3w5nEw4YwgpeFfja1uKrErn1ZwYyF2",
  "key6": "5MotrQm985MTLoeeNNfvdM6dxGNswm9P33ddJtCYoCmeukcu1ETZQES9X3DWzmsXn9Ut7FinqfPwvDxzAk5Vna5L",
  "key7": "3nJrBGiz8UywmJfFXLzTRHSzMRecfo87mEyVQUHu2C87iV7dMZSVWrC7Lewz9cejvAyphCD2KYCxWEq6Sg6vi8GA",
  "key8": "58ZbapkqVmAJc2rsJcNSe3QHZowVs8xcBbnucPcARJxQhe74fQXMBUcanLwTaFnhrR5jG58Bk9BU1yEgLMUwKivv",
  "key9": "3do7XdUQoEBbMxNY3b8bwYKKP47z8UHxpcvytLWPZ27UJjAHAW8eDbrnqQRtcNPNke3JdvxU15yh1FmfASBEL8v3",
  "key10": "5ZNGxng5VZn1ubDwc4HDYNizBF585ZDp5kUH5dKdWFKpEaa2E6CFxXLnTDD23w8DbafF1XBYEDgFgeBuzdDhcy6o",
  "key11": "5N57vxFpCyd47K6RNTTKdnUU9FkSi3Gbcs9whfaWDYPSmqHtjGYSb1iRdmt99WfV3Y3MmXJp5wJb47d5d5X8NLdg",
  "key12": "isTw4ack4ytV1vuwWTkC51md1AQBvTWVkmyiaiw9z2wdpX46KbinkAR41h1wokRq6ai88eDfAyfkrCQuV5bvQJt",
  "key13": "4qkfERQ6CvU7fsU2NDZjtDjVXdAuVqZkQcVxRGUjmjt3WAVqBiXjrqkHLGhBA99JeS9yqKMY6jiNgjn6cJLKfTBa",
  "key14": "4VTXZ4cYjRuqe54TvnFJYRDg72hfGbAY4rbTCvm6yZpPTSKsascQN2EfaYhuJ5WYxwWj1WS9NubLQY1Mm7Zv28q7",
  "key15": "2a88fFiKMkRvFCmTHmk2qPT4oG8HPqHNmAXb5U65WHf5PPHdhxtZHoKJGmHJLypCy4BhjCxwVXhpkAbTqkMnE7gT",
  "key16": "5DqGsJTxKxKcE4DvwVNJgeVemAqJbY17dYFLAGi7PNgFmdfVVkPEUtedtAxiWfX6mPzzcv8AW3ZF2zh6UUVXYrFK",
  "key17": "aMG2Vqzzd3Qm3VBh6qd6Vqpa4FeH45oZGbsjjXeBsqgpkwfYVyBm85u6mJP6f1cGG48MMCb2Qs1tuBR5rBnRug9",
  "key18": "33qeiBaxGh7jdcqqAVVAChk76z8QNb9sr6KXZtqJAhLKfhuQdjZteWQZWPULDzhFMc95CQxec2mvWXLqamv3X1WN",
  "key19": "brmbK9GN7uH12FWTZ8XMKCqhSXAH8TCTkLSeP9Wu2Y1JRxw7aF3Ge1WHUHPzgHuG441LRFgsG7j2GkvyYCgsmnx",
  "key20": "2aPLR5mPp2doGbFwjrCVxfmf4VeRxidJmnu92eqzucSuW8hrC8ewzSorhp7dbgMUfUW7DLaTaMLgWvTfdiUbSaZK",
  "key21": "2H5eHjpin6XjcmvJoTAgkfgZegMUEmXuj39tShiANSyCMb64WkzTQGcJzhn9rjL6UwCvp4WcUPw5hH2XyN3oxc8C",
  "key22": "38RzsHufkSe1icFjtTCKwYsU1tv9SaAwVzbBEQuDW5NFQpZfXXDH7zJWpzDRaS39JTx4KTYKZCHVaNA8VfW7ihrf",
  "key23": "2v8B1bMzWhrfxw6xL8Gw58CmSS4HrxDDphyCig2BSt8CR7H246haxW85QpSUAgVzLyzzCiarr1fN8gsqmuDFxZY1",
  "key24": "tVpU3ww9VUnwTeG1bXaHAhA8sAzEKijQ2sDFnKybz3oeiHRvdx5k95ghA6XrVaxXBvDFJqdB6GeBNgDbK5suGMR",
  "key25": "5X92PcLsn1ozywMpiNWrLPVGxUWxNZXB9oNHze61FVRAfU1VMhYodLwnhjg3e4bVatLkG8sai4zUZFEPr9srdzsj",
  "key26": "4qatySuGqyFm9yqBdd8WxFxQGpDunFrKUo9wTD2YoNfbMgih2g77TgmS3EBVhQiTnTk8KqCjH1r9r6SYQQDsotY5",
  "key27": "4EPeNAKdKqm69m6tPdX46PqbHWSE1gTCPxv5uihhWH5CivVEmCw9af4gZ9yRXKYvpWTuddAQWoGkzcA5hSKGGQYF",
  "key28": "2DQLvj6WyRBKQFAQc1bNeQv3RnBHpMbJFonoGGWBBKjvrpgMX6kEkVYMccpqP3DJKwFSFwT6udWpxcfaiCwYgj3N",
  "key29": "98c92T2VNUSxSg2KqrSdJri45w3b5m7zS4jBYNPxdeVduwBRETfXkf3HjpNmmYWCiNzXshhGo5YCoijm7cyqjhG",
  "key30": "pF4TpcfhUT6b3gjcaWdMnNzDg2fFccXmYssiDGAe3o8NdkL3vCk6qg9WwQS82th5sYVd9bgn8LoWntApsyyZJPG"
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
