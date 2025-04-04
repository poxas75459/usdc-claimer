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
    "2rPJdeNv4HBR5ZtK9YcrsbdRpwjSmh4cjm6y4wPgcvwY766AHEdzzNXBZct3uSJ4iPSXdu3TzhpXk4q5FoNNovek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pf4GeH1JmkB3dUY3uvitHrd9t78mgZq7Zh4T7Nc3deqdwpKPoo8YdCF6kKS74VPW5Q9RVNoC2gcE15SWQPW5vKi",
  "key1": "qBnRVyi4mSV4PMYXrCxszemKWuhBR7Wzv26d5EP32HZhydDxxxrhaWRH1QLPV1rxLxvNm8tM7Lvowc3ra2pwvTX",
  "key2": "4HYcHvmpJw7RoZEvgA3ZcdhRek51YdZ52xxfCEbfZEtToPhtKQupGKzrqgcvPx9xd5yvZmru8VgcWJtvvn16fqFF",
  "key3": "29a4kJxVUkJb4LYVp69iZjEF6h1jCZRMHnWr5WeUxjoeigZUH7taM68cFtSrHx6kAAiZeikcS4ShqXjysizqxL2k",
  "key4": "4oeq9tL72r6NNL2TMs1FgSkcNoVztcKefAASB4YQaLEgR9ppn3J7qMNDA8sXREyeD3uemoege9TPt9C8CuGtra7A",
  "key5": "5NNp9jvK7TJjH9SSy621QWX12i6Udid87oQXu3kN4nQAZSRqn6iEjc4se91A6HetSsDicPY7KnAu5dQoKKUzpinR",
  "key6": "3wNRLXTJN3q12CjdwTZe4fvw6RCcMeUHeC1LqCbBPWgDAhHNVw7WH2MkM58HtPSAUquE13JV3Nhy1ykcagqAg73p",
  "key7": "2v95tMBp9YYZvHgu8dNe6UxPWvTiEY272FxJFAPDaYofcpYyGNCPeKQyRyhYa56TMfvgFmxZiCPrkhRhtSrTN2Z4",
  "key8": "3PVfC3xF1NZ1Va7h9rhkXdBccip8W9XQ6rMUnArXFfTdf8yCLbkMZCGz5ZDAxYxisgTAPH15c7yTob4FQkakhb4W",
  "key9": "LgFFtS8pDutrhXDyU8fSBjsPpFAP4qVHEpeXqnq9BHaKfh64XKLZ4a3dmHqAwcKCKPHVnUWzXwQKynmJNs6shP8",
  "key10": "5FoaqsFhucUtFS9gPZg8a6CHEbSyqaeRBYWvfYUd7VU6Dr12d6yJpYcasxZU1kHKcygb38CJYkVBmpQYevrAzQiZ",
  "key11": "35r2DTi1i3e3EeHCe6QRseCimBmXG1WrvqdL2SxJUbRgxvoKWtSLUBi5xwMWWAcGZRH93eq6v7nmLUk9TwcWXe6a",
  "key12": "4okGHPqDQFE3KgHaF2vXWoQVZyQNvmhXZDoEaUWx97oGt1qp8PD2WDYzzjmsNbBGGaKb19KyuLLm8RXYCYZvq9Bq",
  "key13": "3MENo1gwtsq5tX2h2zeQyN9rc5DkTqed8f5WoQb1wCyZcSFofJTAHdtEx2HwVQD6vEscUMZUM35tjhBVGFrfRSpu",
  "key14": "GwmYuDQ3bMVouaaQApaWXb5nBDKsNgdT9ZTMBbqEKS97jC46iHaZ3tRZNoBwaEpUZ7dShXrLTc5G2p7txPF4JAY",
  "key15": "UBu6rkqfjG51YwWS89Q628HdyeFDe6PvBAjj7dEQnDTBSy3Ja8TZA5A1qKStCnGjYKS3SLHLqr2kjT8yp5kYa2z",
  "key16": "5jZdukBSnXpaVLjBszQYesBL7NL6Z2aabnmJGmMMzn3bTjw5yeeJtJ3at5hG242m13LftPa4U6BD7b5D3NbH89FJ",
  "key17": "6vk7mNbZfM4hk5iYvVsCsrLCUtycD547E1sicBsz82sEPEwwUhsgSWjShjehBstLCegUurPJWtK2bcGsGhuXMBm",
  "key18": "5Ar58xMYzv3TLPdHrqdDK4xN9oRXQwfC8sRxEo3NSEXzKsrKRfvT3EtidZ8vQeRJZFVWBcNSb2pCssCrHzNhjKT1",
  "key19": "49FbxWhVCuSJtoFdemuqdWxqaJvcZsXGxZrYNjh5C42dKdsKyD1AEnG1DbunXVbiJYSKQs7oNgh4FxzzLyupFRJa",
  "key20": "5itxiFMq5jX9cxDqYYzoNqoVu6LPi8DGrUVy1CqxNZw3M8m4z66qC3WAUX8AVYYyyFDLxW4MZfRYgS8NHzbkJdrd",
  "key21": "4qmm4Cmp5MX2FjXF4q8KDaB3ADLRwdynDWn7px89KGHLhQzcPRtCZ4VQCA9W9WUxFeRQr9hQF3DMzRDnwuKFYvQF",
  "key22": "wm7u2QFG7cC1yvRT9NrczTtALonWi3b9FrQyHGaZrXxJqeS6yfofrKvbZ7SX4ow2FTaUNDZRNje3E8daocsciKE",
  "key23": "2JYfw3TRRJFu23BBrbyER3h1vrWWV5q1mamhGj9TL1SbGGJmed6QriDucL7m7h6Jb3w1oLKPAqAmHHaredeAK6pj",
  "key24": "5Dghnp1XCFCHR1Qcw2rfwuSCZ93AY8xMY6m2XLUjyjGDkw5yEjh7K2R1synpxf3tEcbvhyaP1fTCt4Ubpoj8o2wH",
  "key25": "5eSaqrEwyody3EfQsYPzxtFvV1Yh6pJkasjL9qC8hZBGguPmL9q8M71prpc9bM5v6vjy4whZNg74WMGwiBDPVVaj",
  "key26": "2tKYdhAUaqgHnVX5VWKAYmjt6o57Mp1gFmHGwGXPjTv1eC7k6TbZgAEp5nzHPuwNAhvRwE5zg3rweGqMBo6Fjx9w",
  "key27": "2gKFDw7xm6TCdCN4YmWyhFN4mptDZuT5FEYbqe1HwkV2ppyAHxoK9C3gkW21Y7F1rVgHQztJa1yMKDgddR2NLx2E",
  "key28": "5UuPgdSAFrPbk5KxfH3mwEk3EVY4abWBe1T8ViSyzqnLmF12QYQ9zqfvnsUCJDdYgpp183DdPNTY1ryHBEypmozL",
  "key29": "2aSF9y3MTxGd6DEva7jNs3LyZnfhak7gH5xi9BuU2FkYNC6ZF19GeV84c6ymdjWPR39sX7zafUzgxCVavmakx5di"
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
