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
    "2uzujYJkP9mkqszjnUDFD8Cwbev1nQoJTw6ma6LQtAtSpxmJcfUddsFKrXR2njJ7rRHjFhokZYANrLA254r7rqBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QbjBH8DCtqut4EfQFqXwCAHKcxnUGxWrMK62HEJw8bH6Aawxb5wj6bMY6QrfSWTf2wPb1v32Sdu4tWAwQxKR8L9",
  "key1": "2Cm9GoCPQuDrppR8tPciX3xFqAH2sF5gYhvfaNmgmKQxh5PeJAySxDgnr1YRjPhLNyiak92GwCLp939zPgbciQeN",
  "key2": "KEGFmr1AAobLPyfuZQKyzaysW6dAyyzZTd66679Ypa4TjHuzSkEfK5z1H717Kzy69QBLD6mtq4FnPR7rGshFC4E",
  "key3": "2wekfCbuCAn25AxTqXtorF5HEypXDgrqCwSmQ9yMUE7vcixHZkCWhJMbCTb36Df6Jwdi5iBZAXY7L2yoMmkN2VHg",
  "key4": "4k3aPtKdu75rvdvH5bsXjDsjGj9txDxCwvi3VkRnV49TCLbrM1MEWaR5MinnAmsfh3bMa1Wn1jfHAP6tcpuTyaVb",
  "key5": "3jLTon8BRVtNouynGpTkyhfTCsrZy8HxgXkdVPGQ9UE6g6EvvCJfXK3gXQMtfCvMtZFzX2gHDZN6ThjP6Rp8RRhm",
  "key6": "4XzjjjfsmpVEWxt5jJZLo4CwJufnyJX5tvR4m6jypWY8n4xkxzcpv75xCauxfJ7veH84aLQ7FGWQ7Ci66ndqKo2f",
  "key7": "5NQQQ4mSNYKTdA8N2QL7mEsoFaXDujVSK2o3C993XqW33mCGd5CWAAFmeu8S3RVzr6PwHXn3FVSasmcqx386wgsf",
  "key8": "2q4B7uTBMQxnRdTAmyYSdympLAjEWg66rTZkhAAaaKUmxfkC1XdxRCDxmPLh1UbHzFwidhbqNFVyZqGkyKfeeWyo",
  "key9": "bvwB27S2zRxjeFVWG4fQaHWTvR6eaYGg2axmLAksPDm1BDw5GV5TAUJ5hKCU3P7MuLaGDU2emhbjj7CCTZpp911",
  "key10": "4XyECFbaAWY22KnjY5jCy5J9WEewhoHxcs5iQ3AtPXjaGZ8mXN24uRqYHySHKEParXf8m6LzfBMtgp7VqXmQk5jU",
  "key11": "3ujaMC2Z8UKSubAaYi5Es5PJwqVoNHGzrgbQwZb8riSTZYYPVhwaEH8dj3FGESwxSNGXVoWWgtkbjf8RjcoMkWXP",
  "key12": "3b8WD3zC9UpFVS54x5Xc9KXKLUsVEWBnSYhKxMfBH3qJaTgN54FxXgQwFEt7gYTdc5ADgQJjga1NvwhqKonHqwHV",
  "key13": "3WydfYxJDf35ikb3MuzKwTNiZYsHuXTqgiXCcSD5JEr8jvz3v2vH9orGhLCfQi2mC7jBiqGMBF7StQwzi9LnqfcW",
  "key14": "26Xzy3vvFx83dRFAeNjHK6aymJks8jg9Hh6GyAF4LW8DZ4J3WaXiEmfCaFb62XHYJVkzsR3MpDDjLCKNsjFCSSpy",
  "key15": "66bGEekC8KeTFs3EG6Qc8pq1HTQi1Ni7XBLRgbKbQMbCD8CKade8TKrrXkFQJFqnhEznrMouxa1fgNxfLaMhi2SS",
  "key16": "4EDq69g34r5tJuYkGMdvJZQgftmoUnFHZjJc66BXKe79dy15TdAqnHQEsiUdsVBkdUsmfPspNtg1AvBxvCkan8w3",
  "key17": "3MyRdo5HsMrgcfc5HJeZg1p91UeD8RKeCTZCBi8x9yvTMJjNVHyNfZqMivdXyasqaTy9sx23piRFGPNrNUvQhVUZ",
  "key18": "5VT4E5dcUdsrRc486msnJEnHfYGSMp39RX2gk343pdZXHAw8msCcK9eh9HtGigsdyzJ1Y3sroaaPVYss7DNGLius",
  "key19": "c4TzpsUoqP74Duk1Tdsb3SytkDCaazdi39z1z2HXELBcGaoiBZKZMcK1CfWeo4HqW3nwKXigzaDMqj3aKCdHzyU",
  "key20": "UJ1Qmd1dBN4in5AEqxHckbHHBMiVPDk8tzymVAfzysA3T6h8EPa8vq96tdhJMCUr54cRPkCnoP1kxFusmsgNuqP",
  "key21": "sjWyaLxCyMVX3sP6zfsQxau1a6SSGhijfQDLBFxGaGuJkptvcLBd4zGFwdDzkW34RMKWXx7vDfSouqYMXfRNz7b",
  "key22": "rbMvEWnQ5LxebEH4hQo7ZnWd6VwHHoQJcE4ukr8gN7J7MfEBAVtjypx69ef1qQTUdxqfBzv62rxmY6VSLU3B4To",
  "key23": "5UCtsu1NJgiDrzUPBPvEAZ6bMnrXv6xkEKcLuFErSznVhXXpuz3vMKVEnVq7ij9MbpU2GWjsQ3ZABSC1Y9SRdCeC",
  "key24": "2K4E9eHpQa6HUSpfXVnMK6e64dF95yGb1FxT7H1WQx3sAQj8xbYoA47oGFw2vLsBNrGVb3wafxCKboXNRBH1oLbK",
  "key25": "3meA1H7gotkiM3E86weJVnWacchCm9hzEmo2pb3ZXF6vXHMCX6xELQxni4h88wYGsaLRPjUrS8sxgHozWu7HynFv",
  "key26": "4gwaWCD2BW7XWYtQ9nRu5cEHnqwZEhmq3bksBPGD2BTWGxQKk6qkg2mF6GKgehpdUngV5khgW69LHWFhU1oYJdzZ",
  "key27": "2TjWWxL9Vx5QRQn3V6McwCTy2KFgVRSV1NVAEfPuekXkNw5X4zGVszzHGKYYid6qrack7UpuwMpcaFbvmcxL4xtq",
  "key28": "Ba8ZxdXNUnxVMajFXWxRTFCTk1wp7hwPE24qxqyeFNse8YuJmwsjdZfUiuBSMUr78WLmoCusHnKDC6rHMTB2PD8",
  "key29": "4ZYgTe2HztBFsSeEGgptfkq9M68LXtVxKGEvTRFeNESPGyQGoJzJ9fLo868cpSPFNF1aoBi9hFmzNMaycZRtTpKs",
  "key30": "3xfp74ddRitwiJ14Y54nBNR33Uqowf81YfuoFrDHSrxt4hhaeuWJ8UrnVK8U7PPYvCByNN9vYWf6KFA1hEr5KDzS",
  "key31": "2TwcJX917JKJwPw5qwxLQKmDFrbVZcPuPo9BeyDJstrQjcto6Dp4rYEshWdvh4XuaDzrwK21BRHB3Jp5UR3wNzkf",
  "key32": "3TZX14HzRxWd5QqQJXcth3xmjFN3Bake1dA1C7sbAX3NHwVCGK6eCKYYsSZmPfgqKSh3QrLtamJzan5C2vkseEGF",
  "key33": "4EPGpGj3o6eUue4RAChP13MkmT9mbSBw8piJ7N5hT1je1uYxMyDowf4QAxCfyrjwb5XaJbx3X8k5Vtrgnv4cz9M3",
  "key34": "5aEquBgG36hvbgUGY77MYVpTZxVj9vDu4hPqxp9Le4L5nDW4N67Qt9ZD16vmWnyeDNgfy7keDJfMRM5LQJgZ8ja7",
  "key35": "5Nfaspio4LZ4wa3srVLDQM7juDoDJWqxgE6e8j2mWZAuqRiFAvnv9SkZrkKo9JURpDo4sn7B5LhZqA8iGMNDxgw1",
  "key36": "2VdeUUhGbHycHqAFqLcW8YxittPrnSYaw922KHHzSFGhpwurXsHZA5ThDegWEp5Z1NTNYYJFYTLgKuLP9y6HTJ5Y",
  "key37": "2DzzvQE1v6LLNsA21x9Q3QwatzrWKXcX1fs92h1CSJFBJkDjNfgnP359Q4Zm48Pa8p1pQqmEWTfcXaDajHUCnJqy",
  "key38": "2rUPEn75zMjzdfXAVUbxdPRjVHoYnZ8MigdJ1LgSRuK65ERZG7mzkA5GiAUgNhfrjfomgAuEve5tsmLaHLaP4eA",
  "key39": "3Whyj38vD4KabtiueA5G1q3ogLNiisCgVm3auzXXKdXrRjqS2b4R7ewdGvF3XNT84xpgU6pfQUEw2TKraHr1twcy",
  "key40": "5XYizFF5kfo1W68TrgqK33urTDXsT9KTCtCmATHVb26Pgjw2sK9yok9MzryKmAFQBhYS4zRM9F5gvFPSsxe7KWvy",
  "key41": "57ES5YuGjHcTrCpGjbBALmLquZ7ZWLHqBU63adrza88TCCX9Eqyf18ho9tKiXwWfzY5hJ4KXDKhkAXCvLsHtQM1u",
  "key42": "2d84gjUAU22jJ6oQxePsDyACZcJStWEAzMQ7dupebqBpkq1wMGePBSacyDCwyoBYM3HpEzpvcqYsX54yksigsnmT",
  "key43": "3ASQUEtvx7ZJMTnUGXg2gE5NdUSnQ5yySXd44ArJVUY12SKzFwFP7PyA57PL2XKwYLX54cJcyJHzdUH8QsS2fog8",
  "key44": "5f4UNBWhsj1romvH59a6UYcZPcgyjxRgv1aG2DxZSAfVQNoHmqx5VgFvcBGwijRmjPQy1onFuFNnwG2z5RoBsQUz",
  "key45": "3zW2gqhRFhwAWu8Kp7jkgTwojfGeZb3dquCxpqa39tJE2ddd4RjEefBaRmVwcuLrz8nYWmrZauPASZTNizYHWBrt",
  "key46": "5Ujziik2cBRykrhaEG6UGRHuLPrEGBN55coc3J3gyBj3qmbRZsT7G3U9SVRYk6UkueRTRCdL5fzeHAvSmkF3TnQW",
  "key47": "4bBjvKDW1KznCzNLo4i4DcoFtWeLL7VFjJtZD5ZLnKbtPwke3jThDUqmwsJScehYNMYCjsV8KY6iK7KqPyGP4L5X",
  "key48": "3jAKVTcQuSEzPat499m33m7NeZFrw6gA5oFwrjsFfupUq1hZGWAoe9Fb5FfD56XwKGsZbPG8pWpnz7Fv1mSCtYPD"
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
