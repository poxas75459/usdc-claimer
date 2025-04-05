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
    "28ouRxc2b53A4Snuw9Zc8Cb4G9B32CfqQzdCc8HnYzTde9QzdbHjn946ZeWhYQGUqMzg6yfWpH4QptrEUZ4zvAge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32TCE5GsGJ2ZLCrKPieZ5w2awKjZ2dwcMtAs7L3iC1B5dktnUXLMF8nVdD7SEU7VJKX1bCk6D6sfNokftP3Zt1hs",
  "key1": "w1woYRmCf5u3wBXewXPrE6FPkccf2ETurVFCatjNG2kbJxT877R5xkXChxnFQU5jADDbgLSoiG5pFPmpCgB4YqV",
  "key2": "4yXZkMgRQGC8xPCYtfshtKaR3nx8kV3jrC7e5fBTMsY1TzaVHHyRaiHim3cgGNHVm9LRzYmhckMg2tF6zjFuHbV2",
  "key3": "3jLAxzqq83YvSaapnW4xSQnPfV3RfZcKgkRsrdBQZJJxRSE5yUcBE8GDinpeHEcdhMdYXj2MWKm6RFP2sXfgtmj9",
  "key4": "kW8yHsy9EFbcB4yaakfnWFX3S8Cx9E2j8TnCoBc2sHAeUkS71iU2o9P5H5fx2Gmh7224pNHzAxKQb2S59s5epVr",
  "key5": "5H8EiAhrSqCjjniBA6v99RwA5BjAXFVgnbqf8DfCD4hGps4zvuTbzPTHSttvpiqQbrzuettkzQma7QdLK86ewVzX",
  "key6": "6qfpmKDmoz1CAEWsEuKKiFt3g4sNGN1xzDCYoSne7bVd1cAvuofXJDSR5XMetMqcFtz5hX4NqmuacTMVgwHPuNU",
  "key7": "2yvrcar6RBTKY74cZuk7Jk3mmHLcqN5vkawjeKz866MJZ9QfGta767oKK9bKjEnznXS18pDXcxFeF6odqCbAP3tV",
  "key8": "2f9CwfyV2CujzD8Dd5jAXRxSbhPf5KCk2kSi4UEKTvBVNgCf6y3WFN71SozFEwy13FEqeU6nc394YMcEzJ3UHq3z",
  "key9": "4QbyGRUomjJ3nVF9ntX55hp3YhHZSV9umofpZ7RRoLcvtqY2h151fTNTtyBPFA4eaXFTvxLiQFBbTCZQuXNJaPM8",
  "key10": "4XLpEaeCknZzmwwQaHuHUauwJcsspXqXVGeR8kcybHPxzLDKpArQ5EHFp6MzeqBj8q47SRE7A7N9Z1sgQiv63rSN",
  "key11": "4bFL4puz323qXYvPZeV3YPuxiLBsJBwTK7FYSuBxz794raMY5yeHHtmPay9g4UkgVNX3ELhzfBUFJGSbA1TQRNpM",
  "key12": "3DKR9uSyaTAsMe4jPgnQimJwqCBoEXLFCjdhiH35wsUJEUU8xWsJyvrRMkC71UNwniYGa3QJCMEMHb73fYDLdk4K",
  "key13": "4qochD2V2UYntrA1C3p5KzYExKpUukeHSCGo9NeNjpAGWALDnMab6HB9canRoDZZvmACwaHKEPNaMbukZjLzL3hR",
  "key14": "Sh3RAxgSgWKYqTwP9gjzxw66rfg265kLLiSojivYjhPnmw5DtpKpxGdKnVVB2Ngc1vpAbmKq3ux3VGXK5mAUYpR",
  "key15": "5r6gTS9kVqH5A4z5NFMbd9v7ThVWwAe6m5R1XdDA8c1KL8JzhsRBRi2HHmSfMuuAFNx15gKrXM7udQAz3QNyLBz5",
  "key16": "1Enrb35qXLB8K5Rb6Pf1mkayLr5HjUC61JjaVXDeFxVKxhZ8VXMcozkYMsHzPWAPAP2kYLskJ89UhB7biwXx5fY",
  "key17": "5xT6SvdyYQUXrSTE3Ezi3giA8qNd3VTtMmnGweFJUrGg9gfYDzsghDjH3sidAfvbhcMzQGCKoc6NcY2xM7chmz9t",
  "key18": "32Gdrr54wo2zHi2zFv3SMsTSKHrNLf41wEqf2x2C2qQ31wqk4KwPkTUQRTEb7zjbKGHPxxE84iVHdJW78SUWz4wp",
  "key19": "474pnbhCxzrLajPw8V5UAPKp9nRz9XWa6L9zB9oiRzVoygKFfHgWmrR1XtNweUogXW81g1fG5r4N2n9rCKHNoPnH",
  "key20": "2ZGe8zGa5LoRhaVk47rsk3PwWYNSEF7RRksAA2y16F9zWzUnjUw7X5nq8U7qVfnCRuMy5cYkzHLFXX3U9f2mqExb",
  "key21": "2jZSeiwt5CPgBPrhN2tQiqnBjbvxxVzdTyyW87nBAxVD87sjFPDnBhzbKhTmqCageAFYEVSJrvDydgJJm7pWL3cf",
  "key22": "4i5cyNm53cAogv5DPSgeeKnpb9GCyMpWiQXMHWwJ7g2JKMTZ3rFfNjeok36oReuj1A7jGYiwD9Y4gHb2Jm55fjTB",
  "key23": "64bG4TtCvNQNSrEq1LUJTcAKynnitqZx9YzqsysutXfYjeQRNf47pW4Ue4pbC5j7WUeD91DCVBnaR3wLiRoJTt5J",
  "key24": "5G1aiLijnWnsuq6W4gNMQgYZuNxwimd7rmqAmGH1sioY5GSnYeEU1TARJo21Xq3Vu7RgASJEy7omsDTyvFRnvhNn",
  "key25": "3TeadzkyYgDfcHej2nwUXQzgvWCMJka1MrQhUg9jJSV3uHYbc4iJV1dDNBGNWgeqor6a8K7XbGgskF9fJ2XXvgqL",
  "key26": "tf87BFh8BRFqrepiunLfEQzhNnFZg33ZofGSjsSnLghJ7WRPK8mHZMEA57zgNCJP2P5PoE1UW4EWCTx9eDzfnwJ",
  "key27": "2ozDEt7zhK69kGiCADLTPc1aq86M1Ra56TkTvZUMLVJNKR5CDDgz5Wqsr4VD19MqAAaV2YVNY5UgnVV5svXxqAxt",
  "key28": "ffWRwD8VuNhj9S6DeuM8fHMrvWiUtPX6enT7TzdSAnYkSsmXkd39qsAkkB92srQPd1A6sxzEuVfx7bYtAaHWa44",
  "key29": "4JmBxQrUHq4Bi2uYQ4GndTo4bnGoyqngpU8rJSegbFijhSuiynLDiY8phmkHQYrCJWMffcCmrK8bc1F8yrqrctXM",
  "key30": "4A43EoEdXaVVSoaRG2EiTgxHWyPxyR2DogUHv6ADvotEWBWz3VFr7qQgFzv8m7JCjSJsjLmkeyLhPETiWjggxqTb",
  "key31": "5ghaZAryPiB4gjwFYsrDp3j5bmyPVqg1Qk4eg6B16a2Xm8UNxjkXr8h8YRDyeKAWQNvGXCkwnM5LLnES2rUngnpv",
  "key32": "KsWTrtBX1HYbeJEkpTzxoJ17wjBquU5nL8zpSkBqRbBtj2RVuQqp45mcUMYPJQEtz77eGi9V1zcokqLy1pwNp1q",
  "key33": "A94zWwmjSHeAJkf2JV1vyh9yZtKPk4MwJWMH232wDwFoaTqZ52U9k19hyyCRdLBALq4TZqExJcmvhGzTPpBgHYc",
  "key34": "2qwQyB51qYa5DWG56dyUQPjxTiYoEKiRf449BjVz89MfGj6JKnSLJ6qDXBJ41BkPyeWah2ozmY55DAQjH2jJyXBx",
  "key35": "2TU5yYyw2dm4SKWgYpQwXhAoBoorE3EXycrD9NZopegYSGJTRZCrC4BuzUkzW2HJ5PD4JbvDa9bghCrecdy1cSm7",
  "key36": "39HzGyyx2syAEeXtGnWeftYYXVYXv7QFdTj8ard2GywBiWg51dkW8KgySEeXwjAoX6x6r88LcpsraayGm68goU8M",
  "key37": "5De3x79LaHZSf3sXVwSfeJHFNiwmXHeMGrcNPVD8GymPFd3FFbMhJgcJnprpM9CjDye36ZTt6SxHNGVZuVvWtvVa",
  "key38": "4NcvFbcBAbqTS3Em12hbHeD6JqQwrasR86g1LVbTJQuc6vP9gGDydhuebtLUjRmVboigNjXeCgt4433HGwZzYrUX",
  "key39": "28SqPskZcuhzvjUDjs5tkKJC2sXSM3SepjJTi4zq4vZExyvBXnWRQTrNhcyPHECuTQwRidAn7YwuF3yqUVPrMjqi",
  "key40": "61QjwJwfVrn8tgNRDWqRBpRZ5oFQWnnd4KwBVXMsDH855M7ba2qereJoAEMiiwMMQQWvckXyEzi2TqEuaVLZZrrZ",
  "key41": "4qpWfWQ7W6N6JWHWBDrKs4YoaeG81PapoS7XHHwwgXqVshMYAhCQrcJdQ19HbghtubQBnYDnodehseVSaDUyGtkT",
  "key42": "RbhEn8hXYXdBYNimPtUG1QuFUPSBjFjYjashMVWp6RtCbt7AbUiYXWSYncFipvjV5sBjZUjzW82RpgTmAPq7xJ9",
  "key43": "3HsZyDgH7GYNpqb1171zDPQhdG5jUyRth2G2qZCqzCjcmc4P2mUHDvoW3FsX87HuUKspSYp7V43c86G2FR8MQDzV",
  "key44": "44isZMA5RCvH34FUhh35khBaKhZCUMnbjjf5ZQBjtvAyikXEzgDQNwd76L1gTVcDqsG4PQh9LgVbWU4KtaDnjPLZ",
  "key45": "5zNt7Q1JKdGmRsev3qtHQMRPgqi5asYqyXX4DbxqGtRunNPtZ6QFHb9zyHWg1kBfAALSXqr3xVnQdpuwgSjx35iR",
  "key46": "2eZZKgKmuUMBnuhMQehmKdGeGo1bZRMWLvx95txexQKAka1bU9CMYaqVfgJHYZX7TE4ygc23NwwuSo1AxuVQosvX",
  "key47": "2B183xLNxrjUYebUnnLqfdo1HHZRueBDDfNJ75z3z6jqSxWfyPFig592n1pAbBCUrDEAQhCzRW9MEu61d4hsMSUP"
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
