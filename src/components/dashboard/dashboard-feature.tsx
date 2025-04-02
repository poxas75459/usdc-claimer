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
    "5GgchHp7Go687D4nzkkBWU7197msXpaB1sz9HpHKW29m4nsFm6UkLGVALS5JmNC3qzWdxgidV5e7qMiEo4MDqdtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "okq2QpdsnxnzcfJntie6E6a68XP41DLqdz6TEdHi98miQ3PshQA2g5i8zMQd3vzjgXKS4CejftRVb7BY8k53C37",
  "key1": "cmdnFVgBssgRb3GgT8Eny1fBVuzynw6MTpXadxrSZuB2tCDNLsNSa7u8Q2NwPdWHXfMaecpdWTa7mV4K6Nk1uP9",
  "key2": "5K18xzpez2VDYmZ9kLf9S8mxCdNV4gCfUDDFgsdf565p6vqqtEW8TBUctf6KQEs7SsHKwEgsRNzfENFNQn85HWP9",
  "key3": "28RGPwRhctmkjcCC5faeLM9vTSGMx2oMbCBxbTMcr7CZi2YEqHcarv7zAtAUiKEWWuc2WnKaMbGkwDupTurExXpv",
  "key4": "Qy1inv2LJQiBFVK8RxMoNYEkqcKu3akRSc4EPVF8QhByKnFR75qdpSfLQJQDJhqEGd86UTncxg3wZfmE6ZEkMdJ",
  "key5": "2NLehuDbFxhtv4WJ3BiCPnfLzsZ8Hur3P5GHg8T9oUeva92nkfsW6Gx39DnwcHJgNXgAkKTRY41CNF5tMvUFPakq",
  "key6": "3qLvb8Z8SAFcLf6LABBoiUtRZmWjiePEyW6f88GUb5DL8uceotBs1HmedjLNJThh5DCMHWABN4FoAYKUKj4q4ZCa",
  "key7": "4tRkf9aovbjToBJ5gEx4spKMbdL7ruVAp5MQu6StYYeuoe7JsAja2LXfkMov1wE44hEsnphUurJNQzDKz1uVQxLH",
  "key8": "FWD4YcRdMYyDEGWtua3rXSdZqJN3TLsjeHmxHdwefAN1yrKghT8qF5NAq29ukB46b85HQ8wD4GzhfZuwSC16uEb",
  "key9": "54s8HrfroFbTfdSYpz1qAA5vChPahXCS2WPc9fkjdoqXSyN6Ad6Rp9S4gZhc4iAx1bD8qjnGYHQwfCMdzmVHYDXU",
  "key10": "3hNFinuPvjzdSYTULYujAuwz6XFnLWFJHAH59UsGfuMUoEzorMPTx1WQ5RWbErsAkmCbQZFTtViEbmLHuNNvuChZ",
  "key11": "Hekf7cUSgCU88644bVZm8HdKXuijfLF9oCSS3qm2vwju2R4sqWr5Ypz4FDkDwDf1HW7hnaUZqg6SGSTMawDj6TT",
  "key12": "4fms2mTphRRw5ymq7rHNotPSBAgPDyuUZeBQuiUxJnRvybXW7RGLVVC5pqh16i6iCjDTbroViuUrNVJF64fNEYtk",
  "key13": "6oZdsu2cJJYbwvoGkr36Zx4XpSwcruBVtzBoexjB5m9mkDV6eqPnE4zX7KNfDGsaWQP5PrDMbjPzqLu3oRNFSwn",
  "key14": "3ig77CZkKRM3jNzCb1ZfMuQbtftJZDH21LTacxT3YVJRF7dYtRaRLY6nT9t4M8j7GSQcLr6SmocNZUma41kPgkD5",
  "key15": "534Da5q1Uae7VDeGcUhtwSiSLHqrPmoBwcv3Ps69DXq2fY33aQnp3VqyUyi1Wozev69E5fxj2hurWw7d4Sc1gYJD",
  "key16": "36ZSKpNuPFzX7rhvxTEBDmmKnbYueU2L2zqPuSjMV8Gz5A9i4g8ZwLdaDszapfx5tFeZxqDXrxXtQtobiPG2Xaf7",
  "key17": "4G3S2ZuQ1PyUz1i7x9qk2LqoLw7emQ4UgkBhvMWZKbisJ7ij1oQnyKDJqpABC25g9vsbbeZJQSMseMYtUxhtAw97",
  "key18": "4pPwNas3EHjTa57oKB49UtZpUUtu6kiRDcFaMNsevEMdwFkLBcx7VEgpszFitVrmWRSnkVtKeh3MejJWvJXuJQLL",
  "key19": "5ZpEx5sqcPiDhG1MY82VmL13wqUNr2JR1rhE7bx6Lu3QiVnECXZeYCgKPNv3nzDP2tjSGcZ2aZ4tHDRt7gYxTzj4",
  "key20": "3MxYk36TMqGQ4TKTw949na3aZQvyncmn6fDyKipaa3YJWWVhU5yiNKRusAdJVRVFN21oAfrSSD2mWpSuuKZWsh8E",
  "key21": "5v4fHidiDQQzmX3iwjovp9ekhDgqNj5cmzSRkDksSq1Piy3XRsdzpRwATSqySkkWw9dbZveAsZTEJDAja8kVAEnd",
  "key22": "511qzoNto5wkmKvX9BvRukHWabhCn7GRMtHMH8mbi84SV7VPFapZ1k596iLU9Boa52mt4NSDP6Z5vcQjdY6oiwMt",
  "key23": "3n13BsdemtSEhV2WY92QCRcZPCEUTLbnubYnuyP7R1VWjpAQvUk5kWkEw5Ai6ud6MX12f49BG4yTeE4SMm3d5RBn",
  "key24": "4tSgpjUY3VpTRJHktTctNZLdrwjUnLxduiKzY7nshrsxJUbm8dijyR5Ub5gyJW3HxPzabFyV84qhdFvGiABo7CQY",
  "key25": "59h2rRnvtEKt7KeET9vLPex41oFTdzyiepr7peRmayJMjqEoMu1yEHFPDeqDFL9fDbYAFyniRcrK7x5i5FQa2AFY",
  "key26": "2Ys1TJY3UjvW7za4eKGsJXYiUPAWuucZES6MknNPozaFskEdU7kjYMtGNSBJrYagWmUL9DJg7EydBV7KzHyFefZc",
  "key27": "hxe5SatpvBHDBt3mtT6gLRJZh1qVXwszZrHPNiTgYcth9VGWjERRVCB5iRCcfAWiCB7Pu26aAoPo9MiwUTvCgpv"
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
