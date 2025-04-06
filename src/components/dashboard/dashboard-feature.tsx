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
    "3yDEbAkuccY99tzT5FEY8VtfLUGs54jjNeWwGvVecSZSaN1tMBRuPWDm8Fc3Rmi6KnPxmngZZRUZFLggBLNF6nkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HxiN4MJZ8mSQZGZa3tBjF1xCtVKLKoZe4ajLfeauKpAoVR2ZjmjHLL58PMPknERKi4FCuEeHpxbYVcYbLcGFDVA",
  "key1": "51oXAdcwP4K53o4oxyATqMPoLycxbLrBa2XjPMh7beYN3ZZEvofntEqDKHrnLTKT66eY94HX5nyZpnvXJFfTRfA9",
  "key2": "337v5YoGsKM9bgJZGsUWTrUSBX4pratin5nPqAYKyHn8z1WUTVwdFXvU5xwC3sf8pWb8sgR48bpikG2ZVbKUDEck",
  "key3": "5nHX9fr7U6jWTpwVNfSS5mPMaLmjDo4V1sy4VXmPwFcKGeX36XPr5JAEQH784DLjLcNP2JPEBrx1noyL9bSrqyfy",
  "key4": "2TmA5MeFXEgr3axkZdoSos5QWW91K1MCJEcw4TNBmL45zRVacfBgdioYnwg1rXoWu22JGYuAS8NYRJNwe7u5si7n",
  "key5": "gRyxBxsLG16zMmGbnYtfswqviApfb6hgcWXB6UWmY7AKdEHvJCox68CEhhktSXMs9GPjrXaPktzHj4SD6asg8Zb",
  "key6": "3SpgcbeeajN5CmZ8MFHtAPjxDsAFGZMF5aNftvwPW8rUWBRThYSi1v5aXupDBcm25yvgyD1tfv3ZckKTH3bxHH2D",
  "key7": "y29XnmUEFPC2sjMH1tsyg2YEj9nJ3tLwME7k6bBf7uc3AgihmE2D4Bt4ycqoVkbJgxX1XbJyQU9PUM2FDDY7ocd",
  "key8": "4NnpYTrmH5ZMaAfCP7LPw45kf9ZqVe9CX8iey4CAHDKu2QaaN4T4JWmqs5pPP5VbEaJxKQUMXezoTVsiAyJ6KQGe",
  "key9": "64rZS49CsjQfEAjPbkYbN7pbwiTtVG9M4id7RenmyBui7Jgyemw6y3YRD3HkH9cFRwLRFy9KLaQ5LqoR1KuupSLW",
  "key10": "65G27TGJQ5WW3aK57xcfBD15a51hNGa8fDtsLVK7S5uZaSRcqddJpsF3QFcppBPCMjS346rpZb8JKvTrLvTXCBHD",
  "key11": "3LSsNcFv2aSLEx3FCdDMTUeyp2aUiJUa8LZAGiEPwkTPH44av18WRzSzKNFdVLMfT1uctVcuQHM1d3XDN9x411vK",
  "key12": "3YLTR8Sengw9BxqiSXZNb6AM1pRU8TbW1ZgWuzebVku82JrFYCzeEuvuy5GLyKARaDAkqAppFY2eYa4KZuieLscG",
  "key13": "Y8PNVkXrmp25fbK7CX1gE1VmkScmCFjj1FhtynD6usSb3rWiSWkHbrmtv8MHY1CkkMjg9ZRtDYNeWHMpJcCtU7Z",
  "key14": "hYyrFgxy95B6kThoqJgDJ2KDGqPjrdBvCwmjF5fPYuNcuN2d9VyUZotP96uzth7L5mm5jESmYPTPFyAHjxSUrWb",
  "key15": "3iAZqSbEk7qmnZYg7sax6kWzUMAvZMyngSFeL4aLcsGVhvZnnZggVSBSTKSVzuwvVzSxq79bzzMB8Cx9K7V8QLwJ",
  "key16": "5LBDR9sq5zC7kDFdYuSwrop6w67k6TAu2Fcch7J2VErxDQZstPexg9t8aFF9vxQrxDp4tEB9tTDvCPjkqSBaEqXc",
  "key17": "2BUEbUJuJycyT2JrNQNHRQ5GcCt2ttgFKWXCy9URx6UGspXnkQk9UgvrS8G171mpdADs9xfSVHP4Qwkf6tJpAVqR",
  "key18": "3bjzrUUX35Yga4eg3rQrUDgGYz5jVtCsMdN3h8K8wuaPTQwkSxKKpCHKtbzRLo6DCPPH2ZALwGTJikPEQyWWjPgM",
  "key19": "4ZYhTCK2gVbBovN6TEvzEZFAjfFFx9FsMPEcL3AQFWoZWTBAaxZ31B2JikCHhSFjhpM71oTWAjT6QFB1SGyrJDuP",
  "key20": "2bumGX4JDssDp2XPQsSPid7ftq7vXFF4qsGBPVZRZBjRZr1Aq3GvdQTQfZf4N8MP72HjFkL8XmqTyTSqWJJfLw6z",
  "key21": "1d7NqJ6xu75PT94znqHixyH3NLRuq8r5RfDkiuN2E9dfeETxNwWiLAY3U8p35itdpBsZXwQE972HdaqC3dfFov3",
  "key22": "2HCi8Er2sPPka6TBPk97JobgCFTBeQpMKQQ4izNgjy7CCH1Wb1ReANKRCvQeeDZfY529g5iv8NtC54UE8bjXD2A6",
  "key23": "oTg9Rd9uFbXxvj6F4D3Ru6LzDeX786kLsZrbEYgZo1dJjyU1aXAjuTTo8gwqsWKh6yDSEtRqTsdGY8FmodqP8f3",
  "key24": "37CwRQ9V1iCAsWx5UeYRPUFujkdNokzy7YtjcXGkAwdKC4D6Mz68XDSrSviD87ULHHZuJEUUntEw3AvEYWbJBDEG",
  "key25": "5LF9o7w2JjmF4NuKFfsgzm17He5FRUBWiboRqzcc4W8oVoQrrJMmNb2Akcf6HbtUKi9SUYwxjfMiEmrv7k1poNrJ",
  "key26": "5iR27Y6b5CgfzcUsbcZEsFZDUEsgEVKKSvk3iG5PomB4Cnmf7qJM6dL3e3G813uNBSBCACuHY8jQMBm6qh78y3Mp",
  "key27": "2u7vjnqA2V9duRhVaynqnKFrmfaRbvMA8mnvX9PpREnAvdA4AKdh4BWxKGJfj483kFRQoNGEarHmRN4KSW3qewH5",
  "key28": "33ZneRyTDSNKTj93UHafsCdPTa4qK4asW6SF8SoNAGgKirQj5rEZ3uFCwDnTyKtAGKzNuUwjsAeSd8jb2K8f5Zcj",
  "key29": "38mZNWx6cvzE1o2vQLJscj2Wp87d38hvntQiR775JmrNFwRSZr7kv9Qzq3tRNLhdaf6e8aEpExWkQD296Kg5gEY8",
  "key30": "3VQ1QhAbq6aoaE56R6xe73aRraeSHj89G8qnLCSUxVTP4NcniYWs8ukR23ms5XQ33bff9PDXA3jRmqdvwcVyse4B",
  "key31": "3VZdiKiQpvbCk8zKrQoHUH9suRAYXXYdy6EjoXahGqHMtJ5VEhWS5k7vP7aKqRHQMyWrKp2UkQLjeSvNSff1vJCG",
  "key32": "65LdSM8TkZWx3F89i1jrM9oEBZLzwKVME8oMSJeqMG4JgeSqWdYUtqifanJsjiiToXhgz8MmqKoKU297vkw5TNuo",
  "key33": "64p2QS7qeqbRqGgLtNJQLZ6hEUj69ZWg6dQggSsyHy2BF2EFRq8SLwLTjpvpyCUcDtuVYvTK183r5DpTP8WnoBAA",
  "key34": "gLCzx7RE3D1LWCVqzZKkpzDDTQuKzuuerWmEfTLcyYxx69XQk1MNznrBpSJ65DV8gBL7hqBTKDVr1Ds1eQewyQZ",
  "key35": "42Dwq8gp7iG3o9mhyNPfMcqiCUhMnUSE7sRm7mFUuhwsYaGw2yW1mqghXijQbCHxncpKPP731BPfSfj7MAResf3k",
  "key36": "9eQPvFgLGbBsUhdQuBYAs3ooPexGv3MHbMVhbXNihpwGX3QGiLwDTom7Yz2Ectium39dgtdVg5pj7W3yj33X455",
  "key37": "3R4qj7dKDr7YYQyqmefTumAPxNLTeoanbfR6yvKkxTCGW3JQP4zryFnrkjE4HxjxFbTGBCe15pB5HX354Q2PEag",
  "key38": "22GiFpXfLbekESbzgMoCY25ZpwLDGH6qJwmZPEFwZqq9VDeFMRo5HSiC2j2mzPZFL8PGDeUPFP77odaaecuCdKqZ",
  "key39": "21C2jUNhzf1y6K2mg3yJtpHznyozLoFyAnpNQPjCKefhjxSu2Li7wqicUahnngJQxz68P9j3Q1poGs8jhL7VbTsG",
  "key40": "2C2GmojgqQPP8jMBcUZ4A1iWUkcgYoD1ivK4NJDz8mkSSpwp95gBDUE2samTvHegWHTYDjY8zXrGALhFjWiWycNM",
  "key41": "2EWpa4kPfZ6PSfLaRNy2WfgccvHnRD5ZxdFW5hhvLtMAtPpppUgZFxGhrbFUwfonuvTjnhTtZ6SV8gT7AsU4Zj2B",
  "key42": "jXK9UiQLVnWgcv1vxDMVqZje88cLeA5KJvAWvYMHUt5F7yTZJqcpdhQxwp9S9Pye67jbwc5kEHD3V7ZPN9iqiRf"
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
