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
    "wACPfpXsudbFWiRhuz1yryutEzq9JP7fiE99v6h3nutC5aoCperp8TgZrZLJVcdK3zFBHs9EASxB4j1PbnYzu33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46LXuw36LtoycxdSkjkAe3XJPnzifYcXL2wHiUb71XsnNmURhP3DZa6JF5Ffze6TQJqGJK246gmi1mW8exPexk73",
  "key1": "1jnAs2967sRZqg284HD4vccWxmo5mPtHwrgBajWGcd49fZ1YfW6ZMLspW2gTyEnYTTwQZEuyUK9ux59y7mrtNx4",
  "key2": "2dELFxUE2zvWiHAVsiat6YPX32KjFfkkxnhC9f88B3CGfbmCWtesmsexw6Nwx5mh6RnAQE3PqZXe3ncDb3nAZgE",
  "key3": "4FGmaSAYsAXXmg6DyinufCcCHwWUUv2JhfpV48MvowevWBit5i7ESmymYLmABh8ibQem136fpfZSm29qLqGAicjB",
  "key4": "52ufYJyMNpD29tY4MDPDBjMynbpA8EHMhemwNDBn9A3Dc1vF6LfTviqscUDpgki32H1EuA6CwjzoZpNoKwaz9XMY",
  "key5": "3LyiQP4ewSh4RiS14TjWEByjnYqDCAKs6CZ1fm8VcEVMuNbfxz5L8UMF7r14aKfm5YG75sYXtzcb8R6x54w9qx3P",
  "key6": "UycLimKobnf37TwQjS7GqYwrjZDFYUDwuqjXupg1g588XC5z3CgW2WsNZX7i3uG1EfmWjE1N7dK49nop2xR4QMA",
  "key7": "3PLuFhnBbrq4CzFAvdj7xgN5ag2tkmpvhUiq3W6cbcbVUT4JuetFtvGKGnEw8qsLCUVeoSBjHZqN3Kj1ToyFepRM",
  "key8": "ZMXHDJXtBBc7ZHQSouBaLZGbu9CyjXar9LxcWVB6GXQVrGyM7sHLKRFhUTSBhnTnvgp7xFgKZNGeRyaE9J3wncV",
  "key9": "35sQpqs8f43d2aTnLp2cW17RgSJjUTbMZVy4JhJ3SpVXHYsQo2YpwKca4nvGCnxdsxNoyYyrThm6SRhtB23Dj8ay",
  "key10": "3kkxkAMCuF9G6eEMgysGrxNz5LggB4dHuCnRWaebVx98DyjJH8n4im4QcP5jhRCkkp9MtevWz5sxxwYg58KR23qS",
  "key11": "5jv5FuCu7SqtU9eZVWFueVCEGzCWbP8N2XvFozVN5S7r5DaK5XMJi1jDpex5EKV1XdpgF9Ua4CNstW87Foqn2VoL",
  "key12": "5qdaVL5nHNnrLRzYD7VFxuob29zfvCwthQCELDitPW8AopDonYFwhfTEoTp5u2inpvFfpWm6uFwvH6pCqQcFvbGi",
  "key13": "5iyMeXSkzL2hMVkumDV77waWnhdXQK5pAqx71seRvJZExm4WZSSL6eVy7KsN9YRGAKSAkvRYLbM72F6xDH14UUxb",
  "key14": "4HrvzGLMjYTQxiMhwby7Uc3J3fLSFLnvTaas4zMFmMQNJqaXTWoknzvYi6HvRGQjzQyShhQsvErHmXdcyS1hhzzE",
  "key15": "5FMphJDAhCmMxt7v8BWoSbqP5HWeCcmfaovih7CJBSxzfXGs8WeLrdR8GvYsSJpt26Woi1gCqsw97rYYMUhGqCL",
  "key16": "p2WVx9UMWoijCgtZQXhXoe2UvyUpRN2NSxsBAeUNrFNSRkcXzuW5hsPsurAgvdHzsqBSk1dXXUnwFiwr63M3Nu2",
  "key17": "3EvgYU3L3Rcht6qfzqL1XEuNSKE1dCMKmLp334jpesTxJXfDvorD7onHobFDD7jZMWCaMy4MdK8dPWRNxiY9KFEr",
  "key18": "3VYR3BbGTYR8K1w99Rh9tGUmFA4ncS26KLoRfLriDdHq9ACVBUER1k7isqtjJ8WTobBYnstqKSxooAb3MmSwkjQ4",
  "key19": "4VnoUVp75S5CuoHNTc97iwmcWTkb4C1eqexhSTtAi5M9sUUvxNggJeGx8aShYvvekBFjiUx3vbXUTRZ5gDNtQCKG",
  "key20": "4efdpqpsEd296NHfct6ajrgFJe55qnsEYxNGsAznwoNPWk3KusKNhqAszNtm1LnXhLcTXobUDaMuk31KmVURfn2M",
  "key21": "5Mv1ZYbVx5idsiLHSaUN2YTDZe1YY8v4pbiEd1n5THjmcX9BpWpx6s3NwUi2jbLHJ5kDBNjqg6zSNxDySpQFsN7s",
  "key22": "4pzrM7a6AN7FvhFm7KxDPQqkvndPQ1Spw9p1hxpyuUtRF1TsY6xLprRjcRM8ZwMDJ8JTUNA9iPwacTcSBZaYeX1Q",
  "key23": "3z8YdYQEqyCMw1mNk3idZhMVyCwkdoNDjet8Rw4fdT8N8g1P8KkEaPUacspVZgsBa3YjPzkawptX2L3gA3CG1T88",
  "key24": "5hL9Psp7md6uXAaa7UpJ2mQ2tkPvjSCKwRzx6KDq7VHggHPKt41GPrb48hnyGkvp3N29ipKxRSMrg7wLf67BzSWo",
  "key25": "22pdeFe2xxNxBqANfaXxE1JNo3AQCiu5qu5DXWUaQeMAwgNmLqAK8VyCLNVtLwfkrPeC4UhvskUfFDNygYEirYt5",
  "key26": "2GPzGS9NXA9EGAGymBZ34jTFVkQzgLN2dgLCKXFzviNGGNfhyu3ffTpo6CCxtJuhv3DanpHbBP42ian1J8vmxCvt",
  "key27": "2nqiKzXeGZT944HhUMX5iKK5Xcfj7H9wWKhJKEa5KNFucX8XRfHbYF67Exw4h74BDsC1GQreH3ejTVmEC7RoZtgY",
  "key28": "4opSbeCCjDpeCzxB113aq2i9U43VhkrNgFnJhtn3j1qTuvmKpdLyrhY2GegswwkdfNpXgMMFRM2N7j77gzZGpezG",
  "key29": "54CdT5hYGB88RygHAXyTAbjfzcqoc1aN3ccUQUDwwmpk9hqP5RVmWrqjeXp5GTe6zw234zbF4vBkAy31aXY21pb5",
  "key30": "2MMHGVsEoPzxx4u54SaqFCY2BGXeJsr5U7vxTwwjFHLzYzZ6AuFehd5QvcoyQrAtAY2SqJvdwxsztHtYGfhX5Sg9",
  "key31": "zyRXqnamLp6s8xeRcmnPqtXHX3zHVGUnruLF9KWSvRWsS9LhCMYUiQ24kFFQrqPBEVS3mVF24RyYnBCbnVCCPNe",
  "key32": "vdtqC4k1gimvjMy8ZzgsTNwj9Y2smFeKKBeZm2fWMf8RMkh48pWqBZjM5gGpw9nW5p1GGmzx6XHptSsmZWQPiTF",
  "key33": "2vyYT63w7TdsCx8KAh1BuLSngeLkRWLYVyQZ2ubYQS5yRcjLigbhKeGvNwVN4zCUu4NTrADHmwoijZDbgASLSJud",
  "key34": "5xdf1AQkRhEFchqeFSvLJfMp1iBrBXPA6D8qXZmSLGeJpmtYqjwArbWKfmnfJaYnC5YQoLarDhftoEQEvCc8t9uy",
  "key35": "4JsU5jWQ9x2pTHHK2o9pN5SXi2uF4rD1bC9JFyijqP6iMUakTY7qKLQ4HeZrcu7sukwmkzpqRQiqTQfD8e5uLLmi",
  "key36": "c3AHaZtXV6YFiSPBDabsoukNf8vfT5NECvAJN1FBoRZhPL8KzbU69A7RTzKooJkBowcoyYVSTGMVKKw8icxXjiQ",
  "key37": "5N7BoBvwPxGehJNqhUviC6g9KfpMKTHtY1WRjfoB15YmK2xwVMLLTkrKQCuMPJWFDQF5SFSdtyBDCs8KFcPCZWWz",
  "key38": "43x4aAzc27hyhFHLuUEbbM6eMkfR4UPZkyV3QJD6Ux2zbwmJxPRvFYWcdCQpLy5o8LLVXF3nhzfdMveosih9bqWP",
  "key39": "23Qp4wDnzQYbhE8X2CbZwpmqCj2nFfBuZcHa9NvePEoaXwKtwjkU44amUCFA7CsAZyzdkHBJ3qbqCtd8y7vHBK3r"
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
