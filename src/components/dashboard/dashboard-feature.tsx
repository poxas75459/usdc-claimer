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
    "4kb7ySeRCs4mXBhZEWm1fKyyURmJN2VokWThYdjij6HjhGWqrqwciHZMaTTaE3Ah7h2QGrx2rvfqzNkbXsCzvCcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zZBGtnTfbFCt12GSTKKE8b58hY4DRgyAnDzdyVtYcwLrQy22DqZK4rNjRLEjzhriVXiiqJgZ13RUaH9Uj6hnwbz",
  "key1": "Ga9QkFf5v4fvqatv3fEBiy5n6WxqYxcq6AWBPS7HhKwaVcQ8XqedwuXTS7L9FnAkh7zwiKpT8z1q4g9LSz6VTaT",
  "key2": "3w8zFXBnrbyT2rD9bEH7SYeziYUhcLsbws4nbqdFDGgQWBQ4JHoWC4jG2puaNazhoiJjFQxsShFHhbEvYzJaoL5f",
  "key3": "2wEdcV2v7bdq6wgRtZHQM3g4hF7JCJRoTmPJiB2rtucYi8vgQKk7wrejXAW162GTLL4ebqHYz137rzDsYPWJbFw3",
  "key4": "4DFv52ExZHtvWqnfcbhbdVbZtpwQPtRupooph7LXEEXpMwdhFxY81D6nUfWsGQotbC3mkVfaWmuhyQRfkicoA4nx",
  "key5": "36AWu5c3zHR55iC4U1tSJEfEv9tEKcAQAHUdi4oHX7TPaK4fCv3f2rV9vfRYKmyTJde8resmyQcQoBMGXHz5SWnf",
  "key6": "4iD16H8ye6KzuDvjE74HJ3PYr7gdWbyoSZ4vwpiPTW1mXgZfSJP5d4Z2GiScST6BkDiGSWhxB2QL1EL4mxR5G2go",
  "key7": "3Ae5AwkuHLbW2gxLh6oQuuyexwEnfDLPRb2fXyTMV8V3UbaQqkxnfup3pqqE5fDQ1ANxFw22LXPQv6AYgJtrHCKw",
  "key8": "yWoZnjBG6rLEEbHUgMXYv5Kkfh8GAokFjZB3QrgCczkMWYGMiME7hs6kihVeiTfbEvYK3ZsskFx6qMSEAKh1BJc",
  "key9": "64zp12HYxgbVVUcNK5Cv6RtuQpjY9n4127hi64aXvqxdPkHwndj7esNGmKxHsqNudWyEE1ocpr4n6dHqGnXzzdCn",
  "key10": "19qB5SMK4Jtud1tCUXAU8EmbGfwV4BmAudVhtkj75vXx1ZgEx8ynVVXm6Q1Pw6XgoD57jMmTRokEsPTsvAYX3TU",
  "key11": "2JqtojR9QtrpCygUeoqrZzrkMF6dUDuf18Mk38ECffdVHMgsGUSD4bWafX2yF8BmA5L2up7RrXioc7xbKrUW4C6z",
  "key12": "3hCUqNobzsnTnj28WeDZDf9dBk23Kh2ms3yUYA3QHRxx6Q3gcR8SSfoCLYUxwZxXDjGvczynKVMaDAer7axtB27A",
  "key13": "eDx1hnBoxy3Xs9QmUuWKp6TKWEXnou3RV3faowR1zPT5458wF1kC1p3vV6mWbTjnwibE13UcM3oGB9K1wkYmZhd",
  "key14": "2t9VYB4ht1pmgw9CodP1Ma9qhHSVzYKBA6QRbuSu79QanCRsGRD8jKYzEd3pUKofnmpUJ5Nv5yKYcpfofvFct6UN",
  "key15": "x1E7eQSSmfKrBQGsC2Kb3tdxj6dXBfG1SV9WsaiRk8kYprTiKcjs2EdGzC5XGvgiDqYzAhHJPBBRn2MMGH84Y2E",
  "key16": "3nckj1dL6ndFa7k5iErdeNKQ7YxDyxBXUJcqT79ufwUz9CH5zP4NcZcGxrX1MPUEgQi8Hm94QHhSoWqfjgApAo1r",
  "key17": "5aTYbWXujHQovrUet5vrkJXy6UfRfSnLxAG7JBe2WECcuS1KrX8xzys3tgZfnB9aEv7jpyM56MVwwExmPiCJTn2B",
  "key18": "5eEbiSApF8oNT19n8dZYeitYDBGPyapfjQN8PupLtu4jE2YWVmuJRbFbTKZYJP32shCkGA3pnoNjunc2Da8oJ9uA",
  "key19": "5YibPBCMwovY25kEsb3peK5LE8NttUbRpd2cJDtaXhFrayGXqLuF3DzgimQ2nbjdtQG58Kr6UezsUWuGtxturfVC",
  "key20": "28UhaqGQUkez5nPjTySWfKewP7ZpB9RBVUEwKsLZP2zQiM6jqp452BHDxhE7CPoNZLvFZx58M4x5woZbCAcihNth",
  "key21": "5u95gYwoXjstx9Y7MXfQpHzx1ymSyD39YjFnFFahH9vx1dgXCHpeUEa7QYt8obLG8AZv9T9TrBjvkMMS1YfQg3fU",
  "key22": "5AYJ7XiD4wk3H6fVqRFfUrWboGNiWSHfVVM6j2opKr2zGjHpYkucfzVEtAcWoShvnnRQxnHniGaSocX1tdzHEBRt",
  "key23": "3fvBJkJTDfSrszoBDmaLUmy959rVPYQhLyFr7qdvhYEDLcg7AcDDg96rTpEfsLaJLXZ2UK1vky2tZwjJDLjuodMj",
  "key24": "3qfCQPzEfBdA3TZbR4Yb9DimparTBfcZURG7TX87zjT7fvZPWo9XTHAhxvVtLTMm7QBU2h5cakbfVnwVujKgZjrq",
  "key25": "QntD17bqt2gkATqhvAw35A4Fk9hbQoeYqfoGAYAvNXSG6nHfVWT4rCd6hJCiGhr3V8PRwST2T8XMkuw3hsckndy",
  "key26": "4tuBYqKFugvpPuywvR27gyc9TUzik8RYHHeuH1Ct25xBT5N3ECcd9otnNtjLNLtQJKxCbFGA69Pwcy9uqg8hSMM9",
  "key27": "5fi5Thz5TiNDMZ75h8c755RVnrVuj3Kok2s6Ux1bb2zHdbTkiQcxkgvDKYezK9UiZxAngb4tdkNEkTLJKhDcK9bb",
  "key28": "5BrnVL7FsBtrvSNRjZFo869t3E4zBMHtnLu9h15F5MrapB5WPNqzdFfzdaY2MYswhS3B46t1yqLKy7hYUDKV91s3",
  "key29": "26QpaeEan1goc2fvhoA13VySYk756q1JUGnRAz9s1jbdKcYtYqEch7n3WWmMQfWZynnqE85zoTo5Ph1GXovg8x9j",
  "key30": "2LmZgiJ8d2HHSYyazDBZitCmwUYPf62otoGid8yn1JU5EAuVR37nFF2i4WLpLfL3xT436VYenznKW1eD51aUFFxP",
  "key31": "2RT5EC6yuJHE4Hr9eGFZiQ5Qqbq4XFV2vzCCgtt9VMB1ZJfQVmtcMiD2iphG8Ft9q1thYgnE9Yc6yZHVrdD4rpkf"
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
