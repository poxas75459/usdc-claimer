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
    "2WexUUXxxS4twWoCc8agQNFhdFrDkzScaicvRXW9LCZgeppQzczjovrFLTme7EzUtQu3zaE3HihYA2HMdrvDjTU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p8b6S7i8UieCQee8UMu5vz673cyYtvWaH6ABeRXawLKe3kEMaJpGezjWvpzpKxzcDzhkJNLE8o5c5JmEg6rQJri",
  "key1": "oFxPPSwiqXnnZ31MrAF8F6ES6VzUtmWesPgmMwxtYqp8wcSVU7u3i24RpBdj2SuQ33pASsp9eudFxHAZrAQZDzy",
  "key2": "4a45DUDP1JeE1isEGXftuNP2KeG4DxbzwtzBUQrpWyxop4mMKjpB3XRHSKeHAGGNMNrE3mmjvK5NarciahBsXcF3",
  "key3": "5SmXTvvEMVECqYawuyR74tq2SoS9xbiag7B58ybqTL7urm9r8AiZesLHDGT21rGEV4b2qvYQquE7Y1Gfspepnzfr",
  "key4": "38pP3EY4qARa1wZMJDg253xMvixnkVyxB1m3V5VCciQJdDz5wTkv2VAwYMRCFbFKpAbj1xhMXKn2oVWXRkjJHfjR",
  "key5": "wcS3AiojhMer5zktYGZjC1BbVXj2nPca2ZuSZWHXXFfrGJCg1sezK4qd3bRqcNpD99XzDRzKpWVDdnjbpSADCu5",
  "key6": "5gCKz5fUUg6RHsuqrZn8tv3XE1Rh8ywCWTFrdzf2iAYgdxsezKYy5ju4m9vqfmUF2Esr1YncAnb29BJ5eSyqNmD4",
  "key7": "NUkp7EvPt2Y77pkgXn5uAXVW1uG2s8baabD9Y9v1A8AuB2cHpXZzRKg43n6mJza9diMtxj97kbnakiFsB7oGksE",
  "key8": "3GJPw5SWLAXH7WHczqMERMoBgRQJdhJvLxfPh5q114AY1FdXSYkNRH43nV1zCJT2GuyRGzzLyJzA6o5g1PxwsueB",
  "key9": "5oJmxLra6JonKXSqBA5oYyyMAbKusCRaeK9LrYSaHs9cgEF81BFVRyBzJRpX4XSFfTHUpaA73yFKpuXo6cJS6SfY",
  "key10": "4a9QXmfHRXkvyM9Syk1zJpffivE4kLGvgK5HGrHUCpxjGtUUoLM8ed89H6dp4sCyQsMs85aAbAisBuwhtzrr1L6k",
  "key11": "4B8wpgBinmqD413ooorbEYECFtStqejo719j9rSnwxx6Xboj3QadWeVA9mQ5XUYRiAxp3TPeXqKXoWfFxtugEyj1",
  "key12": "3ahBwGgQQsBzyXPLf4V9UBiYcGTqpz7G3NpXQaHivGTzbtQjjhrBVgHHUfaBN7xaLSH7LY2usqfRuUZ5fcggXx1f",
  "key13": "5Rc9nUE8UmQDfdU8LL2j4dkd9AEMTDcSAx7UnGfjYoTcih2Q6biGYvB5eMni9idkx1HNWqsQGffXAs83y4gWDWiP",
  "key14": "4n4aJVRMCnLHjM7JtZ9jLBocEsVcP75ngscRrWWeS3sHhvSAXv2RFc9fH8YmxqE2LMq89P7v9SWLQRWMXRhxxrfS",
  "key15": "3JkJ2XoR49M1zooVjpAy6bf4C6P7VGN82pqiVtofQN1QhfKtA1zaqkVWfZJsPWTKdVsQjfTd874stm7ghJLy2PjS",
  "key16": "3E3ngn2Joz6edBLr9ycUFUkk8mR9RiMhPuJjTtjGjWA7ddKU9Wu6EVS3hfwPDJ74XWqrhg1iLSpLRcd8xbgCMgQE",
  "key17": "2kg8Bd7Hsif1aZQBm4afV2tXpLLbkunabtFJ9huFvnhRvepqkpvaHeS6iYThh9ouBEVytqSCpDrPn5T1PjH1Br8P",
  "key18": "8CSkXAdQyf9gWAMBwDXcR5oWh6eDLAiqTqes7N1EUmp56H7n5hWUWkmFF7GGzUfU5F2LS9Mh5ugyY4W1UXbwH4u",
  "key19": "HwJgX5vWPoXQhLwiNBdQxnAZVxT18aYB9ShMZkCz3YQBDQHdP4uxxDiDhyPSzpocRpjx7HnBNszcbt4DZpZUr4v",
  "key20": "QmP6Pr8vyckMqPzngWRiuuVLtNJe9cwUdu293LDAgjbA61sBJdkGXMEURw4fTJ1sAcJWvzvqYzYMA5jc3Zvox3V",
  "key21": "2FJMSQNsSUB1fimTJvT7bqGXkf85KeiBdKMVua4p3m8o8UqQaFhe5PQCifLs6AjT5SXVAe19qhwhydpBHL1c6iEA",
  "key22": "4srpbG6HUcYieBkx857aiY98ZUSXLxrjT5SQ4T2mUJxnhcfg2oq3bsFkpDBi8i849AStpGqw4MMZbq9t1urHwYSw",
  "key23": "MicZDgHWh2sQA5dYm8Sct1Y9krUyWDUEAfFECQVUvUXTtqQgvLkbR8AWSDXvAFbZuJzYhdCsktJoUTQcDTnKJC6",
  "key24": "5cJXNtds1JgWJyR2h84Zk9RXTqp1FiJk9CsmLavopzjgKpUYpvprbYfCBVzcQN9g87hSsK1Hu56Nc8stxKJLYxjk",
  "key25": "5824QPzWz1ddKNKz3vxrjJYDky2bxSgguZuUZVc4cs86cG16ktjxxQDJnnj1Mez7LPYogUSNCoz35CteDXVKWJg3",
  "key26": "672Heppozh3yYvBanwN49iA1J3rLxJBJWv6vfGsxKzhQuVdse9NymWct2ga1mn7GypZRnpxGVoVSszjHUM4T4zUg",
  "key27": "2XAsD1yfytvMgfzgbn1uho78FhfrNF1mk6EQAkihHSKgmnVGjT14gaNT6QBmZfvjMa67Um3UtSEx4WEmpinp3Gg3",
  "key28": "2TYMxfHxBDMNgtbpfbeCcitWphti6dV5j5UJVQeTTSmPYwmWJqpSGrv5V92fSBKSGGsRXC49f6WJeFLAWpXLRJBS",
  "key29": "2u5Tpcp2Pv1M1SaVh1efVmVYjmKK16gsHPqqYF2HdrS9tq1ULx84Y2z33eiY9JnD1HmHQr9KbC4e999SnQxovzXz",
  "key30": "46W1frHh6QK6MPmNUGmBUZoLgw3buzgcXRFq2Z5Xp4cBrVx5GhUqYdyQ3L6b1Q2EtGA6HGAw4RTeiQH7c716UGD8",
  "key31": "2gGgYTKbGsEVSvcV8Xqu5fbzxtoogLHzd4fc28zKUXsddNm4FFBJj4i7t1djPzLpHj7RoW5FERkZBdymKaCiiBrr",
  "key32": "2V8PdjwNcwQcSJUFuaaJCg6ZWSrsfJuiTTotGHcTQTARyZAxrvSXHRsKF5WL5LoNeiqUGdmbb91iPqiB4Sog7QFi"
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
