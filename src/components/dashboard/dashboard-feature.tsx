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
    "4wWjuUB6Gvw15n4EPk1dxAxFVn6MxQ7FQA8cYsdvF6fgPjxoycmmdW6aKJbv4TYJW51CHQ3vrK49z1PNjyynXRi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21KCmP8kZwcu3Do6HKyMzYcTjzHWSwKivWeDzBsu7g6nB2QMDddKqowt6uqN2m5BWLUx9PayLH5KL8U1pSX7pkPM",
  "key1": "JoNPhP5JfDRVbSsoxXm3CJqqXURpRAF9qKN3HAXo9nf4D3P6Ky8B9CDZENU4C58cTH8LZtuYFiPqWUGMmYxBxyf",
  "key2": "6592SydsHnkS7dwrzbrJi9ykAK9bC5hZdTYGMhvBbLwwUVJET8iVvyv3ky11f4VSfX1zAv2y4LDmHDUgHStYb79E",
  "key3": "4BdG1LRUHVJkRhrBVGe7iKrX78TmGmHNzxKWNpSt7JkMDFaWLfA3TiCfyGHtciegp8G2Fi9vNwaTpTe9kzV68NZe",
  "key4": "3CXhBPtq4zV2hZV9ne9J9HewmXQNAYFnN7p5N9X6ECvdGGz6du7FzVkBSf6FJLfpThoicPSqu4ArrEswfPphnXxV",
  "key5": "3TvnPtfswaQh9rRt4rvkSNrFu58KPaSiSs9sxmuX8Johk5xRhuuLSYRWr7fva4tC7nZeQ2F31KMZwJCuUjvpamdW",
  "key6": "3ZM7zLmsi3oP6434bu7BkD9ebhmbKxEnfFTKJRSiGoXE3phQ61htKkM4f2LWhQ2zKZDmVkH3NW4utEV8ei1MJ7W2",
  "key7": "35W1Yk3AZq1nfrR9bL3YMCiwjxwXxFCYnVaXM28gbpca3d7c2P1Bt8sCXMfmLjTEapDKvKcc3ybtmY9MvU7e218w",
  "key8": "4eGeeMASqfV1o1pa1uXJRu2QXymmG67SFJqvVeaMPoRu97CcKDMpHGc6pX9WsSXNmwaUDXYDzkAMF9JFSvJspoWf",
  "key9": "4dCcjHSZ8io1ZLBoPnm8ku72pEzMQsNYxR5YNVPkoPnyRytHbjvcBqwkFaFWFZHWLi5XoU1E41DcpkHi28RJdfyB",
  "key10": "VYdXq4X68TgqyC972LSkCbjM2yiYRhtGkkYg6cKVBBh9fSEmpiSsBxkkhiGcut1Vt8ZGK7D3NUb4oR6AvCDj4t5",
  "key11": "Vch4fcGi4ojji9yWrKmLX3HQ9ohG21ztAo12fmrmteZRLNSrTeXLcQpD1UKfKpKAAoJ9hogJisicvXpfJTEbES2",
  "key12": "3US2EsLYk5k5y8X8hrv1icvbZ2a8zTjuF5Q55g8e5sQ6p59Ev1JbHZERhJW2PexHixooRaizem2LYxGc2L2ndCZb",
  "key13": "pPewkL2tSAuXpau1Mdiuo7RpDDFwwh7WmcRzzRH2ztkPrijUWNnc9CdwMEMpWtA53bHtahR2wMX5sp9PUhjm5wp",
  "key14": "2Cnj3TvEqaNyPSvjbDejU1Hjt59bGJK5J1vNy4gW6QS816H5ucfFDV8qKP684xpYtSks41o1khmRsu5a1tX1ozux",
  "key15": "PFTemHgVKxdFtCoEF5tThUeaWYbtHMSjnRJ7irZUarSwK3z7oyNPQoNFqgQFifpzboFVJfU4scsGqNjU8dY2uX5",
  "key16": "5HTXzYGZUBbZR55HyXaCJgVzpMERi5CCPnaFiygRxwRY5WSwEFJ8PuBz99QfWEdiRdnP3CSPJoct4XPuETJ2VxXp",
  "key17": "52c5fFAijm2EUJsB2otzcrCJV3KedTwMmu6pYkUwVFe2YDogvHuYukvSY4dkbEUXf8JXTqPyvkB3kGhmV5go7Po5",
  "key18": "5JaE84Z9oiCx3EajDmcHqmiRQdt4e84yDtNM1X1QTrKfhARCFanbYTMB4RRC6FLkjeoDhCbgeSev4ni1g9UDDgPy",
  "key19": "5PhTggsZrZ6pFP2jmH2dbwgFVU4TpB3z3CfsocXTLiMhpXd4LRq3mfJmBjsKFc3VRvb9Mm7auVJVBd5yEBr8YgMK",
  "key20": "ePWNz7QHYgTL68BN4PF8y54JXqqpBMN3Man6jo8k136j5GA6oxg3PJCyQUAHR43NTWC5DsvWLeh9X6PJwdRRAFm",
  "key21": "23L5BB5vWVAwhEj3ShKZp6G3wdMy6cwN9NP98xFAMXtC1rTqYiuhjtBhVY4wiJjZe2yJzyqM1L3NcycJgBdgyJaF",
  "key22": "5B3Egh9bnmErvc4kUz4sMs9KvhLEi8oYQD8X8hMTWvcDnf1zQBfp9BynbM3gbeDQPZNXgcEDb2UjP7vJ51AwK21t",
  "key23": "5oSPbyQkhRN8Z7udafPyZitXuC9CEDJDbcnYFGyv8fM58d5aHJe22MTwX7nm8NyNLg6EyfgRYJSAGcaqMmuP8HPK",
  "key24": "3e9p1iiqHCgDbsgJy5WHwHWkvjG8mAqrPVypiY275Qak3pxZrvq7ARigYE5Juo9XuttyhwNoTFi2nryDWtyoBSXG",
  "key25": "2LvEVuYaxbHaReTk8ci2nQU6zSAHpxKx28ACjSg4vYz8pCzS7nXRTEGrG8RQzq6NRQbjTxhf62iCUshvonFHKD6J",
  "key26": "4NwEzNfVZRUUc17NUHwz5CKs1pJDY9BKE3k5fdH3q4i3z14jSZpZzdqBZ4aND9JYjBe7EaNeoGD8raQZXAzvF8tV",
  "key27": "32oojJnBoRqQtYxpoQixe4Ahrj9tuxzPSD4XGrjymwBmXskJDh4wufJkpV6CpTWn1nNkuxuf4c4ntDPAnGC6Ymee",
  "key28": "5k5CA2LmLfAkjh8CLVrpBDyo9CJEdjtLM9j27X76kxUNpfYJTY9K5aP5D2vYPWhyN56ap3QsHQRCNo6qSGHSiWy4"
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
