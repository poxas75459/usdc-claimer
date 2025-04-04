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
    "2rGdCvcQwDJXSd7VpjuRJpS5ZpWGmPq3cDwxTKASWwaDdJjXRcFhXfk6oFnyhAKoFwyCnRVcP3hq6WhfLeyqDgdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27QBHbeoPAeF2wdCcjG2XbngqVPdbturdN1hAKFhQsGaAaFQhYMkmuX1L6s2urpegv853WgMNHJp4MPnyYm8Yzhx",
  "key1": "4N7KjvwSNDmbnbHZ8v22mVpAfFPmCfY4WkxT2w8JK81NdqgCpWo3ZLbXk7mmymkj94SuEuHokRZAWD3LK8teZrae",
  "key2": "5oqcDjA4jXGW3s2CseaevEo3CtcSUpEN8catiq2EV31jGDgvk6SUC5pmZUbhidcP2oB8Ka1bBgyaAJrQCiBCzKTN",
  "key3": "SWyfREmtyGWhdBe3JGSY27VpK6i712piSHbxBvG3dwWMfrqdmgKJJ2S68uu9YNL6VxJimZPdEb9Y73rmzMznrn9",
  "key4": "R9bs8bE6CSUiiaDz3CipSqVrbtJDeiZYyXiH72nVXbJNbDRQTRfMcB6KkqLcSv7BGTFVq3mP1m7D9YpnmPDLYwL",
  "key5": "2X3JjwfHpLmjcFP7MaQrVg9BNzLwE5nqthmdCET6P6Kj3A7VPz7JPxfdCDWCzkH9hHKPMgb8roxEr6mWzvCjMBbH",
  "key6": "i4NQDzEV2EYqKf2yRde4eNd282x16JohDu8Eo8mMZYDHnFCer2XDbjjPHZdMtbCXSP2jAqxE7xHBkatSHrNnCME",
  "key7": "3pGWimrPTUBRynSnk8UumpyjDSEWpn8mqM7CfAjo7WHbbF33KH63wZCJxACtaNxd93mn8yXu6EuPjfyMmdEJu62",
  "key8": "4ufkXgJ8xAYVYc5af3DFKaUmdQxVddsLKyAN85vDdDM6HiJipMeYLjkxNJGv4WK1LpzxKMHexc9aUDpGaeTb719F",
  "key9": "89VsSMm857xfiPDgxt8H8zQ2ygbjjfCunGg2JeaX2FNUein1n8xQwpXxXk9znZFvhRbXA2wdxXF4fuV2kygCjdq",
  "key10": "3nJg3pKdEcuPiERTL2sSbERPpUqS8N7SYBUC33VK14khH4Rhz4MyV9XfBAsmQFMaWLdircRWBuZ6JZvPNzpyFK1w",
  "key11": "28eB44Pf5xygCnhtiEQjzbzvr53togLpL4tYFEvqcBTPyvFYfVTgj451a1f8TFCdDEoXLMeeZKCCudjXMsNDVUwT",
  "key12": "46oRJLZGC9pDctvvSue66jGqSStpg9quWCpua8LEwDdzJApNmZN9D42FWgxeKme3jKWkxM4Ky9bSupCBhiquWD2k",
  "key13": "2EGohBC21aExvHP6AZrqpRa16aPEmT6DBXh6YuE5sWbYK4zjpGRR7uDtEoU9HE16n1tFh13Cm8k7dhdH3VtVwCrv",
  "key14": "3x1pbgbYJqYwj33ASRmQLj5Unqi25HTj3mymmwC5fyzS8Tm5y3Umttizi269W8FjvV5xBhcgpcRTP9TVxmhEGXw1",
  "key15": "2LgPHF5s3hEnww1HvMAmsbL9XXsbRWzFc726oKRw7xzUKAyUeig5f5a7b1pbKzFgGRZw1heLdQCGvtmZwRGmqgto",
  "key16": "2txwf6CKYy7XaMeQto8ZhmStmf13rLkTVDQGpGog2EEbEnA1Au7eABexGKgcwti3NSMwtbEZetZwtRRHkxwPL3Hx",
  "key17": "49jNQMuWJHCbF68Xix8631xD2bc3ij2BfVQKYd2nwiWwFUZa2jU5Zo9bABqNE5MdnUWLViDidvc6jWcAX9q88ED1",
  "key18": "ukRkCXwPGx8E9urJyTFVd1jAhV4ZYnkkXAqgiXib3cGetPCeejccPaLC6QefJuPwgji859d1RMwGJLtAdkcENsd",
  "key19": "HHRzj6YzHxuhgqK6BXHJb7aZXCzEFfujYJfUesQCvimmt6mDgX2z3jMPfDw9DTF9YCYZwM2KKNeCY9hywUhLhfM",
  "key20": "22JDo4jVTgCNh71vfNUg4yVZ2qtw7h1SdPWbB6ntYsQfsd6Y8ockErxuN9UgfuNaM4KCvL8g5zQbnbL5DymdG9M4",
  "key21": "63znvMz9r8FGbu6sG1SgT7rGSye8ChYwTM2bLg5QR69fPZCMW4wVjAUqkjxpsTRr33gvuZ5tnh6n3sSWDwsN6DBs",
  "key22": "3jn3TwsGkiyEto9BB6r6Nvj5ZArkeP2WS7BMGEkrnezp5iD61FQbHJGmPhzaKuz9UUTeNtLdp76zY9Wa8YbXHHK4",
  "key23": "35WGQ2V6gtAi6pjNGTeHFaErNHwzPNDxtM2A4kys5Bvs8kAa6NWFnQhQKB9LsMdKYb8a5xAnQkj2Tc36k86P5Lhv",
  "key24": "wQXX3z8rDmd931qwpiLjt4RfA1cPQQncDWMJTSueXaDHichy7aGDvUGn48DSwsNVtmcDHByJ7nQ1kNCR4fgok6G",
  "key25": "5hskdgyPSAdL9XiNus8UUnUWy8ZXx8harYffhMeEAtevS7Wz2Lb67KyXmMSH2ffmKuXg7nQ81T7iT89kMUyYyqcx",
  "key26": "26SLoRqD576yLTRkL9jkm3x9bhw2kT1UbHQELzovJNzPNwSuTa8xXMhCRqnP65SHhvqn4ZcFjjb5BxmUQYXA9eKE",
  "key27": "5fzincLg1ayZ7Mt7bsksjKi8ZJk2ywkPK7KJHNshE9PBeMEvZa1tnMjcRwicEAz9TLT2FZFngnD9db48gGbVZmHj"
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
