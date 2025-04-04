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
    "64P3t9ZeQQ3h6Xz8H6aJB3FTeXk8Uamt4RJRhZNMLcU7UKRiv3E6peofMCgHsdA5B3LKFid37Xa46GznRSiUeCGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zBMXYDxPR2yJxJSFtrA8GXtXSPVfp1pDumb2GuJaeLZhYUUpdvsVZT57CSwsdYa9XDYXL557eiupnFtAv6YTncW",
  "key1": "4GeKEHniUm6YcKaNM1mFUXQZVBA9mec21NEzP9ECkCX5eYyXWAfPBmt99tjBmc4NTJa7m2oi4TMGGPMoG1ynWyuf",
  "key2": "5nveuNb39kZU9ZVdca5s2r3SSYX65iyTCeNoq1VdvhoFn2Dg3tC6enB6XugxZchiVYTfdsPEvmQC672vTzVPrrzN",
  "key3": "4wfrtArp46yCMs7YqwKhGLXdrRzWYa9ehkZpSsubMd2CDYN8JqeRtKQ9Ee6eW2DRx62NuqEKTzxbghTy23Ko96EZ",
  "key4": "fJRWUXofrkziEKcY5q8y5nSX5PSM5UCGXh6zDoS23yAd255p4Ef4TMBX4A5h7nVxbdhsKHZz68HCHPHHNNQTYtd",
  "key5": "4sBfRZBL4zngDEDR8P7R9SEqt2yXbtuEddyRnV3dpT7Gh5qc28hew3WoZmgyF15NpYUzC4xfTPt6g63aRRUpPhxc",
  "key6": "4QipTa479e7jdpZEpgvETWQRcFoGnLZ9v2QhU7FX7KUFQEG3dEeF9wFcc6D7NM5zgkf8zZtgFfmjZqSzHghKJLjP",
  "key7": "ryRajrGYv43cMt1kwf5FjhjaX9TjmEMZg2PtvNW1C6AQbRkjjmZDVnfU1QH3vNmkFAic2ZzGDw3PBAvLYSXJnPG",
  "key8": "5uXfZD16v95vGEqysH9yk3QYavsFGDwazPr8St16ZkaiYDf7wnFHxwKwbRWwPYyJgnQHDZJxXoxE8koCepHzqVCo",
  "key9": "PrBKLTPXoFVsd2jiRSn7dqTN4a194rnryDM9bs4eBFSDCq7ANp8cZwNrEfEL2hK84AeQZ1a6dyREZmer3xgCXzs",
  "key10": "4Gr8U7QwBv5rg5EFCfpXx8x3UyDoR5EacBAbKanq8nSFocsr6gekJYFQcYAs3iEAidP6jtNpNkKD1Fw8SkiEpKYo",
  "key11": "5UAvmGB465WcqPzGZEsUHfMQ9Q8S64ivRzcpNNubUh4DxUkXAoMH6rdRFV4Rt4pomUoeJFGKVE2L4dxqtFgz5CBd",
  "key12": "44kQqjF45tM73GBy5u8nLLZUo5B6rA7jwv9YqohSjPq9rMtNWMFLG5DfXdfrBfssd1aRyPY21pu3BFgvgLQiNAPv",
  "key13": "8sagL5eKgQWG2LjJwGTu6KfkAdQbKWEaqYuAGh92UULrpvmJEMNZbHSLK64dEAn43GWrHP9b8iySjmZsocySgfh",
  "key14": "5xox1qS9ge3557KT1wgAob1hvrjpgr7BJiwu6w3S7KxsRkQqSwRoqu8FgHoD7ZPnfHF4UxyTcA3WSfT8Dz27FpXx",
  "key15": "2FeSKeX2KM1caewS9jrohjy9mgTLCLgULcgsteoABmB8SRYru8zPaW23tXqhfZf6fUnrBwiGZ9t6zguUVX9aGjiw",
  "key16": "dwJzQU7pd4VJmmUbtPsZ3mxDF5Wv9n6PZVyYxMDDuGAsUXtdcmURuBerFLdctjmich9hKwpdJMo4wYNCSNzLYiR",
  "key17": "436hFW9QBd3HFyETMHBX9f1GrzAiaZTsV4BYrYmEzCow7btqsgCHm5KGNeGYaWvYGN5GXcVdPM1MW62rzUvvsumq",
  "key18": "4zHDXRifNUwTg1RH67KQHfkz2GiUqrBQrGEsRjyH58Vj9CNk5s9VYLs2YbEgGmsDhdFTpzv17nBvaDt498dW82im",
  "key19": "4AJGvZ72DRSVNfW5VuSkiEmFzFb3KYZGm9dCxsxSVrgRPsBb4ErPuCjfynpdrqyysogfxLBf843GCkKfLdzQCQ2Z",
  "key20": "4fF8w9DT1ou55bGmcuZwiWjkrkW3Yh4f6fyRqBGU4ic4uc6DWzb1xvtEZGDk7P2B9hE7wn4ruEFv2cpd8gyuLL4N",
  "key21": "4gQzXJhv1DuSdJAy3C6jPy84qHUWR4ND9sqBHDmuNTfTchYfBggamdTHDwfweMo5DRsuzNmhyLNNXsRudzQFAPd8",
  "key22": "2qtXPf9zDwt8XrXeG9tiPMCkj3MYGPn5CN361aowDCNQvfnFonmzCWUrxqj1yBEZnfN7Q2Jr8PBsfRRTx7fHzTSL",
  "key23": "2iNEHpDVq7RNrxGr7fMHKfP1f8cNPcRtZK43sbL3Zb5vAiL5sDkeghxTDzXf9Y85J94SZhgG5V8gWdVmzJsuuzsL",
  "key24": "4qrQmMjh4zL9SZQ7z2GApLEqqBEsHg4nnxVkjmpsNReUooohcxihDkFpCUCxB5KpU4H5uWrGTaHq83VeaxfbHHv1",
  "key25": "4W4kbAYmPAt3hyStKgxX4vmy4uaLijjJcfkLtNqRwEkprYUES5Sso5YJNvZXmr8SmowtU4o84QKzWUfLggZpwpNr",
  "key26": "4fTPFfB8iNPxjxVPv5caCPqW9Dtyy99SZtcrawzBxqpyHPf1eHYjWLuKFyFVLyZccJ7AKFfbyqaJ4Lma9k6T2CfH",
  "key27": "51qu6iJ2RrKQZLGEdeogf7mZRGQQrfqruUKqWaewNAN4adm7gAUpwN2S7W7ZiqjmSDMriD5YWBMRQY53FxxfBQwx",
  "key28": "45RJ7QL1iS84Qe9KBZxCjXfKzjuBiJfHBSicx885tvsRHhygxhnokPhwM6H1CQxcd5qhMeT9CC9mnuJ6SNK9wVSt",
  "key29": "64yZ15eUsKDz1LVJ9NhDDyB2QKCEigzd427MJkPMaA5HEJ842apCzNf8ZZMhrKDVvKWJ2DZ9k2vwbEnzoBikr2Pw",
  "key30": "5qSF5R2EUpzUaGw1TNa3ZSybxL6xgCXppR6LM6oAKHBcQU9kFftLWzxgNKphER34sJidYaiAHnaZmYRL2xNHysXm",
  "key31": "23ApSVcgNqDtwLtz52uUzmxXT557Jr4FQRWJksZhCGhNEuAW5i1tE37GJpAUWTHAVLQFu69qFYN9dC4yoCqtyYdw",
  "key32": "6K7NQGPhyThUVaDF6cGANpwGDc1AkNQAoryT9t7qkD8UyGLVsn8de4oHRKZLAuX8oZp5nvyGs3nJUTnjsvSHECy",
  "key33": "vN7UcPPrcYJhfXz7M6tZdxnNJ96zfDwPiKKPpHeaXg11fAuqLZTHQABggpAGoaEp8GGnwngJKmrBmWobryQbeno",
  "key34": "2HSoEVFtJi37E7W9pkx4iEu7Yjvhr6xSfyQuaEDwEZ49XMNGM2NHGZNyDk1u6kthGxySEo1m9oujmpzGrDDujbrF",
  "key35": "3gWourRWBvkUVxpu4syf9MC7VyTZQ9P9HZxaJx67RCBQx12rtKa53aQA6n4D66dRfuD9cbvv5iS3G9TPNu6BJZvU",
  "key36": "5oCGEF1TL7JEz6MUnUmHaK8YB2yLc4ASdtLw6wFycc2NqwW3ihupgjSeoicbPMUP3rTDpreds8NCddRV6iEXbFJ3",
  "key37": "4H2JHynxaBVgDtt9JogfwQKEfirQudbh14UaU88ZSzr2v1TTyEep1dcuLFbRZUBSRyNoQnUCC5kJFCsppACRaUsK",
  "key38": "2Kzn6LHueN7vJDaEo4MeeTFBcpzPqFmHCdb1hYMG2m6t8CdqEnZ5cPNSAKay7wKCuzrgwsFwXx5zY1fYqUbk8BX7",
  "key39": "3VaXdjJuUn2wJy8y2J9FCQKyBRzXNYJvESHdMQxQU7o1bcG3dPUSP5ZUQ9tUz4L23QZi3dJs6b19PqQJma7A1xkY",
  "key40": "q36duoGF4DDDjvjiQFmg4bPfckB1ecuT58MKddsywNmYzBEQ3Wf78xFA1BX65okP24KTginjQ9TPjZjfE3mhXew",
  "key41": "4oa1M8TdtbdXrCk3h2vGE51JVMG7cwmca5Getgz9fKRhQgXHjECimykDvFGN34TJJ5r8Btbor1bi3juzNLyETAdt",
  "key42": "2Lsbsbi5kY22MuUVgpabJUMzaGPa1RCKBzK5rEhYJk9nfqkk2xVZRWKzeg8GQsqnJSUzJvQEqHZwqvYGRJyW5nyz",
  "key43": "2kosKtc1f7Q2Kno9gBUtiUkTWEVY42FEfYBqVyz9MHyqowx1M6C3trxHAfNqmaQahQrukS1M1LstFR2zUtDJiKAF"
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
