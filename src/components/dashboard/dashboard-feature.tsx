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
    "4oPjFTmCFftBwcJo4kh8msypUmscs1tYMd8etwEPuZcAWRKrGqYdwqYwuoCCrtLeLPvTri59zVLypRYa7TnpZRkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u9U3dkEYPzG6ywFKr1TAjLVthspModtyHeKxs6vs2ZU8ebFy4FdzeC6GCUw64aacNCuzYdpiJFezCmiViadY9L5",
  "key1": "zCatJ27gKCEj3A7E6CVaa9s4x4aX7GGfptCW2sQDv3v4jUPcNfocqGXMyTfJWFWm28yxyH8dtktzZatLtpBsArH",
  "key2": "35oyNb2Wu5kMtS1P5kEvaLtKfsEHMfPS4nC3Zi2f1xucMAgHyHCQTAPxbQvTkqYfrm6335uC538KazYgC9hcYrTR",
  "key3": "3f2risceFJAxZeHHMavjPFxFD7FKFghQ3eabesx59Phk5mZMcnL431G6LKTQYWY8RWWDaxxvLRZphppiV9KCp48q",
  "key4": "22f1r18rwsKycgfnZ7RUKjQrWBszRLNG9whpTsRyY51aouuE9nwekPZJi8x289WCiheJJuYguu89eLzKo7erTbxs",
  "key5": "2sE6V7fqP8Rmi6yGYmTgJdfrzi3yVrMPYkmfMULxF18U49csPUZRMhpbU133jnMsCpPswBCY3dfucW7W6WBkKx3a",
  "key6": "33LWdQdrhhsa6eEM1XtXhg3irZKH1T2DMUQmRnLcDEDfCTcbmBkQ5x3eHTURhEJavez6tnkAFAokaDS3w7JWiHKS",
  "key7": "FvQVG8uUmhByy36VjUMjoTZrQhRxvjVBAoYGuVySPo7tiKD9Sd5RVEBmtEF5KbhhhUC4QninyFSHXDv4wUCx2QN",
  "key8": "5xihDCFMaUYd57qwzWNM8E44ih3Hb4Fdh3YR2tEZiEhygToeX6taZWgim9B9y52LD7ZBZSWXcNCpY8dPdAkTiMD4",
  "key9": "fk26woZ2MdJwoRV1AJAc1Z8UDGLEp6UDnGM7e5bgKacL5TBz6tADX8k2qAHv3dFK2imXFGjTXqNDi6wQb4qtRrc",
  "key10": "272juWrzXU3cr77RSREkUHYDVM5jmz2WDjhyDeL3pF5LT8oHgNLHKyQPJrbQ8Z7jvWaVg2YH9vT4iABLF2iELnSN",
  "key11": "26dyRT6xav5jnTHmyq6yG5JbsmuPzuC9gYKAEcjiK8AVPGGEJ7TWm2Zu2gxWYhua29Gua1PNXxX11HekT9fEv26G",
  "key12": "5XwYxxdNoz5WyYNuU7hb6gvFuHR5nArdcj6sk7SpaMmnxfB3P4ZS57btb9gZZSnRDLCXJwB5Uxk79mQ8i4pR9urx",
  "key13": "XARcd78g3HgdaYVs9Dt336nJSxvXSt6F3uK1yiqJXegVumifTdNdtusff8UN5o1Pv8Rp3JJfdRPqct1id7y1AK8",
  "key14": "gXebcnPBrUS4Fzii7dHXf6ZVu6zuCquZCmkwSHjHEXDyDFwWxdT3qmDsMN5rCHpAs4447RWMXLov5zGE34Lq49p",
  "key15": "fydmS7snEaEdp6DokkgLHdLcjKXLuN7F39CocJ2AFGyNPr9LyHH1BB6qf4X9hjYPixMv7z4A4ekG4r7JpHu7oAp",
  "key16": "5scspmaEYUfweBqtBfjN23gEiPrhKRtpjzNToTzyhXADXw9sFDbnrnoTz7TLwswjgE7YwWmP65aRaBTUQXNT1qdY",
  "key17": "5y1rP4FgekmCA4koQi7VBc1iWGygxz37U6ytsHDShe6kYVWtUgDc69VWj7ChNdcnVq7e8DnnWxNE9PYc7mVLs5Ub",
  "key18": "2uFC7EpMbKPVMDiVx27VG7BZzMydhSkkEqoQQqCd6q7N5oGk353mM6fDBgAWhciLCbsySCxXd29JWtNbGVgVqGzW",
  "key19": "5J2FhNuhpjSST1MrGmEexyCTjjSkqn4wmHPZBweSGGYCNE8KveMRTSbeowX4kMKzcRPZAB3oBrZqNXDoVM2UajBA",
  "key20": "5W3rwPcuV57Kfjesk5wpm8acANCT4eYeVo3mXrQos2qTgEhPB1qgTk9XTss2dQgMeXC81M3exvLMJK5JuS6AXmxK",
  "key21": "2xnpkvjpHpYVGcMzc6f1tpC7WhUR7aTvE9Px5VEpJytqAjydx8hUyhuvSNXGvdssbhDRo2aqwabGCjy9N7QnmywZ",
  "key22": "5oD7U6g3UFXYE8K1eD5yn7bC3G1oAiHTm84RRi5faPHUcjMx3YhDwEzpBYMrRXKyg1WMEwNd6kFgGXSaR6MBxCER",
  "key23": "4TaDC9f3NUhzbSYAA89ZCc7gNhnUrL3oMYDt3Xqzz3EK7BMRNBZ7yaggZWcWb5gecELX15Yn5H8jyi1qw3Ep3EK8",
  "key24": "4gEaoijuyHB7cq7FkyNhFWymo5cNep8X4NXZWSpm7UUk8bHc36gY2QtvJ6JriSpuFzeE3a15inF9bq2s1awVyQzD"
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
