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
    "3XTm2RbhD9qDgHvR9nYLtb6qrxtLb3RPB8vYovXLjixhCjHJuLbCYAzRC96GEkoHCRG5g23DWemzePCMgHb5uGbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F993AcSZiutcb9KABn9pqFn8XxwviNatKSzjWk4f13t1oq8exP6xzpJyWz27Wp3FBTwjYfWvuZHnPt6e6G49K6q",
  "key1": "3EW5ztArcxmKm2GKXajdN7WZqDi8aXVKzPLNZkgjDfiNo2rQ1B3Vei6TsRJc33nov9mbM2BVsbRuHrRG82ewCXLv",
  "key2": "4HXEsmbiomX8w6jugdoJQCbifvUoeyJzAjAQS3RedkeUczdpKxHXPEL5HXEjdEKr948EHLMFHK4uMdGrrdfca47r",
  "key3": "3fbNDXxPnkTLsqj9XJSrhYfhQ97PD9sB8YZa8DK1hdjPYJ5Pu7mwqPN7ZM8sdFqbFy6sMsFZ7Zq2PKaqas15VjF9",
  "key4": "Au4YQ76VYzpodGktJnkJ7cKiWsZjYXX8VK3Cn2uKcRzKmJ3wrm7wTdeQKp8Az2bqZo62m2JJuDMa7yFrHaHyiNc",
  "key5": "4wSAVcSVcM9Hi7h9wuND8Z8vRuk8KV2R1pBRWqyreXjwZDmFHXeHXqERTSmVgump76nM2Fa4zh3vn7wVDyQorsZ",
  "key6": "H4BM79kL84cmqiNdZAxW4DETkUJecJxN6G4eK5QrGM25bmT6fxNUmEH2Nn5BjRurZ7onSC1CBQqBJgKUkGVocsa",
  "key7": "5KvcimXvGMxbHTboa1aXex8KYcKeVTVt9gHbk3mUReL6ZNp6xQZ9PyeiRQYgKV2djfshMrPkCJA3EjGxDftfyUkb",
  "key8": "4EGiqyiefprcWyV7r8G6HoDQA5TTBSzQJNNXwC4haLDDChTJocttEGUZ8s2kbmmKhKcQMKm8PL1fFHtdAY8kj75c",
  "key9": "4M2eJAQyowPZqa6mKdzecUe7PkwU1jYofv4eXp39MK7hdd1gy2f4i97KyheFxrN2VNgzWGbo4i3x2k9w5rV7UvRz",
  "key10": "5BNDuTCoJhViKqW95XCPbbf62MLYqvd55aVpbx1e8RFnnFYw2Hqrr1en4dDdwSruD6WRJCTeWiRF6xMQN2NPNmxH",
  "key11": "2vmfE5bTUJQga3xHLWThyA4T5MV9tt4XmhK4PU85hUofrHtbshMhDbgbtecJt8rq8vFNVPLgW62bpX7t4nEEArnz",
  "key12": "4Z3iwBHCJbHuoRZGxU9ve76HevRnYMpYQKp7ag8m3sQYQv99CGGxCFkrvNMeVAaoMd8LHR5DiusFzLjtm9W15iXy",
  "key13": "68JSNMSK27nrAS8DGnsX9TyjsYqziQi6NfX5xyL7KYzSDpKrsgGCyrH8wV4uruKnXLWhooBpf2qVFxkn89T9CnX",
  "key14": "56ZifwzFBufLVfumD8Q9vGNh9NcD1sTDLyEfGu3gK185n61H96h8ge5aHogVTb6mpoyYfV9ReEdyz91dUWirkKko",
  "key15": "5bzVpAasjDy7Sk346d7mgykLGG4xwK1YXVNrfwtBMZZUorrzgrr3qA2RMtuNS3RGkE4TryoFb9duKQfHcfpMA9i7",
  "key16": "4MssmeENnpgNKepcyGqdrwgpbfjVLoWLcVuvXWWiYUGGYju2Mm1LmCPeE4VKyeLEe2h8hRUWoTn6664RAD87wMgj",
  "key17": "4uj8F38dhaUpj7K5T4h2AAnQ28VYRWcz3jSYoVAMPTrA5VdDpujsc3XhBxxriXxi6i5KNHBVUTmmSQxf32nkFtpw",
  "key18": "5LcnvnYc2nyz8aTYitLXrKWCEiRnM5PPLiCr5C7XR5yrgC5QbV2BpTs331ZZZhEF9T2dDCEU5HHYW6JGVBvQ9ixN",
  "key19": "4s573r7cfsZcTMLNDH89Uo6pnUHD2CWWiM2KzggaFjC5yy1nutbz9mjrbsp9BmwjujfTu5fy19AjYtsoPsjK56mv",
  "key20": "BbctoEcj3C6Ac6ZouLnpFF4BadjnDFkwpzbF8RLgKELf4zFB1B6QCYxV4FqKUS9T1RHRzZFN1kninomL4us9w2X",
  "key21": "NZUwx92fXDHXuQCFJ4X7Ph781Y6UmE2Bhz9Mx8txUNESaT87KwqK5M4kkebZPT1DKa5eH2rmqNU63mNedAX6bnP",
  "key22": "5DiRfP5hg9WCZbXFpWQDBJGPdno4UoLn2VyfAmNW8zNSe7rST9sQKNk79xNthwEXMrwKdZYaCipAUiU8rPkpeNQm",
  "key23": "kcEDowu1EtBGrq9o3FqhRgKW5o4jyaA5zBK3ShJaMc1pH1dNgBYH9cMsfUAR4NN81eohWGnbPTCcu6XpygWB4ox",
  "key24": "4K4SgsCkuKHvdZGLjUQFuhA4PQu9KxKgXttSEB7dN62JjcjfkG9BQc64rDoU2c1ht4RJB4GmCxhXX1zWbaAawTdg",
  "key25": "2fk3awyqx4yRVGuNWxJqyi4VXvxqftKGgoy9dAyKvNj66oKmJ9mpJMPiiQAyXUShZ7wk7UwkLMMWAff115CZD1vs",
  "key26": "5nt7YgkaiabxMWX6XaET7VjarfZJx93u8nvxQc4ggvAiRW7HxYmXevsZTaaB7xF92wqv9miUeUM3vpyuwVaABFnC",
  "key27": "3rHbE9QiGFRVuFe8iCmHSVJFaTxkgt7GCuRKiMTMLpyyWLKHvhKg3RmuLBwc4i3GuoWfx4kCjGVLNkjTxBa2iWXf",
  "key28": "3XphowqiLt5G9owBE6tB984wLWusmKDq6DeGC8p1zXkGFGcqikyxkpEGeK6m1pMr8FKD6a4WX8WCW8KNbYVQRfca",
  "key29": "5c5YmnZEqmdqjsjaZkdzaDWzX2zCxZt15BDZVqrUnjob7uD7VNg3LDu97i9WKhRbufCrNfXkq8eQPREQW6VQCuid",
  "key30": "4zDjJpjcxd2jrky4XfEyTmdLds2wVQ8jBze6hG2hbafqMwRAtTRX6k6RegZBEtBbkvXCWhFq5yqZUUqc55p5Ed3M",
  "key31": "3LFY3omiBd3hwAZCX5JD8Xr4WJFAoLt87Ga3a4iMezvkcjyXxTyT3GDAoCBWSFGS5mMnL9Tp1EKsCM5EEiwh23dc",
  "key32": "2REkvh2opwFckABBhEt1in98mjjBWkrWgqh6bxpjErw9jkV3K3Kor1Nsjht3UkyzSowLK44H9HQ1wyBzrounQet2",
  "key33": "46yruuSuFXhpyFn27EriFUTei86nS8vp8haJfGLVNcPNjGVZoNSp7rVLyd51vGgjeVaoZ2D5zJuxfYt8RhNj8NUK",
  "key34": "3AdaykD17rGxf1gHsLSx6eVWPhx99nuwjhWUbBirDBhQMMtF4JD5a11iHvy9wMgTXhwcJkB2yVRsJVLY1BQRyWNv",
  "key35": "3vCoSpYtfPnwENHWGWsmDLju9h1jQdJMjVtgEsSgqoSWAuZVzcZGBMoCHy8WJj5VxUfiZ5yaUvEeMPrJ9tJwg2MQ"
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
