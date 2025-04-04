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
    "2CeaWcsQCJw9Vp9dpQJHe7YPSyPVYVRubQPtycGYB8fveZ2MFRXjakzBZE1k3A9EBYJ1uUm7wMh6ci3j7b8yuDyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m9UvaYAHsGF8pFBfDshwdcKk8BDUquCPAUYyuGrKUU8j9DeDY4Dcb6NzyG5Q61bdERWJjxcjuzs29poFAA2r933",
  "key1": "yXzcaBhPtBjCdppY7cYDdW8Dn1o59BxczX5NfUNNaKkXUWHtiJSpfS2noMYMK658SqFXeAg5EroUE16KhuWn15Y",
  "key2": "4rRjZS8uY1tgpzgx2xai8AappcncHwfbDEeDcbtuz4zWqbxv1hbNMXBeSz2ofcihREvTPhevFUPX3A8e28GbEgiX",
  "key3": "CVo4UizWq7ujwy5DjyZkrnYejJ7kgmz1jVNp7urG5Npe8McJDe8WpCQwgMeBTNyByaAAXZtfVpfXPTjnHGzXJrE",
  "key4": "sZ2zvxMgXRhAv6aQ51h8TA1ykmuWMUx2P619v4oSRQnkR5y9pDZyAYb8kKamfHP4kza2VK2Zmw7DBFtbFro4crU",
  "key5": "2WzLZink4CixmWntzhYCqHeUEddxiP16pnpfcr5eKPXtZMGJT2PKa3txBjUkaFpc8neUnVgty6Bu4aDuVW77mPQ2",
  "key6": "5BXDagLLLZhoQGJP2xUsJoYn1U9fNJhoWcCowfq9dvn7aVQRQqvjZ1VBbFzXA5RkUZUDc4b935og6o5Xs1vzYUk3",
  "key7": "29TaoeVpjKk5A4NG8S1ktgPrheHeMAB3rNRyg3ZqWgm93noPLBzx6F314z4tYjmYFAUp6GLfanApJF1uKciEQ1wb",
  "key8": "LTnsPCRqBvYNc1D64FnsKn61N4FJw2AqASzwUgv1bG14uz3oRV72GbPYDa5iMFGKcMNmWGptE1F9hrhLHPXs2cf",
  "key9": "UJkw7dqsFB4gaxnceRNbJDA5NSUDGv7ota6ScmXvNQVnnNeXv2QwTzba3QNcf4Tmy4Gf4irpRAmVDXit98SG16H",
  "key10": "59EkuPxYSgNye2QCYqPdbsQmHTCdf88zLkkTxJg41wa8XS9Rp2XTftBj7XwUYWDVSr29J5WpxgVNxqp8BNCEsAAA",
  "key11": "5MCAh71tT6drASUyb9eZNQJWoqLaq3ReMCYYG5kJ9dx7LeNcXmNNYoXFS6cmqFwSRLybd5EdWJTHujH6initomsV",
  "key12": "zmY3Qno4RsKQP9Rgd3UAT4bsx4cDoYmHgVmcNRvEes7BGNDkzgPukAoDV5v92a9tPBDmhg8Ye2CzgsV5ZDTYs2R",
  "key13": "2A42t1bqSBq6Bruk1besSV5qm2zH84JE2ck18DWs5F4y7TSc4K4xwMPFR21hR8JEan2cQqyucf7h1HgSte9AesEj",
  "key14": "2zVF4Rke83Jp6UoywPz66tixT45ExPJ6qM89yi5z8sqnF1qLCTfYtW77Kc2nWW5Uvh8e1LF1TFpdKQXXX3hrrt88",
  "key15": "K4CWzSYYReW4fDBqQSPpvhJc1pv4tVQpXKzW8d61xUk117JJgq5d7wvkXTTVYDZiRRN3bBib8K5cZsxED15wh1c",
  "key16": "koZABQFnv3Zmo6VudnTYPZkNGGL3kw4uMTNv9NQN892k7AqZtTc77cx5yvH4rNwEELrfhxgHdzNoBH6nM6UUXZ5",
  "key17": "4mBvjmQT6ztFVV8aRAJGA4eeLxi49xnNGXpVWNTouQoWD9xuZ3gwsAJQuFg2MdiWWS9ykFYDbKU2HTYTXYQGLrCX",
  "key18": "458eoMRG9Qx9rqidTUyiFc8xhCSZsMo4Trm7k3PHAuxaizyD2ZPWLkPZuCGHpowWFhRk6YdyQsc8NCfzWhNJuxeM",
  "key19": "pM8aCx1AHbcuZFZbAeZLqdcVjaSnitoYqztBgBgbRehmUjbPf5UduEEQwpRWASt6huwj3kPdKLo3hrwNM2PmLqR",
  "key20": "2B6VjwNyeyh7CMPXXzdemwFLrjQ5K3sW9nVBLKmKsZDNV3mSVppNeJYdU2DJ5jUXHu37eCiUTSLHG937r1ctHfpY",
  "key21": "2LS5qyr9VAkpAfNjgx2Bea2fEfeKKFAWb47NEq3aEFszHPrxA9Mz32fRrGsYvho2RZDeQu47eprXHSp6bRpUSW9Y",
  "key22": "4EoJW6HK9bBiebtvqnHTKpq8vXhfWrPZcHakEHfgALPV12THy8MQB881KFCtv2mfwBikXijfqhyXvEteKTL4rPmc",
  "key23": "5m6yHgAAjaYdS29UeSLaDNVL9J8cNkGe3mnHcCEMDndLUMiHDP4AtZ9cMG8n83JZuNckg4kdyu6r15km7LH5f8wf",
  "key24": "3G7TPaNvZEj9EJzemxeezQLsVAoqSVq4ExL954nX3kigvReLbVuQEQMKN313UiYpLu4PiDPa28tq129u6N53C9GR",
  "key25": "2P2abRkKBYat3bF6hD8P64NCVEupXRDf2e9p74kmzJBVUocgeJDwQheU8bGFMDCwxWm9fk2ndiWGuqMo4WiBa2Qb",
  "key26": "4W43jCppgLY1vH2k4MeLjFXVpVCJttHScWxueeZ6Z8oWZpuvXqMRL2L7bZwV9mUz7dFGqhNkeAvPNnmcf8RF9aRK",
  "key27": "27ixMseuZ79fnkyiY3R1WLAdLAtpTji2eA1bVp1vaYgjc2rhVRkJqFo7gRtUT2deZrgZfZHnvG6natXbc2EAzfSp",
  "key28": "3vqruvNtuEG7yTTVFkf3A3ANJ7xsKPwBNQhg6uGRcDF55c6sRhy4B7JYHwPv5Gp1kLN3s5XqyQC3WsrisQFRXpov",
  "key29": "U1NLJufhqziwS5jQdcqcqj7vm2muVK5GumffriifsbQcgZHm6RSzUW2VysothpSXwrEVQV8ruCX22chk4zbGMFX",
  "key30": "2aBgHkSyZyijVAgDMps17qXJ4VPAHkXPTi2cHJmX1NcCyJMsaZ7tsFAaUmGqCqgMpt2pdD4BxaxYkhtocfSpbjo3",
  "key31": "46vfomsLCdZZxwKKsVWYqPneTmWve9gABKqaDgusy4WoWCCKPK9HPTaGFuzRNnVUzxdpgkp9Jjsmza28cD6pbhVX",
  "key32": "7RxnXe2RycR2GKVCsxzJpafRaRLbnoxsRSmsN9NTyxctiTauMgKQKFTsMBNCD158Qk3DSb238E3HSbcTV3GDdGS",
  "key33": "JE1eFrdatMcshzmE9ieSoRokUrWAHo82JWrpuoBdUNAi4kcwj65vQX6ZsmHpwK8vemRHnmcfNQBzwE7xPqLyDRn",
  "key34": "2e3k3PDUMwymZpVaUqXS2P466JMxFbGHypK2FBj7Z2ZU6qoNNKvn1KQYkAMsx5UWHYJYLerXiuDG9R1ohCTwTUji",
  "key35": "3NqSBzB1uVDVgT4ojDZvZzPdAeYaxTTezP4ANyt9iJw7RX8eTb974GNHzWwf3HdMfZ4p4hefXmnAB8vzNzJdNZTj",
  "key36": "4fgNLtML4rfoLnrztKLcfwYuLqKiu23bUWBDVhrAfd1Fs1KP3igMYR336K8szPV6CAUdJb86gHCtwv4GA7uUKKY9",
  "key37": "4XjknHsEerN9aC81J4HgJiM9nJe8aam5k1WQa2q3osPq5236fzffpK529FjkDMzfhzvto51HN9FaUVwJ8e5ybDSU",
  "key38": "4KvYtFsWzfQDpqCC88rjTUQzYXhn2UfMg97MMckiz36hg26xCUgXmRZo1ukn7mrBmwgGLcNRtSjF9MELtHnFveR3",
  "key39": "JDQFKxniTMsLVeLo1pCmL46ZADjRbPQz58icy8jTc1V91ZeTw7HytQK2BCbXfx5KA7mZV2oDCJbdHwPpmThDHXU",
  "key40": "2DeV3z5v9DdgpP5bVHmRCmAg7z8FNTLjiub1yQRAkerfir5MBh9JAS1LYesVJtXkkTW59YtVEGZBU6aHHRJgnQSm"
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
