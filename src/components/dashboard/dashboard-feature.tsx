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
    "2p8jXM3PYDwQ4n77ix9zzC2D8Za6BLRCMzxMcZtwQAJ2L5Uq4j3vVMCKUfgBnXESRb9vniDzKDoK9ZXygN83aadG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24CSSFRiK6haNS9gdaE2hxQhETSzQQHzeAjByeevUoAK1M6TEn9WMGUBcSuYxq7x5dsp8CkGJ3iG8W1hDvyzACxq",
  "key1": "4dLpUPjP5sEGndM7huix6fVtzKuCujaEZ8SmPFvNvbTJAHpvZsxgzyEjXjtwKK3MjBUHWM211ATAUkAgayF1DZRf",
  "key2": "2pvxDYBy8dkfCo7QMqh2m6JBsT1PbvgLSvshnFgPsbnEQGP3NdUwfmkaa1GNkUDeUL5nbWT9v7M8GuC5cA9QG5cu",
  "key3": "4QxGKg3mrKBMbL2AMrZmhakMsRrxtPpEmu9ZdRiRtAecBDL88ULAFPpkSMuTMQAUCL4xkqmDEAUAdyJ2rbYTsS2M",
  "key4": "3oEhBQ6HYgSA1RZ5LPSG9Qk9VLzv4XGATsaJMqjMYco9zQcGiVQ71wDDDkYv2DuwxVeRaVb6hoeSidERkVwM2nwW",
  "key5": "4eeQfVv8RyXpMtiLdyDaPvjmmvYfJ7xg3Yeu4MhK9WQ2y3cSJSMUgmE3q898co8RDYL9diLjo9MPqrUTNUK44EtR",
  "key6": "rHc2UskWw4gjsNLUAbRrUGKzvpNdu4kz3LpdLJjXJisEaWNpXtS4KeAj5v67sXRciJqrZqZZZvKjL3Pz6Kxg4Zq",
  "key7": "4XXnucXZc1p4D2ztvcCYAhgA1GeoJqTckmX2ZEWKYsdvmNoa8wfKJ7smcf9fvWknkNfnVfrDJGLrZ6AwwxQCT3Zy",
  "key8": "6VD7yptJvzAxW3ahEqzsiJ7YM4GPnqcwaMQX1t44tmhv6WFZc5BFVJBSKsFtNMx5rTMonaLMW8aFcc43vqeWmmt",
  "key9": "44XE2Qv56iWDy5Lfhnu1xbGqQc6PK56TibLHeSzvdVQ1WZHWuuHEGmFFvrsvYU9LsdD14AG5saKZBmFC2gVhE1oW",
  "key10": "5WqEAFgR7TvjAd1dp863SWzT38TeHL8cMPBXgH2zYsxuYeEU6qQJPUjXvrAohsxiTdY65PThM4jY9rgJpqpMwh5e",
  "key11": "3mSGzRrbiQZjVChKRiSoMUvsg8mqcKPatGiowCvi2oRTeubMCykvE9wTBKGzYWYfthTSygdEuMbyq6Cg6VvwHyWe",
  "key12": "51C3x7iYCeadZziTFL6vXz6fxMWKPuucmbPNTimSpCMfiXw9sMLfv7T1o86tNrsv1dv6Fe7aGnusjzS5Hmx9Mwod",
  "key13": "kX8ChMNUQK6N4jyGdKrCctDjN2rXq11LfLHqvnKhyMfFVZsPC58yUdGLLCE1GobvHHmCcMWaxSdTufsDXEJw1y3",
  "key14": "5J1vD29VjrLgRVCf2dsag3c4R1KXZeZZKuJJwyvmt3MCn3E9A6b6wqgEEdGvg9ZcHXQpdyzYHk5TLsngqdrnfQeq",
  "key15": "1QJhFVgmNxKiyWA7QufuQ5L1B4dET6ZsB1iSug71QKVkT1kRnzS7a3Am7NCHfjgDgzdDPBPVGm3CWrzJmaowG7",
  "key16": "3RB4nVKtPpr7ua1tHG4vRwxr2FEVmXHRNSiv5EF6mVEhYRyrmPifB6e7cR8aCKBtFX4bEM4L3kLMjKVyy4ystabr",
  "key17": "3vS8wwZQNKCQucgfNECKvB2HUYK3Juf1rpuXv23DtSnKBjiHZPhNTA3CRv9cmJr14AnJEoGGd538yPddMmy6isE1",
  "key18": "5jRmWPgcQzinACaxX5wq1QVkEuzGAVgdZp7k2ayeon9Q3XZEGNVyPxHhHahNNhZXa9cAaVWTwF9bzBszUohydRGq",
  "key19": "219kEuKP4YwN2vb95yFAAgkUFUunHo2WZMoL4bDzaKKh8zAjqUB1HYoB5FRS6Z4hJeyZzUZhvLbVDC1vX1jE5xPV",
  "key20": "67ZDrvKkMuf2ZM2hMSgN4oHjWptJDXK6JH34EHLes6P4aVsU77Uu1XGFsLHS7GWiMUXZzvwNN84MbRr19AZSweoo",
  "key21": "3DpLyv1FK3nqgE668TfRDSgy5uzGBDvr8is26qmAGdi5JoWTztdHdimS7TvQoPwyc5z8xTF48hmUrQuPXJvrKgyD",
  "key22": "5QnBDuGtX9WiAUHkP7J3WN9NfXooSnRzRhcgdZh5fq9DnopoHXmFuFZr6RnCXpDbtoeTDjhj3sJ6eSgDtxbjDJfJ",
  "key23": "3T3ZUNXJ2KCjUc4ic5ttqC9FAx6bsSh49kfzLvsacM46b9YUk8R5GCnyo81jzZyRfCFS1BXTi1EhG1pbjdXbdTSn",
  "key24": "3AYdg5PtdQ7VeJRTVpcDPTSxEGdRxXyLBxqiRA6K6d1D2p3dn1z8qYxuPfRPvHqNsy97rzLGxJvtqNdXsmygnZ4k",
  "key25": "4mfaAFuJwGqhbgQBC4LjPk6ipsQqyAfv5VmKHdaEC86NTso4v27D7dhDcbeRo3z3gmPQmnkSMJjcpyEJL7gcoE4j",
  "key26": "5q8ukpKx5peP1dE6J5QNXGb4ktJnPacp3KDjn71MRMg7QUaX7gf8jWJvPwRVfzv5yQwpMt5wp6brYDDxxqf4TRLN",
  "key27": "5r5Z3EGZGAiyU1szwfxitJ3F4bWDAv8Dt2RJ5LpFz7MaNojJiWk4xshaqVmDFUKrfqBTZEvPTxqvdNWgkYGQEmRr",
  "key28": "2XBDfcg8Ta7jH54cUUJewCaoPnQPcteJJW2HB4TLczzRtScKFQGRKS3XA3xbyQTsyZxp4cxnLnUvyZ2JQhNo7nSP",
  "key29": "2gZS3nCrqBH6JM9Vju7ZGn4KYhMtv3kxzSZVcLtcywjq7YW7bsAK3vMoc37WFauWomBKF2LLtzwT7gDqvB5DHhi9",
  "key30": "VYgSTzKM7LCV6M1KiMQvEr2tMAKar35RSZ1TBFvy64xfR52v5LeJZ5SdzZucSforP9gbwBPrbnUCsqeUDkhGExM",
  "key31": "5yaLeZa1Bvv2kbFnj66Fp5vMXSVZrtn5B12aG33G6PprwS7M7cko72AZEvpHqZ66MVtvG1JZciVMtHCscaY97cBX"
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
