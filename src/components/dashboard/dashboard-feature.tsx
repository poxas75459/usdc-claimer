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
    "3bD3eYhWHCqyhotvVSYuQNZKq8Auk4qcSywqyg8JZ2BHYeGqE4AAaoU83DuMJkFau1z65DpJJFmUjqxLp8cFh4KH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4piwEcYKzgH8JZPa5weYbo7FDXxj5bzXoL7fm1f56baunvN1s3bpKhgXdxt9chs96GW9zppHYr6NFicxZXaAwLHT",
  "key1": "2cc4CUYgMwkP585jhgtUcoKRQV6TzJytC5XqaS3VxkwFi5etLZQ5EgdAzQEkq2wuV6dgVweGGPttMRFEavaBYKt2",
  "key2": "3uGccukUWCQHh9BLZ6ixuxjm848QL7fCnNnJ2GBeDHtqbVeQvs4n2mx3m2s5n9VyJ6xHRkeEpUXiEow34jk7vCsu",
  "key3": "56tg5kS5SbQjNf3CvHiRgzsmMF2AWJj9EB9RmcpPsGVgQBo8K2mXx4FWxqkzcwsuPA4HSpJKPYCgnLNXgcTanacT",
  "key4": "426Q27H7aT4V6F2PTdERXo9NxPZVUs9VUXTQbD96qd7JHnFF159wcDba7gndatEA8xYdnrpCg7kC9MH7XWgAGuoK",
  "key5": "5wktYdarLa9siqMnKxqVZFaxxPEjXs2NbALFC7f7GrQKqCvnRSxpxPsvXD1Zww9zeZXP4ZtwzjBJ1QxAkoSAJnYb",
  "key6": "3jGqy9YUAs6DWzaNsWdZ3RxVvFpmm97aL7FMEcGuUSX6pTifnr7JRyEqW8F4S8F6byN3V1DYVosgSGkX9p4fyU4q",
  "key7": "4dehQde74bFqHjmLujUSq4ZnqCc9fZTcE87egpG8Pnxiu2CoaYG5vhJsBPofHMg7Ke6pEWh1RRKGcAYtLzDKG12k",
  "key8": "2QCNKvDvYN6pJomKnyPaYcfM9pYgbg2iXuRPjGeevy1VF8ndjeWhyQER2yuUGp216uwZjHhXoaXdag6aAZbLiduc",
  "key9": "3brPFJ1znM7RcxTwgNfTo4RwFRkdv2qHmysUATe5UhhKHQs7UjZYESiaxkQHarKvyv8pJB7sFyHKhvApXopnaUcc",
  "key10": "4LyVLNnpVK9SAK7gxggemLJ4xHEnTkq8jfxDh6RC2fHGj5sWfAScAkfVK2MmZ9Rxe8pHiJkMF3ERjtR9qV9tacbi",
  "key11": "4pXZR7Y1c7wNYS8t5gFDXHX5k79G4ooYH6SUa41Y9TNeGt7AVhsqxXEKnV6uYoRtwLrY7vGSiZZ6n7fyuH9mgD3U",
  "key12": "3vPey2GrLAfc9Pm4wXbouwnTZ7abEor31oi25bhKAUsjRMGmbpgvVEVFANYEpiuD9HwYGP6FQvuciDeazL9LZx2H",
  "key13": "vLo2msbSrcYXWfMoruWNZ3mDsMPSgLWmecxjrc7fnvmJzqpMgDb76ha1iypiRjybXRPiZp1UXK4iei2sMVgRLYk",
  "key14": "5Xz3XCzfXh29TkmYrwnHd99N9J5PWuzjNM5nttguD9Ci2n2p3Av1ZtCXdD4ABmoPTivEZRdtPKyoY2Tj7nGRwNB1",
  "key15": "4Zrzdw6c2EokKTSAPAv8BkweayqxrM4nQaYhSDXu8k4nXuSYh9TndPYzuXyKdgCAzHw42wCUrDKSt9TPyfzbm3tP",
  "key16": "3F8HnUZso3GxRXSX4z3urVYUcozoAjHyho1bWWCVhcPWxuu6hpP4TEiz9n27WXWYm9SxVU7FHoEyfbRt8c9AmEZZ",
  "key17": "ymtsVEzLUgbMF2ZXQDpAWph8F8GxSM91qAyj2sWA1D9V1fpyNZ4pZUEBHPDf2jtMC1AcsMkLKWB8VLk8KCu6QtM",
  "key18": "3oS7bNwmGXEVPVCod3xjFx2yuwEZ666GvMpwLJpWUE4Wfg6NVT22A1gqfFdCjXkRfy8wDqfuaNvk9XbLPr5dopKo",
  "key19": "3uAruo1UQa77srhRE91dj4bMxDF47dmVQAeVW28dRruvcPYa5M3SAYpWu4ifE26ctWcyXAcQZcNSyMMxdBD9PjJf",
  "key20": "5ZLbMnobiN3hVo9yPBiSwBsT4r7GRJfHfk8NQHhLdGDW2QydXr5AKf6Ur5QUbH336FAKSjTs8uabPUdpWipM5tiE",
  "key21": "4yqAP6n9cpq3qWj1cfsvxZL8VXMjFwmnzQrXLgFzKtvM3MgbRV6NM5Wi64ZvNGJghowADt4tVn4ZVceWpwLjFxwu",
  "key22": "5o9JUhPLq5wkA9KzQvgRbYMLTvm49nfZkAWco5TQDNFhTXStbMwTx1X1xB1pXw7HtkMYm19FCroRM293eSboUeZn",
  "key23": "4mEf3Kk9NaJqtSex7HmLK9vW6znYWHbFAbkb7BHTANtzacWspJ5q8CD21BUfog8HCWJwR4h5ZtkMeS6CHPCf8XsS",
  "key24": "2bRDm1NKqWccudsachoJsoyPzR3cs5AHMyADtBLE5aSrjPnrkYe5JeqnicARvnYpsobWcvbJyxdsAV812UtYswNN",
  "key25": "2XxaUAY2H5tbioLMSuDNret7uhH19C8xXEsk9933NXJoKHNJSRxLL7Z3YPXXCzGYHUtyRcqjD7RYdtpYARhWUKQE",
  "key26": "4sF2RL2Fy3Hfdo4tjr7PKMXCeKgbRa6efqmKWhA8wCWewMPC2VTJM8bECuPbyHPdBM6MxeJnzhi4GnwZFhDAFCNZ",
  "key27": "47H1PVW7DeFqG6LvumjgXbccEXrE8XSeB6bcKFQtqmFWkrXrDP7ZbxQJ4KBos3TggG22WVathzgworjBpR5DVudB",
  "key28": "3w4UCGLH3RA6DpAjvu8PEpvrAf8g61YYdt684Jp1zpbb4oStTY7z76yzqAXkoggo9Tx8JEpxz78ijnhY9T4QYYwm",
  "key29": "3QTfW1SGrfiYje4mUZNER3XjgsBDUn6W3nn9GKiMWNXQFL4REot69ynUZVDEnpp5PFSMC9dE2qvGdjctbw3ptunM",
  "key30": "5Wbq3u5AALsmiDRSaQvuUFfdYvtYMJf2L3U4JDkY7gfAeHGJLkZmCkLVA5Jv98zJUdssPm9jHveW1MkZd8goidhx",
  "key31": "4BKaYKN8QX8ZWEui3LUA4T1EnrFL2afuq144dQFkNzVkwX5Svg5cbzagYCXXHmFbtaYxqcW4cmSNL53hMGqz9f2k",
  "key32": "3HBPKD5KnHHDQmEJMbFPEi89Fn9CADkUkazYESg1nvawrJ8iEmv14ZEN3k1fur8p4Dub55fvPPBcYbTyG4L22jvg",
  "key33": "3PEx69EDSMTAHpWTkDZtkzLLweEifRmf42mobGSZcV7TMUGnSYhkPhwLRSvD8xyv39J9rhMjG2oLeGkX4qfS4Kyf",
  "key34": "5d5wKdNkBnra3nMUMguFw9PdWA2Q9KUJWihYojdoqmrzyMofVuBczdW1EziYf53VXAu594Nde6tcvfWjM6HkFyKK",
  "key35": "RZMQw1hx9mTJuRHAmLX8zC4F9TN7L9pmp87LZo5LZGc5GuumJwBADuU4BHhbFbkM2djS47C5ijtZ8T4wuJ4TPYs",
  "key36": "2DaAU9b5N8Y9iqM4tiA5ieX3YbuaihENncnhL2sEf1ieQeazE6kTYftZkFMf5KogdqczxCUWh1VZcpQGfrzToEjX",
  "key37": "3SfGPBZ5dVK5G7VFZ6Kes2qZzVQBo5xQBvbsKSGmbWedTbmGeczboZJCQJLrNBx5UGTiZf51HdnKTzcSpZfm9jkg",
  "key38": "5AVDd2GmQ8b3TZcvCBC8SMEs2xsdo14C4SGgckkCmkqYuMTvugxA7VLfvLGL7MoPh7UXUvVLrgtDi3MUjroWRGBz",
  "key39": "VBViPrgURabgRE1qh8ngxt2GQAoYNRiUQViefWHnD4hM5C4QDsghss7qW1QowR4mrATWEkcghFyTB3jeq9jGaef",
  "key40": "4ndbDVLh6psvZQrDSVDWC4Ljw5motdXCydjHTXPxnUNbDaczYmLiFZpeYgPrQYkMZTafu18hheUTF8aekmSfegNG",
  "key41": "3JKJ6QRUQ4UkNXsVZDZjnwfQ5cdBgfNiJH81gX79qpqe8Fx5bFM7DTmP937adWiSf21hoXuwnX721W4VSiFB9JVa",
  "key42": "3n4A6Y6pAPtzcBazo1d3inZxGwk8NP681sDoCMe1RRNi9uqXnqiiksBMhYhm6jFfLisjFtWeHsBzn3gcAFL4zvPw",
  "key43": "47gshKK1dt2XMY3wLctjrzLP8kjbz83ZncYBKN1q2FzAZc6QLvi6BdrJ2jDGkNzbhY5gWmdFfxutfVyppWBFHNbc",
  "key44": "JW5mJNcBpMtWHBuHHhmL2C4kwrzpmXjdw1DFurVdaqrLtpiwS17hVtQVKv4X5hmQPg7VvqzYizEaDHZSgVHoLT2"
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
