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
    "1ZNtrBu38o194MSRFyYJCEDB3bgUzPHCdoDuWviyoTjNu4FxtSFueaXZtrcEeBez7o9p69kYfTejysm74wySBay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GBQaopTWJh5Gzg8zD6f9RBQeZuWo1qn9LuaHvhyzPKPMfTKBfntqHVQvW3Cwc4NnJBLx5AfYhZiWsDoiZwZ4zbG",
  "key1": "3pft3e9md9dCZdi2YF8UMVB7Q33DDufZUJ1tPz58y7JJM8Rj3Q2ybG61dByE6539mAHAeJbnHJfdwF9QVXyh1aLd",
  "key2": "3QqN4pBx5zQc93BHcHvk5AwmS6Q144kucYAbz2BrFyFmLi7D5AyNJtVsaMtgo3QbcSYkGizjeHC6jJMNTNX2e6X1",
  "key3": "61nNt71rVp5xbi9xnXeYiUH9koRsm6JmUxQwNYwdG7fz8nMKGKuTZmGkT9zzKzbUDgArkPCCJ5R5Qes6RdaRY3GG",
  "key4": "65YpTYC4GCjFNbv1ZXwF8j2Haa3QaFrXFGt4FFFg3dpzNTWVEcXKFmCXGSVZrgJjrKqguKREyCj5QziKRZ7ygZzU",
  "key5": "2LTe862yVwCaevd6nBMCN8ggjubUgoWzj7gdBNFGCxjQg1WQMYBJYjGKpsswXRtSGJQGqC51W6kv6tCqnmAGivXX",
  "key6": "3X3ArkkchUmE2BgqrJq6ErcAQYuHvX5LCA53fnC9SpCyED57nC89dGhZ3D3Ycq7AjN8goY4bonbcY4hd5HvyYgJc",
  "key7": "2rfg6ArYJAweqKysXHzQyw5fW3Pr8YKbkYcNb2oywUD9SoEvomJseHCpAT58FvXhha13NqzNZY21Kb4okgbVSGSM",
  "key8": "22C5nrYZXyqPSvRLQrv4NndS78SoYhezA4fBpDWwwiASDvgoZxJU4sTrqzMt2RVX5JuByeTh4NPPPFyP5z8MPj1n",
  "key9": "5zzqptzX7dVJndH3NHzmLeMJ3v5KaULTndPnEm2oGpm9gtgGxtQcFGABtBDdviYsHZye88qiTdAQYPb8xka9NKBg",
  "key10": "4kTFRT9AsyFsX1Jh6Rcu2uMvfP6fEh6NTQGdRfEhiVoWHKGH1d9zvwNm3Yn6hnMKAmymQJeX3Cah6RYPebEKTed3",
  "key11": "65hbX5VUFEW8HTADHez22ZBDv3vq5HNANbhcGfPtn7QUp3V3aZw2Z6pEFyUwPe7ijFWq9PF2FapMb9sYWZJfroZq",
  "key12": "48TF1Y84YNTk2t6NoSbK3zsdM6ruUf8id1bkRSgWQkVMEvuWPPTXUZwggygqTmoH2nzJ9STVW1BjQGtMy2idz36M",
  "key13": "aFfjqjoNhE62oncFpW8WHVjDCT2vT4nA4uAB4dwNfASaJGEVw5EpHnpUbcr1M3ZunoPNb2hQa5pY1JkFaAzrnkx",
  "key14": "66ndJJT4d2Lt6MFdmHXgQ7ZrnEneKVCeFwh5Moz8hSvWsCBpANH8je47hiU3eeNbt5gJhwmn4WTFsLe2MPiibEii",
  "key15": "3ovqVnfPccZS81mEcBmgiRXWaBLSyVeUNuwZYRfh1JRdetViUNhZ4u1UnMLriXwJP3TxiupsNcpQJAhc5oTybRWj",
  "key16": "57xb1bud8HDfWHPUkfbmua4y2V3HcfahVe1YVekdL1xGnCPSwvYgsN62deRpA8x3gUGzV3yQZMgxVHTBwTxToRn3",
  "key17": "3nfFU7Lmbes1xof9EbJNsWfpE9F4xjfJSNGyAPmUNufWr9tHmpMQ54eebQZcNno1FBW7YCzx7o8Ro7b5LHndAr58",
  "key18": "3rJRYhohrznWjw8VMY18JoCsj4RThHvcCnpwENqYQFtYvhhv8atYQUob6QKyR6Cp2RaRFFRojBPDrd93PkBcbB4E",
  "key19": "3bXwJmy3HBrrWm4JNXacEsgEFMErgEiEKRLu4JqJcA8K6DnaS76An9cCN9ocAeVDo6EJMB1TKHZrJUVm7E7j1MMq",
  "key20": "3Ecg3HP24iYngV2wXtV7gEzfCEjgfrwhVL4Rs4EMZZfkojByiXy4CjTMwxKsdZAhrvUqwdGea6TYfF622ZXspyKx",
  "key21": "5WnfXhHk4hxqa77iuR3JBaui4xmc2rCtHCxM3BtsqP1fZ6jpfuAS2AoeBmSQXZqjKW3ShckdDJ9j6Y4vsptL6A3m",
  "key22": "JRKaJXfBt2HdYAtdpSZ394ydeLRLieVRtt4EyxWUgjKbnb5sPT4FwzYCngrbX7WchbSaHk1hCeTUswp7RjP4KW7",
  "key23": "4RoJorZMPtbQKX4zWkVWusWKMJyo5EbFMNFYSRQsKUKo8NNQtCGnypXCfv7HVEQ3kCauCR188EKmYUjWZxZr3AC2",
  "key24": "2vWzL1vb92dLueNCMzFhVbr5VgWxQe5MbHbiLAY2DZxm6jUpv27yqHAhL5G9S9YDAs5yWsdTNoiuk3xwdpvn2Vq3",
  "key25": "5zc6PHeaiXyxXw1UtYDT2wKt4GUKV8vckVDNwbgEHBFE8G7mPW9cAxEEWSvP3VmicFsRn8ojGZgZteAz7wsiGxcb",
  "key26": "mmy9nh77bqYrAtCFkbQEdjEHt4FdRatryS4YhNgCXWVzatPMj53Rg7eV7Dy3gNygqEwkBefgeF6wYG8oR2sTdTg",
  "key27": "5isjTK3jL3A2CjRihZNMKZ5JjA2HZF44nUEFL5SqCznuz8WAM6nNL65rKhEtADHS3LRFAhCPwCZuJQBTBGZuWRJZ",
  "key28": "5qcoC3PSKckbFmKyt3FswoYpwBJA6vw2mn3EG4aAWbBqXW3zb1c3WqDvPR52hF4eLqt7kU7mxaycmmagAWuRBUyH",
  "key29": "5dFwAXAEwX2mnbrw2K9NqNBeMAZ9dHREXsYhFxCijyd2Gf8AaaCdsnCbmwEGUkarpLESLUo5CL7LTqP6NLs6Tuzr",
  "key30": "45fX493sK8hsFVnhzUMsRyciXiN6MxNQrowetB3AWUfWCLj7hepETR8rVUbUrSa2YD4DxBwCs7voMSrGP8qwxe1U",
  "key31": "5y4M4EpHpio5Vd444yNm7SdhRriDQYwR71UT2eGN7aZ4HJSc3NB93CJvZH6sUyyfH1LWaiqi3YeDA2NdpHZVFJma",
  "key32": "SRJuG9a821KZ7jznS1wDBAy9burEw6wptaQyXZQmFR7bijrCSa1E6T5d86eqUszuWQPQBcEmpG2fgBj58JRo2WA",
  "key33": "3bX99QckJxXwMcG866nc1fnrbtr1zFe6HqBszSJYdrxia9Knz3mqY1GawP2nhhC5MMQboBJfCAKH4tbQHMLxmkUL"
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
