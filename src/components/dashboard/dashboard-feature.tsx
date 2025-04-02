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
    "5j8VkZF6wWitseWHXBwadsmdVbPnBEucZdX5J8qKqWhstov8EbYhqfWxYoeB3r3PV8V5Sij2mWcCEJiiG7Epj22x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZuvX5RUYugc1ioPepRsKBQfJcc5YyFzTQVKS8cQZPSBs6dqYy6REwoasjqVwtcDvgwuCwdLSzvPhepJu8dwRtt",
  "key1": "2jJyNV1nNP8sQD9V3shidf5vMtGv9eSfyHSzChR1MEAXteGVbCanGVCSpUYDy2ifm4D2D3Ah4eMcEMfiQQuB72Tu",
  "key2": "4fV5jQTGBXfxEwcVJ8tTugh4jTcyCTuEQf6q8Wacx87F3oWZYFXKRb8zLJSsQdyzYNq2yjGqLQS2PmJyH1VwTWXH",
  "key3": "2KqW1hsZ48azScaCBi5JsnAJ3FXChHqCjjCtTiFfqKHE1LC57Fd4McWtrSQCwQnZL4iM1PhjeyVP2xuPFLXpRFLY",
  "key4": "2Piuh2737qxcdGP6bLim9M4ACfsJRrEqZqgs9BmfaqHHFAYQiWnhnzL7Zfin9rkTT6iiv7bjmTATX6XfMJiB4Pnt",
  "key5": "4Rw3DtRJQApvNZeTGYvypMug8PjuzbD84W1fgt843GSMWaw1qYFGYmcRQ1xpqJfGSuQrUyGznzgBFsT23QiaEBeD",
  "key6": "3H4otGsHTiFoEPPhcrg6SDbh7v3JKtahKKrbjdGJ47JH7dwrVjhyKLPwGJ5iN34tMFHgUn9S7NVtRoArWwBJ7ueX",
  "key7": "4aKbkiEzMPpzdCu3Uke1sKh2Zov9DWuukh7o99YLY83gLk155BugYJGoGTUt9wWpWuF9fRgodQ8i28Qv6U79fcne",
  "key8": "4FqA1orLBpJsMYmsa2hAx16mzowfzNhP7NthgQMxiwhdRkcBGkVamU1SnW8Roq1o3QNhRXH6bEVbwXwGeWkyjf7t",
  "key9": "5Tvz4FDHV8Au2RDU8MR13WurJVmBerXh42xMCDdmYLkckPwdC8pQLGS7jmANH5iPFM8QaVgNQCrGDJn1fvTS41mh",
  "key10": "4KWknHCPziVizWmmJJr4t1datMWASXxqAR2pixKgqArjqaXXVsz6S3DVBcY5t4aqkFfkRoBQcHXVkyVZfHtJF5xU",
  "key11": "4HjJ7Y96bGtqS664ubFDeFhVUBAmitDjPtMsupD6wc1tvnFzugZHTGXAFy3vY9DhwMSAp4F2kLBKANdej77421oi",
  "key12": "4KT9dPVnA4qT8sLQdQA7aEYoo3w7EaBvpTeeYQHQDF6WoEHoDqJt6oJabB6fcDPsSZhtVfVDZKH6YzuiHNaLFc69",
  "key13": "5Ub4q62jEyf7XuJEECUHGFfpMiib5vfGRo3CS2vatv4XFHA2imxTPxPBUfiqPDLyU17yZR4qEEurHgaUyUhFmgvB",
  "key14": "3KApaDzzgZE96H9pp57Hym5idu4Nehb3ZFrXDRmVNMbKye5Ze51yCTvR2h2Grka24K5EV9726rUeyJav1FBgJoaw",
  "key15": "3UK9U75onYBNQMxYce2yeCwcGLD2bzA2s8bimQqZpc7QjYvwCwc3e6Bt1hTKGpq5pmsJMgr6nmnxXy1KZ8gtKC6T",
  "key16": "es1SewccZ8xozfbqpv9oqs7ARrjQpPBiFAWXQW9WEvSVnHxUA3g6hnJE9cbXcuGGhaQ1zgd74ACGmATWK5P5Knm",
  "key17": "3w3MqK87AmGXyGobFEEuxFoEoQBspTvg1Uhnsbw4Xtv6UJyEWygD5EvaqHbms9NcjdRdirFKssB5MumVi5wkZDHz",
  "key18": "2KTBVrm8sst7YL1q8k1ryi4EBwBuXum3w1DPNPgy3FfsQpMVtcrwp3caHjiJ8GdDQd7iDCL82y4BFFe2GQCaoBH2",
  "key19": "5WAWkqd6ZBPMDVWsVG4JbjBCoMxxKgb2VNKyUma2kfsQM1tjmQfZSZzVa9YvBdvvTWfC9WmEXZARsbUKz3WzypPc",
  "key20": "3Q2okpmYq78mN3sBQFpjsMpiwkS8hcvPGAfLPFnpeTRqXbRUjx7mFdRauR9rLYcuPhDz6s6LfTaBFfYQ9DC8P53B",
  "key21": "5agkNJcnLUdRzvjkjCXTxe6LLtsa11QgRfdGrdsbaCGeodt8bwnWD88D64Wt5v9m2pZjjN7raog2HrCf7PwKedUy",
  "key22": "5fRrgjQNk7T7cJSCLqoj9tRPwbD9u4kWJHwoSKXcYyf6yVg9esdVtDZZbeSANqYLpD6r8qutd9TEyaXe4mS5gtTo",
  "key23": "3hhhuFqG2J6TpdXibrx7kqPHHbpwsFA5sMa1aqQP1nwPaLpuVwStXwqBErJ3VBBNubm7tk8cFV9hWdurCK6UAyG",
  "key24": "5sMmnqqCuTFtffQ4DBFUCRAp7MogYC9fLsy5MQuwa6ayYBRfeneH7duYt8i8bi4zSQuxQ5UwfT5Q7SqfvjzpBQqB",
  "key25": "rKuUkqDqND2b6Bda7MtWWfg3RMoH3ScoZMokWE62CeWcgtDNVDEKQhEj9y36sqiQ2cYayMZ3zAFyBtsoQ71gxdR",
  "key26": "3Ubomzc2hFqYJkA9jv5PZFwgHkNgo5oZiP8K7Sy23RgnTQxHarGHqtdqHXeoBtx6rrNKsNZ2K7xgKNWdj9cfTAeP",
  "key27": "4hw7rr5PaZPcW6yZMh3SjLrPcvsYyfWfwxcP6KTQAETLQNF36oz9uSt91deD7sz8tcBcdh9qzh34KcSumBmjtBKW",
  "key28": "3hQNgttZK3Kskk2KqkhoBbAxKZLuESyVU5ckEEDDGL48PMqw5NEALYQipUvhLMyx7pJX9h2t9XZWTamjyzxGX9EE",
  "key29": "43Csx8JZVCWiwJxvWaMUQkfUHhXdvuvgAj6VJj6v3kw24RWqg6qKC37qLeguT4qbZAbL2ozBHNt1fznzAQfLbfsG",
  "key30": "2JEVkLULVsFu9xDKr7rEhnY82PBinrynoW1L6evtiGtPxkSWNpXmzZEejC3vTcbjFbbddGFkwuRHt4PCuRPF8GQu"
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
