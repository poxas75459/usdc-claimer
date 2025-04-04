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
    "4nT6SmvyUgcs5PAx7kNEAX5fRdfDsuGzeV1t26zazgWRnFSwRqrQKWAT4r17zTcykwyzfJhxdxjcXtXdA9ZCtNRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zFBXFdJ8UPpzSjj3PJ9E5H2R7RXKEQYrQsnccSrsEzBKyiD1Yge8U2CfDEC1wSzpkDT7eWthJtzMk8X7fLDpt1x",
  "key1": "XLUJHRm7o4q9rQSKEHJfyoBAdCgo2WtzEdTxrMQHmuWQCfYrBh82uusiM6S1RHLLTJiWTXp1RBYMHsgf6qp4VFC",
  "key2": "54QQisYhdBaYgBeTYase5goHSHuxWsRjVF24qHJ2566qGSMtTfZNkKoVtMEmyWqrEmy778XbbBDDcDJfhx7gSRWa",
  "key3": "5dhrkb9op1Y8n7nUo51uTCoegW464tZh962rkXbi7qa4AbUVhopJPp1q4WTomhXpr98Ni9sWD6u7t9Eoep5WLc5T",
  "key4": "VJZCCDa4vVhTJnZdq6STffGdLbuJBSxBjLfGMxBjosZNA3LW3qY6fypNs4R1LGrbzXMojSgztMhRao5ZuupUowN",
  "key5": "5d3nHAMEcSARoJJ3ySy2K7MMxJXMrXDPqfvB1HFiThNfqhUpr9qGLm4v84yqfiPXjYirDb1F2Pd9wyrrQyeydyuh",
  "key6": "2vuBxMHDRAGzCnPCJ36inp8zN9eb9DhsFKY4NQQU69WT2BjfgxQHFDNmwCX3RJBMAv2MRAq6aR5ujAkaj4xNGape",
  "key7": "ekJxqwkumMqSfzfmKKvfZsK38skKg6qZ2gMw8LHSEjsrKMRCPFTqkraU1d2UFeWn9dmGRursxpjfZkMSNf9xJsp",
  "key8": "4CdPpfN6VhbEr7UjH8saBxWHtjgzjkYTcUYvvpUqzMoDVV43VCL3xM2YXihKU1QPDG6Ee2tDhQG9yhdLBBLWAmot",
  "key9": "4WysHh3aZBTDJxEehSMQ8mnS2MihLQn93ZXDDosVNhaejjzcZX12BjoGNHHWTW5hxjNmwxGK8BUmUf3scrUNyFGj",
  "key10": "43qgUABGG7yaPy51KDjnGGeTC5o74kcmGTh6D2wJfthjag4L7Ed53NVnquDFGtGFcSrxaNS2cVo2K7SEUYYpHSzM",
  "key11": "2gDM3FksJRN1ERyWbkoNDfqkimzXB5F12qVwinUaCye6JoZoAvaemdupFp3H5uiJEhYCwMtb5uQeVs7TXiqurwfA",
  "key12": "4spbBUFxXECmbq3gf9ymdskzr9EZoBs9D3U4nJCT5Wt5Axfv7RnknbXmRYYsFGhXcAAHXQdRvHU8xxNUkfpBgti",
  "key13": "23UMqKSU3ZYk4bcw5uZpCZPBU3AdrjhwSCdzZzaLWKYzDwcaHq8b43JDKtKPRta1mHfFLtKcpn5gS2QGPsbXZ3jB",
  "key14": "3Qs8uhfHQCgc4Q1edKptNGat2KDzfp3omqY5ZwVrK81CMLLExkwepNSUP3MUrADFzPrEXtUpUirEZP9zizcUNfFE",
  "key15": "4nHjigzxdPyy3thQAL9U4T6KuF9CfzqYYabAL5eJCAuekwY6hWt92Jnxr8GfEW2H222GuKwdTKUYs7DDUmCwtmBm",
  "key16": "22zGGz2u6CJVt38weJpMGS6r4DrXxezczwKCevazWB1oCnbmwzWbizUbTbXCNNm94MuL4M6uGVCVuQXJa1eUnD6t",
  "key17": "5rkQxachUwqtiZBy8BMLiGV9SEFZZUEaWa7ASqXndxe3m9JWyCCH7FTVkiwXLwQeggdsB3ZRk9h7pj7ae7vSRK6z",
  "key18": "36djvmvmHzRSKhvnaEPt4L8DRYtpVJkstF2bQdSzej9nXsJsqzK9rMzZfvVnFcfrFkFKh3cL9uwUA74gMj4Mj5pb",
  "key19": "4MeZQZ2egJ4zvgWDjphkh4wjF7vjYqq7oP1V8FE1BAhsa8rYTUiqZvB3sWghnWjMhsrGim2m4HaBDXTVnEP4WXRc",
  "key20": "5eP8mMokF8dNCzD1LVhT6rab9EzCBXeCdk5PfUEqmU8KF25FCaMLnUzyebvM2wxzcyESWqmcLwJPJBPYQ24hG3hG",
  "key21": "2J5etduer4CwDF6zwrCJPKMtNkb8ctJauBTFRC8osHCQVYp7Bs7tD86w5e2XvwEjecrTWSQCWmTUJgqh3hL8pegf",
  "key22": "5aw3k75b3SMxbtDv6T3fZcrK1H8fnmNJYqZ7ojyRfE3YweSKNNNVST98h238UcSxu4yWUKrEKW64XteJ7hdPScTN",
  "key23": "5jc86jaRBs8bSUqT2fAJhvrX3v4XLQbbdrWGfbDoAy1M3AmptmJgAhCE9AAJbFhp2p5mf1yE1pM6GXpWHULJJBSe",
  "key24": "3CyHJgkG6GSqQCiXhd3htrxccTDK31t7joNnXq3z66GVYbVcYc5kyctfTVYzDAthbVb7Fe9eqLnivNYtAKHukppr",
  "key25": "4vjvTfk39Awywvrqd3irFu2TV9s15uKQsuvyz2Zyzt2QLTCxzKyNvAoBC1CEkyzsLDrjZNsVby1K7BhEeH9Wiebh",
  "key26": "4LPNx2PWPS7YxVUjqq9SmFmsxyC4Hky9p8iCBTNu22ZHcfWMcDHmt95EdCRmCK4xbRJxhKCa4ZGKsb4esJGGjACR",
  "key27": "iZo4jFsqimhuc9tRC31uUQWX1F3B6DFXyfKtYchJLoWc3Dgn626Sf8xCe7qN42Sbd7svXMEGoFG8Uvxm7mz6NGZ",
  "key28": "3dNuxgRczznKe9Cc4NVjRwvaRs7p1qgpr4tzNgdfKFwfM9VjPPEHMGX8YWWMb2yPaopCJnQPPJN6GEM7Z1Kv32FC",
  "key29": "4ftiM4pUdfrRkhqMb5URBEJPASuVHqvwsZMjZZxru1bwnVg6hbvWxDiV3edJDEByrCtwfGiFdmAFypQ8LUR5eBSn",
  "key30": "2vbZQSdC68S9GKUxe2JF8XFmX8ruFRe2s8F4MEmsWqU1LMzkx6cDTZT66SfLEZwL85tja1vvXFnJG9j5UxV8ARLA",
  "key31": "3vUQKL5mi828SK5cjXNLvot5KVrmcj8H1stVZqJFekQpaypwk8dyf92eLLSD7UfQztHFLWjwF7HXFcRQbo2iPMXE",
  "key32": "4sUPgurUjafxjwx9KCTs9AURJs6STukkdnQHsthuRuxYGTjyW8ZRc2b5YWo2VRgu7byXFFeVEwhWiFpysNMM3LoB",
  "key33": "2RkAiMRi1VCC66qhheyfDU9UPRfamXUnDo8vex4PLDQDMNFcAyD24yVuZt9a81ApyaWVHHwjQoGRhNmbyo5fZ66u",
  "key34": "55FjtnjpsoRCXEdoXEoraKNw16cyEC1vEqrz7FKcKftkwfU5n511WUuGSayHFD9fwc3yS2jS7hN1xRf9Zk4AZLvH",
  "key35": "5EUrnmV4NSyZ2b5RWGyucuftQdx5cPY6JtjpKXL1RzNJacEqf9ofWr1rNkNbzWsLxLcNM5oDnHoi5VkNPPUn5u9k",
  "key36": "5PTB4rpqRV2dVdwJ3sy6kn5Y9c8qLf2rsw6U2QuhHaMQqgBTZ6EU3EyEqoqToudhJcuA8F7fDeYrb9puSobkgHVM",
  "key37": "5KNEoaeY7sfvu65W9xzQMm9PeTQVwqC6NUea3UWJEQMu47N4Urczm73RwcaTGodtwWWs5fb9ypr1LgxLi8pf8Vav",
  "key38": "3Kax5RWsqcjVA44qMz5pq8PZ7ZTPxyZnEPALsqjdvmv1QvtN1BVwMcPwcJ2YmjSXZQSFpjbsxt8fth42HNWME3uJ"
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
