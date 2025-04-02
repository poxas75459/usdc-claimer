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
    "VpWKdS1osEVcK5pXEqPPjoP19spcQ7eY3ssDgMyQmPpcxhCVrmnsg9FwPv3efBJzxdj1jNUM3UEjQ91s2Uu3NaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7xjQ8VND2UZHPNZMYCmpZkDcLPRBqDPvmB895iFR2fBHpV5tqZvFX1HeHcfeKQN9bfcsRXSTMbiQP6iC9AmhCi5",
  "key1": "VUZmPy2pdqUZthoDSmnipHdpmyuVwgtEMHhqfax4iq9tKHEy7vHteSSxXNjbTLLKf5d7Et53HjaYZyYAqa3pppo",
  "key2": "467DaZqovyNQdgbpwazxm1Mg6FWQEwdWhf26H7UJdFXcM5eszMLxc6kxYoDHZLr3W2kxGfuRzRrzszrJqqrUi2BK",
  "key3": "vS1cYwrf1KwBAk27KB8tnNvDwtt454xSfVkAUFMdFM4zB7ctDvW8dH6aP4aM4PRDURpU3Qk6MH1JYwCHzSm4qjn",
  "key4": "3bqqyNvuvq6jH4GEDHYah38d8kzeHb6JGMHucuTRSbBzG3cLeKnEfyc8BE9kdg9yjrbbUPdqwzhPFJCwWZmZhgAi",
  "key5": "4RM2bGFxU7LoRFxusKgMu5diqmPWRre8Q391geHdrA5GzLnUy1Ws19FuGKv1WrrDydNiStKSKaAohPrTpDrSfjiK",
  "key6": "4EU3sHef6G6dwURRhEMgAx7q2x1QRYLj3n6kkas8wG6xU1vTudi81MQ7DG3vVT4TcvVBw2bw49WjTojkQK66Xw8H",
  "key7": "2dC6jYKtVCmTnHvW1jcSM3C4Ku84omZEp5iaCo7t2fpXXij4Zzqvr7gmqBKpreEPWuFqnWNUoe99qvrA5sdgNanQ",
  "key8": "3CZLatwJz3HSHF9ZeJwUaPV3NLfQXu8LKFAt6VzC9qqNypwo7HWefWdnxM19DE1oDYvNndoV2AbXagKMZvC4W7Nx",
  "key9": "4PBGoQqZCtyESgNsQAN9YdgsfaFgfjKN33ngT2ZeUN3boDbtyFaDCXzJGzNzjweaECMJYBpSMkaqWeNyai2yRBKi",
  "key10": "5xVdGv9XWrGzEAJekQkieAHoAcfHSz6KRCjQBGnZ9h5Wbydo2KE9J5DTMNaRk8Azg5QmWK6UCSRpnKQsLGJ7dFQg",
  "key11": "47nYDmY8FVyofLmksAzBmTtQdxoGiJtc3oLtEK3ehMV16VnVmBhcffCjNNBMpNP7qXhkJv5oGoCj6aWLA7xiEJhP",
  "key12": "27UThMS8Q9kcjdJM8GSA9nNNtiXqF4gqFJrVJnZK39h9YSpZ4kYgabETpVUBNuE8AzWp7vx8Dj2YpE71Pcv68oGN",
  "key13": "3imuFNxAoABC79sLWpxpvWRqQTizcmsxcS2SgXLgK17as4uJLQyunhgdfBvSu31sbxm38fnHKVfusfeik1fuMnEx",
  "key14": "2E1cdgrmmKsbMe9o1fEFMcsE9hjEXRiubaAjP1maRELgKFiqQtUU5yRmExL9Poh4gTDSCKzU4vqkbHE7476cTMef",
  "key15": "3ZMRnCqPcTegtP4NJta2xfMoucspaHDQc9My5wpedi6A6JRpZSq2ba5PGUS8bAmCjsJcfETkxgecAf4Lys4F6zzE",
  "key16": "gkfLnnQUGQZd6SFXfVbkSSukk2TMCgM9qmfTPnYjH22nn4qZZ4GRnDasot5KQczLk3DiqrqjAp7SuJonnNugXRD",
  "key17": "5Gde58HJDZ9cWKFXTmBmDxCxKj3QGf51E7QidVVaAMtsbXcXwZc9uzgY4WS8HiwKmPLx1Q2tneFC4iPXBFvoKc2U",
  "key18": "4oyTooEtmBqgWvcA1rprv7A2vRN17BCMuG8nViTd2jx6iVYUF9E85SNBBMcPcA6yuv4sur1W3hPdWw1LBtgFvC3b",
  "key19": "brr3b6t1aenphwv6H3VVVZ6yKVwQqwi8TUEvCu2X8dgzskbSKetos6MXQyFHCYuKSpGZ9HNbAupYJvg2mzxboxT",
  "key20": "54MKBBd5jHprAMfJUjmNjc3LFiRnJ6wtKL2SyUwfJ9bWBeS2FmibFV8gvz4k3QbwhJ6Fk4XYp55DHEZX3wprM2Sp",
  "key21": "64DJSwjVsDSTQVV1zBTys4rZF35ssmq8ruyHVKVjqCvmev1VqDN9zqcvybwt8Yq6JVMoiXzsWP4t4bizNnPVXJVt",
  "key22": "5qwsPLQVTZSvobHLofZcyauAGL1cfRVxXJEWKCP7FJ9pj5mxMkwgswWDHxnKW3Wf9ASKFL3JuShSXAmyE7Cu5SBQ",
  "key23": "2Wn9Zhx3w8gmbxPF6TcKxJ9nkSJTn879fvCev8p9sYm58d5bkJWptczTtMSzafUGnGwcJywSJPPPp3x69k9DoeZ8",
  "key24": "51pTLetjHPaAm8idaZwaqoSowRVau7cCibDDfRSJsojpjpQJYNnzimgLRqdpFeFSWDeQTD5gnkmxEzdc7rqCntyV",
  "key25": "5Qh8zjno5HuFoFRTjr1e157nPZgDMuBwk1Ckjpfk1NkABEBfr2KV45W5m2gWdwpLHkfVkooxQVpSY9PALC6N5EuY",
  "key26": "5yJbHbgaALPSTFuDy2QmqWR6SdvZVeNGvMcqsqVxh9ZWrocsG6Hscrp6F8Z43F8stB51cw1Lkyij67Lp7WCQn6e6",
  "key27": "5s2yUfq7TnBM2VJyMc23hd9RvPXeH34KqkY1kypLD3MVmXACdSqC3p3VNRumxKstmJoLLsZ9aA2gc4tTWkbp3rq7",
  "key28": "3qcGdP5nDRh6Yg4CQ6CZ6Avr3RGZRhqLrG9qrEATthhoseH7kpYaPcZDbYjvVgSu3ZGUuHDwvGSf7KmMdb6xb15o",
  "key29": "4pZ5bJXbNryt33XE9F8EZxGjAp2v8GzhfV8nCh4YFUuHGV6nZRnJSRx5hCfYFKQbXMA79a4TM4e1oqrAB1dSPHKZ",
  "key30": "2ffAqYnuxgYiYxAHss6ZmhYHhbKn9MQqvhbykx9Z3Q9v62r6Zq5ASik8Zi8HequmkECXm4DsyimH5EYMJNqvCnJK",
  "key31": "46j5TiBRF9Dz8XFnG1vczQ6qXv8TWwXoMHcKaQbD2aAka2mTSL1GpcyFfYiohiLe563Ch1ZhvLZe5BByEHXeqpYn",
  "key32": "7NeqgQRPiGYh2mbpzGBg5rDsvrCkom7BhYQgovVpZ61Lr7hNzXEpK27BvLjskcvZAY7DvtRDR54XjnzWH4hQ8Wb",
  "key33": "FpMVFzN42zrKHJCEbwTTEFdcGBsinnmMdenBBFYLRpAHfr8bUHT5zhZuRB2eKWDRAo6TPgWcBFEADtudTSbDYGV"
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
