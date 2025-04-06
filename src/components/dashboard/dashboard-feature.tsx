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
    "4bGyXRrskCLdw4TB1MrhRiePQe4WM9nhaFB7oagQjQTmLYHaFrvWYKo7N6iLfgdW2NcC4EESW7taUtdokWcPiJnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A5G2n4dSE3wooVycX7mMYY2uAsVj99SrAgcwdxfdL15Jf16RHqYPGQrC4rCwoHW32Dq2vTWWDwZ3s7xwoRbnMBe",
  "key1": "8s41f1SxQpqqb7s6TTRHajFbnw3tro2Bfc1vej2dmE1i1vFVVuHqdvxXqeFjNo4SRGrnGpzUJrG7a3McgA3i9Qr",
  "key2": "2u8pr2VbAiZjNhyo5zPLshAQSdysJdVuCPbcujdx5XN4xrud5bYLfn11hnfdck2XCe4MEBcXxvjpgjdHMKWohnBs",
  "key3": "3NoXgqtWN8pNLxwKRDj7BqHTgjiD7ivfKRxbrMd1ENxydcTZNHu8yNWSNfGVU6ECaCU3nBbxKJ8cLQQgEzdPC25D",
  "key4": "VWF88Z5MByKWL2mdqpZH3GsyVmrAxwETgiVLZj1rU8J1LaetNbtgrrUmf72toZtPVHET77AETEoHoCCUyHYuDLN",
  "key5": "5ZKkvp2oPse9FtLBvgzP8V7iyT3JLfvPFhKaGYux7fk7RGAVhxBfRyp1o1reeXA4ubAoubjjpbPBV1p72haVGCYp",
  "key6": "K1jb4db5ZJQ8SvYuEjJg2KXDwRJ2Sv2eGAGYroAsifs6L5B33ty4DAToPnvQDmQaBgtveLJu2nCiPmn1aftsYU4",
  "key7": "WJomhn1s6sVJvZbKFHKWucY5DRPxTvc2zNTWZC8MP7ZcAiJMcBaqZzpM9vD7WW4c3DnNAq3h5RQa7vsZiCUK5ru",
  "key8": "4i1653skoGkMbQGS1AToYbomd6FgorCuysDopMhn8hY47388y1Z3qHANiJFsN53yirbsz5aK1hCqB6N2daFqqUfa",
  "key9": "2KScSvGUue7wE68aZ8Zn1KnSs8FFp1sWsvJ7rrAUURp3iuYbcofAzvFoThdpqwPBpzvYJ27BrxPtSzpDFPeAERQm",
  "key10": "EEd6g21AFuSEfa4hpufs5ihaUvVcZJULg7LTe77ogU4DxiyMNM4owGb3Sm84xXfccZ6aZWQHYgnTmD1oqqjp2YA",
  "key11": "wT1D1TQXF7HETPhR6gxhRewBTJLaTyTbmj35RT8NT7JoGGhn276EEBtucgpZQAi6jkoxwnM3JY77P3xd61h1Ni3",
  "key12": "3myRnPunbiBx4xfjE2NiWsWyjj99vY35PkDY4JZk8rssHWz46LERfrKYHpJqnAQ618JTHbWtrmSrxDZRN5KepP62",
  "key13": "5hXBTd7PbmTW1QRuXJze4DG82sWUdgq9yhqovx7JQFmzDNePTD8bjG41i4ZEnLZL2auPmCLQxiMnUy9GjqFbNQi4",
  "key14": "2YVPqcmS8KkDHLDsoLRXf1ZJQcLcxQ3BscgKQKHynpGFWUfVMwzwMiiY7x5MDfgfNSjtbu6tU9Mvv5mgAXjgzAx4",
  "key15": "4X4iS3V4beEgtgJBPFhCrxodLxotc8nQYC913An42obB7d9NURJnfCFje4RWY9uMcJH726iPn7wDGkhRvGfaEero",
  "key16": "4aoU8UVHmbmG1uLTcmRGaSJM5fx77aGSsdoCdMmvVL7Ldmm4bsgKUMFo7LWNYwcRwwPLnhV16EtbstDmyA5YQJ1W",
  "key17": "3XZofm1Bkrssa6DkHyLoDA25hk8WmoA8pstiRYiVmsfJq9HH2pWiRohYXEsVUoR1Wm8mZjD2PtgET3W8iyV9KUW6",
  "key18": "3CcnPxs2LGzUpcwLTVdaCM3mgzL2Yfj1JNavtBWHycG8Hu1b9TosSvNN6DAKTworodTf4GdN8cCyRxHfqBqYRJef",
  "key19": "SzTPXQmt5XN6AsqQcsZcdNkoBVtwCFVnMAbNfJ25BKkDvW1GFAzLStj1qUaL9NDkQmkYkeuXvZzn98vE7MNnmYw",
  "key20": "28L4tVVYheTmCCu2QGo9qhKFGD3VwqZEjdzszmMMfCQViYmznJ35UJohPnmezi6N9mrZ43hysCXHtkSoov8iMyFd",
  "key21": "4aicF8aRvMxZybp4bUoXNtfaGGhR7ci3vAFHJLCASbTSdkKxrSfhNLa9HhgoBVc78YT8D2V8bdMucxq49JGD5vr2",
  "key22": "Y6shEYi3mNBauseaG6tT7ZvgaGmF4TyVSCkDWnzyPEC6Xp3QUvFrdRdNq779MNJdk7eCKu1JJmE35RDJqKbvyDR",
  "key23": "2Dxy1ko9h5Anuocz4we3PJqoQtc7SbizEsTpwVWcn5UCcf8gL3bgxDdu3zURDZWWwEzhTj7QUmS6pzxbqw6JkKEV",
  "key24": "4CUNuBqLZFShFdEmfUmKJk4nBFsaAQjTBNN5CcCY7HNi3uf7pZZSo22W7FwkS1Nct8zWBwofMb7LogbkGMevkNVJ",
  "key25": "2KNpdsG1jXspHsA9CTBh4RiZMGB2MJEUwiaB2ZvvJ4kZJnLHpnKtwHBZtSct7RbQosYzvtcAjoSUUHj2juCi9GJn",
  "key26": "2BhgS7KK1HYia4fQbEidPpc8VgxgxLvpJ3ehfG14PJevTDLZQkn9vEZK9MTUBDD5gTFzuKXrk9MHoe8qmookZ8RQ",
  "key27": "3bZz7QLsq498k74SRVb2nu34Yk7K4ijc4szE6bq9vohqa3N2UpdXpsG73ChoCDr1uvJcwmzyAf2tQ7JT3v8nZApB",
  "key28": "3sL6U4iiweX9kddo89JEx6sMD6k8ogXccTK9DkRsMxwzqxXSkZp952Br18LzTuin69QCy9hs6mrfu5YAQWKra8ke",
  "key29": "FZub7y7e71LKXimYhP8W7fkvPPrN1oN6vRhd2pRuuzDqFWwzXsW6tbXQqikzFnDyme23FzAZ65UB3gPQqXY925m",
  "key30": "2pZDznpGzDexKmMAYUK3PPtcMFSKxShRsGadQCbzPCz4uC8EkM6N8kCe7ZbC7MGyyqeynhppiBd9QH7QrcjMqUCE",
  "key31": "5nnzeEsxoZbJjCyA5fLrgKsXWKpg26mEDUemhwKdDVv4CYgm2TLeSN9Z43AExph1xZPLf39MrVjMmQJi5FWHE45j",
  "key32": "67NqhEtmJPpXciBaESu63Xrn3KRTkQherGe2V8iDFsAMQYw1AG9JWtNWYUSSc1QFJaCRvLYvVxeL4Dtai94w2qwh",
  "key33": "2XAod1McY6AT7FcxJztQ7yKVC7BTXaXw7YuZ8GzDbNU1T51A6MJrFF2wCUfeit6Bap1P2fRhFFwzGRbKTd5exv4H",
  "key34": "21EqLvTftU4xUfqVZHZdZfs2dF4qN32WdyDmADZqu11SWP37yUYUpbP5FV4bUpLMzVgLC45SJg6srqrEComzNRmu",
  "key35": "3jpZBtN8L64WfnvXd9hGh4Z7xojGAX3saCw8wZ6SdAboXtxKwm3Rmvug9xhRhdJFY6qkcqYZccnnJG9eif3pRnh2",
  "key36": "5y9dYmVBXzbh4ZB5VUrVR3ywvJUJ2bDcNcB9cDtmpjyou12jHbbqJVmrdzk9Zg4cDsbo7EJzBuPYCKCR3vLJXYjG"
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
