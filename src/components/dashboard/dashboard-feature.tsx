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
    "2H7MPUwt4gJWrVEXrmzJE7ooQUQZt754EzSo7mHTTrDcMiDhr1aK66YEeSLWRpxcbXj4P47zNGyduvjTVfrxRAfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MJkzKeAZZVzALXhT8awKbzXfnCPzQ8w7bwDUEVQti9oY1zHBCuqR33suxiYQryExyfsndVoqhLLsVRC4eweCAdP",
  "key1": "5kHKRgAstB6sMHxjHqukwXmDnALkNgJhAZejcCK2BmpoeG4fgLq8NcFquq5GmTQ9Lpi7uy9kiSCfmXVWoBATRE65",
  "key2": "5nQm8L6eCVWXPJb9G9Mu6vQFyed2bujiw8YSJQ3RNCoSXcaWSXRAwf3yTCeD22zNmLZJhLN2KVoKbB8sfdL2yY5b",
  "key3": "5jGYuV8kJFRyxDQ5CYQQovYgbCFN31iftypAWzwaXFg233eqVCProsr32BzbYchx3U1sHJ1QFB9UiCCLNEunrTA7",
  "key4": "41vugXrvFom5giTqb3bSj6gcMd8wtQPqktNqD9HHTbPxa5FqKZ23YyrTKyKH7M2Uqawhut5P6HBcfDqwz8tsCELJ",
  "key5": "Qz24Z1ihJsp2pkqSP5sR9N8i3zv9tR6GVuZb97ji2VJvxn9YfZnKKeiFXMwgPKgsnhRamVoc47qEVVhi3aQRxvt",
  "key6": "2eTyCtEiBvkCZHSa4g3HR3XKGQ8Gbp72TTPgJm9TG8wBuWH4uWMXXs9i2QZLWb7wbV2dHsfhbWCEvu74xhTfVMsD",
  "key7": "5v2YYbueR6X9JzEHEpbrgjjXgLzXAuue3uYML32T82GrbobwkQWAVje41EgduHhpWuLHWtUj87FioM1V671VVQtE",
  "key8": "3btNoma3T1u3dSkLHqiPwxQ5V4W5Bit65CamoaHxWHuM564HtBL4fWJ47ZBWQNtCcVFtYJdUEKnahfSpnFazTATk",
  "key9": "22WzC2ZCDYgFY8uoq3KC8GqUgMns35RT9BEpCJegK76esk8ydZpQfmuTvxBFFnUU4m7LVBDgqfhJfwgSfcKUVwVU",
  "key10": "3217tRwcoNSSpzAWU38o1kSArPmz8X9zMbB6w37xprkTbJxXGVcxdRo9i4j68yxQiRMjsyYszrNsE7CH6VbAa4hk",
  "key11": "48ZxY6JicGTW7w5oVUnNYdfH8ETX3hAj3itdrd9tKoEAh3MLZ6XsuSJbByi9Gc1AnZfGBcX4mA7aigryQUtDCoFY",
  "key12": "qnkkCqNiVwqg99ZgRA7PwvD4qpSYsUffxueGSSwfEc5rfs1ScTJExZjJkMMWa4wjHGK927NxSnoek6WCj5R9SPn",
  "key13": "3BSBCen8svzGcnHKHpe75NyLmHKL3yXCtyt25JzNNnywiv65efmrd8HWpHTuSzjRgJ3z6kfv3j53MZ732bjnSsZ4",
  "key14": "3YBnqZfhwNF9N9d1oPFfW57CPK1WvJ51De1WPoKiW8dp613QDKcXv3SArsFTgvHxzjLc5e63NAuKWQ1JbBKN93h6",
  "key15": "5UbCb5oS3J3jNuxp4nNERrS29ZnQfggVqV5SMAqJDFCi6PcnnZoJerPHDwvphz2bUznPxUBFFJdCBrWeUeTQZz2Z",
  "key16": "3c6Uru9h7Cwaat74ukzdRo3QWHSMGmVZTLzUFyfvsx8funmxq8B4Vj23ZLwPrsQj4Xv13My3HqhQdsSxJ7DdstGQ",
  "key17": "42FvqW9614fkjMgioaLuGRY5bH47qYcjLCovh9zbfNhoA424JatHq63bEwoUm4vZJddLEcGtQDc9FyGB9rhcxNhx",
  "key18": "3azFgMHR6wLhkD2fmZdskFmkGPGbZtw1rqzvM19LAHCyeDMC8xugNsJUkzFrgEWnicySr3C4gHRMwNxxAwpHSvX",
  "key19": "4DpwVc6CqWsUQRJeGaiY7nXjvvL7FASvh63UyDk4ySafi7zYovbuHMs91AHFjkMMSscbsktepWWSoPdda36K6pME",
  "key20": "2iKNa4WKtYSTkYzUDvmMk29DkNYbWKNjYWZ7cgAGFFZrU4aZPYmbRwtFjdi6pcX5yskYzW1veHefe2BrZL94MRzh",
  "key21": "rJfUibjK9vynFNgwYbezeW5kToBGZNRn81pyTeYJQiNAEuBrkjbcAtUKUJDXoQMxb9kWTubE1hRXefmxapASSto",
  "key22": "29QTfL8G4w9xoQrUhZn4ZarJaRG57wYaX6Y4uDsUo2bqtoLgB7DJ1uC7gx6CkNZTaWJYrddYUGeozGTYjyPhH7Vc",
  "key23": "25qt3r6doR5TVq2q5vGcUzyuxhNX197yxv5QyyJtkg2kib38RJqGFHB2DZeLbMMYKn33u27935CfgYjnuqxc6HLv",
  "key24": "3VRdmJVraq18eTU6Es7egd7QpGJCNuggva2yRpmtnkHxXww6VQVDofLJ828oMvvpbMJPGbYb1L6uecsPMGA444fE",
  "key25": "2pYQPveUpvSV2PQgrVAfiQsBbAyS1mkQ3Bqj21reS3SRwx3WPuwbRUVPxZzKyDt7PbG2qcVRdZttv149gYCf7Mmg",
  "key26": "4E29WnPWRP8dkVw2SjMrvTvY8ZHAMCtUcZ1mqU2yDkVhJSKwKtvLkyKQCNAjW6DjAL4TumNYoor9yuuMW7GjEYjY",
  "key27": "5zDjj8yMn97cze3uB6YXkEx6RW6WpbH4n4V9BSEbX9DBDzHhMYPL2NKzySucxbV75B3JuVgd885ccjqDpdNr3q9c",
  "key28": "2uaVo4hMS6M1PNotqb2dEWmiwR8yYxm8ivNriuFNP4wQrEFvt9nSG3DHKTbXYdJdMuLz8YMzUXWw4HvEfreJRAiP",
  "key29": "5XzJWnT2YGinhkzYhF6GTLiRBhHC8yNnrjFeeWjBvKfZxzuG5inyAGru9L9saoJNEKx4GWRfJSP2FimYMnC5SbJq",
  "key30": "49BAom2VpZcGGmYCtvE4sZTbjrHM1k3CuCEB3cY5h3qrYbCyyYYLhoUgGok2CRGRKKX7jLXNa4C26dxCMgfgTkqb",
  "key31": "F4VMUUzL412Re1DvHY4n63oySfQicy3FznPdmvnFrcUm1dKjh4KANdNuy1f4Q8YtpWgj6KdhyAdcEmvaNYAk5BV",
  "key32": "Us3vbMJmEUxZgaMn5FyV9Ks324Xe32Rtz5fenbhs5pxrgzT63c167rZoHSPx7TegQmLBPETdo4NHMAeLfjppQFr",
  "key33": "2DuL6MyqxHD8iaYD7zg3BtzjL4GWgsJTK9SSH7ndJnoH2aKxUw1Ym18TPe4YjH6LcSKxDYkRN9GTtQs3RpT1Mfd",
  "key34": "2MMUqpMQjikXpVGFek8Wz5eMT5e928dM5PSxfPTwHoh1Dys3Ga2oEPV97NeFqoFcGKTVDHU5L1tKRqyh2uZNzaGM",
  "key35": "2tNfi4fKSvHCmQRWY8YL9zVrFXRNKv3L67H9rpraoXQK3bDsozL6nsD8E51NQabHMU7y11YFX7e5xFQw8ztq8BDW"
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
