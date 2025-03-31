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
    "icF9oceqe2dAeLbDaX11XPY53bvdjwSAKj6ucLFrWZya5ww1uZmPJDQ8gZiwG3sEcNEhRTVhEh3Yt5n7xvpaLzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bmnYZQ9wxjDu2vXcUtnqz9Us15WfvhC3A59EPcB1Ph3qLse9JiN9Lydf9qaLWNT8VCvtpECodFuWx2EPDSf2ZAk",
  "key1": "5cgHUtZehG9XYP1VwpRzDmLErBx66rYEmv7hwuCoaHUHKUXZri3bi4M1E5Xm9zuJorpcb7nsBr9tiW8WGwMK6PbZ",
  "key2": "5JxT8rbLvnRz2epknE2pVUWjktRWAabV3hB6YAuQGaNjaA3oWJ8WwpxNzF9FtnG4axGevjyuouPrmy828Eu1A8pu",
  "key3": "3EESJ5y6oThNUWoaVapoaePWN461DDktLVKHf35Qr9pS965ZkfvqsrS1RwrFQo15SceWQTKSCZASNRffX2iJKsib",
  "key4": "2bR6AcDZQaUmi7qtUwFSte7pcyh8mNG6N4XCwWKLAxFVE1kr3q544X7nMrMQbZM1LoJS2izortS7hieUe5XhNbCq",
  "key5": "4ArhBB8GT7haE7sXkEgUszQ6w7Zsn9XHs2aRgj1ZPCvCqVjk7LCoMgyhv6uXZ2ZKxgkYqdGD6H1B7K6W69bYfMHj",
  "key6": "4vWM6iDjr6h9J3LrFgJ9tJJAaPwkHLEUukDKP6yJ5vg1kgUJcPhygszwSqQgZ9y4QnSPhwH6bwUg3PjCB6f3gw9D",
  "key7": "2CpRkUJZKkK2kacBxWXqP1ipKw9Cm77PPuUuDYj9pHpSmsDw3inV3bqaR3XFZqZeWktSb2chCcshBqmuyAGPXFgZ",
  "key8": "QfGHKuavjEdZoBcrt5KBRcxBSh3E4Mnav8i4W68AhmRgQUJS5E148h7czELK6e1CTa8S4wpNnNXyDWJQvzo7J2T",
  "key9": "473zaQnZfSDksGoh3SQsMF7tTtCfM5WWtttRAPACyUhjpwjer8qTcBrgvjikCS9ozqSkxNDQuMxUj3Tqbp73Xpcf",
  "key10": "4H3QxMRuji7KBUXfaSM2GXCUP4WMFdAj8b9owMdvSnC8RsVjX9PgZZh71aL1xgRT7KXCnhxGiCNTyJGHBVCxcurM",
  "key11": "5hyjHiS16K2zonM8XnTtKvZzWoYp3b1jEDwroKaDVEbRrm6oLiG7GkJbd7F7XLLC9xtg7Afo5V4rGHijF2msVgY7",
  "key12": "4w4Az2t5dEZUbSxZ1McqtTFeiVHoiu1W7qUqMMhNGMojSEJBo3sn9Uy5ZKgo3we43Ek7K3PxXmoiMygmJPSMLgjM",
  "key13": "4jJRwT8otSEBsRfAfL8tQMeBKWAdqVoq1dH3JADvY6Ex7q9XK2pDYgWkL3g6QX6sh1pGz8WLgGk7o3AyYjK9cFer",
  "key14": "5CNrmNeMEHpSDsbbh6cFUnXHU5HcbV9gUzFBgVUrJ9KNbjLMWn2brqtfuDxXyyjddyKn8WyoYTtAhb4yMrzHa4RS",
  "key15": "3jb2Z2wZJ5fBkiLzNpDFTquvbv8T3i5SqHz9BFEnYTDrhqtrR8KRjQf79is6ECa9tceXYUbqrodbLvu53ZwqzDsL",
  "key16": "W9fbM3zC5pocwr7ftNYgFymNmuYc9663i2jsc9TWhbT8faF1UFEMhyB8S5Q3FsowLr75fSAnXYNuLWibgVBfFyg",
  "key17": "5isZCwjNGGF5bdaJsY917GUzUtdKfMY9XBrFU9yex34jMT9mAsB8PLfJ2gmtR4tABUN2v8M4b59TpJmhV54wPamC",
  "key18": "4NdNmbrgfxMjRGV7r2qYKXf79GxpF5n59pc9WrSnLYPtqkevjVxABSrCZTTq2tvGDGDXbo6b4eQum6ULaNBL7T3n",
  "key19": "3Q9zw6gkd5MHQN8cWctuS1c3NzwUi3LqxmCdtTfLyKCKnC7bpzDnJyRiywuYs34JcVY5pd3eEjaNxodLmvWYcA3s",
  "key20": "qHK9zGYK4kiefSgArLRFgMkorKdioi2pp6Hfgu5U2BtT1eS8dgx823Tfe2Z16xfaiHkfP9oq8JP7pue4xr42L46",
  "key21": "2eS6VYg9xbNBKLTLecqQ8xc8iESiVPiFcotLUEqocqsm8Pyh8Dd4SUAoEzAnAofjcS4z1KsULJJXsjs66y8TWnFp",
  "key22": "2xM1gH4eLURWdypmqCvdACb5dwKRDWNv4UVQ84MrUZfhrpxyFR6Q5fhvE69qktvRr4eJhGcvHRC3CM5cAkubixXR",
  "key23": "2CRwXnxq5NjaVDEk1gG5gbQdbYN12hWX55kxGqbYuzhpcyWJjcRogYfNLhoAeL2ShLoidFDogt5oW9PA3ZaZG48p",
  "key24": "5J7EjEuGoeEmLCBXxGznXrsM6Qj1pxmWewpkyQSH1YnooN68E3ZdLFEhbTaBCLHLu9Y8nZvQVVFueqn7y564XzTB",
  "key25": "3BsVe2J6fxex49F6u9Ys7pAUkwzZXXuf7Lp3cMGMjvCjMGuxJb93h8YxWYjA5M9LfVuFVLd37nS8NfvxdHEFzo13",
  "key26": "62GYnK4zwRnAjKjT7bEYwLoNxHxw5qrsgGVpCzfKedtatL2vwG5sr7Jbe5UNvyP1HwAxuMsaKAdD46HTGWngPMvd",
  "key27": "5vT1hwDDJNqxxUHBYpPugVkSv949z7QMrHcH91RY4k53XrfJZp155ts7FnDX7MLNfxhQwefA1fuMi66gbUym5PJg"
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
