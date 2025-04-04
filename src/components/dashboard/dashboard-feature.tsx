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
    "3bBnFsRNJFDBrKES2JHRXiBg4Mnw6vzajWRLSynTb2VKFVwGeXLbTYvWJcvX7vKQEhA3itiGkRBvgxno1GBQ17A6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ajXY66p7e4fm1dL2bGTnhYEKGzE46nhe3CNoCF4WYThUUbpFQSjyWziwBm8QcfvsQaTfTx7SJW1Vx4hvCC5vrUY",
  "key1": "27fn1H1ijxfKnnFsrdrL6CU5eL2gRAZBhxsWGBwZvYuv4Loqko54QTfmFayuSRwC1kfF6xqEbejsVGy4P4jvUj28",
  "key2": "2i6hWPdqvzJtkFmNpBw2Gr3xMGDHdSu1RDWRUnhXQBgGpQASx5NqhWZcsipVqNxJ4eT3ZjT1W9rqFdnkbX8iwWWF",
  "key3": "337RE2cWJBVgZTHa22kTfCrPia7THmqPS2rEVWoRNrD1G7245i4U91nJ1ZTwgpJLzxx7Cou6mUQ49cctNVrHvH85",
  "key4": "JX4YBydaS3DVSSRQdbya43drXrQoFXJsCRMzhgobPYco7CzybLuZ1rcZSomU8VDStVa7pXJpkaoN1pHWXozc8Th",
  "key5": "f6G6VrKE96q3GPCqDeE4sdB8tQGa6GEu7ZDHBn7sEsPpaT3VHhv4sYDtcYFgy7sAFbwMCEMm8nT2UbjPRe5ZVTx",
  "key6": "DzzBhYpqRWwMmegDnAqfNwUw3KMJhKbZFNTP7ochB2E794cjUu9nPr2NNqEriCcro6YxeUayf8gy3xE36EG4K76",
  "key7": "2XSpDXatSqayXRgkTBCVW7BvrHs4vD1buLZLrpgwVCzqBARvFPS3QBUxZhNjvR7KWd4USBivsMPEkPpWgVgV98Xm",
  "key8": "5kR3TNxKNFoDfqzewfDHzQTPW6mGBYHJnqVxa7KRZGvRxshRJg6dJXnGvsCyLYYPsaBfGpVYPpar47QSVBJN7WU7",
  "key9": "2XiBWfqi9nrKYHcYKMPaf56d6SPq65dVeYZbfsfwRJNoMFu1TcQKGRKmzid5gJMfx8q2ZrLmhSp7M4JpNB4Zz3DQ",
  "key10": "isV8Gd2G3HsDhmVFAdqpkR7XNatcxAiUjZnb3D8FaXoz5Qt2PPy2BeMYfpawWCDcCvGwJxbNWBVBZo6j9U6zEGP",
  "key11": "4UH9tPDAM3pokt2F2JqZzqRLJmjvK7vRqrYfqyLKaAktTo9mZnazUquqo6EE3CNqs8rWRHNrHLwc4HaMTFsWfjud",
  "key12": "3MPgwhvk3f35ZuX2WJbqFN3tHHJEdN8DghNuy6QbmD5mjgH96QJDebiioyBjhEUwmHJKG9f5NLRL5rAooN1oEkDs",
  "key13": "4as1gydyVshPyAX2N2fix7P74bFXjt3n2mh7jo9oBArohkxeUXLetVX1n2utehCXsEHdohGncoEwGxKqWQ9GcAYW",
  "key14": "4Nr2FsPyKXHKhL6a1j3k6cy7GQohNgjZYCTptqJ5P7YvuqxdPjmryFXw3QfYGDzyikpz8KMj7c92JmGeizXRBJLC",
  "key15": "3eUvQnS8mmCf2ZzfkGEZTw78eQFjLauHGoE6NoHNcHNBoE2DCcwB9c1mT4pNrPs7qJy5jTAteYpUYA3ZtawfCCup",
  "key16": "UL9BwZKpkCrBZBNTTAuFLBdxbRENp8dhhFMLChmvzyjSdxVNGyw4TKDZ6k1TRdd5cFLquXyrHfk5hgyLWPb8PGA",
  "key17": "4EbdoRoGLTmdJzw25Yw518rR2YbPTbAVog7g241TBEraVoymP1974hrcxTJnJ7N6sFu8Ed8x9TnTtcTt2sPrX5To",
  "key18": "56bsumcgqRMHoxpfeRnMugyuWvTrLeLcMe1isW4C73qbBqkonyobhsYFzsGyUx95WcGdiBSkux83ZV5wNhtyFXi3",
  "key19": "Myw8xPHTZ2UFA1M4L9PS5fVDA268MwPUoaLWPG2UxYuf7fyKq6UrcNR77Spa2LYFeMcdDfazgdAzxFjhcLHNQJB",
  "key20": "QG7rG7CeVtwd4GfWws4xHPhB35ykuNo2zQcpq77UrQNprTKeTTBqYLKLw22fYKQ328vU83K7B68cpzBTfdrsex2",
  "key21": "4kaxoa5XfscC4ghFkWk2DajkKyeei1VqqXkSLrV9uYiD7vHNe7jArZh9BoV6hUDwjwitN3CFok1Eb1FwCWGGvToE",
  "key22": "3JhDZKv3rT5D1HXGLWGE7aexfVoJLdcezP7xLtCrToEJRqD5Qx18MXGtpLRMFdohsY3TxgLJqzRDHp8S1XWWNAF",
  "key23": "5diKrQUzgEvjwEgybRs82N7KBeH7WwJCrySE51S9V7jusfXaBGWRRTPRZyYN6NshRqT3B3QEkftkU4E4afSy6eMz",
  "key24": "2QukA6H4iD7FZnaT2s9rxRkuZkv7v8UfhVZysocbdiT8ErqGj38aPtLLatACBAf9WKMmxhDUACoBN9XqkLdtnar4",
  "key25": "eS7k2uzkk3gUJ3Y9eSR1Jjy2At67tvVBPKpL1faDxuo3Umkn7FUqKXYjpm993SWBnKirLSrbCwzdeR7ePAVy4Jk",
  "key26": "4SgT57PmkPXmEZw2gzawT36ut7YJwQYWcEjA49wq9EfxR5LVDmr7cuvPzLRfbW8qAES1RCgGHfiG9n2hg6FJhYaA",
  "key27": "2CUG9HG8RmZiXMFLL3usLrmoAzVhShzAoMg8Xejn9ZsjcLBUUHKT5yDkrgvRr87n2BQDCXYAu8Wjsdb7SHYWa6uF",
  "key28": "2hUGCgQWguCk6RsLQ5jXuuCGSck9mUDkTnNw8ULxJozSHBykQSKwKTX7FSnrqAhRX1HUJaHgxhtBAyn2tFezXhbW",
  "key29": "YrQtQY7iGGp7XMNDupfUrL5Mwp8S8DuqzMVwBhN8eq4GqRmbJ4hmQnNo6qkLouuVAu8cSxZkaY2efFnJgo7KRX7",
  "key30": "23QtCazMR1vry5y9Cpy1HQdFwgzofeem7rNX5DBo8vqb4sAVkyXVJou9wCcMSxV3KQhT6jPhvcAG28n949ZvmRS5",
  "key31": "2CVQmNbD5uuztgbQWpBLXedd5MUSWw4uJTnkpSitWH1pnw1d2z9yV171EyfqPBBQYA6EYw9EzLgVuFFV2zrheMNx",
  "key32": "579cNQKmginFjTMh5nv1ntnhpwue8DfTmPXfP8vCucVo8sSYBxV3cecUX1Tu71Mi99CLchHsKsPRtcFNY7SLGF3w"
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
