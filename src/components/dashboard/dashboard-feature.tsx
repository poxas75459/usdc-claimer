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
    "34yQh2HMWpFjXFqD8FqvJjmqKfW8WNV7bhBQh5Wntq5izyr3d1dmurk3i5rP72Vs8WCmA7vU75maf9MniNSJzbLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62UH8ud6VUkeDikau9gAT37W626872YqpWwRNTbki7wDVrN7aVjj5Uaj8oYiDo8xDKy9soh2dTCiWBcZeM5LwKJj",
  "key1": "5jHT9E1hSm4GuXMKo2BbmTs5cJVhvRxPyv4fA54ojTDFDcPEmR9SFS1GxGgzcP6QZ8J5X9s25SydLXyhNRjmSVVR",
  "key2": "wUzyPyNYNk5t76Zp5otBjL3cGRvYqfMJPXA2m56w9KTsA5TWyLZ86WrCRNCaQJVgFTxadkfefKxsGYYurW8NJwr",
  "key3": "CyHXFdw7BGH5fqqrqcBC9McP1gT8k8aUFNhdghDS24QMnxjtGheEXBGBU6RHkV2KUTSLvwFAqTUGNyeSMjyA3xV",
  "key4": "5pMK1DUALECVDqaWjqo2q9TuZDSZ6Z3faL4AuVySBVsv5XZbfyyazsNi2JaHFMcsxz8hFnH2PtjQqbdPULAXMdCv",
  "key5": "5Shovo1MZGET9DkAmG6rE9Gp9ypyTmQjJ96S4DkciSg2DYvVFHoqeq5wFHHjHmujApKrQ1pXfB1QRqYCde8pCUn4",
  "key6": "5AfrY7PHNe7139Dt6s6fnFqXnw4dBfTGHiFFULjD1zqX8iux88kLZwV6WBCy6sGiEeM7qAwMnDqfYVc9v6b2UhE4",
  "key7": "5ME3aLoaCiuEMi4k8VAEFqsiZ51Vxr4Y9MTGW4YKWCjQSQjNmXstYASC81w3AP6uHfLExTqP8Gqydo7nx2Mip3BS",
  "key8": "3hgFf2vx5zvYnBbRde6UAgdzhksiqhLuNGKWprSG7fhqSUSnwc6d4PRUa37pZg1BAa2KTS97TDDGqbTxmMdhWmYr",
  "key9": "2FqzYFZbNY9rG7U29rcjxQacWGnohquKJ57vXgn4SwCqgRXSQVTWaScVMYftUuh5hYsMjGkNCoMRAh8yrRhZE3k3",
  "key10": "2VV4JZEYZ3o7caNFSGqJfj9X7A1TdCEpMedBC1rLkvogH4FusKzHgtCxiprBRiUE18mWEs2jcPgmaQhV29xeRssa",
  "key11": "5MaYaCPtkYNfYbxXbrubmc7Htk9miyhdHnxBPEgSwGDiQRyAWyRNuqekTZgCxK3MRyFkgzjFgwEVp5qRwiqoMzsh",
  "key12": "5j37RFyz519ci9iAwcuX6n6KHCwy3kcfPLBuvigsAPRTdDizeyE9aYMMgewZQscC4LY642gpfkb2ouuwEZg27pQi",
  "key13": "2agvowv4749KnXwGpa67hyDDPQunHtGUmrE58ZgQEG6Wf4Sov9a58Qx9PMpk41E6KQWvB8GaRkkKH2jbrGDSbV3W",
  "key14": "3kvz8dEgCKPFJ5dCNtGc4usNyM3xLJorM6C8tbEKKZNFMoQrZM6Arumm2EJ8CzJ1wpbgSnftQGFrf7GM5vCaXQqn",
  "key15": "5afcCFVv83wmTuvoDi9ts2HG46Nj9VG9dCGQJtkze3pdKAMcqzNoZf1UiqqNavYfbkypGUcd3eaQFNmfzcTdyzwc",
  "key16": "2VDDyawBdRfrriF9anT4zS8NFCbjJs6XJcr7EhdMEuvceJ2Wieq7CdRcUkSTYCzaBtvoZT4yd1264d5BeCmvHbcY",
  "key17": "2LJXT15BWTbVEnPtQVDeN2bbiwzGM7in2CHvkimHzj58JhrHQUpxa2dqezJC1rcKKMSjQZdVPb93iNippobkTiDz",
  "key18": "3hULSFu4tuNmZdoWsfEJtYTPGk8rtYZ4gn3sWrhpzUAcfY2wVGpvUB6kEcR4egSkq4k1TNxobDMnQKnhKLifTKkm",
  "key19": "5UZk1QjaVQTDJd41t4AW3f5JWcpifHTg9y7GvkyjaDFME343di6T67kmjYFVqHiGtu1MUw5Sbr5bPPophZyhjk9K",
  "key20": "53G8LA25joRkPUWra4dhSPu5kTXEQpmJ2EGeB5QM52MyxiXB3xHpvDy276dvRx1nanw7F3Ygf8Sw7UtUdANi45eq",
  "key21": "5mbFbs5T7j2iy1TTyNzddoiQa8bZeXyZWKuH1jL5oc2fUg5jCEZkknqpc2GtqEkT9yRSAcLRYSdMAviHZy9Z53Ur",
  "key22": "tW7k21Vd5rpBVc3jUWSUbBgooUbwpcDYFEbuxCixKENo92vGwTiVdZDoexhGW5XcHDwDwodqKGpYjY7zLKDSyQV",
  "key23": "3WZ992YGc1BqLdGhpT3pCHfAtwmrujZR55NuLSMois5LhALcNN3b2PndQ9rKx3uDMENkdFf2FjD2Z99Wc51M63Nu",
  "key24": "SSGkEZQMj6T86Bpuf2vDLiqp8tMFZFzrmGjYbQ5oF9NW2PGhjMKvfNDbJw5yqzkfr6MHfWMW46idRzMBRKGeAjb",
  "key25": "5oURxzjuzkcUYHEkHkS4DLriakJ1APh3JgwBCgPSAKkoHMTxDabFoBxuSYGgcdzKtZuXW29PzdkcwSTfQhSsJjPG",
  "key26": "eKCR8prvkuAtJTZ3igAHY67ZkB8wcSVbut4j3oT19s1A5EFfBJdJh36MhSwCNSsjwfdPixHoGVudFS9NjZQEJDv"
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
