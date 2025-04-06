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
    "51xR95cErVsYYV2vKsPVm3t6fAd552rDQdmp1sKjQ6iro3awy8D3DEWueTgKvq5HxTzmD99USdbsMGxrqDtNNbxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZC1R9NArrgb5U6cFo723AmLeoxmGJ92CKgtJrDTb8LLhvNqZvkJ2YDsTfDGQNfxMnTG3imgfeoEF8XjdwAcyef3",
  "key1": "HTGKMX3gvfTyFafK3W7din5TL2ukwDpGhGz4aazJZD7iTmvStHmXBevYzbvCvSe6YsuqzTveqtcPqZP47Rm3qNY",
  "key2": "geaZ4B6HYheG1i1NuoHBpDukV2yuqRggBC2ysgSV99XuqBo2WRoSPjMzu5DedJNWgnzvtB1kMahprVYC2QzbMv8",
  "key3": "2DfDexSYseycaioWrAC62bNyKk1ePVdmu6ZHCSFh1bc8PakuCFiC266LcrnjvpxMBE8BBTqgFWfDWTJwppx17XQ5",
  "key4": "2sjBVSfb9Fsbp565fvQyQeeqVqx7Lj5NLyjgL9on1tVo2Seat9BPM4Xc7VRYNLoJkwxzWJG4tPTZ3cD2JY5FxiFt",
  "key5": "5zmCU3ZRdmZ51r8itq2NPyG9Hmx9DCowUVf6jbfSw7BKJHUaCUfjNx41XcyV8D8KzmbrGL3S6uWCXhSXgKDq1Jkf",
  "key6": "3F6zRepzAeoFUK4dYkbRiwnULWctYSNGLxXF7g2H142c1A9wYxvyiGLYhdKNPu1b3nQusKrrNLQ9K2dux7nNquHh",
  "key7": "3dUU13xwqxptkV1ZTSVpD2zqNy4jYmkqPbq48QJNnQTev52s6svWCoevZ5yCDP7ythWYoQSdk8ZNZCXWf6LYkj6h",
  "key8": "122yKDdz59tb89EEaDWUPuaMYqSJzp6vR8iy9ZdU8bw3ikaAz9tAAEc8kgaQ5cwvSRQWB4N7HSeM1cHcDYQXxcHv",
  "key9": "5FHPsAq6DN2LAX7kCcQrphToZ87RQVnmQYwf9mU5X4cyqStTCzdTaULtZEYB5fyVGqvEBj7He1p1jEPiyAebsxiL",
  "key10": "3rsewoAFabu8MZ9nmpagxBLbNrBCep2Pa4mX44zzhHxmkT1eABBgtRJk1FTACGBJqkTicc5thsm3G8yZwmg7eudi",
  "key11": "2QV2L9ntCxyFgzb7zuRp7k2CTkQAacCFbM1DaurJ9knUiY2fUtFghgMvnVeLvEjH4PrW6jYgJPwMpa253eit965f",
  "key12": "3XLJ2Zi1eebzMWnxPgyHSU7cfhyFdLpucLyMvY3msxndWeLDrYrb2U5zYBxkRj92pAp9aKp9ME2pnm8pMnp9KGBs",
  "key13": "4mKnkEkR2vq7f9DUyM884qxir7HtW2PjUPPjMfgsjJe9LVERsDXqbnLnY6ZXkHgBWk6GJnPYq7gddeMt4WopLDjX",
  "key14": "DxWN7KZaJp3UE61HYgxeWC1GcnReZNVN1sZ9bHRg2dy96bMx7mBVkbw8P9FtPUmRp3SJzcey2Az1DVmDQSMfASV",
  "key15": "2W8fXuswpfW9EZxW1Ge3uWbcG1e1jT6ZPPqm7nUeCZgMZTRgMaKcKJG65bP3DuGxUuw33PjP5CS2L5DJx6nbW7Ar",
  "key16": "63M1bLcta4j7Cm2vezWwT1HyoY9LDhPaLfv1XxNhhtrpseqJku3ydZM5SoeDwyqAzchS4TedxNykLfUNxFk5Fm53",
  "key17": "b6hJeLCZJyBqVvzrCSmc195eSQikv2QDrnSxzB76NTuQHCxFydz8mW4ZYb8bUXZJoTofvPWHgDQFrUHcCEU2HbG",
  "key18": "2cftfgKNisuZ73Cc444b4nW6dUgKouVEfUk1WJKHiZG8g2W1rhoKS3XJHo6tbXK59YwoqBYbXghuckScQTQE2EQD",
  "key19": "3meXVXxjhMJHJWMjjgvo7PBGTUbPTrpqSzUGuXoCDvjCrtwqot16JzxPR6GSqCu5DSqyAs4PJBBcsLgf2tAdYWpb",
  "key20": "63Eeo9xFSEth7e2cuQQq5K8KjuZbPan4Zk5cvV1b26ojR4DEcU8L9UUYpXSVFW2oRSiPqyMKXxm8X1jo8pVqGsbg",
  "key21": "4HfUvLPRyjZZpDamRmaE3v3yCHht3YXNfVUjrkauhEMKwsWmn6mKjqh6uQrZZJNZjXzQayvbWGewqiCfoqMV8WQ9",
  "key22": "21twcUwdNaeS1Cig6JvhkQQpUm38CqNp2ntPi7k4uFu8efj9i9d4evUiSCAJ1viNTYJVvcezNyFnMNg6HQAuN23m",
  "key23": "2N3VY7kNxa8Laro3mSZNfgVv63JwpYcuArjZymNyogcNXvSkNr3bdfWSqqYwiPUZX87FGLoCZmxFLnz8rPPCG8g5",
  "key24": "5mUtA9PFbvP2eVD18FTLuxRtmCxB3zUFoF44qCdCG1kHxrocoKqfARq5TWeFXMNustcfiydKHEjrAb3cF6vyiZWK",
  "key25": "45FCjeShQoPQ2id8XPbnCCfY6RfVWya9yCvMNEBSWXYLsSW2EqhszGQTn6Kb4X77kZobvcrvNKTzajauHNUmtQz3",
  "key26": "5at5pCM8eCpgkFLRqJzbBvivB4wLxatgWb5ThwpQ1zpineRYSwNZyYVNDTU2RbJ6dDBn481hvfM45MHUYXLqpD68",
  "key27": "2fvp72o5aqV5TDHUqnAysgdYFbqZF1SkLipvUjTwMinCtD6NHqZHJMCRmaaLSzan7D5nvkW4b9nn8ryjurGF1t9y",
  "key28": "3Ye3PukrsRqXiM4KQfR5ihp6GLNKY9snnvy4rtyY9uVSXdbXnscQoDmWuhgRnv4mkHAePpgkMTnx54CNsCMSVUMi",
  "key29": "2QyUYd8nRoJHeAUYSfQpRDPAq6G6jsMK9hADZndvYoAV6RYunwiEeg5a8YL5nMQCyP192sPnh45BeacEyJpm6oVw",
  "key30": "nrrmiJGG7NfhLtk1kNdDEkWk5RJ7KxJemRgfBUVetzpfrCaW9uFaggeVqwzMb7rnT6gEHvVKUAq5AB4SFuF1Ap4",
  "key31": "PgjD75jjBcCq5kU5HAFn8ovjtVDy9k8tsiZL7UKBZ7FYK1ndyoXDSJapj6HBpiPsm7TwK2HtwbHsP6PFP5eGF2G",
  "key32": "4jY6Bcmb9rCZnsWNuAmJGxhWr1VwiodQXkhVxyqmEoyDPfAjhFKq2EDKhYC2THSVgNdPjKZFuKXPhxPBy9RAy3xy",
  "key33": "63acVA8NKPS5Z3v42E6UATm2LZk8KZTgqbYU5AJVLoj44QBpNnwRCaaL16EY5vxvDqb1Pbu7xUjokJei4Wvd3uCi",
  "key34": "2rkT56hNRWRoL2LmyAkS1W55SLyNyzwjyRYdQPwfbA3xSc2JUCb7h3bMBtMtRJoq5VdpmaJVZhq94bVn1snHjqKg",
  "key35": "5srUyaDannDg29nf23k7YB2CLDE2Ur9Hm7WmCAkCULQu21hfc5JpbnSZj9qeDWupBfXjJMWh8g7jpn6La8pzrRgM",
  "key36": "4RGNS1pPSn559KzYzYVYR6qBY6RcSgtLLgVMNmbVzoG5e9TZnSyX7inbwwwMxBpP1NKWG5m76iNaAAU9QqxMgNoh",
  "key37": "4GWorjnsFzNnvFY9JihUQdYt6yWzo1D3dK3yu4tayf6qZCWBVunRkrDqSZeyCgttUSpYAV7jYPm3MRVH3VNVjDGD",
  "key38": "sENZT94i9YomzqmSPQJJ2i2Z38Mzd7CzmYVpXNnVRjX2oaPZdXPHSTpvb2NyEQ8BMt5P1pVuByZJJtVyU7AzkE2",
  "key39": "BGaGZydQVBYT5o8Ct4wqfZLC5mXwBnn8fiwowRVnHVm1acQQc2mN7xYgZeTuZwci4JfSFw4Z2aEn1vPoTx7V6Mu",
  "key40": "3zyny1i1j8q8EP63XeFBvMWHK9U5q4y6pVB4p8nmzrfbA2EaPmoYPzwWT1NbY8pqVzFpcYqYHRBGTxk1uRRV9waR",
  "key41": "31jaUsxTvQkvppFKH8wMehvQFtD1AbpU969wPjUNr1Y1e2ZgBsz6ZLdoe4WTHfN9cMxXZu8Sze8EqfPEREVs393Z",
  "key42": "oJipJ1W14sHh6Bq1cUTHpAfrrdejQFut68U5eNTb9DeKKJWRuiRNsRqQmhCxWhz3o8FC5R2XukrgYsdwYJBfzd8"
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
