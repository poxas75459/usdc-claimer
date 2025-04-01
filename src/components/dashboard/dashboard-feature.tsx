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
    "44UbjKvwAX5KZBntLMzDgfQnSGS1AYAeLcGXxoJJTjo79uGoGKdbPrY6EmSxokWAWbToQ2HiX19TveP3WNRrJ61Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yxBQzcmGJZnj4qCc8yTmQFpnq7J9zBWz9ovnTAEVFEyCw6uAShboLHMBC2zwyrp2cqoYVpUzLwua8Saqq3eyCNX",
  "key1": "2zwAYnZ99XkRbXjMtebsKWVyLXeYScEQiG8bEvkhzUL78h4PVLHvLQmVEFS5QCzwCuyFJmn3GWPMWfZYbMLyboic",
  "key2": "Z3rKPFnZVCFC46iy6sKnnd3tESqfThbvn5ihYouMrNZxwuwHYgGYc2nwYzsSV9v7jojoSFWehcGP6qtpFVMvRY4",
  "key3": "37c7iwmHFyVk5NwvxPhYBLVeGvL2bWX48r2twz42c68QUEK2Ndnsi1VAPUPo4pjAnZNzJKXhaqfuTAkaT1MjXyoF",
  "key4": "5vgPp2aBokiZLdTb7Xb1A1Dcssqp1GNSYqWLSJzDvkPQSs7PxmEsagT15z1Avkqgjwi6hGvcVvW37B8L3MPGMuaK",
  "key5": "2Lm2T1FBCWG5Uq2WqSnNWSAgczmWCiZwaNcz8QfM9Xuddi3vrdffmyf1odHcEAfgpgGqtp7UNJWakNgzQFJMQMgu",
  "key6": "3GcZf6YLpntmGEWBwT2QQMqHjN1W2fz9sAa3cYjp9AbcL86MVVac9jZTQY3ubMo3FTSNzyshAzfCFnY4QrFitsRQ",
  "key7": "5SYKVoeFAWf5nEs8kMRpcX6zGHdesieRTRdh4PjmYFuMR3hs6AR2cMFadVrQuuEFUZK4hHH83vcSjRgMHS9ArAuN",
  "key8": "4YQwYqM8hHQtxSPNZpdYzfwdoDBDtKziPCqMAT7XYh3krE1ZgMujHqkJeQTDaszF14uCJPDPVyMz2qtCCBHjRnCf",
  "key9": "3RMgxKuUoKkgKkPd8pPXuNidxBSenuwsRTDK3PVc1uJRVAM2xjvtJ1cdJRKwRRDFHQNy8cy23ApnLKdU3yjxWGg3",
  "key10": "3bYaTkEXsAPVbzrYGT3uX4xpVtJMvzbjDLd5HLKxxy6Mi5sAfG5SXiniaRVAqjVu8MyUGF8VdEdff4MJdNJcPm9Z",
  "key11": "4iHPAac5SvqgsbTDxzmXU5w37xjZcU3vAyvC6WBrgXEcaqCgvCMVUzmpJkgRXrfQ41DP5LqgH4CVKBWPMAKkeoGA",
  "key12": "42k3s8Xvg1ukshdfqk2JAMJRaUvCAKZNLWx1gqDsv4CZn1c8ETrFEqNuWxvT232GQNVd5vvkx6EFWzycUHYiUKc2",
  "key13": "23KH4oDztWN81gLE9qiwridwVyLvrYMS5eBxYWQMpLxctqJzMCZadzpP5SvVyaoaC7zaBb7YtNERaShJGo61GFMi",
  "key14": "4ZDWW9rJP98aUVAWE8GF83BcEvbWMnXxHp8NuYVNUunu6w2BLEEdktTeG5y5ThwdjYNZziWiXFhhZRVoPh73c5Kj",
  "key15": "2tAaSVEH4ykteCqtCqxTVnP2zh5d7BhGhY84WEom7FBC2a4Y4kF9hZYDBpXjXU6LLXtHeN1aFUHziLZGypa2F9Mu",
  "key16": "3yTQZNYMbzADpktQv6AVJjogGifoduEGSFKGznz37JkmGTCnrEYWTWc8GXYBBXScmEAejRg7DAyUVt3A2PTGMoJp",
  "key17": "2gT9MLCDnHFsGv1ioa6yv74JpcuEv6upYzTaPcN4ZfmeeMUmjoTnSoQLgMBBYb2muVquet1CY866yWrQp3vMQi6y",
  "key18": "2W31YQEcT3WzBeVGBVKg16QMAX7Wp4c7vtVkfAHnvyhb1j6VkELDYBS1otXCehsTwFafoXVgvGLSZYmvpcbunJUn",
  "key19": "5bR5sfoteWcj2WJR2STgSzaNBMJsGqBNA3snXDuzW3wsDhxLBbqHqZ6LEjwK6Qczz6tPNFhNX3x8r5jg8oEzCfB2",
  "key20": "46VrxFir8FLqJxhLJK9q3TyMEdLmMA4uzLXPvFXL2srzRH2vJb84pDdJSWCUtgAc6e7RcU29Xv78P3Fynj4UDza",
  "key21": "NLMVPzELdfwcWQRW7wtRzE1Juoqx8L9ZGii959kNF8nY1xdtiue6smtA3Un9TRHUi5oHUTDnXFTQnYKyQdYxLDr",
  "key22": "288gzyVMC8GudevUtwLRygQXTV6cKZWvnHHiEzd5QcXhQquQ1uAWct5jnHvKpaD43VV1PQGnSTwjVbaoBZd7AUKf",
  "key23": "2pcgdPfeFJ8pkKAYUeJdQ73bXiUj3D32EYqn18XfQh6TYLMcmNk85RwqQXNuayGEiK4CQkG5YtW74pTZ77kZGdmS",
  "key24": "VQ9hxF4Pz7DKmTucLiW1GTPWUVP3wkjCeucbVaHnEJd7zts48oiJjKYdWFL5LzdzCQJBoR577dmWHWhiyxBgHZR",
  "key25": "4hHLijf2uWFoYWPG1Czt6KqC6A2bAnBYu6PCzAX8YDmu6WpzseWAUPczFtfZwVgZEneLaeUcZ4bfrRVg9wr65pDC",
  "key26": "2DAQwgwdqpH5pr5GYQXysKpgYqrYwSVVJo66sGtUeZqxTTnRhyWQ9FVXDwgmEXEg5Be4ehbyJHrUpjw82qocG7E7",
  "key27": "RVkhczWpJX4rwGs3eUnzZrWqBjLPKVyLFBCoUuqBvccuypC7m9JpzeY34N73G4fDUqUqS3C3kyh6u1VCJYERyHv",
  "key28": "4t9vNsqtvwZarTgwVoZ8sSGAK7H7mY8f3xn4wM5sYp9EJyoVdnC7NVBhF4Ev6x1HGH1TGGLmfz6PSoeh2aaa6tXk",
  "key29": "4txxHypXAk5KsjMn9q9ZiZxZXobhhNxP8zu7HycL4YwyD4ie9YQQCr7EbtrmGfWZwa2diPbRiKtq6D65GY7Wohg6",
  "key30": "3qjgyeLQoDuACYwhxdtZEtg7CY1f7YmzqZUVcqCq2rgQhu4wHNB5npo1WQT6gVtpbd2BPtbecH3tjgeckitpNxQP",
  "key31": "323Bq94535jXuTqVZBo15DxTyZ73PLuBd9js8haw3fxdL7kVA4CDPinKKqKYvTp5vaFSm6uy2ZwX8cYSYWedJB65",
  "key32": "4XcP4pbQi6VuM7q4UgRcAX1HizsQYDWv1TW45hTz8YrMCTTeSbqzYGgQh9XjYfGiy3gd3YRYTFNAR4Q23dsYJpyQ",
  "key33": "49yidEdNzPsGYrziQWQDBtPTZniMQ3Af3QJbWURDDvri6v3mu2LFLoFGwPJ6WuL2W5tuH7ZEPuE2aUr9w4k5hvBo",
  "key34": "3kAsyD34bgUbMRJSVPKHf5LBJSE934DSLSMwnWmuhfRsMSLqbvkhu1XnZakN8ZR3ue4V4fgNM8fa4F2FCUARhJpw",
  "key35": "5x1nFKHixAVREKGLrXTuH1t9fcbLBki9yQbzYS1uwMQvRsKvLmFC1uKc8m5RcD5d2iKE57GBoQUmu4UCMZAU1EwB",
  "key36": "5oyB1ZSw3CJCHxoZgnQwidEN8BzisJXMh2LQKJYK8Gwn1MRpYfEhAwffejHpNPmhSAxYrD4RPQw1d2gUJWhiZ9QC",
  "key37": "5HQ89u8JAntieRJctpTXWzR6xLS7urQcyAQjdBa7jK7fJ7N3oe5RbrgZcF9UVM9tQiqiBNHSaMSdqqfHA9ecz5JA",
  "key38": "2NvhaSLSmcZbHKuLn7B6pBsFHhnPqLGF7L2rY2ysn1KCaE8mpCBeisryRainnc1N3WwSwNknTWzRGtovfEkVtcKY",
  "key39": "4D6WU3PRXmKufDiJpcaF1sPhbgEmQ5EH8jVgDQcNsVms473HajgqUNhogNvjRuEnTSHnJH6JBfpLjdWV1pkLCy7d",
  "key40": "cCjXY6NjhaUKDtqA6bc1o4djv9QZQ43X8k28K4JY1djgDrHq2SosHANz5zmMDBUUR7FYMw3V2JVEdpVm4RX6MfT"
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
