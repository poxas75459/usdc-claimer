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
    "3NRVob97uwUxWth69bqsjLyX1YZ1QppXet9tMNQHmsZ79C1ZuNtUbQtRtrd3zS61iEaUq4u1h7ayRYnPMMAkChdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26VoJCHHJAqQWsPPQ1toKutk3a1BsSL8LsX1TXiNQDumNs7qXTTfuS1PPkMSHBQh4j1JmSdSdeYyQYXM7bx9KNrD",
  "key1": "4ZagNNsRBkjHxtT49NaShda1WjkGpa1Eqrbz4zjL2ZEipPVX8GvyjU4x6KMTdvXN1sdz4BxuHZDewaNX9kjQp9he",
  "key2": "2wg2JJL8DGvz3qdZKzBFf7khHYcyg9KSK15y5GyRcmJ7cXHUHg2pw25PyfYRNVKGQpYYGVYTbq2UATUopy9sDCf2",
  "key3": "5S2eVUG77NBwo1YAYJLw7GqUhLMpisypjEWtagzjPX2euA2svf3TXuc5hrkGNSrF1LAgt3rjMW78JzESsWriJki9",
  "key4": "3hSREb1D5FMhgf5QBZ6WBfJGmUXgN7NDQmWuFKj1vmzrat1LBAVsTuK1gRkAS3qKU8RnCotzh2EtFBccFzvKNMt3",
  "key5": "4m5JXxyRL5bU5GWhWxe6HgnnQiqsfhvG8R8x9R5UjeYN1tJAKPwmAuRZ1vsAByMZqG7YYFfH4q57KPt6vayyJCur",
  "key6": "VDHVdfFjfPcE7MiXZCyNTDdi58o93Uzxzf3PgKAVqYeNzQi7Uk9HE9SEixaDTT21N2Nw8PvE5YWKLhpRFzSPu2U",
  "key7": "2T7CVnPg8AkTCuoj9yeRivp8N8wenXrTxT4bmeZaYtiwcrnRkbRHJEnjcQoWWgEVTuMB3ZSSHgosrsLy7xKuDcG7",
  "key8": "4byws64c3hstiXatijS311ti6GZXmpysVMt5HbTtuCLhRYFfJnV1v1SxXT5F1JwLebGRVMfffnoq1KSqVBP2pYJp",
  "key9": "3JihSNxEVoW8cZTaw9fdeQqP7KCjrcMWAYPz3ouNYA5XdxYStifFJ2gexGWHQBEoY2Xxpmvux4FY9AArAeJ9DVZy",
  "key10": "ZrSTYeHCGbksvcRvwhX9vWU7kVxmSMH4VDe9KswPtfpwo7DJrp6p6gFJKGTAGDbf5TqhEZ2faW4pHQ7ZaJYXwMG",
  "key11": "Vq6kBYh2MiCjGsbYNMNnvivPWw8WngW9LPfubYBtGMXLtP3wKeqXjPZo9HtP6fo9YJoxCKLPXZcP4o3z8TZTK2m",
  "key12": "2wodUPLdvVSpCBAMdAUYxzv68LvhQYw5SJdofxQg6ZhMVHQcFVLGkT8QhAdzHef1kvbaCjYEHwqpfg4Ff8nCywu1",
  "key13": "THiKcm37ciFuQMqn6hcCwGePxL6kyWsNh8U4M18fSQhKDzCbc6hGnhH5QmTQ68VRAd9ZnBGcTmJTM8TmGpDScRq",
  "key14": "fdxDooMwWySwMsNAnxZP5MM7ThUqq34RWptonNcCsjDdgbx29ZmaHW5LM5FqqKR6nUEtiqDr1frrX5SgDNV1mfW",
  "key15": "22BxFZkE5DAwSdPfkLZZ6wD3wCyajYduPz4qhAQqRNdQwAZqDQ8YEGGryR4yos1nrbecJp8frjdMB51up9uQghGH",
  "key16": "3JjCKHFSrYdBD7pnwJkyxnWFzcWUjdtinJbH9W3NGy1KE5nm7WqjLPhQqUoYSnsnnX2CjTkYATzdsEWqHhXLr7cG",
  "key17": "2b475tUEwEfsyYVbx75ubzaCMKKWgzPMWAU1XBjbpdRfoqhon7D3sL2LiJxKA9VWpPzKuTHBWyZGpfTcLioygjh6",
  "key18": "4J9atshZRboNND7Bfy7gkEYGyoiVZejuRkn342H1E7oD6M4xZC4KnXZSRFCnNTtJ5ouD2ibc3P2b4w9rNESsxi1n",
  "key19": "978ML3UQ2uHx6qYT6FYPkvLLhoCwh5ZPogGRhAYZyDiChLcGo3rU875o9XHSji946dXJN6djrPjd3cneYYEfJwY",
  "key20": "Pw3MdZRgNrKPMnMw1wMsjZFi1vEQYkS4vPuFR6oZHV6Dtyi7hMZQgdfL4ipALvvZ38g7oHuixvFZTT53fx2AfJp",
  "key21": "46u7QtH6NwEqaV6j3sLj6gT91eRfEVr31Wq8aw4fNdosdahGZhe6BQrJJCzBY5WZVRX83FRq7HHTaVFFA1ZGQF4C",
  "key22": "5YnqsK1uybcZwc9VsSoZQxt21AhZQzSUJ8j3CMJAMibgnU2CnijDn7t2PjbgpWU1FhdQvBVungx2LBSAsRrrZrD6",
  "key23": "4fQe5dVNt2B1MU9tzj8MKQSdgHqofgEnhFzzxrL4F3g5N3BjkkpSn9STn9Ebkc6hU6UWRGA9cDJW7kUSBP8cYkih",
  "key24": "5piwtfDWGgEfFD4Z9rDZQGcWYUQMir1hVwYNJwTW9sr7JCDef7poMGqPCDHsLLdWgL9JZSphm3R9wmBwZmzpBtMp",
  "key25": "4tjcwGvienB19W4bpiWxRxg55yx2ZRthRTYzT4Fs44cfogcrXpdmGaZcLjHmpbwYJ8stZjGKHEbN8BEGYYUXRNKw",
  "key26": "3AvqFKjwqdQ1VZzJU6EiaNDD8wa2nFBxgoC2Z11YpJJT57hBpkMdhwGCWsgQmdsMcNvXXMKSdnPacoJMfuHEQkxN",
  "key27": "tKPe4JocKcCdSgDEBcijx4nnZ4tGbKzFwr6unLJSgqGFVGfWaUh1JzZ28C35gaeAahQG4unLDwvAgr9STZyC2vy",
  "key28": "3S5jjTeY5e33Na5gWWgXVnwb38wiKcnYMv8NhjrDqM6tLrZjbZJ4cjoLj9wNKudM9sthMtUXmvSQ59piemarbgaa",
  "key29": "5trA7XreYq8L1ffUVjYS9WQBRxhBrajz1h5jUrRLKwTLE6kcWDb5vNGi8YTEhhawsY9injvW4vTptBdFpioKBL7W",
  "key30": "5Kjwg94ymPJyww6uf7NyWa9h19BYuRqi3y3CUsnEnxsSimDLS5wMB7JCPorisqRwMQLXvrgsLbAT4LVHb78xhPYx",
  "key31": "5s3fAddpbKHVWUKDDM94YuG3uiaL1Tvhf2EWA6T98DksphA18FjUouBN1ySg1b9veC6js3goXEj3ajvYzMBzNRwf",
  "key32": "m76dbwT7DKAU2BVjjF5hQj4RuJMRPt2tYwnrMi8fEBDVGiCMfsCZ1yPFjtysEE2BBKukt2hsKXatazbKbJHhCfs",
  "key33": "5EJSLvLVVcRbZNqvJjA45ryJokfFsccUsD6QizEFZ7kgaiSiB8Ehd2vEAFvuxu4Ni9ETjoxQrLHa24jnds9Bbvsq",
  "key34": "2crhSH9CigjXKjZHSKS5anQ2MRs8QcqS2EGsHDNUZmDPBkWyF6WuyPXySK6ndWQuj1atJgMNymdJ15yvnpurdXww",
  "key35": "shuLrknEuuo2J9G1sK3bdMeW7hz4n7aCPwm7etWcRQnQKTKog3sFprKyhK7fH4W7xigdXWwm4yQPoru64dFxLiq",
  "key36": "2Ft9jG1fsoRUU39WLXAx1rgeLddzibxhvsEJKP3mgbLJEHs1rTCTrKvSSutrryzT7sasNqgG8Yaz88FEJDEHkAG1",
  "key37": "3gVQZKVS3XvmSgSMMuwGjQkuSveWWJ2sLmLkUd19ub3FoWciJ9VQWibTvx2E8eXFwhUAgG1BrKpkoZXLWYce5wRa",
  "key38": "4sZc37KL59Jm7MtbHWGAwjA3WVjqHvJ2oH437UDqLgUh2ch3yaHV93v5EKyJDqT34Ens4mVK8uWTM4nmDVBKrrYT",
  "key39": "Zf5apKtkvFF6jFKps8NX3De6nvHZX73cuRFNdMBW7cYukyWNDq6u661sRFzrbCnHRambk9PVi4TT1cBMaQSfkmv",
  "key40": "YC97aWUwGetXrTwsh76te3oVLk2h6DtKuSHJxKycnCYigHQrMbLzTLfSXpKph4d8CZNbpkeVxN6uPM6HHqAVFZf",
  "key41": "4NrKtu1qr64hzei5GNdk8fLsRXkvbqpqPvqMKv77nr4tfZ7LKJ54HR1LcJoJWBwoGxxCQdqd3LbprJGM1fka1itd",
  "key42": "oR85wbxxma2WpMDgQNFbUz2GSzUJGkBNEZ9tKtkHPyrLxaS4yf1H5G1bj6UxkdKAGzGwoCWuHjT7TzhRjvNx2H9",
  "key43": "4Gq126UqvHmjtTVJnS2iieRH2cqS935f6iiVp1TddY2iy2ddw8xYp5q9C1iy3NU6kFrUhNDBvkQna3W55Z5PikEf",
  "key44": "5bDJBFXY9t6T1MJXbtLME7D1keD3EzTXEkjhxNG1xXFSakTpMxMNPoVNhQY7JtoWkq1n7xbm5DR7ejJ8LMXVxFqc"
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
