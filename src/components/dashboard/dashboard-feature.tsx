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
    "5m2SmZr5rYNxkgLkHLjRwwFznvgvcoWLFVeJxJPyL4kCCFLLWw1NsdF6F8xvr1ekze7wXXP5g5D3Woi9vTiZHucY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S4nqe4WWhUtnQCEgMA1wybBpBRGr5kx9pQgXG4vyh8rTG96svYXL2CvMBh9tYnd56p4kGAAqkQMYwyCKZaUDvj7",
  "key1": "2n9JXKXu2KM41tJQ266oJHGZG4Kx2KjJqs79Yxm5Nhb5kvoRSyYFuwQC3XGWvBRsi4xg8YBi2W6VGTzWC4AVUg9R",
  "key2": "4ALpmYtC2E1VXcSJaVVAsCxThWf3jiGXYJgbYMYmhRquQxXu91bcohFtGUEizFuouH47tFCoNpunV929W7GduFPz",
  "key3": "3ZX3rLTKC1KBXERacTf8z1FTNSyvTAetdQ8HHuC4T2wsqLJvabyirqAgKSfFjGmT948TYwUm81fcfeGFnLsm7qXA",
  "key4": "5fuquJHqTU9jPrXtw71KaowYrnHiWysT72GU7Mw9eMUdeMaAoeMzroVsFUhnnLqqmBaiuriED3V5fhsy7PLhaRqT",
  "key5": "4nvkbLy5HEF1ZXNdezdJdqKYf96vYBfbc5aw4w5DLs5fW8z4XCF22ptfW2qCFwQS9AAYfYsxdChAq9uKjNbJjgQr",
  "key6": "4rhtj1aoiPqedhWSiV89eZbJxAdAC2WYhypcqyGC9NAjeqUJXbW7YFPkquGmSg6xtbTaVL7jNchz5fHJqPtW6PQe",
  "key7": "2SwevE1WuafYGFHdBbHm2boVbrfKyVYFrP33vj7wFMpVkwrRzyU1pS42Eo3YSVBe7TmTauVsjL8dDuVV5X5Lf8MY",
  "key8": "2qo5QBHHyJFiM12dskyP3TdmaRitMvfVafCAX6f2dpTSoJ9HhX3U1vugY3y1rxMYWZrV4wMaLpvUJtCWZUGbsbto",
  "key9": "3ecDHMPQ4UTwAjVvvL7C6BV8JY7ZbquhZfZrd7DH8VRea14WSAuosNydiczg7Gb4nT2kXwwsKgQ44sTWKstGcGdD",
  "key10": "FxnnFaKLezxFitaA64xpXLUThFg1RoMtRKXkKcCdMFtQ7Psnoht3DuEKaMqcQ1QikQc3FJ5VjYDf3tcppnm8B5P",
  "key11": "22ZKBB1d5kSVUDbfSJ8KJpaHqyM4QpY991tK6KysNgUTf1bADfxmhte4nS1UftzztpuUybeRXavxqVxFUpcbnPdS",
  "key12": "495WrCbQBYRq969HUBu8r9d2jBkbyNAHX69VxyKuJnaijSHShNJSZipwb6EmWRBLbSR6ancCeDA5muQcLL21JsRc",
  "key13": "2RLcUURqzGrkkyCK3kn484cN2vV7R3GgxAehdV4LMpp1qEArBAhEbsuzwNfQJmLiLWE1E1XC3rDbdxUE93M79Wx2",
  "key14": "3yW5hu24nNUnhy6jaDRYmJaZ8KdwHsJBmV6mYUcBFeAdHxNR3na9ruw4awExZXHEgddf55icaurhbW1jMFQaUcoZ",
  "key15": "CntAbhNcRyJk3ztaduFcyqT8PGuGJrcamVmide45LYs1xeJAaWRfrHFCMasCz6L5CCvyyaKM45opyoPVwnX7txF",
  "key16": "4jeFodJ47tnhgABxv2TZUVw4oZZMopZmqEHtXjwpBDRTEZyk9au5VojY9BK1gFufokBpG2eyBaJMLFcq7LH2dSDN",
  "key17": "4ggKth6tNtJ7iPByNCzM6NdWdXZoyGsaHpF9GHo5ngi2Yj8j741hDQCz8x1YdGnVw1dWr2Bb37cDq8ButCg6FDPS",
  "key18": "2sAvKtgrRjDoifLBAw9xVN56aegbQWuKyhUNUU7Nm313XJfZSHDbyXdwmktwfT6eeCtzU1YXR1T76xLo2FesRmgF",
  "key19": "gs4MsT5R5NZXdDmoNBVQGPgSNgUjUdmWTD1gS6U6PJF5bNkG6an7iLrgXWkcDHJdHPMNreYmUVdyUc4y2ydDMi2",
  "key20": "5h9NH3k8aBhE6hNgRqWdmDgnF8BpeWtmcbCETTdnKLLSaYxpap3GqjBKZmjSXwrs54BsjJsFiziW9Qmke6Xiq29G",
  "key21": "5J9s7qwgpSN2cLqHiCgM2bnKSsZsJWmqrzXfVQiySA3uSfzqtdfa5yPkSydLDv8uCFrPxz6yyYxM55ZCWWxWzMf8",
  "key22": "2qmYatmeJz676Cja5zQJ9rwpVe9P9QwBjY55mwGD9GnwtHE1ScTbuNGeMh78ZV8bcs7nXSMsHhN8MueoUwLT7KYT",
  "key23": "4qiYMim7ehixqhw3Apytk3E46rcqdJx8na2M29DqEvErWjiJH2bSy6MkRpfEF8FWSerqk9FAq8yCH8bVPc6icvgC",
  "key24": "4hwDgsfY5AdVU8xM6zzZNRt275v71WmNfFsioH98SH1nkzE5qSvYXu1kMedHcdqmTci2MQ5MhtLyaa2kz2xsVyvA",
  "key25": "4ZZTfycQTg6tpu2hh23mhNTC8hsgQiKMVs1TDQEVd6KYZiwQ8vvjdFBMQkAbmKJbi6tqwcPKC1vE3gwtEqtVo9F4",
  "key26": "3hkgaBFB9LXrHjL8zzhGHKK3BSyFsR1PhbkzVRXWcegko2tZtNBdb3yxsJqcragxkKQ5KYZEhQSaW7b1UqrnsYWo",
  "key27": "e29dBfkCe12gnKDqyvoLwPwnrvZahk5dtin1jDtjfndkftmC9oEMqwcmFGW8ZbcyqQLWRK3xzQPYFWMUoXdmgNV",
  "key28": "UyCtfVThgvFFA33eiHqSeQkRBVnSCFw8nEPvhCKpdS8KuLTNcpcgZzgAyUF6oS9aHonULVskjN4zvfT3TrsPNcq",
  "key29": "3oXVDz6xgGD7x9ZkwVjkcgUFdZMVPGptC22YaWLZ3CvR6XzmR8rgdUZGDPVNHX2HiEPdWanmzDfHqnogJW3BaAqr",
  "key30": "4Wfu9zMm168YbSAEQ69BkfZBbofTspm7JQx51Peeid1Wt4qWwTH8ue3UdgtFnUwPC2f8gBVqDtD5BxeUhTUnQDBo",
  "key31": "8hBRjZbrTPQCY8CVGpaYFCCdcYXbKbywjf53jHf5SbtZrkzR4MDcFiHZ7Kr4Q59gKcrqfNoFTczZFVPTS2U7hV2",
  "key32": "2p9a71NpYGtiJyuNT94GJajopGQJyhrZcd9NnhMbFqw9tWWZ4to28KemQzLSjPMF24a1yHLkY1HnWvyNS2Z58hcJ",
  "key33": "61oHCyopC2XzUKbhTXnHt7ciT54MuKhMf9t1Ki3KtWrruMXkkzSe6KwGMw7bvcS7x7fD7zAqYbaxyyML2T2t1xT8",
  "key34": "4Z5VuK8wUVhtYrdtncT1h6LDU9sTWxipnVVmn65Vdsik2w37A4UZZnBYjMVujUZVZs1tByQe6VjKuhCprp7EMXnu",
  "key35": "4jH7z2PoM4VZiqZgfmvoGmTm3q7VDXBmqdJV7nui1CcfwC8Se3yM9SDqErWwFFLGcM2ci7AoabQkMURuieUN5BVx",
  "key36": "5nYWve4hsyfCRusqi3TkkWMh1kw1VNNWzcNSfxtQgTU96oN8yA9PqpJKHqX9x5Gj63o2WvXeWn2hCiCbNcVx8xYF",
  "key37": "5MD81W6PDQuJmsXVA8X2PRcH5BfFsmsePJH2WVJ2fbEK83KjHnhaf6tefqci893MhysefXt7PP3U3GbtnLHBwXUX",
  "key38": "4favud63GcUATYJzqAV7xF23VsEidt4WNqpT2ecbPGHrKhRh5F4ztgpvUoQhhQw2B1KMYRwc7FKnV6k1jHwyeTR1",
  "key39": "2sbEx3AkaB3xEP2vP8urEkgn3Z9nyrut2VTmDsuQG98aqhHKFiEGFYyxKS1ybyjaB3u3HoqHNyEgTa1BUrk7T45f",
  "key40": "79nw115PGqTa3yRP3bmeEiGyfsbMGxkJRXcFmCYB8AHfYxKDrbhm8SQenxRvKpXFG9ST34RFjLAxa98uEion8Lf",
  "key41": "2PbMfqbxyDF7PqZuhgXVRyU7fhDZqQPp2aNZSHyQ5gRVrGeQCBgKbpE51UXJTwxoacxRxHS5S8C8RTHnwSFSA9Mw",
  "key42": "4EyFSBWqrWa92vn6DzzPQPf6qEM38J75YY22GJzQPcY2XDs71XPCJ4FMqAw5UBCT9E5rmvdPNK24vTdN4eK4gEop",
  "key43": "ptqrH9WWK5saUQ3RiveaGj63iw3Yg3jbK1z4HwANVPA7FVE7ytbTQr4jutRyY9hQZkkNL7LTegC27MqDCTainXw",
  "key44": "65ZDzse1hA3U2WVRcVHb3nXKo1QypNyuWJxfXdL5tg5AK4a9HFGZynMVNwiz53uvNZRzMo2f73yrEnCJXP6PPwAE",
  "key45": "4awf1EdT7EsjUeH6CvTM7gQ4ARkvczoXxy9C7ktSav3t7XSbxuDU39jMML3pcvSNztt6s58LrHihapjM21VtDsBy",
  "key46": "2SkCed47JGjiHL8W5Nx4ooPPkPUaqhiHvUyFvNwpYWi111o8ZmqcS8bKvYN58ZjhRooDSy1TZFmwXKgZCZyNinEE",
  "key47": "4Ex44T42ug94yY9R5YBtE428AJZzBNfJVa8Mz9NiaiHfERaseQxNQinvfuFUxasZzc95QuaDkbNmXyQoamKQ6WNt",
  "key48": "3GjU4PPfgymJxVY6q8osnx81CHRADERSGV8UsxqakA7YkceEA3kgkmJknJkQGuFKdxdsfubhB2kCZoBtAN585fBU",
  "key49": "4xomN7LHgQG7KeNWwRDQbNLYDqWiY8NukGQJLfzXFNGFiCn6iNWUf47ZRuQFo8bak9BffuVKw1sLKPCtu3dXBEby"
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
