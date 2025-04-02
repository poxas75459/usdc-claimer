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
    "4WHd64uLfVBSrwPH2PDYsj8CHpoaDkcM5KdpUYrVrvCw3J8MWb5faj8XaamP1cATc87NWD4MgMqVHf18bK3ZwiGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fpj6X3kLb3rrhkULR7JTaYgLX2nCGDcXfKhk6TNdFmP5iD7JnMxAyHMU4MqHDc1XBKJhFjBqYc4kwA9oNQw7MQg",
  "key1": "2A1yJXF2u7XhofLfN1JrjimQ59nbcCeiD5y17zCfupq5Jp4exVvjzX8WA7tmwbXD3AMJhThHv8fJhseKdfBQ677A",
  "key2": "2Sx1Gci4WQiR9iAt8KFLc8PFEqf4qNNoQZH1XZDP8Mg6bfCRcFotJTndRT4YyTdSLdZwi14aPVyz2wMLRcgyJcXf",
  "key3": "58K557ZmozoKDxk5wRGFgqiGRC9aRtZSHe6b7BDbUXttyRA5HXjBJY7ZyV1eSmXD5dXUn4Ej6S2uPkcKE2Ks1Cr6",
  "key4": "2kGkSDXmPnM8VXAmbgtS3pJRU2fN8HPr9NPo8cj6Z8TyZJvjwuzT5dnVxXoKnopNT1Ap3ozfgXWxGvcLhrV2NdYa",
  "key5": "4fSAj9dpSdj9SsHawyvSdYu3enZigJiDEH1Y2YTHcC4qQRXFB9Eehz9qbfmNPkH55B8T8FW7LJgmxQd6iNGQkpgD",
  "key6": "fyXGLtcaDa1ayVxShE499gRbMdH68ngCns5HwivxpjoHyPQUTniwhZv2pETc226xsTB1XhvDtkvGt8sTGmyJ45u",
  "key7": "2XuV3WSuSUeFzchc23hH8ZpNBciCvbJnbkHTUjwTAiwCBARXkoeUMNBb1aAXF8Y8t74cB1URvVvoFVZsbrUqY9qD",
  "key8": "TvuZDmJEzgZexCyxpSYiARXVopr8V1aXweWSeugNaRfRLyXZvpfZokXhowcM8S3b11s94Rm21p5Rtb5MU67ddEZ",
  "key9": "4e2b8zuq5Cc2th4wCmUWhHh9yGnMJTNwWUbDU78dgGgKMWUKsk3BgsW5gc2zQefJzZHKHk74ztRvmEkJypm3dYu5",
  "key10": "4fC5udWYZVMrntz22oxvUCcL4iPB4gyfMFusTsFwYGdvRYWYU5FsXMabnMHqzYx1NUEoxhmj4X8iJBVjfpj7LqRZ",
  "key11": "iA4ArXDATteFJQkznRpXozNTXGhA9yf9qkEusoyJyD3MUQBP1HJ7K8m22e1p2sHdtHDrJrLFoLsqxefLzSKQBuD",
  "key12": "2qW7jE7KpP4BkmjHkoVu6uF4yxPxXceFSgSLRgsNcWKA4GbiSLYtHRA5hncYvsNofUDQR4ooELthER7WDebpmLf5",
  "key13": "3YCwTrH1xEXaW32ZzDPb8x2WjShq5F8pZmicr9h4bjCJjrYFJjLUNb2KrerveBNLTbjzqA77TkxmciNwXmpLa1G7",
  "key14": "39V3i2KwrMMAJcAocWfaFEbPELAtR9Z3NFsQNNUeDki3qx1ZqMARs8c33FHsSjvupNCCH2h9dse3oJijhvYjc3yg",
  "key15": "3moAzdpuncuRPaFkTuMcRfLqge2Cmc4SwtPLc3ZhkwRo56PG3CPVTrZKoXd7rfr7wa6ytQ9zZ4EnLCC6dmDfVDwq",
  "key16": "4C6Edtq2a9NeX4YtBRWN4e2MGfryHNpstNaeQymCVUuP2aKqQu6JecRwUQ4jh27XKjcKzriegquuPpd5T8G4c8u8",
  "key17": "4Te3qRE5wMFVZpMuzrDRQGKBdesmtB8FArevSU5sxoTL5UDyZW9Gqdh42a8tkaJXY6HWDL6EtC4xzMukprHnETAz",
  "key18": "22mjMF6vUgAygYy2Brk2r78eU5TacWbcf4Xfs8a6G8dqeG4KAzHMz6Xs2LfLQZ8KYB68XSMmEKwXCSF6WGrvZXPS",
  "key19": "2BRY8Uas4SFGzRvGY6rXV6s8sCfe4sQhscUoUNobbZfV8e4qpXQF2DrzbeJQMTopLA2XnRR5ZQcwyXGx46BM6gRo",
  "key20": "3jBNotYdgDBWbseG9aeso7WsNZ3wXiUxUU3v95HxjgPDbKFkzt92cKmoHUko8k1EQ7LkHangJrorbpki2sWeowtT",
  "key21": "HneSA9vKYJhFd8ahyWBgCAMYVyyijpVU3pygs9Y5sMr5ydBQPgBSJyv1UmdKW3SMZb7QQSvrNftQyGLuca4ovbn",
  "key22": "49oyGfmQYtfgYCtEeXMwpSZwk4MxaKnhyG2Tyz2UxsNQp4AGHyGxTJKBpCCfRgUhPibUkTQn8Ass9R3WyRjjE7nn",
  "key23": "59aMNht3Ptvw89xt2w9pF3mas9M2wT8NaL3vgVWh8uhAQYkUeAoLjQnuuELZrUySkzENBZ6p6UvpnrqCdPSwBQ58",
  "key24": "5CvwYz1QwWNMzr7njzRn2m25aH1QWJa1gYJJAPLo8MsLrwkwHzUsCkQ5GyhjN7GJzwgd8tSxLMpRZ3rWRskceEpY",
  "key25": "4ynLWYXhRxfNkLuhJD29ZjV1ccg12YYjYJcLz29aXinSBNia1EMuvrHFFwuUdrrseRDodQAz5wSDoLe29cHNYEEc",
  "key26": "4mBRF2VBArKnpxiFgYiJZVzaBN7xhUMSAPAa5bog5sRnWpJSmAqzH5Lpi3WPX2pY8jocAhdXVHBx7u3zkYVbqCCP",
  "key27": "5Ggg3fipUQZ6BGLBP3szfZEtxM7yzbqMAUbcLitKPcqeGXGoYjLRAraAPHjGqr85op2GJwCevyPggR4BFyEwGtNf",
  "key28": "5GLNtZFHU1jMrMWPZGmA54tvNka376ndBxEN6wnSEYH8u6C3d1cDkCG5qZVQJeMJuyoFwoAA4wo4RF3NjC8T1BrA",
  "key29": "5FK4KeePBsC2yjNkSoDhbZ46jtuwBkQXiAR7Do1hj6Y8ybXdWWiSzFaBoTTSm3BtigikSkStz6ZCjbGf2Geet7wv",
  "key30": "3vP7Rb1DH7AQsfM3Gfsqf9f7mtziDc5QoTTWC1WPLrjecs7sjSEgtbibF2VUHAJCAyAQjziKXEVF9fa5AC46cadj",
  "key31": "5fXm5bUPAKHCaGoABNRSxjcTKgXaYcg1TZGMum6UswVTPakA5oZNzTqJQ4xFbK83WPZGpVfrdeDCzGNw9tctRE9k",
  "key32": "3yx2F1kKoaJwjE4J6sZMKap5oi8FfR88hHvDShgLVewtBy9hKrH2247kYuPitC91HkchSVbM59EZBv5ScorcT2vs",
  "key33": "2Xv6gy4s8Q3Mnvj8ZFSs1HQDQXQsRqXPb4Kn32ZAdk6sLhYPSziUNUPwriDQVgx7GfMn2F2JVmdPQBKJpVxeuDSG",
  "key34": "57Skh2KnJeSugwJvffchQ9628Eif7VQoDUqd3MMvqq5JRf1pmHVGx2W7CRr691SgiipTmFZ4oPCzQVkr5gJaNGn3",
  "key35": "bDoJoY2SZ6RtjidWQN15c4sJBgDSEVzrKhERFwiRaPJD7TP1SsnbkxdfZS3ZvCfRLmXSUFNFjdaFa1DCEWSJwuJ",
  "key36": "46grMmhYEBuPW8M7Sg6awbqny6SY4kQDx6bwphxwdbEjcY9hBVruKSdptCpBnGw4dPYFMSoT3F95patLmcf2mnsV",
  "key37": "2x15uSZEnz6SebXFuaFpuLa2Wvbc5Wq7adBZay6C5tcQGgy6SXD8LsGKKLZpt3FuPvmXfbmg4qXgAWrxKu21xAiF",
  "key38": "EaBRm19Y76zvnNyyJnFmL7jRGZfTuy3S1d8XnANG7Qi4YFehGzDPRFwJnAMQHA7uZ1xCsQYwTSmSEjSWw6pvYhp"
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
