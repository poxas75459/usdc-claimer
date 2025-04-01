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
    "2K1tsukNBzWSUGuNSrufEPeLwkBwUtuczWeyejg9gDxmYL1uPCr5oHPN7DwCZveLa52Lhgtt4hXHD1YqjiU3nFgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28JzaeD2MbJXRn63txPQCzC35wiT5awDXHmzyMpYbqr29bsAkykqYr821A9qKgNKVpcxjxPpbNZeTkmkKBWHWHRw",
  "key1": "3rVDuBnZkUdpYzouvLMbh8cqwuuQ7GRCZPSsGDupGbngesaY6NjPqn9BgnZREUVGaSS2MvesiF1uA4ktL4CyTxyd",
  "key2": "R9UhaxikNHVh3PTA8S7hbrJrbHmTJ5WpYgYv7NgTJwkajNKsAJqaaniQNiytxT5wCzZp3yCaiEgPhzMcsYKSAkp",
  "key3": "53MSAJYHmYopBprFhcXGhsbHtmVW5PGaGxzRW1fsVVW7qmjZeaoeQL7NXFnuN6TpL5rzbyWaFNRJ3YKWfRuxvGPe",
  "key4": "4YKiFeQU2BJKKb57Zx5UinyHkaMiLVKuwQLS1GCdfkjjdNNnmdw9gVXZE95p1gDfXHJgfrwo1wSzSsn59RFR8GGH",
  "key5": "4jTgbD7LCeMAkfiZoLfJVVV7jHdsU1zDoqj3u2MMdaYhxYEjnHHT9MsVDKoo8GEWPbgUBzfREFc8kq1sMp1oo4qW",
  "key6": "5x447tbxPayHJtrQYpmjvDgmpAxcrtXgM8nDgPkB795iWcBKXTfecDTcS48tW9BPi7tmuS9zifxJShptn9U2cQrv",
  "key7": "5h8FR3AjXC8FrAefHE82vasKC2zZfFLXJ2u2uxsnLJKGmdsN8sdaATQFGffKeKZsFJS6c6QkgxtbEMowUSuDzFd5",
  "key8": "27zBXPzLdyaxFMvwhDgZUi5JivUcxX2sQNsvpAR4HbXPs6S5EVaLh52ahwVLopiwurszmtRJ5E35n3g5ckmjGL3F",
  "key9": "5DSzUf5LLS3iasC8eMKoXm4sCUxXUNZyfbEZXCbUctRdgZQLprJE8VdXUeR3Z8si89CkNtxjoLPYYC83g6WMbxnL",
  "key10": "259dMAZhj6fhoGG8BLBgY1fAwFcqHLvNdhUA3SwVWDtbMPRWtSbud6iJBRyVxMdwxT9wU54HwQgDEzDeL53b2864",
  "key11": "4J3uCwWCYq7QpBhDdqLLjW56SAgcC7SDbG93JtRZsDMFKW6dswLvC8F8c3idtVsPijeyGhxxYhFVjkUe5GMmGXJY",
  "key12": "67UWTB4XxGijfQej8fWmgiTqUstTqnDpKNR1P9wef7fzqdedYt9R3j4cmoYntQLhLzpNxFUUNyWLhsx5msAtoXfB",
  "key13": "ithbNdPzEVNqrTAVFmcqEeknNy6XV3CPyQeZwt8t4L2DT9jZ5YJia8P3hk1F6o4vQFtUdyZd6mZ75fVavjF99uF",
  "key14": "HsgDWrhm2eJrvnesfm8xPDYCAowi4CPU71SHwAioYV25Tu463sFGAmn4J56SokoPiDLpEcfdUJYiKpR6CsFoF8L",
  "key15": "3Las6bpbSA9g8jAkaNNJ57MyibdRFZrWh6vhA1RToLF9eRjvEqt4KH8XzgJxpdeiAGVTHNFwG19YHiq46o1zvU1j",
  "key16": "3w3AvWSmGWNzSgXo8bkA9EjFHAxKRGspPnbjQsT3bjENxHQVvcgxmxsDsP8CWtFv2kuVAhXVwWWv5zc2jfCHttGK",
  "key17": "3SucbjdgaBPqy8ZQUdDNWYvp3FBqnvMAYJw7E8GCiJgo59MiA1uREmRW7Ada8Ac1aRNHBxmsx1w6uU994b7a6NrK",
  "key18": "3TGvPn6SFrzwt63jy8C1Fo1xPe4By2dEwWX1Ld9K1gv2YLjRgpjSdqVBHZMwkhzYMRLRAEuaYxCK3z4NabL8QgVi",
  "key19": "bVyEP4QfVkiavzGsbBYNtG8J83xPcMn3qbohnsSgbUbvZJ3Tw1oSasR1mR4StXzfFRZV7DnLRBuJhsDFmYHaPUL",
  "key20": "2KU1eip4BfQRbQTujpWPXT2YFdsYM13bT5SVTBHx3wWu8XadwAnySFCJfE1nhjLrmugmhzryQsQQXygBKdTWa99Z",
  "key21": "2fGNnixYkjAErtta2CzE7So5MfkXzJjJbSak3ndkogKg8ehe2U47YmcnMv4p1Fzw8TjUefscRxEY8uVr2wxLzZGF",
  "key22": "3HtNL4RrQ1E3vVV4Serskv88kXc4biXf7jqvWHnynme5nbb7MYxG5pXM2Ed5jNrx1v6rJzTsWUoQp7YCagGiS9DE",
  "key23": "KReRtr2LGFbKGNb5eUnLJbAmKHXosHYMe8uZwXtZFT1iUidZGCnW3L3WpMtyRhP8aoypF5irx7YerYE2HWDmXMF",
  "key24": "3N8Lym2b5cGeFQNeLrKjCMuB88VJoVZgcKzQ4eLKTEpWHyozYfVGD8aTekVahMh4kLTvB2hBurjEy8Vgz2vfWV4t",
  "key25": "5GTfEBxc5gaRXaUnkaP5qoBY2zW1ujYPUxP7jLPQwrvb4HAvbgddo395C8tQEK5XUhPSwSpmc7ZPKpbLNaFisZJG",
  "key26": "62iNcn4ouyrEfef6V9YbxSoiAYs2duegbFLhudVsQnunxGU4My1G14FAHThyfkTs1bCvZKo6Wfwykon7tNwW6A8U",
  "key27": "35inoXpuAw6tsqhgiZtCdYbH5zJDc1y7tFswrPbFhN36dkcDrFp38ZwSMahHrYhnw44EyECB9Q94ha4Wpo5VNNZW",
  "key28": "4v1Q14dedzPAPMVYeRnL1Ttz8dKiYCa1vyHmUf7tZ6JGk7iYkH7ynzb4Ld4gwPsswaHm5Q6DnpXKWpunKtY6DrPm",
  "key29": "3oZEeFNp3tGyJUuphTFN8Jsy6ffvM4q3EME71thg1RjFFsYTYsRgNSwBFSsZXdzWQKCamj31YWaVskQncigpw9E",
  "key30": "4bJw1dyXUuQh7neXgmPXMYkcyWio4dKGvPM1y61E4ycqyqTPeEobHWqwAWukjhojtp6hdn1GS7AUmjVw7hZwUAeV",
  "key31": "G5BSDSrVSQkkif35MKghrjSxHR2w96o76DYoVFdJAYsVgpzj6KZqw5i3i2AShtjHSudTYBdBfEMjW3w34hpVQk9",
  "key32": "4N73S1i4WmPmF2219SySFfGdL988TwxT66BEMLiofNJmYsVK11s4aupZzo1Cg2nhotdWEGDa3qJHXkZyMeLBf4GS",
  "key33": "453fcGkbyAkBAh1vQcnAVqSYvjGKVy9YvdjDaAAqF9dV1q8sWHQ14RqVEK5uvaUp4cVtTdF1kGQQ8ZbyCAmU58ee",
  "key34": "55N5kLWAKmYnf4StkLoBNp1xvwBYpifdeuUZdmJrczsrABa7s7yYp5UGzAfXs4P1Wq76Hx6TaLxqBsowPoeA9UzN",
  "key35": "5PEycWZFAmaoV1wzqc2vZr8H1zSMW3uaLcu8biJ97b1ZB6FmnBj64L94H7S7sfUqzWC6rQ9vS9MFS4Ttqv4AXC1M",
  "key36": "5fT5DtRJw1YzRHUY6e8VDMWEjEtxX17r13Fdxnn7jxS1U6ZCDFATUVFg6dRh4g81EYKisUWi9mj1UC93ijyLp7my"
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
