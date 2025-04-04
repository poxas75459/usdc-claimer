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
    "37bQQfAZd2ARDa4iEkFRKguctbLE4ziGg1jSC7FPp31yyH5A2qp9XSUCFCgze6vjdxQLi7TFoyCkHgns7y2Wrc6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39QcLc8NNdHSoBACVfWSU5jBpGS3ubUyc3ouh4dFAEoQYG7TcsvLoAegdeta5VoSwtgb263doEqifASJxADtcKHc",
  "key1": "4MSj8V1bdwPGyX459smfuZTNc13qXiRJKdQmG6QGT562NbMmSR3UUe3udbozYCvtYAbtMBFgGdzV3R6yf1CvrBsq",
  "key2": "5zQKehqinub1vUs7xskmKFosLHjWmiyLgnUHgX14gpNQWzrsQsagAvn4EPwkYKqMkL1YmkUeZq2Tp36pmd3DsorB",
  "key3": "4xviSJtJyzFXxxSoZiVvTf7DhRfVsqzJc7j8Y4giDFx53BspXvKHfufuupBR8FbnyiVTSJGLbnmkJu1aygvDw26i",
  "key4": "22vCVvdkE2Zif7XLK9meyrQ8z5MV3JXBbKQNFveM1X8YvkjFP9MycYUaJ15Pj8KbWJ352n42dwkzkwTVfQXU2kQk",
  "key5": "Bt2GzAGbgeoveDLPnaiLFNcdb9VvBgSW7YQ4fZQmErBTuQ1vEdBcBnkn6356eQX1jReEsJvydaE5zvWExeiVknn",
  "key6": "JMPcuQUCGShxH6ooE5cVCPvVSEKrKo1DA3xPW9B7NPjYTL4JdWgKt2FJdooSKwytURXZMcN2c9QPt1cHNqiBFqf",
  "key7": "2VV62Z6TsET9n75RV1Q3Ae8RZtRygTwPp4gkNrfCptJgLzA8heKvDjsymkJdHsChUZEqvJRXVoZqMuCwoabfUptf",
  "key8": "2BqM4tifDyrxCyEZVKSZmgpM24gijALSZoB7XntoNeuC8MQuK3oJmTJV8DFzn841779ciBeU6bCSwKgkv1JbbHLi",
  "key9": "3oEXhYMzJk7xJ2sawfHd19qanNYvzYNPDfpQzQE7ExtaxRP8vr7vzvkQRU7fBXH7WrP96pBvDT5DHk78pvMmEecF",
  "key10": "4HGSYowPBPWwxPoKGy5Vp4RPJL5FHnCdQV2ijcR2AUyhdvcaznMbd4SPg6Q695kqffWbsDTWFBBDn559YDC8FWdC",
  "key11": "3SmC8qDXnouZwPwAodmJkg781HSTkn9Zi2YN6spTKGejsUD79wFFmndoGG5BqGHQXF4B6uGRxSFfBhcc33bJcB2d",
  "key12": "5vWLMT5Vy4xJM5V8cywGBqaP1PooMdxVnopjEaXefMVe5rx1k82gaXEwFGVqZgjneuo1TtnHU5xtJTnHpfwU3RjA",
  "key13": "5UMFCWKMe5JvR2GS2mZQyaQJNxkcSD6gcFeVisjkRv5FbEEk4TBhnK1RpbK17F4FmtB19UvtJ147sYLjmxbf5KSD",
  "key14": "X6r6gL4qPwBAMG9fBDmEbfUEad5rnGJMKqEsLx8zwehdwBxcfbyFfQA2sLrVDQ3VDLMcjZjGEVVsQS6BdTzUA9V",
  "key15": "59Y5NUM7aoLu1vwW4nM7XH5uYTUu98Gz53hLfx9oEcavHTdMrr3n4hrdEaSPY6jNYXMa6PkhpAfF8qwu3jzBqiSe",
  "key16": "48bfvk2doVsTBmfEWcGHjJPCeLgkk6KsFaGobbCPGkkmMNW4d5Mpi4gzsF1N7nNhbvP9YGwi9eh9SCHUUc9jwFa4",
  "key17": "4TwDJ1L9p84H1ZwZqt2HhZi51W3Dibvs2xeSEP2G3qEj5ifudVokGiKxyhzH3rFdUWdX7ZtjzMFuizjtpwxAiwHF",
  "key18": "4hd2ix44rfg5Kr5RXWSj37o7BWttuBCyjHGoErCdjBRVLSNdtkkYgHVRATcnFZyqeDPKXFTRruhdFK8gmseT2NQ5",
  "key19": "4Mo5S9bQRfuNB5bwAtaUK5eDze3ANiHhrov2Fc96fJh6kyYv8eBzMgNWrassqERjDdG9LAeE7LomTuJQNpkLLhwb",
  "key20": "3xuConT7jtkdZoy4ms7dzKX5grmpcoYK3ktdajoTYVqEsbjnixDRpzX5pnNXWQYfZG1BKt8JVzcHB5T9VWhg432F",
  "key21": "F9TS4cJGFS6p9ztd3C7mkzx46vNNqYxdT12p9cKPCWjJF5QxiLpHJWa3nWc1Fi1hVuYCDVH4h4eYh6B56gTJH45",
  "key22": "4p2rMXgWaEEDxSLoRvCQ1Y7S3bfiGaa3GAYcpGdj1LDBNVSt2bND9zVH3STa45UBaFg6sQbD8M6jEV7RPAqpAgju",
  "key23": "2VD9evkxdqr3ntczEsY58tAJR9yz5RGjPDj5dFPK3VWC8ASMW4qMHx9Jv6sGiyALuzM834Q98ZEi4kpqj3J2T2PB",
  "key24": "bFoMzSMbWkQz2JZp4osZwVhKZf5XGY7DcUaAj3DkXofMATgqiPYtk4uX8N2yN6uwSX4XqWdJPKqETLXuCxzENFH",
  "key25": "2hc6wBngYVEbK5RnL1ox8ApkCCnZSCxfLyRCqyAGoq2q95A9bHMBdvXgs4YSyKyXL5CkyUXKGEmZMtxCsRfcs9Gh",
  "key26": "3gENr5jS4ppzVAiioHYHz2xqT9W3S3AYSc1KMMcLNwYtqm5Dasid5vHuz1VXcNQUtvCikL1dRY7jv8meMJBhHicu",
  "key27": "5sUNjhNbkssP6SogFDBrPWXNvoSxVM47Rzeyg84jnr7m4gmTwAVb2FHy9e688MzM8q9wJNKnzUjLBZkQRhWzttiW",
  "key28": "3DiNuzPShKUo3vtupK6tjGEM72Bta33JyHu9Lyxy1aUgvjdyAikZWaFKYHERzS4cV5zxNu9fkrc9nA8F4fKHo872",
  "key29": "61EMWBXEANjdvJRpC7sDR1rUNLuSfmWZWuDNQgguCV5UV9fgZNx9ascppwLq5hzct7UfkQiM1r3ZVZAabTaSzHAM",
  "key30": "4qy52JFaB9itQsVRXzgkPVoS1cdq8xv6MjkyX2Up4mR77rTqJP6TDJPLovLDt1zzxR9mLvJwVaGrvnSvLdBXhdtV",
  "key31": "2RHFmEsbsSPfCzzsYrxrY6BLDKFNQFwKnrMkdEbrd6o7oJ8BBmqnHCkZ8kgTtNNTAydRJ5Ti4xNpQ6BX8ZCFVzYB",
  "key32": "mLQGoAC5u1Dzu3SCTeaXJabFULJw8yrTkrQqjwkwJTf6benQWbGxFucSoyDuC5Vm7mgDKS9zTWXFdwaC2mdR4ty",
  "key33": "2yW9YapohUETGvdertqV7dkY1p2y1F6YSXsbHKyhhtMtuLd3fiGGxD4cNremHTqSAKwgvWoNxPFcPfw5VP6r4ed7",
  "key34": "2fuMtreykE8VQMtDF1D4YQeZfRAWZY2Rp7p8GermXgXV94NbEvQE5eB2jDTFojT2QEUs2fsxFUVoLzH5E2DeLsBy",
  "key35": "5PLmNDkCtWFvya3zcpN3EfNWew65EtJDgTk3nJuNXR1YWv4E3HUyPdskHPsSrhcJcyV9CX6QkcgQRf5ZKHr4rEhx",
  "key36": "42wefPSuNFM4RsBNCvvbvawZmkTgvVzBiuUi8TLSWoMZ4qiAyYTEaj2b7DM4YRZu1YXBb2mATHazoQmu7TKKdFHH",
  "key37": "3djCBAEaTiGh1wD2LqSiQiQpoGkyb1s7djsaMhXZj1LdH738Uatu2yuJREswvGtEQQRTqmPiJTqjg8E238yzBupC",
  "key38": "3CccuKf74zx4FqT3HmWsV2kHoD92kvY4Nsec4F8MPiHgor4i7zhCZtSw2n5TvMNY9J9r4hbKP38WymvzsXi7dY4R",
  "key39": "22r4karzTHBEg9epd57Cs7H947TmvEfAG7XZhTw3kt1SdHD7KamazZmwFaEZxRfyoB3EtKTQSfESfmDGZhxBS6Xv",
  "key40": "XjJoQpyEnHMgdLPtV41AQpTpLe65299seiVqFAkq6LCehXvg9jTDG5UKXLaHDN4AcECqNw5m2kohkXaqEEY9UVe",
  "key41": "4QDhJCSQdMi2TzBZACFQBMvnJuaZ7xM293cDKYdHLguuCyMj1RAvY5aDfRmWTzQVJaiMt3oXDwy44CPD9QkZNUVN",
  "key42": "56WQHKyVF3nFXZiNiu3E6mfNpZXQaWhtLGCRsqDw6P6Nk3h7U1MDaT1vWnkBxsfFywEqJ3Z22Zt1KndKvEjKooxG",
  "key43": "2WKEATs18YUnErnjj5FGj9ACnSUD1Z37e1269DHXsWde8H61TK6kohCJEU6sL2BijzzVuKvf9rtBg2282uzCoj96",
  "key44": "2rdc9VgEseHjpUkwcUEq13VbMk9A4sFFsKFmhYLase4ntgyGWasgmLe8jKeVf834dmDuaRonAkGCeo2GASThDdbu",
  "key45": "3uAyjAj6gD6Y5PEfk3zyfcHzPxmKaPj3KwFUhuqhWjKokGdfWTV1hnbmaoG5uPTop5Gg5P7B9Rkr7i6ZnGt6Pt49"
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
