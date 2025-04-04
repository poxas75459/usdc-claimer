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
    "4SPN4FrwP3TXB2iTi7g3UTmazVFcb8hP2GVf2i9dRwHnCAoPTcaJ2ni8SAvKxRTmot3iWtQdCKWxUjrrozavmY34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65oUJeTNenwqcmABfGoEs3jcK7QaeurTqcujq6mWzcrtS7c2bMb7UigPUbrpske6G1NA7RhmtPwRdgM3bWdPdNvF",
  "key1": "4rBErLyCX6CAhrAXcBzexn8JErcgAa8Wfr45ioUPn4h5hiPHvQaViiJjd8e2EjUy3ULjtsr4bVL1jMsoWcemPfTf",
  "key2": "3bRS29ZuoUhPLvKQz4aX5Lb4QfehgHUNiX2VAj7bt6FEoYnX6p5qukjK3AfVsGFjvugsC2sAsNDkgKkia4jan8aA",
  "key3": "4x5w59Cz5HLmuRk4fCi5kTkkkQdjUbPgr6fcsPLnohTYD1JbVHyXMqvVBwigyrqiTnLt6q37MfodrZ8J2MEJ2kZQ",
  "key4": "HLeavm7JXCv55X7y22U4f9AxPT3gzRApuF7b2dc4DvuUXd4ipgaK8aMxwDnDpdDtRbEiQ5CFxTeA983uRjWnk5F",
  "key5": "3GVaUpNJHnoeNFMbBKJLUXupUb9RQbH9tKrfbLGUjvt8VN56EBk2wapu5rFoxiqCf57jXzxAdXJQUswndcsprGp6",
  "key6": "39z9wNYZrdQFkcRtCX5MLEW593KqRi91fGRzzTRdvqiQdhdqhQmKX92NAQj5UM5nGa7pUmZkwtAgXykmEkQfMu72",
  "key7": "2pG6tcnvrVs2hDXCH5qv4X1DEWL1UpH7GBVxXaGRywRhfF2q7Fq2owFNmaphC4VTw9SgacWj6yxXwhYL7waLeqK3",
  "key8": "47EpLnBtQ2ThvSZDfnhaF7no8qo8JhcmHDDzVdzx88Wg2D3GJdTKey2HFiDRmRWnU6kbqqr4mWQvbgvqeyyQG2RV",
  "key9": "64vfXmh8NbC3bSK9EBrNRZzQKy9rNhqxmmxU4qXk8CX3MbYbazCMJEYnE7NJEN9SJ7u2p2Afyi8rC4pGopg5854s",
  "key10": "5cxHK1gpKkminiPGDaRg3G5T1G3xUVSVnTNvjjPbbd8SkfiqeLSQSRd9VdhiabvzmveNFEy3VE4CApBG9wx2mwyC",
  "key11": "599Dp4WbpgkTCPScww3aDVTbPtiFvmmNF1oueyrBjvdyPSjrnma8pnEJe3n9uTsFXiWTZBZNxWJs1LJXqoAGdHo5",
  "key12": "2JYbPoMqk1tc7GEYwkBTcbBMKw3325NiWqvqW1mpw5Shi6GLuRJD81L2yDkx1wMbhq84DYTbfYNGMH1yoMRFgSNZ",
  "key13": "3TqEB9UJ8zan8APLb6FKEC9FXTaixY5v5RMGUA4naVQQ3kw4rKcinyGj81AaErPXXuA3fBwM6gJpwdQnpgqoAxiV",
  "key14": "N9LtbZCxLyQ6pt6dJBUUygLrCB8Jg6hxUCQTRT4ThddzmZf7asdrhxUYVLkNKU6T3DqJiHk3UaK88FEb1qVGZCs",
  "key15": "4RNSWBhc8687kFsP2w5fNDiGbr2pwrkhJm1g3NHnGJy7dHtskQU3Tm5bX7iaNR378piAo2n9zHvDfPMu2rEibo2d",
  "key16": "3b8bxo5ixXZF8kcyYj2iT48kenaufVYFRouiBvn1JTqJSDutJi8LMCYfjGLcZ9vCnLPkDDXDP6WUz87V9dpzt8iG",
  "key17": "4abZRexTALyb5joDJT9v4RXRbuwmfDzpxYLYNyqK2k75Ny8wCGu62Qfs1TJUSAxJoZgNTr187sLWN77eoeXeMjhP",
  "key18": "64a3scRyQePWAPqo7MttE9m8fBdHBsTbZ5pDrTmU2p23YcUGq5V2MaLsGWeBV5RgfnXzaR7Jb8BpjTgGSep1ngxU",
  "key19": "qDfybK7E7Bht5gRJqGZWNzqkHEioFE938EvbPmkRPk4KwgWn36uPeg6BKaKyApAS7P3byApLDjNG7hhr2oT1Yhk",
  "key20": "298KbBKHy6xPzbGRmAFfCTcsHWRSGfRmyHa1ZFDuuFddEzWmd78QNbhBC73xssYw7Lxzv5g6ocDYHfp6mHoD2TYG",
  "key21": "5w9uzWtjeJi2oDtHfGBs9joDiqyuWKRN6UpcPJvVzD5YyLfAgibMRw7yxFPUPW6GNG86Db4xedPoLTFuDmicDUJX",
  "key22": "2NBLckhQQSW9qqG47eyZSEH5Tmn6tdRuiCJR3SHsB1PeUgzxS5yY9yYqyJQBrZedLMQCUFjjz5ELYH5BGwsw8WF5",
  "key23": "fsi8HcEuVUK7fwAvbS4hzp3vujQshRUMuVB9E2NkpQkDVXXy9BWS52tu9egYYmBrBAEhvi4hER49qXBVzcTtbzq",
  "key24": "5gTnWMa1Ws4fkZamuGpa5hn2jat5Nz91SHc9xHHATjJXcwcjZsg8bNyF5aXA6Yee3Bu4wgXrms48PeG6ESfhkr5e",
  "key25": "2kXAmGrUah1HWkuQ1ztNMM3bANgrDbyeiSA3eNWapahvPfkf7PFij4yywTpdKErLvy3MU2FED4p6kws9nd8J6iZZ",
  "key26": "2F9zQPmaJBc6PothJVgXmKNfdmRW2H24n4H4x7b7BAZ7eZr5UfZb6LwPPrRZiGStJ1P31Cjk2hFh45yd41WXdKhR",
  "key27": "oGKgvrgQoNtURELtATzeTxYntt8LPcJFRv3SnLXCAPP2BFenDCVyV3LRZoRyGt7YeADYvJMEQxjVdMdMenHHF1R",
  "key28": "5Qw9Y4orv5DvV1Nsenkr7H9shVCqsVLwW8mm7HfRS87Dc4v4UgnXYD3w7aECbRAMzPp7MMPwG1NUWLf7fZ2TvUEZ",
  "key29": "4C3hXWHFNJSJHiPQHX5tQpmhwvfHAJfLfAFrXctdVr4qAKbPFUn9Wph6joK5ctzhWZTVhviKCrtTeNTsJD5pzbZF",
  "key30": "2RsH8Rm3aTfegw3SEkNhkLRLMcVjiUCw9Go96SwrfogzyqKQ7msCMmn6UsTwezYPBtEC9SdLKaDhQscg4XJvwFrQ",
  "key31": "1SExauEkmSQFRqqZkEWBYup6RpbSfsqvaHBpWrWwCnCRgcm4iNxLcsUPdNznSKWnVimKBzehm2wK2JvBHCgQBRj",
  "key32": "BXSqYRXFdw1nranQd3PjhRa1wyAXHdYRdCxsdWEYeR467fQNbcn3iaYfMmPrM2dqgGftJ51GXQN1wU3YqFVTDi6",
  "key33": "5DEqDMTeKw4WkCBxJ1yVzkMs5dUA5sXmkZs7tmdnEUgJEG9DEEdVLXP9PAuFgknJiKM5MxXEGgdVhvNZn71B7gb3",
  "key34": "7Lwz983VGxmLpHrbgBaowz6g3KpA2n7Rp2L8Rwnrk7awZFPM8E8XTPesvFeKEmV7mLAf7jpVWdt4ADZUZQspjTK",
  "key35": "442G6Y8rgeRaecWLGMrNCk5r19jd86pQWXVRNAn7BsV9CEKznSBzb3NT4hdpy2LLU5ijpQr4raxJ2J6kxUGummX3",
  "key36": "5qu9FAT4WqmYnrdxU9umZEAmvcM6NfTJJHJSimAuZssTmb93udraJSnGE4k7nDtPpus4hiWr44P4roMm42BDteP4",
  "key37": "3vLsh6NqRJFpHxHH9qQiDpxN8GGp9KAk65WYfPCEubZpwY6KSaY3q2nrQ1FsF3GwrUQozdvLm1rDPDRECdCeggu4",
  "key38": "2mcC6kLiVWUvZQT22UFZyPGgQx6mYy4oXxyAM67mVBFcni2W572Q7Xd3J6YKPpXcZbZCdFp6Unp9s46jAZ8rMxQh",
  "key39": "4o3zZbCDsaqmTQm3Pe2oHwMYVrqkk8dg76rsB7neHdrPu1TYYTYzGVpTiaKLb3HK5DYwsR9bVmgNpuUT9dZ3n3AE",
  "key40": "5o8DMA6FMTzR1LgQ4TA3ZoJJtLWMPBgpWLsLCcPPYSomT8fBCjbSVcGMgs1x7HyEMFqYfErCdR9zjsEG6B3tdVsv"
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
