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
    "5C4AKV3uC2aGtvsozfpozTYBhpHmVqCCTdsgBtBG3sysN1geFnWg42AUNtD7EarQMuRLyrbdwZ9GkRPz3xCRRVfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NCcQW8uLHgib7dW7A7HybGs9qYM7oY69DsXyVdVuhEW14e8u5BpjRQpEzBaM69DSMXgt55sEcjtHZG4aDeSxCVo",
  "key1": "45wwUZAtGJYz9EcYrRZoxheJLnC7jN9DshxBRfNKQdHRoirr5yTa7Lr4ggdJWbu3zc9CfhVC4FGWHgAbgfCUrJk1",
  "key2": "4uxmMNiFEbHhCnGPhQRacdZJ4g2HXdXPZh2mDWMH3RFw29mEAoYffaDTzAjb365EH9zpr5iwrhEtiBX3QvpjSuFe",
  "key3": "3vHhJKzvLAS5nqQVLBonEcXcJ3v8HjwcVD84jd1qe7swvEhmKq2t3355kJB3ffrNucAn6wpp6KfpDY7gH7AqDRq3",
  "key4": "5ceE6f3Z1VucZ31GPCpBsbNvJFSwJFKguDbpMmePUpFjHzPX8SMmsUHFzMTC4FvXbjkTZjT5t3trD7CyykWuWwdN",
  "key5": "5g9noMx3FjULf1mE6sK9DqJSi3L7ZtaK6bfKMuvQz5GPHEar3dsZXfwRWnHFWrraKjvj3MHZVqx4dtJLNpWWYWuS",
  "key6": "2gBi2L3KEKD1QtvdspFyD4QG4sPVyQyBEGLzdF8hdEnKjMHAv8CLaN45rkCASosqegRAQ7fqbYE2erNcwWyBzvBa",
  "key7": "5X6DeYDYuSmiMZ1y3xeqzHMPZrd4xskVDh4KNXfhuS3kB11eBEur8m1QSHTGsSCAwWbcS3ugvxqvVmzo9FRLsRci",
  "key8": "3FtysnjrCoteJE2GiDTXUNQKPdgZg64RANrSke5AQydH3bnaYyrBfUtiPtcFceZBQkWxFGrphoatSvvyAC4NGcDe",
  "key9": "4iZ1wNJ9qKwUsYNc9Lr1yTEmQFgidNk9ZrgU2yiULPxQLGdG4VTZSAgRx1Lt368TN5T3tMKoBm5SZg9t5ToHZ8pf",
  "key10": "2vnz8qRupjzctbDDyHVDNp7eybeLegK9DcPU2Wfey9xcJQysK3h1XDqwYRozwFSoovAHjFp5gA6N5Zr8xQkmLFj6",
  "key11": "2guAGBVd9eCpussyjQMm5ndmE7yRvuBS9EXzyAQRyBHShKV9oJgAvRYBYaAMgPoTk6AE2vhn9KddVaU5UZUCFhGD",
  "key12": "J7js57u98jMFaFNiScf8fV4qw6qq3RxWrbnHrLR4HBgEnHDDo47iHHhFVGBs7Wx3YdbL3m9hVsT8zjzBygNjDiL",
  "key13": "4Uo97wn8xF9ZrGcFyT4gh8Fsw3htKmKaLwM7dTg2TE9Wumku2Qn2udHaZx1ten8J8ZMwt921PEfp71fVy3Jm65cG",
  "key14": "5QHTfzamM9GGWAGzAsPxgjzwp6tgmYLdGs6gwZ61tc9B2tUXotPHfwXKSrfV4USDpgFkYdKL8Ev2LUy2k1Xk26zJ",
  "key15": "31Avb5VLrrzhqV8D8kZL7NikpqbPaNMiNVmqMQp1Xyi76x47LC2pL6h79sDJtrcWp4TixuZdgvFN9SY8K3kw6z2o",
  "key16": "57FgJXJE46stfV5hWGbGisLGFDQ37exiTZgfNBw9PG5E47QQaqTqvnTZb8HKePW4Y5AjQx2iftKmRpL51NgNVEV4",
  "key17": "o36tQqrK7G5gE2aPv8iXFnK8zu2hyN5vGzDhTVrZcrwqf9TrCB2y8RM9vEN3chSS8ixpEJwTUFZqp8WBp6sBdu6",
  "key18": "jHk2hhjxr9YV3fguaWrWxHMHhb4CJq8XhtdCAxRBfvaHXwKe9uJbdWQZQUq2yAL1TpSdTVaW6D8khw6TZzjuQ42",
  "key19": "61G2X8fcGJfiqquWmK9KWi6CxU6wFh9UvtptxfxUgkw3j25hzdHG8Bv8wncn8yRUtmLAaMq8adJgp9RKCRv1Kwcc",
  "key20": "nx8mSVF62HWiQDTDDHVhwrH9FzDWSY1nBDVVZVFqvgR4nLsAPzWWvjjVxnQZXq3W4DBm4BqEsbHqRkraMpXR8Dr",
  "key21": "cvzknfG3W9RA1N87GBnKMuNmvpF4zEuY1duJkGombH5z4uK9bBoUGnEYKPKMNktWqZSW4rZZK5PMS9rARLiRag9",
  "key22": "5rhBqaq13JEWGCVStFiR8grnTySop3HEcuU89knCRpnYLy6S8MdDpWJMkp1gmoynMoWvnBq4DmivDxCpdXQC8mP5",
  "key23": "5iUvk5snMGU9tsZewCzHVFZUCx5jC2yDRL3hHSLRiPReiDXhZ6S1arhZdt7AhzAxvh2HSw8ZxfvEKrcQWP1Xmm4G",
  "key24": "2V4dU98zTE34DqiHoEorMpAC65aRWqZv9fcJaGgEJkrTHTHN9nahCE3GCtAZKnsoZyBsHQAvzivqexGEPJgz2dmj",
  "key25": "5DrAdeLS7jpMeDw9kxpaDxAP5apSuhw2VhguE9B4zDntbue2Df9Q2DjzM76GxVnWuzCAXGrkzcq1vHLcECEwowHW",
  "key26": "4DKw5AACA4ZuVgVcdbY8jYqmZBLaTW3p7onWXEK1gtjwP8XQFGBAQ2eWkNjkEHdB7BmAjW6FsCYrgTmewH9epzh8",
  "key27": "HCroRcwW9TGgb6bETtsMacTA1Co6Rhr2Z8D5GFoRF8tLMbfkoaUm1NqNAMmh4qrieZNs4C1X3746mc4SqJbiK2v",
  "key28": "5ak3bG1QL1cFEuMdzLTMZV3h7MA58rTtAHSiV24JyXKNuELVjPWES4YsRJjnp3sNACCSJiA4NA5Hy7wQrYKVxJQE",
  "key29": "3chyMAqJBjKzCPZtM3dEyTG3TSECcJude5vErBPuwpZaV8pss9J41YYgtUU8nxq5k7st2JDBaQgKCwjMLays8nM1",
  "key30": "2HSSdnMVKk2We6TQ5juZNSP4aaULziKv93h8EwTy3Qu4z9bG3NJdeTcRJ7YjP7hN1KpSAKw4T5YzTi7H9SL222fS",
  "key31": "4Q34t1798t6CKGVAamBm1Z1ftKJ1JQD3qyACD2q5YBfGjsWyqbapP8K8SABoSy2qzafbCxQhvGRB7UbwwamUPgLZ",
  "key32": "3KKmxWXZU3fArun6ez4EqJ4JySqdFfX9KFDa5GgQSmopWNqYxwnWNKXFCGwGYb4hVcS3WNCKzGgH29A3x6jYSwcQ",
  "key33": "56SiJ3nD9cFpLhbubKhkWj4qGxmRge82roWrF9s3yWbB3enXeMLKuscnqh9nvmp9C6qxiGTsRuyXeLSY3H7EYdwe",
  "key34": "QcNZ8Q8sR8xcRf3FCSjQ7LsygM4oaNqM3wmS9FF2veF2csvW9vDgrgwWdc25Bu4YLjun8nNbTRnEqjTpm2QuZQC",
  "key35": "4WjQ9CiQoPzwXTnjCxuDLtpcuyu4tvwrDGT2a5grSG1jF1ZYadpCqxZYj3uJKh2xCh7AYTPhPniQ1o9KQ2Ts4i32",
  "key36": "4ty4jZoyKPznpxZewU9n19pmepyBGEni3oYvrGgy9wpjtaV76Y2nLpEjbv9eBHabGrUYS9FosphraM1eZcLFkZdu",
  "key37": "4WY2ttfWC7wzHxpeeyLVy2JM2ktesnmCdEGJDuWtves57MJMtrkE7irRvjwoDRiB6xMreCZyoxBdG8cLaT9BK5VZ",
  "key38": "2xpoG43tFKD6nPqpfUs9qNQm49aEMGeuvJ2TbzSzT6ZHpfqbbRsgDASnGsLhAoXLGzxPYUTmgCwda9FQqUKTHUfP"
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
