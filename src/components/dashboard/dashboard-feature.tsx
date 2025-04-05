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
    "5fytv9UxqfCYFZLmG7zYVzNCDP8vNg28EKi17egyPgUvUDg1bBosTQGvyphPgD7tv6sAN4nG4E5knrwG3t5yEYzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uF69LAP3yZY9wsT6G658PE5aZvhmm7k9bmmfu5PqnJvbteRwAd789LmmxFEZkGcqNe8adXWuK7hgBaAspu9GGCf",
  "key1": "3mbFngryHo9cXvEKQ8wWXPP2K41d5ZUuwYKVaK7vBSrpiJmaDXiSEfELs7ckqo6pDRMBN2MwC9nyViiFntK4VcHK",
  "key2": "4snPUWRYmdR9huwM9qWoaQcjsVD4vwHcbVJDeWcepkDNt9LUppACwXBnJjwE9Bj2c71ajByau4TQZtfJSWwPRhk4",
  "key3": "2PE6ALRKY1Y9jpNn8ptfVYWb66EX4XCGCrpwVWYmGSWhAqTvAxFzDR4Qg2ADhJa65eFUc4gXUY6Q53WQ6Ub1Echv",
  "key4": "pdNxzDEDohGpjYWfqo3zTLbNjtHTfczVFgHCg9617vCjJ4wHPw5t36dBUFti6i8VtaoLLCUWTVExzTX7G6T277f",
  "key5": "z9ugE4qdyaaX2JGu9b9VXBNciaGovRMaK8M6uMWEzpvyFW4Li7bdbrtgKpZbT9aoTFwRcgLMRXRF4UoQeHTr6nC",
  "key6": "42E7NZMTCBtRVG4hLFG5L54HabN35nen1RVC4n9nRFksU8EDNaLof3a5k1xfpfD47vD9mLCssWuzAza81hibbQj6",
  "key7": "3Ngx5mYKBk4sYsKpf6MZpAGXwu63XLTsgzmhtU6NPyxry5UoY7T8N11LFNRnkCf4HScu5B67ZdnwCFwyy7pmicVK",
  "key8": "2DV5AG3Co2KZZMx59nbS6bkwYZpPFTd4Yvf5v4Sfbaq1r11z2zGsE369fo3i7r7bL5fEn3Ht7BQZPXU7vovuRo4P",
  "key9": "ucoGPkqnfm1Gu8LxkW9yzCmyR8hrJy5HgUbmaFPiFdFF345VDBfPc6QiqKvdMSRmN5fqhGKaZfFDJBQbZfrsu8N",
  "key10": "xSxhgZjyAgi7ky9pB8si2W5xEcUJ5VgyxXdmUBaaiAtWtgDmB7gqQ6TTVcyrZUZxWhnRBk5iRRm7HLNRNTF9aPp",
  "key11": "64aELtPhdrKiisxXzVVUbYkXQovr7PS75QFtyBXAd7gQaNbiBB3KxAevgdf9zPDPUWTCXRx13V8uPcygtJQkhzu8",
  "key12": "4nNLqptwgEwnujFh9ZtyohGSzejMyUV8cku6jULhX3Dc1BW93HJXbcXwBckmtnFzuPQHJLgUbGfCN8PirDuC1G3M",
  "key13": "3CPVPMxr9115CnfEC1dUriLFCQH6PYTxpfTZkiWwMzyY2T16ymxSo3WNyJGgtMg9FrYDGNaS22e6SmQcGiK6a3Qc",
  "key14": "37nrJ4apULFvWC594uEoDcGBE84y1zLri1R5qFqm6ARSirC13TWKnepWytEFfSWsARGuMtNhwe66GjYNt13SZmmj",
  "key15": "4zBZn4xU2iWGeQcnXWdVmoEg6vMksbLbZ6d4MqqYF1w9RFdcaEuHgWu9YXTDXqKQZM2ZUN4cFWpJqXgFtLScFpPC",
  "key16": "55qE5LDFeHKx4fyeWdBUmoCGAX5ax1DU8i1qMRb5vYZ2hptwmR4wdbAYdBg3J8hrvZaAiffmmEkx37qRsZsD4Q3j",
  "key17": "4f93Fo5dqL49ZfE5yR2wUr12arQpb3HyCDneMbxg1eLDm3Vw7E3dcnFRd1LULQ8nZMNgMsGPHfy2mWcZ7HL9s3c4",
  "key18": "273DggKXYMA51w9GFKhcgy9csDGtQjNmSfam9awgqDcJgYJRVFbMLTZfoDLQsrbhYRZkPhK4Xo4pVvF8TAYrtnb7",
  "key19": "5y5pr1thjdVvA4vGfFrRhh8CruTAg9c568EiFWchSc29sHo81LtcmCocirSj3ockBnoH3dKDPWykaoFJqhLA9rZS",
  "key20": "2v7M1KZCQ6gGpe9PQSuKXgN8YdE21xD9eBKxxEaKbNq1BHSmoTn1ugmUv9egXw3qHFxtaBscEqG5DMr9fZtYuXcy",
  "key21": "YkEwS59suCRnoEFZK7bSDcT7vjzRpmvi4MLbxUXQFUbP68aezwByMK4acoiaAnBwnwf9MTgHfmZaEekZXyJ2Af8",
  "key22": "5116SwTgjMqqbVyejRB8vXvbmdJAVp2hJUFDFyavWmVG7m5rcQ63B3KeS7vjNfZ68rJCTC9cyxWduLizTFmEAe4z",
  "key23": "eG5rSjJCmucNzAxCmxPWUiJAQ71ox2jP9iTQ8SaVpDKjqi2czKX9oYaHBNSVYtt5i5zhuvocmKUFj9dPCrLeWZW",
  "key24": "4nwuq8SGSebm4fDXfEXeDsDwHigymHc1HdXnJRCLs9waCfaQ1q1YwGfwRQY4cJTtpwnxYg1DewMXW4tMgUiKP6MX"
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
