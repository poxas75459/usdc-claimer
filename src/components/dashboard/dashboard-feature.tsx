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
    "KY8ksXg2DtgxNnvMW1hFxRHVruA6mnR9uHeGtB3qTBntfEEqSF2w47Mi5Qqsgj46VZmpaFRuczKtmkzDx1GzJZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yY688ZauTWNY4JzfpJGWiXRqZsiu9ocAtimrTkbtZsHwMv86T8kPL6vYM54ppCiaEhGbxhMxaPzkiXZrWuKzcKr",
  "key1": "3cojgqxBuo31ZjvfUXKt9BhJ2AjX7Eemavkz6bMTr2eq8MoG9B1sfn44kdun1iczKDsNNFpJSeeMGKYvXj4hJw84",
  "key2": "JGEWDet9o7ZxHYLmUM4theFE458gbBHE6KLA6YnkvPRXyGp38KjeMLxMfMbDTFcdDwPTS6h5t2BRJEjJtJtkgzR",
  "key3": "38TCzgB7ukt3reveaNiTy2qvTbzGb6PyEgMtn1id38xjnqLvkJbd8nUMgcPzYk3TSzoqXcq1wa12oNHySvaCJp5d",
  "key4": "8hGNJPeHwNq3PmERrFmoMXDQcdcVxYb2Ass7tBwbLWZokx5iEPbvfEzHfP6eBJw1MZG5sn3ANtBcpPSE1G8WzxG",
  "key5": "2hU7nivvEmshTkZU35qawwKjzR16D3eK6CkuieKqis4GQhJ473y98BNeZoQN63UEHZt9PHxNbt6j7RupfNKXYEzW",
  "key6": "1odAXxr4Xi9cTj94nsTanwUb5WwakThbb4Z7sWMQubvn3EYLd7m8RYaGb2mv8Z6LUhjoA4RL6U4JaWY41W6MJj1",
  "key7": "4pcR98ufwmh83hqBXhkxuFkhWE1jhLLRxCMT2bv2JmpcXGkpB4g5hv92DAJqypePe8XxghRuTmbN9HBBqAgw8wca",
  "key8": "4AcbSQrP3p4JqwymuxZMPHAbTPnatzriMyfPv9iqZnZdfVbJZj8aB2bsqkvWsukr7JghtxK7aDLirJDzRCNFgCu",
  "key9": "47AkJqCMsWcFCzRvBuSfcimrFhpnefNL13wWo6mWYSVEiBCzupjx5YVvTFVtSDBgyJSAv5C7dyPMvSTd6CrbmcoX",
  "key10": "27bxTWjFS5s6pfR3btxYQ1iz7t1n8ETw89is9RtyVaNz5QKNTqkYJRe5p15FuWT3gP7TALZrRJ8LkS16cTfbYYft",
  "key11": "5rCngpfCHevSY5ifV8ce3U46whEfaASG18pRnRzWAhLQoA1aupXAB3RRzKRxSrAb8CMQ85ypzoeCG465C9mJbmfn",
  "key12": "4ndqDPg5bCT6oBmbzrscC1SKqiT49vMn42Ko1DLBAkWgetPT5k4M6pFtweBoGmjmJCuq1RaWGi1BDsxhz8dLHhAH",
  "key13": "3dpSpqu7raEYKYr7fJHjUzjFSfAicB5wxXkqQJkwcrTG26ZhNgKQ8E3AKt2p2PnKVPHsUEWj19ybkXeQpm3s9drV",
  "key14": "4vwwMA8LhLdF2Vdpx47JWhEzSM5A8gd48s9r5SVxzRwBHxvQ5RD5bftayRWDgECiYrvuekyHnkooy6L8ovpTF5Kb",
  "key15": "4dGCDHRe18j5uVu7woR8NLAGEuHe8McE3Ko8EohVoALLogi32wCxu45QbKDKAtaNaEwfF5EGxDBfehcwF4xoZnUS",
  "key16": "4Bbx75ErdYY77kLnSgT9i8CKpGufgniye8GJ6NXhsTS3WivJG2guzQqyhF21ftWrsLw7d1ccAkKQXARTpk3ib9cw",
  "key17": "4EXciqaoZ1G2pkktLLZP7VoSG134cT67RF2aT4m9nuSKV8Cj7vHnn7QjehjL1xgJ9cjJrepvPP2ok713uFtFerN1",
  "key18": "34Djij7zBGnTVptUFiqRwLYsDvdcd2jpNwWg1aHmqJ7H91u2goSFFJajM5QsSjtx6kpPWhSwgQ3nkUeoGveCmaja",
  "key19": "3xUH4zzCPvqkrffoBxxisWAMmgidsREC8jzjpC2KuAdw4EvS151HfW321qLnAG5Ryr88RjFhgyjcJj277m3MW5Mq",
  "key20": "CynqMdA96S7hPBiWj7r2PJwAoaX7BgGKrkH7KpNJ4xCCjpmPoVuDDcJqzGHbJULdvpj9Qpov7aActAAuYth4BUn",
  "key21": "37ib1wJoJLSpAtsVNeYhixNAvmSyWYvDf5SmY34HsE5RL5dCY6VLWyW84J7WPQaD1br9cBhkLexMoTzcykzuvmS",
  "key22": "5LuPDjYGBvSRcfBrnpjG89L4Uxo1WTBKM8N3apkry6XgwArME8zExsw44NU3KYRzG6m5TXCvFkbk1HLGmY6S28UP",
  "key23": "55oj1UNCoMTiHnVmSMrsR8niCEU7WXD9hbrJEdkrzSQvufY4QfDNSPxPvEftaA3LVDbti7xPgHBw4AW56jthGgc7",
  "key24": "s9n2bXwUPj1Ynrh4cBUsorFemWC6xQYzpus3UMkhgzE17VkKW9Ho13AJQjwxrH9bw7Ekh19B5vd3Chcwzqwh1Ly",
  "key25": "5GWwxr52htTDACiUkJvT15DnmTGNeKgzXnUDZ4UbHiswoKFkqxDoNwtKp7Xm19F5kvkHKDB7th7cQQDcP1dm3Q6t",
  "key26": "2Aux8jNPdoPXL16cVab9u5nGBMRVRDrpCRUiPxQMF7ojPWHowb5T2hQ2DZK2AzvhzFBKgXxseqJWiiT87afMQMzZ",
  "key27": "45uCFm8YSjrB3Mk4tUjcCWw44EGkDQMAX9JtiNyT7Mbi7WsbBvq6nZ22duykFnyiSws6yAejT4Gn7RsvbcWEdLy1",
  "key28": "mGzrKYE49EK9aTf2jL57z64SyNx697kPSL6fzA87gM5zhXjfPJZ2GGna4tr6gRG1sRvo4ts6YfzfwgMi3ApdxV4",
  "key29": "XjJELkH78zJ2YqApmg7RzMABQz1wKHScXgpsmvQ9iZCzA1JXX9RvDS2uo1a6tQoyaKEj58ijWEzqRe8BnpjrfZ3",
  "key30": "3ngHYAGYJCQRMFvCrffQTaZEP8ei5nge5w1fj8u3FV8f5mTPFrnwLJjdwMpFeUWGQaTYZx7bYwPTe8b93s4qAbJm",
  "key31": "3aTPNbkqp4FSjAJpXpC1j1fm7gY1MPBkMzAPMaZBSfpzHgASQbAvkdeUwA359TBhy5MumPGvxh9PchCchLfQoM2b",
  "key32": "Swwx1uhLNv3mH3cUMD3fF1smaS7kvv5uWHEGv3bjyXx83SZzW8UntNk7H7A8gCU2fhZY4ULdMY7oiuenHeR2Fox",
  "key33": "733TZnzk5ZnN3MKmxfJs13YVUvs87ZBt4cFEjpdoPPYs1wUaY841FvkKAb6hyFFYnW8r71yPhi1LNwk7pbptaQS",
  "key34": "3SRxgsWAxYXdQJjH8NFviH3qJ5jD8DpxuhqpaW8ErwRiripxon1yBit9svA7eMWxwN6iAhgYR3T718wP5znLDrj7",
  "key35": "5JnmZKLBHHUNzurrP58fVrqRh3Rzf7pKedETEMWBe6NPoSgwEykGaCHXSsJqQVBaph36orSnGiT5SfRpikYyF6dy",
  "key36": "4WTA3362wcNPTkVqcLYN7jrMJxAF35JXYqbmVo28SoJTTj2zUsS5ZYWhfSnXcuEBuC5NSd8kDgQhs595eC4fAM6n",
  "key37": "2zQVQoJxzmxVKHhVbnhyQ1YbWZwabfD7sA4MPUQ3xocisSJdFV7PTPWut8ZPorN9LVtw4NDxcDwEhvtE2Edk2ZKY",
  "key38": "3sK1skNWCWB16Q8foaBp2iTmhZ6CChRDupHQevKXXmmZH7Zr9kHtjyuhpAR4M91nk9mB4bDQJoF4WMLWDjNYUp51",
  "key39": "5b8y7H87EWHX89CPRi7B5PBt6D6xMHNeeTa9M3AaYqn6mQ1wj7eXNAgaMgyE8qizVpgsRtRXq7JNAURfJLkagcsg"
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
