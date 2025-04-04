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
    "5MynkaceEqvfbqYk8qLuko8VZrzk7xkExdCsZF84aYvyN9XY7sPkPqyrUgA9cyQWfFTrm2HS2XvQFA8aTCWm3emB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22awd9tDaS1rJYhtngAnQkjTSJSPasLdVwBtmZXFG5QAqN3mbdYU9wcRjSuFiMojfxZTKva54HBifwNEJU3ab57L",
  "key1": "4MCHfa7tzvG7XVVvZ7RA2ob1oG4ZKMBqJHNzWP4woDa7AhYJaFSHt8x9PKCfvmRvtK9Kz1rVzZnDhri2GPeVFCaL",
  "key2": "4EauNeZvm1E7ZaCKKL7PtwzoRzkco95VLAnMNiao9JvRCkyqujAkN4JQc29gbirYVmJw5HMXugEhdwipjiRVMH92",
  "key3": "5fw23m7Wt2iYbPEYPYERifuZsXytRuNS2Kb31JUvpJn6V6cCUkioHHwXPMmFnC87bR5aQtkJCeMAn4TYkVJWbQsN",
  "key4": "ybNeqaFnpVLmeXTF2H7nNKKn1H8tRBGWeZxrnWBdPiaQ61io14r4jE9YKtPf2jsHvi5XNXJ4ceJd3xL7L4RJ2ve",
  "key5": "5HJCtVEaJGsBRZYxnK9e3RseXgQQSYKQLoy7CKXQSK5NAy5z2e47PY7ppGqSmkqYxpKxUJeyabNJ3aVqv2PSGiCb",
  "key6": "3vtok81jgoDGLDJtMcANirYJsRfcQ5DBH5LenfFvYcx3fn3TNok3c3CDiDS7sRH6oS8K7Zdm5PiE4qV2vMrKHwTZ",
  "key7": "4Nky14fgmTRxF6CjRpa5EWfcAAQCfwGpMv6hKmLMA13VP44DPJUAF7sutVGpdCtdQYN4DXRqd6TDCUQrf47wm1UQ",
  "key8": "21ReittbFhWgGXWphTgfoBQ9bUpXXS95zZAw3s3PAy7qEwEFPSYyZQBwaoN88GXDhy5vqC8rQoUGApreKh9ek3sS",
  "key9": "46Sb46irGxo3egVH8qh2YnT3LTcZdWXFW7u3ac7rtUhy4gj7F7mjZyMqB3EkuNTt2Lf9o8Si2YbVNZweJieN5Pqk",
  "key10": "BFMeQZ5Db6AhyG4uuj6nfWSXAHuFykZpWu7q6a3BnTmpvxGQrUNYdHW8jHJUfCsRZcXmiu1JxChDXwQzWafkucv",
  "key11": "5vUAkMvaB7nAyegGnBPuwaYmbmgHcuQ1n1XoLiVNp42mAk7fRGKorqL4cP8MPQ78kZUFHkG5xuv9BjtfcNQjVCWE",
  "key12": "63mk8n4KzMuj5ogfS8NnLGF6jfWvYbtHTd9qV36KQMei5NjHp1de5STZTV8bQoiYfiNHSUDc6WDbfsbd7GRWyGBP",
  "key13": "3A9DEciSPCZnSXcpUTFcXJEMVziCGNUqa6YwbgRGJATqsBHpJDA6Lic6yWUc342QGkQ8ptYm6EHuT3sBSGGKZzLk",
  "key14": "5tVf1up4qLTbeaFnK99s51Bthv6pikn7U5F8iP6iZcSW8Axbax6Lu4n4LqHQXMGrarbv1dFdTFPKwFbyaVeM8S5G",
  "key15": "p1CSZLbxkXJk1n78GtEofsEju8LnNUH3SAQRENDWGTZaZ316VdBJxkonceRMote9DF7Z7WnTM7Z3LTFCyzWEUgf",
  "key16": "3FrgahdmFW8JwPrzjSp6QpVLJWP6tqXmWdWuU5zei2Jr23nrkA6mweDCzDcxTu8ZuxMauAirL2MNMEkPtrVKu6Jv",
  "key17": "2h33wVLVXbtPWZjhdcye8QNJ4QdZVdFt4XY65NNTrafbyvDc5zMLyBUnMTQ1QvzGRy19hv75wSmsG8AAYWM6u1ZH",
  "key18": "4huMpTHgvYPakTrZBxMA9tkxKoTkXj6xo9Gef3AqzvMPbjm4KQUBNRq4TTwypk4sG8hBASo1neAfv2kdZzpufpr3",
  "key19": "5vccT9D2X8S1FbmzXyq1pbjaWBkDueNevJDi4hrNTUKv1ZHGMepvSGCEtZN49gahZKtJ1neZ8FnF8cJRWB8GBt9Z",
  "key20": "3muSvNrdSJ1HcNYoPN2mRnije23tGbUQY6Qm5RZK6S5f1STrAKGbu5kezJ9c75uSAmuobPErGDP1e92GNdW8xWZN",
  "key21": "2bS2wHvgmvFR9WooevzqvtQ7kn7ERzWe4vwU8CxuAV6XhqvQp2WcRxCi1Ape7GX6LfLBzDiGp6QQLG7fjYTXKKV2",
  "key22": "2T2BZbB65NKcamqYZPZWTMpyBCnphuDhVV1aUBL8zHRffG6ExT3ikUEL3XVtpVgSQw8eZUZD3CRKTK7d82acDdpK",
  "key23": "2mY1FbB5cHWdDHjAbu2z8Rur3UhrxwT3JdWkLc9PJShxQ9qwKi2tt2NwaGzkA2t4m1vsWBgneswgFjReL6NiACAV",
  "key24": "4DYsvKiHQ25HtK1tYxMbb4D1qvWtj1WB7adcCgbERodMwNgzyQXjt6d2RNQd88qRTf1ScDh14zHzZynUpdzAh2UX",
  "key25": "2R9nfARsXT42hGhEkNigjM5URz7qM6aEbFF46Ys73LGuYDDhdhTJPr2CxAn3HXD6h8DFW8UdQB4t7VLf1sSiyfMd",
  "key26": "5aRLMASFtKZYDYNFwoUSUVkRqvRPcHaNydRMYUcsDXMyw2HyEoH5opTzoLKYSXrkHv6US8h94aqxg5xpMcTB43gq",
  "key27": "gnVDLENYDFmBWwz4N7zTBM8MKUaALmBoitb6j9YhDKBF6eJv7AAgWceyRvxAYv8EKhmCACZ2ncETnokzECYRdBy",
  "key28": "3JHNGEobidhFcupjbMpx9286Bt4EsDt1ZMgf5DtWwJTkNRCugQoAgx6hMPYq8yZK4jFpwx9TpxsFLN5kd9rMzXkW",
  "key29": "3F5zsVJpCSy3fxEvYnTuD1KqwhCTnQRXKv8HTPmiKG4MmDTQ1GdMnX64jHQk3U5diWs6pQ8XRMTRP3FHtyvrCTSg",
  "key30": "3qD6JCYG5CWBTykfWKGpd9Mx6mTcSD3jiWwpV4apZw4rfXyedfNt9zoh46Z9HKaUAtvzuXWRb4rWc2S7VR26nzr2",
  "key31": "488H47cEvPwcLMXBLMskFSY8VXTsc6YTU2LfGdqN5dW77osNBcgdyDWTZrua4vD7CzaQRLUDp26wrKqdW5aKo1m5"
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
