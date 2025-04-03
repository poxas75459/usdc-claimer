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
    "2GFqgfus3RiTUBnqrehXqZfLRJcaANfuqR6NKmKrgkPCyHivMfBafVvwzFTaRPDrVkjzpjwGqs3XLfsGTw3rSAMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TenFW5Krxgg4ipn6QJ9bJwSytYa2VQJYU3fosXzV3sNqs2iNcEWm9M4kQ8EXNqHgctN14fhVYQgcTUXeFddKYXp",
  "key1": "HockHm5FMEgYnzq9PkS5s7M7uVFkb56Rtja2VpNJA7fFdhRAqjYXGdQoc33DyFV3zqDi4LZwFMvZVPnjXFQLXJ5",
  "key2": "2xwgbv5t8et3xCbpBiga7M8WwoaJoZ97v9VBYVh68DKVpcCyMycBzEGQKLGc2UsbudgEC3gTxY97YN4XVUJW1URq",
  "key3": "3GNokstQRnBU2iYriSwDDcrqXEqF3xpSg4om1pjgp6Ki5o8f9DgqqJCFdoGhrN9UwVY848CFEoFny9oahZuAVVdD",
  "key4": "PdYqrGRnxYLcVQuLGyDwo8bNXtPGVmHYkYpre4WAyFpt1wFXkGxektnRbhhF3FzUyuU3A9NryhqTXB4v6dQH9CN",
  "key5": "4ve5UmuNeQdWi28rbbJM9QCYHtXeF1hYZwBXxUz14GGdPh9MqEkV1evJYp8pTUg7QdaPBq3kKXuH7oNpAy1yPK3Y",
  "key6": "ZLwMARvMdhQRcKhsQW5fnjnFa7MXGMNTCBcsU5xog1CqVtXD56h8Ss1NuTfRGW2oPRnYGjgr4Q8SJXEjV2TXm4C",
  "key7": "2FVpArGcoF9mdYjF1FuDN222UBRMqW8V2gfoRbdBnqdcJwsfyk4bELMPFHgBrGu9UUoY7VBZWMxDg47Pz6ocJHNX",
  "key8": "2VEefE7GCEoMrVRNRrBGAPrQ5UbEUNJBunq5rwPc63Bx9A73Znd2VzFjYr9HMeWRnjiudXmzXJjDxa7Teo7BhC4h",
  "key9": "2fzWEV5M4DHSe9Lx2EG6CeFHxdcLjtB2gFQtHP4YCbwpEkD6pgKkticREqrq5Y1G4bpoC6cgGVx23cqaxhDxmXjj",
  "key10": "2vyU5EG53WxBDB7Fa3AZ1QJBQwB6Z7bT5uKzq8vEPR7zfR7FQ8VPi8Kc2Z8zUAd7ZpAUocZKZecyK24e3BVE4YTx",
  "key11": "5jxZEz3j7y6CEZpT7DoJSxWhXi5q1Una6frcVuiGUgEWkpwNkAkb832FJ2rbgoCKhE1jZoGmyyVPiBoAAAb1Sho",
  "key12": "66iQLWm4aApzwegfXaeqJLMNmns3AYHwdXKWZaypB1VFZSo5Gg3QhkUStPuH9YtbHQMaEVSspUk5931fPLBSNXtJ",
  "key13": "46s8uhCahr1jsvXzVowbSAcbc3BRaMNut7vwWWDDie1KDgxbBgwfS7RaaS87gVTcTkonWjGwS48jRhTdrkxjhdJq",
  "key14": "2B5qLGm4qQB7H1aZ9fkX2B6bspQFdKpnFs4pvaLUnuwdZX9wmiaqeGNGoWTkXvxXrLKEaQ8xUSaLS61yncx2HJfY",
  "key15": "5teQD5n5hR2umuSgS9M86bRhcVqW7h3fd5Nb7ndyhVtqoWcenx8AWP8QVsK2JFR9jAsFfBKWUj9JMib5grajyAqz",
  "key16": "3t6A2WBXyk1mmEtFgWYKPm4QPDsSBKNhsj8Zd4sv7ooYvu6k32KBYZcXhxfQ6nTGNWGYWHwp9udrTN231LkJUbe",
  "key17": "3k5UJx29DXXMiQwD45qUSTuQ2jAPHxSC4xK9sbCNAUy3gPmWRxJuYei3AcWgy4SjUDuGbiduxWYzBMLp3VnHnHyN",
  "key18": "6GdTYSYLci8PkSsezxbZdPFFRKFvJVFZxML8kTHkToD7RHDizmD8pwVgozbTnpzzr9ob1M7v2orSDxmomEB5rdW",
  "key19": "5UoVuvcn8vs8ERTBujhPiP3u9dyA9SAB3wA3XQw2v5USMzNrLpndZNWZWNMrcvxyCszwZ28De1dTUy4R21BSgwcu",
  "key20": "5qPyEe1ATprAoyDjMovBxRcvGU9qP6NGndq3SwuEhz5uFrEMUqAmg9iPQ78yQxMHtmemtH1mfDX4hqtanJYvUrqR",
  "key21": "2C12hDYU3wxmE8HUydzMtoHwVTvaB9BDpApnCUuPNDmu25f6UhoMjcAGNvaD9yJ6YZ63kgeJiypBCKeYQXUn78Fc",
  "key22": "2kVX5u6wMhjPDRhuhFJJbxdj8uiLHoza6bFojUwZbs1Abqy5bEFE4QUgYTpzFb2wJqkhBW1JxoRbA6jh5frYdx5u",
  "key23": "4U4PQGw59hfE4fFJWKxzRPvyBm2kvBnbovE5XEqcNdJfujuH2yFsGizdMsLtR9uxdHNHaiQzujQyq77XCm1Eg2Zt",
  "key24": "3Am7N9SdjATehjxSA9QWYFmhpGy3PD9Dz4obVbkwoT9c7MbaJkNsTBV7N3UaTja14ne8cVUp46D7CT8cYnqKbF9b",
  "key25": "51v5sBytKdt9opSoPSUzLECwiGQ3iX8Wv8wLxCewFnw1R4hhU3FCFPCdXttfeSszcL2PVsnw7uUxRqfS4AhE4hwP",
  "key26": "4FcqEofEV2DqgfUe9mYZCRSefxNMHBK5FXXeNuFRUsGLhCXuCEc6xFUsETP3YUwGw14YHw68wdi88D8dQZzJyQCR"
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
