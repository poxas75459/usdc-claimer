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
    "4QuH7KJ5D6HhgjAY7aXWJNeeLfKm25AaMguRuUbiUF99dFxAoneyw3NQSwn1nh8P2kDHpPX3J6r49jqBzVnHKdur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32xPEyYZvHTQ4zQw3ZAarka1jQD36Dy1RCTCad9V2VWjWZLWjVMXz5f4YnxjdVtr5QgZgH3dhDGBJxga1Q5dx7wq",
  "key1": "4EQ3gpCcYy7jGe8rPaffR3rEW5X4AToigTrPfBfbCZLzSD7JhGgT1fosdvovqTN7yTS4yweZjFJsyuHrbTc5F4W6",
  "key2": "4xTEdjj9PYzmLpWefkYZQ7R82cCbvq4xyRrz7qqstiHjaw9gnXNRHBUM5XKCwtVFuHNtb8o3xHmaNshfFcSTDWsf",
  "key3": "QZrs3ja9gDd3CFuiA7X59ztfsgsZiFZtPRuxcHVLCwSyi3eRrpnq1vKeLGDQ1Yjg3tbRgW5vDUZy2HSfxQ7xkXd",
  "key4": "2wwhcnxoeFAfgWVCguQtHhE1vNL4U67a4UTXht35Tz7xosANw4VSWJkwrRjRuNLAHbJjTbtcwRiDCzw64atnF2HX",
  "key5": "661vWF4zqVwPc9PfZBfxVd2XixJAum2AdJyTMgwpWgcmtMrMPAkA2Yap3CuAbbkRxdCAv3ui4PEaZy9HdvhVi6gG",
  "key6": "2wtMHUAqFFssWgmgTGh1UrCqTkLAjJ3PS6HzZQkM34JtsRGq1nqSDKBha6QvaPMzDvJb3zJfqsDAwTfKXNDBuJr6",
  "key7": "QLcaZXvCyj1jHR1w3KAV2GZh4u3a482BUQE8KPuUKgPhvyRv8QDC2jVQjnqyrEZ7JT6g88J6ae2xgCy5tLdKZJp",
  "key8": "25UXT2Ws2CEQddZg8LPU9ZBp4yf1B4ghbb15w99mGWkRuDEGPu1d31WW5WMcu2rPcjhDv2C5L7osdwJerZGntioA",
  "key9": "4FK4Rn9rGE1MwWoELYnGpM6eE8RpuWU9oZjkqFmV15jQtZNyDc91BXurfCTk2NpXx7qRagurC5iPYbUNHaieRAQw",
  "key10": "tz3GJ8ejcJq8JTkCaKRivt7yLyTVmSGNm1D2U4usHrhGjG6jhsZXvGZzGRTYx9n174eFY5NBatPHrbn1hLiP15g",
  "key11": "3DTSGK9yj6xQ8qfXrEFsnvk6bGcUrV6YjYFX45oMfi7mT6SpBAup8W4WH3UdkjBW3iwq3bx26TdQjVz65FuoqNYW",
  "key12": "5HejuQBTjvNHKrn3jp4RvWAiNnvDovNkA1P5oHb35KYoQDQkHxCveUHWGTBNKGceut7X5ao5m5pPgHUmxyv4vki7",
  "key13": "3RwetgX1z3VMYEhiYmYTMEckm3dzR9MdY115uRMh9We2MevEZbnFcqecpEz5Yz9W6tW4ZbQZy8rB88NReQNGLgbW",
  "key14": "xQyBR8Lp7vfqDw1u22i1gXWs2v8sKs2P1uBKXCasMYPCcacQb2MVpMTdrBy7CJe8GGXWQUKZaRGLH7SNQTfsWep",
  "key15": "3owXXoeCNT9KhrsMcX4NXd743gpNfBfB8jJJVFwBpm8Exhja6qPvoGCSrTfB59jpMEAwJeo4J4jYDUW582M6vyY6",
  "key16": "5Qy2NfQNKt2zPtqojUxiujR27JSpPyBLLDAreHPMmaMpmGLGER652kTEPjEGikxHvYmr2GVNiUPRhw2XKpnCMqod",
  "key17": "3LfBgpSWsyygondnzPF5Pjok4yijkfPQSmzCwFQe5oVnL2Y62QePBu9TnecHKCW2dxhgAxXKQJKLmAfdKumVEuip",
  "key18": "4AkW435ZQZfZSWbxdtQwhU49WaMQibifd1ucfosPZYhvv1UtRipYrUqFP7PiQ7Vntgf2aZeRVaPzV4qVsgaa6q5L",
  "key19": "2UiMqyHQd262S4PEXhMGvtbc2sua4ZiDtmVUYdkdwZYS8QMKUatC6YBW2rn1Wc11iFPt7SpR5cwwys2pdZJr6Nua",
  "key20": "59WnoMwAbzUDgtpShZ1EhfkV5BdBYXiMUScdekaJoxs1WpsM9KkD1adV6o4ACWp8kVbhtF9RRxLveUiE5fCYNQgB",
  "key21": "3CAKnE6rdNfBxD21svvMCkLapuLTWaj21JgX1WHdZwzMaA4B72NXn1r66XTS48qFaiUCz1FiAzhvJVJNKXbJ2ccL",
  "key22": "5zdXveZxqZCLcWWEGUacRnTa4XvwkREJa2mkjicQH2vHFMYmdtTWLKdKpvmUPo6AFNRqQjntiiXH43YWPkyhRp5x",
  "key23": "WBa5KqY3upq3DoPqwn75Q9rpwBaa6mFx5rDFNcqs2JZWb2EVs33z75c37Dr7nGjM3Hd7p7sD8b7x3wuK5X5tRwa",
  "key24": "c8hP3rk6H9rYuAXUnBYLn3J3TeSri53toB2TnVg1bfUwcG6EMg4RMDoTHBnqVKUJfPjNLv8D42qykPtprXGoeka",
  "key25": "3hRitmmv657kFBLNygtAw1dEFUdUpmm5J7EGDG5KQvuxycVJmerzKQBu3WmtzvtcXHuT18AU9dNAXiQA2Byrr3Sp",
  "key26": "PqkvF8k83LfeP646dcztbDcbNGSwpet1UWDMcU3k2VVLEuq5wrMp7GtWm8NSFHvk4VHsLWoX2oKs6Dpsckc558r",
  "key27": "5ELGdgVUb1AMytv1o7CHoMnAwj4SPJoZznkffvvRbivdqwYYDxns62xYUY2fuKf7fRZfgPj8o2WusyKAvgiZJDuu",
  "key28": "3NkVLNfUtaPDVCvgyZzc4RHPwU13crPwXZbHdzH6zPkhXr36bnmGcwhMQ4QhYtjsAWXJ9A5wWBPApg2wUXHUiAJx",
  "key29": "41mg8YhiSE7xVxxdkz16R8VNJZCc1ea3opBhNuohQJ34aaLuET9B38EYLPvLTkWi8KK7Wq2HTFMZx6MkuRsi9QSu",
  "key30": "22K3GFVYzeDcxfE64kXC87A9DxNowchz7pA7RtM4xBxpW2o9k6kQmLcheZ2hULFbfzaCwgKdEMEhZiX5mMcCw7tX",
  "key31": "qfJjaZZXqJZi5GZUwrHiAixuDYQzUNo1My1U9rWtUBAgutALMuyFmARmfJD55s5NnKzpugBhrzLHBkfdQrdiJ6i",
  "key32": "61azEdbwPeNMdHJQfePmxbK5yY7HzqzzbY7f9TEzAM6ro2CdHTfJ2hsu7gEf6FyxzjDppAtHMjfr5HhRjAQPB58j",
  "key33": "29wPh1XZk4WkQ6XpK3jvL1ASG2j7q3159saZFaz548Y6WGJ2YHXmG7kR5Cv6GYr5Po4HVMXZ874AXepxBr9Ni2nW"
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
