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
    "4aKdL6k8fxkEg2NJC5yUKRegMH1w7S11YTBmXCwgmsCnKWGUdGpkqYRkGL4K5oKTetpYZLB8MzCazCa49E5kfGM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gwVLKPNQ7tRdM8ZswWU8DN8rwS4hbR3sP4TsBNKKC78YdHWaiKSueuW9ns7rVMf5BqrgXPnGhWkTZA1gvJ1zoQu",
  "key1": "4Es9vPTpHLX71UZh9ZnGJyuWzZ6cJuKLvQc7iMG1sCUaWCFSp9ji1iyeeoyeSctTqo1aMa6aUqpUBvRWRy7BPhJf",
  "key2": "4oav4HynKAomrpTufq8U93xcLXv5wK8kue9JrYwQyY2VZPAozCCJ5V7t2K8RgYp6nm4zN4rvYvdnofyv3Q6af9op",
  "key3": "2E4q65wLH2bEh5c8h5FdEbEQnUY9KKEsTjN48KT84ELMQAgJ5kmvciybNY2kGNHrqtzWtbuw9WCY9oGhHJxgdHUD",
  "key4": "48AZfJe3pUH9DDJ5DQEsuhL5CcsRasQ6tEesbEebbjHVFtgkFjKJGyUkQPXUAcpaQsTfe2phDjzgacjdMb6BPhov",
  "key5": "3jeTVF7Hf1xEkDUmN7De4tZQncBcA3vpWoV2ukAN4Zfu5hvmCJMPRCh3Y8SbK1gdUyoS2CgZX6Q6ogJRboYZShan",
  "key6": "3gTxTo5wXPNEWm9GEksXfRM4FbEgfMVYUPGDba9vFmz1hwNp239kD9JsuWaMRPRLC4ANbriKv3GYb8GdzKgasW5C",
  "key7": "JCtNZZrpQJrAT28PBj6rHjqSfh2PXH6pCM38g1D15EfR2w2iAofwEoPNtVhPidSkPp1TH8HFjTvDxmffK8MWyFU",
  "key8": "XSspXsJLzhquww89E2aeSSp6C9cLRn3biE3FmYxnVQv1BrEwUuTs54wtbXcVZksewQcU1SoQDj7xU96syWbwgQA",
  "key9": "3MxvPEbXCnypLSCZkVFNTMCiRdJ4sedfd3Rx5fQr6YB6QGKGFDJZmgY2V5ymxQ43cCJFqmtwzV5oTEFzbnMJ9L1K",
  "key10": "V5mUA6cToYL9sJnEqUARuUtNjdzSu1eggec4Y5APkBd39Tef3ygMRm2i2eyUCE78M4fXpuDMq95oGTv7UvSQjKc",
  "key11": "ShC9b4c7cZvXGGdiG1G1abYGmk2a2ZoG457SAcna7N2hCQNJKMtLuCgwYwh1FqouW1SzuAAT5KVk6BmJgPvn8Sq",
  "key12": "4oD1ZN8TNTKyf2XCVf7P9TkBcwYXeE7d42sckeRWTHVu6dyc1TF4kk3msq8qdyae6DetTq3zVu7xzG15ootrwBJ4",
  "key13": "43PGd6BU8Jj5kiGGcksfF6Y5mkrDdMakBNuHYdfPQDjUJuwX3h55Q9FbyG9qMLsQ1hsbh9HdCA67tJMi8WM9WpE4",
  "key14": "2Loth9mSfpsBeyp2hQaVb8UuyA7gKt5Q2uCw7QTqbmLsUQL1RUZRXftTL5viRCFM1tKBpYygS3DscyVofcxqaLuy",
  "key15": "5DH2CucjDwkL5fa6LXQchSNM7EsEEhfviaJe6zzyRiufwpcwe3eABcQENEhLNNELWTpjxcGJxsidksp6LVpaBZH",
  "key16": "298ANJS5fmScnwjFo47Nab3SAFxpTgVkj9deaBkopSr5Soxc3SqgTnzEH7fGo3TBTZDynPLfhtzM3SagwDooweaR",
  "key17": "2FkVrspgy1gB4pb5Sva7WY2Pa8AA3TVELDeGNKmh5WaxLcGwbSQh9qcJXkYHAfvVEbHpwXJDdSabLYGuhmXsLaym",
  "key18": "38b9xuqxm2Yvm4vrV3kivExEsxfzWBmERSTc6pgmyBNStxj9UzjcrTYibRVkCp57RsikGCf7JDuo1FbHatKsCCSu",
  "key19": "Hv62bLCc3J9WqQ2BtmifEn3fPB25z8JfPstdCfs5RpMxzmpJxpNhmDLh64BaZRZFWfkv3ZY1WPSHsi4i47WPE73",
  "key20": "qjkgmNSfBctrFka84ZeeoS8DfcGCyLYuadHTZyjrvVF3kLz3radrEkJSQn4mXtWr1xNeSM5SwP9qBxHEDLHVLua",
  "key21": "2JgGV15kP94pCZP5DZxiDDdB33a4zWSRtWy8tbT5u1a9GexhfVaTwdd8ZyLLXc4qBmTk9ycrZEVzSdf62qeXDaWk",
  "key22": "3zCU6V3VrR9GVR52853r18eDpifCFy5FgJHxMwNPLzoHcCrE8Mcry5MW4sj5tavCmzQCZj78CrahN5Fi6JAjk3M3",
  "key23": "5B1aCEWERc1MC5gvJVBk2wy2Dn5nCKUKxP43mmiFpBvLYrjKMSXQVqWNgzBcLfoqoGmG52Dj2U3szvLE6CQKZV26",
  "key24": "3yGFe1qcYCyuittxCNz3Qk3QoPM5FVdJYUcvijzVjeg78GyGMxHfHmaQFDLHX4Pj4hR1kRAcjFEpiPPovxmBmodH",
  "key25": "5caYgyopd93vBc9Zha6uHbc6CpAdoaupAVcktdbL3bWDCHHYENEHbiHZyYBJZx4fYPP6UmtDuStgj928BdSuU2wn",
  "key26": "4mEGKiDdPBvCek2eorzmzpaejTF4EE4GCA8XD7XnnohoFkxoVLYV2AKJ2ZeSjMYEDhcNQPuST1Lf5Mx2pwLjm8E8",
  "key27": "4JzFtvdf9nhgPezFaAob22F1TYVbwvVXcgzLpj1wxciuEn8ukv6gsXoXz8qBTM4fFP6ZFrtGpe8GgetFQgyqUsw2",
  "key28": "2rtChfaR3fh6sd4Zgp7m8e9FUSuP88sDSZnhjTFrsd9m48yVaVDB6CvpArbokBsFXCmxFZTigpt3LnZYTqt2jc1n",
  "key29": "5iGxmkzzLGN9aQW4MogUGsyManohTVbtpjaXs4tz6BVD5Q5GKaoQF5a7mp6Yp9VVqDTBqUMtEx9nabJhupxP1edy",
  "key30": "pnQxoH7MJ9jWWUiHa7yjUqbuRmKVuusMdSDr3sLrjAHF8JXpHNCTLwbZMjYJmu68bhpYSv75a4pKAMfE9esMvUM",
  "key31": "2zCyqptySu3mETe9gHokdBwVFt9hn6z89wNhL2WA2xTHehqK851MJr28MxRaSEgtTtXiShgn5aHvrHYfirhkLkxE",
  "key32": "3DqdNtkPJyvjAtYCRECoDZuF5wxh2ER3AKXfFeYDTKnupPkMAphmURUR8aXUubjTLQa15h8wZ5JuyWsexWBM5hmk",
  "key33": "6GA5JKsGFfjHRMUQVLJCvRCAmcUhPcZhLbcBsP5FJKmcnfENS12cuC4zkAUYtJBCko8AiVucNQAJNZ6PfMCM4pM",
  "key34": "5AMUuuFdyDeXMNFzdSCmLpxgi4qk7EMy9jBV1rgS2Q3SswRir3fVAYgGnWdQrZU1EKMKo8cttsd6KrxSdLr3torK",
  "key35": "5nUcvXvkfm9cx65q8Zoxzxq2jhRj6VpZPJSw4P1TgD2hchvC1oTfDHAMcRRM4DW9yWgYmtApyybbeQTDbuVDJXT4",
  "key36": "2MACnD6NRqPDM4DYHupgkJQp1gykQos1zYfZk5wQUCJNicFudBxWURA1UxZ8LaAcuGNHe4W4nBBKa2VDDsACxQRo",
  "key37": "4NgnUvso821HrT1162YQFTr9384EPWHXtLPFvfR4PypA8yCbCJbvTgbesBdJDXyuMzDqg41MBXzs1ybXKVT2EWFF",
  "key38": "5u2yVzprqLsvXbrERgN4JP3WLndiqvKZkavZRCP4P43iSXaPPBWukP34Kf2MWqtGtbCQ2uAEed8kmyBg7ChdTMZ3",
  "key39": "4Z4efQd5JJC5yxjLkZobPHH5dHk6djuVLHeJa4g13PwewQjV75o6myahMmmSQJmiRKvH67bWFWXfRCRuTgpGbB3P",
  "key40": "hX35bMSzSrYw8Qxfa6nXNhQaYP7VmHxkPh6nYmFo25uYvXNv3xrP3bS8v4w7mwu8QTWS8PtqHFWZLoY7vVeeorw",
  "key41": "3Uj4iqCxfzBBw5M7PMon1JtyMVPGegLJXfdEtKyXCGMQVz1YnWWupJ15HoCRJwi7Zev82JXr3pgyGGeiTPtFSdD6",
  "key42": "5T8tEtLJjN8e6vu5UGSfuka7d8UWGYHBPBMDKvC9VyKhc21Ru2sjqXnvoNdKSBchaebyZxzDvvdxSXVMpHHjbYmi",
  "key43": "4DJgoJZt5ZZzZo7Uo7AKpgxCncixcfU3Q8igiSc8cREbGsGZtnbGHRhuUAfBB2CsK8KJBoPEf4RSKkDWSSFgjFju",
  "key44": "4uLtEJNNxqNQPT6R32Tze3RowEJF5DyYMeEKk5whriJUEF3JgocouuSbPy7Pso4b64NT635JfoNqrfZJcFoTt4ns",
  "key45": "4F5ydTSHJazHnr1xRpmzbiyUuFyMXkqH3jcp93hz5VzjGNeq6BQWN5mwjeum2HYoj8xSH9GCqicJcTePSBD1z7so",
  "key46": "3E4PdGgYxKjiJm8uiAj3DbdygdCgKwXe4sDKVSGtE66cqvEnKRNKE37zNGpyaERPQZufGWoCjFssXTZTJZDxfXXU"
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
