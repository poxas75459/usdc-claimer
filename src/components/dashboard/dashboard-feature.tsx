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
    "9QjH2voTL9Ys9AfnV6jdX2H3wrB4MAHgucAN3YhCwvUb2P1uhUQWZcHCbEgJj8yUJBBowK5FBoRp24MUbVhhAu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c7yFqbYmJ4v2kbAsunYCegNUQcsZwS6bhjV7NUWrmQskfdK9Kg1UPf3WscG8YzRemT2ttieXnT1G633N7pkPfZ8",
  "key1": "5fCmqwJerSRasJJd67zNJWX6vVJK2b3tWUoFCo9XDvFzwzuiF36JvMc974hrxjYsYmwXD2jtKiBRTEQ9sUA4ewJm",
  "key2": "63ixmikPon6YwmMVBB4vJU8ReH1fxsDhs1DHvcqSSffdRFjqLeMStTc72jv9t91sBHPvZtwdjytfnVBpnzMN8Czo",
  "key3": "38zy5yVpjeX1yiGZ9Xremu5m9xSopfzcZEn4och2kAMpEWnKSCKRKfF5GnTLSWioL6k5cv1dTfBBdBwRx2pP6Mh1",
  "key4": "4odW2VL3GijTjoXFBwKXeAGwYPADprLZ15JBtnH23XkWwvETfMNGkYiVJmLVNpHGc4vx1ethkuyRnYCXxrh2q5QZ",
  "key5": "4ZsoXRkEMnWuSBf69U6MQ2vMyKymrsfDejxK4jgRdfNrqLaUjncnrT3wwVTGX5A9sSTMStDUVjDEJK8cBomZG8J",
  "key6": "3sNV8yfGa8aqXrS1pXnSqNLPXWaijoE6WJAr4RGnuqxA9GgQHMuV9mSUjGhy6s3Nevu8jGh8GB4ypLMth1XKk7Pu",
  "key7": "e7aNUjJH11kmMbtaaykiB6F9K962LRaiogXXyHZNDt8bSQyuqsoRagmnzwLsDbrvWHGboSco138RLmFWnDuSK8e",
  "key8": "5z27iJPZJ15Z653mywFm1ytzWxbWEQqAMxRqKosgTaQopcRnhkCbjBCeomHtzyKXYDs7j43CcbjsSQne91bmHXbq",
  "key9": "3Hqh1M935AUxFGCDZWBnRK5QTdkvLh2bma3yCk1oz1qDS1bqwfoN1f27aeiGowVcXCY5za5t7F3srtxFJ3hKcNuo",
  "key10": "53VmYqnPaCjGpR4kMJ1BAChUacvVHn1frnj1wFcvmMqg6qirQt5spWgmgFJPirJz6BjvnsoJZEsEG9GWwxHkfAh4",
  "key11": "9qKbwVYbDxSY7wyuMermGpaMN42vW1YhnJgUMidSpBtwWfnnYmy81whD7NK5v8D71W16miu2m4xvZ6nF7v5r6vW",
  "key12": "5TzfafFSeu3H5kSLCiXuBCEvEiQHnpFsAXLmgyw2XYmrWE7aEs8qgzN8FG7jETSApssh4iJRXJzDVgPFgjNpm3yy",
  "key13": "4qTEzfoBCXTJTsXms1LA78DJW47oVaBVu5Yqs7z6vKisq9pBy1W9iMN1C9Xe8sjHWoR73ow941TKvWzcqF7uVj11",
  "key14": "5bm3TeM5KJjBbKQoFaNgmgZVENVem5g1MVCjhyx5X6YPXEn3H5FtZXok4ZVMGAEET8Uqoxb5qXnGSBitKkzGf7M3",
  "key15": "jdt94Z9pXurQcJYjEKAva4AVUVUrS4LnBNzxjy2b66CSBPvkrkqWcgvzAPaUYdQjGiEa8AuapRtPjPGk3iBWe2k",
  "key16": "2zfrRh5bymAY5wcTqyWNhNnwiPhhLut5bJwbpwAqZYHN2hBdbgCGBmZebKNMnfXYXHftVFbgyrr7ZycS8VcfsdCe",
  "key17": "4KtiEy5pAeRFtG85TJHgDeCGm7Dafet8P8KsC5KtwaD3r6UfNuaoKg3zo3wuSzuW3tinDKjKfWme38tGK2S8GUmn",
  "key18": "3sZxc56sWmxHytBZeaSijiPdtdv8kprQJWhysgSsEJdzR1JevTBRLzcvv52ZxfhtyZQQEiGggebXMf123UduLyZe",
  "key19": "33FHk5cFA7RZvprp2fCZ1i3KHNfmJZFBYwNhD72N26Yvjbvv3EN4vzNeu8PnHqbsME2TEMGwVNdkQUCU93PaQiPJ",
  "key20": "4JssfYDrV7DHEzuAmbkoZTvLtqVs2yNsqnbTHsLD4nnLJKRkedLN3koPswPRfewQaD5hGMXbrrEmU48P6Y8k4dja",
  "key21": "5j6ET5dDF5jYZnRz5GUCxGDQ1FsYsTJXSTy53FPaP3bxfxx7hsidVm3nnbTsWm5Zyudnay8CVn4cKi7MFD4eKizb",
  "key22": "4v5zpgayFBwhyN33fqoj8DqW5EXPneWNXAb2S2gE9mZgC5koD7HAmxY8eA31Wu7SHYFq5dh7FmhyTeG4a2oXdjGo",
  "key23": "KTpvdbNBARGXAJsDV8NFqpnW4NrTY47pK8jSLFFpH3zyFrkZi1Ac85qmep2uKovREcr9hPhJik5PSnxwwsU79RW",
  "key24": "AA5qR7ScUarjqL6eGG8kD3fJTBci3j9zodgL7Pa6S37XRcti5gqSfY7QGoAUrmasXfWGijHZdLnNWywifxqeaEH",
  "key25": "2kHs1DkfdeHKkdRWwio8Soy66xmiPszu7FgVgPeMn2LwCB1sPyfBTscycf1vhiEedP262pwxJTrFzQ2fREuxFzmi",
  "key26": "41FP5xbpfEsTfzRWpg4n5vLXHnkLKBdVAi8E4xvGSfVirhriukMgyzDVPyKZuE3eMp8jSTZMQcDbvLNq4ZiDyFbw",
  "key27": "5TkmcEpmro4LWsieTL2LeDSzFTYwJ6nuZrcgMhXn5HcVCQ5kzVovUu8B69BaNe3RGW7yjkpCFsmPhS7p3A8YBSAA",
  "key28": "63ehGtFSdJ9oRxhqYUvSAwRkjYBZnygGSReDJcm6GEsXXk2UKXkNdJjMNWskueNHJEvD4qNryE8mMsAMR9pMhX6z",
  "key29": "4KhzQg5yVjDneucT5566sy1wZ23yUvuJ5k9zxWz2W2qsNhoxAga3W1NLHWdmY5hJ51gySF9LY9GYHCwwEWXHxbKq",
  "key30": "5nQjichxNrtVfmNGdYCrrQ3zdQrjFsoem7VkxdpWKM8Fi5GwfX182ytsTV7kx92rgLXdQv5iir5ks248QWSyQk5h",
  "key31": "46sad6zDzgPMduKfj154bKUSEA3UZWc8sqTV9M5bX4qt8HvQe3uC6dPwpUwBv746q7etvaUzj9rcRYa8GtiLJ4wm",
  "key32": "5zhgSPkJWQt6KCdLFJQY8KsrfKdDMDDxbGiBkde1q8KugTMWNdWN4fZfGTWUC6kL7WDLeQhTVfqtRLkYEy3h7aP3",
  "key33": "65Yrzkvrfj7d1zP5nPfutJqQbY2wmaNT7qXiC2kPLHymiLJarftoixQR8V6PctT2e4wB4fRJ1hQe7Xy9QkyUk2bN",
  "key34": "5w7yJ1tN6BJYYKNjDQ3cciKHatLEAuf9SY8cjHqMNPEdwAXvLX8tKqMKjRCHUUx9TJorKXKD9XhytEUZ3gm4oW5A",
  "key35": "7LwTHm8X82bBzZEja5zNiZmr7ZQMjUhHdbpPr4At6ivoq5KsqqRm2mgGF5wQw8wpDuLjcV9PjwzrFEYPPYcn3kL",
  "key36": "2oTUT8TPWhUmM7QptW4XcaQZQanbW3g7mx3grZ5myzrVWBz4Dkjshfp8z8pwwi5cBaoMcxzUiYnKg3dG3HwMprJM",
  "key37": "5X9tBCF4ZJttkgHe2XdgH94fJYrcSCYbRhk34KZ9jpvNvPWBi1dXjHNrG178FxgrNCtnR46JNg4kGjRduvGukR37",
  "key38": "2DSStCuFH44MUhc8ndmEhEWVPY6iSsRG3JwzBD2nEqr86aimCGytdcrsYR1cp676vCGC8WpawRTvR1xYRqhvgUWD"
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
