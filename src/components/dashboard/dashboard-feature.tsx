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
    "5bYvd471v4qjzUGMC2oz8nPob5C8cf6EuthHSzqWJYkESE2BXfWxSsKptUuwmFw4FRWZnfKC3mMoeaQbqC61bGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rjTiPwmmSNjNqhJBAXqRf6pZ1633ai4ybdcRVirzoR2Ed5Vwjh8wWF2LeNjbF9PupFhg6n78wexePwXhYPuqkWw",
  "key1": "5v4d1M3jegXACMcf8NnUd3GP2jvpPNkYdK5q3uu2ob3aRdDdkRfsmqNQo6UxJdpdNCkuXXDavwPi9FZYRVkSQzeN",
  "key2": "2W5EnM6mUrBXdz4kpFPCYU6wxHaeLUZnBYvCFu9NgDPBBqwC5zQs1k9VUKwXkmKVMpy5FZeapURRyVaybzfH7aGq",
  "key3": "2gxmVPMTtHti1Kgwdkjtv2eqX38eg7QDoeqZ19PU1wnPn56YXKf1XCSbiZKxqo6dK4ZeMr9YVAwGQjSaR8Jc9NMr",
  "key4": "51kL36zPMQTYwi9FdHuw1qY6nVMwyz1T2RucX1DLG75N3zrvbzqyEprH3KXDzAjcGWdzmixUxRiaoD855j8cqbvZ",
  "key5": "35iXDiax5rvfLrJoZHaPA4yQzSiNXDLtcy9vWQCSQhVp8gV1XSkKmT4zeRbgWh4GNk28spzQf2Rgnsa47oojBbnu",
  "key6": "5hWbrhHLPfMAqBghtYBeR5AnnqG5W344wBkqncbe4u8jFzBvUKBGWdLAsiuxrTjF1GVphqH91bPdKDynRFkbhXAN",
  "key7": "4Wez5kK6eojq39v4TpBg6Krwa6DUohTJcX63gY9JZLyVyigseKPFMYHJ3w1izLuRJNRissd81XRsdTnSZx4MJM2C",
  "key8": "3kg9yf7ewDmcnVNp4De1uYHYAcnJ1ZPFjmUXqq8JSt4CVNzU2gLxt7zeXKL3cFXFpwH8T5d16iwQqK5HKNGQnVWY",
  "key9": "2yQzvai3MYXKjXvpFeSTBpuccJkXFU8RtBcikH5iJnamZRzxBp2o81YepUwv6EG1scJJ9fhKrMnR567FZUzPGZq4",
  "key10": "2traJCmpQ7dYaxPVUJkereWwhk47yUEPRB9ackvfKF3kdf9w8cDn2F8Ka5mQiAbm79AqXUCeQkwgfWNdaVHBTKqX",
  "key11": "hThck4htuW6Lw9cwLPidiSHeurcmVKFJBLU7hJRrA5KE6SPa1LyRaYsgVhGHDbBTUqte9kWogHVptNjk5f2HU7t",
  "key12": "WgxE7Yov2r4sE8caagXDYK3WvzjDseD9MMjsnovu3n9ggtoZcBM4pqHR2U8PttLYg9q1fAcXpbsVN8wKXMoQyYC",
  "key13": "43xuVBKFWnrp15x8y5vRtebA8prBiu3cNcELfACfrYeAGVZiAFjECBpdATrmQfRZL3TUimQQd18wQRnPxfrYG2bg",
  "key14": "313fte8CLcHYvMLxQxd9LDhcAdH4V6LjwR5cXEafouWQ3C1w327x7jStmzVnAEwJkN8q64ogwBQPnK5mNDJmADLU",
  "key15": "3mQ3wJpS2A2DGn14rnaxFnNg5eDnBywBWdmtKiQet8P1D8Bt98SydUviDt8vHJctFgQM3axHdFdLgNwYhcWtUkaC",
  "key16": "4fES3zcNrNTWvbjiiFj721qio4NcRRKntqt9uhvJi56NB7Wiu2vc4HPpkzUAXMo5g81a2GHRGC1U87bcWMgzjNCb",
  "key17": "5kAjBaQgDusvtuXCSDXYF26kQvY89jUvxWWrNCzN1xnAeysGu3MK47JqdJhfYPmQ2PqvaLH6WhLMorse14B3ib1X",
  "key18": "3W1o9rWdrN9SrK1T3ihR2nsyq8vYrJeRvmVh8tnr29sQmWDsACcEEA8rQHrYnug8Jv8GMtspomGay1hfNsFjuFTq",
  "key19": "55xnZe9asqnnxj5Q57ZRvzcJyAyxCgyVZUi6mkWqgGRtcvF5QWpPzMrNQyMRWQmikXeT5KP8j2qSxidTDeyBHVw4",
  "key20": "2N5LEHPNnRDPRuJRs9wpttHdsywfNadtrw77taMeKXRVLzpuwpVShUzKFiNH71d4Jeo3JonX6JMgemcC7CeY4sVa",
  "key21": "2KvGH18JzxJ1droFEpyHkCXcr1fHhNGPK6M9EfFMsk4GUrg7ovZ9QerMZVkeiDn711EEd3odkQjRorW7KpqB1mjL",
  "key22": "54uRUSv1S4uKhe1sEXnY537Pv1xaV9Ku7mcBSsLU32JfGz9qtRFk3oJGtLSLB3ph9fosCqTK5ap39nYig4GbXAEJ",
  "key23": "3PJ72ZugXtmq9fW3ynX7gpbQwiiv8muHtbb8vZuv55HadKK71DHdTw2S2uUUfkg3TsuKQzdziRgMkZN5edG8wUkq",
  "key24": "3D6hRuMDZhuAUuUWdRpA66z8qsv1yuEf1RWE6PKP4i11mDNuKWAeJR5TByFLmJg5gNzB2sPEEhYu178RtstThqYr",
  "key25": "8boDWNrVErM1rJi6EYhZHrjiGBJu28z3REZX17P269UGExiwtYVRxXUKt2EgbkLYnXPEPJMcpHLvcgNuu3FFNo3",
  "key26": "56C1XqPSCrFgThHscVkMmda1eAKmgxgPetxoFPz9HvBqc5yiXzNX26HjNjv22qRWv8vXJnJ2cfXsJQN18wGp4xBe",
  "key27": "2b2NWQJz7kUcqM7R4N4AfmwmnfzsZrCPQWqXGSZXwjFGmNYYLgYYoHYgWMdq2o11Q7WJQHGwdSGNaga2kHaEXv4n",
  "key28": "45vBt1DuGAKSzUHj8L43LuQ5GkAECU1Fpx4jCLAZScpMxGTMm13W2Vb5gFwPmoVzNFvgxsiHV6vxejaedkWCRr1w",
  "key29": "4c4rp8j1DkBzukhHii3PEhE8JDiyTEUMEJk1ZWMcbiYnNykyFo3ApVchExawzMkVrnn6M2aidguPjWET7HfYPJiW",
  "key30": "3EEugfw9x26QzGDotvZoXcw6xc8nNTJo14JwNSLPGBBRpgFMSugpaS8pHRK3DL9zF4fEKtLfC9xjszLYKUKRBfNM",
  "key31": "5yTV641SycMGyK5PVjKTEgHbh3mfA5AnLySKDjTjcH1x4RkW9j6pwHqqCL61ndEexvMWaKN5moBa51bfTpBeR6kF",
  "key32": "4U7SpFEq39nMRFhQf59D5AAe4R6WdTfkSe4DKCiRzbbEdZrYjDe8paVpavAN63Hq91Uopa4yQqZyABYiUodBBWdY",
  "key33": "3FKq9Vm43WTGkFexZYVsnEn6PHGdtx7useXbBFr3STrUT4vTiNHN7aFEgZR9c3YELRrgAQrJMzo1BA1cRQk1kiMG",
  "key34": "5dsmgxrsnFkZA9pA72kceWpo7DZoYTF9uympcYx8J1bwC7T1PyWqmitkm8VLwbpSndk1Aqtv9cqYRFcD1NgepkZ4",
  "key35": "3MsYjB7NbXXeFXHRkzQ7nD1AqmNcd86uMPeADRFZny7JcJyrugfzPzXLnJpnYhL5Px1vTwbAjMrmbqgQQ66KzuAH",
  "key36": "3YtnCemSxgvCpo8TEi3cXeo9vrGmh5iBZCmoSJtN7GV4Aw1pyJjgCsobpb4RiqQyi4zB4o9oG4zgGDNQizwpV4nc",
  "key37": "4iAH5JGB9zSDeHxFKWw53ttLvrax1jcExZkNGxWSujWiMi2m7q5Y1aSnfGA8FgEAaiqa9KfomjQfDEvAUt6GdEL9",
  "key38": "5GYz6Z79e8yiSe25j4xJVEtdE8SYxL9vYNN3c8MQvzdXDaUoT1CXRXRj5T3FrzZZcdpcYy1G32fE4wnz1PbM8yLy",
  "key39": "22HeM96TwqYiiqg53YurJywHDcbwmQrmJSQaWLvduM7fz6Tk8abkLdqiTXbxCG4WF8riSNfm7swdEaTErd5rWggm",
  "key40": "4o95K2FM3V9WGCxN88YZuwNS42KDfoNpGKvBxug5y8wWCWSjucQiAGs6M9ZNLNMr8nCBVfvihmdZ8LM2TA5ngz5s",
  "key41": "4AJo8MwtT6mPhRCp9Wsj86Axzo11Kv1LW2idSh8u8WMAiZEMv6vz5rub6MpW6cnd5gPWSg2vc4dtpHQCmLzp3xL6",
  "key42": "2GTpubX5djyMtu4Zra1AUaXtb7TQM7W8Ah5enCEoHsQn4zmBnVXzQCrdV2EaaiNoGXTbTee515yC6PCwzWhLDgvM",
  "key43": "56NkdwV9STgEKGf4ayf7gDvHBwr1DZpzPbAz8qnYsLsHPNxJdxu6xuxwmouJEDV6ud97UhiD6iJRa6ksH7NDwnFG"
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
