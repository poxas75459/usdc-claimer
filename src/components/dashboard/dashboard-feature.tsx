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
    "3AZHVfgQEJJrqEU2gRRzYmTJ7YgFT6Vop97ycnA2zjq4ya2Spj1kmG44nNyJpdXM3Bz5jaWnXVsHtucfYAvBzjGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s4LWSC5ug5vJuGis3ivvmjRgaxV3384tcXtwhPW5GVfHbRscSDTgh1bcBxF4BXaDeNYaVDQ6wmP1WmJB5LdPc8q",
  "key1": "3sP5R4BCjgYC8UyTWQUGSMhgg2waBvfDsg5HNWyJCjFfBQVy1LFR3BFMiafNALh2ByNnPeARrf7daRgAFm3TmMDn",
  "key2": "3BAG6VEXfgFrBvPjaDBoFALX7RYpVvkLWmt9Z35BnLRFef5hFZrT7qYMLbSsGq1GrFqz5s8vbyJ58gpervZzDnrT",
  "key3": "41mgQvzALyyN2JEpbCfyM3piBLBcgdu1ihyAUEM1tLDQgV3JhvDn3eTTp3RkvkBARYZDZ5rXcVtzoN7pS2LgWLaD",
  "key4": "5nX9m98krLJeFGtWkefcTAiWrfYUn3XfvPC4K4JzQfrzVFkbfkZjN9an5jp69drD6SomqSGUTHx3xJNDTjLHHSJm",
  "key5": "27ZKpEmjhvc7Brh2dRmtq7Z834bip7pJdvbQ5unvsQWFHMF44hdxxKMHjr9ufAV6U66dzUDqEC7LHRf8QZwJpySp",
  "key6": "5Qi7UKoi6KogA2XUcrynzQ87ZQXwMJn1BL1nu1sWH8xrYTS55H369QfJXoiXebahizq1PZAbaKahV7UVfrwa5Bih",
  "key7": "2YjDbbdJ7CqqKpvK2c36a58orTkuHWBwGCKSHzZn2UNni5W5dBbdrPccpB3jXWwM1sCy9ZRprNFkETxuyivyq9AX",
  "key8": "2NBXqycfhJfEnTHK7mZorAH1Ffwi4cHVJobckG7WDUa2m55AvMwBcJKtFM8XZcspfr1Rfdy1gM8tFDeYgR4fqLkr",
  "key9": "3qvbYCwqyAzka3teu1FN7muhSd27mF8B1XUze3h8cXkSePLM6DD8vABbk6KDSkWeUYmot8P2hBHwDw8cdCKRoKPo",
  "key10": "3q6U1TXc7Hhb2ZksooxQQctypf3G5MjsPu4FDo59SYAhouy3E7Z8d8ndEhKwo8WuWXW5g1FfzaxeSDNqtcEpVhkP",
  "key11": "4jJ7hL3zfkw6VqpbVkCwXfRH46xt4tCgaCpmLUUYQ9YWzu4VAuJddisRGoth8yvn2EbwrMGZvZs2S4fLhzBvarY9",
  "key12": "2yQCGs5hKPzEMuGpYfscW9Ub2bpXmeCtpVmQUAzZ1gydaRvSu1f9oQWUd3Afd6YqTkuH4CCWiKxhsm9uwd7durYZ",
  "key13": "4MYQKTwBM3yVe6qANgpHmq656iGy2bm2ZgKVa2QxCKXhToRYRJDdkKwsVgLuHTMa2Zh2pd7jEzZYh9nZrBsB6kZ5",
  "key14": "4BL6vHSaZrkdVsSbD7syJUAQHPsX6KywD1TQN73gAziKpXqYc3m2bPyuoFvXk54veNT5GckKCGRzCTu9nL5HLuGN",
  "key15": "BEK9mLp6AdZKgYVpHfh4UJxriWtgrR1E23oiLDNWtWViyj2Ve93g9ve2Nv9hnPEmNbrE9h9jVHxLKSENJCKMwrQ",
  "key16": "5o44Kp95FM9hcR6HF6GRmLAuWJ9Vy9fKuR6JvwF3xa1hnGLvsH9VmZS51CRNCQwkSnPHN3BQeY8rHvngAuLRLyDf",
  "key17": "54KGoaW7HuzGJ6pE3Mc9DjFUsighivndAD8GDQUDSztjepXYXRcSTbgZNDqZkVYq3VPYRgMcHpbUxxPBuULc544j",
  "key18": "5NMsbkMEnVQvpDSq6e6ZojqwnB8LZgRvRcC7rbfZHQ7TZwQ7hTA6qZyUNptpDJCFEKaExWZ374FDmEDuZRbvBVLJ",
  "key19": "54TbDoPw34j2D3vedaJ6uVpVmmfTgp66U5k8cBGeJXJTaPfcT3Zywxr12LzYCnevDBHvBZiiYmLbYY7UaN8tA36E",
  "key20": "5sMMoMdfQKaasU5Ru9eaiJ1iE9nUaddW6aiu8Lu1bXoJRLnaJparwGggw457PXZdAhBKrykC7ufz8tEAKywKUP8e",
  "key21": "2N9PfQXnpEurF1zZVYbPYG4Uif9RvkkmcgzmA8tBxVHSszkSDpsiL8tGuqmevpYvdgizT9buKo84jYnTLUEan7TS",
  "key22": "4h2h26H1n9H1VVDfAib1ng5ZHjCjwgh7bvyFNDwUSFsMypPpzKtT1WWD7NGVj1qmanh4r8rnx2LPez45wcbhTL42",
  "key23": "3C4RsdMhy5quf6777ML9xEvAaQJXwwdSM3R1qEYgKkFuoossmFy9F3TscazBW7kxZqZKQraoKXyawgaJfpFdZgxH",
  "key24": "4LK6duqEtUvLRQXoBCgnpuAZbJgh8Zrp37rHzTHqp1Yyd1vaZMhM2p8XsuEjJ4CTuuoK1w5Xj9X7YV6cfWrY15pF",
  "key25": "2BkM9VUqpqBvBVj7Qwr8ieMKgQnyNZZN9c4oDGaePKDdNagWzFvFbBmRn4Vsj7PcqeuG7YkxKNvuW3jTHAwCmnzh",
  "key26": "2zX225UMwZ7HynmuxGLTYJnJK1cKKSSHiwTJBCqSaMoZopsEX5srKEx6WvJrMunq8Tnef6U9ZE8QVHmDrNAKKkXk",
  "key27": "2NwXfuUPFKt7PWQHnpcBvR7NBizArgXdFKe5tNvecKRn8F4janmvE8Zip4F5RBFBadfQVQ6vmMUC7bGCoeJdQNY9",
  "key28": "5nKwFLPqxq5wyjGGvtscMcWMCXSM3DK7Hz8BQtb5t5JjMzwLsdBPYv9hyE76ZdUXrQsUcDrdngcGWv6iqwRHsv6i",
  "key29": "317BwPj8dUieEqh6BFHT6VRCyVUudDvkdT3Y2WjJVUSLXhdcgzRbVKyhoSXWA7p9vq8UYwAxrZpK8ghbH1n2dsFK",
  "key30": "1K2FWnsGeniDVTvuB9vz6yLZxAQpSB48cN9AbN9gyPkk6E3kqaEC7tv1YBQ7Df1aJfdqqLh3cbuaqEmBoH3SgJG",
  "key31": "3zM8aXMvvLin9RXNWDTBD9r4ZVUoASZPHzrLBdrZcBQ7hUncdrBrNcypxyk8MXQe45Ce23prQ6htSN1TQUd4mKBo",
  "key32": "52fVBCLw2cb895954UzjYHTfZF6XwzUpybbyxSC8WX4QocgCyWMRT1Rua7CkoNRwdiiEW8jGvSw57g4Bu7vPrid4",
  "key33": "3qeHrQPDEyzY19p5AAdB8y3KN4dUYcmPYMjR27bRwa6gxoF541YAAszpVM6qxArBZskLuBo8aAJgz9q6wr7KLT3y",
  "key34": "4TwJKdZFzQmak2Z6TQtcHg7iqsFC9Cf1KRZHAffvhDruSQjGwjm4y9yPmiLDJDsGKUu8hZsJfFjrBGosJoAoT5My",
  "key35": "21UHeGisQEUMxxVysP32iLUEgam35jAN9Akopyi4inmGpKUsTQL6E8JSWa8DXHV68xpmE7nefpuSy2LbKwVdjvhU",
  "key36": "2GfKM1GZz38HKgxRzPVsRR9jy4ERdPpzabJPznnYGQ1Q4ALv2GTWKTr6sAEggp1DdcGyj1CncC9Ch4NJxzx6SSkK",
  "key37": "QtGVSbXc5nymGHxmFSvE3iEc9PGKmopgqLgH6A2tFGyUvbJJq6DssiXKSsmcifQK5X6yCZTy5XKWg7vr1HhjKQM"
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
