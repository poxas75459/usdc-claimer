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
    "rBqwptMf63XXVYiJHfChaPggWeHC2Wn3CHPEswzV8MptR1Tr5KnebAJYNkdsUN9k8RLE145RG2dxvJWjz8tke8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oh4GaMtbPLJ146T1BMd3jWhTKypZ8NSvp7g7DQ5U4XqQ99qxdYQ3sfGZkPZFEpVun4srrrmpxXoudyCP7VFbb2R",
  "key1": "4KH6cWShgcXY7fZ3kzAWRXN8ZVt76BSzbmHPU5e13yp8ujNDPMgYKeXusks5E2vXc7XGtLvYmrjTVrGfGkP18gch",
  "key2": "z2yVizKMX1dePoPfCCPxqY2BWTmrZwkT4KSghBrrzC4XgphTBEhARVxkHWJTmppdKewNHi3CnQY4zdJT7s6hapC",
  "key3": "5tjxmcGv2NSCNPGedGkgvDcfo3bFMMyinyeQCTtf6i3BKJpm5Fa2vq9GyCyrAV2EszVGXawYZEZyg3CWUmTx4Zxf",
  "key4": "3DwSmUuTy9cPFwudaB42EadP3NPAhTnRFFpqkgAp8QT6CbHMUGsUzHZ8poJvr79TBggDpTkJnszBrsKm1iAhWHbp",
  "key5": "3BdNnjsLZ1HV3K21CKADMVXs5ZFKwFvk2L4jcdqGDD1qm7yGBkNfAL5xnNbfLEfJogmpJBKNMKHno26pZC76Azm4",
  "key6": "uKMhg65DKY4dK9EcJa22jH8Y9DmUExyWa683c4HsbxQG2sSbgWG8gt6cQkCCnqGQgH2cB1rSrs8EZiQFpH8mAgL",
  "key7": "3R4gXdGvqGE2M1r5uwKS3aUegZ3o3rNR8MxY3RZWSdkSw5b4Dczuq6nXkr17CEgnpyxkKr3ZFVWiEzFUXDEuvMdZ",
  "key8": "5NH8Lk3NgjgkF8yyrZKEZLMWvUJMX4oG7PwXDEnBt72BX2SsnkgrfNExvxJpXLdTGBv2tkXPR4nQFhGf4EJUPXQY",
  "key9": "5JjS28oGTzkE1j6LfSwuUavgBeWNgFF7iyArBW8ik1LndCvP5rudo6m5tMeiGPbwT529Sh2SyuJPeT34AQFGPu2V",
  "key10": "5s1PZ3y4Cfqzn8u5rt8JA223XHJqyLQCG4tAVtsa5wMyLjJYe7gHn1bJKZpe3S7ta7XojvbExGLumVQzwLxKJDfr",
  "key11": "2ApJ96Nhisaatd39jU3gg6rLpvmR9qE5ir3KKxyWSVMnSDUuc4duuyzmWYV3hRdLHVLo3pGEMMzMC9X92wcbWU1B",
  "key12": "2EMhEhifnbNP5fMiF9WZQBjtXn6GEZXGCWsDwiRAVZzAcQrEBRRTJekT2W52WMA1ybZ8UG34kxyEXoxoT18h8aKB",
  "key13": "nG3iArzV2aTfJ6TAAgSSj1QwzznuSa5ScQGRq3u3QgiqeYf8Fru1w8A64wY12pPBzxuPFyw1RTfQbGmLsEVMCHG",
  "key14": "5V3ThiaaDfxHa828ayRWzJEqMJcSmgSFz4qtWtxExG95DHipgKmwdJZWLA6huuBe5ou8tWhRRNw24VpaZ7p1hAjV",
  "key15": "sm9jWcgV7VvyQEb1sD2oUREiLLxVQa4nRbeVnTauvqj5V5LuxFZKuhuMsxG5LMnQZh7k7gw2pk54u6Wb3jS6ZtL",
  "key16": "3gpK7qJ9Ca4d57NsD6s7S44HQcKEfUftw9dCCTPkaHHy3vd5mdRWM1GQV1XsnycuBA8kB9r5jN94w54UKTv7y3uW",
  "key17": "3KggtVBRLbkqSpbBUkvmu6BbJ4QCb9FmVs6B1sWmpJjZpaTDezkxjGvinUswYYjE3GaKd42KFdqZVzRqX88g6Q8u",
  "key18": "51qhuMfPRcXYpLMv429UiE6TSNyXHFXCErzyCPCT27UBsAuXdFtFP9M1FySVsPZKvvQuKmcDG4qNi616rNfuFHLf",
  "key19": "61wZsCkwcTWmSVQ8bXojQUcDXA1FBCVx8nwA36jr7rXy4Vy4YQQyFRGDiuZa6EWoWN9gEJ1Z5Q73BVtu6ibyLHSn",
  "key20": "5bD4Tru4JrhCiDoi1q3X84Fc9BwfUTp3tFZdqBesLXRdjZYwrEnmJ6ny5Q3zZhYhKp2mSAFHrYLmTuKaRdXg1a54",
  "key21": "2U53FUi7bdWT6YCoQHCs1L2nHWWzztaWGDtKpBbpm2bBGvCh9CugDBXiX7RPxdqjrjhfepJpuathzZsKATpbjBWJ",
  "key22": "3ZfNpMEser1TfCgeeqMTGuA2pngnnQEQxshU76As92YvqouN4wjAo534hQeLGgxtWEPYxAyQ8wM5uTubW8jnR7kE",
  "key23": "2kFH9zdF9qyUwovHhG3fAVSz6myHZA5cc6yB6xqeZ4kVbHkbPVXBx1zpGap7AmhGcdBVruMeiFNaUPP9fpoCmwFi",
  "key24": "9FoJx1Ch74nWMzcWLYcf7evTdxyZzhnYsZuh7Zo8szuMyTkAoEvWVnpG1ozTD4YpFtinQ11bMZxqgFHwCVhoS51",
  "key25": "4BV3fRWUZoNuaCpWubZVZCRzN6vBVHVtC12BxXAiegSXfHZvdnccQdd8vFgg7BaNBALGVZY3ff4xjwLA3jBKHvcr",
  "key26": "48sUv9z5qYu5XY2e1zfcRFLGYMNPYuqJKDNDwJuYQdRDwok5DfKvS65RRXToiGeJrH5mNQPkEfx7se6G14A6hHo4",
  "key27": "gH8zQboFQnQUi5Y3P9SA2uyAi934yPk8ZkpqSo59wFWAXoXmS5h9MNXv9e1UcumBLX8yYqpeGeUUtosk1EqVuL6"
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
