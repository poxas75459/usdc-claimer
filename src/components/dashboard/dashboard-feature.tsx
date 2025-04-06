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
    "3htv2oEUZpHsLhgTNkdknSreGeNoanjns4fWTMxoLHCm9DRCeMzhpsK9YeUMaVDuwr77ypmbysSKs8kmZe581o4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vkmrnfm9QC37SsXvd2bh2SWmkekagNwuMfcGHktDoLQscp82U5V4hkgXT31cyWFyVhLqRw2tJ77gCUPrH2qZpn",
  "key1": "44MPVkUq2Z9NXUfDKFaDHNUZQCuYu6ur4HxJ2CPqQZUudXqbdXG3rXfkco3936vGhhA6JBvrrZ7pZpCd1wQJPR9G",
  "key2": "66FV52drMssK5qTcQWwJ6hH1EgmgELd3ZcYTJLU9PpFWsHXsLdwTd3ydRDmbE57DJey7Ug5tEVHhk7RYzq7ZYEPC",
  "key3": "5CqHArVpThnjrt68xBvmbrrnfHmhwox2Fg3UQBSvQDpZ1hK9Fj1nacHSLZKwFVsWrTkg24qfRmbeuuhhYBxG3b73",
  "key4": "5923Jyh2ekyLKLZ6nwyjonGGdVFUtahcijqD9CQk1V1urtBAcvGuEwQW5VNJK4UMRBxNyJRz3GXGQxXy63TLifrG",
  "key5": "36NsDqUfjowJ4g9kuUCorUrq7eFaZrEneFkU9aGkcMoJJmYBaQ2vi1GqVT7ZhjskvKSEQGiQfWLa1EPVgbG9S79q",
  "key6": "3P5vRwbUNsLGd1tW7DF9La1XTBwx4wD4jLtUqmDtd5JXMmohoATZzJe8dvFk9k68FPmDqA7LMFwATDTbcXmvSF6y",
  "key7": "3V5TQR9c2VPWe9mzkBeHWJfiR5D76gR59Md6fZMkT2uGojQ9ke5NihgbYPKqbEpy4seFV5MCRmJjnp3hApnZgvk",
  "key8": "CXNpbC1zosatXkcntJV6rCEFo8YvVMwZHpQusR7UgbSWxtv6UL1c5PhMTHkmSwfZyMrBK6ZnyiGo15fDaPR3X8U",
  "key9": "125ehLNNJZCvH4rbrFAcJjsvBczLugkpZmN3xAfFTckCB8FkN4zDKCfLwXJ7SHVECjpx7xar95GAvg1PZkNDqiU6",
  "key10": "3GNU8TbG4pyxsm6WgA2oUxu1E5B3msr3xfZKEpxDGjck9tqCEAAdSfLewjCyMYz9B7W2UKD1ZQPgAYQdJ2mGkJbR",
  "key11": "4HpgvvzFJmNBuJ4XxNy3S8hfn37Z9HBgSRZXWkhDPQ7EqrTY5yUmr1QoUnBDYqQPTKj27nhNZd54Ak4G3DJzBHbM",
  "key12": "481Dh5eqEqVSir1hjtgxQru1zmEm5MAeqQ5ZH8zeJSq8K9At2Af3mgQbSBzLPwAxD3bce1j4SF9iLzxvxJkU3MvT",
  "key13": "5tx9eWe1gyt8gtjL2c9PZSnUYNQFjwNnMRrj8bHsDMqg87qtD9GH89nnmKo7LRqAufB1zhj2tWqGLBa1JGLoq318",
  "key14": "5TnCFg25YeK39KYWfw2oT2UBh5j1mAqmDSG7PNJu18YLvvkXmi3VcRpEc5R2CBKzxektnftkv38EvJTW4JPuU1MP",
  "key15": "2u137zZz2dLemjCBUzwDMxEFr81nRxrsLuBFcYfm9HhdRDYFUWC5bogUbVPw6KMYyyq3Z6NyUryu1KiSPEP9Cduh",
  "key16": "WaEvp4WhFnA9BrEEM8FZFwA2LYVoTrZbqKZTfnKjN7wY9k2PqW9KFBQx5EJ4msTRwFb3Cc3G8RsASpqXj895TS8",
  "key17": "58Pj7TkbyMQcrEgnTbcXdCTJWPcye3j7bqYF3ybnnD3EVfii3CJhvefDNRwK9GDDoh9LpHXnunD9yY6Ukvojekee",
  "key18": "5UUzoavdvkQjkaRpMvsUa18v79q7KSLubk4iSzyG5fXGVQxGVD4HdfgB9uqWhAtCDyLVnxJUnVPEvX1wHmGYzgo3",
  "key19": "64Z1nRo1jANpoes2ETeV5jh6Xkx7g9heuzoQLA5kcAVjbZwphKuborVC65mYpn5v5AQiFSNo8uSYJ7KLf1jNAkqq",
  "key20": "4vidXqv6H7xiNbWt5pTQFYMDb7w4YSj2h5zi71yB6jhCsMtS11M3eC66ornuyAY2SbcpKQFwkkedbovDQ5Q1DLYw",
  "key21": "4TejhMKFvfUU8czwrgNUYabnGgfBPWJ8DpxE3xW45sB9kbcU6jufSHC31w91nurromgshXVgrzxMj7MBHS85gBu9",
  "key22": "edC2o3LVY9qALUY4GegN3FBTKC3deAHYrZnNWa77hdkFwoVxtNH11ZJS9hVbCvRogKsr9cnZfucb3ieTjN587D5",
  "key23": "CyDUn6rtWJQLqj5fM3xiPVdunwLwE6kkjUqBn4o9nXpeDkxLWCwFdoe8R2sngWiUP6aBWmghtCthkXD3urc1Fps",
  "key24": "5yZwwm7ZBWyRtNER3tA21VFVufLGLgm5F564JLaG92i9NkhaTYDJrc6CRrbXrkH397ErW12Eur1XqKs39LofwvvY",
  "key25": "2PZ3fnaJSUmSyk8rfNEZg7i8dSQUejpNivC8Bn9bqKWSWLTEpLQWH8Tt9oL3w6YnRnvnF1RRYmRZsvpHBhh6ZXh8",
  "key26": "5f3DqeWUqTaQ5joTDaZKc1vMVLqCU6s6gz1oyzwVdxKsEsqQyqkD8Xx33hiQLPcAcWufW94D2L7nAJbfZXsfhjCj",
  "key27": "4xCoNNFNi1XezrVB8ATerN2gdUPTWxStYgGbFY2XKF4YrjvRSSb9efgYQgWovC73Npp9eR2iNKwAUAyeNXXriT86",
  "key28": "2qwUfuPzoUiQWoSzXoF8K5eyAEWzAwKraSyyQFtSdPb4dhwJG6UMhZERHfmvm8khtv6DwDFSg9GmuMZZ8faAYTrS",
  "key29": "5F9YndvPYdH2H7tE4G6mkuUvaM8mVsrpjkV4aeukVUyCmuBFKmZgJ83AHLar32fwpXKrePSAHKAoU7dnJGezCYkW",
  "key30": "1HTdLGkgQvNQpKaXN4hszmoryyS96KvMuHAENciVp1b9sZ8CtZ73R9sLb7tJTT6pCduihcEJzNSdqALaHnDYtbh"
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
