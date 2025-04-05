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
    "rt969evoD8GMxj6XHMzFk2bVto6aY7fd44UyJ3ztso7eH9EGScHYXMVwpWiQp7BT1mcKYfGi73mUykeYdpmVEoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cBJu56jDyiV6qeERseFDq7ay8NqfY62SVxENoWrgG6rieLc6zdsbWWHXjVrjqhN7q6CW3zNrzeyuiroktMZQKqa",
  "key1": "5xgFQw5TrTxhBAvcvuq8X1WTvgeVAVty7KZtafCNZSir1TJPDC1K2JYvcq894Us4B824ypXyxEcD2j81TfEQrgTA",
  "key2": "2UZKuUNR5KZ7FejrTWpChegnKYZcwaQTqiXpuQ5h6FwqnNH8SusxG5mUhDB75KHZs6qfdoPeGeqBwGvj8k4hJVQ5",
  "key3": "33rBp5cXS21kw5VTtMsRbrGHk5PPX6eQiEq2wuJxUxz3Wm9LcoL3UBX9pfKCV2EGsugkKkw3qLP9i7ivCLHPK1uu",
  "key4": "61VqXVhLMmJoNRXAmiUfW1yKN8cPZ5PUsTF19pUEhwu7e6WsNfThk48V7VWrcCBzksJdRbVTng8KN12D248X3rNv",
  "key5": "UtXzYo8g7T1Y9tFxmj2wcU6M3YXaJEQ6toMPNkxomw7U9Msid1Lqmn9xiSRvLMYmu2gvdMyVBf1QY8LepkRjQ4Y",
  "key6": "5ESiuoaBbmLfzBt16ztX1hoSheecyp3JFJgBE6iWtBeKzc5GCoWc8dgmrsFv5t69ytE5ZmhinJFDQJ68R9hqLB72",
  "key7": "3bSPTj3gftXRQmRsqN44SMCxFAn6oamk4xYML3pX5UwJiDvAhVsCtqoqns4WysPnAgheBwrb6QgZGvA7LYLGEjuR",
  "key8": "YvqRLunJj6vioiU6UuyGnq8f2era1a247aToAuAAwHYcDoJsc2T4YZ1m4XpWyAwuz9ComNJAcw78pEtjc6q1qbp",
  "key9": "ym7Cku2RgGrtKwb2As8HTetceUGcM87otup3bxVbM4y6Mqi7psJE23PhVQAy7yrmCeqvrXpPUr1kaExwS1DPtKm",
  "key10": "4Rzj91R3oVFBVTofBxP4MczoHtAWFJ6m6DNFqy5UjUJ2gps9wD7RABw8GuBxVgFrRL7BSJbqUR9Nh69PmToBzssi",
  "key11": "WRHw76W7s3pvcTnyWbRFTCukNHudXnrv2g2b4qzsNGhWCrgmYtontZ9j6v737JVq5hsjvdLwMpjPamDSQv2mNG5",
  "key12": "533ASSCHuma58Sg3uifVUXK2EM1p6AunnDfHZM2K57dVwfig6GR5Z2hcDMRZFor8BjVL8TxShwo3ptb1MT6HU819",
  "key13": "3HZLcDqV9wQYD6T3WkdZKopWrTuT9yyRyJ7MuioYXAVmjdj8nSArVkB1fLFViFwatuc2XuzUD19F2VpRp15RsUiD",
  "key14": "5VGjYsPdANGxScgWGSeTqtSE3QTAVcD2wRM439hagmkATw8xbq3zXtBiBWQZ7tRE4yq5WsjLcKo69PoWvGN7t54n",
  "key15": "3hWn5ACCCdsyf5jQyjLnwvcmWuaF2C3WhchPzEMEPsZ697oypQgkirViLGtx5ueHzbPUPfUPixrdrTU1vmmWtTQC",
  "key16": "3Ze1ZWuHvjV2R6zGD5Sxb277ynaxLB3pB4fbrokhb4LVMmVFyV18U7XUZXpLiC15A4y8R8y2sbgDKi12HQTjJWQ3",
  "key17": "5Qtzt3VFYzJp14wwmQsPPR5LwZSaepgEN9sCvSnA3ZRCo8jmDnmyvyGDXqqcpU3impDbjEfuj1ivh3KnG4w9RZqA",
  "key18": "5T3F2jUAadRwbuP43mx2nqLHrUz7462E9xCTTU5tzEsBKzoYJsrgN1g53zvbU6EfR6KV5dQpyWP6to6qR1FJ8CqE",
  "key19": "5UVyLu2KUhGqrCQeNjk2ETFGR9ht5T4mCq5iDczBwq59oB6BnmAcE45UYRigejMrV4FHgdiTBJWBSNCWv1yk46q9",
  "key20": "3C4NRHVhQgBkMEULCRdew3bwxGiuC76G2ycUJwjiVqeE6dnfyDJAxNPdbi2DPs7rjgRpGxKcRWKjR48RGTDtNwB4",
  "key21": "4qUPBB6XTbmb5JXQG5ox8C71JjNrqoF9W9uzsgyEvDdvPGpp26dnTqA8X1yP5uZRcuL6gNmEGnhL59ndEC812qc6",
  "key22": "dvENzfGZDrQNpyjwrYFyu7DHTiXBA85K6ans3FMC2QjmECQJD4iNo4xhKiJEhVBXzBeMeh8AoifR3okcvCyVex3",
  "key23": "V7gkmrHoDuhb4aaXH3WFF5cMac7D9sFFF39hgVLyb2tL7abhjxfmz7WHVXjsjup7QYDJeM7qxPrhRKf7iPLREBr",
  "key24": "2ofbngUrkYFYVenvysEwomkvpRzHVX4tSYHpgFoDAdfb5QnbKeYZ5ZWBhKNVQog6WUgdAghYbjLYayjzCsxW7EpF",
  "key25": "2PmZjeAiHuQf9mspK8XZhnh6g9wzATvN5yuooWLMuFVe6AbqSC5QSE5bqCn8g4uDFofkGQ8ffMKCSf2SwYaps6T8",
  "key26": "3CNT7vajQQ4CNywsLFR7o8wJSKyCHaHtQCAH4JnLikTcPE62U46q9Xmupxcxye45upB8zj6P3DkefadXnFs6oNvJ",
  "key27": "FxwXcAHnGprA2UXKSRxxivMRk4gWncsobZxeS6ioizgJYABi9rMydLhLcP89rttsGZwajzBji83eSdPvUVC2y8F",
  "key28": "39CddLSxbBHXZKttxpc4bnHahH6wR1bYuXsNyuYEecMwhcAWPuVK6aJC6SPtuobhssp7HNHrr82pLgnicB3v9Cpg",
  "key29": "3bksGf9KRuapEUPcPBuTizFgiHyrMZoywjdyEg5tgXYv4xhLQn7PewYtqZ6Fur14xes84RrQkz8ozzNrMRi3Z8aw",
  "key30": "2oXUZ5fsyZubwBZwmZUhVNE77fqftj1tV9erh6hoiB1zQ5k2BqNxZTECKYjZNqEyYiKSNAFiaF9K7SHobr4JL8k",
  "key31": "42wewqvKXuuJd1ueMwJo8xLwvhpUAXp6VNGz7MJh2J9WQ3tEZ12oJVYyyKCWjq8HjNB94fy2V28d1sBLzecUTmYj",
  "key32": "61ELcrM9xFYTxX2usgMSX3vA8BJMJ6ZXmMW9QmLc7LxgacytFgTgpDcPmvrgYpehUkT4crSwrS3F2fnWD65g7izR",
  "key33": "e4531hWPZxeVFfaeVWq6bQc24EUJkYGuzFo36T61d18KGHRyexNZ4sD14GWv81oF1b27G6F22TxBojugSMZbVha",
  "key34": "6hoX8dNiJDijd84hX1YSmLMHFiRhUQfjnNnUMEhsXPAkUoXw1zkq5yBnXboHVhQf7aYLkkhUotVioto7rMdxoPZ",
  "key35": "3z3LdrJcma5L4akdkEYwQPdPpLTKAYbmzxe4PpyEV9hzjyxXjkJYDQJdcJwdW1YDn4FnrPDLYPLLUkD7pJPEHB8d",
  "key36": "SJAhfx6aX4pLWRVSYiXMM7we1e2rneoRW2y1wc49LaxuQjz9Qvn3WxSSMfN7j3Ud1MfmwNQj6KqJtoNKTXbM3rg",
  "key37": "8zhmW1J8Di2N5YPsxrdy8EtAofVBsdjzqSyUnGenMN23rKxXds6yUxydFLXoSMHNdph6LGGkSFvNSsQCSTFQzmP"
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
