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
    "HXJ654n3aC4JnNZpjHteyTMQExduoNTviPYTYN24gU8b7Tpt4cATrGcVNaNbKxwqYcj8B1ozivmtTXrsfXbuWno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VJgnFGmLTtXpacWk7nejWHrxs44KhqvwDSkB5uwUqsR1ro1rDNXiXiZyxagiGdVX5a42uyBPNE3bFDLA3ietfL1",
  "key1": "3LXsqJL9aQ3Hc9ad8AGNj5THDhQmjbA2wmZxFpHopHvvZ5PzUR6NgyPv1GKAb9H1Pqj4PdKv8kiBfWtZ2bLcnsc3",
  "key2": "3zpiNqTUySVNaFtBCwPsr8uNYxgW5YUtxZWwFLBjQw6ayef3Le67Nuzsv6iPJasUXQFCut2CHgZdtm2nzP632fa7",
  "key3": "3EccJfpK47DKPK3aDAYRwV4faS6aGwwc8Zhio5ZWFZxoWnztmJFMsymEoNFGQXiddtFWjaMKiSwtNUbCi7FZZpUm",
  "key4": "67KWjuqSQfNHAaGGa7TV36gmWSWXe3Z4ZXNT6MeQJ6KWq73aoU6mD7d979nzzobTz3xiZUn2SJhtsHiBmbXd9oKX",
  "key5": "3iXoYAApU6eqhaGRwQVPbj9seeDmLMCXqAE8Pxf9wXyL29DxJaLCxVeHLZgEyK2uMuP7cZZpcgwBJZoE9nKcCdLW",
  "key6": "5t46FB9ar5axAx57EQjrTBDTnYPX2bzLwm2hWErRbkgxjzjazERANefGAa5X7N41tbMJc4U4cBHXhvsacc1Z4jaP",
  "key7": "5YUHPmFmBnnZ6VLJtdSunycDuM2cmp8HGjwY2WvKnWUdqWAwpqYBvdHgcXTYNWzQFsrwmC8LxwfQDCfeRnZg4Z2c",
  "key8": "2UERCTqzqZxTdd6i2nzSqZLJXW1TsfYtjCFHQLwbccC3QhXsVGbZSvn3mLkaVN3bHn2TGNQRa686ExPv8qVx8Jbg",
  "key9": "3WfHEeXKnHVHoLecB4NjDyKLDtzg1QsEjJYusT4NVvekimuasu6kh8cns4GG1UomYNgHqrrcWFrJTeDGKQCp1Puz",
  "key10": "5gttyaEyJCLn4h8tN3vKtTLRATrTUPsmJ3yEEMizzTnQEDPmNRUWcU7QPYN6TfYJtXT7pzgirb6ySADXB9Zhg5W2",
  "key11": "2EDxRu3bfzGycgfi4YYTbNZe9MCRCrJkkuRqqotAzJaj4h9EbrH6p7tRaPSWBjzwXgPCrVf9zSGjkazarYZ5WzzA",
  "key12": "5JwEEgrTYLGUFMbpSRP6VLGgSqoR4imgpMhVHDteDPHRx5FYQu63eB5DvZ5kk9hxUU6xoKMtToAkVSw2kmyzjjAi",
  "key13": "4yfgexEgykGR4Qbrs6ypc4adnJQGnjfcnq5jGms5NmJDYU7Lgky5fWGoYBVEgGutcisigiGNb8rDZePsStsTHRKt",
  "key14": "FAudaQxL3j8Rc2R8GMxAi4Cca3WRe8SrBgNgbq43UT9yWNZqWGmtCS3Pb1gnHdfScFdJ5biCd2wL6wmPmzXLN3i",
  "key15": "4sLtMrCdqq2rzpbLPaJKBoFmpQpbZSN6wYKNKFKcGWoH1gH9LErAHmymQUb4GibxpGEaeXaLVWosk81tAL9UK4A",
  "key16": "5CFnsVFXJGhdzRpadJSScQeXiGhDoSHt8gY2hv2hZT7s4mZnT3Zh8zePAseADarrwFEMxJQf71noXKe2FP4AmBUv",
  "key17": "UxAGvu6jfTWCrzY9sYRHCA92xMTnoWMewWDjK8Df9rXjorysejACK1LZHG3BNz5o3toUvaSyK9AHWoiNPntUVNv",
  "key18": "3Zdif4wHSKTXAKYMovzzSf48K8bTmsoHsWBNu3qET2toYMgwFZBzqXwgSq4QAyFRGxYSyJYCS62MXAeorszeK7aJ",
  "key19": "3HYtvQa5y5HRPo6pnh9fCbSgGFdgZ3AZq9wvVNQ1CKnkq6xQfQFg4RCn8v4R7cQW1oryY3L1M2EKHUEWYgye8Ymc",
  "key20": "VH3DmddAVSEMVjsEAX2hh7J2X4yShSkENQHZ9L1e1w1v4JzQyq6Vr4ksRUTMttquieYcP1v4Uao51aS6VtAkuH7",
  "key21": "2ApgKGriWuT8WGLRxWcWRbj6DswUzscVuchj7CYgzF4WyubZHD3P46EjBA8cFjGrbBu4Gs6kFjxgBUNkTHk6EVoB",
  "key22": "FFfwBw4LkiHdZHiwmKgJ5evjERk2LJMkQ6Q8dEsnrFwr9KMXdkd13P9cRZJNauPxyBzAa8CnqwaJNWJ6LT36r2d",
  "key23": "5jRrjeoMpJ7x5ts1FeA4XztAftagqXNpKDmQPZ9REVZVy4e3y7CNDdcKTWk5gTtLB2b7sdQUJj4vrAyaHEAuzeZf",
  "key24": "2PpZVa3Jf7B35vvUqWTBwPE3wgwqkcUZAWKKeDPoJKkqdBB7kGeXh3byMZeRpMgbsUVQWjnEnDCH4s1T7apyDJvg",
  "key25": "yirsDtbEHp7YdKUjjzWRJLeEFEfhJdqb3BzXPQdn84TDwLxhXRyn1f1LmiUDtFLvoNUsSqyeyUoETmMSU273ueo",
  "key26": "2bxGhrDtnuX8wuxT2JRoYYRtmznVqD7KGcwvnqVRVHTPAt3CaqMyqpECrJeT93L1qx6mSCKsjzSUPWGUNWX8C3r7",
  "key27": "43oF4aiySv3nVDmVURzPLeGtqjbePTWiU3ZfjsNE2FPoBHvpq9moucpRAdMKwrsbKe9S1Arz59mScxqJRLD3zSg5",
  "key28": "2jFiPWutdVFw58uEgS6Y81DnAkhhm4TbhDDQ9VbathC69cr3AF8m7bwdG5fV3ozqG1VjjiytUubDpVyKvzb5cYHn",
  "key29": "5TCfJzoipryZL5MgVJhdKcPv9s8LRDZe9KfFvB3DUY9cp6wfNaUnBehaEZiSzmtkbn64LPUKWnKuCqiCd8J93Fb1",
  "key30": "5cFQxhffKjeRbT5KipHyRfacsWJTDZiQzFe3PLpCvq2spe9cfFnnrVFNJ57hwWvqQtD954GSDN5piDDamSrSiSt7",
  "key31": "4FR9FWTf1De1huqTm3TjLNRpmtHxBWarKnfbdAjL7D5cK69DkBcuQkBJ92E6WE35eWZPJy531syHtzjnGKcircvN"
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
