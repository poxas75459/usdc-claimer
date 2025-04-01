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
    "5tff8RQuDLhLZDnnKH5Rg2BXzenR3QZVg5FQdxYh1GseUhMGVzvcKiBRkVwD4PnBmNezPTb6Bng77rdgfeUJvNiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KEQK5VDx1UXykBBoV5BeDgKAGgFPvJnmSPR97biM6rDavHePyvojxuD1FimTYn7g2eESE8n9LaABvFWKCQMkBu8",
  "key1": "2JCKgnw5czFKzMxoo4bsrCWd1s6qaczxg282edbixMu8kWWq3bKWYARUCdsBXVu1kBCLoN2tNWZw4sX6JfbTRgRk",
  "key2": "4zJYYPonZFHk3QsWuKsEFQSWboyVYf7pHmBx5vdNRidZ6NHWjJmgPLpLkHBEAiTmZSuMJpvydx8r8A2VL2c5japA",
  "key3": "4znX1wJQrRdvw5TXrG88yaS9syo2nqKXJYi59SagbiPFaNFtLqA3SJhZZdPcrBtnFG7iYBduS25dsfRBh2bnTA37",
  "key4": "3oiRZ3Ri2ksoGAom9jGKdKUyxJ7ThfGeE1g2sitzK3uiiRRsZGb9ALU2ct2a7do3dJXqNvddALhVfRVSfXJrPtBL",
  "key5": "5XA6LRwD6KkVMdbS6a9sf3p9tRbgaGLJeyvCZGRoJLnYnrt1XBi8jKr6c2As3Gx1CqJtf1nK85Z2Aj9MX3SvNZyk",
  "key6": "Exegd87Xx8TYMnrczPxCVHnHRRGK1NXcsVkn7PgbCaD5Ufj8gcxipyVVsb73hSdgaaWc3oRUSm8aPLJWgGZUxwC",
  "key7": "PmJpdozLV9Dg2hjHKZcZrNdBZBgTYi3GaMAEpc5yorybLce36tDNYNwAYC9ZdZV9xDV1bNYeNGLDYaQaL2rcmiH",
  "key8": "uZEUKC6X9HCrcEF8eWevc4hepq4bdLFFVjSxT2Fm4njexGqDKir68Z5X4dWjSu4eJubtkPsCAthCRokmaDGdNah",
  "key9": "4VuLKVp2dQjxvgWAQo7u1g2fyp92wXqWWG3tQrpna3JPzYqZApgnJVyuELmieGo74XxMfiJwMbfmJa4VUp2DACo6",
  "key10": "3Y7rkKm4h4CvDJw3MVFTbELTBDQX7bvfR4JXKEQujfahffKXCJLEXV7ynm4v3Wm5KjuApuYF6zxDQk8AqYTSeaY8",
  "key11": "5wPdrT3E9nuEXD2kJWkRPepxk6vvSdXZcamgZCWgFDmH2FjBDVFWqff3NUKCN5mJLVHNcywsLCPBbuqWUb1gGt4J",
  "key12": "543rHhJkwb8L6bNLK1CizgvQiD5Yvz3zh5YM3uoWAEkPVZMSmcq7Y8ij2iMKSxARgNohBYbQ5KRBKX2iPGwEoLiu",
  "key13": "5pf5iavQZXLmfhEjy4uNBu3WqLf3qWu7d3BNxfAgKz1tjWFTFGSsknNP9CDhUihBDgSPUeGUML8yBzaXR198JEkT",
  "key14": "4ZBjjk3MmMEta7Z6iiPy3Ls8vNuj1N6qxaHcf637j75TFVseeLkTGW1DCwrXfz1qGnhyCGLqGUqzbWsMqhxoKTce",
  "key15": "4wHHezYEcqQnXH9bJdArKetPLcDMLXfhYJP5wi5t8JPM4xSvpzUxWnHwoAu3PTX6CuE8xRkUZwrvr7M8CgVjLHfG",
  "key16": "3qerv9M179vVnxbVcUF8j4naCqWKWZwcC5YhCqToY26UVe4cdC2JBRRHjmH6HSWpJKBx5Y1CescuMoQYB6QRCMHz",
  "key17": "5uJWbhBgisX22bpxFKeQRYtYQyosz7DULUiZXtS3ZoGsubk2V8qVQompJYmQh7MWZ9QH4ub9ALo8y2BcPo46C4Gw",
  "key18": "2GPtdi9pzBrkHEZxuMMsaSmtHneyYBuWJQrmCUtmsgDHLw6GVXjS3z4ocU8fGupk6t8mShDGiJk8RXaAtNNV3VQ",
  "key19": "4y4G2GCt3zF5YNBEQndAGkgqSa7ZtYzfEJxqAjX5Gw91KUjG81cbr9q8W1L7Q4aroVHg4mwLspDXd4r1thn9r5Hm",
  "key20": "BU3GGu8VfkR4Ln9cCAGVg1UTsMKGt7TZVMMYhhuh9Tm3iLjKBgDnL9zLFttJVzhYEJy6u9ixVLjaLU1X3EMpjnG",
  "key21": "2URZTbgJt4K7bMrzxu98MZGciJd9XpuPm3AuTjhR6vcfjKVTnoYt3BWffznzJ5L3ntAPwNn55gaDAhrc4q4GxvLv",
  "key22": "5TKwt2pvcQPFEEEfoEnzk3p6PMiqRBbCXPFqzrYbwS8UnYNVgSQrbGb7JKuHkJjFQJgVVNwt8ndk17P9aNxTJoR1",
  "key23": "62AAJHbRbmfc7KWjSxjrJCY19ZkebirNNbc5ddeWj6M7ua2hdjgio923UgdMFGsjB99kKNsWRJbcyN8Ksq6Agxis",
  "key24": "61Dde37NW8V4yQxuctvionXRgECxDn31wnGAQAFUSx1HoWYHg51JfeJsuEat6RE5uMs47QMLm4j1cxUt8PbjADbo",
  "key25": "5TgetLQ3KS6MdauhB7UvftAZERLrPJW55pF5EtyMLZn67DXpaFVuvWR6y1tvf3DYZNK7C7rtf4oqkKpnABFpGHQV",
  "key26": "3PKSwz7ngczrp5PtAzm4N17ibhgXXHoCTQExBrarcaFzErRozufPVXndcB2xBJqHJ53vG6c9t5LQyHApFs1ji977",
  "key27": "561SyTi84i1rmSVZWMVTZ6hL3tQc6nx5quToetvSY13LEq5VSwvvfmJfZtWzaH25kf6PJ7xVj62yf5JqtaH1T5ZK"
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
