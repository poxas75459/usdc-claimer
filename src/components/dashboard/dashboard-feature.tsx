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
    "4ChYC3pLvGLvNXv24nDikUr7Ls89ZgeqU1mwDcaSGpKCDPSJLCUuGi8oUmEv8i6mzqNmVVoiEfPGGUYESNqWZHWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UAhVgDohenDkJv3XVH2YGVG7KCPzG8BKP25F1NfitC9YpaG4V2SZ6oRnXprrTxWfMNdrcT6bnPq43ew2HRomVYg",
  "key1": "3bZecayL4aBKQ8JDvXDswLmoyfpfWRRXFbiAobno3enuiKMNbmMumwt4bgGSErhzRuUioEYFLna3NNGg7yNgauAL",
  "key2": "3HV1RECWgJktRJQSaHLMEUg3MS9dUCEa6dSb9Wf6E5gb1EGRMhL8qxkjMWwsPTerPR1RE9kzbg6jULTQPcByQj23",
  "key3": "212HvzTWQqW3GMbwf2exJ5Gftyfmgw4MiyDhVZ6vUPxAiXzbTJzDPtyt2tr6Hs7SahchYce8Tz8pptbw66DwBbtx",
  "key4": "2Thav2721ADrCuT2vwX1oJ6hsX4FCau8Q8Avtn1NbgguNB6ReCcYad1wgtRMsY3TGsK7Z26XYWRpxLnqc2GUXcsf",
  "key5": "5LYBkbvWiyhAQr7ij3TJpP96G4G4ukGYsP8xwHsG4hd6iKmFdE1AyDy3LRcn6optNmmoE5TjkMPUMxB5Ur5MWK1d",
  "key6": "67e1ogd5jEJ2iRUWutKo13fxxnMGgcqqomQ76VE3sHAoBXwkYzotsfU1g7wqKkysDH7SGR1DL8SpmX54XqFecdBo",
  "key7": "34zR1GZmVSx8EfWkjxY1ZPrr5HZtQWv9XpCbF2jw3C3J9sq5G8zT1Nvi62vcAMTPnRTn9LzATrFjq13a9fzLxvr7",
  "key8": "2nmyLcqsm2KhSgxRuSyESnqnL9k4XrAgWMMb6uyYDHGkFSSkiQJtNqyZWw1KKqzF6W6Suj1BQgN9yqGDTEX7NHYx",
  "key9": "5xk2hkERUNberi1Marigbd2jnE1edE9qQqntNnsAPDRVyGz5BVNkDnppagfRAeXcUzRMxNypawHUhAfb4XrKDc84",
  "key10": "yXRGv7nM2n6syEoLoH2owAzAecHzQ1dxVuif8Xo3NZGvigN28pXGFKm2fU2AmEUo3uCpS8gXdTuYucMeKTyRfah",
  "key11": "5eCvPNFwBQFUeBNaVcyByJTbPZCSW3VbvKSPhoNDXrctPEHAhzMDSWFz4tuGHrXfxADk3vzvTsX52fETDeBixJ5e",
  "key12": "469Gbd1cYwrTszenAgyfyDX8oe9iC2hwuNe4GBPnJg8tzygWR21N9w8ywfUabc4Tn4BGvhsYhX2j77rwoyfYTsUy",
  "key13": "4ffcG9SwyuyfMTGqpSzGyKX43Fvy1fip2qDVYzGF5estMjvPJPMqB4LsiD4yuKJw9TnaT5sF3i9eom4Gep4wNdEJ",
  "key14": "26sen1hkfuKPVi5teJwZ9PGPzHqQG9eB6WH1CsPcZi71Z4yQEDpvP31P8nycCxC36raRfnCY95MUFFcXxoWZVWEc",
  "key15": "3QKevFByoYNr8cnD5pEz55DSFe1Rb35yQdAhaXDZt65XvZcVBjedG2BjpY8reSrmkrqQ9Qxz36oU68qVbN7Ruq8E",
  "key16": "6MmrDtiBnsRuUGtV77eHBRSd3gDo8Pis9w454yQT4i4u9reBD86nNEsXFWQn1dgtWdroUWifK2JciTHXdb255rX",
  "key17": "B2tPR7EqwB4iKPnX5uCXqSd7PL9mGL5XRJKWLv5YpfX9hV6vDr8RgTAduFXL2PfPgbes2XTScWww9mhLKvpgpgp",
  "key18": "oogoGLWy9198915kcU46CH9odzLMNehi8KptrdVVPcvmgGUrB4SxHFsEtc8yeB9opkCc6TmzN21WswLyakVQtgt",
  "key19": "EHEbk4RUsCnzJfrBWhoow8gpaQArUVKHA9mbkDNQnw7tQGifAzFeGYQDMzwuiwMtEMxKVzvQhGVohUsytYy9NGA",
  "key20": "65gcZszm5YhXQQ6RQk9bK1qgjBDYiBUVPuYA8VcgkJDS5BHMjhZPhDMUCF6oX2G9LMxPRCzrpdaeUN5NvcWHYwmj",
  "key21": "R1dgF6iwXScFHZRepU5RRQHJayd1QnxNzN7fFGy4mFtxTfphSMPeym2avs1SJsGxWXnF6TPkp2vqa76SWRVgxmP",
  "key22": "5wu3nYjKTENFeCMeAQexibAvgFyvEDgMLDa2B95uUbPDAJMBzxZQV4Sb5bJViahYiDgkgp5K2YDkzo9VEbpPwjk3",
  "key23": "23iw9PBvhbDjGqri9ecuqphDXQ7vrPbx7fThgYg6TJ1rZ5onRhHAZZm1jUtjifPixEKmxb9wxJT3YSssvLyFWxZS",
  "key24": "3d6QYVBbEoZg7zEAPka4LyUASFHdA8WQxmV7QWurZSyKzE3qUL2GBgyKqBWyyYfsrLjPJrnsXLTP6M4Qmbnou3t1",
  "key25": "4LuE6ckTigGYyEU4cyAa16sE2V9KnuP84LEuZ1emYctyGEH1ieHgkwUAUkHyKHaMx8hxEHv4xdUnKFcQnEMRN1rF",
  "key26": "4JEgjW9dQ8XQpPg73WXbe3raR5uoAVBW3GjW5qSP6e7ddrE5gahS4Vo7jVXzx9oTCeUV6bp1jCdVia6ZcpbMz75p",
  "key27": "2MW7yjqeB24axYUBAF87WgDmknBzcPLYNczTvvp73cpysGgLp5eUVYnkTeQ6TBp6VjmaonvHPqTVjwGhZhVYqQQj",
  "key28": "pxx7uYPBMbLRazZBBcKYxX56Be1PYAnthHvJVrDytfN5AwgXKbUkSMMFUYeLWUCUjZYCHzGKGXM4E9wEj2fwGpf",
  "key29": "2U7YJtdCBBUoFNj94mAnPEzRAjeh7pXhZaXw6fPqam8YvvPPqRmrtrw1VDrmBKS8HamQpjtF1eitV8gvSQPcVucS",
  "key30": "4wnepUtPgQNG3sdLsDZgppZUvJcRCSU55TM4Es356P7gBXw5xBhU8EaP9WuXKUfuhu5TUeirbsAKxx5r1AF1Vo8H",
  "key31": "22Um3NSHhL6hYqJedFvAW9qKpndDYzr4eGoyrPZfjicVRSU5kFqdmWU1riXNwgPzXsN8TKbjXeDyfh1kM1LsVv1C",
  "key32": "4tdFrSbPK3JNw2iL63bMztV5XCMvdkseCKUQSz2cXVg6MgtQGXYuA4KqAXx4M7cRYr1WUtNG9dZp6KyqMexfEHHt",
  "key33": "rnx1NaXhyDRdnvn85FE6zCndrFGFvA1qXR9HiiQdjVtfQRKuz6YKGFNzB2GaqoXEoD5MzviLtmhpEFHMzk1gFXF",
  "key34": "JsheZDtQW42hb5N4ZDzpxqqxBDrYT7DtzvffK9AVaqyh3mVy7KXB7NExdaTUDdck25xDeYSfbp3NsUwGn7X3UUZ",
  "key35": "LpdipNDjoMqdio2bFp3dsr55p2BZbtm1Pvs6T6jDm2gYsgM2cprYpGUoMXWXckkuYFgXARTEXZXkCmrmXPzaoZN",
  "key36": "4u2QJrYge1hi4KBkD2kg7pBAjHMPDXjWR5S2851qE5cjo7NMC2fcZ3JweivmVwZTi5v21yLF33bsLw28nh9zM7ow",
  "key37": "2MmFzGBWRm8zw21hGvM8sJ6SJZ6ERzm2G9Yx5wZaJ4Hf9E2VYkyhFu95MZBz74JF96VcEKs6VCp1Te4LSMQ12kp4",
  "key38": "321CExAWJ3LHMHbWNgQHjNGV99BbNRz5E7fGebLAhAMJxjhqj8cq7bE7aypdtp8nXNKtt7TSEbZgbr2viehTwrsr",
  "key39": "5QGZ9jgjci5QucHsdHi5WZ9wgNZAkcGjMpSRokoAD7wYvP3k1DVq7GYShCL8o9uAif8qCKQueTXKuGzbPKSh8yH6",
  "key40": "3E6rHauEn2ngoaBhV9B2SbuA4QCCJonmNEMAeunEWVN4gUyhwLn3ZyWFLXBjDn776SFr5v3kGkFWiLrJepuWprq3",
  "key41": "5a5shXEa7KfRxsKjVbC7SpKgzaFnPUxvYWaZ76Y7jGC2KKyqE6dg9mmGe1F6yn4YsMDofR5W6gsLaxkZSP6iyBDH",
  "key42": "4RfF1byWXbkXAXMoamK36s3sA5ujLiABeLZPYoqncm5aH4kFarVDbeg3itMPPBKRzFFD3g3t9fpjfMJ8yV19uroe",
  "key43": "k4AEAG1XTG8feeUis4yHPKPmK1pS91omkvnScjzpbpXUt4d33kcu8uWRvzxHTvRBEu9s3GMX73FjB1bcRYYa9ZD",
  "key44": "4LW1Sv4218VeGBFSHHrCwLSeSzHmLX6SHzSiezyG94Zgrc7dt6yH4EyFd6LgMRQSDSS3YDQFkhpEn7GXogf9SJvN"
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
