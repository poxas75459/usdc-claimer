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
    "4uaJGMVhL8p3Wj573cPEYvo6GzUABKPS2NUv1fXiKyNpEjU5a7s4sk3ghopfYCHQ2dwda8PPkahPxudxApyTacZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pi1QyYkTeDcrc6PWBejWjMJHxnk6nrsRw8qk75hUHxanigqDipDxByDchw5D8ztEaieZk6PXwf118Ai5JSdmHz3",
  "key1": "Vivp3MpnHWZvVRrRGNEctBXdwR63yjVpGAB14CBNBpPpWyQ1MZwBbXGM6YgpoGn4qttFhk8Gh7accDfnmXGDwPL",
  "key2": "3RsCBxAv1xkcpCTQ8fnQPKmkGWGk6bA13DFDc2cfYpkx3sthKYSiYvZ353vtMW7Ni6aujB6fJfAwNofMHn32TVKL",
  "key3": "4cxpM1Y1Qt6XRRdHVUG7m23FST9zFseFHecK5XGc48Ucmr8pJ5u6LmR1LK5dxL3gSDBArr9gw72My4gmq4GtfKWE",
  "key4": "4mtX8Yn6sFc5LNMMbajJ5ECd21UNQxJxKadjmpV5TxSjLDUfC2K2HBqprpZBDwQeURGXCjHA8fWLnfxhAkHyfoe3",
  "key5": "5xyCxADVEXGvRdz1JdmrpMoiqL6DdSL3odX1iKsbMPBCWZC798SWqe4ofc6LiN3bdDNPHNctKxjX7jBR5ucvigem",
  "key6": "5JUgFN8at2TGDDZVGNdcAVqKSNWEqS8iJy3Lh2gddseD95w4o5XeGpmxfuE1Wuuq36Vc9hVyHEy7FyCJDthm238R",
  "key7": "3CTzkWBTk42cfoX76jw6dvYzqBezhEyHjntz6khNHGirr5VNUtpndyTfvCeTeptx5P5r33ZGYGgJ7tXf3wgVdLFH",
  "key8": "3UkyH2K2qRppkLpwL2cBC5eaNuFveXBa9XzDwStH1UmpdfMWfj35ukn3sFcYr6HdhLZVvZnunUADjBRYSAsDKGM6",
  "key9": "2KbhD3dZ2JMFokSFFWZCWqb3NvJ4A83BpFaZMEbhTKhYNu57KzHsvz5uDwGCbjVjLiipGuUNHk3E3mAAUzu7zBYJ",
  "key10": "5pkVYoVwUq6nD7iYHMZAgLb86gbHimQgerMXrjC1Udg4HxqFFmRfKP6dKw5ZHhK7K92ddgid8jHqrs8uSzScLj6c",
  "key11": "5zwpTx6snzauX1ZBQGGBew4SxWVrxcBRi2Hh7KBZPqrN5xSUA41Mqu9sbinrACdossFqxoxqNQD1Deohv6qnUNH8",
  "key12": "2gPPFWQCEonGCsNC4RGcQAztENVb8c9Kezf4kX3WKPXXW3XFqEus1nLSLg8bnHrwkwzrfNwQGXUk8L6kdXEA7f1a",
  "key13": "5cabK2GegV9Fdg2F1FscBHW8gTgPy6c9tjE8RQr6wHa2w5oXSUBnyXUR6VoJ7LMzBw2BGJMtuXcsirQtVLGofCyU",
  "key14": "2yBB4xrxtQisLZuPoUGRUwEMsFogMB6XQy8qTuLNiQfFQyk2H2eXj2pyt7qWsMRWEse6UrMRPkRuFV5YYjQVpmuG",
  "key15": "56Wtf5wR1URX9HJQQ2p9Ni9UowHgMmFqVhYn9NuzT93d9FvkWiCYzjAzBxP3V799kZqXpqYNUyzs9Mu2CwhsdW1r",
  "key16": "2Wa3gvfBkh9xhUQWdfBv9nTwphRuS2ib6gZsJtF6wYnfziwfu1WSX5pbMGL9CYyMkik37bKgptf6YqZS7y1epqA8",
  "key17": "635zAXLHqcM3diyZGASAcgmMjmxNCbw12C3JkG67jZpyFFDgCNVscEmteQDyZ1d2zeVnL9GtVyxaxhVci1hcJDRq",
  "key18": "52HoaaHciGhiBjTp9sVcXvGmMy7ZGAoRHdSkfh7gaMfgWruSxdYbQRANw1mMT1oCjiXLQW1ZJvKDvykvAvYVDcZk",
  "key19": "3nm2xHBL27hRMy2AGHnhHuXWQrAvpBv7xqPKy4h7iio46VwNb5v1EGCCpyoN9J69pcNAeFY6d3CNCsxDo2nRpzNe",
  "key20": "25bNrBWRbd7pKnpDfTEyzm77euAH46dC8KjHhCMoR2DpQFJAGbXRtU7DQjFtBRZmacpP5Y7gvDouJYmqVtRwuqqh",
  "key21": "3ztUuoamMLhszb8vMqYQfRWq9qY8aWgKRKqMT2GX24MDrtaWGN7mttiD34siL4xPVATd7JFrSU4qnUD4LfMy6C3k",
  "key22": "3BUKLuoFUiyjWmjtSGYBARi5cbxZaUhVsH9uP1ytjjtcdFUiBAoR8or49MhfsPi8jN994UdkLLMcfaHZKhmdaVFb",
  "key23": "5pVVsZKQJbiV3VBYUYpLZrW1LfahvComZJ1PdacBiAQPgeEFHTqRNa9jgf8XCSp2eE6UstUXTjJ2UQZTneFZG6vu",
  "key24": "2U8ZCEGmL498dX55k5gLTLBfnUJn7Liar8rjqnQw6yPmHVJgvxJecXzmY4is7iWEyRL4WvSfmSca2mE9wA6T8c1e",
  "key25": "XXA962mPuJAPhfwBubsV6QQ5pWww3y4ebjm9Ut53buqopx3w7bVozdLzu9uUVd12qdTNpKhmBBAcubaC8Mxga3g",
  "key26": "3DYz79GbD6YnpoCkBsiyfmS4wPSf6Ssk4sKowejVDoVMDYbCNwZqvaewU45dYF5gfumx4EZdPMJp2bW7i7cfU6hs",
  "key27": "3jt4zAbLP185P1BGTfHsDKAAs2xG67BRkgqAgasP62L97ae1Ki1bKRJHejo2FrqK2QzV5tjnCDSfgvUWTETNNjWQ",
  "key28": "Jsrq7SUvro31LnKaN4nGKxmE6fyLoGd8WJeKuufc8GWxfLKckEDoQTpFFP4b3pHQLx1sF6YJYfyGgJWqshF1Gbe",
  "key29": "5Mzo8wfTdFGRBTzstocT3nqeWwr7Sby6Zt4gyFoSYCrKcJruHpijYCrfMnYwALJ8dWy1V9xHfSUrdFNqd9vEyvyf",
  "key30": "2aDBK2amZknUFChXTCLwaeETpsgjiAKipJhTzdaVNwCXDdh5rHUxingt32GntpsCiuifkQXj5gBxTwAMHpBS8QkF",
  "key31": "4Z11zqa5dyYkAKpdzzHRoVRipC8Lpc9ZZCaNgyd53wVEi2gHzKpjPvkkruJCLcjrHh94TQWy4FvZb2yruJyDMr79",
  "key32": "46JmHz5KVvPFSUATkeyabFMN3FirsndGRYXzLHwbYzrbEoQTa5eJaEuLoD9g5tUrHiFJxmNYtMh1F7iYZsTYVg52",
  "key33": "4CqcqG6Wr5EUJVrRZLKjDw4Yzu7uUdcJhnjRfkfYCZL2erBHahauV6QLHgNYgwPM2Ns3akVDEFmFUgwZoxTczNXR",
  "key34": "D7TdZhpUCa12iSb4nUMadXgrRdpQhAGAJ9qhqagSbtskgnvJu9tECd325gb9MP861bUjXqVbuAYnvF2n5iKbHqV",
  "key35": "2urJmbXbzQ5zST8HBS5XenMjibgXoGpmR8ikXWnMPkBBfGiL5kJVwc7No1yVAMVMnyVLzTGvbSK9kZwZQtBgv2Ew"
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
