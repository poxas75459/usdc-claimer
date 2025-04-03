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
    "2Uc9fNKmT9tmycRcQ3QvdBa2xdxcmAtxZ2kDPQxirpveBPUkW1JUcHopdYThnWu9uuRqc4Nz4MqNrDiZfzk3SutH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58GbtciT5PZHgGgT8gU38BTpJQ7aW8ajvcrKq5X1JZgAsuJPEqFmV1KvRmWWb67mbUZt5PYaccZrdw3SaSoXWZHP",
  "key1": "5ibykxFhLEbBHCES7FBu1sBU9kcqFRVy1VcYKsCPpZN6aR6A91YbfKj9N7WxkaiLGebmz7hFUdUAsYJmWdHPfWaQ",
  "key2": "3ADivL1e5oYFp3HtSNsVpWP6uDBTXqsF2JwMqPfEZV87VWqiHpqCqDhkoGN8dX4d9VR4a22GqqrtGkgHKGoewdgo",
  "key3": "FZe6MtPx2UQHZ6ANsVXtHdUBffqT52qscH37rsrYDJvzEr4tqfYknL1aqPVtYC4npVdhQHzuB1HVNjMkd2f9ava",
  "key4": "EZFMHGxLoj4XV2KUwT8SmYCvzXmwm43zjFzwme18GzmwRFefcegbbSUQ96Z37enjph37USBSDbf1vptvtCTFGbN",
  "key5": "ftjg3xxSkuopBtqfYqXdAeErErqGv4fQuvS8k1Qa3TRmLf7e9QZhYkzmwC8TCoZn7tRjf23kzanVxfzynk81PFk",
  "key6": "5CzxNKFgFa57VzRSLoGt9vaep4RgtTdP7FxPB5ctM2BoDkKroazaRghzBUR94wL4PcZbRsFGhenmzw9t5LTkJUGz",
  "key7": "2ngrPkxenNbeLps2tnM9QC2Lj22Je1dvXGyUkWHq1RjyuKPxiqfPchzYqcHzk8snEGpQM6duDnR7u7PXoCdSBef4",
  "key8": "3tBLUX1gge48pHHcn7eiuh8v4goGKQNVsvAToQQDDC5LiPpENB8H31EXFQp1kdfLLC8wgAwsu7giXhHAxBDspmMn",
  "key9": "3j6qsvxWwiL3ZZ5c9oEjudBwsZEfPraDRV1Mwe1TZ5bXTkysFwRJdpFMT2soiuZgbqU42m8KT3UpBeCjck1Fq9hK",
  "key10": "HAJMGFVneLQac5QBC8og4kYpyW9SCjVwmtSbzezycJvrPUw7JUYEH6fWSS3HixZdwrAu1DtjVPNFBKPQjSjXWmJ",
  "key11": "4YUjBNy8qUsQuxVLcssiC2YiF98qncuBZLDNq6GBvxdpixdRgfoGDTtkkcW6z91m9imvXSGQ1KTkTuaidvzmhuhR",
  "key12": "3d1m7kMfHgfrxLNr4dCjRmMyfuGH3NFAcsyt5NNbhWSRRpb7nwSUqzBVJQf5N7gTkvBJ4AASsnVEFZXzbJ6fJSev",
  "key13": "tDcMjEgNQ3nd8fLzntwE3J2tHety52yNGkostizmJgAAqvgUh6jQVeomwY5gddFDxdxjN7KTrzgMFWpWfepgFL3",
  "key14": "3WdFxQwd45uNfTKRXXKpTayB8Tm2t6LoMAx1FRu3ok8CXR54nFcF9foWepnHbswga53uGrhVSfaWaqJrGJbZQrtd",
  "key15": "42Y814EQ86ncLZ7fGKUdX8nt65z7QTeAquKHairRFTZg8ABe3tyCojz8dwErVvJBA6AhXHknuzWrckgx467SKzRz",
  "key16": "2jAW2ydXwRZk1edMX3MaKryTENZvbQMa2VVNGZz6bjaSidUdfDxVBEs7wLQYhVnC5UkenbZect8KWAyPEoE5UYkP",
  "key17": "2N4zRbCcE8m1KQJwFdAYbSs6qh4J7Wu3NAAnWxp3SHSay5YYMm4Gpkdg8W85PWmV7S7VvNpn5pp5ZMQ1NJyuDHco",
  "key18": "2XUyZwwtqB1UactXDWPw6s4VCKpsgbQM7Ugw2ZjzNE6tCSndMyiZaMh3RUqz7CHrKymp5zApgHR68L3PdbPW6fu2",
  "key19": "2SGpXfnairvASPbteVEDsjdoiaUTest5uwedbZX1e6JrA9xMh9NeuFmXk2fEbzkLeecqKtkmJXtmGH1jpBZXrt73",
  "key20": "3Ph1gybeS36XTpz8EcVxfqKfrMkZYE1bDi7S37s5CEdm3eRV7tdutv2UXRVk9qn4ChhjjaAjH7UrtHmcSSsqNwe8",
  "key21": "34DLkzyz9kBaPYtJJN4KUKn9EfTYNBunNmDFZ8XwPPGn4wmT8NpwEgZQ4ApXFJCzY1uFY4dH8uY97SU5W2mzbMjL",
  "key22": "446CbsyDqoSwTT84UKfqHtr2X7czSv2S2qUbST7ucbTFGoVTzPsFbLVgpLEmRAsUpUZmhK2M963AYgsAcDAnNZD9",
  "key23": "2cTwEpwGcnTaeJpwCnALTx5vz48qbZe8ohyTn742hb5Gufep5XNULZLwSxMkossKLbpvFHPA3eyy8diT2rmnA58S",
  "key24": "5baK9C4ZvdWt4zBCzY6ZGebf5SBGgW3BgivkWRU8QTh4zVRTrdnZp4NP9Y6GHxa2AYBTFyjWPRuq7UbjNDfjweQQ",
  "key25": "44XjYAcGsfMxBEey72BFY6p3KzfPpyujRBo55SaWPxfGfp1ebzcq4Jr7K2i7fBQka28chSEFwbFqpWYSB3mJs3rk",
  "key26": "5rvDGDwh8ESy63E3fmf9GaYGmF6v4LTZc9tvbJHi6HrCJSUWqQ3Yy8Xj55UY43BqGxk66u1Tf1pR1NBoT97ouJ8u",
  "key27": "4NSTqLcteeFD5eAgCvW3fCaNabGRFgq69kwf1QuaFQKzHgavo9ya2f3vZ75QL6xJ4MePfrX72M8u7DLywdakz46D",
  "key28": "5shXmKkjSFN11VMDushyMABZQHhBNMJU9VbJvMRnpLrhiCVQrneZJ6FHBmUMygaA6EyMgSCzLiXZXXwoBEe5jU18",
  "key29": "3mtnvZL5y7Dh1w4tRVxc2iVhTahGFPZ2BGmG4GL9iCELkcXefxxt4PHjNyTMy18vRSir8T8Mw1BKQzsgi14v8nBJ",
  "key30": "3pwDUMsDiMsx32VXgQZG3QQ2Agu1R5ypf56ozsGEPGwHzyRoyiZCEMWsbd6ZVixMy72SpJ2R7ZwjtdMpd2EH8qwM",
  "key31": "4mLtVo5jbhB8LyjD5CheNBMwqHCcJ6s6xVV4FMKsHGQEh2kvGj5bRiUv8dP4ud3KTd3PFSonNTWEMdL1yj35mUKk",
  "key32": "2PrCGyBwF7JzueDi3c9JA4hipvoaTRUHWybr4UhQTDEBy1SfbbdkbAfKYRuL74yrkwipAPCBabVuKstortdbnW6P",
  "key33": "3J51hhvB7T5CJ1peAiDeuunCUbQDHqC9EckznoWftmUTL2RdJtNPfJJdbtHyQy48ZXvhFXve1a5W2zWRCVAHFAtN",
  "key34": "3nxT3Ed7hL9gjPhjmojcLJWzbe6q8PBEvbQFV4xTHyA45QDq7WSwGbuQZt4TqKzY1Bz9CtVhBta95EFcH9yTQRbV",
  "key35": "3atT7JQN8mdYQZ88WAxH4PsCmcvNxLmmfLAfwXKkeog5Wq6m7Q3NB2TjpZch1KmCViHgqaahLzjNo2f7wvzNg1Xz",
  "key36": "4DVNqgrYoDjze3gTmb6Ph9yE8S944ckJsqsU5m5QHxpYbagkaEJZ1ijmcwgBBAYu7X5pEEYUkpd2zcaz1edcHaD",
  "key37": "2DyGofqTfd2W7mPyE6CHDnDqnVVAAxZWmRhWVxCdZnZe6Gzxf7Ek6tkbEvse1eqmG4MJCjNweysj1ThPypHpdDku",
  "key38": "4vycvSdXSQxqyLTMjVcHtCMgH7cSmrrFr3RofjiPXhAeC3Vtd47daPNPPrLweG3D4LUsgYxk3iBHYeEPDhpaGkDL",
  "key39": "3vE4mVpJ6fdEZag6mWgvDsGtwu5LoEpU6xRzsMCVP1CZKKxMne933GdqGdmuGSjCucF4Sp4haT3Zsk4S3b3qTCz6",
  "key40": "2brStbbciY6gADDcrvUZUaLRTw9nMdridETvp4R6hixmpNqkRshPHSZH7kfcF5L8HjdCKHYkGppH1G7244WSbocs",
  "key41": "3KLWuTmNviw1w1FsVwZWwSRpHMor6KzfHywSPNQzmJWsYjbFbEVWCFzKov4zHE1RJmczpLwr5pdSNLi5cxgkN4Ms",
  "key42": "2qtX1SbCqzgpRXs1QfGjiA3ay5q62nzTNPfLDA8o7n3Mmbyb6tgE5g2W61dEHXNMM6nWozhJfY713yYBawvatr2h",
  "key43": "4nC1RsVq6weEtZ4dHbn5FCXk4ekBPWRuEqTgfPCaqststaRMhRXh9BwHAz9LSzQpfuPLuc7KrkRpxHejuJuBYu5H",
  "key44": "4JuVcFFBzW2gG4SXHph7CttUzeqkE3f1fLCebvDBiU3JQgkdFJ5HfbC8LTGjxhNGSiVHfdZehNLeLn12voWeUf9N"
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
