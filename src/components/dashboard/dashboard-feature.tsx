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
    "3VAaqe4yNp5Qu8djRn6sz2BYSZbLotiGFF35MieA9N8cSeGdnLNxcxb3yKgUS5LGUh1zpf5cnWhr4dtzhUAfDvM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uopbsSXdecztW2B2LykVkc8a25CujYdoNhjFxVDrHidtLdv3uTrsTDyb3FGLyqHSheaHHCTAQ9C962sH52SAS5S",
  "key1": "5yaecqNowHYpcJAnjDJ5h9ZKSGuuA67ghtwMeHxxvued1eYcKTfUd6E4Yy1ArYgajQzNnLDRnFTo4hPay63xAJws",
  "key2": "KCMrv5AYaN7FjsgHwj7WsEvdaDTTPS8ujtn6ToJzEqPizSttuxwUiZVwCSwuXiNxB4vg7ZAKcPydyzGp5bTfo6w",
  "key3": "3gx1kDSAD9Wy6jLZQpoq5Qg4jYcYzLvx4pcw1hdwTWqxmzBZRG6rCvwBN7etxUFC2JHfDPRvk5CQMxUvNREScYy2",
  "key4": "55dtiNDjZ8sQqHHcSwTsuD8MNRLcDumQ8qvKV9aL9BxN6hMoCfr4XRoDgDAoMCESYGHXwXtVbERC3M7e37NXJMe7",
  "key5": "3Szcjff4WaMN42A1HdfqyiiLUMLeMfPbKhzyGCcL9u8fzgnYy7QXX74oZhNKJY6pshnZZgKkA6YY9dq3EFGi8K1Q",
  "key6": "21ip72ijkJYyukX1nQDXnUWfSe6A9xrNiZa272nyHjmrfYEbPmNDCaFfdAkFeri7edox2RwNupqhddyjpLoaZ85f",
  "key7": "3yGNb6Wrfd1qsCKvBpR6PRBjKNkt3MSjjuR46AFQyM8Cv85ncncjTWR54g7KNJhL3WRK7q6ZDaZ6c4Q1kRu2BcCs",
  "key8": "5iic2rHCLCKpqRBLoeB5jeimfqqxdgT2DqceqbqeW7mDwjvVbbMZTDede38jS1Wrc62mbbJmkCeSwfUdF65c5W1a",
  "key9": "3dVvDqtRuuwewQnV3zVAS3oTD6pfeZoXfwepUjGLmQEEhwscfvTPPgFsW5x9oR5SdbyH3xQgmn5SjhUwMJyMj9WF",
  "key10": "5RjWnotYgKiKLch7GWKEFfytvkFWUNuozs1EaUTQGPUiRWjuocu4wUJYazpX8su443oi6BgGLQf3z54m1TKtA9bL",
  "key11": "3PEqGuFC4vSJF4fHrVCNhexmkBkDzMvrTkEFBvm7TtsKRyX3czgzkPiz1b1XhqAC6MhhiUuttN1W6iTaRKsywMuU",
  "key12": "5UBJ4jBZJTje4Npr5a39QKbpssVYsTmWkGfFUHfG61GzsBJKbbqNJqzeWs8Th54GwwJtH1rx9i8tUxPgTHaSUJfH",
  "key13": "5dwSqYTwLiisWkk6C4Mu6j6ayYPVvRydoDh1NavaznHugMuLNaJtAAtypkAwLoNrbtMJBc3Srp3aWGRVbrC3i8j7",
  "key14": "3QXe9QasxUN6Ex8FRNysdH44PfcSdEUSTWkJ4jYWs5VQ4M9d2oJMH7U8qq21jPnHZdCg6Auc36SmeSpWYa9Xm8yD",
  "key15": "39fGBaJfmF99nXunkCm8wJDgwvR6jHeiadkkLqRWf573SBVKMNSeGMAqX6Rb4unXmgzB2438WdnbRPEWvpPPL9b5",
  "key16": "rQGbJjRA5HvPYXJYTV2WiWnwEw8m27rfxdz8B2eDbFtJsnpf4SxhUrSQA4SsWdzRVY7H8TGZ1E71NGCPCjs9VRt",
  "key17": "5dCpWNKqmoirmAQY8No7hDNKLekKWrxx5Ppgc5SR4Er6GtjvD5cMmS2fLrocbNc5mNQGxZh7afkAz5DDC5GmSCx6",
  "key18": "3UdrdqmdmCFvPVmRZZY3CZBCif1zkbqT63rNxNp4mEyWKbiyKqMGqzC32daN5nKM183mahk2s78394kdGPqCswwk",
  "key19": "7wExAd7td5URfbBoariBADEJaFQ5QfAh6TAqbePkai4amRcSBsWCq9w1kgjTxaAf1veyJrNey8NfaRkNeUqbC9Z",
  "key20": "4zvB5oJabmjRYj7tbiJ3Rfr2RFcqCWDyU6D7Bj73WEqJ68pMLVijqMvof7pBLPa7H1fps4KAv2xoyAKjLB1jWq3c",
  "key21": "47yrfBJovNMB27XDuqZnesfVkby9uW4ofSxMUGz2164Enfn8r5y3ounFWWrvmdHsrfMtLcPN1UPxgVreQYYkkH5Z",
  "key22": "5G79YRPFaJ8z6waiJNmhDLuzqygT2DLjS4QPDk4KVVNWs6LWPy8pDoT6CcNNM7iFhkdvZWVUQ5U9BPFsbpnwxjxW",
  "key23": "5VpxkFxDRi6q1ggAjo1N9yDVTk6TCJrBTdmFjtTAAYhCsEfcuLhGTKkgJrb3hAZYuhzebbsXF3oEEoZ9McBG1oge",
  "key24": "5WzygARkf8cDQjJqoJv4hvCrpeAoe6me9kZ86vA1kDQvoHEVHCK7w1Nf2h6XRapZ4yteTLuRumU2rAswdeZz6jo4",
  "key25": "RSXFvTk3yYBG93ksgLdhRMn1yZ8VAFWXgz6XeoprKrmrvXDXxiXAhGrghXi5WWL5ZREiMj9mBNu6KpjTwkioZ5R",
  "key26": "4Mz41x2sJSmfUDqXUaojTBxigqYSjBYfqLNU1WNU98Fg8WsDPgg1AfvX9huNZpTHZ9CkZhSKFTr8oMQdvoPdGQFV",
  "key27": "4S1LVgTriXJizv9XUxa7x3QxNDtipdqVFZRSt6wA5pQg9PR541n4Dfc5b6X8eDBFeiuQQSbqayCCsvHqjtP21iJj",
  "key28": "Yqu3t1NM3KeGAaAfPabkwpWNiJwCg2P2PEgPYSrRy9P84WsrxhBNMZ3n56jFQwEFqMJCwoop6DNpqZHnhWTUXHk",
  "key29": "BMHxDKiD96EzH4xu4b4j4y3pVgVWrpHgpwJXEUX8myoCjav66wq7xV3kqJcdwnAorn8tx41FD26M2azhwF9nZ9y",
  "key30": "fNpZUB5kbfVDAmdz1Q8Rsc91UjG3e3aYtfckuRbTK6MtwTLpFSyK5mjrsUKCMRgMHvkUNLXa5ACNgcbaxv2SRwh",
  "key31": "MLNzEVUpdbKQAxRxTumZoPmy8kWjznydgAd4cmwjJdQBusJbGogauFvoMkA4bsFurzXMJxa7TXUhcSdwQUkQwPE",
  "key32": "TQLGLgqK4HUbfPYJbYASUpxKJps3oUXtf2M4cze1Xc87Hd1zjp4TQ6CxYpgFUHAG8Z7bZ6bfJ2TtpYqsGUucyEV",
  "key33": "azVj7KWrmfJYpUVWZT5CpYooEm6HHDWFUUG9bQx6KmmgBMfpzzE7ExcrXJ96Zmmh7g1CFiUcm7ostTqwLJjtqEs",
  "key34": "3mZWiCMKb7hPcrebifNWYF7qtdBAzLmNAFHrtrmRwZpiM8sRjuqprogHWsW8NABVxwHAwPWcWfXLRP1Y5VxrndKG",
  "key35": "4pRtDjqpJwSbyP5o9wJX4gVy8K4pKtabVFv6gwbdr55KsPiwe8dFQnJjxSfHxW5sk7RczH2SL6UsrvkTRzRHT6P5",
  "key36": "zbuTKLYK9CmVUHuZmMyJHYDuxiHYfc1ZoSEvuzC3TLi4vnVwsSSnwNdNHigrtN8qyBgPnemWoXMuQ9HP135aRku",
  "key37": "19UoUm8uRBhSCkRZVQ17mUUEyQP8TRFE4icU22TuchJGAbwH52GFhbfcQ8v5FN2a7aePc8DqsYt9G3DFPwJ2VKX",
  "key38": "sBCsBoxA61uuC34511ytcFfQmCuq9zTaagnAXdFUAVxDeA4yTmhBqP9u2Eb1941ofvcdiqhZSZBLCSKWbxdiQLm",
  "key39": "5sf35jdxcXfRdPmy2fuMzkJ47N3kRo22zPuYaFyAKaoQdDv7DzSX15chufusjnmef2oBHPxmiSVjqwn7dk6ju9CP",
  "key40": "3Jb5QYFqLadzcAByVh7iQP4w5R74mdQXSd7VoZzkJL8ur1LHaPtTYRAF1GjzVuctroNL9AhxYuytJwUfHf3ocs1i",
  "key41": "53tH6kWGJ3hrMVTUFqQUYuDA2ucQV3bbmvRka6p8H38gWYsH1ixtNmpfLpvhdZvkWmu15pidwacYprUHSrD6kCrN",
  "key42": "2oPt7rJKVzMFDYgQWZSYmattMQpeiULH8TfKNUTz2Pr9LjaspdWqZFF77SYTmSLptKVcU6fbcdFxXkLTjEoRJJmh",
  "key43": "46K3RQwK1rtcBsDDeXeaewDdq8G1rLiveYEFqQaNFMw8pLhkNF3Se4ex5UTvP8FQ5XC3nASEENF3hKHBFqqmqDEK",
  "key44": "2PAHBYW7U6Trt9fpzNQn4DToRc9t2Qr5a9CkaTUp4DRMrddWqF5wY2DyoAtChWM6Pe5VcGMe1Q9TFTwDTkP9VuE",
  "key45": "5QjPh2apE9V6zKZDEwNXa9W5GBoA64X46jXduxDfDAu9R6SbJf4h6s9tmzkaaXGoxdoywj4SQkfWb4TrW3Tq64V",
  "key46": "2L7DF9BMNuKwF81kJUngCp53ha5zRmGEGXHW1YRGDsRzTrEkP8MJLkLoCWZ3SkGYRhnPuchtDweaNUpFLnXXMrNi"
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
