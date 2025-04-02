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
    "4oZP6kka4YYh1rWvkkpEocLcbCD8WyQb63Yph3FQafXhL1jxn3HXk7SmpnL4uMtDeGpJqHyvYfTvWkVopCkG6gSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1gAh2mPv9xFrBjuP3GDUhZoTHRkBXdRpzmM72iLSEWk4NYeWfx76bA3fZLWPcgehYwmi9fHVqRqozUctyRPgy75",
  "key1": "4ATPxWeNnP5tn46ekhjQKmkEL4RBw5Rms5PD1EcTmrhTVcCR67e9tzuu7xycsQWSGeDyrTEFcZ4CHZ7hbXGagdCA",
  "key2": "BYPtC5NFLGWBDaayFN5tYwwSF1nUKftLQvM264813CzFWbc9SVtn5EMCwPGiZYnb7ZXAutQPc5mJP16vg85oS5m",
  "key3": "4tZxCMJScEZhCBeQ6q2mV7qvLpsgXQ5Kn8RvcpAAUcHw8ckgi78FzNBQdUG516LMGwJYr3EDiYYUMW8qT7AJUn2X",
  "key4": "5C6FwjBWv1FqDuV1pddqfwAurJ1qzfdBZPy742WrqtYgnrDjyERzvV8nFw1SQHtHdyNdwXJvtS5617kHMm9wct4T",
  "key5": "BWfrBVuW29jBVzWmLRGKkPgsgpLWMVvxGkBg7Ssw355EyeWwa6irgXhXvwGwgPVxXDebvaxQGCbWZkAWGdG3YSh",
  "key6": "284PBQNDKraxFSov9Yc7dgimSQPFzV2hciT9d3RXhAY4Ha9R1ZnR2dTYChj9Jk1eUhxkGHxo5pdZjFXgfG4Cm2Nd",
  "key7": "32afsvDNaPczFYJsoPPm77ANRZw6DXMEekdypEdJyPr1KvBxhYAT3hF975JWxRaEUQx7nmmBZ4xrhNtCfkdRkZBw",
  "key8": "4iZuZ4MTMfqi3QsFeYMC2U2p8AugAPwT3nfqvgkY4JCWhpVtbgp91N35NLDFTpN6wtFii9shZPKvBQbAHX7kGtYY",
  "key9": "55FC9RAe3PyMjQh12hc2LTE4pCR9gGRBXAeW92PVj2gD28Edy8W4ur1R4KUeSpdvjBLzZ4HniRrSzrV5uuXV3ME1",
  "key10": "3YhqGNTGQctpyiU31WWmaqY8NRy9tTSv7r92t2KsvBidATwx18nQazHvGfUFm8v44bLWAe8ekAVCyA89LDxmMHwu",
  "key11": "qiQTkPkvMvyT846QEBeS7JmVZhphEEgGfHyZ8sjXdJWLDTpYKB9ns9MD5Zt85UucE8rjC2ZT3DPCpN599UNEXjx",
  "key12": "3TiV8HdbfuLwsD5DfePAvRpyK6wtBEKNA4tS9v369YB8kMWEMbdaS2ToHUCGgfAb8F2goYWFa3LFaGZv7DWNxiDk",
  "key13": "4NdV9Bw5AhaSbzBMDd3t3GyULSGRVz47jtkJLrpcZkrTJukb6EEPWCNsFgQpWcQH8VAEQEYfJJ8cGrvgtLGn2UG8",
  "key14": "pzFu7NW2n7fxEzpjcUTpwrojXrAkETtr6DiNP3282mB53YwYqgnNTfBTsvgHQtf3x1iAmPM2FZCPnrsD5SzFDcV",
  "key15": "3LZBxFhW2Q3zfm3PxiKneW9NLMK8iVcPCR4ahiCN1hSVtdDDjXpRGdkEqiNeE9r7KKa5pzmiMh2e69d7dJZMMASd",
  "key16": "4tCgT9ku9drXhZSUtsmyTTiBkNFpddgnyrdn4W7DNAnvxfwSsHavtH5XuaKwFtbZxAe6NzfUEdnRxiw5UxMLxFHq",
  "key17": "MzLjRZtxjkvVvKRFSpGiEhxYK4pWP8ooGhYRvT2mnZQR3pjFMC6D1k8jJiBsEDVwBg2LdkCm85wM3vKSFmZB1UL",
  "key18": "2BNhiqhNFwCmuBx8cGUTzjXRtu6ynEvCjWzCMhohcmAgwg6w746SLmjgmrTCG2Mj7pVeiRZTpMi3B6HBZZUg5DHL",
  "key19": "V2vFMgqL1VAi1g7dajc9VZmDE6VoeWs2uVMGpMRqJAVaFXvjXzGtCusC3D9Aaz399pZS8ASEjXs5yTpvVDKZNxD",
  "key20": "omh39rxsY9Y37SeKLve949RoyTXHUfykvGzsiQdG2osbszbD8a8WiLs7hHDsVTgcBk6YEsw1hseFvmdX65XMuW9",
  "key21": "5qdqf5NfH9iXJC6TFuZwzyKXVUa91R8gSRT92xhECbcqnUA2e1ydCyVYd5kVs1dYbwA3jfrJeu7FHpFhPNxx1RkC",
  "key22": "4yss6d2g8jmjH6WJ6WRGgGybsxm3KpCYERrTYrzizREtuymRWPASZjAEgFtAWmHNAo7QocnPkhVXQkdGEHAGtVKT",
  "key23": "2LQeccEjuw5KLVuXvrgt9ZC9rghWVAn5VRQxVCu5oMavR998BwX5J5QYwo7nnVhMXF79H5Asjtm5sygiqXroKHYV",
  "key24": "mwZ4wf6UGvFRRBBkxtcnsRjgkhHH9ELBEJnLfXic9fdWQynVFYJze9hNHGBqex1XAsCgBeaKK5Jur6rqJREW99L",
  "key25": "tyqZ2sDm9pqFGneb3Pk9QokSrbvUGRnXnnmcqdZZwFbGgnZNSYUqqwf4pfRubZNuFExfzWXs74ZYiQjeU6gNjkJ",
  "key26": "3hDjmwVtGMBjSdNgdmobHv532vwT7EVDhaYT9Pawc3LkkB2W3hZHF5CRk5WMw1HWM1QbDnu4Diq6o5aWSjRygHZG",
  "key27": "5T6EzogemRtC8WGYPATMq5Vpj1Ju4Z6pHRpY6E5ZsL5Pmnp1sovPtJ8a4octoZF91R51ZZP6zy3iuywqZVxEjr6G",
  "key28": "4DBHxFJzkPXGq6X7TpPy9NwE3VtPqszhyzjnzGv8Lek7858u8unyyzPvxT4FS4QhuBqLdgTFAU7qpD1L7C8KLocq",
  "key29": "2QtghEgWQaMUCFc7Gih2RruRL1AMSFj6AucCN4Bw8zmX94zpETrzyGmDTP9BkVsvBv5Hgiw6CJXqmJbBHPWQHnKy",
  "key30": "4K47qogbnfVVcQyrnVzh9QhbH9Gz8bkh9e1ZgpNkaMcZ4YqPgu76zhv7SUZC5zbPsRHQJhJUHptZJCYYL4u4EGmm",
  "key31": "3aNYqbNh7TrVq9tLGGYJmBZD9XRaaSo5sxYmugKGLzc229Ho4PC4GCspgHWPNAEAoF6qP7mLkY8nnhSYfjhWwpE8",
  "key32": "z8auKShM9C9ovAXw96QRRjcqLT5ea1Ag5r2MwpZA9j5cXXfA44aBg4pbir53sneaGiwXAJZhtFTrADNoZK7aFXD",
  "key33": "HNYjAeNhnAUc9rLZbMbJhsnPSRY45ABJsKmGFM7gvp4pxwoZHygKecd1ZLpERKvRxHvS6y39shMsHXcPCQYNnEf",
  "key34": "5CMu4gN9inkd5UiZbC7CEVTGwvHJCmYHRH5ypuCWafH2wXFaAwY3Wkw5RwpyhxdioiSCFnQma7SnrU9Q3qmJKyVW",
  "key35": "5MZ7PD2bUUameJpfC6h2ANkTAAzgx1MbDR4vYitTQue7Yz8nWb1pzDpooEch86nRQX2UAMGj8n249styMtUN7Kcn",
  "key36": "7xYpn9epMALabGszj4hjzzJn56ahRG67jDdKNibu5vmCoB8WVPS66y3AAvmdMvoBsWB5xmbQUFbGJ4QktozVg3u",
  "key37": "328u8pVuFAJWqg5J2TGMCcpqq3QTxnaNRdkB18gbbVyBzvYFt5k6sMrPd2vPFckv5mBB4v4RsZzGSgNqhPSpCuvr",
  "key38": "4fsUoh9vakuCUjcg75iZkZbVGNPZTzUDeAqPdZKUho9gJnyztXVmePschjW6C4r1xfdDcSAsXXCKAdqZF9EqUmLz",
  "key39": "2ke66v2ky2ohYhQi6WRd1s2YHGaPmF4H8TjFegF24huevCobAvxZMX6G3oeBbKnRoJxkn21mc7JJAkpmHPuod2Mp",
  "key40": "4rp9C9oqr8e68MWtsDQ84P4n6mBVokvHtHhF2WqEyNrmyqiDGBx5vgQRPnM79BTFGewEEXnYTun7efpXzAXYezrw",
  "key41": "4xvgG4vGNCRHhV6rdQwmLJJjVgGEBrtUBcWTpwqvnqGxh5dL5v26kEBEuvovXoz5siMFq11WQNWWhU8UCkGVYPN7",
  "key42": "2rbLxNAcne3121ke58RCKEYC5A3aAtAm2wYFVgLBk7Nf3Lq6x4HKdgHUZoFstmZFAQ4ErxBMCxjY43hc94qDor3r",
  "key43": "drtG5TTZAJhTEMc57BmeHrberg68P7NdrR2yn5vrncKXe9g9oDa5EiFLKpe3yFK6EYBaEo86ZiKb1AtXWFdQmrc",
  "key44": "dsZmX4vVDLbiizEqQsg8Q7p9dfUng6eqqtfBWYs5AWJwRqvSGpZJ2sDEcLJUWJEnB7a8DVP1UVLdA3LhQWitbFo",
  "key45": "5Ux7VFRF4hatKZd9ks4JdTa55s67F3z6chGSh77mqGV3avaxjzdH26MQoM7Sg42T9doKUoDe8vDkakj3pPwzeRBB"
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
