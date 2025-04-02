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
    "3LRCzHfgJWgardrN1ucCAuiFehhnVrY13sczf6T7AoWZTkCPJWKy6pj4hrw2HNymTVm4paGqMJwUcTtaJxETh8KR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bNuPAwigfbe2eQFUkY7dw17cqiFXD6J5D1RoRAgRev4n4oGWEztK8GjmWeGqiNKhcUYYc33aKNabX2Yaz7L6y7Y",
  "key1": "5hLmKzp9HAHT96nGEp7kTwzYSabimsGKFJgi3Gs6FZn46dkTTCguGckeDjFh8Tp2NPDL33BJoryKVQ2Ny41kcDMa",
  "key2": "5Nv8DjT2bbuoBHM8NAfPP1VwftrST2S9zAXsR4s8mUtzFuMRxxVeTeN9mbB82uWaa8a35gXnUUvvwa11rWoR8ikG",
  "key3": "2CmWWAhSx3d5N25DmNnkT9EZ967XrZEpqPkgz3Ab6tR4AcvDDdKPWqtAzxiF1LmQE2Xah55HmWTmXMQbMeux7joZ",
  "key4": "215UP1BNjCfB1mDmMDzWAKNeRiQ96SmF7xTLFjhNDwueDbfL4v5Exx4tkd6MiPavzVwSngpY5NfNvYnBNzfVYDjF",
  "key5": "3EJQZW7GHGAtf92j5kaT95v8addFkMf665L6VjPBgdFBScRNKW5yha9eqzmPc1QNo9ULuXykvLe4tRHmFcungzeN",
  "key6": "3TB4BYB1DnauinWVtccuozCN5QzcLvHGWna8eC9BceWTVSaz1h4DhyLThdbBKE5L7K7TNYgAw1mDWkEDkRtvWnKV",
  "key7": "4ennKK646o8Jvwp3A65FRuP17SKNi289KKAPJ67SYmXmGqEKGA136TjxqnXgspaXxCnCTKDHMCjqi7R8KWLN8adX",
  "key8": "4vnuRJdSrp52zR1X9wTwToZkfzJzZa6yakywgb5mSqKJQcR8MJ3E8UD6YpoxGb4aHTrmataGiC2evnGaWh5N2eAf",
  "key9": "3Kg4EatbZPUy472eVdU1Sk7ChVbTy7sgkspzNPnpgQHYGCPz4xuXoUsnuPKJjoWcgFM9LEVqrxr8jeCEbR3MbGwa",
  "key10": "3iWxyGFyK2JSVLMY9mJH8FbzuVth9LVG6f5tEbYEUAVU6qeyLrVxc5JW4ode2cyBsv31T4cr1MXFoV5iuXVcAmz7",
  "key11": "1DU4XwLkFktXrs6hRsXTAzSZxcuGuBQpURVYiYGQe1BMpPqtVLWy5iJyNGkMz5N7FzvzKgh6nqFT42tv6pxohaw",
  "key12": "5hzFpaKMkj6gwquNYWL31jt7stzku3nztpdaSfzDHNDBtsQXXq8PepoENLTVVYzvYXjHMF9cWZyNdE2e7sjCc6QS",
  "key13": "brDRo6n5NpZPwjjG6zwmFWmuzFrK9m4UxGkNAzX1jzUBrsC4LfokhA6djonWDQhRe9ER4Cr6svpYALeDcxzAiyh",
  "key14": "4KhnXj7Ry7utpyLr3jcwNFU2eTyZf2MMjd8PvnTvZMahETYxpudJVHiyBvmrT97ZrsqZZ4UzTsWkHYVV9VQ1qmH",
  "key15": "4XQxtmgjBjWSKYBKpCfTRWD3W6QGcVGyzywYED4jDTrFjuUGhx93fD1zrGcHrmZfV8yFjmDGzYg29BUDBnsufvid",
  "key16": "23sYs87R9LbabhN8U5L7mS9tLEGhypjGRnuDYQWaAofVnLTk8MJPLpFRrFyJzb3GSqPwTiYRBGKcjxcivkJc5NXC",
  "key17": "28WuScShWzyzxycGY4REGW81DqydETpeLWwtbWDhV3cpA2sgkm4y6LbfXDnPnQCcjGitfkeVX5PeqDmpqBFoELfh",
  "key18": "3aMH8VNq13L3uLpuggnxzwn9M3rxfRkhUMrXscgtYt74hmzGfTXFREXqSSyNzfjEPkNYiTK9Dp78e4HXDYN4xnxr",
  "key19": "3ojeAUJU9rEbwJswpeiCgLVchmtt6n1kpZzcdUiAKSaqezaVen6ApQaZPWSf2HSazybdpGKLXK6par33sMuZrVPB",
  "key20": "5pBpSBGEqVerB4qnB6rpJPJyNiuT5ymTivbnqyLNnEK9JLXfcisZMgXBNtkBVLDmf3r88vpVAp6sYsyzHo5BbVdy",
  "key21": "5ifGtDznPZQH2CjhVbonEcy8EtDabtKn2Hh8757gkMqXHpbrSKBTiUs1k2BZfcUtEkYMGJWLbbh9sXpvYg74cB6U",
  "key22": "5MPUasTsuTuHrYYjxPuitxyqoxpJisxXa4Dr3b8XxopKhRptMmq3Lnf8fVViSm4C8b4Y719aBQZ4S2ZzTec7qp9t",
  "key23": "4ULb9YEuYN45GUrhzTCmzAUDGRpVLrxCGUpnSCp8pi4p9DWEWqnp23TXQeKeBrDZp53YacC7Nh6GFEM95yRgaRYX",
  "key24": "T7WBZpA1MPVY1VevK3tTUKRWokHZeAGj2p3nbo1Z6S3MsfcJFY4op9FFJcAjUj7Sh7qFUqzNHKdiKR3ANGKUkLu",
  "key25": "5y3WtjrFt4mpJv1YBs55yLtj8x7EWDzMuSDLwaSsgCoyBwnjCUHepHpJMc7q7iGnc8GEQFaDa7zGHwRbPteAnCZS",
  "key26": "3CGHcGCFwrWCPG9VPGVvkFDsXScYAqRBCX1dPCFUcGAtseJbzxMBMLCosaCkjyWR2YGWfaZ7oNgccNnELh7RCFXa",
  "key27": "5LeJXo4F5JYi16MgF3iAxX5NqZZhriBTMBCgem4En24UFYSEyCLskLzd4KkSdKVFcFaqvWtkMLN8ewxEtm5Dowcf",
  "key28": "2ej2H1TtwRe4LqPMweS8YFUXwHJazNqg4y9QYPsd6xy5j7FXcKvSPBsMApv9Hv8fXgKYinnsLdjP4f8ibQPRsD5C",
  "key29": "5dTMa2qtJGRDaiQC8THTb6E5J42uNzj631fS5s43U1YbjzmjdseK9vLqfkHSVkfe9vuKBxDVuJ5TAyQ7ZZ5Fm4Qj",
  "key30": "DHbWFFsrTBiQzm2Fims9rNUuXT7qCaLaJnfrWxtiRP5VKRXhq9rDddWRVbogsr5qnJCmp1MndcmxKJzBqt8Cjkn",
  "key31": "5VfQpYaDGJADZfqdMbcf2NuV2aGBhuoxBpn39JHd7K75ruTiknTP7TZXHDRm525y6VY3krpX4aoDg3P3xeXGyCwS",
  "key32": "4zAPDCcSje7VMznfKnRRKXXyd5wdMnCM5YEicEAWe8aGGCqHFpqBJgmiTaNFuTw9c4g6kDgKLrMkkesTDZbiUd2n",
  "key33": "39DCuMw992tmY4kyHPmMfTVF8tVBCMXK9KAiHWspZ1NCJREua4z9L72Qpf9xMCGxvw1amRKLem1qdZBFKUyuc3mj",
  "key34": "4dEng73UhVgmxqBu12FP5t74qPLKqmtiDkb2HQ2f5KXoRwBP5Zdu7CX8rysc9U8YujUUR95ae9zHBQJjHg3Zccje",
  "key35": "4gysDudGX3vdxHM1mwZMu93sPfpbLaFYYJbMHfRYyMQn7YmoCTGjJzMBMTCeN1V1RVP18LWcPBBPafwRNuWfPq8y",
  "key36": "3HWr5FMRAsbSeTQDszSvu5YNZWaANBBEp477Fs2xPQNb8XsfQohz8C8xrSPzfK8rMRGHFpzvqi75Fk5D3LHKPrif",
  "key37": "5LN2M1iX1qXbd9USnVaz1qiiUkXFv9Wq63XbD27Uehd2fLiMfRQtjP3ZQEhLjxd8q6kpMFyeQfzW7Np1eGdkUB27",
  "key38": "AtvP9MivhSA2f3hNoByqgK9nRgyB4P7cBXkgvxcgHMjhczXyxcPANLvZki7sQMJnXLyrcTaRNthJKKqc1jsFvgk",
  "key39": "YSdEXCydMfaW2zMuSRgSQcndtz2K9gcjLfH4gjHDqYqHjp1LMJ9G8pGmUPHiEsUTxoJXEX5ZnrFfVAJNDfNU4rz",
  "key40": "NxfcKrQLCQx9tcK7ofwYHtbeeuCyBQKYFtHjAcF9aN7RMVi4BxcYCk7YHpu8Q9aTgBT2ZNm8FsUEKz1AMSWdQYX",
  "key41": "2guEPR1QN7BYz61fjSFivU444GE1Xz6dnT8DApnnTEKxBSx9nY8Y9Zk9sMz6hmUWctrjTjqoLoXBejATzw9Ayfhv",
  "key42": "3PrqAR19za16fWwvTNebdF2TEdqXBESBak7eHErVCEsYvDWJTQXkLe8VsJ9jVfHn3ccitFBNu1SCnz7vspXKm3RJ"
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
