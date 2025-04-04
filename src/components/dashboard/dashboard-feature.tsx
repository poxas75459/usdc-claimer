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
    "5SWYvp4q998tec9FMrUF1xjX9nXiZzKT6wdZpx9W2t1T1FJMSx8dCewhh1bpwYkf3PeLfxQA1VJLjEww5njbcaeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zGvajC4C2DEsn3wLbfdc5pUZFbKM7MPhHwKeKqmUYvme1R4fUQ2kNAMaDFKWApBPBW8SjVMbmNGFtJSsEQ7Sqfq",
  "key1": "3vhng7xPhemdrLd2WzjDZeRT7F77PXnrovk8nthettEPELUxx9XNM4q6ms8NxAwSfoj6EwLpmW5G4UBYp92m9KVm",
  "key2": "5q4o3ETgPCztQSzQEyaXuTh3wiV9P1u1hmiBM5FhGaURDhu24v1naoybWNQKyGE3cmbcRzF7zjxAKUoJYbn8hZui",
  "key3": "5WtUKdswDXGYCv6BQPgrjxhPBPvbZ5yQ6aDiDfGSgoR7Lg9KMGG4eyTkNfPSqxzM1hp9xy87E6F1tcs6ss3Tn3F5",
  "key4": "cJmp7t88wEjWdFg45asMCbPJCX1U3LhcHdfmuNssgJab38A7vtwE79LRXe2iAiYaeyqcRDVasdUGwmNd5rBJYVh",
  "key5": "5vJAn5E3uHUkEnN1RPhBkiisWrQrmM49wNjupVthoNFPWSjVDbhwFCVX1rNEW5UB2uHQbfQdgWpCCipNQsx9AEfV",
  "key6": "46NHWfwnc1Vo1tPShRmrkkBu8mQHWSDE4TSkDogCgfRt7pC77YoKrCGmtDQoqLqwZjGTsY5wi87zpaKy1RCvB18Y",
  "key7": "23LyAmJtmaNqrjkxmJZzSjKYawPYbavi7ZJE1HzDPj8xxjbgre1d1bbqnPBZaLF9udqezFss8jvGw4gvaceWvb8M",
  "key8": "4Y9MTqWNfbMmmMAnuQd4vTvTT6UccMhr37WkpiWZbhWZzByxJJKvbytrjT6gFSmeLnEDjyWcr772sEhYh8Ja9Gni",
  "key9": "2p7pZBbdGif8ea4iSyJQEN9WSibTJsED23yiomsa9qikUNiahzvTUfJAJ5z7YUnwc39C4oykeB7QQY4MZYA9YpG3",
  "key10": "48WVEWjSsheC9J36cTTExdC4RtFBZs4Bzj4bPbgN3RddSGY5QKXLXiQM9nJoiM5Vc1rFGKe5eEZGpdxjWNNztphG",
  "key11": "52Beyx6yqcKQibP13wXeP89iUbDNpTH2xZpNCjKMuqie77oPUvWR1ePxZ55mKjETkqHi92Jk9hY9irHxZ8AbCwVP",
  "key12": "4kGVFEEpiYKFBkZ1rMnm3LoQkvBHPvwCzSHuPKarQbWW1ix1pXigZkMHV22QJYs2aYQDhYYC8AoRGGFAoLacQiSJ",
  "key13": "R9tws1LtX1tYcncpGNdJV236P3DVrPCu795Xc3da5nFu1egisAV6zzPbNSvkgw4APgxcFDnhUNAy4rhrxLCCMR9",
  "key14": "sN7PnpdKHVt7rwGgsWUoiEFZysXmysRUVtk85xzo6bUktAMVY7ULW5K7EQR2TsQrK1SdtgwMALQnYj2p9L8Cj3h",
  "key15": "KimJHthmoiVZ6r1p3ojYa2MQ8wDKnP2CzNckNvvDsA6WL4ps3k27MBYfXSP8QCPPfVSRPDkVeh8WfPqrMLBqstH",
  "key16": "4hQDwpAj8fS98KSNwNNjN5muYB1qb8wgkFWpY5K6E1n3FJVEz9qiehag9fetwr4RuLjeqfevYayn7cccVLAcjFu2",
  "key17": "4yx7owVkvtZtJKVe8yC68ksbf9QUzfvR6fvTTDWjdPGBrcFuPKbo9PtgmAjjCKu9uQN9UcqtQ4rLXGmLtJNM67yw",
  "key18": "5DwDbDZG3nEdrmydm8h1NJb8wYyzJCYzpcN3mScXYGTsLAzS1ZVNVvVJaXQrWSyAtLLviwZEZvsyquoi6tytGGyY",
  "key19": "2Rz9WTzjGNq1hWiPNW39Wk6HVuZLSwzcWm7SV56Yc7Z1UbwKULnnE4dmfQDWSdpbfzBRcyhXj7jsQP7ou6ugU8mg",
  "key20": "PMGimvbNrx7DGodU9qShAV9oktUmVyy92tMcSxHQu6k3aTybpYhASz2ivpcRLUbXLVe7ui3NpGSABkSxJSCVmN7",
  "key21": "zm8FPXAA1LA77DPmcNW8YVEP6hvNhsVntAGiUkVDteqKxpbxW18NDrJp3W3nhjKjYa1U3krAqTRV9mJwVY5WcDk",
  "key22": "3F8qmZ5j9S9hxQ6r63nKVxDsf6sxXb5HzWLVMTQSube8aX2NneV8eJcUiaKCuhGWKdLj1B63mqj9EGQw8WEzecuw",
  "key23": "5QUG6g4gJk7FLTFpD5gGzZp4PTBkeWnCDGiGiyVCRi3AMwTqBkom9s8bQoU7vczP8yJ8z13ZHndk7xRbYryDLmd4",
  "key24": "3SLjuLnU36s4rQPwRheRez5AY7tDnpMDFU9fTV3htRQufcJnuoVpW3qxKBYgT2cmjtjngnkjzMXJ6Dyxutk12Knx",
  "key25": "4uebkwLerNVGB68zQAyifhA5CcMGkADCRu97cgSBC5Jhg7oxD6g2WnBq5nrnK7EoWSW2nM8YbL5G5tNpp4HX98eX",
  "key26": "3HJUPugmHeGbqJvimPq4feb2ZHc74hKDNMvhupboEtJbXv1NZkBVko8546xss261ypekfdeirfuxxwDA2VL88N9x",
  "key27": "5sy9zePDLxKp1gGSBVqoiPAgHVt7xTDNbKKaHt15M74EYjcxc6ZzNKLRUU2nbo7oEfCNYehFtRqR8wUnscdVNENY",
  "key28": "2K2UA62Cmu1EAXHx29oZJvSmEPeQcMDUCLEPMWB7akrcMo49oURBqx8hEaSZrwihf6AvD4mdPtNQNdYnsqjU2pAd",
  "key29": "4w9ncAUUWhXUFrKSsrp9Gqyt155SHAsSqTvcdX1kJQ6MzCYXAuTz5bovHZnU8dU3HcbTSZ4FPezKPU6FKFbgdVm1",
  "key30": "hQn5wKTgwtBqDooV1Nd44jcwn6rLJixwBsfknk5pcw41Pp6chwKXjh4NvFneUbE8MsuGL4okfnTUNK4NknPZcCC",
  "key31": "292fPS3tW6Apgx2dNRk8dJRMzv4QDQ9ByDEGXxvasHf1rR8CAufpMcs4omX8us5gLUfGVMk2pJ4BqJJKeGwMhaRm",
  "key32": "5Ati1DcKLUiRWTFZ4xTNryeaotB75jCT38KeCEJFzzUAmTtdXdLvggU4ekV8NoeizTS3QHuAvBaeG82aTyxMSFhs",
  "key33": "5X2moAGuMSxvWkLLyFWehkhnUJKfqReAtfWUnNLp4CftfFkEpRKmZZPU4VYzzKupSCaSRBpfrN4FttvzDz7hVQQ8",
  "key34": "2EF3XcGGNkUc7AF2v8XRPJqChvDqYwaQH8RJ7bxpMKKJSAWjPkr9QMF2D5rxytismc3D3jtoCxDv7Ze17UE4YRGh",
  "key35": "2x3Ts6MPrtvLkTppwpoHEgtaesYENGvDrWmVDF2T2v5QLnXKniR49pkV784GsqD9BdSGYBWisRjVFm91qKQV6CPB",
  "key36": "5cXRekXWpAQoaJAetrriK2V8t7XgCnNX6wHGWLnp5ZsnQtk3XVXD96AViv7rpRsbvLZ2ohjfddehfknt2bVQJHab",
  "key37": "tbSkpXQeUXz65VzBzdtsGewJDLZutaefoTkNxRdgWyWhmRiohqXzcx8HvPLSehd1aBLbZxWMGJdwHZKecAJtXWU",
  "key38": "3EgCNmyPybLWvSFJuSFFih2K3NpYbMBTCvXLLnFA7NmaKvqyWYewYDPbFNmcrUqWnVUK3auGrGQRz34gE8LzEQTE",
  "key39": "5oU71eGzFCBYuDZZgKexAkvjRDkpKhD7zTABYiR8tWEaJuttwfy2f22RfmwUp1JVVjLi4bjEjL7qEhHMs48CJbJQ",
  "key40": "41ZZA4zPxjzpg2DPrwpRav1Z72YTh8ysXm4LsBxT8CWGdqGQyJZs47i2bU5dceZ6MeaDQtMeGaWw6EuoU9HHsNqG",
  "key41": "3xZSjQZehN8EFLUYx5YbXYB5efL87rzhjA4wsXHxgmkTeEHHvpA3UNwhGLRjKLcd99jWcXyJQiPJAcyX8C2dUpTp",
  "key42": "5h5BVZnbuumeWks2KDADTakhratJZw2jqJpUtfTRoU15DpmPBBac1EsBYMbn3rKiZ1uCw7eDVkjQLsPZVS7aGC24",
  "key43": "2YivbD4wFercCZyiC1asJKVBrDpdeUDVpCxidbsmA2WTY7ntftpBKMWwDi6vK9tKvTBWYufco2jzPF43T5jeYYXV"
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
