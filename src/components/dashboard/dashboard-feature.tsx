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
    "4yYcJqK5j1dSD7e6aFn5ygi3CBqZy8WXjGZAWqhANKPnzUzkkcfcup5j2XLqbu3gdrNoqQfbwDFw2mTiSa4x6vW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gzFLaSbXaCCWY3zmoGmk2eueESpA4ic8zQoSicwTmJfrDLNFF2tcyH9B5canv8NGgEaxquhzUq2rH9vae9HngVf",
  "key1": "2sz5G7eUJg9PEW2NZ78pnpnrMe7f1vKkrnCtnezJT1SaY5ATe2ERhctTQ6bCjYRn49JdJ3HsfeAyBSKekgUym5LK",
  "key2": "5mBVL6h8EnnZEEzLxWTEMmLj2dGsqU4VuoTPD6FBswEJw1VSXSDo7hAb6GuETiJbBxhq9S4T6UzmVUEYugtMp4Z4",
  "key3": "48J9TCbnbEbZmHPxqemdH4miJRR4xfMPMqqiDAMMz9pEAZPTFYfZCbQNKf1DaNj7xKUhMyCpvsBj17cEwypSNKCT",
  "key4": "4Q4LeKqoq94xohUudVjzuFurDPTUh7bPoHquvBovyzMTHoTQr6gpQcdw8iDNTdrSrC8A62qmVPQLNBa7eqAuJ3Fs",
  "key5": "5ZVPeV9tG9iA1wuXB5BkC2CDZsmjoDytmza3EFxPEfAd9XCdbZV9PNPdSxwf5DYWVgGGWnkPBBeTZNhsGB2v52ba",
  "key6": "2h5PNWphmPGdEoWWihhNaYRtaZpnx7rJWySy1ZbR29PrMrxQXDK7tzZKVZriXRtmGa4LuQAgSSpdWac6mAx5d2Qz",
  "key7": "4zcFUwj4JAvgofXZaFobGPsGLuRA3c65xLzYSbBXQ1nJbLmjjVse4L5sfcrjX32NHa8bdUcobKw9QFXGwe6vShe1",
  "key8": "5LcgbKizGB4xVn26wneAFYnBquzrnbY3Wxqm62BJCAqnqXzt21rYiraxXLLyoL2MprLKprUMfR6ofN3yKih9N3eL",
  "key9": "4zydKdrDVkUfs5SmcSqBqMi6rvKQbXDJu5drgsXm6EGT9JZfcCX4mHQe2wr4wzobAD7vV95Sow5bUFNB6zx9sWLE",
  "key10": "67HGERT51vTqrt2FnzbhpuZWn3bzffgyZGjru5wGwjun568ccKFJnyrYJgq64ro14vLudRQp5zRJu3M2yc4EHCTS",
  "key11": "28zxU1WGBGzz7tfyxWp5zkzMDeL5Sd2czZETAmvbNoQch5a1utEsecoWsAiHtvvWHzTJNciEwUbVFqueRpMZjSPw",
  "key12": "62fQzRCB4t8fH8DMZHewQ8bAch9TFcmUE3aTDqb4a4DpEuQqhWay9rQyQTXKq56DBVNzSt6GgMoXoPkXGDTyvYnx",
  "key13": "rvFVNw3prAhejUEMahnTyArifRUKX1rRSEW1GFgfJFYkxX8v5R3cLrn3Bw1sDfpCVToeXxMWwr7VZFBq6Ut9tWv",
  "key14": "3L4wcW8wiCmw5RaCWyUk6aeSEsEowdipMrouaAN42qsRJTUyqdGn9zWoek1xSVqnKTBcydP1JnUzG7UhVHQAvkrM",
  "key15": "zcS8MhstxXLpzbKA2P2H71AbznGr9pej7gqYSPsaHWuguGae2AcNHm917PM9YyxdPJv7RKPk32FMuLKFtxx6tSk",
  "key16": "2pWtcgVguNaUNsZG8AVsN6DVV8MsHKzPuuV9bNndJB6gCWrkTRz3Xts1FYy1iBkmAp9CzpLP4ZTWBT8q6pfTGwyJ",
  "key17": "5CUGRNJpF75DGGiud3iCt8nGPyrnhAxnzyGVLsqaX9Ts2MzMFDkyDMmVxhb9GJT7Y8D8WDYzgGdATNp4Bq1ViADE",
  "key18": "4EprTumw3eJJGypMH9JpijboXyV5Uvp4jSh6C4QnH8KWy66cmv3dKpgcuXqBJUTHMRFPzc72UTQ538RuD5fZytGp",
  "key19": "2Vc2M8nBD7HFf6vH2PXBVyRw1RVwNd8cezynBJoSk1cGxsS8rpLFeawnG8tyMF9zQVC541ZRNHSobe7skSgAmrYA",
  "key20": "odXEfAi87vanUR3D4GTE5UTzWQufZamv9Ud2QqbvNYHJCtD2QE6Dr178YMVoRufxMQRKWoFBzv51xYoG4eWbMRT",
  "key21": "6BrbCaJxYiZghQBLKLKzH2Z9xw6csd8r41ASukKdKwMjMkA1zVjBSbLjCAPCsddfmYkeBW6Zg6Jf61mxuUHpwLK",
  "key22": "5zV5kP3h2UNpEKoDcSmvoo6wmh8C8MSg416wsudDSriNGFu37jmqtbUcq7y7prwkxJhXcnZN4s2JHn5yt6mjwLCi",
  "key23": "2SjBcvh4iMcoVg8QGw681erZxtuFbjCXRHtXW1ab3Xs6UTQUjb6wxyESikeiK28HMSZ6jJAyffWiM3QYtGWkG2NY",
  "key24": "3KZu9V8j5q2BXue5GnpGYvvrvJzFKVDAR9v75wQ847dfE3jscK7VX6b78vYxHkocyKXdPe4wX96exzbb6GZU74Aa",
  "key25": "2WKigZJi2z2XzKRiy5Swg5EDLn2i7XLKk82gxDCp5vXnDPBUqPyHotCVzGdsJiQ1CrConr8Xkn9Wu9h5KsVo1kVA",
  "key26": "5fMMYKnU4x2HqCA7hd3wfkGRB5YAY5TQSVY6cgapP9tHZVz5JU8DyVfxqWvP4GShWRwpjKUXpRDW88xJJg9ENRYb",
  "key27": "2we961d4VLVj1tYmJvxkUbxhKgtZnmkt6dv5X1m7tLzQDmKgDgafL6Bqrq8RrNvU4uA9CNTWgfzgy98S8dAA9Tsb",
  "key28": "2CbFucP3yEQKACf9axPxePdAcdzYK2BD8LXR9KSjSF2Bfmq1KivNNzEVv8Q8C9FqLBAAmTE4QQhnT1pQ1zq7PE1o",
  "key29": "5K7pmK3LvbKLhUYufRLzRUtcpjwnZ6trrgxXWoQfLDLRtBr67FVRQbaM2tvz3iXP84u5fDtuXiyPAuFpKonvMD5H",
  "key30": "5t64UZW1BT5SMrECZkDKNUS8Ey1jKggqcjkxfy6JS7CFJo5d65e5krJyVPzJqQtWDacGhVEPcp4UzxhNXoUvyPU5",
  "key31": "KzFnkeC4aGhWgsYwojFdabVays2qezh17mUQwJ82HZdnGxouyy354MnwaJiPsgMhKBzugaTQzR1H8Sychxoxxim",
  "key32": "KTCAu7eEpDRYvrFDMcoy5RscmH4fThhJLp6a7SXjpKJHHJY2tUEVop9Dm5ocF3fouEgZybhzCudxvMMVSE1ewqk",
  "key33": "3CQKJXpf3RGhWKarKUYPGR2UadbdC3ypdipRPc7S13cLCgLbZU2tKFcKzVX9x433yE333F5ap52LRp7bqJSU72TV",
  "key34": "9DcMJtgMMkUa15J2Ku5okrNhy93JNBxnJ5SP57gZpRLzoQ5uVFTzTQG5iFZxrGgrYP7qL4afaGoowBLyssaGP3E",
  "key35": "4ymzi7qDR5yRBtRut7GeKzJcYQFbFD7UtM8SF41yme43BvA6hqU2xZzSrh14UkM9itFZFu2ZiPjUPuQatU8Np7nN",
  "key36": "42q5FjUMLx3u5S6fqkg2gDxL5JCQTHYtd9LXFTwFAvs9ycxronM7xfD59sUXovAv4FwpSgLFnBUSopnJUzCaSMVZ",
  "key37": "4WcqDN5nUxVqozXTWPBmmNFqSqZUbkQSsSsPZ8VpqHimZRqpa1VDfGoYJMwcxXwtc6jW1RN2qah2cUMMAQ7eWt4Q",
  "key38": "5RaVns2BHVGZD4t9pDHLvSQiq2LyTzG4NDTAcvadiyYXqyHarqKNBFjTFeqGsPkLyW3rpmBUzLurnHJF2EKG9Lt9",
  "key39": "2CDyxoBwuE4BQ6uWDd25ewd3KofVJenL3hwRNd19JP7Nje6gKSoDHzjaSwSQ7jtkhxkN58voGAzPmFWfT4kd27LF",
  "key40": "4HpNsWeZVzSK7Qy3xWT9XvGNAiWttEuVQnYgRwZQGoZvmLvikszAdCAT5i98AKkZZdZrSneNpwjjg3SDTCPs6JfV",
  "key41": "4tPC33i3MSo5wT4FGZ2Ke6qGYNrjc7EYVfwxc16MHGehxw4KDJy6hua1pUjEiHArv4zdtfM7cMFjb5cg7ULbFySB",
  "key42": "3CHJdnXAhRytueNr9nuSQkKA6iQKKNZVwXm8jdzn9vKTPRxkeLHCtoVuDhMUGFFLM7FHSpAfTP2wfwVPJgKg9xbD",
  "key43": "3DnpjKMCMa8WqxwXcHFU75oCDrYsRaBonvY9TrXGU2hwcWKwQs14p3GcMG8EatS2XPJksWmyM4a6uCMXbmwSDw2J",
  "key44": "5RXdRwHgHRxSSBdLcDzuJKkmebC2pds8i8uKVTUdvnvh3fPYcmepMEzkdC1gUw7tTGhUXyGYvagDobeYAh1oVrkz",
  "key45": "483NSviMgeVi91xUsGVU8dJysC3JGaRmrThEFTXYwNqJCvxPWpb1xMWnte3MC7sEHMKronZjbPcBV68nxUacXpf3",
  "key46": "iCdUfWp8k28omenVzUaD3oxRHs4DeXNRmGjQPoHkamfCexTrSEsaVmo9uW6NTk6CKKERFaYVBhxyEsqdw3BrasN"
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
