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
    "2g5r6CcBSv5qRyBUruNuwnjhEVztS5ftLhATefowQ8iQRQyRYn9gMVDor6HJhbszAhn8zkBA6eQHxuHtkg5gD1jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dWiU8LSmSxFqMzei3TmKv7xxXWvXHvrMkbXR8rmkKqK9mFpAcu6yJV4beLR6RFvu3PYhE2zuNCaq7SLphQPPzhw",
  "key1": "5s4ArH83Jf9ZfnNWqLkDb4mQKo9WXs1ysff93U55w1wRPR4XFcRnrZKcA658CCYBT6jiYnZJw6LiXsiok9Z7C44V",
  "key2": "xEQm6Eqzz9P7F6A9htAz8V5gCrrXSzjaz27YsF7uz9r1pfVrt3aDvehyrWWaweUwTANHwf7Jhtdz8nEdvdRsXxM",
  "key3": "5DtG8Fd9zChpr8J19m5jSuHwjtk1aern1rfm9oe6REBQmQf8efAfonvLDqH3pmUQPUa997xKpQVjV5GP1u9LEWBj",
  "key4": "2Fus8vpjMxWDzz7E3qqruPFpKHr4guwCVfQt13e9svwhMJ4jkuFygkW8TW8ZFE5Azbuyn6xi82Erpz3kAuqQfZUe",
  "key5": "61AywBN66hhj3WRVgr8CH2Xrw4jN4oYS9i2FKftR79ivNuVH89bgmovg5UhwMXqW8orjtfauugiGDcpN5hYNkMJr",
  "key6": "2vsFJXjeSdRUfxUe6d5ZdecNcwGaxeaLydkeGKE7Gd5tUAY6PqF68ZaFPJCdDDvn9wqkNXbKe5MaPtuijcrUCEJG",
  "key7": "4iyeTcjBKv2Xrb124AdjHw8EH5dko1ei8aCP9kT7zFNyYAwrcw4fd9xQDR56h7F8J4kwbUbGDuYrkYe1pLAP3zJR",
  "key8": "5byEt7n1DK2vd1QuDs4oShWb2ag8SAp8DMdycw5S8xmANUZMPwKhizhDcpgcHmHkM63N3py3vdCjYquneEnfxJuE",
  "key9": "2RE1eHSGQcM1nULpvRkLCdE8ssJZZRuPqJAe5ntT2tX8h5zznAKAL4a4JBoPKegzFAX1ea964mvC4uP2bDLqJ4QD",
  "key10": "4TbLMMGwiiG95jerf7WFCodHNEBfmym5Dtfp51LDHkh2i6PaUWNQyfH4Uf335P9gigFUXgMSmDdLiykRBdSUUKWU",
  "key11": "3tDskGJYffdXBhtKEu9QnqeiCJuHh8e1pcSE8RNmrQc1xJdkqpP6mQ36WvgLqY5gHnvniJWbLFsuX7eYAyZHBDsu",
  "key12": "v3hJwaGGfwDCzk95rqfSHyEed9L2UCuMZSRxaLoyXybpF5Whuw71Br4nhYgWt26MfL4LBn7tpgXdj1DRhDZ8oJy",
  "key13": "5UUSuiBtpmcCaH3JRU5L1dzVo5UcYF68yuSdNYhaT5dysXH4pcLsV5r2tmaxzgeETkc94Rpo8odiUBZ2zAKxAYD3",
  "key14": "5YMFU8cQpZYPSAdhR4ZgApTRBemQrSiaUWuVJq2QZobhkszo29XdNzCksBd2GmQdni8rPaofdKLx1FdApKbCb9ty",
  "key15": "3vHhZF2yh8XcC71TwgFssApLpeLgUGK9NBVWAvUS6vBXwh36sr87yoHP6e1x79k8fmtbLhKYueCn5XdJiTCDEgDq",
  "key16": "4pKYrd9xJVqiGunmWNoCeGQSN9Wv8af9X58wtMSGoBJPKAXB8zSkdS9yYRN7v6LYUjFqYPpuBnkxRMmdg7Rtkw1j",
  "key17": "3CnrHmMBWpCoBsNvj6PRgtkpz1dmVc4LmKDdsKE6mcFxR32BAGKMMXSCYuUYMiSh2sdE88Cqo2wYbeA7JgDD2GD9",
  "key18": "YQXZ2A3LY38aqWAhrjrrtcz8cHFQeYzs9pWwi1Gha8rn2GJMcuWGV2aXBCMcP2sgNCv9q2G9g9XmeU5um2hDfj6",
  "key19": "36H3x9dLL9jbMcB4DZ8JWu9xK8RqZunKDwPrnTkv2pX37v3eJfzkSyVGxGxgg1nq4sPoHvnB2ZH3mheKxVLL3uXk",
  "key20": "3WxTnXRkHTqGHLHK8TBsMbv16xhP2HGSQZKXNDSvkas6xdLcBYCi7C1NMEZjZAbaLnFSLy9Dtx6BnTX8RQSsnSJC",
  "key21": "5Uv8N8kU8ZESMbKsGuqVJQ1gw4Xa9MMNarcbtgu6HyWdsUPi9b6682YcYRfFKvaUXSDC83SttXdTuNbwuagsq1ph",
  "key22": "2bJcqMvwHTziJCGhbjWNH7D1QktoK5NVhBs5ZnKpTuajmaFGWxDpTiwHFnKtMsyrqT5o9Y9FNiyufjsuKxrGT8kn",
  "key23": "VfRESAh8JLfM5icmx5rcraCLu4rqG5LVdngVdTKdUbV2qDXc5PUwjPLwCU3LAvHYJ25M1YFbFh4qVvuGQDWWAtf",
  "key24": "2zSsqv6jkDB6cXZzmH4DwBBjj2vRPJs585vJaarXZPAyS9SHjQ5vKyiRJfsXthKWVDkhPS1aRSCf5tyCnoD1Bv2X",
  "key25": "3RxhD88FKfkEkBv5nFgjbmHX1gZ1n1fNeMNgZEvpgpRBQ9zuF2X5azEuAYhYmQWqCS2HdctQYjWH7x4iPJrbX1cd",
  "key26": "4cr1sBMDnuuL8KZGaXJeEEwG3UCSPJ9vAE3QcKYT3u2wamQ6hnVZxkAYJBYHRiuCM8XwUfdov3DaFnnk2wkSN3jQ",
  "key27": "AJT9RXgQYZuF1y1nerqhntyD5YXYrydNopsXw1UGqRgm6YabeDHqKQpWpgqHXc2iX7mct7NjWPvMSPgQSLzj6id",
  "key28": "3RxwSgoRRorzdoiM9KgFCEeiLtc9psj3mndVWoZfPbSsGXP16AttPfbUbj7t1ehU2bBubxUDPPKNbEruTTxARKWa",
  "key29": "39cL5xDjPJqKNpHjdWzPP3nEDit7YP7VrJadqZYVMqbvhVKJKGTbbfWVaEYAp9WkUf8QEcaMrb14sihnWJjJ2zW2",
  "key30": "47rBEvY61iiQrkFcw92UJp9fBcEiv6SqpFo8ZdD7yRsB5HYW4MP4a13zhtEMxNixrGYKvQShpzexdX8Yq6JVrU3",
  "key31": "5w2iN1ZPfzMEpKVyVWi438UMHzyC8jyq1rHDs9GVNTtMy9g9qENcwqvYE4ZQAHg5akpCyyi5hZfipJsNqBYNtEGm",
  "key32": "26AsFBEZNuRZk1owuJjdMvim3s8or7sVvwos8rsccmxg3x5AUxy5o7Lda2VzJKaL4GGCr1MGLFP8SrqBi8t7wWGy",
  "key33": "3AxUrGBfCdkdkneipEcGDXcPKSv6eqfpKGtEBn9rhzDMxNq5nPpkcubpwpRPr7LuSNiu8PSwBdYBk7yLCvHs8Y9j",
  "key34": "2AMbxWWHzsXeJcWJVnoaseDknxT5Swt1kvmsDQnSbxvzeotTwVw3dUS7AhufSyRMY74r8gmahh8dbjC34wjuNKxh",
  "key35": "5avQVVrXEQ6E2zXp1chJLBXRkhjz3sLg5AfZRu2AoFoPRQEQyvSrE6ZkoS5gv5nBqyo2LPZ8XojG4zzVoSfvdcwV",
  "key36": "5zRkAt6274NoNCiLUDHyH4j572QsogWtmmwGgUxbdRFQC2VsSG4RfS8834FQw7XSJYAuenAmqP2ZSy3MVJ2NoGHi",
  "key37": "2jCV3EmpgaXXsh1sQJjqVzo38brBNv5o2jgeGsEb5G7xRsRQYv8gLeT6BTF5ELVjDEnxb6aFUXyjwWdxtezcMC8f",
  "key38": "2pP8hc2cgEvBWpdCnC9ptEXs3xyrLd3NYV9P5843x38JSQkRuzqPgZDPEhr1j2y51oZQtpyyVyuo5kYU2RpXxj1z",
  "key39": "2UWMf3HKyjbdh42NRrAEy6pdd2Sjpv9PoGVcSgfxg7ULcRDQUmWHYKShv7WBFYqEkCJogC6bcKJnjCubaAybZTQZ",
  "key40": "1komb3pggHEBCT2DSq7Cn6ihqSygk5awXFGCDEt9ZiMMb4bYaTgWjubXY8ZUdRWcqi6uTz9Hmw3D4S8r1nM7kWJ",
  "key41": "46TGCCvV4PF6jeFiyLtPvZMsgAMH1v2a7snGZFeZVoLYnkd4JCruwdSmUDgyjh8Wgyrk4A5PGcKSnuYfqEF6ByP8",
  "key42": "2foCC8wWFK28GajbPzdKQx783TyzrXe71BhegNWpgfYhPMCJMZudz4PvaUAMfdiUcYeSJr5bvnkJM73zq49uAiUa",
  "key43": "64RkjmX6nNZ73WurhFNVV8LgthtdsjbD2r93Qwro9qgb5hGjgpTN6g99rBUNLV2hTS22abQvY1pxu5ZCBYgyx8d2",
  "key44": "fZoCaNigdJDjU9Fbk3NGhb9TUWqgeNDGSwmwHMMPXBgYoYa4n4YYuFP4a6tFY8hFqHdmAWXYqdCWwfGFghFGZK5",
  "key45": "3DG2YFd2siMA3CYGEJjdXmkAyKQm9RBhn4LYcuL8a5tp83Md6sYp1Rd9fvxSfuDhvLxTektRf4TDrZCXbUkAKXLv"
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
