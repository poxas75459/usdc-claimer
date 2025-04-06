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
    "71gBdL47LLcNb2QE4UctUhieCo97sn7TdUKRH5aWZZBN7mHsZEj41v2KNMaWptFBEXNqB4i327J93nsT9BA31gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "osUWxQ6xYbk3gNYps6iQ5iw65BwhkK2jPyxpkTAdFZyrizRuBhf9UjHRULU89m8rr4vVea7YyNLpg5r6AuXcfrn",
  "key1": "47o6AUasEMRf6GrjKHM851bYw7T4Yq7dPUx2NAktwHhoLiTpSzL9a7FNKTpU8AnDd27DCBeMdFsxDE1xKfEHc2ec",
  "key2": "4BTpY2tfpij7zpFaPdSQcp1cd8cgMkomBwyGybWBSMScvmDrGvZqxevKWttere43u5kbJXT3dnckqTGZCsipZ9Sz",
  "key3": "2mN3nA3GgnPMdC8hNkqdB1qQrmp3ErzyBU1K4qoniwd18gycWvW73HdtMaT3TMbXxLvAcZZfi5X4eFJ6Pw7L11L7",
  "key4": "4gEjNZUevJfsvtTTFsWoCECTBtLYqsDjXswQPZq7oaLcnAFWuLkU8dromXhr7kcDxZzo4Bdgu7pxG9X4TU41Vjy",
  "key5": "BSjWoNdYg7bcpHXCHZxEngtRFRU44XNkMxGf1miWEgzQmKX9yrbmHZHejhVNf54shEYKNJufek9uExtcEhrBhtU",
  "key6": "2DojwfeydaYVGKWQ5nynRTsZCE7D5N7T9N4M1jq1rq6JJiEFxK4NsRtAEpt8auaFMxUV1dyh1VnsPre8GmuizoZd",
  "key7": "xoZqQP6uX3mLVyEcuisKezoMEuSRkVmAzGWKEDNBfttqWmjudM69G2sy8XXUF8kU3xQTfsZPvA9kxWd6PWpwLD1",
  "key8": "rhLHSde87mwtwery63oBzmvacurubPiTxGdFvzDDosMoswBjTkf86ozzPxTaMFXQrddHMnWiWoYKP8e5RkNHAAB",
  "key9": "4nwWFvAjWzSubKrGVdJfJfZkWz1WJCko91G7YAbkq8a5fyPxQNx8FKfja4dK29p4bEFMZAsvVnFaQaSXGVB5EJ3U",
  "key10": "6F7MKaKw2idDWZShJGijD3UoBwPD4bpshEAZVG5pJs8wbbiEU3vEsV6HVtKvDraK68KVTnZ7X5H8X2wFYZFGqrJ",
  "key11": "4RDY2wXEd4EoSdo9fKs6rYbDvpwJ8wH2A4TL2arrLj6yAxG4KmMwQAjkkNsj5EAvY15w1nzv22nn7aCC1TYuLRuv",
  "key12": "2EeLmrj23dieBRuve1ypR1arScxsKc6MPqVDLxBfo8HfUkDHGPcQH6CzDBt3Q4swqe71tU2jPgRUsTD7MbVVkN1D",
  "key13": "3s8221pFyQw4L1dBJDigSqvC4GQmmPQZ6DQyEEy3nEqNBht72PzfiaXCgh1VxtdzxDaAjNfgpC4Dbq1NwFzx943o",
  "key14": "4r9h7cvVg3AybiJByj3wvpggDGFgJMJ9cpAgdqNbj5NS1gGo938VE1EJY2YX72hAHqL9hZCp5Wg8rKDLeJTGGtNN",
  "key15": "HFpmaksgLq3GyRbvmahzHhSkN7Q3yngJR2v2dfdFpkW4zp8QcQzgm2CkTXWFn3Cft9Qojknz6brtCDkbYta7HoZ",
  "key16": "4qWku2uuEK7ha4kyrikQ5iRnpj2TsSvQZCYLd9VBJLxmQnCYGew2oxBNPgqFvwjhBHtoRDyECXhPS2U2bvYdo1pb",
  "key17": "2KWqhvYky7k5rkpH5UY2Zy2e3nPg8ZPSvFxaFUKfXmZN14gukx77W4b64hjatPvoEvAvqZ1c9LigbMZYMMeHEnm3",
  "key18": "4sUtZmWpjNDRFxpyq9nwhqrJ7GKbyXWiHfxH8rq4kQ7mMXKgCAvRxqRoXqLJpKuVjg4v72PZthiBR8o4k4tBYF2J",
  "key19": "4bgz6DQ4zK5Hv9UrYbC4hEPykfxPey8x8x2vyEQorXqX8SpBcELuNfEo6b6sknGeNK5Kx5YYNHfCx6LT1G6vczm2",
  "key20": "7RYpR35bWVSSoTUa9GHjkMouPNepRtHCTbY4qbr4pybTbuE6oAoz8s22YZSnBRzY1Uu1hqFED8BPfsaMTFadNiV",
  "key21": "eGfUuStnDTWnCTWuvme5Puy1mCqdR3ChsZSLZzor6NcRap5eujvxL9CpTUhuuEmZAUpFqEtnUoUin92E6gyRswu",
  "key22": "6467FdnfFronsj1o7XjmThBVSNSbUnpUbNsfLo1ZAN4ScVzvFBWWLwfBoP7YJkrdtYbznzuNdqvgjQ9BysQBUTbk",
  "key23": "2FvyP8d1HJyaxA4vuyYmVdqDjVFTxrT2o89nrsvoBrURwnu5xgE55zW9mDyWcvcv4hfgSKMEZ1DbX2DaUegrPNtX",
  "key24": "SsqTJah8LHns298HbzuxdXH2GHfAKHZ6ov7VbX1HETSnzVr5FeEQPwMstfJfAPyDU3T7dbQSAziUwC9wzxZ2kmC",
  "key25": "52FDgtEVuh6LWaS4TTfAvpMGuepVF7xc1Q8FTDFrD9CrQs9MdiVyV7EzEHhL6uVePVfnH1b1X1EtscmBzWdSCzX",
  "key26": "3EyV9NVZK7rYdophoybeyDc1pHRdCShTtm4AdjqaQoksjZ8rHaQCV7XWxFosMV19gH5QpwfUzHMY91r4pssFz7eN",
  "key27": "4fgtWnFQyrriJtNcnvDv78U322aXnA8J63rUnuJd8LywMEEfNBebWvtLXqHVa85YCuCt31STooAxPM5ogNuizitK",
  "key28": "5z9pLZEDE81U8dKPXsE9hbFRC28B4FxAGPbHrV6Cn5mazwB7Pog4dKsZwuwDe2Zo6MGkPbSE9eQyodPszHQMZMeb",
  "key29": "3S5BzXbe9TLTKE4wrM7YCR6t98FR21JTBGU6BrffQzotzKoNcz9fDcv9ssiMMfFvn9RAbREv7ibi9of6TwN6K33s",
  "key30": "2EU1LPBcvMBmxs9cog6x57WNdJ6qJnaY2eFLY2cnZLtTeZu1KcwM95332crxdgcaR7KBKHk95qmaxuGmwh1TsLgp",
  "key31": "2TQ9G5AoYFWXTUxt4E18pmKV8KkGapBjGifPBmAc7WscUbZfY9NcuZUGoYfZKPGWHdRGeUVqqVKyBggsFVApvX6M",
  "key32": "AEqwScn4TPntHyxaq54siKFs4EDQjk84puoWLMmVfHwpjnnkTPcb4pZ42zpbniiNcu4hSnjv7tUzckRG9whib8z",
  "key33": "5KNn3qZnsBKhKjgWTH8aFXW8sjdB6FRZqdXjxDtMZfPZsccrir6r7gomjN8w5DA1xQ39RCqF8me56Um4Hz9QSeGo",
  "key34": "2dLwhxmxcJpYKtdkefGnuVjqNdLTv67RkAeGWTmWGTZdJqJSh4DvCXqzoGVQ5v7DsJaRHvFgmovmsV2P9LwwwPjy",
  "key35": "4xcseiYqHRw9tiTLqQTjpWkTLdL2m6bjW3P8GCjbDhcmMQdbiVaSj5PEyuZCkeEbc8w2DTBxgMkTrUQGahtLxRuh",
  "key36": "udowft3eDqHe5LFmMj38jeWdVmbyeq5CWT5pAirJADFiYBskhpaA1tvEzM9b88NxsqHKhssjMLsBSfMu5sX6Hmr",
  "key37": "q6oDKMYf9iVsVf9jqX58GQY7YrhM6MB7Gf8FDtMfRBruMzamZtCZ7MRYoyyPawUUsjQiA7LhxFhha2tLkYV1A7r",
  "key38": "4Rhs5RuAqH1J5D5LBfpN8M1WrbgHKtadVCgXD24PMfUoxhv4u44pa6yy56wXMS85a7TdrYQdTHyCFXek3cyCcHpm",
  "key39": "2o4uRYpUKCLa5N9fMaQ7y8DuC2P7yf6etSnH4BGZVZRwAWQVgvbYYF6sAc53BJHHvLsX4Zi3LLGYEidmoKYyMpXn",
  "key40": "3ioenEMumX4KFKMhmP136m5XSd1fxjaqtPXNfxiJJHmUw58Z3GPvQbyfV2AKqxFYSGx4VS7DPb6d9NsdyQwDbZ1f",
  "key41": "Xtnf62v1cBG5cfz87R13jtvxXuBFGFnBqW5mK4xrXzg2sAq2MKNtQDbvXUqL28rjZ1R1NuY58qw2GfVviPmTioR",
  "key42": "366FT6aa8MRxk96SVgV95rE7oYiDnWpvHCK6eTBUSCCXdu5ZpVpTmQK7ywkszmjcJJby3osDRijFbJNp78SfSzpN",
  "key43": "4SVtdaf4qQGv6K6sfNtEVJt1gxySv8GwfGftsxRAtBWUKFrxGWQTFgnUCn3DFHWtwqUBmJfZnSQSoFQTfZmdmgPK",
  "key44": "3wVimWGehpKTw4fu8zDSx1Pyzeax1C5ezhwQxeWEowvVysoXtqKcYYVX8UvQypaou3c1waG7G65EzNzcY95kkJHE",
  "key45": "3bjge6eK7nY2W4N1ebxDwTaLCueXVtZPrRsbN1Js4v4aXNnT8ociW66Bpn9GncvYtQTQfRH8wJgFVqzedT2bVAUP",
  "key46": "29Y1kpwRFK917MwmX8HZqjzf8C2Yu6cbxgcFEafAH4UAow6WYmecTaT2h38j4xvFRaxZDW3oaMpa5sS5vTf1M5Nv",
  "key47": "4YmnLS71ZbG7ab6To87BoQhgYvdwyMABJtYmfjRRXrHkwMwir3D3TL8Vpdg9y8oqgxWDGTXQxEwK2ZZhMcA76T8a"
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
