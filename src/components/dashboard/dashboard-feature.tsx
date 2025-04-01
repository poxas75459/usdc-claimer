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
    "3o7fk5B57oYM3HMFep84zDLYwWK1uQjnAetuEER4SADWSxNTMr4fSa93r2tpJvPwg8k6Za4Jv8aLBXbGWKokYgP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wVkbqRXW8EFeMvTqmhNAD2Nvvg4rWMRQ76drHfBo9JQ5wv8G98sayStKMKPYpxcAYX7iZkEiACNwnhkg9c5afGj",
  "key1": "2TH8PTy7qshPf8TycYREiHx9UeRWGCkSVdrnDKbCUZsW3oUv8757TEtMyQKUigG65LPUfW2hCg7n5pSiEGgzMFdZ",
  "key2": "P9Je4aauox8C2sY61cfdBFepnLFc7eqGr1RJhhcdA2D4hACth8PGLRGkwXkWJmxmnGVbGAvMhuqJWb3Ca4TYQmn",
  "key3": "TRi3LEfYNYT4NCMgia5EfgN7FGFmp1JHEbV8mPCvRspd8GutBzYWgTg39pZhoDixhi9Wmtkx56LPuH8VE6qgMJP",
  "key4": "5bQhPzcHiFs8PTAiEx8g9yTwQSVxAGkdTUoeT539upGCE595bE4ByP59Xd135t35aPSZPJ6rFekWkuatEoMFuYaN",
  "key5": "37qsF4UFDcrMNv41ndFsFoo9TqujZC26WPnxiQgshscjk2QDxSTJpvNLYFiKD4bPGfaPRfC6kGNt5tXfq5mTyRvA",
  "key6": "4cGbXrkNBVGgtRYnat716z6tmqpTzfHecun3yXcP2mwzQUMbm3oViW9DH5kbJ2w3cSD87q9miXtt54bX3Ujcua43",
  "key7": "aUA8bDBbrnCY7LLKcuUmGHp8xKn3YeR88PCybSqrGNC53H2NjtZCG1ZW7DcUxP41hhgDQ3f5uqZbN1DgCHdTvTJ",
  "key8": "2QNVsMQuezZaTUmh4zeDejUJBBZ4uv7rm3dpeZ73w3e5ZSxWxxwkAte4u2Utsu8LqVktKj6LcR1AjmfmJP7ndNix",
  "key9": "S1zqJN2mHcBLZaJAWRrGinkkvWuJoaBus97FdsPCp8UaUyks4Xb2TuKYp4x5tH8dWW8G1SRiG8mbLt7U2GGKGBw",
  "key10": "3UBjwknCiT9kt2c5pBKc2XgpyDTM4RTEUZCo3kRmgbqTmWL6oEphCWrtSRZjiHE7tW4LcA2CNeoT4qMxUaaFQBMN",
  "key11": "wxdzdtpvxfFBFEk5XDFGPLJjPWoEXKSC6PrV5DijngXjUz8T5fdXk4MZwLZTpApxNmn6QrNZDF4GQb9UWgc4cGy",
  "key12": "3e5SgTw8t31DDdhQxUd3xAB4C2sn5WCBAfzbALV232BTdrfz2fJGL5XGMZMovrmEdbQbTLNSftnFy4wdQnjxAov7",
  "key13": "5eumLeWeSWsr5bAed4bYMWAUdFwd5DoiFgC9ogzzGuz8btLRmH8BQaNHeSMNv7H6PigxpbQD3FGq6MufVxBG8Tkt",
  "key14": "3b4H1efcndBfne25CMg26dRdeCyUqmM98yaUQFmUXeYfabGAAWJpNF2KdKwuZxpPiw1uMXzUmr8E5Mn4Mew5ZmCS",
  "key15": "29etqBbikpSfkF9efVWjbPn2r7qbnbbkuD37Q6fa4yead9JVFsN4KXg418qQHDapSQh5Cyxe2swdnmHDmeNUdikB",
  "key16": "34GPeZmAm6dMppA2a1rmXgxa7ij1cYUXqMQo2QDoTAQpx3VkwpLEGEU6bD8ChdqXKCXxgPphDBqgy7Ndfpow974W",
  "key17": "4vNfHnT1YRw6Pj9rcAbfzihjFZFGzUMD45zrNPgPBSZccoX9DkRn9CaGqFcFLifWQshjoaucf8aaVCg17mHaFY3m",
  "key18": "NfqW3PWkgZaTSLWT15q9N5bPYztPnKNnSMfUQWCBvsW5Mri2N9LUHUK4cKevdGCCLHK5i9pZ7P6JXeXQ9tNj799",
  "key19": "akvfUDTDHGStStJityc3bsdezWSeMFqD1oT9VXMLEnhCakY4awbs3K79iSqVjFcy3byV1ExdJYQwNAPCTexe8SJ",
  "key20": "53NYFeTYzGGUL7V9ySFhY4Ne9ruobESx1JGfQmVthAHbDkmDLYnidcJs1XkixKkQ1WJvjPxEViiXf7BYxfN4vyWj",
  "key21": "3SedqoG3dXYaeMmRXQevnyHRSRXuVwopidbwyfHhUV16mT1UjZxiySwi5SHGMRrv7aYeu4JtjVd7GNKwnFM3n2JC",
  "key22": "5AAw6zPEUZs97ivcQQsVxDCowj3vvvrZuXFR7rhvB1pNMb7K51cqLeFDZDX6rxgLTsLLLJHD2MLzodpNGX59D2B",
  "key23": "55KXyFvDTFgP5cTRjB8uH3swaJMJ3VWUj4Z3jTYsnYh7QLzxSujS4hQuvMCCF64CZCsPoTzz6L4oLq1SnbhV12mS",
  "key24": "3qMGRXXNkH1WpaZ6SswBmEThazzzLvTnqjo95rPSW8W61yHBYSakSGnvgTNsQHCPGea3xjYeiExMY4REjTkswzjJ",
  "key25": "64SgSw8Ndm8MMrtcR2iLCagiDbqg4xZSg9s1KdYqPsYrP3GETPnWy7Mp3yeEZgAWLDSrYh8MdzKaLm9ij9UB5Wmh",
  "key26": "5o5GD9PHhHYQ7iiNEHWD2seh4U7UPwPvwvppn3QQn8EoChWqg9ToFdWRz9DA8ULCg6uVbJkiQ6tzCeguQ1th54sD",
  "key27": "dpbVgVNDo9ZNL4nn9ZDMKzhzkHq1ZXWuuYyzpYonWUmxFkNERzaTEKyKLJHkHVLp2dgGJ49hTBLyyufYimbK41a",
  "key28": "pi2EV4PLi5BSVT6CFSsTdT6p3r6wDJZpYe5F3ftkWPfqUyt8uq2qWyMH1pRmSyh4X3XxUidcUjdVv2rz3CVXBzE"
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
