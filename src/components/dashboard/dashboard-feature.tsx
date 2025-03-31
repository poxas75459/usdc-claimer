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
    "3uFuRpcT5TGibrRrq3fq2E6z5CEEHsaMzwbQjBuyUnu8Ziu3Bp3Zf9ucZAxTioss3X4YUyZt2wtTNtJfHi2ha6QE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uxpL4PVwtzmAumUy8ByFMqpHsczXw159i4e4bjRJLbSgEGAbCa5mK1uXrFDbYnCqrEoyNuiqQ47z5mUZEx85ecJ",
  "key1": "4R2x2ghty7HGjugh7pPCZDUj4waaH9d5RuTDkEJNc23gknZAeGZTDSNuUjb9nGTkVE8pjdjaD4GqHfzQv8EY45We",
  "key2": "5gVBDhT1EDqn7hQPthp9W6kC5AuwZxWoa6mfZnqWZwizAXKnrM4sMSchu2n95Y2qRqX4sBg3bdJT4h1pYEsBbtUU",
  "key3": "uAVjnX3orGXMVuGyZuiUVuNwdbE6eek7diRYr3TyMHJWHCyKbtRvQ3xGHP38V5JrzmHoXgP1JsoH7f1DFMXgVjC",
  "key4": "2rZxMDQcAo6m2hYY5YtWKGvx83Wrg3awqzcmQLoCw3BvDctMGavZoeAcGvQSKoguB43zuChtQwxpeMZAuuK6J82Z",
  "key5": "3GvTGb3SDohuB8ra5wQNCnX4QCdxzcJ5BZixdhwcaNgv3HxgBYAx4AGfqUUKL92gSvsUxWdQ17KULoAX1XgJwcjm",
  "key6": "9iJ5yjGyicx8AsmJhVjiQhjeZxZYXoUVzif87Hwv7YsX1arPhmZckWLraCK1shon6q58z7JAuEeWiD5DnSs9QUG",
  "key7": "4No7RRtgcAhrkerqaaUP2N2jsr11gSBPkCZ2Zpooj6bsR4pHj1MAEjhnynyDuQ6oTUPxZ8yrH5RciMuzh72VhtAH",
  "key8": "kBBJYCVrCDwUjPLUr6ktebPoXComkkeqjKCFrTod3SxZjiTX9KEwwUADyLnW3fL9kW7j4Qtx8EbkMACcmi5iAnL",
  "key9": "4YrRntMpofiJt6JosqGWyakL9GoZM5c5HN7irEWzoUhaBEZzFhDUEGPYqfo8B9n2ZhrCvbbNJ3anVsPaJnxf6GzR",
  "key10": "2qCLoL2wHT9B2vmnXt12eBPiQ6wvHGj1QDAegBJYEgZEufhXoSQaAvTcdRVYXHE6RDcbGUyEUa9q37Lx9uErvYps",
  "key11": "63zyrzjCTNvnZsC2goYShcBfDsZR6AmLpcBDBxepyxU4VkDqZi7XWcAFA89B6wXq3SHDwfCmLVCjdBKfh4sc39ye",
  "key12": "wtkVrdwEJMdxhUWjwcchTFU9gQvEDuTENJWM7zNVPxrHWi8Nf8qeX5ZnuczJtDr4FANKkoJbzQdmFApZsCorreG",
  "key13": "4psygtq5LB8wvNJJ64sjezpy7uKEZasfYHp29jsqWsFcUP3aJokA5EN82bamcRaomFwY2s5LhZMf4EXd74w5ovRi",
  "key14": "P97QGatq15zjDojoZxUqcHab1tQ9Ag1yEsdrmVNWHnVUwMnuC1v9vMUWByFaM5kHWM8Z7Jwi8254yAdE5mWgtpL",
  "key15": "3vWynieTZAiwz8SJHY7FAEbA1HtJYHG1F7aydUwMQY6gJBfrMUrXq1moSXAQCW8Ugy7e7qmsc6MHUaWXz7VCDC9H",
  "key16": "2n1tYogSPfRmztdnUsKbMCv2TKokEMUMoetNEjqAJSDyyFpqVjz2aSqhn8Awv8YrQLheJHMeFwzkKUgRyB2fg4m8",
  "key17": "2tFLVYGdB7K3N8WC39K2hGdKQRN25aZw4721Q8x1ZEBw7j3VaWf6TrCHiXbXkWpuaDet1MpisEdMnUkhPTq4hgUv",
  "key18": "6ZutFjdnABZPGuk2mqT6gc9wg4ygwSvRUDNL6GUuJMoVkfP5uuM1fmTjjjgwJueWhXgFESthRU9whtzbFsKpED1",
  "key19": "2uXqN9TwHrqXvf439saPnVnzZoyp245MBrDSxfo4Jv5undkz83KyfgG1RF93fXuRqooxTFPSW3B2HjqMtDQdn9UZ",
  "key20": "2jSaK3BtTrsjmej9jeLfwG37CnKpBxfLFnSKRRqTur9KP4BWXpCWM3EX14QQtD2iGvDpAkphhk5UT1P3eA9oBsUR",
  "key21": "tePFvGZofVH1oK66SQyRNHJ6AGpEoEVRbxhjNfFuMpquVaoanwgpHvioXvzquwXybkFqdNYU1BqwvytbP2R3u2y",
  "key22": "5JUNrg85ymtbJYWnGLCB6e6MNfgDBYrcvo8F5kXzyicLC3KoPQxJ4iiMNN7HmzFUYtZfd6d93dmgeLtjE2vZpop8",
  "key23": "24gom82fExLK7qVhjmUyNabFYKk7to5vtMxBXNW7Np8kJiVN3hBa4PyecxXAVbkdLaCPsLXP6g6wDkZ5pukL2S88",
  "key24": "3gjUGQwUpk32VS4GCF4MH6M81bZRXbMyAX8VGHXu6PNQswwVWa43GPEWXi2MNxocGmdT89Euej9UxARTAhEeKkXJ",
  "key25": "3VRvoZdYswZKq82gLtucgQXJBE3e9YB6bhHAWYQrTWaeb2BxuWTxmmoUosKHqjgTwW97bB2StPn1TpzE46AfsXfk",
  "key26": "53ixhPVmj1YSXZLoHCNmZxuyHNAyWo9vVVkuZcBnUMCeP7AxTR5V3AVYToEoviKstc9BLHouGSVF9MXd5WGsdYAP",
  "key27": "5vtb9mNL2M8FQU8PgNkLnuMkxZpwm87vYRxhnkGUE1DWRNzbJ1ZkKaoe4syTRV67LmXoPqmbhZk8mmoFZcFctsK",
  "key28": "2irwnZYcFJGKHkeK2P8mHhSjkGXEj2cwVbDtHbCx8GoF59GxgeMyFC3xdpmaLinec1zTrbaB2D8MkccAWRP9sd8c",
  "key29": "2DsaGT6jknXfW3qrVw3aoqw7myVGy7T4Xnc7FvUHNnVLtBLsjB1bdvi44DvMEysZ7RCWYG9uT1zy7sWBXrH4uyYJ",
  "key30": "5SuuDBToRybtUWniHt4c8XdKxaJRamYsThSvtBTciJb2pAEUyKnLdSacpdrqt283cYEm3oq29LC7xMvFRH8xJUXG",
  "key31": "2gj82AFtXNkyrs4up2tKZ7xCUDqXqHpZ4XiCkW2aYfewtjGQHLFSs2h9hNafYtrgJFVc2cCgT5ts8Hca4L5MKe8m",
  "key32": "J8xSPnHjkoqW5Bb1K7ZA2y3FgsJxyTicUf5haobTMm3pFAfcFYbxXtsx1KGVQ7mouXfgyLXdefxQTzWspntSdWT",
  "key33": "4zzy6araJVJwYww6VhGby3vRea52FoQDbLW1ad81WEoZYdvNCKMb4K9Vy8rMg5JdJ8KdSHSGgmMWboPH7mHmyzpj",
  "key34": "5oRPoGt9ASPYQEE7c8LCW3obELjVEwVvXUY5arGDQKdqM9Q61FPN4Wpc8ciWDUh7eBVJcsqh73Xtuu7w8cyKqW8Z",
  "key35": "62KULtqxhiDeHtPJNd29qyFxpkNiToQJjw2u5Ncf7opEWVs3AsFkvo8LL5Z1mdVxRreFxq67YpdXZUvr9JJAeJDj",
  "key36": "5N9AFzpm32xzubh8X48Z6Ymps4HMRdaqnE4VcS21kbBtTcWcncUHFtvrkc4V8114AF1jXHD7iKvoihDToAbGTMsN",
  "key37": "25sRS5QXjxeLGR2Ewj14DcFY6SiVxy5ccQJpTWnSZFkmD3aiDMn7xMW7aa8FiqwarZdjfX1PcS9hey39AGmjs4u7",
  "key38": "dnBCMBrE92rasjom5HX9BoSb8rVBraEKQsDK8gre43HfJGW84soYP8AXE2ZsxsybFUPtbyVz9sLcd5kunRgs9FB",
  "key39": "5gG7Q1vKKuqwm2X4k1ZiqVLLWRb95N45eQ77doK1DLZg7SSQtUmweE3kzjSAR82MSQD6cwmsTGPUY17CMnpUa5a9",
  "key40": "4Ps9TxhwG4CaZAT7WhdpZ4EWyFS24arboo9BMH1r3ReffgJ7Qif5ZvgLBfxJCMMPBMoDNEasf4LKtWZRbE87fCoE",
  "key41": "4xN9YZKo9dec8FJYZjHLNQcJKaHTWg6hPqavoi16Pbc2MConpZ5XDHdV1CoPVgPmGNt3CtC5DTRqtW783QNe2vC"
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
