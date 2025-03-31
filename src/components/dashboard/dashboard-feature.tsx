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
    "3jdfu9wrgYf82toJbQH8L4qeCFDzgS7eXfhkKcbyhitb41UABQcD2zJgGWv6ZzLnkYGtJu36ihsvnVs5GrJAPBM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zbnetf5W6M8rmjed3YgDH6c7MfooC1KRAUXg338YcfSY4uxm3bq9LAxZULa9eJvKA6AvWGn6NpxSaNRNmzQQtHU",
  "key1": "26SduAcUZ1TQxALohTsaPAbxEXAD42NS7BpoHtpXaYH6ZtTLmq9Xhd94EsiUwRvrq6txu32D31pB7LFdkFtKEj56",
  "key2": "3N6UvGUSirVskSh32Q2yVzKSTiMaJvCVjt2sC22ZXDijQDY4w1EYwHSnAvb9zr6F1X1xY28L8KVKFGg1CQuejWpf",
  "key3": "5c1qdH7fWF49NrcV6FrRaPkTwvCb1r8d22353HexktSj1Tc7YxmaHz5HKCCtmkHB7CYgAjHX87LzMS5Tq3vwWoXb",
  "key4": "4jRiw2brkSt8PMCuswBpsuNQfy1455yXKyWJfTThKXN7SV81gfFfgLZcmTwiD1cULh3pZpzUK7sVsrAXVHU7GE9f",
  "key5": "3F1ZwZEiFuuMVYv5hE7zMN537jXwFtdibhRWxBeJYAbucQiawcaDWSPenE3W12KHXwwFTTNFHXsV2VwyEBgdNKUR",
  "key6": "EDv38tM4SU9cjTwrQU9YfP5tjvEiTguxrRaNHPCJPN33xByiCJbYUevP2k63JCvBY5C7mxBcs61B3FD5UhB3LVV",
  "key7": "2ortzbRdW3xERbCJWWqmLpPdjJXd7VD1M4iLP4gtpskUhPhdeyxmuLnzf4cubAs6Jey5fs6ZJYf5Jv1bmpvybZFr",
  "key8": "2xrLpoYcyCe2YCQUfqfR9RYgPdXRFwjfosxV2b49n85zvvxdjfCavSizoJYTC5gvrw8PZNUuLkM9TH7eNUYPV1iD",
  "key9": "4xoL6iW8ovPvRSWepm2VaFrv44iePJaK2QGADKVLJLwjzPKJoUzFG1r8jVr9brvMtQ3BZmVstmtWop9j8kne4cuN",
  "key10": "4xpeWJk5gQHHzJ38cUZ8kqMmwR9mazXxQtFrSduK3FEcvZUYdBXqk6Wi1yS1YXzew3brUSBFE5xrouUksR6Y9wF8",
  "key11": "4pgShHg2nTKjRztxsQUmtgPWsYZd7kMBMFhsq42Ym2E2xkdQcTLzpjrJm1kMjnZ8mMRTc9peVkwnAeonk3wj2YgT",
  "key12": "62PRPSP9hQFGkzMJEeKKHFuKUfsH23VXfsDmpp7ut6b9agy3d7eMmXp5u8yetdv5GKmtgd8EeqpTQZd4FXybQdkY",
  "key13": "2UD3JUfwjhyRXzk1AC64m2NtsdVgWmv2pYrZS2nEaqZ3ambyaZ7D7KpvTzrwoYEGdbuYw62fYXPeg25HHpYiDiRj",
  "key14": "4RXzTMv6MDj4Xo4QfGXnb4J1SZFY3CgWiVPnQkjHH3rSHY8DqxVnYtLu5dR75wAc6V8JMiTgpi277FmFXpvT5jys",
  "key15": "4S11uRDpsGzSM4fcWiu2TCcrwzP7dzJhoFmd9D1CWh7fBc9DzvcgaqbhKh1NTBmrrV2Je6CPmFvK4iQUEzahgmPa",
  "key16": "423ZEtgixnnnWrvA326zCN9TUiyy2XXSLvwSGKDjZdya2Kw6e85DViwDv5Q1ZUNcrSVgQ7HcujTjzXu3yA1249C5",
  "key17": "RvnvLPQzY6mQDr8NjRM75THbq7gJXJjfqXnxRHkSXXDNeXo5WU4xiKBVoWVdjmfHb6dqmFMnFSSMvk584G3DSQk",
  "key18": "2KfmvvXXDnh85S4gBjCv5NYHUMCKCCEhVVjMJdAYW9n1eWgT4TuLX43g462TdWD39snDBHkXDQELHrX5gtJfM3uE",
  "key19": "5NPaYgtor6ERCNbFgWNwYXBEwSEP1jNAfVrVG2EcC5UwYiAnE9qhtdcWokNAkdBLZ4gd7F93WU3jnaWEbd6nj9Yp",
  "key20": "5wzbG1fZXTR3QffoyF4TpjsAnLfnGfqRVBur9ygZsatGr5MHLG5JvDTG5TVsxeWcwJ4GnPYmaGPm68gqchZzkEB4",
  "key21": "2DT1A2ezdcPXy9QMUFS9oP43VV2gSUKrnAG3M9N6CQU3AtibcJ61esDwBMwtmiKHiGSwiWMpCzAAnMi19vWoe7Sf",
  "key22": "2Kt5DEqnaLb7bBG6aEsE6pRJ9N6yGCJmpTNBAmQwGkCHk5hLUNu2U8AG8tBSxDSKtsw1MRKZyRyXXe5AULDa4gp7",
  "key23": "2G9hGD9VAKrTqskx2NFwEkGMneCPg5zQc2Aug57wVmov44yxiSXC24kV9KBzx4S5E77nwAzcpj5XUbX7t6idLkGp",
  "key24": "xx9DoZAazTnooLNTyiWUBegk5sE1ieNMHSNTxuCK84rcHWZr77PL3aFRZzqt1oVpjjwSfMsybfHqFbkTZbZaqcV",
  "key25": "3w9RewJRdiqBg9hWcSyurGvYLZjSGdqvRmde1GsHyKyG2uF9vC2JYeNmecusd7H6hMQYhCC7diu9XK9QvM2jEf3A",
  "key26": "4DfeJsq1ZhTud8Fn71GpvD5JhXsoE3Ve87ZuMFiJRFuvbV2rj5BpaeejpDYjsw8tfjV1monjVPQveqzpGhmHHopS",
  "key27": "5NMmzo7ECKEqGdHHTNQFethLvewjRGS8pgwK4tnSWPhaNgZBCxt5TzQwUx6w4vvC9tkCQW9p15Q74XqK4nqG6eAg",
  "key28": "5hZXGAAsfwCynAM6Esn1QWnyZZ8G96ShuMFmdTEqm1QusDakAiRvbsXSTK9ke4VQA2GLncneCLS4tQUuUvL9cRXW",
  "key29": "5cTqBo2bUeVHmhSnZtJhvVZZgtDvSmV5kR37Wux1kqPSghSZDXrk89e8pVu9f6ZdNFo8qcRZxyvrMQvk8R3LQbYb",
  "key30": "5h8ieutVKDYsuArgWpdsNQ9WrQhbQNYi5w4gbnarkU9bxjEcsmFbPUHnWtQttTy21D5SgNSZgq1awBSo6JLJ5dmZ",
  "key31": "5GjNBtouPJQrsK9LnQMUqt7ka5YFgpwQ93qWPYARzTVbpRAW9bUgRH4E1sKJJCeBc4Q2FiyyK2JePgh7xwDtD5xs",
  "key32": "61MfWY7a5PD9SCBZFkrMNxJTrgK6z4KHQMVud78kUhUgnu6YvcUD3Fy8kZVcx6QneSweymf4CJvaj8HXCYso2MsC",
  "key33": "2eL3RwEsFFQxRbxQZRXgGwybvyHw7325vsc4eUjEhXBT8dbTFJFetfQrR4MMUW1gmtj28eDbubqKnFBvjjs7Fqtm",
  "key34": "5b16spaV2AkmmBtSesiZfcyVTBtWv9q31wSnfx7SKiMwa4H92Uf1sJAkJq4Q3KmiMTApirzKaQSWRwC6ZQzzgru7",
  "key35": "5tut7Nb7GHhvXkDVq4cSfixMMLLCoMxxQqb16HVdcDUdxtjcSF5qhr3fJNp49xbb8HMtFTM6a4ZYM21YrAcicWxg"
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
