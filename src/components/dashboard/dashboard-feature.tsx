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
    "5xUz2EAzDy3fsTFG1RgLaJsJSyEGPuBFay2kqCEZdKnEKg4eWjX6SxVar22K7iyCTjCGN5tE1hZJqa7k4wrXQxBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CE7mZr235nNiwNu2yNb4wxmte4adqLE83FBLXTaeUrc1wDaSc4CMame36B944FA6jC7HP17iGa28JSmTpMqdNRE",
  "key1": "ZPHiyN8esbF3UUjkLVxdKkN5KHKY8kBMbGdYeZmot446utLG55Z7Zhbe8Njf6wg6LEo4u8oq9SGR5JRB2ayvtuj",
  "key2": "3XXiAe93pykomc1AwMrj35FqLLM4ih2jMmSUU53vj9DAENf97AKtGwACTVggnakMhEntzeKYiveMbXJKfwk6bQm5",
  "key3": "KfH2ce1RUbBN5YGG7zBA5PxcRHE8WMLSCzeM5NG7nFCqdK1cvEaQ9tNzeyTrMCg4Vg7vhDLH7hMayJ7cbgjMJum",
  "key4": "2VsqN3aUMLacXQurijXvbRcK1YVMd4Kxo2xQPPkTDfSeqMFPqbYNnRdYvBGdyK6mDxKuab66kE4Da1NHjKeemVGW",
  "key5": "4LZb5EALqtVuqemEN9ieke9UeFt1ffSjdNpckNaPtZeokWXDfBDUUnQ2Mqou1CZBEFdWdz7NxYu6iUdx3kuhgruj",
  "key6": "49HUjtmzaoY8AawgUz8rz14R7QY57tknTyTEQQio9zuu6tq55Y3cSjNfufQqAPsM22oURjAJJkzX34isWPaLo5Mq",
  "key7": "3ZPJK1Y6ndJJSbCN8HMzhHUKE4E6pLqLNtiLT9v2NvdW5fq6ZSKeSue7EKXvMMT6c1MA1CyH3KT7Kvbv3AjaKuSi",
  "key8": "5uSEBe8swAizTM9xdMo97AgCtDWVicWvQr4R7krhZhzkH67M6ogGxeWUkHQSPT8uWMn4fpyWNrLhNxh5K9bxbjZ1",
  "key9": "4dcdHoJpXXsZVYeQjpjSEzJhEL8tsYsZ12HVfQsWURyqTedmARc7JQCzDpw8mo7xZKsXcXrqhSnCXT5djRKHZc7C",
  "key10": "4jFTuDbMGBXSQ5nzbTbC6nqYKafMmW6PDM6CKHWCybtapKwMJpem74HwLxJdHv9j7BUvdMoZ3iFyzMWRMmSDVQwf",
  "key11": "5RysqChBfRgvRM2sxnAN7YFghD5yXfpVWytCaUZMT1E6kjWbh5QzfPZtRHaQHDcdx82jXLoTmoej7EFobMWSeqSo",
  "key12": "4dfKzTo5C7Kk4tLbXZPFBy4bigAjJaPhdc8r1NCkfi9D8meSv3ESXE7Br2u6KZufYZC3oXPvB3DSJxBdGRUzDUod",
  "key13": "YB9PgX8Y1XswWVUck1FdDzFoQ3WAhgQcQESvxN62eP5d5T3YNgXgL5kKBdKd5PjZDQdcjNJCcgFfDJdECc7zTyG",
  "key14": "5MayaGN55NXSznV2WebAyC13AwsC31wq31sfmr4GsGJQVd6BRam7j5k7G6bSGMCpxuGDBu57C1Bh7xjJLbXeM333",
  "key15": "jvJ5ynih78Wm87SE2Mz5s7VdfcCmkgbLvN5EZMgEnK3gkDLyap14WBDPxYhRjp6529uapRPdntnJvnBJs3DbwYY",
  "key16": "3k971ZMpBmEuRrAATgsgCJdaKFzncvQeuNNkcFQxR9pogYw34vodu3YbZ29WddNFJMELYnUnQkpewX1NHW9bngBQ",
  "key17": "JKF4ENbQiHm745zBtYYkUpnkhuHtyQoSDwk1TTuaQjDdYWqNDD8f3QgEHvYrvsJDuthqw4y4SCadS3DfKBQLQvx",
  "key18": "5D3k7D6Me7XWAXxLGYiCKXwMsPGjaVWShopFPWjekj2NN5AMnGbXXYPsaWKYwmXpUQNNSN2zqhmzQ9KGm7iGzYEj",
  "key19": "5g2djNzjxax2MKwUSDo7tkX3y4TwGBjBMTdRWPjEVXKxsYM7NrcBJ3KLLxB46TXf2zN43MHS4eEP3ccVoRnT7Naz",
  "key20": "4xqRqaTPDQo4rN3YhtHx3GmbTi3GJbZELuyKFhaNpLai5z8mMsBai5GoVhp6N7tPija2nA4Ae2gAPWbNjNCPuLsR",
  "key21": "61cJmpXB4YugEqfp479KmV8v2nyC6KLvqV4HaxTCKris29YrMHBouF8URNhjiv1yZniLHizrAEyjphmtkpjuASmh",
  "key22": "2bdSpGEwaszzHjT7pw1AGE35h2Kbt97T4HJjE91NXY7Xh9btbsVyGBpzD4wrjrTUBWdvSxNmBAoiy8KPbSkYLqt7",
  "key23": "W3ZR254Xv2AxrZRknkRrfHrwCJsG9sxX2Cd711uwe4NNmqwQdt6A5YybwKLoHfzkrEWgxfxmc3d3M6nL13yRZDK",
  "key24": "127U1NiHfrJp9Ze2KUUz2V9QrFzGNQELbCL3mVrWTTACNEnKKiFAWv2pbnt5ZqnbY62YSiUfoBBtWaVh5SUCLvAs",
  "key25": "GAuwU1RezGh3t7QWEN1euP7Mnmrj1FFpWPgUZrc593bbKZxvebHyH4wUSzk52cyBdKN832XDwJn434aryuoJ6hf",
  "key26": "4Xmx9TKAqG9ywwf3Vf3NkbBbi3pNCc79A2hzMsQf2osKSMjTNw7GApYEHzQ4cBS9vdXkjXFcM3433ZAXD8GyZ12e",
  "key27": "2too3dnGtkHZhvePd6XJMjCoxUsb9ckVwTuJ9oyRPt63tRrdr1VoiB9aFaJDvAp6ZnvhBMHLWzsmfXD63oNSmqUV",
  "key28": "4rs9e4p21rt8j9nB4pXUmUMf17KiDoL7jPsxwNuBDENHHKTGVMS6r26KMKTrexaui2dZqoWT3SNn8nWXNZnB7g8d",
  "key29": "4xxTnzVsFgQwiEe2dtgdinvsDcBLNDp3RdbWmywiwoDC4b3jk3pAYq9JJdGmVH6eZYjCNZJm5E9Zd19ruzisY27m",
  "key30": "596AcCR53cUAZnL6HcAVidX5uE16p6xAg3uQoKJbkFffproUFmk2ZMvRdEyEWSPzTd8JUeJvMJ4oCFRSBZJsf7R2",
  "key31": "3AkKndv6UozgaV9hFXGRZ5SUy1gveL4AWfV6gqG9EgrXSUCgM9D6Dg4tSGp5BaH7MR27ELRhhkP5Vafpztw68oMF",
  "key32": "2pzXyRmUfKm1FeBcHSgZfViuiuxqJa9iVcn6tPnCZcV5atEBJCugejVLu3ZXdGsHgycUtNwMqfCtTCcoM42qLz3V",
  "key33": "5hGDavnV3fh7m5E23o9LLJ9S8AKLeHWTTvP7hzoRPTzkGNQMa5dEaT94zvr3PABRoaHCHKQFWBizUVHc47sw7xyr",
  "key34": "2Nc9uuCzDM6DDQPgAyDZgGPv2ifbvsHe3yzWTbNciZxR63EyeiQ633DG4ddKV72Fvs1KP9dt16ED8RXkCZSZmB66",
  "key35": "5VHB3P8q999UAfN6YvGqY6XQy1rFXGMJR2koHeHMwuDHtTfuzzSunj8NxMTQCW1WvfYSJK4VvtDD5vNV2AcxYo7M",
  "key36": "i5A6yyoJ1atc3EAJ8D8QYqubiduUeLkxwW4Mw5bYiFumtSBMzJdd7wwiu6j43hUKK4YHCftmq12gDZ32KD9Jq4T",
  "key37": "GiPAfiAimfTd2qmxbTUy61pzhZzXYaLN3tqeJg2Qc8WuHgSZmnS9MGx8vfAQsV62RGa5MfAGGvZpcGfn5YnZwFu",
  "key38": "bzWhj4WdbAqagyaAtDTrD9eMSNtF7BYXRT9dfmdrqpbFD7tRtXTRGWJxMEWWCksT1BqZazinWdhYupUGtqpgS2u",
  "key39": "49wNmJfP282k8vZfiAbwZWqWHv8j7Hboc78jAhwdGixDyv7uBmzRuhc313myWZ1jYUox3KwNt4yPU9PVfZpeUMux",
  "key40": "31q91vybBgMCmGHZaYeJnaiW9Gy2XCEDpf4CF1i7mUskr2mKFVB1wkSoaV98aRN1ZaDiP8YCdmk5sHev4u899vRP",
  "key41": "2hig9EfLZ69xtpohcdoXd3peA2HhyPVVLGpUvMet9e111DMK74cGNy8BB7nSJWcJAVoFLPaXhTj6hSVSZqUz8ZNC",
  "key42": "2fUD1Zg1CYyU2XcXLaQf4nSR6RYWnPcdJijPpBxtfSiaQxqLNWorcvxcLGxXwK2t7skFtjfUHbLqcAnwuvghLQyT",
  "key43": "5wRJSySNumyqfYMu9DXJCPC1sZmoYtVnKh6o1y4q14n2bGFsVrqmnigJU84DWMcbwMD6rMY7H16wsw92dZiqCpLN",
  "key44": "4nvzWittZcKNyBVKcHf1DKvStHzUceabwUomyKLQYjiCCvYgCcBKLY8wE4CRStDd4uUs4vvoiyqFLmPnajwWKPJQ",
  "key45": "2yWCsTTMgS83ZdEdRMc7bKjbDAvsHUHxpiKnGZmf1gAaXEHxTX2KtRmYtMEfRnML1fmMtHP7vhYtumMr5yDuHPXj",
  "key46": "h7iEF26cSKZCx5bpW3FdUiQT2MygF11Fbng6m6wyT3h2KLFrMbDjkkq1qMX1sYWm14z3k8nv9wLYjbfL4AMFmQ7"
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
