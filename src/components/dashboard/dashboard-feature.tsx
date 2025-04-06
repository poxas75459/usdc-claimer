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
    "rKH9SrHiT8PDguqEb8PsQjwRnzYxPtcroahbvcCTyErGRnMxnLhgjiDdWgEAgsowpJZrdK7rxZZHqYpgML8iMuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28A6Q9ibAwgam6vVnoW583cVKmWbpzffoHqv6CiGPtKts98MuNzxpdYmDntjwsm9evfDUgsEJEP1AAWoxiNfuHrk",
  "key1": "2jZc794yXgVCjk9aXgJwxgFFjtzb1ezHSBLPVjBpxuUwm9jGcu4xqVZryiazqVeevssYdBjdsTyZBV42gPsigM2X",
  "key2": "2BeEoiMcqH94aE8dBZQbbP3RbRpPQeZghNAwgCEBbawaGjpzZJqw6wRrcG2678npTEqVsKT1J6yfSFZe25PqDZAe",
  "key3": "Vp3SQNqFiAah3xhQyWYXkgpBkERHN72Ca2Fsdenq9wSmfS23MufuCQPwxr9okUCVB4oeHUKGWbXw53AADpFEpN1",
  "key4": "3hurzHFJ2bMkwyFbfy8GmmFwDdGGPfhGPurHpmHoPp9uf7aouwx4MUcFSopBNCGnx3A59EG22U9kXy9dfpjVcjA4",
  "key5": "5N7X65X5tkisC3KsQjuwdKNYb6JsMNGBfSzjVPG9n7T99fM79RcqsGL7huaMnLxG9tRzGgpsuNzmwskhWERKAzz7",
  "key6": "2MU76sMyk61GW7kw17jkyDW6r3KkCPove3PYPfBe6Umx5w1wF52pnmPG1C9JmKmR9zsmc8tChbnBDZ1Y4GF1dE7R",
  "key7": "3sCzRgRyuFyCYMD6tF1EkLT1Qzxv1YsdzjAhFv2QtWSKwJZr5LAvFZZp7EvYnghLcKGtDH16Q1BfXsPZuZZLv6Ke",
  "key8": "3YkTaKKDuufF8RzcripduEuq987oQXuL9E5drmizh2MpxjqoZEkvr5tCYLhozuSNv7xeQVp86Ec5vUBH1eT4Wnwt",
  "key9": "HearhFiE7HSS9kmv5CEnFWoBLgurCNiGzvMXRL6XHpjJUZ4mQ6WwJVoQcYMCucP7MghvUnyBXQhanegtnAt2n3C",
  "key10": "2drPVkq6bDJuUP87LmyrKfYSRLhd2JV4ArTbQDR7osK9yuBPw4hxsC99KFAQFyYUcWS3Es779fP4Vr3MDdTne4sb",
  "key11": "rqThgvjJfnynrcpTnRkpPvGA7r6oLjcGTDK8GJFr7tSXhMpTxjtW2XNdsDLY4XJePjnG4jVJqeTnvrjpHaVKpDd",
  "key12": "5dnNxjGy8B1umiYujnDBaoF8Jx3UaMHGEyjciRR3NkpBkpqnBbefzDGd1sndfnHshZzg67rkCgbTHSXuHxQiriap",
  "key13": "4z7sHCYW6V82uRBQyxk8n9tBURj5kUwN1y38yCYH2usN5dtBz6yuNEVwkFFo5UEFLxZsL7Khr9arJjqw6XCibXz6",
  "key14": "2qmDh411FQnnLtLGWMqsq3vu6mA564Gfn3LMFZJWAC7gxBKgikzTqGTSRDiZ3wLpNCJ7VDAvvDtzAzdYNkhUvYTS",
  "key15": "4hdcg6SUJoeKCKFgNjAvAkn25xKHTnWb7Cx2G9mSbAhLvBQXgTSmxz5m7fcRgwP6m1Nk4r4kmitkkzrunAWzTGEc",
  "key16": "4J8t35USh44upEvCSNV3JzPP5iAzKyzibpAJJM8s5v6s9fFQPbRKYq5f3uF7CNrHepF9jFfhJxcDYEffbSeBSmPE",
  "key17": "25CKB2rQWhtxbqPurjuCMWjUNPxCxFKS1mEDJ3Kv2vv9yAFS9kaaBvgUYSrhj76wBtfMLJeWABxsiBjxi6Aw5oEk",
  "key18": "c9pnQLz5i5fLD6YBUrckyaVnDwbNFjEE2QCqx24jXYQ22NvWmDvx6zuXGjpkZd9vXLc7AHjuEWzYBWwBC7C7Zvy",
  "key19": "3vbwu9jbZatK93a9A7guGwiMPLdVtr8Lgvs34r19kdZ5QXWhYMSZqLZLk1MLziBdMANczvUg8aZv3LSHNjoHTsQj",
  "key20": "3TxeGAQZJXWu4GBhYZXhMuxMQsdSejoFx376otexapGKHmLueJ7QqcsoWShjDYeKYe1tFECokCs1df4NDVrZrCP9",
  "key21": "5AZeXmfevDoaBwRK6Ttox8p9HwvATueoBYdLUMy2VS5BWhybkNCUuFYqn2ggq17zooSzrgvaZhwRZTKr3kVEF5dh",
  "key22": "4Cd169kJFDoaVZ9q5eWkhQp4HFg3849xxRX7qD8mKDH4zBnE4Ny7HRnfwD9ZWQwZgvYHxR6V47mX9SxSWxbG3yPJ",
  "key23": "46kE6ywrmMX9uAYqj9NSBMQGEJsiTHMYQmnXtucMnLtoGLc4wL7WQSiAjzBA7mireKyiLuu49nVTXwhaXysXsPgs",
  "key24": "HYKF1hzoYbM3ypAWvJzFy6rk2m4FiTgA8hNfWA6E2m81cKP1XXNfS7Lt5fBYvVjRGx23Q6DpkErVXDFouC7Vs66",
  "key25": "MjogWdVAXwNMjYAwX3ApGVDBqZ4MTsLXnZ9Q33unABiYdFdTGChq1sCcPzPXTEqhjh7n7XuubHBJvZXed39QZL2",
  "key26": "2jpaGNhDGowmPxH7ggC7stHsmQA4vXrkMxFMGTSB14hwDM3LszfmsS9zS9agqwiJZPQ1g3nvQNwCpBWtgoBvoZnN",
  "key27": "2yFQVoZy2bDPNok2kR9eV2E3BoDraTNLNofQAWaxc6J8w5hUDnJ5vNZaW9tVBYSuotu9KDz9xsprpMUAzNyTQqxS",
  "key28": "uFCqzwXUJuU2aAQ5RVFp7BFAsKncXzpU5tbxSXKh4D2aR9ZtHMwpK8FJXs3jbJ43zKmKZwW24ALvbpevN8hzkTr",
  "key29": "28GeuYhBvCvL7f7xtHaQsYPT75PMNKMHyHhPzw9BSpjKcb9xaaSQ61zeWmBtYCktExojd4tQyqu5PSGvGz2aAKki",
  "key30": "29zdZq6Vv1vqCsvHwDPCdasANoJNhSw44P7SjQoBtquqTQRxzJ4W1Zu6TimsmrUNYZosF1cS7RCRd2me7PmmcgQa",
  "key31": "5tP8PjtLRvXbYSLM3xgRHK8dYju9qscFrVsMqQrzciFJJZzi93HWLLBQFTNKKKJbuLzJ3QLB7xY35LmdEkLksaGr",
  "key32": "5V2pD3fgfdNdrpphe2uUet7UvTbnfRYdfsYE2jvBCe3Feh9npSJxbeHQYpA7RjZCheu2YTBPbWZjkjvbyN3q17Bm",
  "key33": "2rqDSHrcAkrvcAqQR1uWgiAaujsMFuVcbXoPBppcyhcHnumkYB8QDQTxoCuBUYpbykRke8nRnmpnNqiQjcVpps56",
  "key34": "4rTdayUJ6EGLcobPrFMJm4NfKBok1bZVpainJQ3UzqrcL8hvR8xUsMWRFgLQr2J5MdUr9aZkU7ZRYzN9v529xnbn",
  "key35": "2Vu8Zc8SKriGzhpHctXjnHXoC8ELCT4wTvWU6UQdgWU7aHV9V72sDZ2M7hMbdDawq2VrFZHqYDZPyc1wYVeiaxFV",
  "key36": "2undtvZo6mZYeU8x9WCeqCtCtefZQrWquv2Nb5S4azQJhBTg2m9vZpbYVj1c9NJormrZG7nw5zzt7WtXq2eLZsnK",
  "key37": "3jjoJ2wCfiCWebuxmuhCUTdX1EHMwG6QcFNcxp5wr33qJLe2i12dVcRupRfTtWqnR26rQZcw2KY1xUzCpuQ3nBMe",
  "key38": "2qgEFRTd2hNbZCoYE7gA4vFKGPS9VpkwERK8DcRo2ZSJkcEWjitj1bpD2ayyvJjuYiTc8BWTe3783hn3yqzqra4F",
  "key39": "XRJPx49YaEgA62iLXoXLqTKQDp8rxVQN6PHYDe8uhhhpfVXKg6Gf5hKm6jtq465gZxNF5EVcWbrkt1KsJrYpZdP",
  "key40": "bAqnDQ8k2VwRHdouSSK1iwmvbvu8CLRHWEup7BaJzmyojHT5nUCSBJai1TQD91CKW2ZjKNWpoYtebzKqaETLzAW",
  "key41": "4PXaj4WMmTQb44GL8gHx1EqNKd8UpHVm53jbVVnpmVysMgrW2XDPknmPiBY9GMZd6sCJa3NFMggjT5euV9BeWfJj",
  "key42": "2imz29A1vruyudHzgjPm32umBGpBVveruhVY7o7Kqk6N8mP5nDZnFe13ARTx6jmfqCHeskshYMXv18DqHAXZ2Bt4"
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
