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
    "3ovu5zz5URTptZhetGZ9XhSTrpFzRowNVmrEtSkb1H4uwafL58qHrdLUJ3jXmW7k5GfbAB9uh3s5efXEANpqWeAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tw9btLEpcx7vs8SxeBJJwDJ4cG8RHFRgLbJUkY6PTR8XNVGgvAnWzpVX4MPkoVthSwEJuyvfEXSQXJfH5FjYfpQ",
  "key1": "5zpFXRihhbcEotFXgYFiJ1F9P5tdERwkHohjTToKm3ooPYvQUsJruuS7L4govhDynyLXLQTNLen1MGVxCtBHwy4t",
  "key2": "Nq8W9FRpRL9heriWqRpzHnH5My3DU99tfFLy52Jvq7n6CHfai5sGvJBWsqEgaG3zhGnbpmip4aMCgS2eJnFBTRt",
  "key3": "5WudG38XBUkTkhEpNGJ9axq8uoYK99JvaYD8ch7ifCcZhpYaDGfmAR1YfWC3vftLCJJqGtU3Amt5pw8qiAWoJDhV",
  "key4": "SDEHeJPpb36GxxiBKaQLsWfKE3R2AcDLaBJ9zT6W1LTy43eUan7nB6LjRdGpoFPBXbv9VYRtF36ivf7WwaYsWt3",
  "key5": "2VWdVEbwmLSyVhPxNneS7g13wCQg26bJw9jmBCseTWiHYQqAqPGeyR2sL4BZRG2uKjAfj3ho6hKnBYbi3dKobD24",
  "key6": "2bDpetNKX6xsPwVV8MDn6Sa2S76feDaUXbiZLy8qGPvB8k7x2om1M9gXCwJsco19UmQoKfi3pSrsdbE3hGuHW3p",
  "key7": "5mqVg8CW2SXHCihxphdyC3P6ug71xkz6yfGh1sYERpkiYdxQ4yiB6SW5MvHmk8xXJsBhC3jks1FkC1xKPbVwfbDu",
  "key8": "4JDmmuNfU6zchNcX7WutUs59tTcv42KYJPG3Sb8hN2rNb5nKrYRpAXzArwGLASS9hBgTqcUYhXpwDyxVMBFZ23bB",
  "key9": "3TfdvztZfQCcnXZ4dvgHAx7VnvePWtgRGi6imsCcxgnaWDH7Wmh8V7gZwam2aZEkPw4pmVLt4dCCWTNEWoVrq3mF",
  "key10": "PcpyRG6odZQ9Ukwck4tCHutYjXNY8VcPgW2NjmrHtpi2EPoN9dwHsEqVY3fsRRH85XaiPZzkvkgofXVzDg4pzYt",
  "key11": "66nMt74CZcf1xdenQ4uCAz56peqsUv1Mp715jEB1Z89upsChiZvRNnDsPdecAoRToJq8E7rUTbiiMEjTLn95Ly79",
  "key12": "4pQi5Yo5bFfGGDAEMydjfwziErDXYmK8NYfCdm6HE3WqNExRqQ81fSPdMq6U67yiR64swQrpE5bNAjHQ5A8xuGuF",
  "key13": "3hjRnxdu4fcWKaQs3GbAMHziVFgMPH6yY8rv1nLTPgPu9JGPk2AFy5VwMCqj3hPJWR1ShKmpLsMxS5wBmmUQHCpT",
  "key14": "3yHfEZAFewXP2b84yKWw85NdGKR61mh1unYdnEL3B5GBKfVxQ4KQb4cDxnGyLrAybYyFnMaAdTgcifCVcGbkjCx",
  "key15": "VNQH6iSta14CgVfEwNcyi7HLSAW3YYftPUSdCMqhMfb5EWRkmqU4nGfYczUEFww1NYLCfFW1N6g4x7LD8cKHvD4",
  "key16": "5W4xjdk5wgiRqjRQ3WoxGWEcZNYEdHtXYVn9cn2dzaAeeMox6R46GtkFg41SiXpjbDinRzqpC1UV1WRx5r86w2Dc",
  "key17": "3yfLbzFbFvRfbcsodqdQ8xfE8dFV8UgJVphdZpLnY4joD5LmSz1kY4xjw1GH9aw27HX4dfB5wDrF49Md8AvoDZiY",
  "key18": "2FLwqpXXdc2McPNsaChrjDvpW83mi5BfMMYnB8SL7VE1tDBaTawdg8Rpg9Q7exASLvJBAgNib4KvcBjSHJnuPFqU",
  "key19": "2Wc6Z4PL73X5sUK4YK9SkqV1su1ye2GCnZAXdhLqzyTF8BEE4ezQ3o4NMTL75zAy1YEWhERCQjtQ4KdRf5rZnWby",
  "key20": "9Bbm4D9xZoDfCuT3xRBMJW8MLQf2G4hSesqUVvHsvFPUuPBupAJYzpiiBqJQDaBPxskVKUqM3aJjZrvtocFnuhA",
  "key21": "1Xm2pcP4AghXH48GZ8wNvjajBYQpKNvuSwApktRncf2t1qb32TSpHZagVQsdkNHdHFfAdckzoN4gLSgksesM1gW",
  "key22": "3vY4RTWkJUzXw5qo3Vg9gYuSdkUq5oAkjDJQFhhVHABGxrVpMJ5vjhEVQhsM5byumWPiRaus2pGFEn6fHPvMSbVf",
  "key23": "4MRotm1iA7cGWZKbGZQqKMxRu9tQyx4HzmSL4aTwZNqYkg3yKrcDk4Gj1qxQiexAFYipyDBXuUvuwjoE98TYaffE",
  "key24": "4hWWzzbVKNZKx3xq6RHuFTsqiwjbzyT1bxMW9o2wbfT9xWfpm5jfZiYMrtdqyoDDfa4ZGzZQHkxdZ17eMkLXTxj4",
  "key25": "5PUErzp6uKNiokbV5hVan39vXXepy3HxCUdCUbaGyWDB3Bs7qoXGyKPmhshsgbvjzNFF88TdvHi51bwT96gb3Hem",
  "key26": "T447xLrJ1PFBTgJpKF1DAVyk1LkCRL2i5j9RfUHbz2s4rjqmD6TptD7DTZ6Nckagv87gefrJxxnVomLHiS7PUbw",
  "key27": "qWAHkdBk9DHcsDCBeMzYvhWmZLeR7UwWZ6oLxSK3HHCh9FsJ4caJiKbNqtQULA8976sUVxR74obCFPtA2YDc9Qr",
  "key28": "2kAYEnGA62MwG9M5B876s7UrMrWFM5b4P5feDcg4TTRcbRfmDHcvxhw6QmBryF4jG2czoZSvtcg54AK8NMMYoqpt",
  "key29": "qFdoRNzSJeD4gy9dAX978kz45fYafjfocino4M6hm49PJVt3EAA1FnmTZ1GLPv7y7h4YhCyk8ST1pwkz1ykkVyz",
  "key30": "2z5v2wtNzueAQKPymaLF3FRGBJACvRSzzUjEH8PpQ9SJfCnJSMzNMFmFKB2TJr4XVtx6ajnnW3Ehxzn6GhTRLQYj",
  "key31": "539DCLDQNwXeFLfcNd6BcFGQQft4XE74JYpdR9isaeboweNexDGH3bUAw6Jr3pvWieucpMhVWxzfZKgxxMSVVQCK",
  "key32": "KL7itfoiGmovYqLNXPmJVRVmnNnPV5bM1GUosB7PintnyRQsJA1mT7qGe9dnfbcKhiBbJa7kWW5FFFW5KbTbW5b",
  "key33": "2DbBDsWF98fBeKihDbovSjZqqbxxjDHf3UMwUodZE3qJomznmiQLnGWH9BZLtiafVkRtnm4QPCb9K11UtCFLFQB6",
  "key34": "vMLCsCcLw5AFqrW2dheMug95vTYRBSrHYVuuWnV4587rkNqYyUHK8pT5YYDMcsLRwFjVr7Xi2a5HtpqtuzVx3SB",
  "key35": "4PY66Ef7fARqdtMQzAd28oUGBDWEACckmrNrKxAs8GnH2PV9mPgrx3beHHYQnbye7fLxRFZDGV3a3c7iQCcf4RRe",
  "key36": "5tiHJaVbuWH9GMG7X2qF8TrxEUsoYG8wcmx26SgmHfsVhXjxfYineEk5dYFGRSHYBsoFXKX3xr5dtU3No2VaJuFt"
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
