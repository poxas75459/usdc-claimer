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
    "4UYSEHWkgCaD6thfECR26v7Zww4524XRw9R3km2zgfyPqRA58byCDfAXyKJ96H45gnjWutoA31CxWyYqaukSiboX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k83PPTBXSuNDZR7ce3nBaZ3s2jqyTY4dT92kzK89mCtdYBKCRuFqFUxZ5sHkBYXKibUcXsyCkrS6EW1sQ4uQbt9",
  "key1": "gDypUTDEb7aSf6hjVFcNEi1WNec6uGc3TkVJGphNGq4fEsDsoupEqrUvVBA1imEDQVrNtHcUiXW5ic9WqE9gVVJ",
  "key2": "3DGB9V3LYXGav5QazWF5a66vj8y3PK22SkoRN9gjuqqrjkASZAJb4hqEUd5ukuiVQkcom63UbZButvbQaj24NVn",
  "key3": "FV3WtE45PkSVX2F5V8LS16AHGczW9XW8fJqhC2CS9YiVd8wpeMJoWk9dnWYnkgrtSPeJ6bGCSKBR25Qtc5Go85n",
  "key4": "4L4L17d2AG3m3tu7zwS8wieoXSAcW1GXBm2GsoofUcF7HYr7G9CVEfnXXWN1E1W8XbuQo9f8PR8h9mGRwBb8eqEq",
  "key5": "wij419zkyavjvsBTxELLygqq3TMnixJ8NyVepDrkqAoVhCmbrg3Ev4ZEEJSQt2Zgu4XW8tdCahU66JQixZPFNJE",
  "key6": "DHnvACMBzAt2rXb6Q4RYkw8YqUQb7EVaTWDfe6Xmgw1V324w3aArgC4G9kN3rxYvXqQ1hYakibmTm8SxuGTnHnD",
  "key7": "4wbUU9GG1oqcmn6XKjWSC3bE4FqWuHPE1JcmgjHs8beZUTU57NCDVuEBDtVwGNCZhWjoTaGbt9C38pDRySzhCrHs",
  "key8": "4iYj6GEHQRjtDthB93brbyxpqxKY2UVVGMYS2e2WWTj5MSk86N7SgjDgpZDxY7yatCNA7t5eti7kGeemdgCo1wgC",
  "key9": "3vuL4oRXE8u6thmyRtyCpxHBdemxLTvRcusujoYZYxZvNMTNvLwZBZWVZGpPfmmvATnwke32E6bELp7zGSRhvd3L",
  "key10": "3135tJ1fCzmdGp1o8nR5Spausr71q5imAf4ViLkJWCyWiYfyj2augrbLZ4QHN9EvM9tMfCqBsHCL5hajMFhSy5U9",
  "key11": "49T9BJ25UyHwi8ethKzc5mRkcFeyLp9y5Nt3sCNHU6di2tcJbC4twF9JPdDYQNpEixAxS116tKCYYBGka7ApUws",
  "key12": "2uLZnR77sQP7bDeF7nEJLv16iGWWfgaj3viovtiQrjvBeQfr2m3xdwsJaPCDNZJrAsaU1noe7kSW92VjtGjZ3D7r",
  "key13": "33rGiK6rDAJ3s1bM5qFUXNWybtyn8PeKDdfR7Qz6iVAdKDQQgJmyCpeiUHHvLRVSQrZQHbWNybftkhHMiKsVNng4",
  "key14": "55Yoi1zU7WqtcqP3qqqzp9GAuTpjqEhNGxR3v1biJtsBVcestbjd8aDWAhLdxjjH86T87VLeesEzh2XVPgKq39U2",
  "key15": "2Dkyj3v7uJ6w4WYHTg7uvoo6Dupg835gdZVLFwwQDJ7DYosjSFSa7HrTsPzAPykETp6Yz1zY6WD2zPXiVEHVhMcc",
  "key16": "2envm3sUrd8uqmB6bQpaAkVykfPdgGx9UD9nSi3bYkRbUt3T68NJu1875sgXaXZUiDWUxGn5P7j2SDqrnKiaBLaS",
  "key17": "cnQNvcqpkECgFHvMJETkoNaLTjy4bvfHxYy1jngS5YKGACndzsMVyYAX3JXkVkLVwiP2RZEFVYb1UeNL4eqdBXY",
  "key18": "4Dpt17ZniFbvnur1x2Wz9VE8baJqiDcp5L9u25nmRWskAeqMcQM6QYYmwcVuPWM6HS6hjAF5KhEa2HER2swYf7rY",
  "key19": "4cqYCUBW6sUSW5iPUNbEaDwTHD73uD147bU7H7MiEneAi85D84cWoNpJg8UAyd5eX3qngBjBXRWX27wRHWSue5DV",
  "key20": "3JowrYqdAawHzpEZodLNu7n4ioxCsohaN9VHsw1UbUZcPhgV1oSGNAYo2r6B5p5ZWxuw64akXCyju7D8X6Wf6dvp",
  "key21": "4pEdAsbTo5pErFGkneap6WVvnxjrdqiHu5hMeQgqYicngCoTsJ1gz5CEFquj3WUgeMb2ifSHfAfMGUaKxbZNFxeH",
  "key22": "3UZcQ6XaDVpfNtWSk2dyaCf1xfGakeKmvn47KxxtrNjsyYvNWdkpCbDFzhS1u7qi8L1BjtMaDQaf4mLRK146sUbM",
  "key23": "5aTXiHtUBhLKA7PU6LjizF4VXs4QSwFZH6m12C3TgPnRk3yw8g2swxj3Mty6PKMPTCZyHuHy6oku67Mt1ugDmwXt",
  "key24": "4aRYKkb1NVLdfRXhbaX9UdWiGZKAAeYzucqRgVV9VTGLMN6nF5bWXEA7BHMpR5mSUREwuz92vSBBdKChzLETNP7A",
  "key25": "p9QURhthBk2aKJ7DbAahEXk57pS7my3ax3VZn6tnx7y6GRM5bPhinuJm1tsQDbJf17ZQuU7Am6YFsc3N7H2YZ1n",
  "key26": "5ZqtSkCnyTaxtMEq6UhqHChY48kmuTvwsJCTDDHhhiD68bJA68Y7WZDuxUKyCW1omEnsmCgP5f7pjeU7m9upm8M7",
  "key27": "4eLY5K4FyWbCnvDEA9ogJ7TXKJ292WtPeso4aXbia2wXdNuVDPuzy7seDgv16TBDCo2Ax34Yq25cZs8ju8knoWMY",
  "key28": "5KgaSxokX5W1pqEVWRLbwCwMKgXHYehJjNThGV72SWV6415pjRhUytPU7SUhCNojZSsPwTvE7mVxqUsZ59eCFuGv",
  "key29": "3e4biakZxqdp7Fq66tQHA8orrGBw9pgKoA7Hr3Mye1BYGx5NDaLMVHsEqGtLBuoA7rBW4cRbbwZE6r7CszdokKRN",
  "key30": "2Lo8u46A2xmy2hkg535AxtaT6auEc3nMk14fPyFVU9UFBg3zEXgWgbdRhmbAoV261NB9tiy2EK4fMrLrmAHeJqmW",
  "key31": "4YpgRzXRjMobtqdMQnXxCmqurykwnhsbCMtLL3P7AcRyj8YHbfL5GNXZZERHNi1D6YrhT5MpATC3BTuMKQju3f8A",
  "key32": "9rsVWPRn17wkMPNJMhnv3u45GdXJLWUCZjMfs9HFEXYek8bSv41Bx32368bMTQmHXNFdiWsA91faD2tx6ZrPKJH",
  "key33": "3Hk1zMf7zkc5Pkx6jGt99NUtaPtC4THsSaDVok68cHuCXxkux1HqzCB3D8L9jGGdBSd2Lrj26NS4THq95Pe3VQcA",
  "key34": "3KwzzJ81wmWrsGi7vSgfprWVSj6yTXqEhMCPA54x1h2L9eEnWiJ413ScN3WeEWAezGojqvuR7CsjfF888tGZaGEi",
  "key35": "21qhYjAy2TemCuaLVzb6QqpCw3yKjP5sfP783UsVNcWK4ZgcRYm4tCnHAK4FVDw1m445TwbmVmJ5yyZBeZhXattk",
  "key36": "4ZsP8ytJCYnAL6MEURHKoMNt7eEsXthEDPwvFsiCPrQUGma6zSwEu7YzUZJVejY1BK5bZQMgWAfZQaG9Lw2xks76",
  "key37": "5KhzRwkuhds8phAja3BvFzWLZHFSgGkjJ5sYcPiHYsPecG1GogYjtWvMjypecu8ew7eHo6DfPyzaRNzN4FwQmvru",
  "key38": "29eAtGVnVoaDZ7jDFJdLHP6tZY5EeGytx2RdNBn2UmixqUCrKeoUGhpTx5qkEhEf3AEPyRBAGGbDByD1DQSzeend",
  "key39": "2ueqr2KyRh4uKAETy9Kn2fTq4c2LcF3JXRLLSeNHtPo6e2BAtKMjQL5ha3ZYyj8GRh7Rm45jXTPrySkPmHVqch21",
  "key40": "4kvThaFZiLe5ynbNt6Dbw6HLeLEMuzTYsodLpER1QgzMLM1TJDRUKfmbP82SefAncjsQnshuCbEMuGy1AWdKqysN",
  "key41": "eVJSTpwBzpApYbL4DAvfKJyF8yvjRXaLoYWYSRASjctHTcdPVhdNsy1mpPQUcoMhGCix6oyBktJPkVKro7oSkhp",
  "key42": "3sAp78UYdbdF1JQpotv8sGEuDNejg8S5EpnyzusDEGdMKSN4bdaWSo5D63ZV7Ps95ivUNRqF6hxe1mbggsqtC36u",
  "key43": "3uhUhHm2WK5e9AuqYZP3goEEdPYJZhqhdpREHrqMo9Y5ahde3qNGqGVTRq2oY5NwKtfcRSvn5JUEUBjhpPtxogqX"
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
