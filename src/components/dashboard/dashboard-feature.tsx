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
    "auc44zHBn3G2Hjszmj1SEJePND78HQ6Vs27kSiV8wGDLa4eZXNHjQoUeSFNFpQWbCGNgH2K7QocLjDthBQHZguT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kzuJgsRBAGGftwXsdtZbiYDQ77cZQ87pK21P9ExajqJmgVLDmUndf4iyg34EuqpgTGBDt9KvRXMgfa1eqq4QLYW",
  "key1": "5b5oK1qDFc7Lq2gwPaiDH8QWwXSNmeojTc62AtDps7HdafTa1GeKQv4QzY4RmEVQf2NQbfWRzHDzaxuUkAnz5zbc",
  "key2": "4Jp4bXZgP7mnnzWuF7RiqPKgxZNsBhCrfJ6pECq5ympmt3J237aB7XvaN3HVDauRoVAimKT4BvYyJg5v67ePsxHP",
  "key3": "3bKVMqkrrUAQJVNkJpJKT9QyXQRTggcYsdLzcH3og8C917gm4nKRtvMmK8M8rU93vUewiAb8Px4nyZroSxt4dRiP",
  "key4": "2HymjCUDDW3YrTpFUkCguieKzk3HFWquSx78bSA5QbXKmNnibHbGN68RepzGGGYtacvCqwKJaeeeCKyjPFamqyQm",
  "key5": "4SWM6Z14WemU1Wnb7AGr1VEcDcGcMi6rBnG2HdztJPTUvUcA9LzPVNz8eX5qU9yYLQgDiMxxjD6yvxgBMfK71Lwd",
  "key6": "D6VB7UncJz7m4tHH3EHYGwwKcJZg7AFYFkXZkVqFWWY4Hbw9Jxv5fFciNMxCTWLzU59Cdahin3yZAGtqPZ41Kzz",
  "key7": "3LNrJS2MjctzcCNGXvkEqmqbRjxZzYB9LRURM1FkbuaSdekf3sN75b1gkoKWhp8NRP7fBNdtpayucmAi7YzJehCB",
  "key8": "33N2SrHbgZvmS2tua88whKz9odwDwQCK9L2PGw9MNzY3Qq5yWqvPJGp9k4QYLF9gkxgo28HBmjBgtKLZbD3rLAGx",
  "key9": "3U5uk2vf5W5bmMzEc92SZYdFb8x5b1gfnJYb3UqVazicf4CzC4T5p4YE5DhUgDSyvAk58T7UjTgmiWLbUSCPxEiY",
  "key10": "cW3prCmPnenpaFtQYrfkqHJEDH11Q8X7w6r8Qc1Tae2nH5Shd3rJkm11Mcaw9dw4Fhn2oqgDWBri8CWdr3rULmi",
  "key11": "46MifvdUf7dWQUr624GPvG8Kwpdx24igtcUhUWvo6fJdhaDpY1HyVx8k2dAeiLeNeQ71QsFsbNzU7EUmprXc1r72",
  "key12": "37Ci5YycrN9TGS5NV52SRkYSSv6eUoPv42rx3icX4o1JmMFzXNoo3X5tvE5ZqgRf8aChmmTufiGeav74EBaG8KLn",
  "key13": "2RPknYMNksmXCVZmQHHzGVc18KVf2PTb7j1Sj8kXM9hVGu25PphZQfGNZ9La53aj1Z2ZeSYVCZQMtpnBQkySAhrf",
  "key14": "2XMGBLqMmHnnPzo4zw7Y9BCdJtoYnawuggzrubPT7NswythwegLgDyHgCEskESEnqpMsRypyaXc5Cb23SPE71q9T",
  "key15": "b3KFoXKsNsPHi2H9s4VciG34DmqiiTxY61YsuZzMzVriQwub7KQKN2cV6hWysrcivTvkV1t3diFAXCvhxdN2YSC",
  "key16": "4fDuDP76B1sMzZ4PTVU6ycWNd9UeW32do5U2W8PtdmRGhd3XhsRQki79cPGdHHqhc52e61y8xPiDSyTs3px3SMiq",
  "key17": "4ynhcHz9XQrhxw3Xf5yGK81jBKoZq7dh3jes2E6QFYUaRxxaaHEsxQ3CSwv8ChnfbT5BbKtTGBiXosebsbpBeXX8",
  "key18": "27ovRuShZ7pZgQbaWFL5rRtuJ9WgRJgoRjXaw4pprBkvsQ1BT6GwkhvuRUrhBWrUcJUV1UJzgsLnPEXTp3pawpvn",
  "key19": "2b49SEWGPmVzRrFLK51uGjghJQnQ1Df4UnSH5YeEwfmmmbbSMf4PHCEQM3tH6JRRftmd4h93bk49vA9qsQguGt4N",
  "key20": "4swhDcMiYfG6JAwd9MRZHdQq8wEcdrWFkJcnFbnACyxtApZGeXktAjxehG1F2LQJaVzEv5wR2e3UerXxNS83jW9k",
  "key21": "5SrNjydcd6vJipWSe17Tkv2CuqZju3BafNp9NzGsPFK6p7RYsybvDmaWzbsw6sauGdktKBGZC1bBMrkvbxb5xZps",
  "key22": "4AqRqP7pw93x1hw8rSDspYL4stQhHhogc6MUFhQYo6KDrFQZKhcjvwCLXWvMuacjpaSSdxWXibb7U1utpFG58AY5",
  "key23": "2LrFgpZFvGAMtM6u1yhx9CgbfsfRkiwTErSZeXMudkcPkAUYkVmB4SSmtu1wdxdJ4NJb21EP8b9zReSLKxE3a61T",
  "key24": "61QgVg6cnXJnNY3o9bPp2DWvyBqiTUdrC3Ndhy4R6nRYE3njxTV7zCrGDuiHnZc4Lpuuhx4ZpJXvR1kPS8bdh5rq",
  "key25": "9tsyrysh6Ch1Bpt9PmVxYjkrX5PRmtnHBbFAphfiuyMu8L6SnLnYzUf97CNd5VnrVUEvLBBJyi1Km7QoQ5FV49c",
  "key26": "5UZ9icFnQQH2w9P3qNToBRUGEwHTYJWn4b7BDcN6uH8hCP1TgoW1pzisx2wT5YmX3EbLSiFQzbanbRQ8A62dD3Vd",
  "key27": "hf2srijMYXtGCZXGGXSg91ri7ER6PcMfRnUam8xGWC75mEzPPyigoMmJnCiwtUvzYk2yKm7a5WdaPzoKAUNPn6h",
  "key28": "2GjuChZLw3niQFahahdB29UhV7YauYPsqWEbirgVNAXxyzFHfmUZ4Hx9D92mMDqwwWPWhVDaiLQNuG1ifbuzR4kH"
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
