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
    "5EzWiVa8ePvW8dMZmk6U4kiGN53FSs9mTSUALRKZFiLzAgaUBKBze4SRT4gEbxKPgqGZcpFVLyeCAgPbwS2PZmdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KqwwxoY9hg2Sm5Nwz9BZV6yHJ6cQA4s6coxGhG1dFAyiKWRvfnmoBFdpsuyXFtj4SLsTLTBc1cnr19v9QLZntbE",
  "key1": "5MmTVbPJXkPbGLW2PzDdMrDQVsKk7F8cxfKc1XYGQZFXw4yCwktT6V9H1T7Bio4Rh2Ri1xyeVV5jAbrSNbXEj619",
  "key2": "YsbnCS8S3qUczxJuAKJUmM8uSas6XWV6uQFLgrTdixjcB3ncwSBFBG3jDYjXfKQ4jusYqTHHCJeB777p2A8suUr",
  "key3": "4v7G64YFoeQQA5BDrdYdjmo8uVVjYKPJyxmuVeNqvqWcTJnd6QSynCMW5H9DcaKkcnnCmMBDF99r7UaZDtEXzEBP",
  "key4": "5GsDcAAeh5mMWsbqkL2nVq3dpzQftf3XPLBUX7SV3KpPGR8UzFQdD5cknqN4eTiS6643M9XPbgB59ZjzEcU6Byq3",
  "key5": "57GsMMBbeuwx7YmWZiHr9cPjw5JKkwMvkw5brrJvh6vpUHPningceUMBeFaBXQqaiV1ETRS1qub2B6D6nt6dWZ6X",
  "key6": "5CNQp6v4tuy1suLKFvRpXwq2GYCKsJvpi3BFx3BpujPwARQ6ZnzGzLsV1ZmeupieCBCqgKWtq42o8iBnNkPWRUXw",
  "key7": "3CLrMPao5wTDpeaUymaQz4s9kDfxUxCSkWkZ8BAgUcnougLwWQg3DcEW5ZjF5NJhw7mVdpWxNakEuH9L6LL8owh9",
  "key8": "3UmQappfdG2XJakmua2d9hAkkoES4s7wEFSnZW3mpQsGXD45RuVE2VYQ2H1tbC6Q28qCC4P3MZaKKbvHZbKg62d4",
  "key9": "2zFLXTsBtXjUVAUe7sRfB5hEmhsiF3fTrFk8F5rVZTcnxgosCjDRBM7SyDqoMisrSDr6mBk4dVCusMq3bZfguWYS",
  "key10": "mXfzk6bP2mbtzx6aLw3sAoWgStvc2kvD1do4RnLGmWWN9hAtbLmkXzLRXGPr99WJGvzSLgLMbjuK5FWSCgtgDL5",
  "key11": "2Ri6YA6tYYtBjuK8t6AwoDP5jYra1msW1BPzRoVrTBQxwv7NJS9yGggaaae5i7syYTXNXqDuQmd2q3gHpcvc2vEy",
  "key12": "4GbH8vQCLZXcy3eXyZnujxeHzUpV6PFvWB2JAAjjGcgWCmUohZUHZicGRBz1T1u9xWKPNhf5PCZzxgt9cRq6TAoq",
  "key13": "4n1PBJJoxiDkZryhgyXpDK8WA19b4ZpyGCyG5GWG6bF6bSyPVnxqsfLUFeDSsgcAcyssWyHRDyMf8ahVAUysNNKK",
  "key14": "62yhJpkpj3t8N7hDPboKvtG51EYUefPV6ThKaBzkfnZqiauLiw8hpXiKP5SmrG4BNBqtsKtydon3QfZ6A5ifkbfZ",
  "key15": "2u1UbbNkyxoYWoWSNnKY3iu8K3ZHy2haVBcBRLxHUaSSf31JWFj5cYysXEe5Zxi6NpG6kBdXcGnMAs9v4wXL3DBJ",
  "key16": "HRZWVZo8rEx2kUVWM97hd9dye24QYgzJYPGxbPyVaipKPJA5JPzJHvkj7EvwvexEYYwUHcCZSFoK29TMLHX1qCX",
  "key17": "2QvqHU9QvKLD6fzbR4Rxi9f58sXmw2zA8LXMmtuHTTFLgqwpSgfjXToXcMQoCHrbsTsxAPU3WPihoKPBrb3L7rjW",
  "key18": "4fBuJtcDZYixgQXCsqALSPnsnnDSRpX9TAXNzUdepEKuz8AijSEVzJC8YwnEgBHvs9sPQDzU5jbHAN5cLXiDJQZP",
  "key19": "44phw4k7ZUt9xqmeGepkTSrwTzBse352c2Jjz7bge7SKRqBc68RozsNpxmZvdV3u6kENXifzij7XZb2ciE2VYi8X",
  "key20": "5WUbxWUpMeb2ZgpnGrhuAj84ms5HCjyKjDXTgWhKyBCgDeCYu7U2DJPaPAV2WT8hfhE9sfigVfVgf3LjjEKChSDt",
  "key21": "2XmZAan3r8itd9CCCMU9E4UrUgypXAU2agNUemrXVdfnEm4cDyy28HnLrEAX1Br7uCizXFqGP3Cnmmu4j3CaonNY",
  "key22": "p8iJ1tWsecUDkd5E6HeKdwzs2HtKrob5bkJsu582QivWMCtVdVwXFCSK3DL4pby1htTXvXQXqJkpVCeNKCMBnQh",
  "key23": "53xVeJjJim27qDbahBa8VFbUbVjTMH9htAZg33ucmqTJ9RXmWVFiFTHnBqGj3yRjKffUdGKCEx7zXpqYvcEmYc6M",
  "key24": "26pn5CqQnEuEikqNggecXskBqC545zwKs6RxnQDGYDYMitXfv5n5Du7i9pWkog29vdRRL9drRWwkNPbAnmRngEYt",
  "key25": "2Ykoq1nkEiYGmasbgP3Xd2oAgug97gQW8tE1hqX3jmtRpjJBsLZaiWQn9LhSTzZX3Q4vNCF9WB3FuzaSHtGrr4x1",
  "key26": "5zijJKiwLqs8UaAH5hBv1pcHLGu9PRsvpbQ5cRvunmL3A8RHoMvSzDwgK1tzCWXrEwciLkxRSqVoboS9pVtNQn75",
  "key27": "zp9QNoyqbqRL79Ux3zMPoyzVVYnosgRFXVG16xvdCYh27KxD2Q3u8PwvnbGQNKiYdTisbbcmmEjJ5WNs1bcyeQf",
  "key28": "dwoc6hkoJYaH97v89ARCFN7oSk2vRBGiNCWrN5xFuAATM1RmzgcBN6UCZxiRTftxcr5HpCYpvoM4Wy7BkdMCuWY",
  "key29": "4166osa1Z6x53yPnNx9SpEWCUGvqtyW3exphM8iG23ZBJxMM7vDZB9UiooJyriswMEUsRiH8z1LPRoUxdBHtL3WZ",
  "key30": "34EuF75faeSkhHswHByhXfMRsJFzbAQEBFnqh9ZySsU46Q8e1kRPZ7uR1tpKtMMfo2HGKnn3bmF4tS6Rf9MNZ8fd",
  "key31": "3Z2eh1KwtfhSGcBfLWUkPDoQERAhPEd2ZjYpjD5nQu1fhgGEHPyTTrwL5tjtjMtLtFYroquj6wvsaBQDUUzhXE4J",
  "key32": "SFDHX6VkrnHeKz3vWDHhbs8wpAii7Kho6i5BrbAywULWEgRNzUdieDPqpYQL6LG7KknnQjp9ATNJzQy53goQ2yE",
  "key33": "2LKKFamSt9DPpcRMKSXpdPcwTEtUtpYUs1w3xy1Pk1qtMhwUijJAJoM9CTt77vdgJYRve3hny8YErLBugUQCZ2Lu",
  "key34": "wLb1rg25kDHektiPnbfqJrcYJ9EbxQrikR6YDLpXyZRyvimNWdYFRRFugJ1vXfGzzmfuuQhpko5H8jAYrEJbPAa"
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
