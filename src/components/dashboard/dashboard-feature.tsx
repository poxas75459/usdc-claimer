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
    "tj71ES73YEgkMSzmukphg3sc84CvWNYvzdFoKRkCY7ZAur89DPQvLJep1aNpGcaunSx5hovFjrebR7DgfuJQSWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66T1hAXcj951R28t9T9RT7Fdpyz5Ds6Wp6eEMqmvjG9jKyiwgYuQXN7FXTREwxjgPyfaeyqkdHxHkjkUonQp9h3L",
  "key1": "36K3icYcnHkMrRTNcZJ4pbz51kYPS6TPcV6JQHnNUaA3ze9FMv7VVs82HgUEKjrs8vZkD5E54vcag69Y5raLqKGn",
  "key2": "3Cj7HenmtCVyBprFKj7uBKqjaqFRs2zKELSemM5P4uXf6akXsDi3GqVMUsURCcmMftxht7FCW4AksCbNgBJewwkX",
  "key3": "3hQGomnUHEaHbmvUBb3pgpjHSKxy7jjM4kf6s3MJ5wf7nCotqJ7uopF2F4DtFVrYbVM1QYg5TiC4FwX9ETAMReRC",
  "key4": "2nbnj6Y2qjZgtQuLr18g5UBUohYEHiukMjhWYGPNbPWW5GghArR32qshH6CNHeTh2AT6pwrH3s5AU95P6f6WPiDR",
  "key5": "2r7Wm3D2bRfGY8WsmhwGdbyHXbZmuJUx71foexYcKbLBYhZYRNNszeywNSDQfW4Ny5WuWsyNgwbGgz6W2RNztkie",
  "key6": "e9szRdbiXyc9c4eZzDa8u8ZN3NmZ7drZFy9SwaspJjcc7fQuxUD9xtoXgwzvBUxay7d2VpjP1i5sjZvXJoF3yBx",
  "key7": "3fQR6wF9WqQkyCTcQYtrAPD5wrQD1gqsfkGNcv6HNka4aiCeNEqPtLHP7fFX83c2Gmaw73QGcwwYWuuHhbrfFoYd",
  "key8": "n1NtkTV99eXur4B8jpzYsUvpeYC5kcJorhV5D5ApjN1E8FwRQVJrRkLau3Tm47im3ssEi1NJkjAPQygTpk6Uo8m",
  "key9": "4S8a4kLz7TKxZYwDwzJjhv4N48AiaZjz87zm9ue9v1gq1ZDuGwQJD9unXDehLrsQV8Xg4r54ni8fzJ2tnGAKzj2D",
  "key10": "Yw7mHLvRQVDd4P1ECW6zQi17c8Gc8v1T2yNLfZxEMBFZHPdvqcLDLsspeg8KQZe57sCBZMZ3Fm7ZYso2wJVV5EY",
  "key11": "5hpSCa6CbsHvhV5tHLaCdjqGcniHDtBxQvMYbEu5mds6zbvKMaqmfMJ8Dy2o73oFjGU4cdPduJQvX7W2GMuDmqfF",
  "key12": "5hrk9CVu4gnCCcS2VWAqFQAJgGdRT7zyqqSHhdvALc2CMCSQ1yBtsYiUVFCJXMoHX8rfKAJNQ7QrLQXfmpzbZkrS",
  "key13": "4ffmN6pGD7tWwxXoQG5g2jB6HTqMx9daVagBWjr5VaHupLER9JimSvPznDs93bRHDDcjk7vmKd6FrjLqPD9JgnhR",
  "key14": "4dvZyvhWUD4qW5ZXBDu5dsaUzJL8Z9TiVVMT2E3wVikYRvLpRC8JLsBaWszBF2186D9ggYppvopZZ7XbTfgs7Hie",
  "key15": "2p8z8ojh4XYr4tiwc6s8YU65qA8HihUbecWNzjLgrbZ1y8XX2hfXHSjVEHZZLv1eTKeRsvEU427TAj2sPqZV4xhm",
  "key16": "2FEM57JJKH8jQXJZJnGLEbgF4o3KZtrLg2gx6bYhP45FwCzESdegtBiRckztUAYrQjRPfr5VJbk2Vvz5jVQ2G8Gp",
  "key17": "5EY3VZNd1YxHAQ966g1SLJwyJSchHBYFDFup42VSm39PayDm8tiJXNrBjj46M5KeRXURwkBLfM8CQB5agyJXEt25",
  "key18": "5WENxy6yNCbHP6if7413CMwVdBP4wrZBptVMwyt8zm4bKUo6ftcgXYSuKso6MuXWqbrJrDNjp1q7LrBJooCakZsv",
  "key19": "66nNMMgZvaffGgXhA1WGi2sr5nCQHjqN6sxb6hahJJNWnRKpLqGxnUT5UshSvsrVokRW4wpyrf9DcFsHotwWGdwe",
  "key20": "YkfExZdgNRyB4tFzog213qkPbgL6fUE7nhtw5CnGkefT9UwYP11GC8x2EcVdQvMtvnmzvWzMujsY8L5pgUK6S8T",
  "key21": "HbJ2VgegG6RCTDwwksnChXA5f2xbiC2oQWK8Te753jhPdexvBdC1H3dZ83jqfZ1XQTgASFW2QecEsLSASsVtb2S",
  "key22": "2X9rmkWoqhituGn58Zp35dRUhLddHuNd8EHkXCb5kUXUP22jMfobrEMFvATpgWhMknLTMTAPvgf6UitqAURmUe3E",
  "key23": "2QwMihRbLaKDuiYgSwksLqKFD9HZ8F6hGFFKxB1E9g8BciWhAKmBrD4qy1o8cNAajmerwcLsXMXPNoiUKGcvTePb",
  "key24": "25iJMs8WN91bW2S4e4jdRiec7ZDBZPXDz8urMGjYsaZm4LNEKCdgDRdAb9nGKzWtKnwCK7PFE9UPk6RMAfs5iYUw",
  "key25": "4b8L8hhyj5RdmwqjrhuCjt2GdgXXaZ68dTNNdB1gDfsQZcYUQE6gpYn9wABmMU7i3PqZgR5uqZBELqFyWpaX4Y6v",
  "key26": "3YSaVjZgdzpyMUBdPUzHLT8koSnV9MDwhBEfGJgampjx8uY5ScUTc85TwD6jsXuKg5Y6ba9FWDGHN4hPYPFmZ8Ws",
  "key27": "4cxG6j9vThRbYmupzpg3kNQyePvyza6abRsDFesjCuLS2uDsiBiYNBtxz6kwYFqybcbpAdg89iXzMJKUeBpaqYEr",
  "key28": "3YcpuUKZiXLjjGAXKRrP2GfRpb2DC6CMKMjXUJQvdPfeXbXk6cAkfKNffCHkWVasJqzVR9Tj9fSs3KmBerjeago5",
  "key29": "3v2RvfoTE5TfQr8yyowqPp5GzF2LQoJQgV7iQWVAQ9qFH2x7nqxLYnRwDrMaSaz6ToGM4HTZoDCs5Tc8jL4xKLiS",
  "key30": "3DDi2TUPMRDtFTNzae49AzyfK7YCSb1i8rASjnhtok3d9Fyvt6XZnvbVddGRh27Yfs7Nkf3hwMaSxJLGDMKapgM2",
  "key31": "4vPHnJce5GooE4ahpYM1HhqrwjAVo4LVM7xV3ygLqJcAoWZubux2LFR8QGsAG9uD6PCxedyc1j9sPEYZ63V9H3b6",
  "key32": "2gAzQDWXHNSzhXNAhaJ9hD7YFT2uSyE8pASuB9rPwXQgu4thstfvxX32FXoCmvvAEQT5Sgn4QnkG8tthKixbh4Qu",
  "key33": "2faZ4haM4scLePpsSNpHJFvFG4iiSp6hMaohRV5eoaTw3v5UPdUGrds8osgKGiSSwnr5jrfQoEPV347ZfkpAhN8D",
  "key34": "4ErSqU7Gsaz9NXX4DSDdbw83TYJMZMXLnjfeKW2w2wq8TjWTX9hAU8NQnwMdZD1rPvY18aDR7Cxc5EbuUKXrcNJ9",
  "key35": "3No3XdX1gg5ekXhEkHjWUCvVWa5Ks66Kg6AGnpaQQU6uzgzK6gqLJuWA3XFvPqAt7GWzY7zfeGHZU2dJPq5Dqeog",
  "key36": "3jv4uhMZWpyVpWKz2ocj4au27iWuU6xwUYfY7pkNR5zs9JLVE3np349B6UqU6A6S6cFJKodxYL6a39ztM8afjWWN"
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
