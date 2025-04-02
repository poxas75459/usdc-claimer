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
    "2Ug4CtXeRNpQX83Lyn3iaHEm9H9AwsCYcvDEA3GF1nWwQKhzDm7ybzvXAGPAwAuAt3svcpyXM8t2eHo74sE2TsbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UNa95iy35hVg7KTLDXYnns9n2Ufj54143CyhQNb5rGkpPAzKDwPycWdD5JutghsoyMtGh8FVaoJ45RQiLevGynz",
  "key1": "4aijhEtHJYWc8GzS34Npo1wSL4jGSH9ph2wkSA3HkmAWM5QU46fUZPTXbFvXeEe4qn2hxXRbxpkmr2kSQsQ7YLKs",
  "key2": "D9vvcx85YQP7gtxcUR8zRnFvMs6uP7FedreCQttDasEd1e9zGZvCrRbvPRpzxeDhBR3C7G6YrDe1StNChkt5RBH",
  "key3": "oUCdTdYye43aJTCE2Af5Lktbs3DMwVTxponTi9CkU8RiRo9ddyZ873Faof8uWGm9XynragxmGeeLbHQ9Qn6TwyS",
  "key4": "CoHj7vtDtraw9vpCC1CKRMZeNzKBoJhbnJR7zWcDd7osxjo9yT9o6yqSFZogZ6HFmLzar52iSXhKnFWfFtbiMFA",
  "key5": "4CF5iUm567EpoHJnQSHc13SzYECh2nCh4un3pzoXfyic2kMidPUPHmFVKANuJgnKggVqGt3ZuG59ktfAGAQSEVMT",
  "key6": "tXQtjV9RErpL3gUnyK7k6B3LpXii4CuYsdWBR4Wi5DouKuMHHA15Q2KWfyi1xRJfP8cVGULybsK7szuSMtYxYMF",
  "key7": "4bk1NbtizBocF7YSisPQ8xJEquktKbrcutYyBqYmwogEWivoekebQXzcUZKo68aup8Y82ZxPs2e6UL6Yda4JCHcj",
  "key8": "3gy8A6DkN6sWhEE3bzbcnrLcstAkaEjAMZghYp5XXs5KEpMikQGNCGH4adthCHzffVMwiMFwfWmeUtLhF9GEcnRH",
  "key9": "U3wcmKkVtTpXc5ScjVLjqLj1KTQ9Z12LiDyUmpxjuESdg4Ty282mZCMoyaYfpmgEvv21KoBtDb6NQ86bDLShzkD",
  "key10": "3CUDhckTj2uPqcmDTdjCNXp5U3WQtjuSm4aCu5iuuoEt91H4uADS7FnBGQxgezqDruW16QLfx8h6TeNP1cjvY9cr",
  "key11": "3CrqBoXnJruiWAgjSY7ifedeJPjmcKXu4yKGuY96Uc5sN9FzQUR2axwVqLFVVU3tuvjVbj8zr2VugGqthQ8KgL9q",
  "key12": "2yCWERjUmtxzg5x7giNQA9RbusYjvyEuLhjBcGKqoy1RB3H9G9umVfWTKpWhfmiSpmFuM5hy4CkVx5D9rn4rSvYB",
  "key13": "5VXuafyuVLWAc7YUCaZNwJFNRbp1ft6bej6Y2JtieYH685SuYBGpyUPL3bScYimJgNtT3dApL7AMucAiP9jTmwuc",
  "key14": "5TN8oAPkMkbc4uPn2zcSgC1ysR7wx4NyhJ67Z7YhJNFXLHZnNem7zT4duzPPKnNGtnLKvC8BNWPi5MLij4QznHsM",
  "key15": "1YbJ4JwdWepiLzd9LQD9AtqjWpKskz5bxRFL7tQFZ3QiXKiLsgRAstfkxpbasCGHhb1DyN4gg2D2aoPnPnMni7t",
  "key16": "3NYmVSq6CT68v6eYZ1X3kTFYfJYSRBUy7fguDtzv4wrMZPyYzMNh5ibHkCasrhBGcHYs1WnaacsPW18f53Yjz9Hu",
  "key17": "4ZN28RegQznoqX82JLbpypATaeuP1grbya3ekHndHf9aMiUw7pJYVLwGUpMHJE32KrF6xEEJiy2zUfjzCzq7b8Mk",
  "key18": "4yxtSBuY6rEwpg4bmkaKKWa7Qb5unzbT3V1wxsG2eLiXcDsrafxsoNvJWVZVFVg9TfAsdCwDbGTpEyVRC5dvS1R4",
  "key19": "3t28i9duhX543TorjFttKEp4VVnvX1WnEYMpj5T9PuptuVaWXFUEB4Cjxvc9oTxfRURh1SLKBMegia4RrpJaoDz4",
  "key20": "5UcaC5gEwVvXDHYfgzJxBAD3mvgo1E2K1o2S5qabJKUMKJ4kQ1L4qPPVxv24PMjSTaQrWJ6E9e1UeaEkVaDzuygj",
  "key21": "5cgqiGaLMYguquLM58GB2755JjcyouPNBNE1aa3PZwRcvtSAKLMRtp3SEquJURHfmxiYd43fFvsRviip9fNpg5S1",
  "key22": "47Md2rdjGafinnHqXoNzHKs8pepJMCbRQfyPCXd5uVkjrPtHuaw8gTQgUdq2iddmJnoraYPu7PkfwNd44QSwVD6U",
  "key23": "rJUK2GiMTTdBqyd1BQ7k58GrbekbebRUPNpXQQLsW9UDFkShpo4JjJqLMtHeqG5UvReU6thsLp1Wc5WC6rFt7Ny",
  "key24": "YGLwToUZXkZPZW1cBX38mD1n3ZQo5BUCNqFs5qtAghx4oDtjaYGqcWGLcm7Asz6jUnKcjDXNpTU67mGejHKus6v",
  "key25": "3adabbhRm6oP8fhLA1fL47xjHsKfsisXXqUsVYAJ3LBDGZkwfcbKWjfTvsb7u8wYGF2ULXvn9MkNHHeKHDids41T",
  "key26": "pBLQpBL4s9w13bUXC5DPek6EiRK8RJeqrG4KNVJuZrAV8yg3k1WbgVNnyEekVKfab6rjoonNMiFKbwbaNUGNsAp",
  "key27": "26UXgqrFzE5JPteihbR3B5rk557ofsjPGJQ2pVhMBPfRNvJ2VbuuTqRGKezQar3PmNa5rE11WYZGkRYBVQpjAV1Q",
  "key28": "3NLz8o53kMANBKnHrU4tkd8cf5Cyzype8awRiu3YeWixz9T2Tm1nst961UYfiGLbFmweSoBnBKxrhimWZF9UKSxB",
  "key29": "2QcceQk1ZAnTF65U7GxX9Yd31c3BK4mgzNW3BbhwSJGYhhGKcnxv7rDHvmDr8NFY8LfXvjG8DywzsCMc3g9pkPe6",
  "key30": "2V9Gsha2NHM6UAfKA8pjY5XbTm9L7XyExv8abPTxQmHYd5gFp1YxJBjWR4NDY2Yes3L3tLjzAnZir1YYBATLwhVd",
  "key31": "4FW3DaqpmTzYVjmLCQQjPiiewAJ1jdCsXb9CxNpwiTuKGPF1To1k1715ZLy4ZQ4SrWAhaHKju2bxGxaoaV6gNG3P",
  "key32": "5pezn3t9oK9Qcpy7Kjb94fxunTvzNTE2Hg82zfupuAcfh6B5u9RQvJt2v9pB9ZBqcxEsBaiBeF1K4vuX8R1G5i2x",
  "key33": "27Khh7PBpg3sQfEcHnXbSopczqKX55MMcwq9tQSoB43Q9KRWSsiJFGNAaVzkU51QT63q3oMJPjGwFfBEyuY94yAK",
  "key34": "4mo1ZNcdPHPJJNgQeW512kqW4LX94Cr7KVHdLucX14zYgEebzkvR78K39QJQdvDTWR5tEKXbxTdTYML39i91A3dM",
  "key35": "35AqAj57ty9jyxxj8XuxLawewQLvSgqyNM2nJ5Xyz7dm1vQepXYcjy3vXNAJiXb2LXYoYgECQhHgcpcSXtFRCS1L",
  "key36": "5TXsbiKbef6wWE6KwoYCYUSubRBknCgKBDQQ56eyAyVRNvfBS1tb3TraxofZ4Zrevzot68jfrpTdd7fpZNeQ15wh",
  "key37": "5GnJqoBCJpDrJY4PN39uXpfUHCbXJ7j13SnDjbAj5qe9D7Mg7RH56m3V5ktBCmY3XmzR16qAuggTHk6TK4CUKjSK",
  "key38": "4FjuKfCg1EwAg9Dakxv7UVuS5J2fQhVdfnZu2gQc5p9x8f7ZAVE7k4YSFWHt79ydNZomyNb3WdFAwEjkqjRWmahd",
  "key39": "v6eSiKYytpzQwmhCybdszZPEd4QMVr1HWhf1RLx7MfLNpfuicrtLGcbfUExrsvxrQY87EbRiG9qHQmQhScF1oCU",
  "key40": "2ebymnLQRdJ2Z3qrP7JPcYQSxyJq6RC9ZYUEL3h6Scv3MhYZTSM1VK13YEHfc139eMnCfDEYovyHRWu2A6dyQZPx",
  "key41": "AxstCMuCtVDhXS3vdW6FDnmQ48qHnJkUtN5RFY7Aj6yTxsK1jRc9Cv829U9pnegJzy2jJyVQmeWVrDW39KXQUEk"
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
