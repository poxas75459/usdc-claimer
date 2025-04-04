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
    "5CQQRW1hs76XnJvdH5vQFiYjbfk3Gym14DTBaX3VAezoNj3e6Bbh5GmqthWDVwnUbneqXLHShcgjJgQ4pvh97fcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34jbaCS8VLjLd39jrBpSH733BeCJD7fUuTCyeYCCUgfXhWx18w781KrZ5QitsCfrFLhgE1VsVtLxcvUYXDYnCQ3V",
  "key1": "2hYLJMMoWyPtqjscsFQL6V6mgacupGmLfvH4BkUwTcddEz7SdNXgVAgnJ7tS2q7QQ8gvf4uYh58uAEWBWzMXhzy4",
  "key2": "3aPaXLoi5nCKZnMSq9zRcJFkfqUSe68Qokku9QpvietLBDztB1wUYz1Y44rCySYkcXHHtRbYiah4eEQiYPiZhiJB",
  "key3": "4gDAdMjN9jmQVAMsff4RswYe2xokagn3vpUoK5hp2kfRji3rp7Kvy8fw37wF5svxx9MHDJLuC9ht55ewYx6rVKnz",
  "key4": "3CkS57JKSwH9aVXdPMqBAzTem6ZbTwdT3EuieM634gnLrSFDtidtc4M6SGcUhLAnifNieMs61rLAgRXZPirD27q4",
  "key5": "4yw4Zfka7tbkehL9TTG64seR3gYNcdek1432vSFkMMUisCp2iRntEuBU1zq9GXrwQhQvMii5DASAjsDLUEJwJa9d",
  "key6": "MqX4dvLD9NWMBMetwd6CiC3EDxwMrJFiWqvcAtrZDWphWXuqvhG4uzBL5SNuLsAPbcJWfUJPkfMFJGxFs6XEVpN",
  "key7": "3mGqn4cyVQ5t5aDxTbWVzGTrAnvQ6Lx9xj65MmLzeDL19UfgFDGWGJRd1z7PxHNLzxtpHEkQkH95VrDxF9dWGVom",
  "key8": "4Hrxycod8R6CPkRdyXVCYi2MvVAjSS8HVkKFhjxEbhpZvexJQqJsrrYbCchaiN3N8SAgs2tzfUVuagk5zWLmHjhb",
  "key9": "3UT4aUtBFaQjGuVWbyz3XMqB7NG67ELvoxvaLbF3gnfUPxrUey5HXmLqnwqD9Z13NUjAF9EcwZKbwWXYm45Y8ndi",
  "key10": "4thGg7rC4aQVS3X26e2oKAJPWMWJxt2JiB1SjvwTzCmdzNLHAajJPn7J13Kh3XMvquMr9Qwp3PkM9b9VakwQ7kzk",
  "key11": "2t4eCKV2p9Bbi4FuM7ETVJgTgeyL5LCRpkcwxDYeMwTPuhFHXhPNXxzs4xfnZBLv7W5EJWPK7y8RMNAndWXyWqWt",
  "key12": "2a9zXYR8yE5eJi1418HdTbZzYFopXfYzbh4dK9wNzP2SeZd9Vt2ZZPXqH1PoaLEdHrkxzhUjamd6vmRC6dPck846",
  "key13": "4KQPRXD2YnxQBgM6EaGJdgL3VbGAFmQRSeyV4VAbNc1t2SqTHNBxir5SZHPJMisaJzchoBXodbt6BY5tTE9nbE2x",
  "key14": "5Jt97L7GZsBq3CocgWqfzJvkbrnFJ6e4XjxTvQAGU3XZPA321uNGawuCaW8SPSbuDvRZJu2g17wmgk1z1bUef76T",
  "key15": "GRRic6A8SatQ8SWXdrdSrbGKNXExo6xzXiz5Z5sNJUMrVQAD4xUHFo3RwTSaNZeh61EEuKUabE3wEFgGxnEki53",
  "key16": "5ZR9UFGWuCavZnPqGnX4uek4v1sY8x8iYGiGvqRRQbQYfXc3rFoparM2Baj5dqTnRKAX8d4mn6ABWamQXeeyW4DM",
  "key17": "2AgVQ7BzXs25ELzWvYSWrZU8TmaYRbGf3oKPTaWpiREzKVh4wtTrUEfsy1A88X93EBKWAHAki66oS2aSRKWwnHom",
  "key18": "4z5oLuidToVZdD1PpLEszC3b14JJRTE8JYoyt9CEKxCzu1khfSf11GQtXAWbBfdEzjFu9LhZxiLuaNAjEcU5sLSc",
  "key19": "65Dn8BPRPoxDm7yWLbHSDvUi8k5PhYdNhRmpcMShuGVW739TiLRxszXWKXmpf3fgFFCXSpBXet8Z5MHDhgCxA296",
  "key20": "37XdaMHuwchasFZTw4eTjKFgGAjJiVsLRz8GByRbF3uycJsRqzWDfAtQAEuW9D5E7aGj6DgHJak94ptte3rFstFP",
  "key21": "3Cycejdrj2zx5NakmESGNSuPqrqoiqPRwNPK6bcXPvcXLMfiwJHZcAu9sVN5sHdHKQkSVZyAYhy6uZCTGr7JxxE9",
  "key22": "4MLeSFukvbkV431WsF1ofJHopFL14ykLGCpq2LN4CNbLtXpWsKp3yY8RdgPy9zaEp8QByK8XaSBWUFXiUYyuPZMC",
  "key23": "49LVbiNU4aW662e9gK7sLLsjo6NikzhJF4pDN1QL4vHLqu35wQzR5hdQfW419XcDGKUiKqasttrvJ7RSKHjy1pfy",
  "key24": "33buKPGQZw41JJrbzhgELoWKcopdqd2AQT7eQGrYTJGkFkdtc2axq4wBdQPuiRngNo3naS38uWRp6mauEQWyp8v",
  "key25": "3i5kk5PfXDnjoLAeJPuTamZyqgVx4n5pXBs7sDmUMFN6kaAn1ckQnecioyyCXNgUMBtUsg5yqcffBteUQiHx8btn",
  "key26": "5oeNVNeE7eSBUeBJin2BQepoVSQ5WRPcwETMFPu6EG55ihLVHXPzBnwXnRdmz5RyWCeZsWsSBEziQTSSHYs7aJiu",
  "key27": "2cdkQ7g2BTcM2KbtEhRBTJVUQapkCA97m1aZB1E8MHxgJ1xL8KnfotDAQfzC2BWsaDL3DjjHVDbFjfzeEqURxigA",
  "key28": "3uygM3u8cgDYubYgKoQouKGpyjFw3H3pHNE99CiAGtZ72GB2HhcnZzrazxPUbtnHxr7LBGVSTSD2zfRTm3Y8zj2s",
  "key29": "3YNboJeXsQC8Wf6nqfTEVzL6abvoa5bo8pgPEjihWMXpyFwAoNErGQFmBXqHzYxgzKr2h9oGNBh6481AVtkKCbRt",
  "key30": "63PuFPcV6yL6CCRyTFBWPFUmSeSzMQXayRjP8jwEWHbJfLPgnWLXE8b98zXAWdjxRZHgHKqA7xUawswZQKGmMKrK",
  "key31": "5AXrP8wRXkyr65ptno4qGCV2W4gRHfxigMETjMPcSC5eMSfUmCvjUTKhhdMJ2XCrm5H1et7jRqZxqB12gqKF8Zyx",
  "key32": "4Zb5zVozrXuMXY5RKc2F7dWN7UdmbEKNx7fM11FLhgc1d3ECZ5RPYkya8JNErhwtmuoK72JZvngjsRNfXTWhVkMQ",
  "key33": "te9dpTJpPcLg3H1dgMSV1raHFk4ZqbQGR8NjSBR5vYo2JE7D1UhR3AybyDaYwLbMHWmNAE39Ci4gxwYceqFE7rA",
  "key34": "5LcPv5dLJxEpd7vfvi2dsk3gZqKZLZ9aJb3or3iz5i4bn6aMCAW2dFj659yDHrzAoaxeygLAQ18Xvh5CdDgQf5ES",
  "key35": "2FUR2VuNwYmJ7yDU1NGW2LeSNT8nmQNf6tShsrPJmLAMWKXYzV2yX5LGRmJ8gEehYwfvfKGrQCvquAz8shY3defR",
  "key36": "3fjyfCumquScqb7xAiRENP6nGZmAQhvq5AMqzWrdYjFy1gkepm7ewcpXwPFsa3D5DRjeQ3J3uziVjXs5gfFF7pe6",
  "key37": "4dFYQwRcg91Y9GhaXWwPZkm6SVogKtqLM12SCb2FSRszmr9CdsNcpE8XVyt7jUq2HKEinUbXEEpKSLyGF76R7bpc",
  "key38": "qXYrveekJYE7QkPd7LNhhWRMGBgSenVMHni5NuAueF3HHWiSFNoYHHg8P1efozdH3srrFyNNGf4dNgDanyP4MJo",
  "key39": "5cuhsjKre1SR3MXodvMU3Eixh9E3RahJELoFD5oESeeoqxSh5kw6WkLSagvAgoCCPtLmr4YMMfvsSAWBNbBw5Afm",
  "key40": "g5fAX19otytcxo12SGYSQ3XFspZNmh7hWNgkkr4axm6P6XCucGWyYeoVuZ2aDE1cnNrVpxy27P56wPL2NAAGgmb",
  "key41": "DKmW2QYNpveT4iKUEYxP9awKrero8heb7EubvCx4MuVJd5xgJ2AyM88DtHN9Ho5PEBLNqRYB3A4kkaRkWoUe7A5"
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
