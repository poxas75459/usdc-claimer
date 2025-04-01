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
    "3wT8ZgHgXRnKMjJAofmHoaPB2nzjNRpmkuAFjhhjpVd4i5oRW5eVj2sC8FdQ7Qy7tsvBiKsusVDEs8JdiRXgCRTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lraj3uEb9nzyiDDRUrWS2X95y2uWXB3BwGnC47cDL5dfgJN6Lh6x3dqu6eUiGtshfNRoizENLkNB231GMSY49LR",
  "key1": "4v5VoiHAEh2WQbaqzYxtreHaa4Z8A3ZPfADn7LfJ78hvBLuM2wWuiqc3WsKzuWwrwPdoxEXnwv5czD3ipbUEReio",
  "key2": "2YHBFXG3r4ZhFCwjTSren1waGPBYRAm2nVUjCdTAXJzTybUcgzv12r2XF8XDdiFhfBiA55Ebf3pr1sF4FrzAwViN",
  "key3": "SbDXgKYCdWQUJnNDK43ntjy8wkDMeWZyfkkTHCPvYFMt5DK48P7q57xicqXgViqDtJHLM3S7q89GLmuj2zmaziZ",
  "key4": "5sL1jpznpzthhXJg7AdJCdK26X5d2Stf4pb16JDuTTNMasPEa6Q984kdPdd9WWSSAYH9qJk2pQfeCrPxdEHyMZXM",
  "key5": "2wrgwJaWbMwBStem3gUv1ERRuABGJysPJNiMp8tjfqAPWdhAGGkzqXXqnWM5KNzQprrZaM8muUDGuhaokL8QJ7GY",
  "key6": "4J6hB5QMaXBhqQG8bDMMTVAdYGCuDhBFLtzokMCSiCAwNiRW7xnbqHRV91VLBNpR32d3vB8uYVEr6epDo5UMXvzZ",
  "key7": "45dbR2R1tXUBUJPV1HDrHoCty7gpYYdrZ6MFyycrJdrbLf2JcUjjUeBGnWR22oCYMQSkhJUWhTRSaGSujdof5RfM",
  "key8": "5HgbZyMJ5gf4q6Wm3Acmuh1PBpves35fbQCRMZvjqQXxFJ3Y9rRtw34WjzeQznsTd9er5ujBKB9B3ViHg5LhU7Vo",
  "key9": "4gmaUZqLFMY1aT3WamSirHS3kgJ3qMUCSqeMLvbkZ3tbbj2eG2j9xRhJMKWZkgd9YwFbqGNeDPSMEMUEqjWsAjw9",
  "key10": "5j8drqt2h6a7R6kb53BWU1pMC2HQZ9t5VCHHLskwpwcwVtWbrGtcSS8aCvTZbSpMbkahHg1uKpLvZgedDhxypngQ",
  "key11": "3vMSdHz9oAivwMawSxLjH4Pk1R4iMuLE6GRy8AJiLTcE8VsawUnHtVJ9ud2TcQdcUjH4TZhuYY4WmZPFSBG5mgMJ",
  "key12": "56YMWhmdgZtKhAMhz9cxuMNGMXPykkwFW51Jso1YrG5dtK3J6TZFKFnQgZFiVEj1gBiFpGFLze6JQ1zS4w8se6fq",
  "key13": "4BDgWev36yQJwEyRGQnpjJFSGBg46krx1HYbPAZFoP9oYHNAzx8ztLNah1ybkckrELWDSQnWn6nK7sz9ZBp2dwYY",
  "key14": "2L5uRRkjsRuxiWrXfbyM4Z8bTLatq1wwdqfVtiuu8zG3axwTKswdanusHqiwCTQHef4ubCZtWXX1qdBC6WzBzhJY",
  "key15": "5DqHZvTTyHCJn2KmP6rgpZQoki2MYMptp8EQYTDRBYeycxq2u4TE6udyzpM3ZCn58yjnYtJFqa5MCUC8c9Rg9P7T",
  "key16": "kdQDJxyn1yNcDspwWJuF6CAxnzXdRbvSyP17aJZeGNfHiyazpdJULVWpi8fUfE1ASP3t1nbH9LN2VF6u7RRdYiL",
  "key17": "2uMekykeMJT7opXMyCzURMpMRoFkvEPLESUW22P1t2JWDq4LSFAPpEyWTLov3Q4zXXj69KqpncuTaqFr23Pjemc",
  "key18": "43zQrJZKBKcJqfUavSHHNBtYKzDqpX442nXHBVnC2w9xqXFZn3KZuocng5byR3YA54bSr9dtNoqBuu9RrFWYc8wv",
  "key19": "5Hrcp2gWmkDibfZfAc9xsosBEjDFXbLPDRoMcQht8zmuiEfQk2JbpxgTFf5WtDvpGbs7ZiYeZyW9gvzm4MTUhFfJ",
  "key20": "24hCCjQWqpZu4Hp3eWF8e3M7kquMpRWNEuJiDJX8MKXnt19eoNySFx6xNC6jVm3j3HmKTFCgiBaVVSu11T6NcXRW",
  "key21": "3kSwyneC6nDLci6xASZLvWERZuAAaFShi8Uy8TeiL92TbC45vqsw3jZuJUYAfQLsArrR8pWWKYpPiE6HdopseATT",
  "key22": "3s2rFvCDi88YLCHJLCnkfB7v99iXMbmT1ANrUou11GYnAihj2PtihBmv4WN1EhQuZH1icF6kpZrkUZodopkUtqBL",
  "key23": "2nNbwtmiyMHBAAsTH18N3dsCWj1eoNCy6bDK6W1fZNX48HnhbpRdZm76bTrbizgrM9RaAq6DiTHUhuMQskXJsZub",
  "key24": "41CVTw6wA5FJQ4UTGhmYXDgzfuJ8pnW7d4WcbMZvcQgxc4pQya9CyNqUBhns4qUev1Yab3TnDrbgpZq7amAazMVo",
  "key25": "4YY7LPScx4H6t2W85W1paY6ZqYHpZtE2QoHAN8tRdFWfNJi4T6bBJcCsdpHHwRTUmhhuf49Y9TADu2GN273WpD89",
  "key26": "48zJadZaEzL7zKQbq9xRWj3W1Tw8Zc1NaqmGW8D4AnySor8d6uxC2gwtit6mrnBGMyKunZaoVFmYGyGuFVwGkHjW",
  "key27": "43TuVh7tyB2baHM1JhaxHvZCYrMiVSQimwt8xSB7iKpj2ztrGt7pHAuoBXAvqqeDNeUAmqyQ6crPtR68C9PGw1td",
  "key28": "3MRVQDtD8tnby4HFWh7LLXJQFMSc9qZg3k4ZBvymK5xY1GX4QKRAHmqgGhuhNm3MrsDkYZvZyc3t1zUFoHEcNPys",
  "key29": "3ebvV7oVV9gUM6PxLAccw5qkQbtJhb6Z7Td9c2wDNSJbz23LfSZuqgNRFaaQMbWwHWDNf4hPktvcNn3jgPkLrakv",
  "key30": "4JLygnx8jWR8hKGYhYscX2ajhsYn7sqPzRJmP6vX4ZM4u6JWYfo11BP7G2JZKq17VvPsAAgbpZCNDyqSXHNhWEVe",
  "key31": "2Z9DupYLeGHK62Zj1vt2PKXtcvxEPWyFDa5Gu9nDamo7vDL8USGKJnivGdZTza5feKh3NpDoNcFmd11e3JAGU3oc",
  "key32": "293mgacmkgpDt4CA3SpWx3oG76UQ5J7kiWEjy53QYM2Tw9Qtj7GLddw3VtXeGPhcDyCNFMx3jq1y7BZtyWDij96f",
  "key33": "4UxBBDKM7TJ84gpsSQsHJLBii8TLXzaydfdJwuH5AA9jPqNNRW6Sags2djNysYFJqdWt6QuEhDCZRohp1rqdKRYt",
  "key34": "3vwhtUXGcGEzmWD5s3VSjBb7C1HZpjwb57f6114QjqcRK7NKv2owPQoe4Z4iDJHN8zWhpnPSX5cEiuYMcAAAT1vQ",
  "key35": "2pmwjGLyMMS9NaAmWgUgtvxCvHQBhaDe5NYRjBzfm4K572dQGfoUqGi27cCPWAWuEzo8aTPuxTeHEd4QhF6vczwR",
  "key36": "2cUEQ9zUePb3EkSyF3yW4VWSzqS73PiPNatGxRjPYy8sHAbDd73SH2mPDqiqdKj8vNLtyNpwFPsWMthtxS22tCnW",
  "key37": "3Y5J7vUncNjWhxz1yJvhJugpFGUMn7YhXfpukuH8i5bZeMYTHoWzs1EM8m64R5APDP2FDeQb3MS95V1YWvwGHrxr",
  "key38": "2DDcsmpzqFuxyVwHAAcMWsr1DuMPADzA4wfe2btBtGzpEooreHaBkfUT1SBuu6S3pLGy8U4UHbyykiXzU3TpYEqz",
  "key39": "45EzUCZfpfPkDU1caen1U2rhXqUbshrCnXC1kEo7vq1cQsWqgGoSnXrGJivjjaTCQVY9Vt4Ct75yVQ3zGu4TbE4C",
  "key40": "4NTWr7zhTJtH3h8nESizHWZkrUPR6fFGX9rtArVDXCkwZ12vDHa49CjCE5JSxfnJuMmjbU5WxSzJ6JXXCUx86FoE",
  "key41": "3he3sW54FBcoZPqpJJ7sLtcQ5hgWioGKLThtTU4iLzSVgYwrixFHkBawpiJAMqtW1Pt6AjvD1YzBTrDdEoAUd6Wf",
  "key42": "jHS5inzHADL9qmwt8E8ZYvJEVFHssZmC8Tzq11rzMrmSqdCyxnBSj6sLbA1oM79s5dyjeBi3n9SiVTkxkMGFPZ7",
  "key43": "2y2eF43NKYeQ5vBC8NurzwPo4zsxr6x6kZjaGzm92AzWVyHMb3FUfpNo1x2YtfEcqe77AZjMdJQmREPzJFx4qPDn",
  "key44": "g7zWBugYH1Qz3U8yyhzLKKHQNnW6SgBYJN5AduZ7nowLkXhzD5t6nrYELfVU9wmmNuKDUyWbfX5CLkAr2M4ZgMw",
  "key45": "DFNKvfpvyYYvWEPvic154dVnrRB4dsLxvvkygwU6sxLdeTvTwdqv8dkfj6wL1Xe2bo5iV6Fxqoe7rViZxjFio3y"
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
