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
    "5uX8gC8kYJYmCtgP53mGM8mreYvye3c2bSijBwpymuDozeSQcFJWUobz5u2KK3GdEy9jjxRfLbRDYbXGf2zGs2YU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WWTWhADwL514aqaFNJw5cKsy4upM4xqRyxdo72qHeXNspJizihNgqbsc43i49npHRqZgNiY2Hurdrhg554nhE1n",
  "key1": "5i99zE26pXYVHFyPo8by2beChA8wxy1jdKEo8DKRRxXXRUTZtcV6boWVdu2nHB5o3qT8dE6ypwvKJ9uCPz1GftAU",
  "key2": "56pP5aU3aBTNXmpFsqZUJEUgqnSr5bwAkWAjVHetcntn8RWwZ6KMqkchuzd1ppdVWYnN1qVubGhF4D3GoZeJnthh",
  "key3": "3gwiKatQNmN9WbMNoZELjWpE4sENEWVgc14k5ngYbAEbobcAVrTc9DJ7nj2tSuMSigAy1Brhi9xNJkTfyJMYqjvc",
  "key4": "5EcZpJ8AiuLc6Ctowawr19nJqvEKphyuu9Sf3FFT2DbKZpxTqsByNeUzUGndPLVuALyto91sKQmuSALpYszuw6E3",
  "key5": "5csbGLHnJgtt56Y8jWdXpaxeUbHPM2xZC35T4Ue2Zzi8PncCvrz1oXVkKf4S59JJfWF8Yzy8C4PQDr2RHLJGz6eb",
  "key6": "2QnCH4Pjti74BRGYqu85tC9L7xeEPVy4uw4Fj4TzTfsUFNYtBvzc9bN1szQAbN9vpv9LHXLRxbA56t9A87VPcWne",
  "key7": "2dJi2VxEGDchMJMmocHSQBeGvMY8JiF3kejny5X3jqEhZ8Z61PVkcD5UXGoA12u6GJ2cUYFBBk29RWYebjBejir9",
  "key8": "3kzUHyt5yWsH5LMvirz6T7J7jEi7NHm93hTZssAF1xmtbe93LwgKGskSdVU5ijECxajsYesiCx9YQevg3d4NQwS6",
  "key9": "5Fu9BVzXUANUVAB2zqwAST2tRDmhvdvJurrV1gS8qD1cKVLABmvXQHgGsgSZcj7T1nKJSEG1EZnqjdq2uL4Xwt7i",
  "key10": "66j3oLwfrxzQTknENCMG91X27nhb3zg798xPtyWd5fMSL9iWBeLMx3oSF39F9hiCy2Y6ejz5MpraxLACuC6XWiB3",
  "key11": "iVvgTmdfiyYn2M9RfKuZ9Gc58e364EBJmTMfRmGNLUJrSjCC2teCWeAnJYxXzV7ockogRw1bLEPiqVa1eENe1q7",
  "key12": "5ALioDzESsBRH8k4Ru5petDFd97KecQE5YEFY7QT7Q6EwL1bU1RTWXqjJ7wcu3FrQFymwbRcA8TGbejaKRAPAmJi",
  "key13": "61FfL7mTKnRWusP94a3fHhFWt4fnzVPj5JDVh5SttXuwqGBiWdiJPXj5YyWSiYP1oaCo5HnpymKZZBc9yGb2XaRN",
  "key14": "3gmg7y2tLcrC1tvRttKmCeh2B6yKf8MrL4XiyWDTAP1mqA2jH2F88fekmtGfmT5dq8tSbPqAowNMmmY2LDXjPwbE",
  "key15": "3HTNA8NH5pkL6dDMDcY68odQeTYSRuCWyvXhk1Vm1n91Lc4j5G8V9LmYuKVu52rcc3CYhGuwVjnEKiF6EcAbeoHL",
  "key16": "GM2fbJQvNurZQGGB3ctabi5stAMMSdTwV2sSoYDybYjvh8x2BD8imZRsXRzHDYAHGMb4q8muZoGM4FNKBRJdnDZ",
  "key17": "3LF4amQtEBMDKvFCjsvQGMPyJCcJDnQh3eaHJ9gx8ohbuKjrAwZxLpeBPnwLS4DtPLkmzzYxCD5gDEMH1H3pKHv1",
  "key18": "NFidvSZ8bcXjeASG25AUAajPE7Q5HgNDfEuppn3qr9ofhFKKhL1v6UsTSS1LKyQuytHqMhjwWEex62rxexiu1Fq",
  "key19": "qKcGAtiWMUf4Vokwx34v2psF9eSutgbV975aEzmdwBXC6xJFyjbZnwptokDHha24XE5vg5SvbvtRQRgNpvtcY69",
  "key20": "3ShVMJD6gJnEyUPK36sMMc42YE8MDAvaxxHWt2mTZiFxjpoaEjQ8sktxckTSa1TqwWtkwb3xm6wacxATVCrriSM6",
  "key21": "4cHoHsE49M3cnkekzHb9attHdzE73tJreppVXnRNBVFbKDmragKcPG99zrSXQLxKCwiraSRg1CkqyqiakZJvCz33",
  "key22": "xpQjsCnW8Q12CUrF3q38DPLLW2ri5TitoyTAwEd8xgDBzDM4iLkihpvZMefJ34CKe1QdWiT7ecGwvRaU38xeyWD",
  "key23": "NaSu4CLZXoo8HRusinRsQovAAvEgJajiX9M2vgCYxu6QVgsEYM79WA6SYNRTuF7J35BowfvimGdz5eWFR8V1Xig",
  "key24": "3T7Y1PfR1q8E9ReTMo6iF7EtD1mHVGeZhpDHCwmMGJstGspt99dbvsAj1o2bngyAwQETs2PP7EFrdekjK53oEDyf",
  "key25": "5AfAc9nk6GG3G4iLyGkjY5xHpayVzB1u3tkseHxUqqbGmyVeKdSmEAVHcyeg2YxcxkykChGVo3ApHv5C4oRrGHPN",
  "key26": "57HDEqAem1YHiYGRWNUEE6RujfQPE9tDwRibHtSDmeFEmfBRQDP3Zp8ppA2guGFzNfbrENT7Se3wiA5XZurPmpSi",
  "key27": "65WwpFyHRtMRErUEjoDVNDzz1xh1MdFe4mWjwppcF78LUwfKFsmtF5V5guumqt5s9uJ9PMpKAhrhepLzwzkzTKiP",
  "key28": "5haVsk2KyCtsuYAk291DwtXErS3cJKJg3kULq8Nm5cvHqK6BteUexFozES8Ht1DzrG6o6TSbuEB5aQJTdQzCcUFQ"
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
