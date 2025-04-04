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
    "4wCkSimCSg1wtaVXsS5Tfb3gmVSv8eDSvte7gPt4d3CJ2fkTqJnHbQ7wiX3qxmpoP5Uu8uJYgY9UpFPewRgRos4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tBoUwKwXMefJWmRzQpuCFi7NYtZABB3Zk7nZ9m1gopJ4DLLZQYsEVhkAtcGHrekTuBiR5pePaTq7ijnv4pLoKeT",
  "key1": "4CcC9Dnw31J4vnHNwFqb2PE4uQkHtjLnbqPzuxACeGrQGcnra4pwQYBrtx14J3ZBSzpLe6Uw9Gqe2HhPztxSZaod",
  "key2": "5Tn18XfBfcLzynxabdUEpMbQbco2LsZHcCChkbnwm9QbAdNAswdgLAz7xM7FTjEPPRZU3ZHb6ASaBKwgFyNGdnjh",
  "key3": "5HVBj27m9untViPjJxai9hw6K8jdHRxbdaAKC6GmBLVXFccLe9APYH8tiwQshFyDWEBWGqT2afNtKn5Fnyj3Yxzq",
  "key4": "3G8bxqVqGmork9guixssHvdGukBhx8rVbHwxDhfii9QqEaZ26ndRfZ3PcUr2ULmsNJ73DSQXbWi1JarGVvJN3Mmb",
  "key5": "4Gph9JP1fYBqjCfLgEaRB9XsT7psQ61udcGcYdSwMghvwD2ejxiWTgMsQV4jSU9bGGGAkw35eBFiaUwzeZpECntq",
  "key6": "5UrMDPUGKMa2KJrhjJTDt7weShk2G472Ue4CQEUgAfLW98w2FHRyfu6jyRnE158oRKZhk39nZko9duiq9ShwJgYB",
  "key7": "597yrceNXj6ro3nQmmLA4X7s58wTSHeSWULKZwbvp1TB15y21FidNs5ifZGiDN4izPf8oY4CLA3a6x2tmh4zwYwP",
  "key8": "565suPcBCVSQdD5mXnWnkrJGUehN97h6H49BmtD6iqDkk7ZxwD6yeCewpuZMsscYKruk1ydpFanrAurtjLUsdHZ4",
  "key9": "5f5PErt4cQmeijzHV4ZKFSQ6ocx73iAoCVi6mEWGfDRKXKsec5eQC6rLuLo7xUry7nmHXmQ5aL4RwBLZwjgDGssf",
  "key10": "2UFsNW4Bn8gRzThwTMhGj2Ko6SM2LyATZmDAo5WmR9YqFX816MvhmHkxd8UjSWQsDuoc8arPmq6dM5i4VC4o1w6H",
  "key11": "2oyspMcpQXc9odaKc4PSt3UYdjtgnE3XK7JuDebBVcNrxUGRWFVFHo2avSjeSH5TYCgP5qp3H6xihNdbaMEDdzvh",
  "key12": "en7gAt1LbvDGuFjmWXPLc4PUpUj3zg3saK2eYoUpntUAg5kgxVQG8w4n2sdfEr2nx9HANrMpicUdib3H6F6ufrq",
  "key13": "cCpyiDJa6a8FYA6iuXfpMCm5vP76REx8jQFzZSY1nUz4GCRf8m4kaRRuNW7DcBYC58RjThHnCUkxcEjyiHBRCSc",
  "key14": "3hTA38XPFkqd25c6TMKmnLRTBAghLiiKZvgoCzft28BFEFZntmBXLByKuBnEYPGeYjTPjdCoYGR55s8Xszk7eaV",
  "key15": "yqrTjB4g5h1UYpukMoXf6TVhPccwAgEfjUzH1XMWFoe2A15gNCtxmpVmGaSsuRJZpg6CZbvVEdBWwzzrRWxjiaZ",
  "key16": "4US1zwrUqiStmR3U7mY8PhRXBwk9SZGAJsurTqCaXMcEziVS6iu4ogTW5yS76zjF9Qz61zvsVWiDfEqbpdePvd1Y",
  "key17": "4u9vnYSeeujKjPYyYtMwkuo8MdxBPBQsC7n3vCjwHpA9szth1hyJ6aX68Ejt42vrFCiTRzj4VnXcB7zeXC9wF2uV",
  "key18": "3UPGoF8foYNJwUA9SrHVnraGc4BY5DHtc2v1dXJdeLCJV441BUR93G63w19fxVM8teqyDk4gd895EpbbdHrE4JUT",
  "key19": "ZJbst9bXdFkUcnsE7fSFUJQn7UgSL8U98v9pC67KRwXKixhAoWJmSFsX9rBiR8UNWhTUcUKTVaBwqba6rSXy3HD",
  "key20": "62hteHon8Ssov8e5ip2DWw24rDUdnyPpD2cbBJNd9kkoRMgNjNWc5FCDzuWFpPjtR8jqUyM7mv6DLueQQFF7BYp7",
  "key21": "37aCt3xpgh9xnh2zAPirEswUjFChePVAA8td1RJCVyhAYaABeJVcfXmrL2SMXsgdg9zwjt3s8f2gWJsCYa2WohZU",
  "key22": "2u2Bx7C7UD3vy2qpNfebtyiJn6CZGZWB75oYNL86VQQSAStarHPE1LLa95MSUZdBVgkeSeYPWtgEb7LZdxr5cigF",
  "key23": "5rkJM4vvE6CuAfnReiqxVGnn3yEpXigt2fC41pL3gEnhc92SBww8ohGJedrkEEJpmFny49CWXLNgfKQRUMS8BYhw",
  "key24": "46yFB4jDdB37GsUBpmqLkAAxx3o4YVDz2kZEpwC9QSsYPqEQBmruhtWbXAXHqWhP4D6NNkfbU3tjknPjpJP1p1kf",
  "key25": "2LrgxjyL4Rw9gZcmJ9mZUGEkzc5FTNhR8ACkCsKjeaBocXL1QLAc32zriEF4mVWuggyA5gH5Sb2UsCLJ8U6hkAkH",
  "key26": "2Eey8ptuHvZiMM6e9MvydPH1eQFHS2U3QYojjycQtXN3aTuCqTEdakSE2f64tFUcUMxcvKztmist9dzxRJvrrVV2",
  "key27": "5qDwoHTCEarzi1ptChf8WMwfBBcVJwMC7XPk1oGaPWwDXm8j15s7UyUJ6yfri7ySqNAyPjZXHE2Z6eVkqMFdB1hy",
  "key28": "hcKXScF3ptDvzjGZkSFvjcWnbP9D2x9o6TXa7XP3BWn1sc6A2XFhRP5VuK5gKLeXrqouEFX9wKbKhUSC6jmYQcw",
  "key29": "3o3YZaejjwhhDwKk6ERApT2akAC4LL8Pp9Nce2wXiH2GS8jzMTFuSPPg66K5bz5FBGiaahmxjaLpHDKj6JYscxpV",
  "key30": "58omevNwVHQxGBzfmHcR2E2c3i9bfpM35muK3cptiFNE6nd7vbgDzJMxmoKKnAvK9Wvmd8kG9F7jTVnEdfSRuxiL",
  "key31": "2jeCcvMMy3ymjR4PjRTkyahCPjC5KNmiPj7mMg3Fns8bqAtPUpZQLKYsny7xa7G4noBEcn1fK3sbdH2vv6FtWAag",
  "key32": "595aCexyz62hwZKTv4Fj23dnqTiWw9uUYhkTmBvqBLvN5BDasyDv2mmtaB1iF91nGdGjpQte6WyTd5owu9YepoKg",
  "key33": "3JSMtTNde4DKxsxSyDbtjNpo1aMxjBrohSPRq5DxtaGeqqgifNwrbah6mfafVP7sAoPE1UfUfZ8Wn4vyjLXRnvMX",
  "key34": "5i2fzerV2dwjj2rLWBD74k7ZNr6sMNCYjK8xcqaggEZevohWF42fQJxkEucrjSBiG5isKzzLzdhBc8Z7xKSpHsJt",
  "key35": "5anmrmQTxsF86vqjous1z4qnRejgLKvhohgrS6C4EVsdvx7D3R3DMB3puGkWEjaUUF91m6CZi7u6b3jYTo4rmiJt",
  "key36": "47LJudKykbQgem9ywHGdstBwxrBJXD4ezHuGwmh3Ubm47pnyDbp8k6uUrDY39JVxyZdzZcBRmtxfbUaDeP9sPFoM"
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
