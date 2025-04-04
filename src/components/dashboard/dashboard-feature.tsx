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
    "Kk6MMLF3jFEXvrbsZTjjp584FKKLvTnsuhB8Z9Wg5iioPNZmDhZa7JRBTVijuibZjNxp3NLbu4eP9FKb6YqvDwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zQXPVauCZjFsEoDFoqwtmaHAF7b7RH8PmE7fohEid7eT7yp1fiKuPT8hTkcXMZfZT3BruEfmhifKuzZWeC3SJc",
  "key1": "5FU96JLHtuRe8Tk54u9ic6KnUWkMJfGqr5P7hPUmZR14zbuvhVKpheB5dkXBP8NytKmW7T3UNsHByxfn5QTfkWaU",
  "key2": "4AvfwmvMeCDK8jwWxYMHQS8BYqMiFHDhaxE7AZAgdCAd6RedsCwtKXNYm8kKLrC6AEeFrNaRoM4ZbKH4j4cpWo7W",
  "key3": "2qtHfHVNDya16mFGANbUewMjWSoR8ytgkK8fRAPaHfVKpS3HUDA13Bgsc6za7Aeg8EAZ69iXPvdRgEh5BwvAo3Sk",
  "key4": "5rJuH8tnwsTZLs6xKHoafia6Z4abEfrfK69MhAQT9yUq1vbRoKJM4psxTvBDDYjmimWUDoTHLPS1fYCqH3oV6LrP",
  "key5": "3TPW8FAG7y9ybeJvCQ5E51KqvbwGhDNx7vSfDmkiqN5uPcWaZ8Lh2gJuFTmdSJ4ra4jtY63gbEHwaQYt8MqAQSmB",
  "key6": "JWqoHPwTYLydRBdzSo3fxPcbvb17mZDYnC7YpMShNWwNxRMpyHKUrV4ZrYbuZzxm8FuyHHuFiL9fhC4ZEt526Jh",
  "key7": "58Ly96DnnpFKgkGdgc2YzyUNA927P39dGmCcr3y3i9D5nTU2UMvuVcKdmY8B6Ev82boSVGuY5BAQKD9nUP5VzkFT",
  "key8": "5c8hdL7ZLoMaD9ZWKBY56bN5ah8sZURShqVeutvTPnjffbexynDSoi5bSedH2GH8ZGNzhhtvynjWwaMs2TtAVqq3",
  "key9": "3U4wPcRsauaUp63q43FAAXy9DQFLNGQ9a6a7zRb6YqWMp4cpUbtnxxRrAScc5CtCWWA9ty7KMPUvZpaaYGEhpzKP",
  "key10": "5XLGVherEs7H56eJWBCfAx48GT76WKNHRbhz6NFXX6tkV9ib35s9P3GqFwqnAzpXLvY41xnS37s4R4CLyJojEiHq",
  "key11": "4L7Hk5DcQmpMEYVQmi7ejg2TUP1TTpihTMmmExYeSu1h5dp4dyetHbR3mcgwFfM44m9U5mKNvLSAUDFRoWVPfJCR",
  "key12": "4EjstLrwATMhZVmDf7QE9YURPmLzkXbF8WVo4kocjLg5JxJwB42MbNeBHPtFgj3aehzymqexB2obivCXrKzLBM8d",
  "key13": "5TpWhQHm8xbHk6vDsUgtobRgyZP6Hag8AvNUdeY8z8e1KpyDjiKUH5SHUdtvjA8sQbCDjLFnPcumCJcL5kQ4Jnmb",
  "key14": "5VVzNAvxKpA9UFm7FBEwnUahZF4cjj26ivKi1Eaj4b8muRYTnTrHFuvdFxzQdKCU95Bmq2aYdX7Hro4d4WawDm8u",
  "key15": "2CnoQJ4N1UeKqKL8bDTZyAFyU2vUhVjXPwEZLSHaoU7tpWKRzAfrPnfyUwXwSe8uMh3evEeEDtPLYbZjjG3pwsyy",
  "key16": "cYyh5XimFsE9CiUNs6kjVvib8R5tgCcsEs8sU53aeA7k114XF3H6LXjGsc3269RCUf5PbnSv8TYK3rhBAhoWPKW",
  "key17": "4ADKZ5E47UjL8tAJ4DPurLTKWVNptwyPzxReW4srZTHfUB2M5MpgmcC12KoB4Xffcr18i1Q4x3c6ygVAyuiciFj8",
  "key18": "3dnZAuPJ8Y8mgHBEcjnTUAuEsJNsgaZE56SnLmFXpkEv8bKHxbVVjjwEsez3j9s58jMHqTxSepoA3YjkMeR1zoHA",
  "key19": "2yFfhkMF1gPxgPo1BgKZqAff6uPeN9MdKuLeFewhvnsQR8vwi4SYft6qQaM8gYv8LAqwQqNBrxTtCDgXfmU2nR4E",
  "key20": "N7wpuzM5tngMGXwYjjTtky61WK4fXZLc8nUMTAsoKLUA4gmvhawHM48sZ1KHZDAjfyTdGLPu3zTmzQwMFRABcq5",
  "key21": "5S8MRm4EtxmY4PHBLiUEGbpspbjTWnSCw8HcELucxCjeDKU2YiSTJ2usQxc91kXtshsM8THL8NsP6WX5sYx7K59u",
  "key22": "3UiMUQQMQVUtGHhPBdZGrYgZsDyZZ6MTLoDZ8DsxaUxChtNs3Lp2dUciXKV8wcCcW1r6r2JJktkHBrtFgGHuvk52",
  "key23": "2iXaksEDWtbNd4fZiQ2nnqSUPYKMT9fkS8UvF8kUgDGnMaR1NcWShkKW9p2R3T4tvrD8nNgAimZKWo2wmb5Pip2x",
  "key24": "3TPHeoqE4k98QkJ6K6FzcF1VwSu97AYfzRmCXQAWBTu8tes3utSEqk6GDu3yvDiN66RPWKqXySTrYgweHXPXHQAK",
  "key25": "2Ae3hK6t72GSc4NXvFBMzHsWKZrNfwz4PXemp2yTHMLeGtg7T58hf2LsusHyUeTUEVB5TrNzD4zb5Ex1ix1LqSJd",
  "key26": "3g5WHRqirfQAJYNNgnhg2k9qZiCkv1sEBLL2a29AaP1pDYGLGQwJQyB7umZiPccpAH4Wb6KZT1hSo1BfZjSekC87",
  "key27": "4ff9pPu9zUBj3i4Ez4iYT86oW8ryfMRqMJMqLHJufzcjrYKttLJbV8KmJ9z21cFzyri2oDTNRfX8UwW2YLh69x42",
  "key28": "3FXCVxcWt5uXSp8sQg7yZvz8Jmzw53GN7R9C9sxLnNqA4dJuVuVVeANHHM7JteTR8pWMawyPVp2dzhUg8aDDr5uZ"
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
