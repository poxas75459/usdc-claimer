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
    "zVDzUsi4b5SGDqoT5AGkDzPysswXiRBNHEw6JWnGTUnHx4hsLThsB1GNfa5McGiurKLAdv7j7CCqxN6SSJGhHJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WE54b2PYtVQjhWiLcWDuBYFpcCtMmq1LN3TByyQb8NgMySAAzHEA2WYyrXM72sQHyKxrixf9fJCFBZjjbzaiCHF",
  "key1": "5yMtZtFcSuZHjSHPLBWN3LDFhPsEeWT1Pj56NFpp2o1yJUkvnf7oZ5a6dVCKaNfELFZCEFWucTuVCHYK3TsGJ4ky",
  "key2": "23N4v7QPDYZdnKmoQbQq46XP96EXCfMzWe967nEoLXiEY2czXhzmwKeTCEpBQAVjCifacVS26JwCU8q8a6FExSyB",
  "key3": "TbGqzTER5tpUsR3h5pA2jmKsJNZZdzugz8yZuNixMSu4X3tBgS8xypFcgEpDmtzCbC9ZQhvwHC1rLCbWpq52SM2",
  "key4": "644kw2cVSFmwhxZ7q362wcWm4STm4UYMxFoyrkcCrdLG158qX2Y6uHWybJ73gkFaPjyC7R7pA1MwreDDDbsVXdrW",
  "key5": "w4GwCydfgRvKzbSPXX4bqtUBP9KPB2tArfRnxVpLixnhKi7ots3Nf55FzC9JR8GeJdeCjr4ggXDFLjkxm4V5CSD",
  "key6": "25S5YdfCMzxqHeKfTCcs7bGi3By6qgnMoEMAbeE7zvpW1vDUdc1qZU48cQ2ezngC2Uw3cHiJdVPwyCwDtiqEmits",
  "key7": "3rW6SX1thvnLKutMotCBVyAX8vDwqPcNKBVVBeR2PdSwYigjgRASBaLwSFj4TC33mW4jbvxpdGtJvyRQXdtnMKGC",
  "key8": "5FjdWeZsaN6TeuFLY5F8uCq8iM45teGyDMJ5kEELuWMA6My81jQySsGJcVThLgKWgqe4YX2QZUfa5HEAiXiMoTXy",
  "key9": "4Z42VXvh2rdoLiqxsMTt1rVJqxiEoaeVr93AMVny3rhyscEoWKRqA58jcodDtrdLxJuxyQKd2G7T7TkHZimjNg9u",
  "key10": "5BSMSWM6hy6jUuqqe5F8h3wtywHfTge888BkNGXLYRonZUfZ5mS8VTHbAq3sERLC4qdABcfjuL3gbYGgEcNcvDSw",
  "key11": "qR7JPBUZPzgL3mmimutiM8dWnw1Bs3mgQ487fm9U64hDPjYpsjZAzRPC9geU9ArrBqm3genPtZ63KMqVQqT59re",
  "key12": "2qymoz4EokKbXifjgVmqYW3C9bMUHVgKK62E4wmvGYw3MidPjrZ1fZhQBvivenB2c2m7hPHen9ZUV3GYEwsjvm36",
  "key13": "5TRDHKWRsERuhYJfKLzjKTU9EtWAcEz6a3i2WmjK9bv3NimhyVZUBrBFim99Hib4a8RrDTXDH5V8zyRKm2hYNhqo",
  "key14": "583DHPsy5yxoYut2gQLT7HJ1VLhyiHwipW1dE6aQmhhGd7eSPM4i8cpJozuNcQa9wUhJUZMo2mzn9rB3D3BRfCVL",
  "key15": "mvbXE1L8GXhhmKF75rGmmvjSirwsTyPLWfcrSAq5DQjKPyhQDpNrx3NHJZW8enL3J8MzaYXk5HRrYtinFZYKSDb",
  "key16": "3xcgzFg5fEXsyXWo9t8nPJn9uD2reJjoxV7hJUK3WXoXRZXnPQsKRouyUCR5QjRbbgetPKFSUr7pHLjM4zwuEV9u",
  "key17": "5CUpiQSyZYE8ij1KwtwDZUodKTyQaJhcDKc2KU5re3H29DeKz3qBtFDE3ktnXnxHzzpW3oy9B8v1m7EPdHBAaWFm",
  "key18": "5Derw4PzXygUeh1bcmgzNNTP9PR79c8xYdVDswQVixpbR96DFhCZbpWFCCGFDWxTAtkTtFJCDJT63Xv8vVpPpAvT",
  "key19": "4vqPm8YvCa9ufqwcUhHC9XFMyvBWsWsbjg8AHH79Ni73ndvvsSoT8wpmhSiNgsWhLd4Mebn5yChtFMbMPcn8qE1d",
  "key20": "4Sqf7f5DQti7wdQZtDtxkJwtPUCqg3onKngxoaEEyQMY3h4kffBSFaq8XDvmVxUAAEtZHH5VDzEvnrtPh2ahmu9p",
  "key21": "2XCggjHw28jPHA1VeFBVNwGGtob3Y7WA6qjqZu5QUwQ31GVguZuccMH3cyJ6X7LQ62VQ7k4wUbAkLj583Y85pNmT",
  "key22": "2SQsoQvR9wYNVzyo9XRKgTsHw7dx99DUb3FMw3kPR1QYGDm7jBR8vm8x4B1VUbxLWhZ1xdFiipWkdrCvCu7ZtTHy",
  "key23": "3LvLtqEcZQ4T7w4j1921g1zruFKkGtxmPemtbQgZmud1Z3zGUo6PjwFR8q1gnJw9GTRBFTr4kpMVEAc2chUCvvvk",
  "key24": "4qY3HKAqSLJMqjk78TyAg6iiAd4wyhNS6YkyxUYHrokrPMepNjCuzj7rDQGGDiYKSBdN8uzUAFWXnfYNC3rH6xMY",
  "key25": "4yXmmqq8YiyyzaFn6mkex7ALVyMBk1vGNwLP5hiWT3XPgoqatmVPwV4QzsdLJhhfEgvezKz9MqMZkGHetSGgXuCj",
  "key26": "5V84dusL2DKJj9Y1HcQzk9UKRznhbpjKwJvSDUacQqk9vKEvJnSZgbbHJzJJzib8YsYtgtHG4QP2je8QvWFQMLY5",
  "key27": "47awiG4PVgQiyERTPjjLQaBB4RFVqvvvhP4pFHMyMVAh1woexeDjrBbzpgJ4LzSgiBD4ZjEnpNpcdcXQMHxuwaVz",
  "key28": "fbBktNjidjiYKaowF2hS47MmJX594wBk2bNEXMqsXrRJ36qGUnTiYVD4bZsAQB841VNKccmTD1Pw4eCCpyVqCyf",
  "key29": "BtjR4hvFBoFZwg164HNuaziMyZaLB3BySoymc5sKmaQ6MC63LigwuDqPZZ9aCBqS5wGHViG66at2ZrnMzRszXfB",
  "key30": "63EpuEhXQB13mUesfsMEExCWpxDzH12fXngWYb5qki3Q3sv47QmjRRuFTRpcVZ1CutjECA6qtA1Vu8iAzsZ1T4qb",
  "key31": "4wCqVSnTgzwYHBNNSocvevae5JESq7KbK3nveKy9K1PH7QzkYBV51KFfjbgsDCiRJmeVUGxnTXDEoBxLQE2gmtAX",
  "key32": "5Wf3PeJ5g6eXxjLPwypNyKfwPYqg2MQGZrSjTrUy4HUk5oyhWHbyybSanLmRCPTqMbgrWyaxjfsoeMnaW992Bb4m",
  "key33": "5NwQSFnHUQ5P2fCR5YAtTHSEy47ryjhoUDbpy9uU1ngMFEooyYyRv8UZfUzUqvTtjz7rsLY2sLsyMqmhLhVgnQLf",
  "key34": "3QnkB9Q7WXpdCMhn93siZPFQL7zothoPD66nzMtDoUutGPUqyG45CJY7tdw3BrmBD2WbfUri6A7ya3PKYxXfpkfm"
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
