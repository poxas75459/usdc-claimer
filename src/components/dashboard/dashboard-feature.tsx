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
    "5x5Wg5arfZHSk4qSspX6iLyt1dh6pK2RMMtcGyH4scqGiDsQRuwRmhY729awrs1ZaijBPkhTwUgLMV5XJAMcDYd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KGcduGy7aYsPvt2iBxmUgV9exPANKWbe1Ba8w1UzoFuJMz8WgjKZC4asTdRGpBrwaDRoYbuEoUDcy4an64eyqK4",
  "key1": "26umwzx69hGn2qUR7G7J9nRexGSkX9Mdnt7whgXZcqWFrusRAqRUiee4dC4PKaNzcDshVsv1nPr1VtWnKTzadbdw",
  "key2": "3eWLHL4grbjgULDt1EXrHm3wr5w5oYdEDt8NboccopcLh67RjE9TLqH9wk3wdcEU991Zv8fZ1TsDvxw1ozqwz5m5",
  "key3": "46STSAd8L2T5cXGksaWznUcS1H33Dr33Lzdxm7pzTCsSCdMAME1MSLhgMPqkFo1i5ygovboTijxD8coKZj4CpJd6",
  "key4": "53DAhfGcDY8rgyWVpmQiAKyz2ZJcFLTbJGPELtVmc9AdpB5fyvTYSKvBtPVRaGWHPNx2kupThtCaFu3QDLXRtxzx",
  "key5": "53i1DoQrBEhT2uD1DsvjGikxXFyhr7bVrLNYdhYQ7Xcro1BH7JoDwvU1UyxZ7rDFjd4JK8TxJ17DENZQgQpuUw7T",
  "key6": "2n1rHLCxLby3gZmw1sT2WsVZEPU9xtwhtQN6HSsZztfNkc8MHfLJtTXS4ozYs9YVB6rqtWJmXPm24fS7gpoL2crK",
  "key7": "5oVw6kPyje5LAeefo3bR572Ca9H2BQUStRuCn6CvKSQG4VxMQnkpBc8m4jJQrbZBZQZspgK9c7iG7crd4dYL6ANU",
  "key8": "2UDyFdeFrb78jcNCSPQ9BNb8LRMv33npEoDfyA4ofLd89c4VRH76xp89QasKFvTpAVpxsb17piV2yEZfgpUQQxVc",
  "key9": "dE8xamH2rNUKVe4GjLvqTXP35FfSMMUPVAcgr5t2qJeeMmKfdjkxnQxBJRkLMsPLZp8k2KRCKtjJyjwtN1vguPi",
  "key10": "2x5yPurydosRTmsw7Kwjf4iVayLPjWAQ545ZAEhDEk5fAHJSWsvoVpHUqZKSUWmYQ1e3MXPJVuYwMi2Pek3mbp5i",
  "key11": "5kKrfHkMYmhQSCtEzQtRV96HeZEdt8ws2HSnmeWXCayMEWUXTkqx9wg1LrfpF4stWsieFTmswzBn6dhy1EUYmVr8",
  "key12": "3pEKNwoU3QnYPMbYqGRWmJLUpenqeBRVnYHyDKnpTayMMNKLEXvQfn5W7ZVK8gXJ59jLEZUDFnknerHYHB4o3pZz",
  "key13": "3dSrtRReYsU6dmNEJfJiTJMavhtzmwdFp817gd6bwTbvvw8ZZ8hKr2QMTaqWjG4FFpHjKJ7LRH2WaEasr478otxG",
  "key14": "3bVBuoesaZLTHnXWD17c3WKAzviCKFUu3i9AR6VBS9TUUfW3sqNsGbNZ3JJijeiowq19YkuuhpTUR79MDvHoqerp",
  "key15": "2B6EXntiP6nLymAS6MnV87rvKjBi3vkRfJcJBgAXtKyohWr7JAA2z33kpvmY2W6aF91TAf4rG429bWriLZPAmkE9",
  "key16": "P8NcGNK7zr2LsPiMWr7W91XqVwxPwiGGWdDvqmRFC6iumEdMsXvepzC9oiyY5NyMq82y8XMKt8MXnnr6dhHQ3Tc",
  "key17": "258zKBQcW7UvcWJaML2vTR8vpN1XC5brYGqDfiaZMcdqzNynfvRycZP4zN3C1qyoh7cmmSpvFxSoLwzPTaWcbQcy",
  "key18": "28AqCYzcrhHn9fLbosq3snUBMdTfxhpq167KpdhvDTpRet8RtRN2uQynGYmdPBG1p27CvzRGcZdo5FXPKsTevxgZ",
  "key19": "5etirjhgoLL62abndoNdfHZnw6TwvnBDchKMZd82bgGzHqHLLfdjVjWTR98RbuJTUCjPNcX9T7FbXKGAnQZcpnfA",
  "key20": "3GBwM8tz4mYRscfit7bU2KGDcpyZFHnuS2Ys87KchVD4Bj7FMp4rd1tadzPhenn395crz2owU3vH9dN9kjzj3WP4",
  "key21": "2oaLV6YTBqtMFNe9k7G9LD3Ba1gRnTgtbhNMCcWiWQAGWry7KXwPy6uWmHPXkEv1kT5Xc19mMx3VtcLrKA3j4tqW",
  "key22": "3FxFiDdwJsmjU6yAJZ67vVFAFpkmBGZkjGNWDLosXqpiDLUYyRZJqBCK3tvsBa4VV1YYTPJPTv2iSW4PCUR4Re7",
  "key23": "24CiLXLXXCGaVNXmYizHDd1tvZkkEYypBTgzXozrXqE8NbY9nTfzAn5Vt4hh4eRp5BcqMpN2Xi5hFnUEU1cfyarA",
  "key24": "2eGs7qh188WBJf94RsLkJxVT44Kch27EF1bHwv1SZuZsW2D3TqKBNVZ3e3Ugva9zqCr7PLesHcAYR3QieLLEg8EJ",
  "key25": "4Ato7NAnCQt3rv5MSbM1TzSr4T6PRUfygCG8x7uPbxNEmUghoYWjKAoq4oQDMqWabWGJBdr6T85GQy5hMy8idJtq"
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
