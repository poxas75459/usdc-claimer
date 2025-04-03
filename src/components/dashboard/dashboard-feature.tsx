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
    "cGby8rPZKtLfwhKZGZP9duBoRq23gYoxERZDhA2t1iimPv5jxQa2VPADMzgDJJf9ChHTdqLWfeUr9YUqU7MvnjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pdVd2EMLSUxkbtMXstoNLEUFpmeoDjwsDvER4YSHaCjB1rDL4qjnr2yif92sJY7oJk1b1gYWpBVADAqG3G3idzx",
  "key1": "2th643mQb91JVP8sTaQ8tMbVTZTJEoa6efivddtK3NwiMm7fSKLoF3QDTPFxid8bM7N7NAcoCcrjoCZhUsVHwXN7",
  "key2": "5vR6vmAaMeRKzHSrH1KV99fXMqFobBwSfqkrv6vg81HAbbck4YGUQNegb7DyJqABWVM1982N4Gy3NYCd7CBWq8Xc",
  "key3": "2hA1iT499yzGn7ZKMEtBT5wFTSuYF2TBKQysnpeYkK4UMeXY9LQaQKwucP76esf3BmYQPgqZse84FArMDCRZGCt5",
  "key4": "5bcABUtMUkp2FRQiN4jm8AUo5E79gMXm88AgkwNjoyvKdRD96FXzsHrTUPeq773QQrieNGrSLQXC1WGuZmuL9Xpx",
  "key5": "4hYsH1ePoVss8grRRqj4QevK5EnNCByHcKHPN8hxmnDoDE2aUpwM6PwffZh93VTAiMaB2vtjRbuLohyM5NdEReBM",
  "key6": "42JznbSnjHXDxHWejY91zePi2KuPkNYEM5KtMMcHWTgE5Au1TZ3eaFGLSiXPQ4Y96yZbTa9YJQ9mvnijoKvFeW7B",
  "key7": "4X3RApfMusJHpdgaVRySgs9UGFwChmtQZjDqTTieAuH8eYXEienUS3Doz8zxwcnEy5MNyHs5CUDWfWLwF9Zmo428",
  "key8": "2RykMztynDagFqBArsFiKeXgakNKvxXE2eyHPJ8pHAfCVatdDLJb5j7F4ZMSAB5nmQ7XCVM47dpxjYT1bhSP1Kx6",
  "key9": "464GNtxX8vvUh1Q2N3x39W7yvJAZSvU6gJCoGqKxk3d7wV5g7v1XDQapdN92RnXDbcAkwMiVLS8dQREZeWeWeHHg",
  "key10": "3gWuKW4NjMBHfNR1xPqpAjYYXkEuJPWtnfXEtcVtk794ZBEoyhbf2jY5H79XxZrSwdWM1ouBVjgjHjedSCWQaLdz",
  "key11": "3dcV3cwtUzqn5kCukYQWuRkeSvgJB4aEYeRyNAs7t6N8y8oxnw92ZCunoocv815EJqYjGpvYMM6yQEkbFruVXTYn",
  "key12": "DhEbdbWRaNxgsL5ym9sQn2HTHJBGnoC7c7Zhe69LXHg2gKbReeQ3AczUL76gL5cKsMcpixJ5yFjH1r2Fhvzq5BM",
  "key13": "3vgHiDtgJDNFAQag1KuZkVuixUgnLu4Ah1kCkGsswoDHjRo3e6VU3GmSuQBRmcyxFoczX9MtVZfGBNMxatcJGtYw",
  "key14": "XXvqtneioUE8KtSVw2eGc8JAA9FS5oa7QLHbQBL4J1hTCDpFctBFcUWUCYtBx6CPyUE9JTfrPGhiB7sobfRGHf3",
  "key15": "4HbZfEeLfHBpUdivNL5LpTHJLLAgMjcteenJd1MfzHA27SY1fFy6mnscngLUfC4C5SVFo5yFdMyBHe4MzYyKmPcB",
  "key16": "2ako5wZZStBychjpZ5EhBCMygYuKrn771oGePYBqYZk3rfScDWVQMgvJyBigrJTunc1ye4VcUwaeQzPjFBkk3Ain",
  "key17": "EYgatgMkrQs6nTxDGT6zTj57TaGtCSuQeW81wgBfEqzJF9P8XyQ2m4K3NFeRsppqndATpF44RfgXx2cMUhH8UBk",
  "key18": "2wyYyDrBAaSWpo68HLE9qcERq4ZbAr2hmEwThGcrN4hmwUthsD1GUyh1aUFe3PEoH8GpEHf5tqXGXkVjdpo4Bstw",
  "key19": "3ZPatQD4kA8GWNohHp6ZWNTB6UqmEoK8TWa5XPakkhrcNDvUcxU7h5E9qYRpXPa9ztXzWmj1FeHkoSauyPFmdPUP",
  "key20": "4samcUQABQthdBdWnFkvBvHwLMKZndfCXFHkT8CXPZgW7uXnysjZKhVGAvwwnbKtWu351nMsmWxSguee1iMXNu2p",
  "key21": "4PjVZZs92FpvGoT1r31NkN2v2kXmUY7hS9HSbBUPPjahNWuX4qhykxXDGDn3tRB6N5wmYskdror9npNugG2pyMzz",
  "key22": "5VBKcSaE7ukGXHNeRXgoTLHZfgpy1u9gj5G6BuvzHFdifjRrGfpCaH5K6zZZmKjCmJCsvpcSXbRYaSZATsSEJBur",
  "key23": "3Q3E4tSoA7mrD7nS62vkpBJ4zCwEDLRPSXzMNFQHxyE3kvsG3SEC52DAViModJF9NVhKcmYe3YWXhaypFDp77gg1",
  "key24": "JbirBozXCLBZ2ysSktSCtqdk7Qvep1bxZNhXysfGi2r1XMzZNV6ugh6pqSmj4GdPm4Xhzw7iGx395Ciz93sucMr",
  "key25": "5q2ukqNtuJyNpJ4xFquhdQvEkSBKofTkcVFNyVs7u3Lk5KHbrLtdxHNrSXHaPm771DLLqcnPdHgQmYitXgUQqLeL",
  "key26": "LHmGTnEQAQ8FACXzQqaqdZr6VF9LAHHLkj8WYFrvgTGFAmS9VS4KBsFEqKmdyL5gK4YdcoULFNWQuYZfbjfiB6X",
  "key27": "2xjmf9NZfhTmzaG1EQ6Aw3tdeEWmQgbEvgWXJ5rAt6MYLhVVBomongfXJAvWfbjBog2HXbdnNKQThMH5LSrP3AXz",
  "key28": "5498kAXm5coxJVUroje6XXk3onPVPJ8ihhtfPWqZ2MsPEyMvAd96HCEvPK8K3nuz757KVygbzXjMtM86LK5axa99",
  "key29": "2UXVbYgKGZgvFaKXPq66JtbhyehTFZs6GwJkfdmWSGRZraSVC7iSjPaBXHgkhywkGVx4XTFw3Zq4ZSXYEKLc8hB4",
  "key30": "3qWvuVLNVRdT8FSdrn9h55WqnFvxexjvGtg1rgJnQUkZX7iZchHWtMHY9BSaQRXHR1UtJqJ6L8ZcJ8u5ArJPdAZn",
  "key31": "4zA9M4fM5QY3FmVZUZ8oPpmEcGmEekn1AnCNmdHtKyMt6mqEq14RiocgBsGUi7R9u7ZkHg9FZ89dw3T44YYLoiXZ",
  "key32": "5bABEXvmb2dZnF3oYWTdq7FnDEkqZqpE5nCYB6X1SzPc5D8r7T5eQsRy51qAAeMXEfbfS95dJvbBZEuBHsyZqkZr",
  "key33": "5zSyAfrsuBL8ijWKwKHNA3DMteQbJPGUz5Qptb2iroEKh8dDZ5Kvq3j1SfXXPvAmsBbNwZTNzZVptbkxjdQ6HdyE",
  "key34": "ynQXk9sVonP3TSGScQvgmQKvwPKJfcRPFhJUAt7Vza8U7dD1hNYiYURiNCps4bGjVPp1sAc8p7yUGKn4ucdq7ht",
  "key35": "2eE6eU13nB9j39YQRcMvgakMepxi5vxtoTYYCLvRgob3k4Bp4Bjg1vcbRUs1tW6225ZLsuJp9TWFtYZMhqgzUiXx",
  "key36": "3QbmDaR35VMtjuFH9x73uRpeHdqu8qMXsqbu7LfQicVvFUfRqYTbSgyGWQTLF5UmgKeemcB92MsrYMEtywtgq4FT",
  "key37": "4AXvyPkjKkUhp3jqEsSeCyjvh14of3zkrY1DLPYBReZ6ZMC9NjxuZTubXodoeso7DnP8NvnpqrC8kdfMz6pEbp7K",
  "key38": "CL9pew5pxhUHWEc4u2DyK3mCsYBWxbn2iYyep579CTevapTW4Kxqw9hx9RMudEwjgTMhup3WcAXeSvDgZvWcTKw",
  "key39": "3wbL5AmcH9rYdkNjcpyqn75Ui3JLm5QucPZSDcXa4rsx3EX6ZadtKgxaXNgBQRuTc9hX6DqCiXCvhcg9KC8hhxeN"
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
