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
    "2jFnQvAW362E1Y35UFoRXt3d8qGa3DnuccRk8UMpVNomgDYPEEdPKXfo2u2Rru7H98C27YmUd6EAUzZpACvG9F15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2255aAQPJmcncxHwpcJYNfHChku4oQo9fr9omz2awfCjkzn8y2nPT2YbVDefP3wnHHURCanU3CtNgYYcCUrfuKP5",
  "key1": "31eXC8pF2pXyuryH3cspYtqpnZWrF1DvhFP5fPHNCYacX9Bwrby8EkorjSiNDxeVg3eB1kmunPaZF1dZyzcHwQ3M",
  "key2": "bx71UDsmt8xWmhAsKGu5XDQkccgNfR9JxKDbsV3jy1ruEGeVMehRQwK3AUaWw5bbX3oEnw8eLZHqQc1Q6LC3SNY",
  "key3": "3yGmE7A7JnGjFY3BpJtPaiUK3sh5fcdW6Y6BbGSDyVZnGLv7SxS7PLwt6juAqZD7LJ8LU7nQHtMBUtug7PY42Fr3",
  "key4": "5HQZdTFX3oWH2qpHPKyZQVVBpBL96SCZo7rDm9NShMPxzu7UGGZJyiNsy5bxRyNJvfHMJnu7gNB24K9PHPzcsiwo",
  "key5": "4zbzGY35WC2Dz7xycSFNJhUKTWqUthk2e2befYuPK3gVZ4PkTgexdHjjj1dCnrDMeC9q5FnVnSPw5d3s1UpWrp6j",
  "key6": "CDNRKDV4uHbZBshnKgwtopJSG7m51qjmCGbnfVzQNLDSCeJ4GeuP1U6VXZsX7GRjaZq44LAM5M59GndFsNG1MQ7",
  "key7": "25riuVyP5XT2q4ugS8EdevikEnyu6YWHZfzEwSbKpaDL4YEq1VSoShH1sYPSTTsNB4Du7pHbid1VsW4hyZ8wpVS6",
  "key8": "4mx2mUdJ3xZwP6LRY4Ud2LRjd3b5rA8XJ965Y6AGYJHy7jhxPpEkKD6RhuwNudJRr34WfFTvAQGUfNNrWcXh6bLj",
  "key9": "2gB1ie44Yjee5LzMPWtYnefqGAY9Vireh1j1mm7N1t6VZkQry91gPCXzm4yi2Bcge53S723jsA2t5MsCiLMb6izb",
  "key10": "36546AxgYmjk4861yApDDHY4dEqMc29NWscABumuzQnchQjxssPh9xGjhqnbJctLBhmzUJ31qKN6czuYYA55Ds2a",
  "key11": "2Ewy6ap2iGQ5BH3Bun2hsth2GQrT9aM1zCdxgJp5SXJ3rNHr9jSmrcGyKnC8hSDvzzQ5pLmdsDPvxnRZRMrAz6YA",
  "key12": "2b3oHWkGGVrKeEX9LytqF96NsL5jbkvtnBR3Pto5B4WkH67MXr8HQYKiaqYteQjWqgaRa7PfwWkQutUxrLfdxphd",
  "key13": "3EPW4bmd4DUL56qVeKoZjXF1e4eFtY35Fac7DPPzsfhmS9jLykb8t24BFmnKSBsBZwbW53Wgc8vjjMYiMjBa5Mq5",
  "key14": "2UtwM2Q7akhGh73ever4HBnJwhhJ8YpsxFjmk8RMpGZWzgCWCshpVJLKHyCLw41kq4En2sf2e23C6dA71WvADgUn",
  "key15": "2Sf7JG6MUnEkhDtgDyVUs7Q4BMAcDwHzZGEUincirUNCrBkuKDdzaPxvWA4BtNjnmjz3xE2Riuyy58AmXnsqUsfg",
  "key16": "2JUYaohs2ocHYXhvFn5xpmcvQaz2H88oVdNsp7PVSwwH7N5ySUWAt4LjB8w9syPE39wR2e56g5QJd7ioD6FSwPYP",
  "key17": "4gYF2cHSnFtE4VyV4mfPnqt6AQBdfhu89bHxKimPUPe29moXmbkhz8ByK2xUbrj7nyLW9W5hnDJcoLDTSJ9hCzst",
  "key18": "2Ypf8TQRyYrndxPEQvaFbHBUfcgyETBiYxxXB94fT8Ykfj2qpVQoqpMTrDbAoUNdesn5yMVMQN7dPyZB8iDZjuq3",
  "key19": "2DYc4oeokqqPy9Ba5B2cUKzD8odcT5SwfUevwbxcLcVdTgiWtod8AFjzHFgiG1TgHBZ8td3xJSU33SnxW4fdKTrT",
  "key20": "kNYBUwsMp8vLbK3Z3b36oKxn2yhkvsS4axJbX1TZXdAUS7kUDgFDRngx1DiaqBS6YfGSyow4SZbdqWTC1crrx3Z",
  "key21": "4hnehaHPRioM5Ev392StocP8PwKHx19qwDL6YAvx1L9boST8kDyjLckoKZH4zrinNTVWcVgdSobdCKgCBUqw44dj",
  "key22": "3hz4s8bYBBGbYoHoEACT8xCAbqkvdF1niBj9quoprTdCXAsmc16vygsyJvD6vQLf4o55qKW1Wc8NxVHb8NEdKbwU",
  "key23": "3Ag9RoGBpQppwK5V1kTvxHKyfET6B3JadHY6rz68G59eHtMbDCpTjSraCHjndVxVo2Ss7TdT53x3F3Dr5oYMEA4H",
  "key24": "2aNyhbipDcf1r8H1VDGvw7tEvreCJdqRTbj2VVbMJwR7y2k2hxFnhHanRUB2MChAhNxaAHL7SQCTVhHSGKMBD2p1",
  "key25": "5kzdfy9J9hwpbfUScLADtPVL99T2Pn6wxZqFkjYKz6JA9RHkAP7pNrXEKLqbVfXTSnLkvxR2cDVwKHrcfeytiGJ2"
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
