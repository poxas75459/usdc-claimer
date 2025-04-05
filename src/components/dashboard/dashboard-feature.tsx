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
    "3pUQ9FCQUMx9k4mzV3yeTJEKcMDrtjU985PPTSucSnyLQY3qA95faAxPS9K79ANSGLZfahjjik2s3EFgHc5aEcbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iFVTcbUyFu5BUMmHiGvQdbWtMiyzwRkqwab3efHVjRCTRgrgJC1EeagfzDMDpAaWERunnvRBpi8pp7GtAS9dGLv",
  "key1": "5yyj5kPWidinY1DNT3WAeSYgjqqTSSyDHV6ccnX67tEeWeUULEvq3rf6txa9kUUgfFhxd6qwyxSZvSHRChed7CaC",
  "key2": "4KfLnaiV5huUJNvgQ35aNDKFQK4Ufb6M63hozrb8Cz4A3Kv9s8YVjAzuU68cPe1e81aZ6v23xpw9zzAj7cqyFoGN",
  "key3": "5K1Nvpxr1PQvGqGHiigjjF8ToNTjRKqeSHheVi3Sawk6aaof3a2xKw91jYZ2CUxtgnjrmGGqziPhtTtb346GWpYR",
  "key4": "3LYasTiiqByxU5ooCe48tW2Bn4Pnr1Jitgwgp9oGbG5oTVKm16wQ1gDpEojcma7viqZ1yLxD71A3WMN8zE6AkHWK",
  "key5": "2LHT2fxBZwbB1pDGr9SQuSbqEA9LKXszU7bmsTeKRTFuFDBGcC7HSU49rvxqgrJgT61GtCnhnQsAJDkWCqFRL55Q",
  "key6": "3a1EYSjPWfDgQ3REVEAg7DKkVv9PmLMP1kRsy8T5U3nbbvUp46BY39neHpDacuR4iaxJYw38EkvLp5bn8ayteqcA",
  "key7": "5uZH1oUHzA5WiqW3TGNSd5h6h1BfyMF4kP6iLcEgmoha1H5GBcGVRyvTmVuFSqKops3NeAjWmpPJv9BL9RqoDAWk",
  "key8": "5b5ceCFDYVjZR5znHzW48zHfamSM8m6yf38guWGkj5g2ASFK3MTooe9wtSztiv37u5FnxMoD98CtJ8w4eGsTq5y8",
  "key9": "2E5E2iJAMoWPXJdrEfq9gWmjXzVUoMaMRxj2oegFutfVdbxR8jnA7nwE4oobKeQEaeSFdJjn3sUAcnmkxtADc1v1",
  "key10": "aJH2WsRUZf3qbY3BNwiMvcydJRuYAFAG784t1i1QhwdUgBtcL3Y1LbioxKxR1QXReT3P9H6npWozwFNKZZPAyU3",
  "key11": "45wxQjYhbFQ9eaHBc47vT9x7j6YtqhiqxqnbgtPSNpSr8g93QcheurYMmTfXcjg4qkjhbF1wbRyqWmtGymkDAnS8",
  "key12": "ucw9QNFe2QnPk6Z1EMzUUp73tSbhY7Wry9xmVsyt4gCCTjyykA1XLLBqwNfBvk8tDVzK9qnddEkWU5hbuNw1jU9",
  "key13": "5RPZR3Q6wfWqgX5xxLcUhd74uC1xon9cTMXAn9mwd3bf2ho3kpgBD52mi7V2hT8A1zP5CvstKXDttxVHH28Pgnfr",
  "key14": "5BwUBFsMFkmbV1sLuZuRoKka5WDrn5Ma2sRphEzTeAQD2nFdn6or1h4YnTRwUWiw3zduxHoSeJ4CPrXsneFpFMUi",
  "key15": "2kLz5cDu5LLG2Cyx7db9EQecpC4UqNjorMX6sV6LJE6iLi9kHJf6mShgurjWHWvbbq8V1EKWT5gTze49aUSJi7Xp",
  "key16": "5k5U2yxpyEB6gS3qrSpHfNxLvK2bsXSUDYdRMem4LjBsrsk1D3NR1Pfbg25zgjpSnXPBBR6SwUJ8AD79YHm2o6t8",
  "key17": "tPEjDSDSbM8FUesyYwCHVDTo6t6wex48Z6QA1AvnhGXibXEeqvCo7i7j65a2osF6End5A6sEB93vPTQCbuA5KNz",
  "key18": "4L6hvUZMBwES13zk92uN8cbnsYEVBttAxiS4YV98cckr2jpM8dAbRPof4uQ1zfKpK3hCnkNQA2gjJdNxsF3gFfTW",
  "key19": "4NG2Xt3GDRsujZZH2FBAXJwZdhV7gpdDEZ41raK1Jo7SkGFTEviyrm65H2CheFZ72MEyym8qtXRsNvRSjGUNQkc6",
  "key20": "4tHdjH5BNUSb11tojypDKLm6rTswjLb1kDkLXEJaR9yHU7yCQSF7q1s4EP79wvX9UzURV2sdYtCHFodLJQKRBNUG",
  "key21": "xPGZMVwP45p3a1ptbR4TmYHSJzFZnPViVx3nfXhU7uZ3LHWdujNZNv3jepbjLwLAY8E8BipwunufNks7VwsLzfX",
  "key22": "3U1kEum8xDNcSk7EiAjtiksyu82Vbq86zi7iQ991ucmYgVEEK3ahPWXNy2hGJ6XBNbpYKGJEe78tzewgEqfaHLkU",
  "key23": "akaZLUYqB7sEVuKGJ5TQ86njLexq9qDJR1gdiK1H6oyFgjz9n9t7GM5FBykN4P4M14gGYQ8jZiA4tEStAACD7eG",
  "key24": "5qifP3MLymSemKiux7CmUGpsXChnzDKoMUNCj3ed6KfBvt6ArZB5ssNpk5d3UREKaVpXYYvkN5T7NNYq1QvUHd5L",
  "key25": "wcAMn6AZ5VvPALBD15nNonr7pJkUtEqBAUuvEo3TfU5DkmidLQbnvtAw6fHknTkKJXAjiYYiQi73r9cT9ELzXk9",
  "key26": "2k3i6n9bH5MJXE7NgZRikWQDBRFLLLykhzdEb616EgPS8pbkohd9UesTd1cfyBh5zZvXBBVsiD8d7HV4zr7faKen",
  "key27": "H6oZUBrPumbHthP83oaAUbTndi8A6yTVWs4CPbJL7LjhG13JYW8RmSRzYxoLnxpFdofCMexzvDykaiLj2S9X5Zu",
  "key28": "5jCFokgdARSYjwF9G4SpWbeUvXVCjnhGBuzNorfXshQBrAvJGEiTeYVxHBu9GEMuw1BdpSWFXYPwLyn1ZwRj6cx8",
  "key29": "2G5rHsnaKsgPkch9TBGqL9RcqRR3oLUcLsb1HBbGfWmPErgZwiwWYfCMAUSph9mUFhqTH6BHk9t9ao4iuUiRf6Kb",
  "key30": "5MXjqAZvwwJSdJQ4EXQ5fPvS5AfhWkAuneYjyPUbFR9bTDResR4vN2bnSGpAFtErsGoQt3ZbkrRwMoDGWLL9GQoz",
  "key31": "m4f1PrkSR72oYnvCnfZM1hNBwBcRTxKvcu6df8h8LcgwZpztMwHHyjBpYYrdFoYWiEisAzhKFxLrVU9Lmk2tdLu",
  "key32": "5HhedJcB87RB5jwQ5BvwaAfsohd4xfh9LnAbnGY5mHNBqEAi2pCVVjV5CFm5e2MoN7wuLekWzQq9TVXHexf8aFxi",
  "key33": "3rEkHA7iEX4rEMg4Ut951jSYsJ5NwtkmZWcftD69qKLigiBPUrCgQJN5kKuHcfxpjyKuW95ctVvXNPmUguoWf521",
  "key34": "4vL8PSuPuFbCWkcBxvQ5iqSEuEqnEXgZJTLegKUU2dJkQ4M11J5TVpBvMxfvZHEiwWcQu4PZiJsKWwtLZoiRAaVm",
  "key35": "4jcULcLLANLYQwDp6zBgBPYrvTq7tErgXLtbaRmfxRouHCkXYuBUe9bNAs6R4LXozFpk1msVqstPwtaQasKWjuzW",
  "key36": "4p3TZqVkPenZnbX5S6GvWutoE3xXd4Q5H25e7LiubrENFNaZpYeeUej3VCJsFUEEkrW57fq6QDtZs3iBcDQ2wmVc",
  "key37": "2G7EqVeNvQ24zqRL7KCz61jBbGe3Jm1C1o8sgtFvxtR2UVWPofvnUYpbcBZb1rQDWAWvMiwqkQnwBcrGT2zSJiaT",
  "key38": "jWbeFYxBX2EirYQ7pSaTMzx89tuvGmdt86sqp7PadnXbwPypXz4r6p7hi5peyWpgZPRkyQeJ143wDsK4TjvDxaG",
  "key39": "4U5RK1aJ1sTeex8PCDXqM1Rz3QLtPMRZiwyu6E6nW8Au2qCpvWBW6P3qKVrjQpxEEhJYtEP45Fvk99QH7B5YowYa",
  "key40": "3gvFmXxRCehCTM7QM9h41rh8bbeSRtybB8RFf3doX7yf3n4vb6oLZTEx4b4NkZzt2E8zJA7Vrc5fuGcsG5BVdHYG",
  "key41": "4Sk1yA5k3LbgntRZyVS66LYpQvviHB6mzuEqgVwE8qyQSADpd6QEy6YCm6ynXMExNZYHSVhjBhNHfsuRwVH7YuoP",
  "key42": "2CTENsytGmxW7CEiquBRVZuHWg34GeE3nns6mUhejqmaNwjXw61ZQULovCRgHnoatidSAE8Bk1E2GVKaM8W3nZH8",
  "key43": "3QffBp14N9AUnaLrbTsPhxhdjrYcGFGojHtUgNE56LHDfsj9M7h94JPcZqMdSK1Kx8CzKeMQRTcHwn9K9czqXex3",
  "key44": "8GwEgNjK1M9t7t6Mz7FTexZwzQu9rE2orCaLepkGX6aQ39dsPRsmtZsYPJXhhu44qvGDeQWqruFPkAy7b8ED5mg",
  "key45": "WGAbv8m1V1RqsyMPdVeJRQ9zCYa8z7nDVF11sdgQ4XqGDpkKiEdw3Fe3rYjZyPdkQJNEENmEyjocpNEdH1GC8LX",
  "key46": "4QnjxnTAWKhFm1EGDendfbzU9piGGF6D31o1mCZwrec1KiZ2vGMTnDLV61xBjKEKeLckAmpQyq3Nfqmi8rT4RoXF",
  "key47": "2EkeLw4cN7hv3EZSr4umEpbo32SjsHubh8wQCXdLxXFSjZ783TXpXXQk7oBkRugmJQAxszniqrgmAzNLbBi3Xisz",
  "key48": "2vLqJFRwN5W8uKH1WoFF7i65mgmhGxer4nmtGzrSSAHDHtF42niVQhQSchFJmbQ9dAqmShfLSqsWhDG3mn8L9BnC",
  "key49": "5kyVEe5RfYKvxQKHJb31hSaM1THJk7LXcJzJEnJDszkZoc7h1CkDbehjQgSVDsUXH4bmJSyWn5RKcFAyA74k4cY7"
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
