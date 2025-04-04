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
    "5EmeyC9MhrW4HWKtE5LXUiF1T4ikY1S9G1EK8v4Rh9JerzWPuzsrzRZcTwcerMUdSM7jiWZ5q3nMhuyLA1ymvoD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8htWvKXpzRGrDLQrriAmAqyHLXuioCs2SZ5C8ti29yZ44tTUQUCM4NBvu1NRjfeBVAa9X9qNFERBjoDonTjo6E",
  "key1": "96WTd3L3eTrjcx3tEGuA3XXZv4Sj1nyM9b5qeJoitKUVzzdF1Zqrb5Da4ahrWhQC7GLfr24EpTbirxab4DFKjvT",
  "key2": "HmkJMXFZvaqAavJqt9ZVpFoYEtvDaSnVjo1Q13ZEWsJSYRV48mjw4fxR3KufTykmERB9R3UHPxKL1Ftgep26DKX",
  "key3": "31oHsEiUDiekAhuBnwfFNQvyLDXiPSng838tVs3JZf455PPA2XKpL79YuhA1UH7YNqtBJ56yuZKDugM1QXaQHtCH",
  "key4": "2GBDo3FAg6fCr7CvWbVpiAMJiWaTvCZbunFbah4Fd4roWKRP1Cf1arVshnJTwk6PEDrqWBttBWG9MjKfZbkDKjaB",
  "key5": "2HfURKa4JjDtXJPtmtux2ACKZNeRBd7Ap2HJBN8PCbH6KnvnFf6gyJhAVBH3TVJCuTQDDN5DnfTbtkrXf5SXeGC5",
  "key6": "2SqtFJKjX4uLphRnrZS7epfYWg6cWVf4r3BwVReXGrXMgdePepLvHrRM9Pauw5F7HJkGAymby42nSUsxag74mGbi",
  "key7": "uSF68JvNJr3RncBqc6XCaWkFPrzHqWuq3UnmUnZQyxBWNcdeksPH3yjmdLNfHdos4zym9CsYA6NgK7LVLV4qZ8t",
  "key8": "B3haiBcHtZtGemRGTAquLNdv9MSHUaqg86SnHvGpMmLsr8KcLyDJNgXvXxxCmzEteFbKSw3emoLr3MUYBBQkgZM",
  "key9": "2cFVLyBNtB5z7WhPt1Zxhxm1SHynhtqSMWvquVu4yKKraWwz7keDHdWzZGAQnsNnFtV83vBjy74gJLPgFG9F5HDq",
  "key10": "48B3sfACQ56Yk2GRscAtRyG4kuT7egc8JjkYWgTr1TS7Hv9kAYHJF2ksLukN83JaFEwsmLT7wUufAirALQ3NDjm8",
  "key11": "2nqnQPAayxH4WMFtQYspER1VmLhQBgsFAACcXuzVbDRA28mJUzBs3WMubuxh1CN5z3oJiFguD3rH6DADbNdEqeQn",
  "key12": "3uRNML7kGPE7ofUFpv9bUcs3oj36FfZzXRZfeAJBazwAzNZzSs2y5973qHyFx2NGVGBs6pVXPmVe4FzCDZGp7Gu6",
  "key13": "f3hRM6dcMdeCcmEJKz83oGe7MmKBdwiK1fUXegBMvv75FqiNPKdf7wPhqd8iV1YQwrQrhuve52wvHrUEaqwrHSB",
  "key14": "3LpLetp9UqWp3yqGc57hWKiCqT1LoikT66dtAfoRt1biVQ8BR6HUsnKvf7DNZTcfNtuaKiR3hDKpJX1y2HAdJZb8",
  "key15": "21fUyWdmUe2GBuq29xU3s42xBsm8KkVbc2ZN5YG83sJ8KmTuDwEZNz2nQKBcKP4HWsnkPfsNsB8R8XmE69eRGnq9",
  "key16": "49TwtMatpeZPWoL4hFWHminyWFoD3ALUsA7PnU8nSwJ3hU34PR2v2vC9a6CSEcm4PEYtLxsfEdvysExKV2VAJscS",
  "key17": "54DUmx9n3WqfPc6Gboo8B7EWzrmwydMEgmxnMoz9G36vrCEM7AK3Kin2AXEZT9MPAsSm4u5QxUC94Kmfy69XyscF",
  "key18": "2ZXeX6bY1QdTc9fCfwa95KTY3JevGZ6hLwgNAd118YfiewRXGs3L8Lok1LCR4Gao2aevsp5pbRuSrffD6t8ZZzET",
  "key19": "4YYTTqMqk1JWFvp3xb6sJW43BTWjvE7nc387iysw2QbA2SwWW3iudfLLXmZXAZzJCvMYkBQ3sZQFjC5ZAdEZvY4A",
  "key20": "5rwW1QWSQBBpKg8zc3V3f9H6VfhDjSoEh29XcLUJcwWdjAVMTtACiD9wnhPA4d9E2dB377QunRNApHPGz6LwVKLY",
  "key21": "qpVpMGqvDha3Ctp1PhXcv4RzSQF1L3Z8RBWMuVdk4AxSsM5TANdGXsVXdwWbvKMGHtzKH2sdh2FHF4Nhn2XDrtP",
  "key22": "EhDGxoPQjEFH8xymscdyqVMp4XxCw8Q7fJ2ULPovbmfwomK45BnioXDJHvnvn5BCLx6b5iJHejMqTiFBu3vKZ9c",
  "key23": "5kFZsMj5wyNHmWQvJZaMQA7N1aBE41EBhAa1XzJiXh25DZuYxprSzG7ysR6EBm92SfTEraupz1o4vt5eQReDfr9s",
  "key24": "5UDSaWE5wsXi6tmUh5X4AwngBZwPtJAeq8QevTqEJ4ChfXKrsrQcQxLfPhEa9MpjrSp7zF98GkcLexk9eYtAsUxQ",
  "key25": "5vhVkF6UopHvYPNQYQqMqxG3szXgwBg8FzBiz3M6BHoqm4Zkb1YQxSdziBqJsg94Jqc9FEu8Fj9TbDu18iS4HGJ1",
  "key26": "4TX6DT77x63KGn6JC5S3opRGM4Citk6wv9uarMPF3yDAYjpLGxeRbLfGaBLyefsLxqgdzJagfACakv7owrWGjXWt",
  "key27": "3XUQATp9cCpTeuNzNJkWS51n1UiNSAyYt8Tz6wRcnFrNqW6q3pwQegEi5GE5LbM6XivyZSfgngERx5ZBYzJ4Xx8n",
  "key28": "4x3DnG9vTEDQT1o23gjw9jCWwXsUjErvw4BReJemHdsfMJiCr9zfAk5PJtfzFpmfAJC2wtCA7NtPWfrZNWGK2Mfd",
  "key29": "26MF8ajuwbqK2NcoccF1ZbxkvyWKZoKfumNdHbaRCVrEbP5PnzJFbfZTTCsMRojh2wSNAgw83DZggTBdvohDG1h6",
  "key30": "3zr48Zgn1uc561uwLLKiVuKeaWbRzMZt18BT8WhavpcCaQ2UX9BzJRdkt7Tiht8gwX5dJYUzmvG41Yw4KAZCZ6TS",
  "key31": "MWEA24cocWHMkzEKAUuuWiRj5QXANpkpZEByNny6fKmAYCRFTVE48xLLdu6BGfN7n65XctauvNUiDNvzjgRunwt",
  "key32": "JCMYE3m5wV2q1H47sHr97B9ST1ug8xsUMjAywcAjLBKBrgbJLLPYNNZKQrt4UQ96F57ZU81HgXoD1iXgKRvUHq9",
  "key33": "3YWkhFJjoYDkDMGRJa7Fz6WMskCUhrQCYwGdDTP6BDKV8kngXJUTH2tUHvA3N1vcH9z7yrLkcDVa4jYftkuPRKw2",
  "key34": "mtX8e4eK9CbhYyuwom1A9wkCHdKmroXXoeMcyq34ZqcHrhaUroJRe5GYefekrVffaQx4WLvB6xzsGrqnJgGxXRv",
  "key35": "3w5F64ZKW6wyDuSDaRFzD9vSHekHr2v6wsx2sshydchQYGhy6aUPhWqQ2zSdjijvvQLMohedhbonSam9rRM7FhiG",
  "key36": "n1sQf9zK5MnGoMxKJB8hAxVWVCsDqZPGopUn4i9CGkxfx1GCeJi7t6NBcN2esKauGioyfPR2nkeh6LaqbmRbhVV",
  "key37": "YoLGUcSfeDP7S2gMHHGCier5tYGAV9ZQqvtVNqRbuaw6J75J6AWEhiAUJ4RLCMPwJZiZPQDyiZ4qzaAStpNbzZd",
  "key38": "3sRJYG9iGc9QBUwZ8c8RCcvS8awupZe7L76YUVuoZgzQoMCkhzGCzMwEqWG9jWTpirc88mB7YQ5kHKB5jxCNwB34"
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
