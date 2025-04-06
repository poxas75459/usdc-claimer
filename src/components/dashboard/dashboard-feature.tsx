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
    "5ps7tTwPzeiXKWuBBP4RzVENUopHzXyVJ2TnHjLwAKaJ3gmuNtvG9fgi6KMQqEb2yR7WuPjun8eSoW7xBY1Rtxei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B4jXYVrez9q6zxhwRvRoaks41oZxGHp47FGVHjrPjBokNs115hvGmWDXUPBno8VcCMDZ82ZrUpGRyuadi4rJvXG",
  "key1": "5GukrMkSyu1nNyVwdMpmD6n239nnPrLSXvihcDTaT61Snvqkzvo8q7MtfJPwywnuk1oaUGZQWzEYXrm84fYdhcXj",
  "key2": "3WkKPog9AKsQkYAaQR68xGt4RYPPp6EKLQ4kX9prXyeUvDMGfAXXZcwEe3jpxccT2ejV7RKTy6hFWTvx3J3FiGas",
  "key3": "4ngT12S3oJ1FaTuwtNHBKj1YFq2D1sMWoDNdukir49ZnkxWT8MWhu2iMdPdHUENmBJoJMaCJyZuTomGAy1GzUdU8",
  "key4": "4DXxX3qC8NcmjBhrAmtWA4VjYavyNNCcpnJBhdWUMH6BtMrLdMu4Psiv1h2khWGYrWrBfY91D5ALYb4s8sXnUv6g",
  "key5": "54wWqQKrM8RH517xf6i6wQYuHRp2zTxg3bwQ4KiERZKQqFJcCHirLQxGVZ39wF9J6AFoxVEaBPZDgsa8J6tpzcpY",
  "key6": "49wce5v4naV5bx8RXCLCPRVcSTpfskFqjDtmUchxQdrtCWLAf48tni6SvsvFGNwqPQNnwcNYpWMKk6pGyg4SubLZ",
  "key7": "4CTBRFhYMbW5wUuMpMwmN9zhsgBPk3v27wBN2k2aydJnikh1XpqUx8Xa13hEBp2JhxU7Yja3adAuEcUNKeuc64pt",
  "key8": "5mAbjsUKEbLeXTsPhoqVfVQGLwL4Bhn8PRkBYkSnssWuNy2KhYavXHG7HRi9NQdDwhECoMJLzn8LZHDhxehxRMhk",
  "key9": "4NvPmFQCr2uttZ9a6EgmoxK4g71m6Ys7c2wV5gh8pSwuA9PjLKSgfm27SKgn3YUU5nDebk8axftE9m6hd8tXdjbq",
  "key10": "5CBK8eTjY5xumjwynbPDLvEGoLihoxPBJUTScw2EMr4fkomvo6Yk2CGZJbd38MkGiQC8pcMZww6HQxJEdx15fNCT",
  "key11": "3CicQXGFSk1XcRz1jr5DL7Cvjquj87Lw8CXrsGtJ6f2ttswafF5aTLQi879FU2RSqdBotVtrbtcP7BTALCi54ZV",
  "key12": "2qzewBRLxXT2BGcyPHXKH6T7cmrT125WbzrfSuoi6nMENVJ2RB8ntV1AgPkNfoeaGYkiEmHpeFbek6sBjNcyrG7R",
  "key13": "2mwjdiC1irFAH4f4vcwfcggANAcCNWCGRHSQn9kEomPwFpVj9875RXNeqEp3vY4yqEhUqpXCJ6GfqZzyGAmv8nFE",
  "key14": "4rw8JWNh3b7NNyxXF8WZg5XBAheTf77LwoJacRzFzengVksd2rNe5TRwceVmiPbRr88gvsT2Ss8PFTf7sj5dMxGj",
  "key15": "2q2Ai1Dx6ac5FcAzXSQuTVSQ8KmBLC37u4eihDYR7ANcMEC212emeRNupB6iS3XEiBESXTEmsEvtKjhA5y4kg6i",
  "key16": "ufJhnDQUFYQ4oivyarCuTK2mdC1MHBiXVqmo1T2ihYnxd7gfKtgX2k5KxyuF2yH5bKRPcZHTivr5Xu8hHbrbdbL",
  "key17": "5UnjjxowWJfPDsLJ9WEZXV7YEWzg9VuB5qfKCyHWiWSE4MgrVNKBxmYY6RNxWV6RCdTiF1agQ7TseR5VrKxpmDBq",
  "key18": "4FueQXj3M2i16PgGJRUkrwD5jB4Zwx6H8NBKkXNvyS6wCfbkM4o3Ctf3QKnTjWQWCimghgVrbBj9oN1xkWSaD4Le",
  "key19": "3G7TdwsdNXEjvC5zir9P11acneKkw7WuHfMZz5GFdeHkwbyA2h9xWm7k52TmMgFBWksTayxXppc2PFfGQvUKHaHr",
  "key20": "2qz5uEnF5v6hzf2A7xCybnoxJSyZWMkxA4dYNNbFBZ1SatdGCeW4skbGsrceHDKQp4GE25y9jENkRDP22oaA18vX",
  "key21": "4Biv4oDczGfNSjBnN16Z5aVDDfCqvgkMmPHuLAtcpKuXm9hwwnXAPUL54hazn88AvoAF7SC7uCNKFZmvebbjhvH6",
  "key22": "prJxfPcEDHCejsTwek9bxB84Rbr9ThdWrh9rvwyCTstQFSDsXSA5o1fMzLn36yRasT77by6Mv42p3ZD2M9VAmZy",
  "key23": "4AJT2e3LLmJU2FAprPDGhDiMMwEfKdCeiCYgNNssoRFhRGxTrqkj7Z5kfVF7zW4kqcLpW1YzYP94d6qpprDgUg4k",
  "key24": "5ZXkPLxbidFd5ZmaitdoqCuiZY5gEDJBePKViBdw6zM4voSmAJHphnhfcoVefunfdFhbQ85HMmKRxT6w6JDpxDKJ",
  "key25": "4gbWkjMDsn7MShYZE4NzncT7PUfUcEkSwsvgaCAFbx3bRkyJG46ogPy1i6prCDvTDiywrvPV7hw57UD3NDTjXtz7",
  "key26": "3L3pgBNNnSHLxuhH5A6Cq2wivTGWwVHPLMhLbpZ3RPg6PzDEBDHux6gvDEAFS52H1pWCvCL6HKU9ey6AsnwuMCGf",
  "key27": "21HB2AKq9ekW75mTjm86Eu7TqPv76gLWQjK5GURMYDfQfKEVxB37tin7w6LW1saDXRQNs5j6CCni6dvyXAgxkdSJ",
  "key28": "4SueLPjMbsq36wRZuFWdfsENKc2nL3E4m259JYQWbx3BvyFZwAqv2fDoGmzLQa2bARVcBH3r6nJqSV6qbzQm79nP",
  "key29": "5skQsWGqq8qpYekBbwXgEC9VAkSCwbMv1BabJoNiL1XgYCG4jKX1bm22F2E2qMgpJZRvjE5izNgPo9jWb6ZvFt12",
  "key30": "3VuyShyahegWaFHXG2a1bduuKfWv4xGYHhyobSzZf2v9nuNC3a7gPpVSiF6n5GVmDPfv94PvgoH51oMvYarEJ28S",
  "key31": "3XqntzFYd1Z9LwNRdkLKT8i8r56LG9UTrrqW7UsA4rK15yLLFzXigSh3T7peiWMPa7vxYxat7cj56KmghEjkHisq",
  "key32": "2gBZxyJABpxFB2H6d7z4F1xDR5eauzuriwYbhVjZyGKVtwsW4bPG87GxDsLBcLfxBijFj4FV79EymnSfL3pgUKKa",
  "key33": "4nKBmk5hkP6hbCZrhUi8dGiHkHeMpFfEkg2zze8mL57o9y3AQiUsiBUimyAvdPZHUiw4pYL9wGzQRXwbm4K8dNLJ",
  "key34": "pzLRbJFh1eWfbwYYnwfBNtqW4CCwUsbY1TMLL7DeDrEqxqYjxKeQHxZebU3wEdRFCW7H7aQPXGa8jR31kbqPBNt",
  "key35": "3EQe6HPSYUxEtnaJvzT7o4did9BehpUt5tf1TkfAjAKRrH3pgNiwgNEAcgQwDv6o8qmFDUQqw9f2gjr33rJ5jcoD",
  "key36": "4KWE4Wi2Za4Y1gMYF6tiBbKZ2482Xb86zjGbbBT5awGud9MP4ToShDmMcfb7QPeeeWbKPqGuZh6BKsNgxixwtMJ9",
  "key37": "3jpG5bFzmBYP3rWB1zMP5AntQRSt3kJeBiHCB31DWv8fsqNXbNG29YwxKdWkdyFUk8RSHMggajXoucF6yfzjHeWu",
  "key38": "4z1WkNCZDtAKTnG2VHmbKGWK1c2ezRvY6rX5BHZDQNXaFUV3Rm91JFGXUFxqXM8KfYRvoLsArFfL7RehNsBbiEDt",
  "key39": "49tvajTsMSYgCSKGkwRTzoBkpuceYtmkrog1P7nCaUMWt86fkNARj72Ho3VeUhCj1Vrf76XRxJJkrWkKQ4f5GLfc",
  "key40": "52nAwBXrniJwiK53LkY8eQEELUEMgngRuP6RnVQYyLPkzDdm6afeFBcudE9F94gKGTkSKpLBNnT8148YcT2hMgV9",
  "key41": "3Fp7Bmp28JSEDGuoEFEh3Q7mtzw6TFSC4cQ8DsvQNp1Wu68Jx39yuauW8yDv4gZRyvP7azGhn4txYM3FyWzBhXxk",
  "key42": "4X2HKYRC6F8zvkAACWkYc23iLEcc2ZA8tDnZePWJ5ckTLBh75mECbwHcMo14QT1Rx3hzkZPRG4CQKcnctWaV58yh",
  "key43": "5xD14B9zM5aK1zZprR1PdqoZJgb4m8jK59ib2F5Ed68gwqp6XKWHF1CBfXfGqUJAa3f38apX1e9Ngc1Sxv5dMwSm"
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
