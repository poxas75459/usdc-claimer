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
    "5SFJ4VTcUK1r5NH8YkE3wSVNWxDWzmwuwQtzD9uRVmb9AN6pzqMbbSir1b8BFrwWUB5zdFoX6dTD7xbr3nSoqPkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57AYREpEbvmAPxFiDFfdefm3wbFCS9ved2JgWvnv7NyrVAdKJKoPGZcZ2X259agYrqsjv8SnEsnnpmHVJCGXb3W2",
  "key1": "4JAdXC5K73VCgzWLJ5XqD1W1TnEeHitp3P2xPG1E2fCBZVbGVgHxwM5KLSQo2fV5TE5XyiwQRykBmx4zoBwiREVy",
  "key2": "5DAQGJi43o4KaXWFCnW3xQ1Jik6Uv1QMMV1JF1MajuJ8SgoJ23dv3VmnZw1bG7EDZVWoKjhC1cSmtNWyXH88YxXh",
  "key3": "Zm5qgwxaXMszxftMEb1BFuFZVHfSrtJducRL3RQZSCNMWFhb9jhUSFM5ETUCGinhEQvszcYk2caBHGcp4swTm5A",
  "key4": "4EdYNmcwR2DQHN4hLZuzCz4dE7gZiE4XR9RrbYsTECi1oFbJXvhSeRJXSpZXt89Gdw3Bv8Tt2VimVhSYnTKDVbx9",
  "key5": "3M93DVphYdkFQfR4pZ1fcy1ckwtJWdoy3tiJo4pAovzFyceJ8FjnuvWAbAnwTcVtLarwhDoR8tx4AvfrXTDXZEjE",
  "key6": "2DwFkANzULowh1ZZeBQjdGWgDtFMQzphdbPYNmuc6xr2rw4r8jDHHzaAhM3cLXkNPdr4tq2rhZbRH4Cpf6vtFRSL",
  "key7": "cHjGp7Rcv7qcKnKMPxVgM8f5euVXmZo8ZCP2LJJxtBjadH1jaz8tx76biEtn2NWJbrTg3HEqx67xuFrnnuKeYru",
  "key8": "m1qjBspUutEweS3CGHBZ9KdUKKwijQF77ES6aEW8qnFJhhL6KPuTSnfk2rwXTWFt8sra3qEbffq4xNVQaMq65yq",
  "key9": "2uxf5GfufDWPZfF4TPGzUi9S4LmLgkpesJjZp67RLQUDBowMfNktihaCCeQrkWPQLTVMX2FLM38zYT1ujgT6hh5y",
  "key10": "3JGjb1oN4uKrT1f1yLQh6NPGnGN9oLPbK1N7jNuEwz5pmLUzFn5xvY4WqTkKmg2GR6EhtkQPqKXHwpJknTByc7L3",
  "key11": "hEs7aPyBCBQ7CWnpE6cqL5JuxcXgy2YRzERVRwkBngse7sk5BqxMX7fcwaibzkyLKcGx9vtQpk9YZ9EPkThafRi",
  "key12": "3fNU8qEknv4e7kMv4JAbWY7AnejRMmv7zEFBnXvY6YYDMw79GvWsvwjrJptB2F65Bod5hWNFArnAG9fcfEWYGxCo",
  "key13": "2iU6CzMkcVXWewSzHRmp2wKgxLTvueW8nLYAcz7HE3oyDDjRsXQmpHYqXzDr93me5uVDWSQ7KSn9FWXEmDmBXVhf",
  "key14": "HxoeQQaMCR6NGd3PU452BwSNCSemd2UrRNx89P9Cbvi8BZ4Yg6TjoF8xHbMGBtGikWmBYkMtC1rDzyv1mpjfQDT",
  "key15": "mP4os7xJK5ERhnHg2TnDGnMaz9cNmx5ssq9kuymqwwcztRxojwN2VKSEkqP1zTZ84Fmh7TBanRHEVQJAskSJcp7",
  "key16": "uuyoJfAJhRbicaWHZG4eMidtwNZD3gdAkcqsdi3UGLMZ2vpUiG9UwudNXhH97VFesHes1FBZauwUwvCznryD2cw",
  "key17": "ZYwHpizahGFZ2zuKCJmqJpvEfndQFBawCRiwon2c7dW4zGdxpo6BeCFyzad85ovXUGrUv9npYZGdXbB44AMQ4nf",
  "key18": "25E7PP3rTMK27LVisS6UBUagLW66k7x8wAZ7B11L2dyE3uSVrK6WUqxhFVV8KL5JdH9e1XYNiSXvGTh5vJhtL59i",
  "key19": "NDjjfG37JYRYBFL5kfbowavJvc33emYNVqLee7hCvgxyGzQXXbSJomukvrQg4xpVwxDpniuCR6kDEce8rUShkA7",
  "key20": "5JWPnA51tcgLbwkrRdfxgX2vEsK3YcUQT8Qpae4ecy9TAsjRRAQscXqg6kbi4s1U7gEgTHEZovQEd9G73XKMAQaA",
  "key21": "33KsjXd8i1fbAyeq2DoKXiqPZ74MAHDCdKtmjJvpHzjfgTq3Z67qxsikH9CXYHRy76n81omUfk3uDeu3QhcUkqxV",
  "key22": "4UH83AvBMPZ1JDX3spZUrp8aUsEGYqJXNKoC5KYUSvVcncjk1KXquLHUCFyCcSozgP3KbHdFEHQvmdc6eUNUViLH",
  "key23": "ZQSmgAk5beWbvxAg7DFDJWZfD8WtDqU5ZtKYs3zRRFfA511ABNb3AA33Hm3xcz2iu64kqj8itYKo1e9p8sfrG8q",
  "key24": "5dUbNnjTs7MCdgg4RNn7Q5A2DniaygNPqo1L9AwW36id7y1qhcsq2aMiE7U8cZaCtmUzri5Q6xhkk5HVPvgiovUk",
  "key25": "4n28dmy2U5FGR6GrRuk8XqYvJzoDuxmkGdvyUVcHswfuueeLWCNqhKJwH4EuadDZZKmM3oUozoCvNcJXwF4dxr7d",
  "key26": "uWnz6NajB47etSEKXNZqRPoCKKZ4CA9NpQdabTbMbfu4ihL3xUBoVGTmyLzYDQYHRKuxZGY3XiBTcAGEw4EjxbX",
  "key27": "4x99gVg47VCM2bUaiD3vktE1URr1Gc74gdZWk4SpUhYo87LSSzBjdm5bKSM6vUYtqPBebqLuQVk9SWwgdU2gCkZt",
  "key28": "3f2AYrvn1xVFbS1guvJHcNSGKy9DXanp15wp2Pg4YGYV3QoD7QVEXf3nzMVrzAV2wq5AimQcauDAuGfPwKmuGFFz",
  "key29": "3xEvw2SymiVJGX6KkUFHA7CG1wRREj8c5wLnMfGdRF6ZMCXB4Mq1Mkx83ZaVBQP7iTQoTMpYTUKtbTFcbunS5eXJ",
  "key30": "4puC2ZyjjvsazbRsBKnn7CefzEHQfokf6sv83QVT7RYHChJiJaiSQ6QjZ4wwqmbRgfzcrCKQqP7GZ1TwHkW3AvLW",
  "key31": "5T7YpUK5sVsYLY386AJ8fbYB7nhZRq2A7G5tnFN2jYkAnuHZkLfjqDACBWSVvHMhvhtTYsY34QHGjE3w6A1e3kXc",
  "key32": "3anPm3RkozSPqzNSjeQTotxdVhE36exKkYfMDsKrepaK9tnNnmzL1jhn6qTNZAowdjURBFVmGjqpqRN5ts17FkD2",
  "key33": "5ZSmpXYN6XTAU1DbSzGc5nhGBWUtxLVp64NdB3LbYTdeVkyKUk7AG3VVCoKVdjELdaW19nd4sKxbUoHGBR8ZBJYQ",
  "key34": "Qer5GePZWKco6wYLorREUYPPsm1X27NSQPYyJK3mg2YZBeHTYMaWbF7c6EXrLrD2Ao5GBGJmHSiCoPemBh9Scjc",
  "key35": "2qaNYma7KJPnvZ7rodWsfCmihQC8unS2s2UFCeaTZJRgnxX49JF9mLG74tQoRUwvVEvucG1vPUadR1HY6MnFytCe",
  "key36": "yU3HejNuxKtCjxpE62bVxyaFbrh2zC3j9JyZA3NTQic6jyQKyFMiUSJ3Vscp1pTE2CsJrVjE3hTUCJkiGp23Mhy"
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
