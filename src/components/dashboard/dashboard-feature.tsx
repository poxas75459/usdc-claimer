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
    "5KwdEA9XJbW3i5mLEzVRmUPPm4AcMvCCfCTu4ZZDncuE5nznY74wQmJ5SvX4wbWECAUxSTHqSHneQdFrupnY6TYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PWhptvdVKdHERQx9A2vbg2h1BV55iPhe48Fz6d374egEKiMF5fcsfqqZRPHeNG2fNLqbcpuLq7YwSbhEnav25Z4",
  "key1": "4ETUj4TB76ynEKegDPFpuzxRCM6c71RVXisAY7aBQakcNQMo61CZNgbfDYeksAhBgN3t2DrdZkqYhRq1vuKjhVzf",
  "key2": "5E6BHv4nqLRESKXeHBFPpKDKTcRGU4aVHwScFFLWRg1LZRJeBSh2fZ4ep2rHguVMo4aTZeuXzRqC8FLtKYF5pFe1",
  "key3": "5ARR1sphSd8gQvyHfWQf8qhuof6TWMsoCbvps96bZCvYpyxqeBsjAQDrzWZhsLjr8CwqYCz37fp3SNc4hF2dyd4h",
  "key4": "4QAi5m8YYxiBJ68KSNXqREPGKub9BpKLb4Y3AK1NcCAnZAkTJgDTm4RRDZPSF7toLXCvwszBLtMrViD4tL4Uont5",
  "key5": "3sUfaPUnfuowGZrnLyhEW8C4Y5nFi4s3vXMGhtSoZXnQ1XiwXrVwyJE11G4fB1nXdJV1yYjHUVcpmrSf7EybSM8q",
  "key6": "53hXmRXcM7uvvCSrY9qintjyKELnurEUakqFqJMqwm94HWknUfH8eXdsSKXTYHfcyWpyfgtu4nzqEJsoWyLQzwz7",
  "key7": "3QP6ULikNi6MvJrkBVy3mqa6ATPqvc8WG2h3mAWBpE1CL8B3vGKWGiZHqBuiAjBRJa9JLPGLRAWQ5dGmBqCS6bKF",
  "key8": "25vbJmz6bDsiuMA3B98RoL8KBonB995YsMMLCiememUCLSLr29t4KDEyfzZuifemuxnXpfvDuGX4p5jtYp6Mp7M6",
  "key9": "3Sr9xaf7CiKTNrAUtiYfafVSrxmQ5TXbtHLqwz8K26rYEZtB8FMQF56jTXZmS72Ewvg9GjsPfLeJAtLLg9uzgut6",
  "key10": "2ukD4BRuVbiqBwh8rsDDUruZ5GmsLorACkyjzm37r8XGfYckM9kZ9xLHEfnD2aWAfNo3hDgKDuTramZpibopudHf",
  "key11": "27Woerym1v8T7mc553yU9RcUbLUJYGaEF9ETwdbg1hTwzk7dJuFStymVDRiWnzX4qrcZxUfBMa2xhduygkx29dK7",
  "key12": "4oJHHwg6RdeHfy6cWrRHrRMusofyCrpJQEVXtCaAafT4BFVTH54sjym4tTU3tiiQPCCT28QakyyaCCVXiqu8RGQv",
  "key13": "MqfGHY7XHMwA5VfTL8sFjGpUZmtNPprFhx7zee9BvcyqsryxjRctJQLi1azZ43mSBPv2Y3udmWXKAUq2Bm8mJob",
  "key14": "43pUkkF78B8T9gFePyhMhP1sNtVphDZCvN8C23UB8YB6XfxZzdUznHgWGWbszGWptW13zo3GgbgYfC7xutrD941x",
  "key15": "28rbvwx5MwnDQXScz2EopK4EAkiuiEehEYWwjvFRaLeWWAHMSfLKXSYMpcG1cdvRdNnYTHyez1FgcAgYYcvUdrAi",
  "key16": "5svFoMom6pePKrUAgJa4rkJSXQyqVUC7WukmrhqSR1z7L5rmkmuE8kRJUfmDnLNS2FDxf9EmwLjRvTizpxLYujst",
  "key17": "2cMQQvBNdzWy9akfxaa5wp7KNn6UY3cbK5L68U6j38i5itpBM5bTEqy69Uofa8g1fnoxAZtonH75h6NS9Aobec52",
  "key18": "5s27MicEkw8svFunB3t3vzMJeasL5Gra6kBTn4SA4yBJHNxeLwho8hwwX5tn8iHGHqm8C1hLc8sppFtSwXfF8kR",
  "key19": "3CDbnR5UsZJfEM6dCtSNThbniERKTdn8Smr7JgdQM6u59bnsjQWEqZqtCJGEeDCjnHY8z4CpAqd21fMv9bcbANyH",
  "key20": "46qXt6fJrwSwsr4BJXLwN18S6hBbDm5pu6Cx39UH4XEZ6h7nkd7y9e6kgyBNnybEDnPQqKy5kSbeWogQLwzXQbQz",
  "key21": "4DcANCPYsjBWmqrSXM3mi5PCVZGgfHaDNTi8YnWNu4hBUartV39CWLwzen7MkbvqQPc7ZEVwk3ufw3kQkodunMnX",
  "key22": "4vHovGwdGgJyjrQsC3eiPFfzCL8gLffmBowHS11a5ZGmQztYCcD2TKPCSVq2YpD5UaiZaWJsx35wv1jAhf9ghXLM",
  "key23": "svYyhchNue5ZeDf2caXiKtb37Q2XmBN3XALu4FpKoFPCBM2dTydhbhUdw3rSEV4tHDyymzMzMbqh5JA38EsTxkv",
  "key24": "3S3o5bpJsmHeVsrbCGaDQ6KZ4bXMi5qgmEhkh8JqGTxTxVFRbXJGcXqeEQ2B8ULAbsHeDK9eL6RWk1KE1DtPPCrf",
  "key25": "2R1uiKMncQfGvRhJ5CDnG7VFkSSFjfd3g7UecLKDn5WdyNbbujwi6on6vwdCa5T1pJJ6MzZca1BVFvMZ5NCySSFD",
  "key26": "2h2GU2cG28b7HhfAkYcCPQifUNs7HCZT8mqkWYf7m9RWwbDJ8prta41uzV4PMT6NDQkYBzNGpHCRarEfDH67gQu1",
  "key27": "4R2aAGCBFZJD8z8Ec2bbXJdh4c9d8qHPvRRNaRD3XtjLMTCMTJwr6aVh2rP2Md5wTpMVsUTh638stYZ9jNzXM6Md",
  "key28": "4ye7rVg5H94QNEmBemGQinWosgsUKXFYhzhZ9uA9Qbk8LdtqVHFMEFz8MYhUCngL39axXs5J9grgeoiy7C1Gvsiz",
  "key29": "36H4HUb2Yv11LWoR5W75FNVK3BHTUtH4QF2VZ1qng6AVrvrzKZRBVKvvVjgm2yA4uWEo8b9ze439mmnfuHcwcv6Q",
  "key30": "fpv7PeFMYvzHVMAxmEdSds7QN2NVSjiCtgCcMSnatcu8GpLzWCQGq3yWnv6gXqLp1PtttHZbE2DH5oXR71PHRRw",
  "key31": "3kzLXEcDKtPK3cxyYc68kkPDn2CWgF6rHqYoWR4gqpyaPWsRXMj54nxNtGhF4TA1gbaXyjKpeaaEgLT8SEMshmQL",
  "key32": "XVBxbDvHUMXQyMmjEyrfQGV45PQ5fFos3oBNdJDoan8CAJPtnaMN2VyyY3ifXVfMXGTeeCTYxMAyrquohsctHWu",
  "key33": "5R9CzSz9CBAangFvrbguoN5j43Hu8BAGFP6XXe4iDCqMqTaLHADEb6mXMoaw9syF2wGKJEFFMTDa91jxL89nFhZh",
  "key34": "4sS39hDBfzUvYB7khC5R9jCxM8Tqf5ADjnkneQyL9hujTEvsWHD1nhPyeyYKQDZ5gNWWB6sZBELgmEcBgZeTZB5m",
  "key35": "LhYeF8FvV7APowHtqWqE7UYNRUiK6CsKXAyuJ7sxrXaEVjcMuZwjARESYN28JvALMA2gU1sW9Dp5kaQ8RAwnqSL",
  "key36": "5v8iKSrAcfAWnHULTfjmS7pFsg7tNFzD6mYYmrMKn1CFTHCR9FJ4g6aMfBGt5JYcXa7kNofL3vF3kcK5f4tmfxFm",
  "key37": "5YtESz7Qr3vPUdjXRxU2N4AinGDBtsknQPy6jvVbyhUoFEju88ayKaZQSLa61gnSkk9eSZ8ge97WxfnSEYZFUW61",
  "key38": "4TST7TrZevakJqoZn8ncyUFQR9SfVoMDYbyBwp93RNEYWRxzfPhKPvJqGW56AdUkesfeYeCEmBan6cpZCJCa5gcC"
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
