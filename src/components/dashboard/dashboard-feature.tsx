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
    "4y2HSqieQJnBrt8rXJtspUCVmtvzcks63ZazEhJkBsyZ8WvdRtvd8gLr5TnH1QcT9DiHeGNWWuPWBov6M4fxNKVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cvb2dZufarfH4fT3jbGtzz2t2qSa3WiwWN8DAETQuC1Cg35jPDGjcmoaxACrHwwbSHwu3PtkhMY8qX1A4YgNanE",
  "key1": "PvUD6K4zRMCrxnV1uSVErYhSCcppcJuCAsMPX8XUxySY8jX8FQ3G8r2s6RT4ZAy5j2rHYJ1MBHUaRvNWTSUYc73",
  "key2": "3qme4PDt7MjpA7Enxm6dGvXDz4vUyvFUCqTeVVbayAn1nwM1HsQPJPBSXB1vsdyQUVotf6je1A3QkSeQKy9apNxw",
  "key3": "MxNGE6UtcWB1bfjSQFHrxZfPGDyc5ikHVJERKtY3Rj8tDbbpaez8v4huCstbXrwqwgqaLKhKaZnsD9xKm7Xuqid",
  "key4": "4CEW4UDDmwSYj85GtjTK6jWPdfH9uWBo8XD6td7cy747bwQvZZsSVnsDZGfUo6sGvbuE2gNxCbGdUmCbxyr8ev2s",
  "key5": "3Pjk3dWfvvgr2bzjnQyqf5WDVaKdzfGHV8izGDWvuE2PNBDmmAgJA31Z93uTBucSAg5P37ZqtD9o3DgZuyL4XBAL",
  "key6": "2ghCEC6zx7ih9HLCGiHYdmmwJskZA4WP8ZswMeCWbM8HYyAR2XjyZ5ZFaMhHzBseHymd7g7uzafnRpWnrzNd69jL",
  "key7": "3yVDJF1Mja3R2xyiDsdLq48vZQHYs2fmrc8rJiMJm71MeanZX18stQg3TwT9KSs7Y7bgRV6Pk2gnkRNB7Wdwktk5",
  "key8": "61oFgvNUGWdfqp6YD2nHz4SP97vLDxqYyyk3TcDj3YiAR8ZgZmUu925PjcwhGwJvHexifS3ZuJzALVN4mTNk2EpK",
  "key9": "4FtuPiLiQXCPDMsuFaNucYxVq6NJ8tcS9AnHRKHDXsEqF5PMg2xLbKh1majDBjTP97wAvisHoffgZcpiubae1DbT",
  "key10": "3wg2Sb3f3Dcu22EqdoDJcQqkmkRMDQdrZsv5HpWLimMijXB9yLZCsPjbGuGBzaRhfBRr6bg6htp9QJJtD1CyXrnf",
  "key11": "2JhNd81Zrj638QxcAftKpyQ9eJeRC3SKxZNDzEibbBe9wypK9SxgrqXnusi1QLzngDWSawuiSZimAtaqpusJzcAN",
  "key12": "5V7eDeDR8AY8qpvcoE6Y2Rpg3ux7uq57LVquV9UxCrhXQmNoGaPYxASzBRz2XRZWnxHrgfKLuAc882kcsqAdDesE",
  "key13": "3nwjynLp4bgGfn66FdCn2BK1bmZ5WZ3SFBe2jrz3EoYvWWyU5qMopGoWRqQSSCPCqpEbMxFDvEDsDDhqLhcE4dak",
  "key14": "52QU9AUpThYQ7W8XJVVfE3BEvgUNrmf8dDiou5h1ycD1pA9oQwrDRQLhMj8gDyA79WyFkuDUsa13Sr19dUCQQDF7",
  "key15": "GYZQcJT4yr5MgACs9YEL3196V25LsXoRkycKBMBWqtySdyHwDhzSGXQP9xX7ppt5vtS47nojrwDx9sKN2wyQjLa",
  "key16": "2Y75FxxKo6uN573hsRw3qhSQmHyhWHX4WCtDCBRkNkcNV9LEguRa1k7teKnHVnH2hnjDNxVm4bHCvDLXZajrduog",
  "key17": "66QNSQDMJBJCHZmoKXwceDchuxKuNmBPcCAEm2hv2ttfvCZY6C3Xw3NeXapiSPkiKE3SGDb5ZDFWR7q9bBAKENBm",
  "key18": "giu9BUJ4MhPMXnEpAAs3eaZ4DfvkCZeUuD3MrzcgRGQtVxzVyyPNF4JPwZzZHvyzCTfX13eJw91KJPetzz6QQae",
  "key19": "2S58KLHXWq4jtMcdsyhafwMkD7jt3M4YWygE9J918YHH7xjhXVvDgpahi2HSTaNsEn97xWfwY6gCe1phu9GchutF",
  "key20": "3AsdHLp1EGoEUbJKioHK6MHWSu73GESWqNL7qCTrjFxvMkyjn5D1M7xrJLzc29DieXmseyM38hoep1Pvaa46L9aX",
  "key21": "E5pRxqSTikLVReGzWorYPFLn9vQYtySuK1d49t6uVYQjRDbdH333M8i6jBSETqAM5Usihr5Z9i2gQZ4XAjNiK8B",
  "key22": "2STntKcS3cBGrooXjdU4A5rft82rm66jzVpx2ML7fy3vJmUh24TZtaxE6i78vAJHd3X4TMT9etyNwh967F81b4vc",
  "key23": "5CpXbUXn2oxivADc65pZZSfeo6bv9GxPC4Ctr17eQUiG1xnTjPQd3YWY6bTrPivdjPf15Y9yVRecoiwMTsH6QygN",
  "key24": "3sqRcWED7wM7h1ona5LkGvmj7oJXVhnSSFekrg47itxz7mj4xb87hPZkG4Cc4FWPJgF4Z2MJBjjimt4ynXYHqVvd",
  "key25": "357kDnTDa6iDpYEYG8SsZEzKst68ui2rrK3CrSyh4Me77yPA1cuuowAL9KmPHwTHWvRmvGzNuG6LznHieVMMMJz1",
  "key26": "4zEmm7CG8T17BPgsp1zrmfogyKN9U4QEb4TBwz8CAXyvEqBUMJV3dhbZmnbmzB3ibSVpr1XeJsPf7m6VV9wGA31V",
  "key27": "34H8yS4T7UZR8obvSBfXx7Tfd5EwKFFq5jEVKDWysGJn9iffC1U4hL5BhW5HFDrvmP6ctJp7WmLnjKM9Grv3sUhd",
  "key28": "3brACUW6fR4QvidzxHUu2v8KEttczzyBkw8DGmX6dQ1yCy48bkRvjqQ9Bn21DMPh8a3uCsc5muFmNSM6xuguKPPT",
  "key29": "2wkPFWjGLvfv3DAw8bNk2YDrpJgviVoQFjZRuq2CMwhCefScwNhfrVKrGW7eZC7E2WSgVPRszdKjAapxtYtVTrx3",
  "key30": "5rYCHjtY2nS8nD23QZgG7XnyWUS2EhYfmyJKURe3mAwQfQ2roeDGDBUBbNg9Q3UugSHHKP62Qs8uwsHNxhVDUe5N",
  "key31": "2egFRdew66AsVdYPPVLWsZuSBWz67tNXaKqmDv8RoSmkiMmzbgAKgv9i7H2kqvY3M1gULcNdf12ZmgUJLyXZrcEf",
  "key32": "4ddKQZQX7GdP1jrEsueZtAbs31f9jMFoibSmExMLAjPYZSv1TdWvCN1bR92WTnbUC2ZbawCcR8rXDfWTb9brpyT9",
  "key33": "2TvDGmUy7mACXgwxHJLJPcQr1QvyfALJfwutT9X5JSTETZqtwrNBWkMpLPphBDEwX7M8mBJcjvfRv7AmJgQ9HfF7",
  "key34": "2FmXE5eE7LTLkgezw5D2s72mpZnFZToyDgVjBZUmBmLpBB9t1abxD42Pfe3DP5JHNQxhiQ8yM9UUCFh2rH6fTAch",
  "key35": "62gSYjzstsJ1QoSi1X3E1nsm1ZsMXaJW5thCQGBtRCCAQsUTpJdySmvVWR65kBPCRdG9aHUn3c3R1dp7TUgLLEsT",
  "key36": "5u5zuxJCf8sAMjqyBJGPpddG5hbT19AD2JkS5EAtu3nWMsNrvzpPgB8N7FNXRmrnRhpMuuvNF8DmoenQc8Kj6DnF",
  "key37": "2WXMfc6ChxFaZBz2o9bXK15ir87h7ar6n9UF98cCcyRZH6PzK7co2KgK49nifVAvrC5AxrKgaNLqdNAvdByKHWD2",
  "key38": "31tXDVYoqkCuBfE5GqD7X5KvxmroK8YKaJV5kr72pqyuV7QdLs9Mnx9b9k7fNRWybD6VcHCBqvQvq7QD2apbva5h",
  "key39": "4WAy4VqDn1pftoy5kz73z39YFjfPM2JsVD6687vBgoVU3p5sKqTbFzfMB7nXYpzc2hMuedyUtcMajrVjSeygEHVp",
  "key40": "2Va3z3vNPv8DxoQobmrFCFZcKrjf8M4c7LDLZCTamYGBaNMbyD2zXrKps5eb6JQ2qs9YmdLRjKQQzaC5bWz81vDU",
  "key41": "3k1SmenWhaN9NxcKaCg4cqokBAb7oHuFzRvU5uSM9qX8eXZAU7DVe5oNR9SojU7zRfLXkqC6d9Wj7rBrHtdMvVSw",
  "key42": "4wAg9R6hFhrXXcRQGGGVJpnrs1xAv2w5D8zeebWf89qfYvuK3wAd41hwJMfz8wWXc1HPkjNkRcfUTpX95Wdn9ogL",
  "key43": "4jQzrNHn6gFgPGUkRZRpGhD1zGqAtJajgUTh67CNs9yhLPZMwD2vbeBJmdEtcZxsjk3fxYWxxbwhnVvT5fr4CRk",
  "key44": "2EkGD3T3A2zCccp7nBMk4X9Tf8GEVfcsaio23bDzLPxuzVXvpchPuVpuFBWoCBG3mDNe7FcFfK2QogUyomEcCycC",
  "key45": "5zqC8LrHNni4aQx3ai2kBV2L8QJqJWHuCy6koxVWhEkE6F7WyDxSEccTsowocQh43oZhdCHDLmhqZATV7NUd1wtn",
  "key46": "4P458mGVxjJi4LaF3uUFiC7Y7J66ErX1QmMyqTGR65wJTwv2RsQS5FWui72GP1nGL8PyCRB9FYYgwjvReVLPPD6T"
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
