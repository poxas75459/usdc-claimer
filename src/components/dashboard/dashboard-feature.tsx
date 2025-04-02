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
    "5UAxAgrmU63eEPzahumxQqxTbrQSD8RZ4AuKfdyQzjgrP42pL7inWJAY1hTrTWbuHY9rY3LrBXQVVHhivjkdsZ2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66VogTJHvW9ZAbwjn1PB1y9ftznsdZ1PSkmMfb5eGgovXVqbTTzZpzuRG5Ttz2X5ZwnQBeEU2KMY47AVizrwQSd6",
  "key1": "32trqmPeZLQzZTL1Z7dcVSwv5FFQX9hZ5gqFu8ZjgCDmzQjm92A33i8RzhWhQmhVFw1TuPk3QTgvGRdd7PnDn6iM",
  "key2": "5cPKPViE3Dd2ZR2NGtDXxewDwQqEm7qonESYoEmWgvsDJuS5XvcLNhNKiNMQvqwpgHKkP12vKmemkrqTWXnFjKHp",
  "key3": "5vmjdHn88upeuBgYhtJZ5XjKmodQEs5Q1vfcHQrkPLNfAVFyopuUK8BXbk38aLjr5Fsssq9rA4VfBsdWYWPjympp",
  "key4": "46J3BRgHnaiFuDEMA4Lq1Z5nT1jbcbj1bwdFNNPe5pkVSmhtaqMxRUAskpJTsiU6JMJ9P6e4M2jcLLK6gKFTsgBy",
  "key5": "3ogVs2QDrP1pgaw2Vvkg8kGZaihAfwy6nuiP4xLbVQD1sbnJXv6W8J9YMMk2fZmTPJsvoFYWeJDnG1GuvdnxRcnA",
  "key6": "t1dzS3XpmgDQbc4G4TRHebfMxdSGnwixZhzYACZUaWYt2v7PQVnG3Ts4NBwjckqJEsmCDjQc5S3cZ145QgtEX9D",
  "key7": "4qJuts2voFUUPwUBTF7pkPdtKMYfR3wQGtr5J4ConNvbDGEmyehWMAdFQdXmu6yAsc2XT14RLVxY5sxaxbcuEvZQ",
  "key8": "2YiunJZnBZ997HYKidVUMW7u39fjKLzctyjUYdz5c1keCoBRP8sgHja2XvYzAETcsYAybhtSzAEZCrAcE15MoPth",
  "key9": "47A2q3uSYx4G55f58u71aoc9xmvDBXyi1bLqLum2dZG5uXaZYr8vsgEpAhXTwGQY3WNoAUWZsdSqmqGNCqCQTUry",
  "key10": "4ad6YX9hM1cgkGkkzTpuYo7BfXDdwmrGMbb6vhf28m8A8vvPpFgAH7UCQ3BHkpzqriJSjNKEW9FHcM8tcai2y7ai",
  "key11": "3nAvxuFFXA7tvvri7rhfu49c6H4WmojMYsncNg1CpG2w3LF5Yn5rSchvTATKyzNbcK8K4xcs8yK1o2fCfzsrXDqA",
  "key12": "5bvVhLitkFmAHVh9BLMG7vSaDJSeKrSHPYt8H6EwqBRceeF7nD7gfSYmoSGLWHoEK1Aqo46EFDR8hJFnHZhPHVdC",
  "key13": "3FiNsjSkQFfHVkFZ4nYgCgAa73nygrUSErXa2yLdmUVEGRwMUSWXEFsCSBpudQpSoYoUwXWa3emzhCcUahovr94t",
  "key14": "Y6N6MWsGCrUbaFG649g6H8Y9tbmWAYDsZdvX49htdQ8kC32q4eRhBUSswKbkHb3CB3Sz2crTkVoKG37u4gJPEnR",
  "key15": "3PxpjANrBRugVr733JmEr4ZvH2qo6pMRw2g1NNCcnfihJHFngpncb8bjtUXGCRetyvoKAtjQkTB1oRKMsAUK15iC",
  "key16": "XD2nCgvmdRkgoZUpFt9oEDSbuANwmDFSL998BHVN1CRtiSoiLb82NV2hFrrobmwuF5DN23Mht3dj8uwA9GMxNZS",
  "key17": "61E4GxLavtJXeQXYtAt16CtbK1EJNXNMur5a2vSuTf7wfrEtduuAUzzxdRWnaFcLhjmiw83Utj7aS1R5jA5VMxFf",
  "key18": "4YRL9ShGXeh5MWaveFMYJXQLmMfHGYfWvaVL6qWifp1Jp8sN8KbFGPH9pr2XY3R3TsnVoMtbjkprwSfWACf3BAVL",
  "key19": "261f8Pf2wBbt4YPr25LvPxkTYTc1d9twVeQVtm32SxBZ95CPfF66oEnemGrx2isojsZf1nitXc7tLLkB81fG83UZ",
  "key20": "2Zhj3fzwvMwXstELzhzpgFKe9r3ZmeNoRKBH1cVzfWqjifzSC9n6UAyghRn57apxxiSYgF6RtSqhHWQHocz47k7C",
  "key21": "3RncytMRsPcFKSsTWRmBKPF7vBtXiCkjh6ywouLLX9CoQRSSEXjFYkMAz8qQVgrmzqK3ajpXfZtpMMsTcKB8BbRH",
  "key22": "2EFejjZkSVPc1nEeCCeSGqJxg7kxSspRgDHXFwWWYo6tWK4hNSobHMPBtrxmyyv4Br6LucMN5aTTSRgWMnV8EgzS",
  "key23": "4LJgjiLvoMKh3GRM8dCa8NHnrgZL3EsRiQDRZHmqHEmth1CyzYv5Ypo2RrMwjTPP7SSn6kLheomVoJp48XQinTjT",
  "key24": "3ofQzMoKfu2jcBLQfhPro2VrjDTDs4d4aeKzVK9adtGvjzDvQbMDoTCDtQzZPYdU6rfNwfo7sNzwwHXw7WT2Q8o1",
  "key25": "4cNK7n3wLjQNLZvuyfmeToqs3pcuu9K812kcqFVypHdRJz2HMfvPQFoEddf17d4Rog7QE72p7Tn5D2jip4LU6N5j",
  "key26": "5FMTqrAJeHZDuRaBSZBfwubnsMezW9Nf7bLixTQXErxNS4Ca5teS1eAmYKHr5fktXVe7u2XTxCEz7qpGY1QAH7mb",
  "key27": "5XaZ3UPWVhgri4EbGhWi9hUXz312sdf91Ne9rC1FfLBoJcX8qe98HkHmJ1PqG9RrpEMUPc9WtJQ6VZ6vJADso8Qq",
  "key28": "5w9E8rpEpCh42RSabEUG1EqRSGig6hq3ahgand6fyUMBGjW3hwPUkn8eX8ybXH3HmmG5FfgwQ21bGRWkJYUbwxZd",
  "key29": "2hmqA2VZhmFQspnkz4ypr7fxkhbcCtG4jGEXEDFskpeKBj19Mvwewu3o22EGzPLsMveyc5Zvh5DpE4c3gbRwEH48",
  "key30": "3CybRYDmgSdzripZEENeNe9XLG6QecAWrEHqjNzNJgca1hessSBH52dVgVLSmKf3g5sk67EvuVau5oimKetUpgRB",
  "key31": "3JQG47LsVzYq5Re7RAN4t77SFZdEvKyrdGXJeQJytPbRvqaggCxYjzWcuXtATA3EKKiAdkAp5Lodv1e1miwoTW3r",
  "key32": "tSoyLKxS3Kvis9zh1hDERjMz8RdbuqyroHbCjuGA8krmZg8Q6hBvVH7sHBzbU8wvrXY9Kgfhqu8U1wv7tfZtfXg",
  "key33": "jR4E6meXh3kc3p2houVdQ12uAgpZhwUiNzJ8Ei2hrsCmtpS6HFFzZW3ZHqucSSCUFL4HK6WVnh7mf1UXzMcK4SY",
  "key34": "4t7dT541RiN8Z4FY49AQz8ZqLD3G8HMZEKTesTJbZzB5Rdqa2bpyYctet4m4PNX1CHwes6fQ3tbad9EReZ1Ceaoj",
  "key35": "5fCsd31pUfpmd5tvSGZiQLrH1y4yybVCqPk3KJWQCtyDwjCsXzMJC7MVbYPNpRWaLxLXxZ5ByvrQZbJMJcUKdK5m",
  "key36": "23Eus7nwSjYaCbLMfXpovB5L4pavS3CgxzMAS2XzSYqEG8Tk7VwfF8jtCjRbzf5o1GifgSaUBRvbgKVGCXkxsxFe",
  "key37": "3nzrtjY1JMneJYywoVKN3J9dFaeSUuDsFRrqXaXPpUADSZRYZirve2y8aCncueQHRdQuQPV9oRtQt2Hw8Ng444DK",
  "key38": "Sykn3Vr8XKjuw5qsRPv5mA4AtS5WWperPG4P1TrKBBVUshx1JUmfLcd3rNMWCNTyTfz2ZaoXydkb3kKWa4xQpLf",
  "key39": "FpnzSq4rRD5qEYybGP4NVLY3KLjJdFvi9ipsntmaXwQ5MieJNDXEy44zYj1BXMp1KpynmmzRJHJf4TjXTaMgWYV",
  "key40": "3wqQ7EssY4wKxaBJHmPpkMC7FsBXMNAGJF4oqunLtGvhGLzQy4NNAwHWQwUd9P1heCsGAa41o7N7xnvpWRs8zWuh"
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
