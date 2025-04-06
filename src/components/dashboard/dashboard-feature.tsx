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
    "3BxZhf4ZSAPmktJ14ma7gfNfrXZutD2d6BhVSpVzqQTKj72sMaKGcPThBujLFGTE82iKWAAJVuy8mFzp48oUpi6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fVXskUeeDCtaPCwTR7PoCfzdQfrVngFXh22aAFEtZJP8ZhgLzT4pBdNtHjunYiGJkvqEm8rEPb1bM9r9vMbdD8e",
  "key1": "2qLcmWDZk4DaA4nqcsvmmgmjsjSEktWfvHgBWD9M6G9KuEh49PpNQwfCFdsRKE9g9i2KWAMZYq69QwhCopNXDuhT",
  "key2": "5dMC5Mymr9s51HVVUkE3wt4iCwxf3HWzvw4i7z7oHvMAa8sWR9Qb9k8rjE7vCWy1bs2AQ8XxRjy3ryqXqiFZyFb",
  "key3": "2xn5fuim9g8s6xHGXiDGeNcYjbZDXVXV8MMSQhfiSF5hkPv4KdNRHCf57kQdk8Xc77k2v9F5MNp2C922vzWVLEHA",
  "key4": "3BVee97wRuo16hd1JsEFJy1XyKLUZcKvtpKP2zG69zDg9yH8WfgBcHWncVzXJAXJbcpCGDJsKuNhqgy1v56Jkea9",
  "key5": "3NMRcgeumq6tFbwegcDo3gzBcKLz4pjGqf72iuxWHQhZeydbNoD3hZxxQ48HpCE847ZKfK9nGq2ciztgGp6rKzHd",
  "key6": "4oCr55D7ZafxirV3c6ReP9JjysCBMumFJxPdTUeM47ZV418p117E5eUtSv32MSC9vvnK45ZXQduRwseUxnN9rjxA",
  "key7": "4KsNofdmwtsc86FRswPR1RbxJm8XZjTgPZGN2UvcHNPXjeJ1uURaDE9VrXDGVLfGCoBfH4aR7PvtSdfPNNXixWEN",
  "key8": "2YSouRqPztGLLXEQhDx2MJi7McF9prJMBbN3sJDjqTjW7RWqp76DQm9RrTgi4LPXjZDpRRTWKnzJELPBvWjLVtJh",
  "key9": "2qrnr8VHjbKuW4AzhNTWLKVfLv4Rm6uiXzpaEJURNyH9rCTsjpPqRJTQUQi8HEN7bTtsLMoVFRwcPS99gBQV9ZVZ",
  "key10": "2f4QWnHgDXBAQ4hudxJ8TiqkeyNb7tJiuJuB1ThsiC1WUwHgSf6hdJjQ4i36de58acc9Qc7Xsy8JYGYv5X3iPEqx",
  "key11": "4cLDEtqgH9iPbLTxK1zM5DXbRRmQXo5zr5mJqUn3wuQuHohdAJDU46ZwCp1sLQpnwp56oh835aQn3k7U9MTmnP27",
  "key12": "54L7wTuuFdMJJqJx6xpyvW4tcNsH7RnCLUMP6VCfTGBhgdTQ2iDmc3EDji2jQc14Ys3XRQzoW3VvZqbgT5b1qtEd",
  "key13": "2M1ibnk4Y4HGeu88HyrTexZSsA4EKTTNfjSoRHNbj3DZQP76hXMgGxxKXM9mA6Ed4CvjcMFQdmU6TerMKawH18Q9",
  "key14": "3UYQ6SJCTmQspe4guoZcdLx9w2XJKYcu74vUSXBCHV1akfFqTZKYA8RjbUgtLtsSbFGzAs4k3zuR6TGiqzDCGobj",
  "key15": "4tX1me4Fx6HYNiNy6Lvt9DEMnb4X7iUrVmcAexuqeDapHfGRiW3TSRvpZLF91mamSKg9qCqFWDMMRqTaGVcTaxpP",
  "key16": "47hXYkKSJ6qFBx3MvNhSv3Re8ZiFeDJiqH5tdAz5oM51S1gnMX84d5WCEvLYR3poMnKW7zf6ZKEeYQH12hoGyeMF",
  "key17": "3UV9VU3176H5A8kgGZHWFrpowdSesaGXjkRDzFnNzVmVuqrATiKVFGypdJoaMAyq6eBRRj2fi98hHHSUrLN1xZQW",
  "key18": "2DPmVEfGzDfUomZEriwUxEo91jG9YuGymEv42RcuY5ew4LucHHyk36JPcWMHmY2mnkGHeK6qNx32awERFMjXpES4",
  "key19": "3nRR1kxwB6cggHS7mSPiCee1D6jqsYVcWvSkkUp3yZkkXtBCJRNQHJ9TJB1wEY5FQjqVs13LQHF52gXg1o5LWwzq",
  "key20": "4cm3HbFptjJd1M6JNpT3wca9yjmLHozGqKv4rj2EbxDBDa4Hg51AbFwCqLnSRRPJti9YKBWwjhX3TbtiXvyt5p8G",
  "key21": "5utmsfwytdrMqGpwbeZoSoRbSRc6W1M1HkKSckY19c6i9TmX6rqnCJk15LssCA1vb9x8U5x8b4MV7MgwLjDdygwp",
  "key22": "5AtAwF289RT5k4DVd6kN2XgGshSojRtogL5xgbgEwLTwxfDYnYdWZTAaVJKFvp68Bt4FM9ZwkhcDqohwPY1CpTsW",
  "key23": "2dFggMWcYVoSQ4n8o5iELybgLuuk8nMz5GTwqXE1UrqRotUp5FB7KViM32kQyAaXT8uo7eUUDaZWXXkp5WxcEY6q",
  "key24": "5RA4SUBpvZtfNSgXPVK5Q95gZJJ73iqXoBP5NdchC7Ma1Lz5tdi52dFdfaMmgw6kEwpcAe5MNUALsrpnJDhLnH6w",
  "key25": "3DKJaXYzStEvmPRavS37mW8XuE7kYviwGu26o8Xgj64drUJfK76MkFRfZVcPo9o1LsKZfA7bejVSybD81rji2mn3",
  "key26": "ug7jyGPyZ8rUiJbsLHhG5LihufSewnLNGzQaA5nU5toGMaTtbnKFjwRLKArP9dtRsqrher7vfpCijFgg4917dxX",
  "key27": "2M64BnbWvruueUp38Aixr4LC752ZxdZFuyrLyGLz5ctWx6HTtGqEEgxLMHvwWYuYrbZPLbz2942Y1GgPFX6ehxFd",
  "key28": "4SoMXKbgXY8VEeHtmRuNAWXZ9xxENVjYbbE3kcrPUmuh8yf4TZcoPZKUJmKzZBpviGSpnBdPBtjC2u3QyGdnT8Jo",
  "key29": "xazApDLZsoH9FVDfeoYu4LGU7XCgaruqGT7iEoLaf5iKpBgx2umG9Jqu7z32vbkEVfyERiLVK2PX2jffGEPRTq2",
  "key30": "5uRZQSPFqUyqYkLY5mhgmyZ7JcPTYthNhn63dhwEwLghv2w6QE9Z8rDjiN1K4Gk2EScXrYhE6eXzoAwUZnNYpyzu",
  "key31": "5CnMomwBH1QyiHodmKoQcyhAD76RHHJNUUgmAoQnor4Hqizu59BioEc9XMeDExypad9w51QnvjWrtr7bk5NudsiX",
  "key32": "3NbTJGHsK4PDotjLTYFFCTkJ81Vabvsy9NvfEhkSfeKLgZsmGjaXNQ2eFurBuua9LsSRm7jUcmdhcQQ1tFPmUuon",
  "key33": "Sm8tCLFjVpKhvm6FrQhGJRGDutDSESWMtAp4uiZfaLYeR8wbiMyCHjJ7YmtV827FXpqFy2SD972nPUfNaPaWf23",
  "key34": "2v4hKRqYzgbSreEJTRLqEWq12h2VnHB1NR8koSixeheUQTZGaDdK9WeAstMyrXvM8wP1FLjQepGV5tioR5LpZxtG",
  "key35": "3XZyztsXbhZvaSAgTfkZ1HtuQMt6Wh1tjsUbLvd92CfmjuZCEMAz7Ga1DR25wJyHA1P7ugWu6eGBJvdu1oUV3HCK",
  "key36": "5jWyeWD2qCy7qp79spkVEhkXMTJkffeMWg9WHnxFLS5TUi1DLwhiqyTrSuzEWnJM43gBKRkNMMJPaZxqTX8eEKXE",
  "key37": "3DjQxa2k3w3z6Lkvi5j85ktsD4dZhmMT9KuViWc6JcmeP7YQuAsR3ucGnUY8tJi65947ER5ryR2h7fcDQHapEz8i",
  "key38": "3EmAVjJFY2wEC7zD8beebggziuTdVyUvrFfJQ7k256UxdogVLJBXMxqy1Xy397r5LWHe9VyeiziSYJG6RXnfm1sS",
  "key39": "8Bpig2SGHX6YupJCGTYGe2NXASNJmLCj9EU4vWwP6gFvuM9uJU8UoaYWCfSndCD9ksy1bKveaJYuudBakCGMfUq",
  "key40": "32Z7kr6FfVUdSJBEGV2NCqM7KX9GSZx62kmm8WjjYFxNCNkw9RcWbZ46WkCFzH8qbMSjKE7GrmjZVXKQgBVa2MBY",
  "key41": "43YpSYur7cRHXLE84jFH9t4q1GyCxGfgw4ci57r9HwBsAnAG7MpuhF8ZkicmXSFDAkCCozTnjfmzV1VHYsTgxH2r",
  "key42": "5S9hCS4S3iYFSBgs3aiedtgJk3G6uSEspJd7GNUkPcvmmwdzoUPSVgQfXgQs2ZUXskYkgDAC1ad2FrUm8eaPCVPs",
  "key43": "3zPWdeqG9ejpZXjrZ3Srjo331iq5iCA76s1KRjLwnAQpUjyvY6FoKHhQi8kiCUtnjK49iBFpi7HvUe6r22R4tWcJ"
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
