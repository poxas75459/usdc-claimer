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
    "3poHgzJJhVdWs415TdNGc5aURCA3XNpzn7RjEnG49wbWKzBppjCyELvFgsKfQreHp9ptA4GHSWCxMFeV7p3x7RUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DafMbqDHhTg7zBAYR1QwYHq3TTiDsTxxT79a64XzQc3wxsCtkfyasTvMYhhNt3fSCx6CEdeYfuiGsJuMmpfdJjC",
  "key1": "5Lneyd8bYkjvWU9giN6SsxfXb9j6vuNat88fPF4kYQbte4BZYEKs6d2JLd2qivVrKQgNvk3MMfnvamzLyWh2kTGe",
  "key2": "3bsYUuM3WTwY4UwjHgTyiRdEiGwQsQJE6FPMxZtaEY4FYS2R1utMQpRNM7SagD6VCc5pxwjJM4iym8MLFuXS2cWK",
  "key3": "jkpmmsL7m6Cu419eyUG246qMXmUdzaRxRgbmC6G4AKN4SbutQJicSBMw4p7Wx7XVnemZupNKtSWh9AHahXcqnRS",
  "key4": "963gyxRRci8j59TCnuSnvh817k6AkW91ENAnRk2WhWJLkzpwb5w3whhqyVCMHN1YYhbaEQpAuV8VUfxekQW1QqM",
  "key5": "4zUUn94DhScouXGxk4A5pt8rDUyQ2VDMcs2YyAaZSLkpRVAh2UyReBbMkLxbXPWqRJtJ7VttQRxu7H4jj2eMhQH7",
  "key6": "5CgNV9tdMEgCePAFFFDtMAYcnoyTJEcxKsRxqNJYcvLJnMCT3KyD5Hg1DrBJ9Mp8fZDC3n3WNstWqFJMd41Ziap5",
  "key7": "256Gw7qUjmbmciNbNYgKwW98TwC4FT4ayYgGuEjBNUYr71VofRv8TPpwZAM9dKGkLGjUpC1K4PE257hSJkGJgQuY",
  "key8": "326j2weq7XXMrUxDfuYbX9AomUpNDtHsPx3sZ86ufiRdXWhsjtUjKGi9w8ac2UL7xyZDQ3i9GNcYnim7ZCQjTszY",
  "key9": "36vXBV5yrW2Xf97JMbbY1XDjqCH9qouKN8Ukq3kSx5cb4Fczo6FVFXqomjP4QQQaiZokMmL6j1TP1Zw3iudZUEtu",
  "key10": "3gnzppWdASjLQYznVTM5gLefobBWrUuFm5HVnHUTXRhQKphD1SwoNVm59nUrNQrvhJb3GkBudCmKksXnnNXUCvEm",
  "key11": "38eLwWJMazwvLKU4n3X93yvPWShzv8LZ6EHJXTc1jSx95aWdp2ybuSaeGv98F8cgoJwBn6jNx9J37ATXTBgg8HMQ",
  "key12": "2i1gGFnrHkguYfsbtzSV12CeX3nf4kLmK2EKDAgUqNz3ToVUasY6SR7jfVYXPLxADyxzhc7Uh27Ls42815ZTU6yx",
  "key13": "FYV9YjTpzvuXg8F6HwozN6VJ7w4zWriT7pGhnq2NBZmjfo2S5kMpug4dJx2xcWtsZ7yHSuDQaZKUTRaFzJPMZgR",
  "key14": "3u1Zms5nzjRi4c1PM5a8DenghPy97zFTjkErRzRwjp9HNR1KWoaB6DrVgiKCERmgVRzz35EpJdQMQoShedSM5cwZ",
  "key15": "5zc7NBWpCsBFowfSREfEyaKYcT3J5vU4yrKpQSFWY58JF5jkekAAWQhUTyfHjzLShzrRYD2hjPReuC2H1hu28Y3s",
  "key16": "JK5MmR9T9moEvexr8FVppnACNQETYHo8nGSPR3qomXEqEQ3cpYWbSSsT8Lj5hVPutEygH2AQv2tqsrnqDkvtjje",
  "key17": "3NB7gvbvixpM5NEpSv3QJDHxV98g4qHu1QPp9UAKWFPawDrZT5ZXAEhtNYMifSwJCHpdnFbrjTLNFY3v22DMhh1j",
  "key18": "5RUZkrNGLYAd7w9m2QX7cNyVz3f6fEzqphBkepCy1edUz1qSat6h7sKV7RrWUTGNjn9AhXW4D9EkMNTAfywXv2s3",
  "key19": "4rsB2CKzZW7Ekn5vkf8c8jyJsyYotps1avH5ysnfvyN2MbTC8AFejGa5dMY75f8KNt79z33E2tWYh7RtTaoMcQda",
  "key20": "5GFUqJhaHw22hsDuH2v2x2x9gBk2G27m6UaXiaG1MBmzAtUnS5dbXC7QNtP4Yg231iMSqkfYN4FHbfZXK88rN25o",
  "key21": "2MN9EZKdN9mi7N12xnVZMbFiYCwXM75NJmZ84RG5hDc42Gnp2j5ZaDgoV23k7qyEmzhjnSXWNr5exdngmJx332q9",
  "key22": "Me7CVngf65yT8nhMLMdUJMbBMEH542iSde2t4YCGdts5ZAW7g2yu39J5HfuWzqeKH8R9kyGx3woLonKGs83gytk",
  "key23": "5rAx1besp5ezgdwHsBaF3xuQe8QUhGiDAqzPDe9ZFaf7MB3enJeQPkCsi4ZsYzGEDB59sa1Mf6XzEiJjz3ZGYC9z",
  "key24": "3ZH8XSNVncsjBnx7HsgDemijQ5HzbBs4YA7AQbvXYEMxeb5u6FUvvmpP8Y55U1Yd23KMLhb8DiYAbt15WjPXVVYa",
  "key25": "3xfoRP9vZpUiURSGqNqW68kzzVhBxuuqJ7g4Qv5JHctdRTui7Cp2BAz7i88McFNC7yioN3EnqDAHf9E3GDuLehv6",
  "key26": "42ctniSVRaJkFboL9CMcruRQXPH73noZtYkvpt4XW5NoRusx5BKzjBBQKoYHSTMLwJoQm9xZvd8bULzuExmRvmhp",
  "key27": "4LrwkqmxCiduTFbp1Pwerac3LcHbceBaJztvLgc4Ty592Y87QS2ioqka5TbuSoz8xqgNbxzbqG51iirLqbz6ha62",
  "key28": "ZC3FL88iaqE4mwwmSbmPm3CS9C5Wdcw6m5D97yNykBeXe1kpdMPpNNfkqL7YWmRmAiH9n52oR6UfcnhbTjkhL6M",
  "key29": "fo9WnzS6aFiEeussFG4gcGamAx8NJxkxa4PRKGGJh2nfqQMfaRcjss7UExkmcyp6PbtRcVSBy2M3Tz7ZFoBFAXf",
  "key30": "37QyovgpoQSgQ2FFhRR1NhGyuHoS1depoc6Zqw9EXtWPNaZg72c7oUoYMVR2P3sC55H6RHixzn1Tv2JRo3M6TpLY",
  "key31": "2zvxwjk8228YitKRXkq4VQQAPu8XuLXZsXwKre665WS4va8GnnViFaNzUbM1LrKB3vjw6WSPPdzSry69uNuyZ11U",
  "key32": "RRBMYK1VPxquxQqtvtcTEDVsnQxfQrWf5RZfudcqaPSRJA6a2ZnzhRMAGVxvuhXm6S1KSNQs1pWtSiW6LZDXknM",
  "key33": "3mg4sQ1yVF75VBxRQXMP5WKXDVYwMQBHJuXsdRTk32Mzgdd1m92ChL46xCTbPTzrsbdUjQ5JABzPTaQ1A5hjcaur",
  "key34": "2vsx2YV9yUdSsTTgTYfDQfLqrVWKXiPGV2wucXnxyRGwDgN85vYc1nypVsx5mhF6o42p72An1zPjw8H3Ae1Sbf7A",
  "key35": "4ytwnzXLfzM269ENkfS1bnUWsssomNrwPTso3QJH23PvQtUt8WLvPDKVy5nCVcQZo8ZdsvSmmtyJJTNnJVbHWnhe",
  "key36": "57hPnThb35rEroXpjrPSU2pYMy1yTCob5GigfGuFjkw4DSw7RYWAAuERkd5wQT5souxAwcSuinaTGhPHFwkufini",
  "key37": "45LgxfHyUYrSvNfo1U1H4nRrbYLeG6Evt9PBxe2A9KnYp7dGYp3Qiuz3wKeMhe4v3Dp1pVZQAN7QvwwFQDt6pe3B",
  "key38": "BGe3nZB2BhaQxUWMZqp8mQ9Mc2Jt2mV7oqyZj7nkbJdFXDLNmEAKb7DNYzQqHtpMgh2r8cHXtQFH42hnak7Kwpu",
  "key39": "46yhsZ8DvXF3Eye28MXJPiv3szD4MxfAd3dVPurUpMP6PnQuF5rZW1YHZpDLicpFhyjP4R2TMG29NZi34nBNRWLy",
  "key40": "62KSod2CVbsVU9QZ7WEAE3n3pHwXCyvKXNg3hinAaUr2YHHtMciUsQbJ7kAxYfM9W6s69Tj5GLK7bdydVsYNRcHK",
  "key41": "3KvtDV5JZtv88FgGwNgFr2yMAi6KaaqsWKj26DBPYnVM72vfKWerwAE6SiRFqq5Z9DJ33UraANJbk2kdKzk8gRvF",
  "key42": "4VYNZ2QVTjgTxJEG5PEzrYLZtjbum1QCc5qEcnrznFXvuEJHDVidEWgmob5vaTvoW3uHUfVibwqgArfjEvwdpcby",
  "key43": "4quZUBXbqjryiHtu5biGWHccpyK7wXbAEMbsaR77qLqCWzSjXu4zGgLYxEdPgQAQpuqirVAfcCVH1qfSSJRnFton",
  "key44": "31aMQR6sTipRSVEhFdDiVhLAG3q9LbRzs1YPpvZ9dMrJM21TM5DdS3wtZ5BuHEViDUBJQhmxyX85WSNVc5fEH6xM"
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
