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
    "2HWqXwJCpz6Yd3rPMPWatfYTuuL11Lh7T2GrC3Cq7hSkQFKNFRdhr8eGYiyrYZTysx5RN1z6cC6j1eEotDCtULFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35BNKoWx964b1C9CjdhkuTc3rPdqnhVMtstici2nMfGWUhE2vNLfeCZczHyhdt26es5fF2xZWzHMFuqSfHndH5ef",
  "key1": "38hSwTfEM9D9b4BtQRWVX5GXRXgoJLVbobTcY7WTSKFuJJ2T5gvNvaG6q6zUsUVsJMPeo91e2LiXNqW8SLjDXGLg",
  "key2": "4MJ8sSAdV1SiQytmS9vLCVmqYxYFpFUtKCfusckvTJoQ4SphYPAKwzKhvmjy7vuiovY1kzw6gxRa2jRBgy87euHV",
  "key3": "aM843PrLiZGbyHc9pU2E89tPqnFWQF1fv1h996szujpwQHuXb7dRFp48mutwKTLe5sugYhqKExbTVqr2GLVPbci",
  "key4": "4bqMzchAVvtH91GFouDWsQuvpk2R5KCBijpwwGzo4QPVgwY5bzaWHo5C8QbaoWezz3XFBvVjRYaeFEnksptFHccq",
  "key5": "UXkN1EzbQ4MqWLr5KM4Jbu3GXRi3R6TKkt2eAzRd3yQkSoae2TuXuPZXJZ96ACwBNi34B4YTSj4f9xdbemBp5GK",
  "key6": "59GhGP3unq58q3DiU8XY1DJfEnqFagKwM9zv7ryKyhH2p5iSzpBetq7Fuca2oYpRfAi9HEQafzASZDo1CnvAYgK1",
  "key7": "4dCLNpoFhFjxkS8AgNe8AE55ygDRvwtZAZBdcZr3Y3Vgjeidppb6ssaeMvydjyMhQsZctBqKyYHpFUmygPzySSkX",
  "key8": "4oPdbrxwbuoEMDWn5c1N1chVd3iT3KhBKQomXWXsejC8s1FWsfPfEDwZU7G8xgBrgjSxtmRnCTwR55yTv6oJVeee",
  "key9": "2QHsofQstUK14V4prm3U4GyQdnvHqpYLDXqTLHHHSZPkhLY37MAQgEmA9uBXT16hFu4YULBTudsaZF59fx5dYLap",
  "key10": "5zb8jCMX8U8nSVb5aaBZCRBCDC58arzpUhcSzF1kvi6dsQf91v9wio1xnnJ4fspsWjne6t6d2P8Gi7aeemgb79aH",
  "key11": "SEPaB1Ct5SfPD3uy7A7e9vmWHSipGRtvShXD5v9on4jyGDY5PppsjRu6zpShvSMjYdEdRQdXZjCP7ix4R1JE2TP",
  "key12": "4jkvuZ6a6e3q73aFAsmJgpDrVMnHbFeTRAA6cmszLgHPFL2SLNsAAz9XYNxGmexg2UdBFmybd4ZmewPZ6i632Faa",
  "key13": "5nvZjzoYuhF8GAm3JZbm6SzGNzYeD2svvR4gh8DYTgmFoUrWbtJEKeSPVK6yhQCYrHMEbv9USgNWVbY3gHg6KaEy",
  "key14": "3sWNHaNS4kuWzRUuwRmR1ZNYYHqs9nCFs9Sgf7rfFVf8hW9Jbac9bGykXhTwdx8sWn1mzgPPoJqMMANoy2jVrReR",
  "key15": "mLrHwEsqaNjA66rDUWbh8zBRBk528QguzTntr3o2rpwoZeSCVGQrnmaCTFP13EiMBPC9jSmPWrwzihKJtTSBsGB",
  "key16": "26BbZsf924R4iKgSvhHKaCdKhWEuBeYinw9YCaZnduoHZaFnHrQowdZRbvV8nWhXeSt8cz7z61DZsjP4baLaBT34",
  "key17": "5Z9AqccbCf5wDE1mMRHApVQMC6kCidvgBgeXDevPGpTVHaPGT1gBzLmjQjvA3fQAjWTjsxsM5WXU43UyvsZD2284",
  "key18": "25iZTd6xr5svCC7tJ5iSJKTpdi7L7j9eg75p53S5TbTB5oqfewu2TR5Gw2y2ka8kZJCzQseS5p151YrZ1rYUy4pq",
  "key19": "48E8k5M7KTMivv9AjW61K5BW2EYkoVra7ag6nEbJesTSejiwNLJn4erJy6DpdeGaxMBwYVZpYScMrCqddWLu4SkL",
  "key20": "2daq2nF4EGtpGEpgg9tgBJuXPk9DqGV954wcSeRBeKifkcTAqEk5k2avUribCWaeKwU47k5cxqMGUNwq7mEaKSD",
  "key21": "56qQpRT1FCzQJjhArG5tnWTWQHBkNDaXn4gFUCfMZprhHuVdy7D3fBsHrpS7iXEePQ9a5JoaEpTU1p6cX13QwWiR",
  "key22": "62uVcQWTAmFofQ8zJsk7H4tzPvnA18P38SS4H63h63ZxeWpYVtQ4VfLzZm4Vari16Mc27EnuJs8VNiswrQB3wQY5",
  "key23": "7qt5763QganLXbETxkZ1kbT9DqWeGTg6Q3To7kWnJ5Xdv2MKUMLcKW7m6dXL8ykiXJc8qg4aajmqivEeQk4qv4r",
  "key24": "22JnNhs9oNkETNmMq6AWnv696xqiKd8yfe87TFoJ8jw5tW5cm3E93e3hux69a4d9ujtSgDpZAkrdYEPjjmtYaqNf",
  "key25": "3a4QJK7wcCuxmSMSM5zbgChghPsqCdUS42iR1s5hqJJbPN6E2RqqpwN9qpaAsWdbH96EV48LVtDqat2bZMwuC2Dj",
  "key26": "yudsr3ra5KqcHskBtxj67wTGb3oxkG8sSUBcNvkrVmXqXgvzARNW1uWVGjCTu3sScwugY4WztbeQ6qpUmMbELry",
  "key27": "2ibLXYsf71XPqYYGRfaHePQLwC8g96vBDCroAU4Tjev7gDnnKz2iztme7XoKY5TTpLMbkq2rcG5nU5Q6goTuN591",
  "key28": "2umDoYwHs5seUrbSV4x9Lq8uRCSsAqy89n299Tf5aqDz4L9DWoACKZoGKfujyKLpmk4naAioMeTmGQRECpvB3XHn",
  "key29": "36kxEt3xY3QrQm7fxGeavvQagezGoHjh84Af7Lmv1xPf8um67xZSticUVzuQ4TZwvf42Q67DurEPpPiP4ugDs6YH",
  "key30": "4M4JhjyHtmFAwXug7wXBiVX137UivLMcVyer87Tcoi6qqpTP2Zavm51V1ipaPeDp24iBgnRkLJjrPBbnWEkVaXxS",
  "key31": "54JUaHj1fp58YLrdvJUwYbWabQ6JBNy1fwmbDvZD1guomsqtdjMKEDgDn8i8k9oHrXgjiTjsz5dGzJbxfvNCo1Mk",
  "key32": "hjj2WDFXT1sFie84r3MjQ5KTpSDpc5xKGG7WDsChxkEdiZxyEGgax5HQWeuF5fnbswFETt7NJKPdr1VD12N94XS",
  "key33": "2Gp5zGkFNPHfX2A5kWRUYA22sJihE3qGv1CyNgqAmG5DrYs8PE333NASHyHj5aa7jfQobNJ68YFdfUEppmfK1rd5",
  "key34": "5xa68FNbsvK4rquYnzUJuNM648RzFWQTNNk3EdXZG4j5dmxTwXJoWgwDxFH6rT47ffGZ83rneARmJN4EzK82kBCy",
  "key35": "2qPJLJeGbAD4GPwsQtMiJYuoPrmgcw1GJzFo2n5Bu5q5WF9Nawzbdkc9a3ApwuBtDiYyTzDNjAH739k57ju6bpFP",
  "key36": "3n5B2n34KupCrutrfcWUNPMw2dZWotTtbwN9pFwAfmKZ1w4T7pzTxqfzh5FWfLo9pvLTeXQ6w8Fud9fuS72xPr8j",
  "key37": "v5htS6BeRukS1sgrj2w9oNjZXnx7TrAt9UJDMtjKomKrQ7mBcq6a5HNz9fxEjg2kfw5FNQc75nJFdcGPPqQKjuC"
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
