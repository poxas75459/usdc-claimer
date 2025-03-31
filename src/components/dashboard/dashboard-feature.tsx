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
    "47bh3uRBvC1ipEtgXUiajYm2zHKzNXXgtLfbbnNFgeLMwuvEv9EezPYFL81MQA4tnFXrnRTbsCxeDEUhQxnnxwv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SkoaXXFbybC3zDKA6DD2VGFfiyHM6WypFaSAroaUbjNidPeUDxWuRrPKMXo21Qgq1ZejipVpUgXvhpJbqBqXqRs",
  "key1": "5bRHVV4id4coFY2xBHzPJukXRBB9kwTrmrdxRn5hdsvSM4aooNGsmnU3zobsQXUQ7jwegcNWjpw2heNP9oi3GLnM",
  "key2": "4AbjVAS3f7SCrPEVY1tby5ao4nqK8HmaT3Pai68guGqSjFQK5FjqBSKMkqgVuvt5s1Vq5q6S82x9Z7cx5h6EciPE",
  "key3": "5iHCp2EGa5ZWwK5cxKVzRzdd6X1MuCUeWQabFgDJBfvfHnPBqaB1JukmX6fi9Af4nt9X9oSncPF6Kz4JiMWz1SfJ",
  "key4": "5JE3M2z5Ca2YPsRxLgWBppPQUVJvFiaj9W6qQEbusPxaqcSUYa8Ea1ppYSGCjeMQ7QVpWT4hBxuCJ9bjMynCNSgr",
  "key5": "2UjcSi1STAcanR3wMWEnWXEYRpcR8gRPoDfQfkYnJCZQHpR9E47HTgut72K4ABrpMoq4DnUEQdHjgSEW4sXkhQQW",
  "key6": "3BS59LcnEAcZWJrNWEgpn5MRcsAywsbKmUF7TZ9j5E9NsLngCVqxJ2eEfV7Zve3aCEfvze8jjAAmTYHfMdf3JRCL",
  "key7": "2WCmWXZeWmJHp3XabB17S5QWRJWvVvkShbELVRKUu6sH4oGUHsAL7vQecAdggMsi57XUdUFVxPR2sajkkqM49rAt",
  "key8": "5rGdK1gLJABqGob7Ceu7nsqMdX35GnQtZtpgsyLohnVtEL84DNWAFFUcdZcEUnGWC1GVGt6EJN5ksQAz7Edi2jgh",
  "key9": "4B7c57C65xGXiiLCZHqQgANFPrv3JJ7uq4CPwKBwnmBjLQbkdxrBYiHMVgefgKestQhRi976NYY2cgNoERw37Pgp",
  "key10": "2iLifRrKxG3QhHAjYjeoiZMVLeqSX3WZwFM5sj2aowZBFFjhdNNJEvL83K9cZFjWdmfkqwwpiagWVpPJYCq8T1jJ",
  "key11": "arsAEgTpfJ4zW1WTcXUGARZp7dVGecjwJ3LFwh47ssYQJ958kVECxKhdry5JgbMNV7TH6BPnKh7jV9HoeZ5K3sC",
  "key12": "5UPFoU5EG4BVudcNc2cpbNC1GJBcUUU969wG52fiN3VSkNAtNNSzRW36QFMA3dFVPXdqCRbdZVVkcL7cFAve6MXp",
  "key13": "4yTQEqA3H2Utw1C5zmssCGwdiMHzfqAgPXHWZmnMudT1c7dxsFpsaHD12CnDE1KHrQ3xEzeEnvmMqJ8EmQASsJst",
  "key14": "3KYGiCAPweJLS2Qo81fw8Fv9FXLZk1X1E4WJ3UESfeoFYBWGrtJH8WtocmYP4UCYJUSyBnx3cABcsSFcgBM9DAzC",
  "key15": "Y6xSvKtfpdFUeKurPmPNLGt3c8ikC8UFrLibcoKuCWvjmUPVfM5y7AjaAfsQ6DdrJd49bya4wMnjBU2gKeq9PJG",
  "key16": "3PLn2dXMcQFjRZcztyGAHvbVbAFaJv6NFAQ8KK7YVenTPp8Hek7G5882uB9XQzhNAna3RVk6yZnVNDcmuTZGwxV8",
  "key17": "4ZzUcNWXsapwgHavQdZ323r5GTEmZRQKBf8QXC2zbfjcwxi6m6gBewy5YMFCUH9qZ23wCPXvFJv991CxVLSii97D",
  "key18": "gRkbseHcpuHh6ZqyZ5GDFFwoSgApZeszCBaozPqDioUmo1CSQoCuk4Aeqrgc3b2mpsJNtq7eLDUsbP68fk89eFr",
  "key19": "X3vavoDzqxyAMCuLkAciRYyj2DiCi4bZbfL5YypEuMwLB4cyBBqUUceGrXzoHFcAS6VppQWRz135sQ2aa7MYyJj",
  "key20": "2webQ5pTRVkDqYiYjcJCxYkUT5CTUJLKdG4jJDGVkNdGPYNiQJ5i8pr6wgGWfU7eBD7mYexBqnMQGq6MbSqMp1E7",
  "key21": "24ctLtxrrsrFmkS9xuRuEFnvQk8fqdoE8ufCC9U8yrwAsE5sxTNZcPoepzpw4KJ2NvXwMMSXma8Gmdo41FhLnfdi",
  "key22": "2ieukj2AMtDpGtmAqx9f1pTxCS5AXLVnQL2Qf3vWcK9Asqe2vGYgMB3LTMabawYLt4vaMUz4rgapg7dsJM8N4rqj",
  "key23": "4gekiEzxidUkad1qwC6HhG75eKVYx6GTgCg7Jd8ZMWMrJ9NGpbnyX1ra83iY2gCPPEBUFA2n9GFieZrmEVyWhZyG",
  "key24": "5KebmwP24vjErQhPLK9ZYLSRznPo7d4GfcvLZeW9rthhF3WKoQN9DPdFkJDCMV7mZzVDXAD5mRErVjDKoep39EJd",
  "key25": "4xjGAaE3PNyc6VpGmCmt4EMQJhhZgtF77CaiigGsxjoQJ3f3VPmGJRkaC6Mv6pucRqnSJcvGUU83XZBdF1zBHeum",
  "key26": "32zKvaGwUgNzr2BaZkx2vzyYpbeujsYAHP6UMffn8XrFujKHBvFnNd9tWuXMhrusxCisbnpTYVtShbfeDj9vczAJ",
  "key27": "3BPEcshFUTJfFA7gdkZa3oQManbS7xAfvomN2dZ2LazLLyxKDGxBTeTHvm1Q9sGLkWffE98ey7U8aw3Mj2rPqJ59",
  "key28": "2dQRJnHZgZNbNbfxDSdhGKxummsaSnyVAtczEPBiJBAgE7KX2CHMz4N55Eu6dkT4CHxU9fdR9BB7rUCgQjwK2Ycn",
  "key29": "3cVYQnWZhZvacEgm8dEjnFdCiWjWwZrJSuh3TCKhUeZYxZ5PSB8hXQKEh2Q6QhgcZYMCNfdj6fYgqx6qaCNvGPVF",
  "key30": "5nBUBxFpMaUv3cHAPRgwucJt8QxWM2y2WWPuv58UxJ8GKYMWnAhkcV3GXJo2VDpvMdWEifoSpfvpG3Hz1DK7Uwn2",
  "key31": "3o9jpWZzz1MUbJP4wtcYDpPTuL1a54YEKXvxCgZGAFaJtxUoojTNpQyK18H85xnrkc8a7KeYQhr4ndTiZLAQ2kK9",
  "key32": "3HtebMB5xkgnCeDfKauLVXuUDeXEfmvozUrsdqVkKpHS4jaEyDceg98qxEXZhUdwdjaZ8FhTpXupvMm6JRLgov7s",
  "key33": "22npp1LSssev2pdvym8gCgcdHd4ARoKRMijQko9FeEoCFku2j4uL3m3DYCS9eaXC4DM7qdJGVmErWh7vAeqUfX4S",
  "key34": "51cptiZmTR1W3DEQHMndksb3ZPMURUngsVRTQ18gxtLXFpGnygc1wuzMSFkzGcsoJkAzUP4tUAtpKUxkJ5phPxW8",
  "key35": "3LqAVw22weC5SjnWbhBWE64TxpzjDibdQQe3GNLbj3Z1Qua8WvZq5cTaFSyimGRQeD9EBGrYtnYXKK52ubhF2hjH",
  "key36": "2mWyvP6mgcJWJvMJjwNsMHnKWVMemVbfqrBBsBWfQhcf6BpxXMNbTKgySDCK4iJFYSLu6vdngqtwLfMfe8QLv9tG",
  "key37": "3EKsAVyA7gNpMPtE2Hc32SDLBNWirabHzfT1ebCuByQyJyDuadqkFeq2MMpPr2Wps3fP5KogAfZupdv8v8SFGGMM",
  "key38": "57EQgtaBvomhzjesjGUds2bRpiNXkbNmEwNiACD3E522HY5hbGF58n6j8wnsGNTi1vkTUxQ66Qk8N1yTKMXcgUFo",
  "key39": "3RsyvTDaYn7PiMDtPgwpts7F2LETTqwMJNcMim8WxW9WF495cGUhhwEheWz2PSfxgxAgYZSyr859A4HjkpkBxZR9",
  "key40": "48egyUsLqBgCoRceeCH2stmKf5BiC6LhE9vRcw5c6ivFHNbYESUo6c44XyT4TERisEV7fjHcjW5zG1NPwSXmFnCA",
  "key41": "xXKf5XqPmhTj4hkT223Yctkg96xVHE1ooEPKjps9nmmwxG9qVZAHFEpZBXRTzUqK5HekxSM3cBVLx774i6t2CDu",
  "key42": "2pBAzY9a9jPeEJzYBb52VJPfcxLPnj9jsQKHRoRxKS4e5phbMFpfKRZqr7rHiDHWdD7kXSLnjJfteb4WiYntQoZP",
  "key43": "3vfJ8W7PgrVjtdeNEkg1BgAax2EevZSgYFaPM5cJVXjstVEeYMvFDrYBHARy1vQsPwZAQv5XhhXgHdqqhnLTzsfk",
  "key44": "CUZmhwdwjC3ivXD2audzs3nfrZvNfq9UrLo8ofDrjHFd2E27kii2961Gf3QaFhrXyy7kpVv4gvBpFxYEqFwsL8Z",
  "key45": "2CFcZGHkkbnPe4oawiQ5H8K83yK2VdS8nxZupAB1QocCv3CyGZU6X6QwDQ5Wa3SPeHzx3gLHq8W8qCCfjL115pNt",
  "key46": "1Bd913senai1hPdJ2dR9xvi89PGFxM5yQgzjqv7WwMxBVusrF5g3PzwpqKwEuAKndzUi4QfUzHUAgmnzxCAc8Xh"
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
