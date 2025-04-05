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
    "59qexTrAoWFPrPG281TdLoVu5ejJWrg8YM6Z3LZLiebNweXxfnGwHKXyZuQrbafb5G2YNKjSrVxEjFCK9n3ceuT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MRTmnsoXkznNr9Cn8KfVAForew69ASJP9ENtDktLohsdoZMycqDpYwdksTYgok2XZoxTVLjgjnAVGvjT1ixB7uw",
  "key1": "3YotnAgPDEMJ1VeWmdPb5S26e8aJTN6e1RBQMvza72HRrjDssgjW9y5SH5sQX4Q2UejQBxj46d6MvwyvdSijiMUg",
  "key2": "5qDouKa6qG7XD4BFMjvuR77r97WUNEcCQQoB1ztKh8itxCdxXQ8YbkHXRUuG6orTrNgd521iQurvdJA7gGg7D5rd",
  "key3": "46bfzoxqawp55Kkxy9fS59ngDdq65a5nYs12dZVoqVq9Dn4yp4oFS3WAqUuiPVdJLRa6GLP77vWniAM47DPDePCg",
  "key4": "5CqgU7FEzdjjMgQKwRiL65YFSFP5VYc1vhKWkSRovsDS9ykBrt3JpyN1ubcFviqcVi7zYb6mNNhCECkrj9Xa6NcD",
  "key5": "5WKVb8JBS9ETVEBEv5omawAPxjgdWP6qp2pPpT4xcen5E9cx7Y3yGB82cPHNCECMP3WLwJgducFAp8FE89FiTprf",
  "key6": "ZmXTLaez45ijAezSv8GY8QfaB5w3gpLfdGn1d48vRTyTUVY8mZsQ62edUbRzBNENHy8jc9jsqMruYXBU7kKsZLe",
  "key7": "2YgqGNebyiHi8FxTv5nct2gmxPsy2a76D4snw3BcM7PX6XAZCzuSU2FykWEQo6hKTfUYqJCvgeAkAbHcfgo79Wsi",
  "key8": "rXEAWM6qEvqv8Ah7WC7zjjmL783GGdxxnxg5JjGrXjn9GrtdbCn9XqRUsLPm5EyMEPxMPsLqJCKiko5HN55DLWT",
  "key9": "5uZdHTxH9yKAx5EQkwLFNghae4LhSRLvFY7MXHPeMb6Yax9Z7DrabnTenHeot1Re1xAz8zzCkvUnpA29g3RgpAjA",
  "key10": "484tCxqNQ88cM9s3VRYR4pZuPdKrSf6DvpzNDfVrwFpJASTmmgp8wFd2hnx2pEEzCMUQac1apyG1Xy2zkxUXNpQT",
  "key11": "2u3MGYWSKPo5hi7sLpW9KT4BgfHmgAtK99rm4A5K33X2qaf7TUaTstoQyrGWzTZEZZ1SZQabotLxpYuKau2M8dwm",
  "key12": "3gVX6K5WxGAVs7RxKkezeNvjkBjDUTSmhZzniR1ZBSVNb8FERekHRFRoqsqhezt8jM14i8hVuBPxFnFpg5VUxvwc",
  "key13": "3WThY2JkWoaymQWtekMWYVybGLRUece96sruT5jjDZtJewfQDm8rm5YSo79WLU37YonZFwFeSfsHttCjkbawZ3iB",
  "key14": "5BArjzmoubHEwd9nLBYPLXYofBFrNTu3MobaeMwy92CfnmQW9q9k1DPSX3nxuRjSCdpST5wAXiAtd5yNaB6bCJ4d",
  "key15": "3Qwg9rQzyhTU38LS2ZSDjCNzwCp7LTKaJkbMi9K7Ftzmeo2GAuD8RVd4QFLTCmugUpWeNENn5eBYqZjv9BeHyQXW",
  "key16": "iiWF1PmrCunu1eNJe4HxMMHUSuWdiZKrgsiEFMbAC7neNkdAZqGz7t7xVXNQfFcjVnT1xsp9wiuBMqRdFp5SfNV",
  "key17": "4Ep2tKAJwMcNjumb9x6zJyMqJiKzvqbKvBVEfPvc8UQ8JwYLgCyBq4S5oSeYJ6Hcnq7imjtzVy1LsHzZmktxZzz3",
  "key18": "gKkCKf1sBT1jZW1zQs2dc7fg9VbtJ2nQH8MwVtn6aZPPyQb69CRgNHjHn2dUrhUwDbYHoVZbfTnht4NoyfWf859",
  "key19": "5cWp8TdqRtxdzvi9vgeqfQKyhhCzCjTLaYGQspxSjwDRLrLSyBjdHpisZJDtBe3jjokhKAiC2rHZNv4doYS1hp3i",
  "key20": "57AYTkRVQ2iE3FsVS5biNCoFASbJnq3Ba2KA2YDdyARXNkKJSXLE2V3LMvRm4oUhSWgXMzc7q8StbxGpAtfgufAS",
  "key21": "WCdusAJtGkJ6tDnN33j3RaGuraV3rjjh8z3XbMNWPegXVeQiDXimJq7kBaUDT9zAytTNDm9CMJ6hL5BsPpXdV1k",
  "key22": "3ay9fDdmhQEH9VJqymdj1FbiHBfcK5f1Foz3nz7M3z4fEKA1kPvqF3DokvCnWvNC3bXGFyACDeVzNHrEgQJfchsL",
  "key23": "4WcxAHfLPABUHR7FZQmf5UPHBVgm8mq8uNmckjGxBTFabJVPW5ahbM5F9Na9GSPbRcYGSDfsEJRUC7doZZo7KCai",
  "key24": "5jDEhG3DuDd91LbmcaYcWFQPjKqeVGEGR1YRDfhbo1p8wPN9sh5DzrDuNqMJirsvmXjMYhBFdiugd969eJUJ755h",
  "key25": "4aWV34eR2nkgRx5xqnhLhQDoTkfEAq3sFDKzHwUb4NxxT1HE6TVMvfPgG6AZ5aHkYZ7PraHaSDsonqAteg2gAzwJ",
  "key26": "4XKR8bKcDxBbsKa4T29RWFosqaHMN8dZA8wVYR54Ty5URBjkbmwLtPK5Dfprcgc38NYzqXxEF85UtJLR5bFmZsby",
  "key27": "QQSTnGBySa17EEfL5hTZSjT92vVbzpHwYjtv88RP7SvKk1ba7US4GpfYmtGuS6cr896FBPMbht3ErKsYyLPpTa7",
  "key28": "3EGprzXdSsueamTxvwSspyjuTnFQWrcG8mcTHwuDexBpVdaEtHovTjx2Y64dP5qQ4krwx7mptKE9mqC41kTHgHSD",
  "key29": "3riUQKzUy9vE1eGui9En2yNXuSP3qdfGkPq7QpQCRE8jmfc87rwcDb9qvCWY1SBaVnZ3UfvbTaAfjN77RpCbM2Mu",
  "key30": "2n8ZJcAdo8gYmNqPP21vaYMnS6iCx5AeXvew6FDqoEdDmxJQDuVCzDFUqqHs12WAXWZNkC4bPTMhuS4KaGkuU1hd",
  "key31": "2jkTofMKVwbdK6YwLjbBv6WnyA9vz9mEoheHAjUXfwt95ktDgcscQJ9MM5FzyPcnJ5Hp27NoUR9XcJtWzpnubifs",
  "key32": "4LHzWtNagQYxK5pbBVGrBCjNMkVjp94HsGoYuZSk6aFRY73RZSnDxQ7L4vn4wDgc8hFKm5oD4QZfjzPQBs6HNNff",
  "key33": "3DgzeJKb1ATs6x8ZUtxw4vyCfz5j4Evg6GgvpZnXYUZPDnjNaFkLTsbAKPMMh985tBHbNn3RKxnKpyDvpKEV3icp",
  "key34": "5fZ1gF7MaUTZUn7XjAN4PShnt8EhNiM8QBBgZ6JEy7mRoqa9QYKsA57FaHJV6CXU9uvqWsx4S6kEtZcTP9CuAjeV",
  "key35": "RAsc2xzrZtdFzHzhSX2YaqctxHNcbGzpFv11AWKmj9aU4BGpdyH4Upuq96WWMohVSpvjwzdVLBuJpowpxZWEuRL",
  "key36": "3ts27yD1igKRWFHPG8UDfNyHBYBA7cAtepBbGj3L7zcmM9SKUjgv8wdaeU9xr1uQmHBgx8Loz8EUBRf9pCbLqyGj",
  "key37": "2UiGyjMAthhJhLmSiszY2k9QBiBJ8UEgYwGtWGCGrtNc1951W3oxZqoKmgB7auD2tySZFfDQtKgAVY1H67fxHsvL",
  "key38": "2fnHuec9ek48md4fhyPcunT1atviqEtgAdF6vS6zr9MjX1V7g8Q8bqgHkKP13rbM5cZPxybaqCw7iWwWJqLDYDAM",
  "key39": "3h4RwkdXmxPaEotZP3DfptcbqFQR5SuvRBXy1VGtRA4kgZG2eroYVgKnSwSqaxScM1zduGKhGTk7gCYRQ9iiFTrd"
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
