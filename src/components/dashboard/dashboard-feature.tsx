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
    "aeQTKWtj4KWQtJ7kFhMEvDGFXCpUAUt3nQXMdLo5pf7DvV2VTu82hFajVsTY2qTpPqPuB9muSPramuXPDpXtEUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X36TWEvXyHdqQBYy9RFKJy83qMBrk2xd7uAQuoWQj7Dmu4aHcPZm5bJU6iDQuWNd5RuUEPMRv1LLBqD3jEtEp7C",
  "key1": "zhkUfM8BPVibdGLmr75HraZ6e65svDzLtLR6umYQkiqjoSze99sDpqvhgNWFph4AYr1aa5fGCsqRSYBp1waGHeJ",
  "key2": "26urW3pPy1arjMo7LjvDmaU5abewTv86AtULqJLmiUibAX6dRKmxPgF14oifAB3GoaevvHgvVpAa1sKk46qXZPHe",
  "key3": "npWiQRTRT8tbtA8iTbv7yjLCp11CkKQaii6MWwEeukDDrw2QciGi8SQ57Jyeew1vRHWw1hzTpDC1GpPHF1Sz4V1",
  "key4": "aeeHs2LbLgE9RmH8Bd4enNpYFT9VUTXfaAkRsRjwQJiqj7VzSRZCzwzCCQQv1H2wFEvrVnyLeVt8a7RwVP3Xtct",
  "key5": "3MWy7m6pce2EdpiDpN5BPeBpkXx4hrkkwA9e12M4bezZcgXBZThH6hrdHRNuPMHdLuYp2vLPsM1X2zdRqTSYVNHZ",
  "key6": "3Z1tGNGEqdMkbYWejy8QvFfjKdunVXffLsKZNmhXgXSGoD6swJts21PAchbn33ehtWJUNTotoNBZJyhQfQWMD7g3",
  "key7": "5Pv6QNRvE2wdZ2iEF5oYKSVP9Cow6ngqNU5EVYCxkKSyYRbSnKGMQUzrx1SSUg1Razbt8niKLVrA1kUnChcuGkKk",
  "key8": "2KH2fKVBdoeRP1e8wuEMCCepzThxLWEdNJ5nnSsrQzJYb18LGbj2DxS3BdoUpgE3kdzEaChk7cVaveSmuqesGWpU",
  "key9": "3bQddS54k4h1b68na2tFLqSrXXUQkgU2HvaxfuKpN78j8z1G5WzfmWoj56wB5sAzrjgkHRsypiowHcYxguTzTxnx",
  "key10": "4xqNSKRPGZ6taBrFPePvHBqLkvCfjMJ2SYeF1CD2baFoyBMBExmWCN8WCd326PygJaX8HChX45RomgDKRoqJ32dC",
  "key11": "4eV6ZMmoTtyrpKm3B8rtbJGq6DR9grGoGfqNsA2AiPzg8bpxpg8h7PPiMJatrW5jTx6jqvnNuPMu8E43QcZnT14j",
  "key12": "4mTwmjSeC9XMZpVCcFdc3hJFKwtKzTdCDqmjadiJiwG5nuuMSeVHMzWGUqRt38dQL5S3buhfC9suRYLbuMFvXFDP",
  "key13": "4wmidUc3xn8W6q9NjRvXoMMqHyHTdTEZz7xh3TuU8GJ65ejk8zSuQ72hgMRqyn35wYXRPzKd4yUBrebGTAaFsSgP",
  "key14": "K5i9rZ9hEVZic5f51QmenKx7QfzoxdqZnH8QWwDVPAG1g6zAutXyPYDs2rVDBL67KHkc5KkpuYWxg1VqZF7MN5g",
  "key15": "5Dbum46zXfAbjc4Wnxnxu8cMfsEqovLGXeFupuXEaq6iKmuH3CNh39m7KHToXJuBJrnQNkF6K3tEgvFPYRqAKwTa",
  "key16": "5Rj9DrDtmxhSgLcCW8Xe5E8FhmDMd1cSLrLQravHW4FVw5oGJX8MGAzisbcYaxKkAiDKVeebmgJJGhVQa7kX15Ey",
  "key17": "4tDW5FqJH6FKxQ9YsxKU875fef1p9Z6bTMwktA2zpHdwZQkkFrPqY6GRQg35QtgXNPiQQmHWGzymjjvtDG9p9rxe",
  "key18": "5kqSB5ak1cBv2ysmRs7HHUkdfVr1CSQVQpwATn4rDCo8uNmis2h6wk2NYXmS6xR7WPc8oNK2KtGtoT2DPf63vL9",
  "key19": "5X7tKELZtcdNNdub7SHs9nQkSidVf921mWdsaAp3tCpCUGmVMQBvwxKkdvT8gYPsLCsPGPvCNhDEMa7yfqpJeJ9o",
  "key20": "5ZbDsCGSgC7yaW2UsEd4yKmicAPuGHMQXoXZ44NNPvo5v9uTKNbkMUeVodrnvv9voLFnm2urDXvdMEEgwHFzmvX9",
  "key21": "53gRQYDKbVrzBS3BKp6qogsks1c7cmjbgmR2eDfsEBWuTQaurGJ5TLgVELUXi4YyXXcuepsrSXBK8txCqrL9q7cY",
  "key22": "47mHBDJpojUKU4BuyaKCywGDWb11gKnveQxQ8BvR57iww544hUAwyGZydHqkWzatiTww6uF1caoWEruZiaj2BGBh",
  "key23": "4rLn3v4kTC7Cd5W4E8VhPLFKXqPrsjtDr5y9NZkK7mB43pQbrmzDN9sucbAib9KQPHY61mh6WtC4Cg7GCBxSEcDN",
  "key24": "4Um9m2ijw2TuK3tYRQ3xT4ycd3wpZz8zJqHWrkNgbqjqNeyKZxnZtHWXH7vwxUAW6z7q2TP3ZT7A4nVAes2XLmcm",
  "key25": "37ypPVu4NRWMfax8TrFhqPYZ2EY4HLMYyCnmAQ5qe7mHKktS8x7fyrmScmn5kpiWZepb3JhXSMo99kckRrQNq4Ya",
  "key26": "2zUJUW4cw7Koy3uf5yS9fYZAd3czxAtC4GH469WJ4o4XTrvu1BZKwNVYwjTVakD3C4ENYn92hTb1HY44eHc2jZ5P",
  "key27": "44nV8kXFzXCTTEfoP8i3xFu7swLKBv1wi7pjPzkjpEJxbE2TDa1bJCjphmLRSrQwVT4aTHkKLUyVb8caAKxTKUWb",
  "key28": "4PprvtRMjDiBsmnxPmRDrWtv5CPDXs7o3C4pmCYQ5FReLPWg3J7uMagPUZ4E4mmX6b5rrNJf4ogcPBj86GCcbKX",
  "key29": "37hGSasHWkT6BcQDNRQ8sQ22xNZ5nCJA91Gn8crz9ZN5QewEaVwgZfvZnYcwQpR2MGXXcSZijZFdzRZ93DmM86Ni",
  "key30": "4XRskTeg83pKdJe75ZuvfL9CovW1HmfyDKZbsc46hHGxb5us24VauWE8E4GdJqjeuaWDvbsSJe4V7ZDFgSsPzjD3",
  "key31": "29DGoVoidQaNofCcg9SKRxngKhy9w2XQpCh1AryiM5mc781XEQ7dR9RNHfZptnFMMRbbC2qRgU6kA5c3YYqyVunV",
  "key32": "66PQdz76zNQTdqzT9bNAuUC1YedBxzQ4fx9dsKiUz65PDbgcjZbUww35CGcjc3BUXNPMQBDZbCtD15GbbWRW7DYB",
  "key33": "5y4E86YySQMrHU2uTvcufYNGniEhgNKDeQajoqmRgGKGvNNLQPuFkdwMVXgyTYkmdKp1wEC5548ERdwGCLXbcoqS",
  "key34": "eeWysP2j1ykcK9vTutqVsW9pbSsfKuLozNojpYJA7t6DLdPxc2692N4mB5iH7mNZRWqCY59iEshTFe3DLJTdfKh"
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
