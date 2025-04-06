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
    "4Y2v8pxUqNwALbPtpYb6i8Lbfqzm7oUUavepE1mBztAG9ihivisRgxY52Hos1rr8zipfff2XGGwfARNofpavRhSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UxkQpHFqUxxgYCsTd6YAHjwY4B7CgL6HLsYibWCvfN6MWtEnuZv5dSBqkZBsje6gF4aLka6HShEdSxUhYX3QGgV",
  "key1": "4iXj5q8rs7owhgQwCSTthX6U9MPR4fZt5eS38nGrdkojiufeYaxVAQXPkKqkopEUTgTxfQnjGEssKtVKisrWM1Hu",
  "key2": "4W1FXi44qD7y33kh3R7wXk8SKtuZ7bvESsAp2PJGxoUDKYjnnYXNJxsgoiPDKh7WTYgHEECY2VoLQWfhiMR2SoE8",
  "key3": "QPutXzAxumth27WSynQexxUcGRDSLpaxsTR9udLBGFWPYiqGpvfA3Em6LcTYWro6UGVuESUSFLgTesk6jBQKhUC",
  "key4": "3rGUgeR44wAnHYdtbo2GHshGEELLoJ7LcDjBmCYCWkKPvshaMi9YzHmd29WQY9rrtxHr56L4yMFVGJtEYkJkVi22",
  "key5": "5oBF3y96od9kSXNB9RbhFu86sVBJHqAjkmoKcNFKQJp6N1CdXjJbEPmzUp2ds9pqDbcrXMJTfNK9ghsA34JJQ271",
  "key6": "44gfubwipi8Xfs7rCphRqGUhVfGMkjk6KRPrCVnZ3eUnqr3qW5YAPHkysef3KMFL2AbQDGgqJzd9PsrtM4ZcFBG9",
  "key7": "2Y8PZWxbsACY9fJjeSneRX4iZSkCjZTtRvKqLwFzHSBRCbsBY9YQ5bgVu94phnD924PPkvRnKbAT9LYjm2JkUg2E",
  "key8": "3FbpwbdHV7YCK25nHgqZK6FDDj9jhLPjYzEy5bzMJuupk1aAyWCph4KdGS28fgxVtDJRB2SYJZU9kiiek8d6gY6",
  "key9": "7h9CmYswVX1964uPuNbVvYgbVyH8bfYoJhqrmdHdrKE3DHbMz5uqkFnmjGcTKCThj2nM7vmTkC7GBvtkuHyEWT5",
  "key10": "2LDtc34enpVMDsnSDMP7PEjbRuZFNJvoty8gG46SngCA54cPxJNKU53aqnHkZDBYjze84TbnYhP8Sr7dHjFojoFn",
  "key11": "5hU5EmFN5FPTfecXq1h3wWFNfkEm7wuWiKTg1TPFSgeP8wuAKCbH8c9T3SXktasmcuN3YqZkiX3c9SJ58sWouVA4",
  "key12": "3eEXjSqiXSpVWu9KVSyizwk3ikRMfAs87oGWTJXeq5kai15iDZqQx98cXwr4pzKLkg1nVsmc1RhDjQpG2T37img",
  "key13": "5bCtCUBYNMHXtjhSfRABNfjNzsKReVavN1ZGpjP3kpxnyDC5YcLwbomQq8Zf1jofRJZCYMnqRDTEJN9uvq4kjQf9",
  "key14": "546mWmQbHmib3Eq8ia2oGF3cawWtJjoVA7wmhzDDoQ9TMUeY5Qiz6QbAqZ783qzxJ8EU1vRGLGyWvMUxnAhVhfuy",
  "key15": "5qHCLshaMjyQqAqZaZZKuSeQhBP8Y4EpmGzUHBNyVSvnVwukLtvw9Vfd98xAg3MrCWNSD9njM26iEj4FYLe8MXQt",
  "key16": "3j4xU2NAqr4iXpF5bnGxgcG3WwmfLcwaKV5W7PjT1YGpcTqFi541KCYHyggz4NWkhTpq4aD4RWBSUwyy2weEF7XB",
  "key17": "qN3VkcChXSLMNJve9dxYaBDjsiRfd7ZinBnCQTD16P4Fid28NThbmhdbyJL2QKucWc8S4rP1dS8fZHHSomTEUyZ",
  "key18": "5GNuFHvAtgbQUTt5AKuGUuQP82xf7E66y6bW6cEiCbBvpz3G4WmQTnUywkZdfeFLCZbWSA7AB4r2am6DLpyqMxrf",
  "key19": "5BSmmdZL9jDku5sDZFXmeBQ2p1S4rVcZ6mB9h9n4Q9BAXwre3LuSU4n7asdDKaCo23SRvS5iifza2nawmesy1t5D",
  "key20": "5SJFsGMbyoacRin1XKgzLikrbRmnzMB4PG8RvkzhcUWKA4vwFMqiLn3C3EyQLjhGBPe7fxak2zyaiFWYfX6xFFny",
  "key21": "4QSuMYCMa2roTFPGX6Cvy9N7QV2qrwprM2KZfx3nqh9rcmcKSyyEVPX6BK7t72dd9xxbMrUo45rrG7fvsUuMh9wt",
  "key22": "T4no4YdEmgEoYBFuCCwhu3kgxB6YeJTCEv44z9VJCYPDwUWqJzvoEkBgbHLFbNpADyirSqdCaQ32LbiHDBYEJry",
  "key23": "2QGheutfUm3vm2TWLeNoKcKWhBqpR7MaZsueUQ94MJmo33nrMABRFwm7qpHyayqN9tmJCicFSyo4xmKEk7PEbKtW",
  "key24": "2UisxGEb8dwyujVMDEBjjqM1SeoS2Buo1of78FZTrCqNiMTnZBafEbKoxPLWwyPKW1HUzcpueEdeRZmLsytahfsE",
  "key25": "2nTChVnVQDLnZZfSKtyxsP4GVaP4VGWRVetVskSDW2nVjzy1L8wQTM7ms8x2VfgXNdMye3tQPxYxNuEUVRG6w7Q1",
  "key26": "42F36AMgeWhRqP7KzQBtNYNeguUpwGPagj19uF5PaPs4A3zKCSAHAS4j7cj5yQFEGDBzi4BsPX2nM7caBtvxagwp",
  "key27": "4HFCrWG7cL53qGd8VDA2DbMrGLY2UiCJwZaM5xwWK1KMobwBFR3rzAPd2CjB7fURFZcsSQzny4Bv2qHM16sS3wFz",
  "key28": "2jHtmJNxrLAH9hnmyCHUEC4ZeBn4ev6Av44cmTocd4wyZgdtFAX7TmPBY9sxm2N9xht1LyTWKyRdd25uUfrxZwNB",
  "key29": "5Rjnp87f39Kg9JA2ozn2ih9FvmmH8nmhUCtWB613Zkdbs7j25i3eW5tPEhp7o7gcLrkQTFMGsAZ5rq97CE2qtDcK",
  "key30": "zxE4Hkw11osMJ9Rv3qsD7cXtxHQRN5c7MqbQpPjzTDZSget11xYx7KpfnCBrSvn5bKZCkfDp5Vjw2vW2SbaHPDr",
  "key31": "5LtApkM6B73YmAdheMBv6dZkpNgzK1Q1fepWqGYFjxEFV8PqqhVSFhFJ34jZxFVd73V57vP3hxt9Si4BLqwgtQSE",
  "key32": "4JCavoq14z3Uh7TMaVGzkGku5x6uyU6yJWP2acEeQXDvAht2qMbrECcHenvMj1Pdhaj5GVJuRsduGojLbVFWC8eC",
  "key33": "2tZKGyj4zwv1FEyGoTw8jqU1fDNf62ciRgNA8mSNfegzWqc1EeVmMvubq2CnWwkuae9jU641g7x1hMR2D7SAqyrZ",
  "key34": "43bWZJJWhhWBauaiFs3nGboF23T44UACJU9w5Esxq8BH4gznXsDQM7GcWWESTcgPGTv8u9J6Zzw9cWUkrp3WHETN",
  "key35": "42JRmqL5xGwgLgiJXQqm3vjCHPtvbvryopCMnA7NywYgrxwicdFyKX4WNftgseiWeL4DAkjZiuPqJSrFGK3FbRmV",
  "key36": "2Lj32rhD9ujJntNsoWFu8RjA7q86pVqLkxwfpUmkwFUm5ZfQRcM6MVQARFrk8Qqxgpf9AxYHZPPmdMwR2MBCvMdJ",
  "key37": "3TdA1aGHfU1bUs5mbxYFc1mcmfti1b4uYuvAWR2UgErdQz7J1L3SmY5fy3b7dUPu6qHXVjdnTUukiFDSx6j7L7v8",
  "key38": "2ouQQ9NSQoaNoVXv2Rs97CWZzBFX4DyG6Z9j45eR3WAJtAoQSotGAB9i4hVVWUoEaeULiBzwH671rUfxNYBdVNgp"
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
