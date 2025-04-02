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
    "4FM9YtCRovGA1TwurY69qNyyqLZsLkEPYDgCEpnhRHAcaGrxjXkBvHD128E8AwvctRJRBiVgC3qUSQr9jspGnYk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qtHGidKXcG94NWsNcmJBLndR4xJpHrbXaS69igA6VxKGpEJTd4ppj36ooKUG2R1VLngpLWwhJZFfoGcoZPqb5Cy",
  "key1": "3YBRV83rwEd1SuNLUSpb3QX47PjUWYDnvX5425xe8B7dk2N7Ef6ibyT6U8NKSeMZ3ACNsWwniZKpqh6wqYvzHgY1",
  "key2": "ZDHtoaaPBasRk6DGWd3YL6Umw8shBjDAczCiDPNLLxcA5DcYsiqSB31QtwUzZpagaFk3HHmWNA2nananGdcVU3B",
  "key3": "anHG8uDSAuXx5HEDg1bqfD5QaqExipVxGHUS1AWECnALe2r5zMnFbsTLugpYZnb952bQCqwavZsk3kspps61RbK",
  "key4": "5L3D5fRH41kbeq421xjvsGbaKLVJRXV7GZFK2d6CPbGTpzTT3DUZHj8EiGoaemvUz3u5hrC7VDyLRWa2xuu7Fmwe",
  "key5": "TseTfYVjQJGZ1rzA5VwtPjDepFE88HXLYWdA1r5YbguCWNBqZRobkCmcJLXRYth4a7TQbNipZKjZxZEHuDhfXas",
  "key6": "bZLWdGWDbMyEuAsy7VNUrYGZKNGY1FFQNm24K126LTkVMCsxBPxTHiYXrQPGcRpjkV8RCijuUBeMXXpp2DLo7ar",
  "key7": "5FSJhULZtQxZSJT3rzBxGTeEm1Y57Vyv1rdi58FpZg2Ug9LaQEiFmw6wRscteAtivV2LQ2Ni3rjcDEdE1sBJiEVc",
  "key8": "3ZWQPyeqtMzTxZDahhNfWfhBJUGsSyiSuEsx9uz9u4tARVBNE22UPaXG2djDf1xLeW53LV5v2U7QMCCSUrJPpa6x",
  "key9": "RaiERQBmQTY8tgqxK9MerLW4m3tmhLtu9JUiidraK1EYNPaVQfKbBXH66w21CpuLrPjhgbJdepWcTjP315nsmUn",
  "key10": "3xuSMefZfZXagbjX6bZ1EYuYYwwEYp2F2UnfJCthCkB53TuTzqpVjgAHuK5gCXqnsHTWBGHBLKsqNtHaWA7TsThW",
  "key11": "3PwaHkvZZUGiHHkSt4WkRj4Zc3j4dc2jKrebKhZbBZvBKDaH98cGv5yrbNojVWpKHsdR35hKbLX5RdJEi9ifNScr",
  "key12": "29L9Qm2RzQCKaCfZNxdinwfyf4iLgfnj7Yy9ngsv3s2vHuqVbGEnS7Qde5BwJP2MXK2BrXHUPSj5yYr4ky77WkU8",
  "key13": "5VgnRvbdVzzNDKrTeBKUencLW9sf6nMYBdno5DYskGHsc6RJRkqMhqe3E7zbzprhEp27BmbTVKyGqgA42LA3eLLF",
  "key14": "3CqAF1cBgi9vDkGsNY8ovmJTHY1dDkFxjSJ3iWWoXjgUndxbDKfJuhmKRRZs1cmi8t6mD1r6FucsxYPEh9CDA9ao",
  "key15": "48E1a64hXKyTLnYrmkpJo9ufJ7wDcGgSQSxRKroaFkfU2RaSUYFpvcT7xpRba7SMr2JFpz8xYqmg8GZ6PktULotd",
  "key16": "3hgacdXLPBvzCijakwsYmojwYZekEyrCfSnnZdytMpx8gtVgprwVNJGo1iXJ6nL1F4XWdLQ7y7C46AzuEHszEgKS",
  "key17": "3Gejmsio9VeoSsu7d1W8BxqcSK1vnfHDyhAsgi98RpRDyqE1ynmfB7cQ73v6dmbj3Vcx77Ej4T2MyTjTiGsCM5Z6",
  "key18": "3ycHt8BbGxb11wJqi7xvSMyrV5U6aWSh3WAfycv1YPo4HUWfSpgEiyhi1RbqkuT5XLZNR8KEk2pabPGt2t58qrH4",
  "key19": "izh4FThSDWgzCQtfKHzxHwwsMcFBE3rE48s8ptwQtC3GXZpSeA32sEq61Z4KPnABo2pYTnNukNr9sSnXyFX2YK8",
  "key20": "Sjij97ik7FEuUF9kky11xfp1WnM9XN3mb6xBkHeKVDFqQPwjSmfQHDHRBzizRzAmFXCaT8PF91HCsTXvzsxtR9M",
  "key21": "5FJ4RacTe8hE73wUGkp6fXJWWbGhYSderv6kTtsN2gogexbkMEBLdKyhLzVqApmCULBj6FDY2fZAJGZeJiRLLAn3",
  "key22": "2urQbKtzbGfNeEBh76wJKv5wETPEsqwfxmj5caoBYgufbjQXXan6D7pGJKHoH73VxsskgGUDTa2R6yNPcCAUmSk7",
  "key23": "5NpGQuJJjUTWU9GccbXfpHoT9EhBUgeLMF8MkNtyg9c24YSRNq9dQGqaNUWFKmkoZFs77p7f6njLFuNRhpuHvP9p",
  "key24": "rsTHWaedvjoE4SCZRqx27ghTd59wexuhsxCZFx9jDgAjqLpo4PcKTH6udFSCHHCX6PVGxi7ZMDmcsVz8P9cpjKo",
  "key25": "KZYq43qAmdVzaKpHGa25Ryr4vtYgVPkXXaXXLAwvPjPg7gDvUyT7uZedxRxYX8Bf2kSM4iQqnaQX45GcwwVxDjg",
  "key26": "4hLRZMuS8vDNBk4tbQ16FyeVW1BHk2kGcjsjNARb4nij3ayEoUUzVgYUbtLFmN47botcaGXKN3VNHmYCPvi47R2c",
  "key27": "24g8E1m26MTq64H4coNUxbFRxRTFG3jnxTTG5nRVjuKwjGrVpwbVZ8d8cHV2mNEMXjvAM2buE9zVD4RBprFVDdsm",
  "key28": "2U3wqVdTCZhynF2L1v5jjLQcWqa6rMTJ7Xjyv1fgWh9y4DmAm3H4sY1qUxyCQj4vzJsp2nvJrGATXa1Jjb2EeNRT",
  "key29": "2nPb9LdkgDGdTHc1VEZwbzFeGJo5VGvUqUyy2GqbMRbyR3MK3SZmHAj3g1QVBh1QSWGs8MuV29tNrN3WwsBzzvUP",
  "key30": "4VkiZJ9eAnJMzXL9ygXW2TrgQgPV4PwEZZr9z3KsqbNaZ5apzL5vZEALn6pFrVZu2NcRZAQ75n72SXPzr3XEq56L",
  "key31": "5GqxDJtvFvGPZ9PgTT6xSEnqRy9KejvZg83jVtTUPtWzG9SD1WqsfJzhwDqeCLENaj52tHNW1nrsZ68tChGB8fB7",
  "key32": "hyFDYhTg8XPjYV8YTv7CzT2ZME4XjjHQ6DkYFJT1YZcHVFFxjYKRxYFtMwh1EY4ZzsSRy8DcYFSEvZoFsTvJPNJ",
  "key33": "59Qq2tapcD8ChP6aGtKXjPJndx93HeRhaXnjvr7p2vHtKBysgLcwf6C1b4yHjbcHs4Y9rMTwvoQmxyb7uRBk1duF",
  "key34": "3XEohLQoXyQNZizFvzvGDjve4fghNXiBTuESXvBb2JkpadwvS45nhh4a26WrvfYiu4LAUVb2YDK4KXRSvuyVjx75",
  "key35": "5cQ2XLG8k5C745XbQQ7FesPbdTLvJh1CMoMaVzkk7YBcgbErGr5GEWyF1r9oLrCGWjGzv9cdFuKA3PLGD23FDuuo",
  "key36": "33dTTWLxFRojp7Uqh6MxXS3E3WZC9NMqpc4RRJxhXnkCzCMu8cYkeLhPQLgQ9Fpd3XKoYHQZRQ3aEv3SNWS5SAgB",
  "key37": "33AnSfgqguZuq7CXhjJwdxv2pnoL9Dr6ErRewUpE1BWzdmsaVjdGjWwpCECRP6NzuC6WvWAZSHParxyRkjG7yVDh",
  "key38": "6X2HxqfdoccTVvjnYuCQp4TvLvUadJSCdBsyMWGaCvgomeFhRwXquN5YU471GWsd22yXxNAGUGibhSR7zas9QYJ",
  "key39": "2QWNJNacDVhUM16KaS5g5Qykp2rpTjiMxGTk8RhwG1uLc5yfasLFVRGECoyF89AgrmM7Ta2oee6nTe8DH1r8EqQE",
  "key40": "34oiWcsgZeW9y4esVmsBtNPK3PL194wXChLpBc4CvkDcsf6iebma43Bca3GupdKXHD7xpBVyMJbjeZooj6Nm2exj",
  "key41": "nKUF9yqJrcy2ED1LfPgJhxW9KXgV4SqDCHPAYcS6ad3PLGGcuQwgWyGDp5FCc3nFc8iEt533MRYyzcREvWhoW3c",
  "key42": "5Ci8kEF8zGtppb2JKuzCqirU7CscftFJ6XoVDCJsvm4WbScdUW9MPaHfE4aXq4CzXvPtu6eJgupK2CejJt5ft5Uz",
  "key43": "XWsA1ESgYGWFkQgBoCi8xY9T4T4c9Hh4ZhaQicXxoVjPHuqS19CUDTC6NtA9TZ2MnvisvR8ryhnJDcsbB4CfRTc",
  "key44": "2gdYDDMzYTuJVVhT4yoiZnApBSB9PfM4Tkj6zrAB3B4mnByHJ8PgNw4J7s5nMhaqgj6qze88egTKbraS4Pq9n8J9",
  "key45": "2gCZSKjwYr7b42nzqG5wsTUfVGX22TLQdHse5En22dz5msmHN6idyYDoVGbBnC1SKQ4mdMbKAtCLvwiVGrJR6cqH",
  "key46": "3d67S5YnywZZDonCXQBbsN1TsyhAR3e2HimTAxQuLHKaG3mQ7eiCYqqGA2mvy3AMFQkE6DNG2yPEvKMV7bbBgkwm",
  "key47": "2XkUGPs29KeVgPAT34h52YAFTQ9tyVqY9A9LUZ9tBHNkKXRnw4jY6d8rQBx4imrnGbQPTRcouiCoJXYsWZRVxV4w",
  "key48": "5bNbA98ZFckGmxHsSWtkfij3iBxuaJybCcFdAuZWr9moxkJEzmogTNxDFxfZWeYjRYzM1dTcxMG9TXEBD9JG6sGL",
  "key49": "4gBVynC7ToQHmqDxkJocM4BWSmJtkDMaXG8FkCua7M2qJ2bBK3GjQ26fGM8M6y4uKPgH7iyC6RMyoAtgAZWQYDAR"
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
