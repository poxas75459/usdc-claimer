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
    "5HPWmZoMiEseLPkGppqdstNvpAshBxBbYewTXLjjW919TjntGwW8u7QD4BYmJmrSSBr3MsKhERXKxnSQ9pCNjT9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NjqKm2hUdnezwhNuFk7ECYSK7wWKPhqd4PGyVB1hKNj4u8fWTNBNsnVd5aPbU5ZtGBUd6QNHpFTRrg5xxtWPikp",
  "key1": "3Qt13oE3CaJ6eM4k9Je4tKk1LhMbaJQtS8kdBdeS6vpzJdsS7vcDxRMwTW7UeghZg5SNM1uhXLM55yq8PGv6uMq7",
  "key2": "66XnihjpPLYPw4aVQ59mPWKddcYd4XST4YCrhUY7oSyBY8h8mxTkS6rKBWpEGGFSxfJFE5os1cSWZenFKjBwqmDz",
  "key3": "57QBgoysX1pNWBHapBx5CSTZH1zSfLBdQ9FV2EqUbbpe9S9LiSdFEVZmwBB8Mhv1mxRTgj6Djr4ygDQBWP8ovTV2",
  "key4": "QndKXwk1jpFpqJA2DhbBZztnUevFLcEuR6LoBWHcgTDN6cfFscp9uSxXArPWVaMq9yGvqzemiUGHoz2TuG4kyyP",
  "key5": "2RQJFKpKZkCeugezpqvBm8Zwg8QQPRsPBzEz7e7aMguXV6YhCLj9Nrx7SUmEwypp9yWvQxvMJGRKeDAYPVwmMe7s",
  "key6": "2WtxCJi15S4esadn5EhgxwinoyR91KNQqGDUAJe8oWBYmPUVqZLynNAxpK6gWVoHBhFwXMiftEfSsnDtSdQ9fyYp",
  "key7": "5kx5Lzq7wMBpSho4mBK5QEuyuHNxFn9z9jNu5yjwWSpSYLkRGT67TcvDK6SigqaAodZKmYUMNu5YWcdXEruNqz4P",
  "key8": "4MmqhWrRQYA96birbDnVqgLXmHP2s2SzpPGo52qRLwL8Sbo6BiKxUwizYBdGVAUm8LYfQHoYwC5SGnMv9iJzJZo6",
  "key9": "5NMF33c3RNN1HWhfxaUnk9UBSyvFNP5ZV4paTA8GDnpkg8sZjRpWCzEDjZf8mjukT8AEhwToWYqTVxVqjWAqkrYx",
  "key10": "5HjjoKhS5uZ5MY76WEucxAx8k43pRagXnExoRwS8Akkcvn6vhVvok7HMoZQ9VXsTZDqPgmwcJWTaR35dymKPdmaL",
  "key11": "2Ys9T6VZcJWkeucnp57NBMV84JiqThq7ddvKEntubXBvrs8KcWv5mQjWkWRkZiUmphzKfMr3dSp7feihrRQsvwRD",
  "key12": "2Z9fDdxvQ3PF6XTd6wNAs22PQwsqCYZu1cRzgne9hMK1RvJCaFB7m2rsUYhZqicznuYRT6Pz1fF75mPyFC6zwN6R",
  "key13": "4FhfeJZCqRYGjQE9wzdgXTa2XcWSGR9h9Y6v15VNYCzugGJyCs9BMVdRgjG3HUM8H64FhEMQe8KxLGdcvcpszXcH",
  "key14": "bDxVQNtfvAkfWMQNUTgzwDJm9yNd69mJTML8TigJoiHKoM9UWnoJ3GoGbR4xqS1wSfxF65xHvxRxfENyLTc46zb",
  "key15": "yWxLajy7fjj2hYmzwKx3cYEBbvKDSFfYyDubn4W63vZV3y7sqSxsvBuHt2QoeJpMTSB2NBuNeGbN86SMVBniUGs",
  "key16": "2hQzJyKEwmvdShDYUVc72AUc9LgcGp1sbJ87FiNmxpMuLcYQxvJRW7taLZrNvE4AA6MFGK7aWb5qF6KqHSvp1AML",
  "key17": "4MyFFmTTSA4eFwvhBYZv5NMFqpp3UWKYsp6DSjTzSpFUDS9YwoKdGCweNA1WDfy6E76yuRtTwLexoPZrpF4QhhyD",
  "key18": "5cBpoiCUv48snSDdp2RdTzV9uLP1N7jpBHXKdnEWpDU9pZedRwXikqjcFp7eTkaK5SEfGvVziMNMksWqZEGexSPj",
  "key19": "3P5wbYx4oj5466bBoMWjF5cFknMjjk8eszJRQ5kGnecGxPGYdic5tYL7TNxcYcVpuTrCztQTo4fnKAr9kjNnEzMm",
  "key20": "2kAnTFdHHvLKGmAyFNjFggNXwzyNwawJ7UjMPtGFwCi3Aac4n3BnGpnhJzJCFTDsLjUkChuA6LRx4dv2ji5QJG7F",
  "key21": "3QMcz22NNCex4cD6xWyLTPdWDn9Z34pKnwaUjyx2oPGCALTkPwNPgmL7dvH9AmQnMptAp3KUaeJ63BEru1c1LiMG",
  "key22": "38vY48gQcxikjxyomgcSVQbHBGZBLuhLwfUVf5RgxLAJCYGMMwfCbmpRwmMDsvN7bYu1WGDdL48BVACfPh1i73eU",
  "key23": "5WW4hM7pUneHc4J8NPSMsTSFuWNotJobaP1XH7VMtppFoEncU3FU5PVUhZq29UV3gQPrthJKEip3dXtzBuKktGVV",
  "key24": "4BGGPFHrqYAB7m7XsypQwdN4fkJ5kmQfEkJCr4VNt1UAsgTqE9AZHoJznCxvZQeLDBF5ks9PsivexJ1TVjbdhnX7",
  "key25": "3CT2YZxvpVF9HKkfL6gtePuaSwmuMQkN9QkVof8gYXKjcFHPSqSfU8pYZqFVRJmyZuaXTez7whqopFyM6af8Dede",
  "key26": "yYRErfA3DceXZGVkmoLJe3rFofreVKe9BTbCSSpdqmjgXEWZRe1UGmyULymhRaw9NxL6qq3Ggin26dZvMUs1BM1",
  "key27": "3B91EBfGnsQRkPzJXF2PRPNHmewTYVDARcWMZJdGfjMMMB4xKRT3zuy8shZhQ6BaBn873CjFoVkdNDoKpykTtjo8",
  "key28": "2x5MZL5WzYrJLbKBbpRrGwVvPcDR4M7pcMQw2VjjTgwBg9sB8NSZxmnrY3qLGnhdR9uPWsZvWFXhEGwjxFkzCwM6",
  "key29": "3Z64WuauKur9NTH1VodcwiQ935paYb5KEsaPUeWHDQseGmN4QYTjPVBrFHfv67HyrskfAsZ7hmq1o8azU5zdwt1T",
  "key30": "5DziNCc4GYar1TxHhxG37pmb5uouPX9oGRStye2p4QYQRdZYGNo2PfxFqqsTrzmt3iYfNdWM2J3QKa1qhsNriHc8",
  "key31": "3NXME34WTxcHjuXX6WwRy7k1M9s41FLGvSfoGo9rkurWCbfRsTRsMReF5teF8jdtbtenDw3Qzap3Yac5ExhkxQz",
  "key32": "4RxxW2ZsLsMhWK12ZS77vQAcPBf9W2ZLuCgCk6S7NBzfZY3nSgDgSeSGa1SPz84W1rjk5CMdvkp1Tqn4THWLidZD",
  "key33": "3nNUK9oihfxWZ5MiqWTv62U43mNYMGyTy4CfsJscJVqo42dbcbacqgS9Ju5Zz4Cr3AEY8wVZ2ykfUnvkfHzeaVjY",
  "key34": "5UC9SxSQ6r386jHHXC2ZqmtXNpKxeQy5oNhCqWNEAFuGyRxgHuFo6iw3xEuYzFzX9CUmtkMki6MXzkiW7UZ25bg6",
  "key35": "VfTP7eNr4TFkWBVV81gxosm5NDfZisXse23BCCw33U2NQhb7hCEjgBpwdNpM1jxFDspW4n2XX1vhpE7DgHjtJ16",
  "key36": "5yMBzLP97Vrn1uHr96svuiFbzR8UK1kZnr76eJoyaGng7irUhNGXm8yP3FGEWDPirZ6LhbPJHi5NsKZYqLPMEAZj",
  "key37": "5n3CgXVTwsDmoExGFrscXgdtEL5tD6xe2yahV9Uqb2ibFjnuGKUGfwkrug6Fx4A4N8syMuP9HhwJ2256S73MDzQR",
  "key38": "T2L7a4faA8ww9pF7U3c86scZqTjLnvUktYsTntNhZooWNgaYWnKDcLGwQxpHdiwGAcbT8qq559YvBNFX3CsVWyU",
  "key39": "R1ZQNPmXZJ32gxdUQjB7v1vVdY7tpZZL8SEEux3RDuERC2UeWUNDgB4AyKbZSPvdRX87wZAkLg1ufU3hLKAmXKx",
  "key40": "4cKgo5w6T8EPsWpN2igdz7ToTZxpWyZX6Wzt2FFvtQADDeR5UVxoUTkQRhGfDr5AUN7YVuYmMJiTS6DexsnbAgnK",
  "key41": "2i3iw7YEa5qJ9H5Pbo1AMjdJv54tKxBxQ5ySTBUwnLGcFAm6dtP958w5jouP7Bf2XKN7UCp7BTQNPAGs5GNatyjn",
  "key42": "5AqCS433qFG2UdN3jhVqq2gXacNFzZtWSdhM37HsTDYAWhqaH9ApQd91b6eRDdgUY3gxsvjZ98EoRaKNsq6YugfQ",
  "key43": "25Ref94SHh4U6AAjwzhNcpd6ujukVzwSKvnetcNFpPnWGr4Z5F2o7Sd5wy6VdnJBXmf49gjTkT6Mw4siBnrVwi19",
  "key44": "5oNL5wSCsvkb5GDWhCRVaPs75bqreQZswGy5cLJ5gPNNr1oVSDyKD79uRo9Vy3D9duGLSR6Rx5L7zg6wiDjUmoxo",
  "key45": "5HkqkYFJrC6TJjWx9M7TeaAYy9e6gsfWYjpKQ1FfM8xpCpUup145JRGmLdsFzqAgn8Fu466zWTSg5F5XfYmRz8w4",
  "key46": "7aSARFKV1yxAZWssKoZHiU5eQNcAxvuqUPYP7Xb9FyaMQ88mjv8qwD5vCPgL5rAknyMhCPkHXLr58CwLhaECpyM",
  "key47": "4y5EBUWX6Gx2H1x8qiXDpi9RFm67y8YfbFdd6ME1j1aofVvZPMDas29jveDdn3aPF6QwF516X2vEQ16cqNFM2wpo",
  "key48": "5nWfKfpGknsmHsGJta6RMqBD98oU9kZkazaiJCPxvEXAxUEDys2y6149NLJxJ93tRaoKpqcyFc8reUEHdTEUnB8x"
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
