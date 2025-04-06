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
    "4acJZHi98Vv6egYdVFF6JG7HiMYzgiUQRTvkq3QYx5HgsmTisDirBUAk4vd1iV7DrqNsSDDJ6gwxNtyZTYbmXot3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r62Gbeo4pK7yxcrB32MT2zkCnwneX3PG5xnnAf42rRrf6S3TJaNyou2UGCijquUY1pW5dYSrMkjNbnySLBh9HNG",
  "key1": "2k7YYAUBFTH6bGdW1vT3NG8vvj7XrKrUFacmc5GenouFgnitKiMcCMuxidkjWm5vcUPH2x4zJp3LMdP41nWtdME",
  "key2": "5xaHd2f82DGeuBGvzYMGkumi5BBR6nunr4d7epYZgg2817Ma2FijggZnhDTWzAh5xbaA7MFD2pzbBYWpja5itBso",
  "key3": "66cxN8R6iCupcprHne9Yamska8PxjASxiokThRo536U3U67u6DddnfT6eNYBnSimwXheoJj7goB9u1jUKvdwVnPQ",
  "key4": "3KBMVByRfhUso6AXSjMPDSt3PUHr24GgZd5rFWQTDss4oZuqUVuK7AVoBJx1yX63mTADmMenevTKuGSU8HsK5n1d",
  "key5": "4tYx77ZusZh8HmfHymJR4dR2fdRPCNDGXgavV6NMoRSHBvA3peySZCgbNLe8bsMy3HEfJkeZEVDoTCqZg8vsWFzB",
  "key6": "2DvpFuwWXGMtZkigd9M8GeLpfCDurUVhhgN7A64YQSyt1bUFjQtu3AQxZRn2zJbCLPTiCDXdkVXz6zjjtfVG8SmZ",
  "key7": "4rrUAn1fE6m4eF5YtG48q87mzhBD9MLbw9c1Sbv1NgjwWjDtVzUdiWws1EiAEFECkeiDEckwDubT26RHGpYopPK9",
  "key8": "3LxdbmAqCHLTSY91K1v2DJyn9r4teKW68D7LxpNJhfpcjb21US2iJqpaCK6JTRPvHuLeWu7M5EMEty1N27zEukZD",
  "key9": "4tKvNNdcRm3zurT4SPbwr2S7CgrUsD6XU7AXAddWNmEXEVQdDNXB6Tx8VAM4pUgcajpZahVULzZhJpBuVCg629MR",
  "key10": "hchPpQsc5kUHmhqWqMK9DC46yYEzb98rgPystNLHGT5Mqf7y2FfMiPy2rPNkDMqgkJo7PNEwA1UUz4TrskTQekQ",
  "key11": "3DnZApHj3SJSjHNEWye3qS2dEzXne92riuqAVLNRtMEWKhcbKVMyqNTBgqNrMZPU2i75DQnWjJ5vut8LYMdeXNEt",
  "key12": "5F2wcaPx2q1BYNYBPpUrGd9V7GDkXEdXDCQV18c29yRCwKcY2ydbGECNwdFL9FQUACthL57cy4jtEEzrFSxwPx7L",
  "key13": "5aKDunCkYQkUo5Ys9UEUx861dzZYm9E8m3a4teThyadbv4kTnLcFUD7i9HrZsH87X6SK8HUfV11YyfwF4N44dnuT",
  "key14": "5JucaNQCZZHz5TqtikgeZvGeHcjQXnKp3meHWRBRciQiTrkS2Z4bVWNK9vw6tiUpURjwC4H6sFbLuE44ofYVDZHz",
  "key15": "4wU48MzzoHXQJhyAA53VA1MCjW6TTSiQN5ZHfJj9PHvHCLXRPhsir7K2y3DZP7BfG12ME284GF6SajP9NSfnUggR",
  "key16": "5x5PGUzG1oJF2CvWmgy15ag79KQfSisd5pitttW7tDE2SnGe1DvXPg5oXRHEM95DsCVcin1T9E9yksB5NnXNrNHE",
  "key17": "PkLkunQoXUfcHUSG4CJV5ZdGeoeQu15LfHw9JwpnVusYP5LRU1SAMhxXUF4Q94HWxAxQvat5C1CF25L7fc21xT7",
  "key18": "3YPdAoZ5Gf3hPvvmKfXTWLeDu7MMjpNg7jLhtgUaTSC25DA8T6wcN5sQz9BdFYmQMEY4UT1emDjJReH58en8tMTU",
  "key19": "5HzVAgADJr7En84FtGo8hbnR4zunm3zmW2NfGyNaTJxBPuzvA9LSvjf27XwzMYxWnBhcWNyFuVZBLbivBD6o1zyj",
  "key20": "3jWsSYv6ffRjMokSG2WTw5wsd7pbr9hRLqjsC2LqnCF77Buqv5YbSZDroWKJ49qqnMws71qfMPn5XhV9CdkezUJC",
  "key21": "52uiZnyqpzgzsYn77gQ3WFWSNdVYLTuxszaTV1Nuh8FA9pphAkcsadZaJWjZvM1tYRCGQ1BJNLrPhnqqF6t59Xvo",
  "key22": "442uRwwyryDuzo4F7SVUtHFDM8z46SxzZ3NSd8bYyWxeZRYEumsgyUKPc9jMpFK3tDnHycw6NuJ3QpW1NudiF6sL",
  "key23": "25vLbPygy6cugr5cjQNVUmCNM5iHeVE7rufKmacuFQRjA1rEfVqPEvNdgr7oLo4PymZTJ8QWhMJ96jWMtPteL2YS",
  "key24": "66HNSTBth3cT9sKGNaez6Re6wrpDhHcSXg8zHB4Y1kaAFjSJHoChkfnS5qjjbUMaa36jEvUMxqt52ohRP62zM989",
  "key25": "BULj6XQWXrDLqGwd2dgswKxWNrBxVhwSqM1yVTP8NKrvqQRghveg4tL2ho2VR2bKm6fad4bKw8x582kDykjYSS7",
  "key26": "49AppE3AtqF4hcyWJUN2eq4GPcAteaUTUPMtMQbijajKBwZEh9twJxYVsyhe8DJ5DwDWF8HFZKReXYrVGron6qBy"
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
