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
    "23ovgGjML4UKKrrY6tJwUTuLtEdVTQwinwFsjR2k2bAux8D1dbA21YBcne8GcG97wKopVqHTRKuQeXzDTMPy8gM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KB4DzvZybVpHx6DKJ7LYo2xJMNnVnjPgoVb4ZRZwLfMX3h82XaWi7fNCwBbMJ11PyiWXBDwkCKgdhKDqdKsgjsc",
  "key1": "SoYwCZfBRzgyZ2kFARPLBhiie1vHKWnB53m6BfwCvhQfgRShA4PXTCKENAkRCvqXHkjRwzByzoaC1Mx28qUbZJ4",
  "key2": "437nbNz6yNDjMe3zNx49dx32xmZ2fAZS51NLSN2WPzhs2bhDpLUmNDrcgjKywpcZH2TdA2JxuNwfMsh2VjWaFL9g",
  "key3": "aVu3aytaSJSMm4mFcmGfh6RcvJanL27hsW28S6mecnhDBUMh98jg9sBnpUGJNcn6cSQQnZezJmn2VnT9C9ce9Z1",
  "key4": "TuFLdrNgrdtMrRiuXTqKNbjZ2oxy6Q6Vw6Ven6xmvF1iLpP5qSz9S6aSDx2onZDL4ygDeoXm2kM95pv9RzbWbSk",
  "key5": "gd5Ptw83PDz57ubfYMGnZbmdqWEatxvGNh5R1sJZ3MvpKaQvnApdpfSs5SKVYdk82kjuhHixrx9x8U2LoRMxAi5",
  "key6": "2B1bQ9645WHQ35ZTc92XwPSjpQSSZ1ZY6nXtqP2hLREb8takJxgjzjpy9SSpZk74T5HX98McB1oadErhdvzTYeCy",
  "key7": "4qHUMJkUJYr7gWPRun3ZZyh8LFFzfKJgzypHwvi9AwqCF73ahCjD4NREuyWV3MJgNyL9ryRVZL3biaDvpRVcfaco",
  "key8": "5gSjhA35xR4NQK2koXSETNXFpv6dzwwtcaFdVEpYzvRPTpvwSgNtfx9U5NX5EWMFkeDtJw2Znw6tfGkGPVsHB452",
  "key9": "3RAbfKeD1LGJMGg6AiaTTHFnnrufqASbCKxc6b3T5mduaU8ybdh59yJrPCbuhLUb2BfzJieexUgQmKYo1CWAhUP3",
  "key10": "2Lxc8q9XcXa7ipgVgZXVjb6N9QTgjK1YMN68pETBTDD87pgmvj9TDCNnaxauKmbrnnjAfpo7SyXx9huzQijGngH5",
  "key11": "cWkt7GjYYVaLTG36MxHJs8HBDaZvsVymMnD2HQVDvGDgzEZrLBN57gJe3wEhPrC7gf2SbxRgSaxxTbgvEoruKe5",
  "key12": "44JJb1qJndCZGQZchiNs983tjHuUGedMPEULbGCUoJBZe3GMSHtKPF7ctCGMX9bD5F6Pn6BiiSWPj31sjwPMkpKZ",
  "key13": "38zgsqvVE3J6qYeCxtGF1nXqBMyB3H8j3xmuw2Q9VvjV6Dgc2T8zpfcegHfho8WdAAGnscnxHwLqjrTtkivNRVvo",
  "key14": "4DBQpezCzdW3bbKodyszB6GoMUTFNaGC8V56H5SLSkszR9J6kexkk2M2Njv4TmTPHNJ1ttQKNv2L6xykZE7t8vGS",
  "key15": "nwzGyV6oBQubSqLuTapHvJxidpxQKJBL3BKihxfstR3Eb8tmZT3ZkCPNpcfKdooQjdaws67UZFwvZz6osFDrLcp",
  "key16": "39PzjdAeDriEv87Nee5cbbBijjqwBpx74C5BhRoU3wM9qaYuVtaP3RqVmBEYH8TfhFwShyJEPCLXZxV7q9zC8Frr",
  "key17": "4JiQW4MvKZJAehkbDEg5M6ZobivENfvVaQRAJXifrEDRyKchUGSDyA3GcLeHityNKphQFghf46mRU4k7AGv1t37F",
  "key18": "4nVtY9XGj9XP5sm6xGdNDUM1rdorpHBXPnH2naPrSK1acJsRQEDUpb5PNdMZ8Kv83c583Xxt8cpWAriMnDeVCY88",
  "key19": "2QHyAXGG26Vyj1KxKdZeo6RNVrLvkGhRwpHWnQXfDcKu6rnWttyVvkEWm55TtvkRM9mqGPb3BYXY6XAd5MrrFMko",
  "key20": "hsp5LSBsEWudraqgPznwwp4nx7cWjRpe4LWZzaQN2iDJ41nAXFWzMa7FFd9kTudroQaKYbAg2d9t2SD4jLMwLs8",
  "key21": "5dxRNtQ3Hx6jQ6AV2gZgyYFJqcpAF1RXWrRqYm6fyGKTbJHqRVQgpyDv68LXUjmZwNBZroNrZwu6y1AwYFc4G5xN",
  "key22": "3wfejEEhxPDbq2s5s61niZr2Mf8HhDCZPvd3Zft4r3atSord9RURo35nPWsA5y4HzDgzgBtkN7G8rP7nhSdHWLxC",
  "key23": "3DMgZY4wuPFaWdLMJpCd9WYwhXHuJMDDx22wQStDEo6NhadZuwgpmy7vPixLA4X8oZgFPjNrGGYoaoVq8bXV4BGG",
  "key24": "35dVodKXjsfBJvJbjyxPjAQNoJU9qvnrnD6HTbZhx3vz317CsNk6ZmEyx5kFPya51aeNjNsjjLtgAhNEk1BuHDG2",
  "key25": "33HgKwhm6fGQVHM1bKVeKtBkRzVB78jCkehPvxZZHXRQPEUovxHaihhGNpDsQFhcmzyfHjUqvQ1146UaugrKQncw",
  "key26": "4bxfXp5wCTnxPryZRy5oaAC92kfU1mhAog1Sjgkz5sjQHW9mg7cuftFcKfrSNChsrk6CsseF8iD9N3hndsPKWzXD",
  "key27": "5MgvkqnHPa3WGVZMgNsWRv9kz6vmHxfeN32ATrWz6xuc3hzhpp3S4eVG6jt2DhMtfHsrFvCWDE7yFPvoqntcCDdT",
  "key28": "52EowZtBdxkUmQsvgDeypnwhBYEzuup2NpDH82dQEghBWZrMjsKDKEv13JfyJTFwo4EDygE8EwEZSzyUrZx2pzt4",
  "key29": "2sXQg6heDxVSkrLBAomhYrbJPYeTfWihojxxDMUTdWaaaYo67S4rp69f2bfNAE26x66PgHtqgtXbUoyf65AdH1xc",
  "key30": "4RBCUAV6fKQjpAw7i7YP7DCfqfiQASc4ExG9T2xkxNuNXcs9EeQsALpU25U3TfFqP4LJRzYyxiJXiewnZX7MXjXc",
  "key31": "3tSseKHZhjGtGj7RZvfuVThA1xH1CU1DgnQWBkoJbDTgz7uAFsLa26Vc12Dc81vUZiDpGHnYUgWW3rPrGhjSfe5j",
  "key32": "Hcfm6FygA5bt7i7pLLXFTJGJMs5eKMVLukVNVaqXcw8iQMxjuDaACTcNYb2DT5E9QFHEiAVXRYBCQdETknAdnWZ",
  "key33": "2LEYZEYsgwiTuinFrXjNuyZhuKrPgwXzMYcDzdrPpfAa2S9UNxMv5GEz5qu8AwYhCYCVe2b3He5F8UjToi31h5YK",
  "key34": "3G1Rfj3yp9mQAhPd22pZVha5Es7S4JSJZgai6wrPAnvzTSkUdSrEagGNHjCs7Hy62eUwTaE5c8CYTg3RndHWi4vH",
  "key35": "4sJ6CTxrrHorRfz2jeip61ux7HvdVT4ddXt7NbyGUETJk93Ne2r3QXkT32KUdtkm3cfSRb6KtLziYddg4fwLwdT",
  "key36": "3ex82AT1whZsPC4EnpKv3d5tz4x5vykHZn5nkwm2BoRuTALYb1HDNNDf7URhQZi5dY7heMoC732zWNQsov6D4Xg5",
  "key37": "snwPbZmXUwGr3hkPMxq1fmkJM1Ly8MbEwUvArTvWVgWQo8hTWoEr3D673VjiSZqZFoDLMZh5PxAKo86626AUGyg",
  "key38": "27aYGurh5R9uf46TgSdq7peEouHNT8cWBPNv743aWkASVyKiWsi9R3RTLqQQ3Z8qaBDNgMEGoTRdmk23ocBhXXCy",
  "key39": "4dkgZ52g3AQhxrFhwYPjqifLsRqhBxeXB4PHKDdkkyUuj9TfHCnZUJvD2okv3tga8zfJFqQSidPMkr5qSyW57ycw",
  "key40": "245M7E3hjtxiigS36YuxcWYden9QHHjJ7ivDuM8jgRjmQt3oXL2mj7cwhFEL7YVT5StDkYdiD8qD8kCCJFm1dEP4",
  "key41": "2pLVDwfAT6ufxpP7AwaxJrsdGJ3UdDsVxCkH2mhCBVPyMpU13aWgLzdJiTj1D7kSyBoMFzjQBQTqQRXLP8SQEGaV",
  "key42": "3XEEu56PJWD9usaVbVVoAx39rqdfBLFZQA3yzLK91BuGYC4N1vjnchk7hqdPpUjBmbsW6U9bmut9fg8EGRcN9Gjk",
  "key43": "56nT2MxvV4wpHhA3dSyutSxjj3eaXUV2fC63ZYGTn6MRG2qKWDKgp1n2heeqeyA9J62K8PYYwWYSFNARXu19HBnw",
  "key44": "4xtFYNZxt8DKjeD3iLQoWgn36T9rmERwhLepGJJih192atancJLMKuMbdxeg3HpdcvNaPt8GZ5TREfJaY77oGnvf",
  "key45": "2gf8pX7HHEXSpxqEz8yZMFXZrqp23xL6Y4fMXTVtEawzzoJAmiXkcBBNzVVC6iBKaVF4bCrNh16yg1fD4uzwEnQK"
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
