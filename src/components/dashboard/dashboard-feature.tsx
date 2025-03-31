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
    "3ht4xCW5KvHw9THoUxXTt2avj3CSVtf4pmpCnhqf3WwGoV9JNBxvQcd5gkP68J1YWvVEwrGaCe13SvJQ5Wa9R36s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UmMgeioHdUNad6Y6JVmQoHPhk3zLRCxvgvD6FtAxC6muTB6P9SZLXyobiQxUEbkrTZ1d1dZHPcZnbxmzD5ojL17",
  "key1": "2u3iSgXkRX1z9sf9BbBZNyAWkCbQ8Qu6ddUttgYw1vquUuQ3jFMCq9HiZGCJrfPVMFZBF72MZzemdCpoiKdGYgKV",
  "key2": "4woQDJziy6pjJdWo31WnKQocqofJtw5gaJS71HzCzF8S74jUbkzpWuMBr8gGDDf8egvAq2naeevETaarESCWTZCm",
  "key3": "3ZX93PYfZ5GSaFTHnkS5VjLV1owoPuV1JNmFDAR2YBBwedtBUUieubF2P5p43SFjmZ3HucYeffTnQhm88Ck4GfBC",
  "key4": "27ZsnNfSCFopLtBbeoAcb93PbbhMNMZtBy4QewCn1HCuwDDskCpk8RjL5dK12UnMGi1q8TF91BJwrvSXsohjf8MN",
  "key5": "BiDUDxADqFo2jPqU5HiiGsnKQBBa8uCNyzaR1xxepZRdJKybarTSScdSZPkBjNissbDmrG7T4fJnNhqb36e8Pyw",
  "key6": "2f1tt1qWGL8QBmyXbJsEEefh2qTZ7PPE5BSXomiDVwuVJRrqThAD35xBwpoK4nuX3NWrGeGT8bNXNhjJsH4TdKKk",
  "key7": "3NWw1w69m4Qgh7KPu7ydZtkdzXY8qGNaRykiuKMVzYxo5DAoD5UbpukDpKcfn5xDpBrkPeXXtSFtRvqVbNhJAZBj",
  "key8": "7i5W2uucZnh9mRiKNAVQnJcHbu9NYSogL6Z5nSRZPqtZuhYNwr3S4h59qjap72PbF2v2irVZ4RMjKxbMVPA9E3i",
  "key9": "3Qo1xkXLSx6FexjoWYzVdz8tN8NB3vRRqnPPE67MayJFxHvJ7VDfxwVJ4g9vNWJvWDBxAahXvqAc4qKquG8fH2B7",
  "key10": "qAf6u53dgs7DsvgNz1w3rqgnHceA6cbmLqqM2GN89k77rkhwAz51fKjMeEy8CX3msd27UfdVPkPYzV4oCZtYXiu",
  "key11": "2wby8849eFL8eJecYkvczwcaquKFXKxZayDWDsriBHRDLfy3LuhgjeDtCeSoNc5uxE4FDMAqyK8zqneQg8nFgZe9",
  "key12": "mGS526iA6FV4zA315Ui2LinWzVz5Gbyuucnb2gp7xPZYwFB2zbNNdRXr3v21CBPNZPvTD3hgEkZHxi6J8iEwtdo",
  "key13": "4mguQutMa4ipoMoi5hWZqmgBAFiQMWuPML5uMy7qGbWqc59iXyHkPwsYzAHZ6npthqcv8BUP33XtFBjBaz2t4DNs",
  "key14": "2ozBd2ecpCfvhf5R1emag4zUkG9jEcUxE36pL1LbHm8MgnvM9SB8CmPgWU7bUzsk5zL7q87X9TT32WZNW3Z7Bi6z",
  "key15": "2YuzoHJo9fVKawGdSdFonaz4TXxDzZh4Be61WpW9kVNMgUWLiK4muXK8VheebxW621EtxQMnTwfm9qya5ew1HXHt",
  "key16": "Z6BE6EWoh9XdCEgJmF8hkQxPC5N9911fzBysxfCEgYBQ3mWZp3LdY999akbYZS6ja4nhPirenGv3cAHgTAPMAcU",
  "key17": "2JHugvMTFHs18kHSkBegxy1RPqpxue5EbuWBJRL6FvUNxHL1ahYzry9syUETKt7bGT9gWwHSB2XUgdLUQsL1Cs6R",
  "key18": "388N6DhP54y5v6Yo911VkUNARRvYNFnKWcM7CJpkHbg628vUmjmWLmoX1nsjSiPW3cbs8jn1EPadFM4wPQ2cSy3Y",
  "key19": "5cvjtZBtykyrECwE9sL7NFr9Dkh3SUGW988QvqAzt9rUemedzuu8t8nfgXRFN3A8NmrgJrFSUCiw3UGaBF19BvEJ",
  "key20": "3DJwUTwv1AWBdSAzM1QSXkUCVZTWLs571XS3dqaK76j7HMEnVSjBczVnZ8Sc4kF8inZPetBm9NHymgskgTQtj7h1",
  "key21": "6192TQ2wVqoj2De7fxiojdogDX1AbaXAJYXUYYdFcAUjkQDGjh7RWdTH8uSfFhkoLqvtAZkSJxYhiAdz9NSg3J5s",
  "key22": "5Ubht7fdPUmGQbbsRTYSG4z7YphZAdbrVMHHYai1rXAokJMuMePN3wdcyrkBWGJTXnN8PKRbkWxFwAMdNfAWY5FG",
  "key23": "4NnFVTMLqwQPkFeseKgsirFDMLHxp8R21RzpL9bmbrH2KHUQhyM8taK5adF1ax2KsXXRK7GgFwiS62ann25tQhjR",
  "key24": "265yzjceeHhyMkmmU399PuLZgbHwAGaoDcuV7hMbCK4uSMB9zP8325YndYUCv21B5Ucoqom8GSehzTMTQzp8LtsX",
  "key25": "5WvVbxRNdesvENaWuK1hY4C4igCvwrcPwZFmgrAgArGhkuckJM9EfoeNppVSk76ETKE9xAVZJgw1Zj5GDaiYi1z1",
  "key26": "3jaYRQBMuviaPjvdHT4TcU9cEd2SJJR88g8jyEeM6it7dMmLbHa4DGTBNp9BwJQEC1zh6wKA4s9xKAV5mUfu3RJN",
  "key27": "ChhZdeEBTiDhN2CxPyGepxquGGMX9v5HE8K3hSv8gqRUCgMXE4SqtpZobfu3T1M4W5W2LKpnm8WMjwik49xcagp",
  "key28": "uzc4SrkxQKEEhnMT5Ei5T3u2km7FYCkQUjXmEKjRkrFRKs32dsg6xkVh7sZs5yfX8KQiw7efaCsaTtYye9TvbJY",
  "key29": "3uhRSzBEy17a4ZSyznNemcGezAZ2KJ88k3FJQt4xQcxLM53AkZ19YFCJBPMDkNu33vCq1YTcBEMSYsGKZMCqQ8is",
  "key30": "3BkZgYyDzgjVibNrmPghodg4bHJnnFL3gcuntCGqbjfGrYV1pC1LGu8JkeQes84sKC6mrCPwSw1fjMw9dyZ6boWj",
  "key31": "5CknyBoTmoBSVCxBSLHkoe8a2YT4vVHAdzTYdvp4e5EVQ1CoBtjX2tqFTLzWXamkp8CN1oSU2wbHgScynD1gaaUA",
  "key32": "5DybbTTyiXTxLx1KiXzrj3T19Ux47SCvNUcP8JrojtGJSq5gVqrLqFcUhkZvdMWEH9J9xuCbhwNYyU6qLPztDdyF",
  "key33": "36gvtSt99W9KQmaeyV8AY1MAA49tz8FjhAyF1dJEgTaM7VmczfJbhsFtaDEurwh7Cxvs6Ewoe2masUDyHHychTwL",
  "key34": "2yuRGtKYJNPBa3mxfkZfPoyduyWcSd59tqywMN8j2JjBNKTFDAatd8DAEUoQAjisVusCZUxewcXYJZjPQv2oVmFN",
  "key35": "3A7c6zbpKU5fsFwTBJPgQ9D1LW45kF7pwBVGUwE4mN3AMoSTjkw1uvDi3gHsy7BtJSrge4JWjyD6E9JXhBMZgkjF",
  "key36": "2Qqts9a9hN3ykVPGw6pnrdQcv9VqbvGDyMqrRdqFCrJdMeYNUhmbG29p45KdVaGgzy31LBWWRRGDQ8U2zqeiwPx3",
  "key37": "5xLB1efQHMKNzpETV8XkxuKaHQcAR8yn2Kx3W6vx5d5xsXH9z1mncFf59LNseWxnquRSYgwDefHvQTRcEqsiRTEu",
  "key38": "2Cicg9mjuHufjgqP6DFq3DpJpseFfuoq3WyemPkwzjmJCVKmAJyijneU5n4jMUoFsr6DGz6UDm49CDHenrDKeHNU",
  "key39": "4EoVWxeEnffNTwM8yX22h8HAMhSvyQZ6L9B5FMchmsXuk3SnqkEfutnMKJ92SqJN31QcDW2VXgmpP3kA6BR65F9f",
  "key40": "4oJx3wAmcKJCCeMNtzq8B9LjZpkiSpt5tHDXFufaEFwgFbSZ8THpR6BxPXiTcUaP7zdKqTbuMDedYnbYUWgUjmcL",
  "key41": "3QHavRZ6cJtyeAQXzCy44Ff6aHzCLVbupyjabsif1a7Z2UzaJYp6hCBpvVR85QDzZALzWMCcQaLdGyrQwiAGBwxm",
  "key42": "dfRASB9QdisUkgEZzeSrteRALRvBQrEjySXBDveZAaZNiXWLA4iS2vsK6FmyR43aiGbVvkbtF1WLpUUpyXwMBqw",
  "key43": "46XYnV1d4mhrFcMSYgZvzbpRE8AFhyMjKYEvS7aMfh3EUk66JmhEsJTFSJNqeWjAkoPSNzkXtHcDSzRqa2NU3SXf"
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
