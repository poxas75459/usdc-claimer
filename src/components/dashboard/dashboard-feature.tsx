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
    "SykUbmQbWDngGJYLdAybUAt9ETKjsCm1PtCSPs5j1k6eeyTywtma8PYpmRkEQWx8iDgE9K5CV3mSaJVCVoHuq9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XYWJdSwUm2wwZSgk2HJegQ5tXF4zNJKdpkTPJmxUnY57cBUx957sBcYmWkvc792Xtxevx15Eah9K6bbwJD2edyb",
  "key1": "3JA33iLTevdC6sfCAa3wsXccXCuE6oqNy4frRLn5J4eGu2swciGiaWoDcKo6QviFrWnheSogLyqcY81SbfUDaxbj",
  "key2": "3FmMSkKs7Caj7vs4cT1UgdkfeLt14pEKuXoupTCF2Xpkhqui3YVdbaCJp3FpKwmVrYrmtyxMgVCx4dyrsm7gNH97",
  "key3": "GVXBFwftn5o9wpHENXm8nGH3oqfHfp6eUDBDCuj1UfHrFw4Eo9A9SJpzYNXSZVvVFhYrp1xbc8fW82sqyoK8RaV",
  "key4": "hSeZACeHDGsmKVjevVk5UmbovUB5ow5aYNcxEppqU8EDS1E4DhPkXnLR5bZhCFvZPCi3yJKrY9Rrqw4dLVUkRF4",
  "key5": "2GAiSEJDZiJR83ffivhouAFpVUkhigZeeS9jTWQ8bpULwCAiUhpZ5xhLmwdHWcCkfxQ7uLa4SvbGqLchrgZt3J94",
  "key6": "4LkcLip4KmAMXYtrD4g2p1doxWZ4SBGPYUSHh9ZitETVyQqWKALerLZNan1FXcjArBG6Ay8vqsLwAEpBWEhgS74M",
  "key7": "2XNrLXMPFecGZcwXYLe6MxHn53YGnopcLMA4AJBTHGNB86MhcgXb6uw326my4iVXYvtEmqba8MJxFDTGbVziYk6s",
  "key8": "5STC3ZndKvABrkBC9d8G7D7HJy7B5xfxFyw3x75dcE9iwhEWEeTB3Vfw8ZUgnVoAhThxFH2X6d31g5jTR77og5Cf",
  "key9": "Fz4Ajx7pGCJg5C9rudrcwQp18JbQc6togXTFd7cGaxnoc4kFVcaW5aHnFSKGbfMVQ4gafMqk9aAGSmiUGY6M1Mf",
  "key10": "44ssMLrfdJs75i5bRtF3Dz3gfRXgUTBpspEGvEc4yU6fAdNft3TexD6P5EfPafHF4gaCKdGSFEcmG6HaFaSbwfSo",
  "key11": "2fbwa8TiJbac3An5vDHKoWe8XeMTr4euchfxAr7FMAyTjamuBFai732hkf3JUMRvbJm1XJv43FbdEEPT7rfg5THX",
  "key12": "37BdqWWWFKraghdeCsZuXZTavQHcL9n62Rsx4wQ3gmcwzL78yd16qatFUuZsupNdnWcpZzrbLt2ChjMLzbLLDBrb",
  "key13": "vcQVUMHqQLw3aPLMEaTR47Kmkj2ovB1JjnibnNG5aSmBJ8WEyA2LhhKTM1MRsSu23tMAQudoGM7fT896ftuu6qp",
  "key14": "21xH6xsy3TUiU6Wzt1Bco6DxAbtWCeDWHfyhnuNg9A8hUJQ131dvbtJVrivS1rWYAbiFQEPysr2NhUTR4C34qjzK",
  "key15": "QzUbLTqecM88zhdDpEgmdLoAfrkZhgBbd1pJS711ar14CXiMqLb5xyUy5crdmjDRn4oZKRTMfZ3kPnGGVu2ARVw",
  "key16": "2E3SzSBtauLojzNXqPmFLQo1uRjPjrrZpVdScfBSsgfm5Gh6UHhJXrNg4rx81dXuYtCWbdZUTg4FNPtzBMLGJrK5",
  "key17": "5sPwd8RwUQ4Zgvc2eVgFFpDhxn7WaqQGgyKsrPpr69G31j2igMCSBwuEpAn125e1WyispFDRTHDnNDohBkxqgJaf",
  "key18": "5a7wncXNn28SJoUb54vYTttjvrwHFUGxh4omR327obdW3GSeqGjR1oH5NbPJp29Ju3WJVjH8ouFwnSxFuT3YUoYG",
  "key19": "2QraE2BzaGVdPzNDKoGgWoixdENbAE45hDKHsdaV8QWUaMvNFXS4mpWk6zQSWcdMo2u7e1dnp4cox7rTZEb5iX6R",
  "key20": "5j9rBqzv4JWYFnmdJd76PFr1xUyVsFoVZ5nk3ehvEmRQhZSLZb78EbqAkU2GDwrb5p1nmzEwXU3E72Zo8EtckwUv",
  "key21": "3PdNEKwgt6f8X1mNg7ENXDAiisQdoaudddNtzKJP1nNYJKj9N3vqHo6mMqzAPhezUBNxxGGThfMBE3K8CFwZz82U",
  "key22": "3Q4gXPUNwGS8rKRVd687jUYsrtuzLbXdcCVxdQmCHHZzvkxGiehUospFzSXEmknGZBKjjNg88YkLJfTBtyGz5mwp",
  "key23": "4scb2Am2isMSHCLoCp81GskSaS8ieMv7icZLXjGvLWdi8UssCSqtDxsm2v4hjMkJ2GCBbupTymAs5yFy14BXiXuU",
  "key24": "2iwruUygkociv76QjHGPyZLhr3sATZpsnBYSLDYAt7Kq65ot2LC4AE4788P6MfQyWvedVVD5xBxngQHb4QuoBR1r",
  "key25": "4ExBd3aa3oEvKSXE9Vv3XrqM6hebmKf95iDF2vaneYputWcxfx7EgMLRo6XBrYTtR6ELXnTd5KL4dxRsbp1iv1dj",
  "key26": "4eemYg4n2TxwL78VXF6AqdqN6hzgPvPKN64a7RUoZfbqpAwPpYWUFbRNBLjfFeyYZcw6WCsTNy8vDjytFjkBdLUC",
  "key27": "3LHnjC4MeXBmMHhGBg5r1mm9mGfu6AQDouaMkySqhj1wfg49tthzBGmYwXe1bBQwHd5jwJmqueEkxwA3UELWziqc",
  "key28": "XEGe9uJyXmLq8fcDnrzYrNK1r8tXrLhyZV2dmtdTooWP4v7LbpVGRqeRLzuTmFrMe8Y8gqaAd536aWaSCf37a6G",
  "key29": "64JSVMrZVbx9VXoSqh9TM8ipArLkoQv3iBgYXRMAUfRweu2EkEDaz82HYH5s3NRT983odVvax4zbnWtmpyoKQW6o",
  "key30": "4QQGPPLHx9kaUtJDADHdByE1noE1RiBm9e8hgXzT58ZyTAcdPwr8MscAuvPRGypasKy2LCiyMmqufk9qvxFRYbjh",
  "key31": "4gJXDmpXC3f1mQ6Cb3nrBcd4fAJCHXddNnrr3XBTv4ja72ZmkXm8PmrzZXutvVCs1bWvH2jx7yu3pdViHE11xrLA",
  "key32": "CsFaePExb7reMvFnB7YqP8uByxru5fqmAHsY9VU1ZVS9G6eR3bbT3YhaGebTjZHiPk6Xsc6LwngU2youW5CnBht",
  "key33": "cKjEYEjw19yv2296EtsYbRiR29wFKErcqSx4RXJRktjVB9euaNeGsHWsbPxbBfg93BBNvWmNjh4toX5hgArCa9v",
  "key34": "5dnhpnJCTJu6svhXYHLtwrvtsmCMTD4JzTxAj3UniPGZNLNcZCRhv29DWzHPF3v3ktE8NimxYpnZJKBwWkTL3FAq",
  "key35": "5rY5iejnixdvKwmgdAs9DaCM7HnqP9w2xGmgh3XvorVNDGaL3wJvtTfgry7jimf9BhXUHV7Cb3jMCTM72pD3aGyA",
  "key36": "34DkkLkbJhRK4hoKobnprbv1MTPMiquzS89TTkEVy5T9rURzc9467AbDog6VxYriNb7BfRBK6GSSsnTXV3U92Nf3",
  "key37": "VFqVT7DtahaBFtTLQtBPynvvNxffZ49SuapfwqJweN29BNBzKBqbFGBQ827RCRw2GdxTUgn5ZRA7hjHNAZAbMSv",
  "key38": "5TDHAMD22cnHZUQ9KQg48Hrox9kaVJkwPBu7gJYcHow1KLfQRC2KjSdGycgFKrhzwhi6KVBkuv2n1P1BTHTKympw",
  "key39": "3s1jMGu2SxijNWT5jtfYY92x4qDNe1ECwBUUUDhG79VG5ujHHZFbedwZcCA3sJWTKaAxNBKaNUJpvdrsvTT4vhu",
  "key40": "4js6YfrnKfD1Stamik4TjhaUkMz81qHZMYPeBpiHR7kQq1Zf6DGRi4vjdhYfC7eU9vBjzR8U39MjgsiJb4R78se7",
  "key41": "4Gm2G5H2hzgFHcFKmrHzv3zYUMk9r4maWZMJF9i3ZQXkzBTPmsXkBjkaznuEAJKUdu6DyDeRGGfPDHMYuuiShJCV",
  "key42": "4UkhTTb39mZRB8wXJjbSwPEzutqErpv2NUAnssdHPNcZwXpRCo8GUdioahreDECQqzveSVYqSDsr6GjAHCjW1z66",
  "key43": "44mLBuJX266NypRZnX7RfjXGW9apmwHw7ReUB1iEHPDeQjntqqbVTpvdKkQ1X6Pu23pcGMQ1KxE2VGjhyw826C5V",
  "key44": "5xuigrkDkGTMSgW3dBdphN5BhUFRAeyX3oK8gapzYoQH3pjqAGHytzzMYUAwesKaXr8ew6rqsoUq6egW1mBmRR8v"
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
