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
    "64KxxFhRuPXdRDcrQzWMaMoarHy2pNoTXgX57S5w4Ybdw6KyCHeiLYrkbbf7GGkHk9R3ADyjdMUoB5PTnFKhYdLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wQXBr9cc1HxrPFx2hD8KrkWGr6PxwkvB6cXzy4Tf11TStPM2VqnnDZsqwyrtiCRU18NW46mMRAogaGnu5Sevrd2",
  "key1": "29u6xR534GaGQxZqUtSMVBoxBd1NGkjFMdB4E9nzQiBiiGiqtHsVAUgPCKu4vBYZY6rhVbzks4zTnabj6GrqC281",
  "key2": "4UJU6kAG65Zz5dGHrNxPdR4LzJBC3jRPPJrKWyqqazyKXS1pKKycwr1H5P6pyFiyRAMmcTNRo6YgBM3TeDeUDbuY",
  "key3": "3mNNFwo2DEYaqfLtRc74HpFcNqQFZqCt4JoY15Am3Sek51E3CRrtPkdh1QrMRJvn2gJA3yDJx36gJtSHeg2aNZpY",
  "key4": "2Gq4EnbxjA1stoEJcf7JXX13Q48SfkJ4iGguastGqquGQeoVhTvWJyp9SkV2sMFnCCT7ihVBzg2XfpKXxCKHY4zK",
  "key5": "frd1m8G2NooHmdrFoHdcPqLRytz48nr7J7TmAtDfuHkCwRaqXUHp5Gi2QQuMU6BiV2KeaQwEviSvTfGmYhcqBzB",
  "key6": "61MHEggoFnqWYVsoDMp2i2eT2vLgySzWrwuNQKtuvPJ3KD5dSJrtZEiWBkCNS7fEzh924fZXx7k3rpNYE1QiRyBC",
  "key7": "GHeMQVV7wfkwerRQtskzovEtFJb6JxHS1CwFTKBiFV6V2Lro8xYgAsrMQoWkB4Ug61fSqRhwpuJsAJurMLuP2DA",
  "key8": "3HzgapjjTBoH8DEeaAHVL7QXfHeXz27kSANEBb1ixaouMs5UYmD3zyZGdxLVZrUY9f33cmdEL51f3JS7sRLcP3ce",
  "key9": "4KsHc81m4TtdEczsDL8jdGXkqsKvMjyHvSQ6kpLerALuzUt6dWQLE43cXzt4U5YSe52qJZ1hdkcg8RiTx3nDdRbP",
  "key10": "cEA6TXt4YQ7ex339jGZZxfVag5or7csmTZRkJ54qB4JgR7ecqVqXYTtAqW4FdN3vxJxSembzqBDQYvhojFDDayN",
  "key11": "4EXr9S91rA55wzspAePS4V9mRzYYmgMqxdbFkNt27q1ZwMnFzmGYvYWF5QndE1MrCYdsgF8SrL7j7r3kZuJaJqD4",
  "key12": "5tPJJzzoBzURS7dTZVwvoj6EGNosY3Z45Rvxav62SLQvanUYBanRzkodVFBixmhBCETeb2DwGL8MrBSpE6vq7Fny",
  "key13": "63hWhhDf2Hbc8annrQosNrbTbUTvqUDpDWEF7saswH6mx1WXFhd977Wj52SxnSQF1Xb4HmXFNLnBQiwec8Bfk6Q9",
  "key14": "2SDsVUa7ebWU5eSJkMRGd7WLkmXtCLo1ZMbSTxM7EHps92QBQt7uXxAqj4cGf1Ljy3QjjWjmg3BK1vaVExKthKoR",
  "key15": "5ZjGHmeGBkMuMA3B8yjsaqafgpJZCioH6s9nkFGkh3RpSvBMe9uGcZRCJJxZM93Fe38D6VLAoRfK63X3WBdRk4Cd",
  "key16": "4FMfLWRhXxgog6exD1paKQQuoWMMU5JApfbXq7kkaNRVyg5ERrDH4U3hgwo1HjcF1SLQALhv6cAqAjPp7NAcSAfv",
  "key17": "2UXiPs7DoMayWWddFh6VJm6XqTbDLCLUJmvSDt7rdztgkkVDQAh7DCn3tynQXkGAuhpPnNYyEmdHDdzzYsD2uDdC",
  "key18": "qPbvUHN9GphkAjEFyHb5DnczbYy8TCbVYRysKjXsQKfN1R2zriRsBf88cJZ3ZMk3xnu94EAo8UBsCaaGRQQY6sM",
  "key19": "5KmtAwerQr5Pp1f9Nm1ba3zQQysRet9YLDahK5VDGTpnfkVqrgzhfzz2D9xwPfkNYgThQ6gGX6UeJCcs3DqMLKE2",
  "key20": "5qYCusSGamFfQxe79xEvppCYEcD6j66E3fMj7Us8RLHS9bBnA6DsNLr64Vt4Eu4HYnCPtsyeqXx1TbNzuBZNZd2e",
  "key21": "4ACftVYE3dAZEdAzrZcFUgqLhi8MydynzpwRDewnz2HMqPRXPiE9xs38Lo3wxU3tZ9NBNfZfg64pRtDzkdbX9rNq",
  "key22": "3uhwbqgT3QXtBY1uRLEQErkEXNeWWepMvoBoeNe5carkXC3Nuaf31qeUyDXKu24wYFXbWf3pD6hD7M1NU8HV4jYs",
  "key23": "2EzahjfUhDg7zBd7vCVVTKKf7LY1RoRCMVwrjgfYadUvMg1SmUXVs2kiwUSAtBAKcfBEsFRTPReKYwgiB5UVHgJ6",
  "key24": "5EcZUC2wuT4ogHKdEtNEwVKCa5iAtEUDxc3BZ7pFzF7QTL4r13LejYNSQUSfuutjvhtE5oF5ndLC8nw5JY1eEnP3",
  "key25": "EaWCfprWE9VaKb7mAKHmeCsNhtd1BTJUvSdyj4jTaqCi9dGQWrih1tdd6dDNSkr7gVCzEUdtyN9qBPohKczwD3Y",
  "key26": "iotGKNaM9xgWMrntUBru6nwRuRFgui6LLuHTQbm8YyJ7nC7z7xA5XYXH8i37n3eAHMHm6nFsLBaT1Xwnqjw2HKH",
  "key27": "32xhERw9gzcjXiBqc7cvHMzMmHRQjUmKwmpoPK5crqafsR13Gw1GuTg9nCqP7yvWUu76oCvYEmTULnBkz91wPvTs",
  "key28": "2n2ExmYZnMrqEk5KkjhZ12aJGyWxErVAz1C3QT5dEAzCf5gsayJjtvyxapnFqZ7SMrcmDoisXNsADPAUun8Pu5oK",
  "key29": "5KyBZNKvfyDYAn843ZeXGjYcXyK8ANWPz8YGEkk9MPxZwe9BFfLBYSYCRDS3KSNjHQW2Hmw9GQhA7bbhXdwtTn1s",
  "key30": "3qvhtoJrG8Ba9NZpBvCk5BFipm879xBx8X7Pt44whqqqS7Yy6PZKa3qwygAYcaWQevczi8bPmJuBwt5WNmhxFWRC",
  "key31": "4Jv6vxBdbHk3DfQJBXgfWG24HPX3wR4y5ySErApi1X1Lw3VB8HAXfTS7Rpyt1X1UGd83yKY2cgtMEabHE1wz5FtP",
  "key32": "3LL84FzachkTWBUWmLeTEBK1gTGVKvoYFeZPXpwFpLztnB9BF79kqYZUMnhxDUggAtEr55Xq1h6wCx1XHgtbn48G",
  "key33": "2EFJsdYeU8o1TTJnoNbEd1UVUN1ataXLWuzTHgsq1AYvppzSR3zMMYJr4Eb3665Mz11eBLvniUaHBbRYmNMbTK5B",
  "key34": "3oLPvaiRrferxhkNB79UbbkWYfc3kPnYwWcHFHMv7QdZM9inFnUx4fN3j2DrfrKxx5RSjVXvTumqCn4MPTxNX8hD",
  "key35": "2HhPeXNJ5TgkbHALVq3dwPda5sDCNtAAa11NQUzLWCfG9cJzMg8gmav56NKLCW4LQMeodywtoz7utnFYYe6Dy1Wx",
  "key36": "5pYqnTUXuBygeHQde11Pr5SBstqqPLcvYDgppEqiCTijNXTZbQr2p7KiXG44eqShrWR4s5pSuDRFwX5E5eTgaFiJ",
  "key37": "4ndoduuVmtVfWoEeDYDGX74uPfGQ5RBYMwEqWgxny9yfG3p7wgYDWrFxJb3XZo83rg9AiaFhYGdTpXS6ameesrzk",
  "key38": "5FcADV5UAEPjbSp4CicLupqFzKtHa7pa14Xuvq3ZpoinmrWzjvGBy555NAD633Uqequ3r3eaacG5EQWFHu8XrRE3"
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
