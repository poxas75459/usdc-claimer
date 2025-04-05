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
    "4BjruhxLsG2gErEDAKun5rPUFJiPWuHPTsPvHemNi8nSo4FP9FgfQzXMCTnKD4LumnfJaB6ois6bs1DDzvo23kV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QyN8joJzyqfjTCe2b9bp2kF5X99Q8CTxx5MJBjbi8S9GALpZ4aNwwozFp8xPz21J1UVGmx1GkQhje1NuYcVHx1n",
  "key1": "2omhdy2KZxVP1TVh4iYwQYbP2b1NE1ckZWJYW2ZJD75NyDsPr3XiprhWZ4areG35EDdaGrVYcGwormxo1c2SeNTX",
  "key2": "2cG2EDm2peWqNK98E4m5EMu9RnDtLCqXbBUDQJSUHpgKjV6R7xy8QYxq2aZYRwjVEnZf3u7nHYZv8zRbfsEqwHSF",
  "key3": "2YDrdqVW4cQ3aZrgodxh8HTkUEReCPereJuoAhdpaoafg5JCGqvybM42cTmT1diCycte6hb3foPNjErTQyjmygMv",
  "key4": "479TgDZfiX14VvFx7p5u7vxXTNnJx6hKsHgbuBqGhikj1bnxAVobVGn7XpVNPufcYgjDYbRtZ9WAFdVQ7fFxTGhy",
  "key5": "3W4y8AwG6ZrZ8qd9gfSNjXEyw5oup5HqwNp6xgsqeVMfank54Gh3x4qLX8ukoy7ChPudAFCL5xexcLXDcXevoUyA",
  "key6": "2t2MZA6dihCQrW3p3rT9C2LymkM5kS7nvKAbrKfwtgC7Z3koXRaHWrwhKqyx5obcybt4PLbbWPtfAkzVjrWxNNVZ",
  "key7": "35a8J9RPr3F1Vgx1tr13qWP3ZhiFiZK6i5LVtJE4yFijJqQSsgSmSbKxZvJZrXip9sTBoGsRGgVBfj1Hx7qfqXGM",
  "key8": "2MGtuTjaBTUQPtfiCf1QbKVGixrasopiZWHSY3H1YskGztgPs3oyZgwNJq1y5FcsSYqiGMx8FuP48jCSXPEEbEtH",
  "key9": "5MS4tHvr184dkS1B3mr5EBfD5dedYzhnkcXg349LPTCGvAsACzdxhRD9Kq2nsCERu1xY7PzrnKFewwYgXqcrGxhp",
  "key10": "2WNqhw7cxdaUkevQ2ZydAvv2rt14Fo5EhtXN7ZpLG9GRLQBCDrfe3Fkxy5SF3cvn7sgN5ykzZysG4oxgDTobPAYP",
  "key11": "v8Y6mW3SGRu4Lg6aYxYm1mP7w18YPHsR9F1h7KUdm4Zcg9PCboFX6qTfn81B5pYSLPqywcEY48gdbv1VzpZXsVt",
  "key12": "4unZm1ibu39Pk8YKgpmTYijk59je8vmoGUs8wo4VVjGrBokjjuZp2NfH8t3LZSUNePj1XWMuTvAqVfLAwntqYtdt",
  "key13": "52oz7smea4wyWzevjMpiNw31j7aEP2vKNVyZkBrzjUyQ9KGoVskBmgFJr7Xj4tiL4PDTtd4LxQ4Q7tmLuyXuChuo",
  "key14": "4FPyNTkGQMuw66GpFbupE1sg3xgHL9CEArgHjqiRyu6jhezscg2UJo1ynDubZn7kYTwVrsEGVoY32HonTrSzxq5a",
  "key15": "5Xres4o6o3hRMxNxyDW747SDfkaWhRprEmM1XF7GeVLcnWTWf2xfGfFBsAej7StP7yzmtnhpG7SbZQvK1i4PCSLN",
  "key16": "2fK7bwKmXuUVYjkpqoFGjAX9D3VrykYAuHDmkZtjcN9xT7RPzBticfiDoTvwh4twScUuS7aSY2dBA2HxrTX9JWRw",
  "key17": "2tZGjqRvZ8TBRqdEv8jcGEKdGYi2PJzLigAMYRoa78jwAZUVENtWxV18jAZ9C9dCzCAJeomML2wqkkfpMBb9huWG",
  "key18": "9fuqt9GQJa99hNz76vTBVd8dXuN5VJzxbjEMPayX7G4pdjwHxgLzHa6ZyDv8cxCD2xMgnj3MYBpMLfRpGMZHxjy",
  "key19": "5v47U5rUApvGPPMFcWkEuetxXgaRoNTWqQ4qXXxHpUVyPhU6hai8k4pJY9AXPVYB5Z9UUMYozuSKV3TqdZxC2VX2",
  "key20": "3kvdVSV3M3pbCCaamgDfE7M9G1jPaW7h5w2N8mM6fQpSQKso8jEdQGngsb2PDXJp2rdoRfcJMUPS1HAMJFuojkHZ",
  "key21": "3ApddXBma1BTtyTLPVZSMsJkUCnHARMshHDWuLqMgdBZdUr5duBfqSFYqC2FKA9eLxzTYbk7ceSjnWofip7bMzB7",
  "key22": "XZx789aPJNuXLVRAQB9925DjFL7d6mpQBUrq9SwfLUC4n9B7YyiUjEe4W8oKUYKBjGkaJYR3QXDRpM4XemUY6fb",
  "key23": "nY31tZ52GKhFqqJDptkbJv3hEXawmFqKt7AuoSJpU1ja9VfDXv5hgEMCiiGqM3Ma2KQMYai8L4NWPoYSoszn5Qg",
  "key24": "4tdEfNkJzKcrLD1GsFP11c5utcMzqALUh7EAXcm1tihqtHxwP9qpYxRsmhwKGyykmdmxaPyTx77E9wAqNjJMkL8Q",
  "key25": "4YJ6L4SiNAH8fsFRFzSMo82cnyCx2K8jWBde498p1oQgFX7wF9JSGfivKiCrCp76rcvSkhHgKyt9WNbTaCmiYQ8w",
  "key26": "s3RHy5TW1gAWdDLRiqZWy4S1Pp9CUYqJegSKKAsB6hFvzMfPRscAVa5Tp2XjZPivAQumeejV6WPLV2wgSov94ue",
  "key27": "52hyEL4EsE1Mt77EJbjkaZUW8tSfPPeSuHsKDjqQh663f4GacLBK8robHPkGmdP99atVuVPMZe4osAtUu4xS81gw",
  "key28": "5udByCfq67AncP2HVCA2TFmWE1nKy8eCkrTWVqouX5QbnTFeevKxY7XFTxczd9hhRDYmG92a4dHHfKpM1dW1zvNg",
  "key29": "5vKUSPaKeS266ijoZ41GPtNJBU1iFrkFVcaLn6zJHukLYneYLEcZz6iL4w2GSJmw9PULsxCpgVuDZM6MoEkep3fV",
  "key30": "3J1Tu5aBBJsRhRqJwBJvGNYefqohzUy3JadHNu6mUodixTMgtcD9CnsehdLVKSiMu7Rj6neCzBd6bodWW9iarPLp",
  "key31": "3gWMQiDdR1uDP54kiC6WaYAjx8faUgKqEhXrpAaqyFpkzXCrXxmCDXZYMpz8rz6bqAtHTp2w3f195qWLib7D1MpZ",
  "key32": "2txZiszyaZ38Zu4PtyPsxX8ERA1nq5YAp2KFcqeD6n19T2yoSnLEUa1jLjV9TYfjmnA7WsZ83bM3iaBeuheRpx7G",
  "key33": "jj97MLF9HpGUSzegSnXTg88N4Rj6595Thr9UHtZ7s6gvWgW6XLAwcaCfTUTA29jd6AUBRXpyCia4sewhRCTEkCj",
  "key34": "3nDTF3RPGYVMguUgYXjRx4TBdD6Ggc8MXyhip41XQimoU6RiNmZFCgUNxJGriZe6k4FnjisPFDuZKYGenKa3w2RX",
  "key35": "5MqzDU7HeJb2ER4h3cXRS4aZJATg7RrQ3hY1ENmyRZ19i6cQfAdhvTG126VactxorK5WjdSVKkzGsaSZPtwnc4A8",
  "key36": "32oWRXzWLDoKuGa3XqkhmwYX26QcUZ3VB143NwjGr9dEFNkQBnrP2fZUdJyR6J572S2oo9FfmgYJu2f96wryRyaU",
  "key37": "4woNBtYfF5NTqjWFNsJcKB3hEvC4ibe4YgcX3ffEYEV8TeorsaUHogWH5mA9b5wqTBt7YbJibNKzsqz1D4ATAXG4",
  "key38": "KMwJCU7fPrehFKaCR7G1Kno7t2avexnNk4CG3TonJu54KYxqGNhDQpLwTve8ErLm7Ht3v2uXxFgP1G5rTgWwGuD",
  "key39": "24rDo8JF5GbwRjCbfz524StnVUAGeHyrA6gQsz7wtLAAhtHZEbyHCZvtStsboJSZZhn5HCNk1HqDLHPwXm7i2XfT",
  "key40": "3FLdH5EtYoVkT1BYmbV6skrQyRkqETCTACJ8i5VkDEVyLLu41yrENuuLTKzkgj5aJFNtStYut5EiFgQo7ztgfKVn",
  "key41": "NVQ9HdTgtaxFgsV4ZxrAMrfiitxeE6YN5rAugjPcgUY1LDNdgEzyKvtLaRqxTKRYZSZrjkACKZsqGCMkkhoi8rB",
  "key42": "5ooMiVfVA4Q2kdLnmxUsb6wFnvmcgJzFFU4QX7CJK6enbbgF8joryAMLhAaikJ6cQKuugJxYKJa2BRz2MfEQDzwN",
  "key43": "2ykJ4STnF4oBjTWSPrzbb5fRgxhwyTDq88Jrvyot2TQZke1G92oyD2F1nk6HJDZ64hPi3DLYMakrYxwoRjkwVTwJ",
  "key44": "3wSJ7hyGjU3YXKGPx3XtkvvM25kTwBvXQNcFBuRMQJMwbCpQUa8xpSM52iw7uNGw7dPr3QSwXc4DX4W34G7bucFu",
  "key45": "56rFDJS5A75Bh91hF6smwEDYL4PiBrbgFEAmcAT1xmks6NCenA3i5z92WGEJMJkRLgwNeKCADDPkz3qCpP1ZMHkg",
  "key46": "2dG8fZJqpydDxAQknsBegj3JpeF5zxYqGSW1rDt7ub1nRdxr8Eqtr83gbHrEQKZKB55zAqHaNHjJHPCuSYgHZqUP",
  "key47": "2HQdkW2kRpYm5K1oBToVTewYMbiEgsLJPZBg1pHYkAzRW49kYNtRFXr6W6BTRnQNAxosN5tPGJGQMh9Rg75Qvwm3",
  "key48": "2dgnL1hPKWYmwiRuqvQb4PPEpTv53kcU8N8tnSU5EfhjTsoUf6rgNZkef4W9GthHfkURmPTygLDaYJoMsKBiPTZx"
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
