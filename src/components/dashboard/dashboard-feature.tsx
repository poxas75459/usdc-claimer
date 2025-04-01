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
    "2QM3bpFv49c1HsnA7CSh86tJ2rSkZP5SWBHopEkfLU1P23FzQUSGfh4iHScAB91rqdMKK5pPru5x82eauWcWgq4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gZ6ERhjptWgDQCC7JBRP2WJfpLwnxr6TCDUT92o5j94hL8tYhugoJjVPh6vogHGNY43mGKKtRZ6PvZHm5JTsp4d",
  "key1": "4eSnSW21yRK3FzPiqhoBpuypp2NxvUuCiyEFDshRjvGswTmuCX3ePPHArr4rvcLsCnZnLDnpKmWCdZfVSxGz4C8t",
  "key2": "4KzbH9trGtmt7CG3wdBuRrXHA5GYWshHv69oJdnQnZYK8jZrG6SGgKtknBaBxPQ2NcFMpdbcgCkyNjHPbk2YjvRH",
  "key3": "5hJUSoVhaWS9CaYzWaPAbvZSqEs4kantTBpDkfAGE36VHc5772cMF2SVZANLrTrFGAvW26QZ2XCLeq9y2EEA5G1W",
  "key4": "54gfHTmL2Q1Zf8husxpfffR4wNaU59schZMaLc7itDcYcAEFaX8sGx6hQD4SfZSdczqXXMMcubhAs1esigqNBbzf",
  "key5": "4XGwHu4TBzrJyeP9pj7BKmEzpr24MPdSBM5RNNSrVoBkVjr6ZVErPSukq9ADxA4jt15Do8cKj5fE965raaGs5bcD",
  "key6": "3R3nuSqBecRzeNiEGHq9nvdCVqXNBsyC9Ng1XA3A9C7q3n2oUUSYtmJnKPBqSGTUd3KHiQuCXpLzR276YEXLsfi1",
  "key7": "3k6K9Wd9qL5KXrMkzysMitArMyDSGTPDEfUhc8ghm11t3ZzSEFsNV8cvmfqK97UrANerBNvydZmtyEKDzpwZYtz",
  "key8": "4kYPfPNfguUxCJ8o2bNidMQPkt4YdaU4eLQY5nmcquu6PGgPPEHfFkeWLbd38byhvJtYqTjwkVZFpYEfUNShFNJ2",
  "key9": "H7mte6caz7eHeFXoLxybmvxnCeC7Fve5mM5AZyBDuyBNE8Bjx5xfZ9N3SpgwH2MCQAKijN5Y7ucPgJ3QHGk8xFw",
  "key10": "61Qhvs9sSDcW6pxfv6Tao83EtFAhgHe5vGmvKc3mCBJvc3h1G7wJa7kFjEJdp7mMhMecbnErL5pNQsG7DwbaiMoW",
  "key11": "3VwANx296RRwdAS9oTtfi4tNN7p3KM4qVkhJVL7G4FBjcxa7iQXuj3fyNYsQGhhg5tFwuVnj9upYAET8gRFLeE7N",
  "key12": "2z7bjNCUBnmBCbGEW7ZbxYcxTT7bWdmxkUXEvW8JGksiPtgjcSBpEBrct4hAQLrue8NvLLks3yrwyuUaS7TbWJK8",
  "key13": "3q4wy147EfFc6vv6RtbK6LenEyB4BD5iK4hNWne6AeG2JNKAqLbsmQK6TZiemgkJapnS3BBqPYVk4Av5gLeum62P",
  "key14": "NLoCMZLNEXsZ14nQmMebHkm3umY6uxPndByFZwgiPmav61qwbi9g3Sep2JVpFAJmvaBUoDwMUJqjGRWoNonNrCQ",
  "key15": "5vgLWTAgZcPesUvds7MJcJf6PotdHfWy4Pfz862FBvTnL7RtWpBDZEFmo75PoTuyD6WQLV5dX115EyHDzdGRmieQ",
  "key16": "5FoBLZ7wfwzTW7yMzn9YhCt4XG6aEJ46ykEzjvV2aaGWvv2wt8GfePdFoye5SGKMQQ8zJZgSaGPZhW3yvFMKoZK9",
  "key17": "NPtXcE5erKbk5vuhRUpX9NgcVxBx5PcXbVP2MUoA69RQcWwR6Pkk59SvbPEForxhM5CM4ruS5cnKfGgKhs8NxoG",
  "key18": "GqMMZGyLYyj1zRpXtUr1hqVduXoVkekHfNADKm6ZiuCBPXNL3LnsptacCiy7pu7ERUrTJivXdnkXGZfQrPSzVVx",
  "key19": "4JYxUyXbxzn8Y1uzHHXAGK8KcDMvsqXxkSo7HP9rqHiWAFM7yoQJhPoX1z5m8gsJoLM15o7C3TiojUVa9neGY8jn",
  "key20": "2Q4e2XHCWfopksaohoJ1WWrJXrk74emTs2bSF7NQTy1MwLPtsVcJ4ZJBgLe6ojqCE5kUb9jKdaUtqARABSr5Ftv8",
  "key21": "4G431Vty7ZupqaaU9EZBfdNXHEZXpzahtpvaeh368APkDLZAAgBxMmUP5iWqmfwHQQ4gtA7cyEFFLFeZNKr49P77",
  "key22": "UKXVUPPbqNcrNow6deyUgssVCqTmbmqvJpLZujjWxV1FwrTgwAt21GzRWobyAs3Hg2xj2fussd4GzLhyq9br1jU",
  "key23": "3G5gvBryjFsSNXJc5j3Xoypun67SP3C4CJZcSEo2cTZderRDLUM5TSinMiQnsVofwGVYDVTa3NfoZFHaRwRqf6PD",
  "key24": "2FpwwkjKSvRdQVvkTbL3fAK2btPZk1HDsx9jAC8Y3VxzbtT7t6A53JLZVETEyPokBC2E72PwZ7f2rZRQLBqXUHXY",
  "key25": "5PNnLMMvXknXfdKvfCHyMaDHNS3vdNH9ju6Cm7GWMXJfrJ7FneHq4jQgvRSUP9mW2B7wPiVXAZvjomdx97H8G39d",
  "key26": "51ds4yNQmnRW2NhMHj2wFMBYQ2Sz5JtiVT6qiXfCFpZQyffiJBFMGzKV9HeP83fxQ4YzqR9v6hM6f6U71LEnTduL",
  "key27": "3d6ZLcfHpLSN8QPHdkQKyoA8bKsMDv8iErmdFSTsvnncVZHeTBUuQ66Cn9NTkHRBPF9EZrbrgdvqYGUQvRkrXzZm",
  "key28": "5tYHh7wqJbrCHZde6Xc4Y88NtPHxHgF8gkaLVNzZHRZ7Q1bnYA7E5Eyf6BKoeNtZwzfT3e7Gs8cgyVYSJj6WhaTx",
  "key29": "3rnDXNEsCHxqLMxv7fGepcLQaHEyuhqT9nHHjycHpVdmwRGNkwQE3ZQ7VCyBtXhhWHAxVh8tCus7m7ZdSLL8ggxq",
  "key30": "5HU9zYTpKC97AAEopFeY3G8NiGFcekvwZsASGw68EbdRwdvMwHDqHXoUA8WKEiqPnr1mKUFS2osbjVY5xbSyopEj",
  "key31": "2naksARF2Mrb75BdhLvgRHeW2HVwhWEo5BdgawniZtG1FbDzUPepiFwSbvBE5MgcRB5HHuW8zVgTUzqxvu4faa8z",
  "key32": "5GrDqn49pRUV4ePxpjwMJDXLKfr7ffGwEkAQQyajtkkxTEcNPfqaoMhCfhSxyPNVdS8kznSS9ojpp8X714Gcj3Eo",
  "key33": "3MUE2hNddAWfD3Dnhi7WBQSCeZqSnJRgDFK6nALi4sVkE7nkBLNcMPHQ1XxgNu95tvtXBgrrk5jVDinTnfDuBZRf",
  "key34": "5R5soLC7afkGYTmpKkK3GQ8kcvd2jEDS5aYhuFNGx8GGrtDFJXiqML2ow9bZ3uYNpdQYDeRWyJAydTYimmahKsBm",
  "key35": "5R9DsMs5S499QjXKPEMZkZTqQziZnEAJaH2beGKSwcnABEhDXq17FkJLTRk7mTEMt44MWy1ncUA2YKdAPzAomBvp",
  "key36": "5nHzmRLufSw4SS35vpAsBu1i4gboaZiqzfbnQxx7m8cWwsZKaSwXNu7ZfWDANPLjDBMiFbn9MgSDSuXirMGY65as",
  "key37": "46SsEqzdson7KvLCsXYFtnpgMzYRZZKFFrgZ2GMsBguA8jnZEV2vyTMbBKUMm6nNC8WCKQ9MRvSGYqLkGnaKtfRa",
  "key38": "tRZDa83fRVt5BsCbA29ecjreFnJUnjXUWYpXyDtBwg9jeAMbhKZ4AJ4ZitFmNZ9oFpUdWGqQPT5LrrLq3Jt7YGW",
  "key39": "2oPbffkqgQkd1PmW1ULMXSotDvEQzfP1AS82v4k2c7FUB3cxBqiRseTdPC23fZF5xVuuvHQr43QRuXWxLVv9MTH5"
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
