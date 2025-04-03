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
    "9a3dESnTZTy4AKSAKRVTBFAdz6A9yThbU5n7p1BWq2KaRiPqVumvF84rZUgF2SLSJZDx6jZidNMerhBkKHJ9vwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LF9k9xtn4GECr4T4etbqJ8oCA9cHCwHdrCvDCyLNYsed43MUwhjnmxvPteB1RiAHXJjDPeGAYDev8hb6bYztCuX",
  "key1": "2utE3hC49fyZjknz5JaFGGtxCsNayKT8v6e8yWrpUw814Q46QgZZX77BscS2tzFQNiyuBZYwmBLMrb8fyVL8X6g8",
  "key2": "5fQw91xyTVXRnxTpX1M6AWSQxuRXdDEBNNjmRfwsXC6r5HmwuJ8sRavuavgHVXPoqr8CMoUJop1jDswXTWjY5gB2",
  "key3": "kdepPPd7MeM4LYSGQt74npWPoHjcZ3dTvj3bGBXx9vGjCXpxRRG1m15Hk3aLbEhScrdYCwxrc7KBZEYQF5tpjvc",
  "key4": "43iPvpzvjELaPNfC7UzwfMoDHHGrKbyT7jFHkJsBauyeBfbCF9Dy4UR15JF6UpkksaXsGubtrLSgVXyyBQaUtkE7",
  "key5": "3gybmuzE6gxM1MiuVgxqdez9JLDuWN23KH9QZAKA4hpydE9v8gA6W2GVkdj5r15KkQg9y4hfCzZDPH7xHxZ2a84c",
  "key6": "2oi3XdDEyCPLcrqi2CGqYmN7gMq3z2CfRHBw5sFg8QVUi5aG1knd1ibjn51Xq1Kvfmxex5Mf5Wm8k44CXtzmXK1E",
  "key7": "2VuUQNBxDMeS3k77dLxRpRoaRtFf9ycWrFFtcWEBuFoZMNWCoi4ybaCjqxcJoggACN7fPwrxGiSzVyfHUBYY5G8W",
  "key8": "RftMxpVsNY4tBSyiF3zEAGK6KTLGuAjUGJXN9M2MkXq7UGXkWLNk79qQiinVpGsZoAAymLu4CqqSJdXVXtqi45Z",
  "key9": "5kTEGzDVjkR9bfmnTkSgfKU2wjR3vJajKcVF7yBmZ8hGBwjioqydufp6u2h2M5orhGitt6UJrFY13vxE2mbAg2cQ",
  "key10": "3jBiNaoC39BawPNW1ctgjXAdwjDrsgaHgH9Ht2DSPxYZEybwxXAQLPd1cJ19ujhX2y8DuKnmh5y6qqNva5JQ86nZ",
  "key11": "523m9Qvqj1pWeYT1ZsqcNNtxugSucSYArHgHwBDbYpMDFHc9TuV7Mg1Mrcd1XiNJhCx8sUWavTPpYdtGRTw2WLYv",
  "key12": "2taAZLNeJiRD3yRknfLvJM3qL1q1Z4tvuyVnVRi7LiXri5EN9gtFMyQ3ZMUcHkf42xYWMjc89amDf6atNFvp2jVj",
  "key13": "3F9D9mcueyPvg2wwTsfiMBCLob3ZfNcXimg7qK9K7tBcwcfuxqx1BCVXzVa3KZURCnhgqUVq2Vyb3tNw5N4Kg2vA",
  "key14": "tjooDczT6VeYckF82CM9HmuauNtghXZ1PSdZcKGstyWtVCWsJbcaiRqdqVNoMtN1Na3RyoBKfaVAFBHJ5offgdX",
  "key15": "5Do1jZdY3fNAUkUgcFk3GJfHqYmeFbxSB7krXJ15KWVxuU4LotRUxvudY1GeBR4rrc8ez244NptvvYfEczUkD8Qw",
  "key16": "3cCR2DK7vfKjM8GSTgBK7fFA9s3SpJnzpneVH8PFNRZts8b1VC8U4Jq3w1w7vfnGjjUiZtPDH9Jo3c2y3Ts8uSVJ",
  "key17": "2TbEDuZuQS5CW3zxRzAxP4jajURKpfsgn3DbV3nyH8LyYjRCXXmxsGLWSFuetE5bnmb46CWdPFyBFoyK6RTvBkue",
  "key18": "QsttktcemygAqmyaWZXaGHpnQxHg4AykLQGAUfRFauPvmh3ErFC7fd6QK8ztNqeq85JeZsVQZ5u3WaXTuH9NdVK",
  "key19": "363rLxWt8dheoqknr6JNxYzpC6VTMkoZiJv5GNyWBr3UCGpKoz23g3AwwUtfFi8TKxSecRSuCQaPKXzKTz7mqvSy",
  "key20": "41RzpJkR4m62jB63an2UQi9jz8moahbkQfDGHSCAypbT4uk4n68EVy36KRZpwMmSioizmFmqg7RZaAtnX6B84fNJ",
  "key21": "29tgHbr3afhCadjP39vDU34HrPfEyokkH4p7BF5M1T83VafX9N32WU6dNSL2a4PXXoCe2qMBUFvhpU7J7yL3XbTf",
  "key22": "2vPVVTixcV6bBJggM5naNWTsvnuwsB6tnh26o85Jk72u7QwmXTPzs5YDfyyjwm3isC7w826aGWmpMG8SNGkS8M5k",
  "key23": "vYQtWKLoRYUdr6YuLsEnNZ99U9FrTF2EHb7fWWzuinmzHNv5Bw7znhMp5hFX7uYKkvxefAdaja9NdoayRCRAFko",
  "key24": "QXT6jmW91DGdnKQc8RC8XhxNeWrRuBxamcYfgEWiKGwfsh7mQ2UNRjA6P33etbQbg4rs9hTQxvEnYDSb277HrDk",
  "key25": "3TwQu9yF9RnXDsuKbsq7hVdyzAV5yZ6E7dBqLxpy8cyfNe2qLDwfpTiivPNmsyo5ETmfkWwg2hUzAF3JxSFQiU5f",
  "key26": "23gm4S6acFP54ca3rjtmGaXXZCSLgaHYd4Bt6yCNBmV1aUHgW8bRLwJAua5KrHfTdz7WC7FnX9E9N735U4xTAoN9",
  "key27": "3s8k9ZPkRwDkpQhbrZZc8jd17sNwze3nw5mWBdZ2g5qK9RELX64AhW6hPhTakYrvCDpFbm9KDq21uuqi6D7ePova",
  "key28": "2oMqPbeAmkikWkovtofnTm8WeDNyu3zTmiNCR7CQYsG2hBffvWeRBiyRgGdG9fdXtaTpbRMR3J4Dkkk5hEtzkRnN",
  "key29": "2w7DyD5R2gXij8Yq5Y41JowAGXAKCjSEsQ8YtdAp4S7jwALyZ87ejoUoaN3SdJkM7Qs2uGy7acC22jzaFqv7GqYx",
  "key30": "28EpD6nq6HgaB2FoEVmPL7eWTAr26sornjgBB2uE2fJuR5HGezUKUUTCzPaPpnqibTnKwztmXN3YpnB9LweX9oEz",
  "key31": "4wMgPnA8zTCxttedv66G8DV7NjhGiZicWdhJt1zHdxBhqneLb8ZMmiTyCVathehFHp8yto1uL4exXj9cN3pdh7Nf",
  "key32": "66XDWZHPy6aK33GAdzLWBSX8u2Dp7icSsS7JWbGvFW8CkTw7r25G8gbNRs7GgsJcfE4yhuhgnPMBCvx8EbtkSXma",
  "key33": "5Esjfir5aiNwFUHTXocvsPefi44myb74wLidvce7bRKpbosX66xkjWfYYL4C1dggyFaFgHstrb2PE5gJj3LbHsU1",
  "key34": "3Txvfs61rJ3jPFjwCDm8u67numwkt7M36BptRmoW4o2eRxGQooTvTWvYeAdhCPxeK5NN2X2oryirPtYzcm1dWiQv",
  "key35": "5dFbmfL4m8Lancq9qbSFjyEpTtnjDi154SktCC37VVvdevn1RSaVdzxsjYPVwaGkDiJJkK5zhgxnR335TLTuHQqR",
  "key36": "3yPedpjzx8xSKzoRkjXJ1qhRUKdZeW5km6bhoiYNYSjdPF73ePKWDSBeJ9J3rQS78irb3JiLSCKqqfpa7Cuq2Ddn",
  "key37": "3Vnr8M9uKUTENJQckVXnEUzohy4XzhyEWcKqKCoCU9rU3mYcJP6c9gVyBZ4BZCwn2p1JjfGKyWFTASSV2otTzqgw",
  "key38": "3chMJp66Z589t2CV9v1ZQvPfs2qX4Ao1QmE1u4EpHWDtLqvM69m57GFG1ybQeAmTRwZVAnvbQC1NHSLg2Wi8iGYL",
  "key39": "3JbPKDQMUWjcZ2aSLHKUvXSHXPwK7rgWrX3bpfajRbPhbExJAatd5GEZWrCGAj4HcoAfHFVnfhf5Pmg4yE6F4Emb",
  "key40": "4vZCpgoLqo7jLDqCuomogpSpHGAVjbHhRnZ996Weqr8S2ZycwtsraX1DHv1ScRNjfsQAZPJ3XN3FD8NmGMp6X8dF",
  "key41": "FRiiRE4QGxmNphzUQ8Yu93V3TUcvyCZgsp9ktz2vupGwDZG1cKZGTQwksrJ84by74vv1kiHHXVdf2kcVmhdjfPj",
  "key42": "4D6KikLTvtLCHG41GFX88YFeg3yfFg1hmB6JBiL7ekEBaTc8WfSJYdfAGxApmiedWGKArum1HKR87CwwcbkAioG",
  "key43": "W7WvfAn6ZoCscoD18bKipziacUpxup9PHo6RmYcrooPTrbNS1cQju7RyGYZbUns6khSqY7BqTzg5sYYhuKqHGvS",
  "key44": "5boEnMu9PSkMvekVRU5tZXEz7RpTPkSsmmYYH1RTv4NbZQG3WKhnEJUwxgcMmyogbFwgfVKAp8FtQNHRBrAdZpno",
  "key45": "5WkTA4tB1KkxE25ScsvnqXcH2fCWgmBJoPBCPC6kbVVfjPVDwrV3CvMktWYwNuMeP5rbk17vM8v17htpM2kQSR7u",
  "key46": "BkQSaCDp1fKh9j1s8UvnHYFFf1QcFkTZWm8wVZLJQ2k7HTQn4DYHPHEXVNAXiWEDyGWQRiuw1DFfbszyekh2WEM",
  "key47": "yjicdbUXTr6PfY5hjRYeyD3RHjfZprU3tSbMs7X4JhFw6pPk7ZWDuzcphkLcUjP6EpvuYE9Nik14wmy4H5Jzaxc",
  "key48": "47Gug7KEZ9muueAZxpRGfu5Qi7d5QMG7RUPkpnzaLLH1JxyzAqcgfuMyQ5YPfrubue3ypEkfN4Mtk5yrj2W21ns9",
  "key49": "3PaDkTfv1nx8BR16uh1GPVAoDddZq9vbYGDzqVzYbh2yFYQV8iLJxbnRHicskXdhxNqomxWYwa74X25cL6G3dNNW"
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
