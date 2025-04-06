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
    "4HWUeHrHr75QuDY9FbJTB4fWbsFgiZcJkJ3iLmDdjaCy6HTT7FZDUzjg2veH7rhZqGLdQAhDVXtmsvGhxFupNtVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64QRQkqSvek54t43VyonETBN5QywXaDzcykJHVx68uuNBAJYywtxXqeQ1NdaEbTg2aUN41GSXD12s5ZLNNDqFKCu",
  "key1": "4zY6MfZLHoHrHWVmVLP65F18hKr6tAdZDZPJDhQWA4Tppffha7zrAbtKvMAcEoM8VjmU5d5Cp9ko83yVmeYXJ1Ry",
  "key2": "5YZHemD2nMK7kKJyXVNYYoPr28ppjc3MTtytYDSRRhuDV319ThJ1d5vMeRuewVJ1smBWymuzM5z7W7PQF9UGHxkH",
  "key3": "5T5RoQFw9J27iQmSPXiBTaurFteyRntKRPrr97PosqAPjCdewW51XmxrnexJJm9rBVQpvH7ELr69mEseDiHAuM3D",
  "key4": "38Lkz7LfjyFx7sMaWT4t9y7VFDc2QwYnDJjWHdb1UUXUttCUsgKkVhPWkMvjB6kcYupGYBZwqoPXjxW8jJUar7JQ",
  "key5": "5wpCbrJ458PemDYPydT48vPM3TDC88ArSFPmmSbSeRha3EdTFtkTwQXnQpPHLGBRfuLzton2c6b1heUZARctVx55",
  "key6": "2YGbnbsrDNQf9QaACgpw1wfgjfwq65XDSqms214JQX5vn2b5g7rA1rMZFUt5fPkcm8xec6vhJz6MiyG8NnSSf4at",
  "key7": "nnCRXxxQvXsYtXtN1W5m4ByZS18mutDtANoHwbxNw27FZ3sLccsheUXBLT4chXt2vZuZAuveJXCQri4aRWvicuH",
  "key8": "3QPRf8JoqcgBdgoNmhy8pgDz7RTNYHkXFNHwwLmZ52JRxqgHwi9YGCZRMZoaZ6kjW3NAq3NsosHcKMxghtvSYdDe",
  "key9": "QHYuRAbnF8NSGoCM5m2y37Mv8pcaGKSBYoHZSayLC6vCXzQbFmWWqKAfF8mMHi2uAgTjfJ6aqrp3tMvMNHxqzBT",
  "key10": "2ZoJXhLaQsppvVKkgCXpwBNs463dEXvvESyzdppnFccDrws6diYaaRWU45yoXouN194T99HXn7GYAhCwLXoezMQ9",
  "key11": "4uQgeHALekyoTmAajwhKpPrmjDXzcC5dN719an2gsFf5LPnmN5WbJJyqCSa32LASiZdxhiepRDvaCmbEfB97QjLt",
  "key12": "HmQ5bZ6djwZs4my49Vd2fSSiWMj2TMU9DggnqyE1ucP6Y3ugT8J8kauw8nNuFs5EETfbn3y39NJ9GBo5Y2TfUHV",
  "key13": "5g7hCRucPdDBcpsNAnkEXurJjPCM5t7rgJCwBGSfa7NhNgfAX2nqfDospnVpgboEfLZQp5vU32Dz1QrFtmyUe2iE",
  "key14": "53y5hKTfhxnALnpbMtgNNJajF51dwKx2sP1UZJXU5xiWtcjwbeKaFByMpyTo2S1G1z46EwMG4HBNXzoLZvuE2GdN",
  "key15": "2TagVMyc2nW7H9caD92YRGsWPWRDm5A5jvEttVrQv63PFL3wgNPR4BY9Mo956gePGfQBLWffuaLmc3V8jBAWCBAs",
  "key16": "vsCv6EUCjLyKcJsGu3fKxhVFmeTAHpAqLQXNjTs3eXp5BtsffU4pBYebuQ6gVKdxX5JUMpXS8K2Uga5F8CMgCF4",
  "key17": "3WdCD1ULjPafyNqwAccTBUKiZy7XcF3w5fn6nRTY62Wy3Y8nYfHfB5Qfa3mksB2Wd77AdUq8B48rkCuGbzhqCmrw",
  "key18": "4i7LmqUvCT8qvCgT1tAaJNyPJiH7G5wB3uugUpVWxX9Z2M8vARsCzD8q7Wc4EGtBerQRQnsqGWAzzL5zFKWEWEry",
  "key19": "57VmDz2NGLWKpqZHjSsdNDwoRnvLCpjdQcJKMToqZppSyBVH89CsWCdcgmKCwxu8aCEnDfirQh9U62bSNrXqtW4v",
  "key20": "4fMKGZo4fN6HpjJniuwDjsXyBXZNX2PPRyEx1b4gt7R5R9wtmzLBVp5gfr47GM8FTqYbQGBfwVx3dd8XeMMapWY7",
  "key21": "2Lme9dCGDEtGqrogr6Bp5LpYaw1kic37rzmMVXK8sXTZHMxW7ArS6PcnhcJa5hzH8usz5U6PnMA5ocn3TvasiSe6",
  "key22": "3Ms2TgRW2Qcfk5zTuUddxgG1MLr6BPWfuS1VLJpGfNyN8YiRPMRMNLS7o3gUMP5m5pnAHngGpWumqY9vxhnozR1c",
  "key23": "268ghenUoZ7vzNe1it57jX6eD1ZU1bEWMqpQPWNr14PhkErBfW3k5RS4vBrPRgWHoRx23Z3XsgxQCvAPzy8xwnYh",
  "key24": "3tzY7SJ9LZdtBcXJoPjuL7GuLbZY1cowuBL8F5jDy9onCmwaKXeonWa4H9gwM6ZMutm8kkUQhCZR6NLtpwHPUQMV",
  "key25": "4pvx5NL2RUVGJC6RV5dXcm8g3QSHjerPhdveECuurebehvvAetWu3JheMdBFrDpcw9oezBQaD9dPwQeceWFb4Jia",
  "key26": "1297kgqzrq4LFy2vanXJZBarwZmJ27FSC6Mqk2gvgM42tajD7WJ9r7SvaYxEXLdMw7gHoE6m5jgZQxgNXZzrm2gF",
  "key27": "5oP4TupexQoFmFR2tjuyP7vPAGmMYC5LLyBARFR3fnhVT6C7jC8gGfcyjZexZUjyLEvs3RrsgJHoRtUX6suAr6Qc",
  "key28": "21eXYCq4tZPXPqis9YqYWwe2WLNW8Ae3W5jx7VChbwyvjufLAtPoxrphVQXGRrtfTXray6mYvgaPwb2YJTTJwAAr",
  "key29": "4jSo5Qeijez4kqXmTkq3RdkqYZMcytPhyhxamE17vcQJ91Z3c12pCbSsoXmw4zuZBkCmm7SzYUk1CduuNjx5qVSF",
  "key30": "5vCnX3mbuW8JnsynnuevvbUiiyCvKvYByHR5dC6HNa2oEewPZa52eUqbgKSrxjVLG91vgVssTb5ptiiYYnezYQjP",
  "key31": "3Lf2HKVfFMGGqJmWPAJQJBZDsqUb9aosnRLqtcMofKFfMwb7ovbBEacfZhCFE676v3ck8ssoXNWmq2wDTJhNVDCy",
  "key32": "2AWfFSycNDvy4nGrYmCczdreLcBvb6Mxt7wkbprdyudFAtNUdWNZqSAvJeDEzNNL15sjjKxyr7N9n8y722cSDc86",
  "key33": "62a1gcki1Z45r8ShksRMV2Xmzsu4PyZMKJYnhR6zfRCi35YZw3SB7JJfbyiEqyMJghnPSd2giCd9qbejbisvuzXr",
  "key34": "2jg69UuUupiHkUE7US5e5V3kM6sSn3hQ2rgT9WjX6kMi4aa14vaTPmvd25m7q48cGqFz3jCdvs58Qu72TLwum4nX",
  "key35": "eErvzXBmtTbHHW2euid42mpHWki2wRNGd1ST8s6EkEa1XmRT1Zt72EjTQ3N1yoZms6mCCqNixm9ZXah4WfBVtcV",
  "key36": "63N682rtA6dNZcX6ujsS1fajsgqdJc54vHgd5zTKvnT4ZXf8PWa9RDiVV3i2LDSkRk52L4pmzixyh5U59FsiBpKh",
  "key37": "5HM9yLAEWQMysTakXzAHNJxJdcigiTz1K4u48354GkJV7h7jia7Uz3Qhp4xSGDeW7Lryb44tY5anY4485kDKBKug",
  "key38": "2aJw4ub6kik5R28zwBj5rcBsjhCi3GHeCkR8rsnPgbygqvMXGJL1HUtCdWbUQmmBzq1cvZN1vtYamRC3Qc4QQftz",
  "key39": "vKSzzLWVVNHnX54RGKrRQFZ4MSpShcin2VmUBaXvaP1F5LBkdLh1u3sPmWYYEV7xBCGt9ButXTKGaEMiTMFJGiF"
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
