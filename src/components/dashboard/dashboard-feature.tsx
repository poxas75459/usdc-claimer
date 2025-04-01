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
    "4MpsQa5Uyzd9Sf6cQS5CBbQExZP1wz7pdMEManXg3ppg3xq1DSQZU2fLYcwQMQZvcUVr9DGbawRRuMTZz9HR3AhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37FcWse9Wgu52pJeQKyHS7FCzNLWKkHV9M1WJUHZgTeJSiiQ4ivncqHvZicwpqsYKfo3GqLmCK7R87FPA8qa1Zev",
  "key1": "4iKWnkH3CdcPanfL8ikSnoXkRd9G6kgznTTe1sYQH2jmD9fkZQWt6rqxEHJBzn5RvNEJ4vkW7vvpdXS8GVSH747J",
  "key2": "5HaVtiJyRxwWDiozhSHCE6ej1p21ajSCzPY5LUBdVG9pHJjLQxVxf9d3vXLNZmb2kJ56ciBHim2pTBcQ4qJtDBae",
  "key3": "2EhPWejuq4dvzAuUpb2JQZSnCVsygD3u1ph5zHtYLEFdubvAxYonoTE7gHAHN6xYMExk1DebbCgZ83VWCYsVbdAe",
  "key4": "2kb1dyYAZb26unP9ggoGoKbCMMFLLfJv9aGtB6aU6znBJG5w7yhaCyrmkGjsk2k9TBrJMQA5sZ2WgqPoLwSHS4EY",
  "key5": "23j3J6KJjQk7iGUTM6CScHhBJpsob19UabvujadowPSb5FebJ7GN1Lo2dhRpzNPHu2yYoayyXwDCbMj8vAuLiSre",
  "key6": "4WwrGFwGCAofCV8heJR7qD2tHLspQ1cV5RXan6nTY9y5S2vfBGt2yfFcLVxcnociwqN5bwi6PpnGxrLZzPBoR9vG",
  "key7": "47gA2kx3MrWDysGa89PTgv4unb4EbNnwk5FRxRpt3UA2UDGDhPQYDfes2i2Ezbga85ibE1yo7ooQNNUY8dxmQ3sB",
  "key8": "5Jg9vWqbvZWijybaNHJwFDovv9y1tHppYfQkqPPcfqh6bsQgioB5XniY4r3Xtrx3a8G5fCo7jnsfmaqSyYH9Gttp",
  "key9": "2RR6KqotcfLQMjb3mpFawjn6UkZs5rpjPsBpxLMTpEAMriTBhRdaKouYTeGEtC9D1Tuprjo3r7CCHoujPP52ue8A",
  "key10": "RTa6oqnUvohPvHh5nuwH2mjmd9yz1ZFVrbMMMhUcYBbp75GEn313mWgmQsRpRmbmjQxJg7HzMDQVB2YipDpUwPP",
  "key11": "4JkiSz3TsnJ662UtFRyHLcvft7WVTLzxCeywaQdm6iurJ1P5wi56mocTFUYrZByicfM8nKu5PjKtaBGEtxLzBf1W",
  "key12": "2jpjzn2Sdw6RkCJm28iDmFkbqmo6X3zKuyY6Y7tbR8nYYsEp2KH54FaJ9oModUL7cphH5YNahij8tumEzfGCyhHb",
  "key13": "4qTpcxJFyJDmmR8PZfnUGF6Fc7dnp7wkntMeK1dHZtjHTEuxfF3LUNcKu1dRfjj5LdWyYn9PzBTeDS5EYmHktKJL",
  "key14": "5GhLQt8YiBDkKgH4Tci8oTvagrMxXxAG5nCCX98DcqMkDEhB9arPn4u8x4zZNhEVU1R1zef9v28E9MtTEbPtY7wi",
  "key15": "4GbGoB8xS6rmdhtSx6LvmyaRgsf1Rvq6nrfPPXwUE3SCVHV6fSuu9KR3VWreeNa4zJ58FMGehr84cehW4ubA6AaQ",
  "key16": "5e1kiMWWAW9ZR976BrSbAFnj4ezZmjwAeZkktVX1BhVtoXxchWKvmCizqbtc2MunoosEgvHe59UN2JqLPpQSWPAc",
  "key17": "3pdTEJ4xWbMkkbpsqKJueUyd2gwfXwPdya7nE1sDBCTvEtQkMBP7HcbGDDbM3rvm2YQmXD65BB5aWXKq6iMmopVW",
  "key18": "3GQ4y3qwpuHij45nEZRKEhWYGHLP19iu9YdCdMc7VYoiaqxPa53GKG4gRM5SjG9qu7FPVwZpnBA2VhTGmUK5mPGv",
  "key19": "PtFA55gcPj3w7ctnHHxEkZ5eiFxoPVujLMBdv7tZMPxMB2bi19K7yrshny3Y2Sd66HizmRRfU14RCkSVq1X6CVd",
  "key20": "2JUKdRCEoKAAX3CfwQ3F2rMcMYw9SRXQBhcc9PUGYcNUD113Wov8YVPEQkJv4FiVn8aWFztgEvzwNPMwv1Jw3khR",
  "key21": "HSb2s1RNNNfL1YCgjSgq5HWGHM6FJn9tLch9aNN1qK5y1iZsHgAYxX6VHrmJ3v1j4VLH7ox86HEWSNFnw4LLKUS",
  "key22": "3ZowfvcSmXRTVZQnGzd8gsP5zzffXxrK6oPW7RPDu3ZxZaQkWuoT45hKAxrY6qGNBWSTTEwkcuJsAAozYdNYJZha",
  "key23": "3W4rDUS7Q6tnuiTJSZbeZZ3WRkouTKhVgw6GBCw5CRxSLLdZWodundNjXSKkrapuSQKVrZ7NQ9zZFEnBjVycTX4S",
  "key24": "S23raEaQqofxfcBeKShoKVsv4Dxw5U91b6hBYqcQqqQrtmdTgtaAruTVRCfG5kMudprycLL8TdwirCNj81e35bD",
  "key25": "55Eh7obbTrZiuFCnKaFSG9RQCdD5R6DNG3hWQ6t6BfcL9mEWvtdesctrySpkMtFUHx7EDNFwV4wY3xhjUG1uyKNU",
  "key26": "3s4yLYkF4jQoUMywwswwdZrofDbwoVRp4UL5yiuf7DUt1mFCQnETEv2MzqzMZTB4VQAnWU6pbyY2raweMV9Bj86n",
  "key27": "5vEEev2nEpgKwaRmnXbRK3WCqsLxFvbAq1G8fJpbKBidYDgoxVt7Hu6hkEocHBeSW2rr9Qi7YsdZZ5adrCkovQSL",
  "key28": "C1XgQwwBMTj8vg1cTfLppjrMgHuLfgywjquLWLS3veintqkfd7xR1zbPPTc4XxJtsmEnFNsXzt2QxYikue6wmTk",
  "key29": "5QeTightaJysi6f7nsdWur4k3fdhnkBif1sPvbRRyzMXa1KQzQ9fpC6Bp5emJgSjUduKHLuTVFPpkFdBnKUMq2N4",
  "key30": "3Ty9tA3rbJ7wPeTTsAfvLeYoGuyb5ofX3mUG9QfMk8U4oq2j1Leq26dqazovy3SNGALa7krM9mc3qqV6uBi984Wt",
  "key31": "2yhefFFhH4WHd6vSJaBiE2pEGnPd8dQvR3nBDqa5mftXxxvqpNMeCdFL4gBvCS8e8HtyBGqkFUdWCoYk7zUW18xf",
  "key32": "C2iAHnXcKKgCiaNVBggtWo6TeFFzT1rHPMp5R8oVQGKaCBsdr4ScgQttN8N1nyc5znTBRK5yGJbGcKGhmBXtcVx",
  "key33": "3i39dWWpvJEi6jW3FH23zNcJDzjzvw4wmzEEnknm769xc4FZcw66VkdE9fLGAHkDpBnEG8fUeQTZGaskKPhsDkmU",
  "key34": "5EFLpr4vNy2GpFt2RdvSGH9JjjD32p2Rfxkj7JK2BiJGxVPjF9hUkpesdjWUEZwRS6bYSruVXH8uZK2FMyevLyUP",
  "key35": "5AWWTzRu8ghL8Gyj4wgabRDiSaUtoSh148VvNTJXym7Gs5V8kYCoXvpQorjaF8Tjwjao2TspuajHik9XbfZzXQL",
  "key36": "4yfQA46Ub75wmwoy2Bc1BZEDuAAVhviyFv3DJLVmEAHQeooevSdrixB4zjwW1wreFJTb9hcwLDKuVxWDkydVevvY",
  "key37": "zkBFk3t1zWUSPsaST6kkh1LsXrFHJRiTUBByy6DeMM9q1LVoUbXgbJfXYXKsUcJAyvDNVhrzGb2UEDXsANJSRmK",
  "key38": "4Q62kx39C6eviAqD6BzQSGEiEH8A3MkPLcwVWUE8BDQjo166Mr9MkBz93TWJhxx5y54fwVMxjDZmnTPFnUqM1toy",
  "key39": "56LEruyEn5AR9t3eFQwwowQx3CXUGvt8MdDcXARUbeEyarW1pojnuqBCBmedoJaJAhfqH5aPcyiBKJTmx7GzXGXG"
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
