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
    "hHUiqY63CZBP9qgqDxeabrcVoxdN82oCcLZ7WwkjzybQVET5NankQ19eRCUdx9QCb2uHXiu5nfNjKt44qNPn5xh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zzgmus7j5xwzohkwQS43N5Eu711tikuUQh1eZgDM2NpJqAimvigoeDZhUjo6J2zqFVAKh3VbqDNpAx6HrUsAX7n",
  "key1": "4vj9g5RHzq3GGafCpGM3F44pRuofzACrFu7RRn1hPv5M5go62xbbsPGxZGxTXoRrwMGrPZDeAFBgsDGiauaz9vMu",
  "key2": "qWn4ogKPJ8Pwytz7Age47BrdrkmdwKZqChSNn7682Y57YVkgDeuwYEcjt8A4vazQ9g3krnCLtagYXX3i8MonKvQ",
  "key3": "5mQcMrGTnvX1PympFuKqr7eKxqNL35DkChPHYfTDmRa8GvbGWYHFoc54VbsqQv28xEePWkafYGwg7qEfqvG5wyo4",
  "key4": "4tBr655VzGjG68biL8pYu1u7fZ7soVCj3znD6EEkFTRxdZztT2GF5xUBgLkaVYnCeZiyhUZkX6HZFfey31JwcwUt",
  "key5": "2oGmUn2GokgWy5mBRpkUxrmuwSgY69pDjmxhLHAc5itksvXJRpCNzB6YE6BGdMjzAKuaAA4a9RC5SicNNhaSNjXo",
  "key6": "F3UfckQ7Qf8znj2FS4Jg6gYQQMrPFGQhGbkHu6aneuFgMFT3qJrWkfApoq1u4niUAm9rBYp18ok9g9t9J65ny6R",
  "key7": "2a3z3Vc2D7cXcLeVsy1hnBTZBbfi4a5SmH12kgCkEQBZW6PQuBJ3YpfcN1y8yvUXRnYSGbcXhFWvpYHxrm5Dq95R",
  "key8": "4SWycBuS1FbjfwGNnsJnrKa3SSnE5MAvkfS7eFxCbycMspY7eSEvSvXu1HEfjt2UPkh72rBqmxwTBS8qV2d8hoBP",
  "key9": "5a2eHQh5cu4VrM4J9AuHZhe5wRsMtCy6iUkTvDoCYCoMcaaUGVikNF5FkJbe7gLqTJtca3hD6PrPauAjYcDUYna3",
  "key10": "2e3pbTcGLPc3wrX2wi112WCYdx85P6eS2rAbUZHXwGjXpshXX81P3ukPp3yyYoJa7sKRbSgJEE1BFQPiwfioHq5V",
  "key11": "42wuyRwBWywmu83J27rZdtTzDHXPGPyouns3BbCoruQSx7NKsQJg5fgL7gmNZEjGawWcx8Wm1Egt7MnL9atVs2wU",
  "key12": "4WjitDcHbMGKnCHryMdfediDJfbFP9i3rFB9BkmfywLUGkq4A2F3iJwsdQCqAMWx88c5hYYTySXxwQwEsWrozweD",
  "key13": "4aksPj3P9mwrf9mkrHXF6PNARfEsiXhaEbx3snV8Naim39Vf5E6vX93wABfMz7jqDBmkhnf1cs1yyTv2dN69VKCN",
  "key14": "4aiNCoeYsX8ixTuJMsFXXYsRcGkBj5exoUEFzoMbaiLQS7befKFxN6XGPz5kkWfDcTwzpThe6chuZJoZbjN4YM4r",
  "key15": "63Cx4UyEjv5jVWPvRpBpTaniGNgniy3yjfj6YWFa9DmwjK2thWjAzBr6e8Ef7qS4rArtunFeuHwVAgdGAhSezLd3",
  "key16": "Ka6eZ82AhW1JuJmQdLgce8VLxEQzQpGUb8N5KLzDkMAaXvLa5JGzy879GbHu8Ruhp47dLbGpXWpGR3hkoikEikT",
  "key17": "4RqxvJXqe6cbNxxMyxZE4teKKc66qCTeLpsTb2zh49X7ko1WnWkfggVBu71rJbCtumXmZWhQXGCupLk382hHsV7V",
  "key18": "4yUHP6BrCw2Y3XZ9JtKZi1rw6ipn7L9GmnxQLhwSF6Agv2Db9pCmmzJznZ4QQg5sbTqTx69unm1FhfZGL71mnFuE",
  "key19": "4ErSQ14XXKvYf1hqLBKe5rbCjxf2kAuPDGm1HiVgtHnb1kdn8XmTsYxV7pbaH2ZVbSqg75VgEfNsZFyuZzgZYorE",
  "key20": "2YJFg2fC3ZHnVbstzyT77ygmfcxc25cG7GJERw6NgXDfFzKdA4d5oqW6XzQioAe1P2bBBCYYCBTKak1AKQ8PDQ1M",
  "key21": "2kgpaaZf7w3Rdo8J4ZngZMdAGy3pp1bUx2zcRDW6doEZwppK45uQnpKLXZ2Kmq64NADGjzzh4dSfryX8tGyUZrkM",
  "key22": "4uUGXaoSL3ixxxDpG7238xf4xrPWE2TVrCn3X3mvM18LFhF5NkLF9CVz32SKdYQv8rgwrB1G1W1eK9Fcxy88QPmE",
  "key23": "2yWBRSjExAgA48cekHbstTZguRmQJikkC4Nn7kU3XnoUMfBrUSsLvrzDYMASUbg5b75MuCVw4cyo3qBreHHTeL3y",
  "key24": "4JVXc2Xzur8N7uUNo8eBjFeRupuNYkohqmDL24qUjaWeHWnE6LWyhTkwtZqYri6SaWBnd2zQcBxZe3LmagkWqSNB",
  "key25": "4snrND5mF9VF58sDJjKnkiQwmHGEqEFk9HiFHLNNkXDkeYCXuM7QGurveGT2aMbssvN7ZR4NvKHozaWvPz6rsDWE",
  "key26": "4keShgcGfkCRsjFkZKQSUf1vb98YPe7NQ8Xg2DcT5HTRUWep4pXY3TXZ6kp7W9xF9k7qyKB7pUAz29QL6Xd4z6Qi",
  "key27": "43ybwPPhZLFwzgXgLr6WnB8WC7ouUg6cQxRZCeEtmXQimXfq4TtXGjGAmb2cgNrRPSVq1zFaRb3F49euLVTRDYvE",
  "key28": "4AH92bzTz7yiN18Edqm6zJGi8nnD4bgNiW9bwspEHJJvYADSkAAFyRGQ2JduUjqQhDjA9cWKURQKrNiHE8BuJwMP",
  "key29": "xUsREDYanLBSXP62w3oPKXbTnk7sGAJXscSC5ckSE1o4tymbWYwjeXSCoda4EfsVJco1HhTxC5SjmCoLhyQnUv4",
  "key30": "4EvYn8ft8AGegdRWXt6NKjmmYga4BQTJnEKfweHArvWNAFPD4sSeHJDVVupphAGUKieSmvoi75LuJBfbYxQpcwWB",
  "key31": "3m1gEUBFwnpidQ4n9eZt8NRrDgn4KyxYoANMJag3ue6dD9jDELQi8fKqk4KAWHKKBkia6txmp58PewWKytxsQ73U",
  "key32": "3rf4RQtxjUst1KW2vyfDpicqtFXY499ohTDUebXFf6QH2RZGY92Z3biSWNgivv3etrZprzmYjti3xn3W6ScaBHo3",
  "key33": "nE8jvL2Y9YSSr6YCYevyCqrXZiyXinDgQvoszwChi6tjJBkZEmaMpxgkWnBBTLYhVt4MRK4go2nuNPjLAjU6PSy",
  "key34": "2ViRg8qDBuYBKDPwQWiMFRewNVonHmWNS1b2FGNaUdk1m1JhrS6fY3aEb3m9j4qkFju9BpLW2SiYM1mqViFj7UHU",
  "key35": "UL3qrNKxSmka9r4Efvy94ATyBSsdXsnFgB4zhFhPmwGcZbCLnua8GEuf43CCVEoGHy43We6hUW9gPgrDB5gi7TK"
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
