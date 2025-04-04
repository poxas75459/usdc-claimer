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
    "2wFN2jeMMZEtFYhbqiwfBtXLDQm9gEUEDRofoSi4YpVo2erE53Ro7AxYX7FGC9EAd91uS7A2MU7LqCEisGaiGbNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eeTRYAefAe7gSANrfi5qVQRzph6YdJs1q197keRz26NYY17pTDXWzzNjEybR9NhMb1vnQoeJTgZwZ4xUpnCWbER",
  "key1": "5rGvFn6BWRB7kPRYqQYcYGJu5YtvBVMDdo89NnFo2SQU8K6wSEq9uW8bzL1zDK8134EpKHgnWNCVsYzf6F5BWgzQ",
  "key2": "2m34iVBoD74WsJ11ybGrZvqSZ7y1Jmfyj97whqWm5UqxS1KnfrCAC5wBrKUU4zVKFjBWKbnvsb4Cwr4kPysP8XnC",
  "key3": "5mBXfKM3hGKSQeSBAuHTwUNzJVymwijKRdgSF6siP1Nd1Z94n7kQdgoz71xN775LDuUFoDwP9uKDhAMVwXBRPhX7",
  "key4": "n4qR598PLvtMEGL9qxBxoYa3EdkUqaPqWCq3rQXh26skjyz1k79AYq5sabfNujQN1Ghu5sLxUxqYtmYEJi7a1aU",
  "key5": "4TsvTV6Qn8uXj4dTf4JtkpqCan3g7QHVt66YLvLmwGC4BYCuwNq7K5WRgeRVQgGbYBKGu4M8WapVqBMUU8JMUzXP",
  "key6": "5rZxW2yVs5J7dj3jMJiCFu5CqVNKorBWdPxabeBNSuXvA8Zo2Xr8oNyh4oKnKkYxsMa4uBCKwKKRrUBF826LA6wc",
  "key7": "36zHZDXSrsdb4JCpWeM4L3XDAGnPsHXKGtTv7frixaVjLE36PVXFEBGSkyQaJJJmDQBs65adKi2GYUbSxdsLFX9k",
  "key8": "5iyXK6FaL6Aj4o7Hou66xne6ZztxsdrYSy1sGRw1VqkgMFEpbf9JPU4Gf5zu2Es72MSpkPLMrJwZCeZPPp3ujYe8",
  "key9": "3RDvxSLN35F9NzPmtqhbUaBZzEGorpsR9ChGPqwLNnjHoTAzsPhAaNfFqxhtKXYN5ekDydPKf67yhrLbCmrYk4P3",
  "key10": "2S2DCpiQTCbibZA2hnxE27baPDK56QYJJvYGh52WMZdBEECDNufB7XfjaKbS6e2i7czKHSjMWEdPepZ65QY4puse",
  "key11": "3UgdqbyGnKgU6KtzL7cCJM8ps2QAzmAacwTndHXh6sR94uWjyDDECfxfUYHCQMBed6QrBtoyuurucTqTSVdxLQ5c",
  "key12": "4eSZCXo2h245DFefKdZk2PEKK9mQwLReQd1t2KbwJX4M5L5A2nRdHD9YFSVo9GhzjskUGAHL6vRFvc6vW5thnTVf",
  "key13": "4VwfLLDagmJGCS1su8QEvTwmg7Yn8Dud8ij7g1h8RqDJpNLHT675TRkzfgvUkmRRk6NPZnCgDWH2ru8r646iKs2D",
  "key14": "5iKwqU1ckyewsfCcZQpHjRKwHYA1ECjnra8AEBitE3hWNcf1YPzX2rvfguhSdkGqdnfKtmjoywmrNbM5g95Ju38Q",
  "key15": "4kykX5yE4JoqVP6Maat7DkHYisrmph2zvu5LbPMri1CfWmzhF2gbue6o9ZyJBECdYhkA2a5zNmNapQTMdRiD2ETb",
  "key16": "5sqVhVKVkSHcFig6PCJbLCkZLXurWU5PGuBXHnUxbDdYccFJPmdbrBEQ6sjRcwS8eb1pSH2CBerQLMw6R6yqwF9V",
  "key17": "2qo5szoehR5noiVrL3xpZid4Ui5MyT7mX1V7qQKid3i6DCJLU6oqhMCWqT7ANNmnA3iPGNvQq7YFYkFGSKFjfm1M",
  "key18": "4knLa1A17c9zeUpHzqAuFRDH7gLsctj7wcJUjAVrogEGYR1pwwBzLju4BrK5tCu1pp51XzfRKuTt9nw4xGUbyo4k",
  "key19": "exsmygWUfTbkfBMoKHfqoSVr8pV6wzuJprVbTAKL6CaRf5JGp17oH49stMDBzX3DjPb34CR7BxNRwmr4tBLoiYc",
  "key20": "59cPT2W1cmgKokdjYfQcQF38zoh8yUbu86AyrymTYSQff6X78mT2SkrJyy5XdycYxeZUYN2qtNucCEXGun35v1SQ",
  "key21": "xvNYwUyNNq63hfUsgAqQoKUnEKQVegUYYzJcrwhbZpuBJJ4dFxmbVsuALbqmmpuCDysYxp8GQm32H7WZuTipmrp",
  "key22": "5ADYoFWeLmFgfK4VrujAhjeVzuoc2FwBpq4vuEM5AbRwBU8KX4GRBKbWnGjKRXMA9kbeCcpMQvq7FmCHS2hMjgKz",
  "key23": "5ABpdCtSsWu83q4Yd448KieckVZTqjPtjUEPKwvqJZhw1PtE7myRqkBT4Fy8zHiTfyAUq7Eyv5jgqjufUDGw8nWt",
  "key24": "3pL5NBZocxfV2a3rq5Ls61XzXGW7fP2F6j2QHXrKHxNMNjtjkN9bNDgzUyGbHHSUJ7RmQmyWAtGT9gRTjcMChbrN",
  "key25": "3LgysH4RaLX8iFWCcaudJWyGYtnp77hW14eqTP2VvHAPr9L62yJExc1TZQUhPoaQpif5xaFXHiv69WGrvuR4t9aT",
  "key26": "54xVceBFfaKJovP4aMp7NUUfAFpUwKt7A5mCbbRSZmpC7eJryPeBTsKrHgYhUwiMV4xLJdNcfGAnQydA46us5CX4",
  "key27": "5FTzcwax34TfPp5ecUrhJT8BKD7JHjRevH9jcXGw1kjBGGYggv2etyW2FW8VE3tMB2cCrxVA1gTsvKyeCLyGeRnr",
  "key28": "P5oTRRhC7yFX1sC3sQ2FaKRYvU3RDmny7rMdGZUsURz1mBv97RXaaAAjsANtK9ZFsUv1hZ6dXFVwpdn531J5juN",
  "key29": "5G8UqXujKwfotxFzR9v6csNzn2qfNqSoRPtPYgx8eTuzjGR4SoRX1RCiyfuTKCokspWT7o6hm4txMgisJdH14ngP",
  "key30": "66NUZt19JJJtWYYXzAjHrz4XTJfmdbh5biZPjyuCGq1iD9mzUNpMGMRYW5nNjfQjWiz2Lg1wBVQniUSrvkmHMdX7",
  "key31": "5FJEqmQqXiyveRUTFYAfdZn1orZ3zyBYXKDRpsHYhEFRBsyK9X6UraLTtgHh5b2hXciYunKfZVemvuoHoPH4JNAj",
  "key32": "2KXECuTj2MCojrhcG5eLHZKz8oJ5MKkCf8QvwpT1aUfN3n8kLpGbWqtbSqpmKs5v83M4SgpZReRB6PHQKrHo2skF",
  "key33": "2ByN7Qbnw3YUjMXMhyZpRG5imN7XMyutFy2pdGar7VrveqmPF56eByrz1xseaCm2Us9ynMhty86Av5ArMRrcjoNc",
  "key34": "4nADtioLD4Pe7U63ztC5LDt8hjbxyuygSDc2FKuvT4SpDWGbTPKtxsKbTtJer918XphsrfQvqXubDv8jxAB9SBHw",
  "key35": "3pEeav1KTcRuTkd8FcEJENEhzngJFUC2DSocR4N32JxrdUGrijiUwpDayfuRfJuqqQEGLAUipiwxDPktmRjeDDoX",
  "key36": "5mUVeNxf4DzCwwqteSnqtpx8aBDvTq6hdwqhBkJ45TyLRxeGG2hhyGiKrwKfPbtkd8MmYE8EY4RL96kdUyiNVf4S",
  "key37": "5YQkNyNULDYsAy1mHpixzNQdgN1gyBGryFdayYhHGReiDPbUkYQnb5AMxzEQyZGEhZVcvDBsa8jvckCHb4pDC7ch",
  "key38": "5cCjZ16RxLy3nPDPsCFqjzge5BE6gKqvXdDNL2eWt2Qbmdkj6x4p9q9M3sYkqUJAKBPTizB9PCBcoFhT3qtKYBQk",
  "key39": "1eiSfxUKDwro6tHTiPDc2YAZGuRbEaEqDc8LL8CmVsfog5TYJsCANgSwKKGsa5SmDg1oXBxwRVDx4DycXyRpf5t"
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
