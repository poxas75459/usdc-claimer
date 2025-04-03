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
    "3TXxZPLNof3xm9JPYFYzXKccrmiNqoJvRb9vkw46SYmGRCWratZTdeb26VynTkMjKKtQfSE4FBwcHPgN2sixaBGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Xcyq27sTXDmiRgLysFVzTX2MQC1BXPeBWiyb2p8mFbeP9jjizSjVoM7BHZzgJPXHb4vv5XCfLtuxwT5692mbf",
  "key1": "3GWge5T3jhMkJFfvionZ2ym3HTDzucm6Bc95D9uF5TwZtHi6miEZuEXW3Ur3DFf9JzF8yLLciyRGbc9XaSRdEggj",
  "key2": "sEGPiCvaFx1z5UuHAQ2yCZ8KLr3h3NmNUtLxfjdHyD8T5uk1k32nKabRv18p5LNpmmbyaVrrX16GN88J42Gumbx",
  "key3": "3b6fjHbEfE1bqUsnK8YaJzwcDNcg8EAQuxcjvc6VvgpygrAimD6ASnq96avathv12NhA7fmV9tr7PCZHe91kWuLW",
  "key4": "5DRwXQaM7zx8EFVyGqyRTSXDhNkWr793ZYbnWAQsrCbsdiAiVSCx7m1ST5Pu8UmR5SPJapBXX4RuqmDoYN4Nqezm",
  "key5": "2Dzd2kvXLGLwU63B4Mun96EUYa19TuJkvBjRTshXqEkmk353tSRsGR8fprn7PFWbqyCpKXQ9kPqB8UK5WXJT4zm4",
  "key6": "5HXEJFgVpeqFkAMETU41sSLo11Ei54UhNVvtDY8V8yRTfFDFYLpDeRLfAzpdeyu8FWA6gvW3fzy3nkdHbBXqNGms",
  "key7": "4uYSDDcbxahXBFbdRSajpxo2uGNCw8qgvcp7JmyBc3kXoKnHqgyTbtsf6LHSJH9thQoNXUSvGvuj8scGVz7cwqkB",
  "key8": "5duTqSaBeeR5Bfj92rBLqazZBEna5TMRn2EtZopP1hoEWWkiYub4MU5JRhgTNeir9hPwgoe8gx9qcKxPcpHfA6Ba",
  "key9": "4zL4ozfhYmEH3VUCR4G4PTsw8vwcypHW4qYzA755i5aAtP1ac3amJpLGauuYvaYTPjz7mg3wSrp8sPUZgetFcSDL",
  "key10": "2ynwCsgCq3R7yJ87r5dZbJJDJa3u9PUehymDs7zndcMdaXsjRqT6xs1ZsJfwLTjPAd3ptSbbKqg4tYjGgFkdvbpt",
  "key11": "3kUueJhRyzGHjg6wmxZj6wHajsYBKJQRRiFdrupP36ZZ2dbe8yNkAV1cKLaeaPZpYCioTP65yo8srnxZ3Rz4cGYt",
  "key12": "uAYae9AKHqTLhgvQ5vj69GqYDBCtfiHg9Gqcku23v4bnBQgwqL5ifeS8v1EXfs9YaMxJ7gGWBYZQN3PgvtqjxJz",
  "key13": "3Gbad45WbFGM9o1p9xBfSk7qfBF7RaUq75zYNDD9n9B1geekGGw1JBYqK2LwRziAyd8C4L98dGFsECD6VCuJhrB7",
  "key14": "25poZk1ujoEn6gQc4w9M1stD3tLDmq9DAqWazP1vS7gHWZtY7nW58g1Y9xs6FY8RDpHdN3xth91JoyyirWGWzwsM",
  "key15": "CeBYpMyMesfRNzKLEC6ZRgSkwZmfAL4oWRDwxvTL7E5gNPVkY5Pywt3N97WBzwhE2NoxLdyHzMJPzqCnj7DYSko",
  "key16": "2w8hwy388rLGJN2vie6nSK4U5vkKFeHRNfzGckGuQSYDZhhpgqc449NRmgz9pKJdcnJGdfeLqJCYv6io8PWk7u7T",
  "key17": "T1nPSqTUZPmoY8GyqAUTJN8NvsjbXgTWtAvAQjcpjAownC2BpGsPSF9mRDAJSn8EiHGhi1iN1LNF16Lioamv34x",
  "key18": "5VKwydGmsRpXHQmgvcJ4JsrRYzGBu6UWkfy3k5haR66mVqkYhaYxXwejBg2zTxD6sK6chXjXS4CBkemGoHAbDfkR",
  "key19": "41nxQv2HuDucbgmLQ426HParwPbFd1toquNwrxcxuwvJCodU9hWrFioZs986pzfcCgbfpAWM7vP4gtyBYU7ryFke",
  "key20": "kJ5u8dUk9o8Ypefmoe4Rbj2Lr79Vtmh14RrDUf3TGz4aaQgjxcNKQdvJdWm43vA9tM6HtBQTEYnCgm9i3zwqyBc",
  "key21": "nDubc99iHrqdLqiou4amEMmU9VQeD5yg2M5QKF2jK2W2mQjGZqCTAVCsTQXpkH5LdLMgRyzfy5rzamHPe2ebxq1",
  "key22": "3P5SFMi9Bo79cFGgEqGK61FbGz6sR5rfM6w4kMZy92czCnyft1HM9bVHnBZqSq24WDXTY7s9BdtX9wdnWaWL74dx",
  "key23": "62BSLoMdYLzWWMs1kAFE8Pev1neWzNmGBkAM5BY5QVawPDwMsppD1F5b2pgaaBt7rrNYBtVr4CNsKnaM5vRKNQas",
  "key24": "3qWDnMzbV9uDNgRQ1F1Qe8FKNeCUXsyFKAYyPyS7uZRopBFAgYsUtkzpnFgRFgdyNo8upWLLMaoUxfhFg8d7wSga"
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
