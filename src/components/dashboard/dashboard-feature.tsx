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
    "4tXrSCGgQ45vAT8Xp1GJq24eGXd6pbkAsFGXrMKuAVbpn2kfZ1Uw6b5df1WVDVGN9rUpjaVc3LATRtmG2DPLjeF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kz6d6JA4GSUXmCgYu51FDG68MRqHRkn2pYKDBD2KpV1kAwtJQktHriUmQNrZjber6rhzuSecgGvigyabCiMBZrn",
  "key1": "5KnAkb8wFuXbQBXvhGy3t3dAMmoK3xiprFyuFCCTd9ZgLtW2epKFjsPuAr1GynaEsjET58DbTvrE3EW5qautTNds",
  "key2": "2S23BKw6EWcmFeHVN5bbrPsrqptPRtKK2mAea3r5a3uFDmmfhrYKzC6s2viaHqMpAEomzvTco9ZQMUUSck1ostPm",
  "key3": "55vmqdsWWXKiAf5zEXH2zaPZyBgYsbkQ26v5ggiByA1h3L5K2T6WTGR51PeisbQCrk7fSSzN6aiaLoonj6tJoZFA",
  "key4": "fL5Y5rHjmH2hwUwHYAsbpNLY57cD7t6iuFQBRUpNe9rGyKCsrwc1qHEgiRYQ8qwewZwE7pAgKRsAWVPHV995CCi",
  "key5": "9JZd4pMujcFjHVyVENhLVEJzrrTNU9sdp53Rwniz6wLkkrwSiMMrotWdFr8q37LDavYLniA9cMeD8DrVXzP7gtk",
  "key6": "3M2yhLRuGoiiUJjdkFREbQWwmSo5yBXkA34HCMNqpXEsYgSdKqASiGHYeqwgq56U6bAYiFG6HdL87GhdDCLV9KB2",
  "key7": "2mPuLqhxqC1bWABVDM52KLieD2f5ZxpQDXcVRGypjBQNCHucMLaTuPdfhoMC2EEdNxkHkamMgWRV68YZAgcugwxe",
  "key8": "65mmMr1pCn5qwAWP9ty5pgZ5vJWJBR8Md988Bf5VKgQd5Q9GSF9H3bepMNHD6jBb1jPmUsHB2fiEFsJsoPypwgEh",
  "key9": "5fbxmXpGXMWXeS14G61VvvkMYVwFF2yKammBtnbNdkgurDt5zTAh2kCerAKesBHaNWC1hwXc77tzF621uuWcUEVL",
  "key10": "2LjYM6LYHrV8W6PBLaWAuwGojAP39Fcwr5BhGJvo9wBKcCdHjUJZYjx5jq6Q6Pp846wNFT31jGyqAxG1H9qUejiW",
  "key11": "jbTQCXGjpKAyL5rvhRmirA8u5A7G8uo2xv3u7wPSW6a2xKqQ3MskfGMdUMrRRVLCwBzVCbZEScbvUWCDsSi9Sbe",
  "key12": "2Mb9vtSxZVDsXKM2k1wYByM9gUfmP2oWrAJSmgKoVekx3xik6BwDvv74C2E1jkVpRCMYySNpW3KTRLDRdsCVAm9i",
  "key13": "54T7f3iT9kotfDkmnnJpAt5Hd25pQarmwX2eUCTuESnb9h3N2a14rU2qyfTdRBpUhqi9C75DRJyskAD9CKSv9sd3",
  "key14": "zBL2hKMmVximFXymULheggkeB5GK4gnPXcscbPmgYKJEQzVent28yH4znkaY1wrDcUWQMXXMBb7C8s36DfSPJrt",
  "key15": "4v9aZ9HGwxSdaaSnw4di8MCWwSkw1JbfET7MBEbiSz4Ld9c2o1zqQTNNo1hBRPb3kx15ZZaqcUYbsHMQghrt6JG6",
  "key16": "48nPAAi8TRj3o8rXbcLR1Bb1UbxuQyj3NTcUW76Cq82N9RHj7RoTdYzCGm5vpcakQoeSiqaQNWms5X94NDNvRpSj",
  "key17": "2BczJrGbZNgFT4WzSAvpG7p8AdUcjKxEnTfnLMxVff8VhM9aewkjhstrrfao1D4DXP7k52cUhie1J6oqPnbm5Txg",
  "key18": "4WcXwk7Miz1AXARkRsKpCXRbZegz1FAiDrx3DMaE6fMXPJt7DcVuENSn2JtB6jvccEnNKY321yxidKKQdh642LQ2",
  "key19": "33rWKvXLRsX4e9aRj51t42CuFZfAF9sDu7CHuftBQfZp5tddXmpvDajA3ta6b3gbxFJ7vmCW2Yu7yB1CLfSsUD7t",
  "key20": "2Uc5rHykiLDHgRnUHZmsn5kubWEdAAhoZBEHwRSL4m9UnHSn6PeqAwA45kdoV5gdPX8oJEBqLZS2S5es9J3v14YN",
  "key21": "4f3upy2pPpr6E8Zbw9A8skiRe3fLwReZutMdX1FyJBC3trsgDFCZKBsV3AsZPhvvXM1hyvNsA8GrvbWEueCiMBNE",
  "key22": "3tbKEMwQMnaJ6N47k2A1Cb5p5iWDD6QCX9rjGCzu3VgZtL2Sz2pLmhznWwYWmyqaBS1ix39J1Nt77RMeDtozX5Bp",
  "key23": "e7ArB84bcBsMt3cuzPeWTztZKrEuxh3ni2DoaJt5NVK5a9yYitnpG9rq68QcomXkbem5Ar6Re9bVxTPdSKY5A5L",
  "key24": "4wuDG6976zBBhQm3VFpxx2Bf4Wzy8uTKFFkJ1X7NfXiNSuLbjPQ54J2AFPrNoh8pg2XShEhKbVHUjxEUjxiwf2w3",
  "key25": "57hiQ55xMf7t3BpaZTdGKUkxvgKpfQAFBkavSzd8Yxux8o1wmJfdKuBQLYBTi7AoyoDZSB3LPpPL2YnZcdpGaF6t",
  "key26": "4fWaDtZvVQikWRyS1HwzNUMmqPth478zGYQHsF4e1mAU8BnenouZeWUzyBWyANtn2zLroymqMbF8CMc9CGx9YTDj",
  "key27": "59e1SCzGE13v5GB3YF85NTyvPHsrpb3wek1mZN6u8HQnmmH7JWX8HVti5FqkJW1jwoio52xPyL9Ui5nrQ4zeMvgm",
  "key28": "33i9wr9eqGXzSp1tYevH8CrrUfJdWkG3x9E38XTi3EnQikLEyELGuiAsVmk1jwzwcxTkym4sFmN4uWVjDJ4yd2Re",
  "key29": "5iedSatfu9FJrV5QromNtMXeKk3NHycsCFJsuP9qbMVrnJCcVxCWRG6nE7RQydUC3QoNTYSdfFKXdH75jLkQJwzy",
  "key30": "nA67123AAkcPEvk3neGuRKHQhaxC2Fd8Dn5CNDmRRcaPM7HdXzBWJ7hce3kvJDKxCASEaPg4k2i72CPnTE6SE9D",
  "key31": "3cBtfYUbdk8StWSEobrkYbY4dj9LYAfjcP1MAK5s7P7kk1uRzgm3Ns926XJ9moMcU8dAhZhkNMZaeuW7UwY7cxwb",
  "key32": "4weX5NFaFknGckkxgMVjoKEapHbo13JE8BED2GsxygDQadMHwZcWq8B841beumvMKHkUjakdPFxxGG4Ei7kdh6EW",
  "key33": "5vpgfHs3dT2xzPVtEmnEvfJCLqAfPK6nJypHwhCD2yx3FyWr7kQ6vk3DRuBGF5rLCxdkXVGL7sVRxcwN8Rff4RgZ",
  "key34": "5YsQV4SEisn4ZqsW33vfTQxLytXJU1ZjvxiCuuSyzt2sNEQvDqEGjF5uF2hapX6GSDK352DsbbpeGZPu34uijaen",
  "key35": "5bNYaQD497GRELkNNVr9WKEy65TBw4xy67jbUs5GZVBbyydoaaEU8yuJbuFrYgcMUSxroEMhEL8vQGWZv3msZTcd",
  "key36": "WqxvgbKxWzpLvhFZ67dfGnfeLtgTGDHYF3onTs9STHTYUdBHbKADRSzbcTEsbiqApwpAz9vPEobXzrZtm3izAFm",
  "key37": "4rM3eicyendy2gf8VFDjNVneJ6pwg6Xgihq4t4EQ1rGAm34xzjGyi6sDh2zvKmg8S9ZHVTs3euuxXpHgFwpsJ161",
  "key38": "48x2jPLV97gzRg79y1sXth4iyVnhsG5KuEMX8TMjxPogePNUK4gdZuX2hwi77GCkHr7dKpgkaYy1UFq1VnQxTCb9",
  "key39": "4dA69pRgvAGMoDqy7pYCS6NyJib6RMueyMyRxPg4yKwKiATmNFuiFxj1bw5oaD5GZ48VWJVVzTpAkr2bCe7UVjRs",
  "key40": "2u4E1p4RKvey9kgLFZAuowWSbT4VgNRszzUhuBPveDEqGThcFZ47eUV9LRvPgb3C6CYZCpEP3t2QVBhK85vb5D1E",
  "key41": "26ywmbzdzsKDmZDuPFc7PJaLAvGWRsvJiBoPzx3Jgqfzx7X4bQcGdfQqvjx63GorHUTTH3qcTWg7zhLBBfKVajeE",
  "key42": "62txWVyzNusZ9ytER4cyvnnpvEnjw78Sbc82ocukchvsXcGwoRz65zFPLCRhoCi3DJSUDAvtw96FwDDnTx3J1pfy",
  "key43": "289Ya26UyUhCFYcvyWGttXjZWcSNtqeGitVNFE7sSXG9ahuJY4srxZyhoYDLUce4gYgMbr9RvYxMai8QcAsiHDvN",
  "key44": "5xe41zoYUG5AijxrJL5PTc1kEfLtaiagTnFPoFaAqFzj2UTPSzVFqqQsVKaivHHWW5VpScVmVdriXPDBrbNZN2zh",
  "key45": "5Sxtp7dspNL17QVFnfqYndEwWJtJvqzUjwc5P9Ci1RvumbKCUgTXXjZ53ym3tAeHV8jtdf6tAKtFU82Ce6WRG7HZ",
  "key46": "57eypmG5YMv2NQVUSgeA4iDk5wV1YorvT7j7p3GX3jfEnEsfdssWyeBtKgugD6g12P8iMr3FG2wKNMeJtQDpywSP"
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
