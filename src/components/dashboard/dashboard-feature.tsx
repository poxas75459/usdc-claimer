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
    "gShnUyZgh54QkYNy6LwKGYTv2f69Tu6jkxcRBG2YxQtJBUeTpwPmeqzSZSUeLs143KMi4EvXauoLwedGhmevDkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iFS4CWazX4s41LNURTxmHyFpXm6xChpEyuSP7wuXGjtNbwoZuLpvkrxZvtMW9uWTDckwdvWLBBTA2uMdRQLXh39",
  "key1": "5mb1QJocdqTyAvHtag1MD8wM1s4itEw7N4qbPMBGQ4VLwgJRr6u63Kh1To7y8qs5CDPadoKSFWx89BNRd3JScrGQ",
  "key2": "4Ed1BJNyRMurUZSVCzjF1MzJRuNy5G9Pf7hfdM3zjUKoQQGbtmn3bbBy77yAcX2LZaggTBSWbFU3ESiw8xC27sQW",
  "key3": "464XxiCrC2FoKL7bs5CLgZS3LafRarXLCV699TazUAkFN45hJ3eucRHxw1yWZdTw1WJK824PZUrbBc1HiFGuoLFX",
  "key4": "2Mfhjcixne8qxg8w2v29jCmemGJ8vb7mnbzskf5JYPexZ65od4aP44bo9CebJwb5urhcZa1oXz9rahjwmyNhCT4",
  "key5": "59jXcD4w9XZYZQeuTrQUjA5nFPktYH5VQV2RVRNSKo1cYXDw61xg8n9b6SaARGGN3UV7KPP5UYZG6Eb6HMYZZi1x",
  "key6": "5NcMs8ZuyogKb2cGvfmCqnQnYsw9X5TzQ1bvBawCjrpE2KDWEo5GuxgCcYJRvum2VVvBa2v7RdiDKZwAxvqrHLR8",
  "key7": "63jcsBq6LiHHd1VmXSD1esLPriBLMBjgYiVrfRmmCvwS5qroL8BAn4VX3PfGn1Z76jQeXmfrw51iEmUzsdJ14gRj",
  "key8": "jMFH7zxskwBnzLredvBKa271VDnL9V2eRuu192SDq1Q8gpyE2J12CgpE3nKNRuiEYG5uiyzubZFHNhGyv8xG5U3",
  "key9": "3j4fPxnRSrqDYL49YsUAts5gmvJv76yYUSEdzvMmxMRpukZpQ3Yj6Jmqyjq23uMX9VyxsjZt7JsA3EG4m6BJbFHG",
  "key10": "6261AGSohaq7B9iXFVCypjRdx39eHHrbhLHAPuuZNjV27wrBonNzxUFRP6WdZF1RRaXrXWdy2jgH6fKmoJtJ7ERb",
  "key11": "4oZutPCx6Gt3o6CtWLS1F2aiVKBqFHjs99TzytHWtR3z3Lzpbtw8ZYmhVqMNBxRdXEuwWrtwodbDwDFRPfc5iWd3",
  "key12": "kUbFzz2zRMCbuNEE9Vm4uF4ofEvzZL62zwJNtGH6GAtmirbNQq5pbR89fncrX5TEnbvP6ALQVMLFndmPhzgwRub",
  "key13": "378TWaoWB3Y2gBjhajnh8Gsk5QLUvEPbZiCkWYrTcFR8ZA1uDH8qKTuujbJFz2gEuH43aDpmztYCDnMVWE1kNuvT",
  "key14": "G1dS4WcH9S9tedtzeWMQC74PYgCmaACmKVGYRvRL7932DLcqsrX1hVX2ShMR1aHeWyy3KcPmzXcJjKPQmCf2V29",
  "key15": "5U7jhD1D4HWwbBGFftZoccGmwHukJNGrFexfbZwrv65kQbJ7M1AnafTz4PQ8PoYMfm5SCwiEcnfCmjZTCd1F8oT3",
  "key16": "3CZop36wM38PxPVJAVBBZYpcNf3NeicUPBrbF1QRJv2isyBmpAB2GAwKU5hnVAJ8MuJNiPeNTG3hkiD9Qi6LVmzk",
  "key17": "3V5ZcNY3E6u7ve6DFQpqmfkV9tYo6obBkCEqHLf6Ep6TwRWveqCG4Wb1eMd7boKpf4woEqXLsjWgojyKLdo8spg1",
  "key18": "5iAL2FwA24mde3gorrTb5j2rRaPSAf52ZtvBbgmXuQBpaNnq4NVcZgx8NWrsFeXAaX7WmvyDayoYmXSmNiK8PFvn",
  "key19": "YZ1U8sehAwHqoTbtiGphwmzCQ28V8p593kyApLn7ZaYxMAbH1CmMt1yxwj3mhac2khiEUKGMexYCcGyqniv2W3N",
  "key20": "51STPNXF1FEmMKzcptVYKargYTKd9cd4Pp3sDeocXdDNE6ZCGqGC6mJAJu29RevGfUXhPAjAE2szhwfmgkJCqQ3D",
  "key21": "2L9ZqRrVSyojBbkDn8yijRti9J1MqsUqW8WDKeAz1EyA1Dcweug5Gq2sDbaFT6yUd6FZ4qL3TmS4WWytSLWEaGoJ",
  "key22": "4nihLwo3DL5naodhTKfQweZBHKUHH7YUNM4TvRNihxGuTPvfGz1jc6W2E3zgy8tz3RMKoY3QuuooapXxWMqofocK",
  "key23": "5BATFBPWDSC3ncGZ5uH4Nj8JtQtc5Acx4BVRRjDGidcAExL26fJRaeDq7mA7CCxxpEbxfPffXu5f9XFogYHPVgm7",
  "key24": "5Tb9EguXicxRbK6Nc3p5EtS1bLSFoHLyHtZHa4aV2ptPpsT7ZxWy9c4noqCUu2oDmWsKoSyiDume4H9NVGXoxxJh",
  "key25": "5jHJB1Vhgwnr6nqSFqUS5HnGyud32akQCo6XQXjTZMWUKh6WaoLX9SNviz3iXx8vTHjfk6FWDNJvE7WJEpN9bE1z",
  "key26": "3Bxufejv15yP6itwYXNTXpw3WaD3VefUHotjHV7UkbMUD1VQYjVSk2Y71tYGBpeb2fP8oXEZCbGRttdNB8XcnMrz",
  "key27": "5NDrSgXJ9KwZJt46Wu7g91nDSfJb5As6Zo1KMtnkVZN8KEBZ2vRpKxcaFtbhVGEJCdw2cbnCGMyzduQq8daUDEFT",
  "key28": "2ddCd9UsiU5eL6yY8VcAYfsx8CyKpx8Tdccv3NeLb9b1YgW8j4iFfBZdcvUzw6H978g98YbZ1QAGYYHveuQ7egWb",
  "key29": "2UkpMaBysUAaaN6H3nxS9xNJfYJSZ8dSGzRMphKorzQTVQwoJy4cZ3HR4Bb6dM7NkJnJKkFba7N8JW41BXmr6TYr",
  "key30": "3c3pYsUtJJgbvgXMnuUM8KoWVsZ2NBadzKM1cFNEAZk4NekszhD1UmRWHneEKHCHvf62VBbbQoEEiZGfpESvKioa",
  "key31": "2XxZ3erT25UezKotrMEtTpRawTQ9eiDeJxiqEWNnHCPuhRF4f6vwZ6erkdNZWmpAi5L2yJS6LkaCwQwnaX26tBga",
  "key32": "5DZ6vUfjPEpcGRZsghRr7Vk77MGsaRdN5fTdJx1Pa2h1UjCG4JAP552AzbJvDdnzRLSciyA2WiXUrkQd2zh42AXe",
  "key33": "9G8noALRmSuDS6PCwKsoXhcuQLC4hrFRWNy1KeuNVSxPJBimsqisKGT8t6dFahGemWfDHQuNZMGsTCvwzDKFmzT",
  "key34": "2s3S8TFbAUrc4czLhtY6fNnXM6khGj6EJfckCXZn8BEbRTUvft9set68EmRQH6LuBZcV6xKuMDG7q4vNdndE6NFe",
  "key35": "mhB56z2h8BP1VhjQx7YqrWEfZkeAGFoPamMFGrdYo5Sr6TGXedHMMoYNAw4XJzw2xhcoRbAzFDYQyukq6QQbPXq",
  "key36": "3mdicfneryNwrJ7D1DQq6QvTcJHjyanygqH4LQnSVxNf7vD3ZhkxAffjxqqWjLXgvFVECkMsyRfCYjitkq2avHLh",
  "key37": "3C6VSnwdTwoXRrHm9ayWqBrKXCXbfeLRxFUC946BdS1rRsx3JyvkKyPUmy79bddeyqVEgAn2CziSTUs9N6Jqxj7y",
  "key38": "54eGfVTRhqhsd5crN5WoWcmbf72vCr9Sh61s4KRc2fvtY4w4JKcEmWfGYmXyd7kxUCMXRjHse57g8LjpHeLRnfLm",
  "key39": "5VG2qyYqwtZjZhTiKGraofDCpFf7sUMV1ce9xUA5Zi8C9regR9bpdwvsb8ML8UnFn2cwBfSrXgQVUwGb6oQ9uV7C",
  "key40": "4xo3R85ddRrmGzQK13jq96KiFQd79s8aLBbKLg4Jx8hTTbBQZ2nNYr9KDFdJjEtfcDJAAffhmnye7cM82MQKoWPF",
  "key41": "5rcHk1GwWmCmVefkLb1m1CQmN3QjEPtwGeCxZRtbX4QZyNjpgYGXTEHHcphSfZ43xauKtFym6HdzvD3i3j5qjrc3",
  "key42": "2uSjrt5hzDQebN8WtVuZouBcTndhqUzvLQK4bB9Q71S8epTedrBdfEyvmPGNQECpPBqR417n3YgBvsQrZbfZr2uB",
  "key43": "4zdomqgb4z7vwDxJbV2keErp4tiwH7vJTYMbcNdcb3E9GDMpkNjur6NTC79FnUW79VdJTLRNKF6dhf8gjtBTGPXj",
  "key44": "46DMCV4DvTvUisgSUop4DzokSp1CyftBcd9jdo8oNZbWGSu2cq9QDmFwaMwDGVJCWcamGK2DGbxBEQZg6xnk4HTo",
  "key45": "4Rsij6ACRLesVheptd1vNctyCTEsitjHTCtCBt6fSrrk6V4wwFDkQNpeBnGmteT3iQSxBNrjfaKD2CGenu757dkF"
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
