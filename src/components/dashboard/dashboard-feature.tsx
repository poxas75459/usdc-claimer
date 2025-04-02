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
    "3sNg9aeD6X9bnuMwwYhDuKQEP8GQ3kSKgJrgo2BXQ5UonUv8EFjRoPa7Nt3P6VVNNW8f6fumHmLTMUE7BwQJv6jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TzTd27L6oKrzgxNFchpmQ4TgFWq8fDmo6fq3bFj927Be3v65q3LCrNTPYyA8jB88cFvmjHMjnZuR1wfRmwmnYJy",
  "key1": "5BacgnVd42WzJ1D648FgvNqqcKRp6MJxLwEx6f8egrwLSdBdFN516Eb8hDJuN6oN1EnTF5w2sZFVzKKb6xLofK6y",
  "key2": "3DqYS3SnB5F5WKGxfE3XMybV179zktEtYDsCNroQYknMGwVp5LyHPuJajnAfdePYPQdyMHTeJg8ibyX6ae2aaPzi",
  "key3": "ctG7CoAEz1DAoxSBZnDjCDs4KoG2jEhhGabLfjV2UWSnJPbudzKR5HMxDEsTH7qLrSb85ee1RMiLhPynyFhQMX6",
  "key4": "rAYt18htEZ3diWqAbZS1BLqEqesemyZkQChgZfVT4RmQexzk4vVsKEX47JYn6ZTHWZVg3kxTe6Z1mu9vBzCKTwR",
  "key5": "ewajxx5ePsHW6Nxg5uHii832yKM8miE5xtebeC2dsnZEk27YrJkqa5KoFbD9A4KnWB7EgG8n4ACCBZy3Wmm3KgK",
  "key6": "2mD3LcQ9qCgaZyEw6AbdyKhbtKEaekkQEyxjo1YT6z63LjwY3X7TykP8tm1VeV75HBi4ZV5xPiP6e87aE1bunkoq",
  "key7": "AV6vqfUVSfTyKeHBn7xnC9DPsCnR5VkausrRYw8KBPQMdpSDUKtAQYs9yT7Fmz5FBbBqaw3sWcktYGEDZoojUSV",
  "key8": "3aFqYvCgHG9WLmAzCmsW1JKUFctW9FxSUM9cUoZjxrveY3AspYucqoJfYiVrfqc8RUE3nyTu22F6SNwFyEvovGoK",
  "key9": "44waWkBX3UZx827bD8BdgBn7wvbpcPiNkMU85BrJW3AJXuwRNHH2THhrU8t6yY7uGs9kZ7oN9dyjyqWftp9dVSBd",
  "key10": "3XCRBSh1kD7YCJJrSFgtKAFxZMpb5GuJaQPQr9tWCXLfT6RtS5NRSJKSaEKj9ZcQvjDsosKnafUfPTm1HFUNSPVH",
  "key11": "2sj5a4iYLUbk2L37HJRHroXsCaZNEVPiHbHXyavVX6hRRJ4xZsD5Z2zKK86nMqRdEvsrMRfHdu46mzPn8dPnQkdc",
  "key12": "46XftzqMBoavAbo2kgxMNWygHrWQwgP22Fs7hmSXjPPPmg6HbuCh1Je7hdfCRxQw8uwzsWyV5hW9rVuDkdArFzzm",
  "key13": "2Dc4oHcN2eM4oLwCpG3ggTbTT9gnHBb6zqYjCLQYmFczzthPhZNjgfYAwFuDzH9P7ut49y27KWHqKEMomfoRBiMn",
  "key14": "28GMsUAu5Kq1rm7YQ4yvaFKzZUxEzrZ26JmBtjhGFUBKwtM872hZn14JTuC4FdLaNaYFVj2awiwKstbG9mbgyYaq",
  "key15": "3HtpoSNZKjwy5gfCmBN3t9Kwwzwnc648btvhMkHfY2bGGQrdNPoC2NahSA18sWHZ4e1MQiF869QL5FxeHAfC1VXN",
  "key16": "5r2fCMZVrGCaGaoYLjYDYcfSAUaB4arcvz5L3ttW8ntwsF13VC1eChkxoSbBSa2x9EUvxsfsMi36S2pG7jpkx6A1",
  "key17": "4hpPPQfu7duR3CndvQ47UKujjLQXCiiQ7HjmjT8yXeqpcE8CsBQQeSyCpmou5EdHiSVbzdJ3qKQ7JAJFr3UjLVeA",
  "key18": "x6hbbgfrxSp4KeqDauFkJQRpu58eedjaFfbU5ttAQKx1aBCxcTGjV7FPCpVHa4GYRtCXwA7RtA1BdLdNkbQSKSb",
  "key19": "2JvFgpYtpD3N3o7fDynKHHgDretX5aj8Y82RURkpikH7qMtQNJv5623oMjVdyQMDYEbvab5WDFTtqqbxAzYyM38m",
  "key20": "3sCCLjGCTbjG3us8fiEC55JSbtpX9QdyqRbZSi5T7VdWcs6DpsU1SbxmdiGP24bXBP74VGvWdvFVvGerJhGhVdp9",
  "key21": "39DwfmSXphtudY8WziD44ApCxSYHwKCVBcco9JourfGpYdiXiQnt1D5wVnw1MzcB6gEGvniagNf5swc5NwyDzSd",
  "key22": "53AKeizWwTEbBJBKAWhcZUGkesBKumfGtRYqxJiGVfA4yh2ZHh2sSF94Uu51ah2LPEmTWgp3CYDU1heSgdps9UAu",
  "key23": "5hmqpCb8o28VXN8HLcnbmaCfkSZam72rCvLd3mNJi1n4ahtKfgXqseZmXDQFi8BcbAk6mDkoFDkXxE2ATv4o5yNW",
  "key24": "3zPiGbXs8vdaiDNdKZce8MN2JP2ZwDRcdBHD6sugH54Z1SH7zU11R99e7hEewkNTqnVmSHE2ppKhfcLjKdvgAk8G",
  "key25": "EzDsZ6PzbnSRvzkGWZTyfZRs8YRjnkXjBjbHFDSz4hfnv7t1A3nySFFh9kA4sWHcmsuznBq1ka7tEtzKY1YW8T1",
  "key26": "4gVHPhxa3tAseo3gwutkqrF6soi3EWygvDvW5gjjN8MNqjKDysN7UEjEQ7nxR97od9SEhwHFaRxh6kF7ZnqDCtvB",
  "key27": "2YZG8cudLciwmy9nnFoi9dvWQgnDXWK8YrArQ4EH2vXJLzBaNxwHqpHcxdfJt9PrA9VVFkqHeK2TWQDTV2WoBAjw",
  "key28": "4dceXu8B2tjjJXk2y8Z2gDMRVQ8rw9cBobAvcskhmZ19UDZMhgPye67NNiNTRGBJDBgyR47nD6hGznTmN4rKqGZU",
  "key29": "32x5UJHXGi8DipnEqmje4JK6r4DAdE7jScTGN612p1oqSwC331MNH3JGy7WndSb61pvXyQAj8UAtv2HXtco2vvZF",
  "key30": "jQP5sXuHPBNkizZTREMgeKauqBpQjYhY8tdP2waR4qbz7FNMA2G93jawmwcmxSbyRuKmf3CfkSUMgENqo1WDLNg",
  "key31": "2B4LZi4wddpjEbPyUg9Td7vknuSWyuvBvVXYjQT2VsP2Y4gNiUBM18HMKAZPm8Zvuqyo51vCXCocrNCPZKRvUxJa",
  "key32": "KfSeXhbY5wtV9YFUehRcUuTKK8xVv7UqedspzpjCZi2JJQ8jWzRmDimxhe6iyWr9nyKH8Ez8K2nkJVkz2SLkr3j",
  "key33": "4wdeuF3urDoixXLU4ckGZSQsnWSNpA3uYC8NvQJU5ZjPSSBcDzSoeezo1RCtftG6YSA6njBdKTvxYRA4tQfFbTNw",
  "key34": "mSLzy6SD6bMd5Z69J63K2CTVv2CypnRy8C7vuWwVSDH6pqdLQMy9Vr6CEHqu9LS8XKn5qeRD23XA38c7EgFkm91"
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
