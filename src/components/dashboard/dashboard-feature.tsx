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
    "39r7tNdFVVt9EmotUR46M32kayyaWcRpxSDbS8hWyETob9zyuJpdvD1tsaEXdraT4xbLUSVQ8X94m9dLYa93mGzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z6H6sEDyeCcukzMfzxY1WkJWu6qHgA5RFeirnGZYbgkCRqR3evyjSRD4EDhccG1xAHhQ1HjSzhUhFTvpLk2nZhM",
  "key1": "2gPNffmCwzjtfrB6aReoP7iZRzbe2B9RENvETEHaKfrbgAUm72mFHUX7WahDowoxRQsgvmb9sdBfTNATZqLEjmZ6",
  "key2": "5KGeFUQnhyyy8NrJsqNF1XnHvCyDmrixFLHQLgKyhjNMvHK4KBUTPMDb8gWv1jnBxp7A8dVxhvaNvEidMdCMY3RJ",
  "key3": "4Js8h3SpPtcrM2XyWGWYJSuJBW9KUVfBTh6r1vGRSTDDWc8diy47j8ERqC1sve9jfRnPn388B55h6FkiC3VnJUtr",
  "key4": "8xamGyaTGUY2cUWvcGXp8eDnnfRsh3k52AYpTXxu5DZHRG7M33YL4YUuzhckNrF4tRP1TUZW3GiC7b4Gj8B82Kk",
  "key5": "4NefQow7G239cjcp8X3qezyBM9bNE13QmxWY526rk8DGb4ZugcTh5pnnA24dwXmdG6TGrbhXtXCi3PBmwYkPhpKq",
  "key6": "16x9EMpka19tzkPtMxs4ZyBn6M7XNmBo9bhEojyJQENgsT8xMZFUSBmuFoaopPfxbGLyydm7EhbKwuMZ4UtTA1Q",
  "key7": "2LEP9LCabGbxK7QSpfrXLTbovxhoZKcCyzWs2CbutRrwDvha1XVCh7Q6DDoM5y6UgeM3WDqE9UGW6iXpd267BPwi",
  "key8": "2HPcCMtNPH8PsE17ZqifuTfqNRL7A2XpeEHixfYDt79Sr9H35uRRMob63Y6P21cCWUXFQTPk8umZQuDE1AAJjt9V",
  "key9": "4zMBB4uUc4z2ud8MPVmonBfT8QSzCK4ZgsvafSu7jCq2VkF1GbR9Yq2AjxMvDsPVGBQpYmpv4yaXbVFJifA3TGGm",
  "key10": "6zVj9Fm9koAjUahmkZuk2QjCQpJA4KCFZ11CfTsBNXtn1P546f3LtgUN12jEZZ3AtxoS54ZnfNXKa5gdJ1zXUJ8",
  "key11": "9mKTigypv8kdsAsNewEQkpS4bnQHfCaXPn2sMRJebe6f8GuMg9u6e6LgEW6TapRHkJ53UzoBQxS1Pbni7AQxxhA",
  "key12": "2ioPrMdQEMsrBKvjmjRbt9PxdRFDMoPDWNpJmjVyrSL4ezw9EKMdo2FDbnLrEhS4xByKiCaAS52XntjH1d2kozXD",
  "key13": "oG4H4z8QvFcfcqCKHBJhAdBKjj9UxcJdPeAreX7CaUVj274oRaY9veTFTPhWhWyojMwKnKb1Sev8Xn1vXat9gMZ",
  "key14": "2nnK9nhQ8t4TetNBRbvscyXGYewjAFXnbUc6tYfwTH2QHGT8YhvCQyZjuyoGwBrwyMGxERKk1Gqy3yhFokjHJrjz",
  "key15": "5nViHaJK9TGXz866qgwtSCaB3UweNVcY4QubKrvEknG98trLrQc9CbZDgoWJCFqMPypFkYTHX8xiLQfHSKDZUBqM",
  "key16": "38GfLuzYeBPRoKEKcafDXMT5XLfJb8fxkcSEp1kxUqzq7V55SHiW1TPAoKqE9VW7kzw99QVuQYNCwnmsd6pRs8yb",
  "key17": "2exk9ugoZVjP23aWAQET5hQZn7JeFdUHeytuFwB53TtnCgmfkoEZdPsfUPxw36fEy74Ngyb7ZSi2bHC4zNqKUtN9",
  "key18": "4iiuBJqXJCEthdzqeNK7EY7ptuevkyqFnaebdwE2YvP5E9RZxCRVUs4dwofqidoqngVJGka1zxDvDRdS1MZqrwCy",
  "key19": "321mpHuMf4R4eTHjvCQVb4V7D7z3ZpZJ7u29KjBTVfMMGSihtrKnBnmwy9GT4fesFG1fEhaM2zJWUbvoZBKrn5iu",
  "key20": "4g9JTzrr1qwBPV3vvkytY3rNC5wnUYukf9Nngq7XRVSQqHYf64m9EMrqAEmsWph3CvffpFzpDgNrBwhqW6ntFmXW",
  "key21": "VMiQdErm2Nozhs2wdCozDb2reS5QYjcKCWk3aC3bx5ZfbfZqXtNHVPwyUgnqgZRWfKNd1E8u152thqJbV7GTWQi",
  "key22": "VL7QZdPxmsfpkyHZn2o67X2QCMELiooda5csrP5bovcAUTCN1r4SamNkeJSFQkqjFuhj48JP7tihZn2Q9KGA5AE",
  "key23": "5cBW196atd3rYTK1uK4mx6vMSMDbpVmaytfR56v5zymExpffy8mq82Gr9NqeTPFpcLyM8Qym61Fwg7YBsbuo3qrn",
  "key24": "3xp4DZ8bvu4qhEfpqCpBqkUSJVUiVBdW4pUmzaeFZwA9ixoWYSXrkYdDtL7NA47ZHSnKKDfNLMVgvBHV3npMFp7S",
  "key25": "4gzDcPaK3BCPF8BioDp7XUc81uQ2hZTGSsRGzqJaU976LJ5dYYkr8iPrCgB6r8XkfQHquesd3aydG8V8C8EJ5if2",
  "key26": "5rY57zTzeUcqajPNZLWEK7X5nLF5MnS3TDtVEws6Tj3eA7KMqbxwxVYXDLC7SRUJcXwKrRgbaVBB29VXAa9ev5yR",
  "key27": "5QccqfWhTN9YDmHidAS9LPvAXgASDrQ2qcjzvorxmRLLqT8eUypzTcPMaGphHxzq6gNB85myqo4SKyr6h6RkXGfo",
  "key28": "4wdKyJHxmddeFkC3p7C7WdsdqCvdRD1hsXG1nKMWfmRG2ELHEyv6UQZFosvfq9XNScUN4XDL4A57qCMjX86PZdRf",
  "key29": "3hzi1GczzJC3sYEcfdL4F2dfxWreqza756vzAeord1w3ErzYwnniWJ6WXnvnN3rb1Wn7CWAUNw1X6FVMkLpVKitk",
  "key30": "jw9n1DxKMoT7HFkWqLENPXNKffoF6s9WabjexDF2Aipwv9obMaLUaxrvajjjzsiiiVzafz97rN8ja1iiYRjyTUX",
  "key31": "5f8LMezVwDgFQGY3sBhThNT8XU2Rfu42DRsxN3okBx5UjdXsi3vkkfW6wTQWnHMbEMhcfN9L7xnS9RNiLc8LhFWL",
  "key32": "kxHCyAz4BYvTUyNJxQ34ouNMnaao35Gcv9ACXEGx1A83CVuSMUfojokA4rJ91LQzUfdPL1hsmw4rqcuCZcan4T1",
  "key33": "rczHtYajjRjyVAxRSr9fVJgfneVcAsr2o3T633JSER2ok5bRQSNWsfkFwTvMMBFMREWhhD7jFKthWSAHfX1RvLj"
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
