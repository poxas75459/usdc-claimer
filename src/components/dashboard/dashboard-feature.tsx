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
    "2wrWNE8crYGaMD3d52iSGkjVaAR93yzTsivX71EmFQ6sRYXBQbae5bVx7U1ZWvDba7JKkPyecLzXzgW8F4TBhHEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41PSsU1VnSxQYZJvWHbWL8RzNRFxYQmsAjDNV2bS7DvVjY3P5m4FNArJNw87ANDrqtrXjuad8xcTVkw7TgLaD5ZA",
  "key1": "NSFUXTX4PG8YFZgXrGAYKuYWsfWjWmCSNTdm6wRbT7c5H5vJQQY8owUwvD3p8FMWSmXNjaU6Qg8TceCtWKbpJQN",
  "key2": "676EQczzaqyLd6gGMx5BeQi6wykwWKeuTG6NL8JnjN9AXYJwFQ5sMoDr4nY1P8hqhBXvvDAEqbtZckFaA9tKvqsw",
  "key3": "62jcFyWjUmi4fLdjrWv6ebWbzMguveYynnCR8reQQAENhyfEPVmkATrXPc1RZSNAc5w6RxQCb4pq2nt9BoLxbLoj",
  "key4": "24LtRVECYSyusAk98AqGia9Gh9xjoiipLD7NYBN7zTcY2iu1kCEeziPLQE2XJk7BhCzprxHToWrpWeikEwLCz2Rk",
  "key5": "5uXg9ZSt8fxjDbbLWz8CW93AhqKNnLrUE5Ebsd2VV58wMS3KyWbhJuL1yVhb2MpoHEPR8KJwMrY33qVUe6n5sY51",
  "key6": "wXmdoQ6y8wrRnvyeTWaiMUw1gv1o2Nu2LCdjvHs7RisrSyAA5sSM5ZsfMfpFVr8Dmu14Ga11VwoKpYSrNr8BcnD",
  "key7": "4vGQjv1ZLqQhYaMN8mZySxGzTcrNXLPhvvc17ptAXoH84H2MP6eT8a5mkrn2Ttm2kpo46iwnH95wML1NiyRwoVzb",
  "key8": "4khyTgqYJybXzVzBaGJ7ZhJKrKsLyC4r8KC4Aa9X1wZ1YtmEDBxR649VtUqnPsKhigTjcyEpu73yu3kAAE85gpKh",
  "key9": "4ahh2TzYoC5brkyg2T33UKuXHiBjqhqyjXyo116GquArmCJubF2ECsqU3S9jpaSUsLhYwnJWqE7VEjKXTDwPAf1E",
  "key10": "K8NBGE2YdMNQ8xrL1xYFb5szZyNviAbRqTWJNSw4Zfq3H2Kn8b68mpvir1TETje2RBwyJzePmKaVyrQd2RFNWvA",
  "key11": "5XznGs5ni7L5bgadxKtTwvKz37yzDjxnmvvX8q2udsuFmsWmNs1ugpBoyHaV5TiUZu8pQcz3VaGnr3DSQ7pNTLJt",
  "key12": "4XCdZK7hbYbjNmstR2BFbxnrKeuSvhy9NUEQhX7zKKPHUB8mayJXkFje2Ezsu6se2tamCswQKdHtkYDARFYt7B9R",
  "key13": "nynrBuVMz9WzFhDtfdftFXA43B5qc6gedRTcHKhhWHWNXvF3WJTQHVHMm81WX3NSxy7as4n1EExudVYc9SBNyRF",
  "key14": "5n5B7bcHna16Zm9yRP92bZ6gLHteSu68giQh4p8iHjTEKLLreW3Sx3j2dMb6HPv2sT6bDovxuof1J171rKiD58MW",
  "key15": "2HMv7quamjBU1L9xNqXT7qcs57WKa9VZEcnCevvZaT48jVgvDGZsLzaPBjKoeQJcZB7KHXjKhuRtee7LVM7jgTQp",
  "key16": "3Xk1TB7Ap6TDXN3kLN1k2eaQ7Bwpapn6EMXWDeSDTvgTMx4eDtHk6exCRqrjJQopTCk3HWfsjvSt6KnCv5uosWsG",
  "key17": "2N25us1Un1m7JGic8Uugn9nuwdwkQnzWyPED9FdotgTeZSuJkwTsfNmdqu5t4bLYrFas7ZC5ZaoF56EFVpVmoFJG",
  "key18": "5UgJSNJn279QX8rAtbkgvxxHjnRU6xT4atAy9ABq5oVWeHXq5HbwtAnFpaYwVTd86zenR1QoXEXbZ8hJnkviDAaz",
  "key19": "3BcfAyjcqH5eR7dtuRUP1mSF1KNA8X4JH4xQ3xcFro8i8mDMzrcAtjZdYSYy2gxTtep7QVnwV7z14qTAAnBomwPX",
  "key20": "5yfsiqLqhtQ8NQ5VeLYQM6Fzs4NGDYKHsCB7mMwfmRUbwRfhpvFMybw7Vbho9eyWtV988N1RowD3LtxbWLKwsVth",
  "key21": "3BfRWSXe2C3DYe1Cf3NmDoFpyoHMumew3rvfRyqE36J9fxcKykC5nnimSWGaUEGsBkE4X3RRNPdmEMs6Pg3GyAJq",
  "key22": "4b9k5yDrgk2Pxq413F5rRsHBJmgfqEA9BUHgMct5q2XVTQaUvaiCDGhyeVatXByvvnGaakKD8f2aX67ZfPJCjWNP",
  "key23": "5HBxXHL8Vib6htfw1c9ERn77pSdfAJJFjg9vav82KfPdMfxZbq5SgdFYzqvSr6ZoZ4ci8GgrTfJPGZKHk5E1j4Qw",
  "key24": "4G8edLGonMhpLhszPKWeGvee1kvr9i1FqjDTCcNMjDNuzC2MBtWeEHYwNVS7H1dQYmnWoPquTjyKYNsXe1qKjvFP",
  "key25": "3UeqK5Kwj5v9BEKh7xk6KMzoPm6izfcUqTFYBfNYkAruK4qjmUzdyW4aZ2sCMeiLS7y3iioPVXNvYgCx6Y3BEgtU",
  "key26": "5swpNKrnMNS5gW77tarHKXrwjpLR9Ndcsd2Sa7jMFU4oMpr41DNyGiuxUVd4T5dKGwbtzZVJj4YkVwrEpxGvMfjo",
  "key27": "iJ7MwC3TomyeVmPxkkPPzP4NgcWHxvPLHjSi2TWU9Byt83q8ZymmCHzuT3TStV7Uw6XJKQ5QoXZHg2n2LzTNCnU",
  "key28": "4CQ2MMQACDncSKFr9v7CtvkbZoWTmPTvFsaPmsex3NiXRvnpkTmiwR7VednTMzdiVQzrJEXH2ssbPasVCqGy5aJ",
  "key29": "4yCsK4v88RdDwvNa2svfJj6yRfBWc9jx1E3Ms3U7FVPKU5shgzneqV5QkeyqgUgjDnMJDuPuUXivnXjEfC1LjdQq",
  "key30": "4oNy6HnSNr3M4MorU89UQKMepGJidQxvBPcGoG5ThETp8tvox3pBTTmGFkxvu9vfUgxyboCPAapk7gYMDFg9WU6Z",
  "key31": "4gQT1MkL8FUbVEFxMMmY1rWZY8PZHdRWgzA5ywxRP3fX8nSKjR7JK5w5B7j9HYAD1hFHt8kfQFj5HVU1VD5Gr8vS",
  "key32": "wMTrpNagev5W8aVHrUn5TFpfW89TCPG18rcoc7NebB24aSuSKR47SRma8QESQvUGm6h85mj68iWBMDsHxtKejna",
  "key33": "5hU9TMpYHD5VsJ4H2szJ17TMkgaSfYBCrroX7dUq3EYPWRXpubWfsA1a1YwwpcDujDrynmrr3k7Ww49K3QtPoFtx",
  "key34": "3DrKsWPX6om5Y69UeyghZqqWeU6cM15CH7kaWSzuXvQxY8ZzcDqDuVJFASUCdnZzDLSRhrEEMKTaZ5GWm2k7ujLU",
  "key35": "4fSVHSGbQxdQoiNgMcGeUcj928GwwdvCCsa9wYC2xjPbsA6SfKeNC2Ye7eK734YsL2XKBTrqKRx3jpBxGCNgfy5Y",
  "key36": "5QqSVTHz8PdVFeq9hS3jXECYrzX9zuaaD4mEUFM4kW2RJGk1oD7i2UTaHfqRBLZp5pJWjj6QESKrLp9pcp7rZ1kx",
  "key37": "51YHph3dH1ThEvpHARwmcdsam5bDJGQTYuQhDHQF3pxL3oFzBcv1a6q5GkueXkPRaJzVMccck8cvnxAxL3dQzYqe"
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
