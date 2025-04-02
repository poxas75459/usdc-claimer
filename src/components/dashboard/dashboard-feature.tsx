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
    "6YYr5X4SFamXR7DcwkWHZBAEYTYe3PWJuRVGjKGmCotW2JYQNETYtgNWjzRpeJjaye5jm6ds2a76wwGma3G1gyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XNPsSn8WaxXX5ALMyomX3JJm1TcnoyBzRh2P9AsYkZhHFPKWXR8j24e9DxzJPXduN8GZ4R8tgP9frLu3ahXR5MC",
  "key1": "4qxnTTYJoN7FMn2Jz18U7J4NyUZHMp3S3XbFWDhVgUoSHoPoZDuMiBt5oH19N6WVYjHtivz3VXkLFgdLorYFt9Qo",
  "key2": "26cCb688asWrxPUxGhHVS5xsJkW5cyojjvSkmXKYj3tyrCEweLdFYmEt9698ptQMGEHAJYw56AMpgEZE6v5LtSK2",
  "key3": "2nU3RyFCPFFiu6yqwm6kbmL9hzjXkEj6omgM5jZUSm7dB5cwWkXk7kP3uqpE299bAN4E3zdLDDUDErXZB9DyTYjX",
  "key4": "fm6tJMXnbADoG7rNpNyvj54xecLpMt4nEYGVAXZ3LS6e3iffuxWifBRBAVYasexJjRrXCCCoZkszdFVR7fsPvEL",
  "key5": "3EqA49Huu1as9xEvH8bJqoZ3fy1yMEsj1cnxY5yaBnYGyPiwbjt5s5CWYjEW6xZ9Ten7pcf8Jr6uq3kvWNbDNmyB",
  "key6": "5sRojqFMfiqE3Ey5RrWKGMDhJGcCtpog3Aa9pvhd7AQ6KxLLyEcaZr6VwVgxdyrMXQNWX6qkKqGGTVbccx6RZfZy",
  "key7": "5NVk2o49L5k8kqfPSY9J7wY7fXpmtwUSHzz7A5VjWmD3avBtuuvhPgwUovKfjxtnHfQ2e1DjHHdvYU9nZHsnamgX",
  "key8": "26oozCmCXfakCbVbaVsHtyUffC7aRQYFPNxYidnkuTBkM59tdiSJ6n1uEcfLbvz7G6rMbZfuZpEMKZegTvRXGpqk",
  "key9": "4tokWtfmtWChaMhEqbPpfVX3Jmgh2nV11x5tqt8yQM6Uc3KS2hmNY8fip52ZMda7vFvptb1ucmk6ceoMMw1BuDZv",
  "key10": "4aCVuQFwV5TsB1yoCyjUAwMqQrP4XdqpnwUNTPgCMGWup3WBx3Qh2v6mmxidGvp2YrvhunYBdUi7KVsB2oRaGjzr",
  "key11": "3QzQy3128nCs9Ea7YqcB1ZppvZzySzAJfpHPv7GtQaxqCPXY3kCTafHupNitXmKWSY4T8VjSqYB1v6tP5LS7jSnz",
  "key12": "ihSosxmPM9yCrMwkmMssZULsqB7qnWqSjc34KD5DJxAhnuD1QryLxBgF6tb5YEPC1EvGn1JCg6ts6R1FXMwTRdW",
  "key13": "2AeJaGnejwBaHCzV5agX1jeVo1Pk3iWnkjFqCcYoeSm86CZXoYdxiBounJQQGFvVL348BFkansZhC6rVatSd6r2j",
  "key14": "5kjU8QcgLoDUQbaCzmhqcFvVNcDfRKcrFebHCuYej5QSnumA21TUWbNReYBZ9Gz78dJHS5yx5eyWmDQQWZ8ChD2Y",
  "key15": "2c4DWBXZTnqivXFWHmac8oH6QDzN7xCSoTBzeQF2p3ZRosb8dMJXvhpxutz5VRPQzufWYZYpXnfwdiaUBezHCG3A",
  "key16": "FPHMbShcx34Q29QMK3fpZCvCDWvovS4sHGV2aYqF28MLRqrWN4M2G6XAGj9h5iLoaSgv3ixEqbdnhqeutHTFqLR",
  "key17": "5oNKJygJWeLKWbFyRxu7BTGjX1SkjiMSwB9qCgX3VTWPQQwDXEAoZgAe69turRXFteieJb3fAcYSbsCMirVQVXkf",
  "key18": "4Ymq3XtAaMWmzqadxdFiLXj1rnncsWqkaSf4jsZR6V6iroWMzodXLaoUWgSmTpsvn2B2BLTtUAyFg7EuafuAeF5a",
  "key19": "2pYwg8vSjwANwAmbzAc6o17EknuYjoEatKxoXY2XmKXkf7pTfXv9eJuiRRagqPZ5GHgqW91aBUHsD5tnPL5bwCZr",
  "key20": "C9Dbu5SLC3RXpscPion5bbsz5F1f5bLX7QC15rGqkqmvY6PYi5r48omLXHA22P1BzLb8hAp183WKTQ56td6zkYS",
  "key21": "4t6ebQ2p3k8TAU4vL2rUCbEBE1dr1V19U7jRpNzWnXX9exQrCFfi4AzS7ec7GUFu953PAZAhxEUJRzRv3RCpGRLS",
  "key22": "5fiw2jy3V9VCznEsMYHje7FyVsLF9hTc7Je37G2gTcAPvVRnxC9v9vSE9u7p5WwSdaMn8arDyN5Rf9NTCA3Z6Vt",
  "key23": "3ZpiMbYAoNdehLeQS7DCgnW9tKvUsKQFzG1ztyumqbnty1XsjZ1Hvt9cibStvLTEQHv23b8CWoGNwy4fxr8PgQKr",
  "key24": "58Jz6VrYQXW7wtakeJ2KCwQskoprQvpbWKQVUQYmz2b2GNyukv1Q92eLiZgHtggF3HpQzRZrJUbuoTi5YJvTu6sP",
  "key25": "5bvE5YGwZMPa7zeKFGCxLwSQo4impvUnQqvA3iKZrSgKqBCAYd1qJ4b2yBye3YhTKYbbiKb1BfTdkamRVR8jFTka",
  "key26": "5nyRiiGfPzJyhL3mpGXyQSBRVmXM9VRsurPcQmAXj5us2ap1JchDQqCFb2yn2zr3R9uMfEz5mEvSajcYJC8SF65C",
  "key27": "4hMuZn9DQ4xv8DofSCv99vkk7BTVN9KiL5YMB9C8qUQtrcidNacUD6ijkAPjsBk79R3Ae5Q3118WcSYbQUNq7sSF",
  "key28": "3qSDrvXTDCckBE4MeA8C6fM88mKKZJCS3uoerAQc9VDVH351ZaajVsic8gRxZvD5JWWPBAC9oZSgf72iqi5PhaeU",
  "key29": "YYLmeggnj7uFXz9hq4EY7g9aSiRSq7ZxJ22PnGJHEdfopjjeC7REAqrGJ7b28ESn4L57Ly66msGPDZepP5LRRtN",
  "key30": "3hy7vPc5jmSFh6GuUH1FKJaJLmqz9moUfCxpM1PcLNtesrDi1jjQtasdBE7duPvFMFCJabmU8e8EhsrG9t5Zp1sQ",
  "key31": "4s814vMkVBon6o1GuWVwfuZSQoGjW4hKewjxcbKDgcfPyfbtsW7DzcHNPYi7VkaYhZr6uAmQYuoVKEa55drH1oiv",
  "key32": "FZ2L9mHh3H4DDhJ3xEm9YhggCss6UMdDechLTodtknV83NNcUg8YvEPkASyNv4foCMtBuoqErTnbFv8BngsKLsx",
  "key33": "4a1A9U2H1vRKL6VmsqRmEkFFrBEBSEemYdhSzhPaY1bUVPc8rmR35Tsm4m1wtbzP7zPJNjPeERwwBH7jXVHqPjNF",
  "key34": "5P2j1aD7YyBsKazM7XyZtDyo1avkug2MAgJvi5WvLopVm27TnCxjp8SPFFcysRGhnnRdcW6phEwwupxtLpaqfvdt",
  "key35": "2Ur1Ec2B3QYSiPCzrVWoEaCiUP5spMMPpXfUEVgbEhMP3vmfUmyMGZcq5dmCDTKS5K7iTqD6g9LaKnENPGLcrrgC",
  "key36": "Dw6fKGmiBzYLGpvwqZb8N88QKFX7kPpapnQLqnDRcZGBYpyyTG4wfbf6gzGtaes3zNi9bRMzkrjEsoyiD1Gn8DF",
  "key37": "BBaHyiuqrKuzR1jSvfQtxiAqQUb4ERyXFYWLEveoMxtQohdfNisogeQeLqVBEsHy7v2uNqvz289j9rBCUjywwh6"
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
