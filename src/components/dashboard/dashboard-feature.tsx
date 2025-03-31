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
    "4YeBW8RiN7mLQinK5M9um1pXEPqdCEgkLyg3mik929TWKerW4zBTJteaxfh8FZXfH42KHVMDgunUQjQNG2FCDU9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zZWLenpByLioFkoQrAEkBaUhobvPigK8KKgBBhZWgfZZfmFZhh12NQgRkTu1qzKs4Xbbk7tzp566TJmgRp72rp",
  "key1": "2ZtBLZtSRE9bow1zSifQ2tC6St5J1PgLBxPfxgsJHS4WEBrfxDzuLZUvNeDZJWNKfKj4TjWBNqWTX5fYiV6f15if",
  "key2": "2kQs2TC76Ehre843ZgD1gwWRgesqzcrF7hwJePQ3PYPADa7uSBdDoNAtXT8YZpnCNdzSFmzPSLcL4Ke1tjvBEAxR",
  "key3": "4RQbhrW15GdqMPkwjqXFLSidEKoHkjdPkS9C9Sf6hWHzmKphQe6jM5fLsUmcf31WQddFi9Lfs69oxsgvGvUucsLZ",
  "key4": "4ZcbcRLmhhNtWnoV9RxTBm4EYSPuUGqtZaPMtLPCyFto6wyL48hXi3QKvuKjSpDTXEnm5a6eBtEVLcSP1iBYEgVz",
  "key5": "4kjMvvBCSxJKC2awmrTQRXUHgBpnqpHe32bwY84hQcs3QAUdumL4gGLXFuyafYWT51kMEMY6DjuHNSe9Xb2uyCGV",
  "key6": "554L91Ugsx9qb4Bv6WNZjqJrjyRLiE5E4h7p6LJEEJFwpEhxKWmZT2HAXhgyZv2WKLpG2Gv6XHNyyDRftSMBtJ3X",
  "key7": "3hgAJ5X9SC5UCbDwXYGuM15PsydJ3SViyDUjK3Mk1S3wbfH4gcZp6hKSWrydg4v9nb5KE2e3DxvPgHTyL3oLQrDu",
  "key8": "Sdpbfj6wLKb3Q4gFiJoMuoyX1PnxsWkmorGdf6Scj3HFKS2wv7gbCnKjQKECqhuCHr4DECRQZ1EwDx6mBe2gvym",
  "key9": "WSK2GV3etoHrLjE4kyVgYydA9LQNgHrc5DEVuzTi5TA6mCUAfazsypKXTkytm7wfc3rHc3VUtiuphio8k8M9pm7",
  "key10": "4T8eZcT2EEGZXTZJNaGogtfvvmo1oM6xRFE1BifSWb2HjkdtajQe25kY6KZsa6nBYvNUA8gKFYr8Vgc9VJ2t5Fak",
  "key11": "XURkRcLxm91RVfvHJ3y6zFzEhzcbXgD3cFntj92UBzYUvu9KYHRwLg9EzUfP2W86qDA5CLgKUhqYfehPJZh5NCJ",
  "key12": "2hH4d675B3WmYn78gVpTwFaP8azigJZ3uU65RsZKWc9SbnRakaaj9KqfyYSqHmSZMVAYvBYtdvfESxi3WwGxR3Ju",
  "key13": "aT4rNke7ooyEVi9DkQL8bwypjUgwT5nxj88R74HY8DenSRv66ssRc8bSjkxWZfy71z57uyMhGS4rTBcZtngTX6w",
  "key14": "2DkMnHHzG2f2hNh4nV4xHwydBntsDkPLCAbdGVRZzzHZis7y7r1xU4BCh7tkNKuGNSAYqV91v3yzmgeegSkYbFmv",
  "key15": "2ZMxp4kpopW48bScjXEcACYXh85AXYDxgWcUtABz19oVZapz8MJHefH3jL47pWAr38DiRY8gkRtyV246VvQJMgxz",
  "key16": "31P22syyeQZ7PyM8U9GHyFXvCM1WktmCFjQ1tPGk8iAZDZygN2hX1ZdmZM5ueK6wHAmzdaymoRqGJ3jeZ6zQDYz3",
  "key17": "41ZdQZ6LumEdMwGJUJAjBzFgvNLuwoHyNcBErXB9TmQJjY7sdhnPjFEQa3R9kDWfXrRGyw75akZYvLbBhc5FcJng",
  "key18": "2smQVZahU1zXfsgaFJHarneDm3W5GFFRcXpicX6iuS9yp7DU9KqpActvcB8oDs5XM3nd3uXvLKFaDMGQni7vUa8N",
  "key19": "5DTnpvhHg2TYZ8rPxXwJSByxwFaSMUZcGzM1Y8K19do8fzitKNMvZcziLKmS33kyzAi7WgoHBLVMRYLnZJz422zf",
  "key20": "5utQjZiwnUTZ8ZFD9G7uYNY4SB5U2FZWfZXWRKcHAQYpwKRXb8aJSXQRjkjj9mb4yQW393mbDzwsfPxrty91jQf3",
  "key21": "4iok6EmSjk8kjzmtne2BsfdNFzzzCsi1NQ92hiFCWJ51TMDghdNBPbRAkxX8TqwWfdW8Sz8PnX3F4JKVVy1Bag56",
  "key22": "nPA4mChK7Kpxd8JqydN3W9x3gyXCvAAQi5ppmWUs1Q5Q55TjX1kPiFqRcyzZZX27eEC8Xj4o3zWSu6WFx3S7rE1",
  "key23": "2jLo6JXXRPXMXq1YE3DoetWtrkX4qq11CfkEYYr4y8ghFLRhrFZLpqfS3SQJoYsfjt5rKWohtbPTpMYnwpy23kBe",
  "key24": "2oeANtWF7VPdrqYeMyi1BXBHSx51ppEZ1GhQB7kzdVXmGRAhsFqnzk2RvsHRSF4gKYQvTNR743wYRNArWcDZVqgj",
  "key25": "3ujNRxfyjmCREoVgTDSH5BzNkzVRuVTKi2L4CiBh1ecXbKLxeouSrMX33ov7pfW4owXUvwMjUdaoJm1sEkWmqju2",
  "key26": "3wMEsyRQDULF8Z55SqrQz2AgsTBWVihuTh3Mcm8WbAz5HHpSMFTbwEJeSweBa3XMtgYeMzyrG22xxbh6nVMDrf61",
  "key27": "3RMBXdyW73qAw2dZZab1BcouCSjbb5yhECZfYxfp2tkskz35yT3Zteh2tcGUvByr2nyMjNmcP7rNriSo7giDbvc8",
  "key28": "3NaxzAvczP4R6nFAPPgLkooUJvbdCtCp9VjXHw9yCQ5BUiUPVhMKryhQV1tWemfKTPXJHDvcGYR4gRQJkKiGHqpf",
  "key29": "2iySLiHwwuYfJbPyWzAvqksh8zRPXRJSd4wU59axLNAKUWS1SJKozFK9RVkRLxCcevZmUvVviVHtBqvv7zazcm5A",
  "key30": "4tQyXiZbLKHoLySdPDYPvQGSwhHmnNhBmXjuowymn2d95Nuo9vsRb5dwfrpgTqe53A49SCw18aLCfQUgZGK6aMhX",
  "key31": "8PWvZzz9gCrWFa2z7M9zQpVj5s5Dd4sHSYUrR2mR5u5YfuNNYCtbp84R7zCEhVv2eWMm23JURi4UDBiXBqMSGtL",
  "key32": "3tTxsBZMp2NgdFYFMtcnAVyiF76PmaXobSR3YzUyUhosPQ7CFrcyWqWiiEEKjEbV437FDKTDpnJvUen3vVSgxW5Q",
  "key33": "66L2J9fLFTNR5o62c2MAYkWseWbc3MxtSASrhSqDeDJzxhVBZPZLHkqJ4xVjkg4ArAS971WCVXSSGsfzPXvDeiGS",
  "key34": "2hGWNiavDcEeUp2Gp5qeUP2wxpDEsHdVnACcctRL8XoCJv7neoVrK125ehHBchBhdKQFhyCBWu311kue7MvUwMMC",
  "key35": "2US2dXTNShPqsfL894DXqpJYW2M2EUdMoD7MpVnqTJxrani5xDY7h5n3wBVMNiTCiBsfPYMFoe2TgTkskEbJN46b",
  "key36": "2nahTyVxXMavgiqzF4fwTSY5QNFzTb3T9tjxX8TmzfM7bZzJAZsF2actaPA4V7nT2YdagrFyg2RHsLCZtRBStaKx",
  "key37": "4SPUhGNFThCkfVTpgwLY6BiShY5FsKEiWi1UhqAgagho463zJ632HE4YYNYNGoZsZBmmiiNxnY3Z1SAUh6gDzbW7",
  "key38": "4dxcAjNmnQ71dXVhiNxdsgwQUL93ZJqNUuyEMZukfy4cWBpauuh5aW5Hnm5fwQFU8YFaZ9gd47DJw3yvGU8fjQvY",
  "key39": "55grD3kApK6SHroANrHrzvSPXiZCvjNxKqDifiVzQTuobHD7RzwGJZNrnEeJPpuzxDetkP5LEEzFac6AvRhv67kU",
  "key40": "4mAmCed1gGkjBMhXC84AuL43JkFUg9dvc7dAV1qHNnUNQzptL1zMc2R4qK4e8HW71tqUepySwicmpSsKymL9uUqW",
  "key41": "4vErJyvwRLTasuvmzPZdMDdxFLikdvehcqHvfTciBd69ymErYg3sM1GWbjbfJZexdV9XFbsBMZ8Lc96Jp65CdY1B",
  "key42": "3tp6rPspYf4sKKkJZ9eSqeq9t3EMXbQiDYHJbrJSJPekqaJjw8yLEPJ633LMVRfbsHgzG5d89hxjWM7PkLA2TRq9"
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
