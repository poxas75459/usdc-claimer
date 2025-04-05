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
    "27Vu9PqTYFpk6xYk1AiL4GDHXw9nacLb1oui8xXTbVMANYmtQSdPZSfGfM3anHJvqNFb4ZFKZnscSH9XTjGgdMNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vonhwKcPRsoPuvDimBJqG1S7Jdk8ANN81KRP8yZiddoXEcjAQr6tnst3ddEXaKG859z76TPjYRDkvPXsZVb1wnU",
  "key1": "21oqsZbbcojYQkEDKGiTXesUrAEezWCQUPV4BhT7A3miFF4YddSjTSqCtCsaj395duUS6Yy67uubVdK7Hez5LjjE",
  "key2": "5qTVXgm671eiSSHGFtQfA4cbhN9Ww7oDc7pkWikLEFrLDfDCGhwod9qDoJ91o7kmioLUihNvBaQ5dDME9RjCeKZM",
  "key3": "4J7VkTDs158EMf3BnFvimjwBofq4pQ2wuq1g6aC2mwdVCjUbcjbucUmvyvFkaaZ4xDTmpxoTXBUfy8mWBCSXaRf9",
  "key4": "3MWk45GF9rwMXqeqLU99PNSK8iWdC1YhPhuNEbKhtTetC1S56PRWcMiriTFtk4uwPX2v3YWSuMQLJthKmsJtHAr9",
  "key5": "9ncNeZ3NuvgJYsXyoZH85K6QqMrrTBLy26pYQejzSL685gLB7uKsbwHEmEhZpxavX23mw2gJxWQF5zS6LJBJPen",
  "key6": "7nLTfEvaVSBybrkQfefT75dfvaztfLMcS4uieQ6cy7u2NaQpBUQCWYw6ad1miVDdA3HyCmD7DBWy8LbKguCJrHZ",
  "key7": "3X6LrmsxLBr7bmAhFZR1qrwro5KBzoeq8DS6HS5PjBnAQLVYFbK3Scvuf2NkoQVB6vavpjCFkMkhw2NQa52vezY2",
  "key8": "4vPeqyU41tUSvYXwgGgGGMPawgGF7AsyTcSSJHuiDqSWe3TRqL66hByrpCm5gUAArvrWqfM7DotPdyaJrvfpKn3G",
  "key9": "2tV86s18zTF1tQu2nXGrkqu9F91B9Ryb6e6m2EnNJiC6XCJdou7aNboQPBLpCBr1SLcLBwSspgVMXqA5oLDSy8iR",
  "key10": "1Rp3NpcNse9YJjRknky7KBNwURFXiBVCkiCx8QJc9MXsbC613FKfx6StfpJnwDDdn5TygspFbV5yfpmwCqT91Nc",
  "key11": "5b2Jag1xgrerngsUD7CxXpUM1rzVm7oDndPxHftZZEbnRqmmXFHDkZZteT94fh7uU4xLzxi7NjRrJWN4PbhFfwYk",
  "key12": "32Q2XdG1FZyiaUSsP2QrSLoCsV56wGoGDuq7J4jULcgbrLF3UdXxJp5W6keGGDwmvjNhFpP8tsRDjSSwPe23PHK",
  "key13": "4nkKkinDNRs579GU9A13tuE2qHmYvb4L4GT4SKmtHQkJMjUMN1ahiktQqVWHHNhLeb3JJPpW62M63364gjfrfQur",
  "key14": "dq8KgLCBaPJf5ow1wchK7SKLpJMtBH1XyEgvM3WvvGcCmCecUZ7GBtADB3DrRLTQCe7ehXT74QniYgScceMLGBi",
  "key15": "3n52WmUcQBK1Pn6RAYp3o1QitsmvKdaE38iMEKTXBGxYfb5sJiT91PpPTrvHBjDFwvjj85SHUrBqvX8rz2MfrC11",
  "key16": "3zYJzkdMKc2hiKBgsq1rsWueYNy2R2gxLUWz85Y3qGh4PtZSHaDzrD847oSSE6qAgzSnDxbgjMQd2xsj8fjM1wiU",
  "key17": "4D8sc6JgFyGHoCcyUfSj9Pvwwxbgx1yVCnZrqLyRmmmTWaXoqRiLKJnreKzNRSqHGkcuojJu9sVeNy8waE3Lo4P7",
  "key18": "436WNGCmKkMCCyG4RcQqz1koSEq1mpad6j5mVgbZJ7Q4FyDYdtACvBM4DYXLv3MBAtfdUFXZx25Gw6y1DotLzoXn",
  "key19": "3agR7MYRKJ5DHMbxY7daFJpVrAGXRYmUFz86R6XG3LFAoEY8weBh5nD7vVnxDaxBhRWAnQbHNjPgQmezdVcVoiCG",
  "key20": "4i5dH6nA5T8gkX1AoUVJFWYzsZLzuBp3VV7py5ZKAsgiGpSsC12bVnqGCewKThVnbEhnSooXJMAa6J1YHwCQqsnV",
  "key21": "5tRar8LzAW58L9Vdg3yAe1kr35PL7siTcctjN4mn8va8tRqcQrx8HjrbwbwQ3LhjpYRm6XG91evS5BJcrZGgeU28",
  "key22": "5QRWX6MHagBi1MR6KW4u6aviLKCgEHEuc2pLFHyMs4xHQY2omEtW47nMQ3cWEDPJ857k3v9rbZE4aFvqNF5KFZDZ",
  "key23": "R66UZV4kVdoobHx1y8eecjQ9LFD3anDGSbL8qWa2nJXqVAUycXdhoSrwKMaBH3EyaHmpUev9qkg5P7utJPfEeTf",
  "key24": "4JMw1MkPwHzfkkfNKAqDbxcBhyarU3SropyajfpozJwtRcbcYEpGAvEpMK7xUsHRHL81pXT2kTwjR1AxPXTdj1VV",
  "key25": "4q2d4NLxzJamfMGcxfK7ur9KGLa3pQJBndLSaDcNQjqjRsjpCg2zdwojEADdDjVtyiXhWWr1hyoMSFRG1BCFDDxb",
  "key26": "4YpA4JULF3QDpGjzzso1ygA1cwYkotixHS652iSkC8tcixPbvFnQPyKEaCpEd215hcFjkagsV2VeB4gNu9FjRZ51",
  "key27": "3md8qe1WVnZhPAUzM25mYH4pfyRqv64DwpKhenm1Lhgsi8P2u1UeET89h8nUvay9qTAJnSds5C2ymwJqPAfj1Umc",
  "key28": "2jEQquutBBQwDNaeW1qwcdo23WzjsEKF5TZFaQ5nQPhDFxJ6DYfQbDJidHo4c241KYiGCQe2KJu5Msgev41EAaKa",
  "key29": "4U2N6Yn4SoPYv1kNL2ZqVeYgVckRR8KqrdzXiT8xcUJaRWXWUcwhQqDHMd4aJ1BcopavHrrGYxbCVkTWimUEYNST",
  "key30": "nG6ziQDxqjysQ96gTR1P7pQ25jP4HFsprFwHsZDFeNeRvr93BwEXjbun3eHKgYn7c9RdcRkBKGpzZzQCSh8cCaJ",
  "key31": "3ebE6WPG8NZbDuUX61P8uEr5D6Lp2727xisH3HC6hScToEnoDNkYtd4DHKy53DF1dhr3zAnscdNFdVVcNW9iyEm1",
  "key32": "3eeDVUiNBC8GAyERyDtbUeo7uhfCLMT8ANar7v8UK5otsncgyxnqiYiqXinacr36mp4CqzAeFKmbHXyFCc69can2",
  "key33": "2zJUMGCj3LBTv3mv4x7d1ZuRdUjEMBnFt4bXKYcRgR3QoouSZnHaVomM9gsehiAcPm2cpFi4qfXfTT3qz6ELe7TJ",
  "key34": "5wmReF5Zi6AN3DozQZi2YpV8KVY13u99VMa7XLXP8f1v2hD1tqYixqoGJt1xdtAZ5vTP92hTh8TGJyGX8WE2WBiS",
  "key35": "5n4q3WixcmvYdbqb4yKZa5kRFyJ6MH3qEoC2qFMadd9YAqt3fYFYbTVGc8PDPHTZLzHqkHeLnkty4YTxCgyn6Cmx",
  "key36": "29MuEeYx8ybMDrxZf3qFEnxPG6ztRy6qiJvvaC1E53PLZoXACRLhc6qwqyi58GAoxpLp8ERXb86YKJvgEzVMt3k1",
  "key37": "e4jyMAPHVNG4BTE8n4UZy1jfJio6gCG4NQ2xd82SbGdjSjsMYu8wLEQbKDDkE3rwVy6AwEwYe8h9bwek5E6uvUu",
  "key38": "4B5LxZRHzMDBysL3ZxCv9qJ1RswuB9cKoqy64U5uUVa7WyqeJN8KLKe6jv2qznrLY6vrvqWGnnjMj6wnZWHivCL4",
  "key39": "3APNypjPw3HGcXHuyLwF52DX5396YAUVNoXMyYjG1hasi1ebbGKpJ1tjWD2cCEBgkPgwbAd6yABYGDRVqYFTvynx",
  "key40": "5ZxQH31QX6P9favnZJsrL9ZgZV5erM7YagKvC9cQcwg4Xwp3nsVNYDrwi7XhbUhJ1Jn47ZKsyjJGpyKXcAeRqRoP",
  "key41": "35Q5oVMuG61iXyGeUZGCP339mmFfnUKvgzGBdZfGy3zwwG4bY2KjgD4ktaTYyk5rauMYgQsMSuZoxJh2yKiEVsbX",
  "key42": "45kZyG6VEUsoauoh2wY1raRnkXAQcft7SbcNdBWF8RWs2XZ42Fmnz3eLtCntuLyd4e1A4LZcZ5CEAXJZ2FUhogPM",
  "key43": "2GTzC5T3snaqZCj41BoNAwcoRAjUEhgQmPPNnng9ZiJ5g81iHvVgxTryFJVS3ZDCnTCieVFrDjqWq7QaQ2wFLfpS",
  "key44": "KuYebjpjv2xSxfqvpoEhBJvJ1shLjATumk4mReLhcBFUXjBLdDDRrp2TbybKdGa4PJhB3da6uAsMDPkLdgenPcs"
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
