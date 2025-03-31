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
    "4FDZrpQ8SR9gBBcqf8oxp4Kfwu1Kjy5oYHwTo7Y5ADZqMwDVEotEPGkL6reT3qpXsP8fdpAUqaxWQVhnrQNh1hj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56nHQduDb2gtSc2Vu8qmdxmaxRtnmogdY47vnqqKSkFknSGZMEEpGF1HQCmBbRzAbEGJKRvgy2pAGZ6AwStMYQAx",
  "key1": "642RQmtUFT9gfrGwPQ4ctA9wYpDZP9i8qBB5sAfZXfmZDoHqY5SNF241eH3haXuvFDM5dzbvFcwet6WHbj1MAHzA",
  "key2": "46SBg3eGPFjbxwGgTpwgFnrc9qmWkwiV18RLnGxaGA9vExmGnoYV8scaJTmtYqwPp6DPctnaSbeqvqQs9Edz12bA",
  "key3": "5oSFx76VWb11J8g22bqUtU1bRbNvunB4imYVPBva26S7LnsgwWjTkG8BwF4FY6iwzy7aKPa2bueXDhxVEGPBJUjn",
  "key4": "4XoH1Q7HvxwmDBUwSH7v6P4MGS9JvvYtiF5mEbRxLp8rKsmDfZai7j9N8pcqYQYNLZWZ49dtToWbpuq4tLgfbWCp",
  "key5": "5rdcLoEMoyCqDxqZmg8nC8VbuQYq6rDznRVPaZxQmPTnvzQSidnnzqP8EpPUCVeyzNLXFTJPeMatwT1Rf5onGuHa",
  "key6": "2P7pTiC2b7xW7eNryX488y1hYjaFqWmNaeNxBeKMgpJLSPk2feAiMKwuH1U3SLaqjDKt4fc3H3hKzJJn6V7S9Xr9",
  "key7": "4ojaiLh2C8CzzQBftGvDm6fzM9DD8mqUVxdq6MLR2zZ1VTctWkRKp8LWdm627SjyCWcXFC7fyPcHxU9MeAejqcd5",
  "key8": "5Uos7orUr5gSHHmkk8GBk5DaA8Ny9GJprYbDkfUxjHGjboECrrrYuTF6iMzBpAXxjHX56xpMweD3hgXr11UK47bB",
  "key9": "4Dj814trQemV21wXNzdVYhH4cpKFfHjVVB95yrZ6kFWw2SkShRuq9DzS5yipp81CcjfMZtFDc4jGRDw6xoBQK6zb",
  "key10": "5vaN7jZopJiFxKvdc2ZUU3rpJuZedcnUhWFzRU3xG5J6GtTJjdhap1RhewetL62z6X5gfQA4c7BPjYiHkLfeRRB9",
  "key11": "39hbuJoNbZQoUMznccC6DPGtkaoNwQowDLoPwB58YCSfMQoez2ijLykD4QhMzvfeff3fZpFYLye7USzc6efyZrnT",
  "key12": "RcNh9T3EFow8wBo5LRzQBXzGPRHAgrVdLHy44PeApeHQuAyeVZBissQuPxX5WkqQvnsyZhbZtDYPwvWVFMYG3f3",
  "key13": "2ibRyCcarcrUX3pMe6rxeWJmxavbxgC4KiJ5Wk5uXVJoH1iYH2NvQaD7qHuRfhsjH8tx77vLZUHURGE3kjqk8pcp",
  "key14": "JgsDDvvr4GVyyhjoLLoyRJRweAJH1Am7M25RdCNptaNJZs11LhzP4nCU9ZoHTfrSCqnHb3tYpF5SCnvSRX9PanD",
  "key15": "3Ew6V5KgnAawx31ro7YvK8Bk2RbDqvcFEknXxMR78gdG2v8EPmCy43UykYb6uXyTzSTiRn5ytjHSqUd8pEooML2K",
  "key16": "3bu382uFqezrTVt2gKs3sJZxkmKBkgQssWZ2f5cbksBhy1SQp3mPE8A3ZdksMxaKmYxcAsdLzpPqUhDffMDEhzV9",
  "key17": "2zr4HAAv1KjtQCUREKDAsPMVKNapKWCigMhbuCktfiHchxseYYHXBkJWAaDoqSReCYwHztWK6PQvA1QuRCZooBYp",
  "key18": "5SQWXZ2tHaLr2XsHLmj4iFNwAZNEn9df2cpiBYxZ3VwK5jWhdG2GAVJNiD16QRcv1om1FS4v7krHm4J5dZvT861c",
  "key19": "5vjqD7thG5pa1FTmC4RovrqfgoQh3Yag4nMffMpmeSTANVxiQ3wBx3QJzVrw7fPFxWLj57t7UoEPj1nKZHWbASDr",
  "key20": "3Ta3XUmCd1XjZwXyN3iRn4LePzs7nv9Tt5kBoNwAtdbHDDya7ZfgDit7Rtjsq1sQCLN7cnm7yb4LRwEvxPSrqsp",
  "key21": "4Q5ZBHm6ZffbK18zz1VPkArVKEPajSPYQ4e9EkrqBP6bUb6YuuHyPTmRvyCVUFDPzAArG9UkjXiiiTZBtAmNB73K",
  "key22": "2fsG2YC3Gw6yZcZnvj3AMSQM4cCsf5BQsYD7gFK6dxv4XvoKpox8XaNSSXkd5DFNpJCN3oqm57Yrb2P73aNXW5AV",
  "key23": "3F4zbxVyC4o8G7fLwPUzwCinbrfNHXntxN6szsKPU4cBVSkAPXDVaABp1ex28PV6Wmkf1BPg3gRLmJ5EuKgHo3cG",
  "key24": "44ShG9DgjzyN5BwKzDaDcR72fvfUkCFT2P75nLzvuxcrNjsibDXstJj67YQJwWLc2YWjZsjmBQn3LmDiqDSk3rS3"
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
