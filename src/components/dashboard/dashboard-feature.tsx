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
    "2C9D53RDbN4qV1aLVucttJcD4A7dGaqhtPJkbGZwke9D36n6ZJjkgzd7c3HpAFDzVVhkFi7Q12thGHkK6pKHs5gb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29NNnniK7bByYWRG9Kp7VKkwRJAbE9TLLeWL5YrZsd863bgcaoDq3BW31sN7vJuA4AcdjD1YBrPGm93f97skMxMJ",
  "key1": "3MXf53CW2UAnZRwhDqK3PNo1bwasKgRqE4iwV6dgrVXHUq1yA5seP52tXUQkE8SfQaZkarY1rwkbgfR1heqQUnyJ",
  "key2": "4JbYE3nSRNisF71rsFYAfWgEsgagB4Ui2p7SQXvKDeNhva5FQVgppgxY4Uz51CEzdKsxwgREZ4hXHcmMHWMvkuFw",
  "key3": "56yXyxMRfBS5x1JprZH6cbYXQb1hwQFUmvmfei5suLDciB1eLwZtNVCHUZp2nNAyQQnjcbT43hL67kGFa6gqk512",
  "key4": "3rAGnGMSuH6ZSyNS8qmdvRMejobAKVT3JC4skDQJW28GUuMb18wtEt9TxUc1UdXXDMEahTsA1RVNtpsdeVYZzCNe",
  "key5": "4Ma4W2vgWTABC3S6ffx1HtWVH4phuHbDGh9fEFnYaVSbc7FymQsR6LLYarxKdgsMX92bvLYH18StRHUQpyo2kbZR",
  "key6": "4Lt6LYNnvC5gDZ2Jyo8CuiYDaWsUgRViZvH35e9VWDa6XLL4FrdGXmHNyrUYPFXEeYPn893X2Bu7wYXrkGacwUVk",
  "key7": "3mKbE2ZoapB23VGSmCaxCQhCiCHTJhetYW6gomNXafMyKbiXmozhciw4r6ZejbmXNVXtLbou45g6wLnfsjm4Y1ue",
  "key8": "5Q1s612xVjePRfg4ucfzGd8d96ApYYS2fsVmLNqBMSvkUcY2ZockxkWfWWF9mPCiXcBjhPEM6Adz9FE4X9sqGCfF",
  "key9": "2ofV4w7ww1XYZpShu29ibmJ2a3TKpXJbHe6W6jGLkscJzeo8NrbmTuCdNvQk3CvMdkX6znxz9xaczNPe7ct6YJcT",
  "key10": "rg5RyPc5JGEACb81jf8gXE5zqEcJYC7zRiY6EmhpTJ1fHipsRPZSw4dpvX7wj8wNeEpGGvbDicb6GDC2XzSqajJ",
  "key11": "2p6dAihTP2aFb1wsbMxoaL1H1LqjEBLNCKW9PMryweBZ6vKDtprLpawzMYBg1YuvKqWk39x4pXipsNyeFX38ZYk2",
  "key12": "21QyRffByPdWHW15t9rT2hVyNCQpW3ZSNEu9dTqz3ewYz3r6n1tc2YbuYpTViYr3GMnaEUkXc5FdfmRRuSKj8EAh",
  "key13": "3E7p3Mya6JmPvQYmsEkTJ9hNCHJS4TuV1D8m63WUAS9HFRQauef2T9ZPf5ZTJ52QbS9YWJCKDSR1R9shLHFuxCSE",
  "key14": "UJQrmvjwqPeVsdFoDVdmud4nndLZjBkT3XZ9qam25rhEvvH7XkrYvmUcopoQhBDeeAY9m3vdTPfefS27rPLHfWF",
  "key15": "5J7ryRAqJqpo5sqTUFEXSKZ2KrRfWXeb34W7BPJ3jYZ8FeeAyzKaNxnewnKWH7HGB67y7FCyqKwvEXfN6F7JtDcb",
  "key16": "66eq48sQVqqABt7MyVg6akwWc2sVfaVF2YTGZskNPXQmNzgcNrXKquWBMRNd89ycQBhGbp9MxgSi5EdCvvRzhJyi",
  "key17": "5jMMg6rAtxmNTmEirVJioJUjGhbwWiueYDGpCXqF6qbvhAV8TttzmLq1q7vz1J4C3xBgnbc1KwnHXHVgV2HeMkQc",
  "key18": "5Q9HXhGeNnNwKxA4vYLFVgdsjaw5xPnHEp9i7CXgLjQuUG6fKdZnekR1cVeC3oySXiyChfKA2SUeQLWtQxZmA5sS",
  "key19": "k1FvSWurDDU2DrxgrJAxL7CXpZXmd2MNADBA7HGctawskW9dZotRtxnhPYoMg5pHuxRF5AnuyWsq5W76aH7z2hc",
  "key20": "2B8XR1udiAjyvReoee6eEcwDMiE785mCBzbsSnFzAKdXMZ6oVHxwMwCNJDaW7vAXLLFzhEaxs9h2VLQV2DadsBCR",
  "key21": "2TZdtww6ozoZxy9CYsvp5AmQxYXMuNvbneERHGvZmqyLFvhGE8s2riuKYWUJnTe3eXYgZ3DLgnCuaYKzDro1mbN2",
  "key22": "4ALWP7z61oq6X43AnBsBh9hS3AZU6ZPEXXbVmrrrTnRwEWq41LmyMWfcBebC5XZ3suGrTDHE1LB2Gd9S3jXxx5Av",
  "key23": "26wT9LJRjmMhWmLvobR3oQZ8dmyADrUGmiBDn5TTciQuq7Z8NwwHA77oKUJhe4ScwNGRR9xzvJwZkb3ZumREKkYh",
  "key24": "3LBqZSTbs7dfbXn6vAiRhU1MdzpbkBp9kQTiyPjityjdabJjutq1Egt9T7rZ8GWWNyzf7irqL42GbScpsa6zNZeL",
  "key25": "4aLFAfMCfbQ49b1P3raHcwxw6mKKTrD1RJ4vCwjk5x3eoetFBsnC4gzuYhgXrQVdrgt8QcvFU5cj7G9x9YqXE83q",
  "key26": "2pbuFnBY4f1fXwHyLbtzFhZijf6jyvA5kmeqrV8JTBuGpBEGLEtbTiuWvCziZ5wpaBjAuvuM54vv6krVL1jC5tGn",
  "key27": "3zRSDVfhcrnhmWgGmZvYjpD41M5fU1BiHnZjLuVfaK1YTd8HxH13DT7q3VFXusci2AuLzgYJ8Hvt3MQ1crbjh4bz",
  "key28": "vsDyft1K78h5J4egxtbuqvB5qhmPHub2oz6Bj7J5QJCHAQwfQPgiFwnVZAcpK7aQa6ce2nYyn6sRA7n1JmqinRW"
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
