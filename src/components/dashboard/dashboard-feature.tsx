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
    "4JNEHn2wNLbq1APy8TLNh71sVezuGSQvzYtNsJhHJdiLxZNkTzgqzVoAj9QLi7RkJaQsPvC2jG3q2wwt2eeT7Nkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K6KDpxL2UHz2jFotegUaP8nyB3STp34ProJJQfLeE1GAvv54s8mVXQs4AutmXMXpdsNYR95oPqscA2CyvjkjWua",
  "key1": "MFTHxZ5zRP1gpvYNYw3N8gcz9uwyYLRjcaLtn6D1t6D1MZMhLgdujgiedr7mHdssi5mxUXsj7vHHeMSRW7D5CkP",
  "key2": "2FrwFGVUP4TbgqiwS8zP2QA4shA6oE12tS75Moz3MBLU74JrkhME3NkKg2mwzbpcs6kcmbtXX4F18frTAvJLUaMa",
  "key3": "2Ds3ULjAbMMm1BgkPHfuCW7RCXSKVYzrp9hy3LAapJcWxyfg7xX6idtuDbn6auZFG8zbAMndGQjafGn6L5pcw13E",
  "key4": "5SHSZT7egc4GQRx3wJHKAnGmUoPRU55WbzxVdD5oPh3e1KdwA74Qu3ZYfbDsKbuwPgAFNR5PXs3digVU1YkitKXL",
  "key5": "5ZMcA2V5z6ekmKP5gb2po9s5FGs3ZnCFKQQ3UoeUaxsVXMY8uAtCzYgxLDxSoFdzRLViohXH8z1du62AiV2mkwnL",
  "key6": "59zLysUNKGY98cfoCAVYgrQEARHDUqqspGbHaSzkksLs4vBY8Yq9bheSiRPJMXTmqrWZMQvJHffuNFRDZ8equ73R",
  "key7": "3cHB4yYVF4JFdd6m1jtEc2FmiVZJ3ZgR9VdzJEDAkT4Zg7aoP9NpKjNieFUA9cqB9Bqsvx8aaqv3nZZvxrQbqMYY",
  "key8": "2tgoHSnKGikaHHxrLVhEzg5ReMH8Za1DBrA3v3D42xPBXUhrPNZj6iu3kDmosPPDD1wwwRajTQNUop1EtD95hfDj",
  "key9": "3opM6SiQ4NL2sBnAUNnMT75PwgczrL8f3f9y8grT8Mr43YzRKnX1QFzWZSS4ftnZtLCU3HnxApdpRRa9bPuM9MmZ",
  "key10": "3chJYMKVywYGLbqqLqNV6LVnfasycTY9nuvsw9ggSdaHKpb15NsRr1sens9n3Tcu6xF3f8FSTHDJdWWjtnDF7Xxs",
  "key11": "3SY3BpHLVbw9C8A5GNd6ZiiLCNosW6uhshLbnieNqCyXrFiN8WJAQ9zH1wvzurRfrvz8u1RCP7a3PfkYpsjQe4xa",
  "key12": "2m9VFeSFU15gkt34Q4AWAoRZjxYqVCbdBsefcQxN8CJVV5i52HWgJHQJyfPJxkUF9wuxYzzPH1KPVr1riveerzX5",
  "key13": "5CZEzRyGyc2tMJTnVnaN8sn92Xm9N6BP72n2bDpBmUmUhgUsUwKK8brF7Hq1RNAD4acqYJSXV4Freni4uBT595WP",
  "key14": "5BebN7xpZ9FJQPdYpF7oFxjWC3sUwmmrk4w1JUy4C2jMyE1pT1yxwCAh7gqcSm1i2uFVMdEDS9HYoQzjzG7yqWN9",
  "key15": "4XsDbwztNxG4XDP5pdCgB9NZeJ1WoT2baiy75rD5jrxteqtCZmL7Bp4MHGaTrgZhhu4WMXLcfsKkQGGjd1Gg9oiJ",
  "key16": "5FD69qxA1A3ffyE6suZ1uPi6fyQQZzYmYZ1ACib8ZNoY4b9mqTgCksadrtFitREU7JNddYfAntDwjT3TtCCXsRjZ",
  "key17": "5uzNxYfqrmgtMiwcCt1EmsSkEqsRgGcgzZNC6GtaBeDC2LHynb8hs4RFgvLb28SASv5Fk1qsmw7tuneAJghCpyrQ",
  "key18": "2U6ULq43LfStG9VZ72GgFA5ZAaKBQpdNTVjGLsrCPgBsNRazhZh7c8ZNGLF732D3sC8PN95ravfrs2S3TXA5duFE",
  "key19": "jmBGpxwwNWKUdHJ8Adc29BsqDocyU4S41fMN4GC437tobBhnSJG8EqrAxjQZusvNcUSozQwidQr6wuFgx4nQPhs",
  "key20": "CWbRJq91AAP5EPcQqsUKZpSmiZvezYjRVKfAS6ZPZatnKkesxKfw1hoSu4AnV7w6bBWSa7kzFYVcipmbCweqHfA",
  "key21": "DKgY7TZqhr2GjSZyPBteiNyWKTNZsAEkGi82JYXTvJoabLR71bu136AFtkneM87bkSKw3jBPkrw4toNLJmRKkhz",
  "key22": "2qLH1PFre4SYQjVV3hToq1juBvnJ9Vmt8UeHrACsSm7k2hqm6wWCwDU1zJZm4NUdXKtkpmseZA8gC5BfLAp9BPDf",
  "key23": "E9Tf5wjPAd9kBuHrzQuKhzqDyfsNY6zdf9cap4KSDPYSnA58BPdgzAS9kLQkWk6nmqQAARq89W9NaVLuPE7hGFx",
  "key24": "44A8zpdgmr1KPUixvcqdZbFiGdKsNds8S6JnnUbnzamQ4jCo5c2AKckbsZQwg1jjtgXudEkTRaGFoAJvPHTdEtGg",
  "key25": "3SiJoJonDRRhLcrBzTTQ3RkjRxrKWChKdA997x9U1LSLSSmzeSFZrVzPrsuCTSbdGWxtfEuM3wHQguKFCbTwBrNn",
  "key26": "4xEYU1YBn8FTyqmm4mod5v3LmT8sNxc3Hhu8qsLRM7UkpZ47H97a2dkkrAGa1kJhc2AK1PGnsq2nUdsZABDHQPtL",
  "key27": "4xrTAynb2S4eB63wDujwfHmFXLVaPiixEfX9aHobVa3yh1JfPGW1xAuroVDV4KtEiQbptb7YcHgL3rzeP38XJtNn",
  "key28": "5pHTE85Aodm4m9FheFZQ76uXmZkr83R7Eb3EzFPjmrt5eEBBpgrNXBXtZBKH6q4iizcDZfiJAKpeDvf8KT5CfZZL",
  "key29": "66y5D5EijAWnaBc6No83YZ1gLbGSy1A7ch9wcE7WyYT25r89EaaFB5QXbQUVahotYsAVyuxRXBJwTPkXjWjtM3Pg",
  "key30": "b5pQLNQV6trxc48DcpKxsjZurgdgFjGYY4g6LgtUqADL3BQeMxrNPb79WFZ3dbG33BTqQ77txKZRPx3dgf6gae7",
  "key31": "31uMBQ6Jh6nryBe6VAVdG5osfSWfbXFxssKME87qCrUTdSsTsaFReVX11sQseAqnGpppgrsxLweThm5FhqeQh7i8",
  "key32": "pk3mRTPK2o1ZS5ix28eLjKe1H6ZdvJiyZ4Xhvzk8n7z74RfC7QfqgAYzvnbkfUyhe3MM4oon75KuRoxqv7tcUhT",
  "key33": "5kdFdiEtfJuvqXGpmAX16vtZBP5qx3JZxwZo3Do7Cw1iSFfWrtwkaAsGGXjYJzWnEZAaVXVxLQBgp6vjE26Dzu6g",
  "key34": "5MJjzV1oVs4NF9HptbLNeH8gL6cMt4jqj1A3Y4PtuwcGC7QKqG8cz7YMGzQcR66C5Eomk1Q1jAaMikvXXMtrTQGC",
  "key35": "3XHqJBmVJz1LEbV7U594XSNzWKRr6PnYtPW3uv3Si6NxSzLVif7t2NMDtz4Hv1Azu4w3ZJZsru3bEDUkEx8j3JUu",
  "key36": "2WA2SZt4jf7VpTNNRaki3jXLttFhxVhwKMFsy2MR774nuLpEnqLT2eZKuT1teNavmh2wycb5TKPLVgewutoFdjbF",
  "key37": "47Es8nLWt6LbBgefKiAYc8SJoJbkbH4hGZwD1ZrEGMf94Xr5UYJxKcNLXidqEVaEJhMh261vnSAxYhaDcQ7oi1VN",
  "key38": "4MzjW1sBF73jfW3t2mHWwnoNdbKKNQnReT76BoEPnbgCjFY8tv51t1GijpL6hcorxCCa9We2kYCaAfrnN7PYueDP",
  "key39": "26YJqyN15agjAw5rqnidP9215RJ2UNQ4x976jpqfeBSVgPzGj1BD7etCXUR2sXzNBtpUSeSpWTofeYTEe1APgiGS",
  "key40": "5FJwbUJ2k54UjbGCjjUgesZ6G6bY7WaVda9QXVYJZzJTe2UXSADc8WSUPb4T6fqNqHnZHbSSVVQuoNa4M9SKMX9c",
  "key41": "64C2szPZgV57TaBoUJKi4Bjc3uQ6f3XW4CLgMjjVGDXabYw9iRXovQu6ZV5Fowp2AzToxXGXdAEDQASMfPUc4wQe",
  "key42": "4D7MSQRofwApXZjuAE6AfTv4XeBRtzggNDAsGL7z7o33RbSi64CMgoneYdb35Vd3NnRQByKK5nP5WkvKdmDPCksi",
  "key43": "4F3ZFnVbLzoSaknnuTi5eYLW8aRhU7SHsQNJULt8dZUBE2hxXqzziXt1pW4gVvjaQ9EgVsPU785ck8AUZQ7Ec6RB",
  "key44": "36XTTVuViqnrpvm4LykcpPFykb3pzTbq9LnQmPWBLV36MqQzA2DAvoU9NJa7yzuQHEeb7ducBLTs5ssfPk6ESjwF",
  "key45": "2AtF2ZvXEd4xTqQeSxpN4dDE6tQXPNCXVw2sWcDW8wfNGp7jHqmYgLkmk3QxGmEF2uxKgEPB2dbVY963wEVrVAtx",
  "key46": "23zMb2L2MGpXN9Kh8zuuV32XNHZ2MNtPyuQ2yCkTnvBS4U7JM8kjKMrLMbTw2KouXL4PS1m5qJZoAwKyPuMavPgP",
  "key47": "3qHMXNYqMcqMJgUsBzLPp5ZBRSuEmY4dZ3XjTeSFkyvfgVK8rC1HgmbGLQzmkqGVzcLuugYywQoHehEL1vLmhG2P",
  "key48": "5zEeavUfvwivmqHQqSKRMznfntupWbHcUizyy7SZwaxfykCMsu1S6XriWrRHrM4sn4sXC6B6XapTRcVLyzujDi73"
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
