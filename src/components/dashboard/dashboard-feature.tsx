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
    "4S5iw2hYTE2jZ61VumoSixBVr9vWJJwVZ9baFeoVGjvALNi2c2tm3EmswyBNMPA4ZGKRUG93UQiccQUwGHyZu61j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W8ReTqWnszyDrdcKVDNUY6CGznzxZ1RVKB3BbAssST5G335AtAWjxzinLWGvkaJhd7G2c9L52PB51MnttrozD3x",
  "key1": "8WwxP9hJJ6bU4HA2oVco6uXrmGA3N8hn5kJLvHzj6vYjcVt6Nfrpo27A8J87R2rgbDS5BBXiJQgx3Qb6kUhvcLY",
  "key2": "2KuPbUaZTUwAqvLH6EWWx1pJ7v9CMXv4PkcfCGZsYWYGhjCHgiGF2v83AyVfZybtzJyrRY9wupNPWm29XgGGM5b4",
  "key3": "53PfxhfaovZ4CB3kzeEt26ceRCzKK6GhqLdxCbQYToeV3jJX6PrLWoRszLoBdgc8JwM6TzqhiSK94gsduS1ThA6H",
  "key4": "3ErB2GmNPjrN8UiPb6QkWNrqafwMNALm6K2dKz299Z17C1jhaQPQKWkT1WW1R2iFT1uXCK8b3hMAMDoYEjnBcfMh",
  "key5": "4kWSyAFherByTsihT7LY9cx1Jr34i7b8xYhSdS5NoR8M7KHENigDvwhZnQP7DEYT6ZvwKPNCRobQs54SmFiEPHws",
  "key6": "2Lm1CPH8HkRU1sA8evJ27k8AxVLi7ge3gbMi5FTjgGQ4CUwrj8sAA36bB4L1RNrVHk5v7PJdRTA9zonNzstDhboS",
  "key7": "2KVVgYeK6s6pH6PeSTVkXcFXUapNNZr6sBRmFYw9cvGK4aSCSoHARTYWjaPr2c3pQCdtYxF1rsu1G4hHRXcEwDvT",
  "key8": "48K1qMQxcXe6Jz2qQ8RgNExQzoZ9j2WD9eASjvHABANrdf6CPpHBkxNPyz4ZYrPLAhTBeunKJHBLhoLinKp7TYpH",
  "key9": "5vA5W53N3cfB4rVp1UqAU4H9STJnr9m2KBs7KsXSQkriLP6waR6irmjve9VorYP7AguBDwMYVfBrvQ9B7V7vTzPq",
  "key10": "4xqu4rt1Rs5ANUkv8nSW9rG7VYqj5HvoUGo8rqQHBeah1xXxdqjQQvuDYgpU2mZAZRFmTETSdn9Vzbnw1ayBKGy2",
  "key11": "JzT9wZtoucCjSgipDcjsmhH8BZHbfToMoiU2AmPLFrLWJZu7g6YKi5EqoNo27CyUQSVjjGUi8m3kjnvgYhcfxDc",
  "key12": "2HwinKaFwZneHAWxAQbcxZuFMEa748VheW6fYqJMLRGHtRvGrjR4cDi2vsqBiGyFHAedLWAS6bhQPaa94uTLg7X1",
  "key13": "4z9vHes1Wgb98qmBpDcRSZs5MX55pqYoJNWBKqjaADbtYfKHzGDTtPgTpwVeZfmq5529f9Uq7EZQn6yWiuoRqMLE",
  "key14": "3nunzYRNXvPTp3KmQSmYX4nQfUtxrKajoKYQcJ3KW95TfU9xjVpFSQbipk4yYnNSnxxzAj8gi18mnqFQAgSLyeK7",
  "key15": "4LuyTw8jwhUsx1BJig7Vc4BmBNCn7HvJCddJBVDJkELN8qZTc1mrqBBfsLS8yEKxq1BYEmCJxXndkxVpaNg8i8Db",
  "key16": "2DgAasdDjLqGEiE3LCchCR2CownHTijsZRfFqhMy6DpA18foszxxKv3cZJeUurjYaMNymeuC4sEAvkt36LYX4r5d",
  "key17": "31Soy9sGLHSTmhfMC4DmH7hdbtKHxYxLK9vezzdi8bppJpFbifKaddZHmaEmnNqRAshhPQR9oS8hrsz7NnVuK9fd",
  "key18": "2SpDGTYEGA3Yazu82GsZyTP8KtFTHna4A8VsFR6E5sNc5q9ks44cAFfAao3QQYV9NLMvWaurxUoZoB5xvT6bx1iv",
  "key19": "5KyrFrLw11dxmsYRWocEf6QKeA9Yqu4KopyegVzV6LN7WQR63kRhmGKdFa33m7WpHjvxuntGgbGrMdxVUZqVpZBB",
  "key20": "2HDFgF4GASfMXd5hbczw6ZN55FsCQMKQuURXewu3tR4XFHPVvD8hvs88AMakU3MsZHqnsYfAJYaz3Fh7qps3qBbj",
  "key21": "5dro7uePzGaExEGUb9KdS8XY4X6JytGtGh47yzTzC5pgBaL5zrhYnTQ6TLALXs9homq984UJwBL9jJGLeBuRKuHx",
  "key22": "4WZGzeNCNGdJ6smiYRatimCzpTVVFB4TZUhxa6FqVZNc29C3yqtFKXdLkimPVGgX2VAUKnMeHGzPPGaLUcuy2WBL",
  "key23": "54ZGKJfNaRggf8h2XkRLbR4c9Dtbm6r8m5C43KbUhB61HCgUsi9JgGcVqBUibu7pqmAX68k1htYRPc6VFjVRPb4R",
  "key24": "dyiaFPNG7fXuRKmNtaecz6NvApbCMVAZnREXxUDBWXiiBqmywpDzyH7oPECJZ7w3bffsCVHaZTgJFsFJFVDDxXi",
  "key25": "52qCC9hh8xpC6p4AkeGApxhgK6wv5U4fTswxpQwnPCRmxR7GfCPWRxR5munzAyBoCeMrW5bSsRtRmMJbQ7QjGp6w",
  "key26": "2TSTWCPSnFrxRu4F2EMDeou1x9xUC8rykvNiCpLZF3Rmw49WZcFUPdTdZvwEax99vbjBUq2PtcwSGFC5gD33Je4E",
  "key27": "3ieeYM5uRDWJ869nqSi1uPHBAdfqdsiWgPDj5YH8WDNZZjTthpAoUVuRgcmnfrhin8HewSEddMsrVZsX4W6T3Cnv",
  "key28": "2SZVFX114TocWyPPwaLJWkodDSGgUc1qtxnrtUpBMhhaKwKcntRv68zWLs8M7eYXN2PZ77Pkqm8fhb6NAYgRhR3m",
  "key29": "fXvAuAQfWZ2nsB9PnzqRALurj9qZiLUfNkSJfRDspCBkW4AcmBwLac9NvKjNBmQMBswtS6PVzhAcEvRN69bYWQQ",
  "key30": "5HJmRrwPxDqvoSSU3YZg9e3N6ws6EZms1x1zN2CoNpJmaLRqjdcqSD3sbESZ5EgWDi1NEMHaaHvY4mMfgsVYBipr",
  "key31": "293vqEUUpu5fgtzWoJVB6oRK5LxwGXzNMqjPTWMuTZD5sNak5a7RuyYR1q1d4Kv6HStodhWa1Sv9QVt8wDe38Jb4",
  "key32": "TwzpwzN1r6N5bqfdcdL8bbxvtLLceBzJi4pb9yJBcfmn78pMUCxFUF4EUGusCyfonR2C1LjVzc4qAygsPohRgky",
  "key33": "3K2mXW2TPnJCy9tB7XNfrXkfRPj2iiuZJMyXcPkxPrxAdVBadzrLjATTac6DYK87nh2NGHbof5gBRvXjLkaweK46",
  "key34": "4gMt7ioduCmQiKgqv4vuxWUN2fzQVGTEDLQQLZzKXsp4xZNgXf9tRag1G5pKX4jEViSYKi1R4gYHuXsnYeSok1d5",
  "key35": "5tAN8nNK2c62pcHBwtHVWTij5HHYQgtu3uV3gk3LFFfokKMohPyMY2wiHKxjQP3mo1mTCeeEDBW8r89M69Zn4jGP",
  "key36": "5eEnCkZRC1a6BBmnd5ofaxKChjzncubJNfSRcscEcvcsGN38NkBDPJd46Cnm23ZESfW9yQmL2nw1bHgQ2kjiTpwh",
  "key37": "SBnSNGFZLufSJ9kcQRM7n5J1E697nrQB9mQLbjN8TLNCe6Auk1kxtKP9ye5CyjiLiHnjbkUML2WZYWheiDywqp9"
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
