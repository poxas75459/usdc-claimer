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
    "3hc9eaBqXyGFhevnmgahu7rEcdjDjyJLkqxyJz4bBNwgos79G2f33BGLnckL4Xrccix5oU4ATW69TA68EuhVUywr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7w4WMVrjg94DzhoWiRgrVtjGPfqkEuA5HYcaYp9d4ZD9LBb73tiRGv3p6T8eQVfZhR3bn14W1bKoYK4dnwTDQEs",
  "key1": "qLVDhjY7bPVQCyjhZHyfEBQx1x9YXvdRmdSQWB2TUrKk6KvcV5HANEfH6gWcBfcccrEYDPhuKVv5xpySu93BigS",
  "key2": "3sLrfJD8YNKjXLBnhsSaZ61SjfJjkYgKdkeMJ969XqiMH8XQnPsSmMd61HTDXqmty63YLDU8diP2Kjqn1dJJQKuB",
  "key3": "dwtb1qzvaBsotnrPFdgJ48e8fNh6emXUbUWQK68X9VgNfZt6EMP6zLvVYCnD3D5SFjCP9TijgSYs7HMwBLquNkf",
  "key4": "47wRtodoQEbu8vj95xryvUqJ4NumxJ21nA8gL9uwfgEAjgGouM6xMZbXxPwsAYuPdt6h1igvtkAiyN8XBrLmuCqi",
  "key5": "3zG2MHoHbCat6yDzKzWYW9RM9K2WaYEQDLkXoKyJZ1ZNcb8Zxm5dNKdkHX3yr3BtZU7xrZGJUoNKR52eb17kjmDU",
  "key6": "PeC9EbQ75X6cqKHUqfabcjrfchW6upMqcYijU3KQAet2VnqD4svhNyMRzAq3CpzGcdM42PQBWZfkHGmdpVjEgYv",
  "key7": "yvvcqkWvM4vnSYbJ2XqEzcwuuBmefPfYQCezuP2etUbPbzmJTyRqPVUhQjxxzZ7BJVbF7zZvW8dTChLqBBMniE7",
  "key8": "4r1mqG8gAGpGnXqLZUbfJaheKUJxznEuKLXQj45VAEbGw3a3FMqW4RBWcuPrrrEkabodKtD3CGwE2aS6sBEjWiru",
  "key9": "5pAYPNGxLofv84cEov4oD5gmSwkR8yGZs41inhBAjvSGNo5kjsF6sDWmaURBQN6YYqrHBP8RUmQYJ1pW2UM7zAHF",
  "key10": "3bZs5zHmEu6Wd7DTjVCamrbEE7YofxptBAbV9qiTD7TZeeu1p3hfyUmh7iQdvNXbqiFjfLaeg3LzvmLU5DBcmpvt",
  "key11": "5m3mpJPYToKVuD7zEFD9JbzKZayvsZbdpMYKzzzyGW6xPqhNvWFfcgYh9dAWeVkXgmqe6eA2jPEQxemfnNicYmJJ",
  "key12": "4zQmVsKqzph98VRwCekuLktixhGyRXt3o7QSqcMz9qPE3HuKbKT54eVLhS31NXE5KQ71S9xYwJXbRctSSh47RUDq",
  "key13": "pa1hFzzFgMeioVbyn3a8dGVrEApCmxLpVu9wjjPgoPV1X1Nz6kdV64mz2z1u4JGyBJjgYX7nASVoXto2nqLK3VZ",
  "key14": "26cAZyguVyyrh1DmDERrkPALZrL1B5ApQyyfrrWeas7BvRMXEtGW2arxZoKYjBjdiERHiDHdHshanziQcW9rXMNm",
  "key15": "4UZr1ebvJik6XtwQiL9spoQSWNqQLKWDSxzcxFyJhpBP5DsHMajn2RqKFrZMDKWkL9dRCQNWHpLcry6dAzuvxmK2",
  "key16": "3aFCu2xgF73n7hxgidqspcpAqNDdGkqG39Jo9aRhF3caLYCPjQPY8LzPS8UmXKFX8EAKaBBxKA62CLUourwEvzjy",
  "key17": "214egUUnf1oCYzot3eSbUuB8GjA2Jnh4p9icQJAmrxvjPoC3sRQn6P36EFtb59wreCXSFxuJSu3UDUmzuBQYD29H",
  "key18": "cXdco7hjH5mUoRxFM9iJKKhwMajK2atSYtxkiLmWASoonr5LnwW9Xnkch76aog3H8gw74JSBWsXv2d7robvR6ju",
  "key19": "nDZZ8epiXSR76NDkyBF2GRgfBbHcXHbh32XCQqQ4oEbdnkP5BMQVq7iJr4UnHSz2DGPDZA8Jy5nk8cxk7hM8wt7",
  "key20": "4YfRXBPZC1asMKH3TujziLMPsJYGZit13PUFXjnVWNQMHgkky7MoXCoiQQ3VgTyVrGo9ybBUqgiWpE8nFSNiUkzC",
  "key21": "51Rpz8ZJG7R9Ut5wUUqvjzSBkHbKWAwZMeqJsHiQEwZN8wejYCjxuvfod8GRzouZmGiYhwhdXJmrUQVT6kTLtf7D",
  "key22": "26GczRxvAQ1soWb9cZ3rsGPqTUnzo4y7H2YMFwkezypMFzAbCj1EpFZeEyrPaMdeadwVLd1rW75keM2Q8Zk3VXUB",
  "key23": "5Frvv6mjkfQmRVTYXeojLxSVR4jGzrUD26DrQqL6amrpYcfNScbGDYQZb6v1MD4sjs1qq3MbBposFD8bV86Am46w",
  "key24": "4brCQrAyYMMLFnTX4rwPKTvpdpX3EreCd7V5v1magZLEoh56acbo9yTQv4nHx9jBW2bfPWpuhwEArySFWq99S1gS",
  "key25": "3SNrkmq4hJMSZA4xpzQp7HTSeGzkn52Uew9RipZn53EH3n4er7vN1ShsTq3Tn2vQfAU2bE1mwwjAjoFbaPp6Z97q",
  "key26": "cQ8cueAU8dCSrwAv3Gh2hEc1NUwgv1iqfwxJmyZVJpiY9w1TNjSxB6C2ogAp7wW4X14gXUw3UTGPuRgWGpncAzr",
  "key27": "4N9XHDdbhRKq5kFQu2PRscLwspQi9P7YpGNNJcHoFR7Q9smpAJK8JbEGjp6MUCGrTAt1KFWoNCDKTA3giJAMrMe7",
  "key28": "4mCJ9GGVABcLxQT44Zxt8Q1tjATPosTnbWDoqXr6qQJXuT4oCBcBy7QQSpEnkwqLxGwXP3fV7EJY2FGR5PRsDdJu",
  "key29": "4pdeWM1B4qmuUfTp3gWeZksMEr5HpYeG1ngWwQvam8bPk1u4NXuzAo2x78x8tiJux4PkskPy44wio8CYUWYz5Dfq",
  "key30": "27C2sq4o8neXKQKKy9E1o478SEZGWXzWDy9Zj8nVApnoYZggWyi2nFQKgEnD5r3AFsb5TCQ6CvH1MNy1JkCRHieN",
  "key31": "4W1NrB482B8M5JNBS2ADs7jz4Dd2qE5nQxhTvAFbgTu9qckSZNTwXxgYRYv2LaqABJRV51o2ejftxfXEZf3DBgt6",
  "key32": "39LcJJjE6bZGQ5K2QUHjT8kVY83Cd4gmcDNhZ8ywH9GycDP7krW2AyhbYizypDnMc3NTfgBvAZzuroLRr3yA98nd",
  "key33": "PkYescAhMTiK9MbqxXN3pUR32dJNHd7pjYhy3JtkWD8F6dEMbEjr63gsou6fNmEoX7DBRdq23QqvJTCg37nzswS",
  "key34": "2BVxMAfnfdpFnzoqbgUQkFvd8ePoHiLix2pwYBxm53SNRgGnXpb1HsnuVo7SGdVsx7iPv1YwTXQKtbLNd1NGnw4Y",
  "key35": "5C1ybPpJuofWix5JMj2UuVBhRKEnREAzp5QmctRwmi1FAYDWyXSN8auXZExTy9zZAydFyoWw3SbCiqX82WSk5FB1",
  "key36": "4hhQYx3YFRyjtVLQWViPkQ2Cq6EkBmN44N4tzPq9mUC9AMpFwnsHzj8a1K3pfLAF5XQ3pJfsj2kkaPsZtMqDYm6u",
  "key37": "5cKiV4m6HgTMUjtD8eoZ3GWreeWeq3oWrVey331n7bRLLoGRZjUf5ULFXkCk2T97xru7SYAg3TzJ663GDvznKMga",
  "key38": "kWZSLFLwRHrk3xKyyWeD1xTzQ1pjv6Vmew48FxE2wWrJoJKXm7NgdiTGeHphEJr9ggLwn1CHV5jnRL2QiGqSfto",
  "key39": "263jeCLbArBL75A6LuJ1cGgRRPfsr4ZGVavT7Y8RW2NpYYFbPXLNk9LoBbdzG2F1DbPEt6cDXm4X8NF2hChC1odb",
  "key40": "nQhEfygWdje2nDWxN9TEf2svCSrMgUwSRS2A3enHeiQfpUwx8e3gFF71cGDujFagLh2m29iCjSzv5Us5gH73FxY"
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
