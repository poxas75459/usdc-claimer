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
    "4jFoYKQv4GcRZg1YNNs2tkc88H5Ddk7TMQh8bavs1MCCPEZoA1WgNsGdXRNYXPG5dwLHrBobso6njsdocwF52np8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RNErWDY7XF7HRxbcCGwshZVBV9M2bEufXQZgKKAqfH3dVavAUCqyoiNcWFZN3sm6X86bBsMvCtyHv7Xp1CS9XR8",
  "key1": "31ZEJkYCwUC6jiiSwWvhhhCqivd9LtePNG99mkzakPokuhUKXe95Z32zanbavZS6n9kKHgJ1eVKsXzXpgL2VEeP6",
  "key2": "2bzzJBX2yb7r5HdXUpVDUMFBZQfaB1ppzekt3S42RLuEaeQnrSdQtyENy9WL22mswZp4EYsEFqiyP4MffK3uBcWh",
  "key3": "5cn94CEsbPaL51VT62FCSaHQ2FzU5PJGN4nAyP5ouN2ScYadHnKx13s6VbMsrH5J3bhmm4PcNxMZ3XS9aUArj1jv",
  "key4": "439tKsH87mHHGLA4QWRhDPc7LNYqJiaYrEWQ7dXughSyf7YaGWe8sVxhPhY88CJjmx2SDomf1XYNYEfWakHPUp3f",
  "key5": "2Gy3CnzoSo5bDiDLv21WLRz8oV5zydZWYrTV6Ub3rmKZame5thrPAeuLAw8nRpDgay96vji2A1wv913wf3WxNvs2",
  "key6": "2k1oKJpZivQKFVQoJpg56kSTiyssvtBw1HJ8iewUEWVjSeG6Pp4ksz4B36WYkoV3yZx64b9u6PGAHaxo73Bk7bUL",
  "key7": "2z5vjvSRwC1HWCAc8w2YyqwXhNEaMjTjJQrsRn12C6W6ezXRxgyJqEbgymJrNiSGk51YaXrx6VpSik9SXdAS85sG",
  "key8": "4tMtuQYSFz44dHAwqZhpFpPgY6X3t4fpqbRmH8o3SFrXZjji8nwD85obm2NFkAvVa3abo895xZxF9hGv1nzWRJg4",
  "key9": "5LzjC2zDrqPwk57uk5Qz8BRSJ1gQSkagpZobVTe136qtQxXHXt5y7LPzL4JRguCBWwoKjkR9UzkHUuZnnc7ds5a9",
  "key10": "5k3EUkFjibAq1TEhnKLjTrHHS3bY3mi84DncDU3inf272Nzbs7Wy61z2b6GHjLQxbq3sSko2RwWLFoFMHiaJ3kqs",
  "key11": "4riLvZe3Ba6BJuVLDAo5yPAeHUmBfi5iJV19mSbQiAXpVM1QJNk3rBpD4UEwY7PfXf1N92ZMrPhhu7oKhRbSkckA",
  "key12": "51ekkXb2cyd3FZg1QNN7VF3Y5oXhRTge7YgjB4EfSHPspniVBTZe9XeUQ3mrz7Z36TXaiDUmVzG8ngNR1ocmBQc8",
  "key13": "4CnAwepeLSfueTXxhgwjBy9AAPa2WAEboeRcwobpwzfoGC5zN9tnU4SFeuTs5ZoC16GsRBqz34TL8xKASQ5jWK5i",
  "key14": "2cMJ9JTtzxMzNbHkyGVBkpysTUnzvWXHCgQihtba8d4Cto7RpxTSFbM2be84Fi9qQvDjq6NCxn2WNdJg11MwgdXj",
  "key15": "55JbEqTPp9erLs3rNHUjVkbRDVFbgW6n7DG3W9j5id8kSk1LF9hzvDA6hNt53LsNAKmxaL4UHP7EFsSCJXuTa8Rd",
  "key16": "3oMi6UADYZULW514bEBA13v24gwsoxkngEPbh6H3PZY2ycNHu2eVcT1jXQQ5JQLpXxznxiEWSxr4CVD98uFwCS4n",
  "key17": "2k1kxmJNrZLzgn4g6dntu1roJmrQ6k4G65KBZxfw8CXwzZ6RMvqqwrpEFfjAqA4U592QQfvCYGr1yTJypCT9G9nB",
  "key18": "2n1uP7EdGkYBr38ZAZHk9xEuJEFEQXcEbmRFvFxSNJKJMB77aivD7S2aTDZjM7TMUk8ghgGTubS1qbSmUvMJdEqU",
  "key19": "7oMcdbRJusdjTRD2FPutLzjtUXqq6nj3ngQC66yYWAAV5E9tHMoa4p7C9xZiHpP1xL52eEKh1JZb7waqBE9desC",
  "key20": "8eDTjxhbP9bje9zYoJmexLdrBtTyWeRy7D64a5xtKSujxffuRTa2fWjA9uR1MNsKAifoNeqrkHJV3j5EDRmcYzc",
  "key21": "4npeo28BUu4Vmt7hMJ1t7XPAcpggphnis57zmrLbJ91XcNLuPJfTZbohBdKmJCbdmoR86BCBDt7t2Lj4PxVwhLXW",
  "key22": "2T6bSJVb1pHMBh2yovAdyiey8mSz8zCNVkgLkmtu5EYRGztz9SsrUKVChQ8BaKgMBtpmeLfjpjtwgzsGngB2k3Xa",
  "key23": "2NuHLeU4KureQTa3jHW1SqcdF4K1V8UVYEaJxEaxnaYKCZtpUfXRx4KGrLbEW2D1i6feUBEf7Tbjw1CyX6LDNs5i",
  "key24": "5tit8YhNxz71iZUHgbDLHtHEsWPjstXhzYWV74iv4bZ8j96ubBt6HhjWiXwgD6EiC1zFf6f9GUdeNzAZKRXSNhRk"
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
