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
    "4mLmbtXeo1xNrSdmAYU5gxfL3SYcJ5TJqGDuud5RSUxvcjzbNs4rFPqFUZrrey3Vh5qnbBTfDM34FuhWNjsD2yvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44SCsbrvvf5viBMUqSExKedjZ1DAC9i8GPaz2xnwz1zXPTfy1xFUcnnqekRf2RV9XV1ZvUPQyV3wfQiurUsjqrzG",
  "key1": "4wPG8ERzMLF4J3kYxeZki4JtTJYyiQPbGCVANrJbK1m9u7bS5nXqXy2tq7nVwcAehHf6iAMymHCemNQwkHvkzhwb",
  "key2": "5RFU6hRsYZU7NSbkGsonKD5yDzk4zS3GAunbjFRi5K7pjJmAgiyY7URzRxku89UEM5L9ommzmopTx8v7A6zmRstT",
  "key3": "4hAusbUcXvKp5w5DwZg63ezkgwg4NHKTiWTS8swELv9rxhwAAL1Hrbo4KAdTRpeKxNwP6kfBh1sQPU8W2Cf2Vn4i",
  "key4": "52R7mzBL2HXuey8gMSwXWd4mKqpKewBfM1m812wwvVKdsswiyBam28A9QphobribmZPbmGEuzvsq5yjojAkKazZF",
  "key5": "3iXJ1hbFZNoPZbCz9iYJHQvYvFSWrZiiqBpKA3zZU2FjiMaqdH8xZi17qw7obifmK2TBTK1MsKmQm9bErqp4v4sR",
  "key6": "3L1m633tnkR2CUGthA4oDHsqTmriQom7JYDaxYHHgQ5CL75p2fU4Yt6KKrGgQB4oTKHWphDnebsp8gW8ze738SSo",
  "key7": "3E2MxTJ23XniDVsJ52EQVqr18F8EWqrtcv2bhZheQngxgs5fPfmQjGogs1ugPyJbjt9AabdRSiHrnbx5mCpEQt3J",
  "key8": "4SGJt3TqVQ5tnMfwb2RKMYjH6yqN9rudzHpgCy3aagUrhtzrSF1jiuWPxZ4dAvZcVZyiCG7btxDAzzWctDwBptwv",
  "key9": "z9YP6iAWwStUCEBcXbLhVuzi1sKUzLik6VguFcK3Wf4s2vumL6PZKTRSno8wp5QnEJzm9AQMTR2WZ6v7jw3Jprv",
  "key10": "5EXeDyWCCR6RfN4NjoNbkAbvu3LAav7ihWVzRL9XaTcnYaJevAonDsh82boZQVRt1dwscf3d96RqCkoBdc4qCqwn",
  "key11": "VS4eyvNVZJEm9UJf1wKfGLEywdNLRZDSrVp9aBGEoKRegQ59pM4Y2DZJSj5kKcrrBu6ySAtsitA8QUEKvwTAGLD",
  "key12": "3CbY7TDgm3L6trZNrAC5eDmbkE4maSP9jnnAwKVeEqZuSPNXHGDGcXRBrumfBstdfdhS59AuNSiXAJfp3KFHieCo",
  "key13": "3H1uXMpT3vtiHd2KwWz1royNJ77Uu9nassu6ze9C3Yn2BgtSLZd8mWaqgffLN3KGJRhTHJ5B6B1sMGLwTHYt7aVL",
  "key14": "5suzKUp9ZDcgWR1UZJhZkrWuJNBsDPt9bxFoyFVC8vb16gKKyLm1NNpzyuSJPU4ZSLyGDtKFGCQocy33XUoXkvux",
  "key15": "4izqpPRFe5W3cdBcE73zBBUBPY1k23L9d5RzPyXM8cRudppAA2m1r91Z1MQNhXU9e51WhkYDVyDqccjrTPUxPgTc",
  "key16": "4GhsrmZHtrMXPzGoRZkwX6ibAeLSkJKSoxSZKY8HTCQNsL2ZYmGXhqgWNdZUjXTuS3FAutgV4yp9GqSFUsFWorMe",
  "key17": "4pUS4TJp4JvP1rP3449XuPZfCGs7J73KFJNt71VytWd6n1k2L6kmzvybmhcA8XQr6rdSfjX9SmWxqWFWcTHbdqAj",
  "key18": "wDgcsxCm5xFtjPiz4QkPU8guJzA8VdEuA52EUixXXnt6A8GszHptK5tD4LrUh14vVgXKY4Li9QfVo9UqoBFLK5n",
  "key19": "TmD4SxqTnx91U7bs4nDPrujBHRAHPiWsmHJFhZ4bEp1hJv4KHRvtYJiqJRgrVLxbR2kQW65Y2u69V73TCGdro2y",
  "key20": "4SkzH2t6LdYkYmSv7TkwMkZuKUGa2gWuoZsGmEmDYEp29CgcrM8jRKJv71yn7JKPH7CxN97h8oL4UqBk8fKjBFwS",
  "key21": "4Y4SbVq993AW2EmnHZHss6ojYtnmH4JKcx2yaMinVJVpTWBq3qiVsw2woybU7CUxHL1unZKnHtzNhdqe8QzfEaQm",
  "key22": "4ajcjzDvdvHYsizvrqk9qFamSqNitiP1xDUffpiAwJaV3nov5C8MTaYHMCzvHwojGVXbgtPMowBKAM22mEm6BCq9",
  "key23": "4faMmuUQwYN3fJXfMLTrVXCtkyxNsZt2aQDW5nCKE8UQzuL5QrqjWAkMwdBxvScfFbNx8KTUqyam7jExKfyMmhtn",
  "key24": "2k3MbYzDMhN8g3JnoaXASnf3RyQ1CRwyt7HVsbRHKa5oDFYaLKai2tgbUccYseYz7QXW1TuM6ytgRtTkJUtSURvg",
  "key25": "5nyshe2bWuGyzCREaeyTsJti2mtGdKjfscZysypYcDpevWWhVfMyNnrPqS4tShgNnXYe3iob9E4TToEMJAR8VynC",
  "key26": "5oRmgFv1A3Qwwq5Zw23gE172VtdYTXfif2GSHofaGo3KtJApGVMAQ2vMEabJYCMR2qSdYqRDeG2REKQuuZ2iiczW",
  "key27": "5Z643apvN5H6rXHJDoa58Rnrc4GqpuNostdAuxzdpD5YkHA2UyiByEZ1hbvamWV5znLqWmzxnzVEB1h8y6U1Ey1D",
  "key28": "kPphfeNyZHjUf8noqymijXThSbt7ME92H7vyNQsNjH5ZXVXJSziU7QEYsNsDnqhSAK79V39Lj8H3RtXK43wREtM",
  "key29": "2v8KJA3wK4e7ptSnB6JnR2KEbydbkMmNNAwfgNhms5aPEY5ahbPzucskVGaV4NWYt1qJDru2FruPzA9kTKTAfZ9e",
  "key30": "XhfGMgWBdrkugp51Tj8uQTYbvHhwLthnW8KQZX1FNk4R8g7QyX9stoEYGYKaWSMTi2FyVXynUutV5N2hKETAQZ9",
  "key31": "44j1nfbeD12sg3exALjDYeaqccyWTMpyGrhD79fTZqPFnhj2DmcmLhdezYsXKvkN9F7PXdWdSpZc26ZP2rPNC9JP",
  "key32": "EK8icXy8EPfLuaPKMLp78Q13LmMBuHRuHip3Fhq3ds5r7xUnRRuqUaNskiDSoh9RBGNTtJ9XQeaGqTht7adTMqW",
  "key33": "5dt4zY1jeuSahSCqnZMTtdtEyJWdpMurDWMiWDx5472q2T9QmsrnWtF8WbhL8oRgKVjcALhF6LQ9CbbM3ziBCevj",
  "key34": "2KVbZHZ4qoWZ5PCNjacUhPRZ1ffmW2eLbaBD3d6m2KC5FYXZSLkNve4f55vMVTioBSotUHKBXGP5X4ZiZmPi326r",
  "key35": "5TcckwK36qVk59KcwvFgZ1cFbysGMhzruGhd4ZVJCVvQ5WpJS5PVoKocWszZdXsi1hwSavAQ6nqH7o9aJ7Na5Wv8",
  "key36": "33datfmtUFRGQ1jSG5j8NZWDEws8PMEvGxPCfmJxC1WimpE3wiB961ap47VUH6GJmktDpjUBuNqWLgtbFqGLnRDA",
  "key37": "46oWpzJsBhGofv4SRpoYj7WjUvAdrQogbrDGPvM9VaUzojQX1T321n3dFpwaCLemrEA3sEg8ivhiSKNTzCA8okMd",
  "key38": "4aByBTySA6GUmaDPVMBZFnW9JUb7t8fwp5uVj7bepyizouaSFQDbWf5itkQEtA59hBKtCXbSqWqr47aCS96Su48X",
  "key39": "2LrX7RS3Uz8JwqqhMAbxiyZCaY7oE8B8UivkFJepbmSnQzAZEELzGRJwPMbgJFzRNJ6CDc7uihrqz26iZNFb4GPE",
  "key40": "vw7dMc9WciX5US1sw1Qv2bF8fBTmUJYVWYBeLcVwQkdpAuHp6wPMpthq4QZTefZuDJ3tmhGAmzYivsCsSfiEzRk",
  "key41": "53ENpxth2fR6CSeRAuePHkYCZFFe6R22McRvENLAhr4RC9ndJGo4y5SGxfPwgM6EH2ykZDaKaYr3urR4h8AdUnxu",
  "key42": "3rSed94KC4JzGw19UY8dTEAT4WvttUi7S5VyzR15MotZgQxFLUYgv63qyJKxsJZXrpLfkME3ErdrgCUG5BQMHPM4",
  "key43": "5xq2G262FxxPMA9MFn7Ena8JMBVjiVitvjF44WHZyA2Q1gmmKp3t2hdaBFqPLkFiE5S83iFP6BGLTnDvqAiawyjh",
  "key44": "4sTURrFqSWvpeJ9ShP35DFRU3vzAaXMpiTYc3u3a8HUk7CgiKedJicVm4Kqt9F9fDoAsRzzZQqK5qmFpPLeZHcJj"
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
