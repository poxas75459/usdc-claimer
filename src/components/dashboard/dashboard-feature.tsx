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
    "5wSKyvZErm2WmHAFTqQwyFjijF5uexSoGAikCAvj2gpQJ84r6rV9xvf11C7q5y14WDAgPtX1bYeZhjPUeCJ1J5fV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "585R98vpvptxyYc9cnRdaA7fZwWNyT7ipUDzmctnesN8Z3WZRbf7gNEeVCUEk5vsVecEfQkk2nob2Kpdwcq41x7D",
  "key1": "5odoGkfAzsaurvEDNU8TEpwhqyaqkgXst5hKcafsv7iQScPygm8gmytGdCsMHLncomx99AHsDWLyAwsvZXf434Gz",
  "key2": "3aFxBxDxMg9vWnfagkQDk5E1PApVvG9NBBdu2HdbcfW1HMGNU3N3hiyPTzT99Vx6iB9ZgQY5h9SDUGJ4spKw9Cq6",
  "key3": "21T8yfsnxvMDCo1mut5mnpKJYo9BcCeV3RhQFJw67GhzVKQwQP1wTsAKerNYQp1qLfcabSygjivPKzU6LY178gSg",
  "key4": "2C1Wt1V7SqRcQvn76SCPwBka85KREbaUugnKHGy2xyovynW9YTjeHSL3KfTHZC2rspVPVdU8FUdV8GmFXdTSjupg",
  "key5": "44iR6UdPVdxt9kpTKwr5WkqTdYPAdsBpxVRkm6QAxijwFkNPfKuPxJ1AAHGf1jysT8hy3b9Sh7cuB7o5ce5d8F85",
  "key6": "4HgMjccKTwYhfpCNghfQe2vik8oXszz1T8xj1v5KiCdpVrHMzDobSiDWtcobpGpm88q4wCsaYmpv414kdSSni6g4",
  "key7": "4DP5Y7PcRArNPFUo72nV1ZZHxMhkX1P7Kp8NxdNbGU1szK1nYmcUwrbjNi7qamL7t8mg7R4ArZm6csEa4KB2uCzF",
  "key8": "5bGmRNowBo6gaVDmdDvRdf5QSfnZSaghhEwzmW4NQyfGDihZB4s6LZgTGriU3nfTRt5g1nMyJ9FQtc8xwAi9x4cr",
  "key9": "DyzJyQNnzDNXy9q31VtqtS5pzL3dLXmqskbHsJCBqB3p7yhRYc4yKb1wgVQ3LyzXQooQvavDHZpZuNjUHwZ9mxX",
  "key10": "bbvRorBaW5wU6tTN3thr1Uy4FsA7LGBJR5NWtbnbY6TiWuFAZmUCjKR6CZU6HV8YE5hnXS7Tn4xqVTBXxVDXAdP",
  "key11": "5RbmwEo7tLHkE8hoewgNT3BwE6oBkmHSo8uaniFAoVD9UjoxTCJLmHQGxeYCBbRyStiewFwZB9jBnnzZL7ww4Yuu",
  "key12": "3Z4Jnx23YpemjPTSNHifyuWztDHt4Xg41yKmSYTN2FkjSj1vM1ReKijtJ1NW12yhTMXu4JYX7ens36NNJwCHyw6x",
  "key13": "35icMMjH19m1oVWDXFrHX3zstcQDjNGDPuPyxay4QysgBctiMYoSSG4NMUzmVv84XBAATGpjQbnHyqrwtYGgS6Ja",
  "key14": "52pGWcoZzC4yxHsdjdfiExnWSQj22LTLxzSdprGKzFoCwWmkokUZVxGDDHsCZRfXvdcQPeXi6pfeEwkj9Vf3s3Q7",
  "key15": "5LsZaqBvfuWuUq9eMQooLh7Zo7hqJcj4WXQ85piqzfsBgjUGrM2JMx7L3Lz2JsbPYs1yGVPLLGbw7xvFtfQSw2LL",
  "key16": "QoenB4783PoTgWZ75yiGpRMURB6Es6BKhpcBbBqS2P1vPZL5Bojmt8rrE454Aa9Y1m4kt6bijuiFPYM5BR62Zkk",
  "key17": "3iiJgnG8SHcqVRsqto2quf72f15NhSoxdgHnwbcLJXM6BKKkh6tEQbJDS2HdpLsNHeyG4HK1vbXJ1U3cqgjYB87e",
  "key18": "v9xJKcnGbV6dfUUk8LWKf57W7iub3pJe3tnbvmkgndGSLNoFx8nBTGqXSzDvdQHscmjaGaMyAYsnZL4wQuFxg64",
  "key19": "zkG29gdh3wPUCCV4kRq3wLwdtSDj7cdfMSZuu84mirjrXmjvQ3VP3ZPyKeaKEJwTx1aq36nNPbT9Th1sHnSAc9n",
  "key20": "5qqMfsLDFstYVe5gRmFiUxbVQpi9tK8PjCEee8ZDT8a1gUJGzhsBdet8UqQSSbENVajh5xUhd5eimz8rCytpBmDe",
  "key21": "4RN4goGSiSHgJ2Rp8vQBsv4iygqAG53hWt9LGNJadsV56bJjzXJY8WqnrzaGMv4yBM5mTKUz3tUGQqzsZ1SWBoNx",
  "key22": "4j8QwUCbww94B9Pnpe7Eti3DVCJiaDT9qU2rxEZaJqR5KfUeu4Kj7ve6vRy4kwVKcyDeGCsgzvTdhWeyJB3hQ3iX",
  "key23": "2yZu1RcvMJFV5n9CV3KPMSu6iy231b597tvpJxwnZhSNQrJohD8rCASTw6HkwBqAJHYB17XroEKoz5GZRv21Y7iX",
  "key24": "565tme8s95m4P9NAii76hfq28sY6EpSsJW1Fy5YQQtCcYmvTTYdcVTGEAEqqkdh6hnjff1zmfMQ6FDVRs8U4nd5f",
  "key25": "5xYWj3K7yiTtwBVyMWWCN34ZxuHuEbGkGewErwFMpTUgdAQzKusHS6fvRABJJLX7Xnd1123n6nTSi79U1xXcD81j",
  "key26": "3EPUGy8ofXo3WgHxGN1vspXM5dAwwzcNhD4nmwbCwNafKXj6PQ5Kb2pmW7o4FCpJfeBvLczq2oQDBwuAnKAsvHYx",
  "key27": "65EpmxMg4eJ6PkYo2PDLggwyRiyaRyCtXYXjKQC2xwWuggS1bepxYJ878BkQmEt7VkeDBLRhxBPC3zrKvaYqjX2Q",
  "key28": "2mRVrKVCjJGAEeHUNpCShukSD41HQDUayNrEDXkv4hS5fV5gpAa7wwrQDQmxvX9XPW8peG5FmEwpEw79iB53ZV9u",
  "key29": "ywsXj2QUtYrqbmh8qgbYuCYozVkmUEoX8GUceNGaGtsh3JnuuoVSqrtU8sFSqBDALVktHGAmRDGVRm2wmHVq4rB",
  "key30": "33ChU6n1Ln29h4xraD4yCZPwnxZJAWaUkHYWZd3eJUekuxki6Ese8CZ9C87FDsJHwueW4ttNCXWTb7WxrNFKr2Bh",
  "key31": "5ud4Vu46Kb8fG5HgWBeJJefvr9xo6y8fcXmzuq9fxaXbyQKUoG3cKSnkv4qDW92ghBmDPotnbHDoJefbygsMNXka",
  "key32": "4wMT4xzTsfC7wJoFpP5TBXLb5x9QjiMBk6xxSAv6D49cTyxSFP5b7pXhigWifn4amuGZoLe8NyhfQAAWpj3N9Knt"
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
