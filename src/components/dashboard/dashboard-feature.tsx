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
    "ror2j4h16BtZkeLD88uHWLpJH1NQRh85XGK3qmz1USZzu8dXKV3RzshLVDiE2P2zjjE1VsijjagmGWa2xF1t5yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Qe2dc4pFVHEgUmanhz63DKACsgJYW1Z2Wn5ngGvC7wfFdckZv6Y1SuZYbLeRRGXrJpdMSNcQEBaJAp9EDHbpRx",
  "key1": "4uoP8k3E1tu7GVmJHrS9XgcSc766inkqMhjbxHQwE3G1sTKMGagWrtNy97zppenS36BWJBsoHzkyAKZwwCsHvAtQ",
  "key2": "5WdigGxCLqCyDL5bYwSYJvaoMqhFmAyzCXhJKJMBzkUKybEm3stRWXnsq23BK24qMeYb5Uti4SKS3BLw162L3NXx",
  "key3": "4LnMWebkBHGEqM8yTfajToGGL5w7dgrxn6kXkG7Cns9CZ6iAi4yUqBqmJYSUR4q4dGAMHptEtjLHaJRi9chZpnv2",
  "key4": "4oAHAo5eqQvGTctRWZju3uJPvASmf5ArTYNGmCQkP6zCPp6WC6M3P8SMYUUemFEsoDHddpnHNNUHHpqGF6CPZ1ss",
  "key5": "5cAexFH3CxmMFQfZCAozGenncQqfvUoZTB53hVk2xL1xsXHkErVE7FDuhy9CzDZ4Aosj7KaSddZty1KQRSe5vDsY",
  "key6": "yxy3CtCP9h3q8LPmSc4d2ou7VKCPLNeLTHxjDutFBwYPnhsvPk9N6fdHjPt54VaUWq5pAuf4BUwsPavq3dVKmg3",
  "key7": "3DVhBuM1yw55kBmcvcMbvZcMgkb39k7SGXs1U2e71gqcSBSvNCGvXW2TFfyN6jSpJNxgW12d1nVLhCw1hrYxV63s",
  "key8": "5RuriVrFxP5xGy7u7Ajjpuj2Z2ZbzArK9Jagmkc1kM5gopMWAvuPBx2PeuigvRPnAXzn2pzsStnDGUm6ysp7hVdN",
  "key9": "3p6LuT3AzAuVXvi83tAm1YSWUScCEmhpqrtuoZCe9kEF8Z8nTGsBGUHVccjSqCb7JvQYm4CeGD8vwTdLxLrhhNcZ",
  "key10": "5izAnbrzepRUn4oYdiEqisiL1R8hYs99eKfgvSYo7etcAWQkXNU9C6FfrVkWykEFY7idxAPYKM4Cug44i1B142Pb",
  "key11": "4TAcvqf8PDxR1dkDHjs7UKUHXzbZ53mPtQnxUNdUjkWVayr22Vj1mq1ALTg9SHsZJusdYB8tEETudCXLfy38TPe7",
  "key12": "2jiTUW2fUcQnPoSEorC3RTn25zMpKK6Pj3t9sXq97mBJuTh3widJg2tgc7z1FhE9n3XqNHJv3bTQXmiDmJp11ZZP",
  "key13": "5YyzeAs8NqPcWU2CVtHJyZSjDumVTa9CovViE4vfqVhrdVzbcLTkMBnS4XiB35dw82CCwdTBLYegxLaToNgy3aSD",
  "key14": "3N5BDQzdMz6eyhahtst57BsTSN5zDGXyomh6RcMZy7sMSgsiibASQJF7N9EdGarQLoMGYxiKCMe1sjk9Pg8H7v5Z",
  "key15": "3E79WhgBYKurrXZ9K2ooJr7QPMsvUjAGggLPxa3iiEQMWZR5afW8qjkUV7oCwR47jL99pZp3saamhbrhXCE6D4Z3",
  "key16": "5dP52EyhbRPjHL6umhAk63gN2b7kEU8L9oNa3yfPtQLArt21qF2MwemyX2bvntynmNMNcG3QcAR38krcBBSk5mUt",
  "key17": "rpwpHZHtQUyWwfgcfgV7R7e1gELjSocoxFYJ8WBQMDYDJZEwCuYNS7AvyyHdJquWeGWPa9fybZjn3eK1aqjWuHs",
  "key18": "52JbMpweLvHkKJ97SgW6qKuunkkfG4j7NfbQf7urcQiVcRqJH2ELebQuUMPegTfu2MiMFigyCYunjri5Z4Y1HvQd",
  "key19": "2CuyNuynNnnNQBZX7nVQrYDn4oeFaoi4dbRfnnf9U5N6nnJkfTjetDxpPe6EXnkHbQpFcLjDrkEFYLuf7ATfBwvV",
  "key20": "YA5bwuiLjj3t9JaQjUddaNsfHGVPdRDUgSu9cqiBZrW25D8ThJTSX1jhbqKcfX6ojtuxN7HuXPmTG2fjxwhoCV2",
  "key21": "3UP74KZTd1usTFZsje2wJoBYU5T87W5qwHBSkcvqgZDAW9hDRkyX8GGDAgJHq4LQX7s3FshhipDC3h9JxbnQ7YTa",
  "key22": "N4Tqbg7TFHjm9iDfzGpeeiqDQqi6rjthm8LJeygmifo7SkJFxk3s46Q2wzdC4D7CxjYVJsxmoVjkGzNEFnor11F",
  "key23": "3Pe6UyZuxFPPyWYykGsu7s3zY6wRNb4Y2W1oMYn14RCb6nvdzawNcyhG6ofFQu2T6feVacwL9nCo3CgYiYvaEZ29",
  "key24": "4TU1QDbVUxogVEFmDhH1pXSw2NMesrF2PphHxuE3ghTuejNbvz6nDLhHzs7xMsqqVaDRM9xmzvduAqYqt79Xtuqe",
  "key25": "4QBcZGXmiFpS4aFeSUNjvAaJk8YXFmCwYV48G5EW8nWSSJmt19EMgV45pbHQMfcvr8nMGN6skDBDvF4brodTqyH7",
  "key26": "Rszm21paVmGxMBZH3jx9ioNjyVLGgk8efaE28nMjSnVRErwPUDK9D23zGR52KAuFsFS1nt6PfZ1YFtvieMKyi9e",
  "key27": "34pQV4hKVzWtex9h1Tz17J3ZeHnLJUpic4qqDdKLesicZJTh3cPtEP45jtz6XMYZJvVGMguyt6Pmmm2TDFnmJ85E",
  "key28": "5trQD9C2TeNDPvxDEL4BG7kiQbA5vpvfoq3H7oEhhMANmdyDNo19m9PvRR1H7PcLscrKGMQYhBkBTRC5naw2AjbX",
  "key29": "4jsmQqdtXkaPN9x7oi9nugYGAqd8LSPjL6n7QN7ib3oM5cZ7r9JskwXTTns5HeMDryfyvbYu153ne2mMGLVYtFhT",
  "key30": "4TJpGLbPoLRZCEwLiDD3h1U5nBQtPsKunYuUp7qEV8hXkQXNJa34ehcDrCcNoFqWkdBiXTVuZrhNytxS47codEZx",
  "key31": "5JNivxJVzcnZqbs3bDgKQ1xf914LjCQBL5jcmnkrTv5qK9pqydVrFi3S8YMtGW7GdsYFEfCMFL6o95Kj8q8925Rk",
  "key32": "278sYse5VJpzAGGq6XbYee7suwbKeoswgoXh7BBZxANMMD2HcVdBJZLpCKCBZC4XorRWPrbNsi5f3w9M8uaqZHUp",
  "key33": "5iEGKW62MEBf9NVAFC7AYVp9yMMneiFUPP6beJMBughr1cM8VsKSUhhwsAoDjs9ZQFb9rAYv5kh17jDRszc4CsJw",
  "key34": "2KV3XRNZJmJouVWsxjCgwF7H9osc2wmfarB9akyRtLVxG7ZKF4bkrg6tF8CNoa8f9Do6ok6rF53CX1vTrzX4FJDT",
  "key35": "5PT7cdJeQutC8zZJmxKEdh4TAWcDN8zEgd5HsZ9eG1ceLW74QnSGj9irThJb8WYkH7jtiuQBXb8HjCMqW11365vh",
  "key36": "mFtMk3rRQ7uc4Tef8PMoKdzEZNy5TxiyGLDQMA8SzCQonBxVXyFD4TPMsyvvAPKtiYiJwS9rbxiiphWHEA82RTT",
  "key37": "3jE6XaNeVNjZYj5ocL9BE4e2y3rnfFz3RZmgxKx5V2o6xwR653ereK3VhEhGVf9f88KFyupsr9VZ3nXzXW8wEeCw",
  "key38": "46g9hYMVbwcWBcACcHS43izWHHEW8gzZJdN1zDMS4Yczhw79xgcvA2Tw2JA1jawR8QK47r4vAre3c2rZhrsP9sca",
  "key39": "oZknHQknrXZyNDiFJK33ZuXyGFJqbTVtZgkBpyTUsXU1L9aLweAVx2ng5cxLwheBLdpZrzq6DwM9whtnfHZUdkM",
  "key40": "2MizgdmvLfcZTBM9TQRj4GoAorru7QNZj44sfrwmeCkZaQBNztbKyBAseo9Xy5wgwAyV2gquZyTDkoYEddHY3dVB",
  "key41": "477kG5jqzV3wzg9WLXjeBWJCybL7S58XQLMPpKERiBS3nSPSnpK1QYnN5RTsR9qTd8FwLCz1R5cuNzugb1JgC7tz",
  "key42": "4sbM8iNAkmbfP8eRbMB2kG6iHonAwukxXaH9iDJXbec3kLwSf9dwDyYuovMcsuMVvhBoaQxGkbGyWq63pScdZ1i8"
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
