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
    "3sijUPYUA1StNJtKLkGLYQdhaEZRRfguZK8XRyRCJQpFsrmHMXuGCYuXaBwmYgD3CXzy99dC1ZRGaHtSaLm8u9Jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yaiTNoQpMGzHa4XEA4FfJF8LGEnRkP3iQosY9uu8Bt1yHFonvhrpgmtRqfFiHvyhMgy9ot17e56rnE3wYUjyw5y",
  "key1": "2XK46ot5jWUmfJXf9LnUVjm2mvrMiZAnFwYs4i1RFHNRKGyUiidhh81fNMGkdmCTi1ELsXEgLCT4DDgd7ASfj2by",
  "key2": "KjZQywmfmE2vioHXZfp3g3TEAXyihM3VUe57S737LL8wtfyMhf5LjR3r2GtnjzbvKWdNz5UYNvhi3pC2yhvnxW4",
  "key3": "5xKhgGxmMUGriodjuVkuLRuAATbucsU8J2os2B8nwexjUA5cHaNndUnkcqJKNzkcNoEMV9iM9KZwa64uHkkNVBJ5",
  "key4": "4aebGnfyejCB5urz4pAXsu9YQdUGriEFE5tcNHJzcQbutW5U41rVGoQYg4dH5zcFB3D9nHiLJ6nUj9s5KDuMWTXY",
  "key5": "YUUxHfFEiUu2CtCnUAR6E6DBLY53wQPJWDu7kyEXbQZUzLH9kfPM1dXvcrej12dR7GxMBq1uwmrnRx5jZnmdzeY",
  "key6": "3p2GGXxPEH4fq1TUZ6EAcj4BsSpmZDeRSPuDUEUpeddZqv18rez9KbYnyEcXdacxGLP8xSt7z9BEoqQhoPrEnVRk",
  "key7": "4TU2N9CTNqoC8YFf2TADWTPY7jk7vrhBcmhuKRGDEpouMA2W9Z4ThjNan1rbE4Taefg7CgTKzZJvDzWMzvgthzu1",
  "key8": "2nomXmieXQdQ5BHxovEg3xNQQVC6YJZrQmJmLGpDL8rfSpG5Qv5bXx3SvjrZ4D4cuZr2LBMS7j6TkpMJJEb6uyyK",
  "key9": "xgcCjYCC3KPoz2uM7d8p3CPzGTHB5kCRtWu17HmJh7caPak9s9hXP9NqUoVqeyVioTbMRV5ubMgdTampQy8JndU",
  "key10": "4rRsz2b94YgeZVkUbfimRvDQWVPvvmUbWxpHqnyXcJ73uYG5gK2H2aFr5vVKYmJZ8KtxpUG23rbKZmZ7nsFu2PA7",
  "key11": "2QbgP6AaAUB1Hqv9syNzSVa2EECE2vDiCQo79g1K2iCSQrgeNUEghmotsgwNTqpXGSdUKyvKDwgsJg8ixrr65Qqy",
  "key12": "5a3cnSqMpTyBGLibmwYp3nRK4pDZxvDxRRB2t15DzuoBRNGNbDnaTdLPoiWD8nwbXJBTvFzT6xEbM8jLsBGMSsfa",
  "key13": "F7UZ3zNX9fuSmHakz7zr2PQHfY3SvVytDSToAqeB99vuwDm1wytoB3Zmx2axKg9RUhzu1sgYSde8WPcAQFfKpJ8",
  "key14": "5t8H5sZbWvT4zAuNS7mzn7h7UkaiufVf3oGoeKfTFhmmycqjgmekS9q7L7qttCntdJxsh6SMVZyCg5TUKVye7K94",
  "key15": "2BPU3A9QXoyHEm3D3P3wEUcQ8goY2t3YtYc3GFG8hJrjggCJMd5jNsG4VAbAJLy55TWu1razoGzTXX2qQ47cSg5k",
  "key16": "2y7cZXPyL2LavfJskwq1VnkDt67obyrscD31ppoEBb6Q76FM8YqtqqSkUK7Bcacvahj6zJhPJM9C1ezQT4iajCQt",
  "key17": "3Ki3mKwgFYv5DGLf2VTZkV4yN5U7ax1ZW9EnpKqwDXmDd8XAU6vqq3pKyGxBEJApeNhdW5J7k1uHS9mar1Fnpsrh",
  "key18": "5ydPu52jPvCx2RbgGTD6HbYdUXhpcgtEZT1L2mFr2jSUhNiE6gsuTePozD1Tp5WsYwcHAbVWKmHo18kf6rwwZbHk",
  "key19": "iqVUzv2BpRYwFuawJMyD1rWRDBCCxtfBou1EDdxwZCifHfexAmgU3r9aY2qPZhJ5CzFSnHHyzsqhdDq3hEYhzkF",
  "key20": "64UWRwVKog7Q7ZnuVkJHnF3eNkBiq2btLEVpTTNgwmqiRUgz1m2ZWiCgYZfRGSDzXNRGe3sKgkSAgthNB3phjT8L",
  "key21": "3dE3GMRs7dhaiGcxvv3aewQPq5B5z2fXVjs4hMctmqbXWXRAZYoPduz1SQQDqbWRMVAdZAdfMeaAdf6VhRwFKvNx",
  "key22": "2iFUVwMA4uXbpTFrW84YuaUTnU3yascCZmm3cRBs9oQ3jJBUhAPxgwCgPxbdmbFc87Mo6oL7mL7JgonMndz6VtW1",
  "key23": "5QsH9HUeDZDnwakQf9kxtp8JeZEKgQch9BPhDkR3NoBHFu867Xrcgjx2Qk7hUsQYdo2vuGTuNCi4QStwA1Bgv56c",
  "key24": "3NcEMZwki2aZeTCbQj1hNjCyon8Ywy4gQXc5LbRYLhjKXkD55hK2hbPyUbhmdnyizCBJoQgRHwtnbm9opJofvhvy",
  "key25": "BDS9zjHKPMYtiydeSKzWhhKLvjUcdSJh2D8qDwQftzFNdcRZhQtEK5ctTAA4i8t1mgG2VzoxDrQmvv9Uw3xhT6N",
  "key26": "5F1DqD6HnzmsvPXcaWQQW8XnzDMPhozAVrCi5cmjx3L6s3P7PSctkEcgWZEv9wnqdeMBcAZ4pAEYDmAHrzB8rWfE",
  "key27": "4Bx82p8stTHpSpDJ81iJyZqxduwF96sdXGoAg5Bo6vjhZejKYdMrjs4XFs8FziK5MzaaBssGEb12oXbkrkBXsfAQ",
  "key28": "5LTz9QmZxR59uNSoBqLZMX2yrvyqV3G8dTiUKtkU3UKydEpn9uQo3doRAjwgs7qKEgt7iB1mXvxX3cgbetHGMNrv",
  "key29": "4rDyVwLkF1FsCqniK3EXduGd8oWzKs1fYnLFMkAu3mkjdZjmRLTYGkeMSJm9UAJjXNTqQje8hC8szTGWmFMuW4TP",
  "key30": "4CewfU4sLBL9Wq1JCsiTokpzXjSkLByqCesEVsCTe6icWpcgz2oj3oWWn2Xn3Nk6c6xuc6Ugy1BwA9mkrWtzhvpp",
  "key31": "i9NoKUc1Nuv2Xem9wkqfzQ5qVAKCWe9ZHofv8SrP2gaPnwbBkvhm5wwbZbKGRFyQbJZ2Ae3GAu8Qwx84W5YCJwe",
  "key32": "2d8BTKLYDUPGJo9wQKHKBoe162kMGHzsRc7qnYeTWzb2zvNoKdu71ammAZFHeAYgnQJyqnaP5z6MwiKYRF7m3A2W",
  "key33": "3NeZNTRzENyiPCNPpBjvQT2D12HkYHxcfr7KdE3SFZs4WyDvhpUKSGpvymvZ8amY7qhyNkg6UaidLKs7WqfmiTt9",
  "key34": "3oPUxJbQvKvdK9h3pBEoBHN5K13FL9Cw93jVZp1LqG4KBjX3NxUGRmXpxZxm1JVh8BJSAPdY3Fizwvx1jx4E3ujd",
  "key35": "2i2UEQd1KKfUxGFhKA3izaZJGYbmGdQdfR3jNy7W4vfojWuLXgenaNTUeBcUEoKn33Yjn7Uhk3ZooM6Xka5zvgXD",
  "key36": "24MAXF4x8t24gzcaaaXi8ZRRJG5nHsLx5G7a8Ahz7dm5ryDy8FiGucr9B45NsVGtbio52gS2NGfzVCJEFHU9wok5",
  "key37": "3n1WkNdGZZBqBfBoBD3wWEP2pBhCLMN9n4odp9FY273jJ9vqNJkXVJ8YeiWxvJVxUrtPyxGKypSU13yQ8GLtD8RM",
  "key38": "22peXCAS2MnnufpU3KMPrCGR6E5CJwgqm71AFFfkpKAXKR4c1WWQ8JaKsCrfmRR8Zt2nHHmLwSVxJJzsfBu5iPX1",
  "key39": "3cH6TTxQ5jTpSwMr7gPHkjD8pBTXNnmdxyERkaDd6dgZMu6oWFv7MbbQgvHvG2wSSPWg8ARTiSA4GNKhBy1SgckR",
  "key40": "3oPtKKTWmHVEfBmpak7FaVNAsmqkRq19fVcs25TvCMdNZ7ZWmXNjSc3oQX2x4WQWWPnHXHvN5GkoKhBePbdcdsq7",
  "key41": "4LB3g8D8QniyTpTudcTn1webgn4oWwphucBBZjP5kB2Q7cgWmKjxaT22b9LdP4Rm86iidj4WSVCczRL8hJfWCEgG",
  "key42": "2kKGYo5YxxuAXR8Xb8P7GSg2kapTViEnoDGLsY8DqsRX4YK8Vn5GRyDd8H2dYSmXywqwYWrsEmLyNxMNYPGyi6ji",
  "key43": "6WariZMo2cGxWDvmmbL144k6aB9gRvMhjp82eDQbKsQQBanjLt6qt7GFxXLfB5x2adxgtG1aE3D5zMbZEHzMcVM",
  "key44": "364HahkSd7VhFLbmcoSHWhMFFvvGzptgDEefBzHd1Mu8mCMxC9RTbkuXYM5Z2gR4YUEVeVjitKqvCEHMWj3FHcCF",
  "key45": "3qoDWgEB7Q5n9o8ZmX2dAhe8eJ12xgWXCUwa1AJQVUE4X6n3GtUEqurtbnKAp5Azb8smXzufYPSquUF7pT4r3ycy"
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
