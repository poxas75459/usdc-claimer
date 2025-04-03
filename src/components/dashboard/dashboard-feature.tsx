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
    "4iBn6dYkUikfz2xiVAk2UJ6fwziyT91y7wKDgeE8zNZfmFYRpDuT7pAW1NbSk8SdDVyqy3mYXse1eHrV7HHLZDh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vcaa3bsmB7YbaUxXr4YhtMdky3BCLJcY24pXxsmsLF3SWQDr5JWHDWP6HrwbVk6czPZabVvVgN8rzJbSvoN3Q7B",
  "key1": "2RNvLNrsHJDKzSH4WGybymF7bnfWDUJm4hnsNPC8bvhftYFfUBNZB7FcU8xkkJt1WAXyuUh48ZB4hxFENqGyg7rU",
  "key2": "5huofQLJSpeFzfxapaLzASn9MXrVGAnRah7uKEKGnMYE9KJ2yAUyVdZN2Bj2UWvHE6yDBVH2LPaZDJ8mX7KxcTTa",
  "key3": "5jfQUQtufdEo4es4ycBsEQnv4Epn2hTJu1UFGmspyx221GUL8yQMRvXkgErN6y55EJ1Tc68BzyCtGgttHhDEKKey",
  "key4": "5XxMEPwXkAwjwSYccQmeXap38vDrijfXmbrt4QLtJcEESJiwux68UWjHsC4J6gfzCUERLFWaRT7NtHbVeoiWM6Je",
  "key5": "3xbNTzYncaZxZsyDQHmLeajWiXpcD6BLHmJHH7sUNUcaZoSXdArG9HTXhYHj5hiCSMUdTgskeyEmGfk4YfeNAUDB",
  "key6": "QUPY6Q5eVrD1piZNKsjG61i6voBhdcDmdagb5f9n3nUq6cpPC2QHum36qRsChN7tAu6npUKX8JDfm8LGNKjwGQh",
  "key7": "22ehW3B553axFu952A4Q8znSWBQQz2WumTc31XkwziJUPUxHCo9SAFQHv5fcs3yJ3wCqE32oMyAn8YmmxB4cyByx",
  "key8": "64hxrs3FhhRGak4Br674emTS5MGpmL442S5JXVNTLzXZp4jbr5baA9xR52bLMW3BT2gpxNJ9wzGL6QpTw2FPXxbM",
  "key9": "5J12iFLLnTUCYPUXyEdvMc6exe6pT1hEeDRnbuEohfeKjBNHPB77CynpbNgnq7Gvh3i632d9KbQdw9Cmr6jHRLgT",
  "key10": "F9ovR54eGHFd61XDwsegNqSsMmvnZUJydtPQ2nsPuLeaAKFGTYgHWRp1GwocmjzHwzPBLT8wM7wVGKAb3u9Q6zv",
  "key11": "5ynDMH5X3wHGW6mxdVm5dgaWwj5dPgVozt9ZoCsKs6Vh9pvryV2eSVg5kAZdMKo8RrybDEenqZ6sqay9MqNHgwMs",
  "key12": "35oWFY5dd21nCzaGAh7XYt3g8qgHi7dop8nELE4wPBJnozFqCKq4aWpwzWW8t9TCqMLooh2nfjBbcXggRPP56u8A",
  "key13": "2VvW4jjJHzGbYCMjJHT5TCeULJeCZam7gKDYbfu2gFXq8GyvMZhmR7CksA5KuJcYBdVjr2MhVcNSdbLgqUN22mEN",
  "key14": "6MrnBuX9hqmJFwn8DhSCXNgbWiXiP7GEpU3CWSEMhuLnHLBBMwJuDHZ2qggmsxUQk8FbofCpPYdG3DmbU4qq3d9",
  "key15": "3JiRpa5MrzvJH1J1NrbNAE89NexSjKYc2ekckCkocUurDjecNHQTVoHaQfzznb2UAr3uz66drMSYjydSdzZGDdYW",
  "key16": "4Von3EMf2wtJhUrB6MNvvrc8BoH1K9xtGPD9S2YDw7xeVehdnQ6Jpqqm6LtSuooJF5dW4AkivquZhxSYeTRakBwh",
  "key17": "3Vp9622QpvpWnHYy97Y3MRWWqouHNxqWfs8yKRSRBGYGfTsHj7bZz5AdqaFNQ37zUVQusNvazZVuS9dhaMcpWt5q",
  "key18": "5ewchMBQ4sa867uKnc2KYrtiVb2UKmyxhPGhwLNg5M2tSeRaf66vZujvbwDVfvg7Keeao1dRjfjNMMJhR5CfafTL",
  "key19": "62aXwqpprCEhAeifBUwD5Q7oNrCvdwLvTzkFfogpkcTzZNpgdJow8MB8gqFYcRZ2KxMnK3csFBFKwSyDfhYhQHgu",
  "key20": "2rCF1hUETLsTNJB5T1pedT7gxxhxzuMSUgYQHiPgGMUFdSn6WsraNvP8pbrpyfJxzNaxodeSaawvEKeL7YFE6JW9",
  "key21": "2CLtr447nrdXPbmVK76d5EweCk9YxuVEhQRgT9g5fozJzBx6KCtRdjL43pMKZXAT23AXxqgUhaWxWPBa9qcjegpS",
  "key22": "3CnWRw3XyQbB8wZejCCBWtD3DcJ7ovPgfsHiyemWwmcvbhWJUTomZt5BpL3S3Kxtk7hVZcfayv3NMrMvsYDTgEv4",
  "key23": "4kMVLZPkrtpUa1n4kPXJU7xF9Y8m8HHKdJNk6YLi6FShuXssETkjVH69f1K53svHE4FrBzL4Y7RWjpT8rWS2u3D2",
  "key24": "5KzecxiqRvz392qLky5CuzMYDDE4zn7e51qerTHgq2Z99eUWdwfUvQdUrZ1fy1RfjsSUSTPi6xAc1bnz9mkh6KtM",
  "key25": "5gVaasqu61KxDb7aa914sqR3qwEpRroFVbtyefhxDxvP9Gq6tCaWFZTsvzrp4LdZmMf8kfqnKKbCkPBmXCG8Q44Q"
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
