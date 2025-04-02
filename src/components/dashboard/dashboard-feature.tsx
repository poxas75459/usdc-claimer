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
    "4dyJ5A8soMAyFeFScvC993fGDpJbxWAXQMazB39zDZCiZWdp1mAkpW8HDLjSKUM3MffDz2Wdh53TSRNWRe3TybLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UkeqeXKFRVTFSvyZXS1ShbwWyBJFz1mHMTK1Uv8wTdWgqtrxgUMUjkEgy2FBCMBgYhUME3UpiyHyao24xid7Srd",
  "key1": "3WnpPWCmoNSxCaLE6PmHHNAMbuAPz77r5VnHm6SRjuiRFAhQP2CHiZo7zUG4cmWXRKAtK5UDGkAqRmWdRzmNgpuV",
  "key2": "3xacwPxLwYsuzsR2g4Fx4Lc6tzEahUhPSdZjSbHRc9zrNBdNtahAxZtrj8yVh43Stk2F49RRtqnnaQaZNgYidqDt",
  "key3": "2k2Z5zSuCVTdVexkHna5XmxAAyQjAqrgYnBVpqCbKMuj7iRH9um3Hq4PKfrqfrExUScB68u1nNM9UTD4ftEL2gsY",
  "key4": "2mWcd7JtSuoU6xMNP9rrMtkYA4CQQbSurfHuwEkvDofL1t2zhpuDUjYyj97pbMhcLytkFtuSbKVtHDz5Lj7LbeVJ",
  "key5": "29KqLoVzvTowxB3cF3vmqNRVJjpGwUPP9WiYgQp1isSNv8nEycxZRPTTsCp86RH2eDv5DrvXv4tvJidqwQebZLeo",
  "key6": "esirkB7U6Nevk5bQhXN8M7j6fHp8oE3cSbjCdABEZXXFp3k5MTkh9ahwm4f89onwBPRUkPiCfbSQY98Z5AUGSdH",
  "key7": "3PBYGkD1aCnXwxhVBuFwvQUM8RvbQDDod1DXtWbgVfUMuj2wxUYzEKTKUXnPfYAeVTen43zQ2igWj5eYwiv5Nv9K",
  "key8": "469t3MTYCuE1GPxrrUfsBdU8fXjwhbGRi7NCe62h7n292yGPd8cGGYqNzXUtrmfuzNRMy1CeSjzx8rf1HVcdUz4u",
  "key9": "3LoUgcVJm2h8GzDnWUYEDRYaMt8sbtEZ7iomnTDJT21L8ug7NtoSqPiuENpu5fAd5E6uekunxg73oZwSDXQrYihK",
  "key10": "pKdpPXoEQcxNxwo9wefNP5mSnPGJXV3fMomLgXMthy1kwEpEYkyTzqrchZqesxLHhRrZWHDQ8DmpDtZQaRikskA",
  "key11": "3JUYVc6BzK2eeUkkV3KCVCRpQ2y1KUbVTwf8yW4GjEYDqXRC3vmJ3chTzNQ36Jka8U2GHYFURY9r2cRF6fNJq1ub",
  "key12": "5PbMvdXL4PKBzLZQ8T1AQc2FUaXYcraUwfyhQfJtkVxLPyYo8ASQauAhC78PUExo9saf1A7M8aXki68DicmZp58F",
  "key13": "2tzsZVZDr8jSsPsWbUnLe1GVwpTFmhFpporjSStcWLzsJHgHwbLoaJ2kh13hoHermg2V2c9SuVir5cpwKPDvY38y",
  "key14": "4cwNL7obyCUMfDdcrMnwJZUWA9Yud76LrcntRLdeejZB1asLC9Fdv3TMCuyvyKLZrW3szPCeNX6QjcjPqzLWvZS8",
  "key15": "4c5xLgrT8brUeemz7wMaMM9jFZNf5nguMmGPtKSWiv56VZVJnjcMwbSJN56EwPCopcDHjw3cWxz22yZW48ha8nWk",
  "key16": "YunECMc2EB7rMUALWkz7D2AzfT8qjJUeFaVuS1EvDFZnv2ZTwY24QkWqR5Fvqzsmg6gYqZnB7jPVdvui1TmS5aL",
  "key17": "4s3UQfg75fnKEUP2ty8xYtD5Ns92fayWcobnfrzFHDEjBgFULzSS9SgHVYeZiMnpA9UnXDyxayx59GvzWcBcvyY2",
  "key18": "2a42mAHx33C95Zj3GhoMHJNLc6rzvjM5QXuo1uBxLHkuwR3avCyRsEr2DebZFVsgVM3toY6i3pMLTGgpoDNHB3z2",
  "key19": "2mF51A6DiLrjG1JFim1z1Y5rMtZaeLiLnw4zprexxAZuSHpLHhJpPvRvzJT8r95UqVzTNhqEPwWjxCBhDPhhJNNe",
  "key20": "28zzvSASoTGVQR5rTA8wmTPiDhmr4CKPLxWUfYSx2fJHQ4YEPuMHxBM2HDawJyBBnZhhaPj27irisR6qZYicsiaP",
  "key21": "4ynCuswcAZxoPu1JDUBgKCZcBi4JuVvLKmtyQhTumU2qPBTRLW29UiguNtfdJbpTjbZk5VFhC9NyifeRKwcUgnUb",
  "key22": "4CsCHTimS1HVs8efuqiSfq79LHAPwgZFSCoNH2Dzqfee3N6R5wPXxDoqfXN2P5L64MdR6GyN3cHvGK5pKoPtmtZz",
  "key23": "BBbCftpzRXfFDkpyDKTvH8h4a1vWPZiqxVHiWLDt5N1o4WLaHxwxLQ4bC9WgSuYyXnWP5aVSL75toTdM834bHsA",
  "key24": "Pb6dQJEXvcxptCpkRnJJ6YHn4PvpDW8vk9CbDf3SpGcXNcecpsVCAAH3aRhv8mmzwta4SwgYHRxm9tBPEEmayNF",
  "key25": "2J7E4rLyrJcVizazzsmRBqMXxDDemdRHe2kzUKnUKevHUcdKCXzYisJKxfNGtMzgVB5EfHhuaza9PzNMEB21HDFY",
  "key26": "Tup9ss3dDupr43qmQQejWG59dBjKng7DcCdETjb1JkBeYH8vhTV9CSEW6LZCSiCmaAFsWuLjZfW1CxzUnpcmsH7",
  "key27": "4b1WAmNWvfTiGYEjQFwrgeSECD5dQrooHuSAa3Mq5jN5WSc5epFzbonoR9rY7ehmAdHC74vgsWDWdgK5H3VYQAmP",
  "key28": "4Z8sQihSeNasajgahbYAQAgfokRNQ3sDEdmktpJDhs1yzVMnNY65renY3uGQcGYWfP9Tm7jHfdue8URfbWy2eRWM",
  "key29": "3PfoFxTeFRcUbu6S2NC2WpG9SWYsWjwzvjhvE6xAzqFDR5jVCCC9PC4zx2VZRHMByfJn5VM6KsTwxtsBWuuGrQW7",
  "key30": "BaYg3ntsxb5otGVBGhd2c3RVsRqWkuPHXuovyPwH8kgNHXb4T63wtCb5AwvwobUSUSaMoGHcWSaV5W6gjWG96sM",
  "key31": "3px6TZBtWFFPEDGBPqRRSExopU93UZRAEYbVqS1jkdeL9s2cEXwMzHcyKkB3nHYLZS7eb9RztD3di5HespusLDuD",
  "key32": "7jMWPitafZsULAVNvsyYeLPaw5G5PDsJiDtP8rz6T2YH5BUpr1tyyPDw2XJY3Acwp6qaUXMRRB3S2fT5eidiF2t",
  "key33": "2eDSYRaGKd1LboJoYj2eoaeuToHeb5ko35jkd866HYnieHyCSyFbeU27pjgVJCv9eUnx8QQHFqJdAcuR23XB5cNb",
  "key34": "4N7WExAqVvgvRWZiSiinfqFiBPcmd78Skpps8UxttF199iKqKzkGHbSmufGWzGw5DaDKzxWrUh2wyhs1281sdQ7U"
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
