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
    "4u8j1QjMDQwrHm7dLcPbmSCsMSmx2qDWKwc4MNRUBgjUnAuQZfkkLbe1y4hE3dEVNjkctnUCQ6FFUue5jTu8M9F5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29GcvKBh9cPrv3zctRyBhoUQmAMU942TLdqWfnQwqdPtqRQDetiABJ2JRP6om3iRbCtdFsxXjmzah2skSbkfJ4b4",
  "key1": "5w4CvLQL7jxDbJJFLSxtsag2atwME7DFddyDRu94nqbJqgACAhA64g8XXyhU7pQ3yzkiqPTEigRuv9Wn2QVs147W",
  "key2": "2vzhtAAHEduA6z2TprvKty6FC8FoPXFrr9ams8bJwePhX7b7w9hwWZuewguC4AdDW8pXzRE3mz9RPA5BWGvYLbQi",
  "key3": "3ZeJDkCdFLtfvtMrPPNz3VPfd1AsjLLfd5DRaKgP898fy56R5c2TTdHTXme1dMoimzahWGF4ebA7py8X7oQtQ4Lx",
  "key4": "2kAxZACuRjYZLnYWzZdoKmbzG1DSPEMuFH7XCJMmKbj1NV8gygVEVpqwD2dDHUXscCKsn69X9w23L2kAtAJ1x1h6",
  "key5": "3cSvePTbMFXKXxDjEsttrt6VmPfvvgSqnYxUVEBMyCuq2FTEbicxiKtA8GGaDEXgaJftr8gwXy2P8iBRbRcdn1SH",
  "key6": "2Cwyrpge9ztyUhsS5s2uoW1kt72Hm2dBR6iuGunLR6GsDgPtpsdVeyPXFS4L92hyJch52yGhM6zpabmey1wfXhpV",
  "key7": "5Fq7PbEHaM9rGZux8woScb9zoSCTvcdSuFWWv7dA9ocobvzW74X96mxEUPY1vyWSQxYUxonP6ondkRrK4NNioVBr",
  "key8": "5zfdzRYyDQ8EkDQ7te3CG84shUcACWtbNnDYZ1SUnv8PehDRRVNfyn6yxwVaTNoy6SeEy4KC4suwSaZVSLeJhASH",
  "key9": "258BwRttGfrr2WqcVZ5zw2ferughkFe1Uj8xbstc2bAemzLNhQcm3B12Cvi7BQV9q1oL9hA8j6SM9xwVPUFTwJ3Y",
  "key10": "3qJi6AFXMr53eyoGmB4eqLrrZtgaAtUUXUZqETGkR2eJ27R1RdDAGdQbxZaoF8BNBKULFG61AZrfHHZguyTChczd",
  "key11": "4cYPcZNzscYJ59XgUKjxjbxySU4nbYXgG3JjyqwcSrr6UDUaiiU4UbscvZpqz3GYQXbyM4oAJKUqjAfpjtuK5Eqz",
  "key12": "2Jks4LyQBYEfXo9xeibaixwD5z7Bfx31VQyWJYYKXKjCDymiDAjGBGuxsJpCj2XPgGxktcSPkpFFNiTeUiA5JAm1",
  "key13": "4RdPTbQB2XgQM3ZKaygqpxbSDwfZiSupN8rzYzyggRi2wBsvP7wvgFctLD8kFFuY5mntrmmrDECmcSC5PqWzw652",
  "key14": "2NAE3XGuJK7YD3a5rigqBeL9K222hSeEZdPd31tR4uwkaipRreyQXjvr1G1PCccgkfyKpXk8cq9SQWyTorTF8Pgi",
  "key15": "5x2HS9L4sMbL8iCA2bSjtpDwBEXooRFAXaPMXTiYxhxYEQNEgrSmaH3XKbCeZsvnwB4m6sahrvm1EXZiWseax2KT",
  "key16": "62RydDq1pbesueKd6fVZdC8R2WnfoARW9XVWRwGVXobAUz2Sndo5rKxwqwRm7bBLxThorfiMxWqQHxu6M4H2okj4",
  "key17": "2a15iGeExLAjgWvekQUwvc2BmhF4Ey6J4eNm58QMegsyXh4gx2Eh7NMHNXrYBx25VQxr1t5qzDrTAEQUJifohbLG",
  "key18": "HVqKbkYyuNVcokWgxbN235Y2nSakxkGUU3Etr8T8nKfx6X4vwx3Vyn9jqeTCfCke5XuREuFFESCwmghQ7ofNNoE",
  "key19": "4diubep2BLuMHYzuwjyHW7r8zh3tC3quNhcqA95YEAmiopkq1SyzkvrMHcY6R5W9DXyWGw2hDHg7yXjRmqYRTKtc",
  "key20": "5oJszVkHvk4cjet2nGXEe7LMukYQg2LPLmSTskTMueA5TsTob925kPAZzN2XiipZkYfQseRXicRThrYNmSuiodoK",
  "key21": "2qWoFDvVsdGNz4RApGNVizMeef5NSMsgeTRDyguwenjTfRW4RnktbZk4phukYavA7x6MMxsXFkzVdZcb2euYc74m",
  "key22": "2TweV4J2fvEdLKDnc1iKfihUSAbb8jPQdi3sSHtkrYhtzQP2hpXCwyFLA6DtcjKi5x6kGRcUpMHmjvFgzADYw4Vg",
  "key23": "265zq8tUrGsqFosmG31kFK4DCZJWtKmH4Pfiys1vcqbGVqU1tDdTzYN12WFVXbXfsjb6fYfUAGTxvW3b7nM5MtCV",
  "key24": "dyMqWir7GRSQ53zGcvaxqzz5o8nFnmDL1avYWkPDG3acv6tkTrHvJ3W1vYczK1sRN9AqMCDhrtSBZqjmE4pWoHQ",
  "key25": "5BPdXrufvMRhcWjTFsgLqJqwK1EH6zTt9tpt99sAKjWm9dUm4XjxuBQjuc2V6zmx15SDexQuWTpraH6bii6iud5Q",
  "key26": "65PfqbeG4Whj4T5sQzXxz7djtXnPYkRMq8fRdLiHiahgTpZ5qiic7wPwB1bxvby5dM8NaAsFh55sdUoZmVCyjMJH",
  "key27": "2F6LYf4WyXdj1bPmDDTYg6BShWR2DQA9nAKuAAqYqCEt9ynmoWvsk4PcW4FwW7Cu9NMsXchN3241HpvkSDAJJEVq",
  "key28": "5gNdyd3xXsyjP5VZxRhbWMwucFaMt2SupVUjFdBKCsSyiP1u8gwto5ECXaR3H3fPreeeBF2JD8Aoc7tKjPSSwfcy",
  "key29": "r8hEab2oYcYDnhEnppS71s8q1GDdN91zFEHnBguVp41FtFanRarSWHvxFQUHjL3mPnZbHpfCgEoeHrpDttLPhse",
  "key30": "1B7XxPjs7VdpBW712pVyLGRAreZZs31o3xJZkLvYvp1q1NAcYmS1oM3n1wXqvnmWeo1vYBaKUma8ZKTYPEGzFJn",
  "key31": "21wsaWFh7DqLrF5XJoqPsL8Do9jjvuzsty3JFZ5aqZ58ebAqduAjwDCmrFF3UyaR9j2KzHiK88kPStgeEx4Mpyya",
  "key32": "3mNZaZDsh892CP2FxhgWWR8XWMFgZUQtFnbncXDiwo2yytSbXCiijnUvZDwHXStrtg19xtPErgtbokVmCVPutGG8",
  "key33": "57acBiFFiUBLpxkt1MbnRsWc8AfnYjqQLBnTCVfME43sEpwJGpW8EaNwDDpcB96mLdTzVtWeok4kBksgYWWDHtu8",
  "key34": "5PTb9d8oL87sQvD2g3E3GrAiuSiy4h16E8qokasxuzDsP2JXGhzhzTMEiTWWQERoWzfpohxeeJ6yypcRYfmpRU4x",
  "key35": "49z5Rxysaid5YRrgGoLpfaAHjTbbHRzxVCmx2ErCuc835JHWRdttjRoNPGiSW8mzY2ar9FeQpvkxPEZXFQ7S3RTv",
  "key36": "5eFPQzATZV1EcabxXBtGx3495GfD7y1Zreivu8dCnVg3NxpULZaLTCCDefaC7X3mTgN64dfFh1jniQKXydWT5EZk",
  "key37": "2NUNqVztWbFZkeSxMvqNRbxHjqYP3zDG9C3LoEBwr5EKaWNydjU7Z3bASZ4uyiYgtSqac9znUDdGy4XG4nKm4GsM",
  "key38": "2nPHszYPkRN1WSSSCAxN3YGSHnoKwWkPVsBXsH8prMiDHN7dry3WYWsrte51Ev9N9ssCW52djZwFwyhmwFfLHgZ5",
  "key39": "JKD5kXZo5AcL6iVW4sTZW9krWf2Sct1v6vNUNKSRgvby8CqrA3cs2fSM3N4fhwVFoAy5EMF39V4vJyxkYYoen1u",
  "key40": "2PNddN12WqjBrsAkWTpkM7A6mDkZmF9dveAKSQD4TvvPPr2ytNyhSWeGqV1CBtcHVyHksMeGXGWsmdTqjKowpB8W",
  "key41": "5H3M6dCPhV815618QigQFbpNMptqsbtsC4pN5vsuLtdbuoQXZ9TRvE1NNJo5zucKMYbg4fLCKq4uGdxjkdUnqum",
  "key42": "4JkqU2bHC6ULt8HzGCCWji3BEfcZkCsVXADcQEZbmrgAxwbgf9KsmqHDPXgZq3rinVV6aHLB9wp1e89aNVd4BK8t",
  "key43": "5gFZTK15cnaXsjsm2H93MrDpezjMSoWELMAEiQ7K9q9ATCc3wpiYpBQdx9KNLmK8o4EpTEvhFvtjn7GmsKHPusGe",
  "key44": "VjDrCLnSHLtRJrS9g4YQ4VTURzzkUNUUaNpD9ux6Wmrtk7ibJvxFvFg3YgbiM44QUUjauDCK7sskSDxgCSuycBx",
  "key45": "3KJ8CCcarVTZhoJQiRj78x78a7Q72AMGYJqv7chj1CZn4pZEhJLwkewVQK7RwxhCNhFfHRaiGMKenenGzM72rR3L",
  "key46": "3PeYUBuVTNJm21xibNCxfaFUFWnoL2Kq7zEane5y4Vsag3cpJYTLQiw3F5u4jPArsfw1mkF3EZrYCSSQAjGzVTGk",
  "key47": "2nd7sHLyGhHsAQHoNvuQF5jiYq2tfTc9YWJnusHLYm2PEYHRTCDEmSyTatCGcFF5475Vtev11pnSqcKynDAu2sAS",
  "key48": "3ujzyfsKXCyxS7kwUwxBeXrTMJSZwBBHAW6Zb1tfWNoxCKQPGBrCzzEzHiKouxJVeUxY1kCK1oaVd1UmmEuX9C6P"
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
