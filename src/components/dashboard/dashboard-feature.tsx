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
    "2sbrk3WDj53aUmWLGwyt5LaoZuHwqHepeSaeqjJyfCtW9FxG5jswrxcuaKPa8NZUcewLdcd4VCKzboAhVnVxG2MC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jygvbbd6NHabRhTwFLMn147L98X1n5taRwoHpkDg1Yhi31F5deG7Dqq1MGiHvzT3d7Y71cAnszxsbedFpyvrkk9",
  "key1": "3ZmvBjrVFjdqVFTw3PrdAchXQDvp3FEB7dPM5tN8xHpPcaWHCDCC3ucDQWen9DtYitfu2dPDC8iCoA1KU8DeEGny",
  "key2": "36oqo6dgryF54hhpu9zsqoJfjrWXqhPnbnAZs5gq2E4be4an9qwZu7rWMnb43TXn6GcBxQeJZergtJ7upYCgEc9w",
  "key3": "4k6ePdBPhE8vWofT5dPyV2wFEUZ5uvJMDiZPJhycBeNZMAJc68hq1jcLn88Lu1iutcWh1xNUBgBaAL37X5ZrQJHo",
  "key4": "4KF9CXSTDGgiYduV3tMPNWFKLWo6FLi7nZVJvT6GAuRF3XicfFmsLxPxJeyfgiEpKf8RkSdrJRxgfaboMXUJ6xr3",
  "key5": "2rXLo5vHEnKwwQdmY7bJcqBFU6chuL5zeVxvpT63Pz3KsNPrpuSRe6zqSU4zU4apid85pWZj4myXkrYWXCJDxAHK",
  "key6": "2Y9VApF1NLQH6qZ8nyAvHbnhNBYeUf31S4KP9pgjpsTn6KSeTuwv6ufA9xRdbSD6Lk4vMVYCSWWbySLQgv8h1gkJ",
  "key7": "4hmSd47XwT5kidvu8hJ2NSrh1yysmTVDYd8Cuk9ZcBm8iKkstXkZaw2a4kzxYzfkbsiJW48ZMoX3aSWS2WUNncbq",
  "key8": "4ABN4cEYLgfT2Gb12hcGfvme8NrUy41TaRz9kztPTKz9iSX3vHFryabdkmxwmrhLNBsmfLeKv9xGo82e6utiRoX7",
  "key9": "4pXPHmpqVp155kqHKJaWWitphepJGWQ8s18SPr6AtkSZnQAnq12YaAXAymq8g3VAQDtAMBonyEGrHGypxBePdJrq",
  "key10": "3AYnGWj6rHL4q5YmGUNKXViZCJbKJtpDhZTeP1WzbdAGFzLg2U9Zmu3etJZ8EwA43LbjXLbizLdiBVmUwkc5DxT7",
  "key11": "2h6XHNTKEVFbyVxGnyVhjm1TfteQttCpoU1Jc2RkkMGEuPjcQ5U7DyzznyzgQLbEQoK1btdbmGfrFw7GuGeiTqDB",
  "key12": "4FRzkLLSMXZ3C4CLc9YKrfa73DWm55UnovqtvncDB3ZQ8jvJw9om7w5N69xebyLEBC36iiLbTi64s2RX5BbQhmf9",
  "key13": "7BVDhGyysHNka2HBt5NxQYTHyxhnNRfT1H2tMVxmyAZSKKBnvwi2drVzQdy7NnXAFdrfkhUeYVX9rpPMqatr9hK",
  "key14": "4ZKjJQtWP8zcdM35KwM56AGwUWyAyrXLdoEJhdry4cWWTfxaNJKjvvBorRWC9sqbYXbdxgZGvuYNXzuMpRXYN7ZS",
  "key15": "2UbRM59SyihAP6xqryx5w4vPmMg1EcGfGrgaCGUupr8zAcozxUboPtz7UvZV7KPRYucbCRs18AiN2mWZEYrz1Rhv",
  "key16": "4YZzM3wZJtAZvdnC8VxAFszQtbeA6jLm9QiSCSC7XLBVtfr1FsheRA6a7cGR2SnJsH2B5XyDzzcvdRg7mokoDADf",
  "key17": "2wE2sVtTeUzafCKVdeysDuMEPsrgH6Vwr6G3RLaNxJbfTR4J3imEQH7DPVxSAQszGcWxKd9cwvCA4SG8Knsy677K",
  "key18": "2LU7uDVRQjdByPNiXk1DxLywwBL2QMY9MmyL3BYmQCpAoLqtVQ2cPv4WDeQA5f38b2fzVutjx7Ak9ji72v6A8onD",
  "key19": "tQ2hMheFNCtaDx3vzPcdGDd8AG1YK62tz4HXdiXFPvyBNQDYAUXjYhaxNJSzCjQYsbioHFYrpyrkZUUBgimfVkL",
  "key20": "4CVk6hMjAb22oMKxTS2b7frDUjFBiZxAhco5DkBfNbbHnTQLRDtc5JT4xCxKCK2AhE88vvrxUfQGbhXAfDTXp4Er",
  "key21": "2BnhCxBfxsTFokgoteP85rpCyugJPy7pjMkAXzK2wqqb38in4uRrATQbKLy9NHAVGUL48b9ah2iT4vr8a9yBZX6A",
  "key22": "2maBJPvnLEcrSNbccFUT5idweFFVG3p5AbB2WfnDi7a62N2L1mDHMq3sM8cZTsrrKBz1rYeh75YJWmZ4k1eoJXcD",
  "key23": "C97sqEf6vTA49dSDRSZRKEZLLAoEpQ9GWoGpiRHiFrpphar1Tckn2aRTT3RJt38WqfyNvbuEtCXgu3qSdtnN3yF",
  "key24": "bcD1wnWiiUogNf16C89LEqChiWMGDPgywfBC8X765UismeVpBX5HDKfN8o8XQ1iqELUXQ6DwR4uhG9wKY7LcQve",
  "key25": "2FS36ytv3TR2kp8vyCmC6EHPwPpttMD3ZDehsLVaSeXciakghPQfTQvzhiWTYFAs1ibEWQGfzraJUEmxY4yQi25W",
  "key26": "4UqY97dU98CDZA3fkBcMxkC6fXues3uhSEidH7cKLG5ysZRKSjczJT4UJMEDMVoSd5XF5e9z4JzvPJWAiTU6G7n",
  "key27": "5oRzCBfyQZZ3dNamPtmTUdNh771XKpF7poByTKp6vzztDWPTpGLKAU7jW1z5R4UT9vA6g6tRQ6euJb4QxLntLBcF",
  "key28": "2Go18qi6ha31iHW5grbPEDGbtJb3eUvposHEEufNLHhyWMinkAtNiCJMXVEonyub1EnGP3b3i7yurduPSX6Ss7xH",
  "key29": "4gZBVFByxLwiaDZA81AhKPJ2G5o8hwobeTfNKc37E3aq8LjG7iD6BKH3ZvZvu9Jo8TL4HeGB5ybot7maJ4psVvkM",
  "key30": "4UXVG1n1Yocw8iU5Wu9ZMNArAsGcq7ngxyhagqBpT7JArR85wPpdvucpBmXBqvB4raAsVqxzfuDWf6siBebpUZi8",
  "key31": "52GtfJDcvUWpsQuxmCYJ9mBzgtTyyFzfUg9ukrJSBzLhxPhTeWyArP6wEemz8ynr8QqgHycgWPT64ZmBd2ji32jB",
  "key32": "4jtv3vntvmc4PytLaF8nryJnBFVWZg4z7EqG4Cmdejr5pspmdfW6Miej6FNBAngUFQW2FUWsfkL5sWcu3JXzvj65",
  "key33": "5GUCXvwrLL1xuDFx6c4w11dZPQaF4RfrZahNJ8uLiCr28qyATCrgfBZmkfCvbpJcNvhk3osYyetLAT8s2hgtiCLJ",
  "key34": "3St6tUexPFE3wD6gegLS41MevcxvVUVdnAT663hEEEpBpkhR5r719gXioYrw7qHgzr6sMy5e2xbdH3fCL8DQWAQs",
  "key35": "3UUTx3omHQbyJukVvKZNXNTKmR6u4QvH4FMJJqHHwpzocAbEnaXXZKqdR4eHYVFErFt7VfkxFCUV8ECojFhXjuD7",
  "key36": "5rM7ZFCUMEAx8tUcJBCoa2frUGuqYx9D246QhsSZizsYGA57Lj6icLw9VoWtnMDnKFDs4Eb8kCDQDsRVemNvFeCa",
  "key37": "2VjwDu7raJZFUYeWhGHuLCFsdmPCfnHnUejCmDchVJzqqHxdJmWyzVTxEVHzZDnLkTRwcT2BKNYZN9sEJfYc6WvV",
  "key38": "4XYCy9kNG1HiRDxLZTnc5MpA41YhfmQaMoigjiTVWLgfJiweigGW323x3Vw6uZrWJcv6gC1wBGdymtuKBTSZmSib",
  "key39": "2bHyL5bP6TLhxRBx8oWp8vNTa9hmUisADeHneWQJ16zgMzwG2GwYNwgG1g9jUfxewj7tUwdCede84DxLjZaY4hoW",
  "key40": "3V8J7qQ25MQXtJj1LHYedBbFopjK53nrKq4XPPbwHiRANFYqPbjcnrFktQgsyufwgAibjxCLQCa52yfymCpPfHdC",
  "key41": "3eVhG4M5shEaJpgpvU6Tq5Ai3H96XfRYXqRNt61xzTnjzn72NMB1Grx6Jcd1q8NpUkF1a8wijWSExfqxhZjdxiG1",
  "key42": "5gt2CXsZe635tCw6ShpSk8zHGXMvA3LRJVBbnWuuaRkUachNctZs9SFZCNvCxrY9LoDL9SudLmhLtCGWaa5cmWPd",
  "key43": "4JYsgzRD1tcTC44RQ6MNiefcvb6UsJZKQURnaTNKGU95YR5i9h9ryXpJVWWWAbRvM3NVFy6kYwGFCPhJXwbAhiYB",
  "key44": "3BYroSjkeZu9JZNxKXY22PJvueyQpfoKGbq92pF9HTe3GYRV4f4c7u4FaTojGaomGByvSnknMGMPdhZDTm68eG72"
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
