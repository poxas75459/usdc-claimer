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
    "55x7SZpVquXqbuDcHbbVmeYxr74SJVRZzqHLDvG6esojVp1Yt3Ucy4oy97MabHVvzgySEotBD8PYCYR2X2xdmN5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uwaj4gLcRZP5QTtop6TsKF3y75vLyN3dsgsDuZvbkBSqttB8SjkygXD2oANpU1rwSYQw3v3AKXZmZEdJnTghLUd",
  "key1": "4BhPKCejX3s7Am9HN5EB8H9PKTFrQETsDEHJ3PZ2qj9h1iQYacxbYMofdinD2eDpC6JZKeTWBLNGdbz9X7XnJjc3",
  "key2": "4q1jzEHdfhwXUvYX5jRV8wvonA1FsGV7Pf5dcbcMrUdNXscR65TCnqDkQMhcmrHDyjfejv8pJRQbLPg5z1nQf3mf",
  "key3": "2Z4RS424LtgRDwMyDBYdLwqWJWABtgq77JcgznvGDKdGqCcBNoQ3f7QDsYzo6nsVMuNcWihr2VUeAygixsWkfvfF",
  "key4": "4tXwHVQPk4XkpLBYipMvhk1Em8PLL5tSPSsc68BndjRgK8UnxxHpP2MnJV28y1xxD2UufA5uaAA5oZeTjXZJqCtP",
  "key5": "25VXTHv8xioJAMuTBxpp69swY1fdX6VA7pmWxZHTX2qvWrh4Pu8HyTKRToh8WkhwCjtpzcLxqv19QvPoMcNPTwmA",
  "key6": "ZQuwacjfEoGYYUQQpKwPpN1ZMGPK2WDAQpNxgbA2tbnbwVpHU8qb79q6QDdW9ADk9VC7DdJfsjPbbcK6aVVy8fL",
  "key7": "4sjQLJ2FdbMu1M7HvbgEcbH1i8VV58YixdHKvbrDD9cWvqwqFyeAYBYdAQVnwEdBTsaRqJ5z8ZLJvVoftVsJJQYj",
  "key8": "WoehoNp9EuErrZuvZu8y3dBykdzrBk36oR8FiADyDDRTxmXWbsMLN6RADwGV69vW5fQ52wYST9kt9cdT1whjutb",
  "key9": "Lc9hC4uVhtZWFZGCTq8bD3oSwkCu7ETewcuQLDsCQxxKN1q3tC7HkEpim9vmemntfjKnUzLR3ACah534aNBUtsg",
  "key10": "3secbkuSzSsN8xdDL472vGMLEDy6cDAMv7X95eCW2eik9c8GyBRXXFg36pyuDvb5b2PhvsRDDHY7LiRMmA82YUy",
  "key11": "2LA9QkMLekFXEXwtrUkvCRacFMvmTvS2T6BkWNeH6gYtfCJ17tSQjWEPdHfjUVd2VSgD4sLzefGKwwyVWSpr9tQ3",
  "key12": "51p3F5ecxa8CZ6btwn4w55wYWrQErUt75rBtJvd839Lu7CoCCsEP9Bxv7r89hoAhUzMNci39ZAVT7P6RE73K1F4t",
  "key13": "279SxJG3GkcAaHJVDCspaKTDZ1PLh417iHb3X3YQcNXWJeoNmzd2AhKUWkUd1ezwhNbteLfcwJxmg9MXgCVJZ5nE",
  "key14": "2iBr3wYQYeQ8vFfmreTHjT5BQXkYMDYiYTz4dXNXnprmJPaqjXrJjwUK4hfHytpkeAqgh1jiHRhqhpGMSJNq1Cx",
  "key15": "5KUi8FJ8pAqfCyR5UXy8fX6w8hBZx3nsDjQ1xKNcZX4t4nyMe5Lz52VN2Emquhz8YPPb9Ji335KfWjSjZCkdFmnY",
  "key16": "51U5PvRnYqLDpfoJxTQ8WK4YkAzRDw66gPDpAZs13PZbRTyyjuHvP4aFoJhRTdMhg1DXV8uGSiWBQBsw1jjjxiNo",
  "key17": "2vpstt171exptZTHBP4gC3FhEcGXfubnd6RagA5XmvfUjDfG9AtHaKJ6BrqauAJyaJhe7TXzQmzemQUSN49kJEmD",
  "key18": "2gV1kw2NG58RnDT7PdMyC6HHjyFqQychb71fG4hWwzBRxzTJ235URuQTtehojTSCmCGrmqFn8fAoVbnpPEim4Y9m",
  "key19": "3MZjFwjTHRGFbz3jhAsiKEqZSmkJCzCtmEGiezceoxj6Cx9q6ebEyDwcWNnGGg8eZNwwu4LAE9qHjs6g2acxK4Nm",
  "key20": "4XT3a8dE6kMBhsBggo1tFGUhB7rGecHt8XmEmZSfS5mYt9mgFf75o35gsHNminnN9bDhqRoCXoaKgMvi5pzDs5W2",
  "key21": "27xvyRjvNn9WboiYKrs4dNtTRm7ZS7MpSZuUQphpRVzSLSs2UMUtCQ9WM8rBVngzYwTBKZG9vy9osZn9A5XdCyHm",
  "key22": "2FwkbbgoqyPB13vKLkQRpV7i1j2z5DZwrJxR84GCP36TCGurcNCYWHLZ4dYmYR7w8pyVF25X5NjfJujq9Vx4e4wF",
  "key23": "56zeSBYah9xSYqDt6u3R1WYEVsa8jQCx16tkKhwttFurCvfUBPb1YRAYVK62DAPPgC8J8PU9mrLf8i1rWsmJkh5",
  "key24": "4smKVknn4KxDR91ikXxSpwSSaCouDYCoThs8QxfR8xfPgApqGkdX8uWzeX2awkagkw5R5bH9fkF1Gg4bRGyxVfaG",
  "key25": "5XuJ5XNHSKTN8Warf6zsj6pS1KQYAjB5GKJAktF2KvLFZdQ7zpBMWj8k1wmhWrfexfeV4rdrtpy68VhkNPPAk6Vt",
  "key26": "5s2b9GvfvvpF9wMWjXGhp8ufaQoxTA3L7hmyLFYY4EadvGh3HxXhoZ98fN9iK1DGZYquzUJLQuwSJSv7poymgdTd",
  "key27": "4V2zs8uQHwMKLAzYKBGfP2MrRPwBijjvCsog1uWVZn6SkwYSEFWTppKupGjUTkDQrhPUfWSLQBRgXu1DANo9theo",
  "key28": "3kDNB6Hkv8kmCBf1n2W43BcXKZ2qzMj2f6AbFwiAz3xoSau9SdABXXv7M9PcvFmdqi7BREaquVezGu6woC5zVqbf",
  "key29": "2XSPYcm7kEmvYgV7mnHL5qMFEqcEaa8T2XkHNETVtMd3XJrGxmNn3XeWS5Z8qqgA3iDxmpPVN83opo37bMj7Lvm",
  "key30": "4yMvAatSfJxdH5VStinnjzbLf4rpEQ44MbSNTsxpnV2P6tYUH48pwRHsMS7GaCAEUtDeJJtRBKcTNzJnfvQbHX1g",
  "key31": "56Bh8pPYLB7QiuJKB999oMC5h1NfBKvrZFTnYNuDUgKk1Tkxs6S3xadPGWSvSLm2jpQLtNiJJpqAUJCGZY3csobp",
  "key32": "4oDZPpt47pwiSu13Lwor9fXbvRoW78YLjwsXRDAGB5uZeJEAw6oczjwvTSQYUcce5m2wXx9Ezy3bWKmwZUcHPtwc"
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
