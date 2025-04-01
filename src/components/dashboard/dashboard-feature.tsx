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
    "2fHEV3EV9iBrCynvBzRHqFZfBKonJ4yHcEyqgmVKg74ZAFJNYnUyCJzGBdtSuPA9ccD33zFfEYwhEkXqKL9BeLD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DKY6jGgaYQg8nYnfboCyLacnkPE9zqNeg13SjLQXqriSB3TPCMtpwWP4vMb5nBs7WaKG5aWp9zuSRohAUTAQDFk",
  "key1": "2PNV8jK5P6d4MfwD4ah1Vq7kRpEqnToPCTuPjxd79bqEEW6ieerbDwVbn27QMiAHAfK2kHYLFH78b1EEUsch4e4h",
  "key2": "5Eq1hjro8fUPzcNhUjhXN92EFkWbH4mf37NXf8cvvY6VdL2X8rrVWvVzhV2jiUF2mLztMqhJz79rd3u4K1kAR7dQ",
  "key3": "4ggYEyyaQE1Q5Ft4r7abennjZr72bdRB1ootrPL7SBq5GKA9MWxb2qJP2sN6tLGxDqhL1fEsher8bGKQoBmnH6cy",
  "key4": "4SWwSAYgdSYWyhtgYsPrnadzAGFe3kqriTyhhfeKVvDQkKjagn11KzAaJkNrH3Ard2QGpcXwcidpWsEz8XjZPyFR",
  "key5": "3ZttwcoKD2V1bgDSYmf4gH4M6kqXehUHPtt5RriKkjBk5YiZ3puURadKdFYB7iYxc3gYjjp61wZLHmwURpPXRTNU",
  "key6": "3jJHF4AUVcpF7MVFf2r7c9crquPtYxv5K4YMw7KLyAj5UUJmFBf5y7yC2idi9aJmvCBmuDGQ62Xv8EdGxT7TtT1k",
  "key7": "2pkpYmBbFwqCLiAKhHg7hrSrjLSsUYvd6W7Ejt89tnvFWRKnUQcnAJq9RoTXUVVs5Y37rmF1L9KfiFikmGj5KxWT",
  "key8": "4owRxTUKp86ug6SPAL3wCjozsHXKSJtkYwXCyxD4TALNi5r8HWdCdqwR7q2QxePqeLHDs8uvG9CsBhMxnpaAj1Tw",
  "key9": "2LXHBQTti8E8gcUoi987Tf9gnzU9MfETXiXhjfy5nApF1UbnUQAZ9mdEPDGiLJJSqVJYrzizMgGyAV5idSNEPzHg",
  "key10": "5FXxxuJTrtNLRXopaPPioq7AYzgtJPMvfzHNDRFs167PDAhjDqEVnEdCcTwapySypM641utpvgig5E26LPAqYfq6",
  "key11": "5xxj9hqTPtuJP4noJcZ7qShpatmWZV4yDv1DF79JLmMbdKRuXuxy2kvW3zof1ebQ2LyFrHeBM3yeEx3zfo3en5r8",
  "key12": "54CV9sgoNNJ2mVXqAXWuAHJMkjJTjEVssD33Cx1bHzf8dNctiH8U7CxxpY8VRv71Kg9CTcP1tMsRPMGqWGxvCZfJ",
  "key13": "4Ym6jGbyQvz2BCA8M11RXXVnosNz8d4CxENsBzhq6TzE6v8VYyvTC7v6WLQVC37iJDeihDTB3QjXTtwDFXTP4K7W",
  "key14": "5fbdqpex2bL6A8iLDmeP6zUJjAzEy6C1Zc6Kja4cN5NBXEZidNzrSVdrWXmvm66EFHGVRJrwYm9iPFh4bWn7zWJx",
  "key15": "5pgV3QyRqqh9Fhxa1zSyf5Mu7zTwmbQYj6yEpf8pjETmU2PrJqf58pZ4GV4V21UY4sY8XGrvTxFk6G4VZb4kkeSi",
  "key16": "wcXbKpTaWvZdXpstmv9Aqv2TKEHGENbZkGZT8mJevMSQGDSiTYDA5pFNtYRpL2F7mFc1u3RGU3AjBgmW7jXmi22",
  "key17": "41xSFPVegwjQXWvHThnvRbh7v4YS94qeCGLk2USGTnxQSxcThgddner91DVRbrPRFD9Ziuh22CjxYLwXAyb6Ngpa",
  "key18": "4Kx3J3k6JBN7LCXZmzF2AUUFwWNjQiPWfjo1i3N4SpDAHPBbjk6ot6L2ceeYM4Xh8iWCr3y28cHsffUddUARDRHf",
  "key19": "4xHCbqk4L13wniH6DFyXBfqqAaHiHabN4AUcE5BNXwN4a6ZxWUZKNv135pStpHsJCDgsXH2C4RBcGMTH5GtcyxUL",
  "key20": "2VbFdtgayM8EzYbB65jgEnezoJM9ki1zJ7zbhTNPk6hrJ4HJhpW64r5s6Jdte2g2c1YDSwt2Fnfxvy7wD2NPc52p",
  "key21": "2eFGu9VajwhxVFi7LC11vnNSiCT9H13auLZ12V6kyiYBxxuePsrFAHozHMCprEwGpjnW12VSZcG85VRxbfU4rzYP",
  "key22": "44uxzdZVFkhMRBWNhAKTMqBmPELjJQQdt3QHsjxkqJoTHY9peyWju4KizgHgcfEsSKG1AFKU5RdDgRPJE3gX7fhK",
  "key23": "2KNYxiZN79uk4gzBkvJTbcKXVrBKEHZjhw6krC4LfDSTXLobBU6qPEBpbf5GyFHwxJRZQ89w6UMNFp89NdHcTi5x",
  "key24": "4dFcLCrwq5mYuDTjKs1qqpGnQh9ob88TFQFwAnxUTa4PxrQdbdiU5NUFAhkh2uQvnUyozQWa6mMKDN22SSPZvSUi",
  "key25": "4zmtdXLB5rNiBgTUWJ3sMgWe74iuWePkm7dVfmicDsgvatYPvdGBJHcpsxig5dsmTcb5DDEEtsdgsR1URXrp9PcQ",
  "key26": "3nFQoZRLqSA3qk5cdW8MpXvFxrJhLSnhtuWfSKh2SgANZTgafBLG4F7tsSTJnh4uX3Bq3KhUznJLxhMZedFSWFrV",
  "key27": "58ushyxZKUXzFC57mjpcc7xVfgxzd2KMK9J9vYieJrPDcXMoqbvVveqsghwNVoQxX72c5fa83LBDRHh8qmaXzGCt",
  "key28": "F3oRnFHCL1oeq1QtnYXj9AigHE1EqZgvrVVjCi1A5XPkx78nbhefRtHW8ZNgsy4qn1kyBFnwW81otJLQcPg8Wjv",
  "key29": "45Bef3KY5FmYGxd66mreF8wVfNvX1PuQh9EA296ZN8ct6JwJUCJg274zudxjHM9vjHVh18Qv3vxXoXkPTHJMRspg",
  "key30": "36pUpZEeNtF38Gk6dbKg8Un3goPpcSD2HKz7XFcvUQ63g6cB6FfnTCRXqzUoiF9mtdThdiB2XV86CnyA3BRNenAG",
  "key31": "395GELmA8TU1Fi8AfdHjN9bXEgyPnz1FWyagdx2hs1xxQ8FMnRFKAM7sJW9Ahqv4H9Bu6su1DSeBYKB3WAohvkyc",
  "key32": "3KCxEhYwEtpQTwbxLcEQEfAqXXtkUFdhgdTFzQFB9PouC1j4g2zcnRsXKcNogSKm4ZCshJnF7yLrt4hw6ZQPS4S9",
  "key33": "21xxNYUSbyePQ3ZGDwuMadhapAFkSCKk6M8cRLyugvfWJWyTfy7mdwALr1mhr7RVveD7A3cHpCVtFkEP6hGbG7wB",
  "key34": "3UgmJ1gtVEsvwoXhFGXGdoB9tbhsD2cPdRLtjimWYr9Qic1xzCap8TU1XNn3sFj6urvHDfr2wS7j2MyEb9mcuDBV",
  "key35": "kuZSfPrpVTK7Yb9MgM669ufm7HSdAzrUhg5JcgZUMYGRkpX5gu66gaZYHFYiFxYeHVDGAaAec4QRCpsoM7xkBL8",
  "key36": "2nyLgn4JbsKoKjGqpkVDRJhxk1NojCkkZccBYfd9T6AfmxTWBvKboURecQPb8YMRGsX2xbExvHwNLnWJ8rz9jhFJ",
  "key37": "5ZdZVv7sWGP9rtB5bJomkjxB3YMoXCWUgmY42XPSPDSmfLTqDHephPJiqMJtHxZ9NTAtuyJNm9he7YdAn7XZWu9p",
  "key38": "ZdQisEvPsYNcU7SX79Vwwze6Y2zAszj8i3v5vjGHnVB9kNTGCWVi8CzGzgUA1CcuWRdUUxQQTsDVa247YC3H8SN",
  "key39": "31RmsA1TUqnyA8Zb2wWvLUbTKLBK1hHtc3s2gPDjM94u8SYTmxGb6ZpomiqaUdYhMiSPstYiGPrty9h7BmitHdEM",
  "key40": "4w6dgVvy2RpP7bdSLiqmUsc3sqJKcdjwxiN7aue2jDk7F62aupGdtbnvZD7GWRF9bqU3HbQP3axCGcEDTFUc6oTX",
  "key41": "3wY4JBZJRU9umCqT2vVQEFFnzaVdniEAJHEnAWpu7TCRmSRq1EesjNrAm23g5sx9GLbDRMS8Vr4piVeaMYU9Ar4P",
  "key42": "3h4bsgkGfoEsaHYwoe9JrNAMSZc8pbfWFn6t9hqYxChHp8kqtfkF3ruz1SWJT6xhAPhpxnzFbZBzb4KsgngjJfmq",
  "key43": "3TkfCjwWFvWAWM4UXH1qQcHffZMjKQBJpYbcQNEFti1Dkw5E2XRNpFA3dzQFpo8SnSiP2X6V4Hf3XEVxR9aGSy3r",
  "key44": "TQm6HAxw9rwFvmTxbP5hk5XsAvULXnCQs1r4Lixfe3nj3wwXXtUHvBrAVnp7hLtoDaz2MHXuWra8oeTydp7DAh7"
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
