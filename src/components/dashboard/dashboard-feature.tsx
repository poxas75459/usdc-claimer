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
    "3KTSdHP2iDGdo8PYB2sNcZUG9Dvji9ve1KkCaGYwVx5Lqqu2E4ETBGpzKWJnQaTquuCmD6zKrbMQScNrKLQAXBjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25LZ6BxfDdRoPe4JjwFS8fJkWNbmH94vVMwJxYoSs5sZPvNpEriZB91smXATJVoZn9sjhMqvTDKhZ7mFQGwSYxyG",
  "key1": "5TyBqgZm8VpExH6JvuLqjMnb36KxCPyAPW3F9s9LKco6nD9k9fttvzGvxG2xQ4wn4qMGs6CJ3sev7qPhWinRskM8",
  "key2": "3Xg5UtVEyzU44MHmeaMJmWvh7x3vsdrTAHpXHRZVnBkMW1ZrwGXiFcGaJW7PRBzzu7mXLkPiyPpopMXSCjbb3WPG",
  "key3": "rD6NmFhoyEhQ4pyT7saqhN3YBFTBHEfHYFxqorNakne5fyooUmJyUR2XxEeSz2rd3TuiB2pPPfv9mTXcBeniR4b",
  "key4": "4iM7qp5C3FTBSrkNUbA6Hg6TQK72EAEnifASLo5PUYh9Lkd47J6wu1qBXyMvLcbURtJkN48dayRz5oaaUXLz3TBT",
  "key5": "4x4FFe7hNKomsjqPFZzpkQsFT2eYKV4Sq4JH8mCNzw4zVDb3dfCgyqAh9AETRjDrWvm8VnG6najNBfMvJaU2sy82",
  "key6": "2VK2hXPAPRuNsDajp6zaoPvopy56rJ6eBdHkCtV2dL2x7GRLq5j3geifv7eJoncqg6xdgAiNLZL81Yubd273HETw",
  "key7": "3LqqgErgj9eoffzit7scFm8QCsRQWXP916h1i51y3xaWZfWTPgQzF3wSvs8g45bBoUcZt7cGVt9B3mAbn4b1reSy",
  "key8": "4GA1WoH1w5UG7zsbCQbds1nNDBhgvvjBFtwPCbSjhJDMCdjGivWwUG2A3f4cgvSGf4mGhZAZ1th3HG72g8jFXu5q",
  "key9": "5Cj7p5uNvStuS6qpeFiSy6hcR9NDbc8gj5zX6ipxmGW1yyuq4oTVk55qMm3iuQ1dGrMYxCDwMVD7jwpzVqamC2iT",
  "key10": "4a6q3ishPPYcCqSJrgFFjxN5ZFGtHwRgqxYdy6a3fokc7Gbv92PJMojqiAQ1G8gFgdoErr4REXSwqUdcX5edPpC8",
  "key11": "5AZaPpa4nJ5QpSEg3z3ENQwxKEtdAUjZpu9fHkVsm6kvfRazjQxSR5DkMz6mwmtVeospKBFHzYFyT6pfup2F88yL",
  "key12": "xb9dN6uPRcXd7VftjpvQXKi5q8hsFdbzFQecowYXuLC7df4yWiAXypBMJsdUwvgCrqMpuW9JVid7gamXSwYHQdX",
  "key13": "49pfPf5BiNqYMoUD1nwRoC4GSWduEhUUnEFFV744WmV45g8KGbFZuocaGSLVeK2TyZCBdsWKqME8JCdczVUKaABL",
  "key14": "5tgbLy3xk3DWQds5pHDB6vLLjnRc1zoWQhtQtsqX9oVA6dZukLr95k73sq5BY1nLwjoZX8u7FWk5oNSoYJem1RRw",
  "key15": "3Sba3Y3TfHs1VjXp2g1AmYCXKpw5DfZcKGqHoPGNoR1TTBRxkCPdxmN47a38bSAYZD1V5fDRXyWNnMXofG4BBtRQ",
  "key16": "4CurbBwSGnrUiXtJ4zmfk894TR1ocp78zmm7vym5JMrh1gQhZHKYBPpz5j5BC5jr8mz89rX6dMqZ9c2ySETi52m7",
  "key17": "4SpcvTPVLaaTP9GNfuHFuQuWsGVzY3weiwrqf6bGaCmuWokvYVBDDKMFQRa3vqbS5eDxbyDR5ryJcbNt4pKr11Kc",
  "key18": "42wygYAAaGFASrdxiSXgUjdRfkfvAVb2nd2oFcjrN8YhuoqL97Zb4zTSZ1onGFicAgLMVaoGsrJntpeQRvwXddq2",
  "key19": "5vmiubeN7uGZ838DBX4ZACCiCuxXCqCMP1Cy3fB7D5PQdmrfpS5vcj898J7WT1m6PBXkESLo8NTWFFja3dHgUWzN",
  "key20": "MAFTmwCQ9EroZM9xtTW2p7GK3Se5d3pp4iTxfNcazLWfeE5gv9FWRJPwiw3y4zKscRc2kHwZZvzfVbybuzmLTRr",
  "key21": "zBZdn9po1YC5CWsA8qNmUynL157jBgjNUnEhH7c1enjMb9NLUXGaYUhabPVP2Zx9ffk4eDo4qNateAnuQLSPLJG",
  "key22": "fNMhEMpgxujtR6XePTjr8USJ6esx6mevGwzHySGPqVS9wksr83tLh46yF3QET8i2FA7PEiGpkREbuspFKv9L453",
  "key23": "2g3JdhGdBe6L2TGpELZs7zjaujFheZtL5VgvzNoDijWop7qKaU7kQBhJhSr7b97shEMEGceqMbiL7VQkdWHwCk2H",
  "key24": "4kmq2Y47nDg31rurJXx36c6Cciac8kEaP21hbPqDb7EMVLuQeRvMhucjJCikN8z74KjmX8DhxzbyQNEHxKtsdskr",
  "key25": "ztHZ2opd7w5M9ZkLgjf4cJqgyhHvLqzoSgqWgHf8BKtdzzeGH3NUKyebdij2gvThpnXTEWQKJcNDuZzwKXbhpEK",
  "key26": "4BW9Uj5TpZhtUWe8f89omTZ3QHU6vhSw4eP9FmWyXFh3qaCCXfww3AVQHe6zRom2tbJYiXuS8zPnawLT6kx5Wh7u",
  "key27": "4rmqxDuB9kezPWQfMB4eAkYnNDWfUUX2ntpFLVqXCPUEbNnqBkm6WBBTQnxZ1AuAe7dX41MSzgwUQEEEgeNNmwzq",
  "key28": "26zN9D71Y16EzEF26Z1to2ePGqmKD2kPNPhTiNQVaMF6GKMHceTityyFgUzK5EzRw1u4aUmFWpsLheL4QsGba3S1",
  "key29": "4EzqiTa577nJ5dXRbRCtN4RUayaPKd3n2X1uuokn335xDPafRvTu7TCUbfSE27oR7SXGettyF4XerjmmbPG52GM4",
  "key30": "5XFUjKJPDTMq6aKLsnsxutT174BB13A49UqB8PhE5op4acwjqxbALXJsASgVLpMbUxBbbKXhFJLMmKiCAR7yrSGr",
  "key31": "HcpYZgTDqsPULoGPFcgH3usWeoEgCmkPiJeFSMEepawVd5LkTQeEbewtGVeUrncFjX8biccUK57C8Ar3Kyx9TqR",
  "key32": "2F7An62DHiCb9R2vJ814skPVnkWR4Pi6sC6JyCy6GthYom6iZ5E17ZxXdH1m81BYBcR5zdNzuQgdAQSKkhFwwQrg",
  "key33": "4c7w3w5aXF1jtzjrveH4QN3MncYfgiVQGUcqUAcHytzfh2CQiJy9AKseL8wZYLde7je3UrNzyk5pAcSJNdiC4x5Q",
  "key34": "nwo6JaA8ifZWJFJpmqyBCNPKSKDkYdK7HbUUWBL8HjYvSGA6czqpS62fQAU7QxeifCD76M4HfZqHPZtiT1ptMPb",
  "key35": "2nRBJkT8ohEv1YdcDfTtuftsSPUXnSU246enC3vV4vRDwL384AXeLCUCAb5kNrM9sbLCocExDXieXyvc1tf1zs8k",
  "key36": "i8pEmK49EP2KjGtmekAa5jRvHS6uUCzfMogqdYmZxtjMq3VUcb7DYup4fVtKSyvufySjpgRUKY59hCEd2rPdthg",
  "key37": "Bj8rpKRd1kB4s3zm6oFNqjmcuKU5YzhkBYTA36zNDzUBSP6LGzax5hPmwPPXqUgkRVbHzVBNLD59CW5nwVPR7ci",
  "key38": "2WZte9hCjsTKMW2BWahxgBXAde44dmhZxVDHQvWng4xzFgH5w8psVEZSBwdkNmERsCPCtQcytszZktEyYRxsSEB9",
  "key39": "5VYZAr5YPqke3DSLL9Md6ktLfgi8HoPzK7Vn3PrZwMzUTXxtBPayfq191Ze2buUoYg8fDWiHDV1GdKpSz2LF8N54",
  "key40": "3FyGGZ8e3jtZFe6GkZzeB41WH9hB3XE1XKNVaoykXwqr8A52nfUYMFdfrhHHbi3nVPEuhFNEAaBbBvJ7C5y8ddKb",
  "key41": "3rUiqkwuWvC8oU6998FVY8uv6bFGwVXSAXa2g5S3C3b5GBFU6TfB7JeqKgnFZYUnCsUaHZxXiFcvboGjdiAh1ckY",
  "key42": "2tqhysFhRLYD1DhzhKECAbhPjj6nsaBHPCH29MueiEr2mXb4L8t9wKRpYe3HhikfhH8h5tK8R8V5rGjTzhNZifzE"
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
