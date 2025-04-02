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
    "4bEYKxqPZqDdwyeK1kVk1pN6K6bPzqV6NKcnxzgja2zvJwQFfoby8aDaag23GF3WfKeE32qjsga9DHMEdbL2DFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ec5HjdC2hfGk6Lz6u4k6vy36vF2DnqVMvx5tcf8khXFH4zoQQVJp6PhqtfZuVcDqZSjF84xPA5Cg2NZvS3CrLcs",
  "key1": "CJAyijDMd1KrKYXj3LW8DMaU8McF8oXHLLsfKRsnujicp9vHf8PsJz4k7dKxJte4sGns3boZ39b51uoXeY4rGWp",
  "key2": "CrL74HRHs2ePEhWhirnvCf66G2Yhpz4CdNU6nWdg2SJz9u6wzMuZxqF4yf4nXHJ1yizoywXiDk6rxD2U3Usnt7M",
  "key3": "2THCodcWnxmwwwtqCPUduh3K2PZ8wVMrmUPuCZH486HKgfacGka7PsTDw7mW6svVC2dJ9WwQbKLyJLo8LvqER5nw",
  "key4": "3vuRYk7iuSiGmThiuqwhTQgR7Ly6NamfnZBzJhhzGtTALHp5fFaw1XiPESb5irHz2grago8LY5zGAr24cmJWpyYi",
  "key5": "5NHpVvfg7n9QUHX6FV2B2MAKbRi1qBByQ2dFY4HWWWCfZuNuCEdmV9awUnmrt73WDHdcTsuNhaEVzsCbNb4taMFs",
  "key6": "5WHfgSQZXNTBcxADFMYtvvHe1ooQq4RQ8kxWNDJ4YwgEommDmLcBykw84JFMyypGrmZkVRqUSqdem8RUVKGD3ed6",
  "key7": "3HjNgcPKwUi2wLuwL2bn8yYrhz9yJ8X7ngins3DTAiciF4Vs14HSirMheY4E9U6X67rSXMR5TuPJVTxrmKf8gyJ5",
  "key8": "3JiXhEtza8h756nVyrLhBbpceG8wS2YJjfps2tdXvmNdZ7o5A9BJMWTt82gt1nfPn6an8LPGmps5Rz6Y7fFjb1z8",
  "key9": "5ogWaC2zu8BJ9DoCk9ENtdtUWCVgkieVD5qCp7qjro47YuuXnq7hm8cL4SrWKsP6hCadkeN6t42jwwvWj8PbJYgu",
  "key10": "3USuJhNuJj6bRciXH3WHWVU48RNTdZuJdqdR2xp1VM24DbvkbqTWaiQJ58qV6e58g6qfJxPeib4JbtVGxzzsLkS8",
  "key11": "4LaytLcsUQP81gAsutC5jbKiR4kJSf2HpHev4g89TVZem5W6BgGUr7ryAASaouMspPQM2Moj7DN5x4uFgcDiWjQx",
  "key12": "5pB1D2t1ZSNAF1gLf9SUrt2JSV6D96FaU4WXroZPGwgPRr8pfMe5StWYPXGBNfWre4wbLeRX9TEm3juyQRcWkbDa",
  "key13": "3arMBzXpgw1EVYy1Mqa43iQW36whqQZoi134jsuLR1yjop4W438Ag9dkcHx1XMmFjophqCFGrpasKs9H9kwmSXnJ",
  "key14": "4y7Amqc2wmpkkipE1CT6oSpsQKTCdgLp8o7TJ49JcjG77EdVTUyrTVGcCMNNKayvi4wQX2nYDxFMhuWDBUJAzPVn",
  "key15": "5ZbNx3x3VmcGjnT3oXRsiJFqiUD2t4oFHpUKfBfWbXuwF1SV1pTg3bZPQRk6LwA91nKfsTXc11GUJ1d92pSBTrpm",
  "key16": "2gMnuPFhWnMZ88xmVX9iWdf8WxTHfXHkUmSU5yq2ZQq31gP35zRH47MzgPxpoCKBNZqTtWHH7UA99tGMZ7HFH4mW",
  "key17": "47Rq3RBjGBm9xGtT9VXhXNy1dFJqpneqBooQnrx2UnLfomDghhUtNKGtMKDiCD3yumihd8VQEeM6DD1oSmFSv6RB",
  "key18": "3M1WJjmPEMSpB2ytjqUasQebFooEEHeLbnbwz2q7QiKKoKWh4P6kKLanKcC5bPTZ152N58HveKz8VCvCcMQnzdVK",
  "key19": "vPJnT2k5rggL4WZ2TrTihDNxunsBFBeFyL8pJqJ6CYccXGjGahJD78CQpTMsFZdMHmAkppRDmRBiRn1oKvuG2U7",
  "key20": "5HesnJcuGWVjpCzf8EerADoVE9RfamR1fUSDvxwjucapoGW2ioqEnPNH4HbCMhxopjqgUGnpy5P1gLdSXtn6W9JM",
  "key21": "2Cn61edrn6WguZ89Q2dDo7sMZtxp63wa9Bon7yBZa13xVfjAVieJJ2KxsyNJsvwTJbpvhzSTkgGTStTUa3DubCfL",
  "key22": "355cYcLcV8sugTjJMQYxBUe4oaE9zrFz7SnWXB8nPo9J5XyU9UpZtJ7rueminCcbQiadTVWUfiW7kCLK4sVFftKr",
  "key23": "4McXRdh5LxrrDUUkqp2yEuswGqMhWdzXDK8C9vzw8kDDBGZuz1yhaGg4Xy29akxi3LbSwgy6z3XtoVZR9HBtDpTT",
  "key24": "DoCkr6xyxKVMD6y9TUWD7SfZ6LF4oYXCdurj5jsCYs5UrNfZdwDjy45EQiG69pDAdi7zQYGQZhmLkxLyrXEyPpm",
  "key25": "3KDJhE2KDrxT75DmqNGaALvHLG2jJRkfzx1kb4NcUtsZwiVhhbGPuX9Li1M4NijXMPnmjLmhJmWvb7aBCguN5cDV",
  "key26": "3dMy6kToodQ2nkJepe1gqXM5W9y23VpACb971q5d8d5RXdeRqvEK12UHhWQPphxc19hUUei5qQBxnUbVYLLqqzUw",
  "key27": "vmJaa5p2X3ES47cn5j4utyGc9vBoUT7YV9J7utHjR412KbpLTdDDw18uz1dX79eQwXzcCCb42arPSnHJkGhFQtm",
  "key28": "3WbHUAHmM6MxeQSWfk1dp23FoaLaZ6gNWGpxADy82pRgkLii7WVUbUMi634XkRipVPo1UCodNg7eP1tSNXGURFxe",
  "key29": "RDJtnZGvGBsve792HMCrBA8QVv9EZY8qWzo9xH74bMamvCmhs8HuL2ST7cLNQYCokP7dVFEfqNUK7DBEffPkFGf",
  "key30": "E9D5h6K29cZMiZoQb2yf2J8tsbSbAAAfAkPaJpqe5ezt7XSHZuR9JVsA5wZjNtnVrsHoxrNipno8MEzWEUE3gmt",
  "key31": "2LzjkboZsMyZkEKuiM2WjnfvJQdFCuwRhcUDKsbr4ac4JEPL9Ns69PAGMntnAYJiotqz2P8qh85MBnvqQtfT2bpX",
  "key32": "3b2ZMBNwFCqnQsNmWYMUC1qw6zkg3MxvfZx3m1vw4ZuMm8ZGS2RJWn9e7SWSS1EQXd2DHmxmiGgeH28uGL7dU1R3",
  "key33": "x8seaUpuE1NEqh7VRkJXdEM5XccieyNAqrjqGnDQDJnjqU9vNTzF5PekM6SKQfsJYpE5kze18GSk1oiSGDJyc4Z",
  "key34": "56XduYtE2StRtUZXJvw4U1oqcgQMaZwbsxYvpq7JyJUimTb38LEoLqdpqSMUDMn5inHBWe5FGxJ8zpwAULUp5wGW",
  "key35": "4EqrxymQJV2ehZukMCZNwEK4rtCN9iqtqwCgSmYp9U9oJw6GDhBZ4jNMRwrYeDjXkAc6WsFVUMUrX7wAkCqCPpKg",
  "key36": "2X3GyK5BTgrTDsSRS2jrBZu6aWFbKHSeERrQw769wNy3VZ1pPvRNZDpG2UsVTPLf3GJq1NGbDztiD8EGg1zHgAMk"
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
