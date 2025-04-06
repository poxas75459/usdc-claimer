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
    "YtA9QXbgQufwCX2pT1zFBbwyJNRptQumGrCuzFbfBrj5hNSbikkST6UqVCKGXGcKuuHtQT4299XJ1H2zYDk3Zn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PEMwZaT4snJLZzRdYFrJ1SCtzscg2gZecWiFAQ8YqM6MTitnVGNgtqY5GoSmnakVV4jYSTiKfh3rDxRS5sKJDZj",
  "key1": "5WX23awPBF8VkD4sMvNSCGXGm5ktE4n4p1KJNx8SCgixHh7DFupWFsEq3q5czTj9LfBcxF2coGt8ofzB8aGEyWrT",
  "key2": "4qfek8bDCAipqwtJJd7b7c5QmgKzQ9zzH4rm88iDyg2Q6xZuQJpHUvm7ozboaQm2Wpd6HbFi6qSbiZZJC4g2xEop",
  "key3": "4CtskfUBeyhVvNDPapJU9WhoePGm1vf39iz5GFCVDtz3LHKhU1xVsLqVNZFtAzFCkRE5JoTAVzuGPSiRRePTQWsQ",
  "key4": "5pGjQCYk3cNACFstV2gozpdeMjb3Tm3uG6D7FV4hGhYkaWtMCa7zSu3yf7MHss83W97T5zdXsc4BbPr8wJsenaKc",
  "key5": "2Z7DXy9gL5GurPFej6E38uj6o14D8NgBaHrrxscQ5YMH5ogHp61dz5d6tk97kfx1PsiuaCctzCU84bVSqwR2o1mM",
  "key6": "63JGGeK22dohSzywQ3dzu89KgnqQapsgDDf9kxd3sEwU9U558dR1oTWtkhXZLuVow2v6JVUeh3EpajBGFYPWjLAx",
  "key7": "47Bz9UVGKUQbLECg2hMWQ4nATxZ32sBg6uM64cV8edpCqJNLBsjPeVtHkBXaVPAmF1BW6A7CepnsSqrLGRYigwjW",
  "key8": "3CDQqnbkUd7FuEtoVT5b5tBvyYMptzVtsWoWptsUVktee22BaATZsJw7xNLWd9GKvyeAmi29H7C8NXBjM4ZRxZfP",
  "key9": "2eTVRM23m5G6JxqrBVH8pbycBKQKuYvQERfpztr1pXxaYWs9x7UBUGDA69FrMJveT45v8MyhFwf2JkzretjrfkxL",
  "key10": "LkzpTNQa67WQ2TUQZ6GDPARaBottpywv1rzzm9Bf6EtGB5bu95DMr59FxnyhBupeZwdsN2iEkYRR6Qmek16U5HF",
  "key11": "oD8Za9LUDaH8q7kAK92r7by3DVaVyUWCuTqfJpv4dGvPTNUGzTYyTHb5axa5VKmTRCrDaKvCke4J8258gnz7yd3",
  "key12": "4uViNGNLqFJy7cEs4HLg6fRcKeweJgDHqWRpUYm9ZWVJ3USvyNW7yAJfU4SRZYbHUQWAMDuurP3LHwQS6UKQcd2g",
  "key13": "5GtGtaQudGzJt7cbZzihhhrTeymVs7oH6etfFW15us54F7ikEkcWEyuYABm6CzauopUNFPAygruwAggFQ8YCVGE5",
  "key14": "22QzhGgekYtBen7bzm3D7RoATHSgdDaXLE6wW8E6gfcuzMHzFbtijcZEuuYs2gX11Y7HK3pws74xRLg5jQT7tjQM",
  "key15": "kZNEAA8oP8Uq3qBbG5ZAYkRdiGvYH7uPMH9wc5Ew6xzDm8t5GbL1R1gqK19u5rgNbM115DCjLphLYbD1Rav8LQB",
  "key16": "2XtdF6sAU1U7gZgmEyFy5vBiYDATfnXU9Uq39Us92Yi8DMGS3BoRUNuq8AfVZ6rhH96SdDBou51ao7a9AJSV36Gr",
  "key17": "58GmxGR2NiCQm77tTqgzZ4w6rgWX18ir9BwWd7T79uLPZ8XjZ3tBiCged3muejd3LtsdA6BhsE6f7DWwe9rPMF5r",
  "key18": "LL6vp8iocM2xmQd2foSC7B4kJXc8GYym4R2W8AuLUVf1G2ArwkqQXCzcmWgBBwNF6vseRxisfGSmaoJhCxLotk7",
  "key19": "262fKRJvFRy3Kz9q6BbRPZxBtLM9eCBh5hVYe7rdaacLoG3i7FTknKXV7AcysqP26yn8d5B8y2okfGUD9vBr9tSN",
  "key20": "2J5do2e41a4E7mxzoiuZhmnuBuqTkm1eKSsgf3p9ghWbZpn85Zqn5vb19pBSS33vGb88X4N5sbmHvXG5NoNCCFHE",
  "key21": "3Y2EHtUqudTuxtK5GmHGR2LjhVWu9NTJJXFpPWNarFE18RfUJ4unSxzNYnG37Sqmt7kqizhpGidjQtfqymTwwCZf",
  "key22": "46RTZKo26CDxsCFyiud4Dw4Qoqe4ZC49xQm7stJMDYLPeTH7UvdTX3fz2ZodVYXiSPSatvdSQuJPgaXyrZQqpsmK",
  "key23": "3w7hbs7UMyq5tD18YGSS3sGmfVc6d43XpU8rQnnUe9bNhSRf6QGBwzLQ5nm6t8zmXDi5GNtftyVBLsiNXX921xPo",
  "key24": "35h8MRLdn1R4eMwFsiP5Bskv5d84GDhQb9Eiq6e33uQ6TtqdA45diJCbk4D9pcU4o8BaHFrsTYY9UKs8RUpaPGpj",
  "key25": "2DzeajtXYntUwBy1msHy1naSAF2KdkJr4upCrPZbTmf1155gNXgo5SZWsE5VKLaWULMRarU9fBFVtjTzotJfcwbB",
  "key26": "2itrLJXtc7dtemHMGLRTD1efQixe3qkp1qqzPCfHEpSrkmVR1ybJcwUHdLegBNahXbPwP97qNyvK46ScoxYrt4s1",
  "key27": "46CTfPLS1jiDgitnWUcPM6rb7ZSrvGdhK2AJn4ikWp9rH2a43gFqNJebTbhiLJSi5ZQKpm9GVJE5ajQZLdSfdc6L",
  "key28": "4KZNfy4JAxAGDqVnpbsWKMZppnXMSjTCBLZMFH95H5Zsv8DTPpMB1uR4Q2P45UoNMcgS9VaUpV3itGpbxw8mCuv1",
  "key29": "qWZiR8gUzj3CAmDsqWwfroorfp5nYcUYfLt4Ry5WrDkLTHJrv1XAnPBr7zFncUaCK8K2fdFmrsEAR9oZvDaVWz6",
  "key30": "2kmSZhKja2GJDKmogggTvocdkNdvAVour3Qx9rrMyAEYLrjBwn315aaypeD6DGLjFVEKKhmMi7ASeVA4SCB4s7aa",
  "key31": "g6yiywojSnph26uAVLC66YNBhktBTHgfUCDTSmznaYDhFDwnbKMbqvpZYntMHry3x6oAasufeRdJdqFp7qdg2xo",
  "key32": "5gYdmRBNtCk9XRdx1xB7VNYe1hgYJx9L6o8QEkfjHAHLzRUtuHZPbx6QJsXQTM9RryvESYsYagx5K5JuyKnZpNPC",
  "key33": "4cXKfdYATxNjjYdgEfCnChbXH53Df2GMGd4wt112mcMP1h4ExaEnybwGaw2RJ6AeusMxacgsKuzHGwr1TZjv5n97",
  "key34": "4BQZG18R3PH6z92JKUctyEPz2wBzUSELYHMQBAL6r3Kbiou7Vq2GLj3Cw3rnvatPACE7MJGut66bSTdBXexW2GTs",
  "key35": "3i4DAzds3Cby636UJojpssZq2ciHkoHxCGDHaym2dBXTfc82aPPkunWzjcx1AzphG8hj1u3Rb4RMRG4FukPiokyB",
  "key36": "51DUBZMLSi2HWnFSXWvugsD6SGTTgf5ssSkJYfAQ2QXPSQgRQrV2QkhochjQ7YNLi9VsLq4FswRFWR9NWmXhBVhU",
  "key37": "ph4wVe8ZUxULhuUFHsHt2YooMheWHhu69wVSQKYrvhk1zx4aFM8KSBPVsrnj6dvaFCZBAfTLAgCHDjGrsxqrx6h",
  "key38": "THYQZeK3HJcDdoNDebZdJBS9hwzvi9U67gofqT1oRcUF4TmQdTYpXvSMvUXGZCK3JRBtvuws3L5yXNvauvCZTZW",
  "key39": "6TUDemD2ib5uEpYh732Y8JZYbVD8twnaXGj5XQi23Q1C1AAo2FvRqSjrRpzT9tPFP8XfmrywgMoyaJ5x3TFWRT5",
  "key40": "4DPya9SpbEirW2eFWw59au2M67nUQmYoyEnL427YXuXg1c7sDgsaY44kC4MKYWf38fR7PZJ8DsR5daEWJwc2FZym",
  "key41": "2Sw56etdq82j1TeD9UFgWWQYdxRoD2HBK1UU3MWjxsVGNRmdnEos3AzhNdnfgqhrBERCvstUpn2GicCnzDebPi7D",
  "key42": "4gVbkw155oGPGrusiQ5cTZHLwLnobehJ3afvJHpBGo7w7soS8RidQA43RG43dLg9DhkoFRkVZZ5tuCc5m7rd7KRm",
  "key43": "4mFHnFUN7PhjPfSmbJ883ttJg3yFK5zSryd9DTuChdLwiPYJZdmBi5tyd8D2vAtNKyJHDkGR38WR3nzCjYwuZKfC",
  "key44": "K81KZSMgiqDjSc2kt5TWW8esPdVYSuukWkuRpNnRdf4xM5ePGRykFrtNssEZ4vbRGAZj5wESzNNCmrvYLsemqgC",
  "key45": "BUdzs4RcAkB4ofv3zQbLdWAdza42dUNF1No2iBxMYNvMo2CLCmUGnJ66Q3fjmVZfJ9cMfRq7TiGQMpQSnKGvpaU",
  "key46": "5YRe89nP6PzuvqTTW36qaQCy288qkT2dvFns3Fbnqjb89eAqZgSiTfVXV7fyCojf4nffr4DTTKmxBTHHVZKziquk",
  "key47": "2BxzenJuPLHQhpZRRN4s1bxs2hFYRwV3Y1HhiNTUs3SvMq37Mxfbr2Ly6UMiV5CWute4uvSHhyr7LHdAgEq4MzSG",
  "key48": "ei5fujxLMzDJT5UUJtScrmnWpDcd12nQWHRDXv9P3mU7B2JVeDoauUK6Aa8XpfDrDmatJ1y3ZLHYo2YscsMkKju",
  "key49": "2ZDmfKt6Pevtgn8KJ1bK9zKDobzKdUuwyS9Qu3B7D2BBsiHVimR5tPi66epFC9bEQLM5munv27yENsedEKaZ44Br"
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
