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
    "3ZLo14q3zjmtPKQy8WZhUg8NXfrSygBatGUXg3bTv3gj6ZCjmzUmiqRJazgT9KTPa7feXtRFFEJiL9xZijQH6y6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42MFctEsmrBqBkG9sNFTRw15Pdk7u5x8zgRw766DKEyUbSeVzjVUpx1kVNh283WBvRHid2rSmzGky4vLKKAuySwH",
  "key1": "7RAQaJHivuoWbgcg6rQqPmjJq1oq3fxKckYjafgZzyLq8BiZaLNcQQqA9oPrCozQasLHmULKSye7m7CuCfVuMW9",
  "key2": "46FtMuDJ1S4gntbNTM5pJS52QNJPbg8y1fdfbsxX3KnoDgcaRW8ZY4rnqp1bndDvnoERbf2dXEqPEgibiMMVMiAP",
  "key3": "5XTofCoM6ef4ndQZapnGknLFVXCt5ZinyKFnzADzR71gZVHMRpsT5wQuK8rrCNZRxXq1qRSevNuf7a4bNzFG8RnE",
  "key4": "5kzMHwoD4fFabNVK6riZsBFizHdc8984khnQZUZ2Jwu3MT3HH1vZvYyGN3wpfGGu7zYAxgna4pTK3FqoVCfesiS8",
  "key5": "2CXqbGMKZKzAQ6WNnrV2nkEBiVFMRmBjyZFdy12jeWJohpGQJGvtfhAc7dzkdjDKpXapgbtdxG2HRbtJYZ9ToR2C",
  "key6": "5Kr3fQwnMKFup1ayxohmu7rD86QNNMbZjVz5kptBKTM5HEHf5FLz1iPVm9sgPEwKTs5XQtf17Apxe9GD4jRunsSf",
  "key7": "5cZF5G7GZ6xC2NPXKbvCkLKY6LckZRLJ61n6yY2wqJQj7K56bg4vKP6bSBxDca4qaRAmY7QvsXSee8X7CRnnv17b",
  "key8": "3teLEHCth5ptr3AqM2JwUJKBcZZp8aj6Povq7Ftb2Hvmtv9QRLtP8y4GvJXvhQ6q7kiNyq6VHinbKTui3wmJpoyS",
  "key9": "39thd3bYMWqkdQc3zQHbh8y4Kvt6cJTX2EkZi6LSmgfWRBycd6e2qSXTjyW5vyfH66pESCZzjbcJjAGCRKdDXzwQ",
  "key10": "L4e2BZb5aLtdYP4HWCpzV355wLiMah1DJG1njFemTYdmTYGE2Hzw8fEr1XaZtcpFECaW8rHc2V3JV1RyCLq7TrA",
  "key11": "36Lb4kes3HoWW3m88Li3CY3Tw9KLR7we45TPR3qNhnmNYhNeb4kcntSjDiAAgM7dQJNqVNn437sbuph8cGNaBv7g",
  "key12": "MNVWwRpDJH5abUhKXiewE1huYY6qcSpRmS9YXAptwcNxasLMphRph6o12K8Pge3v5wB4ByBFDUTCmCUwnZKm1VT",
  "key13": "3Q3xtH4PEDCbYNsi2T8yaN84g9euYWRfw7ndezMaMrupVP7TWinWyKPHu5LZ8DgGp8yKQA1XBKoHbD7ZcmyyTd4x",
  "key14": "26TYsf4cJs5sZuLLsR4Tc7LBQZ4tbZkbkzNC4xBzaFFuf4jNecwejJ2CnRF2qTXEnfBi7g2Gw5xdcZkNPZRvtTu8",
  "key15": "5ZKAa6KZbp62RggpQNXpmXSzPXsvVDksgQBjo5rSxh3rfHkfz4kBYBCV8K7k3Zwg2iPQf5APBg79m3ARiY88kt8c",
  "key16": "2QBgdF7KtEA2PxzHVhff3MF1bvVQ9gweUgEnJCD28QnLae7WsSDsG2ETK2T4pnAa66XMmd4cHoXEkYQDG36WxKub",
  "key17": "4jksWpricErvTuPZkzBjjJn7HGvrnFvxZQZbB1zaUTxyPfoYpV9pr5ThoofMH77uf3N7vLHPZifn9ix75Euh76qy",
  "key18": "5yCVxjLBTnb22WYpn1sG2Q3AGQZbcM1HT6opXwrbXig2bREAkwjN5m3nstQiCXc32MMbtPYGXSovA4u462uuaQGH",
  "key19": "3Laov2oD9NAUmsqT7wa2BoPduC5EormgvvFMZwgu7uwrptX7FdUEzCPDYDfhfu8NMXTjoJy8V6M9ughQAGK8rh9a",
  "key20": "5xVD3Qr25VktD9rCmuDKYDzrcXh2te4VX9KfvNBb8Lqag5EiwaZCyyoFQkZgptwgc52DWfzKsMYx4YUe1RQuGrUs",
  "key21": "61jDJzGxTs5pqFfMfAq4PDPyqvs5zDRfAvszjiTkeAofX11pCMcCh663fPavuNEofhskT7wxBvrBCS48eahuAdTk",
  "key22": "vuZCPMLVySJ1KoSWEo73iqdt2BbD1E7mtGYftpPE4NPZWfcetsrp64rKJFKwPaz5mdRnbnuqg5QAwHe6rX6nrJS",
  "key23": "66wDDeS3NpQw7GUetRWzMDwHVLbo1mPaJu8sAJtm79uQnwJCE55pxqGty1fdFADHuiTQ44AqapXT7RD5EhdSTrRj",
  "key24": "4prhaQ5zQ4hc1u5Yk8zQmj15xtmNQMMMMRnKkJ4H7FN8zGbmAuuBwHB5yPH1whZ3iKPiGPpaFQtXUx9KY7rm74zJ",
  "key25": "2BxpCjE7eUkvZS1sYmeQCxpyaTzQ4hkSwUrSBvCEm5mWLxV3uzMAt7hrAvSUbDtFyVwqY6SMJNj2VbeZEWU3Cqgd",
  "key26": "5Z1KHxKdytsEadsn2CzUcxwQrmrvoA1siAcBvNcQLJbRkHKSmHPoCZS9z9S6DukZN2J1Tczd3KD66vg6HooasStk",
  "key27": "3CwpBTBj3YrAwVh6F9g3EcHUBUoWaH8m9MzxFuhLt1nLPttYtL5RHWbksctWUXbpB1Tzi1P3GVJHXBA4hQUZR2kG",
  "key28": "4sM4BFAigNUtkVdEqxeL9jjqonRQGhLgVqJriuMr4he2mJ71uSdPQzk2Ao3L8ubbdNKZzP4W2JCY9qcS8tHz84Ro",
  "key29": "5BwwqEAQaZmH9HeX3chXzor2UaBowKs9Dpzk4HiiwjnXJJdNvTToABaSrMoQM1zuhyj8tXfj5QAHxEXVEFuUidsm",
  "key30": "5osqrrMhJ4dNFCwuPNXepgRBvbGXHuJ9XTmzVdMHctzQv9RgS4LrztMqZv8SRozU87sdnf5fqFBXnFkUdwyyXrnd",
  "key31": "66CPzTWoEJP7vREbqM7kEMsjPr3sSXnghHovYCCMkiakwHHwrsr6Eq5fZbqUMZszv8XuiqBmPSbP9VSDJmCJ4p7R",
  "key32": "3Zmwqcauh2UAy566jucepCyqCM8HZB3TmWz7TB3BetYSjqHKTFUHjdyMjpUNZz5xGWX8bFUbYSnbnxAi2g7yDZif",
  "key33": "2uDf4rZBktcdFcGYUizuP1p387mEqCevdJaM6UnPZX38MkwHWAz2L39oAjUFgFCPFVpd9MZskXghu3Jnnj6sDYot",
  "key34": "2Z3Hj1Gum3WtWeWrynvVkNPLiqv997XvjJWuwi6Z4EVeF2ws1p8RiZFPgo3akTuCWGNqJVbNNu8PzoZha7tL3vUQ",
  "key35": "4DKYQjtokohunJ647NjoXMZj2CuSYsmShjDSnfugqMZkiHMTkBx36VjqK2BhwinrcK8pAn4dPvhEiFSXqm6d6foz",
  "key36": "AtDBrqwSSu8vu3YDJQV1wZHWN3isdJuRy9Zswp1jo5k88kUg1tmzLYDcc3a1aoFy9aPMxEZ6BizsS6jFfAhXfjC",
  "key37": "2mENPW2QMW69er28nikxNXsfysKWDojh7JwxsaSwKKXUNKjLbAmyxhtUinuzmMTCwa39UpFBGoSecitJJeFUGyge",
  "key38": "5thSSGL4YAxhALXxxEeUz7TKoM7fZPCmWHJg1Nz7LP3Ng3HQ4aN1qacUqsDeGdfLymF3CZJSGDxCBQqmv623uhge",
  "key39": "4chYnvQfNQNdNkWqz9wUuAJu3VKCqRzyZGjUMxrZREPwAr2zoKa2hS7aCPsHbm2QkJKJsuQtSvtHYvsRTwm4zYZe",
  "key40": "5wYSEMYKGzn2JCnkuZKSaiYybiyFgfDeGK5qmGeP8C5De4YzzRpEfuqGUf1Bm9gjuccUYgfgP3UX9ieCtB6MMf5W",
  "key41": "56nfTy8SwzyHKrinx4hsPWjqAWtrnQWUGa6y7WFg2Jch99gTRPmAPzG2fSftWmCRjQWmMKTWffn2QPRa5ZbN849e",
  "key42": "Ux8dJrLmK448fNstTxEWuVukpj6Ye3SWrRbeqZENL2mCeHLWJv15KUhDX8HBHXWArWcvBkQYQZjUTTZyMKP6VcN",
  "key43": "ouCkYU9STDD7tf3RVKfSmDAERffdGuBcToioZsDe3JPUcZCmwiuGYkqruYLpJdf2K2g3aBeYTdnxxdYs3avLABj",
  "key44": "3AFBvsVfCDDMctBhqS9HR4aw4zyD97Y83cpV1BVN1x6GDKuFfoB4TrQMBbsA2xqnKMsxZsTUL8uaQufrg4fLqDnH",
  "key45": "54QuqB7skiQntLQcZUoCazJSKqWad6CJwc1cji1LwtcC7bJhyZ7v3FmZ6p9pTWeHaVj7D7arUxNqY3RMJsHwYEeb",
  "key46": "4iBz723yckwzvDRVeQ5WXmkaNPQg9r51CcwVU4Ys3tFmuBPrps4gYntwVHhTghPbU9YoS543N9wBVQrzGxvj9oma",
  "key47": "5ASuENLRhF29Uw36yyyz7pmeF3SqN6faBPa9T2vSGbdtUCMx4t6XFdGg71CcHRuMPXJqA7eKbnfS4tyrHj7ey7oe",
  "key48": "4eKt8HRsVdDKMbikykw6d4wZqaKSHQw7cVe94tWweSntfk8xjY7yLskc7Age6hWnVpjSbN1P3gYnGqJ37fHDTiDh",
  "key49": "3Bkr6ieA7irC5btPSSZCt6PCKmWLAqZeTxmCCmcgaJxTHeFkb5MHzL7CaRfkDykHfcdHjXjv2tWEVpVR11u1jM8Z"
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
