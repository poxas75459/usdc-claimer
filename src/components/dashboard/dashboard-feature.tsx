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
    "hnmnTjSMXTDi2bM15VPvokjFWwEmqkmoKR95GYfk9fmXyaHYqFArqL15tNJKjKNsGC5FnwTPVzCsmRmfi2yTN93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jXQ1UovXd69Wg4uSUcBrbek5en5hQVMQfouiVr3RosXZ7D4uyFs4UHfih2hmgRPb4aLgoeJhWqUvgvGM2zB7JFp",
  "key1": "67bqcGofHDhDdxuMT1hkxnra1hi9M25hb1RxumjgvKEo6TWCxgjvHpsnHwPCqoDV2DnabrAMgW8LufwgriwFZ5aT",
  "key2": "faSrTWzPWcpuA3qedZhrYtWj4ziBeLFGpZDdzc15TtyXQ3NeXAdSdbgVobav3ZuzJdGbDzybHK78PeiD9uLxu68",
  "key3": "2vErBhZKRo8tyJXsByzfQNh4bBfkqqj9WSvt6mSqmDyvFD2XWDapa7u39icqwb8YscaJJmTeHQLHoYb9nqhLMtiL",
  "key4": "2yQ5iThMJdqpcbRMu5e2LzLmyF5cocvrEXnAKrNiAX1kmW2Gy2aKenwSVpevfmMCFGkNLP5t53jFkbGnTdksQoUN",
  "key5": "5qfyqF24BFK1ZyKyYYiRV55fECnsJzWwidoLhnkuSnmFJiHEMjQ11rcdTMTbdMqHRoFi1c8xbnz9rQUqEGAepP8D",
  "key6": "5eejAureLQMiVm4DSNLzLxS45N2EQXksioPvErEkb9CmiQG5DFbb4Q7SAbinSr4mA5pL2hiZLD2oR1uSX2nwefSj",
  "key7": "27uwSG8fP5NTyEsqM3puMG7ky6nrLEzkfCDCJwLwhgaYy7X5uSY2rUesXCJia2UBankrJdMzq2b9bnWh7m3LBZjG",
  "key8": "2Pf3YsbvXoxCfx7duTMmH5MiBiv8RormQLCmT2CPk5xc16qAHeJi7jRARNo8U1PYCHkVrx3wJtwsaDWkVbuwaNva",
  "key9": "3XeDYcx94HTSH3DetfToTh9kXi5ujpq6xEF3kUqkGAPEx6pq8CfuGBfjz66uaBkDXCxhyXsNuwFrw5cv5pZLBEdV",
  "key10": "3geBoCmAxqvs6pk3FHCEEEe27Y2M4UdmxeCqceEB3ybzuk3xDiofyhia9iMyTrVs9qyndRytpAPoVBhRQu6pzXEi",
  "key11": "EkmgfDrfuXm8hzPzHqfJdq4z6E8RuWoAFP1ek9ekm2zCP19hppB5wViiDtWgiVPt8jgaKDZL5cCCDKS7J4Qgxs3",
  "key12": "4XK7UKYVW66Hrzx5wKSmkmBysufLeCzjeTW6TjD1acf4udFw4J9CTPL6g9yP1YJLZ78SxJvxAt5yE94wJ9Zyqidv",
  "key13": "5oeuYZrPp9xPPhJDrkgFGnzmacUzaaKktwdmziDAigU4BChfPbtEj8zwThWPJBHDeXaCPRYJY857vjiQ9Mbp4djW",
  "key14": "3RYsJQNLTnQxsnvgwuypz2GGeRA6v5kekKbHFhoZHbgHQz7TBw4w2UCZECG7jqjrFWrURtdDruHM5648ZKdsy9sr",
  "key15": "3JoQxLynsw7fnS8btseBsjdY3bzC2ngue923faRQCqffuDDdo9AhEpb1Ve7aJTXRYsn9ZJJEv3D5J56DRsC4PGgg",
  "key16": "T3gFHMbYa9pxxDbjCumtcwjhZPGNw9FLSS9PjdSQuYAT5z26r3VTqFyRxFKVcLfSCrk3ZcanKg4zsb9KsA4RKwE",
  "key17": "3BCGHzAMo8Expj5CGcXPCJWvwi1VDGwuYW3zWXsgua9GGD9J2LRtmX3jeWLFBXU3SUJ39tqgPoWFSDTVcxug4t9U",
  "key18": "55qsXe8Kxz12CU58rUsUxyDYsj3hv8joozMwDfJCQEgBeQbQ3wB3KrRYerNE16kaUs1KEmfZdAX2wrv4RXTy793Q",
  "key19": "BuQwepPEyAr1Gp5GMYFZacGktBK3ARgXupQvGM3t8R4kjgUhLVm3P4sfFDErXHt57gLtF464JNysWhJLp8KUcC5",
  "key20": "5G1oYJQefaEnHMVtdcgmKv7eB4CkE1rsNqb8Vy7PdvJrPNqDQoXcQ9aiNoTNCP4HRuNcjA42rTwdGdY32J5TPf4E",
  "key21": "25XDZPwnQ3TQY4Q6VXTawtCRq9tocDxMuYkPcbTj7YktkUZf4YTBNtduYMAwUUqad8hZee4HFdvbXE7r5TZzWdMs",
  "key22": "2H74bJfCjkhM86d2Guanhth6zsYZAvihqP83KcfX1sTsMs9HrfWkspp52t92jCQoaEfVuV8M731P3u5T6sewCtrP",
  "key23": "4T9Ec9YnT9KJPXgHceySvqMbmv9NmuVrL2rvvtuRJFDmUn7v7rqfakiXURZXSesMpngQJrBJNiBUMMdBT7M6x88s",
  "key24": "25GSXpgja5xFq898ZiWjXPsZbsUyJnuvYVxu2cDMYbJEMioy9vwKAmEEtXbT66bajWpDL2hJtvCfEDjh5xNhBb4m",
  "key25": "5GcjLkaVUnxCEGgRsmT91SB4LLeN6GS6EGZW8qkDRMMWshehbEQ2SsKgcMJH1CqSi5TduRmGBg4XkuhY1T82rimF",
  "key26": "4NDbpo1HGXXMfszL7ZDs7UJBaA75tniYcTqe4h8ohuNibnqtmy7wTtzTsq7JYQBeHMxDiaB5rLxLLhYmnaTbHzzd",
  "key27": "4zk8Padp4GbDCg83sGAwi7zHPjUVum2Bt9BycZKeiGUaFhSZCahTruU6R4dLosoZJJSjJhfShyRvRat8GQPsJovR",
  "key28": "ADC9cTCht6o6pXFwSZhRXamKm251jW2T3iYkQA6hEqAVuiSVTyAnsTRSS8XEBDk1kP2g3chgim48GAUtjKuvsde",
  "key29": "4faKi9ucVj8qNwWC1p6ikLDYxzUz5TEyxMHngRnLWsRh9L5CcryHuu3hrvUfkL4pZT2UCbQf7KZD8UFGw5USP3bJ",
  "key30": "4on493ah1Fb9rxACmAVhfH1eBuVv6WV79o6cfYGTMjmLwmVT5rcTLvHfMU4mig2ztdhi3Crj1Zrp4aTp1AKkSrcj",
  "key31": "eyt6RfpWFr3qZiZP632qwkq3P3BhqNyq8sJKb8kknNG37J3yo1b5A7CDiR6Q3CJC5Xi47bj5pFvB6As2o5iNVh5",
  "key32": "24qbPKjpfBkrgsZsaLArE8gFLAA27Bq4421QL6TwCx4Hs4sep9iqR2hFY7DWQoYx57abrHFbwSKY4PSSvamkW2Av",
  "key33": "3nvuWBWPY3GJxEeD7iLF42DfmhRcugWagngfFX1hAxyMVUta4AyxuhvQLm2DRmBLC369YYeSsESPvMAw47mZUM2c"
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
