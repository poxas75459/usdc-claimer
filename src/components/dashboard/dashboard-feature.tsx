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
    "g13CNT9WPbRwXLgTEGSJCUUvBKZbbKf1Vs34SM4JirUSLGNUP3fUpAPRJgCNdZeTZDQjHzeVnxNPwgPesFq21Fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w2JmnA9b4xyp5Vx83m9x5QVpyyxh836JubYvz3G1qVDucFrJ64uUfqKFY1XbUKTFjJmWjxS2oY2quM7mXWKALPs",
  "key1": "imcWJcB1JoBKdnximEYWoa6RGU1EWtgAv4Xh3nx7gfS3qm5LZipFqK6A9791ct2gyucPu6Z1tLZvp42kQ1GwxHN",
  "key2": "2JKhsQLvCDXAL1qDVFUzGHc7THK5dz9xbVWqdkMgcVgUeHFstLLuGq3LDDzi8Hew13hPiN1tjLxiubJ1GX8n4jVN",
  "key3": "61DYeaxc3JSNNTppQsXtJHBAHKRkxwL4Q7iRtdoJYm851TyYmoL5QCXnw4hDunnVjZ9NatDgPfcyABrrH2WrW3TD",
  "key4": "3QdnFKCCDXmSaDeuR2grXR3HnZTBJUa3XdXRgJi4VrMce7DSKySwUVewZybg53hzHAad6k5s2jTfcERc5aqNTvFj",
  "key5": "5mSvW6twsPM6WZBTMEHMCDbnc2iSRg9oxXFhHQC7e1k7Xq36iBtcUW2oCbXnUoFbYdMqCtjzjqDt5JdqBk2fTq5f",
  "key6": "4NzdivTYMZpi2x58siTFiqt6E2952HAs9ByEMCZoVngPVGN8EoqgzcRW1De2eD4bkRTx1c4VwpCSpySJwP3iCZhp",
  "key7": "35HCQE6R8LGsWZywMtLqXf7GEMgNBhwPZE76yP8D6m5nxs3yikJgk5PuXkNUKZv733yoXzB8HJMsRm95a6hECnMr",
  "key8": "4uzHgsL3bvd2rznVgJe7hjhLSkgaDdnuW8e5c6ripyvWLMEtnRsfogDJhp8TRyJQYs85afnQR2QAdW3XVFf9RtN8",
  "key9": "3jvPMzJQ9ZopZmDWobBQ5fHfpYuhXDtrjvq8JL5UAYdsR9eQRbECa6g74DFotxfkywz5LXcMpwRb1Hbbz1hCd51x",
  "key10": "2Tnr15Q83p7zSB7fPjpgzMP7PYSMbMinspnLRYSN5UUCm7CfZBm92w8M2EVWsMeA1CXongbk18mN9h5mQPLKoiLk",
  "key11": "3VfD9uRuwjfEXJeyaD5cFyrbTaxnAFweFc1PcfksvyiDYMhL63nYfyDBcX2Fr2Ycti57tLfMrGey5asa1Z8mVWka",
  "key12": "51cJsLmjW7531GqkomTt3GeqEBGdfN5ehyCk48TP1ppgTAY5tHF4tK5EnTHN7SJFDCSFr9jgm5dzDSj8LN6u3sxD",
  "key13": "yEoUd9gGqRtYVTQhsqB2PRH4U2WYirdeb5juPBwBkzZtP2g5jZj2vN8BkkbMpJyQyx37fFtoA7Y1sAorGkMFqbf",
  "key14": "t5Ndjfj8MrgrYkcANQV3HM1cCmBRqvAbXhK3CYeGXycg6vCMkvHPZn6zm5XqMCo6pAtvKkGjfUdNWpaWD3CfAYa",
  "key15": "26j3jfqPxuy5YccFzXeijyBgPck7GzAQb4C8wBeScG3gPBH6UkwK9U6pJTKYVhDT4W7cpWyHHokuEacbd2RUA7M1",
  "key16": "4gDfPw8dpra1z9T8hDmuSuafCK4BjMm2nfHHLXuLeNEQqTKBt39LotkFkW7WJ4zSfEEVVSTHisKVfP4nEpTQJMCK",
  "key17": "eSPm6vnrxAH58SrcHcjwrx8wyvnbegUCSbchkCyF5dRoMHb6DseqtLEvfEh23wMKGUfVXi3eUs6BD6VD97snrgA",
  "key18": "2QCMdzrA7TKovGq3wprECdN65dGjADMhKEmRsjp34S1sU3RnLA4joQgWvTg7bBRiYr8VP25dvJPGhYhkt9KcryEC",
  "key19": "4NJQxY7iB24yeMDVFDoXWZ6W6AN6DNathMvD4ctGoD3PviPXrcLxW2wpkQQknEocpeh1mr9naGRevBVZAAwk6iby",
  "key20": "5fBdnzbTWdezmFB4g3tjwUpSJnbA41AmRkchPUorBmfi8gTgUHjqxCQtB5FsrwCRvvgCyFopuuSFFUWA9BAb49xt",
  "key21": "5oorzJmth7vLyeU7ekvUq9LziEDwJ3UAgD9PXH9Vvqvk1Nb2YdRi1AhjGT6SvweZVtSEBDX1QkkKTKUBec4nVL2j",
  "key22": "46SgvCPRAck5CNKYzGvsidbBmg9uFJPcjaeZB8hLQWyjWHjwRSyXp5TF1VPgf2CcWfkL5vYGJvpuPo2pqQawMMpK",
  "key23": "9R36oc2UgSxbWpCtPj9U7MrMRHWcB9qp2pJCLtF9WC8fELZyfYGgzNXf16scTU343xAPW9173D9gUkn3RFh7pGr",
  "key24": "63NMeeTyyxK4o3EY1kydX7a5s6EhBqvPfD8r9LWnqz3nyrSDUDhART7E8Kz3mSLeT3zVKAeQMFKsNnDuXZRMhLRM",
  "key25": "4wxwaXxrXfUNC1oxbhKbGcBxzyHSXaCh4FZvM9JyXzkfxYLWVm1xfC7XqQQkJix7TxaGua1MsYnTGk2Py8KuB5TN",
  "key26": "5az1vjNMf9oQ2myX5RidekdyrKZUP2smuuYVYGuoFZP2XytPPaD6aRPbyU2U74xxpTU1f8tV1ffupbmVhffb7hDc",
  "key27": "3rpL5CLCYZSpaBGZ3NXDRf1f3GWE85U8zxYARWKJsmhYUKS8TtwXkkJkBxuCrgYD3NpmAnqPZWuwrWWwkvkfKWub",
  "key28": "5ZbJZQTzZggHKAicadqkCkG64PLGErMSyzowEjrFZtC72ef5MTzJZaw3j1QEBfp5ioSZdhYvERPH5LYyvhw1bSVN",
  "key29": "271hztT2g7fntvsbAiSJNvkQrBSUtNYtE48fZGZdBSdEKHmHp52qFc6xcqkdewjTGzbL8Y9HifQStDW54fQuesyK",
  "key30": "5H8vipKsz6zMCo2DYz7WQJgUfYJB6vjTthBpFQCCiJWnin5ahh2baTdpBYmJP4QoL5jt8StGrMMctkxt9rRvhPuM",
  "key31": "3gAbYZfccvLJ7iNkuQMacWbZJc6YMKun48h4Dx6fWCrcXV6Y9S9KoNC66mtUEi3omq2pmH9hVLmyNTaswEz362SN",
  "key32": "2HJALJsP7QQCBeiz8HzLd2zDyWe2ovxJqvhXknbuKuWPwSQDF1apzimyRqcEE4PUUsv6yPkhDY2hwpCfFTnWiLWk",
  "key33": "3oHbzGw7VmgAdWmJWQKmG3BPcp5M4cpsjqujYXcXspDwH8eJzgHdTi2Ma1JpDWH9jbhNej2HMPezBFvksxTZyDg2",
  "key34": "41GG4vEQPs2zJvTtENyyBhdb8jDeyvtTiEhjnnLRegprL49WA2NKTJAWeZrSJzs3sdWLihBK98AhnnMRFSuAi9Cs",
  "key35": "3tSr8XBzdEmu8tXKAt7CPCQ5G5reqpqyxFtsW4wGvTittmmVkMj7yss7c8oHy1EPtu4PSQAPC9D92DH8t9Ucgs3X",
  "key36": "yFfTWFeMwtoDNdAaJSa7gDY2ArowehNovXy3AtutGZHnBhHsPoUxmARm5EjY3N7NvNzr2Rx6v58dGKP3ZLTb55R",
  "key37": "2966xLh3a3unj9ASzf2qYFL44DVche82iGQ9FjQX4SzoE775mGrcqeTLBd2VXmQDbLQDZwmgW2L7SmHF6eZGkNRa",
  "key38": "3MCP4piAyj9NN5kxe29WbL5uhpfpvbjGSRXKfe4SKTsMm5fD8ZoWmKaRzfjyQ8QtRb1VAh8TvvmhczYM9WWqWfdb",
  "key39": "4py1CQqe1mPKNFt3zzxrADtEufLQbstP1Bew7wNJKgZGR582VfbcLjdT92CuP8VsrQ4q2Adwx8eMnmh7oMgrHTZg",
  "key40": "2KSfn4LYuboqW9ZUQcaDczQXoPyK6jKopoUa8SvuwxxHXE4PtkmVwHo9z9r5exUZQySNi3JTApgayCrQtqjhtNkC",
  "key41": "4DMpaGCFFgcXrxs2oXWDQirALTiKRrFpkh6xv2gqg37bF4JkpBn1iS7BBY3U8DFTZBXpMtkxkrQbeA1bLxb2Yodv",
  "key42": "4V5p6XzqDBzRDjVKys4wQVmNEuWF1MpsVVXLXceA83uH89cvthh4FeXeBzLpsLXC6YNnf7NGA4nYs686CDX2J93A",
  "key43": "3ExgPa8wdYy9uyN8cz8zDX5JmmSGZZ2gpNmiSZ7MAkmkSp96pTsjn3RHRrswtSYQRg1GDZJ7RVPZHQ8tDLhynRFT"
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
