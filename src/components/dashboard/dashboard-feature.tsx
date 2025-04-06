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
    "3WoFyTCCzAD5phG9GEmJMCXnQcfcPXqPdYsQUKrgM4hfausEMeXUUap86kVa1cxtqzMoSWR4CMKbzQQ1VKg3enQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XwDKResHNu9hjiLuaNkdA5bpfMraYwDBWeF2FsszC1ftZCqw8W2d25DecrSjUS8jT9N6APFG4NrrMauAX3MmH8z",
  "key1": "2VDUWZPXFhDsd9QFJUTLbZHQpspCLQ4cxadNzA1Fa5qaJ7JKNjTTBsKYoMz2N72jPx7jpUycZgbzQme94QgKy94F",
  "key2": "A46Mohrx8rDxbcRAjTy4cYpKtM1N7YcE6PCB88deDhuWMmKc7wRVyV1F3hKmwn2arzc8RsAGdd2p7KkxE62gsYt",
  "key3": "2xg279DKNswA4RFg7UquRd33vprEtLXNx9vzPWAhabadgK7nSHMWYRUzmK4eRSzhBqdmrzbXJGryfsxuLKYonTPP",
  "key4": "2AHrFuk6AGqweJ1pbNReycvfQLQ1MHqdtEdaY3KsKUFkhsKt84RYEatkau8SJhXHRR6EsK4nGqRp5fN3jN3RD5Ki",
  "key5": "3i6uFFqQ19DnbKtSUYGBZ4oMhuMu2ak9qDveAdY2qVj9zE1vBkGSkWEiYUL1TbYiHGEYXUYt1P7jv4FPssRCdKug",
  "key6": "63tqyJB2GqewHQCoU171mKdNXmqYe8mZ8xNuGnnsGg8wthpKPySt6DosDupg97JYan2YVDCZfuCs7Uj58ixWM9FF",
  "key7": "5tbd4jq4xmyHhkafMAYQZa1rpxzMjBVEnT8ydRS76QA78QyNAtxESzC1CJzMDW8Rrp8FNQorQvHKok6nBDfyRHoq",
  "key8": "cSNQYG9bgfDxt8FYosZZpnn71L9EDfkeNug8b18VNtLMoMFK8wNw5PxtPgbcNKKQ4AYJsUuZ4WdzAZERwbc9aZc",
  "key9": "2pKxVPFVNHoQvuTttT1hBS1YwbxbwdcKA1JuJCTyuJcJ8Eeg2ijCcgi1pUZpahvV4vzarsqX9kZVc68EKV1tRHmM",
  "key10": "5Ef2faknh96VeQbF9hyUaKn6NLzgqxZSHDk3CRSwiWWtM9u7EE5dzMrHpK2wu6MEs5BjmfEsoVAzuqyeaXefEPLa",
  "key11": "3ZVpGk9EHXeg813M9Qp6P4esTrnB5g7znA4CgHPa1qGRE6m5VmYHVtdzYich2jCaQHA6PVw1r9xT16LqfzCcaGtx",
  "key12": "5WuFiKoa4q1v2dgQsowk7FDN9ohC2y6pBw7p7WbaaK4bCMsetmViVHtyB9tr7nNEQE1bJkehkNjdArTqPBKjJx8g",
  "key13": "3dLa6NW28wWxjQfx5i628opX61sT3X1cq2k9BDKkpPNvbPxGjDjzFCzYMGbB1ZM7qZpFCP28aLQsX1fx67QXZWJX",
  "key14": "CtHyc1dGgp4Y9YJvwvbZWik5zpKUJLLManxUZsyaCF2FV8TZfpW3PQV1Wmx8LgcBN2UaNgi1ce17t45MZgdvwtq",
  "key15": "3PtNHFRFgmSsJbcx78MnP6kNqzkv5p7yY8dSYpCwsnA6koBi9BLWCRRvunswjgzwCcw84oeBcAXhRzDY3Nsz9vMj",
  "key16": "mmBsBz385ZeqHtuhoEwnPTC2J9SSKBu1YTCXdAoPEYZ7ySUguLW3KqeHRwCavBgBT3PgWCu5r7jAUUD7SE4x2TC",
  "key17": "Tq8SiMDgVoGpdYbVPnSE2DA2fAAASabvZt72hPPP4sdFJZX6Dv3zdAV59W96uUgChZ6fuCLDgjx8bhSAJTCsJ7K",
  "key18": "3Ed41xFxsTg6zEc7w1JCjs9DUz352AYUQujQfgcm6prk21CrHTMKAPKVeV1WJvzGbhkg85atY3ozWojdVp1JitU2",
  "key19": "ViqyUR2ZZAGPNngwdbjQiZAWmqCVTr1C9twuazkkqRhogCngaKb33Ed2ZHFXVPbGEbQD7DTxhrMU2vnDmKM44eR",
  "key20": "5XJtnxHmsXUyZCh5ZaEMevKR3BRMHPDdyQsKzXsvBpnwSicyngjKbSRafagVSx5oXerpUzZLpBMoXo74icuPAoht",
  "key21": "2uKkn4HeQfZHr2HBVJZVLBWfVgcG2VQJw1fF63uWZTUgwTW7nMR2QnbhEcjhGp8qzvbQkhb6LLSgqW4DS4RGGP6s",
  "key22": "64uU5AMhVdhNwqaDDmhPYyx6rguytvv6nnhvFvw3QX3zZDq8JPCEnqz1hesR6EXUjACwUdCs9sthSYdQ4RsrgWgH",
  "key23": "3yw4fZ9nzunUnfLrq5D3GecAG2fokpN8xDs5hZULSUKSmdNhPVuPdLsSPbvDDX167v8vf4ZMV7zwt8aszHSEnPWs",
  "key24": "4cbdVU2RNWCSNcatDEx1xuqccNg13U43Lhs9jniTgZbUBhcEgr7aGiXYPrDj41acbHe7hsy8PbS7gZE43VmVfHq9",
  "key25": "3disLsUqim7uuKX1jBwo6macSPu5Hto6xHbMt1htz4noU6xQpMDBqKzFWKyEhaPStdkwZ3L8jzpavLeNU6isbuQy",
  "key26": "56TyGxTvLGJ3aHWRsdQRKwR3tK6VcNhCFxDavHLU67iuAmaJVsu7AvgvCjs5U3cbcBEGkiBwZ1YE2hBVdULStTQk",
  "key27": "vsrWXeUns8GA25zP2rrXYA3pmizPGAxLF53xCeH2y1WjUnHX5vyy9ckYxrAtZ9Kt41CF6rawtxAkXuzXHwJnnMr",
  "key28": "3LQvG5bPQNeLsD4Wn9vHpR3saRiHJ6TwnzswhnXtSbtNEWHue4vECmizqDXSbeGH8L5gMTPJecFGekioYkRNZSZN",
  "key29": "623CzJ3yxQbukJnyjcy8hW9mfrxhhc2PfyMDBLR5RqPCvN8AfsJMHn3GoNZgb4cH9Qi6yUyafuT58dm6SVvD6s3T",
  "key30": "4vUzTYNaqMptZ5TJbB2v2BFCyGHD1ZH6d6V2HsUqWcQsgEDhSQD7Xuknhaup7iSoSxc5uhPaKC6Eq8mQ7KXjvi8e",
  "key31": "4xdS61sUmDCXgKT9MHC9fSeKe837r2K7PeesvfACxudPWVb16L5W85BUa5ojLz1pqvvSeYVNn8xbEBxasbFcqQEv",
  "key32": "47y7G7t2TrVFF8HdBjRPCXmCS8DQVB8xSM7gVzfSiggBEzRYFX8gipSqRsQwSrKf97RxzyCmUVrFjNUUnoK2t8wL",
  "key33": "3CLLaTKFdjcZYLHGKegDqBRvmt39mam6TsBVe9oWP6UBYLV7p3HHqbroBs1crhGoDKi3r5cXTkKtyaetXcKUBjk3",
  "key34": "23bpwFSryB34CNcm4aVaGL815TLw7srcVwdPNzMQ9KpeT3kW52au42sTUDhNJoawJpUzDzmPrAVKyYjXUyBp5LsU",
  "key35": "3SoHwh9dxfhtqiJb9Ab4DoMCrtjHhwNwcyFYhvtbZsJXdF2YQXgtQDfzRhZDn2vzUyxjTJi3L6WQNr3W7VSNU3W8",
  "key36": "LSn6W97CuXWumbex3BRV1c59QEKct5KU335jttUrZP8igrBMPyWdKqAJgQKyiXjTpvsKEZmyunQp7UsPmAnWvu6",
  "key37": "2oBDzXmNpezD5AzHvLec7kpA33GL5t2RtuGmCB2yfzjzuG3oFDY1n23rfwu2Z2Ff38odzobhaf6KudmJRZEghFDt",
  "key38": "3tdv7ByPj6f6rvXYAj39oZxVaUwTG7dDX4BS4xELQqo4XuTh7dThgyhRhBoMat6FdmcjPx7Krsrm2ptXEKz1HY19",
  "key39": "3z5UWE6mf1nxqL7B16KWX5AsvboBZaddGKdt2JeyQkMWppT8MjksKVvRxw65ugfntWbNqVvdT5azdvwPYeoPwLVC",
  "key40": "4kFLjP3ETpTdABA6nhktCmKWNfXRkv1wza3N97MjSS1XGRxznFQUTu98U1Hhvp5amCTg8v9m7rzorRGVFezkMa5T",
  "key41": "4oNTmYtEmfMWe7d3ouph7zKTNBC7dXKXkQxdhMX2MYARH2EJMcFi4WuSoUNw6aKAqkeiLLfQfwmtpGiEFcdtQKjR",
  "key42": "rGfzX3y8JAdf8Fgzt7ys2NbJbpe2dtfG1423vLpYdVMBNSmeTYjBb1JxxoRgCxwHAqWQsdN2WtEZjHFqwFe1gMy",
  "key43": "532c3sB626VdcWH7Lzqgyk5vAhQmsuhi2eqWhu7ibUBF7YoRLCkrDC2LQxdqBAJVMEwrYcMCtr6Lrf1bqA9kfszp",
  "key44": "4bYGewYh8KMACFKw5vVrbfAb2KGNdNQwVV3xRHt647PNP2JHc4ggaWbKbywxPD34JMkit8gMY9hcnebyM4xLFXFe",
  "key45": "p1i88TxwJu6EH4e6o3BDtBUC8dqGewsmy73omgNiEqdhWFdbXZzyD7mWKFjvBBDgTDvDA1s9oMLh1UHB1BLHXPe",
  "key46": "5vhL1VSTHyQhb34tvugmhbNAhr7Be5Xb5bf9As12eDaGXhjx5uQLtnhrbhJK6VPJJiUJVhEXkoycp11MHX6bfDCg"
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
