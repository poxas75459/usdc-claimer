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
    "5xn2wtCxpGcDv6izpmskKjK9akmTGH69ovjUs7bcRswhJVdcuY6p4XT7rtL4oPpHuvzmRjssiTEqGd6mJYw7TCNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v9eHeCZshJ1W9rofb33FafzMXwutmPbmUUokrRi36pDoYDMzFZgA5MnKsJFsakVBd1qA5q1qMR8ApNEFfEk9uK4",
  "key1": "2WJsw1DdrHppjE6q29AfT9tXAUKd8vvdNii23EUUogRMTSRdLQ7Hmq4vaCvsrae37wfvQPVUiP1GourWpwnp4XKe",
  "key2": "2beEbyfjyZQnAJhR9BqARDZLq6nA3GicvYKx2V4coueoMmfr9Q8tGLu6TybVXVk9QzwKF6CC8Y3fuDWPs412Uj74",
  "key3": "4Wwbt3TRwLSvXaM1rDnspTzn7Dir2XvPR13pvq651b8RwP67sY6Yn6pNnqoFYAQRfqqiWzJuefDQCsKKZCrXrwma",
  "key4": "5ZMzGCF34MFcFrkcqiJaXq7GfmvLZYuiHdjA8gjyXzQrGvN8LQyL3XRC8jYcjtBAuTN9j6ss7YGDoGRrMXHBvwFZ",
  "key5": "ZJJhxqYZ7vd3p3nSmyQ7QcDEDh9pHshqG3byMtZoDE6i6JokmRQuZsWiuL9q1rKDZMG7KXTHEcjjYvsZNBqEKRw",
  "key6": "3qFa6freTTpMXsqXLYwYvREFBZy4eHQkTzokKd8UrfLbtRUBo1J6q6V54FWydwbREsqT4FDdQaNjSFenJWBverBi",
  "key7": "4me666kxKU4zFUK9KZ1WpdMDg3xA2Q1qxoSPCUmYEgKHBxgQgVU1eLPCjbYxBxCJAzmgeHz6eAgVtnKZRAkV9yD9",
  "key8": "49V6pD9sDEpFzHt2wGYzQoR52wsYMxfnCubveGQb65JnnZc7kj7qbhv4Ak9Y3W95wbmiN8d3vYnFsGbcguwzWF2w",
  "key9": "wTrk32UhBRua2K9a3KuCwtv1mupvoXusVtdjX5imzfAb5Qui6NWmK9p4p6Via8BgGh5QXpHG7V2tAggjpJxXg3o",
  "key10": "4EFJoy33Qfjn1mHD2MyFxfgtEwDnF1vXAVYi8Cmc8tssvGZq4rGwvnEToNThTgwNu5UacVmQrsNVuiQqoA83agc3",
  "key11": "4v7XZo2oJJW6YrWSAGKHE4ZQzaCnXvWQoLqRHtcSzLoPZA75LX8PhcwKxaJ7UsvbL1rS4fwpQtkekPuebA4a24Wu",
  "key12": "gTRuvrrJTkvNjYtSgkE7CcAAnvga2e5HVvxdowohsuawxdij1f61oHHzY2tgERZSvqrzoWUwHEej9jqSyhW12nk",
  "key13": "3wvAGQTJv92HXr3N5ofFR2BkVuxzrNKmSKh4ZkWy4dwnxZ4FXk2qE1NXxeu95FRc32SA4p8qV3Lu3dfgoyF91yiu",
  "key14": "66tbzgacCg3KqsWostv6zUEJdFLKEBYUDqihcJiKdA179ARfTaEKZV5qgsYchfQMjFedvypeYocicHZKZYQPUJBV",
  "key15": "3KxUxzPnYVguQ2Sf777AFR7ta8qHrAZNsMuL4kp8atfizLc8Ph2jo2zQfwBTXXEskGM6sgZYxsMNjnqA9uvFNSzx",
  "key16": "4UhmWd3mwrGkeEm1p7K8GVTHzqejTu5NexhXLBEAdU4GVC4b1sGugg2zDEKsBEm5cMFGG5igkuWu64vRU5wRPVvR",
  "key17": "4FR4R4q8oVNsUaCFuczBmabJ5tVrggZXG4ZAD691LJK1oFZXutdpnWgJ9AXyM8pxHH5bUJrMdZS6EPbYgy8afGHw",
  "key18": "3H1RAX7Baju8UB7Ec1p2e2fAVvGMb2hYpnjsbVvzCixqQJdEuMcy2RpzNEWRCdsk2TxjTZDvMzutZRrLEb2b3KNW",
  "key19": "2ywpeJhFYhhSAquBEBZhZmVLmBNkCPVkDcBCqcfxB59zEavGCrSyaodUio8pgWfriEwazFVzrL8vFs6ubVj5Pbvn",
  "key20": "41PXcSFuPQN38iG5iY8C2V1Mkpb9ZCWDdN73MDqZPYQTeU9LyQn9czyk6fM7x3tJyv2YyKR9wspivXNm6pu45vtL",
  "key21": "5S8CBqBxYLYEDLmaWvWbkLoX6ueLTwkSRa3QkGzgYowdc2bVJAox6zDURTy62rVJDEnZfPMZ8WFeUXCe4rqNKAQb",
  "key22": "3Cw9unYP1i5S6qtVW24bGpEc3RDNxxApeLGeUe6sxDomo8zoFcwWzczPa8BVQw3aSThS1uYQdvhEci4fKPSU47TF",
  "key23": "5HcbHSPYinv9D9anqSW81vByC6GvEVqZcKK5KqSqN85vEgojdsDzhmpgNrQJkVZyF6jCLdVoEw8RmMDW5EEqxEfk",
  "key24": "4hLU85hgcHATxyiUH882BfqHNoi9JwFmgw9HVMGb63nGCauR8M9zjiQgsRfJAuUvehZY4QWKkQ5K2GwvJpq8v4HY",
  "key25": "29w6miNZFHiKbYAtAkzaLohXCjweaFm8CdeiPgVLa9Cgjsbdq436Ypc4ZYNqMqVNjVwTqnULpcJLiDbDHJPMvz3a",
  "key26": "5hu96P99sSxBZ3GKYmEefxfSEHSGJwEU2BJ2TDWtHMuC4MM3V1cXiJmKBH7tty2PPq4fZWLKRQfhFD3RfpKyyN3j",
  "key27": "4Vz5pNkXYrhpDvQ8bPuARzP3g7FTS4MFa9dDC4wSbryC9htRqsKXGsdd5QTC2Gb45zu1fUxJQj937fSyKGEgbpgn",
  "key28": "3RGrfx75xufK3sEZEcX5WomFWc6Nrjh3dNgN9pWkYbWHkj5MYenLpw9GeqwjGWFiyizrCDkTwCiw4T4xM1EnhNY1",
  "key29": "5ffsStc1k5nuS43oJN59VBZbcfAmYkTgH7xaaVDzU4X8FfVXjbPoNz658mxcxYjBTBhmWuZPxfkEusWs9uok8jf5",
  "key30": "iW6fLyWiAqtMDZDUpciMjHvCYocCaLjAfWSckPnxMMEQnevTeYTDBBWbKL3JWfHjXg5JvVnMtJzc1DNpXAZsVbm",
  "key31": "2N7a839eKFAeZ2a2BZqreDAzvTCVpjccsR5fxzEuMP6kDZqo1ynxJa5D5Fugq83yQy2JjREErpcN6hU6GfY1cZuk",
  "key32": "59rjvHb8Q2fRBEEy4LJDnCjE3Bx5wqV4fDuqvp6ttewYbFeYMPdjDiZBHpizZtPozkQZqxd29zux2X5m6WE3H5ks",
  "key33": "2WALjsT3Q1Q3S2jLq3jwC69UXkbd2PuBJWcq1hjt9Jj5VLRUxZbXte4A6xYFsZvDAvYXtZB6w4o8n33nRYnkjTpz",
  "key34": "5oCjeFW45YUev5fy5g5ojF3hgMw6L1TVH2bb4dS3g7yDrWJp2k7xHwEmLskvdS2vFX4SjHaie6AgM4fVgGNy5z4A",
  "key35": "5FLUa6sgJwDvr5NdQbQ7dXYZBneywSPMNuPdt2FN6z7k8388Ryt29fcexKEj5RW1yrbWudp5DUJiV4F9fVrgzJYV",
  "key36": "2E893JCBvuMQWoC9RUreHE6LgGfgL1pLimdQcHBpn6mghnVFMZytSQDefCXX8MPfVGL7iYhHLUQAKtup5yyaAqU3",
  "key37": "4c9nKS7tF4TYQexThpiAcGYehUYe79dmoAi2MQE2T3QnF2PDiCALQEwLnYtcSBKLgHtWPVbKaXLLSoYsAehke7nF",
  "key38": "PfNmXdrWyghBCet5DFMraknhkoPmzqb2aGfv7Bw51geK7SERD2zYhsLVQRz6qazAP39Cdfu2mrp5B5viKjQFBRc",
  "key39": "3dcWgWr6VrcT97zAwugJKdW9qjHx8hb2rnEzAfcqjoFbascAoDDPKpGhtv24D6x5aJC7UvMPaUBZeWC2Aqv3uLps"
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
