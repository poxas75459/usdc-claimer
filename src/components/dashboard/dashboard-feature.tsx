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
    "3DsWitTXeQ4FHD9CzX1PgnUJFFBxBqDs9YgbB9vme3w4R68cvzABZEYAv3suYm3Kaq1WgnCwWJ8ytUUdeX3XkjrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65uazYkVtxnKZ6YsDxx57E7s7MVAZSczAPUxvVbXscsFG8brAvdKFvcxLoqBP48q4gRvdpvXA74WaXtZEajaqiGT",
  "key1": "3oM5QgN3wCEpnH9c4U532hLPXMwUSPhJJixdPqWKMatmXA8kZEbRkgNsdNPFPGuEx2XCqLut6nywoJyNuBcVm9GR",
  "key2": "5SptBuidafgkmVADxDccm6fKPCtZUpgDhniCBUhBMEGtHvch6MRD8ET1RAVarfdtR1htfoJ4GYvAJAvYMfQcQD2u",
  "key3": "5meNoooLCNBG71G2NDto5xn2WdhtNtnbJHzQByPuxnnMe6L3Ktqu9Cq3RXG3eEn1UCbHi1DcYpSwaNhGKFTBFPqv",
  "key4": "CBWq8cMNpHn52wy1jrwZRNAzL93yzS6Azb73EnYfbZu1JcJ7cD6grpjb6nyY38CEUNABAjLoYZr9kdSkkhfrWGd",
  "key5": "jE9wjJuAzmnT46xfmEWsBZRX2tkxFR8YzwjLUqAV5sfM5iAtfnzSdPRwVxqDDf1K9AB4tKrnnafALCckkFaJMN7",
  "key6": "swq3zJXHwr6zfiB2h4SqBo94un7cvvM4f6pioSz9NN1nMEAgCBz5rivBYrs7cV7e47Ko8K1PucALhHgAaXGEFwC",
  "key7": "5b1KqjB4REaXRtLwKm47gZqfq8Zy7SsaH7Tqz3ZFhVQS79ZxXBw6HddLj3y4okEg5rNXKZDkGX7FzSsRD8kvm85Q",
  "key8": "5t5E3Dfsa9Dnh2EJeFwULfkSoGyUXWuqQ7pcMh5qDrTHuDN3c3GVLYzdbLB4HvixAynU5MYggqppEFFTdNwWEKgu",
  "key9": "3rUqNB2mdfmcGcYS9qMFWRebYwmozh6TSMuFXJfFSsuUVo3YFHcEFmXbNfnQc4oQTU85aiFgbNvvjUtbjS4jXwvX",
  "key10": "3j1bj1NtdGpWftqs4uTtZouiJBdYxQp7SmAxUcgM4tzfDjU9BgvdNvj4vbe6amjQrD89xo5peAG8akPxJNUH2L5m",
  "key11": "2BFB9avB6Gb3eaF3kEk7Ry2wPAQJBcWuPMSk6hRHk8q6p3VJeFF7GWLthJeb3kXNeQ9HkiJf3Ziu9ipFSCQFNUeQ",
  "key12": "nsVAv6dTB6NY89jrGZWaDQedPbr61UkDatxX97UeaEXxnnAdDQ7mVDhwWxJRY3TCBBVGR9PY5PdmtKGFDVJ7r9h",
  "key13": "5FVga6eCx1W152uLA2K6zVLC4gGrgP6eMKBYyQBTBQvhcLbFiv6vAhKzd9pTMhVcnaV8cybsybZfgxNC1VRDQMoJ",
  "key14": "3kz6sKjb6oCP9TNAZSP1Cb3CGkxUoTd1DZKvmJHsFKeuhphujr6oJT6qUfUdUhDGRbVMLdVUzTfBaGeuCFPpAeZc",
  "key15": "4w827YXK42mLS1fu1Y93P32DJmrgnzcy4MRErrkyaES2VY3mADuN1QckUymcCTHpaVPSx7kVsxF4jJn1cKvQgg1b",
  "key16": "2qKCcNgEJFXvaqX1GeBSWGGJzVXzhs6oSAhKyVzBCESQhjcxKNLC4jsS3R3YjhFbeoRQQ4v63h14BjuDT8a5ap6j",
  "key17": "4Acyq6moLu98ZAFRewnnCuqxjRpkk7jrsujtSiGPWjNgbqDpGmWnrCLAH639RCqLTuNFsjGh9t68gs9su1pe9xom",
  "key18": "3rp7asfnJ2MW7mcNRmM7fv3cqWHRcAvyY8FVub1ULxezpdLCwdnFtVn6rkdksBLTZ6sWnV4MTeux8JQpGHep65Po",
  "key19": "3XSuXRYyjHJKy9zhfY9Gn6hssZuKNjQMHJGuLzoqiigfcimSKYLKN5eRKC1kycJQcpMxiP8ZZ3BvD9L5KviqyAmY",
  "key20": "2j2C78pKzNcR3dX8cB4nK5rgCys22t5shMsyLuT1sNUK8FL93aGV3uwhV8jB3bs3jrUdMik3xHuu9twZnzCfBa19",
  "key21": "32UEq7Y9Uf2t3nKDAECk8fa7MYjuKX6dBb5xwBEAQxZaG8nmHTztonnS5jRvEDA4xtUJwdvKpT5QPk1uUrJSvxAd",
  "key22": "3ZAhCqJZ5sJsskQMPHYf9HsZpC8j82LbEeTSrrsE72sKgGFgvQE1CcYD1MCWEzpLKcj6i9AEKQwnPyHrDg4myVZb",
  "key23": "3KoAf3oMMHtAqimvuhvS6A5JdnzEpFoawve1j68ZUUrc7iXjst3ShzHLeUKtgehkeP44DVuNFuV8SNXouWVYx1W9",
  "key24": "v6RrUFWufmLbtg7zerdQt9Zx1nhHuokBL1qsATsHdM7uDUVRFF97LUKH9BuVrd12ik1EEdgbQECztpQmXGRz5vC",
  "key25": "3SCK39dP7iTeMrsVmXXNBMWitoVQ3YNkcnQENrzUjuh5pubwo6iUUu7jUj6zFuj7dMcEtm1JdLkgHoFeEDwPW3kE",
  "key26": "n7iyCNBiTQRDwozM3tGNRkniEmhqXP1V1Z68RsBHFssuabNr6B2ks1a7RAR338k71dyteJSzXaTqXSHjStnnEoj",
  "key27": "4V15yk6QSS6StkT8deqHF6xyYHe5kgiaWcwhgKrri7mzHrQpDBwosKvRWyakNuQGApNJEPHL7hY2En6gEYMFqfHD",
  "key28": "385wJKU33svoTUghVnvy42Ped7tXa1DLExQV6uGiQqDDEPKHmopsALAGvbonMZkkJ8p7YkPr6rgK7ga8rqvh5vZ1"
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
