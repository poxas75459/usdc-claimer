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
    "Rk9azucMQPG7RWX5xgfbxpNQTGoUDj38snsDgBp9kkALMMAh7oVFqrLooEYpahyjHK5Ak7yURfNXECyWJS7L4xj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26pXxJqQR6SsMpByRmTrytVYNkLgwqN2qtZa6QPYbTVkL2WvFdGHvtrjpie2imUrLZqdgxj9fkjfzpkxX5xxVqkQ",
  "key1": "4apLfu2p7CTTKvHG5zTcokLcVsJYQtxdDgAuXmcTi2GeJx22JE9AGSfAVgzkfKD6xQZgjDtfH32EBDgPodrTBWE4",
  "key2": "3rFb1xxKuxG32bFLMSPtsxr3QALx8n7wR75yPaLd5H9ohSN2QfsTeQr9ywcAMaES5bAZ5A1ojG6rdeEanSEEehg2",
  "key3": "5HtMjjwMqLNNBbHSu8XrCSn9jkcR2ducvc44akm4QLfNu2PzAfZgT7TeQcG3cF93q33k1iGuyLEt1LnFjmhMK3Rt",
  "key4": "5mavAJn6Nrk5BjdBdTCoCe3mS2ZmA6jyfSXuPFJyiUumvDAatmaQK1wrsxR6xLjUJJAZn2E9Unph8PSC1QWVGYej",
  "key5": "3y6ZFpbLRgvVtrwpiZLuhYPRms65vo5EVKFpSJZ2tkbBWQzfNAyjtGUonEJGuz8FrTCspmCXNg95385hApmwodUa",
  "key6": "2nMcei2tNExjvjHVcXd62yhBbcg5D3q2ZwYKftJAkM8sB8Ru6V7V9PHVmKLZ3XMqNJ7bPqmJ9jUjUBegcpkZ8LvT",
  "key7": "3MDKY2oivQ8FpnJJUdMx7QeHCjuk4j9x2QoHHwgev3YisMXqNeQzcYQabWz1hjXafRrU4WGBqFDRXKJsvQ8Mobjv",
  "key8": "4L4SfmrmLTTmkDjb2jNAT3VShndyJrjPg3GMtxmnCi5AYLw2xGZEBt4suddrgwnCHfsubyyfPNWdCRVZGc8WsMwU",
  "key9": "nabBvWwSw6pzokJ5Lobx8wKr1ohBjqUdhEUfrAA64yzA86LTeaxrwkwaUFtzzTL7WwrYihbm622TvUrtEw1Rgah",
  "key10": "26vb3S6Fbz13TmZCqh8XP2zj9q1R2q4aVjoFmk6GLg4xJYaGCvS6cAr87K2fQLRVeFFpt29qoYy25pvMCXvSvg7V",
  "key11": "4fdEf2rbs5CNE5b3kZK9JH1gdsQfLuLbKcTrw8NqkL1WenWYhv59eAGDAiT7B2TWbJfeqfPnZSseKwZY5z6qQ6vx",
  "key12": "4SynDdRgNiSwHtQHWjyqRm5H29aWkN8W28Fi4xqBf9SdXwc26SAFzShPzq1NjGq8Ec586SMMKVu1F34QNYfYNTbc",
  "key13": "By91QmzGQCdfepCmURXTFzf8n2nktGpvZtMDC1rxaXgZpsRyPpstsKMCwQewKSJdGD5LhJaBgBuzfaYmBJR2Dgv",
  "key14": "24oVf2vP9a7Zw9kJF9W1EhBhtZuM5DHqNvuuV7XjmEenHfevJp7sgt65e2PGPXS1ca65d5W8Rq2G6yNC6PPgyBmG",
  "key15": "3cNPnpAjgf2aS9g6gBk6P8wWUFv9iKKyFzdKbuRkayvYfgz7TXj1NpnZDnv3HYhqN2CvLP9tHe4cdEn45VFbYfRQ",
  "key16": "3BwV7kuLhmm7ZuqtjfsvQRVNBp1vFnjBnGqa7pQataebU8Losgg2eE7fUJB6zHPircMupVsRsKxfH1Cj2dAq2MUx",
  "key17": "5p5Bmzze5aP8yLtr6dMSZKMYnekN4xFsMa8LCbYp4ySgpkSNquqEstiso78aQE6GuJTqU7jePoqvM2x7PDhnpWLN",
  "key18": "5of1xuKnqYyZC1QudtJDGRNCyfNHcdAX9iY7JbCN5WFZiF7MhPhKzae8PpPFzF2rx6yBk3BQNHq2uzbQhqvq2Xe9",
  "key19": "48gCzYZGiP4mB7cepmN5UDEgAH531jq9qTqkRkNvkaRrEX1PooviXE2N8Q7opCF1DvCQ58bWKrktSrkUH5KbHe8x",
  "key20": "29rVTfdDVPWhJDQUtFuxrFqrPLM78YgmKH25vPgv7pGQEM2TaAtuCH8cbmLE1NiDJB1YnmCdEXf6jqg4oLH93GXC",
  "key21": "32j9nq1YUZa7mm7jJkkaL6Rn5p5joG6nQK1UALKK7Th1gf4w5EAvmxkGtZij6AaYUMdCXkS4wzueAMohK8uanBYV",
  "key22": "2UhzwhoRft3shtdE3eZ9pYuXPgQ8WYByo1NrHnEzxCanZeikSxueMT2drCAcLXYBApRaDP7YguoUaGtBvYtBCAGW",
  "key23": "3EShjMKbqdF4YdAcYpCuGwb22BWJjH34aeRYLpp27dCdTcSyqdY6kGaVayTegB2Yxo7xR188eUm4z9PgwkxYf4UD",
  "key24": "rcf8qkeatCjh9akg38Pbv8GG4GyjRmqZ7UD5svyQWb4svAZRQ7PxxkecoYTZVoiT8JCwwrwRHmbAMyV8jJ5enWP",
  "key25": "2YG6rP4y4ePcm6Dsr6uQrZ8xz1sPuhKw5ncCiWz2Xtz3NT8SneMdmTWHMoBZVhizcLRMeyVMqAReqkrUTjQxd4Cb",
  "key26": "61XzKzscvzUahKqbEmRnZZEp3T9poZxvkXrg2HgaTDBfFhwPxiDkvV8ozYt2yJygKAaFMge7PNMgNYKZnEGJBCCg",
  "key27": "4NV2kYftFxKRyQV9NfWJUUYtid32Zrr4sXfDc6UhML7jzxN3XH8U24KegK6KHJLc3XGyLpRo6AaPn3UapmEQMZxD",
  "key28": "658R7DTUFAg1NvuQwGkgBEziGBHWZvXQESoRARAWzTbE15U2DhM1ZrAtAZ8rt785H8XmKpo5oqg2LtjmgBBRgSMT",
  "key29": "2v2R1sv2V3vQXuTSrFiLgr17P3SwtCaNKRU3rVwBJNccuh7SFbQnEromwK782qvueHw8DF9SPDJ8dzP4H3KTxPnk",
  "key30": "4LHhhstkyy7RQhumSp3vVSVu4JPCErxi2VRm1zmbtnH9E8artEYPy8NwMQaiJwyefnNdxU36HYB6ZizehhPEXb5S",
  "key31": "279tGbYemv7jVUg89B1tGjC3afKiWrDWUkV4tkQdZ641kdak66uBA8FUMUSfv418ULpxHRnvtWgCaL32ma2CiUv5",
  "key32": "2ZA441uBtn9ATWd4Jrzgr8cDYVEvNJmGppzUQ5GbQDxR7B84h7YmifZpvDMWj5ZE1oMiWsmA5tjx75gDe5QDBUdp",
  "key33": "2YhNifxTjdWN8wvdFXQvn6MUVivXnejxLsPgxNJc4wNTsjsqZW3FNMnJBEqaQD7FwebY8LQWNX8fkvaZ5Dt8qWQe",
  "key34": "5cQiFgkcjEScdBZy5As7gMPbVu6THzxgcpkC6W7Dmgxq1umtmUBVMCdx4zekD9nvBe8ePPfe9bFEdXtHdeV6247Y",
  "key35": "2WQx5NHZCdTa8Gojah7uHxYuZmpERXvbM3FSfwrghWk9qCijoViSSp2PgygQ9YZxQn1kdUVAk7Mjjr3FS7LvqfCq",
  "key36": "3DJy71PHTaooYY5LPcUSJJyBdsdrPyLeZHz23xR5BFrnn56MSK6pjct7QpGsQ6PrQLfVgc3PvFyk6Jt6S3wjEEHr",
  "key37": "4pWiW7AsNpgk3Zoffy1K9Lhp92y7iWYkpqc6mDyn5do4t4cq9oW1PFvpeRTiyvQ4uvbw2Yg6xbSkbrPNc29cn5BN",
  "key38": "2ih5FGpGXydg9JyXFVfM8BC94QCQUvmaGrvZQkuy49rn8GedPRtZoPGu9dcxfqxktgWAb6PTnqGbrqcCdWsNU5MC",
  "key39": "3QtNhQGHbSYquWVrPyWHiZzDEFK6WCAK1kYW8LWfErHZFGhse6xTwkFb7o8Bjx2QUC3hk887WUfWtAKujeYcJu4F",
  "key40": "4nQTUMgUsvr65Y4Ef9EEcGLhra7WMMuV1QkTikm4xtVyPPVBdpdH2qPWibY6ebTR48zgo9M9c2NS5phvjMsnZSud",
  "key41": "5QyfkhzsbG7DZnJNTNB2EYGN4HynVATDp9odXUZJuqBrLzyNKzR1TVebPTAPXdcpe7UHVUxmH6PAU38Fw5NttQwf",
  "key42": "46Ka5rLGMTSzyg6LWN8WhQrLVmE6v964ATGiGKXRUA9rm4AhzuTWQ9j7ZGJDg3roQXW2fgQLdc8L4Jq82N3XoXSY",
  "key43": "vXhDAKyou1xzU28WhEJbTQNy8ZFwWwuxXht71gqMoJYnofR2yERoAPFMubcsg5LW6x6z8Nc6MqyCtkVv5wQ99Sc"
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
