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
    "2U5teKLLXo6ashyqciTZxtxMh4X151wyu3o7jHk8H6yoH7Dqh4q38Lxx7b8ThrhaE2rDZgkfwBUgbn9tCR3BUagY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ycvY3kPZovytMC5ibuoUKskQ26y24RtBwhj71t8updTFee7rhZA8Da5H2HB8eXp2Cfj5BpP2dPAQCBWnvzEs12b",
  "key1": "5Wc668ncS2n1mSyX8czVYebNnQoQzr3JaqVvms1DysWXt9hgUJt6bCrgSBxg8GNfHamjbkw35vTVqL4rHvuKgdF8",
  "key2": "3WWhfwKebTqrFvAbGWaZroHLKhgsNK6muzqTAcxHJxxH9wMRGrek21sEkhG1VPNzLsXp18da5WRhSmgnvZB9t5M2",
  "key3": "2kSwxXF3AsHRbiikK6wKVucZvMAxoz6sLkNqahKvQikPMuYG1QzKhgDU8vmDqTEvzt76Tf81S8bXTk2zuv4ZF2JW",
  "key4": "59EMPh5bWP6oBh7Wt8jZJ489cGdMCWZD6ycgNSeMm48ivnHY7eE6kTHCrDHd3i58Nw1eVYw6QHPTSiC2gUn3Xiyn",
  "key5": "3eFRGYy7x5xPyEVzDguvsYazXktyYcVCqZXDrbSFdRXLAQ6Ri7KNEejk4EhjwZBdcSDv4GNLH9sb42SceJi6JdHr",
  "key6": "2tqfUU3r1P41y3o4Y2EyAh21ABLg9za6ekte256iU2xMssYJp1WpEB9y9h3TM5LbCRqxrY4V4tau2kCGr5aoEBpN",
  "key7": "2YwBzw4LYyTaVgxPKmxWaybng9smRxkWVzczmoBjyV9UrpssmPKjRJwECjUaLtTLoswcgX3YTFaAsdJ1JtXwLSU7",
  "key8": "4xWPQ6D7CStUNhTCyvjq8a2B73P9gimBmxNK3ySSRaobxC8YhsE6JM9e5jYpTLazFpEuj7peSdUpDpxBEuBcoDrm",
  "key9": "4GAVYzy3gAsexVnw6EqGux2j2nFxXLFD2gJbZFtHXfvkYTTZ1cfjwSa6WwVJGvuFgm88yUA1TyC9KYSzrJ22gDJD",
  "key10": "57tNzUipSDcbLKEv3zaAxPv2Axkf8Y5xhroHgwpKbXaYdLwyL9EP3zB4GPLuadcwh8JzGFqBsUZfZU6RewVBM9tq",
  "key11": "55jZFq5zU6sfoNEcXks7cAZhH55f8Ekt6tSyXSZpjXzRHskDQuxnjNzPyAxHDGsTuoSnjzQu2L6f8UTKm1ME9u31",
  "key12": "ctw1zCT4xG5pJtVJ7GHEPMdPVfck2WB6BxtGMfc4d68ukZTsvHfCCWC3Za4H7fD28eStf6BCofazqvyHkeTUZou",
  "key13": "B6Ra3W8gobQHN3vBbmpg8NPMdxdXN5urMpH3RMyAWVity7eTjAy3wag8XjQATTNv9XDSPH33GVM7C4qvAVFffUh",
  "key14": "3Fca7hNUfFfKMFg8xqgEJ6yowb6vWQPLCrdKtvM36Q6ZdJzmCy9FFcRGQgyrQrVFNUeTkVzBfbnRAGPadQgLTWYu",
  "key15": "5cm9EsDA6HZa4yahaHyi6W4mT4GsqBShNjVvAs6JXbfFcGpskPKdbBNZ3e6zETvqWnpKHmSMc5Dmq1sTQAkhUpj7",
  "key16": "3VXCbMP4A5oHP4soJHd2vfwxkodhvdsqGxqMn9TX5b66AR2WwAxhNW5ymMgwirS4t41eQMfSZmSuUJcw5jMjEsn9",
  "key17": "4R3RMfyqrcP2b6STgJVt7FMS5ZNp4xRi1oRudBhcDYZgWYPXBLZGhPaqtz1dqiwPjdXSj4PUAxAaUP9Dsb9RwKKP",
  "key18": "Ywz23bHzVyMwPJojYJSbYnSEm5uQQVszjd5q2k7vaksyc9bHcDWnVjBLbpKWwRzyB5vLTxwQf9egeE7SVkgfFG3",
  "key19": "3cxXeF4qB5dU3KtdR4bVfnpdUswoz96CJCEgxJHybGahfyzy3Nqh3KhhXhRAQys6nc3Yhp6DGJa7Y3v9VmhfCQ6v",
  "key20": "3zHRE61vrDxbtCPb6FoDPuhozEL2zpuQAPzovwgwJcWgetNxvnc79kJw32aw2d9RGdEtjpGb7myyHT9NdMU61SX2",
  "key21": "4XHhvPtL6DpLyzhphPy2tL5DKCC82vZsxPj7Y93r2MUmrqJ5We8Zm5NnPXzRTTmaF6gyp2MHSr8XB1awj9AXFqhA",
  "key22": "5bUUdqmEdpWfNKpBd19L1WCyjJCxjxN7LFeNg6gXjSAXmNCESG94tVnNjKC7zKd4K5XYf9wErDGrmngzLyJV4Jwu",
  "key23": "56Jg4WkVwGLpN3fzB7WPud5kx41ujbsjbSreYQfBn435edVEyuxcJV6rtU9e9DfthUqwYQKKBt4ZuMdfxBKwUQ6L",
  "key24": "5fzxcN1NpksU3GSMAPvx7iz61BCRsMu4CF3UBvSdDgTph3o62C8gfCU1YKj7B67QniQejhsumrQhDXJta4JFYpi4"
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
