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
    "3NR8pdJ5qb33sXnfnL5uv1nUtusSNyxCSVxkJBScjb8HkLgkGU4KvEU2iEkTYaAHuPqwVjYTpv5vs6vRf4Ci4sRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pcXAZG2ERcfWJj6XQk3txW3oUhN24My5sBd4Td3g9odQCH1Pd3s1YS2LJcBuqaajdBH1hynoX7WavfFZTfSMFxp",
  "key1": "5YmDch1JwFr64e5Pdj6H2W4K2D8gnuahbqDe8rwEFUGFyMF9rMc4GGzxtRqSTEy83Qs6iqRHJ5txzUA5Z4AgZ8f4",
  "key2": "4ddmN24LGdXona7TpXK2EbEF1R3Hwg8dNTGj2VMVveDk3XRErc1GYmoe6ku8KHifEyCRU1nFLUQ6Mu31L3mVHqoa",
  "key3": "4EEqC3vtS7WJEWPCtJ5NNCTeg2bzCYPy8ePLYM9YLA3KvrPx6BUrBb4JjdNA8zRwMp39S4VbdoVYy8z97MQpYdBs",
  "key4": "4JRYL4Ba1cC6NMsLXJkceEogNjMKTjiNWfc3QjWGkNRexvpt8DVBeD7RxzbgV14pJq3eopgj57LWh8WVUXVXMfzK",
  "key5": "qCUGETG55FTm7xEQt242DMdzfNCFhsL9fdtPiCVuQMbbnegHjbu4oK5djtnxFbBzGN6hspydtZUax4RN1FDk8m2",
  "key6": "ajCuYG6YT2PMBxL1qFMSMUrQJtBgVMjbVLxgfojHuZKbFGyazSpS4Svas9nJDHhLPuejHV33WaqmoSnXLaucAC8",
  "key7": "2eWTG9fc6P18bNUCiktJ5oJQkgZBBXAArQ5BxmvDyafvoihY5orkRWUwxx73HipvNGbJAx943TS2UUiEsxkHQWGu",
  "key8": "2KmEGwUymc4N4v2xrDBNPwY64dnBsooXDtG5bj9zKrngDy29sg9bwXrTFCFomoUbSodmJuGda6fs7ctChy8duk3U",
  "key9": "4R1VtDytLjExY9PRBJGb1cCao7Prw4RDjR8zbEa3JebtRHQR366Gr1SqQXy3d9d7irpRyzt3FmwL83zth7oRvVvU",
  "key10": "ipw6Pgj1gG5YrGxwF4DS2uErn8bZjWV3BhkiYUJkLXb1BQM21F7dBYvsQ8d8doW8PkBy1ATBeHU9W9tLQ9tWYon",
  "key11": "gQYrBwFHfPRb1WuS1ZuQ6JGrMBxWUyHgQ2WoZc8gmb4iY2XEVRVNVmvk9HvMam4iQc5PuZC84xy4Zi26d3KpXYo",
  "key12": "fRtEM8RFBQ5s86PtouE18jdUFQDzhq5q9uXrrgAHsf2MGJMrrWBHKrjp91y51RyDTPuiT6WAReXAwFoBDeHwykc",
  "key13": "4DFSn56yKWeESJnVqyR6QTXZR3U2jVreszsRjnXAKHo35DAJ77HRMDZrts1x66PmAtZckydbQVh6CR8vVsEpX9AE",
  "key14": "2qV29Pjw5t67ampBtF8kGgcXDp5pZyQXsgKJc5fJcwGUVSr72QK5bSbwszVqjUHxvUEKdePPVqpXjbaQ7bzQqzEV",
  "key15": "5QsKdXubhadBrWv2tZtanuz7mXXc5BT7ZrcphKJj2trZhzDfFrtHePHtEekd8yKsbvxbkugHCMSDCRY5CNRU3ZZP",
  "key16": "35fPedc744Zq7QRcZvSZnteFF1TdbkmeDh1QbE6yeZzeuDqBfHLznZphpawUZhRDvChR37c8iJSr5QERdESzu6xz",
  "key17": "65Pzur6k99XcAR8WQSpnsipv6n8WXomdTuR5zUiupZyzsSHAzh5QQJ3yik1TF7wNFRNh2WUk9kGBLNzrz4VVKUrq",
  "key18": "2KrQoM3xXVjMK9P9FAHP1xX4GxuJUNMsx65wXiY5dqbDV3kCfxxQg4upMEhzjx7xXuZ7ZnTt44ujV9LAqTyhXrzF",
  "key19": "n3a9RFaDzGWM1gJHJ1X4sopJpFcLasU3Q9nWEDJWEGaWv1G9CemmzGXhid1nz6s55Ye5TBQqFsrKDab9wW7z6AV",
  "key20": "2qNQG4voDfeZa6KcRZZXGVMT2pmxnnU74EFqqxS55UyYEESrWZPvUfitabPHzPCKb8VSkmShZSZdPej6xyWj26SR",
  "key21": "AKYPJzsqwSPC7Rs8a81mGYGKJrAkjp9ekZBq6zX8hSgXKcgTMRZHq6mFyvJPhNgWXte89mYvQsqYzkVbJosAbvp",
  "key22": "5x84sMkdHRFWQCDCHXEFEVxhrFY97N7MJU1ffg7V3PHUZuTUm1Muzesq7mH5891xSEJKq43FgMCfhg4VpL5dHbT",
  "key23": "53odLMpyTh2jeYikZpX8FXNedSarZi4vp8R2Js4yH6BmP1czm2AVyQDx8GYMsuzRVo9rcnWs4zSbVnSDUwS3rPnj",
  "key24": "LQFeR1VwhK6buKPMzjtick67PP8JocvVVXh7u9SYrUWK2m8GCbHE4toJQvnhTfYoh57xpCCamCqajWw9JWDd2om",
  "key25": "318qDMzDqejGgdfS5xFox1XXVmPWahC7C3FnkHDq2n9UQ4fr33oCUYmHiSMo4fhukhdZSuGRnftHmJ4UGvFUAQLx",
  "key26": "2gXPMnzt9Wp66PnDFuTz8mnBNkX2VeM349FKCriHgR2VXtcUFnW7hmEqk6DUXmxkBQ7JGCq5y2yYn8eDpFDUMWe3",
  "key27": "3XSHfsiAFPayW2ie9ziYfP2UmVpSLesB72T3ipJJXDeaLBxS2r6BwwAaPgcsMPvAPth17neqyGvtR2RLC8NNkwjL",
  "key28": "49YDnfbgx5jsCvarxHHY9oNchz5nxPw4juEz6tf6v7a1Y3XCFcqUSgocZgvvRZWZnfDfjVPShDhppAvMswqfTfyB",
  "key29": "4yEfukoZkyh5HFxhtAvHFyqb54hCCAzj6Hx2YWmRDA8D6gEPZj6XQiw2oQUKLhWW6ZZHVGUCwTASrf3YW8jC8WkQ",
  "key30": "3VmVMeAiEJb4Zp2Sgf38Zzg5kQDX5ugneor2DsMYeHZKUNdoa9Xb2HPXhPMkAECMAmuQhyxCAimvVFnqMaipZ52j",
  "key31": "2QcBiwWEVVyeqtcL1J8UR6ZPXm5BT7m43ub1CAD78sYfCJhV2GVi9owLLHNLHTkc17NTxb9FWjDfQzzqF7NbRRFN",
  "key32": "3jAGZxhaHMEvjANq44UX2CQFSYNToYhJYCG6hJgKp1s5eVMqU34UYjbhvRowbtpnN2GxQh1QFYm8XDmwKVutanap",
  "key33": "3VznqxFZhMUYLAaeByVNSn8PuAp9fqH9zv2wAWQWjqHmfYxp6cfJpc8NRi8drpFbqhmVkRu6ruc8rDZmUSspLT45",
  "key34": "626mwZCHnEmwWjCHFwBCxHpx6fAFpP6fnTfrBvf49Kwh8kz5SPio7NVsvpz5DFH6t7QQGcNJzooPASLxXAz56tzF",
  "key35": "3EhMtfp9pXkVjUt5E9peFMsoRwWr74oeX6LET76Uw7Jkhetryw45KLBKX1a8smJTpN6f3KHtPJVMC9DaskMvsEWa",
  "key36": "pFL9azsuTWjVnt3HVuAv7WoCps7RekKbt8Uv9iduX7j24TmLjytWgtWBWH8cAzcERy9fLnXk9GDcoVm9Qh9yYuL",
  "key37": "2oaautkWk7bBZpzLKaZx4AvU6RsBCq1iAU1TkeoxARinSYQyWW3FQWzaaLisyMeRLHpJ4D563oUHw7BjgvY83qkd",
  "key38": "3b3KNVv8NUKQhmfRZ8dg8uWmUiJH7yNmtLsyS8sSfrSBLU9ygziMcCfRaaixmQvJUSz1ndQAuhiWyDDgX52Pk6Vr"
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
