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
    "qqk6tNCmzimAzTa8cuuDtSsYD9CSaumG5ucp2s9rEbf9p71HohcYbbNgExzw2r9ATBAXm75ngq8CrbBwB6Vx2iQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XEw3fHmEhCq6GaN2bisL3cnxwA4VYXGv5rY3NawyfnhpUxmQhRQGpGg8ifh4uMKxBx9nvBr6haE8WU2ffYoRAXu",
  "key1": "2sYTgo6hvjZmLa4ciTX1dSuX7wQ4aPcA6zunUK4gihnEA2dPuVnYttpkcaqSmbqQDc72epcXfsvo4Qmm15Nf4arx",
  "key2": "395BBjFybeQaA5U4DDbuLLnXAKBkgJ11132E8EDuvvkh3s9sVEuP3zv87bmnztm8hTeWbQi4R7haXAFFsukCjEHU",
  "key3": "2jrHLZgX5nQxaUkohdaY8Z2rD5KogFptjCrfC95zP243XhqRNhem6YJDfJKjvybRrUWL4cyxGkNYUVRTTUyPBCvT",
  "key4": "41kiLGxAPXUYrQewekhx739k9UyA1x1KbTX8VVwTfHGqKzyrirtc28VpZecFfHAakkn949sGFhVDyYV6wcUXKJmE",
  "key5": "3FuJkkKGR4DHCQRmwHvvZVPZug8Gg7s9APXqK6g8Jk19NqaCzocf1Mq9X5T4tVjUis6QpfG6u28Wqa7s4bEDG74V",
  "key6": "32L2pAzHjZUMs2ZJsQzRiT86gxMFysNY6zxFpVAkmEmdkA1gVo63Rdp7Ve9TtnSbtuuStwZKTVLq6hd5NWgYkBZp",
  "key7": "2nW1jSFvBUC9iJqGHAFy7aTWUCnQSXkyCoCfBeCWSWKqd92RUp4ZBNW9ypBab9uZ1qBaHQNpeaTKxahkEVJNWaTK",
  "key8": "5eUcQCGeMGnfVJ7K9jK1q3mW4H3L53jcCA5XMWaqXf67EeDScHDWgfMMWpEYMmWmaUJfrCoV3MAwR6jGn6V1njgj",
  "key9": "4kCP1atKNL8p5w5r6aoPb4mLCbKkZAZP9YrNPRTUoAUgB7WUb33JA3wUNzdsgW8EkLrwPSTcEumVgtHyBNfhngmL",
  "key10": "KECYu3HYT8CB1mPSnFZFLJyKzpMqzkYafpLkWQrLeQuqgP4VRwUtd4CtXPYh7BUDpTkD5Z3o8ifiM4sGVwiMdnn",
  "key11": "2EQorq7bkSPusGyJaaGU6VViTiFMu8Skx6wqQqT3kfjHMT9nreWVeo3g13c8zTwMKL6ADkK2dcdBfwqDurgkZowD",
  "key12": "35X329xWWD5VAzq8C1wuBKHq95DF7e6mwSoCh5o3w88WZKFEt9YXk86JEJFQ3W68Cwp1YfyEt9hhH8hPyoLDueRf",
  "key13": "2cbnCSZrHGwVTnGiccU5Dty6duBAAwWAcAgY7w1GiGxev4jBJC83cjS9nGRgzFShntgoTk2GJr1bhYJJrUvvH43V",
  "key14": "5f5i94YBJkSSYxsguUadcBNCQuhJBRt3Ni442AU7k1q76MffUb7shjqnKiDePjg1PbDvL9fcu2gpQYJkC9JAQvCW",
  "key15": "28RVBQfLvBTqfsJ5tgEk6LA1Z4FS76941gaswD5oz4xoL8vgJT3aqWciUTNhmZoXE1ctxU1KstdHY6dHe1ZaWt9T",
  "key16": "5SPDLATSwwSVFrAsugj9ZUGJvsgrTQesWGiXFQ82gF493bRwaEDUcvdjHMCWaC5Ug7yJe14ZkhxFPRCxsKrFfbZo",
  "key17": "45rgNzfLkMKthKvNn22TZq2sgVg6fUYfq5szhvcf8ZqiLAJweToYi63CnpfWTp87azT8cXPZmyyQcvYZacZzd6uW",
  "key18": "Hwq8TBHwyCFzkYgAmBZ7s4nihEop5fqAaVGPrDFDgj7VwmwX7mwcUyFy8mTbBbDUN5XmJcAjVGW615n99mZ1x5Q",
  "key19": "9HX6wPwL4jzGLe13xUVibEPUD7xS2Hk4xQZKYU9BAgBjjiLxmS6syvZuvHRu3GTwJMcbtAfXj89hiGJVBEBtmD3",
  "key20": "3WeXkoBq6HCmYRC2SzL8d9Zwmho6FcMkP47ZVunQJZ6HgnTF6WzFZkuasjuGBoeGCY2YYtAUmNFNLAYap9493vuh",
  "key21": "64vy9CmjJodXwbnEb8bKh2gVBUwzrPj6K5D5vam9aCe7oea4qsRGvLLrPSL3u6wR7EuiPQX4vw7hz7KFeKb7YsbW",
  "key22": "3FvEEEMVKFEujWaGrZ5rrJM95G9gBnXpKFjdd4PvmnrPv5u42p1Lh6AmR5HWPTV5oA3iaD6psHTJmiAR7zHLcX4P",
  "key23": "4CFhnZBuiMCUUWoXyV25VJNG6NJcB11dn5J467sJtVobE1ZVn3U9QpdePfozztWsjfaUfnf3ApdmsaMfpUh1buVH",
  "key24": "4uNXzn8jk3uxme45SkLMUHepch21K9qw1GRst1pPYxrvTwumG4BSiMqd7EHJXgFbgmebFYHitegRbKYZg4J49hKS",
  "key25": "unRHYsSbkGV1kS2S8xnBGkvNBmy34GvFeGkYTRebcQ9mxdPTCdbmADXXF3USZ1zhwHQ8X9JfKn1CsCjv94W7H24",
  "key26": "33RuBqfoqdqeraoQcEdvHbKvUEBzRk9QPgTrApuELJTwpbaBd2sTSTM8noH8RVcg4ssYdz7b5WUnYceceLKXXLTP",
  "key27": "4gdPwRiWcfS2EDkfQxTTNkXh9BiKw1urbwpEq4KEvjTBiVfsh72qw3xgunifQkhhAW4J7JUj2QEUrQUBwA88urwG",
  "key28": "rJL1NvuoxcpES4ig5AmEohsxWVu3kRcoAWR5ywv9EYuJwNEW723TWSEU2KDk9trsBfH7WcyRRq5Vvh448YnCTne",
  "key29": "5APM14bBBttenfModXAtQpKtpGTDGc83CQmCdHmnXXLTmE3EE9qFypS6RMnqjzbzpEvgc712LwvuQKnK6A79isjw",
  "key30": "3AUwwq4mP4rtrqTtN3qAQFzzzLg96Bf3Li2nEQU8Z3JYsZYbR8LYUCzY2wrHmU3BT5Nyz2gYsu4hxqf6EgX89GdF",
  "key31": "5DCjc4yfoMBHWXL4jz5NQ2gi16knPDrd5NmLNSdQgvDxVbQHtHLvB8RjydhPFYkGd5E8VcfKUB7VzQKExdJRZgff",
  "key32": "423vCcMGQa15d5cuYMXemur3YCUsUXBdesr655c6fYr7ZqmQq7u2sqUgn7WZcoELJfhaBTAZDAKL23hMKuEvinpW",
  "key33": "nod94XuJTD4uTndNViycxU73dADVg1ScD3BptnRkoFhjpjZkuHXojEt4GzJ5FjrvtCpHiVVMcSGNwhSrCBDPo5c",
  "key34": "3aXmoQWYsnsMKhnpVayZz3V9Rt3VHeFmAAiC6J42RnfkJjTTSr2BXztjRZke79GYoBKCbei6dLwiGsV2gGjbMhve",
  "key35": "2KJvT1ZYhH1FLVdgtBYaGfpgbay28rJUQAe81EagPXj9askpLYBCGX7eaCNGVjMwktXsBvjeJ19RAaSUMJeATCf7",
  "key36": "3XTU546DAjUBfa6nByjL3zyPiwGTicKYSFZ5RyNSzxKorNtKvjhiZF6HvX5JELqYht5igUCw6zd7tXr4TPp1ssmd",
  "key37": "3k2BstsjsR72ZvfivNY1Zw8PvCyfrChkBGp9wLfwJYuDSTdNa3vJWzs84keuybepVbYutEHYXqUsGfi5HSP6SMua",
  "key38": "MB7UqxBFnNQ4j8tdhcMC848fCsumeRAX63X25qkN8xNxzArfpJEx3N1oBK8dMQcnt8XzAKxVPfh44uUmoEAhMxG",
  "key39": "3EBGQd9MH74U9NJjQNNRe3doVzHWibagqjFYwgAXLYDiCPiGGwRGA4L4jyJqW5xYZaVqXq34rcXoihA6M6xTUfaQ",
  "key40": "3dq2gtNhuNrU6rzckroixLRZtJ8VCkhrS6t8PTds1EFKhzvPnAQ9frDfd5FUrhXELsbCS6it5PSwyMMF1UhrhXcz",
  "key41": "4FCkst8ck3Nxp3JAkNfNK9hn3Hk11phGW2hQYgyfqmMMkXgt4pNbSfNynJjnyKe2Ycm2B6T9bNv8FJarDQSDSyiW",
  "key42": "3kANYgGWyrLTmB9QynX13CaL8dNbFkmWCFtv7EYdfFEVQp8ZF26Nck23MrtHxDBdGbzyFmignwDCjwkAXJZKdcte",
  "key43": "2ruZB7KqfejJARZdBHHhkQL5QMfuicYRPqbJJLMv9vwMTEsNNHm3RcoAHVLrDHkkQ8hVquL4zgtfgbUNPUK8s6ou",
  "key44": "2C8CRa5PFRcyzoECw3UauPFpsk4Qo8keHg4A4CkLJ4ttCe4euWAiK9sTYPpPnpqg9yBcjDURJJGaaqYpRoeqEnb",
  "key45": "29568PDrKucvqL9PbhmzZ7knpjNXCzqeHm64XmSPXttzNrXY6hsPbLaBARQ9pgyfVzvhtkgGqrPyS9C8J9KvY39m",
  "key46": "3Lgwkeo2kYmLWGmmZKMqQ7D7qvBDb7de5GXjTL1jRvitNJQmiZswt1EgDPuLYdN7ANrkWppnQNbY9RV1iKTstsFZ",
  "key47": "3wxbvj95nvLYamLmB2iYd5gNVCnuNPCozL2fq9U7Y8HcH369vfrtXHPvGfnE8t7XMerpLTT6Ukb3Cu4GViCLHPNf",
  "key48": "5hQxSgyo3THiXY72zhEWDa38ntRm3hqVECAYjNEJLzCV8uJrRJWyoaYFXPSxf5ioFmy79Wqo6BWADym3oxPCZKg3",
  "key49": "5zZ58WasTquF6j5cb68Ei7K3eqxyxCMUjwQ5WdzCrcsdo228uRaXrpvVNPs2hz7MLJS6KP6nFtwqc2NLwnBovAK5"
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
