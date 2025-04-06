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
    "4K7b47zZab3N9k7kUCA6wGyLR8ZHkDE5qD3F2xAHGqSpQpzexKLCW2AAthjCi947kqrYec7vrkXNodEZpKLZq7oZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MCvFKge9owLmXGyAtttb8om5pN6M3amiGJeHt2sHdyaCibQyiWHQnVB9uao1ZUteomi5DoEL1bUJPapBhviKbBf",
  "key1": "4v9zWxdwUc9uk4oEajRQyXEUU2ggZr9ZtdH34qgehDnCFq7HHfk4qRqMcYDkrxgpamUF2omhshJNmt8d51juACYj",
  "key2": "5vLJ1GBuYKKQC6jncAUAATASXZsYxA4wEcnhT26TEyNSbW4k5LSd3aAfAFRBnc2aoAFpGEC8qq5YMMyeEy2XLdfX",
  "key3": "65NiJ7VnhV9gU8bSJF7Y3am9GqtNpv5Dok9zp6hTCb3ohroNkdBuUrwwEgrZQzm922W4E1wPW5SKzF1RBbvJ6ZDH",
  "key4": "2YdrWnpZ3Cdh8TevRHU2Jwt8mVSjN4PtBYjb6XQvTD5NdaPvfQj1netLGULkFD3LfaxoUSXTcAngpncUopoRBRvp",
  "key5": "4DwcpityaidPAMNAAjRiHnPWDxsGYP8ySaFsfL8hwGHwaDT34UNfjSCSahc5hd3kr1w1EiUQnfZcyCuiG4KDHo2Z",
  "key6": "Eq4SzaDHEEqBoBUeriSgHvpyWr53qVNxktg8cHQ2coXccJzfTiqar1EY2tAQWMCnaAgDzwebwtx6LxL3kFPpMAy",
  "key7": "5V3z4tVwNePtZD3Scq7rZfDv4pvssBq5m1SQPgq8gZeC3JkNveE6nQTa7q8S9iQTEvS7x3cuj9Bbrw68jGRNTwAU",
  "key8": "29b22WQtgpDqriNosTutoP3Hwx2nAK7K33PFz4rnpqi2zziUwhzweGm7pA8kiKCtVsc5eqFPpM43eqqaMbptBBi6",
  "key9": "KQ6HpkwJbqFUjujpXzFJ1kdFR9ud8CNFf3eKeXns2fkfdjJtt6EYVmGodXkCkHzgqHX1sgMHtMQQ8uGpHXBdB8U",
  "key10": "4zoSVCcNRTQcuRStWTngEJcCmQmnvGvNjmyzfRziLA6vtcghejNuMVC6mbLjeUW6q4PonXk9Qry47vBjNjB1h6LN",
  "key11": "dWrt2TVSnneKfGvLUijZSU7W9JWd33MAeHDjgQumdVBvss95BcXeYzvPBth7B7bpjtyAD9JKEoWnVkGsTtHLNjc",
  "key12": "2qwij9Rh41kGRMujvyQQMjB7aGmLcsCyQy7poNuyNbzDoNoT1RaqE61sbTEzcXBQy9gvfce4zpnsUuWTniQFQGKv",
  "key13": "emk6YzXoWeVAQp9uRvNwwKdrL9skWEsZYQT7quKqruZQyUQZx6a1QaCMedGQjPasYti55buEbsA4YzEMxK5KBfp",
  "key14": "3kBEth2zejKkv3FoFHtu3Zjmj9f6GAKuSc7VmMPxQqvpKFR7Srpv6MF6EtUSmDiPJ4H4uom37K9Et6w9eBRiDtMq",
  "key15": "3KAUBp1enLM4gLp7yNMJBuoxbD7BNzw3c6MLVcajELHHUD3hMspi8v8iX28Lt3eYYUhDKYZ463ZdTVCcHgsL5vsm",
  "key16": "AwDFtnQDiD51PiEV4BjDW5mAEt3Xga9euHSeYGnHbhxGBZNxjD1Gcw4HMYcRtkDLdth4DXp8vUj3C9DjDMEykbv",
  "key17": "41LgYKCPJu9nxvMLCrJASU1jqmxAjYUNH3qXTpuoXMtrwDFnhS1zN7EGQP6u4Wwx2Dudx3PgYA9RDsjwp5N7V5ef",
  "key18": "opVzPfsPMvSxpK7WtCTPfisr6WyXQvkBnZvXymiqtuA7zbioe6irkXkithpyAtjup6tC9EWhMAW4Ef1RT7RYZw1",
  "key19": "2BfiPf1EkLiQ2dH8vNdd5pH4K5qgGk7zRhKNbdcJRfyACSaX1Bmzv9beqkx6o2ksTz8kpcceYimr3CCJVtPjQpEF",
  "key20": "St6g1jpfFx8sUmrZaJ1tnZLTFEyN4hfkpoAJeaPSkKm5EGc5xkyxMx3kbLuR2gDZYxbocsGoJmyy5Za3qHpiN7G",
  "key21": "3Trx3y8jH2XHYtJtF11Sim98uitFkPERkSsDKYqZgvywQY9Ko8WBp7mNtEnwURr2qt816N78s1dZiDfLmVhuMSWb",
  "key22": "55Uxq5qZVx97DCKJkH6CFGHVWYzwX6R5cSbe33hXbcET2YRo4KTj5vJGaaSNbKjynRVkpy59N9aj4NpingaCqkJe",
  "key23": "L9KwAqxJ1L36AWuP4sn3zyjPhmLjTXPtBRzo3FmP4YqT3Y1M5cTQj5ktBCrfZ3qQRVh7DzrjRfDu3kFd9pn7tXs",
  "key24": "5wfo9inD2ZF8nyzw57wv9d6Crw5bhYP36vy9yDSewpxcLbGnYCyMd7AbwGbTN5Kkn1SfH6zT3zwt1cvTcagVSZGJ",
  "key25": "62R3RZT5p6WuYUqdTriicAnhBkr9oHfu3sbhE6VdsW8ZJ3axG5hnqKGvqjuZq2Vt99d8oYnFfvrcWjUQ73UJipNe",
  "key26": "3ts9r4SpmHGAtgDdgkUvXvUecJ9673pZMbxNCfzGKv517MQkiEfE4eF8eTGCvn8sHYh3jeqtbuGuhfoipDPUYewX",
  "key27": "3LSLFAFnJTJhGP9WPGK6jUZtLm1WXCGHCUweTxKFJGFzrN63ZZky4n8s9d4cBWpHc6KsmKDPruKvxFRmq72p6w7v",
  "key28": "3KX9uZQ8o4SUcY3oHxypMpUuz2rFpvnmH3hJoh3L33DcPar6xRWXWW3t7S7vf7e9jrahAXWQNh9ssnkhm4jRZPf4",
  "key29": "X8E3HiMn2ZLzetRm7taR6SGMZ3iAUyv2jvSkuz1vNK773T1cpTRycHc6TSLBVh6JY7JJSiXBoPNsP9ooKZvHmqH",
  "key30": "2gopcZ9ZDqhmNNgLSXrpQLRoSNJrrVzmewD1zjgM8z77Co1Gvz8raRkwMdyy7Md5TXQzsXyxa4ooErZ9HwTr7RKs",
  "key31": "3MDTXCsBR58Qu1TdQx9VUhpgvVUAwQoPf7tx9xkB8JRpHmf2wQCDzX1uZdPfHVr8Dkb1F5iGrZQ9vqAAfV6iffgn",
  "key32": "pcYVNRJmBW2xm8B91JSZRWbYhsV6q6wMNctwEAHckS8FAVkwJVTbjPJk4V1KnnNixzmTiXgZuMCSkDupF3fGUGV",
  "key33": "AQ14iLDN5HWH6taURKWodhx2bA3c7zezweRjELFqis6ywntExDrEtAd3nPT434o42MRMD3wuQDrUWYfXV1x8p6g",
  "key34": "YiY2DtKNdmxfEQ2vQLMMiT5UJW3pxFuvaCCtqHaLeZtdFoNk1SYuGPPQnvzzLfgAH52aPvDA4eotujzdaPvkkHq",
  "key35": "3Y4gLPNbq8nGcYuHRz8TooTu9uRQhNufZMsyCToAhypAB61Hsy8qbp6eJDP28nYw68xhZNWakjKvmp79t7UAyvFE",
  "key36": "2DFkkBGXRHVeVKMSwPmbjStfBfrnp2xT1iSqs7RQLVpLSmpFkytkLc8MDj9pYNF9WBga46K7CQtZp4rcxHdFeceJ",
  "key37": "2SKp8HbjyHugccuKUC4qe6QR8TdpiQRxQGXaZL2sPQyAMu8RF6WBd6FeoabtZ9HZx5bCGcQEWxxZoh3ey3pfuxeX",
  "key38": "5whmDXu4FL7D4ASotf4VXwMFw9taciXac8xhXJNnFXMoJ4sRtMgjGrvCtHZVMkLbBLoTNxTkkB7cRZvA2y52oDzZ",
  "key39": "64WvyeFjs41Smo7H1RjNr8HqMa7ett91fWeJpRykRsvrJRH4rSJyMJNLKfewBxs641yhNkSkNA9vBqeoYaFJLtto",
  "key40": "5A7zzLwEGdKMS1Wkbn9b6LC19SoAZCcpfw8HDD9PnJQCoVnH3y5gfJcbsJFNdyiurPJi7YxBux3mBCbxx5e1fBTr",
  "key41": "22K8zTwSgypsmQ24zgk1TTxfbFZ7vKaima4FsEvCueV4W9ABjpzKh2Z5CvJMkTZPq1StGKdkXtSQ82aSqyeQKa2V",
  "key42": "4URkiBZz83ExMUamKTY1YmwsHMWeQRH3gLwV2WYUaLaWrth6yj7SxdbxWNJu8ZXLGKApZtEUV2d3wHx8jKTNtJ5V",
  "key43": "3G5NZGKYd2k6kij8t4jvo3iRWCpWzwqiddXzDqwkxRG1eifHwiks5UwhZnX48FaRXnHm1yg7ritG9oZWkNuRZSSF",
  "key44": "2gF56yL9s51nBNBmbetZEQ15TBhVDCy5688xBYBJgES36DuPFLq2aya3BVr1T3DFqMQCt51iNjASKDiWQEk748qP",
  "key45": "5i2Nuyfsd9a5ktmhtQya6Q9jHR7HKmWsYFRwbTomStCry6JoFTqfBmohaBFbyT5rqVEYkL6Dkt9vSL37pFFaKNbT",
  "key46": "5PNtNzPaDjU993vTw2zeDK2qfoZH2aePWC2vWhcDdk3KKFgYCSr8i2jspntRw37eXFdywt3FudzX8m9ZwbEYMsuo",
  "key47": "29pHqSkXwQyeeSzpBZZkaoqSaH9irbv4TT9LuunkWSogAGKytFa6ksANGA9xRCYt3WvYZD1ut3F7M3QvxiYx19Ge"
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
