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
    "5zhw9zxyTHaeysBXDqKykGsyKZsKMKP8drkGKWj9W2epJafRdXne9MuT1BLsbT1kh93Ju6pvtpDh3i564tUJzJ9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kgdsepZyxjcCcevYkdx33C1qkYfQ9Wkgonj59NU18zNeUPBsQAjHsDCR6aHHW7B8SYpACs4ipTSUYrA4yCnuuhg",
  "key1": "58KFBsT5r2TRFK9VfHyRsHWNvmBKN79eE8V231zj8re4uwTb8tE1Epa5NgLeJaYxrqNvoMDcK4e1Xqrp45QoBnn",
  "key2": "4EkQrijjZeoSN9L4DfTpNH5jrvfN1CRmLpNPNxCq9Ya6RpYHPLZL2Zoru7WXwz1U3GvUu44RFxd1hHbFAKZJ1o7N",
  "key3": "2aGXo3bBfxvssPrcxgmNBYDQvxbtyM8yHNxgQAK8fdELMtyuozaEioP2vnv6CRe634vnwqanWvYBqif2jowkJdgz",
  "key4": "4r8koXLuiCrPaSyKakASqeJtfFsMmKmWxDibxekrc5J2sRTdYZoXwWXDPe3gKM3K2vPzXGfmbudzH4Qkcy9aMXk6",
  "key5": "3aSCxJSt321dDUJ9innfZidaq4nnzQd896Df9ZcX4caDNrB29dGfQ6YcA3aWPeD6htvkdTSVrR5pYWwyFd57Fusu",
  "key6": "582JjYNt1bQbNkoLekZxgtRdBmjjxY2MajYzywxU9yFoduQwh5aSRv8XfEWKqPhfSb5PyTURvzUSwFsvhHYSA6VT",
  "key7": "5NUZEHCDJze2ciUsATUe2TJ8a6yDXqtvgY5SgcsvSyeWWTfkvm7G4NNUWAfcZDhLs2dfXrrwRCB7r4Qqu9fDvp3",
  "key8": "2H1ePExCC4UTzBUPohvZzEBrnXpu1j5Z64jr2wsZo6ewpm1wqj8vrDA9GJR2TUPLXu7LQe1Ks2c7z39NeoVv1yBs",
  "key9": "5ZSEEqh6pc5C7Q38H2vVL4XrWfZqexieX3bq175j7vkB4ahCdc1e7nZyhQTRG9EHehCH3xy6NVLbTrKhVnQzqBzX",
  "key10": "46zHGJzUVUBeZEpRmpJvrQhgnr5rV629ASqxXaWLTqwBfqfedCPZTPX3PxE1yVwYPMfk7NAy9rLbLmCQYqy2qn5e",
  "key11": "2DFTZ34P1UmenaCpCciB6xrSbfJR3q46cRo1swJAgaMbnNrhExv3vKUeJudp9oftSNqKxLvQ2CsxR5YAnAT59tAA",
  "key12": "2RwwxYPCpuzaL8ZBpyHXj4ULE59caR5jAzRqQ5DqWFdF43gLjyTKmt9kDPZLJk2aEodY7qJ8iQLTv9fyKYx6pf7T",
  "key13": "aAHGoMia8eWGHwthpDTMNeKGWSegs2XWNVaWUMrdBTWPjR5b9n6FaPxVdmGFNDfpsqEuUafLASUawx1YiuEA5uq",
  "key14": "3qKSqjbdQTyrUAt8pHk397aE7pPuBBnxzgBznRYYSooXEmHCK9bEGe21pTKGWwUbatyofMimTX4niLq7j26rTVq",
  "key15": "3VzWdmgCPjKMvrrQ3KXqr7d3otFf64HFkh7hcWeuvAV5ns8YY9QdakUVdeq959ev3MchiEQS7wsyGavFpqkDfDxL",
  "key16": "4Dth4UEQRmMkWjHc5cKANtbcod78MCyKwUPFfeBjuN8yKJ33zmW3WxKmq2Xu8dpjNUtxLLcTALHQTjWpUoZQM1Vg",
  "key17": "4Np7PZWZHK35VX8F4pNA45HiXr2NG4ej1RrPE2qNLTpc7bvKGTeGcsjn6EKxNnVVhA97qhUqeTFv6mQBuExftRnH",
  "key18": "4WniXJ3oVD9wBNFvPqcpSjwePQvp1cGoCBjJ5M8Bp4vLeoMuLTbSdH5nEPNkXghq8AG9ecEGyRo2XE5gVrYnz2aR",
  "key19": "5QK77ea8GSp4yKCzUaFL4j7vZ3xJ8zwnekuipUvNxr67pDAyQ47UzN7HDKQGWmGg6rxirvsbWSSe5ab5TcbN5pdc",
  "key20": "3jVrT8dM3ER24UD4GSGigjQqjxiEVei4kGJu2iyWcgjXKigQqsoHKWJpKi1xzp3KDau1da3XzSV1VARdngbU5dQe",
  "key21": "593NAAfMWwNVMfzhGBQoVSMtDapJzZwWHwJgKx5C9Qozsi4pVoM1pK5gv6pPvmpuALVhYzV7qDPUkCrZ8F4AwKEi",
  "key22": "64naSGyyZ2dSjFvG9FosULDE9EP7okbgNDdb6GTJeNnkMf7ent8H4hKB4j6E8Qv6FAXeGcFszzva6xqBAh9rqpum",
  "key23": "2tU5Fq5brZ6QU5Vqp7znJc3U2DJuAp2e6cFWVWWHDPa3KG2UeVMARA3E7yg23s2UfzN5Z8VkH9WJ2oXc2hc1PozU",
  "key24": "2ZirG8hqvdm3Bm5JqjxfZxhbizJUECKbPehE9PTqgh4h6gjxpfzJ9WF5Fs5Bg7HxgqG6KMgGBHMLXCFdBucfXPKa",
  "key25": "4AqNZNGYuNK6qRcLKDcuyypvWRPiEA3V6EMZiPJbCVTaGowoRgV4uU2zcfu1Q2o1MqkUoDiMXGM9Mt4rZKhDTu9X",
  "key26": "4SwDx9NMuu6ujLB1XEyYdidvF26K55vuyvxp2aynAR7Yc4Hr5s1rEu7wFz8gNnHk2v4jY6v5VXJrFjd8mrfUbHYF",
  "key27": "55ektFaberhoEHpNuJux1jJMmkZiByCcnHT2xT9jv8EpoPheW5KXGaCpvMezKQYyNqd9vTe9CdZ8Vn7dinvVK5c7",
  "key28": "4EGJT9dGUfuh1DtAeAcLGcaTsjmH8DwvXC3ESpqSmz8PFHpZ5Pkmn3jrcY6r56xy46RZwGCkNaLdB4pKWfCutMo8",
  "key29": "2o3f6UYM1f5b8sg61XPwx4gCZW1xY68tonAmnF1TzbKuBeMCYKk81pWg8bgteGijGudqoAzYRRHrLdePajSABDBy",
  "key30": "HxUUNm6feEJWAroW8H8wvHMZayZZAFoMMHnYiiC15zVC3fC3Qd4Q6rCoaWt4ymmTT6UPKr2u7Cn8jjt728wguEZ",
  "key31": "2GGqjMzzdVaswSSNwu2KhGdbB6WQoopEdYAh9URVukcej47uST9kP1YxT4cAvwmqhwXAqi3axKvARqtAPKP15WC2",
  "key32": "2zH2ZqA2v8oeFcgQLT69QH8Y7d8J3BTfnVM4Qr8MUGcAKu1ubyYJrvjwqLeMkE5YGGP4rSZUNahotggh3FNvrYaA",
  "key33": "54Fh6kRRKpPC39mq9ZhLrjbi1pQU6Pqy5jS7QBzCPGF6bZJEFHQpnLpG9njG3rxh31BNmwrDQsnG7EwuEEoxmtig",
  "key34": "vXxW19tTMEnpGMN1n8LVt5CkWqjjFVyt5dxyTkqoWqfYhSDYnUPfH6mwcYz4Ch7jF2Gboiuy1NBTN9UTLMN6bxJ",
  "key35": "4ndUpxAdbqF6P9o5nTtnmaoapgLG8sCn24giksmJWydYAWyLvQrzA4scYb8q3YKRZ6dBzjTrYDErhomcSV64Govh",
  "key36": "2B9rZa1chFPQnASyee2zXK7Ef44WDhVbHMCkZH93fr6f8raREYwY4RUGLrDT75G4UDs53dTdEhsA4ZJ3uskw2CDh",
  "key37": "keCEBha671wCDTTonusJW2miCjEkptsuvpqsH4ACBQV4LPMLTJTpU1VN6rd1AnW9PJ8pQV6p44mLgNh3q31ZToU",
  "key38": "2fwBEjTjzJadr2Js1zUcNbjAErUhCBNx8C5VUTLCcVKonjzVKJdUJxwakMER9ZvwZMwEtmJk818BdrxU8gMH3bVd",
  "key39": "3d6ttL3UCArHHx2CD47Dz8wbR5Xeb5Rk5HxTv4PR68Byj4xhdub14o81Bg2mpULwAJf4p2PwKsqoVALr1nePrQuq",
  "key40": "3ued9tGG5KjKKcq2cHw1u152yTZdPx8K9CLPyEcFYRLWcM6MXt5PHrAJdM6Mbk1w6W6tnSDR5v2C88jf9WTLU1q9"
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
