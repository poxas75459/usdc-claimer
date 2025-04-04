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
    "zgwmnAfFWFrK1tFew52qstm1sM19eKxj56CNY6p3kVTd4eyMaLhY93LvN8DyAEGNjNFHMVFgmvdh6tDAMufpvM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29hJudEGM7Uxk2NwWRHHg5xsz5aBV3ArVoU1aUkjvh6xXXWfERKQbMjBkaMBLVjeD6J8pt5A6ekSW2pnxuCaKUHt",
  "key1": "5cucYyBE85LjrTEiXxFop18zyFyWyQrQp1KRJGzokchETYpgGGFrTdyBUvjVjtjrVtbcp7rjir6NyoSZCLxG7Moj",
  "key2": "63B4oF68jTu7j3L6JBtDcsR79o6ohHjyCCLQku7ofeZMb39kNoXFMYE9SRJMBhKqPjTrDBVgjtxNXwjQX7jJg8N5",
  "key3": "31UVqFTBGZBCKQmTpHArbT2XA36fKR9oyHmRTekHC9c5GwGzNYm67TnAzFR6Dj7bYBiQgWDQYAExPXb1tCeP3kRe",
  "key4": "5R6bdzmVL79xS8q6yXDXF2Sz9FTmEuaKvomBZDXHPc9uercRQWcKBacDqHndDZcmCEyNABDryhVb6R447KVvSpPK",
  "key5": "3FMwCMDsKVTsLCteVgn8obfKXAhetxicRW32etMTCAqSj6YPsN94y9xuzpNR7UdLybktUBM65PW9vDmumy6oLTfH",
  "key6": "3SioUcaBLuUrDVtGxzk4Fy15KYoUS5eArC7g51VBb6MbmwEnoivMPcqXH2wyjxdETcUcTqG4v2HJ1V5vrV9vh53j",
  "key7": "37X8wvWUCbq9BF5nEUFgrs6XTE6kpf5H8wKtbnfCLSoCXtVem6RPP7UNjr5e1zkUYEmMGuwtzQGW75yHn2tWnAgv",
  "key8": "mavB3YvshpRj6DZUjZKXpmX4sAtDRvFnJSv9zCJGHdT2WXafu2UYNeNHyAmiBj5fkKWPZG2DA1ye6KuRYaMCDtL",
  "key9": "3cBhkEcZfEVZ69Y9QQPrEx3J6poiKA7MmzmNRUqfn2naGNQ7tK6zdYGLbH7Xp3QtHZYzT3J8dVVnjv5VacKGJn62",
  "key10": "2xXUfkyyLq6aj2Z6BoLZqmWj9ZJMBoZymK1VPP81ZRnrvDw1UBhvqjb5KmQEiLW4QLn71cXKJj7xW7X3P8X9Y6vK",
  "key11": "rMLaikjYr1dMVEEJKeoYmjeFYzA2yNyGSk1t1pEAi23q3A7tPMriXriu7vZ4YFvYAZ5yducH58rnRkMM24LhqRJ",
  "key12": "3bxAH16ceBhgdtiDPUqjeFtCfN5QKURgThmGanB4Wb5FhooK7EXjFeff3Uvfs7iMND3aBYDhWr56HxssMtGiSKbs",
  "key13": "exqP4VjsaymUEpbLoansjsooxYXzsFFgZo8ozqVnznpAfGoGXHVMZTEcCDRcdiWzXuscaHQxUHqaHU2ytTs5UcH",
  "key14": "3LbYsQft3m7Ev62h3gxEAA2FUPnofkDTehvCXgaocXfoFzpkYN7xkUUzREB2JosPRHVpb7HSiVFCYJTTWUtGq78c",
  "key15": "2t3Tj6hDQF9oHBkbupzUrayHuB93gKFWZyNrpQdkq2zRc5UwkWo4VBryshBhLCxxXQRZPhy61nuoCBSmfE9bg4ch",
  "key16": "4Ffs7GRhZxF7uWiZV1BEGCf9p6BtA4yWhMuRMWMNtYWuw2MZnEMxbqxVyqEXjdfQ1sKvLBSpoxvcNz8JJiMAorQG",
  "key17": "2HzCcSYYHwZfVZ8Std445Bo2YZWCEpjDdX3Zj3AgVK2Ax3VDasAx41hsnMnFD2Mah8bnHTeoUmoHbEiMTXMBs4zX",
  "key18": "63igUKF9znhKFWJyQ339YevnF4wypGqCiSdfdGgzhvLaq4RPPN2N5Gxh83U8ndebnrtNvjYVaE7dy3KqN2wKcGQX",
  "key19": "5ddfRV6mDfXt35spE5YHsAWgUtKfmej6DiVtT94HUDusDpefe68zUJ2VBMKToV3yoENqzpWcJjzCzLatDWLLREW2",
  "key20": "2BS7xd2W6UCHjt5icauJW39dxDUG7V2pCw16HNp68hBCj2Grp1pV1pkCEJ9LatnSL2L99gbXcqbQXV2Z5mW8m56Y",
  "key21": "5qmELA5ZbPYbh88Ejmm9p7nYx2tK15B39txRRxbPhtPj7mjH6ZXazFPmVJ73MCGRtsMm3iFY5AFw6e2A15WZza6",
  "key22": "2uL41jnYczjh4sC5ddgF9M5oWq1raGJg1LKARQAGdB6KHitsjr3tWL2G5H4peDcJyn8FQz3Yc9xgDVRHvVWys3s9",
  "key23": "34z3gCXyLSDytm9JtoKcjYzFyN5KGzigw7AoxkQ4D3JReP5nYdLoyh3itV5hZKUVnKL8HmP7pZcAH1RRBoLjJD69",
  "key24": "5hauCTGqASdsnCGu2jB5eezSLRN2w5cYM8BBXrkGmzvh9N8F5LwaWdLhuTAuZGFrzXD6VL3JtEzSx5ScAoZEGXN5",
  "key25": "5zZUBTBtip2LQJ7RXFmjRT2hi7bsG8biXcU34kPZCbGGVdM81PLAR8DnAUwGeMnaX2uZntShEDwetsMRo2vWzYCD",
  "key26": "2hD7V5yPbmkid9RR5n3PCrhc2Cn8RrDsqKnotEpJvhVFCAfzXPQREuEpEQ9zociJvDbTQLaN6G6yUYfYtvoddDpX",
  "key27": "2JaAMBXPYypU5AAMuBEELyST97j5SsUBq8P4d1hszLUqoEBxWDUWPb1k6E9jUYP1djV7HJyrcYHfP4uGSWXzW5Dn",
  "key28": "5suJ4N9eTvhxyX1UqKb9nLvixHg8CD8wmJ84mFVAw7Jjxf468JHhtxBdtp19vznDgGuNAvStt74bAMgiDkAYUCok",
  "key29": "4JgtQ3KSRTWS8LfYghv6WN9HtDth8dF4AQQsgLqMrRCE6SabBwiB6FMxRecyAjqHYHS2hpac2FH23GKRRffo9GDi",
  "key30": "5nT1R99BZm6Sra2qU7oo7MTUXrNVtSPH4DtzgVdSAryRBKbGdojVvmSop8SSqQzzwS3DcGxXkgxv9JVAbYKoeVVF",
  "key31": "4k3jvWS7Dp7gaHvuEpudRR5twq6d4vRg4jHpw3TQCKFnHgeK2ecvr174uV1yCUp4Bfq2tMXATdrD3vn73NNpwtSX",
  "key32": "3narruUYsCgY8ZhrSgb7CSqWzJMVHKkDuLF8EdRSu8jybiRPVGMwPZY9xam9k1WhNFN9iLti3gGeu2Qj2ucWZxhm",
  "key33": "4qXwcTpVwmQQHE2piEioNBBZCRiGYKa1bPyB7UK3R6ajEyKEPWJLf6R7iYby71L2GH4pxQ5xHSWhFNStwWoiM3SX"
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
