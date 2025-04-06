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
    "5SK85JfW83o7fgHLt2XBsjTtM1QeQw7uZTef8PMNk4yUCRG2no9zJLxow53YJtcPm4tsTGenRgMr99ZvxfhD9vzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GqBtF1J1PN7kKUKp5MuHtkbHn54N6UcREst1pRGzTf4QaHcKdZSDVb2MLzpqDdNEHZ3n1x6AYomR64fY8FwQXHc",
  "key1": "5Q4BG3jBgLya4Bh1z9rvKh99zyzmVAt1Gq8hTfY6dgmxiz7UTLjajc5zem7iSznPU9VbsZ4W6N13SQoYqiNK4SKH",
  "key2": "cBX4BHYXHGJ4TfXKySwGvAU17PtftGQJQi9CVudVKoM1bMMn4Gq5XWH5RBb7x1cZvJVyZr2NPr3mkWNpWKAU7bu",
  "key3": "2tpWgoF6tVsKBSc9SnkDUpUE1HFtpJ3QfBV9wMSXPfmR7AtR9mNo5Mg5KCNcgkFpEHdKUyxJYY4JzjvQ7EByLAvN",
  "key4": "5eh3Fz4bNPKrq6ue52SyQBShMq9Ar3WCqFLoJHLEsb1RW1H5BVvQDRe5MwHhPiPt4LzaR4B3u9ziD41G7UKDs1df",
  "key5": "4vgw6adCpyTZergYZdETWinR2j3fBRtQdhq4sHogsoe2jxoY7LDFSJUxaizdc4FqKmQ7LunS638G5kAFJnCnjfXi",
  "key6": "36tkeB9qUa2mKMab1BBwjRUpULm6djxgCPc9TqawsaLRrQPcfM8y1fxM1H5ed811He7kAqyKcMRnc4tBLXXPBrdi",
  "key7": "5vcinvTKRkvombKEUtL4wTEDcRnA92oARmTsaociuj5fG29iwcHpgjnqvEquC7dd1SQ7ciEpvnsHBVDpq5QtYNnJ",
  "key8": "as5YopBD2YZFJfg5dQaFuR127RtXuL49iWATwxPNQzBj7tYgojz93Xv27TNnBKGvm9oT7GbJkgoMVKusu4HMUVV",
  "key9": "4kATXwFDARtZS7hBJ7D7En6kv6EMvM4NyTUFHA1oVNaergeq8yzpQW4ZGfD2HpMrkjM1Q6eWNy2bAoqrAKUsvrZ2",
  "key10": "3uiUnsV9aDM5Xv419ksVGnY3VAGmBSiA5TV5XxFFwfuH1pUM942xcyqcZECqFnWSmG2kwJ73yu5CHoUnWV2Eio6s",
  "key11": "49VzfZasrDt4nE7zgTH6JTXfRDQNijkmKoUFhL4oS67wSGY4pRcMUCETRgVZJqT6XZNruckHiSZMzKA1NQnDvfhK",
  "key12": "qYf1LYiWLb1mn42EfWadQtfoTcdSJrKd7BBDToFYcBsC1gW2CzZ3QMx4erXjKrJnTg5BkQDcBKDBeqpggcmVqPi",
  "key13": "28tdMszUHfGm8QLTDkoYgwcbCfNAofXrwRdZFCrV1gHwDVQjhceN8hbVVUC4GKinYJDkbm37SGteNJK6ecbGdN4m",
  "key14": "3ASWkXtPYgdmhghNZYDJRevjz3tL1Y3238wWsJHcB6cFef4CxrZDaLYnkhrh26JLXaG54MYHZeVuWF8hv8ovBAmr",
  "key15": "4bh6r48CvCZ68vmLt1Q3BVDsh9WK8ththb4HHAbtrXaAGwrHamGgWF1N1t9v5yrorxm4GJCg3x7uD3gtkUXSKSuK",
  "key16": "2zLQ2QTm5nXQPQdNnNc8X6bE686NYpvnNTgr7zM7sKQWTV1cuMnBzzG3tEiqU7JRuXT6Yxer77oT51T99FEcXeyK",
  "key17": "3xcAPvdxCU2bfDbpKiwjVFSFKFF73eS7K9c1ryzJLhxo633JfCeJt48CtJJMJpiTvo3fLJcxmumqp4vKeEgqz96g",
  "key18": "2BKckR4yFW9HLA1wmWcSMGwLvjarjgQZH1iLbqMZAB1ufaZoT9DxNyeKXtxXkNDvvNFspiSS9PSFuLfwyNb2qqrL",
  "key19": "5d3JeVPosroEMb5qkCWHDtRcRYJ6GYH4MRvSdNAr2AneDqfz7EstCptW3jqNUgY2asUYB7ZpRTAmJGPwEmDAf4cY",
  "key20": "26cUfQuRgXbdG96utTyCVr4CkxTsdj2Mhs9ojYVCT8tEvbLdtX3Gy6CQW3GxNEVe9LdoUgdjVQj37bQuVwZMA4pF",
  "key21": "3nU4s3qUCMUKbust57spcpzjapakh5vWNuduGdNySTMu7T84qkPvbc9Vac1WJvRJ3XYwfCxVvhidxvhs3XFp2BDq",
  "key22": "4biHZQs1NBFQqETWZuQjUC63hgS6mBNHfF3zXiRnANdrBuzf1j6EtEHVeRhQyA8ipHj3Pmz63tXCujF85p8Fuqwf",
  "key23": "5RvSk9sRuZzdEc14vzoy897C3zx4ieGURa7gjZAT9aUjn8KB7imsQpUrR73tccyeMf4C5gkyQbN8G8gnwXQLLxxC",
  "key24": "5n2UnMvmRFpYjgG2FpmsUhZ3SSN9JaNms3Dd9qUQ2suEk8XVcWF89PbPoSupmD2dfTSCuRSkVVK1w6j5mDUDzgpu"
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
