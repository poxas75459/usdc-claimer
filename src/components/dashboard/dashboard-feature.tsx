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
    "38xGUAg3xcZa1Y2KmkgDXr9Da3qGeNADwrq45BywpnRrgZ4XWQSKsgvZRfqJRghZiSNwY33kx9XRAG8hNtzW67SA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YSB34qnLUQoBSheipahzhfzqJhKwaPyJhFFJxVcP4nES2updCFqrBt3ef4HBT9CbSgoWCWeD8Ap4CsXbarEWhqh",
  "key1": "4wP55vgi7HZ9mdeZKtboRqceMMvX93BhcZGbufaQ7NxdgXzaqB4GFri9zPtooFnMURsHTJMGR6L5pnvgCwzzThwg",
  "key2": "5SEaD25Jhgm18X6fPHHPLdFozZ3fXNDJ8kPduVQ4sujbziLue8yGwoV1kVga8BYdiMF6Jq1GaZnCB7GdsASUrbcs",
  "key3": "3CWyCRMCBSd95moSzDNvdrpijkeyWoJ55Wf3R7vQPhE8YMd1iqXMPsrAGiWKfLJUqsL7htKpFLHtHZCQHUo3zyhM",
  "key4": "3TZPDyJEjb2oEeev3jwX8Y9vD5P99iNcFAv9VaPunLvZQk8M6zBtrkMYUrCKAU5YDbyU2iauykVja27irNwwUZJb",
  "key5": "324ac3teuWYwEhrZQkkEYtekQKiQgshWUwraGiJFYznGoXKWXDsEUh3EnZesj7aAVTChtjR6WnmJr1j6iaVowkQL",
  "key6": "55dWyHefa9ANJ9r3vJJmeUo7KUEsfQWjTm4hjMwDfRDeZquyBQR6Jgisd3CimhvWjQcH6r9mKdLFtx5DXhpEfwpj",
  "key7": "5kE8wvqQ3uGzTj7wb4gSbdXdKrwPoqNgxVhaHRqsCxjpcer5mYsdGg2UzWPxt1Zytu86WVpEgq4DpZvbpuaowNKJ",
  "key8": "Gp7rjnVGje175QCtPjqGBbnRRGFYuJGkDPWmBkfVRVUCJ4wW9ws8fXzJ9LPKa2RHaiivTPunw5QRZz87zF4tJGv",
  "key9": "5vG3YzgZ2m1nWvVw21PEt6ZXWco41K41gJCzAursEEaChMGorfX7cB31VeFb66CCQHwrELbVYDWx34RfQPHtmSYn",
  "key10": "4CBpwHrurDM8tKnvNhkVZ4V4FVdLtVmp37v9p6uaPoWRwqYpic1tpY652Fvof8KhGtEi9rQ7n2dsS9GiBDSQcSSo",
  "key11": "4bwkEhHwqXBvmJtfP7g81xdoZQ7xD3RsuRjMLNUEnC5scTgWVG3eVKs7cQpUMxwknKCba8F3DjFd5duzKffKZAho",
  "key12": "3FnogPypMwU1AU3itfwazK74zykFZh53Jty3R9psLyXw2u1k7qcr2s6N6E577JdYka6HNMHKjRz7nDwCa55LLMUJ",
  "key13": "QzP7BXEY1WTrQsBaJHbq78kCHeh5Av7Yk8iQGqwQYeR3SuqRkCoavYpRqHCqGPAzpDcdw7vbun5d7bVFaQ5xMKC",
  "key14": "cK99RFKxwPxpGZbeJxDopSGci1vptz5dt51RRBHxEKNRrXb4JK5WYZspPRP3owELkNSi5KwvhHX6EsQABZwiEe1",
  "key15": "3P58AobdsWaU4PRxarr5Jn4EcqmZkavizCrE35bvukRivv4ePSYc38C1Mwuafuv8EncFwZhoCNjHacobTGJzVcqk",
  "key16": "4qmjXgBkueq1pk196YRDfXefTqqbvjd3xYhQkxwWKsyr5fmGsdxNZddhdbFbTwUW6s5djMX3p3d4cLJx6bSiq8pb",
  "key17": "stNBhAv5XmPgCd9VjDUZHTJWStcNV6ioAuWWKnvWoJeSZPLRxzrsZca3bqxR8rKh2rRuh6SfwRw7NREcho5Akzb",
  "key18": "3xhp49coGB6K4FXqTTLxRANHVQshrtjitM3wxUnnXPCNeoZi2ZfXfcyMA1yyjSYpKwSRPxcvMDDqcDXb6BFJeNgR",
  "key19": "5egMuD4FzQQjjeerYJFoTa9pYd4FR4knnMgmcPcEX1MpRbZEbfj3GiC4qTKGQUAtiTAE7GkmtoTNrezQGNoBQLBA",
  "key20": "9NK5RzGNKTQz3Rqg87E4UXUoihQtKhkqi7nbZBpuJv9TCTEE9q7WyHpaCNubxBw9iccNFEn8TTrHeupPjfXkDd2",
  "key21": "3P2DAM51PaRs7iucxaL2DkKkz6fGUd8ZEspUt6H3oLivSZoL1kgwjPy1Kv5s2SWs8gnyjw6ehUqV6Q635USDMUJL",
  "key22": "2gjY3AL1w79kobP2HDhs6CFNLYqXA7whe1oLoWZ4dPdfcRCPMAj22t84MQey5TG6gxwrghV2aytnyCtYrXo7m9rS",
  "key23": "2s6ncvFd1M7hKdgaFKteo5BNkmZ2vnduo71D8ANKtPKjWX3mqae2dyUukeMAEC6n4YVcxxwuLqhawvweBtns2Lrb",
  "key24": "5zK9VV23UAQRAE5VSWbGKiK873nqBjcLdzqnEceGczG51ojHAqr9R1GugmdLyRFEJoobdckcUBdEDZEyiRgrXhVS",
  "key25": "9nwoY7ZSsnYkPBEh5TZVQcgPFmb5wiYBL86jWsQU9LdV1sz2BABVedmZBVTBS8oMYLbxLfMNR4oLPPteaEgHPyR",
  "key26": "5fF1DNhjTkKKPmTPrgULMPhrP5zgKU8ZkbpzChsBSfRN1g3WKBcLD2fRBp37S7pJ2R3E7MsQ7QApBDRJDcQ5K4RE",
  "key27": "3TQSh7Gp6RThu7b2Y73E5D7EimgZFDVcaXWbk8Tb2gv5g9hftcnvbAfbViVMQ85uPDVAD2f4qau3TqZZUFaZUzjp",
  "key28": "jtebtERoxQGz6czjpFVQF1JwpEzgayzGor2pY3SAPfWdD5uix55mnU98cSqPdcLDU2ZFUVVAZ5AegVnyeGGRJtG",
  "key29": "54JGAXCMkFXAFyxAjGoKVSfjjm4E2ok8fyEpH1Btht3F8SH3MKBUGhMpV28xMGoXApQNCwyAjcvTcaVoY3Z2sieR",
  "key30": "4Q2yKFtdEtqnKwscbxeA8t6K6q3HYRhUHRyDtPQhrEG6ax7tmDohT8bqFnWuyNYg5jC8n5hYvnNmkm3wYTewHa6T",
  "key31": "5LbPqJKVDBgL9Nsp5RKQ3sxUAtDcZN7LPJgEDWjzwYfQaUZHeWxLKKLcZ6nKenEcFx4hFfMd1FTRCjVw6sRac9BU",
  "key32": "3KZTJe5EbgH4KzLx3iu3CJhmpNas3wYQP6ZYy4jCRUKsViWsut38NHVwJNcFAGBzghLwrXyo6oqRCBQT4n1ujhCb",
  "key33": "3BivUdNpn2kME5YFic5QiZcjK1FAVyLyv3KptfvqwZ7htxxUAjuDqojiFYkj6wAC9DgKZ32BdEEbpY9BuxZVMer8",
  "key34": "3kF4fpgBnzjUgheomg6rBtEdrXQ7HXbFJEWHFepLTuTJSRnQF8eE29HbkugdLqiHHtSVbp4vzA5fBH3unGZzm9rf",
  "key35": "55ALHTJSxVM5KtHS3EHuCdLww5eh5D3fXFsmB7CJ2D6m5fsqfRk4gVQVaq2pYm6U9euw39asNUB1tj9dZeYpKKTC",
  "key36": "3PJiwSNd11k2XXx5s2CXxucVqDFAPGpgtJYKvdjgEHk4zAqXe6fcKXv4Riw8jfYGfyizNqJZqm4ek3f2dHMRjzSJ",
  "key37": "2Sx3a4YHZuN7cSKyT18mH2mh62MFoCQN8ym4P13sr2z9ndE4PGgyfreRUyNNeeWM7c5TNQXBQQhJNZW5gEBLsztF",
  "key38": "tESMDpDDxgMCmLDCi7GnPbpmzMoMX11Z8xtyQQbzqEY7g4T985VBstNco4FqLCBDgSdBN5DZavWPySot6u3gXSw",
  "key39": "61EwJkspbXBy394NjitjUnA3kkNWdCY8TPB7aVpmxfQHgAMG6pjXXXDE1hPZN56YPT1BQyhbT5JpAWFqAmd17Z4z",
  "key40": "271jEDHrQP4NEcsvGCxgmjz8p8AZXtH4bYqhSKMHcAPbV46ahAtp9QpAbyNg2mAYw1FTK3efPmikLQALsFbjmeBs",
  "key41": "mtko4ApfmgqQ1fhRizyKGnk6wEnVRLmxpJcL8yaYiKvPjFB82GVacj5dnuxMoQqxTe8NvBffrDuLePmW3AnC8q9",
  "key42": "KidQFnAvUV5ey4XhZTU7zFTFTrtuay82zUWnc3z1uuFPXDZAQQn6wMthMwrZZS2UMEpbXdwfpK9M3hB8p3xaQj5",
  "key43": "2hRxSpAyq96339jW79xE5waqeavpyhz2SNdB3xGHSeZqqy27wuevwBzsoq4AsgfJwz3yGmqQY9CLFyzN2cWTZUWY",
  "key44": "23N32L24U2qqnResnREb6LFoz2eyhe6LNqTh4tUwEnTXANSYrd2KBZfDd4RSDdiCTLBXSQuGbguagXPk9vEb2o2K",
  "key45": "s98ZKht4r5X97fENyuvLWjPb2snnVyN5y7L4xuC3wE18Sbp8QqCMSJZ2D2NwNLTfN7azAVJtnBxuN4dA34hcxiH"
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
