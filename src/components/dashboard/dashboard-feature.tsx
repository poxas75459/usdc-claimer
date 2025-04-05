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
    "qgDy36VVAwZDF1wUYBMnoJjZzFDAGxujqtBzAJK1CfYe82pkLLCCmqro9RZ711qaLGHZ5pY3dHcE2eoiYGf1vyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cZ2SMmXzCK9aA8sLhKsvfKQinycr7mRBVZU3tG6SyYfdsWwkJfK2rECsgQkT8sBqGR83E3HKhMd4hXH7D3r6fyr",
  "key1": "5esdPyCrfnudBhWfqGueKLGEHYWWjvE1562am8HFTityqiFhKSgnd8eaDc8axAsTT8Bs84bvy2bqUBDMrMc3rt7J",
  "key2": "5ArVMLkDfewzN6KZR3xZ5oooD3NUie4Y1SjCypbXovtPAURcwky86vmL9ftivwWSTu22kkeZmahsj4HR7DPvaajP",
  "key3": "4n6xeHgTA4zb7K6WXYDhVdyetgvfNhrsD9oUEayoZnKNJJQvrkD4obZn8XEAaPaE2Ud4mKwZ5oaEmSA8rvASENZT",
  "key4": "3tXJD2pURGUmuZhP1j4LK5g3nnPuz215PJpzJzBEtLaS2eKnsaa7pZ1S6C1UduyHKvyQF2MrRxcNihbocZSFKvWS",
  "key5": "5KhEZCvWzVViRiM3zmyf8QnPDTpxEPp9X2JrZX26b4NttCTSAk5tN6MhVPBMTKTBxsXdqkxDu5nGgmng8P1pmu2z",
  "key6": "3gUoXEvUoTgnZU6GBY15fkPUE67ptn7x1GuigbdHRxmn7paGoeRAmNoUiCUyyrsPKyr1aRFECxpdQR1y98jPvY5o",
  "key7": "2eLbHGNNZpwsiio2Wev7F3vogxmP5iwqWNNdgCFDoU9G7xbAKmBxRbxmA3UJTQzFnJRT4Cfo8a6aKvZjeCoVteep",
  "key8": "3cDveSe7KXwjvjo8cWPATHvwiEkBQ6Y9TquuvztaQBPgAPEDib7ASBFT9b7teR5ByZ161MNrYdTsp1W7tBv6HJVQ",
  "key9": "uinJUQetkaaz8M69h8aKyRNMzbUzVkuRff9aKsucJHHWzqxq8PfKtWtu5crSiR3zXUVQZp85VMvCc7XMZ7CA6VP",
  "key10": "4LiFtEEdgrEhufMnZkzKF6vt9EH3PvdNJuqDx1ie1FUBpQEC3WftMGBiBqs1m1zvUWqzKGrwBmFxYijpgPGC6Typ",
  "key11": "21eXamJoWedP5GGsdaEw7LBQCfmLHk8qHh3qKSGHqQXfQHXpnTSR71MBFzyXqKV4QMiZuLZAwReThry8yGXZx7z6",
  "key12": "YdcFu7uHm1Z8xB6j2TMi1BPs8ao2q7JQfCacpcEojySGQ24RomDDMF6EpszsqNforVU7yZne8Skt6dG6mX1xFB5",
  "key13": "591T1WqiLEV32oUeQBye9U53k2fMj6m48SiB5gKsBrXUtbokrgU1yd4bAHc7B188vD984Zsa9FJianrDzvddj7ct",
  "key14": "2ARnvCthnZomX7qvhqH1NWpZDJXq9sxVqw6rNdWNgaRFe9vYutMH45Qm31LzU936bEv8Vso6weRoeDGbP9cR1yC2",
  "key15": "VL2617pHU9sbabLZ1NGnT7jahfxApW9bxWAyXyfP5p8zSggubTFpCnV3iC3znDachY5WwmD1yG3DBfFYKQrLTRT",
  "key16": "3KBqZtRqDJdH2ywSXgaZw6XBURUSF18pWz25ZcUDZbHjCjCXeLZ5UhXjumrXXvFqjmo8bH1ad1Ymq5d9Ats9ngvD",
  "key17": "2VgVrbCVbJDXjXqQ3kPbcGbBuNjZUeseBACcoVcQ4yQcFcNC4rAFsxWgErV5xADiRUfiJmCo8vVBgMqbuZHFVzJv",
  "key18": "9nmqqAibTz4ojzJ4saJZyZtWYWvpVA14UhEYwtsMzPuxkUX4GmSA2KKhPoCE9GG8Q8BAjG3srQn9AFYvN5aeZvh",
  "key19": "Rjw4Q9MpqVQJBKwxaDsqeqBTeZKHcVJTfWrLXWP4SDXCWuXzrvP4knzqR5g1tSe2jb9FrubsAtgdyPdoNn225Yb",
  "key20": "3r86fRdgHPE2u8gRSHdM1vbvUZrNH36PTs8uoE2d9nEU1c5f64iR6QvSfsLHKRnGSbpR6Gv8McugDk7ukyoFyMeg",
  "key21": "2gv99814buxsVTkaYjwkpQf7KxyqKsDQrFKBoB8FutUW4TSBm2eTSPaNDrJYBKrgBEwpDFi9f6rrEANexHBGmeZ5",
  "key22": "3MC3Q889WyPxesofpDj92NrY5WrsFjEZSPJp5ekdSVcek2cPYuFF7ow3zsazK9h6K9mddEdNS1pYt4vnDSNZy5yD",
  "key23": "5GVhkP4ThxmFSapDGLwxt7216P8MvQmCKxz92TaVLtW7MiDrNCEfebo3Q38rZp2wRAvPJJucRZAcozia987AVMfB",
  "key24": "4SCMjwaLgg8BYUeBJwu79CQfZFAbwmbdzXWFaNGqttNvTG1WUrCUxHFSS6d2PQpj3TMYxoAfMKvVwW64p7FSSTSJ",
  "key25": "2GsztgjBpBWHMEZqXoCcme7Sx54XnRrfBVDfGshwJNEjxwtZ2TbGtUCcegkzRnuWNAP9HC3GBvfRcHUvrxkLNqu7",
  "key26": "3QtBxe98eSvx8yqgL1a9AHE64suUUQ2emfjqcdsfZgQEjpWsRwhc5HQJCDG5LmKws37EqDPBWhqWv8qzkNMqNKvs",
  "key27": "2h948XZU3MMC6NCC97UnqbMAGd2UVkYNSirMjhNqnHbsSoCE7pgprqfLYhYRM2s6PWeECgvSX39peZpUUJjpjGbQ",
  "key28": "DrGLFMarM22PAxmNKWe2NTeNNaC25NKtrkEv59babdTw32XLWpf1y1tEQ4gvjkkdXP8PSWRri58FExpTwK9sCga",
  "key29": "JJsimU9GMG9SRpYgbQStuvffGc48bfuxV9DQed6kCVMccKkKpasw38BEmLA2jkdLTGtVwGvDarUUjdFxPvZWaxa",
  "key30": "4ygn9HMrTZMcXdibx471imgoWhv5KkVnSdaszMojc7wQ3coud1hc6oATJ6eREkk9uuEw17EeCpNs2yVxSbaMU56D",
  "key31": "4XYGYUe1EWorz7ch8erccfvC3rBWDE7FeFTH5e8NdNu2RKKXxwkjYJb2Qz6FMUtoQazZRqxXSRihGDLPHeqbfsKG",
  "key32": "5BL3S3X8wY2xkBCW4KjP59KdFt5QB57GUwbGuvJJbBagXuGKKqVQSSw8RZKskvTZTTEsT9GW4dneMw1bZBdKoQgb",
  "key33": "2xdNkmvLLq4CSv1BbSAiAErHcQZr23zQXNMC9ibk2aWJu1te2xEz2y2nukQxTTvx59UFnmz5BvzYzsn4g4b7Xyna"
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
