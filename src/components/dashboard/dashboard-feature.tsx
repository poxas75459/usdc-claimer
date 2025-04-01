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
    "5k3J2HdTDY16Yg9ih57YaAkjtvxDgeh6m3JPKjn6pxxCYtkVmwKui2GNXExB8XZZXgXsf4WNB9DuKo11uoGoUbfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LSiCGPq5uMMiS9QU1nacusvrLC81DEQ1LzZNiQiCragw9UP2vzmLWyVWo5CHfbFFjFNPiUrt4oWkL5d2QxDokcr",
  "key1": "2SPjVumTXQEQqHrTWZhaPaNhvxHArHBNCFoPYZFfBfAKWpyE8YJdTesZjsBg118jaK7W8xZDmTq7ST4GRJbGSD87",
  "key2": "34zyBaa9ndRGSmU8NkuBuzExFG1zhqw721NiTKSnRtVMQrD57xrQjiXUvgGzS5Xuwx827rwovQykBfNaALKQLMH1",
  "key3": "38CLUFArSiqfzwExABNxoBJpcFsVpDyPfuv6RhfC3Tof99fxEGqpjNUfHT1FBKRdu88SaDroPuzdhqYCexTzir5t",
  "key4": "2qcfx1tZD7Mbho8zRpPUjjPasMaciNP1CoVmNseGptTNhXJut5LsvgBFckiyf8huibomirQiq66xNN7E3sMWuX1r",
  "key5": "3j7hntqTr5AbgcxG8XpBwErgwWWYXgYTXaY9K5UTS8FogXQy7FguAEgkHPzK4Y8wpLuceY9B69a68JnAx7qbVCQW",
  "key6": "3kY7wy3BGfUtPwcJwjXR78eYyz2PvCZ3JFC1vXyzzHfWbgNXM5HsxXeAFrvBgdyEfkT9veN14DHUhn5Bey5ZvQw1",
  "key7": "57mH5bwoxe4bRKKAgHmPzrKHuq3HqkrADFyAP6pS29YJSpo97B9FARbkMSztfmviK64FE2N5B432XfA8QyANhCjX",
  "key8": "4spzEZJciXN2NhtrpMKMRhjAtJd2Xdqncqu8s5YU3HRxviSA1yrTvJqgVPjd9x3s3kXC7DLaYUA1SknMd3VAqDEL",
  "key9": "wYRM7RUpYSnZSQBKnV8DAhCiK8ZR1NRFsY9DR4V8ZSQNPdEzZ8K1UBLsrNyahzKPNN2dAFPD1CiRvrdN1NMhPZJ",
  "key10": "3LHLLbABWAxGK7kRMVSRXffKVp2QB1H4UbSEDjbg6Yhas7MjkLcGbzocPY528K8Kmwpt3PDYwVApz6b3wVyHEsy3",
  "key11": "2JDkrdnb3iLHRTi1K85eGcvbK1QfXJsEp1VqHzeJ7W5dt1C4wceUwadqqtMvPQR78mVsoq6yFtKg7EBLm4GPe1jK",
  "key12": "35a2NNzxvrJJrrbi1kz4kYLQac6X14nFPtvkDBuVdTN8NqbhXHpc7GQrikiKNh6KFCtqoogUbA1qTzXHynyzsFeA",
  "key13": "4DuXr9UWp46HhWrnUw98KNqkJJkFWbJ89KHpycwyFz1RFmyf2jxHdzLKaSxxgRgbmTEFcGjXcTvs2Q9RRNTiUWh4",
  "key14": "2PobWyHcaLn3xxQQqgAvsn9zd1bzi38F52pS6v6HsMWssqdM9REL1aQmDmbLYgXG7JGc7ngDiCX1XU6p2RnoZ765",
  "key15": "36Neq4mn1mQ2YA1y4Z58hZPLaFjxzxzgMHB3gdwnNQCW7YtVhUH9eXpeBpd7KiiJSgrsjVkUFbgWMe5dJLdiXKXW",
  "key16": "4fUqCcnUiU4Z8tGjmLrth1EN2FhVZTEHdonuhKSyUo4egDTBvNozvx8KYqUFCT6YHCX5wQ7cbCEpVbkBeCMkXC61",
  "key17": "3XZi4FA4F2MsqaWy9o6hd9MtGQbYciephoYg9KbQmioiFazJk13L4HP4hQ88kXXBw2sBKhkDg5Dtckmr6GcnkC8y",
  "key18": "2SA9D8JuzG1iDKUmpVw53feUzKWFBeQtCAnrPN7nnZtDburamKwq3qHCY1nwT6zDxre5pr2AHRezitP9H3e2dzMb",
  "key19": "5hsfYQsGLR1njmuhRxRp22bC5jx7dfbL1E88nz6BqLtj97CufShTYgajMrZEBxDDdTkJVKsawA52NAAMPLPY6PzK",
  "key20": "2AHe45ixRmHAkfHRohVytapPPmWAEiiRJRj7eUR3bxxxpvoQWWeEz9iMZdBZ4KQsS99PYpWDYANdSPNJmhwxt7rn",
  "key21": "3WFNjroridFYvDjc7EW6F9wSsBFQaHnhYp2LEQHSMNB37aiMq6DQdPPbVcnPn99xbUEa6653kQnbiy6Po71PuMMp",
  "key22": "65bgVnyzsj621imwrPMRDYF1qVG5duqs55G3CnujyfTmovWESjwA1NNSXfEPqkSMDUUia8tH97w756Dgzcru6WT5",
  "key23": "21uWQuhFGBXopdoXg7PLwHoo9V63J27QsADtNYTPFWzkgjBqE6VghTWExuEcrmoSQZHD4eKYMKqJK18JV671AA4r",
  "key24": "3xqyaJM95PRpmsfgoqHdKunXUdQ7UEHf9qNoWaP89ET3ouUv8kBdR4AGpadBszN2LJc2zWApJaCc9nLGLsd6rxK9",
  "key25": "EFhfKYmpnYXAewW3n5DuSePEBVGsh2K18nr15FyDZqztjEe7ZeNMyyTwz4uArWgaGQwXAYF7ah1QvbnVpSnDsUn",
  "key26": "pAZ31Ke7HfmkGYAtsqC1qxAXt7N6kn74LSQxQytxjYV5WBY8ZNdbARoZDDCkdQ5qdV8CwCwmccf3nrPNHpQQBQs",
  "key27": "67r3jqcCpdR4vMSUUvMDpbkBvxkuoxKWycVZ8H1JrnRTqJnG3FmYZXszbv6BTAVE7Ua2JNmJ9Yeu8e4wSAuv4d8z",
  "key28": "5LGXnzUy2xQ4qeK8gADtCTQ8GACPngs6DnArE1uU524btd4z5xBYN9WFHR6eQwzjSWtniJ1FVMCyUfGcH5MBezab",
  "key29": "2H5af7XXp9HLRgLiATzUAQ5uFg9zuAJmJT95xgwgWc5hg344CqGUVQJ2qhzubMQYDY1HVq9maUM5gqTUu22Gjbmp",
  "key30": "5YoH9AGTDFvxYkTjD1fANY5wFAUCKRdXgxQxA1euCG3nCmGdPd9qCgjGZQRXgpsfrunyoG4hsAtMf1qxFhVixa7H",
  "key31": "2GWhTd4xdzju1asmBq4jGwWuPREV449de84VPmKAj8LpGtHrKEh3s6L5oxHqzF9tD7AUTNpxfNRksT8so67sgZ6B",
  "key32": "4s2PbgtbFdrhLJNjfVqwA8k3k6BMC12nemGJwNRpWC3PCH881odSyxKbBCa7YHwSyHpNFC1PAQTQ767v6NdKtKXX",
  "key33": "5SFtT4QfR9Fwc376U8jmpVpCiWo7obcrAa3KKqayjx4UujP6vaA6pDNKrgx7K4Ck7cgCwMSZen95GNPyLNkDcKwG",
  "key34": "WqNqDi1TrESGgHeLhMhyjwzcJ3yCQbCGcXdhho1y1UcSTjZ23rbsoNTeMThAELjGw5fx95smT2UMMNm5SgkYdmC"
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
