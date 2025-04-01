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
    "LpArJAEuaGhynej6Ciz93nEqxwfrYJcVNKCyyHzmMrVfaocHeibZh7JK4kKAJoFYtWoezAPw2ypB2XK7bbvSZv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L7tZz5DgKyMtn7Dy9q6Ggg1QnVJX1xXqKHL7qc8PB9rbgyA8j8RvdNWejSK3v3rbLUYt2QqdbTrRzFWvchAbz2Q",
  "key1": "4zrDbuwgHvwMbReGMHhvT8yXNfCmzbzRwGvdqoEM4oP66K11at5wiwZDNsnwt91MF9k5bDd3MsWZQLXUiKiye92J",
  "key2": "kgmcwbjmbPEquoV6QKRaeFeaBkoyLXZixxfgHZTBS8v9pn2TuNgF2vU7WMQNYYWUsDm17GRabffA7Y9KcoQf82a",
  "key3": "R8mmDsGbgKCS1DwMQJ4VpsNJdvPaeVN6B8aDZC1F2soeFsDPRTyCFxJmi4DKJGYu3R8bXe6EtiTua7XtDd53FvE",
  "key4": "4CdxjEDiP4XDYd1zCRiNAxWRmNN2cpKVpzBbwfQsiksozPCp1dFRTQd3ZrHHmj2n9QDMFoTH6Da9M3GRUnn2rhNX",
  "key5": "2e6YLfximeLXGF7uA82FmPdriArxzVtPHVGShvHQw4Qg2RmxA7qwxG7dACMCz4FQY39q1HQhVe58DWspRvZWhKov",
  "key6": "5Tnnk4YkFSGhcyYhqG6vXp5VDEgmgSsFbxy7evARifQSXmWRUF7HA25iEJpP2RF47Kx2vZCe3dYv8cF78BUjLqxa",
  "key7": "5nZfvPeu36qjhsr1Gg7dRcxyivEtaikFbrkoTHJSn1SjeQQbqJ5M8TFfneAmPdnXuxwLfjG3By1uY1LS5cj5RQee",
  "key8": "3veGWR9QBaBtJEurNFmVStyiUWQMkReSoVHvN2Eq4wp4jfYedKfRVgbyUkN5raE2m8mHfFLipfDXBcgWAxdhChiH",
  "key9": "qGKL9XGfVmiCc2CnQtbyfk98e81MDBx2gbEEg1jGTiPKXfqW5g4mGrWQReSeA32ymknEPnnXmKkXnRdgqJKJrSn",
  "key10": "3Txk4aHsN4xyUU6KLZVgbF4H8zxGSqhbFvdVSXH57Uv43RPmpo5Hew9ivTFL6KtYBhCN8bPaNeRAQSmYb9MszQni",
  "key11": "3nJRWfmVXTuv4WErVgjiynZsrovTCUAoeywxE6eWMnaYpTeiyxNimKpRGC4knMvnuFU2F1hCbH8GxSDcUaGuLHNK",
  "key12": "2UNpHBX6mNUxHPF8Yyj7QfyZkGx1AggeyoNo6Uk52z5nww1UWiqK4iezm9x3fVetSPcfgTt63yJRqcgZqhcgkhHu",
  "key13": "549YjshxMCAZXYKk2HKafgGyiiEDSxA92tuRxFT6nzNA3xVbexBhS2gTLQJqtxdWxcR37cXfpNqQbh6HFsGT5b7v",
  "key14": "4zrUScbtrgRPKyf1n7S91gV2ARrYZYKVXR18EqRJRs2YzvMpL5uFnWiCq3rQZHyi1WUZzQFdcEQXyptGj6drmgsx",
  "key15": "5kicpcn5GRT22kTAKUTjQA8iWSxSQZWvaBk2UpfUKDf8iK1Ckoxd1QwvEWDenwNDFSLhyPcPXbiaGiEBvfQcD14N",
  "key16": "614dfbLYi567GGmP395bYth6Vp6i7YJc3oLuDskwuosEkmKA6uA8dkmY1Q9Fi9pHo7b5PcMkS6MdAM1DXJg2mVRz",
  "key17": "5Co7BAErCRvfmYdrTJRTXgHn3xHyr9Mz7gDS4BKEx9oxNxP7r3xRTTHHwouN36r6sst3HbnYZBwms9h6Ss2MPijA",
  "key18": "34dXTa9RboLF2y22xKpqm1C78Tb9uhZ9Je1zQpuDfXKBYQJFkTV8sWVoskmzRgBNx1kNLxTnbJXvjUBYnyhdznYW",
  "key19": "333Byg9HodLojcVUdKCLtc7pJ9xdj98EkSvNEkYXBJ4TcHWyb6TAGjMgzryBLwArdGYQY4Tq4H5spwpQrkiw62mJ",
  "key20": "28pFSnjiia5bARzzcNwLVC7dNMKzihNRcWKxrEri84Nsf7xFZ3AL9oqu8x7mvbTV1mQur2FqLmHkGEjCjtL8214N",
  "key21": "4BMpPKF9yCQoxBLATPYL98HCw3f6LVAbem9j3N4xpxneSHgd2kx9a7jvdheQp9QA632HVNoySeWjBuHzBiE8g5jZ",
  "key22": "4Xx9FpPnSFg8VZt6vN8PvPN2PojpLYVwEYxZKQxKJph4cvb38wTEk1ctzeUcEmwUxVRev9jkg75RpMY9DF69rHxf",
  "key23": "2dhUu21LZRY1QYPnVoi8Ux4TdrWDqcRF4aTvTr15joYWU7GCismPdAki4DTEVN7J6xzmtbg2UvpBMxYEYqnymqyu",
  "key24": "oQeCXjUXEXneGCmrvYfCExNKDHpgbnUzme63NnXLMpL1i1NepgzBGb4KSXmthesWonFgSRkinAxuMQG8reTt6Wn",
  "key25": "3PsFmRrG462BtmEPm1srGSqE7Z7afVHGVtqF7WNYveemoR6XDQ1ABaSUxgeQdb8HsxCqoRYRV3pHDUpGWupVBv8k",
  "key26": "dAb9nGWPRgp78nKA6NgFuNifG7XwJqNEDh6vwYEhDtFuKgdyDjABqgzDrRERbcJcZqtJVy5oPxBvBsfmVHaMtU1",
  "key27": "2QZRk8WW8fTP6t7e3sgYWbAvzvrAtEk2iEwa9EBkGpha4pDhHgZj4HrB2otzMwVSsmuuDnTmhFEFx6kgnXNC5m58"
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
