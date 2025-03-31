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
    "2gzHA3uwAQ5BUQRxcRJuecbk2ShyyNuReZBZ97FpM773RxK1ofFndnSzMTEJ6SCY8bjG19MfZPoS3QnsgtFnXP4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ns8LZ3XHWZPZkJ1MT7qBHChoarxuKnmvSKrynPPtDJyvSQ93sEwyDSpvZwp4CDhM46ACWuGCZ1sznFt1wdr1GBV",
  "key1": "5jkUxxLyNer22pfhAgnK9RWEBMSHwiECSeGCuVT6yP7R2gaDSgANPf5QyoQ38wLyfq3xTrJpgvhftrk1WsAt5pi8",
  "key2": "54qEPa7mFMnRADfrRoLgJM3pDKYdUzCYhpFUU12MWdQitv6FWMVdrKAaFFDTyKPAMAWAfU5J1u7k4MDTdU2FC1hY",
  "key3": "5nkfGKrL8VjBuikohjdRBScfi26hRHmTD57NNV7VbXKfvkZo2fXCD8hGvJv4sYbs4xfnXcWVWRG3g7PtBUVrdnyp",
  "key4": "5Lv8XifyKvTtApAnRgX1im2gs3irpeA1NWVkhkj4HuRko8XtnUijQ73HdKzvTZoX7NneRrJhpS49kYkmVRBqbX5q",
  "key5": "5FJH9nZoNjLuGHamHgeUwQ53YyoLqJ76zMRVnyGdSL3w3msoAbqtsywNp9XxpqC7np5CJbmCAvJ1s2okBUm8vAxg",
  "key6": "5urJnnaob38c3Ht9GkUtTcrKuaw2HQs4r8yqDTPSzTEo4ynUDSaTdmfGU43EUUTdxi8uQWJgNvtKLjK6aHnxSH7B",
  "key7": "3XTDXpSvkukfAGU8Upyfk8s5A36NBxiGvf18URwJRGtn8PmQQRSWkWsfnXeDJeezfZ1uCqiMKHCnrnB6aczMxqC7",
  "key8": "49AYzHmhmwaQ9RCbX9X5uZkBLEQrGTJ3jnuc9LV7uZgiDyemE4vbtb5QAvnYWDmF36UJLn2SviR15jcDnmVozidQ",
  "key9": "pSs8LgPWdV972ZFgTFo63Z5t3nJqq5Adq8SbjUuXrnijwpKH5eFFMbH2uAiXERGMbEZJZaMNqRyapAfzjQTZK5J",
  "key10": "dR37DgZXcXR5hK1d8oa2JT7mWdteeom6vyPMu4sVSVr2DV2wrp3dfe5z4guYX3oEuGWe6D56Q3sdAGUCaDCx6iP",
  "key11": "2j2jcxrUrDzx5kBg3pu39iw1npQtGdNBnGfv9JyUo4iHaM54fuEYhGDRxLpvKYdS5MgXxu3NWdtMnwvz99XXMhgd",
  "key12": "vqzv6ApfVSoJsZjw3BAAnptbSVx8bVFMRM3X7d79XaRgRE9MM5PwbYCK3VoAk8pRVW4QC7ZrmxPYeoADhK6nCF8",
  "key13": "3XLieRG7wF2s4VYLRrwC7XdjSXMJTsN78RnLHdbtY4vDJC4Wr9eaEmTT42nFYWFyhJuurjhkn7nvtRdaU2bsdKR9",
  "key14": "4WfPDjEy71MGh143vNhnMmm1GJXWPgsSWp1z1Lbfbq5Hwn7ffLgunUtpCD4YtTnz4bJYveY8My4HK6AgDnRJ45V2",
  "key15": "4KK5ignjLUsGc2RjotL9cJsXjZELHipEBZ9P8RgPN2eUhAXh9jTph3cHo46aFFM3ZpH42DyFqiih2pJb999VZdN",
  "key16": "HChuya3A5sP18sxgSwP17eM8vkELuc7TUX2za5JNNhGAjvTBEhd3wSvY3bkUCkix45DGzATPBqtPfgbGcJbdwBa",
  "key17": "55abvUGtUVnGZ3AwchTDozYbWbnp7cufs5r2dCkQaeZPKcpAegu6qt3h22FzMWWm86UsGX6dVGpN84KY63UNHQFZ",
  "key18": "5KdEeD9pyz2fK5F8X3meecqZ9BawS9m7FQ5VHWrP9sFDyDSAzu1AGEnM25L2RYtiaYw1X2wqJHUPPNgWva2zCTwm",
  "key19": "3cP12az5pH6S73biLhmJc5AVfrdJqYsxhVu7n4TY8AyQEUjG8DJmPySLbPTxS57Dqg8NGnWnfCDSwgX2hxTPCLzX",
  "key20": "2qTdrU85A88uZJWC3uTJaHLamxJH2CwfgREZLsxSyujT2h24JbZtEF7AvavsiDGVeTg2HQLZ4XshDVbcExP1wy9s",
  "key21": "5PoWiK9drfMntTNLfhi6n9f2YqEGSJrQgRiwHpXJCRkEbaC9Fcav3MREU75eBpmCeF7CXRARfyCdCJwktxc4NU9F",
  "key22": "3QLGkjxF9fdcwP4ueWPQSDNvj9dehVtN4vFJjE1LGd66S4iT6oY5bfqMrSYNPMRHQFthGUdBTkRUD29nq6SDhSem",
  "key23": "V72Z5MVLGoLSHMcNpvVQn82qJEB1TPQAxAbM8y3rQpesaJDJjf7uo5mGbzs2AKKfPc6U1YQRra37qZNXJx1VTeA",
  "key24": "4J5cd7B1wLS4LvcSofzi6sJoPT6zpQRZnx3JX8MKALat7HW1iJg9ydYHLJhKj72FZqrEEcA4HFkxYNvBY74uQFPA",
  "key25": "4vyEcvm97p1r1XwisvYNhRppPeWJ1THjZPYAN8d5m4Bp2qbs8XMpsUHn9w5VsMqwzCozeMp11Q9MbQZ4XuYs7tfV",
  "key26": "5jxiwQixScCAH9qEr8VZRBAn5Ny4wWeJaF3H11AYS2rZCJG2ELrvuZJybmxd3qYodkd1ZW93SVzd76cMAUT9Ywdd",
  "key27": "3Vhp8Upt4kR3EsaXNPrK2MsZBitoutU7g11jQaSShkgyo2VNdweQwApVWfHFsNekTNSCMukQNu39LstHCBDChLSo",
  "key28": "4NiSBhteGnTQTtqJSmv2YJFLBNavhECQVfD3Y76rVe87oa7xxbGr6jvJY9DpCBV9rHLm9XVa441MbRwt9At3V1Dd",
  "key29": "387VtYyQLNcGyZABx9afvSAhWaC1qunJjWBNQqAMyMiEwistz2wvgoRCrDBwiT4LcbAopbYmk9Sj1h1ajE6GS1v2"
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
