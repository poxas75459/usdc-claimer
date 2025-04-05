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
    "38sTqZDD7Eq8kCfYjbwei8KdMXutayBnXBDbHNkoB37mjHUYq3Y1Bz5nSmnr4FUBiRWaQG1qqtguYzaXwsridJGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kGdLmAu3CLnygutnNyWTrNnirEd6gg8Wrsp9uoSLuJdsmZ358BmF7Xf6eGy8jFD6PybGVLYWNazeKLEvPZwLJqy",
  "key1": "4Rnkj3Ttx6kAWn3quBRBPPp5wVbqrF3TXYNfwJVfoVD45YQ84PK2VHJTyt7FLnTfFzZERMYZsyUkFJzYZiHZ4qK3",
  "key2": "2rJnWXsKMyjTspGGZ7qjZFVCNFGQW8UNg5QpDycWS7spVfqE8uMX4CXGjyyvpZrUhZM6iDFHurTq82Ff4G2ehKVA",
  "key3": "EfPoWmXxvDxNS25MEaX2DGp85JXkGfLhV3saAbTHFwNEHidHszr4ERFHWj8XxEJ56syvBKWmUQNPSMXY7bvcJ25",
  "key4": "28BU8AzjWZyDXuapd8xgJTqva7jnyXoZgAomtXFZ11FysN7RQKqDT4jAZzNAfJfLCjJ7FLPGV5vv2VzT738mP1BK",
  "key5": "4rA51DjkGsabxCZvi1RGcjj5d41eaW285v3pBsUMzsCuuSjdjSermLeG7muviRQpVTrmy7bRT6kSMh48TsgA7mPG",
  "key6": "4PV4N3n5sanAT5myRyCgM5f7emDmV5MD1VcCJ5nShdJYw32UvNKXQujcXq7L4LNu3cW8ke1WVa5oq5MYUTQREimH",
  "key7": "2XHfkCVbuY3ti4DnGAB1Ur6KMp3aS59Wrumrc5xsLuUVw5k99JwTPsdmgJV6WhoC7GGxBPhf3Q32AcHt81K6Y8J2",
  "key8": "4YhuPVWqbo4PxJW13RdFC28J5hKV1qhPX36A1TFMXfCy64ajbiJtHkCH1ZCCPGGpNW3UcKDVeZ3SU98kzTC54Y8w",
  "key9": "4SP7DNrS9CBucKZTeXXdsSsrWutQvexB2hBLBvUxg83HAH1tkUKS9B3rXncs6cEQmiH9wccawyP68TuTFGM7TRg3",
  "key10": "kGFM5kvdXjFcuwEYdvQgfEyooW1tJhaRcwUbsEJTPmG5g3Y2Y8ZS6in7b5nYvQUYVHdB2djCpHcRuWp9LHJbHCa",
  "key11": "4gfFrqfqpS8ByaDPGUuHfiXK5jGhtBHWSEiywH4RbXPC7KDZQxJfqM7UHHz13gmYgRABFzEsJS2QtLGuSNxoiV6f",
  "key12": "5KjEZS1XGgAH5gP8V1FJEoKWkKnw16u6BjkxEoxCzPqe4ETpCsrYinnxzySn4iiNZxcuLBxKva5BGii8fmAyHcZH",
  "key13": "5r5RHGvPzQx5fxt5RYuxhZJkesyQX9XVZ5wWap48RcZMdbzEY5SgF7F8LXCfqjXLCh1G38MxouVFksUTLt4uywrQ",
  "key14": "4vZ8JA1hFr5pF147pSUmdTMP2iAQZux3FHv375SwUJqpQ8ntcqW4c28wWnveq98Y8MQ9dHLT6CLW3JjYtHtKVu2V",
  "key15": "3bnKAJxkF2PbvXGdkeQNt2ytYkoJmAFL6ZLt2piL5nFyMvWepXf1R8yCUKKSunjFF3vhG2u8Xxet5x2iRSJurbV3",
  "key16": "3ueBH7nGh1XasAKNuFz3KhzaMVQ4pyJhqgBLrB9kHy1Bpwd9CHeqJGiQntzY3aBA3rpEPagVsQ7krSQvsD2geuuU",
  "key17": "3EyMQmwaxEruzmvJWgH4x5geeJ2p6WThgfX28DHt14zNzsUdnQ8sQPPWjUyGLJCLaLLzJz2ehePtGfqXeXkkzEn8",
  "key18": "2e6qmJ93xqdXjepfWgvBMvfvEua4BbH69XeMeyDDdRA72Hn11XAEB9UQLjcj4JEdKS2NCuLisDRG2qg8aEN32TJB",
  "key19": "5QqZLb22ie4HvVXa6m3zFHqgGurzxcTP81wP3xWEHXowh6ChRHZdwX7uHpAJw4YGQLJBJvkeBWz1eja3X5o38C3C",
  "key20": "3Y8WoQvLWPhWMbajaWjz4QngrtPGpj6heVDWJNUFykE2kay8YrD9Rp3VBwL42bwwhBgdGywNoipzRrjyVtaRauUN",
  "key21": "oapeKtsbKot1q9UTzNscuCQV4LhG9VR1G6gccr7XJMDZfpt4aw7WdoavXr8HrgJ3H3zqi4STaiRqDMPQ2K2PFiv",
  "key22": "2GKh3KwhCF8jbYNhmt633HJ7AyMaQnPkPw5B26evuM3MGmXa5J8e3d9bAhDewrv5NRFhhCrGQPh9hMBPx5KJa5j3",
  "key23": "4HkMGJQaNtxeK5ovBYTZQSczYjKXthVvwBfxHYzp287knJD9HS32CPW7Tf6WMY1YGF1nqox4GYxa4DJYXxmC1k3t",
  "key24": "43VLkZcnKYTsAWmyWynwA1ve7iS4gJTiRBwAVW7mcUawBbo12Bw766LNZ7d8TeQc2yyDLXKzXtedsR26wRd5o195"
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
