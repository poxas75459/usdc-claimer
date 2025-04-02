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
    "FgHNerRuLUHbm6bgQBRoeNBHRAhA1WhYDbytLJfRUNDzNyYUwPfSkQgGygtZzwQPR9zbez8uuhUoTeFKf1CsK7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VzajkDCToLHE6K1QkpJG6YpkDhvMB5639KZraoSgvZRFuy9NH71AFeiDkn7YPcy4uh1pK7rmUPJxiHttiRgc1ij",
  "key1": "5mwUGzAmSdtirF9XN9XF2h5DM9mLseiLWnDPmsuQwLpQ2sGTjrEwv7oW5WBtXf4B3ptwLijbdX5vmv7LTfLcyGv8",
  "key2": "4FWnzK5FWJKASkji5zrijvTez9euYgNVSTPeCxCsqViFKREdtFZZVHmPTkLa4U1sUkPWnqun9BQE63oWwB9XXg3G",
  "key3": "61j2o2k5LqALn3RMS2JELbXWyMKoyKBzKLkqFrQCnZyncVUgbPLRUUYubHJc9dzwkDpjR7hbkMXZeX8gydwg5NWm",
  "key4": "5yv8jEm2D9jYrUPr6nqkK52HkhAXphTsRgQRYBifY7GM8Z9aw9eZmC3j9WP3ZsE9aePdJGqWExvDXLvh2Q82xRFB",
  "key5": "4k2GSTX8fwqqEoJxedViPsDCWydt2wq2CgPK7Zwv77ghpT8uYZBwt4UzM5Tmio74c71oybzR8ZRBf65AELB4DqnQ",
  "key6": "AExD6q5QghMKaZK2F2pydGCMDY87mtwQzkjJFWSajKeJJcRCek4koARDRoueWYj6yXk6BTzhPL81p75Su4Fptm3",
  "key7": "3jTbJkJ5kByphh3vorSKxH14QwLUiHq3M7jG9BiunvyUUrW2G9PxJnC9FDEKyjysJShJ1548Z4JDLYeh7ryC6s7s",
  "key8": "2Wbxy3syBXeXJkHyste6LuRfMwcCyeFkx6CUbaKQjdTHpMHKTxsCzypsWVgehUocYA1hykBJDF6NB2nhxr4YYLi8",
  "key9": "3dc2eyKWsDPd6nX4RFVhavqhHXzMgUwFtwaxVdGcGHkmyiUHtEdVFAqqYnBazZq7gM9tAmnZSjbiKK54VzV891eC",
  "key10": "3F1nR5EYpcV3L2EoDxddaTi5ZzoiY9QxCcXhmzu9S7nskf1Jni5MzoTeEv4m7EMAGRnbrQdgUVdBh9zCUn2Ntmv8",
  "key11": "9ETzZ1HW3aFSJYWCcKFP5t7LCDttGHaLditnTkbynXp7o5kkHgRcso7RnW6WW559f3ZixhojJRVJBcevz9TDsuZ",
  "key12": "5RMb35riNsB5AUZTtRm9ms37p5YS99PQNeRsbprp2NBzoCgAAxUtQvAS3M85VfxdC7u3v1yKiuQYJk8EFMsdceQ5",
  "key13": "7iQrxD243pthSadUe2azngVwzGEYor1X7fvvH1NxetH8kYqZKyfhVcCBgtqG69ZPyEEZyFkiduXETmZzFqxB7tK",
  "key14": "3RiKpkHfMrPXFcJnXyP9q29gkg5DBucELzCjB9eovJYRXhtrkRhJpKuNMdjuWjAaoRjgZUonyX6N9Kcncjn1d36g",
  "key15": "61kXbMQAppSpwYKBJV4g3aCMbE6BgZF468MqeEHkNw3dDve8WdZXR9QWbBW2VGJ9a5DPPJHmfAz6R8rcDBWAzdS5",
  "key16": "4aYqDM4xrT3c3iNLu6ot1y3VVjvQHXA7bKY6jan7Pq1g1wSeXFmmDFTCuunXdP2HD2XxyiuCfKzdQkAoBXVMGQoS",
  "key17": "3HzNohegRmikuP1LghZLKp7gHtLae5ijL5ceVocG2nw1jBktSbCgXosNYBYdCGAtCSBFmfYz9kNwfk1emwV7oghJ",
  "key18": "3g2FbwACvFyDrdovB2BjrCFsCVhVbWWmZ7cGWoc1vCo9uiCzHZACgJtcc1kA1xLViMMFAuDENG4qeeuCHTXrjdmc",
  "key19": "23Gj74ch25Gc2RiBo4634pHogUKZHoj5SFuCycZERT9YWNbnu6TrizwC4x86ws9WS7qRJmw6tSd9vz9Lk6nmLNzF",
  "key20": "57L4v2TKXotHYaywvYuJoafwGS2A8Le9vF1orgSgiSjPMERHac6VmYZzfsf8HDBaRy8jdsPxkGy9y16cVXJK8NBS",
  "key21": "5BQZAU4JHng6vTAym7QyEz5AtWKnL1eJxHk9KHoJQM52auhYFgFJgzFmHnqSvZh8qyanhicVxFUENNMaiuBEk3gn",
  "key22": "5J7NSPHo82P59cYxAv8tf85VKabQ9EP15nweP8Tr3WHpD5DsQohSydWfLTFs4X4aqVq2CZC8GDpkbCpvX2G1Dd2y",
  "key23": "5NpA577M2zY2tyvb8ZWRVpGewm1uv2KVMHhVVc4pshBAu6mLJG3QhxgbqVtGXHWoc8j6RUUXceCnmfkx2UeSyHEh",
  "key24": "2RAZSYLnjpZ4bCRKsx2HMFJN2BV8xYW3QDBePogQyPNzSJ1Y6GWSbTBW89537eb4goMWaZaWtdTntyH1a3tprWKW",
  "key25": "3NhW5ag7ptLPkUPs99AuDumNxoyF7JDhYxuiuHAg7nHzbB6di8qdmfyh2pVGjqqYnPDhcTjsNdSL1xWjEtFiMxA2",
  "key26": "4UKBzci3LvhvWEjN9RjMab19yaeFQv7jrk46srPoNZTj5bLXqoEpwDqj2M22cBGntvAhfbj9kdVh2u3EZ5aQuCqR",
  "key27": "3G7xvwEzgwA6ogYV4t3SaG8eKZMXGdM7DEP18Z5MWcx2BYjucp4nSqZYqrzN4TJ1cmkLJTYJmLAbEUDwMGAU4ARa",
  "key28": "3iuMh6xZ1tKbj2JvmGnGYbP7oWXNeunqNef93xg4pfqCLXMKvrFvFpNArKXcnwuHQ4ngmrKUXm6tCZopcfEN9Jox",
  "key29": "4KGxJZVsYdFS4F7BwfjsC2qX6XrycqpweRZcEjLMVkxhdeG9mzm7MX2HywPATLArefN5bjhdSufZmzNFBZMKAxA2",
  "key30": "2KPSjk54rw9MBrmSM5vJBDWbCH5vZ9UXv9FHak9UduhoYnzJxaU9oYtQdY7wdU9ENquAEj1S1AC1WK3Tm6H3fkRE",
  "key31": "5pbVSrGrBrPMkgptWEuSUaVGbifYjiKV1id29By7YGUWtt5RGZhv5fv5avCPR8cDpEjHtswPVTGHd4qcAs4ChB4C",
  "key32": "5PRWGPgDzvdd9cNskvNkxnonfS5j4ToWG6G3CotvHCK3dXv8xxaVT642p3uPLMNeBSwCpqp8DojDLRxqGTzLWzWV",
  "key33": "3STxN5pVJ9kFrsHW2ukaWh6ZdoCnLhUm1HSHe2mMed7Vs3EtUJHH5AFBqPXrxpvBGww6YmaAsCS7yBLJgrfdq1dJ",
  "key34": "2Vx6tC1yQ5SoQBiiHrb4Nkp1f5HAPLZft25iNJU8VZNS6vusvjDp4cRT5g5p2QJJNdRoXrLjScW3hpMVUWEVgEgQ",
  "key35": "3uWa6jse97MND6aHF1gQsY6H1LdHvBcGrobB3ADfcAkMch6eTNBUgYodB5rrCgE9Rys4chcjiNDEaoPrTeMHiDPC",
  "key36": "5qgyE14jqTmLAKQnLSw4K6HnsFoRsvvVTZG4nDqiUGQzDHWdEcMfzdD1ThMJnMS9x5ZDAwwtcUwE7yAsvwcNmR5X",
  "key37": "2DKYJ8PTi6MVBNDYUiqDTZyztmEVJNxcR2hRVpPpaK3JVwZBxQ7tEVmh2yN7U6gFSnYTxnNMKCcUva5vZcD4XoqV",
  "key38": "3oGRE6pD1hcB3o5ZyBXaSVxhnKqwJp6YeZdj9kYXGa62wWGEmoVB1XfrgycRtmRsRZD92YXwTERLx6zwoJpsHJ4y",
  "key39": "4asuddwAyBtoZ1nBRasqG41fM3i6wBeLZ72EdwXsiFtvmH7waLBdZGSN7CrhvmuGLTTZPbFeq9ijGqiCWpfagfqh",
  "key40": "3YeYQ4BecUnZR1rHh33eRi111R4ZKSWgJXZw1yHipuwsrBeYJydcKoq91mwJBmc7ePFUD5YkA3E6b7iCmbLA1i1C",
  "key41": "4wz7K9yNjxnTuhiKee6tGvDCQBvB9vLQxdLz78kV8BEKvi5bf9qcf5dHdbL9DwePdjSwrUXTM8rWnoN2hzLgFEJx",
  "key42": "oVqpSCCr426fz9vGfnpy5pXDVJuNmLiME6K1JcaFz2sWsHbgzTq91gsuVr1RU73PbbNQ1eSZNU9j769M6AChCmd"
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
