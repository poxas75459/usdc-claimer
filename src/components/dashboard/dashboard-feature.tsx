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
    "5HaStUmNJYDcskdngqNyfHhp7NvA9d7duH6yxesk415hjQPL5ds8dCLks4TW5oUfycQC8e4ceSTULg8Qin2r87L6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HMkbYEMLutSuGQweLWJzoAREsDaqeJ2dYhxn9tiNU5BMzBqVKcBasT1bszgD9xZY2WF5AqBWajXUGzCBcKjxtvT",
  "key1": "bM8xQ5SDWr2rSi1nCf9KpcmJHW7EwwUs3P3g2ooFiVXDGWtEwxg6weYQCDZeqNjjhwxP5rTpfNBfPimV3rH1VVu",
  "key2": "8Ne7KVr971dZxKYKL5bhLDwgXn5m3C1qMRirwyxQY33E3RQVhyadgYrmbRxt86BgSmdNHTrWHyCQuJdZarMJNFL",
  "key3": "2SB1nowsR8XhF1MamxkoTPtvb3sVtjopQypVSmiY5KkSBJkYMog6tJ1PTta9Pdsmo5JmzNxZAqXwGf81vmJe55w7",
  "key4": "uyyhSGr7rxPHeFd3zoo5j11oybwwMphPY71QwMjGrBKzYcCQSPHV4vVX2eteYERycdEEy7ok9iuZiayijhGZvwX",
  "key5": "2xWujfZTgZNcQK5SvNDdNUpN3DxNX1HCntUd1qnh7Cu9mhjMXC5kpPuynkXyaxc6DWpuUz2AwiYPpbSioE3qgCKV",
  "key6": "3tMLNMY9S8FSi2LkfRxApezgeDB4ZU3nMTf62zdnhAFT8KqvFihemhqEMdgNF8cfwWKhD4qRcx6qmpkDY64bene",
  "key7": "3hfnotkAHNE5UA2pTfPcYnc2Vjh2FF47eDHot4XuUn2sTTrNgHfWYJfFCa1zqMKBJVj9Yxa2Ez7KPBPvZkFBso5m",
  "key8": "BTVpLNkxG9SgMWHKboG4ivh4y8as1XgzLo2iCZdV9yyt9EERRo9fMJtgWRimexfeyHwr3MN4qJRqdJga7BCrzQU",
  "key9": "31ggEf6Z96V2fAuxtg6GxaWh35E4SgVanhXXAJPXj4pUAki662yCaS3jLDDk9QaURM9mbJtTxbxKHoKpK77b6Ur9",
  "key10": "54ZSpFpJt4Fz6KHv25AECppF5ALguc8sfPg8LxLZfWV3TtkXheAi5PMhGnXsg7xnpFB2EAFBnRty41v7bEtNJH7t",
  "key11": "5kr4r7FJYJFC6K5yPtDmr4LMWLJjmCSXWdB1ZyuU2u5p5BctbG3bGSpgRG5J5ZEDuutVUFB36PpDnFcWrY5WhuRr",
  "key12": "4m9Q1sBXSGaN5YTWSwLjAJMRRTfAVnc22ugkGnBVxW8rsRcMW68q8NSPL2m7FocAqGWYQA6nSvkfBtn1M9fh8q8S",
  "key13": "2F8H6AvDCUMfgnFTpaNxYbiJQ1fiw8HtFyvY4NN67rTwZwsNsM1JTw3Q4SRoqGwfGRG7y2adnPbB38kbBf9xad9h",
  "key14": "2oQHr4UffQaLZPN8NAk5CRiznATf7MvGtNJWf1mBzET3UNrPoDW9s6YjMGm7WFHN4Tj9YTg9NUENGMR65UWqK48j",
  "key15": "ayYJdKjMAXAL6UmdZartwgHXEMcCnBLjSXsBFLonUYSj46pBG23hTn77Hc73RzaTbRG93Zz26GFk53wud9Hqcc7",
  "key16": "2E6WqLTjJgst63xSa2k85dycCcyzKTe43nuNMurMGjTW5y1angWBx2cJxkpPgV9Aprtpp8UVtnDB7SLfEy1FQstE",
  "key17": "5yYFJmHxEGWGYaTahaRU2D63pjbNssAqJ82zSPPugPxsmqmjfmXo5JWKFrFL6uorTws2ZN3pE68JVZ3KmrnpvNGY",
  "key18": "5XSiqtgQxFRnEZZj14mjQcdrJJE3VdkWojPQxKXkp3n9gMuzq5zk5F1udb9nSfaPqihAn5daY8cv5nF6d6SuyH7G",
  "key19": "5MRBZWmC7mrTyvdTEiBem3Ad6u8fqyr6cMitfuc2tvuBuJhpzLy7oJBpk9ysKUb4fZsgWa9tze8hkjiJWnBD6QNs",
  "key20": "5PDkXJdrM271VdRQcKYJb7WHzyFz1excJtcJ98Yap3AHK9547v6dseRZAp21R2dyv8JwHpcRcQBEvjKyqmBrjBx4",
  "key21": "5HAmVj8p1eGy5564cYzNDokcT8FECPSYJp5K7QJBDHKRkB4HtC91tKbJsUQNwBYfaHg2iS3E4dd1jmp79HRQQr98",
  "key22": "32T37XcRz4CmP6gRUnsmbNJZyXQYBYJ5fsWCXyFu6xssdFRjf85EJwm3MLEotjjWybbg9A6BRv5XyNkW9oHAeziY",
  "key23": "3kt1HDekbatWAvqUAwybpwv9cZWDhkQcGafS2ZW5ZwLvb6rERvESJtM7UBVYvrzFAt3ZeN6mrtDt54zXiPr6Lt73",
  "key24": "2pQiNefJnggxLqvG7UZQRE8DFA42zqWdq9AxBoPXrcZrEREMpf2ptbEBvHbTynPWkR21DjjH6ZjcTvccCPoE6Ci3",
  "key25": "h6BUopjGZte4rqPePeynJJ2AkTJpRbte6Rv5svBVXAtT9vuQMAQUyMyfJduxdktdajMya2ND4yNQjH8ogw1Zoqa",
  "key26": "LD76Ww38wAKr2w9QkHbSLNJL6sebVBMe65rR9R4ryvY4THB7FRYUNJ2DeZv1fg8qmVU6LhUzrkMr58hVGH3qqZU",
  "key27": "4ZUyPRmDUZNsXh2AEgb51wJVJ2BhqLRazmLPNASkDKVWnAi84HV9Jamv8LT5KyAHESrwgGyhaFQLpnBub1g54nq",
  "key28": "QfgEw6XVyowkk6e3J4i4E7yqCVev5Z1ww5Crfv5HkQwkxsZ6s3mG8JGzXyvZnjAk8BTAKBDQ8NpQfPLH8oEnjYL",
  "key29": "2sa8mD7fXfoFzn6vNih3zGtLDaZ1A2MjWGfy8PP71pUxdwty3B3QLtdmJdNSdAtQKiua2zoG43LaPjkbndnyLD7k",
  "key30": "3ynYUipCAKrpNcaYu5h8sXTkeh7mX3zxEimYgRHZmMoxnx4DyNbvvATw6cD9u9q3pKqVH1utZoegaRnmhpiQ3PpW",
  "key31": "4fJN2o3NTzGbRWq31gX7dgVQWSag1mqMd4TVx2ki7kXkD9zaYhAyS4Pz5CbkWXv2si1RLi8pGHBv2SUdDKEw8Qf4",
  "key32": "2tzrxUjUzYNiePyCiBRiS1pbvukBmDtjNf2N5nVMCTVmN3aqp3we4GEaodZaPVc1jzKVLvwubdRFoXAPjc3BiqWq",
  "key33": "2ndNF2m2Q6vRvvYQZWZ5mHFrzCZHJATHR7Fk5hQkhr3i8MEi7dDXJCQkxfLQf8tsJdwc5vjpKK4VnFaMUyyeGL1L",
  "key34": "28TCgaKyVhCKLHD8NXnxQYy2ybj347BRw8rQXVnWKe9bQttZGhS6k2fz841i9BNg6wej1A5YFqZnkyuGinQga4eM",
  "key35": "2QKEtSooM5tyYMU4i7WySUQzRKbdaerjqjEkPfDVVvACTn3nF8YoMuhKc8KsbLDjBGBaSW4QT5z28s83kzkBKqQ1",
  "key36": "5mta8GnNsn6mcScEp7qzTzU4PcXhhqGPUMGVPXbkejMUqN6UxNyCJ5wkaSusV5F1WtAzcAukW122QTmUotsytW3h",
  "key37": "3JpDA7MocycV6KSmJJ3wgMhSfZd9j1uuW9SuaW25g4n9Vc9rEoysH6rb9Hxd4z9pVt3D9tqfqSBB1WUX6g9hmLqD",
  "key38": "2A8uRcieupcpGZH9CFM1NkFg5AGxM3t7ggEtqMZVrRvYYLceS1PTANE8URYy3b5eTWpWZtZfRcFEBCssesDtrdVA",
  "key39": "kVTnx17x2Z4MguPX47UFtZLbnuUCgqsjKzf3TvUyeNedx5g95p5QzMq3qHWCPnJXXnDyDNMZiqcrCiejSJFRFPX",
  "key40": "2jyANNVNRMtTN7EfLdWBrcwsvdc21MYpy2SrqH5CjumFUvpw2enbRzYPh6f9Eki479LwGEt59ATLM2tezK4PTwKL",
  "key41": "4aSoscMXmweChpr8rmvyGNkNgB8MvZoRjEd8QsdxNmrHsSBHTHhUVx2hc2MYCAypCxzagWrn9WNt3WVqxtjzS2BK",
  "key42": "66crAYTEvbdpXyTLUW9ybE88Y6oRS9AvGEQxFwHtgGrGCMoB1fzrAc9VUp9DL9me1KGPjxEvcnrtt421Vh9nKzSm",
  "key43": "3d7Lswpd1pYxv7ABSUyfukmKzMJzVGs4Qo3vdJXQGjXzdTiWx17keesHSH8nRMw2sQsXjwwjMtHisBA3ueLn492U",
  "key44": "3CoDbzzhY8z64CYpTfiJwFrmGJnNSd2oR6nSPhZndehEn8rS439HH9dT5auJ46SrVVAuSWEoV4ohSmc3G8tq4juY"
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
