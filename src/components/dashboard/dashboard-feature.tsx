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
    "5a2to57ytPeLTqQ6Ms8RKDBJziWk3A9DGFkyay87yvTTYHySHX1dB6gAvc3x1ND9MtYU7zRscLQLeU6thMkgYLyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SC2YrQAwa5oMQNdFAHGH1PFYDFeoaXpvh69LZW2WNASLj7LfHV1wZNELRbRDZxnRA751i1SgTY5PJfWmvu6q2ZA",
  "key1": "61eNaVqNqoaTPnXr6RH8mPYzQAWxPiyzHq8gFmgujnY9341YgKv14YzUYCRYeJELVkdVTUcEPeE2Y6yvuZCBtgde",
  "key2": "2Egmax6NWgWa6XgeRuZ9uxWpsXewRvDvzp829KwPm54KW6UnmmRWPomQNJnQP2ky6UCHy52vg8UVQXadUVBjnHkY",
  "key3": "WMGVXjU7JUbn4QFrN1Xd5QgLdep5eYSsT5WmYQ1b2bn4XpzZgE1jANMcN8WMY5G1SK4qmPgT6vDqpgkfm9dZQJe",
  "key4": "2x98ZkMsrrg44mmhTsyk9yJT1HNn1wvaMPvFLYAJfaTZg43ELxQK7pxoticDKUCPHcvn123Ts57z6HouYSk83kUM",
  "key5": "3gayq9GS1FTfG52aVB1oQg3dVdnRW4VieNhXNTVx9gMvY7RPfWcSpPdKA6jwcb3H6dZBgC2HHDFedi9cdJH15Ujg",
  "key6": "5iiaCJRn758ZCBWdBafYyoUFrAme9XR3tqdSwzH6D7KYMnSbw9MLqkJLosLWJeT7WUnvdQ5d7gki1KRuGD3BJjFJ",
  "key7": "GSK15YwbvSHiSuc6MrTQuott1fZhySjgMxjzb4gJYhT9bsbLcnwGoByES3dfXQTT6sZKCxKmAFVeoUuVLM2zUty",
  "key8": "4sTuEiSosgHJqWCh19X3mnrS3MdU9LEet9msKwPPJV8mVd84LpKS18w5bB1Y7Kb9uk4W4S3gwF4crhsZrio7QXqX",
  "key9": "2b3rcVuY4DuunvJWr6NdtWrd8wDB5Wo8aoJLveDdgzgBWekR8wt2LqzXkzQv4NH3EXT2HYwMXW4coAHXcGbEoHLq",
  "key10": "61GSV2Jja3citAGnXkPZ8Qx5fQivxBaNcZHnk4hEKzQA5uxQ56KGkAKqB3eFzsdsYhmK9q5Tufg4ZiYhqUNqUEPV",
  "key11": "3ZG9y9tt8rhHJ1UpAQRPQRo51s9Sx6simTaHqiqiFkZfJxTJ9kD349FqZ91TRYTAUx6C2qdU294FiQo3FN4rpudg",
  "key12": "3ZRHvB8U8uvG7FTpwsi7PtQ5C6GWdt5Ynak2TVxgmcWWZq9qtYh1YjNJnkEqh7FHbWQ5TzGPrdsumwE6VXMoZ2Bf",
  "key13": "2W4rXN4tYaf45eh77hMDSHmMYmzx3kgnQJcLgt8JFvtdBXbbXhqSyie9acWhrhTMuU2n8jY2G7ACfiU1d2XczZHg",
  "key14": "4MmL2TLDTrxNznuCY7WQa6xJ3F3vZUXzD5opooenTWPwoJ8y6e8xdR7XFmkvHnmFvXeZNqQfygCxtsM5dTS2BJFb",
  "key15": "5MDHXEdM68k4Pcma5WvGeK3KVFJniBStvU94ECzFVsVs42kaWgVa6fqojQ6w96U5yYiRVAPYBzoYeFUHuT3oAc98",
  "key16": "4YSV8zKTFsUZi2P7NSWjzK3VrMt6XLVBJu26znpMb1KKaG72fH2cZ4rvHhdGiuyZ3hDRq2LbNpZrk5WkZ7obCwZk",
  "key17": "434fVwyzgvWAiPzt32oTVKsxJtGYBKpeQfytjRPKA7hAtwZDdgFfJ7MxeH6GHKYFjkH5YZVka5JkVnbuKgJfMN7o",
  "key18": "22UsiYtrRYkxDCnMoT5tZFCo1Bpp78GSoD7oJMhFdbib1i3GCwbi98Y5iiTriDzsNy8wDo1VuopVyJ6kL1VPovL5",
  "key19": "3wNvW82iqqp9wAEaYBktp18QhcXKRKZc3ADPT2RsRjkYH5ZpQzGgc45w8xe1gqQNSx9gxKUhoYYDKD9o6QySpUQ2",
  "key20": "4PxBXAXWty3jPdNCeAeZzMg7J61XKrvDCnFATssYhiYcpf1zCMQRAwFi8ggsxJiE2x2HuLMhf84fns1XAHfVVi1z",
  "key21": "YtMRfh23qERCKR1JFrwTVC48NYaM6oFANYtE6hiyxJnDnjAS1pE7MzydaVXdEEKgQqXRjZwykT7XatCG3pNrDo8",
  "key22": "3FYsRVCVwoXXdhLwig8ifBZEVqKkXNCbv2spCCzs7FVCB6kof1hb5B5Dbun3WvkYbEyrJSHkMa4MsBUNCuKSWqt1",
  "key23": "4Znx4fgPhNEPUivD2Sdt6uAGqhNT4Wg3PJJKbtNC9HsmAa18KNEDL3sYKJtEX5E91FoTtnKPBEGWpWm39CVHD2jx",
  "key24": "3DFTmyvpYzNR7XFikBKepYrZLoHchiVMp75oGBiDDQxscYGCC1DNaBdXBXRst3mDqo8WLocj6jaCkBJNLLULuunS",
  "key25": "r92mQdX4WAM7VxjgxHdfFN3yebPB33CjPmDEsqpiVtQsRTNtpcx362AhHhhUe2KC9dm51HEevu2zJLnw4tbbtwL",
  "key26": "23rWPJCa8yNhYjFGbrBwEpJT7u91c73pvTbkMCwnFxE2PsRvCwunzG5wrAP6ej3yejCWygadPHsRvDM436Vk2TR1",
  "key27": "4cqkUwQKmJAaix9Ff2PwnbrwzwLMzxmKf3NXcUpfS7EAH2JtftcgHtTfeRPu9xsE5H7P6b4oX8SPgdbUdB1Mt9Ta",
  "key28": "5GiXj1Z1qTySmEJa4xXDhwcNg5nR6zbsRyVQrkYTHkw5Ut9LA6fr3F9s2sutvTnP9tF5wVzZ2cvekQacrH1kNLbh",
  "key29": "3rnPmEFupfsK7eXF3W3ak2AmoVAggsnBPRgz8USz1hv2i65y8TRQaAFnuBshhfGJdk7SRwNB1fhtD8uSD2zciMjT",
  "key30": "58jvbb6FCMmMnnFY4b9gLKi7KWjXp4KR2Dg6ftb4eejvrL4jrEV67hap8VpW6qMwS9F7u5LykqLuMkFEhP6FfnAq",
  "key31": "47HrTJ6LYwqdToGRk6hvCxXVosZoFjMDYjwFmscF4H1hk5LzWcRUH8moLAkGUadsU6uTQTwyytrsZPrhA9zwpU2t",
  "key32": "wrT7b1Lw8j4mZEgekEmpKwtzj6P9qv4RHzeV9fDE4vpPuJWxKdinCwp5D5g2eFfKM8Gi85f2TEtw2SD5hQnTVnm",
  "key33": "36jMPPKo3cL6NATXqMvboxHtqTEmA3JWYLXa55EUCpNL41mJsnj87F9mb46Q91Ks6MouW3AGXWgnjhPzV6gYJnDM",
  "key34": "45GGBtXZPpCHamyAM6ovZC4XEWxpv4FBgfpcYydgRHbYfu2xs1cqWydadV6ANzwUuTpUF662pFpKSg9dyWpz6P78",
  "key35": "4eM4tdV8xCSXWcrfnFm9Cs6tybftpuUutFTVyFsi9SsDrQjGKZzfumwaE5PK7FwK7GeyYXYKsmuJs65L3Qjdre9y",
  "key36": "Cd4FK8u66DknZdNvkCXtih4RZsJBn4Ao9s74Am7ew55zUx74C66WE6fnBhBF7DKd7BsScErVmmhBrFbkARBh4qj",
  "key37": "3xmPYZ3jULEQa8isXCpCXFbd3SmTvF5bn5aszUT2NDmvJJzowC2mhoc3TMdJF9SuDkP85jrWK19h36kQ4EBd2oeQ",
  "key38": "2Lb1dyD9tUycQhk9GqFiTjVpjpwRvocRqEzjeD94DmbxMjFbKJhNKX4ycHvTAcvcqnMeL3mNYN5mgcg68ACtHTDw",
  "key39": "4pwk1hAVC3SXCpBJRwbvX9f2G5FFTesBDPp9VVqUfFoRsfo6XBPYxjA1GmWp6VcKLmkNfbhzqtbBtVSUggGSJDrL",
  "key40": "2MjVnNrG4LEqBEaCp2Gt5F4gzFUD3HqcqCeByeooY6MByA7XbkHXk3GSorGWHmRe6tk2RwgcZzKV1etjgXhEjh3T",
  "key41": "5mNbHidf84DwV8wR9cp4y5ww8cipy9tsMbXPpEzCT2179qTFLy8Z5zqjwSrSg5SToUTwJBzGaSbMgW9kd8A3RURj",
  "key42": "2ZcrVjSjQRXKJV7B4BBm6rLAJSxq3UH98Fxfr1bemFBLFtjpn6DrAChr6nFjhhg8jyhDZqEMJKxtCDC3RXyM11fd"
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
