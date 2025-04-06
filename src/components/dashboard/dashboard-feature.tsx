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
    "4wDBZTijFEpRJLo7BSPUPz48Apttn7Rg2Feprm2NqnamE5Gfg78478oGcsREDuM8LFxGKycm8BHU7Vb3Dr79KquX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fuDqVXtVo66pqo6ik9eBNkhyptXX8v8jH5DULU8RYjqG1ooMF3ikDG3z2Xw4h428TAQMB5ShEqdckGNSVrbrrqS",
  "key1": "2tj3KvabyVDb2giWcapCoBeRtQEMPCuQSzb1D3xZT2rkD55hcatkirv3P2TUZ9YSYfqoyrC8UW2vTFTDBMgkTNfg",
  "key2": "4ygvgfSUsSoyyjAiZmrF6z57jtGNSbKF1fXQruj3arLSCi7TjiVXEPbY8GMDpFSFsUa6eWZu7eCzXSxA7Ttn41x7",
  "key3": "3aDJavcpVpkwrnkM4WqhJqTYc8ySFtaZYQXxmGK2WAAxv5tNkqyyKqFiH1uKyNFxy6APpsZJURxmBRXZZXwCX2hA",
  "key4": "4QZpoa1oRuwwFLDGBo77CTEy5T6qtKhd5AfyRJN4QpWXSGXZmyny7y9dgzwPNhAUq3gAVj3HN8eGpCyR9asVyBcu",
  "key5": "4WDkKNwVRCqhnizfXp3VNNRZoHcUt8oYvkNJj41sHLcGLX3dCeT5GiZzscqRhyMVMQFzsXzn961831h9ABEMuKPb",
  "key6": "5HREXvMKw5wXgsswzHeVzrX9bXyskygftfFWD4hbbhP3XH6qzU4SyVttqmkgbpkb4K2KeKLmBG4nNLEZRyAUVQxa",
  "key7": "GAirui3tF2iQJu38JZ2sgySsUX3uUqGAVwSmSHW2HpjnwrAtMns8HbvmrBqJQi6fDBhYSBwWsLnimK5kw76DMfH",
  "key8": "2jozZE8B4iD1BKzGC174McuYsi7ZASEEbgyPFugajWSyBLpFkz7o197Z9uv5pUgei9AfrZSvWnBPMtFueFeDHSij",
  "key9": "HPoSwvZrMHFEroPVurEaa3u2vdZ2FLMjXGsYk1oyCVHuT9zBuN9gRJTgYRAQCfVFNFvLsoW9VUcPtFpHhLQGhdF",
  "key10": "3mVc3WVsrKfSQVmeroRboKVzrPTN7jnEPftXCuXVuN3DQxARbgQMVyNmKQjZQ1pfPUQHT9j1Yj3Pqv78Y5kjZPxy",
  "key11": "44ywAwN2PsJeDxFYD1egDvnHWmrABNtYZRnEasvC5Fhv3zCcfwjYEpaE5JpM97CvK3ReLxTG6YyY66TGSvyJVEbz",
  "key12": "2mQg4q3MVh1LSJr6GmpYtTLA71gWUZx1zZLQhn9LKxQGL6idNTTSLUYAaQbtwcbESBMvT5AFNsvpUYn5Vxu4N4WD",
  "key13": "4MwygsHWS1aYEYB3TJDduA64xtwXxf2He7eaB2cWZZtVTjRY7hcgLkket9kjQjnbYSdu1MPDrbuwHNhuHRfvJRQK",
  "key14": "SZfBP9pa3MkBMjfJ8rPGPK83MRAkghenydyfKKQ6rnVvVnchve582zVUHCziKvn152ttN32EEjmjjJBGeSV4PGR",
  "key15": "5wixqgYbqLK6qEsu1gfMLgFQTnpYQbLxPPQY8X9drCBMtBbzkuQh4T6539scTTPGT5QJxfUk9TWZ2bFsJp2dHCYV",
  "key16": "R9wi6UvdzYAMRud5Pbwrcp4Csvr2j1rZDonMMHWnj3G6hAfxLRuV4f98HELySTn7r5z9nR5ePpM1sVVYAtXoiE2",
  "key17": "N4gjv1NiWdtwWeJbriKf8hnXr439BNKKuGBFp2KS4FLu6WzFDmBpJxfqX7YgEY9JSa4CjqtkNdY7NqPiXf7kBz5",
  "key18": "3gBSjXP8v6gZfh8abQKH5qQowq7Z6NWPG9AKmtJXSx81ZC8pBu6tJGzvgdm9zBz165iMiTvbCP1RQtxBKPUU6ucw",
  "key19": "4RWLQsqE9ojnMjEgEVcbgE33mFstRCtzb6QbJhUc6xscLs7DrmuQYCKXRcinHh8VJ4ECm4mokzBH9URMhuUgzV6y",
  "key20": "5dorJBXjbQNzEXKyaPyrGuTE9rfEUSKQ6UyAKUemXeJZ66esVKQZZiMANSQuRKbqEPF8bN9MoiYRbCThKahLT8V6",
  "key21": "4y5HreBndHYtMNNX19KSYMs5UyE8wRPhTogCA9RCV3hjZZvHeUAYFGrpXu7p2jggokVcEQB3vCtnSPxa26i7UYBK",
  "key22": "5eCT9QFkefTnYJPp48FYVASArPbPWWNSFM6sH4CYcYjTY1xNfni5DhVj3mnzq7qFz9NJLSojG4T53CFjxq1WNjz",
  "key23": "5rMdSYxg4aX3caXW6tpQnRHuXDVpnpiyUm4xgB6tFDGLpSe7QUD35Ew2nEWA2L3133aEYZqVcfp39qfWJmrCdYiA",
  "key24": "3vCeiBy6Zek7AH37SDHCwx9y94qs9Kq7vt9LSxWc6E2wSveGodyvPULyzmn5iupgpGGtPZ7KED6Epck8D8SgVtAi",
  "key25": "zLqpuyP8nq8vrEziBZ63hRQW1fA5GxphdoaBtrNVRtTvVDTRsL5GpyVt8Rh5uHAuVwyJdwWj7QAWstaNCWwJ7Up"
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
