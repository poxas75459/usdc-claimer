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
    "4rFdT1x8NbH1oP6tpHx31kDrBKebzKjufo1re9vKL35948fdY6F4biAS2CkGVQEtuFH5MNfzdwhQqfvE6dUMvbNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VX9pFZDvk3mxALvnDZxAZtjzZjcvvqir3QbWP7zUuq8YCNqaD63YHgzZ8idAurzMSVE9wu7pzz6FhLgZBidhMYt",
  "key1": "5bQQM1nVtFtpqWy2zc47n5YWtwysAr2xpgC71maK6zLa6qotXB7YwGKBEwfkNSVJEGqwhawbTa4peDoGzZjs7sBM",
  "key2": "5gc8jgyueHPM8XYPBWmrGCnd6YVnNAcnHQpByJwVkZvnaVnDPRzQ6Gf13tPZfRWvbVg7yga7mzfsECyqSf54cREr",
  "key3": "4h2YjB7LfGLLeSjZX73UPtqLjFrMFyFVxWm46bpU6fdfwYYqcuVE3N9Z94Z6rGDV822G22RRZFtK6WDej4TAkuEe",
  "key4": "38fSadounAgYXek1Qj3enKonuURT7E11rs6Ngftx2F7od4uvuA7cwQyskddVHZt9wFeM15N7zCUW26ygogUApC6Z",
  "key5": "4NgUsftEsyGUA3WrbQfhmFmTbyjXNsQQvk72nUJ6haB6bpqh2BwoxgZ3uXtwvTD9p9JyfADApkPnWBBwkN7V9PQx",
  "key6": "5aZiMR7nwfTgcTwztWEV4MMVQ7G4Ac7WadcvMf2VoUsbPUiYBpVuZ2vXhiVbbC2baPabYwR3ivurMtbBAJxmrMKy",
  "key7": "23bCzLL3b11VVhajYBagaXQWBBT31hBCUeZyK6XWjxNSjipeVvxacT4miUfanwoZcLuUJBUVXtJKyyqX3e63gDbT",
  "key8": "5jTZGhnJCLrX71oCFTv4CARvWacUoFpd8LDZzV7GQ1cJe4o1d4g51M8t5ebMYszf9arJ4kY6ptwFiwUm7D7gTgXW",
  "key9": "49g7hxa6ibSzPcxjmK4sN5w5wGar1FsgwsxM5DxgoYnVKwrFwz54gfHD6CGzYU3kNd2a7RtStzWi7ejoeBapAWwL",
  "key10": "5JRGwe4wNR5XW7fG2ptygMBonkbNbegxziTpzGyzBRrK5EYEJbne3fAMuSKYvJVconrppuNxjf2D78FU7ww2XNz1",
  "key11": "5Ei2TQeLSBAwvXHGnXPoS7SrZrfR1BaStZHK9xQJxduvMg3Bh5DLW2NZwPv28CawatauUVcYec8wURe6hh3wx6Xs",
  "key12": "24bL4JYrbVxpnKFvAAC7TNzJC6baP7TGdrgyyCguRRUAS3VQC3i5hBTNHoibUEt8sJVXtVW9qkdJwP1SwzekbtHQ",
  "key13": "3qGhHkajSmPy2fjLGpXNgLCjeYBXqXVMhd9igvuMuPnj2wdz7co8mXvTs9tibRauLNVYH3UuMPkWGHL99X2v67Sv",
  "key14": "7REi8Qb1hjKH7E7VJD6VHkCJE1QmRFKXNykxW8GgNp7LksoyCrGRTtS7cYU5zrgKqQGjYNMdWcjMqb9C3J75sid",
  "key15": "4LzzTmPAemN1FuK99fhJ1Vewsqr8Y2CVBTHcF6wNa86gZwmVnVARVqX7nFXPgCkCxoN1F1PN4DsrzX812cCNXkJU",
  "key16": "4oac4yCpHqXq7rAbXRhCBRSC2xBKjpqcoUgTUc37FEhMZRrPgr95ij1k34SDv129D9ZQmKHRSgQFx3EStCWhPTDT",
  "key17": "D8xvJZjWu5K3k9kPjRigqJSWswhjBkp9ks9FaNta6yzEdBk5LkwkRbgBoYriEWQSiAu8FiKShjktQbSxnLWSFz8",
  "key18": "5bJnacNQ3mQ8G9KVD4Heg1iMWscc1P3R1d7nV61b61twwkvMNdJKWrZrWucKVKRjx96HsQ2T6EkuFfDPxCpysLAd",
  "key19": "6fRxWeGzqM9WYP7cVKJoFcaQNyGrEPsCQabMDYHbnUf78LxSFSkgXARmFEGJ5JgKFZwCYvsBJpK3JuDYrEh1Y47",
  "key20": "vykjzQjJ7pYdC8WbY4TcbFsv2c5YKmVtuHJE59ommgRJ3vGHiUq3jkNHup9xpdAGyqsvNWw9jtdw4xWCteZxrj9",
  "key21": "5gk8ee9d8oF9jCpK1wobj9aPGgUiQCEEXWsPuAqkkiyxoUGxwLFqaMS1z9GWYsMueGm8h7FoDGu8o2gz7hqyPRLp",
  "key22": "21D8FuTawD9VAG3SGoe5YcWYYzMWZp1qj7teCdHBupQE7pSCtc8V9EZyHJgRy5FDUrykWLWNvdzd28EiTaxoQMjP",
  "key23": "2f1X1yGvq6gD2WwXvETu4JA8VKgXBYCf7V54ZJMcxyHH46D3TjcsPVgW3pZnL7J6mpsLXZd6SuJaASiBHho6zvf3",
  "key24": "3QP2c3Rbq1z4kHJLVsyTkj3jLE4CQ7TEt3UAMikiVHh1pmuvnGxxPBo5Y3BuK9Cs7BCF42oczB6rKy3TkYBo5U3K",
  "key25": "3gEraaCdJ5ZkXJ37RyxpwPoo2T1CTichZxe98V4ukyqFLkt4uXoY2pKcCs9W4MySbaHChsoPLSrAgH5ivpneRQHE",
  "key26": "3qsdk7aM8kciC5qwRmaYjcWFDZdW95eDv4NqLF2BBx75g37AC6uVxDtdjgSAhtq8zepmHmkGW8myu9YCL9zZNLjh",
  "key27": "3R8LU1H5RWifJdVdXHsEzbbshT5sMkXfKqu25u6ZJrkeCAZHLwqXh9pdUtEFE1SUbnSmHuCWwF4q7aje9BZFfpXU",
  "key28": "2sR9s3zXiUQ6DHUruZLhFA1ohKZ7Jek5sUpndyLDYdQS3TbakF7JZHYgrxx464iUSpK1d4y6BS2hhuXRP95EGgES",
  "key29": "51ytCUECZbxTNjitK8JCAZj2HnHBEs2PZzUzxMFxkpBTg4qZ27QxpnsnneamtVv7Bbaz5nx1LW7e85CNuhTvz5am",
  "key30": "6dGbksQoWJGZvtNrThFLP5Ye84omsFACKD3AZNXVMZNfoBC7J3wQso27ULZPku2owizftx3URtRixMpHTtQ2PAx",
  "key31": "3eA6HC61cPFhKERNXCxVPJpBuYiEEGu4LsbRoQkG23PrCSh39RErrpYW1AiTDXbVNDvqcEbvGn6rADsv6DXqLhUs",
  "key32": "bbhhgvKypuampdbgrv3hUwb4LkUAfKRgVqpmi8r1P3owh2oNkTBJn5GCVqfGC8fbwW9583xV45nuZdEXCUzjeSA"
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
