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
    "3VqkAjtX2SxoUwXE7EnSqDoDRwz88edqybwSqetKCxZNRdwZD8wvaQEQstZuphJiTnrEFvUAuYJhqhKezb78mqCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57A9xKkn2uiqeptw5XK24LsDatjy6DHmRMWBtAFifUmpzaBHi3qxMJro5DUSjvn21ChyuWoLY5n9CqLXUcJykCEW",
  "key1": "5epWMFszKGHsptcuChXssKpKh784Nko5tfVUhLpPWUeP3W7Qc2NzkkscfGJuw5uAs8LGCjNz6A3Avk8bzCYgKHiw",
  "key2": "36HbUQthZZomwJ3DFk8B7MCY1R4yDa56FbEE3XixMVga1g6AV7x9ypotBcW1sKdbGP3mYFKKkDiwibmWbfbVJSXt",
  "key3": "4sPjyDfZsebqBxVaHyfC8jskvuvohfYfiLLR8RsHnAku2yx6ALFsned7dFNi1hbu2BHs6rpysowT3Um2jWpvaE3",
  "key4": "faPXzzsV5dNDx86xoikt5T7CrVuLK2g3Zx4RwKmnhkBanVSeu8bztaMyeUxLCPMLQTERTVBWx9YshCd8MkQLrTS",
  "key5": "2FHxKPxFn3E1GKnLEgZSskZ3SN7oMRmeefrHViR5vFiRRuXcgsD2n7asjJUGjKmt5x49bfVCfXE4EG3DALHe7hNo",
  "key6": "4mKV7bmBmRvneLXVrepR9CZYm3jLVpiJvMNDtwAdRvwboAAJJwRN7WzdgbmVjoBGa9BvVWFxmTuD1MxkSkikqzgb",
  "key7": "5s3JzwgBZtRxokhKZZcPXvS1te3qQqwWRwCZK8DwobqrnwotTPKddsVutCVMBWQ8d7s6cw1DE5j3hfZ5Eycd8oBd",
  "key8": "3D7CXiRWKQf8J6TzotQTG4WQxe8EKMJDycBwkP79Th6aox5JXJYhskTGCa3T4mYzNZBHJLfYS4Enb4CWsiUT215q",
  "key9": "3C82mrEM7BjRdDsLzDGjstKWiUqt26SiaLLj1JJfpKYqaaUshEGevQA5uaAynjBMBFCe3bVqsgkpbD4GFyxCvwkA",
  "key10": "6T5NGuW3aRAu95cPn3Pwxngq4jd7KwR4FAEQbmGXTatNcWSjhwuuueUxDuU6KcDRSCwexH3ZLzPJbrN9fHDiRju",
  "key11": "2cyPQndgTpPTZUPW4tqh8vha8DaG4g7MNRcwR5oAd6h3nBmdHCjSVZ35P9W2J4gbVjbt6D3ucNGe6jdx8Dzoe8ah",
  "key12": "3ZvfG2NhvskbTnnX51JjjedZrGAMNhihjidaNtzJwZKjMGxkczGBrqjLq97MSYhG8jGkJL4fPF4tzhHMPQcKYkMV",
  "key13": "4inPAyEhjTYn6ubMMkne52XDAgqDwGehJeNtokPMmZ1F1pp2xsWVfrkU8FxvYKNz6HyxFc8Y4euG73JiSEHgKNS3",
  "key14": "5KfZ78E7nTYBqQUx2ng44SEUd1esHWtUuMKo13ucwbDKPnF38ufWXqTntNm6UKD26jspBFaeixp2Kn2fTzZQNV9u",
  "key15": "rEadMz2AWDmdcBeEsDmRf9NdWNmFAvoGFDdr2N3eD39paGfzaHr5RbueSi7GoiHBtUvz1a1DZYVFeRRx8kiCHQg",
  "key16": "4o4VSC9aKVVaKagHWp5G4F7X76ADNtX8azdnJGt73kWtQPMXbG3kTLz1KQQyBBuaNHGtQziyzztnjonPRXtRsMSA",
  "key17": "3gHvoRWbcdbDsyrHvmGfE3pbk7zvfdvLXbpD3du3YUq2iZ2fB7ynWVh6SosFvwRaYUcTQeEs6RejLC2BKgv3PZUy",
  "key18": "3JQ1MajQ29NXhG3WavLhh9LrkXoFdiNaRkEForhaxNEtrW75ezgWfF3nyMP9pocJ3Sw4zjiFVFVt6st6mHkPuW4c",
  "key19": "4gqf1mS3nTi8AqAZVzowjBrARiTV3u9nR8W56UHTU2v2jkSHywDis5M3jeLYcakY6dnF8Mj9z98WYSjVSVxrqLuc",
  "key20": "4YLX23CzpNbjEa2CCarSpeucEg7Lzh1BncYMjVRXXLPqN9CzxuDFdfg4F2c9hUSUgstzue9frd8ckDacLxL4jwn7",
  "key21": "4Dzx4shmJGvSBEKJbzZyhu8v1M3uZcsqqN6VWtwZL3JrjWUFhNxyQF57cioBttkZAYAtzpPhr53bkr1j4Bn5Yj74",
  "key22": "2T2vJsBymwvoat8chygJfPZuNshLXAz9z4Z3HSHTBbgRrDZuEpJk4aKoS5L7dqzYKVHZpgjzCoFotMwt5mTpRXah",
  "key23": "5XAQpg6FMzGndsyj3rabRvBsSLbK2BpNPKQHSBJC1rqscuSiQnqzgESjEKR9vHD1CURc8hbP29ZL1PfKH4nno4NU",
  "key24": "5RQDWDpvzdeJT6raj7ZJjMCxjUtTYDLSW2nNPWwh4YoJDaLroznZFV2YqMh2shVYxF6xvRNHQw5RPLT9cdgnE8ia",
  "key25": "3U5fnu8fs6BoQLgdpyS9yF2K2sc2mVdJd7sTY6aQxqykbsjoHzk44cPZJF7AkArcxvCxiFri8EA4bkfK3bidNiGA",
  "key26": "4frX2SjHMbZ7Gmdta68un8Ck3ZNuMoU4vUgkaePLu2c8YjcFh12Gbneia8uojpVGxTF28iVxHqwVV3NBckEikbs3",
  "key27": "4YWgkEdb3bGH4vqaM6tCKTZb3CZ9JNi4ngHtiJGy16zcVMT8x7dytK3kkELMT5T6uJQuWHZsyTaiq5o23gujdwAH",
  "key28": "4ZgiYdxD3BqjEt6E3MZLBXM2ZNh4bmCinYU6T2LtF2FpQy4vj6MLn4a748HWdkp2ur4pj6q9vjPsFAifKNAeSVqa",
  "key29": "wy6X3rcBbFaJzmFZm3hjoZcx7r4CXMKXtXN8u3SaMzWygoq1BzasoPVeNfXXJcS4DxLxroAvT5J4V8iNSedj3db",
  "key30": "5gRx1CsBwSfTSz5QWqSwTjNHq71Uwj6BbpV386DufBV5tTEZgy3MxfwS5GZeGLKxhCJBTUd2p9oqUXrPJjFmUAXi",
  "key31": "63QVc7PT8PSR5rYH5wTbz9EkXyRwGDFgEWUXCVEdD5ia6tb46KeL5NkXqRtiBhKiGaW5vSi6zUBRxHsoPnZoKh9D",
  "key32": "vjBYd1QscKgN5vSFssbt3UrEcw8ftra2mhJDJBUE88gckW1TvEx8g9NF5oDZzq7bUXadYVPvoeCmXC8g8vKQ6ee",
  "key33": "519dGmev9o1eGMunoPbutoCbZnxGY1kQg9JX1p6yjTdzewg9i44pDu3BC4eeXMCAwrQ9Cbw8j5iboXSLWYQvHhX9",
  "key34": "2MLd6xck4MpvFpTY7kTd6jViBFuXAsV8Rqj1gSmdXvPmt3L4WCCStfUMFmXqyxj1HE9BeFtfhAg1YSpGrmGK7aBe",
  "key35": "Tey1edzvw7CYz5RjF2BvxgSAVejka3JzKdjUusBtwVgXnNNHVwJPUDo2ULKG19FQ6J6WJNHdwDRucX9WMpPz4Mg",
  "key36": "4dQSyRB2jP7kyFKjjCwLVqAKSux5voFdZfBEasz4A3rfA6FeLqomppQXurmEXj2eZAj2eUYFezj5BGAVnhauurS8",
  "key37": "4mfq3M1zLCSEafe1axbqbtTCyaxMinB2N72zJCHLgJuzSZQNkk4mzgLaTnZiSx6gLEi2oxAVssSMGg7jBtfsEiyV",
  "key38": "5HUygFdUZxidYLFNuVNUpNtnctZHhRvx6Z4xPnkUZB2HZYvUG34icvLv21tYwJHU3Ps8E6JafDUhPaEKqq3HLSWP",
  "key39": "2hphi3cferuQCFrC67fTsXafZWTqHayt7JkCw3jUQpKkY1QEWR2aiBAwdTDVNzhsWGQr9ZXmVKocUzZCXxetGUaj",
  "key40": "4BeC1fFy5L1f8thfA5x2UA1Ygmj2DPUHWUzHjUkqnptDPQmg58XAsGh1FwQ2yADUEGANAQxxMQ6WwdP34icom3MT",
  "key41": "442Dccda43oqZ8sT71g9LiE4m3ALq43wdXRkdWguFq7fWSnaFDDWbkjZdFXzY9P7Ej3v8FBmNjNBU6TM7d8agDBA"
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
