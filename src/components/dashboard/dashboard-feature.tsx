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
    "4w9x31u8MLN7Uvonu28XMQ6jKXr58TrKhS4bQBVs7EwPSPdL7E2Xbng3gjSurWE7qQdZ6gw6N5d7CbGC49FEWMjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NgdSiwjWWEbKfLChjjbBCqdMpJQy2oesReMeTVaHpJ2qhvWUEGhaB7tBrQmQ4CtAnkmnGCtTkcTkYYP1fVUMEeq",
  "key1": "inBvy6DsC7W63jDLhm96F9DR2w9a8Dg333i6bjWY6oTzgucMmUoksAeK4okQaX88FwRBcdAwse7K49b1G4pZMXm",
  "key2": "4GiVQULqPNvMbj1cAYzqTv9mype3fLBqoyUuwnYvcd36pVdG1p1PXYeykWR5hipjLkZchcCWekz2pYziBjEUrDKK",
  "key3": "3k9uGnNk2DdLyztWw5mHW5fUT1ftiSP7WHyQujdSDakKFkGfQztq5KQjKzxf89YQHNEiEcYLNvjmuauifZGSBkbZ",
  "key4": "3abHbjkKf62ivxqAPLA8BR9kziouvKsWBfwbHmCXz1AYHdNzzrDYDyJQv4G725ZPguVAPT6ccMLdbLPy3ZcoLsVE",
  "key5": "2mkZw4Dq8A9JD3WGEMK4mvGJ1nXL9FmhZGoh66xrHkZvY2etVHUSMRyFXUg4ZACp7G3mDTyqpjtJgG6EpRuLdSgv",
  "key6": "kqjfQ4QtLrD66QkRvPWoYAdTzDUtKSjbENbw9uTTACxr6n21vnedyhTdVYR2RdxDdKrBFRAUv2in9Q2aqy2E6Cm",
  "key7": "3cgLEMYeWMRcSx4jmxYqAzDV89UrPspwGJjfPtuaKracrM4SRaRrUq2ckLmW6YoPXm9MLW76CMgpQJSZiR3jPSmw",
  "key8": "4FKHi474HRzY21LP1gUhvL5xMsCDDRXwxkoDWove8MXsTsFwFtP4xydVWngK5ZDgVfXWMoMgbBUGKrub3NsiPV3o",
  "key9": "31hcQNjMVkJkEpKdHmogwhyT3taf2xLJqjPKfLE3s8i7GMdFL9rT5NJJ4PML6y9eejAZaiqFjce3BKCR8EA1bA6i",
  "key10": "2TGzVfnyBM76ao8viVJZZCPezt4LEpAT2EgLKNzqwBH87PT5soUJ1pQ1VCfWiGyHNtwZgyqBokLh2BVsyHTbRkJF",
  "key11": "fqWG4Xa5DMWWoAT7XLPoVBwTa6bduPBt2DsSM5NTJvmJJMNCRCffqXGq1bvmCVZkAcuKUYzKSHhebvstz7dXNQa",
  "key12": "3dG12jnDsyRy8NoaH9xRqzUWkQyoR5VgfXJoeGhFq2fs62dMJaJ1onZseYALhzJpa1bG46a9eJGQHkqUdG5T1NQw",
  "key13": "2TLAe8Suq7xp8iwLhEo2ZGgUF1iEtvJUPNEhg7WZoRfsugRXyXGrP7dYRSTLGaRqZQnqvamNGxBdSstTvcv71UUN",
  "key14": "3MmnuMRyJzfEiuWhDFQvtsrTjPjJJqwEy7Je5VNb9fuoGBx1yHSJvHnQW611oNWQX8xBXGVvVFuWSayhNkWESNiq",
  "key15": "3kTrceKFaAsxGbgFvMQBtbeQWhbc7jebbPLininkZL8RLUXmvJhvdjiVBi5GufDCNzqQmR45XJjEtVikAkJY85ug",
  "key16": "3Yeaup7fKThD9qARVjFAbFdwUyAy33vGt8QkTNvV1TbZBjKP9jUn6rQwZ1pb1XYQKkjwuUajjbNdti5ufLGPaoLg",
  "key17": "5trsYg663vfh36BjmKzuFtHZG3rwip3pVTjL6mXeto4RkbQFGKnHPBQwFmBvu1BRQMbYN4TmhGoTBnNp8GnvCbXH",
  "key18": "2q1XCVnc6CGeR2acV7Y25jpmKSgB82JVVVQSQwv3LUqWenRxrbWv6xjmg83muhVFmey18oSeNas7fChX7eUp3w1J",
  "key19": "pRzxJXcAyzNeVzzbmqrAVvWytu5on6Fjh9fToAT7fUMbyFH5ayRAMFDXAFar8QGFVouUvBC9RxLTEBvXmFwV7hH",
  "key20": "cr43siBwGE13EKT2bXJos6AwxueGLbQPyaHnVNEU3tzE2WH36KwPCjTz6mC7Bqf1wwPXPQ59xMMT6pbfATTqrTw",
  "key21": "2RQnEMeAL66FodrCRF2G4gZgEeSfmHj6BVu3PsweWABAfi2N5mYR4qB8LyLWzhVdWq1rEG3LU196JNB5FpKc92CR",
  "key22": "4XVGvwdKEaEF3pd2yzgkpLLrJKY6oVc9kG9vo2vvNQ5RWTcGQvdDZqYZYQaoVTSYEhS8MGWcBrsgJeQgvQtLZCPr",
  "key23": "4ZKroohxNa9AErLGFt2UU4Qs7q7dJNtt3uLoxgJiE7FyvCkGrLkqHktNYbmAnTSo9ZCjZhPzd7YbZ1mF4WrNeKYZ",
  "key24": "4wPDeqsnHxLfa8ef2HcRvQHEhtQcs7Ud6BfrQBV1q1Lqz5HMWayWwepSYDhzYYuxWGAncjG7Pp6RQbLSweU7tcAJ",
  "key25": "4HaXLTJRAioR3aWejTCjoFrun9isZY3ZKJfNnFcjjJae6ixcAYvmRNMz3uyyqiVr6gjZ8DpLrNTR5NpA57y5eUVr"
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
