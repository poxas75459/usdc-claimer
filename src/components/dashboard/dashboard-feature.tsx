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
    "59MqHpsHXTyjWawVU4hEcxXocGg1iPWN8cvnr4b8EW2QHpEeczqhcQvwrfCjMPJwedZsh6HQQ7hWeUYCeE3rBi3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ZHtAjCPJQ5dyKykQGBh18wKqRZEfZ9EHdrbFEWWUgXsHmZtnZemZbdakcd6qeLvWVFTXRESfNt2C38h5FNA3B4",
  "key1": "4xn4kq4JQgKx4kUNXhuAA7LGKqcShs4CG6CSyEh1GVifuxeyRt6P3Jcke6Da266RKP8kyzTkRtjrUfSnDDxr6F27",
  "key2": "4QPgP39FZjxq761BDEYSsFGcde2RWsKqFjeaM3ZFEfuJBPgXEN4an1sm1b5JptcRz2oaLoUS8YJ8EfuFBiWHWN65",
  "key3": "3zwEQNcspchYLAXx95bXtZNqZEtG8bj4NHvjDAHo5znwpwzGozLTNPiktyqwkumiBsjWpxM4fu5gyxAnAY8x3WLk",
  "key4": "56q6ZoWiuZQg7A3o7J7ewiW6YM5uFAGf2tRRuru5gTc39ng347ZVnZvvDGjWbYRBNAKbcUuNMVWSFxE6c4K1MFU1",
  "key5": "3A12QtTJAnGZT9sMcbX4Bsy6DkJBcMF4D1reHBJDASSjdtEvNuJFZRb4YkUQnhGFhMaFPZ5F2QT2ES6jJm57JdvY",
  "key6": "27VohbEFNXWQ9BQDAefU1bome2yjAYsXUh2qbKkuPjBCrRf7ZkYYyQBhfj2phxjbVuNxxwHiH4XTzv58jbWVbDys",
  "key7": "agwAi7jCyTYt2dhTpdGrNJ5xQBHjaSX9MamM7HXdkvjPSem8Vm4h6MuCixGcXo4y3DVXwxN1X5J4HEvYFxR6kjD",
  "key8": "5CLrET8DX5omp8bPu3ASmnn1RSMEN4XFLVAJna6iSpKHqwpDzHFq7dAu4YBcp5VToeXH53B1WYHPc1AuEqFjVMRe",
  "key9": "vTnjXLh1xfXVVKTJpou654i1iuHa4KDsT79a4AVsMGPSUZsnYoymowcWBLrAV3KMSDmPeGvMBFMd4AzuHgmUA4S",
  "key10": "369xxKrZjVUtHnMKfebx1qLyGbFVH4eNP6VexYDeCAmtq4pXUj9JjA6WpskHZC2oTpyFkv2xVDqYd6v3b1Xzh3F6",
  "key11": "5LcsSCz4vNiKD8uMyRfCNaPkg4yKkSjEefo8s69V3y5w6u5dFn97WR7dRgcd5ERALmwRLXsMGdd9QVAjktF9DPxH",
  "key12": "GkpBz4SEfWMRrRqwqyHbfJdXBw6NmcxkbwceNmsnfKRAW1LS3KU6DpHZHKX7TdHZM66GaMtWzPJCA7VPEWaSeci",
  "key13": "5b1cS48F9qtMu1QAtbRnuWRVSHhd9tkkio4QHmNi5ipcwYDFXx1ur9GLWTkSiz6jPrwC3Peis7oRczuR6nAYktv7",
  "key14": "59bSgrsCxW15RgDiM3BdFXgkuo4prtdGp9w7jQFSKYnyvGSS4jJcUgqkRkrNE5ApyhEKQjdFKHibUDunoeXtYMF6",
  "key15": "iA7uhSbY2SJg8ZV7skBRapR75XmHVHgYCSM6jtMqmwPpr2caQZYDntxcF1hzvb2mgQuSGEBiWRzd7TCFWFHG9vh",
  "key16": "wRf9FAE8ygPba7YwQc34daTWQnTeWAiErG4UpFyxja1KTtLCiTQp5b2CGELYQN9gDQWVcGnNGCcJxiuD5ujSUcn",
  "key17": "vCx5BJTB4TfJjm6qc1ozKrfiTnwRHGbXzKHgTQAm6WANfTnidj7uX6F8c61zfzfszLkXNbSVzeEgjZBTbQgXT4B",
  "key18": "4hY8sAz8NGyVVNVNdMoUqAPhTeSxPPDSXsLi9ENx2yM4fFFpSTEirsmzY99HyViCZNK3UPTuTPYf5ygyeSNiu4sw",
  "key19": "4HLzAK61hvo9YhYWuF7URvMzQi3ZSq6hAqcnNP2dSSmFTrPbdqjnppdCFotEsKQ8xbx5QxySGvYB39KEqnSmsGJc",
  "key20": "wvpceeAP4SaC8TK5PpEpVXZQbUfPtSqFEZQLju9i7M98bt2joZg4SUuMiwwX8ts5oNeuwKNrqMZUj1AQreGTfWF",
  "key21": "4Px7KFQVQsUm51P81MWGxaMrpDKcfCdXtbdGErZ8goFpQLA2LaVT4uvuxxoqu1bY3AzkoQwFjGBzpRZNALk3taBm",
  "key22": "2Cta4dnJ8MXHuJ3jMYKMqoTPGot9uSTkYAECLnh7BaNUySGHKdvo3et79rFzja8Z6Haja6WaXNvV5HUHykibdq81",
  "key23": "3QvC5Fzru3aLFjyDtWd5K2oHYWFSS1gAEoDqTx61HK9tJLTMJsaMfJnnCDtgdJd4yzdJqb4LTx9PbndWhLFUdLP",
  "key24": "V4xEfpSuYSdwVWp2tKe7JoJ8cJPQkKDtEhJYYk3ha1S9n8n3oA6NS5ZpeR1uPjiqGnJSTbdPWZ3JaUDELVEKP41",
  "key25": "529qvzUB8KaFok5jBPUDdsR88pUSiTRE7kUtVZbUeDJCf4vE9Ym2iLb41MzjG88aAwzANVZTFtmsQGFuwFk359pE",
  "key26": "3MeHQjtpcTK6b2Sy3jGJSA8QXHG6osQxZAv7A9AWc1x9NPKXcsQ1XpcZ1FurFXQRK3bxCKSnXYKyKLSsoRw1Pi1A",
  "key27": "2PNZ2ic2UYLe6ZA2Qd4Cq5KBXrqcwNP7kzYNfWadkJfUz83XKuLBoMcgaT9f4zBTSqB2r159DmpNo6djRvbZnrTM",
  "key28": "4LKRd5JgPw6dbMTzc22G7YrvzW4TXE1Vs1pXHduQySJaaHx2QrWMDMm67MqmHH4dBoCN9zHtGe2ckV9mNwRRPYuw",
  "key29": "4czMQUGtgp2KPvZc8XUMBw8Zk4xfgJ2icB3XBMmqG4tMj2zRzqMH6YGbQgStgrfeJsEM8hnxVHLuYqLWXLpiyvXZ",
  "key30": "4wvnQ3RBA43tcYGyii8cykC7mZpWZA5kaXV6DtseByijJn6y9nHGJgiBK84k56ydVGroekksVX6AsHgcaDPjpNFE",
  "key31": "3oSZ76Rz56yfw24TLFnFsS1Fk4Z6g54tRp7Z6iEH1yLzH1NL6h2cx4ey7WAQF7KHajCUAs91BNXUppvTmuVQ1wuF",
  "key32": "5DkJpq6A6uy9XfbV3wj9DVL5NubdqHaYXxfa3EBAyACmEJT3gP65YmbCRF2ELL1UPf2NifCx3bTfBPSR8aTThYaW",
  "key33": "2D2GDccDmX1AJFemhHCvprNusAht9FCdYCCvcA8ZNKQtcuGG555cdVp4ymrLMJMrWwtetJbNFbyHJ6sHWsvfapkm",
  "key34": "39YVUH8eYQuoe3PjJZ21zPWY1deMMvAAHRJb2zvTbHSK21zdJ58Ez8KM35Snj8WsGeLuKXHenkbhG1YHoxjgQkBj"
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
