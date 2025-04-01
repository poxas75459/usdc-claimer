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
    "5TvYnNDcvFkUXaASnBLMKTS1rPSBE7XGaaV4xR5Z8DdBinnexXKViYLcDPdef5gQif97PGGWtj787aNeM8UNDPC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ky5D7Gv5HUPdt3mHS8GasmLcmQB9bGcWPMXbXY6xmVzBUkY15XgUNeTfgSggsoWDgJfU8rpn6KFT2UgawBpmAvs",
  "key1": "4UtZ6MFJn14oqe8BCgqd1w21ZYpYcB7DwFymUuB1nZxrrGf9JqVyWrBqaDs9GM1Zwe6PAzyhdCEBZog4r2Y3Ric1",
  "key2": "P2TYyahjZqqLZshK5vnfffkCoxtw9vFKKMCrDkPmhe3yx1bAeSskUvvnBSHffLgnVj95gaF7KkgCFPbmw5MDAXH",
  "key3": "4iJyndxDeDKM7hi4RFid6W8fPUTwRDyEdY6oidbgXYiwon38MoLwjqFoutpt6RrjhBwEXt91TfNrdMMijfhHP3fn",
  "key4": "23dq3Fooiqpmk2sEraZK9d8WdDbxkuTRcUHvTTSboQhQZNVt658wCNp1xcXXkLg1tN6CXKZ1gdELdTgsrL3WxFNJ",
  "key5": "5Nmk1dbjBu5ybdDSezm1kg2aAMPbjEbSeUiVsseC4fsijTb5NreGwhFVXGrLzrSG2abZj9TXQtMciCW8FKPDSdpS",
  "key6": "5xYrVUQTsmADNp8uZgMfyNoZxYJZ6D6zBwtnUqakmMhWyCJ9DNXfZPA7uKkSyzSQnsZUW22MMgtVks7vovxi3XAw",
  "key7": "4aEh1XhFxQeuPfxFJqSg15aAs3z7zKaFikGFS1F4ACTKmSNnWRU3HQYECNeMPvcn8UB4ebt3DXK28H6jNgeZgQRL",
  "key8": "5dBhBRCERyFpC1xcjNJVgecEVoqUJMBqyFNb4F96JzyrzMZMKQdhu6W4dHgPHoWnveqvPzFpixerSpdGNxWwB5KR",
  "key9": "3Vqq8JeF3SzpqcrdCiZX8QQVJEGPgDuBunF5dzcXY8yqYmA6f8YuqLTYQDhrg9ULRQRKfBgQHSqbPYo9yKSVjk3R",
  "key10": "f5cTfJBZcNJJnoaQd8RNhcJRvSsGG3warZ9iPu5YvXqvJHxSpnSbN51ePeV514TZy6mKmMtu3LrBwrH9y7L2Wqj",
  "key11": "PHPx1fpdLRMmKff3zrvRcEunrLxh9x47poK98rd3vCohm6j6e7p3xuYgfSvGbupr3Fwyc9oWe6TB9ebpzzPHpE2",
  "key12": "2UYQrZ2h5XkS5KM83p4UQoFYg7SA51i3z3fCZGgyvFAmF4JxwShq78Gb1rT64iFbxrZpKizAG6ZyLzzLfSewxTEM",
  "key13": "xPKuRHMB78WCWrtYtEyr1K5yWq1n7Sv9DqqeXL6qQWFWTec4fQsQtjDQXHDkiBGdzjCWmmigiACUVh78r7e3CF7",
  "key14": "53wwbL8JuMJ9K4UBYS4hFm8NRd7dsXD4snS6WaoHdfFKLjcZUFcV3FVe3zxQbQ79jRV36TXFq3mcKKTyijsBBBk2",
  "key15": "4XpQ7Kqx6EUQ7v2TcevqdoAHCsGqXgaTWCo6YEhoegmo3oj2zf5gt4jnJoqiUJ8KMiVjYXJjFFXJR8smZR8RDZ5x",
  "key16": "52HdeaequYbNi2yuv2aijteF9rkZSF7vG6QKXq3NNtFUwDsWP2BoLr5g5ReWwQ2mtDxNETSpZFw4wMTKcPkstLEx",
  "key17": "4SW7iYhyayvB82VZZZY4tPUsPhGGyCJdcA49FwcJaEymgfnMTmvSNmQRasFp4WEpWqPdQcgkyYZmSXr1csGFMEps",
  "key18": "4CeNHTGD7enJ6V1FiuvJRLacYF63MsjE65pV2Jcmeu49Dx1j6J93gQwgQzrpkP3Jd3jfDbTUehb1qXRWn4eq96Gm",
  "key19": "4PAcEYtqgvTPxp9DBpGZRcruz2gWFXC9JuCc3nHG5KmvsZG6Kj7uQDuVqGNMd9FcM9uk8Eh7rxNPLzHMJzBGBdjz",
  "key20": "8USBSZjGsU9m6oybkthagoVPAiGdZwHbzPuHA3KUi9FSRXtEpTqb72iepEJReiC2LBJ4yFgKi8u4tvDRpTQi9KC",
  "key21": "4Q4Gp71eTd7RsEb8x2iEaw1vF1sDRVvWrAfj4Jod6qPjAf2sKrApsPKCTfpT5cosWGJagrkBvk7dmJrGduUxzi8J",
  "key22": "5H2ZfkgWR5uJxEXrALNLqNcX1QSH8rCq4vZhRW2CN1Srjmsxo19tCWjKhVn5sePhGqpzRjD25D3DwkrDvVsNQ2fa",
  "key23": "5P5t93dBZa63utKiJHoJFAASwWdThU52BVLe352FQNdkM6MpTB1QZNzdChJir8fqysDxcQFmDvAtFWCeRJWBW1Zi",
  "key24": "2Z7LLAfiHFyYf6vYpojYmCRd9N5f9xWWoxtsyyXZKVfuYpQSrSudidv1sPP4L8jC1NDvx2vDPX2zWNa1zLzByX1a",
  "key25": "59HVmsPn9kXqnSjaF6U8Jo1bkUHH33aA12hnBQwcLYeEp6UgJeXe9hMUoRrCne7aBFGF1pqQYssTUoZNfU8oqAWD"
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
