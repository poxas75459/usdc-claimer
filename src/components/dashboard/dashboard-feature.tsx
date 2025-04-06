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
    "2DBCdopkNUj9AGh2s5fgggPpNPT7wiXpDHnF8vogUfzHWuVMLEyMyaTp36Wqeewz39mdrPGWRg9kJSs9aq4UrFfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DUfdvPgY9n4eWv3wa7M6PipW4W4SWjWKKEaURwqTbNG98QLkx2jrKh1D8erUD84Catd2MCWjUZDuouzkhMj5CQV",
  "key1": "5ZYaug6YbMKEkzM2WRgcCXCh5FJUPHDYSXmHvf18bVxAdiLiFVVtYdB5uYFnwmVngp18ePPoAwKa3PSEAW1p7Pfb",
  "key2": "4KMTULF5gXeRKVBoJnLgqPhKyxhWAXkYKt2n7ezUgoVC8cAQk82KxiLaFi427RhxKSTGhRvGBAawucJiGbbK8niX",
  "key3": "2wMKG11awhuT7RMJJPECEfUKjZX3w76EY72EAyV7kadnY92jygCweSHykfap44GEumsFMahWXeLqWzPeQCVSgPsZ",
  "key4": "5pcej86y2f4HSqbskBFQdS6rZ8Bm2NR8Zs8oRX8r3JpvEZ5YNNX7k7uziA7HybVNvQj6cZwneRBm4qNZfYsKdWdY",
  "key5": "4qTVVtUhx7aFLW6QYu8YKrEvtfi7pzntdULtoHN944i8nCAQC7Ec2ohqAbSwED6TxEsC1RCeRgEjs7dbTq8LTJNU",
  "key6": "HTSZRDCc2CTb3ebd1fz1cgLbzKtBfFPEATrM6ZcVNaw3r8iaSV4pPhcn3CRJAsko4syWuzJNXwasqA2VS268yXM",
  "key7": "4np7ghcG7nVq6XBjprXgN7o5fqZMLCD8XB8kZRSDKXkrpEaZz1jkieD8DbnpJLnUXbFMXsvA6XzjTmmK3nX1Wfiw",
  "key8": "2Gxk986cWndAwXjQQRV54qAXL3UGk3LrYZwmQhEBUvRS8ZSR8uxjcGFWcmnsBFsHsFtehDcDQ1cqX4FPQd9SymKY",
  "key9": "27YViB31o3UkyDibrLM8cotEvQtpDnDiHUoFNgUPcyUpXq8tvcx5JFhNGDL4aRrazL585E6bkGju8EGUV8yTiz28",
  "key10": "67FdC29S44CJqFLVNm3VhE7v94rYAWJxHDerNjXviUtnHhgNK5onzsryFNYUuYknvhRihcMgp2CL24cQhMu3yHRA",
  "key11": "56d2pjxC6pUtB3dS9JzzXp7rJQbKykbAHh6xxKB9Mgvhr7BrsN191oUwwHkdxFNuEzWdTfx5KV9BM6HdXfZMqysL",
  "key12": "4S9vkuiVnMZXj4hKD1tyQpNV7y9H6qeZsdfLzF5624ySwvo4TrTWDw254R1DwA4E9g3C7xFTb3uPx5stt3xQwxFM",
  "key13": "2jzibUETrRxpmn4FbUCZzRuHqQftH1sdWTrwX5DFTaBiHFZ5e6XipSUJMPUAADcjNmjZ5m8BUx9muPzUFzy3ZXfN",
  "key14": "4cjcyiDYVFkad5nFhg5GqHwo8WZLmpjuboicsLiS6LtJpoZUsqPF1ZDSQtKVbQ6tMJUa7Q43hDwaFp3cMTe5hwAa",
  "key15": "2H9TELpTKQ1dPejU3mAiUuJq3xzVLFqjp22EdJQpD8TpdumppsJg42vYMGG6TwDsbnuQsddjnyeqVGqeB8f6MCvQ",
  "key16": "2PeUxxnWwPoVaq57YBLhtSkwtakQ126bFpnnRKpCtPS887vxXHbgzik1oieDdDK9MyQFNRje6YuEi5QTmRxYNcKW",
  "key17": "BwF7wGQ2FV5KBhULQYDNmiKKSsBd9gveAp3ahRCSxh1XhjLpvgWLKpr4n6Ne9EB8Hu9ZZKRx5JUjTqte4L6NDxo",
  "key18": "3rRfa2ZoMAyuiLLsBsSbmRkaUfH3boPjDaKZHKpABqtiSYgwCvnWL5vYiJJHyb9PEt1Uu8YNaN6TVLbkuYCWZBCq",
  "key19": "ZFLawhkhamV2Y77dr4xhoFxkGsUyGNo7KHNevdAc5b1P1bVaNGPtWzsb18YfkQ82NHXxzEowPopN6T4L78s1vMY",
  "key20": "2165WsbWJ7ufnP72LaK5M5ytD8HuFNLqPhdzAtVHR8B19yt7hLvmAMzAJPpRJZeKhqNHPRgS6a6gjUSYs61HTn7b",
  "key21": "2dMsASAWsSLEyXB5sm79f8yYHrHtXc3XscAX4SHDy8kUa4iPWzpZ65BkFqXn9gCvocvcKHFU6KseU7LggfzLmfGR",
  "key22": "3j2QqscUnmiwoh9rFJzUVy9af5fj6s2FDTMyaydmiMRNWCYrqkk3aWs2wZbEVwLLCv5GMMumg4UCLmLkqEfRAPoF",
  "key23": "3o1ypkdX1nSAiqLfz1ZUwxA5yarHMsFNDSCDYc7mdUErCUobuFgzPvur9XWLeYyGWWNXirMbrJ7PNcU73Z9uDyE5",
  "key24": "5KDuSi2pF12gcEh3wTBju5m7bmS3YsWT3hgYcrWJCf348wnadE4DwXkcBcHyq8r2PgLPBDBnzVBhXUCMPtYBXvNw",
  "key25": "jMB98LFfnr7HJbD1oCNrX2HgdQefEC5GyAgbpkuDZtmJb4TWZbGbQcuB8oFq7veRFwngNcgZvDXkNHaceAeMTBX",
  "key26": "4AyxPEnRMo354eBRAKHFVkc35Pu8hQx7pdhUfhYVew6Z1xPUU6G5hWRAqpwVhKX9wuYQjdrJVSPqFmA7ERSfpLB6",
  "key27": "38ypX216GXez72fCqg2bEghLEx4atYhQc6MjSUeXr63npGPGZ2aUkV1Sbyyb2WrUZAxxCcejJ6pEq3yDy3Nhec8k",
  "key28": "Etqh3HDsbQucDdMi9PBeNbDCdGZeFHKLQy4VRjaY7eJ3sCpBXpFy2pgms7RJKUvQB9f4tYvdZm8WuZdrRYtjhDt",
  "key29": "4nGNKqcXteH99QhSJiZAotVsP2aP1TXiG1ZcdxzSrpSS5Dr6FQEChcjwYDW77mbYzsNNzBY2DY4f5qqiJgLmdSz9",
  "key30": "rSnejoH89k2iDN9jkM67UihWyHUPXxCBwES3y6QBk9RKYdAV8QRGFgRN2bUduf5CypyKiBgc53subjQzbQeHBV1",
  "key31": "5EVnc4dr8LeVvX1dRwj56cWLpqtRi7gonaaAMCwELQDgGZjZUsdRKLabNsMvZLk2FN73Erb6twUVBLEny9ERGrkr",
  "key32": "3NgboZDsQgaYacKdozU4Ddpus2GgkgbWoaDJSJm5QrLwSEY8AKFHeJPV7bG16HUuFih6rX42vejukX8UX7G3uj7R",
  "key33": "SkHqhCPWrsDmm7e3HohgEPvVPQJ1XA92UEuzgXHRLJnjFx5ncN2Kp1Aqg3gTA78PARkPpaJLCVZYqgqexyC1j4d",
  "key34": "4twiqq16r6hqvkmmuMM3eEQdihkQ5ZR5JVnG8kXF8wjJ32ykSrxGbCfWtKzxkEyLA6mc18Tra7ghegvBWYvANrV1"
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
