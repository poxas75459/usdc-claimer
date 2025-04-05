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
    "zLJpYFFBoho8jyiAySmyyJFeg3gLtR9x2Esr6mdLxMbABBnFLetaKNf86FUzv2MMg5uuPgRjsCVsNQCbGigwqRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QhAk3eDkf4Kn49p46pE13GKsiAWs46EJxoQqMedyA8X4e7qusqRCyY6YWo8aXhmMfUaf1BBbVo2zBDpnCsExfAr",
  "key1": "2CcGbBPtL9r5LUZ53fExBkgqn3gXhqkXJaDHGpinhDsTtkhkNW2uPN4bmqyzV9vEk3iJ9CRB6jEjZungKZqNQkQM",
  "key2": "5vfTKz899hSV8423GFZWfSYdbX8YPb5Ygz4cfzhUjWwNYb4zNbJs61jEA5dakGzwWbLKdfnngZmJMTfZRLqwABVn",
  "key3": "3dATYZhP9YjrJEX86pXFHwEw2tM3hLspTtsPe9cvcc1jmpa3PsYAK1fS9hHJyqFz1ESri9Xf8DpFECxc87WtZ4nb",
  "key4": "2LC7KWHcGyJNaQmRydKCvPsN6YEoHCr6ADy9kSdHoLadq2FrVio19z75jzn7iAwurnVcozCvTTg6mkq8sgNaxzfv",
  "key5": "pjSVGR7KbjWDK1cb7vuebfawdqYaUFYMK2wpMsULni1EQuYAn8uWszcMU7b2kMnSXkodCP8QGyiP7Uq5bwPQSyH",
  "key6": "duwXNHK5K1JrhbSrFFU7gN1FK7T3emCSDe4fgS9UZCsj6hX6Yq1j6utxKhC8zA7a1xuqkVbwRrrg2Wt4rX8E9hK",
  "key7": "4TnP25RxmX2JkhZTbz4HabkcC4mmfa1VLPzWyNNREHbkQNsXXGceW8G6arghhUunxFuV84Kwdte5FoYwGLt2up8",
  "key8": "37irrChterqMHj9AJcPRwq4bAXhz1kkGefqeC2Q7GAVAB4aw7ieXLjUN7zYNnRdPSket8KfsGuDTmXc3XtWRAKN2",
  "key9": "367rbVbPcpRD5SaXvB1QDhTZen8rAupKFkaUtbTPWRPZznrbBkpRe7jDpAfB4tA7jYnZ3L6hTUBueVPNxDdyZjJ5",
  "key10": "2tuFQDfs58FnU2aXFb2P9CaL8YCxFXH4h1Zxwm8bhT2H8UpWN5HjsXdfXuYCSk4gbV6ity1NR4wMqYrj2GsWLcMX",
  "key11": "L8HUBQiuggRerwRPngKrksCVtYg1PVtAPs9sCsCx1fLN2QybnwmzuzyWtHtbSN3MVDAaezqayGtP9wZiTB5ZyBx",
  "key12": "2ByDvKw2YU7GzQmvxvyqYnDTu6iJYYLcybStVZdPXJVi26QDyuTQCGSwmxuhfWvkyVVT6Rg4CxUyaRB2Ae2o7kRw",
  "key13": "4oSdsfLhwrLogXWD8bDVCaPbFQ5msrqVKonp9fXFqVewL6g7K8RiqqFRCwAM2YoWy33GPjRkmNiznGctu2ju76gp",
  "key14": "4RNnEzNAKEdhXPFHEDf2A3be12d7zg1VhDjWU8PaxHh8BDw8yRKc72YMgUcCX1qiNDvzCYcbpuotM6pPiaza7tzz",
  "key15": "5qCvE14D8Jq39akDQzUrXVfsxZBMTtPDD8Guqb8DNPWSNm34pG1XzhJvV44822xgoRyCfMurSYXtQnxhtPZmFz6Y",
  "key16": "5szMMZhYeudBtKHYCptWor7LFY1BjM7mhvrKTJ3AHgA4dM96MaYxxrB3WKT87qTYmLg2idyDLiHuj26dSaz3Fkjm",
  "key17": "4zYaQoXujPBpu6uKoi5AYfBXS7EN2SXMtAR484YtKLjXTFSgwDxsJrDxCaD541X3HMMnwRfAWRHwhg7EGdtcmyLg",
  "key18": "4HtVeJoa5JyAquNPGgKXxjdWAUQS8gFeZM7x5pjVPeF5yj449uP3MzKapSerfCwNs2HYco3JxkTjM6eyK2z3nzLW",
  "key19": "4AXem84V1CrjfQM2vpQugTTW4ecGCGagZMHYLJ5X1obGYb8JBUXvNT3FEEiEt8m75NdqydZEwefFuaYzM3QUpGEq",
  "key20": "2hjRMbb2vB6bKVNkLzDzRSJF53BsD2ipawVdRfCWnpVxQ7F1rrY39LeiKvdNBfvwpyX5THNPKcCzjMo436df5zZg",
  "key21": "2btCA5ZoPHRR4HDqtfPX9NQZPRHwmgfFiAzcwqGkg3QKsyfrCAtzYuxfnhtCMubgtZD2uUWs5z25PVVt96T9E6Hf",
  "key22": "2N1yzAxDzNpadgtGpJQJqapGnP3m9idDC31wKm6U35ppPmrEM1c9zuZAD2xLiSu45USrmSRCiD1Bses4xEXAJqYq",
  "key23": "5fAze7jwC6oJ8DxcppNHzZ874WP6mSyhviAMousi4xMxapEZ2dh7zKFer7MbvVcf84cpzwpGB8S9oKPNB9HSCi8v",
  "key24": "358zHiGNJ2kpYhr5FE2ynaCSdk1bVg6wXtTBK6TpAbqY6g5eKLkH464mZtsvUapE3yCqrLGsNr1GgsiHiS8qFhd9",
  "key25": "4DmLdN2HcjjTh5B5suupBpdyKFMzV5hEiWK9KVeYFnLJPsazSRvvHiDveYU5SoqVSBmrnSSPvT8dRKF4KsnrJb7i",
  "key26": "5cDkXM1gF9SPdUN3ZVTaBjhVXjhcsH2KZ6Fxjqrf1nkBhSRros7PQSyi4bi9Q81zn2fWZcvmHrYpx2tGuK4ybzHP",
  "key27": "4EnZsRYrmLeSAS7eC7A43fMdgoDCYUeq6qyWw8WTUuoey7LCZffaKDgKubytLK5CvpyohTi2gsaeXzPSEt2U8B8B",
  "key28": "4qmej15FRmqXMo3eKSPf2FG6SCoyVAFFMUjZH9yjrQ3AMMfkA3sBPSxrJkZ7NkKQPXCzyxCL6rvPuAX64SWqCLXj",
  "key29": "59FWiAJeypKpKijvTBSPFqdEUvj1qrGNGufk2XwAitw1o5DbxLfwQYEbX5AwA8qc9AMNdAG8GkX1oQnsfTw5yEpp",
  "key30": "4RSXBHFAfgRerwRcyERwAusGykzQGXwJFHkaH9orjHaNL8TFAuFrWz9fLjVTXzPArv6pgfNsHbFxyq56yHAiPZ7v",
  "key31": "97LRqZcVREf9yJS7Jt1cJ6a6gpRbj8SC7NTLH3p4jakkmo3HGwt7QAnYsoXkP8b2KsSUiBvMzRhZk4UhUeFBfsU",
  "key32": "5kNdcKqQTT79bBi4R496bTdEtJZo3wAmF4vZE79KSfWjANL6vhdrB2hxzQFAzAWkzpaEVJwHQFJg8Cy6EJCWnk6p",
  "key33": "5iXuJqyRUnRojbQw8nWGGYsdNW2uE9AYZ2sypEUH3NJ77uGsXFq2znvU3KsJzEkWi4nVoaWCdMnm2hhcFgB3VrKZ",
  "key34": "5jHVtPr62PyW9VRT1d51vmSETfqmwsW6e1LhyCxAoC7yZ9CdbK6E7CEvjJQ4hNEuBJJip59sgqbTYqYrbrdcoQaR",
  "key35": "3JLyBjXhraCfboSu6uhfMFtmSsbVcwysZ1JViFHUR6PBwz1P9iUooNQi8PnvhoUhECMqqAt8mZcBkDKvvR1bcxPh",
  "key36": "fraKz8Kp5LoYe3Kw9GAHVCnefL6qRot56PGU9BDArqVwvKpxMB4r5353Y9UqjfYiviTB7pphsFQdaitqy1ymDsS",
  "key37": "4Na9Mvx2BSGdGWq19L9Fvivt3ViayVqqud5pmYPjm56Q9Cg6iAFbZzkieesZSaPFFPZ6oRSX1sx9KbqZyTzNNQZr",
  "key38": "5nUeakQwjb6HF7xGrer7rnsArsdCMSVDbCRaKMJFQniep8R2AhZNfhXu8oAka9y8wzvW8bLxoFJSJeyUaYpBtxDa"
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
