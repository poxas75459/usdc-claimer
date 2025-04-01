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
    "3aEsd5AkgQSxYrHEaMqi9uhHgWCVCyZ1UDaZJMHvASLc95sZoSkXAcdNnSjPVQ5SX436NC9bhs4ozyRmUWAtrDG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "243X4g5Se6ne3CAjp2QSkwSC8xocv7AaBEygb1GnjQoWT1ATB9HZkXNta2FsGxCTgozPsM2X1xQxT1QgGov4ZVhy",
  "key1": "6y2C7KB5CJrZwdSiXYqrSySFsqhVt7HbzsG6rYgLLSMSqn8je96kh48ERMBeeHReypEqya7n6kJ8bx6xmJHC3MD",
  "key2": "5qnzBYxPnD9CDSLprpKw45eY4Wp9VVsPcN3cZ5Yv6optgiWgT5u8Mq2JqEju3n3u6CUSWyHEYQRGYsEkasApk6hc",
  "key3": "4TwxeJGyn9QT12NBapi59wLYHqP3oQFcHvQSBy7uiLzWHP3nCsMHrsFiy3rp7MvRiGPKrTLsnk77eNMbZGZj3jY6",
  "key4": "27E2TmeDoTgBgDEzifpNs1Nu9c4rEExSkb24NNVFK9FhPNDv7GZfCGywvdjqEd5BgHkvhQuDXA4y8Eupp36b5hFE",
  "key5": "3xZ1LhDykRuTSNf2p4E37XiChRxX5trSE8mgdnLhU3aHk6KsWqDYyv2j7XnfjxmFSS7mTmknYLNYub5G24TgK8Ry",
  "key6": "45GfFLAd2Ta7PYE56dswouSHuoANRFjkvLBrZY2q1o6vSVpX53NVHDjRhdVKdnXTeaRmQGFMsyUjv6Z1MXnZgAt9",
  "key7": "4bw9RtGfPqaHLK9E4v3x5WR4vtbtB27x6XkxAgPQEJuZt8MUHY95HbfKaauKRK6ssocmNLsdqgAawAFXJX1xeAm8",
  "key8": "3kjFUvXDqPuGzCEbQL91iLVpt4mPCbrUbmReRho1FxyPnXedsZZLKbpzrnFG1LRgyBDMbq2UhZNvCDQWCW14TTa3",
  "key9": "4zd4cVZbHX5FkP66B4semgyALvKKPWw4dF7jDWF9vruP15PRY4H8rzJhT4rX41Pd2Su3ghLAQCNo5UUXButZh4FG",
  "key10": "2w8T3ABbCjzL6KszUuouUKQkWK6u2kiwoMgJ3LHaEojCpMdj6LCZ7w3z8FuSUiSHhsHthC2qoBz1d3rBr2nmiA4r",
  "key11": "9yD4G6wv5KJfGZLCr9y1WoDV1MzdpFQjRNhaywPY37niNLWX2LvTByoENLJ87Hf3654wmqCS14V68V4X91eU2zT",
  "key12": "3wjnLS46ALCnzb2yYxq1zCre5viJTHFwFfcF35S6ges8BC2nbNchg8JtzZKkLPAqDzkq5MLhai5tVW786d5oBZNb",
  "key13": "4NBaHuwSwrEMQDKzBeZ4fBCGUpFn21JAh8bw18EFFJ2PGbF9qybuid5cboS7GzUafwwMhT5ZDpuvzGZRBK61gEyQ",
  "key14": "4Z48tG4AVAe6FYgrmozRxFkzNpp3UXRur3EnbCWr5zeCa7ji7fUqMRJSRLYVE7n1SBMUYWhCnSVz9LpAvr6jiCAH",
  "key15": "5j37h9ELR7xzFBkJD4P98yM1t9eFs6jEudTKB3AfREGBwPymSqB6Bx1iwdxXt55FAanwVgKYKozbxBWoXvJZhxDx",
  "key16": "5dwqpJc5GhX4Vz3uF7L8HikSgxxYK1h2nJvri5pfm5g5cmAdoLhUouFck38eswmBjAXScvYwy5Xd78EdoV7AQ937",
  "key17": "2fBXegNniQQRtXzJbUR2VKQb8NmfnuK174pRtmgCHMaHFkVVk9nYWxAuF17vRJJZQxZw5QdAdFVm2DQgpk6fVJDX",
  "key18": "5UmRmmDvKvBnyEmWc23tJQ9AA1xmnUcHhauN6cNtgePkuXsu4wU9pjjEx4Uqa26CNojaPCpMxvqWZQkFMcuENjm8",
  "key19": "VSSVF7RkoWSB5EHp41hfTiQXVPkthzzNsX6Rw7WsUTjpSTe3itsY4bucYf8exRBiYN4EGHgS9dc3G4WhRWf5nKc",
  "key20": "2eshRVmS22ADazmEfGHD7FckF9vRURHbfqKuSdr6GgcV3JKJFasLBWtu8fCygVgtMvN6tTRH76uEp4XLSN5owVZc",
  "key21": "5Nvu65dgsNEDnicD23xQ9WvRDZdFtsUgs1ucwSyXG5pdQj87edyons31eyyS5Q4aCZAHqsViHaFqZphkAys8gvea",
  "key22": "39nApnqt72pfFeiorKqZUiUhYBXSYXjgyUJaPdLWLvjvaAevc5FhGA7qm6L8iBcVCdpZudqMe9iCAgarKLjKbN8t",
  "key23": "5sBnev6S1W8QddgRd9sqoXoCnQ7xExBPDbwB65DvYbiFR3hHNoPVfS6q2Psnxb5cdzCLkDZpHYCmAAkLqee8GdHC",
  "key24": "3p7nsAVnPKDV32dSXXTQH3YveG5g52QrHhnvZ9rMFCR5GdJLCeT1YBg3gmL6gF8UivgxY1uWhUCw9tR8vxt4Rw9k",
  "key25": "3DanmoV73RZPFbFiMqTtct9md3CoWE3LKXiZ3JCKzeumQ9WgJssVQdsNPsHdTw17hZbEhPQZSBeQuERCSiPgQc1h",
  "key26": "QHJoaTP829urDerKuES8fv4QtKEQon2Wzpi1WSgHJD1jERFmXXDhrQKsknnwJ6DTNvX18MoMTtDoDFjcPmgXYib",
  "key27": "2LLbrebURcD58ypCveLAXCHtAkQFGENjw3h1B3BPUou1ztWjSsSk9Pwot6v7Q5NX1ZurehSG94ouXpKf7MBeVmPa",
  "key28": "2ocbkc2XgjQoJg5MbJp1aHK2L2cyZdjcMCcwRoejdvWTAekS9vD8WcCTMVdED14cTSSTprzSrWBkfip3bASZduDF",
  "key29": "4Y2iBF6eZn7qnS64KT3mnZwi7SxUf66EGnv9fdZgxDvAw23kCCA9YxaGu5fSykUU8GBJ1mzTJF5F631MPmUyJMEg",
  "key30": "6685Kg11d8WyLnkr2d2cuNAQGAgiwFoMGXU6DuUxr1Mn6QKeKxSAAHVhN9ooQnAhUxnr1RPaPQtsEz2oi3mDbNqS",
  "key31": "3gRsPBjpd7on7UniSc7jsAZJ5xKBCV4iMjPuosPffiEEvr4cLj3g3QHVPx5q3pCKf5yZafCMwv2M925BNYXgMn39",
  "key32": "2J4fgoswTeDgwsGjsqQMEkZ3ktW2XXXrxNTtNJfkCjPP1MzbxDPRHZgteP5vauKiV5ZpDEBib4fhvLGVdrUpbdpB",
  "key33": "2a9wqCjcR8J9CMWAcTUnRytN6X8NDmfb9Df6WehsWCWQEhECZrxJF574TpGmVRdbcu9GHrmP8yUn9bkcXGLCsvtJ",
  "key34": "4NvqGNLsDVDxhNCe3BzmNGa7SuAibcNGUJrSxkK9YYyW52z6DGi8s6qeChkGwpXY2RVzbSou4PthTDVPPq7Ei6Kb",
  "key35": "3ZDcjsENGq1wtoJCFFGitxAY3sDdj5zUfvbiYNCCvdxJshRxfwKvLRqxZBMShWUtJPZxomgBDuLJAoCbzGZeWBth",
  "key36": "ZsLxadA1XS5Gjpcq1xhJRR25VKwHTDDg81rmqaXp2V3rvMLZKdn9gCxdhAUPmFoUUxVNsjEnBRF7eFhY9QXcmJj",
  "key37": "4D5jx6TvsmoStEtFgKNK5AhQU4xDU4BBUPFRcZX6tRZvUEnmESUXojaJZzK1jhaR4CMaDWChM2HMecE9cvwFvJ7w",
  "key38": "3Vz6DT4DoRuW6bCRxM8ENMbUtDB2AySMCWWrvsNNYVJ8ZAfVgf1EUYvoxGvkcQ7j78tVpF1g35PDAWw7acXQWynv",
  "key39": "5oFxfHcYGeqmdwWf67WhYM9YWEoQBZMNSQcuSUQpoEgQBeWAW2qgmtQaeFC4poWTZcTFqNirEzVRFDjeUipXHE6Q",
  "key40": "4rG5Yxt7a5WMhTEYnNbzRT72RLArrfeJamLSjwU44gzYwSrmNqxbEVzY1vrARVPTKGm8ZaqrF2iU5Ag3aEhx4oii",
  "key41": "5xqqS1y8bFyQtsSFWQ42NUaUzbmxzSVXzqaMJUEZszbHT9wZmGS46wpb6dWNqSxsiUdbb29v9zVMgRkDx4JvPDo4",
  "key42": "2jScVgCMK6BCFP8wymNg96n8e4HpsqNew2nGNXeZ6aR952arTWcY9JANcnYwWiuTeWQBnrbSBR7tNNtDVYdQsDQi",
  "key43": "4dQLXgZRQzGRHQaAwEYniowiSiWRdtWAGGep6vUJ9BafomafrTuaQnoBHQ4vbCWbMkstjxdEf58qBbrLZC5uzHBj",
  "key44": "N7LkXwLQHF2aN4WnPK6GNWfKiz2gMWAF36cLXbWkC6LoL7n3GKdH6qjCqhwcQHzdxwUwtVow6mEsSnd1YZYbPJ4",
  "key45": "3vMmc8qt1wyUwFeP76nEanBuiBPD6ZCzxoG8t67b2peLkumhUpiPdqWRuAPUNzbVaqdRM9GzgxEDyD8E61qB13Dm",
  "key46": "2CBFRmmCW8iubinPY8YX1Prjzq6pDiKnqh8syKCHd7wFDUQt4pHRs5H1ziZZgKtcDNAzpnJ7f3yTCyqN1GraqL6X"
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
