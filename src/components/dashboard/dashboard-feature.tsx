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
    "so7Y4DPKzVhXvnfkyz1sY98EmCDDMKKckCkNDexjQmuCjCXE112YuuHc5uFqgCemwovdMuBz9T8D2UcU6TXeLWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Cun7pGRpthhfdwyB6dLergZcxFVy5KHjMLWTjF3UzUfLNiymmVpdMHzxyfmdTSuwMhxVQZ9fn5DS9Y7JJzryNj",
  "key1": "3zfzsCQUW9eDYG1yYFH2TQhSjyWhHFQUfvcE2j61oqaRhor6M1Sm6EKr3omHnrwehTDTQBVdHy5e6AtBE3Myd9tk",
  "key2": "d2jDX5KwZZ5SnnYAL9HD93eQBfqoBN6Gx8xFxPSbMB9G1giWdM1VJyksvNvDwDYCG8cEm1aj5PSuvHzzWtUUGYC",
  "key3": "3sueWsRikzBJsf2o6hccPxuodYDTjRWdm6FutjTJ5yhQcejdnMzV9cU7okoG7QqgvbXDtLnj1hcfKnTgXx9GCH3d",
  "key4": "NxP9Y4b5c6jjF61UwMFUquGDqWiipXvPBEc4V4w8YzHN8RsXcU1YyF1iaFUai8VDQ9ARxZcsoHXf5VwYMxr1Hwe",
  "key5": "3sQJBGix29YRnC2qpyk6FSNBLvS2k6Hjs8YLBTQCWwsTEtS2YRnSzgFtJp5FBjkAt5LYwT1SAV2qfLooooxAqdzY",
  "key6": "36ik65vcB4Nytu4pzeNYaqYeqqibQSR8vbpKNUDvWccUfcQBY3YpZ8jZu3MSGqievQsGWMfcPP4JqxrfUSWupNyk",
  "key7": "41weHPU9FGYvmYLnKnWGVYXAYo4UEXAQfqnhvfSBM3KPPih9xYK4EF5z4o1fSVPp78bWh23xuS69kpbEAFz6kumh",
  "key8": "61upt21v2eLSa6hRvDrRZFgb7VHoDXessKmGnDx5Gh9A95vDfFRFNgSuoPczz51NDSFn2x1iS9QCyrwWQec5heRZ",
  "key9": "4jYPkYVewgLaKPH3vXKyPJTTYgEkH13ps2rbX4ZnjMRkiYzBhBShu255FBqTTNt9PxFAjYe2m4smASnJ9rN6WXBz",
  "key10": "3MUZbYMQaufWKUKGqp8YwhJwktVP8unMVMXfEUL55CDnTiRrJowgcm7s3BE1A1bZXTK2HA8kpQ5bzDYiGde1b5wu",
  "key11": "42tGXzsvBNjbYo9DBvhPjS2dsPFPXBMZFeRUxQuJRjBzs8bydprhSj7bnUdwMcYWj7rVFLJVejEbuXqYuoGGQVT2",
  "key12": "MgTdvrmuKvsGydRtwFKBz7t6nxfF5HWZd6B6DmpvP1GCzyjvvrt9dUrstaFEwLRhUT4GZYUoUJ8Y5rUNJmtbTwQ",
  "key13": "2mCpbQA48ihSYnmxT6Gh3sc38pKvfu8ffvNiiAe12gAVvNpa6oHKmb66VSHzLRv46in49Lh1Cugfoqvpax12fm3G",
  "key14": "2oWazSsqSzKj9kJrcbE6z3P1mPHkfLoyaugZsWUT5jvgqeRxuTjYgRT2YYcazYNdqHWiYUzvzqaAKAQvCRo2Tdnf",
  "key15": "4G2BkMdghA5GLEAfmitTKDTjgPY8HvMkwhhKrVxHNpaq3S963ptTzPeo9GbFG1Rg1zZw1X1VGnrRSU19zfV7nxay",
  "key16": "qgx8HiQT1Kh8C78FSFQgbiHWVaU9DxX5aWRCU3KRvqKUbzJzCVi9iCJwxocAenFjjZBaSUbFSNbvkCmdNtXvL1G",
  "key17": "4vtpnxFVgiZDxqffWrkLb4qBtm2uiZPNJRCc3WAGhaTCVvCi52nZu8hW4uKRhH4x3KDg3BGt2LgCFAcrxT9mvWWy",
  "key18": "5JDc28mDcqKmR8JfCEPZuuooJzwVTnNWb2FJ8xubpX6MLa24BHcvwLqUYZ7mXpWYNorkCie4c3TQ8AiS3Q2vdxWk",
  "key19": "jLxodPbKQvKtFDwYY4nkxbjtJifQibPaYMEU1aVD1MEjA2KDSqNBV1fsfSJbEydWwzS4dJErbLMPWvCmfy5A6t1",
  "key20": "2dXPaBbb2gWwSmkU9vodPVejve8Vsfk4aJ6SJGKmABYwTo6UeuhJFSiSHLDncdYDiDATVjhFVcY3ug13FAXJ5Xqd",
  "key21": "3xNT5p9265QeXQKyrHwY5JH6sMSnRH3EcT8Hhxs41YEyfWMWAfJGWakVsCNzZex78BfDzC19RJmv3HX1x9EmNSfP",
  "key22": "4pFVnaXjdBP2uZEnQa3KuSyp3RqyqpFEj42wnSYvbpFTBtqVpyXozY81dN9TjpfvmJwZCFZNReKMNaPCwYGA8Hnq",
  "key23": "5ojFkeF4BP5J9VD6HkddPBRd3fAgLCrji3xUiQwdwMsbyKZZ8nuGvkMnvpd7yVtmRua7XEHz6UKnTVGqycPV4x22",
  "key24": "53x4XrQZKWQMxG6QnPgMpGmpQ2rtgi2Y2HG1adypXsQVj1ZNPwvnCxjbY1bh9biCVnTCBToJzYeGm5FVPEeJ4qfy",
  "key25": "26ZQdRss2mTfhLz9kTJvEwQitDCRXCqJ1tzf47FCFEfZ2AxBdrNzYGNtquzw18Y5J1zDa4w7xNTA2wtZoWZgJtkg",
  "key26": "5WR9A5St5uzBTkTq6sAPMY3w8kK98egAuHDSV9jJoDTKBLMR5ohbJREAWb7yL5iTYVC5fScXNvu2ey6tJkKwY6fb",
  "key27": "2HVfJ5YTcfpU9oxwPH76rMmetH8PL2VDceXjcLJc3dLjkSEFdLXwNUnpEibt77mJUJE9hNjAZy4qGw2MSWr5NKFq"
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
