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
    "3b5rtmM1kkC65HjpPKQdQBAHGjZiAAGnJHB2SdznnvJfWSguhj9rC5TN3M4HTEw2txznuhVr56x3PQXa8VnmTXar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TJVQEwrwzAuvWGcYkJ9ALNai4GjbcS47HiMej4NsJXZpddj7igv8RB3YZTcLhCGmyytk5hHdn4j5kviUPqN8euQ",
  "key1": "4TRb5zc1nQugeitTRdNt1g8Wdrk43oxKxxPujX2SEP35QCgKKzURpU2RAP5cEV5awktnrkUHuXKzBZibDYWmdzS4",
  "key2": "3rxgbHQw8uhxBzdt34d8FNm5HEXSwnQaJdpqKVXVUkC95YCovKNRnqxUSnWSJVV9wG9NhYRS2QQZK7WtnZ9DJeyS",
  "key3": "49skTbBKghCJg1xjMqejsFoN8U74jbNLftzVqcBsWTvdEQ5vGmXTPxDduz6tD4HDCdAT8xmYgHrhUrt1twuwSSvB",
  "key4": "ZqES1GXcqSAWJDGPJ6ehW5vn8ejMtEagxsANY9GNceiz631qG1VJ5WMZi2m5fGaMXVWBF2Cv3uJUgAAxh2h1ddf",
  "key5": "47Jy4HzP9jpcDai1PwKKFAGaADBXm5gJMTpyBCifbu28ZtjQZPPsdJ8vsAM5XrvCNjSJwAGxHscuGhQ7btWbfbap",
  "key6": "BL5QCRamHYGAdVh4aauRtJio9DGGFFE7ENiDCgRhNCC1hRae2sAyX3jLPfbHxbd7K195nG3FUGKaidbY82ahmah",
  "key7": "HW6kTfYG3VnvnS8PrT9vSNpe2FA8k3CEZVZ5ynhd8fYgUeifT44ViwkZRD6KAvd3WjHzPiWLNXomNiUJvb2ww1N",
  "key8": "4C7eEBkk5gyaUwk2F8LMqCuWWu5KDPw2V113vCBBsiRzBvT88RsMCGuRkWfqWQ2hG8GM1kk4CoZ5paagMHmamEqX",
  "key9": "3z33N2aXcfwF22p1m1UHYhLfTVMppQbFh3miC4BAdXvfLLqxavhxCTEegeR4juCSMK56Paui8QjaSN7R15JRSSTX",
  "key10": "66BvkT5h3132Zs8Kq6hBe2dCU5iBPGTDGVN6Xjyi36Na1nD5ZvNhu9iUJD11YRg4VuCX1q4xc4gT9aHZaMRsWLfr",
  "key11": "2D1aFB8EqCZdwFC62Yj8Zay73DJyHBn7EF2KUnzstKC8Npaa9ZK11zwCw8NVn3mgfr7KMKtC2vhzjmY36J5VMouE",
  "key12": "66bxtpjJbbjMaPEYs4t6VwTjRKde9oNWCtXWj8dCVArbrrGMbtMmjy6BR81MEcRt74qU7F1dzgR71jDYE1pJMEcJ",
  "key13": "3BRRAJRfcRrJ2JEZeXjhpBc9J5Qbv934EpPzkv2ZHt3gpu8YZW4UbGzpTNLDdgRQZxTyxeWW4fVp3D7Zi9AUrpiQ",
  "key14": "515JHVNbZZNDuGSp2u9fNBmJxhvrGMWYcQWo2hR4CZVUkBMG26mWcbWqso43V9U6DWmN5hGUeqKogjtAfWL4xYLj",
  "key15": "1UcQXKgtqTdEKQjbq5ufAkzU7EfqwwgsFHRPKiUCBmRZqRsp7vvMXKtZ4i3sN9522hiNK9KaNbs4j3sHJs4gz1e",
  "key16": "5JDmUxJP5oNrcV8b3J41D8mvQqjLVofSKis1cL3DqvBQGuT2hRZ8GZfhBMYcnmfsVL93Wt6J2DpW1n6ekQRfDHfw",
  "key17": "32hwuVki2FwV9fAWahSDaNxnVjkkMXkvgeZxF8HY717YtBtXcdUrTFDmHf9RPmVCLUDSibcuQ4RfB2wKX25bKY6T",
  "key18": "5q3rCaGhAkqfDfyE6RZCJe5bY9n1k66bW6vPgZgB91Z1aDiDDY4MWcsUvAzY4qCeMHsPxfSfZmNNzWpNywhgSLJn",
  "key19": "qiFeSPV1hJXboiFB6sqKoPvFYiFG9xGwNioMd1SW1yDniGvufVJXxLDnNPzuNqJnPq8Vbcdmzi4k5zYUHMzDUrK",
  "key20": "4ZMJCrqASuggtfct3M8PP16FXrXVgiQbSpv2rVp9HXxsMBN1r1VmjMLXgoL2jjBxUQTGuUM6ebXJGvcw1zXp8mX9",
  "key21": "4R4QjsadXxyb3dUwgyp59MSvdXJEshBzsPpfY2n6mnDE854eUCZ8KeqLoiNSkU2GSTdNjo35ip9UiGPTYt4XbLeq",
  "key22": "29bK8C61NKYbV4MKVa7AY8txZKDqYq4TwsX8it5v3pUchHoFSH9UENFVYHX2DGCfteeU19RQNcCaq2hNgpwQ3hPs",
  "key23": "mQ8h7BYwRd1v3M4npAjebVkLBWVvcgiE2UcBLYpf1TTZTj7VzCnyYG2FGYkUfUwd7LUaJiCiZGQwdRg92qhDfrB",
  "key24": "2inMqJoes1L4M8Cymbj5NAnWBMnfbggz8tLHEfLQK7do52J2HcYJQig7ghU27EYGQnVAXqc1STiJG9HkgoKH6d5N",
  "key25": "4Fe5uAMbzpsqjcse3UHWm6QhRT9ov8DudLiQSnGgtYNU91dJvVyKrbZ4aUuBANmCVHd9Hju4BYBcfZ4EvyDBpPKJ",
  "key26": "3mfPWGeqyxxLXkBPe14RmMDh3CDSm97w7r74NwKx1Cx6ZFezVWgjgMuWrpXp4qk114heKBDo1gLM4mvX2JMRgEHe",
  "key27": "w8fQGt5qJ5c6W6dGrewf2KvDuJy1J4nU4kK6p7CJvbrCBfasMZdqRvqg97YcFLsbw1CpiCnh2dkmpke9dxMNQ6N",
  "key28": "2dk9qAa6z5Fnzb85hjz892uZv2snKBodSeoQSahrjyjK9BbMXu3uHzFFZzovMW1Q1AKXaLJmtdV9C5FawCHEG5T2",
  "key29": "5Cxjb9djTaXLMQYNrMF4iAZRovHSb4Po6S5t4PAFYR3AJBo4hTvvRQVfmfccrATGGu2vgvtX8RtQUTFSbefE7yQL",
  "key30": "3TKwYsmfdCCrwpH1XxmtBn2VMwXuuXmawR7FAu7rn1QvABzfx3X4iSHeB3wwxmZmMECmWDopFKXVZ5X6YRsd1R9n",
  "key31": "5aPERSAyNA3J6bV3gGtApXkqfv4cpPhkL12HSdnd5R421NDNQYawKHME5FmyK5j5tTUc3nhwRwsDAJvS74XLFfgT",
  "key32": "4SRpL3uWTDTMBCZudz6GDypb5TSv5QiRn53BFY4R3Xw8jni65Jrq7NgCwcQAJXLyziBDNCmE8uFqxjaVjmyEsH8m",
  "key33": "iUc9y9bLGKBqb5zQPxtdaXVm78VnirxvLtnVX3kznBQFDiNaGcT668tZW4ADmc6CTZaqj397WvLS2LZXUjzDCeD",
  "key34": "2JTHNgvcRznjk3FcSnGRexaSHe9M5Q1cdwrbzQfki8SEi7BJi8XnBvzYunPoAkQ17bwj6DgjnDBKVhY4ey9PsXLi",
  "key35": "3gdpxc7z5P1H8NjZA4Vg2ivUWzFf68HUcyN48rPxEyNkfk9rL9Ufwd4TAEWsjtLFCWqv1pkZZchgisEQJPbP1U7r"
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
