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
    "3t9XvfdyazBa8EdNHXCjF5op5JieFfo5HsDgLsppTv4kuSDTaxLYea2kFUmaUjs42aq91v6ACFKuYs5iJBMg7ZoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8gKJoZ1jyuuJTZFSwGSsC4DKbrvQ92uk5ov8btQCK3DRkGq3beuKhVhzwinr13cmCwfUGqym2DnNtcoZytE1VB4",
  "key1": "2a7xQ2TnFPn6PKBr9X2xZepUpEAEf1NK4vRxKCVnYMcV42VdH54njLoHsShxxxjpjQJQEkPtGNqsoGmPjnt8GsAF",
  "key2": "5hFGFZAbDhU2JoXfBvKZ6GuUCpgfeeBS8t8VYBbSLQtrxjrbJLJT1QhHC8HByyLW8yXELQWV3brZoQuLMrkgnW9m",
  "key3": "2ViwUxWCSXdMqUErQGh6q5mLpU8tWdNcCjGEZmfpzb9rJDAtN5tHDyWiLSLcXX4WvsLBtUyYdaSCbQ7CHd4rdoch",
  "key4": "4qeZXmwcbEJnTvrGBRMywkfWU2Kyus6Lq1jTu7NRacnxp3EC8CqCCRQuVhGRdrW9vByyE5kAVzHXjLxz91TmdzH1",
  "key5": "2czm9NFyTSTahsk8z83ScnAZDMCYsTEuSYGy5kXBTXvTZF25p9tUyUD6qn4EWuoPF88Gc9UXTMLTZKDKg5tntxVV",
  "key6": "KbH3z865dYDgiQStWh1iArMdGNTNowx8rtXJ1EMXXQ6wMADYWbxBkTqsBx8yzDtTXXgGypLgkN65tqQXdM2f4pk",
  "key7": "3f6zt25xCgHqSMeV1Ydv6Qc4xzGkm23CiumuksH33SvRc7HuDSjfMjsA6K48vynxorQGr3VXfiW44uJWE3BnzYoB",
  "key8": "3PsbTQgHbJ1houbJEGV349No6FeAJiqdWcrSMDege37PkysiJGjp44j5XVU8poVbCFQDm65Fwgm3Q4a46Y6La7Go",
  "key9": "3Gq6ircNwdufmJJ8YTYingRMRyNEJBrXK2GbghTYSLFDUbvcNzuTXptVzHoEq2Qb2Yvtqg2ug1yrbt9bnfmXLioA",
  "key10": "4fE2BJqCeb2XJ2TeKeMwDjwBFaLt6ooDkcmztnAPnHLumSFZREcffRGB46hrEFMD93q5VYeyAw5hEwkVxcJvGvyG",
  "key11": "2jtoyETNyYp6N9NtgsYY57Xu5fAxmk6gMryCPm4Ve56kyQQY5KjAJMNqX1THiYkbQSjmDE338fDvtvX27f1TpJst",
  "key12": "42Q1gRzPpV4BvaRJkBFgRSL2ZJnzBVaXkVUeZbZoaG2RqTZHJLr4oj8ZwEMDJpjDfGEgrXRqaE423v8mxeFvxZL3",
  "key13": "4J1BRfeBbJGQFEt3e8S4TNmHdHJXTfAG1myBGGtiugHydvm8wcoKRsV8pTm8GmDpnGBJvqnZ5vTMwqb8HeuQ94Sa",
  "key14": "23LGSZdXvAGkRwcAuoVHoRJP5z7nCTFGTFZx2U1mRSGiKViGnJV6tmuwZdAwM9HUdBmFxHHFicN6gPYqsaG2StBR",
  "key15": "MKt1a5faCbtFu7boEE2HpgstYbaGwkXn8CnJkQnctRAKjdzwBhtDXXvU4BHdmN6zQwbpN2oLD5J5usfU3msVtSR",
  "key16": "37PDPqJKfhiLUjzXGcUe1JFaFXcJSmELcL7CTBAM3VciGr2Bj6SxKEzqMtsHcGQmBMcURqo4uyo3DZSxPrYQhVvX",
  "key17": "631BM3udpM1zZLCnzjWHdspRuJFhdtUAAKCS57Ke9J81HNTTchhh3VRFcNGjKSX5FdaCHBMoG1GRejz6EsXqzU1G",
  "key18": "2bg4VpjAAR6BqG5TyWm8nBeohcPcrWaHEfSLWNrLks5Y8dbkBbdpYWDyKKAiM9U4q5jBMiwRiF5NatUztLUePK2D",
  "key19": "4exe4oSaLBiDRr8ViD9AuPCrc4rWJmBujBCw8wLw6snqJ895FN2p3SKbho9Xia1bXwtLprvfNLbcqi4Q1bVp1mc6",
  "key20": "5PjW8KGYC4QQMTECyVm5giCckYeJk1RfzUe9KHwHZY4P7fKYZ5nZwkBF58ns6iKTnM5D1ERmzng5faaAECabr3cv",
  "key21": "4A2st1qZqhj8jS5EoN1gfbu67WXySmHueEWK9yhWU1ihc1P6Dqgh6BvR5dQkPSa7bYMPgFCnfzbibB2NGi4oJu6D",
  "key22": "5Dch1rqAGCj9CarMEnLRHzoZ123ihcoV1QKDYV8MUjHr9ELwF7uWLWQvNXCQ9GfsVRHCJ2x2aH8AQ1gC6h6z94HB",
  "key23": "2RQbBAxBZDdQ7w3xhe77VXWqDQpBozytejHrdXAS7PdWZhQS6S2QfW9FVrLpCfhHayTPWTdTzmCzk3GgUkUoXwCP",
  "key24": "43iYEbH6rdVGEuJ4xubHAhT53a9X11xU2TjqSR1DamkJyoHcjT7XdLwZVjqw5txzJsCMVoVGf4PYVqBtXKchYGjS",
  "key25": "4rFNedUZ7Xm5pzjhmbhqMBaGhKMekEt2X2hgCgGiFPETqb9SbjdWJtEpJuw2nvYxxhmnBugZJajnEkLiUcUsB5se"
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
