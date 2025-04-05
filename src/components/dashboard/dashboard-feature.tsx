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
    "3dbNar5hoxRRpQX9c6GJGnHsj8xpKE2iW4HzXEVgqW28kFqy876ergS5hKoMoVzHZvR6JPbkw18RZgDX3uRuNCe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mJGSnuqVJaFFEbC2NqoFfSxeTy2gBSh8q5aAiVueocAYDiFiRaD9CeiPJAghkeq6rJkkY9HywB6n6ATDyr4zrWY",
  "key1": "p7AonsDJtjqubDAhZTsMjbAVrKxHBoeXyA8jivgdUtYow1QhVssTmyPFn9iNbfCq5VSSQ6HCWocNkzwyMjHmyxj",
  "key2": "4PpivgeveZCP6x8kz2SZS4PmLPUj1SACWqe8p3P6gjwTBUjy9EQwkPa2PeuRRqzjQFSnttkrHV5KmUqC6RQYtMkH",
  "key3": "249Uc73Z6rp4V1pdyssVAByZWVmhUbyrKzDvNcLp9vi9oBY2MmmD9xNxAMJafXp25L7cq4mYuAEoXJA9jnrcVt5d",
  "key4": "2J1wrnBP6o49KCdss38bkU7oohZu4nkR17XD7zVHSBHddqx1mfHVjQDybbHU5burMQz6eMoAeHD3XmXP4anP5KYy",
  "key5": "U5GJveRq2QV8psnBjBiLhbENvQwy63mBVZEsmFD7opSrPuVwhE39jKhoko6x3BmRNdNhFduvj5KsrVbt18a2Ck3",
  "key6": "GJSUykgiQnVbD6pmAnoiPEEMwNARCg9QMnRnkk23XpgGEUW1avxuvMJ8WJfVuLFznmnUttL3BpRGkZ6xUT6ksfk",
  "key7": "2gMzuXe1BbjPefzF1GvJKMZStuxqaZkxaYfqnxhZa6rPW9oH8nLhrn5MMswo3XPxiiFBbqKXa3hGBaL6WmhYbd4U",
  "key8": "2wyEMqjcvcR9xsHo67PbByWXEi3V2JGjhUt6p7oc5cL9yEueVM4jb2D2SXwKcn2nGQ9aHVgArp3MVjfs9gavp62k",
  "key9": "2UjxXqLNU6VipoY6H847bUU9UXiyMaF1Qez4DtKBve8S9G5Y1tnwUm5x1nqnvFMQXqwyuvL1R6R3kM3fo92Wt5P4",
  "key10": "GXbMd3mTPX5jmJfBSSnPNb2Sp7Djmx56NEk1miKxh6zq4Di348Wyfvy9a4gPGfFjX66GmpvMqrr9A4kM4YXkDRw",
  "key11": "3YdoDwoNqak5wS4wbEvceoxCaZyXKukH9DQyNQd3ZXjuSKtsQM1mXmbbwzDFogfhd6qnzKokML4QKsa6xzNfJoCD",
  "key12": "FkMaJggVvaEehmN4kYPct5P5nkdFM4Kcnxz65uRMpyuo5nW39yjmxSa5Vi9pkJ6QNLDnHbVWjSmnkEYVWfUFWNo",
  "key13": "5A2C5Hks9sWxfLR4jjndwDqbzhbdWxspcrBrfeRwfFEXPJwwGi9v78CzHd8r7A1pjQ1juTgP9JXM5gsL3UPKppo6",
  "key14": "3KV8q63aBPGQEfQGS3NFZ8jesfeZmNi13o5cSb4YCjG7aq2NcgjwENafiCq2Q2VYDauPQPdFafN4pqdPADNZyjkA",
  "key15": "EhjqzqLh4LC5z5xtHvcH5HSMWhZbrzczRec1n8w5g7BKejELwRxbb9p6itVRsRCwABG9Q2Sa33W2bTHPTjiJ9YY",
  "key16": "3rX5kwwTY7DP3cW9awznRJndXvEhV6LhpEiz6XwQ6Xt9YzvJpu5wnNmWm6CTiE8cUrvA3MrmVT7hQ7FwezzNJNwf",
  "key17": "kZGiSMUvvpqjKxLKSMGmjBbgNaDQz5RQSdgSvh5Cx3b6qSPf8FkKwZ8B4a8RKd8hbwmMNLDHaAGBubhHCsb9zj3",
  "key18": "p4fyRM5J1vmufj3ck5FNWKVuTL31KUQucjqQyudDPNUcP5oZE1sZnwGusbc91Tn8Ew7Gbssdnc9NvAxP4vCBHYM",
  "key19": "3qeJnVHyj4wVaFzbieGo2ptTa2uZSNrTSzDFXPD5WJpM2HMufshon9yeizn561YATaLvgRkhDJUMwLk7Lucw2khX",
  "key20": "2txLGc54UFzR7EMhqFfXLSdYmwYVQAW2jgWejSu8WkXqG8g4xZg1uXtXWnVekUeNxJTze8XWoMfFCHjKoGsNgp7Q",
  "key21": "3SNnPUtrtHEb2EVgpunFq5VgWto5qo4KeXRWA4vKA3DRzxm2idm2hAgHXLBGKssS59bh8bPRCdvDcNomRv5BVh3u",
  "key22": "4Xsj8PhibtJYsdGUZPGN1gT1avJFKnjJ6HMw5BFpsWNk9MtA78TdG22KMRTksodnkTcGbEKBUPxucKugw5uQb1e7",
  "key23": "2zZV5G9rey4B2gcKtGZJKJFzpihL8KAFfahzs6vaC7p5BSmR3z6nAriRvD1QQ4xMbazgeS7ijrbmw6VSLQQwzDa9",
  "key24": "5iwMZdw6UHhKiQ6uXWsNtDhEg9NKd9QrEcPyCQfU2mqJGMC9kThddnvFEhip2yZpm8t98dfLCXfjFUamozHBVrPm",
  "key25": "5LoskutC9wQeP2ojw8mVvDa78aEXeCHJFd5JjMUufU52eRfDm31jb3hw8GV2x6xsLS7DXgLjMtKgYTzK2M7rzPQj",
  "key26": "5Di5qMdSLwHJxVkLWWb23NGoCe6F4qE6UConXoFV7i1pSw8psv9arSjsXnChEyzwGfkjG8pLs66RyFVR5SDXsABc",
  "key27": "44WLNtg1pYH12rrChDhBdymqxgau4NgHrSJnJBxnhUYZPmXsmDTaLbdbH2nDTLbqZEQknEaxUW4BaCC4RaTEoe62",
  "key28": "5yULzorgLrWQBgbkrCsrkftrD8eVj8qFNjnVA1LswFmrZ8PRd9WHHrJ6y7YPjJndPowUrpVcybceLpENeGkhxwEz",
  "key29": "5igq5Gr69wTEk9bQbKTxhp3QPboL93JUseVKAv6bbUgDqA1VRM8wJoB62J3ZtEB3HvsbGmevAqv9QMA7zqtikfDC"
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
