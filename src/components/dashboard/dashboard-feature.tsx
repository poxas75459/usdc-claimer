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
    "BnQwJSWVpjHi4oSWw9yBUog59w2PjuY84X57xkjxxwCvxWtKMvQggX9WMfGkdoAicCKsFeSGJ7sqoCD2HcxRwGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cUE85UfHBZdMt6RiqkbHE99HuFNwygo7ZYcH7SzSWnGJZZ1NKwwayeYBfqn86J4RN2dKvheAGwxYQkXg8Cj1Z6g",
  "key1": "4mEfat4pEUczsq3RTNmq5ZHEbT7eAFsSwJuSYbnctzhc7jDopRTrYhgnEBUnjv2UH42CuYzwsP8KRF5AMKeSfrfb",
  "key2": "4f4Q48Dqv7x2AjM9VAXcBWxwaCKKaTEtKPbGfNgsr5wo4Zfha67Ye5why3L2LpnmRo1yY1aWtxjR1dbSyhjyxCxA",
  "key3": "45MzFpZahDnXQyYaPiLwCMc2faaTxcXffnsnry3pakfArwvRgiM4vBVy9aQXVH3KrQCX946t5gTvhEHXNvfn4xQo",
  "key4": "asWVfovWHT9fTnXHq2pPvuEQ87VbDJwuuMRsa7ixwmwem6Wvkix1GtuH5wdhoej5KwkS6yBZFM2TXwzJZCR9s8W",
  "key5": "ga98ffLRRgJN4onMSoQv8KVxW7Nph94f4VqkMtCei1rrzYBPc1KjfTkP2enaPvWnf9zj4M5eFGJDdEJwXNTnRfk",
  "key6": "8btTWhFLTefj72wf6D67kaUamikwVnKHpBuojeU8bSf5k5LquixFidByxQ6mVTujQtQsZoihetvp8b2EwZYETXU",
  "key7": "5nyYqdirdVXK2fUQpc9poQHkar6a7zWJFRBGez3Mk3bjZnceG6g74irJXfiSyUJ6tVycCRsKp28FL7Tg7oBbwmdn",
  "key8": "4Px84nHiwS5VuGTVUdYy3L5tgbkcdfvL5WQ53Rxm2ftbZNsPQEHcrp24PbsP1uFZa4h1y15RRarxgcfotBrNwJn1",
  "key9": "PX8AxDNBCikPwbxedK1cjWPjenBhxAWi4cM5X3XmTpBNauUX3FG6SUrWhfwsTfFfPWERvYUhLt1dMCA1mBzVqZp",
  "key10": "2jYkJfNW5jJojbWkR6cP3SpxKKZTfqq8Q3PJCvKfQCWXFBNiwDuNHUr1GVZ8YPZU7HKX2NhsLhceQ2DnN1REGQzC",
  "key11": "4WBxRgbA9FkaZRcHu9NgqPaciAUmynwSvgmvTye2tehd9yKVDMqNFP8zaRCmsEfQNCzUEjowBEU1edJoMA2uHgML",
  "key12": "4iKFQcYAzMFNhmmE8ZneYLB7ZfLBhisESr3QWrc9CUEZUjwrzmatmNL52mupKTqRFphPsvfzNp58cPvQUiXCJm5c",
  "key13": "3gVoLejWP1uzMwcYtG2UzmeXtZyT6hUeRpHKpocdhHnH6jwARKT9gP2vUy3LSyv2FuGu68njLKCcqid19SJyhDWH",
  "key14": "2iWCKcc421YqhqLdqQBv7ZTvk7g8MNEJb3fgRu56rUBtoq1omn7trgEd8QRQNtviUuGoDPUEanyUHE5ZNQeCdgdn",
  "key15": "3mGj3CJ1EfQ9PyCp191hkjmgBebS1QcwopE4nnEBpmWp6u4yNtWWnc5LkPWLiXXCT5BwR5zsb3N6wDCkv8WgJw9f",
  "key16": "heNYvyYcWC7aS9vXkkcLDxJdCGhxgRFC4CtKXCjdddBF9rFDWnbxWDV6YJErNJfJkCRkb8DTZpVSweviKEMSsvv",
  "key17": "22wS54uJDWbhkdoxXajbmW81LZzh37BuPfDJY33yoG9kbaqXtjXe1CshVfRTiYrgPGu6CR4f8kFwtqEeP6PSRx7W",
  "key18": "37gRiT2HNoaGCDNg4dXMLAvrrTD5ekhF9K1pfVhiwDMk29eVVN2yo3ernEevfMXWeZpMzpko5TYnhpxjSqFfYYvQ",
  "key19": "35YaWAqeYiM58yQNrXxVJYW2addFXMxNF5G4aT1ZvHY548b8iSYQkgcGDLJc2MQXUsm3rbMb3oqPzD3MoVSHaxvK",
  "key20": "7kwFj8SHp18Pjw1r4gJtPusxWCxhAkpMEtMkiECdeb3sSjX5syTiuqkfsv1WJL92hAaoZjmvCDzXZx9SRnNetbw",
  "key21": "3dosjwXciH83979agdjvhXaSFDKHRZRHm6ngZhye1i8sXMUjofB6L6BqzVt5F2dSHMoShW3AzioZjdhVT5VUnYm8",
  "key22": "3TwFSm8uNtREC3r8XC9gzijHy6Lh6VzaPu7RBurjra5PKtu3AMgjPhL8PPVKt5f8z1bbhku7cPUjkFikQNV4VDVU",
  "key23": "4JS2Jhwi1fcgbbFoCtjFVHCJpf2YfrsKCNUgtUdcp5iRbQYJdmtshGMNH9ZdeiWZj2tCGzUjpu5HUGUL5YjPBgr9",
  "key24": "27RNAJX7QoZjVBeZe1RemMd24b8KTtUkpyzii5uRmeZiTVMQrYXfffcyN3q2fZ4tsz2UV7rLZustVYGTgxufpww2",
  "key25": "5JaLRnEwM3w8KbLTAWfAoq6Qag5zbTuBiAsjhmWtiGpj927Et9eAxTtUba85oh8hjrev1mRBE4WV6JTTyDZdom27",
  "key26": "4wEV2gVaRAHmPh2HWhnLHMYQtvx2o9sZbHSnnCE3Y43StfJi2RxyRXA5ZumLj1SNrfmA3TotDCYZvnByFRBk5dnH",
  "key27": "4YcgzRCfUoJGDgnLahWQeNrVhvpNt9SzweHLMbD3gwfvmS2pnHk5rpy3bFsombrpAxLC4XPRKiJH8co8fWZFcmKc",
  "key28": "4GfRyUJkXrDy6AmcUrBJkGWNuPV9XqUpTiS8feV6XQK8RsjFSo9awGXihdFg6BtxhXx1JpRD97P7wdAXwTxB4Lu6",
  "key29": "57St4ASLzgDU5g6FsFu7rJJaw43zPfWiXPdXeD2qaEVaR45M87kStQU5EYkrGEsi8HyUptMSPVsdXYuX8bbArL6M",
  "key30": "3uoG9E3Qk2DU51LTXbFKJo4YJaZrxbfyKLuRe24h7aKDXs4rcSpCr7kWKduyxrYp82YtKAVDyMLaGeNtM3ZpmChG",
  "key31": "3zz1RibfxjxHci25dyj4WM7ohq3oR38gBszZLpg34VGrfg8UNBwhLp1eCdjy54rfsKtf9XfV3tcC2dW8euVa2zYR",
  "key32": "3frCzY8SQat9LnWuQ2QvKKBJ7N3q7B5wXppjv9UeqkBanA45kzwNSjqcmJezevF6ba4oKZcTp1Mq29iaC1eiw1be",
  "key33": "4WY4jVukr4CuFe45vBYuWJSNaeAnpt6ba2yPXv3eVLFGcQHoJieoFbvLZMsBFwnuJgkwewVtUmUngfF6csr5QbBB",
  "key34": "32dHWuDQRSPB56d9rd4LiJRLsD7GhgdDoxd8TR7YKMtTmHAK6zPdmEpoe2NQsaQMzpL5p5KV52geskdGfVRU4Wvz",
  "key35": "5X12izvy3weUrkJTUUemy2p4i4QMxcCihGryewN7yGQXtbmMJVTNrZdhqqxXwsxZACbrcrxRgioeFcdSTY7duiAf",
  "key36": "2wSCicpGaJERwjYCGKcbRBhF9re1TEpMoUZ8KkFuBQSAq2nkBDwXrv1SvA4pW98CJgaQGK7ugrFQq34526EUBKEA",
  "key37": "2KP51c4DjUaG8pdrr5uTkqF6VhnsK7VuhUpMxpABhob3mmwEmLeJbkSXgW7YXGi4L1MtAiKDaVynLmeQXygqsRRS",
  "key38": "4xARbjfoetQMndQ9EGHxABkGHG5CkPyRpTMyGAi2R6vwLi23LmoNBqgoejDMNknkpjZZVHDdjjuMyrkY3J9ymx1A",
  "key39": "5x7EQfYDGkoGPXXdVJbBEQXccuhPn6Q91HofxNEp11zU4JtaMcXbNMDnyyzPb222S1cnc2r5sTifX9x9JDKdk7zv",
  "key40": "2iNHLxYECCYBz9cp7JSiQmNKRetbbzhUwBvESF6TtH5gEG6ctUkbjxY74mtWduoJWUCeNqVdv2NphSwSNiHwjoNE",
  "key41": "3Dys3oP3GrvAuygHJqQoRRW18kRveQ1T4fvHtxnCM7H2Z3xhL2L4t5jXTbWVErwZieQSaishBfRvbQC7pRGyEdg2",
  "key42": "4xCShtDsMGHD6v1XBPhXNvfHg8Go64sePYXmMLaydvxFCVMGPaZg9EEoRkwKP3nLMMNtj6VKumqWseSUBdXSzMYr",
  "key43": "5zDFryFoXcsdde3pnKX2PGmoXkFRPVkizoXHUM4ABTwzenGxBsvxpBcqjcbBcNUmAj4SoGjb2GMbMvn15kXnUnSz",
  "key44": "5UubPNgUXPNj4NA1U11umMmZY51PVHDAh9pTenCBLhrFw6nzq5LEzPZ7bAjnpyxCh2aeGCxupmfrp2RKaEjqgPb8",
  "key45": "hrSZ9iW4ZB8MtXAiQjwjQxTwa5Pwuyq8FWxV1EodZz9dHxXiLUa1qqPkVnvSFaPb5BYeFuq5kAUV1h48XKj7NuG",
  "key46": "3X6TUgUJToQ6RCBzSUSeifX8jd8yZJGk6WCNK33JDoN2bMc6DdBA9vF2wXBtCd2REYf4bzpLwbCso5o47RE3uwmX"
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
