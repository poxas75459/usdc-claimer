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
    "UMV8wg54EdmnfL9nbiaeUBGPSEtRWsZo8A2zEpM3CcaW1ipEyMQDdKeyEfiHvzz2eMB2ZJLkwmoBeeqAJAvuz13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nm8GMCjqgns3f9zoxZCER6ET1G73pEQ5B7BfNyemu1ngcW6T7woifqGPfjyy4GWfoMWvXu2dN42f1AKTtJUi7TA",
  "key1": "4enF8XvUYH5c22bymri4vkqvaeDrznftdEnA8chX8yoZf9vuZCNyJ6CfugTh3SMFfgkBGv5iNkuXL6wFijsMXpL8",
  "key2": "3SgTh78U8SemexJnjyQKR2Gd7PcXE2JPereFpe6VAxHEW9T31fT5k9hFffA2gjUhUJfPHsy6jbd8ononBgH62RXY",
  "key3": "4X5UPGWo1EU43PcGaYJo7YtRXi5voASRyeDRNTRStjjbQZ85jyncvZCQKmhRCSLyaAjYQzBqLie6ajEzjTumWRpP",
  "key4": "3DGECJg3gXA3bmnier2knP1p2ZeXXudJAhF9FBeEPg8LqMqfL4YkhvTS3XYiEbNCAzk1tx275CsVke6PNR3zLPew",
  "key5": "4zEJ35UApVgdXMKNpWneRSw92tYczcwonNannoTEscntn6zEPiBJuaMyvhRh6Tr1cEVwewWQrwRgLtET2pAECAiE",
  "key6": "5FFLGdJ4aRuCRacz1zaE8yawmnLuKPHSedCSgg6HFysjQ3QXvUXzvhqZ2pu6RPzFY9d1UoArvyNCwU6MxJH5GFLX",
  "key7": "vrjEHNdjuzTH7CddoMTsfBSjZRMjbYnCRehv7bMvHBHwZfEZGxMb3KCXBWG412xRxpV4kDYU3C4ujMtWJq8NTwo",
  "key8": "42xd8r5ChqCAX9SYBM9oXyJ2EXEUqfikVtkNQGbpx8iJS5CHFAS5LGgTSghsnPCep7dehQkXxyJrJdfNwZvxWW1i",
  "key9": "5ouh8gsxXnsPERgQCH7kW2Nwhpdj5N2YC6jmVCetc27zC2PpqZTfE7XQTUbGeSeJwohdRQn2dmKN816fZcdKYB8C",
  "key10": "2Cu6QGadhV6hzmzivXtDYYdBFzFM6YgMv2dYN3d6vo4EZqfP732SZSbJEtVMrhbYqvuaBPekxiZ2NGRe6zbAx65M",
  "key11": "3cVJHGHrWNQerruLBono8aNnXjz1k6BX3qFuN8iaxovXk6TPUSk9n2WbZcXmyKSo2QjvZCBHmQWkcsjx4eH2GKXq",
  "key12": "42FfWFSK7ikweA9yBbn1PMqCZRkbBSDvLgDzL9j7Cvoq8u5MmnJxheQS7GLkLoz3vBzCk43LuMQDtCqofYskmmvK",
  "key13": "Drmi5ncibf3j7fCpeNwoWatRp2up7pGtVquhEXNeABVDcT2HB8g3mA7ekGynTpGV4w43Nw8GmFYpswZWqmyW3Zt",
  "key14": "5MP5x7GsvnHSdTijoMrGj83uRscUKkhXMCg9HFCxX4UAV691MqepxdUSMewuGAqq5XYtuiRMe9wGbEEJtTFqQ9kU",
  "key15": "3di4FFqTugZqAG65cYskuTpV1iFdxAt7sfe92YuHamR9N7dDopGXDXYHe5Wj5oUBNcXosBjMYUBCzo6EHFarx8HU",
  "key16": "2R4Cnt5pPrJR1pGf8teTq1t2z7UEuZGZVavdeuJANcRkH5Yx2UZM77CMfKVo5N5GsNz64A5VzwaKmFM8XUGwpRJ",
  "key17": "2jtqAzrLUatTQfmWv3ypcwfKrthz2DSwMwCxixyMwC2j8QbN38oBpQDXnPca3p5VPMwg2mTWxMTBmRyrVMnG19tB",
  "key18": "629s7TTHd9gk1NSg8gyv3qDmt2FRaHS7TQsLFd938bxFSqeo1qo4gk8n6meMrR3PoRNjj5hP4xWto5dKHtfo62sf",
  "key19": "4snyKenC7gHaLmmpsy4eVePMywq4AP5GtvNC3wohozeZtFXAVbqZ9FrpPhkDgiHzPMGR4DwtjbddULEFzLWVCwTw",
  "key20": "3ZA9sQPbXVzyfnCjNGS4e4Ge112U5k5Jt9NzjJnGVZtH6shD4Ri3xW2ybBN3SCDfsSfwxGZzvJnt61SckiMuAuB4",
  "key21": "5rq9rpU9MT8qiyo4oE6LEF7RXPvBtUaCjupLNQDojqHasCs8s5cer5WyT7E3JiKqZwR6iYwTnnbKU1xJ8tqTn6FZ",
  "key22": "5FNvtcC7667VjaxWXQyGK22j74rMF1KfQHHjbxKQt4naNLT8D1SFDmxWdaEsFepgL2duGREUf6wAFnZ6vd4qKCXA",
  "key23": "5qWQJBj1hSgsXhEPTVWn1hXYPGNoYhwBVMjhVU9tow3bHcfs9UZyWKGDKmrFTKe6HxUVtQGE9biAZ7Te2jLBVbyY",
  "key24": "a6HMb18NunQAxD6s49cF1j5Kc9YHp7GtkYCpxme4JPfXjskiWSmAaPP3DUjoJH8LUErcUVSoV7LVSgV5k83x4ny",
  "key25": "3VbzZUfYRFBDUoZb2RUeMoTnY84NGk86HBAMcgmhknqcLdo8jxMcMtfJTX6Nz4Z7v36unXLTHSTWZu8xqKsgcbV7",
  "key26": "61AFcWdnMsAHcLi26FmaEG7hN6RKYQo7skab9conZZKQDeowHU6QfuhX7ryoXZsT5EdnXRgnFUiz9ERU5LACs5up",
  "key27": "ReUgLDmGe7heuD9WjZGdczCh3Fp1feDz13sD48nUgqSQsMGN8rrKexnN8aFuw6wd1fmgLDdGDXwebkag5fC5n4x",
  "key28": "3MWP2nGHyERZPMTJEhELSofQgEvCZw3WbGdTfua75u9icko2YfKxCJ3FDuNHdvMThR1vdjaQMppctNPpEDnBX8ST",
  "key29": "3p65MRQ3VJ4eJ6reRPCXffQM2b48QJAhqD2q236G7n6W4yeKM8dcou3adCrmENf9hHcQvcBCVbsNfWtx5qCjKu4H",
  "key30": "3tahifQjDrgxWz8ihhVnhofcuFQpn4TQQx2RWQdtEW8SN5zLAAPD6DKK2cAiLZRoqTvgseN6LcrJd6ftyKuwtbzn",
  "key31": "3dvL3iKZiwnNSvXmFbeFqPDPsYZrwTC9N5xwxb73vQMWDuUCRerZGpAkAqiJ6vvwMU9UDr5rLQyAR9UVtNXv5LY1",
  "key32": "2nsSdNofGrC7ygZ8a39hijoVA3QkZ5FLJRFGu22Q9Qq9VFJH8wG6EGU8L91TjSn9fLsidvUxD8WDopUkEtjTreGG",
  "key33": "VGmVaEtYbmWyPGDSryFtx9S7Az6tt6VzxsCmRynYsKTJoc8vE3DPU5HxvmMGPntJyYvcKS4degU95iWzJzEH5w2",
  "key34": "5Vqs3FqCsVgWsquDd4jX1HnNELP83hundrqYoXBsrbkuy59FJZ22zputwv9ZSDBhef9mvUpSedi93oJBj23bFqUu",
  "key35": "53dCV1WRf7qFMpYbuxxgCKskSMK23bH4UourrKqG2Wz8Nh3v6xiyoFSBw9Kw3X2i6yZjJGYTAx2av5PzBwPDfjiQ"
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
