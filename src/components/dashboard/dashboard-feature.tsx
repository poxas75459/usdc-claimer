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
    "4HTmwN2kJcyqw3aJEuoRUTvyB98efK2Y1Tbv4KiD6xRss66vteEwnMY1sq5PHVk5gU8Pkx9aAc6FhgJdm5VqVQEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ph3zTxRc3ET29kPWQ217Nb5kzdSvx8YnVUVaeW4sNjg5GzBGSfF7nddFf3g77EDqneSeVPGmZU56iwSUUcfUNc6",
  "key1": "4FkhSwWNEFKyrbx4Y7CRhHovUMJJaon1Hr3gTg1ujC5pnk5NvEU9PD9rVCxUZyT9KQityeDbn64z9snY4kruexZ2",
  "key2": "KbJeTnYjeH2UUvzZbZbY1nMQuucTYFUCdJyWp9iPwEcrm9ogDvW6A6VHLMhuiT3YWGYGZrTdCD4q78EPisyG6nw",
  "key3": "4Te7kQZxdFAxo4apbCRydM1xfQ8iRx45uv1tPfdPqoTBrMbzw1fXHz1LJ4FYREENfdUDWr4GDiKrV8hoFuoq7hrF",
  "key4": "5AMTvUucyxzvyUE2tzeYZALhNt7zewJt9pPsg8vFYJUqwstDZWyGZ39Dn8PyB1E7Q7hcX9uHSCeh3m9EqR9rAJvC",
  "key5": "53DfaGVwFzn7da3mDjjCuRKSbHHPYLfMuWJM59GxwX3jNKWYrjFHcPEQvR652wvdivpqiyd8TjC3syQ1aswVGu2N",
  "key6": "3ZZtaEbZGQFxHML6j9zsBDMLuA96M2A6AnngiD8WWY3A4GhaR8y26c2ciJMtUaSVjD1QeGLjV7KYatFyzWLqeyjs",
  "key7": "sdqofR7snc6S9zMd4SBXB97AkprW1v26ip61UW7bVKpBWNM5DZqPFA16gxHg8QPsQMrpvoxLHmB9wrHA1HuXT6Z",
  "key8": "24diSYUPGrcCboqK8Nty8AhVwamxYujh776J8CfqH7ppmoWAgQi7ewNa2AfmJh8tNzjo8UrsuJqNHMVBikzZc9uD",
  "key9": "2vGigEY8ZUyzdGu3jTb2fAJ4548zmLRhxZsB8tAh3psr4fdf23oQkpFGySKnY47Zb8pu73XZaB8a2RFCJevKzDZf",
  "key10": "4oHaZYdLUe1w71vFrPLj9v42DoSsf6B51SGfyQ4BGiFkSfEGKEMuHz8hgLY1ewhngMCrANVxbqWZ34meKDV5yPsF",
  "key11": "4tBcvW1MkEmV9wPtgNWdYyXjw3FtuVA9yh1cVVcyYph4NQ4xuu5U6wt1p4RR8HMXxHwN6fwnS3Chz3t7q8WGJ2Kh",
  "key12": "3Yn2DgJMVgA28Zp34QZt6BSYBgszf9hr291okmpeLfqtwCsak5Lyxycm2M7W6oyJoFoW4xJXyJq2d3JnY3LPRZwd",
  "key13": "RfN35D9Gcnd55Xg17xJwosFhkvMhWC4xNnmTAdeUb3G8FetwwnMEZbQzoQJfHrUfoznmApU8ciSKET8h3xCdCpa",
  "key14": "2PeCBeduQcXS2FNetmFw5cwWQJyhmBUapNruSRRW8oiseCekesy8bDd9k665hWyZ5mvC9Z6dJ4KLt6DSB9p2Pk7E",
  "key15": "3Y7FTgvFxFq8umZbafko3iCW9ezfZfWXWLrfPzS2fty6z7YYaG5dvYJKbwDHBPhpEbHRpCj2qbHShZQ3YZtgyVtY",
  "key16": "4x9UtvFee9HjUnMvvhvCEWqGQTPVh43Q5qyKWB3EsYN8ma7SS6Hgwg8s62em2pM9GtcXQPXd8eao5veGz6i9DBr5",
  "key17": "rnET6vhGVGXgKrCLrJS8Cy9LvLTssdourrK8Ydhy7DygPb98kcRj9DzzzvoCV6upGiMqpZjdfJ2mmPJeP3QHZQX",
  "key18": "yH7KKqnhMtrFUMbiurLGQa9CFWFV9sqBUq44DAFoueJDbwVyKayDskviYTU6ZCV2C2u8psKtX6nJLXhuUDL5Rz6",
  "key19": "4wjRiygShtGdjziiQ3LTdAdHhiVz6nB8FySY38LzyQmFFJgaiQUEc3Dku2hVhYqbLUPhmEK2PcPkcfjGp2pVgJ45",
  "key20": "4qXZ7E6i1gWfLrTuc5PvWUbiNQ7H5C7Q8ansPwDJgE3RJivuQM9aEqcnBDsnufbU6rkVuEdL9ybTwuNucihDq3b5",
  "key21": "5gVXbbJ1vuv2HDoxSa5Vs6tRQTWRwatCU6KRd7tk2yp4ynxUnx5qHYMxdzRPgpu37zAgm1LMBMWzg5zKt1eV5tmW",
  "key22": "B4ZPEMiv4b3eyv3scujCdAP9qED4JpqqZJAtTMqTJ4Xc5ekvpA12XWNxJXpEebsxxr1ZaAB8CFK1MgnyLTPpv2Q",
  "key23": "4HyMe27kBzoCVwVgxFGQ72CbZuQgXYJAcPcJDpmBYuNVoz1qNGqfeYGvt4ELNcqELNqeZJH8LKsFSJRXeUENfEdP",
  "key24": "5VoVhoQupAVJebz4WZ16nLGEtnQifLcGoB175meK1PTkkfpx3aVap2AXhLTqk6SxipWRYCzKaEGHYP3Kcycr3Z7E",
  "key25": "3W3sWPjTPYUHvQd7KyJLvMpJ2pGHZDpz8LHtcUzR4KS5a3VzDNRzTwVvamkHGMRgrbeMTEzhpHWsASt1FUzByo89",
  "key26": "2iDSeSivQxKaH8AGZVUbqEoM9USwnJjfTn3nK9pcqqRUBkQNDUTFAPwsJPdUYPfcEtaAuTaqeFFbbNwy5spAwDEL",
  "key27": "3kHkPdrshboQ3ECAKDV3Rfr6A3wVDpUZHvfDhokLUYpVjTfpfoWrEPEQCJ8X3S9yH5nL4RwsDLU1GoMKiGbpXh8j",
  "key28": "592qcVYLZ8HVGEAai6M4fGKQKnGnesavdmsUTWNkrgz7TtSMfQgdBLgvkCanRVjA7DUVSv29MG8eZRQ9gyW9t8GL",
  "key29": "4tdMY1XotmYEFHv3ni2hzJLNkYNnazWc2d9H5GBNprqHA1LSbpwDuvpEkpAh2jGxNqZgQhzWFUa4k9i7WNDgwRqW",
  "key30": "2VwAnjs4wmHjnNewAFoo32SuY3fnsPH3nUpspGTqKJroBevDfo5q2CoTF78C9H5wj4pJfPyH1oj1RuscCCv6F2PW",
  "key31": "59Bm1PcYbwmRKGHgzth2uCpw9TsL79WQRgohPYeVv12LNWGfJvsbc68JjGqNja4ZAp7sngB7BFj4UMDkdNLaTKAu",
  "key32": "3WdAAz7e53LWLYF8rMr5kQbTpM7x5t6oNDKS99eFu2iMD88S18kvPL5R9Gr5BjRgz77tXjsfxQs1DuCcv9HnwR37",
  "key33": "5rZGwABHkqt5am6xu6ih6QWBPVyKXfvqHPwmNE78TV65RJc5JLcD2HNbzSUxVeE62meX1Y3eoTrNQQ1PQprsM7tA",
  "key34": "48mrtDjbhZseyBEWYuAHHGjzwLjHb16vJEA5fMZzNNgQCKHASnXArUUb35gt6dT2SJa71YtHLeqA9bs3xLcsfrfK",
  "key35": "3TRPJ5RrpUsCFQ1apBZDZ6ZPtPdNHRJVp25GLu1dFvqdnTJX2qWHxkwBTRW2kH8mC2GpNxoui2eBsLRT73Q6o3JJ"
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
