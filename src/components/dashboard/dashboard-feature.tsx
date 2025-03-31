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
    "5VduYXpjBjyvFHFak8PauVyrf2wX15xEh722tc7jwJyEYoyyKsFfRpJRuD7KoXaRjZqQV7RCEWXJeGGyrjyZkB7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3otowytP7aiHfp8zp7TTiLdW9oPekxCmVzJEir4WR8Wg2FP47mUDVAgpCQZmycxNUWs2VCTnjgQ15ZvQTQZPfKe6",
  "key1": "3rbLCz9BKaHBwfy8mPxCmsBPBLTX95KXjKKXpwxSsM5g9RLek7wA3FyeGZa7K8SzztuRhqx3qJC1QDdv9wL9Fp3G",
  "key2": "22oozG5GxU7DezTHx2ck3FKDvsiWxkvDtT7f9QJdoLTu2f9ppk5UD3SYNHtRs6xwremxgXVeyyGjBcBEmDThTY46",
  "key3": "5opgJm4LWwbf3fDFyCHgTmmP7mGKBJzNyQntH4YGagvkXLfxZpX1tee1EpkoqFJ5SHUXkqW4XKLYta94TUvmpgS9",
  "key4": "5zYGFQn6znsXbqZAjwiHRkJvsbxpzWEG3k5Tdw7ZJGAgkF9uZRQQqatYtSmVceKvDwQ5ZV4Ucxt1mD3MLFkucmzR",
  "key5": "4XzEy69wp2bXRHc3uEA8UL12wyL7fyYuAMCsU8ggfmsZUPji75sTV3FXMpWxCDm6NQCuq6V6hpudgsyQwoYAJUmH",
  "key6": "3KgbDWSHpJYShj2pvZLf5N1fE85uoVqnA96GLhAPwNyPvYhMbjMkHVbWcXpi1LPGs9KVKbCQB7cSJdSNEXPqir6J",
  "key7": "5bdBMK4C9WevE9bvT4TJq2HWPeuxBghwznu883fKMZysUZX5qEiKMNryKDkK72aVVJpN53myhbjdExLmBZX26F2Z",
  "key8": "RmGozMw6sbmZw24VMgqcQQMCDdf5WjvVXVFKCrGYBH5BdZjcSSEeyqjgNvDdJLGU97jN57UTziBU5j6Wefq16rr",
  "key9": "BUE1tvprzePKWqdnP4EEvGw8Pd13Gu7PNuDRshVGJChpaeuKCXk3LMJXkpkFTqTs1HLgm2o8HKYB3wEdWNRNaYG",
  "key10": "FRLBB4AMvqkBNsSPqE61yZzRHyBCsTuNneHN4ww73MVaKKcQP8EFDX2i4SbBnCEsGbRhjd6CLST9w5o11NWniwZ",
  "key11": "5pcpqZw1hvaQNBmThQktuqBcnRXj7TkXvr6u3YYhdbQU8gkgzq3bTSzi1ij8cJo5pUVkrMJpTLhReNfK3ghCbNeM",
  "key12": "63vX1D8m2z5UMJuouJ6odwgHbrw6L83oGCMQ57eHgk95zwsoJTxxLyDsQmkKLdtH1aFkUAQa6Mr5sgS1w72aX8Ju",
  "key13": "3kYtpeWai71XYa8QAHT59M3Peg3VH3WVEz141PWbkETCy3kgN8pcYnTkVdeinMU3Awj4XaUKHJnHWTaYDHJ1JhQF",
  "key14": "5RfLnP9yWGHGYMPtnWURNTwu5KJjfupbnJSfuqJ4tbBpmPk8FhQ9m3WZMVdcbb5UwWaUEBs7TTWQQdi5pa2p8Zyn",
  "key15": "4kXQkGurFhjH42o4dZjuaytbes5afgkjDkUxPa6eX6ZW266tfDh4U7s2g4zpBvADcUDwSa6eRtcXgNY4KbW3Ljn2",
  "key16": "4A4Xq1mVEhW4MCYdNHu2xVrzv4i4J1FxnLjinZq3DW7znLEpStW2fw13chbYTf2d4zCoLrjZWUQhxXHa9QjBpjdw",
  "key17": "4Fc5zmv4GHnqParjuzHjN3bcctf4CmEpQGDXj2J3ddhpkjCt5TfHu6FkJ3UB3gAyeV9ri86q279qUWuq2yijkpSw",
  "key18": "5rcv1yb1h8F44S8xmQqkRkUwbiR8EKFUMrAD3nQ5J6zbCYuR1GFQGoDtbkqnHRyRBpdoozbrGjmWpB65zC2Beks4",
  "key19": "4Msgc5BeAD88E4yMMvLM8XqizZVxrxaGukAzybNBHyV4wZxD2H2FtBGNxYRjQGeMENwL77fnsNWUGWMGmUnEPxcV",
  "key20": "4LtuQgw3N8dbfgC46RVxu3iZ7E2MXr1UV8smE2DvnyEvZpazvZ1mrB4fwry93UzikWkYyWxDMZHqttizxx63Se5J",
  "key21": "4j8qYFYoBNjf2bBgGHxV9HfKcfpZBFZBQCYB9ndvgWSxezqXnNXz6ZYScUBrmjxrvT8pMZYG6bSQUrSPA7NdPVeY",
  "key22": "3wC7o84VbQorNbHRqU9VFStxgkT4rPSMD1TQ3drpQWLjv2y9bypCjRqPfDP1A6zYJ428bCCMaJAnMQwrSsaj5teJ",
  "key23": "2YBgGDyUtwLMZB6XB2i8VHanrxxETtRK6uMSG5gAQe7BS7KUofNpEk3bJKAjBW1t7UYpygH7eNCDV27YANt9gykB",
  "key24": "2WLp8wB3BfymwgoG6ZaePMPXqbmFa8BEFF128vcuYNxsN2K7JGeZscHKq5cwpoTKwHbsAjyKHtEx9PJBSRDAiixF",
  "key25": "52EVV9BAzmSSoMeiv1PaBJWQsRMrkUQpzKZL1SZhhqSuxVBmX6UaFzibZyfNitjgxiMpS1nEfriDDWNK8daCfSbE",
  "key26": "6brecLMWooxboWqVsz2HkFdxDEPamN9fvgUQdBB1N5CT46J1TV6bfhv84rqGVdB3KH8FJE6EU47c8kUNri52Bhu",
  "key27": "9mUrVp798qNVRnXbS3uP4syF49kd5Kmn9B8X1vw1soNXbTEqKmtdWeGEomHDXGCF88Y2LpNi5nTPGqDYCeEsBpv",
  "key28": "4sXJDd2XQ63zEFvYv8aovEKAwMpMEDxTAJP4TeKLeXkkqt4HMnYvrRfzT6puLfY93c3zQUL5pkioknxJKScDdDuV"
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
