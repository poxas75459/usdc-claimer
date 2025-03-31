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
    "3K715nVKUo7mDG5DhzzZHshRMaDK2h6peEpofkkSSqwZVtvtriAgdcUVCwF8woKEKAZXUra58JiSHQr7CGkByrAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Toz81ReBu1EWKSwTJzQFKJML8hq33zinUv4DuUJ5Pg7zRjqYnMsjqBAnz6wbziLtgYv8EbfFmd7fk5KPAHwqJS",
  "key1": "iGrYuLiWzuGgafaKZmSH3bjKYc4GP8fdpopqR4PkCb4XVZ7Nhmet5EDa2pdxTvLJgUkskF3wmmw9DZVa6ABVxXB",
  "key2": "3Ex3vpEGHG7c6jkToJ4QtbDKi1Lvgko23wkhJuRJKUJnBMcymzqMP91EKxnn9GAVqmFFEQtwcNfgpXJqRQpLPFU5",
  "key3": "4Z1A5Q8f9RrGXTxaStrHYwBR1GXGPDmkuirY65dCMKXduqBe9jkbwNeiBbkF3UQR1C8CDasr8bPiLph6DofBBK2v",
  "key4": "4FYoo4atu2721FDqWXgnT4R9npdUykNFrR21W549CKLv1TqApNgNv8URuBeoQ2ixQHAieqAYejKaYhHpEMdoY5zW",
  "key5": "2xjLsRo4ApnQTsrrpx58SvsoLtHttEifVLJU8tpGX8krtT6znDgfqFdaWkncJLr9mfRVGRD1cqXLgQ6oBWnHm4RQ",
  "key6": "54mtaGNDZX92V3vLzcJRn8m3SdGN2o6h7pvHqbK6E4GCeQAm2yAxpQDDAwAwyGxRrvGmauUexJ1ahcmLEu46tqmk",
  "key7": "bqViqsSEm5nDfeYgMXESWjgwf2hXsFnTgrcFJvQUnvfQEZddzXMdBZUmHtAEGoT2w4pWUH3az2fmh1YjsmFhhbB",
  "key8": "58FsfRm8Wt8mGQqGX7YFjykxCte5ejMkzKNnJiyRVwRVBdHuDUQoF5bZFvHaMAbitJsGWxX3ckmU5EA7YRMtiMtE",
  "key9": "4CvqQLa6nD5rXLiMk8P7FbcETeRQY8XgFqwvzG78HHVu4tREqsoNmGrzU1SUSULDFhfJLLwo8MKBrv6eNj8fXLkk",
  "key10": "4kQP3AYXMnnNgXEWDYAAUnRnzkdoMEZfu3jyLBiEhPP5f9xPVpRDXJntccY3HWFZWuNRqWNWfYuYpdFUb58SxoZZ",
  "key11": "2eWMgT3UYHATrCFEcb98ZJqYgYFHQBBvdTFcPkEzLLuQcaMTwpdtKWv4nx7TPn7EEu7C9YkajAakd1TwDyUfFvt1",
  "key12": "rzeVEuYgkLw1hmDBXLsUeGHVqPmPxfAbv2j6aP415U8uiVqRWfsqLDpSRsGQGapirapxUxvtyzJupZi4gd4Jrws",
  "key13": "5q8b7zLLTcKdD7XTWMkrWUu995RgrNj8d5C9KvSXVXKfyJ6MBEPUzBT7qoSifotPMrgfbvfCTTvaT14fvrVJ5tio",
  "key14": "4ykicWHtNpUvWggGMwTLxbVpQ4EY7uz1oD78jkUAiUUPcnVq394gCqaycvysZUn74wka9LddrohJ7yXRbsZSzvUz",
  "key15": "2shYz3zG1jxuj62qWGHyw2dKk2MNTtNKfkDrUi6ynLb2a398qGRzeNQdCeQLPbgmKyQKvt6cr79TWDXjFfz7XUfK",
  "key16": "4nJBBF73jZmBbfqpAyJzkGe4A2X7DF9xHn9Rd1Z8Xayr5R2wAPLVdvm3Gi1LeYrS6jWtzuhxp9rV5Gtzyq8Z1nh8",
  "key17": "2qN1UNoHyGqNcE5avESKrNGRCLWfJL6DFBF79BUZcGBTngD2F6phmXzF3zbZf8aZkx7UcLECqTRRa36YuqwZnS8B",
  "key18": "2zkJTEVjwqPAf6cyDxUmB89YhjbRyQAsF5mWFra9xypzCrLhY1pNdGVGPwFCayrDN9WuZN5ntFfqiKjKVXQjiPX9",
  "key19": "VN51F216WjyfXgYdocTX6NvkbQeiBjCZxd1S1E1AYCjiwcn9Ph3kArY3kL4EVqVMSe4FWPp37CLW8XtrUvFg4jk",
  "key20": "2V9ja3Vttbqfhu8SM8SSA1kJCPafhW5iYRUwxwss6KJRQezKBz9VLpPevJ5MB9vzdZxLhS1S35g4vzfobgRH9XRM",
  "key21": "4J1eUWyqvuh6TW1NiMrZmL4qX2LD9XRTKESq6p6jaqDCVaBb4fatL4FNb3HTUb89RVpc4u1aJjN4LZ9SYa7QWnQe",
  "key22": "4GbbVeqMPtUbnwaNFx9DAXgNJpw5MpQ8VuedT5aneH9bbNTMA8zfy5jgqjLMxgozVwQPZFXq78wVusjxfqz14shn",
  "key23": "2gir8Fkt7H99RsaXeuV3jA9fW7Nj2mQSmHiEnKrFHP7TufyKPThVHcCUdx3p24jqBy3Uxn3FWT7bz7Qke8Z8Y5ky",
  "key24": "5GEMjqQAx8kq66ECDbiGhMButhcKaY5P8nUrzsPn5vmipAfAURHBdbB124JVFsHT7NLZb5oB5pHsWjQEPGZjgvNs",
  "key25": "4wVMeNjLUtqwWoMDFzgCwSpxLM1cEi2GX7buddNJuKBdL7WvjAVk8638gALkcS6vJzoqfS2A8g6xRaScJLvCcWXD",
  "key26": "5ds7AKhsNMWEiDW5u7eqfitZqVP55DuwFaENo9WTotxAZn939h51rDqPRm2LjvJE5oq6Lyb1UcW5XwZUwU32Cj78",
  "key27": "2bM8X2mqgDctcxeRWeHzVnTRy1s9gVN9smjw7oeokLJdYn5rvHmpd9u1nuLSKBTBUfpe6QbZwQ3VeiGGa31SHp26",
  "key28": "5PhAnu1Q43WZTiv9WWa2vCcTzYWcmWNo3R326v5hUEuuhEVzXpEGPRKmGh1ETrBXqNUvUxuvePSuxSPKQbX1jhba",
  "key29": "5KECJVZiQKDgLVrTsby7j1jGaBetAxWKczoBB9F1TVrM3xpy9Powfm8vFnoh27cuTqs75hLRveWehqZjWHkFybuB",
  "key30": "4A715NbNgQvbUSq3qyyvGVkw6LJQwqiXquHpFzdnGLHh3w8QL27uYH4N8MXbbgmAH4JmVVxrcKeMXohP8G2Uh6U3",
  "key31": "3fkdQuzxf984GZAXuwU6FyTuqxVZozixM6RK87cBfs2FdJNxTZsGHivU5BxmFtvv5hstjVV7htjcHdUkTcoWUuq3",
  "key32": "51PV7bSnPMoY7ko2R3VLawW1pNqZJ5pY7HFQJE9StjBWVaxhUXLibwsEq8DCaHBAxPSqUsLZVxV76QAUPcEuVgPM",
  "key33": "s6PdWDDQm5NMuSk1pJwwzuur1fm2qi4p96AJo2ZodUtAgFedj4taUdy9vLymCyV1TpBZQvraQWY29gBuMPPLwFE",
  "key34": "2SzDQYiAMxpPLLrPRqKRcKZTe4GToaaowt8cSqxwdi1sFyhTuCfyCKQU8QgqUyhLqbPfVFWg5xg3BSyH9cPhFRoc"
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
