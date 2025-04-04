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
    "3piQSq12K8dnw6HF6uEKgVmvmAuR9aqmnsjpr7nY4Ja6QteCusrssfzD4ZX1FuCPaTX4AGVHGExxsNQV7LhkW2d8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VpXb561CBT4kB4niD5zJ3kxGfs22zhaCHBc5rtZNaHWNT6P9fvkTWbsdxvAFqbTXfxFQZjdqgo4ioXrCQ1RM4e2",
  "key1": "5MPhFuqXEF4cFATG2DkGB6DCUJW4gFSLMsiaK6Qk8cSwuhPxYn9ZCe3zcRF4d3zjLS6MxB4KDCPuENAubFoTABXK",
  "key2": "44RhAH6LTt1WkdVT8roZWM63VUpapujTGEXrQD456tByVw645muBpFTqMAqGuMQByFwjPPMuSVZY9hRaW7eSJ6Up",
  "key3": "4Ts9GpDTEsKYooQZMRdqc4BP7vG56QoyRcz5PJWpgdMV3gsrK7QdrZZBmRWFLpHS4UmARAi5v5gh151E6VjEyUcu",
  "key4": "5vVUC1y4LhYDfWPjgU48AXeDjusA2zaWtqUDckP5o3d4QMjxDn38XaowqrqmFJT8xyU8wQmvKNFdyF6vktuZFSjn",
  "key5": "31EvGmPe9MMerhyjcWdWE5BCvEy8MZnTmpwtNN3WEMqtjieEHGuD3fwshBEfpUui5KsBU6HK9vwvahCURCBB92bc",
  "key6": "xSy9eMLMHPZE9Vzk5Uow4xAS2PXvpNxveuoGSXYXvYwMxHVNen942cSWnoJPkWDNtRHACchJNkAH4iVCwkZ6QF3",
  "key7": "KiV4JiS6pWtrTFmWKsoMnXXe6xFSWXMEdoPeZS6QQjqDxUwViJ9mWv6qAK4UXXXNQx16WwsdMD6hDP7kia8jgr8",
  "key8": "5r7FGyDAdeyZuy16SZS9668SdWwpUXqj22zfdM3vVHnuL1Ud8ibqxoSuYdXMmUKF37DGzd9PsEd2p5W9qBfW38qb",
  "key9": "4FMCa6QceNPmvDVkfagu32eE1RFpCaJXUu7emCQ7zgPaKaz19iL7bBimcvVxDewgYT4dFkmfXD5RaZeHHaT6BYgR",
  "key10": "5CATnLrKGCkvjhTEmSsodmCutpjA68AN2eBHEqrceNBi5sWFUh5xhYcymw6vq9zqMUErMAyHkg8y7E71sb1sNATa",
  "key11": "F3gAfXd7pSij7gKZ2tgcgrsJPb6Wr4X4zMPzdZrkHk6p73Waggr9N8RpB5tYoWivicorz7LKwGwN3sRqiKQYcMD",
  "key12": "36F7XPCSDzN1SVspdrLCWXgmwBRuhqyUY1o8vYxcmNAAMCAKViSAfyxfaGXkLvjtoZv57hGErhLvevPrsov9V8kf",
  "key13": "3m9GeFKUrPx4fFixBMX6hZXD6hXMtAm1U2utSBU9TY2cBDZyh47PzqTUCWndLzKrh1wWXGqCN3mKSoNmLK3PnDeo",
  "key14": "5XMKpxj9XJNYVkZFiADmU29S9UzeyHKconV2U4t9E5mAc43cCLWB5cXLiBiKU85cYBweyThdb2hPAAeqAWoZoe23",
  "key15": "2fLFNv8CGrDHqXwUqBMWiwt62YFN91rWUdmo4FV2QzTF3udfDCS29gK4ar62jyQJGAuLp2U2X8eZi311PuU3fGL5",
  "key16": "3jWUKbNyzJeYY8uEjCWJZzKrodSM6yopnep8TWZ7nxWcBDRz13TsU6Yzkte74hmQd2iwmT6HUq79x5h1c7hMoK39",
  "key17": "5GX5ZrGzCvfLKMmBUtqdBu7U5HHyWVGFLYyMFFxHvyaA2TyUv5etFVQtsBHuLfo7FxiH359cLByoYKsqZiZJcp9Q",
  "key18": "2zFPc8FHFhMX6rRjHVGtPZn73JaeT3oWL1hHz7UrwsL6n2wnfUbXGyyLuCoMxpgZLG4ddZ51z52daXMdXCQnbiv7",
  "key19": "2q5qJceqU4ERdYDJNDPh1jxDAmUBt6TuJ8Z6g9pQzY6DTwrcSucKZyN1xRTySA2hbYufDQEWy2H1wp3BQR9Wd5WM",
  "key20": "2hNAcXYNDKheCoZ3JzTSMi3QRZmt6qteEKJQxq9iS8M8hWgadgc9UQt1RdLtaTWszGMBX5oy1tNnKQauvTw339xY",
  "key21": "2rhWo1MztGWj56bgR2TNUmydvHYVFy8Wp7MRuPKZKxFvetcviFKzv9bEgtugNMocVBuaxTeKAGMWQLVAWk33L1o7",
  "key22": "4gfqTxaSqL3zoYvpyLtavhJYkbypkiP3sqKjWv8UvL3ErR3kaYds7WFFNyKT9vkQdtUcRTWGJv1dydjC1Ncqtnbf",
  "key23": "Fo5StEufceVjiwjTj6uvTaCfP61aE2mSzPGi9BXcsQJ5yiz3S2EHBjcrfahhnYK9oxjehEtm1Sv727pbWZXpYbd",
  "key24": "4yMsDtGDbteedPmPomRp6X27rUVQ7LywQGF7dwU4TSdTfvpvv2BfdquW1JwnhBdfnyJpFWebxjQDf8mHKeQyLYfE",
  "key25": "3BYTdPtkxGfrwJaTGrfX4dfGK4esptVXU6ykVAdqRSPsZbVY6TrMGY1NQPCH6gzcSQBu3GFZ2UN1Fj6x7QPRJJEv",
  "key26": "46WiVqqM5t7vKRDkqLq2kppjGQZhVKFAPynhkoWN4ptPLRZG63jDoNoNaAEQhKM45zL2D1Qcg8Dv9Lwp4DJN7wXt",
  "key27": "5XApXzVwpzKmzGixNvbvFJRASiL1TwufRpGdb6Rs2hFxNmiznCs2d6oGZjFUSy4HZoLJGmrYJ2NoHxnbdwvSDhYL",
  "key28": "2oKQuHLsjur4fsiwA3KVR9pxpYj6PQXPdcx2osS4L3Z1uKLMFe6ucuF79yS6p5xVc273wPXRvV8DVHXxoXWQiey7",
  "key29": "5AFyPfQKYpy9LWQiJpz5mXQbySgFbzdnDXyFv6jYCECmDFxZB1yYSCKrzCU13DyPi6W29Tn7hYbupxdwKrY5ubc2",
  "key30": "3SD2kQMaiQcLWagXAQYEGEE7qNq5vPwwGRMs79v3f8Xjb8hXbtLgViiPHUp4vNieuytkVos1wFpbRCzN9QVNfZNe",
  "key31": "2cx5rkEYtz4utJpnxV5rHrz45SKJPbirSBMemAmXmULRj9MU2aDKjzehxiWAYJeLHUrgWLmab9HRYe2s7zQVLcDY",
  "key32": "2oy85dvp2YBGUTHZnikw2Sea2kuGnWhqVWkqMCSRSu7uFDkKAo4sLxiFLhjaKvay8eVqW8DSg4JThs3DemCLVfx9",
  "key33": "rb7iYZKZ3X5Jk1zcFZi8s4AVtvsWHmjvrEZJNGCtbeN4zTxQTtobjYQSEjKpLFe9FiK8BpYBAvtbHjzpMhCXXXB",
  "key34": "3sK5NCjYUzJd8PmsCM8P2RaepgryisBRhceFiAzwPjVfCfiU5hAqmHxXm7zN4JXkddbD8aHECMzoHdr8EojGrKPq",
  "key35": "2M8fErttmqL5kcgKK3KVsCoiQEZrWGPYW4gMLYFR2rjx6rSaNNLFd5JpJYjWYA4KAXqQcy4AqirxzVDXyiDbnVeY",
  "key36": "4rCBs31SfQfe4tYsk7pFY1un4QLS1c5izNcQcGakigm8zjZKoYnNbitwpdKnKfZPKvr2iqFPoyPQ7v4wNtSRjStB",
  "key37": "2XR8SEtcguzJAbmUwXmYJiDHCo8veHTwk2aWj1GWHSFtzfxXA8qWWA9omszPYrviMnF9dqNueFwhMPquZ2xYfcLK",
  "key38": "4bGJVK1ABfsyUnhNEmUK9SspYpuNv1dXbb7gBJq1e72shGce1JTEj4NT5a7RW4dkkJzh6FybFzQ25G4od7XVZqW2",
  "key39": "41rMLTKtntERGneGVBqCY6Upzn4zk1hBP2EK5WLsn9Ap4Ht3oLd1PG1sW3zbxZey24RqatWArapgV7ZRkC4xVGXo",
  "key40": "FcjdSk4yh2ASP5dPXrxBhqv3Q6z2qfv1Tud8ZzgvRjHkFmSq1siTwjd3RNpLqQRwtXdSZXVtcLG9F2dxxzPnj8z",
  "key41": "DwRDYq4FBttAWtoRZ1QpjGFbyHsceRXad8EZd71W7e8yRYX1FSRhrj8YzSXJg5LcG8c53cSYv865Chv3j92Pd8x",
  "key42": "5vCFrQ4FLdTD2EUooHgUtGvzPRroH78p9gPAkGt8KaB8Mgu9bpYurFtzSfiiMVb3qwHLLEy5WPw5xEi3uPDc6wSF",
  "key43": "4xKjzcDSkLByhhxZD9MT7eWbk8V2YuNKnKfRetSeLBnfC4EaCut3c4VDXeHioiRMbncVHsSxVezDJBXJQq1JTnDj",
  "key44": "5TJLrxKPmfhw5oRa1zafM3yq2oRwogT6KGD2mkbYsmPiMEiCPx6gqTq5FjY9k17BdMid19ckX38t6CRPpiSAfBhU",
  "key45": "gHNswZA22w9UG4zuvb6ZRZapRaNYSw3bz98tqBd4oZn4vNNiCCbpNSuP56i4iFN7VnsmRMearKfC6GM59AzCbxX",
  "key46": "3Xo7RKb1n3DU7KBhnE3thxZ2KbZtCDt4M1MQBRnz7wotx169MGJun3JheTn2rsH1aFDfXXcfy4AutNykLiTaYRDP",
  "key47": "4KMBA2YUckZFWMGVMMZSoWLCNkpAuLirvrhFqUcnxPYykAQ9veWeCXrq555v7R2cwEqSxQEaZRGR6vicsXThMcZ3"
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
