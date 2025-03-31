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
    "64MqsZWmyqxRhSpVQPYBaUBqVSGEWvyfhcp7tQJeSLfmZMgdqqXyMfceM8vEeGJAt35YAMM3xoJrkL84EP7F1uiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KTW75bJyfovHm54d1WZeq17bMStX9jB5V8zvU3vWkcqSRLQkLFFAYoHVh2Mk5BFqFBojbC5beTXXPLJ2LuqqLjw",
  "key1": "3X7CqZZ4hTvNoXibtHMWa1TrNE35La7ocYYoVEpvnAi3femnKcsfCoeYebKV993VXJ3vN6txPNK1CuMcaEL7z2Z6",
  "key2": "42umVvHifDKq2z6Dga8oRk646P6jpNoS4kgW1QPSRCi2csWm9enWTxkiS7e8ZTRaz5BdFNqxNG7FXim3RAQEK2fs",
  "key3": "5mUAbjFb9rudG3iz3vuw4BH8MiBeFRjxtV8RwzME6Cmjd49qA1bQXUUqSrbjx64A581wmBjDLKuYDBLzrL1D9sxm",
  "key4": "337UvcjA6ppeJ67UhknJmCmhFJgKhPGSnTffuSj9utq731PbAYGN1dt35ZcGVo9FedMudDtzFvV5yzHqiKw4XUgz",
  "key5": "3givyJwxZphbWwZ8VZaTWXZparr7PAydQsVqvzSDdyxHwYACB1GKGHWcaij4smPyin1KAeZ3qdKXsFRYMbyZnMEc",
  "key6": "5fZgvzzDFcrJQU6w5Ptu3PwvjZ72HAf84D2iMDRHn5esf1DsSrU7W92mxiCybHjoSf9V5b3bYdxYT6sBvwwXih6w",
  "key7": "3nGBexeAoht8s9rrkXbMfhqsZerqsQqmMtM1NfJyZdcAYMb2CmKnhaLx2fCgKp65UYVCYw7brUfBGGVzwdwsXkYt",
  "key8": "2EaCUA3KLYbhhLYACoVPxj93Socee3idmezADMEAxeyy6rRrmGWk8cciyUSqAfp6LVBok4m5PtXf1PU1idtJbbpd",
  "key9": "3qHAABgSUJcv6fi89Qam9R1v5gPT9YCv7JCEAQPSHrhi4YFtBCka3ZJ77GygE2XMds7LDVUG98sfy7n7WjAbbLQj",
  "key10": "49QfYFFWGux5Q85eeK9Eg4ms3y6qsz38FmAaazk8Lq4iLHXvRDrPeM9xE4CV4nYaBrgmJQao8KiJRmt6PM73nMSH",
  "key11": "2kGwwGcErtv5tVhdqXhFqZmzuRAU5jjHS5GvGeuBpWVH98gExGnUcD7WKnhBQQUGbmkc4SUsmR6yhysi4vdFVyg6",
  "key12": "3cy9ERFn79V3zUiA36jn1xqpZwv3GnRYiyV56MHmgJbc9S9TMNAQDpstMCWFR9J7eowHebhVeZUW8zaKAY6EqBjU",
  "key13": "3w2azsdr5N2xhCt5uUBEXoJWsBMLHYJFEG3z7s4SQeTEqVswvv5frmS2ibBXd57ogx87eyxnAvKoagnAgD7KwqoE",
  "key14": "3kCE42za3on1ayKynir84JYFH1twsZ8Jono9LLy3YodWttkdL6aw24WWCP1xg9TPQjQ3fUY23t6pwZZivhnwyFyN",
  "key15": "2fssvfpUbPqDqKSfkPvZETad6Xqw1S8iATnF27XE19MK6paov2NeCgbFsVehVyMfcX11QabKX5AZodz3Pswtn6vh",
  "key16": "3Ndug1NhXt4g5v1413hNeyXvKcAW8QACF6qhPTvt8rchAad3RU7k9wKj19dhA4y8inTteGDtSyazeaygdykfnZam",
  "key17": "4m4TvES7VSUez2NP6Yi8G5yW8heDwYUU8jRM1BYPdCsGfMNTgmWV2QfaQdX7SD9zvPtssTjJ7CaPB4CvKBia91Zx",
  "key18": "3nTduvjtfm1shmdvtWWheckgxPgEPNwAEtFuvSivEzrU8aZpEmM7RS69mdYJL47mpYpFZHic1ZuY72e7aUmFwXTt",
  "key19": "4Y4VT4SBaus3wi3Q55vQJNMdtuSLBndn6H92hR3fsECeBKdP4PnVzoGSe8oHTsxLhMWYsQGBiehh1YtH8cy8ZmWA",
  "key20": "4XcRSfbfegzp7neVKgRQ3YX18w4Pu9Wxq8hmigFYsULZMxXUf11kGXF3nqSht4RVTcMEZRoVUGQ9r2okZ1p141Sp",
  "key21": "jr1ZY2Ecu5tTofWgvdxLJFYzyvyR5WVCGfnZPBg1L8MyeDQCrpgtn42WwhWbBAK5bc3X7nLoe8Nbk9Xw1B15CL8",
  "key22": "4T3eWcdf3G9trj5tMXy2oL77LB4KFX7sCmRoZ6AXJXtnK747qUWXrsKAFLBxrtxL48pNjaU9hzSQ4XKFnyEFJbpX",
  "key23": "2WwbZRumicgY6M1v3NdtGnvaLCpH4iXTm3p5dSuKJRY1QRu2H4NBxMhBTnQQC8y4eQWjL4thSQpMeHbCr5tEqqr5",
  "key24": "3Si41MBAoj1VgxCKr1vfztAGrmsSxBecKJLxWDXJoBK5b2rhPz1opcik7XbkPZGLSKRKsi3duhLoG5RzrZdJry6K",
  "key25": "8vdzEboMhGM4avDCiZgQ7npPwwSbzyaYA4VvHqDBPj1uA7WdFfSkzoTTUE31u6b9dCZrgjqQoNu2j6KhAV9iXB6",
  "key26": "5x3B7jKQtWsh4WymCnRnA91LHQPzp3UAj88T6hZWWXj8zjmhwTYi5EvLRqhoXPpUJqDE8626rQXrHCxa8zsbaEPu",
  "key27": "3Rgned22sjGMMnS5amXJBi7RCGe8twHhYXRPpjwmNoWenmRYyH4QrmxvvgBQsmhYQ5dCQvkc8dDheym1TLLdFLQ8",
  "key28": "3LNdiTcFKNKg2vRDvP5barpjCMhXvrzkJ6GSf8XvtMvrkfpPZ9U8a5UMa3xcxfDPnBPPfDYxMwB8HdTxNhrHVPGC",
  "key29": "46TugGkLT6npnCZFW9NJv4fdfcjhseZ3RD6YCCtfD4xpfoFrNPZyLmo7r6DJSebEJt9C9ypHVkKRkyWU9anY5Wi8",
  "key30": "2GoQ6fw3W7cChQtsxRrFsvGC1ARWaLQ2PdNAwcPgUGD9D43rEoccC7Kcwmiqz1KynE3NHS2R1KqrcA4vnoAnQJzw",
  "key31": "4KvgdYJQ1Sdk8SxVt7mB2QR5FWAzFnRs8UWnYynaArQxsXjY8CXzfXAqtayzgS1rYFUGqqZzGgSg27HzHK6J5ZAR",
  "key32": "3mDaFapWZAZdeDuTN3WBckZ6NxwqcRDkYwgsTcQkaU3CPURAxjNF8winwe59UTAnWTFLpRXKcYQ2z3MG3bA6Cxen",
  "key33": "UXQXsAWXGqxjzssdB1E7ximnv7T38KaEhD8emkquGvka2HuuiVu62RqtUMB9pDsC7SZgd1SPa8S5YGmcBEVdnSF",
  "key34": "6142APh7poUYa3VLLfZoY1e3TikRqdhSQpPZB3hF7iJNz1ePxRzLQ1rEmNqgyyTimYxtYp8PbMKi5T99fFDo7EAV",
  "key35": "2Gr6CSJYvAr9u49WAxwEyoRGxLaD3dqQcWoZJiozrf4FX9s44Q6UAp5haXsZJvj1LYMsZV3rhRU1LHUCL2u6i8zA",
  "key36": "2rTy6pUNhMh5RjFVVdVa9s9Ja94eUfwvFeVJ4gKJC9Yr8aBosEL4dgJ7c5AuCYVMuXSrjMyuQ4KZ7FHHffSmNrYt",
  "key37": "w75aFohsvw94UPRsrSqoLYSwvPf2STKEkkpTXXVToNE2AGaMMSNnZv8mxpCXiBdFhC9MLiRnKwbpFcREDCaSJoX",
  "key38": "2ciK4EFHiCDGxLzcEg5oBVmuHVJ8wcpSGLzgoZ3nxzYqZW6HR5ysxtECJgkVXuVyLsViw5dKmS3i9VDopXXnobrz",
  "key39": "2ky7xi4nKPGxEWqehje2bHdU3jfZtxykpH1PgYbLoRewSXHfEuyqMtM2L1jibygiXAGpS63aQZMsVguqu88Sami9",
  "key40": "336Pgexi8R8rYKqLkVyR99MhQLmvREuozpaNvwWD8WvirnXTuE12Z85WttCch8r1SZWqQ9VwGcSJoqTuqJ7JVvNo",
  "key41": "51JSkkkufAWbLqsNJM8MTTGmdsHYUp4xrykRgEGZFsaVyAzHSgA8SQhEJsM4CAS7PzuSqsdvb9AykozJsSBhh2Qm",
  "key42": "45xMnnoF2ewtULL9pjd4pKGBYkUo9ULdNbYBtjaPa6gAjjCA4fXJ6jGKYJBoRCRZqXdDknsoBxSGAGWbANxoAiRk"
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
