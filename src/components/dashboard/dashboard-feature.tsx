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
    "3mdd7AzWJMVF54ueAR6vfqo3peEyJYr8c6p2S1w5doBYtGvGMS3ABAvfEYnttZgsx8qosK2uZbUZs3dddFjHwHdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HFdR7tL6nX3VmXyz3NYSPH8kpCcdRwJzDcfwHN9VLFFu4mbRr6YW1eMoBf5VdbucVaG1W4cBn6WWsZJrAqGkLbw",
  "key1": "4D2dejPT2x4pu2TwbT8kM9NAsRb5XHQU3omRKdVUJ7kEMt6xQQqzMBNH6eVhPTkhCHhax9LCzmsnAms3FYz4itMk",
  "key2": "3VppXjkbmFLiS32haU6EAyxEJynKk2aDJmwrWyJFj1KYT3PHQNubzZhHbB1mGXfpBZVWQCfqcGyhfhYhannLygvz",
  "key3": "5H8CbyhjG8aeM9FJYWqkuP3rJBZfMQHqw9HbZJiExBFhqwopCtbrLcLN7B5SHWBLFDZmnhT6euvYxuM9Rm7vsFBC",
  "key4": "X9mLfrwoWt6QevUu2uNgpGEg7c47A32E1q2YrrXUF7nQPRB1R4wrdYsLWvBU9iBwEiZDVcUpMCzauvMokX792ED",
  "key5": "3BTMrA7YWf17JigLZG72q2fkdKpaSkEWaiX8Za2t4B9z6hzuugLfHgzzZBjivfXy3KhvXEzYXgB6JZzyEe1ZZAjn",
  "key6": "45sXygBTfMMJt6SDcsGBaKgSwi5G8mApE8xNHpcd7daPLWJE4bUUCRzLDBM3qtMteXd9PyKzw4M4XBUcv6xheKMu",
  "key7": "5TQ7pYrpdzGV22jL9ydsFiNWM14e9ZsfHLmmzxqa5qBHuMmcBsiknvUcP5ZZFBaAi3T5GygAMZ8M4vhTj3WeDM7i",
  "key8": "4D7vTf5JVd8J3tsBBMYKuVTejsi8XosSv6oZKUbBddWtxkvp1aps1hHpHnJnrpqbmeg1hKBpBWLDywWN7zid4Z8",
  "key9": "ehzVV6vbRtAFGt87pxcgevFAfpJ28QDwKKeiXU3uyqEVQu7NF7sJK5fgGpzWbVAP5F8gPQE2Yzmn9vS4QPJJsTr",
  "key10": "4bH3EnGVW91vy18wEvMYUEhLEiGF4y3p1ScNzrzZ3bkf4YCFsQfnjy2QcTcNSwoj4PybsTTdWWzTyYGJThwJkoTW",
  "key11": "3ELs5sMTvpt8CEAYDCca8duZHiE5s2U88gSkexmoudygCQ53gHnr2BVhtQtaKgtguHXj2LhsA2F4BoYuuFQceKcK",
  "key12": "26DC3ifsF62GZXuWbTDBMnXGZHkEPrBGJNUbC5yyfYbnEz8ThhiCR2f79U6sQJ3FdBwvECAKT7NEt1c9bAYru4Wc",
  "key13": "3FBdVrmYnhxzaVnCUEMmBHipav4p386eerTzSponHzPtTvBNnProY1yZTWuLQEwK7RxPrBofXVnSEKuPSghipHei",
  "key14": "3pjxW5SuQ2V6DmGd95A1uf5FJdYafUvc3XAziZX49ugd3JMhs1C6msz1i9kbRd4qzu3QP8NSgWnwQoeG9ifnvUjU",
  "key15": "5QyMKxTpN7z5DWZV2kVDczCY15aaqWGVgHQEJ9fqPZUxvghojzufZa44M9sD44XNHBPRNxgjandoWFjH2CWFzjpE",
  "key16": "39Fez1q1edm7fMek1szC9wf7HZrJshDRMXp89MgUxGGSqpVZ6h5uk9fveJnWHHhom9rCNaWH5KZG8ZBMUJhKWcQT",
  "key17": "5ekB1ecVViwH8isa6vbCwWyz1QrgxtkxCZFwAhn6puKdtJbfJgaxfagevqAQnvJQ1YVXCCbNtbV29kTc2gAeqkBs",
  "key18": "5ZhQd9q9GGwnYi2Vuk9Um5EL7u9VWu5pzMiSSZMi4hrvfoSjuDKwSYQwM2AKYDrsfb8Cy1AxzaWD8DGkoaPgWuYZ",
  "key19": "3XsdB4bnLTY68dpUjLfhKxMAdi3Te7fF5RBGwBqMm5BBCyrsuMXr4dEvSaCCnU1g81TjjtzvuaYsVmfB3gwjsk67",
  "key20": "2WpiUh8MbtDpA8E5qC9rY2dRF6nSG18WswDW6UYZLTpEaJoc6YhtvZMMLiM3ECpmnCkdtEYhpfxjjPtVuj2Qh73T",
  "key21": "2PwuKvSmypYSHCVzdqqwCuYCr6fpbWa5Xf7RMsS6oVfJPM6Mw52VeTDj2ooSeiaodPiqmEuyChPTkW7No9vA98D2",
  "key22": "4t6i4w3Snxk2h7NBHWhJpHwGQu1ngYE2gprwBpg9Sd6VjFKeMFiKaHgDwE8mmjf2N4ZHvB9x1SN2PibNWqDyDQWh",
  "key23": "XJvCVMGz6YPJLRNxgcng8xbenunrZr6SYX89mjtTNDerpc9JfNq8Ya5FapyNkwbcr8y7VYQadYKktfqZns61p1U",
  "key24": "2gPB9QftTFBodnkHj2ANLNB8GBpstVezHpHGupRx6xqBQHAxtDusHiv3EYvpqdMd1xgukgZdP8sN1xhMyfeHF5Le",
  "key25": "5RLx4ponvKwUji8LS9wZGJmYE4TRb3sZrBixgBom6BvuSrgRy9JeUy3caDrAxQqaMnvsvkFYodGgyU6dFxxkQMLd",
  "key26": "53885ybjSJUuQKaNx1gasfGwsQhzbM9erJkRYehYWVE5yUYPikcyTMWfaUNDt9GFtauoJ2Kvb5D3gHvu8TcW5cAv",
  "key27": "5PgFoZ48WBcb3kRs4MNtsnq56XDYVrABfJmJhfUCAbkn5kfD31aL98FQnmUMYaUJUscyMRTLWiMpXMaBBh6Q3Thg",
  "key28": "4e4uykhSYGbm8PASg1ebmn4Wy8xjxYwfaGPL744ScDnKYCgq2iSKVDdSWNwsou9mS25mjD8RhMqfmNk7w7tNLKVj",
  "key29": "24QiK72XKSKS2FDkDXebN3pxPVGtTC8udhMVf2N3EffGr1qmRkARDhH4r9pzsq5baXkKapEQbnmhmBrDmRPR7pRZ",
  "key30": "5cqqbgMg8CSvfVNY7zTs4S7KhAKqpJ1szQ7GVEk6UNyb7trfdRKU3Gn2nDFUYsrq7B6rG39ATtZwwTMd86S5jhaH",
  "key31": "Qer7b7cYDZChoGXTXmyESchSKgdNEc1efy8VVXArZz71MacDHxzkVMA3RhW4473WQuSUHzC23V9KkaADZd8pfvM",
  "key32": "GgQdio7CAk6ApdXjhhknECVohuDb7dYSwXG8HPRrLfsNkQLkaxjXXjERGxGNjmqnML3WVuxWPJ5v34PVJckcpT3"
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
