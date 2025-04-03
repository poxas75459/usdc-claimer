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
    "3fot2PA9GXi8pRqxZL36KP9meHWytcXHG6zV7Kw65kwKXdt9Fg9jvUip57G9o5bvW6Q7gkKrHhxE8yVyxXQ5kVK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46dmQhe7P8EW6z4epzM7SN2bJrWHfRFHCfnNfECZq38oWb1Xg3kjbCQNASzSsDPStDFyeCtudCS1fL4yUwahCY8A",
  "key1": "zCyeD1o2HFhLQwejfMztNB8D4CFe3c6wfW7kgEVkRkGdkiD5C45F8LsXQRwq97QnzCRQnvd9CZHpfAowBpsniQa",
  "key2": "MDrMmXn88kRK9aUQTFiDPRxFPDEQS3CQCAyjAAEufdPfLandhYeW5zf8UcUXmHCZCpxPsoi3jKPwG6PKDY2vwaq",
  "key3": "5t4ahfqteKdiDKQKYjkDwnWT2mbGk3V7H6CJJosGpsqRo9BefJieLbR4BXipdHTUxWk4EEE6L8UyNTRp3KMUTBug",
  "key4": "3vr7aBRKo9kh54RWXMBbpyKpxooGTAztVRYxo8eFMYi9CtMa4gqXV8uSq8grRv5TK78dJDYZgrWV8tjzFwKhR8sL",
  "key5": "3PTpYHfbxJ463BF4vT7eU73h42MFMA5d62Sby2aK2zsoUzFUgnvQqrDNXA9UurQinZr5HAZMVNE9ZAKbG5zfn2WD",
  "key6": "5A6Csr39UD7wqi6uZdbQUxrwVxpXUKQxeved4NTJXuY7FvgDU4AR3HwiJDG6t9qffvCw9Xx6CGRuw2DaeUe2VXBL",
  "key7": "4wbPMR2JnAWN5dQsdcGyVd8J3kn6fd9U8t7L5rH7ot9wW2BRCJdUF4SSk5ms4AVxojQJ7ZYsWE7SzJW14FMTDBhA",
  "key8": "4pdNfwguRSBDKtGQskAGGGCt3b6AR3xM1HReXWfTJLDQYXFrpiozQ9BfZnuTxUABW9rgAMmwpMgPugJ37qqodnk6",
  "key9": "3WcKDkk8YJVt21CyZ4AVqeTWvtDD3Rd5hR2w8cDg8nK7VBAtK7Abm7UEeqkc7hkVHrQ65BL49iudfNukopGYMZYB",
  "key10": "55Y72YawTfPDWTvVdkyx4DN4uiaAvfK7H9Gs4kcZGicDJ4bRHcvc5Y13gvLhsGEs7My8z5jRekgmmUcieWM7w7v4",
  "key11": "32e23RfNyMTXYZMW8kTmbuFU3prVziUa3mwknC2utASs4V6BHWr3sd3q5FNXv23taYt7xYnwMFDp596k1TLJtp2U",
  "key12": "bky2jLgo81ZkXmM3Vq6zQYpZEz1RkyXQvajPKoR4Vss9vaxNDFr8TMaoogSZjU4aRA7PhjXchTUvE3GkoekeSxt",
  "key13": "4B5u2MfUeSKdU12NpZSm2N9fXNQ9timafL8mbyxrMoKHucQx5igswq3gAd96VB2mt7iqJBuoeU3fqhGBCEEds3q7",
  "key14": "44zL3CBRyoe5W3QAJtJFdb4o1cVgGSHWVNqSiu4cKf6N7KMhyj3Pry9GUqQ5bhNeGs2CGKakiefkA3dWjwj9LoPB",
  "key15": "pEyaz6MjavvdvJYUbaLqjjCrmvtXiYmamc16SaCLTXgZ5NmsEm5soipdgBLBKkXdrgyoGHT77hMuGeEyYuABUSc",
  "key16": "1iiiJnTdwNSq1MijdTx5P5E3MAKmTz1AEfz1Ff1TuUYajEzB3Z15yMCEGjGgFb97cKukuTKnfQYG38x7YoCBsbU",
  "key17": "5HxmtrDQaXwk42NhxxCmNBQARJFR2G7eQnPxjY4gzF9SKnyT7r89fU2bQmQ1oPbYvmpEHKu3mUKVhnji2hMSLYE6",
  "key18": "Xnku2pfdTGBpfNujKEi28fHG2Yjm2yAYcekHEcGntD72rtyVC2tAvdhWSHFTnCoBju2r9RVCpytXqitwrpLwQP9",
  "key19": "5FQR65Wo9iDPn39RP42AEjbpeb3HJT75kvu2nWDDEQuMRuA9xsSSu54Vsmq8iYUnaLYcWMsEhVoa67Ct9oLeTEvB",
  "key20": "2CUbXKmJvrHCSrQgjR7Lf633b7qXEhACkSwmKpBzSavAFhqEWkE8M4ft9XzE2XJVRVB8qZYCTPcDL6zJif4L8FQj",
  "key21": "iQyr6GaZVq9Q6xHYZq4YzkcZNHcnN2hHyHfZuHsc9jm9jwhzE8H92EQjqU5uomoyfSR9nAKNP5r3q4tLwpvZeMA",
  "key22": "2eYvGVU3453tPWZpC2xnLvdeJ8dmwAkYnsAnb9GbMDLmH8axAxygZ3nSDeSveXT3Eq4n4aofwwEv7CGnzM5ovW9u",
  "key23": "3F1DekS4zrvVHfreD6Tf4sFsCQCj7VE1ctdYv4jTtsNoiR63JQKWPnF55RpvhhFuTCXi9wTXApNC4fVLiD7n3VPn",
  "key24": "2YxxMDtLP8MREhX9mwR14MrZSfkmqv437JavWoAtJtcmat8tGPMk42Gmto9YYbgSWiWqCgKKxpPpJbG6p2xt79GN",
  "key25": "kRorx7zVM5gdkTF3syzPoNhSfFxUbcC2z15NcR6VtJuvQb6gAMSVdeNWySgn16zeVS1Bgw4Q8bpz5Dc1UcUn22k",
  "key26": "jdmfTDZRQZ9HBqR7yfAmK4AnbgpqFwqt2yHPQRx6BVS9VFuPV2GTeXs35T623VQuAnhqf4nc4NyHzWRVpGdPQdL",
  "key27": "2tHZz53zxNewuWatjNesFpgKV1LDDo3AY8AUvUsMNPQ1io5HYSBYCPESCBzX7QTQFNWZVuJdWgLnWdZSzq5cWq5e",
  "key28": "2yFRAJ7RpJhZpCERvp7tHhRn7qkgzdUiudCjKbBE9wPgpiHyqrDFG3cnycXNdV5ZcQaMeX6aqyvCgberpSAuG9yT",
  "key29": "57MWe8DGvZNm2VrrwDPKoaToVdWJL3tyYiKpPk5mUFTVg2AndXJrVmcxg86HUGDAwv24dmFF52zGU3TxLWzc8gCd",
  "key30": "3234R5SFCqLyKM5URpLhYBTK63FfEvFtXE162HmEVz2PbcJYngp83ug3jyqRZSb3tF85Ry947FeV7BMus3Q8Zun",
  "key31": "2M66nuYUC15atbWf6FjWxGtmNvqNg9yNk8gK7LVfidyoZN9SKLxMUMsxgc2CfkHYr2P397kXQ8rPQTFiYy7V1Xmb",
  "key32": "4bewKT7KFfqfB5cK5KSDwhWta39EA3caPZEhbq7FGpSbfrLbEaxjuTP9VtUw6WnexRvSuKsYXuhT528gbdFnfjDX",
  "key33": "xo61MQ764CgN8W3cZoAGnajWtcYDeb47Q68uLwvBeXnGPGU64w1NR94xmiGPxpsUB5r6Q66GpXB7xYVWwxCeu3a",
  "key34": "ohXvXnnppQZqrtkDiLkgqpgqLfgcKLQFKg69Cudk8AZfpoQHD9MZnziTDCxLmRZFJua9BtaKHfVawsye1NN2sQ9",
  "key35": "5T68cKdY6Q6doVeNNfegFB2b35sM1bGcH2XyTeTyFkrSjSUSRW4UyZM4QH7kWVrs4kMERZxdhmAgmKYL6gc1ytvE",
  "key36": "67Pvmd69HPmQdqN7buFGCw8fdMyEyoycxFLByG49CFxvBB66giY2GhgcMsKzBvkQAa45iUA8tATaczVebD4g13h9",
  "key37": "4XxGBiXpManwQC9M4i4n7PKPx7w8FnjaJi6pFnq37nLMcV6b4kJUmtonmZXpTHYQ7v5PtE8LF3foXgEKRosfQ7CD",
  "key38": "3AsAy68iDuRwph5BPJZAARypXNwSHNqb51MCoB6RvQ21W9bqrKDuWm9Z2tTiQStsdaNZipsdeoKTux71uKQqAsxQ",
  "key39": "2nrYYWD65FC6V8zkKwGQAyuwtYHSdUVmJ3Dg2WxkTosPjCTeQREktStSaV3MJkqnFyRAdSFANjAipXnSKYJWrR1Y",
  "key40": "3Nfpqsk2hvsV5jYD2z8w1DRV3PZCwdbprqL3BY1otSCBbHVmQdSrcB9gQZUcSpb2d6rgteDF3NgyBQE1EwEzdjM3",
  "key41": "232QtuUuBwXetpu1wDitHBzB2T4rrWC5XwqKqKvWrTbZSUr5GnDWfiaS9grama6K9HQy5JER52vxiN7Fwdudp1k8",
  "key42": "PkANVUNYLiLMfFoVDpypUrdadyp66kM4Arr5U5BgLUEDvdMpe8HfLpUXDsDP7njVeN6pdEJkFscTcQXmiJrggJP",
  "key43": "jSTP6ivcLiHGamJEdiZqhvBgtygkRMBE7bBgpsXyp9MT2xr1VpdMr3bY7WKnVnGthibk2TKnrSDENGwDCMCmvGM",
  "key44": "3qoBXrYHvMTZgCTs1LscJ7kpf2yXLxcHYvUX1CLNuxxqTH6NRDi6QmH3rswM3b4orGwisJho1GVXpZTZeXz2REb7",
  "key45": "HqbLAsJYAKA4ZNeskEUFLNEBPHUGBoQV4GWphnCTpXr35Ly5VdP3P518oyrTBM4EVv6jUxGzGjC7t2XonEV1fhq",
  "key46": "5afXppf1UXYBRocqFqontAJNFGMkh5noMEdc2gzzvZmhyaJrNgmz4eFyvVES2REZaqwJeWDsYAHQhTg3Td3Bs92L",
  "key47": "4uAfwivx8yJMx3c9jNwp7AFJ7NC9ogMg8i3W3jKnb76Bmrg6vuQTAueiB4H6GKA5wcLSExUscwav45i8va3s85Kf",
  "key48": "2Ed8tS9LJDVxkBx9a9y6HdydeBJKJxYhSHDUdbAweRS9muQMwxyaavJ5nuuE9FU1Nz1PxbVyhNufZBQT2yabTTCy"
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
