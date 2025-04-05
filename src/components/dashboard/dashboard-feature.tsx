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
    "UQFmHN1QFZCB6WEMXUQfYEwfpNgeNeTkAYUfFA9btMk3vhjQmLD6susXezKBQ1guNHAfsS85cgwkmBmY2HnNupy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32fvRFQJPgLxxFE3HEj9DAcf85XdJ5vXBidgT16NVYAsVscCXM5eCkzgcttb1BAhhpTanA7E3dS7HzwKxodsFkJF",
  "key1": "26puQ4sQS2EKrd21TaaZ4jBtnEbNiXmErxTYnFrqeEvjARsu7zFogf67Gn9T6Fwoyb1TWdv8So4TAiH2LNDoAmbi",
  "key2": "3Ua4BjKfuKS55nQc1d2Nrrrust5uvXSgY3MA9FnNmi7Cw59VLY8rxf6TWCX1Dq6hBZmPYrPDiGEWRA6c2SytRzgJ",
  "key3": "2RJ4y6BuXFm7GMCdHsGwQA2YZcTmHrqCxwT291wqj6VerfcgFNhqyTWYr3ui7BqGXDAhgqDyB22wcasxk55AVksF",
  "key4": "2GQAc9dF6NQQSn88jnRa1xCgx81R4cFn1VRfahmJYu7he6Hr23wXgY4aqp2Ys2P2fCEYC2oiSo16gdkB3T7usedJ",
  "key5": "2HAWntPtCuusV6wWCc8S3FnRdrS6Uv4LWVx9UN3qo5zUTD8TEr9e8VcB6UC3nKtcfvWtsh9EzkExCPmafa4vScjf",
  "key6": "2Y7LBhhDgt8kYNrKqXu3yUZn2RLkpscSpLYdtaWiBQ8yExRpEoU8Cvoe1LftTFe9RRRJLVRKKodCCjzLiJbr32HA",
  "key7": "2UPYp7VYkXLqrAtMgmEdEmK4t29KUxyq6YPg2C2KJc8B7m3grWuhtX4bAtsVREjDyw9HHrJxYEcZb3tHJcm8gDbB",
  "key8": "5bwnDSeHd8VnNZFcKBBFEjMFW8sMJRvT2Z858VvukUjF9kXfGYrwvwXdjfcP6LbbYx8NNKxbeRQ3x9iUTMMfSWCg",
  "key9": "43zYpPdTwRATo9dni1KFV9cPKL7AWBQWLpuQ9spYo5fPti3LFis65V1qvMkgFFwi9q34Rdgsb43xNbQaZycbXz1C",
  "key10": "4Wxs4NcnrGBa7jNBcPCYYmyLcLE5Tttt9u2i4JmwMuZPz6y7ycGyoNPtempSbnxQhoNoSNgqK48SKSSMUpTMorJK",
  "key11": "4CoZAyDpvsd2fVq3B6Yu9MSqbNwUx6UkS82FK42ATuKM42p2P5H65V7jQsBSf3RNT2vii7ypYunJhHvRxp6FXxL8",
  "key12": "4apq4CqDiWqsECWq93hccBwpcJny9qbzvH9h3Q1Z2TqMGi2ibzC8fBdqjQAGMiTudatDCp5NszL4TpSKjAMtfL9Z",
  "key13": "4a39KnyEJQ37PcMB8scLFscMjKdMSU7pPqmaLySmXGkQWGo9RSmFZS2iXyCeeueP6YzLRmiEep8hwRzDRCJkU29Q",
  "key14": "2PGxWyJhiH1ShC3WP7EyStoux5KuAqvXCJug6GEfUqTXv34R1aVCFHzuu9NDTQYH1PYmGnVApZSrphooXsSCbajj",
  "key15": "2SAN5zM3s7P8c8o9RjE2Gb68U7TpmxG6Uta2xkMzDJFDw4Umoa39Njk7fRXfwtYvymAcyY4fYAR4BsNLjTaD4tqo",
  "key16": "8DEv7iNZkSizdsxzk2Mhbkrv2JBx5B8bDj5wfinnpLBkQvumb6wwBszN59ZR81W6jtvLiMEQEFm7aymRvvMjuSU",
  "key17": "2hNoZXXmQ37BDBzPx12NeYr6FxctkMF2xsZnbcCdAe1qECa1Lzt5u54zQgyGUfWJfvj17wcAKj1KE8e2YMw7HwSK",
  "key18": "1rJZw7BaBS56xQA3zMkrRv16DakDKZHyKVBc1gn4ij8Lmr6hJueTCWTmUDgfR7XYGs8mH11ULGFLwCrnMxwJkGk",
  "key19": "23akc6GyT9wTNv3ygfHNb2FWKxM9edME6Nd9qn6KvBQWFtabxpZCPwtpsngSqpnjATBr2mt6dbd9o8jRPZ4MSApU",
  "key20": "2DDqF1zTK44XxXRKz4wsDx8Xiya9r2NnjCujg1xUHGSqYR6L8ENeoBA1L7QmZxckphhfZynpVXhntWFkiZXURKhb",
  "key21": "HuGuhtswTQbe712HGZmLstv6v7dFq6Y3zdijb3aF2eRyW2giTq8txYVju247xvi6AD4wPze9ohSTRcNoQn6caM9",
  "key22": "YbHZdBwjTbMgPT9R5wxqyVUHKLYEgYg2HfHdARRHgF2UjY1Jxp9Ra8pV8qKitxxeWhtB9sXGbep5TNP5WxFXryr",
  "key23": "35Shhh89L5vSe45TMbZLGw5aoUvx7JCfPM4P6aFyTAq3aUXYfxG6XDwgtDTJg44UzgdfjHTjexqrqQXZNgZwLgwc",
  "key24": "54MGTYWStbXAqiipWrcVH6P5zYTabZCAnSn4RbbT2qvv2BQ5EMimrk5qW3ZWvXzpMYfuxHGvZMKSn9BitMtycKFU",
  "key25": "bnXgk13Ff3bGfekGPUB7HMrQKY3dUa4Pg4jyD1KoYAFZWDxCW4gPCXEAHCyJacQCmK65vbov4RWyC4pB99pLSHc",
  "key26": "4KkF5siCH7K818HVAR4YYsjope352D9Ug1z8JGkhwxKJk42oT4CTDedgVchHx2ASovikBUDwstBf6vLzXAgug7LY",
  "key27": "2Qqhg9VZNTUzybx2BmLE88a9VAjRm1R7nvJJEcWe5GWXJpDDoyM7ZxR1EExvpEQfaeiY3gPzXWmKRt6ZkfybipZH",
  "key28": "4e8zG5LoQjHrNKgWAqJrgGfZ8fwJxYgDyvYfDoLCU4fsF79Mv4XB6us4WjzpSksr2quxx87CNJtz17Vim85s84XY",
  "key29": "4ngvCXwLabqx1Qvh3YC8EyKEtbmixrNWSBeF2LtXPcDPbVyLVyghCHHjGPi5YQh6NYmEMMech6iTir3kXRNBTwX9",
  "key30": "4kxMZ5zHeZADDLKeYYwSEg1wCCDDvvQpk3c9PG2qpZK3zy2ttWJDJuudrqZQetVfJJh1GMmjVhdu9eXyEdpFMZQ9",
  "key31": "5fWyc92LkTsXApCZL5oREEDQr1eapdvLimegpkxcfTtBqgkMChnAgvdCRzFcHSNGzQmKJKTMerRDTmShWkCxn1GM"
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
