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
    "3SDY8qB95zcSg99crmJGSJRcqDbZgpbTmvoRGJF4o1hfWXrjmg2edRq83twJnnicqJ697tnVfdxwZjLEG1hij8qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35t7geyVPUZfaVJ2r6SARSDNTsvEWmRXFtjNB4C9ABMLSoKvFv7cYvaaTuSPE8xbiRTBJg7FHBMQAY9bsUwYfoJD",
  "key1": "5sfnuxjMPCKDuCECMf2hbqt9qNoWk8y61bhHJjTxSBkCL392aS5APENxpcsvqwDKdsmWjmY2eScawcBzUvTtZz6M",
  "key2": "4AoRG9eqANVxGVazaeHFLDHJA3FpBBBRU1Yg845NTtEx1pqzjfu36M8TRJxxtcFEhPUH28CbjH2ameU6axrxgPKW",
  "key3": "455vouyWA47a3KRB7jhgUsagf9vHVR8HHAngMHFTJsLo31Ngzg9XeU3s2oDRobCfU8PzQQQhFr3L1WB8aU8RYx9B",
  "key4": "4JvEUxnwSMByGFV9y78LQb5P6xLzkvTeWyFh81d2bEcKmDJruqmmW6vv9tD5qqeMr9CgAWMnBA6PREgaDpJK8sDV",
  "key5": "2tARnoX6yzUgcQyem8KZBfb7BfQLdPG7o6uUWPXMmsz71SHyYpgnv2imFgQKDGyryCwhs5ypBpPLcWmwj6Ahcbpf",
  "key6": "2EQSfeLHbHYw61px2UEECS9wB2Ci2JtVuVj7DuyYYVKiTmAjtckA48QBJa1m8HywETADPWdfvYTzaX8F4xLXUpgh",
  "key7": "pQpTNpujiS3KLaCFFJKscn5sZTb6rH44pcYBb4a1DqdKh215YxMnCvhKVBsrvPZMxX6FnXf1qzdAjJBEVvoniVi",
  "key8": "4ntgg6sGDgpppLKW8ckiJVWsgGhYs2CMd9Yh2rvg9YTecaw36RemXtHLpeSjMeEeDGMhxZuvg7L3BazrkaWrV58j",
  "key9": "5d1iRH7PCVtoufPeBLGr6er72Vv7KgnczGj8bBvSktDKyyN4rHVrWceCsNeDWQ9sRuz7FRHL9WLdyMQpeZ1Vjq5A",
  "key10": "GataZRFbBwcQ9TL2EaHek5iELEvqWjVQADPRCveNEpr7DWXJP5xa1HKok29THsThTeeuxVSAsDbHiCoaHvQT2J5",
  "key11": "5cn7kW1k9pu6Hh2WhQfrZuvPSEDBfhGHjwsivBZA2rJXmGaYx4wP6373sfHkjEJvWNaC2x7BjZYwvHgLMimUMvuR",
  "key12": "3mov92q8M7noc9kmy5PjRLstM7BfqTakHh5VeHT9TpFYAMAUAtEu3PAvfRff35CV1TuyKbK5cqKQLA5ZJvoitYTG",
  "key13": "2A3VbLqhSBsqzeBEkoww4VKgCY8yDF3ctV8WsRf2M5y39JFxqCURC9ChcHPMgCp98qxKVbMZQ4EYxMCwgyA1Dyn3",
  "key14": "suFXJqiWDHqEd7ukMoxKyW7EcTLzzFZAsDFeNPEJwJgMX4wpqmYjR7BfYPtG73YAd8nSq83H1vdH1epPLfVRQKm",
  "key15": "2QGGZTFi7svXgViQzj3mbrZHeCQ3gWHqgN98zxG688ba14PB7KVL2AJ2yKaB1CQNjVYt6W9HXLrtHLMHKhdm2hJy",
  "key16": "5SEvgcSZGyrq6UQ5k1aBFwLWXfzdZJtcnrHpyph9RpgCV9iCtjQi5LXJsEHYMdnLHnVGn8kaKmUz1s9LtGYjqH31",
  "key17": "4AkM97bMBsGeHQyJZnWuPAv3SR2KE1fnZHsXtr3seNtHDa19oAkpkQqUTRiDDFn7UGzcbwcL6urQbYSj6f26qv5c",
  "key18": "3Qxm2EkTwjMDSiUsrzijHHqkyRbVESScLLbciJypCaqBCC7ch8LtmceYefFCFJ1oKipQ5E224CGSTnuj5swoHFpe",
  "key19": "4njBJL6NYK2L5hVxe4jxUV4Y4HyYbfPURsZLHteshkLkqhgWAU5wPXEcoTctmW4k5CwiE87wHWmbGA83HdT8rNsA",
  "key20": "2quxbQC2JHVWkv1qFPEEsXL5Y1b7UGxucZBe6yGHt5vcK45rqpBqxcVJqFem7D82sQCr8vcRYfgKBKH5VDLAfQg6",
  "key21": "4B8kiEh6z3Ne7rtn4UDEe7UxfBg3jGviNkNCt3UJC8TKySoLG8Tzdz3Ajv7WgXQpqpWu82GQyvMJMXfPycLunWZK",
  "key22": "3WTtBs4RhmtPHYXYWYcidH5YLMMhESHF1Go6jcHfxVreGvZ7sBZHFdFJcN1Ab48xTTueonj4KnJubeEXFHAph69m",
  "key23": "2fijUQW8NPTXCWfFc9r1pkrBryi3NttpctYctnX4qvuXbq7RqtL422qzPAK8PQfMPtbFcp3qK6Jp7hNpVsDqQmsb",
  "key24": "3FE9RziQkLG8RLpQ8gEvYWs4UYt7Xp4ek9u9Jwyao2Gu82WjjgCkcuEnVx8kG3hducF6af7wiDqQcUJ2rSXZeyWa",
  "key25": "3WfmFbo1f3tZcMhLBWKQfm7qGfR6DkqATbosaNnkLvdGbP5FbUvc3D7Fr6MWPv5jmRvtA36y285z5WM8jubYeCHj",
  "key26": "yqBk8d6M17j4DvLaZyEP9rYUXPyvdHqUZxpKvQtPvq4AoL44PcnjdXKrZdeTcyZpKKm49QbMHUErDEeuZq2coAS",
  "key27": "4aPxC8BYDHhBWWAAxPoN8TcsU6R9depWGjodjmy1dWi2SV6FMe9f4cm3n29wjp3kSwt6wZg4KgwQqmUe81QbgYur",
  "key28": "4TpgXgc2BWiH11chyYK61tBrcdVPJwyT4951Ee8Xg4d2ZWmMzwSdiHVMmLdkqUfm69zwCeq6nmjoM2C2BTM3HUAK",
  "key29": "3TFg9Mky2Wt9zThK3hrSCxhYvRYitzqLxNTHZZLvR3MxdzrJmKxf5zxugEhwwjYiyzu5UvFhEw8gLALUpbyJbm8k",
  "key30": "JJ5jdYbB7t46M7ugz7F37MW1yPiR4bTVjdTxGdQ1sHhuCZRCx7a21y64dKqquVpST7xnCbdrCJuexVeqJ9m9snx",
  "key31": "43VGtHeU14JsawbBpBta6LcggNNS1Gpv3L5QhNPwDktXPve2URMwAiH7wXNMBZKdjEapHMaXRgBWDWwRf3nkZ58s",
  "key32": "3EbNgckLqJBHUhkQ8SPCZxF5htVuqX78biBGRCTCjeiaiQLGS7goP5S3R5LCj3egQvqbsdY78VpktR22thBMjh1W",
  "key33": "6uCaB4xwQaJLs8vNBT5nc93U7c9rKAmRxpF4N6PbZUCt1Mj6pEJXX7Zd9cAtw6fh6BYfFGjmvgaScwQxaK4PnSd",
  "key34": "4qSAbjdPyBNY8S2L5ATdAYrYCMZwVtFK5jZtt5o9AUZNVxfkmBeMeoqNq8BVzXNjap2qnq4tUto8Uz15cUrdCa1b",
  "key35": "22tRzUzooMKEzDS4c2cMG8tve11KVCx1mjeC2NdHKLbA7EbVuW8N8HNKPgFLg38fJjTDK6iV9cax9KWY67vZs6yu",
  "key36": "2pSJUUkHkqTduv2wsxzG7DKgAHzf11DeqYEeiyrbhGzn1nKWk7mHVBZmzr68u5nTRzBV7ST1CBzrPFPypBS8NkNH",
  "key37": "3SWJCbpLd8PDR69aVyPSfnr7m15tuquHDm1N8w3N5jcxVGQZn3AoexfKAGLsgwXwJAs3mRMdNwJh2cH7xdf3nUqf",
  "key38": "44mFde81SenhqitpqXYQWyYHqSNHAVnfSwA6JVkBFWHkyduyssrqF6GmkvNSL76mhQTHSefkiHfwcXidL5xqwkoi",
  "key39": "3rKqXNWh4NtjNmz2esPGbqfBtFahghbMzmb3eDnqqh3KiahDHU3C1jMr213YobbFXZE8TrRnJhCU6MAgbxiug3mq",
  "key40": "5rj78CfCC5fn6J6sWsBnQcAtcRH5KWFjNXkGxhd8GFRFzu2yCtMrkFoVST3V13fRNwQFhNapRxoK77DnwhHuJAM4",
  "key41": "3jpXtCNV2LHRWgEyjVVsd9j5YEA1DguJfwpqQypmpcWEr79L9Ft18NofmYAdiESbLgubeWAYZqSgcPPHKLyQ5AzT",
  "key42": "5qZeNG95DA6J6CEzGzteyPEm5r4RJ2iKRVkSaAz4AAoaLRDnSniBK875EWNFWerhxEFSCBYtrAqS2ko2fKACp3Jb"
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
