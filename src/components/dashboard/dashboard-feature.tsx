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
    "3cCGQ4racz86iBLvFVtBHzqUv9Vr9V4S4fndJMonMk5w5SkMDB6iabeMKZhNKL3fGYDL1nuPoWTHZH3Hmd4dDApp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EAdQZSueebQGeL5ZC86jKqAMADVTeYNaWD4q8DoYhmupGLaAQKNmjcLiwoB6LQ4a3WqZLjij1yiyhs4XcirpYEw",
  "key1": "5ktRdLku3AcpKUtbqstW5Mws6bM114z6DpAbBBkeFrwwqWLLTF4LDMdDq4unp4hqjFm2TmBtCQVSmRJLomLy78GK",
  "key2": "2WFvDEHsFkxrKN5JNyk4d7NQe9WnoaX9NNebYMSHoERaJBfydG7Q2az93zzDbdTLL5xkEvr6SNoJ7hEv5gnsYEWY",
  "key3": "2Kazyef6GFHsW2jwmAdA3wCHAH5ejpDn8XdjA2uKMYjuiQhxgouQA9WLx5WGVDjorLkcmjb4ZdFsnpnHPKjj6RXs",
  "key4": "2i4HcPTsVvF5uCGuzH66Ss9JDwSKVYJ7TSdDdtk6XRAkde8FMpCw2thjFWi7gXeUGt92pLbQVgBLYVg2od755s9s",
  "key5": "5HQ6SUM1jZDmc6USREyH5mjkqZ8QKBEXzYUpWKE7RadsR5rGadC8JRFY7rqYcXJxFGbm3N8Tny9cnVVBhffbbErf",
  "key6": "2cnF2ybUKDyEivrkkyNFUJ6XH2Lg1m58KsdTenZCb9sfhoS63xQK979KWaTVV7gsDZ779oi1Ek4FWE79sKxzoThh",
  "key7": "5QrKjmLh84TJmwj6Lph2HPu5uEzoxhS7HgmjawSP9kGgTUi2vzrAFYpZTJ4XKnRTLksUGmGDgt1bKSueXQX1vtMP",
  "key8": "kKKMo1jteRN8hWzp7rCodFhdTrXZo6no7AbZMM7EQW5PAopGQhr26npB93ccWEXnNXnQx63ppqZKoin75tDbXeA",
  "key9": "8mEaH8Zh34d1cRzZiJJA1UjNVZ3UPs5JkDK1fYWDswRwsykS4cie1jLbsibGbe6RYmmJjikdt9fmSPksaLngYgh",
  "key10": "5mVrDe3PthZksA5SRe1QpwVm1rEQbvaaXbhYXbtQp7X5fHv9nxDe7zzaCVGKLJmEn3dkoXy1BdCY2CLiVyC6REZM",
  "key11": "AsaNk8VgQ1Zeo9Q4w6hVna6iwbPvGmUbjD7Q1evyryghbPBcVcQxeKK1Kc4QBmqmDYruYyGvjkM88Ax8n8ATNpb",
  "key12": "5vvzK6eRMZSqwhLqLYnShEG33FS2hn9Wc9njGzfUzJtt2ovG1bfdUVY2SpUvu2LpSxd9tGidAaGLz67Aew5mLz44",
  "key13": "2C6WBBreaLE7dLmnswSa68E7Fj2rhJTx39odgXNUMHRHR2L827biTMdWCT8PMwWDkcfM4nA1ncuQepyUXyXspyEb",
  "key14": "3toY9xXt7XfRkxVdiKWPg1ZMmnAaVAbHpzMDVncEcfoLnpRiNM7HdAW4gKNTFjVXv2LpWtYpfBgL7yqRq5Yn8Dbc",
  "key15": "4JkCorb5FspMM1t2x4qSe4MHbpHjzV4pD28ju4gp9vSTwQPYjYqrCxafEFXHkxMBYQ3vWyB39A1ct9uGuU1LQwme",
  "key16": "477sT4X3gLYJcp9SRfUDC7kRAYx3ghixEwa1KXPJ1sDLuETwY4jTyqQm4NY34WYuqsMNoFW6tEGJiUNXvUAdubNa",
  "key17": "2XZxGRJ7MsNBd2236aEtg1bQt4oDpjPbyEGJai2mErLdsYzPG3MQ3UHo1y6zbu3aKPNJskXNzXKi9i5V93abKfsz",
  "key18": "bquDExmkNHKdfB6Gm22KAC6ndJvvcSYQ3jKWgDVetvoXsJ7W1vFNenmX955zM9aqEBp6Y71FTZ6HQFmdXPp9gQK",
  "key19": "2bY86jh7bT7djgE4ekRjvjtGHSscTJhePB3JRz8Q1t1jggfRZpXnQY99Mtmaev2HBeCak357LEUBjgUMQubn82r1",
  "key20": "57cmnjALgNv2EB9RqqQQDJP9ih3am25hkFkCV2mpxbhQPKtLcn5KNDkZYBBXaewJwnDndex5u6YpWPUYePvXFqnE",
  "key21": "2daHRi86ENV9Kk4W6ZH5Q5uA4pmEV2bqXBbb3yXAG2nTNhGXf47fr3inS3KhrRJYwdKMvqqvqLGcmQWLabG1Yhfe",
  "key22": "4nqf7BuR5kmEngPHGmyUoahBNML1KJzug3SCTHe1exoCb1NvPgbnGpfcPX9Nyrp68ACm2x4bcC6Za3HL3Grwav7e",
  "key23": "5tJopsCR3MjQY6n4upTtAqYcjMgcKpntTzwBhxmLxesvHr5t1oYQ69yM35x3Ph7mP1Yzo9ddR5ws3ACpWyKSgHGw",
  "key24": "4z31DfKYuMHbZiL352ZT8qLrBndWkc9jZ9p7c2j2YHUuFsV7KfgqmBe1BsKQgpUUN4FBtZHQ7ZJsWnvUkrsoRviy",
  "key25": "2wcgiYdjRvtRSevcS7rMovpxQoeDPaCyhsmrFxN7UaGBJjsKjMgZzoDT25v7mytu8jg6htBVZpUynNBNSce7uzLM",
  "key26": "3hxfkYncQPctZmmpV2QnR5eTgTuBJExenpA6McGM1S63nFakBNY3yXTte1rVeRV1UgzFfEniixxUKRvakYXFMMsY",
  "key27": "2rZ1rmgDnjgsWp6Q5TR6CiZD2nga9cuQ1DEfn8kTZGiSVGvqemo9T3GpnxBVGQWvMERWennCzte7eZBPkpmvfZxW",
  "key28": "5q87AvPfUyWDX2u3HbTde2oLveTk7nsUqs7qD5WiuCXy7dgYCMq2sT9ooa7M71pS4jyhupZ11ds9taL2vwoYEgZb",
  "key29": "4Ysd9PPganH7AVmnbYesKDJfJFr33sCNwaoEUHKR58aYMyiJACu9fUyMzhSPkurkJ79qDeNZPDWNRzsQbqV1K5kn",
  "key30": "3f9ZJrgmQK4yC13wFQDW2UH2VSUzpsN3vEDNKmFVKECGYdCFdKDMGznycqjWzGPgHrCPkgZozyoA6xgVZxHMsqPn",
  "key31": "3tdkbjie8etMAfQQxX4HFs9TLGFssULwsDDyYonHDXd9ynL115cvKuv1dFAqqim39eASdrLwJgD1KrsFwEnza9GK",
  "key32": "3SGqkWrCTrzKTzpchB5GcHR7wyVWLQWW8Hn1hzSbyd8wB1pJ73URXJLeqQH1cs1Pn97fCKNoXBgcm5JaFgAhdiQn",
  "key33": "2hD49kd6zjwrK3VXMZbkfXz7zVr3Xvju1BJMuTUXrYd8VkzuKc9XpePUABis6FfoKeYizoRkq4wCd4bxZZHxB7Cs",
  "key34": "4qtEicrN2cLrrcypgKvcHk3BypbwgJBAPRtYA4gXDo8yAkgxE1yPHuRoU3P62vPJnRSk7bRnJrC5Xr6Au8rLDwta",
  "key35": "24HM6Kxo79p41W4QbkyQBiXc6Qdk9ta6B52TAAdELCyZ1obQ8V8j5NqobLL6wVsT78ohqiFHt9SdQSedHtGxvGX5",
  "key36": "4X2qZCbeHWezPPb6DWjY9oBawPnBwT9FZHnNiD1Ty7MygVsz5s4Nbt8xgYQJi3aJYZ9nJdoFp1greZ196NNcx1ac",
  "key37": "5uyShdhmAWwEvJi3ukejBJwvyeoYfFE4FmAw4G74ku7wdTLkvRytKTYXUGzub41J3USwYXN8UvLZr3eDo2C5aAp3",
  "key38": "MNnkAF91cBbsJuxzAQQXyRJ9jqNqDRwsNjLN9UXcdwMeMG1FELiaMpxkfVgBuPCuWs4SYLgrRD6G9YRVnVdqM8F",
  "key39": "514V1deUd5x4baTo32FoKdaxCkhRrkH4ZnHWWJTfmApi1vwsEp53raP1CfAd6sJC8fiNFtypkddTLyvGB3fNUr9S",
  "key40": "2EY5gbX2p4zGXgqWmgw8J6sv5E8PgtPVsA2P6rP2nWbqw6hJSDPDXqDtTqWsMpHj2CbY1GnPcVKBosGJ725te1JS",
  "key41": "5r1fNGKCL7u7si45LsC9yVGEeWrRsXRfq6DFXSjnGF5CBVYpowZY1kR5Nwncfmjxug9s3hHwg8XCdHD19mgFKt9S",
  "key42": "2eSsAA3chHKZBvMjbMJrNYsMkEyKA4VC7GW56itfR2ajc6B9wyQSE5kTMwHo5bx8BpHvgoRFH382nM9fGX7gvsz1",
  "key43": "d1DTdfHPVpXnmCf5HBazg76pz7X9tZXuPQANjzqjuFkDFN5LJWGQ5Gqqfx7hhLdJ8GCdWtQ9DgAHMY2XguTu8PF",
  "key44": "4h8oLWa2CkztrMQhtkv3yaggsp78FdSDArG7GnEA73EPhjDbJp9Wxg51ae9kcCCtntRrERsxG4BRw48bsceeZak7",
  "key45": "2LaNLgn3U2M6jiZj1XBpSeAo1VfgXEbruoUD4bWQmGgDjT6R6LdijErrmgwveqyB22vLiLND3pdF3HQ2E1GyaBhf",
  "key46": "pqECytHHR1H5kq5idAW3ADVoLYx6dCNfEF4Jzcj1yNMCeCahxkbEDkqWDqfaVtYuaSYZBm4gKVS8RHR8U8SkexA"
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
