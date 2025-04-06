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
    "51my94u6ByTuL1UHe2KMUvsYxeDL2ffAGeVdkD6gxE35ZkvgyWRjLg4Ebht5i6eEMP7WCCbp3cqHKMQSoGNoGT26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ULmgRefRmUEnoKbnqPocmLEuEYxK1Cn7hwhFR7H1PQQbLY69vE8jCAHGVUgT5Rtah7n1CM6hmNAkjNPVWXi17g",
  "key1": "4DzopcfuM5Z5hziDYabk3JfU6eRRGZ4sxaeusvBYNatH9rwGdrAaCyceTYdRerrXZtMSQNbkNgv42nbw9eRMmDST",
  "key2": "yEQ8EuiwQUFDYN89zkcCZWx1fNfDoWkmwzwqb9hupQy1YiKAzfyYJCnfEpzzVpv3vWGrT6XWbLtjEqNRVfcFBzh",
  "key3": "hC71hp4iV54hegEgFD4z4A2KBNajh4UCmMhcDawc1X4xJxgY3kCKj6nCxG5tiAt8FPYHF5CayYDM52MV9uTCnQM",
  "key4": "j2kLakpa1qaq3ayjv2k6M9jyDfFWEHiC1cwW9DpSDFro3i1v1jwRRHJtatd4ajF3sTk5aQxMFvxQrpSb6iwSLf9",
  "key5": "3AfptiZhGLiQyMa5uy9hmprM8WmocUFjsognVvu29dE2EEH8uAxnpGXtr12mFuCBYdAHPabJLmaMkksoEeicdXKA",
  "key6": "4NxUQebct91FpeuwBXGuDqZ4NzRgrCfupgEr6cHr8oVEnc841dshU4BNPDhqrt5mi7B4L8JRaNftzXUqJyPucZB1",
  "key7": "5W32vpn5nUiNnuv83PCdjhVkcRDyFdXH2JV6hf1a4nwgrasj9CJna8eXxJqq6kzmHxZAakmBfsMoa1xdFDwbbEBX",
  "key8": "4QuKizDHf2TtpUmW9c4S5BPhVMLH6o2fgAUzWRBURnkv2TDw8MngXdGt5kFAJ8b46pdhhoXLxcb3cHqoYENtoSz9",
  "key9": "4TuvR191NsHoVfv38cHUwa8K9kMtSNUxe1S48gi9E56mjdPLHbL2VbHnSWUms6imhLkpfqV23xRNQNqa3AG4QqEM",
  "key10": "4VYugMgid53fYbMQDt9Jym5gWdhypgneJkPhvXgNmLzfRFX2USSQJAiFqqADrwCoYeFi8wy9P7M3gvb5wt7BJn3A",
  "key11": "5M2GoKrMttm2bKTbJGXSjiL8nchLC2eQA8tV4mLmc57wt3ZHrxzDktrPxxqRNpA7d56zMrQVh3CdNPrJ5RiQCwG9",
  "key12": "JgdCwNxPYj36kSNv5LVymzzjzn6LPENKSDvhHz8GgMisyxzvju67CokSFFGWnBGTUaSBjhctwYZ2164uoHXTAYh",
  "key13": "4pFQbpNTQcqvhmnDeUZijhZFJwr4461x1U2C55G2h6gRsJeRPfGtw2w51xbrFfkh9ATt1ggFMbZEx1MnSjXVJio1",
  "key14": "5Lw5Poms57kvCa7y5RCfBTuyq9pYkT9gDmE9oKBeg1CGtWt7JeaNhAMVL9KEfNCviYKxhdaLshFp7hJ3SRZjwUoT",
  "key15": "dddNuRvLikgm7viZzbGmN2HYNaXwXEVad6edhr6CbEUVYpto2g6BNKtRrF4xsHerJvwPrntnFyVu37TA114dS5M",
  "key16": "5uTzdc2yXT8CQKR6XXD7UeWpD7sHqnbAFP71WJdvrbPX8W6eWMC3SWA5nJbj7xNPJivuwAhi3To5NCkWbtmwUms8",
  "key17": "3o1HUbVYd1TGA1dy8ZkPngNtiTAnvSSupfSUajpYkkiBe8XLX9jVTAeL498cBXUu4W55TvTzyX8fmGXoFrBUXb7Q",
  "key18": "5y4sVj7YfeKqCM82hKSRe9732nbqfEbH1YqFnH47DLYothKnXzqiLfDCZJyVz7KHFcjLss2jmBtNTQRfsLm9YtmC",
  "key19": "4vLsmrHyMrjPA7ZDQPBbPQrasCorw7v61axRnMYZfSpmT29Dgv5KLd28hWUWcfJf3UgePbZNGnGc7wucV5FEyjcx",
  "key20": "rqLTsSj4NCeg38Fsy86cnn2aGH1xkUkdLSSE8GqAJbFwq5Zb6y1D3AzkTw7antfznRAioNVukseNBvrj4QFUYhu",
  "key21": "47jzuuJrp7qxECdVHtT7j5RS33T39ae1fYN7J4FnFTvwxzXBXC91oQFDHxcg5Skcf1h6r6jyBZJ5UHBzKNbPPSD1",
  "key22": "2MpAnGVAeCDtQTMbTZ8Yr9FiRouycAfwSbxBYwwWHDKVYRjV3hkehX3Ps7v8KqdFkHQYFCTmfgtiPeqdmpSe3xmh",
  "key23": "ChYhCskhWP8qwrARN6b8qcXqLgzeiQduo4ofwtdMnEAqUhorMyEhrUquRyGAUdt41PvnekB8DSQPq9rVSGxxPma",
  "key24": "5DvxPNJYtkvekTdScuPzJyNKKpmVfS59NhBSbrZNs51H7HA1s2dd1aVndA1WSiBAq5UVHYmdEadEJNyAcGgtYj1w",
  "key25": "5CKYtPx5s5rvZ7tKuDkCSgj2taxZ1Mnq5YSTe4eQZWtu4sk9Fs1ihEdx7DRQE8bhjQ8JNFGM4j7MZZKooAJn5GgB",
  "key26": "3JkgGXAXf9RTzgaaU1YE8EJuuRA6LaiBFPKpuHaAVhYLPuCHfRL6oCm2rKW2x6iHLRv9eu9YKB8t3qGXuWg35o46"
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
