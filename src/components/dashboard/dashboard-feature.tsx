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
    "3kBRXbUX4cGNpfqGeYteep3nGbdjJJWS51LwndbnW4xqZsELTBR7rTGYhjkkhSMFcotdUiWYBgY84m7CgJwrDURx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35MMunJ6XcysMT4Xb4uZSJci8jkWqcZcYDBLstEi5s3RJGFNyEzDpCXTsJYV2fzfWugErdU6p8SnRBRypShEFjh3",
  "key1": "45hpSP2fSVsUDGxasFCfLYCrj9oBesFZQXgK8F8MgL2nYpTZSMxAEYcaJXZF4pDPrKUASzB5uGdZLEtFFPe3yAqB",
  "key2": "22ie46YPJUQzqpusRhfEsf1XJPbJH7gm4WFwxcjQ85Ldi5eQctWSYpce9bYHu3gQFnqdJCfS3JJRiBmg3G3WJLiJ",
  "key3": "2uqyjz19xbdhSNL7C4agGm4wTLK3Hh1LqHCNViPf2rZaSRkLAqrCF59CjMcBddauPBCsjjEsBbZww7hNHADpnpF5",
  "key4": "4xESVtJZJA2UtRJ38EXwhjuRAWCbSfcMRBfLrCXHRYNZ1DaPYZ7FWiiJHpJ47vqKAGjTPfebC4Re57F8AKGnZsoD",
  "key5": "5PEs9Lk9rhgh5DK8fRbQqAJFjirZzwkTZtU5WJFWJsEsCHQv9Nd8rS8QtcGPKZtnFHdSTx8udE9K6TDVBAYidvAk",
  "key6": "4ahBeHs6fYHqMVN2zf4K7zmqDkMsZCgoAK2WHVqqiFahEAof6TgYPfZb1zrPEJGeFB973ECjBaCMZ4UAjLfLWeSf",
  "key7": "3VMZEiPDrDkfUFUfHDZRPh4vLNUZKDAamTMWe6iQ65WBBwpzssjUSN2u9G9NUTTXKHpuVHmnKoML1DDmgidGX7Px",
  "key8": "5MTDPSHUkipuxKmwt3JKMFR2zaZoQ4W6fKFrCHiyf51YretudcuQzL1BERHniLk3BVp2EvYyZdNtCeS1TVyNQTV7",
  "key9": "51EaGrdboXCHb3XnuHeory2X3vuzq3R7i8xVNd46wjCUJGvqvWxAYeqX82FNT3TN53b7zB8omosXpj4FRbJNQEKG",
  "key10": "5s5ZfFd5rTbZCb4YjABL1f5SM9e4QftFeoA3f5K6EvbagZxj1c74D3vabA7ybMDwxmvUKMe2qhSZXxcp6qSZofwE",
  "key11": "4hynrzKa5XcC9MCX2w8Zu1dLGat5xQmdTQjw8s9pkqcYoPgwE5PV2ywhcRBJrTsbYmWEBjjLnD8QvibiAydY19f3",
  "key12": "5krQ2oLxHFaMD98AWRL5NAFRSfdRpFPou3i7ycBdF4g3A257rpXZSDgdxgzv8XXf8tHPUismj6qkEarU3xiw86Lp",
  "key13": "4EFzszWXJrWppJCdM6cxUAWUx6NBbYGGvuKVgKmsP9BaeGHXa5e7cJKGUAX3RKZUyUSVe8EzRSck59wEyvcj7Vg3",
  "key14": "2TNtmeDLdvizFsBSR2wSvRVor1kgRnoifqjpmY6vLcCLd54jgoqjViDgjzNziu9M1qjC82LoiYu6Litc5X7i3QCU",
  "key15": "2KjdmpFn2yaQYvCPnVXJbiuPcvJ2YqBN8tFSYFQPRpQvUVev7z9FhbMsucsr1RTkJc7mfzD1qteaKuomhgvW2nNN",
  "key16": "4FqMdYTksNzK2v7ENEN5TDYHCrN1XfCi53WrLJbBnMbnxH16ygWHuqwXTXjsJyWNnMxiiJys2GMZ5m17LGrKUSub",
  "key17": "3WDx16cUEbkLPRRY9G2NpTV8KYQWbU7vk67Dpqn4aZhXFPEcN4FTcQnKsSYpufV4PTs7gTfAUHCiaTbZsn8fHQcU",
  "key18": "3HMQpR68RVmjFtTTrLbkTr9Z3gw23wswEYXnsPrCbQYiomnqGHJNN99ARtCPs1fdNwg27PhBFRFJV2grnMXrzh43",
  "key19": "eTrRD8CVn9YtFvP9xU9BZe8fv3AiU6gjucAaUg525T82BaKSaeuxHiVNEtZZ7awmXLKYMABU4rrTtPiU9HX3w6V",
  "key20": "W7MDw86L83QMdKHrbJFScDH7vKPDkoB7Dc5DBw2CUFYCFeN1SzoQKK6VuXsdprMaRL9bDgevVEXgaCxXjbRBFmh",
  "key21": "bTkUETdmrYGopKmENKDBa2n4uiC84qFczSLK1enY4No74gcB7y6woMii4EeDGaNp1GuLmcPg6DdejzZu7gRp1Q9",
  "key22": "LjCf7PR27bSnE8pEVjTg8jkNLXmh9fWoNWeasEUmUy2bZ8MKSN33eG3aKxuFUT1S8zVWXa3th5VV8J2YyNEzsw1",
  "key23": "4NVShzmsFuZ4H8ThnjX3Ctn5mw37G98CymByLVb1aLEczq2L3r2UNUSnHc16QhX4uzJdVfdiSxMcj5Q3nPqsL1bE",
  "key24": "5EcMtpEn3MnDnSW7U9h5BgHRhJKQWMtgaDqSCJxasyWFCTLDdYeJhG8enaNF6tGzgRB2g7D9R8WAgXJyMNPxQe4b",
  "key25": "5L71xV8aBRy8DsiRNBkNUVT4jYa1MAG3SUwE3rTbHysPHcLkRM39gZnWJwNF1unAr6GR45CxAU7aGSjsVXqeBF3Q",
  "key26": "Vo4J3oXueQc3kESNQuoti2EH2wd6FusQh4WdvfMDkCooLkZxXHq2tWTCHsUQSrwrxbXejgeHZJG6sPAL2AP6eZB",
  "key27": "3duSwvqjNxiKVSgoG8SLsA1BiRJe8PJyHzLfv9fysrKP73zQzGduA9cUMKEDT9gMoMYhucfw1knYa9Ruei7FUSFP",
  "key28": "4mKiPiPgJE4hDVohHV7bA5tEcg4ekZyHyzUzyepi9PJmB4hTGb6XRz6s9vD3NMvR9HJE46zxRc4x8nRNKNW4eSRT",
  "key29": "4s3rJcTW7RxA8ZXN86KniZASGi3piwqfLz1vmGoELAtbWBfTXHqq2bqips6EFB6pszC9vQqhNHQseSv3qj777GMW",
  "key30": "5KmfoyxNSJ66Zuc94yrTHXXCn8VigLqUcZYbqhkKPYg5tEe7f2ZcswnNUheQ4BB7CiacJXeD5tknhgNkSm5TVEUk",
  "key31": "4UGQNGPJPMmY3qLDU1oRNa8fX7Az2XLhAV9NUgNAQ8ZDng6wkiqLGA64wC8FLw8iDe8uU4wkmLPXB3UDcKdRmKCS",
  "key32": "fWQGD7ZVnPtn3xVLZYb1U9D6oj9TYAxJUsJ43ujZuUFgpcivR1qNTepKMZbCNNSbuWmgBSzhYTvHHsiDEM1nz2L"
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
