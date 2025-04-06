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
    "TqKpuzyJpLM8tQRVgK7unjv1PoMpygK7swM7VQm9USXH1ydFEtCHjW7q3ApxjxABUKERjhtuUvEERwAEdqF2tPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34KbBMkZRRBPcY3FQUarKc69d43sQHcEHhUDCpu6PqHRjpaGBc6r5wDUCQYk7PUqSCM4WDArQSu3E8gvkw95bCEv",
  "key1": "4RiTseuy9mfQ3BYW5j2XxgKiKtDHeY1CEYn26nzCxqiVysCAgSHniNsB26PbMECgbqQPZds7XLYrm2Ahug1je6QX",
  "key2": "5a5ZrbKzEp4ymxyEXLWxeyS1HmtwW9ew2r4ssgCgdjV2zoXhBTvxR5qSKRBHmqbhQhsmkqeuC5HpSqghecCFcECM",
  "key3": "3CHXCsYihuuv33UpJkAxdFn6H6BS1TBsjGt4L7DEJiC8yVZtFbcb5iLnumfdr6ibHYAWLwXkoKzBW6iyx8hHZtCE",
  "key4": "2dnvGzRcNw2CwBGXM46RuRLnAGP5hirq5qr3ggVTWoM52NhqQ7koRvykHnTdFQzen6Sso2rvH8oizZNvGzThGvn2",
  "key5": "5DBDyP7FWBpR2oEeSQKqLZnzhceQDfW62bMa6ncDkuu21C92JVu7HxAzN9qXdkUeJ68BPVcjv3MtezPaGbYm6nQH",
  "key6": "4e5qJ4dzdcc31qU3uzV9qhNxNnCsdA86snTQ7cQhuStoXwSLyXngyW2fFmPqvFD4qYUbheBvt44TRhfrsQnGdMo2",
  "key7": "o1Uuz55FMhBVBYmWhQsE57myQByDFAwA7QQ9wC8dnQEvNcFvVYui2eyjH89ym2dJJNd1dU1BkhQo8rZijErLdg8",
  "key8": "6Cd8n47tz2wp3Lw2MX8j98pUvsFndSEufYY25qizrc7vg9H8wQGUB1ZCsugJUi2v5bSrzuAAY4a4LoCL9AMJqDJ",
  "key9": "5Sfb7UFwnC6LEu8cJr13ahuwVKBVi1iQESrDu2NakBBR2sY8usrN3YSsw4YDjGq7T6wzwLrvdrj1Xnb4Hyo2KbLL",
  "key10": "5zKFysfn3k8GzEp2xjctFuk5aWcEBYc8aKCz555hgGpCW7G8gzZeThJd7NSws56M2npMw1Gz3Xsfkttgp9fMwZrR",
  "key11": "4hykQwPxyWTjcywXrfTfvqkdjnVCfg6rdknNq4vwUDhKEtepH4qoqMRCH58p5ReDPcW7MVEWrgrBzVHpXUbPGeWQ",
  "key12": "4sMHJf8RhHK4cdKdtxLCGRsVw2qjpoNocCEUKGrmhFyPcfvjCdA6GctyLRLv6GXXzbEWNtyBjVGvsHs1GYG4LzTN",
  "key13": "4YrsvfbqYJCq9SZCGMiix3tdK5GfvUMQEfCiLeytiKHs2YHUtTWUuZ2AoSxiWuSMZ3XDqEef76ig9cmgK82nnMmb",
  "key14": "3yTDPBTXfmLRjpyYXdL1BcMae3ZfDhke15UY2WYyPX8KuW2kxK75xiwTiBPuU1MUnCyoP4XHCMys4n8LjMWtpng6",
  "key15": "3FJzWWq9YsTnWagiEPxCCWAx4wEgYP4jDJSGWmMcXpdQisZr1dRq951G19r7hZWqG3wdpz27AuEyPiw6b2QsY2v2",
  "key16": "3U1JJnytks4bD5W5Kvfx2Zh2EAqCtcRcPShbkGpnqZt2NV2S4DRH8Y6BWWff7cKFR8EzY4F5hNxRfaqS4aXj6erD",
  "key17": "5tgts2v2NgGDXyRRuBXozb55cV4nKnEFQgHbuboHFJxtSGGSieekHbWDdEBhYL7871eNEA8g2fvBUPbC93gHdGFe",
  "key18": "3NeYqzcek6nmgxMYcuPceu6Chk8URX7Ai8yW3uaRRC5Zu32yrVicCXm5Nx6uMtuKuXuJagdCfjodq8uMYeEzoryx",
  "key19": "2ndqvx3RUE3smRNwJqxFyKKcLbnKjd9tmh562BFgGj2kWHKMX3g1DvGQ4TV6EhabpWsjKsdTkCckRCTw6nHR5xsA",
  "key20": "2XbjMZu27QcqT5gJBZpfTADXXFMmLXGw6NTa93xnxJWoMf3iLKAFvpXAeuo9xr8Ng2FVUWw3ZoRoZUx22ariHJwy",
  "key21": "4RemVekNfF6UEoNxxbTCCrL88AWf19o5ow4eUEJFuN147tVzL1hHUMouEPRG3zfNiMhB9Rjpg8kpNHGEHcXxCMb5",
  "key22": "oxuHFxtmP9RE1iXTbYwVso8rEPDCgDCXsCvBXS5aKGSGE8cJLhHoHXGstYbTxT7xftTnXaYsVehJ5fXjMakFN4i",
  "key23": "4JxxuSaUdZjn3d9L4eFD8QGpMCZcNparXC5GAKfk59yBa7ZPoUx6PH7hpSeKK1JkjK8x8ks2n7gmbHmQ35QqcXhv",
  "key24": "3KexrjuN3acpfuuzqcq9GmDeTwB5tG2qyKUT16T3GpL9YhKWDsDTC4y7DJzgVEQjFK94PeoynS3tLJQpdmPPm8YL",
  "key25": "2ig99PekojH3MirW6PMqx3n4ZWPqPsuAZDK2d65Sis3giTsHAT9TBQwBwVLYjFt8GnVXyVGwSW1BmpF7f5rnErBA",
  "key26": "yPzjGtmWdV9JksB8PjPjxULpMFbMVDDaB9aCgRCeB3A4hpM11kFSZPxjpYsVa2i7ZiwQe3JskHobC7cdWe79zAK",
  "key27": "2Uzd82VPzmcSDmznh4QcLJGCCRwapHrVdQkdRVK1WgabxQ1YEbHSXKZJ3nUaX19bGJy4xza1HqnARLzfkbc32osy",
  "key28": "5JqLEY5wFSdLK2sEY4U6zDiGmFfcLdJuX4Wt3LdscgMQwvmpiZ1P4abNdfyAdYdiJxpyNAnviyCU4mTL5X4vXTw2",
  "key29": "5xtGE5TYYzs5Lp6QrBh8mbDWq5Xme4sU8bmfQep6pRjUnt2JjJaaNPYGscuzWkP7ScvwjYwANmkdxhXxJy4ag6Lu",
  "key30": "4nUj1M7RwADyZ9Wmfc1aZcnhf8qzLiNJVGjWyENZLwHwJDgf1BTedGhTMk7t72shRhRwpWobdF3xLHJSf2ctq72c",
  "key31": "2MVRrDrxNegc5GafGfwC1stnB32FZyBeZCJnTymenoQJDJvYUnDWqsPCtrVbjn7eXavz6zWK4VSG4t8vRTbHk8KK",
  "key32": "TYzwA3h46aUEQ7SSznsxFLyMYpD9WQuBTA3hCegnesUWKVcvmGPdeJf6CWuceZRcY4aX9EDUrcsoG1pMEmPYHgC",
  "key33": "2KcaoBFGwhQTFAZgZMD6XcauPgWRKTrcZE2fUEp5xXmmvtngouduqTCmxDNnS2S3FaymXhi9VuWk23hrpbJHExu5",
  "key34": "29dgA7XnE6GPDMzQWYEkVn9aRsttvkPf3X4KNdZn77MPn6E6cARcPZuJZwzgq3NDcccxkTsWgznaduud7P6KPmqT",
  "key35": "LXdrW6F7qYQJKvGfuJNbChJsB5iFSh4rpULwHePVi7jpnBnKymw5uoa5s8D69kZ3wB2Z69xBsTRpRgv8s6C43HS",
  "key36": "5vtUYRfbJojV266JR26TAWFTs5Tm8DzCZHfGfYvj3hpFg1T4jsNWfDwKDW5BuV2PKg2xt6ZC8N3isRzQeGY6VgqQ",
  "key37": "2gkfqaUtwNwoDSzuEFMSsoQJTd7DxwCqMBZ6ZZzLyk9GuggPhZn8Eczji8FwcPKQN2WEeJ4EVh1Et4zPwqTfgYsB"
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
