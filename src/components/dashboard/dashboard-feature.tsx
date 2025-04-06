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
    "4MeYQadhcAfRdpEWf4gfe1ABQRNcKfiYQrDZ7mhMT5HgjN6XprSbQkJHUx6o45ZJECAJKhbLyrbGEEH2CXytAHUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wVRrnkD2EH4a4N6yZDxi2MYUk1PaV9rYxQT58vyeaD4qeKtMFHg8q7dxnhhwe1AZyTtHozY6MruaMegCXzznRKi",
  "key1": "4JKhP6UCRz7CmCTBr8ENtn6S7R3WKapcUK3cVkR6Uf62NpphiauvuTGjqEDtbYJAPXHzYBXKoLRgpnsYfe4XTLRa",
  "key2": "aTmsaquekdZTGCrztdvWaMK8ZAHAzBHeLnq7UGvCGRHMEUM8MdddC5HVYKHADY4qEq8QNsaLWs1xvL2ryhybw4P",
  "key3": "2DHQunJfMV8na518ueD9fshDCukNLkw5ggCvzk8fPkvcWM1poWBDtPktLB2YGJ1FsmWeVJgysfp3t21i7ojpxjad",
  "key4": "5tB3fY6JzmDLMY2GKCFhmDSJnL4o6PozZStbaXZBskHZuwvKABPg9nqr1GhTzPZPy8p8ewPLMMD1xS7Aw1JoKFcg",
  "key5": "rSG3Hm4r5J1NqZF9t7UiYPAjCLiCHT6SnuC3Z5NoQqBwdMTSvYCbe1iUz9PENmN68psBaGSdTdnWXoejQG8pr64",
  "key6": "2gt4zCmNM51sabRCCLLnK5Pm7fCUEdVpga4oqCBDohZ6xifGnfwAiVLc2jxCT9AgC3N8iFT2XFre95tghAYhHtz5",
  "key7": "4DojEmqCvJDUeBpJohSv2WXtVwJUsBDsHvQqfPcPJiK2NL1h6SXJft2wX9VVCxspXsuT4GY7ftuLTKySixQJkXHE",
  "key8": "qqs7TwfvPrDYZefbZmH5yc76AhANPhNRwr1NuZ4JiteLyQtPVDaKasyCoF7qJXCBfRFp9m12vzxpwX6cDtwm2H9",
  "key9": "5CQLAXZURWMQEZLH1LBSaaqjbKA8E7R5AGZ9ysHceo2gg672hUFE53dzrA7hEF1zVAJxRudk2rr5hy9agmwzXTNL",
  "key10": "5ApJ3kU3EDxX6q3j86UZ8adW7E65jkf6A6AJwuVdpnn8Bgv2qojES2eHVWuD1Qta5S7nWHXaECHwWcE1MRqnRNAd",
  "key11": "2KZWku5T1ZEqwRkkLEQBvt639QmbUhifmHZdHR8o4jYAWuC6FgEAv1opXsAomETARoyP5vy9J1HPMSpYkoUrf2Bi",
  "key12": "29Xq5J4HHnv1q1gYHfk7H5w4HT8gVJ3efPebaesRSjAQRbvf9iux2Nhobgkc16qELdAWbQaDzTM7FjqaV8bJBvkN",
  "key13": "2pBPMLGh9BvFwijgKyxFZ9vaEQVfk8f7U1TkWsEYo5JkVP9DsXYdHHxEL1awD2zsN4Zw1vjMjGwdFVivv5aSG39h",
  "key14": "2X9R8fQoKWSZkGicNTEPBgAbnFzqVs95uWi4k6zrCs1ZbhZGTvAtQ75vB52vDMi4uvNVXQh6YH8TKSGnAH9WpF8r",
  "key15": "o589i9tiQ7iTXkBu6tyD6nvoVczZiwYMtTXKLC7bKuHD8MDT7K9rXEgDoHQG3WrjUJSfthCzrC7aZ7fiP8LkHFj",
  "key16": "415rSCq5hZwWoyq4kohhyxziDaN2tynMdwzhaMofEvQarbFjScEnwQxMMqx7ghHnA4i8Y4ADTBLg7gsdTfDcga8S",
  "key17": "2a9Q3QYdb6K7AR3MDzyisczi1WAtQUoDwYBczLYGbfiAkdj5moMcHMC89XTA2bwbTQkW43u4kEgX3Xxh1nk3FQgE",
  "key18": "4fRjbipEVEnKpDCtbLhAwgx9SCzgo3WnaWXdwiirGKB9D2M9hxdwEamwPLe4HRUwHxny9LgcmSf1dWc1vXYw3xxh",
  "key19": "c2oxQrndXBeZLNLydC3w4ZFEXJtmhWkQR91LHCn4dfsfVDdZSDbwF8gj7GXcn2cCRArAiZ9QKa9KzHj18jCk6Zq",
  "key20": "5TGThFUkSiDGg1LBjsDZR8g38M9MVp74HU3GHsbHtqVPkKortFVGbtRcnd5GQWSWyHjhCMMUfMShLrbdCtBCUeNC",
  "key21": "4qdLDb8okDB6Hd7ZzzXzRvVQcC8vPMaXpDsJvHUMWzFrRFtAWZxGTKE9M8MsK2mv5DJVxgWE4rDNxcjBqs5Mh7Gm",
  "key22": "cUgFDKkQ2xdaWeTH5a7bCZ8GJ86Adh7k86PtPGbTqr8w83kJxgi58DEMviRQrAMeC973bvHEPtgp4etQ4DjHANq",
  "key23": "5R4zkCan1QVPBSFA5q26xGCqeM7UiMWG6gELwmHgWWPJ9pbdBnpKMEiTAgq73wBoubFxdXj6eAEbcYNfyhodZUmr",
  "key24": "A6Lb5MVFXecmoX42yNNGUAVR6HDvaE3h6Nc1kHtZuz3bLdAKiLpz56U82sAeLAEz1XUKxDjvVxJz1TFuK4LN3yu",
  "key25": "3nMZzuVmyRArftmypDbM98WZvUJrzNx4rukEbxsun536133P2a9EiHTYdAGaMqeQuikqJ6nsDH4mwzUMagcp9m9r",
  "key26": "4TnKLKYowv1DtjYqRZB3dvuiLhSSnSAFAYDG6z4jbT7wYZ6nMMN49UMzKVJ5umHicxVdFw21PczXECQTR6sKemop",
  "key27": "4akPcd1JJa7zgZSJG45ZudReq9dTo4U4cEvpVe8fER6LpapVm4hzUyZPfrv5b576Y8TLMPtwGLVzELbtzHZrr4UL",
  "key28": "4Qr6KhwdjktUQVHUPag6CydSgEreK7XEGcsYxxJdLu9oe1iWk86TGsUM6PfzXb4xRF3Nix1DTFXsUjRPbJLBNPU5",
  "key29": "VaDAG2xN4Kyu2HPBcTxQs7EAYo8vEt1DkxgYvoJjh3G3JUzeaCBemBTZSVkeFnQA9oxpP2t7W9YZdfmsWduSUph",
  "key30": "5Er7uzXRCtCTXNzuL8jpELL4AaRuznguaMkJWKRaSzwevUBs47ufM2np4A2zv2tdDY1pVcm6SyE3FPYeqgurxCiy",
  "key31": "4Wc5yuLtgcsEhaKi7txLmej31wrEd7KAAAnMZHB5rZ1MJMVpDCvZrYKrAV7xsGmMijsH48ZgDx7nUGrw852oQ7xh",
  "key32": "3wdeaZJRiMZ18ocBawjksQPbF93t6c34Fp74PPjsasS8nx1X3SgxpoimyEUhYyiMaTdLqWegXAMtZaStgj265zXn",
  "key33": "5H3MUbQQN9vDbzHN7bExqbPifdULHTGc1VVKUKjT4K2fLpuzMKoM36XHhTA4vM2JuBrsESpzMoq1vSGbHkNc5sq6",
  "key34": "44gcrazZH49wKVfFyeSxiRYG2tewewF7GwAz1XCgoWcXgiWG4pfN4M634qg5mMi3Rjz1QBTHdYrJi728kTsJyAMq",
  "key35": "5rztbbDw8mJga27F2xqGdLCfPgJRK6RVQ3wTbHLFnWaKzQ5zQqdqJWUVq7ZPUcFsokysp1i2V7bG4g8TBqLx73PG",
  "key36": "N6YhxqtRtVFCbhZdgnGZqr31kUiWJ1wx7KYnocRjMdM75XaHhLvnqntkMhskVWw38JYt5TgzesZWSgKhNc4suQY"
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
