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
    "3jvpHRiGsjcCHbU45TTTUVFgNw89ZcYE6wkTfaHg724HREFphBT6UJsqdVVFM7FLjWmCJ5Meh6a5VUdZpuEXMh3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xmiTnmtnxPchJYxMU1vaKkiXCLxaxquoFv1y66krLpxMme5p1SnPCLvPQFzbDChnDgbsEBMiwssv8XkUQT7EWvD",
  "key1": "2ewCw52cRFrgA31BuJbQH5ihpbRiPandwLwT22ALYqsUUe3AgkmNfcTEGfyJCx1pD8M5EDch1K5UsZXy56iv6ugG",
  "key2": "7pqozfJJCTx4t6ZywWS2GUm3kPnK7Ak5fXAa2a913gJ5cq4rqBQUzqgqSwFKYmahoc9kJ1WFPNu1reb17GBtjYa",
  "key3": "4e9EBU59JKrpmZoNffRELgdzjbCefAf7Z7zT4LXGdSwsFUD5vv5TaFFQkdEFQqnWEK9W5HtHNSgFBiHoKbDLRDdr",
  "key4": "22YzMmyyfdJbLKG3ThCiU2Wz8U2M3Tvj5WzSLqMKkrPvXAHzeiYaQeD7GPit7Z6NiYhGiMfeaWqscu3MqV5Wn6mB",
  "key5": "2DpXbs2dqbpSP9NwgTmtJ13i8RnFCk2W3rWCY7PRs6peNqbecWyZu1TuUL6XDjF4YTSyodVrRRwDdTvEDFABSTtp",
  "key6": "5PBhc9bVCXnWmELgkKvTWRfc96MXBoh1iEYt8UTjNmJ6VjbroFfbyUnTqsRWbtBhV86fnMXrQWaqLerfa8VhjXdt",
  "key7": "3NdEPqD51SepXcks477AVSfSPzcES4RSTLutVy2f1fCSydzjctYbtMAfCzmzza27dcTvyouZgKLSiTUruCF79G3N",
  "key8": "5pPon1TP6qz6v3bCzxQ5FDV9tX3Xwg48YqP723RqxbexqBPTN3QqhHWu8NhiuBoNkdSJdx3dZaNy3E2bEUULWrWe",
  "key9": "5aSPo8JBQrpaukwj4xR3AiN462UaoMwLNf3m9GYKCv1MpnmQEihUbrfzbVogwUsBMJQsQBNcbfaBdAAJbaC4tJ1V",
  "key10": "ANz9Jq42Q8osyNgd2FqpuzyMAj1s6gqnhZkQpjwex1D6hbYpx7gPUjhwryMGN8BJ55xVhmK9ZxnSUDkraeRjZPg",
  "key11": "5UYAzM8C8FiHXE8JAazuDon5oXp5UcdE1RoviEoaUsvoXG7yY6sf1gMmCiUdRztRFDhtWx6nvNJwDzibfqpjxijC",
  "key12": "2Jg91vhGbjHvgVcJ4DQ95HC8PYD3iEoLNDw41fofPse5xemMhfNGraLdeHY8YbMiDLAviwdyH4erckScaPvNVps7",
  "key13": "3pfVeEJMWZgkJdDMV19seHokTUXX1QM7WF9TARkPjo2HnnNtY8Rtus3BFnqzjULBRY5o7JmcUrnHF3xdRnhZCHtP",
  "key14": "2GSVFLvefAJyUzwqkhdDZjLogrmkhyUnY5f9EjJUPymPVxFrsLYbFBVgaN1NMCi3Pg36gWdaismBoF64rNKp5phV",
  "key15": "5mL24EzcTJAY14Uccp5LAgxHGvvPv3i4vshHAU9WysYi3HWPv5bYTp73fytLpun2sUEJXK7gwxsDUgjh5KYFGwSx",
  "key16": "4MbFTX9YFrQRV9X5rUmprKK5SbNKW7F1S6WGx2CfpNk6VmRjuywpvoB9rrJwnqhQ96RecaXbgJpGfHj8TcKoDWyR",
  "key17": "3guNuAJNDnDEiJo64AvAP2evz3h2CfQpa1JEdXj4dtVK4D4CDCmbQmmMgWW7TLeRyrJwfSPqg5VnvTVgybKdBQz",
  "key18": "3xXX3VDiNjqEJBBzdLia8KEABH4tDH3kp12aq9ZV8P5QvQxYsyLRaKFTBfQYUeCYnVmj5fiJHmyzNSLENSzCqL5z",
  "key19": "61FEmJhsLtAnpDTKRggwrLdWgUiYayir8D1tBJTttuB4H3dAq9FVWfdLMTQ3oRmJpykw1UMHhbm4PCPKQR2FLm4d",
  "key20": "5rqNh2Sz13GtRm8NuprHMqrkZSsWbnV8X1c5TdxdUqzSug6yf2AXdJxyFpd7Dgjkbggr45MXM4HuFZ7b4smrGuC4",
  "key21": "5up1MkLqiZkuKMn56isQwP6AS6Q3K4hMubpS4ZXUeJqn4A7jawquQ4AXmu8HWKcHhKKwBkYaDjXmaUboGSdt5ATg",
  "key22": "5uRVJnRxoTKtAXeSnmcfc1AzasdjUkvtsAKT9uJ51QYc5ekgFQsM31538K2YdkdYyaNaxeqjJfNi3kJMLSWJSrqp",
  "key23": "5ctcJWL1ueNCdPoQP5XWDAmWGNGffrVQ2offXbuqKrcezLjYyMv2GaEQ1RQRwc6efuUqtVW1GagE27viY9gYosJY",
  "key24": "2X6DmL13Fi8WjPU3wRRwsidSpe8mrVYnbZvNFKyo4rDm8CvJ26zD2mCfxwqNYSSaKiHoJRRjiijn89QVYCXxrosf",
  "key25": "3TTpfTKAoZ7oLF9G4yUSZCsShsQRvXFygSKsVLZoRda67GSNQJjfXh3ekHRfc7Xi2yniZJUBrXkKQ48X2tL49WRn",
  "key26": "4mBc97qYy1iEzhk1kkb5MDN2KjJHp7wUYsCMPDeNzsrT8VscHDpSaS6VkwzEQxVCk2miZMF88ipx87d72HzQdG4t",
  "key27": "zSHhYMKaTKMpAiBh6m5v6Tq2bm5SvRvvohfqhy95uzjGJZBgsEkXy8BxTEW8MvjZdNe4Go7bW1nVWajRu8EHAkx",
  "key28": "4eCXWowbcboJeL3bZWX3NKRyZyU4iTKRUvEX4wkHdw1MuhrWfQoHQJBchJW2Do3vv9AsqWXsdnki7Mpf4gf7QuQm",
  "key29": "4BbB2uvbragBENoU2SyZZFK3d5r5b7sGpt9ZkBupdzAHsGugCiiW7VbqYw1YkiVzRzoYW6cRd6dFd1JkJq4HpxpQ",
  "key30": "5zdA2LWrptSCAe8dVwf2AVch8fr9qF6avxvEDqJjT3DWopLkX6G7c2Na6pgNKiRUh3opBHkMFNAJDczM9HejnfjB",
  "key31": "2gYfytd8kz3aFceLQNjrspNEJ6JPUSs2VdZBz6xnX1c7wuTZ7mtgrrjgGU2i7F98NgCt9vX4zBpAMiwQx9f2wZNA",
  "key32": "3it9JPTfBKBGT6cBVnQciNgcPkGpNiCKjEUvYkufR4Sj7gvrRfL7ScVGikXiwasoPnnLRSetpWM35hspHUrGeTV8",
  "key33": "2vNPxjg3x5A1uk2cHVX1yB52d9NCPDeGRUBL4zDCGGhftzy9jLDyqppwjSA3QanqofCmE1S8yU8Jt1GQY6XevN1H",
  "key34": "5AVjSqbVZPtBB7cwjJsRYDBzcZu2W2c8CmBbHFRqWsroN8gFkaQk1yQ5XKP9whEjJWtgxwSM9wqkV6gWxsp3rP3p",
  "key35": "EKoeGjQWoQvAGpH6JEf2tMAwZajcxDtB6QRpy8H69c3KNFPoVGZTeqmnNWQ7WPZnB2frqcHZzS9fAfjFjybgch3",
  "key36": "25jxbikPLAdupHRNxQnf2Z2E7aSbQDRnQqWqtanKgP6vqK2XdKGpmnPM3wxsizgfpgVk3nzXGJrfTqrg4pAWFwjh",
  "key37": "C6X3UrqQugfeHiddsJuxPhY7v9ZywHkRy397wBkB9bQP1CvfDb9fPSH2fxzwdaMfw7ykPEQTKtH6GtTn8TftzAJ",
  "key38": "3BaRPRKmPZsNsXiWQWcJondc6kZp19e3CfYL5bBAaMAzxcsTHjpVghgE3EbjNksFjMAskhRKhstVDgDtDZqkspHo",
  "key39": "4FYWGzWuE3w3U165BV4mujxsAvpatf55peL9PKHKXjiqB68K4Tzhb9usftThUP9VpABLqEbrY9Qd8vnYmKWWuVQY",
  "key40": "3ynt7T4r8aCRrdeRHSW5Q1uxndkBp9WT6f7jorUqFKHC6SUQh4rXNWssWB6SqZv46qQTrqebYDD79vrpwHardtbd",
  "key41": "4QcG1nLjg2pcFC9XLGrhAqhJkkxZuKiLWNrdjeAM4PRazURhkvU1N4APYYEytpXQ3rCgfjLzD4sQofmTs7tJbczJ",
  "key42": "5MWTHvRLimwYG5rDAXqw21Js41JET9YRSuHyhsgyR2YMiMNvmDZHUqf31j37pXgmvL4stArofGPZcg2V981d5uqk",
  "key43": "rN6FhNTkmr4uSUpJsnTiEPUKVLHipC7C3Crjj1afzQENWTrE8jRoYtaN4midFxP5VD62x2GYGnuAwZkDmJ1J1LN",
  "key44": "3GJ23qakYTeAnNK6QRq5uankVeW6KB2JwwsrfV7GY4wJpjHfv96iKJ6K8GgALB4xfcyq49xejjFWbdHQTUgmg8mn"
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
