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
    "4oLQyqAgaHeEJVWgtqgfi3p7tKWnvkgMRU7CiwuEr3QKrY3ZZah6Q8eS6qzwrRdRfPbxMGUnnNaRRQb5Qo1SeV5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kXyjr46hCeyoJddNNfQfRjR4HPDjjv88UCcXNNZ7rV2pok9VqiUaTysgFNNnc8ii5Zk9mhHf3kzTkmERpqUdM1e",
  "key1": "2r8m3yYF7edKMXjbkdQ3MoirQqU8opjgxxWZ79BV7K9e3cn3ZLUHDxx1Cn6xazvdPYuBocSBWHw5yLQR6zL1P6Ta",
  "key2": "3D2563QLnfvfjfZJ9vh4gSGhK5vxaL5cKFAguRqU21VQwsCpLnCfKXDofqXW3ybZu4GdWsEi4HR6nAwDvdvgrkfK",
  "key3": "4BrPwPAS5N2dQF2DH2mAffkGUB3habFtjbufbb1LUQMtdMSYQZ4woUf2w9vNAanfdxmgQ6SX7pQcg5ExeSnsn2iA",
  "key4": "5kScKj9dQ6RBNKT9W11pHY1YyGo5eeWNuP1oNXXbyetZQcLt4NiUa8Zg6xxr1bu2PccrCQSthh1GfKzRQy3bs6zM",
  "key5": "NLk3zvAkNtzwmQFZxJUCefCyxNz7NnMMUYUYk8934rZKPUyP2MgL9LGmu4bhWHwuAwpfmsVYGHvcf3to61e8VEP",
  "key6": "3U9hrQVjUtrQraYirRL9j5bYVdKrFeGtpVVz8WZA43CAn4j2TQeQEen8HbZGuT79iSxbEscan5ZR976FUEFusW1P",
  "key7": "3oeWBDtPAomP5e2hfdR1vvFbbsrnDeMDqncajdBeAqphvqmKvmAf4g7aBYNWUgcjfXz2HSXEZWqSk93o14wCUeFP",
  "key8": "4dgYJPMmaaWQkxujmQxdMGNsdrjiLkpqEhcjBbPK6FBHfH3EoEuKw24jSzQ2BugGNKJFthQYNbnz5AFNwYkHb26L",
  "key9": "2mmNF17VSDPHFVQtJg89NQsLJNYV5u43vTGWLWRPobsyzFmbEVrQWUBvxYcYsRwfnoMJvGKMSxuwzuyQqkcQaxSV",
  "key10": "2r9bWGaX6xAkqhr5sa167qyFcqpfQmrkzxiHW69vhv6hpwupfwXEjXH855GHU8r36FkXjmFEjeQQdmPexyzkaeZR",
  "key11": "4ombowxrgRGVTEsHCcSYYh3gszBHCw2hDzzMqaXwKDWG8Y7Kxu5gZ1GwQerqfFP68EFeFuz4LopJyT458BAau1DQ",
  "key12": "4DQ2JfPf7JAT8ZtjM83zKVbMsiE7qS5BB171hKc3SirnbhZZ8zxz2uHwDsKaEfMSj3h7yM32JHKu5Lo4PfSZQtvb",
  "key13": "3NyUP4bsXXY6X4okxiLzyZo6TMnNi7wQGpJefPGbrUtwtjto3AtN1KBVGxKmRd3WYDkHz9qvgU1u6dusszHTTyob",
  "key14": "2ctUNNRK3X8bTVQ7HdMzaivbQgZmSGJQnZCgkPo9k8MRBjDLCmPx2piCeVAA6pSDStuZXLBhyhEmAXte6jTHs15M",
  "key15": "6t42bqsrHCKQndFoxgLv2Mey5WktFz5Ly52zer79qjrREoyhrVmNgkPsSr3fGepyM2A1BAJYNRJguwvYzh6PrZp",
  "key16": "38br44wXE9B7fd1RyFWWwSmKx1W3CqrW7my4HnkxqM1YM7CUyaXkWbL8SUixTqxJHJGZiEeFjQg6vAYR35LecsGh",
  "key17": "Ts2vvAeJEEtnQfUPPBTijcjbgwBMcvD5Qx4HbR4MK67CHouLpm5JJADuyzVaHxczHGG3zYQKmNuD1AWmaRSqKEV",
  "key18": "28YjjgswJCibV24o5bhsKiAeuwR1WzM5jDin2B4bSrbsUVy2JwyZUEfHx3YXxQbfwTw1AhngwVikzniMCviDYVn7",
  "key19": "2sPLkBjjbfthB9jeFC8YPGBkzwM4YoCBEQx7LsGfMsnqHSFG7E8Tpb6rt7cE2L8gR1aYTvxyHz3PgDVpKpaa7LNs",
  "key20": "5gLQ9bnjmx9dFhpWaTmTzdpuPiv8eeV4sDPwrecwSco4UKB2EppE7LFjcL18v5aANvZtugkNegr1rLJSLKwRLZnH",
  "key21": "8HA2qpJgUuem3tgT8EuP1W54bjWVG7o2XTwgppBpZP4JCiPGyRRqAiUinVd6oVJRdYkW6evwSyyuoHP6PKuttJK",
  "key22": "3ZcxPmittvqZoPTYLVxq2HCZ5CTcatfvxztog1vbHnCqtq3HF8acQgz2DB6AA6ZkGKjJVkeZ7VZ1J9Jwj9igCPw3",
  "key23": "58eeBr9dyBfCfd7kvVXUnRqkgthbw6xZSNZEMySAkn3oUZnBk4UyiT17KfFKJkE5CYQTxqsC5P5ior3DgzR6ksCE",
  "key24": "knyyLead1LgofCe7BC1AikLRSMaHkf6jwCLLRPCbDxoX4og8iZ8TX7mLVB3KCU4pH7AWLSdKeZmq5L9cP4AXhxh",
  "key25": "YJk1nvkDkrQjpdpkC78jXrsg8Sz98qxb3s8StzcwFbB9Bkb4dxvopP5SVbUg8UeemnoKHHTrJsmiCbGcP2H2CNu",
  "key26": "5K6sS2HhuuPQ4YvxGG2RUp1oVs5jpLdbzyoS4MNMd8eckb5LMGi1FGs3AqjLXa3wmYYsKK8hGBmscAwKuqHpGv2F",
  "key27": "5kVq9XZXWUh6UirnUTwxLKfhMrCzzqe1f5eYve8kcPh3GinaemDbFjXUSdc5KFxLANy3esirpLUkHoGYGjJ1Q6rg",
  "key28": "3PMWeofgiDXXcwB5NyipisPymqweW93x8qU6biRThNJwgxYxidcmEb8h18v9YBUNK5epKf69vTeUztQ5AKPa7uKi",
  "key29": "4wp6LwACRqQKEiFYHvtTF7xB8pErDkWG3iCn4UQ4eUy3UPY5P8d4zZvoqWAmMs32va3hENSLBqgYdpDoj6eGZjwC",
  "key30": "5gN6cxFVo7KTvDdjeMGDokqT3ySA1WRS1LS4spubc5n3Fqj6CyYHjFid7zNMQF24cszfNgwFDz47axM3gSvadt6U",
  "key31": "2c2pQpRBce2sCCV6Ziu7viCvWD8pjrLMFcjqzEsZ3VhozegpG73XHgeJgHeRhHXXBgdTjF6mrdFzZfUYXmC2R8kz",
  "key32": "g5jwBssFmmkigW3d9yVuNaLRsV1P1rrkhT4E8WhEuWcxw236D5A9Kx28Av5yPNAMijwACgc4M73NoeYimxQQzoG"
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
