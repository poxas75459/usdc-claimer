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
    "3XzoGahJiKnaYqqphmU1T7jzCRbYqNjTfz1iFxeVdKnD7GJTyubdsaRZzyGYq5addcMndpxRKhCLw1QpgXdSYGi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oAin7HrtzqQKcX18tdqHChngwJfh89yAdp5VdGpAEr8ys7xEe2tDrA1hUDpshwQSbw1YLstArsx8CxCuHQSWWSD",
  "key1": "3XWwQj3QCHdnGnUVMfkFFPUc8hjfFpfPfME9pLsj5tt8CEhqRP7wbiiaV5WDosjmnL2NSonNy2cHH2t2xwGmetke",
  "key2": "5jKz1gBy8CmRcJyWiexcBbx7Rp5n57hxCxvqXtmLQbr2xtmxBw28Qva1TY5qajNZfCQ76BRRXYNXBvneUBihFbgS",
  "key3": "4bhRSeSgudbgBfxbgin7KNmJF2zq3NLQUV9NTLNtiv8NDmmwgAqkY4af123yye8i71YzBUK9CAAZw6vahtTnLRWx",
  "key4": "5dtAYiyE3ohRTQAebt9V436ykGcsbeGmwChAyXbXveABqJcAkmW7Jn8zDdx7fq1kxbV7MrJuGBQBMbHpwPdrNKn4",
  "key5": "51T3pTbVTHAqVSRwkh6qiT1u7im4GzqhxFrxjVHFYSQgAuAf7Kb2DkVtiJHWmcTMFG8rNSS13bKHFgExRxjK29xg",
  "key6": "2VAGRt7Yh3H9MhjCauLSu7QrL9AAhtXfGZqwZ8bmwWsZAyx7Y1UhvXurJdh37f397sA78xzS3AXjwsZJvYXXs16S",
  "key7": "gSpr4VzzvFkaLF9j4LC46DKaLExuXYKWn8nJVKwAxC2x63KYXitkCivgLpEQpCEW4hgRYcbWWJvdvSeJmRwob39",
  "key8": "34ymHvPmxftYZo92bjVKjzC9eD4NTVxq8HjUnzP2dWPdnGvvdEbf9HNjzZ4bpfNwgga1toNokat1w2uiB1TLVdUy",
  "key9": "45461MSFV2xdxXLof8TdHiBMSwAjjxLvxNjtUf9BJXFp8woXFdYXZWSKstaFoRic5wgxBL16av6siKyDDLVpLiHd",
  "key10": "jwbioc4DE7cH7HyRHP3mhXd9UQJqLNedWyEpoUw87YGmuak7a6A4J3iAZDbHCFWi8a3hdRRqRcFfxoBC56CB1PX",
  "key11": "5MhEiuaUvrZh78KaLDuMk83QgcwPPcWywNhocGqkgW1Vd8AkD4YC7jH6N5SXMX3C4z1WtVdqieNt1Hk6kSYgek8v",
  "key12": "3omX4fayiGZveDHhc2Wnpw5F7ho2KWhhKCdH6hc4qMkjJGZJ3nQGdcXKSeRuy4v6bHXZtkXWJ4k7NSNHbUpeegBz",
  "key13": "42dXQQWnByf4jVTAgNzMW7dJdNE72egS9h9cPuZqthgPY4ucj1Q1jFj9qE3GJ8CGCvjmCMu5tJYYs4LAQi8kRBHX",
  "key14": "3fGn645Mf3Uv2duVwtTRcx3hHkbBetNJbiBRAk3fTSPYN18JUHsXHokUJLBjqcc155EAADBCj5RAYdKkzB1tJV4T",
  "key15": "2qAJvbdjd9bVLfnBBxNx7Ct2ZzK8UF7C4ovr51VwM3qHsftddTHEvSwdVg6ztnkqED8NTvWU8zB54EwnLVHe7QhZ",
  "key16": "5um7auHmPFTPNob4tRNVrcRHRSMr2gpYWEHfKrAE7uZubgebDHymGVQCMN9TM4qz4QRHGT2Z4uuePpxTo3Vtgdmh",
  "key17": "4oX4eEF4EHadAmYVz6KaLthPNBDP24p3K5RqR6Qwd5CN6KvZjfPbZwhS51yik2gnKPcv6VWgTx73cCDUnZHZsm5U",
  "key18": "YYKQk7VSRNFuSuCRk3Hx62rJ5BFkHCYn5Zt1wDqgMmbXQXkmLhutZXnDGPHWGMKzyaLpZaMpauPMbnfi7gvjqwN",
  "key19": "2c5BPzHMqHBAeAJvuQpizJXt51LVPUbsHQcYE1ZvmNVsVzrDNVe11mtrVsfrPNk3SDeoR1fx7E6VKzT2GySDT2ce",
  "key20": "cqvZdhvGNywJCS7eWknpMqLhkEDuQ35DUV3f8pMotKgW9UsaHRStiJjdacvDewRvbbyX1tEWZWAdQHNxF6eQaZS",
  "key21": "35243UJyqFHRVkNgVFLZkSfx9TYHmXGRr19sc7Jytf9JrLswraMWZ41wvdGKZV8JgJXc3HeAaf6fpuk4Uf1nRGtL",
  "key22": "whUwNwds4zvGpni9SaGhiSMaPzSbt9HWn1trtJMYJqqE1pZLMTseMX6Vrkqbcq4p4jXhLHheWxFo6SHyXVVP6XN",
  "key23": "237QRk6Tqq4ubedfskTRTNMNxqScp7Y94ymJxZeGJfoXwKZjAiJ7T4gwyTvUgaK3pLuNvQGE5RviTr9u6Cj4XGSz",
  "key24": "27MpU3efCYG9K25Pt5sPH8HLg1sXyAKCfHfbLXJsMKSbsHHXmGakMdSc9HFDdzXQEz4vJQhq1E6iEdK3W1ABKsdi",
  "key25": "5nYrPBryrYTWLBGu5NRepWuBPxKB8GaPQdv2rLY4Ko5QvxfgJmJ3hzvuz5HmZNypRsCRhLKGx7Fdhqy3ZZCQXhnM",
  "key26": "3KMx42Jc6Pwm1E9SPRtZ2KKkKRT9Sk7of35Sjcpq9PBfAvh4FnZKuD13LxRGSQ6axGh4ge1YdnB3RAYmqvWmsU6e",
  "key27": "2JbQpDjFuYSvf9mVwxQQQowJc1vMcPUPXG3BxGs2sajd5ftoKdKBZFKNNDVzrR4WbBL2KcJqeZBV6PRgiqeg97u3"
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
