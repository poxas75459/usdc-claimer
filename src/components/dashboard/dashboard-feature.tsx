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
    "2CVnkUG4nEDrut8vXY2fotPe1D841PjCFm7i9NB8vrx7SxVLE82gWjsywgrx2VjynLapiAyQ2BWttX2ui84kFy8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tMfS4GxyxKhdDZF3Ts1WqTQFznMT9DP9LB82tHixUEjM1NY6a3fi5AgveGJTbXu54F3dHkNjYkMJbq4PGwyXtqT",
  "key1": "5ZP8hLbtVUwmrh6AfQ5cjEPJjCrgw3DR1ucpAtDSfoGnDtySoTzs7j5R788ipXyHYAbdjsByNigRVowPAnT2JBUp",
  "key2": "jtSjNHDD5RJPzPVv4Ah62bAjXn49RuDGqstKcvXpAN8kMk9cdfDKtJC1jq36Um3jugqD7jaSBmk4hxsWKVPDrHW",
  "key3": "5meXZzKsoaxquJb5nKAERcAnc4rXDnxNSurhfuvnTPt1VE92MeghZ2ynWwXFDMPwBGgShLdYTvaTyqxNxg6WGDGB",
  "key4": "2ja8JV73Gu1Ld5P19Kigw616kxQjug5VRdbzPRVSS6RUoWSqbMEZGmCvhPS9oPYv9mAS6k6UQuen2UxwRjM6n1DE",
  "key5": "2XASwSvrEZ8F3v3FuLX3esxoTRu95einb3X6UJPXeESDMTjqdTcYRNodbn1jLCbw24PtbLZy8nJGQM4PEZpA1iKG",
  "key6": "4hBUBofs1hZrgKBXdyDaADBRhRwEpC88Gkxw14geYLrFsvxYKrqXvJdkwfnHFhxCiXBratEKyqLNRjSzNob9aCBv",
  "key7": "2fbGVLRcnXwax8KrsUBBJTvwHQCRWNfWtKXu2oWzNbM4ca7deMnG578V1dS8EvSskTjmosuZDcgBGuv545fNkc8P",
  "key8": "4xB1p5mgTcxxcEi4v6sYrB2WtmYp75DxTgkpznoxJfnTt3z5Jhx9K3SK9FcaTw7VLmgMw9SaqGkba6BhFBxPG5cV",
  "key9": "2NKTu2qo2XN6hVHpezvWCFsB9y4KMpK771jdoeoxFs9B4MHbQueS7xhNrB9wFNdr6sP5vcPM6xmCsU4Nxj8L2Uxr",
  "key10": "5esyJdWDukmPXDzCx35JjGSVAaQhkYojdpkmcr9PMVxFVmBSU8TmPPjTjyhjKaPwAKwGbg25yd4kLjofpAWCFba2",
  "key11": "3QjuSkuSqLuf5JvWCQrsr7qtF1yP8QcgqXY19D7242pvsYjBomCokegL9MRzfFAXcdjZ36xQy5GAjgGEdrho7boi",
  "key12": "65oEL9LXwdHLhu3ShQTWejwSkPuApxVzv3thwDJsxtMDQnFAdgsgxYmkQtDLauYFupSbvWhcHRRPtYR8y9AS68NV",
  "key13": "54qt8rPrPE8WE7GJqU8PXvMttNatLKocfh9gpjEbnU1eyHJko1FhPFjaXi13TUMnR9fwuFRuJkpR28ZXZooFnz7c",
  "key14": "5SmGyKhYSUQuJLg5vi2ShDgmjJcMUWx1DaNswJ92MUKXvei7ymFA8hmmSp7kTEbRuamXuSZfg9t7qAmQBVcG7Bje",
  "key15": "21cMrQfTVVFmiaucvh5BWEDCAuAGrptmpGXKbSvBd2YmjYW1qd6gKtwpzDppF7Dd9ePnJQ5TieicFRJo1DXzEY15",
  "key16": "416jJhRKRPmThaiGT2LZ9hKmTZ9Dtmv1HQduopWhETgfvVWz37F6Gd2A9nmjHxZXdpA2xXpmMVs8SsDPKeZzbd8v",
  "key17": "5nic7b4io9SvMEy6H6zkGHSDr6YH2mDyrrLaiq84KcHtdVku2tdc1LMoSRhg8UPsRzczGE4ZHWaDhuErHeQ2DUFq",
  "key18": "5NE1Su13TePeo2TNYxssfm6w9ockoxea3ZS4w1MUDULaqzZR8FpYoouSzAcj7EPLMnKGCCkZfmdno6kN9uW5vCX",
  "key19": "2Sw8teYHiJ7tzbGySQ9gnw7iQ7RyKmjNZSSqkwaGmzsiRM44k4sN2S9upq7dmTAjF1RTp5JicLkKea4MSKxhLBjc",
  "key20": "2PaU7BjxiUzBTZ7N3FWWPcymwAt1L5KfCicq5JZrpeJBPhUqxDF1RHH5Sgi3H6EPXDmBhTSsUkf6NEVHrWqB9weh",
  "key21": "5FiPQSCQMBNuxv6F7Z2pXXKgkszrNgiYeYzCfQZWS8N73iUm3vjk9t7sXRMD4SvzgqwDH8S2rJrJNqTubZf2DuTz",
  "key22": "8hiCGvrZuNqzNP7vY4ZJJ8YCa44Wwk9XTgSSzGmgXSAmQ7ea9eHRMFqxdB8WyJs1J5AKtvegEYBSiB6bf3d4XDE",
  "key23": "3Rwc71qwUMSzvwSfmMJV5b4AojBBT5YWpwiX5NRDWUUNfpkKxUZs59An8Jfjo9WvWFFSWgbjhzypGb8CkSYSyvPp",
  "key24": "4HBA9VpAKAJhWtX4QKoiPbEcRfg9h1WWQfGsh3uBty9FZMnfCZrASvuMPuYafmXWPzUyyZjKYAqkY9Exhr3TtbYR",
  "key25": "3LWsjk3SKvDyNYpnCRkeoQ1YbUsRo5w7221dZpKGsm2LHcvauTPkEuAQ4NJyj9CRPMNdyimD6tHvkJi4EVzStNXE",
  "key26": "X7dZKKz3rttEtnwsGCBomsrvtXjB5aXkC32wcmpgGWQXFK5EK7pgM8ZKTQeQfBoy5CoUVd25VLf4mpBXUwBV1CA",
  "key27": "5DaVScTjNAp5fbvXmhLkg44xsYWBf8kCA5nYmC13Cx9n516aPMYD2Y3LdNtX8yZBYGSW3c3qqbfHKdDumNZEGxrc",
  "key28": "1sLQvunFfdmVHdHetfJ9vsAFWnsHFHR18VXEyAdizLAxwNN3uTdXBiz7KvCzzxnvB7Sg16CyDWUKajniE9N4hN5"
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
