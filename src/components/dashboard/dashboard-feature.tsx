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
    "2dJLFUZ7qHxyexsME8qWkuJgjoxb8qBnvwhMg841cjvhJKC4qKtj4d18qLDaZgMccbp65CBBRo39z6Hs3Ekr5Psu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ksLCsBhdSZUtLVfESpig8wMoeChYPLSeDewkhGF837igCCeiKZANJ49UHsJKXPNqgKEvWJHD5mfswWzTdX2ymqB",
  "key1": "5VVFS6beNeycJNFMggZ7gfj1U1sXDLWLxgVDDpUTG2iqbb4jV2qNQ9yRzB197aRXmreypbRwQGYAmMkeNz5LL64h",
  "key2": "5YmnPtPXXitMJ4THWvTkXone5BGXvfFLzSz7wuAjAUwGoLYNGeynjTDav2XUJtogUat6FFT7hwegTFgkCXBcbYsU",
  "key3": "5bJ8nfdZBH4LVYYdrFCB174B5iiwMUpW99jQPRrLcVqtPSeG88VinusoTckbcyFT2y6vG4vgeUxWrGCe2YyiCFNd",
  "key4": "njMsyMZkn8obfuEM5nNji9gNZ7qRoRTHQXrVnwBdDJjCJH8SaYCo5BpJdhaWKHFiEeQADH6FoCczadEtywRy19S",
  "key5": "61MhGrFYicrrLtHpaNHirS5jhFnZu7TJirHqMpN788QGNCitEdGMosVzPA7CxfgdG8F3v1hCq3fhmGCkT4ckfxt3",
  "key6": "3rZtMvJAkLMygwP5rffGZzqEqYr6Qyo5tmx5VKDCJZTqvSbhqDdDGDuMFk5iKsNHXMmnR7XpEpq2rWRFKXNoJjo5",
  "key7": "5mqT5UfiktV3Nf8MPSNJ57Q48RRySS7tds5Dbf6p2FNVtEZY3ebThCPX7gTAHfhCtdyWJef4ronMi5QA5Rg1uU3i",
  "key8": "2DtjTt6sEq5PJMe6XppekNygMuqHmYLMzNE73wMsZgivxjQZBP4bCF3ynn2Nnbox9Na96SJ9R4W7UUV8mofviCRC",
  "key9": "5cuYnDxAsaz2qo2PHZeUMk7cXAs6gbuCuMk8rCgHBQkY1bGcU44zXFbVC3iJGmNTPZWNNvk3iGGFkpcbrMg5ivfb",
  "key10": "2Epth9LF5vQcK47K8s7maR5K5KFMaE7X5KmsK63erkich8RbcxpSttiJnj36QWV3WQ9jqeNfZvHg8EET88s48pLM",
  "key11": "4MDJy4kWqrEc5oZTTDUxFYEisyLCKLo8cW9gbgyTn23BfM1oWykQ8qDYFY8WeDgHsUx4Pfi7JHW56b6MbacDDzbN",
  "key12": "2HdQEnEpursxVQyD6cyCfx3qJ9anSwNPvcQmxbfJEAqSWG45dZTsRqqijLnysnj4vJgQ3rqeJzChDbkG76LSAL9L",
  "key13": "4TF7ALWtFpV1727Y9pEieNkX3dYjk763kXys8rWEThSTBQWBurCQSBXzrMHgLGMf3QJ5Bm1ZqF9GUrRYVWqyZxrW",
  "key14": "BratoSZ9nRLUYtGKfSGX8FPe7JrJGjJLfqba4P1TkfKsaJobF2hsBUcyGDoogbRhCWgLYXvycDq3ZDBo2wRQDiM",
  "key15": "47h3r7ip5dKTzFbkZX6LWcWRVGTSafRcUbwYKf2Sx48fnqb31QHauwGePiJfJBfq3q1Bb52UNJb5UZLyP8yHDhDc",
  "key16": "35TCW3jhCVo9z7hae86427S4q1X4J3Nc75mvVD1LXbgNQuWPvJPVWaAR3aAqvwcmhdbeLcjTLJdVNz9QsvG891yb",
  "key17": "5ub995ENoQeP6RyX58xNk9x4wMPoxDvJ3tCjXCL7NvGu4bTpypw2uq681GtVT5hwfDXCkTBXy6zdVdKSmo7buDmW",
  "key18": "36xx3J8GtpQH3kgcQjDTipqaQSDpBGpa395ar3NDi8M9UyoAbyhaZjKNps22vnW15DUkqBG6MPhLcmmL2LcXTwn3",
  "key19": "y4E6X7A2nzDuUiaZjFoKXuizbLXtuifeKuv7RtChxogu7RoF714SeGUyvaDTyntyoxy7rWSe2SB2K7X4rXjfjYt",
  "key20": "49enxwj1ZDvbwwDSy83dSRqfaVELvsRrZ4rp9VjkzhDM7o5iZHMk2jXQ9AWnaLZu2efLzeYfKgDUStvx6PzRr8rp",
  "key21": "59s7hU4gD9ASwQ7pfLv1UTqJAdh7tUeZ4Zd2d6dvDBEynnAqCoMSCP3tPbkdJ664ViJBdXjMQHysLftTcYmtDPRF",
  "key22": "2Jt1jCtHa8EY8iqGDmbanLkMn7sbQrXmQYgtUK7oDACAw8AHU57Bj6y8cQZkr4G7JHN9F2pVSgQpj6CWc4uw17Uy",
  "key23": "4jCjDsbrTugF95UCA9FMdmjAUDNPLbwBPSyYUcmSWk6WDiPQKt6ueSGxR6oC2jkCtidd4VwDSFgMCnc33opkojJk",
  "key24": "5RMGmKP1BYgV8uETCZcFJiSznMHYRYSyG8j6YVbPAFDBrLS18zjdcZs8Vb4ALHCPVPkCVwkVdenVTU4agZ6VNJHc",
  "key25": "8KuXaDtJRzGUm1JwF9xjEhqQBwhiSYP7vPe2URLGUg96iaQ8MWgFsbrrxeexQqbdYx4NzJyZxsXxDyN1jZCvvpE",
  "key26": "26yKbaNidRMstCd3GuefPuasd1reF3yehc46aGT5CnrU81A4YYHMmwkmG8UEFLP8Jj7L1HFpqSfR56bubaWZSft5",
  "key27": "4jcWwE2B9VRSmKRXb1V3H68YssnAKcnZ3XeoVADf4SqRx63SwMcqb51rU1GELAB3KRnmp1iSt9reGECCxoGurke",
  "key28": "4JPFV7Nubct4B6Y9EQpsddzxN4FywwJ5nCEwBz14kEnvNEz5sUFeqxeGVYpaEcZ1LEMviSgN8nLh53APWbp5v2Fe",
  "key29": "VdG4MQoJUsccBLDx3foJfhrTzuzLUzp8Yhb99fMrbsRw39o5FytftmFNJg4ZZHA7gksTDsJy2rmF2AZc7bhYomF",
  "key30": "28vkCtN6g5FQ7F4yDqBcrenaJ67u9Ueqsf2c95LWLb2apyXgGxtgRoC81YsN9m1dc32aZ9mJZTZuT9aaZr2wNb9y",
  "key31": "2H2WRos8HAsmDDB14iX1mHLZxEW26qyFtedV8TTumAkNkD4YNu9UEkkvHkRr7kDPNfNvaTocVKocsDCGzkQFktMY",
  "key32": "HiMU6xQuZhVKoPtvSDuSS9bJMoUb4P6exVQ8oxdg3QSjJgLUwdyPZMLrRkRcriSUT14555XWBvqH4siWMzptwd8",
  "key33": "5xyqMCZct9hNbEqu24PEHcr8d16UdTKsHtCQyxsK7BVjAUoUf9GzFCu1CoRyAqt7LBVTiLZxXvbiSsPHeMsNKrC1",
  "key34": "3rkAofDRPU3i5eJyUyGjB7JTXMv2RuswJ76Wwkz7xhfMB6TsnAiGnh5iLfHDxHUfWosiZPMNHDiPmNA6ZASx5eGd",
  "key35": "3Qjjz5ZpH8dauZhNtFqrbo19kCF2iShSEn3QGMndhvFWLaraqgSchqMoiq3UEDY8pdk9Qs47PR7ddM76EfsgxcRv",
  "key36": "YjeR8JfLTvyDzNBjKyunTprM527rjLjnRoYhQNw2547LSH9LrHF86FVQc6PVRRvkRR4nePHn4z4nn7T5nmEnvWa",
  "key37": "5pAvWUmPQtq7sVDECP1kpfnZBWhjkUyrXbs3voN2pZbXXNUrZ3m9nbWZ2dqZvC1p5W2yZ32R3w6QRRQ27SQNtW5p",
  "key38": "5qL83dn7RkhdJXEKq5Cwanr1BVUNmemM7dPj7ykMtErHLMrvwMahyvqNCitdN5fdMDh7R5e4hnnL4E6kUWm45BNM",
  "key39": "2jcb3zD1RKYMzZSyWq1qpgv7gEKVAEdbBhCaUaNMc6qfVUWPuUbFW5YS8xxS7VhU4r4KHZ83qXdrL1AE8pNBwFGh",
  "key40": "3bC3mFNJpmvdB3AdcxhSmPeGep7uK1gsdnzn7Z52tN4tH2FQ1MWWHhGUkA8y92n5fvUCLRcQcEpkRswxBT1bb1NS"
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
