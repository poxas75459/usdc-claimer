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
    "5fvrTABksUs1zRSnUKpmeypCK26VcJqZc5AQA5J9KH4c795P1bUybsVpQtpTH5kaa7avnSayXPwwy3TNJEjqoTtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kKRMPBhGpNw3yrrZ9tBiXDxWiAFGmxJzPSpGtrMuR8oCy2p19EnJy7btLZZobWCAHbQC2B2QZGboejxLJgr9Vcs",
  "key1": "176c4oTqn5WkBNMF2LEoZeFNng7E6HxTxEtj9eyFfxxFuohKST8Q2hweK6nARf2uG46kUk43bgUGDgc3JwcNCDW",
  "key2": "237QyjuekRvhPPLVcT7yfoqebkF1yMddc8ttD6iLKGB7jzx6er5izJ62UqVJPTc1pmiCLu9n9boihPay7foTcudz",
  "key3": "Q8zvPzC8Ekn2YLKMb1xZiXZF5hruRdnYSuEojGQzLs2aXrYQmZ9qCo7HRfrCUdMkod17iNqKL77iZrsCLCa4WjS",
  "key4": "346bpBSufV8UcFKR1kQfZfG5dZ4cUWZHh1CKaCvpKLiPFGSeui4ZguxEMmSDdYDrh9PEGKt2MDwsfMJhDvmdqtpF",
  "key5": "3b2jGdPbktenvYDTUTvwyjJVhv9hRvqtzzVuRKfPn8j1GhUhaQW1tum4vKxBWAUCocTncTkPdKR8EX751bHq5CYm",
  "key6": "GBuTDkddRxH2K3GSJNoq4z9NDGhju6qnVjJt4nq6UruTLnPCwH5a6MA3Fbo2zw34D6jMQE2JkgNrNQEzK9EAkjU",
  "key7": "27yXA2ngHpwyXtTjDsYxh4qkgXxXC6GwgDYA35W9stVmhAXt8imewgR5NMrvuEdF8w3UvdofbLbMvwRg4EyXnUob",
  "key8": "4gePxhzcG2c1WePHPRAArnWBQqyoKc9hUkfs6HpVTNQLdrzJBDSyQSRQitdxUM5diKTFpCVERbSgYwa75dgAirVN",
  "key9": "51NooCeF9inQ9p4kTDeihYrM6QCrACRux1HdiQeQCVSHNiYokGtMY93kkVdX77HUY1roKdxaYADf16aqKmW7cVhF",
  "key10": "nodnLM6ScmbHtzL9b5kxfadV93uN6jh5rpoFGe8qHKqAQRCXHohWKYTYKhPMUoNozfhwgrN5nUMnTtEcvB9mriY",
  "key11": "2MKCQAa16p9XeY2kBuxSV9iGsULKk3SyDnXGtQdvmWH6vUqxNJymfMbn1uBTQ71oQQuFKyXRr9QibsCwB1WRwNZx",
  "key12": "4xZRCzKDV3T54vaqHEV9HqCjRSJEThs53NP3sPBoUyarUxJn7QhYm9TReK8bHEH2vkKgFcykXmmvEYQv9MiWNXcZ",
  "key13": "2u1gCyTmSTSiPG5AH5DBiS4xAwXaomSA4ushnxk8nipeU8D7H7GhRnLC1YNQouuPVnf3tTxWdZbER8ePoDzsN5qo",
  "key14": "U7qDWSw3aHnQBiUV7SfTsu1ah7M6pbLK3hYLfiRUuT8xZV9YAMWFBLBtjX9uFhiK9zs7crE3yZZsh2NqrxB8nr6",
  "key15": "51U26keT9qGCtPUj8FBz5UT1VMCz6zdShbqiWmFhW7aEhYVx5z1hVBhSaFeE9Eu6ihQAq4sH84C7wJErky9QTRgc",
  "key16": "5Fcyu7DbJakRxF58T7TfniQJin2wgSEpXn8FXgKWNgaA8mg9xWjUBfKWyzaQ2K9YJAXDWc1qZNo763EyUa7dsnxv",
  "key17": "556YTRBzibcKrjpNh3Eo9H6jZeAJus1FSuTS6ASzZ6jKFs4i1waWv7NU3TxqteJmra2WzKVGZotv6AqG5pTGum2Z",
  "key18": "3Ay6RDVcMPVrNWviUDt6wN6aJsd88AkGATzmUrByGhWUKtGCTsQqXJm9iTwXHobFvPd4Vjqs6yuy4hgg2bqgdN7U",
  "key19": "28uEop1fpWj7YF7EFdV3T2MvjyL38m1jz72WZyfDfoo3KuqmLV2E86wFdHP48zoSfsR9nV3m4muH1QD94xPQD72W",
  "key20": "2Cc9ope8WKzrX2CUjuWsZsNwQWmegxzWziGhzrM1tQRMU8LeWshV9wPhozRCh7aX77xyvPJu6Aar1EjLkKjeenGy",
  "key21": "4FN74n28uZtAbx6nnYm3Pom9eQ2dLbwLwDBMNyzxnhVSaE5MoTpkwdoShG98WTDEA6xvxQndjY1XGrJ4w6D5vLAS",
  "key22": "2EhrBEsQ78ZjYJbvLMYha8o5RtoNYqFEzBbN3dFTgDDecSEjS7S246XnGQFDAokccti6kDVD6XwDYuyxiRSgskUd",
  "key23": "4Pd87YcrBLtnbRabd9QYZL8gr9gZL1GVSzwDfj5b7SFoKsUoh5zVge6SiN3xM5V5AdPn6AFtWwVvW6Zah9t6eAnx",
  "key24": "3xwhWHv5qu7xc4iJrbY4Re5LTyYVy6UugwbwcLSj2aWw8Yk5JVigw1WdeWqfcA6cuXLqJYxw2bE9YE1kSCaaaSWu",
  "key25": "26HcJJQVHbZaunveRuMeJHdAbixg95vyHhC6yvnneDFAXGiib3DozqG37wKT7SYhjk2dw6chn2AEbQxS4QtKnzjN"
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
