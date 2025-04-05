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
    "9x7qV3FUvrDNhnU6yPYCVJnb56jAX6WroV8Zp7cdW1Lg6DgHhxEXnWDWYPEABZKk5YQUzUhbhUbcsGoN3G1zmXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qD7VsiEqgSAXy4boLXoSNzAwsSvRt5dKG93XqgFjEJUmowZLaMvPA3i3hXVu18gfWn3smiMqfPHpUXK5SYEPQyh",
  "key1": "4cUmAdXvzp9YKTFQuePhFzcBNh5KfKrPxvxa15asyjF9rEY4CqWPt7HadwAXAsyaD8ATEy2LTyUc7P3g69WLXtHC",
  "key2": "3ATNQxBCBKZfvadBwkZzFMBFNTZWM7LHMpPDKvjbYGE23pDnBmZhSQSH7Q9Rd2LjgtLh2xpbkKBfNF8TsTpMX7t4",
  "key3": "5Jcm6C9ydeQMorfqADVuM9Vos1AmNpUjvmJpQQgZJyLPfwE591NS28E1rGfzdYuzxVCivuKuxSCa1xWDMzTgx2Rd",
  "key4": "2r65VNPa9rFgPZ4RcmsK2kmAAQNmDVqs79nSgKRwoovxtE1ZNyTyMTNP4DNc4z8ofsAZjTLHXwLHxHFaZt7mcvfA",
  "key5": "h2qaARTY6dP9E3MqUgqUr5tfJtMgRkueQ1WPHzhd3L3GWu2JNBErZLgPeGD9w4JJHzGyPRLQ3VqFSbsgv5oTSCy",
  "key6": "5jjeeJs3ZTeBGfFZYu4BYVobNPFPyoo6yysoq9PMxs3PFPNaWkPktXbHuybdM1DUSp8t8hZD79DiGdY8VxNn8Ph3",
  "key7": "3z3YKtHE5151X2UBEQ7BNmMq3uNpX735zzbK2SHB65geqt1wLkGmazNcfrnYi2YFyJQD1oT2srPLnja274Nk7BBs",
  "key8": "2PY3NP5iQEVnSRT9KHLJBnJhxtJ8B6FR1ep8stKUheFD2xXjgvsGeGbTCGLP9rt9LmHeMnAkzwsvXWY2uD7KefaD",
  "key9": "4mqmTkyRs2EzCmvigcaws7eWYXn1Tug7maCDfixfMwxhZDBZs8LHgYwsh1gtM4vzjip9fHChJnbyGyH1uKerTN8c",
  "key10": "5XGfkRAnK8hHC6pRshCfSwMU9z6MZJLkxgX4Wb1vxEUqKsiwwwkCShGn4qhK9PjNLCyvsmtLzc5B6wcEejG64xHi",
  "key11": "5EvoytsgwMfBERVVxjMHcumrKf4J34b2NBKHg2uBzNrjxaQH5D2RPhawGSc3c1VmujNRWtvAW5MQoCdNzsZy8u9R",
  "key12": "yusSgKvEJn42U91UVFffQCyizTNgd9y6tC3pfYLtkVU1NYuTP75EsAxFofPRktMpSWb3g65dwGd1EjZAbQiBLqD",
  "key13": "3VtaE4QQRh8PZo5EB4i9tcnFi99eVUtRVBUPFyptwgE5JwL1ksBAwyv64AUzEUhusjHgAQo6b2rgV5fGwaDV7A5x",
  "key14": "5MQowsU5XUEimALJAnhvVu2yysXd5GC6KyXYMCjr3QYpFdwEiDH81H637Es1KZHUAAqj1BLPg97Q8Pw2LZ41SBbr",
  "key15": "4gQZn5HtQLMVjsQ32qYLTBVx2ywEFXqMeDdYnhun7cBKNhaDb7TTxikCHaWSPgz9qSa1HN8o9VF4rVNosJU1az28",
  "key16": "4M6GpGiVwxZhJ6zaGjiqLVgA8tuodq2RpRoynttdZsYWS84m6vBiMquMjbX2s5XKiF2GLGb5qZWAPhAFG6zdee92",
  "key17": "2dVom1aPdVppTwm1629xetXKy1ru5vZDFrgfLhneNCuUZN7NRrJwMTb3TptR7Gh2ZpfGCudiyJAtiHJ4fcqZjayn",
  "key18": "4vzsPEKXQZJxeKSPCBYApRrynQGCKYUpZKQaFrDeenN46QL6vk4yK7eh9zb994uiTKpckcmL6PE9nvXoJTii1ei3",
  "key19": "3aC87QpFkdyB9raySBtTwLY1G2pJg7ojoWNji8eyhf4bBFbyYNbxjvctiMsKnKoF7ZH7ZrzGnnfUmc9W7oYJN1NR",
  "key20": "4jKhYgZi6EHzN8T2pnebhd4SAsDevqLNqDEmwirm6FZof6atyYYGBZS6QufXJZQ79hpykp1UxGE2pPmPrUK8r6jL",
  "key21": "Zjtsrv7iFGy9QNkkKzWt4r97wE6T8nkHqVLFJBp36kkyErrBN21z8r4rzyKGdcA2XFjFMoUdJFakKCmUtc23AVG",
  "key22": "5Qku47BJL4UdxVVRyBmRs11Zm7XcAqfNURFbC5YutB75DWDqVxVHswFeioPF7a5raMQfcVsvqTkYXi6ZyZjETmxf",
  "key23": "2CbsbCdksVxrYgFS2rNeQjsC9saPGsSgQHVW5ugJzRFdXzsYjiULMuEfnm5o3h1ZDym7s4Wcm8npyCsTNdhUh9rq",
  "key24": "5D8cKQnvrcKucxu42f5sqgxoxX63VVmbnRK5noobpj4s8yyk15iDYFG71dqyjgp5SBiknAbijd9Vd4Hgt3pgf1w9",
  "key25": "dq3CKaHiNTewPM4F9cJL7xZu6ACs5aVsWHfD1xq2CaZZ8mcnx37WhMjZxFkRNz9jqEdi7eqDDMs74PZkUbJVH4S",
  "key26": "451wfQZeCV26RuwTUrpvTZZr92SoDMDYWwfuL2ik5z7NqbdfLQ5JSTKMnET76cwTyDLVwwu3czieDThvaiiY9KHB",
  "key27": "5sDUT3vTGW3BZbbMZbkxN9XEmCLDvtUD7EZeBeXcNA79tkfErwUNsWGNzc3aXnjyUUusUW4b1zbYv1CLndgdJE4h",
  "key28": "4L3Uhvubf9qw4r2wwKTSsBP43dkeGJx1moMaFQEfyotGudMRrJQsnfdPUEgkPPQGtqDAoehHMP5BhWP63AjDgBXL",
  "key29": "2PGcqNq5moKnbHJwkdt1Erd2VsmpPHZcriV8bq3QC9sJ5kSRGhdvzmGHnqE5FD1CLNGbYj9igtcBjASDeHH1pwnQ",
  "key30": "5StrTjLAk6eaSn3ivT56XTKhzt1Hfj3h3xZimXgjGSwjiTHYZEgMx8RGDvMwv8w5Q4voZJrrAkAar8kM43Tbzik1",
  "key31": "46cM2tpKWkv5MwCXAeAeQEQGsJqnp27VvEWaW6kDeFNh3TyKb5Z2rpK43mQ27ZNXSp6KKYGQ5G3qo2KPWyHrSqgQ",
  "key32": "2JWNZK2f33txEqPog4HdxSeYK5W5kHEoBD3foLKBkLboqZo5DwFv963UNjayNCX15vXXS7Jf5sHvkzV7tdSuKNMH",
  "key33": "4XfTkLGjyZEJPzerJMFmBVLtNup75S7KKLkEGYP4AW59NsxSARGTKeKi84Wuj55Q6KvPr2upQf53497aqnza4TPp",
  "key34": "3qtrGh7tZi4hY1vVLXEbEJgTEkCjQZMAr6DQrumCz7eWTjkvzDxvSAzqhRt66CYMRZwSbQ8kuZzc99sRj9GZ6DTA",
  "key35": "PDCHxNJ6YM5qqSDq5FZ3wkRkfvwKx3bKecrXG8oQnCFFYEid44YFPgRPNsWUzkzNrvzsmJEvVNMtjqX5rcTE4pj",
  "key36": "4b198gCbfnx1VckirSXWe9He6VjXGMQfELXAzSKAGSjdhLCQJC9pVNh8XuCdWqTU6KiZFrWJ8hQnpaaGe3pkBRNj",
  "key37": "5gug5ryL7hmcx64g3PSmKpf3YG5GzKG9stELSPkWQkdsqtJzrn3BTJJpvZwTG7PRSy3t9AnCDz1p4xtUkTmdLGgD",
  "key38": "3bnnYLoY6tt3qh9fLWWpfsr4znpbGX1yYAQ3jwZ5iZMsVBGtTzKTRjFB5yPJDxiuAxZkYNAfBJi5DkHN3EaDb68X",
  "key39": "2puTB6CPaop92BKEnXbD4TkkmbBxmAfuiaBvbnw6KhJnE6YDcQbm65JrFUkosG2KiEx4wRMggsTSW3eRRaHthtrM",
  "key40": "5az3Mw3pz9yqqQN1C8JZMaEWgkJnyvLdwfx3Pn9ceCXhADpLTmyp3nCVg5qTzHrWFstczLsDvKNEneJh7cGexKwH",
  "key41": "oDvytTuZzBE67J46vwLWttzyfkbXdMGLRHq3aRRpqC7Jaab3wyWsUagcccLsCfWJQbXKgGfBZBqHY1rFrw1jrMx",
  "key42": "Jfx8NpgVxbtLUF1gy1Gx5Fu63trkCBaUbgjUbsDsy5qZiQz6qygzKSvoKyYdcaBewwfJnkvE3dcHoCfddaVKWm2",
  "key43": "5EGcbAkfDJmujqUd4JLii7GUnkTedcTJX7h7xzhQJAK782LSo2ReNJnypebrhEZnmaBGixFqdHNyhDtFcQPxKeKy",
  "key44": "29pCgrzTBLUvSmiiYmkQ7doxkb3PzTBKMgfPReYnnM5Tyj8fVh3SYpBzooEFhWrCHKYaTKBQws9DJjbDMvYE6gub",
  "key45": "3VqCnPhtDx6GYxKejWe7KvJ5w3FLaKtsYXhM2UXURsdZdXWi22XHA7fc2noHtLrqiVy2iK3XYio77CiroYg4XdT5",
  "key46": "4GrfWvWkgp6SrDp8HHYnDpCNaPXqRVf8zdhuqxPVJKfc5VFXsXHjjwEZfP8BVdpBJDFFfTGo5s136UiLB4bpsSgh",
  "key47": "4LLdCZHBXR8cR4np7uhgsKFg33oWVSav5KV6fFoRThvAeSwAViE3X6QxZrZ8NAjhDMsqMNBo9XciFj28mYSSRja"
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
