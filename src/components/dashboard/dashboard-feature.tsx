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
    "5jG1vfUshsvJr5t1X2WR9coVQiyc9AGSeLLJFz1c4k3G1k8xM1Wvsb6smhqduLPoiASC6GzYSHonzpoHJPbs9KyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WLyaxuSN88w9tCTZG8zSuxEzHaW9dz1nXgiBKKZdE9UhhJZxJxoKHgTpFH2KQm2jpPaVugrHVgpsDW3bBiZTySf",
  "key1": "xN26dH1tPMZjbaHkzVjqq4iAbCE2UiNaJdefi1n4a3zrzBA3XH7WLRUbn1Ld7AUsaevnF4eVaX4vXB43SfupbM8",
  "key2": "4A9rCqzSGrSzDsfoYzDLnMv54j3deiorhrJQmu9yrZYiCNMNRDppq8E98CaodAmd8YvDfLxcac5sm5s4qf19JtrP",
  "key3": "JuDfq6Yet5ndyMMEu9SRCsfixxNSBCH9m7hn7zzjhbSCG6JPkUtKfVr7sDpLkPp2m2k4FFg6yoPxGm84dWwjzNU",
  "key4": "5G3LTjQvjatavUMqw3gCSJSm13x952XwCFiZm2peULA5dUhQsTgpo291sHNENKjWB6LhioiDs6izf9QZKcJouRHL",
  "key5": "66hJzokdYqaYmNJ9HBnQ7qMntr92ghcoTZwhDjqUFsaWGr7ZyPmjE9msFfRtFfCGM2zu2AtcjZVVXxFLbBy69gtG",
  "key6": "3gqMZS61p7U6K267o4b7SknzRp3Xy9YY9sn8PYGDaNrgDgaKHek8gvR4F8Kbm1TXqy1iwHK1RbUqrETxfSbgRyve",
  "key7": "52zaAxcBMpanXGzLmmnthyYqkb3mWtRUe6S2RKfuUeRjmVimpQ9NG8soxKF3udc7vdjkGvwpP4xivzqjPvynMQQn",
  "key8": "5JD6zhzv4BLsyZEhe1XGucC6m2uxJu8kkaDdEBdYWDkKMRUysnYKT6wQ28nbXM8vjGLCjkopekKKLEJLhmYaqGk9",
  "key9": "5esVqHwoZLAnULMUhgSzq9TYtLdbMFo3VZ5Gyq48hNkcTvtJG1y5RN8AJ1CnYYw19kqZctPCR82ecXBuXyoVFXZt",
  "key10": "55Efw2y4Yfr5T5Beux3sH6d3RUmb4oe8nviYLE1iNdxBaXL8nkpRu4sbUikXKVoZStruwqWdYG6BEKiuQuXuDNJY",
  "key11": "5zsZnTvUXaD7jRpZHLbMxM98gWuq4GMYkgBz3aQkiK5nkQ65A6BwoF3MWDvsfVezBmGBsLD7Ta1c3vDpDD3JCtx4",
  "key12": "5nzukh5Budc5hf9LrAk5q6gKtq1ogNSsKCbDZx7z8EHKF9tGMaSLg1Up2DkrRYBuSVL9r5h85TZw3MiQx9pw4r6m",
  "key13": "gj714jYobHY9e2i9z8BSGmy1Vpth38qTx4UMLnjuneDwHFVZWn339hJLp7t9LBf6A6Dw4zrasEJiwiqxzaB5HCu",
  "key14": "5jAMZrYfTiru6xtbiqcQFMHjGoz2XcxeJZQSuEJ2pMJZ52w1FZLTmDTcBWpRuxJhxEuWY93SvZPjbNGvah45Eufk",
  "key15": "4CKQnB1rZLEctHEutEbsL1gjSN9MqN2NKLPXNBQgypePxufBzKEpKj8AnXh3a22j1q1KkwWPvnZPqFopScRBLZu1",
  "key16": "3ktGEGLxnJkWk6xyUeQTMfm7QD6yZrCJRqDjmaBx3AJPZm3ctoHbTCZA3bQHCuHPUZuJuf9wwwTE7jzdaJwDYUAp",
  "key17": "2uf3d9EJFU5o4a7wVArSDnaTZjMGiwbshMBjErAvS87D2evCw7WzUahYf7EwNzdAJMGzQKDfkUoK1f4tZ3TqpCDo",
  "key18": "5S2tKa1J5n11vZCaf37jpWRFfhB1ij12cRjk4cRPFYD5SqMCk3mxyrKkmiy2eLC7zmJ4VSMFjJyoBRbup1CZCejP",
  "key19": "4WXLZW2FpshDiFMoqjU2sRNeFKEnmz8aZbkXcCwossb6prXVuqwVN2r23V4GaYoEPfaJw1zy7EDReQGJM1y9Krve",
  "key20": "4wHb4Rboq8nXJgh9vww1uDAp83JiT9ef7csacnxWSTvWrUjk9YBBDqYgSq4eypnhXFKkMdVfLYxDJpuJHbSnnJSD",
  "key21": "4H6fNVZKNuDT1nyrnSDicqLUJie6Bd1mydGEQ8wenXy6PJWfJjX4YhodWizp5x3XHoNSWaxwE6waQmfCzrGa13rg",
  "key22": "4XkLW6oyjbdmfGHEzRterjnYHgQc3pBnQe61XfC3BEadVLuziD2ybFsBqnY7gzBUbCLMxGbidVhJbFUDe1qoQ8z2",
  "key23": "32TfLpUxFNCyUdRgSfKicUabpFX5TmrwQMwcw1dxRqkZJkCaLgmSxPwMLLbtBmBnURcQNfnaFXD9JLugTaBVhHHb",
  "key24": "554JhJ1Z1mYZhxnfQExdRUQhtvuezT6svyTLkUDmxbN4iaZBnATWqwT7ubbEhs9uymrA9xgiw1PcnVPuth9qEmnL",
  "key25": "4wfF3UvGt8bQYALeYdsKGmwp8oWSyaRFdDV3v39FAwpJ49DdzKfJvQjVWf2ZQLgUXbhCAnMY9EFknfHeFfMB41NU",
  "key26": "5fVvQcsYjf4SRRva9vgnbVJd5g5EDkRG4tv5tTHKQR8Xrpf6kcXb9EAkWF89TxYh57UeHDwVtckFUJCaVhsH12x",
  "key27": "5PZMGZ8wH4eRqxh9sds1jWpcT49XyRJZ1FFsPmTKzL3UPUqLCQqVxTdT4MJQXTdVu8jxS3Wdb6dPx5qkL3waWv6C",
  "key28": "4gdUumbfeXGFe7H4xAWB1sPKfWzFN75YKaMwnwq7KAf2Zs6mUQqokXF3wqnMWaEBnwfT5bB64kdJ8vS6X4ysASWJ",
  "key29": "5otcg9uQQN1LaGD4t4BF8qJqEfSstz223d2Sbd9r3h29P7pLhbFc2vr4aG2TSt3wS47ut7SNrWuxxWRcnB2XD1EV",
  "key30": "2JSZ1kVoiC7kkDRy2gzW21k9N1sG8C6Eb1JqSuqy6YQoFCFc2tccHYkkGfM6W2EipkMVeCB914YbmWdTob8RSN7L",
  "key31": "4oqZX1C6iAvdheDpy5gPkPM5F63CGi6FJpzyDFEMXFsGdXBqE3JujNYCSTRdY5uCty2rGXGrufDYTVRXxGxpA62b"
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
