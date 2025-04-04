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
    "3aJb2NoGvzAkojqT9H8qKAHZ6WaK9FvGZVgFdsMvYVt452cDEjiaQYtgLvsUkYqAnX8Uo7dzKiXux78nfuPyhJA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SJDoPPg5XYNNq1UCZbEn7eXaTzrKSCMS2TKY2K9okpG6FaJxdzp2Y6zojEC9AsedRbYc2pDKXt5XPNz9TMTMdKm",
  "key1": "5pY1DgU9MdiBiYdqJXhJbxrV2MSSZ5LNZiaosBFuPPAg9S8KpLvijbgNy8XbMh2bxLAvooeomH8XefWdXbPPXdPq",
  "key2": "3GEXF37DyVzsEExu4VtcQdekuboA2oCXjpgSwjpVdX3FcT58212tvFMofmwyTFcwr1tuBMEFTHfG1uqjaDeyzt3x",
  "key3": "okEJqe3vqbzAWD4pc9U5ntQhMHnRyqdeksqwvix65yhyA4UoqwnwBegrxDTtPwzFE5cHpR3M9zxdnwfcbS2bQMD",
  "key4": "41Z4FDAuZYAu8dDDf8Vs7btEJ5VdB4LNFtPdahHuKh8PotHeJEWhC2LzEC7uaEps95Fz8X7zPEWS9MQWzLKoX9Bi",
  "key5": "3LDnqqzjUDofuko4iG4TMz6hCxwYBZHZ6kkBqGA2NfPnjA17Cum7yqQXBP4uup7sPNpozHAPkDm2LN2vTiYAbFob",
  "key6": "3KcS2HEkDeg5AUEFYD3MWre7DfUbQjMjzAFHN7jDTetez5mLRBFXEwdJET48PvTXqER8DMEo3xoWxh3n6oenC3Zv",
  "key7": "4V8dZx53uY6TZdhKWR4bxdWENUMoHnmDc9VpaM9XzxcEDDsbGLPMQEVHcDmcxHuWvVx6fZga1f6o5Yr5uHXQxQj",
  "key8": "3SDzkifZWDRkEsECCjTN1ZeEyPWBRVEYqg5p5ELxYbZxc9gYyYBAcxBRpynLW6JrEftkAdFhwfSY7LLxbqzxdBCH",
  "key9": "2QH3ifPk8H99vDF7N24rWD8Mvhx8zGSCecxqXwmXC7iA6b4AhK1YxLbp8bGQLhSdeaku18XJap2NDaetp2ZhBxPk",
  "key10": "255i1m7DxPni7Zkogp9odTgRJGbJa7ZLZX35VyUD1Hs7jQLCChSWuD1o9mca32RFfWmvxAo7LeTxzZnqyY51W2AY",
  "key11": "4N3CxK4wgVQVm8fV8KyjRvih2ok9RV4mVKQB2K4Zs9r1KHBEYUh9NKVJinExqaUugSfvdaZUiwqCceJhHCf2y82N",
  "key12": "mKMKPnqHwukJtqSGue9bmUypUeVfY8preD9jbz85sxX1iGoJNcXHZxhJ5aS92z2qrkug9VbzgyPn4TvaFMbE3dN",
  "key13": "2qc5z7sPepPggVsfW67hfL2RJj1PowVvA1qa8toXPtpAL79cPpLinVf4CDsdNPpmA1B5j96drm7DEPYWnRoTLE8H",
  "key14": "4aYsGwYgqQTgAvzsDhTTmVgcfsLaaWagQRny92CYYztMXCvxxqaQvA6HCdfzvcqHzjbsysRm6hb4RqapY4J5Fi4G",
  "key15": "3Jz6p6kRQusmmFo2GcWu6wR9zwQ7RZTaewWu52h9GJiLj9zsUxn1z7fQMVwEVyGMPSaT18NNvmKu6A2ZXrGsomFD",
  "key16": "xjd48twzFnBMJTBD1U5gAD85rp8uhqvvoQYonvttud3nduUU6QGYRsX2UfTf85fM3rjG7V1aQS7eteQwU4pQsug",
  "key17": "2r4DEMqDKL3AVUBmi1BGaWtv7iMXzjUxDwuYu8sqeP1SdXjawQVwKBGWiAtHPe9QakFnDQ8nKhf23UEGYCDuvBas",
  "key18": "2i85GMm7emNx5i2xnHYMvmHaUqtXCH6TnXtmKxMxpgNnsZiJnhw79MbYN2nKQYKvC66xh92ux7dqGmKswqyXwzuP",
  "key19": "3XVFJVrnBardFcBkz5gQgtjJ6ZjgY7geaFaXAnvnQv69f15SUkXbsX8AYTmcZm4owQrbH8pAPB5DED9gfjG8qJ6w",
  "key20": "eURWfeYxkApHVdbPhNhAJQZvKLVMTfdpWmWiGthLmaetyKKLcGuNGoxtqr4M6odZkvsKZYYMTWg8cTRbcv7XBoY",
  "key21": "5xXD6cBrjz2JMftjS2QopAxTXncYK53scVJDYRGDAdSNAD42VoTvN5TixVeFv2rrQUnP5RkwKgYXhobq2dGcDhZ6",
  "key22": "3jejksReg9p7AzpUC4t6XdbWDt8ncCPwhMaUFE6fJStHHWCkNksckHYXQBDkzx1o7orpywhopw5i5fh8kEfyeVkg",
  "key23": "4rCNJ5pD7bR2XSbdGxWvr1exoVMdChoQsPDmxSgoay8TJgKb8rMb91AHtornX456NZKARW3d9YC9gHmWkKssCJzR",
  "key24": "5dFEbuiGt1vSomXmMRx41TU7goeuWfU6Ra6g6GnRF6hbuZGzvdZNc51N2M13JVtdQuVhWuh5FNooPUUb8s36ecBJ",
  "key25": "4sRfr3eWVuMq6WmCC4s3FHDdrBmNhbZtbm81NERwZ6LvCqP7qENxXpsyeThzKkbb693tDgQt6HtTLqafK6QvU2mM",
  "key26": "54CVtX7LGnk5BCSh61eEtRo8oHN3JZAeWDJao6FAdbPJkhuAWu4344w2zRhDs7zVNwQ4ygBHXG4YucXt6nAXXN7b",
  "key27": "4emP95UaTrngEEoGBEDRgL6J66Rf8XKE4SBzAi1UXAWxfa2hzVA7J8nDnkRa9dFETcLdUUSfdLnfXb7Nbi1aiZj8",
  "key28": "9t5tR5bth343cjoX5h43otGigux5VbJv3heFg2rXb3TujZbkBG9KpFBQfonMSCeVQgUMxz191rAC4MKKsqNhKpC",
  "key29": "DDjPxYHViyJZwpkMwJzLnsLAv3dLcdfkCR55nqXXFcMrgUBVRz58AnDCqeUBFhJoEgMiNE1T7KAkWaZw8AVUCKh",
  "key30": "3kehvG8BkStmoh5qwCGDXNazENGkFzqJeMJ3FE6moy7itxC9nrzkBgdpsHNFUTAG3stP9wzNP8ZGxpJfpkfC5dVh",
  "key31": "2JuCsV4VhcPcWjcsRhwP9u3rTvnHbZKsCiUwpMu8qrw9n1M2A6XpmtgfEVsjXitMXasEtqr26yvG6urfNzCGEGk7",
  "key32": "2UkXmPSD1zGBX3G32LHLvdV9YMfgvdmH2iU3wwgKnmoak3Zq9pTkWAZcqHxps8vSZLAf2UZHwC5mTYmuCrPwkY3w",
  "key33": "4jZawmPntKm7uiQb82A6iZudGjfz3YEtQKwNY55stup36QkD9w2FeC4vNBZU1Lvz1H9FVdodVmZZ6GfMo2Avkb8F",
  "key34": "5T3qtfnJMZESrQy9yvV2DhMzZvkN4Saft8zrmbxPN8zAfNM9ZFpRBuPgVL9g9Q42kTdypQjJVnDPoinhHQ4Q2TrE",
  "key35": "43HmsTGFQXPxVBHxqdbP5bFcMt7Yjnvsm37zWssEjGPiQLxUm4rxCkVCEi9c1GmJe49KmrCWDEW34B7zNyfu82kK",
  "key36": "4uNFBaqia2fevgexHAw9pBKZjXnnxV8ZRhJaAmoi4QNQMy5W9rw2B22uHVAiZscThggTnVjnAo1bqwyMHD7h2hYM"
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
