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
    "5VRarpjMuMpRK7Srk4jacYVvmzMMh9M3ZNdY1RsWZRzX93bbZMctNRopUfoJQaSD7zZe29woPLPMfFhNWrKxeUiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pWqxYHSsjrW5yM5nUiyd9BKczqrNpWsmsAJMLoUN4GEmos1z7PwvScqbeA9yfiHMUyXSTf5huL1yAPuwPTkA3at",
  "key1": "2GwDk7FAmJ9SRoiVSngPhUbwiMitTg4pz4D7oUain4CxMJr85ns7uZG1A1Wq8jCuBMkb69YmHEokZv3nmMLKAbnm",
  "key2": "4KZ35121p8QwPpqNUNwRwbQrbwVe6JKLKiuwBCoa1KaFRNFxvpJRNpYdhs52fDtDQfTvXFQfPTh2CrzWATdgCMA3",
  "key3": "4M48iJzJ1ErHW1DDTESDrdFJfJ8cTJyLL5wx2s2hqpgqZBqg2xHoix3v2YJphL2SmWKQVee4zAoCfyikXfroSu1w",
  "key4": "5hVBCKkdYx782pR8xaYXwHR6juPj9iG4zEAGwqHNrSfowhhZfCyMe4AHqkVaiEwaQX1z35v4s64pJxnkoskpT5Bh",
  "key5": "2TskgaCtLk6LE4viAwLNVmuhp6yeBumikHnaNxKP5qDGNzw9tdCtVyKZvvGEa6GccE5syBP91zTznP4oBwWVVha8",
  "key6": "3CJAJ7gcbMh9vQ1qPFPkx5zp2Dh1JbVMREqPtcKqt1gyTUuMe7JrXd2bHumd8a4d4PnGhZjXecV3K8uKR7WnPbgx",
  "key7": "KRjKM9jSBpFCEJY2KhfQbBWA2SAAhFUNS1NVwJXKLudjPrM52Wp9j7LDd1psFycVwxMwFJnfZK9j5iEpED8rPPT",
  "key8": "kb5pSMVMAFzv3Wb7ybt5b17JNn3jGHrqct3FzUGSLJ7NUbGcqXhzzwk4gyrBm55UcnWx39m2RTn9dAmYg7yy2nu",
  "key9": "7DDfNyQUoG46bTn49JKcaYZ9JVyJJQzAkU9BBDiLJu5wRD4KBJggBCRTDD1w19u5qaqNHeWWD6yBsiG4YPRzjcS",
  "key10": "3UrYVCkZXhKLnLP4FMH7Fg7x3RPxVoCbQSYuY6STy2EcWYcghtuRR4fAEY9SR6v6gBS3GX1WJ4AmnaNjxWE3JWJT",
  "key11": "4RCdkdrz5P9BJKLgcN7J6XQ7QL88mj8jVv9fibE1zJsEyZ9B11Kmf7wn4VdLsYWfSF4kn3ahqE8WtPgbZpAYRPBF",
  "key12": "4N7kD14SzCWeKwDUN9oWh5UTVPrUsrcyVsYVbKWcke3JAkvRADrQxH1aJTK6L3TdoiFzqqEE73k5biL1pNErhnps",
  "key13": "3roeSNDAA9B4UCZqeYvCkM4y6zRFZdUokEFznFDAR3iLevAc4wgSprnYTGobFTDA5KwMXnJ93U4Gow1akRy58NtP",
  "key14": "3PxoigQmz6ynG1WRoLe7JVBP1CzPss1hFpSe6TxixRAWrWVRtSPkJ8zwRaWqLi8Jrza7Fd3d4GgU2fjkSXSvQRGe",
  "key15": "4WvdxyRwtRZhGfgfKrXDBof55HHDqcq1fTKxQF8kLSQXTbQ66FnRSBEGa3SjmTy5rEWCv1MmTJfjZCgndSjKRTnE",
  "key16": "4Rw9Y4CkgaguQKwQ2BrG6yLuJBAGh6NTJar7aUcErxsDSagMTKZaJc2tUJka2nKKJc5LJE2mNDhamjN6ANgnfYJd",
  "key17": "5UT4pKsTrpUeMg1ZzLFhUnSZJvUP1uQeRPWRb2Y5K26zTnYLV9AiGGGNnGycwsDP77jN3Ec5QiKC1ktcKhLUDqxs",
  "key18": "2ukNoWw1JMMawVnk8U1HQeX2R9o4PvfGsUmK8yvTkJXbH8w2E2M2tj96QzsdPZHSyv2WSBPrbXQoYxbU3KQcRRPe",
  "key19": "HtKrEA4BFSbb3JugutCWbcp9S5KV3wv5iiGDzfYUNfSxpKvo4oEUc9VThA4onA9fzJCxGLoLC64fW3BDMuxHt7g",
  "key20": "3KBhACmtr8gvYKn8KaWjeqgHnWNfSk5C1XXXPJ7da695psaXbQa796GEfqJS5HQrJbfmfFUQpMNgWNgpyHZewjWU",
  "key21": "5cTTTnpoynm5kxGsNsHXVHmpe7iCGLDtHfyVFpDzuEbYWvKH68pJLJxzNNm7QytpWKgqgPkE9Z7DhTYie7sSTwuh",
  "key22": "3YuE1WvE43zzYFLUYHf1D6xHdQYW1DpAQzmwP38FTozhb76WUQwvN3pLvaPtDgfEjiUJeXyYqGMsFgiUujmEHeHB",
  "key23": "2L9d5Z6494wWtayVP4YBR4ruTdksYZGttX85fGXry2M6ztEQNR7GBJ9SNu1uWxLDQB95eaY3TxZbhkCMGPQWDfti",
  "key24": "5finEWJTi7QxNKs9E8XhoRESGdrnN3rYMqQMEtTQ8SmHk5knuTBH5epHBZztaGxHJ6s9Tu24epLrFjxXX2ms5iFQ",
  "key25": "e9RKi9DPCPFyaPPFVdCyKWNNUw4cw1Ur9KuPLzDPGHm32nyeViWfywwN9rxt5x5TjgBR4ssVme21wGY8pTKdK2g",
  "key26": "5Ro4eNgS38dbJn65gejLoHALxVPDRpQBrHTU93orEkdsN5Mf6wPS2b27B79TdiQUd1iHdRfz6dUzChvj3m8qzAGY",
  "key27": "4tttio3SXDFNwC5uxc8msDh5nwUxzR8uvG6BBfHqS4WejGjrm3hYLtaHKWTT192bCvSLGhT7PmQ5FHAUdGKioGBm",
  "key28": "4AmXEATWkhhkrikixWAYkQsY4kM6qCVGfWZv9YEDtBJxHCgbLmCHQ5bzCjiFdCjWKrpcWiaM3cpsNsqLzSQgguHL",
  "key29": "3GHbpbj28xDHpmk4T2qUZTLWi5e5CxqVaq56BmvUBtNtFPXMgRXsMCoXJFUDUNrn3jNywprhUyYFmftB9b9BDDjj",
  "key30": "669fz384TsCdRTRyAN3nbzbaQiU2zCqqEFTPtkeDwAy7eDF25Dif7SmSGCrzeD67FKomPacSx8oSDuGDjJAJA7Yu",
  "key31": "3V5cPXMMXxgr2fu8JBbVmKVPEivVWHVsMdXxkBLPBrqRbWPLaPbExq1hG9zvudhgWSjexjXAgPRB7Ms3vemXhV6b",
  "key32": "35X2AnkMmYDfmSY9JccvhURkdDozQbbj8Vr5uGZRM2Qaxhgn8NsNop9rFqm1ekCd7xsx2eNMhW6p9yh9XHqjCj97"
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
