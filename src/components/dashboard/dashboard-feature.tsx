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
    "5mPe6RaFteLrJKaLXANpA1ybeW9m9nJrQGEEPSH7aWtW7sxDSPHVfhc1cjJjB1CK5hE8YGhwsRzEUmuQqcJ3K4BK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45u3bwdSaUV1HCCmwuhj8ocZ289Co9wZd9uwjwf9P2ypzWUK6YEV1CiwK82dtYczr8mMSDrmHkAAM9wpTSqiSrWW",
  "key1": "2ijx5vwPdqMCFeEsmhjdDwDm2Wwgkd8LRazvurkhwPmo2vCds5XpDTte6oteADjvYYKUSxyBbzbMnDF6yGwZKb2C",
  "key2": "2gRc1zjq7UBY1CEYTF1795msUhVDaUuKs7WiALBhLioqL6XkXbcX34MvBGCp1BaFx52iz1cTPkix7VksJKSAGqPg",
  "key3": "iJbUbskXyYU6wQt8hya884XnHsGNn7wPF8QvtARdWrUCjkk1eduC47eB8aBcQoNKNXKy3Ste15dNaWZb1L5qxLG",
  "key4": "5MZLWhGZgFBLqBkY2aZSpXhEWLPPf4FJxWRjaqiNY663aVWZmACgQrDYDYkx1SjLidK49ghPcGxhfriFixcGgMTD",
  "key5": "4TMPpWvX5KLGkZ9ytvhp4Avrgdgyc7ZY8mU9V8Y2c29a4z1B3eJPmhFu2ktt4AgQE5cqgSBAFrAySANAPGL8j96F",
  "key6": "4DHdwXmbD4eCeVbzarYJJCWbeks3EivmPEj8ZCPVZXgvj3LH9215pZWyeNTr8811vgUnc3R7eUfrmxngmsUK3ieg",
  "key7": "5MNUh6jsZWso4FmRXK1ccVstGiszYiL2bA6rmTYTytU2zhQRj4ytsatdqFg3fHaPSrtcYwcuU6AiaYTdhiCHTR9Y",
  "key8": "5t4rd5Gnh2nTBHKJ6HC2TQ89KnyfCPcgznCqnRc9HaYQTq4Vom9g7EosLPK3TQGz59WRfTnkvu5Kk9DtBGrw7L4w",
  "key9": "3ACVBhosPU6w1jEtUNYaD9DYPNbMs4cMwqySGcSpzbYHX8SYNSE4K2Tom8Mbfg4nrSgTn6J6df7bvqGYC3Z7tYQA",
  "key10": "33L7nyY9MBT8LXqYKMpFCsXkqFZr1WAW3KqyMg5JGDvFKnopcVCbRRXZQfNLd8XnUF2L7r6rWnX2hJXmf2y8r1xT",
  "key11": "5h9Spk81q9hWcyX4F95DE13yZ2C2qeukNhpzhdTiPrZoz4xybsJ51omCGKwWG8U3gx5KBaKBLwHt5xjuBAWvGuKU",
  "key12": "f8ryi3yTMgYanVXjkx1uryLAyAz712u5jGoUkrGbf259RwWdNk2PzkTeXjYKB78S7ZaBwssumX9svoTqgNFNf83",
  "key13": "2dcxCt3BsKvSafQupe4HuuzgpVVtiHoVNymyZiiQ2aQLQTyWCUE2yND7FVVxtKTt2gv16ZjAJ7YpU5YeudMUeuiT",
  "key14": "3swRxrTdqm1xs2dSjYqp64VJ4Mk2Bdb7ejRYJ8CgkXwjBzzK6XrEqXNjdqQgG7g9Cx3aB5MmRWkDgGEAA4hq4Z2j",
  "key15": "3Kr4D4b5odjTcH5GC9gpQ7638HEDbRvCVTB29u7txx8kfHmMM27pEaGGXC4LL38yzuGDyVu3oNZoRVJLtqwNEtKR",
  "key16": "3MycsbLxLnjk3E9eKug31siFkVdogizkEyLZcHLCR7hMDpTvs7HnKXbKVujpCUcxJVkaQGMGKS7B6WU75VHqahRs",
  "key17": "4XfrzW3zeMpb8tZegz6UzwWdRqe2Hu5HTfVaGaCVuc51gpTBPWbD6c5BzcumDjnt1u2KGNGeZVZVfdaMw5cGKQjH",
  "key18": "2EkAbAvnJu15EW8s1CehtvSqU6bcQPhNTSXNUBGvkcQqTVDx59t69pwzRsCjAXq7WnAjTQRMJ8PGPpNBSGKTAgS8",
  "key19": "bnBzSxyyN194kkaC8x6WJHLqdwNqTuMkD7siRRo7SZikxT64XJmZVjFdakYxYKXKZN9p1UxZV7URgzCShbJ1tVK",
  "key20": "38zYcF3Lj1mbmc1aD17EKtsVuzABVbqzboz2wfDSHCQZvCUd7XbeduQUame1H5uvocGAeRwmrp9ZWsni5pUZLFYS",
  "key21": "59vWGgatEHD439gnzYEujz3rHbgpvYteY9EMd4QAaErKJN2KABgm16EDmVzfrFN665QU5KgJ9qxZTy284GzxuukQ",
  "key22": "3KiQgNripnAGxpC4PRZCSRrN7xBy6nySXKXFpGRn8PqCTGUFAVhCrfA8v1VB5w6LYpH3emetLCgU74noYKqgqEY1",
  "key23": "3zgRVk6ZfEi2XoFqxyTWBSNYCV8Zv4rSVmMZzit9RFMbQHmfX6iG1EPomr8cQ6QdQjtnh6McuUVDjYZwuoDKdyFp",
  "key24": "2wmMBtQe8sqgw9KutkHBYT1VeRpYTWbtkcEA5ii6UPixM88gEVEregX3mrfFUfmH8iArcCmYkuFVE9AigmyrYAEe",
  "key25": "4AKSXJDrNUHnyMbzTk3EsnnFSeyGak4WkdJ1QParugKsZHiVi4WseN8iFsVTFwdx8KnaZ9ccwcbjDWPAxCjWFBsa",
  "key26": "5oDKATBPVRMUVT4Nw8KFj23cKPnLBF6xVkBCSp7AC5HeRb1ZDXuT12ZoYMTYo7pgDiU87rmReCmMG84f2gQfSvRu",
  "key27": "R2WHwmGb58JHnkhpz4RPivA6oMCwnsGMN84usDemkACZmw4tWcNpezmhqHTBEaV2LtHZqxTCUPb2CoKxVjDFFZQ",
  "key28": "4b79rxVygH6X9CUpaosqMJN9NT3HXqUEqFKHtv7bPLY7zdDBDqaByT8DAomm4yRdeToWBzyz7WQ7oa8ScVtuZsCP",
  "key29": "PAnvLtY5xjZmtf4CiSwDmgb3eF5Szf8gwdbVdbgRbjfVhz7uiUWasC7HJLyuECNw98FH4tFN42oBXjuXwgn3cUR",
  "key30": "geNLdeHxoj1gX5xBHn24xeKfLPqt4kTjpC9FbDNjjR4ooTxDWWSdMo3SoKvn6KKJ4nQ6J32d4w631Tpswii7JN7"
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
