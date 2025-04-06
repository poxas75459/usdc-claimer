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
    "6rcZRKGdAK3TShQNKPp3fZtr3RcRx6RdM3bgLjwhn5Th1Ns8TGmkZznEtBajEpDWzELgg7j19wBPbanznP3sZUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28LXxAcjQhoCEWRHuzULa5eynvNTV1qAkpKACEK3BRLmqx5d9WhyRBAwUhHd3wvaS3khQUwDuiPFdfcrzkDbgANM",
  "key1": "5vUJaVKBgS46rJLDyqjzNYrtBNpMCA3nFAL8TbGyLLgDzdsQuxKoYp9Tbe2ri86xkVcYzGZbTNuzJucBsDwrBuMj",
  "key2": "23Zk3C8DBR53YioEXg2HqaF9BfwsS14XSkcfqNaN4vZ9Fy6zGm4TAB3X5qrTZYrSzTVADYGUQ3m9AdcUyA9QeCcv",
  "key3": "75wtdRZq6Bp2EWzkxo36gNdfzdjt87hEfj8VkZBCVtsTDrHtQ6WZXcNwfKY3dU8KWdkz5h4j9DHDkYACPd9VfMP",
  "key4": "22CaGQPnzzyeRLnN71Hdne7pFisr56V6ExPGrQhhTP3Gp86WaPZpr4KtYHoqKqxb85FryqqRXcGRS3gHHy22CirH",
  "key5": "BDPvan36JE1ztrW26m62gdrPCZgNVDSULiEBjy451A6sH8uTFJyt39Kd6MwAgvTSxpKfPFkaThQVAbdgKv1xD9Q",
  "key6": "4rWLG8DAaa4vXd8VeeykRXbGG4gF392jJW69wCtGUjy7a4QvhFqjtBwvUzJ7XbEUpPXaxEUKJyneXn2nwecUrg54",
  "key7": "25jHEEjf1e6HxyjJNRYr1HQdZttV1jFkQGESqJsK6TomJRctsJU8P4ajGik6g29PBzQBXyus1aGTywnqKWEysZjv",
  "key8": "2sR8xttCvfSzgGGcD769LXFonEWGco8XeJgr4XeXhXqopibSYPmLL5p264awJiQ19Bu2iAj7iYyVArLsGLgbLp87",
  "key9": "4uNEKwG6yZiX79i7VVLGejMfJsg1ZhFVFdJeZVuoHmmKVPMCu1CvsXDADibwCdbsvkB4NGkfemkhr5yBpag522Po",
  "key10": "3ZLgLKLKnxrKfL6KecpRB6TkkGaXCJ8GGnb8LtyZbGDA6QyCCifRxtc1pfmkcD2o27qMvvCKEevLR5FpX1Twoefh",
  "key11": "5oYpD9xjx5k4zCZ4bhy3VEAKuRzh6eakCvHBk5ADqk4HSTcVZ7F9qpNTUR6UPZ711UZyhGEDkSnm9VX3oYFqxRd1",
  "key12": "3cs6YXsBGg15bSKjoBVKPmXvDrc5bQ9Enty4NX6MyMScqy65zfcbFJa9Ri6ihRR2URC4rDTnsNgquzYUVS71cFPt",
  "key13": "5cKm9BxcGoQxPQeAjGLRE3XntSrtirfJ4c76XGrHwJQrPHEQjUax3f3jscBasbJfqUMmv4GY4PkTgqeLSqHi5Huv",
  "key14": "3G7cuCv1dNTezziQP2j1PAXiXiVUZxadPKWB2P2mjms5SPooSyHm8Tr2Wa3P3AV4ePNgsAsxQPs4jYVbwMc8xYM3",
  "key15": "4Q4cwenBkozSaL41qL4XjU2FJKp7WjvPShzeR9ZNE4MFHbroSazzN6vK78R4zq3u9ydhN1bhTWgQfRyJPZouf8bt",
  "key16": "2R3yhrB1HdjytxA7ALYRh3JG91soGxi14KkemL8we5FB2saNUTJrzBbHfqHAhwfJXt3dEBsURgwFbvyjGdJ9XJQE",
  "key17": "nQ5bAF44ndNJxYcZfsNuKAGQN3pQAtYKLWckqn7iDZ5Eo5UHFYuWNjwc9CwS3me9kZPVrtWi1A35kWCnBgeRiK4",
  "key18": "2799XZtJqcqu7HSYQ1aZ9RWGuHqeipfazriWk71PUHNpXmBgCftcpUB27gxoprhAt91TGRzZSFbDRqGEBbxaZhxo",
  "key19": "YTHH1yjX9yar4rS8zf8SgJH2DoRQVaTjDUs7nB7W82xvh4ULUBk6QVUopZPpq2oEtPitXRwd6xgzLtJK9nAjae3",
  "key20": "UPimb1q5Ce7XqgGCL9S4tKrpt6yZLEEjeJQ7EdUpMh7nncHQo3jBE5AaWxHBcP4EBf8dHoUepg1q2cUZA3ZqGhu",
  "key21": "4PUqFcmS3g2yz4q1T6xj5sogLtpwT95FcUre6dh2JhobHS4xHC8rNeu7RpN4R6Wmd7mjKBqapepfP7a26Dhk8YWP",
  "key22": "zx8MGvw4YU7uz9jvQXmJDGSDTQdDDS5qwATm5ShudYNw3xJsqPMo3HecEp9SwtLGxtmJ5ecAosFoEstWEvYVspP",
  "key23": "35osw5NmiYxRDJnbEAKzzrBQrW3xbLo17vSf5Z4CeGzFGqXUKmioT6wCvH64niVPUeFyYVWpF1Nf6N1JGFCr4hcu",
  "key24": "5Rf7dTeQFsNvwLAhevqC4QkPQhpxMXRcRaFjf9JTRFZmGtGd3Pwu8BpNNVfxY6qQy1R6okeYscyGKh1UFzME7ahY",
  "key25": "5Peu9FjGJDEJNn2Zvk7VwjXoTTxjNccVhFncmT3ixsDXsZuLS7zGG1LKRHnVYb31tszAYyYDFSmLQ1MkxQ1vaDXP",
  "key26": "4vWVRTRmCtCxYZmruRWxSh1s8BZn1rrozJssBkrfkyDHCCjfrBxjZkQE81BAZRWAu3PxeRJPBVSUv8ehF1iATHno",
  "key27": "4LvFtB8Mg4X6gk2ZgxP1BEh3DKerL4dipZCcV5U6oANvF5kEkHzXdj7jaYYDajbVSPBwBuhvaiM9d23BhmnixVZX",
  "key28": "2cqk2Tjpat8dKAc5MwmJpBpKzTUw4CL7SURRKwGDdeCrmpJ6br22NEMczUVwSewrviZAqcnyBbfZCLHkPNsZsfYd",
  "key29": "649oT5BthqRCvYf2BhpNsiL6a2vn4AqGADnJBw6jLhUbcGiGawTrkZdBbjjcYaAT4VZ6vXhrcMFx79oSmjzimJTd",
  "key30": "5sDC9EMvJQjN2tdPf13YJWXndUMdKn4zkWkxSLDFezg4B5TgzP98dghFi7Z2mFe9cDzHxtTuetS71NCMikvkuCww",
  "key31": "5mvHUJq1bj9tnzmCbybuX1VgKPfccLjHAUP8BhGXridxnzqxULw6CGT3s2237skYGAwqSUKdVNtZuVQEEEf7iX2S",
  "key32": "2AiLGPSkneE5gUaYjE3xAHi2pYFuT1VUvFU6V9KhbURkTXBkLr6zN4YRdEZNaqqaRt9zvozgMKPBEeWBvAc95GeM",
  "key33": "Kj4iQqcB5hi1E6KHitVuX3Hqon5dSrzyZMvAh4249CmfSaGfwBeDUjVT2WyxrYTjRUXWcudPH2vGysZSBcqTGWU",
  "key34": "5pByJ3wJgqivDMbDYfESE6ySwkcPU4Lwu9pNxHCxMg9g8DBKUFPC6DyEiKcKX94H2VeskJ43zm7KDg9YTG9E7E2p",
  "key35": "827umgZwP1w2sUeVS4ydjwM4ufxDdWrzezYPBTpQi7yFY4anURPD8DGMcyLCRceLZSDLcPh4GYNwpzEDBCWHkKn",
  "key36": "5B1CgtKKoKH7snxSDesPiQQbvg8b54zfw9wsAfdimq8DVYkwNbGKJopTW8drwVnxTuLeYYAwMknykyTpD8TNonzn",
  "key37": "5c77igkCYVLC8iuvojWi95GXSGmgtRSHNj1Q5v3M6pfTvn5EsCAF9ZxZapJJqStcrkmv4wb5mDdaxJdwJ1kPFgiA",
  "key38": "2YVhKdUZUgLsZWwRRDsmRPKdLn8DSfpGxYKECs9qZ6i9CAPAMLqo2gvhpZJGYkvq9rDjPTiWqLXWRQCijA5X94zA",
  "key39": "241E66PiBAFmdxRbgtQChRpucW1HnmzYaMe7NCNfccwWNK2WKzyRrwvBGL9fzXtaEMktrzW1DfmLSZyFZPC88is6",
  "key40": "4iDsctHnUaf8HymcfHeqBmgzXnxcHFeeYmUe62SmWBinr72d2cM2ALf6KLuU9JqcAi3rKyXkCqb3VLG2d12FWRoC"
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
