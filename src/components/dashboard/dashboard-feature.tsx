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
    "2Dt2m94pTAgDcPTpWPeqrLvC9McLSpRHrfTu6mTARorqAb1R7afYuY1V5ayPaE8THgqfbMUGVqcWba3wHrVbW6Vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FzP9E3e8tURuo3KGetqMNzmpSMPFyKrND4ktMArmvn8CeKFEgsReWHmq3it23JUk8oMHwxjDS9u74e2opUrkr2F",
  "key1": "4EfetaMzGg9DTMqPzbVspD9TVjJ9LheDE2mS364CDP6dAMW6EwSb9cW6uhdeZw8HUyTW9aDmJpijwJ4WeV8EY5Nz",
  "key2": "5DQrmEjEzSS9e9cqLEdmWWLnpd1b4xL3CpoognWAo7rJNnabZC6ps5KzqT3HpCTsoq29LwhSb55pnrT5Sqm1tcK7",
  "key3": "27Lf4MhGojKKaqWgXR6PfHQBFM2K9GgTHvPkXP12LyofMA6LUwffR5fzpaZC2bD8yUFByMmpRg3DVQVawq6AR9K8",
  "key4": "4zVfHLjVMoaxjJNBB5KTHTDfoBZbMZAWmZAXepSrP2szkbW6oaTnSof5qdpVpcfGgEjZyw8PC75vYRY8zMsd682X",
  "key5": "4nV1HJpPcghZNxQ15xPMACPCFJXoUv5n1aENU5m3i4CatYUM5BUhbuufDUrJGB7Qq1XJkN3TN7JZZCxcuSB77QYY",
  "key6": "2kHTnEsvYAQxxMDecWMvUhqbXbJTpRv7Y5WJjse6iithkFRHWmqAFeChuokULa5jybuWqxBgyuZSH1sQfVYybnpr",
  "key7": "2JJmu5vbAeJv2uEfgdCdaSQHDKaamfVX4b7WfPqS8nbF5xoV4ojdR4qxfwabQf5LzfWTFB64n9B3pRtPQbUVNDjM",
  "key8": "2cN5wCSz7H3EDjXX8VXkBjk548CUFizgdkoCc679xSa3bC7h4tvvVWrs41nA7oq1uczAbztzDhn13uwkrabJm2gC",
  "key9": "h96KcuPBPs1txWi89SUz1dwkw3YymwKbQsZjzGB1wAfkuUE5zDMKevuxwCgRf2n1xWPDXJRiSDgR4Vtfy2NWvqG",
  "key10": "3V7dSywh6E84hSjmDG5WDmWj4cnWPdtKV95bXTqoQTM5jH7N7XjCUh5M1Gg9j9dFfxCCFYzBXPtY28F6WyG83amg",
  "key11": "4UAaDgJb4iXpy6a3S4AkiRcnyAajYKzM1JtFyMgFyq2UWwjReHJw33QYEccmCLW8MuVvL1APfpadKZkdtmzYpvm5",
  "key12": "d7b2PHoGNX2oSU8EDUe12aD4jQSGR2Q8sszyCfqVUMhg1ombSR8iNESiRkkuMemqDhNgXzqhk2dourZLuhRpXQa",
  "key13": "ozgGTjedXwcChtqLcU8yackchtnydKvmYcH8me5R6NYUUCKAwdsgf7vjMsEFXp2TPwfGDWGw9mg7CN6f4Py7SNG",
  "key14": "56LzdcDQBKuYNNAR3kZFbSKavA8GSS521M4fbTAVBBqQqkoJaQcLiKfJJqvXDq7LEaFHCvg1YFD8jctawCRF7C5L",
  "key15": "5TBdf3Y8EHHbRdMkaLpSU8Mrob6dPg2T1zoG26DHTpjcw3KXfACs7Rh7re38PvNRUH2sofvoftVvNAKa4167jA8E",
  "key16": "4YL2nJ53PA4ojEsupfPTPmoP17vrULXxm8MfmhDYEcXn7sgqYFH39TQCoCyhsaQ8bKhtvyDtcT7AH4tFwjGNm9ox",
  "key17": "3cqzBytK6tcPJJa5QvLp6wjRXXWvWLqqqUXUxSoekNkTffPXqCXrGfLGe8TuQopvG9KKbC9Psobvjec3FQTbir4d",
  "key18": "EukQLLrcRya4GvQThhvyoEwr5xkSaTXChUTySjyvgwWJnmsnp6GncTz421Pk8ow59NUejARYWaYdqiBDeacVUoV",
  "key19": "2DMKW5s6UaTA7gTgjBjVEzA7kCci6TiMKbq2kbi7fq8u8x73Gigbxuodtfduqi9UZos1gearDiF1zrz81yr4pnJN",
  "key20": "4xShawTyp962QdgxyLkUUHk4iFPTrYrNJgoMubSRHimQer8yaMPHVuN9NANYoQcYc6wF7djEKo97vUJZ39w88uhU",
  "key21": "5D267BvyRAj4f5UtQkc58bvMw7VcBJCiUnYTv8mm3S1kuauyjEBujm5f7Yg3hF5L1WfZRfdaTNwdugYkaS4Zxx62",
  "key22": "mBUnqH8ze5MrPiFKWVWPF5qws2snNqChiARvoevjvb3fi98i8gahcHXq16FNhqNbBt72pMCf17UixA7iMTsxeDe",
  "key23": "5YYiMVBGQuRKkJ7FDdNUBDQeY7wWXLLd2E2xFtVdErqHfYJSBWyXM79ZrTFQ4AmpjPHV8AjZFAoFPn7Er2Y6wmaw",
  "key24": "4AzE7fMP1R2ZMcKaFgsB4ry6TaKrbrrpTzEbG5VNcoNQZpNUPbqf9acQbjcMkB1dEmrRpuV4qHWYNSK8N9WVemoe",
  "key25": "3c1tDLpkhUDzYTvrTH5dZGr4PZTcGMHcKTLXKvy6Tzusmpmf7rZix6P4cd1AokTbSLSgj8QRCC2F4JPSPJXLz73T",
  "key26": "5mUVWpeFg3C1vtCThioDEPRXr8EzbRT3AiPh7idwRefpUbKETyjj8gJGnfkXzYWSUFCt9bhah3BiJuPLGRCBXQgv",
  "key27": "2GZeiVHWt2g9MSkHtAtEfEN7A5zeXJoGctNjw8fNCyhHwQniXmuT8KBL99uBDNpxCRMnV5Zv4YeiqEbg86G3kE1V",
  "key28": "3NfYPBXwEVdkprWgyAVWBe5khu9EvLDFzDKtDzV5Vt3Vx5vySGcuFHcqK5AEnNCQbsQLEu8vC8akBDbVtWWGmzXq",
  "key29": "47hEgmQJeEQh5NifLw2Qs8fNzc9MADPTTgXKG9dJXZ7cDU8cr6LeTd7E4AHfJaPag5UUCq9tFuXMybrfBY4zKRAu",
  "key30": "en1BSx7tnMAtu52uRnkhstxXLaNKu5bGNHggHCasHCX9hJyPoEjRtSZ8V3JjxyEWNYC7h9755MepusNcMdKfadq",
  "key31": "2fWz56Yv5XWBwnQHGu2jbpfYvur3ngxaq48HiGxzyGaF6mzYh6n6tGNSFe4iRT3iX9cqtYALu6ChN8HM237frErG",
  "key32": "ddmKKEM1UnoEwu4aq86CCga1tPm4kUdWZStCDPMWzYA9h2Z6RZ6yZfeFqbVgaVAe4s7EU1oRc1Ca6kt92xMWjx1",
  "key33": "5mBSkcrJjC4dQKX4WMWh4xXvbVDMFFGxhSAB5icFmqb5vMoKejqGgFsFnnnDhB1EZEHKq3s9dbntWJ5PVn7fuzJU",
  "key34": "PZ1bkqfYgEEyHoxa28f7WaVHcJWg76LQttHW6Tsi6wBDERr8XSaZvpEc8nLHDFaFQYnfvhLNfexwMGeTxJH98fH",
  "key35": "CJQXjdoxz5o7hjxYgBvBS4UrdzGcCAThfpJpoBfmv7tsyr4UJWYSQYL1Dk8HauPVP7PuVkzmcfdUXBTD1UUVjEf",
  "key36": "kFrEddQrLi61nnSETbfCyaND8atWxkxe3LSMExmSgJD9E6AL7kvwuQKrjzSgXY7VaejfHSuhuK6b1ziiH6a1wps",
  "key37": "23iLsfpqgmTNuTtB3Y8K6MQ9iBu4CxKtFvaVgpD1thYtzUNfKeZidqtJzcg9r8swK3rJCk39LENkov4WnJfSLo49",
  "key38": "3u9TiF76abBnirHjnLYY7imACNumkcr2gNpYVzD34dTERze9o5XP7AJvZtUYE8YZnoZqRHo8E8udhbeQg4qtzfqL",
  "key39": "5MNgToLAZuC5Tzq89z9srk62zMDk7E1frpL6cktNrR3ihHdmbSgacZgAtbwAGrsWYtmKai3kQSVKMdDFBhYodwvm",
  "key40": "5bByURgSVaZCY85uyC9KQmj77Mkrrf53BtQ1mRvr6XXWdnAhXvfVbDByYGFSuZFRnm4ty6AiBrniU5U4aEFyfX7z",
  "key41": "2pEia9ymD9EEKNZxkq9yNjKX5WLQ2VR2b9g6Le5idzuUfjcw6xHfqAHCygkzYiBcETfewLvcU9S8BuhbRiDFc1RU",
  "key42": "4yJGLAehEjnvBkzGvooW7oBA6exEd5KxqSTVUgnnuqSSozpbnmwKxWmfzcif4hHwiUpn8R38TVAHjwG59zSFGbD",
  "key43": "51eYkFMUQUTVU14KfTcQkEiHzQtt2whEraYxim4kTpxiMFSztuw5AspRFjWoQtaeGgpPqrfzcvGjGe1faci4aAvV",
  "key44": "qLwB2HMG3s6ndWCgRhnED16LFKpmioKsMgTH8jhqxY7qfnnjfxQBK7BaNG3nNnKvNJJXDs8Fa82m5RB7bDHC463",
  "key45": "2KG4Edu5aWgQsEFesoE15WwFBd7RU5nojg2azXDiqo2f7o8EBg7DYVSe1R1qCjZ1Q9baRMsmrcfwmsGWYq2NzPaz"
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
