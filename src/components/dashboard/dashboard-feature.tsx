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
    "2AUDhXXeemJvpTBdd69NjCZ5BBNYg6yUjQeJ9PGntXUG7YrYLwcQYDNmWeGnzJaYXawPvCoXrBdGtaKsG7QYYRKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xANqM2AogfZ5iTXgW5akqpCjMpzim89av7tivPNGA75H2n4kvYymqFayLc6mn8i99GG98GRb2BaFQRVAsRno3is",
  "key1": "471Lt742Ho5J7af8SY4DpxUhdwJJW86ytrQ2mbABZVG29KQFZyD2eQBsMkhJF1hLWHM5qhrEJtxmsWq9K7TjRP2s",
  "key2": "2bcVnNvgwAGsVZjiPMJ7FGZSxHr1o2czHVEA8WkGv9Vy3XPVxG3LfBwFyaXyEDsLbxEECmjb1GGqrkvLWinvcDJd",
  "key3": "61gzwP51kCm2w7achJFKiF7r4JUvxJyKMqFKHDAUQSnZYommndURzDeahyrTKGAHkJhNyfnMgFUQJ2FhCLZD1iej",
  "key4": "4c5bvnwwMXbZg3MSQBJ4zZYQp6s5EXjxQPmi335EYTHQnfgKQXoJ2RsjevQAejmXRQYCUrSkHcpdYfCBU7ukBwg7",
  "key5": "Bjp2nUKMKd4hL7o3qvLH7UFuCL9vz8PPN1cjDAuTnmLDCkMYYtSrH5jiWWfuMP5Jk9F3Bva9rAbrPJEcDFJppbU",
  "key6": "3pjhxMQ91LrSfU6T293AbQ9AezqkRYE3pzruimVAUtzxszkXNTxHbue9LgBRMobRC2RC8LKLJ1yXqkeWyTED2PiY",
  "key7": "4gS8pjo2JGFu1WrHnNMvbfW8QnThd93Dnwwb61RNHp368zKZSAFcXdiwF4My6HtqXsd6YQXUWeP87M5AaEATXdh8",
  "key8": "4FfZp9VSpbXF5NWn7XYCnCTPHeK3JAoxt8SFsNTrJsCpGwNGiRUzgTmkyhMxXv2s7wqi1g2RpimExekwo1kKhjGR",
  "key9": "3nfBuRQqxuVzphRFHp3mwb3Tqbm6uQLhnVg7zdevmP19GtYmyPSwuj35UvskTE298mFTxQuTjdhJSiqZH4RVwZXj",
  "key10": "3ofFAdZ8nfqUsH5ZW8DjGV42T3gcgzAdQMojX7JfDyrWUCxWoBugs4fnGa6ijf5ut26gCH3zuc3w4JooCTKQ6LWs",
  "key11": "rtq69bZALmWfSQ1hiP2CgWFE3ML48LQRbQe8iQvXWywS9QCJ2wYrWFjCQwXBtAgHN9KKNHnTp1hPTgxa5jTR5Kd",
  "key12": "5AZaD7k2TnVdEP32MpjZbR4zA97nwxQxM1g7huEPm7X9q1Z2sdTf6YGKCcXkMV7PatLMSCgi5m5iMvhprYpo9oXE",
  "key13": "MyQHm12mBqbiwScpQW55zuNRKDWu2vDestm4QHS9mKWaDAusMTwSCaAQpq2ZHJkvXGDtCrKE8DxZwUHv4iAGLev",
  "key14": "26z7WLPrXDipyVHP9YS9KLSJxQPGJ5Zjor4JRiGYaiSadscFXxLwnuESfpUiRyQqi6fZdZGqmngMSr7M4CRcEaLv",
  "key15": "5BVbAbKbsrmL4ABuipZqfgCyJFLBBhddjhUKiKokatxDR5bsAhswPaCNveWocmv6xmubJHPnJa5k2WVyDqYNzszj",
  "key16": "2CxwdfT5Vvv2DNMLTKq5VyTcmQEbaPb2VMxh1NjQq964kYAY3zgW6RusG52ieyYhh8zEgoAaFkoJNCnncyRmQD8j",
  "key17": "5eTeDD9Gqhw7FQeukAEUsZ5JnNJsCz7GtiGk3omB8tRUbk65PqFqZ3VvsPPKFHCbxRrfnTBjagWW2nDaQnYYHubS",
  "key18": "4Y2tj5mG4CwF9rEFa9zJeeEgHFjkaxaZkYaRBbR9V45sj547F1DFpZ6eg2GJmBX1mfaagqPeN2ZEY5JYJ1wSxU63",
  "key19": "jki3VoRq4kcLUZkynLgjY7dhesJkLyZgtZay3NDa2Se6b2RLKPxAqe5PHBnHzxNFbPD44EuJb6gmUYMxG4t1nAM",
  "key20": "5teX9UnGLnrt2qCuoo3tynVb6mFMsMvFnGGG3G6G6uFfoGbYMhcFnqdUGfNNpnhcnxYNakKxrXb4e2rSRFUi14jT",
  "key21": "jHmnrVTJmPdUmCFbVrJ87wC8Mari9GvgsUjZ2p8JJHmdkeefqjMWom4jQiVZpXnUuvrwtb4gDZxF3JH7cBBg5cy",
  "key22": "4vehcpPmdnjFqdg2GLEaHqGgiSjZuTEmFMUZmYLSUwyGoXy1Se9Udb4RukaMNMK1ViWg2zEjMqpMEQ5rT672dEFQ",
  "key23": "4D5kLQYtCAqkrZLK8b1sz1yicfxA2xkpLnMDnJaQo5BZWuowB8bmDjghPgucx95XkRfkJJetEyyKMHfsBBcHtXVi",
  "key24": "4rLzhmjc65d5GrShW9XyEgEG9cajxguWf79AsXiSB9rNUbXZ1869VXfEp4hwSH9mGFi6Ngoi21ehWeGgiVfoRG5r",
  "key25": "udxkPpvFRCiwEBedERBC2XAsE9C9Z4LRDTepFjF1hE8RzZC83meqhMJqtfPbiqxTvnMZ9D1kRqrYeNevQN6n2AE",
  "key26": "5b17ngDBVUGdNUzaJ6hLdHb44L7HkLbid6vSfafvd75cmGaJ1q3S6Xq1GxGPAmKKkc5jumX77H62jy87tT2KTTk3",
  "key27": "5Hder3htF11TiRhMjuxpYoERZPHtCfKSvbmSWjaURNx5ouuKEK44PEUwLLW9jpF9wZECagXWRMr1QEdC3W8vuGyT",
  "key28": "CXQH63QzQ9jDsdXWmoG4BkD9rGa5pAnfAYCXhSQhoiPK4GMFPViH1W2NdLqudJPjCdZVW1Z8fVs6ST7v5r17FUA",
  "key29": "yGSqdc8yF51BZFgCrfpXTwprCYoS8nqpKtFcx6myyqHDQk1fMKaE1vRofKxkn556X5LGveX6yn3jJXNVKa9VhHt",
  "key30": "4a4tHkaGUSCdWMRtJ9xs7ziYzDHgDVMgz9r7Bjsnji5jUTaAqXpmJibxoocL34VF1ad4PytxTasiPLaLDqxGAfMZ",
  "key31": "64qHf6TKfMKgZX6ztnjPfsF7ESccDiDj2HuaWL7nvsFszXzneVAqUUvDUgHHuoMzHzTZQL3aYLqBNgQJdPoPD4SV",
  "key32": "bnRtTcZPJ7jK1MiBZeiP6V3ZSJoTiNZbWb4afZHbu2Vpq2LZjoHz7g9DNgWGdbnuXKQeWi1isR9vmimStwnijt4",
  "key33": "XSDxv9A6vNXGeKZQeV6TgdDDVpzaxPYxC2yKbfAgW6hvx8qpEXa992KqcF8jG1Y9ysaC1XHABhazsj6u15XFHp8",
  "key34": "2jS5P6o8tF5r8Z3bSTfJxasBhF7B4XU1kFAbdrYWSfafDJ7TJViUgsHTLWQqv3STEzemb8ZePqvhiKT3s3oApps4",
  "key35": "44rbhVYefmKvcUnf7B67pt9W5Z8SJytoAgicBPTmPdaXqPqZnd9HgRb1vykM4cxDDVxsw9aZBABEg3AAf7jFzPRu",
  "key36": "3we1vcoj83dYh7XbW6bdkEyLco4ERGj2di5QX6RmD1155Z6DcuMiRBUMXjUgw9U4TfMb9bFEgx3jBcy2UMRfm5RW",
  "key37": "4tcSGj9ipqDzYGrrTbFWUnLsCs7oidSkWL62Tn6VLArWcDN3Kjp9vaLCq4eJFTP5LFDj33qNnj7uyRm2HxwpAfQo",
  "key38": "3fMd8NUb7bxsfVt82Pm536n5CtUmX1g8dRtNT2yvW4eMT9FdCW19xW1sWJvpWVaGAEUUn3Py5Usfz8muk6UJ8EmB",
  "key39": "33eHLewAAcTG5y5eAJNYDTwDzGFeXFR5jMmbNEApBH7ypDmFQmomavycVboDkVaHWvjABzQy1nUjRKumNPpF33Y7",
  "key40": "2P2qGiNdMdfzbVAHMijkFNytwR9KyRXDpHBjUefrvAYwUGaHbVoYXes65RCwtFspzqtUSzW199c8DdggoH4TQXhJ",
  "key41": "b9rGfPCuisH9wY9K7vhf6BTKiFpFAMPAD9WJVDnN66HhP4byXBPTfb1QEU6FzXgxACrWe5x4zZa9pyhVGLmmMjT"
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
