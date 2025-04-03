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
    "4pPW8tXPNYTVXCLdC3T8ZfVWUWLBhayneJhvogzgV6ikVe6B41zsdkzdGwpATLBqNqseVZzb3X7tpFE9j7fCEYx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YHSSmty3NfPq6TfHZQn2bPXucam7887wXM4XdxtuPL36ZxrVUKHfZ4QoNSNkyfeuW6aGVKBMUM5VVDHSP1n6mVR",
  "key1": "nRxpkmm3HY7y3awwEj3mhTAzmX5YaHgkW8fM9gRPkhRXEHG8xe555RkVXNXybUrpqRHGJ99uKMWJS2LWGg8Ugei",
  "key2": "3HZ4233AWb1qVTT9Cfb8K7XC8rvVuokzmcspfMtXh7pnycMaZJ5r36PM3xo41MCr1stUrDV7GhPheifcDxrfE8qx",
  "key3": "SreYZ2J8VjMHhdAFi6fwaJeya4HWSTCGDTn6KyG4L4G1vo59CCey3tpbwAKmqc2YACxkYdfGUVq2twZKoc66D2X",
  "key4": "5Q21fw5VythKW6emLfBAvtApymQGeqJijk6BZWvsP2Q1tpj1FdGSX3U5xXdcfiDzmF5b61QHzU2Q36FnhkLMHFSa",
  "key5": "w4V3MVbaea8NawmeCru3TBtVukZie9eQGWvDpFBAS2GhpV88EkhJr9E9fdfbpdg362PYeL6NHuRLUGQrDf4VRw2",
  "key6": "5FtnGc4pzNhHtHDsU9DdDZ8auVbCTr4a51VbtGmqB8HkP7hVt48t2P5jfn4PbCCkQkEEGUaExFDh7EnL3ZSD74wg",
  "key7": "idhHeeiWPYwcYN1JhZ2N5kubmvjUsf2jza6WyNWAUJd6e7iJ6Zk3KFRENmg5Ldmg7nXMb1Dfahz8pQTUyBqPEZY",
  "key8": "58AtKRHkTuoX9hpq22LNFS2cp24j3xg7MfU2qJrMuahxdGTTwYrz4Ep1P89R7CQauwgdgQPnzYoe382Pbak2JCZS",
  "key9": "2x9NVjJDycZztV1bV1vfk1CN3rneaXzoAXuBu9ZxEu78AoUTvD4oHykFxbiDtW138apUnDxFiK6rX6wMEYPGsQCa",
  "key10": "3JuTCMoM6r8qBvKeEysqcGJGmw2WxZMmUH37szzTGMs6GCipuQTTeqP7tEQKmqGbo3o7UsthftbbUuxn91qxHrw2",
  "key11": "2ZZpTSEoWt4kwRRyxa9z9K1hMT1YVaYxoy5gcSCKkYcvBM5XjnzdJiLJHZgbP8ga1ZfaGmWumcX9ntWSRbVw4Pp3",
  "key12": "5bVtR5wTDPn1WpiVhH7ZcDahEoJCpC9yRAMSo91T5EuJwQpwzjhKLfeGyaiuJG8UuHBp7FGsk5CTjYKcs4K3QeK9",
  "key13": "3vNWJHQdASVw8MXBuxPz3qBoW7qhhhdVj4PHFoZq5yhVXPQgHtFy3fM47uLCJmHEA4nN5rwWxQeNChMC1evQf1jZ",
  "key14": "4YJKL71Ba3MFSM8ypwhfM2JE64EQi9fGXzgVr8NfUWXrcvPRZyrBZCYkQ789hQ9HPt65iJMeoxuDfRxuX6BLd2By",
  "key15": "2d5tqg624JRK8oNcACZsCB5NrbD95DzMTLJNMq7j5F3yhtw5K4GcUeuWs26mJ63rnzAQgaxKQDF9ZsRAPqqxWM9f",
  "key16": "4QpJXe8yh2VZoTGPhpqG53geH3c5xNxASMPRQMCWb3RgjGvYgWNCVRUeWR4Dd9jMjbvmozmiZ7ngpPUY9DZMFiTv",
  "key17": "5GdUm23dbcx3S4LaDjkQchiE8vmyL3rivopDeY62keiT4DBpGwM4XsZRTPjoJBzgebZjQmEHbvKEeVdAeYsqcgTc",
  "key18": "64Mur1y17cqJvwHchXMR59Zr6B3Mpw9XQjiEe2gmMcjp2MqiiNuDe6Gz75eKggWpHHJCgLQob9ediCCwiA4nXUN9",
  "key19": "5GZ2k1JJ8JTq2yXfPmEDxuxMk5YjdAvv97BtVunkWTTLgxDLW11s8nY8veyTwKYwCA3HnRBHeiqWsGcoaVmnEWEp",
  "key20": "4YQavZnJDgrnGMSx4JhvQ2ZYDcqC3qgAidWSrK3oPkihVK7QSKcJNua68MZXPAM1dw2xsWbeCxcQEjU6vZ6xSagF",
  "key21": "3dntTwWZN9SGaC6e8ubJMG2i3WyX4P13q7EYatuZKmdXnUiXthw1XxKcasFEXt2LpWsksDaAkr9EbVaJdV2m9Kcn",
  "key22": "5DXQp8TbVHUgYuMmJsgkrfvfYrvPigbf7WzrDovWtUanskcmMRYijkxSkKLB3cZ4D2TvYRHf51rktWg997Cpkpxv",
  "key23": "2B2Whfs71xLwNrv91Pky9zjHuk7Dik92zVMsqbYanDy3gv25JjbC2by6e5nRLH9okf8aJt5MWgCMRxGDxeohcXH",
  "key24": "4o4hTYtci6s6bhKttT5oyMU7zK4cCwy3cHuuegian9G2TaBN2NYPGDE7DUf9oPJqsuqp2txrwTtJqYQvckcX4f9N",
  "key25": "2KWmonTsPKWyqBv2xHSVrvaB7MQjfXj6c3F3V3X5BfC3wkVFVArSV98uXgVWphaP3vKzAECEk3TktYutaGVs6c1B",
  "key26": "4KunSqDaYQHw6TyKnLqSP8gv52GREVHYe8JBUPN6qi78QdruUtUEXQkmf2iAJV3sVfikQJfnkEmjGUGTkVG3LYCB",
  "key27": "49z7qvMivo16zh8DgdJntmzf255qncaQ5uW7Zo5ptXUNAf5avLnZzavvpLWLtLnm1frzCtFdEqFWuug5d6ZYn2U2",
  "key28": "36vPopEb939QF5m4dKGFGn5s29A7masYTezSWpV14w4FpqT6dWTbU1Nx1CwJjWdzhH8F8ArGwwNBZk3jpZ2tV7bp",
  "key29": "58A3yAJubU7CnhkftvdMXdLKGxWZzdYN1iQiVdHhDuX7WhqyVNE5M1EZ9G1gYg3DrVBcMUGsin6RmCgxhQoySzi8",
  "key30": "56JNXYJJVp9RCw69Xm8aCdJQym1TvnpPEv4XQvsLdFnmG62E4xkuRPhiBKyUzDtVgZRQ7wPPTWpTJmsZ83HWtxJz",
  "key31": "3B1XtoJjiqEVD5dJJWs6NhnixTtgirGJPDF7rqfJEmyqt416rrdzXcDX9v1bLzma1Swm8uc48fK6Ydevp3h6PRKb",
  "key32": "4c7vpW2XJ3rSVUUEdgKYPJQeUPGHSsdPDzWNrh7WndN9xChjjekWjU7tHqExVnbTfUVRiHfKVy3n1D63nYPUZKwW",
  "key33": "3CmiVGFyvi65gjbpRAgq6BjqbWRkPhaT4HHZiFH5d4SvnXPFJpU5WkzDMk7N23vBDnyc6uRWVGJpQArcRY53DSY8",
  "key34": "5yqZLKpBQeNFBQRsZ5CGeL3dvKNqvpwf88BHRhgJqixciNvCVktWiycan1iJ8PyLBAbWzb4qf1KXdhjeKTxsSaEz",
  "key35": "4i8hnb8hniUEci5mcZbeHoZxnUoYyxHmZ9bnGkzFP1cThXH9LGaDNwzLGiRXECTvHjCQJRG134baGtWPwGAZW3sT"
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
