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
    "rayhLKda36h5bgdGJUb3vFyqyNrQAvtXYpPSS74CJAumMcbabHDtZW5XjHpwjHwTwBpLhrXERY3CYkpN6ah4HKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XjxQ9jkonMSMWcwY1own96LpHQu1htkkZrzqVZirZdWWU4uTFEoAcKsPScz6KZ3c76a3GQ5npTGMLBm5Dr1Ghip",
  "key1": "3VQMK3hMeYuiGD2nu1mpD2mjFC15P12ZDmEqcFpfW3Me3qyofJRKxbhWqaFSFswJ97UNSM9hxzSbNVURGG7NmkLr",
  "key2": "2uLxNjqMKfF9yZUCzAKb8i9SNcRKAD9jczeGVRV7tcQdehqeUmgo5ktYyTiZKhbYUsH97WiPLJJreetLNzLYYNnp",
  "key3": "5QyyaGSng1BeTJ1GK45WFBpEEY38VWaaFz4aLEyAoW5RA57vgi6tZgFDL9Tes1eL8Un1SkvL9jnUTmEfm6efS2E",
  "key4": "4E82zaXC7ZM9YgnAhXXWmfViw16PgBRhJSCdoHQ6eqPfhR78WjFtJrNChQJXcwUCQoNhzSCS6EhnotcFekVTc1E5",
  "key5": "TDV1nGxALHNCF7pW5ftsTATUZWEPZvdu885mTnQ1vZSGHezi5KL2hWZdcuPg7hLYdzwAJDFoZxH5Zx5uYTxbhhj",
  "key6": "pN9GEiWwRRCgFQEnkxXQnqN6c7Ge2nb7XVjpT96TjSnh7L4C8rxZzpbAaK4xKEVhfhu3QmHExbeCd2xc8qXsqxK",
  "key7": "464sHP6BwmQrody6Yu6tpN2PkgkKhV2acmMzPkX9Cp3PgM8714QvJCm6Gn1CTANrYT9SCFRcUNZ2GYFeHbhZxhQg",
  "key8": "3S2b5GYQKgToMNLYLhBttY6nvSMtMee3SmvRnTM6Hb5vdYR8jWeUAcknsTgbbQkNtEBTgU1RjZDctPVhwWDGSA1X",
  "key9": "2obQX9fDwH677c2hTUXtX46KbzG81oLjgSGqaDnLLWwexbVywbh4ZRR9AC4MAprMXvBLqUTXKqFtTuufRTSMiqDm",
  "key10": "487hgXAd8vFGb62d9AaB4ggZzAUpfSB4Mri2wqKwmzEwzjwjuvGp1pbi96DHiHQpcpqvG3DVrJXvbxVX4zyHzRAy",
  "key11": "5yAN89XdnaKxpBJCTgDw6Aa5Mm2mGeBTAgS4X8amcXfMf2MSF3FwLXRwgQ8pub6xxn6ppCbD5ERHLYWanfYFFJz3",
  "key12": "2QaukWzEo3eeAFxdKuvQjZnxv2KN6dCXzAAoPPujZxqkccD99PauMcfpZXzL6xxNf8tj4uhK2mD49fjjTFg3Q4tp",
  "key13": "h12mmEuqkmakSmTgxsPiPD5f5ZwrsJ7SrzP6syTXiY6nL8YFq5e8yoXzwQ7gvFuUj79xjeE4mZat5mVH5HNjARm",
  "key14": "3eKUEKx6WBAYCNKXKTZePw7aVmZfk5YZxBN3uqvHjXpwL4Mgd3u2YZr88Qmjnu3NbVdnmeHgB6VUBYbmQvEJ4EGK",
  "key15": "5P4LC7VXATYfvahAV51oQBeRqY57YPVVzQxmhCdQw91zEpK6JLwYj4a9chyaXNw92rN5hSwkUwAJp8w5CY7x9GM7",
  "key16": "4WgifH1QKophUuj975Uq73zwjjoQ5VFHSbdj5d1GKQKBpnk2pALFK8hT4eGGNxXNbt3nHqjJNpjzFvyc3JA9hwVd",
  "key17": "2cQsn8wrCrPSfkhiDUkxQpDfUntrJaapWCPZhuxeyEkFdQVTnYJ77gRoUrkjo1aSkPxHseV4DB3AuyxTzaxMM5yJ",
  "key18": "4HXdtUaYajetvCoSwzBj6m77AZ79Gykc8XL9yCCQSaQ6DcDfBJJFqsvDujUgvxXNT4ZQig2JFhQzGgqetc4GUX5J",
  "key19": "5kc8FvMEYnFqQ9xvBj5r8GN9YS975jbG2f8Ljy6wQokfwU4rcxD9exC7R5H4U9sMwe8vBeMWH73c6o1Az5yt93Vf",
  "key20": "4Qxr2JNBYTLKtr9SwQRJf3yQA7nb6J21QpM5drRCZpZr6tYPrmktyQ2D1UCLE62jQxLsuV3TZEjWv8ewhedaA6gz",
  "key21": "2ngzTTxA48ZrT4CsWpZ7fSF5fzDee9c8F4e98LFVtrb5RKKNAcjXUytr6PpGsrvza5m9Mt9UjuVDg8y8vryGuqph",
  "key22": "RYVLGMRuAqFt1tNoCdNbskRmNDEmPJ8hmzEHWTHoR5xMoedNU4ubyitJsSKCRoMdZKcwcigrgTvpaGK8ZXEQv9Y",
  "key23": "Z4xX9V4idzyWjb9rkVKV77HPqHqWfPsPXodiDq6qx5uDPjFVexir5YmqrVN2v7A1WKxSmeeoszjtwHhDJ15PTPp",
  "key24": "HGHd1McKrBrfVtJFf6xrftPRuWC4x5ZYtex7jTdtyLGyWY6jZdYqxFb8VnsN1xrHzpSc9TdbMLCMMuYhpx7iJzE"
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
