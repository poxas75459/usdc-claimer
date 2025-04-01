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
    "SLBkXQp352ywLF6XcXYUzvzYWiAVGoQxGSdHDUpMEVXKm2CBoJPXQeVUe8TNaxW1dHFggVTTBroqrtwNCUYfjM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZS4JJ8NkDwkHMZ8QwDebfYNuPCAoNGd8tufy7SnJH8aoGikThrGZJdZDQmCmAt6RcmNbZhZQTcM4dgpQjVz6taC",
  "key1": "2a9qRe1Z8sA2LoEUhRmTJcXD7UTvUapQiovXPHfiVYXx32bhT8NVQdAWm8mKottc9NNe7WAuCnmKAuzaH4XZV6wf",
  "key2": "5kqLCP6rBAUbYvFtRDUCVA7jJ8sJMUnh6LbmS6Vwqnw9bXJrWjjqgDcLZqmfvkF3mqyWeT9CPMcphg6EK5ZFdJFx",
  "key3": "2HPaob611HyombhcFkjkjxH1XSSMYRei63GKMpGq4ehJVNn7G4YZLyA6NgtCHRsEeLG3otV1ivSPEGyZk2t3nAVg",
  "key4": "5v7RHKoyAkqmkuA7Zha9WbPZd7AZeJ6pvCzzu4Q6wLvBb4Y3xvvdumWWhaTWZKhBQxz8q58xT3tjj4Q6A9nSfTp2",
  "key5": "crJKuNNemK6iTL4T8uEn9zx7gYZsDAS6F9T66PKg4G3SCyoZFUbqnZvXdjzNANqXRFht1sCDLuhgfNqAB7tTYyx",
  "key6": "3Lg3MMm7HjcPRavicoihErkUYhS3zH3w5xwphVKwAifQyn2sMsu6HBTcY6dASuYfxhzDP4sBqaDon4rk1MX2rDcx",
  "key7": "2mrxrLuDb7pVSiW5Rva6pkhBUF9SyTbb3A4qqSVckpYvUwe7967oRZFiNu6cqtXP9xhzsRE6baoayqvD9jJRhrCP",
  "key8": "nx8kdwZMpJdLdDJ97tcnM72ceYTBWnDVwdYMUsBeL6TT85sY9hzMJnUU5bYcbwNM48zYaMo85m5Dktrh4NKHSrc",
  "key9": "3oiPRvSRrzrCtSzuEB22txzqLQ4UJYi6AGTAf9VsvcAf6ngrMgMfbouTUDNSac9P5iYT2ABWHMfD4x6Upu7KXRAQ",
  "key10": "2NxFRBF1fmjDo9E6jdJgXWiQfdRb5EG1nT4D86xePWk1mZDf7p4DxGAQccyu6sSR2x8kAG1eVA21A9s8iNuESpRA",
  "key11": "2fboaph4ZijErkqrQedFFkkmvGD8iAKJcG4PR1zd53hPPAMxgnDhpfndumkFmRJoZFkBMd7qUZvrZ7dUUVTzJMCe",
  "key12": "3cSGt2A3BaKYhPa2bPw1GnJZSangx9V9E1XGmJswrYHg9sEjvo9HouJHjTAVqmvFwvpoLC7D3Vfq6sLW7qYHqtgN",
  "key13": "3araqQuNyjTqSHFmiber98ZFnphttx8Q2XDwJFWL489ws1toiq5AMve8ZCawkPX7kTfLD6mskaiHb6tjpdaHY2oF",
  "key14": "2ykUzKTzS4iyFfVQY9wLyn3MnSQiNuxpZaTAfzWSLPyTDoMUsrH3JmfSvgFwUN2HebCPUvRRwtrJJRv7qngij9xm",
  "key15": "52B9R4Rudu3c4jEcEKp3FhdjrXfHjiVBRaDjotnogoEZskpxC9QbPUMBEGXxRycomKpVARnB1KjdtBpPM28pKkKE",
  "key16": "5VNTdQhiYBru4XvJWv6ZLWpBsPj15TMKHeCdmVK9qTLBv6rRy7H7Tt47fUZawjAkBLvagdBpjwyenfAcTaz9mLVT",
  "key17": "3F8YHAHahp6a3Lp1zwja89NQa8e9q4B9DifFMT5tAtCtQJ3pGLEPKAeVefA3D6MrDPyQirPNc1qVjB2j3ruH4i5t",
  "key18": "4dN3YDnjBpiAYXRQPPtFTkYZxakoRvZ8SwXd7BT3ntLtRieVYiYWTftZtQjVcMDhFaXzPZHDg7TmMspeaomW1bZA",
  "key19": "3cVBkBvvhA8TLjPk82ER5h5zJDLoCN8NhXZ1AcVd3fKLGN2Anmt3BAHuonUsJaFy7t8EdYM72Cpmh5GfhDmg1WF1",
  "key20": "5jNwmXwPvHcDGkQuCjPUnDBPXxbcfaRGd38FcPPBuviRU48mUHkGXuFrx6uKTVMvgFNGuuhucQUFtcPsHNe3zy7N",
  "key21": "xKi7i1i2Ms4PmKHdTQf4df7VobdiU6CzdzWRmbv9Nx89WAXV8SvkASQFLyGxryzgsirBWNPk6aJmBkTuYzb7Y1r",
  "key22": "UW4dB4UFUGTs8sraCq2qWgzf2Z3hJLYAftM9xD5wFggquDdmt86ye3wxu4Yp7gGe3wUSLZQS3HkgbbbFxjiwWjs",
  "key23": "3YLxquu24cqY8F4Rdqi8x3bhfdASUiirYVDn6eXwNeRcqNWrq6zeJCYwXHpVnFimgbbauELqQcN5qLk6N8xBRHVy",
  "key24": "2evLCQRwNtMg8beQids1XsAuwESMMUzXw4S9vsuREFVPRHyryrjERJPSiNoL1wRcjUrKwhweBa347pTAwkbhDGeB",
  "key25": "48mcmZC5yk2XZVid4rLZ8hxfvdeLQZKf3yHE3ZvtMhWJyhNy9Pd3sbiWvgziHZ8aFydmSyW6mtRUAWLowQ25WXde",
  "key26": "rz621jHUuWuyjnghJP7xdsMjPpCzN8i8FXajcGyMKQqG9LyxHGjbZMW68g9mFe4m9fBwEMMZx7Em6kXBuQu5Jgi",
  "key27": "3dgwbTsnC19MUSsGFe4BqmuCG4CYpAfJPSXmjTdNPuH2tj9EvQkEi2KyZDWUqaujW6SZBKHzU3UEXDoVJJmLiUvw",
  "key28": "3iC62GPXnDKDgH6sQtnU49bmAMsCFWNWCUFr1oXUbKwKWqTK7WMGafU5PErGvwKyhdBSmnWggXmHdRax7qvsYWhx"
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
