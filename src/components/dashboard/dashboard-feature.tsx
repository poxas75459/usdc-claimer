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
    "5gnzbUz2fnmYMj4bjC6eJQ3p6Ja3obNAh9PpQVuaXXKtPChDvZEAfXMHHXLctWXV4STEN4BtFMTTFKXNLaAeY55D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VLBnwX2ABQxxRDJJZUAkevt6fLuMGJ1nYvWb7AWKMX7wehezo2FP6K3UoRU5M7oTMXis4vmn1E3QUmiCCMJdUfW",
  "key1": "5J3ws5R5x3S49Hpps2d6aLy55h7kF86RhJfFSX5MfTnUsSMPjAT2dmcqHjPCL9VqMztQoUYuxK1pomBN5BRNzPyn",
  "key2": "4dfafDfYGLwstcC9XkJn1zXKDVafrLfT1JkKV11umoxVYZ8wrN5aXf5MXe4YNnrcnba8uqNYWFe5JvQm3Ti83Vsf",
  "key3": "63Xo9JGSxJQ1eT7QndDpB4N3zGzZKRQ6raLJaDCXUhChU7gBLb1mm1W1PQueP8VKtoWT4Rxkp8kcG3fYmT5BuzrS",
  "key4": "5H8MWbg77L446AfXYNwrJHmGRYzFzrBkZsiobRYtGzHdsaUA3NGna6vbGgJ4JBeQivk1zxx5bpf5cWXCh9ypxQb9",
  "key5": "5E95fwmhJVP6YLSeLqn4eg6ebveRToVtXPrjYz7rtTaduTTHvn9iRKmHxYBaRYweEciqR1JYXC2NFqfPGqD4oDK5",
  "key6": "65PR2SHyWv9EPh4VEqDWZt4Mh2uu2nZyxmGqsYwSESmF5vcnrrYnHFGMUYxu6gQV2eUyKdcHhjeaZjaR1DDLLjSz",
  "key7": "2rWGXJQDVVjMrHdAUWjbC5Tx6GLVXcHe1qcG3JkU9f8gTfTwEDsrwC7dVgjeWSVy71PeGyVNqY1myNpfxsQcac1B",
  "key8": "2QCYfT1VPWjkAUEcLccRTw3nUkh1sjucXXNo2TtAHkbqgpoput77nAhXYgBZFd7Yq9b8tA3ou4YThePQvCWoKNfe",
  "key9": "28XimrECB7NA1JaFviBGfSHU9QCp6iWSGzgaXkS7SpZxqz6ihZLr99X6CUuSgkv1Ex61A6t6S4ZNEbKkjXNZe9xG",
  "key10": "3KQj7M3TmcRw5FN81bZfanptR3er1B5iWVSyfMk7B7PGBdPUzvpFsMRaTKcixDdmxPkpoctaJn4dA7gnGRExvYyv",
  "key11": "pm3E8vHaMtWrPzdY8Q19Uuca1d2zo5PcheEjtM2YyeH3cCTZGsRYtgcWXSdZs2jgCWu5zhzsGRFs7tuxS5GX12U",
  "key12": "3Zg1VcqUdFRBmH24iJgwnBNm2rEGUEhaM9MGUDc2D92Z1UKTQXSQoHANzVhKwU49JwduDCPbPdoyYHkUKDVmMVpr",
  "key13": "38Z8bUaSFq37iV5mnRokdLem5p3uoV6MtxwtQcTY47rRnYsSHeEhmVkzkXkFnZiR8DjhpugKNyg8nmNu5SFhsKBG",
  "key14": "4zExsMHTaAkVsLuo4Rvxd2fVVxmv9LNLXk7zJJg4AKuLRCBcz2QZXUjaBBUi9Twm6buBsmQMn2ouMqT35L6fNvsE",
  "key15": "3dmqYfXijhAK3vxLRMhrp7r8cDZ5RyKWRmPa5jXNDEfqywBjAHmoF55CRYZnAajwFQ7HWYfn3YXv7eBfsuP5XzBQ",
  "key16": "5PyGZhhai3PHqBfwgQHUKYdzCRHFQbE7Re2oV1DchVW4xEmyAWh8hQC6Y1qXpJDzmmrg8qDtTJRCZrKhU8ZEGG8x",
  "key17": "5UZ17dsS8YqxiCaosrF4Kn8KivGyzzUJS1p7kpcbgzEFYp14fBZhrGfrRQ83qdnkyWQ2C4ctAgFd9jSbBxJgVZJs",
  "key18": "24e96YmbAJ5FkQNbBabXwAbGcZ8rHuBFPSrVaVdmsdSGBVNMo6yRvvf62DW7GqJJ9nf4pVC2Kqp2FwFdk4i7BqMs",
  "key19": "2kyQ5tWyS7sxHa7mDhFrkdGS4jVktGxzG2bHuY4Ee48hJB3mReLh5gXefRwcEpyPG4KdzXdJj6hnWGZs1PiY38RE",
  "key20": "NsBu1VY532LjZPYZdd5Hebm2vkJKb3UZc4RKWdoQeZ1m4F1eWVC5pwnDJFq9A2EfTqpzEHM6kWqj5yNWGMFQQc8",
  "key21": "2aJg2HgFM7N5CVNgWwqLYtpyDW1m9HQtLp7MXA66Bfsg1YjCKXs2Lxt7EGr9vgRnXR5TuxGQ29FjmXcT5fSPAgSY",
  "key22": "4QQvFAguwuB2aWYjPipcDffRQm4LG9ojstA162jWh8Rdk8xXzrpFDwzJX7NH9yAJZ2ZfroQo8JSf2MuGVJhMXzzP",
  "key23": "64t9XXA6N1aF3oJc7Lw9CDNBzN1jpY7XTr9UuwUcHXpKtyfbwZqPmHhaJRVEv6V3isJAEkkB1VEQxmmE3mKqpRBt",
  "key24": "jKQffDHrMFEyahDQGzSDMhpJrTFLs7kDgavFXiryTTBfGaVxuYkiDKMjdQyd9AeM2mLgPRsgWa66F5nMLfHdRJd",
  "key25": "xLkHGdBVf79CdwUrLkd4i1fDV3pCWHy73zG8K2acbhsVu1yPTbfv6ZwdJeXvXkWXHehYLt3dv9UQLUzMcniHGHN",
  "key26": "3hwcwKgb2Jf7BewS32PcJSv3WCxwceiQqhBz3ht6Q2nPGvBLgGmSf6cnXxm54bbTqkGHGZ63DcbDYgPPAg9gxYzF",
  "key27": "4a4T2dHswLC1Vb1At9YgWiGscPpiiSC1k2YLh6984zySRiUzqwDpveT28U5FFQSWmz4gvHb9Z7sQJygtc53ju8Xf",
  "key28": "5oEcbPn9spnHBLFKqcEsHTk5vRkShx79kMWeHfH8fvBLL6y2Ew6KnnN5op4gcjpTfmVeFZBWgEqY2xa9L66fuxzN",
  "key29": "579dNCkixSuuzMHGsP2qUBnWJunTWCUBq1RLotTUhqRismExKKfLBUSQnwbjnj4i5tRBraMkwJ4Bkts2XHPFFqxf",
  "key30": "5YQagCwHjHNjdZQyuJ2utYviJRZf1Tuii1e6V4s8HQGJ9Kw28ERmCLDY5Bhb167bbacZL4Vw4Hz7Kh1NJKrcaagW",
  "key31": "4QFpa11oJtmRL6GS2WnA6yMjjAM1LiZmrZSSLMmagj8e6SnVEMjFEkU1anKht8gxBHxvZBYB4UDASUUMM2M7powF",
  "key32": "2zUDuyxHV5u7SfhQfDbusszwgeVmriCEbNJL6FSTWpAhjyD1DJ6sQhYP3mcf6h3WWR2PYdSmLoda1ymDz952oQYH",
  "key33": "2QNwvtJiSZnrJouHHUayTFT9m6onEVgrX7MMUbS6E2M7sGtHE4RwaqtVLsx9LhhcxFqHJFPKeDzh4NP2xBB2T3oL",
  "key34": "2b7qPaGG6atZWmB6n8AjLJYTWT3JdPvxrzzC7r3J3g561GEGeMAAfUWsbxDURYHKGDheey4FZasLuiGTRSt4dGzF",
  "key35": "4G6SNtc59H8ZVseQwTKytkanrZmJsk2eL3tsDW4j6eJaJLeuVpZA5KBu6iCtFCZTWzTwWYLVhmRkHELUh8DAbaMu",
  "key36": "4FF3jRwCnZ7tQ2NqaHG9dZ7nJQeyGo9vtaEJPgj1wWjtFEnhz3W8neqjFyqsgAdVHmDRB7rbACb9vRgweEhsETgH",
  "key37": "3a1Ka867G6bHoQX4Kc2dYqGDrAKWhnDoam1RwJ73zgK66T1UmVb5doV2fzpdEZ8zr5z7FxhKYof1kZhF5kvjc28v",
  "key38": "2jbsK72jDvVJ4sDeXoZP5BRpySSnoYzsKF5X7EuU5jc29t9KqkWTWmU8KCDoGKfEvzNdhrHj1zji8Vn2kUi1FSPN",
  "key39": "3w1hNCvgikN92x3y4kuf94C9S1TXdCy14aDcpMok2VbHrMZWXMgv5THhbVFAhZuGj1yyNrXcVK2JdkkBwGQLwkvG",
  "key40": "4rhzwkLaKrjjKhuumbGb9Ps5oZVy9w8orE17mU8w5GFy7mWmLpKNR2vKQKD6x8ThQkNtkBfnqwkVzdYMj2Yw4A5K",
  "key41": "2B92iVp1YJrwiGcoEWZLqrkWcPxEnt8Atbm1uTcry9mmJuUdUdhS9bTtqjdanec81Z8on25afMdygcrKzJs5CHgR",
  "key42": "3caips7pCMZ8az5cpySMNzkDqbgizzkXbuQy7gMhnppXD25ThwE9XLgdo9EvoE2raF6GEyvqXjR9ZQKJhbJ6ZEQj",
  "key43": "67MfZMBybycF9BBPXaV88GpNTSPgnsihDizr7vzyZdpEouC5aEN9JfdAsvKTtDDtzAmau9Gze5uByrWFErwxKweL"
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
