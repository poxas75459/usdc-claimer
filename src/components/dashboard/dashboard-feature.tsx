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
    "3Bd8ZNFDM6qSz3gtW5kacXnhLv1afY4fEnGx37LcQSr698paGQP2Eojy6S1VX1kjWB8j4eDSUg7xC7CtAnghYdGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yjt6DwoGQzSeiWtUj62duhFWuj7TR5Aefj76vZ1o1YZyZoSKJuwxRhydwavT5xcqCjpquQBQJgz9KqfQgVQtt1x",
  "key1": "ULyJpmikxvh8JABrNssmD5sVjJ45P2fHTaB2jELDbTiu9EgZ9FZbo1srr7zJTHTWtPoUwkZK58oP2DpdJhNqRY3",
  "key2": "2JnHZ4h6f34pnk4qFQgtfnE61gT2oaQbHPMpTzwMXrUpBxMWnVcSsDvGmqbzREFdiSL8HQ551N6Dm18CMYjYDTgi",
  "key3": "5n9z4qs8htNuzNJkXS3WeXUp7KXNwZn9wMaxYaY24AKzfn7dPPrUTgaphT3V5zU9wDKkZcF5iYdNBQfSkrC3tzZg",
  "key4": "5sQwnpTvKux3x7i3WymAdM79bnwpbGMJCFP7AcevUgVjM76cP6wsps8yGsbxW4LEumq2Cyu9xsH4xABRoXkLU3db",
  "key5": "5RKEA6UuGbfXL3BZkkvjXuqw4S1KHEyoZJJs4ANDSXdk9dCrgNeC7RCGAnyWpBc88Exizo8uTkrS2uEcDUAxnF74",
  "key6": "4z9b1zAjYW54NXAWWSjHGkzQct3GJMy1XDZUJTJmzADXqT6HzvYQBYpQ74BXSksbmCmW5Ew9efcwe1otC5Umae7e",
  "key7": "4enbqwamfHrfpsRWwRTmGinWpHHTFzuAeRTcBdT7a9Gn2nieD7P2nh7e9cvVJ4446mB1hNa6CNa7fnkEow35xwu1",
  "key8": "TMhS46xwsYzSEQGEmhzEdEkyNPVn2G87ziCoseupWuUFEhLhufApeJsJYjsrZrx111M2ALh4eaaVTsJ2s8DSigq",
  "key9": "4bdfpuViHseWLqrt8F3gkH86SYRZYKXj8pS7Bg8aDpdvrMr86aMmwKvLTvax8bdkYKFgMtBFhQ3FzDwgSDBb1Sae",
  "key10": "38p1E1mWjpMtnkCohHgA2nP2NXpe88r6sDoFpRrEofjCQLB1vfMgyWpHLSwvnU19uDhBV9Y9iJU25p6tkSdTBMSY",
  "key11": "3pmPiVXQRr1SswoZWKisqjHqRQikV6kDEKadBeRVvXvnKGdd1TKWen4QKYzSu3QySnEHdYTiBKPrjDNCyobf8hGK",
  "key12": "2VM3N8mhbs7PhvwVVA3AXtNB1oUX4i3tkeePWmiL15Bwtru1Ws5Bbiv9BXTAQDskgYB8rZgfLCmUedZsJofgqiLS",
  "key13": "62my3MPNdyxEjJ3FhyEqavSm9dhdJqSuzu7gDmCjhwF5beZpoKNhyBaEvAAjyAFDQJ31HCZwN1JFEr2PWfLyCYHo",
  "key14": "5Gy2ehyCwXcuqu8KpH5rzmHu9occBHwcFemyKEEw3c49x3uJArwWjxia4iL34KpQ7RBKgK9FjtB3xHZuGMFmPgPR",
  "key15": "3W2JaCNYc4TogQkUwtxsCpJCh6LjeqUDB3ZpeETRtmpPchBXYfR4FFbMSAzxgWFjmMP9GEqMwNkGrZRhd8fadNM9",
  "key16": "4RFKGK9qjkA1zdqoAWDPMWNLDHVCFPUkEH3yWrmUXd8tfJd8fRkGnagjmVskypqeDvN47Bh3yCg8UB4xVpVG1Nfe",
  "key17": "Sw6jJW8RsSzzutYsjKyvh18rupFQqSL4Q3mY3xLo5mCuABAcoQXYRHv9mtzc3kHJfJmPpv7LzreisZ8qkJrcj4A",
  "key18": "3eFPPybyS3uX5gQCbMttDtVzu2qHfmYU1wk99ozAADXYSmGiU3Q6kvCPPZFsjiDrGLEHeQgzxegcrreJrRdNKmzW",
  "key19": "3kcxNgXzPRCEJYGiXG65mtXD8rDxn4gAdE34dLbhHQS61UtytDUrAR2iGiqkQQ77EfPJJ5YXJavY9Y6jx3JsfNqw",
  "key20": "D4aa7mXkQvpZKpzqdudxQ1JsYmJ8L3kHVYVLmx3Kn6Fg6pwK64p3VXmjQ6S1EPWyZQ89khCbnMzwhytkEL1rFf8",
  "key21": "5cqjtmCoBK36fpMxVFywJST91k3DnSkf5v8gvYsq5SdbL6tpKHHVBr695wrbnv7c8Vv2QDQHTPNU7jPEL2fMjcLh",
  "key22": "3c7KTdu92F4kqyUgtTJZA23aM9P6YFQaZ3rSW51XXKQKqXLkrHZXFm4DipVyNDS3mX3KQnD1rtLxsFDSuamApdmV",
  "key23": "4xgL7SiW1T91YqRGFaSnst2gxY7ywtBuHz6f7CvrmGyRaBcnsBVQ9apCnXh6kGtRWYyjUyApc8Z5CZgxNguY8rBX",
  "key24": "3mqYVCgctPhSq35DQMNj2Zm1K9VYziP8aT5cT7DpjP87v1KonSqAJimXV4mRP9mktXdkzajDzD3Yo3YyjCb1UANb",
  "key25": "2WbM8bGXUc56wjfmRRu3hE2e11BDeARzqQ5KmgeUn3ZxA4nKZmciRffFaoe3doSx5cHwHBZ1WwD8PaGG9TcTziSU",
  "key26": "5mYcC9ijA6PXexpnFZZXzZQRBgThht5xTzmAUuuyeCgBTNhXF5UitQ1DEtpaYUuCkhFfj31XNp3Ty6SfPBdRFJcK",
  "key27": "2EvB1hw2QbS4MH1zGLXjHgiXpfMjet4heTScFq8Nsn63Jdtk17vcuXckpFbVR6HbE5C7hdkfkBZjtFDNK4yY1s8z",
  "key28": "2hLz1EfLbbUSDU75cannf4G5aSZLWcCsGcEXyftB43o7U2AzYpL8enSk5ktSMXjADc3jMP8h1fLy1H2Y7jr8qzmE"
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
