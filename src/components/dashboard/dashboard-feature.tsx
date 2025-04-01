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
    "4RmsvaonMTg1yE4A4oLhLapKHkuyUbsMWCBecUnRcpi16vaW2vgcgsXZ7ed6YjrgMvgLFpEjY8fX8yR3EzMyUhzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BLTNbDyoa6kzyjnboVTUfN9x42raNpUFJ8PhjRM1Q4PcTJNMYU52ZEtfQRXXgDGA7SRuWwzvWHtRQUwtsyLFMg5",
  "key1": "3yBNLtDGWWDd9HMXj4TnWcjR46eZvfDAZbc11aDrEZHAdM7ng63CqVc3DmpcuEs7xec6SvdwiComtTatvMfF5Uix",
  "key2": "brweZMtoG7zfygnxq18WCBjUhppB8NwT5LK8UMX444JP42wJTDSQc2qV9KxoftPXgDcxptXFVnZSqCtUeuVZugk",
  "key3": "5BY2dt4eTmEhQBmmJ5SCW6vegfkgxAYemTfqGh2vdJtptbahJ8XYJhzmaWQa6NJCpCwqiYGVePsbkDggJts3wkcg",
  "key4": "4h9v9ghhKRrBAAbp143LyyproW8PFCsgvQJ5mijRLUCptxpnUbcapJvh8ouibJy7X8V12xaFnUBovVir5pr12CUa",
  "key5": "4EYfkL6YpDZjAYcRsoVMD6kteBE5S4iRuMDxCupL6nTrUpchWy3G2AC2gLbVNFWbogKTU4WwLwsNcV1TxsGbCVLX",
  "key6": "yWwggeQxrUpNLehA1D8ucmCGQmzRW1gMCtgvzhfUXvfrwCiWNwqpxSdp7QwYPvzVXHdDp73xyAQDX2WaaqK3xFM",
  "key7": "3BDAaPQ2zQApzJ1uz4s6YwrJgm8uYfuWpSxvn5Xq2HiC2Eg9EzYN7Nk6KN1AvGZz3aaE1GoyXYZTsbUARybJYjYf",
  "key8": "4dP4aDcpDWUer6pkcyAvNLkxSNqJpn3pSQhvug8VGD5Erwmc5hgKUG3G1FFtgjYGM1V1oMJREXKqdCMQGqDCzsGY",
  "key9": "2R1xrEkqiUmMfaAarzbvGvHKUnUrZgRy7akNcKGqcBANgaXHRDPnF27xQnuiwRGfe6T1sZF7WMTxB5RJH6dL87CT",
  "key10": "xv3aDjzrWfiXAPBUVcqNKyThhY5qUQHDKcUMdp1rgaAxmeMpNxckgMZduhK28Pz34ayGFrfHDm8vwiyrQBPD2Jc",
  "key11": "4oTEC5LV9e3ENSwt4Y3mBYYstfyQQKkTS6SJg2cft8GxYnd8a7zGHw9u5Bzcrvg8rpLQt83pcWDNxdaigzoSoZ7v",
  "key12": "3TynogS3CZUoHvFeDJhcuddHuopKq1q7YUL8LeMH8XRBraxbRa6AiNNAv9TBTQFbPZLLTMz7CszcQZZGegaxSuWD",
  "key13": "4nH8HiRrcTQ2ZYLqYBMXbNVqNNrF5NMiRPFZMb1SQAw8HwMUTefjeQ4H8qCX2wJnc155pxca1qq6HPYr8sgmtZiF",
  "key14": "461DDDSXMB7TLoqgFZPkmLLr3VtDGSkQS4ic3PTvQfgrkctckeXyonvnbFHyj8n7uJyRRTnbzp474aFPfihomFn",
  "key15": "2w9WHKQNzDFTbs7KCFNcSxR5xp8sJXgZ9vs3ayoLCNzsfELRss4jM7NBQybstJpf3CQSqLCR4RHZW4ju1af1Rqug",
  "key16": "3NfczRn7dm93aZRxEP9rHvRfSHGQNgRq6Sgx2wX8eK2TyjYCrNRcayBGf4hze4zAzwH8tb9FajjNskP5AtfNeSQP",
  "key17": "3jyMVDBbjWJN7ywL913VTSF1oKE2HKbCQiS7oTB16zPmLeQmphAnCLGMU9T3U2h5rhwDAxD6Lo16k5AhL2RrMNGE",
  "key18": "5oZWtQQHdciV3mmSgvkEvNWfrFLavcMphoVM3SrNYsurbeZqhSEPNTbK9t5n5x1UcQzxAC3GYdjwZioRNHE6YAqF",
  "key19": "GdBCpdiJUKXwdPNMxtVFmVbsVvQtvYWd4p4q9LRb7K6cHVxy2WjsgtYRqCs2aTMEEdpqpdBbzumknVJcF8TwbvJ",
  "key20": "3gB91ktQDMo2NZtwRN8zbc9pJxhViikPqS3TT242mp57369BDUdkRFx55TqALxPRtUX2DrSf6CtKNA9gmruo9S5g",
  "key21": "3gwZdA6LPR4kq1Q9KMZsfUedbnnVRYpdnmW3xoxPZZmA1qMuoppkQBQGtdqmsLZYfBm5SQgyfQ6MEhEw6bG6uKa",
  "key22": "2rH4yjy4EUiDhYb8MM2L9iSui7sCapkFshrdqD5aSX9jiJDDq5fbqx3XxD5hiXM8hAFmDhP3FgYeNnE5TyqnXKzD",
  "key23": "2SAZgXvFwbTFeca8gdUfDP5zukWrFtqpD7Mf7vbmsxsSSnK1VA49a5bBGJ7V6XrEyrjw3mxQpM5Ga7mMZwJN8xtE",
  "key24": "5mXN8EqMC88g8ivWmC9Fj7g9JZGoUWUhdizFeQVoP5oiwBjF4CWUu6rk4VtTiiut8XyM7ND7Pmeb9W4WvM3xQCxg",
  "key25": "28xwfCLzfrMvcPyGBqEDvpi33xvQHrCGCqubTjKZUupseQZwkCp3537xNwL6sxxsVXN3TSsFiAjocPNQeXbWAYn9",
  "key26": "3hDyR4zq7iqiAp7z7zgenuDDYytkzhNXgXnifVi2KURMTccb9ydtPNKxNhVPoXnYopvwvsiLdmLDJavBCVYbKscq",
  "key27": "3JL9V7jXXg7FURLNh7vjLV6PLDrHiJ3qBxoEFPcfMczFiTbZaqJyBXdsR6MYqxt8P8iVrhzWgeNPvG49nDEqGg8p",
  "key28": "2pdtnp8zfv84yiSkCmsgQH7xXo7SMiCo6Sh5cqcp7nBRHkmfzPDwg1ipHX7RPZs2gCCJbrwPZEws6H5q1JPUsNh1",
  "key29": "2GEx7og25WrrDDocnxECCY7bGVPrpw1fkApBwammExhbWsgvFCYs9YVd1ngjeBPa2Sudj3EkdxKbksX115zwwPWP",
  "key30": "2FCDmHdduZNHH2SiwVR7bHjK6uQkFrDtJD4GkeTz75TjtsUk9eLsCenTyoDg7MxNyHWLzj8Nono5cDjeUVe4KTKU",
  "key31": "5uQjSTPJQve1hPWTeYm9CzaDkF1EKQpWbwm2Cv4eDmWnocBTfa1dbC32SgSfDDWAbHgaQJFKgettYawXaYiG3kt6",
  "key32": "5Vvqh9UaSbNwZYu88Kg9upbpKzAsH2JJwURiBP3oDMY4if7J9hUHwrqFCpqdSgw3JCbw3YCvAWbdNyEdFseKMUYy",
  "key33": "4FDpe54fQCBz1wCE8mGPrZ3ChwJwxFd9YES6CmJaGk4YEq1k3BxmgiEQdJFCgEecFDHguMBuq96cGDxYzp5HER2u",
  "key34": "3TWw179ET9Ftpz8FDCWKNSbduSHGP9VQsFVJgQDvLo5kHfqbqW55Mu4YAVUYhmDHFyrYYXbTojq15FNVpSzwK13C",
  "key35": "5ST2139m9MszJUSeqJeWSRf1TUeHiJxg4V5soD61QJ9y2cXKPVr7vUhmt7QP2yTr7xsMVH97SxeeuJA4p57iiqkz",
  "key36": "2tEXBaojB1CjzvrDTf1hPYvPb3sgss2DBCTvbaBvZCphdaYMRtQWub8m4fau356xhmFYpCF8bR9ddSK5PUFKxD91",
  "key37": "3VLJgdJzHZpWvjFt2ta76WDwDQhXKgpbcyA1BWRJ3xcZBEtCPzmiW2KBtAjRSJ6BPFpAGJ3Th4s1G8bgZbM453Ex",
  "key38": "scYevtXMDS7sJsJfnXkyvyERyQfZUX5UNNXJbqJxs9icXZVEcd1iJtckzQTE8irBagUTDm4t2JARXwfk7YUsZVC"
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
