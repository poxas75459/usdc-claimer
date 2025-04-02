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
    "3VKoQS2LFx5jnGbdZFwzYtrPiBvY5YHGC8Y5dvaVcDzBMkCqyaLTEMF9VgGrrhg5ibdBSQeAQLFUVfvxnBwTcxZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5emQzbm8Rd8eF1e2PH7i2tSqRqbXXSV2esXnZwApe7G32CrrWGMjciTqdQpN6azGuNkzR7v3xwDpnink6auRNVTm",
  "key1": "fhAx9fqMcmLw3Ann9o9P4kFt1ap8kM7ZbtgmFU4wyXgUQzfxrEW16RCNMXLJrdrRUgE4buvXRxPMhT4TCBhe9ia",
  "key2": "2amsiMR3GH1aEpHABYhRcGqgZvQF5GHXfravzxkRsQngkZmrtmCxSUBpMR1sDAvpbF4riMTEu7bRR894wT35Unqe",
  "key3": "3Z2J89XDJ4dcFV7JSvNEZXUCe94QYh2AB2APYtsSirt3JX9EHTjecwjQD9JLGA9kpNbvHuYykvvWkshCfS5h6NEz",
  "key4": "4UEkrMaSyUakRRzhDy9yeCbvjbwgucQMLL16jYhoHjRpxDySXQhMvmhCN28DVA5ofaaAMRwCwEE5x1hU4NotZsxx",
  "key5": "2ozx8qWe6dXiuhfFYBHXGnHqb2yf825mx4x7nvtqF1A4e3n1gHP6qfPjbKJu3hXB2yauquArEVa2YRkvXtUr8UZp",
  "key6": "436ER2VcQ7QkSGrm4NxnTE3TuwsAYoYnVeXGVXofGRBtyc5zGGGDf7HKkBcxVjb5S9jLa2Bzt8GHFdcR7rQvwwF3",
  "key7": "4TS1qGE3ghUQ1y8b9M38EC6sZ96TbMk3GajR5VVQRiqgKaQCVHMaWp4PLb6PwVXnvAy1jJ9SnXmtVazvD6cUFqvR",
  "key8": "3eyzxqPcixktcVT779xn1hUwMmkKUuzPsddyo2vmYcuUybHkbyYadZNM5R5nizVWRvAm9eGrodHrmZnZwB257gsr",
  "key9": "5ayJe7L472fmzVfrmNZt4Es4tNyztMc3aZbPvKKMtvw25SYFMvudebia4DpHZqQbFLCaunQyZ34PQ88pPW2scFyR",
  "key10": "5Hya9kcYfgiYxzAuAXt1Ys7es1DbjaqkfhgouJ1hWteT1TiTQ2zGAmzBzyqSKkEZNR76di8wmb7pGvwHNiyCboM4",
  "key11": "HaFoZ4EpLzUPYW1jy64EuDwZvonRwSTLLnFSX9qaUaXRW1rGn8VJPo7vERdK7YpeTiFtjXwT5R1gzpeQv6MXmqC",
  "key12": "Ye317uBHZnwYbe9XgAo3ZjaCQrB6Lb64DBidoQBYujtgV3pbCszDGfwMtPTVC22oiZm7qgRXXZqHakYeC24Mp2S",
  "key13": "3rwCaFeFQEubm6c2oHjRkNYrQdnV8C9498t13VyJmhcrT7WPkiaRioAqFdxxqHDexHjPNQsJCUDQSzcqd79cVbCD",
  "key14": "2ZFbA88nzKpZRpcsKhPaC8TX3YZeqCKaL8Nu8itJWpNeHksqoNG6wSvh4VwAfTnZbVUv3rYu8XECngAh3CvP9vnY",
  "key15": "4H7tBR3k7SpmBuPw7vVjqDeapr8TcKbNwmTTyFQS6E4rTWyqjEdJ7r3AS3x6N7BUDJRNar6vzCqpq6K6DZLzFkXc",
  "key16": "3aTcYzsY44mSJfRqCH4pLN3pXRX3ZXHQXLEMYZ1szaVYUWe82gW2jMUR7Yz9iMsvSq6PUiCY6vWWDJC6JuCEfNSa",
  "key17": "25uKtv1VK9cn1YYdPmKaMHGwcywZ73MCdNspm8ygi9GR8XBU18A25mya21ixDtxWEn7iFFUqPNYMwNY4k3Y44V5G",
  "key18": "2BQNnLQNNPLhaybc7yr4JE9jHapBy9Eezxcu3AboAcAaG3R3Ba8vgtzaWhcLdZdk9UfaQAh73WdqRdWihyFntHVT",
  "key19": "4p3tG8cyJzdJ7x38g5Yg6W3o5MVcicxVDr5R3smvWVV29Pxcm2nsNJxd3NVhH4AZtd5y3f4zkbXQ2dckHJLXWwF8",
  "key20": "3FghHdHRfW9f98Ae3pLQnRKdkrFS7o9j2Gmmazd44vMcWGivDxPzt9w9pqEhAk5NJwxBBk5fwqaUKcGHhJWVa39g",
  "key21": "4FkZAPbSTPXssSZTKa6n5pdRXnwQ7s5Q3aYKQLtLVrXrCUUP8eAsaeFdE1cepPkVUN9oxzb4MQhByMyCAsewBXcF",
  "key22": "5uu4BNdMbNY8u4wtRqeYMrcUCLacvdnzCfrzeEX6jjDs3XBnRXXNNbC5DnvpY8Ak5XoaVWU6jeHaroedgqDi29SR",
  "key23": "wNUMvj1QeD8SaZy7Ri8yAmsHmxZB6mjNh9ES1tZ94KBvHVAtec5wjo2eUETN9m9bX8D5mNXWwkR5yojbm3k88SX",
  "key24": "58DAy4NECwvRxGfQaXnwQ3SNAoi6SBmshPQRXjEYbEX724MJPnbkanXmNEfMPENrfXnc9EuUjdhVivENgLoi4SsC",
  "key25": "3op7EjahrzU2xq45rU25GRN51uZQUXf7jFHD8Rug6Veto7HBv6o5ftQGb5V9sXXBoerca9AXoZpEc1qoU2Bd6396",
  "key26": "4dgj1NXfDcgZewYfQyJB5EaDpLyhHaUvjpFidBLrQ1f7hH8dskNs32zd5V1gwL8j3Tjg2QyTD9CrWP3xwipBUrEw",
  "key27": "4Y7D8StRbTUAAWqx6Zu6qoEgX4Q9c8HPNkZVUrG3WL4E8r6UUsST8ZjCwHzFphp7gpdAWxeCt88KrxxFbCCNoKyk",
  "key28": "4joN6mbvR2iBxRjt6pz73Q8mrdrvFNwVLsD9vxfdxFBVgLdzQzcBo4BcGKGFjspKh1Gu7FVv9KYpR6FZMTH92jjj",
  "key29": "44jbXPjCYWnSp7LcjjQQkk7fRQJ2RtAdc3qFZJf4mnRcoTuVHD6ENcuqt1pmkgNAG6jkaksHwsAzCbXspVvgYZXe",
  "key30": "zcwcHGrWJwYDMWwuk7azsYU72LPKyLUkWSXPDQT7YfAA8xeWbirJ82UGG8nnGngpG1hgruPkMRMkrifstUyR34q",
  "key31": "cptWkgWRrXqkkEJBPTb7xpk9swm86EqUY4JbuuJGB48E4Lpv5G7fGFdeVj8cVYKukMQbEqXWVy7wtZV5GnG95wH"
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
