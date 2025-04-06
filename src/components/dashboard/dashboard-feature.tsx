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
    "338iGP5sfEHhTW39HcBivfQE3WdZ9kzkgsw1eE3oZiAZNUEQcV866RZNx9bGyw28ym9tgHLqTafQAwSyXD4JD52D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pewr1RWQo9BdCbDxzvFtBqDCaT6hXwC4LtinxsBjBXjDxbUzkKGFEArRX9kwNZ8tUmPiiBZaRJdL9woqmhdGHa8",
  "key1": "2CKBg8F4gxwx7NmLW3HQSusvw4Gv4RNDKohHfkswMC9WNH9iPEvxXrMqbAWjD5YK2CUjABWiNjUdEncEVNcR3w86",
  "key2": "z963YRyLuDScj7fbkxQnwnmHv1P7VNjCUESSGaTQnkAmph4DRfgXgC9JzVAhwev3YuLP2xH1K1apNAz9F7PeFv2",
  "key3": "5VPKxPNwAam8FiHi3w2Ne7UVKHeRUXmhRpMuLNUdNsuQ53xmJecwCx1pswnHXCf6QAQAx1Q2MjDBhvHek3Pswsmz",
  "key4": "zGS6TqQ3y65oJK2uUE9BcGuJ2aJNwx64mLPPbCgr5R8QjNuFchSEFPRTpf4X9cCZWad1pSxAhG9CHqv8ZnaxMgj",
  "key5": "2bH95Er3bGGY8GuHVcda87Lcj8c6ppfNM18XtVconqJ39bYCMmwvM9oKTtxN7n5PGQQtLwidNS5V5QEHMtiCWz3T",
  "key6": "3GEwyLsGNUUyKYeGKB8K184Zkv6sHyY1o77Po4b1C2jmMedGdE3RQcFgJjph56s418HUdcYR9qEqDDrMTh92ikMN",
  "key7": "2mm2AdoqpA96sodV7CPD6euNeizKALp8AmesbswRq12HPPH1N5xxfCt4BDfkU3tEEt8SMLrbpziPdQZvPnH83M3",
  "key8": "2Y3AU9SZ8SXWv5u8Ks4xdP76uUFV76kjiWt7fqotyEaVqeGB4LR1hfgZyLrL2uUbxu31AqrPtX37uRNnBcgcpfdD",
  "key9": "2zLBXnUvVSccDXwMhwpEn21hFFbNb4uEtFBPLfAUwtELPuJVz3RvmNGDYdD1mCbeVrogU6hfwAneWC8y3CWcgbfG",
  "key10": "4RjD3fz8ZhvQjA1YDmDhCyCfJstKP8NEvhiSHVHffnde1BvZoHigAArVmbZ6DGGwqjVxy7dawJVXS8UE8aw8hf41",
  "key11": "3LbSyXjtdNoveLiYj5bDBbHpaXhJwaLZsbrjgQJUy466PVfphk2xNdP7cPe3fMRbsoN9UyBrZyKb7NaBVchr7HMt",
  "key12": "3V7FSVP4wvKV4iydnWFbdRufwjUgWgEzxGb98UsjvhmLrBw8qLiu3gGttyVGxhPGdHm59FKEeYh7bRMwKWvMHTZC",
  "key13": "47sBjauo2sncCAJ2iia7UyfeQEAZpMGSW8AyTPCL2bNNBJLUXZc7emsFydP3ZVJjeAue9ZWTMDSXWKRraSoXeSkF",
  "key14": "2gWaQwx7mM7H5zbtjrj5huj8qLyyMXTUuBCsvL5PKPfSYibxiqdT72T1uDjmsEwvKrNGYiHhdTY5bVEQAZBwvCHr",
  "key15": "Yr2grhw21RJaYZVWPmmXDyQqmiaZsFW1McnBeyHVKo4F8pXFn3Gz4h9YQdS98ZKkcVN2u5fWVmFXhAuQLPS3uxM",
  "key16": "LVSJbzT5Pg5WReoV7tiLnv6MLQ73XUAN2teC736CoQFrkWEK5y6gPY5pA2QeJTfpDcjEtmE57rRgd4YUH4TURgT",
  "key17": "5i3pWqv8i1xZWXSBoKFMk9WJggRiiMAkL8p24hbPeWypzgeSLfw9Qk7sxzio1AJiJZ5kGPifjPvBQ7DAbBTd2bv3",
  "key18": "3akMMHfVgszy5Aiacwy5rryxW7kWnqfpfcCmtStojFknYBKiwJVAocDjybiWRxJVWpmCGge3v716PAxccm1QJskp",
  "key19": "3khhYG7FeSv1E34wkZNaVeCxVzWajtxfrsnGMUZqdmtax13NUEjw3En23LYRfLowNvJxGwKpqEhoQ9zd45ujJLj8",
  "key20": "5TxukQQY4j5mZduhaDQvepcdbZZUSYeCLQyKU4Z8fKwJ3pHa7jU3p5QQMMCG2YEd6ntggoJmPEwQiiwqypAL1GzC",
  "key21": "3rdc927msocoEDZWhJaGSBhQP9QBWjYGTgHPgwQZELFbDpg7QARaUnGczsSKHSvWJjQLrp2mCb54fBmdYNYZezWr",
  "key22": "675nS7GYiYiemFiX8z7r2z3wkK96FakWznJqjRT6i1hNnm43NV2s7hA7y84yJ1deUAtVCFNQbE6RqcEm6eWKUL6V",
  "key23": "4UPuRWr2wcyqHqcPvc3Vwt7Lws5GY1s7UZnqUBRrJy8viqQcCacsBcQVNNCrQWegSJAXtm6XAX2YpwVMs9GcnrA6",
  "key24": "2G2cFsh3cXwZbwYjCWxNhbo9ccKxKPVmFBP4PvoMAXUzYZmHiDUa5qg1AAZHeM8xkHY7Ub7PvtQWw8FCvB9miX17",
  "key25": "5wKQrpsGBpruDqttaERZr9ex3mHFbfvhXGrgbk9sLXUjcvefLxYP4mRJZj5KHaGzUta9BUCwg35EnYtBnrnAatCw",
  "key26": "58YkMpVT6btaJkjrkZwH4e8zhnar8nUrAJ1dJQF1aTFYBj3ZRRCSY7kAEecaY7gtQc89LijTJsZKXHtfo4VEanRN",
  "key27": "45n9B24XJYa7dDwoHALBpjyDW7baPQ3CoNLZ3LzzcZBq1tCscus2bqNTmEnhQEorQpS4WZPwuwE82FwxVbbWoC6c",
  "key28": "fLfiYHFpyvCAFNDUxy2tXJUEegJ16duh23xJSmW2zC9SHvKY5wNEv95eXVVaCeAj4X3EJfjKBhJJAshXogqZshS"
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
