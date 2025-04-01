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
    "JiS3m7oaCT71gf5z4pkx7wHRkt8zJoYXTGXVba6P1bptwConB6oW4rncxQuAdBQTcPJPLfYsFy5xg5CFiUinRnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oiQrDbUTM6LaUXzd1RL84eFYWK9quNsPL9ZtDariLYNLVo2UakQd6TK9tVCmCGnEBV2LvWxbnov192F3YAVyN5c",
  "key1": "64HMhKrZMgbcM2BMdKGN7YCt72cuuH1hxU4awLEgmcpnzkVhYYG9azZXJBBfuoEywTmScYQNKHKe1UGxEzc987Ka",
  "key2": "4NW3BpgBr62VRXxykE9nDuSg6cxQ52hJpquRnEFtggetLrQg1PAYjKVaRoeAyUwqHQH4qQ3iN34bxd4f7R3oqV6m",
  "key3": "5NnowFXBTwjB5y3PQpChyaBwTia8orT5MzHsKdTpkwjEm6UeVHXJyDWGYpWAcwQtCKBaokS5uaBDNM1Y9Jpwockb",
  "key4": "Mn7FZGnUSzKgm5JCPDFRHyd85BipnppdzePkve6LNERrrxyvgkpFFvJ13MnU9dNEL8VnSexoyEi6zt6EGUZLVxt",
  "key5": "4dHjhR4FMXH8JuZKXpf1FBB4Uj2yQ8bzSgR4GpwNAYVbTxshYC1kMAuHra29jPYcZAcqWzxrGJrS8EKD1PhRKX5J",
  "key6": "57dtu7XV6k2VMWeCBazVg3juoZHDxzjFnkVdDgyNdhhR1yDfwm2by9QNYdWRaicJn6FFVA5oQ733i5FnEDfTy9DG",
  "key7": "sSVGdLEbDMrmiWmHrfpNB2xFJwMsCio6bQ2ZpqhFRV3fXX7oc7vrmkP18y3xMQ9JUhJBbZ11KDfw1iQ8SNSChhb",
  "key8": "csE2Jekb6DGJAWy9naG7QAVEvbMXRrPZj4mzpgeA9k8YUZ4XJUauFWE2w8DLBWJWtzyHNbdCDXNUJCZXd2cD9jC",
  "key9": "4b9EEKVvCUNrJC2NwVig1bbqxh62VZLtTNQBvwhhk2FSxe9UpzyPUeRXsGdBRLCsyFrAr6uS43cuYT3SjXQTeJjQ",
  "key10": "2PGRnUcBqVniicyQtzDvJGJkKa555BjyQQtAuPgyzJyP5P2c7Wn3a63ydav5at1DJdL1DZzySHE32UtiBCeSQteL",
  "key11": "2uUbpu39TWjaTLjvByWeA84P5qtjLXWyHZpPXHCQgPm5jon3RtWvTrW5aeKWi9rBhSqQJYEB8zn6BbNaM9eEiBWp",
  "key12": "4JxWq4UKbAqnSAwHJ83QQoy7jNAUhtU3rrqj9KQVnzXFsaNpvrFNNsLGS1wRVqfwiHbLiu2yEUd6YYQqz6K9KkaL",
  "key13": "4RzJxsCNpJBZCh8Fid4ix5VW5dQvWtJDrUwt3dHPBJMUSNaaXebukDyW9aBvGFjczhZcZaPN5WAeWveouEkbPB8d",
  "key14": "5xiyYU1RgcrggquvUZ7eUz5qWTiXziSmxPykPWuS4Nsqx5HrG6YmdBJfvoAjGrHF99WR6R4D9e2qEC3g4XaAxwVH",
  "key15": "3PZMEVWfrEVb1GR38q9a9zMx9Qhgf578H9DtcPbxreVahSogqgRFPAagrbWuskza8VyWAffKUApXuSh9D81nTyWE",
  "key16": "HHXfNFnTK3N6FqyUaXHtpkMeebk54Y6Tv2Paiq45Q34kj3kSKUCvePzzZTQdySWp2BesGTv9JWKZFPWKoBkuhxj",
  "key17": "5wXpr9f44wjiMV6An7wjJz5apkXNDxf7ZhxXmZzQXtG99kHnEaMueLBCHVQ4tCAonUBTNKfXHy4ogFo1vMXjyQw6",
  "key18": "4qzQndrMjsdmzZDx68uhNNa7uYpbj4w1foVKPWp2D2Knr2sESgfk5cYLQp2nES75XaF9tZVQngh6Z9FkYY577WKY",
  "key19": "5WNQi1aQ68wZvPCps8ybavTxkE7DzS4xYZYct2yRkhq6iU7YZouzCjMm6fbWFYzdmT2ZgUba6JAoHUM3JyzLQvC4",
  "key20": "4ejzAmhw47EhnWeMgTYSS9SG3voBEMHmYYYv75NT54JAmcie11txmvHPwmG2JUB3E37cS2vw5pTUC1Vrm6CxBS57",
  "key21": "pgk9PoEEwuBGBrkjtpE8UZF66azP4ufq8C1QL1d32uVdCV2jqkH8NJAHGtpJxwq3xKR2N1ML51f7zRghUg6VPwf",
  "key22": "2ZfvtmnmbPQb53TL19PKhXGnvKKbZvAkEGDDYjpzhncq3PjwkrFgwWLg5uJVEKDrB8CqnQXJxqZPUGdUx2VAgCUx",
  "key23": "3WtwkLtxYWcSPtfVNThzeGMqSYZPPv75UjpDybg7eQKx5XuyH1kstLDiEVhQzUVGcvkwZnJneR7L59coMWU72RWZ",
  "key24": "RAyrgNUXC7Xdm2YfUDzVw5oDSYcfcSb9EiiXDMzdV8Hg6gJtToXzkDE1fmUcQxiNzYnW5DoG3jPivJiNDjaUayh",
  "key25": "rd6BHvPRJC3GQVThei5QJAkX5uKeUaxjjJtopR7ajEL8wdo8vBXURfiiFJxuPa6nFfs4L2p59V4ua5R34pSpniH",
  "key26": "F5VdT2RMGcev83pNb8Yh43vAoJLYeEhDhUAsugMoxGyH4K3e7ZzKv42cwLtWrPeyzqYk4QABxDhnvaYu5EiQA6s",
  "key27": "3Fh4nkQkv3sMkwz7LHkVoPWKeYm31eoBvekJb7hySbigyoo7nJ3A2Q5eSmnxhsjDSAiMYDBYCKMjt7SAekFMuWz2",
  "key28": "3ZkEuQcEm6dsGisU8fUdNwngwYjhgUvq6HxNfh41GzkJEQN7wt2Lbf5aRxGU6BFbAbXAm8vCVggjhb4aB4HL6kmy",
  "key29": "WKJwvtrPSDM7e4frxA1bvCPQBwu1ymnPPxyYDHRZqi89zrQ3VTiT97RgwK4gqPpUUPitKw5JZ1XgNSkEvDT8yZc",
  "key30": "4e5Ls5i4WiHoU6DNbK9NWxukgSFRg6gyT6C8Ugj8yLuQewcrs3JkosBpE4MjFiQup98SL6oR33xDjyRz1pw6mJs6",
  "key31": "2S3xt4UsWEk1rApjxCt6BNRXyyUHwgF2Ph54kohQ9eE8YsQiCVKs2bYo49UyhzSGKt69Fe5TBanjVM7cZHpwgxmB",
  "key32": "54gwBM5pAy2hhMRfx3cWeQnPjoESsigq6njUy39Ph6qhTwwfPByH6K4xByg1fufkRMCqzCFrm7mHRAuqAae8Uvjm",
  "key33": "aTrny72kECQX3sT9R9zcRQ4LKbbxQd3HCa4kbwZyWESvwAFFqbLz23266zrfnBzmSU6peNeanqzgL9WeNbwYkQG",
  "key34": "4PRDF5HE1dPHM6ZEujcxQMCV28seMGC4jZjgEb8jz6dDECQRYHBCGqZSD5TN33Mhacnt2wHRB5KghFw8sBQi9AcM",
  "key35": "4Puw9u67fJbVoTwMTFp4ovTGatBRpMRLXfdX9cJzApGoKQ3XJ4Yreujb7WfnThzb2HG4nNGy8dbRpSkq5arXaxM2",
  "key36": "3XnBtWRFPoqZ86oUvwQGdkA9vZWFRv7nxuA5kjPo7kwqCVNJww9aQU4CgE5LfYWCrsTf7H2Lm2UhKrnVAiL4uVZh",
  "key37": "5GBQz5QNbQwp6y4oW8d7zJ2CbTG8cQMN8gG554tZYc2fsQtu1hnKVHokZ25GLyRtAFT8CG8hzRJZyj83xqqrohLz",
  "key38": "3C7gYthfiDSRZxaSEMXBKG3vxnwswtsM6fyZ8LcHZ1Fg2Gpm6v5Ko3HiQUYwzjKcG5E6wjw1YwhRywGSVxonj8uh",
  "key39": "4hKjtxyRuH9EFp3X66PCLFqN9X6rHbZP6LDBbqCsXeU2dB7LhVWaMH91CyKc69cGGoTWeEhnAzDNZMz4cEou59q7",
  "key40": "2uFVKbWp8F7cawmz8RjBG82ajg6nTTFuBTUTUvGzpC8QVHaEUDYqzrEMRkgfFkCWNGXyU3rvTBMFPxpLwBT4hrt2",
  "key41": "24nXBhULTPcXgP7e1CAuC9X6Jch9kiruyEMw5mvez99CUbDBSMXYexdCTSuKXoLG5Em4NM6YUVNT2mfbBkH1Q4Vx",
  "key42": "4wGki83PXPU7NVVsxbrdJwnGEaGmJrA4ovWP8ZEQC9CfVg3DQMdYhDgydneL2H7KhJv2JPSXqfBcckxWCd4D4caV"
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
