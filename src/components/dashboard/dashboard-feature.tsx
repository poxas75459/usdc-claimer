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
    "jqHd1CY3UmE3hgnHbxJW4tjqoXCVgv4e5LTtrT8U5ZrY8oXhP4qzUiycPHFZYMdcq9tqzXkq8qm2sZQy3t56KzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kteejwpr5gM1SVye2WwbJWJSRyLGBjWxUTJzi6S7ckQLrcPZzoy2bz7ZJmdZKS78sNrDBHKQfSpBuVWRuYLYU6P",
  "key1": "4NUFafPMAmB4Z9TrF3Las54p1Wms6kfYRaoanpynAcD546jAcu6GQCrLzfzV9tgBZyiByMcnAdtdgH3qh2i4hFWP",
  "key2": "3ZjTMpv2gBoqeN7jvtzD8xQtahpWQ5DDhKQxTbWoekaGDgaDrn65DiWRAUHnT78N6abYhcrFkxnQZyPphbQnkTQi",
  "key3": "1KuGgZtwnLDxD7JSuvrcd9FidFgziVJXVHxGYRJfCcJVHPy4WCYFFwE2wkDsfmUkjV1PLYdhjrn4zNPC9vTrqt2",
  "key4": "2on3Drhf22yMqNQZ81uZLVVMFCQS4uJeaiW1WmCbWVPaWy1mjBVsz2XrYHbHAtMpGBVcHxrr5whJ8eX1T5VWhLf3",
  "key5": "95J58aFiCUwjBKnXthLVFrcWWjGaJjbCyhhkvCJPf8nNJ8NjFQc7bLLEx2t8cqLP5ca2gkcDdkHy2F7j8TrSPfX",
  "key6": "ceFbPwKhYFcpWJfvo5YrzMfrF7XUwWzbTKr16NGf6AbrYFr2mkSvkyzfopqhyX39cDMDLEnwDfuX7UVvDJZ19sd",
  "key7": "ZH3pMUo7usJ275TMRhsiBLi5Uh67fGoYvShfby9SxiysvCYvyGbdVcQwssjpPNuPRpTvLYziWZW3sxTm4peh3Gi",
  "key8": "5DUdyC1LpbsVHfWNmAfLkh5UaGnmJnHLwZiwGCdeMuaumJeuZ2WR66PSMj8fqFL2PCkrk8QrQ3g98UEdxYA7NiPm",
  "key9": "5iuEFVNGdghnAnJ89fiZSexE4P2wyRVDz6osvhky9h1osuifQQLvJ1ZiVVVHoaG5JcwHV9hQsJmfqfC7wYqboNgc",
  "key10": "5YkM1W7Hcw2YBmw2qoAKK6eB96xn6Pw5EBqryPVLaBpVHHWZGAQZvZDo3sjwBPxe9HJJfE6Coikfydus48G8bHYR",
  "key11": "5X6R1rSyDCMzEHCgk9ytWhJpjyjhrVoLntmiDNGixMrTdvdeyxqbvuKpoH8yHdDVycNM265U5rvdpwXkuUgjjHnu",
  "key12": "3x7g4Y6aKXoo6KSyEJLwT3p4DBnGnUnbZfMDSqGBbTm48aHK7yCw4WHL5QE75SHPkzTEXvK8uCwn2Tigx2JDfG6w",
  "key13": "5TbpiT7rmYSA2RF9XhdgDQkQuxPWfpsSBNpfMNtokSsNAPZG1oiT9Pkfe6ucT7mZCLpn85czCDiVPNpNvsKr2Z24",
  "key14": "2qCKkFEjUZt2jS6DrrdGu9hz8QGUNXr2wB9u9kNnKnMBZDWHCCn2tboa7d4kiAFxLUzH5CjBfRc2BtCQoTmds2nh",
  "key15": "2LQedtuLcBu6dR7L1BRCEoAXZSEU6d7DJpydycxCyPiZpa16wgZBMwnK4KCsR54UHajWvWdMJ21GrpuM2NPprxU6",
  "key16": "3Tx4D95nuw4BLnQBqgpqAKKpJ82vCKRYcVYgG6MgEUGaxv2bDUHb7SisFAutzQCR9Y978KvtqJMUbGPapA1VZj8N",
  "key17": "xKWxFFJ2qMsccQfx6Hz9rG6UwEpNytBq9yxaXeSJhaoxuAZqnYGFQVbz1TM38Es2NSpKYmzG1J57cPWAgjjhRWF",
  "key18": "bjqLTcL7Vpmfa8BoVRVsnjjtJqdXUhJjUAs4fm3RcQw17PdCeeGnwqsxvki4AH3A39yvsUC9hkZPxNkvrX9S1AA",
  "key19": "59cqB5oteKcnqEaG6XjTxAnKXdDHotx9W4JcZHzrDXz6ovq1TTSau3UrBt9LDw28RmiLKRHWuz2JPLsqQdsM7dcU",
  "key20": "4YtJeXhxsvihDhqHZYTkhVXtJzLMXXzaMppJnZTTNFUTxmxUGY6QpS26TwA56TRSu4mXeMpNZxhC1Ud5HYEBHS8m",
  "key21": "4Xzq2WPPvoqvK6hQGXcfpn1ErgP5zvjych34yZSvPBLKoB376KQZh5RcTgXcsVxydKxfczXRG4edbjwpk8xfBK6t",
  "key22": "2yriAeHWo7kbG2UcqsVeTZjrM6aPi3vFF9Jz3zNGZ8wtsE5NhHU6YJ4Cy5Kgk9SKrovuSsWmAPSXWPLYiqkTnHxB",
  "key23": "3729b2gcPPFsvakVQEXCNAdLh2voisuLGTfVg7375YcbmZdn1kww1agVzh3tjFXrQ6RwhGZrhQP1s6Zq2VgF8a8x",
  "key24": "Ys89xyWshC47YnwvaWvAwbRiBCoBdZrE9PkmxRxsV9SkpMHrvw4Tk33jaoAcCsX7tbokGGNVc2upT1rb1Kx3gPP",
  "key25": "2NWyckiqeWAQUHJoPjtJeBsYyvLnRLz4rt3QhTTSjwChw42EBhQbZ94WnvBeZpLG59qobyAk93wB7v5YLdKCgzxi",
  "key26": "TrSFcXF7Fya96mTCjcs3iFcnnMPr24MGpPFHDpD8o46Uvtp6ijejMYZjsDfei7MjDVtJiim6DNF29zLU5RFo3Ps",
  "key27": "5yh63appT5Zg2zFFdzXnPLPzgWgyioMkXCW6EXsnp1RDY57yeSRqnYj43xzEFzbHVUyZhEQMw7XaRvFgxgPBNiUs",
  "key28": "mvUfCmr8J5af3X8eaRXTMTbsVMgwBQQ98og2uLwWUXjqStgxdwz9RdsPA9cdCADv29U3HFeF27rH6VWbrZPzkmx",
  "key29": "2CBTRxaCSsMwRwREbpfKujBxYxWsHJEy2JCua2AzhT4yNanPDb3nNAVkmHpY5w1NQPY5Tzp16NgvAhdXvkjB9aM1",
  "key30": "2UohSyRo1gr9U8exvaLPw1jDmZncQj6yqDuoG3UUM2w5Mf2BPNPVh8Wq9Gd74ubqgLcZBWJ11tyJ8EiU2HLyPJVt",
  "key31": "u8xbHpL6zricKPGKddeYG9fH7whLy5LwT6RdyCFTQPCDwKbBVVp32qLQu2jbZEMQStiL7tq6eaxuBb6naS9a9V4",
  "key32": "3KmPGxzpfFS7YpPvzbTnEfsp5wo4sMfmLkBXUSYgDx6jAqHtyFagrXj3c46KaNHpHtZ9NRwLyASBSCYnhCkzXfRL",
  "key33": "2PE9ZV7sKkb8YJV8M3zm9ZHuABFvQhx7UeNgBAgeRi6NYSp6gvBSQcbRD7wWfmDstruk2oUMHoMiX8otTg7kEZfR"
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
