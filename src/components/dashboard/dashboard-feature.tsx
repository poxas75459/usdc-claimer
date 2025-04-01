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
    "EMWsQjid7pLqgJMz8eNSdT1qpQxQ4jQ9oohCYzyxM6UcpQiqHm5TNLvYWwteeXYTqY9yQatsfbVwfGKyAQ4eFwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2REgH4FS8dr6mMt8mAVXHmFM13gWgcDkPzhE5LH2fpibF1b4v4pn7ggDxa5WvEtT9Db62shd2gihaUn4vi3w3mmJ",
  "key1": "bDKZmBydT8rgnsU4FoEeWeAZxUkQmgZZQCbLLKh6ghz8ShmUiNVJ71VGZtScPdRqd3jTcY4CRaqBi9rKEXEWpaf",
  "key2": "55FPEVfCTgnMannwp7Xe4vUVAJJFsRgQWMFcjruSqvsGQHMiJohsZ3qb16BNN5q4VRfKpocjUDiQYm9vXRJd7tzP",
  "key3": "4TBXoezzvC99q9Lc5MfciG2YpppN2dk5HHBQQPNeE1DYNDmGjjMFkc3uTmqpkeLwfbrfWHtzsMh7qbaqcgqdL3GT",
  "key4": "5ni7NDHWdd9NzD3QEapktViJ4ZWry6LixvF2omEopBhv9YomZRGPTuVdYu5iubp6GJiswEMMnwFrk7H5Tm24VDRk",
  "key5": "2ofYXQF8rTEqVWie1NiAiZznEPTe7bBHbwW6mRYS7sKYuhrqUCzkRUj6XfbFro5mG1ZrbbfkpV9ybJcDxXfxWaq9",
  "key6": "VzW1bGKJQrxLSCsPGdgZLRfwhGyZpyNeLqSmzhbVMjGSc5z2pn8H9dmpz34fveU1FNc228spDKeoauMov1vyKmn",
  "key7": "5wEVPwpXhy1JoQ6VPQs1FiwTFhj78xWzzaHSLrpNcqU5r7QvGG6aVgaeLM1NumVfx31nTRsNXMZ7XzxJSXsMP1io",
  "key8": "29w8EGR6Y8jCRTAU5bEdy6zwA4oiJK7W59gnyQFHngnWe1tbF9HdDGRPpLkJVm2VnP7Uvv5Lhcgw1HxM9EfWuKBQ",
  "key9": "2L8qiAXsq2CSgGuU9gxrByXcuwCMZ34VC7LTiG65D5DwTo1EFGx92WAcDJxRNwhAGMj3vBCcRJigVCZ4jx3d4t2b",
  "key10": "5KTf7a4KGophR29iSgpaKjgsAdWrdsy8WBcu4bXihQKrM8A1wFX9eG6FLpPdh9YZpLFLtZoDGZt5iyT8BJn2p3XY",
  "key11": "4Qx282urLGcRMnDBvctJx8BQD7YKCw4tmka2GztHpBrAN6sMJKQhbas5AWPGHRuTX8hb95TJ19c4wqDktMcVj94L",
  "key12": "3Q1eGP2VSSq9EWDWjvtjXX4Pc91nXX98PceJdjnp9vr5iBCoqq684pS7HKV58XBfyrJdKGxKrN5p7tZAvyfnGfv6",
  "key13": "qz54Pvw6LsLVWmRn3pKhjqn51hLef1f473QsQ91HHPTtf74d63HRN7ge4gt9n4v2LjMFTGiS8RgZFbXt7PT42c1",
  "key14": "2PTD4WtdRSmi3hY7GWpZvvc5t2usXQPzzEAyzA4GELaE8vybEqK2zDSADJHmAfcwsivqeF6utLnFjf1rJYPjTUPw",
  "key15": "3mdmGFUbNCbNUtLPKWYgxMW9yAWua6vdc5r8XYv2Cqc4GVQuGGGfpubGoujQGxoNf1Hw5WjjxqrnJ5Mz7M6TM1Z8",
  "key16": "kTP8NJk2w4yqeSztBTRcKjht4wNhK8RCfT71GKNqhX6X3CTNcgTQFPbn48VBnckEzXQufgQ28DM6weZ5BVyb1qU",
  "key17": "35fa263Khq7ABVT4BNyjaFyS7qRqf6vErauNMuSP2PKRd3QvgdLES5fMkNKwweXuMirC91edFWfjAEMUz7maLcUu",
  "key18": "41S6w3oR3MDNzLVr8u8oxb5TVLN7fLgKUYz6bQN6UbtfddNGXUdw2wYUct8j7y862PAMrjYdeNaim826LpGjRKqP",
  "key19": "4BQmD82k4vk9yTCWiXGJ4BqqQDPSJP7ZuRzJs82FWEgxUkBtunA5FrKmoGg78L1VvR7ce1uQwfe97gdmUa4UUEFX",
  "key20": "DPRt1KrtkWUpLL8hDzMULDRKLpU5E66mYSkVn6xwEuAaHp8FWreqpihFGM3TNmTst1rAt1m2HzJKjrYHU3Sfemp",
  "key21": "4m3fXTcvqcwGCZ4oXbaU1fiX6DiSFn76ELTBApZ2A8umQY3eZvW4yEF4eCWBrP9tKS9fynWUTfwnAedM3xvaTwPr",
  "key22": "4fTzsrRTkBxz3MRBBaVpZwv13jZ5B8m7243uAevqYNzXSbNNxDkmh7aSWv54koAiVTRcWm1tDUg5PizVjHNAaENg",
  "key23": "DPALxsoJhdcLhxrSx4RoFbYouAjz1XTQtSvrC8YttfDowuPzSALa9iJHJKUsbHVcjR6SY7S2evicwZgpicAbDYB",
  "key24": "58VyQtwT6yEhJLn2SgoRSWUdFtEY42aLJZjTFgw55ESt6AR2vmdej5VMrrKhKAdnKZbSoKxx2vyYzXbQfSqCF3B",
  "key25": "4wLNr6WUN4a34TWQL5wpJR3aFYLEPEfAzE7TRgpaGrU7E2ZKuVh21becFUfL8WaLvNYbZjFuGyEga966MYLDXeuC",
  "key26": "tZvVCWhNVnT5veARvRV8S3Y1vtqxd8CPnJeR4CSPwgWw9pRMtzSUGERtzGCRtZhzbgYfigcHHoW2ubwMc1brGpD",
  "key27": "3RbdPYTXP9pe8sNoW9ChHRpuWxX81NT2nwGNSR69Wzx7VyKmP7L1mQRYKJ7CwY2gfBhVjULZUmyVUPz3EBqRYEdy",
  "key28": "967TJjQ1Ntji7gnEcscFreSHafKqTYqJiqNHronYhHxcBBrDQJcGnTAzp448MU4eGEp1QtuHPm4rCnnfXy5LhZC",
  "key29": "4VrosEqexxUPSUPFYev12VAA8GqqPKWSU5UGZuizfbybTSjRo25HRN4CQccDrB2Cwc7mp9eCjqWvdYgXJMhS4x66",
  "key30": "3SfDXKHrnUujwoxghrxbY67PoJkcZatnBFvrq5Xoc2JMin3LyuVc5NPjrQfNdg8WLfFDaofZtxCPpdAv9U88FsWs",
  "key31": "2mJnn5TcS1rwfnfHqU1DnPTk2nTD26ZNHVPsJcksesX7QHajRhHHuQKauJ8pue8A7Axkxq9WBVqhejHg83RipYGd",
  "key32": "2rNdemy4GWzAJSrz3D23dF7SHKxCazcgxkGW81s6JRaV6oxjspSaLrnJKAmUW6Ht4Frvf7yZTjCLucbXiS2FEjGW",
  "key33": "31oGibeY1eVPFJ35nGTcb6H1dSr3oKuwTW7HuBfNnD7RMGBqSUvT6fakC7U7H3RgYegZDKktizZP1ANtBoZyi34q",
  "key34": "5VRA7guNtztipHMYpPvXGvybgyyYwi1gKajHdgqEHqfdjRGz5fcLdqQ3RMfVj97WwTCrPXSEWxxGuZw3kaPXsLZt",
  "key35": "2ZWg43VS3mnk6fZWTNAb7pb4CubiFUC9wtq1URrN2zVGGXEJEuh8zREfnmvwnpRBQmQRA3Rpwdxe4bWfoTLeKitn",
  "key36": "zs2Zv1yb6yrsULdeQwGkc6pfnADb5WUqTFGxEAmaSYwis6GCmRBbZxzfNDJJDsDFWVADLzBdNttMcv3esKj3CLm",
  "key37": "3AzEjdCzZz43wJjF8JjENKQG4dt3qeSoA7AE1ZWWSs3A791pVf3ULuN74EvkBf263srR4pg7UtRpMr8bivHKf8Jv",
  "key38": "2ubmkddNboAKXjE9b7wtte3r6kWcFY5SfzAF19n8iCacoL3rAC4gDwBAF4qMKFNV4JrTnknL4k3pCAN3FAyhS4Pb",
  "key39": "4q26PuwqEnrJWg3ksajPKL3YPfQQBmpE3wGTYwi1hWP9AvhX5UpTqXXSHnEL1nejVkdaLHWhoUTrVDkgaGMHDT6z",
  "key40": "4XjCDdUoXbvHY69YMQ4BJY9FvR5u9fBZPCvicbHHYYP5RQfXuzBSWTZqQ76p1SuSzEcxvVTBxMKrRsaWebqxPca5",
  "key41": "3T9tMUmoK3TcFJSgnPr8Rgu6NcbceSGuohAvzExNSH643EPzaDNK3XUym1kpEPDkjtMn9iQtRH7Tt4oaVKTEsZX",
  "key42": "5ppQb7JPyguEjbKSqe4KqdD4NiKp8gUhwvjphdPnu962VwvriP77yYCYRZ9HTHdUUPgQANY2P8ruGJxupeuBiUTN",
  "key43": "24CN8CfrcaddPQB6VRG6oRErZPpqKuNcryFJV9pHJdgcwGAd4STTdEpe9CohxCv6gRMrNUzyu9o9VWHfNzijChgt"
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
