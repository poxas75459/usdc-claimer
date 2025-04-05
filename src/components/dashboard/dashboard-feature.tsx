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
    "56cgbDVPp9yfXYNrgB73N3PzNT72o7w5RaDNdakLDwWya4QByhcXdxg4Cdc35n1uEtMs1AjND7kNeGBjTsCK3Zn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sTfn8DnQMMdZXypPXk4eYUfwj71ZSi6UALEY7e8c8JhPGZB5eepNFdhL1yujD5W5q8neczw7ugmz6EsiaMhK6Uu",
  "key1": "4UQUxFhs7wUXiDSkM9FUPcEQJS4Gyf6ADGDonjvj2NZ87s5iUywkiuRerirQmzaiCvK8wprFB5PYMG8HJAb4uB6N",
  "key2": "4NR1G9t9o2rSQ79evUHZVsQci22wqSejH3b8Mk7Cn7Sh9MWMrfVbqrywNJsAeVUALj2oDZ4BnuTXde9RyvC56vPm",
  "key3": "2bbhRLRSZW2S2n3KnpABCdRqB6XKPJ8Szo9MSohNvB3isJ5mUJmNueSngGxb4aCTBAKsCmnnvtQ72zn6ZdeMBVNv",
  "key4": "31qDhr3pmudW7SbANfZbMwAZRTBR7CQjvK5kCk3dXUCTdMEr7Wwg2saWuBVRhs1r1ZfBtevoL8zCPXpeyffstjoR",
  "key5": "3vSFCDc5F6j5GAxKhHgeg1GHuseNyZaDNJSPKhxKvi2FR3KDJAZ6nN6VKHVRvCW3NU8de1S1sfarYHmQBpERt5mC",
  "key6": "2t6N6bUSJhQVJJfL6YoprCk552QFHixVkQxoYAWBnJXaJGSTYWTU9CPcgjaDHUbVyRGdLe4MfX817UdaBqjzo64K",
  "key7": "3xHEKa4jvi1gVtaZLZWJGZZkSTo1a8V1jNhr6K8tnb1UmD6rYPVeTw2eEnetD44x4jvUEiQFZ1aDFGTyhdEJ9CXs",
  "key8": "5xkMhuGu2XwQpxAu6JZNjGq69Yh5EhBY5jatzWJD4ZPYKYHq219WcckZXp6RXPdRtan7oNoW9zX8HrrBrv68nZNB",
  "key9": "3chC6vYCx9RthCsLNWuDtEkQtcWLsYsrEuZRgpTJ1qL86oapz3GQ95P7ERXHzk1P6v33mTMJu6aZ3cTGsqjMwDZc",
  "key10": "2HxwvNYEaz3Jf6j7JK1JdXzscYGTDfg8xav1kUB9zeTb1AFW3aXPtStMALyWPpxXvms4iWZZiiNX8kZFHfHiSShX",
  "key11": "2QAjgpWVZ4ppxJj16yvz4KtH7krnQRPMzsScW3bWqWZppvUzDEdJ2QMGdLYgiggCTFo866rmEZk77mYobVGJ9n5U",
  "key12": "4p6uqSooh5o3g1CHAz8sX6EUGtTjKw7yKfbp5hPmbSZo6EkHSLr8JDLYfiUD3FfRE8VrzhMggUqpoUi6a3KsJSTo",
  "key13": "SUHTGW7iy94PeYwQHFqFyvz5Ep6HBLCDNMn1WoyN6NJ3hoBjoTQfjcVKs9Z1WPY8kVVqSzKC9PzcqiDtDMhKSdb",
  "key14": "2FBthWZrE24j3wULhQSoZZhp9t4QtNZGwkYwN1EZJueKT5tapLcLfrk27kXq6w2SVQ5AQdETQC8RgsKHvQkZBr2G",
  "key15": "39JgmUK6kpbbMXDuJNHeDY7ZLBvHmz1aQi5gVjBCuLQGAbj97vY3uwkG6pDDpbLC45z9UvBDYPN4FqMYxdmkHnzu",
  "key16": "5T9fxjQmmKt8Q8FwuEdjsg1Fm3qdL63xsgw4Wy2wS4JWv88nhnukNLXfEECHQmSA3LRyENskf7HVz8XtM1FGwn2U",
  "key17": "4xz6e3cy5vYrk1uPWMS7Dorvgs9m141xE4oBPKWzc8CthaBYtWJNADKe5u7zzJjqhVB6hj28gEX3LD44Fdv7i5vE",
  "key18": "3szKpAQ4WUwD4cz9pGHoi1BywuawV31Efc2urVZjDz2mKCW97DEkFZyQcpxMg1vhwcbLZnj64tpTrpc9tLXJXpyE",
  "key19": "2yYCjYPRhn1z5pAnMdErkPy4vh2ZTMs9zDz31pRojhZ8tAEJu4S3RTzUswGKTs61JGAeJXXwk34R7kJwzsRLHBW5",
  "key20": "42PFiqGQ1ez5nToaq76vb4BzQ8b3nEJmSQLUawCb4HKkKNL4rJB9jvh4LRZnc5wZiCjbyUBbn4W2EgbeD3GbSjZY",
  "key21": "5vnVCchUKCCu4M3zKT6PAdJ4S171Q3H4JwbkUQwKs18bVnB6xU745LqAVjddrEWnKy73Z41y5axQeeGdy5cvsM4m",
  "key22": "4nXwpFaa4tot8p7ZVPpFfpT633opuGfx3NQ8iofcE7fzobWA8JhcGcJd1YGycdNTByKkfgbYipzMVuJfvJg2E6Su",
  "key23": "3kWeYKsogWduS4oBRwhSNuLwvjXheP1Rr3oYu8p6hMsoVywsx8tCfaGkNsj2HesvH58De4o8Pi1VUfyCUkqm757g",
  "key24": "23A1CQPnVjswopKfPbf4xj1QhFrivdt5hBgmNE4VFudMijERcYo5zYSaWJbFxAB424bLqri1z7RT3fr6b5PNifTC",
  "key25": "4wMQuj2GDSdeRDGqp7BucEptFSmWoZrivPLdrgCJGfamePki8vufuS7EdfVryLpWQMfPw3QzKs5y4HnFUeyioZ5G",
  "key26": "39dU8F2jh7Jf89sCYMuhANftqZkbDbEii7td9aFka1Uz3yS7Jnpi85XqpLJTx7YLQXUgNXaWwYydorgAKEmd4zKv",
  "key27": "QHUoRC491nKSSiMDPnKt4J2EiQiTrtGiNLmJbd9NaCTNG1eXvA5ZrxtHiXH5PcCS567YFQSbfHb13bx1E4CwvcA",
  "key28": "QKDt2ptjGLHArvKdtMXaHda3mnGm2JhBQbcs61WmixMfZ51bKVQd13RTy2ZCZncyHY8kVzgV2UYxqzw9nncAeCt",
  "key29": "5xSrHdZTapWUQHr9xJ2oVi4d1n9x95wenP68x8bs8gDfXUpyQLSbG2EvqgvKfdJeizfL5xTDTVYbraVgWk4QAUqF",
  "key30": "3kSXxGGvYHqxzcPTsW1pFmrFBPWu1S9n8UBwPjWstoS3acitMymfMgnLfHfhqHiCNi26k3qUThnzXGekf7XynsKp",
  "key31": "5i3qocxnbTX89wkQxvRDDbKieeNfN4ttnzZoiPdhDQUc3wqpZsUpWEtYHPxAaqiNtJpSLcysoMAraXed7udahFJu",
  "key32": "45RGRxb7TQYpbmDqtjgkNMZ2CmkD8VV5mwu8GAamSGutnGzrBubc1avyiMtBtaWxdk4aJ6MzULM4nbfULjwzHcfx",
  "key33": "2Qbzjy9hpwYbevAVRxq9eGXTC4wbFe21tFoqxj9UUsnCA1VAy8x9odEr3cbrPrpLkEW3GADj5mj2KAYZgreVmj7w",
  "key34": "4yCNBe3eG7na8pyuSDpXhg3KHevFEwSVDSqNK7fDVcWSkjSpzQB31pB7s8bDGVBQvRxtKQy5TVhnKbtBVprdtjzn",
  "key35": "3n4eC1xZJp34p92jGPY4fqrjNJ5HFUwm4HCSJq4mY3wkHUT4BrKmHeKokr7FH5bxPBvWVrE9Sc58c4TbqrjrKESa",
  "key36": "3xVd659L8ogEDX1UVqkKs55Eb3ftbfRhDdmJq1rtQDuQvfxysKrmmrZtaQiQWfTT4kupWAqShFgRuBfdyX4qVPwy",
  "key37": "j55EwwwcdqXpGpKCv6egFq7VN5LBdAZMTMA7yUFW4iYGkEFC7FLYpsf74CDJBmjczQ6TyrKh5Vo1usiid2Anv3X",
  "key38": "3oQ63yYcziSweHbh8nVfu5usJUfdxNXGSdNsFTp6PjscpErd1gwqzgKkKkdv8VvKVbdCqCNryqqQApPuyPPJ7JBU",
  "key39": "41vxcje5dPyCoCaNiCHD5yS8XSrz43RgT2dWx1K9LxSvhixec68u6EyKkKkQSTDcXA4ypNTgqDLx2FyaEB8drC8d",
  "key40": "3GXo6eudLd2YfE2KQxQ14tSnQaj1rGktZQVDHExzqmSWA1LVvdeGZCJ2X7fuwiXikRn43Mb5hpDot9PWv68GvHH3",
  "key41": "6dokVUBKZ8bFHkLZs8DjZpVCMknepENJPh2mTfUrfPhFCMRUKBGCpu7QhKj44r8zcd2cTdQPFn7iJoKGZ747ffZ",
  "key42": "5TU3bHDj7GjPSyDYrEYQKBAAXiuUinJxWLfHPXrJKVxyoqi7fA2i35auHFzyLZGKnFu3MrGRWyYBW1HQ7XgNSGQt",
  "key43": "3UGMQe9KgXCibu5Rzm1ajC6sVZAuzpZhot1K1S2EgcT2ZWTa6SdBuMrM7DLd5Nydzj2x4eCw43JVsZypzBo8xjS6",
  "key44": "Nv72EJx5ywNXkAAoMTEWv5kNLW4VENmKu1tJFNEWituvTTKSTEVq9p79ft4YSFkhYfSWoo76T3LfuPafMHdUrvU"
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
