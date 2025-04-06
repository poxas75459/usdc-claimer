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
    "3qMZmtEUzHtwyoY9GdS333DZLwhgfxYEsYTtZDno5uXtnRnwhqEpKqfMAwDzLUyQvsHqnrbEsPx9HguZXKiyTvTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3znTscpcTP1kmA8jP1CwBMWfEpk3A4MDvJzmLfo3jnFCf5ENxceQeBMi8rL8oNaK5xEAyV5fm7wTVLrGf4zferm5",
  "key1": "4gWkE6BBTEDygtKMgm1xBnfYuHnJfhb2YseJeCutS176ZPJXYxkVpDQWHKf3AjetMPDGoQR9tde2hcRJ75tvAHZN",
  "key2": "4muQNG9dDXv87YoqkASJyPqabvU3Hf2wB1pW8yDnePBhScFCWYfp1RhhRF8W65vqtUoERarSqzH6hAzkbfXmSJoN",
  "key3": "5dMNC22jNaG39AJmhAijVWWdWDQu6NNJYvraZw6cGX3eEC7uquiFgoSxvzvbLE676CV8bwtfQA9XhS9JhvX1baU4",
  "key4": "3vidGf2gbc5Yqy9AMy6V3AYz87bA2WpnhNU1R7NC7xcpVNhv8rSrZs3p81pVnSSDgB3KSZ1Tgr52BHgii43LWyHo",
  "key5": "4EF9RMwZLwkAKW9yRDGPk8JxpsBECWo3s4sHZR3oEoKgam9hC2p4uvQoknzjw6kGK2BgaJhaaVk6y1xrLZCFAjHq",
  "key6": "t5VMGeiVGJbWRv28LcKzA3aoudPudBnMv4zt36xK5f1846RJM2RFNaZRmFLuAFrmt7VDyLcGdawTkEb65SwFXFs",
  "key7": "VSgaDS79q4RTfMFqL8Tjh84Wsy3WkJqpt3pHtTZLxN1ieqy1FFKgqKnvQJNM5GBUL3ehMfHLTL346gor4q9Z871",
  "key8": "5NuKDhq56BYFcCCBb54PfDsnrJwVD5nkbVqiwDSwhLw3CcfEbm3phQAqe6mCumivBMfXsPNUsfXB9RKDVMNkaE3H",
  "key9": "2xghvmpeu3C6xmFB9j1MRsEJVbfPYXL68PankMmPPqF9RSgEHVXjMeKRgbBaWMH3juP8Z3YgQnrGhfTb4aesQA1n",
  "key10": "3WCcuoxnUUibhBBLmoPaau6B8E1iBZqi1ojRuWRrFHGpuT9TyQUDWofhLos9iqN6G2x3s2dC4Si5njYhXzCWhUZ2",
  "key11": "oxRm695yfCAQXMHuhgC66iXkp5CiTNpNnVe4rACphagc5A39CtLtozTGaUSs88w4fToco5eH1Dah9BnCSqNzTqQ",
  "key12": "3fc4QJy8LzxzTXg5oYvGpf84pHaQXMmTA989g7tHW9JtnYrz3Zsjgxz2n7VVraSkyzcP4fLRG11L9h2aDUuhFsvo",
  "key13": "2j7ETZhzdhMAGQsijVVHGm2KM2qsnoQpTLgwPKGBmAF3DegAsBPwUumiViwMGvAtGNoMKwRAQbQwqGbJQ6NJaagR",
  "key14": "2aPXHv85wnvJyhsDhwC1MdaVdHak4EztxWVUEzd8KSpdiYiPP8YbC9o6aSehWidNWJKD1EZzKgB5cZVCEgtH2cxM",
  "key15": "2Em2tUgJwwtu6kbJ5qAS6vMXxqYiWSB7yMcocSNrJ6Qa1WcnG2MqTMNg559krYKArFeZCi5LMpx4deb1NZxyb5qu",
  "key16": "5G6zWBR2xREQGnf2Keu2e7YE9VFnFc6Dx81xSB1Nf4cxS9MaWDmfR12iVk5nwQJzmktxQLd4P46b2Bjm9BjkuMJz",
  "key17": "5F7d6kJQGLv3omVMFu1tyX2mYPFC9VvpHTkWK6ffeA9sc1vTVJYW8AGMF7aANLVQ7neuK3AtqBFuR5BNRZFy3eq",
  "key18": "5AQBAR6UjrJELs5dhXN3GyiUumbfjvPZykXqLHhdY2JhqNap1j3keSaxcjk8fCMRbCwagrPMq38tRLNc968HFQom",
  "key19": "MbGQzwimWwwDU2H1St7sBLWsNU8HdPzaC8NxdXutoPPzqMMa8SSKYpH9Axz1hffuBkwyFY2vR9JsFb4UiRzZ1qA",
  "key20": "dJcZHCGkQYv8H2M2ke8QAZk2UmXYuaP2JBX2cq1daxiRy9Q5UzFN3TCE3gTaHwRe4uw1RiGfYf8MNVNra2rkD9k",
  "key21": "63zLaFp8egxQEYknyWNMHuBvJKhKid9sSEJSL3P52Xgdy6ofAoeSZVXfYnLUqmNBkX3bdKQtnUGwvDu4ht5Ph4Wo",
  "key22": "4Tm3HA11FKy7yGz9JXi5kzrmydgtTzWTQSKF1fSGUDqTXJmsKM5to7cZt1ARLzkce7tPGqigEjzn97ppoRyd3jEG",
  "key23": "5DFEyjimQMgpXafbxa7QXRaMmz2MRFhzgqzVTxJXQM88pxZbRwyzaBoym59BaBn8oCDZVGUKp3RykqyeuZrMarKY",
  "key24": "3icLFpKZkYZC2z3LmUpYfSXXLgEsPAdyA6WS4GMX79xzxX6WYTw9DSf9DFuhF7bGCJnMjwLaGX3NWk44JHT6nkXN"
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
