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
    "2zQmWi94MXfhrguRPzyQGUZXGnD6RsATujYmgr6aRMoyNCB4Q9wgmoV4fn2pTG3dJaewLKJYSCWkuPtvdDzq7Z86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "566KDsBYrhSK3myccU5ipJ5rRxpMxbfpmmgySP4yYY1QDKURmPW9zosPtjdJYy7FcMqVZ5JUcgoa1uXfuEUwxng9",
  "key1": "D7mxVD2hwmEUQ14MQ2uxeoDQc7LexKPwU9m1rAj8jaWbfD3w3TwzA5GC5zeCa7YBn4XQGZKv9B1vUYSLzjxvioA",
  "key2": "5XqE5neTu8Rj88LwM9kAPRo67yJskzehKogR53Um4YE4w1epDbnP8VbHSYkn7dGXpX5kdWKMG7ysgHdi7CG1jtw",
  "key3": "5Sb2ZWdDRx5yTsSAsdfoXq7AGU42naU2W839v9UFSmnEz1JaYDU27RoHVAsqzsDo2fxL8ZdFdvuCWXYZEPQTB8i1",
  "key4": "2Xwag1XeMygmsk7jneZiLUcEKh7pyrD92hW52tWRJCqFcNtg2nTqYgEsPWSRzWGTJdBg9h1RcMcuQ1N1CsHbnhEW",
  "key5": "9BX2HDUKRPQE2GtJqaeAapFeGEAfdqCpCVASB9r24psJz7Bb2QYcYQyp6d1z1vLSYaeNib7rBYu9Z6pCvpb19qA",
  "key6": "Tu9xUytMGNKfhajnQN9vz7EgucqmQx8XnzLAMZMJEhoTSL4B2TZEdHSmWew6duU8MweVkC8hC5G8emfNCwVMW7q",
  "key7": "juqr5CB2fGGxpjXFpifbL7YVD2pvuN3ioKwT9kEcV9b9Rcj2yB4dyFYXcQccW8cTN9CvNignqFfT49otBBJUQTW",
  "key8": "4EfZkkpEFbS1KHn86CTKjeeTbjsBVbtTuJ6eWkHzT7bjY6swmCfzkxVcbH9FAi3nVPGiCsjvaFAEqwEwNU9kRQEJ",
  "key9": "5DtapHmDSAq5gvVDzhz1uHb4doFhFfYb7PhLAv9Jh57XJRXG67QeREjaNPHoZ6SUsNudeRVBhsNo2BQbM6wrBAdw",
  "key10": "5TUSyMA5aBnZGagqSdefAax4wThdM8X1MySDwFfevr1C1QoDmTm2C5EJcc8WWKvNFdA7TGbc1se35BjsZPUdoKje",
  "key11": "5skbpPhN7Ptqi8migxKw5RSSSsNy9jBuQySwaQaHiUB8rVVg28sqZrY5xuUy1gzWg3qzvVTsqq239Jhzh6fBykzQ",
  "key12": "4ExaK6CRrzE6tqxwkKj45sy9HrYcmHyfJmtaW584iAL2Jzw2UuMUdtV4uDWimmGaR5hp8sY4CqpZZKHTW6yZusZ5",
  "key13": "4HbhA673c8vCqwL9czt8DGdGbQ1RSN1Rha7of2mEBiWBdYeweGuhymqUtJq7Ty8q6jKts8y2Lg9rgW6ADSQ8cfD",
  "key14": "2WK8hKDs7bzH9CdR2jxnc49c2UvMHGF9gyT7QWcQjBwjWiUy4Fph7QUF2ujFAZzkZGKv47nCqV79WhtV26bQPXmT",
  "key15": "G9jgniR6v4DRFpTd4t1pqwSB244jraPk6v7uAHyDFpMqV9zQQSVjQUeQ75h5WhPx7hjcwcfhx1XGvnMqjqJKN4G",
  "key16": "5wCuQpCLEzkFGpi4uCzKksGYcwKWHmvge5KHoHK11Tt4fA6ftgy2doGfiDvNz9TH2dMQpM8MmZhNU2h1DZCojKeT",
  "key17": "4zSqnchj7VeNrBx3FZhVGpwGoGPfUTGC6rRHUbS6QnvLmERtFd3zdfqdQJBUGreAcN9dcwnhYqJuaZnVCcAhaZcS",
  "key18": "5JaJkrVJ83Pr77kH2EmXU5xzg4UEFCoRaZ7bTP2UN1R3aT3GG2N1XJqYrYS1YTwtVBtKPAuuTpqn5brLhRkVkhPn",
  "key19": "2dUmVmvtvDPpkPCakBGX3AjUS2M7gwWwfKioEVCcvcvM8hG44nJ9WjGnqPLPrCzjUMjbuqU7CmB7DhuX1R7NxTNK",
  "key20": "KjDRzfMQA5eNJYAiKWGzXrZJiu8NJJ8XkykN92YwXQokAabMg9epZGVFv2PvZZSRoWvJ6Gp8P9riAAUjrNo8hp4",
  "key21": "44SeU6XzXS8xmeYibKt5Hy9iF96HaS6iphq9pNHZK6DaRwcToH3MVHQaad8qMWpuRpKRmqZn8fwVesFYou4KirHX",
  "key22": "61weLmzhHpMz9QbwS8WpKPJdKNNCZUKg4JJf3JkvsUS88rFbyY2D46GXP2LyEvqzVuCczN3NZsKYhNLDaeFYiDby",
  "key23": "FqDByS7Yb6WYM5ri2mtsdF1vWQPe32mcYUqKubMLeCm693dp1WdJpd29zah8Ef5RNSx6451NaiTJBiuZUVq8vZa",
  "key24": "4ran5TyxDQFXMPwmSE5haGMSsGmBRFMwgN3uXiZhrgEvFg8RVqkeeWaShXd7mdVHFe6SQ5AqSnNV7iyJYcnpurLr",
  "key25": "37f8Bd2PLAwieoVkdSaBYhFt6bUt2FPNKCJiBxh82zjn44nJ8xiZP5LP1PxEuKxKj2GazerN7rFkybmMp7y32U1M",
  "key26": "4FmYN6DPG8ipJUEJHyjmhd4txGGQwxEjQqghsxiSNqhmc1To21eXduecNens2xZ5odnDKxY4fPG48EpPjNCmeQxg",
  "key27": "39SXP1xXTW9nDhWzLotP3Gn5cdxosFsbogk2XMcQoCTsma9je3bggNbQADYM7LyBQefd8Koz6NjuSQUUeRx4yV8R",
  "key28": "wpX8iKY4z1nGoipiQP9jSApfsgnt27vg93844SyiUzVqGV59v44Xx8bacC9YMcvu8ogK1ZS7UM7erZWw644KokE",
  "key29": "DpcGvJhmfsWYyfRnSi5ar3ubtJBDMq8MhTqrFRFifJE9WjNnkVAbAoXnurunpQwFqrzKP1ALvoeZQskQsgW1oRh",
  "key30": "2TKwwNN51UbRrd9ixPe169evWx388bXzmrbYjht8mbboZXqYTGuF15aVJjqApbSDYwZGnedwFGaMBW5ZmoLHeAfr",
  "key31": "pBYBF2M7Bg3Se7bLRJEAbvu6HnnoRSjrCEMH1VTi8JMNxNKGq3VTVCtdhRfF5VNu3XQsTqJ1Z4XhZyTprYRZs2i",
  "key32": "4jR7D35S4E18gAh9UZUk4MpyhP3gtNAS3ExHbuMf86TsHQSRwDvAX7EZng8uC5LGj7LJG4GQWLoxjerbgdopoR8v",
  "key33": "9kSfKnYADfov6PVwcETkMdEFTaaxMpAbEHGTbuUt2wFLGJ8r481H1YKpoiSA8HzSQVJXbpD3EVaWjWCUxGfWbTT",
  "key34": "rwx6D1QkY8K5Jy3ffNL35QoG9UQMhEBu4FLqX6KMaKBq72a6wMxqN36SadKSG5TqFkv64GbLhqHQZ7MaY67bVWh"
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
