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
    "3bCQQcG7aG7Ra2zgfvQ9MCAPX1CX5b2kLjzytUQtCBfHo5sDgM4DXJxk6zaqnhp5FJnm62cyUHBnNbCgcw7ezCe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DydW8VCcrzd6wngJSffUSffSHefpJTws83EX3Lt9ujW4Y7StRjLaaV8qRkMaxCWPrbGoZtRHxJH2Qi5V5UENKWj",
  "key1": "5DX2QkzLCCD4Rpt3Y5PZuPDs7PFVFMDVwN13PcNQaDwTJczHTLhADw9GBF4jYxCgGPNng1iWDCvc21nvChbTGibM",
  "key2": "3FQn6wVU4AZqUCnx92neTWSLCTEsnpNsEPTh5WeDSadP4AAP7aGTkrhXXGuzVCASB7rBAqoRQjiec4bEV6P1fENU",
  "key3": "5HUzhr7AZe1NrWtxs1GM2cf9Uh4dxUtuGMahxBG2fuSzXNQerQbnKjFrGCXqVMx7oz33yMuLWiGoPxp5P5wLXKiE",
  "key4": "4wPd2yBMqmbkbb4dmQLj4a8kBvPEVW3qibGDiMzEkFU4aFh2jZu8WAx35AK4NUT6yjYg9ZmpiJ3dvesMVDU7JLMB",
  "key5": "2YyUoDNWs5CkuJttsA1RrwymxYzGeLhdpXa5WnX7B88bsRitJeJ4Gyvh51RLD8pidD3j3AXi1rD2W4zkEefwPYe7",
  "key6": "3VRrWuxt9nUXmco5B48gBnuRV5oruRwkE574Aormgv4mUUhr2PgxERMCwYMLL4iuJPcYgKC4uVYviKDhn1sFiPxK",
  "key7": "2wVSYJQBxEfTEqLgnB9BKh5X9nr5kkcfptto9Ga13VJtDzN1FwS4x7K1ZwoYQ2gZ3UBwggUTxNWAj18uL14AC67s",
  "key8": "2EtCuc3SFBM2FCjBsp3KNDPKGVzVqSeYUvk1LWQ5HZ3k5E62Zw6trYFYmuz2tkHZ5eiQTW1tT8KWFcGtJpeFuvkV",
  "key9": "Z8uWjEXTDHCi6p7314y9YG2bNymqjVW5mmeJJuuK41FY1atxXv6xCVABL1x8WUbouNnLNMvqEf7zMfzteACpPFr",
  "key10": "yUow751sHTp6K8T5iRwJqGAURxUBR6VPKYF9LMBVMzvzyiRyPhwoNxPDwcsVGepfbcPAiiiintbePAkMiMriJvP",
  "key11": "37c8HjSNFMHeoWsDzANKQjd8cSnkZZLmu2Zmcd1NBm2EQ8tJb8NBTsZTxDBYHuCW4XgidBuNFy8yi9zgvpw7apTx",
  "key12": "2jaGGHZAZSsNNDmFuD6d4AW3xLfX89uihxFTZobQASVS7L3EemCsEiQuD2rNJE6oZRELqp9JTBc2geop519o9dTq",
  "key13": "3zjR2MEpydynmqmT25HVwMDzpeTFr7jyodu5m65q9LKDJga7RDjBjZFfxpxnS9PfQTv5ThYwgXbg13U5vt1tX4PB",
  "key14": "2UKm2grHbt6sAu1RM9vTpPtUrd2YhSmW8QsMEmjcSgjSsyThiz7bMgXZSBm6nmYjuUGThVfXSJi727MinGqbCiQa",
  "key15": "5yzWQfcnGuwucJPwCZJkssBqVi6xRBufbVvzWAmLgbfTpBLX9E3oYs8v3xDHW3CYK1DjPW2WkgcGMiopRQnCPXEF",
  "key16": "4wiytb4EPqTBcFgXTtpaZdYEHG1YTsAiVHWYdg8VmK1Jg6KBvmURE4bdSisMPCSHxQSYEvc4swmY8kEK1Xv1JWvb",
  "key17": "58sKXWimw4jvzZ4dXzSEgdw6vaDAzP1CuwFLqCGg38YCBymUPfDcRKVXpD1zUin1GeKkXwMSVB8LFSAiEUcPLyvt",
  "key18": "4WRutBwaDj3JAGyoCjcVoC8LoQP9WJpRMXPAfbGCRkgKJUHPttp9UT7HPgVhmtreeiwCyJVnszXTvRKuYxFsBqNU",
  "key19": "5iAcWbpdr9tdDtka9UtsHZmzUf7BEX9PqXgVsTF9KWqEDUGts6rEWR2pHYedMbGYfbsWNFzkTw7rxCgc5VJjDGr3",
  "key20": "4So1VjK5LQhzetF8FJg4pFkDPx8UF9C1ybKj5TnVrTKqd2Hnm7DAKxW3R9EY5E7dC9gTwLTAx5LSDwDKAcSHRQf",
  "key21": "4eZr9c8bNipwYVQ3nF3LU6JQ9LF4PdokApwa4hz3a4U1i5JXZNzkTEVGtRwqAKXGJEh9Kh65nFgL6B8We2FjEs6x",
  "key22": "3EGWz4rdW7KpdyAcMUfZ182P5paonRdtL8zpmWvrUdwcJeCAESU4XgKrXr9qWLbCL5AMZ9BLGDHxskGZa9NRvpWZ",
  "key23": "3sGFoZd1uMmvgZr86uFQgb4mzkQrzmTJ2E3pxsPhu3qCsdp23p1iwLoHerwBoL8DHCzZQKRwi2Hu6v7kwfoUSkuZ",
  "key24": "2Nit9bJnxwBz37ksZBMdMf2yFqSTyCJAbw9LonVRVtFugqSeNT4ruzyGA9vJzEZAV4K6o4zuvqgj5nRRcrYMHYzs",
  "key25": "2KEhzZ8dTe2U2UDU5J2CBza3ez2fSsTJMG2PizWK6HMmDGT8w6SbtJgjsLqLNfWwR3tvMyrju9nb978LQFaUkau9",
  "key26": "3r6km7M3KJoHSyBCwS8ZDV4hDa6DTXVbaTwfVTPfJz4V9rQviWSCmLjRoJbu1JC6cfpsUqsVC9xJZFbjchxvp7xH",
  "key27": "4QxyBbkqJEzi3PRWaRgG7A2VXQWESvywjVTv4JvyboGDwP9pSNs3ar5ARiPzKctSeeykVgnCQ44rs8TC7KRu4NMx",
  "key28": "5SB8FwdR2wqwXHcjUkq1sRbz7L4Fk11omqeV1cNf33Rv4EMe2zJzRZTyNSUqcK3XD6vGP7QFbypEcMRYrc4En1WV",
  "key29": "65BD82EaJYpqAc9TuWbpwtxZnzN6Czc9QtmK59riTDTZgaHK9WiC8EEevn6jhFoGzwcRUavDscvyKEbQcVTnP2Gb",
  "key30": "3SDVtzSLAJmCTDw5K2UXd8UqeEbZRkG7j1cAZyWhxReDsrNWhnGmTxPNNvd5pY4UX5y19zhHFtBrcnYoE9XmCp2k",
  "key31": "9XsXgj5CPkhuqDfo6sDSYG3ahs8179w73BckErBJodb2hgx9ys8fd8vhnF2vcbVfKdTDoFPAgyMxY78Q6gevvEG",
  "key32": "4bGpgdZtBVjpSFyngSnpFcGAKwGNgno4qgA8j1tku86kEGxpMFCL9avKFFHozgKSkU2WqbK24p2wH57oLcvoevJs",
  "key33": "3AGwWjK1RZh4LJzyRWLXTa71LGerrGqQaLghF5r9hX5GKghCCFMcmLKbZxbYCw7y9ty4KoYQj3vipH8MPpSZqfkN",
  "key34": "5LGuKVu6T2e6ExsqPzTRxjseZaCg1d8X754BQK6Uw7uTeBDcxZP8D8mZuaVAewWMmBEazb1zfntevZd9umVDdwcU",
  "key35": "2pJdtYYLcjTC1DasPVDwjvwVFapNkp1anNxGneXjHdMmhpv58NSsXxJCDX49ikYUgVuUUuu3M1m9DhjgYoVPC2iu",
  "key36": "3xhNB7Jcu3tn2KqhTuKS1n7yCBVKBQdCtyBrQYrEHaBTE4qnKzHcx6D3i88S9krF7xUhgfJvxxFhing5q5SXRbDJ",
  "key37": "6eJijfSGBStRssB5D85UJr94MCp3zWcxMdWQaJrgX8ro9cibqzc5mYgiLvXgTcxKKhEDdkYjJVQSmQZRrQSpUCp",
  "key38": "3cwW9jJmXLycKhyDg54sVS9KDHfcJKHj2ntXGno2bH8xm1WCcBtDU2LHcHyTPCVMN2u7NVnCAEyQ74mPDK41Temu",
  "key39": "5VXkbqWidURXq35DTjXZcu3q7ex2fRLLbJTb3iinvA44ppNSDJujL9c1xu2t1vgJf837q1Gqgv2jzo84s6ZFZS1F",
  "key40": "5JnohZ258qujnkVv6UP4Dh4YW5gQjSCtAfus7wEQqgeYQPe3uMsTA8axB8oVbiiRksw36bkp4JYNAFuBpL2uK2Qa",
  "key41": "2iTR6Zr6FyNrMS5RA9WzC7AoL8ZNfP7RXxwQByEmPBXqHmyfimEZNdrKbpRBJ4PtRAk3mbyGfLqpQBn3VL2m1nXp",
  "key42": "WF2phhiXQaNCqixAKBb1JBtSw4nkexefdckNPB1ap4g4gvXJsmtay24nvUCoowG77CagE7kdhYVuXcSE1f6LPkZ",
  "key43": "5c9N6E6jwCjQxDYN1kcZnoTxEPDd733pdts9iiWZDtYFcwPAAfxstFxCQENbMHLtB4nr7bvstZ2Bjt59oMAjiAsp",
  "key44": "3p5DASprnekViL7YGYm7GGG82y4ZxgCZCb2zSHJYDP7ZuVcHeHMwsGGSZDT6wS454opskuioQGeK1Tfjq2rL16Uw",
  "key45": "3YRNT9n1Km2RqbCBKFFp45RfhnHpKW64PLCjDR3sy9FB69T96P25pphevPnWgpnPrKSdqsF4h6WRWdqmSxuJnnCW",
  "key46": "4ZfjXNanaG4jBWr2qAQktPMGQX6CAQqGNcvg2EfqwJyEpAcEnRKjvXdsBc5kAWfrfAYUCyqfemiLGXLWy5wFHcHN",
  "key47": "5di9RnvjnB4bJWTUYS2WRnpHucmTurPrGux6wfdex8QTRt4vB2nThHoFsrEeKWVkhoKA3vdrUBdrYdBKbULeLwcf",
  "key48": "3B1iV7tJHxcSJGwJgnZ4YzSBCYswE74zYJy4GyYsLWDQA3i9yH58cRgSsjhbcu7S98CyKy3vxAQMeKpxdX6JDtCR",
  "key49": "2knrgdBvrqejqn5rQJsGGbNW22459mcyhePy7baBfnqehb3p17TjwKNqx5ZfVtF8JPv9bcwQT7bQTM29CbqxYZRQ"
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
