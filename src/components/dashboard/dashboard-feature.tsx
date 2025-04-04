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
    "3QJr5gxvRsarGoANFqLL57JQ2AotuhLirg9hxy9vLKYPJunwjCtBJHzoUBxgFK5X2BuUuCgKRcBMTgkhLujr9iZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TekuZ8oPihvGeGhzYthnHBfmdLD8AeLAue6AJfH4DELHo5GV1cxZYwYRCfcyoKkctub5jbdeR4pCo9WAz2NF6gC",
  "key1": "65ZoXWDbLGZCtyLmQFi1qrrSmfbeyxRhwg1gu7BDkD8XEm8oS3PgBxstCorbWN41jLmUWLhqVLnKGHjBThF3NKBs",
  "key2": "4E2hJgVQddoBRLmb5hXw6yYeBmpiHzdVJkAEs6kUg7RZzqHDhjHMxbRSvBrCmQ7mwKsfFBbUg9SykEBZdv8rLL6Z",
  "key3": "2yjyfNcTxYeCxSgC5XsX1RFZvQvxkNDZQacQMVNns99aEHW3pLmkvcAhHCri2Aqyo5eBGUXEgwJdhhGoTN7pTSwH",
  "key4": "5iYnprXpb6qDWkurNqcmBNFf2E6Np3f6rez8nFbT7xDEdRTVyaW7E7u4GNhSNdZ6o7Himnj1bhK4xnPZwoE7fobX",
  "key5": "5AeF1GnAnvcdTugeNS2z3M1D9jGTRBWWJweDDiAtytLWnUWVuTY1dMWaDh49zHhset7SEgRBUUKorqnsM3S15Zcz",
  "key6": "JpRvCEovmVPQhwp6fhZaWUhu3dF39c3uoUJmuAPTfbzQjfNaM9DJiXPyKkgWCqeM5kimxEvw5XeLGQuWQAqsWiT",
  "key7": "2QJGRLNxq7nRHREyKc6vCzNyzTQdSsy525JrMVsEes6Q6hDGUG9gcXQpFsrUupAzYNKQtHJGc1WbLDr9pqCnqV9e",
  "key8": "4y6ANStfLKvie4fWKzJVz6Jiw4GopYsnN6wFbQBQjySTCHV8exruaKUt7ipNor9tZ7D5G4Aup89fiQxVrmT5tzfb",
  "key9": "4ucuvaspQpGQ7WkKSszoD8S7XrPmPE4HmSZJoipyHQduNS7RGuU35HgE6HRGNketUL6CrApdxfTUifoiFrbhy9wG",
  "key10": "pbo71u5da7VXCmn7b1Xa9NeGT8mHXGqoQZeWkxKnZSvxvLwNivhwxfEfkiXJimPUy6npmsvNPMhUN1BxVtPRq5c",
  "key11": "2zxDpisAPRET7bbhgeCKTktSQ5Lg952nT2kzwpjSjav8yuCgFTAA4fW4i9hoSQNGEd5XvGb99gktXp67QGZWjVXu",
  "key12": "2r5T8LbmsuPJHDoYWo7D2z761s1zGghw2YQvZ8GMvmza3kjVkRenQB3ZQQ2ELwhCJKnYPZw6QpWcKf9zXTWKTZFV",
  "key13": "4WrHnse3YSYBB6ADfSVvEfBxeKXyXtj6xqJPA7GoE5C9ssE8z8tDZqDYrVNqwWNXQWPyTZH139Bxk6aVs1AhSr5u",
  "key14": "5ADWGa1VkNj1ggBMFeTkyANFwLKiNTR6sT38vMSQZDTR4ciZhGfXnrHrBvLsMFgrUFDXHHAECca6aniFBLUh3gVV",
  "key15": "5Thtyt1N1j8R4acUBAgrfzkzL9Fo338vuNGzCuybPaXWtMMsV8Wm1BieqZiXYNbNgfWzJvfQbUa47qM6E18D78xh",
  "key16": "3CaPdn9ua27g26cwfcE1qv9wN2xe2ufmMw27GGLcWFprdt6SLgLiAhxvmFSBirxBPPWzPh74E7M1vwNNmRR6nRrU",
  "key17": "2RnRo8HQK5kxJLhBjZmVwS57qC6bLoLGJcbF2Kc2SV8WhjyqxjH6WjSZ1Vt6JckwY7ra68oW8jrcysCLk81mcutK",
  "key18": "5o98Hx6MuLGaFrEKvSjgrfAJsRLXwaDjhpyxgM8ztc3t3zZf3cvn7JakwwuBVWpnWzsQAGHoWQ6Gu3gE9iHYcqCJ",
  "key19": "k811dxGMS8LeV4sY7AgDCpvJpo686AwFn9j9CzHhGd76WFsePZHTGrGnvbA7F9p1tPRqG9rbknpE9wcMcadDbdU",
  "key20": "4WKN1KHjqT43YYeP1HYtBPqoQVcsVxJpyXShuoVsVMQqGTzhZqrCGMiAETLhdxGJwLq1DRsbAshUPQfHuKHnfnzu",
  "key21": "4dDgGnc3uSRM9qLQfk4ogQ4wLUB6jE3zw4frEuavRtsE6hpmqdNCdJAkcn9FnChqkSkQxRLx6HjTDtJQezPDyouH",
  "key22": "2m1qoBLD99whwzgtpsuzX1D29rjuA9mSrAX9oFSJMFJfN7psBNKYgK1Nignyw3z6hMDqv7ixdoYi3Hb7cUHAGu1g",
  "key23": "KAeAZvdfSJsJH6agHtPoJtK1VUH5k4PKjsuBAzpZyDziEX7hGxvY8k2oLnhNyw7vsv6g1a34tvUPpS2r9uyzLMt",
  "key24": "3qeSpsDKg1KERcoHoNSb43Bmmrwn99LJFEr1Vw2vHDTb978pLTFwZmReWmaygrSyy6vjzvNik31iXyGRQEPP1fYJ",
  "key25": "3QEqcRpZRnabhf8TqFtFxYmBuwbxVLKDdbGv3xEUhWqqZMtxyfrxNHXuiK7yFLEAaqqzK4uRg3P2nkxE3GfvWrqG",
  "key26": "4Vsyy9UJ5fgNQKmZjMHHt4MEmkQoqKEJoVETkzZmVX3Vr3NixVvZCU1mfZK1xc3TrixRk4s8RUdpVPGnF3bbUzXV",
  "key27": "2gmunFZ7kZ4VC4PKsckoTDKeLsAiWBZK1kHwxkV2fqUZzAzMkDb8PktsiyzT4QNTxYWiR7EEQR1b7jAfvjMNrW5d",
  "key28": "Zn96YCAyZUmaA2kKU4pLuGaAQ8Sd72UDqqSJE5UyN81Ds3wuPy4X7AZShRNa2b1zLypBSNsajimJgrGeBqaPYaq",
  "key29": "CLqaPLnTrMuFpJ9yuzCrtVZiFaHYQqPaqHvN2TVULb8Di97gGL49DQiDwQo22gqxvdk3kd6gw2ydobRUSBtJ6Bj",
  "key30": "4pN5zteXo6HXuzbkXJR2BHJ4nArv73wMJdTNKQC7V8JFJiQb8r3yEaroJMNoLrHdDzYKqGtCnJcaXkBjs6b8WGo7",
  "key31": "2k52pgHABkawe9f1oGogBwpQVWERD1gaCJkSqcxajFB8NwzzbZuMeo66rmRbomuY8HNJYXTQjYjCDvZuwvAbej8y",
  "key32": "3nWpRz1cx36brkRsmxNNufAUhKqTbQFr2rcSxTKoMWvCdpcZoVckHdK6pVUWr7FJBGFGkC5ZpbiV3VR2a3WbiHXz",
  "key33": "4zcSrXV23Q8VPCs6qm5xuc35RY5UYSRkExwF7XWPAESLfTmqYm2eLpg3sQypwSUtmypXTE4ZvKEzsYqEymAUiiD4",
  "key34": "3RKw3VFfg6qDq3kqVVasP38B3XJm54cDdAo7j46D4yKSitJiuXeKJrV6bzCFRkuyYhcNeSaGRSNQMcNWRPBAY8nJ",
  "key35": "iMSkgg1rqnhb4mvA6GGpXwiwLHgvA8xXdXTWn17AJtu6tCJQSwUj8vh1HBkCNBUWV4FyMv4hvbfWujeRJy4acJV",
  "key36": "28miy3numUVzZ2oYqZVVCb64QmXxUFjh9pnfPJ1LB7LJp2EwU9BngHXZ3Qs1UoeCsBSny7HZzGLGYWSTh4Zs1Rsr",
  "key37": "5YGFiogsV7Nz9meaAYjcewQbapf219tqJ3q4683QUxk5DvhWRot8caED3NziFWzxR2uXKv2SMvHQDd5F8HavAHJh",
  "key38": "3WUGppPZeHw5VpUpAHigkPSUjG2VPQ9kYY2DbcobR7sJbYaDFkENu288JqQhJXqJWdLDVKWop6oFBk4zz3FiDqcQ",
  "key39": "2JUmTNjCKi37q5NTvKM3L8zdnJY8rTae9u2wDXMRtvj8jcufHirxtCQgdAXNCWfwBJ8QttxKQJZgmiWYvb5tV3ha"
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
