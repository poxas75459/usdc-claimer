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
    "46MwwNYfYhL2YQnmnLHDqWbs5UkcNDQWY7kpzzAo4cmuufz8szyDa22vepdTxqia1eBgEFpVdXM1grMEtjPEL3rV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JuaDgF4F3mMLHP9RjTgmHjbot87qHAKKRuH7fjMTSSWdZD1wVkozxLkMArWGTSuRcRDi6n785rgCZvLqYgNoCmg",
  "key1": "2YfmJ3mHhjVWn1PcxqaCF5Bms7xrj35Pb5rjJon8ZWgCgWacDoev7ZL6fsDq7CMP7ecP2SbY2xrwRKXj7uAYdkDh",
  "key2": "5v8UFhjGab9cEEgh7bJBGaKxcPSSdxcg7sXREH3ntdHLoDkjYAX2eb58EQAYy2XQZbcHQuXbPTxV5fBSVpPwBUxK",
  "key3": "46WS9LTzwtpq1u4dAbXkvYsXTLwasFifi2kGFhyaGr2GEVagBsJNeiqbQuvQE2VMBCv6nnpyiymifgdcKivqpJtV",
  "key4": "4iKW7fYHGvZmpJSEJWjxeoGRJjJqwV7Bi2C6eYNtnvZsyZVtTGi7SGS8ScVRXbRJdhjLXRHDWB432MLiwXSLqUdY",
  "key5": "4nB7dxN61C4daJa6zs2gQFj8yN2mqsEAHsRGq33y2n1ZezpTi8Kz3uyBL9wjmR1KDTwUzatmoLvEs2XaM6unr1f8",
  "key6": "CkxmrCr4NutLhVXqztHJChXqmgYd1Dj66K31TvzcNoKWeKgoaPFkAVfGJgFDsZ3e1nZxVcRqBkSwjsa9CwKzXjP",
  "key7": "33ia74oScUnDuzJkUo7Hcnsnsp9dmrfug78xQFAihuHYKk9n9NaioJVaBjww2GXhTJGReQSPN93o6WKB9s9YqVoM",
  "key8": "4ZipSTn3k6KNTaJV6WcNfwsxPzHm5sNCKpfRM6f78evXBmMyccPVphMuMGCQuEmxCyfuRUnaUjhFzxfRotXakfhB",
  "key9": "hV6ogD97QszmvAXoJNL6r464KhPwtbpQ5YMRtwg6XCrFjLV99s3HMWfUTTdENTxHxarz2sX1wL3dakstJdHrdwS",
  "key10": "33sY3Wjy5Jnu6jjdUuTinGUxBQ5XFCEgAJRM5uQ2bihyKo5czL3qMGXp9fGGA5QeFTgiMQzbQsebskA6W2vkYsb3",
  "key11": "4mxqfRFz4kqXpseGQcDCbfEWCUgryW4xkvKVTCQb6jtYrB1jfTYFBu7vfFQDihNuybrxzuG2mq77jr9HeMh9K9QT",
  "key12": "3HY7daxM9fNiYbkFcaiwpfQA8enr51j7BB8QgCiZuG3xxSbXkoo7nCfxnW9gP6hrTwUcP3mQCS328DbikyRgBqqJ",
  "key13": "34nN8kfiKzC1rB2RjWFRXau1XpoiAmafvfcQ3TQNyykm9P5ydFabKPQL5ubPXKbtgUpAGLYMVTfkrx3QGCLHW2Ku",
  "key14": "7kXQ3GWWTCqQrXHvXwTX69MmQ7o38LMWfXK7pJhhzpLfQi9fhJPHK8cnoRhjPKTKrUZYAmxLMDmKW89cjQYn743",
  "key15": "288kkSDKLMUvVVXbaVYjUd4Ns5gtbCJG9V3w7Kc9mJEnsEqk2Cp2WvaKfZcFRNqdcv5N7tPBynp76pEFLjFiU9xK",
  "key16": "2SwNTrCubFGs7Gz2n772TTDY5RCoyrbXMeZcYamtRzdFPWYhFzcXeWuqRWoBmBU6BkVBECW9PtiaqnRfeZkEBWJU",
  "key17": "2uc1eudoSkhZA4h2QLReLhrANj73bemrB9GsTf6p6QPUW5rcDXF7xz86wwZytHH4oiASKcoKcDkHisGytUUvYBY6",
  "key18": "61PSxsTiZPqdKmQK1vqWVki3xqzAHE6NLNxFoAPktPBRjn7S6H3s9USsuhuLDafEdj57z6aTUNKWk4Gsnbtwvz6v",
  "key19": "37bhzpqP9N6dnPNpviSFqRQred7rWzV1vf64RLjo4x3NrBGshLq9tw6WkQT1HHVRrMCqwNWSLzW8L4ePm8KKyujy",
  "key20": "5dhbzMtVFoRksHht5K23TbKwMezdF2FsQoPhpYyLVS6heihLw8hwvj7LfoYrcCccZUmHJikec58JstdwdieSLgpa",
  "key21": "5WhVNd8cYubYMZ6tejFuXvpPLUKGgfPFm8SsCUM6YiKwmoQoEUYaCfVutZWyAadu8JRmomkqXgF8G7PwHGFxn5ga",
  "key22": "4EWWpyfJrUPK6LuFzQ8rZtiUTgHsy4hHjQ9ZwCywxnT6NAGr64a4jFWVkFgY1Nvtw3J8J2xX4QbZyEo7wnEecyY7",
  "key23": "4AzUd9AaGSMoK1w7Rg9eqAaRVC7jUGkFH21vtoYuCQaMeqXmUEzc4Y17aKdCqmH42rQHPGw9ShHcQhvh9VqsU1H7",
  "key24": "3auksphHx5KQEoVmbG4EpezK6Lu8eAw5ynCCmutzC1rSX6ydS6ob5RRWy4EKVDYybvydCuKj77RCyLwV2E481kHY",
  "key25": "2nbGRdLgmPxxyAT9B4k8DNBE2UQ1mKi3KA9LJhMVzhyLezqnAB4GUzFRrxUnoKzy8w5NiAR7BCUu4wjDEJuy6Y6M",
  "key26": "5QFJ7k3MtHXjaAQ5dtEyUq25CsLEnj7ZNnAbLmRyNoXznJcJwmikLLkcmBMP8z7VkcX8veqGrcPfaPw87Fvqx2XD",
  "key27": "2vohSZTfcQriET7uvjpJJry3HytMASBAMT1Bcuo3bvMzWt7w3Rtou7mzugwhUSy1Z3zMeQgFGKjP8XJF2SVNP73L"
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
