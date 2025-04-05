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
    "2UkGDeqrDLQ5fuGjiXoEuhGn1bq1vuJSdKVy674fdzitaoPQkkTFRz8DKriwJgAxuNE1rTgwuApWCV8ucvRY3H6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aUQP18b99BKwVVw35Nzb4CAGdRst1fN43gmmbwGoXrXqvMNaLK1gGFwBUvEuf2iyKJVhhH7xcNdRm8WDKwC29Mq",
  "key1": "4NE834EFGsZFkNziqGGK91VF51tqZ6KrDv4e7kV4C2X3SB652CprqCB1PhqgFeGhZkvs7vgYtSSfvQEmanQ4cjQQ",
  "key2": "5DhG42ceLo5rGNNgAaTUwB4v1A3D8P86MdUPEx8XRS3JDCEHFpkymr8YDvrJUisR3L2CMZ8ZnNyb5NTH7W9PmXLz",
  "key3": "N7gFjHUD3cCqVujGVYFuo5WxjZf7jS4Jsf1nsQLvHZnCRDcjtaBHrg9Byt5T8y5D9QDgpVzTmbiLqgDR4F5DLmr",
  "key4": "3751VtrW4fJhzTftMhVxsCju3R7h7ouwThSWz8yQHC6CfdNC7aLk7n3CG1aK3FHfGndYAnaKK5HnHFaeq3BWfEvr",
  "key5": "3CAssiVnRACv5C4GMaY69s7mRrtYGzvb2jzPgMa86UjTwf3kfb5gNxRX4tnT3bRUnNAukkQvFv2Cp35gNwA5BfdF",
  "key6": "5ZaLTRq3yKS3cpBtkLLr8uevuL2Cu9e12cYsYx1tSU4dqwKWnVTBySSJ59j4LSNLVYscwU5GrRdsZRUVe5BvwC2v",
  "key7": "61yfeYcKRNaBcXZNL5F56QwoyzFpmdMNZLCdNMLZ7Bax71quAq1mjC81yaN2KeVUHrFdfvPZSfg9p8fnVJHWPUNn",
  "key8": "5Yf7Go113tYsuSz3zjWKDqSwnFNvpUFBWE7e4CtpSnEqJDUmNKHFkcFPHhHz7PmVcKXBYiaqXjS9KvorNPPDRgPV",
  "key9": "3nRiTYNmcCLye8mhAy3TnMrCVF6AH82JR5y6bsxx8jiHKZ3Y1ULBXpESD7FxBehm4nVsrAhEpWRk1FdLntU7Dxtn",
  "key10": "2MHA2vwXHBcbsW5ReDn1S4wWfUE6P6LvvA1qq1Ca3nFp5hrK4caqGLvfX83W9H9X1SoiRdANgeuuw4HmyLwegw79",
  "key11": "61RYzz9vz6paPvzGtotZmwEetTRCWWHHzFFUyjaba9mtXjdP2sz96P8FS2JCfYsgqEFUEvPJq4yBoRJFntWuruxA",
  "key12": "2sPPhsuhAhY5tAJgjcgQbGhUnoadBUyENNNELcLt6fPdqru8DWaWxppSzEJodH4oMW2HijK46dAE2cVursnW7XVX",
  "key13": "4uSRWjSfNMrVkoNdGgMuY2wQ2h7PhG5nh1qUsN9iRYxhciCoo81rcwMmaNrJ92W4HKkg28fnM8mw8MJWCAxDmQaH",
  "key14": "9NZqvoo211swQqcKkTJoMJeudU5uRgrkZaAWLkvFkXysB12TWfExYV6m5fEhz9nRDRdocsxXPZ3tdEEhffc6jDF",
  "key15": "dkM1uLKT57syfgbxWkDEqgrazcJTTE6YPJRhTFnRG94ARMhJRmr7cXsVhDWgb3ASPKRqLjja4rB2at7mm4VCA12",
  "key16": "MrbJrjrxqr22ZAYRDCngHfZGA9cXMZsmu2s3BNSAmCHgmJJVstEKb6K76pHLU9z4bq22gCXtLjeSJ658bSywg6j",
  "key17": "4FvRXdJfqfkDNYBXa5FqUFSttBZCHeWPCDYXaNqPDEDFsogKqWL7FJ3F27aCeXsvft87VyimPst2DVfrmc3cj6uH",
  "key18": "3BFthbdhiVcevWuawKRwiT8ihmNeMnhFor8Vk52yd2JBQBNJN2EpeyNStpPF471zXeQvC87ZM7L65Qf7vame8gbH",
  "key19": "3GQm532wz4L2tVYBUAZrF1skowbiSPxoZ94vDRHyWQSMjYePBMQr4RHS9xpJEzzwsWESxmAcVnJPhbCGUmm4YKCQ",
  "key20": "4Pxpo19PnAjRMMfgcokpv1EqeY7Ck2BJEktLndjQsN4876UCQC2DhQuUS8DFKmD5YLw9XnZFbAQDz58RcJAq2J2n",
  "key21": "3QWKRZpL93fKJSR4ybkTRnHmPgmUexHzW1YxE7HkFJHrbFBA1iTohfiWptNv8Y2qRhXRBETonUpQCwK62bN57vWF",
  "key22": "4CLzH3KCLZWu71GqguCkche5raw2Tq4xrQXRUDJMeQ3ufSVfLVYRGPSBVtQBTrdQ8DkfZH9Y9u4PeXh9Yv8GprJx",
  "key23": "3LcYz2sWosgEVghnR6K2BM2ojycyhGtXVVkYZvhNiJNmuxxsXyqjhbqEVw86pBAP3ARxLu2vPpRnfMS2qNqrvPTN",
  "key24": "h5wft1PWCobogExvteWQMwSmmKUu44m4fXxNd7pUbBsbNFTbUtFiuTR4ugSfqAy8XgBZrXtYtu5GsjnUnuKHTNV",
  "key25": "67bqtowTiC41DER4Br55DjaB3T9bfbnKN54RHJAnbJavpisT3CFrDq3gPhoUNYEUb6G8FiZF9mFKZwujisYDmgJL",
  "key26": "3z79QhMoqYHmJ2pJ1RShRAYa33mCethMwzcJ8awUKgNB4QThy9zdJ68GoJHP14vTyZv68tFuhwiREsXWVfQbXMPh",
  "key27": "3t7My2K5DpMJLt4hoNFxVeEz8gffSJibBcphNsHFcNoXv3Rmz7zMmaYCMCPBKfH8idTkmugCPA5D6R42F379nECY",
  "key28": "2zp4nsiCWi1MSY9KMm4KseoP6L3CQ5qtyDwgGPurUCByPheuMC4VhPSTDfT9J9TN1J8SeUR2kVfEmvSp8nVaZW3B",
  "key29": "3pDrPpBiv96zX7sM2CARLTMV7nL5fpTy4smxAex5Ze16i7J26adjQ29zADut7SjPFfvfGzaVLw4N23ESkPQGBaYc",
  "key30": "2S9QAWT6QgXupDgv7Lq5ojPtqANvvRphUhWx9bvV8o84QudeJSNUCqzHRQLAUwJTB1KWF5BX8kRTmYzJhiP2ugfd",
  "key31": "4zE7bbLcvr6Bt96hXkwZWPseptQM7QkmMgagemBRRJTcqANsiFa8fnCW2uJvMNa9DeKVXFgGuakLkzFpgFfmRWNp",
  "key32": "2ZHgxdoyGrHW2GZNPFqTgDZgBqkUsdeFGwSRZVJWTDCE96XRKaY8tMC7wUp1BWpWJffD1tCWx4AWLKjPGvcaFz6P",
  "key33": "2UMoHX7Ft1U7WW1MvfBhDhGHpc7trg3Fdxkp5UVJ5kJeeH9B9kgDhrrWu98dK2q1LpfHJKBRzvSYBcgbbc7iijGu",
  "key34": "onWE4dmWxFSQXmXM8adwDvuskqM14Ko8Ph1Fgfbav33YNbxfMmhXwher1AF1HGQGqDTmHNDCPT3wHERfDtmJu5m",
  "key35": "57jEzjY1x7izFMukj4ZSunB1ea27KZpZBf8jaoRyrYKGDtpunZMYXi6p478hobAhyWiNUHfA2syK18tENbC2BfeN",
  "key36": "5p9WDq4wQSrZAhqVeGDGLEYCoerghzZR7YUHr3twVBVJtq9oPhVuSTzPffiu7SH4PYiuN3myw6afPJAsfW4HgJZA",
  "key37": "4sqdLWZfJwkHYTXV3KUnPzh9Fv9R8QWPtyonUTBMt2wJyXHrzqowb1E2775ddAECQcdwgLRQVcDPkcQ1J1t92CZ5",
  "key38": "62U4LNsB2SnZAoPaQoosqHrAMdi6Uf1AFPXyusmKYuZRTnJJfSmDuq5NfyAboqAFUiH1odXgDAEzaHc9RPokGQca",
  "key39": "3C9E7L5NzSqGZ6dRmjqZ9ShyNTQhfqdXx3jAF4PWQGrtWPbBKkWSYJWbEt2mEkGpEFhJMM93ukkySBCKhynNRS5v",
  "key40": "4h3DPHeBWt8YSLrofKQHEQvNdC3JH27PKBDewbJ6iKp1toB44SBCFoohsuUahVfEbN6qfDm7Su3qMqtuuPafk5Gg",
  "key41": "5z5WUFmk63yViMMPnz8btRkHPh2Aze1qgUVQsgbYQEnv4WRXw1so2UvMffnjgBTi3CLyazVrkDPz4q1GCaqgnAjR",
  "key42": "5WFhYYrq9VQA2EyxAoprdAfJHw3gfgGgpZtrFk6y2CAszUJfPuVRVqwHvSeWcMLbWeQAo6McrKVKZMt6mwRbWg3T",
  "key43": "3FX6PBcjhG9PXkQbic6WLqdyc3HPGgyxmX5ER82tDebDp6YeEJ76YrrYMHLnB1Duh8a63y25zpQKo7aYCrbDPuBr",
  "key44": "5tjLFzQrB5d1p4XK9KH18Q31pXfAHfLv8mCKwpp1DHc5oqpGhAixwaTLmR6dJnkN2gegBZ2bAWfjCwh4Ns5SpZte",
  "key45": "541SCJWkWyzguLaKZ4CXK7PJfepLj7HvM2SFYTCWgzAoXMpz9CKWeYNHPiihm7fZRqYBk9tgzuEwjcigG33eKrAC",
  "key46": "2PBnSJEULGFuZjAcS1PEFySdgJVNto4aeJSxEe1SMoyyQjiGACxwY4MHY24wMQV3pkwLGb9ab2uQA4b8HvRu836k",
  "key47": "h6vjS1t95DoMyb8GukebeaSVjDqycVuqnDbYx3hfh9XCvFk24TttDgUcjv7wvvGaKzA2GSL5qj9wsJGgVtDkpw7"
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
