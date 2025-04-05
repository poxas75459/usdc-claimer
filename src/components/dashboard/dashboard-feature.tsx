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
    "M7EdrkLXGRhHBPuxadEwVjJb9bL2ZiUXuKJxry5rnnN7ye8qHAYqPpiygqmzf98aiSKFKeheniWJhKyfqMyZXXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ykqH9dH9SX9UGuVQftwT1v6a7CTGVnPxzJrozYmdkAcHjJp8ESggHgmWStE6gbFfBJRWd7F9wFXRv18hQ1T3YyS",
  "key1": "3SrrpU4QuB7TADr7L3DDvj9VF8L7VQoSEAe6VFiw4ao7RcLEUPD5jgT4Kak57T5QQdmFdgoHAA7UZG4Yggr2X8sE",
  "key2": "4N7kBoFiQeh2NRj4jfQPC75e67EQn68fNqMuuRakAhGqVXgA9pGG3XoYY4pDoeodkMVTjm2jgAbvKsMcDekEe89B",
  "key3": "Cf37J26qLcDosMnyuJTsnnz9goZUs74GcGN1Uese7sjEgzKuPkvgHegQGmFUHBQDG5itxb28ToaHB6DapNhgXZ8",
  "key4": "3ZzF8ZSjCWZRgABsSUgkLWuMgLTHvUrS48voRizHzmMxggcHZ8sDJXCp3YmJBvgyitmhWTNokg7Vf1kUcPPhsCpT",
  "key5": "5Lh73mBXQhbe6jjmDoMDWBWxLnYMTsbwRsCDVoooxX6CfQEk2dKBufy6WDDk98dckDfj8mPCdM1WgDqeNw4haLg6",
  "key6": "DqHtdmYcem2AQmZeSQHhSMR9udv4yEVzCc3u8KsWDrFjVm1AjZcbRHpm4dhRcq8TgAGcHPzCkzqbtjKy3gd95WR",
  "key7": "LZkfsYhHktPqALaSFoTHsfRHXHHtsuau7d76wLQfRAMzX4C87Pc9fEWKCuC8JLU5C7QxEkEEhXYwq1NcD86L6Bo",
  "key8": "35XF1SfnrywouXn55GKZKzmhKqV424jnwHH56ebEowUDmsv1QPo3wfvH4B6XNX6X3oo8q1dStfxjKwqZ2iRKhPhq",
  "key9": "3VtWfSwdpwxBaJechBecS7M1bBGRiHrWJkzcQ4xWYjhcue4hDAideBRFrSa3RmbHc1jkjvru2KPdVfsmFo31Dsat",
  "key10": "2XBAJ6Xm1T1iCyN2G8XZmgBHpucMWHP7yvuphyw2CGaKD3Qy1yTJ7HB5unpcR28sp44nbiikoMqXd5vBx7aTp5pN",
  "key11": "3JpBc64TZXUPVDAH8ZzvzmxhK2sr3WvygN7aHzS5ZhZynFc8ppb8iXcob6aHYEgXYrrzDVAXy7cL2ZQxTn3euoEj",
  "key12": "4fxjwSuEySiKUreRQFDDeEeuhvdHuhZ5sT7FJyczupbQZNJSaupboMrCbaXCF6jzfHtTRUUFXQtAhHnC3GawVJZc",
  "key13": "57BC4hWD3uwanjUtmkQ9aMAXVQWiyV3CtBZZZKihen5S8qJKNCSabL3inSFzpr8eU9cQtGyK11kPHhiyscDut3u3",
  "key14": "5qUs85Bo6SZXfA92cqwifyRC3nstGLBzGQz8Mar8qn6w2Tqn3enz5RHxg5sh6wjXPAtiGMvKh5Li3ibFF8RqX7BE",
  "key15": "46M1hZjtsUj5aKG62PxGfK9TkNJYfDLm1hyDckbuRCmvaqZeRxEXCSDtPm52K6kHdCFJqqcKccVHT6XLyUZBTpn",
  "key16": "4N3txMxkovQXBifNGmZqFHjinZW3gzW6hvDUYAwUjsrEP6eGQRaYzGnjstqkh8wnPf44u2tHtcZqiCrYoadzDCDr",
  "key17": "3jQZFGrYfi25dK18Gzw1xfhNLAUTQsKwkSNe95GBj9J44bc9ngkfhL8MqwAfzSDV2NKpMNMjTm7fnFWuMYeU9Erc",
  "key18": "3CfTb7CSDiwApoWrAyJLAowciRHXf34roP6v6zs8qyQJjrMozwhwZMoaNFUEfUz8eo3rX18qAFm21rbHLpAsMJU1",
  "key19": "4y43kN8GKa84W55frQsTaYb1K5t6Y4btDFTsh1aU9npMQfrK8BMLrjUwH8GMe9AFaVSf4dHQh2Phf1PXKbTPvQKG",
  "key20": "ui5Y4q8FKnUi1wx5q71kPYUNdySopK6jweMLkDyA2LNfg1uHJ2H8TiQKC3Agfw2NVxt2y9BrRird54UhbZ928Ce",
  "key21": "5oxrzMm4NZ4SuKwE5W43sZFhD29dxCZstWXPCGfEGXMrKqAN9giYop9c7sr5AedWtxgoPj4q6A18rEqG9LM3BFQc",
  "key22": "4QJWAEtVMhnDw1QN9pLwZAJpdiHJq2JifKp4y3WrrcgedZ6he56oy584KZpFdom16wCJBiDoLxSwKti96ewJM7sR",
  "key23": "2yvyWSRb2Yk9mxac6anYjpEEg46yGaxnuiczP8F8TgXTBt7jaTAMihuWLQBJ3kv3mtUNRmVQ8byHQfsPLFj3ZmDo",
  "key24": "3GhAwx6DQHy8PuEok1ZjvgXxC5i2jk8MFCTLq9qWUHuGUC4U7Fbz6TwJ6zQhwmgQfBURcZEMQQhg544pJgJMTUvP",
  "key25": "h54KLcj4gtrxgXMkR5HFYzAiMh4WmSq12a9LZcX8MuWRnyRTRHGHFRLxuHsFbsWDaxMkK4mH7ffGTcD9hi1Zag6",
  "key26": "4vJAtMBC3s3RFrtu1a8AeCUab21SqrmeL6iEFd4rA7BPrPrw3wsYCJR842xagnGDzE2phuL3RoiBkPckZAH5vqMU",
  "key27": "4dLExhW3E9CQdo9KEq1etdBEELJhvhVcvi8m2Q3xt6wnoLPW9adVbiWwwqYGeUF6hLgt7ZA3n4gnZnPR5Nvrrmty",
  "key28": "4p9GCPhVnpcFis1gXfzb6XnUKDcZpNtUTGWQazySFeAzLtxy88gitnBDSfb7ksRykLrgBD6CWATryX4mSMsoY4hX",
  "key29": "41F2MhJgmiDombUH8sMs5Js6z249m1uz2e5CUGv3rzCpHXzmpVzecT99XKXyXUpkKjAPqnPSTdPSk78E4v8Zhv9y",
  "key30": "3r154BXhKLo7zyaSp3TpMjzE2i1b4aTk9cYqDyTSvFu81fYcK7PS29SjbA4NEFRCaFZhtGxVGZr8mmhh64KNMhtv",
  "key31": "2EGAjGHUGvSakzcLL3XLoDBiGMtFX98PJtrFNDxvyestMGyDwFvbeWBCaDPC6LqPyHv7V4U3MLGD4zFfU8v19gV6",
  "key32": "3tVWEbqtWUHXGooDEBdx1SigVQAJvH7vQUXb2ReF85Feef6E72w57xyj7LLo3aNK8bczYPDohBTE7cHNgd2C4fzE",
  "key33": "38VxU2d8KZ12Wk6VB5xG8fRU5MKaeL1eAnHoztVCvkM4MpKEfx2SSFof6FBpBAVjV9y44C5FAMStG7LhzhbMWLef",
  "key34": "4E7NN2ma3hyovBNUBEg1HmBrGsc9KUsWuQCU2ktZUEfoTrhwVHdWuvKweoM4Rx12N28qpCJNZgiihHNuxDRZjqye",
  "key35": "5UEAXgTwURggGb4N58ev6urSqNhBJyUtt2o3KDdbnZ2rSZdhoxsuMfFnNDxcQKYRUEuDT4GTL8CMpGHj4kAdjeEx",
  "key36": "43SvqHyLoz1rZGfqi3VUDyP7kiqrwqbyNJGK7hgXKu5M3KGKyMYyczU9py8QmpqDHCwzkPQhUiauxR3yExbn7Qyw",
  "key37": "67KwnXqwzFJ9MvVqX2kuyiRWkZyVFgfEpkxnMtu4s9VJ54eMG9Xfm6FpfvEGXEa7aNA2ZgYoBj6azqJ5gWQLfoZS",
  "key38": "4QyMQLyGsUb3Fz4osze4QaWS1VHr7DiaHLdips7muK23GrwvuXxysXR98BeMW4V6cRVRGiKKb9EUB7gbzFDLKzrr",
  "key39": "6mWmZZ5nk2xA6aUYCoq1cocis15rzKwzZi3t9PL935p2F5bkeL3aAakQw6fgEZUfiuSqacAmFggw4B2yk5q9whM",
  "key40": "R36cJYgE9F2tLh4qqLwYAgTqX8Srzdc6xD35D2VMHr2TFfJqAgSV2LcAQMqaSeMcP8Wxj4MP3azTZyht1RBe8SP",
  "key41": "4M7cHjVL1HmQcsfaZ7Snfd4LSuAdcGc5nRFC4YZauk4N1tfsMGQ5k91aBrWS1qoCwvVGLtjBMjAakLA72hVotBKL",
  "key42": "5FyqfhFT2HCB77mARaLcWihPaMc6duo3Nh24K7e6GHkj6gDquYNKQkcjzayybPB4ZRS7YXFwBg4qM17wNH6iJEDV",
  "key43": "5VN7oLjUnuTobi6SWMkJ69YTZ6vZ5ADiZqNJvWR1GCV5Tq7g9LzCmwBKgk5Un8sn6oZW6wq9dtvEG43kwnqS3wS4",
  "key44": "jt4o2wpFAYMfYeWFJVt64BSRoykUCUms7vp4UND8oJxGoWdMvZmdFfKsLZUwjxJWoQPvta5atcaTAs7RqyYqa6s",
  "key45": "2twBVuxLkn7UYcNgfP36865MUw5v7j8TjvcqaFkn7jaSsWSZkd8F5mmmjKww9zio3Nas2PnWq2dnSFics5FwACGR"
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
