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
    "3r2893YGcPEZG76B1uDKhKd1czKwomDsh58qDPuvspmr1kHkavt9eLPyKK15koa7aKYtfTZPMjyk6h1rHGvwafm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5acF6VeXpxqgQRDXHyTKeNjzPbnpZCJkYWcCcpTmDh8t9P1MydaTD3qCVdYJHA7AzJ4GMafsdDwcbSxp55t9B93B",
  "key1": "31xA8gEbQtEFa6ZJiqytfHWKD1skTG2X4DgGxXQYsV8WySvVDJN98hhuGMQL5peYSckH2rfxZWPw1NMLzFTgWFsW",
  "key2": "2X7Bcy866qSFKzx9unNxQZC55KWKs9CjM3L7dZ7KsAAi5e4eYQcXVYqpbUnudTRuCseooNJrJCSxdhnXBp6SuQps",
  "key3": "4GyJvQbi9gDpjPPDQBxmpkZh32XxeYUpDeUZirXFJoqPAkxursDAQNjgDX9M9gzjcc1EjNVoD189LA4rXBWj7xV5",
  "key4": "5NbNpgN9Vq4TM86jDXasnhMrAmzRdygwsPZCqzpd34HF8ATWh9osDa2aaiDLbu94CRkWvXAAj7pCyKxdqgt8i4kh",
  "key5": "5BfzFP8rPyFo8k7FYxa2ngQuJUewtpvGcwFzgE5M6vez6LKxVmFSsjfyFDJ77sTfFY7Y7Wf3wpXFYPvdLafoBRuT",
  "key6": "3dG9t5RXnUPC79kXU9zJoYCwFVpUf3aEwsJ4QQnN8ebZpFtPh5iQuvvUkgu5xj97NqxHx7pCyLFjmpWympD3rMRF",
  "key7": "PsMg8NxdP3DY4bq7NsCkcLCRDJyGSkZtTU5136nKXssASDSAERH2g3M5VdAn8MiK1HFKYgUExE3ifxU3x335abM",
  "key8": "5MCydhuSK7gP9dAFP53cokgU5YqdFzM2yazoyfncciPJvn19YeHJPycy76GrJ3vorMGQtdr1E3xYpwRzu9GyGwRh",
  "key9": "3fYTChQruEwchuD72GXvCDok84pVhCLmHSrLEeUwmJxDbsG7gdK7YtGHxSn8KVDoXo6VhbRNu85XCVy5W7V7fGKr",
  "key10": "3GcFgsTcEKQ1zwnMPxcyacKNMY2kJtJtFAsMFJVtXkDkRfiWEU7WXyC3t4XoKdB7y4LYBkgEErj5empno7TY486g",
  "key11": "3UB9JxZBd5V8syrPahywaLHnsKTHTxTbBogtLpk9o5tfjy7oPKASkXnDqmzvnRSGWkUazbunNoByZXcMAo4oQHiW",
  "key12": "22jHRJwKTLJaHGU8T2tEPRtT8aBFDQwWiJBwsMvdTYe9h74xu3nYx4kpDbbFN2xHCcHyfNxTYapFegGfTDs56sps",
  "key13": "3z8j4njfWrtN9fftdbopD49o8K34EgYZVAmeMuEaEJhsE1ZH66rhCBQaK9sEHwdPqZpGCmb9WrJGVPB2vFg3WFwQ",
  "key14": "3twxZyC1FAUb6dtJhzTcTrwuXdjk5mqqEcqu3VmSArNuzLcDyvPLJnXvHvoHqFeG3jLFY3j1i8yepqAymDnEjqbg",
  "key15": "3x49arFX5csLnrcU8rw5qWnGvYGsHDXAh6XivifposVzGo1AhPxUZMrXwCa23sD5Jg7PGbroEA4P1JieYwvjt7RM",
  "key16": "5VGbfPj2DC2KtjNmbf44gm5oB3AHpEo6T6tdzbejknFtr3G9AS6fNKmGi2fSiNVNm29HHrGHdrgQdchoSnBfe91c",
  "key17": "5DxYwphGuJTRd514tPSCJAYageypyttmNPC2U3oxDxsmtGURTvUNcqchUSnk956kYHf6d13PwGuzhR9fhG7pzzMs",
  "key18": "2KBzbQPwAh8X3yfxmwdJQW1zdTydyXsdbAhn32Sr5RC8CsEC6xXAwhY21yQ4RAqrQ9F8cgprnx994iw6xAZiJC8u",
  "key19": "41gCrPsK7RFwTgLHLFAkwsFnw11VSHtySNbXi8FwBJRCtMkA5wPtgYmuD7F6TFKrPsBe8aGX79ZL9ER35WZk3Dun",
  "key20": "2F7JcVX9nM6zByKwwmeicba6QstrVd22d5vkvzbLRDPBvmYcykHq5ijzrSBcCWsf8CTqfA7fVgBmvKDJELWXJ3Sd",
  "key21": "5hTJkMsSrURTh88CZ9Ykhu9QKPLUYTcSPHLVGfiDYoUHkddcFvq4e7ZYYDuM7WdVNRoWEj3ueHa3fETZWxv3VXKN",
  "key22": "mErMsxu7NzyVGhJgU4LDnCGwYqTvkxS7rAKXYdjfSvnvWnNppbY8nLPamzBJuHUvmSxaG5rG66tYC4xcd9oMRU1",
  "key23": "3XdhZPmREHm236u2fg59qbPWLcVtWyikbYnUhM9ZjjApQSKHCfCJ2kPvWemjYwY1EYR8JNduQNZTXRXA9ZfiMhRG",
  "key24": "46PDTkWtG8j2Ghv8E7Mzm9BD1QpV4XgA51Xdojxb77gjsJnyGBt7F7y4aAbj8Fu9VnpuuxmfPwqRfuiYtd9YmnvQ",
  "key25": "4NtRkiERo3Tt98MSu879mXRFACzPkVCuheykCrUU42kQQ8B4ePguGGb8fWUfqH31GawYwoVjwPuzid8x1ehuph2A",
  "key26": "twKX4qMNkSoCSfFvNVg3db8KH1MFSuQboHdY2WTmLEGX9VgPkRu5W7TYNcmoTmwroRkK8ebMm7wVh5Vb7V83eAo",
  "key27": "2Duxcpdq7nd2T34KSa1mijrv7RGMSyoxqo7k3oSRpHBhuTCTwY6wdTN4itoyB85FamspYM3Qfz898prwaVi3DeSa",
  "key28": "48W79rXsH11kKfJsgqN3NHjmKSs7bcyZjLu5wF1mNKzqmaecfrArhiJoqNvATnyFcJJNEdKhqF4Eh5DzpFoeyeXW",
  "key29": "4okv57ci6Yd47Mb9oZsMtyQcxZeqvdyX3WV8mEF2yWjDz7vu476dQjJWprq9F5E6eHa27K8GEC5TkNk9cR9s6wWp",
  "key30": "61wccYzZ6WfzhffYYApwMmyZuwiMDX9rV6TLsxBCiGFFTYQcXaWTyB5Ved7nmzDotVpS2ES41BPXJBEhKVhWiLmv",
  "key31": "4eWXgBaspbBhUyPqFFw4cFcykTz3foqvunzBtdsF9QgrmPzpU3inD4qo4UT9djNmceSoHQRN5pfWNJsQ33s1nHsg",
  "key32": "4vfY3bJyEEHqTJQTkmUMdssCpDq5pcWwuy94eZJy1dTXHWodw64cVyH1dAxYHUtVCKAReBoRtrT3XDHkjvVBWgWv",
  "key33": "4CvXskX3TMzzDk6SSp3ac3jP7UfFfuRNqYT3GKdkSEWw6QitTcWghJEKMSTWyunoWbF95Bz9zUXAgnHPqFkX7vbB",
  "key34": "42jSaCLegwA6kr5rHkXrs2Fik9H5WTTd3HgLRAMxtMudijWTXDM1ecew3j7J214a17Qpvgs4sUWSfDYWBmKv2mZP"
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
