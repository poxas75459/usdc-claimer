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
    "5LhRxaPxVAE6FK7VqYyXBvUo6vWHsYTpnU9MQnvw6v6ncujTGxMPsqdcM9gvoqAnUAaFXyAp9kasXbCWwDPjWkYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fEL6RZbnb9PqonwvwAd4cTSL6uwRwbuXbLiVbKhmAiJXaYLA3ByESvpC2xhbBqDkcTzfLcEy5Biy7Wg42cn6NJC",
  "key1": "3yP1NGosZHhqqZMgdt6AxVvw1H9KGhYNxHryNFRbWvusSKEFLt1rQ5x5ziaQeeMJpFnJDjThM9cFP848nvSrNP4D",
  "key2": "4Jf4qt4FPqWUoGybJztvZemRnTKB52mA2LTThN7FwBRhoFhHf3wRUjgGT9Jq5V1LKEC5iGJXPAZ2CqyXx62hLMH6",
  "key3": "5o7i5NdyomptbvzE5dZu2s1YRdxATYU8aS2DPriNBSqe5dYbDN4jaAC2CVRHdsSA65d6YwrmgKrcjsugdJPXp22K",
  "key4": "44qNdyGiZ3xjf1ZxUpj3QjimrNsJQCTNmT9FX7BcXiG53d8qZ1PLfjsgjuqiSWhxrKe6YTnNn5FJ2D5s6SkDwNqu",
  "key5": "23nYgr3963Yjd1DvW4NPjsscXXzE1kTJzm1Agynin4YYGjuiHaGx8DX5GUvzmNfEHsACnidnbRW5Qbm1FwXvVBjF",
  "key6": "MRagUWy4fqgmX5TxqsyzzKJYDC69LmKN8iRLR3t6GWdLo7nJVEt9zptLFYkwgjduYwSZx5tMh2vURt3fgBbt38v",
  "key7": "3XHSCNdWgAgcN8t6svjkLFayznMGJZgbhQQ1ZCaxSzt9cVqxu4avMowU3QycqxwVn4rDqD9KZ6YQm3QuWWw5HHrs",
  "key8": "3RRdJQrS3Nn698vyXdRwjkRjR3BSbLbM5gvJAKv1LwoQr5AYnhfYXMRXVyGeGkfNW4s26NuW5wUSRpzyqDyz5Kc4",
  "key9": "2VAggzCkabVFLrg27CSKa2axABxiV6emTU6PLufGwJUspTU1DGY4txpKa9C2zNCbzuz4QsPnAcr8towNYdeq4y2k",
  "key10": "5bhT8ymW1SsrT37BhU9mbshtCWjeZGGiY9qUyVBrV71J6dFa72wbD7HUHuZtxtjyPz6uVKtWnRif4K2X9JiLdy6D",
  "key11": "4B1HLPziNYzhWQhKEgSNZPRKBtLkncAvnCWfQdrCJ7K9LZv7tmhwa6dSqmJQLHAnU5eYPUh1xUL8xiByU6e66uVR",
  "key12": "2jxLcEvS8UDtVFvL4dCCSJSnRtEMD7knGpQqnwGqkM71bqac5EgVbR66Ye8W9xyr1niN52RDrv14bHqNobfwaksJ",
  "key13": "4gViC9S4RzGBaVxUKbpVKg6jurLjxVjMPnxsdsuqMCmLEdfLZb5XgPdARa3tEzcW7V4NGnpWCmFKoesGXxLME6pu",
  "key14": "5Q6PFk8bmQEgrdb2AywZaBw2oErmfv5YuYaFHXZfHMXBMMch4Lt16q7ZVxgbAMuFazy2qVg3EpVA2QzXZ37Jz9Wr",
  "key15": "3kGXK39aqxYBoWBeKPdUuZHURTVV5vD8gRZKRoyMX6wFAR8fvMDFBtQTpvMpAqZbnfrtGiQoXZEx5wytzESWqUz1",
  "key16": "2JNvM9mb1ZLEXTsS6owRjiHzzh7CxW7addTwYMxuedDQFYk9hNZt5JBn2183NrHUK9Gyrh5VWnT8Uy4H33TwXe4b",
  "key17": "5hMPn2M6dndX2qNNN3LSbdLp21FYg3J38cHFB5r4YHudovyxUEMJx3qskW492rdHD8Bz8XYnUF3EvWH6u7zt2JNX",
  "key18": "58m93cn2kdkHfxiAA6E1GuQAr3XpdnQFmkCmTX4A6PiWTRJAUeQr4SN8T38uacfBZt26iUFJzVe5HWMEDSHEf6zu",
  "key19": "59WEMpKpXF1mmVjyXYUx3SE3MHmhEcggNLFkjHfRRQyA4uD1U3hEsnDQrStbts8o3MAiF5bdEuTUxnwx3RTHng3u",
  "key20": "5VbSPKx3dtZNmfJhi3FAzNdqzZP6win3rLfkuSHioCJ6DqT1wuMvd7gnKEPofAQFqqna13Cjf1zqHdgECqcYdPkF",
  "key21": "3Gs1dyJqwV6KTV5rgE8mxsU86ebFcVUqE1yq3PkhZyRjwmoBiQCSjcE1tPKVhWRVXwCtpBemsnHtA6xJ4M6NfvcF",
  "key22": "4aFSNtSV4B6E9281mMMBAodh99fkJEWDCvs45HLRCjsNcWWQ9sMTtcmVP9un7hAkJxub44QpEzYm44VWV5Eb4bRi",
  "key23": "Lb1ToP5wLawVf8MRiKsFJPw3ugGU2P2YEvjwPWTmfwUgUtN9Jrhrst2SSWe1SYZVDYqHsKFJoLRHWG6QkjEp6W7",
  "key24": "4SHFt6rKMYxbcyPdyMCETpjcidD5Y7t22kDjWdsoULTdGax3rjcAFWpHwFcrDPKJ8G8aiCoFoYWDRp1kAudiiodH",
  "key25": "zRLAhZcJG5NVsQYNEFattKGyVf1J9ijaiLCsVffLpAyBhCqLYX4iw7uZuSNKcXmaVXk2QzxZ4WaYpdMbC3GL4BG",
  "key26": "28FsqmoJQvweo6vK9YcLqdiF3wGU2jUguU4YMRE6yBZtB1kkAkDMPLyVVS7ZLimLGcjnNfzvJ4WxkSHcHwCPNRyi",
  "key27": "5RtiP19hg3FS2Yqzix76MVxL12L9D4do4EqBRpJ82DHAqvLwbByec3vjhuMMjNLaHy86bYa4uXcgcMYHkre8hZfY"
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
