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
    "35iZRNGwxJZazUs6V4V2XnqMnhq6iGjHM1TBNV6mrBcX8oLUEXZJk5vF9y1BZKrZ9PUjYTZvbYmgbCY59zRhNYk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X2KErm6y4mqwUrQv4udgtvGdL2KpUPWuMBM3orBCZ4L8DfVURkcEQezD95ftfGbYf6hwCj3VFWpcAn3WnAck9oY",
  "key1": "smmvs2nGEfRiFBw2tUfwe3X5tGfSKxXzUAsZskeXyX1uyc9CMB4WnMmMaxfhSouoQMWQ7eE4gSzPbAtKZ6XN5kE",
  "key2": "2TxDTtED9yfo59DVwzFxuXLri1gawotvtkc7uZqimt8ApVf55SBd6tadQSqasEyJaEB81i6qntJFpdvnf1NrJPRK",
  "key3": "2dJks2ptSYLjaerNaFSrJtnK5xuakomH4zDwRZsfAvP5utwKDvBjyMDjKi6VkxmyMzCHb2W32dLwWxcj9oNoJJsC",
  "key4": "2GWmmEKAJNu13BcznBNEXc3jSzpBsoBLThdwfEgjbvjQUwDno5BhyTPXo4fv1D7gbsLsPMz5wJYQnsaeEd5eAts1",
  "key5": "2eE8yMhG2BkWKLatpvpsetgzmCFjsZzScS3M1phCKDy6EiiCUEpDKY9FD7ZEQfnNV8ZQ2UARVKoGwXbzVjw975FX",
  "key6": "ZYc6iGiqJu2KqR649YGsjYyKTijZtMSFYFJid1uALUjV4HaJcH1n2zRMYjSrvFc7C2cBJreQsnD6pJ777LuAsfc",
  "key7": "53daQ72j8fHB7SnLSsbn8ut19fZwHJXMx8odLmuLD6FvsqmqTsBzBPd835f6eJm2SUVshSmdiVe1dsKMozi8uH42",
  "key8": "5Y91xYeNLfVXA1AYDSEzYoNd5shjY1dfsuBRELPzqVcgekaJ87ZvHddpEDqr7z9fVgymdFMkZHZdjRqwxWQ8YWGT",
  "key9": "W2zrVLSm4kwnQde54GrLVMdqQcEw83JUShZyhiZ5mAPTJV6umLVyMd4Dw3eQTZ2T1Y65ikTFDwkJDjSxhBdyZnB",
  "key10": "1uLYWDwGDYZgDbW9EfTuApyi5Zm52j7wmdb2JTfrD5uXJaYhK1awj3WBw9tqywrdMx6BT52Znpx52ZAYYA8kfQN",
  "key11": "5anm1FyPyJX62FEcmZy5wbc3Wxb4nYzXWVFC5HEjojKpkRWqg2YphVXGu3L9zm5UF5eqv5xdphnRQPLgfesQroV3",
  "key12": "hD9zVwVXJfT1DVbTpzDgjTs8TDDvwRY9299MVSatzzmGxCvzPbyXkULFHNqBEktrLE4YkxbrvmYkgjrMc6wtbUt",
  "key13": "HeuskQeZF7iP2ubz5EginbkC53GZHsXcetjinZb8so8z3yVVqYMAqdV5CUzoQrtycnDCsyPw15Y6AgGozPRnNe9",
  "key14": "4Vow6ifz6yD3chb98oEaNnvLGXiZMafjgLMakxkG7tigv3euZAAeMXSBRKXSbV6ezQw6QfUpzyCQJu44uN2uhMWm",
  "key15": "JCVwaMvaYJmMXzSGcsZnsBtQvUtQfaYooqZ6F4Uco28WZepVAaTHTdr2SSzSJuPxk1vTnds2Aqd7H7fLV9f8hNm",
  "key16": "62X4FN55pHHtENa1HY7CkHA98KRBKKLRRinmphXT6xHqYSopqqYKdfiSWFcYYYQe3hHVnQpzZwEffxp6biTFYLj8",
  "key17": "5yt2fum5SABRN5Dp1LtVhVUA4jATEM6Rp2bsSKDDfMnpiMvGgX3U5fHKYUEaiD4U95rme3DWfWXC11MSi17EauKR",
  "key18": "3CoKW3b8n4jyqGF76WRFuG192ugdRhVnTcB9gLw69BFbNjxdXVjtNi2HW9MuKxaYCATfpyKgypUmsobcKxHSSvw8",
  "key19": "J9jhemo8XT6cRdLzjGYAHf5EHCWzu564CcjtzHAsTr42EXhNd8bKE8UBLFKfrTzdP5jR1xeKCxJSZkTsxXRkvuy",
  "key20": "4LJvnQSBbCNKAQUYkSwXDCVNw9Co1oZrbAcr7s8KND8rVCyCqmSj2eqC67hHiQJA3impDFPzYq31wvDJgcTM3YX2",
  "key21": "5JTUSCh7eZyar2akcxrFPU21n7jDANLj6SqXjWbPDh9i22ssd24rugtz2zuinZhj5foX7hmagKFoEm8FSgCHjPN2",
  "key22": "5o46fh7ZEUQwgQBKcXjLi3buK2RBrSfUaFdXPJJaRr2eQo4ZJZw4cshWyZWzyf1KYNXznNAr424sMxAHaZ6ZeQc3",
  "key23": "s4KYrXxsFhytY3Ciy2h7BBhwyBsRVjHMLd8s7NVXNKqXReqeWyXHLdQKFTtMXPDjqfpeosebJHC8WsALYkHybh9",
  "key24": "5KE3t3H5ugSQKznb9TuVbGYmwvAi47Da2SpqHmTABnSZVVVegod7xRTsyehgG3Ki1tzLkvRv3BuryiANhszrnfVs",
  "key25": "7AwdyFNVcoYMoSqBt98bF9M5FFirc3m3vU36GvLSdNtPTGRkZRWhfbiVuwLogha6iWxkEyXF2CHHDqhMM5SaNMS",
  "key26": "27Cp7Bho1t3w9FPXF5jhJ3VozBxqARPawiCy31PgaCQ7HYowybRAAhUUPhEZX9vgFP4mPpmaMzF2koPk9mq2howm"
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
