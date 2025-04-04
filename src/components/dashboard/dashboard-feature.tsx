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
    "45q4GrweoNYY7XkQHfBBDQsadZJCUnpCLgyCs3peuQG5oNtTKXqbXbtHJmGUkFwUmYSkjjTqodkZMm2mmZhcP93i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MqhSo4n5SspQFdNoWikaToTW617FTqJyyVHVmdZ5hr31gnPGEMZUfej6Cii4JRciovy6CHXZ6Z3CxNGcbNyGauY",
  "key1": "F49gRF9xYnDEj3maL6Ry89C9YJmpt4cr3pXESNXhB86wZFRXra6Zx2uFztbhR8PJWxdQ5kbsCDrWRi5e8J4HA42",
  "key2": "5LTQ3jSGb3dhp78ZzfxYdcQipLKaAcZYPbkjjSmhw44HQmQVEAppjyJqBYmVRk75w9PESYwHVhjMDsfPWa1ftTha",
  "key3": "31qcwtYrZNMwVkaytKfhqYJN5QaYggPNZKouBLKhG6BcAhwmcQwiyNHTav9mJfqTuZLzv9GQBNjL7X9QYF2cMHTK",
  "key4": "2us7GZgUUjbo7bF8TAA5kXkBiAob6GUSxpCJ5iw4ansv22yHrh3mhMNJtwVMQ5hfF8chqkzmbctaUYRKH1GD9NB7",
  "key5": "2FJ2Sf4eTieqxu7qZNvGvg8RqzjJv76qotrNd4k7DXV52riaeq98exoanZSUkYVGDS2h35xYt6tmpg3kqMRPk4i7",
  "key6": "4xN77WskEGoWa439quNczSXjSHQfaAigFUyVFXw4eTnFJL6ZWiEov18QLuMzPWT64yiLGNGVeYH8SYTdNVFCbwew",
  "key7": "2qsihPinywjSvPUNTWP8UqGoaPQn91Mbc4qfGTuPfUWifaoucSPEWm6Lnr2jFnZYS9uZyC21mZ5p9m1YiBMH7qQy",
  "key8": "3115nK3g2EipypwbqWAwR9Kn6CQCutLrJvkSXwSVmbonBJAKFmzHbp56swLxDMPMjX1G1UkN8ut1zPdmPpdXcVmu",
  "key9": "23LPsS2rtMYk8BCC8oXb3hqaQQLP2MntjzHd3PapwnuG43oAq2TyDpTTdYFwnoZXurbGCc7JAdoQc1tSfTXt8Bc6",
  "key10": "5jYybS452PJrwhKkPFe8pF1NPWE74aHyZyNiNhxKgpdWg8VZhaz8Y3ttQ8Am5ExnVmRAt8vyN8LctXxrENtLPo93",
  "key11": "5cafKM1MYK6xD86phfFmLMMgpHQPdwC91hU4nNJowKGCSH6JHzhfq1o4aWCBbfagCgFn8PFFjXzNg5aWyQfqS5mj",
  "key12": "3NA22Td9qgHdMPWtbgagjZT6e7Tnnq35akvSnM4zhkynx4Gzxqcwa6jM4dUdt4zu7fhAsCiG4bUP8VbFHEfguvSL",
  "key13": "2pzrFrGjBEkPvKYNiQq5QBJx8f2LZGo3pG4fU2BzejDK4pCjzMhtYt557xDjAdnTvuB9Sn74T6VZDWA4UHyAzDjA",
  "key14": "2JGQvZQodYBpyUevawFbkxUQ3chgyqvhq7B3XKoqaaFkNCe5g77pfweVzKbZUAbzna8F1wBCzEG1JWdDc77e84ah",
  "key15": "4sAQpQwoB1b7j6xgRoKufucndyTYF3HecmAsKa9fAQBSqahKrfsaxEBCny6EcbzBMKnM1G5uWH8wawmWVh5pSNUy",
  "key16": "3mkweqBDW7XoZ6p9Pnze7yCKBL1LUpGiZiMN6P9rGNKuq5uw4JqYGGaGDHKDzzYU5k2UX2kWRFebWRgBPiDVgFv8",
  "key17": "5dDWvbrwmjLFnR61WfvqY8UaxZx4njbc1EH2nPDwkbP2MMwEKjnAWnxf4EnkSzq7t7qFEKFJCT8N1G24W64k5SXx",
  "key18": "5WDW6SyxTDoDcL5D8VyqqZuLptdRFxdKnM4tTMwuz1EEANy4chxwrSLxkrVVEfUrjo8F8BwJtUTkMyxeVs7x3Ar2",
  "key19": "5dCeYCBuQJrf4bw6L67rXRNYwWjHu7wnCKjH6FHSGECXgd8UWvULWsPPbxscvwKWL4cdBHmhEr9RvpCwJhszkd6P",
  "key20": "3c99V6QnSwugghweikJjDZjo88Uy5yxPPZ188qykT5oSvm2zYTbY1KvsMLw5D9jduNUoSe6wXmPzRqSxMpdABMtj",
  "key21": "5B8myEM3eNNfdrqKRtZ1tBvqT4D5LqGE5P6gJB848SFHwfLCdWKZYLL1XfGeRxqrf4wu7yo8BZwqq8MBU4PE3weN",
  "key22": "2VW5qQ55LiukRUhHfGet1V7SRwM8UVBiqNwSKnS8khk6bzPcy2dNpScb3iPQuTZ8oihfWkjnuQgsHqfzzSXRUbAw",
  "key23": "36gqL4yj9rgezFz7pWm6JM3J5e7qygFimzbLgyWUktooGR7MUvZ1Qe4CMEg1BrX4ZwWZBrZdPMwnyr2BAajrDPLk",
  "key24": "4QA6RA8RatQddxAEADta8MxD9xR7XvXr95ZBC2FexHrNvwCveVycn9ZEvrKkyTwpGhFv4UuSrzFYktJvsa5XoimB",
  "key25": "4dqhHWyzh5BrBgu8d6CDkEEk2T1nYJMZ6iRZjgnD6rmgVp1rBhHcDwVfFv3du8QP9NvpFKEWWJZQnDs12tkUC9Hi",
  "key26": "2Ce8Kya8N7gRVZTzYLpwHxwUwroRRM83MSh447LspR1mu5LrRSXHnia79W1TpEznbbW7rzL6YSGLjMzqicS9Zq1c",
  "key27": "2fM8fTDnbjrTiJSFqoauwqX2ARJnXE5iW4UZyugZCqAdn4R7qRDZz5ThLjh4QMdRtmMyAnxoRZC4mg6DqVUMwbXd",
  "key28": "7rYAzNCB232mE4xKGCbyiKi9z9thfj88N8JqLbprqx2kWT6hNxvYkdsgfxz5vmhpsCY7oLAidyHth3yDeor51st",
  "key29": "48PGHxM5Au2R2zRbfBHsYbzca1PiKTHQkGTx2eJgZ2eyNPaB4ht2AGcDYdVCTYPD5swkvZF7h9tzjU27QXyNtPtj",
  "key30": "5yiAGzkoEYM4UVyqyPn8q572CxEJ5YauirrxZZ2YDMRTmKV2VJa7aNZVfuKFuaS2hWEEuD19fwDJ51RkTqcm8Ttu",
  "key31": "5hYPybB8kx7ktFu4yahQ5YBNd6JTd3TryfrAG69aK8e8gjFbyVp55VDqABFsgaT2c29ArecrWZX2BFfK5rF1GZZn",
  "key32": "5xyKXhTKv5yKfyL9XQeaZAhJPnrsUrbRjmfvLnv8s8DyyJKjikKbYHAXNPKujnfPLefkQvrBs6pWozQyturA1XNw",
  "key33": "3eb6gJsZHaVTPdA5ToinazYouqf2XGN24T8Dch9a6RaiYxEJwzvPcayvZRFHzcE4xWmMq3eKS8npH9bHWsa22F1r",
  "key34": "61wG5ZjFNvjpCvbCgmkV6yMe7fNCZBFDXyk64TiFT2bh5ALFAWU7rxyKstiXkswYUYtoYENb5T9bN7UEcsdC7JPB"
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
