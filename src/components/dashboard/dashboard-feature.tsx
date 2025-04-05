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
    "2yZBtkjuM7fvaKGsCvAF1PVBaqrFgyAksUfxK6kApqtRX3xVuYb3Q6c1Yf6py1mA6W6ADgswntu4vcwLsAruZeCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YbbpR9g43ysNU7geVMPWGGarcK6EYJzVJHQc5wKgona2qQno2EhpnkCgwSTfBbKB3zcn4w2pJQnt6oyTmnShK8y",
  "key1": "2VKbxDj7fGzJPEsAjFyQMvSLiB8ocGEj1H9cWtnuqmS7BJybvcHnoemzEgxD5Wk89j7dxeGwKWVe7BtTC33AEzGp",
  "key2": "2Ye2tFj9YHAuvKX9bY2Pwik66TBT8RCZtPcv7fyPk1saB2MABChdzr26WDmvmoL8xPq9gxAG1wTFxEhkrhSonfYy",
  "key3": "5XLgA4FhJpNPD6tQ3z5WKsUj4fbArSsWjygPdfnMbdPpnWfvH39Jm7aK5kfCAPGR2KXpWMpnEJ1GjQwhPHYoPiib",
  "key4": "4QnxSZfzUqUBxeB5vgsBVsh4uuYwv8iooqpawcM5q7XhPQzX4J2KpJU9YeGC6MWiiq1dN2xH5jgwnrkCeBHhCR5L",
  "key5": "392vnEWY15jK2WnTizoFZAKqd8VRf4QRbPBydmTp21KmEbS8Ah7ebosh7h1xm9wZBco7sJejSgeVU4VQLw1CGxwx",
  "key6": "3djg2hYG5vVNaDjiXDJEMe1w33JXt2mw1ZtJAX2rBbkRCk3tQ1aGBcvjQ5sDS3uCn8KQSrryQxMrvDinaCRYb7RY",
  "key7": "4pEDy3tkWw4Gq8TrVxMGovJCFsws6ZC7EbNyfbjLcL3rRtG7EoddYPpt4fceB9wVfic9YatmEP8UGE3QffhfpQ95",
  "key8": "3NDva92QcWaTxNCFAAFi1L9jCSNzH7Ffhab7PR5yJUVUrBJFhyPhsk3nr5gAaxFu9fAR2A2jxvcd3zgxUwQX7W6w",
  "key9": "5HXZb5ryrtdwdP6vKMn8vWmXzpzp6Zc1jEMmkF2jrZfKEg6ShjcMjQ21FFyh7sepFdGfMkiYvhQSSX1vQhqcRSLM",
  "key10": "4AJXS49HHTTtarKEuBos37syKVKQzDa5VH1VVsh6bKaTrbp9FuTTA8Np5F7oAGNUp7NUpad97TmjV6NB5A6UwqXo",
  "key11": "4sxwR4tPcBvNtQXukaLVmhxXwHvBJMnQ1UfexfEVwxfPbUHxS1EauTc2xT9fNPTmiBEu4ZAGWQqQyojZAZ8x4u6F",
  "key12": "5HknVHa3VqQYgb83FyoerTKV1ZHKteWvqyZ4qeauCfR7yP9UgNArR5Fi6UhRsK95dHkwxAfmdZYKh2igG9Z4Xz97",
  "key13": "7CvyQkFwXVzGtiKnbdJihgKRispdC1YeD5WpvSPz667fiw963zjHHHrVZCYyypqVuxo6k8dmuZpg1riyCu2ZXZC",
  "key14": "2LmVVfd8RF97q7GSvia6MKNDEhvMMU4oiDVhxcEiXveYhVcNXfMgPcncbvshssFH9FMDTxQrqVA2YCpD6NrRScgN",
  "key15": "J4E16r1AAUZJ5pMynWRRLgNJqV4Cz8PJD54KKFBpgmCeKxiSBpBz1v1ZwyD69XM3sfiTNiPy5cbsW64W7TYszpP",
  "key16": "FicG4F1AbxwtKzmqoshFWxwGdj6U5N8qUE2AJ2E6Ppg8o5p8Vpcy3BuRYeQv7Beb8vdrfHuuKHnYSm9tTGBLkcY",
  "key17": "3eMBK6JCeYDmo44Ac3n8hsg86RP5EGwRK8VXwziFFocs3HTzQcmGQSKBtCLim1mdgrm3KGzP6pwPW4Z9yMsDoX1h",
  "key18": "5Ux5dPBWXtkZv7TCYc2BzGX5pzQ8jgnXpEZGMf3ssfQW25NXbCBme7AncTSACbYYTyTZQJN9n8ntro2RwTN5EvDt",
  "key19": "3C8ZQCLmuJXBxDp8qEgTras8kXyxw3jMESr4Qe9nKaV5toj1CjQ6KbJFSYbYbMo6p4Rmhkvai3JvrA3jdPTCoz8z",
  "key20": "2f9mYhXnKxjDAE5vuqhRyidLj6r7ve8TJdcboyevbuRwCAkXBky1Gq2NhnaTaTZRLxhcMcRY8Yde5oFeWEvK7GWX",
  "key21": "5rQav5mAgs7AM8wm3x8ToBMU95zk4rV4FmEydhLwyE8apMXfeSPsC9j8UJjrGsUz8yUjhMB1fVJJVWauBd5Nk7kU",
  "key22": "2opCDsbDAapYebR3oRNAFybZuJrKsiF9uJGhRSk8JBzbGgGRPAZdrLfQAUPG5uFj5PuqAgqN1UtLadkYEV6kjADJ",
  "key23": "3R6DSy8igJGfEoXcTTYGa3nY2J5MjVpeiNew7XBD8RsJirQpnrnJpvz9rTjKPJxTEzGhuWJN2BNf9DQuG5zcektA",
  "key24": "49t29Gb6JVTc2NST9jeUJH7nWVUK7XkVc4Q8dsyEqeDHsTdUKTyF5aSv5xCK9svrGyjb8YQ9q48muporGFHim6Ew",
  "key25": "4WV91x2zSUarQU8mjfAdgCtSZXK13evt5W38SrugRLGHjznwamHi4c7M1QYdnwCGpn5n7JjRSwinSCqQoTcnGzSe",
  "key26": "3hG3j2S1PMucCpadEY461Rbf5EACnr2kxfsmzfS5gCL6BQyZDKSsRidWM16dVVdS31cbtezpJS7pLSWC6j7rhLxe",
  "key27": "5Fux5d1iW8N61Gjwk1ds6Knxr4WAG2xNhngsiGYks2JAu5vm9Xw1u9UCWhN2HFVaCjLwyNCKBtqWaASgaMZLrX1L",
  "key28": "4WAAzuuhVpJYZcGKmu3AyhQrzH5okFsGHKJiDtrNHJv7ZYUgqYjquC1cfrDTUxdqF4vhhiNRsjuZAkRmaSS5hXMV",
  "key29": "3V8SJZXFEoG4VDy2t6eiVCCSwhm4mAtPGT4NAqUgHGA9gmNQTf32nS7tLtRtRNwPVeegsSarYuTPVnz3nzYyssEd",
  "key30": "22RMQetqPvHWTVMLPdoPpcCS7iJbDXVQPWpYdmT3Vu56vMZBDSWwqNWuDPYGuztLWxuuMcVPUc2U9HzsxTBYDA2e",
  "key31": "5ojvRDwhGKdXKD5Wk7xnL1Y5X7pyVSP1u6TzxNDR4ts25GE1wTzRAArpHX5Mb6GMxosX9cEBTYz5CqL9mF6fie7Q",
  "key32": "2jEuzV7XhBcvPdZ3pvdf9FnpT1dbB29iuUKWgPveHjBcLdzx7KHdNQBpSTU9k6qbnXr4GmF2Ekg6BJuGNPM3ro2H",
  "key33": "4Z4uChEi7KNYUtaBDsTCSjrsdDyRro2TFLNkww97APQmAo8fu4e1vpGSSE9fmcVfBWKhZUKM8DKEFYhrdqebgMBp",
  "key34": "4o5KwfUrpPN8dm2rSukLH8RpuuMfm3XFAJvDzKzEmPvwQYZ3B6Pa3Y1iaU5WXfcE5WpBjv5Wdyvsx4UNgZ7JcahH",
  "key35": "8pnR3kRBre8FKW9rz1o2VbWV1fLn2EZUJLGDqBQTwWZcTGqdK3g9ia4hqUrATxZG8J6KgYvAYCJHouoyc8vz2Mh",
  "key36": "3Fjkcyt9HB22gX6XTnEdNs54DesST3ANntSivNUwFWymPGqLg9XP4HU4ft8M1g4r1EYeepscxBAffa1652F7ECCQ",
  "key37": "RLnSW8tDZoGnRYboAuYLfTYbe2npTKxHtNUg49QqD5ThyAj1o2VqVJ2tyooWoiTJmij6Nvg2mFPtdCbrEjKQujx",
  "key38": "5yhH1f4MGiS88SfFYW95PeVwKqvT655GybXodg7en1Xyrs8UD5W3YdMVSRBfd3GBDhjbrgfms8GPQJxYSsxwZkaZ",
  "key39": "2XGHwQJX6pGYCSu3sk9TQ1SD1wAbctAAVAdF4sWxb1oTbwn8YDoh5V39VmACvT6PnxRtfGoDBnDSyiGmBq2UrLNJ",
  "key40": "2oxyHyxr8gasfFxv4ECpRyLWh987LFREzKsW1Z1ChedpbS1caftp2V3Rvj1YMZNtzZgpnJHBvRZ3wUynkAwtdEjE",
  "key41": "jjAch4G7nAJYtgYkt7QFHoaXVXegVpk5VaZrLUqQiHrR5QPpFCp7r7G7M8SWwP96YcGAkUxCSfPa36qhsPjqGAD"
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
