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
    "4RnRx9dMuwbDSXk5GeS4thdwzx69eLctmxPjpfWRu4rJ8KDqLBtBHAXKf8Sg8ggTDym8Tza2AMXeCe7Kpebta8Jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DFfLHbb19AbEYYhFxvVYQK3cVvfE3ko8PC5GMGqx2hvGDgtBAhQac9sPb8dfA24L3Peu78fjzWC4gZjvHs7m5sY",
  "key1": "oL5ud7ZmszbBx8xxNAbBgFNqKH3Khi31JMZAeZst1qXmawQs9iThjH2oHmgDUHikDnFFsPV4s8QYFPzuXBfLCRQ",
  "key2": "2tGeZYn9pWDgxuHt7iyZSAzkfxEsW91ECFXMnism2ugunkZ4Q9aBRPExHYsuTVWgDPE4WfaYUnvKAGaaAXt9944M",
  "key3": "3mABP8NuKTAjxhmBhLPJNh5GZCqUBGQjLYbWcv4mAT7wqnv1mfR4w6qDC5jybzhx5twNMsMfUxeh6DKq7ePfEUTJ",
  "key4": "4jZiBqNL1Av3r44HumNH3ZpG872KMEzqduCK4PfhU8wajzAahphzGzagLxLHgee7RqVZDawoA6skmKg8fu2xaNQC",
  "key5": "3mB9U76N3Ks1Kc8RgEDeuVZTZabFm5gGv67c5a67CrHeaBqd48vkY4tYJXb614XvNqu2fujC6AiUfytAnNUqknKB",
  "key6": "3TDwdGrMD1qPVvgtEANKikJARco388NHFKgpWx38cpzRvahAMoZ6Sf2oTePEwo3cHACgYBBY6B1BVKSvkBjjascK",
  "key7": "24FMTqhSHM6pHJkhVTcpTyJgGtECPj7HD3JcL8u4e8iNt4DP5SLNR1FttgbEx3G8W8LS23vtagn8CcaT7Ho39ZCi",
  "key8": "2VZTkY3fAMexmA9Kjj9c17H8j5FHXrYXdZgY2EtMim4qzXjWFPpdSw97Ng8YRhzFeb9DT1GspXL258oryAxqxDvf",
  "key9": "3C5o2YSmGT5WVVwLLsmy3wtCGKXDqf7eE7dU9srmFJW7KK4jrXAWNM2VXTzGBCXs8JXfCyRHPmEbLf7d659FzFbv",
  "key10": "aswxTf9ZUYCNQ9YcXcAxuYzwcgk2zoSD6nhTWMHLdSRTRc5qRx8ZKHiQhhuoZspghwdPNym3JLnfCKbAN3Ux7ra",
  "key11": "5BEr92JHenHLfQ1prWxec7xFgdAqhZznNR2mFDrxewxJdmdn9kH4V67pQivDXbnK6xEcxHCrZbmZfjyBkiPQUCiY",
  "key12": "2Uwqa7ExTQG4g8yqyKGS4Ld4PAZ1rSbQiiaYSLVGxPQrCrQZzW8Fw34BX3vmUWKg1q6dSqGLaFoYieyxSnoeK3t9",
  "key13": "5GmVNGyJ1JpFygy3d2sGSPpsFMgznjwZxzEfxxZVU4MXnZsXbaATTocUc6edNUkvSCJQi3N6d5UHNhLwfSe9YzA3",
  "key14": "3iPGj7hQidcMXYQELgQ6jukYVRBHXuAXAM7NwXr4ZAgZPhETcwX4Q3mzotBwf99FMxsErrNAkHM8m8VyoJcfyLrK",
  "key15": "5bfuKaLaDvLPiga9DRWP6FrRT21mGuLsJ9G7oZwgg4c4GwJTkmkpZUmnC4kQQoFqNUYDoqtq11WyDraRQo1eQH8Y",
  "key16": "2EcdN9Bcrfmx1B2fZ3EmaEjqCYbnRR6DPKN8eSxo1hWVtvhQVSSYckFYC4T7MBhewudyw6JatB2XxkKuMpirGMfa",
  "key17": "3AxrmDpYrweLuTUhpgaQjJMVtx3a9f5gQGkkbPD8don8dVjZBf8zxA94zVouk64VTYYDuV3reqhiHqmtfurjPvjH",
  "key18": "4ejvpijSs18HtEj18EHwuS3tmLwHsp4WBGd3mhAzNQfwdkRyXBrQJdyvYULSmr2yfHfcnagoQFZt6c2qkBhJYN47",
  "key19": "4GVRobVFzyqurVzVMktfocbsAyg7injANybxkXMM48AAwPzrSJXqiMAFFjLLZb2QrNuXE1btLnRtorruQ1cYJc28",
  "key20": "o9BqaygNvZkAkHDNFieKQ64t3JYxMcGSAcWFeD2WsGBiNu7uJqWMieV96dq5GwQ8ZnzCSSx4w8GuhSh75kjwERa",
  "key21": "5ET7pfhwUvUMAosT4RZ4XaieJQVquoNqgAAvDBGcyn2X66VtWgYB5Lhg4sv9oHaCgsgQbUcxRrwvvooARNwESkjB",
  "key22": "YJojtLZUo6eLuWL21hAiMtn3JCURLPuW4XsV9S78U2CJbLeFT85JBPgQwo1PadgU6xFvWZ2g7JVA1PDxAxS3Eqe",
  "key23": "618fGtAvmVCpV7BSgxtvL3nqt4h6M2nz8Y6J4bRn98qG7UaL8qVQh8goFFXFy2g5nozxvk8qWmx8znB1EUmgZrpi",
  "key24": "5TQT4JwaQ3BkPFjw1PG9Sb4k2bLd9MZ8gvjvVqNkBYiK5TTt1YsF9V7bVajsuW6ye9DZrvDo6vHZ1mcqUsZ4gwMY",
  "key25": "2hzh1EBC8UipdKHZvFUGBSJB17L1ajrqFx5LePbeUNALnsRB2UoaXnXSdrnDyZHkCvqrSnTWU8zxPCYXDZCThboF",
  "key26": "2gyGZiTuwQHSyAzfef6fa17vwcQkYxQzk2vdqfC7ZAgxN5uU43T8isqX9ALeUsxToRuAGHbVLdA93g1vZdE4zQfA"
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
