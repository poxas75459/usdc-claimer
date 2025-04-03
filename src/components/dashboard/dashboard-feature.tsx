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
    "2NWbnRHEstqaaQJ3WfWj9HLhea85Y44metKn9PZy66NDmdrkWv6xFvxnDKxZrVTGeFqhe9yhDUHD4JzXGu4LmSUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qx1W1gWM2YgCzAqQvC8UuToEDH1dD6BBXKcmeCeA1E2xSugs2kUdAptWvNidkCjXVz6FhPZri6TgU3STJ89Hqgy",
  "key1": "W6qr2tP96LtttsDRCeBTzdvvBozEz1xAVs7REeFXrNpM4bbZoeBHcd2VEpVvoXWvSmm3ixn8psATkfp7Fn2itn4",
  "key2": "2KTKcoof8C7qnYt2FLcGUnrf7uhoZHaGDhxp5yhe8L51aoe711Pvcb4YBWa8WtMGZuX1zcihnx1LUThJMiCeyuWp",
  "key3": "2FM4odwE4VqPut38RY92njq4DTMhhu8fXQxNQL86rPCmS4PfhF6JVm5bBkRz7Ejnk8SoiL3amEWtaVDWQN2qnrze",
  "key4": "2aTgHYcBHy1KrnRtQiPjUpE5mtNT1Wpj7UFSXkmLj9EpppWusBmr54VKvAiTa8uavv3x64ud4U62hRq7WzZmeT6m",
  "key5": "5A66jdMMXBz2xJQPpF3ERA4xfgJb9oQxaczYu9LGcx9imh59DmFBsUpXZceDkgvsTVr5JeDigVxaHmDfSgwdfYvy",
  "key6": "Nhf1DqCvpDpppiocLXQ2ww5QGKv8oVh8AiwmRrJmmodckSfKhUEXmLTW65zephEprLSWFX7BVLXEKkw1cbVWPt7",
  "key7": "44xxyk8tHwX6SL3DeCEMxSe8UMoy5oDe7x1RupkGZZr4H8bFmSi6jn8LGQEDfLY3Kgf182j8BCtHVEcwWuNP4wwC",
  "key8": "5n356Ybboget8AHNZmyFShFajzdyhSWEXcd3zZ7djBXDWcgw6E2F9sQP7x5Mh5DqhwDxnMDmSgWteRr8GbRe4UGA",
  "key9": "sa1vUQLT9aBbGrUYCmxbuCWJKWsFdcnMsg5aSNCSHx4Gu8SpJnjfNjA6xWJnC2r4mVVkq92NzduKLEbqpqVU1E5",
  "key10": "2RiX4sQBs9BLg8sDxcRTvtj8o2VrBVUHNwgwE2sWQjg4cwYtbJAx4dpsju3fgDhtT39Te94ZdmPXJegkYrB19R2H",
  "key11": "5C9kRwhkD2v21atMiYrN7kiCVzg7DUsTY7WebxwZd5MuXGFTSBHxzAcys7yRTWYCxXMgHWWCqLqEmKWdJiCDJ8qF",
  "key12": "3eYpdu2jcnuWpBHRRp4XNRuXdNDvTy4A7TUqzhHztBC811sTx6wz6WxufUqKKiLdXdEwjVfHBDUrS8bvbp64AUEX",
  "key13": "s5oWz8KUDz7STgNfBap3GKYxahfGNdSp65ep6oTeme1ZUwyKSbWniTpsNLjxeR611w4XhcR1ha4qjTGxgUUZ9pL",
  "key14": "3wefvBRMwmeZf6KW1eoCZAotkTomtZ7UN2VgfUagpkNzhs8KDfip6yVpW3w2VVKSa4cEJRKrzdXjDvXZUer5Ggqc",
  "key15": "4o5Ya7onc15LsCpMDcQmPMxjeAPwmBX88QH7FXCQt4pC72GW9pdeFPDfFsxuEDx4YMo8JP63DYcPzWrs8kPKEKrr",
  "key16": "8bd18jm2LB3qRQxjn6NBR635qDhgqtKPFmPo7fdTPNuoVNMG9JsFynydSLbJBA6ZUdDBbbQeCoxqx4CjR6AdYEF",
  "key17": "TRKbUPHk8qbo4nHrP8yzXoMtbS3G9KbDfVzbFa9AftyKTPspUqtzdWysrmQSrBfgW7AuWcNHWA1mk99mH7Q11es",
  "key18": "4wvk4evyZjqBm5A32KKNbyTuZYdWrqLV5ND4CeFu6ga7Qt8cn9kaShVmhWaWc3swGxsUbmbnvEEYjm7Y2kscCRYe",
  "key19": "3JLLtmfb3HzH8gxaeoSYVCsk3qzwiqdphbd6xudyS7rkgWn4FPCeHGVDNng818z2mgAY8ywBWoKQtEKxqfu5Zxpj",
  "key20": "4PAdrbiLzZ7vfHsmNtdmxKVNCdXYXb7kXKyqR7tJ8KmfNmoMkK8ko54M9V3ioufpTPqH6EEU8HnBDYPVqBPjdpuj",
  "key21": "PfSraBSiTsTeWmQQipshPjW9gwca3K3epdnYTEFiTNCrLq2i5RdDXStfmu9xDtVBgdunmyGZ9UmdgdFxKMy5s6u",
  "key22": "4RHREn2JtokGNA322askp7bgnVstt5dryt7a8icbrC8n4Cqnw5xMNAWmvT68G5dBWnSA9GfHhp7q6P3hJa1dS31X",
  "key23": "P82itQXB8ziUyxoCFoGTQbLG6EnSVu28qi24UpPnMG57ThwUHdGtnX8Gat51FupHA33wXuEZraZfGcUpAUbcXhF",
  "key24": "4UhBZSwgQcwM5HQFkv85yxF3po6ZmXPa3XtaAJ8WUXCkUk7gpmFtU8iX3Do4Y8r5C7ARuAjqA1x7ngfEmj6JDN4r",
  "key25": "2G2zDmV2a2KyPNGAsS1tMPb48WX99aBJWQW4ZZJdgsPVXti3AaJkb1fiPsyEvXuZuN8yKEdT4i1qLf2wYWGB12rh",
  "key26": "2dS9yAus81fmSJhzY4h181eH6BwVcvVB12bvCZNMSv2QZM49heWrV9Ffa7BP49cX4wwVdroxJWLpojh4gVugYznN",
  "key27": "5Yb6fDdYYyAbGsD2vWaV15r6LsRQj118nD9banjRnFDqwaqbSdoZJz1mzA8BiSA6uffK8z5sYZi6QeEAXA3EVzgf",
  "key28": "2BxRh9Hgva1YGAPcS7fDBJuRY4xgXU3U4NnA13EaAE2e77BBBhLzuDdDL87pXNj6kVtGsRuDrKbcwogiFn9Tw8Ht",
  "key29": "jnxuLtVr66XupUNcavfAiYKBTyp9dYhayUMvYYMk1gAc5Se9WQQ6uFXfoxLgmJ6Esfrkba9ebSCkPcDfk9QGA3f",
  "key30": "2bBo1YvczvwcMpRHAZny97QWoai6UZPZg197zePDnq2aVbox47MPcYv4jVsR5BqXnPNXxDyB85NQCTNQ8MR9taTU",
  "key31": "62eNuuCxxmqUq4cxCHbKRUG4K39YAhNoiYMCpPt6tNwHhx6BzkzbiBFr7r7WXFxiydJDdX9fyh6cHe2QCJXFmUB4",
  "key32": "D2MDbv8fUTgQCVb7XhdTrbQtUM7A8EgBjqKFg6SaL47qz2Bvsik3fy4JN47WHLuyrJ2bQhzRyDKZ3nkKnmyG62q",
  "key33": "2diCaWgM2tgiswf2mqEiaNtpGbdkoCd1oPv3wp48dKBsbqC9FCkrEw7krc8kf4KUYoHDGKbC3BkKdhjxMemJs3JN",
  "key34": "67MGonjemguPCKNmhJEFBmkSyxAcPRvppoXMiwTKBB4xSiV1DqxooPx2mABPVa7PZupHomwRawAovDRC3sbyCJAX",
  "key35": "3qYK9oF7o6mv9pg3QhbcjnJhJ7apJY5URkhYRDm1GJHhQ7aKi7SKgQXb5tJwyLbivixstVJkeBdUaVcxfDxqmPxY",
  "key36": "F1GNz2p7Wns1NoRxf2gMw46BE8GUzQzKWBDFaA1K16ygtFfcayo1zsqnpZvQvk8BiRVBaUcSm7Fkv2Jzs3TyBVW",
  "key37": "38bshovpT4qNhGT7jqqaqXR9AHqr4MQRqA3NiKUmJfWYBP2Hf6payWBJ6bG4fW98QE7gY1kJRi8JTaGyVARaui3f",
  "key38": "pPKuVBpY7kmkwgTnQnfJ7gwDA39yHNkPvS3YY29UsPbgLa9yk2LqdHJ16Q5x1yNJEnL67tZhJGz9e2qVLwSTPs6",
  "key39": "5QsV54868niiuKQt6AMuSLgHUqasYNj4eatmPjAGoKLeqpaSV8Yj7KqhQu3FvUurzJtqfjpjnnYwtQYUTWCNc8o4",
  "key40": "3kA3svG4av43odakGhYxMrnPsTzCt5prmHmuBP3VDsBFNQxZfYhzg81t9N38QexDra8itxbnSEYy1jxLkgMZtMH8",
  "key41": "3WoipHRT9huBweiguGbAAQTTmaXWNXLNExikEUcCdbPyLjmw5fs3zkLPvuoVP3NaY4ZjY9g6qUBkRyGG9Df6dSV",
  "key42": "4yf75BJUmRCy3dLHB4j7utG8xREPatboFRs62vQFfE2RpXkUystjNy69Lt6gVTYWwY1KzcaHQLYmKYqwEJhwK7Bq",
  "key43": "5rgTFRTU94VACxaHjGVYfRrdnT96S38BVwrrBmrugurLjirpe78SGs83jXj8JZYEaJ86hVvznQrLDZWXpDMVmT76"
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
