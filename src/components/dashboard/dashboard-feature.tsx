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
    "5cCwC1spf73s5Qkot1783NbfY6Y97TCg1nCyQ9RWspjQh6a68CBc8aAewqDZXMQTSpGxyB9e3MSG128Nd7jh21Kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hGdCY5tDp3dUuzofpfiaVqciVLPtqN3joqvxGxnBvxxT4RBZT9tA1Jbz8tZFeg57FHg9szunm79Mh4XAJ65Yu1J",
  "key1": "4imNe6ByXxx6x3m8MQHAZEMrLZtKfLMR6VAcjAckUrM3czoxEFcQXFoScxCnf12KZqMGYuBg5kEuKZ5t9BUj2ann",
  "key2": "6YLiq8PnmFZMQopykMh2FCPxR7gLwuLvKFy4NhU6PU5wLPxWkGPoM6tvoyDZmV3D1kpyCKoxDxSCmFbgDyJCazz",
  "key3": "4xAxpwHeWSypEXcd5t3JtMBJynaQVVETtCophhBs4qQ4mxLR9HFEPEMDvc3J2xFJjxKG5Dz8LwYg9YxTb1wkwSSw",
  "key4": "5SCxBgMwhKhvVQ5V1wujXk4qpUNwPp82Hn1i7kzbEGvhxKCdBkWtBBGVz2fuFsosYxFB1dp74uH51bFKJJcFB78v",
  "key5": "23qLU6qSqZEedB2WWPDyTLB4SVK7N1W4iRChTGyix5CBvSQeQEqszijSdhusoDpzS63T3PChRZ3cAQMCf2nMHCeF",
  "key6": "5XSqSX5uYCTTbHz12cTzdDCMUqUrqTv9LssRPub46CjfsVA1pTkhx9tXXiXC532yDL7cVKeSCDjDipLFfEt7UrnC",
  "key7": "kKeaHJ3C3gsa59smTZHHioJqpXXq5nHpyqShYxJco5GesZz4BiqWaNxCWLsF8yPvddCMbNNvXNEaJWUko9P2TEm",
  "key8": "4rcCxwJLWiRkf9p4sqM1TdKhYEWiUXg6Dyxbuh268cyfnvcEJFrq935ayw5jdxgtKUf9uEv8cwMvy7rAVue6zGws",
  "key9": "VzoKDVLmfVYp71Mc8rF1iZJ9R3iuEELJPW1ovj3wJXHAtXqe6nctYbJiLA5jXttBeahL3A4hvnnqwrjJ7ByYnJZ",
  "key10": "HeKdp4iJkXpidanw9kzwAZyGuMsRYy5M2VPdxboohPSxpdgDy4jFjnzG8jeeVFFNkNjwY9sxA2Aa4HjG8tX6itX",
  "key11": "5ow9AVxgGwXJ4aV7KozQiAFcZdVUJk2w8bhWPpqTpMQmTTBivUDUeUQVfkdL4BV5nTqsbC8Ug86QBaxwBEU7uKrK",
  "key12": "gnVkArzysN6piXVAsFT5zYJ6T4iAu4iTfsPf57nqJt3KXUksKP6Pv5LVwPiAyMoVneKzE63YsVCvBt4LJzAbPbx",
  "key13": "AyUT3PmdxKhAoPnyfNefYiVjF7yR3Wc8S6K6cYY3znHc6HE4uqjo4AELZmoVPhTp8ntj19C2VE4yypz89SvhAe7",
  "key14": "2WSv4uydxGB47VhwCdkCvmniSWhjtfi76jScoqgHUUwZU6Ef4EnXunyngfrUWsH6i455Twk974Uj9xfhdcnePrA5",
  "key15": "4n7trUkqk4YjmFCNQADS8C5VM8Cw8Tr72G3tZTezg47x47vGHa8mdU1AwFZx98Sah7pEWKaNdUmgQ4vASibcWqqY",
  "key16": "4yZCSY8fNZJjtsA8gxfbg2mRxQ6KjSnrr7tA8vhc3tegGxFhZhc74pM1BqjAX6mdWsN4neGVmpUGtWeDHjW6vEGa",
  "key17": "N6sQ6Rb7EV29TsLwHL8XS1jAJMjpeTPB5TZEZ7pkwHBykkVv2NokboWtMaDYaMhqtzWeXxVrNgZwHS6QerNkemW",
  "key18": "2mFP5yuvkHhNEFAgf1BMt3enMc15Dxn3AyEoLbkmKDboMKH3fET9xG8FdYszfhUQdvoLGmrjFPU9qMM2Q4KKFbXp",
  "key19": "5JSGytSSGP3LKHjqCNqK7VdbGeCCRKaYKBhWkfQ226NV5mTg9rTRCqCThLB8ErJ9jPhKfQSYPBmPjiTRWZfvq6DU",
  "key20": "4hAwEPpP7TsduAGoL6qAAnSMU6f8WZsfv4XP3VkrbURQw9WCcqMWTZWCcAuD4eMyPjF2bi8g1EgVZENJ43F5A2bV",
  "key21": "5tWxAU9kBHZiJNBMHbk6xuLB45i4jroXXJjZcGgxdkmsW8Cy2dHH7ohW7twXoCzMxtPTNdzzEvQRiSYYCcYhKW8W",
  "key22": "VQhGdHF57aS352XD6xfDWeUMCedLWGjwNuszRy1kFHxg7gXCp37gb3wUqkKG1d9sn8ZtmydzXsF4hxP5mckMXa9",
  "key23": "2ttV9hEyFvLCBC2UtCukCiPry3XPD8Q6ZJ53o5KBf23TVVAQoyryKjbpactkYxU4x12b85KKLSJuAFxMRZeD9C7A",
  "key24": "ucHkiEiNLpoeNQmPrKRhycniepK1BU54wxGfFEQNo5bF59anpMfPCkwQHbHkJyC16iYxBc7kyxVn2JSbYxWV1ZJ",
  "key25": "2v6wUvbK1QLCGvXCRixf3FD4U9TopfNvxR6QrXBvpK97MbNfuzSXgW7RAnLmXKRFnDrQSE4aKZYxsTtMWrqjHv1X",
  "key26": "666NSb9HYE6Yp7iAbFxjtKku5xwkZs18tKJzXoFtt2SwYB2AE4mxPRZKJakudyAbUCZ4CH7jYewbHSSc6uNP6whU",
  "key27": "4Ny4tTj3rASXz8FVayeh1A9KBdSTuAXvLKWnYWaCp5cfJtGJZmKyHdsJ6BAbimsXpDfe8o7xam7oCpCKprgVWGYB",
  "key28": "5KsVqnN1suS67Mj2yagK673Loza2L7MD73NpNidykLMpeuSYHsSgiiAfiz59TYUa2Kd4PwZpvMsHzsRT1Nrvthk9",
  "key29": "5ALjHFXejgQNJmURtgUFWcSJEMZVm7QT2ELWcF4jvSpAkXU6hCXLz9TALjKnwfuWebiEnHp3nF8YSbHskBoEq6Tb",
  "key30": "367of9P6bbxiZUsBxThMtKpU23gXYqKyFvLQWPjRfTvim4eD6zCEEu1ZA2Ascww6A95WeyAHST9pMp6Puc1E4v3B",
  "key31": "TC4YqKZ8KcvLmWsoibudaPufrsEXKaK9F5irToPhCBNGv9xoG9hNE26gQK8hac5UvL3nYnmDu4orBdyaDogp7EM",
  "key32": "3ZN12t6tXwwA5TpZKZLkpBSARxWTcNVDQ17m9ftPUxF3fyE3wzVcAyCnNk328nbWdFudUJnQbQRtWV2K8NQQtooq",
  "key33": "5rnNVRTgYMcNf9Q4uFVe89aDkp8CBKfCjr4pTxCqGgtv2gGamKWyJvUcQNHZgBsyLLTWdzDHhoZC3aTtfbUcM2VQ",
  "key34": "ZspqdR35wXEaXaqPEUWD18QeTQq6VUhsY5pkVAmPXRAd86QuehLwu9oab625AVvsc5fJsJCRP44rDR68qZyHFna",
  "key35": "4p3fuEkBjar9xWCo27cbbVe6qnpHjzN5WKFr2uu1gmUKjPEUittHaiP7TopCU1buQp2A7XLWuePy9G5xik7bNBPN",
  "key36": "t9NFdsKtxMJydRwUociL3tfsja1sWJKSM9kU9UD9UbU8uMSDujfscd5onJ1opNy4y5d95ae2Lp9V9nu4EGsyxRy",
  "key37": "3RjeJLtMNEZ4MtotG8AJ146FSQK5eQG7FKFpX4vFYsxo25wiwzCDc3P4b2ZHVtzEWTha3i8BoNFQHkEzTmLRRfmg",
  "key38": "M6hWESWRRqhtHwyV1J7S5R7nYwtfVWzMG2FnuS36GUg82Z6XCmKbVZNs4ocaJgkSyHuqYCN6R8pgBQWxm1YgJnL",
  "key39": "2UyYwxkmCB46Fpr2pKMY9G7YKUryYYcWNXso9igFn1KECyBhsxKyCVUd4nCnkERjxBFaJ2Kg3na99yDEAC2aPhBo",
  "key40": "ftADPDtCB29KuhfQ7v8BVSRWs2v1N9nL2JFLKo3QFV6EnqLZExQVkGo6PqqwAdHEyava4AzczVyRNsz5Kp12atJ",
  "key41": "UF8NyfW3z2Y9Tfj7MrE3SHNhstiDTwJc5S2cExCpfTKD8Jw3qx4WJVidjPUrTYM1okTvZdXmbfFEbTS2UidF7nz",
  "key42": "mpA89TZyJSG5uM6tYjbYqTQewXGkWVn5ULKoKv2ZYucFi83ADGptcabATWbP4qQNo9we9tQREkySbHjs8nJVJQd",
  "key43": "4A2ySFpK8bCHsokXyawRHF3U1HfwfzPzvZFJ221PVSAJSLpcqehY8cmvdPY4umcxzv5phgevUcjj2WkmLRuGr6uG",
  "key44": "24JjiYTVHJ6oXJfp2hcqoqPUuGRTxm3GidKNXL6MFVzmfHu6GxfnknMBorbQp3vvQnrfZRFem5bPxF2JVQ15xrkN",
  "key45": "3xnNx77HATjx4QAkGWhF8iUfvp4DWNzZ1pG8j9WrmBDsZqqG3u8Fu7poCF36x4rBnBu8QpGbqtCLX3BNP6Hu1vZj"
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
