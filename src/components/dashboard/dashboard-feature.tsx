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
    "3r7xZ5kDGiPC6gXS3JdttScYDjGibYsbS3hF52k6L3BiKYHe68guQJbkHZFFG9gZdJebUbYTBihfSMCJHBboB4Mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PWSXSa8LLgGrqwLax461pXFEbmq2H2cssxV9zTgH3KkUxqGnkE3XGnAYea6aZJ1dFji85wzDQuSNLym2nCDWqLE",
  "key1": "3fti3bbK7viF4tnuMNuha5np8j9UeNpiA9RddBaMothFUB4SrjPSBsnPbwyoeoJAcjTetmYiyCL21EWJjH9MXKVF",
  "key2": "21qEfMWNiAH7QtxxpBx822ybCk19M2vGC1U9eUhnHXBqUd232zEbVfFV9QrmQGB7rmfHMxuJmkT2YGkoyHnZ7usQ",
  "key3": "TRpn1rbzXSdQdTSu5UFDfLqjJSua7ZKicuAMuA7fYhT719UZ37Y2KBEEhzXKSiRYbAmtDue5pMnoP4W5t6XRu98",
  "key4": "2jfCwtcmS7ZxSaLoVRWAQ7aR5nKEw1DSY1E2GwurMZ4MQYn9cbRKhJ8tubi7FwH3H16NETQoNKchsRVBjY3y388D",
  "key5": "2wUe9KPHug9WH8aZCAtgDBg5xwWBD83fyekRztVopiTs66dqz5vCiQKfvsufxSx4mbWnBu1eNAJEtq2RyVrin3g",
  "key6": "3JXntZrRz6mHKRBxtrgjhA5AizupSZocmJVWFJtvBwKJSNBN6we9UgaQKELb1tPZQ1t7rMmDxDHf4WT2Dac4wUuL",
  "key7": "LxwN5gGgjbktqPeLaCSCB4H1gGU2JAZryKBaReDfNvxf6r55RK3qaah35JFmywYBZm18DVG9EqyUcz7P1UJTjtD",
  "key8": "3nvHK93TX7BWqnCE8J2Aaf3pbqea34hFhzhwUeHJU9zTB9vfHDPEPDFhbfM9N41ELSxSRNZykGTMzsTqaXZeGSsi",
  "key9": "2yxS1Vmc4Rit1xHwU4exDsjdxDtutGBX2gfwgsdkrFzaffYmSmkgF7ie1qtcEwBjN3ifAGm4g2zVLafxy7bGoAWT",
  "key10": "4syFHihv7dJKtqFaPLcrVerb583xzb6CsPUBMiNNUVxoZAtNvxHk5dG5bKXArKB4LPN4KfM7mFUfQ691DMYpuRVA",
  "key11": "3UzHKNBygu6nHaeDUcVPhKUSj9DQsGHCHGKvFhwXDTNVwZGkxaZR9ULcwiikMwpPs8pyVz8fFA2YP66j7X4uyDc3",
  "key12": "37UXirtXN2yb83p773uoXExBqAmtNTiqmXHZKwcNFEt5Nhbpi6Ay1Ktoic2TVhvWjKR9XqEuYqhcQoKXfeSFBn3f",
  "key13": "5rPQj8f1jtj6mN3JJGSekiioxpJJ4jiNc19ekk2DZKXo69owTjPLFkR9j5CtmREWBXPP7EKfFufsAief1NAoutzh",
  "key14": "ZYtjFWzidZm68e9RissVt9ZD2R3Fopjrzu1t4AAMkh372YLCg3t3Jm7TDckCwFoaooXhPMcbsXy3cc2bRrmkB9s",
  "key15": "5Qps288vCMJn6UkCrgxrPu8Qr9uLupYcjyb1PerRxbGoCtV6hBhKDCxkhXLw4SkoKj4QAJw8KLym5rfyk5VqoRkD",
  "key16": "536V8ziDk6AYEaabuTGA4z8wzE8KRQ5o8R5vGGWkimVAYzafmLP2LZKNUKa1d7ce9ytEkd6ENX8NDgFzMedcjpF4",
  "key17": "3t4TKtVKKNAxEy47CT5XR88hKQqwCgwM8y8MWQYDN4NgZ2sS14xoq4EHLfqNqc7Sd1YNdDaUPWobjykuyybgbzgP",
  "key18": "4Cf1LkDBUM2nwc54vxN4faUoicZL5y8yvWMyxwvoAB7TFAsXjAWqBnQ2PB5DCCzRLjcNAKVuy5FEaWiwEp4RCA6Y",
  "key19": "dgT2x3cu2UPbH2DuQZuy8xBHTiV2EJrPifpF6sjqk9UaqUqP4uCv5XQKUFeNVRRcCbR1QXQ4mELEMnjyKBbTmP7",
  "key20": "3gEgefMxVAx4PxEfCmyX4WNftQB69jx7AfsLUwgNM62PN2dzAVjPDoyj8qbFpXXtfbPXzGT4FeMqWYVqm7ur3r3K",
  "key21": "13BSeT3esBP8pj8HptGcvsKeN7ZAvgfdfwiofqSzKUS4RdMZQymcmz8WnP1s119wfKCM9mqhdZSNqMoUz76gWfh",
  "key22": "64qZMX2Mg8smbuyiAsbTyeiTvGzCx4qtUYV4bJfbBq3zpdUak9gA66JRdqwPM2yhD7d5FCdgxgDkV4tX243VTZRb",
  "key23": "61gsC5C9azvjbWygqYxC55QjEsevKotgfzcjtpQMyAQUX5B1CLG6gCAugLBA77Yob94SfHXgLmcvi1d9v4A2Qa2E",
  "key24": "ExVbH7aaZsYQgwazh3dXnBi7v2o9RVq9tG4GPCYd57zw2jfTLm5fN9FVbxnJHTmtfD3oobQhZGfjWK7dxxHUvDT",
  "key25": "3Bz3WXxmYMN9c56Bf5CtBebqoshdFkD9Gm2jANdKE8NiFHqum1623khoMu1xHkyawawpQm21vS7Z43StRbGdjv9E",
  "key26": "5bBZBfabpBaVh3PSRgpu7YWYPBopLTYp3CBYn374ziD5Z38Rnpo6jN9HwvwnwiGHe4sKosk7Chp8mytRj5Ta8tfB",
  "key27": "5P515x6LVz1PVN4YfGGkLMwYT2jLM2wAbgNTPHK5mNpLs27JbmPsbUdP2qXbyP6hJyzk7PkoWoXS5CvFVBo162eG",
  "key28": "48nEZm7DVR2A54Kjae1hnM5KQcbT4ZFmwfAVqqS7iVQwSqJHj8Jwbtt3HJ6xgDNHnzdp1ENo2PBZNt1XH6Dg62wQ",
  "key29": "2i1Rq43eEBeXirD1zfRnmwA5Sx8QbyQoFXKarHRrCkqr1NnXGoLsci44wocm7uJmdghR5JMgyt2tmiDSq7kL4Qmq",
  "key30": "4zDGyapVtCwKJnY4ki67CuKNEL7founaP8AkKuAsMLKfjW5NvyTojSSP6wYiDQ1dWgJRPkbQCSUDQsjDPycWijdm",
  "key31": "4PY1qVMLdpSpH9b4TDQvqNktPAAGBx7guzpTVNf1ApToWKK2Hg6zHB1GxacoZ4cMGFBZtcQU3DqvqYXcmqAZZGXn",
  "key32": "4kDpcQuLG86oanjKhgYFErsAXdCaHehbHwzKEHwQjLJM2o7d1gJxy4ATe2d8z5hQM3ig84e7QbLFJSHbWKP3vkEE",
  "key33": "zXMVSWELchyJ8Y17jMBGZbibx3WZsNKdJwr2PDVBLTP7gQpmc1mUCN4CH1F4Eg4CQjmYnaS5t5EctCnsJnPeEE9",
  "key34": "GkQbwYseFX6L22aVUtqHgHFzSehP614NqQ2sFjj6LaBnYQn7R8gn4a5z2JNnJey32jLJmJe58Wo8JSwskeW19ho",
  "key35": "5dSjoWDSduy9gG7HpF6MYfcsZuWxKqhJ8g4mPjDtTwanbZmscviS2oePzE386y4FE7mgv4szCWbyJb7bWVLirZ18"
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
