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
    "6L7XGywZ8TmLLeGmzytWwpdPAtDcesiPweAdDpCdGmfBqNMjw3hm4HFVpgWqW3x4RfpL8PAHgepGQzarmoAZSxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SGWzCj3F7dNv78rnSnFVE7Yz8KAvQhZjFenCh8H8SyaMuCm6ZiTjjwf7stJyVuR8CesjTHn2nCJbXdxk3SKuKcS",
  "key1": "3bt9aV4ZWYgS4BsR7kJWQgZp7nfWv3tRMx6stARUmpFWiaFaTffyGgFprkgWqurgiU17XsAaoXMu36gdVBLp35t7",
  "key2": "3c5W8XZ8yAHZricbVrmx9Dn7eaB1f5pt9H36rfjA5ofbUXKTaitv7ndHoJhq576USkjc2fnmsraS8ZvbWzUd8c22",
  "key3": "RQqns6qAkRMcdtvJ3mUAhEJWYQVoFBpxPjLS5ZR3zNFCyqvS2ANHBuS7sBLfLWUXsnD4MjJct6sB5A2N3eMNKYU",
  "key4": "cFLsnh5XBK8kVN6Pz8mkxC46U3keM1UuefmRyBt68oPts3dHzjTUGuYXMrQmYDnz6zjBZEsrqJCjKG9rfSwFpBT",
  "key5": "48nsEbsMT51yJ3UCjL4vjPziQTxbpXLckPLLXyZYemygByMbNSKJv8SzRrva8zEk6dpHzKPaJq7EXGqgiCczuiVP",
  "key6": "38cm6xtfEh4QgJBLNw5sLZBocPR8SGMZu25CTE2kkTDYe47GbCAHyS5tqk12ZQb8npgEyRHjtAhP1gnQztoDPAYb",
  "key7": "2nVm6YjpZSqQdrxQ9v9jAqY3BzF7VD7veTy5Pk1CWQw8WtocDjUTV5UEVHQbbe4ZmBtHfR66K9KA3fC3pUU7nDB7",
  "key8": "3A2buYkfawbWW2N6PfuUm3RyarRRJwrkEcBphahHDMfw8zcV4dPTjekY5DxRtf6JJTG993DEouFFP9ucaMxPmY6x",
  "key9": "5n3vicqWGWk3xGhgNGHCVUZA1EVckMyaWQhLJbK4epCR83SQqVJGXULt6kMn3oY2BVEgRPLDjwju2B94Aj22booY",
  "key10": "2aAM4MjDUwQtFVMdPHymeUUYL4FaUufYZ3SDUZmL8RsQ9fP99gNTywv7oW4HTfdrLgD1oCxKzg1jYzXepQrLBEC8",
  "key11": "33e1oWyz3RyqgMHHDMo9iUpGnaDgaoLWTKYtJjWUjyEp7s228xhGNZ5UYV5dXiyEcC8QijB45eCdfPmuhWvW1wyU",
  "key12": "2cg7WMNT3A993sZ3MBYz59MH92FajWiZCgHBYwsM75kw2ykNrSm7PdxJJ29osLEtbLEHCrdaZo5gwPyTg19dQyvU",
  "key13": "48p5dUro8Am2i28ZGkPFyF1xeYFCs2c7JARwmhsHUHUPWp48rCrwewjpHtiLNRgEskqb67XuVfwowaPgfaytQRKe",
  "key14": "4Z8bebycQKjWJj8zH4BDAMzKWARat8Ds2aZF7aF5GFy23LnZQCTvERE89DKsCZZeFGwwqt4h2Rib2KqEbBhot7JM",
  "key15": "41SCCzhsVz3N17tAfAUs3LVcmn6smkS2Lthi3BYAuzR66Bdq4obHgqpifhYu8C3JjTDPKEpNRUw7HVGqzQgYrNGd",
  "key16": "2UY96pUTWijkHwnAnTDMHH62B93w4wzmKakScT5QQBkjVBxLJWQU9c8xJTuVgCo3UQ18EfLNBa8pgo5AA7fVE6Xg",
  "key17": "8gA8BkRRVyTMLXUGD29Y98qsydysktNMdZe6o5goVy5Gs4nQ4CDugh19b6fwQ9rUefzuuiyGiLiyaBeicVpgwZw",
  "key18": "3jRJgEDW6uWQnWKAkSx7scxLs7zYNz65TkpYmge8ZubSvKYwn9deCrCAViJjC7kbFMkhbRbn2Mv7Tbopfws5trQc",
  "key19": "3Z6WmKsoPwXAb2oNByfL6Cfria728WVwFBKkeJjgqodwnASHXiYfyzjxZh6GjqudXVgGcJJD38pGQn22fzRAqMEG",
  "key20": "52xkgpySSjg3c45idpDRRnYTinjHPB19dD4oRuYznaRTH5vgqAgTrT6eJpGBhor1zXvwQtrCzcc5f79kwTbJGBK8",
  "key21": "kZ3pU7TqhieLqfVUfeLE1qr82KGVoPzAGutEjNh1gGjZpqAVgC1ZW8dsm3LD9HBwD6uFiScH1fCfEwgLnyP8ADY",
  "key22": "5VJ3EXrm2TgrFTPtU56aaVre5wbXfwLiXFc3uLx3uKao4HjiqA2GxHBmeCXyowWgh6hUiESd23CnsBYiyLCD2nqq",
  "key23": "KJkCLp4kX9HS33wes4KPm1wFJLaqiPfyaaTWiE94cSME48fwDPR1twcmQE6npqW6HLQkjFCKikXyKKA7SqoCWFj",
  "key24": "5DPXXn9L1qXdaBZzHaRshxDQYZdvwLt2H22VRXczXXneo8GcVzvXbU3TbxBU89FzhsBN8Cbe7s7Rq9LJtZVBMJA",
  "key25": "4axpo82sbQXCWzU3aWDx8SEFp7cxbjFi2bLeUxqanvczYENtBSpHTi3tVVeinvBs1KzeCuu8zLNBfjvK18CRrzh3",
  "key26": "2oVt5RfiAUU6xcmVpgEr45ZZNTY7VDPoM7UM7ciLuj1RbkYviSEuGyPh2doHYpmtSfQNFKqe9aitCKpyF32kaHEw",
  "key27": "3UyznYJPDqxb1wqTfBrza3mY2ZtjafnRZBsskZSXqRpaFuepyZtyfieHYT7QypELkwDLRSwY7X9fSJsBWhjyxcSt",
  "key28": "2yBigSiV8XWwpdHDDHxk4r3xuwxtXYtkncBkuQaMtVxQHrHVogZZm98xiEFNwVsKYS4NuuqmSNbcngfmFqLULsQY",
  "key29": "3LUkhvctJEE8ZptrQLnsWmj6TGLfk3gYCN5MERAxsfnEBz6vqAThyMTN2a7uy6i5zp4MwP5s2FLAxNRRDvqn6mma",
  "key30": "5oPcqtzRd3GmJGxqzWEi36C6HTjsRDceqnqcjaM6fQb79GQ9QrQTRZBVS4TrmkJrTAKENY6iLgBdJQ8FyQ7kMmxV",
  "key31": "5YKkiDdCr7xuWwcggAsGMYRpyQGDhz7jgrHiixa4nQ6QkWRCG3RyY3AzkSnikpuoUtkTZt7KmT6hY7FqrxTxLiuX",
  "key32": "EWA87BkgaAbiuVqxi46UkSJycktN6s2HPpTEyCYWKEyJJ2Djj1o141r3jdgeGR5Gyion1BmzYAuiYDQVjneLskC",
  "key33": "4FcgUyLfEopi5QDYGqUksH8rETxRPmMi9hWhdZAE2GvSuZSEYzM6oVPVUzw8bgtu6gDz9WQZDkTGyPdvxHm6PgHD",
  "key34": "26QrFitY4XvPkq8tnSqR2JF2i4ZVoQtqvdg4cSicErJEdKzotqFnt9k3Gn8T3f14rM9QnG4dQXc5XCStHrnUw93W",
  "key35": "4wLh1oCMdBCoChvQVgmsdCFMXfKYRFWvsfyKjz64yJXNPfgS2U6ckQfe5wn5iN2dAibCSGfE9Q6Daxgqw87dcRUn",
  "key36": "Sjvw2Q2iuzA8EAKZULc397qvhWgLUf1pCQRCnem6CecBPcbgLGeg9eoEaTyaYt7GkvWE7aoADpMEtwPT4GumiaB",
  "key37": "27zSwDKAqbauHvPcjih2qbsPG6Kpo1AVTcwBHFmvJG8yQVPwjTFw3oCmk8qRRwuzaTQKqb1yNsu1rCH6Qck1ZpUZ",
  "key38": "2jgMb8xFK5ZWe7rp6hbVLwRSDk2vb2zEZdSkSQexzHq2BPS8V9jXg6y2SNokKWUwDqzSmgsri2U7sFvh4gM1bkTJ",
  "key39": "5bZMgQe38FX89ryY7oKy4cYYrvco74tbYC7fb6EJ42FUrHYWB5Ra8rM22tyTLoWhczTCGLNXMfgDcrd75EckNmNd",
  "key40": "4noj63Xu9JSd4LowQjBq2DTUoGSEkNdy3yFVamX5Li93VZME5nTpUfD3cNCqFSMwQ99gHqjbSDNWEHvs2ZP57sKE",
  "key41": "5zsAfoD1EzwyjCgz4BTxvJkRhRPF8DMD6W3gqBaG7298PnRNZj8cEci873397bLoNCP12QEZ57sXD2ZpXMFbWeND",
  "key42": "2PemrBS9bQHJUinSRTjUTYt1eNyRQjVhKtE8bywmQgRVtUExonApZa5GQfLyuK549odxsp48Tv2aUofSt4QufypH",
  "key43": "4FAoJysjLCJJudZRME6bmmgsBgGbVYkEVxZ5q52TnzRH7PHCQHUHqin8kQZzENjyWMytgupZneDbmZyxrSJC5AoR",
  "key44": "TRm2oDvxKQFssdM8FjxyKjKPxMa4D6MsqwUSHueCyysCbqfsc15DBZjb9xUNYeWpZnM11LDhfQHABbaFrhFpo67",
  "key45": "5Xv34AgSt28Ps9zG1XSzN4ccoE8M86pYTxxT8hUqRMj1hiZDjE2bqJRnWjz4x7SWxjqBm8Cj656cyD8RXFYGWfHg",
  "key46": "2ybS3UTE36VZmhJcmJ47D8mMf8VeEDr6Czuw6XqVWJeNEkPumBF1UwxjFYNPQqneicwHKhNSGgQtYEqWgp19nNMj",
  "key47": "3iRE1XVkYouKcS9PGBVp5ZNpAsza8qMv9sfsNUhq1bpQ9xZmvqrg73xr2kcAwExhY2ZTrigSfqAM9RCo46KumiRf",
  "key48": "37XRe2w741UXMaCgMYQ3cTsFWs6MkNCiKmHM5BExt7HtqkKr3WLTFaaYhqwPptqxahUSbmU2H62iSi5WcZZKeyPu"
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
