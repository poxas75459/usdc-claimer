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
    "p4JoN7aaGMNtdb8c54CRcT6EMngKLjmuTghmFN9iDaMXX2fdFQ2jDUYRiqjkLibxVHoTsxh59SaJphq4CwqnwFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27MXNhSj5p9ADZaZriHaL4nyqjxiV5vt9Z4ipircRhpzF87wKcHuBpmZiDqwmZwJhWF5odAaCqHDbjmtG6s4ZSpx",
  "key1": "3s2zrdnNQcrHW3xEg1RhzHzWnPfj2Ydn1dpPzMCZw8JxAxe79eXiuR2iPWNvcXWtdauPpdZ7qN5gBfsRq5HFdGFD",
  "key2": "S6fUsbikyxspeiiG1knbjgVUwLFUS9YJSwts4wzWWZk9XxSuo1n13k6FQqQjnSYVSQC2PU7pwnpwXXSVW5oHETF",
  "key3": "3qQps35cc3TkR7qnkNoN28idzghPvxKFeckPjnZdZFeBz7GxBwt948A6e8qyqauAQcf88D8GzYXu3qukZRUu78DK",
  "key4": "2teCDDnsKpjruKNeK2F6fRu25bkXEUw84dYzeVMruffNRTuCgHzobypaPUHmy96WUot1NdnARPgP5qjSRNvcw893",
  "key5": "4NpSWhGXqtop1fqUXxjck3uw5n23DYSMmRT8Rp6MzJs2eLhz4MeCqU1Z32dFvEga5vkW8ynXFAfhGtw7nNbLMjxe",
  "key6": "pBhJdzyePquAnz4KGUJxpD77mvESFGjaUtYPCt1NdKDJBKWQhTW4n1E8tJ5xmfdGmTmfp28Wez7jeAUWqt8PJQw",
  "key7": "4oDhGJ8YFFXd2Pj2qDJ6cNBP224Cwhi1zEnEidEai8DdVpbUCFCV6kC6NVvUA6nAhbiZ4ACzkgdNtEzVwjBUjq2M",
  "key8": "2jKaESjrQMiu5i9vLabGRSjUrrE8n3cfTfASTxYkbxFSdSg9LPT8hAbcvYPKF8WxAqkHwN4XQs7gCKYArzyJ9YcD",
  "key9": "5RemrUdZLujCzbKiuqUboEWKy9nhNvF6afgdSawbyvXbMrecHD5wWr5ecBSqFDiopPkYPtVs5NnUfPDfQeZeZjnV",
  "key10": "5snvHAxyJRjYVVvHZugFuf1y5J8M2t1ap37TUbMmaPsdPPnWUhWvgTj3PuEnN69h2VnSHLs7W7EKJMMi1qQ5gbLd",
  "key11": "4YYBG4tTj9NjWTTnM16sDm8XTcTgdxQgaGWNAMEt64RY8SMgNGFYVEuNbwXUGT7m4giDPk1oo2c2LKVAduqNxrhf",
  "key12": "5oVjC9QnU1jVBRwtDJx7n571fpToYa8LSUSHms8bd89NdBBiPEAzUsG61BMJihzvGGYMiNsDHTSRJo1Q24r58v3w",
  "key13": "26TvqWdDzFmrQy1VMCTDfz3SZPMFvkERwaARXb6asgDockBFnb2A3eZimAjhuJQXxYYWaYpxCz4LXoiKGzNCZsUR",
  "key14": "jGjBZopabsAdtdTUuKohK9vtK4Gipnfvyof1pNrReoquvmkEEyCW27eLtuKzkGhkDYLc7kTdGGoAPJHJ1TqLkod",
  "key15": "s8v7V5sntPErc9TcQ4hKLAkrwfz1DJngs7k4eSEeu8SNgRtGrn5p6A2dfpTucthyoUyKMkPyXF4EGrvAZXj6kqM",
  "key16": "CdL1oxryCDQ4czoxZtyDdBiFNxdHrm2ih9evJwA9vLhVuztE81CTL5X6yGNGbCx2UGMqLHDcTit6t5JhYgB9ucv",
  "key17": "5DS7u2B4H2X6DuzYvmwsReApkFZnWzcC3eXDK8kEJPeNyVBHND7zkAv9VwARTwCVWZjg8BrjZQELzEbbcozrWeGn",
  "key18": "2yBSyEsKCLju7PREeioD2vZjJsbsuRFUfSw7dRFd9XZq5p9TTaggKceGMf8awZCowHBojb7qrk6gVF4wWdtqkVtH",
  "key19": "457cJ5CAJKcX5VtraThahyTaaHRiA92tPTxtqrudeoX1V5gRsHtoNnENpdp9HkZdw9V2NHQ39BBUoYM9K4LyPBBN",
  "key20": "26a8CRKmW516CUpGk5j3kcsktvz8xpYcnnXvgZ1Jz6pgqz63vADiAvJvx1cZr1rHfqCEkVcJRLa9cRY8MnA63QS4",
  "key21": "2zXvNyJKHdLttMKfrtBPjPhkggSdrgdDPUe2K59VfnteoHGUVgXa2mLXVzjJ38mDYvt5f3n8qy3VhcmXJTcmHBL8",
  "key22": "4mxADY5WQbuicuYdpcPwK3RrHbvxCMCmKvkFcM7BLbhMjnD7cY1rJ9ffffA4nNLkj4qQnWsNtkFs7yPGFtd6P5ff",
  "key23": "zLnqM15hVTMxeyY6huTZ6EQHekMDXobifRdpgRN5XuRkxaSQpQYGXTxBoEhnxaqUQEabbDpSP584dKftWuuezbY",
  "key24": "3nYcw8eShFRecnpd8sP3DJgWJPgPb7vpmUbKwvmZveYrJG42jqQfzLcVfuL5zKLcGnxHkDqgacXrnErnRTpwHj2e",
  "key25": "3MrR8TDFsV4YuRZ4Q6DhKnr3VrnRrFCb14wA6oF6k6XvVGa5RizeFHvwg4SygHxeYmAvq8BdZW1hRkpMod6DmHVr",
  "key26": "2CrKrQvHjmQfcZ7JQvPPxHcmMp9fFuU9skqz2fJRafYept5Y6eeN8Lgh6yFtfyHm2ZbVFQLPLTCCAD7JBFrE761M",
  "key27": "cjG7XeppLeEMEFkWt2T5umPB5NBGo2kjZMm4HoAPFUc1XjCW1aK7rMU9PaKCywLQkMEynRsZnYmT4ymQ2PH81Gt",
  "key28": "2EdCNA7PfE9Gf7E1iH5VisLKnEsremVpNkNo5D2HtwEyHY9optPbbUhSmzcgzUfv3cFdZaUBnbStS93ANcnJD7xy",
  "key29": "dRDkv7kj7kbvH4GwiLoX9S7jzATTTdioY2nz8ha7SokPhkPhZZAowS1w5tSto8SE5exHR8iHr3vZKzUVnPiJLik",
  "key30": "67WVo6pbtfUF9dVEGnkqXbaoMqsUnpbEF1NvjJx9hKzjGBuQRmfPmZGsPwyFfn9FGRaFVAkh2fbXfB6hyuN7zbBW"
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
