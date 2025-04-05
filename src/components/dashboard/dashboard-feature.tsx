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
    "5rVhCyK2FLi5Cz3Y4ZLYeJF8cwkmY3pTkNwPAJWMzTDpUbZFxT4tDEPYunXJgawiPXVCM6ve3JYixUCbVUNAiGZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XtkfmvoSqu7VjvLi8sVVhuQTVEryTC4L9XvrY1mL4SrGjjXhGSd9Qb47MDKYDMRKVC8KirXLaf5mcZQ4pUQ7sv8",
  "key1": "51hTKu1MtWmuH1PTumZ1Lmy34kXqBJsxBnUidMrYvDB9Bmed5j9XK5QqSqTwGcUoEEpvRzoTxed8nML7WMgU5ikZ",
  "key2": "3uH4cnXpiXZPf5fiuhNDNpLNE3qWYqbs7DjBEwBaVm4LF2c8gXMc6Cfggesjzo6a1ii9bJFPKzZEe9siQw23AXRS",
  "key3": "2Q7ipqbfsZGDEA8Fd1RKCg25Dj15DbkZNi8c65Sh3tSuTrH8vUPqC7gSRfbsbx1HXD6zvivwUhyyTnAHcnJF5a3U",
  "key4": "3pvrZHveUywXubirGzUGpoi1Ub6FTLyS2F9fmJNhu3GZA4fdkJhJ2byz8RgpT7YkJfKTNEqCD98HvnxhUZrvrUqL",
  "key5": "3tiazKvCvMhMb2wNjZGV9EoEx8WegSSgY5SzWRpRNs4SYJVaaDpgPs4REYzeuApoEx7zVa5NRn5izAhAu4DkahLo",
  "key6": "5uHLety5hfN7DEwi72dX1i1K6mR8YTRD195tUo876wVeFUP8ayDmL8NxUrNkD1AABcT6oC3MJp5jxJsC3a9mk9tu",
  "key7": "jRjRiXYRK93QMamnfpM9Ex1ruuQBBKEVrYXNYoqGcpPJ3fmCB88DqRqAkm3HkeBsepq8vK6SM6QMNdgwxtqRgv4",
  "key8": "46cBra51duAUcLfeauGTXFf7UygaEb9uqxZu8RZgfPQbZejAxmEzviXBUcdT67dnnFJN2WdFRxttZ4FgkBiQXNCk",
  "key9": "27vtecCv4GVMeAQUQeS48CJskgCXrovPAaQ3fPs2XnvihfBtSKDPqXGC7ncHjgnSvcSDiuSheV4hFfQxWGtBCjce",
  "key10": "US8evwLQrzjoiXeM1QPu1AerTQA4GTJagJCdqQ6ohRoXH3avn5sqfo2bvfgHim4SUNFaE7skDhHq849yubxvq4n",
  "key11": "4igRf2DoFTYNYSfMpkbm75eLVt7hwiRtPzX21pJQEnrHkmb8VbevzUbwz6oZs5umuraojALmERHorEzG2LP4ZPxn",
  "key12": "2Lri4N9necLw8JSkAkCe2CMvSuevxo6d4KcbW5VPpe1QSzgpa2rnUAnWfZwzomPjW5HPmDbiRzQHsMZGLKw7ZNom",
  "key13": "4hatxNUFNMaJmzQrvsnqiJXD1KnNAscsdvNnTSeCcdBL74bsm14shccFr27L8UaoY4PfgYTV4CFrHe4EfpUY4v3x",
  "key14": "5EeHu85mXoAmqp7hLZTJUDJGrtNfzr3jMbja331hmaixdTxbL26oTYSwTcewBFP5Meiyp7V4t977iRuB814hvrLh",
  "key15": "364nw3iP53C3Sjnh2VcmRSgzcfziu9bYR7pyDLKyh2XFXDieeVUjRGgNuaCGemvWupKbpsDPN9EdzpzgABhxamwD",
  "key16": "3dzTBHqdxLrcE5nyovxvJwBZsAVry6RS4kJ2TMNp3nwKw2y7g4DRvshoXN9EmXStHJFrD6ncwszaBMLVaApkxJ4Q",
  "key17": "3cPW1nYtU1dnh9WKbmpv45jPb8p9UZVEsVewpyQDfNsZCLXxdXibhxPDRVZzSkvtVXT8QPYmQMiNdzrYfVPeDt3u",
  "key18": "3oSLhbQHuHc4rxibJicYdBQgqJ7hk9MLPJy1UQm8Z5ttSMkmGRoxWeUqBGaUH7gfVcMauAo98RBJwAAmokTBzEN2",
  "key19": "59cTPwrBThtn6KwveZAnBJKWUh5gsftHpgeL1qYpuwwBFpvxGJWFqDnCmajKLa7LHo4X999f4oBt6xsrM2LaNhCr",
  "key20": "4i7qeQRnzRQGoEJnyypcEmga4MCVnxrPY4HA52PMjoRHYfbqmUpBCmW327xBWFYe79dNP6LNvgoomJKNuyLHNP45",
  "key21": "rSLBKy9FUg1JWcPozbi8pESPkMyk1LfSWg4v67AAmBgCQ8byBQBKjk7sLAJLuhV2ZBWfUjXngih46LBiDB1iNMD",
  "key22": "3kfRraZRwny6mcdMhe1YC1E1wt5wGW16xFSucxmfYuK3W8dyuvmwXAFdGLemjzNnbpK2b5aQMj53WRPK3E83ZVNP",
  "key23": "hmyKazJmKyH6zzbo4BtWHaBWarxSTG2feUougt7Fb8oCfgkqpTX9BmAPJMrqZPyHEaWEAcGgmBSLJYtR3E6kYbi",
  "key24": "4WpqkvvrJfHtWMHkCF3EcMkY4w7bAdtZxQG52p1GPEoRMaLznn9Zq4dGhoEx7honUkpdQvgv8GnKK4yCWgNbvfpg",
  "key25": "7asK8vNChNTmxqwFmDk6cU3EdrEEuFntV2h2NY8xVYcyZtbGxqcsMjEpaFrRBuAFwrA1JnWg2yTfPN3T3HgvLi5",
  "key26": "5X6M1Nd1Vz4DXpCvFYHccAgBh6YCRd1pnmhH54cn9CwE9uvyxFkHwkb7dLPAgLV2xBEWiR8akoZCRKpFbn7hVviw",
  "key27": "E6zXSXXJY1aomNR13P66BGXUZ4qvd9ZYMaWmUQozUxyVD8251d8SxJc3aQFz33XD1Red1TtN4TDTe2mJFUque6Z",
  "key28": "2YLqW1XSXszYaYMFjAQbTNwYf8jRyri7bXb36b5hst2CNa7skSrbbKaTiMoJ7sAHirEb3wdVpSdX7cMNfXFTRAZJ",
  "key29": "Pkq3Y6vhUqC8pHaoMLaiGAq4dRkDNfUUXVZBGamcgRHGB6onYixaV5N9MErATPSph8M5NwqYyMCpptvaTJ3eJjw",
  "key30": "WkfRjTzGhWJSVZwB1m3toFXncJFmE4AvpsrPWouh61iwbxaNzK8koLqLA17Wa8RJvVpPW3yYdo3W7bn3dvYnfTv",
  "key31": "4p1Yg1PFheb6G4UPh6oSHBXEZeZEG1BZR5CXPdWgFyieApYZdwfDFQxX4U6SEkCxpb73BwiraW9QVbvPBJiCvQxS",
  "key32": "3eYYcthtKBYnZZeQaK7GsE4oGrnaT4TCdouhNCDy2o6ZBHKqyjc2dCMC46o6tZeRGqahvonbB94NrX99cP7QrvPJ",
  "key33": "3S3XMKqTwQxNYgoaqaPdMttgc7NnnUiaL5KucfH3NzDJxvVSR1UP3D1xodvQzrsMZPMqrJXNf4vbwPExSsTctmhq",
  "key34": "48gSDmKkeGroazyC6vsobvvwvDHHbjxxYQqMS4HEJn4Ayy47Pj2bN244uQnfb8gCvBFk5i4WE5kHAfjF97Rr8FkU",
  "key35": "5tJRRsWigdW8Lseqd3mAYCFAbgYbKLssN5oSd9X7EVs67YNxTTkySUT2CkTdA1tZGG5Pg9PNpL8a6azGEKcNdDgc",
  "key36": "4iiDVWMooejh5Hf1U3dsc5oARGphzjq543eQbuNxCpVgy3QSKJ2yWJqGpLNp4yb27Fz7sNZgCRj1zoZKUigrJoLj",
  "key37": "61suUaUTYxPfot9pdmguXuXEt7fXNpFynddU3DegEHQb6BwSeiZJv2kK87eFxUJmHtGVY71y4HTRZQxLajpGiuCM",
  "key38": "hPds3tCCgCbF3RinoZCBs1iDkVKTNX11qYzdkn4ETVozYQo5Hnupd6boeanf31246z13x1qmciruMfrun5ygcNN",
  "key39": "YjGinQRjFWbYSZM2pwiwhvaWoKqL8rSxMAMe6jraHNe7SFMYW4vsxzjLG8zDMAihEb77esQ8nKCZW8z3eVXr4uq",
  "key40": "3EcpMn36Sr6QWdLd3iZL6FKCRPQWC6t1eeA6gufrT7BTpHfDTPQ2nWuYNDnfNtdWBsBB9y3Qp5jm7AUDF3erQEKS",
  "key41": "4ZEJscvXS4G2ybX2edptNTK4vigwHheh4vzzX5nBQZzfjY8RTEkzMscKtEjEfLr3tozhjmd5d1RewMa1zUAJ7Fxb",
  "key42": "5CX67FrP9yZsxjow1GNkiNRpRfxFvGCncDgYkM87UD2QSdDvPPYAoRWm4NpjzXkoBmKo1ng5bRQsSLzZtRYcPsiv",
  "key43": "51QeYUtz6KmVSj37bgDYA8JauBx2Qu6fYo87q7KxW9sr4h133fYmkFymXZ7My3Zz3Xkmpd3UuZM8hyb4KtzUGTEf",
  "key44": "2y3aZPoKf8gqjbGPfufAwZRUuxwWdoMti6i4Tp9413EYr411Mbwcbj5FtZcgfxCzPeiHvhUrAYR72jeGp2qkJodZ",
  "key45": "3osLcAEs4Kdct6G4Z8m34ky2jJqHBCarYbjPNbCkQXPwGDq2QGW9Gr9MFQ5Wq5Q4MBdQHkr14c1h2JTzM4EwsQvs",
  "key46": "5FZ2Hgc4WGMV3WqHrrXZiggYDAqGn3DGJZjq6qXvtGpv3LWptESMbWHcADhMFdiKdTo7KVTaVQtU2rUz6t4PxYsj",
  "key47": "2vWbaTLYAGTxpxtjNarGxFCraVeryM5ThM5cfMU4XZKB1exrVUw4nHaaasc91Jo445Jc5XNCZRUMJWx2JCqkct3y"
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
