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
    "5m1MCmfZYHMCmjzJhgHjJP3nCf391Dhz4ZQB6vUyKdD6S6MGXHYx6R5Rw4T3b65fw5c21PUM25kthdRN4F9fotMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "365T8WX32oSskQ2hMbQHHGjWYRWX2nAnDrCUMs7fYrjeK8W4myPTY4D9XDyTx2LRDyoc3N5iuyGhDu3mdLajUNFT",
  "key1": "3SZ1MqyURTTzBcPzamKjek2H2Z3GT9jhxfRFQgCTcjQFQ7bgg5SdzH2LXN9EF1EQpG1AoBMj3EhNfUDTXoSWhU6V",
  "key2": "53UhZtY8Y3b33ZUwajMg2AnYYrkQSTEotuQdzy73upZzoAKWS4LUeTQi47hzFxCoof8NJnVG8Bzwt8aM5YMkqm1y",
  "key3": "5oC5VmccdbdTMHA43hf2Q4wjoc94xi5MR7R1WtHrCavMShMerfFDvBQu2sK8ivmWZDs6KMgdeeDuPA6BC2tZe4cH",
  "key4": "2NQzjAdn2bi7UwqNvDT2e9Grd7QZXTfUkH65rSLhrsXQVLhR51Ko2dCuCiXf8rqF2TZZ9RCMvYF1fN1Bbpm5xjAE",
  "key5": "2kuDe2CUYKLMnsrcYXeQr7eZ5wBj7AKe4cs9EmqVkJmPKtPCABrbr9ypjNtwJr6ZLTVGoA3SbAvYAYFxnJS1r5xP",
  "key6": "2wSHYHuhUCwNsvfxToAJoq7J7DNNNiiM1divMFb2HPigxTq4vXnyNtbbYbWqmduLEpz5g6npNVDgKS9rztoWYDxb",
  "key7": "2NzEduY5tAAHzesuUegn6HeHY96B8KZbrioWvZWW3wqMNTpWMVjZzFg9pxe4M5r3vjCsFymQet9gcSRe8NXoZF5P",
  "key8": "2bhxpZpfcWa5hiNMzWbaXJvH3f9sM7P74bkkUmZqRo15tPuJcm4pdF2rGkRLgxMiZskHjpuTt21Ldst3MZiAJH3L",
  "key9": "3RpiS5mSb4ujdtycRVDHRCpFbiTR1A3Bd9XvBXCGSge9m4EGWdV1DdDHR6WaRE6GgN1zDzGD2GfTJ4J1WbZPtQiV",
  "key10": "3oZmhsfQrvBQMNa8gAB6pRiZgJSJsdCPyv5LN7h8dqh5LxDDM1athHXEKd7GARtGTk78VAPd57ufiNzsxSdfdCk4",
  "key11": "2fBuh9XLWQ7NN2JdKL17jTbGhiEWpjxrv28vciP945txmsC89KVoqGgJQzPYBjoVmYgJyXS3izQVL2DY1TM4uFet",
  "key12": "DEdmRz6Emw49zwWHxjQtSDS7JewUo5i5CmEGFvUXCHoewgKPFZTsEjbsjLJFfGBJoGRThtsQaVYFwXr9NfX3Ev8",
  "key13": "65fjTTPakuvK6LN69VdZfbhaTpxWYeKRuRaEZFuQnWRmefTZNRBNUevVVTzbmksAiw7Jefir5KzWqcPWrGFnZoHV",
  "key14": "67JGks2az8wBTSynPC8hsNJTaDaeWVRsDWyEUsn4JW8WzJ9zcAtdGkgdsGgiYBpaocWMBL7mEzGv2Mhtq8Xo3Q4c",
  "key15": "3AM48Vrip1V1Y9MnszQ2f4mTkT6ypkCGNkBcS2ZC3Cwpr2qHw2SwyXYc11Ax6kPTSV8SXkCLWVF244f3oJREYxzD",
  "key16": "5s3eU56sERHjqKyxKfDuDqTpb384G5wTL3LZZpdRV8a4epJjCADJepnhXFVkvnAmJYep6LNyszLoEk4genQqr4Ct",
  "key17": "61Aia6DSgyoeQYr9vnNrZCnZXbcSkC4TQm3rUWmY6jeEG3sKfpYbCurxKUguV1GnoXrKGHhZQZPVfCmhMypVn3F",
  "key18": "3kFPXN9kL2qETeoTamA3MUNKfiwnVcvEK15x3sLh6mWXbMb1hWqwzj1FT8RDjZ76G51MBd7DFTiiVhrRt4qD3JMh",
  "key19": "5eBzsDtiXXyc8Dt1QFGMJ9VxRcJYPz3y5FX2fDWkjCcokvwssQnf6xLcridUtNEnFVdpKBCG4k5y9xEFLKwbE9JG",
  "key20": "4VDL6sCBmxbQPyvAqgyZppuTVzxKXHygzU1e4NjCHcGUrhvyVhGk8Qbi546BuNkLr9L7c5GRCMpGYLgHFj19Wpjr",
  "key21": "5Gdx78raxv9sMDcjyBVVFEnw11G3Mq5wN1ZsNFTnCa14oVMQEGJiudqELd4Qk61a8EdqHerkZvStgYqDo6Vi4RnU",
  "key22": "3fabVRZyRWdGZEyieE4DqZqdqLErDyVwfakFudizeYTsMH32vnnhJNiGL2rDeEtSrxxEVVGCNnKqWk5q2TNBziEM",
  "key23": "4idbgzC5H1zSbirvKK8hgRNxBZ373PZY9Jzs3Ut6vni1qeRKHe5tfzkng4bFr2zK1kYhHiq9mV8QHq7Pgd3EmXCz",
  "key24": "4nFsPeSML59BCWpWrWBDm8g2fhUWaYTGBFzvL9RA2pHB57HfUNB3uYEDnnBEzU51JsghBERNWcuB3g1PyGPnUWHt",
  "key25": "4NXTLGEfdhBiyoPVYBfXRkMv93GJrBXJWVPhe9HPFD57bLGBgERjq9jwE2LUj9rKFJzYGun7rrduLmeAJcBjH6iq",
  "key26": "4MvLpKJFgiAj5G9UthX9BjE88PEq7r2jhHZqGTWd7RripLph4kRPZQtTMUXWuDixhtiHXCPuArrS7EiCsAf6UQyq",
  "key27": "4RT4rhBydpHcLodTds5XyxcV2NnyxXLwY6yw17mcscPokdMuqbs2cTcVwC3UoW3dyWPw1Gf3Xh1SUYeMQ25tgqwz",
  "key28": "58bjq8Fc35MzP8H3gajqKpk4p8hXuvHnMogfy7Y2Tq2RPZM4cBDASCpnfWerc21Zpm5szJbq5TJoiKY8MW13rqV3",
  "key29": "4MogkUr3QewWWyV1Eop2VRjEwmQbcrcdioPeZjUPjJtHTE4CUHTcvhWJVF31mmgWmAh9F4tktX6eF28Dj2FTZSCB",
  "key30": "4czDEc3o7GNQTaYcAiMPWKdRJwyEmZJi7r8uEkAdu1EdmSqsS6dhMzzCQn5G1U6a2yTB13SgD1QDEkV3SN37KM44",
  "key31": "5YPqmqLbkd43rF5ApthyvxVZaj6vu1hNyZmbohbVkXp6WmMTAv4R4a8Tk19dLwr6SeA51cFsnvaY4tz3he5yVuzh",
  "key32": "2FWh24TXn4Tt2KLjfHNCR5K8LDUFxvA7HhTPbPu6Wzaq3eDMUPgFJAnbd8yPYaoUMGXAtVyoZukKeAKucrrvRX8E",
  "key33": "nd9rm1sBJ9ptThrCW5ATQ6g95SBfpfk9Rsy3snANTK4KLBZJLDRynBw6BwaM6tfWF1PNyBG4UzZzjNhotn2yygQ",
  "key34": "3nMgvB6w44srV9Emg2DAofHkM7eGbgwK8hCXiSqpGaUgjjBnACpaW9b1nftz6XZGdG3GXdxwb67TxNpikLJfMgZX",
  "key35": "2oqrb4VprxoTU5ZdFNxkQqwA6aarD4ZuaFamhtbviEKBxkSu72M7A7wpNjccwLJXSwgx7o6W5HtSqkQBK9rrQ6SG",
  "key36": "3XM6wcYH8Bp1LxLbTQFiSRm6TByQLvr9FQ5jyUq4xb8NaRztYhHUS9eeCSqRWTWSssdfh3XZw6UDggdPeWygUbAS",
  "key37": "5NDPSgPTZPNmYfw68CBCh4zmuweKSm4Cu6ga1xQW3LRcZxc2knyHUs5nsRbavKjG2ayYBoLPz7Hv6t6DNx2bbLF3",
  "key38": "5zpQ3amgVWN5gxco6i7vTSS3fZ7g9mekzfBj2SHWZ8Gdf3d7bGxZFm7u6i4vmiePKx2Gzn8cg7Z3UtDSj7uQpF1K",
  "key39": "4BMhE2nTTp1yWSYdHDDTAdoJvZE7vpd18jXx4hETSsauywWCvCXiDtQf8MrRAtNrW7arKn5sXtbYQPTeppKugsbC",
  "key40": "4cZoD2BUJk1WofRzffDti49zbMUUAM9e3wa3tWvgVXgzf1RqfcHiwUYCPGaqNa91fWuRoXJJtBBpYefQTyhESJRt",
  "key41": "3onavN1kaG8YwRta3tmR2SX2UyhjxHqKEb7kwFmKcHRLf6tF7nZ79f91CypCyi42zDXUW23RCeQqdkPQHFCkS1Us",
  "key42": "5VKDb3cxubq7wx3BHERkHiPQjf3QakSi8Tmya8zGQssLhWxEM18XDUPuHjxAPYGyMPjAF23nqaVzUqV1tPpsxyi2",
  "key43": "3ndN4ZoaMz7MKG9WZVPbmMzeb3uFKDk25CMANZDTVWg5VXpJvtsMYSqrWKvUwUYKb3e9yTVfWrDHjonGcVSKTW1h",
  "key44": "4dYwMo5Tas8qzqK2DH1HtVf8Q8CGzoAx82TSswy44gpHDjnRQkX1DYavBLevF9tF7rP7xLxJ4rZrc7c3Vek7uqPN"
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
