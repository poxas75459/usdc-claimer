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
    "2ye5pXL6hFuFm5xNLToYnitjAutTYebJ2rM8byzzd19mD8dDEXmxKdbKChfyMtPY4xqZegZiNK8Byr4MHCUFCqPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nMNZvqeMQ6T93xVRMuvScf8jQBFJc49oiyNhSXNExb4w8p2h8NFMpPXCTJU2HQpgyb4Q2vcwXbqBmzeTL9n1JRs",
  "key1": "4ZC123DH3Y5RWeSrAjJvQZ68vwwLqTo17bBeY9h3iL6JBvy17v6LEyLmL2eGvkL6wRa8uMLEkqiVjAWjesUsA7L2",
  "key2": "3AeDaeJ43PEz8pM4fap18VTeZQszzsfMzZah4DzDKeRV8Asx2oYyhApt4gSDogduvAjdUhQxHrM2AykENBPGHyay",
  "key3": "53dJpmW6xtnUMWnnWFFPGTjbdLe6eoS51w6GbVZqfA8kNHfh8h8mtBsaCqRrEtNV9Tcjh5jg4F4UHhRmiTd5LywN",
  "key4": "4WuhAwb3u5jBpn2VUerdPzoAvxofDksfaoAFEdtA2mAmeZUYaSJxoeBKgjrAt1KhGVBcxz5QaPVXgtt4VGtMbnha",
  "key5": "TniZRNsfehPveC19oYqkhoqgJ7emzza2EKUniXboi4UbvWVy37RGWdewdRrZT7NKN2qxtaZDr3Df4UYUyD8ghYD",
  "key6": "3tRMPQjYWH4888H8YPLBQyTYeA76QR1Z2Xr1CAZ9QkHKASsXKPqeK2fNgaNzTH52YPfwn6SCTbh7Zo1azb7dYCGq",
  "key7": "5XcjLH7Bx5AodAR8Cp75D6uX52r3yM6JaTY4BsBUjy9o5X7kugRH6b5ybZ8EomGG9Ee6Z7wgdGYZ9zcinDhmp3iK",
  "key8": "3ZEtvkhUq2ai5UMz68T2z7jzHjF2bs89EB7WfRFYoRSG6f8rokWdjgk81WGQdBrfUV4cNQz613rnFWiRRTbMiBjY",
  "key9": "2uCri78xx9zjSKtX8fNo3NBCcavtftwoTJrQzCnxJGfbStJLjjFkhi1gJ1Nwg2Fkd38gC3fYeqRvSC65ZT12bfKh",
  "key10": "5DQzat31noDcBtR3aALLxfaGqX2dkz5EDRAwCeDjSUdeyrtNaJogbxxmJNECv6AS3ZUM2jXE7Mtosdf1XpqhaeMb",
  "key11": "3sDQB4ZaRev89vpz1vieLQn9N6hjUUrbEQY3cxw5FAMB3gszFV6LXcu9UtcqXgMSXN8oWrSmMryeNsj8zA3PMT4e",
  "key12": "5Bj4zUoTAMLS4NvW2odLBezU7kzbtXvSSoEhBt7hJGgf8dTB6ArDwGFbfAKK63ED8xYDNqF3TUay5zUUqpav1yD4",
  "key13": "4uvr7WeomoCjG1BixUb5kMb9t97Zp4H4fu37LovRqpNcckHnXUbxMVYf2C8YtJxJsdF1og3iix8xuz2asbARXmd3",
  "key14": "3a6ycWjf7nXvidUyByQRG9YdXxqwAvVqRezuuvoqFQHttoY6MWn4DfG1cV3V4bhEqnVcoShYSAaptsZHpBvsrHNQ",
  "key15": "2Yn1Y6fwTQopdd6mnoDypY9vHUsN6kkH7ZqCYTHBhFYrCBndqDy7LkZvU1scVMx1G9EWurdwuMpie1ena5ZwF2Wx",
  "key16": "2eLqATjwcNEWQh8e2tWsd6oxAo9fAUmvaJAtPMKv3Y28UMgEy3RsTjnNpZiKuUDWgzNysv8mMQ8BLJS3XbjwFhHL",
  "key17": "4PwsQPys6Eyzhpz1ZMbYKdwHhj15jX1N32yi1Vvt5bJCwxbE4GevYd1o8dAbLP2fvy4cHvKo7CaKBbfAqGNN6P6x",
  "key18": "2nXpQZpa185CXnXsM73DYeagYLXov3hyJSjT42MyWAxtwbvqc1uTq7457qGWZcbjY81dFrGwnwxoWebiNLxhuceP",
  "key19": "DhL6yqDqyTcxDoQfdQBTCq1MotKcnRVmyJsbs4DUopxKseE6G5XfM4jbangemjfgiqfWJoUTNyzXsCRQAZxVzd5",
  "key20": "3TXvxYnAuVaDSmvzFMKqWNKmfg5y6P1kGnQLrgQrfrgJEM5FNfvDYLRcKZBpzveC8rsn1NSHfBHhQ8oLcP7gvVcR",
  "key21": "23ZAcbUcxBY2hq3F7CwVYo5e5u6ULk2Xf2jV1KQyakhjNtkhLWtiqFjjYUPmqDipCHSmBGwjipMy5HfaGTVp9MAj",
  "key22": "T69gEgEsBvixzAxRWGaRpT8dtWVwCjKgFgchmtFjdsq2rTH2bpdQBEfWEn4Yi3ueNvQ263reVBTHJKJ5S6x22Kx",
  "key23": "4a1qgb9CnBB9aMdd7x5Ub6pdWA8n5quBShupqA9R9GyvDp1iLcG27G3XWscP2Fgfu39ZXh1R7o5dGeYSPRj2Rtqx",
  "key24": "3wEYLfSYUMN7iDNF697zAgZL5pJrHhhvmM1YLHTocgiVNi5JQjUvkJinZB2NwhDGAdtLtcf13mowKJT528dML25S",
  "key25": "p997tFMM4HUxwUh225rextdCp9J7XXw6DbXVKcpKLVKrnh7ujjKBvU3NLzV2jhh7QuWKrQhCvxEMF2f1CcfJbdd",
  "key26": "4iKocHz9ChXCqku81uKeKT16bY6iwGE7QrX5bNy32N2Cjks58KjmyjeMpXcjMwLgvuZ8u93rA1eMD2rwuSspukgk",
  "key27": "2Yyf2Kvgr8z6XFQ4znuA9wM3YhAN7AiT3qv4TeeZYHXD6PPAuPAP4RGM5F9yT9agFNNDkikokgaUyNPnVWcuw7ga",
  "key28": "3VtTx55JN8SMRQheB5jwp1UALc22g2gHX2KbjKyeKZLTX5hRx2eS4GDYP95oK2BDQ2w5Sobv1DdpJUWoZCKFyJwt",
  "key29": "5ei1uuEywL6M5WsCEfFahFrcNCs3wTxHrc5xmrhRsZ79VW5Q3fApDzvnk8KydhDbvdEGKRcLJsP4z2WLdHRKHmbx",
  "key30": "2MK2U6do6qNpcSs4RHcDU9Z8XoCdn3QbBcq23wr66wW7MpfwrQazggWC5xKa8WGP9GdyKo7MDyxNshyUvdxjqYeG",
  "key31": "27R4xukaBr5zPrUYfnpDrT89r2HzsjBqNgpLhWPDbrtJwAPEVyfLGiS2TKFSoDg4ExS3LjCUpBG3saKctcMDxnsZ",
  "key32": "677yCR13yPtA3dxDANFtCxQAYmV4CpHrAtDQKJw4AjzL93tULfZZYLQm5s4vTbcaA5KuUhHf7RNQNJdMLjpMQE3E",
  "key33": "47WYwFsNcaLH2iiG3w4SPVefELwTmZ4vrr44q2nfnXqfKRGUazD7UQLReg1dMLWGKT3zeUGEoDHEshjGMZTfeHXG",
  "key34": "45NR8GGpPoDiKkmwbBbLjEBwE4n74coxtKgcn4JaiV9NkSuCXKBcPyyqMay68v1pPdB1Qwpy3wgMSgpdmze4Rj3Q",
  "key35": "4aC98xrHkcCViQhgF7a97nCp8wB7aZeday61Vw5S2nnWWwntz2hYfQcC8CzKwktwmwRnrFUbfpMvSEEuFhAEX3Z4",
  "key36": "2P4madNPf5AUrejjAL8CerPae5k93G7KadDbdYr7KRaDVrEyNJrJXKmgGiMrKMX6SK1cdMKC8tze3YhVba6oD8pD"
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
