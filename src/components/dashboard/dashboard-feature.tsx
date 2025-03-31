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
    "5PzhKeR6TnJCVt7Mwj8xMtmzJnVseMdf4BarsUg26xPPR4yDgwqDWDDm6o6cm2yGvhqCunBHprxqvzyfHVjD6ZHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hcp1YEwLUo7rwDeBhZq1vNZmDYF1PiwTkeWFvMqxVGZFndRxFUxn64AED9Tjge1r9TJegW816AxSnVT7kuA2iHj",
  "key1": "5EPF5fNpP8pafee2pGoHxqdDHXMudPPrMQKy1gQ1GxUHVUeZFaRGkFzAteY5JAQSyCiBkAyiNPj6kmmk1c45JCmd",
  "key2": "xraMMUjYNpNMcDcJZ9eYGwmYeFKmuicNzH62W3uPUxWzKxou6pLaUGamymb8njAb9dCDo96y5ytc3D5dJmeFqGL",
  "key3": "3f1R4QoUGbieDRN7bDQyGj7PZCTMgxADNMyaVodjJKLri6A2wKMVpczwJ14oEYcYCW1N1FPPKwyffschLWVCwvBS",
  "key4": "3G7xG6VBJQhvfAPT4Z3fkBLB6JT9dtsej24p1MEzkXTJjhKwVmxZxzexA1uNPTFdGvhBhHZvJ1Q3fyCcj4pcQejr",
  "key5": "25XXdJ5VQddfJoArC84r5hiH9ZRRAYd2GqeWgxpbm9UYCDvrHacVNDZkQzBL3K4sGFySKbUo6rZuvWYrP8VmM3CS",
  "key6": "RovKdGmSNe8fHBDBCTpABDYSuiFqpuqoQpWq3yCkUNWTKDfCMtmE3Sh3yM34K8kyUefnHCPkxTXeRvezT7THUd9",
  "key7": "r2VccCSnn6qkSJWTE5ZgLft4ftuKChUx29bbA8L8Van2ymvag1LLH5YySzBKgEcSaAgMUh8yi59KuVf9DschSE4",
  "key8": "5Vs1nDGF2KUTeJLVJa5YKKCsD1A6jsnit7SXjzQXTFsjjWHsgnYTnZ4CgFJyxSKmpnHEQxd1jiJj4RAdvEZQRFdX",
  "key9": "3qh6zc4MZUwMk1vALH86NsU8itM1JgXMhwfibn4ezTsM1tyVuaGxjBmScRZKjhGX4t6g897zPkq6VZih3Vyx2NXx",
  "key10": "5kKp1Wb4FYwDtDa9apyuEvaG1yGjdB3vxj2YWzeEj73vHNGV7SmbFh6WXunr2Usqa3CjKdnxz5BAePZmQPPevqHu",
  "key11": "mRNvCwrE9NRYJKHPvF7AD1DjLL67BfmDd6jrBzR62VmsWeZdB2ZHB1RYgXuPLZiEiJ6j4LbGRfkbEuaPESRx4RL",
  "key12": "2kmuwtf4EfohsuKMb3vuWAzw17xf4s1U2gzyWLA2pivqKkJcWNMvfef61hkYzusBmqVHSJqRB33CXoeVXc5MbFN9",
  "key13": "3VC7PABFxr33sQkKQUZKejR4cXEhpvVvBWwLP2dcWNuFFUvktbipkoqcVEobGjy69Hq5fwR7tnzMcLBwpJL6Hxk7",
  "key14": "66D32wcNf17sytfpTjm86kEwzcxmwCevH637D5gVy2jwXiyDeB8UzN6XanE7RQ1bCuLC9TT15K7MJZQUGwds7Gk8",
  "key15": "45hLKFWqfzHebAMdGGexw1e63jzsXJ4QjgMkusRCzwunDRdb9Fvwx7a2k3rpQDwjNgHp2B9XQ847hmRNb7JtgY47",
  "key16": "5yXL69AnypkyKkjhbnPJhqAgYm5ySQdiBATUhbzcz6m65eLu7J3ici2GMeMMj43EJHidTqNk42YCejibcXpTX9Vw",
  "key17": "BE75mJEPjL5regAnK6bFFfjPY8RY82Jw2pJA2pm5nHBAhzP49DyF2EPNmTiUdmji6MEAGheQxEcP4HFen7uR4PX",
  "key18": "7YgjGWhj8v2DfbM4YeF4e2TbLzJNxpz8oJGmLZHb5uRBhRxy5nTyPuacsffHs9ttTtEBBPHUhULnVPipL1WYrn2",
  "key19": "2jASicmNB2cAMAbkc4kMfogYoURsvYB9g74G13Hky8r9fu51brtUUNUyCodPzgLo97vLGC3kfqVNtQWKaiidH3LY",
  "key20": "2mRLMKUwiXUsN19ktRNDT4vTGmAoERQhoyQPfyVuhV5bZxWVR9qrFX5zdgRE2e1y4tEf9kqjiLVoRWEJpSZkpxko",
  "key21": "2yT52NJaG2EZXNScergefmF1S7jH9skKWvAT4hcE2iwemRZ7cDrszA7bCP6w18bHNcDWZDC5BjBhQofcgezC9Xdv",
  "key22": "3FjxkS8iso7B9AcLQ5nbQYrAdhRNW9Do3MaCb4u4oY5Vy1ZoW3eSonNFKUnUP6P8vpB6y8KW7uELpYK7D8Rn88Xy",
  "key23": "66mLPXR8amoxKGaiUw8qV5PWEHTrFpFXCLtiCT8RECT8GyLmWgxdUWR1YfZMjbPeT56XRcyv7s1p9voi6ZdK1sK2",
  "key24": "5QGqThs7f672J8HiEJRWAgQqmAYSZnbcEpWuR1r5oMDMK3GE15xWr6mVdUgqg1W5YzeoMfR2SpKEWkASVT8xPKkc",
  "key25": "56PQCgVx4ftSgFyAVSVbtnYi93LVTkqxNYMDNtHoG5tmyB5gny8w1HYwipB8UDY4mQonaWFbZnTE3qvFVHJHtPin",
  "key26": "3fWSvGA8Hri6ZqHLpwHEscAELADyzEjtx3JdCNpG3fowftKWUuvP9VzXcxdDXN2kisT6nEfK4paEoDCB3UgakAa5",
  "key27": "4bkR4eCn9TW5KfV5EXoER7BBH3B3AGcC3kzNbrxx3SHBESjipSnekvmghEXz3mbdCNoiPXHJoLUbkZS1R4zWNoyz",
  "key28": "3dJkkn9NAE28vNBwvWbSPwzTK5yrNU31U4DFuzsFHvM86m9PeCxPY28MKp7PkmpJshF3znHeaWnKzqEBWgQx2BJo",
  "key29": "4WWj4Z5JzmPyXsQyL19XBATWaU34C3tunyAZoVLY6Hak1oB4xDfjTLZxL7pb7bTo24mb1azNSryDxtGnz2CFUYWy",
  "key30": "5YbrLgnhisK8QNfa1jAkwvZzBXYbbDYRUZD2S9h7nSFvXxTEL629hdZiMFfsUKZUP7sHEcYCkdPdzKAKi2QMCRMz",
  "key31": "ZJyMLCZn13USFizXfZmQZZ5sXWsturCgT5tBFJFQXrYKZYYKRVJyy3yrrVzUm9GryW1nN1rTpPyWBRhGrNV2tp5",
  "key32": "4T8jjiBThgkHVVkTcxgTaas1w6UiR8PrXrFDdq3qNKppCShia91agiH6R26Rw8Q1mFmkbMnQZsXiFyxPQxmAjCdu",
  "key33": "4cvYimRWgxNsk5R8hegeY1aAXJuiFCJnACexSVRNCkTQTcYFnpsm7okSGVFmscNiVpUHq9JdM2RtKAhRH7pidSgM",
  "key34": "4gK76x8VrZQSB7Fo4soF5vmvfhz6Tkh8MqXJHbW9ftwDNgp8gnkyu2nUhqNBU8UA4nH2xPuUn1dSzRLcZS42cG49",
  "key35": "x7Fn8vtAz2JSuRt4c8T6LAqkyf6uXA7LFdPLPoZ1eKKB8Q5qCjvv2MhRwgKsQ2yQPqVQxfF9NLyvVZUCYo9AuLW",
  "key36": "3mvFnZFnyRMy72r8E8zBHdMeyWZ4gXTugeuxQZYRi5es39QbBoL5WTBYPTRD1Pt5Y95WPbfj6bWH8NhCaqw7g47N",
  "key37": "47QFdYbrksDcDzwxednacDooDdLqWiyS7ghUs9wMLdw4TE8XYiuNNvC4bFcdfnuPMLNqpkA5uZnf5DNAx9g9ysuE",
  "key38": "23gTNj7Gz9FgZCuCSPfV8opqjiRNmKj7bLXM5AAk3SPf7NWRCbTwnxVRw7zLyxAiADUet55y5zdLDZqDJuS7LZvU",
  "key39": "KSS2uGLCexTm1JT8b9YZn5jLnHxHEoPfxXmvBBsnJV3i2JwQTCRUaAtrLqU9uhP6PWwkd9Cd5SkMBBM7ztVkLmQ"
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
