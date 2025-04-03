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
    "42qKo6qVSMJCEtHdaFxB8bjThpbTQ98gBDFfZTpmdV6kB1RXyqKr2ei6WezhtvJkC88MgVzAk1Vmmo3ZTD2d629N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vWGPiz4HteBFqdxTvamcpQeDUapgkeXSHAsG3sDK5vvo73CR5gZ9GxA6bPs9zZ43mP4t55UbJRR4VcjMD4KWXo1",
  "key1": "5mfeZ2FDuHHznKbLTdtSc3R3rAeTGa71uYQH2PATHsf6F3mzEzAskLtsfZRPFHEcnBVC3ratC1vzywVMEefNoKDm",
  "key2": "5nD2StGr22YBFB5JVjCiLkMQaNBevs9ZH2pmTQB8ZCmNMZMLyD8J8Jao9e2kkqmJPxvUFLNjJEx9q9cUgk2iGqaW",
  "key3": "5kieky1UYwsLwLchDM1TcuDiTNb1cTW2BPN5jVFn59ixrpbR5p5SCrrJjrv67dyf9LhXsLsTDbso3iUUtJf4Yttu",
  "key4": "nYeF1QhL8ji81HPuiM66yb31UTdC4kYM8qj1ZNrHzoBZwyf8GtvwnoDiXLhkT97VNN7BJkp5gi6Ai81AQgiHN6Z",
  "key5": "3i5tk36xA2dD1jFneb5JZsrhX1jGskhvSuDvwZfwBnoPv9ZYKaKGCuz7p9RWGjnvpvzfCtUT3murDcYnKzSM5XrT",
  "key6": "2bGTUAQCfahjBQupNLq7pj4grBhbKNc68BBKAPBAwZ6H5WrJqZo4uR3NioYB1wT54HbW5Py462ShhfLq7jn4sCAS",
  "key7": "56cUcESReP2BXKMSFWEi1kiUHR8o2KPssMmmSocjzyUxfh9qWRQTtrSyNCjJUSRbta8sk4sU5EUrdcjfpjQvsTvD",
  "key8": "iLKS6owLfRk9kgz6NnB438jadBHzTXjfsdnsSUEPgGvvHg6GV3twuHJLtr35Q29Cd5FK65poUGuWgncNQSE84V2",
  "key9": "HLxY1nprstMaGhtZnQg8pHcppAEJYivExjSPEqa8VgW4ASmTLbQ7W37efJtRqG8YaN5MZuU43D1EuTZGm6Zb93Z",
  "key10": "2jjQY2dzM3KzELRRXYii1Mp96fN71rFBLAhMJaaZH3CVN9WUPqN7iFVaKJhCRqNksdamagiQigRoRKE33sYnuCAv",
  "key11": "PkHq8hm4A4JjbNSK38pQEUeHZi66nadZZP4qTSEuoMq5idhovcCMae4GoDzp7Wv4qjR4RwwpFr6mnqrNCYfx2Hg",
  "key12": "5vz7ofwXrkXQrdjyQtVSJDEB2NsHdKPdJyxS5GRtuzWzgqH8Hdsa5DL4thWNoGidebMHX24zCZBquGNbvFQpkdKG",
  "key13": "3YadvsWggQGN8cd7fneSeNikJLT6j3WdFre9jgyVyMvVFHT6GwSRbX4nE4PYEH1R7KubCn9a9mUrQhk2r9Lq43FV",
  "key14": "45mt5WjYLku9zudSx9JsaxeFsARGMXD1GmJ1giAqxHzWkQfPtrpjTtZtC2xWGwxkgqc3H2y4VAC8UwzBR9oad7Ft",
  "key15": "41mDX4DRpTZvC5DpcwkWr9t7ntwcpTgJaPtgYgwoqE3AY8AXgrdkXYRsQ32mNXijH9d7nzXXyN7kkcdzA3Dd6XcQ",
  "key16": "4uN1TECczQMnKRpA9goN5mXsbwfhBe7KP9Z98p4fYjR4RbjBsY7KbiePQXBKS5w6QbUmiPw4MHUFv2biZM5pHjky",
  "key17": "4AUb1jKRLh4rrjD3A2jD3Vf4Y2oV2fcZ6Vwe8TJan7tMibT71HipJoJmmnTMmsoLx7JdFYbrCk9xMXwAeP7eJCSS",
  "key18": "2Ef1ExVYnuyJ5EinjtEXLpamxZqEWBabtLTXwDKgFM7gYoRNkmggQMrg1FYrjvXizszwRBCvgYZZEwe4YEo9Acvr",
  "key19": "42zgFr1L3e4Qcc7xAKkcA4dznsSvVAK8mbJbDJYPQCQnpQHrLoPJNZRsuJ9ZdhaNorvSoLzaidRBRj6HxJzCLwJE",
  "key20": "jurD5nUicQZLnHR6ugXCSqTYS7QgYshrYGpToDYWhnQ4V5jMCu1uU1Q8SADf3gVp4wHoeFPtbBEH4jxhGNVsDd6",
  "key21": "3ssDHWQk6sFBrDvYAsqYpCtDppbeBxbckKX3gqwQxLfex2Jg2vovTcDZP4aNxMPpGCZEh7WrcBekXn6kjRvC9o81",
  "key22": "3U9Tbv1seF2AofMvAwibC7ZZ54S8Cs8LR7sCWVp6MWR9gSx6cUt3Wk5a57Li4yiRwbghPAiY6FaJypTzCjfDG7R7",
  "key23": "4rYCLurn4v9cXvPT1JuE4sGoad2FM2kev3WnvuSomV2fLDNEjeYXzPrBu4AXW6jVmDZ3g31QfqkVCrSffw3bRQ2M",
  "key24": "ZExdHJHv5rJ3nwveKtov51vf7mJcAJaBQw2ZNrQrErBfotvGgfSwdFWLPVR1y5fWATR9KwBnwaeRsjaXKFK25Fi",
  "key25": "2v14jVw6WJ7QsPoMAgX4x1fzbpcZh4qg2DEWnCo3pUvirxzVuSQTYGLwn1kXFS3QS4z4WJxgunxZNgwvtvzsR6wM",
  "key26": "2j1jRpNZN9njFDSmZfWqhsNimKoAvSGBjb9AkVUcjYghfddXSBKUyv6g7AEidpEqnNJvNDAxx5YdcGEHM57ebDRT",
  "key27": "6wXEr1NGSX5RbgAiWzgj2vKb5EUFEVBzcEQfXqvCHK9Ak3M2ff6CcxL9cnknszDAZvQvbMdcFtp3RU5s9HxBANo",
  "key28": "GdwwCq47wMXLAkpdqFzM5kmgbcdFiHtkGc7VAPLdUmfdfzzdy8DBeuwn75D8xUZU5S2y8FPxKzaL26DzNBfGdqi",
  "key29": "26okkY3Y5Mt1T3SdHyDVGJMVobPz6r1zVbwmqiCinUPfqFGyz9Q3uN5H7muzvUATkAqGkc523vUZUsWnVekA7ikQ",
  "key30": "UEWMTz5TGFtfTTAfqKXTVxcN1hDpMktgX98PtjzjPsgCZSujQcQhjyBq6UhhWL8s4ruvVVEar4euuzdpPXqGbuq",
  "key31": "3zLyXp2H5SwsPMyNGoxUGKN6zbodJfc1RjDgbNaQpVHaJb9TmGbRkd4gWSthCzEyC5DDKDEq7QFFMUgZi33ZBwek",
  "key32": "3t7owqAPHuC7ebbYfcN6pSAiKRaLEc9HUQajPxpDjce2WbDmgVxMujNZ9gpmMPCCnAQzLg1swD9FdXYHZBv3wmh9",
  "key33": "2ubTxwP1VkGBt5BBCH8wwFbSzGXhxaK6AoAyhGwC86yZ1z4NX9aFi33UiJyptNkjxNfSMJ9pZxrtrGL4Ae4ptKm5",
  "key34": "4Fu86E4knBoq82zrYLzARDSnVhGr2tXjxjgr8b7HXMoEZoKAoXnjNLSu15Ydvt8dxnDeAH94PtsvbYapqSjkQaxv",
  "key35": "2UsxmEjyHuHoKGyQv7aYwm8u2CPB6ZPB1i4MNBfn2qVqmjnomcDKG3woe6m8NzDJ1Uz7PBVcFcvcs6LoTAok4TwR",
  "key36": "557uk5Leb3VDmsuavsyHwuyqv7PMkDpk5BM8YfGCCv6GWLXfUDvg6MRpyz8nzjVWU51QSyyCTH1t4mG3ui1K6XJv",
  "key37": "uaWjnXJtfhKDGng48zL9aiNjctp7fUev28k8zZpKhxWRLqWpJaVSrHWdpVFqYTHhJE3FFNds8iB9GB3p6iTUfNY",
  "key38": "gf9a2GGJdnV8h6vhMjE9F6uREsWTEFESXnpPwvFL6ZmfKpycs4U6Atu9UnU8tRt6MqFqZuTA3iNFUEn4fgQW1B9",
  "key39": "5GmPg6L3u5yLKcZ2t14WpqNmLEzPUqdeSpsNm3uzpQVvbmoWWfXxQQmb8RFbgEWphhHtQoCra7pq9e8HSPc4gwGr",
  "key40": "5jqXsKXGksjs4a5gfeZnCkfNRehFLiron6U82V1kipVAAjsNscLpe1mzMBoz41ygvaEswNRNtC4HRCDBAGb6vxyj",
  "key41": "3W4A9jzSah5ZoU9bakgrf9adsb3d1k1egLjLLETazxhi759UqCuVHWQsVv9xZ8qw1YCfUyidcsKvjdj4ZiVVUn22",
  "key42": "2pwhjTVpyPGEAT5REcMJQKRo9QHiNWe4ERYZmLC2ywrn4fnt5yQAGsRUpx8iVpVgwW3LbW7FMwBy61vZMLXhaXzq",
  "key43": "3Ki56hbGzk7Qmiw82WppT3XZucgT38zBhk6jUH8d2PZjr6gDbDaHR2GRC2dQALeo822tUUXmZPBtnLA6KWz4sPHm",
  "key44": "3DYHY7ayh4JfHz4MCnYmQdse1Q6EaBEUdyPVciEd7QkK5MjBXaJ4ZuuwSHjZAVsmacF8axFPan3a2KRjaoMuhymf",
  "key45": "EJP29kVxL6uGgwN8XMB7HyxZooxnEcqzS3XZmggzB4VnLYpik9Zhh1o4jagVXR33MPyTzf6zKKF8TrtUvUZC7Uh"
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
