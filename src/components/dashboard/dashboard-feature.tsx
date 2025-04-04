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
    "y1Ab9qQ2yegMfCftCKtGA5vkeSSKzbnNDQPXBFRpbVYzLtfuQ7Fydcsh7qasK9SqJEp2V7xxCbb81bgko6MiTUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39pB3aNpAP5Wu6G5EMAPqLixYJgGDf35NULa3Xq4sQBNJp7pxK1y8w4LB8o6k7nYWDk7eqAzRdsdirDbBm6cE7tB",
  "key1": "Ve1kJEr6wVR81sS6UZiHwVF4D2Hx6T1jFHSveNJjycd9e1aZsJaQjJc32WRGEku9fBcWY7znnFbFrgmGNeRR5Kz",
  "key2": "4aDJcNqkLLz4WsbULHkV6Z4cKPQ8YqEWQtEiVNXhwRp1RHUZng9qb8j321dtvsm2CBfK6nVDicyWPea4ytiwjiTu",
  "key3": "5xbP84idLT8nU9M1quQxzG5EwAnJhrktwUeZDN8Z1jTTiCTcEu3TCLRAUsetjqmUpcnAi95c2AWGRijEk5u7d2X1",
  "key4": "2DUCYVsRPcVNGsBWtoi7Lfaodvbv9wJhdAZ71kP4Ha472sY9fgT2XtY2kM7fYP7h7NcpsrBhuqZPX5ej3esjShXR",
  "key5": "54zb85toRhNhMJ9Bx81ACtaTm9ZRtkfRWbUTPjdXcRVHbzwtB5zyfnX2zeUVUEnh5QExtrKknApGCwoizkfe3vwv",
  "key6": "ZzEfMhYiG52CJda8j1Kzj1nfG8K6WSVnDFQeDnp732zUGCsHmi2sQdLahiooinN7qGs9utzJNGSGbX3HVN7VLuU",
  "key7": "2nCaTRMcpDSR2pPaPuBnVdzb6uiibZR8VKeqLtAELFNviGw9rQ76MLbPoHhFSLSK43Aw5vi38i24fjqhgNBQRcqh",
  "key8": "26sa32GmBtYbEdf4oQvfUjuDu9aCtGYDAsJsskMUZ49LrXRpB1u1RJqLxKeVWSKAG5KEbrNbeeP9iG12XKoHqbxq",
  "key9": "41mnnef8NfSX55YjjKcbNpZ6cCz593eoBoagsvS4E2vdzbLJDTCdHnVyF6GC72AoHNaMJT6cTHzKaVCWTA5ajGgA",
  "key10": "5nFh7p4xRGuUk7JwEykVF9PTv9jKVVkpeJQMbzsbPEgQmh43Ze8tatoqFU4aWEnZSSbNeST8Do6yNA4PhqLVFgoc",
  "key11": "2DaMpwFGBC7FtyQttegAD11cTQbNW1WxwMNVTwHjKgeQoa7zkM9XAPrNdCt58ibQ2zKqLUmttG66oeknkWGYwBvk",
  "key12": "BKM24awgqR4rc8YWEmmu89HnjLwapur8uMg5iG5rBh8jvMHKMuo1fjqLwEk98S9LqQAyfYyxthmULeQGDAJYx5d",
  "key13": "3v4yBcXbaapSobtQH9FvFcMb2BR4DeYDvwAmAD6pDkovjxrR19kZuGcjme7HQCT6qY7qJBEtLdh6dNs2954VA7UA",
  "key14": "3m5MMKmx6rqykTcq9ToDhSnTR5y5xzZoB5nd7w8WiuS4Ea7Dnz7H3kDvNfy2PWtebauvVmApf58ri2iN7qrZZ2UB",
  "key15": "36W9WZRSJ1BzweskKnnhDDsCJgnhGRKiFcUVv55Evi6G5Roahf6EZK85t8mcZTBCauA1RqY4XqsWjdeisB8TFpoH",
  "key16": "5oJJCNKGKZdsxp7Rq9iajY1qGxfsVG9JkXqrrpJWipuVS8gxqvhoCGUeJDCLJHeMcbuFJv4voLsWnYn2zuY7hye7",
  "key17": "3mcVndkZ7q5y73ataviShfL2zBPjEYUV2tVETcgr4Tmma31bzmEZyk9BbrC682sgSM1iHC2azEiwWwRgJqZY5g7f",
  "key18": "4yg73DRfwNarLAJyrHqNQKdvc7p3nbF8W1NYPbcVgZiPTtAb66YyLSY5SpRysFScYn79sYdQTut8hHZhJjYKgdAp",
  "key19": "3Ji12WUTd8ZW6yn8jQjWc9pv3mUumPjVJpdthJ7XUMoGAXtdgRVzdPtkc4Ue9Ya76LBSNXJ3nYsGTgbmyTUHx2TH",
  "key20": "5q3Qy7KJQ1TqFmCjtuZ75c3FNKmUxQDx7PY1y5yPX9z7jco4GXN69mCzHGGrykAhTNkybQ5sijb9LXXSBoChCiGX",
  "key21": "2WpY7HNgT2U4mCW327YVwpJynqUVf5QhHWuFqPXSpHfo84Z4zrqB7p8mfNUeE1orF2pRf8FHGWy2XktiCMgpjmqP",
  "key22": "37oZ4hbAmj8uFL72HmTPWVnKeRe6FSMgAD2RMcoFhnG18jMCFzEhd36UZ1Ny9BHTA8FJ5gCefKyxhXrbViwb2JZH",
  "key23": "4Z87aeGTCMQcSx9f4z8tLSYLwY5CE3wvyfRWDiKV3PUkSvtnqCUtma6BrKGbZjNQfHbCNPFoVTUAijYCahygMZCw",
  "key24": "V5cAiTDXBtYNevvGhkdFWN9xCez791Rc9mPLeqU7bQ5o5ee1ew5r1ofMnEZ8ERK3N4ztAnoavmtJzn1gwef3ZSX",
  "key25": "5Y1xswBfR1zVjtvX5d9RkmdGqdUi4UjbHHQSZxEAANK9BPGXC7K5ieCBPVb1bXk54JZczHroDyE3FYEj6mv9LQTA",
  "key26": "55gVdERqoYdB1DjfZczkjn3c9YSpdQ2HSY4viSbeGr7xWj38K2MWjDgLWC8R6Tb34T6KrdcTZqFpEYDLBVD9U6Ac",
  "key27": "UqZGbh2gdKVY1CbYBjsimRyu9NHAHovgqoPoV4SFJXCaPVgfnH452VdPuh1bAakfhMwbjDdDwfiHsqnFo23GtrE",
  "key28": "4uryNzM87iDx23amsbAoT9Fu7pZZx38PzG9oBkZLdLJDCWKMXs88YcwEWUNuZeWL71JMA344r8GDErCyJ4btxWyt",
  "key29": "4WFryzaogEoYbd7JgSH1JHs1Z3mQEXaL7ciSU1Rb9WnnpvVer6FuYEMK7aYPueKaATmWgLFik1v9UsEo8E8XJ6Ka",
  "key30": "2X4Hi7Mx8XMbY3bqeBinPEFsKKQvcunt2zAbin2qf59ekG9TLSTVP7XrWP4ZRqfRDNfWVBi9Bug5GYCNnYQDGeH3",
  "key31": "2f1mjEewjGqnCUn1u7qqptE67XiAsfT2mp35S87ideJ4Q67rRNpT6ciTCweUcAb6Hi6YRMGgBQ9NJWBGct9VUiJE",
  "key32": "2vDVwaxTbeogAPYy1cH41tHQAKFs7miehi4x1azhxEBGx4bfuKPAU93rLS6rgyiJ3KdoYwqccmBN2jgWbtaAXSgK",
  "key33": "WB1gPEKsN96ATe817BjNjXSVECbSCJ8PhwdPGtXxoBvyjouHkyJenBrzmyJcusvjZ76YW6nRMtmWj5cL65CJLm6",
  "key34": "4Xd6usW8DqHWQfVKm9VKgzNAUsVS5qTpRYhuSnDVthcJWH25iGfKbg7uLuqXgisczstKkDEt7pPY291XhBC3Atpu",
  "key35": "2rjUriRMdv3smAAeseLUkBFSaXRnLZxAU943wcut9KxCz9ViKVQy26CrzQGRP2eY5ntNBjtdKQi2ZZz3CdpqqrEg",
  "key36": "4WKR3grwpqVE1AwXk2JfBLTRDBQj6dLSsLPa1W789xDLxzwGvcv2zwbiuTU754gqCMYYMNj8NoH7GjQR6utijopg",
  "key37": "3PeFsRVjFFLi6D1sB75U2XmJjzgVrEasgMWTJ2mML1cTd9ryFgNhFyANVFctTkz44koA38zarZuG4bgpTQLTP7nP",
  "key38": "3oQqSGSzrcZ1Co4wBPqZeKwCr8N4ait34Garqf6fk6idaiTReBTtjCV8Gu6ozK7qZmss3bGLM251rGoeLQZJnHFp",
  "key39": "BR5G9hfGhs7yEu3gfbZ4Cr5mq8UDh8q8HbzEXhvVeafVnPHejPNEehfKeHh9P3ma18PYGxy2mWMVYBc9pJaumBJ",
  "key40": "5rFLr6HZUcz5W7VxcGtevChiN3rEvq6Lihhef7VQz3jjjffPjo2C7ovNA43LxRyjETGyZMC19Lty7YnekWSmA4vD",
  "key41": "3PpRSDTFSxyd1t56zmXCrASjSpWu5UGikULv17KpFMdeuGDBo5hjvJFhQgVzC9APptyvhMJSV1YFmxFUGHyoknwE",
  "key42": "2PevfJNgAkDetpjFbFP7kkxRBm2MwykdEBEGyn6M1bveWaUPSE2RVYi3VJhMZRnGEwARdQWRbvyzNF82CduxC934",
  "key43": "dDVTk89X4ph5uw7dSpaHQwfXkHwgRotGAduWNNJM9bMAHNDRDHMqP7QYhtNbbgMUViHmmFRVDMADe2TsSZQfpqQ",
  "key44": "4LeookcFVusCzR3WwMyp8SRTbV1TQp8wzkfSPdrLecRqdDL462rojjZxwLoxHXY3kPXpvMAHX8dANauUQhv1cgzx",
  "key45": "3HuxNe9qTPCCzbtWCo96jJB48P3ApU1iKA6yfuq7PUcH6XJX9HHuy8KDfpdhxG9APqrzkq8gGRvyCP1oaCw9uAUi"
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
