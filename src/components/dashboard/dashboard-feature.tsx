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
    "tHgVuNyiFDS65XPVkbAVb6djZasNpGDpx4xWEKJY4Si5j9taEHyaXYywEXKciGznER1QP4Pk79dgjLPCgbKxD8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36LbHPAhEpaPw5YZ8wQKXTATn9vvRucQJryJ44VXeX6rCWDMndnxpvL6EC8sFq2QKrbYeDXZi6VhZzc4Jo863cLj",
  "key1": "5N2KSsr4mGFU5ZDNn9raQ9YZA5awprXzpyubKVmhjB5KufDkDUTtnat4nRgR3gPUFusbGJvVosfToM8bqYrDswQf",
  "key2": "5n8k2jehYXZovuBtvusLoFnjWJEtsNFykQvojpQFcCL1BW2qUpvLTrDSsDAhEx2aDeYYhD1qLnWsWC2aQd8eY9u4",
  "key3": "5aqFr4cWwiGz5rovHUd2v6QMyNZteTsgdWaKRaMnLRxuvYsRbjukBKFwpFfvrSRTxAUvprCnjCT7X3RrCoBrj858",
  "key4": "5mAf6HLc3qXmjJMMYVJz2bq6Pe3pZSbLjMvPDw9DLsWycjHaY5GPkqeygN8WSKKPXzB2JjDKbW26vhHuvieJqtCk",
  "key5": "4P5g2J43GciTV6SnPZhoFRJEBCF9YNoTaFLVuFp9DX2DLNfKDNWszaqiPRZ6jGXwTGXcCNhDdri9txpyNNwhz8ff",
  "key6": "3WBhR6N1BFTccYPp6bcoUtULp4zjDNorsESmSmqinEE4kdprwHzFvwQCfvK1m464SMt1Wk4EX6nD2YAkLmQt6fn5",
  "key7": "2MPXvweKsDcyQa74e11ih33o3iXrNQNucJ1gzvkeBnvKxEmHSY9XNZby4GA3gBDcct1ceFHjhrQmD6KqXueEd4Mn",
  "key8": "mqbjhMRGSDKC3u6SpG2XzYrPnPH1jbZPiC9pooaYsVNUm5Ja6Xn4XyuBcKfyHbrKb9NrK4MNxSju7HHNJ94muj1",
  "key9": "2AMCoXcX6appAc2eEcmg81tMV821p6eDPgN6Fzuvf2b3ZFKx3aXFAqLHEuVSWAQpJP819qX87aHJdKjyQnxi7E5P",
  "key10": "24zvL5HGvfPEkBdvJuBhFAyHDksf7nrUh3txCjiFTA6UZagL9u89o74sZaWZKKf8e53hA4WaSPKczbJJuWVKD5h8",
  "key11": "56jLBDHh6Vgd6XcNMPNQLVqVs7zcWz1kn7JUSusiSXPLNUY8eiHRWRSVEcDPG7cXmnhBSoBdowwKPLHviy27umAY",
  "key12": "35nKFpGCCSeEFYVHwDyfoQNrRwRHa4Vnsjv9ypvgK4TsmsWTcZ171Lterd12bfs3Pa1WPA2KNSd33fCiWA884deq",
  "key13": "678Mwrr1M7em4hT7dU7GUX1iNCbzBcDv7sxJUHBZAA8FAhVyEq6BTjZQzfv1jGLKATPhHYRQcpDzAgKppZ1czQPW",
  "key14": "ff9ZVbVENTJaJEzcM8FBDcYMuXqLYz1TbNZ82KvXgAskKLnNmebg91APw3YdGyaVkk7BrDPjZGbfzEFSRQqNcVx",
  "key15": "4XMV1xzBxTYm6ABS5Lp1akyKwniJ5EDdYrwQMeVD3AfkxUUKzp78PbXWDFYNMnmybkEhQR8gqHLrni7gPc6RvgEQ",
  "key16": "57o9KQyr91mp6PF3dAk4kxfKAh9XM4smzuRV3gEHajhcdR2kfgVrhxgUq1J316XYJ35SCZ1UPRXWXfkktFxJCSEG",
  "key17": "3csfqPJT7QHiwpeBi2fw2A6GYCX1b5bYj6bDtTB5DYrWWHdQaKaXsGgrWqmSmFexiicMVdz8BK69PAKE9e97eEf4",
  "key18": "VtuxTUZKFxATixZ9LWx8ZjdrcRfTqFsZbz4L9jjgtNxtf91Rx3Vvvtp3nmA8AtgNN5VdnNb38foAYvGEYzx3cs9",
  "key19": "3iDNhynLG9hc9XdrWCNiriLy3DFWvFoHW7eWRoiDY3oSFqENmUd2Cx51V1aTy5u8HxjPqkgx2evSBEtPSCoTVbB",
  "key20": "4UGR62Q527WBqiogKfbmcunvus7oipBMzURSuqfRz5tqbnSwH4j68zp2uxxFjYUFsERKgK5reypL4bd88GM6FyVM",
  "key21": "53wjWjkHbNG9KH4fruQ2pRgivhPfXxZoJwizzXpcaFXjWvYaWoGUb2wUQiYQexjSjmefkFwijjDS4edAXPkcddf",
  "key22": "34gWSbCJfrZihfAHMD6xkC2xibscXAty9LsXtVM6eVj4zAS8WfYJNzb9zyZxgyFKFBnDFsdkrwgjPEyEeD9kMgXQ",
  "key23": "55PeaEnCh37nz3pHn7aze6Mag2RMtRA8trKkVPkxCSytLhNTV3Hx6SYLvgpF2faBVQFUTVCNLvQu1vFdvdJobHjo",
  "key24": "3gNqki62FQZ6YpJQV8zxpgAA5W645VCuqPF9ntYZAdqehnJjtbuUo2EwE8cDnTNkEviJab7Yvni6LfjECeTWjmpx",
  "key25": "4KgbLoVsHPnYfUY9478WYqEFnVmj7MiosBG4h2sBz88ikk4A5NZqZv3p2PQUHGkgzfygQFtxQWuUHXSUgjab6h4R",
  "key26": "3tKd6MEAsRHLUpiXkqfmHaytkz9uhSW4Rba9BECCUxJg2MMzMX8oz9MMxt7V2xmfBNsUekMHmLXNczLctg3wHYwV",
  "key27": "27qAi9cm9VN3JvYaQEd9Mh51APfHV8kX8JecRSp7UT4cuQLLfzS4k2ChcVF3NJfiC6KMyGGibaBJUkitamrcxqSw",
  "key28": "tA6Nzc33vH6gys9g1UMXSWeY2ghfi8n1szofC2E9AS1LRm5vZwN8uDiUy5aMpXdkbLwhTys8vbmzPrsbmKtrGvh",
  "key29": "5J2Z8Av5C6dmtnF5qLtjn4e6bt5zkfKJHdAgt6v9DzLQ9FXPKSandJWNzqF2g7v8AEsUmkh74ibzoWTQarD2b4i5",
  "key30": "424HjLieqfWfT6hj5CNnJyDCt1An5954yEZMnm6uxa5Ngr74psTgHo6ZH538n8vgknKokLKT7KxygqpzFp84ByQL",
  "key31": "2h4KaU54esZdsw1o47iNr9Uq3pznVS1SFeSpimmq8FhpyR5d5z6R5uBBobY2Xod31Ja9z8kotS4dYJsDQugafb5k",
  "key32": "wKkbKqzq1dg5j3G2GqCYw9RLnqpMaAegEbsYSBEpUVpa8TtqPWcqsJbQ9sru8k8wQU2G9A1CjFzafF54pSnn4uv",
  "key33": "47DNqocWwPE3m5b3fVD8cZbdiG21otkLZ5yPBRpoZFdtRXvFM9bbSznotzeTDPUijNiT81z2odKMdM4PM6iznZZD",
  "key34": "2aZp6SDEYbd7FmVzjHj3G9CGjnZNoPCCPDpWYmuab3KsVjX1Q2mYzJif7HRV5GrBjZjEHrQJWAJkM1Ar6q7YJyRk",
  "key35": "AvG9KYsXAzUMsqhE9jtUkRXdRpQvfFCZoRc9yzormcTD86UJhT9Y5fp3qqWVE2X2tSgNwQ96zpSe2d4wNexXaZ3",
  "key36": "QyzZiBksf2p8xZQDinPpqHLUa6rtgFsVd99YWwQYT7tSkSesezuPNRVN9WWYkmF7kzcJCXqtV9DSSwCTcC323J3",
  "key37": "2Ev7Ydxh7oJ9hMGPGNMAig6Qrozdy99oSrkYm4kL2RBvp9j3boFqR6Mb8cQJWWyta2J7FaQnBTfU72aHFy2y2FKn",
  "key38": "2xPtZGwpFX15q5XyMii6XXzMLBJ7hvQrrEyrbpXkRyV2ja9mnXsYXbiJttmxyuLAPn3PxxL8NWokC11xXpeiAKg3",
  "key39": "2vb4MZYc5oBCMSEc9AbKTN1wZJyh5Wcq9yS5MJhbKhuqR9qaWBrfJMAcpWpXhvT6tBtnRhRA4KZ9dic5KdL5MtBt",
  "key40": "3ff2bnejN44zi6DAnUq36RF6CXsRzFXRfgPHXdrCtuQcCW2p5Hzycw61yZgA757m8y5mzHXDiJDLUB1c4NFGy8d5",
  "key41": "4DmbGEHmCgerf2jB3x2gAteXrwmWW6fXWiHpXNuLw4W9BKTVFtHCjy4RmWuCiyyrVCrZzT9N8PhqfQDPMDfFX7Cp",
  "key42": "4FSdYvjGQRnWZChriEvkFr3BmAw1JhmyMUpBYCsss6ni3QJULgtLK1T53nbXhZTEyDGWmjx6zYBXEtsnEyWXisYZ",
  "key43": "2Gprg9diMqxg5DoC9oVc1oXB2yoNs85ke9FGysGqQwgtaf5ykgCe7GkgeEqMWG6g1m8n4mrMbNrkbLeWmEmUi5TX",
  "key44": "2jHMxKD4rvvjnNHy7f5rkiWRtRY4WCffT6u4EBtwcmfMemXt6FNNTrbPH6pxregug3jKJ7f3x3VbpQ16CGcrFXhn",
  "key45": "2KkdGwnZy2f5LshefKgLNRaK1ihBvWy3MEDBYweZSuZQNnJCMHkKBEzJqmCj5sADvWoaRr2FenwauyKvM9wvHcG5",
  "key46": "gH7L1pLzaPR8kqVxn8bZzWMM8fsvdv8jVuTrRzmkzrhjJYKoGt4XcsPAsEvycCJnehKdy3eF7uJ3uUZQiqSUjrK",
  "key47": "5XRN1JrAckEHwU1ct21fgDReSuXzyXadGmvbkiDHvGR3JBCUTe9vSqNszHb65fxGMTj9pQMq1R6MALiino4zDhj3"
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
