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
    "5Jyi7ahu6FydLCDaiUxWqj1M46GRdrWzJGzkzDauQcLmE9GMQTyskKsFpzwoUm1a2KDR67wLfWTTB7S7rPgkrKHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3txcmHc3bPxqm5gYu4jmhxhWFhtiXprHS4rpbQGxoABkEJiqeLTy8u2jdaE6ShHuXb1BJcecsYWbM57t1jkrtgSJ",
  "key1": "8r7JtxXR9C3smPQ1NWoeuMoRx9RK7JxVuStSiGHLH2yFp3kSrEYnvp5s2jhEYx3ymsjGYPftygzmnHiaP1uq6Jb",
  "key2": "qX3PrAQhRUcAKQFPfQZEJqPC5bjTQvoWtd5GbUEM2NCVjTFAvSCRr1bZr5zfr26FmCexbBCuCwiWA1Q3bgDzBRA",
  "key3": "52EhLCX9wN2bj4Ch1PLaGQGgmafFsMtnjT51k5hUaZ68P95wKbSy5SMDdUDkBiN6om7WBu3HdXcJr7ovePAy4yHo",
  "key4": "2Wi978PR5ZV8aVh5dznZpwvNgjJh6Fbf5fakNApGKE8YGVZHamAeasXXVJFNtzHQ9BK4Wp1wKyEvHi4GM9QR7PQo",
  "key5": "4o41gwscxqYrhTYn7FhiygWrdHdvq6cyg4bG8dQ9qVXE2w87XYCLW9PBmvA4viWPCuGfSJKg2GYFicKemC8si2Sk",
  "key6": "2enwGoQA3hW9WtZENruYbxKg7kr4DWqPZQWNTXrULUhvkSV6WP4hYpFLQeqKN26QLHAZE6R78KGS8BjB5avTG2P3",
  "key7": "3t6o5pDj2EvyhwQn21nXUVCbDfXtQHmPvW4gYpQBEuRadRr85rRHrzNo7wr4JKPLnSbEtcndzfk76ogkB7dSiiZZ",
  "key8": "2som83GQ46839nF9yWoAXzBZvSgJUJtFp52fNyNYt5VfaBhf4DuCq12MVpBHj28tABZgxbMngBq1zr89BnyjEA9G",
  "key9": "24vcoAhZQSXHxyjvydZkks7odTddEXwFQzo1WvJrKVgaNZB8PU4PS6CWJkgntTt7bKYaGvuTEsBuzRaXVFK2JXkf",
  "key10": "3FC6CJLU9VNJUDC9CeaJjrdTMp1z97brmusoSq6RpUifrq51kriZorun26sKqwS5Vn1KKfXEx6ZWq2HcraMxkZrq",
  "key11": "3RAxupkuJL8Aq7p3ehM4LBNaNaKNwafUjqfu6xyo6ZLRurRxJziKsh9rR61PRrLPG4XhPb9r2UYBJPpE8uThbWXB",
  "key12": "26mwfZHrvRcXSRU19ktHMZFBYoKhrgjux3FmZrQ92pGUTYCnofhxxtuKXqWgVuLhRiFmHzoizDcm4V8ox9JGMoJ9",
  "key13": "3jKkiEgUo9U2yi82w6KHmxhY78ucuGdjyVoHvV4AVT9pH2NbZ6L3jtbwkqX1QGc6kh9FVNsEtSyraapo4it1UYGB",
  "key14": "5K48nqtRs1Gz846GaWbRZwaNmo7x9Jg5uLkVAzRHC131ACTUTL3pQnydPxpC5ENpQZuDwt4ikXoFTiLKHtP2wech",
  "key15": "WmuzEf5L15mEhjYvgG2c2dTChogrrqrLCP2xb6bAfhKQ2bpiigQFQhV6vUAQETHUxdQWxNFf685L37gwmMcMELk",
  "key16": "651PXDjRam56zMHdVjt8NRwq4t5MGVCo4Fe3MHHDXTZC2dz4do9U1RAfXQ4bKrxiMU3jUCT1kwSyKzr7UhpuQq2b",
  "key17": "5rpbq1eDLxn3zh73mjjBgxz3gd1KMRGT71L6dEC8aPd4qUhdQU2XoBVy7jBLh2exvWUyiTnxYmZS49m7HcA2vSFm",
  "key18": "4wwReZ5X2XyEZAnLDmz7nh1Bewxk31Qs655hxAc7szsrv8LscYuvmrYcVFYfhWbdBGv2jr2WAY42xQX9JXwJK72n",
  "key19": "62xA1Ko7kJ2DUTbjXEV5gqjMTVJTDJ7C3ZuHnFGoAhRcb7KPLix8D4jio8CAyoDTFW2o4xCoD2ZFFjbeuM3NwLD2",
  "key20": "5W3BVdWHBwAMmUMHfR5mmT12FdKGHgqsURrEj3XAqrzbmcEP2MzKvqUMWE5fv67nW9iBkrordxRT75ndYaJ2VaRg",
  "key21": "2cXeixFVcaaxgX7FzNTzwhNtBHQS3WJsRPBbcJfFJXGidbu8Hu5Hv1xi6uomddMeW9bXwvnVyZR8mwUTNqMuMAVG",
  "key22": "2UyVYwr9zhz1sp8gQokbdSAk1aGghUVZX6nx4oQCcgnr5XQ52wELZHoKSz5GgPza8VDmgAVzS8TzvLFu4SU4QixS",
  "key23": "5HxDc2HWRxBnaJZ8vMhrnvoGRnknc88ixDqrXkfDGWEmBwLwcUQkiCyQq9jsQGVg7LAkHTqswbUUYsBNzwLLyiFn",
  "key24": "4HRVDE66dtog612Qq6boWCRpkvAiR8NBhYoe2WErXs6vsEFvA1gXs5mzf3WNEdngydoU6wFXF5A4Y37NXpCnmcTq",
  "key25": "2hmfeQDBUg1xY6FxEiXNBMBL4Kzsk3sakE7DhQvqtJNTe9ttCLF3c7VkaTxs2HzY8mZhLLsnBUxsgDHzVLYiBWUE",
  "key26": "5pY3Yi5ggRWxyy4AvkcjdaV3LtV2gFN2Lt1vy7mU6x5mwqaR25bSQWYsyuijWFrSHaVLJhUpVtLCncgBKrRVZi9r",
  "key27": "5SMC75FyV8UKBihjcyT7FfBncrmSJVeHb4Q9pGK5LonNuFLBrLMzG6P7HZaKz5rhFp39XJ3S9QhdvFCEFJ1EVyrp",
  "key28": "48xv9PiRSAaGSGRoqN2w6hj23mPXWLKszByy8mMX6xm8s7W4WeJXgVcgR9wrT3ToC3zpiuL72D1rXXroZvjTRBFf",
  "key29": "4ywKbGZPtaFs5qFqgAKXQvizRjtLEfF1YPoPpVNMrj1ytPSJiWestuC7xiAeDvCJXRrDiFqmg3cymgcLpNpGCv1s",
  "key30": "3nHwNvP8LsytoWxVzW5Xcghw7UHt6SK8pZF4NUmu4SeV2auBxUsavFiqRatc1qXAdiSEHUbQW3xbnyET8u7EsuTU",
  "key31": "5vCRogdNpqoRiy2uKSMaZqVEYFUxippwn7UnmaY6Fe19mRwxyRVvmT4Gm6VbLqPLS5KsQHXPdJknv5S1DK6daxan"
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
