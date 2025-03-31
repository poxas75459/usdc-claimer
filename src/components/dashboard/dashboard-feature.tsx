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
    "331WNRN5RPD954PmxQpcroTjBnukLr2pwfa72CtJodDi6ksNiqZfLp51CYV3wtyTwutUnhnDrrPuSdUCPQdiiFtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZrBLYq68XhXPdhSEmW6RQfrHRiakzSkR5ZG58zgPEx7XX97EBZVRndK2MJFvxjEHVpgGiYCoxU79eo9TNPdtniR",
  "key1": "uWhmsRGfQasX8BVwaB662tNyhFtKSiD9UYW3RDfyUYYbcmXfakLR5CxGS8LiNnNSLTh4kC9fcvGceTHhden7eRo",
  "key2": "62jwL8sV3m1RZ2XoeWYjtqy3MW2aGgwbzzxdA9sn83sMbi4qGB2DZEHFGB37DQG3UXnTSLocgj28miaaWzxFE1U2",
  "key3": "5nc5GBFmVBgSby3NQ3WRuK18sWg8eRwqfQCkVjBWbM6XLEAQVKyPzNcT2fV4EZnBUkTfjsceG9HYR4BaqQ7rLRms",
  "key4": "3Erw15DEkMpaq6UEPkqNBsHwxkF86TCdiM7HoSdwoRUcqxsPvvuGFAGKt7jq14GvGK16ptGhc6E7irME153ptnTD",
  "key5": "3Q5DrfLDQRPwfkd1DZ5ZcaxqcJQg46yGBRvWGYbLZDCaoRKvV1aRTBYFG8r6EKzBD6a17yhSsuPBxrde8F6Z4YxK",
  "key6": "meArmkrKSsjcoACChnn15Bxu98SsKaQ8XeQF6x4DysCC5qdsyJLdpJhoMVBhUnJrnWEyF6KMe39d5ADirGZBevW",
  "key7": "32dpZyfsZaEeGhooX7N6ey5FReBunGHpQzF3SCR7zYb4c1MHKZQZRXziDJMhErA8NG46NrgzKLiEmK2gTWUca6SR",
  "key8": "JCrrTvKKyrHBbdTkEVrptCGwo5SGVu7wA96ZZoKBR3p1NYtTqdGKenrFZWLxFmp9ukSxesHEAkacy1obn2Y3g5h",
  "key9": "S8fjzeDDAuGjTEoPgVrF3L6pxYNkVTBC2gRUD8paVT4rrSexYnQYQ5g5rgWC2jrUGzQKb43UVFP8g9rawxnjCgC",
  "key10": "5K9c6CrFLECzRDgozABR5AnHyE2SVDbx7fmN6YPwwsSPJta5YnhebPAUQLWYkBbiTiAcK5s65MZ4mrT5EAi9mv3x",
  "key11": "5DFgRnfVi4ddU3abcXyKQsQp7DJ4tK18qp3umCpLhXt3r1RmdxaU8PqeCHvSLJTUQafduRG1hwxmMiUZgRCs75MY",
  "key12": "4uBq23NAHfg67VkqypQAcp1o5pYgYDww5bbcaksTiZHC9HcjS2wzLWTQ4tMrqdKbHHYDBKmCXtag9j28tWHqPzv3",
  "key13": "2fR1QepkrWc5svxzuijRAepYFxVcerm22T1rASFjo9wgFXEPH6hhoskEHFuDbqvMUWfpKRzWymaWanwjZ5pSd1Yd",
  "key14": "5QvVpFUxeoUtsGB3LN1DV4H9Zqurwp3D2yY8BEhnXW8GGgs5acpR3sPRJqs9SYsUzJTTB8wuoKXhEKaHnUVWkJcB",
  "key15": "2UuNtj1FWZqM1Ams3BbgTT3cD8LutaDRZkPdCj5Gyvojuugs1fBJa8EwY4ZJQNWb7f9UQZYpA1LGXjm4zk5QPVJS",
  "key16": "5ZygKbzgSxsRQP6HMx6or81GJZct8UpR9BViUmCo644rxV98hFioe2XV5MPmVSHcDaZ4LFZxAZfh8qw1aeonvndp",
  "key17": "L1Cf3NWvKFW8B7La1vPuEKrVJnVAynKB4y4mDBqVpM4hfsF8thhuXDNwvRrz6MmhtqDstNL39sYzn2aNTnovWSr",
  "key18": "p52tetE59SsCYXAohExKbWZ3rzzmgMWCp7z1nXyBMXnthgbtBuNEhd2nNhanFkghZeF6sqL3YSwYTx1GF1D4srH",
  "key19": "3T5hdoaWXMmMa2NVhmLHjbuRorVoeHTwerzpvA6nHEYJnPRh1Xvng2yzWqCmuq6yiFunW7H36ATRWiq4W5Hwj6KT",
  "key20": "Y8Cg4VrEMVK6L7CJWJ97z2Lsxw6ByccziZWSnppybUoBuMXSqoovrrBLYNVQTXYjFzaoGrQuKEJPAZEuCjGRm9s",
  "key21": "262o8rYqCK72RzLBvL6o6ycY6jayw7aCanLeTri4seqmMCzkyQpGJvrGdWrqPqRD9eQd9J8QVwAdJ6VhfyFNs6QS",
  "key22": "56m3Q4BfV9JnFpYcjzW8ck6ggzbSad8UXuZxCGmHcSDzA5ENMMbz5Ge3cEKAJrqsD4FdfGWK311VFQzRkRTiisQU",
  "key23": "4DwMYMAyZA5pMZ3EMkMBpX7ZE2LHYkt13YPYLusSXKTuPQuqrnFTBV1c5RMWXwNPrGmaA2nDNd5uxtxuf4fNZP3T",
  "key24": "3HwvJfuFUNDbdMRcJ7Lh3Rusya6kXkZbBLMyPrELxttzwy7y9ikXTkLE7k23udWLsCXz2neTb4jDWNViwNoSAd6E",
  "key25": "5NKT1UmWNrtWwKM5yemeg8bVNHoNvB8fXjZopdq4qB5rkLMhXNuaZjUNBHhjcYKayxpQ9qBJwqidN4B9BjeSze7Q",
  "key26": "5efw6km736KzyT42pSDgpmmyRA6nU27jwpMm1AwKNrQDbW8ywcXNkZ15xUXofcBERbAVVh79irxHAcGRrxwzrLdc",
  "key27": "47ZkKr2QhEgdp3QFM3hqW7hppe5qXBhaJoxHziceBLhrrLhrdv6H9g7KBnNe921LVWXbYAypBPapxwv2xVP1AeW8",
  "key28": "41nLMcZAHcKtuKPbGqNQSL7VF423Bz3zipj1N56QuNpNqC3DHjpPuSHaD8q86ZeawxguXFfjBXKrunHjp47G2j26",
  "key29": "4fEbwPC5XNc3w2mvkTTqNH4P8zYYxTw6KLJnf2NL5tWXAyyr5hkVQ9AbL8gtecjtuG3b5DcuEUH9N4BMrvBJupkQ",
  "key30": "2mqunMS4Q1E9f9wMS5B7G9iApbJC2NFtwJcmkQ4wZUTc69FHnU5Xcacr8CLrpNTHkf4Uh9MLLqJvAWaYA81FJ6KG",
  "key31": "hRpgxVuevL8ExLHw3Xr5MqFAuWsMArAfFk4A9QnoAqKCg8CRNixi45ycCiEdjcEpmWM5UC1vwJqKsWtFvekc4Xx",
  "key32": "2QH2rzozsw2xtCtLd3TeFH1C3o6dFx3yy2i3Zq6S5xNTiQC2jva191SFyNNAHqyurfJ4SVsnbzH2z5yxPEsb67xa",
  "key33": "4S1qW2qHTQnLrqfJorLhg563RvUZ3WQEQLVwwpSPkZXSviBK1fLCoT8dxkweBCivCfjfgnxcsY9L8SBKDJCAexJX",
  "key34": "4YMAABE33skszv5xm9NaS1KLwUaU8BgA5ZHcCPTUNNmtbCi3zAPZ8BhHP4hZKvS5iaQrG7tMhjv1pGaGmPoq3ayd",
  "key35": "5xNEjjDP1BsQSuk2YqWBFoUx8YRDnmhCKZ9PXy1yJCDwCY4M1vtxs1VqSnPqgrAJubNoqGLu5V1gfsvRkZfWY67U",
  "key36": "2XC6yMrzEhsnNUQskuLyQ6rmev1tzKRYFrkoHHAZhgebdyjmv87A7fpPrhfg5CEph3YbWu23ALikHPWZFFjriigB",
  "key37": "3d6TyXAmBuuH6V1qaYLKyzqzbm3k4Nqved99zepGLz9gR9w8yiwokECqYxi9b2hcJCiDubRazQmAk3ARWZi9bPmM",
  "key38": "4GmZk4LBz1AkUPpPGkQewFKnwvd2obT4ScS7h9XoNf8gwUe5h8cCjjkKWJaF9USV6i9uynT6ck3nPBrGED2ujDFP",
  "key39": "jLv9EVDvPnTF7Xwqdze6Jr2bNiQH3bGg5aerLu1GZ7YhZhLQbWnKFjwuwjGcx4nPbeXLnxHMz1VpzdfRcz7amhV",
  "key40": "2LgVX1PfQy8J9P1mCJ3fADtipqTR3gZfSyuFeLcdBBYQTGN92K42Y7W6KE3nFaDGvenHu7NoMrtsisBapGVcdTvK",
  "key41": "HpMP77NP8UbMVjBgkToWm74pdzQQNHLafbzKTLLM9UBaccB5yG9AMrmYveW5eFt4YXpGazpCCkJ8FJsw6jr5xRU",
  "key42": "4ZeXNcEHMq1CVHCpHQEBYuxKdcW8Y5dKKjDSLgSnhPTwDYj2t4HsxZR4oPRRgVaVDTxyUkA7GULEgiu8TNS5L3VM",
  "key43": "5164kYWC629SVqqwcz9HAeMXhv65WNUm4togig5NfUxBFh6NXrXtFHjnMJqhHMbPp73JPYti1zJ8xvUNs6XFULMJ",
  "key44": "4zFPjoit4s26iGSxncr2Sk7ZdrGkNLPx7mkALb4G8N3dJSfmMBQ6agtgLyxQzTRAKfD8NSXhBWcQWwu6p8azD5F7"
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
