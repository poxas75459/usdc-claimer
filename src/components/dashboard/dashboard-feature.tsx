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
    "5iPRtMUHycZGQqTLPJC6MJpUs7w4yZgdXdP8a4LYydMZEYxoRE2d9RsNNzxJz5vR95L5dAxuYGUnu6UaSEJp2pwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "244kuENxBRgXH2YMiSNJ5nKPp5Vun6rVPoSrtzYcTcaEGxMn8XZJpPevffZqHJ6yGtsHUSvwzLr7Y1YgmdvAJ7Nn",
  "key1": "2LiUaD9QRyZQr1FxiWMcAqpsZYJ6Dfs9gN3WoDAKKtx7NxsqkWGxjS5XTneUjtficbZ2jhWVqo1NMvBGdok5TGcd",
  "key2": "2uX1CVecHWZNc8KqkfkMKgqK8YLEBvWeUNyKokdwNRj9cmMNXgy8LpNSfJeGsTMg9B6oqTXY2euWSasj9YEKcp1X",
  "key3": "2wPJJqH8FSamkehdujjsnY8giUo7KH5WGGSu1JdjAY2HDLDnKpwjDc5H3YCvx5tsfFaPm2RqE6tmaSVm8jpeu2o",
  "key4": "5ADvDgbuM4yRvytUJmpeTH91rCBkudwDAD8TLvWMxRFuJDfY8Y1bwifnaimRY9j5YU5Rss2Qiq4Ff3zCKPvGRd54",
  "key5": "5uZDUBLnQEBQmaS3zPXkyCDf592P7Hu6xtgBSvAeQvxrTNbqtz42SJcU39VeBs4e3ZAim9uaDyK13fkD7dDdCUj1",
  "key6": "irhPjf7acpCaPFCr7WA7R6Yzavb1ATfxQngs2S1xyRhmnLT4FC7krUEQvtaS3wGaDRwboVqKcf7RS96WR3vkbbt",
  "key7": "4vUMpeRu1iSANnPzs1LsBGjvzAh3orLDefchmBeVr7nBwvF466mxyZnfKYGSKTDrVzLZCZArDwiMYUeaQroUt65S",
  "key8": "578uhXd4KqZDGKSHtcVpvjEgrCGjj1CTbmB8dhPtJ9nf2Z7Rpe1WjyofE8qd7uwhooXbZBVb4GWxedxp3pZ5gfMR",
  "key9": "2CRbm43vmHP2655Fo7Mdq3rkhtPU9YgUnSdLQNToQVDg2BhNU2akiWRqx9y9B8E7nbj9FwqsgxNHDuM8NcLHs86T",
  "key10": "4usLUcsZ9SGnAUkqj5er4ge1vVrYvL1a4yiK6xGx2EzS8y8CHpWam2QiKgkwLHyPShs5EyAFKp58nyFjb1vHN2Vn",
  "key11": "6U8EZyEzP2R3cvBPfKJeAGQujr7jgM6NsXGnPMjBfSkQkquVCxS4hVzyjjHxA8g7fgnh5WoUR56nE3vqfiZceEn",
  "key12": "AYz18NEXu9aGK4Co74kfFXwu5NwsCyLpxKycGbjCGZpcotpEx2C5NtWToWuw3SBbN5QdPmTGkYGsacNgAavnzJz",
  "key13": "KM2j17wFwDqArKNf65merxsXwsu976VTuoM5j8WGtsjj8iiy5pCePTRYW6sLZ5DyQgvDpy47LFfkLaBuYv4GdkL",
  "key14": "2ovLsQJRQiFNwimUHoKteMkeFwinJZev6mRYHcFqihrTvjvgpd1aJdYH7LFzL8UjxXVYQbdkWaaUuwCn9HLBboxu",
  "key15": "3fBbMCtLb7NTgJxXRK3sVKf8HZuir4EvpoauscJJs6ZG5QsEGAiLyQJmm5AG3brrUhU4jUhiYfu6MRA3u8ZDELRV",
  "key16": "3aRNBnFDA75jMTUE2AbYj34AtDYgePvVoyxYKAvduXBzrpc3WRnqTG2kswUXeGDgyfDdtj2WSYrnwTzzRVdgZsZR",
  "key17": "rXyDUFou8e1wXb327PdjPwVUa7DRJPpUbSbba6Rh6x5xHQTwMR7ywb3pLDGZaXrKTSQ7EZoYvMQtgtXusnQS3rW",
  "key18": "5ro8josBLhTxffens4wSGfedFmPLpjTymvqv8VkDbMV9LhFH8TYdqqSi1AwF2kdhr8r2kBuxoNErxSmZ3M7C6cMZ",
  "key19": "BsgR7RNn3xottwzuvXSX6oVEz3PWw3j7yUwKfrTFRvvATjsbJe7m83cYCAyzLMqREW5hm2rub1D2dnX7jYbn8YJ",
  "key20": "X8aReRCeKkDFS1ar7rrj8PGJ851GzTGbmA8YUdGMC2gsFzt3cKUA8yEvEsAy63bMfbbzhtJ1A9G5Ge9fxNPofh7",
  "key21": "3MrsVQvGwWckws7DEA886WBTG5vy9Y2v4UV1C9FKnFNQVqHmZjEU8XtG62J7dzqBcdY2atU88pHuQLaQmXNsVBDm",
  "key22": "4MgTegwNEZM2zLRU5W42exn7SLbnL9UkFyRJwAQd4k3izHcD72ZKDQyzqARX69tNFAU7fygnfi3HZMPHiGgYZuLk",
  "key23": "5n6M3g5q2zhY99K61M9goYZPYJkWH78iMZ1miWv7cJ8w8z18L1AG4NpyS2k8FtcnuGSw2VpnubJC16qWmCT79V9",
  "key24": "3KW1ykJy8U3ZoFiuhQg9YGm3Bm8Dfu5BQWNyfHBcdig6msLyXC2bvEpi6y7ZGd4pvWcZ1iCUBrHfd3ZdDqjx94S6",
  "key25": "4L7zdB5DRPGsvpLwyTRa8UH1QL9y4AX7o1TsiTVdSLgL8A5SZazUq881qxbXW7rt44tkL8rKNHCtii9rMZXnTrvG",
  "key26": "2B19sCqeaEwGuFheBiJqU8Tr7RoZA1uyA14EhH2qP57NxxYHyUAzxvHzQb6eHWhc6djymWrvryDkepZPqDy9Ukg4",
  "key27": "46giy2Dj9mtdQReg75aDTRj7KJYqeLcwGe8fzF1Giwt9865xuHnxTdeaKAV6cpNMVwaNmF9iWo1a1ZhhuHM1MMrM",
  "key28": "36NwsZtQVExFcQfzeck4JCy8R4S45ELHTgQD37qfgKD3mj8hueASnu9JeLfvoK8LyeDGjsiqs8Ln4Z683Nnzfieu",
  "key29": "3TcfoGM6Q5UWiiTS2REAYQrm5kPHW8L8V7ZhrDKtovek6zs3j3kRQuKje5Awmv7XQs4zb5P9D1qc7EHaU1EAfUW3",
  "key30": "3jRrbuJKic25ApLDnJ5JzwzyNv3oFamX3pDk3J1XKzt1ANNHJjjEbj9SVqiNbwngkY3MXh8pysAzd9UaVcNtenzV",
  "key31": "64zbt9PX2qz9nHqhojinmk9ewLc1mZMmF156F6Yj25Yoz4nsvmNrYyG2eyKrgu54rYQdZ2VZNdVUVak91fFpGsLW",
  "key32": "3piUNcQBkiMBiv3Ec616hdiDG3yxk691RWKrHyWGmY518UxrPrV5adX2Wm3thq6E22xTsCb2tmLvQZLXFTaN1qZa",
  "key33": "49cRYWQZGKfudvRtQ7uLsshGMw9eHqEVgDwUwf7yK3MeSAk9D2MbfpTU6owMb9xs3tad5j3aEJcnpmo1wY2LQceF",
  "key34": "2bT5wG8QdxvHgxopG8ffCS25AzK32i683FSgN822ocjVGQ2LD8FKVzdfD7VjRoqa3z9vEipWFYDkt7M3dQ2QzvG6",
  "key35": "2NzMcYqCNZvkTtjZ83BgPqLN8ZZFvkZ9iZgrm4inHpzd2WuaEjtcUYHYTB7KZ6CuXu4dbZWsgAnadAERQc4VyXWv",
  "key36": "26GVH1aYvaEsaaiQk5inxT7kX1x2KCyVY2Y3NPtae13Nn8ZTuzouZfYEYZMuXeJwRe2bxcGRLfsAuKeCdFVrqj77",
  "key37": "2oWi486Wtrb3odWxdYpE69ZjeaZbJsdBDiyJ96JxjUpQxoy2daBkhQx4ENKeynktdGuRLhhjgQXpjDpF5oyxjiEK",
  "key38": "2vXyVetvPSTaV8bK3kjuZmarFMUukPiw9Y5bWDSkHoGLPJ25X1mYZz3bCeMikPQvKAn1rLZTDE3QPQnyAWMa6kio",
  "key39": "4mmZBTpJ7cKWUaiYLX6NgxuRM5snjGoBu4m8bvqpwkk3LEr5SYhcjn2qMWyXfaPeBhserUqZ35Y5QLeJE6VeMwA9",
  "key40": "22ncMqSQEq7GYQHCwCYLR968bmSWsioiH2ixXQCTNL9a85jYWqrmF14bHHLcPHFN65teS3HpeUBU1URu37GfGQks",
  "key41": "2wLgbuuBCnyuWfrA4TP1meU2ans4dG9CHC3JHy7KDxp2GPeqnRJooz2Mb2ohzjset7jRmmbP2zZedR1mg1Vr1W9j",
  "key42": "5zja28hJiUdCqceEnGR1EFsST2As474PSjUXJaGhMs3gVE8SkayjHt2irBoyenLj4V9NrAVaYfG2PYy82NT7ypRZ",
  "key43": "2dMUiLxSyGrTRpubMja4Bhg4a6Gd3Wxg2hwPqRf7vNVjVwHw1xDyH3gdQq1EtWiaoJaXCj8GG7BWmUmcV1PT2XRB",
  "key44": "2TLvhSE8Pc3drKCxprR1gDKPMcdUbb5xM5dtHKLuWR3AKBGoL3EMtZBzUx5JWSTZZY7GNP9NsrxGZYFyJHBnvcvn"
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
