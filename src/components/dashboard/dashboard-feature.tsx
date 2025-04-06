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
    "2kApyXpFhyUTvabQNb9RECzRWW4M3XCZemfkWCFvNsEvWAK8etQcfxZq9yL1N4fUHDrdyB3hXoFtHosREmi4rYyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W95HmPgkd5gWXo5XH7C9CUzqG29pEFDGg3SiVMdET9vhKNaEpRUUF23GSduWQNugd7d1TyMj6rjmMCXR9HcJN1R",
  "key1": "65NbSN5KG1nV8TLJ6w3NePoTgjjw1xmkdF9AZdLwTnJVB4GPixgTcy5DY4N2t3fY1aevEF6dS84XviASMZSjDQVn",
  "key2": "5DDwhs5BRGPVtMy2jZKGBg1heysZqWMVtrm2iKp8iYXyztWresBmf6XNNWwCr6asnkmdxRcqjq3ZsYdzSmhwTjkP",
  "key3": "dGXZ4RgT9EVma8tm5dkQ6mK6FxJMFcmACyagaDjWfh35JASczBAdwtHLTxqD2Nt9UjyP8xVG1qB3vhAZpufBWRS",
  "key4": "5tUfHa9WMFDoRzU1pPD1a9wDrU3kQJcKeJYYTm7Pc9an3Mu1f7kEfhenRs42HZQuydgg9tMKoSizimKuM4QJzcqn",
  "key5": "48rBxt5yiMcmaqwwBmFjHt34btXzpoRrKtbXF4YFRyupWp4tTyE9Zr1P6faZTorp7crVQntBbC74aSuWo1zJMh1B",
  "key6": "3P17CbuVFyR1DowkmGeZ3qkU9DTTybZr6Aoaa5RiBUKx4Ad97Fv6bgmFZ851owcJ5poA8B7GebTrmeafr4XvfF3y",
  "key7": "2Z8vKJa3SxfnZQL3v6i4CNpYDX51bGtNvgEhzWCLoxJqeoCF4SS6ESD2wLuc9499ZUthGuGHdj7dTmFoXKjgBSHb",
  "key8": "2AdA29cP5qCDKqxsrLvfAA1ESPK9rMjbcLoBK8Fvg6Qz9ac9MPNQ1e9Xdbzt5d7daLceGZ75t9Zc5mGKQsPf6MRD",
  "key9": "5575Jzpfrmcbf1saBsVkQuyTnV1jmhTYRtnZ6kTWZckPvg78uNbJ8j7YupJMrCpUSbhm2UDSVf4cJijK6oRmAsXc",
  "key10": "3G9XD5pr3w2amRddd6Q8owz4bxs8zrKymArMJQKUX66omhvQpgnZJK5QfUzXYjMRKusPk354FkBFZ4KNm6h1pAwC",
  "key11": "4Cy81HAb1TeLumxUfqVXv9p4xGZ199xtjSZD7KrYAC7aWT8tth62jmpy5KZ4Hek2PYv8MurS6azwEFpvvQxmTM3W",
  "key12": "3sYwWPkVubtjHRbHC92L1ZhnmdKm9t68aEhHKrn5A2Haz3sSGTSgxNZWWXxTwCb1RBVhd2oPatw2Twgq2Umfd3zM",
  "key13": "RE8imkixdeGdxdfpGWM7fPLQyJDsWJhGfkAiquckoWxRGz5EWTQ7m27fv6nYTHVXJ2SWn7tG4BALjHhyPuo9exg",
  "key14": "3vKyxJ6BV2NHCHeqrc39WQ6oAmZ9vCzkd5muvHNBenQvZsRQgve2uacMSCGjCQGhHbg28BFUuGrTLfXaqujWtJ83",
  "key15": "EAFAf76XvdwHtPPpjPHDZiTd6ihAWxRY7yULGXtgTtRvB4Emb3sAKeTpSeyKs4qkiTmjEL3Rcygc82t3HA2HXjR",
  "key16": "3tazXY49A4hBSvMR5vn1Rj8vohS8SqKbNsygTqz33CdwwvcqJbTsXrv8gmnvSY1xYQcgKathAkM7c9AKqZvBPi9",
  "key17": "362tTz8Mn4LR4GqJvmfS6t8yJJ8cWVmASFF7eYkPLcFQNdaSs7W2uFanHhyCDFWz7vqbR1mb8EtC4miJnecg3KAL",
  "key18": "3ccV189h88F7rNMS1YptH1XysUcY11KtQsEWKCCJubUtVu1vzLcuV2HjNUXLB7JwjwDoLSnG7sEaqgzz63faQV8f",
  "key19": "4WaRL1r3jfVSh5qhWCrQnNgmxuCdUwhTevAAUrggk8FFJtVFnuanhL9upWuUfCW37evMZJXPh19hU4seLsWTdRVG",
  "key20": "3CjUtz8L2yHmTZp5cJhxt8qNqX19WhNMTUApJbAiSHTvwpJLbVZujXEMVD6aGU6FKzBRPGsxhWdkegoaDPZjyKLa",
  "key21": "6U2GBacjuNv94W4URqJ5WoCh3PRUoRZ75XMZe5ukZjNoGvGWcfqfqFPPVZfVoCUJU8zstr3RDWAtB3b8byG2hKb",
  "key22": "4GDvim77AtPmqh2ZfK5mwMcGKAEzSp7wGvZSmohFgJ7xKoP9BCm5tenUt4x5cTHbMijuoB33Sc6KngAFJ2GEVCrr",
  "key23": "5xkp6rLPgezbdbNUTu9szYDzHycraK6bwE1f1KPgnPv64k2861g5Cem56sQ2nWU7awcA3SXs8xqEuQm68anamG3t",
  "key24": "4G3VdTNT1Dbpe1Pb9nYwb6fxVXCmaFNk2wGJkmCgksLRogzUoy4uXmDobjqfATEcDGJtRxKsFt3jXTeQt3GQ48G",
  "key25": "5QpHB8y7TXRrokq5XBx85XuJcKhRSRvuTje1PBso8MmVdGUhYAmPKfjVAV6aybrraeiD7HoVRWjacTEibSiVHQ6h"
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
