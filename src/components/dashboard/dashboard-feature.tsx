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
    "4GG94238YiJi8ycHnNHUYzByWccTkmswizD8bN7S4n2VANHemdHMLwRGZ6j4NVZ4SxirLqhmZmQktTnoF35Hw5ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cm95McGBMTRpDnCZSuF9Pr3zeDfytteDidZ28DeELa67AWBKj7mfnuhdcKQD4iQLtD89ngRbuwx8RRukieAhm7h",
  "key1": "3GtwNL45YEbrPduXnGv57nAxE9PttsV5Js99LvHqZH2ERajkvrL9HUU5wijLFxsz2yA1MmRwTWTiupikXmMaMpTf",
  "key2": "3iKeLbkqMfmznhc6iv5sa2XXmcKQYP6vHdRkvKQfAnZW8FXWJ3sLD3yuDYur4QYVri2M5JfNMuiXZPAnnaNjW4tA",
  "key3": "2Ap2GiMe7j6C7GyoxDhanmos4M1LYedJsthKgPLLz4MdFhf6o6eK2nNTMSmrJ46dpgZLAWLmbTKspZpAuitDysMC",
  "key4": "26yJcULW5yFrUQAmBLbG8ySX3bstJXQ52rtYF9RdU29mZ5LSJzSrF7VAdejq11XA25HmpwgVU6d43MwcM3LGz55d",
  "key5": "3J2dLNupXnZst8ZsWT8gLjnwjTzmdSVjbnKJAPKq7AQFzj59rTZUypMAP8E1AdTNxahQoDA9Un7TkaqdppXBH3mt",
  "key6": "2KpvL7GUGDcY8agaYDRWC1K23DQSBkYyGPj9F7YRzJbQKcc1TzZkD9gnwRk3zk1WRpehWsnniPQqu8Srj4C3c6N1",
  "key7": "5qEEEY3UwhAFyJReg35saQX5MyicCyDhf5kg9Qi8g9szyXLU5RdKRprKds8C6K1FyDUWPifgRkRt2PpbegGdNYsa",
  "key8": "2gUN42VXKXLZ8YVTYUv9uycTKjDn5EZxMUzLRsfziE4h4svn7Ady8SXPGEdQws3zN8N5CGJpRZArBvXrMhqYoEAv",
  "key9": "4QUqdL3947vx1eEaG1fpC3zQ1CDHRLkrKNvDTa3Kn2HN39KwUCbtQdGshcrH4hP9r1WqxqjAGGskLhPMWc2Nyhbh",
  "key10": "4DxfXPoadQesUzvBNa4AhxvNPAbzGt2owdtRiaBy57U3dQyJBp9q1NpCsQNS49nRHE5bKUuMYpCNu9VzdQVgTxGu",
  "key11": "5sXeRDpfbTG3oqeEvNduugmnjxRLJhcG326r2FWKyZRPxzQJYpiULGVqWSJSGAfKxdmMcVP4wJGMSigB8J2d6ZQR",
  "key12": "65563iWfLCbYrYaUeDZRANjav3vYf6J135VT41T9EDy3CaEs3rcqXm2JvBvQ2555eRhZg46NsuoJfEjnn5eArqwL",
  "key13": "65r5PaDbgRqzuNDt8MgmZAkEQufiRzqz7yU3eecVUhXsTfow1oXE3bV51dj1WzAE8xjioAyKMrK23qbYJdqBpF1w",
  "key14": "2uYk95tk6jhFBtn4Xz5hygA1QjDuXw6ppxPmMVXraUXGjas3U2pf9Ri9BH7n28wUy7jgkHTKCeZBCREH4LeYVh8e",
  "key15": "21gVEzhagVR9MLoktp92cddaJ1gS1Mg4WSff2N17VvAoY2ykoa1rgrnJhHQn7vn9xPSuHc637SG45k699BcLBhhy",
  "key16": "ed4cjCoeGcvVt2Nsk14aq6redDyZPc4YoTruzsSm3CzPqnYzejjKkfWHwEoP3j9jSnwfzH1bzPmXZavfUQawiXc",
  "key17": "4UjCG8FK8GXp473EGBeyqQ6PERbWBuy8KsqF4pQVfkPD26z7XqcYFwwn53MdkYmt6cuNQ2suH8kHr9k6Y9uEDizk",
  "key18": "SthUjJmFPLyHdgYkokikkcp2CcLg3S3mWnXpmjoUsHFfKcFjXtqs2gkRsFDzbngcJNtZF96KwGYpfAiz9ZHQYEn",
  "key19": "2Mkh8LwQjWaGSvH23uJCiwW7CXtoX5gbYegKLLush3psdDXznHkziwdrR1wGmjG6ELKBSmSSvv4dFbA9JnPoojuH",
  "key20": "2Qen1bqyF4DSMfgaPxvvLZ6mH9PCSBtsZeifrF2Q1rQY8d9Fikyc473AtndYDPzmGsNZam69rynx2BFd7f23XLrG",
  "key21": "55eUu73tJBuYD4nhcrzzYLNX5BhgCMiQrcnKxmskmq7T4UbY9hTcJs9ZSsQzvrnBKvtbyi7Y78dc3PNMub25ajbT",
  "key22": "uzJT1LcziArCPs4ExLzTyXKA6fk2pzQBDE3DTvVuC85DM3bh7wWmmzS1JcZenaChn3RtNKixvDzJ45xHbPtw4SA",
  "key23": "3XfQLmPr2VZRTtF1fDVy47p4xfHjzrctf95EsdqBPBhxoHRiiDVKAg9tvzobcpmA9EngNuLix2mUbQT5gtYh2LiC",
  "key24": "5EFK9T5BUWxdBsvU7SCddEQGq52atjHu5ETmtM8uoaAphR3mRswf4moDfZZCQw8v6r5ZGq1WJqPXE7HFZnbgHuu5",
  "key25": "3bekTHWjAZeNE42z7A7iTAtvGKXL4ovuicMX3eczDCQLNCsP1KXsFC2JVTVHfmMmmmHaKELCSztPCqZLw7a9rP4z",
  "key26": "5yZ1BjqDwki55wX2N5QR87tZDFdu83CrArDD3MjeAnjE9bQXN4SYcezAznfAZ79xXLRETjPXJ73sCYe1JAiwQCiE",
  "key27": "4DGbkNJxyGdaEDY74Yf8enw6FB7z3Mz8JUMA4GBmpPqZtBQU2A8MqyGwR5sq7mWxRiAxiB2wE48e6xJt8tePXaEb",
  "key28": "Pf4S8wtv92gWFdU6mHVymmQcUhZk5GSFN9PaUGkBTfHxreBobSd1kzVhYBXV35XYZgSBbJRSk469CMPzQPv8u5r",
  "key29": "4bWenj9ZAE4esCWAzHB313CJNjcFL7j88pCPqdPk22eZ6Ndp7yFHuoeXND95WZFM3UEbHwHYTf18x2i9z6hAdYQE",
  "key30": "4oSY45yyHEWgHqwXbyubAEs6wCDNQw7d9e4kjoeVBwYQFFLbDW23Wt6W2sFuwRFQF2Xet3JSFF8VSKiUGbz7fnfy"
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
