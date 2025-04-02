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
    "3LoNwMeBmFcKJJvyQVUYPnja6BtwyTshcbawGDvYiQctydQE6CdfEdnSwpFhL5J3dY6cr7ktc9g7g4e7FD5mQuUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66iLv88Jn6Asv3F5nd4qPe4B2nQb61N3rmZd5X2bsKy87PGJgn67bZkvPTXMs6M9mbGDX8DP8KPLLg5EQYEYwcYp",
  "key1": "2Zj87EgMLcQ48hu21UNKpi2ijoidBqWqygSGt2TRi8jWatNzJ6G3KqFmNvqnArxzwmg36r39YLD3G9JUkZ5mBLom",
  "key2": "3rqCa97tuGVeJhxArKuDyyhUf6Fp1WfVxLPddPFiP8r7H4kxLEBDdUbQGezC5GAEDsttbwZ1mhBCpFsjVatzhodk",
  "key3": "23ejbLXSrLuRq7HVKTy1mAHDHX9F5bQhv5mzq1NTiauRLmWnKoHTgmVo1P1AFmNaEEaDpVagjYckNw7sDZnSW2S3",
  "key4": "3WBu1MU9XDmS4D4RCVorVKAyM3LYgcUtxWi4zWXWCu4E2HzZyuQKQ6HBtWsFBiuVChPpwJNWjHzEJLB6zePv5MfL",
  "key5": "x4v1pRPgK7QaUJTjxMA66CZAnRqzVbXMyCKbHYQv2J8iCyRHAbRGZbrtLqn27epKidLZo7FDoFEQ2DkRdtLDbar",
  "key6": "RVBQLSd2ZBZCKkgJd5nFs9zSub93ZbUbkrMAy81Cef9au8xxUxZEoBz1MyPxbnN2ruKEkC3tq45W7Mu112WB3Qs",
  "key7": "4T5sYMkDx7GH7eQERqoj1FndoekHq2RtuHviqRyKBkdyRjZkGhbzwezk57ZfE7fG7yY8RgYPT66SUZuNnL1QseLi",
  "key8": "2rCS5SbM2vEfn76srEp9mNNwgP85KqSbK4FFbNex7LovYpV8v5NX3g8EuNZmzJcW4hgL8LZRrEiT2qrHvaCYuSbm",
  "key9": "2ELUJUaukeFCyfWgSJfMinV7yCHoqdUBjLZCgfTqMk9JWPj41AVQeN2J4Z9WB37QZuAXj3SwkXbjwTSCiDRddpw5",
  "key10": "SJkpCG77WZ4gfXcBr7JXLDZvFEujqTYAVh8LiMrVGMCcyury7ujsoJYW4tq91odgT3S5JfHmHZLUJMPmGxeakeb",
  "key11": "4baBFqWKZ7B5Ex3nqjHVSmAPTqsKZvSxWc1iU9grarZBVgVyJ2jqdzokbEsStpp4Eun8VwRDD6KjHuUpLuNQNWLy",
  "key12": "2hUBAPfK6EwAv1XGV5iRUe19Fw2sbzu4j8h9JnLTJh24JDx8EXYdpUxfjpNpQLpYPaEXGyWn2nKctLZjKyDMLVAd",
  "key13": "67rT37GVg7SbKd4DLWmXUXA69ZDvdevPXooBJXpK3eAZNVYrv55DxDV77FUR7eMqHmV4yXjxjLxwfxyTGNTB65wB",
  "key14": "3VFwqkJDAi9Jfa4HgKswv6v31LrNnE3WjdWBer2dHQM6DeUsQEx3KGZHt5Q8rW9JnjxYywYbydvqWYHGHBDbbhGZ",
  "key15": "4pBxYSZZDDs3Ttnz3buyH4YfA9Mz13v8YnD5beumjhKJffCCRcWtF9HnSGH61qrg8dojtZD6D7nANgdf8WfaGbKQ",
  "key16": "2mmPLy1H39WSueLxTuYasorWdPzgckrQkSGEourWMSCb9hUCjyroxt7AcB8odW2YgGyKPRKkvq1HTYxPNubcLbpd",
  "key17": "3znVyjyep43ashiZgiq3RSZQSyGNpov4d9QTGdbzGsCiSw2HoCFAMdnNqGMgmJdqmFB9ZipuMheer58iZAx8Loiq",
  "key18": "dGfEQ8Ee86LrhMjTou9nwgeE3n9kgjX5Gxat8fD5Edqd7eoUwv8KRHxWV2yak9GN1oz3ByY4EKVo83t8YLAYTg7",
  "key19": "WZoNYghgtW5mfSWkTkDY3WNPMA2Jn3m1YD6Jc4XYz5gaihjhJkAtzoKoivojBvY11TWnemQWmDCZmTvL6r2shQE",
  "key20": "4GRUsUHsXYvgBfeufmuFnDtJyG9P1mtpeaeRbTaYPp4zfvLYh2c9rs2WzmyFrauGkW3QJeuz658bHSzYbRJrKTRA",
  "key21": "64snX7BCbmKarRxnHeXjbWJ5uosb29LZxaBY4z2mzhchL31iddHWPjxC5NKN5KtztF8hsc5uVYQe1xpd4SEHMT8f",
  "key22": "2GgwTxxTHPF3rBAXdTqRR6xh1L2J2BFXh3AvFHfCwKvEACitQSayaVvWKtdFiqQ8tun8DD5MPPLQb9zsmKVFLNBw",
  "key23": "4L6GqzQ54yK93FxXoh8VEtTJ7MfTgLNZcoWUHd3DTjneCkRW9SkDupPkkoPpYQS49wZDsnooYZYrvZb7ydHeyzhJ",
  "key24": "343PE9josN1xivmWu1AgV6wvJ8AGTMd3Hs1x9mw8qHZoa63CwnjH433GRjuKnECYiwCeSkn4qyfJ7XPkT91ZobRk",
  "key25": "JaPn9rndsfq8FPTM4uoG9XszRz135yDbXJw8kr6CZPdbmwquXjS1B53ohgst4PEZc5LDkRbK4TDrTK7uzwuAX8B",
  "key26": "4SMuCETSUQBLtAGRcYUZzcnFAcUZuqjPsAEgZLiLNPR39aKSY6rfpbkxCHf8d1QPYobSt1VHKJBkC2WBWcqGvaz1",
  "key27": "4Pcura8HG6XGrv5iYHrDsLMgyTCYkBy62w3t4gE1PrDaT8Ckq1TVvDGENEMPQpFehT98NdS64HdWQu7thKZSd5Ei"
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
