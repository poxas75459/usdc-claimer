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
    "4B8wyE5aNCJnsZQPU3YG1gLpENzLrTE2AryipkVoZguNJioNPQHjHfxdxq7m35x46XPTZM9kS65rNYCaNf7RW8aN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NqbHkGNcS3SrLu5nGBd6dfuzy9QyWajrmsZmg6rx1VAr9SD1Uh6UvGdgpEv4uiU86fA79hocME7Bx57RphVCXcG",
  "key1": "4vfr9pRUE8tZXsBnNj1eQw5LPKXH7XovZJhGaxhw9UCs4cgM9S3F2KgyBbu1sqD4Hg5VcyauSmqbwHpY463b1qJM",
  "key2": "4t8u9DcyzhirzFR5AFe37QHGrDoo5weMnD6VgWKAK33ob46ipD2GaHvassAn1NKc8sT1dezN8d7yt73S7TUg5DMX",
  "key3": "qccVqsXSz3KRBTbb4Yzzk1oUpPbr8pUZyiQ6V8Kd3LZwdEzs4RebJzAnC87sAQruUvfgdtPC7i3q1YEVSmX9MmW",
  "key4": "3BnCEsC9DDPbWezuWZmvbf99P9aE7BtK1oxNbgVWCrzoucgEChSjDN3pmsB8T4jcGxUbxaHeb6uPwFrc1nNHitRE",
  "key5": "2CfaMdHTKPtt3KsNh6K1AG7vzvLh1x8TzPFZRidq1PDosf9BjgVK8yjGFe3uhyiVV6bMNR9e7vcqdokouJG6CKjq",
  "key6": "2JrXU4UiLXHAfwsp1GfA5zT4emw7D1Ywuo13cwtYr3UhYzF5jFvMMmYzhG3KCY7rMsufHbT7SjKcuskL12GK9bMJ",
  "key7": "XUnF5KjYKHxaWTdXBymXNuyoSMUHXHqCp9RigBzd9Q9n5u5Vf25DduKi3jkgDBuHhEpyKi8yHZK9QQ4FsiZq7Rd",
  "key8": "3q87o8sBngeNMVvtSEt4jJnq6jokKnQXqkTZ8efJguadryGMUqtwdTyNCJS8ntF9Gut6JpH1BRXyLcLwEKBgZJgc",
  "key9": "4rLvCWL9tnkrhBi5azcq78rzFfiNQ3Va3CVzUUbApwqtfn2WpFCKj5gJSWNiEKwuuc1bvpbhoekxXMXUeuy1Nfeu",
  "key10": "22eB4E41SH9yfEr8xUJSNmDb1Ra5Eseh3YuYhc7YuPivYYH5aadg2S6h2PMik12qzKapQtxYU48FziBxU2ueS2e9",
  "key11": "2ZYE6FDbJdkXEkBvLFbCg8WNc2CeSUxcxoTq1r59iPfKNzxpgdqxsH9jQMsGy85htugWSVRnmy1F8yaet67dJrK9",
  "key12": "2WTxtHqwRrXekMYvcQRYGywkh4wnaanDQwcnDck3sNbzWNWfHAjNBzrvhsVC9GGebr1ksWxsVje3KTpfxRagFSYK",
  "key13": "eTjKmnKUGVDjSd8DVgN1afvHa432kqsCeGiSJTZUuVLSc6BG73nNyC8g1ywrjmKinYXD2RRu5BKBjm23z26yfWx",
  "key14": "3bAMKYNfDiikVUPVq7zZR75WVb7rFC4YHL24msYFbwTCWimruoByS7VUC97enM5sXykkQKKS2r7rDBNhZhxK8amy",
  "key15": "3zK9zURxyJEWg3T8FKQLCNK4Uh95qiWbQR7yKTQ4surdYRvrbQiDsg7ctGytsS9b4AbTzztKDcs9weshd3CozvVv",
  "key16": "3CcvWHVJJSti9K5nWbWcvNwK3ZYYir8LqsXVLTY6BThZVEMzGNVvL7NbQ1pfzdRAR3wT7ysQuKFFgnQXtRcDyN5V",
  "key17": "2vLHcjSAKGhcp4uzTKffUV3N3fu36QUgcojdq9v2fZd3KVMGSHWDh6bVz6RnN8XhC7fqzqVPGRrKvdJJ74hVgQgT",
  "key18": "21VrKj3xwm8UnazgeWXGpCYJAqgXiJkqM5H5Xjf5thmtAAqdLLHUmwrYLhaSpaCn6VSkYHuT6zo6TJmukySCRgVb",
  "key19": "4NuymYvYT5JgREevSJJtdH4ZxvBhuJDN19N1k1eK1tGTzGZvtSXqC8JHsbE6hYRAz2u4qsPh2AaLi7kDWg19H7vR",
  "key20": "4YktFEsbFFSkR7HuTebKSQPq5hifkFypZchUPCGbAc514suc8dzJFsqRXjBknNTk1SmtVgpDvpWreuX6MwBrtbNV",
  "key21": "Mz3x5FjDz3uRL1fs9iej1GG3yKCXo3nLzyvo86t2NGtfqgedHredsRRRF7TAqhPUQHJrZp29BGsQQhVvY2Df5p9",
  "key22": "YEDCDS8iDgBLHjZDMmVPy6t5LMHdbYDaxEeSnY4hPYRLELUN1hNvrJY2JJFkk9iTokXAvSfTo63yD1FEsxpArEo",
  "key23": "3adjtX8tsU8oVDbAw9jpoyds2t35PgFaeqB3umT1Ac2FbpbgVFqGb2D72h5U1YViNXbk3uR8x2bAMYeowBMEmw3Q",
  "key24": "3qUwWtqYA8KhHr2sSxqJqehzgXu3dQayyKiWWrdeaCqEZKqxG5xvmvQiNjzeBZnD8GhgFW9iB4AbrxSYMzutyt7D",
  "key25": "3qV7aof3xJ7PYfG1Kb6LYuqt5hAPAwe9hb5AmXTZbdL32hrmmoXtgo1frTZe8r8feJLdNWZcRnkdw26m1eqBqwQL",
  "key26": "2R4gZQ3PLFCqXXAn4bwURMP7sQkKwpP33V6qfYgK9u2xb3jv3ArJ9BzzRRsWBpAyBAd7GmRUSJnmdMvKE1sr7gKt",
  "key27": "5ZiUk7aKKL7CdtyjWf9Hixffa9kGJYehrnH74hoYghdcgrWPhcrx95Gu7272R6jUdYSyH6xz2WXa7go3rWZnguDZ",
  "key28": "24udHK1RggFjihiTLjZ4aH3aUyA7RydL3itKb9YyCPvq236DLNKproJmNUKhABMH6a2vTA695feW41KeaDay3s2y",
  "key29": "3267PbEaD7tEGsM3SR7RK6rTDfhAgUpLA2chNGLmm7QBCxr3DF3UNriqQ3CwU2uTRYoy3Nw1bBd1QVVn1p7EjZbB",
  "key30": "2MzHaEmkrdZBGMd1hAZqEUFFjMK8osMqvR8YK3WfauCyP8wkzzJiSSA7BgmUjYvcGFJRBr2v63Zut74sbnJSzT1c",
  "key31": "671A89uMNCJKgWf2YyEMHR4X2gdZsSjFtdvxxvKcMZcBtr9TKVy2UGivxdsXNF9qFTMhCGBHW2f3CJymRSomhLuV",
  "key32": "2PEHK7ZbrHsi2AwWkDqM58BowctHYu8WHFotaPnbrApAvDJDQSh2nT1KPQ35AzYSQ28h5CqErQLvsYfER5ATxRwX",
  "key33": "FqTEnzXNPfpKuVeXmzx8PVphSh3DhgyHtkt8YLrhgMwBSYD9jA9QCNMRbffEn5ov4wZgx96XDXZpMAbSh9KtGvJ",
  "key34": "647AQ4CMi467AjCcmKux6PThoMmVgJhthEDfxid6AqhtraZhipQj54SXXMT3YwUbJr4zpRokYpXuVcEoxyB69d2o",
  "key35": "2as8TJJZr4jv1GyY5Gv8s4kt5AEC4RTxg6Cz6qpjSa42hG4Lz2bBL48LJWmdaLRX8qJeAhoh6z69iiasEfa8UZsq",
  "key36": "2GF6fRosWALZUVdiz6fnPw3zCMxptH9gxXQfF6cDWusZP4T2hSmCQDqa49Am13kxaopPLR4fDcJ38JrrjUF9jVyb",
  "key37": "5GjWuzqdDKGKEzxQV1SJnb63NncZqVWGPcoK8PCmXv7nfYVD5Vw2e66D66hiTP1shWoBYhiduSt8y4rx8i9L6uAV",
  "key38": "5fGKh7KmHZb5cqMUDz9MgwyPve8vo8kLd83ogqsxFkHDtsAU6k9mFqq3ALXCs7Dh2tpwD2B32h5ZGR4kvUtSNhKg",
  "key39": "5LTxvEVYVcsADGk2Z9FTZ2fuEtAJZwHn3teEWknN3fCdhhQMtU9cWVQGmVBCJdmpLzbaWMRs99pswSimBFH142B4",
  "key40": "2BoMz6QGiKgsFsj4UdHU2WdB573hzrHpKtEzhYTNmrr1LGgF8A5oZxVKdfTvwnMZzEr9rw2XQDt7mV2V9oxD8qs2",
  "key41": "5orCAzMvwRR49dTNUy3yQej88JHzaqyQiXrkEFREDvQ93qDkd2Ypg6H2pTudrPSB9K576r9pV6YXpP1QQdxJwE8u"
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
