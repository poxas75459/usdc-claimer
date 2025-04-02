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
    "47JB9uT8q9hJ3HhJvsPx2NuENpQZ5EzBoUiPPR3Fk4sV8L1KcXAaf8RaZZrkKveb2R3Fv1gU5BPwrB7EcFDMs2pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vNGuA561mqs29W1uNNQynfLFMBeLLkTYKwxX4r6brqammipVRff6Vxv5nqHQj2Xe5LaBt7FLdep5vJxgYRTW3sx",
  "key1": "3A1FaRw4776CG5p4Mm7okEkq52jEwb9Xt1ALAqPiLnHf4aWkLQBi1n2ZHegKNNBYjhhdtBLr4jd7zPAoQj4DhQfw",
  "key2": "GgVKHPVteZULe9xb2obLaK7Tr6Rw9a2LdYWmXweo6Fxw4fnJ9dLM7SRzZF8MReuuzWckbFDm1bjtMWtZtHcQ7wz",
  "key3": "51W9vF9Uv52dgeDn1rw8N5qWQRewebuhW2j4rHD8k9mkNzzpHnMV1cdqHLEEXRSxWChmbyReYaeH5uU2K1S1VHQG",
  "key4": "27oFg2oEvSqkg2yFDxN4BbWhjxvSArJcQc4Yxxktkqbbo1i1z2xN5biYFT4rNMSKGUW9j7MXBCJTfimz8cUXGCnh",
  "key5": "9pHp1KLGr6NVVkeftMX2oBu2kpdvSWTFxPG74nXUz2vAT4dNiWieyf9gDEPdJh19BNXW7mWWqsmPQsQnooYb5Lw",
  "key6": "5wbRhWqi2WpqTHFyqAJ31TBmbreZtvy7bVwbhuP5QT8wCtbYaRKkUCZ3w3U3oJS6brLUfUS74hQuSdEARZHj79nG",
  "key7": "5WmqSMx9YfbPPTuBtU7bppw6G5GjtHurbXSPWkCmz8gCDAKGdoN55x9YN9chP9v1QHd1FfKwzbJCGHz67W13CQDF",
  "key8": "2prK23Wz6wnWUnkaGV9idC2NcNfD3oCevzQxYcwkDaEsxwFvS3n73EjRf6S24LT9DqNo7qBYY1QgrMZKYo2urkbe",
  "key9": "4u9Q8Qbc4ZSLGpfzryxr9Xihq6tq8uWsh6uvMoJMcU9cywjygd4zXoyUrhMvrySZPtKruuU1cumsGQ2rW5Zia7jj",
  "key10": "2xEr2p8rrdMNC4XExyXUhtZzKbQJGRBSdMFuPRDfDKPsxxhk4EgmtypaJpZrreVQ9kB5DUuX7voZrvr4DKEQM2to",
  "key11": "5XEDbEr3TWGL2rYnC7pbyMPQ8bf2QdvdGx2piXGsRQ5XT6RxfPAswghCHs25q2fzcvLw2SkrV168qnUfMwWCq5ak",
  "key12": "TZdHJBJymd2nx1PmXDaQpcfQBpvZ8QC7W3wp8Cv9Ky2yU492zZoBUCLYPjgmj9Y5A1hByLaHYTv5ZBJ3SPvgmUh",
  "key13": "3rQ4zS2GpPAYFjABv5QSRrAPUb57ZF8n7Gr6Mga292tRAV7AqReL6Ysr4NVgqUMAwGn8fENhjT2atxis4erza9op",
  "key14": "2rWKtzNw9k4D7ZALE4rHidVCL4WjW929wGY7A627HMBCHNgYeJZvUwABtZG2ZBqfhEZwrGNaYywqNZ2m7edFtyns",
  "key15": "2sRYd8NFHHHj7ihdPpyAG4gYdULBCZzRcZK4FJtmD2ANxWUsAi89TEi4iTYdvEaKiZuEss7mMmtTSBhTaswg9TGu",
  "key16": "5mBApFgiJy9TrB6MK19zk13zE3DxkrNpjr17uG2bRNDPbkguziWdKsUgY2PcBdtvM8Fg5ogUkSQJptih4fWHr7ph",
  "key17": "2vgevzQRLaDf8M8nyE2AFMUJvs7rLttRfAQ1sBBfS6mQkkKErN3h22bwQsJdFh8wNqSnyNpBigArbobHgHe3wtKo",
  "key18": "3STW4LbZbQVSHu1GfGKs2RdHc9dhjmAuUtyGxumo8wJ1U9KW2agw2dPkAHJejNtnMA9s43hajcTjD9HAnvtL8FYZ",
  "key19": "3HiGCx1siakEy2XqqXgcE3ucFJXs84mmnJUnKGbnWNivbubMkqXnQe2sykJ63huApfhimEcKWpXWDJjPAvdwiFYi",
  "key20": "5nKjqddjGEK9JwuyCFiuAfjq8YQVBceo3irBtSKJ4vKD3KhS32Bnpq7C7fV1CDPhMjvEjoHcFseHonxwemL1epXx",
  "key21": "234y3yjSJaaWFLVfTSGi9pugqDCJGQ5s1qMxRvQ3JkAXAfGrG9BYMNP3D7NF3RE9fn3qxkAhKGj9ZsfY76uLkVjx",
  "key22": "57WAvwdsG1LVEEXhfu9FBmXUcS9iz86erdvzLd9w3kMphntWPrW3Mb4rBs9aLBNxzKKxiXhrnFpjhM2FR3Ra4d3K",
  "key23": "558qCqkKGbaM41q83LzYxnHiQsLXPiukNiJUYnEujhg5wozLNawVv2r9tbomd1zGFYKdN114UorJMkTB5pjTZVV5",
  "key24": "W4j1Cakrye7Z9DQgVz11WYNPsKLKWXFMSqBvNLS5wjMHLcN6et2CbjDJqu6tY1kBTaSYzqw4r6VTZ7pwg26YLgx",
  "key25": "mKCUSgxrJTvjLys2eQCx6K3nTuF9gRLd2YQaGx3H99gtB8dFBADCsieGdpRWiypsNwMoLsc1No93jLzFik7wfBX",
  "key26": "4F9YW9XpB9EZPWTcpVi3qu9h5NCQoxdBoXvnPkppSaokmHSshdjrbXycysHb5E8a1BfMsrXEtwRrKnHysNjC2g4C",
  "key27": "2mARjCEyUyK1CUZamXYzur85QjdrC7tNReqCaLHLi8vZPt3FHVUAWZP6g28k6enSS7yXAuzx3NzUKMt7iAETVGFC",
  "key28": "e161fpFCvBvhcUBKwDyZtuK4PXoSBeBhNbnGCev2KYk1PNxMCshbEbHCP4dk8ixKGnDgnphFG7AU9HJwM2nu94T",
  "key29": "KfPb6yjJPnuHqkxx3DY9ChBbLYLnby8DuBgSMcj4zdUsbruGNPMmhRjdSJv6wnPNdxDWb24VVno1GpCoxPopJ3r",
  "key30": "5i5dV8xT2ahpGKv6tjocVz8n1XLKGLXEWHfKKo4816jSTtsd2KdByDoxs5ZmWPDyDZDDuA4F9DkQxaP9uwSrDGZW",
  "key31": "q4vAiCh3C3x3HTKVAyvcDApiv7AAuNT8QTYkqw211PP5G1gbG1yKgdXyVLRM3FJcfRiddL2JpmnyaAUvHSDy6XF",
  "key32": "5yjgeHkFGUGuXSqhu66YaZwswzDwx8AaxDss6pZQ8am1bA8RbhJ58jWfhku5W8qPSpvhvdZ4L6Va2xiwh5rqW1vE",
  "key33": "28inR7bLhAPDD7aHfxyfKgbnn2R6zbPD8B6TwDMqbmZmHVBsovGmrjcxFQgx5vQxfj6FdfCjpziVVYdDQhK2CAUr",
  "key34": "4q9fF9s2mBqaLAbdnYhh8fqo2JDAvSgdQadvSFETjHANgvfVzZJmbV96xzvgHyUyb9hpDeWZYgi9j9TUZfqny9gS",
  "key35": "5o5bDSERbEt3sCSeiPcDitVj5ibFUDdK6cBqFtFoaUyjv4qiCtTZaRaRmBGajruej2uiidPYrrTyoa5athnW4rf3",
  "key36": "31ViqUgzCKShrA8WrwzbWGSysceXbXFWGho32Mn66qh8Lay32oHosRhwb2ho887Pm6LGkoCHh1tGBGSkEgxRebn",
  "key37": "1W6irXp41FHvjQ34UdRNzWX5F3wQfTRCGrrLVRm9rMkvYY5zDWkoPSfWrn4AtPdwaBa6bXr55gVJ97P2aqZZew4",
  "key38": "2gbXmHsdenCMXXUykYeoDyLUhWaFAuHQyNKUuHTxASKBTJj6qoVGYeJTxmtFyXtQUvcWy82s5SHvp9VeBJUJQDES",
  "key39": "376kDCnTzaKgH3NjfBX2K3yNfQEf7j1WW1form6gEBT94mG99ib5R2P3W71gVi4BjVQFM1Cu6LHfA8kg7EEj7Mm4",
  "key40": "28Y2QKw3tVq1hNSkAQan99Lfft35hLxmwygmUkRd1uoeWadziMygrt7ZhgvdWy9sEUnX8P6DKYRbUxWSNwL4ciKo",
  "key41": "5DTKApuaXK99FGmGHoqDJgHimRLsn6gkXvWUg7P1aMApqmZsJFKP8dKZr9fjewRpoC1g2Eruui58anVCJeiKjfpm",
  "key42": "7EpDTVAqFJFBzAPmCzB2R4YC62gFnpA7uS9KfPxSWxSoTg1tLkeQxwMoPcVHnWr85dHN1jcZfv4h34uXpeMGXPj",
  "key43": "38LV6RZWdjR6Rxtqu7jMXK2SHU3v5GNPjx5tgiDHa6kjnTDDx2qx8r1sUsuCg2jMWmY9B2QbHhBRCXWVBcNtD86z",
  "key44": "5gkPCmQo4TAb6j6XsxjgqLxWv9PB2wB5FRrFbMRftjHALVcJiKMMhQjLkEHU9ZAchK98xuhyEnPpjH9C6QEVb5cK",
  "key45": "2e7mnjyBubXVAEY3fiEkRds11fCht36JeA7j5rJAV4ze3sNPneQktU2Fb1io4VFmK9vt2hVQ5zyKWmtukEQV54nQ",
  "key46": "5PaDQDwQ9wqGcBSojbm1twF6g27NzqfGtjWPJ74KtMqLEHQgbBKm8W3UqnejeQNNRK326ST8mNQPyg3sNvhbsyyQ"
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
