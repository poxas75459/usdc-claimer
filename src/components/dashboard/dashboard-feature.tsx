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
    "4m1Yv27v4bRaw4qKfS3jeHK4ZMfXV9FYuiifXJaBC8DtFccQx6wxj7WTSpL7UvA7JAg2sVNPDvWqT7N2UYjioZ9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jeyUfNjZMytoWv9h3yxx6Gtjd6ZfkNx7ybV777D4o9ytjpDAz3TuimdKfwZXwpVRPHtL7x6zST77wDKVNqWg5Zc",
  "key1": "5v4WPDBtAE2yuSDxkvRrrjjUFHP1qAU7muGuAhRjN8uS7ARZWErK1hk2hxcq35Qru1SwVkL3oUYhUmZ94wV6uxny",
  "key2": "3K1c9iMJyuHP3RTHZwamxotapcufx1vj1HDnYDhpNi1daMxULjwA7pNKH66NnLGPtpQKejoowDdSgm6m6YgKHfGC",
  "key3": "JdiFbuGogsNzdyCDYZ4UPZ81W5drM2u55xrCNHU7i1iueSFe2PRhc9zF596ZrZ2FMxxVV2Vq1gt1d2KKCVi8acU",
  "key4": "6pVBF7PTF98DPRi6VvW6oyNfdu5JVpWJh5qrH6HyMZVDU8DmdBacWksLE6M4CqX7Am8HzQrKGbiJiU3GcGysn5U",
  "key5": "4rAeXyDctnhgKB2PsAXisNnTf9MkbjXm953PWQyDLCE427k8b3b2CdZVs4ia6u2XE3jyU7FrB69t4LUu19VNvRyU",
  "key6": "37PeMWDzt2BXupYpCk9tkCwAT1SY9Jgu9eTiRA4GXy2KmzhnQfHSbfbMSM1fLGRft8yDNbRRQgqk4kphULezm539",
  "key7": "2BPgfD1wwqUXzn96J2NKkY8tCcLXDfmihpgbXvkZS8cD4kgYriPm3rGmLZv73JChMHHc5315gY9Am9xyHMadXuT8",
  "key8": "2Pkr4DFkzqyGBmvokY1dpyRtzn79ozFScdAHi6NhkCLsWfqCdYydX15xhyG388uXedb52jxmVwEw6HpgRYzHRFPR",
  "key9": "5RFt1fDXZZsNKA9PUDw6r4razoFCAcFxe1igLrWdaoFqPkL9zyu7Byw9NoeknXSqhwaNnk5phrF4JWpR7gjjAaP5",
  "key10": "26JWP7Qw4basMXCMg7ofGf5UHz25eFhYHeS6ZzpTYfdU7wojXcNY33JweGqPDBxv65SeimCcFwtDk3BcA9yMkv2V",
  "key11": "57nUWiLEBWVMEARwTQSnKY3hfeJxTZtZwjEhENNy5GTgPGC97BkvX93zV6GGtoVSN9VvWjZoYS1iSj6Jvd7TMB4c",
  "key12": "2RATw2QLbCWFWS5hRtVMYEpg4cvNTAxN4F57veeYHV8tyeZN2DTfjXQvhpNiFfXhh3FwPBxFyPfKKaWWyU9NH72L",
  "key13": "2nCJeh2bocrBhmK4fszWyvF1p3qNG9ZcMitvzgY4DYsZpYnhbVkabP7R1EzGFGoWGdbvyzRaQxQZD6P7kNYiBM19",
  "key14": "2FZqHPQMpA5SNCsPenmk4wyGZu1J8iLguYeSwqB24sdmg6tEwtdGEE9ERqd5z1b1iww85aqBAW66aeDvfpYZZXMd",
  "key15": "31LDbJkfVA1dsAZ6e4wUeWVqjoLui6QjvxsjraMqWA8MyvszigMWYfMcFK9t13Pnwc8yp49teMDAdCCXXUqnGHn6",
  "key16": "3fc2SXG7nhUN2mkyds9P2fVHGczhTnS52TLbXaCRPpCHHWyJNssz5jArC8kc2KERtM7WoypjGf6sF2gRhnPceATy",
  "key17": "Z7RCD8VZ9vUPuuY38NPUL81yfzzKFhdhLXfqSMHBiPf5zEZLa2B6PjioNiqxVopQ2C57rKV8apbkvdESeqsFrta",
  "key18": "vmeYb8NfoXDb4E95sBVQoBGJas6fJvLhzRqyM1V8nxbswBzgCovyR2cW31cAJUtgByEGdVzZZBFwi35TXj9qTFq",
  "key19": "2H4MyKWD3Xki4wnY1CpcR2cuzBbxNUCYU6mDEE4D6BfZXBddzSU8KBpqUy6zgGF9MetmirHsnDZJtRE5aimP2B8d",
  "key20": "5YaDUYeW2kzK46Bqg8QDF9qJMWGqSgMeDWwbvXaoUpF5MQEd7q1RDaMy5s9VzmTHm4jN8dvMifxuxE4H8QnYGBV7",
  "key21": "4S6AUXqUdj5ET9Xk4HpE8xMxBfo3w7pGwiGnSfDctJYo6vzDxNv7NUCadCZ1oFCRCpmL782qUUZix44eVgTma9jZ",
  "key22": "3dSadWHQV49dq52UPoJ6jvsuBcY7tXSTCohpNVrki9D69jkpNj5Nfdug8RQ1spoERxtUeuQpKVbPvHsWQs3A8iCX",
  "key23": "464joBHjVjxrDMLqbGjhdCpkGCHbMcyk2hALjiAgNwTz7hC7wdvD7mb6WUjx6RtGrZein2kYnc7FBWD6cQqyaopR",
  "key24": "5jXAtQ5TMki6M7YMZvHPnJf1oNDDBwHHweduDoGeakDe7nw8iqfB7iKXpgXa4crN6ZzyG4WmU56vTf1hXh4Ugi21",
  "key25": "2NgBdUo8FWRk2Y3TxB5R9wTvPHMWzicpLmeuHZVCdasyquvqX4Kg4TjM9GZxGhZD8vDgY6bcQAJwovxi7DASuHem",
  "key26": "36GJDt3SffPSUBKdnVmFQCXN6TrbEJLtE5t2w8BR2JuBSfvpckr1fBWhu9rmWUPsMxq5FzvbsMeDmLEte7wW6i67",
  "key27": "5BaBj2RR8cww2TAoprYgMpNY6uUiTx6t1XJoUrPRTWCvzTB8TyRUsyHwonuPoeKgUyuu1yZpYM2EVAPXhBy1iNpq",
  "key28": "2QaX82KqBbSHBwRm6CKLFWkFmbqikTgiDCjUG2y5V6NNf6SGEocVhSxuhsiBL3rXB7sYhSkQm6iKsUGWCk7JGBQT",
  "key29": "4foJbG3AjVxqpLqrCDDA1KY5taQSY3fEhe271nVWHLJ2Soz8LU14AAHQn9iKr6KqFr7wd35gQBpzrCQN6vYh9wGk",
  "key30": "4Rv9xAcUowBJcp34L6A3bQgBgS6JpirKyxNvgsV4unSudRjyYEpRgjQaswKTpKVAQn7yeDPk2BHYyu93cYDok4SN",
  "key31": "4RWsAQJhSDL7viftqLULfeBhvsXxmTLNVNCapnZudtHm5RJyjc8fZvNrrxJCFygzK8PY6qKYC53KnMaRWxMy9tqG",
  "key32": "45z4mpdVhSxXoFjU4BsV5yGwuG5Y4CjETPBccAJ4FEuPfSLgkLVxLEFjwgAHhpWiFHuPCM19kvgoAVzKrE87Hcvs",
  "key33": "29spU5heDAzvP1W8j9jsbenHh8WjstRzmYPT5oQKHDiAnfvpfZUqui2kXvUdz9Au2Az7dnzktTB6XDEfxF2WHApf",
  "key34": "5xDpmu8mYxAPT5P6ABD98eBmVmi1yENVZJ48ry4tSeUNZYJ2v2WLoKNpHMCN5R51dcjxFLgDoFV7CpHTmTJpwFrh",
  "key35": "5LYvR4MXG61s8EUMt4izYWVG5RPPAfYoEWt5M9hebCvuW33jWqb9a56ddECG1dc85tMjK89s59GWixBJ9mpb589S",
  "key36": "2uU3fonr6uVVSsh4XicGmberpFeGsuWvPHvpVsHiwg9SMty3ZpVBiWCgkiD6JxUCvyEgVJYHuPHQHRHpMPhnnY3f"
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
