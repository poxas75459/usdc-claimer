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
    "3M6eZPyaoTtQKoAFtVvAEFWv8o8M33bAemYRx7uuRqngXQ2ytzSTzWAgvfcu1vqQzYmyteK8ByoPerNRxCwrCDS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bg2i6NPsufMFX2D9uwewdVYxYFbofjEyLJomh3zCnqhPYEeqSo8fAqCjzLx2V3gamKfqkYWqcp1D3UfazgZRbDf",
  "key1": "QyxuSP4cfxW3R1M8C6B8bKfo4JMsy4ze5sgT5PsA1rRChXCJj4p4EAcFsrXzBdcVxtdnEeWXREreNi5nfGp9raD",
  "key2": "5dEFCwYNL3SLTCynUB1qiRK2Smm4QELrKGKceMDaRf3wAnoBfpSfyqSTc9JMCsLGfBsaqcS46SMbo63YDuYGRig8",
  "key3": "5rfUA5tczuAbrrEDkQ9wDd9XSw5n8o74piTgVMvoUy3zELtwRZ3DoFbPiC98iQCe1n1hPeV8MFzg3rxQuyH3NjiA",
  "key4": "392M7cdkFSoztapfFRGeqfZd8n3MDuk8ijCZYGtpQK558QhTtdy1CeKGFWsKBTRU8QYDS3f9KNHFxWF3P6C2j9Aj",
  "key5": "e9wLYXrfsPYh8gRpFh9rxwUQvaARppz6SLFS8JiHMpSG7EwV3UxRbT89L9961FpjjfzhopuUtG6GSQP84t9xp66",
  "key6": "3yn9BHt4YfA7KQn34j3PopWYqPGMpw9QsFA5wEqRHidmQJQB3BBvwjECbDt6ZmoP8X8rSrQKECcW9NV8DnhTUV7C",
  "key7": "4CBvFF1AAePAYGswVmLQdN1mQSjLzbMrCTv5sDQTH7zXjZ2SVAojwxu7r95bmVomFduj3uTGxfMwaknwFdZZcWgv",
  "key8": "4SPVH4U1a7zevddmoYDtQq3CdQKaerH3SjDgZeawsiF98c41t92YEG4q7rJyBZDvY7i9Utvmx7ij47kNHDjBkJrW",
  "key9": "e57RAVV2HgmtF9hf4JwApWj9KrkXqYQ6AUYV15cNAPhnukcV3TPmty4taveFtMqGu8KqC9gvsfpsKVhUQRyxKQP",
  "key10": "5MarkFfpqgT5aMfPZhQnW7Kt12FtkGZb2C6wVyxmwau8uTAwucZj6De8fXHbJrqB1etHUhsS7Rp8W88QA9aff9vx",
  "key11": "3n55KdXf6va3rkPGYMhXWbwiRMTkkatpRV2UpmGbdhYSWjWX4D57L1U9Q9Da6h21fGN1GqHpKmECDdeuUvkyGVCj",
  "key12": "27uGJPkDGFcQfiMNo3GjYZtWye89xAzxtwgtHeYyn5suFA65SDztjfUFoSmCsDZxXcXxFT4zyGygFqD4Aqm5uuwE",
  "key13": "4xEXj7w3SqjMhXgdw3mzQmxH75sJXghMsGwvhsP8ZimWD8iH72mzErNFbKJv3XS7wdTLxs5watyvG6CPArojvjmu",
  "key14": "4PQJkXwyuUzzs9Xieu8o9ejg5WvFcVMt4TaHvCkddvmZnRc2WsGNuXbZLad6hHYQA4AZ3TQTe1pfGZs2hkLkS6Uk",
  "key15": "4pWMaHVtXftGrENV9MmNYFJywSWw8sJHb9W4KqsG99kkuZcYtrRWijKziGgLFwBxCffPvE1yvE2xrCMh53uhwoWW",
  "key16": "4DCjupiTpWEGTo5vG9bWgC4MZsakDf43BSBmx1UP9Tw4bubcsMrjDA33fFeuPgCY1QqXJrNuQcQLDgae5v7CoJ1t",
  "key17": "46ZJ6DkKuT5THrUtiZhjVqqhECjEphTocvBpUcVjGMmHuXreLdCY9tTP3gMif8RUV5CjavxFhPUrkEd6creDkbrE",
  "key18": "d66jTK7rWk3cRxwMqN1LUKxYbMyEx6StVJC5VAaiCLwWNDNTTSPHSouowisQQKzMaPsTJCc7BFnbLCfgRfooMzn",
  "key19": "2jNz1Fykv7yzN1jQvUAafura6CZYD997PPTeG8odFmTTPaJpW3Fn9hXHroHGChpwbEiV1iKrcUUEkNppKmPcoT38",
  "key20": "Gjfhqz6ghngfzq46iPn84wXsB8MsSQRYsmLdgpaTYUZW561AoWmfmnckbpLXmRwcXfpzDd7aJJrhvjS3pgVeosv",
  "key21": "3HPWGUZQWXqWqSa9rJFYuoDMbebagyrtrBrJrkaA5PDYE8fLu9eKPLqJBbrMUu3drJnh7okBQ3YsgFn5BgGidkv6",
  "key22": "2FZba3Cc54BLvVZpSwHyyBqtf5Mt4yosEMNw38Ja9vZGxtG7diSRcPHHjujrsTiaeHiKqtWzXzuriLEr54xtCM5a",
  "key23": "3GymRQaYo4PQUkZ5bm9443FasCdSQM89G8YQgSjmYdSyB1txFEq1LE3bsiWUPmTNc4N333r62dM9aJA1Fa2qh6ih",
  "key24": "3YcM9zr3heFDJ1zaGq8xLwj9dpEnL9746SboRzU4BV9TWVx8k2jtLLW59vwH3Py3mHvXt8LJAd9DUQMGHLkZZ1Kt",
  "key25": "4yFRLcRX9v4PZejXuprTHJxpjRPyKMPa384ohkHqRHh8HcNrY6Kn9gBqcCt8Qes8615Zk8wETLepM7wFVQKm7hEi",
  "key26": "5Pb3HPFGtyffC1XZdJfruGqFBc4rgQTx37FcR412HGKpEEgvfpXDdQ1ZJhqYnmcMr4jPztTkxppvHZfiGnNb2wkr",
  "key27": "4KGY3aDAnb7FVVTkRQpBwW5XdhRLmCppckqHtaLvQZYcmfrVXJcNCNzF6PJJU2XG5RWUcdvEHMaQ7BKm2UAkE1kd",
  "key28": "3fGhyB4BfLEr4HxKAuhv2KQJt5bdMFaJQGDf91mc3ejxDzxujT6EdujBkHKejZ2bKxq2QFGx4XLoFNpHCY5S61f4",
  "key29": "HdjwpKyEAiVQWscpfu43Sd3qJd2ECkaMsjxNHBGDRRMj25g2PFNqoMk6iuKCFeyVDVpYYgaRVxz65zaL3au74cW",
  "key30": "3RXm339zP9NN4mKaJ5ydhkvvDpbKhJgW95aPeBwQymkzTKQf99pcohHoqah2p3umQQZ4ubKrELJTnG4u2TRCvtUC",
  "key31": "4K76HeHVM2ht1gnZ8XhBT1stM2ifm8Rtzp12xWDdZGNuau7e5VEfYX8BByC6WwE8mJ8t94xz9Porj36hj9F8qbzC",
  "key32": "dY5muJLArxEeNV9DWBDUVJ4fo6CsLFcU8fPL67HU6b3penqpumE7LNhJaAVPesspGFLphXspkyfye3vjVNquRD7",
  "key33": "cPJaXrdt6dn752PiuSrAYnMoyg1zF5GA5EQ4XmdVvyybzJzViSrbh8yPXo9791s5SrMwtsS3iywnZ6NfBRjC21X",
  "key34": "3wpSZ6fWGEhjsKincSgjg3EciUB7RRiy9gWSQk8ptAzZDEAeGL2qJo2wisaWRNdvjpH9jLUsotnjb8ZZFMNc4R9u",
  "key35": "2LCwywvnzq7Vmzkb5k4FKwpaRZkFCAXMoaX4q3cAzebyWjfw5US1WDdC9cbcixYKGVzAhKp8Eie4nHb3spaAxiYX",
  "key36": "5RA9BPcwyddw8UpkfmqvtdfpqmAVFu94pJuvJ9vADLD4CboassKjfsWAD6ox1AzMa7muqYZ8R173Sz2ZDpgcBLFa",
  "key37": "51ypwKwiHQNY9L7hhnWtzoLU2aWooDzupYm8fasGqAgzHAXjm8f9pmMQm3LC3BxCPhNnEPvNUVYPWGRoGsfi5P1J"
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
