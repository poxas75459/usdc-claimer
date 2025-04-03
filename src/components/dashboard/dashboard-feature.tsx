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
    "3t4wvPLyNHziBBqCreMjGDqVZG3FFMPzoA1NMxjoB1avEk2ppWcW4AnemFQWBMW1wv6ZigTdqy3NVnsXxubMampi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pBVNpJADv4EXFi8iA13Bap3GDQbebD8qUSfSgk5eV54R9dJ46tzgotfZBxo3faLJYyuGWK2ToAufehQpJEYz6F4",
  "key1": "2VVk1jDTe7z7yA5LSnVJLWjHaBgWHwnkQvcWAScnXQPySyoozPQ4G6BZPnMHFbjiAyYDuazGqp6cZbh2ddQdnHTd",
  "key2": "n8t81e7dm4SrcjSA7CX74cfyMiUmF5nNa9s7XGeJEBj1BLLbA2219WxvtyPSQcEnGcnqzvrWtVF3JpETVN2f7Rv",
  "key3": "5JLZVkdCmgcNH1cPpBcE8Hd361U9KkjmWmy8EHLqfMvpBaP81dnqnVU7uC8Rfh6RnMjDTDL1LqyWTyvRnpxrtguK",
  "key4": "4QNJpvehgjGMi3JAUm7T96KdkqzKNdbjnqUAGXJr4xy114wy8A4NvF2RPb1zjcQSc5JuZphoGyxnkGhPAY7QrFrN",
  "key5": "2AMxbruTAKrtGYMqRtCPaKWUS53Ky1D5ENjKdCFAtSGp7TaDUzJNbvQtMNoU5Vr63b3qz8PQGN9Qn5k2DwqJuUJG",
  "key6": "4hyTqaLk9eL6cp5QE7YJDtfUXNhDj7kNCSJuSePMCRtjJkPsxngTvJU3n8L256t9FZXb9vURS5udhMki9VvtLnFL",
  "key7": "4vyhD3aKdGBZZpE8r68YEDgKCBFEiNGMQDy14ciJb2urE3TPW5hiur9bNKsq49wkwZ8wZZg59JuBjKmob1RPVs7t",
  "key8": "4CK74pB1nhiRtPBetqPsnzKadgFT6CzN8DqYEoeeWJMNanMwENAVKfnhxcS4psSfYoJVP5oqL4cxJc5EYza4R9tg",
  "key9": "3FGbgX9wheurWWPTbNpbwckcuGH2ARFRqqyTnF2Vev8xT3F5i5qwLp1Vs3MwGAvPkd1eK2n6CSubauamD17XWVXV",
  "key10": "4DDLbCv5HKHCAFEcghCGfk8CXj5MewouMbSHfEpDFUDrG6mqXWunMWik9sQvj4FRFCvynrP15LGVdw5fLhhpXK4J",
  "key11": "3VU22n4Nt8ALEGCX8vJsZRamCSGrmG55FmKR3b3yDXeTYBqNgzs1fyBazjZKz6qqopBGVf7YzFfL53gwTDywDbq8",
  "key12": "56kEzF3dfPxwZEkc4WdiETGryQvZ8V7NP5rPH1XzbyhDiUpGvLLNuJguNA2Z8acgGQWXQWbXvudE2CvqASdkDAPF",
  "key13": "gjkBVJKey5kkM5NtaS3g4VDgPNtS6q5JbekiVs79h2bExVJXDaBojRYtmhp6JiYdmZzbmryzFoBd57YnoWkRbPF",
  "key14": "mhZTVD48QYjky3heyrnk4hu2vy1m8E2FwMZUN4zZq7EbB3YWoUZixyo66a7V65R1d8nZnyaLnFfbCm58yfckxFG",
  "key15": "za5wAyMwpnG9Q8TMQhsRkhcv3jwex2zbJCFKckfqsdNe5mCe8N4djPiPYoKovs1ccwnXXmRVS41JdeTiwp54fda",
  "key16": "4Mt6WmGupXLeJyP1pdRXtifie5a1S4Qhh2T1MEkWMHNQtt7TP6XNazeE1Neg8v2Mgp3MmJp6n6L7YHDmKbAysWPR",
  "key17": "B9BxRUEoqVDwBBCoCMzAkvzM3tcCWvEsP8n3dRNoTn4vATPFA5b5hPAs5jU2BANAYSENVsfstHbhWYiB1bgL41y",
  "key18": "2kk52UQKBFpyj6ZfFR8Dh1d5cGH349HFUBcFXoE5ZcJjEndqFUUsnYeGyDC9HXVHPp32Hqr4x6KyWXPHcL1UfqHX",
  "key19": "5biBiWK9GTxKc9m7uuQyhe2qRvqb5gZJhtCHPkRfcBxN1M8tpLRVqnRfTBaZPeEBxBn9PrxvPXMiVhvEQDejnpXE",
  "key20": "3PkeM3dJr7mZMaYCrEq8uakSEPsVbKyRRjTSevsaXHuEHMbfmmcVJmhX5tPLdn4TtSLdLAWbhYCsc16N9iSosezA",
  "key21": "5aXbVNhYZJ2UtBtaqW5GkAFA3F2rPpbEY1WEhjqYLFagYLmBeDc5e6KHzVdx7vTXrfBrSJB4EAGAgFudQDgYipZm",
  "key22": "2AoJGdUhgPzsv2uJpqtgxh9CGiHNCXCoZmf5PnzEFu93q6rsRraMkTer1Ehi7ZLux37wmshvFcABpN7cXZJYMr51",
  "key23": "5sHxuGpeEhpo62bssB2pCJYqt65tiKvbZiLr972S1JtAiq3FDxzh8UK8vUFMZSSGkFkACYZLHNRFEDdGwJu5ygkV",
  "key24": "kEsn8eh5hpd5o3wdkLmkfz8FsGitg59Tepnm3dzAeA8MS6RHqpv1hk9HSfZ7owAy7ocy1XhzDXtU6hSruNnT1F9",
  "key25": "37jv56yNfqZXWm6r5Qjq8wL23CeUPEbWmEk3tAey1yjLQBaDghzqhfwbByDWuFp3x5GikbvXxgLfRWggofDCYSVA",
  "key26": "4ZVK9b6sDpxNQz916MrLcowNtw59kpntVGva9qaiNEFaUn1r3EeFbAW1kuBbSkngoQVhoL9PgRDpbYdxiGLUZWTL"
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
