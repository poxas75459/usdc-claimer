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
    "5omSu1zwobETyLTWRpTnnLhbGAB39PzvkZYKQjXJgxjtQcM8wma523rvntupFoC43osthC8wzGUsaE4CfB12dXqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2suusundDcBBLiM3SZim3pbCRPSVWrG3f3iXPxYWQoaLyP643HzBunATo8EAyrZNN88DBDUg8YcUMi3EQgHruenS",
  "key1": "4m9Gy5fvC1r9RnLuj1ZPe1qcGddkBAXrGVQawG5bnmir9JWwuHAcPCFumEReehKuYJxTErcErL8gteJ7stUTJ4AN",
  "key2": "4B4UzsWxdahwReLhmKm1gfLsN7fzHhct6n1HmVtKdU82UKqtoTwKyDKJnTeytxrth3CQDX1wCEXeoC8qKrnu94T4",
  "key3": "43iUzdzFHGnKTgN1ppQTHJdXsykxpwdMSY355n5BUgk69vLzy2RAbtWBUiUPHnuvKs2o7ReNMhoFiBifNHccYjWH",
  "key4": "soxTBJqiRKbenFHsupumGgeqjRmW9Jc1iUVf5e76FF48xaECrbVGaq7JktHepkdYvwjib6Jwk1qPUr5uCuWUm4n",
  "key5": "2zMBC5CfGQFNTMUvF8gsSvNYj5ojF4Jfd9tGdJPeqo3JaQC6DRTDi1pEP3r1cK99Rgj5MqaeBvvX1APYv2X6zhta",
  "key6": "Ue8fVhnzi7qZPAtjFCewRnGXo5r1v3tmwdxamDCZVne58iNU36GL4qgQQ4wB96ifXdQcv1891GmXXJqKrzrHAML",
  "key7": "27ZtpUhuEhrJ9jVZuSGbhZx5T93dwTxEZnZtA66TUnNBD6UuW9vkr9hZ5UCvSV33i4oMxo4q3tXsfPwPLSFJJ3ki",
  "key8": "2zW7ggDub1UTMui4ctsiovWZyRc9E6fENUa5fHdqjPCHA5wKpiNxxKQNuTGre7vshwFQia14ivyNLRo93SeeMSzf",
  "key9": "3h5irc7sVyuCmqzvgdh8EcU44qBJjnpbhqEk8e13scBRpxSxRcGvBiHWJk5SZcV1iGd9EASnm9WwPhEMAmBoLbbh",
  "key10": "uXfufjsSocGNU2voFR6SUBu2AVWuT9GGtQYWhcziEzVvPkmxfc5N2q5Z2bg1tCUvYbxLX3QvybdgD42TQEk5bHJ",
  "key11": "4ZYXKMvWw3izhsuaGVa8Xo8n3j1HU9bzu5Hh7m26JRmiVpEzr6RTyKhbuWamu1NKnLSopDD9X6t3TbW4GrWLiELo",
  "key12": "62V47UtnWrA8cAay5iABMoG6csi3KTLeMR6sMbFKLCcdq7P94bN2qghm92N3iTipCFKS8rEKrsyVxUKEsMe29jdx",
  "key13": "3nQVfQMGVzsZARVDYMu3FrGsdET7mZkD2Sioxz6SDs5kvpnFecrcdiGVapet1esVoqwYLP37ciCGyAEZy3h5ELk1",
  "key14": "4ocLuNZMC7Npv42XCpe9mK9Qc85LG5rVFXQv4LrBRAR92JxHubmc3b5mUwBvxvrMMfpdKSAUF3WnKTmHedtiUnfC",
  "key15": "ctsCA2tCVSGPN74kHfxc9yrQcUfpSRZzW4yJYrxdB2M1CkvZK4tHkM26wcpQhANeR8JmMDuSWirfVLZSFniEBJT",
  "key16": "24m6HmauTgYXSoTDnbisf8o33csNVKoGJEtmg4i2yqEb8SZW1KGDxUtkA42Rqyivi5jaXv7AxKRtM6qLcstjoQPu",
  "key17": "3rUF3BPbEnwtz4LbU1yKAbrLK68iPQfBzSmSD2zbFi8NusdqxciccbERuv1hWykpa1uifxQGgFMi4Zc8hMCd4Xp5",
  "key18": "V2b1eZLrpVo7uMfLmfpqrhDkUhqEGUJ7jXwgxuV3PaLNKdWCTp6ChvBmVBKaZ4qrHMrzrTRnwycqky6fPQKjWeL",
  "key19": "XnttMJWgdxX93WqPEHoFuEqF6Jku7HaMzEh2Z9UjCQ7NnmNSwqiba82HASbyVxEDkW8vT85g2xLSxeTdsKKSpoV",
  "key20": "4PKjYpJ359q1nZ9TrRdNV7do8tCy5ZJ2ezfT3hSx7A2UhnnLQajjeYTPR8nM6UHbtKiELDh6f4fvU1TLvHktgLvB",
  "key21": "3YpWqtykBMhvy59U3NX9muqAzbXooNJNyiU3P4wWkwWNWoeknfVjGV91sWVcjc1EbFFh34sutGh9xxHpFBmgqZeU",
  "key22": "2M24ztVRhiFz2QoTsUP7B8tNZrMstXJbBoxE7eTnY63P9dhY3WhzEb877CSFLkbr21YwTqNy3GBJvSTohY4PWkEb",
  "key23": "22V1cgk4sooYi4vL59StdJ29T65FzvZaTf8osvvuTTH8WrwF5wZtMBP48qcieyVwDyDaG4mKfaydJ4kzDr5ZgDGL",
  "key24": "2L72F83HpBZLCWsVet8xMWKR7JGvoxzYSSxL1wMokkXQSSHA8iXfnQVWq85iqDK569BpgoKwk7CwdgGv8yp1ugcq",
  "key25": "5YyE7hRoXDbRA33RLuhPNWdSYLARZbdAswdVspTddE43L5iRWm3ymNb8fXZwfaPv7WYZxZkffCCLHd5sPndd9CBy",
  "key26": "66SKpncRe7S5XeYtYzwgtVEy1EyF8pJd4Us91Kcm9zqQgHnpnHtmuEbpAvfGtMicQme28TQsfzjxc3YUUK3hq2ox",
  "key27": "4YotfDvXfYHD3aT6Riq5Y1oL9hRLtuuhECfNquaugvvj1ei1mAVBxN3uXnZCML5SwHMLaJzoWxfengQPaBueLDu1",
  "key28": "5k7RVrZd56mveyNzezVMQnWmPkiC1tX8Dbgu5MEiDZGiqSBR9hhALgU5JMRN33cMrGoXQj5sVe16m5txRkF8nwvQ",
  "key29": "5bnJp3U14DcPx33mbqqwMoL1pZzomXQZYQJdpLkbMkctJQSK6WJz31GoW3ZyiHTc5ypCQBcEu6QEyD4ui6mvF65g",
  "key30": "4kykz1xUJQsN3Rke6GLMMC3SpxqCM3ZDH2L6FEfjYv1jpeJGc9Dq4fyrDeANZSTzQnk5AYgMU2dpgfH2SwqAMQU3",
  "key31": "vXza657vnRaEY9yLCFm44pYg5YScY46XYdYfSr58pxcn69iqGdJJtyQRvGNrMHLxMJGHiNSLpweJU683EVVD2Yq",
  "key32": "2aMsSc5RgZiAJdzgkAJsRJamQB5E9N8raPwG5imx9oRPLtKZhB8Td3nS2V7WFkDSaSX2LhihXiHiiEpYqAquPxoe",
  "key33": "4bdMYEZJiroMnWuQaDgGnpRNkAur1JrTmSK7uEdFPDoFBhMrxxq8e8LoeJEPcEDBT8WxamRSgNG3wE1MZ9zh6uff",
  "key34": "4tBTiHm4xgv6qkU2o2pbf2Ay6egGwNCcHwmR9YbvradttiSy24HWyGmHwvkHRY4tLwXJXLgqHr8SYToK38bLo2D2",
  "key35": "4grBoVaM9r9ukPuFqDPS5dEDWEbu4YN3TFsn2iBiYLhcXxFKhw3vXui5NVLDJA1ws3AtbMEbFD4igRS8EhvsgJ8M",
  "key36": "QDxpi5KnZPsth5fP9fDEhTiBTJFcZ8roSkacbbnAHCQjGttRL3bMgc7CwmoqURPdGDmrxgjvfGvymw1sdkmPSuG",
  "key37": "44Cgqty62NKj3iidgz8jdXU7dAAYTmpYGnJFG4xTEgvLz7a13NTM1jEFE5hkP3cjkUgPSBN8Xn4ypwCWLk9px5Qa"
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
