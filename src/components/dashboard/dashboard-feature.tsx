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
    "3Fb9zTtxGPbFVHudNUtF2ZAPwsegYkM43BQEHr6ADZpopS1gcDKdJ39kfRuZFrofAqyeorb7WcNzJfQ3VvR5K1qb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53t4RHBG2mXNCaFaXbihSQgPx89WEgdC9M6dJAXscVW6gXgEzR28dYbrcizKWXRw5eaNQEm8uSeYu97t9LrMezM8",
  "key1": "5PktZydmeKbAabiS1mBDXmBkkqSQ1nMgmHrcGsGFkotz7JVTjo9NZogPdqU3gTNx3PLVZmzc7sXC9Qez4Sq7zcBe",
  "key2": "ZvPtdsCxdBb5kawHyLnN1cRYBw1yh33JoFsqor78LzofVNztDVHs4VGie8FHdnsHeGoWpq3SGmrY1vX8oucw8Zx",
  "key3": "3z1Db8aVRTdVnGfyo7cZnLgdRE4yniu2zjvniqLBRNjZxgrFV8b12iy8bD6xusBDYYbM1puek1wbn6XFC5dvZt5X",
  "key4": "3hpmbVG4s1Horgqmj6qbLDp1BY4Awv93SVsfVrbML1fLgeBj3dHyngxvMVmMpRobq8mz4w9F4nZ8bc3dnjvzBDFx",
  "key5": "3UJDsRirvtMgNeJKoABqhr2DiiY1DVJ1wri5T95w8qQprWhvmBkPcdz7LArwuyTHF5p8mb3SHFmTmXm2qkTwLQVc",
  "key6": "ofNC8jVAoNQ7XMBHYCu2WUFbmwHkMN9j3vej9QriMRqhJ11XKABBZoeuCn6PYoaaCSEgAMhWTfZz8vWyb4QksVv",
  "key7": "UFLUNJfNoGrcpnNsm2a1PCmQT8gf4pztnutWrB5wJABBf7k1efo3u5ZxTmYhQPd1K6XQ5fHPW76hw4uagdC5szu",
  "key8": "23hdpvKG5EcwXJ5BWkUYEQhVexhfYsZvmwBvqhdHxWog53g1DjpaAZweNmNhEuPdGZi8XS4RPdL8ZcN6uCQcmjkz",
  "key9": "3aNSWCAW6XEBjh7YX8KYu2KroYZLDric7fumdrCrVNQhoN6sXA5hoMi5wwqTpXejM8xPLtNRQvjhgPBDErAJkCzN",
  "key10": "aTqxkEyKXpxHfw4JoYRK4SxKJxuNU8QDeiwTqJDVXqEaFdWVG8LGHDpeHUjvX2N3m27PRL6NRTwM3QPauPq5cWv",
  "key11": "4gAi3LE4mkji49F2i5P68cnkuy8xaRw3URsMT2sGmu2i7cV89F9brzU6wAj9q1B5kR65PM7m1Dbv3fUHHDY6W25M",
  "key12": "4jqta8QqbXvEXFS5zZm478qMx6hMbvBW4ayx4ZpvmW8zKAtVfGkju8MrntmEkWAfJzCsemnzWNpa4HLaw7fGVkdm",
  "key13": "4DFAnmbvDZuj7AvxN8zczqEnuivckeZpEiZcWr1pZT8fpDJ9jDKFbHB9z2KWDmpYS3DNv8JqFxHGmM4XxJ5qkmML",
  "key14": "sbuKydfJMgKfEpm47WKVEJF34NJyUqtXPzSWpueAiYeHz21Vt4mwTWttSTH9fPTK8WedwhQw6Rw4dGT5LcL9nsn",
  "key15": "5WwSh2E2bawDf4PaLUuZg9ka4SUYiRjrqbwc6mvTEZ16ogEVKs6Fa4Ufe8rVB1yAWYvwmMfBhizj8JmkHBGF6TZF",
  "key16": "hoPZ3ihYELDWRoNkmwhhxHmCVgsZZ7QFWJTYSRGVmqCa6AFV1H2mGEniVAxasPMiW42oU8A3zbv1n84Q2NkQ6zw",
  "key17": "5bpH2JjdsJ4VtWUeRj7y9Md2c1csVQYKaVMysRBQGemzLVjZSfWZPPf2nXJNr8FbNs998dyvH28g2H8xRzJq7nkK",
  "key18": "4YbEykLhnhr9hxReUb6tEKK1WfmVSWFqGMqUb2dfTdSai4nhXoWFkXzKjPTEgamS9YedVV5gQrV4msCX2pYhQ1uB",
  "key19": "2HdnUXSknPTJc6VnoByzyp8tUDk7EK5SJTCHw2QWbPmtJ2oWuEbRPkdVzMxnFsMfQB1gXZHfkvdZsVznZzhJX7HX",
  "key20": "Bih9j8dGoMkMWeMukF3famqzfzi4z3iu9Fc6KJhhe7VNrDhw9hpNBC71vZqbVGLLuqZ7GZn25V4DAzVQL45Y4t5",
  "key21": "3uV14joMr8zWL9dm2LXZLiVpDxghDRdCRymgMk2TK18VUWnBKZ5A7Lc6rU8ffrJr39FYsjxUvdgtE3F2ZSs8ws9S",
  "key22": "3ewaguLALd9PZ2dxvEA9LgiN1CFJZkQ7DeFZWh9AcMBzFLf7gux1DBdfZySVH32hJKvqgXM8M2zh2YMjeWvUNSi9",
  "key23": "48w4rkN8ib9Ue3frE7ZvAEYzzgwY7F3CNFjKaBcdHKv4dJVg4uGn6rcMzJmtcXowb6HKZtB1euA9ej4DFcbQVE52",
  "key24": "5uqQWWkDC82EsWTYDQRkrtqwLoZe6N6RfnMa5qSqoBp359gr4ev66RnvPLKT7WAbhA1eVDKHp17wJy5dh9XV6YnB",
  "key25": "5eDaHGKG9sJ83pndNZsvMP28Fy9kiohDRAKhXdAjPhhsSfTh6NPrUXiF9j8Nwd3UspnRyhDbByVkKioc8tEqAR3Y",
  "key26": "5eNZoqjiVErxrTwfyzPvkQY99EvFMDCBR7GMJ6anbZvXHBbH9xmd6refkitap99fgfsFmSwnYqzcdBYLzdti4Z8y"
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
