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
    "ZupCPmZk5B49kMK8Ltn5awceuejf5k9xDtd4wz9AvesecqgDFrey2QkW7uQ4Do2T3PRdHvnQFidtPTG6seF2Y2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52mv1XkNttLcudHopcemiFjrBRMb7shL6BnpMDHjhNGX1WVJGNCDa5AVSpkWnn7kYJD7M4kKjCpU3zcYF9wFcY4t",
  "key1": "4rMKLnk4jHuQan9srczUimo88HKDMi5nruRmQJbNKPiGjsneVjD4F3UVU3tgsC59XnM7wf9E63SpwmWB3GNVGibv",
  "key2": "CQENE6dhCyHmbqdtDd5M5JJ28CfFjELBZEV8uGtbuHubg5UoHZ4gqci4yNvB6y22d4fuE6bdEHGMHnM8mnVGK55",
  "key3": "5u117wCFzzV7KMgFND486UABX3u8xc88kCUs21whMniBNKfn8hre5TVqpdJUZf4yWMVZSCSU8D5crCREZ5sXvrqH",
  "key4": "VsV71gaB5f6Zi5z5wRNzRnMMRf5fABSXSeo8Ufd7mMfAgygdYGA3r6L1V4Qv64vKc3W4YaxyEQVTveNsyU3NukL",
  "key5": "avDNYDUhD5kA1bBitiuk55bSvKSTJS4KGq29c7vZ7ysJMiQEKkePEqy7GikxdoSyBHyCarRUdu5z7hh4UyAABn9",
  "key6": "Kcp8KhQnADdxxoiTZ8FhDbNZqnjCbEU98Dntfg3PwS42B514UAZeTRvK7aRMTgZYU7MYsi4TfvirkP9VnnU4vn6",
  "key7": "5k56o7FkYdD3FJSD6UdGeuNpq37kZfjyVbzQMp1gbDBs65drppxh67fAp4f3q9PQomqpqSxZLTE5w2Wec8aQAAqo",
  "key8": "4x3KW9raMWgDprUSXnUHY4gV8WwQFcD5e5hrwvEeHkpjB8Way5yFhgf6bP3QYzoTNZeaqKTdBhg8Qk7Z47ovhCtR",
  "key9": "39kHXJwnWGrVDwvs2RERcV23eeseJgZqTqmvGH61ncRCLycCxvmPGzxDxPncauYNmxtfjkFR3fV4aWunqcmcy28R",
  "key10": "28kijjzw7rpewPMcSyZGhjK6zAYixedZYqfJSYu1AaoWy6PF86PW5NvS9hx2rvZjb7277jQATR1AAB2r3xYqzWcP",
  "key11": "hynEyVRqvLXQevAYCXnAH5myBHBi7MxW77dFqiTJALrNBKexE4eqMMnHu6wGhiGfMnwPYyBPFQehhwNvG4NxDuZ",
  "key12": "2XZnqAraQsW1dvZRdmLQ5ftRTkNkz32BgYmMVdZ5PBF4YLpfgUyNUTopMLGiwGZMD6xy7Stp4rBrYSVXiymrMxuR",
  "key13": "ymkwdy1A4JL6zD1rV3hvd8W1vKdrLn3cgfQeJHHJfWHNVTmct45oLwhfkTx8EJBs6U3G681QHp8HcaP9EgQZDmo",
  "key14": "65bTLGfimGqZ5bGVG2dPZy2ULT2683yEtDfHXJr2xo2hXCUZ41ufe5wms6L2bZHpTQqVf25FcMm7oncEYLGetbWG",
  "key15": "42Lw45XWuKruecTSWscVF9WvU2RHtArww4jkYfKahyHenNSjagetU9RKujmQDbwnfDfgLLUsxxAVdkD16N9yryXx",
  "key16": "2xKDAohx2zTFd7brPnPyVwG6qLy8R7FmgTXxjfC2Zz9bMxE2AavcBeBgp4bWBwVvLiDeQ7xTgW2fTCEW1qucaDYL",
  "key17": "3Wnfc6T5VLXYL2gUrpTgQaT7dG19e4qLRvVLrWXESskmsHy4BazuYJUf3FZXyUwr2Xyjx6YzciQugoDuhR3fuPjB",
  "key18": "5wYy1RLBG1WfEcEokYM945SvJ2RyDvAVUjoyaaWaL9FZmG9Stvio2vuJki43vP94jbieaCVSkQFYa8H697W3iEBX",
  "key19": "2n3R3MPLC6FpSu4ZYpYdr59dVX1BMHww3ZVCiJoDd9nDd42aRPSBgqmbePf6mPmFKfCMHRCT3SEQ1fiRrYrG1MVC",
  "key20": "2NkCkucQe5oX2jskwB1fi86RxTZBSELbJJcGUntXDVxPq7AJ5mfsuqx9eYvtxw4DavPrRpFxUH2bgaoisYhV7Nkr",
  "key21": "3x54QpPpPZTMrVHHVsyBAJKkrQSNNLCEjAxYEeYxSDaduM24wyShT9vKuoGx2RFYjgdUQxxCVAH57KzCy4C3vjVA",
  "key22": "4Wb8gn7xYhqz2FLw9xqCkihKBts12MARCXJNxKxLPgzx74xQE5B8HH4SCikittHhJXAQqJ15BBtJ2Rj8FmFneJJB",
  "key23": "TuMp46D6wqeBHCvjP8aTQDLuYkDRAeSJBN16HGjGRW3K6ABLu46F1kEVKUrrDkquaPgVSqwigvcqiTrRbBoJ7kM",
  "key24": "5ceo4i46JbV8MinDukbNeACh5UAX6198sNWEHUbTiJdhM9uNhjuGkGfRB8eQuuSdpGwkqNDjvm54F1VPXtpK4HzF",
  "key25": "5XR3ZcAMyeqBrimdcnoG74oyFPVX2hDGZh5XUxtyVmB9oHmmwcEnPXFA46r4U6BahU2qTJozGEjkwu6PxpTeaCVy",
  "key26": "3p6eoPxrijnjHBZdf4bBjG1uxW3q9QhbJx8yEHzjuZZUaDqtTruLVbpgFkctuLgtG3tXxPF1rLmPsKnVVuBwpo3t",
  "key27": "2mAwpVifQvzkRHcAqVfuMhsTMQmoqQjLM1n9izeHGV9Auis4mpWew1giHKqUwNWbLJ1jRMKjFWsVHhqtMo4cBGxM",
  "key28": "3MiemyKCFc2MkoeXtbEwcJjYSeRVGNPgD99mXHo2UJh6n4s8kD8p9T6qhHVjmuGn14Tnfr6SACjbKLzet9DTtrPJ",
  "key29": "2tC5pEwhNKg2DMm1zNimtyB98YA9ZYAewwDDxjwKTcRUwoHQcUNQKAY644JBFU8AP9wVjfhRK3fXkaBVSTXa5mwW",
  "key30": "2joSMFrGuEeRkKj6bM2ivqiBVLf5cx39g8B514RiibFb9N44uejNWD7KTMgwPXnXthwMj3ddpEi6EJNmbDtypNaN"
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
