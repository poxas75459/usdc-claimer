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
    "4dNUcbo8neXRQGaapukyaRGNYWZ2GrDYPUNMDRfwvDzEF1LZFwzAAz77xPXJ1oVjcVtep4HHj53Fae6huw7sEygp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cMPWycYLURiNJkAuBr1fadivsk2pWPdyv21ptG5o37bJNDRVgj2uQ3p3bNMmDHvaedsSWNAH2v9LqtapVoUqQYw",
  "key1": "55SiczXiukdxx3fdpawDt5TkAjnzAr1Mhkd4HwbyJRJPQQr8BgfTjPg1hwjbi6oPGy7tQMjvGcUWkyp4izY3jAZr",
  "key2": "8ZwExCye7mQpcfNKyHQ9KqBPpZHUgzsJygxGTxVc2N2ryuiDK6qPmcSAC7Gmh5wxUmi3VvFrGb5Mk9AHEAWFzHs",
  "key3": "iTRCGdQKy3oaHC6Y3bZiD15PRqkWiEDhkbNKgJKr3HPRZcf2719dvD4ZooCtfxmapAyyWdeLcPxnGCQu8CDoGjk",
  "key4": "4z6D5yPsyxuiDnxsmxVEaoV8iqz4bdXTuSULuMbzxZjSAnvSdhdmLD6rT7WyJuqVWhEUoCPKdxEAPWK2azaEXMjW",
  "key5": "42mAMZmZTakYqANJKDTDJ9K9xXzkYpFkZuNZZNYDbEVvjiYRR72CtoSyFDJ7c1nUiB64U9yvjZeLQNxqsJpQMYX3",
  "key6": "4pThAe49RvYU7YSsuhWZnN2WKgK9feWtpp15xkxLj6SMsB2SBv92acov91nKmH8gtNdKSCbCyLWyhAzcdtuPwqfC",
  "key7": "2NHgfU2aXiJdwVsEJvHSDRBnduVqLc7XnQoGxqyZ7isH3mXWfq24uza7SCUatE23Ukam3G3otVSiZC5Q94PBcrPE",
  "key8": "2tHqTxjYUpghcs8nk5bTizmhNBG1gnsWT73RK5he6LWuviXLYQk6ULuAsadBSkF7rs6htPGoAoafbaFX5AkUfF7r",
  "key9": "3U6jXG1Mi4Lxu3LwbgNosufeMep8nDGq5v9LiZ8dD8RH9odyz7vNybPyoxEULgxEkmPcnpF1T29uWMhGDvRGEJvo",
  "key10": "2isaXtjjHa1mZaeg1q8eGmJJcxEp8paZ4VuDRTLUvTjydDax5ngiYbsgFShmVkZauXMCMiTKGT53jnRDA95Dmxww",
  "key11": "49EkhJhEUvv5hwuqC5ExjDLjMTJ8HGf1XLKvu87pmD5zsSpXSguja1ajfQjBRQnYXA1gu9M2Byys5mbyKx5UsKwG",
  "key12": "49S5Rfnr7HL1fYeaTpCYcrbauqQ4LhF8UWku4h9BxhAwrcjqprfsLW8bdWFWsYbGHJ8dh1nGBExMHcQeekLw5kKX",
  "key13": "M3ThTacHBcNZAAsbmhyCYshsdotgwVmB2PezAsZ3LSBqqC4waQqqtrV7g3ytfy66eEMuKou8wC8uEM47HFf7VkB",
  "key14": "Je2EAsRxN4FbwCL8UmgBf5f1VkghpEJ2KyrTrZ6aiodosvanLHJP89DpiDgqAvjLVhqS2DgmKN8AHi9mjSGVWTQ",
  "key15": "4HV1JVCJhtEhdp2savdwBLgoHr3c4o7RTbRyPfhcRcqAAKwU2MbAaTuLDYqbkz1FNf5UfFPKkc7t51fwcqsrUBYU",
  "key16": "5AXxm2eickGtyrGNtxeHe9jzyj7PzJSAHwTu7EzpQgKitHyn3eQT9cVEvfdhBjL6N8EoLNfRGo2RCgz466PXW2mQ",
  "key17": "2smHRU7rbzt89c3C9s95RyG9fbvjWcUJApgGQ5HJtWF95oZcYDCoizz3BMJaSzKip6iSpGw8FhNjH2cZFquyogdY",
  "key18": "5rEQaL7AjQrYm6sC61Y5yufoWejmgJwxQuzAXwBxZhUBtwPoZUrcrpj3GJF7jCRUuytfqFEZjMUc7iNRur3ymmFd",
  "key19": "HEU4rBRnFeA5cFh434EgrXhbSEyJgqcG8mYb5iqcTnaGxYZwxz9nCuZ74qk7EiSDo1VCw1FFcAF2defBs24s6Gq",
  "key20": "4vEDpwb4mLgkiUncsQxPgd4xrCuLNPYEXim1qQrNPukXQhipdUPiRq6YjA8THjZYVdZ6gKandpd4FqYBjwzKAbyj",
  "key21": "bgJ67WF2sFsVxGKovcN3nipyH2ZuQw1ppxoLkcQ5Pe3Xb9NnjA3s6drvKmLdJTVR6aHENWAWmAnXTmFpBs4pF4D",
  "key22": "3jPiWHU5kA6frt5bHFQNR7LqTx47kR1v8DyJKBGoxUH5AiG4WjtMeTxxJLBUzgi2ukv1wPQrvmAApD2RjyTsZiSU",
  "key23": "2dEwkUBbBtGaKpCMAWyF4ySx2wnT6otteEcbKnSFrHHBpjJ76g9Qxr4etunjmViQqeJWk3uGNGrLW74ZXarPtg1j",
  "key24": "377cfujsu93n2ZCyTpdcnzVrUUti9bgmq5LJvedC9voMRjWfmWnWriLhiEwAt6VaMgD6x8buF64fSUmDmuNsQrdN",
  "key25": "5QiF7z6N63u9DynCqPZJ3aGDAYYVNGso2TfW29Ang4FLH4ZcMdqijLhzJnhBjYviXC3xkukTLhh4EWtf8i58rXJY",
  "key26": "65WF5es8mpbBPZkjEZDzv8SLRC36EW4K9cTeENG9g7P26bg6S4Y3Nx2UfQieWXzdTMQRsZNhWxDNZdZYdwUCfrm5",
  "key27": "4tQfzQj9HZaZRDrVYM1ke4BcS9WHQzaLbNxyWF5CCqPoiaR3hkz2pQUobUpHSUKukawEHHquvhzm882zj2Brpk8A",
  "key28": "5AtvwgKLBrB4r9CZRfJuNGf2Wq6RxL7zR7DxwA5AXRnVAXbVZT1Nt3dZsb77E5fnK6ayYaDZZuoryRcxuBei6y1b",
  "key29": "5RDfQRzAspiS2KXY1q1RHGStW2C9uaDS2wtVFSLCKcCCw6BFHbowX9EXud2BhtjkmaijR9xeYSKUTxNL5aB6Ggpg"
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
