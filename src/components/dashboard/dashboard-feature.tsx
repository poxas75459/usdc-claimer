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
    "3L6ZDHGHpswQwe6LwLcHSXDsW7B5SJqs4neg3XFSvcFnBAe5JqQkGVRNtpyPjdUUUZe39B43bkcpKVNc91nr3buW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cjkYh5vkH4bxAQjz9UZXQAa6Up7oAt1w94CxQEaGzsDWUzgtFp5LkHGuXpFqJoFFZNnibgp95MBvkvZRCBudPeB",
  "key1": "5huqV4WKLhHBq7yx6kGrd7w3UKGrKQ7BnM8c7xdJfBFWkKpt4nGh6Xqdno5Q7Hap26e8cQMLSw1tSVMa1GLaSdqQ",
  "key2": "BtdcFyfKNkQXk5s6BqeoY9ZFtuYiC9yJAEi4vRZscaDxs7Zxn3hnKpEKr9ZTMJpUb3htAenDsjNeN2crZdske9w",
  "key3": "3oWbxQpuz7wxQ9rHeA8ytQ2LoDneNcx1QPmLbnWdXeCDxmaQtVyij1UkGDa5VmTEbd8TMUme84stW65EzLU5oZZZ",
  "key4": "2jSe6rV7fXnoh73hKfzhTpQJcEM4dKTvo6SsrZD3ixsysVBHfZ7DpLBMX417BWAMy1xwmn5wMjfzP1YSMCdehsDf",
  "key5": "2gCA2s5jzjjCfJxXXXGcCENHGfJRnKYfY75Nc3fYzqa96mkbCYypdgsWiAeetZSTLhPCSkNGsg5TnrtHNaeHUhtx",
  "key6": "3LkiiexrZH3D4ugSthCGEPruN3R6Ypnx4FfDfoSRPkRUEjW7nTfyjBFQpgwucEXh1sTZzLi8mnpJc5Gv9uauiJ5h",
  "key7": "2tUVjrGFnDEqyMA5MZTs15hAQXB1DNcHv5eTZK3oB5CJRJhntXmj75dJ7ehjXXMoAufwMPfP6q911NPwMwo3HkrH",
  "key8": "31VV8BhQpS8Wpopht6FeD3DDGFg4vMux4j55hokBqeMEva8Q5RvsKMQj63snr4KVAuZomFBo2X4KbKq4pQZjnS3e",
  "key9": "55fYs6ALqZtaJZh9h5rsX6u9VusNMzJDhoe5itR65ypiRQPMWAZTnjvCj7nVAs9nXiJM2vS34Y7uaxRYJ4DmfEHn",
  "key10": "2oJ8q3wk2ejEGEBUpBcrqV92xwg6s8aB93hHVkYtBvE8k2j7ozK5eA1gU8jGSSJWGpExN5Fz6iNzWSZbmP7mNkiS",
  "key11": "rZv24XKGQBS9PCi5bW5Pt6iBG2Z6J6kua9AMLRDRNrbaYc2NwZJiN7D9zML69j9LGYjUfG4YUedK852ufAbCGLF",
  "key12": "662K8Us4arqHpTaseTs698q22cDZaxR5NxpGww1Pd3ViGpHWC8JCwa4w6ZPVdtw6r2dRLqmM51K6hkmBuc437JAL",
  "key13": "5Z3SqswejZ7cMEThcnDvvDNoZnSu6Erp5cnUA4Q2BLF5644coU2DA5mK8G7Uq6L6zCksdkevSYKtygAA9nNH1CoH",
  "key14": "2Xp8WzLjn4JdMLAxojwkK6oHsUooekTAKDT1vnT2Ait8ZYA5y6qSpbgiYjJpPYWuX1EysHjYEesoyxfXMsRn7jhS",
  "key15": "5ZshQiKrMCZVVPn37iZuXoMkgUcViavpn85QkXxhx3DZfWKfJd4bAsu9jSXQdj2UohCPH2bmSGUSEWjt9L54ZGF9",
  "key16": "4EJjZsm23wrtg1K5wYChTF6Q127TUse5cHWtU7L77co8TmwLJmLXFTEPsWSpKpzr88cHpdvVSooxJZ811qMTqmYT",
  "key17": "5PM7QnuZ8w1em7BcKe92fGJtrygaFJV8e1sqhmueL1F765yc1bkpCMWzDBhNo891vDaqMdsMJrkyaKjWh2avcADT",
  "key18": "3UN6N4pUPUTEfqpjW58r44Bd3UzmFb8N4nr3GbTJcxMgw7TaCeG33zPuZYz4bt8zezFje21AAzp2jbwXFArYk5r6",
  "key19": "sNcUP8CTitmq6xpZM7faBCiYMn2QJ8RZzXvfX5kWKdVX9soVcxsCJT2QAVL935fBumgUTvJ4TEd92qSehXGiu3o",
  "key20": "59byDXckAHQp6MmciVbX7EatKvfqgtUUgBjjJtiY7M7rHfvHmsh3uG7eRFdedcGt4QTsXzdfYLAi7gixmHcQzxVH",
  "key21": "64cQoBnmNx6TneExj5hnpGHyMJGvTtJKauibUCVCUpfM3pTLVSyUgLUoHsTLjQGscuHAYwrUV18zUpRoScMyWN6j",
  "key22": "RtGvokFvoscJDcFnWfJ6RtMYJsg5Q1baPoZofhdeAumcDdQzrD9bb9d3G9rQTfNBSGb4cP7heX3S2ziPb9FNhYf",
  "key23": "4nTVxAvJ7uYdHXHZvogFYKDxa7sU9yNe8QTsfKvEPgYjknFanVLHgejccp6Jueu2SycRzUwCFtwUCzeqtUMxJWen",
  "key24": "2hnYmcbR1A3BrN579SeZpDhtgEaRCDMqsnt4xcyLzVbj5doQp1CXpGSoKJ5qF5oDwFj7u5dRnMyXU91RVRrhpCQq",
  "key25": "21fReDRracGy4xX6Cft3qECCDqjdUqzuib6mYjDNHUdSFWQ61nggAUPYZoGaMGrrGwNbJGdJtW7wewcosXyK9ctE",
  "key26": "4gsVEtzHoH4w8a4CAxFbfco1JYpJUfJzDuLtdpLtAsLt7fCoTggCuXxq4ibGRP2HZj9ATRvr78ncharrgXh1xr3i",
  "key27": "2AZv1KbYAedCrM4rVrMV9akZpXkkefsJQGz8zNTj2ufxgKLR57u7xbxrAoRsPHEgwAULrUz2BNJ1A7tQ8vQjPFuR",
  "key28": "3aS2yW8MMZ3t34pkSd8ctbjBTVyjwVMcJJ57BazQAMw9rRi5Aue7saZth1rpfEfr5cQxjhLj9dWHZsJw2QqJcCZF",
  "key29": "64LMc7k31K8zSstTfETFKigQQsbAZeEXaFbSh3EzeJGFp2LA9W1AriiorMHwprf6FgZ6uPXdP7GFFs1uf3MdbVVS",
  "key30": "b7h3aYiD42Luaiz6gf3CcbDwfxrFgJigvdNDRjbfMenHie6tpzAfEaAY9ykqqPuz313Pinyk1tQT6F6TzyVtZqB",
  "key31": "2ifsUzn3TdTo2NVtssmgD4BRDgGFUSY8Q4GeEzvkfjKp2PAkwbycynujQ7qCjysqJiE8djJDwjF8nPmFtAbGq621",
  "key32": "2Enjw96yWHjKToeDBpL9uEXg16kmfqmHSa9KRmnLGd5p7paURfMGMTdYoFDNkoFfHTPng7JD7GkY9zwtoHaB1AgV",
  "key33": "2A9TjrtSZP4bWfM4v5J6i1eR4jFW5LX5LM4cPedf6Lv9NBtobddTWEbzMiSphzgkfxVKGFDpaVZMVsTApUSBvkvk",
  "key34": "3RK3EmRyVKLex7QrWnQ1QJkYGjtDjKTFSsSrT5a9U7grHoNMR64wMH9sgpzFGrDff1kZB1CEJFNBVBhonCorL9rB",
  "key35": "3Uvj3KKeJkxLwL4pXEUeEUXFftNMTjpd3aKg7GrtBGkb3dAaowsodHJGKWd9htgP8vXuah7WJ2SrYpLTrhyfJ4xa",
  "key36": "2AUHiuKZXEEuDMz5ArZ5EuqqbaZeF7Y6b5q8QKjk9addHtbyvVSmKjWH1ZTzm3CpKH6jS24uxwEpGpPNrU8ai7Yp",
  "key37": "4cbc9LVzVxSvo4Wyc71NY17kU6Ra7JqZnwmqrsNd2hntLUJu8fdiRQepsueZFpChpUcZN2NHbjsekc8uuh1zQhy5",
  "key38": "2bASKcJgU9ZUcFXFv64x7Nj7ssfn3cgv4RuY1dFdMLiBk7epR15VZ6EEeLmS4v2ydqL3RBqBrDhT76tH5uSnqeh",
  "key39": "5M1Eq4W2Nn3ASPTBaWpE3VkyokW1e82xGuTtLiknmjqCiCrhCpiN6YYqGBzyeUnzK5EuzCWeUcNTcJh8kLMDYnZF",
  "key40": "48r6u7Eww5yRUH9pXx2mBpwjd2nCSAfgSTyKurc3dPKTdHAFLHuGSnKRpSuVFZe8RhwC1Xa9G9YMnogcmHtb2DFy",
  "key41": "2B9qEKiKbPwa1DJyRjbmkNM8Exk6y8BqqWxfFefVjpqEW7HAG3gQHuMeD8euT6gX7nxVyjQ3sHLDBEnGVZDBwihu",
  "key42": "4VCpTwQagmtAV1Kytgzn83hdgx3sCqXQFgPaqrg3wRtR25fq3WVSR94UgD3YvKwcu9aDXGe5oZF4Ppn2a8bvd6T7",
  "key43": "2q7sdrZkhKBw8WTq5UKTnngxqWR5Quht34nHHHk71dm9JNqSx5b6GcFoxBY81emvwS14dqosjSiudu63ZD5kzYzq",
  "key44": "4gdWkzTXgWg96EwUY3NwZua5g1Uw1Tx7f6KQhj1rXdsFdXXGkuzcMYazAZ9fwnfe11bf7EF7kgyMnkWHvqvkxCwJ"
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
