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
    "5gSg4LyKMiQRziZjh8sGgrUpFBWpjLBWAVk2VbgEQgPuBFfdaWesR2FurooQ9mGWXq3U11qzmNV2VRExw9z8WgMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VkyMX9MUaxUwzKN1YQHFTAXEDc7Nv2EknHY5EnSWTk5QhdagLfVwj2GKHTtmzd567Vok2WtBVoPQ2uN35RpeFFD",
  "key1": "2C6RFETFC6mgYFyCXmJuwmXaS9WX5DfNcdWmFMxKX6yqdQaVBuWcWZFYDgfsa3QXvCH4eJP1DJSswU9Na96Dptsd",
  "key2": "2G6ZTwWxL6srxe2EARkE6ZsDT1KbNUXJVDnWxqVTJgFZ2uC3eahCfocd1Gzw4WmioC29GMs4tu5nEinZDSDbwBcw",
  "key3": "3DcZdTem9t2pJ5DNhQGvmYiEnmUKwL1M7V3f9k3fRj1rhFHjtssyquT38M8BfN8KNE1sWAjJ6tbfSRK5mdcAYXhq",
  "key4": "iVUBykdGN5zfBqsSXzzx6vwiViXbZqX9p86QVT8qLbVgGitZ6cQ8pYjor4n9EWrtZtQ52ssSxg4QLnBHGzkvZnu",
  "key5": "5AZhPY1Jn9Z3Z7ZsmMPt98zMGASCADQWXPjGxFuTrVGYfHnmBqkfcdHT8Rw5cjpD3gueshXrp8rPMGcEd2tgGaSo",
  "key6": "3DuxHwrBB7JBtJg9pgyT5xhsEj68XeyaEEjLyYsQVw1niqvUsfyFfz84ZJftUNuozWna61FmNjFkSrjuPzmaMkDJ",
  "key7": "3RUzcbMFpB94TQDUbuk22Gto4DGkXmuKDAnVAV2AfeXNardRum8DfzRqRxJajFJEMDoKoPrNjLegedUufe2g4Lim",
  "key8": "u2mtXichC9iBK3bomF9Rwnrbxdtn3s3tGsqKmRnFuiVcnWsb1V7LXPDhH8a7wBXABq7cJ16jasuWaDtB8318owz",
  "key9": "4UGhCX5uYZRr2u7UNQKUb4XADwdshXGvqkjb2QeKAFvBAbFCe2Da5tZtwGX9TiH49ACge6XURcEWsyDgtwYy8mig",
  "key10": "4eNd6FVr6wFMMy7M4MxoV3A6arLLMCgkvzivuF6wX8Nq9ttskrm9X4ABXfvtqyxvL47x1jXPj8Z26qyP4wMhMrgS",
  "key11": "5eWejsinwZdNvC7wbDeybPqunrGL8uQfZ1JYaLkFS8qWW3tBU4y2orp67B6TYQPyGNm4FpZDEEdEtgaYnEfDhXCg",
  "key12": "TWLdFjX5wwW4W2z6rqLMRXKLxXh5wgaDLTrprvbzcYMarhkRt3nKxBVYUi6qPZTRpZLJ75X97bzieN8wzePQjkL",
  "key13": "twTW1BEoR7zJTGdmTNoG7qrSkVRuMxyJgoXqoWdgFQXeQedXRA1154HmoAzv6YZYCeKuxetBENd9pZJEetbUGJi",
  "key14": "utkue8vYsn9HnVjLwLGhxWcNSsE94KcT7ra6Bg7mEeyaMQYnY3TYbvnL38UJckGmBgwrNJ4jegMPGWfErC9PGBA",
  "key15": "5XEJRhjgCYywUtN5MoFAPZFqEa3qhkaN61NpZBQgnrBS7BU5FhE777ZwP39zpxKVwbj6aeXGhr8pPNzyiH7LJBjv",
  "key16": "5c2AXueopGyfJwkmyACMUKx77mM9u565K8mgE6tQHFRrZUAs5SuQDsb1RyEPZ43pZdj2UrVrA9bhBsoyre1poj7d",
  "key17": "2vCBfQzDPr9YjDNXpfZc7EEXFUKymE6V713w8AguEYnxrPsfWKVRrBkGfgFEnVgPdPH69bUg26f1ajPQ7Khi8jo3",
  "key18": "4vYyDhfWao3UYvTmpj2rgE7VwPmqZinhvdxGsF6xBajcZFi85xadqL5HaG1RFNNgMdVeQtg79xxzHD3i9NaeD815",
  "key19": "2gCAkFCy6xYk5UXtjEHziGYLL3CWMqk2yebqSPre731p4HS3YJDrWFSVRKwvspryZYSuYxGTc4TX7fSGGuon16Ff",
  "key20": "5ZQozTrPodDcD3pSoyKo6UCCsnmntG1xdQsNN97vAkJXW4nG5SFUbFtcg3TP6AQhruNbe5GVoEeyXA9UNfmRgScg",
  "key21": "2B49VG4Vi2gdicK5XXA1cp32nM5WXNgHv2sUA8gZBvjFeoava3D3VCfCbd6sjWW3Sqx6q7pd16hRyLjFd3jLyzN9",
  "key22": "4hSmryua9T4XNQNkGqcLh1t3WoudfxW8aDQYkABr3bKfqGekYCobYPPwL1Y3XFkgEb7jgcXfhhTTyU5h92R6p48K",
  "key23": "3hGsStR4TgFXueXFiEttK2FFX4EMFR5Bjentgg7yNcf7QYHcmNZxAQKMB7TVxSeknHgDdu6knpSHH1HFAY1Mf3Hp",
  "key24": "5KLyfdQRrph36d5yB7xaNWKucTKJFvaWKCg7rLpgBHpKmVSpDiuRT9t5hSgGQE27wzVuV7xZtEtHGu58FUfXyA8y",
  "key25": "5WLGVErWzrYKhYBoy1Hb6cajGECodVPrC3Z13gX92T3qaY29oQ85MQ4VxqidCLKmRq529N2hYT1rVxftb95BMYhY",
  "key26": "2B5vnd2aVNiDwgGsz1xZviNDoAgdqwPkw3QhQ7LQL62Zw6nL8bBwsBYpa6cfWDaWkUwVXNVnt6SZzGefpRZ8m44G",
  "key27": "JZXQh4hqGAU1mPj5db7cU5sXy2rqqn5db1jBDYbB3F73nVfz1vjPaNZDk7BRJStKiHrBXqkqj8CHAyXcpJ7xThz",
  "key28": "2RKiCp68nigNUFAr6ZcRoiq6K1FPdDfm72HzXNKQyBKDNTy5A4BRVuXLWbAGuj7PGhefZ6w4q6kzEXdio23zqBmU",
  "key29": "5ev6VJygFgjYdLrDgEJu1rnJSHmzYpsmDTcsQP3dhPjJm9Qr2sLg6Ehd47BJPFqdgdqiRW8dQCawzLDwEZn5UKAF",
  "key30": "4Z56HFZ7LmmY4AV5SAVFS4Nm85gX3YHeKNFAP1uX5uLLySz5iiJKEhFCbtqvrJgsRrqd6QP2DAsFphzAn736RKFb",
  "key31": "gbz6nmTfW9MRK8Rff3iN5zeGig1p779YjQkZzmVM9u8whqogDct3AtbRZs51Y2Tdwb8EcPuWGb1xN8uqptH43vt"
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
