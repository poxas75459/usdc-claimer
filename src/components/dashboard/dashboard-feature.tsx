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
    "otTXo73FqiMbLV7vFVwwA6UvoTGcSQhPS5AayFBtxMM3PeZig41SoXH8DQmqs1Xh4QuPCtspPQ5FiLefFxUJp5q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pAKFDTKqpbmCCd9ZDXMGEy5HPJNF1QAUGZB17GMhAunUWtuZ7zrzLCUMz43WbSpuktwtZbFf9wfi2sN63XQDYzq",
  "key1": "5oTAEzrnQDYuV6ZKcFsvGo22quTpvAv2C6eLDyxnXJEueEBLBGdhfXew89faMHDyU3S3Aa1GtE496nZeY4UyKs4a",
  "key2": "26EwGRdJQX5MWcxiZ2TPw3hUXFaBnNnc9fvNxKdwxv6jXnZDFUXr2KqmsQnkzLiopZyo8E2NGxsDE4W1q56MrUN9",
  "key3": "5szyWJkTYwAex4Fkh31J7GmpSaTYTkjiT4riNLtRm1nCSRc9aUhRZuQ4aZ8f9WnzT46DiCKq8xnGib6PRpyLRujE",
  "key4": "3nkj3DjyupbcngsEvLRkbsH1CbFKCpq2UMPcQFCV19gNQafvfevMHLEU9dLkSU3mswExJQYAGppNASGmNssTjLbE",
  "key5": "3zNqGPVi3Tziuq4G7ZHhmmgnZzhy1MPkenKNEdBBHymfh81P7HyztSvYYhsu5pr4F68BoRiU1R3rUjKPQV2GVuDn",
  "key6": "5tgXiYiqhtUQT2N7tyKFiTkGRK4aJAPEhXwiMBcBC17wWZhLQKv459vaE768hA1Ef1QteGCb9H359C3fnMAu59kG",
  "key7": "5cgan9PWR82RBbB8G9wAkNEkM1crgDPzTLUup15Pp49tBa3Pf38sxJKQt3UZ1VEwCHpLVPpF3aBoyRjYG5M1D9jg",
  "key8": "3yBqnXtm2tW5WPK9LgKn6zR8MWxdhpcuSAhbcog1p28uBcjWXt4dmUBQFSPAomocJoJWccxqBSw5HvfZXkRsYMUq",
  "key9": "3eM17GgGMRMBw4pLYamNAF9TJoZ2diZsYcEDfLetA9acCMQMPghXan9K6HTZNasxZZ4VK94Y4RYeWbrB8xmWgPBR",
  "key10": "56wxwPTcfPdi9FBA9tvWEqn4cJ2bLyKoWGiidN1AHphHn3CQypgJogzFKTsnEFfPVGcPkmsLbZb7aToiZqfmR4YD",
  "key11": "2iGFoT8BxtiYrPBao1t2q1UTjM3ya7vYxYQgEd2SRDfRvXMNyWqVEuYEbm1GA4epe3FfuTg3s2A2htkCpQuvYZPi",
  "key12": "43MFtmgifs9NBwP841ZZ2EGvoMXfNeF2Lm3m1h33VhZcGcNjTF5Pja5s3Rrj7XWMnGxxiT6ifmawbDETuxGQFDDe",
  "key13": "5qRoPibjZVgBNpncZ1p2EwWQBrKSrYfbgRtGwv7EHpHZojJsBibxvDwEHG6Vvt7p8VxXCSg34vCULrJcrHbkgpmk",
  "key14": "yQCC6WfXvRX6Hw21ZDGXfWLx98eMxjMWWyqrSc4w7mx1hAYbMnJNx4EWDMoVrYaYWSRLyvUYffEzcT8658v2fGT",
  "key15": "5F1HqYLTRomcXTKVJAVJziJ931DdaeobZwSZQJtEbRZmgx3JTPvLaJm2whypzugRRZkz6PLQQ96h1TcktkWVAqaW",
  "key16": "42zcW4z6opzgsV8PnLfWBacQdu6du4zLtYjMe6qXNUEGaaPMtPyrKNKmELuhBjwEHpfoiwNjMtrc1q2Z3v6KWRGm",
  "key17": "3N4vpUENvSVuvFX4nYCj5JitSevfMnxo8a2s1ERjBLgf1cd3zBZztgT7xf93ehy3uu5nvpA3Xj4VR8V8rXNsLTXQ",
  "key18": "2oqT75tcqig3UJP8twcfDxs4sbX3oYUvyiBoU2QCUhGHSHKFymdweJPd86gbUFbQBZzmHbCSFjidZwnJXxKLeLd7",
  "key19": "4r4w5ALqs1i2oLyX8aJbSJAVJAfXBJmFK4F36dTyeTpFrmBhoRFxSx5TepFVqzRqNidGFiPFnZGik8dtmEr1uCwQ",
  "key20": "3CfXpyhpmkqrq2NFj7vYNQUG8NzG63kBvUETn7tv7WnnAt8ydHVAuXyBAAtYYpnP3UgNkXgYAERudDcxjet71sAU",
  "key21": "46rTMF5T2ga3xn3WGnRqrPHgkqM52GGxgi4dUVvFM3b7XD2k9kA7d7ZAkhGpJkEjooGoaP9Y1Xin6MQDYc6bbpPm",
  "key22": "3fuTKvbM1u2p31qWeGKSbZWMidLYDVNFf3eU9y4YH6wYn3J8xe6zNt5aS1irfb3SxJa17G8LMS9raCdsxoMPd81K",
  "key23": "4su4TF8ZYhT8anZjPUMfk5xE8Br6atrJDTXXNEXXmsKEyeFpwWDwBcWpkWvMjFG1wLjgP8rZWXvsX7EKns6WrYdx",
  "key24": "554ivgeYFh9UmnvR2sd4YwAmwATTTjyyj1ey7NnEeQ8YpxaKvt5rAhn15SWAw6ituNpyLZsz9dP5v6kXufLDqP8f",
  "key25": "4ACFUSnPQi9fRLJgGcZ7FaaMUBvR48dBJg3ZJGoMBZAxjJKvkfTJAw6h16p9Kmf5UNyisaANg2BKAaEv4SapMCFW",
  "key26": "43JVcwzVkjPQxdJeNJN9ZGb6NyGokFB28fMQ8byx7bJ7vWYsdTsyoMwWkGVBQMsPjQW6xq9fgKcgroWeXtUxZ7BN",
  "key27": "49aXydWxGaeABSXHcvf8oVF1sV7PzWYvmoWwwNP45Cg73NRfdybKNBwZhmonR6jDQ9CDiFHHi6gr7ZzbDfPdBC7V",
  "key28": "2PRLS9XJZm6AvLtkcUkfoyji27oAxZkTyL2gjaKMGApxo7heSHk8y7A89sNQiuZvZCyBUpoP8m8GW5gG3AKf1VGV",
  "key29": "3hhPRtkCasWLdPe26JxsQGPeR4bdH6DAyYenRzC4anxwgT6M4Z9uxSbcc3Tn9Z8zA77q8efRYtY87k1DmX3zY6rP",
  "key30": "3CB48KWTdpm3EZEgW75vLfRvSArMw8zwLnDPZdoXjV7mmVkwsdqFWtqj7vaYpmpmzSStLNN1L595gTSWRPajSYpQ",
  "key31": "4B8z8UxfmQ1RQsfxXXgFVrUwGGDJpM7vp6DL5oFwr8p1ztKoybmeWEbVYJicTFDgGr1CkW4V3dn9Ap37yLss9RZo",
  "key32": "66BpevXXDXqWLS5BVqaPH2qu7xUiUEVek5C6C2JeJgVkMXmoWXecfNgNrLoj8DSuy9SFFrXPC3ikEQZBPaYzNqpZ",
  "key33": "K4BfHsiXNhFBiBBWLMkCFYggQiSe4KSWLVg6GyFUfQsiJeUg7wW6fVYoPDbq5rsoq9YxB2tfhYgefmE1phjdb4o",
  "key34": "2Z3JCoftugZ7zfTVeNJwM529RnFR1xfPkCVzQvsyQCVjGy1s5LYgxURN81vRrhqY5FCYh6Khuv1QtY1m7dG1t2B2",
  "key35": "2R4VAtzMhrGGB4ktpr2tBNBHsUGJwYCRMC42mJzVLpFDejA6KpuoFSLuY8mpm4UBCSzLhobBpYCjaYpKebDsLPPB",
  "key36": "4rDedbiznN1NyqwS6hhn6rgD2ckr9XWyjN4KYkoeWW2S1GWYVn9pskecR1zTBxatqKDorwD5VcxZ2ZQVSGgkNRMu",
  "key37": "hfmXxvH4jBJ1R1fuhJD8xmXPQU5qcDhqzGxETRxdF46moJNTYZdNZZaChuPjP97jUzmSo6zDzuwGczb7oiMS5QK",
  "key38": "d6cyYKoDuUxk6LkdAX9r4Du6fonp9FFdPBKbKZgroafnQ76uxmL92nbKoX7Di56pt9eo4KyB4hgDkbT1mKR8GFc",
  "key39": "rZ9o4CgWugFM9JZZD88HRM1zNCTKPfaJH6v8bCXewN1qqiG96zBt81wkEobjorJSc6QZH5otRkM7ZLJBbHH5ZV2",
  "key40": "2jKs6VnFED6vXbpZwEVmPqYNXuz84Sy6KLFE4RC9sndattniATe6s8wdXLjG3YkrEUPBLy7KBkXEGy3XvDt75hBT",
  "key41": "4HcZgsRhLKJ1rMDAP3chaGuCU362pvAHSk7aQsCVHRGyfVxJZxsGwyMyi71AkJdWJPsfvbVixvVnYEon2Gz4rHDn"
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
