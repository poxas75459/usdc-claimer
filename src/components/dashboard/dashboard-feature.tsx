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
    "3u1ugbnQRmeZrrm3LX9j7FwKNBk66wmuwwRhLBVJ6FaLdX8SJzNGeu7sHC245tZXfE7pf72w8u2MWhwrFE2Jcyzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "USD7LQ4jzcLy1vtAKQ13B4uMHH1FWKyppJ1ojaUaBk2wuWkdJkE8V1uqputtP5hjbgx3P7hMUwB8z6iokoisHLc",
  "key1": "4JeusZL69r5wTQ2rrQ2JBApL2QpWKebeoyBnDnNeYyTnASSC7tCPP7jeJn287nY842R9MaXRXq5TafRMnsSUcvrp",
  "key2": "4HaDuLuVTEYzJsFRpAPcKDjyEL7sjXpQYVthV71ybFQUDmNiCbZBKnoztojghx9CmAEzodWyw9pQJK89gvNGaCDX",
  "key3": "5vfdj9mjpqwwttsSD2k1AbFcAYjYZ8fGrt1UWjUP1LTbRThS5krCr2txVs1yuQwUQdxNV2xodiF8JHJhe368GUD1",
  "key4": "28vHBEgupPjzKHpQhBbw46YyG2nc5LpMvoGmBk1mASPuYaAvWBwAsS7H4pJJtJ4SZUaVcN3sPR8arF3zY7ioD6xQ",
  "key5": "5dD4A25UwhNPjiEvXY4FV4HPJZfVi7GrpW7YkkH2bEB6ToX3xnYvqKBV4wC6FJMuTwKa4daEbSTC7ZhUiGbGWhUA",
  "key6": "wszSSBKPNDasJDQuJNWRtdhjaaoEsNc4GeYVf5axv7zL7L4Uq8TNDELpKB5EmBJp9kQAXyrwv3Cah9cWeSq6ynv",
  "key7": "zVmLp37ufWSEsHsWHUdC4NKyRrSyKEPtSjEiqw4Jy3ccvV9Mq1csm612M5aYKBAwFBzyWQ6yCeULRC65Q6CJZJd",
  "key8": "5PcGTfiZq7bHK3PHFWLKEKU2QoKH9K7Epwd3XoZSX42NpuEXQi8gVaxXcLroSgdNx7A6CpVeQpGYRSSMQBDWP3WE",
  "key9": "5qomvzocWPBZuGiX1NaUHsNXmNMV2yw4vgS4bsL7GAUaLTehz5nmnrEfjW3Cz36c7tHc1otx6uoqw5WuJzfF41PQ",
  "key10": "2YZPPFoaY7eP2DxWdWKvEfZoB8UNogCVXi1yp9LASvBYndTUFEX44anTVYvAqtEhfJigcdzwA62ATaVTAnaRCq1e",
  "key11": "aCR8geqoZMoEvoyp3VwJddgs3ZgCDr7NWw2MnKka76MjfHjfz4To1sxaqvHZvo4221wC9QFG9LyE4jKhLNxt2xm",
  "key12": "tph7iXiDaEYGCDpzDB1o7Cf3ewvsXshhaKY9f92etq6qdMgAdrjtLZ3xv1NfzSaGqyh5uzovvzBCnCydqgJLu9b",
  "key13": "4H59RmRCWuPP7zMZ1Fw5kGn6qfAmePsKUzdLiv54DQksZ5Zrf7EBrkjLqQqeXJcAPqVbWg5wtfZWVLdX6qUeiWdQ",
  "key14": "3Xd5TAJg1wGu1N1fx9LD15n83KdLjFQVVykkznU5QUtJHGdYCmWXPeQ6o6aavxMVaBLRrfSjCxfeXwex5pngj9Z2",
  "key15": "2o2j7ZpVHSaZuNKNkpjQnpAF59r3SxNNe7pKrt9b5Us7ziZYiTs9cMX3ciKAiVQTPJ917J8yB7z3tZmhcfNPJGLC",
  "key16": "5Si9GEt2RczCwq7nmtVaueMLwtHtAA36Gh2JQgbWWE5FdkkNqgBJACk9v8eF1JNAiyu9MN6h28QUk4iFkip1Fvb2",
  "key17": "vrfa8wc3wjNBFscDd7pjmFjdCw3eN8RWq9Nu8VDJr7cmeGVLdekytXP72Ri7ZmJneGhaRCmqXU82HeKoy3gkTXF",
  "key18": "5fTDMo46AMx1uoELisYPcU4S5fjsyWDwX5X62suNJSDb6GXaNNL5RFQ4k6DKUoXszXWt1ASutazaFNhya2W6BDae",
  "key19": "B18au13WKAcxSxqNtnA9uqcHR7pMgnjDxf6SmUC6em2zLK3LQFSLCWUYf92wcAruNTDoQKXwFszAarikVEZU5Kn",
  "key20": "4b8335zTtT41BZbTAWQrSQ4ZnMXXcWNXKJNS68yfioCsEs5wy1jaw1xinDm1HJZe59cDDpnxKpyNZk6Qw6sSqvbv",
  "key21": "39czWexTVXKx7C1PSb2BgbKTQWtnid56tmVYx2izvX7n39KD2dY11uvrox37SR5iwwZ7YYYZmFDZcL4uwfBzoM8s",
  "key22": "2r4ykZTR3jCyoK5HLNdEbZFFGRB3aJSkK4DmMLVEzE7JMNjAv3Gk25nnXqL7GDJnXKd95QmzGFS58wa5FQR9JDon",
  "key23": "3tpYzT4Qt5tPwB7dTvDsMQddYmfKd33dC3L5mZ4kMk6CboZ1Z3qCMpCuiYpag5xwimDC7Y1LMBTobt1N1xFZ3j41",
  "key24": "2fL9asENTukbovQY6DNzvZ4rDHRgZSyevqfAi3Gv1EP9duooPz1438zsLazMybTyiVeKg5KKu4Lhej6C9mNtcSpC",
  "key25": "63emA4u9TRGXiid6F9CsVo7dRYieFX4FJudAnUNW742Y7HQ7FTSPAwFx4igLphsa8pzbfCgkczP5NEPKrupkwyEC",
  "key26": "3L42aSDb3Sgoz5aopv46UGpzMBMGvkXfRicPktfJsERHE5yRbgQGyh6BrzGXJKghnUnvQjNn8fPJc5knYu2Tk11Y",
  "key27": "3U9KqF6LVxxWRMbXduiFUiiSMtrKHBr3mzp8GDMHtWsd6aUPGPrqsbzHkWcKXFUVSxNcTovBxr2C6zfjykP2Nyo1",
  "key28": "BKhNDCwQmjCYdR7wgCEAgcqZYeQiEhg6Kxs9fU4piMA378hqCj2T7JyAaD77ksHtrTPcwvJAeFoVCE6yMeuPxCT",
  "key29": "4kgQBeSVQ9SGFefSnpGUhbu8MhgggXEABB2c3EHMZKeGMpi2fbKhKWjagSEU2FJduN2qRmUTyH3ngrWcpwvV8tci",
  "key30": "5R1aDKyEEzvqnCX2KKv4QLpcJRhiwkUtf7BKjLx2C1TuyKtmEiMdvDVRQqzSL3op3GRsDsrGVJjqWc7VT8AavsXv",
  "key31": "475GEYbvQ5EyPBRHP88ZZZgqNWnjapgZNBHEuofsjtLCJe4ouLzxXEj6FXYAxFcorBk5SAaVJih5u7ZjQYvupsXQ",
  "key32": "2M75kkAFj7FTnyupQMcWSfKNdZji1Mq17E8EFLaXhQi1S42pxPY4NtKtMjRig1DRT1R8CEVU6PHyJzBxHUhbB5L1",
  "key33": "2xa5fMhHd5pwue69GcU7vUzeMnoPkJ4WzGZsXaS94MAEsAzoyjPSLRTBNGGPJhZDaLV4G8USWDr2gQ5BXS59Z4Wk",
  "key34": "48ZGgDejV1SjbLycasAhnoWpCBnyXLwayAYKcph2i9f3xKgBuDxHmg7xBwA9cd78fKAvx4oxT655T9hUbzgA3AJt",
  "key35": "2kUi6SJctYQHUoE6qeJHrKyj5LcKC6TkGZqwd5BfHEHE53TXMhTgPqr9ErG4JAi7P7QfchDfLBzLkZcJ3JRwWMeG",
  "key36": "4Sg9z9PeaXR8DtLt1bx7Yn2ki6FuST383KhKnv1LRGcL8QPGB9aKRVkxCbrrmBjSELSkiHMJAwUqEpRgfBsr8KY3",
  "key37": "gSqCKhHC7stLxPFWjV1bXoHkAtjviX8PnjvcK6Sqxqer9Te717WxoN6AAcCd91UYctsMcLTpxH9ocsqX6krAGQs",
  "key38": "3k1vf6GHi1zSdtU56rAiyQrgxUrwVpFNjFjgj6CDZQabrYyCQChgGqxm8dQiTKbASwTRjQUSHKCnLB2NXabHqG1d",
  "key39": "CtVG3tBFXUZaAhut1HusYMStr7yPJhipVocn8QHLXBJjDKWdVfpiQoKbGnUTK3XBVZbdv2XLURN7cUSrr2pLsfT",
  "key40": "2YmtweqPDthyqkdn3LuBMum6NeLcCwQ2oaL5yqUdzbAkwvELTrar5wbuZnwABgZ9HojHEkJbpPokE996oiJ5qp94",
  "key41": "5HMJq8JvMhyyojkEZXhR99274R99shfsS43hspfKGNT3UeFLDBunv8YeSBuAHUtNW8UtaD84TovjVzTdBoMkcEm8",
  "key42": "JJhHzTnK6LtL2NeRH2vuB13awof8P227YxW7Yqsh4cxjE2hcBb1tzKhdf7R2aKbGm9KK6ZUYejd5ctuRBmi7n8Y"
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
