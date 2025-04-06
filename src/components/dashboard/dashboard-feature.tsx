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
    "3xCTgLQkDgkhg92GDZYMAuc2bCNjxcuEutHTMt9GR3XqcwKy98BXwXXqciRHRnkLpJehJsNRZPphiLukP1QqPcFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pdr6nbhmGnU4AR4EFzFEEHzoeZnNKMRMF8TE8L6gtrBimCY91es5XkXwRSptwWeQ3MH58HbV9SQMHz4ZCQY4WhG",
  "key1": "2BCGVH9JkxGT9R2pwRgT6VNiVhCQtWk2hc9fezQhz2Z7QLRSGeaXXCAtBT345jDXvSe3QL6vnmiqCkzvumBqgTyf",
  "key2": "4E2GLc7oZ84GL4yCukocoMUjY3rZpsDMeScixk2meMH8tVVpAme5BuwbZAEtTJrBr3dCwsMks4t27PmGhqr7uj71",
  "key3": "4GN1vfgLDfmhRED3AQehEki82Af5nmer3cJSEC1kBCZMhhsnAbsho9d8L65QJTBhcdjAGbK345FSC7L16mmpabfU",
  "key4": "7hfnzpP5dzGid5d5fELmpoQcS3V7qxDBgeBmPycX9eu7dT3hE5fQ9m16ksoyxiAb8RuVdN5zeFM2JwemRatfYYD",
  "key5": "5tfzw7b96wDHmJ6K7RWTz9xFL7RAvfwCq8sfsrYUwqRAintZdvcWKwABKdgB7JBkdLULgs5KKyNTN4iaBUfJAavN",
  "key6": "2Bagf52bofctogAWpChgeAadSR1upPVfzn6hafodTpAQRVXjHjaJrrzRy6onJECDjm5gwovGLbm9BKk3ixge5QwW",
  "key7": "62LN3DoLhHHg5vtYV5Uu4ypZU8b3ddwQK7NnfkuhTyfhauVF4Veqqx1WMaJ67r8haRt2F9SG14XdXZPWfAKvq6y4",
  "key8": "3Py9UwCV4DUt6QMyZyG879UDQnDmeijR28NQdfncws2d2X93xd2MyGji4yeawby761A6hT1ZvYkSjpnLXyC1pbSr",
  "key9": "2GqDcRBRVHvVeAXmZXbzrWnAWwFffiisJyN3Ji8QRXksAJFRwKNxsovmb5LpQtV4fCDncjemBBrmGBexDozg1Dn5",
  "key10": "5Yeb1vXzqEv31DXxePNNfURDPpJbSLVNGXMjgVGoVXKkqsjww4kELcqGWkviShxkrNtPb7pAkMoNLBPebuDDJy2a",
  "key11": "4PVjJxJKTeE9oZZS3cFQVquzcSccGY8dVxwTupG2cF55mLo1mPdjb8PihGDNLPSaViWiKaEbCUyViYeZxdgBP8GM",
  "key12": "4GSirj1ERYVXAFZDj5KfG2iJoKTMTkVwTEhywPQJrGQz6HPKHq5PALPqBA7rN8a7Q8TZJ52yFxQ7q6npbC1ZqVDg",
  "key13": "4v2CegJq5gegGppfsF2BAU9kpGU5g3GKGZQHn88TH2L71J79mqXsELZbdHXDaE6G9NHgDWMgqEqSD6THzgVub72U",
  "key14": "1eKkYty2pHFQo9Kb6U5dgvWugo8RGV8WCmEKmzoEmMpm7CnLUK1tbyn8ErSqteBXC9uRbFJxkhvz9jgZqqPYmJD",
  "key15": "EYcgjgLuLCsVrGAG2W4b2GZXsundvNro4P3nYjEYgXj1pk3JZZGFBxgDhtMT7zD53izwLRQg6NcUGN6HJdsCJpJ",
  "key16": "5nAgAAmoUZnd53AnUxyaYzvhitYVcRxnXanTQLj7Wmr1Dm4cw26ZGQ6CSLvQu2c7uirbuTbkPLStmGAtKQi3Mcpd",
  "key17": "3ZRjYMupqvhzWAW4FjAKdndwaUgEM5dr9VsMbn4Yq6xAxitRHAAaWEkchnnBDKSHjPYvJjNYpuD9rU8CfL71Ff6A",
  "key18": "3HRh7MibiVLYx9wm7xdDwGw9qLNXPRfcjg4jvGrATLB6vuGcfWaVDiCD3QcR99EChuozWP957wyxhWGMm68Ad8Td",
  "key19": "8WUs3eiHtR6kMN1kicq6h8h5nUfroxgdmNGj4WkhL47PtjrbRMgxVHaFdwzuewNEVE4GgbJJy2jJB9rYdnd544X",
  "key20": "2zGSpctbTDVJASHWKdasK3rfT5wH2EBzVnDysdYExZfXSKUHrFdkmJem2kvsUWTdj4VEhHNJ1SSC97ng6YkEp8j1",
  "key21": "5kjHyqNap2KPFpr17iuRBsRxcQwzjBVBoRcugnLwCtCxqgWuZ9phfMbXFRSCLEey7YUzKy8gYJSbiaqfH7uQam9k",
  "key22": "2m8YAvfiNWt7UA8ip2hhySVTCUiKa3avjA1qoBJH1m8M9FroAyAqqGwK8BTyCdSLqyGzNXg9WEjHZEBWWqZzhjn1",
  "key23": "4Bs3xNTBPoZXisA2CYWUSrN1td5xHRkvst61EgL76ZhDfdv1eoY6GLWcPCSE3aaYdcxGPT4LfqZ4U6ojDPH1LEtz",
  "key24": "5FjGLFpMpGKWQdiqtJniJxtaF216Royw72rqTyMjVKi4vXcchNqH1qmbpNJjdew7k662xAkjpU2KSarDN9VUWZUi",
  "key25": "2wVk8FPr5RASwRpXxmPrGaxLBdfVjCu6KFf4cp1hHZDRkEnrHFGactJRy2cVcuw1o1kuhxtZqEHyXZ6WdjXscEPc"
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
