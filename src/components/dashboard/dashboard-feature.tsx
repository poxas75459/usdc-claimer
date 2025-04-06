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
    "3tYSRKsXo1fRv2JEFzjVM899mNyb76ysPVBkUfXGfNMfQuxJPYvExg8BTwga2QTTSpuU9cfEsQJHXvo6YtH6n9bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u3uACP8BgcMxPg57B2RhghubFzWeAHqmtjeXxugoCAqxKNERSDpbBZPCaChUm28qydc9Sd4V9F21ztNYCSok89u",
  "key1": "3HJNPfZh1k2xXt9aZHzu7fLvcoDSpd1YHemsHZF6ruz8To2kdQKmGxSP6QaTNrRXhoychewwJn5fk2kUwbM2ChuS",
  "key2": "4GrgCYfF2ca4ugGj59gNn7YUPYgnMbGfyYpHLoGq9VXRbLoH5iHp5uDCQmjFNrogkvJ7nc6czeTTF3HFbu8gx8U9",
  "key3": "2dW4dm6gnGkCnt25hE25SC48B4Lv99yGj7G5WYeZ9Th1Ht2jJtA7j87Bsz25wuwRzU5XBTkcxnfW6oF64Md7LeXz",
  "key4": "3Xbrr8PPnHsnXM7R2Bkkf6gqwSekY4cKeRsAwDqBCSe5hTG8AWN7koKRhXruE1Pcoobj5zKaiJQosFecSakhFK3V",
  "key5": "3Vseepdj3uqWB2vKicHxqeqq5oaLoiBmxDjRNcypg7p7orzwGtFkukwENqtKKx7hfT9wBqBKvMwHaCTnAE8EkUbR",
  "key6": "3MKzR2EQtuekfPpTveN4z9UKiZSgGqbfBYBH9br6G3xFECbSCMu62SdcMDmvzNSU7gjDHTZnBExRkpkXgexWAZnf",
  "key7": "3SeKBM7dGiS7KiGF6Hzo1n5P2L5kp6zjCWMEwotxdADzPhv11MtXPckqeoNMdaJoSQ883Nv36EjmeGU5ZCN5cdbJ",
  "key8": "4e283Ws7Bzkz35D7RzvScp4rM7CcJyMQThoPf2F4S3pPK8L76k2TVM4Lih5AXKn1y38UURpubWqmniUX4oiAe6oS",
  "key9": "5U6GBf5Fzv9WQEo6SeKt6pLWGbbn1K7g3mY1MLM9S7ExQaoMts1RzEXBiEVWeJiiLia1DeLh8iuvUJorGsNjhiDW",
  "key10": "3rBM4BZsgNbNAyMcSAUAEQdK3zsPvN9id3dHoPyWpFs5eCJ2PbAHxL71PeYRUy6TocwnNGGBq4WeN49ikAmzYEHL",
  "key11": "3CmtMJ34FuURW6jiYzLAs7oPt76ZQoyXWLZN4yH96p3mqaH38Koh9eLkY2nPQTVW3fMbvFDyKacjiUyWYWr4fz2U",
  "key12": "4CyY69qUDmuYUVavYGrbwR7FWdZdB3nqnCatwHxFPnchgVBX8XjJHssJ2TGX6KLnNHZNYDhoUPr4shJ7Qh4FvN9z",
  "key13": "4VMFszhHK2TPiDStikdH5kruPp8138Qic4fvEjFp2EpCZJRZM8AboP8XtUHEASMoC2Yy1BQNf8VjrovPCZnxU4k6",
  "key14": "5FYJLVx2y52Kh8kEjvTtVdDncUPKKhUpR1vDQ9jbsjRV3pon3yab8N48DygK5hpDDGm7Kxbi5XjKTfnnGhLQLQ4s",
  "key15": "5Epi4wVNLLggmeKE96hjU8C1WVJjPkrxRWmxuiDmKgpSo6AnP1XKGo3XcZMmtPrRLA3t2K54pD1W4bRA4AQDP31c",
  "key16": "5mCEQiwgvEznsoqmpt8tJEXziTi4zFo4mTg698EAQUEqKioY2te9aGfmwQNnh2kKZuQ1TvWqGB6Dw2KD5w3Ty52B",
  "key17": "CxiPbUQ8eZKzAi9K1fMDWKPfuXDEoLquyp4a9WeDTN282d75qrLzkqnGK1Rc79bSu3fkriy8A4YxRAhCGENSgtW",
  "key18": "527TNao1mmarSiePvG7bbPuLRLJzPkDzam5xMs9aiLct4hzdQjqesREVkd3zRmShgtCFtZsA6ov1SBbfeaCdB2ry",
  "key19": "2QZRxjX7prPFioJdoZruuN4mtmceTXi7zWQNcJRFtm4WDrfEnRcsYS8etAsRLFH1uJrcyWJ72k4XvgXuMAbjkfPV",
  "key20": "2aqgZ53qDc7WH1YHPKYDtsjMt8Es3ygnpcv5o6moRNPA5jQCvSeGuXeNZbpS6cvE9HZWf3QkeUdrfhrkYTL9bBBP",
  "key21": "3rsgpvseZYBwSsiWywt2zuxmySd9QUqE23YkN3nYoSW6DnFaYdJNMyWUkjRN6npJVTsquNSLFYaLk5TaBHP5mB3d",
  "key22": "2s1vA75qyY3R8m4s5NfqS6y7JiLb3EiuDCw6jnAwf48fHoEr2YGVm5JMrMshFKPwB7zFviKvtSJ29twrHa6krZLt",
  "key23": "2oDkR6c4YThg67YxeBupE7FUgfM2APjX17gmnaH71ZZWFrddcjuwn6gikief7iva86qPUpPATgUCEooqayjKPiY9",
  "key24": "3o5gBTowumKeX4Wc2QSD697skJH3wDLbtJ9ucHQ5UuRGYXfgGEZRvVWRVRRZqC6JsZAfwhMc9bTBgiL1fNoowMso",
  "key25": "3Nv3nUE3JeunyxTAVahfQsNeE1Qy2FNuZheGboCsLWzRcdyudSRfw5bbcnwCi7qEv5QpfUWDUwk5vDe4xKH42mrn",
  "key26": "2wQSCaTYbxGP8czy88vHfHzLgNuTtjCymgTip17EwtsYU2hChuicHjtnivmAncjkT4XTSEM3fsg1t4sgbvy7XNAM",
  "key27": "3JmNtqP4d5sHGMS39ngUjthak2mtCYtMgnfxrGDUUttdk9GGeuM2Cs9tA81bsVpvo9Qwpdn2mo4yugR8c2mDnMqo",
  "key28": "3E1qAGiXTfiZTwxw8xk59GSqRZ6B5PMpK25oauMrURZnMadVcq7nSnTPJKxt9QKQ2gvmFFCtMcvJwTcEM4mnJtV8",
  "key29": "3xzQNfwMpAyiT15p5jnVw3d3J29EixvXZKksXjw5SDyvAmdFExgEKYTuCGB4482bkgpS4feJu9xY5b1ra61JMvmY",
  "key30": "53zZUZcqVZiabuV9khk3ko5uFPBWru3cdZjSS9n856tiWnYJ4UKXuKzBNiR6iGrWenjAq8hQp4DnHM2ygUStvymT",
  "key31": "3RTcs9K73haMjYjQdWnniUAXJRL4u4NYBoTAwytWZxWPYPd3upsAUK8fCPrRWXifvEUo5QmJjr96LqQL9q7PoLig",
  "key32": "3U8mWgQUEUqyorPsmVgGPhWqFdWi7QSpCrAQDSbHQTDhyEo6u8JK9rLmYbXzzbHkK6eCCmaB2atbm4CbVEVGkrtA",
  "key33": "UTWmjELyA3MET4P2mcp7pPLUJbnuCvRVhjNm8ABAgVgYguobMd2ngtPSK68HxJLEuLJPesn2NyeQWhqW9VbcYk8",
  "key34": "WKt2F8mHdQsM8eiMaLJaxd3ngcRA2eRrvHUaKVE9NKZLGn1cZGpBNMDyAuDn1uZMwZLs9HKLkQmn1rXtFXKbAsr",
  "key35": "3kZV4TZpLLqGSNrHL4HSNeap33sba4D5gaGyNFGrVEArk4HS79yxndGjpAFPeXQBDBV4HmyrsGnSZXpvHgb7d1DD",
  "key36": "5burEDsrBWPhWtCrZpcu1MuJRD7HNaE2kMVvxTRA3Fm9qrb9QM5R7SbnJ9gzzML2JNWnaHJ4uzj47uc8Bsp58Npx",
  "key37": "XvE7NpG7sL69ZXCPGYiNAJyFJJQxRAmdMenFkVK9zhzmPhR37NQ8pDd4oZHnBaz3d21JC7kvBjdefDgzLoxKWNn",
  "key38": "3pgPWiboiztAzF2cHtyBPT3hnwoeBERsuGvNo5ux5QfsdwN9msTMvJi4Fq3whVfQx1YfrLmsfdrka87VjFC28t4E",
  "key39": "48n3RHsV75ukDAMKHzAHRY9BqXeQMfTe9DaUxWvrH15nE7uucngZoYQy3JZu85NwpBZhWDBi8s3mXsmp53BxZzTL",
  "key40": "3npyyyo4avPRNje7HwHy3Y18Z6GBarqznvrgyx8442EwMkNh8911LwThYKmBLF5SU8RLEyULvK9UPnsBA76vQmdn",
  "key41": "32Tb3LYzpHMhUrd9uijQdM17kFzAAo7SHurTGucDTAMm2XXpCJtxjraJMjbUBxBqxxymGq61sG4UagiwQ5i1NRPe",
  "key42": "65hd6EKRjdfe5MEaWrB8ckHF5f6QAxLu5JFysMsG8RCQjMsLEKhqFi2U9DTztFMCL1F4mFpnbUFeNnG7RjWZuZZ1",
  "key43": "2TUGeG5j3FhEENFxcrextyGWPaBYejGPqb4etAWGwXRBnJSEjqqK66agK34YXJeXyTcSrqFPd1vY1MVe7P48JwPW",
  "key44": "4GD7jqZsP4rWWGLSUbPxhgEq2gWnRMhgJofiJx2wXczXAqriymdeW2UrwL71zxvw5Um4ay1UPpKDignBBzvBtH5o",
  "key45": "2sUCy2rHuL573wkwCvDSYGKwWVE6V4WQ2gTVLUVpTChRY727JVqSkFWxkp11RpUVwJSnRy47RNkKPYpRharKf4qf",
  "key46": "3X2WC3ZaifuvKMi6myMx1S2CoDUQ2GFVA2cMKAyJC1XE9NumQQv5pVc2wosEECAg1wSLzQwMx17WN4SmkQzEnAFH"
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
