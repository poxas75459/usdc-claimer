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
    "RmXadBrRWEbyTmmKtgjj5ChRbKJsd9BwsU61t5NjzuE1fhRshbMi53wyzmJMhqARpYCZsEzTfXDXEAnUiDpnoB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xhY6e7NsM9hpCikKDDFBfFT5ztzEXZZJbSo2gLRYsK9EF2zzVbLS84NGeBMQd4EjtWiCMDTJ5GtVyR7GmfG7Tgp",
  "key1": "3Sh9qq7fxU3Dyrs5HpVKuKL4MRYm6CkqDqRY2XffPf16Ru9TrGwVm5KYeAiDYYJmuyvsTo5SzW4gSiNuSxjnRZkN",
  "key2": "3n8bUCsGNEaEiRkQAyorfV2hNzU18ictu6zHp81feW5mKr6xXVd8zNf5HtD7ZKxuwkeje67dvGHhkp2agvrmPdRt",
  "key3": "2Ty4XtzRUGjwY3SYmVrKDFVjxAxJKptHpFtyL19GWatwjERLFNAkc63vJXP4dqgyN3Yi7Ejm99MYYVVt4ikUB9D4",
  "key4": "tLh6hy4acP4mzLx24qPVd4E7yFkzWFqqhyvNdYm1QoSArNoyCGddCtpuxsHcNmts4LAKvv4KdsF3DAbrWC6PasB",
  "key5": "4AbFbAjaZmeki6FyCUEncJ7ytHANWcHemccPBXBnD1WYNE83MkQBffDtcESiMG6ZhFBQTCsxqY9a7a47HWSf1DjN",
  "key6": "5FgFu31kKTHkJmMMrMiyWrMdcaydBY6Lw1G6m7xACWLjeahWQPK4PDpBDNun6ABQoXGQNWnhkB5cSMyL1Exi6Fer",
  "key7": "625BcUYvyDL8muzADEDTJLsaPqBgmnoj5pTzfNpGBDQWH767JDebXjndnr9x39SwsuN32v57H77jsBjM7qmaoUFj",
  "key8": "4XSkgDrFvEH5dTtHXZTNuCjWjADkeeGiJRxJhB3u7bNLJ6JAMT8tVHTPPxLSMAimFwcngP1BX9igxdSkEbzaDR8p",
  "key9": "3ZQZ4abXsuvHVpRrwpPCMm8nNpoAwkDkRwRashx2NNfaZpXMX61wS66yUKSSA5CmHhMPKdpzu2exeD5ioQhF8QGy",
  "key10": "5K2TGE3A6Ho5eJzvHbDZ7zxD8ZpCXScvQZDovxm1KScHDLcppFjQZTpMEWPN2WhR23Hfjg6VFAfTSZk6rVJktcsR",
  "key11": "2k2iAfU9U6PRKWFNsu3JpojEYpxZngEaQ2qE4rJjDa2BNHpN4hsZsu8eQHUf2VCZK1Bc2WxgAXpPajqcV2GhUUr9",
  "key12": "4c8RkjvnapZJbbusUoe6nwzJirp3ezL47HLpdotU4NURs34tq3ydUMJqedGwdVVRsfxRZkjXkzAbSEUtCnisvy9s",
  "key13": "4B3ZyxHeRqEcMQv7zkacTifLfKe66pwvGNm7M2rouVuco5XTY5uemU2kkbzV7baNGnH8fSAzzMVDRr55bFuowJyN",
  "key14": "5Y4Y8Da336fD2etA2m2Hv6DCshS4TTK21M6i1hBY4Bud6fgsuDTEvqNEFBMmSrtHgv5RMiELC9furuBjtkVR2uE4",
  "key15": "3XYKZvupVM7mBCw6PfGgjPy3A9GDRQQDXboptFepGqykAuMHRrMCpxAmrf134fpYvtsZ4sYWKndJCjsusRn9uUK5",
  "key16": "4n9eQaHhFiz1gZrFJ3wXecSMnhGXWAp99qVncy7FcM4JziCUvKJJKPXrGUYBZREzbbxBjTeTvVEidjXjR3aikkW2",
  "key17": "UTBPZedw6xAk6yppJgFeB99C3ygKHpje2xKrLZHYsN5QtmxoDeQpTZm1eRyNuEHmbHEQzdNu786R86s6un6icFW",
  "key18": "TkAKc52UqjfUq21DFwkci27hZJABUexfsomQ37RZTuoK4YkeZHAwnQE57b86RE72M1D1GVmW6SW2HFJBe49P6Az",
  "key19": "crAtK4y248qTQCibvcgDi3CiFq3XsCDRnJWw9hqZxELX2NoeQNNC48UbcaiAS3wFxig5bzM2C8zcDA4LXZve3Na",
  "key20": "57BFqBQHtfdP2tZVhqaeyR7SYMzPuyRSv6Vpb4yPLc9QXEBU1QWUxTGWN7o3soJfDyq3d5ftzehSAF3q3r1syAbD",
  "key21": "2AT54rSxDRdkv588uUVhjAZsTkqgky7iFHkQaWaktbNuHZan64grU5zsA7tb7B7akccUQ3i1PcJ9YjhQJ13qXYdz",
  "key22": "2KnpSUW8fBsSGLAMA14cYBeZLJNo3sJgUqsWyPu2tfp1AJs5XUzu5ZAhLcg86D2KMo8nx62D52uRbk9qZjSgj9me",
  "key23": "nkGtuRjmSQ3JK42ZRpGvEtLRiTSBvUFBjc1mZJtmtobAtq5Hc3bbRpdb3FHAur7aHfSkrG3xWH35FhnS5xFSSaM",
  "key24": "52GjKhSrAxZo76icqJ7KGcJff8p24kDp7JwsxdNVuiyLN9FWNx56LhBusFLASoA4YaE81mDoG8rorpS3di4BxMmx",
  "key25": "GoHfxm6baMHqUD3vCyTh4qAFwFhzwF5nKtqS15i84of8ovk7KoxtqDUsbGAc9qfL11UwhkYJEhWtSumiNyADFrQ",
  "key26": "4tNPk81f5ieRqbesX2GYuVZwvZypUPQRBKzq7uxDjDtzVRdA3qcesUyRxwetT7kxwMC1zDKDoLh9upuisccKyHJA",
  "key27": "4JPhYc8ZUU9f4j8xdgJ3YHRLUuz83MRzkUGSehiiBDg56ePwFfrhRotM7zFgmFjQu5qEjusQjPUVxb5Ffwf8X4tY",
  "key28": "4dTjGMBWNe7RgYWtmHgsz4EdN7NHYxnCt7oxgHaSgSKaP7M2HaHi6Z2pNe9bfMeWHhS6TJvMyt73fKwigVYjJgaa",
  "key29": "5FPeEXSE5UX4YTHnh2SpRuR2HPPN5UQKwVs5Asc6zFt3PEdUrcrAWEtFfC6YcXAJwVXxgfvVV6D2E1qrUUfsZ8wE",
  "key30": "2jHm8yCy43v2STQUVhS7hnySMgMfpmo2Hmbt5ZH9vUm7ErSmA2hBFV3agGwZnj2myMnSooiFn3GeizxEcRzhNE3g",
  "key31": "2vCnavuatYEZHnsuWPFBqMeLW3XZrj8Fj5XeBe5Yw6wtrapHvUnvrz5StxLid85EZ3eBCMyGct6Ljfr5wT7zE6Eo",
  "key32": "2RqsYdfsXhrZNxXGmLaPQGWsN2kux1k36W2vCPzRfyXHJP4PuuCwSJUmepabr29KW8mYJBXC3qgVJTqHT5UDjViu",
  "key33": "3DiYmBxYVsBnuNR64EfjuUqbigHSNpPpgRQWVCrXbHSRPkwBUxb4xwzeDku2VKNRQtYdgk54z2WkcTtHH5mzy7Yv",
  "key34": "4WppkPVPn9zxWTsomG5kYvJadudvoggnjq8rB3VRvZQwvFQHgBkMtKvoMQ6T9GiYV99CPX9ugFcUiHbQKVi6x5UN",
  "key35": "54HNgHbmmmMWGMA2W2mUTTyM1o8K6a4RgFnNJHq7Kcg6QLEXbr3oAZ1bmWnoH9cEJ6kNbDkBUc4jie1Qk4SNbYDm",
  "key36": "VMhvNZgoCqvsCAt2SMjfiXzR39ZoFvjq9bTwZxpqctqRpCxAFzgFktKa8H467utyJLSadLDiswR7Dgv1yubYe7T",
  "key37": "4u9mouzrZxbWBxCJRDgPzdxbwWhC711SQyzvrVvXZKqFZ8mZiqYpXSZt78FmT3CATEdqGdU3DBn2vUGeUYyYBaob",
  "key38": "4Y6MsTsxBgFxESwEcKgPBmrNzRdY58B9VTGMxDKV22z2dpJdWG1H9mYs9uV4bJQYbdaoYvUNBAPeJJugSpPv62dN",
  "key39": "sX94S6DShWLF6ADsmS7jVGAaxfmxXYrboAjEAT9WhgKHZ7vvVHfU5NU3MfsUw2GFvd6o95PTJooX1cVsoHDGMAX",
  "key40": "3BuGEgtDveDU1hy7WN92dFkeDuQ1KUdrfT7hPx5zwLPJXSsgq4pBLfzighNaznh2VrEPnTCCLA2vr8qR8AqPa2tv",
  "key41": "2FeZ6foyGzpp4eL5jc2LasQKbPJvWP1NTQhH8WjuYDxsTXsAxQxUiYfo8xTzwVv92mpmnDsXtpyixDgnHb2m7nWU"
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
