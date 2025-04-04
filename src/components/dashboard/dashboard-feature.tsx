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
    "3chxdrxCQz3ykjSLasFBXzimCBoVpzanadLWaYmsMJNF5Q6dYZ6arB7fYK8TpziaKFG2rcSb9ZdkVZPUkGCUU2rv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XChVqW8biqqBGgy7SXaDNLLXCor1pod7CtRabefjTgZRDywNL7m6uFNMKCVfAGDz5RhwXWGQtkFN9bGggTeHSCB",
  "key1": "4UuV79eHbRa1EsMXQkTvzqhaEWcepw2xJzqS17ijqC9CSWc3TpHTqbpChCsjcydqVedspjZLdJiPitXcFyFKQrRM",
  "key2": "3UtdHAz7YT55s5Y9nwJuNL6T9kW3GczJvrdStV4dFH3883swdchAdMuSn2vTcSK5kTUMj7QaUw22JsUHrrFKQryW",
  "key3": "4AW8DNh3EdJkMtqfyMTH8GA84FuqzhxFqAeqcYd7yfevFwoCB9FgcPqVQy6GwTHz5QyoGhRU9kdfkonDe9wZzfGU",
  "key4": "48zyRgJv7DEzdFbTP7kW5Ro7NceMNh2L6WeAe18EPuki8R3JEAVxnAGbcsUkpZanQXEJiAFCJc23nzbdi3qS8bFL",
  "key5": "2JW6A6mkdhXgh3r1di8i4aDYEkukEt4DJ43FXRFjqwVpwT3AgXQxAYSjdKbjkH39YrxSKmPG83HryGWYfHpWYvUE",
  "key6": "5FKCNfUt2f9FwcTaPNNzE8SDewft3EdMMDAeEb5935AbYXEb4mB9ujXUDdMs6UTuQrwa4NFk2zfovZ1pzxZUUmt2",
  "key7": "fUDsepr36mye9Ne68xT1jfzj3hBBUsq6b3DKGFvMdvPe6X3Wjha8Ya4vnD2uBoFbtFr95N5XGX8H1RFHUZDGi9F",
  "key8": "pydNV8SRsKJg6Yy2j1WvFXFL12vgxGtQ1NGx79Wy1Bn5TSTKg1ijHqJbbS3nms6w3sZ6dW3NBxdVo8FhPfDJRR5",
  "key9": "3iqybtPnTvzVS5WSvcdaMCjWCZGtXrZpHBGLf8wDLvk7MWoUafzfQxiZqi3K695bFvvLtprH83V41Y6CoxqNydXW",
  "key10": "4MEdauZHpfoinCabxJej9wfeCjsEw93XEHJRo83Fac2DrRdBfoZjmw2HmeY1yKsGp3qH431vGTWaxddz2Lr4q773",
  "key11": "2VXm5vpynWTVg1Un9DwuEmkV33ocs7es6MxzHRqCbE2736zeDySyMJuNitBtfYTHQdxdDmkU6cTFGNsVTYjRbfnv",
  "key12": "5ZT88mCbAm67xRanBQ5MAeQvVweNBEsZM5Zm4WhxWHm6Jwa7Jrz3teLMFkzmveCZTppKRpJMtDUQKCcjqwzcBjPB",
  "key13": "56a9XMiV3qaiEw85yx6ThTXyv91mB7zAaJQ9apSHm9RGjtyTyK13nD83463M4NgFDxGyhfH3VeYvorNUx4GrMnF8",
  "key14": "62BzN4W8gJf2GA8BQSdb9qrbU3hzBBPpbmQb5Tco1ZoGPbgRvBMdpmu6qWmbtV3CYoZn8nRgYNmHK51zkDznwHxX",
  "key15": "5Q1bJ8phwpWdEyzZ6HtBaZwcADR6cXeUTMLGCbzHWmTSLcpGnpmLH298TXA8LqsvfEC8ayrGfcXcDiopPTiGEUni",
  "key16": "hFyy4y5CU6YAkfn8cA4VSE9gYAR8PCN9qAGs2X9qvjSe5WGs9riyJyGmuB3sQdw9eBKSy7y8Baq9aLn8JJGo5e9",
  "key17": "3SQ2ycednz2GJ3U8qDzJdvmGHwB9gPUsspbGnJZen4rXYwHrQyAv5A9VaFZJMBwYnnZ7vsUyozVdxec5GUzV9XPy",
  "key18": "2drz8iZ8J3gVmPPkAsJY9Jk56MhmBfcWD777UgMrjWodFaeDZGkuTudUQproiviVx5dytaCCrqMeZVvMn8GabsRg",
  "key19": "4fTbNUyQ8XDujh3KBE5sNUrgJh2bJ8TdW9N1Awmb8dHvonKKePa67JdUgViSiLHGCVisgLgn3RPUnxcouudjYr7y",
  "key20": "5oCrcXy6YySki4UR6fE3YLYvrdeWa1djtsQU5wiFiPN8JNtZtCKKPVPHYtTKEVFXH9DNHegvZ4uzmKyu8RVL4yK9",
  "key21": "37PvjXBQG7jthEP5zVswU9acmzBzAHfoTtJMW9edShCcugU94oYij3nuSKauUTT4meZhehX2rWJiskMVk1sKX66z",
  "key22": "7da4PG52oi3DHrM1jUyrQQcbC1waENDS2AtA3SWZsWozSyzDQNs6UE7ADvVteijPcJxFmzsLz6QeAqHESBi5chP",
  "key23": "672DRE2PGBYWSTYNaWu2uhamHZHvVWEEhUamx94xAreHpHVDgAebCJUX7567hAszSUQMatBLzXfgBNfQx6rCp3F",
  "key24": "5viyJodwkmrd93twaWZhpuT3WxrDansAVVDHgfhWtRf17P6Wmfs2UL7dZhBgp2FLH8KkeWmg9Xcis8Jf8FoQRQBy",
  "key25": "49ohBybzwcXaRG4ENWWdTwQBwQkEvWbpQoDbtLb26Ew7KFAPsbQqQTM4NM7XtDF1pM33yB9BqQu4DeEuvpo7PgTk",
  "key26": "2T8C2fTqggKdETCk8F5rUGsGRt1CmaExVMdp1Py7BqbTJ9Pt9guRkT21qWnMey2nEE14jzQj5awjbHfjWanzv7NZ",
  "key27": "3MbVobEbkwPEgXbsFL3h163h2mKHnC5K4RmhUQTropw7mP2ATCmxkUJQiYcavVJtoeWrbtVNMwQBPANiW9qPmBeJ",
  "key28": "5tVrodLv4Pey9a36gUHdihmb859YTeMvmrkN7QHxJMKfGtttKQyuG9mJHyRYMNtMdRdAitdSkqX1CWLnbMHfY63x",
  "key29": "391ppgo8uLzRCDpwhWdbWcbvav2Brki6KfLKYC76LLbna6FMPjBB9EEnYUZ93iE1x1x35KUynYwyZY792pD9Tb4t",
  "key30": "5yrFa6bBUdoPDfAkFYuv49MYzu8h6M3mj9GcN36gUfSKQLgSui1vuCmsLed6RqFwhZLNrX4sKhrbJJfkJNR6gNXJ",
  "key31": "GW6XpdUmKdzdoA8nsDwhmAME5JMFN3Cg4UtArMDYmrvtAzdpG2KJTqK8QxsoKBdzD1uMHVY8QZ7NQnQzsGS9MEp",
  "key32": "3Frdvttv6EfKo2Py43mpwxM3W1Ei6waSnAAUTqRL49w4DKaiVDWDWPiaADQduNufHFXpVyaZJne2SJB59C43td9C",
  "key33": "4Gx7GMM5jAyGZSWWXmCtJRPRQsfCX4wLNhtxgonLQLx5rAZu63JRuzXTW8WVsr7YyAhbx6GMQXDsYEA9TRY8Vnoc",
  "key34": "5gZgak7uei6pM4ngY73Xg1Y5VSZFuK4tmdMMeRbc4Xi5SeuHrJv1M4ikFGMayhLdMtp2SWon8r3jDcxi4AAQ34tA",
  "key35": "5fq39sdPcHpY3XgPRm5NYv2zUvMkWRZhgXrEjwsELsG8kyty8ZmcyNQMAkTTW4xgQsyTtscXob9hqXYSY5FEq4UA",
  "key36": "2hUaHTWQEszMxWyw4bhrfQtkqDpzx2LL99yLJ8qzAPY81NJEmaV5Q2zENgiX8BKuMUecU2LdJCRK3gyi1wH4PhWX",
  "key37": "3UeU9ZHZUJDwDhFK747FikPWHcDPBfNyC5zJGoqenoy2T8n9NetX3ybWzn5YGDCiSgnB6psjFWKzptNF3qEZhH7n",
  "key38": "2Qk3HXkP71XkHRMJ5kgXNfE3PTPQm7aWhvLQsYPdVgxtogytyqPGTJC4KHCqVvr1oXEdCD8sycmmpViN6xcz6zFH",
  "key39": "eC87bxZ5BRozon49K2cQViXN5iD6DYh2fSQwr6SYLZ7RwZdzdp4oWFhnZ3boJWERkEdVD63rpE5LbCVW2dXbRiH",
  "key40": "2tcquVnXQg4qaEEVYpwDBdq7uZHJwXDAMERwGFchjr2ePwjhzFS385cPerb8UhpjxRTY8JLoBeJ7SmQqWVfnchB6",
  "key41": "cztKCaaHmZYKMVNZeRwyks9DydZ4nydkkptbJiJnp6Nd6FaefphfmYFVkMfRNFopFjH566Euu1TeZViD7sZAfgs",
  "key42": "4cwNtHRHXpdVFT5EuEvDVa2vq78vvFcbMLUoESHQCCdtZEn84ifamZXWmBHouNHgD3aoybYtBVPGgHKgfKpgq1mE",
  "key43": "4X4APqyMS9cQFXwAaSdrnLjPPwPfRMxVGyz2t6puUgGiJqdL85y1u2J9z4fhJtQ8Wc4KXYwmXfRPxZq7e5sFPJDf",
  "key44": "NRxfQarK7r5namf3rfjyrKky7XGrA3MByCz2abb66QBTPkerqQWPwxEaAd1SThBpPHRvcJcMB5Eyr4twYimCFXs",
  "key45": "39DKZ5iYBZpAQq6o19nmcNbcHkbffJqEjDTebLhG6Q5HMYyEC2fsP2DobE6giE5C2G2gDQkJadbFdXW96Sd6ty3b",
  "key46": "BDWvdkzizcDFE1Cy3Yn9yHUJwRr98hsxznjN1xJYa2X6HNvs4U4zmJMEB2YNVEuQmwWZGqMN1GYnVNrn9Ss8KVA",
  "key47": "Aa6xCp9BxBJzzVnXSzRxbcSddWWAxus8CzvZz8bZ6N1FSraEyiJ5ysnywJDHMjgwebKUvanyScoigYQ87YxX6fC",
  "key48": "27rn66e7FNQ5ynEwjgKXpBiz2gmZbY1qXPv6Ngzieo2ezGXXvhg6zCjK1SVn6jhjHhEfj7ZJ9jQNYW9TmMWsUysT",
  "key49": "qryLfgoQs3nEBD9Aw4PzUtk3kQ1EPQHaRdSf9fEqdDBF83ZEQ45mqrh4UX4wkjzNcLJq1pmjxpnvefWpSauw7ws"
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
