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
    "3fedrMKefkBpw9VcHVJBn9YNmMzsvGoRxeFsTcRFkunKhBcnveADXxP2fGTyXc7FC5dX36eJ9ECbm1Y3w1X8xd28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6XVHwgZUmDzDWpvjrwhFgUyKQNpso9HDjGSZjqJcb8NgZRuHaZTjBAKHWnyk2gsgc8Ud3dgz4ZsgEqkGm6nLpbw",
  "key1": "4iXMtRC38ZLZiMhRNZ6F7qn8aw9dpr6gxLPAfKiViUqvxa4yjMjto1uEf8WoTFfnAT66NrabnwJ5QDhQc7aYdZsL",
  "key2": "5miK6eAJvgqVkbCrYN4C4QvXNNn1HeYoyvMPMb9QgfrXoYXjp2yLpU6WRK9kK4wPyKRE3rSvNmqVtYX1DSnEtiq7",
  "key3": "5dH45bGCEfvsow9QypmRr5rAfAqJdJYTADpLmXbdoLprZigJWXqYiqXnmLggnvvpcnpZR2Q287PEVjx9ynpdteKo",
  "key4": "zhaD3t6Bi2k3AsBQ54mJcawr4VXGB7Eyt167EugwxTDiVDBJhE8rQfJCEdyajo2UUZBw53zCfApRLwAQr7ztw2c",
  "key5": "2ru1DAyt7TTgVeAv2w5wxU7TLtCwu4p71N3XLfUEnXLWvEsbdejTzfDjf5tgwYW4423rdsbQ3zstdRzCTeTnQJRy",
  "key6": "3qiUV2S9dNmWHLdddM8H5F39a7h6uq3KPi324uQPTPwRnJgDdLPP7p7sUc3FrSL7FyELaGscTKwg66cfqK6HJoWr",
  "key7": "4JkLBp8wne7UxWjT8Rbroma4kpKteEBucorbEc5eALDqbSJEWxe69eaL1NNvjvHbN57RJpr1PwiGkeSMsVSJT5oD",
  "key8": "5Zo2tFUX6KjCLfadtFrC1xqkhrAV9CKhtbhz9g3kVAhEXzvKgAxogCivbFkXPtXKpwWfKHhGCijUdK6Gmwo3nPkq",
  "key9": "33V5n88vCgSn3XyjDtTPJ3UMy8Dxddbis3SbrGN7BbqJ35srxyciNfF9PjmrT3Go5PYQw67am6xdF4uzCpXvc383",
  "key10": "5QEbD3fpnKyVFjp3dnRFFcQ47jC2W58oqyzzrd4UGUa3A5MT6G7QYNk47jSgLdTKgr258CaViQwfGUJJjdwDF8Vv",
  "key11": "Sd8fzpMjgc6hA46KD9a3fEQecNws9FgtHh8cpJ3RoZW5FHyNzmgkViWQCvTniJwxnKBK53xkVhT2oWCo5DSDKiA",
  "key12": "2aCHPpPRXiquMHKSnMCZZnykPa31nYQWtAUvP1NWr8mohykonbQeWJPugJghF79yYMWnUHMqWajabWtDJPcD4xU5",
  "key13": "4hmnFvyWhQUanVcLDAHKgorBU37Uw6AD7gaodMLoqL3e1Vok5NEvnBxoRSmXDuyUguU9M8owEstncubPMQeWqZ6",
  "key14": "4oS5xatUBUFFzXW1FCAyXAGvPJtG5WoX5A81DS6Xrae2xEjpDMDTquBqv8DU1rjkFiYh5jpW5LxhUJMbKjTEpASa",
  "key15": "24h3tzG8gVv7bwLEMXSHCShcAYPvBKzy2uWK9jznNS5J4DZbzqbtabx1YZWzDyNmcU3do3pYKW1S9n89FzRB4Yv9",
  "key16": "54xCKNcjEDG4jLevarw2Qy96GP4R9cuBp8jeuSQySetYPm8sdDs4C14n2XoZfEMkENBBuBJYtZNJb2Zut3DDTAR1",
  "key17": "5Mr1fnMZodKXRPKbv3W3kYUpkYztuxKkmFZP1ciX5eM3QuKjtjcVWSK3FinGWwJWJgP49TjmbCG3AcwR9E4udpd",
  "key18": "AwciPFaczkGp6wBryTbFFvUD15mBvyhsn8fmrctWEeqjRzSG3ePsS16PnC2KvRP2mEZ1xxDfWSdc3ANEhh5uoJ4",
  "key19": "2od6wZTmWGZpYia37WNUbtsD4GL3Dep9gWbZjZiMejXW885Mi67S6FWUjqLpCJwvmNKaqB9msoENggdG47ZZ4Mwj",
  "key20": "CBqeUZkzQoutxZegjBZ8N3K5gZDqb7HtkjMQUnVjqfaV8JDCDAY2Gmx9NLBiQ8zGSBUyoAw1gUHq8yeFRavpfae",
  "key21": "4zQmP7oxkKxE1kbSsSv97qHsxxEbcrZhGfrjuG6fCJH4vBWzMqRNi18TEa1FrVWnUs9u9P1H9bXx2pQ67tr5pscg",
  "key22": "5WdCkHVNidEbwG6UQpE5k63r2HNxUVWGkVvvjVypmJNqy7SonPgKqQQmNcyLtNfazFncdKtq684Aaz34GmDbCQY4",
  "key23": "4W2FxyyTnYCZ559DpV5WDicfrxjQyw1qBPFEHvoyMqNQtLFPsrkCJ41qkcUc5N9ZwqnrN89FKfwLRQk6kieraaFE",
  "key24": "3KXBNbgdVVmDjMx4D1Eh9DbS96qMc3GyevxanJtFUsJNmA4p8CygLBoAUQgBPTEKno2499aubfzFG6Gc7ctNC6c8",
  "key25": "5xXZ4znoSUz7ZNQbN6BB1Zz74ku4yhsKkWw7J8nyi5xsZp4zWTNUJSHiom5EWi6tmi5mcxqU8o4tRf8d7qw3uibf",
  "key26": "tZSmG5KJ6sFD5uDWZEP59qzJaASsoSt2NAsiT3Xuhbo4w63SyXAr8BaBiLfYA3TcaBAxNmUjSQzWW6bmFHhnvFm",
  "key27": "3QQF5wEc9e7Xj5rhvUdS61djDDwwLYQ7RVmPePKW4e9adC7FMkX4y4KNUc72PzVbG7kK4cRLr77kM6uN2PbAiC9X",
  "key28": "2qCjYpMmPVnbAaKzhovzc8TDeR8Qn4y6KpwfwuPHg3vsjRpvQ9vrBSt5XTnyv4HjAVRpeN83XA4odJtUDPE25JCE",
  "key29": "2GxSs3pRBMmx7ePixSZRAPXjajCTfvo5hRFh3sV9tTWqxnN7rmxfoFSy9jq811xK7NPtpthsLX9rMHg8mPXRzzzb",
  "key30": "5h4LY8KQNtxkHnCsJ82JmohXDf5WyHqdv5eRg1XGHY44cg3KjqKy2uihc9ugdMAEMm9NUGx2Yky7Rpt9NGh2HDN2",
  "key31": "3T6fmn58daYpZDqJbxgoMSWrbEUuoPXAr3UHLrwwY3zYyMYvuUD3Ees86ZQR66neK361yUM6sZUCySRT3qXCWopB",
  "key32": "3pzT9pbbxvUz3RF4y8frkJxDcBbkACoLdvoj9YfBZaGWJG566X7rdH7JVe3bfKQULZyLMc2Se2zmQekqefFUyN58",
  "key33": "2AN7JsW6EVYMu71EKUPLmM51TF5wshkvJWP5wvY3imFwLnG8t3ZFtQLy5R7jWMfLbtUThpMMEsw129ZYsHqvKwXT",
  "key34": "4ubVPNKuSi7mvPaCTtezzJiksg8K8DioWDuuFUQ4MvNLUpkmPikXnsduY7DoxFYdyhuMyzNZjjajVrbzuDUreEiT",
  "key35": "5cFt75UqsLVCga12sx9mGLyxBN5KnUYjkHakfFwp1ZWjMCgxyy7PxhnVuKHjqb7WLtXoPDrfTECv2wX5pxfCT2Cx",
  "key36": "45H3qRb7FQo4nbM3vas3ekzgp1DeTeuPFeaspLN9ZxpKwxEYpZvD2p1pMUQXVWv9z8XqpgNvANo6BHNPt89DaVmZ",
  "key37": "3bqe2rrXhUtx42GVCcJkmMSioD8b2KHJ5bsB4R2fAMK214krP4KuG6AyM69T91wyoSntYcqtFGLSLggarrm7ENKU",
  "key38": "NoLf5bTnW2P3WFkYDy7ngSNRzt68KmRZcVGngEtUWF6GKav8ou6TV2x6p7PE6w5A1z4Ryze9m75YzsKxmuax2Ur",
  "key39": "3PvBrrRNcGym44ndB8gaSZwKniFRUkCKiQDATMGeDEDGasbHntzCbSH68raydn84SabVT5MBXdDeSuevWjHWfyxz",
  "key40": "3bue7L6M9816KwDtDMbJ7sob7j3QNtcA4yrNCMGsSYsHmcmJnBHiUbEKB3c2NUzv3tqC8XED2z4WWWnhGP5RErPa",
  "key41": "4mdw423kTz46DcF9sfpoMAG6F3WUhC8gDkdHsXBTfyTLL5taeuTmrRDp61TEbQ44ej9icnLz6GYDW45A9XHJmYT5",
  "key42": "ps58fDymeqUP671PPcczhV2jR41hc4x8ojmYAUQLuEYboKN2tduGTtuPhtA7bAy1xWZxh9ivRSkh8aGzEbbwC4A",
  "key43": "2BGbD7voiVuU6XfQfZfAhd3mPDeRFacqAEWgBqL6W4KLzccXX1xr9Xz1gPhDBiBNfLPGpnRJRo1KhV9pLPGKSJue",
  "key44": "5YtfaqXdEWRsfwLbGEExsE3QxpxEEHXaTVzZ5qyAi9jKVEkh84cJnBTyXPaYGD5YJVuuhKBdJsXuAECFPK2mgV8T"
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
