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
    "2rqqaQt9NA6SHG8kPCz92sdbBpcNbA2vwhih7F4jwqZLijKSfJUDWNrwtWa5kpa3N9xXZyzmGkvqbyrX7xTXmUed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WMArEZNhESvfF1rGppjrnodBFWd5Xg9PefA1NW8EGL7MhGAobzh5HhFeNCWzanqozHrnX7FcaCm4DGHSkjq6uCw",
  "key1": "2F1s1Qr5sgKkWaaLfVq1imLLM1rctWEb3YDuL7P223ZzCH9Eq73csgXKdDD8cco9wTSyQM38VyGcUiuFXfBsdfk2",
  "key2": "oEmNpTTmwNoNJdGAgVgno87nwpRjc7PZ5b2qKmt3scJYV8VUPripjdCxE8UUCrkSijSNiVShJaC3d1Mv7rKtE1b",
  "key3": "bVhBY6AYDJmbh86r8ZZcPA5VfZc3gELUozGK98PsLd3Hw7RomiCmBYBUydPNncse6fqyGEzywiJq6eaXn6NDz9Z",
  "key4": "2NQM477jNrf3pZxhk6Ghr5vvihntVGZRx6w2A91NHweDE5GoqudDjxxwEf4xMdjnPf7ygEwNXSL3ZCqRZQLSa6QX",
  "key5": "2TvFz2pPeT8MzZbVeNMVYHxa1X4Y8xdVQSTCuwr8NzdgG6C8MyZ2tUNDeBSQbVzGUZvmgiHVWxTwD7r7kBy1ySJ4",
  "key6": "5Br9R68EswULg5eC9bUyLioTJvZexsw9cweoctE2XcyoLpaNpxD3GUisEpSZqXBhjhXR1jtmMQaUMWuMWRJqS5F2",
  "key7": "2kJJ1XnKDX4NVTnGQMjF2gPgynub5y86DLSaFUSV3ATDmhgEwns5QKdwEZ4HaDt7mNSGWULGjDijcsY3W4A6sDmM",
  "key8": "5XG7BtoAkorvozmDX7zgoD9aZpU98Hhtz3xwUkhWLewYCxz58LtE1NxxQ6Vn3J6UkJ4smoJ1PeLF8rT85HAsUHqb",
  "key9": "nFeYDxYYLxfjhhNL9qy8d83bpQ6bRf6u31eqeUdnmSrK3r64hCfXMvjGLNaTauCrGeLpYMUpWEcKBWBnA2p5Stq",
  "key10": "2rfGXhFKMYPezM2XTqsHWonv51FTdnRevpcrgZB4Ahcw1xVkDvVoqyTtgx5uZYmoVAQaawNV66RW1zw5R5qFfHsM",
  "key11": "3o76XjF9pyfgLHHatiAaPsxyuLJXXvEHQPNNxPmvqXutBCrDyGvLAYUQ7QrUVbN4QoQHPWFgsUTLLuZFxn5BDWwc",
  "key12": "4dSZqc8HGwnJ4Cf2fUNzHg5aMW1xFPp11S6ZUEWADD83KChtzJnCsD2YnL87Ue9Bh764GE1pY56U1TWNBN66PtCc",
  "key13": "FazZbYrwPQu1ZsERDk2aHM8jxCKoU8yyy222Ugnf3emS1ZHub1m6rmqC4Kg8o2EA2kV4gp2wEiU2zxTwGGuHXYx",
  "key14": "5PNu33g7429i73tn6eNzxwP9H6vaFnueXdeJmzsi8rugMPPZMFVpwr3DNSueHJhWsbcx64ZuMaDJxtTKRNKYpFQS",
  "key15": "ZhWeCDHgy7F3bKAd2iGUFMZX1kY7ZLtEUQWeP2ZzgKEyo6fhnXV99drNm4qaQZbenJdELDYybmSya3ddKHf2hc2",
  "key16": "TeZ85U4EX5rUEHv4JX8SpYzBep7VQyAbK9AcMeopCtX3NGi2qCoFHsgfvEcMn6oJozzNja9jAceJrCK7jCKdNYN",
  "key17": "5RZbRvh16c1CU8kBuKurg7hAUynJB69XQ6kgKMpAKA9dPRBepPwbFfWrfCrDqCM3XS7mER626Z7MoPiv55AQ2LDm",
  "key18": "3tDWLftshzVLQ1y8q3zxFrsm1Vpyqw4nBdJLAQxqZqR1QeafpYfKi9unhYbaKJ1t3491jsSx8gRQbdwJQjAaQksk",
  "key19": "4ZJatsY4S5cjpyRavY869gYgnwSMuhPqyWRiYb88XFgMwf9dmmsLfPodcrXejSM1iQRjU5Arn6tyC5eq8vm9t9B1",
  "key20": "2DYJcCn33JoNK6NQW7kcKh64yUvWg8mJSh3g4tAvWnaoAFKTQ9hsdDDXok2oYUG2LtQKYUir8Rfq4Ee3UqygoUjT",
  "key21": "5JD4piSVXKUgpqxZxujYUMa3uwhd653K9KfZzFzMYmcFM7KKgAruekeNGrc4J8nffXgBxLs4GaEturuB1M1afap9",
  "key22": "2HPoTSCC6VhoKFitxH94ZsBSARztNqbKEwkYBLKUG3cbk7TJuoQgPC9yMxtoUWRfXQpJhCwg4SaQNc7MKPUNXEeY",
  "key23": "4yeg3QqQE8ePZNxj93RnfSbMa8Qh36rKijTfpV7JMZNUkphFG3mXiV7e2Lsyyu629Hxvsr4xifYmtyTu7pkY7Z5N",
  "key24": "236nf9AUdjmw39o4NrcCcrpSeNBxtwagZeH8RY7uXjUwVTcG1vrS3SZgpXK1uGUbSH6RZybHsq8tsTFeXJpqv84p",
  "key25": "3Ma9ba3sz3JgfneEssnBcFDkuHDdyRLiybixTDhtFXe4KzZBqeLkWwu1FcCjYVFFWKeKuK65EfWsfiBWkuTjdZsL",
  "key26": "4eZmkXFgEnJTp5cZ2j294Jgs5ou6UcYvRhr4gjwkmerV8tY6sAGk5uQrbJoX5HMcztrNKGkmka9cVP8KVdfnGks2",
  "key27": "uG9nzwn7XXARVMxr3vKrYzFyAZADdLXm8fiVmqpSmQTyxZmvbfAYqvmr8csVuyb8iZ9CKNfhAy8fPKSPiFLhCed",
  "key28": "2qwXNy6M2D8h5A1hdtPZsFu5TFJmqUjfBGghEcZsdz3mRY3vh72mhXPb2mxcJvDuUhLJmVqXR3MSspGcfexnfGR",
  "key29": "5omJ3c8gPkzZE9Pv9yKABTUb4XWmZmasTSUPW8tmSr2wTxFPXSMWmKmrwSaQwbpURcpvK9VHahyp5YdVNHTU8VTa",
  "key30": "2pPF6LXd3Tewpd1FSRL1dM991ohZvzcMrhzjG6VbkGejQjWQnayKQs3L68UeDLEc7ng9dqWHZafQEDAscKZjGWfM",
  "key31": "rj1ZRSZMtwReD5Dtjc4mfL6pfWMHRKjVecwr1szR7iiR4w254hYGYocTpNpYUk8TnFx4DqpT17xasxZiBhmEaoW",
  "key32": "iETXbVaQnYdTtkX38XTbmhiN9KAAJ1deAnioSnjPTXScDUrsJATa9rTp4WUbdFk6cW1AYyqovQtJ3HF5xKSqB6L",
  "key33": "5CE6ervL4Q3QeE7aQRpfnPqtJ2eqbJhz8hg42JHfLdkCribUmDRaoC4NhGfmW4e6yYsofquUYeNYQNvvcLfQwLx1",
  "key34": "4rUgYexGxdW6MWNbSjkbFp9vCEf9MmzxFvbthr2RTcmGVAt2L3yYhhfg17kWJkWSwfwsWYaJGvx1X4pHA1n1Bdkb",
  "key35": "46MYTTz3B2jP5weesCHeG9Mgd47aUaNiwyT4x5vTVZQgZ3xuqjbYfQEQx53RGqvt6yfUGRiCL2Dsw1cgNwqpx96y"
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
