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
    "nUTsuWSHovSoWCdsgcmuuLxRvnmCaDR72F5VEaP9jqpk2mkeyyGHKHFARfthZR8sAxz1fHtGEDF62bJ7F1XfN5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35DkL3znUbCVqh1BErydmBjGzd4qxiaAAwEyrNsLxh9WfRPc8CGA4oFkyvKqEvcPMR6eZjyz4J5bLf8AxS58JMzv",
  "key1": "3yGCnjsH2Ban7JSj8jmKDr69zDKAXLTgrjErePQs5JnSWVNS6VjnxMvCkZWuZCThhJpTqGLokDcc6saNzvqCJcav",
  "key2": "57YX3tSsMoYnw4GmcZRH4N3gU8ZsrcqA45mvaLYfZJoXEmTLwns5NBPczhJKXhK5H1b5PCryYNzkFu1rGWzepGib",
  "key3": "jL8wh3mpguVwsTTdjpXWiqHoJUJBczjjZUHZaSeR7MPvVaWWCNeaQPSCGQbM5GHJSrY3PXVYxrVpseN7nDJRehm",
  "key4": "2awxeSUREnwLTYc2CnDrVBXNfTaT1iyW9fRSXuXqosUHXd8SjBULk1vx4vedTEkGT79unWt5MBbsWWwGx1QpQgnC",
  "key5": "uxyEh3N6Dy8n7QdysvXQRTbhtANKTYbUDWnKQPWZXcSNEAWtfE68vUUPeBdsoD3CN9msSqcSpRs2aosqfYaVWZv",
  "key6": "33UEZTko4N5JAtmnwUBEekWLX8Na3p6NZv1vgY98StakWS95aYZJrFmzkkVN9CotjnD1qMXcKmbTBcccz9jVKpr9",
  "key7": "4Xu13MeVNtuc46bjmHmoKVPuaUtXeET7MG1vJHKYgRt3xoB8SnD9nSmYfFdAnAcXwZ1ADZLwwfe7rpjfKpmqzMme",
  "key8": "3xjUFtxD8izix5PDDhn7z7cbT6snoVXNQFK3V9DRXZRtEb6LrPAw7UN1KGZZQaTv9FJ8phu76MoYkPwoGCCfwt5j",
  "key9": "cbCVrwNR8jveyy78jJKYDQLg1uRCvcztg4a4yYn8XkL9F5UGjdUNud9sk61d91avpoiS4Y54xLW5Vcw5389adLi",
  "key10": "KpQowi5kK2ccwuc3AVtHRz7q5qFsTPL29mwKTzkfwduDSEvY7QaJoztgqGQNNuotViGnJLcfQMeDkrXGBwY9jNg",
  "key11": "3eBFA9XJvnamtR1Dh3H8igHCXeTNgjcgbJHYk9roWUhK5vqsrvXCabx72YnCiZcBRZQwE8ABUvtq2h7FduaQV1Tk",
  "key12": "2XRKJkJj48SXeG4Pa3sA9ihcwxXhjtzEsMxoeYK1JYqPr7VghaDfoxjEBPXHnpj4ZeZVJrg7pGgRepgKkF6heZp8",
  "key13": "5ZY8MF4xDuk2FqaDgUuxZSonC24YJyEE356kgR93pigQiM3BsKYuVEofSSU7n7NUzvzms2WZZZMgSxy4atqPTU9m",
  "key14": "4Yures4vSRfjN7NFwNqnimuyb7H8tmzLjv47ZkGAz9ibkTbDYFi7weTxBdYpty4FfGVgbB6Zan9Hc9KpXiak7dut",
  "key15": "W49YMABxVMB3uAM436uBLnhZRekvBe4GBVdMkkxusmg9TVJHcEA6YMyXs5qM1x8NqKeD6muDSKuNPkGrW5JYCMp",
  "key16": "5AuRXuMjAgr5torBBvCDxcAGURbgxruwgMr96kCgfjY8Xm6zfe9QK6TBiguwf6TrJGfLbQpphSuDj3HB96ab8oTa",
  "key17": "5srFu5KLRRoHPznsUG4hxrRjed4UByhoPwUkSgBsFHFqXXYtjKKKAF4NLZNxqPXy7hZWPQuRtvKwmYwHbVyFcY6u",
  "key18": "5CyqA5jKEkdxThCREpCS8SzPBL8soRVuXYQQLCBXCb2EfHPQUbFGeTHvLx8UBzYZ2t3JkkEiVjUPJtKR5QRxMbwX",
  "key19": "2ye9NQ84mJvGWpbeBbA7tArnmVjmXsWr7b1rrDEyZC5QHEF34kP4CzghW94ZehCk5dvAkcAz59qKE8cb9SeenfuK",
  "key20": "2C7nHP59QnzyPe1vNmn2f6huJjoMZgFdUB1Rhw25ADKTNW2ptXhDcZh3pnLWHpCawqgD73EoddycCb2h4bvWhVpP",
  "key21": "5VNeyjFTzVf75r2YE55NTe3rduJtGq1AcS3oQEyesS7sYdbToNpw8Xwrwxb6XTzgf33pWcMdPD6NbFdQ4k9Dtq23",
  "key22": "4oxp9VZxpQS1uv4MyP1kmyY5nVHXYoU6vJqHu1XezPt3FpcnJFy3ndoKbFg1FDvvTGTVPXs4BTEPS15RBsx8dsaT",
  "key23": "3HWRU7sQ3chKyVw2XJsjQmJ2vFQThTG7XDT3faMcTzZQnPuMVpDVnEyBXCefxAPhe5As6N63xBi6PkCjF6wLhUtS",
  "key24": "4gxyLe8trLTBTk3dKZX8icRurGbPnyAZkKnKwnEcZE96dBj2LmDRFy8Q1ncnoe3Grx7dHg7sXYfjUgH3dy1nVw6a",
  "key25": "ivLWCSyVnCwGKz828bDK5nLeBdASSLDMwqReKzEJasD69cXGa7U1AfKqa4JSHWqfgAdgTGUFava3jYvpL1HoPJT",
  "key26": "4BTht8vvA5tEfYpxCgVJ851TvS6Yi7WKC4xivqVn3vt8ygvb8nDaWKbUEUAxefF2DJ3kayYfMU5pPkWNDk1b2s6e",
  "key27": "4uWdteeLfptJ8pcii5y6bJHSDB2zKiy9zdQFfwfEY9mWtdmqCuJNReXn9r54susG2b4PoBXq85J3mFEamA5x3Ckb",
  "key28": "2PzkvjgSZJec8GUW7LQ9sAEXi93LVHpYD5hG86V1ySi2o9y37mrnmUeZ4p5zF297vKUKYfQB5K9pne9w1Bj4udkP",
  "key29": "3rrn7W8EFTPSZ97bprVBJG9GJaWvGsUxpS8yqb7X31vJcM6xifvoTGtSHNNjKJv2V6W4Sd2uDiNqyufpQi9cCbib"
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
