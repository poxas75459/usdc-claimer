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
    "2Y7oagtuCPzYorGah2FeAcAnPDwC5j3yhTsZAEaXF9FnVDx3rUUP8FijMRuHCe8hvszbeAL1KMiG5xRYdMN9U6Nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8gcyCvtHihCJmh5m5suTyfpEM9dasqeQjwmUpk6iNvkmEZ7dW86vFYs6HXznkXqedNmstLRQbeAbcujzqSU9SFT",
  "key1": "5snrmaTiVKkqvFVxQS1Q75EWNEdaUWbMC12JGXmt32RtMzVnKWN3UrbM7v5uq56Z7A67hj9oSJdLhxmJ8nMDHTMm",
  "key2": "5JUjzNV7VDhZpBGigHRpYjuzijbmY8YZXS2S7kUrLGvGTDGRLjbhjUR2aT44jqiy3eZZJ5uaQsjhyw7J6GYm3FM6",
  "key3": "i8BdZUDxgQ4PXkzDpb4rVqMhiLKbWLiqmFx9axiAtoRvPQQJ4mW8STpj2nSy4yk5btQP7NnLb2EfAR6JSf64nA1",
  "key4": "2gxSC5KmpGNnpiqVSBMMhuwEmgSN1hNqabrmi196dZcZs4fHJFQPvkdFqDzKVpcDNGb99Bdb4xWcMRvwGKjASjuc",
  "key5": "nuF7tdLM1Y1BkWjtXJ16AGGdPJdHzba44LxGjhZd6dL1oSKdJNWL83TvvDgvK38Bwn7DVrT9R16PaXoBiVQWVcZ",
  "key6": "5Foiy9f1nXbizot8SRYhcCoTGQ6UyQEfoTr9kdsJFLJ2NsTwBK4pq7MQB8ahtG5kPjcAevaJnazjdhxGEciQXofv",
  "key7": "5AnoCwqSnCGFZ7P1VBGNWyjhp4CZRmxTRBSgWwgM1U6YU6ZyK9se4E4j7J22onzC61XodH5GrcnMHF5V6U9Ty4B2",
  "key8": "2rbAos69Yn8YJyRsgtanEPgqeocH24Dt6mT2VJABNY5xzRoJSi8iTDMbRCGbaGsx8q9VgjK7Mfj6AyGjqPDX9u23",
  "key9": "QhYMrJNHp4atNqpyztyuDKN9bp1QNtDdeweJX7LN6wCzQry4fyMr3pw2eEcxfpeSTbxYLiGxVRnyoaWSQmCiG9Q",
  "key10": "2TFiWDRsB5F8etbm8PGPSkouUYD2Z4RhvXcWjeKm1RyZNfCj6GGtwtsYcxBb2Hu7m8fCcp3yCn94BeDTEwaRe1UM",
  "key11": "3Fusgg5eVHsqETvADbCfT5bCBmYvVMEWSJPsix4coBws4tcvuJxDb4UL3y7E7tkCRN5iwiNN9pomvj5XVHkZdUuD",
  "key12": "3WUdFNwGSYyCu6WHxfynYKHz16ngwxvTGAQSHbtKwzS5EFoLRosTrGNcCU94ofGwwSM7fiHigXEFYka4CQ8My9Fd",
  "key13": "6698wEdhTc9cqTJrmms7dLuyUtJithZ3BgzsLynrR7LNttbsDaw8FHznB1dsyuqeC8UdE8LDBZ6dAB1bVW8g9Pho",
  "key14": "4zUr2QM2sqhS2DpWn2psue9fz4Uj8MSYqWGcgMeoRptovuwb8cqHFDjX8ai4gfZ9pGv2o9QvY1ZWArDXyQaDrdbT",
  "key15": "3CkggWyWj58itT9bQZTeTeQLXzYSeQ2dkarzCJ5u6VjA9SRtGbXDF4mvMnZudvorpvnba3t7FAe2SfozJxzCEdGg",
  "key16": "N4RvzV45fEMm8sfbqnAHwTW3Dv83krzsJa4dGmqFVPBofvqA6bTtnvbsU5GYKZAX4HW2n34Cqnxom6tsAsEVXaf",
  "key17": "MgqYjPjncbJvAPZd9G5DVFnbZmPgJeW2fi1gsTHqNf8faotznMZmXbdDXH94GWm1GbgKAywY7gjqUUm8x1iwUsw",
  "key18": "27RWGCb2csnaT8esm5SZSubLev7JqYRHTihbsFQLbi7nyaCBc7LW774r6sPo6qEm67TA2GvT36ACentGJDoQrxbU",
  "key19": "JWFN57LTn8m1Cm9HZMe2wqAEqJikg2DQC5FXEuk1hBaZzLcK3MXEGJre3ZUqrM3SXysZpDfLorwPiypD1SHAczj",
  "key20": "NaPSyk2KLJjGYzBMkb61Jv6y1WEVHvh6HgM9tfgtNbNVabJBVqXk613QPTW2cY9Wvi8mNNSvn7KM8zCtpHtzYjo",
  "key21": "2tESrsyM1LsbTshRdAotdxFTMUTDeeV2eq22VWqvs7HYp4y76G5G9BNGeFZPz6mWJNTFnBNEScfbSLGvK2HgDAee",
  "key22": "2ef8KN4EsKyqauD7cS4u9UzR8YDWMBAYGpLAVHAZkEFMRsQPE7XL3zSonCEcAThz2VPnVtQzJjRJaQUgPevL2uDg",
  "key23": "5PzG8BcnK6WLyNYx6whPCWFBiWgesa9zW3V8iiiekz88qYT5s66FULvKwjgBGYE4eaaQCyWQxU2FAN7rX1hjt6Jf",
  "key24": "5G4BsLdu3UprPBMSVGPgE9A3wpMougQtEkmdhmdsijQhSVs2c8WCj3ugmY5YwdNA8yRjkGABZ3QwiZNwvs1fpoTH",
  "key25": "2jWYjLPZ9wL3m4Vg7TNL9D5JtpWLKcszRZg5YzdeDj1pUhduBYNLnx6spCS6qRJ9MXoJdCQ2eD5UE2RPUstUuXDJ",
  "key26": "4mZJbVTjDuVKnJxVZwNnfkjtZCzEMQRvuGfTQB68vpZLLLtsdQoS4z9847j8XKYjtXv8tGQtdncNfZf2wsGQfLx",
  "key27": "2iR3Me4t7w1mHk9utP5kWhhNU5edmVBVHxT3yZveXu7kc4tFcPxxCKgZsW4vCUFrRchqTTMeyLHg2Jjhb5KxvYAn",
  "key28": "5vxxJKFra6qmHSHrV9dapf663M8xWa6tTE1XYYFJSw9n3GdTeo16YYEE6SnbvjXNvgij1vahQjieir4XYwFcV4Md",
  "key29": "5WFVPUZSL7ifB1x7RVnsXQXfem6wPmeqE6uCtz9GCD1dyZZepa3SfS6PXJoQkLpYUFU7tMZKfJunsD6ZLeZKrgkk",
  "key30": "32pUzuMXsn8kczw7gtsf4WKAYXB7v4povi71x4a7UAKD6akWqpRdoREXP87WLk8H4s3vQLQHZ4741ytZvG5yVpgL",
  "key31": "5KyKmaRr7KAGeujz7gTXPgYk9Yn2ZwiYyqrb5RQL9FzCEndpwRmihvXX3eD5APHqtmLZzqxwmP5BJYkwz56U56ut",
  "key32": "2CvuxSUabF5pVnH7523Drj4Ktdpj7PPNwCkG7GKHWTTS2YiG7a3SKw577tPRmwE7Fbipx4vhUCWSHL6WbLjdHJDi",
  "key33": "5JF5izAJyuouPJjHCqyqxCcYZjSxSA2cBMk1K4ZT7A77KQJTQuxhqTHJh87VwqXjNFqTWbYY7vG7dZZZbabdMwhq",
  "key34": "QSzzbVmuK35ANHBwKBaC2sY5y7YrRzoJwM5PAkSfLV4P7JxG1YwtkexgwAnynPL8GTAubJJCAKNCC4ZBf1wLhzo"
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
