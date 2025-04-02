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
    "3f869urqtp1Vfq5kRfM3zwJxyPuLWaR3LKbqmByrajMuGvDQcC1ekHNeBg4PjakNRDoTDN8NqiWAnuNNCXf24HKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vwhSXnaknMhkpJprWaschyxYaKqjoncuoezf8RGFa2FRgEFRGwYi9iyqZL1MSBC634HufYggQmmSFFKHrLr23Pp",
  "key1": "3p5WiajYyMnNg9BVfcPaFhX8YavQEgyj2LnsWeo9wfsL4UaNa454UFVv59WDYNxnVNPqcPzYBgYXJ9axFVLji8u6",
  "key2": "p5xVLfMTvZ2RoFBo6K45bSgsKkgeJvMRE2v2pTtk2h9oCMLKWiFvNKte89Z4cad4iDcYrUHHnqm6Gade7s8vpXG",
  "key3": "4wJ9gWKsh8YofyiAoSPywcggZtXeAJ1Y4NLhSdMyhSRbzYqS7Rm5xkMoGBYt8essHREB1XkdFCfRPja9D7BR97Hs",
  "key4": "3C8ssb2vkNFso8vr1aBer75DyjZbTfgK7V2y4MLLpBU3CY1cqf5KkNJQgJA5wAaZe5HLP5KrjNGadNZzDyozoLyb",
  "key5": "2JXKWQcDqiscfGzjMRdbRr6YsuM864CqriixRbUDFXqMXBdVt3EisTwDixYzXKqKgsCCwvmnkK2HW69DVANqpKJ2",
  "key6": "59N9y8VQZNDjLj3iEghJ7vP5KheTW1czsq2HFQ2vjSMBEG83Hb1BLFj2C5ZJTpiFu8PZz5MNjt2MZnxgXfdVNpZc",
  "key7": "5fJdE9PJykDfYs1o19aAdjdjh5p2sigPc5PhNLyzqd54yG5gr9zusoCWGJEqMoyEGsYRus5ERN5XAzPDKUmxYJ6q",
  "key8": "2AazoFFN69zD7wiwVvP7RYdq3Av7xvtyfFBqsWc5y8AWcSKiU59RM4etbT5Zojt8RGLwUKL4o9ChfqRTDJqtnEom",
  "key9": "2FaMGxv6gQE86541gkBewxzFrxQcoinCqbT54m9Au5uGBL5SWoot9NMipe7Jx3W3eg6K4Kiavugy9SAbQ1YwLffX",
  "key10": "dtJasgfuyi5qp2fzRbLovTtoiGt2ggfGvNZDXbYZKWoZBg5vF2yjoebpf4Dvo1yfbjmHFBehgnf9TAFih37rgyU",
  "key11": "4ZyT5EqKmgWdwLbA8Z5WMo4ZgzSrqxs5CvwRa3kW4uiJoCSbVzd1ocgPTiRXBMX5J7KdyaQKyBHjuafUNHRZc8YL",
  "key12": "3JQoY8RfdHJTUcED3hg5FtV6LhVJd8EDeyre2WrtLWXyu9VGSduqDPRU826dDQrj5s4YtqdcP2Bd4QHYnxbRtqBR",
  "key13": "387n6pRXZ69zHJCB99xkiVvf1hUAcNT9vL7RKMgPuT25g2eQvAG4STs1vQKLsh2tqLcS7ELyjrPwLBwuY6VyhB5g",
  "key14": "5QgBinFeei62YA37rjgAibbqaRwxrPkaaqLKH8WEvvmqDWizz3yU3BQQnSQYKqi5sAWWD8rUTvTQDLDWrLKAwj68",
  "key15": "3jyoLKvHtKdUUZtV7WB1ZM1JJFxAV69v5XHKk6mfPjzYmTUC9ZvtykjVmY9cHo6sEodr6YU7EGQxuUQeMw9iiTr7",
  "key16": "zBnSBJQBWtfH56trfiBTDv8F1LNoJ33xB8DiF3LU4HnWB5cYudpziWoQDakCfGnujonU7mKbDGthV67ybEE9VNg",
  "key17": "34mTUadYXiXmmuWguKs31wzs8qUzoannPaSkJNgW2dTW4PLJNqU2SMpsY5PHsEtiAaUX7kkdaLdTY6ZfVeyjxHi1",
  "key18": "yxSfGVvKR5dsM2QYAFBCNE1PQXC9kUa1aoJq3mw1cDmkTwXchrzjwKNthPh4YLRSiVvcqqBZX7f1dyfHyEUPSiB",
  "key19": "GGuoJqPEUA1LCP6x2naa2cH3rUaRyCejfSFT3TGMbu8GLxMTe2Te1eh7AJPa17Jvx3G3QU6DmVeTuJxhmACi5Z7",
  "key20": "2e18Bqba6mXKjNbcGLtFmpvvYhPRHiaLckpStQMFdDae4JSmqQ3uDLVqYe9pv4MMixARezgCGy6EPKdSpe97hGbz",
  "key21": "4Lt7bBBo1ctnN2MFLxumFw2ZParT5F1YyKkvrBLjtrQStejPFMbPMrzRSA8br4dr1FkPvNj2q95s65orq97FRmoh",
  "key22": "3H4viBBMeN4XjDRqctqtVwZxrQ7oDDj1ahw8KpGUU9VjYNVNds8uNPBmnvKSSr63zCakq5F2J9d47iBLowMtCCky",
  "key23": "T3H7apAgGKMSNg7tvmbSfdE8wCaZGC2SbWG1zNhoqGgzz1koV3Yzk5icq1EiiJnxxoby7oX4jmtFCFQhNdhNcTy",
  "key24": "581Ua45PN1so439sXtzPUCeGUezYN23Sq3bBwzYniWpYEgxU5Lx4BZe2qr8oTj4jVN41qjn4EbFEM1axWHitVjcc",
  "key25": "2GtUEmYYxG3Lb2tfFFYpMimPf62su7rEki313BYr6nMsPzAwQAUUoubb2VYramEnRz7tJcfpvNE6MwpbXKhYKFW3",
  "key26": "4Z26XfHviiWnx2FhtBRZetm8Ga9YXb33WcUn8h7szwvRiH396J56XKHtnMV7T3ca9S9oky6zwQcwNeYjotZr3PbZ",
  "key27": "3tXXBpAxrDSpt8XUdsyEdPFYeqsoof39K2YbWJ8Hp3GAMeopFejV8zaFmAFLiVY1gTXMhHWVZhm6VzSQp8wXgazd",
  "key28": "3oNfiVLM5Ja2sD3wEqR7Ftzb3kaXpwz3YfcK5fWbM79orr3TxjZkscC9eYzpzCVz7yYQk1zJvNHBgpyWVsrMZgXa",
  "key29": "315AjUNAgnWyUPpdxLbW3Vy5QKfypPkqfdzF6jsmD8rBxsfAueJ1eLP1dQuBWMukC8mqn39Sd7qrEKdeonNEAUj3",
  "key30": "5RQa5uo5xfqpVFeeJFbEVzmcTxt5Yczwz6fTrVTjSFDyGvqp6ShhqG56qgLrTEaWwh5Cujfgkjo4s1DoMXBMAMks",
  "key31": "63GKmYesD8SQ373rh7f6b6bpeuQeJyzCKMTMsJ57Wz2xr9wzjMgzvqS2zKEdEQw8bRQw6UE4fs6648LbhPitKpE2",
  "key32": "2QigYud49MMpQSB87ERfjCEQRgNLzqxyfWqGUzcT2wJuvy3z4mTsfrKKVAEMG2ynwVZWndeDDoxkrumd9BCECqQr",
  "key33": "3JaCgs2Y1sFVmuQLTX2jjpyxb1SpLX6sVYFnza2jCpU25va3mxbHaRiDE1eVr9gnveZATD7US7xCUrwEkLQyszPc",
  "key34": "4d8mLpdx1SZqK463wFU1q9W65puit46jsx93pEWZi6fvTKYtwSALV7CLgUSDvTSY3rqXYBQjdG6xmuCzLhcXL5Ua",
  "key35": "5zJcYSVcqCXQqxP6KGA2nB7xKsWeSZ5pCnmdonoPQuDmyRTGSuVkmut4PJV9G7NduNWAzajMxDsD92GTWQtxLoA6",
  "key36": "3etx4qg8M93dydsj1KtHmpeNgTrbEH784ovB4Sqo1Xtqy2T5pNxGGAEk9x1i4TWVDyfXosxPbr3L5rHfMAMNNiWF",
  "key37": "4uT9Q7yWLrUFRyEaPjuipeS6Tr1SmDxNWsXaQuvKdYeUVSjY98jm9YwDatwk8PaZKqTKvcwRnXB5vHfasQdbpX6w",
  "key38": "2RMokLPy1uixPA4wC1ZK5Rt66eUFQ2bbBSDyTupUPBTyup4PpAtDE8a83GGCoL799JY9oPUfSHu3H6fMZHoSzPQb",
  "key39": "2Kqs7FdBtyNsmNzZiA4Lyg8oUXbUSWXw55bNgwN9PF1tHi5jUSp3N2DJPfJJ7HAiCZF2tY1H3xVGKYJhJVn4YRcS",
  "key40": "2jpqi9q6P2impQgGCpcq69eb119M7gNHqmBUg4xJTkgx7xv7RkLFyZYDKMExL5KVEe8e6DwyfoEqjrkxukK9DfLa",
  "key41": "biuR9VzxmhKgK9FdAxoeFRhDRANw7k4M2VVN3Aua4A98uHAyTy2rTw5fcCY1U1FvjzzkrLT64Bs3RLquJMECxN2",
  "key42": "j3aPyQpodHmpamp5wLoaXdmSgcgiUnJXvJQxuRp26gniYMrdisBmpFx8bm86fcYSpgAd1cWHbUEtHe7P1Yvd875",
  "key43": "dBMGZViNXKQn4JYfbExLkVy4tNZvKD5zUTM4DTm4kgcoikZKVZDiDLnXqf197tf5k2gwsn95n9kkS2yYCHihqS6",
  "key44": "3dTo5A9TSuWwjdduLJmMZsboYLpkmwKPxQEUK5fJw7GN6sqpG9j6tvPTjJ4VD4KtmNtMRdinDRAy5H6RjHCJMUrb",
  "key45": "47HXXT8Fo1fypcvNjxtFHRV3iiKJfM19qLfzT6odnDK1Kp361xxKLV22QG7N5aXq63XVfyXWA3e5pL6awZbB1rNH"
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
