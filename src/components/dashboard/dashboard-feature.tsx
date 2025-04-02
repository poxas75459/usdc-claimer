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
    "4ZRHZXjVsQMtVHPi7KV3bmRj8vrdaS8wX84xcAaPSNYxBrHyHFdbxyR74GNP4HQQystYVbEhGezFQKXKKSvp34i3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r1E3TC2CXyCjXfRPb8urS4U1V8PA92raNvH7NVAJ6MUXjzejWYh5PkjNU56ViivZEo3GmhphLrbtvRQi8QjMmLs",
  "key1": "2EAVEzqREiVuHwAct8h1SJf86qFr1EWD197GnwRDHBn4zfhoJvWfBRPNGAVBeifoxPVPe4fvMLkQaFAotGq8hCyU",
  "key2": "5XZTnTtbo5XNcKMHyV4FnzWRVvZkzkDBNjJwiL5SHAwpqMkVEKZA2xy1B6XguovtBhzhinRtEYyDKs3yBWv6YMvT",
  "key3": "N43bft6EaZ5eMvTmY1MqJYs12zfmJYnmRopqVJR1ZUasiPza5HChSQs4KFYGXPL57RDHZ4AEvo7RzXq7zu7UEmA",
  "key4": "2gqdGq31YcYHTw9Hk2WShnYXu3q7EZGd7cWvJDnDVEdmVUedK7SUx1XwmLgmzudESJ8dzrLCmfL6WYboqS8ubPi5",
  "key5": "34tqSxJYnq5oiWfXjcnxN9MqksnFtv5AB5V2ahwvumJmQNBHr5M5tE5iQZvdVtJrdvFMwBi632jViqnYjXLF4NtV",
  "key6": "5sRqxUAWGofWgZELrLNxLmnKxPg7LNdJpeR3sBhQVitqmPcYzKv1sZXZW9s1szATsTVZDXWCdANvLUk4RjfMEk76",
  "key7": "3FBK1nkyvAAuE2yQEFAcrKwx1jDGv3cQGDkbcdNbssanepknB6P2xAUJFhELfqGdJwJHRaHGoZUoRstNs52mDjdg",
  "key8": "u8m79XRrkFbPSkWRs9Vrk9dmcav9exLJxJhLAcz7v3BmepFdtdKViZzQcpaECyAuKpyv6DMvAVtHXsBL9HukWe8",
  "key9": "62fnDdzMKUEru8E7RM4oogedrc2VCkMkfXtnubRfqSA2MJ33Wj3QFdufssitPUd5niHTFT3qoaUb3AUetDTkra3o",
  "key10": "5KLhXkSQRsKdVGsUZJpjwDvmrgWo44ht8RsmHsYanEbTALZBBg97xsehmYENY1fadEoSaLi7nALAqgmoByU5n1Ku",
  "key11": "54mkaioer66E6BJfeFF8v1xVC3Z3iBYY5GZrLG9VpK8en3oiZLh8SAtmhhxNJyNCMKEBoWMzVvYzKQnYXoisBFDn",
  "key12": "azdNfSURqYxAGtzXHKqYHHiAaxfzzhmrwgTu5Q8U3j2gYFGMTfoFe7gMDJ2XagnMUkbL6hjJfCQm2m4ANGMgejy",
  "key13": "3hbByShksYGmNShtTyYxgXB8cqAmG92qFMvBrEA7BNdFEdZTum6dR16bEhVVd8viqj7YNXjbP4GqSvBZpvfrmbK3",
  "key14": "5tZ3YujVDFjhNNQb3XAibQHscuHK7nCXF75PfwM4K2MSJKP8CuFwMGoo6S1MVfGRZJ7v83RGrUPXFQRDs8jPG4yN",
  "key15": "5G6ZrEe7VZ1Wp8HnnW6oaEUtfNUZqMLktErvH5NB2YVux4d5RXE4mVZwg7aK67Qa3TCEWSCdaoCxepugWZe3jDPh",
  "key16": "4bqsgkBL8jtVL2C3BLFjnD16njbaBab7JtwAtAaifEzDLRQEuzxYxMrbbcxXqxsrCWjcUU7xANxXWqc8durFXj58",
  "key17": "5yG25BfrqVMPECG6PGEUBURwZDA7MbsFRaXGV55EMcPXMyMCk9tkwguY7oweEM8MJBfcJcwPShfJWTtBWKXjVeLA",
  "key18": "28bn2wRP5aQYTSydPLcBmFhoT87tA66uAuFuzBEzUhZz6HGUWxAxF5cQUuFD3ZPznBNvEQe9RnV5kx7iosEquaak",
  "key19": "3SCLUtZzepDRCcLb9BAqBMt4LA6twYjNt9BBQd6RhAya2knTd213ReKgGKWRJQes8aECpNMf1VFsu2zYzvvdJdfB",
  "key20": "GhuwVSuJZM9hJwWUJ8GtMVk7PMQ8EYtja8Y3qixKkG5kcZSgwiQ7G6gjC9vzMi7B6Fnf1zRJAr9Rr1PFcVQ6ax7",
  "key21": "58nQJaVYuN4oSZx7rsocGVk3xEY1vjuRuHm4QAZoapW9NxEeMjbE59aVXikkMriuA8R5GAKMCESwL1SSv89jBByj",
  "key22": "4W4zifyLwogcj5rnu8SyQw4MnvWv82kw45tTz7iqTFjejTv5Keiw6ZpuMM1RwdbVZQc5Ly17XvkFDt8Ydi1SMQqY",
  "key23": "2i2mGADnrYWRKCvw35PUXZWeM4gkLN7XM8XduHb1o1ecUJ9nFYZWkZzennbBMqWjLdaenk1Y2KENNywPT5ebgtVV",
  "key24": "5PEKkLi71km4xZ4EK7QwD3speQhk4j79tEQAQo7BskiM5bCxVTXGZxjFXvKbtSALm1ggUkngAyyFjJGrftUTuy5a",
  "key25": "2BwpuMqN4kRjaXdoDome6YWc28QaxczAevfA88vecHVQXSxcB3JN5NC9miwPZXqbHwfK4XjSCwLRcrWq55dRzZ6V",
  "key26": "3ahN44ghBnThi4tXbWSoMfcnknazbeoaHCu21DdmhqMX1xKVqZHo3LG2WNe3zkX8EnuWpFfXtH6uCq3CRAGHGgPu",
  "key27": "ZbbvLKrXsEzpJyWLGDJXi6XpMmGLJXrstP7TftbBzUC7uatdJTMivNkTNJXLoVbJv36XheJ6uszrRMQwczb9E3Z",
  "key28": "Tc7CPUg7tqgzaSvg5HTnSr9bCJpqB1WcNVhfSDhP1cUdYMrJwtvrYryKYnenSunMLkKXVaSV4Jhvmz7p5RZeVr8",
  "key29": "4iuGh7zwPcCsEvCW73kE3GnVR1yD4HB4rLjZ9ps3M36SPKfGhXzfSEXCRTstK2FnnKXjPa3Auyh61BBAqjtnhMgj",
  "key30": "5pL54M9xbkcEugXGsNiciDvqBYhWW4QvZea22PY94pat5C17Qoss6erRBfSxif5jRxgjES1eAnFyq7exUionrvrT",
  "key31": "3quqjmynCM6AZ6dXhjLTBNv8hVZ9ERQRqJHpL2pc9WpW1PnnnchxAHprDJGm928DW9m5aX8ruN9Z1qsmtjzeZUEb",
  "key32": "qRz8d3U4bRYnjp5yJGefSztUiUsFsgz5EVPQtWCAW5q7xgi6ZbKMYgX1pMeZvtxgCgcLszszsfkHurxrprnDMoQ",
  "key33": "4kcH4aqawZA9LSZ2aZSaKzZndRm2czEAtYdx1w9RSNDdAhVhEwrqMiyys5UDAmcapdfwcjqcoJxVDNPCJPeYfp4W",
  "key34": "35KDThEEmncdGoFNi2sruEAJRBuABDkP9g9SGhdQXGeNRSRjA9ms3HAediL5kA8MsxZCFUeMttxh9nin9HRgnos3",
  "key35": "4A1McUnTKW8maMjQMt5gX694NzBaYuH1W6rqbu5SzNaRAYTCWWZXib6xeGhjcTRE2uSmHeeF5oHQ2AuGaKtnYRsi",
  "key36": "5DhBGpHQ9AGxSJG91iT2VxfqFgL986CDX5gdgjfbVTpyqoc1mmoqcXxYhrDHLtBwheeKvVmv9qMqUCq54XMYYTyu",
  "key37": "2Q4sqS9PGeBybkQA3G2mwXSxvsd9Phrn2YhzfdsoYYEPeKvXc3Ny9bdUXKgXZ6xYqVueiEzAZAeY7CwK8c5HyNqq",
  "key38": "MgNMdjyrYYzJLZDPwUJj3nR6qb8QWRGtpprJub3uv6iMQbxk5GNfNTPfaztb8wEQE4iHJ4kBiXxKpxVzSoqUWGV"
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
