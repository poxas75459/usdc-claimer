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
    "2hbqeTNYnJr3jnFjYKnhXbS3FdNGp8BcrYgcMamSkv2X1AkbUPyCNJjWxkf5qu8VXiS3pEcbtQNkLuxZoiU51f2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zrfve8eqUdvLGku2kHqtnqVRYqE8vYh8u8hRSPXNacBWN5kM49FqHyouEDUS1JMTxmgVUA2tdY7PtjeHcxJmK3g",
  "key1": "2inS24UCwxMxJBkdj2Y7t2hegZ4xwgueGovsiUC1YThwXRdnSekEinSS4GjXrRA8KwHxHsZ7uccZ5HBT3bcNypHV",
  "key2": "3e6g9BfoVGDsTH7vxNsgpf5kX4yspAvnZq5odwFuzXs6gW6yVruxdmngjyYKqJQCMd9qRQghZ46W87nsFfQ284in",
  "key3": "4zBGSRZyAVdJ459bjiHXBAzZHAyvdxpoUMX3KiaH4U9QasVLa3nK5S6MLXyt7UBRtCF77yaoCd58FvEmn58afrbB",
  "key4": "2ahaftbL3oTd2bBYvnjXwKfVUcVMww9LsrhDhcCLdr3LT96B3mJnAZ9NvNxwwf2nCB5ELDFELrpJUmCmViRuk6QY",
  "key5": "2uQvQRJZiRNhKaupVS1cMC1YzAUzEZgCjHoVKvBLvZhQChN1Mz42gqQqwA7pqjtoYcE72j7YJrf13DYpK87Z4wpM",
  "key6": "4jeQduNEfxDj85i8pi3CmGV4Z1CAKJJSXMqJmAE9jCxtZ6kEUFM6tXsVGRhwRqWrjh1ffKdvovH329snwsBrDjgT",
  "key7": "4kDEddZ3qx5d6r1kX5ULKGzjFdGW8M45MSccUYD9sEXX7JVKPzjBxQEoWdDBGXVbgVnt9GeXkHuaJvFcq71D3vx5",
  "key8": "5vNf5WNwNLNVrC4uww1PAA5T4ZDRUMRusnDJacdVvbiYz3WZugZnKyJCciheiSn5zKjiSfTRPKfoE67aP5vbX9bk",
  "key9": "z5vSpsXJH1h2vff8pGv9Z5twTxsMTXhLXbGGUd55RfHU5pmgTtudspBmy7CzoHz2ircPqSJgoikV6uxKioJLdKL",
  "key10": "4w7qp4viEgzAkYH3QTCVF2NwPeGKyexJwYzFpQCS5TfLaQNHP1m3eUsEkTy1aXGpxvTnjL364LXknbjzbckbzmL3",
  "key11": "2rQf4RiBpSxmozXmaRZBFHPEKfAyFb4NFC51sV1Jms7R8x92mb6wh2QVB5CaQ1z7zr9wWaNeoYefpBPZpSTLQMci",
  "key12": "WbaV4AATpTLr8ASzvnMWf7tgz5AwVf7JJspHTZRB1gJCHhmWbeaEx5mB8gGPXLKRMnUyaqK7xpvMpE6cmxSfkpf",
  "key13": "3yBi4RkLuFF3b8nMbSXBYbbBbWxGs3Q84fhP8BMb4kryhrr95y1XvqikXtLvJGdUTYF28wZ7UrAR7L8KG3taHbP2",
  "key14": "2oz4WxGoepHBKHgozyeqm4TCgZ8RjAPYuZMdGAkDc3stCpsiMCuSYwfNRxXaewD3qSJB248ouDmg4A1ZEtQBtRZy",
  "key15": "1gjN8ADAAc1aB2Gu2ooxhDRZQTAnuJMbcgNmqzv1fBm4whikpqZ4xaQrqTTo2hs1Tim5NW9Vacs7AanfzyBVBy7",
  "key16": "DaEzpR2fRGsimiFajAPcTEHRomiDipqucBpMrmQhLjj9Jm1HGCepHBAR9nhQCYHrxXkWvAyp6DWqfqt3YDsRCGb",
  "key17": "24ZCLGxZHMypSS1vVTLtajxq9EbpLfq3THBypTYGFn6EdB6azppQLJYDf2rob2taWhJDuQ8jK7iPz2SWbTfmPnVm",
  "key18": "5exu9bGg1KJkSc5qJVndnNhMnhMEVCcYq9ufQQb5jvKWxNucnNYWDuaoEfgdh8vPv9Feh6THDFJYwrz2d5wdbQbv",
  "key19": "J1Z5BTMa4SdtfNUAQd27hBeLfvWXRFW4tgBfWNUmAxqsv9wXGhFKmFn1EnaLSb6uWpbBUN6xiXCNsVodBcr3xcS",
  "key20": "2twUbapEWTeMiEkPV19qa1NfauggsMYaQyjpFbXfmpoDpGK3hiaFVKyPGwRog7jgLhHMFAV5v61nXSH5ARpEsJec",
  "key21": "4XFiaKkijHLE2nk2tZgbGy2gW9pcBy6cWpA7LBGg2P2qBu5dTmegmdLaNmsXuMp4uw2yyrQM4P7oumrzuFmyMjft",
  "key22": "5sjgjXW2W3AYinUTzYWst6MfkUg9pH5kMTTscR7tne6E7ZL3xeB1ByvxJ3WStkKBV7Ehh999xeCSGb5KZ8pSyqqR",
  "key23": "FTkiEjvSDEcAq9NfEsqJFiKQ9zBcFTAQWbqA4qkGJqYe7KBPTekEjVRpBoyc29e3dxTz8vCLCgZWKwnzHq35Rs3",
  "key24": "4okKSWRAt8LFtAFfE4WKVJWtZyFpk1hgexr4kARbav2qHqaKUPyvHCki7pUVrm2E2X6jcZ6ovzZQaYfjEwKzvYfg",
  "key25": "3DsLaEqPEuNzQHEYa8iNrGK5ggKAY8QKxobedXqSKZGhSovSHjpQi7d4NfUQ7JpK83wHzMdMKizjjR5beP2wUKvc",
  "key26": "47Yacu4z5FxnMSoJJeX1CSbQQUho3bGbALUuz4WPv5KMoCruKfgU56PvZayUWsVvfq6mfzupTgSFd7bcFbyq5Vig",
  "key27": "3Y19WhF3vopN1rt4cACNr25ZgEeYmXcbFcGbLRU85Cu3xPQEEz9EfAXzSDPQPkaxT3yZXrQQhg6SiB1JpBteiG5A",
  "key28": "2UqK9L4w2kPipHY2DtjicKahBREmoE5rNkTM1VHcTwmkfTg4gMsAcba86eFmfiyaSQXXxqDdryjV499eMaKQ2f4w",
  "key29": "2a9eL7zmyvmm3niNtfa1xod5aqnMLaZFc3sEXwaQiGv1QsBR45BNR6VM6FZTDrkyWk37vc3SoqFZBJpPy56a56BL",
  "key30": "4QnPW9RBhN6F7uQw9kvKXAp6ZiMjBFF3o6mLEVeNL7Di884eHLXJXC8JbWoiHKDJvh9GQ3mf3aG6wQgABchtyBKW",
  "key31": "47VBkTjDHZHoUpTzWsnq4ifyGVrPmtvnkBD2jRaaXYrLGpszn9eweP45ysKmuMtr6DMrEbrDCjKENfxXYLcKUpZh"
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
