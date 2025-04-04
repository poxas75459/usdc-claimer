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
    "GWRpwyZQb9qSW5DDoGyd3p3LJjpcskm9eNGgpCwnjJZMgUtysUQpsWVGWcdVB7X4WT5Z8aLn5nQy3SwnoZA15gB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H6UJvenRfBUcRubGthgbURrHRVguJNNijHs8Y3iSPJqEa3KpFeci1fJhA6yCmKjUJxdjPYoWC6fpP2Wbgix7hTw",
  "key1": "5vGmaSZtsyKY8qwES4QyBS3tX76L356RLtFZ9vMin1WnVBkLKWnuZTjrssEE7s1imUeW9TnkL8MNhrDC6jqNiiVe",
  "key2": "2hdiw21DirjfaABvUQe9HWrPf3iVAV3TpvQPWFbVoRNewFhR27eff7CpKPKgT33JVj8cz8o5s6kewg5nDTJc65nt",
  "key3": "2gXpzZdeLq5sAKwAdpy4DxiAL5foqNNDSZ1PcMkNfX3YXDwW8pKqFeX5w3ZEGdwK4hr4yLCGkpTbiFLQjdQ6my8T",
  "key4": "5gvjLUq1e6qrrBf2PjAtfC43831wNCvjhnaNmKMSNh8dDR6UvDHYjseFoK2PTvNhci94k2U5Nw67ejiRK4c6xfaA",
  "key5": "CdruEuAppoKVRvmj4e1bNnftDD2NVRFR24qRebjUCViXAHbqkJd1pW5uZUCMETMLVU1EBTbET5iM2UKSTzYwCQk",
  "key6": "rksqR5cntyqbf3uAP7MEyMKx8Y9WchYVP46c9GAhg7oSaBvFQ5sLi6EDCEndf7zXvbW2iZC8J8wq789WiQffJYm",
  "key7": "45SoCTtmCrx3kZgX9Ezhh9uc7bt2YR2jZRnKi7GJ7ZcgMEW1xkgHFZJ7eXdgYoEetn3uXb5U7FYv9vQZ9tKUxEmq",
  "key8": "55iRi8CwAhVxW52saEBJPSdYLjHRwkS6edvorQVjX2VydCmZ4ooT2jH1Xm6N7ogARUYcnrWiVBkyJrfMAUr95zy8",
  "key9": "4Qeai1BzQcmZZvhFbGLHM9FzAVBVVoRwfRgaohL6C7Xe9kZFbdJcTTG7EaFZaSyYsgv6jYBDHwW8q3f4wE8svAJ1",
  "key10": "61VFcH2yhvHQsuGmVQSey4fkxNZQBRxdJj3M3Nn8FZtnn3r5cVLJbQFmAVrAqpFSrijns2H2tDRYJkHJYWQaaFjA",
  "key11": "hTGxeMDPG9hGf9CdyRLbDz2oqWNQmC77ZWYWtv8a8WvPpPZFcogGfD5nzUmj4fTzrzuP9W8SCXHAXd6umK3q8s1",
  "key12": "RL57hXHQQvFDdd8sq9dRgbFxZ22xUchGUNWQCSMj3Wrrq1boLtMCa2U1h8NSc3UrDuioRSsoZ3Fv7FqUuhMgyLX",
  "key13": "nC9eu9zERAmcbQHeqtetydWa7S48kYmSWPUdJQJ394Y1u6MHb4KSw4bq6FDZFHRr5REbrsSg9gBkJx2sDAMKJL9",
  "key14": "5zyhK4SFX8KXnB6S7UM261JkZbbhKgu1dH5ktfJ5pTucFF1UeW5xTpWxFo6vqyHx8BF7XXSJ46EaiGXnamuXeC8h",
  "key15": "3WLfzFoG34xdB7NsZmRRN2fhjjeKRqA4RKigRHSrF77LYKnxnbyTxqVcZEfGgfefc2JQB4EQNk769YF4HTpzcohN",
  "key16": "5akeTSH45ionhr1D5Uo2wLQXsD5LTitZBpCMi2gPnFsQ6KxNHCPn9qdNq7TJroZBbF6rvPyr7AzRYTKUQ5gbT2NP",
  "key17": "5R7gmeZRr5wMbX7uK8UHCB7z59fxnZZvRGgBgMxnkADduBXtwzh9Qxbx7zpH7UZt9dVMsVXoq426snx3eAx35WpU",
  "key18": "VCrDSZZa7HkhrZs1mwQLf7d2XtewLkzhx91hdcVWxwEGhixPX6zwhdstMjtGRjRuT7URE459WYLEETvVtEMq6w5",
  "key19": "32p9Babso5R6ybB2T1fZZCnesooByFkHsVQRwJhEq4ZN1mcJmPk6H8m75mruRVzGEMJ5qafz7xFNQtmAsNdvLwuw",
  "key20": "5QY6vJ3CvtaWTzTheJBFmg9x6tBD7PE3GCPh1zx51WmzoBUYmstsbnt63XzeWxbTJaKcCGYrMYqbfroqJGBev1uC",
  "key21": "35iQgLLQs5SACuXrRgFFTLWHmZVRmPJb2vmbgS3TtcNB9NKjTbU2cNNcpBbTQcHZnKBKCLUrtJYPEzkZD4tvciSe",
  "key22": "nC4s4rmjgqaxjQRExGZFPpSsxAFvT6MHNe9GuqRqEqS3EkrKzig4pNuPSUr7LCXPm1KMLhLLBsmC1hjcXNuzVTJ",
  "key23": "8xhi7u9v973nAzAn6w77Xj71MWbAmmRF4QDnL6WDHe2zSsBT2J5sCR6taAyrNwhTK4udyQBDGKVEXkVSF4sPDrb",
  "key24": "2HNrp7XVK2E4Vyrzi32VNSsVWUbnn2NoRZcSWceiwn1rpZ1XWyLEqTQbzroKtstGtH81cjr55GqzGjesjyLG9CZN",
  "key25": "5GCXrDbiCTEdJTphbPtAGiWEstuL5CRJtzieXBh2g4J7V2ihGdvJ8qRxd7FdZpTBsVAbDwDFjHsfQG1XcCwti98h",
  "key26": "4xZErbtvV1rwHBfKZDZ4YfvJLUpgpCDrGpfftHUxaFQ2Bz3CKNZ9tWhtqbxuzGAaf5JYf3Vo8BEX3cbveoJphnba",
  "key27": "ThqL6UMyagQobVgATGa72WNcG2aSXUw9QSpTo2JZWAb7Hk5ECJzNPbv4c9TT4otSgRmJ6XZvaSgCiYHCGnBmsHQ",
  "key28": "2gHwqcvJiDjnbXD8cPT5iD1mX6x3wyzTZ5AhbsW3csdvdDd1jwNDDtfS8QxEzTP8kufC4h7oLsz9sphdwVL62cWL",
  "key29": "3phBgHQ8ZxJiSuUr3uY41B5euHFBCeQM8uVXHAF1x73sTFE7r6nUpDxHSHToFVrdspkBBoqZSd74eCTPHR9ttcm2",
  "key30": "5tvMJ6rskgFjRW9GHNKD9boWRuvB1zXJKBhxBNyfqGMd5VTK9kequNC1uLtNMftZVkATMJXDETpc8fEQeqtDjBf",
  "key31": "5YN23V7iCk9B7LppaRwdXpkwYhDmPGirYn31vVgq9ENUwpTXbJYwTsFdJ1Mo6mnK1HCLKZaMovL8FBzYb22pgN6S",
  "key32": "3ZFcDwy4jwLVTpjfgmBQANpag5cTrmyAU2JvU3zmEzusssvbEknxuktpL93GY36mjV4R6KRWmGvUJ6NwwB53HtNA",
  "key33": "2CrSRwEgQCDPAQf6Dzwif3GZdticDivs3P2BzxzVEquexhwmh6obvRtWrEbEX3c9ny5GjL2CXCMmMw6bSXCHDoku",
  "key34": "53obStVdDnhBPXwo4txEcqjXQVJvd1LzM1pGWuaMSSVJ472Hzzz4d6YQETYNvG9akPwsEcrGbDCgKaXuzBEEFM4Z",
  "key35": "3eWjZniw3qbWJqVGSDbwfPL6DAtCwRSwt1kHgdB5A95fCE7xXjEHBSL39VqUFypqbFCryCUeXWeThk2pJoq3YUtc"
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
