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
    "4cnHUtnUJF6f4VonDdyw1JBZnxD4KmEEJdPPekurBwYv1FhwSX7ktEfPzprHcoFy13V2rgE1RYsQbwW2KrsvJEDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53JfshCZRawhSoWTTMq599k83JFcnjAcUtJFHcmzw3nscBNH5EVcUvPm2gACfS36dXCYNsFutycZ9xfT75sZR3WR",
  "key1": "5SxRwCbL1iehUNWMEv2bw5U7S6o8WiMMu8ApTpagPG5cqbp86whGK76kuosjZMnBnbFagfQx5KFEd2iwiZTXjNaw",
  "key2": "2vMTnEnXcvEgFvwsAXFVdYLC68dN82opSwQT6GWb27UL6Qiz1iEJQ4yGRe3Jkyn44a9GbMKzb2suHJGKm9HpLtFD",
  "key3": "wBS4wqiQLNKUpvT9oXdjqcYjap1gUidsxhDSSz3rkxN8fn9TDMMJXNp66HoXeVspJZjtCqa7QcGjKGj4cTb2nnr",
  "key4": "39KZDdDyjwy8AhNLpThp4MBHGV4G8nMV6N2LMrRNVmbNx7oo8R1jnEY7sqYQB2ZZg1vSRdirxdKviFSTRFuYeaTy",
  "key5": "gafLptMVR8TsBK1Lp3QQFKHSYoJhByTP2nAi9rHk2axVSGfdQ7jM5kVurvDmAG6XKoWpfyvxzwfJExMsvPjUCWh",
  "key6": "3fNGHjmgRZvFNkQsAHvpe6yey1pCkHhfkfGtrZk1xwvBxfReVtRzD4JkNTtMTKBD4QtvNYknCEGNSxegXMkiX1rE",
  "key7": "3iMnbzhMR3RrLGjSfcNApdH6t87GscAWdPgnajPqFkZStWezEX21qEDhM7MLXfb3ZpiahukGG6QTGRwA2wgurrKg",
  "key8": "dwQK9jt1sageN9u7kTAMwZELXiaKNkV1MtXjiyWkyE8wxCQunDxfAdpnFKbDz1TM8KHScXRkevGjmVZti6Vk6jL",
  "key9": "3RswB7RfX5nGvdLU6MwntArFzD1X6eSqxg3bBjBFpD4dT45Csd7oZDm4Duth6jmnxLEBXgaRvEzpzdxwSrthpvux",
  "key10": "b3zh324NVvp7ViT1oth2wCsSCGvKDSXBE2fW6hE8e8NRMUK184yToJPZqYAGLn8HEBrkzLuPFVmdqLC85tWeB4q",
  "key11": "479kWPYmHvAsomZFrxnw7mnwaWmb5np26a38k1DXHw3LxaRqfw8AqqFzR7PxueNwoykxcmSHHdxeoEJfkvR5zkR8",
  "key12": "mz31jPFGGKGgKrLo2j11R8Ymop8iGwUvAadMUaMAmjSCAQz6H5qAosxuLngPyk6cSaQG3qPfZhqrABKJJ8rCFqz",
  "key13": "4EZQfgiarMpFRbnuCBUfbcWxqK2NRA8A3566igZZpPsLYcUxR7NrBD3Zqo7ucpNTW7rCY8NW7phYvZTSdukKS9LW",
  "key14": "5KqZY6yqU93eYAfUPg4L1fvE1gq2EXmDx8kMPwq459YGRKMuoGeKf5HR4o54627r3o4d2jSkbwnPfV971TjcdPTj",
  "key15": "44B3yEDztPbNp7ZGV83UcdpsqFNiP8aq9cQk7wdfUyrmSkTAyEiz54Pwer5bEW6GJ5LxdvcP8BQD2qWsSXdKWWM",
  "key16": "46aBjmeoMeCzS9oCpwTPrn6guZpiBrEgQUGd5bb5aj7zkiubmbJ7uE7s9R9ZRCU2Wq1AT4PUkSZXYXrgaqc1ceox",
  "key17": "4uZGgSX9WQZ5fL3M9SmKyvraiuZtk9Zm44eY56rnoJggbXjga5MhX4XZ6nScpyuJrKMt2V2fNny7Ztn9Doe99LWi",
  "key18": "2Vo7EGo4CWkcw3JEEsbRhEvBhcTC7opb3JJqb77sdfdy4DrxjPihbQifnAorLdkUg9sFWC55XsFeLxJ4vB2bD3JC",
  "key19": "2DBqcXczUiRrC16tJTt8TPHkfxBuRFi7xusfVfLM3tdVKqVfW8T24LySWLzBEVD1v3jGzNaRpHgS86HncibeQz1g",
  "key20": "2fPLhH6q8cmrhtLBZZP2F2qLmJ1Bf5gLM9Bm1RZ89PXtm46U7t4ABBrtQksM7n3omVvsdMQespDUJ7fJPhSJZCZf",
  "key21": "5diqey443qtoVeceEZcYa9NgUykd5gUUwQz5pr4XjAqkYKtYC61SUY3pB3R6F9hu7Cwgx3FWgWXbU45kHivPvZMz",
  "key22": "44JQKpbaybqWPXVthBdzV6fMvAcbgoR5gCLWYurZ1bTjB5wgHgjoxsoqjiRuyPGWWBsDm6p2Fvvwm8yhWKrCBiiU",
  "key23": "4mACafwDSrZQXpjSL7nB2ubW7swTiEiVB92wDe8HbhSCBwjdN1ohnkjvtdtbEx5ZbJE6WHArZPysaEQJzqVcfJsZ",
  "key24": "54Wv2rHnLFEKkCZcMpMLX6TZhpqGMCPumjNy2pVZVhRkKXWerK4wCfiyiQ7e44PRZD1L8N7mbxSFvH9ye3KZAvob",
  "key25": "2jSpYZj8Pk7FSa2duJmbUHH92fpW67KkE6KJq2KXiwUjp2sGQTthWabBe6GV6XhWGvsXUezJosH1jUG2cqLtK1R3",
  "key26": "3pDgay6FhpTnGWcvbfDnwv2ZRNjcj7mamDf5WFKYRciv4qG5wT87Y21ruwo5EeV1eHtDVkz9UETk5a1637gukAFb",
  "key27": "5oNGKZQsHMUrB5rMH1wEYhXbDirJHyVqiTcpqUsk52ik9p35PbHvQChfRR6nV73nHWjzRq7NqF2jKSDnkDEp82Kj",
  "key28": "2jffs2GZWekfUfZRGpFaXNeuATiwvfSfbRb6UpFfv2N9K1Gfnh6pbHR1QBuYAW8FYmmYLaaDvJWMsruDSYSbjyQD",
  "key29": "3CXqvhPTyiDDDUF8gNGaTkpEVA8y8ENwKBo9MGYpZr6rbiaHjj9kEbHhn5NJvSi6Bw87udiG64TMZEKYn2HxqwcX",
  "key30": "61QdVPqmohqRVbLRP93agEQc1UXEb8Wo1EuXv5ecG6ihFhwjGDi4zRpqGmhFZogF457sjUDAqV2Xi6iRTzQbDBw4",
  "key31": "RQx9j9cGV4p8nZJJpc9TrB94NfPN8niaGZTXy6zYeKR7PRRqd3YRtYf7qf4N9G5hp2jdZjyyZPCXyPFJW9ZSNCB",
  "key32": "5Q71GoRAhsDjR9CxdQqJGaBRZwiPCWqxZrnhgusH2WZikFtDryKfSFiR3cbThi11BKexcZaTtsVppjQaWjxqG1LA",
  "key33": "5dfE1csfv3pV76pG7VtSdXuS4dBswPyGNF9aLqmdEQNtNHvAvhSepCaYyyHWxmC34eWyv1kvjBfuszuo29YJDKvn"
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
