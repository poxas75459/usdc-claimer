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
    "5ck2pPdXupXFBjvAAq1PWNwcZYuLYRzC33iEAdxccHvrT8aDbhaNUCh6SwUhHVSuVnwRHwiFpboGnzF1nuq2bhn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H81ZwuQEACo8kmuCv3j8MGUqnhASPkoGYqLrJS36NuADUjHt3TY8zp5UvFDZPjzZdEqGMpLVK5JxjHbQFLa9LiD",
  "key1": "3P27NcxR1JcRToxRb1aLc8SsfTpZRybCNTQXLwkLwr2DzQoKKGhEnfHcKv7EUvoE7DinPKh1QgRgFUSD6QHPrhSH",
  "key2": "45tHyZPszrsYNnt3qAREwc9NfHnfBYj51LcGipYrToQj9D1MGTgKX8NbGfxKuFZkEjTFpPKKUc5uhf8YF8ttgWGF",
  "key3": "3PXovL29csenSxKa3MQwRyHqgGjNitSoqcckfrZuALqbDez7iwB1dDYn72p1V1oX7qehx1y3yFixMSooVVkRc7FT",
  "key4": "2f51F1EREUbsdcds7Ld441Zgbp828AcRxUQRRGmxWpEAS2otvhkcNuh1aJwoMjDp76p3Nb6x693Av1ThCLNbzwtW",
  "key5": "415AJZnrFYEJXyZQsDcusd2L5aYwRY1jkhjND1ihNe7eACGnqKV1aq7ZX6gdfE65zktYcyPDFfv5tKkSo8H6rTHB",
  "key6": "2LSe5rzCAwVB91JppeAc2JExksiNxxm5siv2ni9bjcM1H5vHrj3nZJpSsyjLsGRPKDhA99ihutxQjw1eDg92tbXS",
  "key7": "4R4BVmj6GhGwzmfXMJRRYHAN9q6vbJDh4oD5CZhXTDwuahodhfHT6gayg9zfCx4UQNwWyHVLFYNJSviHve87Dvzd",
  "key8": "5Vs4TxvJi1F1VXRurtjBiUfjUDsXwJH4P8NFiQENzpB7PotzyfcGPTHTJ9Ezemw1A79ZXy7xCZssYhytzkwCPQSv",
  "key9": "2GhJm3RbGtPjRk39LPHGU1ZwUD7bysTXfBGA9b2n6mwGe3b3Ws37jjr8Pk4CJ8ptTqgAZeZ86DdWWbo6cgaGhsmS",
  "key10": "4nKgByqCygtrSeoSZoP56Ym86HoPbKrhDeYJipMaDbwk3srT5bJ9nzPqP2CkDxa5CKNkHFjtHuzkHiWD9FLrqwo6",
  "key11": "4mrc8bSjY7TNxqeifmHutebpxvgFRyVyQ1m8ohyB3zEtpYwWtNP7Fsj5n3WpAG1ioNZYb8iApVNuCzxmAxVkwPm3",
  "key12": "5DPLfXhLCf4cZ8Vgbv6yPtZA6udbH71xCD4VxZtS7X2zr96TPg5nHHnbaxini5QQ3eXWgyr1nXCMHgdyCjNoJtSn",
  "key13": "5kpLkcL1DTC6JGycLgsT4NirYC6P11WzbV7ifKrD2WV58w3WbaePC51gtqsLHvRRewk77t8Hzr1Jrs57DjwCrko7",
  "key14": "56Pv1MYjZEmtmTFHrt7WZKriy8WZgCpPcorCfji54DFAA1WS3Hsan7xL7NnkiJw11AncsVEGmwQxVJYbX1UzTB9J",
  "key15": "42HYrTcQsA2pes8r8RxZfaeobbmFTrxe8yFsacsftKP44tPFAqgJf7mEc8bWbrUJZ44rEQZmp4HLtZaU1PJG4j3k",
  "key16": "4nTcLGC9Wu6RBcVzbh3auj4fokU7sE1CirMpcqwax8DW8y62QcGtZjrMKwfdroAoBB2QqHGY73qWuoHrqgcjaEC4",
  "key17": "45J5SkghsvVC8vi6N54XmVJ6U3oLWvbQ9dSQQB7TCpxkgyBBuUWyjByTsRFKr3UBm6nmuFWjM51RS8Nv3CvTkxse",
  "key18": "2NgWrhhdYPzYBmHoBm1KqEytPHrwYYLQpeeKVzDuSUTBE2CHcJ568TsCTqtNnYy34ivC6f5i7rmHKq7ursh8FM4v",
  "key19": "L8Jhoa3HruZpc23g45hVmppt4XvdyB1n36ogKuDUGirmi3ZtxGuaZ7aTKZgtFzrTSUbxifCVwxKBn19StkVdpaA",
  "key20": "2AikxXf3zka4MWyBwL3qcF8Gzw4LN2EAMSyVkGGmzDkyVQaAjJYKGLZd3VbYr3Y18XvqinMp5cjCHmKT4Vp73Smm",
  "key21": "5Dn3L4XT9qF5UMRdnGRPEY3c7UeYjk92XaQ9VRJpE8M8mV286uP9SApYp3JrYh2ymWBDa5k379SHoKA4ASDXNa3E",
  "key22": "4nK6gs7VQ7JMHzd9g1ejQdsdzE1WaP8jaQeXWWFUBS3naU1gg9z2nHjgnZGwfdEFzioexpbR1kUc6Mtb45VgH48z",
  "key23": "4AtkfGFApkcSNZ1KdUxSPPQn3va58xK6MzJFD326koj5S6JDJYaTxQ5e3EzaECszE1ePX15hBNJhLvDumi8FUm8n",
  "key24": "4GxHkUWG5SiiHASzYV3jDVkcFKmdLUisEKtyeV5MiYz6XnZNyubd8BZTAPoDz7UPJcDGz8n2QFQbWd5ooh1TMQW2",
  "key25": "V3Qp22S4FfYV2GYtbLWbj1yMW6YvBnWfcugrunEfA3rewD7ntpzzD5DJ2sRL99yG58LaKrNCq17kFr4NCsHAwxn",
  "key26": "2SsW2aqxt5F64mk5NCpGhJVBcHxXVdqM5n6RgAzRs6ckLFNXKki4zh5SqhtGhruDUofDS25TBchtCS6qX3wZbz43",
  "key27": "SNBMbJ2FyyhcPwTP9rvJ7K8gZejySz6MysTo2DvrcMrKx8Bnmjfy3CJYzQVX2LaUYujxWSqq5WWPbCWtNdtnK19",
  "key28": "331Fma9W359Fs5TnqvjU2RbprLf6DQyUzzXZw35bbo3NWwSHqjQUg9WdUgqPysrW5xo1SamAVfHNLcAuZunajp7r",
  "key29": "3DTEDsioxVqRL15zPeQnWcgmqsgLnZi4tWtodQS7ak6tuZNVh1L6fDTGSsS88grVTmoQEaWTwms5W37KkMEC4zBg",
  "key30": "3JvjZZ5XgKDkB8yVeZ51yNAAtxDmhkfvbE4vp3JVGbgivLsKdwKtfuV9hswQDobiY6DNv2PhBwMFRhNUGx8yxqJ5",
  "key31": "4gMfYuW6SeaUMmzFzdaxqTQ5C7arrfKFZNBhGcDhVsTn7p3pkrEwN2gXWCWnR44S24JQ4nAZX3EHBG7KKhWyjw7C",
  "key32": "2FhLaqku5cLBT5QroNmLNn2UA3c7hsaQuoNB9bQCkNXVRM74kpZN6V4wekmUNmiUHSUKbLqsNNY9Nb1Hxtntmyqn",
  "key33": "LbcDc3CS1CrYUGwr5qnSQiyr6Sd1R99CLccHpXq3isiibkY4sur6SCM9woFzqEH2jgys1SSy2n4enEoMt9k4Bxz",
  "key34": "4VRBYbCmB4FEH3N4ChdPG1RWkxNDX95trwkLrzxsbxfWfYV9NN1pJAoUvTHqMwRytg8aartukZQhRjvvjPMBrVbY",
  "key35": "3RoHBnL3MLCFioptEG4Dw8pg3sm8SdjskfToQu9RX2HN9qmBHVVr2oPub1hRARdTbTYDYc97WG3LEizsdru5LynX",
  "key36": "3w5u1EY3MyvNnSE2NeEJJ9iWysPR2zDgoJmatA7VgmEtpM2A5eAYY344x73zxzdu8RfvkRqCydCv7yJmYfDUfEZ2",
  "key37": "4MSasZuDW1BRv2KrB6rNyvr4Mp4uQSJ275AnBuBLuytDtBsWCDE8aYk7bTVp1YcRtqiEnjMZVms4EzxA59PuwBVj",
  "key38": "kB8BCep1oLErVUmJVygYjhL2ZR7P7mXoEAR1spcRx7w9jZxfJYd4dp35AnYyYwFwc3xV4CdHzUUftLGiE9uLqUp",
  "key39": "43kH9U9shjdegmcKmVmf6sui3wuHmRbQbqRwPgDSajXQemsSsLBUaG2t4wEb1kw1V27nUPgWXTzyHTSpCsL5nnVe",
  "key40": "5cG7Ti7yrgY4uWwth6em1b1KmfCVZWQZjGLYPk4CwoZz96ekoz6ZRo3jURBomVdtnoh8UisopKCs8MLircH4WemE",
  "key41": "3EAwE3DmKQjUvM3p8chqypVMyRgXB2gBvwCCdprtZryiBd9wTFycyVT2vHPEyrt8jhQYdqTpsuhVW8i3uF58y79V",
  "key42": "2mXYDp3ALqsn2SamkEtNKcgzibTpnqMT4e1b9ZuXYLNRb2ZLaHZie1WEmvPKxA83aDVCdizKWUU3euc3wtmczXaN",
  "key43": "5wGSpY53tYarCi7xhsePpQBUBXd9DzEFmiq4VMaQYxXWjHgMvSHhMLSyANd38cxg2rLgdEYQts2oBBsbn3PVkfth"
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
