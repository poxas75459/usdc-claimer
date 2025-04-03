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
    "5UBQ3SuWjEMaD4bAHmNR5ANQbj6XsQDTm6KkxcQ5MTpiuzecNZHdbSgsM9EBE52sgZ2FMxdaYtnG4dtxkmDKQmCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pYJY7BFFjXLp7B1B282szSznhxngh3HdNK8uJVkU3aXjtv6BW4RF6mKAKD6dApH1aW937AQwHt6WMG7PbgpnW4G",
  "key1": "2Uv2cyrXxUsBAfCKJUwBunpicwQH6vBJ4ssgcAPPHxioKqVFF8uQoVMmc1cNe9mMmG5sRYTDVqaCtkCeLqRBpHPD",
  "key2": "4UasTfzCA4XPyRRYBQfLV38i7JcPTpun4KAtsRyNWPC1cno1T673J2HQ5D4dtGMzNxho1K3vZ743aaZQEJun54UP",
  "key3": "5cwo1FdT5jTzs1wZVHoay5oHrxichnqMQwhC7YJag7ofzRyF5V3qkUhjqopQo6cQwPUneLNfmD3mw6HWaBWjm8GM",
  "key4": "3NJTqbkxGaVKE7bQrELWAEfpi9z1Vd7BxyivTQ6GaJqDcWfATJr9uazNopUKV8xFbTVBst89a26uL1JqVNxG5XP3",
  "key5": "5QJFq2jjLKe9B14eJZujXT5177mZ6Vt46xUXEBdDTz626sLPMGHv5wJNapYoe5Ee5N1woAC6UeGaiA1nR5LLHQKE",
  "key6": "4qgAheYvYBpYjPgqBenq2z9yYtDMsYD61KqTFaKe7fQrJq3HPVXQaei9PAk7g2YxusoY8mdZa2wMiGVPRouUAe8t",
  "key7": "NbwH2JKbFFRZA3ds7UWxoycFovTB1uiiWY2wjfGyRKgHx7DPXmyEq9WsXGamG1b9KFRpj7JhWQbDcqp25gSyNnn",
  "key8": "2h8XJXAVSiJYwvaJ2DsNEXYCictx9m2iwvVC7cho7ddQQpUbe4rZW6ssYh1CprgNfhu4ERSQ194XMWeeCA3oTRmY",
  "key9": "KLQacn43HqFi5WZTPB3AiJ2JDhXj1zGXraLyyfNd1gDAa2YrS5Fcu4qDxo9E2e72xkTt3wBvxuH9vJL9QujyaF5",
  "key10": "5BbQRZYDVCQRVaMw4v3ypNUA8zzmaaMDGumRsMDyyZiCbLpR2vd7SMQNUXtcyzybTFDKcGEbpWDVXq9ZNQtEV7La",
  "key11": "2nr3dQnG6LhvMJdTv95JnnVnbu1GdtG75TL77ZdEqrE6djug1uutma21hABvBNjaJGr7q89P2D8ya7RRDd3CN5jE",
  "key12": "4XkawBu1Md7fcrFwJHfmzBGr5EcngYkprdi9PUXwaCcX6UDhfqYniCdkAtqP5ktqPqhVko4Cy8EdyfhTvvxhcr6z",
  "key13": "63AtbKdG2qiomLboK4dnJGqTfYdytJQLmRYzooiPKyp61UzXoEkbm3YAksJwpPQz3SVVfTdoDecXG6cnk1q7BqN7",
  "key14": "5PzP9395XuggNL5eEv8CRSSTGB9r5p58fowZUbsak8rhmFdvkYgoMvMduzW6zyKM9TdVpGDhJJWAoCR6VcyicC9g",
  "key15": "3AFrnLLFnbJpF25QxVw5pfnsTDC9bnVuidTsJdj57mTZQEzxjsXpCMudhtMG7yGpNSzowQNMzaQvkHj4m3E9CQnD",
  "key16": "3wKvQvoMy5Sh1qUnxHyQkGB4TsnFqZgFZZ963RRrT7NC2o52MrJMqGAvrjqRJqRmsqWnWimS2qEZMKFhtVkYSuEf",
  "key17": "F6t6A5MnwDt7SW4f7iqSzk8sikhtDFPAQx3oCwQYkfySrNJxNhch9UpemN8V82EeC1AMP6aRAq9jdmnKTo3RtNy",
  "key18": "cDjUWpH7jkEFpbGzm47Ji5CvH1mMJ425usJFtJ4d1ddyB7eNH5DpBfzUSLexUfQbztVgoaKQQ5VXnJwxDrE3wVh",
  "key19": "opFvpu7b9wZUkKx2YpSRBkxNCKVz6TKsh9qNcgW3dw4rzbFTwmji9xcfhdP7fhR3niAekGM32PXMtLbQtA1Eed2",
  "key20": "2eCRCsswmnEm37xgnNVU2HDxEdiEqdkabfnG95SUsNLEVtpnkqgj9LR7rE2nvAcQtLzQV9Q6YJpNHEsgzpCjqT6A",
  "key21": "38MCpiSpRjKqi4QhVgAEioeGmJFgRCkMZ4cKNNNEyzjQKk7tvj7fjcjQvwkN6RyyxGsMvnLfiToEZ93uVokxbyRN",
  "key22": "AEky6MXzb91P4pCDRdapRBn7Lo7UCtrMtRGKbQaAxyk6pDqMSfWK2RipqiWrB3h4w83o8Y5rf9pcM7PYMJSJJpK",
  "key23": "4EzWvLRSTbBwwn278fJyU3ctgLJdpJhvGXfvqUNscU4u9krvKZNvhPV6NxHw5tZXW6bcp3FwKmotspGqNBQiieRj",
  "key24": "3AKogErZSJ4kyZ83GgszJomAXcaBS7avBMQBfs7pfMj6LBo2uxSRzUdppy34FbieZ5MygfiMiMWUudybewjEYkFo",
  "key25": "59bgsr8Hz7khEtSVUkYAk4QAN1EjkTTBdXDRpvWm5LYo6kDf6nF3rExDGJw4RXaxRDmNLTQop14fHS8jiLychrwF",
  "key26": "3goy4rD99W652UBMWfrhh9QyG4LJ5uH55EWeeaQwNA3cmrmxwSgojz2a6K3NEN579scUz2rpjRomGa8LzLFJrHWu",
  "key27": "2JC1bfkuEUQQFKMjU6cX8BqaARuWtecdcJBuKZAMgbFn2gNkuYPQu2qmj9X3vnxQUegd5oBRG9SCikUqKQxj6w2y",
  "key28": "TuLF9jP8ENPbxeZRnpnMqF2wGYRdTkrQrZGrbz3c7T2bAsmqNC4P13E8MgoY2rFuJULFkfVWjJb5bA3WfHGEdi3",
  "key29": "4ydU9temUvy1uPDt1J9jSRnjxPzr2ndqmXsWJwRCrNvVeqov8JEYCvUZ7bxic3ohDdMpRHG2MqtR2ZCbS4pwv6fH",
  "key30": "2yqJDL5m8cLm8YJuZqbm1qv2RL3gqDfCc4RExsPwRqrMBNvxYHDbD7A2DU4Rxs1cfzvemxzTELtFvMHtd9fjiGnx",
  "key31": "5bjh3dN3xfrFAn3TwNNgrCZnSzoKUQzJs4Qz5SdDoHJ17zFzuNwR2LRDFmAYAAQU2fUsoUJ2CX4Eb1771s2dkbwy",
  "key32": "4XPp95v6rpJraM38sPevX1u6ze7T7kNdJEEbDSVpofahoPTUx5KFvy8yMGVhYMRjboTSMmtsP3so4BWFWjqbhU2f",
  "key33": "GU45pFgMFEWwjuEgAzio7ujWX3T4sravMpg6ihLP53VVKhiqcTH4zkhs1rXRrtMyNUPxmY45MqHUgg76WSXhDMh",
  "key34": "4owhpe6UKsF15m4BQrGzzWdGgk4FmnhC3rVZhRLkQxbcEfM7HyExc1CNC5sEXLD3YPRY8RGQ9GF32UcUvkXZKEQ4",
  "key35": "2P2VAoPzm36agyn1y28gS6eMh4vH8JNgcfpVUKpBphJggbbu6YYtr5gQQguL5KMXV4g9ZnUwCL9EkL3r9kgNjmRp",
  "key36": "4tAP2zHzAavcnhv4AiVVvgkVBprKpgPwtCubVpkQsEDwmMQvERbyiVHjUxwKBLGRh2h14rnwaX921sKLhShg2LVx",
  "key37": "4MRC7oChbeCq8XH9ZcJvDg9KeJxaG66h7BWxk1iGwrv2WKUHicz49vU6wicMfSuMiiRpky41Lazypc92D5KThTq",
  "key38": "2crvugckwFrsERkMGmyBtiXpZ2EqfbCDgxtmyVXbYoyC1PqACuqhD1pAAZJLhDMuhvTYPNSZweUycuuNicfbQ89C",
  "key39": "54LrRysYHamV9Wn9WZbzVyP4WByuj1do2rtMWRdXtA35BmNAE6Ls2uC2rE98gjVsa3kXeYqMijERarmzXPJHQPpQ",
  "key40": "5yBBrd4CqgyNPR3zgeM2Xwrw5Qj7siX1dvVDYis2PAdryveGHvKDWJssFvnQYtd49utZYQGqtDDKyMPsBEUudULo",
  "key41": "56n6Z3QXxXk4R5HUamLTeqyRE56XShMucB6FJfaxwWCcyjsNQ6kRHe9ce6Y6iDRP6xiuUBpffPJptMRZUXafPFr6",
  "key42": "3KrrZfLBA1tba7drK7xnetVhqxURyYqERRLGCqWFvSNgSXmUuPgGUa7jBwyt6xb6khqYKA8QrgUNwzmjPfQiHaAx",
  "key43": "2A54Z1PvgY3TdbiRskqPCFBANaqQgUDMJvRTtEnsqm253W4YzKbJeJoVwSaRcY4u6T2EDg59xrZKEWDty8VQ4LK2",
  "key44": "5JYkdfePPkHTgTp62uefn4S1fzqMu9sSupZwnRHH45FVRDfY4JM8BYSxrpiRGAmrd9vFJwU5pzRsLyjaLjBENfir"
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
