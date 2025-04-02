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
    "5ujB8VDQaFXYc8JcywQsj97DFB9HU2YYg8SxK3SGXYwxnv6izy7zVAUJYf6mTDZYPndaabNojxTCcmZX66fgHtko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c6aTtwfmjzcG2sDyx7QP69fobCZ2Pxt8yWkyRtGAVe5ucMAawLRH7oYsG1fp7yits8p9ccLpbX9UxATYvFNfoYP",
  "key1": "3L3X5XVkZNHegdMVX3YdaKAYffLWUsriQ34w3VvzJBvXpSbGm23cCRp82YhcuzK5wgmUU5Qh1aVQ4iPPAWVayLqf",
  "key2": "45P2Smgxb7bEELaLZSUbAK7cpC9Muc59kds2PUjiTcvt9Wt75epGDLiw1WeDbbVMtMXrpXiBWsBiDRpYsK1v9xVU",
  "key3": "2xQQiCqLLKPQDe7jPtuzDjdpoQWz1Yo4WDZyFEMaGZMAJz8ADmrQtxmzXUG2pEixkSeKt1Ksy8XsAruiDfGi4fT4",
  "key4": "4NjWgvGoX1U4eCFQgpR5Gv2Kp5CbNLunuGUVpiUMefSnFjvCMyupkw1CrQ6jb9efuSaWC8x4NiuvcBznHwqTZs7U",
  "key5": "tRjL2GaqstYzgfBE6xfnFr7i75bPaxZwbt4ULt6oWwTcXMcF6gHFmLWDCfrSDe2c4EGXsQiWVZ6rGjWmzh8S7wD",
  "key6": "3u2eobJbcAFcSD7YP8HVVKX3wYKPTuQgguDo7EfnRc5gbcimZZY2KYLBHVU7frUvu1aBzEVanc8Xf9XV37a4oJb8",
  "key7": "3YbBPtAhP9CXXRpfxhiriQ1FMdkBzRa3ieBqZJAY3yNzu2ikH2aD6Ut5MtN63tFUahA5YDuruSkBjUiE9kDS8GZ1",
  "key8": "3rPtg9SEL8DEHdVQn5ZrX9FJDXQQGpVqbeSJ4eCFe2DAAXXDrkz5fMZSnXPySuJwvkEozq9UbWbsdyFydh3vWNcr",
  "key9": "4HNJdHc8W8b3kHMYh4N8gyBNfvtiAmofBzsW7H8QwYKUvXhV2HrquiRNVndhinHeNNTBurzsZSh5s96ZHGZKrRDK",
  "key10": "552iXvEF9tZFjcEJXgBFZkJAj5eZB6v1rcer6NmqJLynxLRrPWQvfx4uperjUhAVBT8xYx9c7UKJLQCxnswR6UvD",
  "key11": "5AhvxjaUKCWsBrSGsR7zVfp2fYUjQoV9VJxsE78g691UAWDZSrmMARTdEYpmMczE5RLBUzQ1DkuLCSBNyth6XTUj",
  "key12": "2L9TsfQAtozVQU6esRvYkzU5epHwwwMF6UN12WZYdKDi39Cqi5fb388jYRbWiQMv7EbBvoachDRp2W5HzW2Csoa1",
  "key13": "4EZkEFjSNXibPYWMSDc9JapGamoCUuS16KnasVwBE1twkS5c3T5WUT7fFHBiyhfbn7DQANAZ7ErVa4HwwrYLwG6B",
  "key14": "7QySEuMr2PczVYgh5zpFn6dZagDts2GgDRT8AaSkR6tNpBn8LSMSkK5V2X1uLhsvU5XRwQwdgmXhLPRfGiNMqX8",
  "key15": "uyPCwQGB4mEVYKRb3ySqSqFCoB5N27BfHkcjKDwLyhhgsABbMK4b7GCF6NCiFNCScm5kU6jW5eADLNcK7kkgETQ",
  "key16": "4Wg3nswdjqjukWCTScBLKEWaaKwzApxaJZyLHHZhnRjSir1co3PAqVH9XN8NjbnKoRTVUxMM1fBB6eX5i1AmbCju",
  "key17": "9AVEgx6QsL57cKYregyXmW42mjuZ6cdaBGvPNcNNgfetVmhjjBSPeWrE4qZizNmq1gmBVE62Cqo4Y62egQhE2Gt",
  "key18": "2mZabhDdDUfnBp3dQUCdKcp1A3h7N3ujFv5nPQpXKFRUnXDZ1y7Nk79zfq27t5oKa9ZmrSJP9Kny22G4bF6K5F4o",
  "key19": "59JD2N583Q8PdtJ7qkjY5uzQ91SB3v5UAf7TTwbjqqY6XJdyosp6gdR9oWRLdCxm1xPnzyKzcA3n4SNomFaDJap5",
  "key20": "4oUQwVFtHACJTvqAvMbejpYAVbBMXrkEfuckbnKoZcSW8uUwuDVWXy8zU3XcGPR6GpA9av8W2smkcVtsmGrhve2v",
  "key21": "yV1ExLGip1RdojbvTDK4TDseHdJMxYRbKZvqEy8QYS3rjUYM1ngxouPsB38gWTjiXMwsPSHAWnWUPkjfMQ8RM6W",
  "key22": "5p9nBRWLy4RD3TisQSRRzJ85DVQY86jkCvvJWiANxajtXvAdNJLBDK7wcuXawzgEPf334d93YmPpiNVKdjbgsT7h",
  "key23": "5iouGS7SBswiFqbvhwQ8FVcVV4kbV9qwJTY9yE5R2qWcHWMtKjc6y9KQE1N5DRRPmUm8ekuJKKKC3bvKQgcRyhJy",
  "key24": "BD3ZsqdBhbG4LgjkMxncFt5aUWxRVY8DgoFp1wpvPavz5rFG5ZVxyQYeBEjTSxLRu4UMeAPfarumzVSYcyNMxhi",
  "key25": "4YWcJujKDRbYpr5g6D3uzdR7uJXX9Z7ycLUR7nZ7bhoKj4dDW8WaVeZEEUS99ZFQ5aQ2L8ZuiaUkwa2tA1W3SDaS"
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
