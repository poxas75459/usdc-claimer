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
    "5g8vss4mcyygTyP2u84RaDWojNHYkrLQosEwJZs9G5D8BMpLe7bF9Q9dih8UKQ4oAhV61cvPmDBgjDBkqA1Lc1ZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oairu3sUAEYAQ4e5o9R6Nnmb41T8D3QLTrJy7gBTDUXJZQ1nri6GnGbMYCAGekyVXGdJJGab45yEapSfMgnrFfd",
  "key1": "7Wy733HkmWYsYw2vpL9kW2XVLY8ANn8ZzsKzX4HE2jVcFsXnUd4DyXetrZJajoikef24zSvUCT96j8psnG8n88A",
  "key2": "qMSPvYVoZ6MmiJU7DnAkRRDFo3bkPjFf6hUzT7WvE7ohE7cmF7R9iNWzNkMAdZbCzjX4gwWUsP4oLz52ZcRbBSy",
  "key3": "2rDD36uazqvyc6sksNobUdiKGzucFCUFKH4Mtuuq12GpKTKMfDE5DRn7buTxd5zmf5bo9QYF1PZqkXVJjz6e8a9A",
  "key4": "3N7hnQsuusTcU3xEMmJhNfHkKkGMWcWFe4iAqw8LJhPefDpkaiFH1qej8nTG4yXmigtzyAwQfxJoydiMpiXFTKC4",
  "key5": "rWPaTyMxi3ym6dAaEDhg1hLKynage2fUhyNcGkBz4z3wws5Q1qTJEHHmn9f1ibESchfqUEL5iALAC5XSMnXgax3",
  "key6": "4VaNzXtQf6X9cZq6uyAaP9cXwQ8MupgvNnzKYAbikoijqFmkGUvxQrX3uiEuuQyMu3pFtRwCP3BseXnSFffx8w3b",
  "key7": "PCDAsomHkmd4oJ73ZydLVY3C2SPCyJXcsQpqJfdgtHtJtzgxEYuF68NhvHcdWs7ohcDdzyC2s25VBNTsxxHraRN",
  "key8": "38fa1LzvRLQ3ujiDG5ZuxuY7RLDVKpnmcjvKqzNoBpYVGcKW4dQseJWZgxKysfs38E5ReRREkSCNBzRcw52PZLL2",
  "key9": "4THjN1qRBgn4X77hD3FLJhUwrX18uhQ6cvjZMsQaRegPFLmrsZmb4onRFrezNqNycXdA6qHLQUn7AuAbRrQNYCGX",
  "key10": "2VeB4CrHxMLq6QxCdQneQfh9ovhBr5Z53m1BDXn2EuQEPXApPaNNdZGwt53hTqS4vuJGUtofxSWn937ptvppnx86",
  "key11": "5zoMrERu1p32sTQau4P3k5Ti8TiS1Pb2UqFPDafZDuhJrnWtyGSCN5TRbtCYzzGL8MyjXz7u9gT2XxUFDxC5z7uF",
  "key12": "45spme3eu5PmrsVpvpDpPFAznTjuNiuSZVUZB56Kmc2yj2hzGZoW79VD145soU36g998vGfsaUgCQDGvT5mz9wnS",
  "key13": "oHV5HGhtZHHMk2YbUgfYVk4nA57ChVWxuQdvoeZGzSuneuHReAEwn1ugyRX6sMbku82tUzPpF9rmEMgvagu9TKD",
  "key14": "4FwbCAkcmND1D77cHJhYMbcSLMYgsBnDRRHPAWcTMqYtxBwAT2GCM29X6HFDBP7k6P7KcZvz8PByWRpsjzs3phZV",
  "key15": "5NhF92ftgNgcVVJ13pdPi9pkhzwbfe9mggQZNVMv1iVbYT5ZfYMuCYB3Pge4L8ycipY5yymvAK9pVHPxumzJdqvV",
  "key16": "51QLqPzyvDfDHaaVHMWUz37osoL8Cz5hyJFpzwJDzLtBdnaQLj2ugg4svEdUHNVGDipT8LUAeyHFiky7FQnCfeki",
  "key17": "tsJqoK1c1NN7Qtrwm4UHKFnwyvDwRSFHYnpbfN6BCvh4sVKCkZoXWa9kQQBemEU6YCvQpeHhvfEhcHU8K6JVHhv",
  "key18": "5iir3J36Y26yXy74qqBaXMLVxk6nyobNmUqeSc95gogcwWRVLprEgkbLYwFSo7x8pRwQ7vvxRxXqx2u3PVLAy6j8",
  "key19": "36qdTCzprUz1SNtz1wHffqKyzLWJ575bD9mLm4k6mGC8ZJcGcmr59iqnQHHwYwzhtTSguswauBz73ucgANc6mA3v",
  "key20": "4YQzKqmsqNpgNU47KMUPgkq6W8zzmL1hUhU1QStb31sXRQ8MNLoDXCSwPRoT9JWCCHsMFPwPRkCPWYLkpmqZWPGH",
  "key21": "2pbhYFrE1eJZSB7bBHehfH4aw7WcZo4zc6zhnayF8PiFALeGuoDB9XceR18td57v7vBffKsqgiUvZTDM5G1GBrFy",
  "key22": "2FmioMGFpxsk3kRSaADDXbczVqRaDKTnazWDWwwbCgU5WFkjPkBqiFpKi2FqwAkHM8f2is77t1b8De9Urgqqe38s",
  "key23": "5Vokz9GyVPEd6yGEL1egg5MuM3jP24rpixkNGVZc5nvZhaFZzRbebtGYk4Lov8vXSr2KETbMbDB7RzEdsSDc8ow1",
  "key24": "2a5pfP4p57xinEheHDCWs3uKg8zuQ3Ssf9GkxmFn2dLDXRgrboPjutA9ohoUp5d6BvNDUfR8nDigGKiityPzEfQQ",
  "key25": "4V5KFw35Y5DSJqgP3cA1T663kqyKKossGo7YHEyCQMr1rEtg5F3aKmdyWFVqv7jHHEHYVxMDxYD87KE2e5t2PmoH",
  "key26": "2zCsxNFxhN9KAxDBfR4etA2CAF4jjitooAgxpRQaYJLeY2DZdksfmsNVcJFkAoDFX1LftbDy6qGZFrDqD6qPoNKa",
  "key27": "51HfjVqB1WzZuHrSJZgjU7RJvsTSv7qfjvg6gh951h55gdVxfrg2Nb1MUxjDNhAbv6ckvaVmxJCWHdr8pV7weF4B",
  "key28": "aHEStK7SD6KMa1zuTPK77rfncnmjJkY1E3cKvRfjfaZAwhyn7vX9bKPTh8bjSizkruwmjNtUGA33uKKRQAX1PoU",
  "key29": "2vaej4VErG7JVnT4u122XBMdYZPBTXmkWH4GPwZmYVFER6onLazcg9jxLXVCtyJHqziH4ZfjJqSuYLEAazj9qr8N",
  "key30": "4G9eNVFWzKXKGNW18PpteZPCVtX9zYYhzi2TnecAC2UazAME1iEcs4p9BcR4am6UeJ2DYPZxG3cbgdoUx1osSx3g",
  "key31": "5N3b41upDqb7zPdAkqhziPkVXhzRQgBirULuJGcXzut3z2bV8biPZ5bkzXgLdztcZAa1XypFZGYWWy3fc7GgZUe",
  "key32": "5pTRfadFCkXVxmtaf7mb2eAXy9jryR9jhNntKxmz8LmKMWozFJFnenEmBHeJYwqTfQH4gXqHVHXZZQnpAH6ddyNS",
  "key33": "WoVzkwYdskSCKVJaj2HaEskTsVsnVAp9uLUgwxpxafySRBUEDgk6kcbdf5LV2jYWxv87katYhfn8MRrk63fxt8J",
  "key34": "J3q4C51Fa4h9GJU5fCdZ5QjQKmKgiXEyNos8f5WAVZ5YpZ3iME2Y5yQF9Lz3T2xHcHr17mMcNLZWbMicrVkWRy8",
  "key35": "4R9CEfGaYDg4cNWEgfyWSp2KWBzHvFyHGrCzEE5dpXBk5cvueafej5UtZcuev5aWLFHiGzPKK4WduKhihn6VdbG2",
  "key36": "3RX97mzrpBUwuVqeBZCsc1EfQ7DkAtKXc84uCvkZwq2SsFL4zTLdY82NQxMCoN3yZF1rXA97nD37ZB7kQL4YJ8xo",
  "key37": "4NgnVPq8PNDVmLh8WTrERt3faYdUjZ9KTFv9KiNjYadqCeGvKkArKBKr2XuKegBCrBtqbJK5RAaDGbuxH1M8973T",
  "key38": "5fFehDQSJAE8jve1Q9WtUbYTw2LmNz9xuJpRcF5Y57p7s7HnncEmwFUKSF6vkQs6SDXjjG1JzLQNZ7fmubMjXTjn",
  "key39": "2P8dCgRxETHAuanZMApEndLz1Y3bv37ep8uXafvbCQ4z4tF97Gi5NcWC2XSqW2paNGVcTGase1gJz7nU9eAEHebE",
  "key40": "3rcpQZx1pqffSfbypePuhBHNkmasGXQkNemrXWywsw4Ggv369vr5mpRpsj5bg99tNbLUnyRv8RDsQTG3HS2wwvun",
  "key41": "2bP7rviuvJUPVQafsfFhr9PD1z9pBYxaAngQM9ucKYnT7BrmJgw6BfJoXLjkHHta5YmRYxnupCzdGTNfar6d8rez",
  "key42": "5BFyWPSzcVkYxJUvA4wAbsaYFHsFYQusFCWU3wj9XLButrs7eCVGeGSc6MYZKpPXZBUjVfoKi6vqPDBEwB2QEaXW"
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
