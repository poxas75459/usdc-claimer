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
    "3NvwNzVnnJyDim4E2jyfXWYipbezxqz75yS6MnZzu5TsicwfqoZsWjzKrasvUuo6zzdj65Do4JQovNb1wWJaWZAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AakBmrRw5fmHceM37rNmStrbCPhmaxXzC4TDxmMSB5ApTNdWmAouYEaFs96zuwzZ3rmbNfvVJA7WmDqTt1Q2EDp",
  "key1": "4eLygtyj76dEyZsmAsMcRkFQd15144eTpf7vALSG6Dkp81WaZrfdAX8XYwby88aFTg7Q32VwtUUkZ3tFdxtMTpqk",
  "key2": "23xyRJoRXoupVMg8GQrS8Emi2DdZL4XvWxkgt4DCxeFeEt1rpu5YDAHrELWjX8kTq4aWWkCYL6RvwerPF8EgjU8F",
  "key3": "3FAPykvuqnrsqM73sAMTiJHYgVXqqacvsniXHjXHxnaXtZz27gHXSbFdBdmaKT59JUUgTXLqN35PNrTHTXgzyVxa",
  "key4": "3obiD2kZPUx6LeKUSNCgSkb8T7Zp4hk3VhGM6f7TZfFWj6THZfuNf28bbGVZNQheygV7fg7pQdXmon3DopVpQDxF",
  "key5": "fxdfFmTVXyhYeAQf6rsJ6TGrqsLV9xcJQhanGF4jqPr7ums8sam5Q76om4iJnSXFBGXMwghjNyFFkrMZ21edjsQ",
  "key6": "TuUTb1azTQGcMKyo3TH2rPpiCBpJaAD2fXtDcZYVeAb5MxRrdX8NWqJ51HzwCYcq6s6wWpWUdCz8xExhNodYfUz",
  "key7": "dg7P5Tjw84tcQTVzYRfsLpYqiRfjAA7mpMMWWNbTNAkL7jRHNNGEaJj36njzs7YAhfnoqRPQMv2vxp6AmKjDztJ",
  "key8": "29aoj1hdpSDq8P4eeRFMB4qvXfbMp4ZXtM5dGVjYF7SQzF1TzDVDwxPLxKaVepdspzKrY6a9iphN7tw3jBvLi79N",
  "key9": "fQ2WYBfK5ABFh2ihrzLeeBFwAxR6byuKnxmmjc2Q9wMfVgcB2tAq5yYdQNqVDr1BSg7KxbYyNp3qsFxT62qgCB3",
  "key10": "3KYVWBGKRgsCn6gvaTXwrfGRd5dQSc56foqfvcf8bBgraEiMzmWsYCijSXYfCe8Pt6RFEkQpdGjPj6TS1HFu9xFc",
  "key11": "4vw2FC2ZsdzT2iFWbsBMFwkXWXdNmdrDerzuKnj2nGBoogBbmVspdHFbCFiF7N9PrHFwSF1Y1nErqF73Y2UbEugB",
  "key12": "3rEFK5sqhRVx8t3HbHQ8R65FQZYBLKu1c6jSyDhPQT1FpnLx2Aj4Ey7eBJEZAv7ENoQxwXYSHLrcmRUFKHH6Difw",
  "key13": "3766RGMy3dwR3LksMxiF4cHkNV4nbY7SVFCaqqSg2QajJrzpYushqxtAmd6UHx2GhxZdTs5vEepFhYLcTh8uyQHW",
  "key14": "2wZvjbLctULBkqMzAGMszjz2TmYqqck6hh3q2VVE4z57NvpuRatyCHmEs4fSeWVU5dW9WF1Yz1jNVdaQGjbR62DL",
  "key15": "5gBSdznpCYW5Ca5mF2BcC8vcy1CbDSM5PnL1Hx3dt9tp5xM9WrHzbyNfcETzWaD9BcCDaCZ2RUVVkKXYEWktBveg",
  "key16": "oy4o84qp9nvZbJ2WaiDrJfHEf3ZgFb5yH86QUpYoenwAL2ycRGigvUVJn3ezdH9eqmRHwRmGvNi5BVybngzw12i",
  "key17": "tDZYTww77WDiuSFgZftH9JmKJ43LPbssSMVSR52pM9GVBBxfvD691ddAR4tCUJWUMLNuw519aEykZx3NDVjc73k",
  "key18": "5H5oXZC8D6CeApsMQn4mbBSmthiHrtyGyQD1wDMEZhh9ADcKGDspqcgmX7vV3FqadWpUDtZxiRaiRC7LXPLPzZes",
  "key19": "4BTzjdz7g15iuYUDHhm6YyBikK9TtZa39f2TCvm28x7gkDNYwpWPcxKsTZPpd9rwvBpsZ3pNaZiLTEbLMZ6KPjD1",
  "key20": "4aTDAEvmLgYGwsoLxBzjARNm5LnVdLrbUQmyW68zpuoTEpz3s5horTVgeXgx2SFVfEtyJ84grLMy4oLfGxch3DSk",
  "key21": "3ms254ogh5zZWMij8BmTvnL7kgpvY4VK71DsoqFpyUprS584sCRuYSWS3vfknU9oSxE6Ry5Wkp9bh3W5FP5KkuRB",
  "key22": "wXu2zsak5PkoMMvNhj3yng2wHUNyM7ToLZ5t5dvfYyYPYg1bTEyHM9ZqLM8V5oim6rCVVhEwi474ji3GqpmAVqY",
  "key23": "V2bnrpAfk7DXJAZbZMrbqdrzMKCFMVaUJfiP6wajWpVWbhrhN8y7EGURbzV6DkRpG93Kam9GBJjbabbsifnmxu6",
  "key24": "3wix4uhXTZxYT1gV66jox3PZBetCQQ63RtENDxpDTy28rdzD3BW3LYADXZibf1vef7EF3rEiZUjTGPoDXFdHfd5Z",
  "key25": "57KPkp6iPrVVZE2iHgpMCULyuvZvPr4TXGoLyj6iG2HubmUY5Z6spi3DhMGvEXQPduKMRwTtB4avbpJmwSCP1uFq",
  "key26": "aAmuRFH97YCpYM278KZyq3M7GaosMsJEz932JCDb8746wn2Nb3Z4yRReaKdDzgZrRy4omMW1wu4UuaRwHHKgnx8",
  "key27": "2foC2Dspgvx4yA8A11c7GRFRtWoZEgvYKcfXjhTUFQMYa1QihABf6nUTUcBfGuHsBamCp4Sfo56LTK6NWK9CZWab",
  "key28": "2w8by9SmCU5t9cu8yF1cSB1mDm64Dc3egzBNpCs9BhqvhQiueiNWbN88MU46yUXnKNRnCJ1p2kUio1gyaQJPuDZW",
  "key29": "3G9Yvgb8YcAWwsVBr3YDr1oyMxRsPwk7L57Feu5vMUNMExa1JKzFo4wNmt5A4CUm3ocgjm959wXwFXF7KJZzAQU7",
  "key30": "4oLiV6BzNvT4FqatDXNTNo3kPUSLnSyyFzNgUimSRYgC2SoVmXBzciGEJghCYZmnsYC4MPGSE6syY3UV19kQVf1H",
  "key31": "3jRhuKxBPyn2UzJHgxnVSWtD2oXdNiuz16m5m6mBKjHsQ7wwKqJUYtWniBsSkW3t7aC3rUhrA6e8UqhDktwXbrFu",
  "key32": "kXr3QS4EBSZXydYpFy5go1cBiisqkgos6FJVipL4vjwkXWhr4GbRvuwB14zvFmxFDiv9WEL6Q1YhKtrcLTpcR1J",
  "key33": "DWLaSM4zjSz85yv4i32T5p2jaEbwYB8okDADbAZSmVYzZoyi4yLa1LbCuojQjNeqVYGPLs3gvxiTtyqwfjKZSJt",
  "key34": "64d5Bx7e12jEqehj7mqmprDbnJvK5my9LxCVAJYanxJ14ExKGL1B5oV9DZ4Zut1JHUoM7oqNartKrs7ZgwR9mrVG",
  "key35": "2T2TwJ6B7HoUbC4JjfnoxQCn2o3Bq9RASdmmPUiiV5Vcnk3Jn9BfCx5nH8G6cu8bniuQX32gJ5xbG1nX5vF2JKLN",
  "key36": "4iDYqSEGBtMULiCFm82JYDaWTEfDJZX1eAC2AwpxRwiHvHPjES44fbBpSzJCLNU5u95GTcnnmzvQGchNaQq65JEF",
  "key37": "4dkby5fufp9Fhy64WYv5DQpn7sR2CvEhfsevMXEqLoRCvkAdEdVMQLKEdkZQXxd7eHYsyrWphiCF1SX9T5QAsx8o",
  "key38": "5HxwCEyZTztUCJgZEUhSgXx7oDKGLzcg1xR47TobxMgazNiEVQGcnMw55GazjWhUh2RTJbK3ygTquELD9Jk1f1Bn"
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
