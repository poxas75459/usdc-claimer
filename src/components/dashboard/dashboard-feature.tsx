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
    "5qrAvFjtQySgDxzsm2ByLWVTfE84L9zGQZGAs2mEKmdYabu915gWcFqFZCoZxMYC2vH4qTRzDDVFUzf2yNfP23mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MeZ9CDGhYvJkEHFTTUFPzjrookLVNdtZpkR38j6k4zwPDoL9mbbdHe7n9Xbp5VJYseU7o2L2TJAzwVS8TenUMpy",
  "key1": "5rUdgisGGqu8jEh9dWchDNH8BcvUKSemNyrUzneXh4J4V2QHAZRcr8Xk2JCWwp2fbFRnbdrgZFTpNEikWXbDCJw1",
  "key2": "W78cMzH3Zzi5mG18TdCEdeTTZMuqiUQo8uFVXDrz1fdvJ8zRVa4fX6c8STB6jAjurQG2YFkFDSH3z2vt2H1qZUW",
  "key3": "4GzgWwkwNnNhYRMK9EsPmwEm1WR3gubudzmgH6A4fqxUCzMF16pHVUFzcXRB36gB9Ed7No8QcrDBFZiYXB2rz3oi",
  "key4": "3dxhsYzFhVFgsLNnE7GJp2kkfEcQANTJEbidDHax2BbLFEAYgrhu6uSs7va2udnKTFn9L8bdjhPEg6fxVaPedGM2",
  "key5": "5KNTGi2zUWM6H1wdxKgDfjmNznTm7aQKSX6rPQfx2ZxdNeW1q7zozsYHfvWBN5w3J3hNsoUdpwCoWcjRw3HQ3NWU",
  "key6": "3cf3EuWoEWc4tqxC2k59c158HHB2JcKDZG1tzGSaDYjew7p7Ai2yaoHTwTXxtnwgpps5CpFopBjaNiew5y31YJGM",
  "key7": "26nNGY1Qjwm8kUnP6tpdoS4u6nBp5fZySNra4PZRFQihKGcTT1TVbuDwR9efYbrXPPPpfQFopSoqLV9Pz1N1MmTX",
  "key8": "52Dy8EU5q55T59c2e7uNwNz6KwJNvWrLV5XiuFkaCyyEBq6uJja7LoFmVWeyCnvL6ekoERKqDfo7RjPktVqqncMU",
  "key9": "bAEgc15zoD8qYfyzZ2dJ1t63uqkMtqneTgQzeokt4XzPPSe9JeFQtesYNNpRe9CAiGHAv48ApzUvacQA5fsbZR1",
  "key10": "4setYb8iVwqK8PoKEwCXsE7mskgPcxmjMbMeyYhNUcrnU24h3B9tJFSQtobJBdRQHXHBrurV4cfxssA5ZzE8tzFc",
  "key11": "zuDLqgTYHRAFq23czXcoA2tUrfw7gLmzs5b22S2kKpstVdjfZ6xDWh2LUammHcKgPXZZJzhQBL1A3EZcR7PSfNM",
  "key12": "2PHuViX2z1rUqYf4LLy4qU7CjEhRs64tUjFMWJFxHnsNGwJ3X5Dfnx5JFC8aCxgzijjcA9WmcZrc8oa9gBv7CHvW",
  "key13": "2rKU7sv4YhsA6Hv3QixF4JxmXfPfCAHNp1RQnGXe5Huyy95ZLYnLRa9VkKh5NqDCXfP7MvgibGutVwd1sahtrNE2",
  "key14": "5RogLXUua5NsVLnV1sT93r4puVD9duuafMXq7LAE9zJvgPmGX97doMdQYCUfy5BnzmvaEHi8mH9WiftoyQSUe7sP",
  "key15": "2jzvBV38nNmKovZaA9gZQzCfaTuALD9i91TsNgT7jLdhoeQDLoXbebWshU6yg8rnytF1EaEbYUZY351XKhV2N8FZ",
  "key16": "48316mMQA9GvvGyBn4rXzZNTN1bZ8gpfjnFc8aFkg8jYU7GcBamJsvXTTBb7Ujs2u7Xnw8dEZ15pHuDGVzExkeBg",
  "key17": "495yi4fdT3FsHbwWeDm12saBXsXbRjjEnzxD2vHGQ24tnzKw9f3aeHc4jyqNyiA9ph958LD7qVAPGfZFKQNTjZrG",
  "key18": "2PvBX98HaMTQdgj5hYMRGvgBjTsHiV6EgZjTAdDGux976ram8F4Uj4Gw2YWdYkEYpX4q9zyE4PSzpW3Jvdw4u51W",
  "key19": "4WvUKaki4VYZHkaKrrCmUBJYhwvSJfQ8Dfo6c8AD913cnCtwNzmuVrQdHjSugJ9hPG9fMMmMZppid7AsenVzX6bP",
  "key20": "2fepHqP9xVfwVyNJXanX1FagsyWpnxrm1FCb7SCwUmPeGoMkPmWy5pRrAyqhVZtw4CCx9FwCqtb1wQS9dUHYCnRR",
  "key21": "4TqJwvfgRLgjYnd2jmks5zS8SQGWCVrkVAG8DA6dPDR62XsaUxpg1ijFp8zsAea1iUeatxCvNrchmbRQ3HRUxvg6",
  "key22": "2gidVyaFDs217puY9N67icA3sTgNWgZD69fokVAZEeFmUEWDqbchi5tw1esrmUW5xB3K1W3G2d8vFaJXW1h7jzdB",
  "key23": "2K89znGpJukU6xKmz9G2vBMnQzmSLgLP8pZFWWEWE5H55xdpfbsCiBAgshKpvao8vuAZQnuUdXrDTYt1wxnfBg7S",
  "key24": "4QsGWx1y2FmfuW9qni3k6qQ4RiVJN884VJYVgL7wht5j2rfFcRq3kru5e4knKveK7FxDkCRPncPHjrMTR7HEs9pe",
  "key25": "26SgUu5ajS4RNtB9f3jJY5ZFs5VJ5HF9TKF3oj1ssSoaG91H1MkwDrLp7UvN6TgWrktwo5Dyauj25rjVecTZK7RE",
  "key26": "4jf9TJWUYdw8FDnv23LRf3Ae43PpQS4eQjtP5hFr6SdtZCMKGqb1nkP4ef7gbYiTUbGfz8Um2nBQ4BDFSs9EuqQ1",
  "key27": "43acboUw8UjgFzPZhucBYnKonitLYyAA1u6XvKqLtjV1Q6sPgGBAg9AvZtCm5snX3zoQrKbQZj41mzLw1MXCvmDE",
  "key28": "2HKkmGux6mtg3P53obUJAX9yNRxpyUzaBRnQPrpFiqjuX2RZmQiJ1sgVeLk2RX74jbBnB6jEdZtohhi3pgPZ9FGk",
  "key29": "4dQAczi1YPSmsNa1hyDp3hsW4qLFHtivq6Mv5DGEJX7AMivbRgpMi4McjdRKac9w72myA6cwkyx2YSW6pfo8fA5n",
  "key30": "3XjhH5zoSXzWDEBmT6eXYamSkybbLNDJoEfjSKcj49Xs6pXwzK7cVjcrkUfY26qnVKZiAHFDzhSHy8Fkmya6aqiv",
  "key31": "2FZMGshCbzafMshZrbWyjH5DhXgKsWvW3ocpWKi7jaGscT7riDeA6fNxvTXST3B8Sv7yi9TeUyB1mc6Kf1R9FCpL",
  "key32": "rcLaL2d9ctJYuNScKErBnqkTVriTnFzqHacgxypkvJfY9fgz5nu7hWTesiYKMiwvCq7QJAXGAZ3frUM4vS5hzFd",
  "key33": "5PkSCrWYeFWKZTnSo9k2GDPZ8oJxS41AyGeoNdRTvTKB4mbUn8kgTx4ik61x4WaL2gSBNrLWtpJsPkBwTT2KgTBn",
  "key34": "4FLbkYNRjQh3xyCBDnAfcZhiSMFUpCDKpLk9WJeG1vCKsCKEVAso2pqmRZL5CApBGv3zTQ7HwMPuFxEbnq9B5xGc",
  "key35": "35X8Sb2ycBuNajZc4LWvRNSg4diNPJD78QznaHp1ekw9M1X23natjLTRGEx1tzsHrzV8UCDKAHVwXwJdCGLVxSbX",
  "key36": "66cYDSA3vP5TWxsWhEBWLZtXWY6s64EiLp1QgrdYVCM2QPao6qe8T82dUZ8ZnoF5htjnabs4Z7DfBBSNs4dSZhqk",
  "key37": "4dttTz4Dwcmabr2ocEepaKMy5Gwz5rULbxFW8jpo1xHYP7T1KM78BgCG7v6duB3yWaYTdELAyxzKBkBxv5GjKEx8",
  "key38": "2TMjN4psNK2NGE7ojXSexLSV94AQzXW3K8m9RVwZxhu7zn887veVVoMehxZFVCZxK7pL8r3nGZcUygHMimHpaK1P"
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
