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
    "2whkUnwARtWeWm7nts851edAtuAWDBxKEGJEcHmHCckq7eNFfKUByeXj9gT3idGqAsvdc2zk3hqM2gV5zETJHoL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i28buuZoiaj7e18TfxBJmK2VFV2efcuYQKsZuxH3JUkKMkXuNEUn3DwrkvtsSaWpW4vAf6XpyaeB2WTPYiKV5i",
  "key1": "5F9HYX8RRTU87axTjwoXaK84QUUAM4qL8WPXSY24txqH1PMxWgDqTFEcc7RxhReQAQmMjfEYQ3xG3cQ476BjBWzo",
  "key2": "3pr5FtTzAirRLHCaGufZKtbFTmLaN8kbfeZYj2cNvxAKXvNr4v7uvbvUbJJoqxBdWwDVoN1Z4oTuThzTus3eMEZm",
  "key3": "5XwBgLx84bnJwkghe76BoeyxEpo3iVscWKcAyfo59J3GjTFBTJABieppM39aZZwdcKDo3f83mkTf7EKn6gwgVmNi",
  "key4": "4i6omvBLhMUHvBXM9RCbeP647FDZzKCuzJUwmHVZ35ySbMLq3i1enbxKsGRTXSipYcu6jLoofyjCibZ8kGFuY3P1",
  "key5": "gu37GN5N9dgAgwGh492TBiSybexC3bVFGuJrUcVj1wP79TBQFhwNoRSAntpZjsFHDFVmL5LKSCbrdjjhgQovwtE",
  "key6": "4vaDRXJ3aSdrFZntxmVDmyawzfDFAQhimqDY1K7yKsBFdKWtZgiDckjdQTNJMgZQZ5kAarayQs6z8LkiQV8J9itn",
  "key7": "2wb231xmzp9o4CxrA8VVNJMTTyufNkNPagbPwKSRmU9gUJkLbhMvcXFGPzhVSxbBSfWYnqDwV31oA4cqLwJf7R3k",
  "key8": "3PsWDzHKzBxMU57JRPLGek9umJVNh5U3JRkJciPgQErjmT7HcxPx8hwM8NZ2kJrrGCh355M8ssuSdQHjFrgRjD7g",
  "key9": "3DmjVe6eW7ScsFjRNFaMAytyCLp1gyMSy3m7JBqgaGPYqoEtWaJrjqMEU2LDJLSQ9SfYa5spNvQoSWAHkU2pAMQN",
  "key10": "29EGVXCD2kHrYdBnN3bt7V5Hx32U9ywF7HHSHjbn121Fy4n5V5j7Jb4CnFJUoPebuRq37Zuiz3ygiGnwQnBsPpVJ",
  "key11": "EsrVhurmtosYmeSScqAs2gLhDmvxScfbbGHkChZmMbVbH3Bx2QBkLBii4evtUetUpjx1fUVVwPNiZmFvsVQdDPG",
  "key12": "2kgwYx44iNeYXcDgJCeFCRX2qvujrT7H8LuE2knsnMsjmRMpUiYrRRNHjZY9WKbxAb36wECfGpSPz7fBU8nToD89",
  "key13": "37q32HGM53dUUYxgrCCQxqsH8CTkhNnHB55FRnYnNxe6NpLtNQbyhN9sBHbYwe9pGGqKWPiK8Syts8K5diupyTw",
  "key14": "g1Vg6ZXeWKZU77PyhHWWKxiZ995FN9jcPGjJ6Pjx2MZ7tUqHbWC2HLJ8SsH6tfTd5fJYc4jYdKZ31xcQ8k9FyiR",
  "key15": "5xCZR6nQ3Tpg1g7LfBijHXKBfgP3F8iBZWZm6vkiD6f7BDqNWWk9XsRmFGaDRE416bAMoGqtNEu2ZzKiVCmVg7RS",
  "key16": "2ovnMmFL2tL8hfX7svMfXt3gAQYVk8X7LXTg4QYDkjzETgK2Mc2VK9ujBzBQfuR8W38wnTaRnyGxB7PABjVkRh2S",
  "key17": "4fmJduHGwtMQh9HMbahexeNx1aL9jjhmKu7meyKU72BovS67RRTZpzPNd5LpvqnEFkHKDJmZLtwUhEikmWgPsKrW",
  "key18": "2V953uPHiwqynFraTuHaMi3i8RMoRz2HT3dKPqSqs9ZKDv3fHcF87qGdweeAd1rTQY3y7C41z1N3n52i4eVZNMi5",
  "key19": "3zTZZvKnHw6dumdhYJvsz222WEpkjqzqRc5nG1FNmppyHLMAZQ33va9mqxC3FeSWTs4DyEkmdrM6MucqYJMGpJcY",
  "key20": "2unws2hzwpuZMSvXNqu78sdGn5XFdXqghe9YWf1ZpjkgWHkidF9B8Y9XbajL5fYLDWegBz1rWJN5oWvMBZBe3pdj",
  "key21": "Q7nTg1vpJjbhga9U6YbNaToUHpRyFQbRtyCGiWWqvRQkoKN8xJH59vtUQWw1L4e3HpfBGy3Vx1dwuj7GGGxLXUS",
  "key22": "22WhQUQDgNhkk5URXRfnXqKSdYi9aUQZ2gDNPHsuUgr2uBFU3qYDPRKRwPYeMeiX7W5CceNXWDSv8ZnC9sjXqX4b",
  "key23": "4psjUKN5eXpYKhYa2bWyhykuTKcZtt4MxRyge2YxwBkcLKqrzM5fXFKUs6YQZjXNfGFyKaTn8ntnAaFNo937aMQL",
  "key24": "4V99gvsBXn3Q7Ja8Do6Nh5p3y29JXpJNX2Zcq3496v8phM8DmK5atYptsKgU1EQZ3GKyLWmJ37szn6ueVkUs3KvN",
  "key25": "2bmec1sJK8yEmEnaErZBx7uXT78Shtvw1ByknF17ys3Nd5oEhsWx5duZjXmt4Zv9Zi5m6gmvCNAFwVkEzm6EvqZt",
  "key26": "mForcQDLaHgDtq9wbyiTFSW9fReVkcF4vwN696yzednrmAjrnNqtgiyQ9VYuCB8oJ1qcX46iPcJYtQ6CJxryoRH",
  "key27": "5PuL9q3XcHCxyGGAbHJho6EH7wAVGLmtm8nYxW9AcB1uB2rMFbTW4PdanC4A6CEmYXWqik8gqMFLzTQvjwAJyKFL",
  "key28": "3MSZMDVE5zbbtbxpSXGb5tvCcjM3FNmLnkdX6kyhfiAWzVfEFWqg9Z5ZuSYSWWfLsVVq9yXTmyvGRRGpaQZ8aQBM",
  "key29": "4ng2j5cK2cshKtbmEJvkAQmsf4wVZbYGec6ZfhrkaNGbEzCL2D3CsEczgEYqahm6x9Zu8ky7QGiJJCvQGstgpBSo",
  "key30": "3Nn3MzLzyquoYGr3485advWUizNvUqQJPgrESVYuaAqnnz3Z3jGnoixUL3HCpVDmp1AedBKNhkMvUD5qtAmYhrz2",
  "key31": "5ZkGz3Wbi9fLCFQxx8Tb9QY5mNDCgXVEtU5deFvVuegZsfRCUmWL5tdwPgz5pUM74Gz7zcmb2XjxzECZPm1c2jWj",
  "key32": "2dqRUZBdiAtjFZPCkbSDBK9qH6aHApfkA8iQ5ynWELsNgHuSywM4qh6PJm36bf7Btqq7yCNjn7Q8PcUrRACHuKry",
  "key33": "4yGMJ5hQg7xAZ1JvJYfmCTDj15kRVT1nYL2MBthvQkTKiBso9z1DkZBeyZbmesiqJksaYndEo8GzBvvXETgUy1tD",
  "key34": "27Pws2t1Pj1sqpAaWMz8W5VHoW8uk37CsKVJqFkj2FaZzcZHfLxWqWgAoHWMCNKduwFN1d2uusYKmVY2vVEBABqX",
  "key35": "5xTfDsDxr53dnBhirJbhtbMzuisZ6rb2RAdHy8SeNwzMiQQVSirkb9ZPquycfpUaEjE6LzRx6fxTKHKWKm6s1nvC",
  "key36": "2eqdEmr2vsiszk9HvEoa4deWeAcHk2B6otyBt9KbDivpofkY5rS2AdnYdPecDUTqYNZ8ijJVPUrLP29vXWBjNiu8",
  "key37": "4pmo2LnnmK3kbhqXVwYTFqb9H3A1EqxUDp4xKRn8nu8MkmgaqLQWyACHsZA7xHYXY1JQzZfrL9mqSAjr932Ac14d",
  "key38": "55hTeuEAjpavT593UNnFRqM7MKQHqTdctm24tF8BTiC66FxF5Wwj1bEWm9eVnqkKKQaJcF8pHKNwGPb6w72oruPg",
  "key39": "65PpoyEfPj4WAo8B6WovpoQXcnLhpKdE2HfhzL56HCFwEJAqtHTbD3JH2qDnJXpsLpy26Wud2u9ZuRXgXrxf2YD2",
  "key40": "5WigPmT1XrXMGt6JYcE9qFKBrwsismkH991zYKZGV42S2XUTcahD2Tk1KUr2HDiPkZZjPTPuNEqWpibhyWSSvnam",
  "key41": "2MM7JBzLNBzxoRmf2V6RmmUQvy9sSPahR5dzWFew8UfYDTTXsj7ZyFiKi53EHQzUF1RXsDGovYMAey23UFZr86Rg"
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
