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
    "55ejErQzNyTedKJ8HPn4Ydu8JFNCr5Mz9o2jCkyEYAvjUTVk8Q5zFDMgRNUvPokaWxHP4k4KFuPdSDrakjGNPk5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A1vyFJF16fpHsqRVt5qTDu8BYyxxrzHsAbwZLR5i6rLhGsXxrJrtdwJQbkpr6VSmT1Y6C2M1A4UrjN4HEvgbVsL",
  "key1": "4iR9VLwWp9dTte15RhjmahM3ZfLjYsHdmChEkukqU8GVfv6VguSGnkjEHtEEHYxcpDPy6yd23FVyeRLSmuZkVsLR",
  "key2": "2d9TYiEALphEKMQTMyh48AYup2q3Cp9sKsLF7b8DTg7FZ7oNyF5PycmQwNb8ciLRZJ1GBi9hxhUjxvCMADnRRHwP",
  "key3": "oTqJgaH2nCzhuaLYjJeakVkmasfQzigTQECUKkBtq2dt2rvB4SbQeVyHStdV8zE5wty93r6bTz8Bzp6m85dF3tC",
  "key4": "WwjZyMPLv53LjCNWkdTjoVMdM1LEnBR43akietxrk9p3hPcnxViJKnTCQmG7Ats5RbS965jkJY7sziRFeoUuPya",
  "key5": "FLiyboBk5dazcS8dTbLcRCbvYxy38b56DHzUjRiLJXRuGdhcsTEmH6r2xPut1ACkDx7RKbF1YTaP5YeAjRRn6aW",
  "key6": "3PRQEFwUVkaTUj7nWbMYrMST3UeNmqL7UjU7FSKoEAWg5XxtrnG9fYMQbyJGRESW6jiijosg6noSjHN85mEHDr5p",
  "key7": "5EPCFGtCYPzZ9znLZnFtBmBjDzgWYzKqoLvUtEHdrG5hB4zbrC1FHSoNptFnTQW6L6ZPWGfaTyMV7U9HHUMsW4Mm",
  "key8": "4GYK1PHi7joXpMx3uZYDJyJz8nimUnxJykZJ4ntzVSdThZsdhrigcectWd86ZEKfjD684LvNuXRzCqgdZvaBUgfp",
  "key9": "4V3vNb76s5ZtoNAbFS5Lo8fdgs6pVzxU9KdL1n2h5vqc5YfkhcWCLNtBWRAQ5hMgXZ1ojCUGjafmXqoLTSHYmF9z",
  "key10": "5tevvmxck1GNtyVp5UN4aucYZ7Zfk3f1Wb7gnQnVSxMTzCXznwdyLhmDZQDYFHhDMDJbQQ6Jmw7uKDfre2HTybYC",
  "key11": "3nBERPiJLhBAZW3eiXbUrRq5WKkiD3eMgkDoPWXFhL5hFwERE67EjFdmJ9sCzXrVT5dAVejaPCLyeYYiq7LSxXKX",
  "key12": "4JuLBCxvhKNxpYF62C4V8jc1b1nHvsrJRo31z8MDdYS8WGnYgZRtpX6PjFvxJoy8gqkqAqMVxVzsfv8ihq6aLPA7",
  "key13": "3MTPJNuksnYceUErvKaeYibxUQtXdxw7g6YX5KevMGp9G6be66dxFkoYngW35cDRvWTEv5sJYh4zzLpo9zkffgn4",
  "key14": "3bnKnjPoszQrkZdzpkJfvUWFKhX22ZyVXqcjaU3odZP729m9ybow7HimyEbUVunZXXLuBr6QtYUJBUbViZ32K3PY",
  "key15": "37PdF2RThUE66vUi6ruy8bv2HAZ85Ak9V5iXg4Abw7bTwnsehLvqxwTujnEdz47tHX3RB41GKBNvwvvNrzfyqzxo",
  "key16": "5uwQKguw5NytKunRwffULGBFaFoSMyTYBcTU58tRkJb7apTgB7CsE5bCFCL1bHPcmgULT9ydJtJ8KPLa7PCchTys",
  "key17": "5Z6LTAZmje5fuxxsgekM3Xe3qqbRf73DC1UsvessFFFfpzUmKz1bJbTv8grzpZu3bPVjYERWCR9kK12kxsjfKBZn",
  "key18": "2aKffHWgzzUwYCpD1dpKSCF1wLUzmHUB7pJPwtRTu9Mr3Eh5FKLUkdCFskkDDsDAWmQUwFmMsb6dUtjn1nSxpW6v",
  "key19": "2q34mfKkZULn5YcN4weMp1LqmZ8M1Wh552FWjJCUJcSc9QUhWBWZ7PKdE8utRxYLv3i4S5o61Yct7xDbVaupKmhB",
  "key20": "2HLE5atHgDUPearqZSKPkQsEPEtuto3v5W3X9Zh4GPZ4Zz67BoEMSwMeMYP9o6zhM3Gd1DfiMgMToxwJSJGJz3QC",
  "key21": "5eTbaurUqsaQujDE2ciDsqk5kceokB8dDcg8SgX4ovSJs4etviXFcN5fFMhtSGbwCHrQDWec98fZoi15tkbe8ZP5",
  "key22": "26nb1kqn42XnMjEaXBNwykb55kYjJBqBWQXADFXFGD6Um9uYyQNmvgKeLBteHVHdtNS1YUWuTL1AXvtXJ1yCznW3",
  "key23": "2Uh7L6n1G9YHcN1YTt7adhjJaEWQ1kGzDSVh8dE4NcTPjXoPKYh64812sL7V2CJQED6XQhtMKcHb7XgxoRSxohzj",
  "key24": "wT7rTJXCN929zu17t45sfLqu2RKSxQG4ELVWQ6o3aFwrF1jvW2BxzrBZ8YxFdPne356XeZ4wmAQnm9wEqTH9HuD",
  "key25": "43kSbi84tVsQQzRQVxZ632JTEwj5tJiwAVVZrgikdTPdAY6faD9i2eZdHMGfNrpv6pyJTJXLyzCWxRooUNhJSjEF"
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
