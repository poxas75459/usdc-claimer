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
    "5RG2ZzP8Tc2NZSzL2DBkMVLyG2uYrnGu8yBLmsqRRbm53jXespGJbLujHsEivRe1JyCVLfkZuPWCWepZWYv3fte9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jccCaYfVKrHtqSWzprpG4Mp3YdA1FawNijTUxHNDi8UWugoaxvN5frbzEKs3NSvf8NUrKjJxpeRrGwitWn44fiu",
  "key1": "59YMsjGcfUAde8KowW7rmZsSaytUbkSBWS5kbXdtdzQRZy14p5fxa5GLy1jqr8b5oqkYcK1XhD6BNJEdPr1TiJ97",
  "key2": "3MdT7cUbKApGT9mQ3U8uTaMwBmoQ7BFw3sQjSjSvvtv21CVaquGuD5qicxRVXKzY1qjcr6NpwSkVi6H2AP1QSaa4",
  "key3": "4bah4uJUm5vPPTzbvHWhJUTBVWHMhHAp9LRqPtGEnspULUW555JmJ1TnFWMQ8UeLm9WoHW2pNxEHG6yHcYDR65eY",
  "key4": "46TdLvNoU5gyhZkzbyC2xrTUDJf57gH9CuAg4BmxBiDxA3DdbJxx7UpY8FxYGL8FnreMCfrddN4M75ArKTyzPZJS",
  "key5": "3wy8TFxGfNZrtJrUyi8wmL7YE5jzyT6A4a3VHRQ8hRoyexHitewWs71XJHV2fd7grqiDgXyGKwf4ufvmWRhGWdEG",
  "key6": "543KrrgWeX1ka3Xa5eyGQgxd4CRsv2BuLn8shAEguX3T9q76KgauroFDxmxRZdSVxhi57Yz8HhAFqWUtkFhNQHt2",
  "key7": "3WkFwh3eoYcP8yg5hwm3BERVQTfFSrHZtymhxjLvvk2Yp3jM3aZvjqSLdEPkp3MoZjPiLGVR9ZmduAhsR3e4Wieq",
  "key8": "35NeSUnjP3gQrGi1WJi7SiMsRTN4bsmTeewVvGTYwVMkwzDeRUcqEUdViQ4nx5sVMokujsEZEt2C3dJBmdewAKf",
  "key9": "QerwmAZy7G8zjqWBptkeNso14eWaHT2NEsgGJ68iN3zbF44pH9RjB5YTCoH63PKyV4MDzJ5gDtKyRnYBTEgJctw",
  "key10": "GwkZfCzBvGYxRKU1NGdYC56Q3EEf8hmNtNBqmhtxyMm7SwV43h1u7sUhtY1R7oTS3Xc8vbSXHZ5E4A5a2FddYjf",
  "key11": "3hyHZPkWGNf9PBAEcdFt3kFYt5zA3E2MvoovdnRFHQFGp1vQYvv8m7PZ5rGaU992VUNmq2PFg97ybSocxhaRRJVB",
  "key12": "3ev1ydbFKYxKudZVGc3GU3sqG1GZ5cb6joHnwrEAVBTPmi38D3Xq5YPp2RTdtbLNmho2cNMbsxQ1ZZuUscQC8Pph",
  "key13": "2o6CWr9YD6fJ6tCrNrkA9EyEhbQVQg1noa3AB4MhziAK92PnYr4MUp2sK4LJDTEBYZ6ia8yjQ44bb4goMS9xGdrG",
  "key14": "3m5Y2bFLGRY5T8RddidHX5FpdgWj3fz1LMoGqRZBL1KqvQnN2Z4df3QGBTJEyV4kzJVHdCW1cKv8nSgq718TnvcX",
  "key15": "2pJcdq75kALbrv1VG9rWTEe3rfy1tua58kULqdhyGQT4oGLpM32PRpC8cj3NR8Bu7WXCRAEn8tZL8py14ASoLEvP",
  "key16": "49TALN4pBp3BFyLPiPzajFAtD3E2J7pV85T2iaSa1AU3Wz9wniMtnZ8aETmaCnogb8JpbAeUBwdiV1WMW3PaYwV8",
  "key17": "2Tjc99tRSzzmoSj2n5RJYRWGmRgtxDvWQXUrkVjgpqZFfnQHMKLgyCNumBrrcrfDRQomirwQegb4Lf1PpXi8ipTb",
  "key18": "5Whc5SQFGuDtJRd9tARdxBjAuodqwyhJkJXWXSL8fnEZDbb2NgD2Puk7krn6JRra5TN4xzGri7dV8A7b7QHpWuv",
  "key19": "5oewN35ejVYjT1S75DFnNsfpvtv3bEV2mEfKq86or5bKu9Ts3u9Y6jGnmhs2H6bYDqFWRizY3n4EYz2P8piHVCXW",
  "key20": "3wPQMdQMRVNu9Gc68m6oxdEiP9TDsqaBJQJJomt3yS93ZEahvd31c5XJXEPmighonHAC5hFkwXym8YhhuRkSGsVC",
  "key21": "52j5cu82aHiv29kABiLiUu31VETsj9QUw3YFezvhGCDG9dy37wzMtbwhd6mBLdbuEjmYE1yZvVYFkrv6qsTbonmN",
  "key22": "5AYXnB1vSdxYhQckB5pns11pnFkcS7ZkigHQjvwWRvD6L5KErQpm6oco5XN4vWckZLEw1B18UQm4ZZh1Bsq6nxAW",
  "key23": "2ad8cZMVYjvcqmp1SEN6gPS8x5k7ak3dJhxC6ggaw7wEnE6HRh2wVwA4TbHuhEBFhZGkphfpYwJsxkTrZBFsRERD",
  "key24": "3dAALDSvKYpAC83BqWZ48Cs7kcq9PHRJ8WgNysgWUw3VMVhQ63RVLnWWPSMFUJHajKy532pmQGneFhNLpdxKrssu",
  "key25": "2xPobCgXJoVKU81BpRL3oXDKnhuR3hXSqE8rjcTsRr217EJXGtcH2pV5T3BqvLDGSa4KDirVzad2iHmMpUADfvLa",
  "key26": "5huvrrgTpDiHxLt1KZUMjDRuHuJ1cGVHm73xtJnQRNy6qupr8pszv1gnT6EppSN3MAbj9McJ7hKjKBVdiXdQSyof"
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
