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
    "5ZhUbwRxVrdxh55MjhqoBeue7cYz4UefxumR1CmZoZDqArS8mVXPVesiWtEiJuBzf9rs3JrFjEEqe5jXTMsHdL4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ErowoiLzdKjg2NhunNML4jS7PQY5gn3Qvy9pFi9SEVAVTiAq4JNrnVSqEPGgawS28tKaCo5VJnhXPXY23mJHyz6",
  "key1": "5cTR6Q2aGC55JGqAhEG5kTkRfQA6xxQBeyi7u1HQMDvbLjMxoj47Qy1LAhkwwFqt9UFacGuGfceHd6TNXN39mhNK",
  "key2": "634JsmYnura2gU8CASfyRzor2yiSC3NvFQvwzPhQ279cvmJLzTHDkiMajjYHE1m7Ft6v1KEP1b6ffqUV5aUv4UjH",
  "key3": "5G39PAKvaALkNs39oxSSYN3nFZMZabHVsmSx1vNsCaSGL1CWumEecZX5nj8aZnB6PL5ZkXwvKBMHjwppaHbWEQ8p",
  "key4": "514kQbVgGYGm5BkvugqAsmXSrihwNet4mJPsRWTsVqn6JajjV1bPX41xJj4pESZ2dJ5dvmKPrPtpgpQQbiSJTNVn",
  "key5": "58JgAKUt1w6C7omt6McafL2DPPc1FiKZvRRVQi6cojD4a1soRDxHXVNKfNYE8FMe1i8ktxWi5piirJs9zpHwEBcK",
  "key6": "4rPbxe4GHFSfFCATNhGRS8TTG2pGTejNwE89GQt6bhz5nKzQjtvQmWNdfNGGMg1XuwsJnQH9md6fFFsajzrXuuW9",
  "key7": "27tRfyBrPR6c6cP6L5moFMD3uLC9qaX7nzMWqNoaaJJBfSvNXRMHNUsuLpUcXqBymXD2NR2C5CXYeNRHAZdMwR2k",
  "key8": "xsbAf4GHameaECns3RtsY5amGbNgqMH8vdizMrveqwmyYvseVRrLTTLqHDEkh3wzchX37VKnWJ3X8R4YnYXnMxZ",
  "key9": "4wHffY3TpAc6gidSb3z4JrqXDWPweCp2PL1D6M5TonTLG37913n7VzqXJ8oi5Qd52BnyQsHrFVYmYu6vHKjGxvQa",
  "key10": "7hBdZBarwdfNJ2BFmz9ZuqDDsfqKhTcrFhgU1Kn2RBsABAaDRQdMe8N2yizJ9J8L8dovT9sYNZ9KUC9Gce6iEGB",
  "key11": "szYZjqBEwRbQYNJGmuUyG3HN5VTfN2rWFq1JvFsJufT5r8csb3na8jri2QwSh5BSqpbQ2SzYrSHhzcBtyN3sbk8",
  "key12": "QSACGf1WcHnh6WDQfvmNEhJTCtwa86XAvc8D9vFFHquDNRz7dHsqNWX13PZX63WfPLzEaBqwnKeMKHzbRMwvsJN",
  "key13": "4GNq6Bcz7FB4GuNeBMKLMxedCW4LMetdbMzcGgGoLue97W2n2ySMbfWbDGfkj4mBBBWyigc4oDwQFebzGq8KB5X6",
  "key14": "2YzuLFUgUoUSaQstCwPunR14EZHwu5XzYsP4KrjbmTmaDki6DJSrm4eqYDymDo4uxL7QxmdAF6f4BWysDAQCjY4R",
  "key15": "LJZjSEVcZrhYZyWxK7rhfK6Nd3M9ZY5DfyRnVovMfZFX7MAnydwgwys72o8CXf8A1GLW37qquJUqR2UPysoz8bd",
  "key16": "BmnEaPbL1F1PRzBaMcwvDJxZSe9d1uNP9Hw6FMnE9Y8gCfvTPZrw8yPeLydLCYVq996jD2jwrY63caciVCoZ8jF",
  "key17": "4hSADU3pN3MKApWtQeYVJdd8F6VSZbV3S7RPYxuJdGqjq1Cw98eBSpDJ88jE51cFsTQhVc2w8TBK5bEVFewJVGPF",
  "key18": "2jLD88J5BeQRi74GQCKW73P7CamCW18CiFyEQtohkWvP4r3Uc3BbCuU4YFmpmzNYvM46GGqPy4htwEJKHwtuZpdY",
  "key19": "5iDAcCcsu7cf2sTdHDPbApE4eRvkCkLxyeKHAiqXLtvAS5phTJVMF1ymeei3WrA3i6xyQpwkMxEfwtRJTq1ycTfj",
  "key20": "3hJkAwEaTwrn9ys1BtnVuDXRLveHrr5vVb7cGDg3wbCwk24sv9Cqjmp2g7aRKNS6zXwxqQQxXmwPRYcJn5A95x7P",
  "key21": "61hQWLs7xQ6FnJdDYir7NndS6z6ZUS1r1CkGyMJmD3hK4fDy7b3Jsy6gmUCo3SAKwfrHwkDJUcCnsWWmWPSvMqa",
  "key22": "4J9397uMC1uzMq9NuzEkDkwiGEtTFeAVbVPPhzgb3Hz2rRRAh7sFL9Fb4rtvTnWywDPZ3x6JSEi5fvkRw5eNgLfR",
  "key23": "4YqY4rhbxKKH8Ys8wL2wZEyGY98z8upXf3SNwJ4CYQnjun8zTQKadqTZQjxEkukRKCqJT3RRX2K6tXXc9hcJMLmP",
  "key24": "jn9abJVinLcMyNGkccP8rvirwmVPgvSR3RbmFJVFmPSvHj95AaqnYAto86LaQJYd7bztjJwFiqM6PQ1cC3on7Nd",
  "key25": "4ukApnjcuHXrwTjQQAwwN6mGaA6kNjPL1GZsRLCJeBUpTg7MLtwSBCQbU9qxUBx9y1MfBH1m8baap7g641B8DXV1",
  "key26": "CZC747tYSJimeFrG5XytbWTFDPtWHuzRJ4in6zpBeqEaZM3GMiv6fkmDJx6iNbfnw8BTjyiA5YqaRnCa6uDijxx",
  "key27": "4eugqT7uZqUtSdQozn8iFwuiHgcJgWQHCJtMnyLs727b9kaMxbZRsqQNJ7FeMpJ8GkLkeiWgTBpMMm2P5UG2ESBE",
  "key28": "2d7cVuq6rkVesFEoUdVHkc7B3fsQqJaEVERLJxKxvp3jQ1A64Ppxe25m9uEnsK8jXM8Capewswa2LPxfHGFL2DZ5",
  "key29": "2PqEMV5XH39stTEMsPSXmy3T2591swcVJq7JhZH4MK8q957pqrUwXnoTRhMFKrDjYpHKhevsME23qXVJRW4zMEo3"
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
