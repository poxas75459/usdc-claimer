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
    "WuEFb9PN9DLq746wQUFVw3QAkAHVDDaKahbPwyKDEL3pkw3YtUovwVoijKMMeAH74MT54CjDuS8G2a2RjELhff5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jJQknDq7Rg1yhfwXuhjwzMyjrSbGRARFnTBghRBLyTDAqb3SBAATotNsfn2gPAva65cAVQ1yW1Kx3fPzEqr9mxJ",
  "key1": "3QXxCT14VLFwFzrUVin9YxJoFRoFSa1duJqGP2LkTCaYSV2eLw6USxjTyMDs8gfZUKvLVt4eJ8Ab944F4VghzzFe",
  "key2": "4V1nxMhcaKu3h7fFJRacZhfbtgzBLbcEAGG3vcCjo6tTy96WNKo9x3Ctb1FT6M46rXRiVVVBYP19wqTsfEa4vYzj",
  "key3": "5N6f9bdQUpFiETNJ16SYzRZAh2TKxjDV7Nw21UP4bwQE4Q99tDmpLauWmf1W49ekuMnXvfsJGjCfNgR84MhaHQCf",
  "key4": "459jcuY5cT4LVZyBVq1jszcjocvc8RETtxhQKBzgDaAXmHrhQXpqVFhsU8WXS4U9iNXtPCD3ZpCwNBUTxiX2c3By",
  "key5": "4acCZC4yjvoXVqkwmKV85HauKQ1PC4sLNvd8NgvZzEXYyPwtptcWQG38ydWr36XjaiN8yNnq6jrzY8ymreWS6T3e",
  "key6": "34ayZqmAhwkbbYa4cchSwmUjFSyow7wwmemGC9L8EF4wzVnaBPeAShCHh8rZpUvA8jgZpEmaeyPiwbMCBKNNskh5",
  "key7": "5oW1UL6KvUVRfAsP4sznpCnoRqfg85WrHPyY7a7a2YopU9nLvBvCBPGe9LW8dQRJN895wXwBK6vvczJaokPr5Dnd",
  "key8": "3eNAMgk6QSCxP9QcCAWTzx6AYrzZjYcpp6GAhnRUEpRXsVXDwBYkp5YHmHrKFrKEc6EwYwJdt9XFoUFcZ3fDTTC7",
  "key9": "zUKAV34t5pPxMdogBrkAqNF2ThT7DLuiLb5CT94c4cqsz5BErpieFmJqoBAE5nGQ5hFrGzRvGPzzbXqp9vMi7P4",
  "key10": "3PfXgu44ULE5QmicJp9dCFc4RULCML3pzKhc15qBXygAV5Zy66u3B3uDdvms74zooqhV14aEAKgReDdTr2tsEhkh",
  "key11": "azr394huC3xyBNYVixPkGpyxy6vKH6noCFCtGkymfiSHUzRvoB2ZVJ6MZxLJow49RKxjtjTcjz5P77aKqCHfGhJ",
  "key12": "128hKeC5fmdoZ3ALVkckutP2KDumfV1PPy6TPek8ENSNbqLQHQvgkZmdVBW3jVQBpxT3nVVPEEnn5a655ovAALH7",
  "key13": "UEkSF86EaxvZn1tY9Kc6b4gcxBr7miWWG2w1mZYT7vmgcZqPS1GXn8ksrJ3Akq9idNJEJjREzkeeS5EQnsxApa9",
  "key14": "5wBVaLyX5U9XPxtyT7uTf6NHtY8188GhbEAFQGkLSCy8HpqGrYnBJ2jJ1rmrezFgPNvnwvyLyL94pHYmv1CcD831",
  "key15": "3a8aoqeoKCZBi5VtPQcuLKdd5y8nY5LWsE5aPLwSwTgcH9GgJ76NgttALwdbzhGmconfeCtvkEXtRbheUDNJCcZT",
  "key16": "3prJJkwatzYb4gCEJmAM1SXY6WHDYiPjLZ7tKcAPA8ogEmRzrngyzqgBMP2eP8JdW85cxZB9TtMWHv9dwY3h3mQS",
  "key17": "4PoABU3BLdS4TuDuRJLsgWb64Bfx14dnqsAG2sPWVZyLUZsuXHdsPBkSq75umZvazNdYpeb9D2PqZfbCCi4LWfXw",
  "key18": "AmTEd9yCDY3yW6kxR5cKQ663UN3o8YBFzbcTvrQwFsLVYy1D1adiW17winjbug66Fpsinwb1cHjeNDgoVYrXXKg",
  "key19": "3QcSPWaoPmXBq4xscQshFxX5VNna7KvU7Aj7CNqc2cnJcjyL8WVUDoqSqGN6xh47AzrBueziQfndwB7UAzvYBSNj",
  "key20": "3u46Lf3xzs5amA8gcsVZHArqamLPfmHpm5ygAZuwyZ23nKVuPWyAwxT8edkoUC4P7hsm8Kvoqt9iUANDcNhxnNgb",
  "key21": "3KWmwfPTU5Mv1isdtrfqNVvdzF1GxfGycxCZ2soQpUqYWbWDxgFDp4kQAVn9nvrUriEKoAcD5jzKJHGm1JVXSQdt",
  "key22": "2WmwJi8HDJufKVEvNfcdUMAagjCyNaecmGphX5TLtib9UGaruvhnXFFsUirsUYdgC8upaURLKYhaEWULJW335V8j",
  "key23": "3StB468xxSYBEHHUmRa9oY5mkpvu75fdNW789TpBfCv63sPtSjxAH5Ri7oAS8R1MBxfbsHPcJvnCCaZ45S4Keiq9",
  "key24": "3ugphAfisQ6w1an77pxvvB68wxoPNF2QnK1hSt33qT9qiBASNK6UjsNXWckVDg6AkBiTiMHBTr3zXpCCRNQFviJU",
  "key25": "5MhqGJaWWJkT9okyc2KWhmpdso9Baa4bYFMuJ9YS7fQKXdBKHTp72o1wG3YhHULgs9bBPLw3mQES11JT7pmrSgC8",
  "key26": "XaPYLCQeizRD5avFK74ZP44nBrSLRsumuYCywa3aWwivehDKFou8WoYsZAvwfhHNZCgDUxRVUwxZ9nokz4z6sFM",
  "key27": "2JuEyYQuNfbtTVCAyKMXWndRKu1jctUEuPuWD6bZETgkKWmQRXqjkLEZEH7BsNjMnJmsQnYRx4U8F5CR4C82rVix",
  "key28": "3E3uoeEYfymbAn32F5GfAytCvUyedJ7QGdd8cyCnTJj7bA2X34MgZGQCCHdf67WLyZienPp9sNoE4ho76HweLw87",
  "key29": "5yizUSpDJvxpDXxYhAX8SXqPfzPmj9eAQHq7MDvbzvjxrauDavHXaApXbe9KEfTe8tn971nTq2HwRGzESqrnGtGb",
  "key30": "5jetR88ww1pD6J9hXdgLUofrgNoMgYP8V9qxNU2G56TnM2BQA2Vpr7zKEPfVAf21npMn3EQMuLzSiTM1V6PXCnx4",
  "key31": "1tqx3iWPcfkGnL1b8cz7BLtL4isPR6njErwCYt5YrWU45xJjhzXceoQh1snarjoDwLnZZw78uNpr33Jx4oFbaYx",
  "key32": "61AyLWmQ3bgTFY4G6ippkwg8FG9spRLBUvYW95tdxUeDpegdacm3UkMG4yrvwx7M6atQNGzQi3got9nZ5HDnmNub",
  "key33": "2KTrYGjE3ByEVyKVpmhXg1PAEE5kew7fmvtzbAk8LtjbZcJKo5vvXQ4vkDvy86mNqkzbgXyPT7ZZD47toXx3ppo3",
  "key34": "BZS4fYLs9wyr8K9S3CKVxJC751J8TvW62jx25fUEjs672qLnMCgnFFoyw9NFHHLYfSeEKZJyBJPfGSpLCYGaNDr",
  "key35": "45HBmvKsQnAyT7brNbxdG78NnzjSNEyiqbydsfo2hnXbKPCczKWjfP9ZT9EkSM4WdKYFLaioHWCCm35NAEYrK4xs",
  "key36": "4gj3kr8CqQEE4V1KMbhenJ11SiqRoGnAtSdT9t434PRWvD9QGnEMw5ui78GnuFnWx6wM9ZNFgS35hF3BsC47S6GS",
  "key37": "2P9VFmHPHmKeD5wG99rpJbLZPJT8q86Jx3NE45YbzoVAw3JTKhY7eXKNBZg3Ajv53azsNtLNpWCmdWaL2AX9Yesv",
  "key38": "3PUr8NFp2YPDTUgmLz24A3caDa8DHetLGTVdXsKTaX7JLmNB2pC3qWGqk65xKJox5M8ZYruf5KP8m6zeKRPCbRN3",
  "key39": "42LjdvDdTmmP3T1V43cTPc5tnkQfNY5ozhjrffLvFMkocAhAnsyLmBLUB8Qyv9Q1i1rkif7gnu8xSeFwRPWD21eo",
  "key40": "ZhHgW3ocziWD7rjMNTSgVUQiB38XSAdS3Zv7oWi4kNfeyM8Tp81K9JbmpeQuFkNDwGD6mLaBUA5opHpMvwfWSGu",
  "key41": "59muWDFid633ujiEidyDFxXvj13idFna7LfmAjBpnctUUxwW6cgL7F6gmY7sf4qg7xdVytaauebYp5JKqmNBn1xb",
  "key42": "2nHBGLtTJ1X5r8Lr3L57v4LLTPGQCExLdTpeys8JEbzgfYAD998mWqAL8WFXd45veqTdLBTQaD6VVDcmixD8y5sp",
  "key43": "2GD9rngvnUoyKB7YfrTwhgDnJRi1R4bswdB5quZt6m24eUwHsPdA8o4RjhqxNVJcySSuJbaKJd5jv5zhZtB2u4NG",
  "key44": "3uHYTaKfqGBi8bP2fJBdLoHhKVu5FEB8eJVhTRiEnoidFxSaTD84u85SmZj7spkjKsWhHN73RParymJmSw7i55dG",
  "key45": "4tomAGJ71cf3RMsW59Fs62CzNHGHuBTb86mwwy6S75Ao5Dpv7cminoJ44yiyL3pCo9DpR5EnV8T46foxmX55YCRD",
  "key46": "51RkXzHepsXJtEPAXTcj6yzUbfNFMCimLPs4XpkTzMd7Logb8PpzhvSjEphtfUoPAfVWg5BnCCmFq2jHiNdS4zMA",
  "key47": "545WawjdrBUfxawZTrPtC6WjXwe34W7A7gbhhtCF2kRHp1sU9MTduhtqtHCGd894TukpNSQALxBtkUtahi2xQGfw",
  "key48": "54cM2YJkt8kjFJRX6cXwLYzha5UGzSM7efPSWEvURv1QTvcsLNZpxG2XiRDrDN7mPmzLk99j28feLLNAsrTVycd9"
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
