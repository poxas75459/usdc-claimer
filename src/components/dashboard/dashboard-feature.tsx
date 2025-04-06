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
    "5M2rsbrWEu4CZmWpWKHioC7GNKNhnznHuk3TskisqKpfandtGJNQkdDiaqve7CfSoMStYzJtn5M6oMy2KhaCfMdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YyqfUYPDmbMhxhX3GkePnRzLBtuYqzaYAXZ4PmobDeempDPAaDNkNG3F5CUSWj21mvPDJftB22E8uUxvzXgbqZA",
  "key1": "2QYtogA6c4o5UC7s7QkyJs16JGfCYtcELifZVtpt1LmKStZU2hZEG1hcbvZr2Cb1V45tLLQMuBc3e1oLvUzk8MgA",
  "key2": "169hGMk9VqeubGZyKF1ppFrcwSLREgfPcDcuquqpSN7hsNuzweBrtQwtDzbwwi6JELTk7C6iukwj6jFbpd8RVjv",
  "key3": "5SS1TB9cPd6jPKv6irfAvz64RUFk5f2pxFJMNUa2DcyogAydEsbnN4KZAZYKmLiznmxX34YJ5EJ83pYxV11voqNs",
  "key4": "3DPthXFhraomp4u9bGi4qJUxgieLCm9P4YZ6pDZybgeq8jfkh7PuDVVzh54rmk1tXWshy1T7Lj82btvj9HieAFbJ",
  "key5": "23LStgHb92hsML8DqaetbBR1hxHSyxWPBsqWbbMtGtbcDRPh2vfUL3P37cpptrfKUC2mQqDwKXPnemZmerVAi3Gd",
  "key6": "2Hsg5DMFc3J2nDkwZkioCvDRVmAaVvTuzaN3SnmsqN35GUzaDwiq7c79zgbKgWSwXr4x47or1tbRQhbVQsu9s8x4",
  "key7": "2prCu4QL2AHVpETBH4kbmtmTNYCHoiHpLoHLUL65BKPYu4aDAxsPHacG8dkeATbNaafYAb1Ma6rJcxNLWT5iTrQz",
  "key8": "3ENAadJDxCdReFMhFHXvZzHYxZurKAwwEi2i5nDuQYLp6EhT4P27edZScRTY5WBUNURsYiNjzcwjkVwFgpQpL3Ep",
  "key9": "4Tzw51dMjP3h6Kop7KHuaxoAeTtiM4MfenypJkB4c365hvGbTeAHAv5GuuNXgTSEE1tWpm9xkDunprocfLGAmiUw",
  "key10": "3fviavasCQhsHeEFv2Gu8y6exXXfVtmbUFTtbDb6rbZRNytWxom7ZajNNnishqLWroAPebGZUNp5CgEh5CcX9MBE",
  "key11": "65vXD6pkFV6rpGGfjEKTN6rdRxK8prcSKydpM4UHPeDuFPfDxXga5UcWmzse9k4YL2WBZdzVb9KAL1NLbtUzT6pW",
  "key12": "2vPAEjTLNcE3HfZ5RF7hBCFJySV8NSq1YLM7TREjAzyPFaJoCeEkAoptkzmR115P8HiKZp9nzEuiz5gMZX7sTSW5",
  "key13": "3es5iWE1GJsAHoCrVDjCx6vMD4bKQyVBarqY8aj12Mi4PCGdopysvAJs3ndGd1LGfoJMiLXJuqLSrbHpyW3Q1W4d",
  "key14": "3qmWyxCWp4JyWQr5v6FkggnM2UNTvzE7QuN93CoZVwD8pLqyn1h2Txe3M6XwBFi4SPNTk4Wx9TPiAe9fBqxZ9ipR",
  "key15": "5QuMocJhFv7wBZhHho69SbFTV4YMohuE6SCZDYvJw8i2C1ReE57wx5H4oTt98Cf6poKX6pvjvGKivyenMT9FxSJM",
  "key16": "4BbHicsJtSiZQ1ocebMn4XKAzCMEtNmXRa5HZ5VfV1FMriuGRMyUGMef8ed87mWVgEGmsThJseeKZvNKXkS4tzCi",
  "key17": "2Np8qy7EkGLpsWucyUVedaAC3fYiCTPJs3MyYFCzoCuPwUvVNQ2tvyFZ8AcnXaZUB4jPsUATaHTZHqNaHMbSu4a8",
  "key18": "2NoyjSFRy95nLbVaxs68LqsQuT8qmkUe8JeLinTsmiYJ6Gsqrc6HtSCPHFNFBec4z1kw85HuxZTzBsVahAEZNbzo",
  "key19": "3mBTJsKsT5NAxDnzfgSWYLGeJcVDkbKYYjocuc9TRVihk98hxfTgBXxYkx9MHd12YZDRJAq6Yc9misp4wfsB8H1z",
  "key20": "3DtXqkEBCneFVKtGX5JjQraea5ZV1okSkpWB3srEfUjYzAzsR8Hfuf6XYJbtbnE2GDQJgdAAwyBKcqMZCHAZWbq6",
  "key21": "2YjWFqXr4LLdjqW3uEWb7V1hgnTpZN5XKJFFUEEBDeLNBaoha6cqxTx3w6NncteJ9Ay9H3iu1DDVtYw4qP9GvKpM",
  "key22": "3Nejvxvkw4wAF5nRAfa2McgKqVm7GY9CjZTjWJSTJ1vJVvFigqoziFfnNCJHC1Vp9SPUG7SDYARgHvLdc2NoqerT",
  "key23": "3esqi2k9kM7ztnQdvbVJhhi41nJiaLw9Ur5o9nN3eb2CCpxeNkfb6UAvaGbf8zMRNUKVPLHBG23jG9b6KVWuwi4Z",
  "key24": "496NiwUKV7QbE5i5M91x6MzLyS8zEDf2YCMWuwJKPXv6ZeWchaxmdDC51BqzSaiuENvkq6b2J2tAqqPehT722CPs",
  "key25": "5VTwfx6bEZ7ieNjzLAU67ADf4FWiU9aGUkMWxoRjBZ3MtLEiV1SSsX9M9paDvhZyooTauuG47jR9CZpBbkrHAEsg",
  "key26": "uViircC8jPMvWb858TBkdkaq4CRgCJku1w47RbcM9S1CmsNjm4KPv8Bkmv1jVyTEsbAgL5gnMgvEeYedSCB7zww",
  "key27": "127RvdWP3rFRaG37MqwyRRzDnqx29GKFUCXVjyysJcHa1NUCwvQxHEMGD1EDBxe8bnyK3UKgjbHZW95tMHP5YBZL",
  "key28": "579rwuSBcH6Lc9oXKZUGhApRWJV7ZfqX5Yykui3i3ArQ3Zrt3j6tq355Z6xNxKjALv2LfjbRfxrKW31Umd8mCAkH",
  "key29": "5ozLwxk3CzvEGLypFb3UXJSMW5YYxRa2FASFtrvTFDKsJB4JBvkkyhbUsvaDjGYEBVcipcohw6vcTGdc2jkAmBqg",
  "key30": "359E6cYnoPXVkKVsnFjQJzkY9kTCnr4uaZ1Kpi1Cy99iZySb7Z8NhWAdduyAabiTMhfTpQsCkXvD3rGvBZJ63eEA",
  "key31": "2Epk9wmk9Uz1RAi48qqBsELLEtbwH4EHwrGC6MTeokdYpBYGXsTrL2ADLmK4S3Biru4X1ocvJroRTXzm8AYd9QKB",
  "key32": "3aUeVdHgRQNNLmHMoe34irmR1U4UhJKMVxuzDykQCay5zcKts3863oQALuoDGY2R7PkGBVKWgo48aARdosGrUNB3",
  "key33": "3H1qxsgywt4YSA3zTGYGgC83Kpwh6YjrhJLWSNMdPjBiD4pJvYqCAA9UjoVWYDZdBWsMQK57VJJsEdfKHFjHQ5s3",
  "key34": "5946JR7XqYB3svum6PdkbSW1cDECZ1GzMX2N6vPMMaXvPXGvKdJ8TTPYakettrbi9viF1KCHF6rT62N2CMz1oqvK"
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
