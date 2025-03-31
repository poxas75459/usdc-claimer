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
    "3Wo1dHGN9dLQPe4bDr9X8W2QaWvQmCZfpUKT8JzsoD7wm8dmwKkuNts4eaAPEzyzu4y7UVQN1UbnLKQwrQEJmHZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F3SvFZmQeeXDRF4dLzbqrV1M4joRgPwoD3pidbdFd9keU64hhDX6eXH97UyeARJkDC3iSo8MFzok6kd47FWhqnq",
  "key1": "3rQEY2Wr82SUmjAnnGfGrm7M2a8FSp37kwwwaEHeipgj2NLAXudKZu5cdemZf6jCG2Acg5vqyGN6bpTVsZwYp1Pm",
  "key2": "WvQkTg6CYJe2s8THMsHw3mofbaUKFqMvbKYHVFtNwyLfpxthqBCSNNWVzPuEYrhEWxVYfsGoj2mNvXnLJeZcVJG",
  "key3": "5iFY8PhfYiGr5MMD6LnkThoTUE42pGFf63bZcfkx4dBad6YxRzNALDZwd2rfc1zmcBuuYEvGbK8YJ3eQdDUWAJvD",
  "key4": "4tW3XU9xzTZ3hroyfZDjCzZCUV1zFmNMfMhe8PhreP5Qxc5YHZnLNoj7GzjGtvv5ex6DWEpJ6p4t6CMfqxZq1tY4",
  "key5": "4Mc67DYSn8YriF2uVqh78N9ph485n1e3wAwAtVNGFotpiSCUQzLcHez9NLGeUzJuj6V9dQ2wZQ7cJU9VJsFNtYRy",
  "key6": "2giM3FHF5yjkRZrPkAB6G1w9E8WQ6HW1BbbURsEmXVJeBvjFGTk3dwSjPw6mXk7F53FUbL9crxMbStZFwrcLqNh",
  "key7": "4JiS2Zh9tszRU4ZAjpbVkrLFRvm7kyTWfn84AAs3Az51QEfNsSaAaCetoULzP8iLzpxseLUT5EgmLAm5qN8x3dqD",
  "key8": "5Hv5Yefp1vmeaBET1B9pMVDnf2VtmUPratNWfWpAHebAP1ntbG6oqr1YiNr4B369tqcjLcS3nDY44DB4wbuhoDbp",
  "key9": "4EoRz5aZTxkRDeu2nQNbFxv6LocPbT5LGCra4DohUoGFBxbkXT7qqU8DQ7PSxaSWLfZ3tSgXo1fz8bmYzdEvp6pp",
  "key10": "4kSYLoZUFwdeSNKeBFGHWVJrgeA4ajWVgtSdXgWjd93FGV2fex3J3NetUCPJdgTWpDcs4qGJHx6LYKMbaS5qGqmQ",
  "key11": "3aQmPLGpuBKKjCDz9kpuCu1JS2p4d3UbzjmPMfYL4ETqWvDXG1NsaH3YhwfPPptjh7vEvqK3N1NcFSwZCJeAzBQy",
  "key12": "5mmZrQp8eZKuYFu9Dw2Cm2QykCuy57JndsZ7R4xV5cUa18ujd4bc3oigDd9MJ2M3VsgVbPm6zkYNxhgBtDzGfkLf",
  "key13": "LwdpAQiEvKULNoMJiuXFKcumghFGb3qhVovFc34UDjMvQZksN5vEjcsUdjoEpouPenYFWrcrSncTTVxUiCG5Zjj",
  "key14": "35Gr4gbLYiddt8BzkuL9evrkTGHbcQGm2EP8zsHTtuyMdgXeGAjUJ4htynWCLJ992jngkiNQ3KoYzcYQ1bxiv7zX",
  "key15": "4QcTSaTvyBqF37rLLWS3chs1eAFrLGxTAXZukY19jRabQGa47jsQkqDThxK5oL1HLSz1vyNLe9hxZCpcsBCAaYL3",
  "key16": "5Faq3hiwex8ENqKvNJJ9HwhjFGvafAAqkkXKTwPq4hWywbFi7YwhVva3WUW1ZACYPxhxPCKtTu1FyyMdkm5MTz7Z",
  "key17": "KFTdT2nJzw1m15gcqNLzmx8i2J9EjinkwbvVimSe54HHzJLvBjskGShzgUgAwqRyNGwWa3ip2Ap2YtiL1M4qfvw",
  "key18": "5SsFJTPrytGczfiPAavCzZQBw847EgLSnuXkoLqWFyma7fQfnzH1Ew8gwiuGkepwdNekpthqcQetLzVSHKyhg24v",
  "key19": "36xQrTKAgE1fa3migTb56YM7bJkBkKPUyjdPaBhTtufq6BqRJ5dszQoXYKzV2KF9mjZoUhVPVhFuseXskhRkLMrU",
  "key20": "4qdYF4B1Q3a9kwnDs5iTouA9FERwytsfg3uL5YpXjvWfkZA6mTHbQm545Gf5afdRoMA1Hwm63pM5qofZ9t54iaxT",
  "key21": "2yKtHHzKCxQUfVWKDjUdb1QdCpWUza585tH7bzLs1oQgVMHVSCNdKUjUnxGXJzW8HWg6YrrQri3KUG3Ufy16oxVY",
  "key22": "2t5Cov7LZNaXLVHxRTzrjzTHdeetX53ro3ieaZ11T9N7WHJVExNBnyCk7v9hve9n9BFZPhGqT7p8URvS8EG1gfGy",
  "key23": "NCEHKNh2FvYH3Hcwu8g5ZP3RyRHqKqeTzLTF5Tu9dtytjFFNCn29TBNZt5MgrWUGKMK72oh2DGYBAnxoXcdxcQu",
  "key24": "KXquXohWBe1vzkhYq7msU2kzQow1ERyNZ8mpvEPA5R84HSYvgcTGuZaHkeasKi3t9vb2Bze7SkCSYFeBemMHrE9",
  "key25": "XT4hZRFbVzvjxp1nk75TadgibUUTtHvoHkv78E6j1XoADZMdAfz3xctfB2VpDTxMxyvhxj9TXT8aXJGiR2TFRxW",
  "key26": "4sJBbuGkdxCHZhgGoyj2R2trGtNRcuiZGhxgWDz4FaJaYT4o5TCGXtKBrv7DmKTTNjY6knrAydX1pmrB57rE6Ku6",
  "key27": "56poZ6C2MyGbvTu5Ly2bTxSMhyhURjmNNkogSbJr8YQc5SKaa2UguVHFoLkLdUZboz9yVYjic8nL2D3aLZtnH9NX",
  "key28": "5bMgLTAkYbRR31yGh95wVnPt6WrNY5waG9cXjzHNkK1iMr81qksDxLtCquwcyyiSGqudB8aH1GwQ3dUCqjFxfA83",
  "key29": "4hedDgVqxZh8fULm4Es6cb7Bfc9Zz71VtP9cWF5bvwedrWjgpKeiU2uDEozGTanBn5vuQN6UmYHBt1agjXRwy2w8",
  "key30": "2g1JYrFkWyTNActpP5vhd3mdR7S8PX21Gnc8Tii8PQrTb4n9WUB83d8k3hfD14RfrHYcHoKgWe1Xbgokk2nK2bBx",
  "key31": "4mnPeWXMpcVbpE8NS2r7BZPkE7cfp48TRoTtRg3k6DHLkB4E6ewD6KbNz4VyKGRDAFgfHMC4fGzKWbAYSvRmt9cC",
  "key32": "4zyyXin2m8SMZxMpj7ZBxbkS4cdvac5ieanP6zpGuMaZ8xWHdHcu9H9iYTpmWybzV573rEmworLWwgtEmgBn8JfY",
  "key33": "xrrUC3s5Eidj7j4tPb4DDDCKH696rmLqkxyJZ4TWGcRhhGX2nVt5YmJuAYBH8aYQT4HQMNxuFFt4Zr9Ysg5bSQ7",
  "key34": "3CCbVXR4QuT9cE3Ja8z7b21TH2yVT8nEupuwuz7PoxHFB9vZQzo7zvGHXGt1agBhfwhb9z5ryrTgNBmigCqAH7P6",
  "key35": "3FT8Ed4Xdi4JSCE5CT3VgL5kDpjCT9P1NR16pHfoDEHBfzpGJ7ykgFpynpGEDHq9yvMaqcrAezKbEok8sn5YQkMG",
  "key36": "5B3TncVEybrmZVZN3bzai5isrzDpFaspQVrHcj5XzgF8jrtE9SedfLqx4Q7bugrEk2WF6qmqK7z5WUmmjEakszKA",
  "key37": "5viDH42ub122pbfsCQT5Xz7WKxW8t7rj8sGdtZiMN33A8QjvrRLAkbZ2ovWa3pwQwJrvW7MFjNhCRFHpgm1uCWn9",
  "key38": "3oWBb1P2gdFwUZdhtssVci5zzohkbW7N3WB3im86egCGpvc8ZyCT7HrZXpvBonomZZXpiJfhN5HwGzJky7xrwCD2",
  "key39": "2gYSJgiS14KWWgQwMGKigQsmGwj9yVabXzmut7kbH83dXFBdA88hNHYEa6GC78R5dDpfgCN9qvQxdP1MJDJd6fgU",
  "key40": "wP8nod5j1ry4wgWqFBwTzXLs4TnSGK73zEcZqEDk3Sy4xFAYU9gUeCS7SZUuA7HCiEMS4PDbKaB3kVsVXrzJzK8",
  "key41": "3uTCmM3tdGCK5vsSRXSwZDHA2kKdkHZwYUo8Mvq7EpZB4e8LiQ7YugtMmZ2RntcDLSeD4VYM5i32jipGg9BWkUFx",
  "key42": "5LsNt2VemWgkLxvgLS6ptdYLZPfFxudqwoK7C3WFzhzzx4hohi9oatMdpipcXg2tfpxYx5p4pryGqueNbHoCdnuX",
  "key43": "2epSFJ4KmzFETqGpMhXvmbyzvNEiniDk7imrosc2SM1yUh5FSJgU7Ucr7emBNSz8mV5xCcAqUpR64W6ykGPgp2RY",
  "key44": "5Uw1scmPT8u4jaEp99MLNgqG2YEhGpPnFXU3YQUvAC8ntmSXGxpiG7UNQGhBcAZkhVmMWNPLXk1JJ19pfcfUMnF2",
  "key45": "2bvXTP2MjtiNekcCPWWojMQ7fCd2JqoCTF1wddyVndwoSEWr1kPueiypC77FD6PxhViKhBTtHSsBk36YcvfZSkvL",
  "key46": "3H8QG6kunwaakKGWb5ZksytYMixJRkw984wHUdTMzktjyeRZ8kG7A7yymBizmv2JoysrdZYve95LzFWuqvy2YPDe",
  "key47": "KUkLKbZW2YYu4j98LiyAsHw8K4DzqtBEiMUVK3ktqo4p8Tqpvsx8vyac9XtaYBMGgiUF8V7BniiR1Qkr1Bd16fh",
  "key48": "2a3d2vZftVJvD4Lph8QHbkDeE9m54MT4Hy1oWVut6hRXRCfdSGoETP8ihGZz923kGVEu4cJ7LjSfPEnZseKDZbnG"
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
