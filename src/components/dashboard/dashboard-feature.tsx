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
    "5CqRSjxCSC3thjK8LdWdcQc7R3ugZGdEXkbceQdaU5kTpN15JTG8aYFx3brKNH3R55cKcq4UMp2g3NaBPCVjWkrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LnsqNXAHo5TY4Ca3bE3RBxCKAtPjhmoVZC47xw2KdkTqToDEinMTQvkPpjy91HEspM4QcbBHUWsTnwt4cP2ebNa",
  "key1": "3XdASYhrefbksGgFv2Xd8eQr1wXh2FKC6QTp8TPWJ12WwDFKU174pGc6PAHHgnzypa86ZC7vepEtWpHW9XoEGeTZ",
  "key2": "4b76s18bs5wzR8RX2JUmYbPS4rFS7UWj2bF9i9V553yrWqxcryVeVmfPzjoGFt2hqc8uppfBGHk2z2p6LoQN5HkU",
  "key3": "4Y4RGcjGhAFW6DVX4tvhQZ9SWqHtDYNn9yDjUx7Jzk9V665sDESVJRVXKK4r55JyumHmUML9rGH2FfqQy7Wm523t",
  "key4": "2kKkeHLtnj1CXdPmpbfi3j5WMsXXWD5t5rj3VSSfBLVcpqJnd8nCK79dwBBihj9iTSPiAs6yTRtoqxDuuVfvuHPZ",
  "key5": "4kYMmTNpYF9gXESh1g18suZSMatnNCG3XjhrK56oH3pEPoL2yT5FvNDBUxf4N7HTBqehWy4U6rU1A8bTjXyDxLU1",
  "key6": "2c9YrbvuRsSWuL2CbM4MM4t58NfPAV497JdgvzX5byeJbWSD9R6rKZwgZ9uomCRcKu9BhfN4MM6AssW7gTZZE67c",
  "key7": "5KK2GgdxfymajXyC3pT6o1aAFGSA4Shc3UdLVYu3tCinbiuJSH8o8cobqM6YEd5ds7mPzmTMLjyTamGi3seAszC",
  "key8": "3Wsn58rEYnWaYNRxqmfvYCrVmFP6etQajkuGG9Lh4nYuviKpMvN9wC7qKqmpYNJayBzRRu7o5gJXBXCNdJ3JpFnL",
  "key9": "4necHPxpq5uTVbbuXJhLtUu2eMmMFpi9tfgYzzYtmGcFzRmEkXrTnQhfvAAhqi1Rk33xCWKn3teiMGfCVfGYom8o",
  "key10": "4bKZjSNd1YeJhaLcnK43hdQ6g5axDSKZpp6CrkN1w6T3BgbV4x2JXomuQHYjvrUfoJ6tyDoJVXeZkrHJJGZu2SHi",
  "key11": "cvtLY1vkNTNxnRLAqYVbxGkVEDqDJvfGNXCMeDhQ8Dp4YDaJ8kcN6mqas6vS6guvEbq2XBvJGv4TQdSeBTQUGU3",
  "key12": "5K19ura1vikkgf3PMGDA54LmK7TbPHiaky3v9Ep4GZBmCSR6cB1kyfYKp8RCZ67Zb5yBvvfUxZZ5oKX3ohNXvWRK",
  "key13": "5pZ1g1WP3z5Hu1yRb7kcDu7RmbHaWpS1hKs4TxHPNo1GcDFP4hfZXWEeB1N1LxefzaMcSNrwUwCRTLJ2atreMXcd",
  "key14": "62WZpcK17A9wJyhq62M8mJgpng7y2fZSGYQc2UAnBzf3QwA4A4VqXUVR7x88WWxgiM57511HgkJv2LwaFW26LZ8P",
  "key15": "2UdKKnp5szSFKJ5xVULZM6hA4jWgZZTsg3sdyy6iB8uCm7yKAp7Ve4xLoYcuFQNUgNthg236DMzYmp3QZVHukDdV",
  "key16": "3mLJghB5ZwTSouGjstHPrntccA5CD7EQWZQYWMrWCKcWShEkSeheSYfmzeddcsmE766BHVo3sjRCq9nxxjrHFqcf",
  "key17": "64aML5nSqZw8wpkYNsgjC46f4sbpKN8DWrhdAwLxLdXaAXtvtmTnLRRgwyaSDCbBrfnw83QBpqpt73q4wmhjht9Y",
  "key18": "5xeLaHh2GQRL2WtEBdWgVE7VCiAEp797tt49TskS4AZQhmbRMYjENQNWyuxbsFgbVTMrcW4nd9hrxn15UjnQg43t",
  "key19": "614vtD56YmjxwnPhZziCwnkLuoEWcfScXonUDbRnQtfS7zPvsecyxEgzVdaKFBCwtaDz289PEv4qjeGT876WcBum",
  "key20": "tRjeCBb84jkUvVRoWb7KsvYzg1UWxTdCBgUGjV3HtSLWjxoBg7LGUBE2CsasvgoyLANK1ACA9Kg4ow4L8uiGisu",
  "key21": "rws2x3bPwQrsoe8HtWvyJ1reGp1dbtzyvutDxdfxR2soWM2TiNHz5JZci6xwT7Jqg1phKqaJbiY5HcfMYzmGZX1",
  "key22": "2Z6VMMbuTWZHbUv1FdqtNhoWLctNXo36vqaMdgRuku7ZPhEFhPnJaZnJbgQTno8vMh8xAptYNeWgn6DA44QPk9oM",
  "key23": "56hCq9e9bPqJQQqwCrXxRYSHC4NQRG652SZQ274QULqmimtb76xnSRAcmeftujgJDTZM8t7nizkou296eCYcGAHG",
  "key24": "kFd2dV6fuCkhiJfCiUGjbWBEtNYitDHnYM6HX74iozVjCB7jxjBvtP4zGCkfnDcsdQMF7qqNv6iyZCFmAJc4Ac6",
  "key25": "5M4vvxojBbxgTPSPUnrkWJGG1huaSba9rzvQPB5P4cAMhSfnLoyBXKF6dk5Rk4FvWis49pZuBVCFH1Fv6Xikc6Hk",
  "key26": "w3tdfxD5ghCsMHTvCXHzxQwHjLkZuY1hLxLTkGoC8aj7v89y6PZd2zWnTf6QeYk4mSG5aEHmwtrwKgE5xJV5YiL",
  "key27": "5eeA2ZCUJGMmuoSwdJhChwaqBjY6SGRm2mpofXmwrwLm6axfCu7pYWwVuWTmTCkPfkPP659wYD8ejahJU6siwMW6"
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
