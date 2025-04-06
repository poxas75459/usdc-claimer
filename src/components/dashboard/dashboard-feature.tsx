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
    "5upxm6h4Bxr9eGrSXLjEUjpqcc5CwXX95kxuMjH42XuvrPBDj4P9ug12zyWK7ugL5dKkmGxpxiiwuD5LsR5ZMo6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gfAc3ym9BCrr6T6DnxgUZrFqm28zWN6XpqKJbERQfPhQZydNrxwEz3V7QH8NHd9tvQBLFMkioLmET6xPC1FEB2L",
  "key1": "2oZDGsujZXd7Ho6n3DoUgeDxFPz1ME51rSQ93Az3qybBg78b2yauUQkZvPPHZTcCmE5xWe16kSX7TwgCZgU53zyo",
  "key2": "5738T8kKJcEcuRV67isoVdYL7XYkSKDHFH7MhWKQNLuLLJKdGeCspbTz851KrmARCeV8JA6ckvFfDwm24Duxdgso",
  "key3": "5HFq6obgQuNqRQ6qtoezow6zjcVhG5fLx3P7g6bujx5APgbMe432uhaFCgXLH8RMqxj7oS9g5XygLtfmYg9YuRQa",
  "key4": "53Z5MecJZhuMr6tVzY2BDJKW48gkJgv4G7dCa5DBa8N6P1H5BNuTjWgkBKaiWqCLziQESznNg33154LWnmDgJ41h",
  "key5": "2T4P1GcSryhbTnthSckRUWRhpqaQuJvYYo1hnDs33mjQnFC23GvX6dfS8Mi2qR9RVsLwGza6gD1vADqWmWfzwZik",
  "key6": "3fuYuRo2QvZqdveXwLwFU281VnRfxpYHMccWTWR8GLnwzcpHV4Wcy4jjCB7VFRgFEkZXwvkj8sm5LJuFQ2rvoKTj",
  "key7": "5kzkR1nRW4xGBVrGLBBrt1tyxCPGVRPXamHzjPboQLiZHwxPh7XaDn3yaTMFLuUG88e2xFh5u9qj8Rkd3WUtZUVi",
  "key8": "35EYfvnHdJX81j1YeGMCj2tfc3qQ4VFWeoisyVDoo5NHiq8xCfoaMCBPTKtSN7CmTZ4Gx3H6TbmSSzENVQCZDUKY",
  "key9": "228kYsyC3V28w2yNuUpzgYEDqK5iMvKynoqzkdQ7RF44Z2SdtXaaP7Srf3rpJ9n8xTqRSDcbEegRUKxD8Ahsj7tt",
  "key10": "3XZQnCyYsohQoqyV3u12FE9KtP2tvMDv4b8Z1ow3rZwHfpUH3pobtVhKB4Vz5fS975GRhVPd3t39MvWg5wEaw2Qv",
  "key11": "rdusv89s3WecPV8drpYduu3TyYCTHfnN5YJ9Thm1TnCwmPTU9ctyjioD3vYYuS1jRbpSnRcbL8iShKnq9rmH69X",
  "key12": "C77xFU77setZfiDCwVTHsLrLQzKtYsT5u8yj39mZEBg4ACJ3X4RGuTP5mvswQvpqknP7LpxvDSGZMfYfm7fAFjM",
  "key13": "4GjMXcE5gk32RcgGdUwpQcBesfM9eaBarEaUuZ8azJyFc4pQss2zYJabRrUDTYd621WquEbNV61rS7qdTcTf6kZv",
  "key14": "58me9j1C5FDFsRmgLkpbT3iAWvvVPQG3P2JESpWJpputpVXZ6ha74mUwHcsWc2KqtmUCd43fJaRMCdEnrdFspztL",
  "key15": "24185bjsv46m9htEMgWDikMv7JRxic2zotvCSd4ofiN5uHpeTo2iAaB4xR8wmoSmFqSfoJ36W2iiHFvnLM5XJXeh",
  "key16": "2fH8REP9SeqAsUQ2NP5eDafMdLNeCfohwg6aPwaMYCrNEnn5Zwj6zBQp8hc1CxWdGMdz78tDxihGKBnJutp7eHZM",
  "key17": "58sQtFQyAkWFK9E1SyDZUGZmua1E5Rioom8t2kyj57VZQXwMeyfarjfEhh4ghKwYGQRKNengYNxqFZM9bduaJExc",
  "key18": "6398F8oCKz5p1p3v7ZKUGZcRHLeGdE21NLs2eLMymCBzL5WKyg98tT14nQAqFyjGVr1xKy4J2gMdURVx6wj4uAQw",
  "key19": "LsvzASjMi2yCChsXD28CeLKoCcQ5q8YjRmh43P7rjs4ynoA8cCaWRQni6zFdXnpJuKiidpVAisYHbTS5KSmiq1B",
  "key20": "QfLsJHa9LzbKDrRKEaQ9YRwZrk8qWdSgi1Sw27A2vqP4m2svXQCRokUZ8WWmy79vR7XG9h4aEftTbhRUEeTSodH",
  "key21": "2Hmy1teuRb9WHsE2byT7o9EGJjiMJtGaLPdeD1MWvncDeqVWJuwKbsusDLAjx2fahJ3rFmFwFtjqurYeZ23u2B4b",
  "key22": "3tauDLwC98hftBxnq1hJTTXSa6oVNjRxZ5f3B8BabC8hXxtv3V4FY7rZFKpERSVUkmJNqiVsfQae15LTapQprpeE",
  "key23": "4zqor42qtEVNKVZtvTD3Bv2Hvu5E4yJNdwYAFoQVhiKxLmDrYedS7sJGgtTf8ZMtw6rPT9NmLuyDzfJQJhc8VrEF",
  "key24": "3ziBwnMm4z5RTcbWJaXSHKf8Hs83sv7eMjeAxBVzWWua4Rfh9jD9yfTBdrcjDDRFcuozBy5jAtorGAH5MpZcgfwY",
  "key25": "41vE7VtriNW8RP2uVjXVfHNaBp41SqMXGCVY28WnTUwQ9J1z31Cn9LY6Z1BXf9BcWuDYAoBWJoh1n4xTKpAvQ6Bp"
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
