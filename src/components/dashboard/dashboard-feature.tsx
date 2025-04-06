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
    "65ZDio71gXhRaxMUSvi8kUmL75vfhABffPCNW354yL3PwHJNF7MzobR88NHJhY5B2HRcJ5nGmsUUWjJ2JdM6TDUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAa4XTGrjPYYnXw1EFDbYZtPaiQoKGMircTFMVMfHZUaJ9W1APYoCrvLdjvZC7DBbQZjKZZV6ap7T6GBQRdh5nZ",
  "key1": "42QN3JAidrAMiopky9Fs2LAi6MfX3FXu8tnuz9TNtFT78539kcqVhCfZPovXJFg8j9PffbatQH4ChHZoZmcWzptw",
  "key2": "5pK157yZFF6qZ6kvpwj8imfLTZ8imSaYfFzG4YTJx2ZdJm4Rp9QPPp4VH8qxLjhRJh1ZSG7oRACFCvSHzCNTXDTW",
  "key3": "2M5LFKSpdH9TzYvwLKVmnUAjZpaWKBzBCnwpb4BmazvFCey6SZuRTGifqQvTdREuuJ14fz3Nkit1F5g7MobaPgZ1",
  "key4": "2KPQSqnPwXgBd3PFejTf5DX6zhLt2EqSFESMLhAbbp1yrt11zn1yLGEWyNnaYcKsTKYsKJGbTt1we8v2FLKMgGy3",
  "key5": "676UxnBwv39jahWQJKWSDxZ8rrhTZzdkMJWtehPpAJbNvPp9V5DsUbZDDXnYgcfFDUqa3RQWjSG2CQ7SEov3pgiU",
  "key6": "2JS4uFCwyUhB7ZxDV6iBrVpshxBV4qLdZohPFibcwo5Mt41ihnRkCC5RomXpcSD1Ae7iVGYJ6Umy9XHRJFYcFqGz",
  "key7": "4o4yWxia7gJZDsMdiDsrbgysw5ycbXnP55gg66rkqYtDR2tVhnUZTnh5QSE759gKHQffn9mNQQ4EF11F2RkFPS6m",
  "key8": "5wxKtanqgREBxBgrjsPoXnKsMeYrMdYksgibkFMnYvNU5RNGHFjC8PpvxzK9UgYTczmQvE5XXt69a815iwmPPPhu",
  "key9": "CAnc7Zg3PyfC9BoyYaRAgcNmQvxXMbqv5a7PYszdrHmuwux7AsUrmWPdzoPmmrJq9W4A3idwZ5vGKGTMmUNRGoY",
  "key10": "36o6JCPQ3YmEpzQ9uCQ5XT72AxY6gnaWGDemKkFaRpXaUmFAZwZgSpmgpo72JodK9qKy9s2LJYv7Vod2nEpcT8gF",
  "key11": "LodWjxsf8sZtm6vanCa5RofxhXFjiNVxTrfcwBQBJfxENiZyFVrZAxzfgjMJ2F91au8iqjsT82vWQpcNTy3BBQU",
  "key12": "2GjKPHz6HgyqojT8QpCarimXE99ZkUprYPpJkC9pieHaAFHRc7DYrbeEudsp6PR9axcQEcr77TmngB9dd2eqepon",
  "key13": "3YedS2Zy6K4pZW6FzX6ZjJ6AtwsuXfnKvatP7X6cw9RQ3yucgg4Buzhme6p1NWvDLnyM7pNqbSGpLcHzbVyp1TiC",
  "key14": "4nHcRfmcMCJ3dDPAA4uRJzaN4awr6pDkafNP8w35E2gexEDJ2ckUKkGWBdj47nH2N5e1DMxBHVyFnC7ZqPmrBaAG",
  "key15": "464tGQ8nWzFhSKuV9xFyxaShuATNycLhrEYGGftboULFvaabP9VNdC4aLH6jr2M9tQ4ZrCYYq1TnYXyY1wzsmi19",
  "key16": "67nmxSVHKoyf9zr4RZmwqTQvGLrStvgwWFh42ZvrTLpRbfUNDxY35wajdPcJLpVQRoU7E8JRSHc9wrKq9jsuicBe",
  "key17": "3tts6yRANa6dvG6PVXgbevKmP4KgB4s6YkcYSYFFqwovymqLJFeqjex6NdU7oh9K2Ec5TDtPPEkbXQek9YVUGBne",
  "key18": "8E2b8YHMKPeeRatGrbnBKwthgHn3CRQDfG8pnrteeWaAzNYwC6ouNUaoKJ2kd3KamUp9W884rumfxBFKq9wHo7G",
  "key19": "4pxt2gz7ks5MXaXfB9Kcb2DRJVqLUj5XhY3DbZZYxGkDfB7EuwjAbYnREgouucAwsdspimTVZLbeu1iNZjxTpyGv",
  "key20": "4QnYgSypYY6fgZ7DXs6jhpMrd6Qh1RzKdEoEUFKSDy1kyNVeyqiKWY7eNUYrSocTZ1a85rxTs3DfskriqFFtcbXW",
  "key21": "raXQqPm859GgyNQXUaw7JTMAiv13bBJ2uScrh5FJJR4XUoYYgNBzYANpJgL225WSearHRDdht4haXH3mVY8rckq",
  "key22": "4Q73Aa4LdvHtxJ93zdxVxwGLTwQEeJi7nMzaPYfMMy2usSV25pcNdpknRai8uAivV3wkBifa7LPGr5pVm4ZdqxZ1",
  "key23": "5qxPgKdwwse7H4a7gJn24YpshfFbvyJb8tCXJw691cFEBvRdpBHSLZ9ZzgXiiWDnoo5idkGFZ3oc3Q4dBPXXjvwV",
  "key24": "4WX6fcFJyuSJyYXqdX4KqvPpGJCLpiw1puW1CACau4ftW1PppqdfQr67V4NURxeBUEKkZbGc2qeHzh65Zz9vhitB",
  "key25": "bBgFLn2hEYAKMVxGutHSBdFiChrRrmyGGhf8JQVFxNNZ4aWtMcr1QuGy3fjHJFZ11R6rtfD8eJCsTkKSdTy5mrt",
  "key26": "MEZ7eYMQDAz9uEJeyeS7aZbFRFMj2g6RJLvFyRpU9BYh53cdekKPb3U373ZKw2YQd5x5JGpvi6i4uDN6uLBbyFV",
  "key27": "jztFVfnf897dKrMbPZAqVYDW1FQNdcwmz3gJAwvQfGcvpiTQLtRzzMn5oGzuoNEsfwZD2odBGDUxPLth8oviWuk",
  "key28": "2RWYqWGbkWZfRsueFt8aEp5yHs7MY5JRAAtoGDi6iMYxGQvdYBxB3mtu9BKztXH2aJK1UVqeEBa52peQN1GngPRP",
  "key29": "5b9vEemHe8UBRGVLD3WHN8t4xmS81zPsYLXvzpPzLx5CHMHKc84n9Wk7Xba5qN5zhKjgJiy1dC2zuD1RWpsnBbRR",
  "key30": "3PgPQUecMoBVQcbJeVaHFYnA1xngt1GZdt5ZfTB8GA6e9qoYNcGBqjN1NNtgjxPxzmFn68XWt4JUbyByFLXGyemy",
  "key31": "65L6TTMPc2zQtDCAbuH8rVDmtNGaMAxVroSVAEEqS1PuT6sZcq11nydgTqnaNx3sB2SwixFRcrRnYvxgUzNGnZX6",
  "key32": "3obrAhFKFhQaHbu4373dvHEVYGxThghn3vpJPunB52yAs2r414qYXHGjve8tKLnksBi7yiDKzoPqWtQquwHR2goK",
  "key33": "63XZnf5EcbhvQJCS6Xj4KkNfADoFs97DpbFP2nTu353r5mnJN1wrCAYZNiSxiTfpkmKMfv5kB8979Gc9sdgxPmRG",
  "key34": "3ysTpWU7QMmEmDgoXrDidBJU9UU1CRUUBZgNhWM6sffqSSUky2bda7jCwskdg1RB2Q366yRz6no9YXcFic9Wgurs",
  "key35": "4SQXStCcRRYmHtHbUEYkvgVJaRp7eLzjfKhAs8hLpTb7TDDKSxKz1RQeGqq3zzAjtKpKPTptUtLgZdD1scJohAse",
  "key36": "4yyxdmGAqEatm2sUCEho8ijF6U6THpy8YWgMa1wNgkT9zpVA2cgQwCPCpE5ibGTkvV9AxjpCsyS7LeJN54R3kqZU",
  "key37": "26uFU6hjucjxZ6UakyxWZqsYC8TH7YJG8f5VrGYewyzUjyZjHVNLZyS84zN56DCCT67oBMtm4aMcRs5efemsuPYC",
  "key38": "vzvgCn3fZPqDFtunFp4RifTRQeo2xf8Pjt9k4ufJEfZypudqx1oqvszYTCWwNvFpUYn1fzySCKPtmxPCsbybnKf",
  "key39": "2gHRoMQc5rhuSyfbFyRk55Qy3gxhYSeZct7SJHAQ5fGc3G6k7UqFScpXok9T7qsVd6prtQsJWqRKo6XXQ2yHKMyD",
  "key40": "2fX4fstucrd2zRg46EQtVxLHNsffhe37n2o469KqVJqMq8bsNAGukGhfKfapi9vkFitvoCvBfbqBitZzVTWGgCEx",
  "key41": "5eCo16thi7c1oGaCcXGGJajTfVErYUQcpS3k5GWWccxCSDBJUqbGS4PSzaAxitPbrGTCfYSpNCbY5Ph7Ts3xkQV8",
  "key42": "2iAbf5UjPUeVSPhkxx24HoZpBGXEGzgMyV5rGipTWUcz9rQWHjHXc9U8PgA72Zadq6aUo6KeNkFy43VhrJ68ZZq3",
  "key43": "2WPhad9ztNDLRpXDvy23tBSJkUR5xaZajHh5h7pry1Vu5sxvSbsARpZVQ3ZZq1c64GNPuugjRiZcVM5CnM5txftT",
  "key44": "2xaUt5vx5oSULsiD8oTPsJk2997Q7tMstL3K1GUqNjvunV4ZhKNMccon3NovZ8L225ngBKQP5LbjMuabXYgLnkJj"
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
