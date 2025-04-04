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
    "3CSfTEyccc7XxWfAAgReGAUCJzoTzdNzXhK3SxQxT4oufxBSuKvtFz6GjFjFxwTxRWSWqMvPaMzpC565WTmhx7YL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62wKNHif7BKBCST4jsahA6mSTappZ6tuZ1QanFiqzDvy3aUbs8z1du8HMXinbZ4m9zandmWt8A2rEMBWQkMmHJzA",
  "key1": "wXu724hUzXt4qqYXJ4qpbu7F38N51Up4LbSQPTcWZcX4mrX288BBNP75wFKweA8fLKTeMr22uhT5wZB1fFutwg4",
  "key2": "265BmgN1W5kW15aWj3XjtsvxzSEZvLgieeNHhWbWtmpjEc2Ju7PtYWbL1HFeWr1jQPa8fVQ9o3rT6FpfhR43TjXt",
  "key3": "4XTh5YmGFWxc6kNfCJbDwVcVyDvSu2amTRed4M1fuaywgammDjNQFPoqp676h4ZhytbakPZmFWuzbVAqdwVxgibR",
  "key4": "4tdz1CExXaa7kMwo5VgEL7wmBhxtFCtmkRSVNiM7sZbFFaAYqLjs9zm2abfLeuukpVuBDTCnptefSMzceGk7LFVg",
  "key5": "4YBajnGMSwgXdCX875igRziNTEVrnuVSdaHUGzznxXwDuqU6TDRWXgZjPM2nkV4f5cb2xFtD72WgJBGa3xTHcHKz",
  "key6": "56VB8uJkYCGtj9WHbS8HhKWqLigs3NBJ97Y8GPWRw5cLprdsPMcS6a9pVDuFJ96Mtd7PSerhPVuoVxnoTx9ifkKU",
  "key7": "3Mo7ctbHCJLrB6NtmG2vhkgjxk4eGJ2KCos3gYJ9ozgAjES4CiNaDW3nNdh9aqxNHak1scrGS1MgcK1NvPFsmQu2",
  "key8": "1u3VAbokm28QcNYbe6e5mJ6gyyqYajreGzMTGgeNnndZDPdckjj6qYpLCHp7MmYiAeEFMjgrWpp3NHCqLMjSSj9",
  "key9": "2h14SqqmWmq2Qs5bmyCFVt4XAbxrQoBwwfoCdVX9eAN5FJsmoka8TDkzQPJ7qimmHLmEjLGZxLX9Z6SdEyLnQKYC",
  "key10": "2Vi3U6wFwTN7wVDXnyQHFkEGa9TpntMNQsttMmQpMeHH9rX21Hw19g23jWQ1J5VHRuvff86YC6Xv7HkgfVR6uVQ2",
  "key11": "5uXhocpaBb6aurMoNT8ijJGYN4swJKdsksYatfuB5uKXC3iPZrdvQZR3nNdUMamnuMsp3Ai2wkN1KemLK2P7XWs4",
  "key12": "534FtWu1c83DiGEeFzyHiU4MJAB8GFNhm7z2Z5inmWTGRirfnbM8QY9pFC64G6tJHZ5qMvfdLd9T7Vrv38UQgFQX",
  "key13": "3QX65R2KPxqmegPeAiGLnPfeFX1N7ELXUoaaxY3PHdiqQBQq9PcwawPLeq8SPXYY9xRWskMj8EjWBwfqCwkYS5uL",
  "key14": "CcMAuRnDTU3ULZpZkzuRRECEJXngNK4WykJBo8A6kHuFePqYMfBiE8XrJcXkjcYDmdWJBU59FB6oNzjgZTb14q9",
  "key15": "2u3J6LKnHtCzscZHSpRhcaaDobxnmexL93MZbuceBbBVdPEEN2ioDkZbZtx2BwDKC93zSzePgMGcWRxMrqUJTwxD",
  "key16": "2zNAzh9xPsFv4ZEyaUGimFF93Zij6Tek6ajDmuBy7h5xFuzQ1LoMdXscgSUbA7QSqGbFFra7hYajsU5SP28KfK9G",
  "key17": "2tVUzgXPodBu95rNAYkncRBpzGN4CnmU1CCS8fA7M62ZDWSe15Rgs8mpigkQfEznPqtf6SS5bEfwjs6u3uTMvMB7",
  "key18": "p6EJ6HyojKaAFefkYWaP83N5iBPvBCFviLuSXPYvAxBq5S54F9gJ5wqGPa2THdH7h34JJLFyZpG9mQ1xPg1p2WE",
  "key19": "2vX9GMzZWY67wqZZssYkLmMoVxFuoVvqGmK8pfA7o2X7Xp6eggTDY8azhW2GTczUkThwdUbQa56GjDZF1ZQnbcK4",
  "key20": "KdSuwF58SLHtXZKDBzipGZrW5ie1SDf96eomjQjX3c9EKX1o2Pprk7vk2dCaQ1k6guQmCvCDD8pSzufLcrHfEpV",
  "key21": "21Cns645i8cFEE8ScCmFfzSBKpS8m6sZF1pFiXQraAhSLPNfZz4XmzNJVsBuZzSHA6DoCdwBxuq8g4XYiQK9gfdP",
  "key22": "2g7pc32se8ZgexzTB2WS4fjyLjhFta2i8VjnHRr5dc1BJR514JVnemxMGzvnMX2NCR4MmXshzYuYwvbhxo8p2JUC",
  "key23": "2Bu5fRiPniRw8exLSGX5LztV5ou6MnAaJHbp3wJXXowMn2oguSVwVDidDJmtQGs2TwAnY3WiuN2Tgzmiowdv4CY4",
  "key24": "35LGJFMvu7BtGPe5v31B7KvS6ztxQsfeKr88Su3TXWRGyzF5duYHkh1D1GUAvQgKQKcBc344mAjzqxm74TNkbhNg",
  "key25": "2FcXkG9S16S7npCX3beW7KUqcKwQmUwYKg6N5puQ82AegzE4xU31N1s6tzNNxDuBHjjEd7v1ddCJCDYc7qwmod1W",
  "key26": "4mu5hc9454atNwq1LR91tJm75LFu5SgtHYoV9JNNNzDCAqvV3uTdmnYBm2nFfURBFTd82ywa94a73S49mMQJJvCr",
  "key27": "2PEv1X168d9J11AA3VTiuvWUKfq2hLAWQaauaosgBRd8hUPefT5guUJ5VP1NgU7KHYLfp7q6PdGNPoapyM7F53SN",
  "key28": "2Z6PiUyPqzo99GtkkonD3q8W6k9LKFDiz5ERtrJ8s5i3WyDZ2JQJ4TLZd2tZitm1FVBVEpAthDfwDqKRH4U5uqtF",
  "key29": "59cT2HoBPkaKdDu6SU4cbXwtpBqN2j3i1MtHHfre77tcprSbaka6jtQVMf7UcJCsX33ZHBRkNcWqHomvXrMmcH5j"
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
