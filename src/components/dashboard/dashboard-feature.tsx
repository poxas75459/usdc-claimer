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
    "2bvmdoare41DCWp2u6otzqp2zi2s8J9p7GJmehrNL1PmvPUhsYQJ83LfPm2Kq5LJz3DNMBEEMMA13Ad431F1zT3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ycNCi165XL7p39N5CkLESa24JF8J8VVYRab4EH3zH3LY6HpveamaHqc1VwSv6Upaci7pUo8mpVP7nse43HGxo2J",
  "key1": "2hP4HLRDyzRudtsKzDXRjvt1U5TPrq9teCH1jZ3rG3z5EKSrx4jRmRJjUsYQaXbT77v5CTx4PWx5GZzhYvWAEt1g",
  "key2": "3e9Kk1zTh2QnHWh86rYaJK2z6p1K8B5N85fHtNgD99zXTQ44sdnMVLUXvDyr22MTumSNik8SKHxw9VZcrkf9x1Ax",
  "key3": "47CcYDt2JtBqh5YtX29wtRzwmxeH1BFYRQT7Fp6AxqFXV6b6H4aVQgp1Q8s4T6C2Fvh4rEHUkSN2hTuM1zxSvZxR",
  "key4": "5Wzud8kb4wDg7mwS43LKyJ2vKyHyze7RTYv24tZsX1LkLmZmbwc8wXb2qek2XUFmNgwGPAnh8ibYZoY1jYe3f16x",
  "key5": "5tgTtNsVDwz3Zte38vn2ypufhsWyV5PqpnXokLwqHjNNxxN8AwLPBPmhvjX8WFKzQ4yikqvgiQYqhPt9J5eBPRZv",
  "key6": "V1RGusDNHmMtLv4S5Apr3dVnpHhAjLhYis2rZNfzMMd7PWBg924XJPHhHBJhMaV417jShxwkT3r28ZC5fHHAKya",
  "key7": "3p8WwoP9o3ijVURBn9ehYR1mCaUcEGraKXnJiSfeCZbaFC2gB8LjkSSs5DpMG31gLzus6fqRCEvbe7kFcSz6LwCA",
  "key8": "3FERSm6Xx1kCTuko3ksxapkygGtq8bLZXZKtkapJa2CBr6grhSyzzhetFpBZukjAeLS4TQW2krbjqh2XFJt7SR5h",
  "key9": "3aFMCB97tbXcyDGDumtCMVtfJcfeATfMSHDtitBoYZX7AU9kKdFtGF6GdJZyhNuPJ1321SGxiiXeDKUVY9XVTDvW",
  "key10": "5k5BBsmkmFbv94VrVybMZ8LzDq2CYhNCusf5XAykch9WC2aS2raK4W5xARvhtT3WvKmigS3fDUesZHH9bK6ech59",
  "key11": "4nwDTfRV2Bk4rg2F49tZLjUPkBA6oxryu6yUmHsHuNfWUQCUFNGGR9b6c13nPQYGNSXghSkzocNfRBUVRvEvy94i",
  "key12": "3VbwMCNtJqrqSXeikJfTKRi999TyLWzymNzpmhxYDKYFo6jsjznfH93KK6EuSyTAQWVyLMsr9D8r8utLDzA4yqBv",
  "key13": "YXS3w5EHiVJQRUfYZZPQhaLJpxpvGADVnSeAuSt7QRWcaxrBnhdvfiXba5UXWMgbest1YgMVhdXZL7EXE7SHc4S",
  "key14": "5WGrbM8vJEKHJJWkyNxWXHHC3aLNCv6xeC7SjxBmvUUGyVUEPmoCReGybX9DiZBDweWJHepXV4Aaibhw61WSsv2W",
  "key15": "37o4f9WVkB4Cjp36nmRqFr2ntHbhWTGrsNFzAW42TYaup8ceiTPkgnJ92UCfSk2soDdvfkWnABqWBmCGBfHw3NbE",
  "key16": "4P8Ne3axAsiHa18vTG4ntQuDi6ND6R9DgqovVDYhBqfFNeGAMw46jhYzxMD7qFUFyUNQcEa5y4SSsbGGQog97rwa",
  "key17": "4NFgCb4cDmLE1RxbreAagFnPn6dKNTCeuVJXYkZYJRYi6odc52MCpYTinBJjW9pjAsztPcuxbhxTcKskX4MUbnAd",
  "key18": "33ft74dgFtQKkbfDgcjKSNR6nfNpdt6Dmtasj8tXom6vx9PFVxpredaAGtUz4aZ2UgXYDsXdWt3PRkYFLvWUTGyt",
  "key19": "2rQLaA4HniEpjcRNVNrkSVzd4FtpKhiZwZyqQRmgMKgFDDNNyeV6QprUCFpzVgC4cW5zbQUAs2BW3aWD1rZ7Mv9K",
  "key20": "5TRKEaob9Y7mRYqXuP9t97qPxJ7Yf7QeesdBWi7UGLuGpVLbfnEtWJ9Jpkhf31eEeGDnJQNXsMpWfribLUTkutq2",
  "key21": "2sUKx2sYpPRamTzenhYYgwo1sKvcTAYLdkcvAxiZ9Y2U3AkPKRzsfmomFDS8pwFFGFSFZumcENtBT1Lk1LnRf2dW",
  "key22": "4e9GVbnkazRFWW9hieKo61LxSygQSEwS2yJL5Tyu6x4aLBuJTpeNbKZqKvRkEdAdXZmXtTL9vo8XnwbZ1Ae3RNMY",
  "key23": "2UKvB7DfEYsBELAfhZswCnKVSpHW8Szc2XBi87EkqUwqgFSzXWCLfebjX5s8ZBChQ5UCqeEBJTZaAUrVuhMDmtZW",
  "key24": "5tEMd2xY68v7sLuL7zDsHrVmh5nSqXNmapGV2QBBzsBW9SoLKTALiz1F3VHy1nPoZRneRZfA4xdkcLLsq22MGBzh",
  "key25": "3SjYRgTHVdVZVEqPbfeHyMu1Gp2CL8dNgDpvVf2iCJ34zWfhE1rvvpsqRLUf8aZSFPACuBCwSS1ioqNALPHQazCp",
  "key26": "4TwGeuFd5e3PGfTDYmk9G5WqfG8ELj4femGcGPvvcNECWJT1jdPqwMJgvFcZBzoGugnhVBHJK98kypgwBDHS2K1x",
  "key27": "zp8DDSuhPabZeYJkzig9YsqiNisu5ZLKoN7FtyhdDJN9fnCUSEarjieLyL1yfUHDW4FDJaNxC8TubZRr99dQgf4",
  "key28": "CCpVADcWquTM9PHrCgAhMxrPxfyWqEpj1dS7Fc3wQVfzn1JL2VHoMJYcopqsGNzLfK2HYkLDsUxSnX8aUewS3Dv",
  "key29": "5UcPvRojktZx9qXy8UuvfubZYwi7Kws8PLTZBcvL6K63V9EuVAvnUHpdmLHBadf9c3T5rBeWrX76hVS33Z2V54pU",
  "key30": "33fNz9paY2j9BeqpXhhfsFGYbBR4ntykCWH6bjGvk3pJUvSjX6xDrh4YBrJrmCYvYsqvLmoxwCUY7B7Y3AJ7xvdX",
  "key31": "3QdR4WKhXuuehBf5DyQepYQyjZgLq6i3DUkgwwWDEb1PQz3mkjQvmFDHY2FxkYWdKFCkwLp8uEogxXGmxc5obdZW",
  "key32": "BGX33JFPMmZhp4MVVRYqDSmsgMvN9hZqwMhiFh1pFSXQHvFeCcP7BumwNpAnWgzirj62CYnRjVjZufYPCfLWnht",
  "key33": "5eZJ36XG4h3CAKY1XMNxB4R8pJHmyB4C7wpJamY1jSCoF4BCFRBYccuUpE5AFmRuBabzWHFvMbqHjmCdtib6jyiQ",
  "key34": "cS99iCbs61QqJsAfXYgeM9AEGYMZ2fAt2SDEjRF61mCoPp68y2SakVu4wjEmrGPt5WkgWbaniVzJyqsXAGQ74Aq",
  "key35": "2WJCwXuf7RfFoLhXY7uGv43zDLQaeEdsCHheBHS9vWYqbpmWKSEAWafGvmDcBMp9SDFjpbECCLyAtMzCkZ1S1RhN",
  "key36": "3k2pTMcuvjijsijRk8q3HNTYRUM6SHxhwqDmgSiqURG81YtSdYCuoosr41ikUHe6cwjvfoc8JFime9kcFxhxKLrj",
  "key37": "jTK287ftAB2RhyEYj7aT2P7AcnuooJq5Pwv8RFT8eSXNTruuf64onHX3QcaidiNgQ36UByHViWpXX8YWdgmB3ii",
  "key38": "3o9zn8VQNcKfkF9FumYGKpSWn2nu5PbgG8cn2AeK3EdPYQqGvsQFpgD8rqFdZPqGuPPw1A3T7LUmwK9qi4rqA192",
  "key39": "r343fbXyCbSKUyQxJB6cPrgxaKvJQkA76VJni1feJkM7iu6hFhXJFPFo9ajCDAcnYKEQ6sc7jEEQ7QTNanzoVBY"
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
