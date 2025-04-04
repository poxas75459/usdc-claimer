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
    "5s6dm5TscTYzBENoGFfG6MRcHUQUi4M1aZSUCcYJjv5ZbDZFtY5QeoEinuiSzLBHUFXyaeo8d4MEiTnEyETf3Zcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f2DvenqrJJPQaK927o3Pijd3iuKW3VBKjuRkuHQ4kYhsyF8r5Fuc9qfCKC9AoNHc3NYj4g673VEMvsi9Gh93djJ",
  "key1": "2j7hnig4eAFDq5eBQoLTWe2Q5jf372Ea8ijx2tsUwdEYcf8R91BizfJ9usB2KZHaw3zApj9FSkwzKM8JBo2sEsHv",
  "key2": "49RfrnEmAA6EA8rCHxyD1kPy8QoyxHra763epdQ32qEMUHnEpN9v95vHFAkwhyG2JZ4Ayw9pRVQKyvpnatpdieVx",
  "key3": "41hPSP1TbxLw16eoD9gXMn4WyFsMKzDVrAiaxN3MpLBMdVhYVwBHD1XL7s1qaxrLEcmagvg7tjTysYCNgsBSHCSC",
  "key4": "3oQG8vuW81GzL4mAvRDrLm73Zz2gDnQxEgxnF5QmMDt4XAySMn5xAwNULbAqCxmab7CAWdS5xWBvsgfTEYAZ4zdg",
  "key5": "5kHRKXrwyNs9G8zptJJxwWxX8veYvdpDT8Qo8ndLNik5ZAaxKh96arV3D2RbfV6Q2pVfsb8QZCshgdcvdTXcE4Qk",
  "key6": "trMvWHXMijxa8rzwUSio6oi7XTaTv76EYvu3diUnWzLuSH1LLQsELr4g2Ed18TaxkHRqndkzYCRFS5cXdGjyvA8",
  "key7": "32NzTxAX4AZUY7yAHHsM1qAURxGb2zB2h4mNiKcR5YPvSAQMGVMi7CU4LK4Lanib1jRKjVFyWE5t95GRugKUzRhr",
  "key8": "5uGYY3pDH92QGZ3ovFxythEzaaL9hdrJDLB2QMXsYZ3rvAdnHbYiiXEmje7dg1BSkCRD2czaXgSrzabwmrM8yAQk",
  "key9": "3ZZk5ijdrsuZEhQVWajvxMmyuCHr7gPE2ZJKUSyzYkDEnwM7dShFdsGPJFgPgsNrCkoraTk8RKEWT9yZMsxPUMNc",
  "key10": "3Q45a15Z3FKLeZoHaaz8rZcGxFAo8LCN6YiL4QzgTVUQoVMUrZgtrd9Gi61Xsnf8mMUNEkqCQrvRM9xDisVxee3V",
  "key11": "5hiuvBjNq97fG9rEchD2fqThL2GwP28VuwWHbxjLMfjA85TtDGUVui5LPmJrRsyyjbXaq7vyBissMhkgvASAR6Za",
  "key12": "62RcZWmr8kDjXuTBQyqS491RWrPJyaU8FeDzeNfVgsTsyVmcTmeJPccgMw4Q8H8VmdRDrPDU4ua8oC4SQziqWYzZ",
  "key13": "5x33YaMC6ircGHfAzMn3kQG6PR3RjEiF16ww9FbUUKHedMxC6JK4uurix2JzeXXds9Sy31zpAfbsEH1CoCp7kAt5",
  "key14": "2Q6W38FZEMb938GhxBvn73v7rbGw7BTh7BUGUv2rNMwNMEvUsgho3kVtnH9kwUh3CALdGybH9uErHyrVZpddifV2",
  "key15": "pi5BayVGZvWMnvaNsx3Nxd2EkHSn3FPtxzsV1SKjT748kDjV4x54WEU4XZRPmWmdn632Jxq1K52RhMHzVPEetU2",
  "key16": "Bi7US2hmeHYYSnst3MsK4U8gnHJTxJE4jUWG7H1gecjJjR4xqrMHJsivm3JuJW93ENBYGtsmD3AFYV4FaZv4MeH",
  "key17": "5dRaaux9ARLQ5Unz4u3XunxLtnrNyLJV48ypcKFjPUAPW9mhuJRCtePZSU2gr2caT8SphMERBPwVMcjbEczNp7ck",
  "key18": "65qW5D4L8JdW6XJkRxDVH9WTBuH3Uy8cyk6ba91Syv8f9wCMDHLNd2hDt9e2DaCdZmNtSFHb7tVGafDRakWmMy3w",
  "key19": "43or5zpJRZSdrynaRqTUjbH7X1gSQ2qnkaekAjN7cscrDxjy3btZMRYa78Do2nP8DqJnWGYPTUeE9G8UabPvgLwB",
  "key20": "AuZCFD5CTkE2zhbTUcCxNUQyxLF2hX2fZBZAavmqo9FPbFSzK7ivACNzv37cYvtJj4jbeRTQsHHovyou92nqs6J",
  "key21": "5t2eso87h3HLVLKRs1UBHjzxN9z79antgmbiFB7SpAQpTxbWzBwW4b1kPhwxJtMm3VYihGTm2xmvPEPGp3W4SC6t",
  "key22": "2ExH9ui4m4q1W7KPUiaXhxkTYoMei4wkn7ZTUz97jtXEMDQZUP3NM5NbanqZxeZVAdCeEg1oT9neKuk5W5fVbahv",
  "key23": "4gh4zR3AyGGTutopMZ6sf6M5EhVncezPTRTkCayGbuuDNAd8Ck7y4hXhLcXdEVPLZN1PFKhw5vUtkgcJLEjS6g4Q",
  "key24": "3rzgZej7zgYvxXV9rJ4dKrKGzGnaiwiPA4EAqKpNrCffzoVjASMmRzwo9KtHMWQyPYQLv7aBCCybfD8px71hxg2M",
  "key25": "4GkXnWHaWNeJ5pZgFcUfCqysnxJkgB4n2UmQtRPzrvZv1tdCXS2P1udy8S53DiK4yXyoPNEikZbKnekQscVjHNdW",
  "key26": "3pmd4BMdbNdAJcoAvZJGw1YBPXWJhARPntpnLF4PxRR5EUkA7xoEVFyNVEHZL3CLc8n8yEfXXoYdJm5YibMd1xvR",
  "key27": "EdpnbR6zRGwkY5oW93hbQ2Vtbyxh9zc59MREv9hj4GRsLUvT1D6CUjPmEXee7UKv4ffNBFu2rdqeobzueTpWCZX",
  "key28": "3jdWFcm6sfFmckoqLJ9hrsGBheWQvttpGetNSLZy3igvVAcreXCN1vGMWyc1bxtKJJ1SQHjfiaqXoFHkyVZYgFMa",
  "key29": "3DZvF8w3gu4PR9WM6SXQRFp8LuiUWyP61dhrjfNjy7m4y3vAa7VWfLTKwHzdjCswnu7rcbG5WYdwxJs2Xhki6nS3",
  "key30": "ttHiJhnRqHUftLZ2QwTXyipHkDeZPqyBS57hxystWsR9YS5AanNCmNdetuFeFAscT3nPtoHHPfGVvJE2NaC5N8e",
  "key31": "679Z1f9kRNRdzKBxhpUoiNde44MwJvSHGR5GPvmwU2eSjwB2tx3SzqwwcK5X28vapgA15wtdFFh67DhYhvtFj762"
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
