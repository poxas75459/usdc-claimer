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
    "33BtGhY11GnP3tcUteJg65SQb4vfC8jtfco8oiRKwpTYQrkzfszEdHPAGFNYVfPihQgAPVF5wkFiGniY4GwH6HEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JK4khUY8f3MtqcGrLMH4FCH3jqEUBZLRx4BKWFY2wNRtN5uHRs143dSxypDmtTZy1ox5mfrS8NLgg4MqKoxpWuN",
  "key1": "3L2qbxDJVLb3Cj5JGb3cQ6xFgW6RXtYK858Df7zZN2L4bNvKM9ef47Nws6aoFM31JaHHSh2cjmfsjZm3AP8GCPRk",
  "key2": "5H6CUi9uY32RM7rtG5RjuV175ZxCcDCfVwuY2JEUqsqD1uLFPx82n8D2R5kqyPT8ujhYoAnGdToAdT1dL3pPTrAH",
  "key3": "m59vvwRjonnw3AXfhWQqRwZZjii5UCUyUjvx92BCmMeGNZ6zi83VRMCrFhPYqtEdmuSizSM4EFXKtCgo5juXXaC",
  "key4": "35jFPR5DW5rbe1xBFGnv8WwFmJxHxg5Ne5MPF6Z335g69SLQ1vVVqCdmKs9WeifXKZBwjArohYo29i9VJaZK37cK",
  "key5": "2K85GosN3a8mLnRP4M7vMHLYzkLvx9N7RSNNouVTbCWMAhvfLhpY87TEJ3zmA6DAGymciT9NJau1e1FeWtJd7Gaz",
  "key6": "2GehGnXFZ8582F84PxQsPbwMbPS3E4QpnTVwjZXNGMdyShRGAaAKPbCbGAWJmQwNVUX4camK9Xhbcwz9vyWy9jyW",
  "key7": "L2quhY8fzC55c5snAbVYnND8kt7jaNuZyL5y6GszkUWydUDEpVQ3cyHVeQTZkQRMKUdgyhxnFLBjRAY51eRJgQT",
  "key8": "2si2K5y9Zs1iJ2GSvvq6R1EuQK3cqjXp6eAoXJAZnfWQrwSwjZ2AzqAMGAgd6EHmDjhacVdT1AKaZRmoKyGhyxyo",
  "key9": "3nV93vNkqPfJc47UkNsNzuvtrPqJv2zQXLA57pK4zy71mYZeJ2Q7no8QUNoLtdo4xk31EicbmZaMs8giYtXgg8et",
  "key10": "2fd8qXnwhTXZs6dgMtQo1gbMfDjoDmVX7JZPf9qVChFAhv6mkyHh7KZ7Sui1xBmE789waykszjqLXjMyy9afwAq4",
  "key11": "2dr4kbEEFkGzRp78yrPZgy5oiCgSyNj7sPQ5yiduKhvo3c37QbD2NV3CXLkiXHsqL3vjWyThB3oQPeAF9jDMd9iW",
  "key12": "3HKF4DWT2BuUVE2RHKRyheWZPYaBovp8u1dr8A7AW2FK6dEEbdFhDbLugLbW2tHyiwZY4LRvjgvKw9NBAsymc96j",
  "key13": "5VuKmTsR61M9piXNPw7f3btaivYX98ccWTWGJbjCwDiGm2p7MF37VdQe3wzTPC2DjyuhMw1WdfeedwEnYtcuK5MY",
  "key14": "31ieTjHrVXh4rocvjfXRKwQhuLQzGndsUTXSHJsQEhGScoQ5BUzDyZvYbEXU8rtyBgrdK6J2GKTTq4V2Q8pv61pB",
  "key15": "5FBWzk8vzbnCxZ8uQDvD3FLZWtMR9xRzUohPUBuMp3CJWiJdUKbSJK5foCtVAbUj7aWwzjWcTgtnCCr8Jgrz6Ptz",
  "key16": "4iLxH1PF7LZDargWeyBFZQBX8MD7QMJHCQh1ZFy5ukQLZ9mr1q4JfeBhAoxSz6FSYdgVAXeCbf8wM6igxJvp6EMD",
  "key17": "3ve2URkZVWQ6LzpFaqpCmYTbFSNKPBQsiQJDMqvJykavEGcibc6EsLSjCzeCHgYHkMVJ2EhBwzWMycD7UYQDns5W",
  "key18": "5rWTijZyYTFVtMw4P5FF31r1RF2vZv4sguEvPQn2PHH2ecd2cUTdMWSK7EBa1JNhx3hrUExMGKAofD2p6GAEjcqr",
  "key19": "4QLYewRCymaAkoqjeeGr9GRq3LLp7k72qXnGmJciV2VhaBYisePYBYbVEpwY3DYujbaRGjEHMpfxUdSADUUZEFSi",
  "key20": "4E6hcLx7i6JcmK62c5Y6bkEdo6oGnEKWefGfkQCnzwpNegrHm8WUxhGG9u8r53DfHRGjAmFpqeGGUfLhQoXjLrfk",
  "key21": "3t5wa46K2bmdosMDUSK9Rd5HdXr2PbHbDyk35WDPJDBQihFRhifQ92XZpE5hH5nD5tenZC6aWSafetqi984Akv5V",
  "key22": "65c9EuyQd4upVh7ma1cSMe8o17JYbe1tap5QGFCABQrkTPcDtXGv4hpztRBKweib3zRKWtXBewE9gh9YRoZtXzWa",
  "key23": "nrdpLXMjSecqHkVQYi9zxUGZAd38YpkmLjwZ85S8pjXToT9DnYzqnNfbdArZFkKXajae8sqJjMpXqZGFGdo4w4F",
  "key24": "2dW6dBxpHgqdvXBGnckn5PR2dXRNkRdyLogiAShsHKxUAfkHgaQ2exujAEXTsQDwSHw6X7RGU1cqETjGWXzTjajS",
  "key25": "rcrEysog42jgr8jmfUaywrznR2hHRpgq9vny3mbA5dvxGBXQXPdLNBFwJLd6WaCPnJkC8wPSi4GJNU7Zs7JoYNH",
  "key26": "4zUkFRfj5ouTdZfEr3Jwv2dpCF92renFw9jHfumyzAwAhxkWafBLZCk5KR68y12gLVH6HQR7LAT5BBhev7DuZjg4",
  "key27": "2j1ecVdKppnZqUKsWwDp9iUnXc3gojLmLnMSFmrzGN6BHjfAKyP5AFrxSkNjf3rkSN6riX9mzgfwZALYTFxowUFd"
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
