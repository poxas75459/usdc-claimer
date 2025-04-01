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
    "4DN3uNt6dGyiaKodd3EqFnwpab2au3P7dyBL2XDKAeewHkCfGPMCuixfWuE8tEKiBqHiH5QafN19KgzmPE2nop1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uNxquiknW8u3jLMbvVTgjdvRVHDKd3DvHZRY4xW55VYpsea6sDCnqfn32s3Z35jeKsYHmnWWVg7j7oe9QTWSXaB",
  "key1": "5sGQ8NE3DHXTYzYCbam68KeEQwcGH62oojkkUWkFKvHzVdN6ayBqHG8nAd4CgB8oR3AsYzNZtyiJHpbuVp7gvujj",
  "key2": "4hHZ3cT7QqJUZqhBmrKfxn7bt4dJ53DGA92h5BvxQdT9NhnZiUCMcTR6mdeipC9ySEpbc3qxbCbVcRzpjTmcaTvL",
  "key3": "2S14YNJhUMshrhPrURLMmhaPy7XqjVUhmBeDC3hooaYm9XjGaxyLq8x8r4gp8KczKLC4jKheKTqaMGGi5fV3J8gW",
  "key4": "3R3zon7r5Q6BcEZMwQC1Uz5B13LYcWFA4EF7XtSqVducJ5QEa27NgFfgcfV6qmRpBxfAXPy8e5sD1vETcYWXJBLg",
  "key5": "3LUShMArmmMPibpyKYJaDm7PTxLhbK7SVfewmDCGofLZRyzZ2JxWubxtyjkrxnbSfhePeMGwN7mnHLto9EwqSMP2",
  "key6": "5YQ4uS2Qo77VxpsYrCErgELUfsFbZx7sVRPVxKJJaJRjPqWizU4ykSXKmCD1BBT6HXoYsN4jNcaXuWj1VYDXEGFw",
  "key7": "82wmQ5TWDYGxgYvxGudfvYks81weZ5KnawyGtighu8pAxCF2Vs76NHSPRxABbbRykovftbE6zJTJgU244c6Re5h",
  "key8": "4KQNDmnzToBUPvwWsWfWj3L4Uh4w44irnkksEet2zBLayBynmxWjUrBPW9xyWHs3voKeKks5gmma2x5XNFNahQS4",
  "key9": "2f3Z39yYG9ak18MbkEQ9KMCMD3yXbRqqvQ4tmMBxkdxVtQxXPzVaQJDFU3srbwu6GadmVNrGMkmfML4DYUZPtV51",
  "key10": "mzE1qassWmfm8vqwpnWRBdWoumQ3M55q41psy6Cj6DRBYW7nyCHJWfzX5KU23fKoPSoZ5Q8V3TXdMqKLwjFxiRh",
  "key11": "67fmnzwxTxEiXeoxzyQSk8Bx7VjnzrSATp6vE3tA7RVRUEVKp5ZXKYS5hrs5SyE5NS56eeZTJcG9AJxpCjZeieet",
  "key12": "45wGDsw6DeWD7mVygwDuKkbye1sMxCcWCeeYdAZ8TtZtfZeDvqMZx6aWUr5ej3xZmtu4zw8HgD2wvnKYhj1XPbuq",
  "key13": "52CrCcXaPNd57ZxdaJ3D1aCDpaA1f1cqUsopHoLSGYBs9nmSt5299D4PQHEbJMtQFfVhjv3W6VGF26NM5foimZzq",
  "key14": "5Dub5VN5m3y1u81CbdiSUcMwcEDXcxsqugoL5qg7hdppUeqcgGNr1Jw1auT3RfgV7rVJd4h3WfsMAcYSA6QbWaBT",
  "key15": "2Kr4YbqLcYyT6ppTBsCoEozHpa36xmZsi1ZkpAy69VqA6K3hFgek7oe5LHaJ8wzGVxBZV6PjnmZf1BKAx5zaC8M3",
  "key16": "2xJdAmPrvjSy3NZTaiTBEhYu6P1knfDqYKX9CDQYUEDGZeKbK2YEsxiVaDoicUYrK4CTBwsvHppMBhsejKBUSyLx",
  "key17": "4XTqoehiFnNZWeydoBiaWkwuh1FuncCdZb84kcVyZWWqgttnBReRmt8BeRggz6VHXBnswhHCmJMiCxKqDft6FxT5",
  "key18": "2JFW5XUbrGaG9MJZSDrRxJ3hZSupLJzoYHsvWXYnYL2JjsSjQcdE5RtzCCQHGdczJyWvGx9dr1DZ9ydVg6X31w7J",
  "key19": "3LwdBeBhjxc3gxf8cdpS9CRXTnLAKcdhQ8qp9WRSaHmnVc9WJnxrhHaiQHY16mcWW9vp9nwkaNc7wSUQFww4n2AV",
  "key20": "ZVMpBTz6PvhRk38pRzB4VJjbGzx6Yp5jrXyuAr8eSuBoex4W9JM2WUYK9MsQy3GffezgDJpHeKj9GNt6g1yXaKM",
  "key21": "46JffGr3c8fMMWutgpcCDRz3TMKv47UenhKqHQXN63TvoHPG3JYVffWJNiCwwzoq4RHsWFa5x7hgZZ3HpDXwsVF1",
  "key22": "afNxCC7VaGTxtmT3Jo2rUV4KmBaurF7YnbSg3cnfR6mMTT5WbcxgFRCXSDTP2jiXo5DtLunhde84vXyQTjKBPnB",
  "key23": "2gFX56TWH37D1N7NbNDjkEEfhzTRZWakHzAdpKBnThL6AhR3aanrPFM7wPmZo8MYFVhKTL378pqUNt2mCd14wRaf",
  "key24": "2gZV7ycvu6F3QiVm1GUMbvdX6xHy6EjNL67ESfDzMGjN8jsNi1hqKXCEyc6JVwrbihZZF3ej5UnE2rZSzrUniJz",
  "key25": "4XfGvuCQkyZ4kqyTkaTwf9dvFqnNFUKCdhiwaFvZjHQxKkw7WK2hTANkAieSfKs9cXykdKsAFuLhaJqHjQo1ihoC",
  "key26": "29M5QggXbzxfvyNdEjixhboSMKVr9nqcrsfYY8HYGEZPWnNMgA6zkWwCrvtQRe2kVzkB9638TVAo2qDf6yA5RFP5",
  "key27": "38G6jhp5qNwNPjSKvUQnjL9MiFLRRvd3tNaBMmZPTFEto6wrD5j77B8waiEcyypS5iULwzifuLQuHgGmfmPYVENk",
  "key28": "3EjyTWbnXEULthaht8vTmLZMHWi4hp6ZN5aVkYbKSj6sF8S6D1UBDWNeBE9xEDfNaZX91oFqHeZrJZhGqwqdhrZt"
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
