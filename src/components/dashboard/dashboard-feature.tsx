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
    "4fAkDWFCabznGq3y4YQb5CUzCahd1ZkxQdj79KSWk53Dnng9CC8w7pMifux4qqqTsnf5FAgPLp3pHVeB7XJKRiJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fCM62j9j4zb6vQxJRy2f6oaoB8VqXzKA8NY5wWPQtUYwgEuuZ7ScDB8XVg1EpxCv8tYUthnDHtvsjunwbyn5XLN",
  "key1": "5y4DLLkHi9z4nAts4auLgeij3eRN45EgcQtEsa9hVnBrHXh98NprokMaXnDUcJ4ZLG7A7CjXaAyy1MMaTLmRGNTX",
  "key2": "5EUd8PmzKz3MExUEGv2TzaQ8c7Ft7Ad89P2pceJiB1EBrVQZKC8rSxuPpLkmNkaSxAT5k2FPKbr3EBcM32T3zL8p",
  "key3": "yVHzrpTb1zXt5ZjvzyBcGWEfQo37vXsEsnrehyEktr6zKdNBHquNGXRn4edVngyUBmka4VmFec8pqyHhJDoZw5J",
  "key4": "1eV5dG77ncQxePPBvGZq3XEx7LiR9bjJENYthHHu87xxHhwqi2GAf7JAK7sjwCoE2EXHxjrXjjTXuLf8kqHY2pk",
  "key5": "3tjUoEdYxg4Y5sSTbTvjzoHk4ybVoRZmcNWqhjzZcocTPurJDRc2qxaowFpHMvmdFbHABpH1WQFNRXaaNfdUykw9",
  "key6": "5AcKF9uC4NgkXWQ2BbpvSnUwu3AfkuWUGnp9XtL6ovneNQC1nShxZ1gN8ppaTGz5pmg7ShGKdynMCJNvVkBtLiU8",
  "key7": "5NDgD7rwm44k8pmLTcSHSNeY5EBgMNx9PRKYDkyaXsNLCCPCTSCchdktsn9JD3h4CueD7DQWiePEB6Ckepx2StCD",
  "key8": "3bsKcPutgWoPdr7y5ewod72DVUsVWuhzcCBQPPQGhadHjesBUFvkWsKm2kctFbTrFsF5DTrrNcgkLMZaRM6zKvmz",
  "key9": "3fQki6xAWAqvjTXVMU54wfajgMD5aGVusrpXEb2J1QDE6qmfYEwR4TQWRbpxAaCv75oFpYb4jcL6PimdHWRBqQRm",
  "key10": "33X3RJGnQkjmugSQ1SqwWD1sM7gP8aYboio5QD8JeaxgxyA96tt9DjRkyXpM61HvKJw5BB2Dk6zMw3kPxHWMvdRF",
  "key11": "2FSkHTpFo5XXRUuVmm72MKCo3N5v3BSiuyvDBgNmzpbJZCJxeqrQdZbH2HxxUC8AESMC8LgSVMx5N84BH6pvpz5m",
  "key12": "4cPkdvA35p3t2Wy5jznZsWSSRcrx5HDqZrQ2RaJouLFsLH5vDpuX3qBdptbqD1u2DqTzLGC7o5owWsbb36GS56iU",
  "key13": "4SkN8mKgLY94XxzDnqragoK5veNgR2wAQn6b1CRTkaMsXDU45yFrSpqeruasoV8CydvL7kH99LK5kSD6JqT7iaPo",
  "key14": "3cSq8LeernSueLhT1HcoZ2EfuZSa4TgeSAX1nuX2fpCiDruuYaoDyjwpxTHZ8YGN3kDXGm6LeiWbFw39ixB6nWhc",
  "key15": "UiFz2YVos44GcHj4a7FyxCRFAJouNQcdFE3HzEDxijCfrngaM3LxmudGQVNG6Bu15qNcMS9WFw4dXQy9Pp6g9Mr",
  "key16": "5iorx8ViM89rJBZh1hQUDcvPPzQJuPHaddLG9Z8cq3ZqUyfJkSHvsfV5ZNmpxtaEwJMgJmbFDiy7JeMrtEV19E3R",
  "key17": "5n3JWzMkrJ2JjdjkzQeTCVrV5p5Zx9scfbiJ8uKsqsjSz4NHMxRRUCVZU13csU1Q4ULiXHmLRX7k1PxQN6B9snh4",
  "key18": "3FFojUqdvtsSKaBeBecpXiAmnxBk7FJBEDvdYz9NwsBA37GkJcMwSD4KFoSMh1tMi4gWM6e3XK374FCyYQcr31vW",
  "key19": "2AxnW7ixsLABM2nkCLbrj5yEgsEnUKqGUgRRwmFt4bo6tuVrvRkXRyZ1dMaE3QqepxhNoRzxGUzYW999xNcnco74",
  "key20": "5KJDvNZU2K9cQ5oiyoseBHnjprGUrrgan5WiZuaR7Nfmya5PDU2KLaKYmVpgysncLZF9RsVSD92cYiew5jS6FDvv",
  "key21": "5N1TdDgWt73icsfYQE5VeTEsYid6GCSnkhNnzFEx3D1Vs9Z3JMioTSvEe2VaTPH2yUnsS1JmTDQoFz9xdH2r4gf1",
  "key22": "3qiwxZNcprsQvruupzatvXG1Vc6Qq36DJFB8FV9bMKyMeGWy89g1jjaB1kSAdoymP3PoxrKzxFsnwq7QFSyjj1cA",
  "key23": "3VCKUvRWUUazs5B5saiyZGBV5VEe6YNf1pMjDsHXiJLEG8VXg3KFqJoGD82iJaQA2ydZMkuzH1RrWhQxVqzzWhf7",
  "key24": "3h3bApKHkwDC6GXxAUcSQEdWc7o7CYKxHnetqQK8unDw3MY82sfCKnJXdYggCNe8wB5aqixvG93piBBvTGsUSDG2",
  "key25": "4b165iu4hf1Vq2QAEEqVE7Ne7LANoFVhsa2AR4YXsJS8emMBdCGtvxK1HTjbKwe1Lb8MhTUChSCrU57qwDBLuwws",
  "key26": "4FCBUoWVjahutjw2uPTEaMAdgjuToXXEymrbYkvgJupUEJL2BRdkJW19NQwA58Lj5VSi34bGzQGr2xrBiMDqsAmv",
  "key27": "3UUyUAVktiUfrC3nR1CbnkmeTJi8Lp5CFFvQPCEgQaXvq8CAiTDJwftzLZViLvnB2FmmrQJfxiHZxabxUxyEbcC9",
  "key28": "67G6ewZ6sBHAvukZCKVFRh3LjXdamPgBVQDsVhMGs5c4M2rPMxAtcFd9NSJbcgdSHAEfKWf3VtRccN8kcaM8aQ1e",
  "key29": "2fj8i1cdRQsrUXj2d3G8Fv8ui9kfSYxJ77sQaGevPxFFZWmG9QMLtDc9yMpUe7RRqE4x5Tfr8j5nuTKp5rSj6uuu",
  "key30": "Ets63xjmS8vgvFDEwRpnF9xo7y1H53qoGrJyQnQ1uMkwAWiQT9X8Pa7FCP6kSZgAVV5jvZZ4iUwTZB7ogWUw3GJ",
  "key31": "3jN2K5MZywx7RfV6y7t2uPnrRLoU4KaTN4KKL41GW9yRaQRzDX3BFoimdEAjhVpFdrz8f1G4QvKPvgvbsu9Ui5sV",
  "key32": "5af1jh1hkniC89Qecogskhvjjau2oDLQmUcoxFwUqjoKnZUBBXCGEopdkcAcSKt42tPHM3are6YpYoVGRtUkbzEb",
  "key33": "4bjV4upXZjFN4s8tDoGSNi6qDkTqbV2nZj7VxjVYgob6nu9UMfZAj2ZT6TqmLVpQmoMT6Z1pWN5CVVyDW3g5PYfn"
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
