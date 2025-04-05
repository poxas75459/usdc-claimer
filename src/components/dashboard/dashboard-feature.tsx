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
    "5d8fVgg8r8tp1DvwRiymF44HYrEX9zGzperckQvgMruRb17r8rmgktJiqYjEKzoQnyuzcHpf6NyW9Yv65UPPLg1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Jt93KDyG61HjG5q3678u26SCEL3GpKJJDUbofZXvLbAAdoevTRiSJLkhcSaNfXyG2VYsDYHZBubMSXAxLUcUs3",
  "key1": "2o7ixyV8Kg7B1zE9XJvZ5gsqdAMX2F9qZp8Bh1daCxNQWTs1dkYtxLqYHezaZuikYgGvv9q82yMZGxJkcfYUQQwu",
  "key2": "5qWSPPhjf8m5iZ3mXgaYHs8LPLRcz3QMc9kfKbGMvGtzyWsD86L1LcxCo2EAzm79bYBTx59QWe5qd9qvKweCMV8F",
  "key3": "2RvP2vfx2Ta7dvE5zHAPC8uBKzoDQFFg47r8DXNeShM5wdtUe1QmMG1mKoEd4hLouu4d1LSkryEvGHFdWu9yotcz",
  "key4": "5NHScFsD159rioR6NNppNATRkJcziftFG112EhXv9u73t9C5kEzV3jvc7Sb8e8tBxijUnLUpb1dA21EAVRsYpspc",
  "key5": "4ZpGq1coL45iKKAhidNHruF37uQ4g2ovg78KCUD444Fbn34dUnwz4DuapNdLchv85AoEhNtnvXZ3N3zAVYTKFWN9",
  "key6": "5SC8XujsB4PbJq7MKPsPR9iJuFqCjJoY5uhbrh95UGgeWHzTieAeiejwGUz9aWLhAQBBkeGNta9VZzaTduA7NmhZ",
  "key7": "3Ejb8NzvjXw7o77fnRqNvydBKH8SsSZhQjyoCL4MD7hkb46pogP4VbwsvKrZVT8DaAdRNVqHFMLFE1jHafXo12Qf",
  "key8": "5hkBRPsRx8YiYxce8NjDY9jMAsuccxJqk4dg8XWGcgUUtYqkypYpj6bmrrFXxBzfNDyPYrPwBrjhkRaPS1WkzWhz",
  "key9": "9ab1fTuQ3oGVkHU1xZ55HWqVZqVwSGcwyfiPbwdohe5qvySk1N4jmnmuqeiHgugRxgxwwfXRwuZr2YUAEbKVtda",
  "key10": "4P198BXyhVb37nLPVEdExvQMonooHM76uYZuvY3QwZT1FdmtW5J7ku45ZDxqPuzv4sEcZ3wZNi2K3sZw6zpPu9Jv",
  "key11": "4tNiPGRz9r1t5RRXzbNoKQRWMZ5bPQQSTFRZHKiogDFaiQ3y3vxts783nYAdtdGbqmZx9w86EEVxVzuBgjtA1HN2",
  "key12": "5oRyjJLhPLhP71Mf889y8F3ff2z5A7pzev5Cmkt3WX3hucZL7t52nG3oCZTTz6KfCLUCyjAYFd9yoTopXEjK3PVU",
  "key13": "smCwoKVXXPccizezDH1B6ZBqApjzUf3fGYkQsT2a9eFHRLjWzgz4pNdNsuNXLUK2RhEB9KL399kNEH6RQiJWpZk",
  "key14": "5Szxmp5L6PQpxUqG4ybfzyJqz3yMjbZaQmMpz4wfgjqR4cP2cCc5SQt9pszgZg8fVSDbFUx7AhPVb6vQpGy7y8eK",
  "key15": "22eq7FrDCGk9ofhYGY145x2LoNeANv29USHm3o6zd4dwPje24XNCuSbqtHKwVBEZP6UW6nL6RSKvrTKD5QALftUL",
  "key16": "KzVGwrovPEWkfA67RV7Q1QkLpCd4FcZYvzFY3GJrmGAnrcGJCMQzmZR5bHQKtj3ZytLk9hi5Qy6Q2YAF3mXJ18K",
  "key17": "RdskeWVKPL91xxZQ1duqJoN9hUTRNWG3uPgxpWyscma7NuVPrSytFkVcoHvnGn1xqY6W7hYgaQ8fE4icFh14YkB",
  "key18": "28EPrj3G2zVm6jMkjKZVru8xBnToCaYZjtXCvhB4x15h8nXoDGnmxLnW5oD3zRhPCGi8Z1VQD6fC5mpuwtaxWmtB",
  "key19": "Li9ZYMUT8V3tEXLh6rN4Ci7KpmjjsCKWritS6vTcDV9psJGecKUsZGn4CsEshdmRaBFh3HLH2369V9zPQxELoPN",
  "key20": "2idKYQs3JZL2UuZ4mi5dobwaMk2LkhTDVUZjaKKdWq6G9pTg7TcRLnuuFZ431JrBuBcJYroJQf4N8zHqXuunzJdp",
  "key21": "3zUwGZgfYuxELVAXmwEy2Q32K5AZoU6BAWCppJdtrLeA8tyTQVZdPChfpQF1JJSTg2W3qXmFarp2JiGJHUd77aQW",
  "key22": "363g84CQQ3mcnfYKWZYj6Wy2ZoLaG5uVPPfAQkLCoewUC3zu3MMNh8nHyYWuZzwuXjRHoaNUvZDG2vdZKk4z5d9u",
  "key23": "4h5UfQgTFYTpgwxpWj8biWDg38AVPSY7WVZ2QPcBU65GshgU1xP3JQUfV49fb9kQ8SA1pG6Tfm1xypMZEipmZt18",
  "key24": "3mxqVa64uoGqF7kinuGUjg3QqiReQhTG57g3idDgmjEAz6hVSd3Z4TnmQQGSpnDYWDmwgmAqmuKFW4QyVqBqGSGL"
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
