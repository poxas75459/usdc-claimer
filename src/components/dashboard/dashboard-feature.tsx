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
    "y8JUm8Qqx12tFRG3Mc6ebutJYABR1TdQ3eQaybCGHPysYUbeHQcr1xNWhQUZWpPo1i5Mg6egaUzcVAu8ChcStKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eSwAheW85JbJLjg189YstPMMLpLyAgonkfob34Q6kiPTTkGMjyxKQ2DK9p1GEdNAcRcfKtu1EtQ2ErTZGiFjEKG",
  "key1": "5GaQQfSuunR2hbLa7H12VMN735PF7qHTC6uV79QqUsMLyJeUB1LkWgeeiCJy6VqX5ssLZen1sqJJLSc8cU6g7kRZ",
  "key2": "2HKt9795ANEarEdHrAgjRPoSr9XKKRDDZYP6oN5PG7ouX6eFYKC31DnBp8ykmhnmSXDZZVretyanxB1i631rTuKK",
  "key3": "ev8Az9mHBdUKw1G7DLw276fM1Db8fcRnfgcxi2UHtXGKf9wE24MEppizch6ZuAcgLhdQ6gfZ8Z8Spu2ob3jNQsW",
  "key4": "3jhzaq2X7C2TdEguBi9LJH2bReJbd2kXEWBHX94oW343q2XytZYqoJSv5zVR72fFRikPGYpaaGm49XCmw2tnwBd",
  "key5": "5ZwUSTC6xipnmsuMEYa5jZuDWUCGaLWQqWbaUrhSh4HsK5H1ELtfDTpMFeZo9NHCwmyysuCBCfW7LeFXkFnL7Gix",
  "key6": "263oPnUUtYs4Cx1KR1q4uNmUc8pCXbhCTKub876t2i98j9JtcTTqGx696ftqmHK1Phy8W5abccNDEN9qLgW4KK3r",
  "key7": "2ed2zfhGeqkBDBq1ZwwNPSpYggQtTgtx9sbbd2w3kYThLfaXmDEcZBvwk5jsSvbk5cyb4DR6dZSXWRkD8mY5eLSt",
  "key8": "4S7Eo4LUu3CmECRcYGMzEsz4omdU6tszzQ4M2LtM3123tJwXJwfyQUKqW62a2EaSjJYS4uzk35LBAcmKQZx3csN",
  "key9": "eXF9mmAPV2mKCuQRfA4rY7tGjie8A9rbVWYRujJNUF6naJcTjFcwq3b63gYXyKSgP5P7y4dFUAQMuJxV6b2VXL9",
  "key10": "2oJbTfkS5PrFG87JNXEjDUjtymEF4mBysN6KpGEp9vkvLmnX6zqpAGkGz7XNwyGeGfd8zihWL8j2KZwiyEbeHSGr",
  "key11": "3stisKBqTHjm6WBfRB8VngpPQbd9Ls3Ca1mHkQ3Go6gXLTAfyJQSZHp21q8dBznaf2ecXhQ1RhjxUnzVBhsu9TTM",
  "key12": "4qAJDXKjsy2fGy4VX841rKMCrUTMnG4ntiiLy2AzgA1RDPEkw7UBpEGpqeCWQ1wjo5gvCyXEBLJRjxavJzxzGZzL",
  "key13": "5p5zvirbE1tbXV51zpFmVo2ucNUiQJxcVVdFfuTstYLgmrmpqq7mukAg8oGHpyVKP8MU3ymjawsdGjUaDhfN59NY",
  "key14": "5NW9YvnRoweaga9g76NhrUm4Bim5jnQbudPtwx9B3ptA5r8cyGPnTvMe192N1okHNkwFycL1UL7UqzE3avx6maog",
  "key15": "3Yf3pX74WVz6pmsv8mDteAmCgYkEgWUuphQ7bviSe7wEiCpRiuUHxbVPvbndGu8sxfSdyyir3NRZXbXU3AVdEy64",
  "key16": "3ZFRUz5Zznv91vraVP6nahgMcJYG5gcRew4GEaWtW67vqBM8UagR7UdwqxUzYDVpCVifn9eWwGiD7ZWaxxSaRozH",
  "key17": "584DYPyUo2ZyZyfzVHpa83nhtrYdS1TA3SyxqfjLGnBut97ismZUhsy2wXMe6xuKWhULGokJXovhZegCQeMthkDr",
  "key18": "r1xLPQbMyqb6JkDTQJoQ4Qq4MiHo4CXpHCZ5phN3DSJ35zpKtjr2Sd8Z1WNkWSzGykSoyH6ExBbULNrhTxEdmkr",
  "key19": "3GGfhabs88txQmPNNekJoV8GGVFzkh5tN31vBFwHoDE6c5FxXzLbe76h2HZgB72DebBYb4iqBTNfZpLBe8sAXFjN",
  "key20": "ts39SnHytwwG88MSxYQuNm9nU4NbYNLmekAvVkHVBjdxS4uEP6cxbahLfLYB9zsxCVTWzMbtJc3UkujBduxWU5E",
  "key21": "2eKPFsSBghKXSSBAb67pirJZ5sf6LPPE3SkramgnxgjtYMjfSUAUx7biys4LgUuWaCAAV8WzcqKs4NGCvgJ6CqgH",
  "key22": "3ZvKKYdmZsqht6EuE924aYxiSCst5CyYtm1gxTg3d6TWaT2G7zdcNZBCiW9pf6jjhi1D2D62arW2U9rSjEHffigx",
  "key23": "2vkozL2nLhQH3VpHkXxySmz7u2R3rnsaaAWy8hdtJKNazRF7VRhN3CdE4P9iLckM9bmr4hdULVLkEPeAnwaq2mu6",
  "key24": "2tH7CWkb7XSxtQTLHTrEPKyMwUCcffgugtLJs7Fsbua5NYBtFg8DroRG7GZapj1xX6qK6112cpqnWiJDDgqua7on",
  "key25": "GvaUHW9DQsyyoFnKPYF3zqrfFG3PwZxSdvHtAeN4YL5F84BD2gEfBw5mtVME4NuDwuZ7mmx3jEBekTD9cUF7v2o",
  "key26": "6yz85tvHiikA181aNzyW7BoqV1vg6DwgkP7zzNBXYuCwSmttKjdRc1PmGNo6wppxPXgC9j2Uv5wXwUm1qBFB987",
  "key27": "3dWasuVSseeqsHqTSY5FDPNAjkzbHmQE8DDF3HszAf9688uV9haStoVFZYdmp61obAwbtg51SyGCPbbbMMAe1KjS",
  "key28": "3LjDuZdFg2i7qkzqPt74BZeWi4wr6QM1Hf8J2o544w8NLryK6SJ1FR1dKP5fpDSo8WTZ61zZDk7Xtycrx3AHdHhY",
  "key29": "CS83cQCr4MJHdANeGh7WqyuQDrRx6fnFuK9E1ZAEyk9Zp2Y7WztnT1c2bqyHmYjGrCKULiuYMWTNK6vWaKJyjoE",
  "key30": "3rtpRVHJaRiKxUEpzumY3PcQRG5237c8TdwrspUMzKxghpLXgaQ8v1keT6QmvxrQWr3JQmVNtG4deGsQEcV27K9P",
  "key31": "2FcZ6ZhuUcAxXSgLVk4PZqYm1Ro1rdJvBXreUi94aQqsmwNgc8AUP8yrWjqi7neyEXAPh9Qe3UCc6sNkNBv5dUNJ",
  "key32": "tqHMTGQD5F9BvTYix1wukfnd3iJe3kVSYQmX6eNjVcVguR4D4EWf2ZZwyXHYr9y2uzv8nN7fDSi9axTr86FcpcZ",
  "key33": "HW1myJqzAupuqVD9mtGMznfeNzZGnXnbSExfxFVVMbfDSsmchLFicbXhXoA3o8SyEB1CtvCanr6gbrnYa18uwy8",
  "key34": "4aFSUR7tLZvHjvhprWxgZkGuQG4aM56c9hYKcdBZ8ovCC8FcYdvYuXGJga4vR2DLTt8CjH5riujY97HoNnBCBnnh",
  "key35": "2FJK5ign75Gj6YBvhJKd2QptKxQt1gEzFBs39yHUS793MhMvUopQADa86ePh5wqPFZfJyiPEWK8AZKZkFwGNPACm",
  "key36": "31a4Y37HtbAxd9MrDF11HhvxZNbpEN2MoohgtXGcLoxy5MVRA8Ais9fGpaMFoodqzwY76aeGp9uNHnThn9Vac19Y",
  "key37": "5xRandmNQKQgDmMrvpN9ysY4K3qMW7yfYm6CBJDwzHv44AebJTVEWDgD67UwNzm9MoXyaKKffEgjCF6jCts89tv8",
  "key38": "3P4WrtUoBwMYmrhq688SksTEXZAWZMsKg7ncxJHtScms3dFqo2S9oVWBXwrXQ2ysbCMuFqU8PtFer1FRuQKYSuuS",
  "key39": "3Rn7uzTe95HJU2xXDgw2dja8t49Ld3uxeryYUAY43aP3mvYSazG5wZNZN7aJ9SjiojMaVGCe7SJFL3tAzMsgmV1d",
  "key40": "38EpcPCCb49KY2GVGbJmJFMHb4xwitxhiboQH6SNmkQ5xCPEGbRo5DZxEi3keBsmrHmYd6YGyyJpMsYPX1QtkR8T",
  "key41": "5kxpPoDLtwGiDxqYtfqSbvxDWZMJjAK9AZdygeBejR6DNHV2D3FrA2JaDNQGyv7cM4EQHXVVCeBgmvSGjkkeKQu1",
  "key42": "5oKoHNDFKKdozsNFys4gTseGYqRs7V7BUgxeX6e3PJyooEBnRYcDiUYbtcKJXQuFLqizvUmLhTjAgzMoAiVC5Bgy",
  "key43": "2tTx8r6D3MoYwdGJysiUHvP1g4wjjCptVxmbKDwfjQYDu2dUeMfqLhXVHSCqpp64q5EqAsNb5YWaZqtXjwYe7KN"
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
