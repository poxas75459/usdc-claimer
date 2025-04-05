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
    "tRdnBND8nURazYDWvVcMCB7PcQtZYyWsWH7sgstBrk5hKJHEjyKfycU8xhumYhBjtqGuQzhYRjJfwWScD1ByCUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rAaB9SGcxNMQE7Lg75v2yLt3e8XaaKGQRx4DRgh4kNRbwPsU2VzXJh5auscMjUG4Vmo8uMMnCkjrMnmY2pVrygV",
  "key1": "5pGvst6cous1giLpokcLzCsErJzT5JBS13P8snMoY8anAFGE2KSnN5pdb6AUTNLZ6xjjukAfMjcsDhiLAapdoMq3",
  "key2": "5eL4nKsZ5UK1JHsLaq16bft9oFLnXFmiJU7F3jDj2MLjvQPD7d8wGNtpniAL5coNyJbwNzGhStLFbkanMw6Pr7U4",
  "key3": "gCbTtpNAtJwkKFxnoZS5TgRbdvxAZQM9KcfCF7yVYHVSXG6JPMoUbqMDbk6QrEAF28KdqKMSRcDbc7Q2eam9KZo",
  "key4": "4D6Ho1t5zisYVEuw43W81yD9g391vsGQL2stgK3smUxwpiKEzn8Uxs2R3Paf7pjyU7TD8s6espgViFQ9ZGHZwBnd",
  "key5": "2RBiC81jMur2SRqV2wiEnD8JFstbYJPJUMCUC1o9tkj6aXo2gAxppLMZaxsPjtFmAEhfnAMtkyq9KVFb3Eb7ELfF",
  "key6": "dvntMncZ98Vf8WELKV5YkdeDBnnRP4F4cnZh4UYN9JqndXFYhF9m5SAHiyPMKYxTtnHhjVX4g7ST5YgkANTovmp",
  "key7": "5sVGwPWK327nrj9nnk5fWzMH2EWUbPYtZvra8wBom1PG4TPZH38doUxd3yPqyBgo7hvpqMzEboswrw2j85Lq4Fx2",
  "key8": "1x6naViMUfrVUxBw8smTyHc5W5E6CcQaEEakQo1F65BM1nBpc3p944oRDyXhvoHuBpg8uUuXvsEqwcKpNmTkVTA",
  "key9": "3MRtRv16jzD1vNiPjms5Tz3SJaUpgcBpNsMf8fwckgEqgmjrfR3gh4dJfYCUX5xfmvP3S4KH8RfwX2BmEg5jEGuc",
  "key10": "CCCBpRJ5pF4wGN956e4npumXcURMtcnKGdJXnFZaTudFdLsaKLFTATgD9Vdp6NbWoBmB1YiSvsBqyVnr1srQ5Uw",
  "key11": "b8jC4GDS87qYagAi2gWwLaAwnqE7Dv5j6tyM82nzNdrF7YYTSGUratRvT5GSPbW5xQeuQGz9PofGDMv9XE3WVgy",
  "key12": "GAuzN4kMWuMFMfBnXwfiMKHZCYyJUDfRjDKComBNBzm4KgXn7h67RsNS42pgd6WwBucCo86JnwaVAWa6TcBPjNJ",
  "key13": "4g8wEjK5HgfwBBUZcAdkCdi1oZQU8qe6b6SifmXGb26g7uYXN6RpDvYYcgNw5WQab3d6TjXSrVub5wcSFA6KBK7x",
  "key14": "5kRQH7Wj28CJKDndSYNcZYFfXDh3BctnDcKQgkvq7QbuNXTw571kTfGixtNwibwNVB5MvPQMu4vDQHMyZGHTM5sb",
  "key15": "iVa5J1tQBBVFrhsiRy9wJpWQCDQFeVRinMtv6mzfmxGmduwjFrEHEadVKjjSdTarbqBXsSUhhYZ56Px6sRLVNjT",
  "key16": "3NaSuyzybAMZJTKhP7GcNd1KduSiCVSDb5gQiP5nwKypDWmNWnF3HC1CcmZbjHQ7NqE2FTeRdJavACzRgqVCrKVU",
  "key17": "3bce8Fn2tS61GXmq6Yhm46ge9onP5fCWj8PimmBdX2UkLeG7ksKURU8DQqeS49UQ5qzY4RrtXWsc9uP3Pi7zGXrJ",
  "key18": "5wRGEL7VGAQ3dqpNQRVmwNoeAjCvqLCqnv7BheXY8K3Kp7ACMwundMkjgh6Zhq54HpvrxgVrinwMighbyCW7c9u5",
  "key19": "3oYq6yEiDb8sVz9jk1ct1h8nrJbifsXuPQCApzjwKhetJqLKDZzESuHzxPrCD9BU9UUY5A4DUBpjL2haofg1xcpY",
  "key20": "3cwJyDCE9peu8e9qhWYNNdNMqSBk3Ex1vLqJYKiwzK7B3cKyz6oXLGVAA8aQTrFpYGgtqDrZfFnFzwLqZFzXoJLL",
  "key21": "83jJVxS7tGxou8fYtfTMGs3UcZcc3oCQCV9p877rQACnapNWfJYjhBcmYuvSaqkpPZNuGMudjhmQAygE8huH4yL",
  "key22": "YN37i5oirG8KG7pEtNm81y1qSM24nwMbBnbXWX3CjE4spWeWbyVQUyRDStBfuXt6LiuauURaqjHinc9xwJGFaXv",
  "key23": "4tQvWHxw5La7Lb1sBH5Pe2ZqGUVvxUR3J45WC7YcgDcYLWKCCD4MGqG9z8Bcsvct5dWXdi9bnuMZ5pKh3g2meepJ",
  "key24": "5VfRpMptguYF3LChsRGTFZgSPAnWLBkMq2fLdKE8MWJmoBNMT6gG2GZemtgzCPn3K4gzW9foHHxk69VDJdbvEzYP"
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
