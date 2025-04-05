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
    "3YXakpwR2ESkaRpfoUqKH7Da8xKncbuUxX3Hjtep8pJYvnKZBGjG69vo2MJTUwDf4xdJM2EEskWB3YBFFa6SP9tF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59cMbBex78FDHX7x7pBAuyCuqJtNkaHXEui7S8RijiwRRrXfLffe7odEgt47optDfVDpd6SQhy7PeNNX7pGSFhYJ",
  "key1": "5Y41QDXCNHERemo8NXYkGAkFjJ4VKr4qhMDEYp6YNXwnS6trAo7WueH82zB9mk1Q6F4bbJZPwDriSDojcjXX1hDw",
  "key2": "K67aChjWz5NtwzyND6aXDJvPWvLMbf7YxjcXfAQQa2z4iXCGheWcaMXHR36Cnf56UMAgaXeqs5Q8PkTQHkdUzFu",
  "key3": "2JD2keKzNcADGT73Majrxbav6YYrEwHQ5B8ueQLtn7xbxAv7JKxfEHjrVAdTob3zkRQonVtVGgKxdiVG6z9DzX8Q",
  "key4": "4jSKS6TNJtHeX2dfuJWCLADRRWNBnLwbSvMUa9QikhPyX8mdKusunxUX343G2hb8UuBS4Jpy8e2uqv5PoWUf1aGZ",
  "key5": "42m4v5ThEatF3kXsnKJfVFGAEKmwneGq81mmQqNPZ1M7XL2EhbVtbQWCpqLRWSH3BkdDQDWu9YgqZLRztPofzYEw",
  "key6": "64ykkw74T1LCD2QAhjnLnQBaTVeULDVZQsBL3q9rmYwhqVRmAP25edzQkE6t86C6Zra3ruKCowdutBiF5q9gCVc3",
  "key7": "2omghL1y6cXC1QwkJkz32KJ3sZUwDRNPH3k6hiQBj7u8Pc8CguBKZ5pY7wxM6wNwhoti6NuTQP3pcWBmjnXKVPPy",
  "key8": "575VkGXDHwTetFxkA3oi1b2KVWwDybKRHg5iNpcHUa86h8zTCw2x8pFMm2f1Mr3YPzvH9MaSPBiAski8yxJ58eqW",
  "key9": "2YhZq9fDWZ25HamT3Hgv9RFinGPDUpET89rEytqHh6cuhKB5Fu7VvVc1HvtrhvMMwghUY1QGFTDbctZU4SoMwrAS",
  "key10": "3D4k6yzJDTnpn32g27huDGx9JqhWvNmboYiqbxZ69wyx3HryMWGVnKeQYdVBapsFo84Vsc4JzUTc4xkyRf8axBCR",
  "key11": "4Cw4Pts9uTta7y7bfZMxG6TaV9bQoFXyLpCiXYMrdSVX1vNHaLcPRxcoebH35TRJi46ap3jU4YjmnwiWHqvmZYSB",
  "key12": "9RDhu3579QC1b4ST8ZEpbBG6ZZKgaQEzubgrdrHYxCsHjDmU6JwQ7MM4pcN8A3kLoHCNK2tEvHnZkZ73uYgNXgB",
  "key13": "2Juk3mpCg7WRR7DtGD5nKMHR44aa1o9toshPTMfAsRpeQMQLAMSH3TR2mPtR1poLtgq3VUdwtQMQnKttW7QVAFYS",
  "key14": "5L5qjkv3LwiL3tcc9nT69d4LAwJXsx7jYQ3uycL4ZCqGUWXxd4dRZ9Pp2zb5MsXevvGRU6ZchaVndBQp5gXgdsme",
  "key15": "4y9uYHnnMkr7WsXMaD2BWnK7XcWwioc1vsrt5n6XXsUauVqcg1kjbYaEvp5a8hVBSYLgo91gAvduv1DGR4jVWKRr",
  "key16": "5nFcoWtDXUyD42QST8w2bky8DMAgQf4vAr6heGYCEncdo4Vb7qyaGNv8bYwgJRpdJnjtkdMY5HCT3xAXsJHTaoYR",
  "key17": "2JnVm2a5hJNjEH7YUUXBCm9Cc262phePMZw2459G8bqbE3rZUhxJiGmSXQKN6rGn3chbVC2ymZ9UzQN3S2dmz4T1",
  "key18": "4NLBiGKkkmnG1f3GYVjAawZgUiR75zt1EYifRhzA7jv1qXggMLWvNhvgVmmBunjk79QfkiRd25oEpJTQwSMnspH8",
  "key19": "3cwrj9CZb9m5mQcBT6EQtEhFwKyArk1RDLuhmNpjJbRdWCUkUtveJqwhqhtUgV9UQ6WT5JUKpFufUWV7WVbKdPQK",
  "key20": "4sUTPsUQUB1rZBemgMwbfQQEbEfftwb59FtkXJbBGVZ2waVg62AE9bjTcrapMkXunwFmGp3jHDpbcNEkBjpJrLTa",
  "key21": "3Wk8uDbok9wQ9s9LDbSpgPhsWaiWg3Ao3PvYS3Q2eKLLVbVBmEAVj1yvTvEHcwBAtKwTW5ShFqBewaYuyXDcvfh7",
  "key22": "46wo8npbzB8agZS66MbAHwPSzYrZW8o5QGGdof71W9Jxnojb5HQVSw4n3ojKEAWorZfo1hi51P1NcfUcAodd5KdR",
  "key23": "2QoHrfg9NsgETkhLk1XgUgADGbnoNMvGMXXGxu4Bzgc7JdukpVqcCQ1TdzA313ogSju9uBm4ow3tk8ZzprRiz5YV",
  "key24": "th1FwTnFSCQHcMhAeFwfvhMR3eA57WBH33BNkwEV1UPRNsHnLwW2ssZbjDHDR5hLhiCTj4FFRaWxCNfvjet1aTT",
  "key25": "2zVpQNsHgXvvRCjSYZkjGS6sGHcUEc8ZvG79qHd3DGSN5ZsRjQVLJsDUG29TtGFkUFzq2WaaKZMvZM1gbkZz692i",
  "key26": "i5bxu3h9N3ZFka3mYd7wtoD4b1VxVo7o6D2DA2rm6GQKDrdJfrxFHpAWDocx1qu4M45YeCx2fx4yfqRSjwQ5c5U",
  "key27": "4MR5MdxVi4L46FHv3NiFTenMJYV6PhAniLPRKYgchdw1VNCEwkDcJQykqgD1pxhANniuN4Cc7jZW5WazAzuHMtTX"
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
