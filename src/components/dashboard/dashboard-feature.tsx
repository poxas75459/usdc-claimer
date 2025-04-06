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
    "2atZsFyj2Y6ytGf7CRDRjLZ8N69Jocu5J99NjyRpw7ZQjtGrQgwcVESnV54nf2GVWh3cRpDpf2YqWgxzNsWJ49YL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tuvtvfdf3Wu6sxTWx8Nht11UtELH3BVXz6rJFMzxrqJmiwCDXCLzn2wgN3KxDyACBP938vJAs3RgN25VZoS7yGt",
  "key1": "2iMYP7AGWc1DPYrF9aiFP6e43XJTXFv3z1i2T4JG6RSeutrJFEygRih8yzw5LgjNYZVr2iGLG1gpU8XBfZ33PnC6",
  "key2": "3UWan8gW6wx24MoNf7iYsKZzFzcrySkJVtHzeFMccwwZmXLzaq8pKsW4yx7Y3MnXB9dP2ZesN2UWgmyApEP8knSE",
  "key3": "2nArSurKtt1JZzmqU7oWXrACCCoLv6D7xSYPBhRFh5t9LVRupQ1n9K8aeXWenHH9pCmU5ogQoFE4pqB3YvQcp8nm",
  "key4": "2QoaLPfvbwNetJDbVFYg8KZoXrwUyiYN3Lay5VSCc2Bknehkdk7S28Zt4sjHiwyawNMxkb92BqVPWMqZfkRsmn38",
  "key5": "4JSSN4BCUY4mnR4yA2TvstBuPm3z6koKXDY3vfMMNe8wssCdynwnHV1VUhCU8BgMUc18jBi8gNJLyFZE53wKZjMa",
  "key6": "3BSTRHoRJU8pHBKjFcWKJDYD4qcMwFmWLCcnfqAmR8ZH4JwojH6ucLy4VbktcH6EKg7baUrW3HjtuLfus19CxrHv",
  "key7": "2rwjvytWcAiQATKGaU1j6U6KjV9kqRjRctacGJeAZPkjPLGq6MxsjxJ34NqdLN4dwAgdS95VipykipgmRLCYXnDW",
  "key8": "tgqraqw3xstQ9P4E8uMRKUjXUwmsxXUBoA9CrEHD3BsG15hwSMhn2B6Hy5pK5gc3Y7XHNQqjr7R7hq3sYeGxcVG",
  "key9": "4TeBcp7QKtWEL5BF185R8TnC8aCs4T8Yem7Ud9gWccdxsYXeHJHU595zEW29RmBohMdwgyCTBMg1LrnDd3PwZw5G",
  "key10": "4ZfChdX14aZ5ECTwMKKM7GXXZM1BMHb9dqyRpHSWxr27AHrBAZtmCx4Sc2zYBqeCcrgebqAWTBVHTwcmLis62jCr",
  "key11": "2knHgweze6bQMn1sWPMWcgxwpz6WJomjQccwaMqsAYtHfx1T8YvL14VmknxkqHa5rAnw5xxnpkcX5boiEbhGScFi",
  "key12": "3XuB3Q19Y21FzK6hM7WAZ7GXrq2VbW9HvEk4ZitHA5Jk8svwmWUF1jRggZEX3755eowpD9BUsEbkj48C3PjjLezm",
  "key13": "4WLyGVWRNGUJ9rmbQrAc8ZXw3WxZ4AMiDdePVjEns6cbxLJcvo8yCvhHzBYP57wwGHWdNjuMr6zejb7HnU3uqSTG",
  "key14": "31bSy442TjjwoCjexCJjJYCAvbQjCRDLnMroz8kHeyD5LXVvQPTwvCU8WAv2QAjxr8ZdgeKYaL1hP5H7V5jwZ5VE",
  "key15": "THZSXMsZAdWQMeFLKgEwSw2baynHUDXU4Rf1u6H8Uo6kZd9MfhMgzwQTX8cGLKp24UnoG9v3Yzs1XgawkyXWsHk",
  "key16": "9FFtD1R615rp74iF28rpD6PXjqZuiC1Y7wJpsbchnHP6hfEX5vNb4S6L5fzSQgTLBW7gKBG8prTBAMvpziaAogK",
  "key17": "3V3TGyrtege1zAMUvjv85qjNHWsKLceQomwRRgS7zfcwoH8odSgcmdGGbxSFtBkiUpczbMuQ7E2i3EuKCewQhpUU",
  "key18": "2A3LT5N1yGPkWoaioxD5a32vKsPLPhg1XHRjQqSvxvCRbjQvYsRPFcU965CZ2gxtDBNiKR4CC4AfFmAzvTzCJCKi",
  "key19": "5Zzbg52CRcgBzKYVZQA78FnLW9BAUgWs7wQ6ZVB4Ruw8SNAbxiFHxsKg8Xwc4xYQjB259DaB9tgDK3hn4LVkJAsY",
  "key20": "QTfqnGw8iz5L3G2tLXrfhND6ET2wYuKcSv5janmxsp3Z7JySQYrFWKzSRNXvrkdUEmRPJxBn1froqYV217hUdFT",
  "key21": "qqviBoV9cExjJg5aGQUwMijpcbjUaP1YkbnrxwKh2QirMNyGtHmMp3Nox5pGTbKqQFiAGkJgvuY71TCzbnKxDaz",
  "key22": "4mE1sSTkEphoPpDxd1Rs2THTPvdhEvmTc5yhFHxc6VpkD3wfa6e7K1nrzThQZsNcggFov8qYeryB5uALaskWgKFo",
  "key23": "3sazyqtnruuxUp5cmx8a3C4RYXF5jZ63UWPpCHej6FxbcFZtYdjLY53kKWXumbi7ynscVRLuAqJ4597o9cZUn1qs",
  "key24": "3VrsLmCHyVBQmKuYez1SQK4sbD8D2Tn8T3roYDbqAM5Wz7Y5SU2sP6i6jnbXVnpfQvRXm8CS7e9rk6jH5U1Y5jy7",
  "key25": "2ttVcM9wLFyo1fwGKCjinWkePxtE9whPhWekqpYwEEYtCckPfjH4ehNwnigZTA8URn5jyfTLLHEujF3Kxe75k1QP",
  "key26": "2CpMHEhkJwVbzL6uqg9UuXrE69Cr9kpWXfFcoN8otniSVGJ6fgECsUxxCDnB1DFbyQwvSiAU2hgqnWX3izgmtz8q",
  "key27": "KeQYPBqC5ec4Zw7XjQL7aiK6C2tKqsNBXvJC9kZpUqzEb5vqUFDoy37qeX8CoJDmSYwzq6KFdqeUMGkcX6xjTdS"
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
