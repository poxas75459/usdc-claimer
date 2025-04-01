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
    "t25zg1xZfsTJT1RmbqfwsbXKTHsRy2yJjpEc6jDCFjimR5mE88nw5XrXudMrEDENLUCGgBgfXFBAeGNR8uvMkwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gygLEyXJ5ZAnMjaYvYgvWG8LaPJdVbHspu6KTyACbirJhPAEdxHJuZeAdomh163sPYUbp4r9fDCjGWjf6mQVh44",
  "key1": "2DeQcop11W3GwvS4kBrsgrs6ab5FKpnknPpab9LKCVCZUSstS3amfLsrjsX57wPhqjJYxvxJX9EMHKLZRubkPhDT",
  "key2": "5jvwhLShP1MJagwXnLZj8Bey54udhHkKcXPRpmcSWS6UTP2itJAGEiwwvRCRnbv6goEfHG8hQXE3GrTpYvmeiu6E",
  "key3": "4rRSemzJScwhuqUfEjzN9GGgTs5WTBPPmWms2CGMzSKFtRucDh8puYHG4TD5YtDG5Be1dUJhzzmnz49FkN78SGHg",
  "key4": "61dAgFwJVx8Q5qVXXWv2dwosCpJsVq2dXprRtH4a9tbCdRNBiY1uQNZqLj5TFakPjHsELaJNiBMvuxgACu37p2gM",
  "key5": "9cPq8Rn1B4Q54DT3Q7mRnbLLdYiPPrSvv5ykByvbzpthJfuA2NeDAzEwvL9q3WkhsxMHrCvx4Gg6pFbtSYCxYkF",
  "key6": "2YLHrgXE3UzyeLxt21wjAZgoEWodzg9ogc1Nxpz5s3FZmzm9yV4ccbNvpJ4evCAdrB2x51ea5AUxbdc6JHQebkn8",
  "key7": "2vKuWQnWJG4mHe1qDHjrPBeB5Qa12fhBe7xis6vQ7aNeYb3f61J8J2w1rVqEw3SEQWtvkayBSVTCHQ7k1KrVeTU9",
  "key8": "4pHnzW2AcNWUWY281agm61EQExmn3jk5x8RHAgwvmnqJ4mGs5NAAAEgswVeX8bqPvRt9mLDgWfy4cxq9EikcocWg",
  "key9": "5Prk6P1o3q9JuCsQqLJb5KTGSNneKnN7tNyTcFYsfJ9BNVypUWQWLfKPBuUAJk3ee98A57McTmCeVra2tJSrPTW7",
  "key10": "22h3XiVYrQJkUmNPd2D4MV1g4Tc7QBRf22CYW4sX7QptRmHePLUeAajv9h2a7RjWSztvoDjD53DEEBJ2zcufgNGY",
  "key11": "LS47avYvfu3WaZbabkMVjLpgxxZL3WGtM5JxV9TeGxw6pVW66RGRH6pw1cuuX77m4ixMhwrmk7NQfGMa5iWKzCZ",
  "key12": "2hyiNrce9bCKYydv1GeeQAxVSjv8HLGafzi9PWaNPHdFqhc7ooTKRj4bqDFUiocLitxdo73dy1McwEE2LxijvKUm",
  "key13": "2ZENvKFPtdDp4GCZppmWUsCZpQYbSCiywQ7SA4GntGPMHF16HmR4p1KASfxPLq4wGhA8vHK54SiwSb1NQ3YMDX4c",
  "key14": "4uiwag9VmQt6X17iqJXgh6PKWQodC5ivZFwqVtd1c77MAZXUpo6MSXfgHg26Eftkfet1C9TGmgPwauTCdmady2VA",
  "key15": "3BAyaJnJeyKPwEjxcdPGzokzxa2PrcecVtc4z9Bgns69MaNVZsp2xPVzNz6G3276ZYB6pKjQFpK9bM6o6bEuZTCp",
  "key16": "3hKgK8ErCroowdgJCdwbjFSMgWfLdG2WQ6eZTgAxzKJPh8cvjhZgs9UX9Pbn2SBNgbA9Ap4SriSP9Rs6ewJ2kbbx",
  "key17": "3gNPgJXDtyEEauBojjebHVr27BZ8iN5iHKdAz69BMUiu2WRGDVTDsWqxoa6zoAyQ9KKSp4Y1PtBrYtXMuJiUzWdg",
  "key18": "4VfzBM3MPK2UqxD1HWrMzv1vDkgM6nHswUoetQuH7U8XeDnQs3z8KJhuJfQCVBFA6uaBX8vQWBGjeWJCMnzibcoU",
  "key19": "4sz7Dsg6BYnGfvX4LYjFwUjKe6PwomQqQ7pQvGoFursbmQZmDskMjB8LNGN8RZpEwmWoe97fiNAKGXsUhdxomBPV",
  "key20": "5Mzf41NKZmprFDLJPVqDQxerhem8X7p9hYnCSjzmEpuvSxCCdDkoU2q7gbdMhbdc8LSezwKoKMjZkZmnqkHNVebB",
  "key21": "5aw4e6djgrCgFeUJDjvTWRroB9erDWu9cLi1iQEJFH76Jwaor4dVGBX95Z67cVqhw5aZd42YUQPCc8hTN1EfcgA3",
  "key22": "4fZYJuhumRWnZaGeVAb4wBurAudB8jXBF58gKmPKScPpRYNEfRUfz7Un7Ff3toGjadUCpAKCZfDL6PkcWAR3i1GB",
  "key23": "5JHcN9npka5SJSS3sabiSnQjHnUPiX7ScMsqvnxopBGb4E154f6UPWZBzgC1VzWoFqNAPfQjciUpb3VAusP7xT4o",
  "key24": "iirYZgApcsszfYkiaaraV5eKe78HiuGM2e4wqz3E7bYR1LEFupKSmKa33xZBFrJTEUByKiVJr3qxyS3baeKnK2e",
  "key25": "eB3U3Gcg8xwqTjb7wGf7SxxjzrG6EFfeQoG73TkJRsCHePRG9VwyN3JYTLW7b2QTmmMPm8umff8CeW9Ci7LQGjz",
  "key26": "3bkgKciWTLpxYSUs1NNE1cmz3pmzRniBznMXFnxN5J7JS7wgi3F17Uhjvk5NbYdv1nanTvmYpKLUu8x1BFxWJfKe",
  "key27": "3P6bYiMmhakmsj4XCp2rSun4qSJoavQasmnesHRWmE7Rg3DkQg4jgHGyXVo4exzvqBbpaWZRS78JLw4vT5QVFy4c",
  "key28": "5LWSoVfpxqwR3UqECHP6AodWfYRTHgg2S31iyqCEaQ53v75Cqfy9HwtEdZffSU5y4xZ8wy9jdtH2AYagTHVkfMQZ",
  "key29": "4Mptm6Qj9jGungeoYQNcrGZA7yDAyTkvayiX5jcU2JQMiwx5voAfDB4HnwgYHH4AWotwxRwge5oz11R7kw5Gqx86",
  "key30": "4ghvi6L6XaJU78rZkYMTZUwGMFwQrGs56dPnQzqm1S9dvR25LLsPw5Exo4nNcd9tUsHeb37yyBHgJ6dbAc6cvdHs",
  "key31": "2HUNjFEPjR7KPLsi93QEw3ja7WhNEvQ3FrX1QEeBwN5WyrQV3S8F3RQEG1HHDAr33zgNPPeD7ESeVNZvRvizGfbZ",
  "key32": "5GEgNdNCRsYtDoojp9yrGfgnZdmgGnzQeCsNFzHrVyoijkAVhfQFd7No2Pc2Y6FxQYgnWQKcCf2gQANMfwwfi8B8",
  "key33": "2NTX1SFgUhh74oYmRXC34RPC6MDMinrkYUGLE2AJfBYMMUqLrhkHGca4YoBNrnc5yedUDoMN2VHVsR2zq1nqiMA3",
  "key34": "3LA8tYYKvfgbuex6ZetgXzKhoZGQfh24hDgXj8LXcEeisBTmFYEdGhM7h7uisrBY9oxS7jT9YKYosauUMqWJwjPZ",
  "key35": "aXo5ZMc7XhMgBhDP844JomdWvfX8xhiMVeEPSkSbgsXygFZeQLSB7snhdJmZgLD9RVMB6NgtyfKFUshLqDQnah6",
  "key36": "5g8KKofnaXtyKqVzrYzmLSc2WRk4FV8BJ5AQXLjwnLS8ZsJ9xXUpCip14j16kFN8TUuL7jK2thhQWbaJiXeTKRzW",
  "key37": "4woHfPrdmTZR4Nwe3n5FDK6GgEfjd6fnFMkZeHFutqJCcTpa5NK2DPYdndcxe7yEZMQfgXo3vxFDGJ3cPYp7TJeD",
  "key38": "53mt3HbfVKt8hn61yCHZa3d789KTQwzFBJKqXH7oxi9LevSASBewPubTpe5NRzFCNniwQQTmZWJ3e74gjKCbVuje",
  "key39": "2PNtGr1HMevWVMzGQ1xM7k1y3ueSo57Qk5LueqvMrSGrujJLN9mfbz41ga3DWv98oJxDqrrEwJ36WGz4DSeTZTzT",
  "key40": "4PTxsNU1WpSYwjwpqGLZwjtFqaJmG1HQrKUMWUvB6XmFdwBStjak2E6ahdqgmkV75Z5yNndPDEZjeMyK831vTVbm",
  "key41": "3BgYe8aQHDDAXh6YUVox8TivzYtdMYw7j7GJqFLzF9QD6KmwBdpaP9YqonYXVyuKDDikRWLXhdU3qKzH8xNghYyv",
  "key42": "N8zwVB6D3NErtzUdoGbGsdQMgAPk6FW36YSknfH39BRAkgdVdPfvZ3fzhWzCYqohTb15UTHMhk1mmLwaTutNpe5"
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
