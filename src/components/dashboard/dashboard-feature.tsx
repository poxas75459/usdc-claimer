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
    "2Qy6Li66m394rMAgtnsmkbTX2jHm88YRYimFKreVGhD565c5anGdFhBKxT4FD1CCbtGYTmmxHtJo469t4aZrPwGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YHZQ3zn5dq7rg2MkVZazAxweUMcscBL7SrF5H1F4ep7JVnf5TeggApP8CU4ZsCJeEfDkzCYWkZuRY9oQz8ftvHw",
  "key1": "hNJ5oMVRwFCBo5hBYYofTXTzqeHdm8E2dKtxwz9WcZ7abKkTjsENkrKFDuiN1RRZhkrmfsTHKfRuyyXJ7kZXk1e",
  "key2": "5dqehuRhWpkmKDseoNC5jpmnY2xEKWjQtXbKrW8nWeEfz1u495d5qKS65cxDQju1X5Gbsiazwdkq4dQXmcSf6txc",
  "key3": "634CDG5cWrWDL9i32vXXpSPh3nRtgUTwugvBBugtbiMek8WPwwfd1BKC139Rrwq6vZ1FZNXxg1yGZZXsyLqxHTXy",
  "key4": "3UX7qogumpC66ez8fyS5MZoi2qVggm8Q5qMPPP3nuMKwvUXr4YmmmXC83MMmh2fd16nEGt6yLFiAZzQScpUzqom7",
  "key5": "h6EvrpAUfjsiK3NZaMs4kJ8bNb4985KxsQGAs5mkKYhMoZJW3bcfQHhSvFCJC9bcEzKvR2tbE8w5aHwMaGg7Ufv",
  "key6": "53H8fQnfFxPZL5cosZutptwyyaMV5STpYoV1ZBYJMtNsqDkHPdjHb86vUjmSpKhxMe3eftpTNaVKznfkyLoJLUZ7",
  "key7": "4Ak47YsroVmw7KfvkKggxvKKjSdUmCP8YMC8mYacTxovBXLQ4CNgSnMSsiVwjAQ9sVJJB18ML558uMjCPd1jWh9G",
  "key8": "4Rw1D9AGtWdq7ZgyvJGSYn9kQDSgvizv54HE4wV811hkMaAH996Gu62uDLuUzTaPW5XqxUTArXywHis267GFtPb3",
  "key9": "3aiZ1GzhkXCZj4rNgbYzyBqU6hrnVG4pHwLrnSrZZgEfosoNp7oy6iPjxFcgnD5YgyncHkKzQ8mFZ16SopHv2i5C",
  "key10": "669BFqBKjUd45Tev82sB2BzLSDb6nHrg5cTSCWehwVgppH1JboetfLULAeKVRrysfHfrNCJ2Fyb7fJfon1vJuQTV",
  "key11": "5maAZrhzXH13y9mLWY7L7g1Jmiae9s73reyMxiLspKknQ1zbGK29sbeSbeEGPPjuc6GWx1vboetyF4YomYBQbN66",
  "key12": "4tc86xfh1V7nW5UM9dcAGwJejtDewkF3Zm6CAKv1iY2eJv6T9rVdT8rFyAuEsM4nNNPS1fjBCn176aypjecPyp37",
  "key13": "dvHyq1KZj7HArwYXQKGRsVmmMy3seKCK7LFcY5srtKhjp4FDnKUXtg1NxkcC17tdS7223BnTTY6Cc6dULbi8bHu",
  "key14": "5Rk2QrsnZ1486RkWdGzDpc39FCybPhWA5w7c1bJGtjCJPWb8fLeVyQcpbzJutd6XBnnVjmbSjjnc7HgLVtUqedgG",
  "key15": "3QMaN2CxzuLP8WrNCu8wnLBpH68DyKt8FnXbSjF5DsYoK4E6ikcLfaff8gRQPYwv49QegNMSwTx3sneRs9gDhs8t",
  "key16": "5NZ7EqfUWyqZ5eg52ocbGyYHBSJ5SJSrBvDUJXhHEFWkbowfk3i1CCaemYgj4aQbnuYuhjkRvPEJnCU3jYng5H7a",
  "key17": "2LGtFtmvHSu3diiQ2JxzkccXoKnzTE38iXZXr69KGpoMk2s5W9et4uiLEnuYfVpv6sPMWWWABn2ypm5KTdQxbYgv",
  "key18": "5cjGphJyq8B5pbTBmpVPQQYZoz2xcVMsoSooGXrCYEy1sorDcqDkPTQbmv6wGcD2nW4VGuMMmdbvoj8xxmcwsi5m",
  "key19": "An7Fgmx3PJky9fFr2mb5ZSVT8sBKzfa35Hh2VLkAxH4QP83vnNK4RFWbypxBzc4kQBYSbTsw5ieRV2hM61Ytmnf",
  "key20": "4DdDFRnLcwvejq6GCrNSsiJjEZUaQfd3G8e7jhzZqyUnVJDy2opDhRNGzJh7N7jmfU2M52PqSsyD3Pmm9rLT752M",
  "key21": "oiugPcftH3bvWv4xDu2knyKVrPj3BRsgHiCbL9RmhFMJ2wWYQSEe9gdztyXdqXGvnPFn57ApsEwhCMXjpkr9ki7",
  "key22": "5nj9RDrTMaKp4Bf48tvhyMCjFcRoEFZaGV1S9LEDERr87bMoP1u7NKymJ8GEfqRE1y8q1pJ2c3yRwRyfz4gqx984",
  "key23": "4V2esa5AgNfbCR9QL8Cm9sZ52qDJ5bcLRWj2kPGdTePVFEJEQdSCswTAvYiunAFkHGMvFybZGA5HSUbx5zT5SfhE",
  "key24": "uz34Fij1UrYe45AybbCPn7ToT9yBQ3A56zeXi7RQ22KrhTxA7F9QLaNWqbXXoCxPX2pazeiWGHmhcDfto8jauD2",
  "key25": "hMuGRKW43QAkxd3gCo7W3xToB5iTKTyfM3M1xyjUBoQnYUWVYsmYJGoNGJuz4tAPqvPLAUoLXeHzCV6HnG7zgph",
  "key26": "5qi8wAQ772NZqWDSpw9g9dSUKJtAiLbZA6KQTxD857x8RMoQJQAXNVRMyw7ZoStnsmFG1YSVb1DxXj8MUgEc86bz",
  "key27": "5k1cRb2yb9KfQoobK7bDu6ryfwgNuau1wyex6B4k25yUj1dqsC7ojKTxWYhFnwmvmHxuMg5npiD6o4ZQRnbJRmm1",
  "key28": "3ZyPS7STYdSREonU9Aij4eyqS8f76bwQzuxWGaNKccdbqpHGCHRsU68zgYeaiDEMjqtaQL8cgz2fu6cfKkQ3iWkE",
  "key29": "66qfzQiGu6et693yURdiLehjZd9eMWkqvwTbD2JRMPsGnwa16ZqaYycEjxbf5AgnbyBunwELRZ8DtX8SGxfbAeEV",
  "key30": "21jMRKjtfvkxX7q4hZHGGCWH9k8XhPc7cPUevLhEvcdgr48wSKzYa1AF7vhj6T2FdiFxiJjTd88V672xLqRvGENr",
  "key31": "3Z5Kd7N6YrKNfbUKUFmTXJJ9uDxwrf6cqc43YupR9bYC4E6fcrQDzBx1R19RGgQU7ibuwEhPpZd6HH5RvNP6Z5mB",
  "key32": "4dz7AVBkFAW9i3Qm9iDRHDLMAvrSbWDubeEYe14hzHaG2Kg72W78kqgMVDhPX3MhT29rieBizfNKaQRGenMTVeyw",
  "key33": "xpSLLkZNSzx38LnTZmp4SKaGGoEPS3xpGx5j6mYWqM1bNrjzzKPobju26jxh29ivbWGJMr9h34bfYEYU8sycKDC",
  "key34": "5PLoW2rhtqrfRWFPrEoPASuni1eo3Uje9F7iNCo1Xxi4P4uqveV2LibGyUbgbrSp123gVdRajurgdGHBKzvdR2PG",
  "key35": "2UMdtQVksnCZP2rn8bcPv19MA1QD8k9eNqe634graudXDDZQvoKjjVX87SjSQVkzCsWfrXwqhySiKHLhMWjYz5gH",
  "key36": "563fi9GskMGvtiH4e3oejxm7jDxd9L9hrvAopu8rXkcLTSpxa6hetEvXmvWg3tiLXJe8Vzkbi2Nc8fAWAkMTMpfJ",
  "key37": "34GKay4dNV3kt8Cve4jmsfKj3mRdis2d8CNCkzi4RoJ1h6tBsfSs3Nihi8Ha17vpynsBmApkuzwP7EHBXaeKsntM",
  "key38": "dFHBxmCiUe6y73zhZ8QYTeC4YHezopX49FUJv2m2d94TGJDDZTzQ1JVMFon6w5uJpdUCZoJbRrsMVtMncwpbSEf",
  "key39": "5mWTeinpC8VLuQ6bVSGwciccUqWsnwGmpXcZMArPbAYXrjfrKk8PswHxzcs5Zp57yNp5SVRDhEFyURAydSXfdGYJ",
  "key40": "21VLXUcEDAxu7n5BRhA7CzpH2ChknK6rzm3CLRZdBVgvMs49N2AVb4UStGLWvCi67sncjXJBukpvrcCD9aD5p7Px",
  "key41": "63vbKKpzXGfJ6muwSKxbn6n7i9TUKLbZ7x3hQsZZFqppuqBy4XVzzqsg5yHX8i1A3oR53TPyHSu8wqmpFEebxRy2",
  "key42": "PY3UkWKerB1esvgmaJHy8Us4pT2huTxA71B53DH7TdUGHZaGkU4TSurWkQ2b9jt7ACRCzF5regz8m8Bv18htaM1",
  "key43": "5WwXUeMEt2pURakyc4SRUdKLwJr27Hkx2HHuoPbiQKq7sEKJtoqPV49JKFrr81Lw3poBu3qKFPewExj6EP4rwzXS",
  "key44": "2smXpTrKRBDQZkw6gauWhLwnYypEDBCCgejRQ1iyKf2r9bQcydUC6aQSBo1QJGNma6mj1KzbJ39hwMwL1GwiVm3w",
  "key45": "5e8EKeM7zzeHv1gDb7Ezy5ig2BsW5Z6HtroCFRqgpqDY2hPwCesyN7MUUf6jzU18nXecmWSYr12ZaY17tPawfqa8",
  "key46": "5U9QUa5YwqtbFEvmMUvWeCnpPZsREFtQYeQguAErDB7GkrKQEoUNZm5j7EHGgjP9gneGHuTGBUBZX5niUEmPaHNp",
  "key47": "q4NPJQaB2g1kA3ZameASNNwKS56egswME2UBNzj5By4bRR6ZctUBzQ4hcMFZV9yqtK8gRYD8iRuW83g2jBRZra8",
  "key48": "4w32KKz9i9hJAD9gaP71F1hajZ9S2tTd5yZgadet2ck8BheqdwMpTF73C5yob4oAhDjt8maSedTo5iGbPumMrp1S",
  "key49": "2KNSyw5QrptTRh23BtNcEUFT7WrpdchME4dJdeLGd4rXrMXzwKoexzeWkPLQ9i7x2hKjtDcEBfx1HkMkby2e88sf"
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
