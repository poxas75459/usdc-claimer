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
    "J4icPxNonLuwSRtE8QCHesCz6LNLDtSBHCn4BDFQpFLkhyDe4JPnQ3yWKhdH495anZTtq1VeRbduvkCbSdpFtsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YXLZG87xxXMirXso6XKBkgBdkHUcX6YVUU7pknpRVpp4iQAtxQBd2xP7ov2yAmfLfgnVLtpwtspMjn9jzrxiipL",
  "key1": "3Yv28WtSpGBPFJBkQb7kYkQh8MBYKaVP9D1tNLkxohVuj1ubgjTTDs8eHVsqhBii5AFGoD8GKwnBKN8U5ifgPsy3",
  "key2": "hp8PbY94BLZB1f8pG3ZjMn7iJCWVGMQfJ4CNctR83FRNK1dEr2A8KgwDrq39R999y5CvJYuAYqMubAaqanhPfmE",
  "key3": "4iSrJRwckSH39o1gP8XJamfXQz7N6PMCqgjcZab73MveEKd845VoFBD2YZyxvaUhzVr9cwNKFrfXwjfLxFREpC78",
  "key4": "5iT8AEdNzqjpfPRs31xiEQEhzwT3LhmbSDupD2FxcL9CZXN6Ri9r5WJ6KzwD23aj1WfE6MhQDKUjBXPhhWFJhNbr",
  "key5": "4f3K1sB71yhCKe8bCG81QQreh2G5jBRLyLyGE6q8o475264dK9KgbiuYekSFHhNXmm7bGc241cKfJ5mfxftgcrLJ",
  "key6": "5VEXrtSshK1uM4wC3STKTv1rDDDiw2oxdByiAkzTFmtZcVHQxDwBjxjYq7EJ87dv3iQy7PymR9yHbM8Tr9sAYf5R",
  "key7": "4JkWy2WcCYLqEBmL49uLW49ZbSD9xVLTjzUNGxnb68H7fx4b7hsJyfMuFZE1XB7DN1DGXeoAywkS8Fg5psGb3PhZ",
  "key8": "2Fx4xJLJTAafoSMYaiBLHEZnuP6UZp5x79jcEU1bnEvVqbbD2gkBsP5kv6TnjfJjxPp6z2cibkap7WAWpYtLdi5z",
  "key9": "Bf5unffbfpyiivh4CU7NBJMrhHu8JsZdH3Wqo8n85sKqbohjSGptRiGi9yjQZZfbrTVegQPdkahkjYmZiaqZG4J",
  "key10": "5yWX2QzzcuDeHNQbJrcwH1iwWqiFEy3HooxYs6v7pffc4zzAcUVns6PA9gsvUJxhHu6V8DyvVNNyQvzH2qDJrRLz",
  "key11": "4Ve4fRC17JqQQhTXNVWG7QHm41BZL5netX9inpCRkjN6eVLqdbvUnPLWvKFsWCodz5dS2vfrQmxXEAeTvHqhYbWx",
  "key12": "51UWhit6A7kc6mUh1vq4sD5NooX7YyXNES9r3KhaMXvbthaSg5L9Mank8F924he1Eunpq4zvpEftDmMYyvZbvhNi",
  "key13": "pkzuZCrqrccCtqu4DWYG5s6HCD2h3Y8XCUGrTNvyxLBvq5hpsFpYbzMrJNE8fnBY9YL939LfyevxEaoUj8D27WF",
  "key14": "5THfwHmf6zj9tcjZgAsAZ2US4J8ioqvxagURxPxXcZmPXqKV3FUDMHFqoqLacgtzdrigvyG4LCkJ11KWZWiuLB4H",
  "key15": "2xtbK4MUBbQrzsPUCKPY8UsU6e35QiFgHGxQsFQTn1MKWZqbaa6nPrB1kWeWLbVCJD3pQ4KKXYPLUe3Pj7JDfGmj",
  "key16": "aZRjWAPd5UAPb1Fev9E22AXj2wWzReEf5ZbnkSKQfs7xgyz2MrZxP8d2Lm7nb1HMADVEA3df75MURSDmYq58fum",
  "key17": "3pzsksipYiSdQExTPnBDKdAScmu7s2NfLbJ8B2HRuCYwUiXKv9XNDRuxDaFdKDQeZJucQouce2CtqF8wXgGJ84ER",
  "key18": "2BrGkG5y13qbYh4b8P2U29E6SzRqPXtjXXQ63bfeeXwgwGN2fC3iACgvHfj4XQfb1mThQJ1MA84tYSYi2egQ7MDt",
  "key19": "5FvPkhf5RBWZWbRQTwkzUGaS8wpx4xcMJvgcGc7s74kiu57UPxRrbZBSofKA91bp34gLAtMyJe7tfFg8bvtAbfgD",
  "key20": "3jCmc8tSwt9d1JqDu97DoscVwb2XceW9dDERGdnnjyfAfsPFtk9Hy28nRUMyrK3nkBdh9mgXPHUVVMHbxTR8wJxP",
  "key21": "4QvB5ByqY7KiurEFBjcAuJtPW5MDK2H9XLjTysNSVQLXsozoGExoVbJWL1u6dBaXBTksSPxPTRKiduZ525FgKiUW",
  "key22": "xbLb36X3FUt12uKXYuQKnehYUug8sjQtuFq1otqheKghZSr7AfpokkoUDmQhnDSgFdbBEzEysCdT9HHrCpqdd5X",
  "key23": "2ER7Q4btWtgzRDMJ5EGk79Q1vNJE1UC5UiSQwJeFdAYKVT1B9GeFYzSYEBn8RsNqcSBFBd6WqvdKgo289WUpqaMB",
  "key24": "5hYXdBCHqD2tqVRhDJtTxU8vddfc5eD23H775icVPwEUAEw4HkJfRiimQFfMky55Ryq3DMXwTES8cfjTP7wjFZmV",
  "key25": "4AiGBtEYHxXQVNZcZY5mCyKbFcnxnzXXMivc7bZfhZkcGae2LDyjgfKq93XPBCrWCxs4eLmErNq34yvDPGwCBRJj",
  "key26": "5JVXSiSJ8VLLBcVoM1iMYhY7qJCVcYJ5rUdeGRQqoaSqNMkzpzC1Ns7s9ykbWPawRDnzXRR2Hr7PkoA1b6e62sVM"
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
