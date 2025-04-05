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
    "5jkudtGqN3H4RNeY6cwRaqCPitWbx5Y5RYodoLVeJF81BrS1cg5dexMshgmYCz9ZUexTsiUuzuQXFnvxcPyGy51q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YxxGXd7kCtMmQKAAw53sJ6seRmiEMmRwig1grD43NYAtnBN1EmcB5cHbjfJB6JWncpsNxUAKh7dKF5Wc6iaDseB",
  "key1": "5vrpfkjfsuas2geXQs6pmhepRwBr2Se1oTiG3kBiiRvdDiP56EZYuutKdGnkkRJsqLErskRS3fDDYzYne2qU5kQc",
  "key2": "4n4gVHa1NziCA5ru256XvEn2BGSsPDJ5RduTTdBF9cGp36QGqWcScJpBgTpUSE2gWSUCWnzTsQodWFh9qL4GygzZ",
  "key3": "3KwE8zZdEFKPQK75vmMtFiTo8EEzr16xVyR2UszYtbRHNpcLnmohbaSfoiXiH5PQ9xDHJ8sMueuoyrnR4icFPPrR",
  "key4": "4uELNPpMXpPChL56sUPra5Eh6nNF3qAbmmig4bvxSVLBbabKYgAxQ8HmjHq3z541wZ3Y9ESvA5ZWHnTH3YtPERip",
  "key5": "3qaVkEDKVeLeswXjbweKTT61sg5s4QF591EZ52qYeyXqBjXqDicDG3TDvqX2R9Jjn6MNsnab8DBP38Ddytj7mAmF",
  "key6": "2vnF1kNS8BLeFSAMvUZ5cwc6J4QqR8ytkqaaoNyv5ygsWkCVX3D2NG9Jc8ZdFmeodJ2XD9ddDHF2Bd7vxLZ4nm9M",
  "key7": "5AoarYoRes8mZAmWaTEXw71qJ78JNAev5YfWZcJ6PmwDBZA2dRC8kwyGMVH6r8Ju8CVvFC5iDnnSXoasbxdUNsbF",
  "key8": "3NtY2VmK1m5bFMSj341WYaJoCQdA1erh9Qa5WtbctBzkAynABLNPnkw7uuXMB5tLZ7w9oDApBu1BaMfvXGqUdKWV",
  "key9": "2MH6CFRVXSR9Ar2ZPnkDkSqc7wyDT2Kh33jQSzNhPxSh1ZD6qkcnhHnVLUFpc5ELKMzHL4qYjRy41w9Gd6iAjwu7",
  "key10": "4uZdUktqVgYiQqiR3D685FYurU2PktFtGroBxiAUVokCYztTf7sWnEi7UdN3AE66SefedeHgjytoa2D9VvjMZxDq",
  "key11": "2SkNqoVHjEgfAyfXb1X1br4V63P44cds4YuT5NX2ERePizR7ygPobCnKgdH66gT24YW2rjLrnc8fnFmK8aLRLFrR",
  "key12": "4HxrxR8SHTEGB5fMWLsKfmok6oYd6BwqVxBui87v1L8FZrYdeuMujiPHBXHh9nrNV7jmUjQhrfCGYJxCqMfeEaxT",
  "key13": "2jDdRvMSRSKDLgc64xmtiQQQ5MCdgcWQ2bKyMcb3vedKxPsL3jBcRWd5DiYZDyRkK5b2K94cqPcJGocPUJ1s64Zb",
  "key14": "658x3bKc9xc5JJAY1rRRmc6a7DdGabVqrcEF98Gwzg4dtjkbwWsLiJBBbjsT1kqFFuyRczEGsKktMvDgronQDYKL",
  "key15": "5wFrjChvtJ8sVtiSXxnsioRabTaLmh24Zs8qSDk2fhjZEmtFZkDKd7buBcNHyv7qvcQvkSP2ACot3aHiUJiGE1ta",
  "key16": "4uJtoqyx6QWxyALMzcLBbenjsEsR27p9LHkstZ2E3WHSJqQ8CjXcLcCPyUfpT19Tto32Mq7rqRcNWTheTzGzWSgw",
  "key17": "QBnnFes9GzALus1X9H9d3j7zM1ZvJJ9dMhsvoinNGwGU4RUkPjsxRdFrDBDFKX5wkoG4Zq8Qek93aohs7b4nWE5",
  "key18": "b8yAoEZ3K7udCPhQhTftrRBgfe6vLdt46v6iK3tZRLEWLLU1HKRv4eC1QgUAS8AVb8S4H18Gxtk8Ngsh2s9YZ63",
  "key19": "3ceXRaEoYDek9DnNUh3t6ruzfstw4V5QUR99rSapUV3UB86aVCfsUTAr6mrgLwzUMwBHZgmKuQRiNrcBEZWKaPYu",
  "key20": "33rDxU1qKu2c4D6NPN4Jtuayt4xqGj6vRCPNRuEDLWetXzecQzLduY56c4Ed6e3i6f2iosZpZb6MsGDpmY6hMRYe",
  "key21": "64Xjtoxxv22TtXL97Aaj88VCmngcSwSKeTGVCgBQ442M3t4z6UypcZwaioX5RR1AsjmM7A611AJjLKi3gL9W7Fgn",
  "key22": "2MVopMDQdo1TNrpD1wRfZe5nS72BMTgKkTAMARwy28Mrhrn2kgnb9bY1gp2GBru4pvTUC7Pi8tLcTzUVxRJFSZey",
  "key23": "5RvMvjuuCHxg2KDwT7f5c2pceaNLtG5d2cnWifbDMCkoNjSkTXqtaGwisHuQkov34v1ocBHkKiy8d5hGQv4gwUZh",
  "key24": "3QYBbvviHgEkAGmH7CtESZCcAEYBCsuzWRXvCg4svdZSmpy5X1ds9k1K1CFqyS159Ghj8msENsPz211FEZUoxXhR",
  "key25": "wqinA1Pe7yJsT55G4W7ctYiSKDGxMX2evSLzhDjGLE47ohbLPpsJV3YKc5bso3ZE21oGyksW7Ky1APDHtGt5jm5",
  "key26": "46DDXCLEMtw9bT42oYnFGL1QQn5mffEya5oyTmumF4gWowFi1P67qwpWigaYxzfQud4C5pEQ6zZ4zA76ic5xN4Qx",
  "key27": "47HLPRKYNtmiaeo8jeoDwazJNbhhRSB6xhGvtmUoCanguwjDYzQbTqPJrE5CGoNXwVMKFeVwWRpr9FhYwL1a6trh",
  "key28": "3g4jkrPqbdLZ8R7nJ76U5YKFgXY3r1gz2BD8aEt9UPVZwnj3qTUWTu5NZvKYaopBugVujDEuh8opGCYaLvbeiCK8",
  "key29": "NbuEdwpRQofMCx44HLTHntyfBRuMA3zhLW1RHssE2n5rvZuo6ttavYCWSy2KvHMGxbAsZvPJjwSoKhCWipJL7tf"
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
