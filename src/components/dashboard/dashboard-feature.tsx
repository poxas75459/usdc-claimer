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
    "3B1XvRrYxEdkqpCxhcy9L6sPfgVzcaceV4nLZVFR2taBNUNcqMmjNM5M3EiZ4bctdj5z3NdLJ24Hs9weDJLiALEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57GeV7jGPT35T1d6wc8KSgvQLfobWtnQHQDp2HZ91khhM4zxMyf5T5Tu5qHLUnMk6R1nmmMAfDSuNrBxNiVsnWXR",
  "key1": "23RaXogiPktG2DuAsLskQaepJTfSKwYaPitanrGNUkfYutaxAXwvuvVRs9KLHiXoJp5L2jgfsjWKDUkCRmSRK6j6",
  "key2": "4qCdJJ2LDuSDmqfJos17VcyJhLfnYEKopkJw18pS99D7wwNrSzC8Zhy5xHXtpT8xk9ikzWGGnapy2mx8S4c6V8kg",
  "key3": "3738Nfy5ZfYubnNNdmnjye7zFGDgTBtvFFzfn8miRhSrj5y1yHVe9UNmfmQenfcjNDomp9gMGEuxvXUjmFpJQ5EK",
  "key4": "2YGG1EENejGPmNDgvLwYK9G4WRtbwB3hm1MDCS1F4m7zTo2oitRMxNdxT4fugdsATRFrJQVdJaQXo41hkKP2yrPc",
  "key5": "2Fzs615ZevHkKkmMz4WpWJ48M1XaJUcw98ik23dekh2UPK71mKucFGL4zKpPwAjgCmiVbga2UZTDnvpMyuznses5",
  "key6": "3oxqmjS6yEYSMmiMisvXtmQYjUdKDyvDwGSU6WiaJXnJTnQoqfs37Xfb4a8afMh8HXEu2QTx8fBvv2Tuvhy4rx5W",
  "key7": "TSrSQVEnU6otBqHHeK5hhv7qSaofeQVcWnkdNHpV9gc9trdUdckiRe1hmjLPwKBch23CQHzvxYd8y2txSuYw47n",
  "key8": "3EYJzKarKkp4Gmj6LwN2g8GrrWMnmLGQvrDxYFDyK1sMRA9YhML8yoYEbV4V8bxZ3yunt7cqgarJWRFPJ9CUQnVJ",
  "key9": "2cHQXzkCpdTbyPjKwUx13FY3DU7cBiGyzN4eLzRE2H528Gcyjdhmd5yENPZSapCArXqtw7e5z4S6AvXCQyoe5rvb",
  "key10": "5n3qqoH9MtESSgN4nz1DKdipKFvtNUGwBqZ8whEm9L9ibT23Y84429CwUJ9Jn9yMcAWVoGp3SBdnoDEaxHdroBo9",
  "key11": "5bXTUbiFTN9eZNYcBNc68jCuSuELcpM4UmgQtzWcKiouoS8JmVixNrfQYr8LVXVAUSiSTgwku84k91XN6yaQFHk9",
  "key12": "355JWiYCtCkxqh76YjCTYN1C2pDatwTyXtAUmEc7CgG9SGwYJ4V5434DN5oKxQTrpYK1V4iX9Jwpa8MfD6z8tP7",
  "key13": "2g3rCi37o5u8z2RFKg6hMUsCaUYRwHE6KrvXWzz5P66kJfYCLLGQSB2rWRUGps9xdUgKEvPjH4F3Aain3oPZ4rXU",
  "key14": "dsmNGYD3PqYJu3Nf43nNX1cdKezJh3MCsF3wPSVakkv2hLdRE5jMgNYY3wf73jLW2gaffLvwR8WHEhRpES2dYYv",
  "key15": "C38LHvPt7zzTzXtPWWkuPjCxCLkZLCG2fWzWbLRKEtjpuZ9mvRwGLUBE567xftBFsfnuDUYtF8jBWY5FteUz3Hc",
  "key16": "3uXqw2gP7mgagxLk7K767T69XxCZ7chGuoTd5oBj8Mya5ooiRoXPRsiyvw5UNC1qKVuCy4YRkFS6f6Wf6NyyxbBq",
  "key17": "5PKM13dJyrHZUJgXgxDRVhcbvodpKXR85Pb6MDTiAu6gww2LuxYsvuUna7LUFti96EQkqaoWLxd1FQ8BGqdX6QEW",
  "key18": "3MFKXdPrEPBijNHTuC7d2AK7juDLkPCi7e3668RAwRKs6RvgG1gwhfFx8JL3CMWRKkJ45yL8ZNahMKFci7SdZnUB",
  "key19": "4N3Z3ZtS8k3L7QTK2zxKF1PbAZB95iTZFDb68fjJtPG5qKvgZtviNAH7ihu976KtzhsePWL3h7BanwgUQ7uu7Ta9",
  "key20": "3oKJRK58Ph4cNxqvAghQsMEQMTvbn12ZsAXobH9YWYCq2TXhrtSGRYFzSLLhwmLoMDXrGGeJbHTCGRzf7p88uGXh",
  "key21": "2eYNvPykdDn2hDNPQieT2phyEXeJeXYpfWKXjUA9ofFLxKh1pfT9Py8sLVvWRvr5j8aTBYqQ8GHh3WaeV3uLk2Kt",
  "key22": "3sixvaJcC9TJfu9QbKAFD3v2YVaqQh3V2ToXqtmcNyi7pQ2j5BmgBvkQhVt4ZGakuuy7C8h51TyoP4JNqBdqydDV",
  "key23": "5pqWpvHJx5bds6MyEKSzCGYbsyC1JBJ31DBt1g1s5SUF9QavY8RmYr2uN2xoQFjX74rbpuaGcQZRDeeMispUU4SJ",
  "key24": "2CSH2nBWXSBdgX3RDKPdphXRozAzfZWKatLWxFRzeq33T9qXXGsykL9x6rQDw2Pk6mheh9NruHeYd9pXdsTB5m9Y",
  "key25": "4ozRutFjngVvQ5jQmQUZu5Zq2zwR2dP1eHHmHfhfbVdBcsfChfuYWnFekmjRvnbBZK3kVxZdoaStkbtw6QTvt2dy",
  "key26": "2AYs7qJ3BAEjzKbvAb6TTcQuWD4zNiPtuXS6czQbNUxDXNgxDYw7MuzrRRQmTRsptKww8SHt4tB5wTJHkiiwB5Jr",
  "key27": "52mBb9xRjhKtenVnayU4BJvjjiQL78CogvxXkfNkH6EP6HMz7zNes6L3ZpjLowbtnXVJy5JkvCSrrXpMtx2KCftW",
  "key28": "3JH81jzaqbQqr6j6MncnND2zjNdihLKGbq76BTamyACtjceKPKf2Pitajv9fAmbT1nCyHRr7vAayKrsk5bMr6LWv",
  "key29": "394Xo8MVHJrQLdJcAVcRiDPYkUyYjNxAbeV5Brv7sBtm6dSXroejddiMFShSvq9FzuzEjQh5YK4PfvRCnnrUr94v",
  "key30": "ajs68uCkGRqiVhhEHtcugEv8C2NLGVbryoQsdsKRJnBvJafuN1V9dwgX3CyPPHesnB9rKw6zbmcNBda7cyXf8DF"
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
