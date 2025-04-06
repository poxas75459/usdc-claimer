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
    "BnWnQTVG2wKMZft8xZADVC116fyQbWkwQsKcj8PtU4mnRbXabMZ6onkeP5GtQPY43U7U2Vn8pEwTxQ8735aDSMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hjq4WZbX6ywHJ6Vxc82HosjDBE2eBkeMDoi3cvF7dtnr2JBnrDVfW3XyJyu6srjVkr17uZwv8ZujmWBB626VaWM",
  "key1": "airM7YqegJQXWDrkfxZTgWTMB8uHegY9HRj3qCU7KSprTcBvgrKXA98TY6VH1FaRWZjKmKjx98vDpxZE46gkybb",
  "key2": "2z9ZHdFYUNcRtfPiHcCY2TuGTiLSVRNxzUAxj1zqcqvfzSgyUZ6XFvjMRMyZSNwgRsJKbV9VRvv4PSGRdGKEhqaG",
  "key3": "6gs1CbgS6sSFjcSJuBkLGqc2NvLnbTshP4ZrpM3ftLZj85hZ1B7bCPXvLqsszANShVkYk8KWtBbBYGk2WVSrSbj",
  "key4": "5tBARFcS9cNkKa4YyndRpZtDcV3txV96CTMBBchyFyK1mexA4fQwdosaU38ZMwdDGCGYQ9FVVdYL2uNKJvWrutFu",
  "key5": "2puRYqaHbnq8PHTeL8o7BhYmAkqYWv7Uu3MQ8L5PbwSoJEigJn9J7ZJkZutZp7MkRs5zQdk7Xsy6u6DHVgF1ysGH",
  "key6": "44y2SW34mTRqdXHdxXp1z8YiVqXBHq3YBCxEG9Zmzw9vPZSwSXnSBCrMSemA7D9TDq5kGZgEfkuLZ6ekM4p7UjLP",
  "key7": "XMuYmj1kq4gaLYxcfKPBf5zrSFTezSm9JenSmPQETSuxcDauJV8WfnAi8SfmxpZGcrosZU1ppwzgua1JypREkHy",
  "key8": "32EU6VtgZBkthcWJyT9KZ25CLxJGpac9pQntTRyvE4qKqXiHxoNLfk1hi8o1u8Y3Gx2o2yJUVY2uaEvAVKJgqbm8",
  "key9": "2hNFdJwzurjBx5gsftNfSV6YteohwRMm7mkTGbLAwpEMpa6mJFv1pDGGSrW763djMWJknv111fi3YXXqkddEhjyR",
  "key10": "51BzfQnEywqaeQoVG8JYjX4UXTqefMbC9Py4uC9pknEaEwMgcRvHZ4cCzVyTeT7Y3rpXijaSTVm2WKDCcvuAY1fG",
  "key11": "3v9sDGBTK6UNasHTdPZyvSywZyEaDXzvcRZgCB2LNYzMjc6qtRm3V72cfg3kjMjVVydXCLahgdA87gccRcNuyvzS",
  "key12": "wsDNwv7LKWwRsvVTWFXf7Bqjv9J1zw1gdJoWC7cx8jU3daAszr4ysz8mnA7SePftMt9HM7JaFHgR43HZAasfxL9",
  "key13": "3C3dK9G3k7Tyt5t4Fb9AvbLjPjr8CYQVoiXUv5taH6URCp4G2zcx2Q41RgRXixwehzyUWkJWGcDZFpoqG23KyduQ",
  "key14": "3TfN4Ee7sbmin1jn78Q4bMb6Kv2TaDs1mWNpo4rXzPx7i2o2WLXtBeg1HXH5fgzVxKBE2eqK2WvA3hfBVj8CkG4M",
  "key15": "5ayFViekziXJ3j4hdTWyxEZ179uBLsTfFvGPm67CR7uJk4Gdsn6Jg4qC16Uk8uCVHfh8JxbVZqhdMdo8JAY43cAf",
  "key16": "5dMcbB77826KFhQ3k4UPnjnojiTqLgSCud1qPabtaAfcbfYHCko2obLoBDjoZ1iNEBiQtrecAYVCbFzEyJdDtaxJ",
  "key17": "3yesoRCeu44SWNwijLT6ovafbzQbg8GNVkVHwEVMPBY8W7LQ3uz4cnBmVhbTEZYUw9zHEjKQFT9uZuYTPEVB3Ux1",
  "key18": "5iN3wvKb4gK7sicRV56YwXnWwgxTDbRaQ3iw6ecU6HGfdDF1ccRqeKzjTeb3MFRAuLo7itgE2Z5ZcVApgVAPVos3",
  "key19": "4K2p91nz9T9Rcz1YaaHxCvpLZx5FQhTYX7Sa34acPmqvfLVV7y28B57C5XtC8BZCVm3uVBJw2BzAceVhtWRPw3Tr",
  "key20": "4eNmp86HNHSy8EeXrZHCzM3WPiKZYS5VQQ3Ps2m8ZND4o9CCpBwNMtS2FAnAeiYUP2NbGhSHLXuehHmYjsLHxHBZ",
  "key21": "2s73At6NysLzGyEAp3SsbxfbnVjd8aLZt2K2rBKgCkRHfSTRdBPnGCv587rdQaiDMgcyhioZz8qERY2hH8XVBT1f",
  "key22": "2ihxPzXj29XSYUxk3g1Vze4c4jq7rPe97sHEL6igctBRf7H3ijM5dYa5Ug8gpjvnnvmvHJoCXiyx6kA4cRQs8GjU",
  "key23": "4n6tRca1G6mm9Dqb29WoLFGPSja8UTDPWg5cGxFCvH5Nzx6CoiR7wwXyJihV6dd5rf51cyQKzYYJzvuzCo1BxXur",
  "key24": "5yhjsHzpceAALAhQtoz4jz6YkamQtkANLszbCkgcVaDwwMrs5JL2dWN9ZpQNkPWWh7QVpzfWCdzFU6pjKbMbngKD",
  "key25": "36cybRmU2pKCzRjHc3kknrG2jadPbR3VzWu33eG8Yne5VLGmQuzxhgSF8FBeGUf1gTekK9DNp5GWgi1f96CYYmAX",
  "key26": "2ttQvpG4XULYuFwXmf13godVGduUYvLgEzjYBYPkAMXUPoAG1BbZL4wfutiyGHJrCFt8irLYp4PJYye4oEVH3zyN",
  "key27": "66JEqP2kofriRZ6TNR14iXvWAfQYNmwiGifwUvnF2JZoRV7BD2EUoGfnKdREPjjgH3PAYvEpQXk5LCte5Df6xkYp",
  "key28": "5z54J2VJKoENkrhJoDWdvnr3K5pmkGFUvRSboycNbLQxpxLUbcrXb3Ao3TXz8GZy8RP5X6FALqRwU2EYXeMKwaTr",
  "key29": "4JbF5dv9G52QnAy8kS2RkbZhe7iEPqCZJUxkiRWgzdZ9etS4tB5GYK6G8nekhX2xNw8ukUdSGmNn9K6TANXu1Je8",
  "key30": "3hbre5wabKQurpUzHGxizpGxwKRNvWoCy2kqm2wDUARDmvdzbKb41fvzYxdBAN9Q2drdFLQC24ZAkufRhfwRVGaM",
  "key31": "doi9G6gj7AJiR8aNtBu1sLCnxFFfMjvwy9fNg9MgEjXtxkw8dk9FrbrHXcafVyGKoVGmQbUwdBgkqo6wkseuLcp",
  "key32": "5ZfAm5vdoKtUWiuvqTHk7zCgw6w9uYDwq8GuUX9c1ZsR6vPGUX1BmEdpueTEZospoCEiU2mTZZuM2dKBo2kx4JPN",
  "key33": "4abFGTg9hijrxZ9a2VDG553EYHX6cVA7uMr9bmRGVo9Hqy4ooUo1GyT845gDn9v5gmUKEdJ7XaNaSKfUKbhYSCtL",
  "key34": "2kxk9omUgx5FAD9NfP57E7GiK3chRYrXT6dKeqt2BErYant5ywVwqKddn9MLf9puDPrujkrLrdK3HUGJ1AouExj5",
  "key35": "TLJcg4c1uV6wajZ8HEzPcRm11R9i4h5Wnbk2txTrfVFSW2TJjXAzmvVR6oYiAH6unhSprZgwtD7iwthBD8RE413",
  "key36": "psZCEBASvx6kdbuTCiiK94jDH8Ldox4pcaBcgzmXB3x1tLR27cdSR5Tr2MNFTEpYcwoeSWruj24j6SGdWLLkGeo",
  "key37": "4APPxdUt63XJbuAsmQnG5bhsNsbCiiSuDhdqv14cWmTVN5MyvJ4q4LzeoD5f4JKzZho1C1Uxc9MNyzLt8PkrGrHN",
  "key38": "2QC2YKXKbixnw6oysHsoW6Z2tUiD7YMDkHHa6aL57Ezmft5SXXFL1GB6bbo9KDKLGd7R7NMEWCeurAiSZBEDUPZ8"
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
