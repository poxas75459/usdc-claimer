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
    "4pKsqmx89FN2X1y2ozKXnszKZvTKobtNbP7Lq1fvLR65uoZLrctKRsYXKtmRYTiDM2Geyc59tTaLvJXriNVCLU44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dJehFxuTBwmXpyiUAEdrmbwwdczyge3hMHz2P6kRABmYe3R59yBNnvmCbF5fiSsjSru4SLrUQqsW3HKRZQPPsBv",
  "key1": "4fyrihpXffmqG28zSk5jP48Tb5GbPmL8uyVGWsWUaGpWpuvUs29xdLb4KRVAt1xb6WbpHqHp2Kzrww3M6fVqVUmf",
  "key2": "AzmPpMqpRxUht1RBpgjJLEoXnP5KSszBxZkQ6jWKo3BNLx7WPALyAJgCtUcpUswUq73GJstfnH5Hfyo8r8nyDHv",
  "key3": "2WAHN6LoHA2jrPHniq3Z5VVS8wyCKyjdCVkK7p7kCCzEvcoMzZCP42B1xosvhNwdM3khENr9TyNcBShfFxgwjkHc",
  "key4": "4zPz7GqoyZtFPAUwHGQvhy1j7Dnu3wtynJkUca7uJuMLeGei9cjyefbSRQZugutsWkNJciSHo9dEuAeksuxWgS1i",
  "key5": "3ay4dHwcr9sYrtY8xB7oSeZDY6KaEAKEGARtyeY9qA5d6cwczEKxjACzztSu4HEYuNu3H2kB5qv8stSizFZe6Q1C",
  "key6": "2wLC1zR5eVtJLV3eRkiuDoyk4ivUrFUc1hS196WrcdVQCZyPXPgXYAeVzjxLggsxJLhEep9Uumh5LyHzREvMy7LP",
  "key7": "2tbshPcZmtCpmeNgDV5i7Hi7kbkkCP3tNCuzTbFgY2B8RNkNFgbcFxbZQXZu6sQdpWPv6VRTVPg6J3Nt3saXUVdQ",
  "key8": "51E7Svvn9RmRCWMxxraQ4jYnbfVjHcdNa8zco1zVEQ7X7GZMXPVWCctkUphDYi3nj3Yhc61uvuTi2CFTe1dyf2He",
  "key9": "3WRcGnNAQgcbizWbSayAjEmR8mFWz9aNmCj7ussioLGXDHfDnZ5WvyKTnCnp24C1W7FYKafGTtoFWDqPPsheFt6S",
  "key10": "TWNe7iRXAyZbyFB1NbxvAGrYeQHfsGpVhcGdCSWATbkT6WJd5JpkzMRq6iA8JiZk7uEEjQUpSWZFwT6BCHZcyku",
  "key11": "2cdpy8WeWRs2XLKNSMCnPcy7GjHP94mk5D9XDtrCnUmzJvXwsuKzSeXu9Ws5mjPng1vwvbAQ1xF6zb9z5UojXAYS",
  "key12": "2n1hCqQ4Eaf5tYxthBJA9ZajfPvqYWK2113fzXA57XsUx3C49e4hpJA3fw8n3YtKvbWg54Rfax3dz76iDq6yhGuP",
  "key13": "4hX4CkAcV6HYiZrX2c3SfbQwzjsGpQQAscib7vaozKL6ZMMzAdMhML5tUgUEpFBZxV3DP84y3JBmu6RGoyzAX5aj",
  "key14": "3dnoTb69anBdpCjJ3hkQmRanxQUGgBWc3UiHRBeZptfrkYn9vsswk4xSVHNywvjAy37Kz1ZPpBqr4jVpSJaL7D4y",
  "key15": "3Pn3ktZC6wUHzCP9hw3ndHasnaqJoCuRvdzFosG53PasAzbJD1pA8ao5Cf1MihLGZb5tmbgV1EDmKJTmmYzn4KnE",
  "key16": "3C8kHMgyniRoEEgBHT8jMmtfTeRjqGXQrD187VxC5GborHkS8M3sYM64A9xLia2yvMBfe3Sy2TTKHiPxpQMQSFjc",
  "key17": "3u1RYMyp2iMLpuSm9piWp6ywLQ6gPz35mC1WhoCpG7zoQbsW2hsqv4ip3vin6hqBnWNNXMPavR8q6rPvqvURLw7S",
  "key18": "3NZavtHpZBnCm2niSrxN9rGShjvjpQzK8ZnRDk3Fe1AXghfTH1GZXUKZn4WGjSSEqYh99zRwA8suhFrWAnR5UXRw",
  "key19": "3vVxj14YECq4ij4SVDj7vYPF8sXysDbvmodTGSyY5ZBfjg6ijPkBcUchrmuHUtJYHEoXb2u8kZHYuyPMceGtFa8y",
  "key20": "5sWW9eywb7o6Bw7JaeiEJTCa8Mdug4uqFmCnfzR7f51DBXQK1KqP5z5nYNDSZpjT4mvo1TgiShE88JuWCT124RjY",
  "key21": "53H8yj85vAMbaNho95S4wwG5RR6BX4sjbM1Z5fpWmwwq7hkaPv4jz9CRMYhrQjCEBZMupyH81h6EgazQXyskysVK",
  "key22": "3279TaUxQ1rYR5b6CtqXwDFFFBkUydsxMCxrwJ7zQsjy6G56RuLK7nSH1e3NmN9rHMc4DcGX654fx36GfL5qeCz6",
  "key23": "2uL11ZZqyxmHhRppScu46GGHRbnx8na4sezUvcUXGJECZdaD2yPs8MhQFNekfJ9NBnsCjBVfLFcdN5NzZGuG2nwy",
  "key24": "C25ucFpsciwZFj87TyCMcezM4f2HU2CEgK7BVZCZ4iLr3c9YZSUXsETiAHKvjiLbJXnzbJwErJU2VtkA3oL3CkX",
  "key25": "3UZ1rAf9dDHTocr9HN6MMMhiSkUCKVUxcPfLCDX3SEDRd8Dw75d8qAPQWg92ogfspcpRpTEqXBY2AKWa82xQWFWU",
  "key26": "buRh6ziuPiUvkJG3E7WxTpw8cN5nfbiNFCkSqcVXkDV8vxS9R6n6CKQFaryuGpcNSVSdyRyjgL4zAdA4Ugxweno",
  "key27": "3QpGwgRmwR3ujjqwkyiCMQkNHJaXeMvkfWK4tKmyBT4BpxGczMXnX9PUArDdzZfmmDBEBjRpLFj63zfsUWxtA38P",
  "key28": "58pthcn4VxH4NaqHmQxs4y9RgZCNM2d4HJZT67bHvMABMb9qbodvPWCkYdR8p3MmAToQyTpYjVsWwDGgcWd8coNV",
  "key29": "4fj6J27f5V9FDZcpu5LkP1FYNu3ANUj8etxuPq8UQcwkVMdtTgXwpY577p7d27xRU6ZGkBSPuD79iqGBMhDfzneG",
  "key30": "2BXsNuNPWA48yqP97Vz9vsputoGSeTNoZu4MXLyhFm6UiRduGSf5Tevuro61F8NH1mWk1vfnRXAYnE8mTWAatxZK",
  "key31": "2JmyJ9DdMT6F3fE2BTwbVBTzA1RpjCrNoQED1b3QhB3ELSXGYMX2xUm1upSdCtbQzV8n9XQgiVqU4EoCtpZhrhvR",
  "key32": "3WdEmJc4kyP7erWDRRWSx5KqCwisjTL8WwYdtfHhPxnh3NDm4mvuhkHx6fmJb6nRxUC19iitpMsYtiypbXDsRHcJ",
  "key33": "ycZCNEdLUxN5vVu7w5Wpxsr78D4FbJ1WnLdvzzh2KFGTA8Wzo1FzWuEDvJtcegXr6avUe4xP1ZVwzLy7aJyiymz",
  "key34": "f77Np4yWUujeyyNfgHKaKNcgqSHjqyyWApJtdC8DyPD3fyjf9UBMQpVKDKgFD5NVLYwmSGAF4f6KUUQKuWvraw4",
  "key35": "4kHaU27HZbJCPPFD5E8uYVirb3WDHuQjP7HoZsa5Q4MCm3VwbCKmQeiRiGDMJBTQyzXzGqvsNbpRmqhkQeTsKGZb"
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
