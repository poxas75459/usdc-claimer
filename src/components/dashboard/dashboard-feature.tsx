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
    "5YMhXMP4DE2i6TGRKoNNk6SrbBbWcgZCKZKBkkfn1WdWhajDejGeV5VgZQFpHLpUe1rUdZZdSifJixaJhBrKCXMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZjuR9qiMsey7c5cV7Fn1zuunjMnExiBgpwVQkFH2ZK91NwCwXfeFVZrpDLKwKn8rpiMSQAwuvarVhe2yNwvT3Vv",
  "key1": "57Sqzb833JdWisegcbzA7shDtUNdsH84gFb1W29pANbFGDDuYAYdbu7XcVJWjS4TpcLPRR4bWq1QxHc6aenRh3ph",
  "key2": "3rinaGoZQirHmNhQippzqq9MUTi2Bzj3Q3vAqyq6UVVR3TqBRjjsV7Jg75ZxQHYyABi85yjrKrBYei2BgAVK44yd",
  "key3": "5znLGbiG9KYpN9ZTxki4Rap1www5ArLWE3roe4hP1BA9yJXGXDQ3VbhFZ2bQ3mvsLzUbnTtgTYZR5v4knU8C9x2v",
  "key4": "66vhZZjoSSV1NeDSAM8odwaeVjbgDHT5ZHvCX4hmXcpCfpFqCMFsLwrwmghDreZRdsYdsF4LSV3PWSSZd3VCnn8r",
  "key5": "3thNyZH5jsvQeTBVZmHvNEi3K8sBgdUsDXzit6HAGV9tKnYTVpfHhW4Mbzpc9sB3Vj9ivaVhR9nhgSaWZ8npS6ya",
  "key6": "2iRUJM6cXVZdczBuTLXnPWGwhGme1UiWwe3TQ5jKa9CrcMAnacw5SCHAwc7xdTHSUTAzFLkRNh9CQqkHv1CPsPpi",
  "key7": "2i2B5N6VqfeJKRMmGEnNjo2ibJuZh5fzNfbukXDZQNnpw4zHAPDMCXmMeacM3FgttGYaD42vj9162MsWyWGukWn5",
  "key8": "2Ht15RQ9k8t82nscqCBmhtTsHyGqHcBgkpAbUpJ1SXiqj8vSszBi7caBamiQ6pvtbZVT7NvtS1MAPaFCHnDTDXo8",
  "key9": "2iUDzgAYEveu3k5pV3Umpyucv9gh7T7fDgC3g1PobwLwuFNNTPYtpZPDA2yKhtF7SV2KRPA3EDvk8NE5D31dGoUr",
  "key10": "5bKXKi9UWRF6851eGvQDCpde6U8Lb18Nxjw4BzgiK1iU6ym6tE3JPUas5YtRpW3FL2gq6jCJCyf7xR3wfrmMKLpU",
  "key11": "4MoBnpLoMvAsZvLWMT5agcDtYQGSTJvFWgoPgjLH5wTv9dne8jugs6uJfG7EN7UiDFBHZxeGTh3mP9Wik4G3fCGy",
  "key12": "tKQMUCghVANoAGs4XXAFDYhukiztM99jxcqhDjUfoJ2h55KHJPMvxjPYUEMxJcKJ7o9gH4Ecd4FcMV442tv4ryj",
  "key13": "5SYzpJkQdPoPUdqMLUrwGQg1kp6uAPADR6yG9kQe9cfzDbsSP7oFioFp4pc2qHkvTeSJcwDyuLyyuK4sLThmcCnR",
  "key14": "5rdWKwvwte97D6PF3YnYaLCyiTdyi6jeHXW5mRnpbzY2tTovznoDbCY9vM8mSYHLk3yrhk8kCKknqBTiz4R3huVG",
  "key15": "3TVLAHjzcgrzZq4h81w1QhVGQvdp8JHiSpZFkD94fcSupQk7bAKKN62KommXer4qjByjj1i6jv6KntDuRk1V9oqm",
  "key16": "4Nt6rupNgK5eTMLT4QjicyK4MeYed8Upufq9z4kn35edR1CJVoprLgit97o1UCh6CqUBNAPbuwcagi1Jm15XzCMH",
  "key17": "5yYRew73TnsPrAgMcUv4avkWfLWTKRimtuCrXz9968yXByKgmdYsESTHX2rUiQpJxJ9T7Xj7tQYeoDG2bcxxBvnk",
  "key18": "583F2meUWESRAMuZL7EoPxs71xiiR9SwSA4BHfDq93uKtHmwJmQRtE2UrhtP2k7D2QxXzVwaJdik7fmW4t8XNgsh",
  "key19": "3CSQjmJa6k4ENPw3h5TXMTqXbd4ciBLkzHC1iuxoRspGVkTbQ1qMe4NPUtoVHA8XpBGSVbBtgdbyTEmfcUkcTFLZ",
  "key20": "9QLKrEh7inX4WocNym9WD4YXhTbF31S4AnGXj8JeMgfhm6R4CrSzqajpzim5tAUptmrh5wTTaoy6uazUCrinQqd",
  "key21": "2bNRrQGBsR8i7b7Zay9gbg2e5Mkt8yCayTHPVfumcHn4iwkwFQZf5T7NKr8dd72q6thqvbfNh34KnvXjWwnJ3Sc1",
  "key22": "q7KcRcv1ExKVZiSFvKKsVyChF2AT6QDSXyUVGsq7EfZJdhzV5TvbRcM1TQRZgkzES4cuXKNv5piMd5ts932uVyq",
  "key23": "5XazAvvTYrKqUseaC7HrXqfqypZvBhydPh71A2FrDjiiKmwsbLBNXws2Ec1EjzpQwzeXcKZPLZGoZAJTa3AxM6Qr",
  "key24": "9goCPucWKrsXuASCwAMPCLsXaAXho8jb1bgqg71XuhPrx9WnXNAxmtzRHjKhbWmZmDfBpPbuhL7ue5Gx1VDMEMq",
  "key25": "3B42GNZAgTwnG6kgAV2dtzCVG6yjTRViP9SUqP6b52fbBxWJfxWHbfu8fQHVX7rL4XwCC78Uc1BF1rtjoDpfsiUJ",
  "key26": "4KAsAtRYtWJwjK9pK6KRCf9ArXQPeKv6oMC2ypebZYR1g7dAT5gPttrrfUxBgPQhnx6xZWFqxnoBYJc9huQaM5GA",
  "key27": "3iVfLA9moAtrxEkcEnK5vzqjU63TXZHJDtRLmcqhErxX1XnWYu95w3YM28CKPC3YDAYhUjHA6qt7cbCvBwhEt2GJ",
  "key28": "5t37JpPU9d9j2uBovjnEGcn7RLyNYHVuf5yyYeYiKGVe5WitTjHLsiAWqJKuKiwX7Y3tTtY1SWgkUeN6oEmu5CBd",
  "key29": "3pyU8fJ7DPh5LokoomYEMc55maTUHFBA6tmSVrJwDGpb91ooBeVE9eArCUSGE1rk3SqXcFWRwH2c3z9y3HVaFjEZ",
  "key30": "5ZRb7F626Kv7grN9HRr4BARyFSN9qmkgrH7kmrNj2sNhofbPKhc5uF2wnQGHYrbSDtmyUGkN2fLWYybUADEo2FHM",
  "key31": "4Jt7qYgGKkDUEaRwbTBQUjyKAbfkPLJFr74q8HD8oD2GB3totV6DqmVxafAXvNHtEmZiVjioqmAaFDfB8abpkpm3",
  "key32": "5333q95eQ5otXfFViBsSEhQC9Dk8q2nsgAvfJV3RZvL51oPU6UByroQcJgxctrmJsGM6VeV38iBwFTpR2LQmRqGJ",
  "key33": "3sZjJvBH7HMxBFQQxE6JmqanEmT4PDDaenqGuhBRKofvYqPspACwq1hKm8hHFKfUW2jGtZZyxBuSv77X4Jb84hp6",
  "key34": "2GztwmDQgWYzjSkENVJoCPCWY4iQTiCA84kGnHHHyAYvLFVA4ipWp1jzyJRzUZYWECRFeyZCKnMJcp4qqVWyHtQ6",
  "key35": "4BkhBEWmrjWWccoocggddEJxvYKJswxaNPMcGTtkDYJytuyfH4iJUozughtALPqAKBabpKc8oEjZZZx5AuYPTkyy",
  "key36": "2Bxm7SXuD4piewSGNpzXdTM3ThNorS83B9csqEuP3QB5y43fZfFcckkwtUwwwgrdksqkZwjFiaNLYC4Fgyg6GhF8",
  "key37": "5phzWfPWSZi93qT9sfqAwcYBPvqEsXqTpLXRLa6R9y4Duoj2RNspjrw3EsmuJkG7dFL7mRWxXVXgW1FQWeL9Cec7",
  "key38": "4wTLEE5Vtx1mrmhQqfUscqHmDuAz5beY7tAqudhKHkdQxpgiWstoMGQRYGkeaohxC1baxjwP9JGxgboEpCKtgagD",
  "key39": "nt4Ay9z3JhwntrYimPNbbWoTYGUfzzLEYJ3eJiYNkLy8QBD1kFda2susVZFvkeqTXJppkpT27jtEwRU8G85162B",
  "key40": "pMy7XUfpp3FkHXCV2zZAxTouRD2V7BuD5jpZF1adQXHL17oCbY2Wb9YE9V8yuqKPwDit8CfunLoa5TiK5WdRaLr",
  "key41": "3cmKCXUjzVw2teAccrgooBjP1kNzzy6Q2i2ZRjo2BCZGdAjanVYuJ9wrerVCcnVbmEYhTXbCFR54YmPzCkWMhyF3"
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
