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
    "5B6h22jPTJAdEFgS1rnpfEDpkjTY8WzLmzQYE3P5n1sYFqkWQYvMBL1nV8qndbDSn4moAemAxKohJ8PsMMn8TMGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nXhK5BzaQ2ccXR2ewwWKLKzdDPMkD149FMq4xwNconwnRnwPbiy8H3dfbuWZuTjbNBxJdSVZmSgXKcakcaeezqU",
  "key1": "4oBP1B9pc4aLU1ABMnu2UDanWRGJUGi8yzVKw7EN8QnL4q3q4PaFAyJwMPeGJMWE94zrtLwVRJ2PTp3e67xdLW5L",
  "key2": "2br7PhU2yQNn6AYwiRxKUja47CaNmRWMhefkUTKBs6yf6aBv1R1T7SJLCsShYSWFnUaJkDNd4utVFZUsd3mFaeQv",
  "key3": "4aAAbmCW84yekZLDYipTWGTVdrdqMQxLB18stKoYwh2neisCGXu2zS5y8vkJkwCuJDJPaYqBywAAR2rSUNWDnk3Z",
  "key4": "3sHBttHiGswhXVG8itkEGvpNkXsM4HJ5QV7HUgxLHCnQQx5zz3iNBnL35XUssK38d66j6egiCLgquFX18V87JrXQ",
  "key5": "55HWdqQBHn4LifiHTp2ezsPohiHSSXFjzqmCJAcybT8vdQ4mMoui7Jrric6XdNFdT77VMBAfeaZJFAUTwTSRsUdj",
  "key6": "2xJxytLdhx4o1PBjKR1QTMhucZ9PtTn8L5KdjCipSSmQRPn4ibtwYxBNyju2U4Fz2thAqquyi7Z9ryhGibxZ1uk9",
  "key7": "k1otYd3FoKn1RSWJijn5Cb1MwCRRmDZxv88rb7bxNVaDXJ1gM89WEHfqps4xFS6vEAGNzAP1eFYcFGNYGpbUqHk",
  "key8": "2r3YEhupxTfVcCnr8P8fUECSPh8dppHDqnyKHSCWxGfYbgWmKeLG6hzm2MjLUjiQv4ysQU2aUvSF7BjfxJHupWYx",
  "key9": "5SmuAMcfbSz8Hx3wquHLMRoohLWyqcooBdR6QbrU7sHsM8zCREZg7qz1om4LHAXEu56njtZ4VjhwEiRagSbhsBYs",
  "key10": "eY9fh9aJNVsrvNMygn7HD2d3yWRKXaDfKuA4AzkeYKTqbCbf1yorHgEYqyvo3HsvLma69K8MzkjokePM9c9juSv",
  "key11": "4qku2LZsyvaHk9fUf7ujh8pqV34Bk3MGv2v9UZ3mNs5PJUkuhvRece2Tz4f9xmevsYwmk1q8bnStUFkY2ebqTV8u",
  "key12": "5eJVrbRZ62cA8wZDGFeFXFhFxWiauNZVidxcyZibssUE6a6VrjYYFSw6ZUpRZhbfufMNyN2CG8eiNXAgrLdcs1W3",
  "key13": "58H9by2fCjhyprybvGcASk4RQMkq4sQemFfjgzyQ75jQ636ty81vUkFfqTbwoy2ngjptH2BmE5sPr9Gb3N8j2dsw",
  "key14": "Md7i9otyT2zj6yxMgtKCgg3zTpkLFH1wDee8frdnrhepNujJRJiY2Y5Yk8i8mtPSigR7iZxgqjLFQoookorELuU",
  "key15": "26CPzhMS9VYpQhZhKRacSDgDYnb12p2UzhwvqjcpU7D6HrgT5XqGCfREfKUzBNaHvDgM4hUsUHkzKHsMBviTk9qB",
  "key16": "21dNeWm53CHc9x5pJQBsXUWhniZPgpn8L4x7ayq9hTqSxBYB51MFAq1Jufb19WUTMXt9LeZdtVdvfhXiR8e7ai1t",
  "key17": "Vj9PHFiBJe25ddASpCeuEz2yYp8efzFxZ76JmPbv3yT25mCmNTUh4pctdwbcGqjZqKYDZpXSKeZCWgryk6Uy8hW",
  "key18": "5WseD5B6MjWMz29MKd7i63es1aLqVqPrUkmGYCmdbsDoSe4Ve4oCDLPd1dtX1FmY8PJnBwoE4rdecvVn8LNx7qwd",
  "key19": "3ERTEDbnYW7nwZWS9xzwiZUQGKiUj3DCpVekwAJw9aA1fnxHG1ZzNH5mRugRSRvJdBTEX9im4xq6z2cooFb5HJnh",
  "key20": "5GSfxYDfe7Vp2iwzGGkDC8teKsQyipzZAqJAg3LBtETLbDUpUMpfH7y5sqmqTezjV4QA3iVrkv39YQrXpWCp1ESY",
  "key21": "5p4nVcTbWGGUJiHzWb5kPMwFoWGNbSw692nevyHHMu1yEx3qRnXFMUWhBwhqKmZRXCjBRmjNAPtBK1U2totedUCH",
  "key22": "36bfBsRz2b3RmGpPnPuv5mqnsm5tpTcRdRSLqDYorC3ESzZPEkoT4egRvDhPR2KhzhbCziwvb5o6vSm7juZ8todt",
  "key23": "3YzLaM4waHzPbLaeiQAjiuhk6Y5RXJ1QnvaXVSJ59odYNjyUuD3AW49itgiqY4c97JLjzNQU4egshVqk23RAaxcH",
  "key24": "nTkQCpWqi28c8XQLX9J29c81Xp2KbXr5Ypfgjbeq2pQCmBUDsBBwMXgpPd3WsMZZjfBtaf6Bs5pyLMpvrgjuAjr",
  "key25": "3sTz16FUnCJKNedDYB5hstt8joLA5GGEr9kG3Bf9Pg2nwPCt8JuVvZTDMXTa6LhiGtBvD5HGeqnwPGiMWHJFMF5J",
  "key26": "7x1seMHoMAmFqp4fWeqT2do8pe2HVRv4YRosA6oNzN8NZvCkass2KZbs98NoCQDbqwvupn1tXdYFnqFEF6EEi5T",
  "key27": "3mBjaYjiqVUHZ152zW6RuVvaCqYzcn848CCzzvjBdtiiCUvdWrx7KgHGDj4znxk7uBsUK7B7pY29XafRmhWn69HQ",
  "key28": "4o8WsCrzZURcJu32L5byZ5wZ3SusVDKwi5vGspdm69SAjHAJAF6ibheGqrNt652hywQvdGeRKMEaWKxqdo92cekH",
  "key29": "3AiUtMctVujpUqiHucVmGMT5vqhJVY3MxbzWX9uanv6xhVEeAiWWcBw2UU4Dg6Gk2zu8Bg2VsNic4BvhA3AcKdqq",
  "key30": "4JUibbif7YBMF8QJPzm3QcVvEKEayTJWMvq9AKuz4ZjGYzAXwYGEBUadcay423SHc9korvvehY4NKUtC824jr4Xn",
  "key31": "2rZt8pCLxmiH2mjj6xWQ8RDfsFUtVgcsY4hL27wVjyxnASe2ZpEhzS39R6JaD2qHem8ZvnDnQgD6qSGxMofJwJ6c",
  "key32": "4y3qZ5kMXCHpYBznbvqtKcF2U5YqkTL8gkLDTRQyUaNuTMkMoFPXaFg8AWhZZXQmCcbE3tKwf4YNC3KRnWZBnuWZ",
  "key33": "AbNFGVAzDYy3tcNV3NKYXDcdBbiNizT67xdKaBC52qdA7C4EtXybtgrnp5WctANq8SuqsfB4xtA7LsqJZzkp6J7",
  "key34": "3QLz5RfNDV4xoX8KGHoAF9heNWF9qSPCYqoEvwfhMUWtrLp59oG8TyDZMWcygY3U6YHrvQF4RL7jVizrFokPfiSg",
  "key35": "4ZGTqVPTpN5DLkUwk1KfwLNZAcbRZ64GW4pLkmJjwjBKoEmw7sRdZcMuy9YvXh1ANSHNeDpPpGVETBKe1PppQaPH",
  "key36": "2as58XFoPUwKNaizg1Y2da6XHd98J6bKiJqWa4wYGti1SK4bAps7whxskjh67DTwUyVVpZAzi1C33pn66btcRp4k",
  "key37": "6cHdQoABbE2Vexx1pq4mV8rCg85NscvYB5SRNieC47uezvpEADyaCZS7rHZm41uo9R8BWRd8SQF4BTZpTjUCgz8"
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
