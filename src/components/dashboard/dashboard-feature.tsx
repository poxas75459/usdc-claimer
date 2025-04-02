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
    "4SYpjFMWosmvSQVDCfGL7uvVGEScR5eTngLZFkuMjuYbkmEgra5tBYihqzf5gACCDBXPigpRaDpqcXykeHdsJVdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9LYRUNjSkqvFmPHeqmhg8qP63UeZhtjyGVEvS943Dji1yQ6UmQsYMiX6KjiHo2sZcRXFfctm6SGvRX3myTzt56o",
  "key1": "3j5bxg4AicfAYVDQEAKCuDteD1rBDSaKwBh9rPB2HSNhwQobFAKS3FzY7t7BFGYrgoMZXRQsqg7RdDgsQhaaeRZG",
  "key2": "2yWitnfN6xdFoLb5nnDttcrLUhZTpwAYreecJE9QsTTPvVxQTzw1GG5yStkmxGpSaXqKg31gtnDCDarEKbauvshA",
  "key3": "5oCUXbuUnqkQWKXwweHrUsEpvJCBDY2NvjtbusriVujHFNsUnfu5XM4aLFpchpesRGmKR1fdFsQKmfbUfLhXmYQc",
  "key4": "TyCmGKwaeM5i7pFsNsjr2EVP5PWdYMnwZBosB8KSHvzhFd7rgf8NzZoZiJ1YZXPmDUv436DsXmcbVizThzC6qzM",
  "key5": "5rfjpSzbAryZd3xCRAsVxWFzKb4kJjqocf934LbkkzaZLZMchQEq493kscdj2wrkk2PMV1CTfBQLxRhWrUjQd92T",
  "key6": "tgrw4HQfwfoKUAy6cfkUXwE2axckxJ71zUC6m8jya2obnemPciLCi1hsu2xUebyeifNAZr2HbhUxD9rrBEcrzmu",
  "key7": "28Lg2Xy9PpDrEzzNBSXaMJuJcE4Rzs2oFJ1vozjZwuAnjak4YsBGUomD8GUyiY1XVgFpeAkV8KG33UQoZ9CydF9T",
  "key8": "2ShYZQC2k5LxXCjqtXps54AZ4gaqkacjSMUwUHYBdexeesBosSo89GQkyB8yFZJvXZiurR5FaMaNCaiZQprUehKS",
  "key9": "2hRzcrpQunfuzKN1n25xSUB1vtM4K2F6AUMP6zMHN8Lsg5QoRzPJ1j1q3vXbXEgUpzFsMbFV9sS18DykhBgmQyeo",
  "key10": "2FibmiT8ypL1zRG8xTYp9LhZKo63ZkdNgTQvdiJxai3yHrD773vBRJfL7hmDT3XY4DbGKV9ZEphF5Ndw55TTnnQ1",
  "key11": "4Rd8cT1tGrsjAYEQVoevtybRYW5hgchpdfcJRQEkFkC3T9VcDo232Yhpko6V7p8gTrXAL46yQgq9M5BrMubN49NC",
  "key12": "679Kpu7qSN7K6mkv5Lmn2GakYGmaU4VUVqFukxVSt9zGtzURUQ3Fv8W7QZ2BYAXYU53dN4Bj6eif4tTEsWSNwviH",
  "key13": "3P8uCvMQ97TjmBBKsmMwkp4LDzr7VpF1Ddf3RPcWFAWECytFjYiqQyantYZGVNFEZ982yMwdJGnGZe6gDf2DPNUq",
  "key14": "273DFWD6Eusc8uzvW5mzRGkDRUQtuDuCro5wHpAkX9xr8o2thinYUJUJEbb8xhFzHtZPHuj1oHKbpF5i2UJ1pJvH",
  "key15": "acEx9bqKKVvnSRcQ5zNTiGiva1oaabdK26fTMpd21QeoHRYgzddpJqffHfqQL7D54ahPHVYXaMpuLsdVCQ1anD2",
  "key16": "2Mad9EhRFCNiUdskbfby9SYEc37sNj65XeDEtFczgrdhGiSFGav5U9jcWacQD8eus2ZxP8CdQ33VuphYkUv7krJZ",
  "key17": "323zSbNWxeypa4vuGz1JCEmjmi2vavr4KJH2BMqfwCGcti335Gg5bwDPpKtbZsMBQDpC4UC7N7TwczKjvMFSdDgX",
  "key18": "fiAn8HiLFjXhnWL8LRpHYszvodrM3vsf7GbA61aDdvd8PxkyH4XioV1YxsoJVEaVfJg3mxicf43Q8qM5R7Kk3zB",
  "key19": "3YMjvuUnAKRtbMs6HeZfEexpCz79PjH3wJdUPe1MXatZeZGLrdYkztk5AaUzsGGvrT5KKkVkGav4ipXdGzfSHftt",
  "key20": "65JTUf5PAvQDfhNaY8QoopsxEc75qB93YzCh6xn3JrvMgvFKA2zd87ErmcMyac77YVHoJZaEEbvXoHASpYKxPRNY",
  "key21": "2uWd79Fjdw4qVcB1eqWpgW5zxEo3SWsBRV5Zd2nGZ65zoAddPTkcNtj7Gfb2Tr8MXmt3Bk935FHfweQKCvsVU75b",
  "key22": "3LnKcMpkc8p82Z16Db39sJyRBvQ11UPdXHBckfytmmrfTecDvbAWxA3epFdFG3KhV5NEL7oVKkGpcxxQuXhgx2wt",
  "key23": "3xS44Z76s4tQzrTUdpUgExksTuXHW37Nqksbe34NbKtH8wGNCdntC2LNqhrkh2wEdRrUtE7411ZcSzR3Kq1z6atq",
  "key24": "4BhDCQCe9XA78C74aVviGvRQQd1YAxFyfbUBfGwwzgDewAQ8fehiQiG5QZ2Cypuu2VjnGiSj6hDtNY1A8465XoEf",
  "key25": "5XxsBVZCKs1Pk7MLNZdDgGBJrgfB1VkDWWMg6u2Zod4azTMLwjGqrCXCEo8vtbic1wiY1RqsRstrxkcV6HcsuQhc",
  "key26": "5hZcc7EAqmfRNhQaaXisRF2A3tyLxYCMM5A4KVkpPFnC9Wo37z2GaQjQpYtyv6ayd8QVUfQeJtRxaw5XsJCUT8JL",
  "key27": "5pzPHWcXZjxtxVUr8DPSRRLVFVo83SepRD3pXDqMEen9pXh3bPnKcY6GAvEiyGtxDSm6NLdJTaZJVXTpqhKnGXQn",
  "key28": "5soWzuyPthf8Xpa9exue786NnnbmhfV9WcTZpKrncwy7MbNbeoajLAD1uCa8Ya6nty6mkZuHctbwAuiYqr8uYjNT",
  "key29": "2XdM27u98LKYGbMS29ZFtkuNDCKRRXLwTbpdwz8z4nsiLLZnT2XHhEoVHZVBedg6KpWXknUJrC33XYzHxdzwmpV4",
  "key30": "5j6YSGRGMTPVMpWKfME3MsvmDRAoN7Xt7Hsk2twtRexBco4wBvxeinu7shXj1uP1KH1N72fRLPdgJSLfsEsc9EiU",
  "key31": "64RMLU4pyGg9PvnAoDtRfuwDgwvTiPqT8ytY7unPe44BrNmf4zReCgFduDGtjSMQmhmZSns2v8fnxi5Kphkg3h7D",
  "key32": "hJvzkPJtRpdhrBcLCkNBy1vn2tExncNqezJq5JBmjseTpST1hf9ny3BAg5QsRK7RhEbHbCckVhwNVDKy9nxiDiK",
  "key33": "5aVzMQZBc7HMw9uC4VERjgrdKKyWaMvVbBGy7EnRTYpSeSws4wLEgQ3eWXNxeVT2ngRitSGqF7EvXMHstkvv9vjd",
  "key34": "sHSNC4JdhXvWaT1Q9erPyGSgtYuFaADng8WcfLM4ijhf2PHGcU5WfJaAwwPNfCXNx6RvnCVJ29S86vkqDKdijdy",
  "key35": "2VikhxPSgvsra1ZKxJhwCeixvsp1GCwYPbd6koeYUKDXybeRAeLEx4kdRPopu3hNdKK2xWCvnVqbU83AKcMKb6Qp",
  "key36": "26kRZcmkJAPErsBuqpSH6U9FTvKYhaCJdehoWgC8wvFd2xdMj6yphachb7m475oY993qtv79rjv6ycrwAcLBmAbY",
  "key37": "5f3U4GLLgooYpJzZsikeHVJ1vHrmBkwi7FW6LN4P2R6PzLcpcPnGk3AS843bKmwR3afXKA4m2LJi49Cwk9NS2vrE",
  "key38": "27Wcz6ikHPtodLX5eKnCSYagShntPrF5ikKQZWSscyfpxsVUaz43WNKuhnKf6Pk3BWFWPVCTQU3JBMgcCrYcTHuP",
  "key39": "2sX523vHzUQogADB3tNQ1cXHdNtMV7wqGPTKrUFz4biKMz4rfM9MboUMg8P9QP3m3nfJuRzDrWboogeede7shnbb",
  "key40": "2QxpbJEXjAoXt268wwSqHXHqV5xirc8QiEyg3LfNM7Ka2umyPi5kFq12oPK79PzGpjavotKPJS59PfjhXRZrUY7J",
  "key41": "2ueoFgh8UMUtQQZvpgEUHU7K8TbTf7inRXM4cxTJ7dtaXAPRg9J8VPJ78pgxJs34fWygegpWEKTYeQj3w8Z51Y4r",
  "key42": "3sB6Ym6C1wezMZMrm2y3Gn7safg91WCzmYF3e3X6QzgwKTf5houcbpZ99TLSEtCfn9cZb4EkRCcZGtbcBGE6pddf",
  "key43": "5S2UeR1wTKJgv2CvygPomrXApARzSdhyB8p5xcAtYq7BEy6FzkCYTX8QFw3KbmXQyGjNVPMpuAJAATFz7XfUDVt6",
  "key44": "2RxHhEPastbpqeo27LfsZxgTaV36zvkxJaqHqz78zFnRr5KAb2VXUwGUiLX6hgGegaw2VZ22gwayreGp9RQRJuKg",
  "key45": "4DYYG4K3ZaDeeqVcXRXVq3CZTLCsYN7yrV9hTsmXs7j3WMETmmymxsv2gqB7Debq4JGR2KA4sveFFPYj3VG91i4r",
  "key46": "5PmTgPFDXnFbJQFsMvKJXJW4jKmAhaYbhYUPLJJwjGkaYGxF3dwBEcVTVJq8r6RyjRN45VgNHpMAcA6Z64wSZfGV",
  "key47": "2sU67bts6mJwQG3cF5VYZ7Fbe5xHkz6tE6AKuoaQAkTiftXa5n7ti2i4qxDPz5tf5g5BSm8AFcQTTmKwcP5pheVA",
  "key48": "5z8weo7Kfc2q3L6tiBcLsB7aycniYrtQXJfj9XEBszjWHn7VHvpEMuDWj2szSmjg6RWx822c2zqcCYb2M7963dRw",
  "key49": "n72XjRqyWFkFDDoHXwE63CzG5qigT7NMN29DP2kpTFckp7E9aPWLZS6jGXtPKiU5egjMeCaHT8kjmRFw6AfhKQA"
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
