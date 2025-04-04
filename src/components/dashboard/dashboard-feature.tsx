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
    "5FExg8b2tvgurKh6AhJqFzqhVMYRsSKvkvff9TT9cqcFohsy2MXT62fDSChXEFWFLmo36qccFYvWHijd8zTXhbgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31DixubgSD515NNcv9EVTLHTKmMsqxMMo66mJLEDBNVwbv3SUsLrhPXAdAoVM2xZnR13pgVJ3B1RyUusZxHnVsKL",
  "key1": "2ZZfJ949gR3qWnnSj8yNH7tsyXvNVHHMUMvwQcev836Q1rdyxSqWuZa3drNrJf1b8LnSNfd6DMiJ6pmv8SZQVs2E",
  "key2": "2onpQUJYyMgsxjVServvRJwPraxjQVxh2EV1y5f531X44sS9FhBNTuyoM3LZCSGHD5f5vmpabwm5JGUNShhHnoNd",
  "key3": "3sYD2jrK16zypyo3Ju7RSkng6iDakC8E6jyJwA7LWRjMq1sGDpeY2wLwMKtgeDMiJDhr4DPyyVMC3Ap9L4p282PM",
  "key4": "5Fi4hyciYmZUtKuyNS5QxazP7pRd4YdutAetR1fw6Mp3nhU3JWJyPzzd9RRKGgqS7tsrSvveisLyiDxCe9xyckXt",
  "key5": "AZNMqJ1RE7jCPCdLubySvfh8Xc65Cbt4DMt953qj3L7KMFnzaHWgafoY2eAWrhaACXkBdFVeJTU2dqjRq1kzv7u",
  "key6": "32TE2dcEoVEXcCHXoKfvBfvZm1rk5PQykKWRpSWEjiRehSPGVWCh3sbaq97zsaAKHGR8MffpPtCQdJCy9HYPsHoj",
  "key7": "2ZRA7xDLA974T8Z8gkTLefmpifWAg95TzhKsPRQFUGT5Cu1MhoXLPYSyzyRckbyb5uhYg2F4akdboYdGzij2Jwm",
  "key8": "2ePwsmYdbE1LCxunYRuT3eWhVkrLrAcLtx62mBfBTS4B61grLTxfgo4cnrdcqmdhNn1UQs6AWjdN4bA3wmG4D6vN",
  "key9": "3wqfTbuH9KSbwpj1fvwyJ69BLYiyfMqSDeVfYSGMobQNA8NHHtY3B2Q9DoWdir3vY7SyjGD5HR9UuwT6yPt6r4xB",
  "key10": "45QQ4dBWfU6wphLQgijx3172ffa4VTSCfvLhXfiYPzyfTStd7WwNFu37GCrGNvATNevnic9G15ieJvpq4HFZEr4z",
  "key11": "2ykWjYcfrr3yg88vAxJndj5on68YMh8ZLpz2g9oxgTD8wJeUhrqqXGUXfuZN5cWhJnXoJ4FrwMtqq3hK7son96TV",
  "key12": "5DV8obmscsaaDFUXeKQReopYzMBRiAyGpYksSaMYSPQ73FzHvmcxdtheKyuKPGFhW6YHCyVMNttMwhDDGhMHfgxk",
  "key13": "4RNSSP8DSSp4rwwEJMHodb1cYrNE2gBHycBqBfzdSar6KM7dN99zrkNRopyPquNhdV4wrsRbhcnNt3ksVMQngUwi",
  "key14": "4JaiaWsfE3yajL8igzn6UBLcNsy8PhALi9wTTJuZQVV2biPFrMFVDayxnBwKmPxqQhLrrraXh5az8yvUkWVGNHuy",
  "key15": "ertii5xi5GAdwEBYJFEUJ2BgqywTFTbnC45XmzgS2FafkEt78xtH6TFXVEL2QzbWSZbWRwssEEFEZtzDLSR8Yve",
  "key16": "2NaSku2ywnpcXehNuUsNkjHYzHoeiXEpZLBcuvMme4S5FycZTewbvf5oUEjZLrsT529qyyaaobs37MVeqhZdNgKs",
  "key17": "47XrGqsX5ortPPEzXf4i4GyP3hZLb8YFYKQc4N6fdi9psMUfUTd6DgcWeM6HFx3g7WAcLBXAiTRm7E71UhgbjHzz",
  "key18": "2uFJd6hHRVJkGrpZSW5HUoYcCbryJ7U2Kis5Q17rcBW7VxvgqLLA6w1TaSqNAdEbcaqUduoxFRjtPHs4eTbKVtv2",
  "key19": "459GctaB13brnfgRMo3ebbUZFsyuWnviGytxbQxbiCpKrXqYfBB7GbngnUfh1PEKgwFBYxomWBA9D3QwnhrEaBEq",
  "key20": "4cebRFcyatEzHKbbDP6gUkW1z5SYiqa6eWNqjXpJD97vb3mZDoPD5kWkK8SpoSUPcfhgtDsYFfQ9W4GURvuiCcTq",
  "key21": "2bhnTuhieckA8fDJtiv9HTN44ddDUGmzL2TXermrSsaz2jdWZC8RSutmbKaYCegpVUAMjC6fVVHraC6boJ1ubkQj",
  "key22": "5GxBkbQVpgT9gNxKCLuE59exs49wj5QvgxT82sMdMYKnxgMnTSDzjdXytNRstzyga71WBvBmFXE2KWmLq3zdzNED",
  "key23": "4SeVZrg1DXoqCfkuJvKuHasXWoi9PWWGGDnQTvG83puuLwyN7WfRGXGyhcRijzGiEhSkF6sHdQeByUDpCF6NWKSK",
  "key24": "2GFUGakNsXCjMsMsn8KvRXzqYHaYfHn7ZEHgJCBwigEJsBGNP5dKUgBZWLB1e7FhmkLZgNWSg43hdvfvtAjJ9Uq",
  "key25": "qhecduYyEZ1kGRbxJNpbRKeksH9g8YSGTFG9dKVhGQHBCzia28nL7L44cEYzHr4cxC1afYUKfToYsf5rtjCMxpi",
  "key26": "52WA6RLDkawA26wViWooXedgSCxvkWJHJWkzZWB754kaRtQTfA1EC9HiuS5D658VpvdSwauTAF5vNhxDXqG2ybvr",
  "key27": "5GWSB6DoDbTMr4hNBSxtFVN3RfMZwZmHgTxz6JsnhaR1ATiUfHKxHHAVfX6xuAEAMkur2KpcaMDupTrQjeCgM4QG",
  "key28": "53oSp9pk2DwPECoNHNWN3noZ6jqd6PGNet53zPDnbqeF798Gp9vgKH3NN6YQvf6gTtPcS4cbadyrcQc5dSDcoDjg",
  "key29": "3UYiLtgu2p3r9mgcXb3FX52fQZAKTHdd6GjokDTKHdRt9F2Z7mygwqM1QXknKLxqdCXhwE4LTDmGsnXsQVrhhrxp",
  "key30": "2vMaGDup3WLgML3jV3htsAMpNC8R65jRu4pMWDPZ23faXZAvYxHnaorXe85yjEHJzDvhkKyCWRVbstAcH7Nkkf8f",
  "key31": "4x2vuabKHmW4AeBTpaSwXWDKgQL6RG68vBUS1wCFxJ6BnWevsjxAVf8D7oNZbF5xiesRE7B5UFsrtSih3bntogir",
  "key32": "3r7EHMVmkogruqarZS2gHv1wep7pAmdS9adXHj75YK44UHUvYsnrTx8jvdw51tnE8jriVG4AVmvTgEQPr9VGSFmu",
  "key33": "QrEEEEd31gxSZsdCBwJP6REzKBRsqn2iEmfsij4XwDagpNiDYf36JyvjF9v4beNC1HLWRAw826pEpm6EQ1YF6Hd"
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
