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
    "63wLeroBYCBXDvGSBK7pqKyG2XgBTjh1SBmpbL57rjS3pzSjBaJmksp4mXbLeGRN4rw4Yme3CEkU8RDT6NjuKJg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D4qM17X7TeCq1G9RpWHCZsRvS9goNCeCULWPGY9EUm2GipMK8tkNWGtmLk8H7i1NzaZwR4hy4CJJKWm5k4hMaMi",
  "key1": "25mMYmX7Jm5W1a95RsZNKyRAmRhymCuqBzE5KBapA7WdfEmRTo2iBC384wZG1mbTabYnUEuF8JHCAT2yNHAHL4H7",
  "key2": "2RxJoQmaCvKFjkXSrDoTb8ci6A8ie7tDJj27c8R9vMm3pVFY9gDW1LLPrvLwbcYQ8rZMbhYat5E827B4ctZa4L7f",
  "key3": "fm7Y7tigjaUx5Li841URa2DXgqdWJQYc4YMKjXG9nQywjnJSSp8P9iqTcBnkpVqPekK7XGgotgSYLJtr53d4sMG",
  "key4": "5R6aZzSNoE1mHifa6byn5RVWARscRHXDhtjm17cNZ438HChLnBWQN6ThxRZaPxazxNsuEnmZkKeR4kwBVyit7B5p",
  "key5": "4Ss6JRnPtbB3yUc3L2j2quLQLmUgR5981JCxPaghFcXJrKXvhnWmULbztKjBFNJk8rugvxEwPnrieCSPCVdeAKiS",
  "key6": "4F4dDStvH1eUFRavAu6sjJwgnug1QHdegaaJRJWU2T8i1rygJ5tigjXBNZCAsHnkBiahFodKDbD5BUc76eynYmxf",
  "key7": "27w82qfyJNYZesFnw84JKvG5z13mkEpM8sspw7BaxncezfMTtpuJyUEjR2enfmFjanC7DPjHvpV3GXfXU59LwxMT",
  "key8": "62MxHedQCcPdK1QCWrky52mJhtQWRX5598nPpUjzw1DGTPhSMAHjKkxMukkdcDDDcY25UmUnkmvSzJ53919XJF8Y",
  "key9": "5mtL8zdmFXoAfQoPCieHVVuSoG8WFTzX1EC6rXzfbd2YGTumbtRr8r6Bco3h8rcZuRYr4oRDQEMfvuK22sdiLEsP",
  "key10": "3rK78LimcsntBDRCR217QFpjPJyAmk6dGGERi54pD7xjRrMQJLZaB12WsTQkVaUipUaSFdJunxyxj5EMc3Bt1CDK",
  "key11": "5igsbDvM4MhhNW3xTVhBBYziyJp2J5oJ4McjxY46FaoEfAtudtHUUQjjks2VFDmeGXwWn5FNfJ3UFWeX4r1sPExb",
  "key12": "5Q2KEG6d6cN7Zx2uYyb8YKtauxZQKcum2jUkhYWyVeodHb5dig3BLSwqWWCEHZyUcMWpF4Q6Fy41A61oMzphwVaL",
  "key13": "2K2Vdhy8kkowbWNRWtLZ1eWXGzhbAMyVrZZpsNRrnqSxG8f6EtgovqYxSTG9uxQqbDumM7e7myfDGm29EnrkfcYz",
  "key14": "5J5VKW8jaJ5P2DnUyEf6duJcdvZH9Xkgrp7RTgVciR2HtD6tubsBXSykhxd2V9f8WuYTjjKwDS2MxD3xCFSCbMMq",
  "key15": "3yxDe8TL6eNSWRckomkwyosogU3NiwMdFhUhKnxt2eSrnGrGVGytFrAvUAqdF7VuQzt8Xk9vAH3tke3ScADxRceY",
  "key16": "3oG6WsaCQTZA6bqbzmwgc4BP5SVvpV7jUoxN6KKzEwBUpnk5NZg9VY9tFPqTC58JeNq1uKTQsqf81sbpMxkD2616",
  "key17": "2sZHkokXGjvzfyGFR937NyADA63rA96yPLg1ia9LPa1D51joQB1j8PQMPu2FfgwdQk4fYBa41Lpa1M8Cnt5JVwC1",
  "key18": "4QAm9HDeUDnx1r4SMHZvF4MCaq3FUGgbJMtXmV7tLTV2vqistVX6Tj5BgkACvfoSQPvriob2i1zr3UTz79oz3ewb",
  "key19": "tXvUbqBmZnkzth5yF6LquDjyQWtbrK4hpQxikM7DjjpA2B9kMWYAEgoRYcii3zAQzF1975kYozvD6P1eykkUWyy",
  "key20": "3dCYtm1ptnov4j2CSg134MkidJXL2GsjTh12KsNoMKTTJrjTYQ7vjJWxjXpgiCpqafZTGsBaKFmZZxAyG2Zamwp3",
  "key21": "2AWUwvGMi9fPWTwva2YQu3221Po49h5RhQWEjNnGxcNxaGzSxQffSphBaR9bvCegdPoHi3Q4WDVLijoq6dSwdkXb",
  "key22": "cGggrZxjvmENeMY7p1gD5gYfP23W2G5ybaS6dQdQbv5LZe9UMiwEKwJ1XLQvJWsDkXDM4qfJaoYmKd1YH3JJjcT",
  "key23": "46pjvy5PCJRBq9FUADSYCz9wey8Y2zMrGrMdBteCBRHmLvKj2yYmhwCirW53YMmobfp72RWg4K1jJdp6eFyECzmT",
  "key24": "63wkSjJmRyFSKARSyFXCKtRv2ihiPNxrJoaRqzH8gWL8wTAaKxAsFdvFn1LhXf4nMK38XhniTGkhg5WviVKLdBxf",
  "key25": "MNrwz4zwqSYmHsxwk8sm7msuWF3Q8YPnGnNqFr9tTTG7w3HsRgS73UBs7qUS6orrrXGHfrDrQzvcXyQqZE3b3gr",
  "key26": "3yfn6j5dYLk6rpUJfJLVNoq8ge3EJzsR7QfHBwrrRUf28tGuXJpBwLUNkWsty5XHB7hfhVmWvwWreKghva9oRFHU",
  "key27": "5qBceGjvTYZtn8ztHchB9AL3bG9j3WQxdqg9HHgRmxhDo8bWoMZXqBajjyD1p6xt6HZQKMvKGJsNDadVrVP6Hswx",
  "key28": "3V3RsQxFpwEVpPrHSCU5nyinDXocoQmrzQxM3eGBNJCdvmD5WeoSC7C5UvsxKAaGvf4vLCSvTDUtek3MuPwcwpmM",
  "key29": "29PuWzB6Q1HAhhjwsYe41TZVk3F2qaKyqbdF2Yde3qCfUDccmEYvgiqKzPhvPCtxgLAa8T4pBe8a7debNs92cyxJ",
  "key30": "37YMVvn5Z7zwAVzuWT2K3USSwdeHNT95Tm38g6jcw2tv29tCrx2Tre6jydmt6K8GiY4ggB9iLzDx7r5pkWCXAJBw",
  "key31": "3QFsejza18945SEKzVrsHpyDwqxQLDx1pbMvHaCdbBDH9uCCkeFeYg7yYZ3ARgj2uukRKqCVow1opG4qCRYJx3gW",
  "key32": "41dEyy2p51NfiuWJsy6gg1gLG7ehhq3iagkTCdE6x7bMFBGwMTjDc3vQGtfgwoCP98sATD68tLYpoHFoZH54T8aN",
  "key33": "kJbEPsGNf7Nr3MDJG21ajLKYzhnMUcVCR3e7LZch5g6UoHsMppHn5snLF97HQ9qfAsuQ2vbt5qvLMY1rW1PAdsF",
  "key34": "3r5pDUTme9bj8fFsuZhYhBudu13CjyuALufzTEbQxRPXbjmaH1W67fx4FDefGdZ7itw86dRoe6wT953Zi9fJ8Mbs"
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
