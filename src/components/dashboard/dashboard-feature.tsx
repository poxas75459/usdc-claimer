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
    "5L8V96m12sFsQFbh5extQvh11HNLxiMbEVJ9RFkogB4TR8QBxm3v1iGaJQHArNqD3b63Uoeqoua9pScCVNif4eus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wh2zCw9VfLwYKTntE8neGp9rCdj9qWLfchpHiyVAygPeGewgDAjwB8C8Qpz3XiBmE8ydMjZUCd3FBmTqQHjGtWH",
  "key1": "2dv25c7hAw8CwzjZBWfdc4zS6otcTpNMTHjmMKx621fCuz47DTN88jAfryANmR572YMsost82VKjrRDi96k5iMMi",
  "key2": "TZYTjJQm13aHXChVZLm4PQME4EsqvPXrnRhi7DQ1Pfz72Arwf51rcwAAi34UsY876xHFT4C3ShDocDdJTYxqpQ5",
  "key3": "Sy9HkiWoQSSzeXFVjCT23oCBUjbG62v2FKEZfPgkxhkXBnESnrWojcpFXXzwWLVvAcwFqTaY6eAB355EMngEzTt",
  "key4": "45W3v46GwfppMPuwtEJUaiU2yCVzXxSYXWowVaA33hatfTnPbCmKrhJDtXkhosG7NPnoVyTc41kTr4qRgY59J2mv",
  "key5": "3GXYJPn1Fu2ZXpSfvVh6ARZ4hrwCdgRBQMGiHwxYHqMLNPMGqUXur28HGCLxNa46vzKkxG5U4Mz2xyt8dUKiUybv",
  "key6": "43UWrACg1uPaPHZVFh5ZgEoRmYDnGsm8E4yGTRb4fnRw9hRpdXjuHayeqNgr4QEqc2sShMGw9DXGh1VAa54S7jVQ",
  "key7": "2aCwdG1ojLyAHgVbbntinWwQeZinETogjEYfK3rMZAYRA9a3pbAmJH6Wtpyv98KEfVhWM7FECcDCog6goWCuarhK",
  "key8": "3mshvY6GPF2ugA2NxxHtQfZ6HgNFfLvY66A5Sf5E2K6qfJzpqMNKjgWcWXyk6RjLRvvotbNWST329jY2jVGXVFnr",
  "key9": "3BxDeUJ6fvkcKxBnd85A753bxR3oe17o69ecfrGWBQeMNiaQqyu4UqxajXHWxGFUREVk2FYVr9PS1nWfFr8JRKgk",
  "key10": "nqkcHwMX1K8geKm4UTsAaMjKLm2qXLxUFatbJ6ny4GGZWDhiTf3SgNnGwKJdGuvxsjLFGgBSvYd1SMwKdsJPr2Q",
  "key11": "4Y4CBVowrLybTanYqgjGGWNexL2BuxvPaZ2d6v6j8HDQBfuo2HNaSf4Ezy4DqpA4tAeDXEpem2Mnfs6igvHB4vXL",
  "key12": "3BjQBxffuyCPTB4eM6xCLitLYe6WDqipjrmMz3KYh6n7gn2c4meKqHjYd2KkW3MCmxfx8vTdbEcLLSnmykKjU5ux",
  "key13": "58fmfR24ksA2gLyYdKUJHQNTURQ8XwCaZcbuz3DYfKAvMPmQNgV3SdjEXG9x6paqwLuooNH1KsLbabStMNyaBekU",
  "key14": "27QeNbfyKBAm34YPeRQT9BvECPFTp6bCsc3erDzaSJCEpNWCWom6vgRFVRaNCFK78gYGYPPmLneXjPKSm9KmcvNP",
  "key15": "45HHoHacfPk2eTCmQXBXX8cqewmyqmNmbbacugN2J78jHfMUKcLYruaJCgkAzSKLp43twSwWtsjRMzBfeMD59pKo",
  "key16": "2xgFcanSnB8PBUJyDvNsGadpFdcSJ4KUSbEzgXnAM2QJko2syMpDQEv2xCeqAWzkxFG4eEzweSzPHvc61ZLLFNwT",
  "key17": "3qV6AKZq5TG6V3FBYHZxZyMpJz1MPbJnbJdoCiiKvxqYz6Mo9LgmQXKvVcY8SiCWoChU59aQFgRgR6ZhUbhxB6hF",
  "key18": "2txdYq63jQcfx2HLwwNEiNkw6hF1L2DAanWJ9hd1Xr7pwW8si348B3oAGTVC4sUJ1qHanqGpYVZ9EJ7WrSZGEtNe",
  "key19": "2dc5LS8ZVJcjW4QEQtSFdaXgHGQsCV4Fi6386rArWbadVcUNbfD3MKGQe3hYRSMuAGMTjHvrfMUF4HxvpfUM5Ldy",
  "key20": "5SyqUBUqpNMgnfwNUjHNJuk5CmfV2cR3Wzmi1Xca4mVerp46m6T9WfKPhKw1uZeeLRt1ckGUw55Pw1rDN4DsHE6K",
  "key21": "2ccJ8V4A89yESj2wabCcDz9wGo3z4o35Lnof9NpW1BH5nscu4b6zmyam4i2vcEPyWhBF5jxqxxtdkZw5a9j8Z55c",
  "key22": "49cBFC144QKvXmF1LW6ejnmVCiPKrNRCeivDSFYpAsXsyimABxy3F6RZbxgDQtvfk8Y9pJuKoBw2zX33xP4rp7gR",
  "key23": "21MXnmXzXZRE861FHBbF7Z4syTEaCXomn24gPwoXt8HUViAhVoBCYCqF3Niyq5eiS85Ls1G9f6PXsPWeNmsfLReZ",
  "key24": "4r7n8AJLNyKBsgkCqnqDpLPwAyb8mNMMoTWZ3f5UNNTQEWBmngmmb6N1J2EsHw2ZH4jv5ibE5xHWtUBrBvKm4rDD",
  "key25": "2YX7EUaoecuVvxwVzUYiHSouvdFGTF92X1tTz2omDvoXnJfMD9NitNHZvSBqk9R8kS8YXwUwBS83Xjexgs4Gb2DJ",
  "key26": "2cZ1E3egvDTkVetWyjgjktYZCDVkAj5SbPzk9YCuMipaKZQHAr1nQ94NUBhLTynuyuvRhM72meXjru6cnNDQZscE",
  "key27": "GBx8L9FNQei3ry6PGDNuDaXzCGv7g6e1gywHekgj8oS7w84FdriT72w8Ub1vTg83D5J23zwpcp6bx6DsFCz27St",
  "key28": "3KHj7sQqvPtQoMiAqYF2VwDevsZPeEeKinA29Noc2PsKD9SfdYpXRePUfRKEToLxdENbskfeNbwNxCsQQpFrJxqW",
  "key29": "6mVbFMBU7nx1PUwUGoJbVDGTu9bucPm927sEd3v9vk3Xsvgrt4EUBNZBJHVuoiwBCwy3XhbiQXf9ttAkD9HBdHj",
  "key30": "4Qag58AGMTZo6rnAU9LucSkTPG1y6J2miEycoR62AmvkQb8upHuwqB4ZYRoNAeWhEwz9FdGUgS3GJ5CiMBKJtpcS",
  "key31": "3A3xKHoLZTUMG1RFUGdgzcotwftTQjCEi2yWWDRh27QFsG8XyDg55UjB6M4qSrRGibX8s8GtBV7CpjtfngGXkiHD",
  "key32": "4EpgM8kTxGEMwRJD4WmZe7A1mAoz5Wj5wgTHfYWvKAgCqmycwCJKMJu5gPLizkKWBMKknWnd7jkHT5JAH3xEBTBZ",
  "key33": "57RH9oUxCbKvmtbS7444P2iWUnVty4x8uYs6ZvwBtQi869nFscVSUhgs84brzw8qsHQgju2VNXjmFMLdpjc79RqK",
  "key34": "LMQbTmk1W4b1euGSwq7RdDaWqwySWxL8HFwXzzESPYRKf9yMBGcC9BqPUVakHBWZ2pjzmZAFGN3zNi1Z66V8YWg",
  "key35": "5EFFHoSEx3yNznR64LHxucTX7iogiFQLTriacb618MN3E4wCUfKXCqBDJj3y9Y7v5s5iPF9c8bdP2piRUuxtWcND",
  "key36": "4zYWb1ZZVQ1toRJvbrKS7UNP9SqeoaX88znwpT9v1GZNZUe5z8FGRJcmU4qVfNeB9MCcJAkAcspQnA2DcJqoy4jQ",
  "key37": "2jqstCB6Ke4bU1Q7w4QZ9GWs8vGvYE4v4Cmpt8Zi45GXy7uo24K9YTKdjrsDBENknZGuDRHqpJoJNDLXQN9tKrxu",
  "key38": "4Qbi5vWPagsz3KR7VHvvfLMaiurK67RRDwAMDrWSSqszkPnmLjZfFfG5ZaM9RfFjsoEcrbt7Cgx22suTecA7qp7a",
  "key39": "2voaZ4wjRC7Be9ZRpbRKmLjd6UUZ4vCPxzhYSvzBVEWo2J6JrCULwuwPr4Hh8g1nBwefxKhJz64eb77ExjQYzXnX",
  "key40": "5jtTprsUbrBxoJBy8RJHi3Bd7zzVw1gaf8zwabnmfU2yZz5mppDW7vyUUEgEmxipu9Pq4NJktp9ieTrnzU29HePQ",
  "key41": "2RWzcki6yf72wMTPEbirWhU4jP9ThjNkayPwWSCg5ebja5VY6aecgKqwSDuxXKzXcuaVjoXCidkcNwMoFDd8ZFsY",
  "key42": "xdxJEMWwjXFHqReyg9hj9B7EhiTX2vucAEM1NSeA7caBP2nyp1NbRbJBnnFaictNLANCFSAS4qh4S2TEiLy7t1M",
  "key43": "3MUyhEZ4t2tRMHTWoRPW3ZiDa79JMKoMhsHpy86k7qAjkmM87gU9BAhHPXMu9MvY9Pe4kv43GQ4KkKKZ5A9jK5Vu",
  "key44": "xvXTunQYToUerax6Q2QjCQWWWGfvbzeV2HSqRegA9Up1D317fDfMAePwhv96b9g5Bha4Hk7WB8VWZJrenW1qyKd",
  "key45": "4dZaF4CGtDkJ4s1dMTXiePenFrtWaKMTUZab9jPxFRNiveyJxvbnCiepnZUijFG5R6GX3PsAdyZo5ZmZvxgx55eK"
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
