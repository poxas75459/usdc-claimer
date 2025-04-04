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
    "5xQ4YKW9MBw68qMU7MeeX7ENvFnqiFHVn6k3gq9DJr8yPKWvRY9meMbAhKWdwzFSggdzYyJ4B89q54DPEy3eJrvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZRjCb5rFS5XEx3kqbR988L5nEaSNQpEg8KXAdwyg3mUj7S3F4gfT1L6xvyVocyisM54uZoGeuyFsZQ5J4BubN4A",
  "key1": "2ANiFDCtmdU7TFC6gxYeYjoFJ3av4an5Y1ZFduewWnA1h2W7LEGH9Z8oce6zCY8KaDAg9HciMx8jVS1hmxykimCg",
  "key2": "2YrEBK1NQvrd6N4WB8tAMdbnnZTtD2sZmcuJ7LRnw5JrHmZ6SEqSW73UKuz55q4AMkPDHQBndmPBRvNs8bG1XVvC",
  "key3": "HPACCPv3Uo5HApD99rmX3uUqsYe6N47fb8guY6UCYbgaBPE5Pv6i6StXfjHYBtYXRqRXjF5CqxP7GM86gp4rp8V",
  "key4": "2KTwhg9C9ytMbzLu3Tqv9jSg1ANtdbPbKLenhFCnhNRqtswbMe2otoqM6qMVdS1Tydd78qxrvFC76PYez4sm7qX2",
  "key5": "5xz11GaQ4Q9Ge8PuoY5yUXwbMp3HjAifbjrGTjJxxfYwBjSNtgFDudLKSYGyScRpLe8TZEeTCkB2VWasuhfWucQv",
  "key6": "5gK2kZSNxPXpMccPPtjv7vdLbroPhpGtDdYxeTpa1X1wjfooWqr3amkT7uyLTzfJn3N1JYdhDr9E87epewD5ixTW",
  "key7": "3s7KFE5kmRwe3pekU6upPmCgagt7BEXTwWQKTZ3evbePsGGqqXfWpNnrXqniP5r4Y9zdFuoWFHDcUT44gP7Tg9x6",
  "key8": "5WbD4b5qbnh83xM8hkU8nQAL1dJQzzvcxw6ASiPxUzEnZSWgYGeEXtUnZPxua5x4T4uJLM6XQbEqMzfyAvDCXAUh",
  "key9": "41vcjJSgymgSo4ZLGp4Vq8kMpLCpSe2FsUFFu1xWBEZfkG2qo2BBjEDgXVgW3Ew2BouHzE4XLXgiHXN9PK7EKzzW",
  "key10": "5HBYH4KuyVR8ysNi7QNCE44GbmBw6Hi16HKb464Nq36XiMtTr7muhToaypmjKFVw1AhjoSKcNz4TuTeDYKaVsoR2",
  "key11": "5Z628m1xpzqpvixwbWKiTqfpTxfxXkkoE2xjncjE8pMzrCYhb7b4ugxgAdynySJHvS9mVNtr6xbuqaiBj49zd6p7",
  "key12": "2qstnmm5Gt1ZG7pvFwfiv47X4mK996wQC3oERca1T2oJtJyvRtDJaVh2Ks57pQCfngte9EFnVMseifRkWvwurAh9",
  "key13": "4JhPF9m1cEc1tCgERHHnibQb41nGWojWskRcyDEE45SdCVJ2X2D1Dnyw3MgEYc6GFaA7PhUeNUz2ns5jrQ3q6p8B",
  "key14": "4GwwAvsEqutHfTVas3a2A8joaHSTvGjfGfLM2BTnGSqyzY9Shcsxjjef7D3XiH3To1MRWnSAa19ayNc6rUeQ8c1Q",
  "key15": "5ySUoiytCautgyzvBpPvLBUajetmwa3uog5rd53vk1rXVrHXhczR6cEs5FM42EwTL5pkW19wATB5Sx3YB6Rg62KF",
  "key16": "35gdC8iRY33fAboh6iRV1oe15iDTeRk8vAnX9ck37p8ky8LWQutVncuTuX7hwUMVbkhnPpw5dhh9GKpHHZc7M5Ei",
  "key17": "FNGGqR8bUP1pbkqA4PcV3Na6Y778xeci8AE4UrXTa1FpzA4haokG4orzjr11wTWtZSxaknN2XViq4Wsp7iCAgUm",
  "key18": "4zwy7wjGjLXLgBQnMzznW5eM5GzoyZwJAiyhVFmoxp3Q3uoZnvo3s9JcmE3t7kBVvgrXvTLN4sRWKRnpt9K4EZRz",
  "key19": "3ji85ukBZcs6kAus1uG7u4zqoMqKQWFuLbhH9YM4eBEP4Gaqpx5v4feKUBEBCwhFxPtohz2J8WBFgxEXqpL3eE2N",
  "key20": "26MHaxHNZVGZo9pmD5sRrasiTMGC7MXxAadjockAXbZ9RdFxUSSibhhTU6bLa6s5sxSst63enLE3o3KrMyDWu9wL",
  "key21": "3RpKYAYwLWsmiK29xZcVFLnivkmQGQKn9KGup7tyTJqbquHFh2T4qvKyapLf9ioWNfUL3Ju1NrjwiYv3aMmJ4ZP8",
  "key22": "2AnC8LRKEVj5UhY5ZPfz4PGC3RLnPpZ6543quSsqKx5AJG3G1HGL5qQB3qYcK2CHg1f1z2ZL7KpFWeeWbi5EUhhY",
  "key23": "2bEWBhvKCi7WnqEUpvhQcni5HUJtWpx7v8Vnvnwa2pD78Foa78MvmTP4cSssYrvScTPTrPdBDMDchVuEjEJRm4MS",
  "key24": "5kH9umuLXhbmGLkLfKfco1g6793ZqQvdKErPqFNtWSf7SszpLsncJTj9NFsZ8PE12kuf9xiQJY1YGuzTfedYGoUy",
  "key25": "eKN5BTXZQBhPf1ttuRMnBSCEH6uYiGzUB78zyMsZYNrWM9YXhMYLzcYd34DSAos51CyQhsfxprEne3jEdaNksAA",
  "key26": "61qJsQnLYdxy1XTg7ceRarbkjfA5VznZA7abLw24xhBNaPzzViChxaGfnvnrQ6LAaQunB2tdthm1qh3bR13wbMND",
  "key27": "sHsnKLC3gUGmPqY1jUgV3TsJA259MJDFf31G89EQYU8ynuHDRV9s12NxcFH5yD8kQSFPGpUhUKynyX3T3YouvsY",
  "key28": "63kDdpuebYdAWoYEDxGeexdEqfpeXubQiY1pFYvF5vYY5eqDpTToLahUiERLP5RdwB3m2WcuMrvDVMwQP1odELeq"
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
