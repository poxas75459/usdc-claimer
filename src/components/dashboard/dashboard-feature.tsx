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
    "i9vadXjFBU2QStRgkuPEzR7AaWL1wQZqZ3xFX59UsBy28CYkPSbvKVMZExEvQcp34eg2Ppi5wNp5mH7s64BnKek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QQv5XM8CKtSr9Gbd8XCebG4KoqDDZJCTMfRSLtEsSw2wAw5TZwQzmWtMimufZ4C5dsvnm445x9XgZGANXVF8YcZ",
  "key1": "2VdMFPtdEa9cpLkLD4E16W8KXAz7KrTxyrcLbBf9UjWf2Ja9PqVhyf7RjiPv6zE3dnAvqsEp4zXLTS3q38FqXAYW",
  "key2": "5SeSn4xG8FjruiwJWheZPPu27AGtiKV4sxfVbimPn24Ty1MEKbBivAzUroSpzZqfqvJpXP7QB8ozGTqQF8YHb4iC",
  "key3": "BdXNPvYPipYu7B86odG5gi1NH4mZiPiKXNJnNENRNHhRqPUWBYTLqzE87XarGq3NsgxZ12YbEeAvEsgTqP6rk32",
  "key4": "44CiTmCQsVboj1xtY6hn8zhSt5HtE7HerXGsTzWRPe6uGJ6zikVPGmgmC1AccGqxQW73fm4SN2bYF2PMCFdJ59VJ",
  "key5": "3zW7f2qMhFtBqPHMihM3oxC2jQe7z8Tqk2wouXscp45xoNFvBP1q4zMgfCruKpkAJQHCFvfyaAP4b1PDPpHE1VMo",
  "key6": "5KAw6ZXzKniCFpXNWJtcUKQSZw1vF1QNjk29BdRZDt1WySoqcjkQnLUPqdFyJR6QC9YhbkbJdzQzhExZcqY789H3",
  "key7": "pzLSitnPNUtsazsSQQLHvNRF1vmYAt9yHvWdRZgicW2ocrkfk6jRgVhpBgEzhxvmSjBEUS786bZLq9o9KHVnJ4k",
  "key8": "2EdnBpS7LJ6ABgtupi2SK6q6kZ2nN2eRoD6U1LL7nrC8EuePfcN3Fu3rWhEpvx5pHUBeodcL3NrSX7wYLLh1SikR",
  "key9": "56uvPRSe8Hjw6mrg211evfsnpktVxuBr4ai6XFLAzP9jo7QdptAsd93vDpEYsMJAZV5wKzMrqLgRyRBmeMKSVw81",
  "key10": "3ugpjzotn1xmwDNV6wKVX3jbwoQY6TyhQmukoX6gq86pvi913GgJ1CcdYTZYWYc1PHmC93b6m13D9W7oVvTDcin4",
  "key11": "eHVrv55Nzrs2kBDynDxYRUPuxDEidiCFirbp7HRofvZ5FTC3yoLtPQeeGEZS1nEZGJDwXFMjYkpg4At2pRemq9L",
  "key12": "5BEYtXt5UBRYeBe3cy45pFBssfFzsXAr2gPPzgQjViikzZkiQVPuwupd1xxSHAyksVazqGo5x7m48LhQcmt3PA2x",
  "key13": "2PWjiuTqyAyeRuMHyVkMjGRBFTNGZg29DvPZq5NcRXxJ69792cqgJnTcjRXSmgU9PW6LiL1dU16JaeW24Pn5v7cn",
  "key14": "VKWja5npj6gbftwWPhGmmvrnQcbmyTTHfSwrZYUcnNhWce1SVdx4CoEJLtnyf74QE9vkA2EswQdpEPsob6yZaHZ",
  "key15": "6UQkXrd4M6MXjoRfrwHU9sWYKfjsgtbNzXhcemMFcki2eUMPMtDU8vbTK91T3EkjY1aKnDMfpdThhRyCUt2o2CY",
  "key16": "5JhnXht9pEjCSt9KrZsYCSw6KiuEPBu6JoFhAqnFHLjTgx36VsrQd5Yc1NwsD3Qy1AT6zpNxpCCS27Fa6LyFFJnB",
  "key17": "4Z9QMFVQUUKvgqW8Qq98emJtEmHYF56SapjutivbQuygckXjmws2zV7E9CVPd3CYDp4sJ1jaEkgcfk11pDstBpfU",
  "key18": "26NSKRWwS6YQAHPtpf2sRb3FwG7pqVFjtvYCAUkSj5xTTrmJz9sjbxbC2ppRbDQnkkQspopF7Figb7Pj6mkGMvqS",
  "key19": "4mHnY7JHzsVUPoj5TTaocVbjvRAH3ieQkJ69XbQZVTxvSC7dnV6ChXTpneXedRa6dDdG4LArnErqvFNm5fSFKcj1",
  "key20": "4d8EF8AaKoQbiVN7Lem6xVF7DtGeyKhSiLaqr3fw9MbGx9At6uWHp3qfmjFrcBJho52dpH3AGqM3GBrGFeEupXLt",
  "key21": "4Lt3c7zpuk1fxAqKYKtqYqH5CAVcsXxPjVp7iF9aa77Fe1pEjWLnhfPEThMQZwReWHMBzDABKuRPCZhCeXFcvy4m",
  "key22": "43m2KZhYG15rJg5pjnSg5pUU7ASXLbwhpmweWhghDTfZkujY67Wnu51LSdC7RHYg1Nks28WRNynpFU9KkLUyHF9n",
  "key23": "4gdV9dM86LM7ms7iZGR4xVN4vVNE4LDT5yVDxgWsMWhZHhfm5hZuFv6YfoKuoctax5fpBaVyuYE6EVG2P6UTQhL3",
  "key24": "38Q5SDhM9Y8im6MhP25GpzuMZQU5aUEwGMGvkiiP1nYjM4CUEWNLpHGZm3JDPPFvtexFNN27VyVfXqFLamCUT336",
  "key25": "5BLuCdAZgcHtshvV6QN6PjtZ9WLK2Frvao5pvNVYeRUTzdQi2zjRNBwRZtnNHz8S6wwogHUTAen3rdSfLhgdCmrX",
  "key26": "FRUUSEa8SyUXHqbYCw6jmo2XFPwLzn3czUnUBx1NhGjx2ttkN4qkNHdsiiLERUgHnP7wxX2uy7iK2sosikuGUor",
  "key27": "4LSLWznkqqh3u8waQB79prkPucQYuM4DtoE9gn2Y8hZ4S1ryDxNqcCLy2quBEPpURLtUhdD4TG1WKTFBHV7GQhqt",
  "key28": "2L7satNdMHnoatr1eTgo2mYxPBEqtjWeJ1obsH9XZr95aroz4VrRxdTviLDPMMb7ppBXbYtvG26W9Umxc37cGtep",
  "key29": "3dRHdoHbgKqP9qFLmRUbFLdyDDgVQm4bEEFGbpsevcEoraYsooY2giSo9tFwzUCjKzfP5wJHisVGs3KDxEKWTEWc",
  "key30": "3EsJE4oHqRDW3SuNFeE5cmeCXdgK63QuaKj1u5d4o4cUqcQQcKpsWojfDXJoK22pkSfL1DL6hzFFW8YjEoA14oMR",
  "key31": "PMjojQC696yGrP3yhfrozPKg9UF8qg4RoTWew9aBF7Pk7NSytJxGnzgtaws3jg3tRomatMBt6iy9YGfwwMjGZsp",
  "key32": "62Smvu8t4itno1RGLziMnSpsfBrHdJSkrmrGAL8xSXkJqCNKT51rTdogk3uc8c5ngW6HYR4L9tTUT7WeYbn51FVW",
  "key33": "2KAGg1MxHKGaRbQ85QFVvh8gkFEKBc9jk33XVjn5iNvGRvq9SLZjhfGy6Ci6313DVYEt84K5hVsWtPYsPm9SXP8p",
  "key34": "5bYUeLivk7jyJdRdchyskDHqpCvRd9wi3B5dgUg5dEMLQtjTvghKpTSVkbr7RKTfyq8JmeKiUyoWSjVSCfjGrm2a",
  "key35": "2DGhzzFj2opeuZCBExKcgDJgkJsxx9tsZTsMpV4qsxjFjATUXtAsJHZJphq7ggUvwmEfhKQ21tCywPDwvsFYwsff",
  "key36": "43BHcfcsUJ5fZE5uuTA7vMBeCvdwN6kbc1Qp88VMEjYydNKhi8FsvVnk9NQjpKHB3dLhNzvgtsmyoHzLN37ptKfg",
  "key37": "4hyCBMLZ3ft87EjKmRfegvF1Nwf9KrjyTqBZd8zcJBET3EGMwy9VEeFJDBu8UmED7BN1aafuX7yLfCjiNfy7Fngo",
  "key38": "2jdWv7Nnjmd5KGYjp7XMSLdaXhtfH1fXop6wRkL8MP2QySaxEvXetmvg82AHoXDB1Y9pmpkdaanTbmdiKUd1GYCq",
  "key39": "59xhPqYQSp1d27FrQ7xbb3dYAjYZtRaaFPvCXaXv8WbQ9eCS88v6yy3o3wPC6xk8vb9Fw1Re88vysWy638kiWzy9",
  "key40": "4nqEfipWuCtFUeMicrcvDBeppqCFbQ3VMRUaUk3yy8qNMwRQyR7duL5Jh7jrGvEaAEEqt2xi7eHCSbq6E1YkNJBv",
  "key41": "5ifXnkgptJRd6cpW2X1VtRTTtUP9mNoBABY7ExoK9HZyRMX4Ct8Mq3x5vg84yecnFA8CaMSX7SJsBkHRCb5YGHga",
  "key42": "5dmFZEk174XZ8frxkwFmAjdULJvcCnCaThLN95Kke1cUfKhmbSxrSCHzqkoQ7KkQfx7K5vrKf6hhLgx8E9m4VZFj",
  "key43": "5Dh5bKvTH7zpuKXFKVPGWDrgjddqTyjSq3e9APCNoKVnQdzDmbFvnpjPvX3zJpTDmZso9op5xkdhfxLPJAV8dChf",
  "key44": "3TRAZGpBMXZ9pHTHRQcNPbdAe5wZLzsdiS6Q8CDmWgLTDQRfEFZ9bGeDrtQiSh2fT5Vnrc5PpQPXiPs4eN16YDLy",
  "key45": "5224rkeSTEYe6Whupp2XpprvW487DqrR3bAyb3k5FatLdCkmuQxMFnmmMvbL6CCgF9Tz5YQs8bG8c3Vtvsfxk9jr",
  "key46": "3MyLBjrcfraDV2jwqMrMaDt5bnSh4fpj3NGhsRDCVe8Bq8DRCfYYvYH2F3ksWzBa4GjHeamuX466K5ZyuSsm6uZm"
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
