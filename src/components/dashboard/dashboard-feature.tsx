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
    "5umTNrcEGp4sVUdnAGpPGjKgQGgu7V31jnpvSTNp2RnVZ3TfjACQiS781nGHZVJ42tv1CSVwsE9mAgSLuVt3yrEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GXMEpyLeUYAc77moRAHsVcdTRTTxa8hcAQUMTv7esDSQbKap4yvcYEPuNDpgrgwhZCFMaEymhGNehkpaa4S8p2m",
  "key1": "3TvG6purDWX4tBkDFTQ2gvgR49CLmR5YH8qwFYRUhufSCZURec5YDNWJSwzHy47pTWwcsEcB4afaUXVvnu2KWmyd",
  "key2": "48TWqy14QgkWM6gdzPwAmz8ydRsBBHkb9RuoNZTjYXgjCGHyxWJMcbmoHQc3XeofuRGaUQjiZNTsznd8Em6mTvrg",
  "key3": "H5i641XcnfKWCMuYHFe3ikqxnR3js2FFQ7jawjBvTL8meh1wmSPrhmq7TCrSRsmXsimd9wdU6QFmQDt4eo3fK8k",
  "key4": "4qetMG2xL45QzB8jGqaGQBjJYNCCHwXfLmznJXr1wSHhNtzNN3thrvBXoCRJn1SoLGnUEVwqLCzwgXUcySawJM7c",
  "key5": "5QPze3srAhuoFcjiWscRekFHfUXtq6vYkFfwcU1duLKbUoQMXogw33xJnE1jtH6Wr7ZEkoQWXbJoEPVKZfUXznQV",
  "key6": "3cFBcA2wQzMQgPTaEwuqcdYoQC7pbQkV5chZi7piBYhUGgPYBF34hw2ZXNibpWUjvffutuTWsk3BzAXfitDRBetN",
  "key7": "2JZBj63YkzNsFFNvTVYonpSqTFGCrrESS24grqx8rZJhMY1wenHD2LcFEGnzHYc9At4x4jdRxmVzpVpJxweeQSnB",
  "key8": "65VeK2W9N7xSbfKEeMYkDF4CnKT4f7MCTy65nhjT4P9gpnbciuaDVcXZVtUqGaXyj6A4PhXJX4b1KGMfPWN2Sfnq",
  "key9": "4oy8VcdEhVrLmrJWXkkTMi6Bb2PUdaRKo8q3WJ4t88aFiveYH6GdxkMBe26UbRUih9sF8NQmcydihAZA2JKWyiSj",
  "key10": "2RAgvZ2SbSM9G5T5AC4BxAijLWNQgdsmmDT5E34SX2UumiDxeGmDb3z3ZZtQeG8i2d5U69s7DiLf9CxgvrawUvze",
  "key11": "2uS9hksjfA3jqVvXN1G6hJEGxa428PLDKArSaBv3mYCnXAWnVPJ1UvEwecRotDYHUzcSBpnHETxBgk6gVqtB8zDc",
  "key12": "25ejNY8Uso1gugKWictbgwGD2wZ59mkx9SC8duNNjjNUfrzT6Jsrg8X6b19yM1gXC7BLghucp8h2SjXRFFR2iEoz",
  "key13": "rUM1FRjVtmC8zVr7vvwRfBu3wtgWP6njnGt2JYAp9xQP63nmV1UD6b3uoRshxwyXAaAnGbtAP7UTJwrS9eFxEU8",
  "key14": "2usFVJ8GFComfubSmpZWPWewmRRX7ELdsGUmowDbcvKFbnRcBJhJbLBvEah6fpTrgiEH3W1ySrAF77GeDkgT4nhY",
  "key15": "Mz9w4mhYhVN5bsJtQeBaNyMbjNjUbYEqQc2sSiUTaiwcJA91W2DVavXzsE2dCMi5r5wBTTwPGyAsQMgyk2c9fqv",
  "key16": "4ij1xdrcjQeAoTBhk7sWN1yLfLz39WWbRo4ZYHCH3JQNdTH8GDFRwC6LL8hyCdpu9mCEXRnEbTe5o2nj8WU82bG6",
  "key17": "44BBtW4av6kA1BMu2TH2qbH1wBFcHikrU4jrVPcBpb2GRaUkgX9cV9FAYHTtJctUJC5ML32T7mBAraCZu3zqgfA2",
  "key18": "3NMYYhBojovBj46QxXeNwwBNeEbzSvgSurqxtAoXZcmSBPkJa3vRdeQKUFSqxXuxNbzgB3RDhw66WFuTE9E6DA9",
  "key19": "2CWfwBxrW6EySkBzfW9jXj539xSHDPH6NcDNJzKqzpf4SPJ24jd4xsk7JzRBX13yfXuSt9432U5tkmejf3H1CF46",
  "key20": "5dgUJSDDtQXKcva8hdTAVsSDYRpaksw4KZcUT8x8syWjm28D48Nxn5yAZUxFQruaZKWU4dTdxdPUDbTW8FLP9Mv6",
  "key21": "3CZCoEWUUZspwZSt1qoNdbRzyp1uDt69FtNcBkfpJ24i2b3aUkQE1V77BiQeUXJDPrrxWCF4Rfq4x8zKK8TXatys",
  "key22": "3KCmcujnxD48BWJUbLh3ZJprV5LUPupiYoa6GHndMNSZp1QchxN3EyNMA5z82ggQPpU3uCMJ7Y4sqbt1wVnZ8Uyg",
  "key23": "3dosxVNrdCKPVbbncqBv7oVC6sJVTaWZ4cxZN8awjrvKZBZriJgWKeC6dNGjPJaP9d6JcQawLVNtHncXoikXMmwB",
  "key24": "5UyXwZ33cMsV14d4ETX4ntgTTgKx8n7Ro6YppYbYRjjEwQRu5EM2asgLEFsvBusibtmas84brANVBKXEDV9fVuDa",
  "key25": "3hcBqr7f7j5CoZxkFxRFuN5t1PiHnUetpsCANVu3jft53RjvpP3Ucj93YEmJRLsAzSH2fs5Zp8nEL8nRmMipLQm5",
  "key26": "WeuG6NdHuqxHWfuH9D11V9TUBoeaTnae1JTSKCCoerVFdDHSy7qFCtpraTyHzWCc8RcBzaegTSZBaimumuUjzud",
  "key27": "2a7aMSrFVF6bZFxt54vcgUMRVZmAP3HjAF7TX5k4HjwdBct1UMB1rzW2YzAdRVnmHMPPdzgT3duHYyzQrsy5GnKu",
  "key28": "3fffb8hrReannKQGaEGzGZaRQnLcVTENtxWsfiRi3J4TeAaUgoPyX91Wsf5Mef4L5vfYSEbh7GpKTxjjLd8HmCPR",
  "key29": "3JYFZmKgmANu1WWBa4fpbnWFc9M2qrvnXXNiLmxQ1SVrpaorzcp9yrt5mdqKRGN4wDNaAYAXQi81xxJHtHYMfwXh",
  "key30": "KztVet9tvr3giJqvS9VoPDqW88dfVu4s6AZJ3pebVDz17XCHFiYDgw4MFv62YB4DM6dXYtJibGahAinaJwyChGQ",
  "key31": "2NpE4vdfeFo2sHgBr3zR99TGzSN2hfyHUzMXuycSy4PiiGCjprwyf1jANoiYdnVa46eYo2sG2SgS851M4qiKhtjj",
  "key32": "4jYe57km5xK9YE3h8vUikws2cvTFBEqrMfbqnj3k8St1JEqjpjBLAo15YjT5vyKCAp4cznsN4Rcdc9PJkeLJWgk2",
  "key33": "2poWP3WSjS21NXoSnNrfmp2j9rNq3jqbwauVGCNg9z9ZM4VFc8BjUaZ6iYWvUQ187FaTm63iPNto1HF2Yn7CFgKZ"
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
