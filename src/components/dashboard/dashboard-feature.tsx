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
    "3qKZBUHkvxqzcWDy3uyPS8vX2VbzBHDV8brRpXrF8LpfPgsbnVmrAqk2H8mKvQJaa6aptVDcjV8dNM3dZwQNqTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58qBa6jEq3UYP8r35tyhtWnKgj6rcTzy677nSju2STXYGheW35XqL6aj468jZGUZWnvDCBpRT9NfuG9UTZ5zqQi8",
  "key1": "4Y1v1Koqq797mbX856eoH2byzZ7oouJz4BopdEHn4g8vKvHU59gujs2Nj9NnTbHUYci8KNmaNKfe7Ut6DPKxtwGu",
  "key2": "3yRbbX5ezwGQA7efYTf6EyZ2n2hmEcxdEvKvJeNYd5gKnq4oKSN2hDjFW4otcPxBB3PvBUn3C4Z5J6oLhVXXM1aT",
  "key3": "4cTSyyWcLZLv6fMYwAuHBagCSV2RLuzQZBBTsymXVi4Qb8UyqDj4ZW8m12aRq5xC1p3n538EfxdtxShPSU4tc67g",
  "key4": "5ArPKn3jv9448PL3iwoMhQPGNDqLLbNtckQvYDkgtCEv46DD7K1DrHpr7i5ABbS3TMaQhhmxHihodZkcjM6C1Je5",
  "key5": "KS94dTb3uRePNYAiT9pQVGjdrHqx5DCrwqWzMVuy3t8a5dP7R1MmaafLBxMDaS1bT2tLHnE56g55pyCp1tVzyqR",
  "key6": "2E9uk1axeAv168H7diinnu1SHpLCRy5abighN6Nj7wNPjzs7AyW13LMj3wu5CnkWwxN9pGhC7b2t4vWSEgt4VR7B",
  "key7": "4MUgrwgc6acjmBGamLor6GFtPtijmmgqEwtUXGX8FDB5LLaKoo8zoXkprcFvrUVmKPTBrvNnpBY44DBfbQ6M5fe5",
  "key8": "4zxojcYjKN71WJamip33gjMURon7rEAmVRfJEZPvahfiqafUo2KzTTMN1JD8jWXX6EDChHgX5mkUDZJ9okaXZdDT",
  "key9": "oyUvBEE5AwcSWqau45Pc1QFKyCgBKpj57LS2HkEHukmzDeSTVzJbzEkxS5ojJ1MBYL4TZpXx1s4ycUGCzDu3pep",
  "key10": "5Tb5DMoAoaLCgBarrZWrdbAtW5dz3CobyUNiRbq5eNUgNBJXJ8L5ARV9D96219jF7oyafMtEGkCJ4Y2MxvuB4zDk",
  "key11": "k21McUPszhA81eVp1WaiCXf3C1hfASBbjAer9pLn8jHkDhS5Dmj6VE3FYzRQkDn6gLs4zBSxYqPiHHXY6tvuDDQ",
  "key12": "5Epc4zHHy1B6jLz3WnHunWUUoCEHL7z8vpib2Bz7sBAVh2jNqur1YGhFjsTWr4XPMR8rheGrWhBcMWaXTZhDH5Mc",
  "key13": "45cjuE5zNuGSg88PuLWWjZQ1Y4YAP8KYuorgmV5DmhcYNcaoAFZHU74rLffwS21M8SrxNedfBLEewT4jzA3ZeRdd",
  "key14": "5aXMLM91JsU77X4ThHsmPZsvVrtWDxfUKSTnXxkEqoMEinE8s25y5b1aG3jMdAj414Qng9vHmYV36GbkQM7Xzk5G",
  "key15": "PzZsAz57KuaTKRYfPmvjbrZeWRRZLq7FWBwWPq396zYFXhqa6FSsGUT9yUJnSV8wQevjJ4G2DvRqdh5uxQZrhmu",
  "key16": "oYHJBNuPRZgaxtLASk3tndRCeH5oKU88kG8wpCJUhYb3GzdM5zNA5QYQoixEzXCu34fQtTeMQ6W2qmZRArdyF5H",
  "key17": "2pUGkdmD157etF3pFZxXC542JZx7MuiLSVFZmGvihsmo2nbgA3thSbjprpEkuDgVnGwweE9BzzPdvfMRBNsTJMTp",
  "key18": "35jfe7KE5daz7sVrwr9ReYbByqGXZF6AG8DgMBLqqBi1P2tCwwWggeAdHSMCEHWugp8D1BbHKXt2aiXrKXNRfoZK",
  "key19": "yPJYGzJC2khGAhWaGmBf3tEkdVB4pG7y5BtAKDPviixCp2rZwGCBNgAc8sH6psjF7Bio3yHY1S967UFpuT1fGcJ",
  "key20": "sfUQPPqD49fN5wNvsHsKrET5gY62Tcwp7bNJcZHFHaDwnu6z89hQ4Y3vxLVGTSN7d9cWitghRQ5KFpVFNqpwhv3",
  "key21": "36rADFQWYKDGZXRmtGffGtnRG5cLteuU4Q2gWRm8ETMWTHRYcKn5iTA2sc829QCMRT2YS6uGZCA7mEmVtzKfLQMx",
  "key22": "5vzA6RDERi1LWYdeQbaUeb9zfdFW2rNwtCrgxuGeZnV7afY8w9p8qAvSMNBZR3Wg7bAtVKmAVPpb7BZyTEHrrbio",
  "key23": "5okAtc2ieJqAqkx3yTrq6eJEhn1qRqqwBTsstr6f7kv38RmVNVnaZjyC3huxrgJXwdRawzjt6Y3TjtW4R7Gmqwsh",
  "key24": "3jkjxquUiZVR4f189gV8mVXUS6KDYoALgge7VLBpv2gh69f6pjisnrAQufiipbnBSZ4NBHXscJSA4xZAr7UvhtRK",
  "key25": "3xTU7Aue56UKfrxgZiYuhNfDXLxAXb5CggrMVnhMwE6uBYYMBnAzD5K2zxESaYE2Q3ti3EXruyRfhdQWJJTZHCzW",
  "key26": "653EY8JHY5ZZJTSPAbRerHmCeFNhkCdpRCXkB2cHeDQYZ8iwYqxVsN4TuiDZ2Rt9vwemBdX8MeXr2cGt6v1bCfKy",
  "key27": "kULk73s4HWQyrRy8aojbbDiFTPtwaV2fWYutkFMaJR8iBjFY8yHGmNd2iT6iaKGbE2ahVtXiYfLpg4SXEwqer8c",
  "key28": "5KuGAWKzGfrqVUpJSdtvcjWg9ZGJPJRNEFn9JqeX8G2sUFxrbw2aiQaStu7GJf5GUC5inqCxi7wA7xXMq5yxHi9y",
  "key29": "4EQHVYxZSK7QEk1h1k71CF9W1h74QmvkvJ8DrVzfUGYXuvuunx6fwohiW1cRZ51m4CzP6qzkuRnqbux2XzjJjPVe",
  "key30": "42WtKpYXTpRjrk2BzDbSSCsAeryfS5xM7vQcXkaovWVUZyr2UXqRhcjGjsApaXtLWYVjsgF21HnPZ7RkG4twFimk",
  "key31": "63FvbGhhHeVdJTkyhWH1598bncXjoQe6fW1sqAYwh4HF7ra1PjwghhzJAksAiEE9BCqVkfFDekKMyfB8j3cGRggW",
  "key32": "2ctaacx6wDExetqjBcW3cj6z8TFWaFFG1kZewwY9ARyEQD9qFmMDFL9HqRdkacnHDxd3BENw9X95QTDnVdSLtuXw",
  "key33": "2MgCGJC2kvwTZnocjzRLbpeXbypyqsx8tFW4sXWDw94qAEmxbK3tiDxZsbq2nLzEqMjnUL8TX8k5AtvFB1igjrMx",
  "key34": "5o7B8pKWYLp29zFJLhA42QMajWtAmLUCb4njSab6p2YCMMTbgkT1MvKtDrYZvwd8MD2JuB6grxaQb3mrvCQHcfqH",
  "key35": "3dp6B328fKEAicZqWumZ8JbdbYCiNmBfg8dSvzQhw8CcHWjCHiMcpLfwUo1BsPNqKMG3nXxBifi7j1M4g1SKVDaU",
  "key36": "7WBr7EzYGwRxDoS3ZS1qkk5NHwGMnPw6qXqim3EyH326aT77VrdR7FZMoap17gudUcnENdkSpBuhahEF4Bma9AJ",
  "key37": "3eemFquiGq7HR6Fr2zkuS4zsjTUc2cn3cxYG2gPwyL5rNVJMzHNCdA77tHtLG1fmD8bJ65bSbVjAWRhqAuyp4B87",
  "key38": "5hdytNPyh6rcE4cezR9wAmVwoUTCS56VswZ7aHq2ThfcbyUqwXvyGdVMLZBFik9dNqQ3kSYDmHs7MW341T56R2Xj",
  "key39": "4KMdKeCA8XqjTNppw5k3nWPQuB1hv5z2oHxLo7rHmFu7SChEgxc8mEXUS1wiaC2Lwc2FJhAQwVuhomSeDdmLVdcL",
  "key40": "5eGKeXfxgXEYbSXcULejwpVVkfmYZ6YJR6UPuUrtxNVSa38sTbo48px8dzHrsS1wzr3aWQHZtUUAWg1yzK8GbGHH",
  "key41": "44orWLE2Rjy9U9RUGp8pCt2opZNGLsw2NENt5hHiXyD5MQ3xCHq5yMKEyKBRRTQjmLkhVJ2nZigrDs3pPn4qqaeh",
  "key42": "3s9m71WZiCwncrXFuPJPHYURicNg9bkzNQPDPu5rMbhbmTywYxaiWQ2jNmpNEit1gFmLsbhFrP1YABFN2Zz5vef4"
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
