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
    "5Vxc9sHw9inV79a6AJatbcxbF5ZyeeRcHZzSWoS6XDjdhg7NU8GS91bzdKy17uwnJNRHcwgNbwu5jmTVJUqiTSBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BVdhbEtrmTbLCsQQtT4jmfCntcMka4omHa8aoApttHXg8f2Hf7FjiAsNQEkZvfz4Q74jvmKLvCwsN4nEVS1veEg",
  "key1": "2r1TX1KatKTKTmyxVcKAg93Z4svWETgKJ9r395u3kZt8Ziny8tFXyZeRmRFCNW2ocreX38RfAYvUdKt91S6KT17n",
  "key2": "3qubNb1o4f4UHp1QnUTvcA6C2nc86Uu5AGaQR5rjK2RnbDenL6xozxDfqU5K9KKWtpT3adfeh4JhoiedhjcdHFRE",
  "key3": "59Rt5jWJQVvsCuZaJszFXZY3M7KDMZXamFr7XoJjiRfDx9XxDfzze7faujNpMKdgPs4kvGW8vGosSgCPbKnQpz7k",
  "key4": "2JKht4jFhywrD9zCV8yoaGwSZSPZfKq4wJMr4XxycwTj5UUvJPrq3k5PR78WQgoM84V8vwKcJWmheB9QbrsH4Y1Y",
  "key5": "4BQYYyTGqFxiLZ7K1E77TEp23A1SVotQKksSdJRpqtrbKQezS7u8q1egC3DL48DtmnYPjLgWpoP3H4U42xunkX53",
  "key6": "2n8edzVc7ush3cPHgSXcJHVfso9GiFtQDX3SPs48RWVy78XNQiy9RdvcDqxdhsc515u8ZTaUN7LUJpZEQ84KhoYC",
  "key7": "wEAboMRgQhEd1rC8qy2K1W9ZhBjjw63NWVMexVbBPAs4Vi4qW35Dz1stNtWzJYkvsXdaTREZYwsWre38yjxGMA1",
  "key8": "3wtaFTnqcqZfRmv9PDaHQpwCE1bo6be3N7s5cFgE2h4TxgcXDX1qMe2gcQi7CarPp8mfLrbirGVQ1efU9gh39g6K",
  "key9": "4uVcdMK3tTLfcsUTSc3u4auzSS1EqCstmArRLVKALDnn8gDGdKLJSZFAh8JMPyJb5yeaKmvXJhFZ8HqCygi3o7ZQ",
  "key10": "4yQ4YhQsb25Cu6V1HULgLtavo2konDu3fwugDi6kD1ttvmNUY8ugbaoHBdE4t2TXM31hEMK1jwET4c3tDrqH8Mue",
  "key11": "5o83s4DCQ58H4GgxcPwAZAM27HBNV78yS9N658TsPbMbsCwGs7oSpBSKqZF3KHjxXxr1xdWsovz8szR3pyvqZ4or",
  "key12": "VWHKhcc5cE4puiiWUTKJw6TvtWcHmEL3Y23iRAy7DBBrgzHZBnv6d2KzHigVjXS5iWj96Y9hy9gpcPWWwAe5ZbZ",
  "key13": "3fyvyzXXuG4MWVk3dKkieXx6ChNL3AS53iF7ViEeyafTfik91ZigU7fsYb23NUCk8Md6uBfKCbH28RKRbCDG97cp",
  "key14": "485JAivs8qXK5MxmWfZozGjnfVPWsnP2NMTeMMTvHv7KeCmfWUuWNJoDKNyANboMsn4L7nfyxgsqudfiNkQkkbSQ",
  "key15": "38N2diW2TWjmUWvRgZ1zUckXputvYoLk6RSUnA9AUs9ebvxJVUvrxLYuLGX2bGToiXtjpM6u4MAQdont9ydQ23xM",
  "key16": "2TDW1r4TJ5HQ5AXGum8DwSDf7y9vrokmJKGuKbzgjzGAbQg5tfFNt6WtWbnwE3itbSkc6ya59L2hDonZrZHb8Vg1",
  "key17": "59s9tR6JaurJwLVmXMyf85Fx7MhcoUWLYMHfcZyL3HpTMnUv1N2jKb5qRVh2orYwvbSNe1QauJin3W6ejbk863Rm",
  "key18": "a8CagDca5Q5m4fzZvLgipwswNRQFSsfSJ3m9hPQQZpT5697yNjsdf8JXhUUHQzhKtSXxbxR4sJNGKEBwXRmoWqd",
  "key19": "4sBJyQwzTPkx5f9ZzFF6J2EoV4Q8hNmg1BDJ9wx3JqTWT218zoWh6d6JKpkj78RBqD5Ds3MCTAwfQAYCUYj2xNPX",
  "key20": "3MzyA9FjAVmBaTMpufdnEKHSa9tAAYDCG1GQaxRAWCRmcgdy7dmYYow2ZNXeiu1cdvJTRa6vvpdzdbmZmvPeEn1P",
  "key21": "hy9YZZjczCSGKZ3mwYmzEqZAfZy2paCYaiNseSH3SvTufovbX4q2tF58ieeN94PxaCPjZ4z7UXCndP2WwDQCNzg",
  "key22": "4S72qZBSMFwsHc5tr3wxA8Bp2Q4jjj7cYsZXcKkEXzmAP4YiqzTULya2Znf1BFXKnE4BeyuF74XJffgYXZ7ZyGD2",
  "key23": "ZCaZQPUDvAYjFPz4y63wr74n5tkKc94bnCAVPfVqfw1uyDbjYHa383gAb2JzAENxiSdDMdpSXVbZjGfTFua1aQv",
  "key24": "61bsj2WP7E6mdcajyrm8FUxQTwqDiUMpGxgB4ZtQvkrWhLgGRtw5hVBbBGqvRXKbUwH6QsTGE2Y5hvCBAAEMZk9u",
  "key25": "4BYzRwypKjdi48Ct5WY3VHre74LUJ9XvRaCPRGS2tHjHdLq2v4L6cnuM6WXDMtyLJ1a5wVU4ugatkumNUwoFnc2y",
  "key26": "3GxT5GJ35WTttsmjPqWTx6npasnPk7LYYYWqfAcTcQwJ3oukQ2edEHw8vi2c7Dq693uDbd8yMb3uYHgdLNDUXc8S",
  "key27": "Ljh8W84uK4SA6gtWJDVbr4Vf6uLBMLUwfeNTR868xDxoi7r6P2kF5a1gWhbHpVeQdtHgspaNyoHEFgLzJucreNR",
  "key28": "3jfCK7w9nfnivYhp13JgMxaakfVXT3FHQVfAUZh3Zii8nPU55JZKAMqtgi2YKg6AGxFrtKdVQRub63xk6RkGhGwF",
  "key29": "ywDExLR1YqUoveTMVdQKNxNWD5bvtxrZPiCLNjYeW6CQLwM5xfmibLvQ8drQyXYfuzZXG5BjQDPVSPSsPBTYTop",
  "key30": "5RbiXmBBrFvUSLcbsfRebUSZ1KVHje8TGtNzmce7tL1W5ZeuZtHQBSWPQ5rigQJYif3wR3jAiZ9huP3gRg8ipKtf"
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
