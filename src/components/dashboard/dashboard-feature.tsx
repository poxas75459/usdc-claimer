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
    "5tFSvc2EPDd2idkdaU3xXh8DqaLtTcRAV5iAEgBEFSBm61nTmxM5pnRQxMkY3BV7FbNt2yFFacac8NVUyR7Fg2mR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AtJFX3D3LtcqV4xyWb7vFRMvsLmvxd1B7zCKv7H5QRpmaQ29AFjgzmBEFwLSJJEPYxsucWDacKJH4FJA3xNyRwV",
  "key1": "2ELzGSuSZJXxhG3j6RD8fVpaYmgiQekQktVNDhGxLmWMrGyUp4GDY5CyZgiHYY7QCgNSpTfJYfWJiKjedK99o24F",
  "key2": "4h2YDPAXQ26FBgtAbEhxU8XiP1XuGKBrvX7btWiwGpCjHm5LhVoToFQSwc9ZxgcyQFaqUMjMNUVo2WvxXBA4UVCq",
  "key3": "E2amAXoGEWrnPy6LjpUh3jLxeuRpvCtq6ZNwdZ58c4qA6yZoKtNBMnQb4gdD2BGDQH1X9zy2KKs99Rx2gjn7JYJ",
  "key4": "67QVmQWRFpyrsPUjmEybZeykvptH4jtGDBdwcXZ4RJ5gB6Q5Gyg8r49Bf8BZCEnchyL8K9Vy7wCaRAcYLBNrMnU7",
  "key5": "SeJGZLNqZCyUj2yQqr3N2VswdAGpBwrdaoe2ZHrmyNfoCwRaNBrVzWXN1t9ykXQiESwvJ48xReSei6j69FEvNoV",
  "key6": "5QzTtvZEXRg558a8DxQY4zjaoZjUbECeLygupcLWw2xaB7Zc59uAsYDXnZKW8cu175pUhRRdubUGi2C2zNbhzqUq",
  "key7": "5mv15hFPZpobdf2kvQNPViaDuGobmZuXiMTFtoXvHHugZksug6YW435XVnyPvVRKRTM3xWRHaYPVQ2WBM9yhMnrk",
  "key8": "YhMiqKWgGYpTuNhRZAvwGUrLgyTQUneu6T2RnWKAvtoJX4si9HjPcmhcpXGc75RTX5zL9g6jLUesgEGcqZ7v7Hs",
  "key9": "2cmBLD46Ghw6MCkuJhbSjxopD4Ft21RkZoAQ4VyESB3RfF9EX4UCZs5MR9t6c5ZEaWhjP2ttJirJkDKaNP3q7R2",
  "key10": "3JNneQxkXiqnZntciip7AcPjiMDRCJ851JYJ7ahXcNwXpKcAK5D1scUFNcSoMvAoqibJM59Lm3rbucVaqm2RLYdW",
  "key11": "4oVZW1b3PRW6tn2qnwKT6KM9q1Xu2svG7Pya4LcxvWNSFV2PDdr45RDyKdUhDvYYy2cofDgJ7qiwtWSj9k7tt48t",
  "key12": "3XoXVKsuH7P5FL7A8PuyvGPEQThZEgEPwMqkuaRL6UuwzAtkADmU2xfHwyj5rmgSRpEexeKdSv6W1gLtMTFTUWoq",
  "key13": "2Uq68o89RRKYPu11VmfFQsfSnnWscD7SRRVhoBkgvs5hmqWWZCYoex2kG5EyYGKk4N6vHeQjmLsvMCs2zQADpTay",
  "key14": "28VVScgU5ge8EZAG7wJKsXQmj1bVifUr11df7hpo5WmQFJwsouMpdc7TDuyEXkKngnFUpFi7NpFYbZSKseuHkf5U",
  "key15": "4rBDnyuXWh6BJKCzdzNZSiAWUQtGKYUWBJaCBXBZqVpxaWi2VMsToQxKvrTbrzgcmBQ4fJoJe778opGNTFA8GiDr",
  "key16": "2NtHV6grvsFdh4k1RzaVoRhY2gQFyM7SeAdLCtZEg4Q3xKHjWHfVaYiGDYDReVAQn7JoFVo5tH4XMRD7JnuwdDA1",
  "key17": "4q5UbvbjeVvvsTYEPaVSkGD4opdC7RscJPhb4FnnwnMLcHckSBTyMTpMfzb45pHGT26nf84Lu9mQLMGhBhW6jZBz",
  "key18": "3fRAFgvEQxWEqcyhxLqzMCGfe3kqcEFVHUXAVtYbhMmtfAivzC4aBhMV1j8EnSU7rgMU9EakDEEFawB1cPCUA3Yy",
  "key19": "4g8zCJWd84xdnXQCywsc8nVbR3Cqky7fCREQMD9SGSvgYZ8Y1cQH1StwqquwJf2J8kQkH3iNE1KVefFf77ZvddRr",
  "key20": "C8mqSMC8Cdh7WNbrSuQ1sR6at3WB6uPGRiQxnnLAbpWGmaAwaxUTyDcyn2VHyhEvuMErxvXG25bNoWFEU8kfgZ6",
  "key21": "5fMPEUm6dQEWQBeyvCLmJvzvXzgbMuDfGarQQAz2TJUD2Wd75MBLxAD3q3XrYumv2iBukQhDWxi41q6MqGnYrTQP",
  "key22": "315VJYNcE977JYGmX9rxr2UC8iUyH5GdGix5jwwZ7iYnTC2tUJqc8h7oxDq86NeuUyTpDzuqHRE745CEYpTR4LBf",
  "key23": "4xzBJg1FYXdZeYgUdRr1b2WjLxkELBHnreK4F7ZNBU1MSw8KqUKPJMvcYjHZdSGPRyQhi54DWkKdKWzQxjSACeMc",
  "key24": "3pEKnq4hLXUeT4DCiKyFUAoXZXeyMsq9Wx6YBKLgZ6K91qy2FPbMMLiGPMDxdMDw4GmNWe2fqnCDEipHE2QRwpD4",
  "key25": "QmoJL8u7VvaLUstuDB1r5zFuboLAEbuPaYeifqNxvTPDGvFfMhtrtWSVWSVwhTV6Hbe8T56unNR2QsffuMrZN6p",
  "key26": "tM6Jz5v8w3RXzPnzyRDNWMiX9bzLsJp64jDzbci4z3HN1KCBsBzxkX9DHuugq914bfFCdMqSNVfnz4JTCTnsNfX",
  "key27": "3sJJD2efYAoTp4Sz6t6EgxBMXJ3cGmwpoMNUiJrf7X6otqzPMjcwnFfWpyC8VYLow9t89gUjdA1vj2PZcMkHFpaN",
  "key28": "KxSQnWTAbvyh6ACWWWthuqsasSEkznCjnuRTwLdVpoKbqB9MC9RM8XNB9CDPNscY7kdWHKaTNdnTnpT8XeB9DRT",
  "key29": "2ygs3Kp25t8JyjBeZepvqbCkC2A77iT63fLNa4xyzERrN8gLAHiL3XX4ABArQhwADkwRa3THebwUiZhnPqdg3piW",
  "key30": "4LLibCCiSqtjXFRB6fyBZibyKC2NcMvHAdgiA5rhbMpP3hpYMTQZpFUDvx6xStoyfQsnBJ3q7Nd2VFMLman8FvR8",
  "key31": "5nmDcDgnEMGSa4fpSQja62CZ6yxYvyX5qJV7zkyQZ1J9SQwLeHtuJjJrnsBLLSS6eZWiCsE994rz6vLnffyMHgQc",
  "key32": "3B9eDqah5FEo5AdAupgdHHDac7hEYSx8TEt5v3wzN2TnA1gRKMcZYCc8ABcxJNe44ctk4KRiJypvxJYNizhp7NPk",
  "key33": "37bWqYCPqNZftpBah9HM5GPQbWKXZ8YRGCiSsCSFvmYeug9ZfGooti1bUXnTb7PkMWpLRpjnRe6Qhmmz3PWKCmC3",
  "key34": "5oNvJTHhaHFVQnkoXkhq4Hpg7HqxDpyiDH6mDPNiuhTqaiFL9uGmSTFLbimUd12FWm4Ag1JYfHXQncB4mhphcf6K",
  "key35": "5n2QwrVzCh4ZmeYEPeoKXzxk4DuWG3ZibthAP14upGgEP2BLC7mwGvKwuUGLorSzdmNCsgiGhBPaSBC3gFuDqgtM",
  "key36": "46xpkNAftDLDHHAmbtrFVYYVECrPr536t65XVLj9ApUsaKzdZ7FrsTyGN9zK8NZhoCP5gQrsQyhB95inxfVXnCcc",
  "key37": "3io1ZphgYp8uA49yD9zPCAh3mvgTxDqv63ucL3YVRNobi34XeeA4EwX3W5Fr9L2JmgLQmBUmuF7QAZ44QNLiqVK1",
  "key38": "USGUS5fmqssG6bboNz6TFhm11fkSehpLxb6NWEFqEKs7mt4mUDVYjoav3vZVrmjr3dBgqSQdXfMYzEpk6Ev48AE",
  "key39": "jbWQkfD93KgcfcwUvdRcoi5APbqbNcYmipevh4w3giuHNuUtYTtLmjXB4vd5cGZ2YsnaBN3VumKPhN2fDfyg8Az",
  "key40": "2xZcdTfxn4nxahBYdb2M4e9tXnKNsoiFpjA7uUGkUx83uN6XSorA1tuPVKJGfs8qVGR9JdDD5osdqC4eqq7cx6ip",
  "key41": "5UNu3FbMhGDzSShkyo4L2zmPKCn3k8td8dJdxPLivV8xVotw9GsFoszSK8ZPK9uFFE5E1QkT9dsahRzh55fNCo7j",
  "key42": "3Yj9Tb1jamyWfnn1XaXSPppXFmu3hrsqdBb7vZ3r77rY9bwSVNHP8WvY5RzRGx4pjfnerYmkU9keZKMzLsLz7sNd",
  "key43": "5p3m5wfZABzBBXScfu9rZHA8tEAktj3s6fb3zvRE8hSyfH2hRQCXwCCCUppfAuYjXQK5xCbroGuZ3dXtMX9vC93Y",
  "key44": "5CJ4j8mx9VeMSnqErk3r3W47ToySP91DH1XBdZfHx5hWnCLq3UqCsqb3sCxptJ7xYLLRbfoz8A3WWc3uH7HcXaKD",
  "key45": "2oCwjUibxZ7BJsWNpPPmDo3bkcLQGeRJ8qZFUkcbjgbuRSeJEei4QtK5gcUA1YgxJqvaUz7RxioCc2moTuM5UB61",
  "key46": "2TFRhtkkdR37QdQzVQQ8AbYNgyWu2JSZGWCyw85DGvTaLcVgLwcYMY9nVYRa76uoGcN4a8wVcUcJ7jM2La2tS3mD"
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
