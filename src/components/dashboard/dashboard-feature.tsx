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
    "uK8psK5BzacyaaZtEHrZxzwauM27rxerr5cxtaAfGik1pSaSwp32sfomNfiRwnmn7m483jkfca2kixSBJ6mpY6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hB1EpG3aUPTW6PeTn5VXBFb6Mzt8g6d2ZiKFkHmfUXjiZXV9hk54BkByWC5zKu1hLRjdtHddCfvYMzdEFrXKiKt",
  "key1": "4Y93vtkB8YdUCabfYYeeYFSKqZzGe87FkvyXUagRGAHb7DRd9NbfDbdJtsabgupzREjoYKE3zyVJ3ns6uPM8tU9z",
  "key2": "32CXfq3cAa9dum1ryraLR5z7ujQrH9jmTQYgZobDj7wbMAZ883xVKqGKLHhqhSSCsZezz91gdXWbG7oUdcRDBiCW",
  "key3": "5eUy1AYuo92tT8qTgVM6xayG9nExYJ6MxN1HaymeQ6sQniBs3iDvzPJ186p6cr7wdXHBKzNFb3nB6neyAuXU31dU",
  "key4": "5pRUWoTBbvotqVSxNVMGhgxTJXQcuw8nfdRehoQsjHFrAX8vCnR8voQtLaC6tU1dM3zsZP6bHLrRTMNwKkzDwBW7",
  "key5": "5fb1AswNQcTBSHGq7gDa3vGUMwugRN4VzivaeoeRCQAd9s3sAcFU6U1H3dwxdPN8vZSJ7e65q8FQSSHTixHtBKc",
  "key6": "3vH7YkYTUaP561JAH2CCHS3tpAHVmNEw36oAyHPAjeEDcRc6RDEM4HAQVpXg6VBdgshxhF5kmqLgCKZ1iaHXMQN4",
  "key7": "5o8m6jgqx34GAiAnNYjpsrxYtzYDGNa7TzCKqe2Pn1fSP7QM2ZdGGuTbHDoSUgvbT3Jf9q76YhV5UE5bna95u5ab",
  "key8": "2uGCfo1ysSxjs7d5Lo7MHQUbG8WuixfvsUXrEff13VnGRGq66vofRaTEYCGrrUkvhkhjxygs4PA36i9o2bwxLeDe",
  "key9": "CHZnbnHVnsvjMqTNMXuPZFNaN9p9MEsgaTHi7PkcReNDmspqqqDoXgV3LSUwVCnEvDWnqAcATCHfeTLX3LYic2f",
  "key10": "yq6Zasq99dGZDHepfdidsqW59GKDgD1rLkzcbQCfSqKY3UYaPs67rw8ZJffuGXz8UhoDhS82DnJyw3VfuMAdD69",
  "key11": "5NZa12rqeA7b6PxjQUzG98cG8EYDnwiaozFXe7aL48MeVE1imNSv6pt9xHb22UmqVzhNL6rNa1FiT5oSPXJejMKS",
  "key12": "3UeucGSrSfRnHjH2it1ivP2bpZTVPKG3vHjjgjX6R7PpzTocWJ9UTTYU2vRTz7w8SwSPtwKbWvLutQFmea6cUp3a",
  "key13": "6rQhsshr9yUpYohTiqHX7uqMcx5b79pJQNQTwU1tEdgKV4yhb5nMVQX9mDy1oHRtpNhFCV8u9T2NrWupNqtRTrH",
  "key14": "5hnJDQZVn3rJyUAEkCzKqGdrGqakYfmhX5rdh6uDbTZzfmeTq5uZTZLrabiypXX1PCCMzVLWJizASnC4fW9PacAe",
  "key15": "5PXs97JyjcjA2NWADoSKNeSfPsmpwrQ5q2FxWRgBBQCkhtug7tART34ZVKFqJQUgt9BEPhWpKBjFQ4g9mNxcGMwK",
  "key16": "4GJxyGfheRVSnq2Nfw625BWau8odvPEMvfQVnsCsefYRzV27ewaYAJtpxubC6qcFH32Yd7Vy3pesFnHDw4G3PR72",
  "key17": "tMUNE47hoyVpTGknNT6nb62t4z9XEyb56Lhcc41ZVyt68Wmh9hc8vYq1m1t31EZQa52zEKnyxW3h3y1MYQBtz9p",
  "key18": "4jPuA71ZK8cpz5P6aSpCxCBKkSR3Nihdqc3v4rrFW5nyVEwLrbwQSuWmyiUAtGYASNeKMzQWBfmhNGaecDCftico",
  "key19": "64Tv8rhSeeJ8y42HrtueNMrVzYkCcWqxSq7e1nWTSejN6j6UpJvcUts3YuLVn2Fgv6uH9BgyrCAxjrU3kp7C5tYx",
  "key20": "35ryafLGrzxSB2wFLyZGvnjjBYNviy1PJmt2TGPpi7Gpqz2RbHm4JwB5TwK8khFxR1FLW36TaNx3iYZxWDtdTRGj",
  "key21": "eHjNGtn87UfotTmKioWnzeqVrWJ4BaDdThe52rZKJctdbcFW9t6ao2gVQpApgXSMyZyGt2caYR9vTHVw1NV95Hs",
  "key22": "mqvuSDypkqUeGPETdLmggq48iaSQZsPx3MctJjyVLWsE9NbkrSwjM6Um1f7qHEoSD3gB6fEcV75sn5WsuAEZubN",
  "key23": "ccMAY9tDVWqrUhKCugVbXpx4YDzW63ouYg1brz7UGFwE1t5oSHxT9kvWpmahvAgZS9EWj7WzagLcuyKfr2Y9pPP",
  "key24": "2MpMhP5JVzcK1YyFddaSj5xwC3PeMRuoVuqw1EScMqcBtmYkSCtZYWDgfzHU3qvnTjevcuUSrWhFEhnEodyTtgwB",
  "key25": "37LDUpbT43NjFry1dp5ruAESXdh5tXLNUcd94vnX2MEFRtDc2He1AnNJhBJ1JJM8JPubty8skUCEuDVqyPH4VPMo",
  "key26": "4EQ4aS9552DDQeY2XpTeuXruMATR4SAdTnNKXregyCDF8bHgzUTW3ZxS9VKsbZ8FYdo5egJdZEXfe5oYERPLjjSZ",
  "key27": "3M3qf1WC57JXo9qS2wHXabJX8mUgAnfbAjkfXSQwGG1zbEbD7RGXcCHWtBXwSPuk4nS1DnWHiVAiYYywoPPT5gmp",
  "key28": "3uo2izKqX8AM1wQcMrhnVnUeBCGCRBCQAWueSDoURhnpmWqb96R12V9miLD2ifyFr3KCFveCqDLztiidxXoEYbfM",
  "key29": "5cSKHT4mPHkvzoZzT7Lbbs7qdLJCyASVHE3j7JMQ1Hi5rkX6iGZmoer3HG5LNbjaiE4KU8Ch2npe9PGqoEdZdH7B",
  "key30": "2LEd4NX3RoESgV5MGHDQEbXJTQ6BAvMpqd9Vrp81vWMYNyv5hjM1V2ztYKQLMsvduxaZ1f9kxGfbmUbfDkDCvyX8",
  "key31": "2YWGUz5kJ8LDxxBotbhWEx4NZYBEhujJnqb2gCXUac7W5ceCYX69u8SQLNj4nvLBhsQja7ZzT4EpTi3woAAwvo4T",
  "key32": "5zhEKwyaGQYXsmd2QUFUkaiGgzwfyGDRQ9ZnMCtiaT2DdJEb746hXFBT3bGZXNBQboNR2s8yZgB2mTPeyC5KsQ5G",
  "key33": "L6LQFZNBAarBT2q3pf7jEeQL9PTJyfe7EJSQsArdnHRa9Q2YgkLXNEW4SL7hQjvuXYkQNYXCfaKXzLNsuDGh2xT",
  "key34": "arSuwmGU8ycDe58ogbBfgfwJayqCnd3gZ5w2DmGvWCo4Na3nAAdhXmpdSrQ6BrNtpMcQxruNhLzvHacxRDam4oi",
  "key35": "3HiFSEqUCDsMrt23Macd5DokBSkSe9Q9Qa7w4y7gY1DQXeGhRAEwFBX2oPShdNDBtqLXPm1cNRAwzx7HFTJbqJMa",
  "key36": "5m2hggtV1ToYmT8VcFQcdB15g4Zzv7LPQz6xBQYvz1jdJ1uaeG8ybSwoNCHSgrAkd7oqWYjSrQmMcGfepUrn6aci",
  "key37": "5fM44fMjS2eVpfr7VhJM9iaRTEWVvRLBgwWaScza9isPgQA9cYv1oXtgE5czTEYiQYersZbX5TtBSQkCNK5ijQFN"
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
