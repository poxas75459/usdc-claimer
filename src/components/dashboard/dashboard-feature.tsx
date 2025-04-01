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
    "5yGeMHty3U2j542xoUakhZGuGyyyYaSLw3dSRvw8UBk7yiYCfRPULUccQcC7NZzv4mipo5aomvLYaNnXTyngaHJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ohtjtpWx1DRGAicjQZWaJYASRYRgJbJ2H5zDkuYWaqkswWEJYuGaetiL5fYBo9tF7QheeqDBJhsf2uMpQGVgDFm",
  "key1": "5xBYURoxouCa4sKcTQ4JzdY5xz5L54tuMiJN1H4qVcpRHJa3EMXa7k8WDNMnZHz1M4dzW59xAXQgRrLWwVZfWoP2",
  "key2": "5UKW5SrGHNTuRRw1oSDjm45PzZevwosSVGMFvmpNzGoP2zNVZPYqcrrGcyszCo2XRbBRW4D5YVB1YTYcQnhLA16b",
  "key3": "3BkHEemD6wBudJX1byyM5jRL2yHikYdmLvqvqTPLQ5q4WYMQrCwq1G8nJ8NwRqVJxDxavh3ZvhfwctpqHtp6B77P",
  "key4": "3ft6UAaL38ttDBP9SKfoKZ6CSzbvqA75Jr7em4dtarE8LHXgoGVLuc5wBFbkjmvhmeVGEn9iUP4Mq6GdC2zDGB1u",
  "key5": "HSWnpaDHF9Dvh5LkYLfbd2KZitq3kXdwhsh93a1FzTPtEc9iSye7BNqHKckLTjGPQVMKnLpFVtsx4RoFbSJtBA3",
  "key6": "2LB7J62vEWcypHGK54UGRAmQ6fmH8xh6w5fCGcTmrNoVTXo8pVEBGTiRSjuhDJgkGSUHLDqNtT8sUhRf1vYRMZ89",
  "key7": "4xZAPWFoa7r95c9nTB9Rtrb38cbVSLzH3hz48UpQGiUQnwPGcwKU65LAGC1T4nMswMnApjfLDiSeTkFo6U7kFnpR",
  "key8": "xdMWbk4cbbjFCd5tqbh4NNCuid9vESc2175bZ5rZqBofJUhKRfBE1fpQuAySNNnhVY43y1bkYfzaqJEHsy5S8Ax",
  "key9": "PCh5oo25KJQiFzP8TstVQqbQGg9ALJ7EyLS6HhbWkNyU7z5GbWzs26keAfoRMSa5cQMaMjer3UxUVpRMZSKfTTi",
  "key10": "5z8836DA8juCVmC8XogM18eKXxncqq3N498hDy9ZA1BzWQAtcc4v1Q2kChRpknJzqaqvNZycfMtf6ux5eAjGkMrF",
  "key11": "2evy9e9hijV9G18d3zL58USQ5f6YxLMFVcPwdhAiikGUiNWzLGkMqH921dMQtJnkgtju9F22TmzbsNo27tAKVy38",
  "key12": "3qLHiFe4XB68RJMADzCqFKRqNNeiRmnxWeDwxxKknSS9vnsmvdHxzDuqVoQH7gRLQsxN3JbG3MLQmqzof2jtpcrw",
  "key13": "2ET83x7Qvo2n19oteJRqy5e6h26aWPoTExemxfmEwjDpQMt95fgVb5uLn1gKaCA7UVopAE6PFWRceZrXqrg5TgUc",
  "key14": "4X1VpJb839TuRqnQhej2CQ6jCK5EcLQCX1Evpp84fB9PatwjZn96TQcnhiwT33dLALxfR33KUd3xNiFVbg8cPaKT",
  "key15": "3ANFRY26VC6MPVZEz8Wos6X8doWGMeq89denXemUwodUai3drsepQoYiochBAm9utUMyAMPBdYHBSYkZnsiGp7Vt",
  "key16": "3ygmxJ8Dc645a5hqF9rSf5dFK5hqtCxpRUxH5PzQ53ERNGyzT9UUPFsuh4u2JXCP9VxLhBHt4hophgXr8nDpfvpi",
  "key17": "62Rev9NktZVaRdSq7ZEAYdVTbPyYwpUqUjKe3FKpXosao22YFtLFTL512RXG3yL3fgV1QdfnfAhNDK2nGuYqz47g",
  "key18": "4xitC1prnNuGb3Ad7wJCSVKcjVw5Vr94cJFepEnUkGwPhSsuDMVqUpPkYtKRKS96i9VmAFHSrNekp68K5CHxPed3",
  "key19": "4bP56naB8FgFdDYkJQxj1zKkbxnRwuQveN5vsriiLwH53m8Y6Ev9gnJwZ7ivXr3osQHmzspDsDgw5GBKFvf6bYK5",
  "key20": "2V7dR1g39iemDXToAWZrheqsCvDbqsH7UX3BLt7NWAjV3vPD5aVpgacUiy7aBKkLNwk8NTMvYyHXNvo7zX2YyH2h",
  "key21": "5pbkHpcF7ytTDsV6jnBeoQn47zgg59CcJmbYjFWo5tHXbrExvfViRtD9cZqpyZ7TNnNUu4ukjR8RV2W9e1HwPH1q",
  "key22": "5PHDgBvfNaWrPBca1fgDGbdJDyiLyuDUmYgyFf8abwHTmLG58PwXECTepks8nRPiaL8BrfKiBytDQoWiB4PQSggp",
  "key23": "28LBDFyFjbEPScCnVxEWJeDU9UVzP15jrM1m3JRcSywA1XXwVtsr4pQtnQDET9epmgwEiTeUk4xbxz9i1tv6z5EJ",
  "key24": "42ARqF48uULhhpQrT2rrrhhAEdSAxgfeYWxPkgqzcfZeyEW4JQS7nJknuq1j2ENv16CTEQbGQZqhEDd7bs6ZBkTg",
  "key25": "4wjaFdYDUCZjtUiHLtM3iUrFCoJWHnHzQDzKCqHYnVNsdh7SbbfsJw7FdwLzqyS5x8MqaSdJuMZR7Cow4qrqPM5r",
  "key26": "2oxuMn8vFJ2nNBJcrArLE1bKqbugqoyaJW418hpAVYAZNjeRvRm8zPu7QCwPQBWHJaxtzHACevzDt1tmenKXvM9R",
  "key27": "33ZAd43REbfWo4Htxyk6Gvt8RgGBY2mDrDqQHnMErQwByxfR8cRjvHM9cACgB5ABywv45rTVftMGLtGZKD1XQeez",
  "key28": "4o1Zs3HLm34tbydFqaWHhhxa6VLhvk2KXikjmioEmZCypgKfBcWdnQb8eqCgs4HaXFAGnv6ftWDw1DsggR8fkbNT",
  "key29": "2ZYEvUaU7m79G28NBxpH3zvaT3xCu6R8HryrFidpYHnjaruh2soUqEp66txC8Ze9EYSaxWFvzAEeQTDWadH1D1iN",
  "key30": "3fYqMvfFdPFBUYryUFuq7WJCnX6d9JG8Nup3g91gmc1efbBwRPctCUxfPukkKQNWjB5i8Kp9WKzrB3w6dwuL54G6",
  "key31": "5UgoHQwBHme9DaHiRTPk6zhkvsV5RqFmyHnN56GPFKvM5gGMzHQ4DjZgrTkrMxLwwL1QEK7DvTpstkG6QV2SLsiF"
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
