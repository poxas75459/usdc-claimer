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
    "5asN8YmHRF75sTKAFTBtRdoBtjsJpGZZjZnJ5kdoBzCbrsXk89m8m3NGazwVmiJdvL1SqSJ99f3Pwua1hLYQL4bD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wRZ7VvUJZEPum49xy5PUu5qTRaJZbMqPRpA3pRWo5U8v1vmRzgZHdC8ScpyU81h8KN6pwJLEL9D7fLaJRWd3kYy",
  "key1": "5tPmhauHcs8pEFpPKw88h6s42G1BmYihsEY2t7xGKMpFGYSnDDSn7uHbiQLRppHhJ7LMb9dFTjtbjxhFKAWGzHF9",
  "key2": "2Foyp2V8KoJR7iV36MyuBA9rPz4BmJ1A5CgZTdD9e4ZcEB54ohHFNwKfqbFdqrjcQLebBZDQQ2w5tSWrsyLhfaDE",
  "key3": "5oWFFQLxPijGNmAGPHr5hJMFGcMrnxSLEntJkozazkFf4rRWnfM4ZPBo7L8wZXSnibeZjVrU8aBYZkeWRDZeHGmR",
  "key4": "4kMSuPAeNXb4teoNR2AGgNWjmZqfVnWf7urtuaCD6n8GotfQXrThQs9BHo6kYpPbcM3bSczpn2qe51x2Eqw5KaMe",
  "key5": "2mWT2iMReKj6j2VG8cewuT2LCuYgkCeCLtEKsonBg2QHhF7Wza9GmLFZ1tianVzBMF1o8Cy15tqC4SevX4Q2h8NM",
  "key6": "4vP9yGyZKyjYUSBqDHwQgna9G8B6bqBebjjk8Ktwm1eKPU5yMi2jFxteoL2KXww73CDGyKmvwkq7q1MhgF8cfYGE",
  "key7": "2na61sYzf1nvmjSuEqeoSscGnmCiCADwjyHELW7MDLM2obPsgvESywsmcY5be4p6U8EufBG5ChwQ5YP7izrmiZPF",
  "key8": "GkuQqkhJwA1NtRWXgYJJVdXV5wSppLRy2tqaSZWWyM7LVP2fTxjFAYMkfK7wkMYoT7YsnmeQcvXAnKZfPdytUFw",
  "key9": "2CCEWPKuVefebKeu1dk6xEJ5CBXQL6kmYiK6MS9PzrynaEKHPdRC7sXYT8USThYZMUmLr15EXzEtLyu9ry7A454A",
  "key10": "3UC3s6hrJBaHCzvNCtu7268SjUEHdMGPfYAMgj7b218U5gLzstpENiiCU8gTWxVzZSmqauvvkDGk4aKiSsnWLHiE",
  "key11": "5WSXArCnLmvc1qSjqSKiHXSSKPYvQkPLs2TdFEkxeFWL4hW3iWKaYSX3Ati1pcTKRUNnwGzYSay3A77bhnpzrG5S",
  "key12": "4aRGXcTnaBULU4qcxReZqma518BVzHtWXy7EcrxU5m1wpdbyBSSUR3QUGQ4Gp4DT7c3mTQVwB1YcYZkxog6dUj39",
  "key13": "m8yweA4upLyq2Qhxath9Ldb23Gv71FBT6EJmBZhEjfq8F8qpzChsWvB4XzqfGzwhNYtFK7uEGNLqjHF8HuXQMJW",
  "key14": "42GkBDUMNQQvMAuGmr4gvRj13oQAtoxH2Wa8jaBVhTCG4NVh5TqMLRyTnLBKNPCopqhYtDu8EM2UrfDUWxwAAJtA",
  "key15": "4azfA4R8hMRC4SQ14o9SKuSHRqAtj35u5s4ZgLgxtFPB5CVEas9TaFZmpph5LjPigeLtACwVNjsT7v1EbC9Uvrk1",
  "key16": "26F2Z5Rj7diU5rCfW4pa19rCSepxEtModje4nQpqFt5shPdb6raJYAaDAxbzddGbU3sEejHiwVZc6NMXp3poywCh",
  "key17": "2qqPE8kLYe6nwBXhDRUH4eu4C9KQxfX1FbRCD2fw2vBa36bSa2k5KgvhHCytoWNUcLW4A3Efuhprx78x5ks8cC7X",
  "key18": "6niTCrs2bDwqdboZBDrJ835v4bfgCPxPWRJnRW1BSueRd3QvhSN7HJtqRAFtCjtgnutwLFsnut77pbyc1W1jqZ9",
  "key19": "5cWvsAuwMuoSnEXW7H5mQfEFF5mqspCwZSJnqdjimrgLvWdNYnVV4MN3yXFQMjchA54DSj2zubMohCcQubfQNDPd",
  "key20": "2Q2WRM2BTDYEZpsmz2eG3ZkZdYi61t1g5r3jWdfPN5iNeaiJ8JjdAbqpEVUHzw7ZwncqSnMaUpFurUgME5g1tftM",
  "key21": "2Qg5ctfbdrcViWDvs1JY2bYMJpZWCJS7sC9C3LLyii9nHmbQuJsNQMimF3NfYQVJjsZMc474EMFSZoHWjc81WuPK",
  "key22": "2tEZjhF5rRvSAn8XqV4ENomyT8BrrnNvVoPr2B2vNsJak4LCQrCu2GK5K9fRWYjTY96WGrpAowNnmK3KnMNt2rhT",
  "key23": "5YSqXMqKLQCmUBDVQpjPBmzfNEYTujqz6t8T8dbhCVi8gzDCk2yuLeB5pWdG2xybF7DFwPn3LeD9BYUxznkHMa1t",
  "key24": "442PCi4LF44DzEgKiErqvB96CKecaxEz2fXNCyfa7Fj3kjZ4kDC1QPfHSyAknmdoMtZEUzK7vPVVsoqy6kpLzfJb",
  "key25": "3csNp2zgKtHgLmn7CJG9sE8gCvx8xY2vUHQkPhvrnE89Df9Z4sZ5RjE44CHPkcSAPZEVwU5fwaEJA32U2mm3WV6F",
  "key26": "3vKk6FDhX6k67fb3bV9fHRJ2pzgrT7MnAAURcmG3MftFzYpQZ8tz1gNbgTJkZL8rji5nEysefatksPBKPoiLWfnb",
  "key27": "4owFLfgEPpF9RSmtraZJFEXwGwkPqPTTFQhJEe3d2dpTokJ4kzvKDPqFeaKhRXt7PNwGxYi46SPa8V2StyiahbNa",
  "key28": "3c8EhDfMhs92EWRXT3K5KFZwEDTJoyopeTxZLRgvKXHJZWqEw61MrWbeDxmbXdwt67vr1YMnUUpVHn4VQq6NxSyA",
  "key29": "3TAYWvHbYCLSRwKrcCoBZmDqAxV6xHpAZTRzvsonr3L8Th5Avf5Lhh7syKXhbf7bUxp4reVK7vXA9tDqRmg5G8YN",
  "key30": "647tDNxnFBCJgKZ32yXUWpJEmULkv3BjYx9MjPZiscq8HBKt5zA6icf2tc8z4eqfsNugycsghhGYkUn8UmhX79PB",
  "key31": "3P2pb9gsvddBp3StsozfCos98F2Z4ihisxgrjFWTCMdVGM1V6RyN22TTALouoJAZj1mmmK9bvPrv2L5Vb8R27bzx",
  "key32": "3iE3qVujY5ZnWoDWp9EqHrK8kbpdBbWB9fsMpXJzajEUD4ZMWkWYoXAaLhKWp6rLd6f3AZDCyYXdx6tYZUmsFRQ6",
  "key33": "53djER1C5wcpM3NYYPAweYTfBzhSBG4M9ommMuEmxn9jesaZmdp1Jts6h1bmE9fSnjk7ftU9a5hRbawMkdjKf7Fe",
  "key34": "3CpfStUrLfvc9QpYXMDqfmofvU8fMSxz88742qgGeAvzGuqmyAxxE3x7Nnd5R3rzX5tPBcJ8Yn3wiSJxKPiJmViv",
  "key35": "3LGvyk6eeFLGbeeQasqDpzMGEiT474ov1rEc3ks5dospXnAQb9zw8gVsdpMwWuxNb8niP3574ycjd3wUgaH9nESD",
  "key36": "3EfvKriyqimzZ2GKm7DpuP1bCdYjRV2pnVcg4YWPUhaup6XibRM6A5Qto5HPYPGGiZZbg3Lsn3cVwZs2R9EYnExB",
  "key37": "67iLS6dLpfauLbSngZsgASDZDT2YzMoBimk9omt8k8wQfVkcGUuazv9f2D5Akfr3Ho2M9V1VAYeSwjz9eWk69wCQ"
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
