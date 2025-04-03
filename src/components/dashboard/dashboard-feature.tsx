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
    "pDXRxj7byHbhkQjikYe24ZaHUBvuhAnodd6S3iyoNi3KrtCMyCtEvt7HnxVLZA3PwQDju2iptLPJFLEvGuZnCft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w5BLRb7zZg4zi5safFbLJAnmXShFkDjghNUYW8N9ZcwGPygK7kMhrUvdDdvYuQTfvnnjum2SaSFSzjXt3L556aP",
  "key1": "Yx3anuLVxAFAdPPtNsrdLG5KGLQRuwy7UHVQg8G9u3jf3kCt5QN7iYZuT9JHxbHHZ5t6SA2Xb9QwTFW8qPqX9S8",
  "key2": "54hrTknWBTnrsQxj3EoBy2N8cXxxCjgZvvB7H5WyuY5zEAnPuEqwwSBKwDmZEpfXii4zpgYMVdfWxpr92Wmt8YsY",
  "key3": "4dEEyhPgrvxYYBjAFMEK1QxdsLKA3zxMqacLbNHhpbnTHck3BKbcAXAzNRMZbSuazFUoR3Nc7MgPT23iYJ5D1avj",
  "key4": "4gVBXzETiffzQZKmU7HgjMYNGvPfYcZrmzEG38D9RudkiiHjUXqpkLNCHtxXP9LpngtZL6XyPtfKTPo5bGQNBeET",
  "key5": "3CFJQ3Y99FYcgidJrh9fibkhhEtfnf9tHzwzja3xGYb4hbtmSR5Lz1DwZwpAX84SumS6cECJEQXY9vbo3jqWpUrW",
  "key6": "2D4qN2maC5KF32unRad1E94oPSFX8R5vFfb17928oEgQiPgWjYC5Zh5feStV21QnvivrFuG3eSKLtyF56WaSGtVn",
  "key7": "2LEAjbsBhokLej8ACYdheF4U6XRyS1JhwhJLFwrsV6Ynt4Q6b4xgLum5fmqMBYqt6qDcz1g5cB6Wb6kZEg2Xz8Mr",
  "key8": "317TDz5Vss6fbktEJBHztH3VrX76P9eAhFzRXT51Hs1GbGJBCJNCcaKTgcTSTJbTeySqQ67pH7LPCgxLzaDD7diH",
  "key9": "5Zu31hsSskk3qkktSjFVE2B3qQKmHEvhDsgHHfV6aHEiTSVcvV38aEPkMPs8ukkvQ7QiWpXauDsVy8r6GwJaw4Aa",
  "key10": "2N8N6vBPke9gXHuAGGBFPDJXALw6HeCEt4j5xEVCmbDNkjtWKUHN2zNaVcw9KvvF95D7dJoPaEdNr1rdmkEGGiBN",
  "key11": "3niu6irzQaeDrxU8KAPXKVh2DUPJN3rxPe9y6skVGT9v2H2rdaxs456kxBVSiTTMuk6ZPksKgxrxi1x19rDbK7dJ",
  "key12": "5c3nMNSouY2ncAkFhH3Hxr5nYmBFWL2XwujxZgXM9VYPgey4YrVhgwdr6SUpig39FS5SmT2Joz9wtNYZhh9WpDGh",
  "key13": "KFu7zSey94YivWqk1Q495hG2hGLW88wyf69vEoif68BssR5oZVif4t15iPpCFyPxAxuXXuw74sZdrmKAfzdpgu4",
  "key14": "5h4s5JguRNPMvLg8Wviggwp4we5CmGY4YyCMjRRB9C4wKgExDBUsru5gA8BximsYJj9BcAyoGG5caYHHBiifWefr",
  "key15": "2QBAmVbL6fXMi7YYRS6Lqf5Y8Qy6J4v8cruWAv19dz4abzG8Fexjqo2PGrD68qrxohQjwTqGrRrwRqvceFR18Qsr",
  "key16": "8fQfuT5GCnAjfaMzYfNv3Feh3WgsAzyc2Xqez92UECVLJjscTn6QXSn3ep8teEwYYodae6XFPFJ8iiqXvAB9Uwe",
  "key17": "2zVaYWqWJi69mX4EaRhLcoMaJQdiJ5DHj1uHgrCTU4dBVdBf8bCnpqFEetEvs3Eb7fZjFjKYZLeaEFUEpdTMs6tx",
  "key18": "4Wb6VdubagQhPmUC4BUFVJM39HKe1dJ1MUkEMvQhBCUDwhv4YQVLjvw5pFuC6mqhhRhzPRT6SHGKyHeBcLWK6DGM",
  "key19": "2BAjQAPs4VStdm943WGu9n9vsW1MAWZUPrtykjAkWEM2BQ1R9JLTuD45s4utYwhYUgJMpAMZqfHTyprSXrBUscx5",
  "key20": "i1EWTsczP2ToJRHEZv3EUbvAG7aNrSkfCQPUwmpN4vpt1KJ52Qm84yBfHCyr9ykmB6Fw9Dg4fPrzMMAspKRSP4i",
  "key21": "3UHn7zd5rYFva86LPv7Ea6YVcGgTXebr2ZNErfptouzpvLMhy38hcfvUkLx1JzuyMaznAcp2axw7xgvfkf7CGYyo",
  "key22": "dwptwQqzWw2jBY4FSeGWRxg1HEC8e2tqg6A2YFxtX4huzkuxNWeQu1jGGhMdEGssPy5zBxWTgrjj3MV8m5CdVKk",
  "key23": "2myHz4nDtESAyNnyset7NvmWiZJ4iwNi6UFFsfgXWVV4WU9krRUhKiyPB4TASGFPDbMsSukmn2Q95edZisgrFrGn",
  "key24": "3DARfjLkTPv2Y2nauotMLL7cxPkbc4YsA3uKFTYA49JYo4KUy5PaMFrvEcfBKYrgzCkn8zBAQfjghbp98xqFvohY",
  "key25": "2bmixoKa4iNZAaGp6G8nCL5dJNeThM6NSUo5avMUZMdrqdMmmaapWAZ6VeDMLvp3eSmPf3LJsXLuoFzCD5jNz9wk",
  "key26": "5CNi4ZS9BWPfmcf2NjCq4FKanqxK2XM7Z4mTW6E55bicHpDdFYVA67fSWERyBUmesWxWBijsWcJCjYUARunwcCWU",
  "key27": "2ymTBt3Qm5HVgso9BY9sxhxyv9Fa2NGMbB5GRXvad3bmpv8K2NUQ3rgRF931bNaUoGkcBvpVQCBwbbzKXcYeM86e",
  "key28": "3KSwg8Q5oWNHnr425czxmmgySLhUzR62645DDNxeua5jQcDnw2TokDbjxmczJVJQR3PPiKj84ZXimTQCojm5dXgN",
  "key29": "2ZZsEUnvCS6F2qaLdAon2QTM7fWMzPcq3fTEv6FBNEFuZNYvwTgqoVRJGj3a6xDefKLKMeqxV7gAUVzzy1K5GtQt",
  "key30": "5Tvuja7HhwbgSVxa52VuhJd6iKqSSPcrVz48aRQkbXoeNFmajXsgJxVec3xBEohcqM7piBq2RSLPKMFfriJEkfyD",
  "key31": "29FY6t3Mdw5pLyJzXS1mDusEou826PYb1FkLtYbbo36z164kebHDXigX8YnzJm1Nur8gRj7VZtYipZLu6TRBc7Qt",
  "key32": "495Bm2xrXMqsrghhvetPLbvzMCYN9LCuWZUVBAdEBmwj1LWiyDDMpTXt18kzWg9Mj2Q4JDQHMeeukUa164AGJceU",
  "key33": "378wAGbJaiX73axF6iYMZiWhWBw6Gtq6CW1PFDburcKAvkNeB63BMQ8n8gJmtqJfZouWoPWTcf1ZhBpzdKeXM1b6",
  "key34": "2B5VRMMCXEEKxzcpnZeQHaRF6G7iZjy6emgTG6H58bGirrcosU2p5nHamwCAaPwfZecxCX3WtGtrB5qDC4aUUooo",
  "key35": "2mcKzZRZdiWpxSLPBDECHG1JJbjmntGBbr8U5Hwfj34w6rYjPDQPvLKofanVxZmnGZaHW1Chb5RHjnnqq3HR94iH",
  "key36": "5xtEnkwRBxymvCe6gNUqGiHSVuQLvbKenjmawzwjWutVcvvQrrsHbK963prYFGw88zfzZg79BmbGDYJABmVy1Uu8",
  "key37": "3vdfExXYKgw9hN4FVi4BfLjKjizSgnu9z7tRC4c7Q11ZDfEk5mnN1dcSbnNGEjtzaHeyJyfsS1GKGRKuEj6A3hM7",
  "key38": "5BrS6qxYCKhqSZerfwY1QcMe3hUbpQEGMwnQ8Kqj21JEZdbAwhxWe3P57MvK3s1SWrPwT5zypXSFYgsKEQXMr7tq",
  "key39": "5f2joAiyDEKxYJcasRWrSub3AwhxmfC5r6JuNdf7yPdACEUYPTvZ7hD833ybhde3TtMwRKv5vfD1s8VeaP98p2WF",
  "key40": "61ZsCG8tmUNe3q53xMVFqV1ZsNjxjCDQVt3D1mNv2UveQUWZMVCPtBLLSCtWDsPHuuTzWeNWtnoBn6vNbzAbhLBQ",
  "key41": "u9sYeDBTGBRfLBVAdaY9tGo5oqMkiTcLag8h4rQHhF5zZZEENgZgpafYgMn6eGLq2WBrxmQZq8Pp7ZxsXWqWgeG",
  "key42": "NEC49J495XW8Xa38Zd9Y91ecWm11bpCk5SjfqwUTxbnDYK31oBLcw6LkwbCEGYC1TPCGdwYCKP6Cr8oxrS3NfNT",
  "key43": "3wohef3VrT1wBNhFLjFk6mxpfgpdzHfWd6hWGWEbX1f12s2tgJhMUQrkhcaTojC9opRr2oz1YUCF4wHNbHBcReZP",
  "key44": "3MLtawLKhmWKAcaheGmGLFRKHuWTVGoE8oGb3tnjpQVshaSxFyCY1UtA3ZQq6NgqKa58oFXkLLAdBm1iXvsDtSVP",
  "key45": "5VpSnwKQEsAPe9RRXR8LWr8TcYPHAeMHut8hoco8LK7gxEHENoQc9PMQVj8v2zYQF3eTTJ71p4NxAy1ZLp8dQU1i",
  "key46": "33NGXgNjLTrQiEosdD7sE6mMAwyokXGvvxVHCfCR7Eb9VYyaY4rNSsJvn5rLows27BLucGcHG2wHFGrcYU3Ms1k1",
  "key47": "4mGCoCY3oP56vxrZmdZBgMeGfGGtgyQCuqQnxGp3FWoW9eTEFLD6WvSFVX58wPwN1QvVZFoVKyQQeze9R43DwEyt",
  "key48": "4Ws1ifjT9QSzPoHpzCRScJj43AKnR4NYYghE3MUr5pViTVbEhhhyHpMxJyQsH8yFpH7LbcvGY33FRfjCFiS3szkC"
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
