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
    "2sRw5mTtvDpwzq3K83vLyWJ98kaWuRrocTk8uL93g53rkhbY12Dwwh1M3gMzdqdnTPNTdhLLMMPJYuE7zRN7h4TA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xW7vUQTGyK2S7J7K5NFMja6kzbCxE4iL7zPbxgGfKQmbcEHvLR5fEi1rJxaVayQdmpRvuevqJfiFn4TZUfoQ7YE",
  "key1": "uHwMkxRNTS7WMWGFL78gCXeCaKVEAqG6Tnu6K46oVd4Q7VXbKvxXmazVvr8yRH9CdoySjH1CQdbG2b6XBDnniRG",
  "key2": "DVJfyszw8jwJtMG6qSo5EobRvsEgUGFMqN2FS3QR9MwUqJadzb71NNNn6fYnZmSEcoNLyaZcUUjVrJtGohhqUQ7",
  "key3": "2SPxAx8dSui5UW9pK3LtoJbU8iuBuA9kNGb1cm3F8WToHbXMnw4BPVApCRgGbhCvGVPkB4FX91nM3ZwoRCY2WA28",
  "key4": "vYDkvRS77VUsDh2Y4rfCG1FpQYKZ9w49NYrkyZJ5GeU8DNBhudRnDxvada9tKs5EhuBecg4gxhsM961qTKFiRSD",
  "key5": "3icgVm2nHwUd3H84i9h6ADoK115k5LVk54paEwTC6jGrY4CCohBc2bm3MAW558WSztaSwhJxYRFzoymr1Cu6eoTp",
  "key6": "2oGGzPC6Z1qDQ6uaHb2cTjAsZNCkMvYdpdxxupaqyCHfGfCy7SXgLUNgg9CTfbjgzheq6X313yQLBdsqnShvBQnQ",
  "key7": "2i6h37fLxVJUj6kTQcjwGGKAPsTuFkpnRBTC2gGTj55kaP5xVzQzChezvzH5WWfQ2CZcZEhM6K4e516k2a1bai8T",
  "key8": "UNEhqNVyfbzEDmmp3g9c5P9XkN7rupbXBuAHvie7YwAdJtntQBc91Saxw76DM9osDrtdj8T3tZgvgBDWm7qTpik",
  "key9": "ggsMCHMnAzxJa6sHS8BxPmWNfzxkBdPBQBEMx5UdXSfopQznZfGGynCQpLUa5HscH8bCk5bpASbzQhmYSuoPs5Y",
  "key10": "4qNS3vYLnv78oCiwiCwTPdEKofrRDimNTf2eHKd749oRFDtjc7YqaUVCfatsZzkkDyRb5nSnF2DmM7c4DdirWm6b",
  "key11": "3Zf5Bjv84nRcQbtNsp8vrz9rwP2aqQD3UNuctd5MHP5vgrZHYQ2Cx3GtrGZghTkn9gcn7zRYBmd9paTsww55pzQV",
  "key12": "pciY6DTrrbNJF6y7bfdgZYwaioVzoMQLYPgRS7Ad6Jemgf2xZbP8FeywUe6cFb4SrzEcZ9pfbzhzCk5mpceu9Yu",
  "key13": "aSksd5YTQm4UEUWQbWCKaGdXEcPxN1DCAN55QaGkZD14gWV4tDAS9UuRQwhaznatfviFYZYZzJrxg3Bu54f9KSx",
  "key14": "LTDZLYiSVBRk8vJtQqB6ToXWvXmtSS6WosQ6b2X3hm8fLvpk2LTh9ktECn7vFAzS9tfUkZq9hZCg7cA8DVzWb9A",
  "key15": "3Ntm7Y5tzZsb45rqVry75aLy9ZFPcpPGGJVgZ26MQcRXTdW4VXbvDLPyxeyhS9i9dxffcCKBM6VWD4wb1LyRrVpg",
  "key16": "YjCvDDbctLmcXUn2EoJKMnuuR272F4UKNbz5Ldc8xitiP2uXScjdFrgxnny2d3EHSbSQZAsHttfxv3RW9vJXs5m",
  "key17": "3KC3KnSX79uj2GAYLXMqRA35Ejp7RHEanhMKParbbwFCgFrNRGTmbdUmEyMEC8x4yHyeuFEGFcGr8ofCQb9T7z5d",
  "key18": "hiYZ8Jpaf9gGKKxYvHRAfhoGXxndYgMrodRVuFtDXimxQdvF5T6aNf5yv1oG8otojjz9aQ9uh8grPhHtuhcbC3y",
  "key19": "uUz8xGPoQg9FQffGgxoye8a49wEiZVsAnqT4F7W87EjHXiP8NBCw1K86SKHG6miZzcLvkRNuNBB64VZjbXCGo3h",
  "key20": "5K6brJUqmatroGTqB7nwTkTSWVtVyzPvH8BGpowfRQAJgYw8XGMjF5gVhcyE1J4AyxMjhpHozngztZFzJvsZURJA",
  "key21": "11C6X4DHiLV4yJkAu2p4VvdwvGZdYTpoZPps7YwzpAoTAMz33aZAHKpFLAun6WTtEdCB4dbSyW5SDfCoUXsUZw5",
  "key22": "3akwfjtgtPoX5A5eWy68gtmnReFnDMyvWVxqRoH1bydZ4QLsBUiuj9ve55CcZNaMcwJWmEtaWGEFZneNYxEyzVJF",
  "key23": "4sNcV4UNv2aXGV1tuMYxnpYideSxT6PM818UG8WhjH2oy96381WtpUUAe8DVnLLjmxnDeVaeftdnirNs564wgLYz",
  "key24": "4NPuyMLbshKu8KgRcUM2mhy5aAXKCMV4sznGkX7q6KmLCPbrrVuEJbR5puFB4vtx7TxjqENcdN9iDujoHCdcYjZz",
  "key25": "3wRJwZGtnNAY41AUMa9pLgfVNTBpWDRqZy1teZHvt92kwN1wTxd1wMR5J5cFoP8gdkrwDedy1MYEWJHUhun5p6Vh",
  "key26": "3wHX3pMZ625KS3YVSQhmkpTbdxdkuqKRjLFKGpxsk2QKaut3TZUGKRsREvVBnuxQt82womwsvp94PfujUcd5817f",
  "key27": "3CRBpH1CNAhGmH16AbLSRPKyFfpAfHKaFwbu9S3TXgCDxYTsAL29Q7gAudCCMcb5q4exd65ZkcmQM9uMBD7XRULu",
  "key28": "2cc3MLRRuWv6LbW41451bM8kLHVcfUvHLjXj3EEYZSNYW5LdhvLB3h2tSuULSS7DxZys3NauhDDSAuREhmmSpoVN"
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
