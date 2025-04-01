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
    "3wGdRg9oB5t48Z7YSgUjbhpXSpSDy5LcgobS8Yb1suhDKGeHFM4iiy925YuRxhoZWt7EmxdgRkGfHDPpT7AYf8Wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ub2hWLBES6FLMujd8cRE2dzMpgUieCTnoH49cAEBBbpsAdp5Ri6cFc3HMUy9xaWtX6HAQA2eir5pkKbsHVimwAL",
  "key1": "36uZd2wAuRZH6e4KF1fuRadBH1LymFLbJpGi7PkHe2XdXup54RY8eDi3gWwSBKJSxQQhNHQ969CXoAsgLFHtVYLK",
  "key2": "5usGwALDe5HUfMZum5UA1jKBDweAf2L9bsPzNZ8rZ7gaM5J1zgCJ2FXvPsPiNPNmWECS4U6459HWBu2qHX8Zq6nZ",
  "key3": "2iG2saHhyuSPRnjBLU6SCcCW9wtEmWZFEuYJ7vUePosoeeQbi81fQeNVJLnE1knQnUmjTVzzgVsLP5Lu3fV6ouBW",
  "key4": "BF9YH1fE75sbDxtuKFHoU2LDyY9TvetPuMikKZA3KhyHUZjh8ak1dq3fPRk9bXAwwQDCqCNpPUCMRDsJE9hP2cZ",
  "key5": "oxQaYocES5SP2HgayCNwnxcb2fUvGhjfUry4gmWqE7gVFBxFJPSRYP4xWJG7p7Rwq6G9zs2zYHyHH3EWjgMTcT1",
  "key6": "3t3WU9KBB5jCSPK7v8MvnJkNdHgPxYC7EKVnSiZKuuDcjroFAtQhkAZ9oR91RQAg1ddEPGrVpHguyWyhxxNYUXUq",
  "key7": "4DPPzbfFZypsd15m1P2d5M1pJuyfV8QWqjg6jF83HvjJNpJXyPiy4ixymGks3A8Pxe8LDCV8MJaj4kiYkmYgVxnY",
  "key8": "2Qsgje8buQWo4Vib11BrRHqW9s84UnpkUa3sNLhEZwnpJhEiZrJQzyXdAZfNJjVGviEQaTsU1U3s9HCgXG2GXBBZ",
  "key9": "4HYCM367CNdbcq7guGyvpefwPboxYANMxarqb2Pg9cuCVGWGxePN1m3UwmGajUgaed5XrDjehyG2T6bAx95QP8Qv",
  "key10": "geZVkyureqw7ST4mAyM91jqqDZsPKq4N5Xuy5WpwS76Yy8icmmbTBLL7AazNQPywcsySbz7Pkw6dVrye7EwC1gb",
  "key11": "5UsriG5UxRnuL3hL2LfbWRgHaE6NufTbHZbC2fcgWzsAmoSF45cdvzRf3hoE3rDY3sdsDeJKdigt2picL5gVetnz",
  "key12": "4JZ1sfUeXfCMkZf3QUgVTLFjRF7mUpREEaLMfZhfs7PFKWEi7ruGwqc3gBNYtwUXPvbxoNGLQX6TsvcXxvfMwLXt",
  "key13": "PtttwW2WGwF47U3QPBDR7brLC89g2oj5VRYufLZGh4CW4p4rFjicztomL1Ls1L3GwhsntGaxUPhgVpWnAhSFL8T",
  "key14": "5CabmL43Z9G7A5HNL9zzb6d87JewSUUbirRZsaodoYPx76p95Hr6x1kCKDcBVP6GojvrcTuwH5i88siM5eQ6JFPM",
  "key15": "qPVvMGcAf6fviZ2TWF4JFGvrfBxhZZLepL74E1T4yE4eRN6E1xV4hm3RmYRTTJzEkwr8wuzhJaVxDQiupxqppCt",
  "key16": "4mV7vCdafafzSj2St5vfEL7tFJU475d39QVFutBrdirG13khQj2iazEp3krkPNGGGkwAV5GGWiHWjUBk4SfjLNGQ",
  "key17": "5x8UmUYVyn5A4syKxMcuKUZu2v3CXncBWshunxrNA83yhm6TPBFjrdBfoabVq8j8Qd7XECt9qjVpmidQ6uXvRx7L",
  "key18": "2QdJpN1t5fDGnbJsd35vXnh6NpZwfYcXybyPsf4shFsozmRUiTTvwzjL1rv69eykWQ1gXvEzygjNbAntTr4j8Ask",
  "key19": "3Z6gx2sRgWDT5u4s5zoN3n2daqQPLgGwor3KT8iLqHRGPiWWoHWphv99cdMtjVGL7jVSFq5ivriveQVTTiUT4kyv",
  "key20": "oYFcWcfWGCTRXVjZorSP2ZQXDgMa7zMUn54qwSKGRYn9uRdbdTHCHHxj3zYWXLy8L38gxib2etSTasEFEZjDUAA",
  "key21": "5hkqqMF4JShEJ9ZTPRXo63shGggqM7kRKFXrNzPgLfp3EVXtTEZCU8AvyHYmiX41REBJPou7usNxQfAymN93MK5K",
  "key22": "3vncfp8bmCofBaL4nZqXitKMShNHf1mY22WQnmZAyDWUWcZn3f6gUstpV9jpQaHUUe6GYrWERXYjGTpQeGceSXrU",
  "key23": "4mRLuDkExNJD2vjTBsVdWnzNsgr5h1i98EGqZ7E3YmsA1BodcuejhpJG5TwjazRDj69SmiRkAbttmx6kHWnXvc7t",
  "key24": "5bGWM9jUcF3dF8jQwpSYKFEMk21fGAW8SN5NWFPoy98fMmbMASE4N9yc9UBADQrfchC3wiZyEFnmHBz9UvwdteNv",
  "key25": "5rJ8cuUXYj8MVBFih44fZCb5tyJsx8fXxsiMr2LFTz5JmqWKGHfi7dx4BNSHwKGsLcA7PGB6yEyRhn1U7DtsVdGX",
  "key26": "5JEqeuBjrmRLLtbZhLhkovPFeRM1Dgch1J4yGmnhrGczX6uKk8qYmvFH69QZb71E8cUNMfnRUnnmEUhY9ghaNxZQ",
  "key27": "3UJnmmVUVHK53Kywx2Gz4VDSaZ5SwPiJYVF22TcizgMyepxid5pWFXBUW2a2kGrss5gbNoGrcj3hTUDHvNAMY915",
  "key28": "67RS8qz9ggrzk88Vjf9DWPJZzsf62y7xkrAa1LEBoMcnAwNc3SPQPDjy1ExXHZ9UdcotyYzeidemJezNdcemCKbD",
  "key29": "4fhvCasyVESsjKqh5EGZetxH3Dsua1ZX9b3bxyCC8uePpn1AUyFYKKKgU1VuDSTFiqdfYNaw4uP1if8Nr1NcRwAd",
  "key30": "zPdEkvcMJyvpWue2bccqvPAQroYmHf9VPgUGKBLm8uKdwokVkwtR9LcN3HeWMQ8dvo8iu66Mq5BDfM1xTNfG76t",
  "key31": "2JW6c4jm1fUiNXWPn4VJDk7X1gJ8ETVnGRQSA4L9SNsFShPCaMD3N82FgAtq9BnPcS1UQ32wEe5hhDy9odLBPgD1",
  "key32": "2799xD53Q2wZ6qTfDGmA6Ue6Fsqtg8RHmHxBPvkAKV8yWRkZCtstsm5iXuLFPtJbd8wrKN7XgmmX3xaicYjEcun3",
  "key33": "er3yAjGgXrnSUh7yTQii48KDExh6f7KqgATedtdLCAH7EkKnqZK6ZsbnE4sLaWuWZvpZh4c7VffdDXdWJX2XRiT",
  "key34": "9f3rgPPWZYkUuVTRd872mw9Vek7EcjrUVjVCZ8rR86CNxUshtQFq95eyeQw9Ciozv258sCd7EsiS2B6HvNX8TjT",
  "key35": "4N3A4TEoQ96EBk3xccf3s3uoeN7FUmxT76dU3KfsRTkZJoYQTduJdRNijrmz2KysczA3hJyUsDe8wDXdEYH85aXY",
  "key36": "hkEjPxodh8o8kPQ4niGAq54b5FxxziyfPVsNLRLwW7WSueU2mQY4bcwcm71WePXp1Baym1xUjvDaGu55ECJ5L17",
  "key37": "4kLTjmvaHCkUFJfb9JHgtgeAs5gqC5URtj1C1A3dXhmov8ypKWP59ucFvfRD6TCkPb66fUoQwUgijm465YKURQr8",
  "key38": "EePnJeuCZNWSB1ZCP6SGj5re38bT9zQ1G2CzsiQQ6KeaZtLQhnrSSNcAzRqsUFDgYyG621veci994UF6XnuXBaU",
  "key39": "3fqP2i1BzDVRm5CqWvVNifFzkfTkoVZFoqpT9EYFa5SHHJB6vi6UW139mpv9i1WMRM64pp72zvmZvii4iQ29tDAZ",
  "key40": "2AePjdTmPVySwuhNEjfJTwB1EKrhhfF7SiUPs4KSiUL8JF9c2ig2N81HPqGMhNHQVyXnWBoYEVSWP8N2BzgRt6Au",
  "key41": "4AsXxEoUC41ys4nLdbjBxJFyV7usLWc3X6yPmVSvgAX8dCSWbvK82CTsxmq2U1MG1szZo13f7rYyQmf5XAQS3zuf",
  "key42": "2AU4uYA9zqjZGvpzCw5VuxrJdTpB7YRG7v6j3uTpAHAduewkjqkr8txms8DyhUUMUYoqpHJsTZwzNsr6K5bRXAZp",
  "key43": "5huzUDKey3xDWdcstQv7UUox6ztf9iSgN3hKVF7YHKpKgphYcL99svmtUeeFzUXag4o48Q7GHTzW4XqrrGwK933w",
  "key44": "3VVRw4E5VamMazjwYavZZt7qYQ2STD2HUMMwrdULvDJ84k14462GBxXuYe7xjk2W3vpWs1kZkAMCQ2BMDjWzFqMo",
  "key45": "4AqRG45y28g7gRgp6WBC143iEYiNmf3jiDUq3EctK9HKeYw7ksw7cubjd6ZdhkfpDcDC89qaxhHqv2z4VRpzNASC",
  "key46": "2ZsQ5318iE4rsJoSykXYYHy1QvHG86Dj6pcMcTvmWgvKmezz9Ltzc8oz7qyWGNx1cgK4nPHFerGJAWiwEUshFg8N",
  "key47": "3SKfwmmJuaHKqjsehRFUCt92fRJjyqMER51FE1qi5oUFCB4fPtANNnfZZAHignDawNXS4DubLPH4gLEY2BfADVsd",
  "key48": "28bTkg5KdD1p7uoCrwhGWH951yKdnYnGesXuwxo9QedK6RSz68nQqWgurJd2SKd4RXt8HGCwi8PZtiUbfy2WNMoV"
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
