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
    "3AoWWM1uYHA3GmidS5dM6wdzLVKwuH5qQAiSHvzwKmCKpbrBbyf5rXiP4rDbUcV7FnrKzvzyeMVevYAo2PcmS7XT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVosziCyhu3ca9CVwhrjmqz7YJ6d8Mq9p34NEhW4ikYpsV65d4oss1DZjpUvZev4B1t88bEvyztCcxEMZD2FAJ9",
  "key1": "28Hddpf7b7Hkx1mMjyFsebhenJ44s5yeyFaMCN6rpCv4TtvXGwSuHK3sYnC5jgPRpyEZAHwaa82qitecR8DEgTbH",
  "key2": "y1GWxQWnhKQo4SPYN4wvmhR25uCQQKPA74gac1V2KBqGkuJAcKF4tvPLnmWVtKtNcu4KHCZDfQwBUTCdLYmox1m",
  "key3": "2zR88cUZHFht6DBRFtruuMYtaSkt7jPqxTRQC4QCDMwDAYE1MNrjCHShvBjkn6QxNjsybHNArrT4oH1qJ7rU2yTk",
  "key4": "5ptvVAq9kiDthpk5d5QToa468ktBbwRdxXh7ufWZ8VtUjB29nEqT7D1W9S8vV9ioTDYLV4RBVtbzGt4k2UMSCNgC",
  "key5": "4qao7AMj5Cc5Bn39NXDvLRz5rQtudYV2gesRzMm9qfjbrqmFYG3bFCGT6MrgSaYeMxkvWrqekwzK6cTLBHKmQ8fk",
  "key6": "5vRFxPw65bJHewsyzoQWWDs5WMke1Tvrd6qmFMKgGaRPhQ1wdyWVmr41bHZqn4WwwuWwPB954Ny8AnFbyTYwH3XH",
  "key7": "24bkyB6GBHtbLMEL5qdAy2nRJ1P54g6xZQUD6e5B9jijqEBRmps4gNAvXvDZUfM2SJetYNoR7DWmshpWVdAwna6x",
  "key8": "5kbNMj4dHVyrzP1Y46WraAYQHhQY3t8pALu2brhyZ4qJnAjTHs5FBjMGyF6XnGFvEd5qcckEoTBknur8fdQ9Wfid",
  "key9": "5WqfVC7Uww2e6bdJ54E5FzJcp4V3Jj93pyUmHDjJ8VcDQkKxekH7ay4ze9kebZZGedwpEGU2U9Ds3TfVUFqAgFKa",
  "key10": "4JxhHC4mwvUpAwAEHRwV858pXazwQWcZ15TXtmAuQrR4iUoDshbhKUXvRh8i5u8kC6pzDpzUDvnMd1Cv4GZCxS1P",
  "key11": "5nKcu8z44TCYCzPskGhkrwNpTprckziuUJWNV4HpRNQVxQpDaufGMn5gVLNNbcDbwMnXbKsgU3AzxJHmmF5rZozo",
  "key12": "2Eu2BLqqJ6eNiJtA7U14X1BtUc8Ticehs5ZjpafQQ8FeF4ssmHhjFYCQ67xcZk8boYd6JWF3hPZF3CKvs75KFcZG",
  "key13": "MozzxSLiBRwxoKQDV8YZ6uzjZPbxBQbhJB3TCiGozt8BPBB9LafhKioUgUh5yCELeffNvRdsMECgLGBpR8PnrFL",
  "key14": "N26ZAXZF7uYaFzDAbzogsdDAACwA4YyVtMXmBA1btKgdLVithu8isAv32NreHZqbLFY9KrARusoHVykq12xambe",
  "key15": "65oWSz5CkxMwouzpEg3JPB2jfTJu8RQbdWhWgF3BJDW1ERRTPfRwPtTqiN4H4FavJkw2SNS8SurvtUxJyFXp2VJ9",
  "key16": "5p84gn8mJyypK5QXYzBJhtCPgbE1WfQDH4dJVYX1qvmU7y5hPVVo3eySnxX21A68pAsF1Pek4XyQYaP5tWwANmkG",
  "key17": "4kGPKk4BBFWY5PVGwaK1qxZETcetUQxk8bVKfWLqib7NWxaCgNzMzv7M1eyE3TPJDMsRQTsCVX6dwYfV1JtG3PUs",
  "key18": "57EKMK51f5RRom6ENBhsoddVEFPCh3Dg9oFD5C33J4Q8pBykiU8zuXHRqwLxzFeEPRfGTYC3AT8m82qR7a3i1SdD",
  "key19": "2jgYD4SR3DrXV8is5YHeZjkAt2YfT8js6P7tHjzzM5RxEY5Rfn3rED9FeU425CH8t29fpu3oFW8xWH3sfMaXUdyS",
  "key20": "4QnMnawvANciMLfNuGKSUKZTdEBQy2iz9tJ8VpYDFyAUd51KEattAucDHtcVNPLTmqw1vmP58rE3uwKQXapi56SJ",
  "key21": "3DcAcVSNRgELrd8mLHWSCdKoXngbovYveh589rLyi6MYFzzgBuzoW6oF1QJ33PJbAxa5hp1uujtD7xqTNzDwWX4u",
  "key22": "4ssEH54RLi1xYuT1vfyg4k9ViyzC9oBEdcvjufm7kPXKcMBkw29FRzimbCh4EgvpZb6twCuc4QpAhstbddhn7vVB",
  "key23": "3D3tYeyLXberVX6pRLPabFAqJFdqhH5XQNFBcmWMvSMhReKEERVeAwDHN23sgDRwkauvpu7zQKc8BjqEUAiFZnoK",
  "key24": "4J2SgSDnVpoFJ1CUjDdccWpR2yLZpNubApqQCXJ6EcykoHRLkd9JJRUnAtEVS3jX7S2Ew3C6qK5xda1ybrfcvEnL",
  "key25": "hwDtVuSqrZ1DBHPCyDsb4fBsTizNG3WRj7d6ztAtLDywY5EL7FwYfML1XFergCZmyKRVLfNwR9whPZTW7ij61mA",
  "key26": "3Dt3UKNdySv4aGwaoGMi9PdkVzxbBA2LK2J7nHSKoyiHJfow1HFrkVeFS9557LigZpH8hNKJaEz1dc2zjSAJagts",
  "key27": "5jsv6fGobazQV4CojHW63uBgeLtLjZZnX6wpHMFBpszxVQw6AyL9ZUTYRRvqWbyv29UhviWKc3jtn2cTm4huVNz7",
  "key28": "25AAmNFdro16W8bNFkRSNmigs1CdDqx9rzaJHCecafct6gM7k1RDUrwMtZgbNbKEf5vMLmawtV6jzQiNUwKqriKv",
  "key29": "5GifBYCPB5LzBrbKxzA3Hkq4itcKkJngo4bTRV1xiGYd8AC7qzXpzGdVvWtNGq3geCASVhxAVzNf4UL6RZh668mr",
  "key30": "3EDyXpkJF1huUWjJiyaaikuWY5F9gc5iwfnQgZysM1xGk6LJEPFPZkHSymCtMWmXspfzBKMsRLL3oDmZqrT7AEGj",
  "key31": "2xwndkuqqafdMjo6aJhmrevAoniMMMWJrZyG7WXYjCUgEUGAGNoQUrmnK6ZWQQ99r8q1piKHrU4FymFmZBHrH4w",
  "key32": "4aicbYhozM4AMatLuzfK4rMDAhWzsSw6FVj7XGSgRe1XijKpHxHFjq3BTY56tfEfZp6x9MJHM9Mune2ncB73zMuY",
  "key33": "de2YQc2YeFWrM5zeLhKaoLNjSynaPTrGd7STCcGFAd9KfgpUhW49wYCpNU2vHbrneKka9tLiTH7wAPejpL8uftf",
  "key34": "3YZ5bY4WKKJPhgFzWzsSYEc1PHgzrghjtbrG4zEHCefuiBGTvdpAPYvn8WAFyfkoDnYBG6ayJDrpTL3sE49nTDLE",
  "key35": "5S5kjD3vemcXcA4VzEkzEoz1tiW1MfLunyDDQN2sCZSmU8pHveAmxPUiPeY8c8GajCycJS42y7fFZCYrTjYpD26A",
  "key36": "4cYCgBqefBwzh6T5jEavN8LepwFseJJA5SpD52DcG2KBG2YoytAZErSfAmWXdNVdsP63h2FarC5e1bNfrk8iTfdS",
  "key37": "2QUDnrX4ebSUrhLyB16BrF5crEkpShNTwbzHRGYcTr81UjvrXbYGoidc8uqphtEWQ2Hk9zXf1MEkVXMAXBTyZ9qV",
  "key38": "5pVx9d8TMXpXB9AkX62hapUFisbmVVwH4JmfeL99YJLRDTpT93ooPQWSS3rm8yNMHTLQjbRYyqgbNBgJWn7yv1h5",
  "key39": "4habTE8PAidimmLd3TttAnjW8phqvwX9kyjQF5sxxB4amTiasR5mfFoYEewubwvPwc6Q52yMfk2XSTrrfDrFkePf",
  "key40": "ArkJRoVTJoTMoiXbMAFyrhSDKzxJWuBs2ZduLgA74Rz9ZMnzEjBqEz9xKatecNQwp5SyXk6R3RV3qLwcrYvkwu3",
  "key41": "43FLv8ZDZqa2R2iskEo5EZvuFziVVTvcJTkva39gRxN5n7ucCARnPAEfDA5ovVdX7BU9dH29mcj5G7jQPHSB6kdi",
  "key42": "5HskmunA4Y2L4PLwWkPUDeP2uTo5U9vWe7yzytm3XeHaccYWox1vz1iHiTr8LEyskaPZ2gcyiBNVyCNuhMAN27NR",
  "key43": "4f36Bdgbofd9omfAmnX8VXM1V2FeyhitHEGQdMZ5uTNY5qpJUuvctDQxhmwD8kE3MFYR96s2sJSUWqfgviMCvLJR",
  "key44": "5gYLgEvYke83fZf2gitSu7HvhQQdrXFXBBefi9igAic5HXhnojiT4tp6cuUCwK5GNDdkHQSPJZxFxVNw5TuDpixY",
  "key45": "2UabDo6a44GujhPuLPjCjTUKegiTFPdJdqjZp8VKopwhCWvwWJ8QrQ9zwUbBkqxjebbB3coVu3WnfVC2698M1hDZ"
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
