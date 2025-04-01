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
    "5LkeCDQYgPa2BUhpvni4gH5sWwgqXtxVEBwGjAbvKs7djqNNzaQ3m4nkacckTQLcwMz5Dd3dJAyGWBvy6apuRDFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56wftGrD2JSkUyxDbKaVqbuebcXhY6yvSzz6uY9Ft3hERDGfbsVJarZoFjcgbhFnBY7KucFpxQG6WMJLovTjAEj3",
  "key1": "5wtNPBRGgoW3Rkyr61N7XBjwTkTwRSs5DpLZRd8UrVq9674qvUrUKwUAk9qF8xmsb9T3tNNpBK7uhSccBHKvZusE",
  "key2": "2TMQ3AgGbVnkSoqcW47yKocFWRK68n5UshrCMuADbBQhMgeyyJmChMgEKokC1snVgu179SXN9UNutn955GoZRV7q",
  "key3": "2Nvph757YJZjiZKJxzmnmyXk9q1fEaPB5NnYHh41iSHCsmL5fkN1kkVATUhkJBfyyMUDix3LEcuACpHVUn7j9dWB",
  "key4": "4B4e2hhGtw6uJpw5emHcgtpVhcyREcPk7hhbNYnjNfWj42oGYhiUbLXjyVtfULmoHpXnGE6wj4jx2FhprMSShhf1",
  "key5": "61gyzXovKdzZybybnGbp3awrRb5YsGFTXBt9sNqC26sh7mWzup2nnzak7vDH82T6tkDvn8V7XuLQHAUvgv6B7GvH",
  "key6": "F1JFDKNzrqH8mawoByC3UHryNdSz64ggAjonh3Vn5MSG9fHmifvCX3Sf68ppEkpY7RKTbknFkfSsdLcqbb4BLKF",
  "key7": "KNmgkcCijH2ECmHYmEmc3HEeiZXnTSBEss8NF8n23W9SiCb9WFzWKpfvY6bEA628jGkVYos5untyNPTaZSsyfVo",
  "key8": "xWXuXGP8a8Y5EMfaCsH614qKd2Hmc1MGvryAJMVAVvET8iAv6AvKcc9PaBdGYquAZW8Sqqrde7c212R5GiTTv78",
  "key9": "66eyY6DQSR4ru5wY9eVsRC1i4re9THmKcP58FsPfd97pKdHwn27fGahEHC7yKFgrmmNQJh1XyZnHkB1ohm5iiQhj",
  "key10": "21jFZfMnW1W9qCBHYM41zDfgpgvQwRSRrEcoSmktMjaWuZjLQiDx5wn4kGAevTWx9SzTLXMEWRf4kYtT4JHBCrCb",
  "key11": "2kyfHNJDsaLGKMYEH5jJfJcqEXdwZFHs26eLvMSivKgyWNLLpSqUqe9WQ7giVwM3kB2ZKMoqz19tZbFsfygCL6fv",
  "key12": "2dCpzy6XKK3ENumyWgqH6QLVcZpCuUNojiQQM7GoEzbJJ1mMVUHnci3AfnimgDNzxe1qeninkdpVhzK4PXkvdQp",
  "key13": "vA8R6sGKk6UVHASicJgFmRFX4NB8zcfWhFC5CRK5FLpfS6qrpwsgK2HfyK89EpHU6bHRCQHdESfWgiHRVFmJRNX",
  "key14": "3iWq58e9EKKw4QSLvD4dHZPDMuJUipiEe1csKRWmszCA7xzFNYndQb88RoR2sxoTv7NWVJxcruarXFV6XvBHQSx7",
  "key15": "2JLyxVfg6s67DzsbHpqDpAqA9zMjMYzJ3ZSR1gFAoAKneJBBQjoUpm51UNZMTwFUAUfEEQM9cYjPsJ1gFobn1ebH",
  "key16": "4kp3qoWWcpysBjWvo5oHGiRFpQ5LgXA4JnAYNpDE8aQPBWYqxNarZdEfddT3AuMZb5CYEx5txmncJB2PVafRdCCx",
  "key17": "39LSSwZRJYMXAqsuVDEBGovBhksBJqU3CudDze6KmWwnzgBuUFEKonmJVtP2hA8GmtGiX4vfegMDnTmy5ohpt6Wc",
  "key18": "3MBkZ8WiG2DaoeQsG247JRBLK4ydVMhape2JbYQs2dGCZGt1NKKoQ85G6s4pWoLgphw8BuzP4aNmiNYDh6GfWqNt",
  "key19": "5sFH8R7QnuWpNj6E2trw4R6s6vQ6DrgFBxYzQ4nnYDJ7pd1VXA7Ecpi39fFR9qkPb888hhkkn4Ee3wPX8CwQR8s9",
  "key20": "2XGSmNiDt5t8mUG4nBNWpjjzku6nHx17y5cwXtUqq5BNQ5xoe7HG3VaM5tR56ymJxkaWJrZEChENX63bwfbMVfBx",
  "key21": "4mG17fiCs65c7xvMkrdRToQDQtPzXSnPqHxtiN6i5b2AzQCoiQeP1Qma64c7KUqpkkbWDLzduQf6KSHWS34CP9xn",
  "key22": "RbqiTSGZRnvmKeZmGXDzWXzVSFAB1cJwAFK73VJ3PYyrLfvzAZzGB2Yg9BpdtifDg3xhTpXP7JnP8gyk8GfziGs",
  "key23": "3eF4tGka2auwECH2uYMgDNJYe7URx1xC1TPW6BL92xg1AtTy9dPnWMNLRdLvhDAN5FEtqVqfJ9G1m6LrBc2uf4Za",
  "key24": "2PQ2FBMRMrVDWwYEkFn9twtBPHLaXQf9Kw3EPxACAp297UqZ4FWSZjr7i7AsMJ6Uma2C33cDYhVd47pJrSYGWY62",
  "key25": "2bMJ4yeq4cUwifF5R2XvL1V6gVZoVocT3bg11RjdUPF1GKsgaEQwyHPrZ6QrMkQtCGurc8fVkVCMxnLCyhtMUCq6",
  "key26": "2JrUgJrdTvEx6bR84ueMRsPWGTcMGow1nPSsfKwMbNDBzPbLmv4NSVRJnT8mzHhFo1hdXorGoouDHTR17Kjs5x8B",
  "key27": "61izFc14syQE94jTc4zJc53mxq19FpRo2gu5KX8rJgXLgL6mxUbsALz7idbBJxrt3hK2eKEJuSjuvCRupTrvj2uy",
  "key28": "NhW1DRXPMCayywJ1zKhG3TqcUSGwKf1t4dTr4r5wgMACZyVUienu2Nbc9ZNSUt9Fx47KYpDbZY8VYqnWNA7cXfB",
  "key29": "4cUWBQhD3ypjPJMsS9akr55TVQnWA7ecYedaK5PBFkHvvTvBAD2nS4yKqqpBut5FoLLS9WxhNiE7zu3QmCvrocGN",
  "key30": "5JAnKoo6NhFytds3bCKmyHbbkR12ayDr7pUgixVFyocT68JFu2upSyQqMMyd7JB7dPHxPR8d3NT2VL5zyqhrscud",
  "key31": "2LKebyQxfYACLpnmDNB8mikJh7zcCHSpEnb7xqXCcjknhLUZiXmE9wrSW2mAYhVyT5nCTnQHfUwbJJe7pBs4P9GH",
  "key32": "4MbYrqKNdY2r6eehbHfou85CjhYE95o9Y9zdtTrqsqUNFqHSM4YNtPexpa8oxUquNcAwzKYrxAjpoVjBmrByYbnF",
  "key33": "3uRUKRi1ejgQbidtQBin4n9g28y6m5Cx4Pjfkvd4m7UqQ48AEbJBftfvRin68R5tDXrDuSMsLD4hq98MPE171hXu",
  "key34": "3wC6KdsF62iASrE8843n9cvgjoX85KmeJ83DKY9A2KAZKZFhZ4CDGSTG2KRJfRrYAGPpgJnGfPuci45t8f3vCrBr",
  "key35": "33Sunpunjv1hjgavYXiVz2xLwdMQ8dB3jpdNWZdXCxKB5MDGmmFJrfw7rn41pp82aaf9YWmsbN9KqvedQbDgE1L8",
  "key36": "EeZWGbeqrQ1BWByBwZtmmK69b13gfrc99AhNnsXeYKRgcJhdBHf3CZ9qbZR6gzdYkmdM3JAsiqpDTwE6tgUg1Mw",
  "key37": "672QfuTf7af7S15mkkDZv5cvFpnuu16pKjitrMMTKZRNHmu4zN8K8kvPsWXUNDwGoEJw5gZwj4YRgHv9gmmn9PAP",
  "key38": "2czphdgsrkD1nwte2tS35WdpzHDsZEKPooZpDiMSMZUthn8WD5PwaXkY5QCQ7ZnnpmnAJPjkQb1y6zi286ozKqsL"
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
