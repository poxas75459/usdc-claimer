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
    "qw1zA9YK26fLAYR4H3rZH7j4oznsybNq2qk1pnXoHvCNTUHsYXVPSXMXRRwykr2evgmxZhhdZPvHUBhBsSxwgsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ogivnLe5hknojLtgfN5WW7zWHKd6GweZaugV8weDYgZEkvwhfnjTaoSofGLS3Z8FKiRgbdXt3dLQoGDcUrT5GJk",
  "key1": "331tdJF9skPypq1VjFNtGaSPBdNGqbn68oTemUUffMJ1bLd3nS2qZ9tAxSaJfZidHYZ9ceT9anQS1nQvcMnYsz8x",
  "key2": "2YGxqsJM4grPcyiXqmsX3NjBELLdNCjgRaPGHu2NGvD8haYwMN39P5g8SLxLPZAFLWH55MYL3ytjvmRxuZTKGZ2X",
  "key3": "4jBUbRLDvKCpLijd14UfGujRSPvsQq2oDnjDvZvUwTfCRGyGCxtLzrPt6A5GDXo4vLras4Sp9B16unmHcSYMBQqd",
  "key4": "GewRS3jfoJVSznd33ZwNkuqstYwuzq4s1bU1zXBnbkmLJkkKr93Q5jZvg33Cr3bcDQHwytWA1cZkEuCgJzQUtqo",
  "key5": "3iN97Mdhc4hwVnDK9FVsjQ2Rm84kGPankXRijVta4soizEMzAXeFwFgvLWPwkwAV1nNzqqgy7qyPVEeMuLz4cvK3",
  "key6": "5nRqTNbCvGkiv9fqLaFH2DVvZfNmq1CAxXAndmxr65dSegUF21V2fSpRNp3VMXST4fYhXwkjLRp6biHhmaR1VkuR",
  "key7": "4omKFGD1MhnhM2RYtYurZFomWpdVi2QLfEnoxvmo5djs56uEHN3SAXgECooHHibKXYn7YgHt58kCSKLsgjtPkm8b",
  "key8": "5iPZJsNGgoZ4HREGibFeoAiXkCMca5PNsmHUUTmNk9j6ckP3Zbr4GZb6kSnuk2WZ95tWzjyzY9cCToERLKiH7YM5",
  "key9": "5B6nSbZKVrK3wiZFmtQ6S5vM7AYgd82SqMBDPcQKkfaE4EymLS8qSvqkYbbUhUhhnct3oZXUNPUTcKvRhPWLYrVg",
  "key10": "2JgMyobr9tH6Y3HD7ZQYNU1iUaWKPUswejzYTGqXUUDd9iTvj2XP4YVpbNMZdiExAHEdtByKkQkSerJf8YQf8MP8",
  "key11": "bbMygTN4Bj7hYhTZRnd2C2ojJ9DHi11dwwHordRFg7pphnEUqzCKwiTpzbndi42pjedHBD6VnSa4f94Y7yTt3Fk",
  "key12": "qxZirHNHvtroBpuCa9incTYuy16h9zg6wKZWDMQH5GUbAt6hmxM7UxuMwZKMwKFPiBNir1iP945Z57LSSZU2rVy",
  "key13": "5pZtgZJKhA8FZR8DdGuQrcMjsCFt8A3KRQNKwvixfZJLzUj9yPWcTgdtFxMLXrtQQfWXSYZS8egqxE5veqFfYfWD",
  "key14": "5QCqDAeL81QARpVmZAvPn4pxkwdqtMy6TSq9cg2zpa4CMvAchZkownQK3eyyc9xHN4jFFxdr3CVthwpsqCYsRpPD",
  "key15": "3oJLVYwg7619seb7DQUoXZ7DbBgaB9JCuKwodqbBN9RpoQwEBRGbSv6kwmc7y216bPB4Y8kYqyNkiVaFPPvKTUWU",
  "key16": "5NrSwW1Hyd4AhzjMqMga6mCvEFMw6US1p2sP7vqKXQr1cMnQSWTc6y8v4fKHHu7m7VpYDPNG4a7b9MyV1gKPjbDQ",
  "key17": "2jSmzNxDS2dsysaaFcpAXLmAXyEehoJgcvJf5s2weEPYGF9w1XYxe3sF9Q9EG5XDcT4msSv1xmyozHQLG3pq7XMH",
  "key18": "36X5nvN99PxB98g8MWu6uh44WzWTivsWNKi1dxGn6CHFuHPc6oL6swtKVpHyzHAgfxcSKiWWSA99CpWUpwSwmHu9",
  "key19": "dbjqMMSkfuHRrJLmf9ksPBT7P98XrhuRU8heX7tjrS9mE3EtPT8HeseS1nj3uSDM954VsLycyXtg54ZYH9ppK18",
  "key20": "LbSJ831Us7GZeLBdUytPGhyiQ5yv7CHVQjNiWYjsmrvmmxYHwzNW9RonkaLfhDjg5X54Vesep69k7kW51nUhdQz",
  "key21": "4S3aXLatdFv7ouMZKphd5zMx8BXfmFb86izZGHZVwuN25xwRNpii2TC4LkxTjKYWCDfaFEpQ9bmpuncg9e841MQp",
  "key22": "2xuVXc2PfwLjdH4ssirMZSHmJLSsJZwKxgCRXkE6wWRaqQEG1fYZyAxapRGKbMx9UKYirueVjVH6ewp1ePHmQGrm",
  "key23": "4Dk5APXcY5gCwv9EFoQZJTzGaLN31mqXbxrBP1tQhrDGqLTgiq7rUbWH2MDvTdHjAb1HF3ZvuJndsnNC9yufRmYY",
  "key24": "24QEQZyYU9R5x6ehKFJKG1YZiXqSAxgt518zVnEatvdRyDpAA2C3LkGEjt7LaAyXcwdjLZAFczDgyjJYGQPRQBVu",
  "key25": "a5xXrf3xFid1My4WKijzdP98AtZ7fLfcdkZtA9fyeCjaG1zLhXDhPJHrj4Z2ePgv2ZeLXgino7pDNKC5FR6yA4C",
  "key26": "2XuDo286hnvAC8aFVH69QRBwJNJPK2fnJHFWnGrBKUTMjedPSLgs21r4GXB1Nvk5WrS5L1G1kHFfVLyW7yD5qEZu",
  "key27": "3SXABaMz2dZqWeCPXWfWzaHn5Jiq7uDiLQWiVWmcCM4xnPfLngT9gfGqJEuHLrayqpY8DMMvUQfCPfRW21Ut9emS",
  "key28": "fs9CTii1xHJufJXtzuqUoNtBwmKWAeQNwMYjW81cxNiELSvGwDBBDE8BM8LvN3rJ9PWrfoVi9q88ZnF1BC2wv9x"
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
