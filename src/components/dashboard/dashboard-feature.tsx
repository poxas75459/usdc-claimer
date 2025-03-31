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
    "BW9r17H3KThwVjiSf9zmxWKNeUZRhuH6JgLx7XyV6xkJhifdMdgBtZQeYeuPEh2bZphdktXa8AsqrX1X1FDAmb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55y4vBjeAWf4GRMEoe2uFf3hS5QyyBkdnFh9k2jzoXz4JUTtyK85mBVLSnzyx7X5v7vFYKeed2SVyUpdzTVFzX7k",
  "key1": "4ndpkY4KRFYYT5pYU762jfdJ3s4KyTAZ1p4sEYVDAwyyoRvELchCrrvZ9bQpFZCXwVLzSqY3khqi1FKYT64MKpqU",
  "key2": "3uSCq1jjDkzm4WkpwffWH4HQzW4DoxsJWoKdVyMKpTuzp13B4tuYkzcepaq3EmMvYV3Ai8hf9DGySzv9MTYw8Zeo",
  "key3": "5hFU8Uh8LLRCe8hK6xs7hgs7sBp5vbmroKaGJNJJcPiUTLMvrj8PNbc8VJryDZr1Wet2shkyYcMXqjSCHMEUU1nf",
  "key4": "2S1vWsGXjbkBXgUjB6Kvma8d8aJYFt7oMecLhBsanEgH8Tw5jQ8Yu8nvSt9PQDbUa1s1kgNFXKC2jQ74mLYvjxX1",
  "key5": "4c9kdFTA5MLT8xrv6joM4Y1SeNYTAVaN16vHKboE5uw4XuWX7HrDQc7Qf6YYAG4Gp3Ac4uRvABa9qqymjFqPonEj",
  "key6": "2DYemz6mp7ovrMvgNsZjgkNPWUrPQuvGiW7iukTobc2EJDXNgKyEcTAzD8X85HAhfjTqMgJeLeVaWJUy6QvMr7UG",
  "key7": "52fTKTHpyryVHXSZm3ySqqsHJeDMjn4nXhAvDUGkb74FeuDmV3vfgKZPPv5q9iYdudCyCXWjgGWMbiCVwvhtqLHp",
  "key8": "MwTxPxxm4FbPWCAHab99iVeg9m39ZyFzxsNT23YkVxCw7PntwYpgdq5RdApxeaYLgXfEy9Vww3CF6AZF2JFxjGu",
  "key9": "2A8kMYHsjjQdefwddeSPy341iWAV6AEibYh6d1KDzmGbKnE1zCniDB9LLLJr6yVf9AsUXrGW4okH6q3eLtnqmjTG",
  "key10": "5SHrrPKJekBg3gnuAp52XaNmBDeD19CFDKz9EhrHTYNeqmJNBmDKXMKaNitCiK7ho5goPwFvohYJm4u8usivU155",
  "key11": "48VdwotodRc557FLgVa2SqdQSXMubTxZiP7YbVhrqiJQ4WfhxrTYZNvfycu8RHHM3Jmtj37KEbjt9HyFU7WU3xQ1",
  "key12": "56tvQCXAHvzX5oR71LoWBGM9s9QtYkzx8fkR8qEyghgq8zSs9ieDEq11pLF7RCHwpkPgcwLaGYj8HcmHjBakpGgE",
  "key13": "dmRGCGXoihRDWYz7G7Ws7YeNfpATGdCKnG4pjG6KuXfNwKTfp4PQi5NcbrUA9PP4u8iwSD9wrQwPhtTeLEKyrQm",
  "key14": "4163G2DhBiXra2Gi31KvDELc1Fn5tZ2MNJqvwfm2YPuNJ7E9xtjBfYHo5Z2Q8Bj7fVbesnBfCAEvaFWheSEWZeqx",
  "key15": "DdFPHtLenosGAs8BdtdvAiy9XTz4EZGT14riuT163GhZn9Ek87NY5btKVkFZvWxX2ZhECxQxv8EgkfyegiLoo1k",
  "key16": "33mkpay6Vfohs4MhKPV7JMMQ1bezpSJVnHuk7v1DGoZivrkLFVwotHtPWu6S5SxxnB89w2Rc3ZjYTFLXz2Mjyp9N",
  "key17": "2oXEFNUgdxF4pTq5u1aMhCn3tyPxnh1P6NCE7Znr88Li9EMGveeyziXzNLVpgKF1KGE3zWBjogi2ofuCHQKiLyG7",
  "key18": "2EPcV1bmLkwnHE6QD6XViTDUU8hPrmugjockmgj9f5VDfUKHeXW8m6SKDWEpXqhAvX49CV1Qz4s57LZFS6w24Lgx",
  "key19": "2eZ2TwJnQjaLuodcY8jc4a4SJVJ4hSfp9qCgR4AgSFV7Dkp14mda348nKJtjpEipbqQTYbv7CkTJ6XDBfDEtZdiX",
  "key20": "23RmnuTyUVqkDmuVFnd5UmC5a5p4Bu8b1MpTKH7SjGN7jjN9iRBytdMS2gtQq3gaYEbEsEyi5xojmRHHQA39Cygz",
  "key21": "2ij7YBfXPAcpZk2zEEwzDdj7x7UbisFbPQogS9gakyqnJ7GLPzjAwKrNGUiCwjqY4PPyzw21iYZT7xHEFBCNzkRk",
  "key22": "5R4utBokEHU3Qi5TxGBNnuSr7bizK2Tk2d4FtmTU6dpDKeCu1vkhrJPCtVFWit75jxy4hnAuT3wViiJ53KH29eW",
  "key23": "2nmkL6BNmtn8nUY38bDQ3gqP6HqcdRC2F7toNsVJktjuynt8QYYzev3n1rC5ufzpAyRsi2R4JoVcjnnfArPNcCYm",
  "key24": "4RunY3rhFGPz25sjCH7ZXEpZcrHMQA2ChjXmtginMUF9KpCqviareEFywRREubQr8aQtNjP8reWJ6d6FcaTZWmiw",
  "key25": "5p5An6k8aikMtkejCsXkAMxBNDbXWgxnj2QW7F9TH22MZEHL2YYxHVFRGKp1RoGUH4NkAFtQC6jSahY5AveqeY2w",
  "key26": "351yTUa2ju5s7WJauLS66NK7xHtN1Y4ypszoybbtVccTDtfUAT8GWpSmjVQ92wzXcKkV7wyVcgwSbZ5NBd2TScx8",
  "key27": "4hUXD2tSWDvREfidkxu7mHvtRxv1Vd7fJgCSEgqmhMk1LmWVD8C4Bv7gMo2ZMJrdoMs1Zyk69TFJUbvhBXVwjqWD",
  "key28": "63dm39aZdxv37H1RgSd1XnH9QC17rCHfHPsVr8moK2QUgTjutRfKm28A5hBLHKpvRpBva4nifogddZ2nFum7QQGP",
  "key29": "4NQyfMUQiHjQcFw9A658VWj5aFurhSwCTcHvmTzjTqjTdo2MgLjQ1TqFfcAQCpFPtQPjpDNeGsYHfTX3eeiLHQH1",
  "key30": "2AjREHQQZUsZZKhFw2dBuFnfN4BVmWBkaqUSFCXfi3eqXniXZLix8ZzVwUBPrrekN9jP8arcMgqaTdtWHcprHGHS",
  "key31": "F3hTgmM5ScRKu62HW1ju59JAM42gKMvomb2BbsVB6Aa9CpWxCsGeiEi6Acx4cz5ytG6jmAkvyhHrZrt9txXfYEH",
  "key32": "3EEj7UUVwE6xADy5nU7HVbEF8eWGQYBputbvufZrBxm4sTQ2zQkG5JMA9q2FSjz3X8Q45mT8kus7dtXgeWSYYac3",
  "key33": "pkXnLjGyvwawuvLDoYXHiu3Rb4BJsvcSpSBAhuNvZP2Pb5b2eMhmqvbaFpsSbxMaMkNKous2AcHX8XxN4aMLtVr",
  "key34": "4vxxujFDKfmosakgGYWZQEuqyzmmMry1FUd8kVVvDVfa5qGwGHFXR9GyzCp331Pabphq5X14WuxpGENd3dbFBAxm",
  "key35": "2q9MTb2tBGWjz9uut5g8FaJa8DQxotaAjj6WxNa4m1GaXsjnPr6UbswDGEjnTTjMe5EDsBJnCMDLKE8AbRQiaDV5",
  "key36": "2Ls5ief6NApmef7B3o16cKyS5zjocE9iyXhx4GmRt13HkDDuLvuyPxkvLP68AsJD7nPtT5zpJsB16rQrtuQYUqgE",
  "key37": "53AU6rZifzLKFybkEzwumhLmvZjChNDP9dErPyEi9KxYGwodkmCNYiRr7tr94iDGRQ1NaTUWRi8sWzRgpKi5NhsC",
  "key38": "2QtSZ6WMHgefV9MEEbWaM8sG3SnVf7qTaqzEVYZfgSRCc1P9DrMSGH2wMYFKW6EQL7CkPtmLzUEAyZQeFcRqoLfT"
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
