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
    "3XwFH8k1V4kPqhTQBeZbMTYcGVB68ZSwiAvK8eHYRRAWNJU6DJpR4WwU5qpdm75e8NGHyB1LQ6aSJFrhMqN7nFwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U1p8iKT9tuo9EtoTAMHdZjiovsd3iMnL2KA1QWNwmtVbVVrm93ADpYeKHAySyARuEP2qhATsp36N35nMxpkdDn2",
  "key1": "uUpvHX4yutgGTwZFPPma74u9xgnZDcN19zPtDZ8Y7utsN9BtfSKbq9Nc6HjrKZb7qf3k9nNHsZcHqEZpbC2MxMH",
  "key2": "2xYfbMapjkxYbim88uN6pJNvrSuyCaocGA3L6bTQaNjRbgv6scqTZLeX48h1qFAzhquywUJLuRmgk7aXvfCo4dJi",
  "key3": "3jiwuKmgBeRDbp9PYP6UGzjWBcwba2CFBKBJfc9ds3z9iSoEjdEdLA97GsdSKzX5tLgJ2kKjpScRmLupde1JxgQN",
  "key4": "4yWQeNixRr35tTFXAji48Dp2oaGYHL7TEmzyq8GxEsdDKF26iZhv31Xcaunpo6pSBLZpGBoTGTpnY6srRxqKjh17",
  "key5": "54U5Gvwrzg785vwzzWqXEN2GAvp8UskD3mhKugnUdr1Ki7y5i43wcHn1LSzuhEWhDkDMnjSdgjXcrYVvHbtJUy7W",
  "key6": "4v9xDfbvnxMSkctPv7APYK2xzRwbB9Y2e7Q43Az2QsLbuk4yb8SprzpwVXL5vpDy3sAUe3DzTkUNHAh7URrGbXXm",
  "key7": "4FNCNcMQ67J5CFMft9KCR2bNBCNYS9KnKTfp3RrX8afkPZWBSXGXs5zpUEnZkpdV2eVPbt8SMKJkWWmmsCPQg5Y9",
  "key8": "3Lt6Fn7QMjsXpMi9csQV4EVmdP18oaQS4WFG2oosGacCke4tXJJk1G2HjpsDCNkTH1NRx6TYTB6ZuK3qY61GgaGt",
  "key9": "4CJ1sCsyZkeiheaBrrkPpQn4pK6JaQ2ek8JWv624mEspzPZYujhsPG5vnZYXYHumLHRGQbDnsFfjCGqqpNXHq3v8",
  "key10": "wTnuG7GQZJJWbwUJ5eTdv5bzDjLpP2hGcXmxzEdq6ayDvKjMzu2RGfnwSvpkgWnmtd9Nu6Bjtq5nArhNmDBTfW6",
  "key11": "4jXjVNTtPQYArPfdSsC9yweaemtjqeEYgK6HeNyvuCTjS4FSTUJg59jN5Ye3b8r9fPpyyieNtDERVMrCFXu5x62a",
  "key12": "4wpzNbhJsPSzG7hgbee5edZvHMtdNFGzmW7WTvULEqzUvqU5hCRSY7sTKy4js1JmBxMsANK1yyvUbknDkoc2kMre",
  "key13": "c9sXrZbcEEjFwYQYJqX7FUQq5v3Hx9kAV146G9QUrcbx16X2uzDqVPudotGcAqJLKJGF2qh2imjGUWHD37zHWfK",
  "key14": "cYVhnWRRaFKEiQmGcupAkXGgedjxJ8KKozX6H5mBrmaF87bYmXcGDuAgrW5mvDYFGycsRoNaJXog9we2HptzoGw",
  "key15": "3cLfcbRirNcBvrTyGTWFkF2UAF4qNGR12QFwyZpmBxpJWAw8Si1VhHDV5SbdaA3tq15c7ZV4YxA7Bwo8kUgz4q4S",
  "key16": "5dGcKabWRio2S8svn7yDDn5JTtEHC9j6VVhu23rHT8D5sJuxREHxiNwsexCAs7Hda5cZCm2LYwonW1iHk7Yc9jQn",
  "key17": "JKGxgA7YKuG9BQnfhL757eacrx4FHfLedA5bk6BuBzbxUgCBamLrqgUTteJrFuNZr93NV25DSj1nGQNaD2advwF",
  "key18": "5Bwxc6jZf6vfLss8sRGb2PTtTQBfN81LBK9LHeLEoRVNB3nr9oJgp3hrcFbVLSu8Xdt7ekMAqRhfZUo26c4mvdJ2",
  "key19": "32PJ6wDmmysD7VhaVnLcNghTX3fpF3UCW3y7PBGVV2q41y2eq712SUWiZyy3j5m1XzSf2KwM9szLHssmSyHMqXSx",
  "key20": "2swPWmMUJg5BPoD4GTYGbi18JC1fUS61nsRoZ1xCzc3LGrVyxpwpDUYFctL3YrS8cW4vGKU3HWnGciJmzsxiSYSX",
  "key21": "3xJdijTAJcgMGxun1g1TMy6HKjTuGHcK83sBMrpxyDg4szyHsfCABXUYQrSL29pM5xboksLg3C9RATZ23wZyDtgY",
  "key22": "moFaG8qzQZZohBccdf2BurV8P7Bvg2hN5sKvboiePRR2BQujoot4TuRbgtNKAqnpHE7Wsz3sEeZnHozrQdutmf4",
  "key23": "5Xsb1pNuECo4ywNuRF9mCGuzmP93fectj4dviyc3Mn41QsEtKUfdBWK7fL5UDNuKHN3gcZ5vp7ujvCY5qYrZ67VK",
  "key24": "NAoKA49oTgVKrbNixj1324jMxv92zqKBCHsxg1tGsSnU5DvQduiAighpfqfnBpB6UH1QBnZetBctneDzji1znaj",
  "key25": "2MLD16mVKUQbPehP3sHfHwraGHqnTet2SLuADvcJUZTMEBjm5owE5CFsnT3N7NMqAZjsCNG5yFWiqu1gxMj6ud8C",
  "key26": "5gXKcpqABueu75prvPkYJq6ftP9LRotLc8YtYwutQWNvFSUdd843CSdZkaLb3MLwT5WGByk1tWT6kBFrRr9yxbzi",
  "key27": "tpfj69nUPM8RVqkmtLE8Fq5Vc6Nmn4BcGvPoKDjERLsWAYTWsDgoL3m44bgVXWzvYXCQD1R6K27qzHxeLbuaPXf",
  "key28": "2v3tifJkYg4NJPQEFz7xzX8wA5zhS7pFF4zGr592oQLsAMTFPVHtNwyJtv4RRipoWQadSX9EG3bEdwp38b6Xqjm",
  "key29": "3xs31PiRnnNJT5BdKWk1jvjr4X7ELScG39a4HaPDcoPwSmvLGnvQbSUjMD9J3rtLpMyna4PmQYcxVcGV9sVMEDX8",
  "key30": "4gDtWVpy23kUTgEBLscbqmZb6kosDp22nMpDZAZC8Yhq7F72sHRo1LHZJsC59fLe1hTQ3gzfdAqyiwiFNmhZpSdH",
  "key31": "2P3MAut6VytSRUF2MMaEZpdGsQ2ENoe1K44MQJ348NbsnCJQPeWn1TCxQvxLhCdZGNXLUgN3YCEckhj8h9PVxSFz",
  "key32": "3LE5yczM4kpSLJn4J6PUA7qFbEMEwZbaTEzcBAAJ3xgTy2odd8tbtFFjhxPkBrx8hhdwuDuyQYDcaK9j1hxjkxgy",
  "key33": "4aHboh1635W2TEZ5C4YoqY8YEdoRgR6DRdF52KjNe7RSMMHzMeKThPGcgw9dwxN3SpvUYM59Z89ZGj8iiEu1kNzi",
  "key34": "5nsfH53NvCgrTDrS1pKrKgmc3zMC1Ntehx6nsxJ9r8XCq4R2V3uCUgyGfmsa7eNytXYKZnUVJHr9NKSRgi8oEWFX",
  "key35": "2nG1UDXmMcGh7hNv99NhB4MzacvJoMaKFyf2YMa1vbnZA3Fy48ikt4jtpJw2D5yUatfAykbT1tZoaBKj1KVqDgam",
  "key36": "24k3DE29wmtYaa3G8U2pHqvMdnvk4vSQ8VxcC8n1WphQkXNX213wDgymDfxtS5zufeBDwW6McVqUdbkhNHfeNWmk",
  "key37": "4rSwoigsg6dU4zygqkxh2e324uMVPVgdEAvhDVNzzpMC7cbWSGSquDphkk7eoU9y6ex42yZYXyfgmp5XEim1om1r",
  "key38": "pg7vjXHm6BTcU7jErLV4WZAV3jh8Yz87SvupCyQaEqYCjBTMqj8m7FtfugWpC8tjULQSDvQFnLZtLTATiLMePNm",
  "key39": "3YiVhYxSQ8gKeSw41uunPEmXqLekpXWwRLkDzhPpnmhBb41eDvMXewX7U9ZqVaZENkPMqiyinKRU1M6j3eQBVU1A",
  "key40": "EHELjYKXnwG9tJ5LLWQiUQtEnMxd5d2tPton92FiKLkoMYASYZyQDHDyPeeZKcxVUFqpBYb8rdWt23bjCR4UqAM",
  "key41": "55h2CvrLJnwvDaWzzZx9yoAZdE36aXUGVhtRKKGSMNMswZNgPEEM9S2WmhLojfQyDXfxywaB7M8xMDimXW7tuJz4",
  "key42": "gi29cxt62zgp3veoDoGAS3tGMrnfsYBgF2kia6gsh1Jbt4AAKgYqyfHEm1TG3p8aLhVCcxc5j62ViQXyqLCMJrX",
  "key43": "2iVZK5wDg7nqLz5Dsd6Ciw3YKzRVJ1MvKndxWrbHUAjnwhWRMxQUGJGg33hLbJKNxc3pfmytZfNUHjbVVovA9ZnP",
  "key44": "2FToo4etPoSXWBx8v3f5WjKJhGJxXSZ7RuX2cZ25FXPVG6n4d8duiGAytCQyUhzKL3QVZWcXWNXP3Geu8eqLTfrL",
  "key45": "44H2NGPic2TgBwV5yVjg8SEkKU3o76eUoxRXS3HGC6sPJzPCsRLa7Bd3x8PQSB3Aadn4M2KJS1ndV94MpsvoXbgh",
  "key46": "4Uk3FuQgKZRyKJtPySUqs2R2kpywi3TnFArac9axZhVmNgTw36emDE6bsQEbJb5yT5cC8QMizDp97rBnNjdsauFp"
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
