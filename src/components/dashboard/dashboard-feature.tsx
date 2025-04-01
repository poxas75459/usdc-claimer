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
    "2dhg2retexz7Qpq28R8gmK2AebypiU83pqpfwdGTuTx9pNwiBLJrtxcYixZukUirFAravEqeA3CiXiWVZJxrT5ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eKiC89vGLrt5RYvtthvZfRmku7AVknvGqJmiQkkLR9RmonqrsCqK9gMbcg4FbbRbTjHJ7sqyuz7ZyJQyNn2JVh2",
  "key1": "5FhVvB9hXUHX1FyT1HFduyv9UfXrmzqpXigaB3sCPVHA7kF2UwfJn3BmaoXoShfq8ufAzuoc3RcBoQdbX6fBWzC3",
  "key2": "2Lk5VPWsaS2S8EDwuUwUtWio3JCTfK8bR4BRcnDvixp14k3qa6py4dLej7saoWAjZWDz3VphFi12swWnbX4BrW38",
  "key3": "5DiHvQZsR5hSW3cHJnnd8YjLA6t2EfRfjVDTiMxn8ooKP7VJUSqw8X8FXeyKEFPpcgFA4Vdg3uY1zf54pLN4udqh",
  "key4": "4QMGEW3UD9G3wV8AaAj2jniuxj6YYUPwmLkzmMHFW1EDhCPzio9RMc2X9hpJukpN4JBrwP3KEtpxPxgSkvg9Jq48",
  "key5": "xPLsNBF7muh8WvJEJVByb8RFC9W2SCdQSSo69QpPXzoKH5etZ7WwStuWN3koHX1h1qZYn51thumNuxYgxjxBtsD",
  "key6": "4QyVHntLWd87mgaXEe6Euk86byFYZemmGjtP22r9pxJ7p9kdY5ZkamkzxCENcDFk6Cghe684XEUfGncsX8uJygwW",
  "key7": "5EeWywTqxjfyrkTjCAZy8dV1QKh8AdqUsq5uFCbQxBRGP5o6x8r5yZe1hzymV4QG5N7tJKcXbgTmrzxS2wdLRmMv",
  "key8": "4oCnLgSAdn2zoJYUEGKN4wCAYxQeMLhkGjqzSrxyRWnPnZDcj7Hy8HWTBw21JVwsX4k9Z9WWhFMQUa7igLofsjtg",
  "key9": "5GhEUHf4xWY9wsgq1Lw8fho1tt96nhHzP281mJDoJsf2yPZWi3CjHAgTijLH3jpf4e2jnCneybHiH7GV5xy6x6gY",
  "key10": "RxegTdtPMU8Zvt1C86jpbvxEXrzhNhQ3vXyin5CLeyndr8ApwLBC4LYtJ8goVssMYbYmS4UVH3phNsBn66RVtFx",
  "key11": "5ks6Wg23SKoCdLv1z4DK2QcfG7rzQVZCTbiNuoCXf7A8yDgsydgLkbQHezsE89dRK9dqu3uarzKnHAdbbqaCFknX",
  "key12": "5mfWF6L7uXW52mp7Te9T45bUzZd34q9mYxwqx7uy4gs3UxLqwK4A84Q26d3AxQLGYX4aqetoVbkxjZ7TZzvA3hMD",
  "key13": "3ysxeCn1tMreYvNULdkDRVPR2zsVi17Jv9E4SXMWfceeZRebDT59k8p8xHGTm9R9B6dRQwkTzEDYVTdmAy9fs7Vr",
  "key14": "DRkmdRv1fpkPJA1JuAypmr4tq8evbDwrTfvcgPRVA67qeQGgRJ7HkyBxyPKx6X4ajp4hw5chRFojWGRBUoAVxET",
  "key15": "5poq2vm6KuHz8wfUEJ7rL8UL9vm7QNG7J74rfUoprE5PRiQUcBDUg6j1ECDpFeHJnkSRZoT8g4w3k2BJjnxEuSd9",
  "key16": "5RjPKLRnvyi1geofHy2tw5aSF98pW5UXqmELZfCHzm73JEhMZag8BpN7Y5c5ssjKedJdWnEpwAYqQ7bjCCXAGsxu",
  "key17": "MjjniYDpAHKxtxMXGw1DvkMTzHSBpZecBMZQ8vkdLEou4MXeFNXL3f1TRy9NorXexm48aJUnkFq2v2FCpSoorHP",
  "key18": "3B9roiEXFf2NNe5KDZRH3YJgVTuSgrAyuJf7qQtYLaqxYwgSzAfURFm6U2ky3y3j4Q6B33xeUGuzAnBbdHeGcP95",
  "key19": "dXmfksCw2KazgzbfLbKq9w8b9WHCxZeYqPonnADsnmYpcySFk8rDu98LdeUBwsmghUWDyKSGMwxs4Nrar1yAmbm",
  "key20": "5iwS5HJ3pr3N5poySCvtj1LJ8df8TrAZzrfZC3PPktqWGgeAdy9JBaeUWQ6SZhjFgfQeXr24m2MCPTkQgKxrcAmH",
  "key21": "2CWa1hDxWZRfX2o5qTi2AwHTaxfseuVyC3fQpHYFSRMrtu7rcbpMfc2X3aZxSgLuUWSGrzoF8cnZ5ipWxqL3hrqF",
  "key22": "3sBVNb1w51QT3D4Jbi6KoNED3qLJLm9DoKKtjaettkHk8G9w31o7YC4BjSN5ECHGjWW5YJxBUk6jYhkU9w9rFULv",
  "key23": "4y2nyfnzfq2xzzGV61c4u6U7hYf2bMtgnUw3sVG6fahGN3D2kFmSsb3k5FAGg3VB2AMRS5pn85K1sXxua24g2LCV",
  "key24": "4saMf62YVp5QSzFky8iYGerZUQ77QHBYgZ5a7rP6owJZrXS9UWisCSF1f2BJkREYkmdUwJVH5XWetpb7H37kePzt",
  "key25": "fmve9WKrqighNA14Gj6XzzXNQ8Y9BdCGvHE5iyxePzZJ8LsrnsjcXHQHPQmqzrC8GpfkNL244HTtgoXPjfGc4vR",
  "key26": "2iRS14fqSC81avzxxkaRRsV2ABK8jCnJFMFSxxRDpMhCYnE1EKBMVhd8eJbDaJdSD4S2ejmc8oizF2h2i9Hb3wVC",
  "key27": "3K65nr15Y1p44aKjK6VSyYPXZq1hcdrqrigCviZzyoZs7UbCE2FxGGBGF1QAieLBVMeH5RtiMkJHR1HQCgL5P8cJ",
  "key28": "5K6JfMUWnAkKBnySqQPfqiBEeoM63BexMULNpa5vYEyzMT3gNVcFjCETRBAKQ4rNN8KeoxVJLFCocRetLtpnasPL",
  "key29": "3mwYox5SP1yrtfB6xzonGC4Rc3LCpkcPJUCFxyobvr9SeFaucbZifWdZLDHVntViYuR5iw6GcC56jexM6K16XZqY",
  "key30": "4o8JkQcbUeEDTEAdNZ21bzvuCjLsnP7EHrjJpEeP9GZ46SQ4QhXuNAwdZiDnHzEyNukoWFNPRVj6Z6xyzeiM2bmW",
  "key31": "4yAiJevt7fAQbM5JRGtLM9pjL8M9Rrn2ykE5bAcGhq34zVxV58qSmYA2E74fv9D96Sha4exQAp8yomVSUgq33qnF",
  "key32": "4YYYJHcU6ajpRna1kbU5qJHsHuxjXFW7cUXZepLDfW2KoadaZeFrejNxhukLqrRd4K7Zad7sWE22VaaNkPJRbkLz",
  "key33": "4u8ad6cg9GXnWZv8KdJBe3B496Ws4RBgwQ5j7axRQTkowuTGhKuSYWLwDX7yf3pVp8SBjqg77GJXWZuYWWAhzdWr",
  "key34": "31GKerPu4Db8c3QeJJzHkzrDEZy3YbJWxc1PB7YjxqC3Afth9FQD24WSK5F1Mh93iYmpgN85WdsoGmhFhZYn9PW2",
  "key35": "5tWsLwUKWRFbNW3oX3WbZ4sP7rJ5xUoZHAGYgfVFgqJoD3sKYniF5ZS468Nix3wdYD2Qf665pNiQv2FosX2eqsaR",
  "key36": "3vk8CcmV3kZ9pcWY4Y3xbfJV7BJ7LpmMgnj883zY8pcto71mNZfJ8K7ZU53vYRdY4RHX6cjP2H9mSsJtnCEQ22PD"
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
