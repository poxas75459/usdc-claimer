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
    "4M4GRi9mCxQY9S8eTps9kvXK7Qr61igmQpdB8s5MKGd6Ui3vSTFzbMBaB16M5HhuLVCaM287ofXM6vAAWcw2SeAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R3TiajPanUFHyceQCNFnApzPgEGtrMEKfwQ5GHDWJ4vvVVFaxJv5Q6ePV6pkgHLKAeYCCk3G41AdJUo9HC1ouYK",
  "key1": "YbrmosuWWGSJfJFKLHtXURnzVYg8AbG1pQADBtL9giG5n4NeD7iWtEsTc92jjiiWctDKGwyczMiGuWE2Xxsgyyx",
  "key2": "2AH7P8dmntHUAuLoA9VTW6T9k4zDQWjpUf69cyAA88zPf4kEh2LbohhbtGkvCdjSxhzY8fMMzrvso3PHFFHDBzAB",
  "key3": "293bKJ3oUS5E8f79FqrNp4cTomhCfc36Hjx4sMsosNmmu4AwcUXdYqHU8AhgU2bKtWpucYsAgsEnqfxtHgjcejPn",
  "key4": "2K7VkNxNXVNafoChfPRHFco6MJsiXwiPZSagZWBUTKEZAPHgD9AJVZsygYLhUdoAJgdnEamYBUoraLhMFrJ91Ksa",
  "key5": "5dmqEfVZ7MiJAQfTtHonoLzsChPYkP4geLsofwTr5sfTnEVV6jqJyBu819TeLujdZcraSoq9iwPxmRoRMJxdbbrp",
  "key6": "3AxZQ4Nf1b2YYeZjtmsgzSFEpyBS1GSgBkiXVd6QxP3uc4nUJnt5FW7DFfEDA2AxE6sbe9MNnkDj45XK6TCKz6AK",
  "key7": "2iEEnZAxyDzCuMo2KxzsevyWmUi7peZxR3txKhn6gCgPPZUzZYsjoKtqvpNe9JH66SqBmdMcNrqKS46UrB8hsCV1",
  "key8": "41pAkBLwyJJXksaZBJp7Sc3uUkRCM6mYqhWKj9cQVSNPxnAiqkDYvUPEYMo5YjSHP2SmNuDNefvcUgVzmYttLUz4",
  "key9": "3ybL9oXNUHWatxqVgDZ7VedYek32ZkwgUELfTEUvFLEqBbDDmnsWWqPtfsXtAQ5e7ydDznNGzuMqxyyXDMorLEN1",
  "key10": "2cPmSRy6GFA7pwLwbJE5dAgyS4HHASCEAQGACAL4SgroP4H9FL1VsaBLxHAGmTQLF5yPxoyTwbe7atKDooKA3PJo",
  "key11": "49Mg7WYBbnbVM57k89RydpHtD1kdJBEqxEsDLXLi13rGRDDdmajnSrzsMKZfLKENEu8ioTzSSeZQchK3QX92AevH",
  "key12": "2KUcLVMSBRXkDUNkQ84WQrxkbgRQW3S2uZ8rJ2bg5ZtHcDyTavAhDib9UwKmB3DhmPooJbd5pjw5FfE4DqPZJvk5",
  "key13": "3VSQDDxRtTTwwyQSCBWtaSSuuFFc7M2PRfmcx43u6HaytTUdwAFGyrFtY921rcthtGDSTw4ezjRJFBVJR4WUp4Y9",
  "key14": "3aVCt4CQAori8LYzmioX6bkirsY17kL6B9CSg3ptVQJSBM8GTgnmmHmzksZNTaPWDaGiUoLUv1f3DXqSWbD9rCJc",
  "key15": "4rkjY1Fgn1ddp2e1r9fTrN7kWWQgsK3YQgcVpaa6NazzohELBeyPbMS4gSxCAsJL4oHfrqpMM1rR2XFeEsnfMRCg",
  "key16": "54gMncw9sjNRRqzrdkjT4RBop66dStxzCzqpsrM45KP6NRcci5k3CiciTSbVvPHPnUGVjbuVZ4eZuy3r6mqxU62d",
  "key17": "5wSvihvUb9oeYzBRE6v7GkBsDzA8QokPJBzN5fWkQqbEKrLQvCgkCDRBBycHM19Z45jQvkdzeWjpeaYiTwb1bguJ",
  "key18": "4WPJtfWanSi1xo4ffxw3TQwuJwGYZ9aVUxU32zez1qwyw8ruSroshTyvnDHwH4j6jBXu7zmebc2WS8sfQKtR2xVf",
  "key19": "4psiCGNLL74rwpGrU2D1qsztVupn12wwkx3QTccRu1QEDugs5iUYYs3QAJvRT8nyVifobVSCo5fwRfqRHmSg3aTS",
  "key20": "VVnrNHKTLDo9m1TZFtFEALCKUhvsxtTs6UyySTMRPbRuMcREpLJAC5bdhz4CSuJmxGArgswzLhQSwGFffzeDS2H",
  "key21": "2CMFATXXahYsYuDuwoCoZSucdLV3YKnqnF83z4nydQF8CFe7hsvzYNG6QR7sxcMPgAo7P3xwTrbw1KfCaHn5vwDZ",
  "key22": "5YZGjhSC8bxFJ9KuP2t2TmvHThvBpfhpLwoq7dthAsFu2DfiTJFNeGt2kggobQj5X23MCCdgQibkjbPv3U5BPgvz",
  "key23": "5DjENyoyaiS5tpqVkYf6wFwXi9UpZyfzw4xh8gbLh5zpsEnZyU7uHd1H5zAwZZDbjaj6oPboii55uHUKBrSkQTNs",
  "key24": "3EhxtRQeLNB7V2HQGr2j7yrJhGxDHbSsuS59hTSvY878EAdHcuysGJ6NCRVgRRkqS3FHqY7sddPQzGf8FVwFuhbL",
  "key25": "39Chcm1PZeKjqAoTSZKjGfetLfhcLroE6SH2b9QJ1Rqr6jzkjxRZJdWneLHrYm1Nq4qJqehDFFcjBc9ibLrHmM9a"
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
