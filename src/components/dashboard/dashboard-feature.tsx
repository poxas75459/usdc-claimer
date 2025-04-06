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
    "2kz9SDfozvv6H5s3Lzbw4Yxos7YnqSnJsDssytQHfBS5zUaiB311eGR3vhraUajtmjftGbhS4UG3jbY4v2dHRyND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bvSKj2GB6dG6HkEaWv8JcaA8eDwvWDEHt4MdBtb4wfGgrN6FmwSnjTg9vZNviHEeDF4GCpcGvXWQESYCmCxnhRw",
  "key1": "5SVcB88yAUaZXAh2ACdPWXm5raV6d9wut75MFaZ852rgoywnjcmenExFY6sWhhh5LdxDe3cwhMvN35haWJjBngAw",
  "key2": "2Yi1jXUQNcptgdhES5SpJ45A7enxgwFFksZXamx92rRopi6Ge4ZoRZBuGP4BkRv84PpcaAhmciYiPy7hd5rKDQrR",
  "key3": "3MCqLJ4t34RP1x24WAvzqaoXk8WAmb5eY1mXJnwb7nvsmmsB2MenEas1y6z3UNjrBpkbbk5vdP9z4gvjRpm76uC7",
  "key4": "3vqBM9zAHQEHQ2w2haGaMFQyKg9WvZxDhbCUm33EhrFjB7j2GsqK9VHFAWWRhDXyyBXVuu5z14B7m8XC82TfESSH",
  "key5": "4Wn7eUEuh5Au8tNTDdN6kphix84umpEbwXGrqgMyKH6qMM5b6gfSECrTTKJSW4Gs98ocWsgrhDPPWuvBpVve2cBp",
  "key6": "NkABxDb1cKCHA33y51AERTPuHjoR2xBULBtKwmM4cCCReeQ1kvTaWShq6DhtXinqv2aiG9xbvBuN1KEXh8bj9gB",
  "key7": "5mnyyAw2GZgBg1SJPx8A4zeHQ2xLRqKhnQx8bLoYV94KmrGRVFSByJxbVHZos6jeSdnCDUw4Q6HfYRcrtj8FZMZi",
  "key8": "5ET1xuRjPFm52VuMMLznug7evo7GSkCiamuHQ5sfEXP4oXdkuwr2yB4JbdVEJ3eKotLsn96xZLETnuoiiCqXHrMd",
  "key9": "iMQP3EJ9Ak1tND7KDETzuejKNLsfP4VsYxf9NqRk3dWMMuUxmL3ytHMKKZ9oeBrGhe69wEKMraXmrqaFAwmqHFs",
  "key10": "5MiQ6oF2qVeyZthsQCmtRsJwuiBuQ8VeP7vETQbBGoYdGWMpnXCYpFcdcVRdPo9D3xSWX9aSqQXXeAJgQF9zTicL",
  "key11": "2cbjYxTJfYX3VxVKrHzkh8NXPjd1UpZHKywB6JoMsRq3YXxYXBorqq7mApukFhB2ThDR8HMxsedSh1UYh4ayL5gP",
  "key12": "koimm5wxFWV3tH76MYJqT94Giac9NeXrv4f7HbW5gdwSnftp7BzwrwLQeVZrz3DkUXjWVmKkqJgVSW8T4Ce6dLH",
  "key13": "22ES3zvJM89LDrNg755k2qcmveBZwLUKpRqGVSLbgihxRTUiKGMgxEiKNqMTC46bG6JyYzTmFnxmgMD9p1HBosCZ",
  "key14": "24LpJ9Xv38Sm2AKoQ734YgzyEvTRg6PLoEcZH5byguLMmFqLHJatgbHiEJztmqUQSYZxjeBANrGtHXYmDHrQiinp",
  "key15": "gtLmBueMujTLaVUP3B64h3JbvgYBTWbUU893XxUsgaq49KY1xZunf8Qq9Sr5fd78xq8qk8V5gyWLgoq6PoGZCNa",
  "key16": "2zpbReFt6pspectscMjA4VCmEcMUb3TuWrwhjZnSsPN7wCtmoXhTddqK2roMBqBgpfH6vQmq6maiZe93sFjzxPJ",
  "key17": "2cC64PJBieh38VhoZaGdvarLyjpvChELzPs6j572oXm5ZmdKkoHymcZi8YwyKaBF8ttCxSGv7eRejNT3QA1G2XHg",
  "key18": "2xoX2mkwce2NM4wwrHD7xHUNUkoxUGXxuFmrQn19aK4cZVFPMsLhiaNkPbmMkdcXVHx5LEJGcETwq978sTJZESsn",
  "key19": "46qoHNgJjeGVdrSxnr2Cs4zwjwGy4x9L7sN9dEWFzJdu1w9CXs2zLaXqm9h5mzGEnRQvcfTRFtGuEygfRckjRke2",
  "key20": "9FdLVTLcdKUKEB43AofUKhCKEH7aTEnVw8dQCiifWDjNAgMiW551PMLmtAYWnQuPB6Tb7eb9QSuVPZB35dVHVCK",
  "key21": "2nDbcTrKR9Xt4ZLGVre1Q8sDCNVWFpDrGtP9Wh9jxx1c3vAmXea5vefpk9aLpx8t9L2bJkHd2ZXXeVmoTuoWeiwk",
  "key22": "4jr12C9jKxcStwJT7LPYmz2WFWrtUYVMvKw1E6toig9tid1LYusQr3uCEUcEBemUPHkw2hZTLRRD3zrkk287ij6V",
  "key23": "9pNTy7aq2rSP1hTp6eRQi2xtXTpzsCN8BhpVARF6F3cXdiw7svZGkFyynJzidkQyeF96cZiae7MN1Nb8JD5S6Fw",
  "key24": "dJnr9vouTQASZ5Z8hi2k49QCKfLhUUbMyXqbhpj4urHtYjjAV6PnfFV1Rf7DqS4shwVqHwuZ8fQUDEe3cB3zbAQ",
  "key25": "3DF1RtRz5B1jF2CD3CqtCc66JE1M7vLFoa4taqgZywDwvr8RV82skcr2mZMnmsJXbUtD1V5xVNTRrMTwFL2mi4mb",
  "key26": "E3jtxwKGYTvbaYS3J6FhaBMH7YrDo2zcBVYWfxXgAERbeB4EHcywF3kLfMEuVCwH81DgcgRgUvYakWSLtDpwC5f",
  "key27": "4f9XgTHHansJ9LS3xfCAvfxCLBssiBmkY6akCJfG5v9QiWKLTS3ABQB7Zrz1jSQuhwns6oH64rgeLGFqc4GkHxVh",
  "key28": "3CwaWaEwML8Vjs5jg5LLKSsMXXbDtjE5vry54YGnJf422cCNrt2zthocCaGNWSMMnWThLENJybB8vM5JAf6WNpcC",
  "key29": "5dWf1aLLoZFAdfb7ykwTGZ2jLZUhFFQmHXvvfwkGdspoEfGPSHSsVv9SnCgaW1aGmUUDFscMFQoGiSGLpqU1GeBQ",
  "key30": "2AMjx4HFbRbWuvuHrXPAktKbVHnfVPs23M9GhvJZkhhHKCUAFLuunwYppocuZJgAzEd6fHFHbMdPJ4AhzoDSgsCP",
  "key31": "3kBJZdVLi97BiHjfgrh9583G5uGQuTBX7hZo2FS3RbF2oKiNVcraMzhwwUCpbGsva3v2dyRJz8DajzdhRNCK9iCF",
  "key32": "4fEZP8XBFmgnVy5iKudK2bqhxXei1t22bdBBtmvkFbtijQJKFR7yz25JeD9YnKZsbB7GzKs3UgnbMFan8JJfqMcB",
  "key33": "2RRr9Zjt9xz9cc9Q2AZjp6e3UjRr1gUSRmVz46epr1cuRPmvkYGtJGeB9Ziw9sEQxFHXT9ufWQznr8nNdxDxXcpV",
  "key34": "4QmEK3P44ZhayYjxG5m2YEiiFKK1Ua2Lx29kJqBnzJ8Bxb7iSdqTTjH8iQtUcopf8ZKHyqLU23rRhDVCPidWsBy8",
  "key35": "3Sg1UrCaY8vt4k1UR87nfytEjF4hw6T7MYbsapaVqTmKGRNEjjr2Xp2t2AwaR2HpdT3T5tziePpu5VLN8jnYQL65",
  "key36": "3wJ96g7yGAcqeuyDN97WVanKosUxTX6LDrHhHW4xEw66K5hCMFJ9RhFYYPeJDnSVaLco21SyZE9VU4Doc8ZvKD6",
  "key37": "3QhR2L75Z2QoWQnb4GYiWNjaAR1NGf46PoaJViwyHyijNgebFWzUyd8prkPp2zzosUcBHNX9h4PbGErJQbUaeVJd"
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
