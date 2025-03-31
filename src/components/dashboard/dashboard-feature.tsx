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
    "5uP7fuaNLHRXYEpc1Zm9KTAeb8VCeD2qboxAYb6Z7p9w9PCj79arHamWwowYESvFjyDyLfDL9nKgmKMrgpuDsqjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xTQMoi5c7oN5SfEzCAC5kCsvpMFf66QuxEffHQZGqyhkgjyQ36oVs9qyPwFiGrJZaUidfGQL91CUzKh7Fydej7i",
  "key1": "53wvcHfnm4Mv9HUgGE4aYGG2WMqDTT9uetEVShW8pWWnfPgZTTZn3BKXjwHEsK6SnJjVy7hkM5A3wbAtkNHKcEsN",
  "key2": "tMfAedF7ZG3ir3WRQZvV6EhEozzexfymtX9KpVv3f23nNxQ4bP388tRh3vRRFwNeuJ64X3VBU9qV7vxUkTbuVES",
  "key3": "276zPWR7fpQxrWy67nfik7RbvQT33pQiQCbEzFjbH4o46AVqrsnqFBDjEw9mGv52psjyu5TfjaL6SKBHWc7Mhr39",
  "key4": "31BdeXsQtrfz8gjZ24skMLdpi66r3DW5K949VxjTV86TVKg7Xk9mBpBUHjx3B9xYToEKuJdJ99QiipDkjJ7oashD",
  "key5": "5BjVN6rgVHcNX7mALyHfWV3hTd5pWAEUyViBaHj6QE59C7afFrR9cf8iho1A7fFbKm2NAUjjpcEqjSbjhD3pghE3",
  "key6": "4BCBAFVQuazApdkCMfk7cHNqKQjmnJGbZCSFtXaD4pP4mWffFonBXj9qUXfTwyDPDoYJ3XjueQcdF7ZeLUFVfR9p",
  "key7": "mo3Er5voKgC5CBW27RbthsStCB9QZmpCeLsbFX46uCDjaEtSmBKtjxLBf6UZ8KL3ToTN2XZrJpSgnYy4DXP8GRi",
  "key8": "5ML5PQGPkZdMiFCkEPasaam146gRbH8sXwZJRxnm5RmQe63fAZD5szo2aNPxW79A27b81vdyfdnALoUMjbSwqLcq",
  "key9": "62kBt9Qrian5gpZo6K2oTCZdqcj27knp3pNScr126jKFYdLwtWMCu76tiw3HqtSWcWmmYN2erFueonqetk92vcTj",
  "key10": "5jiQdqpE4x1GTDtWCg2mM8oAegMGgTmSgvEPkHV5VgYnrHmWkiRoR2NuAtqTfCuSEoQjqTkhww3WSATqs3HHjnWf",
  "key11": "4HHzVuFYLNTBfyUriaXbxwutb9Uuko3Gvj2Yy28VN2xSCFzbh4aPA8KLBSRrCm6UekaofUUpYh1be8nbvBWWZRzP",
  "key12": "3goQsUtQwaMQyRvpGWc87ctvJk1UhUyZaBJTWXST7UD6fGhEvLyHttcfZZQpKfKfLLxsBAZAHZd4BHcGKSsmdYJK",
  "key13": "43Xf1X6r2rCFzjqaweKV62npu9QsiopJn5s3juJzHht3FjHouJ7994SxnoQZXxzWY177QxS4TSdCH4w9CTEJmSDs",
  "key14": "5o5LZFM6s1K3EFTaj9sULQjpqBkz7ATwCfkXKxLRe15BGncv6u5MQQDmsw1FEoj65SyzMsRW5BPbuygn2AYMZCVT",
  "key15": "KzHTy21BNVq8LnTGWpUUem2UaMTnh7VWt6bMcjqfsYM847ZCA34AYBQwKUjayx5fV5hXVVXPWH4HWkaHu92Ge9J",
  "key16": "2x1KBSXH78mRxpeV2xKaAB38YRxVp4zKdyVBiPEvU5K3Hk9qMhzDphDktYNeYMNXhB17ezqnJNuTWZKgyDhZFBAP",
  "key17": "R4224AYGbF4nrzi2curzwksoys2khaJQELK989UXxe4dY2VeQ4gx4hVXWY15d9h5rsVmbTLB3g4rGFVAy6GNhj9",
  "key18": "4pEF9SXserUf6euo2rPzugTQqwhmCiwnLtyGVu2nCLSfRHFYbJ7G7UnHUU1yciqtHQzvTFggPdxqAm8T2NJTUX3K",
  "key19": "2pkuV3s3kkxKsKT6kgWfreBwDkhnFbByjoGV3xQRXt5KuJyefqwzWjpAZ2Ju9nKBoxsYYi8v55p11BRfb5yYaGEm",
  "key20": "2oWx75b4DV7TKRqqor3bGDaKQanNQwkSWmTiC2RwkpksinZqDpU4K4nYY3nxmKiXMUszAqaGtnw9rZxg8eJbnNTt",
  "key21": "5K2ipc2GsuCWdf8fnDu8vpBJcU4QcomAwi7UdK5SicmdEka3oPmgGhHEFGakoFivkzVcRrEd3s4f3Z9xotEwUfYE",
  "key22": "5CbBcCiFJV7mhEMNSDtWt7rywWrw9G2BVcGYf3srJrYBBmVJgDL4DWbU5GR26XQ1ZRvCaN15jhvpmgnRd5U2qqdD",
  "key23": "p846JtihYxUEeFGXu6g4SwxfUAhp6iQK5d22n8dCNs9RPKbJzY81kPz7dHojifxmqV3sBKgwF9HjUvTVc9s9AVj",
  "key24": "r7xfur3UtjgvRCLJW3kCMa4TsvgCqywiW7iyaVuk15PyxirD8fm9x93rnEd5fJ9MnQK3mzqiKsyAx3x6wD2Mi5t",
  "key25": "28be4G13cxLZYzyqTnoVgyjv3ihBUwmhBmhx2SLxUrUq4uYvabPRH8JVTEAJK5Yv5EoEWcPdyVz1zfJQraWQvbvE",
  "key26": "2HdwncFh7izhgov1Ma3y8hLX4zzfbYtvbgNzRNBAFNSLqDoE1NWjgN3YZ33pnZxzQ9LEvRrsJBSRuNnisSo6Vuqa",
  "key27": "5b473PSNR185XP7U67FB7Hhy35Gtvr3CM6xru4bquNYCkGbQwHXkWSMFpMbnuinS9WHpA5XUepdEUmfyXhRLcn7P",
  "key28": "4pAH9k3m93jwFFX9qsd9M9sFhsfSXGoaFS6VngecmCx9RNEhyFc9Mib37gURLHeG2LRfrEsTPz2pwSDzi8zAxRR1",
  "key29": "3DxEkcMabFC78BtFHxsqRu1gPQAG61dWCekqsGyJGi6FY3vsMkky3eh8kqwjgmftJsCAYXgPdXWCA7HEpQv17oek",
  "key30": "32XtFsAX6vgDws3yqjdFXnWcxEzTAbrAqAgSHGHojXhvEHnj2gbHCRMQYedE3GZrM81SGzW6Z2dQGjme6M8ngJsq",
  "key31": "8yeHV8gLQAkNEcoRerJ4xmxUz1FE8dRTUfwmU4dVTgrKWQozeCuZWsw8uuubbHjNxvQoKe8PgwMGyrfYd1u9AAD",
  "key32": "2fS1m8GQkZt19Mnzr7SiRJJLPQt51gH4TcCLzQbHogjjYrytAuZ1PXmiGgpSitcZbzHFk9AP6e76S1rdjNxktfup",
  "key33": "oVW38AXofrDSU3MbsEuh9uDC9PNoFa6v3pzpMMgMLYJGG9MPjxHvV2oYd3XGgGM6mPeijDG69E5fUxdaqqSR4Yy"
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
