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
    "3PiuBxqbYKDHRRVfoYmWxVKtHRg46Rz5GSJKmWB8DxhBy9rKLCCGQBsjCEHAXWcz8RSDHSfdAnoAjq5zrKdsGfQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ounu1QWEej5rXzqyjwyt1uTwx132gvzdp3NwBd7Wdvd7CqafT2AhpEDknPWuMpfz7goidenYHSm7rZfsYuU8AV5",
  "key1": "28QAgWKDr1qWH4buVSmascX5LqTykadhK4uNcdQ1e6HP3Lxi9epMcJZkc5nCWKbtMEkdPNxoPJa5tGWuCJFum3Xg",
  "key2": "qPjhskWDBxDknUZP2A7wMyk9RFzZcavVS5znxDsyCkzZzmqicm4AuNXAUz489A4PSBHULBfZhLUgHKBnK3CA7uP",
  "key3": "1Jbmf9V2hmmT8UYpN76icNvBfCqgUG5u6epiaAj8MhHxMfneXrvUuhseevjxu5EAAaHU154DpS6ED7SE9neiqqp",
  "key4": "5shukpSukNFvw6W8QkeSddQY2QWYjjiNy4cdQ1u7rYYULHBxTs4PAmzEyC4RxyhzbKu9zBW5FGGekZ41Tni3XM7F",
  "key5": "QV2y2vB3kktxMJbaobZpSraZwhNdFHVjUb6SWP4SyLHC3a1mcpqrC8ux3vKHbUKRZJ2vAnWxm1b1d4vs52JfVwx",
  "key6": "3uQzerqoiFF62s1vnDs2v882Zx6uAFh2wGgcYi6WpwUDi2ZuYnhT2cHjQYgSt2JfFKh6LVfmJ6KqgbfQWT9fHoMZ",
  "key7": "4Ev8sTSkUnUxcftWUx5R3x1n3cZxwVEUqBzyEdVYnMVGb5G2tWLTffpQjzDu8bvy6xp8C3oeHXZN2P66eQynaQY2",
  "key8": "kiYwq2oo61fWbGDQREQexbqUBqKKJFSoufqWF9ZTbae9cASMdQQavY2kM8DcZfq5WSJwxYjN7zfPf7TcQx96cHc",
  "key9": "3DuhXhw4p3J8BMpaqjHNxsyHEoGdwhmpd7gtL7W3dYSV8RdJ5CZjnPPJSV6UWe1J1NiHq9vqpRV1YyJNZCBpU17w",
  "key10": "x4PTuYGS3rCnLcew4aBhekFDy17DWMqcQVa5kaaTG8QaAyzxRP5cYS66VXMvSP1zLtacPzgNtTZfpnRMn5LUDfD",
  "key11": "3Q3AUS6KQWbkhBKYczPtwBXrNKwHMCyPZEf4QgSgebP6fHdqC3o3hr1d3bvDQA5w6RWLHyDdWAjR3jMimYNBkFMA",
  "key12": "3Mgoq6S3VpNgxChc8WmZjiZbuzVkLjsjaDZEDwJUaABLXgM9pusaJwu6qmPF2RbNpS2LnqtTo6hDm172gbzshvQG",
  "key13": "3QLpkwM5hAo3pYZ9KJ1EyVNB35DZc4xpnGUv8A3x7PawPDdamvb2RPfqCipziG68jDdnSxzRpxsmRS9jZG8zoHQ",
  "key14": "59m17Xt9b65M1JGBuTMuXSZtgqxiQhSTYDasAbTSTz51aZpjit3VsFZFj8Pqww4hKN4Y2xaFBh2BbTr72i7pxhym",
  "key15": "5ARREZpvd4pvgQmBfDxUiacKLu5Xez7qvWrPYw31sisfzao1YsZitNubrvRYRzeUbSZMry9qNS9t1xxMWUc1xUGP",
  "key16": "42vfc6qrNnVtgjafR9hjan9pYd7paEuio5q2xvASWjqa6bYAgqG66YgdYJarWqoQ8cDZXUwaM7bs2Jeh2XjNzWqT",
  "key17": "p13ZpBKWhVaGyM69T8NUrceQsbUPa2gMKmjVddZsAG55pZWUhiNFcwZTC2nrz4YKhiLD8owX8pqhAmUThbwfUYL",
  "key18": "3hSvfDnwmNFHB8Nv2SiNsVHsWs6kifcYdRb4VNsW227nKb4sEPWGiSYVBZ4GypNYFWyCcEDxNyZc2TtwUModGGBc",
  "key19": "2jwmpzApr7xCtzsm2oWTeCqnBou8joGCkVJJAm8wVWwN2v4LXsY4D1uUKPhq2sejG3WjmGQFwevprpfhFV77Zi1a",
  "key20": "4dNNpzfNrzMBcqBiSEEVbitDBpWNY2NRH5g6eS74NgSBqrByfKFA1NL2etv8JYf95tEdvFv9HAvLMdrHuW7Z7pvR",
  "key21": "41DFm8n17bsRu3mV6zZcWjjB7oS6VeUzSCgUf7xjaaAAXQCjDQwhd9BxmQXsak3KKPDkCpi1V7PaNHwiFLccDKGR",
  "key22": "45adouB7dJAFcZjAyKxkrV8GWRirY29UmgUmxUc7PqpYowYPW4uDZxNex1v5UCrV2wc6Jm6L3sDRuzEK2aRQexsu",
  "key23": "N7v2bkLDBFyis2Yx8JovQC81Z7omPLXfiF7H1Kd2YRUjyAboshyiwyuixzUGimMx4CSvodVb4tG69CCJBhmyAzs",
  "key24": "3Sv3A1tQf66cuSUTAWd1zdcCy2EbHEdMNNPbVcgPxMQ3axbfy6viqW4g3Mn1PdS1SEYWkCXVbs88cyfZDRdgyycy",
  "key25": "32XHkg3tnZe5gpKhMns9TcfNy2JL6pq69ivFHpRGHibFv2oxfcskGLG5eXhyaZ2dLXEzBduBD3BrNwe7sw1XQYWP",
  "key26": "4hyJLbRFf1Yxm1Q1iEWXYcKUFC8ZPM8tBGprAB7rs5giuP13iHynVeM1KBgwnwokJqHMZySTmJf1PSP2FWN31mhH",
  "key27": "2CvXNsng7oBqUZE4WcKJxrCtrrZyFDUxDaHoe9jiTM9xWs6HWn86gdjtPtnkZwzwsMgGLFSPxCrC7yNrbhnBukpu",
  "key28": "4wVkTqmLAq4r7jYq9ZoWRwWtxhYUPmDMa5XQTKx3oS6MDr3EYZKXUuCgGnZK3ZeSCmUUwrTqnitJ8hDPN1c2Pt7J",
  "key29": "2dvBMd8HaVq86ELxmVAycXayURu2rsTj8K6CxjUhKQnVdNuugJTjL9qyF5dp66Dm8pc1nnj4JuA2E6DbeJ9Pt8BC",
  "key30": "3aKgdx4zsVcUt8pGp5pSPCEgQ8KKJho1GZ1P7S4voip5kvzap4ErvZ7XoWMH8NisP7crgGMgY2yUqC8AF1pJjYqQ",
  "key31": "54FemLgBufNkYMr8yVXWb739gVdHKuSaBki76nCUnaWmxqTMQyHWb3PQtN9fUng86ZyHdu3YADvHxZ6NLjZ7xh9E",
  "key32": "SZzECkg6aACLLiMxCYL1eL5crZ92g17mNU2t99wtNKBgkQs3H2vqTu2EtieciTdmAfED2C4hAvCAyEGW7tmWp7H",
  "key33": "56rXmvzRD2hKVzuRaXqQ78QNpFUmWaVdpLunExwsiwfakS2Ps3BiwCBLGof6rWZxy2cEJD7iFib3rCrLeiQK7bdw",
  "key34": "2azHk13FA8LFqRrVuCLxWgzrdHSqHP8Une7wsMRrKURumXjDTieyTny68khrzvNJh9ZYbuuJ1YHa3A7hZi4dxyfM",
  "key35": "2GHnzN5a3bCqDXSe56zJZhqfFxqQ8bKYbDeQhfseSkvSMjS4C6hXPmKZYfGSzDckdjEYZAp4FNx6btkmvK2t2WeQ",
  "key36": "3QyA8SbMXvnuCN6WXDXg44PpFpRWgyvDSnLyRnDj35pyFwMF9adwxdow6nXQkcXadsW2szsHvHm8cMam7pA8ACFN"
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
