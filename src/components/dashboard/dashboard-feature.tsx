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
    "2YuUzC88JXUfLfKNDgAT1byKvTDSUcE4rvKmZLHsy1ocgKqgsw2LDRYmVt4DhR4Yx6i7GR67u9x2EhfT361pTjwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SRhaRbzASy588ULW5bX5BHYLbPKL44icKEJxEtpL7uSGbBZGFf39Q5dkdFpg4UA7hyEANB1i2Ub9JBuC4UeDfRx",
  "key1": "28D9EBuE3WW8Coq7qyHevMc5vztoT3dGHZEQ2eUkr9m3UKPwA99kGRQvBo8RckWuNbGyE26Vg5r6Zz2z3qU46HVD",
  "key2": "21HoeGHBtKDVZJcXoHnzJ3RkDHcfMrKuLQjWjG26xoNYx894XZw5Yk1mJh3F2C4JjtCDzw9VYcmgS3LMe5oqLPc3",
  "key3": "5q1KGATuJ9ibsw4ewufDMz2AfUsdoKxEnbm5F2QodZVn2KjwvXdVZbkhN7MEjsZcXcc5qcoEx7WipN59T8CzxDJ1",
  "key4": "mMnHmGYc7aa13E9ZPXnwKafAYjWcHEToMrC9fqccNyd9c9UDHY5S9Jrxgi8oEAFoMBMeUXHvosMuparAVJLmAxL",
  "key5": "4ny71S6tAUq9cbdDSsEn3dYdH6tnHF5Bcats7zuuZ5co3pCWaRy7n45YyPjzwxKKeN3W52e8YY6AXZb2o42wUoyW",
  "key6": "4Sv3wvZaxox18Wnv6T4VTQNY2F6MMqVui1k2jkeaJaHmgrMQgpXhdCgTagHUKzgvvjPkxPkL7z83roizHoMykdmQ",
  "key7": "3N1Y8VWpQCiZHmPjA5QUohoaxVsrZhXnCk6tZFu9KmpZCVCkVvxvhpYLe3nDZNZKbT6ykccLK2Re21zccDXxc3rL",
  "key8": "4zCv8YTS4V2XFvX7cABkKv5nteksbKzCs9uDZeEwybywbc3b8Fpo1LNY53paChiDsJm3mjtL293HGecDbLPZphmp",
  "key9": "46pbj9gCvNThZPe6xLg9kPF1REmU8QGGWx9s82Q96qMDfJN4xDqTniGkH2susGQT6f2v1AAYWHTagXoaQz1R6rLm",
  "key10": "3679GPZwysXwaFNdqt4NursCXL3Y2Bu8GcZXJeruVFmQNrruqqqB4Dp58XVim6yLBwRvkZaqYK8VPcotGLLbifZm",
  "key11": "LHNtXjoX9vqqyNiBJTMAZ7ozYCdPseaDH7FsmrofyAK7CjaCkopnf6Jjz9m9dnm5cTPPwwidF7wSoAs4RuF5MQt",
  "key12": "5WT1wv7uDVU7sG9GyxHNp4Cd9wgBKGMLHpaJc9wAEQ8D8Zhx4BAUtQLhuNHAKQJCtrNpC7WbVxhT5LfdASqu1iBf",
  "key13": "2PRsKDFJvkPtpoTc6M8BrpZpYzqhYKA9pgoCw83dfWVw2qm7wzM1p3g3DaE8mBJv6HrA9HMzYtUAVjejFYRTeSB4",
  "key14": "animA5jGyMVapPXxSzrTaonzV3NdwBSEbgmKWtfuwTCkXLy4xSU4XmV1fjCs54zvKqEieRBUahjYuaFSLEkHsM6",
  "key15": "VXsjA8NF8ukGGa1X3iBvAyrxvrXAVDdQzay1KyLJ8LWbcVrgFpzyVXUXUdDGQgjt1Vm7dVAmbZZQaJSun63SgiY",
  "key16": "5t5yBt28Vso7iRd3EFScpPnVWwKuB5ETek9jpS2r5v9aWKQZLBWaLZyQ2Wm7dKckd1YjTXxb8ER7RKGYT61esGBG",
  "key17": "4c2xuic6h6jBugdwecukdjU5fxXoihcWJZEjE533ayrQvyLg82BZspwD8XQNisFAmEtPSk6gSdCqrNAiy4WJgi9D",
  "key18": "4R6z5bNBNr11ttEtJ3HibsAeKg5tbrvdtuLDPCUUDgK2VFHaBviThgmg1i5iX9wTh3hpnaNrek5D9yAQJNPgQRpz",
  "key19": "4VoC3WAizpZ6wThR7UHWjvJED4Ft2fReHuZjEFqz2bauYunna4tPSVgNjq3jfYunoayaeQ4xVjCT7XaKENkBLyeB",
  "key20": "2xybzJD5vMNYYys9fjo8AfENn1T8m6S7SPYdwAtuU6KkD4BvTEDqmirF3nAifhCCRcxCGos56NbpbpCR1kEfEvwa",
  "key21": "ZJDmRkjJoYcPiXjrKZE5wvECxbbShY1T7sZ8cExwygHqeDAMU7Cmev5n3axGG7Uu7thPe6xC3Y2jv4vbUyjezou",
  "key22": "2vjutUh14ij1qFUwAJeMNxmCmf5ZpQiWnQLzNQgxpJpwmQFacjMUakH9z9tzWyVSWyWpPboHHbpnHBDBVmqoCoSb",
  "key23": "54rY3WwL5vcXihPYbPTGPVgSUbZTSgo79aAwde98CKsf5U8kNs2cWnatHXieGLJimvRJocjH4WU7SjyBQm1XZofW",
  "key24": "4WqMtQupumDwYhNtNrbgmkDQTCqPTZpgWcn35bDjABZfw3k8YU1fHrfrPbMKQCcbupMir3LhHpuhHTYEZds2J2EP",
  "key25": "64wpRhsC4x8sKVqhwujPSUWmCGUox8qmniwo9exfsG8Lh7daUjY9cWHTnyse2jS6UxgQPTXwxAK1jPTBDDMENjWV",
  "key26": "3WmWNjD7wWUW8wwWRkER593h8YbLSpyUDHuD8r3iZ3zJE3d4fQtVu93qUdNXthnQuBY9z9sCZwqM8BsGNq59oPep",
  "key27": "2bX4tUBYg1Mt3KsZKWFb9VpPFGr3Yt8QWNAobioeHesgLSUJtHa4Rh5hCwb2Zt8ju7M96Taa3kzqKwZFM9iPM9b1",
  "key28": "61xj2tH4KfkB9xEocq1h7jBmoYbcxppJNug4DZtcLJuWvVfdCSvDp2pQB9qdzsumPADK2bQ8YVtkAFXDTYXmrZ8q",
  "key29": "3JxdQzjYkdWyE6gXjpky4eChGXAys9AEtmYw164smz4T4uf9khZHA3PCPw4AQevf9uwyhauahiNaWATi3vwFEexp",
  "key30": "4fUF2UivKwVmauQrAe3ha1qRxF2FBFQLztQBQCZNM5iMnEkn1x2gc9rUTvbYWKR6qVwqCZFbRWK2gr3CF1E5AhLF"
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
