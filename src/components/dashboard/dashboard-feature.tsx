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
    "3CedzXLH2webbyX6KWc2ppymVnNWW1BuEhQ6PyBoJRWX6QVPv5bWkwq59hchu7yEd9iEoig3jxJEKdS968zN742E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rgLddnzLceyRg7HgzJ28ZhbKra2hVKMH6NCfiu86UdqRT6wYQqQ1iHJqeUBwcjVrQwMzHexPoH4qGpRw67ZzScc",
  "key1": "31KUj69sRjnHujajKnNRQdcA9mCpCB5atJa9BSfXJotxawVGejqvwNry4dfprG1vqZBTaJNVZyGHjDFVXwH5Fxcg",
  "key2": "2thqCtZxPhSKWJPsJTPQuMK56E9EUdDMToWzcRNAna2SNZw38nJ3WEFGuwZdbYx8YBhUyUJgadefqCsQkD7S99aL",
  "key3": "WyPyHPYsN7Ep4fJixi7vMaT9G7uqtGT28QLg9Rhf2gcHG7rV7pg2jJxjvm5DsLzYpnBcLhHh3UFAE9GX1xadChU",
  "key4": "3PKBn93BSx2zQmvLgHhpgZisyNG4xFX9EUMLWaVmUCpzyCSBoM4YVoceC3tFbeJNPYD7j2dS23sngUgod5bePK9s",
  "key5": "5U8FaKaeeyhEgJQcUeDMNoVrRNtvhrnUZd5PP4txPZs1YGCmF9J6FW5zBGWHTJstxf7eDJCkxheV9NQneZWuPbF9",
  "key6": "nUAeMDQddstgwKWJw2QDpTfdH7citovEh3UttRprM9NrEBX2QpN2gLYrDJNtGy2DPkXQo37Na15Ta1X4JmTxwJ8",
  "key7": "YbGgiyuENhaG9fAYzgN3wUtH21BEUwKH7gEyhg5bxmNWBXX2ZzvKpLD76GtfLEHfym9vqUDYpTAUgjgCHMU5DDd",
  "key8": "27NF4eiX8jhih5CmFLRrgJ25CaaDPer5yb6yzb5tCveXehqozomGAiRqvTXLTnSTNaBz3MRMBBqdjuSkgU7BQQoN",
  "key9": "4dhKSuw8quWYa8wxtnGQvhNy1usGb37EzzEz4HFdFj3v7baHLiKp593RWqrJktDgTMA9FF6z415CnVDoEAzFTWwu",
  "key10": "3u9vfjZZC9tPVrtzrZCjWf463WzNaVUX4YWBEpWkZ2VDYYXikXpH15NYi9hGExzAkbs1Dizfynk9AbzV1KqcHiV9",
  "key11": "5idpFyGvQEeXy3u2ZiirpfVrMB3TU9jrcwTekV9BRE8qEnQFfUL4Z5GYax4mP2WBy6U8HHjCcAFEYkRHFu5yVpRL",
  "key12": "5ViHesi961LaaJUZ7LTGVdx18idoDathNdtdR4yvRqt657GXubecbS9H8VD8nkinzfHmPnf16fVjxxRJvtP72d8E",
  "key13": "4jL37u2AQWXCmXTKMXjtan1JcnrDh1SM8WqTnUwiGfWfLrqnnjto31NYNYv5HTDBfuVNN7uNsh3adJiuNsa65vW4",
  "key14": "pg7JKYD55QY4vvXaBJX2aehpv3YjnurLVDp9d5GL6PqrbX16kxuUnxFLHQVvERbxcZJBDfkQE3hErM9KCJbSe7U",
  "key15": "3gfHuoY8BBtThqkmnhGpccY6mtuNNrCRr57Qf6RNF9tvqibkLyqEz1XcYFUzU6QvuUzonwYp5Dc9mRpeoWpWKbgj",
  "key16": "1iEHvVnGHjVPEJft7VzDyhEJ9BJ8tnXgdEcN75WZhBrbwUokRXDw56MZQ3C2XtPvmgqevm1fVAfqJSSBLRDvC1x",
  "key17": "5j9q2kabffiXazMAkery1AXmki9SKVSiwNDiRrGtEoRKpAqrmUUhsxqnykLi42hWe6yLgrDqDsAGiTRm3BTkiTXM",
  "key18": "5PJmtJEDvB9qWGs2UPvEZWBmJwhHnTsXMhMcBRaXhEzdf3fL4uw76RfJmr243nmSsD55foydCE4ti9P5XKYM4faW",
  "key19": "47MmJFHMMSdEqbtLN8cAC1iNKnykFmar77rbvGMSh4ufGVEYh4QWRPKkhETJYfdxpBLFs7ARC8kGH51k7Gcex5E7",
  "key20": "647S5pVm8BWJqNNspUDcZ4NAhyqM7vQPfSR8rQre2retW1ZL1TE9HbASdZhZqPmpD8SfVDzvVJ2SZchu3SJDPSJ",
  "key21": "3VkutyTgDxykx9tvztPVqdpQd5yRWq73AUcae1eEZnS8BBSN3eyZRp3YAbQSXX2dArPd9tiakFKMQvyH4pYjUD3r",
  "key22": "2kdN6Z98MaUrJrbTHw7DRXm4j1omQMXs3cFmQAE4FKTuAbsFqJZkZCsYtvh5knjMzwomdVvWPACd4S9u43fkXuyU",
  "key23": "49HfGJp7vZa9qqPqK1wbh3dqCLC4f9zik3XHX7RSoC3VNHdJYZsTycNMjqdKpH2gDUzvQPaKZeqfRq7ndPPKBk6S",
  "key24": "sJs156PoS5zTzXotJZLr4mLEwWsWQKdRBhmXKiakJkhxVNnG2PCBVSGmGE8QWgyYiH17hkCqiBXonhtKzRiU5Dw",
  "key25": "47h5JzsdHcGK6Arq2UxFiETDQtzoVsaZi9vUtiUzk8NdBd8YQU2473VsfitgZgT9sw8SqdhgkAd62sdkiYTxgTQn",
  "key26": "KEeHNeMHazxwvqBwnhvEzRTqp7LYgTvrG64KMGUeYnjFGGjQrVFuoWMHrviqJbXoQbiVTxQrt1FciVJHseJZTCv",
  "key27": "4BfvCJfYbjtkJywUBM8ehvYAb9sT1dtaHk2L3sJRDBcyW8kRkH32rAGM4TG5D6bzdAfpSnAuxZ8FBoUTWh9Sk45S",
  "key28": "4m2Exs3zj3G15N5zGpqYfYuqvbWQCS4agabiAFuciUBj54F9nG34aFBFrpELWQqN7XJMbmrGs6EA9FUspzKJzycj",
  "key29": "5wNM1nKYGurR6vDnTUq1R1zDJMBPbgtYtAcNX2N6VetDodbyEjqHQGfLGSEk1WvxqsRS3fPRzMMWvDYbj31MdFo3",
  "key30": "3qHshiEXiTThpnrmV6dSSH79UdmJp2CYt8shMnT6ugV26VY4LMQeB21qracfg2Jxp8xhJEy1Z8P5GXiNYAUw9zZg",
  "key31": "4FmveJV4jgWFpPJVLE3auBWpQb92HzwQyqXEJkWTD4NF6R5Fsc17efz5zNBrHY5KkyEWEZqrHXtS5PtNPZZUaNR5"
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
