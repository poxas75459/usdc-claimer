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
    "za9SGMurVhXMJCjZoaEQzVqZ69bWaLhBMV7LwoVftCZ8ij8kt2fjrWxMBLm7aw6CVzZoRDF4URF6vvmMT8NczF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z3rDCER6CcsFiTtNo94TLgz3aUUBvUaoxhgHgMB3Jf6kruHAJZ3u6gNX4oPUKP6tQoNnR5qhjyj4hCt7G1WWBib",
  "key1": "2zEEcRcNx42ALpdvZoAHnsuB32yL6Q4uugJAYUUBZ2EqmioDgWMaGkTCCpwTNuPmGMv3wg8GVuzXhUmGoLar9mCV",
  "key2": "5TfTmHZJiZA5Mcdx14QvvpAsBEKqMgEyKuMpvmF855EPXkAHnJDMXzEmD4pbyfqAYy4HwkeFc9TAS1pgazWVh2ci",
  "key3": "42fCXECsDUPfvR2PRPwAveiozyePzqrPEKikjFjTofdK9AWLsCRcZWVpdnMceeU8SeoNjZui69fnQ2vT9WNhRVFf",
  "key4": "4zz3bxhkx58w1JqgMR31fiU4AHhZJAS2RLtG4kG2MBHDF67j7NgCpX9gTA3QmCgGaGr2giRkhF2aAfMBXRrci9mA",
  "key5": "27YfVaMNvMxA2u9akzgiWyzL9ZxGyDY2LBSAsPpXPsfaHgjCVW4VK757d8zyx2ga7oCmz71fTYfxkfCKtipaPvtR",
  "key6": "5H8sJf645vYBMR5Anw4SRyE25Dp3hkScrmUM4SZpd9ABzU3Kebh18J5487hZrERzxZWaTKubDuEA9xJc2YT9YfRH",
  "key7": "5mKLbhTrWqVaBCgAs8K8QPyLkYymuW65UfvD9J6nLPoFAzVfM5CmWv9XyzCJsdiooQmwJqJrvzcWFaBq2aQcktBC",
  "key8": "2Gj6yd4H6E6nU2XVP88CXkVYLssVLqw6yXffE64bzirtvxNJ5Vvbov34dPqLg7M8nqkRTGs8DKvKaNFQ45LhyXT6",
  "key9": "mmsWiQnk5SWks1PQBrTdPL5hPgyWiVDXoKzxQKcfrU7CY7Q1ANPR96nA7kjiLsDi2ujoydrWicxLGxzibBDuN4S",
  "key10": "5kKasCazz81jyh8Qf9ZZXoRSqxjzbrFGBBo9LEo3pYtEq77LXagk94154MrGb5jiSGgTQnvaYzYB1tayBXtNNJbV",
  "key11": "4ffuCCVLWHfkLfiwaxhL2BhhhJm4rqjhiXosFRgLHEDRYbzuhiyuNo8zrWRvBJhz7C8HNfCPTU9WSxYMDUV1Ziky",
  "key12": "5NWNXVDEDScsdEmg8BNrwuKSHEvf4UgGeuXcMwmeyBg5G6sVpoqu2xaXWmPDvzoSrBbLvvBTybWtitajkWKHCdfd",
  "key13": "33KVemW9diergJGdfLDVbC6P8RcCDNSciz9Ra9XfPW3cYhEf3R65Uow8aVuo9kFwZRpvBe2LTgAZWBUuMPuxdy63",
  "key14": "34fUEm82CqH5piNAqwT1No48kRMwGeGC6HMVZ5RzfScfkhqcpU74zA8TeMsA7sTdZGGeX3uVUQLy2pJhesaK17o7",
  "key15": "55gfJ6GmmjJC7PwpqdcCUZCq3xUtHu7XegVpQ7mqAaPUCTZGvbx8by7rp112GffhxdpWeTjFBmapjnM9gZP9YowX",
  "key16": "4WwCumoQ3YhjmgcNqy9v7S5EqTifhyBprgYgQMS9ixviDFm2cg9q33GzJiCDDTGegKpFBkvZN9JhnEz42ve1fQXm",
  "key17": "35gzJtnTQnCgnHKH2nAJEVqLGJTSbZsx1TBcYQP1E5JvLJLJzkUqPxSCtEZo1wEmWYmY6UpEwAThaPwWtdwL5aug",
  "key18": "25FgLBUizsCdaYVrijXnZwoTgpvAYWwirTXi6ahkfa3Z3RuRA2KejL6ASPkZXCPNrCiZ2Ui3da5ay96YdL75hr1t",
  "key19": "9CwzgkkkZ2Ci3Wm4CiEZy38Sy3AYmijUAyZbK2PoYaXpffRugeKRivstZkEqaweBubJntPCCc4imdBWaQ4rUxJg",
  "key20": "jwHtJU1i7rVbb2CJbc445NiTNnwxSKgh3tChXmcSQ7FrQBASdkEi33WiFsMLNi33vPFg1txGPMa9Brxx4LzpcYs",
  "key21": "3AApv4HB91PM8nSPz6fZVQQLKnXhF5igBKUMnwfTTnft9PNuxjWqd9ZZKxUxvpbbvcpy4P8GGTksSEAhdGLvBHqV",
  "key22": "4sxjhuBAuYaMG5cJPEhR52EHHjNdg71c3sM3CxJSUb5D5SF9k7bcHkJKqQ3bbxJxKVqmnqN3oLURuWUaqKCfqhMT",
  "key23": "3oUALNLi7tdHfGEeRJBWYFVBLw186WabQcFhCev5piWbr2Rnfqvh9kuJozHepBaxdRd1JsVr2PQALs4j5rSTdLKH",
  "key24": "5agEis1USdCukUj8q86mk4bu5RjX1xfgZnxRHNy4r1PNJeDobqgMrKJ931g5xi3iABvurMExw8wrHmr1L2Cabus3",
  "key25": "vXR9V5iBuHprRpuGXj9szn3ZRRpsaB2sm9fwKSsHHaAqhzFJ8J9PTy7SV3z3Hee1VVhpYZtatGzsoZekw2bW4nM",
  "key26": "3fjmHt8VBwMc3CYitcvLsxnNvCBoAsoFB5Qn8Kepkp6mK6KWrbNLg2dTSv6Rz7roRJNtmufm5Vd6nnpBk1cga9nd",
  "key27": "5V67LUzvaBJvyaR6xA8bGwKNmkpYjWem7tyKtJcePafNAKNkGGoukcqGtHYY2hvja8hsdfq7XuoRzxe8Kje18eWA",
  "key28": "5qrcvvXopBgLgEBxCa4cQGD9kRkaA3nc7sBshdhYhfABHmckSX3H7Pq8S8Q9wjSVUJDApGuBpergjRrr8QoAKy4d",
  "key29": "2DRFQ7zRMoHegsJyD2yxX8nKu2ENkE8iugge5RnEh2f7m8uHsq3HBXHULQ2k4FuqADYBmfduufETnaTTNAqpCGa2",
  "key30": "3Q2SEak7QvW3kSmhK8apgAg1UuidesJkQneNt1vwqULU3J6QTdJVY6hp3RHopywQnhQMLdv71FvFVsyqW3sX7qNk",
  "key31": "2gzd79t7wyDDQTgayofLgqF1zc7Y8w6pQvQhfopBpXPsw7i6tdnNAYX2fuVzDA5dVZf6yaEWsCi9oZqPnVnQ8LoU",
  "key32": "4eDmqfScTcLyTbusP8dQGt36NCECVYgWVR1pZta97F3p1erzvZRj8xw1KT2migtFNzYnoveZKphPprgg3Eme1x4Z",
  "key33": "3hZRBrPSLxWxDkUM2M3YWtkRjdaPu447bB5yb52T1APJH2gYN9uqRb2mwr9DdyTkgHR6gpxgxqMqgabmgKyULZY9",
  "key34": "hCcYQ1d7snb13EKmNEGF9qwgRRk9v5Df2mNvuoWjn22xZr5CAsGkAK7xbVX5zJvcqtwicqoDLLbxhF9RZRUaz9D",
  "key35": "q9CyYjfnNSJ1qabsAyyrFPVnWDVVLeRnMWhz2dEchR1YviCHkpvWPBX7S4ztRMK4rkTQ5D7dczAY4LDYms3N1DF",
  "key36": "5bTLegW3TnMdXgtHw24g77DHVbFnUy34kwgSxbSTfQUy5KbXuXGuWirxUvXiRhGdToSRDvBvE9FAoGChBBiVWmsc",
  "key37": "3833qg7FgMCXfWXXuMWtDGwXTRnPde5Xkk49Rc1j2ULyMw7NhMDfpeUbJgdztWvn6VK4obzEnM3oYLMtw7v7mr22",
  "key38": "3KJpGbX5h6WxMKmZvEYjfsBUqvYTQFjBauLLbmmj8C5EiydA4YPnuKT7zjYXN2vXAW3SgoVhU91o57JYrmFS9GxX",
  "key39": "3qiqPsuSKQRJt8p5htc6B3oePSEZ8ANt8jAJLRkCwNSPuNkkwtSykgMpPKtXrQHda7DmzJU5zSGNMAnCUC7ujgdu",
  "key40": "5f6MBH8pQ5ELr5MVG5jVGbVSV1kJR6BSuWKZVZ5h2uazkNQCULU9hEAVoVwRdxHtW76pUcp7nqq8tSmFbmQBT18u",
  "key41": "XyDA9hzdpJNtVwXXFTryqqtvXQNuoyKVTLERziEKM8CtYY67EN8AJWhP1rh6UibcQ9L1C9t2mnEhSSHudbD8JF9",
  "key42": "4ASQtJabwqS8XECtciHksmEf12Hz9PaWquWvJxAH281RGA14bAFRNeCCJE3eEze4JbmWtDBL3DLgRTzdtNgDEJad"
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
