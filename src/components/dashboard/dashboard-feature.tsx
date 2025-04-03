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
    "TXT14tzw8WXJAaW3aDEUC5VGqyFLYQHZcTYe6pdcZk7T4jrwj4aeAMkATfYQ6mjdUBVV745UY1xveezNF6FhnHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jtnFffaoWUf8mv1Fyr4u11LFTcoUMKxoZVdMQghAbtKCcNyUsraDZ3ugMAwxJ1rQRzw4NQeeGuTEoBfVz952hnP",
  "key1": "3Z1PXpGpC15qPZZGKDSBMp2Gz1NwG15ns5yvmujzkQSkEsp7W8boqNFMN3KySQLWYq8qtML49rAuB87dx76Zh8Ee",
  "key2": "4B3x26jghE2MW8gC6t668D3jn6jZmeZc6N1kpVjJ7qNGjT9PGksukyAT4QBqmManVEfDBSmkuYw8sXLNKk5YCbYE",
  "key3": "26Vwsh3G5N9i8GPQwpYgCuBrQoVtxHPbRa89zCaAosuUCEhcA6qvSJJeH3ughvXQ4SfNK4745a14giQ8G7dG5LkM",
  "key4": "3W4aEhehiCmv1nfyrbf1PQzz5TCjtBaWUK4Y55BjSi6Ys83faCx3fkYk1nuck2QXP7rCGhpz54iZmvj1tqzqsnuc",
  "key5": "3FzwgJzXerazX4QvGZmeQQwQSKk1B7STw7JtCwwqnAssVZZE4ZT6UbYJB4WUaXGjzKVKiyTc2EXcxqPWwHDPAqXS",
  "key6": "5X6Qj1Bq2tt2Xj8QdQFH1Kp8rHiQ8YcWtKPcvXdjt5xUNYs1t9gku7yrw5adTswSXDcDVu4ZiFqAvYv1DB1rWFyD",
  "key7": "3FUan3MBWGaTyLKhZ2PY4UDGYVA4Ahtv2LKf6HG7CPxRRqHi2ZuBoCcSkGmnEpC7mmeMsVqEAVm4h13yJcPEjgAb",
  "key8": "p9bWupBqZMaBWgb2pCso5M1dJwwTgc6c6H5DftmqKwkhUcTLLwvU2XRDBkap4Qxb7pftNf8DrfJt8WsQffrnode",
  "key9": "4KLPTo5r582yJ2rFkedxZ2suoYETAQEkS9SiFqHLYaJN43iQb25y4PuHNJ5Be4BUdt4FXVWYVHnCNz7Hz4bNqdY7",
  "key10": "4wHq6pYYWR7hxsxawqz5EYZmhowFxvK72TAgCeNCJaDmUMAGWZJyohF9pB4hpcySBmpPbtKQLKvQqYLyQ9dDiR8L",
  "key11": "3QjA4kRmCcPMBVgbsDUYFeuuGSDGQGthnFhs6tWVrNSEqrAZ9aySQ3bcxTWSHP6HtUcqU1fwZ8BQ37ex63aGygWs",
  "key12": "3fsRsGpLQjeSeXCtB5u65FdjrVj2YTj9vw3M1qBgHckCuoDB4ahdbS4WCEFpa64rJZCfBQgnJQGysNfeLhKowrEV",
  "key13": "5bx3KEsJDbicMc3G7gvjK44bRAnSqHsHx4BJM6UuTiv6gWmkykPP7NKS7fwBTocoqw4wfAxranDpz1QAuZFygQs7",
  "key14": "i1JcsQCqeQCN922dwAMYghTibwHZkFYMYfYxC2FsvWaZ1mTX6iTocUyxBC2X6KQVPE2vHvKRLKABTpta9J9mn7n",
  "key15": "3grP3ukkCafgCw3MU6cet9tGcTotE54sGYW8TRczmMFET1tgTgouZJf8m1mGAbpnzyaaeZ9rmfeoenFcZoAzhFHy",
  "key16": "4RwprrRLaLRwHLg1geZevP8yFcBNba1vR6ncMU3istH6QzN1yPP6z1VuEPAZdmCgUUB3i7AzK4XhRwFi1BCSmqXf",
  "key17": "4L9mJKWSECGVeKdEQCk5YA27qoiEGdduvegmaxSUaUkPSTzBcraSWJeB2L5B35nLHSTDWoEwYPA8SRhVqm2FhvBF",
  "key18": "2hyDcjihBNAvQqif1t3KUgcRzt5QVz6m8sR1pQR4v3rV9LKsaGiD7h74Pc87JYAxGJm6r9FjswazZK3azGkJecrn",
  "key19": "2VSyjCjCSRrdjJMPjf1q5qRApyHGt3tsuvpdFhnWpa3sLoCALKNBLWpdFU4ghZYK4YRj91RKY83krMX9kzS1Xkqi",
  "key20": "35681j3mE2t6SinSVMNihrx5oQXT8aHsREHoR5ARVBhXqA68p9mi6BRAnu3Nia19WosMSN4ZvcVBGXziiKASG6yX",
  "key21": "2dBw8XB6VXDWAzaokF3Kgxm3wRRtd2J2LboXGBMEjwwxiomTfMAYJ5uae2PRmNv1u4eYSP53v97mxQw9cdTVneob",
  "key22": "33hFY6ekFCm19uomyvkgzAJkWAbaAuGaquyAMXQgpRck8KzTSYiKq9mcX2yw64ZCdXjyMwmShBwNHF1AvtbYhBfd",
  "key23": "2ZPj6fAF2fyoT5cJMU4iraWoGQ2HdKHxqhdJV9bYESpMD82ZxiLepRQPAXmZnAPzAR4NpPve5ZTsKW7bNhe2ToWe",
  "key24": "2oCLg4dZwodHfkQbzqTLjf3b8tpubzSiVbo8ZkF3Y4WEVDCcsWc2EXdw8uDyWnhUQcdaBC5yEgi93ed1Ar1mWCJZ",
  "key25": "5iuWtZW3kRoLQKpcKZTXPjMMip6Gbx629LWxxrnVVhkrHZP2xanoKWnBCbtuTGTkwgoWiVQHXR2aXAxZ3Au82dK6",
  "key26": "3bndQdREW2Rynmnu2bbeY9RFuwP41ZNLjzNtXiAdjbnxZJAehAYTivY3f3KyhqnsbLFxVj5tvSJEWp733aZ7DkyG",
  "key27": "2CV6KNPEDuiR3uEfts8rLL9Wt1zs2WD8E5NFpkgoKQLpSYJ5vVyE4k21o1PaJqLSPbR3ipgPvtuLYHUpsCDSWQqK",
  "key28": "59gbK4TvF3W4WjWnniuGbyHMQNwncFBQZYGhrnugP9ZkNYWPei8qcXuW88FpjAQB9SXzzbFgEoAY35Q22i232XbZ",
  "key29": "Z1hngypjARzA5JekY6fs2uT757Xr6dSkp7A5N421riKhqZYuC9sbQTui1bvovBpThVheihQmsKefVq7EpcuJZfR",
  "key30": "31eRw2MTNHJr6mfDTEkNkwLS9gXREiFT44fFyh5s5vrffJP87hn4h9iDnZkEJQ2NWfmcF4FLtbUxNFdyPu8aM9VB",
  "key31": "5z2R2Y8RPve4hb1v6ChkgYSgqz4vdXm3pNzqvcJqUk3mp9np36FTCMpbqx2tiCd22zNRzQ3HMaSx4D3FKi6UWbfT",
  "key32": "2junvPNyDqqAstsxyJmSYtRFiXhJGpTJnL7qASTXX3zsD14TKTUvFxNrWGUwFkSEqYebC4ULHX1ZpboLXjcCtyT5",
  "key33": "48KDpynmbUunyvfwSq4yLGmGxRZgS7B4eAzCn4AmiTgPrTJqHzz2pAhHB9Q1WbjL2EHN3XuMpZVs8obEkyoMU6TP",
  "key34": "3J9GG4KGWR8r4f5rB4wLCKxM4PebRgETcmQaCrWU6ZxqbiyqQtbawyeBdAv7CrfVdCMiUCVYL7YUZpuYnF8gFJxd",
  "key35": "2MfXVrVEFy1JBudQKcEvcJtFNzpYPU52UCYbi7rG9ARoVBeHPLQFhxkSxNtGEDuLtNqQnyRdfHCcrojLMQxEW4UB",
  "key36": "4VC2vNoAcAwnEfh3mpQ8db3dyegyNzQgcr4whaNcjYcxVVuTBiGmYEWq42GZXyvQbYctFsLBqfM95TFZVJEAF1gj",
  "key37": "35PiEQNN6geJGSzbMKFXTzZSs3c9Ky8sJqQzbneiwcLdeXTpysSpVbWdJpV19iFGTEkdbgC7yPEewyDJKL4TYeUc",
  "key38": "62zp2q5iCUbGzdqFKYQLHWoJtbAhPXpx94iytxuSg43fSpLVZBWk6aFJBKDpLaioFS65c28YTGEuAimtYTE96wag",
  "key39": "5kJiQWAkyoAWcaRXxegC3mSZFDyJk2dZGH1ctuGtu4SxHKGtHKxZ86X8j68EGNvAK5g9QBcHAL25pgfwxSNEjJea",
  "key40": "H48VZNLBytUBPbaBgFj2roAES3gvZptuiFLaba3cCMzWQzoD85GuikYCCj3664BodcnDWFNbNZtQVhstg7DxrmP",
  "key41": "3Awf3rD9AxmGwTsrsjFLjTyZzXF2pWsE1vn5gzrCFRpNNU9Hm8UB4DK3fzZDvSRYNrZ8m4WQ7J228VSV4Qe5ZzYk",
  "key42": "2r89b5B1uxWZsX9gy9Cms2Wv2eers6bSnEBbyhb6ien6z6PYFWASYPndm7dAKbfLPQjZJYHY6DqAXKobwrcrHE43",
  "key43": "AZGiDTQz7ArsjyhdZyNYGjgwvEaFxx1JUJ16R5QEygRoKcfj9MsYPHdsVowKD4xgntMFGcc8bzVRTfV9JHYLNia",
  "key44": "3JkQ2jUs7U1CkxT2QcpFiTDNEDPx1QQL7KgfF4jDLhTQBaNq7Tjk2C7dNKhDc9XcgsiMBETXt9DWevihSZEibRXj",
  "key45": "5hujR9XkeaUU49wFC3BXiNbZpZJMpbJGgvxA8awEVJUhneKNhR7cU3NEaZyjwe536hghiz2Cb3MqBJrQzAa3s7fv",
  "key46": "GPu5ot93qnVtMWn963rKwDHSbcZHCgmkdEDvo6ojZ6EfaDQqhoDcEr38YMQrDqgekXMRiH9JCjUb5wPxBJAkmZ1",
  "key47": "5VDgzHpy1SnwhyjkGYmBP6EdvG7zZvd8onHS8QwtFhCtyY3o7QhFfnvUY6NCdpLvgPRevncRb9JRq7jyrVBRymj3",
  "key48": "29bTGGH41zEBkaXq2moSexXnEMKrEsYKqzNWg1ZKo9S5disuH7jTCZM6kHrzSscGBqs6D2Hx52pTrHN4AGFGqije",
  "key49": "4PZrF3Ng8oe3QdsHdCXbkezkyyKzL1P1P28ZunBgavK4Upw6EyrnNUoFmzRq6Ts6H9TCBGqeZHywCaMKmyZoHrpz"
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
