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
    "66oCmmi5L2vbNR7HEE7UcK7gAFNZepyQFCfcDWhd9cnqWqbPcb6LoWMdwG2DGhvJWQ9MmUp4Nd6KPPtoGmR9hZ8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VmGKs9q18uMuYG65K42RT1HHNLAYgijr8iSkbKGTqXecyXxfNiNHsqtTCHEkrmh6MebtNzgLe4uKKyHcdPybKMV",
  "key1": "2mNPn1oc3YjU99ntKtDzP4k8aEQER8jbQizEbMHmvtCscmjx3V3QeteJfiN6N51adcCoRmM4tBLiXvEC2Lm6yGuA",
  "key2": "5tmk1T5KyHxLW9HD31AfGEakWKdnxuDFRPABY5yH1SbamxeK2XFPrzxktQfiYDDSFM734eHb2B4GE3KnUwEWUrct",
  "key3": "3q65MZbnNMZ2BPX3ruomyBK4Apn1szPXRzoChPMbxVb3WWw1UpcMPV1M9Edum4Xba21fFoaS4qUYfCcRfjQZxLiP",
  "key4": "2MYfvz6ZxwWnSBHW4gU3N9MFDg431phqWsnmRbsAv3a8RgHdQgtvkpQna89CTG2xyHqesgKbaFTUKdyMqRVoXMJW",
  "key5": "3HqmeE9W56gugo2pkg22XyCm2YmKqxoU4uvQNKMc4U5ku2iftS8H9Me1hvyMhpkaZ6kKhyhAjysnRzL31pnyNn2p",
  "key6": "2FeZERM4VmKEMfMirdVRkwrYjsSD7ZL819r5aS1hyvWuR3jGXcg55241tvYD9CraFL7a5RqoyuBFRqvLoQSUQu61",
  "key7": "2omgweQYwsEfdANBp8oYYKTTKgNiWUTFmn1W84tHy2wMdsfAiMH4M7oGNMidGFTCn14wMHcVbXkVq4Qn7ux7RAHW",
  "key8": "3VBonott29UKjR28iBoZ2LZYPZcrbhhkSWMCtFhP7pCpBLMVcuBs9xW2KFq1EMamb91Fj4P764wwQjspWUiCJNNn",
  "key9": "53LiEA8vDJKaaREMcy6B1wWCuuyqbbAVTFhUXJhsb8NTUskXbHn2Y7FQwskNz7L7jQUwi93aiNEukJ1vjPPeU4Qo",
  "key10": "22N1ox9PofoZFnPTzU5f4xgq2gLqzDZUWNT3J1zsoRA26QR8FDBGvfUrT7xX54uwjsjZkz3Tt3uBJ7U4RCiMK615",
  "key11": "3Vbm7eXH9qgciC3ocMKhpbFkU9MdBymotvhnbcBwiaUsKeJ4ZQ4GBPwRu91Fp5amaZTMh4knQ6Q23EMSYeQjtzj2",
  "key12": "3tKJhvQtHZ4BLtonKBeA3tRWjmvUeisN5zApzSz7xT2VKRggDQ5q72w5ykcEAH8UDjfqJSdpty4TJ54Merjb7CJz",
  "key13": "4rdFWaF3qM77Fk5REBYWxVZ1gtDMr8BqhoEAke12AjVSbwAMYFo4wBFegeteXgdMgDvZHdLAVq3mDUSPiAk58o1R",
  "key14": "5e27WEKTfrASxmcLUscJGrFWRG3c7MMZmcB5cVPu5DD75mFEStrhFUZUqLyBZX35CFxidepEQrttCCG6p7xcfvAj",
  "key15": "552du8NE1yFxttCJdjavH1idaHDPmcJjg4k7zLrU6RxsVWXH3qgFRhJxcQp8hhZWDdnmkiGSZfUoahdCaXvYc5Mj",
  "key16": "37szGDqAUfus47N4LQ4q5khY9SV5mGN1z4GW35TQc6m5sWgAdd43UnLCGLy9kZah4YEYJsun6V8D8SQnDgCrH5rg",
  "key17": "2crEKTG2ja6P7HwJHedoi1kqxT64qD2KMRpAdybW517HDmdgdwf8tj8waecybg9KYtT12TscABqqqWpEx854wt15",
  "key18": "5p7AzosxHCwyZwTHL8t9BZFoB7uG5FGCc7mX9epkQ5KRoar99mzVVkxRgchZYy9M7X9cxA6miEiq7jNxqunhRDG2",
  "key19": "4PJMCgBpRjkpw13GEKnsQwfpUVyDKc2kGgTwW6rby5wpJ2Mdm6BUGAHwxsUGAZCYo5tayzTTg4bvXAge19sA8hRU",
  "key20": "6iNGVQYP8khs29LXC2qKkPEcB1Tfxo8BBAAWDpxgVxaiPUX4KnCEfTrcwPJYvKiFCkWH6grYyoE2TvddDXiyYs3",
  "key21": "36BXkng4Ln1sqrMm5Mvd712eJhLerxkfv6Q4WqHXDyGfLjh9aqnv3wZUVmP9pa9WUpNTDHEvdZoWk3awFzrhptXL",
  "key22": "3xeYc556Lr1dA7fze8QpzVaVJnHGzSMXPHZwru4kch5gf7786vXZB4NbUkZVhC9oaXE3o4D66KQ5fDjZsdKiMeMu",
  "key23": "31K6HBPNHKnbsnciNKg3NJ58syFVEiqZTvB38E5kFQvF3oiaBrZzjKmeXTeuibPxBWXSzs5vHgaBRf8FcNRGRShg",
  "key24": "2M6eguM3RovLRUFEEg39uB2Vc8utk6ZJjn3Rz12vBZLhpqNAwUtgniAZFWUU3AxVePgs9MTHJHLFmtTmaR3dFkpk",
  "key25": "3KVb1VcoRgvPPDa2CySti3cS52UWQYWSmB9e2KAeeLwJhJ7hedhwcmhBsGEdYLYcDJT6NkT5gyJN17Yk6pgnHoRY",
  "key26": "KbwLU4XLy4DSE6jguxRFaTWo8XQteauXcn6QCi4cYKq3GyLwWJXSJnvG324tWqSKuvsKbGwYCw46uyeTsYp93bX",
  "key27": "3LXoRLR3buKFh3vP37WjLZcx2oTXLxzRa19vSUuQwqS8Ghd3fWNjgUsRfJbQDLCCvDtRD55hC3jNXt2an8vBjE8C",
  "key28": "2Qfy9uhtvBB7zauw2WdKmJTQcGuuxyDqxz2EJnY9c3B2MhyxGWqxjfM5AsXsRhirjeFNTsfB45CVqhFKerbcKqTx",
  "key29": "221Ukkw32Ab2HnwV72FqZCDnFt5AYdFmkuTxd7HjTZ4nrUbfFLBGPEgCTjVNRM7CR5dArxmwYMxnhFtZaVs7TyPa",
  "key30": "3NSaD9R4sn1AzJtihgWLiHwydcAnCWnzSq8aqkJZ8CRDNDrMLLATgxvyCECarjbgogkE5E94oTJsNYC9K1z2vwDV",
  "key31": "4JcRVtHDCmD6kcs51A1Hv1E9LZxmeaF5MWD2eDDNRKUaz97jdibM7Msp44fA1cfj2GTRhg2jBVx9EMVM1DNybGuQ",
  "key32": "3q4MyqhJSGSJsZoi8UKHGrW7YWdWR54bwMDVJS6tgjnFdzFy9Y7CouTADYaLvoV5GpiYTGnfb7qn1taiEwUYZeWU",
  "key33": "5rUJBAaB2FVaZN4dq21vkuQTvmPV5aYYTstpDFQQxnXpDCo6uNa41fH8wDCDpv14F5Doi4GtHidnTyTR19xq5sAt",
  "key34": "5Do4oJ8BfPvUW2E833PYrGVSs7Vjz53RMucchZg3nVZpbcazCN4iGi7kirTjAfLhsrhPgNpsmQbTHJU49cAJ4bvR",
  "key35": "4uSyQuYMwzBYjP1MNDDqAsmxR51wtJmtrKMju7jDJ8setZyYDep35SfuLSXvEQgtq6ay7Ejx5ySCmLkW579gACKN",
  "key36": "4KBzsAf7iciDegsW59GxaLiwe1vAHrATaQoUuMbVitNZDtSpXgpfQxG7ESvSCvbnrcsUb7u6rDAARJCJRS2Jodnw",
  "key37": "2miteDg7WBME856BRSHWPa8ox45C4NJwAyQJKMFMfrF9X9x2gornEfdrggudYNJy6fjawR3Jd9TpJLe9UnfcwBhK",
  "key38": "3LrWXTgDQabZHbfrRBBDkY3dc8mmBRfi5o5wp5rWfEQuduseyMvrW89KCsAcqUQL6rS2o6FuSRaaG8QxDk2jjX8d",
  "key39": "4xdknNKnKHCqYetMY8xfM6NdnDEsnYBnktRAnmiPC4fNfggv2N7pgY3uJf6reRY6Rc7LVCig44VJRXt1vA9vkNSV",
  "key40": "3Gp9GUwWqc6RpJW4PEy6j6RAKtvNGnEUnf96SrmnLSqDcjcJa4GDrU1AWZGpMFkivevHUNGVzUBdzmFLf9jiHgD4",
  "key41": "48FZ3pJmSnCBbw52UYgwTAVEcCov34sBzKJdoFYvigqTQqBEueXTkqH3HzJHa86nz8D8CR5cc4TxBVmkM5mLVAo7",
  "key42": "2SNXSgNR7hXBxuUVZMxfURcdXuWjanvLT6K2rdZUpPtjstQZF2yxfNXRNTeoHLouDR9Wu7LAL1Gg3rKzspCK81nH",
  "key43": "4hQbkqxMbbSRWSgoScaNh9N5kRszRb5Kvh74YWuVDs7RX5GGP7u1sBigFmdnKyfTTJzanuzTb2rAYsvFK6QxSgc2",
  "key44": "5MeLje89nor5zqMMJufc62i3Vqy7vrpjpfR3KSesXL9pteCXUbeP27CYiDaVeKpqVHawfnm65YwKDmYzNH6k8oqh",
  "key45": "4w2WCzAEUYcdfmAgM7jE64G8bTDtdqs6TpAD2sJzBiHG1xD59kZbJ94r6fsb6zgFkz197RUNUXwkNKLq59vBAubj",
  "key46": "7L7zejQPauCdW4ftXgWXdFSUHWZ3MagcH3mZE58uMsZdufV5QveupwzUVipP7iFf8Dn9xhkM42ukhUCvBhDuvKm",
  "key47": "2kxxkfPU4j5UXkoQCMvxcGWdaAYdQbeUbNKJMs1CvWdy8heL7RWAJMhsxS8kLxj2R3LdbgwK7Ts2cF8EJkyP2MZd",
  "key48": "415gUjwc25a1PLZQUN1ub6419kuQQieFH4uyxto7aBH7EiT9tBweAYvXzmdHaSHdEuJL3iVuRhMVmQhUCzgxXKH5"
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
