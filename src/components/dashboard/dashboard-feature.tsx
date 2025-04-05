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
    "2v1qEgnLuWzhFWUy66nr7pCz2TTPsR95CnFZKGVXmNQsEz4xt8osnuEBrhMxXkEhWfNvoPJdrujo2mg2Ukmzbjz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C5njEAPuLzx9qFjpcxFn6h1ZPpwxahoyeDWabNcmRbnzB6Hd7DDXJQp7hdBvTon57RmCAph6dU5eERS1aevfp3U",
  "key1": "48aZjfd1g7sN27arDdPVQFz5NfQR1mPWnSTBTshoPjkRC9gVDnuszJGvbtkzP3ghY9NrurJ34bBZn5Habn9tpnkF",
  "key2": "5xzu7XGQcpAV4oqXweVjM9x2WUqmiHJVgKpYLZWHM8buCYzXpaUnVYBSXYvJ6pNvHLeteRw273SUf9miGr56H6tE",
  "key3": "3xqcwYQ19wk3pt2BWiW9CCEXZaAPZ363r8PkLs9koFoActeTEJCiNU5HY9MvHF3oJx2q8n6Sd9YpiHATVPyZg5Fz",
  "key4": "38nk6af2RShkVJZoLuu2VkWN8Jw2SmAyW4vVXsSBgJo1awGn1YBcfXT1jztWN1i8TzikSUc5FaRyvnkx1rUsjK6P",
  "key5": "5SsMnRxWh6baWwthS83Mf2jStg3syT6oZZeYpzA7McqrEK7wxiy7PUq6ZJF7bGDP8aK3KPnCkQwkK4As2pkk8qkt",
  "key6": "4dBNFZwgThKb3eQjgSEGFCuTJFPur8XS7VGdSpkHBerEH8w1kSmJmLFvKBG1McKJr6vPbYipCBmuEpygijsJze2e",
  "key7": "2PSwvjXLsG1iJ9ufUgGEB2RopDHtkqAko6KADoMANz8SES1uRa9B9ZojKJHcAGJWwthoQDvDYVuWoeEKcB4u6UBD",
  "key8": "4P6s8yPDjfbpkC8KCddB1G3i2yyQb7yCN8gW8SEtw8rBq2VTZS22WhTr12WEhyK7MmySC1yKLjerwcp8mgCtmGnE",
  "key9": "4uMqMAYqKEo6AfhLLUvHeBCZLZpQHQ7WkqtUeCkX6osZXAsimSwR6Ke89scQYZYxgX565WuJVmDKgaqCqnSNSaHj",
  "key10": "45bXdizhLJngXVgMbpFy39tbpNNfNj44RM3rRXTtLyUu1qnJhA4TktEkwoQaK3Ehh3fFoK1vuu5VNvYtrCQaxELw",
  "key11": "3H54Kxvusqy3gqBKFbiQDCYDA59gnuETyMKsWVg5Lk7kXo8hPrZRXm2FFKjgNJTRqPeUmqd9MqeK9oPKSKxoQL1f",
  "key12": "5TsQe8GcwDTY6Hs54rtUvnbixxroRQy4AHUShU9s2hKZ6gFgJkY3432tLvWhGQhZcUaZTbg3ZTWrtQCWYt8kaupU",
  "key13": "3BKzuVgEVKbQMGQAn7DEjZe4kzwTiiyFjnMcMGkDSQr13iKBzek7vdSTLtx2RpRmHmKnUQ9Y3ncqhjr5oF6AyQqF",
  "key14": "4mMwvbzbgFMke4YSWXDbuynaMB7HfP1wmfvCG5VKZH928WmebwWvTg17bBgWcbN9zEwf5MdCr51J1ZWS9g9opPnY",
  "key15": "3ss1HxpAw125DEfuRghVgSxHaifK332KVSiSMktZyzFRnp2nnbgyXpSPCutT5dhBDA2a9hMNd71SoZjWbD2jsjoX",
  "key16": "2kaMymsp5MtwGwLtY94hEfGsgo7jJtAZTiTqVjyRLMH3NYAR9t1ZgUxcu1wwoyHbxmBEX21r94smWEz4HB8yKMvR",
  "key17": "3rWswvFbtqbKsnK3p2J3apyhxhidvPrWEtQAVy62EHs7UEaqXKx5oLyXRe1MCqquhNCMaSR9Emtc5DqabtwBtGsN",
  "key18": "3QbuB5VnvQW3rHReZv5fB8YNwQxQ5Ln7YwiXemTPYLfYVBaN8DVh95DT7hBW3WGJMak7GYMHZ2rYoV7DAM6JvQgV",
  "key19": "4d62NThZroZos5Z2fiJPwfe2FPt1p3chMec2dkjhqNCt2RkZkBZZXMttxRLEqSadFodRJ66gaZ3ZFZujhEZ7hMKk",
  "key20": "4tepcXHMHuERQaRQombp8Fp1YCK8xRPrioxe6JsQEaAeXHjM5c6tz1Kb9N2ZXMYmfQuizHnMPTdVQwB6YkmvQ99G",
  "key21": "rgwqTYoer1EwAyJa6aUDQUnabgtuSnncD8HNNyK9Lmr7aJsjR2tQgbFowY9P1mWS6YtFhEumowC2sA6Ju94T7VN",
  "key22": "2TeEe3oBr47qiMoB7jPvoLDv1ygYUTcix2kdb2VMjdMqNyCqN2TqGzKYanLivk3XoxJsTpx3vxTpwFW8Gxwbx3UM",
  "key23": "2oyWQBAa5L45MH4Q2wtke8zXTmvVVVjhYE3yjsBi5GoUKXB2XWaTvFbm5wLa9bYugTuNRACeJR6grmBgApULDPUW",
  "key24": "2HNuMUh4PMxa8RW4MxbgRrKv1ivJkfZooFkbmsumVQCZHkbCCVZhPnHamNoyWYBwpYd9UYDfwGDjx9GjC9cWL4ec"
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
