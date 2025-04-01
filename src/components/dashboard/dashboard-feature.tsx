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
    "5odnC4uCUXaYXRVtYpdusXw8rte9x46YW7EbMp1sxCqCkpQeSXzQapztJYzQWRmY5tDD8Nch9PfaUontHmVSifV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4314GfbQK1hjJohzGLNJ9Bk48VnRhE6aFjQnsrv4DYZLje3o8UJwDofgiGqoedkPbE5HuHhdEPtedtyZnjCwZYcK",
  "key1": "NXb61B96WoRtbTyYG9e6m8jcG8UthvRKq7my3tAAhknzx8vuaetq7BNVFwaCpLkdVXEHH7YjSy4Cc8nNA7xp1DU",
  "key2": "124ov7kMzXxxPmZE4GsnXAbPNG6HQmL9PYL2qgDZ35HHumH5WKbJYzh18AFJFN63UoVVfMoSzvtkKzy1RX1k45um",
  "key3": "2uCDh327QPLxKebvpNLkAcGGhYXXzMwzUGBm2qvv9eP8EXmNuatXgRbqCxZFsSBVTTfHV9xsWs48qnEzC3uoU82A",
  "key4": "2swQRXVSca18EGRVZJfzUECCpaRPzgCxFVVG5Hv8PZkwSvHVEwZsw2KDFvkHARuyvNDA68ujrQQDzcyTyFwNxLSB",
  "key5": "2macsXezWT1oH1pAywXzRNwhUw8LYx3Cwh5nbRtRrtzVwZYfAXj8QFZAcfCNoNLWfo1aygEj8RwnG7ZV2gMsZX1Z",
  "key6": "5iN65youZpH1N1hBQC4xPQYSqvLwuYvr5DL1i9uaCeLDTGQVMRTR9J6HncJef92tMe1JmUeCPnPGxdrFFMiDwzr3",
  "key7": "2LsYuWV1z6rrDbzpUaAWNgD3XhEys17EDbib3vKaDBWmfaxAvTF82gRzqKfU7DefbHPidp4K15Yzgn2qESuyx4BG",
  "key8": "4MDYfxxUkrqsTZfEb5axG4SmwT3ph5gzccGfzLoJWQp2rJBApN28Pe2CrE27ZhjFGqBvDgnyq6mJyj5D4Na8UBBL",
  "key9": "Ybxh8pgMTEzqU7EJjb2k57qzKCkfYxEhCVaExUqGMCaPb1vF8VUBCRfAs1Yv74jEYdcMDqMRWHHnWDupyCTib6Y",
  "key10": "4vJdVjk8EBp3wqKanHHxa7uaJZWXLmN9uPmbWJcbXhyXAyVY59RUjyiJuYPSNCDkSfakZr6c65q1FiTcazSZDyin",
  "key11": "5x65RuGvt9D3nSnXytetauMUrivJKSwMTSGffygKizEEzF1SB7sciEWfyaarp7MWp1JYQtuc7AKHhbvVP8DgsEfw",
  "key12": "3yzV6njxQwqtWQ1MCyLpgnvVTLNvh6UgGMGCCqKgm41vinja65GEmBwSd6Ms3iRAjmxbfRH3EAA3axQzpQM5Kxf4",
  "key13": "26P5i8sgkFKYXcfYeD1aii7ShuYcqtr7kah9sR9A1qdh67SPoTQPK73GS3idRtphnbSXf2bqTX4pB6eAjnELRig4",
  "key14": "3bi2HocWzv3huEa3ynCW4g1Qxt9HLVFTtoisCazg37dQEDLA8NA8cjifudbYZKTjVq9TscuCoto2vm7CVbHm6sU2",
  "key15": "24P2cdykZoSB3AvkRV1HYGGTCG9Hf4DtGs38CNbb3ft8Y9hSGdScTdhDvcLaKAD5e84SsX3uvX71CptC2oxMWt7U",
  "key16": "5YWTXvrJCfG87fP2TNzkNTbTjMYioB3bVXFjAxJzToKU5a4neLiv3chYBYLdm6jJwDAhAg2fTA8oGt2WUX6U3zym",
  "key17": "5sx5rt7QfZ7DqQdxXkmoww8uvjLBv85abND76NmLbj6L1Utw8YbtrcZ7pMpYuhtpokR4FBZc1oHMmqNCJajMnpDW",
  "key18": "SGfwurBQXtByFcSwn4bjuE4UwEfKbWNtGi4McHDirydPiRtRdbsGbzH6YPj5ZCBsCyAU5B15PqHnVviBiLVtYGT",
  "key19": "2fWLyQDL9SiNBt37AELccJu3ymvKYZL5K1dkvaYV5swxsqdA7SRtQy2hWhnppwSdb4mZqGMggph3e83wFf5eYsrW",
  "key20": "2Jb2weBYjYurv9vqRRTtsaf6ShrDrZCqJ1ivytEzWdDqM7hq5Wn2uF3CCzvKLXczF9kRTgTwd3nu6kWHPEvkgzfj",
  "key21": "5qmbbkM1rwTmcyHSwpC7nvALJDDqu5ET2yXD67d9kVcVDM5Tfkw6eYkBesRd4bmLyVf1aV1ZpW9FaYxqTKesm8kX",
  "key22": "2qPzeoHZMvL8FX7uNNqd2GtLFM8uWTw9yqPDe2tvUGsaA7M3cK52JPZab7SP4ZB8t8YtpURmt7aiNDRHXRAuPFpU",
  "key23": "36MgP2a9npH8KajZTHRBHKPAR6eUnwwirkyUF7vkhfiUwyAaqCyxjaKppNidZPTodXhZs1rZ39FKUntgh5ebHSwS",
  "key24": "4Go7pptT4jC65dUyAdAm4vuuM7ST8pptUKupxo3611mMhcxzCefweNxAWVxnNUshGB7hsdqkhgWFyhrHQtpSWoGL",
  "key25": "3eHRwo4S9Je7nUw25T7axY5hXwwNUtTUZmS5smdB4oynJ2hWyVAup4ttASDZ2JP9xLyK9XVzTkbjAjTjLVLDhdKB",
  "key26": "28mPDDm8vwmNmuRNY3aneiUxcKzD7Pabpw8TD5rCJ8ZZoDD7Xh2NMaFVfkoTy1EiFhpMYor4UH8w7rqwKmXkq1ov",
  "key27": "5ti111NKFUnn1xu6gFfRnyrcBZm437ZaHGi5XLbiS2NWFYAHBpGawRo7jfW5rD1p8zvt7unsKfgEZ2oPLsFF3pew",
  "key28": "31UMPRVS8vQGBYcAzMGbhtQTv3otuLmDAUEG2EQWmY5UxXdqqeyzpcv4gNEdBnRzfb7NDsmHDA6dt7jbtY7FpSEV",
  "key29": "5XkFGf86khbkawGTh1nchHEPs9e921JuFVnBL1Bq9erz3Y372hHgJq1nqSE9pFyEpuAUQPgfodu35Cr9k2yoY3TV",
  "key30": "5kCS3wN3SgJjdrxNSLVBVCku7QLHLDLHKru61aSGi7h3RsQwGUES1F6uEJ1Zqe8LwUcSyKtdLrC1WJJNSzyAq1A6",
  "key31": "5SWLMbux1fPvvhD33vNpyaxEB21wXWD1XHMNurbCQqUf1b8B7V4y2KZUsfrxizLyL72YUuBzimAXB5SpAnHhAb9Y",
  "key32": "4bhS434bRv4sdZQNA1rFTbHMUWATtMFFpMgfw1TQ4EwbBT8vjLy9j5QLa83StNTSGU7MGnVaQCX2G8YXzfCik5kn",
  "key33": "4VfdLwSE6ksdQVCLs1xLzUhuzJTdWxcBkuFbDSjb4fCUWjjzjo2dJzywt4BYHPA98FpbFfbXNTwKs4LGcjdgEhEj"
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
