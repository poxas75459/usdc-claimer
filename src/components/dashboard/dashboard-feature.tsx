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
    "4SgYXxrVMLc9MqYNa2WxHzjR42QJPBPeDagD9HGrokWbGqg1BxhbJNABP69YyFEeGrKNrVgmbEg6q1GoZgbfkg1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nF1B8zsjUkL6wFyZfkVUWp3PPKWkZwMWYR6G5qR9sS4iyuDoisdNAcak1kgqWuad4qyRWNUTBjmxiyghXnL7NDP",
  "key1": "1CJuAAnk6kEyaw7JFwJE3ZDpWgdbMtR8tgizRrXKQ8yGntAUcPHM1WRUNbkBtgXqTJy85LgqsrdhDQCz2FytqJt",
  "key2": "2dRk8ePzczmCxK29VtE1tZaHV9U7yP4Qp2bGSYbmrm9tk8o29z2gxa75K2Pmeo9gvAdCsTKUXCaz6p9Gq47Sh6X6",
  "key3": "3NGxq9hjBEhGZZD7tbFUXKkFQJ3PMnSDm27AQVGJSSsEqj1Pz3wNVdiSDgXUiY32VGEDQmx7jiiCuNDgh7sdYTUW",
  "key4": "fW6ozy9ERWDxS4mfrwVjRu5L8y1XLBAjCYezj6NvyEyWob8AvF9zAQBaxJswVqZqbCVDNwXfxKRoVrz5Fn1ht4i",
  "key5": "25B6HxgMLb5dFWJeAjz3kbyZCwDjf7oQBD5hvp1gafTt9hB6rN6rjfcALNxMs7b9iyziTNwnKDpvFyy84J6Epqqc",
  "key6": "VLUsswq5NS28JNYKyEjpoczBw8wc4JBvdnThvHdaJTFAAm5WKneF8YGSWKJEDjv7WTzDajQ38TaSD4wK8BiYExm",
  "key7": "8gqk98uoAPQAPUtXVv1DHhgXWmg4oonSNm2wjXoCKhfGKawKGD2A2bbceULosx6gBNfv8StZSkwxYsdX2hZY8Yz",
  "key8": "PfiNoV96dWzbsL9iUkp8dTZxU4ZwJNbWApERXfxMtARmqsh3E9CRYrfQD9UCZWMcrfo5nLE5By1QiNMZXS6HnNX",
  "key9": "3ZS24VB5crqLmuBQqJBQGRktCqyYCDdZnkj4Uk4nShvTeSCSz2x2BWqSjbWdzdynMfoFDepcVvLAxXEN931GeU8A",
  "key10": "Zqo6BULfWvkgvzqQQBBfuzRT3vF8D4gcvzYw6WD7XRS65FjLgiMNTtUPKeDN8KLMsCsZ3SDsiVE9v11Vn9HSqhw",
  "key11": "5vsoJ5YvQpc9S9Eqf72kB5AcRUX8b4Do7Nvu5QzSrTDtDh3AiEevNLrXb3udCbHLELdFPXLU8ReTTerxj93Xdrz4",
  "key12": "pqZ4xrtnH6UEgnzYUxTE2YVkpZfEdn4RNxbaQBnbWS6Y3LAhV4GpEQgfojmRnYqypRvEkWqdUVev8mgmrJE6whC",
  "key13": "5Q6gfd64w9VL5BbAZA94RgJTM9bVWZvt2bKprhURw6vPrXEPGroWKXCCBEyEBjvz7T3QLsaLWfK6ypPX8qAn4jMJ",
  "key14": "jWZGiwDdsi2BkrUYbJ6NrWcLdYjQdKxkuwwJHCUTvfVwBNyqjX3CYArEWerzQyAVADCQ8Kc4ST7witHzcUNdT29",
  "key15": "3PsGcyRP6bLivrzUV6n57qyJkKaihH6PYGppTSGWDgp4KUQBKr6vmWYBxqWZghnYKS6DUUSvHgYqPZCFJjoKzwK",
  "key16": "53Ex4VfuYJw869FZhZa2kT9XMeVVG6DAS2umKCezTQ816nJyVNe4HuNQggt7N4DfMHkRnh4uVXD74gqsJJyttCzy",
  "key17": "3HKgux5dkwjVDedGmf5U4T5iV2PQdPbeaRuRJwQHBp4C8HLPxii4Hp7MXgeLexsvXgWCSJCKs4w8m4SyLzhFkqVk",
  "key18": "61c9JPAnfzEE5qBTw7xJDSrJbcgFX1HNJFXEH3X2wmE8GSBCn4V1DwvbWX7vXFh8tv1SV9TLPep8Jqcf2Hwf7s6x",
  "key19": "McvLiwTAeXtkfsGx5keBzCpTZ9D81BtkJUH8nqpGci1Ph9wQLFu5BXqzvfHhsyjTQLQMeVqb9agTHvSjeJ8sJCh",
  "key20": "vEXK7y1yDq98NyML6vrz1qNoPPhSUUfKTKD9pNsJknQTjjhHVizJdeKXK5SqE9tXUfvEc3f1hXEyTsSRzi1q2yf",
  "key21": "3DkCWtZkUULYwWpbQJYCKHgL2qwE65JTb5WRrDqf38bawWoPZCnXt9ie7NmBxm1Cb32Fssa2CubN73hx9NtQgLhM",
  "key22": "5E9p8Cju7Vd3DN1WxALq1SwSxu9WChvLwVNZxK7iB2ESqyhwn2gfFkdW4TWgG4UjpCRUeoEDewPagTKWLYXKCKXR",
  "key23": "3wzBHVRBWpk5hDJWB1dFHrd3m59imFaUFUJcsVPcF2CwVeVp93J6RvZwNvPuHvQxQQS2D7FP3jGNSi7GBGq41f8a",
  "key24": "SWhN9g1PuEHUde3iSqJvfFcTQyeD1aqhzaKdsAKVv6dzQrbso8qPmt2RwqzYB9AfMUqK1v79mCa6gergptjmrDi",
  "key25": "3jyMFDq4hzRKn1kudLeohrtGq9M4My9Yy9pdY6BX5ZXofxjarYeAMRaGLYWgDFgSb6eEYjrtcSxq7LTzWLNZmkz1"
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
