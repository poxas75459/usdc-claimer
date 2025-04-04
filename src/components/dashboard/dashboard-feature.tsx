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
    "4X979h2YHTDQURJHVu2aZ1z5rg7bU2fMJMNkeGhxAKAwiJxvbKA9L15vojsupR2kjNQWVUtRTMkuEENVexQwXPSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cn4z6XwejyQw56QpLauKUxkgeiZXd9k4GaJT36DVP9KMaGKxR6Z2xoSUxFUmMKQS2dD8cXGFQUgNufX18R64sKY",
  "key1": "4G4uNeasStcW4xQfSXWwzYBBS3eABM2QdS43DjZDJ7o4j3gfMScQ8kLdS5ZW3mBWRESRGh5n1Qzi3PNrYYKjprNH",
  "key2": "3AbBfQcWBeYzRtEeNBDBmEXMj6mpwNu9EXmWTiyMq8f5kSF6NfyTMjGENhyjG6vguYBhU27HE4v4fjFYWu7cG4sx",
  "key3": "58AwBXgK2XEJNb1R7aZtxpyuSCMx59XrqzRoyAVHDHLrtL9wy7L3YbdvsrvjBnpeGbuoPTDU2pfEUtVTmXRiVdam",
  "key4": "3fxuBkVDaenWR4y6LDRjFXo9pbiGx5CKFA6uyB4h2BAZu1XhQXQUW2ZrHBL59mpo7S2hzkj2KU1m3pJLoSu9vmxm",
  "key5": "34UpAby7pZW8baECsgyZ13VtX1QTzuBxFht45rQKMKJCqYTdg1mKNdEQgCA38mdF9jLjwjqgCjNPuvwZ1gqLfV1F",
  "key6": "z4X5GsyNjwsMd7wpEnnjm3jAjPZJvW11WWGTA41F48SV6ZZuf65iEaK794UqzN7sHQkRS6hHmGHPzGSuWA9psnT",
  "key7": "5xxQ8nZkcomDmgFEPNFdCBQQP5E9QVCGHLGS13J2K6EZRFduHRaPZn2wEx9cqQUGeHnmHWrevy65adtijdk3gHjd",
  "key8": "4nvsgn9EkoP7KgFKYcfn61TuZLRefm4HPsiQVE1C1bsaUALrtgBN3a5P24jkbPbD1g1sdSASPjNSM1c8g9rgP1gh",
  "key9": "4szYDxnMxBJSHPmmyhKyDo479gfwasqxKPMKaQ8tvuXSazdvJPeQWb3HVC7Hqj6SueqbNT7aGTsreu1JcetERZkh",
  "key10": "269kiCfzaycXcsdPLe2o37HzfDynDVeCSg2eUtDu4yBaCYfE4ZQm3ZrSCbpVWKRCyGuE3uueJHP6LHA4WeiU4WtP",
  "key11": "5hWajYeGVeHEwWWsrH4DRTreBwz4tffPtEypJ4pNiT6JMabEbCXyMXLtU1CW1ofJr8C924YJdEDohgk11oq8j5ms",
  "key12": "5C3M2Sjj89yXE1nAdGt9CGMcu5kjfZPL9DZ23Sxo8fgvqHw1Mgp2XZGvoKQL7L6zWvqEwSu456qWcjzpwXyHtrqE",
  "key13": "5ZzsuSSkMkTnZ9YJe8vnjxio8cNLhX94Jg6moRsm3U65yZBrZKgBai9i6hqtCkEWY8CQbe8mwZr5FhrBawJSek5M",
  "key14": "3DWzZg2aUzCioqsEM34L1tr5yi2Db2fbB5Uvv68pRzkAz4wwwNQsEqak3NCRfQVBmV71nHoZZikPajqkdcFSRGMg",
  "key15": "3VWF6uLQYnux5LT7bXMYNiCeWTgWDj7ZW7THJih3UxSug9ZVFCfeUa4jbPGhuknZQuKdRZew55YLacj4rLSbaUbw",
  "key16": "46LGAVpuP7pJaga6TMxkeSd4Ugo82VpGkhFMLBcZruHtd89GucxJptLkYecg7uejsJv8NZ1o99DgYU9Yz6CzRiN6",
  "key17": "4g5FwCVJVFJuuk56h4QUbZP1EUC4FWT5SWSK1VonqzurRoeXAD8C5Z9wT4bDtVdkhbsKba9FJNhbrAoBVeWG9pTt",
  "key18": "2Uiw8smDYz2XtTrDeeejFMg2REnSjQZWbfoKrMFkHep5NWRkzQchjatZ95ndJnDv654n9YZN3KU99Wgbj335cm9T",
  "key19": "ro3SG7nt3oE1BLp8NL1NmBcq3gbPkPxpAiP6x6gNNUgYugnR3MtGYi6oiDStGD5SnWJfJvgJUcsm7oTpWESeZsV",
  "key20": "P6wNTpb1eB3SXw1ERu3a2bbuLwFmNEe98p9vyExSXSEacE8S9z7yaPBKz59ZJeVCuNEaAHkeb12x9RN2rcfa8hc",
  "key21": "5mKXC1TuRGi8ANQ4v46tC5FAFKxxNZ2yGebonyU2TTjTrhwzJ888MhNNZ4jb3q6a2LT5FRxueGY6JbiG8RqwS1uc",
  "key22": "4RYoQ21TFdjt3HThK4HtMW3yEehKbpxjCpEnDxcr7dSANjdn6W3YqoJW2wYR7EwtA1zhv7BXLgVKKWazzNHNjGun",
  "key23": "64t3SQm8gUP5NXzktaeAkwWYxVX75y5xUefqQ3SSoVxLgcH6zLQiETvTjoi3MZPWBtaF5dk5MTuSs59uHqqpECiY",
  "key24": "xDiGEMk4cwTYjheareU5EDFFLALqRZhQWW5gVpB1YC529wbcuQC6Ho9hzmUSBrtpZzse23YifhvV14sUZksS3TW",
  "key25": "5tnPYMPA33DK2QQojq8h4NcaS4cpmCbzYzmMowS8yCWJHHzNJ39KP3XvKWAWM1xV7yNrrmBsG7tLi1cLsXwtcDdb",
  "key26": "5tBkXXccHmtSQeyBf9CVDXPb9MCyaZQX6LN5PT1mkGU21S9CahajDBvGcwx2npV3rz7gJ65EitJ9K91kRSMCKuvM",
  "key27": "5jNNu9s9ZRbCwZUAFDxE4bGMSftj6qv3KR4hNCSc13SEbz1obuLUG7DScPYURt14tcLKDoYyn3UCqCF9oLHTavac",
  "key28": "3RvzL7xDExGnZnb8uJXNmDeEZCsMGMNC2f4Mu1NmnXHLtMbC4zbGsQm4P4LhHCt9cSJd24FxnmU2PjrKzb9ohFBZ",
  "key29": "44QBi9aUaQikJYpKYTJY6tb362vcTX9ZZkGZEPj7wSDmdx3Fp6NzaqKWqgc4rRUBK4zNg5epnBCi1gQ9XewLTJWU",
  "key30": "2j66Sw1cmgZ3XYqShiMATV64Sa2ui966vRzEjNT4hQ2K8FQ31qHsiWhzmELEZoQCkXX3pMcUWViGT6s3jMVBFhWa",
  "key31": "43XtWYvuP5eAMw9UYYciLcU5e4HFxCn8JPwFbo7yAD3w7WtsHgNrewZTMtssgpm3CH5ySHVCitDUxHsRZ7BzCvxX",
  "key32": "23AeFHgtaCNzQqkq1BaKg9bmDWDZE6tN819Hs4NjE65djTBEh7CSvraE4yGYtWEF81gkbHCpSV1uW3auksc6wGck"
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
