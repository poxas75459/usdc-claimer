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
    "2MqQbmVxg2SZqAW2VZAHZaNEbZQN3hKE74eoQETeTg71kPHzxNDafREPgJEBNkCtzu7N4N5atZfqJ5vcCDRU8Q4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h9AHBBZcgu3pDGKF4nFHV74SLVETp1p2GyyLYLcoqRZqtACjsEeFF41Qg2E6Bur3xSrk8aT9rPR7He7h55E2s3N",
  "key1": "5VBwaoH9zid7BrWQFyDD7NU5yd35swbpKy6ndzoGSNgwFKdTbxcUNXenTGS6u29sCSj4vuT9yEyoCQJy7Y4rFd61",
  "key2": "4ngV5CvmVwRvxL5KjNVb7FPngv5Txg2yLnzUafjrffMGHYnabU32iSiqtBekZTw7encmxM83vCNXm3Dbim6q6r94",
  "key3": "yUma54TcmFLn2Wigf9AZ6dsXWok1V8YpZQsqsRQsmdMTAioVKXzi8aLEdnGhPzwnmVyHeyq8fMWUr7wWs1xMqre",
  "key4": "4S2jc3VB8YZZV6dRGa1JamhTZHaxuXmr2juJj46hLVnJx5cwZzQVAUP6W4SUBWaFW7mi3pLuFNqPNgbiSZ9m3E3U",
  "key5": "2wDBaG93iT512FebsNFchZPCgrBRuAbuWfbHbvV2dxPh2RdfFS1Ba3bzCzxoDMzV2cB66ENn4r1eR2ABXYGfEgxD",
  "key6": "3DaBR3JSKUru5GNrJTWv11ZtNQ3FY4fEiYSohFEuGAKN5NbmH4fzNw3abVVAng533toFbNvX2xwatJopV4kmZNzA",
  "key7": "5XzefYL9k9R9nUe4KAzYELFaqo1Kehbwrxi4Zixo3PqymtHY6VBnY1NNsqPf6GDpRjQVQc8jRmvZHNzGc9YUK4vb",
  "key8": "4vYTSv38Mvf6Jhgu4SZuWTMknB6bkAm2cQkzb8hiB7mhmSfWM9n1ZLcGfsiFgiQhj9RzsAmyNzcizYoHnejWDiDX",
  "key9": "4mk9mVLnzsMvzTEq8WiPPuMiZg1Vty4CZH1j3pSt4dMM3srwQbBkGbLdUiRfqcGcfhpDkh27zYj5kTcxvn7JQsBg",
  "key10": "EvdTGfAMqAEftKTdeCVfoTnuw6MLv6mhWo5LaqL4AxvNG41xxc4YTwWXVpaiqwQmbCJXAh3uTYo664cm3zqUWrT",
  "key11": "4bFQNK1RHw7DTCvnrktY3i1Y6k1WtghAEDtfNRawLog2qNtkp3ksdicgJ64C7ARa44MbfLA3yXuUTXo975VjCJL1",
  "key12": "4YGicSAMJZzReLJsc5ZZo1MLH8SKeja6UYft1tum8ZxyZLLUuKtU5zauYAS9UYpY2Z5KqUk6L4qCcWQzPgnte7MA",
  "key13": "5ppaHTW9g8U5cw3bPp7xzsxJE1FBJTq1wQmZcSM3HqVokJj8CqBrnqvcRaMXJYLrL8dbvsxn8CTRtW5zMPKkYvPe",
  "key14": "ti1S3R3eErUZwuLNpotzdQkBfNFECLg8yCPbJNd1Wc6bKNeAS5C7mf4QRR6Hqu4b5iwz5R6SQ8KhxoJP3YNCNPP",
  "key15": "4GadTUyAfPk5p9CciSc9tBmMG1EqKSf8JyTdNoEddQ93aFH9mQLqaVT8EpmxDiRe5aC26xYskqcSf9mdeo8YDAU7",
  "key16": "JPEbEgcxdiaU3ELMvBSvzHUXiWq5LZF75ek2pWgFjF4QQNjjKJskVWva3XqgyYewM12nSbRBJGA2oGJVmBz6nRV",
  "key17": "3NpcMthN5j6xjs5qfSrQZgH7qEMbPncRn9V5arYsZPb5JJyUSKbwPan4594N8wiG6Lq5bNk9xnaQEpK7LNLWsedu",
  "key18": "5c6Wgxs4KCzCNp9GHi6LvGWupfkjjUACXACS2AMe7Ra5V51L4iijGur7vtCxPNiW4PzyqaD24C8zVGs7cqKCUdtE",
  "key19": "2ub3xjAoa7MiTRHV1GAzur7KdFJzuMUjBDrgRPftbdG3ZUjAcgke1hHpHmz8X9Qxx2AaFUnrdMbq47CB8tBqBYxm",
  "key20": "5MC1aKi7pHpJReWvUu1UYW1XQBjnKe42mV5hyuzB3Y4TAN1NXmEkm6aD94dRrWbVQT5hBViRrE5BjUE3TRGWkJaH",
  "key21": "4moJg4nWFw3Fxs25vWuJgNHqSDkevx8SvNKyX4spL94wV6pBQP9hJA5yD3HeNxJjRMjbFufTM4jAZSNqseEuZcBY",
  "key22": "2T2a2CkeoBJjuyLxfRDyw4poXxFb7HHseBvQp4RhzSoEKcCSimgofTGVBGXg9F9T3s23Csu7PKR1NHPZ3ZDb8DUW",
  "key23": "55BYHvhfvHq4NLEvgRmgBWc5YqHk5wcjdVn5B6H6vfdbcXt6jGcKM8eh7RGMRKMQSdewQAXE21a7NYyJZcPnd34U",
  "key24": "5FLHXcxAyNBSsRhsC4762YvkLyASqCMaG8LXc9Ze1XQgDVqXDjpGAaHSazYyC6HfpLahyMvmGaLcGdFy26qRyh75",
  "key25": "mqth9xbdzMjQzQd7veEbDbmNpgUJrXFaWf31VSFfkzkAJSK5DtKHe1xQSBNnBp26JCVCiP9B1F78Dxd971ckgiB",
  "key26": "3KxHcWmMiFWggf5kz1UqVEZ83YdmXRoZG7fYY6LW9qJZCv2L2M3jfKMcPLnvswyokkyWUsBkSjPgBgURw4UfqE8n",
  "key27": "3H2S8bJv7uCyGcMZKxegGcJmkFF82wG8oDkncNWjcDtG62fS5wgNvaFXkjpsmnkRBsTan8EmXbfLUkKKUEsyz6yS",
  "key28": "2Uirc2X4WszsWuqsvea7u9y5SEDmyYWsQFxLKTjLdusX8VVZE1CCPu2LKdH5yXwVvQLj4nR2RNxnfNRyvSTvJtnQ",
  "key29": "4pUv8PWAHzuNn7aWHtUWwNGBSatgFdPVf8VnWtEsh2kMKw5J7vA6SiigvNy9B49WV8ynwSbZsCiMLs5e65d2VEGj",
  "key30": "5QQTyh4TaBxwcUUFUarsFntQBVnrtHvyJYxwQNzpEYmjTPhs2eKzqvo8L8gaxprpoXc1fUNh59NkBV4LFfAPp8yE"
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
