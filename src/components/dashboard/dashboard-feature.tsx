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
    "52JAnrnxNKtfkL2zWZQaeJVNxcBGuat1a2LFbix3qbHbzzJNkmTcwFVWH4tMrRdsSdb5ZhairueJWchfvjgRzK9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wy4UzVr2AnLagjrWktW7vkos7jec7BN1aCJPrnh9arboUR3iUNEWzvQg8gU6cgVUcYVMXFPuazzoyLfJpjYAKCL",
  "key1": "5EiZ6Wb4ciSLkXqRv4gJTrH7t8X8r8DVQVjHduvLgExwLVd2acoVadY2mViQhLM7Qvg2pDfcv29XnVTSywPB9SSS",
  "key2": "4A5uZXBTzgc7BfcsmbafNgd7PWYjBFEZ3oMDCdrH3cDU4vNMsVi6B5spvaYutcbAnGCUgyXa9czVgR3hnSrGRorB",
  "key3": "mKrCYC3r4uvh7Fw8GBdhNV5XhTvvyT9uYhBYNwcmbxDmFqfXKjUfeJLD6pPgmHvKrR75WFXrvcsivLFJ8AqAzwf",
  "key4": "2Yuk7nA2ra9bK9QoRzbo9xUJQu7x1i9NBwnK5wV6fxouXcKx1zihAxgqzfxfS8MbGtAzg1Y3qWM3D4R6NVvG5FEZ",
  "key5": "67HQZJuGf4Z7F7rdvWidS1CQJYTbV4o41yGiNRjghEgvpic3dj8ngVNmALgvrTwWfuFjdyRdrr9YeYGRXBZpJEt1",
  "key6": "3qxMbrHqNZrwoQ6fR4WXV7nYSsyBx2C5HY8kg84fWs2zPvGYDsdB8u292UJQczCzD6UA6QoZp7CCDuorBV29ppJm",
  "key7": "4xaWVcsXmVB3h5o4rVDjVXigk4EKg7gxmJRrUfJmdpf4JQ6oMzs3sz74bAGpEtH1Htchjhkxa8g7WqbEBFWLBXzK",
  "key8": "52jofbiqu8WmP1u3wxSDq1qkTQBbvC772wFCbWoC1cBmix56oihY31yA9ZJqfikGmu78r2wABCJ7ovuU9TQzKP9C",
  "key9": "3JL7xS2jJ8v5jTEan2U1rqyX5k2MmU5DpAq2Dic4DyyQuimGLLxtX6bZETCZMirMTaTg3GUxQeNyjPTB1nCedi9e",
  "key10": "3qXNiny41XxZdF4LHMQPJXGxPxBgmYkCriuMEqopQ9jHyWbpAwQ764zGZXe59nEX583irZKBeaYxGr8tSEVTvma5",
  "key11": "3gkDP9P5xm93j78GX4Dm3r9kG289gPxieb5hWVTtYhZ943crFw3rsbJXSiJchWBafNQv6gnvwcHoZRX7fpMRUAnU",
  "key12": "24YRTfCNE6PGBYTeozwtRuVfBVpgNoesDdFkfVFSju14zjQZSj1ANwmCpxZUbdXDS9VvGMWyKai6eTAAVA4Kgko7",
  "key13": "2UhA1iwiiSVA6UJE99HS6LgW3cxeDPF4NEwXWxsKwkrqLLKUYHwH3jjA3s5Swf847DRVK1Vn6FkSiixQEkrt7KLo",
  "key14": "3wY4wVHMtcycyd9LU8pd7PZREWY8PTj6JWcNCAxCjvDaZEZresyXeKAubFrigdQKsgWkmdVMSFMznsH2u499t6RV",
  "key15": "3PoeNn3kVecEnQnbEGnDx3t5zSdYXcF3QbdEGtPBbG5a988UvXuFCzcN1x9JkbDHBw1YmJdLVNNndBoqPR5frtVf",
  "key16": "39F75SFvcmqNFoK7o35k7n8XKttRH37dzGSo2grUXbrziQQDHjgzHNuCqYNtJwM2TfzyW1qQZsJHivrbMntaeUQ1",
  "key17": "ZXL8yuV8TWKHH6Eb1TCmDecFJGL8fnvixQXYSKigQSb1CUceGqVLqJaUrWxqhcopnE6hVNYp1GTxgRDjCz8zgDj",
  "key18": "3Ns328LF5b4YNkaNVWJ8LhHT1vNCLzvsDRrLRjCJusQS4VNifDLSzaKhPLgT5FwKxAheGrikjGAH6kcMnqTDdCrE",
  "key19": "XQCAtzHSfzYvwxvuWAviCu2fCg4sLTgDM1KX842WDi93NkPgwDsgC38qhMWYSrNpQs3jQt4tF1QtHjYHoxWDSje",
  "key20": "21kfbYYUGQrq1GEgk8fWH3j5CpV9jWgPGctEzdrceYbRaYJXZX5GSBs9uSrBoE1cfqFoSp2w9ABFtsXbLR9Qr42F",
  "key21": "4sCVtTBnRGFGCeU2oq6qnDft4s5FzQ39b9kMNtv6WNTXaQbi27xZsCtxcmJkw6rpx69uJbRRUsVvfrWPMoXKqMwC",
  "key22": "ookS1bhoYY46pUFbrRYk4cFKy8QFDv4Nkp6DC66nh5rTLcKwDKMM4Sj2NFexwAPCfcVWJzMkQHnpA4Zf9V5XmHp",
  "key23": "FcLyzjwu8DuDUx1P5VjnBSvxvaFrKRCi9YtC7sxKnRAf2wLaD6DJGuNuU4p4ART3bmpByocryvThkGJcoVFV3EJ",
  "key24": "5NeYegoYQQugUVsNsiyVBCbtKBhQrFSCsyqHTVWyyWM5snCynf6WqMggD2bQ3NsVAGp1UtF3gpY3hwKNmawuskfG",
  "key25": "5GQMTquh6Cx44HhJNNSdJyapBXQ5gdckaGcjBYdCo3gMzPvuxEkgc3rnHVhTMtY1NAuDjadVcUVSgQsRbbHUyMJT",
  "key26": "2hf8m4HC763x4EUQZvMm3UbcJnFvUwJV6HN19TnZHngi52cyyCuRSh3qpVvpC5VRvrMYzeo2cTPzPwDHJm4TuP93",
  "key27": "63JZgNSNeGL8wcEkxaJjEv46SeoTmWGC4mDs1RDV3bD2vati3Cir4LzN3WYDTVALiHBeJJoQz1qatz7oJfoiqwoB",
  "key28": "3WESPnbZDGEhgArmr1dw9zxVEtiujmQ4HVarJTLR1mNC7Co9aPB6HfmJN2ZXbiXM7v41Hj8chGGKjhA91pCHaF7g",
  "key29": "Hqt4VM3kdPSwKkb27V2syjAtejEJGctHoRa5oFdSTZcZc38Jrd7ujKyPryErs1ARJ7VH3YJcPXbZeLy5yzBjWHm",
  "key30": "PKCttjvRtuNs8A2TfTGPbQruaWgBu1jaxzGnPs3HrPGanDJ3LMuKEaf4PbhN1TAmMHfXHVcwrbkdfK844s7fYb9",
  "key31": "4SpPWk5h9P1tSRs3aFAdK38mpjhnRDSCfLgnQnqXyqp8Lxr1RFnrFwjiyKNXR42jTBJsf9gLSoc6yZ74pc8fyJrL",
  "key32": "skx6BTuEpWVHiBTpD5ozCuiUYsf3LU7SR978tsPgw1qJeWL2H7irnxF21iHtAUJ9u8Q59pUVYrTjSbDmXDbG2Sk",
  "key33": "3dcVzbnrz7wqxpWfUDC9YCVKJVbbWqDAFcUV4DUEDdPh1NDbQRh7xp6v91Hj6NS1BMCuZ4RzXNWMHUqg8nqL85K4",
  "key34": "op2txWKamy9P41L1brMurpS8w136rFpC6vceBJSFqCDYadURYahojcirk6teqzNAbESpsTsjscZ3HBgzcdAfiKp",
  "key35": "66wywUYjEt9FZ2NZ36MQ95TryBAwPrhMAYoVkNpKBWzyc28Ve6xewudaRiiE178c6Mui1sgbnf3mxAyG6MDEuw6i",
  "key36": "3pjYb1RPtkiHH5LQPuRsbzDXBKRR7JpDX1ndx6YMeKSMohitkckq26LLoy8bVDJrHxVSGRPM3j3nuEWHrp4p6jZp",
  "key37": "2Y1xfJvCCe1GBgQzP53DZTE25VFVSzWT49BxRE7i4YWNi4RbQ5gT3Am4rWuYkwXrxnLPvBWurjVkYtfXwz6VyxJU",
  "key38": "3ULj7y5YsfZYU4Va6jqzfftLPkoXU2ztcfMtVAbLyiE8qTDqDAUFwBetmrYapsgzqikNcs3BghpUd5wR3ckdsMMv"
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
