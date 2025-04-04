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
    "5ZFb4FL6czprx2kxnqpz9gdBoFm3iABFSdKpFJcBS1w4yU93EmgZJfnYkFgDYekexE6tQR749hnkQinyhnpQeez9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mSCwCbZ4qGoCZeW8jSW8fLUEH4Bh4S5rh7zKxCjMRjZ2NNXKppwjqBuu9sZUX6FSTaGfWVgtGZ9zkq8aKK6fN42",
  "key1": "23WjamjHunhfRkBckpGHkDbjZUREhJhEwKcKtd9mbyGeBT2LmkXSPim6jWsb2cz7KvsqnCJEQUbGuqTL13WuUion",
  "key2": "4b9tbjjzdtH5hNUwbdaRM67RDMt7TbZ237gUbubsdK2XoXXT4oQHTdMCxq5gg7hENpwUEWzPGmHaqukMBXNU5p7h",
  "key3": "21v5jKagaJYV4MJEnah6EQ7GgRXkrpeGNngmUAYB13MtyKKH8rvAHa5gd2F5pHx7z4MR8FB82LtfXyk6bmWEG8WC",
  "key4": "4UPV7XMh6199jRS81QkD98jkfeDyLgZiwSWzBA5rcJAuwrhj68tyKiS8ipGxrHm6fQ294HrjCjAubALuCKX8hroC",
  "key5": "5zcuazo1xUwSahJauc4k8iFNtXPNDAKGuT2EwmzE5wJBDHoNsaKmHeN4hQM8nDnGG1zL7ZCrJcwxTWcCpEXKNgjU",
  "key6": "xrhGCHiv3qvoEgXuxAvWNoPGKeT9mEEXa5gbUdQ1MqJxpjcEiCgjnxBoxiifeYUEmBvwY9m8SH1r1fz2pGZvDcF",
  "key7": "2ANsDcQex7uCap5tnvC3RGQ9uMHYQRfinP6jkbVCLSeRNe7D12aU8mTpzZVVipf7jj2m3TgFydqGDv1u5Zu7G6XG",
  "key8": "5PxNyywhA31hCCDfMiykBxZFGMPs7QTwTbvRnTu9tAV3D7bEfLeEEL5ybrHtCykGWJGYALt356kooNpMxeqDNxxE",
  "key9": "3mftV7CMs8ee7SH9FKVTyrURa2yeSYKvvk5zdianEpz7N7v9kh5zGvgk5m5THRLp942AX3U4zj8Nd5mJ5HHhsruE",
  "key10": "5xgXfuwzEZePAxihJpFoYD4FxKqiaDRBLbfaEAF1Cr5Djr3o5NkM7aU1uM67pojGNoJQVYzJ6mxzfBqDnC9DFobs",
  "key11": "3SsntsP8KNvwwH728wdmpRixC3ZELQw66bnbNDDPtd1Yf3yjk2z5A9FjkRRndDBaTYYWgPJRRLHRsofQZgn6vRUg",
  "key12": "GGNawb4SKTa77Hg6dkQYcMzVQiqp6nmn9n4BhrioCTcxczokrm68hLnDzXEectcR97jVeySs6WY4fWTEGmWWa5x",
  "key13": "2qDtGiHW3BvYFmjkVcDWHFWLTTS6B4vXYPEDSP4ff7XusH2cybmUdkdZn23oh58PtY5dFemHkmV97zfefUEtcNMw",
  "key14": "5dwUrXq2nJnehWfnX5wyG34DLw9P2BbqPJPP9CCd2yNwhFZSv88jzQmoYMSQfXeikN8t96kCu7pq1jyZtTkx3cxJ",
  "key15": "2Kj2nM3TsWXzQ6jnMjVwjdXe2QVGSQvVrRMwggaYGpe3vsPeMeyRX6NcPEADCUzw4bMDMd8dEjYonkrs8r3XGU5w",
  "key16": "22f8hHHWFqAKVxvwo1AzAFFx8iBGMG1NjjM9QCy8VZb74qHjdFRubGYr9TwwmYAShAtsCKXYQhFUodUC82StbLA5",
  "key17": "2Z9M1gPeMcPbu3r3ZU4XQPpJsqZ4HnZPhv6sJ654LXSoaCHtKrPjR7KZUStQaYXWxzVrmmdgXPLj9hnd5yAoCPMD",
  "key18": "NZxGhwp7HGJguSbR6PYZuMjvudNAYf8RXJRtZ9Pu7dbtJkiaYb9cqvekjS8MoYxdoUUmnFMQASi7TeDpJv9UsPa",
  "key19": "3HBgWt7wNA1jvmVtsh61qQMBmL2PxQ7gpMbhMMV7femTtxpjmeHxdiW6hHHhvAsaoHHhmYrhwrwkBk16D7owfAaf",
  "key20": "5kuqXceSWkanxETFHYkxh8Vx8t1p64Dexhu7d6Eogp2v5N7Wzpee35bQfWnHmBynVuzarGzNzc2g8NaZ4xLQpG9d",
  "key21": "oamjFKZ32MGVRrpz4iWiWW999TDHXg7C4ZA3JKPKCp1bZrh5Amhzu6yqGtzVnyNeuZLpketNvGC7iQ8pj63RTdd",
  "key22": "5jSqJBi36St8QfTcvhsxLSmaHV291qf9RQgnMd99Fxc6owKTDA4d9taZ27veEdezqyXjgHvLw2ef9AsdWZXLfYmL",
  "key23": "4J5ffz1FQbX1zxJrpG23wVNG5vh9sbQy5js3Q3uCwhVvEYuoY9XirUf2PcwtRNYhqPiavsrhNxY6tbgsPswAvHWS",
  "key24": "4MGHLTpTgR7QZpBWFpXArVr3a4dVsTpsoWhitm4tPosKYLeEoFHR7YtUuA6odqo5LvqouCFmWHWdQ19ud8eQwemf",
  "key25": "2nuDCNFRTyEvygAkCg5M1bqbQZw1vi1CiBP2uqNsN6UeaXVwNA1Z9qSnGVZ5SMarSnXGtGwGNH7DbJhERJAVMA7L",
  "key26": "48FFFDqrJTWLkJqmY9LqPeDCct2fvv4DMAt1jwpjaeizzcBxnYskxMvH4AtWDwkWZw8SPcMxYNMznL1RwM6KTRRD",
  "key27": "2DVqaz9q4jsCCyXdr7pTJxaPn3KGcve8Mws7ZrQhA7KbzT8zJCpNy15JxgX9xXWSkP3syJvCThVTQ2SiLbLD9tsn",
  "key28": "ULobmRhye7o9vJhP14ntmtQnvRycAYdQDFeY5YN6JKJGykC93sgt13ujVF811h3EEdLnFmxtSjP4aNigHQAD64E"
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
