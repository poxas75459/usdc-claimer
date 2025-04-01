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
    "5cRPY8awyVXQmBrREdd4YJjt3fLwkGUq5iwgN2BqqhACSZ4H8pPwcZc5CQ42Drp1bH3hSik8S2963YTjyDVM4f9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oxTMJDhQRyd4SXuYkP9nBdK9cKjvy5kgVyDhrxF5eeyMKD3fTan5XkK6modcL5CMWAgCbxRaYhc32GTwy1wX59y",
  "key1": "RvQrqebkvrDRmZAsabdXT4t3QXeE5kjUJSzch5PUc1WuEpZc3TTPTKrjrntoCJNxGSJNRPofFCLGK6kWoEwMAyY",
  "key2": "3HVcEJPyFbJeYjcyWgdiJVjNnrZsbwAhaz1dS8nBsgnaHnDLynpbvm55M8HjwayVVhaAQeXbvRKHAjt1nDsTPoUF",
  "key3": "n7LTkrN42E1hHapZBEeVGB53bYoiUUk61Y7jfyv6AgsFFtMDzcDFDfi4iJQmkbSu5DcTRkL1e78Sjn74zuWyFS4",
  "key4": "4tcGdGuvXPSv9ZQPcW9ozoDZj3jcH6s15U5atKYUUp1zouETWdo8VYtx4bqg5L9bbXZHJ1Su3wR1bHfT76A1wead",
  "key5": "gMhRPheWHAsgVWUpaTYu3gkZuEmM3nM5Wvb4WwpywD3cRgrAS7hbWuLEnhDSSgakokBaVze2RRt8fwADbBEz8LP",
  "key6": "4RZBoMAmq94oUCivHfehwgrF8Sqfy87xJULiRwwEDJcWWvt8QX4F35dinj7eTtJb5LwAWdQvY7oxbvEPdzzbdMTp",
  "key7": "5UxQemKv2gD6JWmp86immg7zx4FRYLDf7dCvSgTF7LBvCosg9Nopx8HQEKR8NMVxarwrX1xX4xmmVggAzbb22Ymu",
  "key8": "2SR6zzpxWjoQ7edgrcvBS8b6TkJqpwWaxvZrfb7Gk4MmMbrVNGTjBLu5zCvDzenENQ6NGMyfkV47aMKDYVWnJMfn",
  "key9": "YzECP3DTZ6UvnXVkbkjM4oW3c99CTqWBh9QB6kUJt9jH2YTgB7zGTVtvCKVysFhSvmS95weMtWyGysceszu6sxE",
  "key10": "4pgvJR2K2JjgwTKzgTX3CsCTYXzm7Et9Yof9iJ4nh64oCJv3LmqxDeQsyiM6nZKbtc9Nws9FYLoqdiE3LD6wHyUb",
  "key11": "3NZg18htWJy9p4Mewa6e9CL1DUKBANFC71hU7bGb35vjgMUmZRooZVdkSGWBKgsn8vcBGwQvEKZJYggMTCocik3D",
  "key12": "4Ffi1AW4VaqiGdRQW1V2kFgAN1GL1SHJoSUUcKZBXELuYTV53bejqRXMRKgFUzqCc3y94ccPDXcEX5kbko2mua6d",
  "key13": "2XmJobPJBdvXroFr7G2ejA6oQxPQATL12WsY3svyhVTyp7RpKE7A5XkXFinkbejmErJ3R3RJ1XkXQq2bJZzUtSsQ",
  "key14": "2U7Dq9tha4Dpei5y8pR2PikXb66BvG6mnVEQeExpUdxLaC6nF88YmfVWW4b7vJmxvmpPUeko7WF8yctqzsShYegu",
  "key15": "4Zanmr8bQdxW2eqZaYKxBcJWCxh2VdkGxJsU17J4Sdvgog7F4x9cchyKtyifE99QL5zMvRFVDqVBkVA5Rchk4HKs",
  "key16": "5b3VcgMj61F89Un8grMhia4f9utVBRfPKgSBv5xdkLHAVwb2Dd4VyZifti6chxnpQHJQxvg8mjSsYX9uKvhLWi86",
  "key17": "iP5e1JreYP1YsSf7PtdS8iBnY9DgutvFFcVvBEpY1h1ifamFRCuz8P9iG4PuxwAC3Dgc8xnBJZtctsdDbQRERXd",
  "key18": "2ZKQgL78ggycsPUuJLGFQAXmSkg1o443k5pNfVLSxkGnZ1gdCQfWTWYMZNHPFiJXHL5oLv7qdNGri1JPF1Q1RygZ",
  "key19": "5ykHxpyuZfQwZ1XRv2GX3VUw74WvvoipXP4KDQf6rVQctdqGaCrxe7PThh4WRDouMH8zTSGaqV5XS7n5f1u9QtRo",
  "key20": "5eWekSAPdSGqqkcR6katkDMd7VuEgcmew7foGjmDqqfQesb6677hqL2u8dNW48iTuf6qCcd1ZBuPvmBPEXpV2LeA",
  "key21": "5aWkvNUN3QPAr5tkUAwTtZ5SyJT1cprVbCZZBHR4eD84ng35PJqAFi8eaCdAFXn9kch4WW5A9Zp8HoxTnyPaTsdZ",
  "key22": "3VjQwcmjmeQUZ4BvCRf636E327dQAiJxipkKJNtPWYqwgD2xqwxPAHCmLo4SuPVg2VLy1MTpxM4dT8t45xpEbrPh",
  "key23": "2YyADSRVdCQVZNrKbEyuCVXYqvwpGKrEhY7NiRfrKnkMiNqXS8fAauegHDFZSrDGyoHUABNRoH3W2hG9m627TVkG",
  "key24": "2He6AChvdoS5PoifQcni3PbC7cP9hngsyhFGjMqBHFJArwdHrBv9kECkE4LwaXQ1ojd1ujun9Rf9QpwFvw7rreoZ",
  "key25": "2d276VJc41TQzZXke5QCuEHVSq9XGSw2uFsfEKAXNPzjuCEp4zYpwWT77F61mBxXdj3TgBja6JWSjSRWsoCJUTUF",
  "key26": "22kjiHBzVPLX7GxU1k96F42H4kaAe2nRHH4KXF2zv4468PkkT5vvHMq9ZXSSXyEi9srrqJL6giW6eP1mGbUy1EcK"
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
