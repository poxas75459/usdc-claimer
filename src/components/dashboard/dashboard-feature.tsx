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
    "5RRD4jqt3oJo35HwguNrfStjti1wo6sCc4ZmnSR5CA4eHRFVjodwadb5XHV17KTXqs1uX1aNhXm63Cq1cA3HsFQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41g23SHRut9hZ5PuyDWfEag3J6HexSBfG48zAJfGYZ2t56nb9XRou7wLTQ5YqTJpUxYfXT9Xy1mhVUTthiZDAhjZ",
  "key1": "57G7f7KzXhj1BbW6ijj3zSSohHbcC9XpjcChfhkB268NR9E3H6bwYqAM48Baqb4EchFvCbNWQQ6EvtXhfAcLgRBw",
  "key2": "5Q8JmsrMSJRAWHPn7Pr7KYrt1aobRpVFyrAgtdo2ktjpnYBPpgqiZArQ4RMnHKpjPdjKBKrujgTwc4nP3947YcUP",
  "key3": "2wvpxG35LEtYUsNrSHZZQR9kwLyqXmptnzxnGtSPFxNuKsYQ23o11gD42iY6ryPzdoeHYx1L5zb9GfC9GmM86niQ",
  "key4": "UdQQQP5VDjEDjN4brfzfHoR8Hau8RDp2qv79iPVMfp3GQZ3ZDtutuCpHdgjTxf1DqJEPrzrK5DaKC2xiCu3uXid",
  "key5": "Ve23CC1hJH5T5k63mUf9k9SUkCKQvnz4HwB9hduJF4PNykSuBScHxyhBuHQgu5q1956zgwUd6UhcZicgmzXBkAx",
  "key6": "3i4srCxSJsKgq5boDuAgM3SYY3eecvZKud6d7vaw42xwLxnbnjHZNdpijHqAfhzr2m5tqFGx3mErLGm5kWqravRx",
  "key7": "5TnXsa9XmATthucx4ieUfP814n6siH7oKm6M276J5pY43qiQfjBEPtcAoFiR5ogZhukdz5z2ABZNr1NXNJivdUjj",
  "key8": "5KcpUPRjpcjD7MYbGugcJHoEBCf9qWNkac7U6qTgP1hZou2bnc3zXB6AHVhkz9JC1rHxUFVrv1dJavkiwv3RUf6n",
  "key9": "UTG2pEy5YvxwUuWS5sxhWnj2mpBf5rUG2yM8VU6wzenJASSAA4ubrdPCvHJe9tpK385L5r5Gf7gnnPCUPgUj8ov",
  "key10": "25UcCmyDb4njTZ5axpQWXkbPdCC1zb2ovpq78hdbkRRAFUS7ETgYEHkgxDPMiDW6ydyFxj7w2zeahLEvrifsQUta",
  "key11": "2bEjLMko3ih2wZwr1tNGzE1YUx9dwJgCwou9P3G9ZhQkMy6jibuHbPQjoMfM5PrA7SbXmT9rjNLGRcCY8BFS9Gkj",
  "key12": "5kLrrvXFmbvqUCkQHnRcZ8fXMyHas8xznRD6eTbPT4XavH3jVazdbWDTZxxdeaz8WuCq6ZMYAy5yMrCzgwPcbx7y",
  "key13": "4nejGTQWiL9rzuxjrKQuERhewNBmXHUWPK2SrVFtAddEqeVJqAwnzPDSg3gtyvspfchwRG7jFYN6jDUqqH7Ewqag",
  "key14": "4c4BS9tsaoQgtcbrxyHumy5EXqv79MNry6YL1RRfu1Zry3TdgSwWWeDKxyDZqtnReebHGjftPrGnZkGMYs2GtSYG",
  "key15": "2cTKB2UeWQNTWZVHnAtzswoEkS3XNopehAkXKQguQ6WkvPoxDw6ZkrjVETp9dPj1X2UcvHfDcMkhfKhwaE9UB1ga",
  "key16": "5XVmaEZBNDAymYMgqvVGKDr26nATcypij8d9ndYUbJymJ9KiHUWqP8syk51izv1oVxqv6a1Q1EmkrFLZBW62Y5B1",
  "key17": "b67TabegtQ78DhMgBz3YzcApyRLfzKVLQRLj7TfiqvxkFHNCSEeQmCo788eTZbN4N5dBR5aGn4b6RkhBYwYBNJo",
  "key18": "3jFMrT7AfxtH2D26VynRzJLHhevDzbR7vcAFVshBMw6Ku9ZeuiueLzxwxveuPH8nY5DREbSMNBCPsfLygbR3Mfuw",
  "key19": "5UvbFXeNuCPuHFFuqmS1iXHHQdfxztoy5ft94tNFrUQvcitNAF3g6qxri14z69A1k9P3bgtE1V1sdv2kys2VRb71",
  "key20": "4F9n6jcQR8cxf429j8XvejUo5zECrWgMRDfBbHXzbbcCn7f9pCZEorhPMiJeNtGsYb4jni5fuvunedAMMebVAbdN",
  "key21": "4EmgXJpwtB8NRZEz1UR61n7JE5AgcDv3QgdyjH6kGc9BnJrCECFgsfXaGSfsCC81GLGgX3Yeqp4xZGUXtHdJX2hS",
  "key22": "4suRhotYFxBHfffU1cPMXSk3fAE9cHtiPcw2fjkLzEWLKFPDcpZDrp4r6EaAKiURYAYGbf9cnm134Bo6VzrKd9JQ",
  "key23": "5roKKAA4n1YUvCnvxACWbFPR8QPFqJoyy2NgyH8wgd4LgUVKY3ZbKNVNC2DpJg8c8HHto7hihtJ1CHvcZqRYYE4w",
  "key24": "A1RBYS1Mw5yjuP8fJ3i8E6gE21rHmxVDf9HghMtrZwAYdPcxZXGuQFTbbJxyxu2bTL46EzBwPUDVGXxSyYknf2w",
  "key25": "2qNLTWJ5abUNq8RHXSCuBrh5wcMbZ1u3YirK845T4Ux2KyZ7r4spSQpRJXBSizuXjRyPEGDvof5Ve3QUdq4VX4By",
  "key26": "2bs3Rsj9HPpnwSAt8quGuuR1MD3GcGhzMcWhFw3C5t5TYgoUoWikVsffsPmkh64jydhe3YDymRCwRgeUMwX1aMow",
  "key27": "4FdKeDvm6vvphR6Eth6yxGGUJQJa4zM5qGrdhR8qyvzvgK7cBrs6B7dPm9zh2Tdph7Q6GBKacn9QLv82cmM9tFWg",
  "key28": "HmqNghLASBW1mh4tuKVjWzKvtVYfzDkWYNyjGcWuYGkGtDtgo7FpmGkhZyWm8kMtGYE7JLsMoidAwsqYoB1vrn1",
  "key29": "4j1tv7w8csbixmSC3uis6ZyGpk2BirwHjgGq32RZEAbJUqeRZxQ5ZvyLgbvzRPoKGQRQAyhaRyMhjpQq3gGFKv4r",
  "key30": "5QyU1jfgg1UP489K7sqMJc9KufNAAJGGAc6Y4F4HcoVpJVabKZwyAUFx9jFj89uqSU9hh68nDUViJE2PnDP9yfJa",
  "key31": "3uQHJ2VMXv3dFMTKGvFrAckuiHBFd3uSK6XUVYRr1F2ZRqQuPxR3cSVK4kjRqSPRcmxtPSMrkAtAK3oV6kjsiH8W",
  "key32": "2fB34AEGgHNUvTwiqCbnHbChhAbCNem79mH5C4jnJV39AJTWnoq42gBC1PZ1NUJNVW4beZioDFGDQZqAXPtXyDBY",
  "key33": "acbM5HFEsbGoG6T2RhJxJGFqGi8wUXasRndbkze1Uw8yf7bPWyxYdDmkWhktou422LcjhfmrAsQgkTSupLbHAEb",
  "key34": "Aro3FPC9Fij8oAixejoCCQaqnZf2tcG5dgecYVMr4CfaLNqJ6WKCsxR4Ks6J3rysw7mHDAJSzNBPkoRH4iLudoy",
  "key35": "5rCiVaMV3ZbQJHvMJe46dp2w37LEptqbmZY2JKGMnQCntMWGo4Cj5a8KAc9pCfyfSq2pcnd4PYzHzAz5giDG24h5",
  "key36": "64QfyVozjVe8dXARujAUYA2BYvGfba5YYjip2Jdc3nMZzKK18DAmPgKeMZwn3WETVhHxrYABvqnCoksPZ2G7dsFw",
  "key37": "4Bf1Q1MBGJudntmYwtGnJgi4jEXt9srC3yhUWcNzrNQ3qH8XsfQE1Ge4anuibG7qQikV7zRgdP7cBumdGqgw1rkL",
  "key38": "dLD8guLshwHPA2SUbiR7a7CVjrqcLsKT9AnDCeyA6WFqkqq6Kj1MvopySm4DQkkFx7P8K3aFGH3hr28rphMxtPp",
  "key39": "2pUXv7QUNfLgBoC7pY1V5ZFF3b2aqfHHP2469HeMgjp1uMsD3fM8tF6So9WJwZiJAawjJmbAHfCvS1yToiFk7ray",
  "key40": "4irGdMGfd9x2Y7Fz2bHWnZvN2VQG4h7u384WV5kDELznDBwvHUp7mKjaoMyqW6WXCFkcPvkAbXd8qGX1oKKgaE6Y",
  "key41": "27uupNjnHysHxKu9WMC7zY6PcwazoC2TCZvzQc5LkUkVh81MVwDSZ3dSLRAKSERRB6ySC5CR1EDkpQpbB67Fwzuc",
  "key42": "5bk2n2ed8ci626uHpS3gRrs99u4ysL9m6rZQdVypssWiH1svHS3NNBYaNAqaT9svzeeu77i1UYaqfuM7iRjzXC4K",
  "key43": "3GGCBfvkb2CZtFFZd6ZMDSM5QQabfJ7fgW2wsgba3mqtzCfSAS2e47DJkUmu86GBjBEKV4smVyw62Rx1FxXSdvxa",
  "key44": "ramn98wi8S9crfefPdGDHsdsCYZg9uyt1SfjBKEN9c67h8GTJm2nBncePTmLuDgRE4mT6qGW8voCLa95zxp4ihh",
  "key45": "fq84X7sW5RNVnJdKaitgwb6ck6d97k7vCr7CMJNiYvzJBo8L28Fg2YtQDEmggtr5L6TyBKvLDyjDRv6oB3To75M",
  "key46": "zgpq7nUgfAwsdkY1FuRdz5SrRSzxuCPqRD84w34odNdVTARjodN6w2BaPcjzsoD3EeP1242c5Gz2YRjLocjNrkK",
  "key47": "65tgTHegcG56dJzFVhTzqEe8ijbcXaKJaeQY3xjxXV6TtGSsWxbS2EPpcjxeHzEH59x9sTZyyYeG1CDTHDp9tsHQ",
  "key48": "5nmBbNW3DKMiqTfvFMcM8dNndvoMph8RKFNhNiAMmmN4zc67b23UkaE1Wc2mZXWwo3pqzzFkMWgK79mkM3ccpWcn"
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
