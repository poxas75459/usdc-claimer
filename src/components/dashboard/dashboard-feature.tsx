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
    "58RMHc5VhQygo4eV81BkBpeDssTeGRzF4EaKHZdPUtrFUmzhkTsssaR2hMvXk6tRuaSupfmFW4xaCdXoYdwGTBGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eUGC3ePPRj5UTGLmYz54M76BJkeXrpnCnr9PLMYwdJJGEiWJ9WE2NWSshX4NJ7CEmgJa5oeSx9PiK67oAoHMKau",
  "key1": "4aahbcSr3jhB5s6s57bn3BoV6ir8BT2sCsNs9Jw6sW2s1nEEa1V3qyVZP2DrV88jrkHD1KTGeuWeLsAmY28nxjGu",
  "key2": "5XveLj1HjW6jSFResCjA7WuuCzgZfh2gNYd9bANs9vHSzJ8fd3CdaPJxz9ZeAGYUPgmWaG9mQjxZe57jrcjjGqQY",
  "key3": "2caJigZjWecZbxDLD3oJAy5s5bwU1ZYrd8wjfuFh5WT1pfGYmBQ1YSB8uLtGyDRMPWrgZoGGAgCvtgSPiuMWxsHm",
  "key4": "3h4yeH2nnLteGyoEXovB5L2mX1sWyQmWTmyTtapQbYYkgRDLs71XSSnm9chyLB5jJ69ZfDcP3sGqqqAFqXygo94i",
  "key5": "5PFMC3YJJsgAvs4b4sGxtHqYPiBy7Hqtan4hJNpKE4du3WP6KLjM3szdFte7bgK8nH7EcizgzAenLgtRKtQfTRC4",
  "key6": "4eBTHLXRRJHwP8qe2BSQuyeR3gm9jHq7zaHTenugywDMbevFus7hVswMkEegXonczKVPVRkxko69dHznN7Cd2Xvh",
  "key7": "2eGNooE9bXmaSwQkn8jTJFHmgpDdD2K5kxMT5SJFDP6cg7TKuj1UUumskFyEtCJNds9oaedGWgFH6xdcyy5gkF2j",
  "key8": "66ynzf7Dwhd4CvmxWukHawrSXvaLEJGLwweyE4nrZd3daovV4baXG3JgNAWksEsjzuG2pHDCCtP9bCosyc3eiAsR",
  "key9": "ANFS71g8gBUBrmK1gGGsrVGNeG93oBtG77mYmN8qwyh1ewirMCbxiJhpvDKcJCTogSFfQBmE9uGjSxxrV3XpTbY",
  "key10": "3sMYJnRdubRv6p8YC5yiGBS6A1zPWPBxeH5YbUDADTYtbD7MkjD7J4e9RyzjS178gsPkBgi4PAq6YdubddaZiYcA",
  "key11": "3orFvJNtxxCAat8mjGyVzniVs6qEshL22X62aZZfcz9LRgRZ2tjN8zMbcxN6cBfgzhF1agajo2nCJxMD5GoiX1VG",
  "key12": "4Ndp2e9bhYbXDEg4QNEoxGDPWZeUBCbkNnVrz1DwPFM57rC9rHYXvDcaQ8yC9xscCiFWMNNTTSCMXoKd6tcD8ZcJ",
  "key13": "BSpGomYDVrMwzcJfZ2tC6yGgbKdx3dUu8tDDYaz8PFyD511Xw12ngBWq5XEoQUyx4rHX7BE9pFaqZgYaD15VJ1x",
  "key14": "5nRBU9uMf3h8kQgJBqywWiyEudRSQ8v8DZjRHL4aLrHwMWeqMybqaemvpyNHkpUFzs49YDS4y3mvZ6VqzsAWzpam",
  "key15": "3pvK6VX4ZsVWJXPiBnroNwNVLHVbJRZG4ePuR7XHpGNjXG49nAst27hG9v828yBqun3d6rrf5d1QBaxfXV8HFxLa",
  "key16": "3egz8A65tfsZXHzQVsMZDPvF3fTbRRFvB2oR8tYyTtRbXAhdeUj6Ze5Q3q7Weer7rimSdmCZwGjT9bKUu2rug6KM",
  "key17": "3mVyfkN9mqUxo4GdmNXPrAa8Bw8NmxkzW9eAVSf8diMB8Go4F3JYf471B1SiS33W6tFmjg1tqAC1pHHQ7752UUb8",
  "key18": "4jtHjZzTkApw4utoPWHxJ3MCmkK83V3s45L1j71vmpWmDxcx5nfhsQC62RUTSDJrCnC3SFLMMaECQkqDcXwkU8Ge",
  "key19": "3r8Ndjf2wA9NjybBhwfEn5vKGtrZVX2shbgiAYwcpHTPidASfdAj1uD4b5h3SwpYLh4fKrqsF37TxoGzKm6XFLhp",
  "key20": "KATmrz1jtSpzyDeLQrwNb9ojn6w5CiBg7s58JEqNBx3TneLkwE7ZMnxGSMFBDR3jvnd7rndL3cPJhy5bAWAHaRJ",
  "key21": "4DDnv6BnSJDfZA4c1qc8qfFjzWNZLhUjmXmfQHqQStrvMwPvmc4trQcnxmxbjgoZWgtjrEaxVcNF6wsmnpVwV2BA",
  "key22": "4R7jq6BBhxaRDJdV7R467bYsjRfRkT2USwLQ2UWABV1fL5BymUMXYuYi3xSFMKdUdrHKEKJ7JcfKUvqe5nB7fGTg",
  "key23": "3a2c5Tj9ap2ociG7NAsAerjGVEN1UnwCyRu45K12aECDBrCMwMTJFVfREpWxREcmRR5T4sX7ftrfoRMv8FYFjaDD",
  "key24": "2LdCZB19yswHTVah8WQUZkCi64LGbL4zUWKtxr4M3hG1i3Pj5pVuinFSyekDMJR8vxwoQRepfAJrXXLesubML4L1",
  "key25": "5N5JDmesRWJrCAJe2zkUDiWp5js6NvGkYncPfqkwxy1HU1dYSR4Q3tqfLF2FbAM7X6zjmxdN84avya3mUZDS71k3",
  "key26": "4Z3FGZLE6LJpkmN4KXd8iZZFs7UhqFxJVYy8izCgrqAcWYrdXxZaCMjpbVzyeUfFGzaDm4uiDsFR7zusBAHG3t2t",
  "key27": "35TAvhp17v4oxf9KqHXnEEcdzptypcrt7Mv3ngimxMZVJQB16xyiqiiYarm2bsfnKnGaVp2XC59EUj1AEKubFuV7",
  "key28": "2LchVBuVw9hjn7aPqEUZLkKya2ZKpF5du9FPXQQpb1fnaE9FhEbY1yZPxSZsTgweNBbnw4H6L7un8wz19yK4oZcd",
  "key29": "2VkkfD2JfWM1hGQwVTA7H8CQQ8PeWh2qzMk1fzUC5qaqwKQFJ7sKJrF1WqQv4SLF4BAJFSzx1gqMKppDvmToxZf3",
  "key30": "4t4bmtG5MbCPu6tF4T8QDoYz1A6jBG5ZHzrCXQNKXcPmwgCs1dFvq3FBExmdTQ5Va85UAGN4NYcANL1iGsTJAQDa",
  "key31": "3HpRcHr99saAQ1EUw8kgMcZtsJtT58P53Vo86Q4XmsQj8QnV9mwhTqT4K4u8thGBW7HaUn6CD5fVNLnJx9jbvTea",
  "key32": "4BWnqKMuEEHSaMD14ioxzKv5m1f2qgYgtz97ec6f2XyGBSkyq9jMNYgHUBhdMudCox6J3vUn6toMBoUQ9yF6xC7B",
  "key33": "2DHwgFHbMczhGqKcEGSm55e7r6wtnd46xsy2adgraCdthRhxnkr3J6Lc19Do23LWWkXP51azayH6SLGosK9aWUq5",
  "key34": "4vfNbNpN8x5M6RzWsBWX3DiBxzwGbaW1n5yMHhjmhpfzzd1zf7WoPcYEyt24zYfAtUFJ5xvtP9CkfEkqTygBJtpL",
  "key35": "224zEo6quBPJMpEpNpjJopzWi3oM4ZrALPHyaoSb5DbMcB6w7gq7UwYHSHreKt5yYiRD18A2m2DEZHF2DiKa6GnX",
  "key36": "2agJm6NF7xFUDi453Z41uFFwPLQnzEsP2hSdaqcPwPfVgsj1TR7kXvRGbusYMajN29FV3NaqHZeEixE6nFaY4joj",
  "key37": "jHKW7Aq1sJfLJ5HkA5DXFwhBCgqSxRvw99w2HGDonnoBBmzYuCALq3vFmD3kUBZmjJHc33mMXVGFjghr7pMzwzv",
  "key38": "21suYnzvggfB8AGUR5q8ikD9b6uqEmUja5NAECys6rqTdqBFwUvPccMQctjunpNpxJdmAowgH7fDPwhuWstuPaGK",
  "key39": "5vi6dFoyTGis58SA7uqLusxAP1zkXm95Hnib2JReuWy4FfeU8yByZ8Zu4CZyhfCGzAXcnS4TEmfnk7ob47KHeobL",
  "key40": "2nob9ozic8GzBxHAZYgkPbH6m4ky6x52B5xVeDT82zEYevtLCZJSzwjWyMjhsVF1AZ4wp1cHbo2VWkZD1CBBnJaM",
  "key41": "2fsvdsm6JSrgzJyJEe5uz31Tfze11qk4vDrcrWRHUog2F6LL3fcdfdkCV6F9APdrqLQs4uBMgoG2uoaHbXKpvQS",
  "key42": "2JToMh94iwSbhnSfF6poUqqqqQ3DEP6MWuGt5LPcprBjUKZiYNDSRFRfcvfdb5Ps1Mq86x29w8y9F6QLdiKiGvqf",
  "key43": "2A3yYQS7YfcUpi46WRmbJDxh5t61yEKUitc16uZveL43cBpDn4oA5bnHKK2TjsmKriuLtzC3mzs6psQpYXNjgQEU",
  "key44": "2zcwTuPRHhUfXJW3S9kAfoxjMPgfiRQRoDqD11r7WFvcKJUi834wGhvziCvFsiJZ9FnCGvCeWematinZouGKqsQ3",
  "key45": "2a1cZ6MzS2jqGqh8VPyov3jYtMk4aW7Seq7WsyZtiDiB8Gx1pgdpawGFLAWguS5yMjst1Gn5pLkwgJWrwYFtTWaw",
  "key46": "54AQAsAVcjGqMUehWjJn1iCtPfExMwCQ1QB1E4ZToqUNMZnanyaLCnS9XcweGtCUjKxPA8akSetuxfjKgaMY8A2v"
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
