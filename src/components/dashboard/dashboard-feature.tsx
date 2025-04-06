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
    "xUnvaZdx29KRbLBCUsdPjdbzAVMHdYgnF9rvah86xvVooCAPc2PZkFhNEjs9yeXnWvSd66EKGj3FS5XK3TEbwQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EfeAYS8TmnKVvKWezgcsf6HwiKUEwcarRH5MYrRSLfTJorXNddbYoTuw8XMeySBauaegSYUnxwQ9EZ46tXNMdSB",
  "key1": "4PWfjJi44CjgzsmQ3TRDDFFWUYG5B6qRsgJ5aEEyzsYnxHwQz72DZNsuW9JayQ7oryU3b1JpReSF3iHNUvWXnwJj",
  "key2": "4PVozTGYuQniwf4QmcJjELnhkYx8YVwA4G26J2uNaAPC2yjXmJdrYj9K3WFtrzokMfBf4KzZgvKUebPDgifEpRa9",
  "key3": "2vt2TNiqeGYGkyKa7CrCkdb8jTyG9xXXocePabh1CHNdC7xYpT84EhTirCQ5JDm8EuNScbvqk7Gu22vR31eWmG4U",
  "key4": "24DYE1WZeJeJqmbZs9gfcWaAmGEGHKbxM5XnxJR1TB2kWN15yQJ36RXoAR2kuJJ7rJjcAPSPWde4s9j9fZkgxABu",
  "key5": "3v8CQpUZ5NvqcXSKfESqEdJzKSQbFbrQTWBQRGGVaD2aesSYTTz4c7VF1kYNMdaET7n9S84TSzh1Q2ngDW3MvqF2",
  "key6": "4uhGPqTmbWhLZw818ijA1yjUxaMzqGgf8WfeSEJp1hsXBzCrqB2t8ox9hr9f8z32qXmnvAzxqKmAY3dhE5ZVYCWh",
  "key7": "43ZDh8Lpo6hXNpP5DS8oY6JPsJ8LjbEWL3Sm9a3L94mnUpagF2Ukm3zH6u7qddk4zGp4Uoh1tPd7xj4ucPyjN8Kh",
  "key8": "52DpB3KNeAHyDRA9VVMKKKHiSdQuBp2c8McKyjPLGzFsHwZYVrnpX5vpasA9Vkf2KHtGuCFNDhZL6pnkRfqdrCSg",
  "key9": "5gJHxmy8Cn29XRQZ4NadJBRSsjGjgLLSJtbkaihKpQcB6nRgKfLym3NZwguia4DAQsuwnjJqqVsXaTHxfVjdZgNY",
  "key10": "5QRtLCvTGD6HhqoNT3J9DkvfsMNb6rXJpzojUQvrnDTizLcsyQ4T1btwq6iiQTypcWBpkZLKEr5Wwex96eh9Nufy",
  "key11": "b2n8fhBFN7RUfMZsvCt2muVJoef54MijTU4RCBeDGpTT1sRHCZhdNCCix879rRnYYM15nzYU64tHrpkbPXJhqNm",
  "key12": "4PhdGVKQrAFcC2SPXg77xL5k7mDWUgctzRQYoWzThVx5NTxygFQEeRZmJnXdrAEFUjEe1QogxMy5Nv18NVpLE7Eb",
  "key13": "4wpc14MdJe61qnADDnECsnU9DjJFFCAgMX16vUPKjSr3ahH2ahT667XHEezM8CCzpWUZBF8BCiffr2DVQaqLLsMo",
  "key14": "3YLfUZSG2gaA9VpMyZuJgHJF6iBcnaXL8CKYwztyn5uiQYtJfNBiyzCKHvVhbsihQKQJ2AU3YemtbUQUxm3TVJZi",
  "key15": "2FjvMVdc8RwqvgVM43XoMT2AqpczvHLpb5Qw7vD2LiJ9dMG69xMkVbiNfNsMEXMAaL3dzcfdpn9NoxfBzapXbgWE",
  "key16": "5F13YB8ZDBr2gvf72LKmgVnJJYRbxjcryxWFrWCEgLMWqgvRWQPHAm9gd293jw7q4HcWtMyH8pCsLBTnfkrzJMbS",
  "key17": "4LEJKr4rFi5MceB5ERj66PHvXakotLfX7CV6Lf7dPk1pqGjFnMEyeGypWHGxpdsmzVmLBFsm9Eu55fUwnUbQ6qnS",
  "key18": "3gUnNEW7pZAgV1NVEZXJFo7rsL8Vekz3A1NJyPft6vCeD2vxm1pynAErvJgcABcPE63EQDmrSGHWYJn2yqqBz1ch",
  "key19": "43hcg3jQBzM3431nCrzhDn92SpoxNu6X1mav8XatcyAXtZznLhFePPrbLUimvpGmcSK5ogVEjPuXnorwqsAA2Niu",
  "key20": "4BfmAe6KVyE6UJEzS1ih8KTFxESCmC4oMtQSHgyzCav3fArxhgemxEqjuXqZoLJ4CvStnsbmzhExw5GKqeigYbHr",
  "key21": "GXM9GssXaosvrxNtdzqDY8Tumt7fGBDgQ54KRExvg3hYZLKv3CYh3rcizsGYqBsKeSNY4VF1Eq63FgNyCuecRg5",
  "key22": "2huyM97q51w8nu2HnJvzFvXJiuvY6HWnHyjakg2N4z4jpGuSwyPYwtFRUUfKx56WrPZFyCzRS4Kg5LEG3xQzFjPh",
  "key23": "25TiB2ikPDg8sJJBrcUYteNSaph2y7cDjquB7C8xZV9gZgxCy3EtV35k2c9wAbYpoow2meqJtEgiQ5J9bYpryU6y",
  "key24": "4PXsW17ntNjVwGp3VvsimgzG2YMkNgTAVFtbNUettTqEfQLqSLqroEjojnr5gEktZE6PshPaas2JmAyz73BETAq1",
  "key25": "5eP2ESaKANDJ2yvQMY8Aq5xNnTd5A2dkJHM3HYeMegJygRMZBZbjBqUmdEJRmV8voohdco4Ui6gm6crnXdbBaWbt",
  "key26": "57o68p7kAKWpQ3U88Aqz3WiMuQrreSS8TR9Cbra3n5SzELqPgDVTwfExSxNPGas4UQen99FNqyuamEmRP2M7SmpV",
  "key27": "3RvnTPmwZDuMc3V2je6db9PDYVPWdgbofprqVYTDpyWeB73zfpQwTT6zChfr8xwp3SHvuWdpgtQMYPQV6TqLbEPe",
  "key28": "5bUT4VLXGjF9S8NXiVZKGDQ9bzSFyJGd6GuRH69CaA52t9xVsjecCorxZx54wDYYbLkEmRFs7SwLZ7nDyQWDGoo8",
  "key29": "4ERsm26xE7ahftzJ3iMJTFdcysTDMu7echCyMA9d8yRHRPp8m3fpiHZz5baKNnpKZS8Ma79MnhDaciJnbfHNPQ8w",
  "key30": "3LR9C7XT4uq1MGro2sNYEBss6zRFjsaWw5hD6ok58jPVCbCpntZ2KYZr2xQiwsJ1YWtSUmgW6Bm1233W5hvsSQUo",
  "key31": "2cBckTVEURpMHAh4yqW74HXfoLPDRSh8z3EQG1QiXExzzbjpSZ2dtJmignY5aDamvsrTgyyAETrmFR4ejCYhKBw",
  "key32": "4F5Rpz8bTeJfKH4pdjrHVgdzSfHAHhTUp9doGD4zxvMggNWdLXQxJASFQBo7nNZBJwrBV1DY1YVyAVCfPY4GJG79",
  "key33": "4t7nkQnodHAdBgR5q2fsFnwNL2qxhkUYZgH1BzmW6TtKNTapcHympxFArhheS4bDULaYCNYLJPuq9DGW7kcDMdZp",
  "key34": "4qxpRtVVVy1rChdmcfFncBXeCAodMjyaKh2QuzwLURMs5J6Rz1GcVj1zKw3FGZTQTciUKBrgW8kH31dxzZQ4ZRQx",
  "key35": "2pECKh6WbinyAFZcSzsawkSzcnFW19JnHWn6uB3WLG5Ad9tArd8Ts1ggTAA6zZ9DdX5v53ZrpJiG7RZrme99HQnG",
  "key36": "4UYfo3xQ55up4S8wmmfHFE37e8UbrhfcMRw9vUUzvwv4X89qwYGiSk8HggAWhAeXDpiBfNL6axqnjKepPUvAU5JH",
  "key37": "4XbvLZeo5QSbvhM5GEtrTXd1rBGBCXm8QfaYxBaoDQnag5TFxF4EozrxGdM2aZVTrQ5e1xV2Y39PuGNm3TLwWYMg",
  "key38": "3B76VvcwfJcnUfCEKrraphMM3JV3JJT75WoBUHPvDcsFpxwcR9nB8BfZwBwFrT2iuCXeMCvw5gcm3NDdb1cWR7sf",
  "key39": "3nH2ycfkMU38N1hN5HkmAPnJByx7tz5W2y5TtsR1JZFrZZaSRXA38LWdXGBCaeZDE3ndPXnjphaVuZDvFTTz4xsB",
  "key40": "4nRQZQ4ohqwyBeTsADhYywpag3GaYzRtMqGum4ksUwWtBPPLwNTWyFrt2CQ96Md2Q1XmSVqMEiQQTDJPGLcSDkti",
  "key41": "3BkPCo85E3HT3JLfShNiYijwmWDsppqWP7B2jrRKCfBhKnYegEZ1xqiKuaW3qfECVdoudgCrSL3EqLmEmKqV2pzF",
  "key42": "GJ72JK6TKUgAx72HnFo3rT95mbRibUVz8rpXu6njpmsXB7A7cvyzEh15Trd4etvRezYu6e27BG1pBS4ZQDt7Kd5",
  "key43": "5o1U2mVHxcQZpF7Sdn5t5cQjeCsfRLJrZnCjW6FUFrWyn8b2ukmruuNsHShzZfXcEhvEy8pUpeYKBUk3LqP12NFx",
  "key44": "5aBQHKaMoja34vFkTpm1zQ3hhdhCGjCPGkuqtTVQQfUwMUZBJFnYFqXN72E21cU4mXb8iwwLrBD2zYgkH1mT1ytG",
  "key45": "65kQx17tBiPAN2jzwGRvTFBsiXdDog7EpcBpABAccn9Gk1ZMzjg6sMDBjKhc2Dv2HRngCiznZHvChURb6V7a7baq"
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
