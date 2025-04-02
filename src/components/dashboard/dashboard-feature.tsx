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
    "2gaBDNY5xZRNYS6vVnsvMxkoGFZcb4TGZtBB5eBMxWoaXbgac5TDRXTcC1SYhYb4SCD4ukFj5GhNcevbdRmrNMt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rg3zToCZMo1ea2yaYZoEvHpYyjVQYnLgUELe5JChYiMQepyDiVixdWbo4jx4LavmY8kBQtMSXemoroqUFopCiwc",
  "key1": "YqCGkn2GjE2NoQMnpt9BGA4bnPbgM5R41KpVQ2Xa8LXn65N9aMgBZr4gYMWpMfG578D7DtpNVMScBsgoHcLALfn",
  "key2": "21iHjo7Ko2cc5HNcvioQu7zKTqRB2XkM3HgN6tcmTwuw4Y6ybanWMVFmLhkZHjCECR37864gwC5Nf8LCE6eHedjT",
  "key3": "HbvPFQFPJLurYJ4KWVuoQFuA4QhfqjbFrAQ8FV576w5T59fbCJk5kuhgzkAmYcVVzNFN8rZP1DudVftXDQPZBo3",
  "key4": "2DT4LMnWJ7paNW6Fznyx6J9YVp81EKh53rNg4B5WPxX44WwCPZtwfJKVCKU7Jw9rVNeFKETdCEvpTChqfwuf8mNY",
  "key5": "5CZLjume4r1PDS1SntPwgdMBvpx4boPJsx4qPz84JjhdkyhusVDoKyFN3caZFpWvJ6e4q41zwbbyNpcVKPFqRNSf",
  "key6": "gdKDdFJErTz9XLXREAsfW5KDixjUCyhS5TkDqkUdoGE2CRzpmjXBEFVnnxjxP4ngsJmvzUPCZWpYFkuh7t9roeT",
  "key7": "2LY7ybWJFSQaPkmeS5t3mLUx9VYB5kXbDRkJHGDh96Xj9XcAt1HehBny89MS5ciB2h2NAVisrZ8Mp4RibRTVfZiw",
  "key8": "21HDS5kvxun2XHfGorhHiyY17VzRquVu5A1SY7958TG9eeZTYtZWpN7DTnbkLNCqsesjSN8N8x87VXFutE5bCWeX",
  "key9": "52vmuJE48KQaaP7qVNnGVzrG9yAz4bGpXzG4NNvaudvGCMTvSnYgCZpKYcfcGjpw7LEVoeBcXE9tCWE1LQHHd1Y3",
  "key10": "5Z73JE4xb4pxPMu45iowZ9nG4KZ9aetSKuE7b9SrLdz719Z2a7SksuGsh24gaDu4QVFbnafDBG9TkniiYxoTYzFz",
  "key11": "21GgXuWv5TLb7TwifsJgEH1TJDoNzXf8R12J345brsNisc2qLi1pEpZVAxBfb44p9JxpeQoaAiKzuF5L7E175xHo",
  "key12": "SwerkfLVvNotHzgpXawPJ75fY4ydXZeFp5PRu3c1TmhGXgNFm5WByaohYHyQ7jcUELY839rutQrDfZBz4RFjEX8",
  "key13": "2Vrvy8HnjkkdCASEf5gQ3wRAjqSD5MVvY6ae5kxoaUTvAovBZ3M9Sf3GoepSd3ikANKbz9ybL98yDCfeazVZ2kWW",
  "key14": "5p2G4jtJLfxvWoY8Dum8Dji9L5A1MZJzDq7Lx9GxCj8Fj2uCXQDgzJF7u1X4kyLX4nzJxZxKBULmKtZdKeC2RGE3",
  "key15": "3exx7sZibVGdopRkbdo79JSbkT1Aak9TyyJnEMXEsRX5Z6jHz1sUhBJYPTg9mr3wLusp3aHQALZYV7C61EYc1Wmz",
  "key16": "5HveLKSPxScKk9zVtWffrLShm5Wb2DKsNhuQJUJg4PmxxWFJuNZtrU2UWfxC7CcUjgKm9HAYHr56xR6Z5T7eXV2X",
  "key17": "5FMVvvF2o3ANE6HvhkArwQwKVwAyPi7sFavJr34qxPKd9d1fdPcKZS5QMbghcia3PRem8T21dEhhjkEnnEQ8US1e",
  "key18": "5aXCtpTmx2duYyDYyiaFsYLXk9SUcSTtPiEykxBwojRTa8RLgUEB5j5mCjKx9EHpBVJJRND6bEXDFiBoWa16rZXA",
  "key19": "4TECeNULrTcmvYZNXbqtHeWJsDNPpQ8pcsh3H2xtg6LGyuGy8Wx1d3pZztAKdPKcQV8yAqzUatrq4UQG1PRZUQWc",
  "key20": "YX665tYRwedZKEM4WG1R8piSvg7kiwrtsua6QUuxzWd876kVjrz8gvKZY8PdHcFXknpAhN6izz7EKbcn5GaSZrG",
  "key21": "3kpstGZuP8urhzeby1x7cqzoVRu2B1pdwrCP7R9GcExUzePKb8ELhSvVajUEdD64ktH4LjLYiBgoV9thq2zWJRhm",
  "key22": "4va2FgrdVZCTT1RyeV8km6ACK49SbVs5Lw254QzmDEqgrYC1b98Cct9dXu7knCscQn7GweeQR5FBDZPFYx1keF4j",
  "key23": "3Jra2TKgT37CDpdC4ftFybAFtPWPCGrPSjVHXybkAWG3Lo7kRRCQbyWh5WJ1N1h2yw5QtCQudAyGhbBzG5vPxR4L",
  "key24": "RrUjBwjfZMz6uJR8Z9PhKQ39hqUUrMcsWMpo93tbGskvdozMxtJaDwgKECD6NHXYqCFhfomU4YiqcC1vcn8WzKN",
  "key25": "4vVxRste9kWLK8vYXtKA4AQj3ahDpyrqp3Jh4pD31gjbMhZGVYMhEsdpgAbjSYBvPELtLyHe4UP77qXFSjoHLo22",
  "key26": "5Sirt9r1qiFRootwGMbY63iVzvuDi6ojHbyw5HrDKi3BJ8Ba1DQn5BpC6k2wZa2wAxdmdGLNWrvrfgAEncwiN6ck",
  "key27": "9W2f8GZc4MbB7fkWx9CVn32ymRLSNm9beehGz9BG5z9viVVgR3giQ51CThAKrzGK2KfRYNskdgKZ7hrwwoNEmm5",
  "key28": "3hNbVkqvesQyaokXkK8LazGsiHguvd4j6CkTVBZjujC3DGU9qhzwCXsnFKjSM2VRbZpycvbm5B6NuLkWq33pDrsf",
  "key29": "5QdN6Loqtn42LG3Zkem75bhKLhrgpg9RM7XBGm5oLmxbz88WSyTJRyv9qVDUuXsTdxiz4bbPRKZe9Cwkt3dwkmV9",
  "key30": "2sCyaPiMUDbNPXLDe6yEpDo2uuJYGEfJVu4byxkyK9aV3NdJn8TQ2m9Pd5c2yGM3jtvj8vxXhzpvtrqZw6NYqqmS",
  "key31": "76m4bBqA49nkrvnrgiGmcFWrwDHDZhQwqqt46UyJDXkRXHDQvTbRUmiXRZu9D8pD7Sqsoq9A2vGE41r1SqYCeUz",
  "key32": "5d4q44eWhA1niqng17JYtVSgg3NkWTwXEWVRT2mtmWshQzx1EJMyXSpY1poCpeERkYNZAmYkgELPFUd1qGrrV8Qv",
  "key33": "53BtCJ8HikrN4q7Zo8GoMzBZDFUF5A7141x2f2RuBTwS57QYCZ7TNFSjpW2No67aJqcpfPZhRCGByADfddi58N5D",
  "key34": "2sPDjALJiieBFmhUhXoLBo6Ht2Y6cH3wyGvWvDXzCFT5GAyYEq1LrsXrfFC5Vt2G1YYEBTT1foJihd56SaQMALdk",
  "key35": "3rNhcLjuyVYcFoaufZ7PDhzfH3FrJGPxyAUPR5wVLH5fgpXRoPMyVDyL85bwxrBexBeHTd66jpo2SpHNhp5RQWSm",
  "key36": "4NXanCyn6ejnSQBbNRNvF23RuNsDfb7UBXntbdZ1vRbLB7F5eAcjG55knAB4VDPXRtAX8vPsKQik31CGvESdKLRG",
  "key37": "2L2cW3r6wZNwoPwkENUrQExfUfhxdf3zAS2DbHvJfU4Lnbig4YsmGipd3Tvn3Fn8WqWHou7LRr8aGXdhUq9s7giX",
  "key38": "5nc7sBxgabgSmQYGfCpsfLRNWQpvR9Uq4gu6m3sEhfrRfRYXKox3ij9L3oW7WwUVCoBaPswgprT2o9ALowg69Qyj",
  "key39": "4n2VE7BFZLCPFYF3dYZWNVvugofa4KyPYy1TAnHoNvTwRs4FCQ4JnwmbtqTHoh4VxfQyvrPkrh9hQm8Cy8jagizq",
  "key40": "63S2k9Z1LdteauDoj78ASKHnNUAQSaEdK2kupSJqJQZ1CnuseQ5bFJLk3ZJDXT1ViyfZWduoxcG7JAcmuDiQj486",
  "key41": "3aibFRJRNqrizLz17QkRXX4B5915Wb1fB8KfHoUy9B9D8CU5KQX2WFpNXPUvsi5eP7ZSYkhcu8YV5EW1a1ytZaK7",
  "key42": "5UvG37ezu9VguRVCfHojpDBDCQmGvsfmddFTuo7R9Gw145ELFmFgkjqDR4ZXXz3BZniyudT8aS7ZsAKe3DjJn2Tv",
  "key43": "5urSneRWU3bxpRw5T1oShuU4xczv74LoZZr6vFwP8aK7rZDQAmoNVyKkfxdwJNCK1bWbEhbvq4J9WeZRamMvYY7D"
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
