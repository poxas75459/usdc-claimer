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
    "5Wn53Ms44t8TkXAdwYk1iA7qtgU8SLCXPDqbs3cxfmr7RQTxR2zegU8xWptTYUPLunVmCjVmFeV7JEUDgnwZkW5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xNgKZCqKRdZky9BZM3XYTWvtqjtUGeftpQyyZu4gDmUTRPTia9zMYv3hdEdoZhYESdc1TJ4J32kPt4N39kMydg1",
  "key1": "266dca4geDMWaKHMYHQb7eXNXwo3euAk5o1qU9KjPSprdYW4prJ8BhWHXLfBYg8viGFcDZKYbHuL82PwmjPrAWnA",
  "key2": "3zxxWdEDgvJ7KAAmazyh1wwBLcKEK1c3eJyGNhdeRVxzi8hfPsQ2ekP2KKsCbQdFzc5LdvsRQFb4HzSXQ2duHQMr",
  "key3": "3MVtXJbYX6KN8MVGbirzmjEziPssbCHjM15rZ4bDbbKGSHTs9S7ndjsNwRAVd9L841XaDVnuXbTmqsEWN2fLT36t",
  "key4": "46ox5cece92ERxkebHCbYyhuVAtHaYCmiuMCdf5RJkFRHk8Vf7AMpVnsTQ5XwYykUac5kiYadz1qMjVBRcqnzALE",
  "key5": "DYydiD6wXoRh2MiQRLYo4LmHdnRRHDt4SfHdrEsTViEzjKreAoakya3P1pLc4peFJPYCN9LD2FdLRD92WxXojk3",
  "key6": "f56eHRgTXZexZEpohuyXDSFotktaXPAEzWiV5EabdVB8nLXxGovQWQxRzKTwMfjh3a3L9LmF27cZ8cRAVa1opxA",
  "key7": "3FpkRUqMhhcjPKNYqE4fHd2boHouBYTYsaS5F6avdi92Dzzf8MySL8ahkhh9mWa5J4eFwYy1cYS8ecUvcdhr6WP5",
  "key8": "2CEzNRDg1pHyfQLsv7SvAiZttwxF8u4gUcdzuLcqv6cmnhHNVq5Erht63qJPyRZxFusSgv6vqy2CxLu3AW4ucHyc",
  "key9": "3dby5tvTYfTPtVSnHvusBso4JRQrhXnaxQGAHmVCheqS8nqk94XqAXfTRrjGPkLHPoQUM2CiYFYGyv7TLSkcni2Z",
  "key10": "3Y7ADkNXkYzz71Fo5LrVWfdpnPBRyUGzzjuAz91a6jbSMGShnEjy3mnKaSVVJweDfik3RDYU3yKM3wnEoZJa7VGi",
  "key11": "35WMxQFrWped6gikP1nHzBxCk6AzqrxyRER8ChDm3a1jVt1gfy1EM9B6QNp6k6DAUT6gd26Zdtmn9LxinybUxorR",
  "key12": "4VDTFVyiW2MCoq3nQYz3cvMCmwybo9Augfk9Xa2KpLk4KjronVRe2yQghGQkkZrHnQw5pd3B5Mf9TdRhgK3fWifr",
  "key13": "435Xbi3Y6sF5iZ7c375M8Swd9jCRThunGhacowb1Cs9CjJGgz4noT2ciPJcELoH7S1y9m6t9WCfT976jzpHMqcQW",
  "key14": "3ZaFWAKGjmB6ytyFM2DQyh89mLK6JYGHabxJ5S1Aq5FyChzdgvT6WK1VctpFTPrrLMMiHuKxugk88LK84auKFxZB",
  "key15": "W4QoMqbXDGUzDvybiEmKyCiMCx991sCLr4LUKKFU9gymkFpk341XoevnvemEHRNc9naHC5DKxbQTqedU8ghV4mU",
  "key16": "33uW7EgetAvZKv7LcbWqpTiSD2gtKm5SbzQqpar6izFrzqC9WzR6ttMppW1hruuaPFaBFwLmBcmHAqwDNgomXb2P",
  "key17": "2ff7Rn6T2Dk8iRgRAuyPyuA9xCvigVL4ca8SJJXbSNFi3rAkYoCJBgWRCijt8wpTWFwctwhi8dS4S8pSEFsB7cEv",
  "key18": "pEfbw43tQJqUGyNZFt8Lq96fuavY4tZdQEihJcakFtNffBufXGBH7LuuVjtrbAK5UB4rNe9hDJmdEPDuwSgVPi6",
  "key19": "4sCL6EKwKAfWyGTEaAfcbCemP6d6HQ6JC6TYU8EDNShHHbZ8ZBNREqE7jXvXCdcuT3H9bMZTbBC2iT3AVFWsmAhC",
  "key20": "66jHsre3NFLsGSNED8AG7U68VcBiR9uMrgCohJQXuC1M94fA8wrH5TTteeyLdu5SjzGMfuajubo2WV6TYz5G345S",
  "key21": "2bac6wnqgWhDPEd9DrRLQpXtxGaGyyxxr2cAWsLpRBWKmKr2pVdHpWH1S3gZGvwiN47espEk7LpVNHUTaBNEj8GY",
  "key22": "555sa7kvNzctmAF3GNwFBwBf2EozoGXnCFYTyKsjemUiwECSFoWrcCaJyeMPA7gK4UDUZmhzfghjF5HVqVAkAThY",
  "key23": "4QiPc1HQ8iqJNwc8MJLDiHTUMMXcwmqhoWXLS3HiNjjZSFRcsoyLHMprxx6kDhcwLSZuSkBkoJQJit3QjuuHF7ky",
  "key24": "4a9jDgGbGnyuYDR21GJzKdsAjFy9rn8wRdivW8chSQX8U7STHRS237znCHNCn1yUgY6VYfqSxhboBcEd3vFJqMKa",
  "key25": "nraUCJqvCnxj6WqZ8zezUHtMsVaTkjrBTW1tdH37ncZCtFbAQsYh7EBCBFKKxUZMz1NuF9z2qWmqrE4uMPQX3vw",
  "key26": "2mfTmfYgfyPXg4JZUjpACvtqcykyrJZEA4xhm2nD6nqVvYeYCBh2VREbepeGyEww7wjhCu9j2m5sfiJVEM5Sk8Ry",
  "key27": "3Vp6PvXB2A6WuemX2dzuMYN2DpuXcHpRRqAejpCwEAdeyDkr646YudtMSEtT4X7Aixge8S7QdTU1kJrHpksmXz8",
  "key28": "2TfMiQG1epcoGLkroMyuJoNzh6mbQ1ZeA52JzSE4hjLSuZtgdUohdPcLKH5Fur71LBF9cr99GPHahHvBDCHWg8Cx",
  "key29": "2BW5n1FpKg4ThnVNu7TXrdPD6hNuXEqnJTqGQ92taZFeS5VAfaYnJT6UHBN6LifiWHhkK468UzaBDJbMmDwdLj9j",
  "key30": "2KAHYNqyCVgxAHER7mokC9Cn6h1qKZSbjn4Tq32axSwMoyutHACvsYDwtRTEqQHNbE5nEigi4midB4KSJV2KfMGJ",
  "key31": "3QyGuPVq7CnMT4wgJC5BnYGyEaJoaRUEsm3omwuc1gaGycXg9bRwiFNVA59erQXwPrAcXpLRLwWVvAaL3BaG2LuK",
  "key32": "3XESQB5Nd6g1Hr5s4bvpBQYZetTdycukCSAxsCMo2hXLSeV2zcDpPGZS5ER1kkvr11WtwVFCChZU58DCRFMiUdW4",
  "key33": "3Vp9jra3nUafTshsFX69MikcUKjYnfRKhjjwkzZuKP9oVEHjCD1HD1DSKdGg8XsBoMJuN3mft6g35yrSVvrHcSxD",
  "key34": "1Tzkna9zNag9vDGNJbgVAJr8aLSFauZtaLPW7o2PZzjJD7xZhPqKNZq4SoG12K5MtP4UYYWLVtVZgNgNTsdKQxc",
  "key35": "NRv5gbg7S6Yv3fcpftGFKVoTYixokxKzvoZvbFfuP7ZFibFSTJKKVDuL3X4BgVHNuiQs7X9HfSroUkqpFRQBRhp",
  "key36": "iTMZTUtu2L1mr6SXpWCqN8uFGTsKU2jtAniisYNwVK14FgVPZ8Zd35rcNxfWy71ACiAxMpDLdXJ3DyFmnFWQT3V",
  "key37": "2s1ke6dhFNmeeJ8BMrKYXJ3Dax2QDoRPRZ5zHwTgnWi8dJB9fPfhBxSs4QQ3EA3hR8q3y5JLovJqb1Nch2wFHjro",
  "key38": "3EcTbpnAbWMHNogWcgfipkdbnr7mYQZgkdguK85ZyeoVkJtwazfTCXqUGSU7uqk8po4p924sX8Uvbd85oz7H2RvV",
  "key39": "4qfaeahtFis2fpYaW12noaLLL1E6wj5ErBodLtzuZqZFrCm4zgL4zpTu76RyDNxuFYvDohmjv84bT1iw2iJ6CBzN"
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
