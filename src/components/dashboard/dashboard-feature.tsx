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
    "5RCSYVD1v7vE4ZgJkmgTKwuW7ZLNRJv6pFT4Nu3xVLD2EUnAS3dF9uCr6LjQPsMhq6MgYNe5gEi9Yyb89FgXTPif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QE9STyRZNoA6EYACM4ZKzPdQRPNNsBbDcjMCbbb3x7mLysAdMHm5N6ur5tQA2JDMqmLrQ3TUZPEptGPJ4fU5teZ",
  "key1": "3gr5KykXFtemwZNXLYLeiXCZ3kviZ6GAPZZmJXPrkuoVYzXSKRtbT5oL7acxZqukRirQHHbbvikNboHAnnNbPSLz",
  "key2": "2aqbTiSFgy5r8XsMf2Vr8oryj9ornaT7RTHXwxEDEFvGmKWREEMijjwa7LwR2Edh8tBi1MxnR69wQ6BYbXNfGBop",
  "key3": "Zsj4NMJLW6FjjxzjqtKDfNNkTjAorHHucThyBhMTwPxEd5CHuSPSfG7kpB5RKVim98Q2Ziy7h2vrFHiYKh76q7g",
  "key4": "2hGjePXv1bdGfYHujxxG2eE1i49PuZBMTNe29EsFUKZvmQGcBtsVwDbBcqsjaUP14rVKGnHFYGQJT1zrYPzDh7da",
  "key5": "3urgug8CKh2DummApdXwp3oRVatGaFNZxX6QVbEhKsWqZ7NmF72RRDxKMPnPFjAx2JP44pfMd2PeWUiwx8o3BxQJ",
  "key6": "3TcchUTVkZs3kuCK4hKjm7bsiPTW63f3P1rZA94iUV5S9t73mpQ7jseEzem4Hy8WTBW3eyuT5FbTEfSAnC6eb8jH",
  "key7": "5iFpFpE2uuUkX7kwbXaddcrxEnocEZ9kn6JWQjcqi6WKK7fitkMxZCNMDvEYisHu8M7GYJMnCZsUhSj567pUjGW",
  "key8": "5aDJJe5U5hTnGYEaSYkZqiD4RK2N53jCTrwaA4iV9Q615mPQNiv7KgxEmc63jJSstMStYpgSpCMAZVG7LCXr3sz7",
  "key9": "3mzWsRDeu1kdAfXxPFvKxpoLhUXQRZ6x3rL4vbXE27zHfh7FvxgZtULh3DgLhf9zh8mWeN1zuGuXgKQcm4PeY4T2",
  "key10": "5D2FJg7472G7JwFH7XYHrtXByismMfrbPYonZDZVH3wb3DpXEybBnTjvrE7bF1DPBTvKstRq7DNQucBFdednVaVd",
  "key11": "55yDkwStf3sqigREofy1stp35hdXCMK1J4fAEt6MM4TAen1QLt3R5zFPmPuAqbocnBE3uZ5VSgq6Xr6cnvGdvbwM",
  "key12": "2HUG5HnhRUkMtNBDbGfhyftBN2ZU78K6J7TKfmGC8MWG3GQTFWHMEPW7eSmCN5FWbSFRcofK2b1ghD8psJGSS71v",
  "key13": "3EBqSdUtJTixgFxihSfUQXZBnZzd5bfMGY5MkZzYezsfrvdAVegQCUvVAzGV52RdXfZzmth2BMbMoKNQ46F6h5qu",
  "key14": "3eWq7AJPgLrSTnkbwFFp6Q6FYo47FahFxx9N2n6nz4MWXcq7NfSGAa1XT2E18gyGj1SWf9vAzwQ4x5HrcWH7axHi",
  "key15": "2qHdAQU1BPfEVjLiiXSFvDGJrLetYzuYy9JyKrBFidUCwRZzyQ1pyJrCrCq5z72cK8u6xDBQeJ6sohr5ev3fHrPW",
  "key16": "hkU9bAA7GAV9ky9j8P3r9jEetMLdFQfz4EgMPRgwNY2U2DHcpfuopGTwC15jMX5qdnfARShtm7JKKctK7NM4Zru",
  "key17": "22gYif5Yum5e3uMvwX2pJKdy4V8Dc7vUBKMgyRiU4hZp7xGcpjAoKv7VYbVXH6FSaxrRGsHbxXSw2WvJfnqj5Tyb",
  "key18": "3H1vJDxfvHbngHYBb3nBwCRHfoJ8tRautvmupw7B4eRcYtTJZeBZ7DtLtAAwoi6RkbQiN6bh5kx4Zf9cXCGALLNx",
  "key19": "4EakMASPhjPMjCXup8SjAj3Z6BPnyuPBcyqNE7pwVHSKW1BxDL33X7A19B6TvT9Yf3h4qJdhLVvSTRJ8KamMtUWj",
  "key20": "3s9pjo58HBPmDLMYqhHxxoGPDpv7dMeD1Eo7WcXjV7WQyShBMA2Qz7JoamLjgTy7tVTXNvg1xaFBPCHmhrVy2Zte",
  "key21": "2uGdebjKiSS4X22X9FMMkVSCxCGybX82SLLUENxXBksnm3dd2ydTg5rVVwDg17gEPVD4nD1PSVM8XWv6cL56YGmm",
  "key22": "3eUuGRQMxUTN7dFj78qrQS4UHAi4cNtd6J2sW4F2D7su4f2RvW9hcRyapFhz8P6dPM6KW4m7DBjuhw6aNeCj8Bua",
  "key23": "3VhnSbZ3oHu8bLLneq5LncfzQdYtdcXf77uS4hnsym9AzCf3LzfWn7MwsUgi3VH3WfcD6BhbiSz3tokd7NgEsXaE",
  "key24": "32hajEN7BdHhM2ne2picebS1X4Vrm3oUh4HcbQJ1NUzM1akCUaM1ZLxAwMPKTJXYrEHN2tz872CEq8BMTcfnb74Z",
  "key25": "3iMxHR7WcQNidEEUzJBiYWKsrE3kCg2TYSHzzmfks7mSvZKFxfvBTHzKjkYVnG4viiMGBuvvGN88Ut3enfagRW6h",
  "key26": "agED6hTXhG3556dfUYvFKyhcvzfT9NdGaQDHZtZNF1rKYbrrxHKXVQH8GMtPa9ev3XiX2douuLZSyLUCJiJ2Xyd",
  "key27": "254QXgDeD2t2YKpeGCNJXh9WAjTvjh823T177JaBq4NyynZhqbDB8PFLMYVMxqCuJoWwAntwtKozjid7PgTK1UFf"
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
