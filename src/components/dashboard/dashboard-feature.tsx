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
    "2M1F42hR2ohRbsbbatWpvbAN2HPa9pcUPbQ4f3TB171wFbqaddeBEFprUXAu83cLKRmdQuTs5NWcZdjeteD1Y4Mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d6KgbMu4ChydepgbWQGPM8LApfvXjjUCrrZxSaFdkNLMHMJzzESLZpk3Uhk9AEA1zZXPtGAH3w3wKnmiewLSjJe",
  "key1": "44tAYm98cjfM2d5WQLPAnTGCXbQk9Up7JkrQz1k7hpE2vyNR8ygBiL5divjeJPx9ni8VazmC2JJhFTvA9h5JEdrj",
  "key2": "4oVTnz7FL6ftMRUzEhbfwXiPAaT2Fg69L2PEiAWW61RNnnPpqyrFjE1daJvL7BcHXaUCVfJV7NmgNhUHyjG7EybU",
  "key3": "FqKoUZQ4vikUG6aaw7nFiXy5KvBXSmQPfHKhSsnra5nxLJWZ7gZRKovvX1n81bEQSy6iq9SK44VVaJaGD3YCQiY",
  "key4": "5wbvz1aJpFig4P8ASxQ56ggutHA1M6nPxxvztr3ChQmoSr6Qm6df6C49xqjQ1NvDDECGqTEvRvjyB4oDRgNmg1fR",
  "key5": "4sN7jqYCnyPNuTxRVF4oRHp6tG4kNCujighN5t5od1SW7tVttExnFsQVQQxpfwF2qy24LYPjPWE7YboRumko8FNb",
  "key6": "3Jg3MJuQkNR3MKSxG3gdU1YJvKenSb49jxX93FEjJkQy7wZ7cez9UwF7HZ7Q4yPGbbxiwDwbW4ytYZoLkBPW7M3",
  "key7": "5nZkmW2QdAasoDWBuZ4pbnqeTrtzvJDhgFgXtSxYHortW7aUJDpmYMcvtxw7ZiCtvY2corYpK7Ch3hXkMAhZSVkC",
  "key8": "5DvyQ8RLauEyebQdxq2v7uxJXVtDLrUxGoUHrUigkco32kfXDZ9NntydZQh7ZrPcz5jUvAvGH5jXpG9DBq9XUSuu",
  "key9": "5NsF6feW9EALRhQyfatzqby9UBKry2rTusjJJFSKbHw5uytscJ3rYL3MQrDCkiWPaKfpM9MAd4711vRznW8bjAKD",
  "key10": "5DerGHE4KXSX1D8o7i6KrQsKA7Ld2CCxp9DyKE2fh5LFnGpWxeqeHgenqMtvQELUBonairw5rnGWtraUpHj6PYne",
  "key11": "3cC5D1VTaC25RMSHvZFqzdXdRDSFQS5rVJVtQ3Bj5c2g9cEY2qYCy13sxmNnDpT2ZGUZyLmAwtB93BAWMosQwaUU",
  "key12": "5qQ5TazqL1U1WCBK1oiD8Px4BhDm7Zq7WfK9goUWBtz4B2hd6EYWz9z5DNi6w6xMjnW6D1ryNg1zGcNV6jLcHnkL",
  "key13": "49wPHHCLNpkjsxnK461r8LhbbeVy5oPxyi3kMCy9R2qyFxunewJo6qCiRvUcuBeVLSBUVNPACxK3qeLcCjkYCkEt",
  "key14": "2KpiR2RqdV1x2eMwkLEdvHBCgjiWp6gp8i23hLJki4w9UACeVTEnxU1jJVqQFsdDFVp6nwborVLFqDNaYGamXNYW",
  "key15": "3nVxPGVscAY74UNCRrCWr7C5EbvdcxJ8GFV5vJJQM2iYaCgTxDwNDNd33HqjGNJt3cUt8JHQHiWYKTSktX9Fuxzj",
  "key16": "3c3cg8AetwzKZKBVvoqRusK9S3cMcSxYwjo8Mb9nhTN35rZGphrRKcvSXgu9JMLDMtyUo72FXa6aJkboyen1kt3p",
  "key17": "5gVpmszxtmYRhFDWk2qFgRzyE7cJw7uXyit2mrC9UQNThsRGqfRQihcnbt8PTamP9JrBAicBnZ5fivMfaSJ8bJmR",
  "key18": "QCRWsUtLCLxcvFYPX1yc8Ww2QHR39PZSLg8VFzUbmam23Y7ijskTGBDq19N2cz4ovUzWjFEPxTQsFQSA8JfuNK2",
  "key19": "3ZiWKtuHZ523WoRqJGGVGswWQJbHjEZ3RLfbX9fQy3aTyZEgzm7SrNS4VPVvbEVXQe7q2pKjD6qbZJSCoULAtgwa",
  "key20": "5vh5XEXgCcv2zcqrM2F8wZQdZ3fjxtDqBftiQjE46WuXtw6xAtYE2FLzY7XSDSya2aQZL41t5drUmeYcJq7Wromw",
  "key21": "gEApQcngo7ZJLLVDjoSt7ADiRxBbbHUFN3cGCrhU8EyrCNEEDWSNp17DzAKJaKGPPddVd4uqxxN5v4n1z1pzWse",
  "key22": "2QjbLGW5cHAvFQN4vWgCFLkMdwsjcHPepFf6qg1fGiMf14JvdpJQa5WQdR2v6nxq35ocJtC7nVwYNQGDme7JWXCA",
  "key23": "5jV3LPr6c5N79FgbSxTQFNtjpHQvGF7WTJ4wrxJbiGPwUqSqYSHBzSAQ4nbgrgsjUg7bfdKzsBHr2UJRGj4AU58c",
  "key24": "3VrXQHtAxnXVWkpzXTy21BE5PpiUY78QjJtEuGhnUhFpvHjySknzVVqB5gx3WxgjPQUZo8u2PUMSNeGv8o2voMTS",
  "key25": "RFDMS87ZR1ZCoJwx5ajLYvGfYbpXVjc6yk2aXR3f1ssFg6bUBK1EoMLz7o9khXA9i454wNLHKSbL4QoDNyabcdg"
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
