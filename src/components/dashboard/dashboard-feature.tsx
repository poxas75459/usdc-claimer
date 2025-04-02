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
    "3BbefN4V1TBmFQrfgRGnqBToKh35jCWnJoVWZugM3vJPrMRecdWJjWk4XbxzZsVebnre35UgyZaVYXQa5mEHmS4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34C5uN6mC8UXugFZWnukVCTG8zPSRvCF9UYQfczerkwCaVTHfHvtAMuRKs2HqhhxpC698gnW7cHo9EakqGr2ouqM",
  "key1": "3f6pLukSwJD9EgD4sjGeN8NEwL4JXguzeKQgRscoNqJgBp4nyS2ALafoGxCuUh2b19V4DwJX2iqUa1u1VG6avhME",
  "key2": "5RXVxGyUUnNTfmsvwBVbQgqfXhGdsoftMXRjU9qeo3rN2npZjv6JWsdbJtUW2E5SJvFP6BGPi5jsgWemVLSPcjsB",
  "key3": "3WPVYc68gwbEn9qSqHeDpEzPXTkL7DQeDDFbspcPdtz16BGz6724qbQcpic1cfvG4BtpuYDuuNnhHN8uXYpBGD5z",
  "key4": "521cuBU7RJiGwvmUXQnYJ4vy79wua8QAck9XxaADeQ1tskrBoegLGvK8Nk3a34P31pUb51BvRxvcw6t5px9ToWD4",
  "key5": "4Q2fBYWRp2zheMUdGN1mumqFR5Umsj4726nUNFcsfiZexj1eG3xYLkGFTt3Dy11CKnDcR1Wkdd4VY6yjymCbkqXj",
  "key6": "3vQ4P27NgLdcahLdeCp7MBv5Q8Li15QCVydAu4Ts4btobxYJSk8nczZSyCbhTZNtZxS6an81rZ9aBfexoAd7AfYc",
  "key7": "4U25quEtMVtvNu6DVSezY33hWswwHyqs5STf3fFCYjcdXR3X9kHSNAmHHMxBzo9kwnFS6ELSFpDXLeGqXpnLPjYi",
  "key8": "aQKPCmh4jZ4NZAYHZWwryYAh3wqDVFffV3godZpAg8bmqDs45ifN2Qf8ZfKRpgcVRs7P72PCoGojYaeyRa1NrjA",
  "key9": "3pSAQgYYjue8h1fzPqcdTsMg22n7725HCwQj4khnPz5qE6Q1mXuiHmR9yGkiCYJ4GAfcTjpP7oC3Vw97jpu6SioA",
  "key10": "V9S7zKZG6No6VPiS9AmM7gQq3fnLxPAkrJQfdtuv48wbFoLamCcBbhHytMAqf5EqpmF8GFE8uq74Tb7RWZG8jQv",
  "key11": "4VFJqahC446t2KE2rT5ua85eLKHLJ8e43v3353w2SEv7J4xrHLtoFMbRtwpujNTxQFHBevaCwyNcGTzwPsKJumWv",
  "key12": "hhKYKWroEv3DHih5nFVA3JtgSgyCJyESQhy3gCKwWKvk6QHJsdeWpyt89dwsey9moVGZmAFbQmrmV7hYHeSYmkr",
  "key13": "mwfaz8rPR8yTLro921kBhkbvELCHbz9yHvAkbBBN6csuiuHACbcXw7BE1M5JNJXLcucH1jvxwR3FkiamX8bAYtc",
  "key14": "3DLaf3ydhcJiQe2gR5b57fBmDKwpaatoJcM5Ei2xaf8hJS4xfTaNoYCkmt3anfBbMLV8mQZb9byopgJrcB2kHkXo",
  "key15": "4qPfrMhFuYr2E5LXgeLhHAvuMLbWM2aLip1wpC4sENiFSfhLy9AWdusFwf8xtzQGDETDfxUWfN1J9xTQj7Viuhuf",
  "key16": "4gmdT3fVDujR6xpkv1XL9WP4T7dA8p2PKtqYCyR5BzTXbxD8uHyvzkPg8R5upzqbAiEdqVA17ZU8AVS9Wb4B5Loe",
  "key17": "4KLg7JSUsC4ELhX2o6k8ASfEkuA1FP5fsbzwvcToxCdCEwCiZMTMZHdPZwQZrxbUiLpmAZiGfMU1iv42YzeYyJeg",
  "key18": "UfiS3w3wdSFrPo3m2QnijucXFGzVpFrGsSGeK7zrqAg5LsK8wPd4peQMxmcWpHs5jFCS1qU294DuEiNgqZYVrvT",
  "key19": "5gESGj4bFhjG3MHYD13NiPzSE4LJXTzLiZmskXzPZ2zLDee2XHrVUfK7RXjoN6fu2EAWdTa92dMwEdzd2kwFq4Ke",
  "key20": "2q5oYQ6XfsvQWaZHtkJ5mWVSahR6pboNY3KzAxbn9DoYbEEERozTt9GWfCidFLs5ZdS6ZQiGB1ZWfKzwmdpT33Ek",
  "key21": "65Xk61WFEFNEXLHUxfN69frmB5ofUd5jsh1JnyEuZy5z6c1Hv2LoTuyuVFcNE9vkq1d22B5RH8DGqzT6EQHzPyve",
  "key22": "3fViopighHcZBdgAkMarVAjmP3vf5pDCdM62HhNodXntMhzzaQrY3Q4HjmLew6B5wR2p8B6245xvaGjzTVoropc3",
  "key23": "4ZM5s7kdpzKMyywhRcB4bCyut8e8A6SJpoTcbPCGTL6KtPgWqv94mobNCJAorqFfhvrS6EMdAHAWFiGNFBH5kVTa",
  "key24": "46An4yvkLgQgpRmDJyvtFKUhnrFEBCwcL3ccbUWjb9urrhiZhGZxYCSwdgz5GEPV9A7NUv5KPq1dHs2dydDkUqs4",
  "key25": "3zjUtwGT1ZuAVEw2uMfST3LKrzL3EpC4zABKQ6nqU8WAqqzEaJhWjm7LwiE9EWz7oAko3KBNqKBchsL7N9WQkhDB",
  "key26": "5yRTSHfT2KSqjoKzrpwdeFHxnh1QsjqJAe7kPUhV2s9HeNjGpZMxVKtNEMs2qUzKL9VAzJUuDBCaJEqzUZVmthhw",
  "key27": "4Sa7naUVeATBa8C3NcgYi1yPmoCJS2ssjHk3i8x9YGjEuLgwNgHVBbXsYm2a5o2JTe35XfGfwyKjNB2zAqHzvuq1",
  "key28": "4ZYoSqnZTK14X3XkBKi3LApHuf5fmrFfRccKEGZzhkAL19znDBRc5xpxpwytAMVq24LhDg3xF5oN6CPppFMKVPUx",
  "key29": "3Y8XsSJSdkkngSFc1p2ruZzzarmJhPFJwKTZLU9UpeY1XF4RC6yULnv6Yg1qLiFsSSPFTPDXXsStSw1VosUnxwcd",
  "key30": "4fPzncNjND8auS8dkcWuTGT3NB9Wdwyp23g5Kvmh5SSEDSMrcE3Rn52284GvaZGUjGXQnt4V96E7sQW82QNK6Upu",
  "key31": "4kY3SPrU51iDiHQ9uDswxLn8gV3ZwGqQftD1vodKSResb5mnMJtxm3q5Gwxnp8Sm7WtfaioRpgPVm5qmk9ak93KR",
  "key32": "3gXYsaptt1HNpPLJyvMAQGjAYmfh3JEDDB1ANfiEh75LmywCNwzsvGpMefH7w3G5bYRxQ7iUak1rbZTagj5PZzSu",
  "key33": "26xPDY3RKTjBRk3yv8W2iShXcfEWbVFKyQUttisRY3dPhUfGo5xEaNNvjUtiuPnxfBbAom6fgYdgnj9yuchvq8ux",
  "key34": "4B1P5Jj2c8v9vrCiRrSUBsfFW8ATHciP89aDH5rJKC29gSzrWntmyDvUg3XreyEx3A1o5eEakwYzVYJRie4Fk2NU",
  "key35": "4fymTM4Ws3zzpXBtapwEwhSyNLcgDSeKRRqaBApApsB9JcX9rwyXZTZVM2GiWnhavJmz8t7kk5ZW92zGNErQSTRK",
  "key36": "Vpxduyq5x7M1ciPE8dQnoykvc7QcwpbuWzUxBxXXQyUjS1rBQQwfg9sWQNEm8zQAQUM7s9SVFK6KMhANeKAiCHQ",
  "key37": "5tfsu8AHcb4fRQcCnPuDicF3grJNyhAMS2rjGYRo7wVXUzVtfUNsT1xoMjrt3CXeUyz9YoaftRhweZuQqebFB4sV",
  "key38": "5N3UH514o1rc8SNVhmWcmbhG9c9dKiWYeGgFH2yzaUSSSyeHG2NGHZFynWX1kjmH8Pskxrb2Vh1CDXDjG275TemE",
  "key39": "5jieotw16sKSG81yot7Fw6U1ZeoYm4AWVjr6M44gDQjzpBzmZd1QigvN39NYGHFN16mzvHYSEiKt7Vv78xefLzjs",
  "key40": "4F3ZH7x8MmKmkXa6QNYVQs1d8DLxcFQAbctNKb1gpcvstdEvFZKaq7BqzTP4MjsEpxFvK4JnuWPccaLsne1fPjiz",
  "key41": "49gbaw9479dVX8gLdxjuw4bd7CZLXvGWVTpLW9kf7YdFuoj9yWMkrYGoEDxU3X1WyFYVPrEzu3CCwK5KBe7KTspG",
  "key42": "ydD9SZZjJJWcepwz1B5wmTq5m5aHkLUYe8XSiQ1Kq8vxNoXavnFKkBm5UEQZaBfahHy6SG6tsirwUZ6GGb6s9VP",
  "key43": "54w7xhb4FuyZxB4jGAGjJuG1hej2h1EaVBgZNXEr9ce3zGC57DXMpjfLp5DQ4aqnKqx6eLPybj2taqW6G9ZxaZ8E"
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
