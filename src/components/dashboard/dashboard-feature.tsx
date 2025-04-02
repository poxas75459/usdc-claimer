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
    "2DgTZp9kqR7d7oY71XEsNUH8Ho9bQDfgrj5w5JHnfxaRTe689fpYo1wxUVC8TQ9BSSj6R1mFyAFN7BbRmyoz6pxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ijs4G4p1rmS2uBarCQ8UeZYJTgMNUsPak8ViDgzVrtBurv9yxqb41qVaW3u8pq2mwtGFA7Srd2FjXExhYrFQ2zE",
  "key1": "e9ghyvuPFFVqZavEc9A6wXpMstEtA9j93eLj1C59GJzUQL1JNPyiBzLZEq5ioYnFnbP9284dt43xqSAK33ozz2n",
  "key2": "nEKp3EkuqjNkeztKRJR53fJdVPYqmnFSAoyTTrv87GFC8ivbK7Dt4bo4VYFkCe8KDWjhbeBNu1rnFx1Xq3XVyrp",
  "key3": "5bRcPT6NhJCgHtnFGkddVBkFkYf6QqXYpRJfYbdGM7F1ccHZQMqHfV2jE54dpdwbgchADCfMBMCjmdF41yy2stgy",
  "key4": "3ZJFRJ4EKEmobSKdjENbCcMj8Mo3L6hChMNQmnZpXkfdkj9yF9thLzXLcqhVy352soFWyRvyT72RKw2ePJPxfQ8p",
  "key5": "4e1kYS1gjBypfzDfyYHCHfaGukMF5qpj6jiwk4vqP8db6Cj7oLzV5ctBN8ur6i7yY4bVd4hZssYkn2DqDwCpWYb",
  "key6": "3FiCZAqVBnoCcyBYujYZddk1ns8RMKgcpzvjj5SmoQQHtvvgAi12E7wGapdUD8Eypx4YSxJkTqodxrGe87VJG88B",
  "key7": "5GWbbyxda6SR8D2D6rzHE5y656Rkod4YGuNRZyCwkpn43fYGTNroEE9Yx2iUGkMgPcXhoxeezN1LoPmPJQifuU5d",
  "key8": "3S5WWA9Y6mSdfrjWSeZUQPFFoCX5hQriePEuhZYptrWRV5pUz2fdbdukWnh4ewxFm7K1A3AbYZzXT4naSZKYUTet",
  "key9": "oY9a758MtMehL1pVjYM5dwW3daZ9AmXxUHMARZ8UnY7Vd4WBDVFLVLYgWxWkmoswK1sprw7eKrhcXw3yGHp1V8C",
  "key10": "EJNrAs7w13i6w1Ev6X53BxhWtYkRHXCBuv39iUMCSmESTst83t4LUiTS5YQXErjocm2w6YFXAxVfC9b3vS9L9EE",
  "key11": "53fLC3ayhD9g1n3qGWiBrjA9jcPVPnC1U5xvYqE5bziebcDM4HdP82R35PVMQaspXJnhqCuWY916uWaajJByGRsz",
  "key12": "BYsN1z2xunABksahbwUEa3JTV8BynHQ5Bto6r6wdpuJE6njCaMM6R2aTaxw1mmvPXukuRQNd7pmT2dzVDPQjixW",
  "key13": "5jnmdvRRyQrT8jTAXagyf5MMqv9hsab3kgjATBAZjRdRftcs1GGhWmLn59JXCSAiAbJHcg6dPoUR444M9JLQ5Req",
  "key14": "4g1o24cBqQZSQ81aMUAyCeLoh2guJjcWmwnKqM4XwxaLM2EeDCkwNbnGtQEKneSb9bdHtjQ2PYLXY1ftj93tu85R",
  "key15": "5zS2ZRdBbd1xkb2hqUhx7LR4qor7wdBkx546YF4NUPiJ5ju8WmVAbqG5J9oi9aPX1mT6vkLTc97VhqARvhgQsEyN",
  "key16": "5ovbMrHgs34DCDrx8ikRM8Jp4SV22QXwdg6vRTjptwAebUPMuzkthrDmZrGM97Bb86qoFuqLFVgfj61CAGa4jqtn",
  "key17": "27rXRjTcoe8uh4bhLzUqbQgn1PE6bkkFtEFE8XnmM3JJrNsd6Dah9WvQFm38XH7W9kZojotaE6qFrjThVABsZdoe",
  "key18": "HGcwgLDq89fxwgyCWnPLfnbG3mXWho9jVWta7T9t2C9rqBpLRsH4oGhtHMp3W77MKzg12UHaA3TjQ5wXwq8ZUv5",
  "key19": "5Ci69kTKTmzFLR7vx79sLKvL1JFxQ63KZSCnN3oz9x7wCSRPz2trWwJTrhRGtJPKvXv5HiUyA5ujc5rxLgaFqsw3",
  "key20": "3CezLNf6YV2AqsPD9tz5GE1bpbaaydGsBdcucuY57qa62yrFzjmruCaxhaGWpPTvyCpRTfuuJ8PuCzXPoVGS84gF",
  "key21": "2hCM7LSKjeNBXs3itZ1mYunptvrdWhGaPSUUUYdzrDY6Qd7P6sK3g3TDHhUMynzbMJPxqbjG3aC5t7rZ1a2TjJWJ",
  "key22": "39TbZBHbHgwbpUR5xTnyGjicuJkE722MXGC73iFFe9M2PkYE1ZUCakVaxhc6zqSrhQw8ouYXSgGdFRD6UNDpVbEt",
  "key23": "5MCBzB2UNESMGG4d1g3sNk4GR1XnPzUhG7Je2QYRjTiqTbaJ6jSTYk6Sw6mT1rybMKbBqRiAGXSfLBjB3C2pZrxU",
  "key24": "2mywuqT8DFgCcoQYuiRXgAxahSdVNv3LtdTaxgvz4yAnEfUTjhPpZyAzhgAQ5HuMn8hUn4vSLVZ62A7WtiAh2wpo",
  "key25": "4ryzURNXQpdGXSgpqWSKjq54eBgknJJ4bWxMqY5geVaDzpJQsP5GTxoeCmWrR51oZPaWcZmJgreLEc8Krq8KBEzp",
  "key26": "2vddPLvtirB35dDuKRo3FFK4hbRa2iG4NFtyKLcGYwssQQoKncK1F9EsBSsdNNW744p9ChmUeCn36o2sfo38DGms",
  "key27": "5iYyDzWAh3iWmhjPo9iSyJGJDDTXftFiSTWsPQ7KPeGdskRMBNx7NNmk8E68wk8m69Gg2trr8oif9qPe6m18AgBY",
  "key28": "3gwVtTrB4t5Bg9itiTP8hWKQVWiPpeg9f9FdqKEege27cQ5rTMU8rnSJhT1dP5jFnonF24rn2Paef3jb4sdeukEs",
  "key29": "4oSMdmcjpZXpjY4474bB7fFcuZkb79raXPzCzhUizy4bcddhEBuFfejsZGbFdFuG6KxPWfnGZpS7BhSva1Qe12zA",
  "key30": "3vaq6qrT8QVgGu7hoZhh5kHKJY2QCYUhTUr8uxqnvKp1cUehcA5DT1R6VYRH4rwgoEA978DnWm79cNJ1BS5DbEBN",
  "key31": "zZ6ipqLAr1rg8pSke3z2dTnkP5oFzCQjpeMvxzCEpJuaAK62rPdZwy9xMpMNtDXzTnU1mrGz5cxGCDg2o4hLDnV",
  "key32": "66s3GMViXuse1WjjoANXiusVBbB27SSvaG6J1Mjhh4QRe37uAPN3pPobWLNv1bua5GRRXi8BWXdbbU7qmebtgi3Y",
  "key33": "4jbrwugGrpt3nmqJTsTY3vtEu8VdpXPNKTwgaCsPzuMHD66EfT9P3HaPbZ6oWg15kin198f34xjBqHNU9dmDetHa",
  "key34": "61UUfHKLY53vsU3QcpTncDkQdJwxHYoJzcN2KWDS3hSj4U5oZpcp6gpjbX7Jn1Gr7WhPiwUGmqNAdx4eEN5eimRV",
  "key35": "4Kuob44UtpdVZ6kP4RAfozz8qgyZtebZL8akM4rUpesqajdp3F4J4hFKSh4xFKwWoyNnAf5xEuetHoRkGw4FR7N3",
  "key36": "5mc1768y2a3EG5YMfVZHt3RtQ3xz9mNNLLppfHNRT4KX5qXSWkSBQw5ocLTro7UtNysWidbK2JW28kBAWEJdY4dj",
  "key37": "3PAE5xJrXQj4r56RjY3D12gKVCYCTjrdkY9wUkRLLuRfNzZcwaZhwFheRwQghkogi76AxXHrh1AN1scZUAsms65q",
  "key38": "4r3CxvAG8Gx9KEzxMexfjdzrYFwHeVSTwUyvkrntzqMDq1h2UTaYeS3tXAHYRKbiAivzeDWckWh9zEshCPqn3Dj6",
  "key39": "3euDGfkSDrkoG8Szg1TpHbAhjCDEq69ZFGUHgXMA7uxNzsjm41vxM9rfhTW45SDNX4cxZFvfFyWUmxfJRmQNdkij",
  "key40": "5efeXTL77AZi1evyc8qyzbJUhBUj1vMVSWhfTaQveqJ1YKCK3UHu1TYKKkrJ8UECojSzcVZ3wQiyDsUHkL1rVyX8"
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
