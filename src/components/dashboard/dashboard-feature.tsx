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
    "66f1x7Uz8WLFVRUwu6Mox8RMM9J4WLxqxxapaA1rU1kbqy69QZ8AZGxJAUNhwUN6G3HwBxbuiWu7JsRKgYwmjCxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wze9Q4YUwCUdaMbG89yojfU6RcybG8VL1xyA56VDxQK5gLhLvBkRGqyP8nxV2o8vqJLZ1Bhnb91UeDvKFu5JV5B",
  "key1": "5nPJpntZQaTuQgCQm2h8Tj3i4fNDCy6R4Ur9z9xLgSEYm5iYj7b2zQ4jjd5zqrcs7PvGFxKmnXMrMYnentar7iNQ",
  "key2": "3tgGs69tG9Qk27iyFBVSxPkh1z42tnXYF1PUmdHGyn9ynY5P8vsxpyqLSfUzhNJGhMkuNRMWjXBJYsHa3Jkn678f",
  "key3": "X6b5RCAFJANDApZcnN5xmCvq4qRiwvD9SRGEv36z4V5Y1JBKS2nKtEYH5pryrpFephRLGo5GSq1PHNYUVeELKzE",
  "key4": "5BLwLYYLFfSKPkgp9bZynC4uJCafyGaHTqVPcsRQNEUor8G8yA75AjMmu3jUJsYKN3xkWdTbNdDGpbEY2QT9fD1Y",
  "key5": "31uaxX1GN69i52eCxTxbsb54zrdKi8LupKMMSD4NxGEinS8kAjQ56ebAVaZEkrpAKKF7xwpyYNtW4VyVXgJ5eUFA",
  "key6": "3EXCeB8VZTSLAr5uGpEaRdfNsMRiDdqQAeQ7k44REzWGmrXAQrfz3FM5gPD9u3rFtrah8NAW1g3bF62CPZcftn4p",
  "key7": "2mhy8YAqeNd2JScM4RH9oFznXj4ULhJ2KVE66T5WM3T63SwJy4XMCxhri1FGnQkcoywVS5KBxV5f3RuBcYzGgdtg",
  "key8": "3FxCqMEXT6D4evQmdUBrAPfSt916WahF7TkcfApQmC1PoQGwq7PRiKmo81EvQMJdHfzjDKj992AdvChteAfuDxuE",
  "key9": "513VKZBaVb7bxZogkamz3uCdHNPgBxkPKoBJCRwVG1jqqYMU9wYcv6ozwG5DX9UU4xuoevtyNrDhgW3gCSE8xY9X",
  "key10": "3asKQPeCsAfd6n4SFPcfy58NkFVn26RQmjy6Vu6Ejokg2MDCecGMVMatK3f7aGCgs39GqVp1WPxmN4S5eS3J2dBa",
  "key11": "24T2bEguvwq8amBVKwUnvcnHw9wGfkLRNf5WAvzLheCWDtZDMsr9yyTyGV1sSH74H3hrpTiWw1p2GyqzFyT5U66f",
  "key12": "2GJVHzXgeYFwe3cw8RxbWsiuaEdHvLB9ccGpofiU1MeWeoHFhqJirJdyFYVdCjsVudLJveGNHDbpQ2fHBzGb5GGQ",
  "key13": "4i2jSCmZdMjtLGP82HLqCPtp2rLjguhkioTcQ1TM58VwhEYS6ySSgiDhjYBkLJnTnPF6Rnau4ChjDE9QMdby3j4D",
  "key14": "mqm2L32HNFLhLbFFmHnvA86vzyivf7N47xtgpWVYmJFv6mFDHSc9DaXzEBVZvoHs3RRRd9bPFTTcFFSGYQmyrgq",
  "key15": "5WLuNT6mFDbDcKNJBb6iwpSBtprivFogzoQrkopGSxYApU2g3UFxGDmAW4mFSQH9xWTbBuF7VNAzazDoQVWUp5om",
  "key16": "29ARn2DVTLRmYV6o6ByKiNvzYvcr19p3fe9CmMntfckpmvJJB2e3Q4TQuyhg2yCP5z8uXYLda2azM3cgUjGqi98t",
  "key17": "556mugENmnYByeCCVXKQWwiXxwybEMyN7SLLtxrfJkcVzDKRiZFYZzojhzokxgDdCYHTHQBJ4k5kJJum71Qo3zvN",
  "key18": "3EmJcpPVyNkg28zFu2MDAPDm2yDbhHLtXF1KqNPYheVHJr8tXYuViZPY9mb9wk99pUqRm4NwWv7G66cDTibG4Svx",
  "key19": "4pHpJgDzseV393YPGZofpDhYtP3c4NV3Mky3nu167AuVevYPPwWEvaUagHien5BWjbXYuEPz6x6udDqJMXubr1g5",
  "key20": "5V4PRNJeuxKjU4KxunRgqEYnxKXqFmLoJNdCk8CDumTWzH9jKeHZfxZz2Mf9vyNan6ZoeNfqELkqMLZD9y3ir8yx",
  "key21": "5zMLCzz1i8Ymxh66fRArZPzyeQjiYrAfCgEebUJrGcu1hcbARxPgjjysREzXwLz9uwkvZ8cm8CrJHRhrp19miFtk",
  "key22": "3uFwSQ7JFUfWTizn4mTJjahVf8Z7UMyXEwqsWCq6zjett7bWMN6pbmzbFjLTrbxzbAYgZqJj5qrYNTeeAtbZrm9G",
  "key23": "4mtyU631d5m2a5RFRRY79wwApLZZZuibxzEHPtxr3ZkDBaFcK2xmzjYHuLuCGfQn2d9yfSMPMPHPdrp6brrbrnYG",
  "key24": "3YNSEosaAMydkfBcThtkkQ7St65565cmVnES3c2Yx76acuNuffJmYuNXyWhJ2WmehYi9QtqTXa4RZRYoz1URsFkp",
  "key25": "3iMtAguMuReievnjoodkLzU2eS9agmh6YwKvKCyqQJrP8RNKUChEXv2hiTsFRkyhqCKnLy7yAmetb1wg6Au9eL5o",
  "key26": "4bNxS6muRjpd5ZTdjxNfyBjfVYKuMqVAnuFaQwbXqaUA457TdoqV9RitSN5ab7QAu8tWijTYaMTxCMJ6WmGaXamK",
  "key27": "265P7iXpAsxPgo1yRmhLNTPART7NTxnycxYTv5t8rA9YQt5ex8FDTNhRm2eeU1bKS4uC33QYdfNZV8Li8GLDGmsq",
  "key28": "4e9EvYVVTyeZqwu4HCRV8AjGUyjYrkM22stcNpkrf4tDuDzEWTcBC7a2Zss77ue9UYo97pTfVSt3sErAzFEf84Sy",
  "key29": "55pWF37iGXvmo5Eu6We6tY2Bz4GuoA4xeMaDSMuLzem9zbFdfaYtLiLSS1PA5NedkzNKhnC34cRyGcBTQ9DCc9gF",
  "key30": "3NW5MAacbWDY8CYpRFk5MKHZvWMcKEEpNGLodJ1ryCGQVofZdRu8VKGoRordM3u6y7QTfS56iCzuuTShUgwgKyJk",
  "key31": "3pkAK8HmVJB8iR8gKoeGaGaLzjLfdb4JzwpRRsKdosXB4jc9npBfrwu4rBdTyH5PiHqLo61XGz7tRuRwdned4TZZ",
  "key32": "57uSNTT7fJG2R8osYEWZZAvjvNEgqtYktKrLvewoVZUDYiMmCSVou5E67LKh2JFwMN4nNmxHVwYfWmFC7tNNfmBY",
  "key33": "3tWWUtmXPodQFBSCRndC6geuwXhEPyh9gLW37x6JVHNqgB7kNWbyT7kLEk1KCLbrXCCAgK1r8nbBtFkBQCGSAhcH",
  "key34": "3KgZrag39CwCgtM4RGQAPgKh8rKtvc2CadqoRVXNHYtyGPpij6QfCyNFFRRt5u7uLxyShzhSLzfspvJE6JxD4jq1",
  "key35": "5JRt8ivPyoehzmyEqeNx5FXx6vtFi589by35863siP9TPypkScf6pmpV2uW5GjPaPnQrLSRJWm5LRVZxcqyRtMGZ",
  "key36": "nBjrhezW1DjcnSBfn7Qi8TugSeymZ17abeaDnAChVfDPY292gBZMdqMwEMEZJ81FFhWHngDxVa6YHF9TuNmD7ME",
  "key37": "2tEnGYa4zY237mguf1bwGA9zCP654RqrtQTQc3SMiqo63BJThGesiSBN84xULzKpyuzQPWi2zpq9FiD9FyPcZ4Q",
  "key38": "4gyn2Y9aEcU3Z56WUMVXdb5tCcKkT4NbeDB5YTLr4HGX5SKS2dSX3UsGtMuBg8YQiVSBiPAamrWrmiNcLEipi1jZ",
  "key39": "wkeookS23M6Ji73g8EQ7McWjtMsWsmaUiZdg6Y37kaLwuZF1e2sjtBpctY5wHry7nxMnHckGrepB5tjRhJmTzbD",
  "key40": "57ZW9UWEVtkxjkvB814mket26N4jK6vURgjSXsfKi6HFTQXsob8MW1ehKRM148Z8zzTswCp9qzys2bUNzbx9fVQ7",
  "key41": "34c98UYA5YCrrU9DKvkzTTx3SpkP2aYEzjgKGoD8BaLEHCS5NipHoC72eAmks7Xm6psypzKBk5dTD9iCKRfa1xkE",
  "key42": "2LQTzekjGYMVooxpWwF8ojfpfhusy8agwdxARjd7hxcVWyh84nYeoPGT6eisMD7AbLHxYNAuFoVAApRjxQ9dL4sW",
  "key43": "5z3ii55thQbr8br7uTR9DcKcNySQABBtSVt46StYhQEdpbz11QjJZv4kH4dAKk1H884b9U5d9jVqtWoiyuLdrrp9",
  "key44": "3f3uNSL3TcjW7r5qkm1GCgxNZbbaJP6wUTRKPjeDLDCM21CyoNBD7gujSMSbvNijhLdPQTLJDihZN4gGr3Bbwy6z",
  "key45": "61f7RKSVi6MNpD3m3MGRmYBwxnJo1L9MNYwNgTnY4K1cD9PpLwNohREGL2Dj4ubMoPp5fsh3FDBmBF94KL8zHZ3o",
  "key46": "TfJn3iVRmehBTqcq1wrBf8XA7rH89v513XH7M81Qf4MhJ9qFP2FuB1tekbiwVquM95wG6nw3HfxwuZfi3LTniLw",
  "key47": "3sQQ916sfoBHGn8tzPYd9XvTjBrKborEtsKWMK5K89Uw4mZFGgbDWeFuF6dgpjzK2BxoV5Fq6yHpVLgZY8A44PDY",
  "key48": "4gfxCNhYtYF9QVxZWyJHBm1hkgUEuri1mKgostyTGmxc6zrhE7Y4CrVZR8Ysu6b2ucTQJh2TVAT54wqs2sQm5qUJ"
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
