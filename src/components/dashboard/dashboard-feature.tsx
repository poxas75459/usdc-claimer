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
    "24mP9ecUa7W4s1hECAX9g6Q1931v179Pu87pm5JBNLEtdo72sQqKBSqgFX1159wMhExZnSZiJ1g5oEW6qWEHE3C3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xKaGudh23NHEr2r7Z9xxVhLGpqMmYpQdp5nRTHWqR1o2v1yuvh5osruvtRDHC7jTcH3uwUC1q787sZsoiF18X7",
  "key1": "QtNW5QRpGTtjtAWSigZxCXJ9w6fzP23XjQv7w2tuEtaF1EU9B2SVmgQ2yPVaXH7me4dC3Hbrz1FJ6prxhKMnPyH",
  "key2": "CuQTVpctuvwXQ6yYHG28r83PbxPbY7GiRoz8iQYsNWgKYANHFKBbMbgJSYBuH5rXVMezaGNE2b1G9JVfSmq4m7E",
  "key3": "43rhat3Asj9BjCikDRRTYgvt7UQs8YeQHVMD8ZJRb22jaVAD32ZwyzUkQM8WBbjMUt614vURPK7LErpFcunMfDyq",
  "key4": "5sdUSNfPnThyZJSb5uTsx9VAmEPipuFSDza4Vo4xuAQ49J1PSrMWa5mHfxuoLti7UTmtPhxtUyfS17fwRJruvtEq",
  "key5": "3Q9F8aZo5CTqTmaTL1KTZwdEx9h5Jqx3biYegchEd7KC7X3ghugigR2FGkzwGN3z5HTtamc795GLvMese9tELN83",
  "key6": "3uERTF9kmAgkA1o1T4D5GaPp1WYjzBpPQRH1vWT6UVh5QseMKSNA5v4aeQNjmhpkfhtXxmr9koyggkXTPqMUrS73",
  "key7": "4PKhJiUnNPnpEdnnTQAoe6GZbXRqCUVq7xtcyqknCCNw6Tngq2Wn9HpUpCrFaV3D781DCAboA783ENAMV5GuD4xK",
  "key8": "7caJ8EGfXxXSBVVb4ican7tPxWLnyL2AXZqC4KznJP1EMuc4dnHS7rCBZEeaqTpmA5t5H7yCk3FDJa7W7Vrnh6H",
  "key9": "5ULhm91f5jqv8MSv7eSvZ5k7BABWkEPMV2iufgBYNcNLwuHE22NXA9kt7E7DiLKHDvGuVAmBM72Q12PkvqAeD1qH",
  "key10": "2UT1SoMLDzkTjhuhDyNCDzAApsUB4YqQvV7gi4mmFJ4p1LtJc86dXzia3jcAb7a9NW1oyx1aWP5QYJ9qxh18BYLe",
  "key11": "3Jse9bnidoKeQezSGDSZdUaNocteK7TJKEV8zkkzRYQdBqdCGLfGCmUP9pnNCEprmoRz2Qgqcd2T8b5EB9myPKWY",
  "key12": "5GXDwShWXuroZ7qJKzjtarNcDs2RWztFGMDjewBdLdRbw2MmTpVNhmLFUuiEHckKXQ4qXvXwHgWzp9zAS69fhf5d",
  "key13": "2Egu492MCntr3trwqFTf7kQs2qgbrMs77nCCZcyDiYRcQvxGfvevJ1o8Fb8kUMv6eCenNZaDjD7dKdsjYggHVxU2",
  "key14": "2G5Qfy65Bfk5HhFbFATcxAgSJzt7z7cEmexCWhGhroK4peyMWJAaQrP1dyfLHB2dPd73B2hwuC5K4p7Rmn4Fe8HL",
  "key15": "JMGSY2jzNg4ySURMsZJ1G97To86B7wynd8EncxHA762GR9kjsrDQoDB9EAr3J75YQqSK4g6He6UXegw3YqWAunv",
  "key16": "XtdEZJTowfm4v15UtX7goMZm4azauTtZHUzN3qB8J58dyhdSK4sxAzedz9xv1BZirLtfDD4squNK29dpMPdX78B",
  "key17": "NocNd4VdrMnibzkheXDvafiVoERWoVieDW3zMo6waG5VXwrf8BDYY8YaWGH2hi36WJQvhxGfWtKjxGrgcvmmHah",
  "key18": "4DFksU2jFT5SVkSZuDkKZMQwJQX9tkEGh5TAhUfZWFM425a7MeVrzMgJgqdiQv7pESsZwmtm8xxk5gVajSa3iyoH",
  "key19": "5awcxKWHhaPRmwDQ7wScNJ8SLAY3HmFBVuUJfL5ewc3uxL4U62avzkz8fyKoLmBvXMpicfGSTx1fQWKEJXFr5h3r",
  "key20": "5bmZ5SF1uZrLUfo49hFqUuux8Yt4gbi8QrcRK8AdBDXZC3RRMCQQTQE4sbG7y8umJdYyvNZmfLaXcgBndfHMyJSy",
  "key21": "4qZB7uKDD6cpj9wLKxbKBYzvDiZd6fEbxHS4t91woTp7B7KuZqyBgv7SR8M1FrSxXfLiHjUNKWaDnaxaCp5TsZRd",
  "key22": "4sktvBzvCkRgsKDJsCJ9Cu9amRX5G5VG4BMLKdqY2wrMVYsUUE1XSLnXRhD7K5Y8zT6puq7f6YwzKBysdpsEXiki",
  "key23": "3JaomvZwjZ4U8HgpK5R144e9h445y7KB1Zko2KFUoH5AmGMEFHCP6mtHoE3ZSEZM4269uAdqQb6XT9UAdeQjp3ck",
  "key24": "3fVJdrcPz4fA43KBQaqnQY6RS79HTDzMUMEUmo7FV8nP3TfLhUkvmDLcW4U2iyrkQucL3RViMYYwoDTp3E6XkoLH",
  "key25": "45yFUConvnNthwxi8LfuLfVXPUrtHYisE1dpwZE9fSMgJxwWyfjNAHDtdkYk5TGQY618X94tDs4rqkSx73MXoJo8",
  "key26": "467thSyn2Wkp1xj3eXyQZ23qcaVznvHH27CB9eu1A9VCNJFkmARCpw6apQcYKxF1632QNxnmYQYNLAmMLcLnqVDy",
  "key27": "5qtvdjpW9ynMpWeyVhq9tzKvCpum3TJtXkgBechT4e4HL856Cmy2XjoQLaqB7DCQmP5q9HaDGfPejXG1cqhCs6A4",
  "key28": "2DZuiLUjzSN6EMg4dLGpDzPBwojdvsLtGF8E2Wnb2oyQJMngMbJXWTAo1gei3NJrcudBwgHtxgvoANAeAKytJSvt",
  "key29": "3XGPLdyA4C1q8kpzK3yWDRVAU5EDuYdLUtHvySEvXdUf3XJBK8rtmLXySXmJ5z1RP3nJD7UVYWuQJYp6HNqRpSmn",
  "key30": "5DsRSZHtPofRH6kfYcYZweuL3gQ12MsAxTmWMgrDP2SFfStzGakV18ELxL5CqGqUyqdkbwrLyohAdB7pGoLAF33H",
  "key31": "32jPNm2WxDS81SbQFvNKRap4P9RhWx8TqX9atYtMehXHTCVoZAjjipptyC22V71X1sVKjz8bSnZ9vPSNyUoqqSQW",
  "key32": "3QpCA2BUqLZmQWevmw7k26PcNmpNqgmXZoj41zACCha1C4iv3NgVenqhE8V2Jq7nBwHStsdV1iGoeKmWZ4bU8qWZ",
  "key33": "UNwKnP6LdAcKASQdruaNFfG6prxXxHXcGSdiCcXeQW2hgNbtaxYHN5Udpayn7hJB5inTRgjzpahjxk58xpo3AKn",
  "key34": "3deq5fRpjDy1sEww9EJpmYRbxmoHV6uX1jSa9rnbJcbVRMw2daQ3R2EofgcUghkCTQbcYchrXi9Bp7qMKJHBMpBp",
  "key35": "4DxCfmYBQLQNo9ZcLs4M4FszKCvVMqd56ikSyJoKfZfgNssLzc79CeAzXBG5r6o7zatnRBkYDKqBzMZLSe99oMQJ",
  "key36": "34z2fp9Ay1kNSu7A4wbudrs6kVEi4otkh1zvgtZ34YcuWoX4b5inHA8geV2JmFqbnyaqtStBjcHsiWRze2ET9xg2",
  "key37": "4bh4ZpUGQ9FgrcxBkpeiJqroAS6AZTiWs26gVevfj7f8wP3ft3HmygcVtXBXWzAYr8M26KWvWffPMz5RQMFg9E3E",
  "key38": "49vSKk12FKNoeBQxmYP3SJd3EWFyS7B8oAmL265UQYdi15d1saQyLGMC26jZzC1BL4k7ZjErXinC2NYJmCMhuzGt",
  "key39": "2uFRZCmyLJLJ27kDunveFdHdEzgCb9vki7gSQjYDvWVH2QyYVi5FjeH1Z9ui8W4YMrjNXFsTWgC7HDh9KvJjGCX6",
  "key40": "5axSdmpnEU6T1utWkGM2SCTy4diax7Zb4uqucrNVsakD9dpUrMmF5mKkysDrXmLe3mg9mwT7XizH4a9YpHhkEEAZ",
  "key41": "5SrLcunVqdbzNart2ewsvBptSdP6BafRhrUzMtYmkJ5cBZUDdsrRm5XcHVbmQPv3zko3ffAnqMczntjDFoAMrhZL"
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
