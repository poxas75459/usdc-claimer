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
    "SqdUWL9aKojhsCuwmis4xinJm9rztJvf3YrGiXFKYZdPahKiRJ2KXSYE9MnX2Rwunyk65QyaXaef1vKP99rgjD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PdugC7f17SiAr1isBCR6CBNuzMBPoz8uPHb1MXgmvYwDz3cNPvmVh5EzyRHuRvbvxuHKHmmeMuHvN3Bo71j7xUv",
  "key1": "5DW53nSrtCF4N5yekb6nQE6Bwsvxye3aNEbmUyJUMSUiLkYckm7cwG53mY1J3RCY2s9PwXpt3r13TEjWumXuRoHd",
  "key2": "2YpHKH3yaBmizmGmhrCLGa1GJPpx6JSk36KxFHDFEqrKzQH12YKgAnMpd7t7J9nwN3aLMRiMCiqF7VKzTV6sxDjn",
  "key3": "52hUDnCQiPHWEc2Y42hQ7rn65h773otQVjWKPdmowQsBDyHWt9C1Ruy6wcwEa2MoiimpHxZEXYeqPgrCoBvuaEhP",
  "key4": "3RYEynuPLWMp5gGRTWof33B9PvEeaZGdw14rSYRiiYrNkYkC9qUgYZ7NTnvGDw2Qxhb3JwHhPA7WuibbYWzpYano",
  "key5": "34DuFJ6fJFJNELguw8XUWXRGP7D5snW8Cd1LMxtDn53fsN5KhBJPwSCo3twKVt6c15Qf6yhkxnqDxZpsFVjb58Cj",
  "key6": "FxijNxCqP4XXB7YRoPhi3FJx1MEVs93Jkios47jGkptAgYG1JSgYSjDjVvFnwNsrBqqAQHWYf3TDWRNYtr541Li",
  "key7": "hVfwiJP8fSNKwXoDYiQL5Up3EkQuF43apvR6sqFhv2BLVsbQXSyndHUHYXSETXNgSD93NfskY8oBevRCCrX8QwQ",
  "key8": "3CAdDo9VW7pcQWsQEGK6JAEnuAft3HGZxc7yJAhhC8QrpNJ18iFUU95bQ7YwBnZgAMVHHcks76hrmpr3XqmTEzvT",
  "key9": "2cUYD33R5yxTcvCbqytnF1EdCzfxuAqLZNBbQDARbjc684KUVemFKYP6rLNw4ZmKVKTCwd1sEeRM6Hxr9RDNmL1C",
  "key10": "4ZQywERL6HgwhVs6m69qSgiZDxb86ZNkDP7ZmrU6c96G5VoAozJNvZeLzqXzrXsTxwpFmMHavxvpTFemB6ch6iXu",
  "key11": "5DtXXKV8CjGJ3Hg6W9fJQjVQakSfe1mqjtcP2dmpqH1h4xAmgwxj2DkK7FKSwqYWAumvpHxCRP4qeWpvCqACCZrD",
  "key12": "7bPcXweJcossUA8WkjPpU6DkxTretMTRkxk6upzCaXyVyQJTzsVDE95xwg64bz44bAeZoPGeRcTTbDThVoyJqN2",
  "key13": "641PtKJ2AAvqReGqsk5QMt6X1iZHvWj7W9mrCBycRpmoyAQ3Fp9D7hutCFKhoJ5mMM34n7PWyJD144nfA4ESeJim",
  "key14": "4qzG4AuReg1yLf7rMyaXRnFb9ByMV8F4NAQcqCLpZtbcfzRtmRqeRfh12Z2CyMcFSdT8haWm7fv8HXUNN4QcLNSy",
  "key15": "2SZDNJSKPvucM6bVHFHadP522qsCjd3jUsXrX6KHE8YEDcYg9ppSvCaRYgSTcrHQCwKuwNbbfpqDvBTLmLWLaKvT",
  "key16": "255xp9Kp8ZwwBJK5SCp8VRsBUgBDdLPRE55bQxgotkCinBjptFbHEqUy3opVcqugMDD8FywpSLskWFZnt7w5S7CY",
  "key17": "3NTRtuqzNu3rUzpN6deEs4vaUsrARhsu76i6zuntgBbkLxhZJ1k3DjjMiS7PjtKHwnGhCSMnRgp2HyQ7k8MXjvFo",
  "key18": "4eDQFqqTYAqiKMYzps3MXCmY4f6y8rAoeZiWPVXKhQmAF95VhugtzTGrguoJP5WUaZ7sttij9D7YSj13Xqs3LHfx",
  "key19": "3uzHGcFCUm8jRZJpV3e8NRVa11iDUBxdAryV9gdqnkyWzk611ubM5o1Mkfz5AmpXecLKqsYRDuFnh5cELfttykkb",
  "key20": "5CfBUAM8ewhh7F6EsU2Xh4u4hTwResUzxd59PgS8o2DPahHTuAKKkRrGXHEifHb11xsDqag3CfJdpwg9Vsc2X38d",
  "key21": "5a2jwsbfnhhEKWuo7vYaV1TNSjFk6uLDQcajg6W3rLgVk5wj8xD3Ni3Yhn8BYJkM88NRmMvxfq8aQvZhXMUr1Jqd",
  "key22": "9EafXSsSa5BGf7Kp8LbNv9rrWckVR6jUavkwHZ5EJZtA1D1XfkGGqKhPsSbCqcN5vQmRyhWk7YfZnmgo8oLiv3p",
  "key23": "2utbAXcNWMhNtARWZnusPrEdneRpzLjRnAjJgbBhSbCGAvt3C65oMSBvxMiAyCLsRUPVgJeCURWe2an9snhRG73r",
  "key24": "2nULFJxudbPR3Qbewpm9LfjR8vZKTLgqYr38P8oZF5n7suAUXkmxC51sajjUty692w3EKahQPAdsK6KE3MN1c1qW"
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
