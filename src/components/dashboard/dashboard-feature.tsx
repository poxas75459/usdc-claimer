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
    "5AqKH9hg9Y3P7fpz2XpqQLdCnQwN44F52n9A1V2kYje6AS6pnEGPaum91Er4PYQzMrA5mEVTrD9uSv6UngZhuJ9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b2aYjRfCSm2mhjvANAznWEXg8zR3BY4RaZa5h8RpP9MiUmGXzRy4XcofcvAJp8xiKBYsaQd3HTyYjcUEHiKjJeL",
  "key1": "8wEq7rymfmM1tq1xgasjaATi4Yabr8Fi9JY47wqu4ZAaAGA2AGZFpGpQv7UoFSY3bccz423xhrz52AkAZMQ8Nbf",
  "key2": "3XqSkFKGg7aSx6qjCKu2Q6Jugvo5U5Nm2SYQ8v5R1FEH97GDiUVX4p8CncDctb14paZf9uFpMfSB81YJ4Ptn1zDW",
  "key3": "4RYPwX1oTRQJgjRCzpxMGp7SdkeL6REDfow9yTwkfrMa7JQreAPGpUpakDTpgqjXDg2kXivG24c29TvEkRcm3YDa",
  "key4": "3J69acgHp7CWBQSMfSJSJaaMYU89Rv4f3zDmjzfWLVkgKyqj4tanQLCPyP8CWt12DUCh172nSPmtdnAdaRLyaiFr",
  "key5": "12H4eqcZM8HpawNebygyyNRjqUj3Hh8Ecuao59fw1VPxTDLSNXcds1y135cAzowMjG5YcpC7kV6EkceVU9oPEVb",
  "key6": "2i3kqYtBQ2THAKJewfZg9jWR1f4HLoZ6uC1b5CnXwS4jXD8PHsXWNRLMsqJ9G3dvcDA4ZumTcb19ce595hS2DrDU",
  "key7": "5VwrYVUZjFBc43J8cw6p3CLuz28xtVnwZDq9rjauaJ1Pmua6G1PCHy3uAT5t4FwSCdUuz4gx8ypWkJxmLfM72w8A",
  "key8": "AmxempJW7iWc4HMhiTXtQ9nR98Z6FRPQ2T4ZfztcRKXN7aZH8hf6ud3WmbBRmP6VLyZ4VGJ6BEQd7dHtrkVh2za",
  "key9": "3kn2aAoX4Y1HU26nF7xq1J5CTbKf2zc5GbMWVKdZRK5JSGzxkrfiaVCEhhs9eexDutfM77hpDg2JkaosB8hDxdb9",
  "key10": "fV1xR4oiUNncbmztSgHsUXn6kxiuevKkJupiHoNzagMEyd9GFi3Bsyh3zZZFXVSshy6cLhB1d2SZMEBUVy3pKz2",
  "key11": "3PR9CTYExixWsTdTFCAgTv7zscAtrmQDF93C9A83tuAyt2VU1kHNm8A3pnrqy9GanBDfrPwZYPnxLFFcnV2dFHtk",
  "key12": "GVarkWfPNByVoyKfgbKrgf1WBteyavnuvTNnBb7FDyN89jDtAESjUa4C4cvywNQctd5syd83Qp4bjTr7LGTTzFg",
  "key13": "43b4QbPtd2nz4c6JnZBbmAvCo4MGx3TK7yAjqEVqCSFKBxBJtxC54hPpNMf3wdLmKcCzzMvy8baqKjvYoZDMbbJE",
  "key14": "UaFqHLbKWf1sYxm1kd8gUFSXEGWfQ9ckcCGGRa4LnThggnfnLnktL2zv17DGd8jYxySCJJYt1NnkCd3RppYEg44",
  "key15": "485fvziFh6CNZeyXmM9pfy16u3PxFpP3RZWptf7mAH1fYDTxZwapDKVmeKMLJmKFYGQVbE9tRvgFMb6SFsuvDkt1",
  "key16": "3b61xP7cPQWbM8A1rdwHuUPrvJviNtJramcdM5PW5Juq8QFMSZP1SDfo8jZjsDFWpypBmRFwxyTr1kpyaXrUMnsw",
  "key17": "66dMs1pFWq22yu5JS9Q25x27LWqnFye7xiige3sUb4vDGqe1X1CQF9Vi9AvyyVd7AhPdcjjjqF5FrBQtJqL22JTE",
  "key18": "4q9SrmCzU9vJZ3JC9t5Rv5ub8QgWEWxGU6MfFJskhnRHKw8UX8AuUTwMSbypgVZ7Nyu9gt9tPFbLFvXq9HCN1bvm",
  "key19": "5kyXgmMFoCXJALbhR5wbHuvtpcbtgtminYNbGjHjXuLyhD59B9PP352oFikjaSntS4q9unQs4daoyYoR9LMxvVqk",
  "key20": "5KtBR1gWLMNWgr4ToDAKwTTQCVDdU9Nd9H8HBabBYcGtDH6uFcudxqsqLrAkc6Bu43BAoueBJ6F8abaJJJ6Fqgkk",
  "key21": "4szMqi11tj4iCqXmAdSSBD3hkChDZc3GbdsLVhYydUEsvZjuVJCWR7aWygZSFufgb79o81gWUFGkmJzWmt4a4LFK",
  "key22": "2ghhGmd5PNrVRhqFGARdYhG4n5m4oqCJcon1k55faMruAw3yvK5xLhPaGrCcBAaW6R69P898YWzuVEbs7LYp7xVn",
  "key23": "48FyrQ7f46RyFMankhwJwrUPddhNnEbC1ECbB56ZesuVtWWxhYGZcWVXLe9MxLZUmYsenR77XzAgESY1CXHgnM8p",
  "key24": "5g1G4tnJoykc1tLk2WtghCgKjbkzSAp6rVF5nABccVcxfyMCSKRcvSsqYiSWdsLjXxjSYaPpF3zHPoDbFkpcEZcH",
  "key25": "56JcqXAyw2nH9btXBw9uvQVLw4nsCbvCazn7AdzXD3ow1zTT9zBgm5RcLpS4hBKs5QrsfcVYoJHjSSXhBFWkWsgW",
  "key26": "ADeYQeqBZeArV8w7ZPM2k1mvAdYETaDfR7hRyjVA7DY77HESMxzUuYVwsiak4Zy3JXi3aT6v8La7VCHDcHbJMaQ",
  "key27": "4WrJBejNwd2TzaaH8KRjyo6FrT1SVkUPWYJCe6aDNnAgPTRXd8zeyKztnMLVTrYZmNvcV2CRgzwGMpzhSuKC39Ni",
  "key28": "rDjbFU1nShvWScHwEZGjK67fiQs2fnPXb68AqDkQG4HEFTtPc3T5bTZCsgPnASy71xipCqxXNibFNz1EuHhBNh4",
  "key29": "33bm4P7E88nMS4yNsWeXqaM9fvebfuB7W5XuQxqL7yLQ1aHTarX9QHTtBCDToR9w7BFsEwh7Yn7vLyzD4hunQZur",
  "key30": "2YCGmkVDHtDJchDbR2JaUuGdfuQ56bNQpykCHWXGhTfqGGoSdTKFmgNhUswxKD4XtMMtFYFHGeZuMA28PsHcGnzB",
  "key31": "2gjjmKkA9UKDrY5Pagroi9wqAGU9mV4iYt8RfnoH9FktnRFYJTmtGEDC4MPbgdYiJtabjGXdr8sPkdMKcDpT9QhD",
  "key32": "2AbKL7kkNoSCmd8GXFjxcJBmwymzznn573QH41zXFtPjXsWAenwKpLeD1Z4VGpkbnRczFj7KkbHKXsbr4RKQbd66",
  "key33": "52S4eCGT7cV1Z3xZB1Z4Ui3fNVNDUbP8kX1CixUrUHXRSmLEs9Gxk6cTj3LCQnjUvFmrZXo6wtFtprMzFJgzQmu1",
  "key34": "3ZcFoyV4bjXPKPtXNQKLj7Ba35XyU1UXSRQFzjK2JFwjQCa2jaJhvoQjusEnNbLXVMFgmyzfddS29LAh6Mc26ds3",
  "key35": "LrvSzSZMiAGGx1tNe4QJDypbkUimrgQAtMCev8jKbiCZgUgn4s6xtCcF1x3QMMktMwGR1BW2DDdEDGAbHhXZrqY",
  "key36": "3aVwWLjLXhDfV11m2iUHTBFcw8JGTrcXhQaFeY2Xkj4mchc3FuG9EE9bNfi6FhLZTzDuFTtAsGRf5QTMZCanpeja",
  "key37": "pcH83ZvzXaRpNvuicUy529MMZdnGt8C2wGGqe2mEjiY4ptqeG4gsXtTveuNm4ftc8FFKTLsai5goYr7iWEyJzXs"
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
