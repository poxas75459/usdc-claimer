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
    "4EfYRaRY7AV57mmVGV8Emh7iua3RcarbwimZBrqavZYuEjQaSjm8kFFQBUobdocRq6it3V3XNJokQCvmy7qz3ZKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FXQDKMXPYbMi7ZEaBJo323AV84Vs8T6Ff2inbsPXQaPweXKXAsUiDwSC9W2rwxdRtF97UWHag3SPYttW8Bf36FW",
  "key1": "Qy1EZitcWPYi1UwV64fubaAkPAWzHgZd2f2P3jxgR47GowiRnZx5zvJw9n64zng5nbn6h5QC8mGnAgVHFxCx1Ka",
  "key2": "wbH8HmZbydx9sLmPm3KfSs1G73HKn2TGPbroRFmjXrH33HkJcpvB3QFkv91feQDfjBfDUmyxUbGP3bfowc1tfms",
  "key3": "RyG9pCJcgqH9jyWkt1yPBGB1aC1AP9pA8rXJp8AFKfFPwDM4jYBMcVBfniL6xQVw9BmnUmxFzZ2iXxfYhheNzCH",
  "key4": "4DEr8RyDqd6QUbqULwKHCiFNZ1e2UWWQ5gMUaQZ4SLc3Fuzdv6PcVDgQKbPjaGMVAvtSVnPyLfA1U7ix4P7EYysB",
  "key5": "2JbFHXCMM6AmGzAQToxL5ABQcGQMKhZXdPpnR2BiiibTfjcYN9tuYJeBHMFx1sECoWD4QqH6HcgQGs2Lqjgc1oEG",
  "key6": "29dCChqanrAWfbsgDLVX978ttsYCv6oDV8tEnrFaEjKa5wx4JkmYcYe3BZFgKaEdYQkeGmYENkQRz7DLtTr7WuxD",
  "key7": "2Bzb9wftsukfS92Xb5Xsvmia8iPsVpKP1R6zxi1B5fwB76gG5ouKSfgCNCsfR7KcCBjYxmpZWUnBkjuHNsJSX5R9",
  "key8": "4qVL5MVNUvfzNyTMdyYT8Q1LzyDkMdu9CQUsMVGVf1hXWSppVXZn51xYxL83cGLZHKh9JVVazrPJRa5NKi27aWa7",
  "key9": "7HNwKpBTy7Zzmhqqy1Vr9t9QpBiah8EeR2f72pqRPxVfPcTG9k2HQ1EbuvvzVTS7ju92hBfhoWNcBJfciYa9zRv",
  "key10": "2gHnQGSj2r34oaoitJD9ycLXhga6xbE6Lysk2mEkZQaqzYkrP3S55DxJgchEr2GtnDLmRsuyaar92ZPbkLZJn7eD",
  "key11": "Wz4rwR1LEy1a52UnE3GaJdmziAdF8zL6y76kSbMKL2bVMiqFTfhJ8VuH7CpuC4sR6i6dC3D17j24xZZBCbLjm3u",
  "key12": "51xjMsPyQUZ6DQSEHG4bJhTZeAYETqB65nyqDc1vvQy8KHPNqhvyFK6HNvVVQq9ozQwx5pqo1okLnhGDkpVv7G8t",
  "key13": "48w9emj4W9Doy3bfdfsip5N6H2pE1S5guugqdqC72GNTQ7hpSSLRxJDNVsYyJCShYiLvYoC2fV2VysoXxiRaNjGx",
  "key14": "ZAA7TJEPoCftmDFHffEKsqLkCJ3NY6e3ACsSBEzhbZSwRA7oScf5yQdfBPce4W1AZf5eSJFuLZb6yHmeUY91pwR",
  "key15": "4Lfzo8TXnwtQ9oR1DesCJEpVwx4SD5PHzRwdEhYhHseUVKvGgP689TD11Ew5UE5SP7gMECQ2XYSokQiv1UwxNdG5",
  "key16": "2MrX7qSjwpKpMrUFxEHZ7bifP1pYdapiYR6uJKDaDbQrxhXFuiTZDuhdj5zuiWYwpMBxgEHctScADB5uM8ArsrY",
  "key17": "59jcXjoebV1DuWWtZEsS1Fbgt4dSJVAVQZU5GCAt9ufgvZAK8YBBNYUKLhRXdEm2n72cChdpnNjMao7rHDb7NuvQ",
  "key18": "4UZ6WsfYX6Eu27usCor4rvYbPuRa9SpSFsjSABtuTFgw7hghC6ZDQ59aDerrnHA5YAURmLzrKPaXkb7AXS1jM9U6",
  "key19": "3fcRyCV1RRhoYN3Rw1QvnZ5U6rYuaUxt5L36VRvrvRjQ3T9FVAyxSnJi2vRw6cCDRP2YqCxqTug73pcyhgHDWLBc",
  "key20": "3u9pwauPD1nsHga5oMrv5JkrJ1Ftjgf3YT9aEK7f1FGFwrEvK8P6Cphx6RWrGzjY1MjNHjMyriPkJGsYYDBDGMKz",
  "key21": "3XWheqr2THqaDE5Hh6EiaLiUsDihP4jyrrdh848dV1UMQfCG58MAxeym7dvKQCpnLLwQ2Wbvoff9HunPhP2NTsUu",
  "key22": "2vXJ1CcAxPYhwecie15ZVQC2p4nfyEekrFAxoXUGsLHf9K3vE9QGpDA8KqF3whzFB6oFd4heEUaxnUW2ySbwxjUi",
  "key23": "Tr54MLE6Fzjctmv4hRaCcgzDkMq8m6hhQMBzm9oe8DMwVxzGxiPLgHMRwLD5UWqkMactSUpxcNrSxyUrCTK9DSo",
  "key24": "5BbyNkPysZBiqryzaiB4D7WyxN2xUF2rMRpfNKnGHPnURQJGU2UNB39ZzQgTG8B7J3L6ZH57sWtf9Pekk3XawVRE",
  "key25": "3KivxdJuDfFVhbJfHKWEbW9Nm1jsuzb1xvwGWVnKWeBHb6bw1UqeqvZJ2nHpnEXyhF5CzeMQovUfKWC4iWT7RBjC",
  "key26": "2g1ajtJph3RmydYwkCK2uJ5tGcfNZgXZYcHhvmKYH67YCN5XCdd5qEkju51w7cyCJtBRKwrqiJHdpjq9yenWcmbf",
  "key27": "3w7ka3WBLGJdq3bfzhhFYjs7ttDvU9kk1BwpYskovV2Cs7dEZMGobgMpwi1UYjv9txCvAZzRKNSiKAiYhEDyKckL",
  "key28": "2fkeHHXutg9WTDzPppQNVsLuaLzZ7JMxHMb9Kq7Y4nSB18cW9Z8YUon4FuQDhH8eggHpXXzde6ia8EjaZzVKr9wL",
  "key29": "66YEkUiDkHyc31ULkb1PgXRKUAADGTXVruKrE4jcgQvhpSiiywfqAMyk95KujSSzkYMyfv8ZZuqmhGPsi3mYgbCT",
  "key30": "4GLwgdPvk2wWAdwLzLrWPU5wuLBw5HCeTsNuqwR44guC26d61kmbTZPdXH4PmUmoFBM1hx9ak7rYy3sSzHnP8mA1",
  "key31": "ctSa6vy7ffv9cCr8JUPPnnro8Htemp6DZi4LS6TzbtciHjrSxcnAisRXKFEPfEtP8XRshRC46huaZj98T2TuHn8",
  "key32": "wSN2yYyGhTcEVL9uKp1qa8sxfCMFuNe4sBEmsjJ9PXdoWNnMpPvzd25CG4uRWFHEm1pFjotZrY16MLToWu4pidW",
  "key33": "4R61fBzYzGCq45Y3W9jpfhdzu3xCL1Ebwdcg3eGsqqyysg9sVuvfYLkuU9TjLTeiepxZrw9t7jK6EbxFD93PiYBj",
  "key34": "2inPh1EvihjPXfCUYwRevCSAVq9X4XRdRDPbwuAgrLXC6g8GHi4kyq5PSRdmAHhdDsjEQ5mbMscUV1pisYfXr9bU",
  "key35": "2ac2Lio1zC1rYCgYWC8E5pAwCrETDqUmJKJd93yJmhMXGonQyFKbJH1hX2DjL4toiQF7LXNN5Zexob8pMnArz41r",
  "key36": "jGXbSVbr2uvK5zgi28Yif6MbMNdQMv6Crn3wSfdLYTGKyCBP51tJzSGDsRZ7zZFndjVyNcxJqWa3Gg77CYm4Kn6",
  "key37": "64Vccc6WG9Yo5y1HLDMbD2faMjsYHubUEqA9poDYT9ctngh3Dxp8HsNetvd1AZCahstRMSQhFpVk6RqsN3rEwCYD",
  "key38": "51mzeX9bEMq4uTwp6nYXfxtQueVfUbJjpsMYFuVhF5Zy9Q4y86qaSPhdNJeu1dE3GeTVSQGgcWqJYeE1G42gW9h3",
  "key39": "44cufGoYztXAkkagJbfWJjH9PrN9d8NpifZVx95bh5d1m2xHchGcKdphZN1Y4rzgT28MGQMqgs4ZZpTvCbiqVXrD",
  "key40": "3uu4nY8iqfrQc1gvtVsRLipoDUWt9cND2SrnhTdLJGq5GQTYHUfFBxV9GGM8hKfMBAnymZCD7r6Uix9cWassCkri",
  "key41": "2S1YUjB7AVvRUwxm1N47N5j9RmwRmJjRodYAkKSJRG9NyKCPWwkgnmmnWLeqCYdx1SvLnJiZ87sXMxFY85udhZgB",
  "key42": "5ovrqETiym8v4vTXPWB9eEEv1NPmfBPtz76A2T9Y7efuAXbbq6gpYznwaoEqueXb2TeeedjX3eApV2sAnJqYFDi6",
  "key43": "2uhrpJMJe8uk93y4XUK8Rs7aEgNqmG9xr1gc49mpi3vTREnRgVA8GJN6976WdRbgeNdR2F7EGaDskMYay2ZBxZpg",
  "key44": "5suPY3TUVwfSWB1pHniUuCjVyvbjMNjGGdVMcPcAimvNRKfj7QLbbNvHuNpieS726zjQL72DJ7YSo8DXo9QyZAoZ",
  "key45": "3NnDtdQAff791zB7uUiBsvsTDyWfcaeVjLNw5MrLiEYJC98oLaToMn2S699wzGuJzY5MrQdJPHQj9ZXkMKNEDbpU",
  "key46": "4HDUUJE2yDA37gF8DVH4LYn8ki76JmDpzjKARHG1GSwMetjjQyV2tepBGuzUN3hzkuYUJ8P6DWPD6DzxAgCrnBJG"
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
