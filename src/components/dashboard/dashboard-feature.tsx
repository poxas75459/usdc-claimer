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
    "3w8ScNNoqCWJ5FwkjoAq4fjZLxVTtz8p2H1SpsYe3WPNMYPwbbYR2NjviRu8kGG5rFyZwBjHP6BtcxSGc871C6S6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZwfeDU2MAFVzTuVHEm1u2UrxA4sN7xqsAYhCuf25R3QUrEvBr2475TAcJqzE1tzQdaRXsNf1aQWZ6JDzuww7R2P",
  "key1": "3pdDhKjcUowUhBbrSa4SxLepLg9PrsXmR923pmGLRdqswD9EQBc6FL23Uknnq6yCz4wwtf63JuydifCbMNESNzYo",
  "key2": "23FfexdvJ76FbcJU8K9EyioaorUTswqKAXesfQ9W8Tt4FY7yQo5mGkSyk2jxXPwGR6y5BRYfLXfKqR7KMfL2UjBt",
  "key3": "36GHpRTohjipvqiHe1eonkaG2PFuTrft5nqSq6fUD6yejgyoofedGFYrtnryE3XmenYeQzf6Pt6ED2fBwEK73XY2",
  "key4": "3st28tiqoMqVZZEMFURVS9EikX8Ewmnx4eBauHyw29HbvvVVpYqknvBiqTemBL34ygYJxrVuc6q9pFzFeUALmLCC",
  "key5": "2XBk9xq8PvemiPPcdZ7MB52nnfY73e2pqo9J3uE713jTGEt7hnib3isHQ1qAge7r2kWYxc9C3RC4JN1PnjzoAqJ6",
  "key6": "43g5NwjbQPYdUC8eDJGhMLgTnCCk14YDZuBLt4Pukx5iKue5G2vNW2UQDu5Hi72AaHsgfb8vgthD7tVVP2At2hKq",
  "key7": "5Qc7SYmQdtKXDF3qxynkrTPqCjiqUZ3sYnYEvyXSxe5JhCkmBKTibH4f8Bhi6K6GeFKXgWNQshYDaZwDA9tzahCS",
  "key8": "3kSWm9Y3eYGm7evZ17dCCnEZf6LkHoeRYhSqkcidVeZRTohnN4NG2enYSWfsztV9sLCRjiQiiyTNfUp2g1zARsrH",
  "key9": "57RX4ELvG7uog9238EhY97t76mauRFhRFL2rbGn8CAx2Ej9e8u9pnpkcgi8fyHG8Qi2Vjm2f6XRjiP1YRoPDwBPr",
  "key10": "2e86EK6tFy1C47c9wdFMAkxyYyYHogf2MAryfBNF1LiH5frhdcecSGB9LnDeitMrrjQytYmFFV5agL6yfr3c9dK8",
  "key11": "4pE4A7afgLd8VfASQoTLJBdwW4YA15P26cap3Tf6ZArqe9TgzBnaAQbpi4eJdw2XZkMqZBdkAkzsKCw2rMy5s8jA",
  "key12": "5tdMUPawvpj5eU14M4NRUjnU4kfNF3MuEdFoaSXW1XSKFji9nR4dkdrwz3q3D4wP75WTMGLvLpLHnwo9wvxvTw1K",
  "key13": "2VNgTeCfujCKJCAqiBvtd87iC5jrsE3YLvrbFMRbwPF4bdpas6rrfWyN9A79sADjMBxGy2aNQt5A1Q8gf7pfFCMK",
  "key14": "2fQLjxQz4T7i819NTtP5M9Zae8TpGN91kn4yrhktnPwsPBbEZuQaU7MjDbp6c33cLAoPFbvmuHvhSzXg4psnwPSq",
  "key15": "4RgJ2ybKME8wx97at2xFuj6ynygWhkCj8dTAwnrzGb6xXy6av3d4qk5YEp9iHosubtBLr1eJoQGSujDNmjqehUGy",
  "key16": "5r1KWzWnVZUZxs5TKFE7LZybnQ1o5gF3AtcqLEJJUmB18W9UWMATgfbgtfX9MzDmYMBaAGQ5buNjTKYJjhLHTdPR",
  "key17": "ebVASfymFrABJZ1ZBpZwmguGX9rKESadS2vruskprMPhXEwZQYeTLuwsLyVzt6g59k8CXuXySSciumLQwHpeanN",
  "key18": "4BryzaGLR5Y4f7mJNjtqBMhPmJgeWqa8ZpmpbkVnzLMUv5ywgGXRttPrPoDRXga94MjxkM9MWoLXnurDrQMXwkcC",
  "key19": "2pgepEGZKw8P1rvHnNU3kReo84CTdcwFJU5MReAHoYcoetGRKywjgumrNoU9cMWvHKRPsaASeHkfAbMvktcjSGgW",
  "key20": "2vbvKbMEx8UXU7J2MxYSaNdahmRBpsMyXnSMA6RPqUDnjTmvF7vWzSdeuCmpuaofbVWMUMzCanUmT2G9VbWXkDro",
  "key21": "41UgPGTXFuqSfYkibgy2yQwKf7TC7Z4BJ42qPzf4HYBdUYLYNd3T7DVAS9xFS7kSWuWgFayjdnXPzo2rWWQv196V",
  "key22": "5Up3QBhysquesQdo8SSizX5oNu6xiQrQzzSgRUEjD7FqKRF5vN7hXGW8aEW8cD7iBmPF8mqG7M9rU2RrAwcnHgLH",
  "key23": "2kusT1GMpX6rPPJvdCbmkUD1pXq9unHsPtKS9dBDHcaeV1RqgkGHm2KHfvVqeAhDMVVjV9q9tiQpKJgvff1h5qJR",
  "key24": "2sXHvCpGTqEdzwQWBrKTV7N6zaUYpEVSKAXG6mnfFmLDKj8Sd3HsdfZnqRVuUd7WC8U5463Vqqazs1sY8ZAfqmtS",
  "key25": "3AG1jRB9DRmfRJSroFQSY35qgHZRUH6A1Y5dCT4awX4nyn987275H2vtNiWzUNzQ1BRg7pLGf2vYNN7jn28MsJQu"
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
