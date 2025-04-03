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
    "2EtGP76ev8i1jJKynYRkEXmwL7QuMgDQUvprsUvVC2PAbRA7cadSsTesp5Tf8aBjbekkME3vdQ5s1BxQZ3Je7MAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WpWfJ8Q4tMHLiBzAL7AZWNnzf8xPuSVQpY2MhEYfLihhhXf5DR5BnB33VdyqWjdAdfc9Ks94ELSx62MipNycFmq",
  "key1": "NqPKJAn15WiAGMpcPfa7WmTrx3CFhoE6T8pZERQn8utHJfAZ3WVrekK7uvB3AaRgokvgcPzbBbcS4DArG24qxgC",
  "key2": "3xnhkUqjN8X8Kq8F7sGi9McmasQtP9tBVAezUo2cZqHnHcGpyRXkEzuhbXajhPHWYRgKJ6arYEitRGr9rSRRNVno",
  "key3": "5vWFeBN5UpAkyTVUtRovfJNNc86dFrix2ongVCjMngMeYfsT6BZ2B4UeUngj6qeisrhum3Ahuaycy34QkCGqxm2r",
  "key4": "39D9oKWh55D5D8TmREbmcHJeXPhMsBx9y1zFq1w4j86X4scQDrJYtsU2cAtfnqRHxJHsndKehtJJTN39Uo6uq7PD",
  "key5": "3SMKxfwFwKrkiGL4kkzGdSVQXwrGoS3Yp9BGHQtimVWDcj32VQz6EJwdBoGHwd5Nd5ArP8SWWTMRt2SqaKX9eiqZ",
  "key6": "4gKRoQ1Z1S6UCX5fR16VtWK27gebTyoz1Dj69yTfz7rXEkMjio8A1uxjTbuXofJ8jS4RXMimrqHk6n2NtQhoxRZ",
  "key7": "4Jj3Y7ak5qFFS5kC4oidTQMs86NpYMeZHVWPEhKhvswZZF92eAnZNVRiEcf65RtKuUmwFzWwWKmPNe2R4LE7QFRo",
  "key8": "2oVN7qfSxAx9BF2HP9P45WywZjXcV1QxCB3YXvtL7pAjitj45ScgtjApTnPzqNyKdQsLMgJ9beyZ2Esy3HYJrBo8",
  "key9": "cw6BVcTaR3n9xZhUBoomWm89xDS7mcETKCsaHfCm3SXShzqPGCug51q9t7zxBiuNREwfL8eLpezu2K6H4HcaC7K",
  "key10": "1BiaBGY1B8zSY5S1S1wTRdYGLXb1zkv4MdZE7WSr2Gv1xig43xcgYY7g4UWqgLneJUfZkuydXAsixbBuKdgT4jh",
  "key11": "43Ds6Vw4nYjYznQjU9NZMHtG2pZkNuScuoF9f9r88BueVnSvvWBymDLTnsnJeGwoajG5qRFhDEdvZjCRmxj4sJUH",
  "key12": "vxk5VtkJhnj1cRasJ7jEy4g9F9M3BXBPBJfhvmLxJPcns8gjVUAPr5j9j16XB7fexAgDeRTFWaQi1j4daRqUG9b",
  "key13": "2NA6DqB39TR4y7TeLo5seiW8G543e9gRn7TGwKqubmvZs53mFvKgUHfuLQStayoyTNMMaxqwdjCE8AKEqAJYN6hW",
  "key14": "3P28PGMW4Skzneu7GHBgEM5vofcLak1WGWucmE5dGWgBp9hX88GFyN4hYnAXCKAArUC9wGRYaxBDCjmjno5VWpiA",
  "key15": "4E5UnFxm1b2F1np5W2nS82vbcq4RDtoGtuZJviQ5D4x8DoCAKWt58dcdb5FJm6KtNgFoxuV5sgEh4sbCNmUxXFUN",
  "key16": "4Tk8uR7FZVWq9BeEjWiAcvJwG15R4XKkFocXdPjRqry57Cg6Gp87g2SuRCevZ93GYoBgersAGHnw6zoieY1A5yU3",
  "key17": "38Sb8cCA9uX1Fr1FpVFseYnNU6hRorgsEAAyj1tYx8bQYkxJa1iNJ2xp2RNPtNqerN48XhmYmBcixX2M4BXgZFcP",
  "key18": "2J1WB48DYUixiWmEsD2BGP4p6NegvxxRDscgVFwrwcvnmSzt4DNbbxeoGb88T9MhYF5sMtJuW4K2YinvQXMyGDTF",
  "key19": "3QEBuKWbAnBHjsGEo6NajBohbQLvcP7oV5DBGRPTgWcqheEddrFz1xU2ycxSKpzpHyTnc6gP62TMdHVm8R9fqABB",
  "key20": "3ysoUR2qi3D67VVYKjw2gh5HEzCfWXhXAHGQoAkAHngz9JAGAtkX2MfAN7UKk2xjK2vXQNMFDKvgjyzuk189KpnC",
  "key21": "4xsBJmz5e6o5cCUxiLT8V8YkJhrqnYu4qZ3hNG77dxD47MtcWnweJF3upsdqTSWKqJ2m39o2B8cyhRYzRbznf8QJ",
  "key22": "3QMdKZ1UmcJki9Tew2iG1f37khMsCyGcXKM5VpB12TGD4MdahkSQ7rshDi8BqL6Z6yMgFdTxRdnRJePx7GLJhrLi",
  "key23": "3tMyH2JvCPLvZtfTDe9tGvcvfxDNdwEgSYxuXVaWC2DH7TfgFFuWkK8fFZWGc46zzFL9RxctGBGRQvDTmkJoT5h9",
  "key24": "3VZa8jSpkRGStDibE42Rhkwqeigs27YHcDT4ysQqLVgvRAYww7fJoCJyz3RdozvCYqGXsNieN541sjbGMGVEX5jj",
  "key25": "5oobE4wtpzXMemxgb8diphBAbv6PsuLTcWn1AoTWnFYMTbm6YLqDeVgn5ge7sKczcbtNk6sjNCyxqgxcW3oG9bym",
  "key26": "5ut4uAVrEJB5oQm1GgYM6ubLqEJhXpMpA4fuTVLp5DWsKAUv9JDLrrnjNPr4k7tYUzZTAPFqdmd7cochWBnhSgdi",
  "key27": "3aBPVo4RavQu97aoq4CVh1siMPWFDV4mtLbPwJMGVtRxYts7nK8b93aQaK211GffaPYytstj2EGzB8xXuj3w8GJm",
  "key28": "3ztsPxhvSKfe53EmE4wErNjY6pgwhU86ANnfd54j7GWLoPcyLKo3vSsFR9BpeWDuNkca2p65od778uFv3qmTy4eX",
  "key29": "2vwbz6pjLHSpcGXms5nGasoNGDgpGHvwAqANGPxzewZzPxrjpWLg9N5RqRvWt9epAx6eAZvC4Woy6vFG9yfS5g2M",
  "key30": "5Q3Yw3AdFgRZ7HDa5xsnwHtJ5TZqTx9ZHMP39kAzXJcUzRt5Ftyxe4LtJoTG6kkKYz4ZBcrKKnNXh8ATpQKPaKbg",
  "key31": "2WHqW5HWP77T76KRuJ6e8QLUrVYSpAorpbjk6MDpry1p5BfxujUCVpQGtPYd4VGfk75e1MAxU2Zr45bBekWpEYhY",
  "key32": "5U5oQH838nJd7XVsNU6aJhYLmufr1XVqQPB4te8va9hhYMiqCYz9SuAQsG2EeHcPM5hsAvTEXLYPuFGCQowPjgD7",
  "key33": "3xJ9yADjw2Mx2hoX94JDF5GWSFGpSgD6r4hSpSnyy8iGEktnEMxaD65WmkGWbRe2Z4X1YtQ1iLbd3dabFGfc2Mqh",
  "key34": "2EgotBSBcTwMowK2KA7T9GyJ1jnJu9EAtg6zy3moCf6W7YD7cYa3npjVJ6VMcV932KM3tUWJkUgQu4JbDCZG51B6",
  "key35": "4FtKe4TZBBhNLC63hPEP2QAXVf1gEygPbxPo1a1m8HEW8pYTQASPQwz3deYpuM9nKvftvrMrpV9CKQn8HPG4j9fe",
  "key36": "41m1ZacXwRuWwbzU8qejy7Dz9auYrHjvtx8U34FFBZE46T39N5vxnyh3PXWsu1JotSJ2cHZzNy1UHuf43D29vCxX",
  "key37": "4VLEydRBrobskTMopFc56AyjY7HPZX9isRpb1pTNNsHwMVb1My7iXwWgJKUDeEw6YbjeUx7dUiXbFFhHMA6TfRDo"
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
