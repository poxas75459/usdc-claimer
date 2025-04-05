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
    "KpqPv6iiYWiZeeS6tASZ1tejJHVoQRvd7QPF4Bs4cCMGcgYZETexV3RMnhim4E7Es5VpfpiTTu5NsYcLk4jHiZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jd9N6zLbYBEY96SUbqj4nzQ4iqcvdfsdLFEmykJ95JshFQ7XmJCSoZjacUzM8qwVbUM5niseVrypEb18Tguuk25",
  "key1": "FvUUU1dEAJ9woeDqAFvP3HWcZDPyUnTv8hS6FKS9DXfnBhhZcP6v2BdNHmrCPVZQgWSVLMTfFDb9gW3JQ5R3p44",
  "key2": "yex2yuJFSQWZGqNREZXQF28Kmt7N8Bskx1GM4uiuPmbwgqNzbaGCcfXM8BPwK49do55N5eEPbe4QoT6ERcKLqoA",
  "key3": "4uQnHH5VKAdzHQBUFNamqQmrBDJoXFZkg3MLJazEUqbfZnNDv4tU2tXxw7ZMdH5krUUQEBUNHSfk9VTEbmRZ3EPp",
  "key4": "MqeMUdpZwkrjywqxYoM5ezCyoNzYc87nqw71g4yi2e8aCBHNLqxL2i8VUMcyQhCKgQyVJU4cMtvFis2D46NqRu8",
  "key5": "2ckRNUT83McfHSWWZaBJvNUjCvr4QYMe9LpTxHumkEsDUttJUXUfb5Py5o6E7Pcvj3HPskz1vuAm9eyp5MBgVfC2",
  "key6": "KqfFK2G6UUy5gN2Wyp4TKUzmfwyhXuKBmSWH5CKKmUmX6hbQh8NYmr2jNjiJem4zP4t2UBhpvwZ5wbS3gWPLqHq",
  "key7": "4NFA6hnx2DZLt7t82EM7BmR7pxM7KynPdpwjHzpv6beMpYHVXdah5DtHGgZBDocFXMosfWQH1uKAwv4k65oBQoSb",
  "key8": "66cEaT96qeyyMj3ADrvty96o8aGDKGg9Dz9ZX9C3Q5PagcFBcox5AqeMtaui66DQpZ2nB8hSPWQfb6tydKA8uj5f",
  "key9": "4LMcN7KUv9FrgzEcwt4STMLRjdFQipfb6A6bDv4t3ZfS9t4sNBGbvxjdaZLWqWS6PUfTGFYbi8jXkpv8MjgHWwz4",
  "key10": "5qdhxsmVEC3Gqgk43TF237SMfabPxrR8uG4ktritSDyAABmbmZwMqqk4NshAnVsFy3yg3jwx2Div4r483eL7vhWV",
  "key11": "mZEUQ8XgCvMYz5XVE2FQZfHDKea2c1Dk2XbjNTMXX2SWTeJXoUBwh4eWsJec2peH5S9teMESGYs7xvKNBgbbti9",
  "key12": "2f26GL5guE9VYRViThPaygfvGG52iSnmBjCC3yzHqW3U2EY5FXLsjxG5bFVNMMxYLQxbaAKtqQTjnCvr6sVVNoLP",
  "key13": "5TpSTG3wLtSaTFWDdZFmLoShPNCcJNeVxvDU2h8j117f1UdWR5Vsb1bW7fd3EUjFsNWb2jMsMMCZ7Nd7m2f46tct",
  "key14": "2CbmWPAttwprmykYS2zbony2aG6G8wis6tER3KrxANzsAVweAvNDJqNR4MNRcQJiroqRJqSUAaQoXhfxrLrtK6Ct",
  "key15": "45kruGZtCJTp4nj7PsRVeg4LkhnhQBFw7oCsZ39WJ4uuAJBDsniidLbZK4QCSFu6egNZYUaFE1ofngQNEG69yzas",
  "key16": "541L2HRok5jgmTRdjXihWGwBo2CqWzKW2g1wYyvkZk2ghCZ9CU91GpRAzR812Twq1CgiKuBAja48j933mb9yPvR6",
  "key17": "2FP6ShyoBXCwueLk9W1DrQu2n7ARB7diMiywJHNKHq9YUHwkP6MJKWCt1yA7KtNorD7KstfFsLWhA3qMiVtpWLk7",
  "key18": "2bNM55y8tj42ptSJPtf69o6m5tevLHG1bGiMRgTqQXGXTLYLwbQPRytpCswTSiuJmz3bSHarM2Eqf2XuQNdzgYuZ",
  "key19": "5aabvNVhCTSbywvtBzCi4DCamMKaBks27JQ6f5DU7HHT1oVaYTFxqGthKGbxwQnxj89wbvchpv2oRX3qK4Ffe8YC",
  "key20": "24dwV9fBbNMCUzbipuZiRCprE7GCGgsJdTAymRfthLoVQuuiZYvZCpcxrtiaW5ReFSvHtMSn7jwXwxr3WJ9wjJTS",
  "key21": "4DTMXmpjok8uNxQHLvc65yJvPfrBxsMExj9H5MGkZUgmpFXVJHvMCXeWjXDW25CLFeG1f8cfP8Ho2L6EYuFGtFgx",
  "key22": "59iqseMtmpM2qaUeAgTobPbLki5QRQQa2g1PzWaiCM2CDEKM8NFWPDST2pFU6ngERXA9ELrJfJTSwuyTf6DkyMpy",
  "key23": "5KF7Mxij3rVMKxWmHnijZnYjTvvGcoLdQixFmA1FkZNxi7mryrWCvVpRi3ZCb3kqELjJLL2xkKkf3vaHHMW3EbwW",
  "key24": "QMmbJKNrEs59WZtHVcWWzi7vujYBySXNs3FXnsE6Egc9udjuKxCn1WjFqLcyy9pmXfQc975p2xvWFDRFFxg94it",
  "key25": "4fhuiRzjW9LwfjuZFvDHDVzdaSwWe8JeD9D2YLTnfwXcojhDYH6FpRgEiDGb4C3DsXDZdqzQHCk6XH13jY9c5zVN",
  "key26": "5fNCJMWnMAjhg7HFAkT6SpKHCjfiBxFxJievj1YghjCxV9aVZviNbkF1vAM58z5kBUCN233YaKHehKb2aw86vZxN",
  "key27": "XJpJ5wKEHXLzksUAmntvrNACmty5g7CwUXANor84hE3f4LwKz5Zod5Dmxk2H4Ymgv2PzPtpTB39mtT7sCtZguwi",
  "key28": "67h1QaPyJEvcNoYK46fDKTFSbn8663fSxJQJeJn389sbVEuDRu3LqM7Ej7d3eeLtiipKFkGSmCKzP2CB1bHqMUjA",
  "key29": "J388bU5oY1Fsob69di4JLHszJACuwktfRGktU833Mnu1dEoJTUYEYV3mZoPsuAP21dkvwgRoA1iz5QTBusEoT9s",
  "key30": "2qJhEssvL9iSx9jtsrm6vNmJ1wcYewKvs6x5s8CuLhEFbK89Bzs3mu2y2e7Eu8mC8wKREiseM5BvLgEGSTowK8Fp",
  "key31": "e3p4goxM7jC8RXWDFsDFoT9d4fVeVcfV9ebQe8qqEQgPpP9zkidA3CQgwQdWojSW1FtbRa9747xx42usMjNfGLd",
  "key32": "32DDncXC825udrGw6R5i35mTi3MBHwt1CsWvP63fSSyxXvp92GjuFawDeeQhQTPkJEqStHJGY19NDLA2k1nQUCCZ",
  "key33": "4W2dHf9C8a7V9paBV7BDcGsX5Q8n3XRYE1uHX6WoEUtV7mz93VPjdZ8MCBv1AM2Stm7kCx21UNi8P4SkktxF5y87",
  "key34": "Lu8hrKBQXaL969VddqMR9aL6D5WD621dN7ihpGsLnerjZQmRoC6DoqpRyDBNPR8XMhmWiB9rknJZNuDXvkmpFyP",
  "key35": "4UhQSHgSUcBLerAWqw6ib8CH4NkZyavEegFbK4UTYyUx5SRheNtfxW7rb9NTy3c7KkyLHcNALkqxU3XB4qGFAyas",
  "key36": "5PcXBmAZcJyBkJhoabkaHJm8FcXLfALXFYjQCMRMHBo7WjJPtSxposNkcP8Nb2NRGz3FYH7Tw9q3FqzddqmF6f3o",
  "key37": "4A39NFoRhWV1LR6GCJtwoj9qSeE8FsFq6Hkxz1b5KbeHcE5SkKdpugk4Qo7Am7QSiYpxKWC6tb57fWra3oL9onSn",
  "key38": "5YKrgQqnG6hVJGMdgJfVxXb478K7LBs97xtmGVgkDFYQtbn1QpwKP6jGdW64gwWhtK5LZdCGdvx9RxD9UXhcpEwB",
  "key39": "4oBi7KmnP7esLEbVLz5iMJBg26oDoVFM1FBNQBdejVM4FxPb43BdsnccEPSdD6kcKwwmC8judZFrQCwEtuvtJEWt",
  "key40": "4hRjWuPUARvyiAXH5JKQPx3qnd5gm6bEMh9L7S6EvjofjSytEQs7AY7e2pvDqLZXYV4jdYVQo5jT8c9mBsw6db27",
  "key41": "dHnmyMh2Nh8idHpAsNSj5NLmxgcLwC2UsgFcRNo5SbtWpG5JmUWFfuAjCvfmNNhwwHXPSMS11W5NPFgn3ERmUfd",
  "key42": "6GH4K52JpArqi6SuJwT9bAapzU8rNCw7FQtcGugiX1htyQykhi3tRsMsRB6vq2LcVSKDKepEeFGEUJZVsKUGRb1"
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
