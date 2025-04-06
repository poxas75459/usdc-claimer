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
    "3AnWK4pfwLBc4gYfL2HLAuXC4z7ZAEa1wwhvNyZ1MeoUoWjoTkiSERmVmHNTuGz5tN1C4VaQEzVM4rFQtf39t61B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AosK9VqmzMXCt66vGv4Xxa41nA4tHxYhEjmczk9vtK5wHCmT48wGNy269EGUQ6bbYPxkBAaEEQ2iqoHU1VztJu2",
  "key1": "4qDEpnKHaYw9sS4mXqxB4QXPz9uofrh66tV5YKu7R6BrEeVmfa38s9htXmYTTKQ1WPcVwo9kjySSkuV65TFMsktN",
  "key2": "2fcKEre7qpW3qszgtaso4Br2uxzCbFDEF654FP3AMpiNLK4ryTudm35rCpiSqwGHKqboFq4TEW2oRj6428mGDUUz",
  "key3": "4RJE7b56XG5osxxnJqtAMwKbzZMVW6Ak8EkW1Aeqr1ysSEpr1Uwizhrjoappb8Virf5ftbuQpZBxfnfWwfZwT1Ry",
  "key4": "rSYGqZPn8gruKqbfyK7fqjcsebHm2ycZaVDuvNYFUksqGp6wJPucSHeSnkjS2tCnqn6jFcZrQaR9pXwLcChjgeG",
  "key5": "36A8tUrSJp5jucCi2QVSPZyZgBXGmLTAcrBiHQS72vYrnB75fVPJYSWifDtYGfbcJv1rgcdCMKP4QWStqG6vdF6N",
  "key6": "5F39o1jdZQVcuHjKoT5ggv2vk8986vjw4e2NF4Lq8AZeqXuyJuqKmBV6pQDg9qcNvgd3EdhU6CgMRiH8axAYMFi",
  "key7": "SWu1XxEuwQmPwkwG6UTBvHbq8xDSSHAQQhprZCfFwvecr2cEboabdjLkASvuSYqd6hGuN3UGgRNmMhyAgKiKAae",
  "key8": "Q2ieDyAkssaAnYSsDZ379iPa8nX1U6qjMdKeingRn4NdbgsCaqrTtq5mAGe6sbo59vm12KUaAGVKGdhF76QK2Yf",
  "key9": "2iayxS8j9kZhZbdJGSheEqePLXTX8bTYgDmLbncEx6bBXtfwBuitvX8xeenvW9SHUJmjZ1oC7TUL1QhKEP4fS1DC",
  "key10": "3svXXUhQzLCa7CK1uH8uNonmtZZ4FCKjPgdULkQ71su6xqsvD7Gp3AQDaSVfjKqJmQPJFDvM2DgjDSUwrYkSmX5f",
  "key11": "21k6TE9AAMXnajmQCrFPpXTedZaq9S1N4t8h34Ph67AdEtsdJqJ1tkmJgjQeVKcnCDrAwwrspJ4gj8bFuHjk27im",
  "key12": "4F2Md5HfsmZCr4aPbDE97NS2SbHsCBjMFXhQx3tk7yAkmWMw9ALMxwoku9vPjkKQTkUJAmVThtw4URskTXjYYCLM",
  "key13": "5Mx3HpZQCRdPgHYNHBKDciNK2yycZvYkUuJNMyqwhaFEwBScgWM8iDv3xqGrUNKa32e1diAhXwE768SsoGi2B7ff",
  "key14": "54D3THSPB2ztoERWZMz6L2yoY6igCPnSShhuDj8n98K4sxuki4EjsPrGKYQvxMxa7EqdDgbKnB6YY1Fysc3GXGTE",
  "key15": "5StVs4gez9eWVH26Rz7aViwtNd9MeduLBkeLHHJ6qQkjSjrYg7fwfa2mA8fcNXebAssYEF3qWT5rBLFkGMgKikyS",
  "key16": "3mWT2XpHT3V7Nbn6ssxPoz5C9hnvH5CbbAkwmPdfsARxzikwtqSmXsUbj7EzjwWcYLPzD4aLE7MHKNe4cULZVWnQ",
  "key17": "4e96kCkYesDFcsNxTFRP7Z3vvTfmgpa3fGp1S2x1dq2QrqfZrEzX58R6PPUuQKzbVHbbSqRtFmvrgusUUmc4hNik",
  "key18": "56F1Z1HSbXyFBtXR76ZV1SnCkdy2puzEdhSjBR7XwmGNF3DbnEnHSSqYXTwik2GGgVGVdzg1kokzRGML3sbXt3J4",
  "key19": "3GZAWXiNL4ZDbVqUQHVzFj1LdjMxkZNP3ZSXd9Fn45Br1Rpo2KcmXA5uV5TdQjRE1oVVhpGu6BuFRUDjto1iPkMz",
  "key20": "7r2pUL9rxgDe3fA2JsFpRd2oXW5zu3tYi6B11JPr5zbt7jZj8nhopSQ81iPc8Eg5HapJwobdcwHAz7fZ3d7yB6c",
  "key21": "4Dup9DTiLCWrfyDh4KB2S4YsL3fbrHEuTGVV1FdfQKcYpqkncmx3YVSa85ozaZfJZNZCKS1vf7JahX2f1wMohjst",
  "key22": "3vnXFwTsoTMQwoVy8wb1woFuXjpC6wmqy9Tvbf4jGMmbWXnFGJ3dtKvZSwU6bHBjKaButuvnStEuXmE3es842nGt",
  "key23": "2wAsuHg1dve3uAphphXQtptKzWxBdBpSKeytjkDSrTTCdAvTtnmuiicmDEhLhnCadpMHdg7M3oso8z2uKGQPAsGH",
  "key24": "5heEtB6mqnUXiAntLUZjbJmDS9svVxzbrsogmULmSm2ADbssD5nGG9oCyP2inZW17YgAvMRCD7tETdenYR2dedwL",
  "key25": "5rxza2KJjgMb2anqJSGT7nhH4iS6U4RjF17KjWpArZsHKAf8ymf6r8MBxTe3rr8QDdPK1s65r7mZPKbu86LEMwvK",
  "key26": "4h97zpYDK3Q4UNB6Q2JL8F4CL44eYKQ2pXUQ4KQP6DrhAyxRPyxzQcRGrZmZRgdBc876RcCfWn8NzYTq18XgFNGa",
  "key27": "5GBk7aBfKSFu39Zb1nzWvHP6bh7sqyjUnsSaNEaCSJ35jX8h46xQNZ7eeSZ4NQh5yNJcnsnxibY9mG2gbWxojaE9",
  "key28": "45BbmYLzGmz4AoS7mPe8K8Tus1qKP1nHXHRuS8Fn8oEcBQb4R5Xn3zFXdzhySaiTp4sQHZZ3xPz7EFShR3LexJnn",
  "key29": "5CEifiqXtM2XEWZw9SBCB6LuVA5k4JYe2Psg9jkKKFxbtZexz1jnXNmSGvbJcVVvojSiXqHRDjBjrj6MbrZSVdbk",
  "key30": "5BUcBfhyTB2WpAKtHxSjwNT5RLgcVENaC5kBWTTxnhDdsHHPN2xAyc6BJTHQ7bjr6ZTMqbTdG7kkRwnwMYRMUGRM",
  "key31": "2MPukjipRj117adGJC5dkkxJUGJm3ZYqQpLQnHmvPKvvYP5DTLzBvkXoGtt6g2CRVML2egX1nDBdKGRNXxrjGxWU",
  "key32": "5kwguCMXusGxMymfeG2tS7piNsCJU1jbzBS53VgyayCW9J8zrwTdZk7qqMLtyJ9NbMYLjT3eRtJ5sNsXv9j5j8WP",
  "key33": "4bMDVutaHDuNtvrMKWGLGkWeNMtzasXwubdvDtjpNiGa2DChTgBGrtedXVAGR7behmmx7ZqTWZWu3fNaKXr5Lgx7",
  "key34": "5PJvRnqyt9kg2cqdi5PafgNXEpsXDCcXJbQLhiQ2iZmDVfof3WZtyqDoeEk3XJVLAs8QZWiwKGsNVYYi7tEFSdoG",
  "key35": "55K4RR3tW6nF1UauBcG1Xi8Y5mkT7v3YbBzC2Nw3gvbjcrGLkwJRsMM6vueA3iJLFxz6Yuhf2pVXfpFVcwZGksu4",
  "key36": "28coNiX2kPjcsqgi7r1dbsM5w6EsStH4Vgvt2ysiYtsgHXdqxBHkSciwzVGVFMcqEChoxsac22VBurSKnJ4r7xxV",
  "key37": "5CxRCZw4Lw7syGsyP8uHsmrtQxc5K5Z43sfnNdnXyF885N9oP2ypsUMGNFxZo13oUDXT598464YWp2atcVppjE45",
  "key38": "GvczqQaFvFZe7iRh63JGpoHzCTHhy11cqRAiTQatKWSQLZGTLZme2JDM3ZRFNmyupGv3SPLZMJf1uYuZ4MxuTtk",
  "key39": "5i5rNT39zHNUvgrmVib6ZdARybet3K1eQg73oZfXWjm2d8zra9jYohaLNmJkG7nV87c8a2k6WCBB6EA3c5CMDSdk",
  "key40": "59DmGUrrwnr62a7y1Ssw42scXDwrwpFQUgVnMNDMR3gtQ3ycubDESXL8RfD6am4f1NV99J74aDeES3FSXm2dSFy"
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
