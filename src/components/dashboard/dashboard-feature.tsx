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
    "3njj7Dd7qYq3QGBH6XNWHxuqyHy7EmuuNe3XJ2TeTkNFTrw5yckiQGpwKz7DiJLmKxB9tXqFFLEc4Z12h31sm55h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sNr1eKEycv6kQAQ4hmCnquuJP4kTMUZVvEg7chJtQspowRnCXnL23D2ceNzmLTEnMv2pGMMka3g33vLmSWUpgNe",
  "key1": "4krwELo4z1auE1BrNHDT5fuGaWwz5xcs5kdUP7wWXiFbPFo3zapBinkxhTWS68GLHp9argPVy4Fo8cYrbRF3tqo1",
  "key2": "3ZbdRBxYjjMr5xViRauebgsCKWW3v51BahuLxmpYXa1MaG5vqcQfQ9NGthRkyxmZ9qxUP66nVKR71wK366gwywsL",
  "key3": "4tmwbn2vfmBszchqjTT36ZPxhurxxHZHYQNwD6HePyPJPGqBK43j63gPeixeMtUkv5qq1A7D5LxNRL4y88UNGcvZ",
  "key4": "4haENjevH9jJ112WLje1J6fv7qqBBwtPLDf3W8LJ2f9QFSzYgPYs9eFhxDkaXk1SUZNEACJNXaGA1MQYFAqq3kyJ",
  "key5": "5h2LvoiViZkG1QjtUqJqvq2t5tj5GQUMtrMo9TppYpKnmd6WQnjCVD9JUTPGgbCnG7v76k1wuijaGNMbTQRoahvy",
  "key6": "4g8mTsS818zsqj78hxLts6hYwcDc2gP12ghL7Zb5BhG2GrovjxvgtPGW8BJDm1RYWxjDhUuhom7W8UCENchRyxjx",
  "key7": "2t8ruhNbUhV6sDyGdYygDzzwBtpHBdu6ZCRVQoXQXVgEmQ3RH6ZGFbYa4ixZhRPCJVepxHUVcJhi6vTJtLU7t5Lo",
  "key8": "dkeAFdCbjEoAVRbr2aEBzsqeH6y5dvtgQMJPTSbpyqNEKXTQz6PxgPGmcNXWsuvaaAw4iEuVEJdkPGhCS9auqps",
  "key9": "4BCCLA9qNVpy8Ez1tGFgxkcvbyMYWW7X5KFbSFircaj9Q5SvM2FmS4zUe9AqXmG1oDqwsnLc4AgXh4VaqrWK5NMR",
  "key10": "MsHYZDLgp3GieAeXku7xBauRQBHBHSs4TcyREuwiAKuZxU1hUq53rbxp4PWKBQ8AcNktgSfDaTwUAity91uViUu",
  "key11": "HyjMXAGFaKm4eAeeiHCQrqd4PCLECh2zC3WKT3EBMBq5NArozwsJzbGGFHUQGXAJapMKJsHHkXHYBXUjcnjdiho",
  "key12": "KApcAYBiSMQBp7VW8X5kstn1SNAj2JNtc4G8ZqcAGDNnvtDSNHEphRkBbTThqSgGtjK6VhXdpTsj5v1ayeBZeJp",
  "key13": "3rLpDMsw5ua3BY66uxy8tJYnHgU26nZFYjxDBrRrY7WDWJeZBEva2kHrFeeDhE2CfKnunyZBGivtMr7M4TbpTeMW",
  "key14": "5orxnyhVtyFoQaMgzYwNbdwJvFVWZK1MmWe7pQAna5Rr8gUCqLFgZqGqChGbFyN5GWAhmx1rQazq7Ms79Z5TtBJY",
  "key15": "5en2tYhpPUdEtZnxHSWG155NiHk7iotbcdWjHFmbTfpt1cqxh3bSGW9cQnGZrn6zt85oc5boFvr5m1wogKRqiJJh",
  "key16": "2cBv1mj15d4kzdt4HdTwsxUsHwZVv4h3vy6vdp97cPER9bAG1gw3fXZc3ARGhj9oYKDVDZ2nkJioToD7h45WXLWt",
  "key17": "3g9HWC79UEZE8QLYogmTbayR4h9UPQvAf7C1iHayPdoZAQUSgR6kHc194hiBJxmYJ8BV63oM9srtYGMwyYGC4Hi5",
  "key18": "4qrKmv9qbc2SjNfwVZ2u357vye43Pw87rLmHdZKCpCTBB9xtaKspnrmhJuLSctpuathkW6mjPLe3i81iwbKroNyN",
  "key19": "4RaZsUUxTUUQ5Jpgp8xc2Z3goRdP8suFHrsZ1szB8HMtw2ttKcVuNFXWQ5MUAf4mX6Lapc6RjufP42oePCBWpVZV",
  "key20": "iBgFapqPuJA3stFCuAxRaUBV75sRFGadKAoDdtrXAzcdH2VeM2aP8dBDDr995DTaomnXQauszumpgvdBytUCPJW",
  "key21": "51k55vQnfqLo1ptqjugVJTsu1qMBJp6h5kSfdpokxqedBxYnMSqTJWnve6m6AMcS7WVYX9YQLVmUVsQhELphtLMq",
  "key22": "3fQryhyTSMxgqWEEU4Fz8fgHKh8EbNo5ctixAk3dmmhAtA3LSdpdp2uBzfGGgj95WHMEJWGbgvbrGkwwNxPUT3i5",
  "key23": "4KC6c9aKhaXUFe1yXFHFLvJh18pbnEAfZriV3kxu4nJhZ1FMvP7AvtwVVHdToxN9WYehPnUSpSJAKRPjnojZxnFv",
  "key24": "27QR51VvjnWcmyqYaru8auTp1FVHC6rmu2bPmnsKJb8a6GFEMq1pRRbVteFqJ1USZ1JoWDCp8mdW3yixsiyyLmDP",
  "key25": "2qEbdp711M63GsJsUVQ6iV47ZYL6V4tHnjU9RHMyBQtjdVYUaWe69jcwK2FvASsDH1vpNktMwMsezZpjE5hVGL9X",
  "key26": "4TASTZR2cKLTxfGZnUESn1yanxScX5Gv3qAAbznBrSzcqk6WvS9oqFPemi7EMJDos2zLcsuDrcPvJM8ZH6GmeoeK",
  "key27": "qSAKqEF8zxvRvZWreEsw3WsUEf6xeW95vQu1WuMCi4jezamcobKtHzTDyVHVCXao4NYYg6GAG8HjWFBoJqJ4sLM"
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
