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
    "32UsVdyqbFartT2nzcoyyDkXCusqHDHrZKz66eftTny9Cah5JaJr4NcukTXfhkEgqNWR4QAA3HXWc2CroeGCuQ3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7KYteRSLHdiB6CXufcsaKwHbbAVfanEfL52TSkED1d3cX7aKueAmrQ5wv2L7LJ4XJTTjEFxagctj4HxjVadAwgP",
  "key1": "2X6hE9yHfQWb3P5LvVgFPUUMutDMUhff1sNDnTeTy5mkRrrgpuNETMzTYg4FPYjMj9b3z25CivchzGrn68bJTWVS",
  "key2": "3xM7WUJNkNTn8FQdNZGjsBL2mjtVHgwMqfDmuP84dQd3aNiSKv1TerPmDPZNFujvxUon1quzAgif4ZhH6J8as3KF",
  "key3": "UW3varMR8wPWEjHFHxp1QkxUBeXh98d5qf2ZhG2ZEcnpYN2Cp9aq39kYQ6BghgBGRHxAiJD4TK69A35zKfZnC7Y",
  "key4": "3MBuqWJjETk56NpsTzKB6gZxGPe1pfgbxBouHynnMHvP4PppexaYdjncXLSurqD6QafWcL3ZopzCTbzBZdB2P8ei",
  "key5": "3NLYw83n9cDuH8pmNUcBomwyDLQacLcT2UNa2G4AkdT86xvhykuKPx1V4HZ7u6XdGwPNwqHfDsaoKqY2mPATpqDR",
  "key6": "4cV6ZKAYcUNJV4xCcMVp2j9ZM3Vjy4NNPRwhiAJQ5gUVTJqEY4gTAFMaWSpdSUUmgFM3QbLH84XbEDBozcpm8FTv",
  "key7": "4UyU8F8kbhfgBLp6WHoL7wj7zH6jVibLYoYy6CEZruN5QqqZA3jhusRorGNjRZNkM4VzGAeR4wsdsaUjb2aHJ6ok",
  "key8": "4S4J9rq5R61ckicBNS4XnUeFUdzDkZ8aQyVtGS1wnnLps81PUsho6UvYBJH2mC1AibWDFny7uwyutQwbprPHLpG4",
  "key9": "2JBvyRRrmFUc3sPEtKSUzDDQnoBzZ1vvaLBKG3SugcckSx8Y59RRpb296NfGsT4KTzG23BtDoHQ3RCqd7dkfUoTY",
  "key10": "MDVwyyjxWpZPfhrspXMXszzQzr2q2DeWjTrhbpf4SvuHcHRUNtDswqrVu7qxHzcVZewhc3211m59uxC8ft52fxh",
  "key11": "2n94Lps8W3nhocd5og3GVsXuaobjKVuz4H9zzpGZiYQ2GSWxvfwt1K7cx1GopsP64MCow4XR1GzdHL9gToarv5MP",
  "key12": "5DMuxeW3nUU2oL1VGy7FWHZt5iFETeBn5B75QbCmaDinRADazQFnTFqWC6pyr9sohzn42hAS75xx4G1xEWfvxwez",
  "key13": "3GziFh2YcEuExqy3dDkzw8eXLPhmA5zLbxP7iVKN38Mz6mk3AiuFywpD8pzvSkzQwtYcC1GW1PmfPVaGs5tidANL",
  "key14": "65ZVy7jEbpanjz5fCb1gX6tEBPQK23KV73Kpzx4R8nk6auWNG4f94tGrXyzKPXCwb14BoTc9h78QBkwbKZwxxVcb",
  "key15": "TbYzsqs2HQ8KrtcbS8Y3vpqeQxTCpbSxuNwr4tpvkFmPeowLs5EggmfZ2xS33n2sDseE9z2nDXEsWX5djLWtiDs",
  "key16": "BkpLrvLcHWyDQ16XhJYr7Ha6GW3gFbSEkuaauFey1eVtry73nqjQcbPGMdn8inHUKM3eQ7ymH3fmDszsUqY2Tu1",
  "key17": "5sZZWxdNLGCu9UkFBhQYKsNppmcMGaLEjA8mTM7fdSfid8rH7jHG8pZ1sby86ZTcALnb7BLcgDNyCSi7xwmPfvmw",
  "key18": "5RGfBWp2Z8vJMFdw5EnV5Fbrfbnj5h2g9bSd7ZUSj95ezrd4w3sK2E3S8DkV716D9Cfn4K4iFfgzCQCYSvjfrR6d",
  "key19": "4FZvcvkpZUuLHhWPLRVdPXCex4aQFUe8XryJsj5jfHDvPk4nonRnrpVRGca2uEBZoePoVsemzFeDTuMCV9hHXGZM",
  "key20": "oeAGJcyD5a1oVD6XJ762jAaRTj8xty8inGV5ouGMMVGhAw4uHdpT55iwtsF7WnJDiMnH8a1sby4SKHUhrk9svPT",
  "key21": "3o4DyvMeefgcYcaj1cbfGJb8r9vkDnnX6joSRR49C3nZGx1zPV1SEQux7tuTtk8VigYXiHThSqxMQPgSZsp3Un3s",
  "key22": "4fCe8D1sPrqbjNq9xbojQeMuqa98PsHeZFgP7yztQpTJNuNeUnvpFpHRZnETsvzgMR9FsnEZTC3SAvVizm6veb5V",
  "key23": "5hSKqoZd4GdwFRiRtCFJLA4Ns8qtiQKhNvoWvcvgA3wtkZkKkzezAx5VhehUz5xLJmePi6dpQMgzfnDcmBDjmsxk",
  "key24": "3rZmYLmuVy3FinEbbVXUs65xbxgK66szPqgP61iwfRk3vqS8KTmBvDkzJoukZjkcBnDkVMXMAMa77X6F9TL4QabR",
  "key25": "5kbF34VfQDG1AaSE8uWCiyvQwptGbmfhGwozp2znvFvaxrrrXKerogvTDV2jE6pyCmjktV8mrHWusqKt2b8JGd8A",
  "key26": "3jznvvX6QaUYgVE2FLdd6rqQT6cupYYJ1rQM5B6UDNaGdKEBddRnA9pMwKJ6GT8gLAE4RHPCW5bFrAfsJTsSjKLs",
  "key27": "3DmHfUwyA1ozSQt9KTS8x44qoQkwKjzRqJaMEN3Dfiip6gbrDndm2HbDNznNcbH4D1uUgNrFFKHxi2tUW8XbLp3u",
  "key28": "48bsRg3zMkutj4FkcMu77Zpiz1gsLQcwGbyRA7tmZMTR9Lg9o5Nbkj99qPmpjLdEUeo5kwomCo5uftdDReQXcadb",
  "key29": "5eVFXTFcT5LTcKnT51AKLaFuF251duvw648XGnMS1kWPx6CuLCFnCk7AVN5r3K2eH5Vxig4QPzkr4F9r5rjJdK3h",
  "key30": "9cnBC7R6SxwYchMYnPKjNtGs6DktXNvnPSisG2HFH3tL8F9DtbBypm361qYAknh1cZNbCQuQjtzYB1ncB9wrBz7",
  "key31": "5X3ccCku2pabBNLqVY4AGGzccSjGArKP1mBELBuHds5LXbCHuMkL2jZC5Lms8WwQWn6X9cpuD8TA7Lp1cgv8S2Lk",
  "key32": "A64Lszaohyf9EaGx75HErZs2EjiFarr3behHmL9yarCCmkFF1uFUHwnrxY8fJpDHuRNKQ1G2tVqAE9Cnxhbre1p",
  "key33": "3eXeKJtePv8bjjKC6AexzFrzCftAWmGiiZG8CQN1HBwYHNf1hsLbYwNc4FYNAoSKAf1Qy3DeZfoQnKNPWaHbc4JN",
  "key34": "5ttF2SzQYAVF9Qbirs7iFNvvD7kYKjTu7PbyJq5X597mKSMjKS8t2eu1US4jh8oZpELix1T222tubvgo4FZdQ36B",
  "key35": "5oeSvdN2Cae7MS4Vq8BqHw3ysQXvNM78YTJJVusoRQTEzEQnpQCEkBxqoZJbL9Y62MhVT3qNbA6PG4W9DMTDFEzB",
  "key36": "5TJeV57vnxNupFcf1e6t2UzfysxEfZpyi2tnrqXwP9YkR1DJM9f9vQBEtAwQ2WqNtoRKukeXgyz1B8T549ADmhnF",
  "key37": "3oFgUYq5jfq8ueh6PCFL6HczLHd8BW5EhiKp7sqhBTsT9LeCarcAxCFPiATfhNNrF7acrvkAW84w7gRDB3uonDbp",
  "key38": "5vvQtCpnhZC6TsMw75xw4u72WNmnpio2zhdcj3dWZAAzU3ygFEpuMm1xeUQuFnaijkaeYCdp4C3u7YSLg48HS17M",
  "key39": "2a1VkehP56mzYKXPq2AyZ46sN318jghEXvVPzvuXd6KxfahL96DSUB33c179BtAbGAErjpuu1BwrTVoiAZkbKagr",
  "key40": "eDhYnJwx5SHsBxiZ5WTHhQAeS4wzUKAr75N8aFuruJcpodNiGfYjfrHWCSYSpb2M7MLykch8tvkxTu6umL4xrZQ",
  "key41": "27omt5CrUg1X9gfKZ3J6NArGpxCWAwGt4nsWvXLi9synKiLJfq6XGYWMPpaQCVt6azv2gmXa5zPk1jggAXMEL1KB",
  "key42": "3SrjYrHvbLXm1Su8mcRZMSotrsSxt5cv1ZEpUh9EoLW7t3LBRWP58GHgyzAjqamqxxHS4s5tZXBarKkpJb96igth"
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
