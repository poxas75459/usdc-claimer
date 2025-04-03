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
    "1hhFkpk5BPJE5VooiyhFQ6F8tWHUdM4KueKdV4HeMBa3zupjrRAHz745hJgLZeNioY9xoV6G69hEqZqKAHNu3z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mi8q9U3Kr2cvgCu95fdqNCqZtKrrXRjdo3dF1GZ7wxy7jiGFLttfnWrmg9j5t35fMmYpMVLcA5UQUTuw4Vsni92",
  "key1": "5cYkce4n6EvrrDL6GpUPJFcC9f6xw3PnaMuWeyKBz4b5DsZuNdudFDTbD1RfisMfH7ngb6qz3wdqknKgBU3w73m1",
  "key2": "448NTeFJM1BqqHY3YGUeKchPe7CPBhbcmduqMVS2LZr1C7Z2FSa2ZG5R8r4zqygNihvafE8JByKvG7dhUo6Hc67T",
  "key3": "5fFXfK6PgczRA2NKLM6mr69MUPh3gKZBcdWbVFadL3G8DG4EDucnrKyXSY1imhBBYdfZu8d7iothfiTK8jMyXRnL",
  "key4": "2YVVehGbRMsi7sAieL7kaep7ihDbM21WxptHWtbK3HwQQXw7EdMK8Uwhoz3fDvYMPm2uigBwKkbimgJsHZ6qNNTm",
  "key5": "5taeUd6jmQz6EQqHs3EYABp9VTJLoXcd7VMARUehPuf4zXLBYAc6xTAUtcLs2wwbhLYNQcgxRf28k4FFdhd5fc3o",
  "key6": "2kNUSHNu3EAFckVrMGdm5qqEX5hXtSZJb4Djfgb7dZifXSwRKEiQKVkM9uUB6o6hWFYAxzeF56g9Fuetpmay1qA5",
  "key7": "5KTZL4DbQhsfK6gNsdMaqo9Sg1QdWqhr7EYKUkPLGmeb95FXnozA892rA33KFwMKpFK5XZA1sWRRFJADHHNBsHdw",
  "key8": "63WtMoz4rMVswc7z53xiKAmhSqUfc2z7mqTWCjX8DJXYUALsquKfgwLa5TCAWH57BrJFs1GV6pyK4J42fKeHmafx",
  "key9": "zruc7cRMkQktkTMKGdRUhRDs6vxDcAnfhHxinLmZrhyBNjXT5sewAu298BeHK55D7A7KcNJsWELoMa5yh3vfFYw",
  "key10": "5qH29VNCMTwmK1fizBRD3Nop9G4GjVuzvcDcWg2d6vkZV7oYqEr4gpRJ4YBJ77sMY8Y1T6EpSmX2iEQZGULHqFQZ",
  "key11": "5thnUd7FQyEXGtzoHFCpVYzmE1swFEGv6JJ8Yey4CQZp1Bo1qweE9M5PjR8Tk4qGrMzDRPMey1R1KcBy71WHj6nt",
  "key12": "5FBfhNjTgfNUDwGuz7p5BHGbEdcY4fTC1mqxFDMaJvNPGVg6D71Duvuy3xx83aX8UM8ktdBjXQie8HDeTUuqFjyx",
  "key13": "5qcR7JKEFPzaHqqMjFsKaaR4tkP3BviWQWc358oHmcWFCbTeBhgVQbpDq91RTK4JjFifsciABTjVHFwwUCaizow7",
  "key14": "4XW8epxZEibxpvLkaLLEpcLKmgr9oyyVBAuUh5MBjhf6nhbX3QjpDgtYsjGnF6zsbx5BG9D58p38kh5yectjiQcY",
  "key15": "xF5VZuCP1ASGFR9T5ihRsVxaRY48FVyGpEdro1qFJWgjze3GkccNFTDMAfYF5GLJtXeMe3CS5Br1tCjvDKKoCCw",
  "key16": "5mSxKKBZ6XNp8dSkeE2DKGCRXmVeXJh3jDKJEjqHcXLnsR1mnXan5yxQZCRPJuySZMVMyHSTJ4tqpBhtWpzPHhTy",
  "key17": "mFoupurFix2rqSbuPeh5c3k4QTVksTCKbYCib351szjha4pmt95LXxgUFSrrB4d9xLxYXqNo5b6hfE8wpGdH4qW",
  "key18": "5UEQC2q3M8ooMDEqbzPxswftjCaTZ6KvhGkzkVuMBRDLqNW9UYLi9wojaSwgcTY2C7caF7ASGjT7nQsHGVQfCxNc",
  "key19": "3H4Uvox6tjFhDXEuKzWKmdousbmCv3mvxtUBb7j8F1ndzr9UoWV1QYXb5L15S7bysan5LPrkuFj2bq3QvujJRNyF",
  "key20": "2MLeWEYqiWkfqdJMN4z9btqDzDc39SvkT81ecthTF7qSXEFBeUoVRtsfQv1EPZu38gqjAqupKZVsRbNqxGum2WCm",
  "key21": "2bJrcXqfALmwbELKHMxvJso6C4trEM4iZAYRaVvLsuSf4sGHZuL4KWfSQbmQFJj8x8kBGeT7ASUuFYqoXkKaL4Xw",
  "key22": "38863XDYxj6yPKnb9snWCjCYrConJPELRGMw5dUUWX3SMUwv2iknsziTQdkHV2eKs49C2fiEYuzZk6Xyn3dK3oNz",
  "key23": "4rFuKrsVV34iqT8HUk11kmXpZzEV7CkXGtM3xprKxQrGqAbYqj7Xj2hXMjf9yNzUimw9bXyn6dWHiJ3tcLvpEB1W",
  "key24": "5752ht6Cw8djbL1MQ5L4yhpLUhDND7mpFNXPoDXN2J5uPWQyeJXDxuVa5cWLUvFE8v5RqW5PFKfjmW2DAKLWRGBe",
  "key25": "2VFLtwAdWMzGzHv7LsbkMzoz3M6qPJG3ivvzMCNoG1N57UiE4VcP3jwnZCRbxg279YWaopmHxVZxyQ44aiswWkAu",
  "key26": "NzEZJBh3y3WevhFANEkdCmeC5qaK8f8u2nguoo4HwrcVRmGGTcqpQ3ZfYjhEE1V4ZhnNvRkySeiNgnSdYgh4o8q",
  "key27": "4CaHNkobsbytiRHRUjcJXbQQRrhQgzTYCbwGF9AyxeJ9viR6i4UaTc5HKZYd5CBUyCuxQfciWAAJatk2L12PrwWb",
  "key28": "2ExQezgAhBkfbC7y4akogRFveooFmHkeVicyR2DBfmd4U2D6o6raH37Qqkv78AbCaAGU5bMKzN1V1FZ2u35kUFMD",
  "key29": "5bAuwNhr4zKVakSmHRipFYbBiBQubyQS9AaCaZNX6i1Nq8pFhU2TqdG4LCkUDqMvEhGVmwYpmbnenCSZarFkWp6j"
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
