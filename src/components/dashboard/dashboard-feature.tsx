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
    "4BFNj455MY2zMAKgSuVK6SS4wPf6UPCFgfwCn1eVc9fNy26bC9KYRj9Kb7QUuQArRXuetVNYxqmPzEb9o4tGRh93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EB5XCfHS13DtEFhkSp1FLJaYzz1ycZdWg4daYipsw4oeVr8oQn7xQBMaeZ44yfddL2VsV7aAAjHti73xFpTC6QN",
  "key1": "2uvDisouNZwXHgAQC41bvVZs2a27pDd4sNKsDM4eZbiCLUzt6isBVMhwufBFSZ15ojZVHj1BHFoXs4gSfziYu8fu",
  "key2": "5NAvQ3brEWkBsVUwmpYKcKsZJLRqU9Ew2Fe2cDEPMwriBohdVDBkURCumnJaT8Vvs4iVTGwL1sNjaUyqaYxrJh5r",
  "key3": "4ZbRvDRzHKf6hRtJmFyZq4v118fmmeUXhxLFjkzBt77ETJK6oNdsYfZ8ykrwvGQRKNP9zupGKx29dVeVTqKTRy5E",
  "key4": "2u2nEBaWEmwCjckiVfCdeLmLwu7Z3k9QaB3oEWSBNsVQjigAHZUwcB6tWpy3vGry8Fip7yv38RDUPsiZ1soABAcp",
  "key5": "4bptAgytfzDjiZtQbAT6bBbAVuXbtVDoF7GxGZrkoySSKJhbTc4Wq6zb42RKRiBCoJRjMZ35ig2aYRDKSsADdkXe",
  "key6": "2jH628tbiaxeknWRcbnQChKGR8W5SeAJAZRuCaPUp2V9RTL99uZr8jvx3E2TAEkfrWUXpWE4uaxgH88Mmq5i9rXg",
  "key7": "5kprZfnAXfLQM6YYpMB9ZLqtc7iTFNM4bsP9wU9tSrzwrv2NFum6E6SBavnKRHoffaq8R8v8nd8AGyNjMgPjpx9V",
  "key8": "3Zd6xxdPsaZj7Xadv8JGo4QidZFAiHKXTZMXWDwd2LkAuMktneLCy5a94ZqpmPYgqzjtUQ7KMH7ap3rgQF881mfx",
  "key9": "2nfGDx9opRiFDQTCA5yvCSQzBeUE2LsM5qrcQfWBDxGuv8YYbroM1ktVq2hJgQAckRqEPU7AbBpZtrXtJQgohz8x",
  "key10": "3XPdEK3cFGoS4khutauBc4cqJZ1oBau5ydBAxmGDSyoz3X5qTShQkv5HmqpmQhae4tY21VwRCsJi3QrC2FSiDrZe",
  "key11": "4zJT7z4Wr5tdjdRkv6w3RYF2Ns2qeS1VNYmmGRZ15KWjjkiWNgHwLPewPnaMeqg552arejkBb2wK4xatct1eS6vf",
  "key12": "2UjLmQHSNkRscNocRQvBjrg3zx3UQebcvjb5GhiPDxqSby6YLSUKyQQQNQ1JMTdd5YRq9Xu868YNxxAPwQQP1s9r",
  "key13": "5KuDPiV9K59EaUyvKpVHm8g43opPPhCJPuR1bB9ejPV1ZHqvQyd6pxrbctgqLuDoEXGufAyWQeRssgDqZxoFT1kb",
  "key14": "2vDdh7tpFuV6djR6mna4VCE56aUxu6LNjBWHsZkchGny5ufK9UBLMJi5kS7pnnsq9y4Ki821kK4dJyBP6ptXa91Z",
  "key15": "216YKvQ74U5MnHuL3y7XgoUMqFXpF8QxdMxV3Ltm6ZyyfBAzifJFi9BJz4aixUMk8BSp4XVJ8XUZiWEorYCBU7kW",
  "key16": "2JKTHFMQFgyYJZeYX1XkgXQoh1nHYteFQD4KQGG5YWFzrHNw73BLbHYdkx5DnPPVZtQqBvafCEfEEJjLHMCFhxSu",
  "key17": "4ha43jkHXDwXrKgT91wMx9sUbkoTVuCLmd3WfgzVrJnQPEs4S6j5qnJ7WXo26J2pstEULJksCNrAD17qfhrkDT5A",
  "key18": "47Ffad29fHvv6cAX2A8YGvcyoMKSRFjwEYVHdqs4P2Se33VEqhhb6CmqLVeCA96DHveE2mZjBEdHnmG6WirZvvxm",
  "key19": "2UuNMUEbJPrPFpzCLqzGwRLfXPL8v8jJKcjDuebwh4oGydPLdvsNQvbSUNVTNz8PTEWt8PChbLmq6JLxAcgyucFp",
  "key20": "gq4AvcL7u6BKjJdA5RkGswrQ5zzaBfjxVBE8QF1ZDNWDinGtpKZCWh4z5vmbhXKL13tkFY7rcVaHZ88jdXmWHw9",
  "key21": "4uVv2JJH6kQvSLgVnUCpsVRbR5uB7k4jwSzvHpdicSneWknJkm2oRbBmBnRBWewN16eMSmVF99pY7chUm46bZDDh",
  "key22": "59KopYaEY2bkyW3Syt8nbG3KeLvqvRm6LRxShQHppAtHLyxfU1L8MxPv7QLXMZXPbtJ3UaxZ7jG4gD4gqiFzryMT",
  "key23": "4trGmmrgCfytv2UTmfdLzocLE7Q9YSWPRNC7BA43ZHX9dTmSvTJTYyrpZsYMtEafUEJLcxTGHQ9erKhFYatFtkrD",
  "key24": "3GWv56xRXgqWFDUJ9Ly4Y3xpcCC1K7wTnKXDxfKYjrYF3Dik2yYqCn55waK2AEMgGMZ2aX4ErcjUucd3jfPkpHE4",
  "key25": "2NS1W78zaYVtB4ZKToaUY8TAGmPPwAMUmdoNw8DSAFHdMFYk1hQ797juu9xphZB4iWqoWT4oUPbDU9Ts7ZhA729w"
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
