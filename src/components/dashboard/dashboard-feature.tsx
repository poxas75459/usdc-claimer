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
    "VUeydeYr7V3cRgEJMwphLb865FUt8uAX21pKaLB6QZ5TVHLGzNojvcGfHSRHXaDc95Bw9jEp6tL2obxerXc4Nc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Espi11eknQcf9j9iQqkSh2BhtfMbSM2HZKj8TSmcGT4Rwhmt51ZpXix8QE1nMHPASphuq34jwPXjy1KUMJo9Boa",
  "key1": "666FHPVCYdw9q7mgNprTR7Y8NrK3DxHiq9wk1MUVeFQpv5DeMBDkdtZV2KcBtRkMLWVd1PBnDzY2TovfQcY8bpfK",
  "key2": "4NQV552wvQGCxcYwWMM32ovnZWkKbUwrGzBWCGEFSHzMmj14ZCjRTMA7VPzzqNmGE6WeE69krBE9uMGaE2ADnEVS",
  "key3": "65d42cccMyMtt9kvXkmGxRp4HA4Ne1aCUE6mPtVp4cW6fooDtoCyiUGQ1mF54Ct6TndRDR8bmoj4zq4bEpwVYnUf",
  "key4": "4hwZmpe5VnPuKL2ZjVUgKibTBcsLt76cnJnjKiANfwgodc3qcG7PNypp6WMoWyM7t5ggDid75N7GS68WsyMDtceP",
  "key5": "32WLAuLvezdPSLPLWvMQ8Rj2CJevtfbD6er9FJxGSzUXF9K78pHZerELY77dQ5KyZwN7ja4xZ7wB2Rc6qXfTJv6u",
  "key6": "2DZDVpo4w94m2hh1XMYUvGrP9TGwWYmtz9w5cmwcw4UgXVQ5EvM8wfpsifvKnsSrTJ2t3SiMQ8J5nbJ7KmFTsGLC",
  "key7": "4WrLXCd3gbp1DTTLVodHJ4DRPP2TxRjpT2uP34oAjJfbM9H7ubZ3mHwtV1nZAjZUPwFJ3aTR7cH6wCJ542buJWLm",
  "key8": "bQHcLhoQYMy8KpZCJ6uMYcszeDSSckMrMcH6HXgNVBhJGbwzyYJR5V3PeEP91xAoctutXq48dkENeEjXpS5e7uv",
  "key9": "5fkvpXCEbqtKZJ3efBjrxrf9abKHDFbF5X8vMPa7s1BxHpp9aXELQ1F3KunkJYHTF9RxAY9kZiLB2mCScyeYAAGe",
  "key10": "KjeMa7Z2kMnokJQUj8r5VissSxNtLVFYtCVsYgeJ7HeRiMFFh59K3RpBpridLCNNEhSG1PZxtRF2tX2G353wnmd",
  "key11": "5qrCUTaujbfurzEeSt9k71fai3dHPAhQoh3Rw8niMwL9Q1a4g9EXDYhfLjaQEJpALSY4DFsmZqxHCCdnNaJiRDaD",
  "key12": "HAkfc9nhiDKfY69NGt8ZMfkg64K1TYgaPdKN6WgnhogcRKzo26geBwzRXG3gxiZN9YaVi8QhxhqrFq72YDXtWsk",
  "key13": "3aib27LWAsGchV5LUz1iE4Q6Gu4W3vGQ3Fg1patP8Qhsh92c67noGftRrwBoy6dpTGLxDyL7f3S5mAPxDTUsaUJk",
  "key14": "3vjwaRPcLFFWWcnEpg3YqNX6HLJzdvZUBWx3AU6bbcLSA8aEzus9n3Pq5iz1XtLXW8qFxsRuWMFsUHo1B2weMSkd",
  "key15": "4sxLqmGXmaXQ7Y2rRBcyxetKmGcCgyRuDdAZxXjogEhr93zDzXVuQLwxLTnjSxoRoQV9AWXmyewu8QwXkcchM3dg",
  "key16": "4K1UFw93ayQUV7Lf8woudFcxUiLgmq9epiCxDj6cupfPVhsqMif5E5jAr9zVougvnuxk1aWbm69H9e64QQdE6Wk8",
  "key17": "3WEUEnxGmcNT7iRHFzWpZoMDB9CjwKcVbEqTu9NfEZQYPu2hj1o9MCar4Cxnw9wGZjFEXYiRJSSyzTgPMtQuXizi",
  "key18": "348YLc899DUQMER78VFPHzCN4LUL4Aw3fyYJwj9p86emc58DQnrdJ69yhd7d5WCXxApMQUvbxo1Go8W3EHjM8QSg",
  "key19": "4R7wWf8qyzY1f3hwJSLM7PzwHUCBB97W7mAqmxqSdG7Q3ptQPn7YL2acBzgu5vMrn6nou5NP8gPkStmpG49zq1gR",
  "key20": "32LE8YPi4DBTKVTf6v9pPpHShDTMc9DxT15v1yDVL3UenNMLVo25JPUsyxtkTTTThradAqHT8KQ6zaaGAhC3SyoW",
  "key21": "5iUdezJ3Y3ftke7gQEHRUgK1Mgzmt72K9ng1uDqrEo5pUgnzKwGGPYzKcS4fooc8X8mgBSLUmKpkPUdoYo6PVPKo",
  "key22": "5mpjWP5CfDuDKvNWbSiziPnxaBEMgUBy67HQRRvE3LinmWwb7Ma64WXsckiNN6pbeL5QQD6BtqANYyRjZ3uWeW68",
  "key23": "3oxTAUPYwTivUfQ6VAgHMW6ALK8msdU4ND8Wy8AxRUexb8KdYzhWizwWsTvEHm3nzsnLXYd3bkjo8b787gba7r9J",
  "key24": "2qTAz7eD6TZDXUg8mkxAz6phF9BtZVz1MatFrT3SdZw7pjo2ahcZEQf546qigj5SzTVYqVX8L7Jkmot1nADjQDef",
  "key25": "dc19QiH9RqBbznUMabWUZEgZMut6RXfPvfFUhnzQrPFKCtFSEqb6BvzJVyv867aG8zgjEfQRURRhAjWHheEiVgv",
  "key26": "4dzGfJBeitPm6YZLTEcqs8btTCxMMV9zHqULv92H8FqC7nbsLLZY83jszxMyfph1dvoEvyQXWbDfF2hgcPxVe4dD",
  "key27": "5uLMwvGhfwh8M78AiXGfMCFRoEVRF221mRgj2mWRahgZwD234avwohhLneCjLY9FxpsPLhWqz8YYNtqpkhhoFXs4",
  "key28": "44fmzghXH6WYHPJnzVgFe6mjaU6dwtWVhprkkgeZVC1R7kuX12cKk5ZQ4yNYknieVUgdENSJgs3oCk2nRGvMbHDZ",
  "key29": "59PuhpnR29z8t9uEpsj9xcMu6m2qoU7jahtY1tdmjKAq1DriF9QrHLoqkp4RYso3nDe5JRHVQaAyUKNesg9XxHYm",
  "key30": "4J2eyDiCmZUgj12SNYzAERu7R3kWdzXJXTW2zrtUXJtJB9haAsQGC6Z8S67HZ7xdMtcrnvNkJgJbeiuQvzxGZ4rc",
  "key31": "2uuuoAeoDnWNy54TuXuEGdfpAyXHoWcrrBbEkT3s1kpZzL2sCAGpUpbrZkNqnydys5NKVWuh2T1BfXM8PpwnYBEZ",
  "key32": "62SbBA23Ztcd8U5PY2XDyHiRLiKWsNsS251i9m2RXqKB3CgbS8sewNiPm9oEhBt6QHBVhDViBbcdCr5dKvayMrQB",
  "key33": "5XVxEieouotfd9SHRdSQroZz3S1rEQaMbWasJhDwNLXm4zxjV14PoyhfEWxCJHCgcSKykBaaDqPcMaqr5osXFpJJ",
  "key34": "2GKEpVs9WX7Zc6LqE8riTuPP6tYNgdcr73tdBg8e8dR4rG5qkAUHNkrufuMU8bXG4w7Zk4kPDoayfb9AwSNMSTqN",
  "key35": "3yrxhCdRTuLP6rNLEoH9j4wRkQs2Npbtz4WfJBTBLaiWcbR1LMqqrowEUJit1mXURmC1kb2zLJkMPQGdrBLfF1JD",
  "key36": "2H68CsMo78zjXWBZPZkYoqFRatNRxp8hfg2P3e3LPsoEgmbSpbNx37a8Y3PxLRidJ8uaY4a2sTGcKbWVJMBZmMqK",
  "key37": "2jB3fGpZGo3TxcmYANkdoe25HipZEYNFhmFwA3zJwCaXUmkbHKuYt9kuS56xJmPfZo8mVY9C4mwHXcFSWT5t1fZB",
  "key38": "2hQ7vJieWmqDVwGtRAYcdaSAWgwmwkUuhodtr3pDE9rb6XC9J8ycwUeLMFw4rCsHJCFRmGpWnYtvpk5rPXbz8cRc",
  "key39": "5eBrc2cqwqvMatPzPCvs2xXQeN1t2rBA3p6KdwMfsAPVYSxnyYaNvAS8Vj56rLVsNRQESibyrHYJpdNBHpNEadjk",
  "key40": "5NoM2dRgkTvarDeyT1zegfaRPo9x2fatVcK86SV3fJqAfWpV94Zd4gBd7z6FHKXGjfrweAopNm1BidiseZy5uwVz",
  "key41": "3xiiYn9Sa7HcYW1YJYS4BPVcv7q7CHtK2rw77NHEygXvKq4GhsL51iw1mghqDCLzfpLuYQSgSS4vtigH5xfCBLbq",
  "key42": "5ieMZzCHEnvC16Zjr3ot7A8qrctsj19XXHNtxhEo2VbibDQ87crqMeNw7QUU51KDnkMsW4Ms1q2G4DMmeYLSVSQr",
  "key43": "4phR6gkN3gzqwLbaGgb2YGqBgN4uW7japVoSFDteGMFD4k964HvDMPyK7mqQkogyzNBtdMqxaHnRYQ3z2aiMSATF",
  "key44": "P5hfdyGUmKK1MGv8DYtiXxZ6Dbnmw6jdHhiMFKeoagxZZhA4GZfhuitmZDyqgAXDEia5aNVG8dpAZKR7wxVTvqn",
  "key45": "56hFprwtdSoZNKAPkbUVGN6qA6mcStKwmmDFGYDToEUZ15khLyxXmsX86PftbXYvonTSFEEaDnxpjnPN1xJ7HU7y",
  "key46": "3Y3SPMcBc8QbJTVx7wcCY45EkPnC8GZn933eb7rRJDndzEaCG5LE4BNc1UrUwRjbccszYvNA1u5BNhjQceobitML",
  "key47": "2GRNZ4KvbHup3fjVYhvGxYS3aYELXQeU59jkkkBDCyAyrj5voZjdDK5aHkeTwdeG5GY6NpUyC9o45MTkBJh8Lpve",
  "key48": "ddymLRuxFbMVipBBmoAkfdCFD91wAmizPHjKHzbmymZQsDA8EDAiGvXzJUkXcdmo4nqntd11RVDgbkaG8nBFNrB",
  "key49": "3RLJcv7SSTUJSK6VmXDYdr6Ss982FRxqR1kkmM4c7261SnTpKjDFB6dcoFJRfMayk7uJFAGJiPt3ZgMrvC9v9som"
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
