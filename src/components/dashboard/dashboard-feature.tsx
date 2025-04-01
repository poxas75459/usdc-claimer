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
    "JMyB89sUAbRJQ4C2is4SLsAsZ9Rm1Hi8RstTSp6rEoyQ8MUUmq9HcAKpZjeaa6reTx3kBHkgqoPY3Gw46Wq6iFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KnVGwnqqd57EqkgRLBRrFqA475Z5apQop1bA9i3psUxVSvuGW69WtPZq6NT5iwUg4dPAzExoj5L8vPgZpfiwYXj",
  "key1": "2qXAYiR8UNzk4Bc2EWFDfgRVHshc6AZkrRrwdhCr3Ef1wH5UBWhmjzqC5CvdX8fDzsd7B2grJToAGudWQnj1hW4B",
  "key2": "dYb5grXmBhGxXmfc7qFecJG68ZhD47RbKdNP346wrArjW29kjZRCqQMyjjKvuSV7YKRUX8fFWmkttjEhBPjNG3M",
  "key3": "B5Df8WhGzgLA4aFKVCk2xfn6oxB7DABLrPJ49hjgRCX3UcgWrqBehxkTPvXheaZPsJNAWWVKjvQZdHEWg9YVjiW",
  "key4": "3gRdw18buTm5XhKPcieVLTXTeG68RkPSaK4PcjejvjRFbgSahapJbWrJCaF69uhV6AvcYpjxAnjTJJj1M4HA5xnR",
  "key5": "Y3kLTYaYs1C69mvwa1biKkR5H5tkxUxLz8edPYbwFQaUpSyKX4p6wkg1LA2JTpkiKwDcj975rAd3SKNkmfEuDY8",
  "key6": "5j6AjL1LEwsRGGX61viuDRCE5CoCfg4HqN2WdELcFZCu2HkBh3m9Ek5vTVjC5xvSzxFdYHYW2HSj6JPzypm9AKfB",
  "key7": "2DVSY8YtS7dAfxnoSQgoPoBNdKXcUpQtVGoMjAeqDAUKX5QrfDnXkDHVhjQbt8L71EC2rydX3E3LjMV8xp7Jvv9F",
  "key8": "4ZK5u3TSoaLkgc6Jr12wZBR6ioYH7wMaBjLCfXDxBvw63884jnea9K8mFTQLEfqP9kFRzA6Uvi5BrqWhF3vXfAJs",
  "key9": "4jozBxrzML3uRr6JtT9wSi8C9BGLs1NU87FRWu12piZQsU1J6LNJg37ho1NPTR3ueVDQTQnbFdJtbAL2JMAXhThv",
  "key10": "23Zh1qpL9K3BNjyfzdE2KNKuykDCsoDtKmr5qcPULYCSeyyzWhe997nQqxGBmereE9rs8mWs6VjkFPcC4orVeJDu",
  "key11": "4AYbKMNXQgYpNXEQd31nUDNoNQ2yS6YXeEMdL8CEVKUdLTVDi5qCinmjYsXyY8dbHSJXoQxzwkiVUB27poKGD1Gw",
  "key12": "Nm1ugW4oiamZs95gBPaJY3zBoacNbmYNiPAc3uktJ7smvjECd4Mp4TCGA4UU6cn6UZvT67DJ6BxCzDFBTm3qCJh",
  "key13": "2jvaLFGbtGXAHZUD2m3d3TLc92qvMYTYPh32jSafd1AJ9aDW67sRWQoiTShqNqF8gx1P41CnKX3ak9rnsee896kJ",
  "key14": "uir6u4pJBjriVCcZsm4SgTLjwGE48pGFCpieGrdmP8EXdo11or7ZxE5BBuRM2yHUU7eogKP5UdPRE5cyFzPxhwo",
  "key15": "4Qxv1fKmxzWqectMqhSWAbmrr1u4EjfvjnpKyueakK5JjJoS8rtdCZCiHCZoPphtRn7QqS5KE9H4QRT6o7RCn2Mn",
  "key16": "4wBZC9LkPoq88ZKhBgauSu8JemBgY3iEmVkrRxUNSryfFmZtpeULt9zZU6X93VzS8jQrx97U8WGYsAJTbujnzX28",
  "key17": "2BuBxBkXnxqb9qya4F3779RCGkwDXXu4B6jkba3Q5svnmvgr7HuuoimpUcVpHFb9dwapJ8NyHxp2vGVfN8uvRuUC",
  "key18": "2ANizPUAV5TqTvqf7JdNxb3jeur85D7o8DjDSSQ3Shm9nQHUrUojAh58YdiYx1LEKSptPjogBvL6DS6p1UkjoGXq",
  "key19": "sKUZnU3etkA62Eb3WQ6fYZEeXZHs3zp1xrTUEfLF9Nji36hunsFBcJ8QAfVVkPAfkJvKkm6fsT1zjPZEu2e8wcX",
  "key20": "vJ8rRFig6gozs9txEQLf84nC8hUjm6afFQz6pqCFQEt2ig4KukbE9HiTmLj6cB41mjnqpFkpQ3XksoUzaZw3gkX",
  "key21": "2hTGPFaLyU5ygurqQnN63YG5pw8BHtW4n4dcRKiJ6mEfYHW3YrvqPzX5HRquPt1asqraLsb7kXWNF5DpgGeXfnqW",
  "key22": "4EYGMSiMx1sbbh3p8LxqTd2H4hQtKQ7wmCYMgbsHNYj7vXwJmtzgzdrYRfESy9CAKU4LVVi55T8bUGfSQusx2QaE",
  "key23": "5NHm3ixu6sYN84jf771aFmzQBiL77gRRf9By1bNPRxTD7UJqzSS7XdrWTmiH3A85m6JMbE1T1tirTAFFKX1tSKK",
  "key24": "3FvPEvVvThtwvhJVEp71WdjrusGg1U2s1wMmL3fFwP3Jhyf5vPAtovofUt8merkM7YZYkHrwW1rMpCizjh9uJkvb",
  "key25": "3triXAjzjijCE4su3BwByHv2XEzfkJN35wJX6rkUX3rxHLnv15exQqqvMPMJyJonwnxJmDozVtiGu4PknnwXtX3J",
  "key26": "4f27rBzBz6138fYe1F78etKckrbGshUUKDFZqNG1XQUsZRJgVh6U591zk3QyMyoP5gGQGKJjypbQJuSvqcg7GAPV",
  "key27": "2bbjc7ZgdFwfLUpeEsBqv46hEJpkaTmqGvrg21NXcmrRwbKKfueNP2VG6xHMZcEWEU7rGnmFEF2jms9szdQrU2G3",
  "key28": "4YWX3AerxWtCqWrgpCqdn5N6N1KatwXuRceAMKsT42xwnbeMy3DxWiZvgyVq3FCm46NcDUVCLRKeipevYSRgxxQ6",
  "key29": "4a4PwbCYU49ArpfUnQ3isQJPtCzfyMk5PXva7p9tCS3eEu5MuxjFZyckESpigKxNR3SZpVJYSQzzqvzD7oyfDgWj",
  "key30": "64ToXAUadB5oJ7Y8iwdZjVcfB3CtWzu9WfCyBHv36ByG6Z6dhUEFhCR8qLLJbmVsYd53HWXmu9YMyY9DgDqhGNPp",
  "key31": "2VbkPurKmDH9kAk1mgPZ614DRzbEaXMjpXmH7DxqxDsPWLWsw9Gbg5RMju4kGCfx5hitHrYRFZzCD2qqYX5zh1EF",
  "key32": "t5rogsvYiHnSXnijRkCDEAzfKkU3hAM3ZXe5jRmVSsDBYtZ8uf5smHPbz3GYMMQ5pGZw1B2jZW6vgXH41aEmZ2z",
  "key33": "5WXEtER3q3C6cj6z9qeP9wzgqQHhYbBjWQDVmTGHLryLQvfKNcTcWi7UoNy5rekBat3xe4ovKFnh3NNRdcFyYB2h",
  "key34": "66Zf2byjanKJcv5piGm2bGaoGkkV3n3gYf826Rwku2DRwPM7wNJXHxnw6u5Tej1BT3QnFYb6dGoa6dURr7q4YnPR",
  "key35": "2pUdEu8NNECdPRbqKdNiFRMu7pWx8mCEUPBZUu7P1TQGCc9eVbzm8oG5e575s6rcQELvDVJufccGGUUJRtwHAieG",
  "key36": "2dD7NQEvS34cKkgGPcxvTmqjnNfZqmQ78gtDk8wBq8NqHgx6Zkfo8x5KdQvyBXCCp5AoHyx53G5iCi7muFZyyQwZ"
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
