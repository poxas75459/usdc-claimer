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
    "3gsVaaFLPUUfaTZT1KTR5jMFwDvfbuZ2QanF4VmNSkdHPHZxJ25A4Dqq9PGMFxEtAEUMyzoR7bhxn9L14KFiTvEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XSH1NQnok7J1FCaDR4DvcWbB6VETjJkZdb4oiLuj949w8uJ651mPw3h8mowCD1te45JN5CNFvY2gN6evgiqVwJ1",
  "key1": "2o1gHJoWTm5uxzrfAs5r61kumTRz8LQUxapMRY8hVxFMMcnAQA9Yj7Q3o7YJLWiPBYPmUBYGqMLczrKJoRXqnUmM",
  "key2": "3VXEmJmuqj9HGZTJg5XCjHQ5RMMWGakuidjjunnCeUbjEBUkEH3uGw83F9NVPnoHDEsTaebyGNiftRBPUNbw7iKC",
  "key3": "5aQjLWGCpRUo4SmAixUWN1fqFuDbVi19dLy9YKoXuju6aoLR5bvK3nMSFDrLV4roDnQ7jJUZMvnxv9T3unbM1gaC",
  "key4": "27upttA1L84qK9vH3JLRFHtnoHGGjvXmoQWiKUZ4VUXxnWUj744FMR4vt6G8BnA1NnG2BX61NbNCWCDKyYwCFfbk",
  "key5": "5XHH8GC9R1cW5zW3Yw9vZJFQgZBn6MGeHkDSq16vseZ3BH8YoGsC6YxcmoPVbMi2g2nEQQzGbz817Nh9aGY7L8Wq",
  "key6": "4rkMVpWian8cFtBxYYELjorrG5taqZ8wfunH2AaawHHmFZ9UAeoBWVWJb6PGBdRur59qUJXcAEouJozQSXueuxA4",
  "key7": "2fyZuZcmjaGtTJnNSwq98E29Yu5TRMnQo6c39Te8Ug9yf12tE8EjU7CSoXkJ5CCHCW3K4MmuSETTWrceRZcjTpnm",
  "key8": "4u9gnufTpH3DvZZj77xnWsVUHQtNzf3AVqARqusCVdkAyFzNxiXoTfxifkoBsWejknTnkcJEejE8aTPJ2gXUavC",
  "key9": "5pMXHn2Ag9pVcgML4NXhmtRPvECNdWPba81EMbmDfEZgTYMFp3JfBkpBFFpB5RSDRYLBf4uyoiUc9dLFvvpJsA1J",
  "key10": "3rw4Fg9NwdqS5oe6cUJBF1SuXcK6u96oEg2N8FvhNbWEx2hd2VfZdf23hsiPkQyKPhjuDm9KLZEFeL1jpBHf53NA",
  "key11": "47hjPcbbV7EWaC8yJVaEx13VjrvsZ61ik9tap72TSvzcsbUT7wywxz3pnL5BjDRcULLWQmpHiPL3mQsyYJ2FAqLu",
  "key12": "4EtQePAufoELw9A4w75yoi8zqfzgkHRHk1Dv1rNeGTokFDd16EcY9bwbMEKSCsNtFf1NXMD7BhsEWPKyrzAnzjF7",
  "key13": "3xfGUU69rY6yASUSSn623swF3r4Tx1RLgikYv1X5R7frgks13pVBgUDBBkpaTSzP3kcBjsZCgpxacTf1SxckReUH",
  "key14": "4eF7d7F3J5urNvnSH1vWeY38yU42B4yVVCRSDsG8xz3nXpSNXb2XJPQVBo2AQRJBeTm6wYDcyb4b3HYq7SNSRAf9",
  "key15": "sVYYR2UsF7JomXCRwcS8VnWF25PtZwQkmeYB82gwhkpuJQKWFhBgpf9N9vbZYDxorEpzKFnc2EXudLAdx7PxxJB",
  "key16": "fb8DSC4DZrTiRVEUDsPdBX8zYe3KKmf1tfxV4YNzWbjvA6Hdk468jqUEzSgpFuFdSUGbUVcj1LsVhH2BMq83Jm4",
  "key17": "4nDt21td8YtBizkus851DPoH3Q1aKST1FSKsp5bB3B4QUJr6CMG4DFMzh9F9gyvQtN24uKtG9c4oDZya8CLdLQSi",
  "key18": "5asr2bjodMzKbPTZZzeemgu12VnqoPWfdFsQjuRrUWLUtayQNLgfLhPp6Q5gyb7kbqYk6zMCpTvGdWvovgiHXGzx",
  "key19": "5FFwZmzXhGu36Cb7QWmQm8cpvz9eB6puxqnTAe3Y9tjLerEM8MdiKZECG4VGdFDMX83BbJWsLFxWZQeDjpNyiLUF",
  "key20": "2MKcn5Qr4HRKTDQUgNtBbmRNAKw23y78Mypn8oCAACpkdHfYTkb27APuUTbhQfk3rr6nmZHPKfAMvxkCqA5hehBV",
  "key21": "5i6pSDReZAgCP1c3RKTsk352QGXdTHJZYiz3foVrmxd8b4ga7nKNG2pANQp16WZwPANe4tftiqSm9nCCmT8yBCSh",
  "key22": "22rveBdMiTsXcJvhetyRyGV31H9qnMruVeAcwZiqjMtEfDCxqPJy2tp39kn5ow9EogUpgeT9fMhWCdGDnN9LkC5C",
  "key23": "5z4gjX2bbRoFu15PFbvECy63SvG2DSWAkHmYnvzBdUxKhuUVS65BTfpexSj1YfL1cvSXPzRSpzCg1beJp6Kjhqnv",
  "key24": "5bfynTgzXb46yiCxvWtrUqDfZXktpbwfzr6gm4745q3zYgT4FmXNJju5Fkc3245T3q2Ak8thccyUy75tXb2tQXkt",
  "key25": "56Vw8qRsSrHSsPPp4j1ff2DWzwV1VLyfhJjA1kYmPcpHcu6ybYYCgZENWywptLae5HnjZ3474ndrQCa5mHhgPEkP",
  "key26": "2nxaDh9tcXSvpN74U7grQVD1kResvy1b9ib1v8nRNPxw93M5HJAk178JHBHN99YEg2r2zJX7W8BanuER6qM3RyCx",
  "key27": "5XKFd5ATrAA8LjHGkNqWxpb5QpeLxBwYGqkBXGTE7a7b2ZvfyDtEBNHoNunGynzeNdQx6tobEGbCssv7uPj44vcu",
  "key28": "5LL3qsjdf1gYZ8h3cvPxswKiQYi4CPF7NuW2tzHm4FZVnWXttGNM1NJmsLsjYiWLdNFYUURKhCMgbKKJwz21TzDp",
  "key29": "4Cx6CkGMxkaQRUdmAkLvDt6GhybX2AYQU8SxTvbszUHFD9rf6DqeQJKa5zVfNjng4ZrGtYNdARGV6a4aPMbMvUUp",
  "key30": "fQEivVtFfzrFVAFdTyTQ4B9r1PoQ8J6TstNL33XnDatWWeiBbxLVPSxu5hDmFFgyCRCBPZXCScMW7sC6XnNLJbf",
  "key31": "47CJ5drEgKKwwn5PgGK3cp4gWoJNjV8rFBDdkrwV8ATAizbYY8GEnzBCuKTfjbGZH4BQGn8NZR4FdFMeMrcdcwtW",
  "key32": "uvijsPBTR4fCiS9mJo3PP2khtjAUYAAJyd7hv6L6UY6rivpcSC2iMUGnkssY9Df6AnaiFX55yHF1cHbvqWVEb8r",
  "key33": "AzQauXnq8i8iapKQaWFNJpSKqkQQnVGnXhRAvxC7BxBxqCmK1GLBV2dXw4TSDvidhdzh2KDer1njiauTXyrpg4r",
  "key34": "3vLvPcCySWkEkBCbTHSS2hKTCT1Hto2UB2sE3f8Sme3ytt79B58SSxRrpNGP8Uc4HBGMH1pTdfeFobgz9mzAd47g",
  "key35": "3cWPcDEpBY1XsZiEDbwDDVJmMXWbEwkHB6Tmo9L7LNC57zrfiwzNSCDLPMztHG6D3Z6Sg89i5Sx1J3qJkijSdPVv",
  "key36": "7iCVNNfppQX58x4bWuZtN6Pkq1btusXdzgTpGB9qyUYU53gBsCB1VPxuEWCct9z7gca3ygT8FCCySQ7BUP3oxY3",
  "key37": "638FHVM3WsV69c3UUpcVyqJXbwGbMoCKoziYVb7ZnxNEyeGEnhKujforvkwFFopjLiLkSa8P9dimnswUDRiEG3pp",
  "key38": "5EWS9U5XdaDpXC8bUsY2DwPQPVq3E2kbPmLdiRjdSSAahYwwqHi7MJXv88cwhLDkzmYkqmdXzz1feDdFSCWofzFi",
  "key39": "4dpivnbSyoEEiP29D4jFXTBothXjz8Eoxfn7VeY6yniUDWffWpTYSEHcUZNHEnTAMij8iVTAeR16qLZA3qSrMEvq",
  "key40": "2TgZyC66jmjvkKu8mz1amD4ETA8WdsfCfSRco58cQ2CgMSkTS8Eqv5GoqvutWW1A9ZN5xehouQ23DDXjFaBs62o1",
  "key41": "5e96Mh4tdUaA7vpSMXx59VRpeuEJzT2TxFgryc4Vmi2zzy5i6qx6odMvgcrGBKmktD3ZCq1gzPsd5KWpeYLt4HNh",
  "key42": "4sXct95NxGoyY9U2Hm7j7ucxHnkPSBUVwn9oddfrwGYcBBWhu81bf2e3U7peaiKa88Ej2YXhCaiKZwp8YZ1JdLrV",
  "key43": "2E4r6tPfBW8kfojh84WM6AuHqd3jcTJSkf3HvJLRv5QGN6YmGF6Jc7s3NKELaWtqd5sv3jDQe5u6hvmY62WNTChm"
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
