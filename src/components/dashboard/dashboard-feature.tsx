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
    "4g8Hbh1Gg5dDSCTQkt2P7euEpfM7NyyRyG7SCjaRyx1cmBgZEZ4rvcfrATiw2pdytzYwGWHN7fVDjokyYWNBSqn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ud2CeHqjgnvMnS7xGmA5uujL6HS7GwSbVk1B4qb8XsYdZWLpvasu8AvSagWgTPAViDfni6cLzgPTfu6u9yFra4U",
  "key1": "4Tr4BP4T6qQ8Bk81Ka1pN8oaJqS4PBds2mURJ9iUxs4hEb2GtAZY33pScjMbYrwwYeo8UMupR4zUV1tSV6CSkLyf",
  "key2": "4dcWXXWLvNCVDMiXy3nPQyB4KoaTq1EphZKgBCqjGgZ1cR6MBwWZxSzSrMV6HDkRi3L9i2W3jmhiRmq2Ji6yM54Z",
  "key3": "3zUsWgET9iKSD17MTpBFhgVYmmxfUWyN8j6qMNBBQ4qzy5R5Cd57XFmDAYz4ewjdQTQg6sZQzHQKwN949nqgj5vV",
  "key4": "5FfQw5cCk7SAbUbcCLBLR8KTvHvLaFscrNmMezLsNov2Tg5MjSJU36fx9awpYUMRMWXzJnL5reMR3GA6e6bBMt9U",
  "key5": "3pPJh4auEq5rAa7xwRbr7MvxMapvUpKFkDvGC8oJXB67sDrqvgF8LD9h9UfRbQRKSCnNFJUUcmzMmcVeALypipqr",
  "key6": "3vf5N3anXtVQWrsC9pnfbZU2RKL34z6HWWKSng9n2fGJxvcxmTM2W88LyzysiDyxntAiha1LW7M5F2PHEeMFJBdE",
  "key7": "mZ7iJTWtnq5kFRygWhxKNKhH3pYghZDK9WnToshVBX5Mxw92uzJPNVVkerxkkv4YiBeMBbZjNbmPakQXBXS3Sd5",
  "key8": "VuygHbEU6uTVM2QAMf5g3fMf4RY31Rh2D7LPsagJ4iJPhBHCLRsVJwPV9fVDQefXjtiRGJeNLpyRvpHh9WNeNGx",
  "key9": "56rC9HwBVz8pwPtsjTdogSaDWaw2zzPAMnzWe1D4PZ5XD4sSa7dvzypCLzALtibQXCTwE7UWrEQvpQr9q4oxh2K1",
  "key10": "5e8CB2RVgubL2dEm9DaxfxCeg1EV7jR83n4DfbHWm5Di1MXvAaonj3i9UEDgxGfN7iiVDMLcGdmWs8qAPVcDoMqj",
  "key11": "2wYfzLaNUobHQHwe7VPV7WjuRjukWUEfpjA9c2sBhwzhyNTnd6nmR78GpTC1njaJbpWctpmBc1g4CZLFNH1HQXAY",
  "key12": "uhAJqVgEZHA5QwJhm8ku8GB22MRhfjjghaBgKeCX115XEdJux359ghLLWY3rdhZySd9865FFPW37yV2Qn4Q1EnG",
  "key13": "4vZC7bwgTUbNSuYD4D7ht5jcNqTmWY6eoeyVuPfrKsigCf7oyuhDpg2TT23BwRq7okqdWYozcKd2wEhsDNVqV4x3",
  "key14": "5HpqnUe8xGPNBg5y1KZSGcVtg3v5LTC3ZTMdhw3TJzbmP4SagCc7HgA1iikF9vBEkr9hMesMgXRUJcA99s6XTAWf",
  "key15": "55mdQezcAPTSEsVvciTs98avtTVgfYZ42z77zjNxzd29L69ZWJVheozQ317nL84TBimuzNRPvaNRF4chy3YYUSrR",
  "key16": "2n1NEs6B3itTd2hPLzbm1V2FMeTxK1uWzGZu1kXWNJFPg7v6izL7XzcenBccK4twManvN653EUioNzt52W1L4oux",
  "key17": "4SuhBHYVLU8m7YM1wE2rKQe7GeqSkRSNyqCma4m2pRMx2SoPuFyzYTGYo85aB6rzp3Fd2QzZ1GY5xgvTQgzSRVLw",
  "key18": "33V8ug9yzW5B1dtLiEyvaaXXdFW1sQdoho79u1ckSavRBcotSP9x7e344uPYXXpnmcszUhvnAnovV6hFp7czaZLB",
  "key19": "5wiVCR5VFNAGwJtqeaxUzYSXSzyNKMHuz9UtsP7LXcpi7xs2fjVp3nCPPoMy9rqD8VCSdbYxYwWRmFum3BzWK62f",
  "key20": "4VhvXesEffJeyiy2qQDzLQMu8MSoV7Bb66ofC41mPLzRJuN1LkbZvqq99RutkDxf4psQNHGnnE3bLgKTpDYzi1sZ",
  "key21": "5rP4FF18pqLPKAEqYdjgekQNBsDSZ7juMzrBdA5b97Led2atAWoVCqWXzZhfwEvMjLe361fscbXrYJTDFLk7SnMp",
  "key22": "FjxRMdZScGGm4QmUbxFcBhrUYGPoRJgicpNcozyihyvYUSuDNPyZUrKtn3K9wDGQQMcNKdxEzWg29R6rLKnN9a3",
  "key23": "xXaUVQfRZiddExvm7mRJmboYoqKu4FB2LQr4wGNUwJhfHwbMz5ausBbVwD3NEXuHHbpWCxMgkrd4zHyrKZ9DJTu",
  "key24": "36NMiTysJ3mVVbL2ykGptn478ZTq9zbK3RL9SPaGh3h9RDgMLX8t4sgQWwW6avSJhRCE6BTsFcvcgC7ot9uNaFFa",
  "key25": "2KcS5j8vw2tfdwWXeyNTAnmRQJ7nYjbLtTB31GZfPi3ymRy2UzKTnAUtNR3GFwwTovaUnb5V4C28wihw3DxtzWr4",
  "key26": "4jsmYTouYvG5JbiSEh6iCLqoVC8sirfFsKQSB9TWJk8gjGmM21MfW7trePcfKnvZj4ntWB39Ns7SWtwnmRUA6NUP",
  "key27": "3DNioE1F2kQLM2cyH8MC1XEr5JdwU65s7SkRpjghhvvxeVj4K5uQYsamryRTUYjJtyrAJAPWrTqreSovEKTiei3e",
  "key28": "2beNaCMLGNqLNksBYwT6w5dcjUbB3wTZEAdpEoxo5agetq15dvgMajUpzSBE5cLGYpH3rzD7eh7BQ9epASE6kaFm",
  "key29": "eNtU5RjRiL1tZTTX2RjKCKE9FEgQ8Zvk2uwhfNuW5bZrm6fgebcmU5xGKrLNbs7dSFjrTjENKJVpM7KcPoqdDaf",
  "key30": "5cpXbndDVBphpqAgVQunsjwYruBMkwTYeYVojzotQB1rHTgpDKsmSHh1q4mSp4GFb5Pqqqde69FRgSeYJRUJs9w7",
  "key31": "X2p4kZQU4CGgNqxTM9CGagu8CtSscbTLsrQKgYFP5T85nvz8SpW9ZPPJ7hXKHZNTm2J3zGRHo6KvW1TzeFV5vJT",
  "key32": "2gvTxAhUpkuvnsNzaZCXzDGHoF7HjgyvwDqy9hZy6uNTCt96gLwecpuBmw5fi5iGc18AzoLTHSWrX5np7bDLiQT4",
  "key33": "57kYspzAQVDwJncYcxeEi5PvJaBVfo1gTKBch85HXuaycCijezh2LCfPPiR9vJsfBP35LFug2j7FJpizQZD8rri5",
  "key34": "3SgR4HnUaX5VM1rtRbvVoqUFQ7WQHbHUE8sTaf2b2yY9TKGPPd27nJ2yVgBxbByGh1DY9MMGZfLy1C2ioJkPKn8A",
  "key35": "2Byzem4Hgm6LcamCQ6wvoery2Yghc7etmb1eKci4kkYenkFoRcBJn5EdQRxJLAcwJ1EJNiDpojqviy5DyNiDzXDr",
  "key36": "2EsJtGWut7ZaxVt79LaRSajiLrBztmLoUdWPN28cpWQCswHfpzUcmZv3XfN7tiaLnnKMR3c9QjdgCwpn98hUFDYJ",
  "key37": "4BrKLKFfKVkZ9TvwnqTYo8nEJsMedP6qDdMDV6s6kyS7EaJRehjTssHBHqsK38SGSSPNPxediNww3keWN9nfHyxy",
  "key38": "5U4j3EUdETXxPXEK6xpjFMSMADSGCUz5VvFDMKbx2CdBJFdzMcsXNxtTuaCvm2qEWQeTdjLbk1cU4gXayKNZk6q3",
  "key39": "mq3xVoB91tco5FH1w5EWStwWbHKGGdVmooJYgV2qWgkG7kPYgiCpuPN2MVHG3cqdKhJqmwB7hNBgUTudFTwRaJy",
  "key40": "5iCjkER7JPbAnohXz4XzQ2RVT72zet8Ybn5doJsUTFv8xb36aUTNKA45iHbRG92oii4YQ6Ub31bTdDCdgeTH5qUP",
  "key41": "vHbydWhRe4ABuoFCydR94Aa3EZBXJeDc25drC6sWWDZk5PiJ3P6MjRK693eXejuPWDQKVnZX3iKYjkdNRhC7euV"
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
