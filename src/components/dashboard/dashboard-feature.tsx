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
    "RkUmLvmeGPf4nqShRALrW3SHD6ZnucnfEBpvfcrqdkpq3QVKkUswagx2mdz3cGnmZcddLnTjsVr9933jsutmy16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hx7h7DTHbBSK77Co6XYMJJvK7CET5oBrEhDZNbnKPEPqvBwhnJg56dWqbxKWuKeoHb4nShdBSj4n2UTyXgNa44Z",
  "key1": "44DvQ6xhaafTkvWAQDvL4Th8ZP7CmPBLseQRFHVjPLkSy2UEm1cApzkQVRdjbiUnkfFPamsaa4cbvdrUhB2HTTPj",
  "key2": "3DACTAgjAWPJVNkzw9sTQjEERESNfEwYT1K6Zhp9risEDeBATLBVkRzzyHfxgGW5vJAR83Y9rWPM9GjQu298pxqp",
  "key3": "2r5tBkLodShp89f6N3h3GtubUqSk5Txpf5RiV6YqfpgPqKdHtKtbherh1C4ZWwXcXsN4WksXBTxBb8bZhAQCuYDm",
  "key4": "JN42UANh8bCJ8E2fF6798pZ257ufaC8ptxJvyjbSUwQefN5kKzPr5WAF3LXBPcnXJ1jghairyyu1FRi7FKunG28",
  "key5": "3LNPyLB5DnhbVgj7yp6aLWg5UZowgCEjYfjW7vQaHcKvrXz5XpBJtTEmaR5ypY5UqxJxgxjGzqdwxxv414kmZ5Mg",
  "key6": "AU27oNkNEP4eqiwBcZwzLmFrEzJjD2Mr8huuSWU8BSooFC6esZ1f4gTaqyC36GZtnZp8LBmBeJxNT2jsrE1NG9v",
  "key7": "5xNox2YnsfaWC8HrWbeS95rw245qvJjtdMcJ4ksarr5r61CkFDDYwmckjAcEmByd8aCj1Bww4FExWCpRiVC926VU",
  "key8": "3SgrvLSEbVSCzLQdWPvsi24eqSATavKKFDBrxoWor1oemJzYbEf9zhrCEGuyMDm1E9bznpgjLgg3H84Qptrw3n2z",
  "key9": "5PYSfU8rZTVQJVVEfZ9CVHEwA8GVp3mi5cCoQmpExn8qyJStuv7e99AfrMLEwyBDzKaQgL4MuFvkppGkJShHU3cS",
  "key10": "5UYpD5vd9TTDqkZfPvkhA1LLuGnQDf4YPq4AZJcotzFzxgDPsWF9c2SvJPLE3kQCFZWXuzNo7idXibYswhHjKWmB",
  "key11": "CzhaJnFCmqsY94xPTnSH22qWiSYTqSKVDsVJpWaFDrPmWmdsFduySo56EBd9JsUZKeBiXL9rxHdzCxisZY9nZjz",
  "key12": "5t5628NpKfJEMejC1tTQbF56XKxcNYJ6rbr3uFuR2fQTzE9LUNJogAt4ajLkNgRp6XME1THPrDLAhjFQ6xZTdk5A",
  "key13": "2ygeUmnxuWznZXyYzG5ELWKoz6nxpKhtmpq4gnu1jh3gGvtjSYNmqcEcFnUuMNzxpQgQkXk2YzEFaHfrC4N1YCxV",
  "key14": "2yQQMzRpCLwHdu4Lna7sJ4HaGxNjqzC7y4gCgHG3etnXauswFbA4KXyimxtRWKNVFFSMFmZAuWR6taKPujhcGjYi",
  "key15": "hFiaiqfYyRjfC8MvYzVoToVfq1CkZmz6qzhLuRNsuEpK7CySRMyH8CdrkpLcFSW8Hyx9jwDuB5qVRGrnXebARK1",
  "key16": "2gzh7pNHiwawjwPTazXmUgKAd5EVZcbWv9NQ5uMJ61og4Yk4futAi1Jb82kMdQiUxmX3uschxCTokJzChmKLW4Sr",
  "key17": "35ikHELXsBBDgUMHb9L6VHbepWpszVstSBpm976E8tuEpaXWE75PsLzuoWrmvUUj1VYgiKu3XZq8uAGcvaPMCFtk",
  "key18": "5De7ypMJqPK4NgfJvDowb1ZMhnA9ykhrDHZxdy5KW53Ucxd3fGzDJDaWsVfJuaSrRaPzrsdoRYqQJcYoHG2MMLdw",
  "key19": "2y1rsFbjGXXbVeu1tdqcocJxUPYeQrE96uN3T6qNujZ5rqKntq3rgaucW16ic6F6UZYtbzXV9CTssdRV2VYP4P1o",
  "key20": "4D4hQMX96YXPiFXJUU8rj1hJff3UnAFTbdNNCZN64kA6Z2x3h1bsNprxapRmyNfxJu2S4BVtPmCCfdWuevP6UX8s",
  "key21": "giTfK4aVRC3XsAmuzxk2SgQ7tZVdoWaTy22cKs74CKMAvt1kEEM4Sfed43aujej5nNrsDVMrteq577eThwznkSq",
  "key22": "2dSfficfW38RpFGPFVYXbp46hde5xBHnowTLjbkduoQvPmQrYaRwL7vFR1p6qdLMmaCMsW43ZyXuSJkjUSn85tSh",
  "key23": "J6AmBv6CWoqLsfuNPcYzPjcBjqek94DjwKZywj4QwcJ8hzcHfT7RdZGJntJ7fp4hhPo8zpdYVHWZDVc9VqzBUqV",
  "key24": "ztUWiKz77geLEY3HCvmgcANtJDerdVCKvhyF5z3aybm6C7VuzLAELJF6r2DyS7XXV5hAqGs7izg22HyFqNYg3yS",
  "key25": "3N56Znwt7aaCiVVYEogBndGRGrvvZtLYfp4zm4gPRb8hEdcWUjkDMadYLZ7egfYprpcdBjcTWaiqtsFHaxHoZD6B",
  "key26": "43TJZQCGqhTafkbFpZwVhD4K5L34QSmE5mPWmyFDc1zM8z9AXatLiqWoDBW3WLV6mXobXYzwHAb9jKyRX1Z4z8d",
  "key27": "yZDYVXrTovmYYPCV4FvrJw9k2dKHK1bbZEw31K8iEpWASBLAPVhEGL5wHGMvFavYgwvRvMpm82uxwsDfzC4ffbb",
  "key28": "4FRQykea4nQeFETaS6hQnigkRjLtK858PeMnhb341eYe4T4aE2Porkj3sFSqtm7J6E97Qn6os8oe47G54EN5hgHZ",
  "key29": "2Y4cbCVavd4nyTcWz4ph8i5DFvp7ThvVfSY1mZ7kNXHUnEnsUaP5668ySNLJKV8i8ArVDMMkt6qGp79ujA5jpWAS",
  "key30": "38ffWV2TVhWa1uRpX24kdXsuPiYeam7jqmRTN22KzM6y9xMXBcUDEWBqB5FKHtVekJWWgXvoBMNEwrgP3zwnFSbv",
  "key31": "22AnPw5VnpU3bpk9nu54AKrr6wPtesu1aHLTVpMBJ1Vo7UNhRKzFqbCkD7vjWiiELnD29jauQPeUuz7FwW6RCwpw",
  "key32": "3Qo9wmHMoW29pQbeoGveGMwkgFNaeonY7oMdEAqenQz2E1zwtV5N2DWZukMKKHcM5dbV5pSvYUDEgxzk4T1Du1KF",
  "key33": "4KjnfsgnYZF9RaP7utqVaRMhYvh5tvSVdekw4zez7x9t4eNwPDtFuVLNzU8Tdy43a5YVk3tHG1LFVkX6Jtwb7Kgw"
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
