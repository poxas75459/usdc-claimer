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
    "35Wyf5gRmmgDS3JRDg3FsMH9D3grdRKTs6EkbcJNUwBkMYJDpB4ytTrdbtXHmThjx57wnsX9YqhmpFtT85NnPzfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tAVBGMsmfU8F8SnmhRiQ4TNMVWxG1doVHpUuJ9HWBHoZ3rkWGfFP8FZwCZ1ANvknKhKCVTYhKh7GS8oadgfAcYZ",
  "key1": "2yJ4HRmszt3ztaZgtmdS2i3gLeS6iWe34HhBm5Wv9ZX3nNYVHutk9yukd6rXqVXnEyDE73uo3bJJSy9W9eGBBT29",
  "key2": "3yUTwePVdejGUaDKXi9SuA4JLDFTAJY8KfQ5fTHdzQGrEWZqbVGHtrMwBttsPeK3rfUdjS5VPeYu3GfRyYDxdqSm",
  "key3": "2jK6p812pbbhcYvEBb7sDRLeGkMQMNf66SRSuiuXhYWcKLC2okkmnKSdCcWDgVtesEhqwsexg74yWQpDyJPg9cFK",
  "key4": "2BX5QcWDChShaPdKvVESvEsCLsrtPBxqBJDQKhFRLYyZ7euu9gKZMd7C52GZ5EmcmetqSaPMJJmUiLSETKhEkWQy",
  "key5": "5PhD7sb7MDVfMabDaS2rn7Yrtu1XwPtQQc3kN521CEDh1ayjvtz3pnb8VixbJN1UdH1BEaQWEAECkKasfN3EY8mS",
  "key6": "htiiPmKu56fARBUfrzc5UKvPYjuJ1AXccJN8XAaMxWVQUdLrzoZ1Jzio2FP8oREzL79ogTaDusDXKR9rwYcBfDy",
  "key7": "4tfND49JuehC2QWKaiNbTwmGS3oAg4DcgkdJFGjPw2Tiv5SqPFAhPgts3Hnc8a3tDjyrGv7sQhfJhiRGpT9YYnUz",
  "key8": "4u9MTEWbCAQzCxVHSnvjkkNmzCggpcJK9TRDf9cU5aPM26sRxTd7adS8mWv1rrntXxqiKmtxe7WEi2JKULYvkWFJ",
  "key9": "RSUFGYbLdHq6M5qpWmdWpP8os61WtVBtQq4d516jh8QCfhNodwPCMV2LzzgpkBhi8pUAK2QojtdWhZXVcayAhFB",
  "key10": "2g6rx8CYJraLon2PER4BzjPTYLVAunfkds5FCBLffPYUiQ3ww1jhb72DGU4jq5N5G1kPaA4aEmX1N6hrcvCXGvX1",
  "key11": "2mmeTF2JgRL6UeiHjxVvvwqKrKYS6J6xVobhogq9Ppywm5FQW96CazCHnwVnTVRk8VH3sG3P5dtayr9ybAbKsXF4",
  "key12": "fUDmDXH7kqeTNEA9ZS3udLsxaMjRxDx9Wvd7UzxwMzHWdVMkUBDpRddDe9xrtzhHt63ph36i3gQDndmNdCJkUZH",
  "key13": "3xKUWHZLzGrFtR2zHXuYxKDGSDHiqWL7Dw3HxJaYFsn7fpeT49YWuDiw2V39pubX8WzMY16RQKTA3VemcL4A1mp1",
  "key14": "5d6iuY1cZEZfc3ToVTec7RijyxMiUGeZe3AyMXXDaX49hE9RSQ4FHRKh2veJqcSAXVYd9d6kseXEBir8o4we8sMp",
  "key15": "2iKXRcNSHBoALhMLPvRceubBzEAAeJdSU3TXpgXtFUd6rBSfcJThqUkyWDUSUgtDnHKPzgCTmcba4qjtPJvNSbvp",
  "key16": "adkCpHkeRhkqkhrHcp8jGKPCZrvQdD3F6F4D4wXjTH1BAiaediEwtmPfYM6Zi3B3LirX2eGvvDFGYynNzaTRuRD",
  "key17": "3fNkytVhkhs9ihWvoSsh8Tar919n3n4TXQUfrKiK33ggkizh24QmMSWuyfedk2kNpXSQUGaUvJuxyei9n6oHHUXR",
  "key18": "283fp3cgubw7erfrZysdfpjq1gCLEsnF7Ls2GbbVp4gnRWxrYx5kWMNrUtnFzLDGufDTR4Ku2UhFiPq9vGcPnaz7",
  "key19": "Gjoum66pjEL7tfK3f52ZN6iRuJEHQgLJ2gmL18Jxjbjd4gQ6BmzGDUuuo8uxsdEodSkac4DRviZTyEGcQnVdcC9",
  "key20": "G868QTSooRNmSDgZGyW9ekokDz6eS53HvWyJrvWyQHNNjfqpisqRJNnjQznWJWrHkdrWyr1vrUUggM6SQkczMBg",
  "key21": "DpxFyA9MaLo4nAhHRJ6tFZrWf4iZapjU4MnhXkSZhnMTP2Z6Ci1kwtKaJ5pQAkMKa12LcJVWbSFDD28gUFaeNav",
  "key22": "3dzcq9YjubKWLprYsUmdBAgiGt45yp8b9JeS9LAbmSDkg6GSMgEshDVb7zv4dHvbtXCxugHSF2d3QbaWT9BucoZ3",
  "key23": "5uXjokWy2aEx8JaRBJe4UxnTqv1KYRwNYt2k43oWt3LQ5eWvHGZ91cx9PFmH3HD8utscTkrMvpq2AmKz7SuAeDmG",
  "key24": "23rXtZy6YPuebRkfs4of2h16LqcEvu2GBj4W5jiNuZFG8nKvVraM58fcqa4DLQJgQFxnifgPc9d4r9PnQxe1xG5U",
  "key25": "2SgsFFuZS5gxwpV3k7F3dfGNRjzvYaHUbVHwuFnFvQgHCUnKqKrogrUZwvGENSWHvZ94CoztsWwxFYgk6WKtpoma",
  "key26": "4q6qxfp4AmVwfL419JSMDuaQEQV6A62bxcS8jhKFF15fAAcLoVLPQvfcajKcMHUZK9ZUBD8KskLyKbezG2MfKAzW",
  "key27": "5kYt3BpbJBkcZ89eSZMUgDjNFSrf7SecVKigonLn6KEZyJwtp1Q7evEd3ZZM9BhufumBwhWPXnYMsQdxJ3gXkNQP",
  "key28": "2avfEXnZe568DBKmnSHczTseVCHLqwSo5K4zwrVBPAJT3L5pq64AXysCtRh1Lt2yex1f5S2t8HRUMRQEwb6mUmFQ",
  "key29": "3eajBMFJ5B1bELDrNV1TtqQmofWDEaag2QNRN2txwHd6kLa38mQ7QS1EoeJNUHFmeyi7XhPwZ46VqzjXuhH5y8Wo",
  "key30": "2kSnkPdpuTC1BHBYTfa8SCky1QEQ5Pmkfc2BgwCr6pWvN9wW3CCJPP3AkcNNiYGjrMvaQufo4RaY9ieUyT19EAj2",
  "key31": "4QJwHzJadb4VkYDXVS3Pomuow7dHGPPxdU4e8GvMkcL2a53rJTgkTNAjxHXUB4faJN6g1R9EM1LNogoAy9HYNLAA",
  "key32": "22gJkr9BU2fjdsjJ1h5n7XKvHGTBwL8ARMHDafC5VEZhCA6N5Q7ch66Qot2tjCnxA5aH7Ej1SSjapS37Nkp4zcch",
  "key33": "3sQY7cKCc1QGAnxw8kSG5EbnZ6abHMDcoTxzTSMojWzoGUmFzXg8TYueMxa1AFAdRv5o6VAR1FUWoYGKwug5ydKt",
  "key34": "pcfSjybs9sbQA5DP6yaYNFD1jVCNes3AeUnJQQC1eT3ykVeMcyA917UhUMamSGYRBFuyf1qCY9FhbtAZM4S6rH2",
  "key35": "3fqbdoqQuXKtdD3Nhfeze2EYesS8a3Fu1nvVnKfdz4NjTQyKQ8nPjXuXtds5nQogQMcQ3jKvxPrnJ8ya9QvAz48X",
  "key36": "d9iSGzMHsMwCafxzr617PXZBhoePBk7ZhtUhpWhUkjunThDok9LjggSa8hnkwfuDcYfWgwe4nvaS3NwBwvUzuLt",
  "key37": "2rAS8A3hz7xNBomoNcM8kjCTRVyitaMvjKvPkDSwHiEM1AiQeUgqpjeVkJKAYUQLtnBocYRmhsPhVUENM16Sqab3",
  "key38": "3PwnmKNicHMjtUaX8q2dbBXtTss7ia2WjFZrDBB4xyDxVQjs2HBUdAPgcHSWnvpxdz8xaE1UadHtQoJ3PuU9B8W8",
  "key39": "Dqn67Nv8omtgeCgAVeZJEmkg1UwfBoQTdpfCDmrMYZEQu2t2ZVDqgYhRWMGZxuh9S5H8oBnbBY8eKD3XU8n9NzZ"
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
