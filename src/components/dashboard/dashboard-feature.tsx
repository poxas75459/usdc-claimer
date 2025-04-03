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
    "mvC4wHLWEeTsmrSZ6B6pM1twAyYBgXWPZ4J6ZwnmKE55tZZazZBQikWYca4h2PRhJphFkECsqEBu6rqmMMcnHKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CLA9xqAG1pjSy3aCqLjkzqEVUEnDLfNRqYi9HWMwWuc3FXm9aXJ4vB8ttkDWG5zDgziNuzikS4QpXJMxuGDKPTq",
  "key1": "3LRcFLemgzCmMQ6D3LvLjY55NoJrksDz8NAunQiZtsB3yMGtjnqT7JbhKJyQv7sa7YJPijC6ruWzvobS9NVRp7LG",
  "key2": "4NME4M33R4nf27BaB1KcpkKWNt1yGYqnCEcNhSbce8hUqWQCKzQdRmtHXW5HkveyVZ86s5FLcmTmMRmrMjDe99z3",
  "key3": "38iZY3M6knwEZZkHDCPy9Y8KpMFfw2SC8GCJaZ4yutqXec9GuEGVacFr3gqTVkwvtSmNPqpjAWYXuRZK9BaGLuVh",
  "key4": "2432M8dptPnSyMJvnzc8Y3qYHF8gMGjJ9gKiWkpgULnhi9mcMkK832V4FKvAGthDdy75vW1FZUM41HiWFjjH4cDw",
  "key5": "21ha5E9bqHpHeESiFwWu5TGVHbNmbiEmhvRLAvW3iw5MpzTCDmvxx4P8SfaE4vAroNrxetoT52qsr15ELzRqY5Qu",
  "key6": "e8Pr3zzaPk6VRVf9sk739mbFg6zQAtuvLJmAeAtvTU9fREqKWYAN71Q7aYiKk6cfJXyKQbgSYcrDbcYiaMuCpvp",
  "key7": "3JQbcaUBtg4tXx5aMGz8rfBoKALHv6aSAxmrHUz9a5cn4nkujEwfL4WRx1pufmviKNSPEd8FyUt3hZ81mjMXQn4b",
  "key8": "3gFpRei7rt6GrwXnynB6rCX8X8raqQ9ztWFdNQUXvrx9YyaQUrhdvjVkN6YtgoU7dwNX98abzWiaGXgaQ5HBwXKb",
  "key9": "3hBh2dcXKygL8WHT7Lb6NLcgvX9MzFseG4FqSfxEk7ea8ktMAfkiLt8TFj3d6DzVQ7J5gp5HjVCSJLU3QH2oHQCw",
  "key10": "2yYyQhHyBsarHuTKHkmzd1eeGxntMENjqzHZwcS4WMQgkKMsTvHrdZE96zUHjtJys5W71N8hLt9hMQwnsqFyNkfc",
  "key11": "225BRVjK5K7icVZ3fTTPpvbonsM7mfDEsSp2hsxFYDRcUfHoKuSDeGF9UVaJhH5EBHGcuhHpWGd4U1Vgx99SB2aD",
  "key12": "3QkojbPpEjdK1JZCopZ2BNpnkCYN871eexgZ4PeDRCN13Z5WGRyoZ9rFunWKLbFUhD7v9aHhEognDSSwqjDb4qLq",
  "key13": "2PHuUZorrpqCptK39xvuiaHsGr5Xx3sEUgQVN96TupVyHQzGBPFg2D3m2X5UA5r3n5h8DvzpkfV61CmwacBjjHtV",
  "key14": "2WAoQL9kT6jsQdDm3y1oFpp5droHqycrurDNVwjbVaGAm8Wtz7D2RcgpXGxFZMb11LjtYfPe3cg6aL2r53cqkPTW",
  "key15": "39bSfeUPC9iNeSQout9YDRxkZhibxc8Fx4kJVLaxPvCz1EwRdr6aWs93AzmF3NXtk4kGcgsCqq8PST5bTsjdFnfw",
  "key16": "2EC4NGdakLay6q5i3STAvPssXDFWPqHHh1NSSLwWaSwTcXrEYRcHvSdmAyWbhYVSAjWG1zvpnLFhSKKrkDQCwCcq",
  "key17": "5zs3n7RfACj7kvr6oW2aHEwhKowyGsetf2cymepju6eZ9rb9agS3WCiPBeei38gMQu1qygp7gEArYUNSfq97ao7A",
  "key18": "oZUHAnAh3NoUxZuecCs7i1QVnFte1p4aGfQxgeD8DCjW1U4HuSxpoxFh48gJtQcKWpLFYJi5qqsKz2nhiQcYa6J",
  "key19": "6QAnwLMfHGLaAxNXN6JppMbfbpQf6jB4Wm3x74mHaMYJkeB6Mv8Zj7iSP4UQkjKPvVoeUPGquae2J7teQn4RYA8",
  "key20": "3HKLoCoqexNNuBqpurArmn6SMcYc3PhegrCuXwzVEaPiMgdfA2Zx6XSLafeYNWngGgukd6eBnUZyaWUfdfconukd",
  "key21": "4ABCG76L4mBWWVddQiw1BH74Y4MKoDp1K2iUJYnkyQrVMv1ECeSrGQeGvUsUpFVRpK3a8x8RS23U9BVpPNM5X1SY",
  "key22": "3UNThY8LvDXwFp5YECGuzg67KpVurLUpgTUuSLoC8DfATQ9E6sNgCffs82hDaU8sXPZod7WZL9yFdFPBgD5JKNM5",
  "key23": "sb2vGy9hA6k1WPfFitFsC9XU7b6uzgaQadHrc5g9xvedmp3SaxKpGjy4itCVknmg74TDHkzcSYMApaiNRC4spwv",
  "key24": "355WKQXSGCtv3oAVUKZyBQmBHQvCdCXWbQ4PsD5TjfXdqYfsrS5GxgjCdsxyfbumLFwVLvPDVTzKcn4z4QFSDvhX",
  "key25": "3R3WSDrEh5ZrhMnb2QiYLWTJ65bT1V1SLYsSrWfmdRbsqUMzFPDmAwxumckgiiTiQeUZKqf6YQHo9smCP1x2uc5M",
  "key26": "5UxdFcTXEVwmqzTJPVwK7MasREYyRYuCPRbodd5fmtUz5njojZqQHyggcTUB9NMvHeDB7empgbP8aaqAZDaHX9FU",
  "key27": "5c9dng5Ln2yd7j9afo7L4griHQUZoPgbi1Bo8mcMQgwsJCkoHpF4s2ss2Z2nizwwZADiCjUXaWD8pRhcxAUpfDk7",
  "key28": "4PNVUzHKBBw4eJsEKdUonbfEBcUwhJvatHCSNDADQAQiHizWEHZYzH1hGdAQZL1VNEzZ1vA6kEHEbAgk2oTHwnU7",
  "key29": "61Kk72RPgWXjji5fosWykPEMXaerh8DLsLmogc1Jj7E2bydaLyHDrwDtpfc8shfWLqaMLtGwWVBKRddaGZCtahRo",
  "key30": "LuskQj2XJtaTpXJJ61ZNwsVgXTih1qKUaShVEzjK3ZU9LUHoXw8QaRsSQDEscoZHEJYuc8WsookymQT9itTHFjz",
  "key31": "2Y1JaUAsGcC1N4sV2CGJX8S5zZfxawS2bhj5moBNm26Fk5wSmXs86cVEeiPEFUUnRPgyoi1wM4EzSAQFASPWYxhj",
  "key32": "5jDua38aXA47dPv3fDbpCYA5QP47Eo2dQwqcGxoZqFYm9nPa5ddWRf8kKYGCVyFEt3gKcj2Urinr7ZwsGZr8GWPe",
  "key33": "yV3dYo5dFiTDDY1AMz7WCVZeXiuPAkE7wYm4Zivzw4XbXtA6a5zr8WmAu6ozeeD7RuiDEGRzqBBbL4CpRr2X7hc",
  "key34": "3xeLUkejhByqcmzmvSHSrJvb5z8eBLUhjx3z5unBBf9Cjb5sre5mwcNQRogSRRE1ioKVaYS8ak66GRWYHx1bFm13",
  "key35": "3zheMzeXvEjUyJhAuqz85NnM57MGam7PnHm9szLgoVc7JYF9W8pib367zfuEXiU9bXFrbMkVCdcgz4DfyA8GXwjh",
  "key36": "4LRFXcr9tuPJoRBb1WVQMiV3dbLmB8d9DADrhz7Pvo2LHcA8oconrYdJdnD4KfmUsMzY5CjTLpXoj4Yc9ETwqNTb",
  "key37": "3n7cCKfyYQNhw9o2Hzrowcg9yYXmYuRKpkNZCDYLE3RwYRTUif8BshGKRYtE5xCk8euKupwXuhyLwyKGF8eTchhj",
  "key38": "4fRUfKxNNtZtrhbEg9pNmDXHhxvPHeMaKohNM55cEnVy1wR8B7VTafov7vNahkBgSXzBs7NDmEpzwTGzy5YpvEya"
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
