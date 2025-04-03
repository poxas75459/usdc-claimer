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
    "wmeb9qQHPyFSgLLSVpk9o3pCGVKSBMnT53YNogv6N5ScN475EQL93KFfGucV9vwrCxvcQUSd3LjKcZtGaqXRUeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Woa8mvL1NjDTX2iWBfbMxX6S67KFfqzv7imjr9g1wK3dEJqzVm397he6zZF358H1G5pQ21rf42UQESsfEQdmpG",
  "key1": "38pvomCaKUvNHLSVqroUNqs5CZWZ3GVECaavWbvd9LHwA9oXshWg1NJWVuAdc4cZyMzq67XwcuYkEDCXMn62cHMj",
  "key2": "5XkpDiSy6MFb4p615ym9nxNrENAVhX2dyJ1zmDfw6zEJkrNGiwgnu2xagspKEc2AwAEZRqJTEQyy16jje68if9HA",
  "key3": "4VH3Hvrb3onPn9CAToiofMK9ZBnbhLRQ1HBD4Tp5PXf6C9n6GAk8ehyFNqGwtkE9DZWXssdXpw3zAY7nYWd61ekV",
  "key4": "Yi131VBGQjjtM3xbw3K6zd3rmTvbnngYBkN8ASkmvyHatVu1nrEMUs3Y8zB1e5uKQrSSkmAh4JhQazhDUAFF57T",
  "key5": "uAdEFLu7U1yn42rEjiWEFB9UhseRZc3or9HWDQpqPFp99SicbegXVDggqDdCh67hL4hqTC2Y26eB3CYbbVgzTum",
  "key6": "38RzuR2wGRLNFZFLe8dxvNAqM2T6pCTXezns7MzVXwbDJMhVpJ5c26rphdjq5HgRcYTnMgeRF2QGL3yKAGbW9AaK",
  "key7": "5kc9twPEmhntsXpX55uC38Q3pD4RQSp39iK3MnnT9kCHhCaiHF28VidroEbD8XuVsf1uXb4hLUNYCoTKKZfrD2z4",
  "key8": "3xqKSFbaYidzYAqvmnfifh7ZV4Ar5z5euxiL6FQWUzvE1mMLQrVL8y7RgHvuzs1CLqH1FASNi5KJ5k9KLrG2YU73",
  "key9": "RwY1h5n2ydeyZ9SUyG1ShsnZ4GM3xH9D4v2h8mM7LRSQWNT5w8c2MxhX1SQUi6xksxEbrp4VQZuVVpn2Ha6sepc",
  "key10": "5hafJwVC6sz5Nm1nKG2LNYm4sJqiTrppL5CFzdUszr2ekEQAYXgzZtKTBP6YaiLmni8ASk2iKYqT1DVeTz9w127t",
  "key11": "4zp4xVsqrgHJrCkePWfTUywMAPMvsXrpLYmN26YzYh43bxbjimZ14Jqa9jVEKJnG9ijixnHggG4HDPN56dpTTg3e",
  "key12": "21Q6QqfWC8tQ9eZfXSZRv4R7y4yMHoKXittXtCNz4J2vxesRWp4tVHguViDp8Bs15ev7hpgKNGiFDDFhAyXF8SMR",
  "key13": "5KmYpDDJXihspUazJmnJg6V6gMo4E9eLFaetDge8Bxmuhb7KSPdGJHrmvLVUWXoxD8gvWL2tXqDkqxZ9iTkD6EoX",
  "key14": "28yJrsQWe5XTNLez2Hzo8EYXnaQjB19Zq5ZvqWDLPKcaNJkzh6DWjCsUDXixyaZXm6cXRPEfZEUZjbGNoJp98ueG",
  "key15": "4dPYWUswRfkFVHk4KXXCDLzL47vWuX7V7gMTG7i4iXmjAQWJehTy6pdLwPfzdHfQWdApMs9DiMVCrWvbpgEgnVF3",
  "key16": "3eJ1gwtoEpV3Z9vnhDXkCgbY1dkLdDj7fXrAvz1rwrvMNkJWw2gGh9r8Zfa2ehzWmzuJDwWyPkCRMXZgDVcSPEGG",
  "key17": "4V73d752Ykh8hfgcQFC43HAPfvDDW2n8uTWp2RGSyxtyYMhdiYf2H6aCScVMbAfGA48w8u3Xa7VfeARo41DdK9Fu",
  "key18": "2wam9U7v68sc5oyyCgP2GiW1FynNGcuku2TLGBc2oPWqUsqsQwsDUYfuqry4FNp3KF6m49Q3cr62rJuJ2CBXJF9v",
  "key19": "46ySLCsLy2Ggv7xQuFUudhHKdLCMTtKRNaTxVmw6f9cmUcjcoGtiSPkxdtyNWVWoVxo36c5S8RHEqVxQnNrBPpBA",
  "key20": "3LxRjhTao1VkcNNWU3Pgek2mF4Xva6QZiNsHqMqK5DKUXTGmQZFtY51QpWEyHKY268maCrwk6HGePpvn1rVY9SNW",
  "key21": "3UWAuFTLnmC7xPxAEWipUxbPPXdVFo2jAreqkwgsv6XHHcPRjpU4XMFZHX9oAo7jr9iKSEpvwbBt2AbzNbkzfrjx",
  "key22": "31HNyyZuzwSwRDZRQkoWZ375DBdPqnt1WFA4iy5HFsxcQ88a9UoLaZVPx8JS4aB64cUdXWRfY82LZRfb6k4xd3FX",
  "key23": "xb1hFWnfqgKr8a7nwjG2aWt8vTu96VJkpmYQeYy7G7rdJZTNJ7v5G4dXGb5ciWfBQ4eaJgqsKRCMpMNNkq1cra6",
  "key24": "2RYWD63oYMP4M4zi8xQczNY6iUFDszfXB4NDS3qe29m3L2vn4DCztBNHbfmbmxqo6ww5ZQpuQBcqqbMCj6PxrDFj",
  "key25": "4wCgGew4prfs9gJr6eT3hgW42NuQjswDpQemUdf1ozM461EzEraZRgkqyikEVuH6nWJQNCHoA9wQEp3Z8VWMnc7w",
  "key26": "2tmVmrhtVxgy4UndxYVUAifoZnmSxjy6a7hnDLZLaciSAsPF5nUJCUe96FRzMyNTEn3Asy3pfoWbkXEwu6rYN9Hy",
  "key27": "64Ht5NPTjBRfWqeXUZFNADfPtw5kieccaxX7XjrkprYYkMgYoYBoLsTcGeZbCcuEycxBqtgVwLkSMATNw9YnnLRm",
  "key28": "63M1WKYrEmnyTS12cRJuvTU5S9K9acH1Zf7GvdvfqJ8joCqhk1ZrZGPuDYHPh3yPHan6ZWGn1SK4S4cipGZP2E8a",
  "key29": "2tbw8xjhwYFM9kBKfKqvds88KkZfyLCE4cD457dWRQpQovcjmMXdJVjrLXGvBxsH79T4DjMesbHr4rjNpWNHPZZ9",
  "key30": "3iA8ProEUXBNHvixLyxJQkVa2uMVxtetjgjdheEmAxuRmFuMSxT8H37b3Y37PSTR9ETNNqdVPJj3doZgmkDTfVZa",
  "key31": "2iUPZPok9sRWkihfBckgNB42WYs5PwzEkJqL5PDesLcCjiLZFwt7zwooxBUAVjwRhANJ87VE3Q1h8oNmF4y8W28W",
  "key32": "5ZbRRXGr7J9tJC94tWpMj4hFWqnafEC1TjGVwpuM8g3xWFDJnjqT2ZKJLKTGr3mPnnk1gQUUkq1u7hrkMp9GuddW",
  "key33": "2jrrRDYJ4UKnDB2oTLy3pLcs3TBgXkFYYeAVdEACpKwLzJvF4MnHt4gGXVtx4mRXiGFZfuqcmQxN8Nn5f92fPLgX",
  "key34": "5JrBcHpvZMEKr6tjUU9x52hhUZGXovCrg3agNCqd5JxCB6XBv2hpSNXTgsznJMgtg5XRwvWnU5rDidSQTmKCwPaL",
  "key35": "2jv9AanyvZB2FcWR93GoYP9Ter1LK493cSKuTBoWZATyeEpABK1zSUv5QDBQrcxNf7fJ1ZFfPnnSeSVugKEvBm9i",
  "key36": "YtUs2XEaUbq5e6ULBuQfzwCwkaePvuvwgyz325F3j71HUAs2XVu91sk5Kn6jiPDWZQy9VupNQWyK3EacHCnfQNb",
  "key37": "VkisZ7LQgK8EaD1v7eufwvgeMNf7ybHP4PXnK8jtaWEReC4qcywJXdv7fvo8cdBYzT1hyZSD9QvxS7YHm9rr3cj",
  "key38": "5Jn9W8LYo6gNkJMoRpodNYbCVGrQkgUazf9pjjySWoCNVV9YzrWYmGbDvpGuf7xZA5pfkC2iuXySFgRBXfRGFDqT",
  "key39": "4Z2zAziMd5dtJXdWnAfu4iFcmEWtRNwhVVYaFAK5HpW3vYcKQvDckUdJHCrAPeLY7hhtCyj5hUCrir6fhXmWagMg",
  "key40": "3buHvg6puWHbnsH4EZe9fhEjeJTZXu4nndTuHUnMFzidgPyvXGqJ2RwZQDEwA99q2pQaQA8bmcsZACZeN8jA3Fpq",
  "key41": "4gVhj3QBbEZYgFZxyjRFieAPQ9bxJTdzzekThdBpntgWPW1X2h9qBd9sC2wW2mVDSPBRPqeyUqexh2QotzbTbvny",
  "key42": "2j7oi6c7nGjdVZKry1PVsSiumP1NfgbDHrQd9nDiCy37kfJxtf1HiiZmFWfKS7VkqFtZyWfyehXA13yi8cmCtprq",
  "key43": "4PB1ZKMgWTCwHr8onmu6PnDT3RzHzqCLZJuLaETR8ipbijqWWXWPTiThpg9rRzwUbJvB9SUbd8xLmkfU16bo1eDK",
  "key44": "4Q1KM8dbB648kPQwv13iSHSEPAQUcfQEBD2BXZK8WhEKDceKuQ79XYnbesQppk2NybAT1p62efEsdU4pihUsh4vx",
  "key45": "RySN5FN86WcM1vF8FPtzMsMMit3ZZF9MxRmUzc8eGHmf8jWRUzPyDo1QfGPShmrae7kfzbf74YNk9YvqEuVtvoH",
  "key46": "4zHZkdpRq2zjJrEvbMdNEGxXanx5fhVPfqtmoDUz3hjzUDLo7v4tLGGeNhhqZcqRZF9ZQ8Qtk34zpuKeGcXPSuQV",
  "key47": "3NsqMy3ZmW3nFTrCMBPajmQFe4azv38yjxZUUQwZjHxek9mGW6cLTB6ET9dnqfAELeBcRcQhmsrdHF9HfZMXALpH",
  "key48": "3eMzNYQeBrjQT4tcCzrWC3Wz7Bqyb5UPk5ykDh4tcszuZ5ZXeUfbwqpBQmUpQyyGBek2zxKK47tFqD3siCXo5S2N",
  "key49": "2T3GezDezxyk3LqpDeQz2n5L8pPFJubJhd8zXEg3eGJL9oKRGqNdiQ1Yor7cPegs7cQWJhSkVhbvaTHi26W5rQhS"
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
