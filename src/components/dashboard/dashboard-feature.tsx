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
    "2DTMnxw9Gp33oedzehtMcZr5Cgyaqa4MKfQNj3cVnedsPzxy6wxLkSSrJHB4MCaUEL4ZLTp2HYMjMHte9cjPbAEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NAJni62PHoxcj91Bk8EGgmWo8dC6RWsXsmDjQmpoLvF6oSK2jz58kser1YcMptQJy4EramGeSvnhXhmCzEQBobE",
  "key1": "4VpQdWhHEiv6w8ptddx6btkbSPZnckp3GT4L5Y296rEeqAWd1CT4a9Cr8U9QY6btz72qjkix1Ry1kooAwnrKEbSD",
  "key2": "4fLzRseisHgimwhLgokc2kyHXPgUw39pSNSHskXZSJ6R7PXBZBCXw7EPXPyXFumtfW9NnV6hDvyDUjfgaRHceepc",
  "key3": "4mXb5KB6hd5qtntHFRDGrnUSiYfL39MvPafgXjJ6BZJPxSGMTjGRqUrJAPbGZtrrW8vuHauQ932M21DoNWc5xFNE",
  "key4": "2yBDncAkN8DTkjeTYFdrpi18PDTgFeg5m9jj2R2qFid6cjVfZyNejBtJ776kHk5V5cVQjxjaD5LFRTXGt8nR92L5",
  "key5": "59h6JaCtciipS4KDNUfTjvgUkhDu5BCY2e2cRjtHHFn2gQXbQvZeAPKBYiTrLBwmoGM13b8vimnAHiAMtQnp1cu1",
  "key6": "2eYD6ocqQ5UqFoFqsjNZCQhwKWsMrjHhDFvjdcmxMCNJ8TmUxrV3Z3uaivbR3CTNxUhigsPxZScLFEjFo6oSfnhN",
  "key7": "KpzkJZJZTCbjRVavTxcvcsW6nSHYkpYi8x5v9xmnGUW3P6yNgjkLu6BH4EaR18H87vqUKrLPtqVmtqJfyirfMQy",
  "key8": "3dFuFQjNjLdSwfdQeHTFvhC9mLhg97kiR4ARE2hRRyMWAnmMLrWvQSEeYbGZy6u6o3EtMJPqVMeHLGYzoRzbhEzX",
  "key9": "3UWBedaV6mTQTJP1sVwfUsxnijCNRg4jGwDrUoQYJKXLg3Z4rNciqMPWc8nAUkwThUMBbTTBdM22U9uMZRDkSiuG",
  "key10": "4YHvSQr9ZJT1JrPcXC9Yxc6c4a5PHuZiLmZZpHKHTrFCkBM1X78q1FPb1q6t18apWjFjaF7pjcS7Cpbw89nqrG4f",
  "key11": "5QbhtozVoRkqHGbh4oyA8gpRJgyDUfUCpPSbMMhKHA2BQE8rbdAdSncYVvMDfZDPjLX4xfdTpWQPpFbn77y5ordU",
  "key12": "4YLEAjSY6rgVdDddkg3rD3fbXLQV3faccRTe3MSy4KzPaaMzGjVBbDNGk82bu9TrDRVAossMEQaztcQf5FMEJijp",
  "key13": "6m8NkbUCBvqdf18o8YZcEYeJC4MiqiWeMrMDXLsshZDdDn8zDehTxdzKupJGn5eioEZaka1A1j5KYvf1Hbq84P5",
  "key14": "48tMGw68JrBzPWc3jp8fRCszaFne5YiWcPaA7YyCiNw9Yq7mdwUQLZ1W7AbqxkhHs55VUnRG744AyW1TS8HJYHUg",
  "key15": "gwv2NCk7ie7LPT95QjYkMBv44mYksRaA7F4BVGDMsKVNS9scHtzD4tpY7AX26RT2h89j39hc1vswuncNsK5UXXd",
  "key16": "5WJGck1K9hfdLxkTyUbMKzUy5uyVznrPZCs5ctGcNSNN93c4PyZhpQhW5HffNUG1YVwJWt62joiGG2EuMwic27cU",
  "key17": "5JEF4NR438Mt2SnkjBLcFaK86D6Ta8PycYvHR5hcbQ2u9ZmdyBg3TzfGz9KpvLkRFw8K94kT6TNeB7M1VtWKrKAg",
  "key18": "4ZdPEL8Q9ydXDwQh1d2gBG9HLt9T6FtLms4HaebVAHmttxRFZs74c7wjfusjv6dxiB2bPFW1VPkwwv4Y7QLEbY35",
  "key19": "xsQHNkAsTmVDEnMJnYQLmDDG8zNCzv4N2NmoZwgTutJcoLSDQ6FfMTm3tkQsukK8oPoAEegDA2ienpUCPgw7Zgb",
  "key20": "3r11zBN8he7UD83CLbZrbr2Ebe6jQuBrBKTv1iwnWAJCsEmjU1iLGzrhoP8baFcCkWCZz1hNKbd6gD8sh8FhcZZM",
  "key21": "3ZC3E2N2DxnmE2V5Rq3KbjFkvQm3vJ2hZL5BYraSbaZH7fvA2p9niqYqjFqmnQtXWFdDUTdMmh16WzPVuZUrePrk",
  "key22": "2ZpjdViMu5o9VeNXAZzoDp339E9Aryfnn4UpT2feR85WgcDDfYShD76Qegutky3fbaWcaQS2V7BZre2aP38edSUH",
  "key23": "2SnLiUzYSmu3xWfQdSkFedxyXboEHCcz24SaJSv6aqhkdnvwTKzSgNkxwtozyTk8h3Jggi8vXQNYaHuRARCVvgVy",
  "key24": "419tfw9hGxvRcv8NoQDA49bXp77TmXvAP4c3kWKEX5iZamPcyGyrKqrJxZ7cFNEWuJSYpAGteJSkdkXrJ3kQPiFd",
  "key25": "4tAZGfVHpV94iLNdohiZHBx2KDKih2nBsBDKAgPHx5rE7FLESUTvsDivbTKzzKbBpt1Jvrom2RMH8feCbq3gPFsA",
  "key26": "rwXwNJL3YDnjt5M5fBRR4uFwTBDRGEY3TPoi2QDyRV71M3v6Krchd7kx9FsBPutLMKBAjpi8dAsMqtMFfaDjzVK",
  "key27": "35bNXvx5GynfYUCeL9H4RYWysPu1HBzwky1VTsBXydtwjBYMQfDJZuqWMXq5ZK9ZGzHRWGtVA6ov42mptUiCSAN3",
  "key28": "5sNAu57647zm7ULUVU9yEkLskszwZqrZ1yhBhcsQBVsM1rX6mKW3bCDY4WsGMj1NkT4t9xxoNiVCH6yQsKFTVbT6",
  "key29": "3mqR46cD67QkYBAFU3eALJC6CB9KtctmiFeKdWtggUNwJhq56CcpgLmmecC9qDqBks2bGefij5GSP2nLZzHDMtQh",
  "key30": "4cEmH1iZLGQhNnihKKe6Ek8P7ne3UUUEK5Y2KLbGEW2kjtbVhWSCqPFJrLZm644H8bwny2rf5jWbTnM9f9xpyZd8",
  "key31": "2GYEr1xidfYNUd3JGBZk52X64EueH53jUB9YHrZMJ3hNWfv7rT2PESPqzDhwNLGfmjFwinCrbNom1shD8oujcybN",
  "key32": "2rYXthG5ncGDQLCzwjqvpz73dzYDkakaMVTzKMa92UJTBoCoSTwA7afbnJFR6CU5ZxHmLcjKcoanKnTwNCfJhEGk",
  "key33": "7k4xye2fNc1CxZnEqc32LgyoYk5CmAjo9EpTh71u3DZQoVLkHo3gazC3fmMv34Pzv6V48fEWWCh4jW2kF7HKbpA",
  "key34": "5zY6EeuKZaPPiQynt2PXwi6EL62qwLXY6o7sTxvEKn1SBi9xszPg4svRzq3vxex3975rC1FtNSwqaC4df56Ezbn",
  "key35": "eX6bY6AeU3v4MbhfvvFenuTttjhcimW2S6NeCJFGGAaPNP2dWVabfCz9L8qNJdpwJHDgj5guf93LBsYgjgHAEBX",
  "key36": "3AjQPc525V7pxkKEZDsqTga9GF1pmgLqiP4WjhuSwdpbB6D4nUqw3BXxogmU3s6g6E5CoaUtkcsFySP7cjShHGjQ"
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
