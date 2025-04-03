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
    "5FXvKDd8SSyChsNVQTN1wE6deWLwgERV1fZ3m9oJWpLqbks39ippRH7KKXGaiqb9SnwTHfUvP6aiMCHuA9iau4Tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24CzPXgJBzkiHRrE43rTUn83Juq3kPDY46XjEenWXeqWG5wD75tZPmRuLxPDBFtxTV6p1ttwsQxNmCHQHtKMrK8w",
  "key1": "4Y1cTVE2o3VKC5jpqYWHWKovbXwkcr4k67agPLpWLpkX5Kw48uUCca5VAatrw2PDRFhCEQx5Uj1wCDmLY6nx8Uac",
  "key2": "3JdifqcbWctG49AVx3aFme1eZCNfBYeWVYfy9BafYussVmCHk6f1L13ypyLzyMXpsv5C7J2ZzzWKMJAQGWiRoaKW",
  "key3": "5YzYFkMzeQzN5ppckaWDEmVK55XMiagz2VPsL3VtfRuX8HZvDxXqz5SE8wfjnrrAGRNjVQAs8JQqiNYVNEbfpT48",
  "key4": "2jyyygrKioTe2iQqxd7okuECqDrQdF9LK2yb8ooJN1iEFrajA1QSaUx3LkvJ7ghDxu4J2T8heZNfJLkg3t2h7WRN",
  "key5": "2m9DtfdP6oTtAB3zWikg5bubXJkGQTKYqCNe5D7ZDgsrXSgHzKbBWezNynajrE3cpRejgVaTDbaTvSfZQ5W65Hus",
  "key6": "3LMCMzVjQqNCiuNPaXZCMwagBQg2hrHrLbuputZEFjv3EGHhZ5rmB9vQ3bpHSLDAA3c6rzd97V1V3VCkFavBzFWH",
  "key7": "5AQWVxBe4XLcZqFggfUG38Tm94ETQ3SvL55XR1M1kbdj5NygoGvUhJWyEKSa8FGT1R9GS7gELukdii5aFLPxYDmB",
  "key8": "38tXc2usXhUkFCubJa3bJV7SkmJPn3cisUpsCN5NiptMgeTBRHMVjdsCkMwMEsJAFrsSMoZNWM4onEgXegUEBaqP",
  "key9": "48ZmdgvUmjX42X8tDCUZvqLYF7yPWjZg24icnoCMXBdtqk2JHdVimJEigPeNRHxfsoWkNEPw5j2TEU7fq4XmXcC7",
  "key10": "4dKJtLjRoB42V35cuttVREu1BQ4JtNyCxTDijazGjA2jgfG6cYV2xGo4AL1Un7G62er811BPVjNNotJpFK34zbgC",
  "key11": "S78ZLf7ogiFgj5TyZFxTUqEd4MFQG6G645vJ2TbhupSQN4sSUESKtbhD5n7gpYzrLg47jDhQBArZji46Ug1rXqS",
  "key12": "5acyMpDSbYsgaHWBbLsDjdjEHkRMuW826rrCBF5U8Ysu9ZjtsiNncLo5Sn38Kjm4wuChxT4dRQrt1fSCA2uNxoam",
  "key13": "27c5mLWMKW1eWggJwaorjY2oque3Ju6BjJv3cWVi4MnxfYG7fvyiYH3sNDMDD4CPexZNRDepf8ZtyJKFpTf9m6Zf",
  "key14": "Vj8ptx5qeRkfn3pXec9aFp17FDwbWkaz6LNtZMpKTMSryxAaKX77DfNsDGzFoBxFzrUKFaguWoGeBUZp59Bw6kv",
  "key15": "5WbZcYdp7HnWFgzN9VNZjL8xFhb68f6ip2xFLXi6g9n4xGyU8gd9qQ7oKkgVX5HWJNG8pAz6DaPa9hnF1dMLeQya",
  "key16": "45RhYpuDZ2eyjGSEnAKvRqqPARy4Y9VgY9DCQqNL3Pt8u6uf81whfCjGvnf6RwRmxuJcueJyDXG1N1uxphUbnyAs",
  "key17": "aVaffhioCPd7CqJV1dqxDY66RNB1h5Gm7hfo3THdfETGq314h5Awdd4Ac7VsrWmsy2KdR4EJfeG92aKf5e5AuTd",
  "key18": "Rs3ToANLpm78JkMvMcC7tTAdNBSvqqro1kQm55FKhsVcvt5ccZAStNwprkb9gWveGMUheVWTF1dgXWVFiydv5iF",
  "key19": "2uBRs9fA6kjp6wivK7MLMgz8fzz5nF2DKVNrFSXpoUqzvMCNoN34fLQ5yWAxeF8Mz9k4vJzMuRETjPhCULLDZQGj",
  "key20": "4Ka7DCdWLYLU4HmTMu8sMggxLwj8SvBHXgcQzaGkdTwx3stRZ2QrPJArR2mqL3pqXDqpFyHSLsLEcYoyzniRoLox",
  "key21": "4Yqb6iViUhs7wg2Zcvkok8dWRGiwzJJUzS8zxopZjSrQgqcc9Z938PTrs9DQAi1ahKvzhKYUfBZD4mX6htHsiobz",
  "key22": "4d5uRJGpL8RwL4HvmRmQf2BdtGAsFVbSU5MH6mpEHM78yhycaxf4Avih8JddhTXuXiUooQJ2yinpZjqVzkBoque3",
  "key23": "4NVmJ8f5c1isKa6m1UmC3UAS7b7AGdcEDR2LZuEBEJ2WhVJAsNEF5kFwcJ3bLb2TSAh92peh2K1dkw7B15Y9KhNF",
  "key24": "336aCyY5Zx6b9U8niULhUYjYk1LCW6EtBsxKjGq7RbRjhtqa4FG9H8h9Qc5Vm1nVaxzk5tuxfCJKAan2p9eFFKZF",
  "key25": "2iusPba54bbSDLNAxjCCLXNcxwWzvUKiPxNvqh1vSDfd89jXFtAVA73rFySraAdEGtfTHjDS58jNnkrJW8MEwYpc",
  "key26": "4CyduTXBWX2zyGYgDaysnsDzvYZuQ1ggCkvsxyweM7h1RfdTUTU6qTenF2TGQPYyvZ3d6g5y7pximHJHb2queMwx",
  "key27": "4ni3JTRns1uoqPUSbw4Qv1k9n9Hr6LssLh5r5H9598WgVJgdSS1NXNk8ovT9gZi8bSFhWuJHAPWkCM5yDBH6WYm9",
  "key28": "47WifFYfKkwWi3xwjd9xt8X2uPZ5uqSNY7G5Cw9eb54Tsa4RcP7Qr1sTXCkFp8Ro8C3PTwL35wVukDXvHpGNh6RX",
  "key29": "5CvEVa3rD2ks7pk8FUA23XkMUSRRBHms4RiC52GsQYTGpx5faApUyjNXZ3a2kYyLVfyWEGwjWvAqyocEbcr6JbJx",
  "key30": "3UnjsGcKW5eB8E8KY9FEpybT7M8DiQtUmxNbAQB5hGChBTq4y7WCxSgQZHRYg85sdxoGfpUJ5enToFSTpWcaJauS",
  "key31": "57VWR43QvPEpZf74UXhiG4rA16aPiSs2iPqWLtsdExsALJ91Aoe4wGMadi7DFsWNNXDw5Gd5xRmYSg3pp4qeCqjy",
  "key32": "3FNUrgNtcpizJ2ywQiMzrYso1QnF683VPz8dLCwAamS3qursKNpg3WQZTHd42AT6d46sMmYDinEwbZ9BvGUwu6dr",
  "key33": "QmqD8cBm6XSC3b1Pu78qxb8Q5XqFVdZTcjPL7iEAE7PRJRNoE4bHzSHwvQ6dSsWWXXtsJRo2cqg6iqN7iwo8wxv",
  "key34": "3McUsHRrD4VTYNR5LeyZWv2E7pZcHDZpH7goeEcTLrkQZANzHx4YSvJBKEwhPKgjSR724ZG9JzUP6NWjArzTXc1J",
  "key35": "qYU4XU5AEmy77ff24RJVVKzKF9mrGpvXDjMR6DFaupoAcqad3nbLjmMMT88L6rRCWmhBWBFNnyppZbDKKQDNeN4",
  "key36": "5m3BgBvN33AfKmFK6zZ7JWizgdXWepgDNufPtrdyKhMpSExK6P2Ci7Xb4EHmBLdUXrvFjeUfCdqNCquqvyCuaeWh",
  "key37": "3xx3K87AmeDoNMLpJS4244Tyo5rWmPWFFSNhziUb84xP32u94BeCamNrQP58tLKQsdufXF5b4j8GXsRc6K2ms5gK",
  "key38": "2Uzui2xqC6V1PVS9t4iYriQhyrax7YUYi8Dh2JAFRBVafLJVQGQHJNpiEVHdMhLbif9Ykkn8AWaZhqaqZkFqdKtv",
  "key39": "4DLQn4qvrT2mPhCg8jpqXbcwJEp5A36aA1H1wzH1WdhirqYUyELkDeitfK3MtnopPYLXZDFUxDx9nByomfgoFBuX",
  "key40": "2cC9eiQDuRHxq3QtX9HNcs4C5fVYUYxKMvJudhvjJysa57uVrAvJ7Munj4JQ9sk6ttWBpoH33mZMydSMeBTUHufn",
  "key41": "23Gv7BAPh2SimYJu6txmdLUGspoNNf1EHz8CJATpXJ4Sug2taBaFfczztDiCQsN2yUwpspRF2DXVd88YnNVfFSSv",
  "key42": "54u1CLNqsjRWcDTPXvWmKeEvFva6UvFrHVdN67rzBnF95X4fXe6WTCnBTznZd1B1eiKiaDuTxR6fun9SRei8qmbJ",
  "key43": "2N111RpxN45B24grxFq9Drsu4tNi8Tw3Ab9UJRWPLuqLu31MyPF8VNMsoa1qhPZEP2J8hCGGGLm1o6v1wKMj8d5A"
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
