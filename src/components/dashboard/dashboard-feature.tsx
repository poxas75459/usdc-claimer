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
    "etbLphNrvLVwGs4GUm91Nc65wc46r5radXkRxwyYBtDddcQSzHYETwqHi3Vd7FmstPAd6WZxnzx7AQHtXr62vJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gGjZSZXjBSi2mMmtEMAufZSHFvyCNbb5QSAkG4wmqtM1Tzw4a3PVSYa5qeBn8ia86VBMtQot1kK5QLKu32VpfB3",
  "key1": "3KnpLwvWh2yzRqH2eAsuG8AgwoJWvJ4e5B1sec1GZ4DLTSrav29tdEBUBvtiGmvnUPBfhHNQY6eczH8nFrYgm4rD",
  "key2": "3uGTVT3JnfjGJEXtq3zkkRuCjHb8d6BGg9vHFaLhLqFbZkjMs4J9LrF779ZJcw18Y56wXKiQZhyo2GYcq33wqsP4",
  "key3": "5juEZ2zC5ePwenoj39KkWYSGjj86AahjaDp2UuUkSKr7miTk7QUCS4kQJkhn2eWUjBzxQQRpP6ir3gAXkxdYyg44",
  "key4": "3ib5CP3QTPkbrmtzZBwKqn6PkDh73M87TcKLCk4AZbMhxxcX1BsnHeRS3pP9q21PcbAQvrpdTMrjSqcQWTWjiUta",
  "key5": "4hPtadD9qPsYZMxfcvZtonndipuxr4VLfaZrFcP1bKVQwQa9t5xUBd63xwHDNfmd7DiJJTUbA8s7R1hRe9EsYESQ",
  "key6": "5JKcszLBj7RY1dbBvzdLxRX9UN6Zvt5vLHqxST4aigYhiApxS7BNFKmV3567LWfWVmheVWbrsdxLvxtB18VoNt5L",
  "key7": "5EuDb9eWYA9HUwxFvNzmGMYABHSeQqEpLtXh28fuvWRHJoYEAMiiU5HJxYC2b15Q8Krstz2Xn684zppe6aPuzsPd",
  "key8": "66nUMe8LPiypHxJrg92twTPyXpkFiNwwYqwiScACL2YAK7EDU3gAwBfwnCZ6mZFHodREuRjdXCwDg4RpjY6g2dtq",
  "key9": "2LprvAVrNPtCKrtK5ZVXkW8B1gxDTveBACNEugZDVWXeCF3A3Gx1PkrfVz7bE2UJs1XwaPaKiyNJ4VoytvZvBzcY",
  "key10": "5XaKtnmrizBc62JJNGcYTWaCGBH11Bn39uyyAN1rZnE1sBS53i1s8kPmzDLw1G8W9BHH6G5hKpma7UTW3Hbm5f5n",
  "key11": "3TqcgYUnoRaHRZVrBhcW7uvdXCiT9gXygQKoXSS6VaVrUQaATDyjxizKokTuYgAMfsFbFu5C7MLtTEyvQtmUGskV",
  "key12": "2qnySCEBNCvfYNDVKEWqU1nPTXhCseiF5QtvcaBikMmXSSgi6FJ3qqaXQmsWMbF7KDTp4VsoJqD7JUmto7SsT6vy",
  "key13": "5n26cGPBejN3jbQNKPbKHygB7uuSuYaD7qGPod7cKan9XQMZ4cKQWHboPcUonuQJVN8pzAk2b8jWKLce6ZFbXcMr",
  "key14": "54QgT9XEsVk1GwXJY8NLWmik4njZL9icJd4nCe9jBXWfkjaHXpbQMh8p5qXjBZKhipw4FhK9udvRXwJ9WwmBshVJ",
  "key15": "23dS1ZHeEweCmmCe2fr65NmgpwCcNmyJCHTamRwjzpvLz2rUXrGv7K9vezzKwF2VvJXFoyL9hQrMLAxmjebXJxZ2",
  "key16": "43PnW7w1kZ4ediuF4eDLJu2dLdXcpgKVzxqUipBTG5QvhYqcoiiMpnRGq51TzStD3T57o3zCpTP479QmoSFLTE1a",
  "key17": "3E92oF9KLNWCwUH9WBnqKkrv8rLKQq5LhExBXbUEYGRayj1wQqdGx4gaao9m2KRbQMwxUZLDXzZK1PTKtxzY5VVa",
  "key18": "5WV1ToweJvVqscWKZWY8DZNpeDxjjJcGHbUGe9u6myBgr91US6XYzURRboRZxKMEEQ1rpB5aYNq2YEkL7Xo7Ksd9",
  "key19": "5k6eBcmCc4Qfd9Kpi82EbV5dk26YMDHsKonvzegfgQtg8TgdBrGLNoUTE5G3JJQoozvUaXS43GZZe12Sz4tjq338",
  "key20": "5qewRFv8SmwdjqydzkE9NGAnXMvCRrxvHSUYxmf9mcFmcxUVeMMCY9kJwubpuYdJn8SmE2vPSpbjVuqYG6UziHoY",
  "key21": "2WfvfWtwUQEgVt9QUCKPm87XNYmSELbizs5DuWMKR3XPZasbzRkjXogXZgn7hRDHLLv45Xd6NRGKgryRc5ddWQXr",
  "key22": "3XXXcK4hBNEFPz1oVNxfUXRTU8G9hZXAqDPSqkg5ogte8VY7WXan9YnapWgkHS2koFHyoMmqNC1xgTAQvXvmiYPi",
  "key23": "58W3eFp48s8TpUvww35yMjSqL9xeWFP1CxrrfD6eABsPir3MyexFwaAhwHq2ZwzN6Gfyni1a91fgzmCBFDoZ5ydF",
  "key24": "3NgtUBHaaxncXzGDCj5wr7SVvdhTY1fgE9upyLFadhLqcffLbA6gcXcAng3yZbfT2siFL4GrrrmXkKjwJF9u3kWU",
  "key25": "4hAw6gSSDfsVnWBQzx73QuGPw8HVygpWDFSpNd8pmXDtDSPeR67gwZdZibKCX4EhfiRem29a4FetnzcAza2oQTRw",
  "key26": "4U6bAgSnUu7QwQkUgEophWtVoHkRVaFjoAwWSb5B7dDkxMPdn99WaUP2dpE9AzvtTWcFQg6SFdA9w9V3uL4za75v",
  "key27": "31Dm5hD22zVWT8sNFCJWvXAymzp1vtAn5jwUwRT5RvjXig2P7Jh3fQTYvhhLPyrChhBADhwTrtMi9URbSN8kUexC",
  "key28": "2QU2uXPTKxwodksvd88tt9U2gv6t1uwp9EySZp949sQZhZBSWN8H3KShB6RtsLi4fPUK7SpfFZvwyLMKSHWVNvJw",
  "key29": "3qzMKksriHBzhLXKSoKaR2EY5Z2H5n42ja7v9UZwpYNoPPjWB2ELrWEwuew9HFJHvh3AYVT4bpWmau5affXtJaZr",
  "key30": "289bAUkhQdD4x6zU57jMrpbUTZsG2MnTgnngRmCdzY1YNtTax188c9C3UDmArqcGogNPE7zHgtcQ91EZX4UA46ZZ",
  "key31": "2HqtswcLSQCtcuhHC3mxCUpszU3UqWkKMjZex2RWMws3qgTv56WmGs8PQxqDPGWNgCs1kNqfhZe8VCAmaMRUFczo",
  "key32": "EDNZp24qD3RQYxDkra5MJBDNKboyqVo1FUbYtfkGbSJf75a8s6aEYinfsoYNaByztw4g1juwLTwmfZeVrM9p6uU",
  "key33": "2buNBWVJKm8wqq6n4qfG3cgY4juvpFafg9CSfPePYHSzMnsrNLZEuTwVJhTEhMgRoaShXdo7TYA4DGAPfns4NXrt",
  "key34": "2zDqiVDtKshwtVXNZtosKtVNC7SEFGav3koi4xCZ9DYhLQkqfhjNXpSjb9fco6J7MiPB1ogugqvxwrrgrpZvEe4z",
  "key35": "5Lu2D1urosDwPFRogZMBFUEJSr1H89wCDnczdfc36a6P4DfaqLmESqNHhV8odTMuxsRsG1i6Bo9QXJBfJqugucWy",
  "key36": "3g6Jfx2hFSQPpKDcksPvkJBor1Srv39gkmQMuahJdALbhLWZmYB3aDdsKY8ikp3PG6kTyerTKAEizYpygyDMTPTY",
  "key37": "3kf6nj4FuvghpEzJ85tkn27rEMLqtJBcduLWr4MhbdHrKZnzYSqLDAc7F8jo5xsaj3KeN8HjH93nso2zihFSzXqq",
  "key38": "3bmgYwr6wLTzxVFLe5WNjRCNMtQdC77ViPmhy8CSGAHS7jRv5sPPycf2sWfTiBFqKHdy5e3y8chedkWEMhJuyNq5",
  "key39": "52LfsJHwRj17n8C2B7Srr2t3Ur7duUMbNkBobc5v65UW9fq4YuXVS3jFWV6hYG2QSUoLcjt2epdPZLJR8Y5s33au",
  "key40": "XKGc4yyHX2tb2xJVG98Xs3jTvXHy3NjeSRMvALxHQgNZDBaMcSKgDkjdzotKD9uGjUvum8iceriqLFgWncKs4US",
  "key41": "4AN7evKroRKGhcpncMQVEGb82NGMANGeEPUZKyve6Pq7E2hubXUgh2RRoCsvi5CE4Vq5hxREdYAHbmpMT7tqbH43",
  "key42": "RCcqmPb88FsdFLR3wHsYVqpedpnhHirt2MZ7QsMLSQrrwwcorTrbQcCH76DK9kidmAetCTgq4RfigEZc9c2kNPs",
  "key43": "65Xuh2e9AbZCCxVJgs5j5Eb4i4qhZnXFyV93mYnT3NZ4gwW6TNXMN6d9GjJWEub2CaBb7JXbnVXZsLcM6dPF3zWq",
  "key44": "53QmBH2VsbbKM3tT7sGaQcjHznXYVpJCcSc82Xcc7oqqpUpeG3QoFdvEm4NdYud77yjBwHT4JmVGvVcVErSZJd7S",
  "key45": "2Z7Q8PfW4FzfB6qsyN5g1mrmWJBrmjHouxhKEQgDyvibtvXd8vrHCXqb7qwbHvcXr2z869CgbPxuWMxDFaWMoPHA",
  "key46": "62jTh4McUv3ciVkM9DwEXaKoMrdEJnmWnymkJxkwiHENnpygwwv7QjGdV2QLdpydK63g7s8jcQineBySwuyaBP6M"
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
