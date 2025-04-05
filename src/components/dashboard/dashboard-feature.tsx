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
    "1k1KwdmjjYy9gdigjbBHFvbbrTyBSUEfSuxrNbBPbD4CySVW48Kc463KeLanwYLH6tGywoQpkoiy68XkNNUV7eF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4spb8FjPmP34Yh8S5dz1x6YXnp9Gy8ULAetwYe9FZswftGMWe2MKEGZ6paqKtamFeGK4oTiGxJfgE16Zmtmyfwmu",
  "key1": "5DHaveuXkfbNLvpsjKqfMrRLK5kkY7NB2SnkJoP8Y1RsDJkJQaBuaxLqFLQ8qL2EHgEULkGb7xg8eMT84vYVGbFr",
  "key2": "5QXx4SaDKWuBCWg8z96XiQPfEzUg2HtHneSH79TwUwfvj6bYpvPtQVuAE4UfnRqR1RbQzEwCpcu3RBX9wvkYoaY1",
  "key3": "5XFPLq2AQxetVMsUZGhUeKr98zAKbxrqqaFtj6yUWuocFvx6eUPeZ9N3Fbhfr97owCkZ9KRYw8vBWjHRbs6YWydQ",
  "key4": "XChWNn36hPdVTyXTbBtJG13HUZPUeDBdLRuQLNCdpc5cowSBiDUKfnGKdCy6jq5Ddp3YfusdtwJhuhamVL9HPqd",
  "key5": "25eXcsYv8xXTrgRvFDhjYaQYZFGhBkgoVtYhNk4i2g1v89dCQFqGdZSX9Jp5U8zf8bSbvbdWWHRZndf1j1Wvu98N",
  "key6": "3CbxD2V7sKc39XsXR6rbTgm3UH23sJZjUkRpeFq8dPV6vptZ28PynkygYSyKibHErscmpbnc9gf7shyntDf2XWA",
  "key7": "VL5uNkNWoaztt4HFwRBrGJE4QxyVMRdsj1ky6LH8uTMPtu8Y4kJxi1BRia9W6VDW3gDbSqybLgBST7hLMQSmtH7",
  "key8": "2cokzPnFEfjjwgNo5rWc7MgvpT7CF1PsRS89iSBxLtxE2NsoS32ztYQ1NyHjqCMx5ecX3xSXMmpG6EpjGgaL6aeE",
  "key9": "49AFy9ycnMAEuxgmVZ6ZpWZWyzZNShyTgTpA9xVMaNqUM4nqugsEMtRWSK9V7wA4wKRLqmGFWQWgzthWcy1z3yCb",
  "key10": "3iWPqpsXDpDE5B2iP5FNoDyT58KDVCtjxhqDUN9H6kpKeEBJJXJJUfuCjoAmw6iVhZP9QhMZekRTR4oEzuQem6a4",
  "key11": "5wDPtJ1i4zdiWVoiK7NQH6328EKYN4kjQoxYmipD4iuLUvCggcd8cvki7txjdhPgHmt9GskQ4ttrEZ7RTbQrXY5o",
  "key12": "3uYuWNKpMevjwBEE8NMgTBEYwVTX5tjmP4aoTznihVSuRLU7pEkxW44oxjK6TNtAdvRPzwDsuynWmxWJTVefyENd",
  "key13": "ymtgwzqfWyqnGuG5HpVKbtRQp1NNQewBFDS2pbzkChkYAtsP5HZ8rVo8EYg28oMW3pu4PVFpRnHxw6sRQfoxNYp",
  "key14": "41bkH5gAqsbHJkWf4hsTjDjkzGPg8Sz2FQBmePwWVuLNuZVyd5EtJG7qsT9LCX8UPaShx53eQz9ScKgbPTYc85Z9",
  "key15": "22uBkEF3Rf4MSto8pMVT3AQA7SjZ85m8raQwv2o9mQqvtVFmTp2d11rYKjohksL1e2wMMYUdYwX3muCCBN6tYdwp",
  "key16": "2NxmVJBuk9UpVeoo1gwAv3jxtCy1YfjQbdbZXA9Mtcr1za4Zrjoxif8JC6uyTyKuAUzqGtukwJPu6bbnfjaj6MKh",
  "key17": "2vA5QaTRc4U8z7xAwpu1buT5L42DmwDNidkFiztdCgvoZMVpyeYTUE5Uqih26gMDequZKdG9n9LjxAMbsMnjkLqY",
  "key18": "3tmSm1XkAEp2F7z94ne42XUFJbref9Aw4xx9qis39hZs7ybhhoM4trK2U217SkkGrjrmzfBKafCm2ySosEx74SAw",
  "key19": "4YH8CZ7CYsSp7ux4ARo6wxNvTefRmq41VQozzbzNsvPhz2cYxZTxJpHcb8JAewWgftucR3n4YgWbHMTbBDaFZb5H",
  "key20": "67WYbCLzjcVEvbj6ihnK837X2ENEASGrmiZcizxJG1KvxQhTdCifsaeR91eyCJY16BGAUghFxTXXsF8mmdsCMKWB",
  "key21": "4vPJuVmHPituTfzCLj8DQkpn7cQy2dhhbDXvCyxBLYnSUd5n68nHF7MuqTuGiL3mJQRLev8MuUDKAG3G3bQSBUcP",
  "key22": "5Rrg7FCKRGJ3fZRH6wHqr2zaDFxoyWeuFizQjdC23hEDNSdwWtrH2ntazRG6s8w8Vy6KPV34FTaXqLb5VsE5bkWc",
  "key23": "dzduVSk59ProMr3ZvFidiXdpSj8njigwaGgi9Vo3RWLhP1FUH3hUSM6ZLKKsJJ9k9BJdkUsvCVNiKcF6dtrhYSe",
  "key24": "356m3ZL4yz8UcMEWaWnKKw6oB1gHXjRkxybtPHmjbUJnYhFGvPtK3VZEyuy7pV9fYzg71m8oeuABpiR8aaB6GiE3",
  "key25": "suob6uYeXQDvtGF2do6pPByi34NJ4j8dzV6NRomDmzw2ePqaMfoUoCgUxQ9y469GDpuoCrPPJ2R45tAGHKM91mA",
  "key26": "5w2s82vbqA8bW29i6S6dVJ3uzVALQeB6rpFnMjKMfV7xHf7zPgJagw8AgcRnYcCx6wtLwHcdGJBH6DSNZrwic8Vh",
  "key27": "UtkYrz8L27eo8wC4C98jGXimkBfQUY4ad5B4ePq3cwh7i4orgwhzNVWL6bBCBzHH7BdDfmhhEMQnT7nrfDxuhzj",
  "key28": "4T2m5s8BbyLDm1phpsNwzdEhSp3yaUdvdwZCohfm1qdUv1RLJqVE1aN6X94AC9CtG5vNrDMYcrG4xWzHFxMTrvtj",
  "key29": "2bA2HCa3DrV1Je9QerdLfptVeCvtTD1PwL8P1nqTtLAq4mrgTs5tCZg7tmePf8ARg4hKmhWK5Ex5yFmxSjEPXQoE",
  "key30": "39SyDk4h6mFp4JVMPGwpb3Hkf39ytmuLyEYrQDMbyCJmZdPNSbJqio7hpbqNM3ddmrGckvk6tdXKZzwgSeDy55TR",
  "key31": "X5a74zs5oNj1gugWPnPJ7KX1sPAwsnhmqhd6sK3AwAn2ohHQPgaEiY5tfbpVirq1XEhTqjqUAQz5o15iSSkQz6D",
  "key32": "5Dk77GUMztpTeiG7Pggza3SsCKSftUp167xrQZW2xA2NQCwmSME9mjvAgpVgfsySz1CWonq4KfA5NSbSuQNJcEm2",
  "key33": "5hwpzRud9iywcXeBxUvPsYSKfTYk8XFSW4kdNsjriuqy6oyfmTv5tAs55SUxWz4bNEu9YhasHnmLYEBBTk8XSGYr",
  "key34": "3wVeQZCgcmrzGyYU6eMjA5V1kDVkAh8X36ofU5DEEwfmYktEJuXt59o4rqwP6ghruhwAZcu46gyaDDx6n3dQ1B6Q",
  "key35": "4XMxrjeF6DYd3r9iFubjLMam6f5ZjQKgPLSmKBfD973d2E5cLk1TN4dQLf2BmAFjX1z5exFLsaivzBR3EBDpLhUP",
  "key36": "3Ziuoy33pZjeBKyehajMdTWjYz5zsa7APuVyAUtQ9zoHXpEyCpyzgKxBtdL6iDuusLTQN1XWvFaBzXEP4UAxTiVF",
  "key37": "2Dc83j99pyGFH5HtGCGFnWTrLxHbJy7pHroJ9BCLGWw7zEYQ4UaDfANzdUn4qFrSTQm3tNAabcnibifaioc4kq5m",
  "key38": "3ahC1XDdd1fxurzecDw2DYrgmgzf6hEPf38H1QUkSXhm469HB6goGwRm1zV8Nw5tt8MK3c9efHsRZCpUEscxiBKU",
  "key39": "2HzUXd4dHBuNrL7j1FjRKtASe668Y2LAJbHPNCLtncnzaSyp8svmtYdvVGp5Ye6Ba115DMV3WU58T2FNAbxTeT7d",
  "key40": "2k4b7F13toKhCr3xyuyPnbJPbsdwfmneLhQkvfP35aV3tQyCrjYHXHHa6EPbYnoJDA8F2Wt8wj7wp9ni826iAKEc",
  "key41": "5f3GEd4ngXxjrCz2ZPKXQmvvaGPLJ7jrK4zATm4R9yAEtFofkaiPBvmbUyXpgn3wDhwWQ3WSSizUyFN9Jt1wc3fq",
  "key42": "5DiajB75q1jDzjUpgWhxDpgXn4YUgorHVTJLCn92KvaiNvRuiFWzc9bn23YMagy6fR8CQZZjLHAQ3i8WScJ4wnrr",
  "key43": "tr1TQvfHYQveveXvqJvpyDKLzaSk2c41FfFeUq3pGqzmsBPwY7gMdzKkChtM1vHtG7jBGcSet9z7bE1tNFuSN3e",
  "key44": "3v51mNdMVZTiMJLD77q6mKPJ1fjfgrC2NQ3f8bjZx3JgGKmPmfKTe6t2E8FskFQBdftc4JXqVTCAMPTWfRuzukYq",
  "key45": "4Lq74gMJb6BEgfyZhAj6mXfT2zEfp3mHcQ4R6uzD441Kg6SKtNtHTDtLbruRqiTY45KUvzHx2GXZQejS6CnmE2HM",
  "key46": "uJi5wU48DYBZgJHGefqCp8jTaFN1G6MuTTZWDb5xZcEfdHnJeTFPtmgBAWWSzWp6dvfbRr6fR3jzAvDMUSWP6Z7"
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
