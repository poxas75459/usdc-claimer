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
    "LbQcNRww2KG6aykc5XrB1x99ExiHHbfnc9dBorjSy4FQTeEwrNfGB1VbA7FNkTAhnWQ7qEWvT2w59ec9XPSvDBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TnomJYARRocGarTNhnZ6stMS6GwbiET7ieTNuLKHJxBTeHMrEaHQ67fAh3ZvYThNs85jqjGz67PYivqHfK9z9TV",
  "key1": "5Nskxbrjr56VaQAri9m1cBvkWpPRpxSAYq8G3bRdW2uYF1pAxW7VBrzbdDcXQxYQgSqFAGcGNhoLahGjZfPC9Z2J",
  "key2": "61iUDyLoDoAzue4bar5WvyWJg8zf8B56VB4Y8DpEDtXBr5Ain8cM3AM57sRee6xngdtuRe1HY1ehbGiW3cgXZ7nT",
  "key3": "67R6qVtc1ZRtioyvYfrtdqoWA6b9pJgWfhAwJ3hxuKErJ9Jg2cRqTy1DEAMzcsLMM9ELcqKFcwJge3a5PfFx8MDY",
  "key4": "2CDPbbtKp18pnEEjQZChqUd9FDxa79HF9C4WGoQahw8QHnf7HBCgAxGMsFMKjbFfb6xSYfjKKzohUZCutUoZaS92",
  "key5": "GT1hn8qwvoPMyExuL87rXhHtq5nWpka9zmH1tL7KnZfGqook4P3RyqQCT5MfeQj864Y9KJvJ6bpUDQNp9KFU1JB",
  "key6": "5JSwcpoRbQpMTKSqSTgivF7QGcKaqrw2joycWqpsixy5hR9TkCkFKavsHzMvyEbghUC8MRPZc9bzvH2BdFbKfGkS",
  "key7": "22Y7B7g3o48XQfddMmfh4Ck4cfvwWzumxcaYfgEgdWq4PoKjAwMMMWHCgjVkoJ913AWc3nbP74er6CmV5E3K3KHv",
  "key8": "4vNR3qq1qbNqj47hEWAGgfJ8A24gRySy2t4AMp3JQRtEbDhYQyaMpo8F6xXAkk9bE4eHGAWoCyfk8tkBAm6wZPyg",
  "key9": "xjPV4duzhTbkzhLqkq1RJCW3fSKUiqgCmo6Vfv6ouYXEYXkB9qnWn2W38jgV9BDw5tPa8TUKtx3c8HMkET5bFpe",
  "key10": "5xpfnFbmemRSyqmkkxYHp2aEo96nxSoqbWtUUQv1qCdrUfJuRnT9Dwti4kjVyr5gH52rytfgWd7isGCZY4TYpXSX",
  "key11": "3cocKtRJwEv75JRzYZ9Q4RcqCQXcXP6ZMgbNaUYEsNLXzKfF2UhGEkZCdJHpfmvzyFydKqQiVXkawQoiXrM5SGWh",
  "key12": "3BTPxQxrWz4Lxv6BPXNdNEdVsqxMPo4b7d3PF4QQte9bCSuA6fNBakz59TtDHzaWeQtHBg13RrrpoEqxYDoLHFAP",
  "key13": "5C9QpdjpXsCBQbXAUJ3vjWpEoPnoDqrYLnP7DJPGNffmzMWF9wiB8jfx33J6seEPQoxtQNEjXK8sCo8p8BtDsvNe",
  "key14": "28y7W8hghgTb4Fwz18f6bCfvh2gBVwQKZY3xFyPN2VuFoVegiCZgGpbAnoTR2iWA8pHPatP4mTP7rLm8UxCXNQcH",
  "key15": "5LaMf3A2Uhx5RLjunff9SzCCJxskBWHVmhnuxUacX3AtXs5dws4RMVokJYoZYQbWzAeWoMzPXuqcQrj2bkDMojDn",
  "key16": "6SbcJV4m5u5MSWuhqgz6xboDfpnniQoxEW2xP7JAJ2miQDV6MatgNzNAcZCSEZphjmTJFp8TvViaBWTD4JLfjJm",
  "key17": "wLauRpUxqd4WbQyKrMTyXEz2rhR6kFb354eQR4XDBhVaGg57o2py92LFGMZEvE4GhBs9mdYryrhHWdd2m9PqrWJ",
  "key18": "Jdgeg4g6D8JX24gCJJ4fm2SAHuWdNRRoU17A6uDavVzoKuGcU2ErvLPVhAJfSDmD6MTwwrDTzhgZHWZGCreydK7",
  "key19": "4GD5giVxMXG4Q2ivTQsEcssWGfNKaAVzsBoUbLiMiEJPRhzMXRcXZ2NacrBtHqWNnpihYLxL5239gRHwkDGkHVkH",
  "key20": "4DfEBCSKPkBdvZQJpyDHjy1tfhZdEnhVE72YvrizZrZg4o5CHdcd8ahUQ2xzyBqU27YBW5A12f8emf62QRogauP",
  "key21": "2PWX15tVMHhumHd1V8VNgfD5ttAE67jHen7KJdwUUWSobZuvBmi3foMR8LgVVxZEjn3Z3FKndWB17NAFiM4r9Ax2",
  "key22": "3iEUQhYV2sPJ7GxVXuUahCSosXXkPjoovxZwkbXnf9PgM91keXv8NuyCmerb9QQR4Xp4RrC4G9P5qqi7NAR4MDrc",
  "key23": "3uMMN75Bm5E2YJxj7N1EM7UsQ8PihdwZ9m6W8CNHyCNZohEnDPakVsCiCPhhJqP6fuhN4gQMjFaaRd9wRYwLRCv1",
  "key24": "KyDDe1PmaegXhmJxHP1P2W4pg5wVduT1uMdXt1DGS8TBtBeRU7EpC35vucj86n8aP7NYRCpCtpaTcTSmWq99JLA",
  "key25": "51gDDzofTBQuHdUHRgVt5atMXB1nXwYFHqJxS9Q8MgQj2x8tf45SnWZawdZ7yMSYHp69UYRCzXYUHAGakLuxrW1z",
  "key26": "5xSEaZahttJCD5zSkgKpCeMSfnriXNpWSn2JJCVdJMqoopTRRj94F55vzo18mmqMtZy7K6n2FzuiST6j1ZoUqRTo",
  "key27": "3SgkKcQr74xK3DL5t5hXZah4v6CyvEAYofSKbq7mPUQitvEnwvf8C7avDT5HT6YHmgVQgWrpUbhym7J9qtGxD8rB",
  "key28": "5doakRDZw32KmbpULrRWSzbvSwCDUuPeAsKMQgavgRfyfAKv81XD2csqdvUSpvzw4nv7HokLn4mFkV4LR4uyWtA5",
  "key29": "5hPMaCKjTx4LyUnJP6a9QSUF3sZyKzY22MCuhQRR7wfwM5fmZAJVqMMzW2NuP3REeogi4hhS5ZPk6djAo2Csg2EE",
  "key30": "3EgztJG7fvEnhAowRUjG6br7QH2q7eoPEqYhrE9AXehxv2t15ANDkqhjX8KSEYVMyywTGASE5utUkeQHQ7YmgiYG",
  "key31": "3DmhS7oiC7kQGBs6RhTpkQ9Ap8hU1Sr7or3NWjgVLejXoSxdGuuUpibjcYmELUpf7hJ22HDdNcM9tzPtHLtto7p4",
  "key32": "SXhUQLN5igZSnptMCJKXhh2kLpqCBM3CgkPxV8uwF2eW2WB6ddUvgY3PxH8BYG4cYQME5dmQauzeibYtUM8nZyP",
  "key33": "5cuSBJaCAfTuuS5r4M9k72n4oVXSPSVQBdjkDQ41zqvz3Tniy8vj6TJcf847nDNpeo86zFqTUkyJKPkgG7i1YWZ",
  "key34": "4zkyV3gfkHavLS2pFJCb3UmRU6jt7oEoiD2m5xDKatbXxfDRsC4EfLQYiQERKg7gUTB695iNoqMKTztFgqj667rj",
  "key35": "5fGrk7XvCmGgEKtifdwjjpSAuSFCvBJY2CqX3grZ6um8oUF4kpuvbzbhHdRLZk4dj41X5K6zvYS4xjEet8Y6prWJ",
  "key36": "3Gb7jtDcpKr8v9uGsEs8f4QEm5xg6fGzRAhiXEvSHru4NwgX4n1SnwxmWtp3qj3KwF1S9FqtK8kaA1BCrQnT2cgr",
  "key37": "WMQkdPFPC5i5U1rb6h6Gmn9SqpzVEQWtBGbvzT4QuFTD3fXEwRhdsSvFWWQNS9xkZ1ycTgdPhJdWQJFcf9McCVw"
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
