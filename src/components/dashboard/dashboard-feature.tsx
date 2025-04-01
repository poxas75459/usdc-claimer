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
    "2WUmEqiUpqgabkiXjA6kd2eGEeyKEJHEpNDTh73HMEa5R6hNLHhT5peQ91fvgRUngPZ4TeKepEJufSSjm6fK9EL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MBh3wVJkwwoyJMkXVL6cfijksTSUfYnd6RJDGvr6BrdeRyyZo2KLUAff7hMFnephXJV99ZRTwUJMF6cXr5kHSnt",
  "key1": "5rkpsnBBKuDcmym3u5JwLQuNWnMZWwVSUhybvTBJDdTc3htv5NiKfRBb1zyLaiBPX1475K2yhyYhprj1e1ohb7tx",
  "key2": "24qgszrau4bHzjUyPiiFKmHvnz7kPoH1WQr8CVXXFr91SZdCNDuBkq5gT4SQmWiZAzqufsLAX7yRRTd9CnJGwd9V",
  "key3": "43uyihMNUF1qKQ7ZjgvtWjv95kAuTAEwybLNVTG571hwMvRucFC6CZWS91AfxodJmZWiQDavBX9gGLpcYJs2egxU",
  "key4": "2fcThAkJ2kmFJxtARpgWWv4ufSp6CpBZnUoSKPTwrHmU28KvNfceEGkkR6d6NFjxJQW9BeZzH1V24trNs8FLVzsv",
  "key5": "2bZ9Tai15ka8KYGPGLEKffKKsbjbHXsS8WSStx5F7HGciPjtyivbR65TKEh5C3C6mtfQ8CKrs8SBG3nZgMUvpLeS",
  "key6": "jKAf6i3GhtCriyEx1NBeqYL6UCiUdHW2sC3QDu3rk3hTnC277XUWQ14intwL8mNSUtLXhnubfqMFxpRJnER2kHe",
  "key7": "29dHo5AMtz6BWZhoPHLHzqD54hRPZ91wc7zqrK7HoyRYekizq1GKRU28y7RpEmiF8RxbpaNTqUy2wdW5Eu93MMXW",
  "key8": "2sSyo3Kqy3Ha6owGV2Ss8hCsKiG84uUGtVRqFKRcSjgg7oiTBN5ej5feX9yLgKW3GikXGo1mRaouuSRUSzaAkE4B",
  "key9": "bTms1a5KesWcAuFVqnRDsjdSHR6DeEwGgciGoRw83Sgk2R9bfze3gvEwEDVr6g9tpUfM3NUVZMfVLUVnGNJ6max",
  "key10": "4hUZ3kzY2Lr3wsVeNDHb221oq4eyF4yZpxr6wgc7Y3pM9wL9mYN22EuB7hY22veYpWJFBCgWLQRKnHuwZxA3fYjj",
  "key11": "UammpPLzdgbvMLevvuEsXnb6PTQHZtvn1hjAB1ve9j2bvQixoPpZyvAQ9Dpv88PY5eKAds9Z4pQrcxQWxhWTdhM",
  "key12": "2MfSVemYVLuarEcDMowyPG7HAwXQ6CubWkQibwDxXPbnr5ZASAwDGR5Tt2SH95ikVjyhoCf7KoKuWTPkjYDdUvew",
  "key13": "5UVB5uwFWSucMuw1LMbzAC4buAm2QAm6L3bdFZnKubYXLJJ14UyYyMf7N6uCqchdTGaPW6YmE4wUCb32kAut6xL3",
  "key14": "5TyUgHZ65bDov4hdTEFLWV4DcgkJugFHCbM6CSFvsKWQRD38x464b48KMJRVMCVyCyqbmCNGPcUKsPVxLdW4W5Ms",
  "key15": "4NaUirTJ3AzQQxAVz8gFbhdZixaFs8RYZ1gzK2ZrHdXgRwngJcaZVtiqaKWub92GTbJyfgNnEH69WrXUX9MGpxmP",
  "key16": "41MMS3xQGTuwqoRoHXqhUhWsn4GWSLe3EyovA6yNCHUbPH3MG59u6QAfwJgstTgePLZqyVLBdMbjYLY1wpLx7C1A",
  "key17": "5w544uB4ZE1GxbhTvAWrEpa2wYAQSEsu9eT6J1JR44Ya2KXmX7yEWokPf6P7J8trFZqyC189qyDmE1xbscFpYr6N",
  "key18": "3bWXeSqYePfUNJWBq5Q77mEGU12Q39n5ZzfAgWR4ink3U5gSAxzbLiXrY3bAiZyV2GLbM7UsZZCAFWRkGR1H2tvk",
  "key19": "3MkAsGk6HiAisZH8NDvz7onV8hfCCAdoANo16huepgdJKewjDKvMck4tscVjKRS3LWBp9F1XsrGdAWvf2PN5YryL",
  "key20": "212L4D8zg64vcGLe1ReZBuyTPZE6584r1axpPMegzReXnEMhYzGUhDNQZ9VjNWesstXiEDsL5guzcR9bxb3Cm4D6",
  "key21": "483SZhvdf6LJNMRnVgqkzHwubpWJq4YGv3kyQHSp9p5cofh11caEyRjNGeEK2GoqXbSsAJVGfbwAZ5JTvURp1MQf",
  "key22": "58ezBUkFFc6E7aT8hNtHAZNEJBo7Hs4k3Q2rrfiH23auTWCjUFiKdJBEB1pRaKuAdVEPUt81uXmPxgoSCQdv5R6t",
  "key23": "FwWCj9tVKNJYbGHN2CFvhYPpFqJdSLiy35CRCsyiGrmm4y2qV9YCeHHiWG9fbshhysiq4u2r1bytGbiE6wbwAhZ",
  "key24": "3qnMqmiP664z7yRiXJeGfLDn8V6akSUbuFTYtZRbWbT7oYUqq1EJcLC8XrCZGdQcQRFpdfcv7HMCnCnyWdDUnFiN",
  "key25": "4yfQC43dA5BgLQV68xhcNy4gXz6yp4LsypozBF6eafsiF5UkjPQiuUtXujw3gV6BKXMNucy5J2VHhMinzxCzDhJG",
  "key26": "38UFmRAe3agjoXkQDqbipHpzUMPACwWifuk89HthQNrVBQXKfJQmnZCY17iVvvkQhMcperPZteAg7fPpYnBCjCdE",
  "key27": "3ZNR17fvVi9EMP8Sfd6Y2wpciJRr5JU9fLRXy6YACZhiL3bTQjJMhswELze8QRecHvag8p8HL7kimTUFLgf3BvA5",
  "key28": "4xiWz7Xc4QfThkEpJwBaKWjFegf6JJ9tpBwJGYXTNTUfM3YtbkyjAaZs8ajqtXr9qM96v32zDkpaWENUM54YMhVU",
  "key29": "4LeGD5xNENFLHioXDxQYpjjevtjyWoKNs7MAu6TZ43RqNk9afB2KYY2GG79GAFJ4QGUcPRkDXTGFG75zkkWToXS2",
  "key30": "4fNd3cwQqnpM6V5PaHvEduknkinw1eoVYdQuANZLLQBSRFiCD4qg9LRof1PrFsg919zGJoj4yi2Rq6wBBPuRB9sJ",
  "key31": "3vBUD11PKAgGpyURJo8ion4sAg87CoAFHP8a67nSAT3nC2X1VBLXmKe7Avgr7PWxVmHwN6zCbBvpikcWxXqKujuW",
  "key32": "5S7zrrCTRkeYJweVJM6c7AEjs85eNKsaZiC3exeVqGwU9uZLHtYNWsmiyKydB285U5ZA2naV55rMxWh6fzkvxxMY",
  "key33": "2XDJWnBEpKgex7NqGu42TRTxnUkUbuLX6sKCZ9akeJD2VxvS7Hd8sZU5HYrtRG8PbpqjNWMugG89t7vNmAWsR2X2",
  "key34": "678BviepCSgxfkEiU7nVYoTjgKBR8mAQHfUcVMeC8132tpqg15Xr7oMsW4QpdyEyZtcRN8sz1mq9xHx4rwM2RDpY",
  "key35": "HvdzDXcthUJnqGjtw2YenzVahuJR9vnMBu272WUiryyuGuR6Tuk28pzzBVpP2fCR3yQksjFNeT8YoHko8ahwXQ7",
  "key36": "44thHTibUipCdVtHG2bygVq9oKK4CpN7yyttrNYHj1geBUKQ6BrHeykDdS8t1cK7HnoPGbd6mA99pX3wp8FxsyvM"
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
