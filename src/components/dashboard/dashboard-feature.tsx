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
    "5zd6jwnP6Vtru5do92Vgz7nb9J5UCgaijnBYDG1ijDvozEgQKqWM4S72RjZ9WBqkPNihcxnGCtGiHmyqAmH4Thzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PfJZf2vvdNhNUVyDPoVcnA1bt2hdXxdEUV9Sxm4WADuLw7xDtVZoqEbjhugfHaf5tFJUTZ2kfR6jVraNNEaNBxs",
  "key1": "5NqSFqaDWHFdFjqa6KjhXmhsovs3FEAg7MAfHUvCFwfTxEA8Awn1UvpocMWPv4sFSS1F4vmqwmLSK4B5EMD2FwWe",
  "key2": "4WmJMrh5mq3ZrrEeTpEJ6ynZYYe5uUZa4Vm5YsroyZoaFzmArd8eyvgwc8BPtdDkcJyMqTPX6ugbUp4h7wSt99rD",
  "key3": "vMFA7AL4AD5pDs7SSiogus6cKQ44Ut595S8PLvZkgNHQSgomCEaBbRmAw6uVqUFCKNq3VXeRFdaZuoEuLiEWdYu",
  "key4": "4iyaGsiAFVRW4i4EBoFicnhBonUKXLL8yAa76mV9VYXAaMie8oKRuv6TqnjRhfeQoaYhrDnKEKNzzu3y7NBrMk1s",
  "key5": "YjujYDh76k3CJSGFBWsyyDA1jD9ZbxyzHv44oCvynf2NRMckwtX5iUMwV9hK9syvFjZGVNLFdMdspafW2v2iCtY",
  "key6": "4oZz86yYEnQQRkeUm8MK19EHFEinPxqXvcyQJXw6U9BXkobAMKaVK76GzEMVuKf5FR6DT5QpVPCxh7iAwgKHYZgg",
  "key7": "EsPYymZnFZvsWSSXKaA3roDsmjBBB5RGHvTqyXjuqsZN3PkZiKo7yhteu4JhdzuRWc6RzYZTTDSVPLMPRUNq5fs",
  "key8": "3tyAUb4E17EPyg1fD5o6hcHhKP58BTj4mraLm1f22yZFLmXkMP5bnp8tPyuQYQQKZ1LLLPK5uA5vxfMpXGdroMB8",
  "key9": "3dEF5sJnKFDeEwEqxGgcyuwHiCJRoA5Nj4f1yd3bWzUdvTvQ6S9vg3AkDXnVuWFcRtijTxSuEZ4fPZquDcw7qKnK",
  "key10": "4widmkasyvRk7Jj9rCRnbgiLzfZ5gV36Tqexoebo6XepkDqSN3D4H5WynYjFDqjfGnxuordBm3pHKi6PSRsMzy3H",
  "key11": "uThK1LKDoqyHV1fg7m59ZqYfKMUfX1Xm35EBCUPNNUJ4JqLmFePGxrfdXRh7wm5GLEdsus1J5aRfJCAtMb1M8um",
  "key12": "51aGfZa2bit13pZF7CNgaBe8YyXssXGNbF1TPpfTY1GujSo3PQ2WTThZ6Hw55acte7kWconjRWVeQaiLcv8ERoky",
  "key13": "3jdF4bSSbij6xzR1b9GyhGnZPpT4wFFm7XRvibqPPxZ1KypXZe12LJW7NXKXFYUmrJWh78eiW4sqhuRXYsbsDWcb",
  "key14": "5imjZeeG6DByiXgrEg8QkZRUi3rnmmoesd4sB43YfPavmtg9eM3X8iPkZsTjdLH9C9mfuSxRrmUFaTbxboaWmALc",
  "key15": "3eiZEwMMPwkeT3BpPs6JRU71Br2AS6vVAJjQEp1puVWWoWrUg18P5kikoeZg9T5YbhTdUBhyGoo5QWSxUdQih4nP",
  "key16": "2ZRFsgDMtzhjT7HsQ3n6xFH3tCUPH5hbaxdStZ4LMvYrcJUSb42f9uPgus6UVKCf2PKTSsS7gjxWzSeCmetEtUKN",
  "key17": "3hcMQnR1YimTuuwdeZV6xywgYru2VKb26YCHWknEDgDp61vugmqCBYWrHVgXn9dnEdCt9iHE7FanZE3tA9Yvtb7G",
  "key18": "5qYtxdYTgbqVefwSyFBW7Az71WxyqAs5MLU2gACSQDeQZg8qgu5NaQP796gFtpJiyK46CEUpTjNAu4PHKL5dNVfz",
  "key19": "3ePsUDTrNnvS98kFUnCMUBVWt34CzuR28Z9FwfVVUvS9Z9pL3KyNvMK4hR62cDXBa4UMzfDHTDrhSSEuGFES2WSL",
  "key20": "z7K8FPytqAtwgv5TvxTYU7Hq3sBgDeNqnpAQ4ZGVUwQ9tJHM8GdyaaQvccCWWyajM31bam4gycDsCZ5GPHaEyem",
  "key21": "5CCedLUxdRDi1y6sbsfNJxr2dNhQYt1LVfQ8H7N3qBQypwTPPp21fpQesWuxWW5kR4sj2WnqGgKF35toWURXd9LD",
  "key22": "5nmoi23vA3e6zuHG1p3NSTN2jTEAHUFCWEPwSeLmZyFcvSSQjexQnMpRbTvUn6J73tjxjSiy9vyT3AfS3sB2oas4",
  "key23": "2Q7Ydv9pYHPtQqdC9ZW9pYueWY9hdgUxzAoGqeamVXz1n4KNdWfaQXB7vxoLHm9RDBWx1Utwkn4XE7Ag78MPFp17",
  "key24": "4DXq9vACWU9uVoiaE8P4CjMpa9wAbw2PiF3RV6iBTiHFrxw1ZBtr36gZ6Xy8Yh7TpY2EcBsYFUwQsFW4UrQhS4V7",
  "key25": "334Uh4TudVJ6Z9SaiaV8Cs5EefsK79KVQNrCGHDfcPMyDhQaYFCjSZmcc3GoA5PTh3tfhgbNbTCr8x9C2WP9SMgF",
  "key26": "4yD7uU3ktaHrXNAjBiXcRgtyxbVgqgFMww7ASC9VGiJDm2e3LCTYPi8HU5mbo6wGJ1GkeMdLGFVcBxAMTHpu96Te",
  "key27": "5dBYCnZzCTyfk23rSC4B17eZ214b6Tbj9BmrsPXakwUPUbKmGZQfip54VRQGiXGZnn4TJWKzKoktRXu2BvK1Gomq",
  "key28": "hXNogzsGudThLYdBKRk9DooysoDU9oB2qz7A99egMzNGzYtyGpG22RaE9UYHpeeTwzkjWCqKNPT6U2LYBy3G9q6"
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
