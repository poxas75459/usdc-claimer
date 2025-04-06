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
    "5MYTbs5eZopCk2zjeU58BCBGUtRhUV7KGWiZRWLhPZWUrXKNupmeCrLLAmc9hoJh9Bf9TzAmJJUQajqpZZYzaESj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CsicVwR7MmKsHWk7RAu5mJPhNNtN5XoaEacFtDtHADTcpUJ7PsWVdzEQ2b8JuecuF1bcPw5JX8rZrD3DEniZynt",
  "key1": "4ewBHo9mwqw9h76n7y6QSw7awBeJ5wXRzMQ5zMEqnERtJw6CtZwbctGLUjWE1ERoVD9pXxCLxk1axaM7FnMUJjf5",
  "key2": "z5cUtQUhx1fcDB8GPExRrv6AWw3bZvxQLnLY44LKSMfLrY97S91h3L9j1cLx2eQFjgEjvk8tFERGS32KkUGsFvK",
  "key3": "4KuNqxUzYV1Gd8JutM8gy7h2Ksy52gCuG67gLMikSeMzL2xWC45GXDD9tB9UnN9SMFGWLGhXGiWbv2mBFUQHqbfc",
  "key4": "2hMeEQh1uQGMqYxJL3Vs2A7rDXMxu1K7BdmbFFdfLrePnnUGbNdtucR3uGiLjkujLzqCtkFdEewA7yQpnjHZUC11",
  "key5": "rYXmsy5GMvrH4NzNNwZ2RLh9X1cMrNXDk4zWHAkR166hXTJaTHokdzAqs8FhxMhsFyLYKmCaN95Yeu6jyd7uNqy",
  "key6": "2ctdNawutSCWvmqwKGzU5Twf1paaYUEAVyWirGPAxN3gkeVCrSMGp8uP8Sj2EcPtQ2q4k553Y8sA9YCKQRhEpsYY",
  "key7": "5qfj822dTRYmJsdYWJMWmKnJqKKUaRggcudVKy8iPisgPomZ7YBpkYtCn7pPNQhJG41VdsBGAbqyh63aY3B6fgjE",
  "key8": "4iyGsWyM7MRMqocTDAvXRREJP1xEWUqxSpjZTw9HVArFYCB1EW4LeyxrbGafvE7Hh7ztCi2yQKfa7EJyJVJQwvuo",
  "key9": "5gzsZWHmhTFY4fY6qi1KXg6SKdfU2TJTQSt6ZJeepy9aBetyB9qmA6bVmkyzE4kWSc5wYkmcx9fUUhKLxLPFjMKU",
  "key10": "2oC3YThbaFZg8LeFAwjpmnfgCU2wUeaLsRZtTDjsLayyAhdwdo9qEQ1YRENniP3DBfVvQFk8ujmkw26nTvdt7aDE",
  "key11": "533jfnMjKhphkZUngxtacRtfAvFDsqQmi9QxbZgaeXtwYrFkszDuFck5Xf8kH3qKvyaFPLsZSbjGtgRAhaWzHwHt",
  "key12": "2VxHSbF6RvqXbaUt8Znq834nwcCi53wB4ynpZachmHcKuHm3YszsJSMVE4otZtdiZVMuWBeCeb2RXzNJt5FDh8Km",
  "key13": "3SabWTkbpJxmSD1jRLX3ypCH8zXc7mY1BGM4BMTMdzwNAXTNq3onnte4yhr25V1TLP8XWZnmAo3fryHubQRLJotV",
  "key14": "rrGZtq7sgZB4a2Dgywj8xPso6hXfiFZW2JGGWAgqFQf5pRmixDCRAZ6P8iKfpuQSfPFuiCZkGpWVz8uFbvN2XQF",
  "key15": "LBgQdqCQjcEx5TheE4mXEjJZrJWLhi1hhhdUwnGP1jV8Kj81YynZCeYJjrNLoSeHYCpbGwuJ4tTFPiJ17eRdKWB",
  "key16": "4X1NKn4TWNtLfVCdaQHE3p6PrGqshMQQyV2MoM3DsEL6a9dnSroEumjNipjeD5hqWm1NjPxMHsfcbaEfYt5cDqFy",
  "key17": "S4w32ZWXhcFpvYLqtAQhpt9kbGHkQk2g5quTeBSFz7QSUkQWLTBmzCxkEhPptATZ3B6M98L6NuWDinQvjcZoabm",
  "key18": "2vBYa15tDCFPzdam6U3ft2aBsayCTS8gGXUJSGC5pHThS62iNWFs2wmx1XuWjFJPM83CzMkNnP7JhKEP38rn43Lx",
  "key19": "4gfthPSEnri49pp4xUbiMQSofnHWo9EjBUVuuVm965o7tfzSnaEdYzDRXbr6g2Pz9i3UCB4fantJTzWNptEXGGbK",
  "key20": "22FTJzwLVgK2BsW6s9vw3mAk2w7EGA3x9hosy5JySbGGAftjWEDViUkwxBXRjvdZWRREZVQs6G47kenJCVXQ7FEb",
  "key21": "4NJWLXiLe9n8KPeZT5Ychv6u6E7tTMrbS2mJz1ZQk892FNMoQAHkvS9T16FuLeHNwLbN25BZ8k5HXmKdg7RX2kbZ",
  "key22": "UjLtHdybYBgPHPAWFc7Au2Gz6Pa7iawM8sXTxQdVbbvf2SezQVCxgzUr2fwCJ2HGNkaU4MUyVQzu6w5P97P8Akm",
  "key23": "3dpyBvZKfmz3p9xzLmooRwkLZStmnmqtbsWRAxwBS9LKT7yvdVgoPd2VjCRyrTRjzdkcWuTcB5U9G37wkmGrxLXH",
  "key24": "4LRNePUKogHaRs9GNj5zZqKqjgfcp3hmvUxdVEmgZAX6ngrwfPA8bwgPGk3xKmfMUbY3qweeR8f1i1H6XBYTibq1",
  "key25": "5uA5ZsvqBZmUZNgpNLARwmsZq2j4dMX2YbQSM3uAFN6TWuZfaNTPyVxit4uRKch9gZY4NxbRpMHWataf6rZEdwSs",
  "key26": "5aZk14HvtEhAyaZGHyRKMoocEiDZuJoniQ9xWgdyHp6BSyUsLkm9B43P8DFiNKrXqN7NzZQa49UQEqkcciQLhLP",
  "key27": "2v6g22w3mzNmFJ2SkNSEoc4KhDfNruQQwMkS8xBYQtn6dXBrokegHcS3aNRpBLTqtCZPTtyrJuBWZtJQ4D567naE"
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
