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
    "5fsp4pQRdQkGcKGL2WxFkYm9QseMoMXpxJKMM1YBCvVLJQ2RAmZJhZqc2ZY4XtoYv92Gz33aqpaqoTzbeQJey4Q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bfKR4co3ugCvZvfpsLz1QAGxmW2oiK7MfH4zoTqXpK46zVbL2twFKdzrzvUpcoP9ADUET3pvqHQezfdmRffBePz",
  "key1": "3LunA3GuYKbb3aveMu8ArSTiPvTkKXWf83d9moR941eLRFtX5bFSzE7NVSveRZThmXMvbjS3ytCBqzTo32aqpjfY",
  "key2": "5Z6Tx2rnzN4YCXZQFLRYPK8QwvxfpLrUWjPrRGmArMXA27LXUQQUgJwnDGsVnP4xQeTHpFGvz2URYDQVRjp9dskh",
  "key3": "4a361Vm6638QRabaZwEZitpdmG4P14gNeFVmq18CALP6DJE3yTCupXubiAECGvUBTgeFpXwt6dYjPp6urfEJ2N7j",
  "key4": "5E343i97k4vmF4JRDWQoKGrGnf5EUsZiXgSgxTyte4W9eSjC5gaAhBCSkq7xUmFrL2hUT2W5xLhuPVc8WF5ZjtGF",
  "key5": "3XokTeUA2mYtjzkjce1unWUNAZcfv87yuMb5vXXefdeMzzvBqkQkGq488MmAc86hh3sv2eoGX4VELHdJmvNi8u7a",
  "key6": "5sQ5K1tg43XHX16D71EbrRtUHmWLjYU848c77XQeQcxawDR1dksSVYbjPFuzZ9Umg9cMiBk11L9pmJBX6tpaoKDd",
  "key7": "4djZqAAqFPNWrgpxFpqa4JXFY7e9FjTck9qXE8SyjuVNMSfz6NM1KVw9j3dxAMnxcDeL15qRVVeKSTy1KWfyZWiA",
  "key8": "5qDTiyF6A6AMSphf6sgDr6EtNZ2zC5Qtm3j5c9Jhw9caGrZi4zyTKcsqBGUr5pKfJoTd1PJAhydKWW5CwNogFvRX",
  "key9": "2B37uvbmrj2BuVcbpQg41drpT2mnHSWgQmKPXCYxiBE41N6nhTCbJU3btpik7NqZuR7FT6euE7yuk5zxMxzpK8hy",
  "key10": "5JGfNhLjB8Ko8uK6cRQRBuumpA7GKfwQcjJ8qXh2kgAGkh9hweMkzbVZCRqmS2CVsUwosX17hbMyzHyTEwpRCudm",
  "key11": "2BGedXoQiP8nnT5XMLrpkNYsUR3S92ZNwTicCpY4FZAgVkfW3sA9KKCwMyQKMq3pDHEKHWcn5fYo69bKCNxaDb3H",
  "key12": "3SDYsofv3ENKsdSw9BLUNjVmDK3JZZkWvG6mGaN8n8r85zmXpoYwwcG8WJHr5W8xojb9ggpRXHWdU2CxwYHh85aP",
  "key13": "3W1SGDQ21BHuzT1aHada4izDi6oztQGwpnyJKp86TFaPjntHYH54iE8f9RyRugdQLmQQ8QfmirzXYm57EcBzbur3",
  "key14": "33D9nNi3P9mWxV91aV9dLnz5y5FYzqwQyqozBxVSxMdZF73HS8B3zaN6xh5dvjFSHcFNo5wWwpXtaZrUPA3x86ZV",
  "key15": "5DiUWeB9MS6cfmGHf7h6VjK7XFZeJDZVzxZVPoCG8nAJevwEswRpqiMPNU8mVwSrzy9UFmBqktVkUnvhUqaxWNhG",
  "key16": "3MgqpBgEsMqYNPE14aDWvXaG7qABrKp5L7dwQwTyVtG3GiWhcsruwoCe6qJBiju6V5ca3h8eBDfELphdaNie7agT",
  "key17": "5WGkKAykqCjYbHh5bqPgSymGQ63g5VJLUjyp2tv3YwhyvA3vqM8nxm2a6WSpi4ZRnhfnRAzz17nrbyMfPuZ6ExGo",
  "key18": "5XbSJLUy68AHMzJPRcXrxNvPPAniNkngtpzs5ssgvWcVuezTBf4EC4PxxNoNbErQkgP8YmXDUSfMmfKLrRQUqdCS",
  "key19": "3otaoXLfiBW9SjgjxyPwcXBqLSSonsoy1rRCwbaiuVmwrXS3NntSBCR2b2NGuJAfGAUFUn3A8Sv5BCDD3Uo4o1HH",
  "key20": "3c2xcUmBUSt9tNMYQRsGyY4khi9FHB4WVGrCnaZMGvjBdzWAj1AnWSGpvGbPq5opmiuyN9VZmiGo5LpKJeZ93gWr",
  "key21": "66q13hkKLht68TZCPKpCCwW15RhAGMA6yYpV3eWPyHcLqaYFUQjfRwZ4aX9cQd6QHG8Gpiv9P5zt3PwZamHiPjdv",
  "key22": "hiwUxn5E2oF6BrihQQnFZmgFo67f1WqT5hQsCmwXAZJiZu6qkQ8nujY7TkXxqrtgAyfCJeNCdQ6cMzRy9Fu1Qag",
  "key23": "5AFX4btbGSFcwGbcv4NSmbAHY5rmRATJLf5cwNr7E41ahZs9PB625iV5ActbjmXxK7ZD6VPitRE9Ls9pAiRFT9o4",
  "key24": "5TZg8CDs4WtifGVNqPfUvLcZAYH59vadbxjZe82h4sw8U4pgdNMRwEnN675y7omYL8LtTxmHK8YFsh212mz3JCSP",
  "key25": "uVBJXJtREARXoJz6VjcWAfhwxWnWp8DrHiTLD1PnZrVXgWY5TAgWntwaoTReMdAuonFDbqkT6fhVz8naq8JVUtQ",
  "key26": "4uMcVSPGBPKbsp7zjWBKZrzWe6th6G8UVbbdehBrZv3QDbxXd3CnjJ7betQWJ2YdskeKRMJ4i7V4QHDQ77Eukyvu",
  "key27": "5JUqdBYwqKAFtpbJ9YvhF6BRGqcbmQSP53ypdxKvRnfSnkuQV9b3SADw7J9fRA76QDDh4v44ipzz3BbXbeyj7J6K",
  "key28": "38U7mz4RNWhpeqnVkdsiaXyD6fFDik9UB4fkvzQEAqEXptHPg5ze7nN3itNMkKvdztVgNdmWeQcLWFaMB7TE2wUT"
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
