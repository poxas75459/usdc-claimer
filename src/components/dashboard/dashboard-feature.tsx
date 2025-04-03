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
    "Hifi4putkw4NLPUM8t6icsfzErNofsZHH7Q8xeb1xuWKizQfoJSWpHjfVgCFQDHRGGBesce7SU1MGUC8Dt3sAYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dSrPUq5TRQuDp9MLCdCcHtckv5TsZ4VaXMwRUPEx2cKfvZvLSqLrELqAwVyfsz4eyT8aUwAr41cSZL4ZX8TkVGu",
  "key1": "jadNKEPcQY5KoKsBF6S883cHvkng1mGNkt9jjuZqfFTN93NCfa8eXnpWhUodSSj7w71tdEneb26cFnhENm4BNo7",
  "key2": "3iFUyqirTyRVMwagBsJgWX8gcX25NvoMfBFje19FgNegzCSrVUyibhjDLpkHm31jqfowJFox16ERKYC89hBQZQfT",
  "key3": "37oKbbQZa5MpdZWhBd2uDMU5izVWHeFqccsFdbV9zUBMtXyhWdTYnJ3uNM8USkXFcFWf4Kz6p2Gq3846UmjzhrJf",
  "key4": "tJ4tHe7AnYsEoSerkYjy5FmAWRJ2aysM5hBXRVprJoRbhLEHiJd9L9f2StUuct2h5pUW2XBTpUMdoVvjZD4suLp",
  "key5": "5bwcD1vp1WyhX3ULCom9M31E85DHgmX8ewFPJUtgPi6pA3DKKK23iagER9yNXwDbH3r14XZpzo9QnoCSuLdkvCkX",
  "key6": "4SqVpcQiUP99T1i1ZNjG1rRfCLaqrRLH7GS7LX4osjRwp5LhGpf7CbmVvD5pLSJTrA6fNs9USbMzfJ8XkPeXrGKt",
  "key7": "4CTLzB3t2sZJ6VY4z932rH2v4GixC13bc1C4YwZLwk76LkULoTsJH9jgivvNW2nxiiqXarEtiqDG8spXi325nM6s",
  "key8": "3mTejonbmNr6eXvPmsTwG55a4EhkuijtVVnftf5QgjcMkv6HVo9ibzdp8SnzzANEznXNSGVTDA5YvLGxaswALqUn",
  "key9": "2xiF4UU3BDQzrXYvpasoPaF9ftSLzvAwT4j79QQdpzgocGXbyj9UHeZjooNa92TRj4uqZtwK3uiu9b4TKs5bTvnf",
  "key10": "5VWPoDbvgV3XNjuhxZfBVV2GXqKhTGpnkGQzHPm2yxKDdXB3sSyaQtBL7jifTiK4AxC99aWRbQocA3pBfptb4QN4",
  "key11": "3Pd1PSZHzYu7jxNoCJvCPhMn9GEQGD43Ricgcy4Xz9zFibbFjFJuFXiGFySMQmu9V5dQQ5qPoXjjwKmKZtAVVHVX",
  "key12": "BSAyGFwHqJRsYKKjqn4quyg25oiLnZWDQDT1kYJxZRbNQn2NpivrT1RVX8SRVzZAjvbjjixbDQVLr7oyVNZ8DRV",
  "key13": "UmVmGKSqokSTMhf2jcAqUH8H4webCDEjAtq6qiPcd1aCRwvnGHW96Mzf8AimYMd33qxmffSSte7Y1tG12L63u7u",
  "key14": "2ngsW53doJVvURrnjU84jLWhYcuaTUbwTavboLMa3a5om1iXqSu2tUXMAY7AuEN322rkq5xKNMZcyt2jQ1EsWuDr",
  "key15": "3A1M2z7n6vDnGzKvBgJtB7fHjZSHAbgBLf1BcdYMdsxgJYzN4JqdpBQB2JuX3y3ZfhzVmxDBkr3X86EkThDybGUL",
  "key16": "2DQFzcZdYP5xU4FHSf6eHZjdLume1ievkpSrUNUEzEbZs6ofThitWWucQThT7mKEUNg4HEorj82zvf8gn6LagGa5",
  "key17": "464VrJAnmrrKE3YboqcSeFWAZNLbKH1d9j65NXmJD7skgQemcZikKiNnzC9UTmpHCT7ZQkfncbXUJZL81AkQmFpZ",
  "key18": "26GRLwoQffjWp7L2r2zxYb2HmJMDj3uBu4bsCEiBz8TSucYqWLb4LrKuNxWkd1xhpL8LUjoAAYPGdNQZ45toAwd3",
  "key19": "3a6f8AEBitiwYSjtVsVAX9m4RW625NZCtzmJAqozYm894dRRK4Ugtvbm2WR2Mi4GKuWQMqohk8WcUPQ56VD1dAT1",
  "key20": "3WKSxtQKg5tqXhNRMtRwfZemkuF8NxGJQHiJkyhrFVXC6bFHbTvyXRkiraGb3j3LkbxPSio2VNP8pzzPoQNarkPi",
  "key21": "2qQhG2kFuP6TpUfvSnBbTGFonJxSv5moXPyM3swKFncG3eFCRR6aa2LHZU2U3kFrC56r861zqjiyVvEbXwH5kqLR",
  "key22": "2XiY65Zt1D7BpQ4hRps7qpujgWBYRiX4ec8RREegJ3T4T7Jr14QEgQkjoEkjTk6FBrHuHUFiPxSngB6rNs4mKU1P",
  "key23": "4H3TuKA4UNS19pALpMvh55RgUCGT131PLTbSL3DeZYkdcJnko8dhAJ28Lm7NRcwNEvJpDDkdPP8GYqC36EXD6ttF",
  "key24": "Lxb1iagRPskG6AoJ3RVeqrs3JT7JkG4ARwtzZA5ZSrJ49HW92Fm293nspRadRcYbYKefhSBxiWrRDrxU7wPVUYv",
  "key25": "5odtj9QUwpuy1ZzmPqNUkC5ndLGSNbGxdcy6tDMMR7zLNTK8HH9kKy9TC23oRnRT363tud1mzmChhdNbkA1iLZFG",
  "key26": "HvyEDRWwBWLm6RcWixXwTMkxyry3DJT9pM1BTdaV3zkNoHiVnmryZChnFfJQgq4kZjUb1J8M9LiVFppHWbS2735",
  "key27": "4qLFi3o5SRHBQrLiDm3ogEKSBwcS6HwTdgVSWdAuUt87cA7WvMvYffYaEoDRds18vSLtch4aE5gfiaCBxfA9VjuE",
  "key28": "26bAm4yCztCqdNwfXjnnWSWPr5fhstbk3CfNC2f1xQEvybd1JhGeMc7DpZ6zP718X57eDxkCTxvzf9y5EfEy9HAR",
  "key29": "5yFnXcR67rntnRT7LBih1NbErQJ32N5ZRDwZHVNdoSb8aabTuYHBS6Peu5zUaEPApffkkR9kGZTsMBPqhjb4WMkP",
  "key30": "4A4ad9HXNq62GhznCEkQ3GruPkdXx5ct1u2NtocijNtiA31pcP5vEg5R5nZCAcpvqBP41j54npF6X5FtSwXrRxdU",
  "key31": "3GGHQeBNTgLqBD9yf2aPre7vnQfJ8xEui8DsuHLgHkpZs717QfXGJr81kb1RhawATkPFukrWqkkbdmGP87SRM54B",
  "key32": "ztQ4P4ai92Tnsoyg9S1KEG6gNfkYhQmu1kNCWYccHTfCtRQ8PJZ5kbpaprNgFxqXa5qZbNXdtBzjaAKo4mmXuyo",
  "key33": "4Wbk8PXkFM4SpNUmpwVSroH7fGunYBPybP8zqTBmQRboUmuz96jC3XWsKvMLQr2HShxaPGFMX8i5XkUbfcF8R5pt",
  "key34": "2zUNBQtj2wHbTsygk4gj7Z3RDyfzL3vCLmwhrDir9JX55ryGvwFddXkkDXAsCacS3Kg2UYoPWBJNJAg7gaG6LJQZ",
  "key35": "2djnVFP1GGSH4cp5TWciCCggFpxmboaTksZRK9vWY2aFCYyQujrtGuXiHKRGMcoCVqFsTFAmuiz1CzW1G42UyLVt",
  "key36": "4mwCbBYScSBVHst5Dp8SVqcsXUCrS8Mj4gqX5prbcZMVaSVnpmuL3Y4AvxfvV4GKYkVZuQgLtJ2gJD5SF7nsoY5Q",
  "key37": "2iKVBFuqDJZuKxBcUKnwJHRYjVJWzSXj8Tj7JW9ZRbrC3ZZc9M37LjPt2QcV4MTDTf6h2N1SY41nwbHE6nSW8R4S",
  "key38": "4jaH5foNtt2a2VbJ9JHPihAteWhheC9PS5P7FTJU8KHpV9rcdQBn3ST3mHJJnSyv93J5JXqCp3YjqJqXT47ypuBJ",
  "key39": "ixWijCTjus7aeUZwgvTZdE7cXpYXLGUSX9n3E6K3bq4pYYZdEmb52YtYsRxDzUTAUVaVPiCnaxNwqh8GfsbidXC",
  "key40": "3L6s71BsQT43WfbT5RaGNoxNyvj5n2wXGpyUsuk8tKGqbAb1ueuXnFxjKTjr3qrX9EaxLE77TrMpmdsMKsxx4xct",
  "key41": "uvMiM3BznN4AEFuuyoRFGRrrBD2GACxzQxgyGQ6oLUuMUcSVM5iib9CwgS3d4bvDTcfZJ1WCHr3bBJTGqX7a9CX",
  "key42": "4T9jybKRPcUg9PTHn9iPaKhdE7WZCL8JvqLkC6Ns6UqefndSXgjxrNBjyfB7ET4bJWLMGacw17MRqHLMmQSEBbny",
  "key43": "QmPmbEGYQbWeq82XUUrywJqgi9PxaJmUmmnS8C9RT9tqiaZsrWmPojvP4V5DJv6Krp4KXnYdkhNtUK5vNaCvMmB",
  "key44": "22yBx2dJyQbxPtDL1ZDDBxixtes9tUk41SR4kPZBddmamuqhL8jHv4ZM3GH5PHrwAdTMdFC4o2PQFBTJMTPDmMNB",
  "key45": "uRydyeVvEVACmJfdDmKQrMwY85UHsmuK2r8homUBvyv5vijHK9MwLvDWm4yZq1BxYcJq5PRzetaThuSKBAfooBg"
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
