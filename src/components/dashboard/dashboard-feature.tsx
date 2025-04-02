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
    "679QHRhX22fu8HAMpnspVSL2KF6B54zhSoLoUBvXaKbwb9SB1tSmrh9ujCVHCiEM9NWJJWZ5pEYQjkZVTesSSN1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sSGhpHCop8sfUGkUkhUevcijJxqXudXyE7ozfEYk8A1CNqbgiHpfEqinXXYYyBHvw3CiLGb7aRK7gvt2FCH6HB5",
  "key1": "3AcQTZQp5RAYLFHy6cN1gUUTPvXwzgGMHSuiWtzqJBigM27ovKLU7oocvS24tXFP7JtXPHxH7ov511nbHB8Uz3wW",
  "key2": "2NBsMGMbREuRQv3Z8SiFyVS69g248wJfajptDudwJtowgbhCtkBzNoGgrvCNHQWcWSwfeDqgK5mPByshtYMcMV7A",
  "key3": "2wxFjh4ogeT9EuMyFKr8EhoUrTCD46TEU5v5dUMPdPCpNBREXurGCvRXTi9TCkLDiq7d5UsnGfr9Bxi9H4378ToV",
  "key4": "22UHZQeQrSJay8FvHiXpULnA9KAfvEnL2qijNCoHzpwTDjC73WZk7CaQVacMFy1T3eBQPnbJwFjbzrKUd4t7jgjd",
  "key5": "2ErfXJ4XkTbTDyd1GLtXdqYv2XgWoHA6bqbgyGeTphjYx4Egi6dRi4wjHHeGsZubQAQbQ2oj8o6xqQxnvj1KZd8",
  "key6": "3MLC4MzK8hkGVu2HbUEkY3KQUHYZJ9R5uepJxf5dgYCoCFKyVgigTRuJPXQUb9xi9Jj6mSAFJKPqeVNwdAv5t6Aj",
  "key7": "XMXaFNDkPPvEzQCPrrpiobuBNtHZRbSwdrDZMrWcCpxPMf3thopoWJxxEJajAw9MT49miXEZh9XAEe9KJFWoP54",
  "key8": "5rutLLDEuq6ESsKS8tyuoTvcn27bvbsbTQFJvS9bdmPDTRVjKj9CfKykLpYB8dQKHrg9yL2E55HafNNmFZs45VPD",
  "key9": "HckEMhL7YAt8ZrCsozQaSRBUkrn2yt6VykbUX6KQyw6CYzZnKjnPZ7j6rvBmmFKyVVhqbZg4GgqAqb7nHrzVd5F",
  "key10": "4zrhreDDF9mBsQVmt7agQ8fehxKjYscMkB9m9vox1eWKqwguV94RuBeXTZjLPgpexk18BZXtEVYUVaYYnFw5iS1g",
  "key11": "57XheNL9V39m61z9zndeHAjt6tVTH3eKstqBwEuye3vbwSMv5tQdFZW2LDTv4g7EAyCmdj4PX8PGdVRM5NFhqh5T",
  "key12": "5JqAAbAtBQjkSgfZZmL7Gjz5uyZ6GWiyqAmSRsoX9A3D7Pu5Ex95U349UVxYKTJWQcKUTxfnbnzLcokcX9FwwWie",
  "key13": "5JiEdQgHSVNChPui32MA6DEiV4hsCqxUrwQyyDhC61fyDDxEyAafYiyCU2rDawM94dUD72AHqzuvrKehmgRcpCR3",
  "key14": "5c5Z2siBxscZYHXtP4G68HxLRUFUW5xNSZKZtunWuEfN1tbthBQ8KeNF1xvJrayK2adqxD97ATM6nhYmfeAyjiqd",
  "key15": "3XaLWrvMtBsX9bvyiqMydUh5niLDzxFqKRqfRi7DhfSq2W5BqaFhoQUshavGrs1rxghLKzJ9ZAoynMgvVZPqk97g",
  "key16": "dZXswyC8MvUjBu4rmNSZsKuXVfVq5D88WXPktk9C5VnLo93d9CKkXMiKHbZUkHTWi5RSPwxp4qnHp2FTHp4jHv4",
  "key17": "2AvTRWLkRvMp9Y6qMfHSjcvMhkeHzz2UiMVpDXg4tucXUYUyxb7a6BpvDv5WhRCLBq4uQfG2t9grkH1A5yXJqQ3d",
  "key18": "5dDtpJoDtYnnutGwZh42LFcy2pGZuqF9yC7Lqw1sMhUYtJkmjpGKRQgB6TM3oZuPFwtu37af2LaNZCMYZSjkQQzr",
  "key19": "3GSCFC2SPENUmPTpZbSgZankBtrK6dvBmDUDi5Uo4aGWeJn3g5DjCDwvY47tst6gWcBvnFGAamptX1EDrhrKCCVr",
  "key20": "2trcxG1EPVq1dxbfzSVzgnh63yfkrmeTPHvxc2dCeXJYW1FJFE1dCv6oMv5qitdCzYYNuJ895KDmwQvsGPwQT1ya",
  "key21": "3dmtm4qtggVDwM2H1D7UvRQnvFQ62Gws6nwgZ45F884KYPQugb8S5c5SzqzzQ62GCRQZYntuJDXfz7JwDNZRMCx6",
  "key22": "3ivWGwurzWNkxyfmkxPeA8jRkyipJPtwcC8ufNH9vPdFyrN9PtjV236nETmkT9zhEBiCxeCsWSnEZ6SSeWUSpKF9",
  "key23": "2rPkySbST94uX95hDrH5vaSQtrpcM4jrSnYX2yS3toXmUwhmxV9AFcGDdvSVcTZCsTj4ThjowALHo33Jv8dTvDFJ",
  "key24": "5dkdRfTh8RD9FTU2e6UZ92vsKTQY2U7mEYW3uv2vfkSQagBPXSWEbubQGzZszMabeDw4aHPhtG22gCEMTn3M7pry",
  "key25": "3HfLNRXkeRa4x6Z8DPR55Ju1rdx5cadybcs6i4zHj6pu5z5BXhJnnBfhrhnf3aqSVE3E9JA8L3SBj8kL3Y4fyjLr",
  "key26": "eVEiX2Km6vaJvNz6TzPcbzcWL3opq1DQJQM5hLmB4u69UpnUv8Acqd3YXZVqqUZv9CxBHFk6DXZyVVJH7GDn3K7",
  "key27": "2imByPUUJ9sf85R46uPJRSRb6qa12CDBoDcBfdJN7v8AMK6UWYq7xMXYPiCeUxGxroEYJ4QX3FJXCna6J7BE4PY",
  "key28": "N1UtQ5eHkCq9QBXQj1C2KsPswRssngu75DY8a3YEfsvyNcucSUT2mp7xVj6JMguoQ9XVsHWNWABsYraeV7h2Qva",
  "key29": "b5V8vBpdTnbLHxF73epca9G5Li8cMQYTaPy1wMm1eC5WCF6R2qNLjDaQv4i1BpGx7MJoe28cvXVWkNdXBYz4e67",
  "key30": "4gMKb5FTShoRPvSbcSaX8HumWTYqcoYwKhVVjzHQUw2Cgojz4A5wbgNtWixuX4o1wC47mSuXFEBpi6p6SauaELEP"
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
