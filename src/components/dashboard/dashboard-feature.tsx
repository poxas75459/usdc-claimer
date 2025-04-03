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
    "5wAaKKpphbEybdyQoPw8iLQTwEyFJUoiZNCR5gWC62MDK6Qo5LNLCQ2QfEFAspiEAdRpX39kmqMEAgUYbyXguWFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZctgxZ6GbWHedbJdgmf3g9CyP6AwxHWs8pH29KChu6cR4w7XXgFrqrPVPCF5S3BHeGVHXC1CMQP7zBd9RDorzz",
  "key1": "5YunBxakwV68gZLrt6UycgkbKB7XT7Wsq2rWry8Azg33bvCcXsDDYVXfLPDxS836hfemXS4vpRh8DzSm3nK8tK6k",
  "key2": "zJAVyE3hAc1ME1xdMU8izHC4yje4kpo2zvo94pXj5eBvsYXL4jSefBzwMESZURRh3in6LzhGjt3ef4EZ7c9xjun",
  "key3": "3Xpp4L5t4r871H1dGvW6R3S3ZjuEB6mNuipyqBat53b9Y9qsXM9psxatgmdA3MVpd2VZ8LV4sm62Tqof2bbfmZat",
  "key4": "5EPTuN8zWAmbQ7B5a3oYJACna1xJR7GZi2p6UNPUvvwvhVb6BRjH3P1x2yGZHzW4Z2aLH8mSjkzPfU4SLYPyx9Ep",
  "key5": "2QWmR3mFvdCNHyLvu9wJTmKLhL1jowkTQ6EEEtGa7Kzki8MRpAWRzcJMmwaNUWEBeUopp3RAYKsLRC9gC3QRcK76",
  "key6": "3ZSvfv6gP2NSKFnuhEc7ErY2VSTZvXtBHkTyhN5yhyEY36qzgttpPZXbF2cyhHa4PjE1nhWRzxhFyL273o8AAFYQ",
  "key7": "4MGDckHdpR1byD5z4PHfQKsC7EGgtYcaa9MXNSoewdKv1GScfjn6MBSZhNW7iRd4t24CHAwtqecEUFzR7cnZNpmN",
  "key8": "3B7XpWByBiV3fbDHuMxEdEjfMGPe9MhGjU3wmxdUavPAd4ZYhWUcXxfEcc9LpxBa97KfuZX9isSWLpdXZo38vqD2",
  "key9": "8gF9a8d1JMtWAhkBAuDzuRLi2c8yyPXmW4DZum43ZZ4bTrF7nw4juvsBsHPiL62ya6wkgvSvNRmLJq4qY9nY5NW",
  "key10": "4y8W7WvQChVUNS2gXYozCdabgwdsvSUTqvqS2Xrqddb3Z3TxjoJkgtdSKc65DfETo5o8QPWdKpKomyKHCin1RVq2",
  "key11": "3nTG9WdbNALYPYXTDvVmfoMLftFqR9BmjYPErs89yCUZzX9TGk29zrvBNYoYC7tNyD4x88LWGhSTjrsv9HiyETD1",
  "key12": "4U1Vm7AGEYKZS3rxyb5NL87CnqDaPRGE57rND3SCr2qPp4s9LHUqtzHt4iQnbEDcPPAQMzq7gfxic1QdeLmHvzXv",
  "key13": "319yKn1zEFitjjkmCk7htGWJgPUP7Wdd3A97o7GaXFQxudds9Su1CRv6atC9F6z5Ewk9E7qWbFWoZrBsBLkBpUhi",
  "key14": "3dkb2Cc2dLDmuvY8TzzEnHdKi9o4FnG9Lz8RqB2LfS7qgXmpstCey7xyjiYDehQwjdtoEcWHH8RMdoNXvmGg3TM2",
  "key15": "3DA1bU1Q15xWe8DDnB29CBMgrj2tcMiGuWwpRqcPpACDvaKjZXCkBN3WWAGpQpe3RR2zX9zVLCfzyZBeBf795bSW",
  "key16": "5hvtHNapreNMpy3Z6Lhtbtfwym8teVuSjvQu3zA6QjDaob9X6ZUb9mkBZdS5m484irQtW6ga9oC5T8jw5zA8Apzn",
  "key17": "4PFSVkm91k6pGsG8MVjiAGWzoeG2MYj9ZRNqw7CcbPx9M9Gk1a54Y46peidSdGhmEytTV9aqpdgW3TD5FkvN4FYn",
  "key18": "2VH4Q6jd8qyfSRrc3vvcJPeZNtNgFfy8UsLZWfExG76xir8YMJNszMqUzGVeZcSADK9t2PNxFHEuo8X4nVyENijs",
  "key19": "3GfM6xHV5giLWwCJJL6Z2WyTp4XUE1suVEZr2BSKcdTeFEyvABT3foVeF3yneHq7Po8gnyvad9PG8yiiwniRssuY",
  "key20": "3FVVwBvmMRUTCZNaYYQEzYfeu9vVufJqRNECAFY8zV549HcwpJuU3VPRWMXeyq4uQ2Too72hUhAV32tyGy5S3CBb",
  "key21": "b1xF2UxHVrhKM5qwD4mktpfpuiVthXTgj8UPRmcLPNfx1KAVfrGtDrfC3Rmy9gen2ESn7mYorBjJBNZQ79GWWW1",
  "key22": "4Mzu9m3bvD6DKykJzgJTfqrvEFjJNBDuQp5JQkocX7Hrw4o8wqv6FKnoaLpsx5cY4vN7EG949xTCFkdoW2BqYZ4B",
  "key23": "2y2ZuoZPiWdPB77n26Hng9Jjc4QzGyk8cZcDLL64L2nxkG5GvXh2U5FDC2kE7hXGcfcpKjAoMBXT2RDUZtgpKh8q",
  "key24": "3h5joVWcZY4ceuPbdCX6EbkQkk6DqxDHf5cwkL5AB1oj4fv88Jqgf2a5ypGfGcEtF4ZqttB7JC1JxxXSjkEHdYBi",
  "key25": "3LDYSa9vdCwCsAcfWWTLRiXm8z36CgSFtxsV9XkrsQ2yHYWBVdV5fj2M5kZGR1oMB4NXFQXidd2NteEA9tJKwqCj",
  "key26": "2vLUqJ852GAE5rWLVqxr62eSvsKtN3whdF3NrEmi92zLmEJzp9c1BXZbiW6rJTTzaeqtzFCT9BGXRQSHkA3yPnwT"
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
