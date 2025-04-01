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
    "ojQbsVpxzqUEWfVkc3y62bGoHLGkL4VmMCQMaUZRCSpenhuAuUFLDjAk6mL7QHqF8kpB64XVphrWYdyESNeyNxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zgkC95VvXB88wGAVecwiTJX7z4MC54MoSnChyAnznTKTmred67fnix97G1rL2iZ8x9eYQjdZWfNvVxxnifadzaN",
  "key1": "42yu9cxH535UXkPvvRcdALgbXsjVvGAxKeR9DYbQz9bzNghYK8XkDsLrMSicQDJRSJmgsgPiEGPehscV3J6djknm",
  "key2": "2p6QAzecYk43GQHSBZyfycNRRyvXLKmsir3sB1jC33FipjJ7zH8yRy292Jb7bXcNnk2YSph9sLwuKfFpavKcZxdk",
  "key3": "2RAo8mgzfFuMUkUugEWCMQZTYm26wWMuKfQYLZuiZ9Fa5eyh27xidALg6TG11Q3KhGBULpGMKkK2w8kbVsFuCBYk",
  "key4": "29oFR5iCtbDMwMtGaGjhqHWCfgLgEZz2FkcFGsHWgyuA9sXRMiHE8PBT2HpYRgCUeC7z92whEGajRuN6PsqLxiyu",
  "key5": "34cRhy6rJqDLrmFH7UEDsbsXPixhAhnLsKGKuWW2YCw9H4SvpVZ6TCEyn9Ppd1qo9w3eXC7qkSJTdvsdDGLhP33L",
  "key6": "62j9rTgb39gHaz7NHyvSQPePj5s9TQz9HsH2QJ7KbyuV2DxnpEU58Rf9UC4oB268GbpZuoPPsxuepsZ6kVM1GiZM",
  "key7": "41tdFqVYB5hMWKWwsDPViPURH9NCPXmeui6TFW7LwrJu4ihg6LwjGJUN1YHcjsNBwMs6BdMymXExDtB4i4FX7YLZ",
  "key8": "3SxpE2xewajQmBfymhDu16e8yDyaLook8dja8aNNstDkVRVK52wSTWMf8VLYq5BpuXJrSKrjLV9SGjKFjxwpVRt5",
  "key9": "3XqHMZVkqGTLVdxJMtb1ezQQva94nprS9MFS1yecmfR3hTCU4rxesBpjLHSXAA1r5PBXjhBnVveZzycNBskYp4cS",
  "key10": "4f1BZzBZ2L5MfuWNRDQQq2PkCtmV4H7DghWPishhJxFdGkdWZVmerk1sMuDgdQFVRe515zpiaxu5y6ztAYBpXchX",
  "key11": "37akepgVMiNPdpoyAajsgDMnNUxp9r4FYuZB1VRqffD9mQrqGPzzk91pdsNPr7QAgWfp642UF8qyFnaNZfSaVxVE",
  "key12": "rbgi5vcAugFbeiwgNcBRGfjjHJUrK9AWof85CFHK3yEBNdxYusQzY638RCTWyPz3m2cULXGv57LToAaEof2YcUd",
  "key13": "4VNHui2WnaKqPUwLv3YtWLS1umaiMZtqWzJC2znfyC2AKWMGUGA2wsW2g4E91SUVxLL1GzKDiLss3u9NhgBQCSp3",
  "key14": "3aopgwDfGLoL9wYy3YVFGGu49jTFsBacwmb3wopcqA9MVWsWGJP7YgDHpSVQm7fjSU2mmwAnyDxCMJvL3GLzT2sW",
  "key15": "4cbaE9aX8MeP4JhnbEbXRV4g8Ta8VBhxqrPQxbkfpdd2tBbKLwD4EYpD8uozjnUadrwZxgeLTjjXfyEL4i4LtHrk",
  "key16": "4LH7JiTLUa5k3kRdbdDQhgW7he2ACp5Ae8HQxwuRSPVAJjhs1Jdvv1fYsxdjgxka3HyddCejLPXSvBTEcJAJmfTp",
  "key17": "58gTrMjJeMYA9q1xj7jjd4TNpETm6wtALLEwErbq9MQVMRrm7vmdGGqoEnaJhYH2x7Lb9kAL34KoXEoRYUMLv6se",
  "key18": "2Eyenebz86EwsrUVSBN5pyAfFPUFpyprETdh14m1mjkvxoFvm5FbepisiLQMSRyNU6MxX9JwSZfAbUd3s5fEJDGs",
  "key19": "joiG4ka2sP1L1sK5gGgMkWmTGoHyaX6pPJgX7Srg2iTzGXNnwWXK1mkkoxbcAY92dhMnvaS7fyfC1KoYqUWaAB8",
  "key20": "58P1VXU6VeVZkNbUHGNW8fQH8m5hfoF8sLXh14tsB7QYRPSBLdMqNWmvN4VmjrBGPgzj43F1Ggvk7sMQPkqUtZZj",
  "key21": "oBi8UAAZXGkjcQUQfMydsQRYXu1LrjrLYWZiZZ5nxzq8XCF7PU4iLVVb9ZDSXomusF1XMd3Tvq42J2nwaCgVk1D",
  "key22": "5KWHPWBhKa9JN6DFyYitcKLRkSFtETBAJiuzRxgogF9PU8W86ec4nsG7SH3n6dnuYQiM17xDUGsoFUs9m7ogMa7X",
  "key23": "5t3H6FR5hwpSRDDh5pnZXY1RMoKuc957DWkAwQtBMDGZ46nQnAKKHaroLT1BckHnrA3n7rkHaXpE3iinhJF6f21e",
  "key24": "48sftSMtSpWcvUWJnQdcJWYR6AeXhdpbgidR3E5ZPXg3b7BbV8xGqXnLC4WtnqN2NUhN8DyyvCP5Hrb4FqCJYYer",
  "key25": "664KKwWDNujwZq2FLkj3vhYCpwkeUexuXqJPds6aTszkmyP8bzdcBbUFqegWH6GA59ou8VCJsMVQTkuhH3gyUbJw",
  "key26": "6cyY38E3NVfCrfY5UKZfWuFduE8ZkkUmQjcecrr1yGAdFvMHnSUBtuhdZYRqFKvept1MyMWwCnNBQjxQSsJh2WV",
  "key27": "3K9wtywg6NLQEGeGGaXB8fF5g2KSfqooyzeLvN7K9Tc8yvgjWxtHQLwFmeV5ib5NGHqw8eoVK2KMUUS6fTwLQsJV",
  "key28": "5fPtM9i8DV6KzPL2EeW57JLbYFgbLgLN1KPdXFjaVAqwbkHZn1ZbSaRUWaddLBHBaSWYCxqtq2xSkhSYdRDDJ4A8",
  "key29": "Z239E4GYtHjNpi9NKCoNjHcsrn126kS5zVK3hmHihsXSUDxv2fPAFE4NbbGX9SXNuJfHbWqJMeymoTRdjvqAVZq",
  "key30": "5UPtS22bunc35GRV5gmdyRwUu7m92R3uDAG8T8n4YzU3KxgKLLJ1MwpAbC1MzS91XtSywZAPHyQQZPK1BZK1FZpY",
  "key31": "3adLyJTh7XLP5Ej4MKh7wST3uLjWRc5mALUYsQUXNFLB2aRVNc7RFHc1mtDunKAmnLAvubfsnChhYo24XQE9qw13",
  "key32": "NBBMu2giugSJymHiFN1VAwpQPv8wqZUndhjdpU8Q8YKKdmPCcygfyvsRJFJpwTrYyUiWcF77K7riwUnbYzASdtw",
  "key33": "4xZ5qDvTuQS9bgTzZcjXJkJS2HUMiEcJV6HtoBSfQ7D8tm9nMdmUR9NFd491Gk5ktPnrA8SXN1cq8CoQeG1jnTER"
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
