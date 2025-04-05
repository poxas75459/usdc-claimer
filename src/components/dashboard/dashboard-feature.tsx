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
    "5T9ksZPSUJoJXpqdbbzDbFpPBthQSqvhT2ByLbkHz38mgEsu8Ar5iu2fo9x8a7rNx5Pg1PrF5Gu85GhAmVqb6GXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67tSk9hoDBc4K1bgZG4Us7P95ognXtsEXtEEG7uCSiXXvWfUMfTS21CLtgrVWTHrPdSL9o3j3zcsP1BbG3Ly2pt",
  "key1": "5PKA3kukpjAj9CFudnzbf5MZ11PzjwzgHBi1Q6ZwTXbAVz7oNKihf1no1urW5TwQRJdnbLeE3mn63bTtVTpZu2y",
  "key2": "5VSYzfLGxYrBCi1eDJLeEpQm2TnAaBD5UeZVV2wmotaNkYQwk7Aiib5AvaJZacusMUxjWy6jJHAnYzfBZSWToYUU",
  "key3": "L2bNfAXmoKdimZFpijugSZuKgj8KM7Dg9bXvGw7bRdsG8XPiTTjaE1GnzDdnunRpu1QANVk8HuhweeHV5uEuf2i",
  "key4": "SbrhT3bxFW4udjGo81DqK9E1Zuy7cnLsddsHSYRENKRDqP1CqaoZ4MmHY6kesgWyNTeWRfX9xxGdyvG7QJRBEA6",
  "key5": "4hgGmj7yKcxD2fmd9mTmf5J9NVjZ2Qhs6MqHEhgbtFUjfqyGyhExMhF6nMaGs2NWv7ri8i6GN3z7zco1JcsyWHyW",
  "key6": "3LGY7fvK4UhzRaPca5UunbRt3T6LduSrRYagba2VTMi9ToqkU5BdnWVaDbZ3VSvcK5SYLLB4fbiadENUTbNhTc15",
  "key7": "2sSxzjwFtSySqfCULTq1ydT7WC6coz36xQmpsKVEPJ7oeRfDVMwhCExBj8sX2s44aLEm7HxrdTLQyMoi6hEXibey",
  "key8": "2v9H1K1m1eZsvf6do21EACtMLRjwR7AVdMT5ZWCnftYvPynjDhfYcvrvZxZhMiJLgXGv8x6sw1EfS1BwiJvq5CE7",
  "key9": "5KoN6tXb6HiFtrAkDYV1scwZxMzJTvgSPMBqhp9MqaW4uKkxSPH5vHHgRody1igBZCPo7Der6sr8GQkLZ2ZZRnE6",
  "key10": "3sLD3M5bhN1ZgU4SR8zhrhECTV5Vv33Hget2xcA27D5Y2Gx2z7t5dwxxjQda79ywgsdUotcfwd7bugQy7jDmHc8R",
  "key11": "3Gss7DXtSgm7QH9kqGdnZ2jbVZyeK92vCu9xwQMvAQsABY8CQBq5zHs1oKt9ZmiP5nM1pyJtCLPr4ZbVPeaKDnot",
  "key12": "4hmk3gNiLLGfrA2fJU3V9gArVDgD757dJdkak4jsWgu54ADRF9fSm3AQBwQiCAV7Qbf5n3FbYhhgVXWghYMoEwvZ",
  "key13": "3j4vnGh7hBDQQqwfmQ1dU3f1vbfPWeqes7YbP4MvYBijrhz76xNPKwLfWJn3JVxhuAZUngrBTvZMUWxDsBnuxA49",
  "key14": "5ZdJZ6MuAPA89zhsqfLozdqsE8Kx1czYo6mxiZJA2jiqnQ2XJkwTfDQDwkft1ufjcfrwxsshdXQkhFp683ZDVcXG",
  "key15": "vo2p7FcqBdCvts8HVTRb2ydpG3sjuL1nxKsbvtYcyQeFRkNkjwBBdXSW94s1BJ8Jyh4ytthdmgAeFtZsbQghyAZ",
  "key16": "5sVESpayo1JGGXcZdse5sjcYkNJekBMRT6fQN4x9ELTCPW2K1Ssr8CfnyFVTkStBANqZDdt8cEtnuXdKnkc183dh",
  "key17": "3tyf2XoR2RXMSiG5vYKZ5ZuqfPnDzGzBuhiPzRGoPZABk1gmdyCRSsxn2BfGji7XhPQGZq6xgyA2TyTGX2rGJ5VZ",
  "key18": "ceXqixaM2CsZx6JBR6WAQ9QKdzQ2G6tDhk6xEtdTiyC8QexKgeDV37Typwarxcjbdq2r1QEeLcAhMezJPTqRJNf",
  "key19": "3uiQaJTJY8bkTthoAgQqC4ckPXQvVUqh9JnjFVA1GrrvW4yKsRWLuzdTgiRP6CM8eTFcDnwXLLNBMjQEpjRzpp56",
  "key20": "5n9M6pSNe7HYeUHnCnfHeGaJQsZq9fG5b1ek1WhkGpq56p8h7tbgUUk8iXfjXf1dEK14VbmDvK5ncPDfzuU49qkj",
  "key21": "4DMqsVc3pbkcKReZyvEYgKf5oUXWZxzTqr4HKFHPLvEvQd9foHNeFcpVgcjBjyRUGoTaN6qtFpxsGeyh7nsBrDPD",
  "key22": "5npgzWnfWSFkXba7TYCSskMcv8ffMUrL8v9YoeksFPqDZJH2UvE7MktvNPsyVzfAFxGge73Fz1L5v8US1DeVkzSN",
  "key23": "aHbjxp53sJLspfn7bMChx33KSymkNvQdT8DMTd32NaT7jsQs3azFmik41JKdHS6aYksVbTSKV8GiCoqDe6EiUWd",
  "key24": "5Um9sGRcV3aUA1crUgYsMY9fwYeh4kibk7KZ49knNjNu1ZkBGCgvKVMhiCUY6rKpaFZRDskZ7aHeNsGn2kA1Qfj6",
  "key25": "4PXbJDL6E6mfEUPNaro8ido52t5vDYCqHGJPifcw7Xzn4g7swYAbzEfeEXzLowNhXNvixoH4g5fKDLXTpVmQbhzH",
  "key26": "3WxoeD9eqMPW9RJSBXLGQP9CvWdkBLNemmb9xAydQY4YS2VG2nd4c53U8xWnPhfLMSxC8CWHwbXADE56Az27agT8"
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
