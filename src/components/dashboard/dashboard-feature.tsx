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
    "5WCfcVdE6wH7z6BnGta24BBmeuF6CAzzZj5auNBtcAjtFYMPE8P8B9CkX7ri7teBm1ioEnHSwL4vfbBPS1QttDMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZwNfX8KBmboGCP9cToR2XDTYMrd6bpfjWWzKC7jU4PFZ9jJmmoEn27E6DgVM9jAscbUhPb39deWmPXvVmBPxTsp",
  "key1": "48nvX5aNjwMHcETLEmYgCHYtXkr1qn5ZgMSwqmY3RKoeh4hxnwvdsR765miXyqkXbJDJdDzM3Dt9HUcEz9zi2h5r",
  "key2": "63hnULv35A2QUwuVGdQ6Hp1vCbx3WVgTN4iT6eyN4TzzRi6SVBoCVsnN7Xx42HvgqhfYg4bE6ycfUvMMQV8Wg1qW",
  "key3": "5WsoLC2oFqSNhAe5GNtfNQCNuvCGBMMzELa2rQ171iJShbHwuCMuGtK1J1vL5mWfygWECRgaYnEJC9mnBR2SdAFE",
  "key4": "5Z5oy4tFLWfBspvP9tNkYassdjfG79HGNt584EKTXSBiGfKr1Rk8sk2SJfZNQJwBXNooxULyhy7ao4YwBaUKTMon",
  "key5": "49anzY7k7hYciyEETEejyRX4C3MJTLpdBTKP1WuhxtZmgX6Y5TNexMGV15ZLUBsu1rVugJHhWYxrKgBUTTXv4FDZ",
  "key6": "3eandZvX6gqmy5euRJMcsQiREAgY6yduzZGV11W9BKaKZwUn9r2iaQM4zbFnuvRUvQPA8tkQGGGE2jMSYQ5DinVQ",
  "key7": "4BCLjUAJkkhCiVchD6TE2TDEik7TUNsPtKtb2XTxspDqTMKSex3SnLBBUnDXejSDpHWwqmRVviEtHgNZhiaS7AmL",
  "key8": "4bsbTZZdKZeb1pmMmPgetntzgWbRwyJcwEFXJ2hir8hTAemmovXfTPMCPfNE8toNQaYKGgEXcraMFgGuhvQqG8Ag",
  "key9": "3reY88G6ufYiU8kwFCMuxeQU2iPqpWCknpS6zAVYPTJXDZhjHLpFy5QsDUrcztDiKFEgigk8GFT1NWFAbPmTuUSP",
  "key10": "5MQWic1wsvc4maCr6NAaQW1fMT8t1FCB4qHqneFr1Ri21pycyz69phqQT2HAAoqv7sttGjvkdXM7fkB2HiUMwDYU",
  "key11": "2XiN8Bym9Sf5aktjD8a63fqhLrWsaNYXfXztDoSttS9uLxVLXsgFP6HXwp8yRgwDGx96eSgMCQBLraDs3pErRjsb",
  "key12": "3q4peXiwmqidNEk3Rrm9ZuEfj3fFHs1bgK7i2TeSh1pSzR6ZLMoFDWszVWtYkrtBv57FXFNNECWbE19L68SjwSCe",
  "key13": "4BwpLwHa2DpRJ9wh3G9Kb95UjAXZfRrQsBDVmg92YGSyyrg4cPeJQbebpTXav9HG4pRe7YZG5H5iJwUewrWSbUnZ",
  "key14": "4hY5WrF1xaJn5WnWe5LRy76DXAe4A7SjwwHw8SSjWSqBLjUAijDPghp2uN139Rc9dJP6DZ9T6UD143gtjtoBBaH8",
  "key15": "37SBLCRzRVTQSuC8xtetP4zDyTUXoYuR68C9rRrTj7D8EpbRXBdceSnD2RigcFD5VegfFAE49UwK3jmpeTUQE2cu",
  "key16": "4xhk8NeWTpTpYGKbT5LDRHCnPeNRbja6txQmFFnauU5r8RZqYu84VTZKRPUbEWRopXDCQLE34VWSMgS4d8bdN4gk",
  "key17": "23md5vf6grJ3kpsFY2n9X7nkGq5ednkczpeqdVhUKesmFZgXCmvnttejyTzDkayouKXAq5FziEtby8zTE6zKhUKb",
  "key18": "3JxZUpDGdDTkP4WccQycL6QT2H499LTdRbkttxNUMjUVdV7sZf1LPxTL2esGtPVdpYNFjCVen4teYUs2tSUg2mZE",
  "key19": "2sHQykQzz4TpcNmW8J5QrEQP7HcQ1n8zYG4b13a6Qw2Zr6UoZhZanphmjLzWF6bM8Peu3WbLb7N5rikMAfi8s5cL",
  "key20": "5FxAie6Ru3WE9aeJYgjooTxVdhQSNCpRkdzA1667dn9nkCTXjH9vWn2w89D28qp57vhJYU81agJwRqE7jHXzGaLn",
  "key21": "4nesVCdL9JDL66DAEqdEE7KRaqBfdJrvJgAEq9Q6Fi1bjGCfe3cFZ44dteYTw8ftfzowgSzMBQmYd7vbKrDwqQfL",
  "key22": "3SuGZ7Fy7RQG8CJKKXX1Bq19gfi3yr5xn2XwbwsznP1397TFQ99QAuyTGqxMRNgfK1xT3MhbzvJ2feLJqoBqTEsJ",
  "key23": "3uFJNwDVZJBkUB99iXQ8Dzk8H2Edye23e5jekngZCFimu3JLhzzEkpYtGv6iYi47TyJu69b5L6JdVAaT7WJU4npP",
  "key24": "41RgtTzgGK7LKtUWS5aFYyRmygbnyyv35TFyinEaUrBhar52Anrb2i19eUCsjpF8zJV1rBzcVLRboS6vXnuY33Kv",
  "key25": "4gi5iZCfqnuwJ6FW85vMVeLYqCaWTb5W7dwL7kMuuMUfLRP2r1FT1ogYQp9k2NbeXnC642QnTPhbagmq67AcLDhr",
  "key26": "nyJSbJCbCRpBgXFiMymzfxGZCvDrPFvdh9gXeBg7f4yVNcQN4Rs3RF86rgkk9WbT9pvTpGDX5sYKdEpNAL2AQy1",
  "key27": "3xJEGqPLVd3pnvCWcKDfLQPbuBiVjfZMyJCKKwNAXQ3cc7RC2W3LCEm89qDyA4rfknzxWj67tf8FKrCLQQPo82Zr",
  "key28": "57QFbFD3xvUBmgkV5rGKUDRFtsyWdakDnqCsPwWtpiXB7ZnZh91FzQPbDw2TM9gBKvjEZwTg2cggMQmJS1E84MaP",
  "key29": "5bx9Wf1fvtMHKHnBm5pa8FSvQNWkS1jJ9ZfFBZJtXgDcQFPj97PaYJxYBka6BAgrLmDdSpYNcSpbEHPE286EW1S1",
  "key30": "5gCGSfyW8FaqehdXWAr2ATZwzjeWFtzuvgmPjB16LuYJu9SKPjvEvKSm8w4fbvRVbxCxKTAKXDB3CQf5ZVGuFdqx"
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
