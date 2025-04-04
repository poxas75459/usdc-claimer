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
    "3Bk7aBd44X6p6UGLGnRn9yLhhuM9Kc3JwoS6CaWFjuPhDHbW56b8HNiZkEnGNYLs2TgSPzCKByV8qGtdya6tTBuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QDNWuyHTkGrc2JTHanX2kBA6SvEvnAHmdFuNEb9rTb5xt3NoxrVsLWVw3XNnfwC554DJRn9vxCte3EMq6WQFanW",
  "key1": "5JXFALz9nCdDDPcHNkrioBAZHKg56PgJJm896KYAn5aLMHw5Jv2mPHSoqaGP93SmFJbMR3XEXK9YCWxdTUp9YZ3a",
  "key2": "2f56WMPDK8vYGkaRFBDzmDLUiLZU2At7GRwmB2YLAZ4SiM3Y5mx4E8oD99WvzM8vKL3XUhB4cCtPWsnTsHXM2RQ6",
  "key3": "3GLNigFoznnXLqaBMTCsLZe7aewjTGWp9BkpqfdVcfFqXh4XWm79oYdJmX3faG89KAE6PF4kXmU6ixwS6WLbSjks",
  "key4": "5A8aWsMLGeCtudo1KqUtJNmK7ZGvtpNpHkDwGFMEXhw7E4r7H7FYvhqAh9VhakuwDycj6UaXkEPwog7eVeDAy6pR",
  "key5": "RG8qXtkkKNVDP93vorDc5rLYp6RHXZFjg3TRgMXuC29wS29x9BtRr6huriVoQyEX9BX2CeTkScxmP69ZjGP6eSY",
  "key6": "2FUGeLKeBiWwjk4e1dUtavA6bRwKv3uQuKhFUMVZZEYAwLyfp6tQX8pT8DEwdcW6wMBZUDrkh5xRamQQnz2VD6Na",
  "key7": "61pvd3oWXy93V5xVM4x21cpHnMJBwh1PUZXFAWQeVo5xh65oCeQGGtbExDacNpnz1k4a8D6KoidxYNPa8kGmryxa",
  "key8": "3BvrB6GJbzHmEpVQ9993oQ3tk7aBTAPmPSh7sXqsG28xbPFWFocsYNHE8Ysa5u3aAeDhjTQcypwiojqsx5wHL5Li",
  "key9": "2FN8sEuFPMnUGoACJC76Ckkm6ppP7BQ4gSNmAWwmz2CHNzwivt4cjYWWVfn7BMoLfq8rpC5Bme38SvFFmuuvj6At",
  "key10": "4wx55BFUe4cqSv9YfeT9np1cLyZi4avn9tW6FiQXAPWmGMTfcVQFLSC36Di7ftxmSGR22ieYvvSUUghE2jQg9Qit",
  "key11": "4nxF4BKKcuSKDy3s7rrB3yH3P4pD18R94xyyQsDsrZVpkP7AUaMd8A34VSxcKu1Xsh28kkcxxAzM5b2mHXdAhKoX",
  "key12": "5CtwX73AQsGHg7ZGyQQoupMEQeUuJEn7iEZ8otDer6X5gRs2VfmmscuP4asFAWuFAR7yJry7yU8G9EoVUVjoC3iF",
  "key13": "5ZidRJgoTinPFKATBjVPsBpBCKdMkQcgJY8wykJTc81LkBMsQk15YbB6igMTw1PJpTj6qnhYsAu6yqF4SSdxSEKJ",
  "key14": "QGdkY83aeWd1QuBugya1s9UB84gSkb8uzef3xeHCupSsq3c7JaC9i7asiLKZgZH4PeCNsLb5cD4U3f6dzeCdgJL",
  "key15": "gE1J4Jfski6cqURMhu2fwb5b9AjbW5KpdXLqwfrAzdYpvU7Nmmd4fMUGrExgivqRPsJN174WD7Tu44weNqiprXg",
  "key16": "2CeucYbmqg4wmxpwe8cH48HVhvqfHr5gcyzHr4ASdRXNVbGZTKuRa7KkmwexqgWPLM2eyQ5GzDNP8g9XhYrxTnJh",
  "key17": "KxofngDuUZ4YcJtoToEEDCFaxqev2pNU5QFUWYm1pbDJ97dTuofXGC2VdAyNiWPBDxYAy7tFfY6sW2HSccU6e8Z",
  "key18": "5fcvC7Sx8cktMDhXG4vFf1Vdnx2KSz71ZYonjwc1qevJywJLGckqjv5omzkrhiicVktewmzpigVJHCPc1948n7hA",
  "key19": "6dZZ9LKKsazweqZpmKPSELppqzymjYvg5NbhoApdm1WRe4YycWr3Wgk2cYMXiqi3AEet3sbRbnb3k61A7jqFP7T",
  "key20": "3mS5sSTds47ZFfNmjHuHVFoauuJV7Ad4owdnPNx1qFJ8w1hoJvR1hhf8spNmS5KaqgfjPHoF8vgv5g58Q8pkUv8n",
  "key21": "4VvSdvsxSbzcVTNwkNUBndNuzQ4RR8jrG5eWhZPNZj2xRa2jympbjCmeECCAqXr5zLwoA4HCvsRB1SmTXVG2CeAQ",
  "key22": "Xa7AyjQJrZPBKyh1jecyzQH15KsVTiBAsJ9LXy9rH4DxZV7ToND1FZmPcdJoonitbR5n4jfG9aEPfJgjJV8YTbd",
  "key23": "3KTdpxctz4zZEn6MxHssGVPiuRYnnapmCdkbPCRCV9UhpvMZh1fMauPmBYDwHynLQy5TzNW441GtWGgjRVt1tBgF",
  "key24": "4BcrD6SqhHRWWBFbXPxSasBLLDbAXaWRscUjaztmQoHznzmV7KzjdckTNNpiSbPfVABxZ7XjWNFE9YKV9AABvqw6",
  "key25": "48bK24XorC5XdXkqZrMKx2xWo2FkgPavbujdJtSLYbC4sXwj7XSWfrHbJAmkGqJXCdCQgBXZyoecHdNyaavr8noL",
  "key26": "WwU2uMhnoVY3ifgJkpgkiHmA4ybpu8Np6kC1vcjK2gSZrJrRVwt5PPSopq7N2Akd1LDmsiTYroTL2sUTACvwx3T"
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
