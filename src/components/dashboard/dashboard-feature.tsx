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
    "5v1tYzKev4crwHp8qgL5oUniTuwvsGfyS6L5pVs88fN65HAfwV1mfy6aodemm5gcF8LwT26wZbdUReVeHBqpfs9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hFaw2SnHcLBsrxNVHL9bYupCuH3f4hBqer69w6gAdto2pcFP9QUaWpoVj18G6qiUoaxov84LX7HoVvgfeSrPfwh",
  "key1": "551kUBJJ9MxSVZPDBogtmpCfzWUYq41xFP9D8BeLzkuwxLM5TgaTcghCQDzBNgGcYVHfnGtAYJwDpocrkbtc3wk9",
  "key2": "3RdzdBYPxuLPK3kXTZ2FqZo3ppJw5HcKDS4mTe582nnmk6bome3DzvTFjxYEybdxPug3RbRK3Qn3SWKytAQhziP",
  "key3": "3bzoGzDdamy1ETZdity36QByFn1rXpMmEHpTsxHpVSzmUiJzbS9yyQ9DwQcpV1BDTj64MNc54WKdDXA3Ga2RAvpw",
  "key4": "5RmTXToz8AKEEt2HE7B3Z6S1ntxoYz8rebnCwy3GjD3eWEYu9DETdUngXvgs7xP3fRQUd16br7JCPyzZ3t4aBBxo",
  "key5": "pM66j6F1GcMbjV41XYKXG1RWUb9tu2USM2XM52cA2hMcFNBhgGjeLh1bCkDHiGPTQvwXGvegDKo5yRXUkD4vfQq",
  "key6": "8vAWUTAFCmiiXTyWriqNZNHcNt3chKSA82SNk9WkfJGioTy95bRb47qmGfxrAVX9uUQJJZFE25hN5gHHi4XE7Nx",
  "key7": "4LQmL23HpYqTHiB2LM34zKYMPY9mXyhMuFTgR5CGitEz9KXXYhDSMSM98BvxyPLobMyapHJz5rxba4KW7SdYMtrr",
  "key8": "5kjPEu2J5A8rDaPNjo17N2mRduszZ91stMsYySrmmcZABPkAAF5CkaDuNH1EcXS1JWSQV4PqP1oqTaBsSQ3HaUq7",
  "key9": "3ecH4VB9MDNQwTQyzs5jqxfFuv1zeQhHCjfx2baYhQYQrKdvWo8zfcfMVRbFWiisoJ5GCj6C9BCC5FcKH6KaGzin",
  "key10": "5oVCfVAeVKcithP3aA4SZjWVzRmuAWWcyCqHnJ3yDSTuDQg5TeyxfzrKLu7n8wuQiz8GwhFcxcSTzY5bU9RR4Sdh",
  "key11": "2HFwmzG77tKpYVef8bphoNnhCGEpMWXtcd3nGobdT5VZTuc3a4U96EsXQa28JhVKCF1b3EZcZa6izAaGCjKa8Bqp",
  "key12": "4pwj6gtfYRADHvdKRCeAys7AfTbRFkpniaCWWu93jbwrcb3EBeNYPEywTgdyHJxWtvGozLLR1CDBiqNrfivhjmF4",
  "key13": "39kz5cWwa2hBAL3ZfgpGNMPt4KTAxJVkNPJDJiE7ZKafyJgMB9MWC2kZVjiskZrXyTGBgea1WHSsoK1uZitcN5K4",
  "key14": "xemxw9wT2vcf2jLKSkYC29fuESMj6U4QLepjjguqG3KmjMRCrDnPiBzXdZqqAqU12jJ8Nrux3XfdVk4fjkwFnkU",
  "key15": "3DefZ2bx9BNecZytGuseMf3dMzBTRf98fQMmhaGoTuvvHz2XWz4JBF363nnVdSTtMKdZdPBgHwtXXErwtrVvP5tR",
  "key16": "3NeyiYWZhaxKWbxQQmUWCgDbtXnTFhHCt1tagrowmZa5Z1dhC3pzsbEbSnk5iybM8mwQG2vJVRQQ7rsmgYXBnqaw",
  "key17": "54wWszbvoy25huAJeHF34j2jTyH3zx6eg6rHMnavFtgDF9aJ92f6mis4MTV5hRZ5BaehxGZcbxYzpLoxPXfCeiP3",
  "key18": "3CN3RyHnKocPDt1UhkuR9Mzf4BBrRSoExRS1vLpKcWUpB2XvvrcygRT8u2qoMzMxGYxk7Yf13xFqqJwAw4m4KLaB",
  "key19": "3ydP7z7QyETSNfFyvyRYJWhSurjLtsJy9XuJrJovNFHa6jQRoqS7M8Atj6n1chGuFHuBfSi267fFkXCy9kz1mXci",
  "key20": "2CZAAeH9hFuNykyD7vfk3Y6sV1rFe192jh4djVoauqk7DHZuTP9cxQoNq7GQzqaPTF3WneifKzdaPJwaJR5HbYJ",
  "key21": "5iUXLGTxZzrJjpr7VGmNmFLWn2GkNzmj97dD8L3QoS7Y6VPwLaVoWNX5EzrGaMRQMLVLdYihRqy3nr7nGeQ93zAf",
  "key22": "5iUMHTRqrRBkA7Nw2Vx6LCSFNuCaZvmenp25aPdTnqNwnEM7MFtjf4oYa3Ddnp1HmDzz3jCjdAstUqzuKZPRx1aU",
  "key23": "4a6LJZ5jY2TupUZvWfqQQu14cXkmfJTP2gug5XoRjuZ3Uiw2wfM5Hxmp2un5N8aWmh8eoqeJ7pkc1tkKnJ4z7xAR",
  "key24": "2gYNFcV6qLgcSP8f7mqohoPLPFTB1oGqZuQaQ1rLzQdWFPC66hodygjnAGqWMGsTA3H1aa7k9JESmwKvnBovokvp",
  "key25": "KdfcGvSdg9WX9dLJidVX9qRUPTJ3NJNQZxUk9V9uvTikCV32o3SufCyggJyKxim6RTpuRrTPLBFLndt3cUm8SXZ",
  "key26": "43AZgTDGGeKGA3Gv3ffXTt1zmSQPuX6sxSKVg8xv1uVQ2wnCXD5VTesuRw9rEGEAUgZSq7ghLXE35s9rF4T74cwJ",
  "key27": "3y5RNzdir9181GfZEXP4otf1dBqm5nzN4wjuCxByhSL62nCW7YVEyGHMeroifEtzhq4wQe9pnu6gE6P1XeVvujnB",
  "key28": "5QnsgGMCFQzoAJGEuTzHc2cMk2nqRaxKJaArJsxfNXAoDGsa69oMdxV34daiuAyuTZTrPvutiBSwn3vwRThssjfC",
  "key29": "coY25eZgB1e554gAkQDDC4LeTLUhmpwRNuUaYLEbZoFNdRXFqfAdcELvcsyYkosceJ73jijbDXtCMXSTpqFVak4",
  "key30": "5o1dqhZLPpxhHnSiRfxRivtX2dC7TqzaVhB3XTBd4QsYnKmhnJSAFWDGinNgibbMe7un7onrY4ipGeYxWQjRmhXF",
  "key31": "PGYvvKqJ9RRgtiBf7r7a5AZocVebmigUx8NfuSL8zCq3pDtLzpjDRrQnorG1M15YRkf8VF6W6XCU34Gt8BZHVJi",
  "key32": "4S3V4CNDES5qPfAPnBGEbF2b1DhxEUSKbtmL2zSVQ5bAGSE94uEejvv9Es8tQEi67Fb16sEdiWQzLsZPPMkra8GR",
  "key33": "gmg2GmpCr36c3NX25uc6Lu6uWo1svrSC9c6cAvnhweSVhBD4PqVW847Sog878yuAHTQ1mxiCPVoFBK9EtokjYQq",
  "key34": "55rds4UveZDkFXV4KJ8d4WZ4owpd7MnaJPnHZUMBgre6w22GJrbncVu7USHJLTctUC3ti8AVadkh544NrszLLLJ8",
  "key35": "2xfeJhpXZ2C2K3sbcL4K3GG52hao2GTUXREW5psXQ9nAM92GjJbgc9iuSkV51FkyQAdzd6Ts3d9wD66WKvNF2Nqs",
  "key36": "373WptumhGvUrGdHdPnMTbpY5kv1KizwKz6yHVB4PKiAQeDneWJMyu97z4ZzFAj8tzcf2y3hReumomxFCCQnsyEa",
  "key37": "2NqLqvk65CdzLVoqiu363PCmUwNPK2dhYi7HX6taxqVLmrY6eahEzgNkUgAKFD3JKeYVLey9YjLKJvfB1sooYN8y",
  "key38": "Lnjp8Nf2KCCSMN3yH7UEvwD8fJxonyh6rnfiR7WSVG6dnrsUTS83odMzaigtJxZgH8JNtGjPiL1sZvTWJ1VbzwE",
  "key39": "ZP3Kmqb5ezykN2WQezaoJuDYMy6h777jr87rebjQ3KkNU7bRoS3vUTtqAxeyTjPcF8oew1biKj2J5pYswPbAJLB",
  "key40": "4cghasNmxFnrd1GowS1DzFnxBf2xYfeJSk1JGx2musXpFwBXH61ZxLAq8GPxmb3DZmFjYbWFzKcgGEYoQmv2pRXa"
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
