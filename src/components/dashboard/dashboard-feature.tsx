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
    "32VZNL4kJTnRJYgANTUzh69nd1ZKougmxdKNMe6J1JpTtScRAaYfbF35ooa5JZtYoA41jfrf22gPQx3JESaYhctJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sLo8zJ28m7g1ho2mo64NMQXeSHonZdsBpeqWxzsyPgPYz7T4NHSgSz4NpKfyYb9khj4rukHsPKu5q2vytAEAAjR",
  "key1": "9HK8Vo4LdnbHJxbybZw9jLqEY8d5TergAUEb92JvVUbK4omMEsXM9WQfPhPfezYJayeSYpgLZaxcYzcaNBpG251",
  "key2": "49wsG1ZQnfzTgusqoLNPRQtHngTuKwWs57FAkpozcFmZw5pPMpJueTrDoCbf43RksbdSMhE86ojqteY9i7gLMLMN",
  "key3": "2nuyfJSaGgidDjvSJ7smuAo7zDjZr6WNnimgx3ooj2gsFsvvghF6HkgLvjiguvzv3Tf6yrZgBhXTjDAkcB78nizN",
  "key4": "4wnB1vbyADknMVQduaJFCM3VnDViJUxT9BD3PHoa3fmkysvKaj364gpWM51iB1Ai1pNhyrnxUDctr1kP6Sa9bZ5n",
  "key5": "jR4VsX6GBqWqoCyveoyHNkYVc5KZUNJuWMkVYuwwuJVG6sn5f1Pdvq75M6J3Zy3GZwXRehbuu4XtjeN174ieXcs",
  "key6": "4usgVFQe8uDhBHaN4saD9sU6TJVRLvF6FKxzeXy289buBvLF2uGjoKuPEhYbwUfZA4v2GwXYKHtjg77hqo6wqjr7",
  "key7": "4mE5XGMjGyHKdi5QhXYu47HDv7C52XWtd648y6L2mcEkN5Qc3qq58wu1BZw1f7CmrRv2Ex235GFzyJWfZRwV3eaa",
  "key8": "5NtYtbSLszXeUHxbZTnVPxu37m5kKUdGUoX2hQpCnhAkL8QqvD6BAqEPSpjm6RuMcCVfWkC3jrChu9KGzx1uNKjP",
  "key9": "5MvhF2GJsinQSr82Hrjv3chTErwjambtP3BTpMTQLXUJdQcBYjB7XxTEwXpsh1kLC75PbVSw2rLqKj2A1MxT8AXN",
  "key10": "64FpLCZNfVwugPyVdk5HTpbS1VSp9VFg6e42YAStZSf46paghHhAKba3mbAsiMRvofwECqBe9L3ZnDauCHtzrpUR",
  "key11": "641rbko7Vprh5LCpWVtiEdcDTcPfkhpwGmn61TX68jd3g39Sx6MnQnY4iMB9fUJLpE86jPseopZVHKS8mAa7RCJ",
  "key12": "4YtwCs4BNST7nkb2P8QUywPMMyDnt2QEEQcqyfBRcVn8rvQdKyRVsw5EwLfZCdzWp92pus97GMbEAbrhAzbPzixY",
  "key13": "65havoiZ5nQxGLxzxMQJoFa2Zgj3ryc5ppHCVsW2zW27vpQJN5QjKNtPwAwVvkU8GmWP4xy16MBxET9NUbyy8dgf",
  "key14": "2XmkBFAn3f6YGxNfenK54hEgVzcenc2FRGr7VdnhJr5yyBBJixXFMU415K9aw8dZtKhSQjtUbQW9LSbi2CGnKSfT",
  "key15": "4GaXu7ASQPnV9dUU7cqfGAArJvztJsZcihGfGXgXdELBH14iXx3Li1bt3FpTV165372ahawbTZvCFC5JSxU3ruGm",
  "key16": "3SdmRXYUjpwvFu7br97VmiWpSKQHAaJ4U895iPDqARSVdVC9sbueoKBZH77qd7ZwvNj1ydBoj6HrH7LJoTgWfAgM",
  "key17": "2Tqhf3g7Hm86XfK8zUwqupb2eGwwMWiUMGXWUErZwopAbwxa8puabYeP1jE5uVpPV7sdwZ87MRKf6tdz97jFAUQb",
  "key18": "63KmFX1shPb6gCKr5Go15frPeBbvhkNchdvSrQrfMu9dLXDReesNcHG2e1aWChtzZrgoRNXoRWFu3n5PDWRX78Mt",
  "key19": "2BxenjpgersHpa24B7A1vAtsPA6V3czZv2UbTwDMfdJPVo7mxyudPg3xBsMM43Z3pNq1A3Hrx2YwLBaSNgxaKfRE",
  "key20": "44NVTmQrAA5NReUaYiEK8nVzLPPcvubz2RVujVGd96kcC1bsaNzaJLQjLEGF678kKgdsBmK1pWHE5hqhKt2g6fmz",
  "key21": "2ttCK3L52Rn1yu3V2ADzUPji4F5BQUH3ZeWHLwnykTDr4SyNCWt7kFfzonoNqQRkd6qYhzcgeJanVTkBtXAGn4GV",
  "key22": "5fRFNBen42iAL2nnRWhgSpvWQHWW4SuEXZD2Bnit2Aby3F3AbHp3xwcK7RQt1bJcsdjGZmJcToXZURbcPpeZ56T2",
  "key23": "3TFHr952bk6nuz5mpCMMS6ycmvehJ6RydQhukCNCXzDLhaFy93m2yfHiMw8eNJVwrgyQTRDuUaeijQTkmwvfa8e",
  "key24": "2K1eSeYmYkhciqvWtHPzhPipWSqz1PKkmcrGhsbgpzQSJBHnHTcEmTvX2Hm9ydbMJJTCSa9Vw558aUwoWN8vGdAg",
  "key25": "5MeWehU3MZVcMbyU7w76J5bRUvveP89voxL5WLaSFDfgZxgD4YvDgcwzWptZb8Fa9Jwnf3KFMVc5C8JQpXVJ85bJ",
  "key26": "2yUVfifnDbSiknZZhEjxbS6E5NYhpkPHnUJwUH3KDNHNaFnDLTMuChoUiyvoWnDC6fZsJADdr8no1Fzy353wvjWu",
  "key27": "5k57f9VAoD4UK16wUNHeyMYtR7UACYT2a6X471BC3DggjR65AmWbrGqpiinc1mumb4yWEkPCXASiyKx3FNLamV7C",
  "key28": "2JTVrs42q2DNjhRtVPxRUG8LUhmtgbh5YJJTuRnsKS5CBKmz9CPPWr1XMXwpng94xupYFodhEnd8UE88PaMQRogV",
  "key29": "5kAHTAbGByha4hsgyBYuwZgbNmqynGb6T9yHinukmkcV1aLDDi38HDAxqfoB9xDgbjFJKhZQmryKGZTiro13eruk",
  "key30": "5ofdheht5qCjPp1bXDMCwf7GaY2V1VxDQsCziY3Js3XCVaWCE7NMSUufctTZBKuwM8WQ2sZRBqDZjCHLV7bgPc9Q",
  "key31": "dw5SnvjKTkcbC6kRd3gA6xjx5quwGv9EZ3y6UmHRSCfPU3Qdtk75SjUZmtyzWonWHyG3NRCtAyQqJE7cCWQ9Z2V",
  "key32": "ARhQ8LPtYV8UJn6aCXYy6d5hoqMvtsvdsfjDbRd9fgJYKs2gUcLkNtbNs9Kwki4gJxLUz8Yfs7ugZPp3fUt9T4T",
  "key33": "4tgqujn9nG9usi2scentk3xKh4uCeS3A9qZ82Y9zVLPMXG4gU1cvVXLwKDLTTGWjr6EZoY7dQfeks1mKjZxNxDJg",
  "key34": "4AWvHz5GfAGmab4cPjsE8Eo8HhbpTapHgYP8yzB3P5grrunJgLvEjn8aH6k9SBritxe77pTwoJEVzK6ambfjSMKt",
  "key35": "3BY8HdLXfBVhQDcLYaMzw9Vpr8ZgBBzodmS182GnzLirJnurjsLTLM2YuPmZ5ta7uQe43Wy2MW4gqnD6gPuNiDLP",
  "key36": "Jir1EEHp5SgneH3YAduEfbsWt4Gh6mep8Ax5p6sRqQVDRMQUwnNra7DDwV6LtkdSSUGAkKnkQZQGnqhkHAm7MNc",
  "key37": "5W49h6BpXKbW8L9387vjDthh3ax8LsT9i38q8L4ZLPRvbLjdcbRoEpBVuxVNAxnHfend1czWUgJ2u325ei7Wo2B7",
  "key38": "qwfGxn3f3fmGqREQAckoNoWyAN5rMyzfUzWKMKC3iGEcCYQmpD4y6bTZ3Dc6GUkNq2pkCGtR2YtoiLBhZpvwk5j",
  "key39": "2KQ8mymqeQKLMySVn4Ru32N39FMqSzmFyf83AbEKaCXhQe7ZqbptknFAw96cZxvGtQFh8GcDYWYkfC41ZN7TbRsV",
  "key40": "3zyMkzqxUguZwgmSEcPBe5Wke4XSR7YRHDSyVA6REwWFdEuff2ViXY5J9Zno9KCkCZDtwZCpofrY9hWN3EiSejWT",
  "key41": "2UiYto56Yssvi8AcfQYgkb47CHDDtSF6iNSuR3Ry1G24JWeht5vH8KvxyLRLdE9hLGzW2pYxiyESzbKSV1vfXLE2",
  "key42": "aQ5yrvZmFxy5nba9kGqSKDrBKzHd9VHAPaasNkUq3cbKhtKbm2MYGN4npcqjmwFHxoJzepwQyBJXc5mw1bZnVzp",
  "key43": "24eiKr1Chayn7zbZCmU7YDe8gkXoNRLqEAR2r2hoM4VcNe3LpPRUGDNtwhp4kw4RbVpeTMS94hAmFgfis1D8rbxd",
  "key44": "Gx8TBEX6bPhudZr3CH6L6gDUhnTTQhURDquRkQmpR1ThAgmZMaSZUKD2GKTErY9DzL7NxHwcTRyBDN4QW2aAuYM",
  "key45": "4k4cCWucf977fvAWUDwbcZFPzGbQTcjJwyCT1bX764FqtUrH54pGBYBfnAMeJz2gRE2TmUnCsqaxhD5WgdyP3VJs",
  "key46": "4kSCXhrnf8pAEkviGg6E8CgHXkZMEP5FLwUFE5xPd5AmmaxXhQz7yX7kYyzsudnJbxFnmS4ZDohVJz26P5z4RZ5u",
  "key47": "zUTA27DgkSfqDQNn1kxvmqhT1NKqXjxMrJuR26GQfmcVCZvKLScZSuwnn7fNftBVg9TLf59yyVAwqwYSNrJR3SH",
  "key48": "3qgVq4rsSmnfiF5iwSzfnMyxgSH85ek6oKPgrMLoASe22P4zJuFuuGyQJf6xoJmD45v6Szqn9FDQx8qQqAJUFxxe",
  "key49": "5D87DkpjWNGwWzCPhfM9DhqZZxuVUZXU9Zzain4QpJBjKR2gexs4FCroS85YPvDPR7XvNFA8To2RwLXRPVLKQHxM"
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
