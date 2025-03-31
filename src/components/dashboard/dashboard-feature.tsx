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
    "5GghDUNAKhnPfkCgjFtcyjDagjatb7REsWDZVPT91ybtyBpXawxwjmFop9xMv96FsRWFWaBUrsb9EWoFfiJt3kZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pfVhNDfe23qMMXmpE45bv4e6yUA5rXyimbHHK11NSwecbNakd4azwXbxu2ro2nTvr1tXGMLr5qiv27jb9HamXWu",
  "key1": "5YZu9yvWZxVxyyVdiQ2NvnASYCAwxWHYwefbeguk1BSxjWiUC5uNb9d2XVBZU8NBjF5rcnBvJMyeBatSzprR1Pzy",
  "key2": "2HvU9wGzPTN7k8tx2BYxMYjnQoVpXNR1QUig4XqSEaBfB5doN16bvQh4zuVei8DEuPVx96YMQXxpPREE3eLwFvC8",
  "key3": "M6zrUo5EWrXCNJMSRWkeKWCzV9kphvLMminNGxU949su9ygkCohWSbEk5B8SPMwHJHzoea4U7hjTmFPGfR2PdsY",
  "key4": "4D5JTum2C3ZPKH6CKVsVMkHuvhi9qe45akFR5dC8mXzooZ7kETVKgkLvy8mJEFBpKnfLvPYNUGoMZJVSJjRC3c53",
  "key5": "q67SqE1aSBggPi2mDKTooGNGMejZyrx4LChPWYhTEBSqVMk6Cv8gTS7NWd4CDmDtXojZ5KZC5n4zqvELXwGHuMV",
  "key6": "2Gz5ED2owqjk3WxgR5QCfsn8ZHeVBgef8xZjdbRgjGZF5Cm7xYWyJugKdq2YMZhTWeSwfAZfT845s5Wss8FXnHVK",
  "key7": "3d8SUSufCCzkyVyctmvUkK2wPk9EawAWnj9cwUTza4EgBmfKe1JrivWUaZgvRuSyhW4njVsrFgCFn5rhpdS1fz7n",
  "key8": "3TnaRZuNkEmipdNdVeHrHPXN4m3YxB8X5dSoJZXaa3AVZPgwuh7qMcsLFwHmm1NHp5gCeZrkfYQoidJLgy2ZPoPQ",
  "key9": "37Xm4V16VAR4jBtSQXMoiJRwVBL34tyromxukrfSB93gQCDo5FmUb4eKQCgt9NR4ieE8LYJ8nDaWQHDsvkGJ2FwF",
  "key10": "3WWCrQA8nrNThR8PnEBuLkTgYD3LJQ5PJ59542S18dteEAJ6pN2gwBtMMXR2t8JEGpmmi3stSZpD4WGEtAXHBwey",
  "key11": "3ssHuNu5BPrQdDH7eUTHHV4pfUPtS1Y7rAPYWG3LU9pYpTae5cjZjkfgxCNQ6SHJ3kuXRNa6ZnX3xuFWR5xhhcX3",
  "key12": "RZKbocbUUTjhN2x53GZAqMGeF2dFS1rWnq9vpSZYQMZo6YCiNbQhmdMfx2NdhyGaAnt6eeGiemk52hXS1PaieSm",
  "key13": "4h36WDDXsGv6RZDNy4hhZ455ZF3D476m6FkV8XcMKxqDLbyJUd1RSiKvvNk9JSrN8A1yiekYn2mo8yxPJngKia5w",
  "key14": "4KMqoLL3XXpekXj9zZ25kYiNicZpcZT3MhaYratiXCLRo9WXEMR9DXJnyqAiEf8ecnLd4tD1Au5vdDjGvjaoKLqH",
  "key15": "2TBdUAnYw8DCGnFFFcW8gd2JPGiNFUMDgZY5Aq8DfQvqZWXiFjboshNZxrmjJbpLRoKQoZcdVUFgxknqFjePrU49",
  "key16": "66fKa7GCrjPaTsjHUui34sd1u8BTBzBobQ6XE3QxVSFLqwrYXVck33pUgmkLPMzoe8oqvBhUhuaedbZ7dqCcKt7L",
  "key17": "2qsAzddXq2FTGBq8Xgj4MVLoha19TW7jtDC4U5Z1hqWCBRnKpCoeqs9MVMyS12hguawWBJCrFdWBm8aZ5A8QptkW",
  "key18": "5qjM6ji8tGxdUmkUyptWVud8FD3Lg1UbQdcw1oKYGyorahJJmJCs1difw6zXmMKEkiE4dAWW3R9qjPSejj4KJYbP",
  "key19": "rFoQVj1hqKexkjwEZFpWg8gWwhYpXphpsZJMdqddHB9WNXx8qSDUGr533agpzKdQ3WJxo1APSXCS3E2915ABbba",
  "key20": "2YSBGwiaLrDzZMVYJDHQiUxvwsZq19ot9hj7dE13gKXRpkeMS3n1kUHCZwPtPhxFnqRc8hy9vwzqpsgHZxn75Bt1",
  "key21": "5L7bEEHztv8hGegRtmykZMN7YwVdvLjWm8HfmTjpNmQBYMHNfaFdUT6VVZCHRLhPNXxQs7ps8EzQnSRGjbUaJubP",
  "key22": "3VDTvRykcv5Z3mFbE7f61G83zykNVRjzxT3rHtZQi8tAybfnEYpTnnjKS73UCFJQHb9D9vTnFHT1pzC2mAemdaft",
  "key23": "2YD33SVWTSuxBqbQF11rceyqECmaJSh5ddgb3bhWP4StWs3KSj9tifNHNe5Sh5wcP9UjmWHNVVWRKRJv4zuEKuTW",
  "key24": "3Z2phdHwz9CJufiHsEXFGne6NX3ZDH5L7HUKPzLAAXQCrdCbUzFxB8mzHGmGNiszABKZAFxrWZP77FvRwYtWTNws",
  "key25": "2apZHrSanx8NjHxR134bnYZvBETjnzigQN3adcDm8TDoRmrf49eg4B3EZ5KUkpi7LR6AbMEZU8HfQN1WmQ6fe4As",
  "key26": "3u37HCmFTpXK2zFEGimRKbfcYoirfbZ3aqte3rntJfzS1GxuWKntfJC2bKbAP5QSduLvk7VnBuiVewEZj76oeXP5",
  "key27": "5qX5JYEBudVDSJtPNYFE67VfYFNUMbwZnTLHb2jWa3WeJonGgnY2GKDdQTxVxYWoFqG7S53pjqGKJfufGcuU49Xz",
  "key28": "2MM2fKCTu2UGCFNSZHwG6WnZWzjWWqy2sHLKV716aHxD3SvUaQXjQ3owRo11a93tS1xQePwHh7vMTPZwYntjvgYN",
  "key29": "4ApSQqGcWQ6sDc6kT1Ygmw3QxsYgNnGDyUPxWZCgSNQaiLFVf2eV4XGsRquRHNREN3MDTWZDGYHPiAKW1i4Kkfjv",
  "key30": "5Wgfuzc9kCmH1TVQS9D5DEwv64n6aDNDCWVyGTnaAC7hUGDWybykjU7LoopHPKbEPkRG3RRaDM8VjTTi7tP7PtTV",
  "key31": "Mhn5j9guPV5NMZsMqQUpnd5FT9DKbwZxrcvtJUqCcHvBmxtDBxKj5GeXeQLyuZy7B1WbYb2JLbs4zX37bKia6ve"
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
