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
    "4xUeEe5DMdVsCj9LvPCQsFhuireYPHidq7mNs6nUqpRj1ypvLyewUybMsZfkj3havdELbPzZHUUuiLdAPU5NdnRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38MSBjkJhZ9MNZ2MTdftJyuxXSqKzwiUbYhuRnjambHKZJH457XuemppUCJWBupwj5vSwm8NCn1adP2pY3Whoo8u",
  "key1": "3yqsG1nCF1T1oSCFUQG8MiXFs2BREV5qRX7L3uDbotNe9dqgDhPxZdQkHJzgPutdqLLgiXTbMH8HxjDnZ6MT8Jkk",
  "key2": "4yeDG3fwoMWaqfPn5ktxyVxsezk9uZcTmx6SN7ZsxRLnWZhsxi5c52q8auSaoDEkFCD1zeEJkTA16GrmGtxzmxvB",
  "key3": "3hgUCiKH27o6qruWkZvXFPP4YdDr1iXY2Km9XcUSB2qWojkq3riATv9GemzqzqTzLQjLJjLG1mNqwbsDj2MVJceC",
  "key4": "3iABxaN6QC54Xy6VdBTNq8GW9ugdZB9GgfCVgAkL4hnghVUQZa1kbaNg6Rquih8BxfKz3snrzxbf1gstiMh4QYCJ",
  "key5": "5Q3GMVXLeMvCXMev6So6WCwPf15XoG8VRNPC8Sk96cJuGaZeBU6AvRX2r88Yd1EuiNrMy69bNKURSkvfjce1keFL",
  "key6": "4kDZuoLczSA9C799KogcMneTnm1uKWV8NJdyNJN4ijfSNN3gSDTyuaZihukMA46uUx9oiEoh6vw2AWamdauk4w3",
  "key7": "w3cz46Kjnpo19eFnCinFqd5ZUvBkiiaC69RxpdqsZ8AD5jNynD27n7Do8i7vptLBHvVBUTxzMqRGZffR4Rnrnw9",
  "key8": "3ZH7eSDZ4gY1fABLVwY9qDN4cuPKUkZLFKdybvm1gDmqkEFp5C25zvdTTvV7VANE57dT5bE7MHXU1TWvo7QBgUHy",
  "key9": "2tEFTqxMXpEbpN5TBsaCGcpmTnv2P8VRuiexLzdYVv9SJgTCz3PoFxbLjiWHKqQ1iSdK1Kv2nCcQt5Kx3Kj2nVGt",
  "key10": "4Z44kzkpofF3UVS2cvkd6hrKzFzZUpJwScDBB2kiqd88JRCvRCCWinnoEoCdQzTUU26k2huvi3nEkQF83wUGUrXv",
  "key11": "2hs82e9BZMXXt9idTNAdgYPxo7eMev9GDyXHsYQDpFWvHJ491LhMPSr92ZvP16Wy3tqv39GtpwEutf6q7qya9wDd",
  "key12": "4gxpForttvn9o2P1x6jXT2rAUvqTbRLQQfrWW4UP1zhPebv7uW3Mac36kSKxWacQy6JcaR2pJ8faqHhwNveC4f9",
  "key13": "4cPVpaamUTBcMiindBnH6BNbMh44oNyc7c6X4dmzmEN9Pfdgbn2e6AspucVLthY7jkkaUc5TPYSBbGzjB1H81WyY",
  "key14": "4eB1wDUqF2xuTEPwHQj9EGdJwDUwdbH7dHkgFpZqofLfKSxfWAqiVzb3ve6RutiorCkb13yj1nRATft85Me15T7Y",
  "key15": "57UjrTP18vbRZmxSE6xmYj6e5Mz5Cdb3dHmi4SuU2RQFKH5eTtgDntXpJ4d9J4mmS8eMMhHavTYNRE9ZB8LwLZRh",
  "key16": "5LdjrSBTD5tt5A4pVH3QVpfwQdZ2BtyLqAqWZqAY3NGpg1PUwEKafbRqM5TqppkthQzaGMTrSwcz4bBegu8Tv1RS",
  "key17": "32vKjcqEV2yFMbC4X7fdDhpWFEt6PQz8gFJ4at89g35ViwKuXQf9TyQskWbfPSqod2X4dgKsUmkHiJA61snp99eD",
  "key18": "2zbMSLWEKFWDRNa53oF2haW9jyvM9xDtsLmnUZPrUY4ay9jCXoUDTsjneE7ZjpmsSMFzDLoGLComqmGU9fwNM2oV",
  "key19": "x5jEQJ7FTs4Wac4s2Ta1X1JQpuAg2w8VeDq44b8pFntbzBufknLaKVmzTSnvhdkoCQE1Pw7qnUScXwGHx9t7nfN",
  "key20": "3MkUFdCPgPA7bLYhRSqVimBCL6uaEt9kKxs7eHscJCMPRzz5yoordJ3gy7T4FVfjK4rZE7pNUpvHwxyHkhAFAq7E",
  "key21": "ZEzHqxzQXHpyUn4TMhFaUhEujNJiC8Tp4bRUBzMr6F72ersEPD7hZJsqip4chrmkXa87jwgTpRFkU7BSJEkGZhr",
  "key22": "2Fa5WskMFzgq3ifCkDm2hT64D5mj6R4WtRy2NbNsx1v4AX61LQ8F8gGu9CAeZmfQycQh17Ci3aRNxbtbdeCzb9Ps",
  "key23": "5juUTzJoEyzz98RmkeoPRQhvDJ9kpXta54s9tQcnSq5V4XkLmSCsiSQcEdV3TiiUMfnViDTZjQusu2vQ3GeKHFzb",
  "key24": "4Kr91kcrF2gdLAx938X8zH4mSuJ6CStaA3oYfkYKK5gARCKpZNa6fJYw9U9AGiHBzn6hc6snwpmR9oHGu9bEFBL5",
  "key25": "3nr3hHj4qLioDtASvjP9sTVH23yWQ4U2CfsxdYbEDAm6PHiPPRkzPWktxivHrUaypgVzMvR4Y4RbsoJVBUK5Cc4X",
  "key26": "56Y7y3T7Qo8HJiUrh5KAQ181oxg9ho8D8mEwLnv7jksSjC391zwpZJjUPFnC3bTWBNSdxEba5zej8WiEM1o9Ltbs",
  "key27": "3RY9VSaTDTYHs9TtDkPiPPiQ8MJ6tRxLmq9gtusbhQHn1ZxxUg2aypsxHMvWzUcw22pxYpBDYQG1zVSvgNiB2aWb",
  "key28": "1kZpjS65JPQK44VFUApyYd2rgqcjHA4KtdFcFTrBqJS2wEimQwvr3vZNFqyK2a9oUaFCu8emqfZgjCx7iWGmySr",
  "key29": "4Ap9Z3sHcXLa2bMGqCAVtpsyVUoG426k8KwJPZ3GafMKe5XejwaiZEaHwNn1R1jqs6gu4hPAnvpgavEgmizjqow7",
  "key30": "4qT4e4X8pxVnRQuRHDagDmdRJkcg5AzFmB4jtvnPQa9HcJ67kP4DgoamyHdmJLUKYVWGbXkM6nMRirYwPx99Mmze",
  "key31": "2DyShGCxZMugEcTEsE5mNPPZfeMiA8WNm7GKvCLzpyq32pvozBVHcaK1MMJNASxCZuiTGQejrWrudWXFa5xzgPoo"
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
