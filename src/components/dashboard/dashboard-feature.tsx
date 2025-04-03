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
    "33asVVDsUSup3fjin1f3uJttEsRuoFermV6wCx1P6gshL4YnAsTttLx8MZhmgXL8jqCjSpeHrfwn1VX8f8MoqAfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31jKjKDjkzQCWP9rypeN31tovnUsPkVYYg2LX2TotgwXZa85G5r1EWd88nT55uEp1Skcbdfsw5KU81fCJ4ZaXPc",
  "key1": "2EwLrU7Y22AM4pjknLDDYiJ77NCQBET9Vc7f2qDoLX8ecJM6AS68ogTkHovhPSydoCpByhciYohqwNQuhosqnj3E",
  "key2": "2seVShLCMEpYB2nHMfi3t6qgVeg3y4XUqQZtsh6B7xUbHqW7H51MN82orj94vs38VucK7o4apcsMyKManfpkhD6M",
  "key3": "4JiM3sftsn9xgHy86w6jKUBMuB1AQCQtRsew4a7LGBwD4kSeb2eR44hmQ7wtik1T2zGoiJ8TxDJvqKvWaxdgG97x",
  "key4": "22p1cZZ1D9GdHHe92giEMsFyBzQrxdmnQqA2KLjpvS5YnUKextrd7GZuPhdkDfhuxc86gAYNDL1btcfAsLwAQA1P",
  "key5": "41FzGF9kzo4NBEaF2bGaS4tAFwFqF3uHsDmHrHSQfiV7Uh45JU5kdPehZBKj6ChysZNb17ZV1zTPycPEApCV4MoB",
  "key6": "3QufnJf5MVsS2v9BMS3Np7rhWCbnAYRnQVGGdoskPXg7HVYhbyG3VFEq9PQLR7m5LCb2rdcHSyxeEyB64PERmh6t",
  "key7": "XUYYcu3wVRFt8tpHtqV3jMtmyRLBm7hzgtA5GQ7SfRNbtqLrKVmpLJQWaisgXHWfq7ikWgAZF8HguMfKuh1cM2r",
  "key8": "4XYaa4oCKsYuN1eWCcVjvkPjyGzjN3hhhwPNzNx4RCub4tigT2f3EbTZFqLxCZw7uEBgpAaS4aAkPq5Yet5z35wo",
  "key9": "4RKpLTpqwMSvHG1qEDGjtVvCVHN5Po4j8SxkjjxWf62pmdM7mbMy8ZousitBH8dmwviBTtsEsaBDf18c4ftuQH18",
  "key10": "RwGi4EQyag92BJDQKigBrnRVMjGU7j4tsDRjWqUSenyQrUyDLCvk3z7ZUtpGrojVBy1qDiHN9tMSRbE296d3sXB",
  "key11": "LYnBpjwXGSBpnAWqvSjV1qEpbcKs6Ke49RwMC98oqQ3w2ZYzEXTxFajoHuu2Vwur9gKGSaCyA8N1bbAo5gxhQGc",
  "key12": "5NuRqzTj8zuvyX6KandBt1ajGoz5sCjhsqNu35AdGDzxgkJroKmDBhWMxRMBoKFsiCzgnJP2zas1GbXZM7wqxgWR",
  "key13": "5zj2srvP3CxmFPLTyUPzEgRQoGschS8K9upC8HXGNTKR6ApA17RupyuhTMr8oLPxHHFnv2qWCfFJzBxEftdxtvBK",
  "key14": "CCv68mhhj69sHFpCh2jr3VEWpNKJfgw2gC9KNck1QXY5VHJP6aYh4NmiduXMR5f4wMdECNMM46sxfpmGHM7Ze7U",
  "key15": "2TsJSsFVk9x6T52KdE3UZD57ZeA3UzNJiwYKHH2REhDDHHVpSyVW1mz7QFuiY2gPLLFwEe5ydDKCXSJfHUnEKQHG",
  "key16": "2yTdpqMmhXCQcdRQw5YG8jndvqPRKPz7gEcVUwJNHVGcwCFRynCus5eAEnwDHEnNNabmX1zz2FQVpuAtEWM8QHxG",
  "key17": "3PYKU956PHisXLQ6SUbDdoYn2KmAHZor7sA49UPtNHopbJgv3dUUx9jWo8ucdSTdYNBrT5n5gLgxVi7pQjZ8xBQX",
  "key18": "4BsHheb27VMp1cSaSe6U2B6B8xuQgapPED5LHEPwPHJZUKK1LTcyswgPULaJAyWGQZkHNSL14mqHyeXTXLg1BUmN",
  "key19": "5FAuroRM6VesFGDkfaAmVmsQsRTJuLq2GFGhdiFLG3wJTHFiypEFAaiT6XJKe27wLTz9MaxRwTtrMZFsjGs5jGM",
  "key20": "4K4EpnES83znLsgdzubhaH7nTrsXKExTeU8b6W84a3rtUGXtfQDZ1zSB8uHffMqdjDkSLKcGLZuckeKXK1aH2DyX",
  "key21": "XhBqKEiXTaswf4j1s6pESjQqoEGNRPMxVTahFjWoS97esWdjEU1RUxE1Vevzm2uHdF5TKHUQ2GPkCAvXagaA2A2",
  "key22": "5e9cH8o57dhvYYhTmgHpvwFRuLkm3d3kb1P4wqwPFWpt2ZUeFhA4juPLyao11qioUNbaTQwgio2YJq4iTsFao2gR",
  "key23": "3fCwy7ep6jRcx8QHfFj2fQ2ybjGFnUppTb9v25fFcEs7p7CFZ7KRGLwcQqH1a4KKgggN4ZVgv8YKEFyh9eKsn4Y2",
  "key24": "NoAaWfwUoFg2A8AbDwU19dUyom4JL7JB3jJowsFRjTZmR9T4Fj5ZULRNLEGrWMhH5BkHo4kfZMVwqGdtXEb9P8f",
  "key25": "3LZ5vCtME5yFg2nri2uCCqjvvntBuZW5LUG1S7tQDVkSa9twnpoR1fsdNGKkJovWFpGJUvahu6efUUGT8sS5qXFr",
  "key26": "2pBEXUbLt99WkjMUVDr5bBdM52XumpXyfLNhNKxuVMBhVqDfkUDaBwA4Lbxk21jvyHYeWnYGpkRzPamWXGhPiFkD",
  "key27": "2GbPCXyy3HnBgXpFxt4gtM3dKu6cgNrTtAYxD6raS1pYqkgfHbRBCDqiVLresvSfZnjHPSjGLQPoXYaRuAWnzaCr",
  "key28": "41nwSNPDhKQ47nKuvM5zt4brri5ADWkeyczTfPf6nKgfCU1KLofWa42UkuFLAie1pYJ3Ai8SQpYXrrg3GkCZ6d9v",
  "key29": "4PHeLqYgFi2EUZdFSSDrJYcSkSeqHkGzfdj8PLSMVez4yTY1t5h3eNF1VNAa1Ry96ER4fb76SHKRDUf9wDiZvz55",
  "key30": "5XY6avdzhJYnrCypP4xHMbdZ8gzLaepu2L52Qoz7EhwCJQsvfDtQ78S4NmDvCQB7Wdj1cei1NfwizryBos65Db4j",
  "key31": "42rcc9Dw3XJHE1wycmKydoS5zfCLdGRVT8nGk4YwMM9kLqxGXhbXsdE6SpboHe24Ek4hCuvHP1Ep84MMNsHndnR",
  "key32": "2v91W4qj5efkQ1HjkxvE5q3W69o1GyGZd9rX76FhmBbzv37w8hjBmoCcAJtdSY6dHHcEjwaejafTTPr4jvS5gWoY",
  "key33": "5HedVvQLZkqQe44RVefERyiujhr1fPT2qD59arWxLGmBR1eKtH6Hob6W3TkZhkhrkk9rsQPd9BBA1oXqTnyciEnv",
  "key34": "57mBqMAfKtPYULUtfyYnbyNSvnn1ajxpBoEXP4M8EAncfjtKMgwAyx7oWUwGkr9C2bBirnDKeLBEwYgELChH7AXb",
  "key35": "p1wCGosvAzMCwc1EApwfGsjBQkARQjnUr6BLmoKKuchN1ubNaKcsbgvskccMngdGNXZ1J8Hv7199kFMrtPCz4Vm",
  "key36": "29KJFVEH92AitrHVzXpNpVgLCnGB3h3mhJuAMuGz73uUbkpXCMEmfhwA3yvLW9i3624KDryCw7vLiQVErB3TS2gC",
  "key37": "62oM5agGf9pbP38Lg2kCMHHJTP55iczk12oAB4TqT4BpJ3duL6nzQdyDrHD4KEKB16Sn9tZqQbHVaLP43PRqGNz7",
  "key38": "2vm3TJnUU83BRs3RDVxP8wx5XqnVR1C2fsV4hj7GyNZzNuqgGuSuMPALSRDSkq712c1YD7FggyLCkKMmBh3DRERf",
  "key39": "3MWt7mw4jXnotWXMbDkuVjj6tWBA98NYdUdYSroCcFLcoXGdzfNUfDNT6vmU5yGH1Tgro9bFuCAMcisPN87Utn2o",
  "key40": "3xSxBsT6GrZcz9zFtNLQNWYvaahwHwLfVaaBB8v9826qoQzRACUr4Ard6Vq57ii4g2Eyr3Gbs64XEDWqUz8mVAt9"
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
