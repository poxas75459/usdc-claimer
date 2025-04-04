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
    "2KFrzz5BejxzUJhqGUvh7V69X2UN5evRyUNxjgCMmhS8YXVC8KTRksxLVovpBzPvS4FMw3NEnbJBNYpjf1wkhnHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFic88VWumK4F5N5ttqv21qBKtLVjxFKRSdZMAz9tSpf4u1M6JGewPMGv4fzF2zhbSjJjd2KqWDBVu7kvZiccTD",
  "key1": "3cq64Vtb8xLtiorui1CHvriuNWJY9fbeZXQoA1AUuEM6UQou71zF1ReyMjMkFmgmwXnzQeEU7fidLrTZUrKQPBGg",
  "key2": "3rwNsxpsSaKmSViWUCRxL7k5zmHfFkKJivD2ju7mVydYYudQgTpinX4r3JUnhUagfoU4spVWy5ZVE96yDkAZvf2U",
  "key3": "4237JYP41Stcrma92SSJ9MPDB2pCCGk2jGJzxcUPygx5rEvfvceh6j83Mh5oWyPSaEp5NXcZgn9JnHXcY9kqw99o",
  "key4": "55wWvu6H9BwEtHg6qnGWJiRVQap5b1SE3SP3mYybyKFvBRtm8BCm4gPvbYFusnKw3cxGLK4DF9pzrYVKBCcdjQjZ",
  "key5": "65qNYupxPVhFDjRfuffoFsab2ofgt2NF3pteck5D6cvZQjiLbQb1mHGuoyhLQT3J6ipgnnWTzhLeRjKiKVFmSPkr",
  "key6": "3eoigF4YWmbe3TPbhy6tq2rpyEiQ6ATYvYmi8R6yZnZo6rUaUfktGDmSZXG8P2W9GjoaE967agFqUSPJ4ecJ5bFQ",
  "key7": "6SUikLqLMpZAdHvrzzFreB3k52jCJpzYTpThUo94DYKr8Hng4p8coGCkgPzAHoYTHp75JxZXUTkopqbSjWGxscS",
  "key8": "KkRC5PzadDZZNaV2jSayUh6dBuVSYufDxftW5ZWp38PfNitFETooEeo4YK9DW6MjtavigxNRdiLGPGqySQXgnvu",
  "key9": "3fC2stBBR3d1zdodG9283zDKPM8BSLrhtu3BHYVAjyCLe4Dgng799cTn8xpzybX4KSLqgdj6RzgBsYZNo9jMFQ8p",
  "key10": "22bLffJqQ66rdFcVaso1c3nBXLwVeNAK3VWNPpZHsbseTdDXuV3pp4qd3gvsux89yzB57MGTC6v4pRi4tzYDhwNF",
  "key11": "4qu5NsA2byEs5NzinrCQummJXFTrfdmoRw6ESgLJpgrR79HwkErNZFVWEyfog6vDupyxZHktHjnh8Gatm4Ymbw6M",
  "key12": "4teW8RPKH1LQni7SHGfA2nAybhXt8yKCADU6jQsdiHbtkiAjuoLV6Mi8e2vvLPtcSFi5vpGrQzebT4dVGspunjph",
  "key13": "52WbTMLTwqhpgRZUXftYod2HmxeZ4S2qkun6RsnsEwpgz3gbvQrTT3ptnphvJTjSnFBkYcsqwGv7QExFhnR9Nxuq",
  "key14": "5vpEnKZm5HvoFqZFYGebjJmPKVVZfEDeTZonUaCcvyuNUH79wu97Cp9UjaTgam1G2K5q1g7bKAA5sN5jVKe39xhu",
  "key15": "yoLRoFYEF34enpGGhwrUdS874vfi3bESJupr9uqd16xnhyCp6r2xxemXtktCnpxNGWf1NXtwWXy7uFrDQXs3Hmz",
  "key16": "5oqRTAqfHXiPEpEQPgU3Y18zkKdDfn6S1GA6UEBvufxUg72XiAA9x6YtVqto4WMz9DMuf3H9Zn3pJCRdRWVywaGB",
  "key17": "2rMrXHBs3Tj9JgfMexFPTY1Ltm9U39zWnzrGrccDZrdYN23Fzg5CyBM7Fmkma938zGSaLeAh6qoEdMqKVQLgYsw3",
  "key18": "5ELX8PwnexMm8DXnwFezyzD5bGJeALYYn4TTj1J2M6hNDgDn2PtKvgedh3ts7EqBUgny1qV24JGjZNFi72GNaM7",
  "key19": "5UzU8KHk7ef28LLxqa9mKz1am6gV9xLE5b1h2X38iQSnGi1tXWS8TVG79mK8t2JKyqcNqPxnd1BPEfD2BNNi3YQA",
  "key20": "5mS3UtiFDVeRikCsepD3XsfixUk8t1zXKshH1NtbKYssutPCWiH5TCLudGbnMtAXRGTyLeB3BZYFVmah7uV3kVy1",
  "key21": "4LQwyzyeRpQCWbtM8o9tLvgddpr44fHkL6gbDjTsdeuVygyqeRjFoAUaP94izFLgC4zNNboSPA1GwvAxXXjEFpXc",
  "key22": "2T5Vq2BRojUKhyqKt1HhxMTNkcTmncq4f1YVsTbJwsh2nDj3jp5cM8mjdE1btvsqdTP5EVd6okiwyhYyqyR6D7yV",
  "key23": "2SSvYFuGFAxbsHAVJv9SURoXS4NjZuQ9iDdWh7VekLiZm32SX1anFyMiRe25tM5s83Bpe7oqH4mAc3dtBc5inpcK",
  "key24": "UMtZg1pFUN7YUKJLwbLgVDSTBr2KPWMPjZj8tWZFRQk8maY6zTFuFzqYrDF2kRtwZrLagQFA8JhvCtmpmKDLsVs",
  "key25": "2f12AJY6zvrKmvJdAeim2Eo3eaX6uyzWqdwm3tjS3oYxXcsVpn9QCyZkzEYw6aNTYpZoTyJzDr7FKCe6px6H6ggV",
  "key26": "3bozcZhRfufisdz8cxm1hyxJmGog7zRnXcdZUQozGyCrw4VUWq7uYG4NB5ULCXJKaRKkCbw1LWqemshB9ftKb5C6",
  "key27": "4oC1Q91o4fMCbyzx7iyz5zHNvdnhUeTBzaiQ4R7sHwxxysD1tXGWisENuwRWr7nZtU3R6dSkvGY99jguxg4rLTuT",
  "key28": "3o6uFo5y8GDwv3ai6xra5ZA3ngfWnJ761d8BLgsfMbv5t5mPunDcxWhggbeT5zj1i3QufrJFZ1qS5nKnZWNPQuho",
  "key29": "ootTj2Fy3yvFRRdfFmoPPpg9n8jG8fKZiEhBsEA3rUV2AVt23DbtzFHA1snGtY5B5bABcvJjdvE5wtSktqCMGS1",
  "key30": "25GgrECpNxQe51pVJNfDF5mGzgtJVDQaXZh14nXkL9RNsSnQWeNb7k7yfQufjdouNKUHF7a6fwDSbsSinkp2jEEK",
  "key31": "4uA9WDaVGjKydW9HCAyZJ5fRsZohcc9HU6yNodk3BkvxKqZQCcaVs56qmpnZWZ5RZTf7TfTCJZNE7o9U3hoNez3X",
  "key32": "5xSDnYDgtqZ3e5jxnDbmWnW4z89Vx5GVnae9nkWhWew6LnwU12uFjZxxJubSpRwDT3DstGFAY1PWBtoSib1x1KuC",
  "key33": "62ZyiaE51YuCBFaNbRQFz5TjKPHdDemK2JzZKBLaKBsTFNT48kHs3G7N9z9pvtuG6vamMACSgvn4cPouwAVphEDh",
  "key34": "KUbin84Tz6YiXZ9jiQVZtVGaMtBZogJMLKrRCuVvAGn3EJd6wbdarQn2VDhGmrBrMYqngVJzKvVStEnjHynNx5s",
  "key35": "AKcDadok6bSratG5qF4mUud9mqfMQB6ofHvKSaX5h6ysncU4zDogfGsBvKvMHfpWjjhbZt2uPuaz2UqmiXjPUTo",
  "key36": "5gNfi57aa1NTz9KaXsEUYSdwGY6Qp43JawdHkfdMyfKwKx6afJ5jP5w5xRBHdrAgLZhtdqME62JdtDazmPFTRFdp",
  "key37": "4WA2F9CtXiv6b3p3rjiSf3xPG7J5GKhqw1CALVeLjbvY7376tBQ8yFp5HCDvFaWL238Lz5Ao8dn4b2aYSpKHMCsx",
  "key38": "4weXUbfLVX3Dc3wdAfkuUv1TSmnn6Vg7F9veXJweqh32PEo5Pu97a4q6vbgeHt8UmkcRkHS19C3Le4ik9uu4H9e2",
  "key39": "54fvBJniZJ5T5Pz8jhj6RLbRG8Lb9ZRAWqvckLyw46wuWdDR7NeaTxSBRG3VXoEn9Xhc4uDNejKmJZDQZ5ros4qF",
  "key40": "5EvQGdLLTgA8BMNwCXPGZDRkTM5BeXq1n9xWaBXSTfQxahtCuFaSnjPLtHykEPFobS6jLU7pKvuPA8doR5BwqvdD"
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
