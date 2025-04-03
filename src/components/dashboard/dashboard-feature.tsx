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
    "5GP9S32oodk7NGYrpCZLv9vuP8a1waiWfQXsmiWizaoQitavkFYhNwgzoxNJaoCGaKAhQ8g6NtSJAJtayG2Twxkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eSQacUduRXBTnpMSXeap8MdkYhbCrxAgtihG66n25kye5ivLwJifUzcXk9SBaMyBTN6GRmwAvbS1kn4NSGGNSyh",
  "key1": "4NGRz4ovBdYb4tSVt6r2hMZ9o8VSqZ52E82hn1VausC8bd5YXN1mNE8KK2QJwXWEBVVEczP5K7tp83NxkU3FDaQo",
  "key2": "BUxqTqbkgySXhG6bv4AJ8A43y7E4Te7NRNLNpzjRxn3Gy6rBb11RB8azd5UeN7JKHSBWWRsAsk6WWGzcFMaGwTz",
  "key3": "2K4TgN6qdHAxQ9jGwBqXk7MmrYJsN5gkWRhbh1PQFbeaPff99byLXEf2wTFFn88xLnvgancEHTxesZTHCB6mZhvk",
  "key4": "5GiGi6JoKPFXYMdVvrgQCHiB6mdVQktzzV7cGHkodbkUK3NrujJNREKpiG8epYC4Y66STeAUV37SfKA2qb5Gktx7",
  "key5": "4FrxU2JfwNEC8VXLKtK5fTgAxfEmvHQwAQdTHpGqxN18rA7F9M9Nboj4LTAvMeCBsLFSM36WEjHU9un6sY72N4BZ",
  "key6": "4BxdyhMwRpS1PhEXzHdrC4tfokmdqdwAUKFYphVV6jG3wkMEUVdSBCu85RPkqjJPBXDJutmiASLTAHusyFVEss8E",
  "key7": "5E1GBBFquZCcoRFkqm6qxhBD4exEAZBRMYJntot6p5V8MaupwQ3i4ZaiXYETMwcBof1rhuP8ki5GcgwJL8CPpXXT",
  "key8": "5F1XpbWR4mrjBtcN8UdN7XGiNANZADEjcK9hZinjwfujCq4mMmEMnpuoGLWWcRDxQdjFdarZQUPouYDJrynJPsaj",
  "key9": "9UqtSdiYHuDQW15TiUE3WB8K8fSHhXSeR53gXitxMBGZuQCEfH6b3JUtuHncDhKutwAsq3Jnqjp7VXrxqZituT7",
  "key10": "eShnnyqrd8EUF9MdESLnqx2fRQufCLjSWeNbzqz5sSLwma6qKsLhUv6PMGBXwQ83TUQEAEH5BLv3ef6CYjGkC8c",
  "key11": "46nwSbHew3r8nJGSjgHpF7z2wwF7KBgwzsXpEXRJTc4824uPoENKJCtbC3vG32ZKA1E7cetEAz7xGx1yxUjDuuP",
  "key12": "61UfqKkpGUS8TWeWmwGRYKdw2UFJgDHN6Nu84f9g4c41DfMe8KbQgiQMod2YS4j9CkKWAUwoEy2jiBVVBxMrWJk2",
  "key13": "AJwwpaCHgdArNyA3KzCeXiBsrEtsxZFuYe49FbsdVBqReBZuzc5zD8PUiZvwMRRmLD1XKisDnLqKCGmTdEVXCob",
  "key14": "55rz7GWPFfsG9xM8VSGrEMu42nE6TGVvABbxbABVw8F7YAqqEvBvovtWYErF8n1rbvqDw648uPN7kkG9JyVEqwB4",
  "key15": "56sQ78rSDFeGbNMLA3URDmLT7FRkrNdFtDmnYTpeRMNwjsHSdftQmdiwRUuw2YHtySBwHMs8QfejxhL8VWxzQQ8U",
  "key16": "37ZsTytdPBBQokD84kDnU5dH9jqkCZwsyokey2hVWtaE9dwrjLinXdT1ZhDALqcniasSrVr8h9KkDfzdx3A7xLND",
  "key17": "2qHbNawPECqZstnZt5M6f7E43NqKRzrExuQbhYE296WbHQpENtYw4sQAsCu92No3ukiwk7ciQHgqjaQVpsdAjS9c",
  "key18": "5Jifggv3zuUtgKV1siFvMuqJfiQfxbHS4ZcEKGaaMMTgWsNFx7K7RjFeeq1iT6zr2xksAsTTqysJu7HeXim131LG",
  "key19": "9mbegHNQ7By8wYRADJiCmUtcWsLGMYUZfiB74ucznTN4sh7Dub2JaPYnu8ztMetww5xSJLrroEDHhExXjcvfjRK",
  "key20": "5RmQastzwxD79DjevyGePGrjngpzR7jyEd7eWyAFXqh9XRUmT5Vw4FEZHei7QpP3Da8q1zva7i4q8tmNkXGTk9Jo",
  "key21": "36Rj84o6ArAzW1VLnBBHA395NMcXVa35sBYYk5MQsmg5rKhhYVd5roRSUwYMeh7NNFHD1oMefKq8SF6iTzZ6Pwxe",
  "key22": "5HoDMVWLydC6YSYaD2Vkk7wfTPSYP84SEsYvEpc84pQJF9uyPYkWBREqbuUG5qv475xQnAF3NU28iEfLpb9euRmS",
  "key23": "4kcRNH1a3C8SUSkMETyMfeb3FY5gMgCS51637opBQpetPjFXpAx2tL1pNH9TM7PhTi2WtYCsiHh2gmrPYnceuvrk",
  "key24": "5Qo1uQZH8LXTLViCBAmaLVtVaTPKNnvBmXjA98RxabrCwCmn3iefL1Da91xpKkQD95rTB2uxLan6ZCC3HaaQ8EYu",
  "key25": "ASAg4nNPdShUo8fWg5JLMcmHUH9qNFzzwYQkw8M3iGo6qMZa8Msofsoph4vsb2xsvEWQZJVm7hZLjypPBztiT6j",
  "key26": "4huuEVPRQmDZ3sCGwqMAfxn6p9JDUb56meripX9soZL3GXBo8kchubBbsYCdZMWbBseoFFSp5xCiRHjVHKb7gVdk",
  "key27": "5AcUddBGaLffvdsmoP7UY1zabLq6nDY1PYhT3XpdztaQ1Z4ZZuEHwR5V6Xt8L9P4dmGZVFHJCC9kyZRuHwfkXKJY",
  "key28": "2ix3hZ5yi5rXCtN6K2qVmMogpNjP99hgTtd88PcXB48hsneJ6NETd7EZv1TVika6zoAV535cVWbmvqe3VZYMtu4H",
  "key29": "5GdbVaV5pT8LzNqNQ7GS68CT4BeqyhRBoFeUfZByXK79CSHsmW5ovcfKXoTaGtJsfHKDNFpBYUqJhGrQgXfShMDF",
  "key30": "298mP4JzKxnrnkB2LWRCanB6RDYk8VgaV71cqqowGRggbqxX3TipvxXdLcvZNBmo3JCDPqoYUYr8q5T1a32bHHwH",
  "key31": "5N2sp6QEBQVjf8fhxW9gfDAUiU4FhbsSGemwmJBzttQKSXtbVqChaETboLXjGfeCgsY1VehkiLGqmG7GqKCct4ar",
  "key32": "g2AqzhrTYndwirVgPLFv1NCezavrt4s524r5wefEn8dVghtwPQ3GR2YaEMGahwekbvNpLknTvwr1yPr6MWkqNPA",
  "key33": "5GxRa1GiYvHPYbbzbinnQFtFbUNMWcP6rFKfTxxvh8hmbaiSq6wZR8pM7MkLUevQURJbUwghGxL7N7pVHDikhVR6",
  "key34": "4B5vsdhTgp8rQBLgHDgJXpmt5N5pyNJfZWs3e3bh67z7RUGJXc5Ea4QvnP2c8qdG556xQM6zK89q35hP5fDqdPgC",
  "key35": "3QxSyZrNkUzyKc7pxdgU8LELQjwkNpe85AMDRF4BWKBhLgiouidSCKFMmgXZE6RZkGxkGvdTZeQU1vqFGMyJ3i6A",
  "key36": "5z1mnaHWw4jLeXk3pLUBWRLf8GjdRmAfN3DzwDbyvqSzwFtFCwSFQ4yvaKzB7brCdpyfFXb6vqA6YLuGYL4Me9q7",
  "key37": "2D4Jvqh7n5QStLjkzGMcDY9GkCTPQqyWfhMmc7jv9oqFGEquWC8xJT7AXaF5uayd9tCS8hXDy1RFkbTKHfYL9qT5",
  "key38": "4LPBAByZbPbrNsczBDDHtuStfQov8UvwiTALdm9v1dH9a3YnSDFMEsjjwYfrYyUJ3W3es3io6rA3qF37xap1XZkD",
  "key39": "3kgi9t3QFHewxhehW3dSNiLfSVASENEMJZf6izEWgCTL3nsqDpgjyaGSo9fWNFPC7ty94Ejvw4MKPcu7z5Xkj7Lf",
  "key40": "23bDS815eKfZRiHb75KPWFfXp8upWSywGvpczhG5RZrqXvR4VvVNyUWW7dENAqnHRR753FrHwfDxHoTCuDcgDqvG",
  "key41": "smvzEnw4g48brgkeGVyLkiSBCAkumbzPd6csCgKhf4KN6HgjcoFGJZVcX2yQiNA4YS7qrVCwznqtoxQU738tKvX",
  "key42": "3jxN11H4T8WW9MmxkrS4N9fV3NcvTzNmKWvNueCu4TXR6PBUWKb2ZHaqsS9T33RRXYcLcGzaEEftDEb7Qrs9wCGP",
  "key43": "4iGsmNL8LsERczBAF8h2imPnQZ6cUFnhA9cv8kQr4w1hiWQw8Jr74banUA3bSwCztm81Y6rdu7pMh3aAQwYMg9xi",
  "key44": "5eWt6Z5fntees2He2FnAQa2mJqBQa1271UkhYZRsykfSgYtEJgSb6vdhbsKbWXDVgXs7HdzWEqw35FxUcbeaGoWv",
  "key45": "HgdKNbQ9BacmkNW2UxzdkdsajF7mPvn5rkZeYiCNvbhZKxMdNNw9bsbi5QjEQU4VgKRPmjGPoMWg9drjxSwFbCc",
  "key46": "4spbaU276h2oQR8FW82m6EaetRx5x4WFpwC197hkGB3nchUMBPBaYKBuwSL82SS4wFTcvMDonhFS7GcypXAunax2",
  "key47": "3MbDUGUk2YTTdhJ389Xu3pcCM655XY7cJEpna2EPnZ1Zu7SYU3SER4YZfozGJxr815Y2a81g2vgnfrcwtXRU8MEU"
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
