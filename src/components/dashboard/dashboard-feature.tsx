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
    "wzfkuBaeyStfMShPec4XhCjvjwT2aVfVZeYevrpHXg95H7sQXrVB4mcfu5Rm6A5VAWkuVqRcjRizDR499FA8QRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KP2PMuR8UFpi8jDQ5D4UPAnGaZt6zfvxy9gQoaWGAChgJfLAbhnjCmKu937sCygt5cKuKPttFhdTTznWyjhB1vA",
  "key1": "5UUKuUNNC3Uz9ivcWJRd349y5YuV82sDiwQnYt5NmiNttbk7vNAsjyvkfH9x29bmm9P6gsuTJaoDXLwRRcAmp3vM",
  "key2": "5FCDLqnoCB1LW7iPPe1i8eccPyZz997u36UpaHDimPHWpUSQz2VbjQ4qNJ8zpG4t8d2KLYvan3ATNQxFaSgybRq1",
  "key3": "2kp1spQajgt3r43aBWvCBY25URwbEK8x7kKSyozHrETTTtLFYM4Z88zmgx84cQ2etaNMDR3m1yisN7RNYhGNfoNA",
  "key4": "42widzG6TFQWqmVRXepBino9rE6SP2jZsi9tp3Abw4JtxsPvztM6Ehyzh3rYVrERnSowz9FpVi9qQbxNdLgVs1Nu",
  "key5": "2dHjKdzRadu9iLKGrHW4ASodQQST6GrYZYSAVSSk7vZMnnky88fEqbKuTx2Bnkeqqz8xrqXc9RrLk6NWtY6fR8XC",
  "key6": "2ZLxdT2krryZAupfawqprmJvpGGKUg8bygdi65fNNHsbjt6Eqkb4GWPat8EbR2em8i6TBj1PPqgF2ZUsmgeNpPN7",
  "key7": "4Fhqou11N5qFVE7nJL4V6YjkysiHLX3GQtjuK8outgrpjY3hbyj9AkxAyAcFp3PMHppvLy3udr2DcokGN8Azn5Uj",
  "key8": "53Tdv4TFBPqrmiVVgsN94daTuUS7EeeP9EKK3RpE1KRhnHjr26ANyuqu1Nq6jxfxfqhCraCGutmqsygvhiufRg2i",
  "key9": "2Ng8cpczPHy16cNNq5GiuXh4jGyEvcKNt3QELvxgkfbDiYNotGx4RYy3sEYNqiKyvEFBE8rj6qVMuPRB3k8vxLTR",
  "key10": "59bvnqLuW8ZktcqzZTVS3Du8Ntm19zH2cJozJ8NEooXJvHAMtLgV2cowohPi2qNGRdTWCmaQEYrE2zELV5Cuk9NV",
  "key11": "2pcBSb3mTBaZ87qpiByCjR1nw9VHxt3s1oS6aDWURAc9z5SDf2REzYZr6CSKiQqE6W5hy9zQzGCNoUXSW5dXx9nH",
  "key12": "hKWm5YuASy5KARMD5dSf9m7kjWcGcnNEq2Gd72uU1ZEHGoS83mMwPfUh2mEeGydtnfpwUpZ9CZ75ZpuEN4Z388W",
  "key13": "3wZKe26ctogUw1sDn1hM5NqFtC2AFXqbbFtTwmzrPYJ6JJNfsvGfyZs3PJWRwBsJzGdoS9jRXT5YuFDwJj24ubz",
  "key14": "LGUbtJL6KfezxDjohKjJCshsiCaXwD2CbzXg88TpG86qHRFKRnYrs4ehAjuJEQxaEc7e5FEWK53xJZntT5Jan2T",
  "key15": "3iHPbfeSp3uiG9E6QRvoc7J6tjHXqUytKwyhoW7ezunwDjPUYNdyEg3NcrPAuXe5Ed5Bdr7QR4QZNUNvRrvzYiH5",
  "key16": "5JSMGWrxfzMKooM8pZMut1dfCq5k7NEm3UPRCZVcqTsuG2xYTqwqebaY1r5phrGdysHBro58EYBt5JLBi3gCjir3",
  "key17": "4BptaJnZKHvdEubNkt7gE1D7qeTFjUF6Dt6GwP2wzvq4412ibUEDP95x1fPehEDYqtbGi8YChmLHU39LuGcEanjA",
  "key18": "59PuxW4U3GjbW4oSSpSET3SHWFEWMHMvuXUickLksUCKMyLkag1Bn6SpwrE71bZCCrP9B1sPhPnPawcdqy5kXRVU",
  "key19": "4Tpww1Rfdh1FaLBKxmotK54mrWvhZMcBNmV7DfavELcXKcZAZuGc3VXDaQRpAzpT9qn1e8kjEvJXndCi1SRcJJHq",
  "key20": "5f2W6sGrnQ5Xy8aXCz2NisqXCohYXBWT7uJdtCXx22LQ8x18wmRUb9pvc11UVqy3JApGvJWpKUR1VRkRE7Hbafrj",
  "key21": "4A8SLe8m3C4tKSk8xBiEWeBvCfAvX6njU3FP53qDczBjc7ymtovyoiCLwbPjjEqvQx4RpeimgK6MDAugtC8uf8U8",
  "key22": "4Q8rMWJvGzpP3DcpGGoqpbfERsa6jun2Y3BQ5E5sXCiogjoRoDtEEtaLFbxUwAH8zKybh33Y8bFtrdYgNfbUyQbp",
  "key23": "5g5VYY73AasaBN72vBQxe4LdYa9jyiZuLBCYHQamss5wJoePLmX2tjLQKHNrX3WLwnQPWWVUrpRatfxfdzNPKCHs",
  "key24": "27GtaiP9ENm4Z6M9Ah41CdNDvquTVM6H1WWnzDJUapzdNTgcHXRZq3fquNoEy8fdQTmhP72PFZr7eN7s8Mqk5q35",
  "key25": "3krFdgTBmxHGAquz1uFEkfHvTs3qjykMbfQoSqB8Trqx1vFbsGHbpBpcGvNDKK24GBCr5p7stgU9bmeW3cG9LY2T",
  "key26": "5xisBMM7Kcb75JBuRchTzs5j3u51nhKrEiszGLcc7foNbuPPEAZ2UMdieXTr1tJBmEgLYSQBumfA2qfeSUPsYUDQ",
  "key27": "24aZb49jqoztTvJp9aN9qrgnkh5w7UebB342R89QfzQKkHpnCzDZRZYonB8gxW6adAmKGhd4djcTnsYSd5LQXJYM",
  "key28": "5Ardfyo1Q92DUvA7hUEK4roGjfFew8mNjXhdsSx2DwnrctgjGaBTqchNRCG2ugMTCpWE8sMpyw9vxWGhVJgihCYZ",
  "key29": "3aqxiuEmgLpnXZYeVVhcW9rYvjxbAiiMZMhs9dDX3ALq7BwKmWBLB3yz3dby1NX31JuNjNcUrZEk6to4PkJ2tZYi",
  "key30": "4A176HuQqMat8c4D7U3VS8FyyX7BFK8mGpKyy6dWzQCi5rJKjrV1DvukMySzTWxdeee8JkaaRB2cYmPVbmnYvR6h",
  "key31": "5GyQpXnMoVeaDXKMNmRfKEdPPWNife5KWxVjcpwPm9GDKyRNiaDu38fLChuaEaALQ5qjP9EuTGj38eeXow2DUftq",
  "key32": "4WWgqMVU6NpKBQCM7HW4JfUGYQHWFnqZCJQYvB5P7oEyFEN9GkXM2rYeCYkrHbc9pketUEW58S6FxjK5V3ac7t9q",
  "key33": "2CWCnxPbmvZhpRW6JcWqwhusrgkS1csbvjKWAZj3dxQaM94exR1Bm8ZyxqnqPMkXnATxuTEnY6nQMQ3fWm2sRrtk"
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
