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
    "61Uhc4TULsbuje8JmQTq4FuamcQuFdcRBD3jfaGmuuPctqb33ufHCPVB9fRxLuPTEaC7VuY8bQZHMitsbwerrW8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ezz7uCQHPdJDRuWWfsYLLKDMHetxU36D5A3iTkGa3B3XLcjsP7FzPmp9jiyGdiSXx1FAiFq4FiBFs1QkZdvHPoM",
  "key1": "uMWegnz2oYjvc1Rs3x78d27DxLkfZGYX8Gy2spJBivf97ALsWnDLs7aYTh7eYJaNwHHLpn3rSGQrcz26wUZXK8E",
  "key2": "JhFr7XGgikvLX5jR1U9HkcftNzXxChU9NQoKZhs4bitHAgEGbzgGNpCyM1fHZCwksVUbFVrcBPcx8H8WuLHs1Ra",
  "key3": "2NFygyYM68ts8GWss2DFY2u61bixsYXWhZpwHCg6CQMEMZY74SafsVSJqHNsqzVDiZiZMGxUDyw4uGwyFYKkppzk",
  "key4": "46Fx89aG4zAgcHfxUVn6xbAE7ffji7VcxDft2phgUUmLAEPFyH5A271bEkUCqfJBjPkDMTVXRe5bNGHNseTBikZc",
  "key5": "4i5f253dXoBPBfzfhvTiQWQ8m4ozaMsABa5EiiatVB6nxx6iUECdW3Hk6iBP3zYUsFgVSHnGqXsoU7fyJ9f6saBA",
  "key6": "2HYwWh2ApzV7yny2vznJK3J6cgUVUGTGpj9E5nvbJ8af7UEqAjsgEpQ9PMj3rQyFC1n9CWLa2geLWSL7GXqqX9RW",
  "key7": "5hMDgjavPhZHk2FbcbGeq9FJQ8fptDCHTsYk9UDxcB1ANTiKWpfZPQjJ5eTrDZGSR6fM2y7DuoHoTbf2iFs4scRs",
  "key8": "3R8nx4ntdobF4nc17qseCJKUsw6gmzXVdtHcUCS2nE88MuVbnW86kWS178EvDyHGcGQsSCJbkJJ42aPWDEiakZn4",
  "key9": "4yLSaEa4Bw7R7ivwvVJt2aTb68epHqRXrrUUUcG5E6jZuhDR7YcqtB34tqZu4mbW3w2x5Rqjt9Nqdfu74ydyV13m",
  "key10": "4Y414NTVsvhCBZt8HebgmKjKqwKSF7ba2mUigYzNpbRPojpJPVLqLciSamXD5inxcxv9by9fgo6kpcKK2sbUkCx1",
  "key11": "2vfy3MsuazTA9DMVBKGT9kG6dCHHVCxmiwYdLmCKrh6JheDdSNPrnT76Fwbrk3162ywYodrjQHrYM3zyHrTBbm8Y",
  "key12": "gbDEHChJRi6kAeCoRoKWT4KUTQnazB6QHJ7xXd6ytH9u7PNKMoykiaSPGVnrL1x6FHZk7cq8gZERWmUhWxNj3vc",
  "key13": "4pRyAnZuN2GJnpDpyYdDpSbkDdJZJnAatAAjA1KmguvBeYLCPpJJQkLrCLvFcGiVu4dzgNARoYPZ6KUqgdFPGGCM",
  "key14": "2Go3ydRhQPhtAV2jsmYbfPA2re4NihKDmihTzcvwDoRAzd27ni4fAAjtY4A3xstC5UQ9kP3GrwqyniZYMNMwZrfD",
  "key15": "5VDLPsVSBdPSCveakjaHTQ2z9tMq7J4RZ34Ru6Y3uruMmBqhR2LwiahKW4q1tr4mZYrE2ZL1UP8gLiMZ1RtYU9Bb",
  "key16": "2AyHZiSQ26oSL5incwZk3hyG8hDJzB5abeSx4zY8XojYjDGmKBbhirDokGQP8ewNi6GndBzmKDHRg7cSmLKRhmN2",
  "key17": "5xYdSb2poQX8EUSDdJHGu1gXDSMUbNA9yiqMJt8M2qJLrzFC6fH5gPos1F9zi4zBSVfLjT9Cq2gfG2uwbrLw9fHK",
  "key18": "3pkVsF2DwoExHAwPU5VTY5maPzQPVaRfRQgBNguBXEukMzbT8ZzBzDbWsu8DAbswiwbWMjFhDKqSUJJX4uHdQoFV",
  "key19": "3AbJHo6Rk5i2LixrP8mHE39p4vRw3ev9GcuJrR5QeF1RmeRTrmAfRscDHQXmPDfqNGs1gxnh5SnhH2Mr2cha7Zft",
  "key20": "316e9eXkLCQz8GDpWHjaKGwZ8npbygs3Pxqshs6ibqNt8uXxUjU5zGwTtffb6su62DC1VYWadHhkTenVAYZtSQpD",
  "key21": "28r5nbzSfdGWRKnrjNbkaUPDVRtxZh9yQuTeaCcBksYxwXr4o2sMbQG96xuPpnwtSziKt2FAmubA8NNSTNAuTj7d",
  "key22": "5mQvecPfKFH27QJNsZ2M7mHhYfBUQN3N3GaK6xMVzASoHC3Qsf3xwHujBh9cd6Ps27JfrkPWX7HQKDrPnPQLzkCt",
  "key23": "42ksj2s6m6xtmrC5ecZL8hbhb9xGnjyxpN1E6vU1MtsEtHAZQCTy1UzGRzi4MF24ekcFCNTGqzWx1EhLU4F8H8iQ",
  "key24": "5LdPh5P7pPEGCt5VMvEhZCe2fsAyDmsGFPzNFFPwuxTpZf1S5LuGVdgqxbBAFF2YJPJySaiFckgoncvT2VajkhdS",
  "key25": "5hiAVvYuUFNPUsHbEkufV7yZpi9qQb3KF51V32XYDFZqeiJ8Q3eEwLMzvp2h9Hs6FCGukpjTunmijWVTjMMe63ij",
  "key26": "5oZyztehc4vqo31FEEmKgoT7tzHoJknZGWgQPB33m8sqsEXhPRjc6tesdqMp6RWV93ZNYEZChS8eW5hpg2nqVaEB",
  "key27": "3gNMxLRuniM5MZgowAykWzREwja1y78sMuLZ8uTS1gFThMbtz6ACmSf8XjKntqhHdWrq5SmcvLdCwpUEDTeuXp9s",
  "key28": "3ftPMAGWfvWUC4aF4z6SLnu3PrzZdcaJc5Sfzh6exmBAJx7wK4oiDVuv2iturrnLFtVFZ2GcQhUJ8CgY6BzLsCAy",
  "key29": "5ucsANHWqdZUBeiQkBp3K841NKTUn3Bp5T8PD7z7wu3TSQYZnmyyD864Z22oR46B3ncX6Nm5F1DXeEnjXQ8XjXRZ",
  "key30": "2GD8TTU85b8oWVFL9u6rgQZUdbgdXKh8LK8Ztn3yum5QpdpPWj8WgLbBVLA5VtRjEnpsjSZB9Qhdvrwe2Ws7SLan",
  "key31": "51zcJMJxHPkpfyFRegt8s5x6qfvr7uudQjLn2d5qnrAuQNPsQaGk8sbgoHRr6iGwXK2ZvVcdvuUnqMqDyjZnE5up",
  "key32": "3yt2CkFm4zi89A5rDLKaCX9zhJ8sP88BnTyEwoKjQ9VJpDHUDjotkSBBLeov7u4znKgDTLrija9PSpxBKrnA3dSE",
  "key33": "5shMYPXiLUQZg4EUuqLk97EjgY6kXHAME69XaTjeguLmRUNhFmWFreb2zacjpxGDUix83fgEkLFjCVxyi33uZq9t",
  "key34": "6389v4b2YvBHPRwfK4xeE4tHbVXaZYwfry16TUe9AYk6M7572Ahn3642AeqWPbrNUM2p7M9nwRjaNd4x3qWHRw6k",
  "key35": "4mXrqGRx27w2hyDakio2ChXdxvFxQ3x6eNuAUncvpHP4Ua4Dn8vttu4GBeqiZ2NyDb3gTFVdbrJX7YmkMNgLUXF3",
  "key36": "3yz3Xej1YVgxopMcgL7en2jj96qDRQ7pFcubRL5kvpJavUQpU8WyKp4N8SHDuGaZsfb9vTGmcdfGGi14A3s5VNPS",
  "key37": "2Xwg6gPazupzapYFFkADUFCgrbvkp7aWSLmrfhQDd7Ft4N9E8rJ3u2WoDtPxm5nYjKPNhXAn6cD31LDkk8gsJhax",
  "key38": "2fVqt2CeBZDiQqYjVzpSZjqZS4ZbDP4pZB2eyfsjUcHn6T6YLKzKFmGUk9ts9cjwgPJoziwGoCxbEnv25zw25vFo",
  "key39": "VHPWvcMJ2fxaLfEnvEPXX9iNCyeidZDKxVwqgxMSdMKG4KrKhVYMdpyJsY1c3b8gXKdc1dVdhCBEW8mCFd7GwN4",
  "key40": "4At7Z5i19zyyUqP2SBQf34cekCegEnvdebZpYxYiPTjqN8sxAuZid5rdEJRoczJ2DcJsyFX1oYk2eU7y7yDnPpBR",
  "key41": "YQ9HsYcnvWyVc6vEebB5RYioBqcZaWimQjQ5f3jzPgEoaUH6SHfBNx9rPe2yGvz8hEvH13m375UqrgRJ3hwudnA",
  "key42": "4jkNXDKSwN4TsPPsgfpvzBFF5yGQ7vyVVzgRKjVbvUx65Rydixx5NwfLNTPnvDwiiwBLiPSZ5KN3PjeZs33aDPB7",
  "key43": "5VFHVuA4shQbpts4DoEStKSCWcYHWyBvKbXiWoRJRCtHR7zT4TDKLJpJ63Ec5tPABhf92KVDk3oqQRsrksb46TGn",
  "key44": "2RkGHeisdNGxxYU7tCLtSc88QCqLWwY7PZUKW8eHLWtizq1dDzXwMtERg2GKWWnLWz3PbMg8oVUiHfCHzdGCceVY",
  "key45": "3DREKEeFyobXGVQFmukBGoxu9TWS7DvLj4xv5ZpXoqcRFK9vikER5UsD8vXaH9i6Rdryf5ZBwNWC8csRdkJ2wDfs"
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
