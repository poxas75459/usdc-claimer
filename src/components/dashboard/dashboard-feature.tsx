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
    "2VqDJ6AvA8HUWSuQXXweaW4Li1R5p1wgcdBPxQ7mSt73gPjMWCpkvA15DWfTVbQ6ymeP37RosP7WHf87vGGhBDYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N8N5Cci84E9KdRaSmKC8hCFLhmj59to1bmKLE6Vy8BqzqVWsEcMjajgb2JqZ92iXHBejqF94FEYywvZR5xwpsRY",
  "key1": "5K7azRM573TgZRW35g2MbbBB5JL4s3v51twgFQVEuhBUUigbXmRFvAxp2Nn31H9fpWshuQhqdSmDQBiwEHiyXafa",
  "key2": "7eNA5DA8fE2hYDzXjSnbmeeDT5xobQGyBpnnRYiwrMoN8gd8SBtffcXiXfYpCobJAvrAFQ7UGHJeoXhnCtonkBt",
  "key3": "XnpSWxpid74jrQEmEn2EqEnY9MxYFTfDSDZonHs9bEuQkyVK6rQ8B8i4zWYNDn1waeWg1S32H5NXCjD45jx2UMi",
  "key4": "4R1d7SEzm2BPQESKsP4X54BwH49N8gpNK4AWpaC4UY4jibGSxAPYCT5RbqtDDntVxNG6BcVRTPUsQGfCsLYGymAG",
  "key5": "5N4G3anci7e6TzZNJeNpcvXgtJbddb9sJyyAvYZPQvUH4nt4w2fnep1M2ybWQ27UaffxUtLJwqihf8TnqCWfb2Fu",
  "key6": "3brw3AinzSzcjpBd47c8xRM3Va3hx2XNCcrBUUuE1ZpaVYF3PBujSKCB1LmQ7dMQru4qUbcGY3yzfZt2sk2s3omy",
  "key7": "31gNdUMVYiTjaP5rxV3EHqwvZDDbTBUDisZ1KsxKskgzHR91m592XiQvneK6Wa473U4PvZkZGRB3g6W5FHeCtiMb",
  "key8": "251C8x1yjc2ndqgRpLrZYtKKmSos2fmMuSxVqav6LWSuBmgwm7wWA4x4DAkZT7VFsSyLTThUW9DXVZdXhVsFotY4",
  "key9": "29UmrjH2co23vHxNW5D5FQu556TxCWiS6FXDbHGaawcQvxisgcXoDNnP3F7Rpm9ddoio5uo2uURYpcGRbncN4iTe",
  "key10": "3WAA4FSAjmhcTXnDtU2ykALbTd2JXb1jcgvBpcM2FYiNF2UtgvZ7N7faosj1bcKuC8p8R39vyykymqYcEVPCFtqA",
  "key11": "32jhcDmrR1ZnKLu1ghmSNrjcUktUeTFzPEgvWY3H5dk5dykRNVTM25XAjLKMhbmZAtg96McbKBc6FWDTxwxXo5pu",
  "key12": "2QTn2GifcgA5PTbmWtV2xcnr1nuViagiCGtk8vW89xRPAF6G7q3E4gWNtMe9qLN5jqNsiPKvS1PpDksXdvhTBqGp",
  "key13": "66zBY331yqknBgRLukbKrmDMd7pwHTZd2yH84hqcrDcPWaB11emhzCcFwqJDYbnzcaZqzxbB4Va7NaHtwZcem9N5",
  "key14": "2RVh2S73z7qmY22VH957bZs8FvzvBnVdDw9dmPoSthYvyjNrZKBT4uEifBPVTHKsE8dKgSdGNZKnFsXqv2PM2rqJ",
  "key15": "5cGKSAX3N9G8uB5RTB1oMBg8QNenPF4C8jYPE6ezZy8r3YkrK91EJZwyZpZYk8JbibcQDjNXAa9tgpZpPDb3v7yy",
  "key16": "3CMQGpJYSiGDKwXAotxZmqZi46kYaUNy5ACxABbvkqXREUmVFnwrhXXybYCc8Cvka7dqxcYfhjiKazn4ZCy9MEKY",
  "key17": "3UPseHw3vwJityGTME3DKaqFPFipdBkBSaSmPnUo6xveEWYkVJaMRXTgi5HvyxVzSw2on6y9qZG5ybaGJxVCExPZ",
  "key18": "2SyzifUqtpdZXaF9ppq9Bcgb4UAjHb3nGLaQBqF8LzijG2ianzeY7n4JM6cT8JvVMExEFPUdsiLke7yfufmLLmLV",
  "key19": "gdFgB5WX4ynUKyLvxjVWtrpMWkwtFbsr5dcsyUre1Q2guR9LhXmxTr6F1hLXUxvRTrMvauiwg3ZT5vUGwwFPyUP",
  "key20": "2YgPDj4nGRNui3fDunLDy68RUMygRPP4RP9XfEwNqjjbseYp4kmgSycLL52Yd5uQPwnJrf4dEKZPi37AmMkQVLSW",
  "key21": "3jfyt6yYxipnudNFX4B4nj3EX1rshAnotxdNoDc1mwV6oP2zmAhLCSN37ptx3hF4MBc5gPM8NUeuzCjq1DQgW8Ey",
  "key22": "4M6sqbgRpQ8n5naEFGdDpBGgcNoHebMpt2Ux4k8bQbmJejaKhqrdzApL9T5FTE42ediEDLCwY9TAtN6wj4TtAQkK",
  "key23": "YEHAoqmvFp3Csgd59HaSbz3GCy44Lu1XKWYFCBG9eL7t4VHMbYUHvCyS1tTFhk4kwJnV7veizgtdNExmbLYuj6y",
  "key24": "5tkDq62xqXVF3db3M1igSEbTYxq1T7BZ9oTRxtGuLuTwVsHUex9QE4k3eBmzVsTNk4Z6K1UkL2UDefN3euhPH1Yq",
  "key25": "o4ubzUBYuZoYouswSsjQhuMLCPNA7yVKwTw89MPf2aD1nmsSebwbUg49BzyXiWjjeS5RnoWmhkLZWwPdD1Esf88",
  "key26": "2sxAdXh79PMxQ823GEMC29Hhjs3fGfGje9DUQUBBmwbe8bTQu5QL25szwgtxwuW11jf2ZpWSBr5UdcJAGdqiKy1Y",
  "key27": "62v8NdsfXEKdRCBE6GLrUbY2au9tu75sFzLtfwh6CpnvbrGvhWGRyX4mRWqqonEXzHNo349z1Um3UGxRe5M13GQ6",
  "key28": "4ES4x3337DAjsWUWtWHTsZ8phdHU8PqDGrJKVJTAfQd2UoFKSR9orH9nzBJUeCjvG6CuhDJmuqjnfKwAxch4TJn5",
  "key29": "3YKPFgWc7gYBVqhHB9wu14dE1YZHSJvYhaDrVNMK5MYycVV4SfztLYkCGigXri7rymdiCZ7yY7fPaVUqTkpJ1rUJ",
  "key30": "5wUskPAfbNcevaHXY3i7cjEcq4L6whMjosgqmGjxE5SFCAGZTE7HqkGMhYCiwTqky6NErJzBNk1NFDRVU1rnCcni",
  "key31": "4ym52SEoDnLyouwzAKCJgfDuXEDF5PkRdT94FEtRsr4jiyC9thbsGR78KFkigbtpaqtbtoqM21vQ88XFqw1PuUB3",
  "key32": "4KmeAKkC5yFwEUnzv5DxFya8CNtTioxvsugyNo81C53oFrb35KNT1eHSe1S44dmtHZpT2aCJLhYJbMsfGsiqdMXg",
  "key33": "4iENWVhEQPFKmo8VUXzYNbzzg9BFTVqwgF9M5SsD2gMjSheYqyPdFbJTU1SCp3a8pYifwWQA95CSvAEfxUj3p5cG",
  "key34": "5VUxTgRwSMjMtj53xrDXUwKTMPTbuk3BbZshwGyT4PkhmjP3zbYm1piStnYgDamuv8G4fz8Z7gETAwyEqsCfrrA6",
  "key35": "34G3xCbhVQkL2AapfPjDSR7idoiuxq9xhHdXHCRSiVehF8N2G7XiVZa1Ds8cwoaLvcbybeT477RspjbhTMs6R6Eo",
  "key36": "RxAya4ory92n31BEeSDLgm1s5ydphcsPV31i7tUcNz8cR9vjLeowWsL32Nws1MFCHfeHZja9CYkuvTVVAkHRP6y",
  "key37": "4q6YUdrC3gXMaGMtzq59PL2tzfBeou3AiAnq1yLZ9FKqx9XPRfoQquYbrVD71fxKRKje9Kdac5pSssJ5jvZ7tDbf"
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
