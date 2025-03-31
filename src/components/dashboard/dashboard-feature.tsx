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
    "5PeUawCEpnk3saSvrqUPw4TEVPEehykCqzEthe8Pj1CVMNQ24UeXgpUvYBBbZr79a1chRwg1M9GaqTkQmoMYHnmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d3gpHnpwb2Xt6FtaBweefoS19ZZkbY2k7AR2zJRJtweHicBaziHg7xZJhiYBcBAZa7JtLoMqh6cJEQfjBAAusMK",
  "key1": "4xqSpoxCZAqk3W7fU7hvNAjqsp2P3p4L3MbXG3dD6UXPWNwKowVApHNkYsxAQM7cSx2eojFJEmTK6dLreZuQ6A7",
  "key2": "4DLn1jQomYLjXJJF1Ab7KCtQeUtdyGevNoXWcsQ8Q4irSTc33CYBwxUoB8BUsWMxdDZ8BCujpccLrUH5r3iwBeSN",
  "key3": "58wzoa6MD9is6kGHXqZRnLxfcc8QffCffThoBRU38wFXWAWL5n5emz9VpuWWqpTQcqaUYU9DhQsZFXHYbhjpu3xj",
  "key4": "3yHxn1buH3RvrhMETzxs1vnT4LZ5gbrDP5C7og8awrFPwc8LzUAdVDcXp28yjmhrPpZzvYdT5fM4FTsfmq7DmtPR",
  "key5": "5u2E8zF9R7v1WxCSSDZnWqeggmUzvN3Wxz3XwdEaNAzEybZ6ZPWgMtC5VTKDDfspjR5FGgbrpq1W5HDeqCEagE8m",
  "key6": "kLQYWJutcBXmTSmkeWwEuEEtShbPZzy1Y36fZFTLKbrAYubNsejofZvsQva3Vrxi2Y8tLqYHxsVKLrKsKw2hKVH",
  "key7": "2RcGzuUuaUnMXqnt9cQj4mY3jvtPdTrTQXZ7LiKpgf6XxBSXVE1BdiLsoiWrE6bs8AdAhjRjSkHD9paE2gfEfMGd",
  "key8": "3FfQ9vBFMeUn3X5iPfffiRQ4iwA3CkpBSJYX3gFpGBZEEjQDEqx2s63UK62y8ZuNtrrVRBFv1VmXf42vtskbPMBk",
  "key9": "2xRXAhVGircqQtLs49uGAXcNAuh6GtTmJen5hCdR95ev4rF38v9zP1EWsuteEyTgvA2Szhcr7yFZ3LionHtT5S3z",
  "key10": "4HytmuSToLMbBhDZj6UvSyefqY2hexj7iN7iG5XJ9pHNGJmKjENxQfCD4mfd7Bw6h9wkuqq6Dhm3u8s11k9kQQEC",
  "key11": "4ntArmuj9bc7DSQjiDr76wHaWQXdPWv25EjUziuPmPB6Jyb1hBBhVidc5DEFg54aXMS96H4z7vT1BbvBeMh4mDPT",
  "key12": "3orZjqxtCSwPuaoZLNWjE7PkdXRXM3iGB6ih4rqd33jUW9aqjdrvxPQwRbxoKtdnudzKciHkp2rty67oW2mCSJ9d",
  "key13": "5nXektBXexPzjJ6mKguWQABSY5JSV1PrnZrXBVB6pgaW5AwDGguTGZTJCr5TztXNQ6F8xZLP6oAK6bF1KVXfKhgh",
  "key14": "39FheUSJmjqmhR4TgpA7fA8JxDYvwmRV1nRyq9Ax1bBpohyzkqZnw8cFFiM73h8nQfaQGtM9RT5A6ADeCyyAjKwN",
  "key15": "5Gxg1iGzq1egERnrPfepPwQg29NQPEHZ8Ba81PDyTGHe3ubL3QGNxZJ7hkbWWTHkNJqR4XphHTbCPWWiruyHpSFL",
  "key16": "7iHcE8LKbh1gBd7vC7MFFTVzrkq4xKGmLyTLU6ETiv1N4NDvmmwqDKTu7usrBfFBkhSLC2CA3qAAybY7ChYzxVH",
  "key17": "26kJyTkwNDze97L1kejNtF5drdUoEMFtDvuZwUCq6iHEJcMJNhgHrwLyhybLxu28E4AqLbJZdQWARaUvsbggq5Fr",
  "key18": "3aicdbhybQjW5m4G3VbvhSn1antPqHKFmfTya9Q2thDKN4JGmBAUEgb5w3nDHGkyDSgR6TKc4ot9Ff9W4gaPTor2",
  "key19": "5Y5wa5vBNzD5ZATmCGQBR5z3q7vqC6VmogLzftZqHiTiuMaDhBeJgBzneRDWCgCFX3v9vEsGDMuAhSxnccWevdvd",
  "key20": "4rUgktDF4m8zCCT1fV4EmWFZrUpvqDdUZtQakwW9jatWoGVJzhsy2V74DYYYUxLduVdxRxKUiKKuCdTWQN54kmKe",
  "key21": "2KGWtNkGU9pdSMyfKDqEVFTAPHEKjqiWyAMSQji7AtJC3gwMGns6iec1c4Z9bq2bQg8TGwhXvs8B4RnUZfm1tFca",
  "key22": "2721CxzfEPGxYgV73HXEAFxCNgjRmpQF1ForSgGPjM1hGYye7kUQxbcEHypNUsfq73WfPRhG9CUBjne246SZ5kHJ",
  "key23": "3Kp7nwZm8JANmo3TKUQFJA61Bj3vyfKqC6TVz35yJEPEyrJaRpJhQjZsJnoakWp8Ss2tbe8N6d7YRoy7CRs7wqsb",
  "key24": "66jCpjmNn4h9fpNb9ozjnt2iYJRbdH1xjbcrt15mD6boato3YMwCLDwGBz2arLvdXhknY5Lj1ibiTaCz2a5P3rbW",
  "key25": "2oBSZdzbc8aiaALFPAcVKXXrfVKNYmoHBLXea3CiBBhqtvXKiU8wLa3p6VYnitjwBw6XtxdqsiH2K3RgJS3rLjXc",
  "key26": "5u4QMsYYtthrHUeb1s6rXHspfL2saZnedYjJFq6g5j7Kh6w9799mPRYjw7WmJYhw1d8ByZToSbwBBBaZayR6DyU5",
  "key27": "2djM7sQ5Yw7eoPq6sbrjkdkRRP37AN1cXh8Rv4oT28Dp8JCgGJumWruHmtRGM7KBLLU8pjS37nxZZpTVyNJnKSEe",
  "key28": "5odwjVLfsAEgzL7VMTw6SVCPE7k554iVz8j2NjbDsazTmn1JnJLsNEscTAbAExyViJfrDDQYrQrNMgKUWfmxhCfk",
  "key29": "L4STwZ3cZKQpqEamRcwV6DPbJ7LkPDwuukkjvaP6Ar4kdM9wx2mdxB9oz2mUDq83swnzvjXkZmKSVT4xbJUuZ2T",
  "key30": "4bS11Dr65AjdfTx34Q2pkMGyGsxR52Yj4NxtHyAnUExUrom2TjJ7f5PidHFkDCSJMaALyx49jz6kimLCW2BUiNkg",
  "key31": "5M9qkDtHuQ1WsHL5VFLH99pzcNscoVGeWx5HSU2B79xRVDRg7KJXU1fpuFSWbhi3jMh76jYjCEXYvz56JxZnHGFg",
  "key32": "5iKvi4yYGUp3eFvvqCiX9fgsU2oBvbRsYR8dCHvfa5YKWhHqtvE5ZqzBEqtXAvexpZqA8zvdbr1aV1xJuDyeWXH5",
  "key33": "3fCjvgBuxU6Xo86wFkMZBrhYezJbWwbT73upzDVzwqqf152KxoqWLkQXEeqQP6ptXJTsM8ccDiaCWg3FgSvzEdmU",
  "key34": "257CWzKcpUUf8o2JhzR2aQtjhPAX3boyUZjDgqp8cK6ZFXgfkGJGagnZt2bp4pzHXB1k73omsHggRAB4srrFrbdK",
  "key35": "2jLfriULdyMM1wVLYxhnqTexBmoSwzeySGuw2qGeMXZsrm3vsn1qsbHpmsfM4cMZZnZQ7kJXabEPkuqDYZ24kRwk",
  "key36": "5eWLZaBrwsp9uZNgfTdPuaHZNTQ3xv6t8RoqiJr5t42J5g6EMtHjzDcUPRd2x5hBjFmoyiPmUXLU3241eRqZph15",
  "key37": "5Xu37VF7QBmgHpWUg1RK8HPYcVYTwG55brQRAZyRB1oJbXhFiSynx7XboiLHUjXJfnHzu6jmViLNJQNruh4jciLu",
  "key38": "23Fv6GprERTAxoCmbbUqEoCP2uANdDJqhAW2QwPMxd8iuCGmQiir6JkoaAFUua4tb24yig7yDVjQRe3WErj7sdYm",
  "key39": "3p6vHqwEWZ8A2QCfHzh6iaHJWcQmGPPQ2UgyHPTv2XQNnonZoYLgwfsNEt26XmqjXaCnG6LkifACEF3q3Mi2hn9H",
  "key40": "W4dXL1VKWVhy26mw2o11MzGAj8QCY4zzc366ZDCAWxd5L1GqZcx84Zi2AUpNSBXG1DiLKiro9VPV7oGqf21G4vV",
  "key41": "2PfuwKWjHjm3GVzci6fuXvhjPnH3ZQP2J4zJkBGz9i5PfGPGVn7x3fwJnofbH9G28SzBw8NVoKjxgMcGbc8VX8K5",
  "key42": "4bDiMj3kvDkEW6hZxRyZDMAJTRCJaTvJHjE3k6ctvPLRmL829Pn3nNvkJ7uNJsELPGzbzRwLe2RSHM8ASjJz4TXg",
  "key43": "65ajeh3WVzrW7zQi9K7WkxZTQNZmC7QD1hENx5anuFcwECnApjir5M7MeCoK3BHqY8i4WjJsEvMtoxV7sxYwb1TJ",
  "key44": "2B88U7Uu5iLDYh2J8YCTJoNrqxKc4rtER1mNkWWeJSo5sPsLsSaBAPe9E9YTfugBP3WsFru3h5Ln46dTBSA7TC6r",
  "key45": "3PDLzE7Zwnnmpa7UpRah2RneUiyH45EtPsTSshf7EtPw1Axw48vnoi4XBC87cDc6FmnZhsxVmEQiouFYijxy32NQ",
  "key46": "58NxGcTrZuseHbxCc4YHrm85vY6ACupYGHYZx8Py1vB6KSkEjdRGsUJj3xGJWCYLePK3iFhotRYJa8oEqP1zphVi",
  "key47": "5ZRTdFLGhADBN1Hgu3gN9jMnfR7eXN6QyD1xofDHjSkscem4LEpZWfUCSwNQFF5L2zrHXhb7e4FLLWMogo88hdkU",
  "key48": "34vdHVkTGc4Gd4LGk1US46VjXNk7JjTyftzTpb2cfsQygb4wgdGjzGxAKSWN1NJ5fH8fBBjrRcmsqJU2vJutMp1q"
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
