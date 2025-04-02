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
    "5SF7ZkvXwhGPnbXAak2U9AurLNiBCQe55sA8L4ffedrPaEBBm5HYB3bsPV8H4Vt9DX7Bc76YuFmR87X6YqNjct3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GfqTvZNoee7MiQ8P2m7MnVUL9JhkrXy35j2DbQHLuxyTQUtGtYAwBrkrfJNQRSuN9vhxLhNAsn2BD3fG48QUUrd",
  "key1": "3WxpsGVmzHdkFQFcFeeiGZfh2R3RXrDx4jNKFxPgWUDWmz2ejKPE9kb5mivEX2sod7qHmWD1Mnc2sMSKSdaswu6X",
  "key2": "2nbbSFPFJBmNDeXUu7ET7cvVV4svzLTxYnANNvkKimYegbfjjJm7Jk3hP3rTbur1Bu9WiPV9Qj4i8xkFwoDdUBQM",
  "key3": "3ikLfgGdkRHCFrtopUS88LMobEfh4RFVSM6ZxYBT7WfLYLiNdh6MsjKx2EKmnTAfcebB7hVBdGt2wRK57q3QD7iQ",
  "key4": "5xaCsnNoYQivoYGsmyo3Kfzb5k5tqn8VjJMCBykF92kFyRRFENhHDkv4MfkoUuiDjjsGrA2rMG85cPeYKyKE78AZ",
  "key5": "5JEm5UspkRKRvuzFbNM1XVcHGHDaKkTYMtZKAVsbuCgGsS2x1abohWPcWZ2mAiTWqYnFqQdbsSegr28M98yH8zmp",
  "key6": "327vwwpmwJjeWo9mWS1gzixmRDBP4wdDmomMBGCVVf7L2YQLSQzMFo7HamwMxuTsteduTA5ZZwb9j7kQsdxdBv2t",
  "key7": "KAyzzdPXxs2pHcgECArLbXGNxiW68reY66xbfmCZzsDi8WVyACRgB6iy37zyNPwqd9iqVh5BDv2XyrFfRyvjBi2",
  "key8": "43EMHz4dhJUB91L4WPGtXrriMDgPhXjG8z4MJo4LZc48GMnoe8ZTQDssrVZvYnTU5i374SxMKHvJ7sF27riHemkB",
  "key9": "QrahvPvUaBx5CRDDxNiPb3gtN1kavbcsCLvCXrUANST4UinnXb8KxtnNBr3gfjbRXSLa4kSz11oeH5HCzb4d4WW",
  "key10": "2x8riZgYhkFQQM7e7nPGaotRFqFTUJLXd9mKEPy7GQRcE1ZNHzavC6xWuofe4shteq5xW2MKv1hm4nAkEodzvoLE",
  "key11": "4NYuhTssuWKMYbgVaLfAK6735QhHWLyD8LRkPe5kyq5t23zjnAu2LHES57Sc3rB8HGacoTaEdcDduFzha2ReGPuE",
  "key12": "3VA8PgxmhKoPfD7HBfq2nFbH9YkwSsK5rrtUZgTc4EZr6ao1ZxUyJzhpoQu2ZoSGt53Cf9wz6LhhPMEK4hbDqvhK",
  "key13": "3u4iSzFPvACWu3KoW7PHxXBnHLRgHECaTdKoMPdrdacKZ3isKNu1pgCDA2Su2vjQ9pn1sfhP6LoG8ieqiSbgsYRF",
  "key14": "5EnQVQRoqhNHb54gKxsFj7vB26J4dUzu32ip7yUFCQd8DGFpkAV8FTudonV3ya9sZ9VY272oGBhHuiEHDEhTjfkt",
  "key15": "2ooRnZzqDHWsW38bmfwptYyMHc3h7uneV3YPBwLTCWCfzuibMDantAzqSAHSrhN68kFVD59fB5qMXyxaVnLUXdhZ",
  "key16": "7zaepZBt6gagFumk84deaeKranhvuqpF9DX1N6j74KMwXMpFXfCRxqDXCGe5xgUgBXwVHib5Je8kMRbe83Sjtjr",
  "key17": "5Tkan2KYYtjMspQfybQjpjQCdEDs6JtCemSWxvegZd3XcmgHHi7K5UTbt4uGxVLwAaSe1jPV5mWWb1wYYCAwYiqC",
  "key18": "5E9o39cimH52DiBE4ynq6VuEfpCFqq3sXbBNbDpwHQsinnHQovTYkmC4CVGZWNkXFRJphtsqiLxiA3M8XUaHpFQ5",
  "key19": "6bYFCafnY7cZhv8PEha5GLoARtba8A85MhwQAc4XwCJtVjJ7AP5pDUdK1Tr4LkaBWJ64bq98zK4aLWtTA5VW5Qv",
  "key20": "uw9wrsAYYPNdkYVY2971SBDSzLmjFDLYATV1cwze1oBLewuyiuBB8sGVFZJJrxkFGYGrcn9iMws3J5kGxhhYgUH",
  "key21": "4p77CNGM179Tfs5VN41WTVqLPgM84V39xYo2S746qqteQJf2y9j3XLoSDcUvsTVK6BCMhZyUwEFNxW9hA7TJ1Zi2",
  "key22": "231V4Tzih4Upf7QYGVvSYYT74LtpT591CufiG7u4SRmCyF1Gp7j5haE57F38RkJu9XNZd81BJMq3jWbEvLq6Ndfk",
  "key23": "8Ln41mmtuHxZxBaqM2EziEE5eeTPfWxDskNjPJMYJsqYmWWN1yE2kv4m4Rmejwn3Fmuf1KZxHNRMAN9KPfiqQNZ",
  "key24": "2k9BL8Gswd1aBjvk7VSEFzxcnhg8yNYvziRv6r8T2jAiuBwhAFpjsy7KJZyWGqNScj4d8gA6ig1gA6pFi3ya5Vqv",
  "key25": "5CHeGrjphB8N7N27LuGRadHmgCNYTKjTKsFpJ9kzVK3Ydcs4FFvY8j6jmuAti7DnweUh11FM77E1yBABMnQRDvru",
  "key26": "4UPdu5AdPP1zFyjQzsscxuSJQJXzyMdXWhcGxUEkaRHwKaDEigT564FRsvMKAydkFw1DvKFmWiu8UUty5JA4nmBk",
  "key27": "cEhMFrVJMTJpALDEFtnEdRLHpAq2nF5LVzv8RUpF1kLdGUCfvoJhoB1rrjzVMYbyetboGXYvuXXazE1vzRDctMs",
  "key28": "2XbjXxdoVvsbx4iyGJwN4LYBfmaM38gPyq8jLWjCvbAWUhxo65uSVxZKBdoePPs4Y8fVLEmsB4YGfBHDoE7QMWWq",
  "key29": "5bjw3vLJxNPen1t5p4rugqTPAFEPiJa3qz4P2KRYazCVw92YUWeyAi4tzGsQvqzNTLCbmDNkH1DJ419FSGX9UPeC",
  "key30": "BoddyUqWoLmF5ZjqV46h9NXPE39HqDg16RVcP9KbQJuK2QHMM7uTa8ALwtEm594aVjzTxtaMyDybxxJ4M5ADych",
  "key31": "41YzpwZmo5KetBoWasPCt9tbsYPP8QbTsQdYpPptgVXNVsZg8Rw26hrZDTadadbEXbnXbFqmEZ5DmQC9mXsogNZQ",
  "key32": "31ZJSYWNvcCMMK5qZ9xK9GgctrkQsaEk5mz5kZsACiL5MVc1sDU4U5YyaEN7kVfovHGyu2jRVhsMKHsVgAcBZxbz",
  "key33": "T5NgDgbrrZPudxTqQubFp1wc3DTLbWsgSxwAVvtpv48F1TuHMPjfzoAKffMUwnWjVPXLDEyVy4SyNEq9Ft9CaeQ",
  "key34": "3LbhbY6Xuhpk3WemFdKQidzbPGZ9XHxkHYjryYrgZu5s5QKuG2vwByXLEk6Bnp2XmNxc7ULXUya1p7RdfBNEFEc5",
  "key35": "2Sr3hgyhYznDBJE8KeBBcsJPuJc9yTzitzb7hCsJrS758WHsUCXvyYgVEnr772EWS7d1HhX9NuiaUfUCPuD7Nbop",
  "key36": "46nbRAnNDLaL7CcGkEwT2s1kbnwPr3AeXC1qhir3AEp8rcemP36S25ix2LVvQGGfwuHrYHyRMYAKc3uAUvA3BwBG",
  "key37": "5aXxxTWEa4B2UwPt2xbinQFBm1nLRBsCX7BrUvkPyZxtyuR5FMfPCX67usXsqW2em1tYSjfg9LdBr1RfQzV6ydmk",
  "key38": "5MyokgAbzjjY8X5zzwhTt6TqMCNkn4BWAm3gsdE9vrFUQggH9SefFnBY5Mz4vxGxZ5aCX5Wt4u2bxLKGmy649AYF",
  "key39": "UgGMFYUPqakwECA4mdgyebHCNEwBjnuJ5WuwG97GcfuswjaCJq7Nz4GZFs21p18L7EXMpfu35GM1cyX9PmWPDSb",
  "key40": "uZiaJwQPjxQspJPUER9k4iY6HGrM89STPzLDefpTqVuU4oU7nb1nH1uDswcR6BdjUJpvzWXrMdHRqLBCjnbcdx9",
  "key41": "58qYartMhaiVjzFpfAtuoQD1h4r1FucY1HuA59kMaDzYCcGPAhFZ8bctZuo41nSswgJ4sd3rAd7QBKg6wfqjfFwj",
  "key42": "4s4jV322BmRhi8zxmjrW1t9eGNqBov5jycyjeAeg7Tva8vn7TqVxwVty1NRPsrYk43QGyREVeCJvVwEVgWompWbp",
  "key43": "39RBQ6xiHuavhAM9g17mRYX7qDPuhrGogqENBD2NGZ6voZLRxgFUAZVdGA8vhzhVax9G6fpKeMyord529D53dGUA",
  "key44": "2oYH8cUjTmPnwBunho5VereLC8oKYrFLqWjkhrwzFBUKbMJM6Tih6RmKzMKZoaWGVfTCmopqqR7ErZXEpqn9PYgY",
  "key45": "5geZNwtUhV6Uan9YBau8DBBW6XA9q8wmzLSB99GrHVgkANZSXrkmHdyhsR5Yn8yE9D6GmY8bQVQ4FYhKKYiyEac1",
  "key46": "24XdfoUGrvHg6SPMErFHv1dMks4FDzkwcRQVbr45gaZScuCbo1vQeg6vy9viT4FvUZCsrpwVBnCcEyCxfEVvVWt8",
  "key47": "2UgPCBf9KYjdsR9PX4TAeA277Vdca2wqksovheyWpP9p65oe7W1mUjgx3uf7SdByxcqba9ojWTXExBmUioTdbYJf",
  "key48": "SWt4JaEVdhxfy8Xpe79fNg8o3u5FfQ3zyVwBdk9oMNFRSWct8rwurpaRGbhyDSKJE9wrynqUBH78fW1Vwcz3qLx",
  "key49": "3PE7HqMEUfsfCSaCSferNJmB6ASqVPvX69wc3DURSBecUNenJ1agpeSqb6PJT13fPSMyYdz4dmKaSjKd3TuyqKqa"
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
