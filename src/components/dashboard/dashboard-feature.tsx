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
    "2hdv28jAGKa3Si17ALhWGA23KAPwtWa9R2zaW68AoXkwPcMLgVyudsGkiVxBb8iRXSGUSWJusBvhC1RAWuD6u7ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z4k37eKkVfLQAQC4nobe8nMMThHD2ytPJPFC256Va2RabbGuXHiSQMfQ1ztLLUssxXE2FpuTmTdUgBM9NXKvMLc",
  "key1": "3UV9u8Bz3bvG89VD1ktMt53Gh2wFaYEdCmg4R6XQGd4BQ9q2K4FVEBb7C3VLh8NvpVYvHdV6UwV4djTnkpJYkSi5",
  "key2": "2ZWk6H8YZj8zAD25s5RuF859mFft8mF7QunpkhifAn6viyfbk75VNv7QvDsg6ufR8H2PQBaxfhqHdnKBCqPoXW1a",
  "key3": "4vFXoNxmFWqUDNqSgR5rvE6xMy9QG5UCpkXSsmGqQqVTVxDAU8LD6f1tT6EXLyb4FmRZrAHqTuYCksVcQpT5TH93",
  "key4": "39Tb4GRHkYfUeBbjDDtj1qWEE1QxejM84nex5w6RKm1WAuW8qzovaoev7zjrBMdDfTUVo7f2nMwf4HEivhpVTDVw",
  "key5": "2Jjx3UUVZzrbj2DDgcggC9bKfocg8QjQSszZnNFtnbiBi7buWvZ4hpUJdPvBhM1oLaP7xuHLHi53s1TTCj9XTTeJ",
  "key6": "3qBMfGkTTzbvhKLQe5Tmg3gcUKGeimQpgoeNbisLPiPFDYwxmL3o4nSMKmFyvhAsZFs5yqeNo3RSBBVsGbd2g5PS",
  "key7": "4CcbEAFPP8jAWtNXWGgJFqNvNueg2Y3wLvFeUMxaqy2dZRPaPzDMxoUJTWTaN2GYrjikKpLjrcaazbFdGLVrvNtG",
  "key8": "f9Hou67ahijXEDoNY3pNrDjGcJePy1yadwysdRZJcMTQhPVDJaPMPka3tKQEc7fAnpkC9ETVTJTC8SxxHS4zi2S",
  "key9": "2eN6Z9JgWrZTEhDHUet5wFQVKAzN4EDosUtnyZwDF9A7yUegCiYmTF7CFEfqh1iyCopMcuzjYeRJf4yt7YQ8EXMc",
  "key10": "eUDB7vMzNmohjQttnGVxfSWm8maYGTjvzK8vF6PWnwPZtdPTBZ8EqdCYyL2a3wrj8wb6Bi2Pidt8WdHMMdYjR6y",
  "key11": "gYu7FcuB31yFw7K2mHkfhVGYeiHhDSB2vJ5F6CJaZiTSxptavjuPiWB6qApSoBFabdeeiRD4aa9Za8jkGLJCQSM",
  "key12": "4JFBVnqun5uL4zsWgvni8qr9uZYjpPPwLiStZaMvpDNLyFcaQTuCvDQ9xHY2tf9sLtUXy4T2YWKx2YhqePuEZey6",
  "key13": "3NBjESMV37Qnft8UfqQLmWD2AiQs2hamNoSTcir82Jmo6VDpiQqDm3KiwQoBSefc5eX24zk7GtB3GwWuywUveWwd",
  "key14": "3Yuis92wTuufwXzgUf9yncXnzAwrweVvxT9KUBzQ3SFEy8MeDu6tmMjFM9KsabYTb72QwRyADjjNuk3fLEF8HkFj",
  "key15": "614ZHfLm3tKNvCuWHxU1LrLaNsZSBKfNATwQ6RBF8xBz8kuEK58fwTFjSRwkKJ2ad3YwxzNUpucJvVdqYFhHmvBV",
  "key16": "5ptrX4kiMgwxkmVyHGCep53gD4gKNEMKtoPj3TMoYNVfaforvxB6vJdxxru2wA594sYy2HTVcke4DNQqv4ykgSyN",
  "key17": "pfRTz73ixmNfYeR17S5ECAn6PmZrnhtmfK2s7Efn2bCK8jAmUkgYd8Jg5Ng29o1ewAw6kJG5UcKn4iPkednSi9k",
  "key18": "2gZcERNREJzgacaAB8nFEWoFkRC3myTWsdr7zsFjYDSGvwCAMd7eF12dciYFZmvcrwYnMdUHW2TGCtXsVPWvZm8N",
  "key19": "2sxdTmbEHLJQXCy9NHJ3Fw6JXKzbVXgriBS3WKR7LBpx1rog3tDncDsDSWpTz6ppbBWBg8KJ9gQPLGy19bRpaCJo",
  "key20": "4MbWQGvDUi82Q1Tkaf44d3wgxGPX3t7DM5HPxFrWpVp5j1KZV61RoA4M3qRAGA2rZix6q2Ndw5NLTJUjMsyoEiwL",
  "key21": "4j3FmxpByN7akB3hUH9LiiZz4ANWvTS7Ew1pzvVGy1wGEhVbAobh9RN3E2MfW4cNeVRtG1fhLbhHfVvqpupz7YWU",
  "key22": "3N3chzcPXjCJEFKPHNf2PPkM9y7ZhvuAjvbiY6D4xK4BnVjWqsn7VHuywN6sb5fKoadMYVTqTzshznUQK6KwTZRa",
  "key23": "3RJBjUSCe3DUzPYgDTXGtgX2YHs4FD8AMM7FUVf9BFPf4jKFDMZBtvZVQrn5pybyJ9mCZvDz1TYbAMhT2iK8x9wt",
  "key24": "4ciT5sdZidyN598TVB5yxVZnDJtKuJKUsmunNMFJ5GA5roSU4xrzxqbMiG25fNWb2avsKS2SU98vtsPHruMHRiev",
  "key25": "5p5iHu6GZ4duzi4q3nSxk3qS749cSWSkrHHAzq8CWZNt4kbjcqBZfhd1tn2Zs6YZcoZQK5idsKmq6W46JUEgGN3Y",
  "key26": "2JzzrKSRATD2mZJW9kKwfqHhbuu379hiohospkd1xymn39b89ovJ35FeovhpcARdtsDwmyPomBvYwjmtGndNUWd6",
  "key27": "23QmTxYkGz4r1AM4GkNRfK68nUL9YeiBKakZ2JDaqTXxuUNP3tWEJ8y1d6KPAxpzXgtXPDDR1d8G3E16AHwJo9bZ",
  "key28": "2ZwJg9ucnkjnjuWhDScYpjcDBk2NDawzcHv4FEBs5ze65pVK8oiyDgAHDcBftYVzcy4JAugTwdfcFnw3gEzKLXSA",
  "key29": "BPrmDXcGjfjwVANJDoK8A9Fb4pcz64KCUS7pBSnYKZXh7ZeJjtQbNhMkn3jDDVjHMzyq7ydn4RgB4vMBe9t45LX",
  "key30": "66M3vqRd9bv8Szxnf9C1Ty2EzBBVXYbAWwuWXYJWcJvDyKSWMGjrcZYzWUndHQpMWbDDz1e3JKVX45jBMo2HmFDG",
  "key31": "fAMzRqjd4KwzVr2f17ytvSxaA2x52tST7uozxpTKS5gopXGuozjJ4MchgA7r757HeHkuZPBjE1cqRi6xZ2hQQKg"
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
