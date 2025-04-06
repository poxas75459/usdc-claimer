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
    "4wt749SeeCotmsMf7iiRjEHf4nzxPd7Zbmz3yt6xkEmJ5Vcm2kkqJAJBFj2yB8JGgr5EePHscLJU7FSwoyGGQW8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BfAznCo6XPUsqYDj9sLzM7s3VztxysSNjTkzvH5APb9pJX7ARcdNYnrHXafhiWzP28u8i9ifeSHhxHkKBiNCs1x",
  "key1": "Spdv36ZbnN8xw7bjYYubecGLNCmLgw3vEQX5HTW4XKJtkkiPJkA2YueVw6N9ug9jvRK6oNAjKNZb8KAYWASk24N",
  "key2": "3EeYojfLss1dkRv4TyBRav9K2idELmGWNLMQiy6aU7NkvNzuDZVpoQ8YLHP4iuqLjTtiwCMMJp655MwoLtoGsaZg",
  "key3": "5UW5QVUbazj2wP9vTCJHUoMKMfaQ85WYNmEVUqf53k4SmfZC9HKCQAE1KExS6HYEMzvmuUd9SeVTBGcNF6QQ7fCe",
  "key4": "2srcq7uYPvh6wPWVcB8ENRkz2aUhjiLrVi1w3cnazP7yGkrqMGgS188ZRnjGiqFWtAsYtc667MCJqmkhy19EFmZz",
  "key5": "x2nm1YZN3zspmvjcFwMbpJ73waG4o6QR1CsyKBpvNna9FLjMALJdSk33JxWTmPab1YZQnwkig7VChVzdg3PDurK",
  "key6": "4CY9AEDdKStRb7o3PY7UAQWJfe9EjMjHsG5ARd5wXLRwryg4DRvqdCypkKL93fDn7cQngyCE8NWoB8N6Vcb3RkLY",
  "key7": "3jM9Ru5WpgDszR9CnTZfoqHueiTY4fNbR7jWHyCtczXjwhyVYmhyeZf7stbTpvx43DDRXuai9kvTYmAaumsuTror",
  "key8": "KZxdeZvTu3sj8dGEQPbFG3SUiqW4A124w4SFz3aSi2F2RhCvXBQHGRy7H9eXz5KVSDY9k3ghR87o4gdjPmpketQ",
  "key9": "2qQ3ShogHioTWPE5zUn3EXwtNmh1n6QvQjPZ76pcYDT5zQws5axqiUUiygNYthyMT7iNp9drYA27WtmyX7TY3qfC",
  "key10": "2icLFgY2CVcjPCBBfG6N6YZq64UNbqKG4kYLyktQosr7njRfanKnTrabmMbZ6T3WaCHfJevpFPqvWKwg8qCDTprA",
  "key11": "5PhE2t7jqGh5ys88zBRuiTxBT8v52Mynyxx1bgqr24ZPTJR2Nzms4bejxfyBkDXWseEotCd76y6xJvxi4Tym5DDE",
  "key12": "2Cr8CAXFXpPauuNTGpsGFMurwPZJD729r8Cck81ALqFyDCQhWw8oMcKB7GNvA12JEfr9W1myEWXgQx8L1t8XKrpt",
  "key13": "56dW9LSiJLmQsfr4FQSDBH9PoDKYfPHb2GSivod5u5MEQomgMsiYb2hNnDsDzj1sVbHNzdejLCYPRbsddpiJZBtF",
  "key14": "3V7ZwPJaarV3yizJYUi6ig1nFbyitBBPxDhdKF3WT474vXsQZGjjdELneAPxNc3CzjV2pw8mdK2wzcLBLQRfmTW1",
  "key15": "3qhMUwSFFcAmrvwgAhg9RHZrdcu7pDfpUhLu6RzLKG7v9bjpzPo58BeSdzhwBUpRgFYgaMU8LvNkyyBDHTWBas9C",
  "key16": "2btMrsDiRCnVp5f3KKX4m4dgUToEcW3q7guFvAe1oGJwdeJuRPyW1TJZuv2X31xuAGwLHy4omj3qmzrtdNYLnYYK",
  "key17": "3eLCbvzTZkAjJCffQPRQewKaYvAbVWNpK4gFbC75an4BexonnCJL4nqRGCoBNGnXJkhjRrQiEvx5sm8RZ6Rha443",
  "key18": "2T3yfNiugP3qhfa51y7bP8cow9Xzf3dFVjmRZBeUXgVx5zLZjuVt7MSUxSD8QUYtegjYPEKmGt5sfqzr6ZgiWV74",
  "key19": "3cgEafzViPFZGbKec2hftb7Gud6YyUD8ucwsFJ2TqfoSJ4cwrTQk2m4pK4YAwyktaypExYiNgeUEzZ9kJeJhsnCX",
  "key20": "5Ebs85WgRTyQogqXiehUyjfvL333bxCaokbBrVSyKvGnKLWW84QWoQtCnEhKgzLeNbjg6MHhDWP29ySyWzQdDsXC",
  "key21": "3eqNMjeADg4sbev3uAyxStpMc6cWJ1DpdioYaQF5aHix6PkKTUf58MLcf9uBXwzGmteRfgjdEKkMmhQMyfzfen1F",
  "key22": "56ceBatBQ5j8nFmnWjhqc4Gzq1UCKtqXQjrGHuuzH1uNZQ5rwawKk4igWftD9CyLzf8BiiZdCHm7JukRu6hufZ7e",
  "key23": "4zVZTSmaMorfqSFVGzYrwhCTidoEmvajuF54Sd3ZjTMY7Hs4oQ5QFBPT32g9mpqbpGAavh6kFBrm9T5z2YSPAMcm",
  "key24": "2LM5WSM4bw9XAFdxiTN9sbNCGcWqCWp3Co9ScN2wizrfVkLaJ2haGgJ86mYK3KDbVSrDEyLww4212v4SfLt2eFKe",
  "key25": "4rkNC9YDfhqPix9J8qMgxGdp6FkoeUS2uwkDgYbvuNm981h2RNB9V5bydMvsYd3H3WmQqtodbRGJtP6Fbg61vesz",
  "key26": "2qnhKonJMTWGPM41mqQmcSAmZRHwY8ZhYVYBuEvkryMYczci8tYmKLzm4nmz8CzcXSwYQsLU3ZSy1AAHRj7zfHN9",
  "key27": "vy2VyWQ3tEY8JFYeEjxvvgh68K7wd2w2TL7W9D66CBKXZFA3AsSGHj8grafvWFPRS8r8eCtf9HQjxNasNNWtom3",
  "key28": "3ExM8N2XrwM2L4JaxDB5oH8zPu9azusJeYfaJ6SCEojhoJWdYdcEgkN871jjdYdQ4xmdXiGDBgRe1FdbX6wsdwaf",
  "key29": "26Q5g3DuVxir6KJm6ottEuj1bCxYy5tFnkoX71fwHrVpYFBjkgj6MF9YG5Xp2fSohkjztuCHEyYzUjWdrTzFWuzN",
  "key30": "VGYfV6S2pd7Hw3mGJcAwd4CiwZLWpdgkGt7eMCykWmznNhtUVvwvk1TvtVvEsPmmmbaLByLEaVCzZXTc5Yo9FSN",
  "key31": "3G8unai4HcovYLff7neVDxg8HdHYP2N5spD13XAi3qyCVqnZL97dYKtn4W5gcdqn5nWfDdgk8Q1VuV81LxzVCWKs",
  "key32": "3TVxzPKEDVoyDkVBVSywEy5BhJBptz5JruGm9zAUTddGd8Y9e5f6SQ117aggkeQPUGN8hmNPVdRecG4q49BMk3bm",
  "key33": "3ojTGvwNbdevQEwHxpRXYHh5SD6f1YYWK6mvef6rfan5R5NCpe4pY3qsDpor2hrboCHDeV8WTLyPQCAx33X1Ki4g",
  "key34": "5rA4GPdTD1dUWLb7i3pK68MJCWeVBsSv1kfDQ8j2KxS2LX3wFNEmW1u9BJgEyLmZEtRK45LUypbSbWxfKyaKWdE6",
  "key35": "36HmJjo3mXjk6zxhSvUnRNREj5KfqQU9a72wpVEqUDP6tYLdCS6W8uKSgMknaF9zLsRmuVhx1u2uVVrmgZJM8CUx",
  "key36": "2uhhJGLXPtBTB623qwTv7CQfdnVUW2QZLz6DqUrEvA2ifkkjRLnixfqNiW54PAWXfqHKc7fvVWz3HtRn93s15CM4",
  "key37": "2DhKu2pwFR3R1U6MhSZwM6yg92frBManJ8FhzwYiWiYLRayRfJEa7X7qZA29X4QQiVXJKv95hhPqc5PLhZw5BkWE"
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
