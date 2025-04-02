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
    "55MK8Ecmt8j4yDU4mLUry5avH1Wt7RtWthbmVStnry1QKTyqGK8Bd5fm7718ssuTDiDGeqvynszprYpLuKHrW1g9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xchq6t8EguJXQidfkGyJ8ik8xT9r1LsAxfFN1iZijEgAvX4tU2hDQEj8qpW7WoZxQNebdKoeDvGGSFk2ULmEV62",
  "key1": "4Cw81ybRC7y6yiRjWZPR7ttxKtg4qXjtiLVfdYJbQEPZknz8KkqDXskKJMLuFhPjes6HwcAdctn263f8PNJrnrjL",
  "key2": "5YLxRLtZTFKQWLZE214NuHfpzqEyhYjh3LLwyBGRW39yxAt8ZMakNobqXFpaLcByY5YodorjpLMmqXdUvP8APniR",
  "key3": "4ucrqPwaRbWxcT9WKSW3SkcStowF273uNNHEioZHAxiiL8pikeGrYA3GCvbGuLnBFnbE4o6qczYXzEphhu7CJ5eT",
  "key4": "4CAnB2ZaKbZGEc4Juog8hC51A8VbdLf75qaogH64K14G4Uwzqv2L9QA11JATJ211sLNJAAShwQW5sh6M6qDKTKUt",
  "key5": "43eL1NjviSvefmjuY5WbdwbHab6pNP2LKwZERj9vuh415Ta7h2nVSPu3xgUWnzFpfeP3nHqN3KzjtH4GSzokr3Un",
  "key6": "58XMppSjVQKPFnvN87FhfHmUoP5ttzEBLZyRLVSc7rEJF7Lempj6edTJzJjBCR9Z3mcme7WtNQe22bpzJLbwfAyE",
  "key7": "2bb5GYetq1Ku8eb4Uwn8v5z2JTycDe4qkPEs6vy2xYnWBPtTB7DF8oCNJSfU7yvsAep4Ytubvh7sNmMkCxNopxBD",
  "key8": "3x5pHpUhogHkwRuHrap2TAaaCL2z7sZipWWpoXH2omgc8etALvePQQAFbYjMbwFWLSECFuBKshNMrixAgnK9kQQL",
  "key9": "4Z8BhkiZZDHVdES7GAv7E1Uvg4Hq9X1Da8uPpjJSftK42ToqPqJBz3Z5TRpQg7seRqqex95MBvRXQKR2hegt39pv",
  "key10": "2XmN2rCdpj3MU9BQcsHyzZh8oCy6rM4J8wgqRWeRy9DGLYo9EcsDCSYUuvpjDNHyuDSBu8jpps4LVxQYVAKoE3vT",
  "key11": "645cxAHmFPoxZ5EEkxkm18HKax73T6Y1zxRJpCn6Esu444MQ9eRfoaLKTxGtCMyW49AULmb6hdNTvpr9dSJuW7FW",
  "key12": "G6QYEUWc6pYEYYw4NyP9Ym7WBWg3DUk2TsAEo2w58mkAaaLWU3zF14eHDVNFGE82q8EixNyEKSVWUZVkhyiFzvj",
  "key13": "573CPCRHwxxJ53gnEP7J5w6LXxN9t4L4K44LsksedbosN7osmqkHU7NoHnRp2KrHab1wLguHryfpoEieJKWcQeva",
  "key14": "5mXs1ZUUAE2PAM17bsNiaasUmXggSb4oA4Fz7tAUhFskqVXRebqASn92xEYTSSi3fJrtGub1tcVaEaMTSQES23ac",
  "key15": "4vejbU7Fira3rSDLJrjaT4wCS8H4G2kiaJ5ytX3nMg9mDT856TaPeN2qkPYGVyXwWTRe1NKteJRTSFqw39TMsJLu",
  "key16": "817LvexKni9M94tHHNz6vafGPcBbSeupsR9V7gWGooiqfva18CDpcexCSkWCdDH5qGuQhEQUkoFTsvp1wo7iLKw",
  "key17": "4sxQWRD1WxyQzm6EHb8ixmyBaF6Ku2uo5rgSqFQRtB9cGWPjW2XSZn9PvXxsTpLbqf1rhxyPFCkcpZLwaJsCP83c",
  "key18": "4MBciFqZ4ehuZ1oKdDh1Xk7G5dF9oBkrB2bASxGznCbmfdURPwjZtNWTTyZP9TaALg5c579AkY8N5KJztVZhZwdT",
  "key19": "5ajtPNL5ihEPw7cqKUnKmrtWNpnKU44o5itZSfGRL3aSZXpAupArXioW94noguT2QqASUwbPXSfeFJ21ETc3eu1g",
  "key20": "2LvfNLsi7JeRhBCkgomdQZuZkiC8suLDFj6YwwjxHQiyzZaaKmSPnfccW8XJYPSpZobcgFfA77f5hD2TgFK395nJ",
  "key21": "FLCUUX8EE7SJcVkqUUWhLMBP5S7nsSEXLzJbBJnjsamFMkJm6qSEyTLfaodfE8jA1zWSqKR2AM8kDPifZ1dtgpS",
  "key22": "5VrfnqrSp2SNx6r6dSGdb3xwiE94jtTPEkQzAj3TcunTjWHSpH5QoVzPSEjejo5kxHpfckwivCuMRAC87m9oQHRz",
  "key23": "5ewbCPDJ6fVvpP8tZpPrj3wZ5iFhrMnemnw8gCohYG1q75AmSbtcV1BYrqqp5RDvoj3ahpPouuWXWLWNDC4y2m2U",
  "key24": "2jvkEdLHAjo7Z5VTCzp78VttkLyCvQ7nxSCAdxU2hfUpcojxozvRf77rhSunB6RgwgwTYsmnZYEjYfESNs4YxvXD",
  "key25": "2CxfTZhJ9VtWDtrAcTaGZnfvJhmN6RvJc9aF8iN5kqs5YTSgQxMCj6ScMdYTz3PiFL1BwHWk4SJx7TDhBy5AHWhs",
  "key26": "58WZ4xDHHJNd247skzmoCRnNP41stqe6hXzLXXUC1Fguh68EzD3eBmQfoyKUD6M3LhUWyUj6pdZASsiZkHdVTkP9",
  "key27": "3nnYQUv1mNCNzeCtvMKGSoa9b2gdrSDNmR7Sg2WsKzEcwk7zntDsdYqhPQxrBSC3cuH36GujZBQS8RPqgPfAKUSL",
  "key28": "afjosq3op3ufZSEfHBsZtsxQYApfzzTguaJwjhqwtxbsEx6GFjRDJZUZLtpd3ZnWwjf3Mdf9V4WEX1Us1kveuYQ",
  "key29": "p2r8bwh6WnB6TNPEcLhLYj15gsX7oXaHBE7ZpT4ATuVUbcUcVzvWHpfuzzCgV7ykz9GfXE6d1BYN3EvoyLXKbFi",
  "key30": "BJAQ54d7TkstQNPBQDUbgyXEJyoF5UyFYphNZqnArciwSFY2fDpoAzPjmWJz6hGwhESWjryd6QUAAwX5UppVPcu",
  "key31": "4nG2uTz17JgvWKtw3gm2KXL13bMRZ2Fu4MVbh5kekwQ22a4tXxLQWMotRuKqdtcGtPAdSV8WyvURPP6tFLvs4SBt",
  "key32": "4CYKnfeLSv3t4Qjah5xYt63pP4Rp2z5xND6cHTknEUsGWPW5Smryy5muwwz4mY8fGN8MNYPkgej9sWsTsT99fNFn",
  "key33": "4qPSmnL9h5RjqZKDtnbckGejvTuSztpdJpdvE8ttN6W2N3TRRL1YzG13Ja29RqpT4WBn7QbUx38YGb9vjzT7mdm5",
  "key34": "63EXWnw3i2nzmnBkyLs1EtnZfay99yfyuGsj6bnkduWp3edBgNQbHgbpmjZYRwvs4CHKRTphA96W98xCPmV1JBmZ",
  "key35": "5JWgx49zJnb1KVv614dTsw3U4dsNvbCNBDwtVQEtuu9w8tLsaPik5qJKMhmDM7eQhEHDrMtvkyHqmcwb5uu2jxbh",
  "key36": "5nRkpdt9fgUhmmAXsHgEBkzjpAU6ygHmgRY4sk465V8A1eGmLj9g9EpGYkF69PE5bQipT9hvu6gu16zEVhcppkYr",
  "key37": "28E6nNsjrvabnRapuVC2ZCHiyJHmxz2jYMpYnUUVrU5EZTTaaL5u5nQvok3nSAFGYgmmPLv9bvdfnv5umGVUcmVt",
  "key38": "2WzzYufgB83zn4RMFJYGaWE5jhGMGzQgmwfDCy477Sd1evFQQ6zLkHLpMW7L12RFyvHE9pa6KPpfbFhQHmaWH8AP",
  "key39": "3sgFhZKuJ5TcAGUoyed3sMv6ePS1khHyahgqi2QBPCAMWv6C16ZwDUo9A2rkUCypsiwX8r1AURYJUeGeWnnpmAHf",
  "key40": "3c2EX7Arg2QiZSUdf1V1B3g8F8GGhNye5J3VHXGyDd8GJJJhWHq9bq4KCEfjCddnSUN37ZTx4giRWC1tLfuwkn93"
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
