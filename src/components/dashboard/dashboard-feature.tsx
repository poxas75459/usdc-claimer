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
    "5njfUfJeUpXrUPMMPUy9mWtDPa28tjvJ1Z3wX8tw2mpByAAQBccMEtDxapG58TvQpMPLaujkktMqAYGHnmJTKRDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RHFPe3uU7MxmYyi3rbeGFhC9Nk22NhJjBcyq5P2gNuLVDy2Sgqb1cuj2x1t6H1VGo9SoAZRfLq7ULpzp2DbwPu6",
  "key1": "EasnENcj28Z4DzUS4D4H7ZM7xwRBrXF8gSdX3orFEjpnGtGppcjuzipmmXQ7HBY5tgGuNCNBrVWQzHTbeg4yfKr",
  "key2": "JFXKhrN5K2FQ8wU4wRuQruRUBK89HXmCCzRqgddGEVZdyup9ibsy2hZ1zwnhnhccp6hdyxuZsL1gdeaTcjymndu",
  "key3": "66i73A4iqiwgsEGKVeoYTYTuCr4rX5dwB49hAQBVmuqwnxGuxBypBzjLiN7AgxCPSQn11pdHRfY7U9itR8eM5keH",
  "key4": "RpGad81y4V3p6fkuag4VfNFPbcLYtQXFBLpPnpxeowmgXceL7n31JmRoYniJuwPksEnzNxcVdrSecyNA76YhdeR",
  "key5": "2ft9JW4chxvKiq47ZSGTgYYNF2HPBnMgxdvYWbSQXAq5qDLpuvK9gkD8iL5fSShmvJCwtzEccgBA7k6o6ZmYGuF6",
  "key6": "zquvmHR1CNDi17Cg33GhoK5HKE2YWkTC6BBidrpXpab6pyS9mSDez8qLh9gzhDGsYNvwuj6nQd3Auz39NmfFhLb",
  "key7": "381NhYyBTr4Hh8efgDRuwEg238nY1m89r6egNScboW7wJCkfTk3Rq4m2MqPnnnmEcJRcUuujzFNTn7v7fYg4mqn3",
  "key8": "557TwgMcuaFQDqZXw75qBmkgybp1EbQ1cGCPiFNUrVkDSfbvFAsEz9EWeYRgvUr5qPKYuk2p6juzFF34xAWeXJPN",
  "key9": "3UNp2eQxYo9kShiwe2P9XvmvJFupu89rAB2SnABAPieWNYaNVyqY2P83zx5WZa3Tqta2bj5ePyyJykC1BDzrHbqY",
  "key10": "3pMjXohZ3dQw5oae1yEe7ZnKoYGR5urX2qNcK7XPboF2vxsz52SGQ5PuWjBmQJGPKyhZeMkx58tz7bYFFCJmoMKh",
  "key11": "678kX6d2YjfpAfF2AnZoGNiSoQmcBidnujX96QQeEvahuWqDSFu1ASBzVaTrjghkzn5aS6qEXLbV89wrmAa2GL3z",
  "key12": "3D3CXgTvD5fRac3eVzg7MYLp5QhGswXT2EBwkHEUt9NNCXPiGketGXdAdajP86ozsf6ykDLdNnN6ZtV7FzZGePQC",
  "key13": "gyooD5UWWwhspGCWH7vQmg7ygn8RK7wtHbLXWQEFnndprEWLhyUSF8g2sjmdkuqdY5qbSV5bzpgF6m15hpCMCci",
  "key14": "32QTRVuvUBz8t2h3SkdfcHr6n2jAvmK2HmpgniXYKivYQte8QiMenNskijUAfnGGLV9B7S3h3K1PgMatBsPg1mZU",
  "key15": "3fatdNaQJ8r3Mr1KUgV74rUp9jR6LKwiBkaugX6r2RCUuXtkE1yk8K9yTsd5feAVTWzx3f3mJ7NdtYRZhteNTSR5",
  "key16": "2oQZ18FDQoVSnSk5zmH3hkS1Ek69a6B5eMDqX5M1vksAjq33c7Hj2NdaLp5gXX6y2UVY16CNH5m7nLwFJJWqBVL6",
  "key17": "22u42nQWuD87z4mZFesYqVWHWAxUEXrERCP5o1ygM6jLHXbmoMnFJTn62WYSBtycazsNGwp9mnWJPsTTL39AN8Xn",
  "key18": "5DaCy4TqGwbuagv4hcKquv6ob8zRsuyJ5BHGUWZ1PCbw4JZPwA7qk7VsrWDjd1SBj9FguuAgDyTgBGBDptykoZ8N",
  "key19": "3HN8NEYvrMMZhVRWDVT4Cke1XDvXPU6resMjvDGCHHKBcts38SBo46LxNyAnckwQUF6RfqFq3LWLaRGKbE1YYZZU",
  "key20": "5FcZgcVG1vA4EhRG9dY7kUKtemLjcLRWhN6rywR9Wu6hNK5geVJVX7MhEQDgmLiibtiqRtybqW6xDmc8Nmb2ReLs",
  "key21": "4uiuaMr6ph1eYAJ4eZkRSxAh8GnZgxaxrgNUptZLuff9CGWQxg7F1KjiayUheopHCchFkrdq7p6QqNAVD8HnNpMs",
  "key22": "3inWVHHFSGAQvZwz9JnzePz4t8ZPn6KGfvRmnkqW1efh5j9qM3FetbkV2dXjtftUaZZtNFwJXNCZC7zVZgafXVnP",
  "key23": "2owqhMe175EXxGpJDsGBUBtkLrMuEQFagEtm3qdgpYfeGJY33H7kKk6XWQLVwwmuGhNbFB1FHjEuio23wQmrpQc",
  "key24": "5eKagxEJPQZ9yV3rLL7YCTPYVxBrkGaZLPUQxcvbQWHFvp18Gg6YW2bD6hxDSSRZcYuFSmd3KrksX2XwkVcS9Sud",
  "key25": "4qdf2sWdsrV4YZeLvb2WhEeop8Y3EXqfW3YYTShAMefhEK1wQurSxTGDs5gTUu56jiFBeA8WjvuyJNFPw5T7KcyN",
  "key26": "39E9vz3HJVcDMq9MWwyhSLdJzWftVQ3rPTvwz8DaENZ3zyquLFFVaCDyb8vTvXVSUx2CjmBTnAihECUR99Pj5PNQ",
  "key27": "3Jf2SWUoYS3QmbLUohGcTkcVgRmWaFd9u87h6jHyjanhAVtLEgQJPJ6YoQAeqr5yTyZKqMLrGqa51euCApYjkCVP",
  "key28": "3YU4iRUHEHXKXs5BCFZhF4MEcsk6EVWrvgDVzCtdiZcjW8LQtCVYUr4ty2xzoVvMsxCo7ZHBuQiXxJpoAG7kcTYN",
  "key29": "4tk9HLXFGaXADXG6BXGfgsq52kgyz368EMfSzdUxdY2dNpXAxZEtjjL186GbwZiTWttR43XvSAWrFp8by6rVX6tP",
  "key30": "41RsAGd4M18wUejZvdCePFEWWCo6L7ngB1ssQXw1FLUSCLDDVKPwX1UnjC47kpdeduK4ohJTu4dMVGcrkZjMXdvT",
  "key31": "4tatMyiQNVyRzEwbQQWC7MFk6kBvdmA5xVGJRMrcjksBxExKjQadU5UEQaK6hr5dGFgfNFge9uXV1PYAYziW4bct",
  "key32": "WGegwYPYFaBmLY4kH4uJFXEsQhypknbPcjD3EUjHjfwteLQH4CjqhbcWb9tQtZMbFuaqc8UoyHv1RQKrDR3zxcV",
  "key33": "4EuzETwUsmdZpSG36LWpmKYUWk2an3WFvCYFM4GenP6PYYH7i7396gP1TuH2awYsRBj9pb6EcKQGkddoUtL7a73Z",
  "key34": "4KZeYp58Hdy8LAmYtTjXyz9ztNVGobesSbywSn7BsCSWUYE6yj9gxqTF6WS2FEKewLBVU3XUK5YACt2pMs4tR8dh",
  "key35": "4MtTqEGrPMaFxYkRT2qi5yjjzqyUi16JMyuQmATPn63hFw4e6dGrvkeyzuyM76QW38dXc8dNdS4v3ZTBrrc3Pge3",
  "key36": "3fBYoTjvfmpBrrSJPuWgNK1zj6mamjpv9k8aQgXCazeejuDWB9uAYM9qiEX6XSHzmXngu1ggyFMiiGi4fanwHWch",
  "key37": "4bSTdyJ87ua8bq27BsfWBcJCKMMVFZVEoQAnRCsANdFimQuJEZr43H7b6K3FPTfLZJAp3EjiDU3uBN28GPjyXUuy",
  "key38": "4n7X2bwEPZ2ogDArxUmVtM9cbbD6JmPJiBn5Rq1YPBkSYze18aaJ8c9QoG3WEeYXzeJdzAbvuF2nPBmPQWfSMh3k",
  "key39": "5SwpB9oXNCD1BsP63uUkQvnjB7QewLTN2bQ8DL4gemf1oqsjrkoNNbj2eVPiAvjuYtUE3Tm5BT8FtT3mfyLpD4Bd",
  "key40": "6GzN1Y9wvVuLnEqSgiN8o1RYsJuTZVoscL13MdidWdpTvsvH5gq2SSCxUV3Mr6RSpVT6nFiwTgv5XFNJfL5KeYT",
  "key41": "4mQNazByEudbtim2B3VXoHNALuD5H9K3VBTktQYoJfTVwZZuFbFxmX1awhCzWRUXPuPyrBqheRBUQEEamQ9t5uY4",
  "key42": "4B1Y9TwzG6MKADKznEkvA1isyQhM4uaLB2SD2kDGoZrsXKqvc7rN64QVPpGUnWssLNgYCMxm5LiGBvhnqWUZbKn7",
  "key43": "5V4Qe1HAEA8uwKGX2qcCSkWFKKBprqVzHR32v7iJvr5s8stsvyX2yVrpWqqJZekEjLzSSDKeWhZtri61J1hjJf5v",
  "key44": "4nyhbDh7zwVu1cSgn8EAHu1X1Y2yh2YJnaW5XSFeUP3WrpDynX5rRkKyLvcAB6Hr8enDFbD89bNtpFZQZsmf2EVG"
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
