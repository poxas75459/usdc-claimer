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
    "3GMdub4vNwWxRAusW3hUdXVgKKN6R5gLYWxDjrmoMqsnJjMmk76haGrDB92KHibVXGcrRzDEtouwMGPPbWKCnmxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tpEB7T37qBZKKD29ePh3CdhyQHCGSYsEi5nWARZm8NKyqu7jsik2yyuPAJdgtRvZQqrSFow7i9VwU7zqkYcF4xc",
  "key1": "2nkhoiZ7yez5dKMavXPbrqEbhotR5RoZBj6fLafBqj58o17bKyPiW6LvmGvsyweqwyNmDPoR83jP3YhCcp8McEDn",
  "key2": "28F6cdKc7TV9pfE2ueZ7vz5fL4wipgG1R6V77cNKkuBGVG16jRFkLb95YMdLFB2VjMjtxS3edXmwLv55FKZNZZwn",
  "key3": "2dnmHqCPr7EGnUvpQQYK6NaToPifsgFNyFC9YGMiVSu8t5UFCt1RVNMpjpre4QRWmtvDtSn5bTEaSfdJCuFMUSJT",
  "key4": "fzx2iPAxjQ4kyeAZjrx4Ktos5YEsEmDm4WJC6G6TusD96izbJJ28oUrzqZ9JMYyY7uGQm6a861ER6rBwwp8aahX",
  "key5": "4qh33V5JHjN4jxCebpAUcpHo8fLPkrCAYqsXowf4hYvjh36QcWG7PeYqXbZKPCRhUR5ZvhtLWfD5AhERBkzk6MGx",
  "key6": "5qNZYPtEjTEu56vwkd7ZZU2bsCyznLSbRaZjALyS5t3FV8RayjqW6xuj91ajWRRg6EWuvKmgf6gTiP6z5rSZrtW1",
  "key7": "2LwaqU39L19Y3KpDErXuuHiqtMuS7wvKpmCa6HyUppPQUiBwaR3BeEPbzn3DYmF7x5fBQLSjsqAEUdAvZG4kCVsp",
  "key8": "4pCY45vyzrg9cbb1aDpDwC3mkBUtVTbnc9nzaJ9eXsr3k2cdzbWPkJRVgkRBhGr55ZzL5tStbHGNrFyLRAd8ecnc",
  "key9": "4w5AtV9WGHkhBGScoK8M8gn4nSS1ygqYFGN1KML6eEwbLDV6mrVBdFDvdNMJDjSohKpYK1Q67YskeKqkwB4aggvZ",
  "key10": "4FYGXxqpdTRzJDmxbp23iGvgKq5L8UghA3c3UuXeypFUecRKVqdtgyoNFHJs5X4YWaUgYYmkRKa2GeaxDAWS2dps",
  "key11": "5nakJ6ZpHLSnS7MYpWWxSmQnAWDWuwwhWYvNoNgp7E9cqH2wh5E6DzVLtNhb8EJ8EeyttSaxVFHgjd3YrwMKTt9W",
  "key12": "3sHo9mBZH7eCdK4chwdbghQvnRbwt26vqzs2wm6eDoDYsHf1vocqS1QyJZjProx6AqpbCYCdWcu9DhBUVubRs7Af",
  "key13": "2PMtprWWREckSQ7b2J1YK4oafSf9HZqUFdsfVUpkWdMNDQ4GXRSm3XKhN3UkFHzbWDn9yZRUTbMYhAeVjJhtDhct",
  "key14": "7Q6PNnjxjdsHALwRnPRCrrzcFLjRJ1u9tEzkyAEcddEyK6sAAmAZHwWSfZwyQp2oXav2hctoXriEEkHXGCgqqEY",
  "key15": "3UAVpfZCsYcQDvgNggM1b7UPAvMQA76ZMBHNXwygLyRLThfBSNCAYs2DRRTv5hGFGC9a5NYekUTB4dswPyvmJtP9",
  "key16": "3mSKsNiqEsFPoLq5yYwuMsWWR9q4DXeuvhET9e7gJzhD3J5VBfgbQLSonh1NzyguJ35RSfJusYMmZzHZqfL1ZUEL",
  "key17": "4f3FPy1D5UT4djswMr2VJbvY4DxGFmoceKSNZYfMMpR9QZYC29ttE7s1qFVMd9rzpVrkmacKvrKLvEGiQDULHdFZ",
  "key18": "62vhq1jQoyi7JPaa1HkEbqosNt4YRc91scKSJweqzgzbzYgajSihtw8F4LPypg4u3ULvZ1XQ1qfU44dVAyGZqLrH",
  "key19": "5q9PzH72kUCXWSXRiCRgPQgtyqY8ya3qNxRvpwYzaCPyncWc2LmAr8TjEDWCF7RyHFgsvGzJj93VRV4Ej2JndwaA",
  "key20": "3AWPditgXbW1j5iy9sZvSeFPcKEXKJSZQmCWgjiGznXT2jYHF45rtXUEqr75tVdfL51vmiLJ9eUmZ97iK78JedA9",
  "key21": "3WBNqr6vSh8LuAkXWTVjUSVxSr2JrKwqRw5mLrbx5JmUp6xsWaLUDPhmFZwzh2nVhfADSQqansevuuLZC9pBpzDa",
  "key22": "23bpCc3zNju6bvPbsLY83sXYZvPgWHwv5uNuUf78yfu5SdBmc1U1pWRgthMVdEsPXfm9eXhq9CqyRygg6osui7hN",
  "key23": "5coNWesmyRsMVTR2gTjxAaRAP7ybeE85DLpNtauV6S22Gqoe5GBEVMDzUFtSo7GBgvU5yBgmRXdVYNpafkMTfkQ",
  "key24": "3HNyFsn9pVh4SRKLdBTd9oomMNfGVE4hhDNPEY1AFrd4aoXcUaTKrQJ6eHcFnAs9PXi7F9bSpNC33rjCknZHUzb6",
  "key25": "3emW3f8m8dkzf5JzkvBEHV5wRgAsyT76PemQ7CKzXrPkrdqvfq5ZVU9AtES4TEwe8ctCQCGe8VZAgNTELUST9zB",
  "key26": "ediZYNP8W6MnXxUji1VkoeTGDgbQhQ8YDyyeLDQhFfUnQ4KSMw4N9G1yrwvAvyTbWCJuzFbDXyjqGEsRqyoHZzq",
  "key27": "33p1LQ3XNGXyMTCmff4EJD19uKDGWLuhP9SFBwU7P9wfSmkj1NB6Dbrh95DUANndXjZeFU8PCE3WFaSUvykmdPwp",
  "key28": "3TpS7nY1m4hdxEfAo8CpqgRdZKaYTBYrQtWk8nfcEvw335J1MahCicg5WSnmDtwLAr9Ln6qmLMJ2RACc1S152oqJ"
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
