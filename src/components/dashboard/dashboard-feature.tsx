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
    "3wdur9o2bcY4s8m64wTeH78EGTg1UYCwrRzwm92QJEQLrAZNffksT5u271xdYcnEUzYypKTzZ3ZTa7A5ZUVgnHi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "659VWhZu3DeeMddaNHNGb3D7MMNJpV4zMYAJhPkafoVpurbeEgjA8QK6vvRgxc2CnMK7P9LP6x3JVWKtwApf1LWc",
  "key1": "3y515Q99Sw5qmyXBJXBAbRgU1QM9EQeD7rvyJjK2tfMvMeCRz7MBzFW9BFM1TrStN5HfD2CfcgcgCGZSAgTNshR4",
  "key2": "5MA9ifcjXFw3Ydy2BbFm1wPo5pDn8QuikEYVYHcJj1e4HqvnqjZ9KmZsDqW7bEQXSZaF84vGuBD14fwPCeVjhzcC",
  "key3": "9z1NE4wv6JTm4ikV8SUQ7vXvi8hX622QAmqunUqt8zBZet6y1hvvPkFfoXvra683o7crCX2a2TLN7cErJPqVZYC",
  "key4": "4o8EAoyqQLGfvSp8UxNVWTc4d5NzcmzYJy2kjaAwL65Wd8mjt8Yzv4yFTzEZJF3DwLCGBYXfztRvEAxvuZq2f2YG",
  "key5": "5wYQd8cCNLcFwcosxEfTnbC1M9cto1oSFD7dddNzikK5YCFpCDWGWC85Li2LBkWEiNbKDEM9ahHdojThJrbvFDgP",
  "key6": "5rty9EnmGfXBCKfvfk8Mk2da3wzgD1hzieyQ9D3v6Z49T9iQP93Xfkqpbi79urqoCdxK7Ptf13gSLiw8K3jUebmd",
  "key7": "65YMeCptpf8UySEoksnHimryYPQnpE8jTjgKaH8SmZQUUu95Y4dnBHTSGVCDdWn1kQZ32Pa6WQRx13TkxA8gfKxn",
  "key8": "2ThWvs8vUkvvzz1kDuf8VHycTVe9rq1GoPYaLAVu7m3inDwaF1butfCsHzTWGi2dNQqLaWKeTCvcHeKdyJyZBzoP",
  "key9": "21F5cez6p7nf9yLNNknVtjKNov5hAZp8Uo5CTb68jpAtfcEWQkb8Hk4LehKJ5ymFwCTSkYu8dm5eMsm4k6bNFWPc",
  "key10": "KSanKMfF6E1BP1rp7omAjTT6CRkGKkN3mhfQw83QgkYxwWRKos6ndDUGHgdaFkREtUjHmFqrQULevoMxaRHemRt",
  "key11": "4LDoBmLD8Y1sRgUkJB4Nzbk5MgPMNgxqsgaJoBimpZX2HEQgbhJdeFQwYb2xm97cBUeAmZ8qYRo6QpaR5n5oozkM",
  "key12": "2gjf9oGwqnL8BBVFhKsNDUnssWX9opHZdhhpjJh4Wjhr2kJVahxFsMheEMnDBoCmZZ7zCzrXH8o2TeWwHMXv3qg6",
  "key13": "2jkigWKo3NMJfovipKXhUSj9xpdDgehJsQgfYKZNJZdE2XGVG6Xd8KKq9zLF1gkUUW6dZ5Fv5ftqZLPuRDtjFzqd",
  "key14": "Ey4M1khPeuJunPzW373bgzVcX1agcRdMN1jQmP6uPLzNC3WhWKFrGMjDC7oeBthdnYv4asFjLjGjDVkHRooEKhD",
  "key15": "52WfafvLamDbPEafqoP89eHCcbSamBtv7q1tmJSzhd2PmhFPhiizw7Q48pLLNjYfQQJDjcponJWWXc8tk2htNYVc",
  "key16": "2N8GnW8rQf8YexxXARnBy6sS4d7jg2CRfJXXsRP7uzgK2c1MEYU4DLeZzr7uv96o8rUUv9zA4ZPjUZAYasPDbqZg",
  "key17": "26gzinqUC67ZZ6KQRSCp8Z7kujox3Kj4TjqkXRBsyYceauW7jKRE7gXgZCwnzjTnNZPNAefAFi1CmN77Kgfvd1a8",
  "key18": "34XF2EBUvL7UwbE3Lg2PbDkgqqduCwU2DaKfrDetfucjTqsAVgyyRgckTbgKE9JGwa2d6MhToQGoEpYukCJDB8LM",
  "key19": "33gxyxo9xfhweETcjpoyieUShtxUoCC9Z4G5VtbfLYHCegb1GRTygj5GL3QxyebSqNFqVtwi8Fjc4YCf1EgUt6zQ",
  "key20": "5fSipsYKuiM4m6FGaMgtLn1AJh3ZLrZjKG4wd2G7BxhsSerSbxNs85YhHbE1aMXV3TDCPQKkWUm2a9dCKGaaLxeo",
  "key21": "5Djtw6WSTu5ndVvC9KHnGex26yXgNT64FYBcyyVct7KWaxtq6XAZZc1JVrosBrH2FcBc1reAPVWJQKRmU9yuHqax",
  "key22": "2fu6EWr9ZYdmMicTGgcJMHXoYrn4uXEhC1p19cZMMFAcPMS2wiQbVZa2YQzBCt32Dnf3jyXZthbb5xCTFynvHz7v",
  "key23": "22J5X2jBfjmsGz7TSP5f8PzrCvFoeUsHhaqWbqLJNTwwNDAomU4bZCxGrf6kwUkC66y25ynN1pQyiGrBPf3krGXq",
  "key24": "5DJufXf5FZdgF1znEoP77oagQvZrE4UmMWpqZTyHP9FoCN7iXAhn1YQ8UkXpYLoDYQYHEnhCZeMHtRXcfX82ftGx",
  "key25": "2Mt51TrjPXif55U52nJQgqfcRWXzwQfYbLsuf7EBYcpcHHP7LeTCRaStZCf5mBhN87YL3JBMpiknBgmAPmfGjMuJ",
  "key26": "3PXsKwZpqjrUSTG9zGSHjPHAhtZd8fWQSz8BB3U9Tf4Z8nqbD1b8idZWfxZ6vTUAW5qDphTGEzA3YMcnRFwQV6WF",
  "key27": "5mRoKa2JTG4SDzhVsvqsz6JfZEDyus5UAmKzFWHH6f5Tj7xJNu4KvrtjeJ73JNtpTQM6xgiaZFXL1PP6ZLwDzqhT",
  "key28": "2fHGbnfEa41EhWpyFa9Pj34P59quZgKih2D1mh436Fuo1QRLaPjVBcXTAsSWY9rnNzwE59gTDJL7KsrVn5qV4chA",
  "key29": "5MSZ2ZsQyYr2LsdpE5xMzTqKqpiD2KWtmknTrvFmtzqQiLKQR8HTMcSuDodFNjWAMMDFkqU8g8dwMUbR7vvcxCR1",
  "key30": "42ec4jBgaEPDPaT3AtEgv4URuUps5HRXijW3XjmvG6C3N2cg6xYQASGkjUX3iYq1LreysUwobUSWUov9XpBSg6M3",
  "key31": "23aN38vhiTQK9CMaqY7CSywFMgZjWPmbhUKTqqdkDky96LTrUcqEgnP7F1ybSFdHhBb6HpBbhnsKto3xs8F4CNoH",
  "key32": "266audQvS5zpNh8cQjwXP6N4tq8UFWNs4vzyi1odBDBqGR8UJrCHAp364FPdpg6EYnHu7szjaKhkhF29ZhokpA5K",
  "key33": "524cbJZt13SNcH7DMpErBUVTzS8werkLeFjkfBGQhTK9VotUULcSCuvDbfxqVJmQSfBLptcZ3gnarFq2rTtvGtiq",
  "key34": "5jkV644hYLqiN1myocbG6mjwikn4gB8Y8mb96sJGNA8qsCr6UXFNYNQUmT6n6oNZ6iuJJREJR75N96Va988V5NPR",
  "key35": "dbMENcnKH8LsBvJSeMUy4EzES9Ub5UQopN9KBGrHrAt2HfCykYW2uKUeTYZNNE6HvTaFMiMbhxmABZd4iwX2YXb",
  "key36": "3X3gonY3pbsXGEpQcHnaLzoEKxPPZyashqjsUhNUpKeRkZ84w7dLdAmw1hRYgdk5TGLQvjRSbjuQn8QZNBExVYru",
  "key37": "4hmCSR894hrawWHwraUkZmvD5Qvc5f6kj784qWLW7tNdKRuD76UZweuqk7C9ekpMEeN5MJUCqRt65gkgu26iFdjy",
  "key38": "KAtfGo6Ga54UDdvN7W2icHPjszL6vaJU4jjSsdF65ZJe1TWiBesKFZijVXhDe2sYaKzSnYR48B43kpqeMosayRr",
  "key39": "4cwTAJg4R4cSkdtiLT4KEpgDUZzv2ZBHEfkUtYDM6etksqwFCAxUmURHXDceKCiUL7nZxMbBrM9QQnBzARWUhEvV",
  "key40": "3ZpmbrrLt8HydfUR4KckNZhS1H6vmzD9MvsV7QJh7j3J4gkko5k7vbHHUASWi2MS2TNWt3acsUpWYxd3xkAK5UrP",
  "key41": "4WjXP749CDVYgaBNUGNsSaGbzdRfzM9DAAbdAhFzDJK2MU8t4zFSdZjVtn5oB561U5iYLjqYzwvBCzpm1XBSG4bo",
  "key42": "n6TcCSiXv2LNfPbEpePwgBc7w2p71BtmYCvMrtgXmyyYytsjnmv2u954P8kZDdfU3RCpq5dZnDDLh2bRecCHCjz",
  "key43": "2EjPeG4JqEJsSNimLBSxRpKCaQYfzUmJxztMZTMFJw48Bi9CdLJQK3iBjGsH3viQ9iQVpXxHzTZSZQPhcPuM1jBq",
  "key44": "3bHegQDhnbxiHxjXcuDzpvCXUmdcJrSGrJ2qJdxUSQk4PQg94eL7d7ZwUq3wozrXAVUZQFrQ9y2GW9Pg8tk9e5AJ",
  "key45": "2BqpNqYDjwaqJ2VPxnG1N3V3cC5A8SnJ8WQ99kM85S2NPB1RY4sbGyiHpQ9sVyAzd3WgE9GbDEyMNCLnWYkhe1mJ",
  "key46": "4yWabEw1noQTR56afpVf1MT8xissV6ixuQa5nS3Lqkt93zoNqYZGkCpcKZE6xG9kby58ZADA6ZFGuyzeBSDR8GP3",
  "key47": "5A9VXtFz9LWcszPTHbDuWw8UAVv1hHB8nFj5veizCptCViUwtwYKvLc7nCVKKoevzyiDkz76xXX1zAwmF2pkR3DL",
  "key48": "12tixfcqRYaB1dzuhZb4YRWnyw5UqnyLK2FoGQP7RyLkTHG5XdzVi72V3euMgZXVn6XAmHDMkVBvqXtGMJT5d4y"
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
