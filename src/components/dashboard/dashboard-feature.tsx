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
    "2q28tWX7TpBqwQPcjtpWvmYVUq87cMVpvBH24mf9zABjzu3XoZvWujQk438Piw69W5haHrSnHGQmo6ETCxhvLfZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pa2DmPPRbzPmS43cb1FzAxW6k9Ae8Ht93j53kmyMVuN9cwz6YXU7cKnj6h69Q2gFTWMcGB6VBQohRe15uocr1cE",
  "key1": "4AfMUkQJYkEjsrpqJTCvCXoSnfFDaf7awKsTgECnxVYnTgNTFGCn2fYYsyAS3sQ4AfP71mjqtsg1PEbVm1a9DVe8",
  "key2": "23rhtRoBUzQC1Jg8jdJJ7BNnawVjve32RsMG9TZjcrV3NnWfLtbVGwt9Zit1DVa9MZdk2PrU7431VEPB4J5tTYfb",
  "key3": "5oNhQqx4VvxZ9aLXfLBwtW5TQtAsHqnsDHSGdvrbzmfBLY5tq24TkfhiPa6YTNvRt7JDZbX5X12UmLRSmU9PHwrf",
  "key4": "4h9vnUwioZhaSXV5UUuWVNmuFkEr2hMU1RW1tya4ahKYDXNhZYzxXBsCnbcFMKjWtzdA7xBhGVnKUcJY3g2MSPci",
  "key5": "2UUSMvokyCMeF5nMjnZzhrLDPwosrLh1iife9DCcTe8ntajBqgWEaoWseD8wNU6EhYxnBvHQ76mxFuwePc8HFfv9",
  "key6": "z8hFubZefWiG75YuDEErb6u8ZejqZkQMGZoSHjqz8G7bTb8Ds7UmifGpCb7g4m3J4imKyYBEq2ATetYzFTaPLGP",
  "key7": "4dV5pkiVfuWqnL6qHghGm2MfUrQsTm5cN3pHwVCCN6dwjtSKQkphvgMknxduEckBbx3iqvHhtoZN8yMR3Ha2gd6T",
  "key8": "5hMHR37FF2WrXU6RtFAr9HH7fg3SPKurHteDQWkkkqNkUd7pGF6sfQMYAQikov4qzKSsPUT4Ny4tiQ3H7bKM8P72",
  "key9": "5k2ZkN97T9cKSN9UjZ1qRBba5bNMXFxcyV69Z9ycU91DLa91Abr8iDmpAJxtA4kdU6h28KwSMBfWWfqLGxnVfHmx",
  "key10": "4kc83jCWzYNM4NC7BBwKxXjrQGbXnxPHhXkykjnpP2eGcoiBw5x7ehJtA582Qy5rEBypsVVyunYJK3xcxVATdDjk",
  "key11": "5avkpUc2ZXq8gWvrdZH3U893eVC7LdRxgh43DMZT8YnVf541qQPkhR35fAF9UgDu1u8YS5vKoWpb81wwm4s1cPR",
  "key12": "2WQZ4NE5xMLh6sBBKqYNDKaC8fyc8qceGbuYMhjpRyueiYUaggVNcEWptYHPFj7HcMPzoDpsJ5Zqg3pYM2RxvZvc",
  "key13": "53yrLeh8qBMBRhnsSm1PQnxRWYgcctKmGBu8Yua79WBNJeHtQ2ndB1k4mqV9brRMb3wTTWJov2eDM6aCKo5cypAU",
  "key14": "5v2gXoESegJTVa3V1shxmbSys37fi5efwL6sW5erHXbyv5o58YQ9jMzkij8oKSSXYnRBAHuzNs6P64fBLYmLUaLa",
  "key15": "22Zuuk8UwsJhYbyd1n9bzaTciR6s4ktC1sb6oDF2LxKT8V12XyAugYFb53HZo2uXr1CDoJVGBieBtov8m3ZFECce",
  "key16": "2G4zXc5MV3RYYE7bGdnZULv8LGb67hwkszQoSnTwx8NWB3c8Usra34r1GDurxEDDRrLs4xNhoWwEN18TpkzdFH8W",
  "key17": "5goUKW74444XGwtAKQPAZ5mvx9hC8L9X1T8qsNeT3La4uwfcyhGowuXDaTByYmSxeVEZCLtLgwKkDjuQJSoL22g7",
  "key18": "4JuakSKf4NLixNBnvpKc8X3SmQGDM37tEVzCjPdM2oYZePsv8DcxsA9xcdAmimy6jUhk7Ujoo1bLTC7gEAHaz22E",
  "key19": "5yroBR1dRmSNzmJnjtWRHLNe7cnknm6sWjTAiKbkcgHhUmCLv9aqxaNbP85wxa1eMkY4x6KRCoYhotXvVLowjnGu",
  "key20": "65nw9FJXbuVfC3DSBadRW4WQdMTVSv9mG8zAN3vxbDqq5pz4k25MrpreKW9cwuWjxTaBBZ4g5sw4K5FWTENc9kSD",
  "key21": "2XN6PbuvhTEqgcJHRHfoaoF1nSoVgf2hYqAxpBhKfMx3mVJT6xyoreC1jm8LFtXjemw8vBbNzgZtxogVupKBhAC8",
  "key22": "2cM3LRdXqfKb6UVpWPE8TsYVvnzxSLeM5HdysMjeRevZrotMCyYdELtixSfPvoPQZcp9uPRrvfa1tRkYnxspEfsU",
  "key23": "YnLgsEYnxxrc7uLq5FEqEr9D5phD5akkonN9yaPX8CLddtAcpzNYHePuVDV3SVoipCAAudnvYEh4gscegBrekro",
  "key24": "VNLE9KHZkL6Uh3pjKrpwohesoHnDcWn8f3MLvQKuQKGWfXeyztD8tmcM1cqVQsjduLEdFSyhDvj5rGDFw5KvFbj",
  "key25": "r87NvPPhi3Attj13PdPWmjUGTvbFHZKveJhDgCSYUTSTtJJeyvryRPPzpUc25iwWDS8GgUNc6wZD8YHZGGRdihL",
  "key26": "31Zx6z1S6pc8ZnoDSa5aHKVdzdvKYdgEuboHbhq8ijBjT887uvNGknYNsjbjib3B6PrGAJpq4QqkbjLvnKaeZTqo",
  "key27": "5y2Xqp2KHkJnorQEEstQfv7phSXJJeSyi8z8aSa72Z2Yq5Hfwkua4w5kiGTWxpER2kBy5adNPqB4qJtNMMAwXVmE",
  "key28": "5kocZSHapSW3ewDuVhWjBQF4P6mCceJn8AYCnBtbVgMsVWWCEkTVxsYdWNP78FGeb58djtpFxrNDw6vbbBvUBPqf",
  "key29": "2Pgu6VoANV4izEQZCWHowMBMGTrHyN3ZT34NsWttHQ5nB4ZMmVEhEcR3s5vKuP9eBdc2QrYXFY6L1nunrCNRZitR",
  "key30": "5KecyqAdYuQqxURdiPQgxMerG3KDYaftkFxACmx7HVKkUpsnJ1JLgTGP9q4bJMhxMv44pBSUVKJZNENR1Rr5MUbm",
  "key31": "4a5MyEzYqL4Wj8Ab7kPh2otgLeYZnNUhM2oRyaaMBBttMf58rtiL13iUjyTpEfSPn51Lhsc6zGys23VoYGJgn3AD",
  "key32": "4EeJvrnyCYmxUM5m2dNXR76VjU7krJnxSrfJnuHo9Po3QrUuLfJcxayzxKFCxmxb5QEY9g7GP9nUmheznmdNaNz4",
  "key33": "HneDhsaqHxqgwnh3YFG7nNC1eFYF89teQhVV445EN95rVYUgihrfUjHwEGKFfFfBMR8SQvmpJ2EvgKnQnQK8huB",
  "key34": "hEp2D2nerSdLDiEw3YBrKX96sCcwGXqbFha34zE7krNJTf1F9wmMyLCKuhbUxjHtfjjbBVNbvU7SH3Sd1m31D4q",
  "key35": "2X89QjdUjvZv31TDQwY6V5R735nuWxyXEJcaG48qRDotgZihmrqzYhVKyRa7BshsnEHidY7x8jTkWtHVJMuhiT5J",
  "key36": "3sGZWjVaxCLanp6qav56bEof5hoYcf5BBUoVXsg2bETHRxCZEH7XcWgZiuQhYKcwEG45ZFqb8uqtnnqRDiaBgzaH",
  "key37": "fzozc7mFZxnB9zWwkDG92oEaHi7RFiBDNC6WqueXzPvbxDsvdyN6hbpGG8knVv9sPwh5D4CCqEQSRTF5atajujL",
  "key38": "3We1G3pPFf79t2CigW3ydeW4WW7PuSVmDmPV2U1MvAM6Z4izND5REy5cp6yvAkA759W4qkyxrLqKgzc9brKRgUxo",
  "key39": "eE4EYyC6b4QEVJmHtq757ftUyfBJhEpyrd65bjXwhjaCMFDccsCjaWgsCtC1hzVoeQJpjJkKj4ZU9jhKgppE1BU",
  "key40": "4fKWRahzNFnqZUfyb54vXLkBSEUGL8SWt6DRhdEvcX2px4HiUC9xGmeBYYPcd9jpsiRoLmX8NFcNQmwkWCFNpk1p",
  "key41": "4i3qv1LjHco7SVCkSvFikdZrLkuH3WAzmTo5zcgtWwG8fkwv46HX8V2jS8DEapxCcj1sgCBJGRbAAHyp62dAVhD2",
  "key42": "ugQ6o3tZWNs6chPZPVSCiSPN4mCF9fBR8abaXi6B1ghuz2CK1tjcTCENVD83ud83zto3MaKZRNFmhTeXFY4AhrJ",
  "key43": "4y7ZD23EFBghMFjdoDjEY6okyLyKLUwiDmadqnrHj1vkUpJQxNS4vT1BMBkVN6pzPc82y15qZjWQKqviRGgbYK8M",
  "key44": "4oGyaSKGvydJcDGtT3SWYgZLZa2DqcNw1dpMz9amkPdf2SEtkFuHFDHqrczfPEV8sGS57fYEB82Mn7Sp7Ri9zuvZ",
  "key45": "4UGYgFnoNr8mtwdA5JSfwGpDRZ92nBn369DcsxabstSKWhUkbJwbQWuPBtLhnJmzYFBEx1oraBFV3RgUDx8RzxL4",
  "key46": "2PwncX8CroYhzvY4smTRnNXGXMHRPbB2CJCToFYMvo4eXVoSJF8hv4C9sowC1mJnrqjzL5PjcVTWA9x14qcNS3hC",
  "key47": "4xZKjPPZek1UsKDJAnbYTiMkbqQShsb7dNpKqaMkzTCMkHwsKA55deSiPfAUySvj43dZEW1gz61eAkpE2Xd5Es3D",
  "key48": "4dcbd18dDJD7KGLW9GLRVwtj1tP7yfCCvgfhShXyRYQx9NnG7KiPPE4XcfGEdgrFkkbeiGovjTovW3oVpNWe6FhN",
  "key49": "4RMLt5fvsQyWiWPSWt1bTw8dEDpkZbVrZZMwzabpNjHqJdAWa9daVgL2aCuUW4rPRrYapKnLTnRjm1nR76q3bA2T"
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
