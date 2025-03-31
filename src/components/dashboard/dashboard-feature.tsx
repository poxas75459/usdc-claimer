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
    "3MoUNNkUMGJsFaF7JeWMfa3sj3Ea1CRkxv62jNGnbQxt9az7rmDcP8zMybY6V4k26uUGKXzzXfPBTDM3CR8cJ5y5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48JWXkYtAeLMt9PvDV7m7orq7qccDBwkmfNhmJhFzbjedjxXQAg587c38gGg1Ga8xGX9UukwQfuj9cXfUHFfAnPk",
  "key1": "5p7Ge8GZ7bfMNzBoyWqfJTm73tYmkyu8d6GS5zPxTC8MfMd9jC2EpKeS1rHWtNtFxcvks3D3T36pYFVEbehXAfFQ",
  "key2": "2Cqf22xV9oYJY4vwuNK6KWULirzaCt2xDyEMYT93ccjyxnGTFYH16qwhMMANiHgrhAQKGsixbJCuQBovSJ6s9TMq",
  "key3": "5wnQ4gaGZZfrFCpwrfp9Ktjt1Jx4c9M5NprhRTrEPEsaw3jr7tYSMHmeB8XLA3ovsjjwcLCvww7u8ECfGWd8P8Qw",
  "key4": "5PD1C2kXt8Rkr21fsjm3a17XLxYWW5aXWxiosZvB2ufB3B2ujW4sGyJqGU76CZx3DTXLcSnDa5idxGMWiMP2Diik",
  "key5": "34iPoHxpFUuoLvCyb66myaXa7Eg9FycxaYuyjW9q112Ugw3pwfb3vV5ZahALBTHPV8MS8DxScto8T8QFC2bVMJEg",
  "key6": "5kN7xxjUK4wN8yUTRk2fbxHYGa37ZoNda9MLemuZMdWrPZ5hnSHXwYzDpqY7zZb2jLqBRHY1hVkKaQs7WZG231LH",
  "key7": "2Y2SC4BTy3Y1uVadTbfw1cGk5NLfog3w8QB94jQEE44qzq2ngSEd36FFNMmx38JDo6U6xwtTqmK2sVA5zoP3QCyz",
  "key8": "2BQY58wCF85hVdv9C1tWAyiwnEA5vMma5PifuQRqj1G6m2qenHQ3b1gofsdCJk1HPNfhoc92CM9LxunpTcjpWnLM",
  "key9": "5KXzNuexj3onPHR7rjy6Agmb47zmQDy1YVD2rkbWa3M4UY3UcU8BuUvyCGZHEJErFhvShwxj5BxWqbzUaeUi5Fz4",
  "key10": "4SosUPtfYX35SudLF65hVeoygUXKbxD5TuPg54PPr2dAPH1U5torJY4iexmigPRnjHHkd2fS9hoMKxtcGb2MeBA5",
  "key11": "4u7PogrMT4W9hPY7hnVKZdVC9ZtfC781wkRp2dz4x3pwjyFsUNWQtKAacsbPfuutA8seMZ8wzREeu6uRS5i1u5kj",
  "key12": "2Uj1b9YnkXaNUYbh5WMRadVhPHwqinQVa2Y6Fk4MbXc7ad2VC2j7EMMwQRr5DYjntR1uASYyD1iNb5YAH7KLfkkN",
  "key13": "4tc7xNcx8UMu4NDcHymUrWjTq7y7AYEcGGDyBrHEMv8a179Bq4yfMeCMsiFJVGSnQ3KPa2Uc8AYs7tXEuqBEiQKQ",
  "key14": "5gheozug1h7yBPnopN5sou7Kwrr1gfWm6PQV483GtQmjWYj2C4UApwvYDB8DY6C1ip6p3YkD948Xp1Eoy9aTovqR",
  "key15": "YfWynBPVYe2CTR4MV5PJoyS4MPJAhpuPxEBBtTx21FfLs2xzvZRVUVUvMPUirhXwbNUx9qYJeiEAnWfSWoNuePU",
  "key16": "56m19XWzyzrYGiXenBfzTLB3xvM7r3gZsGJodAM9LxCWQoLJE4nbQCkBNJNLi7BGNbhqRYb54jsuUhErysPJ1SjW",
  "key17": "5zW9giZwPMKPVPwcbpRMswoEB5h9c1gTvBuypP8WvNgyzu9P93QPmq37FQFnAaBs3U3XwyzSvFmSanbLtZebgvAw",
  "key18": "5kLb5ykVwNm8GDcrbSR6SNhqtqZoKd2sUkEKGyh36FoAVZCdnw8Dt9x55bJUz6xAhh2xVueWaw7RFYf7oTuVUAtm",
  "key19": "4mZ3NQDLgHJNB2cJPoTNYEcMy9RdkAUHcsb2L3Uptp9XAVoKMo9C2W1V6LPBSqVUuohvdMvKxyxdpcZrP3ecT6Kp",
  "key20": "3s9C1J3dS4kejSuMgVHzsXxZuohA2kJgPSg4u6SWr4FYVp6nDGgRHBS9jBJBNkFNXo6okvFj4Jd8zKZJCgjHK37S",
  "key21": "31oWEGHMQ2MAzKpzpQC8GseZL5tn14yQ1r8ykCC8fpwUM6TwcL31BJTMSD4aUHjc5ro7uoFXFmMQEDRAdoHhYWmT",
  "key22": "4BTBnTcDyTzMUfNbNGicuhVFtuW2mMmthRPtUihuM2Qgkx6hGVoX8U5gM2tBjAnrmCVpy7hpsB8nFdtQUoZtjp2L",
  "key23": "4fb7madvX4ecda4CABixmWaSbVL7fXGHYiXY4nYF8r5GC6o3X8sYCMGgMnKgBG8NyfuSPkU73Y8MaBg5dQGdWw9c",
  "key24": "aAXpRGQySWJ4GGVoK4SvHC3yVVhHUUBsikqFA14Ux7wrHaCcEzWcnHgoANdp7hqbMCjGnzDkxUyaBYMtkoSWpB5",
  "key25": "ub1ctTXazkKwWWXjH2u5kwti9Dsdr4dCG4YBgFWy2dGn3s8LXMaYvr5UAvXb26E9xAMmSYDqMGdLpWRJAVkU4Vf",
  "key26": "3EhwHxr9HrKMWXi4zSvmSV3KwJCoT4XZH7L4dEKKZUYVjQCZsxJFsbxKxXN5YpawXotEByA2PGQWNM5hcjcJE4g",
  "key27": "2yCwro6y3xcnk5ygNvWrPpHATnPbMvhNg92WauCM3BP6ydUzHRR5m9cVCbx7nB4EgAE46DFgL9oJAS5EM5wRTWjL",
  "key28": "rZSF3bNnQVsqhvDkRs4KWb1iKchiKP3TmJL1BTg1rtDRuhmU3gAtLz4vHSb75wsL3w43mvZePHFD1wgwFCrNuDT"
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
