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
    "2Wywsp7ZrJw8aPwFd4yar9htJT9WA2PNw46jv4tbFKATGmF6gX7t2JGAqqBmLjwAi5A8UHyyAixDGakWGnaBMdQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t2nawD5XFXRhvM593SbW67QhsNUA26yuLcYQK8LgwDJwXqGj2nrPWyZiu6AyK98tebdne3CY5GF6WmBCkNiNeMZ",
  "key1": "3KbXztYeuKAPoXSz7D6DHnTdageDTiorGMZYReM5XBYUTZdHH7rdT9txH8uDxjBJdnss7ZCA5bhGpxpVm8BGusQL",
  "key2": "4iDSPeed8YcSYtVxw2fmxkw4AFkPEY3dfRP4MeqmfNikGBbWQpLLBsPtZLqw7pquCT2twSUTd4bMwhYeP6YMcfNL",
  "key3": "2jZzuc3ghU8RDKvUwUVxfMXu7Cj6QdNcaHz3uJLztA8ArjZNzBo1mtjik3fP4ncbSSmbdU5Aq8zHn7DiBhcpWiAK",
  "key4": "5tMGK2EddpN8BRrkAsKS5hFEDHnkTTjYVBijKpMxYqC7dcVQ1XAX44ARpRbpuc9MmG7xGvo6ACkCDwNHNWhfsRSo",
  "key5": "31GoBbFEnaRCrf2qrz1WE9qRoxDAu1u48t6Jh8qg6CuC3rvbyeyh9XrthLtKKAqTh7EbrcESiqSwzjsrVyyteLGi",
  "key6": "2TP8HJSaQrdo6j8tbwmPP46pA85KuMz5ALYXmGDVuACFMfyiB3a8uQuV6YU27hPSBn9mqBEpUM45DvdUs9os1Fow",
  "key7": "2ibyp3NutRyUSi2ZEBAGBfvTCUYhL3dWgR99ZqCEoQFwhB2ZDMGheCTicM1Gs857Z15WK2aGVt95GndvhgPxmu1X",
  "key8": "5fNuzW3Q51Zz2J5qYzC6VkWGTtKZBoT8yMmupMaZ653nnjx3FpzbQuRz52Ku14Rs4BZm1u2zvw6sN4yyWAjfFE76",
  "key9": "Uz3HEbFyuaCxa9HGiyBYhLghTaKrV2xMswk6eMq2HDy9XhhBjwUqYUCLDpM9EmJ6kxY7kB6hwfgoh7JgQPQBJgh",
  "key10": "5bqk8tpy1n6PcJZjJY9A79B2HTww7mu1pwF5pMVEeWyBrwFxMf9xrz6wCB5kLZrpB42NqeduBtsNFjnXbP27FdZA",
  "key11": "37iqZ5tv5fWrrvzx6jGReDcAztjjbL4XtHiVQYbgDJbpRGnvgt8sSSAZPVE7pHownhPEeDrbi4JKtg2McwXb4AUc",
  "key12": "31hsLcwkVmEazTwd3wyoGYYj7c4icXzqGa8tEmwku86GcQPwi23fwyUxHtZ3mnDPScdm9orji22ADRkf3k3jGx7A",
  "key13": "y9j8hqkenARmttGhyfD6krkSgACe732ifVp43NSaZ7B323Bk7vmNynNwzWQqTfCXy47vwEzGcwtPcQvD4CpW6GN",
  "key14": "4jhRg2qzzCz6KzYuxAJnYtmQgB82A4YtSpRnca6y4y3QKPAX5eH3JX4hWyp4sLR3G3RctRVJCxFGNiw8pavr3CBn",
  "key15": "4p4su8yALkGSxjW5ywHQGc4S8FH1ZtzWRqq9NAfAFjCFd15QxK2YGkKJYPhGFWn4semRiEKfFJbNshn5dDjhfaqo",
  "key16": "42ZRsNHv2jAqwz3DJ3HKkmpm3CK28Ai53JVcKY3U9hD6f8Vtd5Qy64jx5WVNqhibFNEFS4QUCybvvLy2SSwC2yzg",
  "key17": "5REi1eRSXexQiydPj5cDi3gSz86vfhmoVoXqX1CjXyBUunDUnhQGF28xUnR9btvjbhsm7Y9h3Fa26TZAjSE8o71D",
  "key18": "3kUsQwWw2yHp3uddsDY3CDbiLVXvUSPz36GbXBbtFFjzKUfbM8fE7NN7J93vDnyNsGhTEFTvCkHhH197zY4hHuQv",
  "key19": "2ZB4hxYNFLrZpRW3P4ZF9cq38sPP7hNyM2epqVGvtUFSUHtAr9jdRedpnjFxcvLQLtDk7aeot2vAgGksLMR5qfHY",
  "key20": "5H4BPpu1tZtd1V3HfaYSeBXb1rj5ccvyLh53kZnRDsZYUiVReuXix1VBBxCNV5rWmtrgCjSwdbWtKGkJMQ7wg9FG",
  "key21": "36zB8X6vQe3JV3qzFxJeefCH9jDPX8CsJEmYZdit1vR7cTcvMXf2fja3UmjnJE4jYitXkKn6KFb2dr6UoUa3PhLN",
  "key22": "2HL94qmMdThacA3SriPFM9ouz4RX8Kj9d8PgrTeiLLYQy9aieamh5BHUGr5ZZBvY8GCkkpt8CKcGdwfvwRkTLQiU",
  "key23": "2ZvZGGJYpuRP4vKdJmQQLH23Haza6uy9Xgyt6ioJ8gckNEZviMEr7RtRuHNnUYcGgqdU7vkoEfPCLoi6AVEAeLCW",
  "key24": "4BaociWJ6iZT56Ze9EJc5ZzsK4cyQ3YQhkNCbwDV4tDkZKpLTNj1ze3neysxU34uKyKMNEP5nDRhiv9BbnzsMRhV",
  "key25": "s6jUeHS9JLj7EdZ6GPfgGwSuNoQT66b6uVD53AoWA6XYkNqWb9giB93nznqCA7yMxZLbzBrCyouPNGrWQrQcxhh",
  "key26": "kWer3Jb2CEF7FimZ6kPg9s9XHsQRgGt1JFg6zQiZjMXDbhzCLJLYkkToewVzqqtH6DFNNcRJhvYDSr243CHZgBY"
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
