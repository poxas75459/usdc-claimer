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
    "2o64cmXbuSje5dBurUCiTec4nZa9BUnkZ497BeGXW7CJmekquQzXxFkYcEtdVWaANpy8bgGiuXjXVvsvhit7zaNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oJvbLM6BBcWt3QidTCbKDdxFnJcmZt19FL2bGQTjBeJGVygifadBi1sh32zYFh78YkfW4qgCPSFm5kQRnvGbmFs",
  "key1": "5meiiZKm4NpsWyK7ayPcTAY7KrSFUrXLEoxNKznZVoSvnqEeC4LaouktdUUKVweR9EieQ6h9YQpVCngRYcTDiRqA",
  "key2": "55CZ5ps9RKXW2xxiVaP46KZERWo2KVVYxc3eBUPvruhqJSVNnHB6aaWRDxXmE1jitwzBxQ6iJifJjc2RvYB3PH1s",
  "key3": "4C4BZr69LweHUp8bYhqaTgYxDqRS8BqQXrtvoq3izHAVVwVXqYDDXm7q8AhKzGyve1Ts7kCyhTEtPJ3A6HxuoDbK",
  "key4": "61JQkLzUu2crUphMB7wBFZZoLMEE1Emzywrw22EYc8simEQSkGJNqw5fqBbSaRg8EY9BHazBZ3xUTh6MRjwDnPjV",
  "key5": "4CSQkm5g7sMWkFCfU1pHuY9SajzF32ZR486wVyckyeSJx6JMJHFqe4XyUT5Hjpduw5NygRuuY7yNzwLocyaNQedv",
  "key6": "4NhEhDdcA6gSr52ch6PQ53wjdnuwXqGYhdzrAVckW4fdtrjsenWz8skFpduei7RP156tkeBC1VTteU32G8YxEP6J",
  "key7": "4nBkwrDSkXqC4b3e6wVFoi9JLswfCjRgg6KoXvyChJuY3yZPiS6u85YRP4ZVUPmUg3kM7zBi7uah4qKkxD5ZygRa",
  "key8": "38A8CGdg9uBZL8PkgDSwYLFpRafm6ksQ8czKF1gBH6yJXNCAvt7nHh8Shf17QxZAdXxdnLExgHnMedBXM98uesA1",
  "key9": "5MfugCxWJdWF18YHqNwxwcgcDkgc5Xi86yPybSn4jeJ3HNuUxNKTmsW5a3Gg5BZK4nEzLzPEJJukMufiUHN1eY8c",
  "key10": "4q6XEEbUgsE6V8xicBJJBVvcgZ7DkzUStJPDzwezrVk9UmcCZHEFuFTan5nsGoEsGi9CLMGSkKsjecGafvS1BsJh",
  "key11": "32EjiFutuwq8FZLXPoi4dbjUrNR4Y9FpMAyQE18Sqm63JBMAnaQR4HQorgBWvGEo1hk7EiAdAYYGg9wuKB5eQD9g",
  "key12": "3NYnoUW3KyAY5okNU92FGyc1ohJuBnjSh8GicUxKvs1fV3zdqfhQpPYNtwjbDckWBCszU1jaHNF77h7or83do57v",
  "key13": "3EHuvjiZ5RLhJHenFC7DK4t56B42N8E6MyRdjnEYdfbCHD4g5JrzMHjZYd3gNk3btDQiMuidEN6WowwGnJ4Q3y7t",
  "key14": "zHAXLSnwUghP6373pfNR9ra8LKejFCL8TddrzojM351VEaQuc1VYTAqKZYYRTzY32298i8G9whxE1dx81SwWfvE",
  "key15": "5Hv6pqy2xYerUCBVYqLHXWLmggsfYckjsVi9ghXRCLnbEs25Uk5tHsTCSCLg6b4LHYH2tjQBnzdRTsjYBGt7Pq3s",
  "key16": "4ykoGRzmXCEHYAikiYtyVCAqxcSCd94jbb9aQDyNSGpAgnDD7maHwqxQFPU61q9rypJK1kTtR2z1AUQMSapfJtP6",
  "key17": "5AxKYEw2EFYKqT8vzfrUbxSG8PhDcGc4TF9Wmm1UV9Zw1kjf2LszUU7g5dsfJ3A4dcqaNN5GoqSrYUG47vZ4WvMj",
  "key18": "4krE27AttvUJc35dcT4W832qAwYg1YV6AyNVF86Ar4pmqMHiUcGrxuyjBm4XjFaZSyzUiFgjvRVQC6WWpKtd3AB1",
  "key19": "5hN6961pQUSj5BypDburCP3AMdxw5JsaUFoLaBVJFrj4dPzdQya4YuhFd3PERqNCbiaUTUogTUYVQTBUUiKb7kQE",
  "key20": "4fxqywwvMbzXx2r6KPrKB7QCUJVQHWiCHWTFUM948Pn1xnQN4wL3fi24c6wMdVUEEmc9waeycKHnnofNViou7p1A",
  "key21": "28fe9ewSaLZeUBETK7gX4morTX95C4x66CWDfV3ongLYsAyDLoxtpWt2UPztLkfpGe21doXWZT2gRAphVH4GbmGh",
  "key22": "3mtGmd5jLcpXv4vjMfuVkXSn9jUt88fuB2CYcVsqyinyjEFf8KG2gJRtR5LWfT8w5niavobBqN69vdq8edSUhyrF",
  "key23": "4yfdB4QqxHpBW5Emwcn6roRs9SYot2uNC1j6cztPHgKmUA24UznPhMHnAPXMBWJt1S8t74mpzkRTsQaBw5syowDo",
  "key24": "16aXhrLNmEtpmJrgGq2d9ugCC6WZBHxkia7xW8Qk6YWBGxgfsNhoDmpqWf87hJuYcdcig3ynK5nWG51sUM6UZWC",
  "key25": "5TPAje1G42Kqi47ZiA9ZSsDtQECwbQSmcuNSggCK3pkRgCqXFB6C2bZajqfUQYGK3seEfQH2VdSdkXoU13fPkXmN",
  "key26": "2Z4NwVTwwMqMMq4f9r9EQpcLogWqPBG8QY1WCh2EYrKrK5bqnM3k2DEWZE95UVCmkc9dat1eKx2FauFME15cyFvL",
  "key27": "4isVTiKE3YworxLHoTuuLyeqNpgkfiMJXqBSCavcf1oehgwE6155xzZgdHmKmKw68vUH6JCV8rEj7nfGQcBEU5Ty",
  "key28": "28oMvhDWrtKQqTt9g5D453oDnD9AJymmR5tPDMWB64bbhN4mc2MN5qsBPcAgKB4QPBkZBiXVgtYTXDDaYfmUFhMC",
  "key29": "4edzQ1DVBbuAkSpxRRAaJTiwqGKnw9bmPydbjztqasNLY5WmHYAwrojMUYpULZTe1Bu2x3d1aUHX2y8MF4jNWtFq",
  "key30": "5Db7XepmieKVsy9QEikYwW7HnVwajuLvnvqXtW9jZai3qEHbM34cpiWPWWGMdZYRsZEdndL4M4DEXS5TPSCnun4Z",
  "key31": "rZ7n4TEUUiUgpGv6LZHu4roJPQwGnQUAMGftkeUTe98m1RHYJ1cBxA2QUZ3x9Y7dsAZALYTec51zrgYdtfLfyLJ",
  "key32": "2XNctSABSxmZSgyUMskWLRaHd5GwdqUgqeUvbBbMUGdf478Zih9ZFvXS9RtsY7UHPojymvBP8ufXe4jqsfAQwnLB",
  "key33": "7CddGpQ111e8zW2EsPEisEH1PtEyWyouiXuFbrekHJ1raZcELGCAnoaduMF32bR47iT6n6rKwvW5qpxBwYoL3u3",
  "key34": "nTMwX8CB3amf5XKBfQ9mLCWSa2WCDNsU9g4qyMquzVLQYrEDgdo5v9sECFKvzHqoNzCTj3gj59tSctCCpzpNyTR",
  "key35": "qdWb7fHHxgK8R6LSjznjP6YRzd6ypRy6qMpDdT2k6odsBLKQpCThB6zwP9v55CXmD2NVWNBx3M1eqo7oEDBW5av",
  "key36": "3TecrnNKyc7T1SkkANYubVtR3Mijj14j6azzxVv2QPnySJ6dZrgWGpLjkf9wW6uSVgqhgBHUaBDzpvHBsDHY4GPf",
  "key37": "4EfsrJv4m6dVUA9tKEz4ydd8BCzXfbuTDX58QTThjW7mm81K5VsS6uqFBs5c9Ea9vV3PMVEUXMfWnmtVZkeS6L6V",
  "key38": "5pDLwnSphq8dQhiXUMuoiHe4EgiyDa1EaCNABkdoaQUbQ9CgpB61u2YRSkhbTUDcCmZUxRrN7dnTByQmnmiKHhNa",
  "key39": "5EGA2QxwrRrC8LbN7CFFtjCnwB5P12TUTHEi6otrAEMJCN4g28Wo3zkL7kMDTYyzXfpuqDUccDXNhZFRiwfufP7H",
  "key40": "3d5jF6m3673UefagSnRrW3Q239SnuzT7BVTcdseKuxSr17TdjGEix8suBbXuhhZaEbxU612RyjNaXLNM3UEMdyvM"
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
