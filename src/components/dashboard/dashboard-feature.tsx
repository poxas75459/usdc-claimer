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
    "3qQzJ22444im2vz8cg6i6eBaH1raDpZ1kPBeBCNonbPhp3hJjMRievAUm2T3tfPnwRw6DBZqmJRYK1utqyfLMUL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xbB2oAhCNqFgtgSswhpai6bey7CCE2ptfBnhxV42h5aphZcSjSENjwBF9gSBMwgXameNGZU9HBwi2heAPSLdait",
  "key1": "4Y3ouXDpcfw3511osk65dBPSvLMBJJSR8VZkrmaoVYked77iDGLtWkuhLGDofY2n6dzM7zUHLVPWMjWfGmy8Lp5V",
  "key2": "2fS22woukFmitmBSojVqebrH7b5tE9qr6DhU9UhrRJQSAMzyubdVJwksQ1vxHjAVmnsrYZ5ZTrUVwYzUvKXu28Gb",
  "key3": "adyhVy6MzyT3WDk4w1aSAxuVPmgWLHuNVSFwFXpvJUzKaTwjw55Sq7zoC5DcLdWrEYvmZg3vp6xPCARxxfECBXj",
  "key4": "3rStezHCGGKKhL9GQA6GFxyycssaJZpX6apJH1ADr3nkm7xV5h9tTjcLWa4rSE4kWvPX18CeyGyxontqNWkqdRqr",
  "key5": "2J8pTHTqs8fy4S9dsdXrZ8vKBgpmxaCr8aWLQxXM8pgavTyGu5ZqC9Xwpab5vxLws2p4ZBkNK7yoENmHi1JWu1Af",
  "key6": "4kVBtRg3KxijQgcxaqfWW815v7cbjhJmU9PGDQFRk75MWYjaDDB4UM5UtgBSDwHPL5E5siUiKLbXUon1iPVFb2mB",
  "key7": "3YfcjYMmtVsdXXdPK9EuEeiGTDjYMDG45NnEBGa6yLMiuxDuthsSLqan35dtVPzbN3Kenoq2oz7Sm5wQqWG6K33i",
  "key8": "476e4rq6hQwShn53brcir1YRZPmKvnQKdPkAGKprLMyfEUQ2mEXME5decZSNhqepLdhAKLhfKjNaKugytDyBQVG3",
  "key9": "3auHt8FaBC2QKvYEGBfddRDpVBYUyNHJuyvd9nP2tvDQZXgw4xNNzgDtLNWnvWDQwhpmNeW94bsPqNjMmqtsRYip",
  "key10": "3RByb6AySBbCcXVku7dTqyx9JnhyB4doSKwC1QhHeEk8jfcpkS5524nHoUS5JVCQTfS2kiDPgpdpdxFU6CPPMJ45",
  "key11": "31BEz2DK78bjsQQ1rutg8tvEeNiq1W6zom6ArbSeqUD1BJEUjstsjRwxwi8dthvZqubUo8VWmKw3Pu6EDDkGbwGQ",
  "key12": "3ppzP6Yx5DdJwgBDq4gwFiyYX7VpJaEkHW5qUX8g1TqY6P3t6mGP3L29GWTUWxHhFzp1CYgBjSABPSS119esGY4K",
  "key13": "3voZh8ryoQo4HL4u1nitfwCtgKQA1ECUSrdtm8kcccM9yQiyssYhJAgnjBcBQrXKcotPAngVVoo8ZtEQDYUAtvfq",
  "key14": "658AwKyL66bm9jk7AFqZ3Ar4BEfCPejfFnp2nYJ82sb85uNXoMZDQYg4vG55jNGdQv2ido1Xo2w8UkzwEqEJruoa",
  "key15": "4JEEBB1JxuyA9GQjjmvwbBuHirkQHWDoBpAtXrZ49CetJ6oXZasxhghuXxGbxB4c8ECRDF2psEjdHZJcDA18ZmjU",
  "key16": "4jdW8wPXT7Ugv75kNN5cdz6yHqT4zbBsFCoR2sogrN5gMGm99eBfgegh7WbwtoCN6ieprn9h7Tc3Gzm5awYhXBMe",
  "key17": "nxsUjuv8vcWKWu8drsPUuN23pa6qo8nNXUPZtyeGddWsuJG5tt3W4k8kCmCkm8RtUZkQ8YdNpsHNzrrCrC3vRRS",
  "key18": "vZUdYDnqbqvMnmy3FP7KXScjyWbW1ozw36tEgBw65W95nPP86M6rGNkoVxsgWai3XG2hWLAfTPGoAQ3hEnrjnCe",
  "key19": "yVnFG2LJdTHU5XAW9WcKxLvU6AgMRcVpTFyd6qD8aUs2MMDS18ccjq9W3RFv53JjEEGwtpzJRB1vqVkkXSjEmmz",
  "key20": "5CwpbnoiHBPBFbbfWNHqzoTnpDSCvEpYpnMB7QYNVwkjovKdJ4pJuQykF1Pb9bsMQMXgxcCZ3ezNmid5Bn9BLYLZ",
  "key21": "3k85T5FNAnycf4DNg28V5risvCTgzKJBzzANv9e5tPgdF5QvDQbMwChAjVotnEgEK43DmAKFw7DAHncc3VD9FEjS",
  "key22": "5z81bAsKRDDSnjevn4zZZkMAWEJTzQ2ip5ukUQrAmMwdJGrebqzAJStH4VSfVaJ3GkQcaqtYJsLABjhi5QnNSgX9",
  "key23": "5i8tXkrPXqzfRD9JJaYeT76TqxKLddJwxUErHX8cE24viwePrKVTTSHEBvoHzLWXhANTspmHvgtMyQkzqKUQv1yM",
  "key24": "yM4epJU8CFQuYzpzLHnMNzx2LBUk8oH8fv5Pxkzv7vsrxqE2dnqgJQQXkMouDKtftT8qGdnytonG5thSQvoAY68",
  "key25": "mXEmkDjUSKfCaPZsRVGTPn4ffvfmFXvLyEKXrTEjVusuNcc2LRvVCqAjcxfiCBuug33rApY9nbc2DCXvsMfiHK4",
  "key26": "67MGgN2NPpEmeFRSZBBmBNbzZKCRrHXRWYzaCZYjpV4rzTs9Gxm3iXFDFpphJa6NJSYTui8mKGo2VRgJdjgUPYqo",
  "key27": "5W5kHqYwNSWkN5BCWFdNv3ya81QQ9z3UFDxyoYj4W55r9HArZWYJx7DpoVQkdBUwPuhfkpyWprskJcdyA4EZJuBC",
  "key28": "44cpZFDXLHtscrSiFkCxW4UqU6guVwC12bzpyT8LsxvEdeJ4dzwVguWKpLyA8QdQVcux8TNgYRVPDLKPUGpUrY7p",
  "key29": "2h2LHdZnxR4wsCePqSD7QatA3kR2og7zWm8opBc3YE4cPz4kBedj5qTw7v73AoD3CKH6kNmJtVa9pomhAFmtrvhd",
  "key30": "SQ2XenjxsZbFNxCDFnrh9doPumRZycv41ttaxReK4HPwtnBTbRVxfk21ZtYR7QYF4sHXArL4aiDUMnBPX7tSBpZ",
  "key31": "3bN3sTuwMfCYz9yzTgmEAEVirqtgXWEfZUdRMLa7VP39c7Dxukpq1czqWeA8bBVTX5jin6cNdoT4kEoXLxUAmcyo",
  "key32": "hFyfwcxtQUDBJ2mty7tUk3fQQowxTKRkh5bEEyEjzURtxNvmyG4QozER2Rsb7s7rqi5QyzmkhStE2L3HJ6PtNrB",
  "key33": "3QtEWRCL1UaiuqvLRxEV31yS5cuew7AnuWfTYAf4NBPjLGWFzxxGDLYhzwSHJSguseee1WtyDNCuTyH3xNVUqcxk",
  "key34": "2Y1obGPZG3SqvmEDUHkWmaTxyUvhcdzMMZipvbTou8Vj7jXU6ekBgyvxD5jPu1Z8F77BDjM6JJ3Udw2cwQdTbwCp",
  "key35": "5YHnz3DqHiF4uMmaZjpbK8q8mX8bYij7MNVTvFfUDWdCjhijMf9gNn86tCMMeUixPMzD9ds3deC23YTntcLPWNFT",
  "key36": "2tsSq5TkR3Kr3d6B4x3Tshmc9Jt3umT3AoNYHe4dnvdDDMYoVban1vhmtSAAgjeRsoQEtK34F3NAnvcjtGpVhUNV",
  "key37": "46JJ8WJsC6Fd3EFMRdLNWmz5Lfhnz88ZqxfBKtyqgTuJgbk4h3H5gBhwfGfmpQgqGQqssC6wQKUSTHbLdPNAmZPA",
  "key38": "2DayJZWmiMZEwBUU95anr6Uymrq9zJGytVi3YLrsqaDoF7ywtyKsyPLPd9CwYaUTbtVJy9HMm4f229YeBRjEaP9B",
  "key39": "1z4fNFyBBKwpx7NnjoGpGHvWtFL8rQMKQY9dzZtVcAcbsPwMATtQhCNikbVwWb6rmqshTEYEuySm5qWGC9VLixj",
  "key40": "37XTQPjwyUZT8yyQ4ZnTWPa1vUvWeggP5ZRZN59JCgEMjXGiXi3TE3rLtwTBLK4jXFvzzfpB9V9aKFji64iYaUdV",
  "key41": "3XKR2wdi6YnCULjQdRpjyRPjb4FyY4bceX7Kx4ExJ6FNuS2fqNVf2iC7VfEDwfCsLG7u4xuaxTrDy2iexLePHU7r",
  "key42": "7U9NLMGo3oWuXbxLj8iscjZhMfeWSpoR8QUcLdxbkMnjv2JFqiTFg4GmAdWCyPo6Y27chbfUe1UX3f5FkoP1poh",
  "key43": "32csVuHLWG434i86sXpNRbgCVG1oHeFrAv8gJCZcv4miPTnDD9uaFwv75nqY1EP7CgygScGYQpxb24M1ZFq1tbWn",
  "key44": "4FJG6vSE6RAYVBLhQF8nvUpryeMspxdtmci31g7w84ex5ykVYj8KTJpDjPz4SySqRYg7GjsbE84iLik3gUGmGvga",
  "key45": "4qygyD1WsRxKos6FRRHLAMP3VvDgzHMWjsSSYeQr6cS5uSMmuQcEVXhNe7AeosspNhtxDtKPUTdKL5azM9KYbz7E",
  "key46": "QEguJwox5Kxb8DuwbwxdTzbFdK83iatCq5EcVDLkaUvaV9T6o7EpRZMUyHrrZ8sqDQr32v8oMXuXQQvdEJx63qu",
  "key47": "4NNNU4Gau5x2xXTajGWne8qchxbPZnnSZmUYanc8JS6Q1SfZyegqEabkS4ypadUM1xwq9UQK42A4RT6GfGMctQhC",
  "key48": "67DKhgnwM661ZbW2ZYtKbV62wsBNUfjFgR3UJe4S7rrm34qPY2RDFjvt98VPYF6RFHgfC47s6Hx9U6T2ZLgRCQn8",
  "key49": "F4VmkjBehfaBT5E2PbvPqvWwZeAr9AkALCuH48fJfayK6HT4YBAimRJvZbFUu8AR3SFznMSnNqCurDDWgs4yr5P"
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
