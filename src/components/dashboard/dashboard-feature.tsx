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
    "3aWbXBjhwDV2iLUjFywYSXNvSbSdxC7FczRUqqyoEUNLY8s2oj1uPP6VrnK2tu6QcCeoewHMv8KiecKwbZEsxpXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SvJWPmy1EDRMeEyzY5XLcZSJmyMbftjTndXw1MbuAaiGSv69u4go52wdMoHZqUxA56gyhE3BMcVC3SajaBYGdXv",
  "key1": "f3bVJ4BGnxZM4K84R75MvWDsRvHT42RAaRck7tFGSBqkNgAaUZzNXeW2uW2bzP5pT7q24NWStQGSkVdBMhWNKzK",
  "key2": "3XgiRTuNEQQac1m8z74s3hDE1AGHUyTjcHq9qLqu5GubGGVVMWcrqk1nMFBeuhK7HCGYwz78XqcBPt9KzHyHsSZ2",
  "key3": "2Lf6Mzicv1fTmBZAXnwgRmF56USTF2i4siMpGS2twLEpNAzWsGaXmxZGYR9k4tXRAzMEM3YrsN2VafSiMZNZ5vjh",
  "key4": "35Lt7vySSaFPLiGNAzZfN7kerGGraFfV3vg1BWa7tjsU4WyVDL8g4WNyUzP96SNf9f92Mi3BJ5SbHXXHEFyaRrc4",
  "key5": "32LaiJ6SSpS2NqoDEVob4Tp928wNSQoAtakLWi7sKCXGbpY6yx4NX6GB9AvqMwvrdBGaxCsL2AN82uUpTxQhbM5B",
  "key6": "BRrs51DWWMnW65D1hM51Fbk7uHNY61Siommjzf4gDYV26mEH6qwHa8H7Y9msRJ2wB2My9KPMP4rX9EiDzUArsxY",
  "key7": "57sHyvroVeiBp95LWpuYPMPK4NVG6MJDUf3fiQumFgXmKqnPELqo1XzKMBXi7UdyVLC6Ne5qsC1cM9CJibyRbeU9",
  "key8": "4CdVoSthpFE1g3vn9vMqDBKEkSrRvAnRwavLdqzDj4r4PrZeiEiBfcT1VN2T8q6GiZ8zJacRNkwHujnTSczgbR5P",
  "key9": "4LLKCL4zGCjdbTv562pUqh7ykbKUWPST9nGtYMYjb3uRtUv7TimvX6FBvavhAdh8p6p8YkYUpQbuGB5fbXgJjVyN",
  "key10": "656CpKEQhBr1WWD9hhAtHPHKTDEvkTJd7Tsk3NMcC3S4ufNApNyUkyqLSr4h3TXHZDED8YSwuJruKXzJUcrYSGJL",
  "key11": "2qdKsot65py94ZeDmt3XR659DbaSD74US5NeMmBp9AUM7z5Unk3rkcN7DbBM6YaC2FMuiBGofx1r7fUE6PmtaW2a",
  "key12": "5hvYTe2ZeUcNuqeNxn5A7NDQmrfGtD5hWqXVhzgu2znV5ts1Pf1LKy8NTeXN5nzw98XN1YE6v1AJ6RVNnJ2qd1fC",
  "key13": "4ZmUrbCuLVcvFLoJ5CSvgmDP73iteUeAA3EEJV6rw4xLomgj7DAF5vg4XrTjZqkWpLEaVk3SBNYFY46FtfsQtyGo",
  "key14": "rw8w4cfNwghS9N2RDPb6MXv6WDKMganoyodmzfAuzvjgsYxfj5SCWna1qpipYCPu3DD9Z4D5Rrz8r3Tz14dALtD",
  "key15": "GQWWnFynwTpLQmPeC148N1niHeaK8ySDUgyUhaRhtnw9MirXTzn2vsu2nnjvsdbTCjXSgxyAcbkgevZPRwwswMu",
  "key16": "GgtrK51wV9qpu2YeJZbFKDgnTrfLT5XGCVDyLTaHsDs2evQ8qmfwZbS7DJAASRdg4UzPHXgDsgDqTqUUXM1V39H",
  "key17": "5ieRyTjzpsXoCBRXxWGZcsStvF5EmHyLHqzo2RLzQwnma7QAENWUXB5xTPdruDtehWga6ZoHa3YH7WwwxAPFYHpa",
  "key18": "5F939JGc8T6tEXTBKsYuVQzPgbQJwtMw9Db45uYscQBvNJkazimiw6Auukh1gd8iKtXbgmX91FDmTZw76uL49CpK",
  "key19": "AnQmYLqQpzGNiUHqhdmSqJ5F9CrVMUQRQStiDpEig2CtiLf8MBm2U7mF1fds1RGYA9T8hKYvA9MvmYdiBD67oLP",
  "key20": "3AjfZ1tXgLk61FN7Jxv7QpdPQmVJ9yBQrCacfhftK5anjt8BFo9Lv3wPS5FenMB5dJLBpn3C22bLv2bDiRKwTDWR",
  "key21": "2nEHwnLQ1JSsdnhDPBtCADX53Rc24BAg3mNELWCzZc6Fp5xiPg3WUwa3WVH5QigLyCkNAiJyCzde39uhtBBvwAfB",
  "key22": "5xmHCNorXB6VReGsvpTyorBe3udx81Led8TgpTCURJbfzJzBtNLHMf3nXPHtFLPmkA3NNZuYxM6oWmS13tgvLKsP",
  "key23": "4FEd5EUD669ENySn4bSVFJChsMZVvYjqNGE4yCcdFmEsoEudqpmCMFjthyZURdA4m6emzwnk87NSJCCAwti4S2pg",
  "key24": "28bmzNK3uPoBcJwhLgkEzWCz9agKxzDKcGNiCuLUSYjo7AMm2D6wFwCE9wrzXG549RdVpQusd1PWZMefThSvGrYu",
  "key25": "5ZPkPb43Cj5fgsXziF6aGWT1PhTCiFZWY6Qrw3ND6KijfNvPJa6aYaQV9476s3XNCb31oPrjJycuwa72NPMaFeBf",
  "key26": "4BrfXhaqdw8tGXysh6FDH8c9i8pVLaU6N7QmLDHTJJHH3AUuthVGk8u8YC1havDCW2MmozWfTHLCQLnVhF2furuf",
  "key27": "2xSSrc5Tib6dTCqGNa5n9nyhfa1XF36jaJzHNn7r3iZSPYMUgVnrZtegE1zRQ7wmvzovoCkpARMzT9WeHdCMqib2",
  "key28": "2NztAvRUvAJGur7FpMd1r6kqRf6pxSFPCb9mbtAYXurrgyhoRcjg4vJkySxPduEzQkS8rW6zrZnpUVutQ9YHSj4N",
  "key29": "46EC3kkSk59hmYrmqryKGurJT6DptNfGGxaYaq1NSzaudjEHuBqjFUPywU9cSYxaJ8kXFtxgLEv7ceM9rYV43Vrz",
  "key30": "4jerkJzcrz58jR9xPdqMLvkB6cuT946sbZVU9nh9fE8xMmFAKsmQ9NGLa3ryLrBrHHataT7fkem7fkdAmJKspEZs",
  "key31": "47zWkzh6bFBBTi9p14WDSGkw924jQsC8f8sMMWBDiaHqF3ZePkw4v7tcbuHkeYzpT1jurLms1L7qhHVJeKKKLMQ4",
  "key32": "FQM3QgyCwwkoEFKfUf6b6Zbsv4zAY1mPYfHAQj1kqCCw1usJ3HqRoesL42rBzwDAtWy3Rswvym2wVWUeatHQ9Cw",
  "key33": "3TUJTHkx4RKsx2hV6KW26pR5b2LjZ5rngtKYzY4xwD8DwtMnBagVt94RGxDQD1JjiX84x9xUcbkVQWWWwUuSRw1J",
  "key34": "a7wz6A7kvTZUHUqjai1zcGnwZNM8teuF8ytLyFxThqBExaTwn6JpJyLwFBomc2CQcUWEEaMEa43BVi4W7NLUaoD",
  "key35": "2sgi7m6H8PrwydovqKc2aYZKNrCeQtq6NXJJjbEu6aRcMLYjSVArRKSeH2Wth346Qtq13chehtUSm6qiiPjgT4oq",
  "key36": "4FzrNcAaW6r46SQcnFwaiGyG4Fzk7ZHKAB2azBjhiWs5i2LyTMp1BuaQPCKNR2MUrz5afEqQrT3EDWNPDCm4o3kf",
  "key37": "2Pmq6geW6EfemhqpUYX3ASiSHYQgdc1nWh8bXRch8BAq92Nxe4beU9JTEPNdf5CqbCnc2wzk1o5dtgVpryP4GwLM",
  "key38": "c2Yujx4jM9skPKjkdajcSzXRaMFZtBfVEbVEtypUJiUShazNE7wyAXPLTw2Nr12chKqCL4Q2ovZKCJMti7bUFcr",
  "key39": "4oEjqk8G3e23xomm2NCNL8UeFH4NdU5CNab5MVvmzDuEwxi6aV8wqnntJo5yNNmmKBH4nbuMt6MkA17ExRotKgiF",
  "key40": "5JgeiFbLCuwgB42A2oLmD9p96fBeXdUa39QP59yLnyQrqPtN2xZ1HGMAGGfUsZ6HswqsC6A5AhMk3ZCL8RnQKGoH",
  "key41": "3XstcvCH4xAdzFCzvAPv8nQxhpgo2UytAvzD2WykkFvXgYH8zLyz88DQG5Ey4jDsy2HCi4nKcz5T7dBBXheWex6j",
  "key42": "5gACpHGB4SE6c4vRWxUDyooMEs9Kqvgcj1BSPqBa4oi27y7YCvwVPmuzNmoUq7ynTkta4o1GmtiFDk3zdQJgBCC5",
  "key43": "5fewT93vF1qaTuYyacTW9Lu3Xiz1gWUZUtzcg7E7TAAeE8Dai6QwVAUU5AypXXu54MSF6c6Qf58toHk8Tc8V6m96",
  "key44": "RFmAo4tgoTMWopdUb2nd7Fnvp5X7XW8Kk421eQ9DnfaXrF1knxjqEE8cYWwLggRcdu4w4huNi5yrHB7nFUfwGkk",
  "key45": "4sRKPHQwf5XZkM7fvZig1jQJGDh8o1aKLdGprLYoVj4hf793pAjLPtDv2DrJDXv7wfcnp9VuWzKmue6A6hKk7e8R"
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
