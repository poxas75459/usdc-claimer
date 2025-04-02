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
    "59JN5kjssVF47T1pGxjttLC7UUV8ygspimRSu6SegiJturMNrKBoJHzxPQwD9gGDxy1syj5m1noesfa5mpBLxSAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36uwcqtoHiYCtpAakr35XiRXyPx5jAMpFutYh8rVGkZ7VxWvin6au8pqiFkVSdAi3Cycbafpjf17gbSoZV24mK2v",
  "key1": "yKRKR6jBuTbqNti9MhLrAZ4K6fojVNf9R1WA2KETUfMhnrZRyCZViyWFkYwTTCLvNb5szXCDUdDMfi4mT1ByXGp",
  "key2": "2rjDppv4ru6JC1kJCefQAPqrt3emqgPjB68qzBhWp6wcigqPqxmWa7CQjUi9cWrBdd8EgSgqMgxPMVXjqjrz54Nb",
  "key3": "4SYjN3NBKBoU6wXUsmX5XhXxEGvAEM9uyM41aryXeo3Gs4JbmGP5kKQmYr43Z12DCdDnotqn6Ld5xozgBGFXeX3M",
  "key4": "36gWpJtD79qjPcDXBp6gzmpLTvvNhiYmFns41Sgm5s631gQr6Wmx9ZSmqcyk2E5WZn5SCvyd8in1zZoy7Twihp8Y",
  "key5": "55v7BiAn2Dn5F6JYuW71LdHPgSNTD8PncGGK9H7sUqZrApHmCmsxGpyxYDtKBJYi1JLLY2Tv6b4NhzMgAzefnRkF",
  "key6": "3hcGG6kqXbYK1kPn4RVKnvz2yKjrVZ7EZ4PgmrhXfeqa12gUSyUypJhm4w74wq9SzBF76JEzqBLWsqYMvAjP4AG3",
  "key7": "338XGNx2F6TC22NYN99PVjothsHutmFDdL5kmunpoYUkLC5nahLHu53GyrE9VAvRwiTNgbDS8YmS5AKn8JENESSa",
  "key8": "2Q3VsLzd7P5gP7fuv5SmLe3xMdTxcosAMiUgHSe5YvB7T8RVtxaN8i84qBUNXVjqqipbJ2xv69wDRZJ1PJk2f1dU",
  "key9": "2V2XN8M5gPxE4hMS8MUKzwXp9ji2sYxTV2kut1jYJzETBXwNeryguwCkJhcDDdTXmeXGcm7ASyPSd2UxZFDhXSee",
  "key10": "3wJHZNJmwgCqEL4zzmR1cc3xASTTKhsa99Gata6azrb9MBruGmdWA4v8yea65XJAAemNxeLHcC7FvUNc9PaSXnaT",
  "key11": "4vdW4tpbe8bzQrFt5YGJruoGktkcRLQU6KRAL8xmCgM6CoA91PdoMbWeffzu9pj3ouhtZNzNEFV9F2AQP4MkxAT7",
  "key12": "4RzkwNehZ3XZEYwayazZq4jZG91J7NCLKf5bmfPuvY5d6VM931UScqHXCC5uj5TfAVHZR2YE7ViKs5CDknVmLhcU",
  "key13": "44AC2J8CkRUhakiPztr31n7eQLN71UL7X6F8MDgeqng7krm9hoy6SjieMA9SKT37jZGw3C5xRrqwaRkUtZErH4Qf",
  "key14": "5pfFQqjhjq11zB8st4SxnyScn8StsrzejpfHbRzfX2Pwc1DhAZBxXN8Dp1aX7iwXbsNYFY5z55QBYnYRE4WVyLq7",
  "key15": "4ai7K4jSpkMV4kqaKtFf3ubeCss6iJ8XjQzQgDhgSrcAfrYAJoP3dRS3UuqZMrWCzYZ2PBaANypmkS8s5NMb1TNc",
  "key16": "7gaBPB2Myszw2VVGjb47ftTRX6EazbtPthjMuZKFtNs4SR7m4QA6qtoQW3MjPg75bZxwazoX1AjmfdYfScWLSjY",
  "key17": "4KWCgUuMUzPQyNvpciXxmKTyHWe4DvzYX1DCXrEHieyqGpaVzDhzQUPWEVYgMtwLn3TyisqmuwTubGsUvgaSELGb",
  "key18": "5KtTV2rU5NhonkRCihiRe4st29VEL1DoWp2CoPwqeLVnniZ2cfq6UqSwVTmJ1eUnC1wxeTCLa7y6hFy6YRcb8KdE",
  "key19": "3vhnjueZiGTg39QZK4qzJdxSSZio4K9jNX2DEJpFygrX13DTtwTzGDbEHyrZaFQurp1Wk9X5uYqj7StChcmu4w68",
  "key20": "2tQeEo7QYQixQ1vR9fLbvgenbUnpgKXB2mku7c2Wp4mhndotNtLXAaXuN1vwyxeb6Dmmu3FU549q6t3WK5XtW6GB",
  "key21": "4fZ3WUQNMCsJcj6Gj4YSsNFJB9RWNwBxpMkTzzDmF9FqaDvuEJnecsDy85sYwrgJ6X3M9oTg1peu8JqDCNeo9rF",
  "key22": "37j8uRdSd1bX7nZgmYMQcScNYYPVq6dQWyqquqFhS6urdczX2Hh2SqDCf2toKnr3u5tvZHRAV8kPZkiuzqDpxENN",
  "key23": "vaP8puRhxifZ4CYu6k1FqTsBP43sXWqvQXi4wHC29saKsCB7C4A7JmLFeHkiRpRXsdqyTHDTMDx5ScZmFdDHfb1",
  "key24": "2YBtxSZBLFPLNdy8Y3rHx2kuTp9raWcxKrqnMato9Q65GM9ebx2jT8sSMgJcoCdxPYJVRipu539rmz93g7c96JHz",
  "key25": "5wYR2xfw7THwosHrytHrHUMyzauFHzvmNDWqB5iCqq6E9AfWqCRek4tHJXACPajxXjaryBQcDvsJegQ8uJReN1yv",
  "key26": "5fdSWm8x6CfwLNdt5c6oDAGBgxauMAhihNJnpLfmZ9Hhs8aJ4zXSwsTgVfPd3tVffGiboP8UpD5rh7vYBhoGrHEx"
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
