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
    "3HiTUxFV2DbSKmpACY7bS4zuK7NmFqDn387ZPKVDwJsmbLbchuaMQLv539dX2iQHSARiiVPFxPH7k7gHo1p6VM9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5grJoKM6yn2g6woMjH1BSctXQppo8WiNvgLjiBaxLCiTW1c7BE4fHsszWDQhmkkn6UozcKCcQa14oFpmbjxbsUP7",
  "key1": "s5yLTKRiLd17KS5QWnAtzyKKcwbB3mRUhDMuNi8rngrHMd7Ha3BrVKsV1WUj5vbmZAwCwRnVCz6vsun72VjGvxR",
  "key2": "2Yd24HfeQboSetqkczkrDQN8z7QZFP1SgyuaQ6MBTR1CuSxfna58ZDXgYoJdPJ5s5nWuPpwDCChPBCAjW1ZDJsuT",
  "key3": "34Aemvje4dM4jxd6uo7SQ1PKWPgAkoLfAjg7ftDGybrDsBbcHDSBw2xRzfu1dgLnsrxtiQQqQnWCCRJrwBX2GUos",
  "key4": "2wnGHocGXzyC8RmYL9esrcbLNZtYvSbgvVUffCjmfSRhrQ2EzR1s5ijY5xFVG7re6jQZCpFqwdZGw9dWVg83fXZg",
  "key5": "3pbK93kxpuVZiwbGC1g6Wapux4345dZYyCEeioZjFF7ZX8b5vuwQhweKdkL9zXMUnoNXs3F9En6MCAvdRNiGGv4L",
  "key6": "4hDCzNSfBMGDL3WwUGPF17Pxiqt3diCJsJK1Qr3CYykj27y51np1bmVmhBs6RSj5z9tvoCkNTeRZx7LgCbsWaehT",
  "key7": "Ap1garQmJ7ZLJJic1TdB6qQbSEjTwSSVbv25x7CEPuq7YtQFU9p3R6sw62Mzpn7avTmqQajpgHnUkdAWceAASeY",
  "key8": "2UsQC2jBQ2AGyTP4sTypV3PLWArSMi2D735H4UuQEJpzxuTViJ7x8t5LTXEt8fhz3iwwKU6UsNV2iYBQRHjJP373",
  "key9": "MhqdeKUruZxF8BqVpckLwhzzoYSZ4yYCh1Z7PwfdBFX5UVyKTUyBaH8Qyj8BwMQMVvZTebzwxsoKsUCvpFsrE4i",
  "key10": "4MjuecHvWLymWjrFdVZWA7HfSJki1d8p7JSsB8ueteyCfV3G7tMKGQWRpNoKoDeEJ3uWXE7QzHyTz4iNHRGMR6jv",
  "key11": "43vEGwgj429yqkTHRU49LHVDErDCRdDzkuqceXdeN3FV5DTrbcPvyWVYrtbQojM9QgJJiaaNZFSAtLVitok9KQzE",
  "key12": "41kchHohxwqpHNUR45KHy26Shr17yPfuu675j3jRhA7ByRQAPmNxuEfLw7Bk52ByjsJayZQpp3yX5cNZS9Gpo7oD",
  "key13": "3HAbAt8y6mrvnsHYVHjMoJFdxVMbVQwEYPJjToza2AqCWnGgDuPRP5NW2D6EXPx2A4pkCPtV8gXRrsyt4brPMGp1",
  "key14": "37hVUU4h851f4x4MEjZD8UrvnTZ7uXi3bU8NmBaZDteehoF4F2JxoTmSqzBQxF3QpJqpSsNepGiCRUDzDpeNLbVD",
  "key15": "3jh6m1tbTUBjXZQHCP2GQkQrDF3pmB1bYPnCMManFTXMRdUMGYDoUCmWwRGYxGdAvvcGuAxvSBJjJrjD7UPc8Eir",
  "key16": "mpwLHPoARgjwPpfgmBftfkZ1gc5pCD2HyouVMYKz8kS2BD27bpqBwqXsSuysFAh6r5tbtopKuPyXQ6J4M2Gc93A",
  "key17": "4Mr6t2BWQ7npdegv9rCjz7dX8U421zT96NiLJsBma1AmP6nc31Z6GRCkmQG3kt84pYTAYwaNexDCcyiqheH9y4vZ",
  "key18": "3aStPDCLQL8AqNKuFsmjyXFT9VkmFQgJA14Ru1CHQQ99vk8PzeybKSJksx3e6GFxfqrKSGBDNaU3QDimAP41neZV",
  "key19": "qSjHCdo4dcdyFVdS6tdVSdJBF6j5984etPyJ1xPfrBZQ21HmDQMTxg3aWicifpQhKQKfPKZmefoM38T1ZpiR96t",
  "key20": "2KogtYACaDAduHkFqvGvfdu2GsqvmtNEkuBrvsXFGENehhcmnyK26SUcFBrLCm6xxL9nvpJoeMMA8Kpxpj3kzCm4",
  "key21": "4FaagAdKct6z5ZwAK9ZttAS5U4RukvtYoBR4iYnzUAZUp3ZAjFSf8VCAuXvtWGPTemb9AUW2LWiqZx98XSsd6A9",
  "key22": "ikocGEYyehAKVR2ABpgY5r4z9zkZase3vHD6Rx5Uwh67meZGCaUYmribPzfQJVVsYfCBBbV3DBRQuZuqK5jfJD7",
  "key23": "2YAQJa6yQgUWKhfKq3yqruYUMP3rHFRSozfHDyPjDnZNcZW2Q4bh4mHjGCGFbKcCfxrHNQnhuT31i5AyvSem6diZ",
  "key24": "54yj4w5QdLiUN4BnkCKKvpUtB9fkJDfve8LFn1z7ieasGYD1srGMeN4LirDnuBXjWopqeM1KMU435qJWvuRmcj9q",
  "key25": "3dMQ8QcJ26DPqfbQhpniofbpXhDk75MESBXnZjpbYHkNR2B1Kcf9HgcNv6iutB3bRzJL5MoHh3jh7ksZrGwADYS4",
  "key26": "2WJoMKcWxJhnbw4ersGUDPHuJ4a1kVXtFJM9np9zHaEq9bHBz7YiPUZ3XoRp7tHTxWQwVeXG6574rfrmAM1J3APR",
  "key27": "3tCrL19GvLHi7MWtpitZVkAk6nbe4VKAPAugd2r5B2X8vfgzzCN44XJhM7KDcXLyi88KjvuEHbQAYKZhD3JaApzN",
  "key28": "NMhZEpjRsX9Dc4pQ7KB6nGcEXDebQ53g5EhTn8k97XYEqgqYMWoU4JX5AZkRfpCafgngQeDXFGAQfD7Kwm9hX79",
  "key29": "2sXYMWP1WXtJ9ExTj35KG2HHnCKdF7pfLnb2qRWPotCDAYL4sWKFhnRWo7C54yUTYBjWmNx1AdiYnv9zChM7KZsg",
  "key30": "2K2Uz8JZ59jMcGAQHdvmUFxKgkDq2bjsc7cbVDvMCS1DH6xczZbNdktskHSHzSzR83BjuZ9Ui7LMmMu1doBf9We",
  "key31": "3DEUJcvDa6P5KFA4x2tPSSFroi8A47R9ZC8N14abqLJR1Kvg3QhVrwxpservJrXC2QCbQ9wYC6CKXt5Q9sCZsKsp",
  "key32": "3Ur5kVXGtzZ4FbokW2PihCYRGSQfR6d4ebepKNsy6Kh9xKDNGcVbYwe6gQPhThAXeeYMVxAZLWjt5z9RaEeG9zPe",
  "key33": "2cMChnPGSwLrELne4qmvhMtL8qwhZHeVChTt1aZ1KYPYyt6gbNzSWhk89mMsAZKNk1x5Bf8Uc1Pq1dxqeqt1oUeM",
  "key34": "31XkAJoajwZ2ZHjvkawWLvqxAAN6tpYD3JnzZtGn142d94vAjmYFmfHSUzfDg4PniGBjfPWFcho8fGfNkwjmG6pk"
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
