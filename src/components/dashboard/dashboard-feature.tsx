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
    "ehYktycZQLkevRjjQbSmfyeVpQvh6Qu26Q76WBVb9zhfpuXzm9PoXhr5u9p1GJUuQkm4ysH8j94CFjdPSsBMHLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T7YeLcxLiDjwuavdETN7Sg7ZLStDC15yWepy1bAxfPiKTxV2EZ9eG2SUKFhopgduBGAphEVzAtgAtLAwJNRdDGy",
  "key1": "5euknTceKKMnT1D2ViiXgKAbs8Vwnqr9z9kfNyPmmdeKPefpoTaa4tXQFhGaJ6sjEaqfPQCnXC3JXqKnBeuRn4c9",
  "key2": "j8GMvu5JDbAsKf9AkPgfzghMZ9CMgHLr6DFinAUfwZAbAggwRL3HY69uFVwnAF68gXtkQE5BeEfShMv8jhz5vXQ",
  "key3": "oskHh4AxNu2QRijgjEDU1JeGWSMSn7tpu4T6E7sU8GrzuxTJ4n1wuyuvsPcgYt3btvGehbpqDGkv3Vz4o74BaeV",
  "key4": "4rVojVCpYV1VYLA4es8CSEjasX8ACor4Hks7Yiu2v6P3QVQr1QhoGgjVvJtcaFKhA43kvxMhfAnqwoS3xsu4TWEt",
  "key5": "3bRZ338x4FXj57xXRVmTzTRKUycWcyJWCYS7ekvp4t31q7JK7ihirFvzeRGJeDQGxb3nQgipHsUhBB8rpiPyriQA",
  "key6": "5ZAkSfZ7MUWAGiAdTVZ5seuEWJP1KcEdKxSRPHboxdjFaoc9ewBPAr5Syqgh1rw4x5nVTMyBiZ1AAxnHMbsiyq1w",
  "key7": "3i6PsJdT6jF6LpgCxu3c26N3mcF8BNUVLrDuncncBD9u3MnL4HaTJWUUNy6B3vstmnJiYBUu1iHke6PisgbJfn23",
  "key8": "2dkyzUkWqK9iPfEWJJe1RYCKU2EUYbk1uhjfQGsYZQgZup6nYbE3Jwt9quFphR7tgBmuASJgTQQdSB5VBR6eQfUZ",
  "key9": "4FPkK19rf4K64kZMRYyZWvVHY7EuXCKs3QaLMsT9nBrLnrksFp5vS7entTN1x3bG1mZpDHHbQcB1m3zM24hLEQBa",
  "key10": "5WYSuQnpSetZ1L5fcxXiqh8owFuji3r41Zk7MUCXvHT4FxZMzViGCWLRUrnf9yFvdmv78NxZ9vNRsenqVfB2Hrew",
  "key11": "2jJSxcnppiSQD4RHM5NP78Ey1Uxw3urUn44Eaah6ifUYeYKWiR1s7qtpV2PDpAcXsduya2P8YNqBCiDhwN7gu7U1",
  "key12": "5afxmeqCvwD68afdBPcvsEQcDJgstTqHRzRjU1om2Ctrd4ouLz9rWg6z5qb6VjJQiin8FWwdHDoc1LpFDPh3Db3j",
  "key13": "4RY9xYhWzKye3UEWB8X72LDiMoJgMkxwEKPztQtdevF4jd5gvVLMeNJvVQrZbn6fF5L1afdx5aWmHU1fGtgvQSco",
  "key14": "5qJnCBPdL77RDHn7EaPGGnnd8zA953ouAnDreaseqyy4MyzH8SrMUyMroyJp1asBvTqYgCk4dj1hk2A7ZgHxrjQ1",
  "key15": "DxPMNWcQAwLkdgX8mpqGyfHCjc6snMshfseEJ9ahaRj6CTkYYhj6dKpHXfMfChQ4wvCRqKQ7gC3osNuqNxpr6EH",
  "key16": "G5r2sp79DFJvjmjuHm44PKXh2ywwh5RwwywAJy7Kwe8V3gNhr3fVud5HatwSXHisf9C9pfuZrBW98MubbvZt5hV",
  "key17": "3JVVWtrgob2GKVkyUEDCE3X8zSjsJXTUbsrQ8cT5auzE48ot8R6jDTykn8t4mzy6X7iRkMS1K6JjMsgjZHx5F4vp",
  "key18": "3FKeLMZVB7fsCbHsLx7Dq7eGpHGyfvwbkp7ESonWMr9XfVxxthW8wVxcRE3tg6jnqmyu3LaeektrceJcs4tdHXb1",
  "key19": "3utpfX8o2gwmtixkQT96AqczMPosMrUj9mRznRdoSGHcckLv2JzEkrEQ41iySas5MkNfoWwWrvc8mJBTvLqaJUEm",
  "key20": "5re5gn3prWA4Uu15H6KKdVN8QshgGYPyvcpX1a1VxLV8ZHa4DV1NK4pqF4YUD2XkVT1NTFcaCbqASbvVRVCPUqfs",
  "key21": "jvKW7tN5W2QEQNsWXtJGnkM2HBVVyETAtHwY4afZwmm4GL7ieXyEtfLmWk1Ck5C9bVaNu1eSvdofDjjxU7Lae4Y",
  "key22": "2KAYJTD9NSRAgsLifa2C54Z3LetneAZuCn3wSTGCqCuR9qkApAgg4fpTPU7Xf2KjUEKJDS4dKLuZCfY924F1r7PZ",
  "key23": "5932AkLPvDpa3spa7A7v9zuBn3QaiV53xTiph56gLoX4XmmJdojUDgBLWtGtUEtq5L6Xiuv9rbsEwWEaWLT5x4bc",
  "key24": "3pn9NLk6VuWG2m14eoE7WvvBsAYSgEWe49YCUsRkbtpXVAeAib2cL1EsXaA8ZvkEi3Y5qP6x8x4o54xHZ9fxYddD",
  "key25": "5858bxZbYDEvHasQM7rhBVJkqPqSpXEoRVUZzUxjZPRivcwk2xyGAE7rHBybVGhKcNL4Y3pxbx4QqWuhJNxAB8LY",
  "key26": "2s9Lc4ypmLKGXtHp7Mh7pDzLSNPj7aXrc9SJJnuWPckU2wTNwi6FPBoQxmX262bvrSAcrFkgCqyuUL9YF5ZFiygG",
  "key27": "5cVnTbZpUV6uRrGuiVSeWARopeTXPNFAB7NQ1umbbVRJ4JNsDf6H5EC7yTetVuRU82kfTWeYFzS5nTBUY5fwoUbw",
  "key28": "3iFE7cWp7HT2ku45zagxJqckVyZJqpqduFfZNv6ktSfcAktss4jZjaMLgSXqngwzD7WS3n1oN7s3h5UVwhfsEQit"
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
