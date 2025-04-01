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
    "4BhZF74uX19JpQuK9Wy5KN7GUQtrC2yYHU4bjKqFCAhLfjqc3LyYr64JMp7Bx5LMGzDn4dXh9neBczZu3ekMPsMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2McZrXiyoMHTVdc6PQsPH4KSDXED8wcWNWsyvfRz8ZmsszuBiJFTfbk1CQFg7o6Fi3zPcWLEoT2opSv9ZYcNYCdR",
  "key1": "4ET78uYYqb8zZxn6QeqYXoJhNZUd8GMv6GcVmeWk1mayhJLZSQRyRF79eRhyFQpgccypR2eZjcACLVM9sdrDbMS1",
  "key2": "3vwNmUGz4Rhc8umXYXBNNd7EPpjWVPSk1TNji55Qq68cBz94twsftCcmNqidEizQe71nyxNYZ5qakkZfd6BYH8fi",
  "key3": "2mzXbr5eWzEBKNQ1kMQz7hezVNmUKnzxCGd6tredpDdNpXS3kftdVqzcYRfDT9iktRuEwNZz7EXmB9s7CR4dCU9V",
  "key4": "4J95t3wMWavGG3jGSHCb3yuJNPRJ3itxZRfu7sF657hAzfXKXVnDiGkzjofGutrSB4Q2SC7MuVjf1H947mC6omGD",
  "key5": "4mNMbjwCMiFHub8G9U24oDQHT4qgUxjYjmLtb43RvpWhb7ZfTGzFWHY5C9ErsrEJe5H4PXdGrwGGAkEsNw3aLAR9",
  "key6": "4kEP47yCpRR7PAyxPwiA1M5YhMGVLFgFmjcZWXkMKrnvJiHBJ93aSfn83LrWAqpLeDk8ibJh5svUTMBQJRF1rF5C",
  "key7": "3hJv3Mtnjh3vhrP7Q2kcGfUHVuhzCTznnjDseu9cQjchQLT8UJQNoRmE8TqQH8oRHSKs3x8F3ehckA8oT4ENc8gy",
  "key8": "A2ziCoR5iBbnKxmzNK8zy7DJZJ9VgUMQ6vemQE7S9TZBEJpVSpDww2r7mhFe4tZC46JzPy53ofvfFqWtnhHho7E",
  "key9": "57LHvYRugWwvVZmjNoaHs7svG3diUGzECFWkP7vJpgTW2ExBHQL9wdF2mGCRKs56ETqunj7ANgG6CSURahPEmAqB",
  "key10": "4PfdyfHVVrsu1H4yprvsseuKBFWBQrAt69pJCtBm25RJ1NjbrKLKZw2nU5V7YU88nuEhUo2LxLXrNoa7GNek7Thm",
  "key11": "344dQ5siWwNFpviNjhGFGcHENdhsPp1HQuTKMp1NGjRR1UdzqvVto97aoq38W9LpjFBH3Y7MWPgHHTKEbp69Gzhq",
  "key12": "2Lqa83NucUtHHvCdFBStpQEhmbAk9VEQdY43oJPt8b5FWJrgVUTsyc9PBKjWs2TYTj9BF8JPfjoszqCUtxhDYwZ9",
  "key13": "2L7EZ6nf1QRGvypWLfngZr6mCjFVGkMemUz9RS723t37JnWvZeWoH2qQ1zSmsopeuKHkrGEokxNmkhgxLEn4wjJJ",
  "key14": "5zjqLbaqqe8CvCrkmsbM3RvL4NDTqGMVBbJM2FVmhxXR9fSrTqRVKuaxW7oQoKpRjiCGpq9WJteiYqup9jTq8eqv",
  "key15": "5jQDFYy74TsM172Xb7NPQbufJnv9Xv96ywkpej6d4sptMGFr8MRExSAnafMgaYmbQYKVywM5uzK5RvBXLimCaeKn",
  "key16": "3WPV5qWdkzym1yqM29U3nbQ7f7HKFEzn4emqzgp2ky5eCy7hTXZoiCcFDDAFA4XuLPkipPd1xCufLN9neDELCG3E",
  "key17": "2exdnt6hwVj7u8GodpJrFwxWiNA2tsxYvu4naFSEAAymQPHniweZ1vKE6hub22XtbLi3PPCgTdnSyaMv2VZYTdPP",
  "key18": "YFHD6mnMD7fNPMAZve2BfmRty5oE1jEsvxv8AyvMctwJARn71epRLFpbnRDvedWsfExyeixqeuhn3TWV7E2MRAJ",
  "key19": "dmJVytmrTBXfn8vb1vg7WtFwfmz8NHExkwJPXBQfbjTAL8rxGhz2937RP2ft1BrHgfqmS7zh4vG3JnJvm5VNdpp",
  "key20": "aTMq58BtqQqFDYe74DrFJYYc32jmX8duxfSQZYannFk22LYaHfChfnirtUn7NNLtw8eQJ5fekTtvwjzcPBNq5oa",
  "key21": "4ZHQQzNaMh4bypwFBK56j1MQkMxLWMbd4Rjz2q1aswYCtv4ZZpUZFDmPqdCsLQxygT27iVTV7sL4TjMuGLAYLBtk",
  "key22": "3qfa596XGaGNY7Rxzo2FMZhGKhDFv3BB7RDoRF6AN4ndKpmpsYmtEouQoBG2wymtVx84CTyYHMGAvp5myZodpLUi",
  "key23": "5MMkTDjHGBeE8vkfimdcPwJ8K4ToWm8bmYzXKLS8mUTBj7g1wyCdLYP7YrFFQuiF7FZk5sEFFWcMZwrnuHebzKH8",
  "key24": "2e7rfoyAAbbrnxU7nq3TgUVFtyKnSqusWSAJFiXBzX2kWwMgBeH4mP7p2tdmUxD6RE4yBQaAMaAq8NES6Yu4uUYy",
  "key25": "3NCjzACEZpDsrXGUzsGSYUZ5fYrFYnEVXp7xkBfK4XgjGuJqyfm5QYAtVaLCSA7ZvNPMDSqh7ZuxjcMAPQH1LsaR",
  "key26": "57jDi5fuAUA2fj5j9t8UPWgouRhTBzhSkqLB27UXhLoskqwoN2acBAAC4kmxNWNW2nqvyshV9admc71TdArvLzkA",
  "key27": "3wp8wwD3q7exJnvdXSKLCVYsJBg36SeSzKaCAcnWBgLTtkgb6Z8tiu9pm9kB87r2hz9hJRdYFLZkJCkRZQSWtkh1",
  "key28": "4Kowjr1tXYwpFb4Zipcdm1M9y5zAA7G1BvJcq2eYmn8BXRDojxCGuSZBXoScGVu7Bv7SULp1jmDuEeU44sNbcv1Q",
  "key29": "5mR98kPMezGyFbNX85bi44qASi7HD49iYUEAT8kupKvh4LFGZEJFzKTVkQLxMfyRAcbh2TVVeeo12jgDpbeJDeTc",
  "key30": "2mZtfpK9zZqsWmaPRxQaFooBhFDWxmz5x6dkP8vFNPBuK4cGjNu7nuDmqyJHrBdY8H1XuhPPkkQMatApLwuDVjtP",
  "key31": "2N32hveEXJG6fCqS7cswgqT2PanEtT1qjFtHpV8mjpVSnSocRcMUcMaRdpsWeQ5rMiTeiVMXYLfEATWjBEw2uNCM",
  "key32": "58muSjT2c9SXuyPNfAwd4sVBGiGwpvUivLssubBr7gS2tyMFVzXAXxPbgtBd8VXZz5a1QwRkKMsK25vJiNqnbATD",
  "key33": "iNVL7Av9QLKfw31FmVzWr13itV8HhRwJnckgZvV4o2hf5GvNo1g7AxTdBLzSvkRscj1jpJovKfx2QbEVbsRGrPs",
  "key34": "3KcseBbpz1RcXjXdkvx3sJmR5i7Fuq6iePJu3LipJvsRus1H1sM2TZmBpSjqxyrDaUUw6imgHF3Y6FhbRdFd6Ecq",
  "key35": "k67LN5abiWxFXF2eRCauPjhfWzvD5eW6eqiZQSHGiVRkNt67167F9ifjDhzC5kce9mH7Kurn3RF6fN7j7GembT6",
  "key36": "4xFcNwBb3qX1PJg17gzhjTKM3buAMTm52PeEj7RrnH8Dm1CYRT2CZfSyQyDDcn4Ww1tcm2Nc63FE3H93kybhTBPp",
  "key37": "5xiSTVaji8b4yyrVGrRK83cmjCf2Zpbm3GEwDhMPq9d46mpMVGM1EdVFPAGMZAqBfyEB2XqtYojaHJi8zuFXdeug",
  "key38": "uG4z1rWF8edGT16uF6MGXjYg8sQCYpC7qgchWesNSxz3uB2om4ZMaCmk2zVQM3ZUZfmHYfabHsXezZwvXPzpqok",
  "key39": "5KUXN28EUAPZzKFVqutBjwoFoYoauzuHHqfF4q1v9JFur8yDNonP3ikFVJ9novx2nV7imN9HugXNBCBD2hMdZgDt",
  "key40": "BJuRpPTZFaJNbMe9f6rQ7P945nDrFNU8XhoaS8zMXdDDZPpCYzhhzakfD1AUgoS63QxfPyQ3grBtbNEAR5w54vK",
  "key41": "4NbqpQ6oJ78Jcy6RokJaUyvoJoAwLv8GGUBeuJnd44LUgnRS2BQJBvhmChg5v75Baj2MqgJtYvXn5NL7g5vuQJkW",
  "key42": "2x6U5QR8xwq6LRxhK8umtWMSU24TvkwtWqX4dPPQUeVPfvtyT7L8hpRAGtb7x9Xo67wQjL2LZALqi7wRjfHgfek1",
  "key43": "3dMvsUqUkwMMZNFjv21sH23VQJqN1mhktmMeX3U7B4b5BXKV7TGa48stjmrgcDEWLrcH5sqkA1MmZJyHSZiGYb7Z",
  "key44": "5QScEYougdYt93Ppm4rpmx5bqQDC16XYCeHrHvW63VciozLHr1dqEg7LFsRwBsEgMfWbVLNEM5XthsW8h5nHNJdB",
  "key45": "TQcf7nDDTXL6NzAfuoYWQ4JDpEGCrQ1xc5GLec6998hu4PpPgxRa9Deo2nx12ZoWfxdD5P9ZLvqiTpQPBYBuDjh",
  "key46": "51f4oCw11CW5bcvFp7LVGJJVEVyjoaLH594FWznVwSEY4vaja62MmR5HEpuoDdLgWLT2G7jnpEZ84TH72ZFCp5eq",
  "key47": "5frKMSs78HgMcxXe7bcgn23ddWyoGVmhgU3NsZfSYtnvzHVnDGxWuudbaBz76aRaY4STxyg2dgVGDWFQy7VqUAbE",
  "key48": "hSFUT26Zd6do8CWduob7qMv5W2Yyh5WZ2wXcPyLj3FybHFMjtBsmfmcAZ1e8yfARi6qstzaiNbSjvCK8JdxJzhs",
  "key49": "57xjq72CV9kydpLo6KTpemi8FMutM9zkMVyvYuC5KrzdadqvK4qwXCRSuAs9rETobiNcZA1gcP3BLS8NMaGLVRKF"
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
