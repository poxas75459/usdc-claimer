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
    "3aF6rWHiLAS39KiMMd1PfSUkmxS8DrJtY4GZpijBg9rDN8ikhhEkseDawi4tYP5btWE5JzWLFY7GznBD3TXadndZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UJxARNEFdEtV2bHxFTJLv8W8P8bu2Tt6JoWtpbjRRdR3Wnhka5RANAXPnH5y8zCEWVSuShKh2e6ZwGTXgBEn51W",
  "key1": "K3U9zohHRnEfsAK27CiVx7TwUNoeUvDtYiU5pN1DDuKGH27gRC4ZSJ7qoonWGbPw6uyjHmvqoJRyZ8KuzyVbAgk",
  "key2": "5TfWdyaaVexzDFGBvx5pmWKGfHA47yn9MSW6aGop5QRkXpyfr8sLmTxAntqz7rxQnTRzTKr3iXiXwSyYLzzQvgAh",
  "key3": "2KbZBB1WrhV1haTZZQzypi5zkBTDkjuoj1LjUW7Tm76am8Wk58zfe3VzDqX8qfCmAPYkHXpzcuov7M3JatpXVxZV",
  "key4": "36Eu1D4grGqC8c7fwRiB8ahoGvjaEhJwWc82s28VthaGHN7gBeDzHatc5aj6UBPyzAwSkyrsVfZoGikbfQ1ucxyn",
  "key5": "3fTeyN1zd7weSf19E4nyqsNqnmcgaFpBmxsh1fSFtxjoQXUb61T5zhVkLs29joLBVUVWkVytsVsGnuY3hQ1XLdt5",
  "key6": "7kDeHZztERav8DkmuUPZ1n7Q3BVkFwiEzut44BUERXJ3UWecwNELTykjNWvahq7TdxTMLgta2goc3rMw4gEo2qx",
  "key7": "57FyW2E6NodyJp9aXN25hy3RGteztScmSChZ2hdzCGJ8DKSYYHuTuXCNKMCUT3kqCkgZRqZBLjwfNMF57e5tzngT",
  "key8": "5E3kvxhavuswKAb8vKt5bM985zh2pZAVypEZgPMpyrKrLAxunrH3W1rrorMqnW8tB68SPZ2vLoHUv7eHKtkXNa1J",
  "key9": "fWqoWr6tzYjQjFYWiJ5tG7u9PmDtZ15Fguefs1VyCgd45up8a3Ten2RfXmaWTVGeakNEZ4Af1dM6wFfxqSkUtfN",
  "key10": "3rFEvmQksEUSAq7MSGDBK7eV6JPyH2ckn3sqc4jCXvgstyPWTaDv5pFDH9d22gzSprY1LNxfEe2GR7Md717hC5Px",
  "key11": "3R3cqBVqD3KQcTAGwcCDqgqruyfU982ZPZzXLTkFVYQVtKyZrmskqw4iz3ucNu9aRLrex384KBj8RGbadxcNTs2j",
  "key12": "5D7xMEsM1mArUVLex2KwjcFGA7CUxQ2CaArB2RUKEK93b4pqkJcJDb77VE9Hij5traYurGPjNXvjNh75aXzHYwfj",
  "key13": "2x3QqKaRHgVFjddjg5hS14nxBpo5eiFxDoRdC6VTReabSda3GRXiyegTifPXQ6Sbt16qremobQkAwKWgmnKnLPnT",
  "key14": "3anc3tdoMyMrVjnqiLYJpJXjxwFVCxuH9Au4vFuQAun4QPDU9oYm634sKza6BU5qUmoCNf6E3fmDY5y3aeqKUxiU",
  "key15": "5BncWMfwuzpTbGiNbsomnEZ6xjdVqrpk2yP8LfCRZ4EAhkTT7wGe82FdykryTgfgojHAYdGh3bpaQAEnBdBPYrZ",
  "key16": "46z4vznbiQ6xwmwBD2uRj64oHQh9hPYZ3jAyvj8u5CxPDERYk4AfZgzqriTZypt2ef9KYZzKZtGFmzpJtgpS5ECS",
  "key17": "4qzUiRN3r1Pw4rgR3TnhzTfjWgYfHsaqz5YHYPpYpgGfJTZ38PbSnsLSCLQPH2GQ72po5B2TdQRghPwsUcdMXTat",
  "key18": "2y2iPAVN8mSW1BRQiZkfWfK69wjdHRjjrJyTL2qJmMDGd1XxUisgtEbbhch7cafgjxKwq7TuYPAvY2y8CEYfsLaL",
  "key19": "feAien5m12m9oWRkhNtDfnVCP2zMULeySDmG1Mjv2c1PKW1MGyy21kXP7nPbJJzHHcPbUKh4PnpAKA3V9bEpMZZ",
  "key20": "5ex2hUfaWTPabqCf2YNM9WNDVjgJJzthwSXo48z1cR94itTYSSNrG89sz18sptZa6g26RZ7gV9hJ3ojzhM7soXxy",
  "key21": "4Ypu5yBDzV2H6ewBqMjfpviPfdBZmhoJF8ZyJpzPsMhb1688bNJQdd1Rh9F7XARpo6EQAoua5JJyJEbxucaqvbmr",
  "key22": "3EoofCYh1NWK5oLSKxMX9cYzWCYTayBK7uNznioU9are7Tdt7UwG2jEzJcwTLKvSfp2cy9ZcFQJj7TRtSsQZKhz7",
  "key23": "EiZ2xumJwgoLPcivKZoFn7bSELqpsEuRMffmesauXMrQEdMPcjHBeDiGqcjXyqoCUgdx5APXZuRGkqKXEFJo1dU",
  "key24": "59yZU8AZbTZ9aH8tp5xTagnH77YAJqqdnu1eDNLg8A98yECDqGaZCEM7RmaM3rBHHTreZPYhss7j1B4oirifwJi9",
  "key25": "3HFZn2MhAsvv19ctqrGsbEuyFsc29aPxh7RJLvsV5MUEy4uUt7SGjtSjAPwaWySLm2b8K7xRcnmE9X3uQ7fQGwz8",
  "key26": "3djc3ksnesGTBAMEUBD6sQ4bikHgSyDzJURtxt8zdPHLDdffVUFu5Sc5CCRpKjA4jFG6SmZSadoiX1SkbDP1EdiZ",
  "key27": "5UisHGmaAJaQR7Tc254oPeFL16GpJK5BSv5YcE4vYGSFeJjotVCHffBrFNTNE3hozvxeAh7nJHxFo2W8vArS1mxF",
  "key28": "614cjkcJeKzVU9FkPTSFhvCnadUZh2dDRGKq9ppfyj6mqXYzdYzCuJoPqLbEkyA7VQFzjTdo8wGnzgULjwUc4pc2",
  "key29": "pA6rFySpBntWoBWQ7tBYNP9tUpTAdzeAPgfzag7CM42QJqT2kdGKJGTntomp56zFgEnQdwFpGeUznXKatfGfFCq",
  "key30": "4o3BKu8WdAj8StaJLaP5iBJ6WgC7hWU7FtBrxf26ThPVLjUyQWzUve8Nzp9TZxeDser51d58hhgLSxKFUKNBUkJ1"
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
