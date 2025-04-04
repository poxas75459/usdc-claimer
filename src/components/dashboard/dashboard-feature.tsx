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
    "MKAoZka1Nb8o59FPq3KzR57mt2FxeGqRAhzUSj7UacrBeZjjNMjg71grbTXsgws9UpiZb53qaEo6E7DvcbMgNsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KprWq9XRE3KdAQYNhasRhohoXEFL5ASjQwdZKWuAVh2L5jDdByAQYQhB4huu3AwvTZr57xAsrN1zXeW5PbSWVmf",
  "key1": "4dt2jVKnUDhPHYtkYDjuMfs3Auf9vn3TcHwxzhRebrPXM4n17BELxH9jkVacjwUH49Qh96ACkwDKq6RMoHH5U7sp",
  "key2": "411VG3tRrDccoPoNxvSmEG7FXYbVgRb1HqKLJ3MNCqRVXD7e2PQmEbBagRY6XFnjuUnjnv5dXUc4PRoYsHMwNPhm",
  "key3": "2BF6Nj6pcndmrum6u1wmn5DiGVb1PWNfgrN7XFa7pt1SnMS1rWCGt4xMjeB6d5HQd8LAwox3XB4zzk6ryVZHhfir",
  "key4": "3owBGfbYjqpoqQKRpKVQbdHRq1GzycQWhPFAPZxfc4WZdkPXiNv3RzVXxAJhp3dxwrXhdFoSZLrqhH6wcKe9aJph",
  "key5": "5B85pWJ4pEumRjz1U52tNfuDsgHoR9LnQuZ37pwQjr8DApux8o1NPkVW6aGGU2gJWjF8PAwpHYwQEbhMN2oqdiqH",
  "key6": "H59k4PTvh4wqKsk1Azia6k7dGxW7RxUZMboE4Dv7VrdJFmEU8utTw8rEUbKznaV8bR2ZAZMWLTydA5xfHg4EhCm",
  "key7": "E4cmiugHxSGF36kEjdWaPqEqba1h8hk3K56xJgJBTLv7H5Td6kG3TnSRicjmhwXQnqXwi1yGcdPCeVKjRwepZtm",
  "key8": "RtrqoVhEVsppFc82d4ih5ZKi6f3kehkgQVmnyhxCjLHPd9DXXRs8yyiRANmfNfy2vavcGtjEjPyTF7s9DJWaDcM",
  "key9": "3NisxTr8HkJuvRfZFuVBqWcGUJFHxKykGHwcstdbspaxDgUbcYowUAaBtgT5TR2Sc2i7chmVBGPphw4fFAS5jPAD",
  "key10": "3SPEF45SgnbX5nQUYkYLiuY81ZfApNU9Yp2371RBUJmeNT1dGxdHqvRFd4jeW7DKSvujrKhnYpKuMj3CdF5XNmoF",
  "key11": "3vc8idtq1cMpGQd42uB72yRmQMjZH86brMJgiuxtpsxDSEoBMMoZKRLc8RFDzeiP4zyupPqXM5Xbos8HyL1vjroV",
  "key12": "3ab3BynfWUigitVqY35ByeSUTZHaCPmi59NZHNBEFNdtcP4x5rKZ4SRoUxzqrA4yHmKgZ8ZSKBc6wcNL4DZ28jjM",
  "key13": "4RcfCt1BdrVxxgoXMXAdh2Kt9VzUNnCeDMwFuHTJmX9nK84xksdstY1YVHpG7Jn2VY318n2z4kjDE3RVYiY66CKS",
  "key14": "53nnEW3BdTegHekxiiG4pHYdfzuh7jj94HZX9c3en8j43d924Z6k77g71zdWRNxZt9MTe2cfxKvaGH354MuXZ47o",
  "key15": "4HfFTfEMdNZH8n9WXkcRKFSNzSxtS6ut17CcxNpyAxEr9sd8CRhWDht5aqEd6NGXFQJ6Jc5T3J53gpDxQzZJt9gJ",
  "key16": "33UiNDSpZhw16Ya1hbfWLasYgXB86Y5pqmn2jx6FuKv6NoEcJfSFdzXbBE7Fim5x8WQDZ8Pb7QCXZhWFpmXfWSgf",
  "key17": "3y8mMGmbguyZfS4tjTGSiuduta4fN3FF8rFUMGnGshJoYMK7XrPWWAHNMhL1AUFHoBJ4ZwVYTwoM9fGNCQirYi25",
  "key18": "61qbHX4ULE4eyrRd2SmRN8uMsdMf2NcRt69isxzTi5bTAP3Da3fqV7PaZnbULkhtzPPLA2Mecb14ZXbyxbutYUsR",
  "key19": "4h8KpiLuTycEUzq9aRxXKMJXqhu7TYcGWxTNwXmiP59qnc6KJZN2jr1aX2v27ZpBZFsCJo4qoVJJbMRrKFpPwc1v",
  "key20": "2p7HpfNYtoDC5QxaFhw1j9nUoLfcSCsCiiwZeqKuAgces92jkYw4XAc6UztGsXZgckP5WVX5YAfE22xkAWo2D2UN",
  "key21": "gWzNXWX1DceYyQWNziLmnSZ3TbpFPh8PcsdyBydVYUYV53RPqB2xW6P1DgEsP4iUtfS1WwYuHVX2ysQycN1ZH7m",
  "key22": "2W3QjAV7as9DBjgtTDUaJM1TybPXYnWMpGyPEeU4U2GbRfJtSnxW7zAtmjECwhMPcrqfaLKy7GB2HsCDzShCamMX",
  "key23": "4yNSEqkKQYeBvEWC61YjUibYjhPTYspaETYR1wHqPCj5A9tkZYeiTgB8K3nsgfRGws5sRU5WRH35DLL7C2i4tkoC",
  "key24": "2rYPhKGruhLjarCEByT8QSzrj7ffpKaMF8HjBEWLMPSVQTcMSeV9c9iArKBjwBrHn69JK74k9CG6NWng94Lnp5Kw",
  "key25": "SwwKFuPcT6ukc2ud35b3VJWQDeWGCMJUvAtiKkjstSRoQbmd6qAKPV5x1U44ZsMremmwNVSXeYZmhRq81X7UwYU",
  "key26": "TuFPWwu6AA2yebC8vKmwUnhJcGi9uvdJE7DNjbs2pNo8YtqUescmt7urUqCTJ5qTLf9xwVPzivzjFXhS3oypppC",
  "key27": "3yhvMH6G14yFyYu7katv7s9NtGsJyPb7JLTmxgBLgNNfHxXVVBr1Vj26Q4TnCmPqh26mub8SzpuuwAVeadHwXbDh",
  "key28": "3B4hfH3Je9wNc38NwYkWxTWZ4txrHUM3Jj5PDFkdJveQecDDqAz1rpEq2r74cKdsVNmiqAwyjRV9gzVGPAzh5zhJ",
  "key29": "3PjTcFewPF841GGEEEBkJTTLBFvWFS4AWWaDUoVADcGia7uk2t8zR7QXL7qyQaDgEfVCvZmsNF6P9wEYUan2gM1w",
  "key30": "aGHwWbCCSw1jZjDV5UQTzZVf4h1xMctKGfXmHYEbxYnaDcovUy7MRinDoeiKWb9XvwzptQwaMkJppt1pBw2YHUm",
  "key31": "5pQLw9Y1spE83nn5raHbC2cKshvkYg5qYazDGhE21AzPmX3W8rfCZjMHaaosqs47cZEZJERfiAFQegUvM21aNuXf",
  "key32": "LnCR9VM9GgUivQiC1Y1A1m2CjLV54F4F5zQquXynNxnYQvEmQ9hk3mmAQrufrXwMmbKf4o7QBvNZTY2TAkLnM8M",
  "key33": "46mPBfojyEKmW54uNcxCQGyzLedjC7rbSzft1GjQXYV5d5An5GqvuRuzcHFLsxrvyg99roGudmuyAwWALvB6o8Dg",
  "key34": "5pJ3fx1FouXj9L8MfqMhcpKt1z2y2m6khsjYbMoaGmMd5YahtWWz5s3KcA1vUeqpTyYHErTsPFqzHuM3nq398jTE",
  "key35": "4N8aYAK35CDGXKdVSzX81V4UTfT1CyXXTEeE8aSxTtzANBPEzGsjtm6aoYGz5XNnrekgRvKqDzVLyhdX2ShanZQt",
  "key36": "5hzrGPFEjxeB68m6hGitH9RQgdaKxraLFksTeLZFi6r4JvTYF7Lsh79ffku7ppA7AzZFASZgJBSHnsMu4dPndt6d",
  "key37": "37D48ZkNwLaguZfxWs7LkzcGiwtzZCJ4y5EUGDq7tJMnvMt7vSY6qATUT3QfteCmXzJJ8dKXmXgzeNZ6UuvRz5Db",
  "key38": "2bq5CxLxvtbfoB2n4P7BJcYJ3NvXiGPbcfBNtYDAgnpEvnsPUPYnPKXXgWFoEijPyhn14jRkowg1TE7YiRoHHLFB",
  "key39": "TF3P6ywzzUjgxhLY8R2BzBqAV4iyv6NJop3LmhegpA1WzTRMHicoQft3ZucK7xKXJRrhNsanBXdi83iDHzDuKhN",
  "key40": "2Y2T4HSzGknutkk52d5UpQE79dD7t9b5fsnmsky9PRkCcFf2ZrcwXyvCvEXaTziAiXShsPeizs1rYWoLCVvZNQpR"
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
