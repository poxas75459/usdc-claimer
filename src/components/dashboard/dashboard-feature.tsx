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
    "4x4HogavojwbTytgh2tJKwkE6sSgc9nP4hhzEy63Yjqir7WEFUzN3UFEcNC4HtQop23xoUDh2Bkbsf3diraqT7Cy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47DCsSAbvHaFsscYa7q8fSsZiU2KAyEi75DuZKeVNg7s25NCTUaTShnff5ChjvxZQvqxwc3H1Km2qAiM4aw9vRi6",
  "key1": "ZVd4EKCPj3KcvpVrP2XydzUoD5qrdLaH1Tazk346Rus8DjWyssznpvN1pA9U7BnYi42wKkYLgaU7ZbWzuiZtc4c",
  "key2": "ZcRH8LVFpoynKqFQhqrAyrqERYXqR7RndDdzJd5fEVkajriuj4FauZseXMEmD4RDwiaSQq78kYeC27ce7m7HJre",
  "key3": "3KmYEqZg4NjsJZ4gfj66CbCdRNhpJm5nrvFpHap2CL8eTM2EKSxVGojAf3XA882v8F6cpwv2cHyNJBSTZRuXiCYw",
  "key4": "42QFH3vFx7iPjFCkRBpWKN9qgCs4kUCPM48uQrt8LZd4vpSLfAYxbHBZa96Jow6VZdoRNGWJdrqb4jH288Q8UQcr",
  "key5": "VsMSEi5jinr8v2Q7RqzCFBHtiYDqeY5TPoi3k2SZ54mcWFYpXfq2jc1Ho5TsmTXJ3UCaRS7RDcpXfLzxGnsZSsz",
  "key6": "aUvBwub7VeTSVS2wPJfyL37P7edz8ygxW7NCUcsJJWvcML3uPW5nEwM8nHyGWpVf98Aa995xYkT3qDcqQEX73Sk",
  "key7": "5BEGTqRbhYMEgnKYkPqLE4xsVrz2qvb9y36pSBMxWEUhVDxF28XYPuhbg8y3EofQVgvLTvMJ2BpXr4cg3gMiUx18",
  "key8": "3QYhqv6x6fNDgoF5QUwoLhQnmQESi94b5oLpHi1gcT4YdP9JidgwaKHo7V8Pi1MY2k5LJuqer9RaZeyCMwnBppRf",
  "key9": "54hKjzFujCahj1vkpQ1MdxGyNYzMb5HGnGxYwBbBES4LJUyKBxpijarDzhJiyg2F8jFvbC14qmmYAL8hQJKgff8V",
  "key10": "2Peo1cJDZZcSRD2siN3aZ7HmHDazLKkhLG4Y9Vg7nfCN46iWAUC5eyQVduVjW6HkdKpwa5Rm2YvBxws3tUWt9ZwN",
  "key11": "3TgUYHG1knxZpmTmfZngMhgueVdjFx8XBNDR3H9aqM2DDamJCPLmNNhAu9sEyLevpdpCJUEebF5EtvqVK5ZKjMWt",
  "key12": "f71u61afHKN389UNkywfigt9Pr2y5m5RXCxDShk2vFSUr6tV21unvVmQR9HQiWy7THjokwKvaan6htSVVtkhDCj",
  "key13": "5Ngo5mgMogZdwa6PhUeUp5pws9egVWW9bhSxYVJFEZrLp1Z4UUJQQfoP17UKB59Wnw33mesj6NkjzVmxNqP3x31H",
  "key14": "33WkGbxDYg4VGU8aaAiszFexcGVuBPNmCjaVLeCKuSJ7LWuEfjRgFbWtxnkm5NikCE9CLRUKWAZQRqxjvRbvwPL5",
  "key15": "38pHqPTJxs2H5d887K68UEf8GujnYfzQfaojRbs7oK8CSTo6sk2fE6emkM7VV4J1v7pf9BvPdagEaMfZ2Fj2aKCx",
  "key16": "2V8U8fiuTfCorCWYfMAY1SKiYF5oX7cDjuK5VZDBYEsumybkyTvkox3sGFGSMxrfridJkah8cv7gPV9z3SLai5Xk",
  "key17": "4BMCgfRUvyBUen4Mt1JaL3YYnoGy1NMKfjLiyPvMTQMqfZucHKT2TjEphz4jDS3XoNTrZrzsmjaLqoQhH3wdFUFm",
  "key18": "4QEbgC2J8s2UoF32UGEoGwsgkiYwQuuLddoFqbtnWCgczhun7cD9SGh4e6k8wt2CvBUpDoYSuurRJtqEgD46be3o",
  "key19": "5acZinof8Tpd7PY73E1WqFoY8CaUHsweYW4LDcd8jLMBcJfdeEuMxFFJUjZDVSYgJNpmmAkj8iTjqtHTzyY3DJEW",
  "key20": "AtXnmLPSfQeTi9QEf6hC3S1uZebmzLUYPi7z9tK23KpMLQPKZPkFQNVX8c1rJLJBodc5dQ9mWQCqGsCSMwJTj1y",
  "key21": "sk49CiUg1pXaPt8HhkU2PtCBSQMWTaHNQKC9g3eMkQ1ANzHBtJDhWkMCoMTaNaDBqY7FVFQecnnzhjqq2XEwjJk",
  "key22": "SDubRRjFKKK56ebtYXFHonH41b15ubrGjSgmpf3Qiir8CTEnmbxjuihi12GN8aaDw5Ehtge6CLKshP5Xam3qiyE",
  "key23": "4otkMWoiD2bQWxK53YYXfvPJgENrnkg28ND74o8t6ywvrnWx14gkpdG5Qcdsw1canz3Si4AN7huPTWnSAak4T2cC",
  "key24": "5KwT3dTivRubBfEPVzHy66Ws3iqPrkq9m8zeEbRP8fYBREtb1RBf6wPBQdG1Qkuy4Rm7EER3pnzQVoNaabq1M66A",
  "key25": "2xj6mrrVop9a79c5U8bPzR97X11HMDe7NTQRMYb5TZX7Ab6NfQfjeuFb4Jwka2847iFBjr7zVsvY4xxHNW6Uitgf",
  "key26": "Mmqdj1352J9it8VPcdsw1LQ5N4omaFcAmEvbRtwkzKZCRzJAzzRDdNqp49kJMeZXBzPMvpaNMcTdiFN4v15W7nU",
  "key27": "495GEZTrfkmgcnHKmaGKWtj4t77cKswpzaAFstYvPK27D9X2g7YiMUt5WNJ6bnCdrSHQ7Dugfi8bAG64AsNeuvTz",
  "key28": "5Wpdf49qQDdZEEXDUNQjCcgMpwYjF6sYzqxSH8m2PV9JZc4dq19RqEhmksMJrWZeV9r4SbmCQrq3sKh6zs5zV4Ls",
  "key29": "3cmn1svbLj5fFbLzYX7pSHorMw8kP4Z63fRVvrJjeVzdhnCwXHDtv8itHyhuuo1a7cqpifx6R7DUtS6LNSZs356z",
  "key30": "4ZJtj7j8UBYruyvZNzAtnAsw57R8anDeek1UHxpoyM8ceWC4FmKiGmm3frNaDW9uBHxVsnDGpG5kMuLYtXyJzLYT",
  "key31": "48m6TsbKg4HZzoDh9dkNQV6CbArybTiRifNE6AxvHhy9XRhcBxXaRzWagZDTizFAgGnfiW7s4vPHP1HMBK4T641e",
  "key32": "5v1324TZaX8Ksd8TpSqLW6kCCQzCuVb5kxyBCNEWNxCj5N5EnqCezbqNXegPYS7XB2fuk1naxvTVUZdt78GdR6Dd",
  "key33": "3qxYewKeNKisAZVQ6ae7D2tgDXQwVYPz1qX58v9XVLoNrXCX2pL4Ep6sGkf1FmrLyDEA7RkY61SXqoUMZdDjuzo4",
  "key34": "5Z1Z1wCY4cBPh11fspKTBzphmujCpeQqQ7ra2hj2wKxa9hBbuJDg8hJSrru1PuSRRmwgxSHCDPUnSgzMkhx9ER9P",
  "key35": "piVTR6sQKuJHbrBnFbtEvq58sou4ymPXDkxD6dDNvKkyY5EgcrNckhrjGxMWEFW2tp9L3wVVxfv88DFUo3HXA9F",
  "key36": "5vYjg3LgGVqYr36Lnd7LjTfKcJij7PfL5da6Hz3NbR3BgjU7Eb6Q3uBvTDx8pP4NT24YBwBPCowuRYDfCaYiipMk",
  "key37": "4RyUBw7sP3YFSuViDVtjW5jvdWCV5s6sPs4e2gpb8bcV2qbmBfojzuM48HADrZA7pCot2gSUv8S3zYQ24eEjBFqo",
  "key38": "3zAju6fpFjdHY9refWjT6vv7pYDy68oKB55uh24iUzwDg3NDfcCyALfvVWggKFf3C5MpsYJxrWmz4x2qvMfRubJE",
  "key39": "YCsaevPYBNZzVgQ9m3Whr4fP2fQRXAuTgvWQ7Q65QRPqVULqtgBmFoNwbxBfTKysTDByUkUs8i79DmvuMhpzn92",
  "key40": "5szmdCDKkqdRk1zU8AgVJxWyYTE8TD4YmtkbX6P4VVh5Uvjm1wtoquANJooES8y5vxVvF7iFdv6ywuUg93QjveGD",
  "key41": "64oDnk8ZgRakxsKHmRSV4cgYmJNinZi31MBsZSr6SKMBoWd7zgzPpjBfeAN4xrdC1DJJQqSmtghmUGYpLQqtAD1Q",
  "key42": "fTkEfizEtWTr3n6Wg8U2hUeUorDXRZdKmjaPZCbmSN33jaLYYpuvgfU39JPS5hXAoWDU1e9rgZWk15KKQZfVXMx",
  "key43": "5Qfdv2PtbZGMdpi1rzW9n21EEi5Xh9Sg3YfhAAsRG6vWnBKeEZCptmE8xu3kBVkXyZjs5dyDWqgZrDJKs9oR43PK",
  "key44": "3hBuFFhAnMn8teMyrTzCniuHXX7jaWVfuo7edsubZhFQKiL27WayB8AtcAyYCC3b8opGdBJxeMmBasKkjATcWVXF",
  "key45": "3bax6FsDfbPEjF4543GfBAjB1QikkTjfqQRgeAoCMKLXq64vnYkfN96tAEYuFGeE623u9n5tYJiSHbXzoBQhJfeq"
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
