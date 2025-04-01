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
    "2e8CGyDfP9m8wYrrzSucjuXFFE7EFSgGVDo4megXBAdrp8Enq4ETHVyFcQNvLjhDWaaq2jeU4y2C9LATRzKgmSWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UQMzYq5xnTbhe9dDrStsduAjnJdmyTrB6MmytPYs9mWvkqziFBtwx6yQe4k2UjQtpB4wre3q3YRkW34ZoFsgzC8",
  "key1": "2QZtutswc5F5VuDED1xVXExo2r5vzrriBytxbmuEfXSAE5jKtVYZuqWoCg3yobELzsBJUMxw2UEncHtTQqQ61yvq",
  "key2": "5za3zdsTQCYLmNP6ncRGpgbT7JXqefFux1xyrdjJCks3Q2tpAsRL9oDCiNHDBQH5wFp6knCtxjm4b8jjvTQmyS14",
  "key3": "5YM7r4yydZjNhdhy9EPT2YsjLo4M1aFrKoKsiSjzA3E2RLhtuxF477SS2ajhZSQzxVYJyHYMsHnbm7acor9a5Vud",
  "key4": "2UnYGKySwwRnVRY97Ta2WnhGiuCQS8fedVbKa5FY3Cx9R37iS52Eet1SVKPYcuLkrqUAifDKdMFc7SrjhMLFBxQ2",
  "key5": "53grENFQt1v1ScHYwqiMUKUM1dgQvb345LmaFhc9556Q97wBsvwfKHmdQF2xyY1oxifzqEzkYvu6aUcxwGBZwDAH",
  "key6": "4YecM35HeRcNYbeizkvPQdJQhm18LNr5rhYLKUBcyz1ozVavWx5ARRbi5o2QdjdJv6WF5QUTvttsNxTHRMnEJzG",
  "key7": "2QzpKSn5frTSZjMJAR4mbxQibLAWNyoSSfJb9jm8AUDDZfgAo2LTDLm3ASd42jknnVsm6H5ajR1YV7RXvSgaL44X",
  "key8": "2xxQAaG2qqJjdLxDy1arpg1ppgbMTiqiPRnxMSFFfUb2KwttcxDZCsihu33QQGkgY6qc9KiGcC84AAqF9FewvzfC",
  "key9": "5hPxav1A58w4pEMdxBaYiSdVSCFfikEuFUWtNzivgSfcD8ZebZrHdWPzTLZsTzETB1zUDCNWUzw5YKLPbzXqvnh",
  "key10": "5VQztufdcxAAZUSaeiqEKvg9fRwqtARYAJiyHpxEU4dYyE4oHucvvRQLzs3QKxmpQ2vBTEzm6iUKgKLewUoXngzD",
  "key11": "3m1tante7F3a65WVYF8Mw26eYcsYVp5gd4tNaHapAmc2NdSyUBm2wpaSMQEeo5VpbfgnCDHHrzUZxkFNR1Vj7MBm",
  "key12": "3yJjU98GD5isaUXf6ynnjcUD41LTymVutUtTtE9pMASNzMzmexixYQ9Dt4mdZiXxyoBQzncyehaA8QDZhDWQZeWs",
  "key13": "QsZ1XEWarWn5jyZLbh1EKpZ7nnmah4qJNCghhfCNgAELgkQpYAKnNWFHojKXs83LeHxGJbDidTsDjiFo8fejdT6",
  "key14": "3d5bzPo6brJUChFCYr7LHS5sC5BH5p9HukFKescKezcWhppyWSFcPQyhoFo9B2JZ3ag8h2AqWaw1qRSRgshFqL5s",
  "key15": "51Vzv9fEV2np6XrLfx7WpJcjvQ36KHiTc7rQAUxA9G4P17vAr5Y8mQeBWzSbTptrd6YgxE5P2d68sWLyUCehcvNM",
  "key16": "39PuT4hJGCMEA9mAssGGDbeBYuQb6BgqytF8DT6qjD8AnMDSU2YSiEhbNRWBeEjirck2Cp61H9z44UXekysTxG5j",
  "key17": "5eFPu39oURzQ8NiiMkqQiQ5itxt4C7ejQEkKXVafWihBVMA1HpEnd6n4DS2kt9i3JCTpeT923F1Qo5PygfzMwBts",
  "key18": "4kJQe152UnurrkiHRsEvCrkhL2vudheUZep7cuL8HqsvafHUULikK7AEyFAXqJ6iaXapkQD7vqiqqKw3WyRgnhLt",
  "key19": "5Sr4KgenSuZShXYqMRGR3GX8V36ybMfn5rKG65ZR4PcFAYHrzhsWX3PmW5ApD6pdQ11wN32FPR9QxBjpn36TJr2k",
  "key20": "2VjBMP2FoPLpE1ELqnGyKykfMA4RxyA7SEJ55EV192LvUebGVVRXXxQWFsky2uohR6bsz2ykNPrMQzcs5G2zpy1W",
  "key21": "4E6QgizSATtm4Vd7LNn8ygZzAzhqxmxq8CwL2EfdE1Jibvy5nqb2fpvdvEmqNcdJvay3p1xpeo1mzaPUxoFgTJf6",
  "key22": "5z6iBL51fjnbkjgQwT6fQrh4R7UXjTfUXEuJGy5SK1SecTNJSJDZaL4qhTnBqVmsDHKttct4AVxzJHEhCor6fR7J",
  "key23": "4Y7J6uhSKvdaqQtyWVcshPvG5SBsuQy7jhBwfjJbK6ZgEByu3xC9YDVWg5HATrzpVKfc6xfNMLu9794tximWh5Hs",
  "key24": "5AGtN6CyqrF33zY1u1pAiXqp5tFYM6tHCDcr8bz1aTBYobipBPxoBchaRc4NSXsYnwyiw2gC8Sc9Gck3VX9ZS64R",
  "key25": "7rWYpXw237PVygDNiBvCMCC81oVxQua5HcwoKPaEZAYA7Yn5tSmngECrUQ34kXBJ3vKHYZazEaEcVC5VXxD5yC9",
  "key26": "4KbgPpwfGp25qV7J4tZy9H82W2sj5RmYiS6sRg2zHropsyBPmwkQFYkqfQ4rvAkeqJ5bZfq9A3kH6bD1uQSiwLKn",
  "key27": "2muVJVHAhHdULwGJzZAnmDT6BMErEgoTxpqdKikqCzywaV5E1n1mhiRU3YzZ5MYJTdnEL2d6qQkBxASM1vd1SPhy",
  "key28": "5fZSkaNWx58tceckxcmJapDDZHKUwEPSXSGPNCxSrLxp4CfDFqd4jcn1b8qRm1qsa3jBgUjHT9isJnVchgJoQWFQ",
  "key29": "MmSbCPrr3YaRamNaCp5HY4J7qzN6Du1x9L9hTAcPoXaMRB9t6ves9Tzc3sEYyAyQx16TJUCxHMJYaLWqaG9AKc8",
  "key30": "G6Leg2TMkdTxPG12C9xhqK7j1zMqZA7SbAga97ZMPYCfgadqqGAwhRcZr1fm7t7jDyVTFoMktS1fTrGrfHWCkDi",
  "key31": "2TvMVYggvNp78g2apaQSbyTiGvde7HinadyKxCGZxC4qHeZbYAwV6h2ch9Mrr8Lh9ALC9MC8Nfezo4196UMAMhXa",
  "key32": "4oXQVHB1TKvsZyHQ4mvaXoK49fgrbRHwNnDQjboyeBr7ANhR2HgoeXkW9oRxcpkL6YzRsi2ejEGPoeQC5nWsVmH",
  "key33": "4JvxBEKdpt8C2HuC6rBDqiwmaAgxoUNZDKPyGFLcBZHHLkwTnN4QHJ1V1b8DXwut6r9K7cgKTxUS653ourw1dKWH"
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
