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
    "2b5aAjaNUnc8GqqJPkohfEU7yvBPNVn4aX2c5zwzeMQMbLgqaJKqn1qNcEjK7jaZr5TKbKk96n58Lmv82xWuJ48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33qZ8D6DuW13orFdcesuSR2wMSWni4A8kqG3GgKu22jfQpCZ4FsZ8EEfaigYQiqCYmaMspM51To9GdrsQG2HHyYw",
  "key1": "2ho4Fm7hQv5VRwhw3Uzxtp5r2oq12j5sQ2WZeEQgsL9Ub4a6aNXJR3XNwvxkDBfqdzUb6UMw7QcqGaRbywgvPiA3",
  "key2": "3Fvn9PLPgT4WHqChpcoeNZuchXJg9jP8GhyP1v94yGUbPmTh9isbYV1FkELGfWfCNY2Gp6KRv3HkxWu9JcszViFn",
  "key3": "iiASHLXe7QNZZmDMHewGNTiVetwD9ZnumybvMyqvrjCT1fSH92PWaqsPhisSizqxK2qx4Xzeh3kLdvEMfwDQ9wt",
  "key4": "62vVc9PK9tZnasKtYXeWQxKNoGGiJ8T7X5yVbkZBqgRq3ijf6Usa3Cr4evm9K1JfQ5JcDKXS1uFh12DfBtqeevz7",
  "key5": "3ieQurrTy1Rv8P9dphVuCAxLqcQjZjKPcQrM88CMeTgQKVzpNBBRizFX4GdUystg8LCUSYAhcG38WyUARKPqsQRX",
  "key6": "3AzuBF8xjqgM2LTJb6U96Nvv8wTCreHmM3Y3omHWKfv6KFSiRbV3y5Yrh4b2pR4Mea71ebT1sAoa2NW7gSe59jEj",
  "key7": "wyoZ5Y7Wx7Ua3sF4kfZSaTbHZEYYGr4h47BdRB8fRQArtQV1bfMmLbW6B4GP3CyFenVzUEQToqcjkn945dkGNeq",
  "key8": "XnLiSYnUanN778MEwSHEoDscJ1SNW6yNK7q85MYNNA9dPvfVqbRbKQoL57S49ocPDJrk2NiB9kYYvyhkged5xxq",
  "key9": "2oW22RbvMD5Rs13dFuddwsoq8HfHscuwMLSubZpcpQomRAVpfEBF3TUMsLmigib7XrQ6mEdrANq33vL1kogTPfvt",
  "key10": "5ubidCP7VJ4FUo8xQwnZN5qQYMNYdVY2htvEjwcws6FefZ8xtTJWwwJG4A9ks3eGpB37VbLPvQUzRgT1A7X3SbuK",
  "key11": "5CNVTRBjYxCXLYEjwisqwGhGNrf8ducobJ7yXFVNXLjDXAmguUSjXgCo3QCeYNRLs6KmKcM72bygjP5jiJkQyExN",
  "key12": "5eyyVCcrUgqYvrLkhPHRWpLDDU7rqQD3kromPTEW5pMYgAkqE3anupQGuEoNdAGScCveiCQ9DjZbc9MiiU3oGq7L",
  "key13": "4dkHHXZp6q2MmnZsz9ABJPqVfUALtr8CPco5zNti3g2z5vDri7biYBghcZYZ7BowcbyM62y56g6pFRHoWezPX2x6",
  "key14": "4RDDWrzJ2DQucH7siW3844KrWPZU5mc46onKtMtKjJC6Dt36LFMa38FbQLjR62NSSKSGnNt2E2GkyULkkkZnz3ns",
  "key15": "4p9DRD9S1W7BqPQDad99HLDNNhmxECGivBHwQbnG8ELkZUfhVJNAKaXNdrNPCiVQoSATJumDQjwVqcFh3JchRrX",
  "key16": "2FGgm1tAKF1ab5U5Ebb2LcMqcY2QT3113chNqw4NpHVD8x9iyLaUu9XkvK7SfKR7CsNwh1PTGgJnwxKwg8e7R7GG",
  "key17": "22KQvksgejtCRpx2DL6PvrE5LtPQ52qgcynrn6UeHFBhz5WW323AKWdAeqKZPFXUH9Nvb3zmw5rD9KGfawCZcFvg",
  "key18": "S7hDczRNwc5KLfr1GcU7kUFqGbrP93uE97RbYiSeVvVvk4aC4535XEL4tvttunCoAr5pJzLrXZukZ4QaYP3qt5q",
  "key19": "4ssoNCmmBNoYrSzxyGSHbtGptEmTQh6KreCUVD7fRTK3KihXCjodu1GUC3U7h3GrM7MGmFBmL5WJH6RDqrNYoLj8",
  "key20": "uZ2S12bib91UMUJW5JCLJowYZPFSjcwTzP8mBPyDD2d31dZmCXkQNsspxHSfXYq2nRaAL99yf6gDbYqdnLStqGX",
  "key21": "324ZycGNJdxwRBWh9AK92XjvCQYiDn18ShsVsa3u2uVUcC7KGw8JuRc2LEDhN9KNgMhQ7eDSt4tnF3USfqxfRjoG",
  "key22": "3VDNP8HLyGbooUjXztpWSy8eJ1c1pcLZ1KK9FzFWtu4F6KjuLijxyVVsfmiCzEKtGnTpNy98XCihRv32pUHgJwfs",
  "key23": "5T2YUJBhSH52iCTBcDxNABtQygRj8u6NGmLCMnc1aoReJvW8RQzRnJVstudFkw2UbeuiPHtD6QRN4VaMbUEVbDoj",
  "key24": "hR7hwhSQeNVwH72VxZtPtXQtuupYM6LFR7YzVs5otEBdCbqLrXNdUdpsw26PyGoVFqAKRWwH59DrxUgXfVvdW8s",
  "key25": "3BZZJdVqKbzTPt8YDqzqWmig5GpHBBEaJL5SnYePsD18Ast4yEMg28AmNParjqEJYZXNjUFYY8Y3AWZFov7BTbbS",
  "key26": "2TsBbXyKXDwQmmLB6VYbjwAcqV42uHoxWWfyzvYaRwgSgxgLk4PaHt2FLghWH85xxo7oweosvPqVqirzLLtvpf7S",
  "key27": "2A5Wm1mF63Saqm64sADPTqqQ2ExLifj8didVhhLRHDT3Y9Yot28sLdRHdGQ4k197HucwvyRChfsjXqNYYpKgVgF2",
  "key28": "5bn4EcfEenoGnJRQP8JbvsQ5P46amhPp2vRMR3QVqyW2f1ie4Z6HgqdiykF4HQXWnEPfn2ac9GzRXJ2Y2JefjJtQ",
  "key29": "5nsV3HaVzMrLY6d6owFtnmvLme8QoEASNQYDzqQWxLg9vsDap6DjyoJdk42cY8ABFsBGEFYULLJZebL8ycH2f5Th",
  "key30": "3BfxFqKqb4EvSuPTe1RA4C6bVpX67LRUt7s94b42Qr4WkwCJRgTrWB8NdPKwuwJhMLTKooWbfAfCaA9uNWZNw1QX",
  "key31": "3mk8NMw2fbAKRv5wBwttyEVchqLn1ZV4AkQWrETwLiE9ccRuSJFwKx9aqLfyLmt5cuYWhev56ffWJzrNRYgajfqc",
  "key32": "4cbfB3VbXBBpXkagj4NucTb66Pz962nfyjWcAQDivmnKLydyBvxDfFj3m7vr5h95f4odDJb9zqHzC2ryYme3mzen",
  "key33": "4GqTxr8eeUMs8w4pm8TwQ7hBFFUwrCpCVufQJb2zZ5pkv4NEFg1FhivdQtCS6tTNkXDhvM2n68CqhsqhkozdaGZr",
  "key34": "hrofsB1FcHiL3EsyX3Xd6yGSRs3H7swStE97iEM7QXbR428q2yh2P8osX6p2vFGGRZcJ6harmErgA5J66AEXK6R"
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
