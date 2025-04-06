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
    "4Qmis6Qw6M91jRoxb3vApqo7KM8imcQaZ8VnsyRpWRvhoQQbGwYsEYD8s9vcX6Pi3UNcLy7UWVzUN82pL8Drp8Dr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eo23CyxzttBZFp4xY8KG98Vb8LxbYTJTPp6yffMpZz8zTJT1ZNqWyR1WwSmHL7LKsqkGiB5qycFS5Nj8wsXkDZh",
  "key1": "3eydHcuiPBMpj4VRwUL7xVWFDMg7jK7MLBwfBaMJSG2RuvYsRXhubgaqUNZYnUiyuRWSiTraekJxJXbnecJNVrgZ",
  "key2": "2qhWXgdzPPy9ZHfFGtoKcPTui43PUHEvitFjTZ5qDggXqRQKiLpF743Ra4hYRB32TkMs5f6vFVenECFEK6x2dbnN",
  "key3": "35yNRkLGNMAdiex1LdCRg64WeiWadbrys1sL5foJ7ajqfJ9iCrHh1m8ThQ8uV4PTyjZXieSEcnaRitJgp8pD2jSB",
  "key4": "4A2jBssnbxrk7cscngCBkkm9WkcrBpuxY2LoYtuYr1mNcYfWvTrp6AtrCiXDfYn6vdZxtBJNadw1tprps8UhPMcJ",
  "key5": "63xdFsD85sdZZncCVvZxa9yQVNFiziaHXYLCFZFNJjzrZkq13hyVjoxforwqi8ueunNwdh2LxAbhWD8n7Hk2XMXv",
  "key6": "5RdjWhcwEVkrMwCuJGTt15tbW3Y8TqhXZxcNKxqwrk3kMSadkoksXuTfd1fAhA6pXL2xR4hRXfEZvXh1rHz5jBP1",
  "key7": "5CuWvh6rhyyTAa9kH54hWXaoo49tWDjXuZ9sMBY4BE2SSRshE6vYCiaQQ7No3CPFBqN8t1UDGsog2HBS2FNiwJx",
  "key8": "27Bcoe6yfBJ4G5KUPhy7siVPzQBid3ABsU1TjygC9BfaWRJ11efw9QmyVFNKhouqNhENrKSFexXcr9WdiKza5v7G",
  "key9": "3pNYLaFNfNqe6VEUsk7xMXwkWv3m4eR49XPf4TWD7mKQeHqp6LJ7nEo8ZN9rewdrUj6XdswseyAvRfqCzVDfBsak",
  "key10": "24JQRUSXp3aVW16sjf1cqMYStJXUaFLA66tnfevwY8iHAy63KeUEAFsvRyt2sTYsuLUSCkZfnRwGGzGiX4C3neer",
  "key11": "2CVwSwKShxqEu65jZKuyFsoZimRdzfV4KH4GwCbyoCMy3ohc4sgjBg6cVZubzrnbquEkMBgTi3TvE6V4Ynhtn5oL",
  "key12": "vtxMPDWa9ziMFV4fFPj8R2k5cviitBrH1m7CUTTcVfDcK4KTm1VVegA8uM7mtyjd7DoQZbxEAYpeyK1jfS6kUqt",
  "key13": "YsodirDB4RP5NKe4PXBR956HyeDJU6ByULxbhoaQJwWjpuZxTuhTQMwe12iupD7BLWmwX9XNrfRxdqJkGW9TLbx",
  "key14": "2Eh9gRK3ueHPCptX5JvvC9Thy52A49b1J61HJXcjLE6KuWQUBbEFxjYPgYPbBLcW1BskpHxGB9f5CvQNvLYswrUF",
  "key15": "3vxg4NG3ara5jER3VHK4zmkPWE8iPfJPDiEM6xtvvhAeytuMj5wTNjAKYcLAnCQuirKK41htKjhjY2RD2PJzoq5T",
  "key16": "3aXhv1ZjPcJ911izASyNBbZhNJSAx7GRnKqpuTJZrs85QHzjAAVQaNRcicyM2xtHGSHP6XrTm3JyrPKiqAzxiqNe",
  "key17": "4rjNEnKpkdFCnZKbwzd2TkpUqv83aSCXtfZo9AR6FoPxCZMexCDp7GVBRc1SS5Ln8A5Z35PTEnxwPa14nDcPBwnn",
  "key18": "27E45qq1bNnPc9SMxNU3qJ6iwXZhfdLquwKjuHR79kVwmcjNTU4tvTTpn39NgCNf5GE9QZwXWvNHyp4esjkB1FaZ",
  "key19": "cTXWayhd36zjoxazuHfDnMYwBjzGAq2J8f68GeTf2J8nKbifQLmNTuYLJjmw4PAFkKSdDYHjj8oQDyDJ4qirfy2",
  "key20": "3M3aCUgLPu8gbEuQ94mecnV6Bv3YkUCcpwykz2V8wHTjumtXJVMH7ouzb2KRcommFkEUhMxQvC3jhcARP6tejyxz",
  "key21": "4UtAWXUbqm2ecD9sGJSCjgf2HLzULJtozabs6r4cBWgCqpfMqz8vYhjKkHgqTQ3EzoqJBy86jWpTyHR6e7q73tp1",
  "key22": "Lrf1jf7NQJwM3ktU2M7yXr55aXW24NVez5kf3vAWS3KdPzbUJYyXYyia9WJFX7JvRPWQVM6pVEfooFkMu5ETUdd",
  "key23": "4NZYncZ2yEAyskCNHUjP7rW3W4EuieNAR64nWCFATp4SBQfQ44evZow2XjbMwwR6NpKDDwLFctr8fGud3cc19eHS",
  "key24": "41GA8haYBvrRYd4J5CtP7dUb8G6hzeohrJFaGEd5zwYtVz3rLvbfPgwST1o17AoHPGTTjqBvx6rrwsxo6QVW3yuX",
  "key25": "4eBqkw2YqMRdSC3pgm3PSp45DN9fSmdSk2KqcsWzf6R72Qvh5wEA4YZd7Lm3YAYhAdcYEfDa19MVBE32qY7dGP7k",
  "key26": "StTbvZ4gvZAzbkbgSYdZU6cPQhLahBZ9AcJFApympXMoUMKfATZNpAW1mqD6RA5QPGxaxkMyMBvV8RGRYrotrxv",
  "key27": "YV5V9d3729LQFi6NYvox6tK1F5uxHtSdz58CSGQHSki3y8sq2Bv5u8VCDXkdgZ2fNHHdqnLjKCvE5A6iCw28y2J",
  "key28": "33a1gtUZ95wm8NkW8rTkATjCE1rcTRySbmosvT8CtfAXB8im7YYaKgnKznaa7R3LNzobYMmMtNHSq3cdmXo7G5JV",
  "key29": "3oiY2VfwCkTsNcJT7yWmgRYQe6zwPyqJAzerjoT9GjpxTRorfb9dRsXH8ma4ygnXPKyLQXtYhn5sgDW8HRFfbU6i",
  "key30": "2wYL2zEQonAcFFEikCibsBALW5nLRVqSEjhnvFQMKrLB4aAiMJZRxdFcP72pcDC9j1k8R4wuBja3XgJNbBpQeU58",
  "key31": "4hQ9LmRg9MiNufyDZ9pYVcoFcqggE9XqRmnVhrVe9eLETmK1zgWYk7F7pPoEjFejQqpCRVxyVHajmXxgUcxa8WuS"
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
