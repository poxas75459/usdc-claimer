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
    "4QYJtJ6NGnGyy4M5HR19bJAoMhirfCSxi2SWm3onJkxPqHVRurAi4m1b159zc3vURwoCZB438hnYSjYzJa6kNg3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LSxAbC8tkdUVbiQCAc142WEzqJq5thmiq1Eid8LkQRBeKxupPBoa1YBCDz4WPJQt4tL4nXt62GgKuefKBpxgRQZ",
  "key1": "64GFsL4vxG2HKms7DBytCcw9pLshZd7Vb1pc267PjDv1GATwLssbyg2X5ih2DBcyiXbrh4wRHjiTFF1gcqpSdBZy",
  "key2": "3VUgh6J7imHjKUH7CKkUedop1xEjmHHP95iPSZaNUPNcDXHAjQe2ExrvqhbTxMKQDnD2whbBCtTzjomZ1qyRYBge",
  "key3": "5dpfxbMurG8A3K7LQERcXVRQipaT5Bb1p856idMwd21DYvmPy6cmZ2vYvuWraDqPfEiBYxygKrRLr8a1L9mLng4L",
  "key4": "443ZUTtiJDW5N2p5a6GJFuBaUi4GtGHPQvTqr4PcCRHhhW7Ab51Xq2aXwsr8MhfxJtMKZkRjNdXFaS6PM656vVrM",
  "key5": "a6MKsDRtWnEWog6oMHCpuhANbmvQ6nKE7nkXgqd7VLis3aGVk1rzQwLXA9r6dxRVaWRfCddob9S6opFeXuEEkkk",
  "key6": "5a4NSW58X5tx3AQUtcFZKJkE78gG9QZ2TgTDLpnWLW3Yr8tpJgBjNFKRtDnZs7ryi4bNJfJm1kTMU4KcZiqaHnXu",
  "key7": "4YvjTEN2jwnXepmTaQ6h5tUbTGS7eTWVuLjzvigmQ37ftUJ9YnYmDmh4p7h9jKb1bbttEeFm3pxDSw59bni7VK7t",
  "key8": "tt6RupyfHCcgJFQj15oDv5UXswbFXNY4Z4QpkK6vTgQS4NBJrDQcak4jbfjQ1mvRni6oefjcqMzhzzVzcPSjkDm",
  "key9": "3PdxTLPJ4BGER3GndvwgyJCCCWLKbk9PU6RXyM3w18tsVoRLkyLYUqpADA4PzsriwQz6B2Wb5LZTuYE6Gbv3pKK1",
  "key10": "2upyGHULfC9tHLB2vC2uT4qwwYXg8EQQcuhfhcU1upN3pVquF2bxJBMSCVpBtXJHhRwnHRcBkd9FVEJAdP5av88v",
  "key11": "4ENebe3G9WvtMhUGumTajdgLVXtYp4PTbn1bfovQS35n8sMxxTfGtzmSm22XJVdJQbfh7z8eHVf9jiqW4nDHtyqx",
  "key12": "5NLDzu91PzFej4dezxk6Xyira7sr81qirvpVL6La2PmPj6P536mUmERKcn6apx73PqweFG8oKCsu2KMEJs1AbKrj",
  "key13": "3i5hH7GtFyGAvRK3bQRYvFwB4Fp3pycnBq1wjKpNsPHcQrnmgRpNRm4avy3U9sbdmT9a9jEf4sXTGvXQbHU9sUgg",
  "key14": "51dDWffqvcJoRbNHkzcm2BWshUvK7duC34GWfsGK1b1zV21LYGCJ98ciEChpf9JdzR5Gzy4WL5diHvAnEYCLZDT2",
  "key15": "5g3WspyNGaxyrJyRicDgNF898ZBnRBA3FmSAKud4HkdQHQ6eYNrkRv7uweKwWXeQzQwzxWsFUZkrosuGK9FmcAKW",
  "key16": "5kXv2nCQAjXVz1e49oj4evSKFEr36m8dcGBCferXQBwSpqcz44ReNYeyg9cMD73j898gFDcShe2BYhTqqHKEMnJ4",
  "key17": "5gfqs2urRp5Q9Gnb9kovPePAs6A6pBpLqkQRfHCUe1JkyibdVEBVsbBF1VGusx55ib1brkUwgDNCUxByA7Rdxi3T",
  "key18": "2kTN4FyRwnbuJRH8ok1DAzTsqfqCPVrb72BnKkURsoLkPA1fuMxsguGZ2x8K9u6XR2APtpQAdVWxNFdWKTtHJGag",
  "key19": "2ZQRFSXg4vyNBXfFXJwEk6nqNn2HXsYEdfGJysuX8s4rWdkp4esxEMzSEm4UMABUmSYidTtCGTGwGUXrPGkKtNia",
  "key20": "3R6CWrbFpCSkdJQAbrGWscivgMUy9CcxaaJ1prA8rAor9syj5Dg5GRFfxafYny8tUWTt8G3p4GoD2HbbiA23ZJiY",
  "key21": "5qu2eRNmrPvqzJmFHx6U2rbfeVU3gF6yZpmZ5GcYWqmEkMCF6eBZjdZ36mzHb33Utn3gs5GyTP1euVjHCkQuEgb2",
  "key22": "LKdUz2BxHm2hn7oMPLKHGRf3b5PzoeMX1dqnhCss4ZmQc9ysY2W6z87FB4y6dYChoEN2u8JFaLv479kBBxyE1Sg",
  "key23": "4RE3B6z3o1pZEEP9XorRdoNsZHvpS63vbonyJgcNLdHWP5GEwJo4ih6EC5pMHfSc5p9e6yeQM4SvAHoyVZgDJvHU",
  "key24": "5aapVzvh3cEjm8WbWZXwCigThufCGUo2NKYNBN9jSjWadMjBmR4qgPjkjd3Esp8ErmbXPpdxGk3y1XWSnWhAkMKJ",
  "key25": "29wM1KTJvxaq3MYpctHH9dmnAhzMAN9pX4vCRBWLdiwx1RbHQqH2cswSqh7AsadhbnTAjE2FRr5axigUJhSUjV3C"
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
