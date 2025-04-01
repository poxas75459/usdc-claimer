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
    "27TVcFmakvJ2y4wzQJUGoidL4W9DkUsAbDdXsMtPKu14Zqj91U2BAkrhRwdtcKfXeVjp85gMeEGPMVobBGx6pmbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bbfNqbpLHfJ9ZYp2y6KdgEVDbeF7QKQ2EA96TuTguuvXREYyLC6e1kLdiwZ1NfVbAkwfjK4rwfXi6Ak226sAA8S",
  "key1": "nSjbWAQdfAB8bFvfxStiT4caRMu391fnT7TkTjUTzQv9sTkpx7PL4LVmDnZ9o1ztgxTFvhj6kEcT1LwZouNPNkJ",
  "key2": "M2QSnYa8i93LLT3HeY8pVAhHovYBChxivvexkMqQ7W7s8cssbMGBwUM3Q2s5w377UdjVKA8VTeAMQWaxbN4mVdp",
  "key3": "43jPStJTxGVJcuvYggVZjxp4Z5exmMjf76x18Hxai3NuxNNyjwDMCSegQy8pADDQPfgmmwi1tnn1En5zfFopZNGD",
  "key4": "5q1w6vY3EBNGqpKH6mnUpWxjtvHDfk34XNFFSBqydzWTfxVtS4vgahyWqEZNrsfTRubmLvjrs2V7rhLquRWH5cSe",
  "key5": "4rGCWq39MN983HPUYtZ5BRj3qZgt5H3WCJyJiwxjjkGZfDa2zG4jnmjA9RspL5yoSgaT4ubWcie5hd56aTdRaoYf",
  "key6": "2WDQ8S8WNngzA2bynTGdxfgJdXQ9Q8Y9reiP6n7UsEtdiQdxv4u1Vdn6VgSSjmXoeHmtWToHaP3B2L2UJvgujLUj",
  "key7": "37fFWWr2wQihWwi5da55LTbiu6HmgnmWDybzBKSqiNUmkcJhyc8AEPNxZDQd9F5ufpPuazCFW3yBTqxZmCD6ygtS",
  "key8": "4eH1Nu7pE4ADD8a7VftLhECrJn38NEMApN1y7SLVUdQFRLBpwFfpBRdqknn7pwzETkTQjMg5vMAmHHux8VCd1rph",
  "key9": "5RYiw3BkPosspQyFDrtFaJD1HeJcJsx7NWRF4BrrN2vzv6x1wdrXLQa7HyCt5iqnW1kxERrw7Cr53YmAFN3hNCYS",
  "key10": "2AsbsDxb2h5HeTVnkcQ9zG3uDGiTcuuJKmfUiYoPevkE6JeqbkDt7jhbeyjNGD6ZYDCbYtjsCbuvQ8x4jTmSx5Bi",
  "key11": "2at7qHxKVqwVmMYtwEedR5jq2r2g7e1UnnNL3hCGyD1uWLkgYm6SNreRtNh4P9nTe1A5eSyWHrZatbjBBPUUSHQT",
  "key12": "5zM43Zw3MwfGcXbW5k6TUfj3QUXsr1Lh58aQFhStVeuSvkUzsgxZx2KXL7uvL6rg2HuQhYAPpdSUWu5iTfiNMwt9",
  "key13": "cH8s5sZQxDg9x4d5bYFpeZGrFYgwaontFLvLnBrpmoTZTj7UhTxvfmDps12SEGZnwugLd4PVA11g3Xjd7AopD7M",
  "key14": "2T1vqwuAh8EhrpoKw18GaV11wsdUs8nF7BSw8na8YqqUn5XurHgeW93ePwAn4g71QYVReap6ihDDKGqNddKP8FPV",
  "key15": "QpFLnLtbPsTTcv9Yje7hDqofoRRPnarR1tcME5bbAUkKHtNqanD6FuiGtcsovN5pLh9g4rif1bysJ6i9cAnWd42",
  "key16": "62ajzaoFJ8XGcT9hNPYwrrtwv1BNF6Pq1TCyERdHaGrv9xSsgVCRtnNjNXj674Z6uEEbFPRhd1kr6hryWoongT9z",
  "key17": "3TDxQp9jmWUsp1Jei9gzXh2bcPjnXSf4Edfsc5hA3DaH3dKULPd9EGGsZRdZRtKM4385jMBW9j73uiAGdP6uQUoA",
  "key18": "4ywVzFgEoXV7qiSHF3YtoxpjS58gCvTeojVppbubXGPzPXsrVDHojvzyU6K36x8faQtckjCADmZE8QCqNeTnCKXk",
  "key19": "4Rt4G2pm8Qpzm1mB6suFgBGdUgUR7MmYcbjf65vrLQbywVXz4K5YQzewARYRw8ZZbn7eL4qoMpzGzAA9fHqpkswN",
  "key20": "upc1eec5h7BF1JH4TvFLXa5ubWA5f3mDQabh4LSQUtC5CKwrZj6N8GfE9iyBwcRi72YPpSiRcjD3fZXz82FFDrw",
  "key21": "2VmEvFma1Z1Cp98GNPHpchYcya4tW8gdeSNrtC4a1Je4nQGoNbxY33fMXit5PVbmbDB3MaSFWTYQV2EiLDP9QCHZ",
  "key22": "653nFW2f9FDJFkCiNq1pHJz16JgqtEpHBCTXD2f9mqhw2s6VSUzhi8dRsFwUqx8oVWTqdrFuGkQb2cLyabQTojGL",
  "key23": "2NvuuPnEwaCCyaiFpWz1BDaDBnY6JVTBptxRLJXpdn6yhGQoqbRUpLAwQv7a2CZxtsjJJiTV9Zn8pek3CD5435V",
  "key24": "4aFqvtwdjQGH3yzAZfDdzSaoDWENEExdQUkeANsHodoETcx95ntQFHDQ84EagV9CzTQ1ao7cnDuGEHjgbj8FhaLZ",
  "key25": "2vQVpyfo9oybofeGhnqDTiCbnMTNxR7AyGsKGZ8RLJmesefNWAFXssBn5Hgau28tbJjLT6AMESr1snzh2ZQrPWTT",
  "key26": "65aRJgSATEvx9x5X2kt3HFty91jkcwWV8DgbftyixpbddNzSg8ARBinJrX2gmQgvKHQH1iXG3PFRNZCM2xjNVKNe",
  "key27": "5KXbZaU6EbDxuGdxH72ACDUM41TDi5LqK82gGT2eiRzjJzrYTtVTSnShkngD92cPFE1KCJKFb7MDdU8NqLA1wxYn",
  "key28": "4YUV579wHTQncvqRNH81THWJnEW6vsjsgfj55bzmAGGhJpGYSab47jL5m437Q7xmFTk9mSEuToMxyzp9KoQKa7Um",
  "key29": "2pponWZFCHjdemmrzzmL6QZjjbYBK6wQxZTHNvGic2dSC3PTzyTu3QjviqujEHwYyXS2wV9tD1jTxxCSxQjz2Fev",
  "key30": "4ByLQYCWJTxMsBg2VFtTsSF2hCWxDVyznJDvjPisQuXuWwMmCSMu7rkpq52ynB7L8FHhNWUDHybWUdVBm7C9KY9p",
  "key31": "3urjfyxaWsb5RVv8vU9F8foULDpvcZmmuTu2nFCG6gsX6L6NVnC5WztBeTCkXyZ6rynSHKGhemJsqvbf4Pv2PAZY",
  "key32": "2Xqwu6ze9SXaeBf47sSb6ky9YED9GyoxuuRtBoHN5oZJ3NZuYSuaAJ1styE4kuA4srPpZwwC5QRpzj8AtdyRiJXc",
  "key33": "5u8URBXsX6MTBGWHgzPZbbaUVecr8CVZThL9n7E24BhNAPGEJrQci9kwVE8AoSeisYFbVytt3qcxWva91FDKQXTS",
  "key34": "5gygyYMFdGbQH4jxHH9SEupXG6grKKfPLN5Edtzasg3qzfQhRsxa7iuTn7bkrzkAWffP82ztceTW4LyoF5DFMkZn",
  "key35": "4Y9Y8bpPD3YP4U6PFFMLhQUWjz6jw1KZjPJh1nNhxxYgKfvRZXrxxRnEmLQeVptSaab2RgZ4KxFzUxiViXcVLz4t",
  "key36": "4RoqcDrom5LWAbE4nNMc3uLNDrGGur39znX1QNhiKVBCzw9di1tsLCoU6KrKgkGMuQRt2drbHzUT15JaxHqKmjTq",
  "key37": "64QwoMq7xAazoAHJaqkpqYDwoXfqJEeEdvwVFJLZa1FwJondGm8Hcgw7sRixCuLMKavWhDaTvyM6oiGvP94jaL6V",
  "key38": "qogQu6msQJrkXV7ydGPQrXds6jugd86VbiWGQo8vCu3sKer49gSUQ4AaCCznpRcqC5pcPBJ4KsoGR3i5vHQjceG"
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
