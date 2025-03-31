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
    "3noJcYcH5e3rbWPUqM6UPr83a5hMr3BYdmJa551NmN5YqhkhoqT28ZxCpRqXMLGPAwurwkgHAisCzWQcd2jYDbqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44s5G1XQfRxJAyk5NhTT7dT8mobetLj8UTuqSsMMiodxFz9rtmtG43ufLbUsFHyoWRRFTPfx419o9GMGsAzBzSH2",
  "key1": "61tjwV4j8rMSN715GYcGktU8XRcoFGASVTjLvCZQLnJTvGEkumgqoUs9jyoYampT4pq1KihWC4944KqsLDmR4ABX",
  "key2": "5t3LQT8jz4R67Rf6oYukHmB1v2Vfy9tp5jjrbenddVqJXu9jLcRw59DJ7dxnfuLcbdcg3qd953wk3gSSkNNxdZgp",
  "key3": "5xeoP5P9WdBZu9ZYSe4SbhCqNrwNvGgejjyBGPJaGQ8b62AtVh5xdRv5W1JDEL4Tq72aEucRt8jJ1cfiYz9HSg3M",
  "key4": "41FqBesoxxi8fwVJYBX8Vh3VULQyYaHrmcD6AZna6LKpxzeTFcGi2DxgDmjDJmuf5UUmXjtkv16M9F1KF3tJFoNu",
  "key5": "5Cv6y37C8Y8xw9ePzdCGA7es65fk9zr69f8yN2qEf8MHb6uBxTm9gosMr31WC313mqYfCE6uB31Tzk4dxjoUqd9v",
  "key6": "qKHKKxbNdb2Em9o5ezf1jvrXirE5bfQrv6MKnZ4j8FLdquBQooF4aZYnqTzuq94eK34KbKh87FNWczkDQeVAPB5",
  "key7": "42L5y8Waqi2uN4VcFPc4eppWWA7EmgAv8QvoNm6WfsyMEzHtE3VgsbKCUCTbDcxuLFw41nLyL1CGN5iXcFFcZTyB",
  "key8": "26xmP253vxJHejuKhLaJGodshVVSk1sNmstdHrVocLUbZkHvUwqcpp6XtgRidiL4J8gRUV6k9g1Jxqyek3STjrpD",
  "key9": "3bTP6kwxab34PGpkXVh5YT1zMiLicuZuJ9QgqsM3M4eR7ZfLwsz7J1ANCt3E96q7fePgRCSbVEtb4WCkniuwuVhU",
  "key10": "5kfiozWo34R7RooE8bz15F6pGCBPdYtyc3psUqqWguKVzou3ijRFWbmDi1ATYgobt8YdoRnbyrKRfmjKJMKLuKu3",
  "key11": "EggQMEzG1RmQtkQ4TMY2X9ZYebM7cVAG3PDbKVkiD99667WgeHi1JqPZFo9rrHx27KdKpg9MLP4wy7QHFcTpco2",
  "key12": "9WEeUt788Ejqd9BYe7BVMsW23n53uSXxsWvcfeda3AYiGFcyJpzbftF2YLcyRdAohEifG3Aoguuv7tdxL3pgReT",
  "key13": "48zs3BzUMzjYg6ExUVHKrB7pWWxzeSryqTuLUHPWnwhK8rEHJuaqDdo35vDg9YQeBZFvtPJhDc9vkDcevaVwDao2",
  "key14": "3Yx8EUQcv4fuV2YSDwGZXbkAeoQYg3VnLV3NWnH7DaDF6artMDV8fvbXSRAYbCyyCRfECxuk5SPZYzHpZ1B8PDmp",
  "key15": "4A9yx3biyyVoSbFw1mzoJAhRX3H2rXigJqd3yonbS3f4AaDEcLuCsPsjSPni83wJ3zDAKZb8fQ8VD96RegSKvwyf",
  "key16": "2bdnxbJVUh6sb2yBhXgSRMY9gXZWFdon5cECFcvPPSRsn5xCiZiYNK2vJ3FSDkk2AYNesWFNW1hxQiSh6Rxourpa",
  "key17": "3UpgdANLhpsrwX7BYtpmbWyixtVPk84jox7CYwz1Dsfh1dcwhXyzimuFbhLRZ8ZNt1hEX5rHjss9hxXGSfdyUwPV",
  "key18": "2RA5tki317KPpWkNp2Jruv8NmtLFmE3uQbuHGTgcAnpajkogvaUkFnawZ3Bfkvt9YisZSBM5PN1KGb9aBn4VTBcL",
  "key19": "5fM4WUX1mBFMUWkFZhcmPkF48PkFGkTPcikZcisiHLPhpgEQt9DmurPhee38tW2xrVCcmXDjtACBDNAWePcLo2MZ",
  "key20": "5D2cPF2xD567BeQ6vk6X2R6WFXKcz13WH6tscrfG7vQFR1ETs42ak9Y91f2S1EriN6aoX5zVuwvY4pSith5ciV3W",
  "key21": "bPNSANr8ZyKzTMJposJkavcs2VJPhexVrvv7PTGoMcKvos9bz22DPmcg9XDQwSWBfYzMxEPDJvwokXFTXsVKYpH",
  "key22": "5paXrmWWRpxjyvrCrpNh81NhtWHwmcqroQxkhhQtbQyv3KwDL1Q6Q4DDcLRtRNGhK7ENdvYsrFeHmTZR7B92Crkb",
  "key23": "45f8w33wLKuzzYSPyWAugRsjLtjSpjzzDG5gjLDQfGDoNJYpyiM6tfefPcd1FUn9vya6edyDWoHtfF6QfJE7WxMV",
  "key24": "4tu8VKCZcpK3r7rBfR5UuxD6iuqMaasdEBdZ3Ko4cc8GrG1KApACaCxiLK98p36idu74q88nTBnLn92qPBtsyoiZ",
  "key25": "2dg7kwiuDc6LPd7vkVrGwVjts9tq5AsMc4xCEJ1hARariNuia6PVp2tMRQDb3SDxDn3tUvGb2FVYpkX9qgmx61Kn",
  "key26": "4pYaKkTno2Tcv4chvmBiMDESrrTHG55GTo2r73EXY1MrBVFRnDqwvENG4aEUX5kjaEWG1oLDVKPxQ86PVK2Ypg5M",
  "key27": "2y1SqM5M5w5ZHVi7ogQouCNMKb1qrjiKAUabqPP1EMnPdwG9GjFgUxM58UNVeTGTcFYBYNriDMPdr3sJB4GYSpRZ",
  "key28": "2vxLLBmKYXyBFpRzXkot7kNjqX7dwxQm6ys91nJHbK7Jv1boZxBcmSZ7r7T4o8VLWDjzfdom7NJPHWsCfSBXbgNX",
  "key29": "5NH1AhRXmWts1zFGE332nTjFBQYYL6N9rJ6PwuzhfNtYbj8EUpFSVAfvjTtNUbpZmaoNcdvb7ujhPWwb8dEzz4Fu",
  "key30": "22RtRVWKsnLw7qdKH3RZHJC4cto6m2NPFVNqMXc55StohsMeWeB9EGhSPUqt5vUVk56X2HSsNLoFEsrPcsXYvegw",
  "key31": "2WHdvYj9TNv6aLkNxo8f8rzuGXcNvBF9wNcMXCpvWteR1235Am1dUBzjnz4WT456rwQqszaKXZMV8cMqExCkuEQQ",
  "key32": "d3V6yiRta2qk3x5fNHJSC61JKp2eiHpwKrgs5qDbVr3mgdahJ9QJtnaKgzHZSTsUyNGihpgC9NrMBmR2bHvbMRV",
  "key33": "3te4ceUea2DXH6EPLJNmXsnLtHuooTxfcXBeE35AqrF6VuCuqGdVpFXgykHcdQQXSyGSqevBihMomJWwDR1nmttz",
  "key34": "3UdMLG58tPJFLuMXMmxKrkvRhJDNvLiX8UHTyaKVSMMTkmoEHgPSHsm5T2WeJN6x42b1eogMf3nHsYtt3sh3bybj",
  "key35": "4chUVZVcXCs26fDHpyUFa6S5QAJxsFWn6XDeizwyfZ8USxFkxB5K57aw44Rj8eaVynfb8PaUfSZmsUP8jRzsbRsi",
  "key36": "4Zn27iaUkHmYUxsDesxFh1kjkpCPLVPi9uh6srcuXyzQ6s2eVFxYT2cLKQW3ADLjB59FEJLQW7VJQ75oENP9ZNxh",
  "key37": "59Zgpb8W7dfMqREdVfaoDYygHXL5CvV39CTDjf3ezCtxApmUsAboFasvHjU5NLGSYNez74K4UUCwQS1Nd48gBCaj"
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
