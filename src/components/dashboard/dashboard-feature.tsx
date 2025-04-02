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
    "3YZ685D9Nw6BEV8kJrDudiVas6cjn9EeWwTjZWBeQ6Ufkh8kX1gen3QNFPMYB2DgVz7VgNGFAj5FfvbhCY8bD73T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XRcrcbaJ43Qz2u4RkfcfJhq4Csn44ig1TMQE6uEyrpr54NgnZsc1EwCUXX6c2DoDjscbmnypEtySRiuNxdnoGH1",
  "key1": "5UD5mmrkScCSvDNJkMYvmXEeHYhxWMKxtHQ4MWdEtfRkxYqPAbXjpfbNUUCv1Cy6FPA6MMVMCsf16xNrzuDYv7SK",
  "key2": "58kCCeYUmYnmevs73ZFGgGxSUYfNew2jEEHcDvBEWfLw5Dx6CJmY5HtvEWtTJS8BxWcPLEPPyrh377BTMVJes5aF",
  "key3": "5PAegDEJJLhcNE416pi1DTi52xM9uaK3w8gfDzAaxSwawkBWZAVtLR9C6a2dnCHrXsq6PkrU5juKtgKcwwG3WMe8",
  "key4": "358P85MWSEww3vnFfi5qJr2a47jPCgX9D38gRceBWP9JFfiosFZDC3Dpq1f6cikV9M5fUSVB3XsXQsBki2CrqTxo",
  "key5": "4ZgYzAhpGxEAzYjeo9vL52aZDXwabDhWorHLkCcZosqvr7S95SktwJygRMzYaeLwWeMyqeLwPzneWpTyP3biR9eb",
  "key6": "2vDc1DSnQjiRPpD14AYeXkuRFHKh7WPejcnuUR9nd7FiPddWq6nxmsmZsQsux5R5oMpgT8yYDoAV6dzfcKp8X2mk",
  "key7": "4iHXunK9uRrvwjMx16S5hAqJRZz3XAXdYnKYXBJRzWkcqdaXQRMztFcAVCaYXg36jsFPvrQYNayDfXrHTijnqgd9",
  "key8": "2wnL7ASMZF8pxBD3PVacP4ErxuxBYZNbx3vCmVbKNBZduSEa1FZzv1RwhMBMBDZVZSRAPgLraRC5Px7L6FZ6CAVq",
  "key9": "5PNMU7JUX4cihAQ3ec21E1mriYADfe1Jqc3XHf1BbvQ4gzxhKEDCinfFhWQ5k1DBcsyyYqWGBQhEjD3DNLetYxSc",
  "key10": "5UZUEcSioS5Xji5NceK6L4qu6p4ajLcDti5nv6aZ3VQmJ4pPrGgGyTNnCeuYPszH8op6hGmykcAEy81vCLzAeury",
  "key11": "2mDhPifkNTTzzo4T3SnA9q4oB314hDUKvh5DFqUGZ7xvPe7wswnwaRZ37F7PxWD3iJnf5EmkGRbCGdLggffuRLJi",
  "key12": "5VzU6DjELbktMAqcFbthuaydVqLTaEkA9fTGFnbPCTULQtFF9tjh2F1C71GGRVYiLoeGmWreCaoeqSZQrpG7pzEe",
  "key13": "4RHfFqSAdNgp4Zc71kbSLB8MpTZYaqokHj1eGdEbbCo2g97bHeu65Z5UksHC8XrYRNaqPSN3QpMFpY9JbUxT8PpP",
  "key14": "4nskTyxrHSf1WpuGynFfdfRPpYmSzXt4hrV99p8nGpvTmWB6LwtzGHGvj2zJg7ee6dZEtjS2RPEBNTwzq6RhCSNd",
  "key15": "27GBzQXxy5eaKVhUAhUbxskCES3oP6i1tbTFAEN7gk3hfeUwXLBXiC8UrDsxGQSZ2VXZpmTAKTr54AfCkxYnKhEk",
  "key16": "NpNrB44SyQCoNZdUKFCHuA8Bqm56VANJL1jTorvSFRELH8JTLnypWHNuKVu9pKy77iKPbzP9HWe6q6MfYsCyGnS",
  "key17": "32xw9CeaFd4NMy76wQZMAWBsFPjmdjczZZY9dLxa8KkhQx4STasFErtU6sqtV3veYFKZ11PG6bYGt16Yg3TpoYgv",
  "key18": "55d1fBz1ECzZmm33bQ5WFBfWx5qQEcYQKKPxTZQoXQSh3bJmVwAgir91r5DPUSBkxFKsj5c4XUMRTUfuFuLgHYwZ",
  "key19": "4HcCZpkLQfhDrfjwFEwKgUqJqj12FEd2VRqS8GHkHQp93hXUNcMkQX9EcHG7H5Hr41yiEsHAi9WAjtUzW5rKMwf2",
  "key20": "zz24Rm1UNDdxvdEmqD1vMQKDauqq9RbCaV1g7rhGuoHTXvRuhrMvVw7h6tX9XD2ciReBpPm7rs1Uq86yuPAH8sT",
  "key21": "ChQnt1qnA6NGzsETFN2yVHxcqZxipZujUFS2WSSgikNFRxBGxgFk9aLyTcrwgZcgmYoP4KbAHDsgaTASsrLTDD4",
  "key22": "4i9Zq1WX9k7EiPF6Fb44zt9ib2igd9ipSLm9ctjy42CCSFQkttktoe7DctXbZw9YmXfx8dETzxhA4Q9DXFtd5mx7",
  "key23": "5w8C9amrNQ5xUwPp4LGm4ncfKt44ttngxjCsMuHPyfNphBbR61C7UdwRxnEDzv2qkSaThxeh4kohMjNBABEC9K2",
  "key24": "SH2Sxp6n5QrPA8kmWwNLudBCZDLy8L5bri5snDuogn4VejkiLF8ZcExvBZxoKsMawd5xTTd9CFf1AwupsJBsbDN",
  "key25": "3NxjbCEEWdrsrjGNwamKVFL3UDoVtUH2Cw9yVuBP9MBpfyq2gqrcd4UyUkbf2R5sGvq4DmjSAnbYgfv6P1jSkDbR",
  "key26": "4QiVowMBTwGnFaFrM2XDY5KNKoTNEgEfYF4JJBUVcrzYJBJJSG7TNcKiA6EQEBK7u59AMnZmSEgVc5SoLPBTbx4K",
  "key27": "ouvTMpMGSvA6Gp9uGFcbzMWhscFXmhV9rLhiwpdZqT95Avy2pu1nzk1AnvbUtwWEXKdCKcDJMq6E25fw3GFcUcd",
  "key28": "38q58Wd1rXYfKoqKLJWQaZ9oMcwggv167DZpXMib5DSgXVLeZcSqebr8khjjizMd1wcM9fJgsZ6r2xgYjd7sXNAC",
  "key29": "BugFqcKS6f9a7qq1vvVgbfDhkbU4BnUHqD9Y7Tp6iDjVBd1FQnwU8a6o6ok4jmmBLpuf8eidS4RD4qio7Zvf7G6",
  "key30": "3cccfx2FMMWGkFDqDD8VPryimA6sW3qGKVvZP8fTDg6TPbGtLr73nrYGTaaVFPgHQo5g9b86ikMjWaPfHmgrVZxB",
  "key31": "671unTrsu3c5awDEwbFGnhb28V2DWihAMwvazpBw3RKqkttgYGhZXY7qGQ7srubHEJmXBF6iFJ5DSUZanAdXVQut",
  "key32": "48ZC4PSEWYJv8CiSi3xnF5GMPS3KisAdaLCdXiiWSpjEo8Aiaqof4fxPT8dTezYjLN2Q1UYLvDFVy41Y5dbjXEar",
  "key33": "44fMz13sUUag2GMUhQqZZwjyQUwMRAQ7Y724wyZuxG5uMa6AhLFCNzmy5fYQHb8Nv1wdFRDLPEUeg3KvMEx8vcmK",
  "key34": "3Xw34oRmMUvtyrA21hjhk6bJhqSMw9G75u6VPoLyrH1cbuVazc3AgYHi6uW2FinYsZ3YinC7bQ4Mr9MjgWyiSMe1",
  "key35": "3iAeEUfvH6vSquU3WhDHeurHGjUzZTrfQXpSUNp1WGdaDxEbzuauB5VrJvj87yMj9yJEyXe6XKut3W6Etr4Fak2k",
  "key36": "kFdibEbPAV3w9rDsJ4Tft9atFnjM9v2n7f7pA7R6b8UEk81Aj2gXYfiyeY8wR3seaPKkFBdTrda2CJn61G7siHc",
  "key37": "5pQ95CcbDbvT5TGk8dqaYLzGjaYWTvWYmj8BmcQrSkLEaX6jsJuMXMexb2qvWcYgh1iRg2jjunv8aMp3SVnuq6Rs",
  "key38": "Yfb23Ae3i2v1PFWDBVv6SVBG4tCejqhKcxTiK6uVBm1YzZ6c4drYGqUASGjPaaxQfR6Pzbh3qYKUSZp2t5LWeCY",
  "key39": "65EynrnGXJZAN1y4GDRWRYtGuWjTqVmY1DFb4gr6DgjerXYpZhK4F2ZEuiwDUQSjvWukapUpocc5T4CU3Um7Yu43",
  "key40": "28ZdshFH5DcUL73MxUY6sAXXYFCDHP7hioYM5QBe6d5TqWU8463eiATtbfKGBjy1RaKNXhPDv7uMd2EAdizcW5d4",
  "key41": "fojnzV6yYakBvEqAnz42nrH2UTLDp16R88um8L3gJw2CangGojz2LhMxUjAMrMETgLCNQ6TkwGsUo5Wv51nM24q"
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
