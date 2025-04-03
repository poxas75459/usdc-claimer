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
    "p9QzAzJonryYFm5ec3p2oBUcZ1L8wKSTRpkWHr3Tiy3R486PTBUUfjuMj33d3GQSVYcQAL1xnuqMwEem1MoD49Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vf9W7gpQBoSUFNnWfyqocYU8QvJ1j5xy5WbzcamhjEj3FY1mDVGusLoJK7UnrDp3kyv99MzoacRPrL5tE6uEQMS",
  "key1": "59fDSemy6bxksyLKMGq4dyyij4M7NsFJnmHPcNDQeHSptLU2VBUfsgJV9bh8fZDgP185bmvabBTUZbpXruasR4Qi",
  "key2": "3XoCgwThzYLrcaPhzwk6UwwmjUXJvFNdyD5tScjPzTAEWSZoHQi6Ly4M14TJzy4ULg63xZyn9snCzeP82AE9ZH6N",
  "key3": "4cnpha27q9p4viSzKjt9M17T9C2Z1vSXsBru6FTa5rkqR7taeQpmAYn8S6FFAr8hj7CcfH6XW7XwbG3o8bRpww1d",
  "key4": "5Zzc5UVyJqmewJnZUWo6wjDbC79xpDRRT9647XH1cyCxb1KYZ6J8eHNi2A4PLFVYQFsgk8zHMHpv3KHC94jKL2Am",
  "key5": "4eWN3vuaE9Xpn4TtLCzAr3n6aJFcU5R2aFY8hprb3dGtQkwTvN8et7d8XXatZJgixnJeYStXsAGJXszZjY3rReQc",
  "key6": "2AhUmofimZvDayF5GxQTKSbCxftMF5sLNT29c9HjhtDiR5CkfXNiFtL4Lo29x8iTcqxG9wfsw4CU7tuhYW88tYud",
  "key7": "5nMpsR6BLmrg5aiyx8y4KeVafFFEyoFkQDQkBj1K9aT4M51ZiJN5kbCGvrMcwPoYNzTAcaAv43ysNXDqba2HHMFa",
  "key8": "2dzg9b3aJZRiMdJADC9ueLVwXmCmeL5ouqno6TG2SBM9s9RR4yfKAzvM986Rfoixq9mCx65jVjR7iVfgQewoMkey",
  "key9": "355Yo6Z5h6zYK33XpWNkAqEcqsDTae2rDnoKAJ8xcjUWHKGmrgiFZSFMAGWymXqxSUJJV2sZCYFs3qG8amGKxo1W",
  "key10": "zsYf5vBgnTHwrHvRiAs45YtnTZrcBQb2y8yd52aJK3zdXZc6U7aWQ7XnzJcYomL8ciS5vGGegjwxbsjFwCB2goA",
  "key11": "4MAfCxRHQVP9Mcw8rbZAiB8dsEjj3MBXryuFAjhhNq8ihqxeuYeubtD57YfaLuybC5Wt6MgM9pme7icQXvQwhRcX",
  "key12": "4YompQFVdg4yEg3apGsRnpQJLpsAZ7v87tveGqEZAoD9fkKHC3F3jR2KzkEzwQ6U4AAM6NCufoxiMmGQ2oFzL56S",
  "key13": "2VwvmcNsA8tm9FjY2wAcvV1UDtVdqEpkzaUniXdJGXs44YAsRucLx54t7ynWJw46v4Cj52HmRxBaZfkBzotNjFNk",
  "key14": "5cRzcZK4R7D9miVe5gwTQQ9g7zt783KHdMDgDKWFQJJKD7ZVSyEYWExgMbn6v1dBueVc31cSDevNz8H1kbHPFtdi",
  "key15": "2qyfwB9pfZahEy2kcQEfU4wwYbL5piRdq2QvzP7zxeFz1FLYLKSXHFfRPvZf3AA66soYBkDXr27ZXaA5pZYoP1ub",
  "key16": "2gUsNeyKWyMgGA4tQpzMtAYzZWdpP8jbo5FEAvqEaxa22JWhZn8eqjHQadFDGCTWNFLtkXdusRhWDZfBeP2Qw5jc",
  "key17": "2FaVdKHbYRV7RWCNP9BxCUNpKGtqf2io2Q3SS4bcmyuotgcDZzVj3rdYpkDp4Y8yGqEoLEY6ktDh16yMPdSLW3Ba",
  "key18": "hYuku7wKHttyHQrdTBScLmjj3DnHbHB4uJpseGWgGg4G8SdQwoSUPf7t6zVmuPVrKXsto4indV9RnoQE2FRmvjq",
  "key19": "5F5CKfkTYDLiZ1L7bKBKH5UYd6t2nJqZGfonhA1haXFuHpo6YRdx6C9UTQ1nTmrxw3RgmXPgGuNknfcCpY2qrXvc",
  "key20": "2zapEM5M7QamAgF1ea97BYS6rtVA1e39wcCUfE8KMkK9AEYYvdusx7vNiJ8vBpLVL1V25Vdsc91fS5YwvnBmbqC4",
  "key21": "4KZimX2NkEAo8bCcDrLu4dmEoDHSVRkPWkRswV63Ad8VLZD7LTy68sadjEkhxmJ7RkRbP9Ab96j71rScYcXT6pnH",
  "key22": "5ybmWzkPfrPHxEuoR7UyqQc3xdAuzAVnMzbHgwNS9EeCJJvoupa6or7xiwBXzavf6oecQB7ZsR8iBW8hBy2Bw9Xt",
  "key23": "3kjoJzvctH8pNK5CeQdxaHpV4T6wMnEm8pwSVXm9d7QqXKMmNkUf4pyWGwrVPTUn1kzb8gAe2DhmcPrT5sz8yJC7",
  "key24": "LaPogfUrvkeUYTJ2etwzF34au2Jc8cY4HyNa8T9iBEzLbUsFQC9TAm3rg827HtYtg8nV561CPVrtcbHQVPQ89qr",
  "key25": "35NA7DxrgkrVUUhdjzgKnMEXQrSArLns3nfCJpWwu42nUmzmTMVYx1UgTBEoA4DSwj84GjQ5ibYBfgrgTRHeb8Hq",
  "key26": "4J3cANDdsrbvqNqvLNoAMFPa9kddjMvUunWsmYTqdA3HnuVJpEqpMhrVvpVscwrKMUDQq6Lj7AfxHVarP5DSqyPd",
  "key27": "49BQtK2Q32GMX8NRkzbJS87bYKobqGTL34VLdSQQ5B2Dnu88S9xzwEWB7bTyTVdzmLsi8uRotHPTHfN1fg5Bahrh"
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
