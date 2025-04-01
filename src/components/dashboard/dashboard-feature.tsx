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
    "2Chb9kjZQ5om2d6GyBbGTrCYLCcznGbp2uKBEhheoCKRntejohtg6MdQqrrKZRWQtLpysjSn5GDC2D1FVhhtgB1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xJWvpA5Pm2mpiq1Dn9CpTxbX76xz2qeYWyMEPn5E8s7uZwPkhxPcaXqGnqKnF6FWMCqWbm665Pb49Vs7smJAvvK",
  "key1": "4KUg4z7Bu2bs47oK8zMAH6vzTeqAo88hbGr6FqSPHBNj1d5hZmhoDQwoUtGbWKsfYZpxZskD7TMheMN6nRBhK2az",
  "key2": "2RvhvP7s5PHMPNmMVUsM1rpYY35dLnUTSFTefEeX44GPJkTFFKKmbWMdiszczCUEur5jsWguLYnpYaLxUW1hmiXN",
  "key3": "2YdaJroSNu3X43x4FCr8iEh6QtR2ciTrcRELtEKkPuGLwiurRr4mv9DspZX6Ta8PcU34fF8EqLBYAoQY5uguazgp",
  "key4": "PLuw7Fu2xzUzvCWFmVpzZPYzR5B6Dkh29tjbikVQxoWYQsorGVSnK6DeeZAeKPevWScnNpvvcvCkb4UyZeigrn4",
  "key5": "zfF4xhdwW3vPC436ZivyJXr8d4HSMkYA4ztvdnArRs7NaAr8EJgeNRi1X1uU97HWngagnNiZXDQNMLtPm9tqnFT",
  "key6": "4VAqmCoxsqfptEA5fkPYAsdLjYQVbtD2Du9Z7v81UeczXb9Ukx2GAX2N4j2z9FnqmKR4L4Nbywe5aDhf5Lv5qnQ8",
  "key7": "42qy2spqJTk1t8AXHrvFtBGnye8FQHvNtPfb9We3Cz5Q7aQXncpk4YvdEwPRhdSrN95WTfayGKtVJYwxTUgQEeUr",
  "key8": "5kUBckhnHq46PKpYTqXPrc9kKFd8MHH5ducXN3BbuXowXCTR9jUdyy1GBA8qnHHokW7q34Q69h24HxehVRNXnWMY",
  "key9": "5cpGRWmWaLqGiwyGWM5ahc46g1yzYi6PSHrq4VuNphDCpkku4AbGxsWgpZDmfL89J19iSgDm3k8tcFoXfU11rXQ1",
  "key10": "3gF5SjusmsiZShsupePdVsgEv1hezmKQjRStc8vs7dj6hvDXBMMFfL3YQCXYdFeUktUG3Ek6EsAjmF3rxwXbRmSU",
  "key11": "2g2ArkmYBtd8oVJZmsxTbEvNN8Pezgn5HicUYiybBE5WMfxC4iTkfpyTWfhVegKD88UY28aMcwj5uZXNnf5BgGUH",
  "key12": "6iJWvbyQgzbQ2dWpTBS5Ga8gSitQd1AUinGwfJKZ6vGsznVCrmfPC12ZkgzbHgw9WdhnBdjiQCfCXX1mmwvp4Q6",
  "key13": "2HFnuzUAG6WjEWPf6GqsVrcEcvUgwkkVB969RybaTRyArsAM6hZhJMDUKXRbv5yGjs3EWbsgFcCkhLfZKVFxiZsb",
  "key14": "2mbNzwVYieFhYYrwYBUU55aaYQDLXrw6qV4rRHGaNEYXFT3b6g8UduW7CZfoHEqyTLYjCksHi96f9dzoVy347oxX",
  "key15": "2ypgJxv32vMMxQY12NKv7PmeFW1uRVSCL59jpUC7jamZqjGCUc569p3Zmhxhn8DqFvwMmxQ6QswPCGv4WuRMC3fu",
  "key16": "5Kj8wzm7sUJRdFFwMTRQvrorbth77nSbxGLUV6ixGdFKPGx8G4RUUpW6iZR4RzVgTcUgwPYwqVuCA5j1KkLLDYJ5",
  "key17": "T4jvYjBuRgs9YQnJVZwAWMnvDrPtJnWMp2dSyRYZ5qR1zvbjgvrz1X8JnMrJJ89CX4X3BdE7nGJP6KQ6kZHKJMv",
  "key18": "5qsVy9q5CQCSYfaSfcskMQB2zT2p17usSX5KCFRc8i96iVMo1BF1CzbTaoGufmuqb7eb4dyXr2gttB5Ux4VxuZAG",
  "key19": "4wwqYzdUC5FsvbiVBuf3zuEsH4yH3SPTk7hpM98urxMcN4Rs1g6oV6GUvJGQphGgNsuqTHXstzn4xbtFV7vMfsMT",
  "key20": "CTcMU7ZjK183Jgc4aPcJCkjkaLW2begUdZDS2p5up4wMp1QhpvECBtLt1yQF4RFphATyKyTuuacy5HmpCT3SaLn",
  "key21": "2jo6XkChyuFv61yemWTjkawgL2z4NFdH2YvSfR7X4CYYqsp6gBHGSydFxQRugDcxiVvMXpbVzVH2hMt2yxecUx3E",
  "key22": "QsbifkooNgtCifXzKdBi174bGAdCktg2BHr3MuK1G5J1sSHiqiBdRgxis24hjfwiGVizAT6hq3guxHyGAS4C172",
  "key23": "3uP4S5ULZHq9fBer969pttkSAAFwaPS52Q1491Jvzy8t8ELsuxfhyQ7BEpe4dH6KHjTbfZVZRX1zthkqxUwQBxVZ",
  "key24": "26yTYGchHhu4uWoHgCxagi3eecNUDuSu5gQikmttZHeoAjHcRTuwwfgztcM1PuT5vccNE3SU8ojFaLj4EqS2fvZ1",
  "key25": "4BRsD3mjm2GcP3Tk2TUjb1kaXw5FCr4xRrz1R6U2KGYt8fGnahzUoxnPx1uduzpFwm8iMHLS5xjwbKDDsBGaCfs7",
  "key26": "3JPX1A5jpEvu2QMd4Dh3T13NFFPMc5dqhHgoNaL4hoKNz6XWX8vkTsNb5uKdPcrr3MXd7SX2EoCWkfBUuXmrUHBq",
  "key27": "35ApFJcgeP9VukNtKuhhJ6yD2jfsSFeEBtFvaMQtSAUvruzjZcrHE7X77hpsiYR2P94QCaA1Q4yYRZf2sX2wFekw",
  "key28": "2vPA66R2qYQUGNHLDProHJUmouvryYtWa8sgLV8oeVmE6GXGbpMKWuv6jkEAiuci9a8PiDbgN3iYJDVGe5B36j6v",
  "key29": "3s56Yyv91bwZbwEYmoysh27CvpN9JyDnuVSBxvU35SK4HsKPkDvCGm3kGkoyUnFaGkY8CkphJ6kbPqFuskQYZ387",
  "key30": "5DTPRkPT34XKXe6TQEVT1Pc7g3QYD2ajKu3xFFT1nn94ZeccnQ4MwwAuH2HTxYHkvPTGXNkW7Xsv2AZvmPo8FArn",
  "key31": "5Ly2ebSHoRcvVDsoqS2Mk8BoLkSQPijbU5N4mhwRrz7qooFvRNW3XjRBJSmrsjHm24wscC6PuawJgLtr4NtNEUc8",
  "key32": "2tXBTe7cKjziQh6m6LAxrdkHYk9Bk3zELfkYNeJB8QZD2DTN2HqPx6BUVwVTW3JmQnBG98GnhZ39WYUTMdknF3BN",
  "key33": "5qif7HoKuoJwmX73yGbHzCQRjVL46DU3NPLpVb1DL4dvxSaMNeJtZXUDzLY8eDJ7aKvAscbayes5EL6V1MWZB5hR",
  "key34": "4GftceSsQfb3bYxk5rkCHPqNoFTFdZAoYtuadNHH6CJrdRL8EMu33tez5EChSztEPtqrXnSfEk6y4UpY1grgb8j2",
  "key35": "5HrxcHGPP1jMnoQZqrnyJy6JDvfJnpVciV2FWkdQnEvMsudDxxThPeanwXo7xsKoX3DtKded7ubPd1LUP7KaAfgd",
  "key36": "2FQEdmEwaYLrJGeZ2XXjgxprUwYoFbp25xEs7ZhcrPy9yd5AUeC9S1GnMvMc3BxcXrZJtJSDwhaqBxYQxRkhbCRH",
  "key37": "4ozuuSE5eYq8EaYy8EKFU337ZboNghszMv8XDbVKrw8U9sYPeefUvQR5vhfZhVRWixEw6oab11LPPx6u8sQxiUmV",
  "key38": "4Q5e1jbYRvs4sr4L7FRTmw4URatxNodYGH6HdSVsRN2bXWVNDpq2HHYE3nvvRfEptYQhdtq7p4VG3LN5UgK9RhTW",
  "key39": "SZHzCd9UQLHtYULtaXYsKq1x5ZxE7fQaLrdJ7ckPP4DkAHtKmJgenea1RyR7TDu4KBirV8bMhG5CT6hng5yfeLf",
  "key40": "5gozdHJMfhnqqp4EyDxEiuTff8QiF1KteNtXQ1M7WucNNVJiTfbiJXcXEdqoNR49bVm7QkK4ytxHFnYadnAYHH5T",
  "key41": "4WSGdVegGm58NmQbLzi9xnhFTSocBeedhfv6qfhx3Jmm1Dd2GesdyvB5tgbcd4RvaDdKtog9ifzHsvMD7KGGVViE"
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
