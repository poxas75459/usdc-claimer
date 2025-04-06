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
    "5NY82bT9dzr2HuP7KA2t58T54YNUKcHjS6oGYMSa19xvSFLbenTjfTfXPAsy7nc6YN5zwFgA1BYQA7E8U9VSS3mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24YTCrzy59m7129zXQoHUYnctAQK2drGRQywogks8Ss6od1aD2eVCzdUhEgdtk1u3WRhBsSLAx1HLNLqHqgtBKbU",
  "key1": "27ccobSuHMv4nxkkt91Co7urTWDUtsrpRTYMaN7A4p58edo7FAUZCpDxbQqCMZQ7jhJp83fniV6Nuv2aEFpy4JCA",
  "key2": "56AV4gSW44P7EJ92KoKiWN1oqV8njeJt4RvVvVMX1qJidYR7z5qqNga71cHF5QDoqS8aWHXi6Ned6TieWab2wot2",
  "key3": "3gaGFKPSZcYqeeJFp9UUYHYiAm9wWta4h3bb1QAcHbqgu8e9zxKbY2oEyRyd2nSu6vpq69KaezHevaTrPGha7rAJ",
  "key4": "4aP7BHNzPaGiPiYTGbFKsvEoJp6UNLmckLNFEBvhDJxLQQhwN17drDZXuWSV3uYMgTE3eYF1zDM1cHsQPuYsJo9G",
  "key5": "4dHQuf8FUf1LePsRbQu829zDPvUbwP6WAsnd33xC9KNFTDLKRxZn2Z3hVhsfL2X9m5rxsEUxwVDMaXu31MdNxZs3",
  "key6": "4A3uLAibscACsaUchhAFf64cbxdroJXKEMbWxdWWGcortjN7Ci9w1vYguQiwffz5LVTBVrmtczYNjRiSdPwjAt7k",
  "key7": "2g6F4Xau2otaNosFHN23zLze6VSuQeVhPLujQTahXaWTyPThKgyPeDEsQ4B51PWdk729n9oefoB7BZKYUPPVrdn7",
  "key8": "4yaeTZHVV6oQPx3TrdV3JgqZJzqePWgGJVzrDAJpXtocVrAEo4ZKAPT5C88YyojW1hHTwfbFjfCJBoS1tubzGX7Q",
  "key9": "21L8m5Q9PZt5SQrRQnYxZ6CJ1gMq82Zr2wicG4PvpbvMtjHUAeedXT27b4icsiRUxGoh25a8hAjxUJh6HiiT4A9p",
  "key10": "VMgNEYBHZgkf7Sa8GTA2hpJA3Dp5pMnfg4EjAiexB6UobYkr4UsQS7cqv89HYcpR9qYdrBnShPN4MxBBZbdmBSn",
  "key11": "3DBXmj5Je39FDV2rcLESgBBNvgPKZUEmEWRdSDFTL8LubUsX2a5iwH7oUS9rKnsvfRFvHUDC6JqdGoojCPx6Usah",
  "key12": "4ygj8pkAKweAnGQWsKYTMqixv15R7rxhiZVmLquBbAz4hB8E8WCjq5zgv4b8ZoGDpQbocjTYJRntTsDtCEa3kBxh",
  "key13": "2xpWLtsZFbJQrcj9CMWY1rNbMqXhZTv4vYrDngaoS4rDXm928KLSeL8Qpwjb6cxfq6WPJ5ouj5ffPKgpUKzYSJR6",
  "key14": "3gpPA3SibP7UBsBzpJuiUkPURNczurXLTtRvoe1nra2Ds7E7zTERN3rkqoXxeWRZWh9BRGuLsZpMxigvi1xeRRfQ",
  "key15": "61cPovedj4ncwvVq4uhbgUW4CcxeHDh7znhMhsDFMeC81XTgvyjJKZXZFsRPBztCKNrqFx95yAda1uSRdFrzxLnz",
  "key16": "3vMdKkqhtWnHb2aRgXUiEm35PNU4hwD8LrRVKZ8YeWcbMfi5turc9hVuNvEvF6FfaKVGxYYrbyzSfhkdDCfaxLQ8",
  "key17": "5yMskq3g3tr8UZBS1tFaa7PD6245uAbQAX7cYakwwK5Q3aXUv6RdC26Kk6uRPFgYfcq2LC1JAZq88pF97aaXBs42",
  "key18": "35UxKB69Dpr2ZDFo3QrMA7PvzuyAQgSQ7H5RdHdowDiSjLQ5MyF8j56aBD8o217H9WWA91tpqa9QP5nRzoiHmyrR",
  "key19": "24x7pHcSQChtacoSjHw9SLbd57cacDNeNfXwyzrKwRNrVyLzJ9h88uvqTBQaS8wpY8EvxxfKxqtSY4rgqi5udTii",
  "key20": "3kmq3AxeSPbKkdf1uRR4paeZmbpEuWztWhZHz7adKc9yomtv21XHZYWpLRdiTuQKSwvR5iz7SimWWAN3miLZfmNj",
  "key21": "2yrhhEx4oF3uFVkAvMmLBUwbTx5RumDG75aLFWV27StifQJpYTDP5UieCydoXVHokGVaCD6JMscVZWh7fZw6nwW1",
  "key22": "7Z8h5mtv2bABpMVMCBJqjdWFv8Wk15MuZFR6H6WeApdg9Q8t4uxrwBH1hZza6gt3nVZpRvFHZRVXTuXkHZvjsMn",
  "key23": "4pdecVqijA1jNGegRTiC6LYmSuVdZf5KroTEU3EKxpytJdKLsS4qmG8vKcHDW3EwNS6E2xfWMwWQ2nLK8WFako9",
  "key24": "4oeSXgghptBCnxFEv9PviWdhfDBFVBXuCbdGkH22Z9mAKGF7fR84e47xygyPiR9UsyFeTCyws7n5Vb7MqBmCtijT",
  "key25": "5yn2CCLnASSr6KB3ukBn6hnUutUjnae1xP1bwG3KhgsHdoLqCtGq2bv1FJNHQmaKpXgvJVvp8Xo7k1ivZwG5R4c8",
  "key26": "2dBsZUqgiMk9pVeBruBghtjj5UTAWkGujAmHjTgk1xjgbiZK6Yf9HFMzCWUs9WfiL4auZxnbevS7fKeB2Ln6ejRu",
  "key27": "HtH19o55YujRpBWW2mvNUcJXoJ5gHjV5wkmWRdcALAKUpo3rHQ49bqXKNwjAgbUH35LQg8ATESk2hW5Lf29RmGN",
  "key28": "41zdk48khiyqxJQcp1nj584gUNBQWnbbfHSvp5oYrjKfEyhywYp4AUiSWhTiqp5Dkc76Zvc5Q3eL4VNp6p9dHd5S",
  "key29": "3wfZw9YJHgZjfvm5ZTsRZ4fpFEC45DbeztRRgXzk2PdsAfFiwNEVq7kTY51j1mRff5ScoDhiEUeTruv3BDEQHzK",
  "key30": "563VymDVzAmvG6GH2Fs44h61Z7tZ9yqMRxW65fvrRNYxNjd2ya5SEfjgQKmmE5iFn1wyNJDZqYdwJQsJ2hmvrUJg",
  "key31": "Svwmzvi5Ec8SWxCB1PJnAbGYDyckQdwbaPmnaTR8LYLefXnSsyzwXJ5kYqNsJQdomtyXWLWtVuS5tfvZK81REM1",
  "key32": "5JZsSwATuok8pu1TUxxUjcjp3xQ37BZzRBAXUfMhucnPDuXownYLnwX8N8kRdtconY8Wx1ubbzsMPZjBJG6SyYi2",
  "key33": "5BwWpNhwfrJ3GrQb1X2aHEjHRUmn7G1utdhobfV3qemjDbK9MvtL1rdnYsAhAskiNataKdXAwCE8sK1Y7Rh4gZDw",
  "key34": "2yTtSFocPyik1zZXNMuxX4jhbykE5msDqg8bmWL6PBKy2Ych8BtjcadpQqREdr9YavBypUtDFxmA1jD57hj54UdE",
  "key35": "2nzkMe65Kr698oLKML9Y4iNhG46JAfxYkCLcFk6uGBDBqJv6vVcBdNWTk36wQLkkW5LUaSiKS8GuGUDFJmpyNhfz",
  "key36": "23Y1jTUE8g3Y99iqzY1yTcQjAJ1oH1H1xk1LxucxriGdpDfBmumowi922axtUNFNRj1d66idFyayMTRNr1HkWqcv"
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
