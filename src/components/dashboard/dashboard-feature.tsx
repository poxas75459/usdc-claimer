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
    "wkuRb8D23oQagQNFTsqXZQHAfosJjEVqt8A9xT4xitqAogGo636SHjePNXwjverditWZSTWmXwoNnnpkbhxHVWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uya593WJa2zKHKYP5i8AoDNUGaH76bPHTS6Uoze279KoyXtuY3NzpH9Nf3UgPfvkBLbQKRj56koEydRVAQ9MzQc",
  "key1": "4iKcddz5KUcPLnMbp7NRDMz2gGTgNVR5p4oefi7UUEA5Ew6p6YFQT7smRj2Va9b64xFT7fmtWfi4EUCKZnxgjow9",
  "key2": "5HYAJA24i9a6mH8u32KeJ8ZVCJYnJBsF3mtt8BBTLtTz8RsoR7ucqc43v3A3bi5bSFp3WhrA5XMMSkzXctg1srM8",
  "key3": "2ofkab2eXm7aUMggoyzU21BD27fjxo2V7jtL6b3x92wL2G4TV28Epw3zshzpHNVjdZJKTbSGzYhN9xD2q7DY6fJZ",
  "key4": "ZpMFqzR9t799wTXQ2PBLQi6jiunzibEbXXJqajYaKsyLsPtW1TeZrnt5ohJQcna1WHPafnXsaZe9FJCqBM1QD5v",
  "key5": "3AKu83Cyv3brygATvGjMV2aZL13Ghuxfzxawn9bYwAJLweiFZ3pjeoDqyvDgB7KAjQUGsh8UCCw556gqGrnhGRXK",
  "key6": "4rNACTZofFbyHJibhvey5UpJXoTVeRq8ASctJA6GeSQFHk224PLhcZTbDFEfEq58Bf6jF2euxqK91YE5JpAXw6LP",
  "key7": "56cemsmoGhSecQ8TAFveqjzZtrgff9LYHFMHxAysvNHFNSNfrq21LEgjryS2uZQb9kfE83DqcEhBbSYxBqJ2fGtV",
  "key8": "4cKZsGRNWv96jB84Tp97yF29VsrVNySZBtRWNA41oZyfr5WPyB3PY98q2rj1b6wtUMqhNzitaMSdsjZCyfwGqjbY",
  "key9": "5BptjQStVHhfVB9JmMVnzYoCbkYnxoCzKASkfwe4C5b2PioGhpLNx47vg1soqhVfKNE7HncwX6sQLayQtYDWrkzp",
  "key10": "43xCEnoyWTK6HzHNgL2MG4YXCbhmgRefedogQbHjb4o81DfXqeNRWiygvzMERVSBwgF945Jm4rdrPHcJSUBbfrDk",
  "key11": "5j8LpneYWZrGRS57kjZQa9xBmarPs4ZGD87hoiZPLJn3jHRs1XZPr1mKNpBUuRupkAVFiXVxptS4cxiU3RcR2H9y",
  "key12": "2n3Mks1fQeVjiNi4wu7VxEjzAKCyyqmZ9hJeFReqKktDEAZEunomQEhdqViqrf2jaTFJE1zRWYSHpC8A7XW84y62",
  "key13": "G9sQTrNtsC6x943DgEXhs8cqKstsQLJuMRdq78dnFXPYDhR9p9hNjsFKCU96VS94grE9qyZoa4z5iMtRmXk3VuU",
  "key14": "4uzBNhkZWqqSyofu2VXRhSTbRNrvZxEfRQPVs9vNVhV5wJScZ3xA3jp3hGAEX2QMDQqbFL5HHb9m6wSNeb8Xk193",
  "key15": "5HQSrPxTzdX8B2uVzpoXhTeoPDr2j9PQbpUSsgFueStwy6wnuLc7k3uiVQfudJcxBv97uDU9DK3HhKmmYwN6q467",
  "key16": "4P7xEg6EcdgocurcGAJpRChTUBTYxRM26Nt8TDcxSAMBDm6wYDaoJcfk8PTYZ9kB6hHaRw5U173KSd7jpq7ijyg6",
  "key17": "5NCrJTXMyd4hbNSPZ2LyJNS2x4U2ZETsLn7AYovH8o8xbXS6NydDb7WwZVUjyQjnnbFVvte6gJMWnmLcRmiC8Kre",
  "key18": "2rM8adv3cFDiR5rXCyNgVdnpccXcgjtSAL3eqUTG2Swz6k5pUx1AR5K9FSxPMrMz7nADYkXbthNz4gVp5kqfKeZi",
  "key19": "4gSTuCjNn9gXLGwdBHt7vkfgkZ2BdGy8CgJE8wfydmaomdZJS3djSEjTvUkVMuWLH74YS8Ad1tTWaCTwa6Z8Cfti",
  "key20": "3hoZY8xKWNSZDeJUvgP1MRc5WTGE63CRndawHVBwXimyNNBpFbxm1XDHdR9cecGCczVsBUYmdQxH8kMFSp4jkjDM",
  "key21": "3b9QuXXLzLhKWf1cQzKKSWpxeaCdyjQdKPfibxhM1PMKpCg4hLwYCtWgsrDm6BdumXjN2FD6NLGiGpYe6ewg36MQ",
  "key22": "iQvuYpUfA6FzEvkj8BhRh3xme9jHoNaKTxGU8TkC5F61EocMLPouJCK76cRBCSxHiYCBRQJrrgXAjk2NCDy6Xfb",
  "key23": "3Lwv5f3fJVBc8eUxXzjuVuoBURpPPPoHS7CxijbdRHMPBvUjjcKqf141wbyhGQ9edehKv2n7LLK3Hz9K3NZQ9oWe",
  "key24": "5guV9dheVNunm2Kn2YSp7iYeNssHfDyfZchi4cbT8SQkt6auUGUc9YJ8MAHGQQ1QgXHeb2iqnWobTnPEHXtbRZY3",
  "key25": "3mqEbnbphNWxLZ8HBQUEZ7oc7Soe88EJmvzW8TrAGwM7YTJ9mijR6r3SPLNWTSYEgmZguD2hiznBnzZs8D2oU8qt",
  "key26": "4nYDFvRZWmMvzBKXEEFhMpYXv8gKGBcoBtcdZNY8ReroRLRpGNyV7MFakKmu9AiiHAqztXZCvoXd24Fze3HAjtTK",
  "key27": "482oMpa67j38Q11EkBLgyY6fstsQriAZtjbkRNu2pzsrGUENjESqkXJo6UycRsMsHT9yLWaDyCAJ6JtCMELHwWCx",
  "key28": "4GCfqDWWZfeGbK8eEmwQ793ufAPaUL6YBh95RKQNxxqKcTTmUtV6qVzmV1vNQeeywJiZY3eP6XXoZP6AiGBnareG",
  "key29": "5LnwWg6cJrWzEEqegnJWR34zk34XiTEjHyWzmCDgNhRGxLaN5b8kjf5Qxcqu3fwyZYone9ajtPKEUc77x35dYpg9",
  "key30": "4c9T7gU4SDZaioDT3wEmyXNLXpLxYXu4WLLe3a4GENauVzdRhYzrf8XMbqhg346ZYfvU6gvMNQQGuiAbuqkAfaiE",
  "key31": "23yksgRgBFfZn9SNHF46KVds1UKRNr4Me6fDLhdzcNjBnow9XjQseFyrN282tgaDmeYkVvX2n2oogmG7DKkm7F9U",
  "key32": "jFf9yX5wtPTe3iDg36U2wteDS7DbuK9CDuvc8yQDKW7S1cSZvdN661P4rCrmNNsec53QtuJTVXJVTfL8oi81316",
  "key33": "3iz1W12HmWcaY7N5pgD8V53aUKmPsJ67AQ4AWjKx4ukxjvphB6VCTW3hfM758TH56HJeMR4Mj9EZBHsfWSWQaBdU",
  "key34": "45jkaRaoJJ2kLmUQ8mZbYARsi9GtY5RSbCT1duhdfGoBB4qmzeXYveEKg53xmgaXjJYmAHTnHToE4bLjWAoJSdHP",
  "key35": "Bg1uHQ27vNhLiNFhRBPRb1dgNFZfo7WGKV8oFKeFv4Z71w5S1Mp9TQyYf4C5YAN296SKTfmt7jrbidkiEHCFBoK",
  "key36": "4GLssFGQTXb5Z4FQYrFezapdnq4ybgUDhjHDFstgcqZsmMY3dQ1dzp3kATv1DEpAWwUENJzVJ4ovQjbhv6Wdy2SE",
  "key37": "254BEtkvLHbcXHFFt16Yf43BNnNggzcxrd5vCiBKtuLh3i6QiXM8D71R1FQpzSgh4VcKdHS9haozeSsVTew59EHS",
  "key38": "2dDXDDKsw83q9BZ3gv7EgooTEBkStXGGdPdia2mZeQBgf3yZfJBw2VLmxUcLyPDeANDYpfGBWy7iMcnEYWSf5e9D",
  "key39": "4jJfg2a2yTviE9Mst3c5wQwpoz3dajitKpbpyTHXxX4gn2vWpPr6dSR52JZCnvXED3zVecECvFtqZYPSX3YofBww",
  "key40": "3UEqjVJCcgPFxbRyDyJ2aefnyvpDq876t8D538dnAmwxB7p3hbtSrokkmGryimPS6gaNYXDiZT31WZZitZXSQk5P",
  "key41": "3BcrD56YRn41Eid3eUzBiQGsJQWFuWvAWqVrWHBUXdn2o9YP83NeEMT44zEU28RbznEEDvJiUC1bd2ZNq2YiuPMY",
  "key42": "5omtRRJBDj9FkzFhaU368yr8uyvF8z1tK7rDnGxTSZNjDxCuNA3nzXVnueG5nV5uqjfCJvzY215CDgm2SCZEz4kN",
  "key43": "SM2xjE1Qo7eAPh7qfWcKdM3A6UhnVPmhAHuS39c9fBzecasVudJueb81SpsjFqUjJEmgERDvynAoD1xQiHgHFEw",
  "key44": "3BLM9vVyiwubC4QLTckJNKRkbABzj6TaPBKjnqJuyrBpGEUiMQ3KpveB8S8Yy4nRu2kMKk9FiLUavTyo6yFBDDxL",
  "key45": "3Db34oYHULRAbuJqdgqW4eGdGhby2pZqapCkoeRpVCadHgf89qXzf1oB6Vdcn9F2D9tL1tSTgN8VHUG91qKYt7BU",
  "key46": "399ape32mwLUJRkmCJL3X1GxnCk5ZM6U6va14ov8GryHE7pfyTiWuJ5oiLAopF32RznX2KUqVfSYAtstJfpPSHHz",
  "key47": "2MyYyYYPWvoSg64ZeStqcwL1gvMUrrezFCAYdURXJzGfk73oknVoSSXPtG7f16gBfsLKJbtg73amxU2ZfWSzT8je",
  "key48": "45NtKKFawUkxPVTVHW9Y9TxLNowmZpBUQoFRqCdSTi8aa3cfuFEr2v2fQA6jNDxz2VkyikTR1jkjvy56uRGPX92K"
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
