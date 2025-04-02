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
    "5Wai2LukwYHbtqVsckJZXDTkF9X594Ea5P1yVPR3ZxC2V6SWyGsbkNx4d8vu3A6wmK8a8JwGLigHmtw4kdUPNudZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JC8UJ1DR8P8NxMcQYh6wH7S2GxodYf1pBpoh6g8FxCvbjL3mVUE4DEzVEgPLxktDnrP2nDyeGJ58EXBbwnBEV2e",
  "key1": "an3aFV8TTxGeW95T72EqDdftXP4B7cyo2BBDoqsu374HAR65BrrSsfQppVZd3G2E8tMUcgZ1cuVv2sSA4JDK2jm",
  "key2": "5mygdGVgYRnUhokkHrh1qy5aknju4Efwj9mg8pKzhiGF87wojySjbpAnjX733N7UgpdnPLkeSDtBXhNeW5x6FB2L",
  "key3": "5cVrgbTnd4DadwDwxv5ASWSMQHyEwXUbhpGbpCsMbX1cccjX6PtVaUrS88nxePhK8Kbiug5BPHe9XqXP43D9xrdN",
  "key4": "5oQ6StftAHkwhfTjHyzRUWgc8ECzaQr2wTSrgEPLUBYEUhkJoVw4GhdXVzmv4wdKod8Quno8Xc6tGQYDvYoyjhZ3",
  "key5": "45MKXYDXWVNaEDJ79AsfVYHt1AgNUVXv2xivjX714xU3mY9tAcSogCYzzxMTVWfGqD72GTwLx5wATY427pTwN5HD",
  "key6": "2VcDk2nJcFan3Q4UL9z6KC5svj55kTX8vBeAEBCVARVgWLKWNSiDNuQ2UVmsverFw2SJYeCeKtaSkdQth3ASacdf",
  "key7": "5pGxTS3EMvVwZ8tFCy78kez1yzVGfJDueQtmrxri3XcoAFhjeGEwSUF1Ssc3zTnpyRjc7odxmHA3QB6MW9MD1Shg",
  "key8": "41yJ4RV7rAuwxFSL1THWpt2hgdV5DE5CehkJGFTkWDmosBbfeewERTua73nfNBMe79YVTupqHVMS8puaGhRjzauW",
  "key9": "2j4JS7kAgsj5Y9mZ1r5nYxKfCQiTmirAjAVLqpf41tpgCpjQvokegW27SC9Q2WSyQmJapNth4CMgTc7wDBJv4q5k",
  "key10": "3QDAj94tfLqAXvZFR6ESdDSXjffmq7PRpF3hVW7hCorU86nHEukJLxpd1SdUVnZvnQER5nVfqZewNvtNR8rhkwHL",
  "key11": "2aGUjtFnx6zGMMEUiDJ7GbuTsTLxcAns5chQKYNRJNZT4SehLXuTFeAsumwqsngdJBewKQrDgCA5DnMxXbKSj4UE",
  "key12": "3hXR73NCE83pscinWUkXkRnReC8xAjGvVt9oeFAryG8XvUNPreYfW4k31dp2qMnQY8aj4ibs4k9Mrcwi6gKcw5kh",
  "key13": "2zZMGKWrDvpSUp1g8MiFHkDZXm1Urih1RK9Rg6RUmWSWgvchjtqhgV3VezY815sP6X5h9sqjrYGFA4qbr5Newo1J",
  "key14": "5G3PTqPnT9i3yY6sb9BkpbJUfi9AhYqSdBJsvRsi4Q6HL4Ezs1DVnwfYBQya4NnzSYpXY32mAnETvrm3X7X7L9PF",
  "key15": "2NQCehJyFAQV1w8YHFmLb1Z9k1aTh9L3kP8m4jvQX7yaXv5CtdjMTVi16EEpAJgEg2DH41LLG7qeEY45xz2eWptv",
  "key16": "4DtShdkoKSykERmXMhNLjh22JCsTVKWsrK8RvimbcTUAzDfuvte1wSByMKyoMYRDh52vogTBAfafZW1gSKfzMfTX",
  "key17": "P9FuQXtBn4JxAHKzYPPpPcqwTehho2XfK7729kWbSHbTNVYWxVq6Pt3VdZnPisj5f3UyFFF2adAaSdbQZGD348Q",
  "key18": "3VKji21dkX3G8u5num9nyt4hr8nkmpUHWSfj2taEPZZAKxXHRm3Tu9QJreorRhpe6KuHpKGMrJz78Nxs1BzgLaRZ",
  "key19": "63DMvKrgM3uttz8frG8uXTiwfWoDwW4aL3wdLjV36hxvxRJAa9EUtMfB7iiFb3iuCLaHrGmVZ51ediiY396rSEdL",
  "key20": "2K6bKq2WkKjgXY5kJiBz2KTPBMuxM21xmZWLUPoFbxpLuaMmP6H9pwmLtUzBADehD35feanoRjzxtJJMg3Zv8d5C",
  "key21": "3nX57TrKMuAzso4M75mS4oVF1A4kdb7eYHBNFUgomczTRpzUH2nDVQo7QWavv1QTQNet6JMgPBtuYHfpUWqwUYTi",
  "key22": "3ADuH8ZnaRLvegR7jpKf61bmHMENsBAWuuU2vfhKyqM3eF4Hqt43Aejzpt5twTyV8AbL96p1nhSN2f3RnTyRrwss",
  "key23": "3tagUU4BhgpULzCWWxQjZedh3wBqhKBKbhmBtptV2SZpUZPHymtRPC9hxeuTy89HCpP3CL2ipyg6bTA9ZcbkkiRN",
  "key24": "nz1Dfifx6R33NptYCV2Q8BdUvtAcWtXVUFxRGTBGTMxw1Kr2FCr4DkN7V8FVF54SaDXAtbo44dBkzuzA5ZuUbus",
  "key25": "2Ztbm4X1pd7tNY3BxhmhJqyry7nSAk6LgHy8CSwvnkbRGRvxNavh8PdFKZiedbzfK76S3sg7cVwSGjgGmU24tQpF",
  "key26": "2pcWnSXpUDfXNinUBRXwXgRakNXFHZybZVJykgZ3oS4FKefEuy5247ZGcmQZtK1iEhjfGPQG3jWeohz55nCiZJ4C",
  "key27": "2aKJyVLGzUqGV9KQ35zgXHDUHAXkTt64L67nL6c3kof3q2YpPF61gJXXsYDXg73kCF5y8yeLmAuecQArV17quVzP",
  "key28": "3W4FCLBWHKS3R4Myez7GKKjcD5Z1HJWfeF3n5FPajhvpd16vRPRsKwnp8ToSA6Z7WqKtgNzJn19h9mTbEaX6dro1",
  "key29": "5oHdundHA3cNc4SvWpZuKQa2nuWqCq6kAcTAyGRsaAsLiKTRGgwxnsU4H7AzGpQtw3GXd4hCiSpuwsLt2WdNVT2u",
  "key30": "4JpF14o98ZyteZZL4mDbia1bPKb7U94JNM9dkABw4AGSXYLZFhDJ3WJ4Ke78B6De1WWLdZDbbDmAjfymWvaknnzw",
  "key31": "2kP8AbufJM2ZJSvausVheXNb2qqoebE5h4Vo5kSFQfUV3psGBpZK6upmerFXqtuAmyxJxUUS2CebE1aasRPztHKU",
  "key32": "3bWqAnDo8GujU6kc7hA5DnZv3VLvSdAe1y1KxhaCuAR2CgaU9WsnX7dvGeXnbeWW5tL3fbz8xWNPz6v9y3PPfUqE",
  "key33": "2MGkXMSTA9jznzj4jhURU1oB57QmsGJchAevdN4jd6HcA3iqGcjk8rfPGKekutg3FwZA6pQKhW8pLxNXUmvsC7jV",
  "key34": "5rCyGAmBnqmS82PNGSTWj1bqL7EdP9PBRTGLqXDpvK9uptdv9ueJFM1EL8Qxr5KvhqcTPcerFuSUDhjCRsLcz5Hx",
  "key35": "NrMRYg6ZMr8Bdydyp9gGcqcrzC6o9jRXK1Ys75xLBh3ccP3NX9oqeMf7CCZF2RhMLurhjm9d27EpqRURgnJMUeq"
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
