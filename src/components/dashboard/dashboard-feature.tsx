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
    "bDdXRbom2LV3vn423mehZcaNwosuSQG61fzh6kzhXbDeeMEKoNAhtwbpae9qAyZvtwNcF9dm6cT1dLgFwSWDouU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fvq9xibLrGNsWhUWSz2bX3vk3g5XH2n33rm7VoGoUmbxkCo9aU4dNiYqV8XGs3jsUDnZJ46eipbZf8DVc4YA7em",
  "key1": "5Wst3gdvXymCbNGb52Z99cVBJbEmNPgeFDLG7dF33usuqjeJjt7UEifALy58b5XCGcFX9h6woCdtEHrdXNFy4onu",
  "key2": "3dohNo4eDQSg49J2YR2gULKMQDgvJuxudPQ1zkeAgrSBuUjDC15t33c8maXxUMbwUhvXRmN2bGhLGnLnbHYctzUV",
  "key3": "28p1s8uScnpfeGP1Su9gVDVGUmKhqLTE5MnSHJqsX7H93tXtfxDFvzEUBdgWmXwGPTJe8b5Q48Ry7xRbCXEJmWXG",
  "key4": "2gvRbUs7ao9ym2YMVSC6Usrym1LeY7grGR93s8F7zLv3jXBV8pr46Z12k71phSyvUpfuEterejesqfZ4xs3NQftC",
  "key5": "3uuiEDEd4bkwofA9hYTiY5FHT3YqdwR9GfJ8ECFzsP7Win16fWWJMYmoiUUYUBuebHYYfQGQBQrxvmpZoGP5AqPN",
  "key6": "4r7zDfSjzbjG3Av7WvJrUS7hGAbYVQDnjaAA8MhSjSJVKfQNMknQugadxMQumhR9t8VvEDEYyuj9zwYrrrJP4u6k",
  "key7": "tzu7jTgFhWFcjWXS8FTrniQfmuP1N19QxGiaYS2giWXUwCRKSArpE3tvsyW8Y7o1L58rbBWKYiaodByEMdQdhUB",
  "key8": "3Sv8g1QZV6WX87iPiZ4YYSgPdXhM6MZfWkPLgR6RVH4NDzoejLS2cuwJDVSxfVao22M8GzqBUuoXsE9CWZqteVHo",
  "key9": "axfr3Ejzmm1shS1t7pE7Fqe3U4SQSFVPnWitZD8xnuwBSn9BBW1NviwNL69JYqYKd2BN1qSJMdKRSXPvzreYfAP",
  "key10": "3orZB5ww5FzkXd8zctuK4myTYpMLcxX89aJfvkwDKqEBTByBzCB7Z48qCSyTYPBBdpgH71fp4w1cPFLvz9Cocru4",
  "key11": "59ojCskpNh78YB53BCCZ3KdVVS99ZagWNrxF97vhHn6UvFPNT9Tge3BkgxxHVPyAxZoWc6Zkc2y8Csc2QMz4zXpY",
  "key12": "4RSDpG8oiTqqbEsD67Ct4ff5d9aXbE4CpTNVs1HzkxC5uW9tpcRbFVxBKHRnPCjuYAUsjpmub5wUcK13HyAt8CWP",
  "key13": "3CzVbUFiRJuG24zmjWBpxkUJB2c6xLdkPGeW5uPXsQw9Vd57ucjFGK3LCPGgH6TtQWiWgkxYxYHaNUZPyV7mkKXQ",
  "key14": "2ELH4NtbRLEr1Cuguak7TVabuKxBPX2ow9jiSSatEqbfmbrzaSFaSFJV5CAVAv7rCA4w4CS5BUDaXhPNoqeJTpqC",
  "key15": "37CGNYMX6zoHr47pZ4sK3Nko3fR9y8QizApqZt13CFTjVEb6UGspsXQqbjXY3gmyPc9et2hX6C7qWdowQZM2z88a",
  "key16": "5p2BYnw8WogErooMhF7iyKG8czt8PnHrcbKz16grrev3CyhwZW7bvx33C6QHcLN9jv1uxGCQwvABfpZPqhZWDtgb",
  "key17": "5e7vzjqZU7zFWVoDCJdEzK9XRXsH1ZASLJBMgMxcEKwMP2R9UuBhVMDT6FCbyhU9gkVGzZRN4UtVWKhXjgjFhTxS",
  "key18": "CZmZbpdBR51mBaWpJxfamfR8ucLho8MpVQaDhuTTkqbefDYGiZ6mQwR41fXfZmc7z4iKGzGAtYAXRsXuq39BQef",
  "key19": "49RkTKKkhVb9CsFF8ZcAzoK8AUAJtoGJVpQiRrnW4vZL8E2YRWDCT6aFLqpyffvB1GXK9Ymk6zubLV8mZyhRdGSP",
  "key20": "4QYDPTUfMqHsQkWbz7J2UCsDpCFJy9nnKcusTbYNeQAmkTn6nMwPWAE7G9cVJbP9XUqQwDAY2rNPZ5fhu55YYo6j",
  "key21": "4bcRMivFH9nEAEJgpgENhh9FZPUp13AVKS3xkeQAZ1E5q1eUn2sXjcbsy5znXLaUKvDk6DA67bMUTnvuvpt6t2Pk",
  "key22": "3yB6ABsYuwdL6AMeTruocEYZ2DwjaVdUcYsWWPcnrA6WiwwGh3NHPVRS59egD6W8Ngk2cobynQRTs4mwqHVjnc9p",
  "key23": "554KHUXmNtqPf8yuQkwRwsk41WcJdXtGpJSw2i5z7pQUwK6aVWuTnXYNaE2ZVKksaz7CTs2tCgZVSyGgiTzzLbRX",
  "key24": "2DXxB79zKDLFCjc236jN916gktUVnEYGK2pqg9GLMzYQfy6z3MeZFbJ8qjk3PYwxWgTfMueKLxNbbCi4nnVrpqwF",
  "key25": "3u5ELGZiL63YdchezF6AidsTNx5gdBuYEgRr7DWTDMRgp4wJZrqk355vfsJyo5DXoxYYw7vyic42rEETJXzLF5zQ",
  "key26": "3Xj7fvbZHy2SC1GpJ997CCvcxbNXkmvvra3RvXRnEJGyZWWuaz2A7EefAbpWS5SUwHGvmqkRN1KbHz6mmrxr9988",
  "key27": "kdqL7A6qmr5bC355LKJ8B3RbeMdTceMGznciTeYreZDFjRehgq5EN8iVMiGv9L5VGp1jiPukcCRScVMVpch4fbV",
  "key28": "6ga4DB8KCZdXe3tHdSryExV8QFjuPCjaY3LdAYhz4BuPaeijSYWrdmM8wsgmb1U9nQ6Vi6zqDGg6FnNkYkaM5Ap"
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
