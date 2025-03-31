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
    "62H4yWUg55z1ZFgshP9PEmHF26RPYBxK4DZwp1THsEkwYWoMDSAiyPxExFfGQNbbHytiGZdbRJGtzPsR4bJzK8zU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pGwZa5Q1WeKe8GNgKXVuMtQGVagbwzT5k2prpochFNdwK6mFh8Z8APXd4c1J9g9xJH5TZ6MUnkMELg5sDnzQzAP",
  "key1": "5TVBuMngqhGq9LERaBSBZy7oGfBom2ojnxe22SGcrPYrcWdejXJaRA9rwKdx7rvhMsD3eae2xeGpY5cbfNp4dh9u",
  "key2": "33g6BF2T2VUH71d4gBu81Qij2BEXg29QfPVXNNCCzv3D5HTRJWXpESQz7yJm3kT8XxJBq6Y6NVKA9QXsAchXLzQp",
  "key3": "3mKp5Xywqga9C1Du6wkYYnowtCkJH74VXAdfr6RiJpRqwAYiskDpSXWtP1KYKQDGhLMwshumWs8yStpghUUMH25K",
  "key4": "3Vnd8bteYWvjS9qj6kc3yh2ivHATdkXBTGAoBfmCwsBdgt654qoRCQbKR8FPW9A3wPgQcxrAXYpQnYaZt8amPwu4",
  "key5": "3DVvfsEe6u5YLzyztiZjfHzFubEHhERuQeyAet2TPBFhsq9Q3ABBwpNkY8Mnk6dsGqggVqP6wm3hM8ofVXt42bMe",
  "key6": "5MwwLQpEo8tkbiysYsVcHQe9pPKtekLdk36q2CwGnR5S5A4PjmC81wAZMPxHaa5PLsiXzynyh1FQ2NnVgGvK85RQ",
  "key7": "3S75YwpXYXFU1fYJxKGKMfckdXQdUp4fGArG4YS7vvg9iQwJZJdJP2FQH3xqFJkv6uFkmi5fRQN3PzypnjZDViaW",
  "key8": "2zhhRHKg7QypjtMKYKxetsVHR3TxbErnvicejYku3u8wfB5t9pixXQYQ3vJQR5m24popQmk9AEu95Ntvi6qKwhjU",
  "key9": "E19GG612iLhA141fpWXfsWFqCqR1Lg4xVHaRnGsymdwfH4qMpbT2D2an36YVw6bWr3pSL8e2foJJyVEB8ERsQ7K",
  "key10": "2VvmQGYnoJC3g9A6SSGA8zGiayhDNYo7Z5f4xeHAhX7GGQRCJu2xYtssDrhUXU22jLozHMWYzEdRaezFd1Q5cooA",
  "key11": "4wXVoXz4aQydNe7d1YK95CFJ2PJDq9FERfSP1TvUHRRtV2Nga8XKZh9DQ9mymRMJPTusr1vGHJ6tz24jKkbLKUh4",
  "key12": "25R4mRY59bGAg7iWJHyzXrCBYfsS66ytc87vLob2mUsB4MKmY5zzxyApaFvPcuCB6WVNz31uKHusyEctX19qPF7S",
  "key13": "4bfYy8auNAsHFop7hyqygn1HJMQ88N1M9H62Mf6AD4PEoXKE68ysQGGpjDm8cKnMAxwK8JhKPtPFAZRpo2j7918i",
  "key14": "4rmA6NNXPnWUc5tTH2TJFYA7RkyJXmR31ApGnYJCf795K8KTowyskdQbLn98u1Ub7EKJ6BrFzsEmDdt2jihHoY6S",
  "key15": "2UAtJND4rXYooGUUFNA2uui1Mf8XjtTnSdEFEheqPNG2y6JQCtCp57ytM5qaFzugjwRQvzya19zSid9gxezV38Lu",
  "key16": "4JpEFwqB4SLamorHmLAEQBKvbkLufF7yJQhYCf91PjhxE3Du5nFrZ2RdryUFqwhoGn31yjAR5c7U1pLvYQkch8oc",
  "key17": "2tEGeCtQv53pTCBDvxDNMv7NxGtK8iKKbiSEiYQkmJXvZiJ2qQKcbEHba8YHjX6p8pzo2y3pMixs7Cb8RRMr8v6P",
  "key18": "3Nm4gYz9ep72Ak32i2eX5yYeqwTrjdvCSpdXqUq8QyLuntMSaf2Ui6qjXmGXZC7oXoh3kxNapZgioQ6vVgku3n68",
  "key19": "5Wu4sYrC9JA4AjCFhQ7GUgdJBeFDzMDi1dL282QrEu6QFDc9z1jYQ9fJDXi9pb1YV9AUtEY3wXzog1atej7aYif7",
  "key20": "3bGnRpCsBA3arVqyZJm87vfeg9Q4FboQ68jDXMkBFBju3xt7DDVjoBsfsp5yuxdBgHJ1GbH9aDUrGZfHg1HHBbSN",
  "key21": "29gWEkjLSv7QCi6DzACFqEoo7Ht5hmWMbnKmZV8t4uwovjPTystMSJG2imjCfVH1EXuGEUfdbCssE3qF9779y1q4",
  "key22": "2XGSc5VY7q4iMYf1eV7Urk4NBxM3Do7wKwvGJZLEBaDJJFvJ95kyhc9tC12ApYZbYLuXkCBx25aCuyt8Sqbs9c2R",
  "key23": "3uqcukbDM2wjtUr1B9ECTkmsxKMBPpfUdWWJ1XugP9EE3PosYzpR3n3u8uRrdX5n6r5RngA5q6krtcaGtL6mNhKV",
  "key24": "QwMrVNZPdFvzYycaDFsQZ4pd9yuoQh4bouE6uQqoL4RQXyZ12CdNQg872PwVxXBszZJ1KebgyJ9XYVLpVp8Y2Q8",
  "key25": "251WE6eVucMvfY6UPjuxjPrQzYQHMBaiy9SebXbvkHMMKU6YVPCcPVBHdjCwe28N7SS7jeKsF5VCy6nNy5kcB9T1",
  "key26": "5ontJQxXGKTbAywutDTFw8TP28V6FSDx28m1VbSSoyrJL7F4Rw9FB1AJ4N12bdegYiP4mkveiz2ZtmWKuunoxG92",
  "key27": "47ZYUAQoCEG4hg28vjpXJuwYtdBNj1byS9NjAAddcg1dN1uGmpn37W1mXSk8szEYbxQjXHcHWKhhGxEzwQFwbkB8",
  "key28": "2DEF34Y6sWhCqzaZ5C5mwKVBPRxQ6QqNuPzKXhUMaB8aENoeZFLcwgZ7dkMJ9sbiL6Noz4q9WCZUjKhd5pZWnAsy",
  "key29": "4Y7EJy4yvwCLkx9V6BqUFniURB24DgTq8AD6LgDzHKR9Qrys7eNTnoNsTc6KDqXhTdaT8mj3ZMduSSxikfNWYCvt",
  "key30": "5NHUv4enmCuwoJ1USR4znPJCMNPFfzYmAKUc5XVNwzP2J6abofNUVn2NnVnAPXedh9wxq82tN6HAtjZ7abdPTZS2",
  "key31": "2F4heiEQskcr1owgH7YPYAGxbqhKe6VvMeDTS4cpVXwHhLXLg3vsJ7ND6QcsXHL3uiGehozJm2aHq1g3x4utCywh",
  "key32": "2XZ1ZdoM1HewKHEkKhAp4aAqmCUvixRraT5ghSAMcX2cFGJsrzQpB5AxJAarmfTuhH3eyyVbf4xzRuwwqCBbc1L4",
  "key33": "iZjags9TiBp7E3yMqYBcyVYhqkaPeJKFoN7ZpUpgFpATXDxhiPiVeheKzMpzftrPhjkkQ8v2NnZhCPV556ax5RP",
  "key34": "T39b1CPxnNDuUEZMx86d2zbdxEQ1QqKJgyYoWHTzQ4ujzkRgJADxPrfwoMvNFPPEvUgriwkrDcjEtUxhGCtLyaF",
  "key35": "Z5Rzejy5mFZTb8tCXAKFi9nCZNzep2k2kSRat8YNGkZUhYeikGt71jSk5uAFd6G6nbvHhDr3JoepP28TtxKpo9M",
  "key36": "572rrvqjBDDhpTBKSZNN2TjoApHsEcRoukDxgvKFW3rodbhYQWPGRD8RzQ1dNGuynu2szZBXdixeyyQjigc9z9Zd",
  "key37": "3uvmazZVRwGUR76aK4RQMFBkp79TUCo49PtXg77nJonx9oQCzQ8GwDtZLP3nDBAitGyDe6AUDXKd6p3AvFoz9UzN",
  "key38": "yRcBquizrGRvTYSHpyt7yAP81WujvApLudvwF37SozRLTBMNPiTASmS1fkmUNFHVUUXs4pXFb4wAmJFH5rgPzxF",
  "key39": "2vFrPoQDoTdPaazfspZAASbwb2dZ3RP6BqY1HTKsYfgbLzQURc6YFucbbiN1hSUg5g9pDWAxNjonif5GYi2RmMsc",
  "key40": "5SgzaERyHft57uiUfL76xRdN2kRQ2pdfi6nr3GjUPbSBCCkUWxF8gmtJsZsFgGH5krCrw9fPbVdk4qSzGhDgjJuo",
  "key41": "2xrdxyziLWEbh9UoN5p9GQfEwfkuTtAVvgyf1xLhtBb1U9BG17n2QmtAFjDpq4FW26UAa7x2WL6oL6mn923zrqK3",
  "key42": "RSMDYR1hhTU55QLJBfdDhtgrwLtchk3FXLTvu2MgipdLydAvxv9m5hV9ozcNGevPWTgV5fcbQxtZBuL8zdUwk8p",
  "key43": "4idz7WkKLqpZd2kG3FG8AKXgiUKY5KaZruSCHXoPEsEFMrsjuPdAnwN7jrCdLXJ9gwS9e1advj9W5i1h9VPGckZ2",
  "key44": "57gX3bxsGyy7cKuN8hh1qXfEhzng9VCskJBWe82ET7rf9RkDrGESqjE1Aho2UhocSY2zocEuW2QPDu3zqSYeeT5P",
  "key45": "42QGuTepHRoFBc2hXaJXSisr4gUXUDDiyvoQdJCpLvhuQ4xxjJiotg79hWQcHMu9Ey7MgLH8DhC8Pt5YMr1BdLRq"
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
