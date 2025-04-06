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
    "2RZ4sutxqtv9mHGb1nifvvwqo9sKxfQfUZaUmYnFgSFtV4FeNCyn8WDTaSb1r7jLyvRZ6JR4qnLHepxNGCZ4rTCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V7jc6JqdWMBbr2LxeGQDmBZQBSxDg5rTXLmeupHJFmAzohJ42GmF5QMjiV7U5MV7syAn57KmvPBwysEypJhpMGB",
  "key1": "3ioVNuVoTuAvYNF215wNqGemwirxEmrky6eqsmmjBEr5F7V1Txw2LPjsHNrMaQEnspzqGMFZ6Jr7btaJw5SZce6q",
  "key2": "21E6ccYBzHXb2NchFQfmWi7mT4C8n4EUtfgeCczP1bxbCMeqfxzkvWkkwCWTc5Zs9W4mbM7abw6Rp99i2jkmirCp",
  "key3": "yg7bKGPisb8kJHrsVcyEQvyNoE2E2v8f6AAgAvguYYDEefMTLtJx1iGYKcSq74VDCo7q6SoHUtZiYqH9wS7rJQd",
  "key4": "LTPZUjbWHiYdxJ9DXjC6a9syZiPoVvToz1hbmAMBaZsA4EksfjFHeMSSYaVVWXiPu3LbtgMFu8Yc48eik5ijYWo",
  "key5": "3JshHj1nFX5y7aaaoBEyCRZg2UexfvSPaiyf4kd41LcyETtj8bgcuqq4W7tRFGWpwiuaaCWr2KYpYVrFGNQy3aws",
  "key6": "4UHUL7rLB1aCeGob223Wn8G1qgQ2zqZU7EtDRthMYjUx1mNTGM5yQJjwzFbpVEhzPZMAvU6YSJEtizEjN1TUySPf",
  "key7": "2FzW1M4pXyegiEFVpFZgq1xfXQm8nYAaj6JHmzcq6zNZXnpkxtYekdpNMSbuRoyh92xWMwKoutBT2uaFzzDP3V6J",
  "key8": "2xMiAxdeb7ogGTxkUGZFE4HZQ7RPzpkmEnEjVJCYuVAxAP1deBmbZjUs7H1BEi25KajYji891Z8MjRwQcpYHgb3d",
  "key9": "izpz6ormsQvQQ4eYyQAM7xm2tQUdVh8gmq6dcfWFR43iQmnzgrhB6PcW7R6Tz4kTqoradRAmKdUFyHZwG5r9xR6",
  "key10": "24enP6XerQBE7mHHqfEupqYNP17jGLFWbnSXFSQxybNtWf8SFCuvzzwkdJ8njAfzxepeiWqQvxEvBCSERy4d6bQV",
  "key11": "4RaSwLh2GPXy5HFggBTPSudiVvoVpsnDSnXE9NEnWmyUA1hejDftUmcrFGGyE4eyS2dxd7D2kFa68Uvnz3YFCW2o",
  "key12": "2xHBtSTL81AnjLHPQ5Hw1EpaWJnYDEQaJ8rtYzP2b4ub4xQnjxWkQA3c9PQWVyzwmGMEu8FKjrWUjCv2NUKZbkzU",
  "key13": "5xSavfhoJe8LX6u5wTpsGszqnuPewoyyvoADPqpCQjQ8yURDZvzbwNrV9xh8pjfTto4BMbC8kgTpgjprRKnDq6ZU",
  "key14": "5F7dR2KytfcQEECDZw6YoTNSJiRr2LDLuQJet3W7r6mBwdoB1XxmYEy9zB2EzG81r3XDn3FyLRWR6kCAEGnDtHW6",
  "key15": "4CVHVzzWfsVheCKiD5j3nQTijo9RfJxZacjbFVGKTgnGsetbdXVmdwxkTwqyVTzN9n96R8rcshWNFAyeqaHESqHL",
  "key16": "57w4qC7GAbaiXPqboTp9Kq2omdM83jEXemJCLrJKNs4UBpLnBKcKB4HDGCsPxfYnYzkhbQAzph5trQvv7DJdf1b9",
  "key17": "5HzQh2xFwE2esj6dLYh8yY2wijxrS5ioy6UNJJtivyadRBZiSiMWf5FC7sjwvc72ce6MdenttgJY7pcGMjq1UKHY",
  "key18": "5hhSTDUyzfnkT5qX9RPcR1uzJqB958KGrPgYihtwc7GbnfBHykfXVzyM5vWZQNS1vwBxmXRKKmW4hXDBA9yBLrtt",
  "key19": "4zP1dHisLgbZspA6KucMYxN2EdjYPvVVLgmKMGrHPygNXVGijMZVpJJ35MMTdHyi94VUpVUzyLoU25zTjYe8i3xg",
  "key20": "5HiafWHnD8WvqDDtwJmZfz3f4SH5Q8f4ghfUFs5ogxdVzuwQ2DrZagisvY7LNXMfpBgW5Q7r5oiinBR8E5EbeUQD",
  "key21": "5qzNmMiJkFyq35rsode4wyw1sySZ7bByz7pfhg5pXT43vdb3hDccEdBjSgbPp2pC5shZRNDpuoxqaCvwH2CrAQ4N",
  "key22": "39wc8aznQCKLG4MXfKrfaQszcgsbR4Dssr8EoSrWRzauX3kt6rAaLpApBAUiMuXzWkw7RQyNNf65w3rWHFgr7umq",
  "key23": "55VwWuMuciaLvhtNz9hcesLKJYDCCYiBqtkFgruemqrTetExFE153G7MutKqcTmL3Z3faufrgK1ovKHAQdj3pCc3",
  "key24": "5YaxAFf2sMhUV2o9QVyvfVmFagifWMJ1b8FGVKGN9XcUqjMnc5g2mekE2d6fnJk1qGqYFwoZ1M53Zc3gbtP3CnGR"
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
