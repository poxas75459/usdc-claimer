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
    "3z64uNkoVpkWjdR2ceZ4szwEiHGDBk6y2ipohceyXW1kSSJbhgjVTWrURtCVJGKLFkWxDfQ35uZz2e4Xded1FGDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WoXsceW1R2soQoRXV2XeL8AV8MquuVYwC6fZjXuxboBTNozthHYTB2tspphE78Bej1Judnmrxodic8Vjo1SPe3X",
  "key1": "3S7iGTe3axPEf4oPLzQ1pC92nbHyzABztiNSTsTZgzyxVhYRZSk4PHwM9DJwe58fBtKwJWJvTe33iL4jgkxLY4bX",
  "key2": "2v1682WWuYkVhqpJNsmb2XGRwAmniGSGjtD73MLufPDactXW4hEvrrKkRmNh17dKu1UUEkFmWAccDMfr8k5vjSPx",
  "key3": "4UMcXqqE1LZhAYBvaNf3zgKE39L2qPWYBmb6y8knxfxx9b3CJxwL1VbRTULqiyAyULD56J2T1VwTfkn1FAV3fcNT",
  "key4": "4rZF7RBoo4nVkhTyW9hFpxomJcZaGATjeVzT5BasfHjMJ5VUteiFxk9i9Lm5HRCjEVqNgStNwghyjyjjW5r5Yr2N",
  "key5": "4v5UxHXJPzvmRrseKH43PoCN1R3iD1WTQYBvBAnWNkaxgtEZTiNenoKzYr1YS3mCFWctvgM2kKT4ZgJMkZgsx8dY",
  "key6": "2dRWRYLgGjMWWCdcBL55zGgoCVwzjW8r2Ai1dSzm3czeHBJQpqs4Nc5n6QrKXXUdSGQ2GDeyWGHAByUg5YQR8RL3",
  "key7": "5QgUPyHqatPaFdvQURTZ5UdsZSDbDJgCfRtGsTX4qv6oQmfqhB6q1rPYTRa5doxpUXJRju83tFnErLcKFNEBN683",
  "key8": "5d4gEUD54AJoMcyMAh9s7FS78gEcQtRQdzxPxTK5JLTYkv9P8XGtMQpKoQEig3Us1xwb8rRcGDkSwVBdKtxLxREp",
  "key9": "2cBezePUJvMnPbDa5DosnN1qWkMsPQpyepA2VoNeSq1jdP4eFbU14SAmQHnXmGEBxAbyY8rerjEHwhdyoUtYVinM",
  "key10": "45bMx1H6tJoHXuKmzad1LGe1epTKeW3JziaABxhxGQMHa7HzAXN1c8EoePCC1cRrWE8LqndJFGrzyxrcMPytC4D4",
  "key11": "4AChtApQLeH8ja7mgPexV42EqVe6xe53vbS8CGFxyKGfKyVg7pxVvW44dnxQ9BiBcg5LFuWovG9zZn1gPYwWCWt3",
  "key12": "59Yqc9jfNBB5M4pLkmskGmxTWWMAXXCKxJCFqt7aTkCX9EHHu4ZLfX4y1fwzHXperPbfwcc3sAcD1bnxnNFVv143",
  "key13": "22M6JwULQzLFQmRM5FQZJytWgYgvntWcC4QxMpC5yAzwfnSkwK3zpurRbbQBrKXQvk5oQzHy3Vrg7WSKicNTxFWr",
  "key14": "5vn1q8DxZXwEA8BRRmQantYndfcyNurSk4jYwAPXUTnSY9k7BWka7L4hmu2Q2nxsJaRaJhL7vqpbEP3FW7BjPn97",
  "key15": "35T8dgKPyqy59mAeG9WfS8gk5YLNPdXK5k1EGRUtkhXCYgJjQtR6zMTzAQrfjXDUURqwLng1vLLod8rDc8qeN7m2",
  "key16": "5DPYQwt7Ar32n8STdF2MZRn7Rfqxf9URK5itKaKWt1mQu4HPz2kfxBYQQgXaMwds8snEMc4cfcq3JrNSF1VkyfVS",
  "key17": "2Dk5kZ8XMCdmqWBq8FQ6tJGZKoUqDLonUGLMPCopSXskyb5TXkAsRZvvECTMiPp8bNUhn2CosMTKFCo4io7tQpqn",
  "key18": "46hJVouQpGtVHiiXzHTKeNp9XxM8ds3BoLSbTELpMkDpEmvP2xWzATwBjPoqtp6V6tPCYDZCTMi7xEZDieyERGwp",
  "key19": "4kqxFLLsCVoatP1N788Hfi8KbrGxKzPTpFjfyAzWnkA6C55KUQqDuWY6iHsEJkLf2XdNbQSRfDEZHRmH64kXN8LW",
  "key20": "4ygZEiv3jjtJnJQTVpaCKQj4pAFmMwAfeGYaWdThQbMDDLUP35LVkKQVQGc1ct3gNd3kKFGL5HNroh7LWBVKkzdK",
  "key21": "Fi9pr2dQKyhKpHSQNGdSwsqJd8KMMab8i356ERMwjVo8HAiEM8UAJVU2DLsxz8HsGWmgRQKXA86ZHDAdKLH9rJd",
  "key22": "3jHfRKHjqGxTXAJLAz1BBmt2qUDdg8AMeWbjpjfDTpmNBkyYS6VB4oKRSB8H6ywVykG9eap9Quqth4yEwAvyVrfP",
  "key23": "48iJLHiaz7VxQTtopmiPa2zX7kAV65d1dTDV5de2CUFkyFcuvRHHBvksRP9jhpuh658PQUvVB8Z5YTdhzY2dCVAg",
  "key24": "3oMQqS1dHk4rhYwy3YhYtRGTGQTZAhHYirBhC47rA8QyT6KJE2S4DceECCEA8gwmjaczJizch5zqUM8nMJqyy2KU",
  "key25": "2UdFGQiFkGXP8oYknSYPN1rsSeCwU3GwYZF5pNvYDERmRK4YoKBHniYfvZPRJHFpLUWBQSvgFtLDApZpv5YDQ3hZ",
  "key26": "45VFRTc47vQq7vBEgK3EQ7jfXZidKmeFHm7KRKZHT5nSknj7bxo6ELdE12jyiL2obLMqCP9MHG69XyRkr1kqUGyG",
  "key27": "JssC6AAKwRqFQKxTGjQk6nthMAdUh71eySbcKtrMh9vQAVyomoPmfZ82hcwdT1t2GL7biCz7Be9Tmt2koRFfRnL",
  "key28": "PLSPMLYcAzyKgKNevX77LURsipHno8JfbdhDsNeDURqbLEC2VkKYcAPqXkmUEyc2T6rj2ph9P82VNXiKNMpy2vb",
  "key29": "3MbRuzhgoBxxp1ouFXDsC9UTAqi1j27LivsPvRkYrzewnV7DYkrE7woKgSD7zSeFeKYPdxUzLVictW3VecQXiVC3",
  "key30": "2StYACLmt9ha3f67UFHSHPUJqHJLH2moWA6K1asCUfdiEDzzJE9sKFCAdCLbjhCE8ssANaZTtuZYVAAnnL1BZCo2",
  "key31": "2K3qtGzz6iBBF25wpNngT7ZSFWwsDztWgMzdN9U7c68Fvuop8b7JiWFK5AWva9KEGzqHh6HRY34MkREV8ej7Qfip",
  "key32": "59QULKrA16msqHqY4ohw9BMR5XrTriCUqdYdHJs4ZpBNdYh2CVwMTBr1u1N17TD13qSMmAuspFvKa19oxG621bFB",
  "key33": "buYwEunGbY5P3L4XAmYPAML5EgYzaipXfRhmdwDwcq8HBDxd3iuyY8roCti8m4Ph3EyYtuJaZyxNxbqQbMCXtrv",
  "key34": "3pHR5L4E3dFPYYZDcqRivAPunPoFX4YNHW1EMZr5rQzMD3JCYUmiSFqeQEAe9fDAfqa1K7gPZGDf6aqrELSgBXyZ",
  "key35": "5JgmTAVZhKPxgehw1C2cfuDBdVRQ7sA7YXVL5uyRnmcEzueRu7HAaskoBDFWQvumUHyc2TLHDEqs5Jw7DcD1okkV",
  "key36": "35h5bspwe6A2WTVyiJnxc7EanWAppYxPtTeToZTi6soD5pvS2Ts57WVsuTiRG6BQzUpRYXavaHarw9bv6vysqqnn",
  "key37": "5qBU7KYi1MK4yJBYuTTUvfnoYEk5UXR93APFEATvhFWa8bapEruuUPbeeRgTQTzJ4wceXHpM9bVG3jQt4cmQx7m7",
  "key38": "5tePdbmct4Gxi2zs47xwZaWEuo1HFNjfPLsSKzXDU2yLnkCrPfxy9ousp9Ma5a3kUY937d2BHcX3Awe2oV1CACiA",
  "key39": "4GPo4oECzQe7boj2Uud5EFNXJcFxGbyo2icWWH9sfD4DAkJxejMGoZbLo3W76WhCcNouTG9y2rQiw8X2stH7trJk",
  "key40": "3bE6mxifzowF6Bj2avZWno2ZsfjXUvk5S2WsTwrwnWi8gDqcVoEQ1myRYK9nYKn71ZhE54Q5fJEFtnhrD4e3eswR",
  "key41": "4EJEPMSniTHNAESG8KFUAfV1x84P7MAsZXy6gZnUt7xrq8foSAVXxEMKXioVo8V5bei6xkHWdaEcSqrZPZpZh5PM",
  "key42": "5EdvNLrV3vZfScMdTc9CWVExsJqc3WpFaiyRzYoPmQidF2r1Lqy8M6hLJHEGCbktd3HjcRN3JoGkLtyPULUmy6oo"
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
