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
    "2MzzbDBULTbPkTfh1W8kcoLQuSCdyehHmFkQ3eHaiyVHqzB31GZgKz6je6WJu7UFsEWqBvPBkF4WxtiQdbo82SXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ptgCdrpkah5gSh6fiUi5NVT7anGYmzkZeMudsUPkEN3mMMW8DyeUDNFpK2d6uujk4jVWn7KhJaA8aPqDLZsPnvA",
  "key1": "2yRrQAkVrdYGk9X9Xxgo5SRtNPPSNY7CiMkP1T2FVZ7xmZTBvtJ79Ay76HqZYAwNS8Sp646WEBRmcm6KAGfKt8xq",
  "key2": "w5k3zaKTwi9KGEVfzGs96CQotHgzL2tLnKtn821EcPUtUi3d9JEhs1pkdYnSTjNVLGKv8oKiErc3WGfkk5Si8VP",
  "key3": "65FBxTpU4sMkm4zAkcHLWQAEGfMiUeATTsempRf5MG1WAS7pozdFpPG4v4Rx5gtfKfYgkyNuXEMxWYsTQhRHaroU",
  "key4": "petWprBugqGsRgRw4f2BaYSK5WRCX7Ufw4AriSj8NUmhTSWvXVBaC49qHGztbMEVTVrrezrjH5DTW7vggheXhQR",
  "key5": "5Hq3nn7pwsArp1jLXZZZkqsDepTAqcPtGKYEDtZrfhURaZJ4rUcJavssVr8gWvPDXmj5KNKX61dJkpd1ByJndRz7",
  "key6": "5yTJBUZC8BSwpX6tSYU96jjktwePaaVnQDgxcForkt3PKFBKQwp1VA56CE5vbgs82KZC97WZwkrd4trVoKFxDTFZ",
  "key7": "yzqXVX66PomojSMUp3jxjkTVwv7QBBCcebs7XCZ8LuWDKbrQaN2PgAMxsQ2gq5QLUsPmrdQJ9SzXPtQVapEaYnG",
  "key8": "3ExTV2cUT8TNb4QU89ceTzArZ3wBxZa1uN1tsAKcdiqugpeoNApAzakKon56m6kgU7VTXofSVpNyLkgTTzjk5hvG",
  "key9": "3XvrCzCkWh5zMMcsBkysNy7YqWwDDRLrXqL6q7vecDSyU6jPs1o1TiZAK3UJjFf61gj9xHy3XfHhDeWnuuhtL3Nz",
  "key10": "3xUTQcD6xG8BLmY2dFJLpba7Sd8DTr3D2Xn8ubfTutk3V65T7SiFRvYj3r4RirHeYf1Ds82dRtx68tsL7QPUrqVd",
  "key11": "4F11D5fsiJyN5DQ1T4zfjNXQfSBTt5cryTXKVWNfptRRDD6G5eWjpd3Q8ri3B3rW4cxafCCyoqQZKWwMa8brd1bi",
  "key12": "ghYYpWgLtvA6tsPVonDaURpTNH3rsbsx97N7hoZ9mjgGkjnL8rTj1mAusa6bDNMQDxKmnFa3g3PRrdeLKVznD5F",
  "key13": "2nDmvkNtbq5yEjFRj3q4rQ7G7iXeMjCqY18NggnGXhLgiSWhuzHDkfTPXjkY1Jkus2PMWBqk4KoG4HKSUTNyX2ku",
  "key14": "8RakQg9ZqCMps9XtHoW3i7xKAr9SfCMT1KVW1jwzxFJB9D5GWYPV3iEXng5kZeTXd1QcKBuHDboSGZp7br3PvcT",
  "key15": "4vDuTFeqPyQUtWYD8Lk9zhWfJaeYP4E3EPUR4XuHLsxy5M9Rxvcyqo9iqSjLkKw7iS8AnzMDGx9V1Wr63JRFJbvE",
  "key16": "3n7wRgFLeFX5xZ9ecQLyCNKryhLCzJsAegik8StWrUXNdZN53XzjtvTcgqpeiPfQK9UDSFSCH1hs1R1NsAsoYBgG",
  "key17": "2gKhRW7sBPWoLs7KP9RFyAjGU28KgGwLGCpKeTry2Mxbyr1yHk827M4gBAyvxmng9CiXieTtrxSPKNWfywWdfQa5",
  "key18": "3cpDWpY5NnoshXQC4THa9fviUKdmz37TJfX8R5yYdRNSSyAC5mi6JoRi9YjtoXjPk1HpA66BWmjScmRVKS4Y3aVx",
  "key19": "5BDa3XR6ZfdDoRJfBiC2zMWa7Vj1jwXVLHw1F3qvzuafju3CvyA5YUfzkRx9sc9r1aL1b5tgSjcxmHDxDHEBdY9Y",
  "key20": "5mDhxeJXePvkJxuhUcs9RH1yC3FF8xVHUAQKv1LiZsNrGq2Svr3SA2sPsF2VYwAUrVh2Qmu66E1xEyAgrvVP8nDk",
  "key21": "tDLz7Pt4Z24yQcXdtPxzmXXgjHS9HebHpJji2pxvc3bv6wMDaS2Tco25DU86NXNimT2br2QQaoAA2sYN4MdrFZv",
  "key22": "2vr6aMX8eLonJgHEMRaMMeqCrx74ffAnPXnCHhsrSKT3WqvD5t88AnpsDLU7KDzXheidqVbFYdwSdM32ACyuBtBn",
  "key23": "uuKLQcPsADyx3hm72xFpS3KkNRUEqv5PvbLiKQPRmGF2LWXjiQtAU2UWEN8yzLbx9inpsiQFnr3jYonBU1JhnBB",
  "key24": "2iBDiphHVEpf96DDnZdyB6fwE9u45wdaDgnn4D9kwSCZrbAHsFn4VwKMCTPzLsAAiGoinUany3PBUjPUPLmXxXXr",
  "key25": "2yHw9XK8GVCdz1yfrNwMCphQDyh59HJyEJnZdBK1Zugjk4Ce7cuCE13VRXWjuGJcmdx5pbpRmfDPftnoQ2mvvUmR",
  "key26": "2SbZEVvjyTj8TLyxxaevDvBsR1Pb9qmk8ccLqu6eGAdV3WiGkJdspzs2uHvEZVcrG7fke9gvahsCX9A19J5vaMmF",
  "key27": "5EtNCVSzQ6LU22oufxiK3RXXWQGj5yCDAyvDne93J3rTznrAbsPXLM4TbWc2eqSpdJ4BoVZguyrk4fr96aumD3ut",
  "key28": "NU4kN3zvACU1cqnbKkFwTBYQy2prQ1y98K9r3HEzXqQG85qJUSZ2hkNL8NUagwmsiiDQe3GwV95zqPXA2tfSjw8",
  "key29": "57XKR43JngJ4Xg2iM7jVwYz8feR44CWhZNozKN6jg5L8FYDonYwBNMdNQXCLkTBPiyvnzubDedH7d3LpPP6TRVxy",
  "key30": "4C1R5fPmwgQhoFR7VmgLz4eCb3wc13BhCWGtT5iCswmkkNTgUbnHgrf48x8FQFKPKNsTMEKudvsHjasVsvoTEb2f",
  "key31": "29QUdtYGNYaVDE3qSjcTDB8Q5upZtvRhAeKQjRqdy7F7p35AARVNcw5dJFqG7FqVcsgoP7PLYUpVxWDkvY8isd76",
  "key32": "59dZNedbzezcC36Ac3upLWxNYsuxjGdsLuY97Q7hWAhnm2jNqBtDxg9RrCkFjY2qzQbV63LftnxnSKAbgTZ35zGa",
  "key33": "4MnBuh7qsQ5rtDtbth5TAZLY7wNdvrmJbLoQmpyQaYKs92KP78TMxsfHqoBYKmpsX86vBT7M2AhTj4q1pqAFbmr1",
  "key34": "5hfeuJmSNp8UR6sGijAk9tnnpjeGPpdDeaDKe5PDjf4f5gwV9eDJkvwutGtgLC7c9FLHApZybT7zuRXLfTQPnvqR",
  "key35": "5jkk1B1fGioc4J2qhZZ4CbZUbeJAAQJ1R4NvYWxFRLjBpsbjgNSaethnyDy8Lq2tNJzkrGyE1pZH7NYt8BwF7G3J",
  "key36": "vdKGXdGYiC7R6ED6H3rdzRakxMS4cxePjpy3RvJ7FC4EwNRDJ1MSyQdQSuQFAAJtxs3bLCvcT7C8Rt4etfEyX5Q",
  "key37": "2gi7uvef3QrH8anL5htQFsA25sK66AMeqTor4yCEHg5rBpdRtjoAYyq2oT6TNrQNpPB9eas4GQxNkHqx998xtLEp",
  "key38": "2TwWRqQkfDetTfWZ2rLAMjwcdRKjY7k8FoYvJTYdddYr784bR3ndWdADSW8Byo6c6ZrXzbjMHgd87X8DM1W3GQW5",
  "key39": "4wvXvuiedSUzyDDBoR4bwa48bQHbvz2YM4242VbWWSLpvNupaWR8mSsZQPZVDQuhidWEPUmsRm2DXF9hDH6xpbPK",
  "key40": "3WdpZ9xkoTV7AZ5VRyNfvagg6NfUTGUHWKvXLCGLhW6erhtct7NQQoYndr17zWHQ7bajD86eB2jAo7md2UtCQ16f",
  "key41": "64vPzrXZR8gE3KMrHpQAx7n6q3DbmTwdmvXKYUmVdwEmeU29teAmyfQuSp2UfbPvq42SHo8XTUNmwkJyBEwS5HLh",
  "key42": "ieAcfJAY1cWgmA4DNpZgx4UCR4Y8qQKuC9vLTjBbgHuB5RWfBGGnn1fdaooPUQmnWStVf5udNybygdPLUqM4dbX",
  "key43": "VUxbEjy7pA72BMJW9WCLdw4nxgzxFUZE5bux2PLrN6Ei5QennbbHLy2dri9YAoGFBE31McYzpUTUpmR9v9YZbVT"
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
