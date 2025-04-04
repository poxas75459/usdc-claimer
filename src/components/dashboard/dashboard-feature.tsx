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
    "oL5uAmkdKkCNjs6C7c8LZ9oMJfzZTMFGobpjEj4UtQyWBWEEp9xDW3WAJhtatoDR3mShrgiL78h9YkvwhfezCLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LYjTBfJ3zDuSwQRwxquaVuZ5ohF4hfo35Rh9ffAb6AhxTNxsfZKoR7LHs5WZ7hzXxeoETGmHbDnxjV8tJvy9oki",
  "key1": "4BzHBkPMb9VqWYDwaj5XmwwKJXxQBZhRS2GHeFPCixZP68yHZGfLWDwUc9ALiMrcCrfMSwRGXdD9QKoKZE5MyeFp",
  "key2": "4bTvggjS7E1PhXca7LTCFFd3jhSm6RFQ9SQKVLPkYD9YWgx5irFtXontyAS1P3TwAgET8xyxjjBrMRZn6EjsNYQq",
  "key3": "545ap5vhpf6cTpVnj9xYqm3bMksafqMTQNQYSjcVrffq9tDeJDPf9huKh97MxBV3WEyY6odm2D4Wr5GoaSwDo3MQ",
  "key4": "4cvoPaKBo9dkYfcCRBWwX9HWv5JjH2ypzYJpvbwuseRmXkgsfvUN5wePFZ7KZov9hEa3KTz6g7hMffnuea5qQqxY",
  "key5": "4bbJVrxkzFgQkCZHNxzGbXmECtKThz92evNx1FMgZRPR8CV7gKZzD3JqPwRhZJTXynr3ZGUzQmxVdYivkM6eqYvD",
  "key6": "58NJ18c6uRki8MFXbr6twFnio2K4YF5CdgX1Y1FvPX8GJWVD25VZZ2ySory3QJumuoznoq9bxRNub6joRhRAa8Sx",
  "key7": "31PPauk31ckbQLaApyJcstRmvEdbgSTMsxj3RLH5xMkKcYFWTVaPyfd8GR82WjrruncvKJZjPSFLeJjKVS49YqaG",
  "key8": "sESDBLniodtqazHY6YBdhZMrk9RCgiuLdzqVZ8nK13tunBharPzxvbciMS5fEjZHonJ2fdzgWyPwovrQrM1XZNy",
  "key9": "2sVDZKcke7aAAT8u41VvYDjGwEgeyfQjhrbsbHYNxux1RCEEAmai4s4tKKP9Jekc61VLDfnSgYFnruLwkT7djasR",
  "key10": "2fDVC6sBA5ApWaqoiA6mhaAoVvQxVtLQ1G3xoR74sWSgqcuwqwiwp85f7LQxtrXyh2dJrXhctFmKqHn1R5jS84Ni",
  "key11": "58QTuWv3aaJyeLs58WQc2noAY4rnC1De2ocguuRgXSthUBQKYonheGnBs1jMixzxtahH9nrbJMJJXBxVdSKkLt7q",
  "key12": "3k6zPXsPPfwzJ3FmtTpTCD72BvvDnBGKU3Egb9XemZSQdZRYqaaxgqq9rWQaTqzWdHKyPsYcGcDRB2g3LU5143DH",
  "key13": "5Eo3e82ubSfgjFL4oVvQ6xsc14nfUyiSHNaH3AubJoUWqkUUE24Gjv9FzTQcqBy2Pii5jk1HJ5FQVi1oHuA2LYKk",
  "key14": "Sn1zgjGg7qEwCw7n8KBZwDzddcGb6kCBJtBg8J6hJUUEqiFKVaSpndMNKjv6JjWKrx3GsgNdTGgs2aaFk9vW6Nt",
  "key15": "2mVddyzb9LumJHJ4HYwyPSLWPuQyNGeTAn2P9mMjcZ4ZG7YrbFPqPB6MiRW5QN2smYyuJYW3FJhSzg1TLX1mtvo7",
  "key16": "VVgg5y8dwjddy71t1sDUAQHp1YWVbJzeP8AHesijPYoeNRrtV9fueak2ddWNViw4QcWtrNb8DrfQbuQxtbw8qfr",
  "key17": "55fzGYE7rfhUd6nYW8HSXWV28sfdcAmq5mQfm6hsPPph68Xg5Xa5ZDdr2AtbNKDFbfpEK5bRP9MvCDcD8fW9FF8Z",
  "key18": "2cZZL4kt6LfWqiZPtqXDemQcdPvHFLcFyJaEfNnWDjFbPMAyxPjfAHnuKjh53wZ4jSzbnwfYqzPCMSAM2rxGUv2Q",
  "key19": "5Vk7SX4cwmauyYjcm5E7FY3WgZQXAq6nYh9sxQm27gGSgiAPBi4pj36HP3LuYxBnkmLgNhja4RkxSvueE3SXbeTg",
  "key20": "2HggsELyVcLr35DNFREzHKkpmLdUnz2a3DP7NwN9KNHsYgTDg997ZH1UvydvHcJ53CxegiWHktpZJEDNPQnUosUt",
  "key21": "4mGmK8jts12DXe8aUtmazBBRv6Roiidum1PzjUtRcimbfgwveaFMrsC9gXqHuer1CY9SDMV7EBv23WZ2LMH6ryRW",
  "key22": "52HqZ2FCMFcaXx2671PHQ3C9R5hEkmUbUfHVBmcVygusgfRywgi4Kwicd7brb4uprd9vpRpwuUMAnVP1NhSk1K7j",
  "key23": "2E9fMP3VKM22doCk8Hygvu22uHKgXk3dzYoVZKSTYHgk3Gt4uE5SfhLdizPj7YYzUo5vK65tMyrFzojmwT8gXvgo",
  "key24": "5zxEE1iX23Ekbcohq2gfZ7ofUqEzP4KZqrGv4nwstNvCjoguZm36xLkb7FRJBbbUnWZPFcmcwUDMq45KRR98tsGH",
  "key25": "41T7ks7GRtRsgZQ7HNFKaCqZU7rvMx3PqTADvHMJrbEHqMUvVu1mr3UJmdAzWmyLkhZLbX6gUTMZXrRBJ5wj3pCo",
  "key26": "EKhixLWH6DafVyKRisw7K26AjQVrg2XeYAHpcRXoq3xqbMHfM81X1trcd5Jp3JH4yvJetuiL2A6pY76ZvjFhMWj",
  "key27": "4Yxkw6BzEMvvbtyjvxXfZLqtx6MjE35WQK4Ewuc2shBKsuvtoN64ADLALkTZtqX9DDuV89Kbvx1D9yu3GUqYFVJV",
  "key28": "4sG6emBvv836xHs7aMgmvMQYoCwynWdLmmyW5kEz5j5SmbDhqFU2rfKBHnYvv5uracnFxhJdRB2sbidhLz8ZgGJY",
  "key29": "3uH8mBaBqDfucyLVjy4YSNbHUgx8muLKwQCvw8rLGXPSLb5c9HJjYKQ43gjTYCdy6T695cDUZ4XzEum35TwMjZFH",
  "key30": "3xhxhNSgawUCry7V5PWVrdGnPq5DVh1wpafVvzv8bTnVfa4KfscJaeZNxcbSnyVeyc2HtvjtRRQYmpezGWpKgEHD",
  "key31": "2MWwm9vUXRShuhy4KDrjBkabfwQV9Ya9CdRtSdc1bsqN9egiBPeGzLhWpLTAvSuMaKj3mHwYMkusobDUWhcCuBSD",
  "key32": "3S5oJPke8A3Q8ugQ7bEiD4sxbG3VQS7abDwbPKLmZL2f71qN7BBWJfrn9euPaUCYnXoJAP4f7NRARoMEVtX715Qo",
  "key33": "5unT6hxKbAftZ1Xh92zSTwSsN3zHox9nUsEA51K4uYp5MDrxzgXXJQFF18NexEtbntcgqqiSRcSeE5SBTfSmpt1V",
  "key34": "3DuHVUTjwF5uJCUPJy1qGb1EX6oRWeW87jmdAxqnFjEixTKJDzJGg41oBUhGgD1hN1Gv4hk9BFZgaspeRi2nMgst",
  "key35": "3QatomTFaPepEQfwo8k9gQ9aB8qUDJ5EwYAMtRzNyRg6TTn1d77Vka43w8gb72uastoHssEqHErHtKwUU5QFa519",
  "key36": "3sKHdpWZs9vYg8n4qWQv2DbGyRDCxoDGgq2avrhEwcBAHbnX4W7aepukHRyqHQFz1AzxY7wPjc5zqnv4YBW9DieC",
  "key37": "2nfHv7Rgw7unZTgvNzPp6e6CbmW76MF3qD39e6yzNp2zE9cNm3H7qRy9aHFMXc3VGk2tLvg9ZJpfLEnzek3RPRBJ",
  "key38": "3debBcnfBjfe6oTgsqw3qhqQNkxdK2wVBiTqeUoEz6uBe8rs6G1xxfEHm9jL8icE9y1Qy2RA2Xsw7hPjY8g4x9V1",
  "key39": "4gA35AMjU2GYrqCVg3WVitVehtDHdeUYwBmHnTdvk41sXtn6wJYKYbSrMvX6gDtsyCNDgZewSm6xc4pdh3sryLe8",
  "key40": "5pwVn9ktSv2bU79oMdtMwf7AF8UBBeK1YRipKyY9761VqXdy1RRwFpuG4bKLLh1eFjfrAcU1nFhqjoqoXT7Q8koF",
  "key41": "3LRUAqsaFxrA2dGv82cLpAgNLe5EVT6UD7oHhezzUUasUFuhSRr97AqLmxcVDi5JWFtXseSgNrvX5CtEH3uc5Bxi"
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
