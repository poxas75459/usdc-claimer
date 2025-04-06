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
    "2eyRFTvg5Zn7pRhizDhiMPJzPRcE7xoNEr2ojRSbEUNF8qn4AvnYCnKVZTymHFG7y2xsHTLEMnmdwgFnuCP98eHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YzSfkGpdGkJoSRWm9QfzgjpqAcUbsVTbTiozptGtSnARVt8DvH1dkquk3N2E9PyWtHYwJFiC4SGTeywyPbgtCcZ",
  "key1": "23rUKNKLARjm8B9Wc5fcoCCu69XJtpfEU5Qo5Ckxc1JgsG9H4DkFgKzKVEsfATdczBLECfpyzFxbgupNZa7gEStP",
  "key2": "8JmVffZZGyjKzQ6Y7Q9tua5URvFVcCDsPtU8tqMHbtusr8KdGVKv3TR58pxCAuB6DSKUmk7arnRwehWMuPKKouk",
  "key3": "4dPXFunD1WtqoTe7EGV7TYZ9rYAngp8bH3QwZ1LauYZkk5g3waPfKAckDtAUn3Js8bFSy7qrHYEYNyrjoSocVjQ9",
  "key4": "47wxJMiU3VkasF9hzrKFpAh9fGT97r5xQUPmnj2wSbv7w4fUFYNDeEkzCSHLukbTA9Vwxbs4h4uEytBv8JwZSTvx",
  "key5": "3SvqAuABULHVRcuLysxEm9sHKfaaBHzL51tZEeAtvFvtrZh4cetztSuuWQni87e4RxPBe3kphJcAnqQD4FWdQVMr",
  "key6": "5PZqZcN5DnJ3g3naEM6ESkLKw5GaLLRnSmNUwosUoUDjz9tfEhLhpv8po1sKPXLpSe8gSErGb92uSixSMAxZaRxp",
  "key7": "33or7Tu5ukaHuCwtCvgjBAwAf7epo5E76iYhRGxbsNiz4nZaqbcwLBaTShyhsVACXrDJhvKxDy891sv1vkPK6Zpq",
  "key8": "dTYacEQ5oyXjEkm3WBW9uXrczoB6mEuArw3FLHVQmhXxGMYCivw73kykNVwSS4LGPZM1YkQLtDP4a2rCFacWSe4",
  "key9": "EAGtVMeGQhitHosJVtqiNQUh36tQBa8mkZ5h3cMtoA8CjTDS3LiquXEgBcG7A71Y2LU71KhEj6sshM2SNBoQJfc",
  "key10": "31fxsBnmKeKLYM6oWbcn3Ehz1iuQGwaawjqppRAodkShVHN28hf7HtfjCGUoCR8GGcSmqvm3HBVqwxgb7nE6tayd",
  "key11": "24Wn3G8cqkz5Wv7e43bDwFpBysAMiVK4WH2TaWCPQqfe6TdALCCGx7E5iovhAAMh2KPPHsr9L9iDm1L6dxGDdJ9k",
  "key12": "5BHLDJFGnMshpsbiiCDEMCLyxMou6vVtDsuEk74MPPMg67ZDxnfbDimn22dZz9ynF9PhmSPxcHNwM8DxFWfZ8DP9",
  "key13": "5FiokDEgEFWyahxSoKDJ796eeZQGHwWe64DcyHJGg58kyVX62vEKkoUyEeVHfhCzghzPC5fuZNWpEQN5xmJPwgzR",
  "key14": "acR92zzca33nDQhAbgRktLGn9T23snbkQoo8C5EpNue5FWLX4tJyMboKstzgcfmqXU28RJDo3d4iyF8EUA8kiG6",
  "key15": "3xoD8wEMu5ZbNE9rUP2yFb3bSG4YXN4nemQHYvDwTppVsygchxPK5BJYWeAqA59sj12fR1VrVakX3rN1N96WwbPD",
  "key16": "4bqJ95et9XqWWD3edLrK3hKk6gC2h7EXS9RoGcPYfcaS44awNVsiLhJVz5nyCiz38Qgf4Fk3ysKAhftCcK4RPgZk",
  "key17": "48bRdAxw9hHFcU35xmGHBCD9fJb3tRLuCU968ZeQhdfPyy2xXedVwQHmChmy54WspkFmSWjFAKUo37hRcB4EYbBm",
  "key18": "EFYYcBeVuTBvZqBeZRubDytWkmCWo37mp4jQPVmbyuGmWWTzLrB1PuNWj9BVLxvWKfQcry8ZDN7pJ6uPV3K6KED",
  "key19": "vCFtxpnnr6vwN13VuP88TST6z6r94MYewKWuTbXRd1NUiYmTi5TGD6Gfo3JreQSHPsaFvdAzUL5o7VibSHcQtEp",
  "key20": "4k6gLXX23r8pBxzgy4XUaxVkxo8GKGatkeBgNs54mcD5ao92b17mzDj5B6a9xFVUenfuovjw7Dm22rfePBkZV1zK",
  "key21": "Zy9U5UdLHdCKUKSeGyAnbLG8YG5hWZiR8UBVA1x7yFbh4edrhQT8xVdwN6ZwpdoNAEYq2bfM9i4q1agXfPzoQoo",
  "key22": "4tmezSTDaFQ1nFQgN6xuckjRMAMkg9RcS9U2APKQhGSvJJPX3JuF64RHcAWe8gaoHQk91Ba2arE4GXG8g7kB5wHu",
  "key23": "5sTTNs2DZ7K5NyUPVzrp5oXhWx2GjdfGf7ZdPo28iSFc7eLnrcHk9Hydpm8oYEntkZmL9RYNcndKgRgZqZMu2pkg",
  "key24": "5x7jZUwiRUQ6t4N1DuspYKhRYMYAuwniVFTKHv3wzjpMpGgJhaSHu9TpckvMQXXwgrLZd3HqMaFPp4sT3WvnGkwe",
  "key25": "2S9YPfH86PMvhP9EVjDSZvaWEvoca5UVpX2jXVqUR8yiZLUkaVGBMErdPgxmESNqVk2Yfcbht7ZnDKWnG1VhW7n2",
  "key26": "4PGFpWrmxWKiqxZhwRNwQkzVXvj9uQz21HRcgLXiDhyh9RYMG8zDumLDyeB4Zt3kPBMThcpWzoQuN9Bt7G515fpp",
  "key27": "3Mjvpa4iWV8B6B2HYCw4Biph4STcxSed1NgRC4tx5ZcPkxN4TA561aZQfZW6wnDk1dw938ashpWRXye7jkJZmmVk",
  "key28": "2GKQeH1eLxkzqkrF8Vxb9cTbMQUgC7s3aaECgSCxvjeynpMgNcDJy2FjPCYL5tK1h5tLPfXeCUS5QuQJkoUoBf3j",
  "key29": "5LG3NUBDUuVz9vVkHx36x3ZCTWKVS9Vr63R7b9E9aoPk4g4YM36o4rCRCQwDXnL8czSvQzjtNW9w1roZvi9YoNYZ",
  "key30": "4fDsQubLy3yzboQvM9NCiA8yNE6Vr27yv5dckGmRfAMcomRBXetHXvUn9xq8oiFDJxJLNfxroJJgct9ZQtXbmspG",
  "key31": "55QazsbAzEAp5sUXWF1ojF9GchtCxLLxTQFXxWw75rNYDLCNr2Q5GvnAZnUn6Vvfed3RCuQBmp2fuqhzthVZbGHm",
  "key32": "4fmmWUCZWJbWUjHY9MSnDVkkFgN79j8ptcorbwKEeLASbBievVmNRDLZxfpu1YSenxrtqg6ArtyMtv7dg15WVw6x",
  "key33": "54kRfnEB6Qe5ERTPupBZpbAezimXmracJCYsiWLizrpFjtakSRmn891JnkVt8V4zNYgyFdsWTrPuogWVZDfqtcHk",
  "key34": "5XPqr1cMAATqoNH5z6cDWUDQREtppA2pakstUpnBdK1z45U8CXEXNrwGDZXNZSVPrdiNHk75oWArtvEnr1fP5qd1",
  "key35": "4zT5Dd8vxHoL8eBpKJywrzpjdvef8QHTkv67VihDQY3aFcFNJjqLrWywWVBvLvnbKnQgEevSr3Jy8Jx7zipbcCdW",
  "key36": "SSKvRag2ZemdqQSRPYTpnv3YZ7BjdR49WRA5K88nbLDb9y2D8gxkQPpJnVgHTxpBSmf6izYZtHPc48gyXQUYMxk",
  "key37": "32MutoK3bZEKXvTSkhgJZPZfNaZ7ikAFLXXFnHBQccPXSw5TYoHRscHm9HwbXVzMvchAzaYE1PwWbnDLsi6quSEV",
  "key38": "3b5uDbAtKtVxtGAwszw2tjC174eDsgAa2dCL6twduRF67QtNBgX3xFigGfSGw9cz8oTg74LjsmNtQ3vX9kCiwuW8"
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
