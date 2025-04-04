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
    "4J8WSgRjoEmKmFMdr5pBFL6VoPCXUSxZkqagUV7MHsYTKeWWPouaKmHkSMt1CUZ3ih4ksFJvy5dYBZRDHe8Si8mJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2msij8bGjCkRNdtSZywmnWRH4DTS4CMMQSjguDFTvi9Vg1qSZgPidBZAwopferCTZGMCWjVzH9sGVfXny8oQHvcw",
  "key1": "owbbYqRwg8wiGD1fANmk6YR2q9Z5TAeyNS2YJ71qmyedqxBLvL74rYBAuovxe48TcJpsWsAaUqmz4xKLmaBoh4K",
  "key2": "2C3HrqsK9WrbHG4AneRvVra7MKikbvavDj5XTPZPvTsRDhGeTiw2LpoQyLWkYjEXXUempoYps1dbptNevoSwUiLm",
  "key3": "4xafHcqNeaKPvHR9kbBovRpEcvaSNWoQXjqiXF8HDMpvAiMEBbHyRLNZ6qxKL6wtp2ArhedwnQtmKZtS8cZd45V5",
  "key4": "2vJfyncK7vgD5KZMdV8GjbUoaAVyHo7is5yDsnUS3zJgVVGtcRqXWKo9ECAHuYeBpxRZpMt7vg1fjHxmVRwa2ziu",
  "key5": "31Q2J82uFDy1zB9vpbYeXU4hCY14LcFx4v1g1vM228w2uHtW6Zs4B9RH2qm2nH3JAe5EJ9DTkCEqCXJdF2YvGkTE",
  "key6": "2gmMEvftkpQCVgAytVFZUK6gAhHMh6rfKeHYkV1LmmieDLyThUKML32pYBB8RRd7DJ9BqyTKgHSasq4MCzf7mHWT",
  "key7": "2XVhAfKM7nCYYtuheU62rQcSXWzvUMZnQT571dDPnFFv9EUdHPgTf9qhginj5HcKK4gi7WkfuHWFLnmijZqmNL2j",
  "key8": "2SEuQGkrnnS4R67vwg7A3RdRNfj7Kw3CTRa9b7HxyR9yuqaiSZj9PzpWJwsgVs3V6UA91G4RYQpazFgyK1ueE5F9",
  "key9": "2ZLUdHLxLdKCKkc5r1z3hVHpqkM4Cy7NGBYtCUBkx23HBTh64wimR6oaQCrvnnM45buQb2vcQKfBiUTQTk9sEtSk",
  "key10": "ePg82JyStPUYKy8PwyGKZDXPtMAZtrn8SqTsewtxyZdemXkrWMt5g9fac7izMH7gtxvjcqhKkfRrVKC5Hw6Q4sA",
  "key11": "4poPUVLrfvVDx82edrD5NT8FHrPDekk8tdBj4w7Na4Xe66ZpKR4dpsawGM6P1AunLqvWNvLyVG3LeRUqgU79YwBk",
  "key12": "5giLFoPB3vUZ1d7JqMwAtbwpcgcBZ3EMeZ1QREzeV5DX9QMN4MHVHMSf6rBzuTpZ6wmQHqyopYYn7LuB7tQXorKB",
  "key13": "53kjRHEX5VdetWJwxs5qBbaYNE5YG11PcHPkQsvdo8qdtzbhyvURYKuobzZJYgxZ17ofQ54ghRFhVUcmi3TWgtjn",
  "key14": "3LtQXtvdWYAZrRw1thLmMiLv1tDVh2yFJP2rECw4qBSSWvKy7o2NmMM3pNZBz5hq62gvdbDcm26FP4wsJ4NCtqpE",
  "key15": "2ES9PFp6SnAK8AzyVuxgUiV4jYp3t8TH8WAkDr7A17ys2w5seznVXJwFGrvNkcFc6JWDjJdEvgaQ8xBRJNNnji5P",
  "key16": "4eS36b2mkPC7epi2tfwY3WJtUA6syH5EqEiV2A2ZGwapdPyXs7aXpCFtAPJ1TJnpaB4VaqzXJ7cyxx3UTto5Hdtb",
  "key17": "3c4LC2K4SE44TmVkfC9fWsqBLK99i3L11CT5CarZAPxsmoRhKLzU5LGgp6j2SgDPEqPJBoMckWeUEUgrUryB7Rm6",
  "key18": "2VoxHVdRTH2c13LEgsTX71GymA8A15CwsLdsCSS5kejxTeMMQTSg1e5P74ekd2sVgevmTKhGDhYcU4dyV2THZnjW",
  "key19": "5HVzwSGts39jdWG6WLGVQk1v5AbW2FbUB1AYmPh71M8ProfEjVVGiFH6WkAggrGM4L3kh3zGNoRnT3tw4PgPAbJN",
  "key20": "611TpvDDvT8GbuvtuvCVaAekEFT3G2SQhMZQtr8M5EtBYUdDPYZxh7FLS35CLMnmzn2Rsf2i2g2YqqoGVt7UxXHK",
  "key21": "2XAHPHmM6vWHGMN6jSoTQfD99G9bZCNGkdgZeBrfstkauxxQLgp9tNfFBugVJPcToqrT1pmdDWpEcLrMJk3w4CuK",
  "key22": "5dAUKSbdXta9auuQwwM4TU7xBiaPxfvMtAteKNu9e7q8Uw6eHmpDK14upZA6eFf6dKvSGRphzgWZBCQDQVqRzLdb",
  "key23": "64ZTEVZf3o81TATWFAeAn9tw9vvfDfwyxMCQQECFprx3pFZaHWeu4mSJ97fzUhsxRZtj7qgxFAMzEC8snFgsCVN9",
  "key24": "4wNDvR1JnRcY1JouFss8NSi7i8eHTpkT21FZwPnMwChTDQ6z1JDXBVvv18ewbQ659mgmtwA68Mw8HFFWh3qVndbm",
  "key25": "fH7Hgh31vc9ENqCJVUYMSL4WywqSG7RYhZoXqQ2HCxHaSktwK2yw14quv6PrTDQxyocAn47WrNM7scEaSPMJB1E",
  "key26": "2sXfXnCs4oAKdctVvDdRduUqsrw6eoUpYfE8LX8e91hdaG1VbbGgMZuofSXTABQqx49aFnJzVFMvnf3ouLpDBmgN",
  "key27": "z3CpZxukPVSJH8vkk9yBLfhTkwbUe6ruSi6WjF9TNxNRY6LCv1UezSKQ8NrZMMMx5aRF1DCHJtqub3ZzvRbiERX",
  "key28": "LetqUzSDc5n9UK7ss3GYqApqWbxqdGA16BtqLe1LZSqDTd1kX1BCJKfZR8DhbKFBmghXCgsrfE6sn7pwNDZJGFk",
  "key29": "dkdu3sjeoKjXanWsm2Za8VtbNbdmNkkY5rNGZstL3UNCnvvE4wGdTEVXZRuzG5qsvU4oESssHHK26PbwhFvng2h",
  "key30": "P6ho3eQqYYdAhC9gif2yqPYvLApfiaghpfpVhb8xBLXnE5o7keMjo6YEZAGBoEDFivztUuJFVY4tGAuEstu8uwQ",
  "key31": "E3VPhz5txmREpPXwf11pwQg3TrGoTe9aX41NqtH6T3g78GK8m5bvL88aa3a7NXXcFfVAFAFngJQJZYeUtukH4gs",
  "key32": "4ZkiK4nG4WwJDgDbBLRAUNbd3iLuEKLPwyLwCYwPcLPoq2Raktftxh2gS5JmS3Cc1anVZUMh8kKdjR9Gv26SaMbP",
  "key33": "57zbhUVZXnAdKswpCrYdk9saM7V8VoqV8AUDpLMycUEwDTujiPctff3VhPdhdjHW167NFP8ruNmo5vX4KLqSJcbd",
  "key34": "5Qrj9ho4GQN3pfCbzv5Fai8UfVtfQ3pwQnffoJQSfwp7QANjRP4RYCypuqGuHWiuAyNyargapLPb1E5hNnhCXQyH",
  "key35": "iEU5k9HvXSNH7jMYS4U29VGhdgX9j825EP5jUkhTWMF4yMPB78mzWh97UnmXCYFL8pBXyEGp7Z4pr7khP94VpRr",
  "key36": "XhukodKxDSjA2BWmxqYuNtMvHPtzxxhvX6bJNkDW8NpzPWhcJtCcxraKdj2zMQ9cRJWEFjv82pWf7CE1ev1mL8S"
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
