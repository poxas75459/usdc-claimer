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
    "5EtYVCqUguDwrchBBtbdUbnz74ps35h3LekYz8rP7k1MJPRXgCEE2kFrg4cfoAuw1beM5A2vs1vFYAvfCPVLzfT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wuGYTgpmmBud9CjfVCUN12CwRJ72rCLPAi4oRJ9CPEm9iFhtMUPLqSCV5gKNfZq9HwgXWvJTeu3GrqSX99hVzJ4",
  "key1": "3hUWuCzvkweT4sy7BJseGkweJvQ9FN8rZeKy8H4kDBddAmtzkdUw9Y34BXWhEtMMF22NSgbNZPBhUzPephWfUkzP",
  "key2": "5hN4m5K8zAgxt4j8uzyWvNSwejTjN9SnxYCHwqi6bVdaXvobKx5ZYvg87d1fJaSALjjQeCiRWDC5gLHRWvAfdJeA",
  "key3": "3Up7UP7xdQAJQ1oyGE3EBDgsLy51JHDD7zzN5hckQDCJ9opsbejyiTQZAixHjQK5j6NPjHNJmNhAMbsU8SqBUqne",
  "key4": "3WJi8ui45z67H5F4iT7um3K4DK6p4WCpGRd6f2PR9RwWLikQUBjvh8HuHSfBJJnwnhgeF4E1gHTqBPLLZmEpTij9",
  "key5": "32ip5K3wyHBmJ6pDrzCKMdAU2DFj9eR5jKmTF61Ydt1WVXHLeg2Vp2VVAgRtDEACPzTHrQvt46XsLjFuAve7wc6A",
  "key6": "2f5Qqs9hxbw6C5EYu7RcK2jv2poBAF4eDPQK8bRguQT8gFPfCsfHrjAC7Kv5sWZWDdiDUv1BM62DXKm5E63mAxfv",
  "key7": "3CZ5q6VGPxrabaq4joqAyiwx9qhQYt5Nvv1YRpC2i1baFoKyQyGj93oXnQFeznu1Y6PR8bYTVShFps8gbbjkn65H",
  "key8": "22bVY9yigizFKg7bBwySx346qoBaeqRLCSDWWsiJikc8T9d6mVwm7XRK5LzHEYgoNrvjNo2mNf12na11wHCRhDQc",
  "key9": "4Ez3rCGQin7zdKokpA5vxC7puytjd5X8UKoYwM6Dmd8pbBGoTdHqF83BHMV32D82HM46XessNuNsVNN7nhJEf8SK",
  "key10": "QsiR62njkA68VYTbW6YWKW3ELaYo5ony2Z9a9MnBBBNQWDbXveAitKq2XQevLmR7ScL8vPfHDciaZXpJfibLny3",
  "key11": "3GdkR56CkdVcazn9BaV14aEd4SamYuNVPk8qYMxgGcMW5GqkZW15pyJSA5hRW7kbhuDLnsay8CNu3avUH8LQ1bEo",
  "key12": "3ywP8WEVHjHiVRmYecbgkMod6sCFinY6CbL9tj6MrKURjLed5Jbz9JiZqJiRgr8pRmHjPypCYLpcoF8EAthLnhdY",
  "key13": "5eVPtg8ZEJccoGXGmD71Mt8XQZqLEvDC8wj1AeLcXXVeW913WkHQxiPEYm4wHFXAwXUfvYRbkns6ENsJw2RSe3Qb",
  "key14": "4DPuJJyoVoDAeegJoajhgF1Lc4HqxVBbqnDbpy57MN3m97F86wYuhmqRHR6yDvq8uLZTfunk3nE5RbNbsRC8fKYA",
  "key15": "2Ufnd3VuWxGTk6xLM1EUCwQL3mAQYCgE64CS7VgaioquCbgoSgbQ8bBwToHfuAuK39YZPrmH5DCQRNgYxg9qMLrL",
  "key16": "2WAiw359fuR5fG1NWFQ72K91h1JgoR8U6oFbCmWPmgPP5TFTd519Ze98otJXcuqHqcsZEziHj4YiTM14ziEGfyA7",
  "key17": "2d8J5Uw7j1KJVBTnU8NK6b4g9RHRVtE2dMV9Gd2jX3UzKmuSSB8v9S4rTvECR6HP6DaJq3WAAReU2Bnaeadr5WQ7",
  "key18": "3Mg5Emq9gvg5AjgH9WNwgY9qHBbzCq5PfA1XbuPA8oUU8H6MYGXKqBKxygb4QhogRmja952S79JZPF8zacPpbZHh",
  "key19": "dg3XiP853qsXKBDBY4qAjfYdaVoRwvvaUVYxiq9RHGWEY932iSZauDizTaMhr5uF7bHvxjLMXdttj2NtczbxAae",
  "key20": "24wGZTEo9q9W9FxsksHaPdyByKPQtAEQRXP1oZe3CofLM7fVMR4whbbP8itCGA1JLf81HTNtui2gr3rmgfYc5271",
  "key21": "41Z1zuknYZWmJ3VXgQowm2GVF6PvnKh4T2Gsm4xdaSyjfK9iCa13iqQfi15EGg2CPSSrRRWp8VW7UikteEodrDYf",
  "key22": "9qyBrr2n6pNtMfh3Crqw3mUMiKwiZNvaKHMnQwBCxFAZnZNXMgYvTgckrMbTFn6dN8VdUgKAf1J8SkF2MA8kxd8",
  "key23": "51QqdoqmuTiJhcur7ikBLfYY9QfGe2iySwakoyeM8GjZU97stDpSHmpBkYm21iK7Zzt1usWpCMP1UTyveSuM8gVg",
  "key24": "4QAZ7qq68XSqchBpt7eKTdL9AGJiXhiYqdXr7TmYDx8BqNZNEYTiuFqokyhQ7FRgYg2LZndwmPvYVmcfNve3pvC6",
  "key25": "5kLa9XsKHk82bQZDCsVQxEDfPUFhejcik631ybdfFx4m36xNmerUnNhFaS2VDyoyv8LthHMMdoy6KaUEjH41SZEE",
  "key26": "4c36zcLdJAYhmjSrYwqZvdLxrHK6ZJR1DynNwYJoHydNieNfuvPgZ3epaTRiG65dpukkzaneXJwBMpPcevzzGfAd",
  "key27": "PW3PsKd7me5GvaUiEetwXWFEGVDCMGyPisBkfik8gW8st3XBBvfiUp5fdRzwdYYS56uE3K5BSjMTyKY1abWkzvW",
  "key28": "2kaox4DrcpWFn9WQAd193y3QyYx9R3PZwss3HVsJBBkx7Gj5hwAmQX8uuR5TJcuG1xMvpK9KswRuo9gwx7okQDL3",
  "key29": "3uEyn1ixxf561y8ZPSUESNmmYqooUia5vr2oKfF9RJJkKE7i6KjawHihSga2LDZFGkfUqVTq3CW7NJz1WSwAH1nx",
  "key30": "2A7xsiu6WeKEupRKfxFSHQ7QMJAFL3zMGpBqphaQ4Qx9zBsMTTNi6t9hVR4jUqNs1c63wNSatMS8H774uGPLQQem",
  "key31": "5kvdbjSQaBND23NBxvKQ9cNFkpkBWybrrzkckEMUtiCwggo9QneWSjeYtg5PDg9khezPfHhXMP69zpumzeVmazZw",
  "key32": "4a3Pzfy9LWJdv8s5U5BGbpirTDp3bUgBwxYKBZ9zSgkuLhfEpbEdRjy6w6DoMpa5EXsynZVGNWb8aNbPpQ7derwf",
  "key33": "PyFCyV26aaJRvc1scEN2ohS7V5WbREtqnnSVAWcW9TE4EpYjS2GM9uoVvv8Wfw8Gt6ifbDFQep1scQsC1CYfmsd",
  "key34": "3bCLiW2S1J2HT4XPvkqw2ni5jLukGcaLzeRYenEU5vH1r61jZvTJSxqHZPa2bbuqV81GHHAfZVfpcMNsQyJJqi5h",
  "key35": "3aD6NFc4fsM72H4S39HkEC6znz9jiUnaeSgVdBi3xUhvZpLgeSNZxgvFjKBTQJrGXqtxZuk4D7D8yR46wxg3pVCB",
  "key36": "2WkiX3cEGVFm2HX1XThTuTuKVsBFtWvrGCGre6GaxSjsuRCCKfnUkBT68WbtYvP21HSNAVWZvUD8rDYEJYn6fHQX",
  "key37": "3aiCpGMTz1Wx2kHEACeGnG6a16GerpBdB9Eq9QH9XomHoZTFJmMs1ejfDHgAZBGEts4hSEeTDKCMwTdzt4sjK2b7",
  "key38": "3DBtAXcbz1XMoNNerHfueoyBfHucBhYV3or8wPs4FuKtqWo9CgTgMgVkf25yyznNPodCpZbx8ycmHqV6E49WWs9Q"
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
